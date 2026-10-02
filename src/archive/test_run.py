"""Tests du choix du jour archivé et de la fenêtre 01 h–24 h."""

from __future__ import annotations

import unittest
from datetime import date, datetime

from run import PARIS, default_target, incomplete_summary, snapshot_cutoff, target_hours


class TargetDayTests(unittest.TestCase):
    def test_at_23h_archives_tomorrow(self) -> None:
        self.assertEqual(default_target(datetime(2026, 10, 1, 23, 5, tzinfo=PARIS)), date(2026, 10, 2))

    def test_late_cron_after_midnight_keeps_same_day(self) -> None:
        self.assertEqual(default_target(datetime(2026, 10, 2, 0, 40, tzinfo=PARIS)), date(2026, 10, 2))
        self.assertEqual(default_target(datetime(2026, 10, 2, 9, 0, tzinfo=PARIS)), date(2026, 10, 2))

    def test_winter_early_cron_does_not_jump_ahead(self) -> None:
        # Hiver : le cron de 21 h UTC tombe à 22 h, avant le 23 h du jour.
        self.assertEqual(default_target(datetime(2026, 12, 1, 22, 5, tzinfo=PARIS)), date(2026, 12, 1))

    def test_hours_are_01h_to_24h(self) -> None:
        hours = target_hours(date(2026, 10, 2))
        self.assertEqual(len(hours), 24)
        self.assertEqual(hours[0], "2026-10-02T01:00")
        self.assertEqual(hours[-1], "2026-10-03T00:00")

    def test_cutoff_is_previous_day_23h(self) -> None:
        self.assertEqual(
            snapshot_cutoff(date(2026, 10, 2)).isoformat(), "2026-10-01T23:00:00+02:00"
        )

    def test_incomplete_summary_groups_spots(self) -> None:
        text = incomplete_summary({"a/ICONCH1": 23, "b/ICONCH1": 23}, 2)
        self.assertEqual(text, "ICON-CH1 23/24 h (tous les spots)")


if __name__ == "__main__":
    unittest.main()
