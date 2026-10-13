"""Tests des créneaux : deux par jour, 6h15 et 18h15, et retards de cron."""

from __future__ import annotations

import unittest
from datetime import datetime, timezone

from config import PARIS
from schedule import already_collected_for_slot, current_slot_start


def paris(*args: int) -> datetime:
    return datetime(*args, tzinfo=PARIS)


class CurrentSlotStartTests(unittest.TestCase):
    def test_exact_slot_opening(self) -> None:
        now = paris(2026, 8, 27, 6, 15)
        self.assertEqual(current_slot_start(now), now.replace(second=0, microsecond=0))

    def test_before_morning_uses_yesterday_evening(self) -> None:
        now = paris(2026, 8, 27, 5, 30)
        self.assertEqual(current_slot_start(now), paris(2026, 8, 26, 18, 15))

    def test_afternoon_still_on_morning_slot(self) -> None:
        now = paris(2026, 8, 27, 13, 1)
        self.assertEqual(current_slot_start(now), paris(2026, 8, 27, 6, 15))

    def test_delayed_evening_keeps_evening_slot(self) -> None:
        now = paris(2026, 8, 26, 22, 51)
        self.assertEqual(current_slot_start(now), paris(2026, 8, 26, 18, 15))

    def test_late_morning_stays_on_morning_slot(self) -> None:
        now = paris(2026, 8, 26, 9, 42)
        self.assertEqual(current_slot_start(now), paris(2026, 8, 26, 6, 15))


class UtcCronTests(unittest.TestCase):
    """Le cron `28 5,17 * * *` UTC tombe dans le bon créneau été comme hiver."""

    def utc(self, *args: int) -> datetime:
        return datetime(*args, tzinfo=timezone.utc).astimezone(PARIS)

    def assert_collects(self, run: datetime, slot: datetime, previous: datetime) -> None:
        self.assertEqual(current_slot_start(run), slot)
        # La collecte précédente appartient à l'autre créneau : celle-ci doit partir.
        self.assertFalse(already_collected_for_slot(slot, {"last_update_at": previous.isoformat()}))
        # Un second départ dans le même créneau ne recollecte pas.
        self.assertTrue(already_collected_for_slot(slot, {"last_update_at": run.isoformat()}))

    def test_winter_runs_at_6h28_and_18h28(self) -> None:
        morning, evening = self.utc(2026, 1, 15, 5, 28), self.utc(2026, 1, 15, 17, 28)
        self.assertEqual((f"{morning:%H:%M}", f"{evening:%H:%M}"), ("06:28", "18:28"))
        self.assert_collects(morning, paris(2026, 1, 15, 6, 15), self.utc(2026, 1, 14, 17, 28))
        self.assert_collects(evening, paris(2026, 1, 15, 18, 15), morning)

    def test_summer_runs_at_7h28_and_19h28(self) -> None:
        morning, evening = self.utc(2026, 8, 27, 5, 28), self.utc(2026, 8, 27, 17, 28)
        self.assertEqual((f"{morning:%H:%M}", f"{evening:%H:%M}"), ("07:28", "19:28"))
        self.assert_collects(morning, paris(2026, 8, 27, 6, 15), self.utc(2026, 8, 26, 17, 28))
        self.assert_collects(evening, paris(2026, 8, 27, 18, 15), morning)


class AlreadyCollectedTests(unittest.TestCase):
    def test_missed_morning_is_recovered_when_late(self) -> None:
        slot = paris(2026, 8, 27, 6, 15)
        last = {"last_update_at": "2026-08-26T18:22:01+02:00"}
        self.assertFalse(already_collected_for_slot(slot, last))

    def test_second_cron_same_morning_is_skipped(self) -> None:
        slot = paris(2026, 8, 26, 6, 15)
        last = {"last_update_at": "2026-08-26T06:29:00+02:00"}
        self.assertTrue(already_collected_for_slot(slot, last))

    def test_evening_after_morning_is_not_skipped(self) -> None:
        slot = paris(2026, 8, 26, 18, 15)
        last = {"last_update_at": "2026-08-26T06:29:01+02:00"}
        self.assertFalse(already_collected_for_slot(slot, last))

    def test_missing_last_update_collects(self) -> None:
        self.assertFalse(already_collected_for_slot(paris(2026, 8, 27, 6, 15), None))


if __name__ == "__main__":
    unittest.main()
