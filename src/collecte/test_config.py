"""Tests de la fenêtre demandée à Open-Meteo par modèle."""

from __future__ import annotations

import unittest

from config import MODELS, OPENMETEO_MAX_FORECAST_DAYS


class ForecastDaysTests(unittest.TestCase):
    def test_late_run_horizon_is_not_cut(self) -> None:
        # Pire cas : run lancé juste avant minuit, sa fin tombe à J + horizon.
        for model in MODELS.values():
            with self.subTest(model=model.key):
                if model.forecast_days == OPENMETEO_MAX_FORECAST_DAYS:
                    continue
                self.assertGreaterEqual(model.forecast_days * 24, 24 + model.horizon_h)

    def test_never_above_api_limit(self) -> None:
        for model in MODELS.values():
            with self.subTest(model=model.key):
                self.assertLessEqual(model.forecast_days, OPENMETEO_MAX_FORECAST_DAYS)


if __name__ == "__main__":
    unittest.main()
