"""Indicateurs journaliers pour le panneau quotidien."""

from __future__ import annotations

import math
from typing import Any, Sequence

from config import (
    GUST_SLOT_KT,
    MIN_SLOT_HOURS,
    SLOT_WINDOW_END_H,
    SLOT_WINDOW_START_H,
    TEMP_HOUR,
    WIND_SLOT_KT,
)
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
    cloud = max(point.cloud_cover_display_pct for point in window)
    return weather_icon(cloud, precip), cloud, precip


def _clamp_slot_hour(value: float) -> int:
    return max(SLOT_WINDOW_START_H, min(SLOT_WINDOW_END_H, round_to_hour(value)))


def ranges_above_threshold(
    hours: Sequence[float],
    values: Sequence[float],
    threshold: float,
) -> list[tuple[float, float]]:
    """Plages interpolées où la série reste strictement au-dessus du seuil."""
    if not hours or not values or len(hours) != len(values):
        return []
    paired = sorted(zip(hours, values), key=lambda item: item[0])
    hs = [item[0] for item in paired]
    vs = [item[1] for item in paired]
    ranges: list[tuple[float, float]] = []
    n = len(hs)
    i = 0
    while i < n:
        if vs[i] <= threshold:
            i += 1
            continue
        if i > 0 and vs[i - 1] <= threshold:
            t_start = _crossing(hs[i - 1], vs[i - 1], hs[i], vs[i], threshold)
        else:
            t_start = hs[i]
        j = i
        while j + 1 < n and vs[j + 1] > threshold:
            j += 1
        if j + 1 < n:
            t_end = _crossing(hs[j], vs[j], hs[j + 1], vs[j + 1], threshold)
        else:
            t_end = hs[j]
        if t_end >= t_start:
            ranges.append((t_start, t_end))
        i = j + 1
    return ranges


def _round_ranges(ranges: list[tuple[float, float]]) -> list[tuple[int, int]]:
    out: list[tuple[int, int]] = []
    for t_start, t_end in ranges:
        start_h = _clamp_slot_hour(t_start)
        end_h = _clamp_slot_hour(t_end)
        if end_h < start_h:
            end_h = start_h
        out.append((start_h, end_h))
    return out


def _slot_duration(slot: tuple[int, int]) -> int:
    return slot[1] - slot[0]


def _slot_distance(slot: tuple[int, int], peak_hour: float) -> float:
    start_h, end_h = slot
    if start_h <= peak_hour <= end_h:
        return 0.0
    if peak_hour < start_h:
        return start_h - peak_hour
    return peak_hour - end_h


def pick_closest_slot(slots: list[tuple[int, int]], peak_hour: float) -> tuple[int, int] | None:
    if not slots:
        return None

    def sort_key(slot: tuple[int, int]) -> tuple[float, float, int]:
        start_h, end_h = slot
        mid = (start_h + end_h) / 2
        return (_slot_distance(slot, peak_hour), abs(mid - peak_hour), start_h)

    return min(slots, key=sort_key)


def filter_day_window(
    hours: Sequence[float],
    *series: Sequence[float],
) -> tuple[list[float], ...]:
    """Garde uniquement 7 h–22 h (bornes incluses) pour le calcul de créneau."""
    kept_hours: list[float] = []
    kept_series: list[list[float]] = [[] for _ in series]
    for idx, hour in enumerate(hours):
        if hour < SLOT_WINDOW_START_H or hour > SLOT_WINDOW_END_H:
            continue
        kept_hours.append(hour)
        for s_idx, values in enumerate(series):
            kept_series[s_idx].append(values[idx])
    return (kept_hours, *kept_series)


def long_enough_slots(
    hours: Sequence[float],
    values: Sequence[float],
    threshold: float,
) -> list[tuple[int, int]]:
    rounded = _round_ranges(ranges_above_threshold(hours, values, threshold))
    return [slot for slot in rounded if _slot_duration(slot) >= MIN_SLOT_HOURS]


def choose_usable_slot(
    hours: Sequence[float],
    means: Sequence[float],
    gusts: Sequence[float],
    peak_hour: float,
) -> tuple[int, int] | None:
    """Créneau exploitable ≥ 3 h, d'abord au vent moyen > 8 nds, sinon rafales > 15 nds."""
    win_hours, win_means, win_gusts = filter_day_window(hours, means, gusts)
    mean_slots = long_enough_slots(win_hours, win_means, WIND_SLOT_KT)
    chosen = pick_closest_slot(mean_slots, peak_hour)
    if chosen is not None:
        return chosen
    gust_slots = long_enough_slots(win_hours, win_gusts, GUST_SLOT_KT)
    return pick_closest_slot(gust_slots, peak_hour)


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
    points = sorted(points, key=lambda point: point.hour_of_day)
    hours = [point.hour_of_day for point in points]
    means = [point.wind_speed_kt for point in points]
    gusts = [point.wind_gusts_kt for point in points]
    imax = max(range(len(means)), key=lambda i: (means[i], -hours[i]))
    peak = points[imax]
    slot = choose_usable_slot(hours, means, gusts, hours[imax])
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
