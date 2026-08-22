/** Panneau détail de zone : specs, horizons, graphiques et liens. */

const ZONE_SPECS_URL = "assets/spots_specs/zones_specifications.csv";
const SPOT_SPECS_URL = "assets/spots_specs/spots_specifications.csv";
const AROME_URL = "data/processed/curves/AROMEIFS.csv";
const ICON_URL = "data/processed/curves/ICONGFS.csv";

const HORIZONS = [
  { days: 1, label: "Journée" },
  { days: 3, label: "3 jours" },
  { days: 5, label: "5 jours" },
];

const LINK_DEFS = [
  { key: "link_windguru", label: "Windguru" },
  { key: "link_webcam", label: "Webcam" },
  { key: "link_anemometer", label: "Anémo" },
];

let horizonDays = 1;
let zoneSpecs = [];
let spotSpecs = [];
let curveIndex = { AROMEIFS: {}, ICONGFS: {} };
let detailReady = false;
let detailError = "";
const showPrimaryBySpot = new Map();
const showSecondaryBySpot = new Map();

function zoneSpecName(zoneKey) {
  const row = zoneSpecs.find((z) => z.zone_key === zoneKey);
  return (row && row.display_name) || "";
}

function specsForZone(zoneKey) {
  return spotSpecs.filter((spot) => spot.zone_key === zoneKey);
}

function linkButton(href, label) {
  const url = (href || "").trim();
  if (!url) {
    return `<span class="link-btn is-disabled" aria-disabled="true">${escapeHtml(label)}</span>`;
  }
  return `<a class="link-btn" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
}

function mapsButton(spot) {
  const url = mapsUrl(spot.Latitude_mise_a_leau, spot.Longitude_mise_a_leau);
  if (!url) {
    return `<span class="link-btn is-disabled" aria-disabled="true">Carte</span>`;
  }
  return `<a class="link-btn" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">Carte</a>`;
}

function seriesForSpot(spotKey, startDay) {
  return {
    AROMEIFS: sliceHorizon(curveIndex.AROMEIFS[spotKey] || [], startDay, horizonDays),
    ICONGFS: sliceHorizon(curveIndex.ICONGFS[spotKey] || [], startDay, horizonDays),
  };
}

function chartOptions(spot) {
  const primarySet = primaryCurveSet(spot);
  const key = spot.spot_key;
  return {
    primarySet,
    showPrimary: showPrimaryBySpot.get(key) !== false,
    showSecondary: Boolean(showSecondaryBySpot.get(key)),
    secondarySet: secondaryCurveSet(primarySet),
    compactSetLabels: window.matchMedia("(min-width: 960px)").matches,
  };
}

function setToggleButton(spotKey, setName, shown) {
  const label = shown ? `Masquer ${setName}` : `Afficher ${setName}`;
  return `<button type="button" class="secondary-btn${shown ? " is-active" : ""}" data-toggle-set="${escapeHtml(spotKey)}" data-set="${escapeHtml(setName)}" aria-pressed="${shown ? "true" : "false"}">${label}</button>`;
}

function spotChartHtml(spot, startDay) {
  const series = seriesForSpot(spot.spot_key, startDay);
  const opts = chartOptions(spot);
  const sets = visibleSets(opts.primarySet, {
    showPrimary: opts.showPrimary,
    showSecondary: opts.showSecondary,
  });
  const visible = sets.map((name) => series[name]);
  return `<section class="spot-block" data-spot="${escapeHtml(spot.spot_key)}">
    <div class="spot-chart-head">
      <h3 class="spot-chart-title">${escapeHtml(spot.display_name)}</h3>
      <div class="spot-chart-toggles">
        ${setToggleButton(spot.spot_key, opts.primarySet, opts.showPrimary)}
        ${setToggleButton(spot.spot_key, opts.secondarySet, opts.showSecondary)}
      </div>
    </div>
    <div class="spot-chart" data-spot="${escapeHtml(spot.spot_key)}">${buildChartSvg(series, startDay, horizonDays, 400, opts)}</div>
    ${legendHtml(visible)}
  </section>`;
}

function spotInfoHtml(spot) {
  const req = spot.display_wind_requirements || "";
  const info = spot.display_spot_infos || "";
  const links = LINK_DEFS.map((def) => linkButton(spot[def.key], def.label)).join("");
  return `<section class="spot-info">
    <h3>${escapeHtml(spot.display_name)}</h3>
    <p class="spot-line">${escapeHtml(req) || "—"}</p>
    <p class="spot-line">${escapeHtml(info) || "—"}</p>
    <div class="spot-links">${links}${mapsButton(spot)}</div>
  </section>`;
}

async function loadDetailAssets() {
  try {
    const [zonesRes, spotsRes, aromeRes, iconRes] = await Promise.all([
      fetch(ZONE_SPECS_URL, { cache: "no-store" }),
      fetch(SPOT_SPECS_URL, { cache: "no-store" }),
      fetch(AROME_URL, { cache: "no-store" }),
      fetch(ICON_URL, { cache: "no-store" }),
    ]);
    if (!zonesRes.ok || !spotsRes.ok) throw new Error("Spécifications de spots introuvables");
    if (!aromeRes.ok || !iconRes.ok) throw new Error("Courbes AROMEIFS / ICONGFS introuvables");
    zoneSpecs = parseCsv(await zonesRes.text());
    spotSpecs = parseCsv(await spotsRes.text());
    const arome = indexCurves(parseCsv(await aromeRes.text()));
    const icon = indexCurves(parseCsv(await iconRes.text()));
    curveIndex = {
      AROMEIFS: arome.AROMEIFS || {},
      ICONGFS: icon.ICONGFS || {},
    };
    detailReady = true;
    detailError = "";
  } catch (error) {
    detailReady = false;
    detailError = error.message || String(error);
  }
}

function svgCursorPoint(svg, event) {
  const src = event.touches && event.touches[0] ? event.touches[0] : event;
  const pt = svg.createSVGPoint();
  pt.x = src.clientX;
  pt.y = src.clientY;
  const ctm = svg.getScreenCTM();
  if (!ctm) return null;
  return pt.matrixTransform(ctm.inverse());
}

function visibleSeriesPayload(payload) {
  const sets = visibleSets(payload.opts.primarySet, {
    showPrimary: payload.opts.showPrimary,
    showSecondary: payload.opts.showSecondary,
  });
  return sets.map((name) => ({ name, points: payload.series[name] || [] }));
}

function chartTipHtml(hit, nDays) {
  const point = hit.point;
  const rot = arrowRotation(point.dir);
  const hour = slotCaption(point.valid_at, nDays);
  return `<div class="chart-tip-hour">${escapeHtml(hour)}</div>
    <div class="chart-tip-wind">
      <svg class="chart-tip-arrow" viewBox="0 0 10 14" aria-hidden="true" style="transform:rotate(${rot}deg)">
        <path d="M5 0 L10 14 L5 10 L0 14 Z" fill="currentColor"></path>
      </svg>
      <span>${Math.round(point.mean)} nds</span>
      <span class="chart-tip-gust">raf. ${Math.round(point.gust)}</span>
    </div>
    <div class="chart-tip-model">${escapeHtml(SET_LABELS[hit.setName] || hit.setName)} · ${escapeHtml(point.source_model)}</div>`;
}

function placeChartTip(tip, event) {
  const src = event.touches && event.touches[0] ? event.touches[0] : event;
  const pad = 12;
  const w = tip.offsetWidth || 140;
  const h = tip.offsetHeight || 56;
  let x = src.clientX + pad;
  let y = src.clientY - h - 8;
  if (x + w > window.innerWidth - 8) x = src.clientX - w - pad;
  if (y < 8) y = src.clientY + pad;
  tip.style.left = `${Math.max(8, x)}px`;
  tip.style.top = `${Math.max(8, y)}px`;
}

function bindChartPointer(container, payload, options = {}) {
  const svg = container.querySelector(".spot-svg");
  if (!svg) return;
  let tip = container.querySelector(".chart-tip");
  if (!tip) {
    tip = document.createElement("div");
    tip.className = "chart-tip";
    tip.hidden = true;
    container.appendChild(tip);
  }
  const geom = JSON.parse(svg.getAttribute("data-geom") || "{}");
  const showTip = (event) => {
    const pt = svgCursorPoint(svg, event);
    if (!pt) return;
    const hit = pickNearestWind(visibleSeriesPayload(payload), payload.startDay, payload.nDays, geom, pt.x, pt.y);
    if (!hit) {
      tip.hidden = true;
      return;
    }
    tip.innerHTML = chartTipHtml(hit, payload.nDays);
    tip.hidden = false;
    placeChartTip(tip, event);
  };
  const hideTip = () => {
    tip.hidden = true;
  };
  svg.addEventListener("mousemove", showTip);
  svg.addEventListener("mouseleave", hideTip);
  svg.addEventListener("touchstart", showTip, { passive: true });
  svg.addEventListener("touchmove", showTip, { passive: true });
  svg.addEventListener("touchend", hideTip);
  if (options.fullscreen) {
    svg.style.cursor = "zoom-in";
    svg.addEventListener("click", (event) => {
      event.preventDefault();
      openChartLightbox(payload);
    });
  }
}

function closeChartLightbox() {
  const box = document.getElementById("chart-lightbox");
  if (!box) return;
  box.hidden = true;
  document.body.classList.remove("has-lightbox");
  const stage = document.getElementById("chart-lightbox-stage");
  if (stage) stage.innerHTML = "";
}

function openChartLightbox(payload) {
  const box = document.getElementById("chart-lightbox");
  const stage = document.getElementById("chart-lightbox-stage");
  if (!box || !stage) return;
  const svg = buildChartSvg(payload.series, payload.startDay, payload.nDays, 400, payload.opts);
  stage.innerHTML = `<h3 class="chart-lightbox-title">${escapeHtml(payload.title || "")}</h3>
    <div class="chart-lightbox-chart">${svg}</div>`;
  box.hidden = false;
  document.body.classList.add("has-lightbox");
  bindChartPointer(stage.querySelector(".chart-lightbox-chart"), payload, { fullscreen: false });
}

function bindLightboxOnce() {
  const box = document.getElementById("chart-lightbox");
  if (!box || box.dataset.bound) return;
  box.dataset.bound = "1";
  box.querySelector(".chart-lightbox-close").addEventListener("click", closeChartLightbox);
  box.addEventListener("click", (event) => {
    if (event.target === box) closeChartLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeChartLightbox();
  });
}

function renderZoneDetail({ selectedZone, dayKey, fallbackLabel }) {
  const empty = document.getElementById("detail-empty");
  const body = document.getElementById("detail-body");
  const title = document.getElementById("detail-title");
  const pane = document.getElementById("detail");
  const horizonStrip = document.getElementById("horizon-strip");
  const horizonBar = document.getElementById("horizon-bar");
  const desktop = window.matchMedia("(min-width: 960px)").matches;
  const scrollTop = body ? body.scrollTop : 0;

  if (!selectedZone) {
    title.textContent = "Zone";
    empty.hidden = false;
    body.hidden = true;
    if (horizonStrip) horizonStrip.hidden = true;
    pane.classList.toggle("is-open", false);
    return;
  }

  const spots = specsForZone(selectedZone);
  const zoneName = zoneSpecName(selectedZone) || fallbackLabel || selectedZone;
  title.textContent = zoneName;
  empty.hidden = true;
  body.hidden = false;
  pane.classList.add("is-open");

  if (!detailReady) {
    if (horizonStrip) horizonStrip.hidden = true;
    body.innerHTML = `<p class="detail-status">${escapeHtml(detailError || "Chargement des courbes…")}</p>`;
    return;
  }

  const horizon = HORIZONS.map(
    (h) =>
      `<button type="button" class="horizon-btn${h.days === horizonDays ? " is-active" : ""}" data-horizon="${h.days}">${h.label}</button>`
  ).join("");

  if (horizonBar) {
    horizonBar.innerHTML = horizon;
    if (horizonStrip) horizonStrip.hidden = false;
  }

  body.innerHTML = `
    ${horizonBar ? "" : `<div class="horizon-bar" role="tablist" aria-label="Horizon de prévision">${horizon}</div>`}
    <div class="charts">${spots.map((spot) => spotChartHtml(spot, dayKey)).join("")}</div>
    <div class="spot-infos">${spots.map((spot) => spotInfoHtml(spot)).join("")}</div>`;

  const horizonRoot = horizonBar || body;
  horizonRoot.querySelectorAll("[data-horizon]").forEach((btn) => {
    btn.addEventListener("click", () => {
      horizonDays = Number(btn.dataset.horizon) || 1;
      renderZoneDetail({ selectedZone, dayKey, fallbackLabel });
    });
  });
  body.querySelectorAll("[data-toggle-set]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.toggleSet;
      const setName = btn.dataset.set;
      const primary = primaryCurveSet(spotSpecs.find((spot) => spot.spot_key === key) || {});
      if (setName === primary) {
        const shown = showPrimaryBySpot.get(key) !== false;
        showPrimaryBySpot.set(key, !shown);
      } else {
        showSecondaryBySpot.set(key, !showSecondaryBySpot.get(key));
      }
      renderZoneDetail({ selectedZone, dayKey, fallbackLabel });
    });
  });

  body.querySelectorAll(".spot-chart").forEach((el) => {
    const key = el.dataset.spot;
    const spot = spots.find((item) => item.spot_key === key);
    if (!spot) return;
    const payload = {
      series: seriesForSpot(key, dayKey),
      startDay: dayKey,
      nDays: horizonDays,
      opts: chartOptions(spot),
      title: spot.display_name,
    };
    bindChartPointer(el, payload, { fullscreen: true });
  });

  body.scrollTop = scrollTop;
  if (!desktop) pane.classList.add("is-open");
  bindLightboxOnce();
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    HORIZONS,
    LINK_DEFS,
    linkButton,
    mapsButton,
    specsForZone,
    zoneSpecName,
  };
}
