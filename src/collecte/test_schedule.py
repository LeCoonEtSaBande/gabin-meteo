"""Tests des créneaux (retards cron, été 7h15 / hiver 6h15)."""

from __future__ import annotations

import unittest
from datetime import datetime

from config import PARIS
from schedule import already_collected_for_slot, current_slot_start


def paris(*args: int) -> datetime:
    return datetime(*args, tzinfo=PARIS)


class CurrentSlotStartTests(unittest.TestCase):
    def test_exact_slot_opening(self) -> None:
        now = paris(2026, 8, 27, 7, 15)
        self.assertEqual(current_slot_start(now), now.replace(second=0, microsecond=0))

    def test_before_morning_uses_yesterday_evening(self) -> None:
        now = paris(2026, 8, 27, 6, 0)
        self.assertEqual(current_slot_start(now), paris(2026, 8, 26, 19, 15))

    def test_delayed_afternoon_keeps_midday_slot(self) -> None:
        now = paris(2026, 8, 27, 18, 1)
        self.assertEqual(current_slot_start(now), paris(2026, 8, 27, 13, 15))

    def test_delayed_evening_keeps_evening_slot(self) -> None:
        now = paris(2026, 8, 26, 20, 51)
        self.assertEqual(current_slot_start(now), paris(2026, 8, 26, 19, 15))

    def test_winter_morning_opens_at_6h15(self) -> None:
        now = paris(2026, 1, 15, 6, 15)
        self.assertEqual(current_slot_start(now), now.replace(second=0, microsecond=0))

    def test_late_morning_stays_on_7h15_slot(self) -> None:
        now = paris(2026, 8, 26, 8, 42)
        self.assertEqual(current_slot_start(now), paris(2026, 8, 26, 7, 15))


class AlreadyCollectedTests(unittest.TestCase):
    def test_missed_midday_is_recovered_when_late(self) -> None:
        slot = paris(2026, 8, 27, 13, 15)
        last = {"last_update_at": "2026-08-26T13:22:01+02:00"}
        self.assertFalse(already_collected_for_slot(slot, last))

    def test_second_cron_same_morning_is_skipped(self) -> None:
        slot = paris(2026, 8, 26, 7, 15)
        last = {"last_update_at": "2026-08-26T07:26:00+02:00"}
        self.assertTrue(already_collected_for_slot(slot, last))

    def test_evening_delay_after_midday_is_not_skipped(self) -> None:
        slot = paris(2026, 8, 26, 19, 15)
        last = {"last_update_at": "2026-08-26T13:22:01+02:00"}
        self.assertFalse(already_collected_for_slot(slot, last))

    def test_missing_last_update_collects(self) -> None:
        self.assertFalse(already_collected_for_slot(paris(2026, 8, 27, 7, 15), None))


if __name__ == "__main__":
    unittest.main()
