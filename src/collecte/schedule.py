"""Créneaux de collecte Europe/Paris.

Deux créneaux par jour, 6h15 et 18h15, tenus été comme hiver. Un cron UTC ne
suit pas l'heure d'été : le workflow en pose deux par créneau (4h28 et 5h28 UTC
le matin, 16h28 et 17h28 le soir). Selon la saison, l'un part à 6h28 ou 18h28 à
Paris et collecte ; l'autre tombe une heure à côté, retombe sur un créneau déjà
collecté et ne fait rien.

GitHub retarde souvent ces départs de plusieurs heures. On rattache chaque run
au dernier créneau déjà ouvert et on le saute s'il a déjà été collecté
(horodatage dans last_update.json).
"""

from __future__ import annotations

from datetime import datetime, timedelta
from typing import Any

from config import PARIS

COLLECT_HOURS = (6, 18)
COLLECT_SLOT_MINUTE = 15


def current_slot_start(now: datetime) -> datetime:
    """Début du créneau ouvert (6h15 ou 18h15), celui de la veille avant 6h15."""
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
