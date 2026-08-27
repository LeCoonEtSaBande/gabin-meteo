"""Lecture des spots et des points de grille déjà retenus dans le CSV."""

from __future__ import annotations

import csv
from dataclasses import dataclass

from config import MODEL_ORDER, SPOTS_CSV


@dataclass(frozen=True)
class GridPoint:
    latitude: float
    longitude: float
    elevation_m: float | None


@dataclass(frozen=True)
class Spot:
    key: str
    display_name: str
    zone_key: str
    short_term_model: str
    gridpoints: dict[str, GridPoint]


def _parse_float(raw: str | None) -> float | None:
    text = (raw or "").strip()
    if not text:
        return None
    return float(text)


def load_spots() -> list[Spot]:
    if not SPOTS_CSV.exists():
        raise FileNotFoundError(f"CSV des spots introuvable : {SPOTS_CSV}")

    spots: list[Spot] = []
    with SPOTS_CSV.open(encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle, delimiter=";")
        for row in reader:
            key = (row.get("spot_key") or "").strip()
            if not key:
                continue
            extra = row.get(None)
            if extra:
                raise RuntimeError(
                    f"{key}: trop de colonnes CSV (un point-virgule dans un texte "
                    "n'est probablement pas entre guillemets)."
                )
            gridpoints: dict[str, GridPoint] = {}
            for model_key in MODEL_ORDER:
                lat = _parse_float(row.get(f"{model_key}_gridpoint_latitude"))
                lon = _parse_float(row.get(f"{model_key}_gridpoint_longitude"))
                if lat is None or lon is None:
                    continue
                if not -90 <= lat <= 90 or not -180 <= lon <= 180:
                    raise RuntimeError(
                        f"{key}/{model_key}: coordonnées hors plage "
                        f"(lat={lat}, lon={lon}). Vérifier le CSV."
                    )
                gridpoints[model_key] = GridPoint(
                    latitude=lat,
                    longitude=lon,
                    elevation_m=_parse_float(row.get(f"{model_key}_gridpoint_elevation")),
                )
            spots.append(
                Spot(
                    key=key,
                    display_name=(row.get("display_name") or "").strip() or key,
                    zone_key=(row.get("zone_key") or "").strip(),
                    short_term_model=(row.get("short_term_model") or "").strip(),
                    gridpoints=gridpoints,
                )
            )
    if not spots:
        raise RuntimeError(f"Aucun spot dans {SPOTS_CSV}")
    return spots


def cell_key(latitude: float, longitude: float) -> tuple[float, float]:
    return (round(latitude, 5), round(longitude, 5))
