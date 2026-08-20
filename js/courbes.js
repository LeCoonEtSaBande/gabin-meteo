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
};

const SET_COLORS = {
  AROMEIFS: "#b29f84",
  ICONGFS: "#6eb4d0",
};

const SET_LABELS = {
  AROMEIFS: "AROMEIFS",
  ICONGFS: "ICONGFS",
};

const KT8 = 8;
const KT15 = 15;
const KT25 = 25;
const MEAN_STROKE = 1.94;
const GUST_STROKE = 1.13;
const WX_CLOUD = "#8a8a8a";
const WX_PRECIP = "#5a8aa3";

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
    const cloud = Number(row.cloud_cover_max_pct);
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
      const cur = map.get(point.valid_at);
      if (!cur) {
        map.set(point.valid_at, {
          valid_at: point.valid_at,
          cloud: point.cloud || 0,
          precip: point.precip || 0,
        });
      } else {
        cur.cloud = Math.max(cur.cloud, point.cloud || 0);
        cur.precip = Math.max(cur.precip, point.precip || 0);
      }
    }
  }
  const rows = [...map.values()].sort(
    (a, b) => parseValidAt(a.valid_at).ms - parseValidAt(b.valid_at).ms
  );
  return rows.map((row, i) => {
    let cloud = row.cloud;
    for (let j = i - 1; j <= i + 1; j += 1) {
      if (rows[j]) cloud = Math.max(cloud, rows[j].cloud);
    }
    return { ...row, cloud };
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

function rangeFill(points, startDay, nDays, x0, innerW, yKt, color) {
  if (!points || points.length < 2) return "";
  const top = [];
  const bottom = [];
  for (const point of points) {
    const x = xOf(point, startDay, nDays, x0, innerW).toFixed(1);
    top.push(`${x},${yKt(point.gust).toFixed(1)}`);
    bottom.push(`${x},${yKt(point.mean).toFixed(1)}`);
  }
  bottom.reverse();
  return `<polygon points="${top.concat(bottom).join(" ")}" fill="${color}" fill-opacity="0.18"></polygon>`;
}

function niceMaxKt(values) {
  const peak = Math.max(KT25 + 2, ...values, 0);
  return Math.ceil(peak / 5) * 5;
}

function subsample(points, stepHours) {
  if (stepHours <= 1) return points;
  return points.filter((point) => parseValidAt(point.valid_at).hour % stepHours === 0);
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
  const hourStep = nDays <= 1 ? 3 : 6;
  for (let d = 0; d < nDays; d += 1) {
    const day = addDays(startDay, d);
    days.push({
      x: xOf({ valid_at: `${day}T12:00` }, startDay, nDays, x0, innerW),
      label: weekdayShort(day),
    });
    for (let hour = 0; hour < 24; hour += hourStep) {
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
  return { hours, days };
}

function visibleSets(primarySet, hideSecondary) {
  const secondary = secondaryCurveSet(primarySet);
  if (hideSecondary) return [primarySet];
  return [primarySet, secondary];
}

function buildChartSvg(seriesBySet, startDay, nDays, width = 400, options = {}) {
  const primarySet = options.primarySet || "AROMEIFS";
  const hideSecondary = Boolean(options.hideSecondary);
  const sets = visibleSets(primarySet, hideSecondary);
  const series = sets.map((name) => ({ name, points: seriesBySet[name] || [] }));
  const all = series.flatMap((item) => item.points);
  if (!all.length) {
    return `<svg class="spot-svg" viewBox="0 0 ${width} 80" role="img">
      <text x="12" y="44" fill="#7a7a7a" font-size="12">Pas de courbe sur cet horizon</text>
    </svg>`;
  }

  const compactSetLabels = Boolean(options.compactSetLabels);
  const setLabelSize = compactSetLabels ? 6.2 : 8;
  const padL = 64;
  const padR = 38;
  const dirRowH = compactSetLabels ? 18 : 22;
  const windH = 148;
  const axisH = 18;
  const wxH = 52;
  const padB = 16;
  const dirY0 = 4;
  const windTop = dirY0 + dirRowH * series.length + 6;
  const yWind0 = windTop + windH;
  const axisY = yWind0 + 3;
  const wxY0 = axisY + axisH;
  const height = wxY0 + wxH + padB;
  const innerW = Math.max(40, width - padL - padR);
  const x0 = padL;
  const x1 = padL + innerW;
  const maxKt = niceMaxKt(all.flatMap((p) => [p.mean, p.gust]));
  const yKt = (kt) => yWind0 - (kt / maxKt) * windH;
  const hourW = innerW / (nDays * 24);
  const ticks = xTicks(startDay, nDays, x0, innerW);

  const gridValues = [0, KT8, KT15, KT25, maxKt].filter(
    (v, i, arr) => arr.indexOf(v) === i && v <= maxKt
  );
  const grid = gridValues
    .map((kt) => {
      const y = yKt(kt);
      const is25 = kt === KT25;
      const dash = is25 ? "3 3" : "2 4";
      const col = is25 ? "#9a9a9a" : "#2a2a2a";
      const widthLine = is25 ? "1.15" : "1";
      return `<line x1="${x0}" y1="${y.toFixed(1)}" x2="${x1}" y2="${y.toFixed(1)}" stroke="${col}" stroke-dasharray="${dash}" stroke-width="${widthLine}"></line>
        <text x="${x0 - 4}" y="${(y + 3).toFixed(1)}" text-anchor="end" fill="#7a7a7a" font-size="9">${kt}</text>`;
    })
    .join("");

  function paintWind(points, dashed) {
    const segs = lineSegments(points, startDay, nDays, x0, innerW, (p) => yKt(dashed ? p.gust : p.mean));
    const attrs = dashed
      ? ` stroke-dasharray="3 3" stroke-width="${GUST_STROKE}" opacity="0.92"`
      : ` stroke-width="${MEAN_STROKE}"`;
    return segs
      .map(
        (seg) =>
          `<path d="${seg.d}" fill="none" stroke="${modelColor(seg.model)}"${attrs} stroke-linejoin="round" stroke-linecap="round">
            <title>${escapeHtml(seg.model)} · ${dashed ? "rafales" : "vent moyen"}</title>
          </path>`
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
      return `<text x="${x0 - 4}" y="${y}" text-anchor="end" fill="${SET_COLORS[item.name]}" font-size="${setLabelSize}">${SET_LABELS[item.name]}</text>
        ${paintArrows(item.points, row)}`;
    })
    .join("");

  const fills = series
    .map((item) => rangeFill(item.points, startDay, nDays, x0, innerW, yKt, SET_COLORS[item.name]))
    .join("");

  const winds = series.map((item) => paintWind(item.points, true) + paintWind(item.points, false)).join("");

  const wx = mergeWxMax(series.map((item) => item.points));
  const precipMax = nicePrecipMax(wx.map((p) => p.precip));
  const yCloud = (pct) => wxY0 + wxH - 6 - (Math.max(0, Math.min(100, pct)) / 100) * (wxH - 16);
  const yPrecip = (mm) => wxY0 + wxH - 6 - (Math.max(0, mm) / precipMax) * (wxH - 16);
  let wxDraw = `<text x="${x0 - 4}" y="${wxY0 + 8}" text-anchor="end" fill="${WX_CLOUD}" font-size="7">néb. %</text>
    <text x="${x1 + 4}" y="${wxY0 + 8}" fill="${WX_PRECIP}" font-size="7">mm</text>
    <text x="${x0 - 4}" y="${yCloud(100) + 3}" text-anchor="end" fill="${WX_CLOUD}" font-size="8">100</text>
    <text x="${x0 - 4}" y="${yCloud(50) + 3}" text-anchor="end" fill="${WX_CLOUD}" font-size="8">50</text>
    <text x="${x0 - 4}" y="${yCloud(0) + 3}" text-anchor="end" fill="${WX_CLOUD}" font-size="8">0</text>
    <text x="${x1 + 4}" y="${yPrecip(precipMax) + 3}" fill="${WX_PRECIP}" font-size="8">${precipMax}</text>
    <text x="${x1 + 4}" y="${yPrecip(0) + 3}" fill="${WX_PRECIP}" font-size="8">0</text>`;
  for (let i = 0; i < wx.length; i += 1) {
    const point = wx[i];
    const x = xOf(point, startDay, nDays, x0, innerW);
    const next = wx[i + 1];
    const w = next ? Math.max(1, xOf(next, startDay, nDays, x0, innerW) - x) : hourW;
    const yTop = yCloud(point.cloud);
    const ch = wxY0 + wxH - 6 - yTop;
    wxDraw += `<rect x="${x.toFixed(1)}" y="${yTop.toFixed(1)}" width="${w.toFixed(1)}" height="${Math.max(0, ch).toFixed(1)}" fill="${WX_CLOUD}" opacity="0.32">
      <title>Nébulosité ${Math.round(point.cloud)} %</title>
    </rect>`;
    if (point.precip > 0) {
      const barW = Math.max(1.4, w * 0.38);
      const yBar = yPrecip(point.precip);
      const ph = wxY0 + wxH - 6 - yBar;
      wxDraw += `<rect x="${(x + w * 0.31).toFixed(1)}" y="${yBar.toFixed(1)}" width="${barW.toFixed(1)}" height="${Math.max(0.8, ph).toFixed(1)}" fill="${WX_PRECIP}" opacity="0.92">
        <title>Pluie ${point.precip.toFixed(1)} mm</title>
      </rect>`;
    }
  }

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
      hourAxis += `<line x1="${x.toFixed(1)}" y1="${axisY - 3}" x2="${x.toFixed(1)}" y2="${axisY + 3}" stroke="#8a8a8a" stroke-width="1"></line>
        <circle class="hour-dot" cx="${x.toFixed(1)}" cy="${axisY}" r="2.1" fill="#c4c4c4"></circle>`;
    }
  }
  const hourLabels = ticks.hours
    .map(
      (tick) =>
        `<text x="${tick.x.toFixed(1)}" y="${axisY + 12}" text-anchor="middle" fill="#7a7a7a" font-size="8">${escapeHtml(tick.label)}</text>`
    )
    .join("");
  const dayLabels = ticks.days
    .map(
      (tick) =>
        `<text x="${tick.x.toFixed(1)}" y="${height - 4}" text-anchor="middle" fill="#b29f84" font-size="9">${escapeHtml(tick.label)}</text>`
    )
    .join("");

  return `<svg class="spot-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Prévision vent, rafales, direction, nébulosité et pluie">
    <rect x="0" y="0" width="${width}" height="${height}" fill="transparent"></rect>
    ${dirLabels}
    ${grid}
    <text x="${x0 - 4}" y="${windTop + 8}" text-anchor="end" fill="#7a7a7a" font-size="8">nds</text>
    ${fills}
    ${winds}
    ${hourAxis}
    ${hourLabels}
    <line x1="${x0}" y1="${wxY0}" x2="${x1}" y2="${wxY0}" stroke="#2a2a2a"></line>
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
    <span class="chart-key chart-key-note">plein = vent moyen · pointillé = rafales · plage = moyen→rafales</span>
    ${options.note || ""}
  </div>`;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    CURVE_SETS,
    MODEL_COLORS,
    SET_COLORS,
    escapeHtml,
    modelColor,
    mapsUrl,
    parseValidAt,
    addDays,
    sliceHorizon,
    indexCurves,
    primaryCurveSet,
    secondaryCurveSet,
    mergeWxMax,
    arrowRotation,
    nicePrecipMax,
    xTicks,
    buildChartSvg,
    legendHtml,
    niceMaxKt,
    KT25,
    MEAN_STROKE,
    GUST_STROKE,
  };
}
