"""Fichiers Markdown légers pour un assistant (Claude) : index et un fichier par spot."""

from __future__ import annotations

import csv
from datetime import datetime
from io import StringIO
from pathlib import Path
from typing import Any

from config import (
    ARCHIVE_INDEX_URL,
    CHART_CURVE_SETS,
    CURVE_SETS,
    MIN_SLOT_HOURS,
    SITE_URL,
    SLOT_WINDOW_END_H,
    SLOT_WINDOW_START_H,
    SPOTS_CSV,
    WIND_SLOT_KT,
)
from curves import HourPoint
from io_raw import read_text

ZONES_CSV_REL = "assets/spots_specs/zones_specifications.csv"
SPOTS_CSV_REL = "assets/spots_specs/spots_specifications.csv"

WEEKDAYS = ("lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim.")
COMPASS = (
    "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
    "S", "SSO", "SO", "OSO", "O", "ONO", "NO", "NNO",
)


def compass(deg: float) -> str:
    return COMPASS[int((deg % 360) / 22.5 + 0.5) % 16]


def day_title(day_key: str) -> str:
    day = datetime.strptime(day_key, "%Y-%m-%d")
    return f"{WEEKDAYS[day.weekday()]} {day.strftime('%d/%m/%Y')}"


def _cell(text: Any) -> str:
    return str(text if text is not None else "").replace("|", "/").replace("\n", " ").strip()


def _read_csv_rows(path: Path, git_rel: str) -> list[dict[str, str]]:
    text = read_text(path, git_rel)
    return list(csv.DictReader(StringIO(text), delimiter=";"))


def load_zone_names() -> dict[str, str]:
    rows = _read_csv_rows(SPOTS_CSV.parent / "zones_specifications.csv", ZONES_CSV_REL)
    return {row["zone_key"]: (row.get("display_name") or "").strip() for row in rows if row.get("zone_key")}


def load_spot_texts() -> dict[str, dict[str, str]]:
    rows = _read_csv_rows(SPOTS_CSV, SPOTS_CSV_REL)
    return {row["spot_key"]: row for row in rows if row.get("spot_key")}


def spot_url(spot_key: str) -> str:
    return f"{SITE_URL}/llm/spots/{spot_key}.md"


def _slot_text(day: dict[str, Any] | None) -> str:
    if not day or day.get("slot_start_h") is None:
        return "aucun"
    return f"{day['slot_start_h']:02d}h-{day['slot_end_h']:02d}h"


def _rules_lines() -> list[str]:
    return [
        "Unités : vent moyen et rafales en nœuds (nds), direction = d'où vient le vent "
        "(degrés et rose des vents), pluie en mm tombés pendant l'heure qui précède, nuages en % "
        "(nébulosité perçue), heures en Europe/Paris.",
        f"Créneau navigable : au moins {MIN_SLOT_HOURS} h de vent moyen > {WIND_SLOT_KT:g} nds "
        f"entre {SLOT_WINDOW_START_H} h et {SLOT_WINDOW_END_H} h ; s'il y en a plusieurs, "
        "le plus proche du pic de vent moyen.",
        "Courbes : "
        + " ; ".join(f"`{name}` = {' → '.join(CURVE_SETS[name])}" for name in CHART_CURVE_SETS)
        + " (à un instant donné, le modèle le plus court terme encore disponible ; colonne `modèle`).",
    ]


def _hour_cells(point: HourPoint | None) -> list[str]:
    if point is None:
        return ["", "", "", "", "", ""]
    return [
        f"{point.wind_speed_kt:.0f}",
        f"{point.wind_gusts_kt:.0f}",
        f"{point.wind_dir_deg:.0f}° {compass(point.wind_dir_deg)}",
        f"{point.precipitation_mm:.1f}",
        f"{point.cloud_cover_display_pct:.0f}",
        point.source_model,
    ]


def build_spot_markdown(
    spot,
    texts: dict[str, str],
    zone_name: str,
    curves: dict[str, dict[str, list[HourPoint]]],
    chart_days: dict[str, dict[str, dict[str, Any]]],
    last_update_label: str,
) -> str:
    by_set = {
        name: {point.valid_at.strftime("%Y-%m-%dT%H:%M"): point for point in curves[name].get(spot.key, [])}
        for name in CHART_CURVE_SETS
    }
    stamps = sorted({stamp for points in by_set.values() for stamp in points})
    days = sorted({stamp[:10] for stamp in stamps})

    lines = [
        f"# {spot.display_name}",
        "",
        f"- Spot : `{spot.key}` · zone : {zone_name or spot.zone_key} (`{spot.zone_key}`)",
        f"- Modèle court terme du spot : {spot.short_term_model}",
        f"- Prévisions collectées le : {last_update_label or 'inconnu'} (Europe/Paris)",
        f"- Conditions de vent : {_cell(texts.get('display_wind_requirements')) or '—'}",
        f"- Infos pratiques : {_cell(texts.get('display_spot_infos')) or '—'}",
        "",
        *[f"> {line}" for line in _rules_lines()],
        "",
        "## Résumé par jour (7 h–22 h)",
        "",
        "| Jour | "
        + " | ".join(f"{name} créneau | {name} moy. max | {name} raf. max" for name in CHART_CURVE_SETS)
        + " |",
        "|---|" + "---|---|---|" * len(CHART_CURVE_SETS),
    ]
    for day_key in days:
        cells = [day_title(day_key)]
        for name in CHART_CURVE_SETS:
            day = chart_days.get(name, {}).get(spot.key, {}).get(day_key)
            if day:
                cells += [
                    _slot_text(day),
                    f"{day['mean_max_kt']} ({day['mean_max_at'][11:13]}h)",
                    f"{day['gust_max_kt']} ({day['gust_max_at'][11:13]}h)",
                ]
            else:
                cells += ["", "", ""]
        lines.append("| " + " | ".join(cells) + " |")

    header = "| Heure | " + " | ".join(
        f"{name} moy. | {name} raf. | {name} dir. | {name} pluie | {name} nuages | {name} modèle"
        for name in CHART_CURVE_SETS
    ) + " |"
    separator = "|---|" + "---|---|---|---|---|---|" * len(CHART_CURVE_SETS)
    for day_key in days:
        lines += ["", f"## {day_title(day_key)} — heure par heure", "", header, separator]
        for stamp in stamps:
            if not stamp.startswith(day_key):
                continue
            cells = [f"{stamp[11:13]}h"]
            for name in CHART_CURVE_SETS:
                cells += _hour_cells(by_set[name].get(stamp))
            lines.append("| " + " | ".join(cells) + " |")
    lines.append("")
    return "\n".join(lines)


def build_index_markdown(
    spots,
    zone_names: dict[str, str],
    quotidien: dict[str, Any],
) -> str:
    days = quotidien.get("days") or []
    lines = [
        "# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)",
        "",
        f"- Prévisions collectées le : {quotidien.get('last_update_label') or 'inconnu'} (Europe/Paris)",
        f"- Fichiers générés le : {quotidien.get('generated_at') or ''}",
        "- Mise à jour 3 fois par jour (vers 7h15, 13h15 et 19h15, une heure plus tôt en hiver).",
        f"- Carte : {SITE_URL}/",
        f"- Archive des prévisions de la veille à 23 h (AROME HD et ICON-CH1 bruts) : {ARCHIVE_INDEX_URL}",
        "",
        "Pour le détail heure par heure d'un spot (vent moyen, rafales, direction, pluie, nuages "
        "des courbes AROMEIFS et ICONGFS), lire son fichier dans la liste ci-dessous.",
        "",
        *[f"> {line}" for line in _rules_lines()],
        "",
        "## Spots",
        "",
        "| Spot | Zone | Modèle court terme | Fichier détaillé |",
        "|---|---|---|---|",
    ]
    for spot in spots:
        zone = zone_names.get(spot.zone_key) or spot.zone_key
        lines.append(
            f"| {_cell(spot.display_name)} (`{spot.key}`) | {_cell(zone)} | {spot.short_term_model} "
            f"| {spot_url(spot.key)} |"
        )

    lines += [
        "",
        "## Tendances journalières (données des puces de la carte)",
        "",
        "Courbe des puces : AROMEIFS pour les spots AROME HD, ICONIFS (ICON-CH1 → ICON-CH2 → ICON Global → IFS) "
        "pour les spots ICON-CH1. Format : vent moyen max / rafale au même moment, créneau, icône, température à 15 h.",
    ]
    for day_key in days:
        lines += [
            "",
            f"### {day_title(day_key)}",
            "",
            "| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |",
            "|---|---|---|---|---|---|---|---|",
        ]
        for spot in spots:
            day = (quotidien.get("spots", {}).get(spot.key, {}).get("days") or {}).get(day_key)
            if not day:
                continue
            temp = "" if day.get("temp_15h_c") is None else f"{day['temp_15h_c']}°C"
            lines.append(
                f"| {_cell(spot.display_name)} | {day['mean_max_kt']} | {day['gust_at_mean_max_kt']} "
                f"| {day['wind_dir_deg']:.0f}° {compass(day['wind_dir_deg'])} | {_slot_text(day)} "
                f"| {day['weather_icon']} | {day['precip_mm']:.1f} | {temp} |"
            )
    lines.append("")
    return "\n".join(lines)


def write_llm_files(
    out_dir: Path,
    spots,
    curves: dict[str, dict[str, list[HourPoint]]],
    chart_days: dict[str, dict[str, dict[str, Any]]],
    quotidien: dict[str, Any],
) -> list[Path]:
    zone_names = load_zone_names()
    texts = load_spot_texts()
    spots_dir = out_dir / "spots"
    spots_dir.mkdir(parents=True, exist_ok=True)
    keep = {f"{spot.key}.md" for spot in spots}
    for stale in spots_dir.glob("*.md"):
        if stale.name not in keep:
            stale.unlink()
    written = []
    index = out_dir / "index.md"
    index.write_text(build_index_markdown(spots, zone_names, quotidien), encoding="utf-8")
    written.append(index)
    for spot in spots:
        path = spots_dir / f"{spot.key}.md"
        path.write_text(
            build_spot_markdown(
                spot,
                texts.get(spot.key, {}),
                zone_names.get(spot.zone_key, ""),
                curves,
                chart_days,
                quotidien.get("last_update_label") or "",
            ),
            encoding="utf-8",
        )
        written.append(path)
    return written
