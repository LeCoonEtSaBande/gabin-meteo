"""Retry et repli quand Open-Meteo renvoie un JSON tronqué."""

from __future__ import annotations

import unittest
from unittest.mock import patch

from client import OpenMeteoError, _get_json, fetch_locations_with_fallback
from config import MODELS


class FakeResponse:
    def __init__(self, body: bytes) -> None:
        self._body = body

    def read(self) -> bytes:
        return self._body

    def __enter__(self) -> FakeResponse:
        return self

    def __exit__(self, *args: object) -> None:
        return None


class GetJsonRetryTests(unittest.TestCase):
    def test_retries_truncated_json_then_succeeds(self) -> None:
        bodies = [FakeResponse(b'{"hourly":'), FakeResponse(b'{"latitude": 45.0}')]

        def urlopen(*_args: object, **_kwargs: object) -> FakeResponse:
            return bodies.pop(0)

        with (
            patch("client.urllib.request.urlopen", side_effect=urlopen),
            patch("client.time.sleep"),
        ):
            payload = _get_json("https://example.test/v1", {})
        self.assertEqual(payload, {"latitude": 45.0})

    def test_truncated_json_becomes_openmeteo_error(self) -> None:
        with (
            patch("client.urllib.request.urlopen", return_value=FakeResponse(b'{"hourly":')),
            patch("client.time.sleep"),
        ):
            with self.assertRaises(OpenMeteoError) as ctx:
                _get_json("https://example.test/v1", {})
        self.assertIn("JSON", str(ctx.exception))


class FallbackTests(unittest.TestCase):
    def test_batch_json_error_falls_back_to_cells(self) -> None:
        model = MODELS["AROMEHD"]
        locations = [(45.0, 6.0), (46.0, 7.0)]
        calls: list[int] = []

        def fake_fetch(model_arg: object, cells: list) -> list[dict]:
            calls.append(len(cells))
            if len(cells) > 1:
                raise OpenMeteoError("JSON invalide ou tronqué")
            return [{"latitude": cells[0][0]}]

        with (
            patch("client.fetch_locations", side_effect=fake_fetch),
            patch("client.time.sleep"),
        ):
            payloads, errors, batch_error = fetch_locations_with_fallback(model, locations)

        self.assertIn("JSON", batch_error or "")
        self.assertEqual(calls, [2, 1, 1])
        self.assertEqual(len(payloads), 2)
        self.assertEqual(errors, {})


if __name__ == "__main__":
    unittest.main()
