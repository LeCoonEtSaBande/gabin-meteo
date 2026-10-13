"""Tests du choix du jour archivé et de la fenêtre 01 h–24 h."""

from __future__ import annotations

import unittest
from datetime import date, datetime

from run import PARIS, default_target, incomplete_summary, snapshot_cutoff, target_hours


class TargetDayTests(unittest.TestCase):
    def test_at_1h_archives_the_day_that_starts(self) -> None:
        # Été : le cron de 23 h UTC tombe à 1 h du matin.
        self.assertEqual(default_target(datetime(2026, 10, 2, 1, 5, tzinfo=PARIS)), date(2026, 10, 2))

    def test_winter_cron_just_after_midnight_targets_the_same_day(self) -> None:
        # Hiver : le même cron de 23 h UTC tombe à minuit cinq.
        self.assertEqual(default_target(datetime(2026, 12, 1, 0, 5, tzinfo=PARIS)), date(2026, 12, 1))

    def test_late_cron_keeps_the_same_day(self) -> None:
        # GitHub ne tient pas ses horaires : un passage de 9 h archive le même
        # jour, et la coupure à minuit lui fait relire la même collecte.
        for hour in (2, 4, 9, 20):
            self.assertEqual(
                default_target(datetime(2026, 10, 2, hour, 0, tzinfo=PARIS)), date(2026, 10, 2)
            )

    def test_hours_are_01h_to_24h(self) -> None:
        hours = target_hours(date(2026, 10, 2))
        self.assertEqual(len(hours), 24)
        self.assertEqual(hours[0], "2026-10-02T01:00")
        self.assertEqual(hours[-1], "2026-10-03T00:00")

    def test_cutoff_is_midnight_of_the_archived_day(self) -> None:
        self.assertEqual(
            snapshot_cutoff(date(2026, 10, 2)).isoformat(), "2026-10-02T00:00:00+02:00"
        )

    def test_cutoff_does_not_move_with_the_run_time(self) -> None:
        # Deux passages très éloignés visent la même collecte source.
        early = default_target(datetime(2026, 10, 2, 1, 5, tzinfo=PARIS))
        late = default_target(datetime(2026, 10, 2, 11, 40, tzinfo=PARIS))
        self.assertEqual(snapshot_cutoff(early), snapshot_cutoff(late))

    def test_incomplete_summary_groups_spots(self) -> None:
        text = incomplete_summary({"a/ICONCH1": 23, "b/ICONCH1": 23}, 2)
        self.assertEqual(text, "ICON-CH1 23/24 h (tous les spots)")


if __name__ == "__main__":
    unittest.main()
