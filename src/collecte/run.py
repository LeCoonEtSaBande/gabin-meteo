"""Point d'entrée : collecte Open-Meteo 3 fois par jour.

Usage :
    python src/collecte/run.py
    python src/collecte/run.py --force
    python src/collecte/run.py --force --model AROMEHD
"""

from __future__ import annotations

import argparse
import sys
import time
from collections import defaultdict
from datetime import datetime
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from client import OpenMeteoError, fetch_locations_with_fallback
from config import (
    MODELS,
    MODEL_ORDER,
    PAUSE_BETWEEN_CALLS_S,
    PARIS,
    ModelSpec,
)
from normalize import failed_status, parse_payload
from schedule import already_collected_for_slot, current_slot_start
from spots import Spot, cell_key, load_spots
from store import last_update_label, publish_failure, publish_success, read_last_update


def configure_stdio() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)
        sys.stderr.reconfigure(encoding="utf-8", line_buffering=True)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Collecte les prévisions Open-Meteo aux points de grille retenus."
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="ignore le filtre des créneaux 7h15 / 13h15 / 19h15 (Europe/Paris)",
    )
    parser.add_argument(
        "--model",
        action="append",
        dest="models",
        metavar="KEY",
        help="limite la collecte à un modèle (répétable)",
    )
    return parser.parse_args()


def selected_models(keys: list[str] | None) -> list[ModelSpec]:
    if not keys:
        return [MODELS[key] for key in MODEL_ORDER]
    unknown = [key for key in keys if key not in MODELS]
    if unknown:
        known = ", ".join(MODEL_ORDER)
        raise SystemExit(f"Modèle inconnu : {', '.join(unknown)}\nModèles : {known}")
    return [MODELS[key] for key in keys]


def group_spots_by_cell(spots: list[Spot], model_key: str) -> dict[tuple[float, float], list[Spot]]:
    groups: dict[tuple[float, float], list[Spot]] = defaultdict(list)
    for spot in spots:
        point = spot.gridpoints.get(model_key)
        if point is None:
            continue
        groups[cell_key(point.latitude, point.longitude)].append(spot)
    return dict(groups)


def collect_model(
    model: ModelSpec,
    spots: list[Spot],
    run_id: str,
    fetched_at: str,
) -> tuple[list[dict], list[dict]]:
    rows: list[dict] = []
    statuses: list[dict] = []
    missing = [spot for spot in spots if model.key not in spot.gridpoints]
    for spot in missing:
        message = f"Point de grille {model.key} absent du CSV"
        print(f"ÉCHEC {model.key} / {spot.key} : {message}")
        statuses.append(failed_status(spot, model, run_id, fetched_at, message))

    groups = group_spots_by_cell(spots, model.key)
    if not groups:
        return rows, statuses

    locations = list(groups)
    payloads, errors, batch_error = fetch_locations_with_fallback(model, locations)
    if batch_error:
        print(f"Lot {model.key} : au moins un paquet en échec ({batch_error}) → repli unitaire")

    for location, payload in payloads.items():
        parsed_rows, parsed_status = parse_payload(
            payload, model, groups[location], run_id, fetched_at
        )
        rows.extend(parsed_rows)
        statuses.extend(parsed_status)

    for location, exc in errors.items():
        for spot in groups[location]:
            print(f"ÉCHEC {model.key} / {spot.key} : {exc}")
            statuses.append(
                failed_status(
                    spot,
                    model,
                    run_id,
                    fetched_at,
                    str(exc),
                    http_status=exc.http_status if isinstance(exc, OpenMeteoError) else None,
                )
            )
    return rows, statuses


def build_meta(
    run_id: str,
    fetched_at_iso: str,
    fetched_at: datetime,
    status_rows: list[dict],
    forecast_rows: list[dict],
) -> dict:
    counts = {"ok": 0, "partial": 0, "failed": 0}
    for row in status_rows:
        counts[row["status"]] = counts.get(row["status"], 0) + 1
    failed = [
        {
            "spot_key": row["spot_key"],
            "model_key": row["model_key"],
            "error_message": row["error_message"],
            "http_status": row["http_status"],
        }
        for row in status_rows
        if row["status"] == "failed"
    ]
    return {
        "run_id": run_id,
        "fetched_at": fetched_at_iso,
        "last_update_at": fetched_at_iso,
        "last_update_label": last_update_label(fetched_at),
        "timezone": "Europe/Paris",
        "n_forecast_rows": len(forecast_rows),
        "n_ok": counts["ok"],
        "n_partial": counts["partial"],
        "n_failed": counts["failed"],
        "nulls_replaced_by_zero": sum(int(row["nulls_replaced_by_zero"]) for row in status_rows),
        "failed": failed,
    }


def print_summary(status_rows: list[dict]) -> None:
    print("\nStatut par spot et modèle :")
    print(f"{'spot_key':<24} {'modèle':<10} {'statut':<8} échéances  zéros  détail")
    print("-" * 100)
    for row in status_rows:
        detail = row["error_message"] if row["status"] == "failed" else ""
        print(
            f"{row['spot_key']:<24} {row['model_key']:<10} {row['status']:<8} "
            f"{row['hours_written']:>9}  {row['nulls_replaced_by_zero']:>5}  {detail}"
        )
    failed = [row for row in status_rows if row["status"] == "failed"]
    if failed:
        print("\nExtractions en échec :")
        for row in failed:
            print(f"- {row['model_key']} / {row['spot_key']} : {row['error_message']}")
    else:
        print("\nAucune extraction en échec.")


def main() -> int:
    configure_stdio()
    args = parse_args()
    now = datetime.now(PARIS)
    slot_start = current_slot_start(now)
    last_update = read_last_update()
    if not args.force and already_collected_for_slot(slot_start, last_update):
        print(
            f"Créneau {slot_start.strftime('%d/%m/%Y %H:%M')} déjà collecté "
            f"({now.strftime('%H:%M')} Europe/Paris). Aucune requête Open-Meteo. "
            "Utiliser --force pour forcer."
        )
        return 0

    models = selected_models(args.models)
    spots = load_spots()
    fetched_at_iso = now.isoformat(timespec="seconds")
    run_id = slot_start.isoformat(timespec="seconds")

    print(f"Collecte {run_id}")
    print(f"Spots   : {len(spots)}")
    print(f"Modèles : {', '.join(model.key for model in models)}")
    print()

    forecast_rows: list[dict] = []
    status_rows: list[dict] = []
    for index, model in enumerate(models):
        if index:
            time.sleep(PAUSE_BETWEEN_CALLS_S)
        print(f"→ {model.key} ({model.label})")
        model_rows, model_status = collect_model(model, spots, run_id, fetched_at_iso)
        forecast_rows.extend(model_rows)
        status_rows.extend(model_status)

    status_rows.sort(key=lambda row: (row["spot_key"], MODEL_ORDER.index(row["model_key"])))
    meta = build_meta(run_id, fetched_at_iso, now, status_rows, forecast_rows)
    print_summary(status_rows)

    succeeded = meta["n_ok"] + meta["n_partial"]
    if succeeded == 0:
        publish_failure(meta, status_rows)
        print("\nÉchec total : current/previous et last_update.json inchangés.")
        print("Journal : data/raw/last_failure/")
        return 1

    last_update = {
        "last_update_at": fetched_at_iso,
        "last_update_label": last_update_label(now),
        "timezone": "Europe/Paris",
        "run_id": run_id,
        "n_ok": meta["n_ok"],
        "n_partial": meta["n_partial"],
        "n_failed": meta["n_failed"],
    }
    publish_success(
        forecast_rows=forecast_rows,
        status_rows=status_rows,
        meta=meta,
        last_update=last_update,
    )
    print(f"\nMise à jour carte : {last_update['last_update_label']} ({fetched_at_iso})")
    print("Écrit : data/raw/current/  (l'ancien current est dans data/raw/previous/)")
    print("Horodatage : data/raw/last_update.json")
    if meta["n_failed"]:
        print(f"Attention : {meta['n_failed']} couple(s) spot/modèle en échec (voir run_status.csv).")
        return 0
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
