"""Indicateurs journaliers pour le panneau quotidien."""

from __future__ import annotations

import math
from typing import Any, Sequence

from config import (
    MIN_SLOT_HOURS,
    OVERCAST_PCT,
    PARTLY_CLOUDY_PCT,
    RAIN_HOURLY_MM,
    RAIN_TOTAL_MM,
    SLOT_WINDOW_END_H,
    SLOT_WINDOW_START_H,
    STORM_HOURLY_MM,
    TEMP_HOUR,
    WIND_SLOT_KT,
)
from curves import HourPoint


def weather_icon(cloud_mean_pct: float, precip_total_mm: float, precip_max_mm: float) -> str:
    """Pluie sur cumul ou intensité horaire, puis nébulosité moyenne."""
    if precip_max_mm >= STORM_HOURLY_MM:
        return "orage"
    if precip_total_mm >= RAIN_TOTAL_MM or precip_max_mm >= RAIN_HOURLY_MM:
        return "pluie"
    if cloud_mean_pct >= OVERCAST_PCT:
        return "couvert"
    if cloud_mean_pct >= PARTLY_CLOUDY_PCT:
        return "soleil-couvert"
    return "soleil"


def _crossing(t0: float, v0: float, t1: float, v1: float, threshold: float) -> float:
    if t1 == t0 or v1 == v0:
        return t0
    return t0 + (threshold - v0) * (t1 - t0) / (v1 - v0)


def round_to_hour(value: float) -> int:
    """Heure entière la plus proche (17h53 → 18, 17h15 → 17). 0,5 s'arrondit vers le haut."""
    return int(math.floor(value + 0.5))


def in_day_window(hour: float, start_h: float = SLOT_WINDOW_START_H, end_h: float = SLOT_WINDOW_END_H) -> bool:
    return start_h <= hour <= end_h


def weather_for_window(points: Sequence[HourPoint]) -> tuple[str, float, float, float]:
    """Icône, nébulosité moyenne, cumul et max horaire de pluie sur la fenêtre."""
    if not points:
        return "soleil", 0.0, 0.0, 0.0
    cloud = sum(point.cloud_cover_display_pct for point in points) / len(points)
    total = sum(point.precipitation_mm for point in points)
    peak = max(point.precipitation_mm for point in points)
    return weather_icon(cloud, total, peak), cloud, total, peak


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
    """Garde uniquement 8 h–20 h (bornes incluses) pour le calcul de créneau."""
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
    peak_hour: float,
) -> tuple[int, int] | None:
    """Créneau exploitable ≥ 3 h de vent moyen > 10 nds, le plus proche du pic."""
    win_hours, win_means = filter_day_window(hours, means)
    mean_slots = long_enough_slots(win_hours, win_means, WIND_SLOT_KT)
    return pick_closest_slot(mean_slots, peak_hour)


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


def _peak_index(values: Sequence[float], hours: Sequence[float]) -> int:
    return max(range(len(values)), key=lambda i: (values[i], -hours[i]))


def _day_slot(points: list[HourPoint]) -> tuple[list[HourPoint], int, tuple[int, int] | None]:
    """Points 8 h–20 h, index du pic de vent moyen parmi eux, créneau retenu."""
    day = [point for point in points if in_day_window(point.hour_of_day)]
    if not day:
        return [], -1, None
    imax = _peak_index([point.wind_speed_kt for point in day], [point.hour_of_day for point in day])
    slot = choose_usable_slot(
        [point.hour_of_day for point in points],
        [point.wind_speed_kt for point in points],
        day[imax].hour_of_day,
    )
    return day, imax, slot


def summarize_day(points: list[HourPoint]) -> dict[str, Any] | None:
    if not points:
        return None
    points = sorted(points, key=lambda point: point.hour_of_day)
    day, imax, slot = _day_slot(points)
    if not day:
        return None
    peak = day[imax]
    hours = [point.hour_of_day for point in points]
    temp_15 = interpolate_at(hours, [point.temperature_c for point in points], float(TEMP_HOUR))
    wx_start, wx_end = slot if slot else (SLOT_WINDOW_START_H, SLOT_WINDOW_END_H)
    wx_points = [point for point in day if in_day_window(point.hour_of_day, wx_start, wx_end)]
    icon, cloud, precip, precip_max = weather_for_window(wx_points)
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
        "precip_max_mm_h": round(precip_max, 2),
        "mean_max_kt_raw": round(peak.wind_speed_kt, 2),
        "gust_at_mean_max_kt_raw": round(peak.wind_gusts_kt, 2),
    }


def summarize_chart_day(points: list[HourPoint]) -> dict[str, Any] | None:
    """Créneau et pics 8 h–20 h d'une courbe, pour le graphique du détail."""
    if not points:
        return None
    points = sorted(points, key=lambda point: point.hour_of_day)
    day, imax, slot = _day_slot(points)
    if not day:
        return None
    hours = [point.hour_of_day for point in day]
    igust = _peak_index([point.wind_gusts_kt for point in day], hours)
    return {
        "slot_start_h": None if slot is None else slot[0],
        "slot_end_h": None if slot is None else slot[1],
        "mean_max_kt": int(round(day[imax].wind_speed_kt)),
        "mean_max_at": day[imax].valid_at.strftime("%Y-%m-%dT%H:%M"),
        "gust_max_kt": int(round(day[igust].wind_gusts_kt)),
        "gust_max_at": day[igust].valid_at.strftime("%Y-%m-%dT%H:%M"),
    }


def _by_day(curve: list[HourPoint]) -> dict[str, list[HourPoint]]:
    by_day: dict[str, list[HourPoint]] = {}
    for point in curve:
        by_day.setdefault(point.day_key, []).append(point)
    return by_day


def summarize_chart_days(curve: list[HourPoint]) -> dict[str, dict[str, Any]]:
    out: dict[str, dict[str, Any]] = {}
    for day_key, day_points in sorted(_by_day(curve).items()):
        summary = summarize_chart_day(day_points)
        if summary:
            out[day_key] = summary
    return out


def summarize_spot_days(curve: list[HourPoint]) -> dict[str, dict[str, Any]]:
    out: dict[str, dict[str, Any]] = {}
    for day_key, day_points in sorted(_by_day(curve).items()):
        summary = summarize_day(day_points)
        if summary:
            out[day_key] = summary
    return out
