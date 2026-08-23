"""Nébulosité perçue pour l'affichage (total prioritaire, sinon bas/moy/haut)."""

from __future__ import annotations

HIGH_LAYER_WEIGHT = 0.25


def cloud_cover_display(
    total: float | None,
    low: float | None,
    mid: float | None,
    high: float | None,
) -> float:
    """Score 0–100 % : total NEBUL si présent, sinon max(basse, moyenne, haute × 0,25)."""
    if total is not None:
        return total
    low_v = 0.0 if low is None else low
    mid_v = 0.0 if mid is None else mid
    high_v = 0.0 if high is None else high
    return max(low_v, mid_v, high_v * HIGH_LAYER_WEIGHT)


def is_high_only_layers(
    total: float | None,
    low: float | None,
    mid: float | None,
    high: float | None,
) -> bool:
    """Vrai si seuls les nuages hauts sont renseignés (cas fréquent AROME HD)."""
    if total is not None:
        return False
    low_empty = low is None or low == 0.0
    mid_empty = mid is None or mid == 0.0
    high_present = high is not None and high > 0.0
    return low_empty and mid_empty and high_present
