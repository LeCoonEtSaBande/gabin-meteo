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

function envelopeMean(seriesList) {
  const map = new Map();
  for (const series of seriesList) {
    for (const point of series) {
      const prev = map.get(point.valid_at);
      if (prev == null || point.mean > prev) map.set(point.valid_at, point.mean);
    }
  }
  return [...map.entries()]
    .sort((a, b) => parseValidAt(a[0]).ms - parseValidAt(b[0]).ms)
    .map(([valid_at, mean]) => ({ valid_at, mean }));
}

function hourlyWindLevels(envelope) {
  return envelope.map((point) => ({
    valid_at: point.valid_at,
    level: point.mean > KT15 ? KT15 : point.mean > KT8 ? KT8 : 0,
  }));
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

function niceMaxKt(values) {
  const peak = Math.max(KT15 + 2, ...values, 0);
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

function weekdayShort(dayKey) {
  const p = parseValidAt(`${dayKey}T00:00`);
  const utc = new Date(Date.UTC(p.year, p.month - 1, p.day));
  const jours = ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."];
  return `${jours[(utc.getUTCDay() + 6) % 7]} ${p.day}`;
}

function xTicks(startDay, nDays, x0, innerW) {
  const ticks = [];
  if (nDays <= 1) {
    for (let hour = 0; hour < 24; hour += 3) {
      const valid_at = `${startDay}T${String(hour).padStart(2, "0")}:00`;
      ticks.push({
        x: xOf({ valid_at }, startDay, nDays, x0, innerW),
        label: `${String(hour).padStart(2, "0")}h`,
      });
    }
    return ticks;
  }
  for (let d = 0; d < nDays; d += 1) {
    const day = addDays(startDay, d);
    ticks.push({
      x: xOf({ valid_at: `${day}T00:00` }, startDay, nDays, x0, innerW),
      label: weekdayShort(day),
    });
  }
  return ticks;
}

function buildChartSvg(seriesBySet, startDay, nDays, width = 420) {
  const arome = seriesBySet.AROMEIFS || [];
  const icon = seriesBySet.ICONGFS || [];
  const all = [...arome, ...icon];
  if (!all.length) {
    return `<svg class="spot-svg" viewBox="0 0 ${width} 80" role="img">
      <text x="12" y="44" fill="#7a7a7a" font-size="12">Pas de courbe sur cet horizon</text>
    </svg>`;
  }

  const padL = 30;
  const padR = 8;
  const padT = 8;
  const windH = 148;
  const dirRowH = 26;
  const wxH = 34;
  const padB = 20;
  const dirY0 = padT + windH + 8;
  const wxY0 = dirY0 + dirRowH * 2 + 4;
  const height = wxY0 + wxH + padB;
  const innerW = Math.max(40, width - padL - padR);
  const x0 = padL;
  const x1 = padL + innerW;
  const yWind0 = padT + windH;
  const maxKt = niceMaxKt(all.flatMap((p) => [p.mean, p.gust]));
  const yKt = (kt) => yWind0 - (kt / maxKt) * windH;
  const envelope = envelopeMean([arome, icon]);
  const levels = hourlyWindLevels(envelope);
  const hourW = innerW / (nDays * 24);

  let bands = "";
  for (const hour of levels) {
    if (!hour.level) continue;
    const x = xOf(hour, startDay, nDays, x0, innerW);
    const fill = hour.level === KT15 ? "rgba(212,176,64,0.22)" : "rgba(60,176,67,0.14)";
    bands += `<rect x="${x.toFixed(1)}" y="${padT}" width="${Math.max(1, hourW).toFixed(1)}" height="${windH}" fill="${fill}"></rect>`;
  }

  const grid = [0, KT8, KT15, maxKt]
    .filter((v, i, arr) => arr.indexOf(v) === i && v <= maxKt)
    .map((kt) => {
      const y = yKt(kt);
      const dash = kt === KT8 || kt === KT15 ? "4 3" : "2 4";
      const col = kt === KT15 ? "rgba(212,176,64,0.65)" : kt === KT8 ? "rgba(60,176,67,0.55)" : "#2a2a2a";
      return `<line x1="${x0}" y1="${y.toFixed(1)}" x2="${x1}" y2="${y.toFixed(1)}" stroke="${col}" stroke-dasharray="${dash}" stroke-width="1"></line>
        <text x="${x0 - 4}" y="${y + 3}" text-anchor="end" fill="#7a7a7a" font-size="9">${kt}</text>`;
    })
    .join("");

  function paintWind(points, dashed) {
    const segs = lineSegments(points, startDay, nDays, x0, innerW, (p) => yKt(dashed ? p.gust : p.mean));
    const dash = dashed ? ' stroke-dasharray="3 3" stroke-width="1.25" opacity="0.9"' : ' stroke-width="2.15"';
    return segs
      .map(
        (seg) =>
          `<path d="${seg.d}" fill="none" stroke="${modelColor(seg.model)}"${dash} stroke-linejoin="round" stroke-linecap="round">
            <title>${escapeHtml(seg.model)} · ${dashed ? "rafales" : "vent moyen"}</title>
          </path>`
      )
      .join("");
  }

  const step = arrowStep(nDays);
  function paintArrows(points, row) {
    const y = dirY0 + row * dirRowH + 14;
    return subsample(points, step)
      .map((point) => {
        const x = xOf(point, startDay, nDays, x0, innerW);
        const col = modelColor(point.source_model);
        return `<g transform="translate(${x.toFixed(1)},${y}) rotate(${point.dir})">
          <path d="M0 -6 L3.5 6 L0 3.5 L-3.5 6 Z" fill="${col}"></path>
        </g>`;
      })
      .join("");
  }

  const maxPrecip = Math.max(2, ...all.map((p) => p.precip));
  function paintWx(points, setName, offset) {
    const col = SET_COLORS[setName];
    let cloud = "";
    let precip = "";
    for (let i = 0; i < points.length; i += 1) {
      const point = points[i];
      const x = xOf(point, startDay, nDays, x0, innerW);
      const next = points[i + 1];
      const w = next
        ? Math.max(1, xOf(next, startDay, nDays, x0, innerW) - x)
        : hourW;
      const ch = (point.cloud / 100) * (wxH - 4);
      cloud += `<rect x="${x.toFixed(1)}" y="${(wxY0 + wxH - 2 - ch).toFixed(1)}" width="${w.toFixed(1)}" height="${ch.toFixed(1)}" fill="${col}" opacity="0.18"></rect>`;
      if (point.precip > 0) {
        const barW = Math.max(1.2, w * 0.32);
        const ph = (point.precip / maxPrecip) * (wxH - 6);
        precip += `<rect x="${(x + offset * barW + w * 0.15).toFixed(1)}" y="${(wxY0 + wxH - 2 - ph).toFixed(1)}" width="${barW.toFixed(1)}" height="${ph.toFixed(1)}" fill="${col}" opacity="0.85">
          <title>${SET_LABELS[setName]} · ${point.precip.toFixed(1)} mm · nébulosité ${Math.round(point.cloud)}%</title>
        </rect>`;
      }
    }
    return cloud + precip;
  }

  const ticks = xTicks(startDay, nDays, x0, innerW)
    .map(
      (tick) =>
        `<text x="${tick.x.toFixed(1)}" y="${height - 6}" text-anchor="middle" fill="#7a7a7a" font-size="9">${escapeHtml(tick.label)}</text>`
    )
    .join("");

  const usedModels = [...new Set(all.map((p) => p.source_model))];
  const legend = usedModels
    .map((model) => {
      const col = modelColor(model);
      return `<span class="chart-key"><i style="background:${col}"></i>${escapeHtml(model)}</span>`;
    })
    .join("");

  const svg = `<svg class="spot-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Prévision vent, rafales, direction, nébulosité et pluie">
    <rect x="0" y="0" width="${width}" height="${height}" fill="transparent"></rect>
    ${bands}
    ${grid}
    <text x="${x0 - 4}" y="${padT + 8}" text-anchor="end" fill="#7a7a7a" font-size="8">nds</text>
    ${paintWind(arome, true)}${paintWind(icon, true)}
    ${paintWind(arome, false)}${paintWind(icon, false)}
    <text x="${x0 - 2}" y="${dirY0 + 16}" text-anchor="end" fill="#7a7a7a" font-size="8">A</text>
    <text x="${x0 - 2}" y="${dirY0 + dirRowH + 16}" text-anchor="end" fill="#7a7a7a" font-size="8">I</text>
    ${paintArrows(arome, 0)}${paintArrows(icon, 1)}
    <line x1="${x0}" y1="${wxY0}" x2="${x1}" y2="${wxY0}" stroke="#2a2a2a"></line>
    ${paintWx(arome, "AROMEIFS", 0)}${paintWx(icon, "ICONGFS", 1)}
    ${ticks}
  </svg>
  <div class="chart-legend">
    ${legend}
    <span class="chart-key chart-key-note">trait plein = moyen · pointillé = rafales · A/I = direction AROMEIFS / ICONGFS · barres = pluie · voile = nébulosité</span>
    <span class="chart-key"><i class="band-8"></i>&gt; 8 nds</span>
    <span class="chart-key"><i class="band-15"></i>&gt; 15 nds</span>
  </div>`;

  return svg;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    CURVE_SETS,
    MODEL_COLORS,
    escapeHtml,
    modelColor,
    mapsUrl,
    parseValidAt,
    addDays,
    sliceHorizon,
    indexCurves,
    envelopeMean,
    hourlyWindLevels,
    buildChartSvg,
    niceMaxKt,
  };
}
