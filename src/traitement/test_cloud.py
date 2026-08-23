"""Nébulosité display sans repli ARPEGE pour AROME hauts seuls."""

from __future__ import annotations

from datetime import datetime

from cloud import cloud_cover_display, is_high_only_layers
from curves import HourPoint, splice_curve


def test_cloud_cover_display_total() -> None:
    assert cloud_cover_display(75.0, 0.0, 0.0, 100.0) == 75.0


def test_cloud_cover_display_layers() -> None:
    assert cloud_cover_display(None, 80.0, 20.0, 10.0) == 80.0
    assert cloud_cover_display(None, 0.0, 0.0, 63.0) == 15.75


def test_is_high_only_layers() -> None:
    assert is_high_only_layers(None, 0.0, 0.0, 63.0) is True
    assert is_high_only_layers(19.0, 0.0, 0.0, 19.0) is False
    assert is_high_only_layers(None, 30.0, 0.0, 90.0) is False


def _pt(
    hour: int,
    model: str,
    *,
    total: float | None = None,
    low: float | None = None,
    mid: float | None = None,
    high: float | None = None,
    display: float | None = None,
) -> HourPoint:
    if model == "AROMEHD" and is_high_only_layers(total, low, mid, high):
        low, mid = 0.0, 0.0
    disp = display if display is not None else cloud_cover_display(total, low, mid, high)
    return HourPoint(
        valid_at=datetime(2026, 8, 21, hour),
        source_model=model,
        wind_speed_kt=10.0,
        wind_gusts_kt=14.0,
        wind_dir_deg=180.0,
        temperature_c=18.0,
        precipitation_mm=0.0,
        cloud_cover_display_pct=disp,
        cloud_cover_source_model=model,
    )


def test_arome_high_only_keeps_arome_display() -> None:
    model_points = {
        "AROMEHD": [_pt(10, "AROMEHD", total=None, low=0.0, mid=0.0, high=80.0)],
        "ARPEGE": [_pt(10, "ARPEGE", total=35.0, low=0.0, mid=0.0, high=35.0)],
        "IFS": [],
    }
    curve = splice_curve(model_points, ("AROMEHD", "ARPEGE", "IFS"))
    assert curve[0].source_model == "AROMEHD"
    assert curve[0].cloud_cover_display_pct == 20.0
    assert curve[0].cloud_cover_source_model == "AROMEHD"


if __name__ == "__main__":
    test_cloud_cover_display_total()
    test_cloud_cover_display_layers()
    test_is_high_only_layers()
    test_arome_high_only_keeps_arome_display()
    print("ok")
