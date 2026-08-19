"""Spots : identifiant, modèle court terme, zone."""

from __future__ import annotations

import csv
from dataclasses import dataclass
from io import StringIO
from pathlib import Path

from io_raw import read_text
from config import SPOTS_CSV


@dataclass(frozen=True)
class Spot:
    key: str
    display_name: str
    zone_key: str
    short_term_model: str
    curve_set: str


def load_spots(path: Path | None = None) -> list[Spot]:
    from config import curve_set_for_short_term

    text = read_text(path or SPOTS_CSV, git_rel="assets/spots_specs/spots_specifications.csv")
    spots: list[Spot] = []
    reader = csv.DictReader(StringIO(text), delimiter=";")
    for row in reader:
        key = (row.get("spot_key") or "").strip()
        if not key:
            continue
        short_term = (row.get("short_term_model") or "").strip()
        spots.append(
            Spot(
                key=key,
                display_name=(row.get("display_name") or "").strip() or key,
                zone_key=(row.get("zone_key") or "").strip(),
                short_term_model=short_term,
                curve_set=curve_set_for_short_term(short_term),
            )
        )
    if not spots:
        raise RuntimeError("Aucun spot dans le CSV de spécification")
    return spots
