"""Créneaux de collecte Europe/Paris.

Le cron UTC unique vise 7h15 / 13h15 / 19h15 en été, et 6h15 / 12h15 /
18h15 en hiver. GitHub peut aussi arriver en retard. On rattache chaque
run au dernier créneau déjà ouvert (6h15 ou 7h15, etc.) et on saute s'il
a déjà été collecté (horodatage dans last_update.json).
"""

from __future__ import annotations

from datetime import datetime, timedelta
from typing import Any

from config import PARIS

# Heure d'été (7/13/19) et d'hiver (6/12/18), plus de quoi absorber un retard.
COLLECT_HOURS = (6, 7, 12, 13, 18, 19)
COLLECT_SLOT_MINUTE = 15


def current_slot_start(now: datetime) -> datetime:
    """Début du créneau ouvert (6h15/7h15, 12h15/13h15, 18h15/19h15)."""
    if now.tzinfo is None:
        now = now.replace(tzinfo=PARIS)
    for hour in reversed(COLLECT_HOURS):
        start = now.replace(
            hour=hour,
            minute=COLLECT_SLOT_MINUTE,
            second=0,
            microsecond=0,
        )
        if now >= start:
            return start
    previous = now - timedelta(days=1)
    return previous.replace(
        hour=COLLECT_HOURS[-1],
        minute=COLLECT_SLOT_MINUTE,
        second=0,
        microsecond=0,
    )


def _as_paris(value: datetime) -> datetime:
    if value.tzinfo is None:
        return value.replace(tzinfo=PARIS)
    return value.astimezone(PARIS)


def parse_last_update_at(last_update: dict[str, Any] | None) -> datetime | None:
    if not last_update:
        return None
    raw = last_update.get("last_update_at")
    if not raw:
        return None
    try:
        return _as_paris(datetime.fromisoformat(str(raw)))
    except ValueError:
        return None


def already_collected_for_slot(
    slot_start: datetime,
    last_update: dict[str, Any] | None,
) -> bool:
    collected_at = parse_last_update_at(last_update)
    if collected_at is None:
        return False
    return collected_at >= slot_start
