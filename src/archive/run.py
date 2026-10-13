"""Archive les mesures des balises de la journée de Paris écoulée.

Une seule écriture par jour, à 1 h du matin : la journée est terminée, donc
complète du premier coup. Pas de pose partielle le soir ni de clôture le
lendemain.

Pas de 30 minutes pour tout le monde, et 6 minutes pour les balises dont la
fiche le demande sur une plage d'heures (`pas_fin_min`) — Reventin et Étoile
entre 11 h et 19 h. 30 minutes est le seul pas qui tombe juste à la fois sur les
6 minutes françaises et les 10 minutes suisses : décimer ne déplace rien.

Sources, appelées en direct (les mesures ne sont pas dans le dépôt) :

- Météo-France DPPaquetObs v1, `paquet/infrahoraire-6m?id_station=<id>` : les
  24 h écoulées au pas de 6 min, en un appel par balise. La rétention est
  glissante, donc un run en retard laisse le début de la journée en dehors.
- Météo-France DPObs v2, `station/infrahoraire-6m?date=<créneau>` : une mesure
  par appel, pour rattraper ce que le paquet n'a pas couvert, et pour tout faire
  si la clé ne porte pas l'abonnement au paquet. L'historique 6 min ne remonte
  qu'à environ quatre jours.
- MétéoSuisse OGD SMN, `ogd-smn_<id>_t_now.csv` pour le jour UTC en cours et la
  fin de `ogd-smn_<id>_t_recent.csv` (requête Range) pour ce qui précède : un
  jour de Paris commence la veille en UTC, les deux fichiers sont nécessaires.

Usage :
    python src/archive/run.py --specs _web/assets/balises_specs/balises_specifications.csv
    python src/archive/run.py --specs ... --day 2026-10-11 --force
"""

from __future__ import annotations

import argparse
import csv
import json
import os
import sys
import time
import urllib.error
import urllib.request
from dataclasses import dataclass
from datetime import date, datetime, timedelta
from io import StringIO
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[2]
ARCHIVE_DIR = ROOT / "data" / "archive"
INDEX_MD = ROOT / "index.md"
PARIS = ZoneInfo("Europe/Paris")
UTC = ZoneInfo("UTC")

STEP_MIN = 30
PEAK_FROM_HOUR = 8
PEAK_TO_HOUR = 20
RAW_BASE_URL = "https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/balises"

MF_BASE = "https://public-api.meteofrance.fr/public/DPObs/v2"
MF_PAQUET_BASE = "https://public-api.meteofrance.fr/public/DPPaquetObs/v1"
MF_PAUSE_S = 0.7
MF_BACKOFF_S = (15, 30, 45)
MF_HISTORY_DAYS = 4

SWISS_BASE = "https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn"
SWISS_TAIL_BYTES = 512 * 1024
SWISS_WIND = "fu3010z0"
SWISS_GUST = "fu3010z1"
SWISS_DIR = "dkl010z0"
SWISS_TEMP = "tre200s0"

MS_PER_KN = 0.514444
KMH_PER_KN = 1.852
KELVIN = 273.15
TIMEOUT_S = 30

SOURCE_LABELS = {"MeteoFrance": "Météo-France", "MeteoSuisse": "MétéoSuisse"}

ARCHIVE_COLUMNS = (
    "day",
    "station_key",
    "source",
    "source_id",
    "valid_at",
    "step_min",
    "wind_speed_10m_kn",
    "wind_gusts_10m_kn",
    "wind_direction_10m_deg",
    "wind_direction_card",
    "temperature_2m_c",
    "latitude",
    "longitude",
    "elevation_m",
    "fetched_at",
)

WEEKDAYS = ("lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche")
COMPASS = (
    "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
    "S", "SSO", "SO", "OSO", "O", "ONO", "NO", "NNO",
)


@dataclass(frozen=True)
class Station:
    """Une ligne de la fiche des balises, telle qu'elle est sur `affichage-web`."""

    key: str
    name: str
    source: str
    source_id: str
    latitude: str
    longitude: str
    elevation: str
    fine_step_min: int = 0
    fine_from_hour: int = 0
    fine_to_hour: int = 0

    def step_at(self, slot: datetime) -> int:
        """Pas de temps de la série à cet instant : le pas fin dans sa plage."""
        if self.fine_step_min and self.fine_from_hour <= slot.hour < self.fine_to_hour:
            return self.fine_step_min
        return STEP_MIN


@dataclass(frozen=True)
class Measure:
    """Une mesure ramenée aux unités d'affichage : nœuds, degrés, °C."""

    wind_kn: float | None
    gust_kn: float | None
    dir_deg: float | None
    temp_c: float | None


def configure_stdio() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")


# --- Créneaux ---------------------------------------------------------------


def _steps(start: datetime, end: datetime, step_min: int) -> list[datetime]:
    """Instants du pas `step_min` entre deux bornes, `end` exclu.

    Le pas avance en temps réel, pas en heure locale : une journée de Paris fait
    46, 48 ou 50 créneaux de 30 min selon le changement d'heure.
    """
    slots = []
    cursor = start.astimezone(UTC)
    limit = end.astimezone(UTC)
    while cursor < limit:
        slots.append(cursor.astimezone(PARIS))
        cursor += timedelta(minutes=step_min)
    return slots


def _paris_hour(day: date, hour: int) -> datetime:
    """`hour` du jour de Paris ; 24 désigne minuit du lendemain."""
    if hour >= 24:
        return datetime.combine(day + timedelta(days=1), datetime.min.time(), tzinfo=PARIS)
    return datetime(day.year, day.month, day.day, hour, tzinfo=PARIS)


def day_slots(day: date) -> list[datetime]:
    """Créneaux de 30 min du jour de Paris, en heure de Paris."""
    return _steps(_paris_hour(day, 0), _paris_hour(day, 24), STEP_MIN)


def station_slots(station: Station, day: date) -> list[datetime]:
    """Créneaux attendus d'une balise : les demi-heures, plus sa plage fine.

    Les deux grilles se recouvrent aux heures et demies de la plage fine ; c'est
    bien une union, pas une somme. Reventin attend ainsi 112 créneaux : 48
    demi-heures et 80 pas de 6 min, dont 16 communs.
    """
    slots = set(day_slots(day))
    if station.fine_step_min:
        slots.update(
            _steps(
                _paris_hour(day, station.fine_from_hour),
                _paris_hour(day, station.fine_to_hour),
                station.fine_step_min,
            )
        )
    return sorted(slots)


def elapsed_slots(slots: list[datetime], now: datetime) -> list[datetime]:
    return [slot for slot in slots if slot <= now]


def plan(now: datetime, day_arg: str | None) -> tuple[date, str]:
    """Jour à archiver : la journée de Paris écoulée.

    Les cinq déclenchements du cron visent tous le même jour. Le premier à
    partir l'archive, les suivants le trouvent déjà fait et sortent. L'heure du
    run ne change donc pas la cible, seulement le nombre de créneaux que le
    paquet de 24 h glissantes ne couvre plus et qu'il faut relire un par un.
    """
    if day_arg:
        return date.fromisoformat(day_arg), "manuel"
    return now.date() - timedelta(days=1), "veille"


# --- Fiche des balises ------------------------------------------------------


def _int_or_zero(value: str | None) -> int:
    try:
        return int((value or "").strip())
    except ValueError:
        return 0


def fine_window(row: dict[str, str]) -> tuple[int, int, int]:
    """Pas fin de la fiche, ou rien si les trois colonnes ne tiennent pas debout.

    Un pas qui ne divise pas l'heure ne retomberait pas sur ses pieds, et une
    plage vide ou à l'envers n'aurait pas de sens : dans ces cas la balise garde
    les 30 minutes communes plutôt que de faire échouer l'archive.
    """
    step = _int_or_zero(row.get("pas_fin_min"))
    start = _int_or_zero(row.get("pas_fin_debut_h"))
    end = _int_or_zero(row.get("pas_fin_fin_h"))
    if step < 1 or step > 60 or 60 % step:
        return 0, 0, 0
    if not 0 <= start < end <= 24:
        return 0, 0, 0
    return step, start, end


def read_specs(path: Path) -> list[Station]:
    rows = list(csv.DictReader(StringIO(path.read_text(encoding="utf-8-sig")), delimiter=";"))
    stations = []
    for row in rows:
        key = (row.get("station_key") or "").strip()
        source = (row.get("source") or "").strip()
        source_id = (row.get("source_id") or "").strip()
        if not key or not source or not source_id:
            continue
        step, start, end = fine_window(row)
        stations.append(
            Station(
                key=key,
                name=(row.get("display_name") or key).strip(),
                source=source,
                source_id=source_id,
                latitude=(row.get("latitude") or "").strip(),
                longitude=(row.get("longitude") or "").strip(),
                elevation=(row.get("elevation_m") or "").strip(),
                fine_step_min=step,
                fine_from_hour=start,
                fine_to_hour=end,
            )
        )
    return stations


# --- Lecture HTTP -----------------------------------------------------------


def http_get(url: str, headers: dict[str, str] | None = None) -> bytes:
    request = urllib.request.Request(url, headers=headers or {})
    with urllib.request.urlopen(request, timeout=TIMEOUT_S) as response:
        return response.read()


def csv_rows(text: str, header: list[str] | None = None) -> list[dict[str, str]]:
    if header is None:
        return list(csv.DictReader(StringIO(text), delimiter=";"))
    return list(csv.DictReader(StringIO(text), fieldnames=header, delimiter=";"))


def number(value: str | None) -> float | None:
    text = (value or "").strip()
    if not text or text in {"-", "/"}:
        return None
    try:
        return float(text)
    except ValueError:
        return None


# --- Météo-France -----------------------------------------------------------

MF_GUST_FIELDS = ("raf10", "raf", "fxi10")
MF_GUST_DIR_FIELDS = ("ddraf10", "ddraf", "dxi10")


def first_number(row: dict[str, str], fields: tuple[str, ...]) -> float | None:
    for field in fields:
        value = number(row.get(field))
        if value is not None:
            return value
    return None


def mf_direction(row: dict[str, str]) -> float | None:
    """`dd` à 0 est le calme au sens OMM, le nord vaut 360.

    Au calme la station ne donne pas de provenance : on reprend celle de la
    rafale si elle est fournie, comme le fait le site, sinon la case reste vide.
    """
    mean = number(row.get("dd"))
    if mean is not None and mean != 0:
        return mean
    return first_number(row, MF_GUST_DIR_FIELDS)


def mf_measure(row: dict[str, str]) -> Measure:
    wind = number(row.get("ff"))
    gust = first_number(row, MF_GUST_FIELDS)
    temp = number(row.get("t"))
    return Measure(
        wind_kn=None if wind is None else wind / MS_PER_KN,
        gust_kn=None if gust is None else gust / MS_PER_KN,
        dir_deg=mf_direction(row),
        temp_c=None if temp is None else temp - KELVIN,
    )


def mf_slot_url(source_id: str, slot: datetime, base: str) -> str:
    stamp = slot.astimezone(UTC).strftime("%Y-%m-%dT%H:%M:00Z")
    return f"{base}/station/infrahoraire-6m?id_station={source_id}&date={stamp}&format=csv"


def mf_paquet_url(source_id: str, base: str) -> str:
    return f"{base}/paquet/infrahoraire-6m?id_station={source_id}&format=csv"


def mf_stamp(row: dict[str, str]) -> datetime | None:
    raw = (row.get("validity_time") or row.get("reference_time") or "").strip()
    try:
        return datetime.fromisoformat(raw.replace("Z", "+00:00")).astimezone(UTC)
    except ValueError:
        return None


def fetch_france_paquet(
    station: Station, slots: list[datetime], apikey: str, base: str = MF_PAQUET_BASE
) -> dict[datetime, Measure]:
    """Les 24 h écoulées de la balise, au pas de 6 min, en un appel.

    La rétention est glissante par rapport à l'instant de l'appel : à 1 h du
    matin le paquet s'arrête une heure après le début du jour archivé, et chaque
    heure de retard du cron en découvre un peu plus. Les créneaux laissés de
    côté reviennent à `fetch_france_slots`, qui les relit un par un.

    Une clé sans l'abonnement `DonneesPubliquesPaquetObservation` répond 403 :
    on le dit une fois et tout passe par les appels unitaires.
    """
    headers = {"apikey": apikey, "accept": "*/*"}
    url = mf_paquet_url(station.source_id, base)
    try:
        rows = csv_rows(http_get(url, headers).decode("utf-8", "replace"))
    except urllib.error.HTTPError as error:
        reason = "clé sans abonnement au paquet" if error.code == 403 else f"HTTP {error.code}"
        print(f"  {station.key} : paquet indisponible ({reason})", file=sys.stderr)
        return {}
    except OSError as error:
        print(f"  {station.key} : paquet indisponible ({error})", file=sys.stderr)
        return {}

    by_stamp: dict[datetime, Measure] = {}
    for row in rows:
        stamp = mf_stamp(row)
        if stamp is not None:
            by_stamp[stamp] = mf_measure(row)
    return {slot: by_stamp[slot.astimezone(UTC)] for slot in slots if slot.astimezone(UTC) in by_stamp}


def fetch_france_slots(
    station: Station, slots: list[datetime], apikey: str, base: str = MF_BASE
) -> dict[datetime, Measure]:
    """Un appel par créneau : DPObs ne rend qu'une mesure à la fois.

    Le quota public est de 100 appels par minute ; la pause tient le rythme sous
    90, et un 429 ou une panne passagère est réessayé avec attente croissante.
    """
    headers = {"apikey": apikey, "accept": "*/*"}
    found: dict[datetime, Measure] = {}
    for slot in slots:
        url = mf_slot_url(station.source_id, slot, base)
        for wait in (*MF_BACKOFF_S, None):
            try:
                rows = csv_rows(http_get(url, headers).decode("utf-8", "replace"))
                if rows:
                    found[slot] = mf_measure(rows[0])
                break
            except urllib.error.HTTPError as error:
                if error.code not in {429, 500, 502, 503, 504} or wait is None:
                    print(f"  {station.key} {slot:%H:%M} : HTTP {error.code}", file=sys.stderr)
                    break
                time.sleep(wait)
            except OSError as error:
                if wait is None:
                    print(f"  {station.key} {slot:%H:%M} : {error}", file=sys.stderr)
                    break
                time.sleep(wait)
        time.sleep(MF_PAUSE_S)
    return found


def fetch_france(
    station: Station, slots: list[datetime], apikey: str
) -> dict[datetime, Measure]:
    """Le paquet d'abord, puis un appel par créneau pour ce qu'il n'a pas couvert."""
    found = fetch_france_paquet(station, slots, apikey)
    missing = [slot for slot in slots if slot not in found]
    if missing:
        print(
            f"  {station.key} : {len(found)} créneaux par le paquet, "
            f"{len(missing)} à relire un par un",
            flush=True,
        )
        found.update(fetch_france_slots(station, missing, apikey))
    return found


# --- MétéoSuisse ------------------------------------------------------------


def swiss_url(source_id: str, suffix: str, base: str = SWISS_BASE) -> str:
    slug = source_id.lower()
    return f"{base}/{slug}/ogd-smn_{slug}_t_{suffix}.csv"


def parse_swiss_stamp(value: str) -> datetime | None:
    """`JJ.MM.AAAA HH:MM`, en UTC."""
    try:
        return datetime.strptime(value.strip(), "%d.%m.%Y %H:%M").replace(tzinfo=UTC)
    except ValueError:
        return None


def swiss_measure(row: dict[str, str]) -> Measure:
    wind = number(row.get(SWISS_WIND))
    gust = number(row.get(SWISS_GUST))
    return Measure(
        wind_kn=None if wind is None else wind / KMH_PER_KN,
        gust_kn=None if gust is None else gust / KMH_PER_KN,
        dir_deg=number(row.get(SWISS_DIR)),
        temp_c=number(row.get(SWISS_TEMP)),
    )


def index_swiss(text: str, header: list[str] | None = None) -> dict[datetime, Measure]:
    by_stamp: dict[datetime, Measure] = {}
    for row in csv_rows(text, header):
        stamp = parse_swiss_stamp(row.get("reference_timestamp") or "")
        if stamp:
            by_stamp[stamp] = swiss_measure(row)
    return by_stamp


def fetch_suisse(
    station: Station, slots: list[datetime], base: str = SWISS_BASE
) -> dict[datetime, Measure]:
    """`t_now` couvre le jour UTC en cours, la fin de `t_recent` ce qui précède.

    `t_recent` pèse plus de 5 Mo et n'est réécrit qu'une fois par jour : on n'en
    lit que les derniers kilo-octets, soit une quinzaine de jours de mesures.
    """
    now_text = http_get(swiss_url(station.source_id, "now", base)).decode("utf-8", "replace")
    header = next(csv.reader(StringIO(now_text), delimiter=";"), [])
    measures = index_swiss(now_text)

    tail = http_get(
        swiss_url(station.source_id, "recent", base), {"Range": f"bytes=-{SWISS_TAIL_BYTES}"}
    ).decode("utf-8", "replace")
    # La première ligne du Range est coupée en son milieu.
    measures.update(index_swiss(tail.split("\n", 1)[-1], header))

    return {
        slot: measures[slot.astimezone(UTC)]
        for slot in slots
        if slot.astimezone(UTC) in measures
    }


# --- Construction des fichiers ---------------------------------------------


def compass(deg: float | None) -> str:
    if deg is None:
        return ""
    return COMPASS[int((deg % 360) / 22.5 + 0.5) % 16]


def one_decimal(value: float | None) -> str:
    return "" if value is None else f"{value:.1f}"


def rounded(value: float | None) -> str:
    return "" if value is None else f"{value:.0f}"


def build_rows(
    day: date,
    stations: list[Station],
    measures: dict[str, dict[datetime, Measure]],
    fetched_at: datetime,
) -> list[dict[str, str]]:
    stamp = fetched_at.isoformat(timespec="seconds")
    rows = []
    for station in stations:
        for slot, measure in sorted(measures.get(station.key, {}).items()):
            rows.append(
                {
                    "day": day.isoformat(),
                    "station_key": station.key,
                    "source": station.source,
                    "source_id": station.source_id,
                    "valid_at": slot.isoformat(timespec="minutes"),
                    "step_min": str(station.step_at(slot)),
                    "wind_speed_10m_kn": one_decimal(measure.wind_kn),
                    "wind_gusts_10m_kn": one_decimal(measure.gust_kn),
                    "wind_direction_10m_deg": rounded(measure.dir_deg),
                    "wind_direction_card": compass(measure.dir_deg),
                    "temperature_2m_c": one_decimal(measure.temp_c),
                    "latitude": station.latitude,
                    "longitude": station.longitude,
                    "elevation_m": station.elevation,
                    "fetched_at": stamp,
                }
            )
    return rows


def peak(
    slots_measures: dict[datetime, Measure], field: str
) -> tuple[float, datetime] | None:
    """Plus forte valeur entre 8 h et 20 h, avec son créneau."""
    best = None
    for slot, measure in sorted(slots_measures.items()):
        if not PEAK_FROM_HOUR <= slot.hour < PEAK_TO_HOUR:
            continue
        value = getattr(measure, field)
        if value is None:
            continue
        if best is None or value > best[0]:
            best = (value, slot)
    return best


def day_label(day: date) -> str:
    return f"{WEEKDAYS[day.weekday()]} {day.strftime('%d/%m/%Y')}"


def build_day_markdown(
    day: date,
    stations: list[Station],
    measures: dict[str, dict[datetime, Measure]],
    meta: dict,
) -> str:
    slots = day_slots(day)
    counts = meta["couverture"]
    expected = meta["creneaux_attendus"]
    fines = [station for station in stations if station.fine_step_min]
    lines = [
        f"# Archive des balises — {day_label(day)}",
        "",
        f"- Tableaux au pas de {STEP_MIN} minutes, heures en Europe/Paris,"
        f" {len(slots)} créneaux dans la journée.",
        (
            f"- Journée complète, archivée le {datetime.fromisoformat(meta['archived_at']):%d/%m/%Y à %H h}."
            if meta["complet"]
            else f"- Journée encore partielle, archivée le"
            f" {datetime.fromisoformat(meta['archived_at']):%d/%m/%Y à %H h}."
        ),
        f"- {len(stations)} balises : "
        + ", ".join(
            f"{count} {SOURCE_LABELS.get(source, source)}"
            for source, count in sorted(meta["balises_par_source"].items())
            if count
        )
        + ".",
        "- Mesures brutes des stations, sans assemblage : Météo-France rend la mesure 6 min"
        " posée sur le créneau, MétéoSuisse la moyenne 10 min du même instant.",
    ]
    if fines:
        detail = ", ".join(
            f"{station.name} ({station.fine_from_hour} h – {station.fine_to_hour} h,"
            f" pas de {station.fine_step_min} min)"
            for station in fines
        )
        lines.append(
            f"- Mesurées plus finement sur une plage : {detail}. Les pics ci-dessous"
            " tiennent compte de ces mesures ; le fichier `.csv` les contient toutes,"
            " les tableaux de ce fichier restent aux demi-heures."
        )
    lines += [
        "",
        "> Unités : vent moyen et rafale en nœuds, direction = d'où vient le vent (0 absent = calme),"
        " température en °C.",
        "",
        f"## Pics entre {PEAK_FROM_HOUR} h et {PEAK_TO_HOUR} h",
        "",
        "| Balise | Vent moyen max | à | Rafale max | à | Créneaux |",
        "|---|---|---|---|---|---|",
    ]
    for station in stations:
        found = measures.get(station.key, {})
        top_wind = peak(found, "wind_kn")
        top_gust = peak(found, "gust_kn")
        lines.append(
            "| "
            + " | ".join(
                [
                    station.name,
                    one_decimal(top_wind[0]) if top_wind else "—",
                    f"{top_wind[1]:%Hh%M}" if top_wind else "",
                    one_decimal(top_gust[0]) if top_gust else "—",
                    f"{top_gust[1]:%Hh%M}" if top_gust else "",
                    f"{counts.get(station.key, 0)}/{expected.get(station.key, len(slots))}",
                ]
            )
            + " |"
        )
    for station in stations:
        found = measures.get(station.key, {})
        lines += [
            "",
            f"## {station.name} (`{station.key}`)",
            "",
            "| Heure | Moy. | Raf. | Dir. | T° |",
            "|---|---|---|---|---|",
        ]
        if not found:
            lines.append("| — | | | | |")
            continue
        for slot in slots:
            measure = found.get(slot)
            if measure is None:
                continue
            direction = (
                f"{rounded(measure.dir_deg)}° {compass(measure.dir_deg)}"
                if measure.dir_deg is not None
                else ""
            )
            lines.append(
                "| "
                + " | ".join(
                    [
                        f"{slot:%Hh%M}",
                        one_decimal(measure.wind_kn),
                        one_decimal(measure.gust_kn),
                        direction,
                        one_decimal(measure.temp_c),
                    ]
                )
                + " |"
            )
    lines.append("")
    return "\n".join(lines)


def day_paths(day: date) -> tuple[Path, Path, Path]:
    folder = ARCHIVE_DIR / f"{day:%Y}" / f"{day:%m}"
    stem = day.isoformat()
    return folder / f"{stem}.csv", folder / f"{stem}.md", folder / f"{stem}.json"


def write_day(
    day: date,
    stations: list[Station],
    measures: dict[str, dict[datetime, Measure]],
    meta: dict,
    rows: list[dict[str, str]],
) -> None:
    csv_path, md_path, meta_path = day_paths(day)
    csv_path.parent.mkdir(parents=True, exist_ok=True)
    with csv_path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=list(ARCHIVE_COLUMNS), delimiter=";")
        writer.writeheader()
        writer.writerows(rows)
    md_path.write_text(build_day_markdown(day, stations, measures, meta), encoding="utf-8")
    meta_path.write_text(json.dumps(meta, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def rel_url(path: Path) -> str:
    return f"{RAW_BASE_URL}/{path.relative_to(ROOT).as_posix()}"


def expected_total(meta: dict) -> int:
    """Créneaux attendus d'une journée, tous formats de `meta` confondus.

    Les journées archivées avant le pas fin attendaient le même nombre de
    créneaux pour toutes les balises ; leur `meta` ne porte qu'un total par
    balise. L'index les relit telles quelles, sans les réécrire.
    """
    attendus = meta.get("creneaux_attendus")
    if isinstance(attendus, dict):
        return sum(attendus.values())
    return int(meta.get("creneaux", 0)) * int(meta.get("balises", 0))


def write_index() -> None:
    metas = []
    for meta_path in sorted(ARCHIVE_DIR.glob("*/*/*.json"), reverse=True):
        metas.append((json.loads(meta_path.read_text(encoding="utf-8")), meta_path))
    lines = [
        "# Gabin-meteo — archive des balises",
        "",
        "Mesures des balises relevées sur les API Météo-France (DPPaquetObs v1 et DPObs v2)"
        f" et MétéoSuisse (OGD SMN), un créneau toutes les {STEP_MIN} minutes, journées de"
        " Paris. Reventin et Étoile sont relevées toutes les 6 minutes entre 11 h et 19 h.",
        "",
        "- Fichier `.md` : pics de la journée et tableau aux demi-heures pour chaque balise"
        " (lisible par Claude).",
        "- Fichier `.csv` : une ligne par (balise, créneau), séparateur `;`, vent en nœuds,"
        " colonne `step_min` pour le pas de chaque ligne.",
        "- Fichier `.json` : couverture, créneaux attendus, sources.",
        "- Balises en direct : https://lecoonetsabande.github.io/gabin-meteo/",
        "",
        "| Jour | Balises | Créneaux relevés | Complet | Tableau | CSV |",
        "|---|---|---|---|---|---|",
    ]
    for meta, meta_path in metas:
        day = date.fromisoformat(meta["day"])
        releves = sum(meta["couverture"].values())
        total = expected_total(meta)
        lines.append(
            f"| {day_label(day)} | {meta['balises']} | {releves}/{total} |"
            f" {'oui' if meta['complet'] else 'non'} |"
            f" {rel_url(meta_path.with_suffix('.md'))} | {rel_url(meta_path.with_suffix('.csv'))} |"
        )
    lines.append("")
    INDEX_MD.write_text("\n".join(lines), encoding="utf-8")


# --- Programme --------------------------------------------------------------


def load_archived(day: date) -> dict[str, dict[datetime, Measure]]:
    """Ce qui est déjà dans le fichier du jour, pour ne jamais perdre une mesure.

    Une passe suffit d'ordinaire, mais un run relancé après un échec partiel ne
    doit pas effacer ce que le précédent avait su lire : les valeurs relues
    remplacent les anciennes, les créneaux qu'elles n'ont pas restent en place.
    """
    csv_path, _, _ = day_paths(day)
    if not csv_path.exists():
        return {}
    archived: dict[str, dict[datetime, Measure]] = {}
    with csv_path.open(encoding="utf-8", newline="") as handle:
        for row in csv.DictReader(handle, delimiter=";"):
            try:
                slot = datetime.fromisoformat(row["valid_at"])
            except (KeyError, ValueError):
                continue
            archived.setdefault(row["station_key"], {})[slot] = Measure(
                wind_kn=number(row.get("wind_speed_10m_kn")),
                gust_kn=number(row.get("wind_gusts_10m_kn")),
                dir_deg=number(row.get("wind_direction_10m_deg")),
                temp_c=number(row.get("temperature_2m_c")),
            )
    return archived


def merge_measures(
    archived: dict[str, dict[datetime, Measure]],
    fresh: dict[str, dict[datetime, Measure]],
) -> dict[str, dict[datetime, Measure]]:
    merged = {key: dict(slots) for key, slots in archived.items()}
    for key, slots in fresh.items():
        merged.setdefault(key, {}).update(slots)
    return merged


def already_complete(day: date) -> bool:
    _, _, meta_path = day_paths(day)
    if not meta_path.exists():
        return False
    try:
        return bool(json.loads(meta_path.read_text(encoding="utf-8")).get("complet"))
    except (OSError, ValueError):
        return False


def gather(
    stations: list[Station], wanted: dict[str, list[datetime]], apikey: str
) -> dict[str, dict[datetime, Measure]]:
    measures: dict[str, dict[datetime, Measure]] = {}
    for station in stations:
        slots = wanted[station.key]
        started = time.monotonic()
        try:
            if station.source == "MeteoSuisse":
                measures[station.key] = fetch_suisse(station, slots)
            elif station.source == "MeteoFrance":
                if not apikey:
                    raise RuntimeError("METEOFRANCE_API_KEY absente")
                measures[station.key] = fetch_france(station, slots, apikey)
            else:
                raise RuntimeError(f"source inconnue : {station.source}")
        except Exception as error:  # une balise muette ne doit pas perdre les autres
            measures[station.key] = measures.get(station.key, {})
            print(f"::warning title=Balise en échec::{station.key} : {error}")
        print(
            f"{station.key:18} {station.source:12} "
            f"{len(measures[station.key]):3}/{len(slots)} créneaux "
            f"en {time.monotonic() - started:5.1f} s",
            flush=True,
        )
    return measures


def main(argv: list[str] | None = None) -> int:
    configure_stdio()
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--specs", type=Path, required=True, help="Fiche des balises (CSV d'affichage-web)")
    parser.add_argument("--day", help="Jour à archiver (AAAA-MM-JJ)")
    parser.add_argument(
        "--force",
        action="store_true",
        help="Réécrire un jour déjà archivé, en repartant de zéro au lieu de compléter",
    )
    args = parser.parse_args(argv)

    now = datetime.now(PARIS)
    day, mode = plan(now, args.day)
    if already_complete(day) and not args.force:
        print(f"{day} déjà archivé, rien à faire.")
        write_index()
        return 0
    if day > now.date():
        print(f"{day} n'a pas commencé.")
        return 0
    if (now.date() - day).days > MF_HISTORY_DAYS:
        print(
            f"::warning title=Hors historique::{day} dépasse les {MF_HISTORY_DAYS} jours"
            " d'historique 6 min de Météo-France, les balises françaises resteront vides."
        )

    stations = read_specs(args.specs)
    expected = {station.key: station_slots(station, day) for station in stations}
    # Une journée terminée se relit en entier ; `--day` sur le jour en cours
    # s'arrête à l'heure qu'il est.
    wanted = {key: elapsed_slots(slots, now) for key, slots in expected.items()}
    complete = all(len(wanted[key]) == len(expected[key]) for key in expected)
    print(
        f"Archive {day} ({mode}) : {len(stations)} balises, "
        f"{sum(len(slots) for slots in wanted.values())}/"
        f"{sum(len(slots) for slots in expected.values())} créneaux"
        f"{'' if complete else ' (journée en cours)'}.",
        flush=True,
    )

    apikey = os.environ.get("METEOFRANCE_API_KEY", "")
    measures = gather(stations, wanted, apikey)
    if not args.force:
        measures = merge_measures(load_archived(day), measures)
    rows = build_rows(day, stations, measures, now)
    by_source: dict[str, int] = {}
    for station in stations:
        by_source[station.source] = by_source.get(station.source, 0) + 1
    meta = {
        "day": day.isoformat(),
        "step_min": STEP_MIN,
        "pas_fin": {
            station.key: {
                "step_min": station.fine_step_min,
                "de_h": station.fine_from_hour,
                "a_h": station.fine_to_hour,
            }
            for station in stations
            if station.fine_step_min
        },
        "fuseau": "Europe/Paris",
        "mode": mode,
        "complet": complete,
        "creneaux_attendus": {key: len(slots) for key, slots in expected.items()},
        "balises": len(stations),
        "balises_par_source": by_source,
        "couverture": {station.key: len(measures.get(station.key, {})) for station in stations},
        "muettes": sorted(station.key for station in stations if not measures.get(station.key)),
        "sources": {
            "MeteoFrance": "DPPaquetObs v1 paquet/infrahoraire-6m (24 h en un appel),"
            " complété par DPObs v2 station/infrahoraire-6m (une mesure par appel)",
            "MeteoSuisse": "OGD SMN ogd-smn_<id>_t_now.csv et fin de _t_recent.csv",
        },
        "archived_at": now.isoformat(timespec="seconds"),
    }
    write_day(day, stations, measures, meta, rows)
    write_index()
    csv_path, _, _ = day_paths(day)
    print(f"Écrit : {csv_path.relative_to(ROOT)} ({len(rows)} lignes).")
    if meta["muettes"]:
        print(f"::warning title=Balises sans mesure::{', '.join(meta['muettes'])}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
