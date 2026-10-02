"""Modèles Open-Meteo, variables métier et chemins de la collecte."""

from __future__ import annotations

import math
from dataclasses import dataclass
from pathlib import Path
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError

ROOT = Path(__file__).resolve().parents[2]
SPOTS_CSV = ROOT / "assets" / "spots_specs" / "spots_specifications.csv"
RAW_DIR = ROOT / "data" / "raw"

try:
    PARIS = ZoneInfo("Europe/Paris")
except ZoneInfoNotFoundError:
    # Windows : la base IANA n'est pas fournie par l'OS.
    import tzdata  # noqa: F401

    PARIS = ZoneInfo("Europe/Paris")

API_TIMEOUT_S = 30
OPENMETEO_MAX_FORECAST_DAYS = 16
PAUSE_BETWEEN_CALLS_S = 1.0
USER_AGENT = "gabin-meteo-collecte/1.0"

# Variables demandées à l'API. Les quatre nébulosités sont stockées telles
# quelles, plus leur maximum dans `cloud_cover_max_pct`.
HOURLY_CORE = (
    "wind_speed_10m",
    "wind_gusts_10m",
    "wind_direction_10m",
    "temperature_2m",
    "precipitation",
)
HOURLY_CLOUD = (
    "cloud_cover",
    "cloud_cover_low",
    "cloud_cover_mid",
    "cloud_cover_high",
)
HOURLY_ALL = HOURLY_CORE + HOURLY_CLOUD

# Couches de nébulosité : null conservé (pas 0).
KEEP_NULL_COLUMNS = frozenset(
    {
        "cloud_cover_pct",
        "cloud_cover_low_pct",
        "cloud_cover_mid_pct",
        "cloud_cover_high_pct",
    }
)

FORECAST_COLUMNS = (
    "run_id",
    "fetched_at",
    "spot_key",
    "model_key",
    "grid_latitude",
    "grid_longitude",
    "grid_elevation_m",
    "valid_at",
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

STATUS_COLUMNS = (
    "run_id",
    "fetched_at",
    "spot_key",
    "model_key",
    "status",
    "http_status",
    "error_message",
    "hours_written",
    "nulls_replaced_by_zero",
    "grid_latitude",
    "grid_longitude",
    "grid_elevation_m",
)


@dataclass(frozen=True)
class ModelSpec:
    key: str
    label: str
    endpoint: str
    openmeteo_name: str
    horizon_h: int
    resolution: str
    notes: str = ""

    @property
    def forecast_days(self) -> int:
        # Open-Meteo compte les jours depuis aujourd'hui 0 h (Europe/Paris), pas
        # depuis le run : sans le jour de marge, la fin de l'horizon est coupée.
        return min(OPENMETEO_MAX_FORECAST_DAYS, math.ceil(self.horizon_h / 24) + 1)


MODELS: dict[str, ModelSpec] = {
    "AROMEHD": ModelSpec(
        key="AROMEHD",
        label="AROME HD",
        endpoint="https://api.open-meteo.com/v1/meteofrance",
        openmeteo_name="arome_france_hd",
        horizon_h=51,
        resolution="0.01° (~1,3 km)",
        notes="Nébulosité totale souvent absente : seules les couches sont renseignées.",
    ),
    "ARPEGE": ModelSpec(
        key="ARPEGE",
        label="ARPEGE Europe",
        endpoint="https://api.open-meteo.com/v1/meteofrance",
        openmeteo_name="arpege_europe",
        horizon_h=102,
        resolution="0.1° (~11 km)",
    ),
    "ICONCH1": ModelSpec(
        key="ICONCH1",
        label="ICON-CH1",
        endpoint="https://api.open-meteo.com/v1/forecast",
        openmeteo_name="meteoswiss_icon_ch1",
        horizon_h=33,
        resolution="0.01° (~1 km)",
        notes="Domaine MétéoSuisse (Europe centrale).",
    ),
    "ICONCH2": ModelSpec(
        key="ICONCH2",
        label="ICON-CH2",
        endpoint="https://api.open-meteo.com/v1/forecast",
        openmeteo_name="meteoswiss_icon_ch2",
        horizon_h=120,
        resolution="0.02° (~2 km)",
        notes="Domaine MétéoSuisse (Europe centrale).",
    ),
    "ICON13KM": ModelSpec(
        key="ICON13KM",
        label="ICON Global",
        endpoint="https://api.open-meteo.com/v1/dwd-icon",
        openmeteo_name="icon_global",
        horizon_h=180,
        resolution="0.1° (~11-13 km)",
    ),
    "IFS": ModelSpec(
        key="IFS",
        label="IFS HRES",
        endpoint="https://api.open-meteo.com/v1/ecmwf",
        openmeteo_name="ecmwf_ifs",
        horizon_h=360,
        resolution="~9 km",
    ),
    "GFS": ModelSpec(
        key="GFS",
        label="GFS",
        endpoint="https://api.open-meteo.com/v1/gfs",
        openmeteo_name="gfs_global",
        horizon_h=384,
        resolution="0.11° (~13 km)",
    ),
}

MODEL_ORDER = tuple(MODELS)
