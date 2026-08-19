"""Lecture des bruts locaux, sinon depuis la branche de collecte."""

from __future__ import annotations

import json
import subprocess
from pathlib import Path
from typing import Any

from config import COLLECTE_BRANCH, RAW_FORECASTS, RAW_LAST_UPDATE, ROOT


def git_show(rel_path: str, branch: str = COLLECTE_BRANCH) -> str:
    proc = subprocess.run(
        ["git", "show", f"{branch}:{rel_path}"],
        cwd=ROOT,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
    if proc.returncode != 0:
        detail = (proc.stderr or proc.stdout or "").strip()
        raise FileNotFoundError(f"git show {branch}:{rel_path} : {detail}")
    return proc.stdout


def read_text(path: Path, git_rel: str) -> str:
    if path.exists():
        return path.read_text(encoding="utf-8-sig")
    return git_show(git_rel)


def read_json(path: Path, git_rel: str) -> dict[str, Any]:
    return json.loads(read_text(path, git_rel))


def load_last_update() -> dict[str, Any]:
    try:
        return read_json(RAW_LAST_UPDATE, "data/raw/last_update.json")
    except FileNotFoundError:
        return {}


def load_forecasts_csv() -> str:
    return read_text(RAW_FORECASTS, "data/raw/current/forecasts.csv")
