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
    summarize_day,
    weather_icon,
)


def test_round_to_hour() -> None:
    assert round_to_hour(17 + 53 / 60) == 18
    assert round_to_hour(17 + 15 / 60) == 17
    assert round_to_hour(17.5) == 18
    assert round_to_hour(7.5) == 8


def test_slot_nearest_hour() -> None:
    # Franchissements 7h30 et 11h45 → 08h et 12h (points dès 7 h, pas 6 h)
    hours = [7.0, 9.0, 10.5, 13.0]
    values = [5.0, 15.0, 15.0, 5.0]
    slots = long_enough_slots(hours, values, 10.0)
    assert slots == [(8, 12)], slots
    assert slot_label(slots[0]) == "(08h-12h)"


def test_slot_ignores_before_7_and_after_22() -> None:
    hours = [3.0, 6.0, 9.0, 12.0, 15.0, 23.0]
    means = [20.0, 20.0, 15.0, 15.0, 15.0, 25.0]
    gusts = [25.0, 25.0, 18.0, 18.0, 18.0, 30.0]
    slot = choose_usable_slot(hours, means, gusts, peak_hour=23.0)
    assert slot == (9, 15), slot


def test_slot_picks_closest_to_mean_max() -> None:
    hours = list(range(8, 21))
    means = [12.0, 12.0, 12.0, 4.0, 4.0, 4.0, 4.0, 4.0, 14.0, 14.0, 14.0, 14.0, 4.0]
    gusts = [10.0] * len(hours)
    # Deux créneaux moyen : 8–11 et 15–20 (interpolation). Pic à 18 h → le second.
    assert choose_usable_slot(hours, means, gusts, peak_hour=18.0) == (15, 20)
    assert choose_usable_slot(hours, means, gusts, peak_hour=9.0) == (8, 11)


def test_slot_fallback_gusts_when_mean_too_short() -> None:
    hours = list(range(8, 20))
    means = [9.0, 9.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0]
    gusts = [16.0] * 8 + [10.0] * 4
    # Moyen 8–10 trop court. Rafales interpolées 8 h–15 h.
    slot = choose_usable_slot(hours, means, gusts, peak_hour=9.0)
    assert slot == (8, 15), slot


def test_slot_none_if_shorter_than_3h() -> None:
    hours = [8.0, 10.0, 12.0]
    values = [4.0, 9.0, 4.0]
    assert long_enough_slots(hours, values, 8.0) == []
    assert choose_usable_slot(hours, values, [10.0, 10.0, 10.0], peak_hour=10.0) is None


def test_slot_below_threshold() -> None:
    hours = [8.0, 12.0, 16.0]
    assert ranges_above_threshold(hours, [4.0, 7.0, 6.0], 8.0) == []
    assert ranges_above_threshold(hours, [4.0, 8.0, 6.0], 8.0) == []
    assert choose_usable_slot(hours, [4.0, 8.0, 6.0], [10.0, 15.0, 12.0], 12.0) is None


def test_curve_set_from_short_term() -> None:
    assert curve_set_for_short_term("ICONCH1") == "ICONIFS"
    assert curve_set_for_short_term("AROMEHD") == "AROMEIFS"


def test_summarize_day_empties_short_slot() -> None:
    points = [
        HourPoint(
            valid_at=datetime(2026, 8, 21, hour),
            source_model="ICONCH1",
            wind_speed_kt=4.0 if hour != 21 else 12.0,
            wind_gusts_kt=6.0 if hour != 21 else 16.0,
            wind_dir_deg=20.0,
            temperature_c=20.0,
            precipitation_mm=0.0,
            cloud_cover_pct=10.0,
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
    assert weather_icon(10, 0) == "soleil"
    assert weather_icon(50, 0) == "soleil-couvert"
    assert weather_icon(90, 0) == "couvert"
    assert weather_icon(40, 0.5) == "pluie"
    assert weather_icon(80, 3.0) == "orage"


if __name__ == "__main__":
    test_round_to_hour()
    test_slot_nearest_hour()
    test_slot_ignores_before_7_and_after_22()
    test_slot_picks_closest_to_mean_max()
    test_slot_fallback_gusts_when_mean_too_short()
    test_slot_none_if_shorter_than_3h()
    test_slot_below_threshold()
    test_curve_set_from_short_term()
    test_summarize_day_empties_short_slot()
    test_weather_icon()
    print("ok")
