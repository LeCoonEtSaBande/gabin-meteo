"""Tests de la grille de créneaux, du choix du jour et de la lecture des deux sources."""

from __future__ import annotations

import unittest
from datetime import date, datetime
from pathlib import Path
from tempfile import TemporaryDirectory

from run import (
    PARIS,
    UTC,
    Measure,
    compass,
    day_slots,
    elapsed_slots,
    index_swiss,
    mf_direction,
    mf_measure,
    mf_slot_url,
    parse_swiss_stamp,
    peak,
    plan,
    read_specs,
    swiss_measure,
)

SPECS = (
    "station_key;display_name;short_name;source;source_id;latitude;longitude;elevation_m;link_station;chip_dx_svg;chip_dy_svg\n"
    "geneve_cointrin;Genève / Cointrin;Genève;MeteoSuisse;GVE;46.247519;6.127742;411;https://exemple;;\n"
    "etoile;Étoile-sur-Rhône;Étoile;MeteoFrance;26124001;44.819;4.8895;145;https://exemple;70;\n"
    ";;;;;;;;;;\n"
)


class SlotTests(unittest.TestCase):
    def test_ordinary_day_has_48_slots(self) -> None:
        slots = day_slots(date(2026, 10, 11))
        self.assertEqual(len(slots), 48)
        self.assertEqual(slots[0].isoformat(timespec="minutes"), "2026-10-11T00:00+02:00")
        self.assertEqual(slots[-1].isoformat(timespec="minutes"), "2026-10-11T23:30+02:00")

    def test_spring_forward_day_has_46_slots(self) -> None:
        slots = day_slots(date(2026, 3, 29))
        self.assertEqual(len(slots), 46)
        locals_ = [f"{slot:%H:%M}" for slot in slots]
        self.assertNotIn("02:00", locals_)
        self.assertNotIn("02:30", locals_)

    def test_fall_back_day_has_50_slots_and_repeats_an_hour(self) -> None:
        slots = day_slots(date(2026, 10, 25))
        self.assertEqual(len(slots), 50)
        doubled = [slot.isoformat(timespec="minutes") for slot in slots if f"{slot:%H:%M}" == "02:00"]
        self.assertEqual(doubled, ["2026-10-25T02:00+02:00", "2026-10-25T02:00+01:00"])

    def test_slots_land_on_utc_half_hours(self) -> None:
        # Marques valides pour DPObs, qui n'accepte que les multiples de 6 minutes.
        for slot in day_slots(date(2026, 10, 11)):
            self.assertIn(slot.astimezone(UTC).minute, (0, 30))

    def test_elapsed_slots_stop_at_now(self) -> None:
        slots = elapsed_slots(date(2026, 10, 11), datetime(2026, 10, 11, 13, 10, tzinfo=PARIS))
        self.assertEqual(len(slots), 27)
        self.assertEqual(slots[-1].isoformat(timespec="minutes"), "2026-10-11T13:00+02:00")


class PlanTests(unittest.TestCase):
    def test_evening_run_writes_the_current_day(self) -> None:
        # 21 h UTC en été, 22 h UTC en hiver : 23h10 à Paris dans les deux cas.
        self.assertEqual(plan(datetime(2026, 10, 11, 23, 10, tzinfo=PARIS), None), (date(2026, 10, 11), "soir"))
        self.assertEqual(plan(datetime(2026, 12, 11, 23, 10, tzinfo=PARIS), None), (date(2026, 12, 11), "soir"))

    def test_midday_run_closes_the_previous_day(self) -> None:
        self.assertEqual(plan(datetime(2026, 10, 12, 13, 10, tzinfo=PARIS), None), (date(2026, 10, 11), "cloture"))
        self.assertEqual(plan(datetime(2026, 12, 12, 12, 10, tzinfo=PARIS), None), (date(2026, 12, 11), "cloture"))

    def test_run_just_after_midnight_closes_the_day_that_ended(self) -> None:
        # Été : le cron de 22 h UTC tombe à 00h10, la veille vient de se terminer.
        self.assertEqual(plan(datetime(2026, 10, 12, 0, 10, tzinfo=PARIS), None), (date(2026, 10, 11), "cloture"))

    def test_run_at_22h_does_nothing(self) -> None:
        # Hiver : le cron de 21 h UTC tombe à 22h10, trop tôt pour le jour en cours.
        self.assertEqual(plan(datetime(2026, 12, 11, 22, 10, tzinfo=PARIS), None), (None, "rien"))

    def test_explicit_day_wins(self) -> None:
        self.assertEqual(plan(datetime(2026, 10, 12, 9, 0, tzinfo=PARIS), "2026-10-05"), (date(2026, 10, 5), "manuel"))


class MeteoFranceTests(unittest.TestCase):
    def test_url_asks_the_slot_in_utc(self) -> None:
        slot = datetime(2026, 10, 11, 14, 30, tzinfo=PARIS)
        self.assertEqual(
            mf_slot_url("26124001", slot, "https://x"),
            "https://x/station/infrahoraire-6m?id_station=26124001&date=2026-10-11T12:30:00Z&format=csv",
        )

    def test_dd_at_360_is_north_and_0_is_calm(self) -> None:
        self.assertEqual(mf_direction({"dd": "360"}), 360)
        self.assertIsNone(mf_direction({"dd": "0"}))
        self.assertEqual(mf_direction({"dd": "0", "ddraf10": "350"}), 350)

    def test_measure_converts_m_per_s_and_kelvin(self) -> None:
        measure = mf_measure({"ff": "6.6", "raf10": "10.1", "dd": "360", "t": "288.75"})
        self.assertAlmostEqual(measure.wind_kn, 12.83, places=2)
        self.assertAlmostEqual(measure.gust_kn, 19.63, places=2)
        self.assertEqual(measure.dir_deg, 360)
        self.assertAlmostEqual(measure.temp_c, 15.6, places=2)

    def test_missing_fields_stay_empty(self) -> None:
        measure = mf_measure({"ff": "", "t": "/"})
        self.assertIsNone(measure.wind_kn)
        self.assertIsNone(measure.gust_kn)
        self.assertIsNone(measure.temp_c)


class MeteoSuisseTests(unittest.TestCase):
    def test_stamp_is_read_as_utc(self) -> None:
        stamp = parse_swiss_stamp("11.10.2026 23:50")
        self.assertEqual(stamp.isoformat(), "2026-10-11T23:50:00+00:00")
        self.assertIsNone(parse_swiss_stamp("hier"))

    def test_measure_converts_km_per_h(self) -> None:
        measure = swiss_measure({"fu3010z0": "18.5", "fu3010z1": "27.8", "dkl010z0": "212", "tre200s0": "13.5"})
        self.assertAlmostEqual(measure.wind_kn, 9.99, places=2)
        self.assertAlmostEqual(measure.gust_kn, 15.01, places=2)
        self.assertEqual(measure.dir_deg, 212)
        self.assertEqual(measure.temp_c, 13.5)

    def test_tail_rows_are_read_with_the_header_of_the_other_file(self) -> None:
        header = ["station_abbr", "reference_timestamp", "fu3010z0", "fu3010z1", "dkl010z0", "tre200s0"]
        tail = "GVE;11.10.2026 23:40;18.5;27.8;212;13.5\nGVE;11.10.2026 23:50;19;28;215;13.2\n"
        measures = index_swiss(tail, header)
        self.assertEqual(sorted(stamp.isoformat() for stamp in measures), [
            "2026-10-11T23:40:00+00:00",
            "2026-10-11T23:50:00+00:00",
        ])


class SpecsTests(unittest.TestCase):
    def test_specs_are_read_and_empty_lines_dropped(self) -> None:
        with TemporaryDirectory() as folder:
            path = Path(folder) / "balises.csv"
            path.write_text(SPECS, encoding="utf-8")
            stations = read_specs(path)
        self.assertEqual([station.key for station in stations], ["geneve_cointrin", "etoile"])
        self.assertEqual(stations[1].source_id, "26124001")
        self.assertEqual(stations[1].name, "Étoile-sur-Rhône")

    def test_a_new_balise_needs_no_code_change(self) -> None:
        with TemporaryDirectory() as folder:
            path = Path(folder) / "balises.csv"
            path.write_text(
                SPECS + "tournon;Tournon;Tournon;MeteoFrance;07324001;45.06;4.83;120;https://exemple;;\n",
                encoding="utf-8",
            )
            stations = read_specs(path)
        self.assertIn("tournon", [station.key for station in stations])


class SummaryTests(unittest.TestCase):
    def test_peak_ignores_night_slots(self) -> None:
        measures = {
            datetime(2026, 10, 11, 6, 0, tzinfo=PARIS): Measure(30.0, 40.0, 180, 10.0),
            datetime(2026, 10, 11, 14, 0, tzinfo=PARIS): Measure(12.0, 19.0, 350, 18.0),
            datetime(2026, 10, 11, 21, 0, tzinfo=PARIS): Measure(25.0, 35.0, 180, 14.0),
        }
        self.assertEqual(peak(measures, "wind_kn"), (12.0, datetime(2026, 10, 11, 14, 0, tzinfo=PARIS)))
        self.assertEqual(peak(measures, "gust_kn"), (19.0, datetime(2026, 10, 11, 14, 0, tzinfo=PARIS)))

    def test_peak_is_none_without_measures(self) -> None:
        self.assertIsNone(peak({}, "wind_kn"))

    def test_compass_is_written_in_french(self) -> None:
        self.assertEqual(compass(360), "N")
        self.assertEqual(compass(45), "NE")
        self.assertEqual(compass(292), "ONO")
        self.assertEqual(compass(None), "")


if __name__ == "__main__":
    unittest.main()
