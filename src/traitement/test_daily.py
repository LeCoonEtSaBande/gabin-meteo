"""Vérifie le créneau de vent interpolé et l'icône."""

from __future__ import annotations

from daily import round_to_hour, slot_label, weather_icon, wind_slot_around_max


def test_round_to_hour() -> None:
    assert round_to_hour(17 + 53 / 60) == 18
    assert round_to_hour(17 + 15 / 60) == 17
    assert round_to_hour(17.5) == 18
    assert round_to_hour(7.5) == 8


def test_slot_nearest_hour() -> None:
    # Franchissements 7h30 et 11h45 → 08h et 12h
    hours = [6.0, 9.0, 10.5, 13.0]
    values = [5.0, 15.0, 15.0, 5.0]
    slot = wind_slot_around_max(hours, values, 10.0)
    assert slot == (8, 12), slot
    assert slot_label(slot) == "(08h-12h)"


def test_slot_default_threshold_8kt() -> None:
    # 9 nds : au-dessus de 8, en dessous de l'ancien seuil 10 → un créneau existe
    hours = [8.0, 10.0, 12.0]
    values = [4.0, 9.0, 4.0]
    slot = wind_slot_around_max(hours, values)
    assert slot == (10, 10), slot
    assert wind_slot_around_max(hours, values, 10.0) is None

    # Même profil qu'à 10 nds : le créneau s'élargit vers 07h
    hours = [6.0, 9.0, 10.5, 13.0]
    values = [5.0, 15.0, 15.0, 5.0]
    assert wind_slot_around_max(hours, values) == (7, 12)


def test_slot_below_threshold() -> None:
    assert wind_slot_around_max([8.0, 12.0], [4.0, 7.0]) is None
    assert wind_slot_around_max([8.0, 12.0], [4.0, 8.0]) is None


def test_weather_icon() -> None:
    assert weather_icon(10, 0) == "soleil"
    assert weather_icon(50, 0) == "soleil-couvert"
    assert weather_icon(90, 0) == "couvert"
    assert weather_icon(40, 0.5) == "pluie"
    assert weather_icon(80, 3.0) == "orage"


if __name__ == "__main__":
    test_round_to_hour()
    test_slot_nearest_hour()
    test_slot_default_threshold_8kt()
    test_slot_below_threshold()
    test_weather_icon()
    print("ok")
