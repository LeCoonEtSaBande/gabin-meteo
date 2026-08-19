"""Normalisation des réponses Open-Meteo : null → 0, nébulosité = max."""

from __future__ import annotations

from typing import Any

from config import HOURLY_ALL, HOURLY_CLOUD, ModelSpec
from spots import Spot

CORE_OUTPUT = {
    "wind_speed_10m": "wind_speed_10m_kmh",
    "wind_gusts_10m": "wind_gusts_10m_kmh",
    "wind_direction_10m": "wind_direction_10m_deg",
    "temperature_2m": "temperature_2m_c",
    "precipitation": "precipitation_mm",
}


def _series_value(series: dict[str, Any], name: str, index: int) -> float | None:
    values = series.get(name)
    if not values or index >= len(values):
        return None
    value = values[index]
    if value is None:
        return None
    return float(value)


def _hour_has_data(series: dict[str, Any], index: int) -> bool:
    return any(_series_value(series, name, index) is not None for name in HOURLY_ALL)


def _cloud_cover_max(series: dict[str, Any], index: int) -> tuple[float, int]:
    present = [_series_value(series, name, index) for name in HOURLY_CLOUD]
    values = [value for value in present if value is not None]
    if values:
        return max(values), 0
    return 0.0, 1


def parse_payload(
    payload: dict[str, Any],
    model: ModelSpec,
    spots: list[Spot],
    run_id: str,
    fetched_at: str,
) -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    """Transforme un payload Open-Meteo en lignes forecast + statuts par spot."""
    hourly = payload.get("hourly") or {}
    times = hourly.get("time") or []
    grid_lat = payload.get("latitude")
    grid_lon = payload.get("longitude")
    elevation = payload.get("elevation")

    rows: list[dict[str, Any]] = []
    nulls = 0
    hours_written = 0

    for index, stamp in enumerate(times):
        if not _hour_has_data(hourly, index):
            continue
        hours_written += 1
        values: dict[str, float] = {}
        for api_name, column in CORE_OUTPUT.items():
            value, missing = _filled(_series_value(hourly, api_name, index))
            values[column] = value
            nulls += missing
        cloud, cloud_missing = _cloud_cover_max(hourly, index)
        values["cloud_cover_max_pct"] = cloud
        nulls += cloud_missing

        for spot in spots:
            rows.append(
                {
                    "run_id": run_id,
                    "fetched_at": fetched_at,
                    "spot_key": spot.key,
                    "model_key": model.key,
                    "grid_latitude": grid_lat,
                    "grid_longitude": grid_lon,
                    "grid_elevation_m": elevation,
                    "valid_at": stamp,
                    **values,
                }
            )

    statuses = [
        _status_row(
            run_id=run_id,
            fetched_at=fetched_at,
            spot=spot,
            model=model,
            status="partial" if hours_written and nulls else ("ok" if hours_written else "failed"),
            error_message="" if hours_written else "Aucune échéance exploitable dans la réponse",
            hours_written=hours_written,
            nulls_replaced_by_zero=nulls,
            grid_lat=grid_lat,
            grid_lon=grid_lon,
            elevation=elevation,
        )
        for spot in spots
    ]
    return rows, statuses


def failed_status(
    spot: Spot,
    model: ModelSpec,
    run_id: str,
    fetched_at: str,
    error: str,
    http_status: int | None = None,
) -> dict[str, Any]:
    return _status_row(
        run_id=run_id,
        fetched_at=fetched_at,
        spot=spot,
        model=model,
        status="failed",
        error_message=error,
        hours_written=0,
        nulls_replaced_by_zero=0,
        grid_lat=None,
        grid_lon=None,
        elevation=None,
        http_status=http_status,
    )


def _filled(value: float | None) -> tuple[float, int]:
    if value is None:
        return 0.0, 1
    return value, 0


def _status_row(
    *,
    run_id: str,
    fetched_at: str,
    spot: Spot,
    model: ModelSpec,
    status: str,
    error_message: str,
    hours_written: int,
    nulls_replaced_by_zero: int,
    grid_lat: Any,
    grid_lon: Any,
    elevation: Any,
    http_status: int | None = None,
) -> dict[str, Any]:
    return {
        "run_id": run_id,
        "fetched_at": fetched_at,
        "spot_key": spot.key,
        "model_key": model.key,
        "status": status,
        "http_status": "" if http_status is None else http_status,
        "error_message": error_message,
        "hours_written": hours_written,
        "nulls_replaced_by_zero": nulls_replaced_by_zero,
        "grid_latitude": grid_lat,
        "grid_longitude": grid_lon,
        "grid_elevation_m": elevation,
    }

