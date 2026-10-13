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
    build_day_markdown,
    build_rows,
    compass,
    day_slots,
    elapsed_slots,
    expected_total,
    fine_window,
    index_swiss,
    mf_direction,
    mf_measure,
    mf_paquet_url,
    mf_stamp,
    merge_measures,
    mf_slot_url,
    parse_swiss_stamp,
    peak,
    plan,
    read_specs,
    station_slots,
    swiss_measure,
)

HEADER = (
    "station_key;display_name;short_name;source;source_id;latitude;longitude;"
    "elevation_m;link_station;chip_dx_svg;chip_dy_svg;pas_fin_min;pas_fin_debut_h;pas_fin_fin_h\n"
)
SPECS = (
    HEADER
    + "geneve_cointrin;Genève / Cointrin;Genève;MeteoSuisse;GVE;46.247519;6.127742;411;https://exemple;;;;;\n"
    + "etoile;Étoile-sur-Rhône;Étoile;MeteoFrance;26124001;44.819;4.8895;145;https://exemple;70;;6;11;19\n"
    + ";;;;;;;;;;;;;\n"
)


def one_station(line: str):
    with TemporaryDirectory() as folder:
        path = Path(folder) / "balises.csv"
        path.write_text(HEADER + line, encoding="utf-8")
        return read_specs(path)[0]


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
        slots = elapsed_slots(day_slots(date(2026, 10, 11)), datetime(2026, 10, 11, 13, 10, tzinfo=PARIS))
        self.assertEqual(len(slots), 27)
        self.assertEqual(slots[-1].isoformat(timespec="minutes"), "2026-10-11T13:00+02:00")


class StationSlotTests(unittest.TestCase):
    ETOILE = "etoile;Étoile;Étoile;MeteoFrance;26124001;44.8;4.9;145;https://x;70;;6;11;19\n"
    MACON = "macon;Mâcon;Mâcon;MeteoFrance;71105001;46.3;4.8;221;https://x;;;;;\n"

    def test_a_balise_without_fine_step_keeps_the_half_hours(self) -> None:
        station = one_station(self.MACON)
        self.assertEqual(station.fine_step_min, 0)
        self.assertEqual(station_slots(station, date(2026, 10, 11)), day_slots(date(2026, 10, 11)))

    def test_the_two_grids_are_a_union_not_a_sum(self) -> None:
        # 48 demi-heures et 80 pas de 6 min, dont 16 tombent sur les mêmes instants.
        slots = station_slots(one_station(self.ETOILE), date(2026, 10, 11))
        self.assertEqual(len(slots), 112)
        self.assertEqual(len(set(slots)), 112)
        self.assertEqual(slots, sorted(slots))

    def test_the_fine_step_only_applies_inside_its_window(self) -> None:
        slots = station_slots(one_station(self.ETOILE), date(2026, 10, 11))
        minutes = {f"{slot:%H:%M}" for slot in slots}
        self.assertIn("11:06", minutes)
        self.assertIn("18:54", minutes)
        self.assertNotIn("10:54", minutes)
        self.assertNotIn("19:06", minutes)

    def test_step_min_follows_the_window(self) -> None:
        station = one_station(self.ETOILE)
        self.assertEqual(station.step_at(datetime(2026, 10, 11, 10, 30, tzinfo=PARIS)), 30)
        self.assertEqual(station.step_at(datetime(2026, 10, 11, 11, 0, tzinfo=PARIS)), 6)
        self.assertEqual(station.step_at(datetime(2026, 10, 11, 18, 54, tzinfo=PARIS)), 6)
        self.assertEqual(station.step_at(datetime(2026, 10, 11, 19, 0, tzinfo=PARIS)), 30)
        self.assertEqual(one_station(self.MACON).step_at(datetime(2026, 10, 11, 14, 0, tzinfo=PARIS)), 30)

    def test_fine_slots_land_on_valid_dpobs_marks(self) -> None:
        # DPObs n'accepte que les multiples de 6 minutes en UTC.
        for slot in station_slots(one_station(self.ETOILE), date(2026, 10, 11)):
            self.assertEqual(slot.astimezone(UTC).minute % 6, 0)


class FineWindowTests(unittest.TestCase):
    def test_a_window_is_read_from_the_three_columns(self) -> None:
        self.assertEqual(fine_window({"pas_fin_min": "6", "pas_fin_debut_h": "11", "pas_fin_fin_h": "19"}), (6, 11, 19))

    def test_a_window_up_to_midnight_is_accepted(self) -> None:
        self.assertEqual(fine_window({"pas_fin_min": "10", "pas_fin_debut_h": "0", "pas_fin_fin_h": "24"}), (10, 0, 24))

    def test_a_step_that_does_not_divide_the_hour_is_refused(self) -> None:
        # 7 min ne retomberait pas sur ses pieds d'une heure à l'autre.
        self.assertEqual(fine_window({"pas_fin_min": "7", "pas_fin_debut_h": "11", "pas_fin_fin_h": "19"}), (0, 0, 0))

    def test_an_empty_or_backwards_window_is_refused(self) -> None:
        self.assertEqual(fine_window({}), (0, 0, 0))
        self.assertEqual(fine_window({"pas_fin_min": "6", "pas_fin_debut_h": "19", "pas_fin_fin_h": "11"}), (0, 0, 0))
        self.assertEqual(fine_window({"pas_fin_min": "6", "pas_fin_debut_h": "11", "pas_fin_fin_h": "11"}), (0, 0, 0))
        self.assertEqual(fine_window({"pas_fin_min": "6", "pas_fin_debut_h": "11", "pas_fin_fin_h": "25"}), (0, 0, 0))

    def test_a_malformed_column_falls_back_to_the_common_step(self) -> None:
        self.assertEqual(fine_window({"pas_fin_min": "six", "pas_fin_debut_h": "11", "pas_fin_fin_h": "19"}), (0, 0, 0))


class PlanTests(unittest.TestCase):
    def test_the_day_archived_is_the_one_that_ended(self) -> None:
        self.assertEqual(plan(datetime(2026, 10, 12, 1, 5, tzinfo=PARIS), None), (date(2026, 10, 11), "veille"))
        self.assertEqual(plan(datetime(2026, 12, 12, 1, 5, tzinfo=PARIS), None), (date(2026, 12, 11), "veille"))

    def test_a_late_cron_still_aims_at_the_same_day(self) -> None:
        # Les cinq déclenchements, et même un retard de GitHub, visent la veille.
        for hour in (0, 1, 2, 3, 4, 5, 11, 23):
            with self.subTest(hour=hour):
                now = datetime(2026, 10, 12, hour, 40, tzinfo=PARIS)
                self.assertEqual(plan(now, None), (date(2026, 10, 11), "veille"))

    def test_explicit_day_wins(self) -> None:
        self.assertEqual(plan(datetime(2026, 10, 12, 9, 0, tzinfo=PARIS), "2026-10-05"), (date(2026, 10, 5), "manuel"))


class MeteoFranceTests(unittest.TestCase):
    def test_url_asks_the_slot_in_utc(self) -> None:
        slot = datetime(2026, 10, 11, 14, 30, tzinfo=PARIS)
        self.assertEqual(
            mf_slot_url("26124001", slot, "https://x"),
            "https://x/station/infrahoraire-6m?id_station=26124001&date=2026-10-11T12:30:00Z&format=csv",
        )

    def test_the_paquet_url_carries_no_date(self) -> None:
        # Le paquet rend toujours les 24 h qui précèdent l'appel.
        self.assertEqual(
            mf_paquet_url("26124001", "https://x"),
            "https://x/paquet/infrahoraire-6m?id_station=26124001&format=csv",
        )

    def test_the_paquet_stamp_is_read_as_utc(self) -> None:
        self.assertEqual(
            mf_stamp({"validity_time": "2026-10-11T12:30:00Z"}).isoformat(),
            "2026-10-11T12:30:00+00:00",
        )
        self.assertEqual(
            mf_stamp({"reference_time": "2026-10-11T12:30:00+00:00"}).isoformat(),
            "2026-10-11T12:30:00+00:00",
        )
        self.assertIsNone(mf_stamp({"validity_time": ""}))

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
        self.assertEqual(stations[0].fine_step_min, 0)
        self.assertEqual(
            (stations[1].fine_step_min, stations[1].fine_from_hour, stations[1].fine_to_hour),
            (6, 11, 19),
        )

    def test_a_new_balise_needs_no_code_change(self) -> None:
        with TemporaryDirectory() as folder:
            path = Path(folder) / "balises.csv"
            path.write_text(
                SPECS
                + "tournon;Tournon;Tournon;MeteoFrance;07324001;45.06;4.83;120;https://exemple;;;6;10;18\n",
                encoding="utf-8",
            )
            stations = read_specs(path)
        new = [station for station in stations if station.key == "tournon"][0]
        self.assertEqual(new.fine_from_hour, 10)
        self.assertEqual(len(station_slots(new, date(2026, 10, 11))), 112)


class MergeTests(unittest.TestCase):
    def test_fresh_values_win_and_old_slots_survive(self) -> None:
        soir = datetime(2026, 10, 11, 12, 0, tzinfo=PARIS)
        nuit = datetime(2026, 10, 11, 23, 30, tzinfo=PARIS)
        archived = {"etoile": {soir: Measure(10.0, 15.0, 180, 12.0)}}
        fresh = {"etoile": {soir: Measure(17.7, 23.9, 350, 15.8), nuit: Measure(4.0, 6.0, 20, 11.0)}}
        merged = merge_measures(archived, fresh)
        self.assertEqual(merged["etoile"][soir].wind_kn, 17.7)
        self.assertEqual(merged["etoile"][nuit].wind_kn, 4.0)

    def test_a_mute_source_does_not_erase_the_day(self) -> None:
        soir = datetime(2026, 10, 11, 12, 0, tzinfo=PARIS)
        archived = {"geneve_cointrin": {soir: Measure(4.9, 7.8, 60, 15.1)}}
        merged = merge_measures(archived, {"geneve_cointrin": {}})
        self.assertEqual(merged["geneve_cointrin"][soir].gust_kn, 7.8)

    def test_slots_are_matched_on_the_instant_not_the_timezone_object(self) -> None:
        # Le CSV relu rend un décalage figé, la grille une zone nommée.
        from datetime import timezone, timedelta as delta

        relu = datetime(2026, 10, 11, 12, 0, tzinfo=timezone(delta(hours=2)))
        grille = datetime(2026, 10, 11, 12, 0, tzinfo=PARIS)
        merged = merge_measures({"etoile": {relu: Measure(10.0, 15.0, 180, 12.0)}}, {})
        self.assertIn(grille, merged["etoile"])


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


class DayFileTests(unittest.TestCase):
    DAY = date(2026, 10, 11)

    def setUp(self) -> None:
        with TemporaryDirectory() as folder:
            path = Path(folder) / "balises.csv"
            path.write_text(SPECS, encoding="utf-8")
            self.stations = read_specs(path)
        self.measures = {
            "geneve_cointrin": {
                datetime(2026, 10, 11, 14, 0, tzinfo=PARIS): Measure(9.9, 15.0, 212, 13.5),
            },
            "etoile": {
                datetime(2026, 10, 11, 14, 0, tzinfo=PARIS): Measure(12.8, 19.6, 350, 15.6),
                datetime(2026, 10, 11, 14, 6, tzinfo=PARIS): Measure(13.5, 21.0, 355, 15.8),
            },
        }
        self.meta = {
            "day": self.DAY.isoformat(),
            "complet": True,
            "balises": len(self.stations),
            "balises_par_source": {"MeteoFrance": 1, "MeteoSuisse": 1},
            "creneaux_attendus": {
                station.key: len(station_slots(station, self.DAY)) for station in self.stations
            },
            "couverture": {key: len(slots) for key, slots in self.measures.items()},
            "archived_at": "2026-10-12T01:05:00+02:00",
        }

    def test_step_min_is_written_on_each_row(self) -> None:
        rows = build_rows(self.DAY, self.stations, self.measures, datetime(2026, 10, 12, 1, 5, tzinfo=PARIS))
        steps = {row["valid_at"]: row["step_min"] for row in rows if row["station_key"] == "etoile"}
        self.assertEqual(steps["2026-10-11T14:00+02:00"], "6")
        self.assertEqual(steps["2026-10-11T14:06+02:00"], "6")

    def test_markdown_counts_each_balise_against_its_own_grid(self) -> None:
        text = build_day_markdown(self.DAY, self.stations, self.measures, self.meta)
        # Le pic retient la mesure de 14h06, absente du tableau mais présente dans le CSV.
        self.assertIn("| Étoile-sur-Rhône | 13.5 | 14h06 | 21.0 | 14h06 | 2/112 |", text)
        self.assertIn("| Genève / Cointrin | 9.9 | 14h00 | 15.0 | 14h00 | 1/48 |", text)

    def test_markdown_tables_stay_on_the_half_hours(self) -> None:
        # Le CSV garde les 6 minutes ; le tableau lu par Claude resterait illisible.
        text = build_day_markdown(self.DAY, self.stations, self.measures, self.meta)
        self.assertIn("| 14h00 | 12.8 | 19.6 | 350° N | 15.6 |", text)
        self.assertNotIn("14h06 | 13.5", text)
        self.assertIn("Mesurées plus finement sur une plage : Étoile-sur-Rhône (11 h – 19 h, pas de 6 min)", text)


class ExpectedTotalTests(unittest.TestCase):
    def test_a_day_with_a_fine_step_sums_its_balises(self) -> None:
        meta = {"creneaux_attendus": {"etoile": 112, "reventin": 112, "macon": 48}}
        self.assertEqual(expected_total(meta), 272)

    def test_a_day_archived_before_the_fine_step_is_still_readable(self) -> None:
        # L'index relit les anciens fichiers tels quels, sans les réécrire.
        self.assertEqual(expected_total({"creneaux": 48, "balises": 11}), 528)

    def test_a_meta_without_either_counts_zero(self) -> None:
        self.assertEqual(expected_total({}), 0)


if __name__ == "__main__":
    unittest.main()
