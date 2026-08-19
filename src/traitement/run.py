"""Construit les courbes splicées et le JSON du panneau quotidien.

Usage :
    python src/traitement/run.py
"""

from __future__ import annotations

import csv
import json
import sys
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError

sys.path.insert(0, str(Path(__file__).resolve().parent))

from config import (
    CURVE_COLUMNS,
    CURVE_SETS,
    CURVES_DIR,
    LAST_UPDATE_JSON,
    PROCESSED_DIR,
    QUOTIDIEN_JSON,
)
from curves import HourPoint, build_all_curves, load_raw_points
from daily import summarize_spot_days
from io_raw import load_last_update
from spots import load_spots

try:
    PARIS = ZoneInfo("Europe/Paris")
except ZoneInfoNotFoundError:
    import tzdata  # noqa: F401

    PARIS = ZoneInfo("Europe/Paris")


def configure_stdio() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")


def write_curve_csv(path: Path, curve_set: str, by_spot: dict[str, list[HourPoint]]) -> int:
    path.parent.mkdir(parents=True, exist_ok=True)
    rows = 0
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=list(CURVE_COLUMNS), delimiter=";")
        writer.writeheader()
        for spot_key in sorted(by_spot):
            for point in by_spot[spot_key]:
                writer.writerow(
                    {
                        "spot_key": spot_key,
                        "curve_set": curve_set,
                        "valid_at": point.valid_at.strftime("%Y-%m-%dT%H:%M"),
                        "source_model": point.source_model,
                        "wind_speed_10m_kn": f"{point.wind_speed_kt:.2f}",
                        "wind_gusts_10m_kn": f"{point.wind_gusts_kt:.2f}",
                        "wind_direction_10m_deg": f"{point.wind_dir_deg:.1f}",
                        "temperature_2m_c": f"{point.temperature_c:.1f}",
                        "precipitation_mm": f"{point.precipitation_mm:.2f}",
                        "cloud_cover_max_pct": f"{point.cloud_cover_pct:.1f}",
                    }
                )
                rows += 1
    return rows


def build_quotidien_payload(
    spots,
    curves: dict[str, dict[str, list[HourPoint]]],
    last_update: dict,
) -> dict:
    spots_out = {}
    all_days: set[str] = set()
    for spot in spots:
        day_map = summarize_spot_days(curves[spot.curve_set].get(spot.key, []))
        all_days.update(day_map)
        spots_out[spot.key] = {
            "display_name": spot.display_name,
            "zone_key": spot.zone_key,
            "short_term_model": spot.short_term_model,
            "curve_set": spot.curve_set,
            "days": day_map,
        }
    return {
        "generated_at": datetime.now(PARIS).isoformat(timespec="seconds"),
        "timezone": "Europe/Paris",
        "last_update_at": last_update.get("last_update_at"),
        "last_update_label": last_update.get("last_update_label"),
        "curve_sets": {name: list(models) for name, models in CURVE_SETS.items()},
        "days": sorted(all_days),
        "spots": spots_out,
    }


def main() -> int:
    configure_stdio()
    spots = load_spots()
    raw = load_raw_points()
    last_update = load_last_update()
    curves = build_all_curves(raw, [spot.key for spot in spots])

    PROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    CURVES_DIR.mkdir(parents=True, exist_ok=True)

    print("Courbes splicées :")
    for set_name in CURVE_SETS:
        n = write_curve_csv(CURVES_DIR / f"{set_name}.csv", set_name, curves[set_name])
        print(f"  {set_name}: {n} points → {CURVES_DIR / f'{set_name}.csv'}")

    payload = build_quotidien_payload(spots, curves, last_update)
    QUOTIDIEN_JSON.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    LAST_UPDATE_JSON.write_text(
        json.dumps(
            {
                "last_update_at": payload.get("last_update_at"),
                "last_update_label": payload.get("last_update_label"),
                "generated_at": payload.get("generated_at"),
                "timezone": payload.get("timezone"),
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    print(f"\nJSON quotidien : {QUOTIDIEN_JSON}")
    print(f"Jours : {payload['days'][0] if payload['days'] else '—'} → {payload['days'][-1] if payload['days'] else '—'}")
    print(f"Spots : {len(payload['spots'])}")
    print(f"MAJ   : {payload.get('last_update_label') or 'inconnue'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
