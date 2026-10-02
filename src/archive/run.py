"""Archive la prévision AROME HD et ICON-CH1 du lendemain telle qu'elle était à 23 h.

À 23 h le jour J, on fige pour chaque spot les échéances de J+1 01 h à J+2 00 h
(« 01 h à 24 h » de J+1) de la dernière collecte réussie lancée avant 23 h
(`fetched_at`). Aucun appel API : lecture de l'historique git de `collecte-api-meteo`.

Usage :
    python src/archive/run.py --collecte _collecte            # lendemain du dernier 23 h passé
    python src/archive/run.py --collecte _collecte --day 2026-10-02 --force
"""

from __future__ import annotations

import argparse
import csv
import json
import subprocess
import sys
from dataclasses import dataclass
from datetime import date, datetime, time, timedelta
from io import StringIO
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[2]
ARCHIVE_DIR = ROOT / "data" / "archive"
INDEX_MD = ROOT / "index.md"
PARIS = ZoneInfo("Europe/Paris")

MODELS = ("AROMEHD", "ICONCH1")
MODEL_LABELS = {"AROMEHD": "AROME HD", "ICONCH1": "ICON-CH1"}
SNAPSHOT_HOUR = 23
USABLE_STATUSES = {"ok", "partial"}
RAW_BASE_URL = "https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/archive-previsions"
HISTORY_DEPTH = 120

VALUE_COLUMNS = (
    "wind_speed_10m_kn",
    "wind_gusts_10m_kn",
    "wind_direction_10m_deg",
    "temperature_2m_c",
    "precipitation_mm",
    "cloud_cover_pct",
    "cloud_cover_low_pct",
    "cloud_cover_mid_pct",
    "cloud_cover_high_pct",
    "cloud_cover_max_pct",
)
ARCHIVE_COLUMNS = (
    "target_day",
    "spot_key",
    "model_key",
    "valid_at",
    *VALUE_COLUMNS,
    "grid_latitude",
    "grid_longitude",
    "grid_elevation_m",
    "collecte_run_id",
    "collecte_fetched_at",
    "collecte_commit",
)

WEEKDAYS = ("lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche")
COMPASS = (
    "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
    "S", "SSO", "SO", "OSO", "O", "ONO", "NO", "NNO",
)


@dataclass(frozen=True)
class Snapshot:
    """Un dossier `current/` ou `previous/` d'un commit de collecte."""

    commit: str
    folder: str
    run_id: str
    fetched_at: datetime


def configure_stdio() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")


def git(repo: Path, *args: str) -> str:
    proc = subprocess.run(
        ["git", *args], cwd=repo, capture_output=True, text=True, encoding="utf-8"
    )
    if proc.returncode != 0:
        raise RuntimeError(f"git {' '.join(args)} : {(proc.stderr or proc.stdout).strip()}")
    return proc.stdout


def git_show(repo: Path, commit: str, rel_path: str) -> str | None:
    try:
        return git(repo, "show", f"{commit}:{rel_path}")
    except RuntimeError:
        return None


def snapshot_at(repo: Path, commit: str, folder: str) -> Snapshot | None:
    text = git_show(repo, commit, f"data/raw/{folder}/run_meta.json")
    if not text:
        return None
    meta = json.loads(text)
    stamp = meta.get("fetched_at") or meta.get("last_update_at")
    if not stamp:
        return None
    return Snapshot(
        commit=commit,
        folder=folder,
        run_id=meta.get("run_id") or "",
        fetched_at=datetime.fromisoformat(stamp).astimezone(PARIS),
    )


def snapshots_before(repo: Path, cutoff: datetime) -> list[Snapshot]:
    """Collectes lancées avant `cutoff` (`fetched_at`), la plus récente d'abord, dossiers current et previous."""
    commits = git(
        repo, "log", f"-n{HISTORY_DEPTH}", "--format=%H", "HEAD", "--", "data/raw/current/run_meta.json"
    ).split()
    seen: set[tuple[str, str]] = set()
    out: list[Snapshot] = []
    for commit in commits:
        for folder in ("current", "previous"):
            snap = snapshot_at(repo, commit, folder)
            if snap is None or snap.fetched_at > cutoff:
                continue
            key = (snap.run_id, snap.fetched_at.isoformat())
            if key in seen:
                continue
            seen.add(key)
            out.append(snap)
    out.sort(key=lambda snap: snap.fetched_at, reverse=True)
    return out


def _csv_rows(text: str | None) -> list[dict[str, str]]:
    if not text:
        return []
    return list(csv.DictReader(StringIO(text.lstrip("\ufeff")), delimiter=";"))


def usable_pairs(repo: Path, snap: Snapshot) -> set[tuple[str, str]]:
    rows = _csv_rows(git_show(repo, snap.commit, f"data/raw/{snap.folder}/run_status.csv"))
    return {
        (row["spot_key"], row["model_key"])
        for row in rows
        if row.get("model_key") in MODELS and (row.get("status") or "").strip() in USABLE_STATUSES
    }


def target_hours(target: date) -> list[str]:
    start = datetime.combine(target, time(1, 0))
    return [(start + timedelta(hours=h)).strftime("%Y-%m-%dT%H:%M") for h in range(24)]


def default_target(now: datetime) -> date:
    """Lendemain du dernier 23 h passé (un cron en retard vise toujours le même jour)."""
    today = now.date()
    last_snapshot_day = today if now.hour >= SNAPSHOT_HOUR else today - timedelta(days=1)
    return last_snapshot_day + timedelta(days=1)


def snapshot_cutoff(target: date) -> datetime:
    return datetime.combine(target - timedelta(days=1), time(SNAPSHOT_HOUR, 0), tzinfo=PARIS)


def collect_rows(repo: Path, target: date, spot_keys: list[str]) -> tuple[list[dict[str, str]], dict]:
    """Pour chaque (spot, modèle), la dernière collecte réussie lancée avant 23 h la veille."""
    cutoff = snapshot_cutoff(target)
    snapshots = snapshots_before(repo, cutoff)
    if not snapshots:
        raise RuntimeError(f"Aucune collecte avant {cutoff.isoformat()} dans l'historique")
    wanted = set(target_hours(target))
    needed = {(spot, model) for spot in spot_keys for model in MODELS}
    chosen: dict[tuple[str, str], Snapshot] = {}
    rows: list[dict[str, str]] = []
    for snap in snapshots:
        pending = {pair for pair in needed if pair not in chosen} & usable_pairs(repo, snap)
        if not pending:
            continue
        text = git_show(repo, snap.commit, f"data/raw/{snap.folder}/forecasts.csv")
        for row in _csv_rows(text):
            pair = (row.get("spot_key", ""), row.get("model_key", ""))
            if pair not in pending or row.get("valid_at") not in wanted:
                continue
            rows.append(
                {
                    "target_day": target.isoformat(),
                    "spot_key": pair[0],
                    "model_key": pair[1],
                    "valid_at": row["valid_at"],
                    **{name: row.get(name, "") for name in VALUE_COLUMNS},
                    "grid_latitude": row.get("grid_latitude", ""),
                    "grid_longitude": row.get("grid_longitude", ""),
                    "grid_elevation_m": row.get("grid_elevation_m", ""),
                    "collecte_run_id": snap.run_id,
                    "collecte_fetched_at": snap.fetched_at.isoformat(timespec="seconds"),
                    "collecte_commit": snap.commit[:12],
                }
            )
        for pair in pending:
            chosen[pair] = snap
        if len(chosen) == len(needed):
            break

    rows.sort(key=lambda row: (row["spot_key"], MODELS.index(row["model_key"]), row["valid_at"]))
    hours_by_pair: dict[tuple[str, str], int] = {}
    for row in rows:
        pair = (row["spot_key"], row["model_key"])
        hours_by_pair[pair] = hours_by_pair.get(pair, 0) + 1
    runs = {}
    for snap in {snap for snap in chosen.values()}:
        runs[snap.run_id or snap.fetched_at.isoformat()] = {
            "collecte_run_id": snap.run_id,
            "collecte_fetched_at": snap.fetched_at.isoformat(timespec="seconds"),
            "collecte_commit": snap.commit[:12],
            "dossier": snap.folder,
        }
    main_snap = max(chosen.values(), key=lambda snap: snap.fetched_at) if chosen else snapshots[0]
    meta = {
        "target_day": target.isoformat(),
        "snapshot_at": cutoff.isoformat(timespec="seconds"),
        "valid_from": target_hours(target)[0],
        "valid_to": target_hours(target)[-1],
        "models": list(MODELS),
        "collecte_run_id": main_snap.run_id,
        "collecte_fetched_at": main_snap.fetched_at.isoformat(timespec="seconds"),
        "collecte_commit": main_snap.commit[:12],
        "runs_used": sorted(runs.values(), key=lambda item: item["collecte_fetched_at"], reverse=True),
        "missing": sorted(
            f"{spot}/{model}" for spot, model in needed if (spot, model) not in chosen
        ),
        "incomplete": {
            f"{spot}/{model}": count
            for (spot, model), count in sorted(hours_by_pair.items())
            if count < 24
        },
        "archived_at": datetime.now(PARIS).isoformat(timespec="seconds"),
    }
    return rows, meta


def load_spots(repo: Path) -> list[dict[str, str]]:
    text = git_show(repo, "HEAD", "assets/spots_specs/spots_specifications.csv")
    rows = _csv_rows(text)
    return [row for row in rows if (row.get("spot_key") or "").strip()]


def _num(value: str, digits: int = 0) -> str:
    text = (value or "").strip()
    if not text:
        return ""
    return f"{float(text):.{digits}f}"


def _compass(value: str) -> str:
    text = (value or "").strip()
    if not text:
        return ""
    deg = float(text)
    return f"{deg:.0f}° {COMPASS[int((deg % 360) / 22.5 + 0.5) % 16]}"


def _clouds(row: dict[str, str] | None) -> str:
    if not row:
        return ""
    total = _num(row.get("cloud_cover_pct", ""))
    if total:
        return f"{total} (total)"
    layers = [_num(row.get(name, "")) or "-" for name in ("cloud_cover_low_pct", "cloud_cover_mid_pct", "cloud_cover_high_pct")]
    return "/".join(layers)


def _model_cells(row: dict[str, str] | None) -> list[str]:
    if not row:
        return ["—", "", "", "", "", ""]
    return [
        _num(row.get("wind_speed_10m_kn", "")),
        _num(row.get("wind_gusts_10m_kn", "")),
        _compass(row.get("wind_direction_10m_deg", "")),
        _num(row.get("precipitation_mm", ""), 1),
        _clouds(row),
        _num(row.get("temperature_2m_c", "")),
    ]


def incomplete_summary(incomplete: dict[str, int], n_spots: int) -> str:
    groups: dict[tuple[str, int], list[str]] = {}
    for key, count in incomplete.items():
        spot, model = key.split("/")
        groups.setdefault((model, count), []).append(spot)
    parts = []
    for (model, count), spot_keys in sorted(groups.items()):
        where = "tous les spots" if len(spot_keys) == n_spots else ", ".join(sorted(spot_keys))
        parts.append(f"{MODEL_LABELS.get(model, model)} {count}/24 h ({where})")
    return " ; ".join(parts)


def day_label(day: date) -> str:
    return f"{WEEKDAYS[day.weekday()]} {day.strftime('%d/%m/%Y')}"


def build_day_markdown(target: date, rows: list[dict[str, str]], meta: dict, spots: list[dict[str, str]]) -> str:
    by_key = {(row["spot_key"], row["model_key"], row["valid_at"]): row for row in rows}
    hours = target_hours(target)
    fetched = datetime.fromisoformat(meta["collecte_fetched_at"])
    lines = [
        f"# Archive — prévision du {day_label(target)} figée la veille à 23 h",
        "",
        f"- Jour prévu : {day_label(target)}, échéances de 01h à 24h (24h = {hours[-1].replace('T', ' ')})",
        f"- Prévision figée le : {day_label(target - timedelta(days=1))} à {SNAPSHOT_HOUR} h (Europe/Paris)",
        f"- Collecte utilisée : créneau {meta['collecte_run_id'] or '?'}, lancée le "
        f"{fetched.strftime('%d/%m/%Y %H:%M')} (commit `{meta['collecte_commit']}` de `collecte-api-meteo`)",
        "- Modèles bruts : AROME HD (Météo-France, ~1,3 km) et ICON-CH1 (MétéoSuisse, ~1 km), sans assemblage.",
    ]
    if len(meta["runs_used"]) > 1:
        others = ", ".join(
            f"{run['collecte_run_id']} ({run['collecte_fetched_at']})" for run in meta["runs_used"][1:]
        )
        lines.append(f"- Certains spots/modèles en échec sur cette collecte viennent d'une collecte antérieure : {others}")
    if meta["incomplete"]:
        lines.append(
            "- Heures absentes de la collecte utilisée : "
            + incomplete_summary(meta["incomplete"], len(spots))
        )
    if meta["missing"]:
        lines.append("- Sans données : " + ", ".join(meta["missing"]))
    lines += [
        "",
        "> Unités : vent moyen et rafales en nœuds, direction = d'où vient le vent, pluie en mm tombés "
        "pendant l'heure qui précède, nuages en % (total, sinon basses/moyennes/hautes), température en °C, "
        "heures en Europe/Paris.",
    ]
    header = "| Heure | " + " | ".join(
        f"{MODEL_LABELS[m]} moy. | {MODEL_LABELS[m]} raf. | {MODEL_LABELS[m]} dir. | "
        f"{MODEL_LABELS[m]} pluie | {MODEL_LABELS[m]} nuages | {MODEL_LABELS[m]} T°"
        for m in MODELS
    ) + " |"
    separator = "|---|" + "---|---|---|---|---|---|" * len(MODELS)
    for spot in spots:
        key = spot["spot_key"]
        lines += [
            "",
            f"## {spot.get('display_name') or key} (`{key}`)",
            "",
            header,
            separator,
        ]
        for idx, stamp in enumerate(hours, start=1):
            cells = [f"{idx:02d}h"]
            for model in MODELS:
                cells += _model_cells(by_key.get((key, model, stamp)))
            lines.append("| " + " | ".join(cells) + " |")
    lines.append("")
    return "\n".join(lines)


def day_paths(target: date) -> tuple[Path, Path, Path]:
    folder = ARCHIVE_DIR / f"{target:%Y}" / f"{target:%m}"
    stem = target.isoformat()
    return folder / f"{stem}.csv", folder / f"{stem}.md", folder / f"{stem}.json"


def write_day(target: date, rows: list[dict[str, str]], meta: dict, spots: list[dict[str, str]]) -> None:
    csv_path, md_path, meta_path = day_paths(target)
    csv_path.parent.mkdir(parents=True, exist_ok=True)
    with csv_path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=list(ARCHIVE_COLUMNS), delimiter=";")
        writer.writeheader()
        writer.writerows(rows)
    md_path.write_text(build_day_markdown(target, rows, meta, spots), encoding="utf-8")
    meta_path.write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")


def rel_url(path: Path) -> str:
    return f"{RAW_BASE_URL}/{path.relative_to(ROOT).as_posix()}"


def write_index() -> None:
    days = []
    for meta_path in sorted(ARCHIVE_DIR.glob("*/*/*.json"), reverse=True):
        meta = json.loads(meta_path.read_text(encoding="utf-8"))
        days.append((meta, meta_path.with_suffix(".md"), meta_path.with_suffix(".csv")))
    lines = [
        "# Gabin-meteo — archive des prévisions de la veille à 23 h",
        "",
        "Chaque jour J+1 est archivé à 23 h le jour J : prévisions **brutes AROME HD et ICON-CH1** pour les "
        "17 spots, échéances de 01h à 24h de J+1, tirées de la dernière collecte lancée avant 23 h.",
        "",
        "- Fichier `.md` : tableau heure par heure par spot (lisible par Claude).",
        "- Fichier `.csv` : valeurs brutes Open-Meteo, séparateur `;`, une ligne par (spot, modèle, heure).",
        "- Prévisions actuelles : https://lecoonetsabande.github.io/gabin-meteo/llm/index.md",
        "",
        "| Jour prévu | Collecte utilisée (lancée le) | Tableau | CSV |",
        "|---|---|---|---|",
    ]
    for meta, md_path, csv_path in days:
        target = date.fromisoformat(meta["target_day"])
        fetched = datetime.fromisoformat(meta["collecte_fetched_at"]).strftime("%d/%m/%Y %H:%M")
        lines.append(f"| {day_label(target)} | {fetched} | {rel_url(md_path)} | {rel_url(csv_path)} |")
    lines.append("")
    INDEX_MD.write_text("\n".join(lines), encoding="utf-8")


def main(argv: list[str] | None = None) -> int:
    configure_stdio()
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--collecte", type=Path, required=True, help="Checkout git de collecte-api-meteo")
    parser.add_argument("--day", help="Jour prévu à archiver (AAAA-MM-JJ)")
    parser.add_argument("--force", action="store_true", help="Réécrire un jour déjà archivé")
    args = parser.parse_args(argv)

    repo = args.collecte.resolve()
    target = date.fromisoformat(args.day) if args.day else default_target(datetime.now(PARIS))
    csv_path, _, _ = day_paths(target)
    if csv_path.exists() and not args.force:
        print(f"{target} déjà archivé ({csv_path.relative_to(ROOT)}).")
        write_index()
        return 0
    cutoff = snapshot_cutoff(target)
    if datetime.now(PARIS) < cutoff:
        print(f"Trop tôt : {target} s'archive à partir du {cutoff.isoformat()}.")
        return 0

    spots = load_spots(repo)
    rows, meta = collect_rows(repo, target, [spot["spot_key"] for spot in spots])
    write_day(target, rows, meta, spots)
    write_index()
    print(f"Archivé : {target} ({len(rows)} lignes) → {csv_path.relative_to(ROOT)}")
    print(f"Collecte : {meta['collecte_run_id']} lancée {meta['collecte_fetched_at']} ({meta['collecte_commit']})")
    if meta["incomplete"]:
        print(f"Heures manquantes : {incomplete_summary(meta['incomplete'], len(spots))}")
    if meta["missing"]:
        print(f"::warning title=Archive incomplète::{', '.join(meta['missing'])}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
