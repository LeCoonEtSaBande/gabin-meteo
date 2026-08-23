"""Assemblage des courbes AROMEIFS / ICONIFS / ICONGFS."""

from __future__ import annotations

import csv
from dataclasses import dataclass
from datetime import datetime
from io import StringIO

from cloud import cloud_cover_display, is_high_only_layers
from config import CURVE_SETS
from io_raw import load_forecasts_csv


@dataclass(frozen=True)
class HourPoint:
    valid_at: datetime
    source_model: str
    wind_speed_kt: float
    wind_gusts_kt: float
    wind_dir_deg: float
    temperature_c: float
    precipitation_mm: float
    cloud_cover_display_pct: float
    cloud_cover_source_model: str = ""

    @property
    def hour_of_day(self) -> float:
        return self.valid_at.hour + self.valid_at.minute / 60.0 + self.valid_at.second / 3600.0

    @property
    def day_key(self) -> str:
        return self.valid_at.strftime("%Y-%m-%d")


def parse_valid_at(raw: str) -> datetime:
    text = (raw or "").strip()
    if not text:
        raise ValueError("valid_at vide")
    if text.endswith("Z"):
        text = text[:-1]
    return datetime.fromisoformat(text)


def _as_float(raw: str | None) -> float:
    text = (raw or "").strip()
    if not text:
        return 0.0
    return float(text)


def _as_optional_float(raw: str | None) -> float | None:
    text = (raw or "").strip()
    if not text:
        return None
    return float(text)


def _wind_knots(row: dict[str, str], mean: bool) -> float:
    """Lit le vent déjà en nœuds (colonnes _kn)."""
    key = "wind_speed_10m_kn" if mean else "wind_gusts_10m_kn"
    return _as_float(row.get(key))


def _cloud_layers_from_row(row: dict[str, str]) -> tuple[float | None, float | None, float | None, float | None]:
    return (
        _as_optional_float(row.get("cloud_cover_pct")),
        _as_optional_float(row.get("cloud_cover_low_pct")),
        _as_optional_float(row.get("cloud_cover_mid_pct")),
        _as_optional_float(row.get("cloud_cover_high_pct")),
    )


def _has_cloud_layers(row: dict[str, str]) -> bool:
    return any(
        (row.get(name) or "").strip()
        for name in (
            "cloud_cover_pct",
            "cloud_cover_low_pct",
            "cloud_cover_mid_pct",
            "cloud_cover_high_pct",
        )
    )


def load_raw_points() -> dict[tuple[str, str], list[HourPoint]]:
    """Index (spot_key, model_key) → points horaires triés."""
    text = load_forecasts_csv()
    grouped: dict[tuple[str, str], list[HourPoint]] = {}
    reader = csv.DictReader(StringIO(text), delimiter=";")
    for row in reader:
        spot = (row.get("spot_key") or "").strip()
        model = (row.get("model_key") or "").strip()
        if not spot or not model:
            continue
        try:
            valid_at = parse_valid_at(row.get("valid_at") or "")
        except ValueError:
            continue
        total, low, mid, high = _cloud_layers_from_row(row)
        if _has_cloud_layers(row):
            if model == "AROMEHD" and is_high_only_layers(total, low, mid, high):
                low, mid = 0.0, 0.0
                display = cloud_cover_display(None, low, mid, high)
            else:
                display = cloud_cover_display(total, low, mid, high)
        else:
            display = _as_float(row.get("cloud_cover_max_pct"))
        point = HourPoint(
            valid_at=valid_at,
            source_model=model,
            wind_speed_kt=_wind_knots(row, mean=True),
            wind_gusts_kt=_wind_knots(row, mean=False),
            wind_dir_deg=_as_float(row.get("wind_direction_10m_deg")),
            temperature_c=_as_float(row.get("temperature_2m_c")),
            precipitation_mm=_as_float(row.get("precipitation_mm")),
            cloud_cover_display_pct=display,
            cloud_cover_source_model=model,
        )
        grouped.setdefault((spot, model), []).append(point)

    for points in grouped.values():
        points.sort(key=lambda item: item.valid_at)
    return grouped


def splice_curve(model_points: dict[str, list[HourPoint]], models: tuple[str, ...]) -> list[HourPoint]:
    """Garde le court terme jusqu'à son horizon, puis le modèle suivant, etc."""
    curve: list[HourPoint] = []
    cutoff: datetime | None = None
    for model in models:
        points = model_points.get(model) or []
        if cutoff is not None:
            points = [point for point in points if point.valid_at > cutoff]
        if not points:
            continue
        curve.extend(
            HourPoint(
                valid_at=point.valid_at,
                source_model=model,
                wind_speed_kt=point.wind_speed_kt,
                wind_gusts_kt=point.wind_gusts_kt,
                wind_dir_deg=point.wind_dir_deg,
                temperature_c=point.temperature_c,
                precipitation_mm=point.precipitation_mm,
                cloud_cover_display_pct=point.cloud_cover_display_pct,
                cloud_cover_source_model=point.cloud_cover_source_model or model,
            )
            for point in points
        )
        cutoff = points[-1].valid_at
    return curve


def build_all_curves(
    raw: dict[tuple[str, str], list[HourPoint]],
    spot_keys: list[str],
) -> dict[str, dict[str, list[HourPoint]]]:
    """curve_set → spot_key → courbe splicée."""
    result: dict[str, dict[str, list[HourPoint]]] = {name: {} for name in CURVE_SETS}
    for spot_key in spot_keys:
        by_model = {
            model: raw.get((spot_key, model), [])
            for models in CURVE_SETS.values()
            for model in models
        }
        for set_name, models in CURVE_SETS.items():
            result[set_name][spot_key] = splice_curve(by_model, models)
    return result
