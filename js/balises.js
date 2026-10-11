/**
 * Onglet Balises temps réel : un seul appel au Worker « gabin-meteo » au moment
 * de l'ouverture, qui renvoie les mesures du jour de toutes les balises (suisses
 * et françaises) déjà converties en nœuds. Vignettes sur la carte, courbe du jour
 * avec la prévision du spot le plus proche en trait fin. Aucun appel réseau tant
 * que l'onglet n'est pas ouvert, pas de rafraîchissement automatique.
 */

const BUOY_SPECS_URL = "assets/balises_specs/balises_specifications.csv";
const BUOY_API_URL = "https://gabin-meteo.garinlu-subs.workers.dev/balises";
const BUOY_REFETCH_MIN = 10;
const BUOY_STALE_MIN = 30;
const BUOY_SOURCE_LABELS = { MeteoSuisse: "MétéoSuisse", MeteoFrance: "Météo-France" };
const CARDINALS_FR = [
  "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
  "S", "SSO", "SO", "OSO", "O", "ONO", "NO", "NNO",
];

let buoySpecs = [];
let buoyData = {};
let buoyFetchedAt = 0;
let buoyLoading = null;
let buoyError = "";
let buoyProjection = null;
let selectedBuoy = null;
let buoyClock = null;
const BUOY_CURVES = ["MESURE", "AROMEIFS", "ICONGFS"];
const BUOY_CURVE_LABELS = { MESURE: "Mesure", AROMEIFS: "AROME", ICONGFS: "ICON" };
const buoyCurves = new Map();

const PARIS_PARTS = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Paris",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

/** Horodatage UTC → `AAAA-MM-JJTHH:MM` en heure de Paris, comme les courbes de prévision. */
function parisValidAt(ms) {
  const parts = Object.fromEntries(
    PARIS_PARTS.formatToParts(new Date(ms)).map((part) => [part.type, part.value])
  );
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
}

/* `Number(null)` vaut 0 : une direction absente deviendrait plein Nord. */
function finiteOrNaN(raw) {
  if (raw === null || raw === undefined || raw === "") return NaN;
  const value = Number(raw);
  return Number.isFinite(value) ? value : NaN;
}

/** Un point du Worker (nœuds, horodatage UTC) au format des courbes. */
function buoyPoint(raw) {
  const ms = Date.parse(raw?.t);
  const mean = finiteOrNaN(raw?.mean_kt);
  if (!Number.isFinite(ms) || Number.isNaN(mean)) return null;
  const gust = finiteOrNaN(raw.gust_kt);
  return {
    ms,
    valid_at: parisValidAt(ms),
    source_model: "MESURE",
    mean,
    gust: Number.isNaN(gust) ? mean : gust,
    dir: finiteOrNaN(raw.dir_deg),
  };
}

/** Réponse du Worker → une entrée par balise, mesures triées, dernière à part. */
function parseBuoyPayload(payload) {
  const out = {};
  for (const station of payload?.stations || []) {
    if (!station?.station_key) continue;
    const points = (station.points || []).map(buoyPoint).filter(Boolean);
    points.sort((a, b) => a.ms - b.ms);
    out[station.station_key] = {
      points,
      last: points[points.length - 1] || null,
      error: station.status === "ok" ? "" : station.error || "indisponible",
    };
  }
  return out;
}

function cardinalFr(deg) {
  const value = Number(deg);
  if (!Number.isFinite(value)) return "";
  return CARDINALS_FR[Math.round((((value % 360) + 360) % 360) / 22.5) % 16];
}

function solve3(m, v) {
  const a = m.map((row, i) => [...row, v[i]]);
  for (let col = 0; col < 3; col += 1) {
    let pivot = col;
    for (let r = col + 1; r < 3; r += 1) {
      if (Math.abs(a[r][col]) > Math.abs(a[pivot][col])) pivot = r;
    }
    if (Math.abs(a[pivot][col]) < 1e-12) return null;
    [a[col], a[pivot]] = [a[pivot], a[col]];
    for (let r = 0; r < 3; r += 1) {
      if (r === col) continue;
      const f = a[r][col] / a[col][col];
      for (let c = col; c < 4; c += 1) a[r][c] -= f * a[col][c];
    }
  }
  return a.map((row, i) => row[3] / row[i]);
}

/** Moindres carrés x, y = a·lon + b·lat + c, calés sur les marqueurs des spots. */
function fitAffine(pairs) {
  const usable = (pairs || []).filter(
    (p) => [p.lat, p.lon, p.x, p.y].every((v) => Number.isFinite(v))
  );
  if (usable.length < 3) return null;
  const m = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const vx = [0, 0, 0];
  const vy = [0, 0, 0];
  for (const p of usable) {
    const row = [p.lon, p.lat, 1];
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) m[i][j] += row[i] * row[j];
      vx[i] += row[i] * p.x;
      vy[i] += row[i] * p.y;
    }
  }
  const cx = solve3(m, vx);
  const cy = solve3(m, vy);
  if (!cx || !cy) return null;
  return { cx, cy };
}

function projectLatLon(fit, lat, lon) {
  return {
    x: fit.cx[0] * lon + fit.cx[1] * lat + fit.cx[2],
    y: fit.cy[0] * lon + fit.cy[1] * lat + fit.cy[2],
  };
}

function distanceKm(lat1, lon1, lat2, lon2) {
  const rad = Math.PI / 180;
  const dLat = (lat2 - lat1) * rad;
  const dLon = (lon2 - lon1) * rad;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

function nearestSpot(station, spots) {
  const lat = Number(station.latitude);
  const lon = Number(station.longitude);
  let best = null;
  for (const spot of spots || []) {
    const km = distanceKm(lat, lon, Number(spot.Latitude_mise_a_leau), Number(spot.Longitude_mise_a_leau));
    if (!Number.isFinite(km)) continue;
    if (!best || km < best.km) best = { spot, km };
  }
  return best;
}

/** Pics du jour entre startH et endH, au format des jours de `creneaux.json`. */
function observedPeaks(points, dayKey, startH, endH) {
  let meanPeak = null;
  let gustPeak = null;
  for (const point of points || []) {
    const p = parseValidAt(point.valid_at);
    if (p.dayKey !== dayKey || p.hour < startH || p.hour >= endH) continue;
    if (!meanPeak || point.mean > meanPeak.mean) meanPeak = point;
    if (!gustPeak || point.gust > gustPeak.gust) gustPeak = point;
  }
  if (!meanPeak || !gustPeak) return null;
  return {
    mean_max_at: meanPeak.valid_at,
    mean_max_kt: Math.round(meanPeak.mean),
    gust_max_at: gustPeak.valid_at,
    gust_max_kt: Math.round(gustPeak.gust),
  };
}

function hourLabel(validAt) {
  const p = parseValidAt(validAt);
  return `${String(p.hour).padStart(2, "0")}h${String(p.minute || 0).padStart(2, "0")}`;
}

function ageMinutes(ms, now = Date.now()) {
  return Math.max(0, Math.round((now - ms) / 60000));
}

function ageLabel(ms, now = Date.now()) {
  const min = ageMinutes(ms, now);
  if (min < 60) return `il y a ${min} min`;
  const h = Math.floor(min / 60);
  return `il y a ${h} h`;
}

/** Repère en bordure : point ramené dans la carte et flèche vers la vraie position. */
function clampToBox(pt, box, margin) {
  const x = Math.min(box.x + box.width - margin, Math.max(box.x + margin, pt.x));
  const y = Math.min(box.y + box.height - margin, Math.max(box.y + margin, pt.y));
  let edge = "";
  if (pt.y > y) edge = "↓";
  else if (pt.y < y) edge = "↑";
  else if (pt.x > x) edge = "→";
  else if (pt.x < x) edge = "←";
  return { x, y, edge };
}

async function loadBuoySpecs() {
  if (buoySpecs.length) return buoySpecs;
  const res = await fetch(BUOY_SPECS_URL, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Fiches balises introuvables (${res.status})`);
  buoySpecs = parseCsv(await res.text()).filter((row) => row.station_key);
  return buoySpecs;
}

/** Un seul appel pour toutes les balises ; le Worker tient la clé Météo-France. */
async function fetchBuoyPayload() {
  const res = await fetch(BUOY_API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`Relais balises : HTTP ${res.status}`);
  return parseBuoyPayload(await res.json());
}

function fetchBuoys() {
  if (buoyLoading) return buoyLoading;
  buoyLoading = (async () => {
    try {
      const specs = await loadBuoySpecs();
      const measured = await fetchBuoyPayload();
      const next = {};
      for (const station of specs) {
        next[station.station_key] = measured[station.station_key] || {
          points: [],
          last: null,
          error: "indisponible",
        };
      }
      buoyData = next;
      buoyFetchedAt = Date.now();
      buoyError = Object.values(next).every((item) => !item.last) ? "Mesures indisponibles" : "";
    } catch (error) {
      buoyError = error.message || String(error);
    } finally {
      buoyLoading = null;
    }
    if (viewMode !== "buoys") return;
    renderBuoys();
    renderBuoyChrome();
    if (selectedBuoy) renderBuoyDetail();
  })();
  renderBuoyChrome();
  return buoyLoading;
}

function buoysNeedFetch() {
  return !buoyFetchedAt || Date.now() - buoyFetchedAt > BUOY_REFETCH_MIN * 60000;
}

function buildBuoyProjection() {
  if (!svgRoot || !spotSpecs.length) return null;
  const pairs = [];
  for (const group of svgRoot.querySelectorAll('[data-layer^="S_"]')) {
    const key = layerName(group).slice(2).toLowerCase();
    const spot = spotSpecs.find((item) => String(item.spot_key).toLowerCase() === key);
    const circle = group.querySelector('[data-layer="Marqueur"] circle');
    if (!spot || !circle) continue;
    pairs.push({
      lat: Number(spot.Latitude_mise_a_leau),
      lon: Number(spot.Longitude_mise_a_leau),
      x: Number(circle.getAttribute("cx")),
      y: Number(circle.getAttribute("cy")),
    });
  }
  return fitAffine(pairs);
}

function latestBuoyMs() {
  const stamps = Object.values(buoyData)
    .map((item) => item.last?.ms)
    .filter((ms) => Number.isFinite(ms));
  return stamps.length ? Math.max(...stamps) : null;
}

function renderBuoyChrome() {
  if (viewMode !== "buoys") return;
  document.getElementById("day-label").textContent = formatDayLabel(todayKey());
  const maj = document.getElementById("maj-label");
  const latest = latestBuoyMs();
  if (buoyLoading) maj.textContent = "Lecture des balises…";
  else if (buoyError) maj.textContent = buoyError;
  else if (latest) maj.textContent = `Mesures ${hourLabel(parisValidAt(latest))} · ${ageLabel(latest)}`;
  else maj.textContent = "";
  const refresh = document.getElementById("buoys-refresh");
  if (refresh) refresh.classList.toggle("is-loading", Boolean(buoyLoading));
}

function buoyChipHtml(station, item, edge) {
  const last = item?.last;
  const stale = !last || ageMinutes(last.ms) > BUOY_STALE_MIN;
  const muted = "var(--muted)";
  const meanCol = last && !stale ? windColor(last.mean) : muted;
  const gustCol = last && !stale ? gustColor(last.gust) : muted;
  const name = `${escapeHtml(station.short_name || station.display_name)}${edge ? ` <span class="buoy-edge">${edge}</span>` : ""}`;
  if (!last) {
    return `<div class="chip-name">${name}</div>
      <div class="chip-row"><span class="chip-mean" style="color:${muted}">—</span></div>
      <div class="chip-meta"><span>indisponible</span></div>`;
  }
  const dir = Number.isFinite(last.dir) ? arrowSvg(last.dir, meanCol) : "";
  return `<div class="chip-name">${name}</div>
    <div class="chip-row">
      <span class="chip-mean" style="color:${meanCol}">${Math.round(last.mean)}</span>
      <span class="chip-gust" style="color:${gustCol}">${Math.round(last.gust)}</span>
      ${dir}
      <span class="chip-card">${cardinalFr(last.dir)}</span>
    </div>
    <div class="chip-meta"><span>${hourLabel(last.valid_at)}</span><span>${ageLabel(last.ms)}</span></div>`;
}

function drawBuoyLinks(host, anchors) {
  const svg = host.querySelector(".buoy-links");
  if (!svg) return;
  const hostBox = host.getBoundingClientRect();
  let out = "";
  for (const { key, x, y } of anchors) {
    const chip = host.querySelector(`.chip[data-buoy="${key}"]`);
    if (!chip) continue;
    const r = chip.getBoundingClientRect();
    const cx = Math.min(r.right, Math.max(r.left, x + hostBox.left)) - hostBox.left;
    const cy = Math.min(r.bottom, Math.max(r.top, y + hostBox.top)) - hostBox.top;
    out += `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${cx.toFixed(1)}" y2="${cy.toFixed(1)}"></line>`;
    out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4"></circle>`;
  }
  svg.innerHTML = out;
}

/* Écarte horizontalement une vignette qui recouvre le point d'une balise. */
function clearBuoyDots(host, anchors, sides) {
  const hostBox = host.getBoundingClientRect();
  const gap = 8;
  let moved = false;
  for (const { key } of anchors) {
    const chip = host.querySelector(`.chip[data-buoy="${key}"]`);
    if (!chip) continue;
    for (const dot of anchors) {
      const r = chip.getBoundingClientRect();
      const x = dot.x + hostBox.left;
      const y = dot.y + hostBox.top;
      if (x < r.left - gap || x > r.right + gap || y < r.top - gap || y > r.bottom + gap) continue;
      const dx = sides[key] < 0 ? x - gap - r.right : x + gap - r.left;
      chip.style.left = `${parseFloat(chip.style.left) + dx}px`;
      moved = true;
    }
  }
  return moved;
}

function layoutBuoyChips(host, anchors) {
  const paneW = host.getBoundingClientRect().width;
  const sides = {};
  for (const { key, x, y } of anchors) {
    const chip = host.querySelector(`.chip[data-buoy="${key}"]`);
    if (!chip) continue;
    sides[key] = x > paneW / 2 ? -1 : 1;
    chip.style.left = `${x + sides[key] * (chip.offsetWidth / 2 + 12)}px`;
    chip.style.top = `${y}px`;
  }
  for (let pass = 0; pass < 3; pass += 1) {
    clampChips(host);
    resolveChipCollisions(host, true);
    clampChips(host);
    if (!clearBuoyDots(host, anchors, sides)) break;
  }
  drawBuoyLinks(host, anchors);
}

function renderBuoys() {
  const host = document.getElementById("buoys");
  if (!host) return;
  host.hidden = viewMode !== "buoys";
  if (viewMode !== "buoys" || !svgRoot) return;
  if (!buoyProjection) buoyProjection = buildBuoyProjection();
  host.innerHTML = `<svg class="buoy-links" aria-hidden="true"></svg>`;
  if (!buoyProjection || !buoySpecs.length) return;

  const view = svgRoot.viewBox.baseVal;
  const anchors = [];
  for (const station of buoySpecs) {
    const raw = projectLatLon(buoyProjection, Number(station.latitude), Number(station.longitude));
    const pt = clampToBox(raw, view, 14);
    const pane = svgToPane(pt.x, pt.y);
    anchors.push({ key: station.station_key, x: pane.x, y: pane.y });
    const btn = document.createElement("button");
    btn.type = "button";
    const last = buoyData[station.station_key]?.last;
    const stale = !last || ageMinutes(last.ms) > BUOY_STALE_MIN;
    btn.className = `chip buoy-chip${stale ? " is-stale" : ""}${selectedBuoy === station.station_key ? " is-selected" : ""}`;
    btn.dataset.buoy = station.station_key;
    btn.style.left = `${pane.x}px`;
    btn.style.top = `${pane.y}px`;
    btn.innerHTML = buoyChipHtml(station, buoyData[station.station_key], pt.edge);
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openBuoy(station.station_key);
    });
    host.appendChild(btn);
  }
  requestAnimationFrame(() => layoutBuoyChips(host, anchors));
}

function defaultBuoyCurves(primary) {
  return { MESURE: true, AROMEIFS: primary === "AROMEIFS", ICONGFS: primary === "ICONGFS" };
}

/* Au moins une courbe reste affichée : masquer la dernière rallume la mesure,
 * ou le modèle par défaut du spot si c'est la mesure qu'on vient de masquer. */
function toggleBuoyCurveState(state, name, primary, available) {
  const next = { ...state, [name]: !state[name] };
  if (available.some((key) => next[key])) return next;
  const models = available.filter((key) => key !== "MESURE");
  const fallback = name !== "MESURE" ? "MESURE" : models.includes(primary) ? primary : models[0];
  next[fallback || name] = true;
  return next;
}

function buoyCurveState(stationKey, primary) {
  if (!buoyCurves.has(stationKey)) buoyCurves.set(stationKey, defaultBuoyCurves(primary));
  return buoyCurves.get(stationKey);
}

function buoyChartPayload(station, item, dayKey) {
  const points = (item?.points || []).filter((point) => point.valid_at.startsWith(dayKey));
  const near = nearestSpot(station, spotSpecs);
  const primary = near ? primaryCurveSet(near.spot) : null;
  const models = near
    ? [primary, secondaryCurveSet(primary)]
        .map((name) => ({ name, points: sliceHorizon(curveIndex[name]?.[near.spot.spot_key] || [], dayKey, 1) }))
        .filter((model) => model.points.length)
    : [];
  const available = ["MESURE", ...models.map((model) => model.name)];
  const state = buoyCurveState(station.station_key, primary);
  const shownModels = models.filter((model) => state[model.name]);
  const showMeasure = state.MESURE || !shownModels.length;
  const measured = { name: "MESURE", points };
  const shown = { MESURE: showMeasure };
  for (const model of models) shown[model.name] = shownModels.includes(model);
  const common = {
    hideWeather: true,
    nowAt: parisValidAt(Date.now()),
    compactSetLabels: window.matchMedia("(min-width: 960px)").matches,
  };
  let opts;
  if (showMeasure) {
    const peaks = observedPeaks(points, dayKey, SLOT_WINDOW_START_H, SLOT_WINDOW_END_H);
    opts = {
      ...common,
      seriesList: [measured],
      // Le modèle par défaut est peint en dernier, donc au-dessus de l'autre.
      overlays: shownModels.slice().reverse(),
      halo: shownModels.length > 0,
      tipSeries: [measured, ...shownModels],
      chartDays: { MESURE: peaks ? { [dayKey]: peaks } : {} },
    };
  } else {
    opts = {
      ...common,
      seriesList: shownModels,
      tipSeries: shownModels,
      chartDays: Object.fromEntries(
        shownModels.map((model) => [model.name, chartDaysBySet[model.name]?.[near.spot.spot_key] || {}])
      ),
    };
  }
  return {
    series: {},
    startDay: dayKey,
    nDays: 1,
    opts,
    title: station.display_name,
    near,
    primary,
    available,
    shown,
  };
}

function buoyToggleButton(name, shown) {
  return `<button type="button" class="secondary-btn${shown ? " is-active" : ""}" data-buoy-toggle="${name}" aria-pressed="${shown ? "true" : "false"}">${shown ? "Masquer" : "Afficher"} ${BUOY_CURVE_LABELS[name]}</button>`;
}

function toggleBuoyCurve(stationKey, name, payload) {
  buoyCurves.set(stationKey, toggleBuoyCurveState(payload.shown, name, payload.primary, payload.available));
}

function buoyLegendHtml(station, payload) {
  const source = BUOY_SOURCE_LABELS[station.source] || station.source;
  const measure = payload.shown.MESURE
    ? `<span class="chart-key"><i style="background:${SET_COLORS.MESURE}"></i>Mesuré · ${escapeHtml(source)}</span>`
    : "";
  const forecasts = BUOY_CURVES.filter((name) => name !== "MESURE" && payload.shown[name])
    .map(
      (name) =>
        `<span class="chart-key chart-key-forecast"><i style="background:${SET_COLORS[name]}"></i>Prévision ${BUOY_CURVE_LABELS[name]} · ${escapeHtml(payload.near.spot.display_name)}</span>`
    )
    .join("");
  return `<div class="chart-legend">
    ${measure}
    ${forecasts}
    <span class="chart-key chart-key-note">plein = vent moyen · pointillé = rafales · zone colorée = vent moyen &gt; 10 nds</span>
  </div>`;
}

function buoyInfoHtml(station, item, payload) {
  const last = item?.last;
  const source = BUOY_SOURCE_LABELS[station.source] || station.source;
  const lastLine = last
    ? `Dernière mesure ${hourLabel(last.valid_at)} (${ageLabel(last.ms)}) : ${Math.round(last.mean)} nds, rafales ${Math.round(last.gust)} nds, provenance ${cardinalFr(last.dir)} (${Math.round(last.dir)}°).`
    : `Pas de mesure disponible${item?.error ? ` (${escapeHtml(item.error)})` : ""}.`;
  const near = payload.near
    ? `Spot rattaché : ${escapeHtml(payload.near.spot.display_name)}, à ${Math.round(payload.near.km)} km.`
    : "";
  const stationLink = linkButton(station.link_station, source);
  const maps = mapsUrl(station.latitude, station.longitude);
  return `<section class="spot-info">
    <h3>${escapeHtml(station.display_name)} · ${escapeHtml(station.elevation_m)} m</h3>
    <p class="spot-line">${lastLine}</p>
    <p class="spot-line">${near}</p>
    <div class="spot-links">${stationLink}${maps ? linkButton(maps, "Carte") : ""}</div>
  </section>`;
}

function renderBuoyDetail() {
  const empty = document.getElementById("detail-empty");
  const body = document.getElementById("detail-body");
  const title = document.getElementById("detail-title");
  const pane = document.getElementById("detail");
  const horizonStrip = document.getElementById("horizon-strip");
  if (horizonStrip) horizonStrip.hidden = true;
  const station = buoySpecs.find((row) => row.station_key === selectedBuoy);
  if (!station) {
    title.textContent = "Balise";
    empty.textContent = "Choisissez une balise sur la carte.";
    empty.hidden = false;
    body.hidden = true;
    pane.classList.remove("is-open");
    return;
  }
  const item = buoyData[station.station_key];
  const dayKey = todayKey();
  const payload = buoyChartPayload(station, item, dayKey);
  title.textContent = station.display_name;
  empty.hidden = true;
  body.hidden = false;
  const toggles =
    payload.available.length > 1
      ? `<div class="spot-chart-toggles">${BUOY_CURVES.filter((name) => payload.available.includes(name))
          .map((name) => buoyToggleButton(name, payload.shown[name]))
          .join("")}</div>`
      : "";
  body.innerHTML = `<section class="spot-block">
      <div class="spot-chart-head is-buoy"><h3 class="spot-chart-title">Aujourd'hui</h3>${toggles}</div>
      <div class="spot-chart">${buildChartSvg(payload.series, dayKey, 1, 400, payload.opts)}</div>
      ${buoyLegendHtml(station, payload)}
    </section>
    ${buoyInfoHtml(station, item, payload)}`;
  body.querySelectorAll("[data-buoy-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleBuoyCurve(station.station_key, btn.dataset.buoyToggle, payload);
      renderBuoyDetail();
    });
  });
  bindChartPointer(body.querySelector(".spot-chart"), payload, { fullscreen: true });
  bindLightboxOnce();
  pane.classList.add("is-open");
}

function openBuoy(key) {
  selectedBuoy = key;
  renderBuoys();
  renderBuoyDetail();
}

function closeBuoy() {
  selectedBuoy = null;
  renderBuoys();
  renderBuoyDetail();
}

function tickBuoyClock() {
  if (viewMode !== "buoys" || document.visibilityState !== "visible") return;
  renderBuoyChrome();
  const host = document.getElementById("buoys");
  if (!host) return;
  for (const station of buoySpecs) {
    const chip = host.querySelector(`.chip[data-buoy="${station.station_key}"] .chip-meta span:last-child`);
    const last = buoyData[station.station_key]?.last;
    if (chip && last) chip.textContent = ageLabel(last.ms);
  }
}

function showBuoys() {
  selectedBuoy = null;
  renderBuoyDetail();
  renderBuoys();
  renderBuoyChrome();
  if (buoysNeedFetch()) fetchBuoys();
  if (!buoyClock) buoyClock = setInterval(tickBuoyClock, 60000);
}

function hideBuoys() {
  selectedBuoy = null;
  const host = document.getElementById("buoys");
  if (host) host.hidden = true;
  const empty = document.getElementById("detail-empty");
  if (empty) empty.textContent = "Choisissez une zone d'intérêt sur la carte.";
  if (buoyClock) {
    clearInterval(buoyClock);
    buoyClock = null;
  }
}

function bindBuoysUi() {
  const refresh = document.getElementById("buoys-refresh");
  if (refresh) refresh.addEventListener("click", () => fetchBuoys());
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && viewMode === "buoys" && buoysNeedFetch()) {
      fetchBuoys();
    }
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    BUOY_API_URL,
    parisValidAt,
    buoyPoint,
    parseBuoyPayload,
    cardinalFr,
    fitAffine,
    projectLatLon,
    distanceKm,
    nearestSpot,
    observedPeaks,
    hourLabel,
    ageLabel,
    clampToBox,
    defaultBuoyCurves,
    toggleBuoyCurveState,
  };
}
