"""Indicateurs journaliers pour le panneau quotidien."""

from __future__ import annotations

import math
from typing import Any

from config import TEMP_HOUR, WIND_SLOT_KT
from curves import HourPoint


def weather_icon(cloud_pct: float, precip_mm: float) -> str:
    if precip_mm >= 2.0:
        return "orage" if cloud_pct >= 60 else "pluie"
    if precip_mm >= 0.2:
        return "pluie"
    if cloud_pct >= 80:
        return "couvert"
    if cloud_pct >= 30:
        return "soleil-couvert"
    return "soleil"


def _crossing(t0: float, v0: float, t1: float, v1: float, threshold: float) -> float:
    if t1 == t0 or v1 == v0:
        return t0
    return t0 + (threshold - v0) * (t1 - t0) / (v1 - v0)


def round_to_hour(value: float) -> int:
    """Heure entière la plus proche (17h53 → 18, 17h15 → 17). 0,5 s'arrondit vers le haut."""
    return int(math.floor(value + 0.5))


def weather_icon_around_max(points: list[HourPoint], imax: int) -> tuple[str, float, float]:
    """Icône à partir du créneau du max, plus l'heure d'avant et celle d'après."""
    window = points[max(0, imax - 1) : min(len(points), imax + 2)]
    precip = max(point.precipitation_mm for point in window)
    cloud = max(point.cloud_cover_pct for point in window)
    return weather_icon(cloud, precip), cloud, precip


def wind_slot_around_max(
    hours: list[float],
    values: list[float],
    threshold: float = WIND_SLOT_KT,
) -> tuple[int, int] | None:
    """Créneau autour du max où le vent interpolé reste > seuil.

    Bornes arrondies à l'heure entière la plus proche (17h53 → 18h, 17h15 → 17h).
    """
    if not hours or not values or len(hours) != len(values):
        return None
    imax = max(range(len(values)), key=lambda i: (values[i], -hours[i]))
    if values[imax] <= threshold:
        return None

    t_start = hours[imax]
    for i in range(imax, 0, -1):
        if values[i - 1] > threshold:
            t_start = hours[i - 1]
            continue
        t_start = _crossing(hours[i - 1], values[i - 1], hours[i], values[i], threshold)
        break
    else:
        t_start = hours[0]

    t_end = hours[imax]
    for i in range(imax, len(values) - 1):
        if values[i + 1] > threshold:
            t_end = hours[i + 1]
            continue
        t_end = _crossing(hours[i], values[i], hours[i + 1], values[i + 1], threshold)
        break
    else:
        t_end = hours[-1]

    start_h = max(0, min(23, round_to_hour(t_start)))
    end_h = max(0, min(23, round_to_hour(t_end)))
    if end_h < start_h:
        end_h = start_h
    return start_h, end_h


def interpolate_at(hours: list[float], values: list[float], target: float) -> float | None:
    if not hours:
        return None
    if target <= hours[0]:
        return values[0] if abs(hours[0] - target) <= 1.5 else None
    if target >= hours[-1]:
        return values[-1] if abs(hours[-1] - target) <= 1.5 else None
    for i in range(1, len(hours)):
        if hours[i] >= target:
            t0, t1 = hours[i - 1], hours[i]
            v0, v1 = values[i - 1], values[i]
            if t1 == t0:
                return v0
            weight = (target - t0) / (t1 - t0)
            return v0 + weight * (v1 - v0)
    return None


def slot_label(slot: tuple[int, int] | None) -> str:
    if slot is None:
        return ""
    start_h, end_h = slot
    return f"({start_h:02d}h-{end_h:02d}h)"


def summarize_day(points: list[HourPoint]) -> dict[str, Any] | None:
    if not points:
        return None
    hours = [point.hour_of_day for point in points]
    means = [point.wind_speed_kt for point in points]
    imax = max(range(len(means)), key=lambda i: (means[i], -hours[i]))
    peak = points[imax]
    slot = wind_slot_around_max(hours, means)
    temp_15 = interpolate_at(hours, [point.temperature_c for point in points], float(TEMP_HOUR))
    icon, cloud, precip = weather_icon_around_max(points, imax)
    return {
        "mean_max_kt": int(round(peak.wind_speed_kt)),
        "gust_at_mean_max_kt": int(round(peak.wind_gusts_kt)),
        "wind_dir_deg": round(peak.wind_dir_deg, 1),
        "temp_15h_c": None if temp_15 is None else int(round(temp_15)),
        "slot_start_h": None if slot is None else slot[0],
        "slot_end_h": None if slot is None else slot[1],
        "slot_label": slot_label(slot),
        "weather_icon": icon,
        "valid_at_max": peak.valid_at.strftime("%Y-%m-%dT%H:%M"),
        "source_model_at_max": peak.source_model,
        "cloud_cover_pct": round(cloud, 1),
        "precip_mm": round(precip, 2),
        "mean_max_kt_raw": round(peak.wind_speed_kt, 2),
        "gust_at_mean_max_kt_raw": round(peak.wind_gusts_kt, 2),
    }


def summarize_spot_days(curve: list[HourPoint]) -> dict[str, dict[str, Any]]:
    by_day: dict[str, list[HourPoint]] = {}
    for point in curve:
        by_day.setdefault(point.day_key, []).append(point)
    out: dict[str, dict[str, Any]] = {}
    for day_key, day_points in sorted(by_day.items()):
        summary = summarize_day(day_points)
        if summary:
            out[day_key] = summary
    return out
