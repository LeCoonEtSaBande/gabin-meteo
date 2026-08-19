"""Assemblage des courbes AROMEIFS / ICONIFS / ICONGFS."""

from __future__ import annotations

import csv
from dataclasses import dataclass
from datetime import datetime
from io import StringIO

from config import CURVE_SETS, kmh_to_kt
from io_raw import load_forecasts_csv


@dataclass(frozen=True)
class HourPoint:
    valid_at: datetime
    source_model: str
    wind_speed_kmh: float
    wind_gusts_kmh: float
    wind_dir_deg: float
    temperature_c: float
    precipitation_mm: float
    cloud_cover_pct: float

    @property
    def wind_speed_kt(self) -> float:
        return kmh_to_kt(self.wind_speed_kmh)

    @property
    def wind_gusts_kt(self) -> float:
        return kmh_to_kt(self.wind_gusts_kmh)

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
        point = HourPoint(
            valid_at=valid_at,
            source_model=model,
            wind_speed_kmh=_as_float(row.get("wind_speed_10m_kmh")),
            wind_gusts_kmh=_as_float(row.get("wind_gusts_10m_kmh")),
            wind_dir_deg=_as_float(row.get("wind_direction_10m_deg")),
            temperature_c=_as_float(row.get("temperature_2m_c")),
            precipitation_mm=_as_float(row.get("precipitation_mm")),
            cloud_cover_pct=_as_float(row.get("cloud_cover_max_pct")),
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
                wind_speed_kmh=point.wind_speed_kmh,
                wind_gusts_kmh=point.wind_gusts_kmh,
                wind_dir_deg=point.wind_dir_deg,
                temperature_c=point.temperature_c,
                precipitation_mm=point.precipitation_mm,
                cloud_cover_pct=point.cloud_cover_pct,
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
