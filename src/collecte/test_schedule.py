"""Tests des créneaux : deux par jour, 6h15 et 18h15, et retards de cron."""

from __future__ import annotations

import unittest
from datetime import datetime

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


class CronPairTests(unittest.TestCase):
    """Les deux crons UTC d'un créneau : l'un collecte, l'autre doit renoncer.

    Le workflow part à 4h28 et 5h28 UTC le matin, 16h28 et 17h28 le soir. En
    été Paris a deux heures d'avance, en hiver une seule : c'est à chaque fois
    le second cron d'été et le premier d'hiver qui tombent à côté.
    """

    def assert_pair(self, on_time: datetime, beside: datetime, slot: datetime) -> None:
        self.assertEqual(current_slot_start(on_time), slot)
        collected = {"last_update_at": on_time.isoformat()}
        self.assertFalse(already_collected_for_slot(slot, None))
        # Le cron à côté retombe sur un créneau déjà servi, donc ne collecte pas.
        self.assertTrue(
            already_collected_for_slot(current_slot_start(beside), collected),
            f"{beside:%H:%M} aurait collecté une seconde fois",
        )

    def test_summer_morning(self) -> None:
        # 4h28 UTC = 6h28 à Paris, 5h28 UTC = 7h28.
        self.assert_pair(paris(2026, 8, 27, 6, 28), paris(2026, 8, 27, 7, 28), paris(2026, 8, 27, 6, 15))

    def test_summer_evening(self) -> None:
        self.assert_pair(
            paris(2026, 8, 27, 18, 28), paris(2026, 8, 27, 19, 28), paris(2026, 8, 27, 18, 15)
        )

    def test_winter_morning(self) -> None:
        # 5h28 UTC = 6h28 à Paris ; 4h28 UTC tombe à 5h28, avant l'ouverture.
        self.assert_pair(paris(2026, 1, 15, 6, 28), paris(2026, 1, 15, 5, 28), paris(2026, 1, 15, 6, 15))

    def test_winter_evening(self) -> None:
        # 17h28 UTC = 18h28 à Paris ; 16h28 UTC tombe à 17h28, encore le matin.
        self.assert_pair(
            paris(2026, 1, 15, 18, 28), paris(2026, 1, 15, 17, 28), paris(2026, 1, 15, 18, 15)
        )

    def test_winter_morning_early_cron_lands_on_yesterday_evening(self) -> None:
        # Le cron de 4h28 UTC en hiver vise la soirée de la veille, pas le matin.
        self.assertEqual(current_slot_start(paris(2026, 1, 15, 5, 28)), paris(2026, 1, 14, 18, 15))


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
