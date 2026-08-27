"""Client HTTP Open-Meteo : une requête par modèle, repli cellule par cellule."""

from __future__ import annotations

import http.client
import json
import socket
import time
import urllib.error
import urllib.parse
import urllib.request
from typing import Any

from config import (
    API_TIMEOUT_S,
    HOURLY_ALL,
    PAUSE_BETWEEN_CALLS_S,
    USER_AGENT,
    ModelSpec,
)

RETRY_STATUS = {429, 502, 503, 504}
BATCH_ATTEMPTS = 2
CELL_ATTEMPTS = 1
BATCH_CHUNK_SIZE = 4
BACKOFF_S = (1.0,)


class OpenMeteoError(RuntimeError):
    def __init__(self, message: str, http_status: int | None = None) -> None:
        super().__init__(message)
        self.http_status = http_status


def _as_payload_list(payload: Any) -> list[dict[str, Any]]:
    if isinstance(payload, list):
        return payload
    if isinstance(payload, dict):
        return [payload]
    raise OpenMeteoError(f"Réponse JSON inattendue : {type(payload).__name__}")


def _decode_body(raw: bytes) -> Any:
    text = raw.decode("utf-8")
    try:
        return json.loads(text)
    except json.JSONDecodeError as exc:
        raise OpenMeteoError(f"JSON invalide ou tronqué ({exc})") from exc


def _get_json(url: str, params: dict[str, Any], *, attempts: int = BATCH_ATTEMPTS) -> Any:
    query = urllib.parse.urlencode(params, doseq=True)
    request = urllib.request.Request(
        f"{url}?{query}",
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "application/json",
            "Accept-Encoding": "identity",
        },
    )
    last_error: OpenMeteoError | None = None
    for attempt in range(attempts):
        try:
            with urllib.request.urlopen(request, timeout=API_TIMEOUT_S) as response:
                payload = _decode_body(response.read())
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode("utf-8", errors="replace")
            try:
                parsed = json.loads(detail)
                reason = parsed.get("reason") or detail
            except json.JSONDecodeError:
                reason = detail
            last_error = OpenMeteoError(f"HTTP {exc.code} : {reason}", http_status=exc.code)
            if exc.code not in RETRY_STATUS or attempt >= attempts - 1:
                raise last_error from exc
        except urllib.error.URLError as exc:
            last_error = OpenMeteoError(f"Réseau : {exc.reason}")
            if attempt >= attempts - 1:
                raise last_error from exc
        except (
            OpenMeteoError,
            TimeoutError,
            socket.timeout,
            http.client.IncompleteRead,
            ConnectionError,
        ) as exc:
            last_error = exc if isinstance(exc, OpenMeteoError) else OpenMeteoError(f"Réseau : {exc}")
            if attempt >= attempts - 1:
                raise last_error from exc
        else:
            if isinstance(payload, dict) and payload.get("error"):
                raise OpenMeteoError(str(payload.get("reason") or payload))
            return payload
        time.sleep(BACKOFF_S[min(attempt, len(BACKOFF_S) - 1)])
    raise last_error or OpenMeteoError("Échec Open-Meteo sans détail")


def fetch_locations(
    model: ModelSpec,
    locations: list[tuple[float, float]],
    *,
    attempts: int = BATCH_ATTEMPTS,
) -> list[dict[str, Any]]:
    """Interroge Open-Meteo pour une liste de cellules d'un seul modèle."""
    if not locations:
        return []
    params = {
        "latitude": ",".join(f"{lat:.5f}" for lat, _ in locations),
        "longitude": ",".join(f"{lon:.5f}" for _, lon in locations),
        "models": model.openmeteo_name,
        "hourly": ",".join(HOURLY_ALL),
        "forecast_days": model.forecast_days,
        "cell_selection": "nearest",
        "elevation": ",".join(["nan"] * len(locations)),
        "wind_speed_unit": "kn",
        "timezone": "Europe/Paris",
    }
    payload = _get_json(model.endpoint, params, attempts=attempts)
    items = _as_payload_list(payload)
    if len(items) != len(locations):
        raise OpenMeteoError(
            f"Réponse inattendue : {len(items)} payload(s) pour {len(locations)} cellule(s)"
        )
    for item in items:
        if item.get("error"):
            raise OpenMeteoError(str(item.get("reason") or item))
    return items


def fetch_locations_with_fallback(
    model: ModelSpec,
    locations: list[tuple[float, float]],
) -> tuple[
    dict[tuple[float, float], dict[str, Any]],
    dict[tuple[float, float], OpenMeteoError],
    str | None,
]:
    """Lots de quelques cellules, puis repli unitaire si un lot échoue."""
    payloads: dict[tuple[float, float], dict[str, Any]] = {}
    errors: dict[tuple[float, float], OpenMeteoError] = {}
    batch_error: str | None = None
    chunks = [
        locations[index : index + BATCH_CHUNK_SIZE]
        for index in range(0, len(locations), BATCH_CHUNK_SIZE)
    ]
    request_index = 0
    for chunk in chunks:
        if request_index:
            time.sleep(PAUSE_BETWEEN_CALLS_S)
        try:
            items = fetch_locations(model, chunk, attempts=BATCH_ATTEMPTS)
            payloads.update(zip(chunk, items))
            request_index += 1
            continue
        except OpenMeteoError as exc:
            batch_error = str(exc)
            print(
                f"  lot de {len(chunk)} cellule(s) en échec ({batch_error}) → repli unitaire",
                flush=True,
            )
        for location in chunk:
            if request_index:
                time.sleep(PAUSE_BETWEEN_CALLS_S)
            request_index += 1
            try:
                payloads[location] = fetch_locations(
                    model, [location], attempts=CELL_ATTEMPTS
                )[0]
            except OpenMeteoError as exc:
                errors[location] = exc
    return payloads, errors, batch_error
