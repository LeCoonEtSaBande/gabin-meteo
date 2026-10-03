/** Courbes AROMEIFS / ICONGFS et rendu SVG du détail de zone. */

const CURVE_SETS = ["AROMEIFS", "ICONGFS"];

const MODEL_COLORS = {
  AROMEHD: "#b29f84",
  ARPEGE: "#d7c4a4",
  IFS: "#9aaa78",
  ICONCH1: "#6eb4d0",
  ICONCH2: "#3d7a96",
  ICON13KM: "#8b9cb3",
  GFS: "#c88762",
  MESURE: "#e6e6e6",
};

const SET_COLORS = {
  AROMEIFS: "#b29f84",
  ICONGFS: "#6eb4d0",
  MESURE: "#e6e6e6",
};

const SET_LABELS = {
  AROMEIFS: "AROMEIFS",
  ICONGFS: "ICONGFS",
  MESURE: "Mesuré",
};

const KT_SLOT = 10;
const KT25 = 25;
const MEAN_STROKE = 1.94;
const GUST_STROKE = 1.13;
const WX_CLOUD = "#8a8a8a";
const WX_CLOUD_OPACITY = 0.5;
const WX_PRECIP = "#5a8aa3";
const HALO_COLOR = "#161616";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function modelColor(model) {
  return MODEL_COLORS[model] || "#7a7a7a";
}

function hourIndexOf(point, startDay) {
  const start = parseValidAt(`${startDay}T00:00`).ms;
  return Math.round((parseValidAt(point.valid_at).ms - start) / 3600000);
}

function hourSlots(points, startDay, nHours) {
  const slots = Array.from({ length: nHours }, () => null);
  if (!points.length) return slots;
  const sorted = [...points].sort(
    (a, b) => parseValidAt(a.valid_at).ms - parseValidAt(b.valid_at).ms
  );
  for (let i = 0; i < sorted.length; i += 1) {
    const point = sorted[i];
    const h0 = hourIndexOf(point, startDay);
    const h1 =
      i + 1 < sorted.length ? hourIndexOf(sorted[i + 1], startDay) : h0 + 1;
    const from = Math.max(0, h0);
    const to = Math.min(nHours, Math.max(h0 + 1, h1));
    for (let h = from; h < to; h += 1) slots[h] = point;
  }
  return slots;
}

function mapsUrl(lat, lon) {
  const latText = String(lat ?? "").trim();
  const lonText = String(lon ?? "").trim();
  if (!latText || !lonText) return "";
  const latitude = Number(latText);
  const longitude = Number(lonText);
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return "";
  return `https://www.google.com/maps?q=${latitude},${longitude}`;
}

function parseValidAt(raw) {
  const text = String(raw || "");
  const [datePart, timePart = "00:00"] = text.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute = 0] = timePart.split(":").map(Number);
  return {
    year,
    month,
    day,
    hour,
    minute,
    dayKey: datePart,
    ms: Date.UTC(year, month - 1, day, hour, minute || 0),
  };
}

function addDays(dayKey, days) {
  const p = parseValidAt(`${dayKey}T00:00`);
  const next = new Date(p.ms + days * 24 * 3600 * 1000);
  const y = next.getUTCFullYear();
  const m = String(next.getUTCMonth() + 1).padStart(2, "0");
  const d = String(next.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function sliceHorizon(points, startDay, nDays) {
  const start = parseValidAt(`${startDay}T00:00`).ms;
  const end = parseValidAt(`${addDays(startDay, nDays)}T00:00`).ms;
  return (points || []).filter((point) => {
    const ms = parseValidAt(point.valid_at).ms;
    return ms >= start && ms < end;
  });
}

function indexCurves(rows) {
  const out = { AROMEIFS: {}, ICONGFS: {} };
  for (const row of rows) {
    const set = row.curve_set;
    const spot = row.spot_key;
    if (!out[set] || !spot) continue;
    const mean = Number(row.wind_speed_10m_kn);
    const gust = Number(row.wind_gusts_10m_kn);
    const dir = Number(row.wind_direction_10m_deg);
    const precip = Number(row.precipitation_mm);
    const cloudRaw = row.cloud_cover_display_pct ?? row.cloud_cover_max_pct;
    const cloud = Number(cloudRaw);
    out[set][spot] ||= [];
    out[set][spot].push({
      valid_at: row.valid_at,
      source_model: row.source_model,
      mean: Number.isFinite(mean) ? mean : 0,
      gust: Number.isFinite(gust) ? gust : 0,
      dir: Number.isFinite(dir) ? dir : 0,
      precip: Number.isFinite(precip) ? precip : 0,
      cloud: Number.isFinite(cloud) ? cloud : 0,
    });
  }
  for (const set of CURVE_SETS) {
    for (const list of Object.values(out[set])) {
      list.sort((a, b) => parseValidAt(a.valid_at).ms - parseValidAt(b.valid_at).ms);
    }
  }
  return out;
}

function primaryCurveSet(spot) {
  const model = String(spot?.short_term_model || "").trim();
  if (model === "AROMEHD") return "AROMEIFS";
  return "ICONGFS";
}

function secondaryCurveSet(primary) {
  return primary === "AROMEIFS" ? "ICONGFS" : "AROMEIFS";
}

function mergeWxMax(seriesList) {
  const map = new Map();
  for (const series of seriesList) {
    for (const point of series || []) {
      const cloud = point.cloud || 0;
      const precip = point.precip || 0;
      const cur = map.get(point.valid_at);
      if (!cur) {
        map.set(point.valid_at, {
          valid_at: point.valid_at,
          cloud,
          precip,
          source_model: point.source_model,
        });
      } else {
        if (cloud > cur.cloud) {
          cur.cloud = cloud;
          cur.source_model = point.source_model;
        }
        cur.precip = Math.max(cur.precip, precip);
      }
    }
  }
  const rows = [...map.values()].sort(
    (a, b) => parseValidAt(a.valid_at).ms - parseValidAt(b.valid_at).ms
  );
  return rows.map((row, i) => {
    let cloud = row.cloud;
    let source_model = row.source_model;
    for (let j = i - 1; j <= i + 1; j += 1) {
      if (rows[j] && rows[j].cloud > cloud) {
        cloud = rows[j].cloud;
        source_model = rows[j].source_model;
      }
    }
    return { ...row, cloud, source_model };
  });
}

function xOf(point, startDay, nDays, x0, innerW) {
  const start = parseValidAt(`${startDay}T00:00`).ms;
  const span = nDays * 24 * 3600 * 1000;
  const t = parseValidAt(point.valid_at).ms - start;
  return x0 + (t / span) * innerW;
}

function lineSegments(points, startDay, nDays, x0, innerW, yOf) {
  const segs = [];
  let current = null;
  for (let i = 0; i < points.length; i += 1) {
    const point = points[i];
    const x = xOf(point, startDay, nDays, x0, innerW);
    const y = yOf(point);
    if (!current || current.model !== point.source_model) {
      const prev = i > 0 ? points[i - 1] : null;
      const startX = prev ? xOf(prev, startDay, nDays, x0, innerW) : x;
      const startY = prev ? yOf(prev) : y;
      current = {
        model: point.source_model,
        d: `M ${startX.toFixed(1)} ${startY.toFixed(1)} L ${x.toFixed(1)} ${y.toFixed(1)}`,
      };
      segs.push(current);
    } else {
      current.d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
  }
  return segs;
}

function aboveThresholdRuns(points, threshold) {
  const runs = [];
  let run = null;
  const ms = (point) => parseValidAt(point.valid_at).ms;
  for (let i = 0; i < points.length; i += 1) {
    const point = points[i];
    const above = point.mean > threshold;
    if (above && !run) {
      run = [];
      const prev = points[i - 1];
      if (prev && prev.mean <= threshold && point.mean !== prev.mean) {
        const w = (threshold - prev.mean) / (point.mean - prev.mean);
        run.push({
          ms: ms(prev) + w * (ms(point) - ms(prev)),
          mean: threshold,
          gust: prev.gust + w * (point.gust - prev.gust),
        });
      }
    }
    if (above) run.push({ ms: ms(point), mean: point.mean, gust: point.gust });
    const next = points[i + 1];
    if (run && (!next || next.mean <= threshold)) {
      if (next && point.mean !== next.mean) {
        const w = (point.mean - threshold) / (point.mean - next.mean);
        run.push({
          ms: ms(point) + w * (ms(next) - ms(point)),
          mean: threshold,
          gust: point.gust + w * (next.gust - point.gust),
        });
      }
      runs.push(run);
      run = null;
    }
  }
  return runs;
}

function rangeFill(points, startDay, nDays, x0, innerW, yKt, color) {
  if (!points || points.length < 2) return "";
  const start = parseValidAt(`${startDay}T00:00`).ms;
  const span = nDays * 24 * 3600 * 1000;
  const xMs = (ms) => (x0 + ((ms - start) / span) * innerW).toFixed(1);
  return aboveThresholdRuns(points, KT_SLOT)
    .filter((run) => run.length >= 2)
    .map((run) => {
      const top = run.map((p) => `${xMs(p.ms)},${yKt(p.gust).toFixed(1)}`);
      const bottom = run.map((p) => `${xMs(p.ms)},${yKt(p.mean).toFixed(1)}`).reverse();
      return `<polygon class="wind-fill" points="${top.concat(bottom).join(" ")}" fill="${color}" fill-opacity="0.18"></polygon>`;
    })
    .join("");
}

function daysOfHorizon(startDay, nDays) {
  return Array.from({ length: nDays }, (_, d) => addDays(startDay, d));
}

function slotsInHorizon(chartDays, startDay, nDays) {
  return daysOfHorizon(startDay, nDays)
    .map((day) => ({ day, info: chartDays?.[day] }))
    .filter(({ info }) => info && info.slot_start_h != null && info.slot_end_h != null);
}

function peaksInHorizon(chartDays, startDay, nDays) {
  return daysOfHorizon(startDay, nDays)
    .map((day) => ({ day, info: chartDays?.[day] }))
    .filter(({ info }) => info && info.mean_max_at && info.gust_max_at);
}

function niceMaxKt(values) {
  const peak = Math.max(KT25 + 2, ...values, 0);
  return Math.ceil(peak / 5) * 5;
}

function subsample(points, stepHours) {
  return points.filter((point) => {
    const p = parseValidAt(point.valid_at);
    return !p.minute && p.hour % Math.max(1, stepHours) === 0;
  });
}

function arrowStep(nDays) {
  if (nDays <= 1) return 2;
  if (nDays <= 3) return 4;
  return 6;
}

function arrowRotation(dirDeg) {
  const deg = Number(dirDeg);
  if (!Number.isFinite(deg)) return 180;
  return (deg + 180) % 360;
}

function nicePrecipMax(values) {
  const peak = Math.max(0, ...values);
  if (peak <= 1) return 1;
  if (peak <= 2) return 2;
  if (peak <= 5) return 5;
  return Math.ceil(peak / 5) * 5;
}

function weekdayShort(dayKey) {
  const p = parseValidAt(`${dayKey}T00:00`);
  const utc = new Date(Date.UTC(p.year, p.month - 1, p.day));
  const jours = ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."];
  return `${jours[(utc.getUTCDay() + 6) % 7]} ${p.day}`;
}

function xTicks(startDay, nDays, x0, innerW) {
  const hours = [];
  const days = [];
  const noonDots = [];
  const dayBreaks = [];
  for (let d = 0; d < nDays; d += 1) {
    const day = addDays(startDay, d);
    days.push({
      x: xOf({ valid_at: `${day}T12:00` }, startDay, nDays, x0, innerW),
      label: weekdayShort(day),
    });
    if (nDays <= 1) {
      for (let hour = 0; hour < 24; hour += 3) {
        hours.push({
          x: xOf(
            { valid_at: `${day}T${String(hour).padStart(2, "0")}:00` },
            startDay,
            nDays,
            x0,
            innerW
          ),
          label: `${String(hour).padStart(2, "0")}h`,
        });
      }
    }
    if (nDays === 3) {
      noonDots.push({
        x: xOf({ valid_at: `${day}T12:00` }, startDay, nDays, x0, innerW),
      });
    }
    if (nDays >= 3 && d > 0) {
      dayBreaks.push({
        x: xOf({ valid_at: `${day}T00:00` }, startDay, nDays, x0, innerW),
      });
    }
  }
  return { hours, days, noonDots, dayBreaks };
}

// Pas de point sur l'axe de 22 h à 5 h : la nuit se repère d'un coup d'œil.
const NIGHT_DOTS_AFTER_H = 21;
const NIGHT_DOTS_BEFORE_H = 6;

function isDayHour(hour) {
  return hour >= NIGHT_DOTS_BEFORE_H && hour <= NIGHT_DOTS_AFTER_H;
}

function slotCaption(validAt, nDays) {
  const p = parseValidAt(validAt);
  const minutes = p.minute ? String(p.minute).padStart(2, "0") : "";
  const hour = `${String(p.hour).padStart(2, "0")}h${minutes}`;
  if (nDays <= 1) return hour;
  return `${weekdayShort(p.dayKey)} ${hour}`;
}

function pickNearestWind(series, startDay, nDays, geom, svgX, svgY) {
  const { x0, innerW, yWind0, windH, maxKt, windTop } = geom || {};
  if (!innerW || svgY < windTop - 10 || svgY > yWind0 + 10) return null;
  const start = parseValidAt(`${startDay}T00:00`).ms;
  const span = nDays * 24 * 3600 * 1000;
  const tMs = start + ((svgX - x0) / innerW) * span;
  let best = null;
  let bestY = Infinity;
  for (const item of series || []) {
    const points = item.points || [];
    if (!points.length) continue;
    let nearest = points[0];
    let nearestD = Infinity;
    for (const point of points) {
      const d = Math.abs(parseValidAt(point.valid_at).ms - tMs);
      if (d < nearestD) {
        nearestD = d;
        nearest = point;
      }
    }
    const yMean = yWind0 - (nearest.mean / maxKt) * windH;
    const yGust = yWind0 - (nearest.gust / maxKt) * windH;
    const dy = Math.min(Math.abs(svgY - yMean), Math.abs(svgY - yGust));
    if (dy < bestY) {
      bestY = dy;
      best = { setName: item.name, point: nearest };
    }
  }
  return best;
}

function visibleSets(primarySet, options = {}) {
  const showPrimary = options.showPrimary !== false;
  const showSecondary = Boolean(options.showSecondary);
  const secondary = secondaryCurveSet(primarySet);
  const sets = [];
  if (showPrimary) sets.push(primarySet);
  if (showSecondary) sets.push(secondary);
  return sets;
}

function buildChartSvg(seriesBySet, startDay, nDays, width = 400, options = {}) {
  const primarySet = options.primarySet || "AROMEIFS";
  const showPrimary = options.showPrimary !== false;
  const showSecondary = Boolean(options.showSecondary);
  const sets = visibleSets(primarySet, { showPrimary, showSecondary });
  const series = options.seriesList || sets.map((name) => ({ name, points: seriesBySet[name] || [] }));
  const overlay = options.overlay && options.overlay.points?.length ? options.overlay : null;
  const hideWeather = Boolean(options.hideWeather);
  const all = series.flatMap((item) => item.points);
  if (!all.length) {
    return `<svg class="spot-svg" viewBox="0 0 ${width} 80" role="img">
      <text x="12" y="44" fill="#7a7a7a" font-size="12px">Pas de courbe sur cet horizon</text>
    </svg>`;
  }

  const chartDays = options.chartDays || {};
  const slotRows = series.filter((item) => slotsInHorizon(chartDays[item.name], startDay, nDays).length);
  const compactSetLabels = Boolean(options.compactSetLabels);
  const setLabelSize = compactSetLabels ? 7 : 8;
  const padL = 58;
  const padR = 40;
  const dirRowH = compactSetLabels ? 18 : 22;
  const windH = 148;
  const axisH = 18;
  const slotRowH = nDays <= 1 ? 14 : 20;
  const wxH = hideWeather ? 0 : 58;
  const padB = 16;
  const dirY0 = 4;
  const windTop = dirY0 + dirRowH * series.length + 6;
  const yWind0 = windTop + windH;
  const axisY = yWind0 + 3;
  const slotY0 = axisY + axisH;
  const wxY0 = slotY0 + slotRows.length * slotRowH;
  const height = wxY0 + wxH + padB;
  const innerW = Math.max(40, width - padL - padR);
  const x0 = padL;
  const x1 = padL + innerW;
  const setLabelX = compactSetLabels ? 2 : 4;
  const wxUnitPad = 11;
  const overlayPoints = overlay ? overlay.points : [];
  const maxKt = niceMaxKt(all.concat(overlayPoints).flatMap((p) => [p.mean, p.gust]));
  const yKt = (kt) => yWind0 - (kt / maxKt) * windH;
  const nHours = nDays * 24;
  const hourW = innerW / nHours;
  const ticks = xTicks(startDay, nDays, x0, innerW);

  const gridValues = [];
  for (let kt = 0; kt <= maxKt; kt += 5) gridValues.push(kt);
  const grid = gridValues
    .map((kt) => {
      const y = yKt(kt);
      return `<line class="kt-grid" x1="${x0}" y1="${y.toFixed(1)}" x2="${x1}" y2="${y.toFixed(1)}" stroke="#2a2a2a" stroke-width="0.45"></line>
        <text x="${x0 - 6}" y="${(y + 3).toFixed(1)}" text-anchor="end" fill="#7a7a7a" font-size="8px">${kt}</text>`;
    })
    .join("");
  const ySlot = yKt(KT_SLOT);
  const ktSlotLine = `<line class="kt-10" x1="${x0}" y1="${ySlot.toFixed(1)}" x2="${x1}" y2="${ySlot.toFixed(1)}" stroke="#8a8a8a" stroke-dasharray="3 3" stroke-width="0.8"></line>`;

  function paintWind(points, dashed) {
    const segs = lineSegments(points, startDay, nDays, x0, innerW, (p) => yKt(dashed ? p.gust : p.mean));
    const strokeW = dashed ? GUST_STROKE : MEAN_STROKE;
    const attrs = dashed
      ? ` stroke-dasharray="3 3" stroke-width="${strokeW}" opacity="0.92"`
      : ` stroke-width="${strokeW}"`;
    // Liseré sombre : la mesure reste lisible quand elle croise la prévision.
    const halo = (seg) =>
      options.halo
        ? `<path class="wind-halo" d="${seg.d}" fill="none" stroke="${HALO_COLOR}" stroke-width="${(strokeW + 2.4).toFixed(2)}" opacity="0.85" stroke-linejoin="round" stroke-linecap="round"></path>`
        : "";
    return segs
      .map(
        (seg) =>
          `${halo(seg)}<path d="${seg.d}" fill="none" stroke="${modelColor(seg.model)}"${attrs} stroke-linejoin="round" stroke-linecap="round"></path>`
      )
      .join("");
  }

  const step = arrowStep(nDays);
  function paintArrows(points, row) {
    const y = dirY0 + row * dirRowH + 12;
    return subsample(points, step)
      .map((point) => {
        const x = xOf(point, startDay, nDays, x0, innerW);
        const col = modelColor(point.source_model);
        return `<g transform="translate(${x.toFixed(1)},${y}) rotate(${arrowRotation(point.dir)})">
          <path d="M0 -5.5 L3.2 5.5 L0 3.2 L-3.2 5.5 Z" fill="${col}"></path>
        </g>`;
      })
      .join("");
  }

  const dirLabels = series
    .map((item, row) => {
      const y = dirY0 + row * dirRowH + 15;
      return `<text class="set-label" x="${setLabelX}" y="${y}" text-anchor="start" fill="${SET_COLORS[item.name]}" font-size="${setLabelSize}px">${SET_LABELS[item.name]}</text>
        ${paintArrows(item.points, row)}`;
    })
    .join("");

  const fills = series
    .map((item) => rangeFill(item.points, startDay, nDays, x0, innerW, yKt, SET_COLORS[item.name]))
    .join("");

  const winds = series.map((item) => paintWind(item.points, true) + paintWind(item.points, false)).join("");

  function paintOverlay() {
    if (!overlay) return "";
    const color = SET_COLORS[overlay.name] || "#7a7a7a";
    const path = (pick) =>
      overlayPoints
        .map((p, i) => {
          const x = xOf(p, startDay, nDays, x0, innerW).toFixed(1);
          return `${i ? "L" : "M"} ${x} ${yKt(pick(p)).toFixed(1)}`;
        })
        .join(" ");
    return `<g class="forecast-overlay">
      <path d="${path((p) => p.gust)}" fill="none" stroke="${color}" stroke-width="${GUST_STROKE}" stroke-dasharray="3 3" opacity="0.8"></path>
      <path d="${path((p) => p.mean)}" fill="none" stroke="${color}" stroke-width="${MEAN_STROKE * 0.85}" opacity="0.9" stroke-linejoin="round" stroke-linecap="round"></path>
    </g>`;
  }

  let nowLine = "";
  if (options.nowAt) {
    const xNow = xOf({ valid_at: options.nowAt }, startDay, nDays, x0, innerW);
    if (xNow >= x0 && xNow <= x1) {
      nowLine = `<line class="now-line" x1="${xNow.toFixed(1)}" y1="${windTop}" x2="${xNow.toFixed(1)}" y2="${yWind0}" stroke="#5a5a5a" stroke-dasharray="1 3" stroke-width="0.8"></line>`;
    }
  }

  const xAt = (validAt) => xOf({ valid_at: validAt }, startDay, nDays, x0, innerW);
  const nearestPoint = (points, validAt) => points.find((point) => point.valid_at === validAt);
  function peakLabel(x, y, text, color, below, kind) {
    const ty = below ? y + 11 : y - 5;
    return `<circle class="peak-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="${color}"></circle>
      <text class="peak-label peak-${kind}" x="${x.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" fill="${color}" stroke="#141414" stroke-width="2.4" paint-order="stroke" font-size="8.5px" font-weight="700">${escapeHtml(text)}</text>`;
  }
  const peaks = series
    .map((item, idx) => {
      const color = SET_COLORS[item.name];
      return peaksInHorizon(chartDays[item.name], startDay, nDays)
        .filter(({ info }) => nDays <= 1 || info.slot_start_h != null)
        .map(({ info }) => {
          const meanPoint = nearestPoint(item.points, info.mean_max_at);
          const gustPoint = nearestPoint(item.points, info.gust_max_at);
          let out = "";
          if (gustPoint) {
            out += peakLabel(xAt(info.gust_max_at), yKt(gustPoint.gust), String(info.gust_max_kt), color, idx === 1, "gust");
          }
          if (meanPoint) {
            out += peakLabel(xAt(info.mean_max_at), yKt(meanPoint.mean), String(info.mean_max_kt), color, idx === 1, "mean");
          }
          return out;
        })
        .join("");
    })
    .join("");

  const slotBrackets = slotRows
    .map((item, row) => {
      const color = SET_COLORS[item.name];
      const y = slotY0 + row * slotRowH + 4;
      const label = `<text class="slot-row-label" x="${x0 - 6}" y="${(y + 3).toFixed(1)}" text-anchor="end" fill="${color}" font-size="7px">créneau</text>`;
      const marks = slotsInHorizon(chartDays[item.name], startDay, nDays)
        .map(({ day, info }) => {
          const hour = (h) => `${day}T${String(h).padStart(2, "0")}:00`;
          const xa = xAt(hour(info.slot_start_h));
          const xb = xAt(hour(info.slot_end_h));
          const startText = `${String(info.slot_start_h).padStart(2, "0")}h`;
          const endText = `${String(info.slot_end_h).padStart(2, "0")}h`;
          // Sur 3 et 5 jours, des bornes aux extrémités se colleraient d'un jour à l'autre.
          const labels =
            nDays <= 1
              ? `<text class="slot-start" x="${(xa - 2).toFixed(1)}" y="${y + 3}" text-anchor="end" fill="${color}" font-size="8px" font-weight="700">${startText}</text>
            <text class="slot-end" x="${(xb + 2).toFixed(1)}" y="${y + 3}" text-anchor="start" fill="${color}" font-size="8px" font-weight="700">${endText}</text>`
              : `<text class="slot-range" x="${((xa + xb) / 2).toFixed(1)}" y="${y + 10}" text-anchor="middle" fill="${color}" font-size="7.5px" font-weight="700">${String(info.slot_start_h).padStart(2, "0")}-${endText}</text>`;
          return `<g class="slot-bracket" data-set="${item.name}">
            <line x1="${xa.toFixed(1)}" y1="${y}" x2="${xb.toFixed(1)}" y2="${y}" stroke="${color}" stroke-width="2.2" stroke-linecap="round"></line>
            <line x1="${xa.toFixed(1)}" y1="${y - 3}" x2="${xa.toFixed(1)}" y2="${y + 3}" stroke="${color}" stroke-width="1.2"></line>
            <line x1="${xb.toFixed(1)}" y1="${y - 3}" x2="${xb.toFixed(1)}" y2="${y + 3}" stroke="${color}" stroke-width="1.2"></line>
            ${labels}
          </g>`;
        })
        .join("");
      return label + marks;
    })
    .join("");

  const wx = mergeWxMax(series.map((item) => item.points));
  const precipMax = nicePrecipMax(wx.map((p) => p.precip));
  const precipMid = precipMax / 2;
  const precipMidLabel = Number.isInteger(precipMid) ? String(precipMid) : precipMid.toFixed(1);
  const yCloud = (pct) => wxY0 + wxH - 6 - (Math.max(0, Math.min(100, pct)) / 100) * (wxH - 16);
  const yPrecip = (mm) => wxY0 + wxH - 6 - (Math.max(0, mm) / precipMax) * (wxH - 16);
  const windMidY = (windTop + yWind0) / 2;
  const wxMidY = wxY0 + wxH / 2;
  let wxDraw = `<line class="wx-mid" x1="${x0}" y1="${yCloud(50).toFixed(1)}" x2="${x1}" y2="${yCloud(50).toFixed(1)}" stroke="#4a4a4a" stroke-dasharray="2 3" stroke-width="0.55"></line>
    <text class="wx-unit" transform="translate(${wxUnitPad} ${wxMidY.toFixed(1)}) rotate(-90)" text-anchor="middle" fill="${WX_CLOUD}" font-size="6.5px">Nuages (%)</text>
    <text class="wx-unit" transform="translate(${width - wxUnitPad} ${wxMidY.toFixed(1)}) rotate(-90)" text-anchor="middle" fill="${WX_PRECIP}" font-size="6.5px">Pluie (mm)</text>
    <text class="wx-tick" x="${x0 - 6}" y="${yCloud(100) + 3}" text-anchor="end" fill="${WX_CLOUD}" font-size="8px">100</text>
    <text class="wx-tick" x="${x0 - 6}" y="${yCloud(50) + 3}" text-anchor="end" fill="${WX_CLOUD}" font-size="8px">50</text>
    <text class="wx-tick" x="${x0 - 6}" y="${yCloud(0) + 3}" text-anchor="end" fill="${WX_CLOUD}" font-size="8px">0</text>
    <text class="wx-tick" x="${x1 + 6}" y="${yPrecip(precipMax) + 3}" text-anchor="start" fill="${WX_PRECIP}" font-size="8px">${precipMax}</text>
    <text class="wx-tick wx-tick-precip-mid" x="${x1 + 6}" y="${yPrecip(precipMid) + 3}" text-anchor="start" fill="${WX_PRECIP}" font-size="8px">${precipMidLabel}</text>
    <text class="wx-tick" x="${x1 + 6}" y="${yPrecip(0) + 3}" text-anchor="start" fill="${WX_PRECIP}" font-size="8px">0</text>`;

  const cloudSlots = hourSlots(wx, startDay, nHours);
  for (let h = 0; h < nHours; h += 1) {
    const point = cloudSlots[h];
    if (!point || !(point.cloud > 0)) continue;
    const x = x0 + h * hourW;
    const yTop = yCloud(point.cloud);
    const ch = wxY0 + wxH - 6 - yTop;
    wxDraw += `<rect class="wx-cloud" x="${x.toFixed(1)}" y="${yTop.toFixed(1)}" width="${hourW.toFixed(1)}" height="${Math.max(0, ch).toFixed(1)}" fill="${WX_CLOUD}" opacity="${WX_CLOUD_OPACITY}">
      <title>Nuages ${Math.round(point.cloud)} %</title>
    </rect>`;
  }

  const precipSlots = hourSlots(wx, startDay, nHours);
  for (let h = 0; h < nHours; h += 1) {
    const point = precipSlots[h];
    if (!point || !(point.precip > 0)) continue;
    const x = x0 + h * hourW;
    const barW = Math.max(1.4, hourW * 0.38);
    const yBar = yPrecip(point.precip);
    const ph = wxY0 + wxH - 6 - yBar;
    wxDraw += `<rect x="${(x + hourW * 0.31).toFixed(1)}" y="${yBar.toFixed(1)}" width="${barW.toFixed(1)}" height="${Math.max(0.8, ph).toFixed(1)}" fill="${WX_PRECIP}" opacity="0.92">
        <title>Pluie ${point.precip.toFixed(1)} mm</title>
      </rect>`;
  }
  if (hideWeather) wxDraw = "";

  let hourAxis = `<line x1="${x0}" y1="${axisY}" x2="${x1}" y2="${axisY}" stroke="#2a2a2a"></line>`;
  if (nDays <= 1) {
    for (let hour = 0; hour < 24; hour += 1) {
      const x = xOf(
        { valid_at: `${startDay}T${String(hour).padStart(2, "0")}:00` },
        startDay,
        nDays,
        x0,
        innerW
      );
      hourAxis += `<line x1="${x.toFixed(1)}" y1="${axisY - 3}" x2="${x.toFixed(1)}" y2="${axisY + 3}" stroke="#8a8a8a" stroke-width="1"></line>`;
      if (isDayHour(hour)) {
        hourAxis += `<circle class="hour-dot" cx="${x.toFixed(1)}" cy="${axisY}" r="2.1" fill="#c4c4c4"></circle>`;
      }
    }
  } else {
    for (const br of ticks.dayBreaks) {
      hourAxis += `<line class="day-break" x1="${br.x.toFixed(1)}" y1="${windTop}" x2="${br.x.toFixed(1)}" y2="${(wxY0 + wxH - 6).toFixed(1)}" stroke="#3a3a3a" stroke-width="0.7"></line>
        <line x1="${br.x.toFixed(1)}" y1="${axisY - 5}" x2="${br.x.toFixed(1)}" y2="${axisY + 5}" stroke="#9a9a9a" stroke-width="1.1"></line>`;
    }
    for (const dot of ticks.noonDots) {
      hourAxis += `<circle class="noon-dot" cx="${dot.x.toFixed(1)}" cy="${axisY}" r="2.2" fill="#c4c4c4"></circle>`;
    }
  }
  const hourLabels = ticks.hours
    .map(
      (tick) =>
        `<text x="${tick.x.toFixed(1)}" y="${axisY + 12}" text-anchor="middle" fill="#7a7a7a" font-size="8px">${escapeHtml(tick.label)}</text>`
    )
    .join("");
  const dayLabels = ticks.days
    .map(
      (tick) =>
        `<text x="${tick.x.toFixed(1)}" y="${height - 4}" text-anchor="middle" fill="#b29f84" font-size="9px">${escapeHtml(tick.label)}</text>`
    )
    .join("");

  const geom = { x0, innerW, windTop, windH, yWind0, maxKt, startDay, nDays, width, height };
  const ariaLabel = hideWeather ? "Vent mesuré, rafales et direction" : "Prévision vent, rafales, direction, nuages et pluie";
  return `<svg class="spot-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${ariaLabel}" data-geom="${escapeHtml(JSON.stringify(geom))}">
    <rect x="0" y="0" width="${width}" height="${height}" fill="transparent"></rect>
    ${dirLabels}
    ${grid}
    ${ktSlotLine}
    <text class="kt-unit" transform="translate(${wxUnitPad} ${windMidY.toFixed(1)}) rotate(-90)" text-anchor="middle" fill="#7a7a7a" font-size="6.5px">nds</text>
    ${paintOverlay()}
    ${nowLine}
    ${fills}
    ${winds}
    ${peaks}
    ${hourAxis}
    ${hourLabels}
    ${slotBrackets}
    ${hideWeather ? "" : `<line x1="${x0}" y1="${wxY0}" x2="${x1}" y2="${wxY0}" stroke="#2a2a2a"></line>`}
    ${wxDraw}
    ${dayLabels}
  </svg>`;
}

function legendHtml(seriesList, options = {}) {
  const all = seriesList.flat();
  const usedModels = [...new Set(all.map((p) => p.source_model))];
  const keys = usedModels
    .map((model) => {
      const col = modelColor(model);
      return `<span class="chart-key"><i style="background:${col}"></i>${escapeHtml(model)}</span>`;
    })
    .join("");
  return `<div class="chart-legend">
    ${keys}
    <span class="chart-key chart-key-note">plein = vent moyen · pointillé = rafales · zone colorée = vent moyen &gt; 10 nds</span>
    ${options.note || ""}
  </div>`;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    CURVE_SETS,
    MODEL_COLORS,
    SET_COLORS,
    WX_CLOUD,
    WX_CLOUD_OPACITY,
    escapeHtml,
    modelColor,
    hourSlots,
    mapsUrl,
    parseValidAt,
    addDays,
    sliceHorizon,
    indexCurves,
    primaryCurveSet,
    secondaryCurveSet,
    visibleSets,
    mergeWxMax,
    arrowRotation,
    nicePrecipMax,
    xTicks,
    slotCaption,
    isDayHour,
    pickNearestWind,
    buildChartSvg,
    legendHtml,
    niceMaxKt,
    aboveThresholdRuns,
    slotsInHorizon,
    KT_SLOT,
    KT25,
    MEAN_STROKE,
    GUST_STROKE,
  };
}
