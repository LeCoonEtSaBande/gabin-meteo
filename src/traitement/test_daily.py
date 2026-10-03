"""Vérifie le créneau de vent interpolé et l'icône."""

from __future__ import annotations

from datetime import datetime

from config import curve_set_for_short_term
from curves import HourPoint
from daily import (
    choose_usable_slot,
    long_enough_slots,
    ranges_above_threshold,
    round_to_hour,
    slot_label,
    summarize_chart_day,
    summarize_day,
    weather_icon,
)


def test_round_to_hour() -> None:
    assert round_to_hour(17 + 53 / 60) == 18
    assert round_to_hour(17 + 15 / 60) == 17
    assert round_to_hour(17.5) == 18
    assert round_to_hour(7.5) == 8


def test_slot_nearest_hour() -> None:
    # Franchissements 7h30 et 11h45 → 08h et 12h
    hours = [7.0, 9.0, 10.5, 13.0]
    values = [5.0, 15.0, 15.0, 5.0]
    slots = long_enough_slots(hours, values, 10.0)
    assert slots == [(8, 12)], slots
    assert slot_label(slots[0]) == "(08h-12h)"


def test_slot_ignores_before_8_and_after_20() -> None:
    hours = [3.0, 7.0, 9.0, 12.0, 15.0, 21.0, 23.0]
    means = [20.0, 20.0, 15.0, 15.0, 15.0, 25.0, 25.0]
    slot = choose_usable_slot(hours, means, peak_hour=21.0)
    assert slot == (9, 15), slot


def test_slot_picks_closest_to_mean_max() -> None:
    hours = list(range(8, 21))
    means = [16.0, 16.0, 16.0, 4.0, 4.0, 4.0, 4.0, 4.0, 16.0, 16.0, 16.0, 16.0, 4.0]
    # Deux créneaux moyen : 8–11 et 16–20 (interpolation). Pic à 18 h → le second.
    assert choose_usable_slot(hours, means, peak_hour=18.0) == (16, 20)
    assert choose_usable_slot(hours, means, peak_hour=9.0) == (8, 11)


def test_no_gust_fallback() -> None:
    # Rafales fortes mais vent moyen sous 10 nds : pas de créneau.
    hours = [float(h) for h in range(8, 20)]
    points = [_point(int(h), mean=9.0, gust=25.0) for h in hours]
    assert choose_usable_slot(hours, [9.0] * len(hours), peak_hour=12.0) is None
    assert summarize_day(points)["slot_start_h"] is None


def test_slot_threshold_is_10_knots() -> None:
    hours = [float(h) for h in range(7, 23)]
    assert choose_usable_slot(hours, [9.5] * len(hours), peak_hour=12.0) is None
    assert choose_usable_slot(hours, [10.5] * len(hours), peak_hour=12.0) == (8, 20)


def test_slot_none_if_shorter_than_3h() -> None:
    hours = [8.0, 10.0, 12.0]
    values = [4.0, 12.0, 4.0]
    assert long_enough_slots(hours, values, 10.0) == []
    assert choose_usable_slot(hours, values, peak_hour=10.0) is None


def test_slot_below_threshold() -> None:
    hours = [8.0, 12.0, 16.0]
    assert ranges_above_threshold(hours, [4.0, 7.0, 6.0], 8.0) == []
    assert ranges_above_threshold(hours, [4.0, 8.0, 6.0], 8.0) == []
    assert choose_usable_slot(hours, [4.0, 10.0, 6.0], 12.0) is None


def test_curve_set_from_short_term() -> None:
    assert curve_set_for_short_term("ICONCH1") == "ICONIFS"
    assert curve_set_for_short_term("AROMEHD") == "AROMEIFS"


def _point(hour: int, mean: float = 4.0, gust: float = 6.0, precip: float = 0.0, cloud: float = 10.0) -> HourPoint:
    return HourPoint(
        valid_at=datetime(2026, 10, 8, hour),
        source_model="IFS",
        wind_speed_kt=mean,
        wind_gusts_kt=gust,
        wind_dir_deg=330.0,
        temperature_c=18.0,
        precipitation_mm=precip,
        cloud_cover_display_pct=cloud,
    )


def test_peak_limited_to_day_window() -> None:
    points = [_point(h, mean=20.0 if h in (7, 21, 23) else (12.0 if h == 14 else 4.0)) for h in range(24)]
    summary = summarize_day(points)
    assert summary["mean_max_kt"] == 12
    assert summary["valid_at_max"].endswith("T14:00")


def test_rain_icon_over_day_when_no_slot() -> None:
    # Cas Chasse-sur-Rhône 08/10 : 0,4 mm/h de 15 h à 20 h, vent max en soirée.
    points = [
        _point(h, mean=9.0 if h >= 20 else 3.0, precip=0.4 if 15 <= h <= 20 else 0.0, cloud=78.0)
        for h in range(24)
    ]
    summary = summarize_day(points)
    assert summary["slot_start_h"] is None
    assert summary["weather_icon"] == "pluie"
    assert summary["precip_mm"] == 2.4


def test_rain_icon_uses_slot_window() -> None:
    # Pluie le matin, créneau sec l'après-midi : pas d'icône pluie.
    points = [
        _point(h, mean=14.0 if 13 <= h <= 18 else 3.0, precip=1.5 if 7 <= h <= 9 else 0.0, cloud=40.0)
        for h in range(24)
    ]
    summary = summarize_day(points)
    assert (summary["slot_start_h"], summary["slot_end_h"]) == (13, 18)
    assert summary["weather_icon"] == "soleil-couvert"


def test_chart_day_peaks() -> None:
    points = [_point(h, mean=11.0 + (h == 15), gust=18.0 + 2 * (h == 16)) for h in range(9, 19)]
    day = summarize_chart_day(points)
    assert (day["slot_start_h"], day["slot_end_h"]) == (9, 18)
    assert (day["mean_max_kt"], day["mean_max_at"]) == (12, "2026-10-08T15:00")
    assert (day["gust_max_kt"], day["gust_max_at"]) == (20, "2026-10-08T16:00")


def test_summarize_day_empties_short_slot() -> None:
    points = [
        HourPoint(
            valid_at=datetime(2026, 8, 21, hour),
            source_model="ICONCH1",
            wind_speed_kt=4.0 if hour != 19 else 12.0,
            wind_gusts_kt=6.0 if hour != 19 else 16.0,
            wind_dir_deg=20.0,
            temperature_c=20.0,
            precipitation_mm=0.0,
            cloud_cover_display_pct=10.0,
        )
        for hour in range(0, 24)
    ]
    summary = summarize_day(points)
    assert summary is not None
    assert summary["mean_max_kt"] == 12
    assert summary["slot_start_h"] is None
    assert summary["slot_end_h"] is None
    assert summary["slot_label"] == ""


def test_weather_icon() -> None:
    assert weather_icon(10, 0, 0) == "soleil"
    assert weather_icon(50, 0, 0) == "soleil-couvert"
    assert weather_icon(90, 0, 0) == "couvert"
    assert weather_icon(50, 0.6, 0.2) == "soleil-couvert"
    assert weather_icon(50, 1.0, 0.2) == "pluie"
    assert weather_icon(40, 0.5, 0.5) == "pluie"
    assert weather_icon(80, 3.0, 3.0) == "orage"


if __name__ == "__main__":
    test_round_to_hour()
    test_slot_nearest_hour()
    test_slot_ignores_before_8_and_after_20()
    test_slot_picks_closest_to_mean_max()
    test_no_gust_fallback()
    test_slot_threshold_is_10_knots()
    test_slot_none_if_shorter_than_3h()
    test_slot_below_threshold()
    test_curve_set_from_short_term()
    test_peak_limited_to_day_window()
    test_rain_icon_over_day_when_no_slot()
    test_rain_icon_uses_slot_window()
    test_chart_day_peaks()
    test_summarize_day_empties_short_slot()
    test_weather_icon()
    print("ok")
