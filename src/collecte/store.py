"""Écriture des deux derniers runs et de l'horodatage pour la carte."""

from __future__ import annotations

import csv
import json
import shutil
from datetime import datetime
from pathlib import Path
from typing import Any

from config import FORECAST_COLUMNS, RAW_DIR, STATUS_COLUMNS


def last_update_label(fetched_at: datetime) -> str:
    return fetched_at.strftime("%d/%m/%Y %H:%M")


def read_last_update() -> dict[str, Any] | None:
    path = RAW_DIR / "last_update.json"
    if not path.is_file():
        return None
    try:
        payload = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return None
    return payload if isinstance(payload, dict) else None


def write_csv(path: Path, columns: tuple[str, ...], rows: list[dict[str, Any]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=list(columns),
            delimiter=";",
            extrasaction="ignore",
        )
        writer.writeheader()
        writer.writerows(rows)


def write_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def publish_success(
    *,
    forecast_rows: list[dict[str, Any]],
    status_rows: list[dict[str, Any]],
    meta: dict[str, Any],
    last_update: dict[str, Any],
) -> None:
    """Décale current → previous, puis écrit le nouveau current."""
    staging = RAW_DIR / "_staging"
    current = RAW_DIR / "current"
    previous = RAW_DIR / "previous"

    if staging.exists():
        shutil.rmtree(staging)
    _write_run_dir(staging, forecast_rows, status_rows, meta)

    if previous.exists():
        shutil.rmtree(previous)
    if current.exists():
        current.rename(previous)
    staging.rename(current)
    write_json(RAW_DIR / "last_update.json", last_update)
    failure_dir = RAW_DIR / "last_failure"
    if failure_dir.exists():
        shutil.rmtree(failure_dir)


def publish_failure(meta: dict[str, Any], status_rows: list[dict[str, Any]]) -> None:
    """Conserve current/previous/last_update ; journalise l'échec."""
    failure_dir = RAW_DIR / "last_failure"
    if failure_dir.exists():
        shutil.rmtree(failure_dir)
    failure_dir.mkdir(parents=True, exist_ok=True)
    write_csv(failure_dir / "run_status.csv", STATUS_COLUMNS, status_rows)
    write_json(failure_dir / "run_meta.json", meta)


def _write_run_dir(
    directory: Path,
    forecast_rows: list[dict[str, Any]],
    status_rows: list[dict[str, Any]],
    meta: dict[str, Any],
) -> None:
    directory.mkdir(parents=True, exist_ok=True)
    write_csv(directory / "forecasts.csv", FORECAST_COLUMNS, forecast_rows)
    write_csv(directory / "run_status.csv", STATUS_COLUMNS, status_rows)
    write_json(directory / "run_meta.json", meta)
