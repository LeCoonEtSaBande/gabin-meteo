"""Chaînes de modèles et chemins du traitement."""

from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SPOTS_CSV = ROOT / "assets" / "spots_specs" / "spots_specifications.csv"
RAW_FORECASTS = ROOT / "data" / "raw" / "current" / "forecasts.csv"
RAW_LAST_UPDATE = ROOT / "data" / "raw" / "last_update.json"
PROCESSED_DIR = ROOT / "data" / "processed"
CURVES_DIR = PROCESSED_DIR / "curves"
QUOTIDIEN_JSON = PROCESSED_DIR / "quotidien.json"
LAST_UPDATE_JSON = PROCESSED_DIR / "last_update.json"
COLLECTE_BRANCH = "collecte-api-meteo"

WIND_SLOT_KT = 8.0
GUST_SLOT_KT = 15.0
SLOT_WINDOW_START_H = 7
SLOT_WINDOW_END_H = 22
MIN_SLOT_HOURS = 3
TEMP_HOUR = 15

# Court terme → long terme. À un instant t on ne garde que le modèle
# le plus court encore disponible.
CURVE_SETS: dict[str, tuple[str, ...]] = {
    "AROMEIFS": ("AROMEHD", "ARPEGE", "IFS"),
    "ICONIFS": ("ICONCH1", "ICONCH2", "ICON13KM", "IFS"),
    "ICONGFS": ("ICONCH1", "ICONCH2", "ICON13KM", "GFS"),
}

CURVE_COLUMNS = (
    "spot_key",
    "curve_set",
    "valid_at",
    "source_model",
    "wind_speed_10m_kn",
    "wind_gusts_10m_kn",
    "wind_direction_10m_deg",
    "temperature_2m_c",
    "precipitation_mm",
    "cloud_cover_max_pct",
)


def curve_set_for_short_term(short_term_model: str) -> str:
    key = (short_term_model or "").strip().upper()
    if key in {"AROMEHD", "AROMEIFS", "ARPEGE"}:
        return "AROMEIFS"
    return "ICONIFS"
