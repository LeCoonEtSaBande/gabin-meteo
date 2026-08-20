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
  return {
    primarySet,
    showSecondary: Boolean(showSecondaryBySpot.get(spot.spot_key)),
    secondarySet: secondaryCurveSet(primarySet),
    compactSetLabels: window.matchMedia("(min-width: 960px)").matches,
  };
}

function spotChartHtml(spot, startDay) {
  const series = seriesForSpot(spot.spot_key, startDay);
  const opts = chartOptions(spot);
  const secondary = opts.secondarySet;
  const shown = opts.showSecondary;
  const btnLabel = shown ? `Masquer ${secondary}` : `Afficher ${secondary}`;
  const visible = shown ? [series.AROMEIFS, series.ICONGFS] : [series[opts.primarySet]];
  return `<section class="spot-block" data-spot="${escapeHtml(spot.spot_key)}">
    <div class="spot-chart-head">
      <h3 class="spot-chart-title">${escapeHtml(spot.display_name)}</h3>
      <button type="button" class="secondary-btn${shown ? " is-active" : ""}" data-toggle-secondary="${escapeHtml(spot.spot_key)}">${btnLabel}</button>
    </div>
    <div class="spot-chart">${buildChartSvg(series, startDay, horizonDays, 400, opts)}</div>
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

function renderZoneDetail({ selectedZone, dayKey, fallbackLabel }) {
  const empty = document.getElementById("detail-empty");
  const body = document.getElementById("detail-body");
  const title = document.getElementById("detail-title");
  const pane = document.getElementById("detail");
  const desktop = window.matchMedia("(min-width: 960px)").matches;
  const scrollTop = body ? body.scrollTop : 0;

  if (!selectedZone) {
    title.textContent = "Zone";
    empty.hidden = false;
    body.hidden = true;
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
    body.innerHTML = `<p class="detail-status">${escapeHtml(detailError || "Chargement des courbes…")}</p>`;
    return;
  }

  const names = spots.map((s) => s.display_name).join(" · ") || "Aucun spot";
  const horizon = HORIZONS.map(
    (h) =>
      `<button type="button" class="horizon-btn${h.days === horizonDays ? " is-active" : ""}" data-horizon="${h.days}">${h.label}</button>`
  ).join("");

  body.innerHTML = `
    <p class="zone-spots">${escapeHtml(names)}</p>
    <div class="horizon-bar" role="tablist" aria-label="Horizon de prévision">${horizon}</div>
    <div class="charts">${spots.map((spot) => spotChartHtml(spot, dayKey)).join("")}</div>
    <div class="spot-infos">${spots.map((spot) => spotInfoHtml(spot)).join("")}</div>`;

  body.querySelectorAll("[data-horizon]").forEach((btn) => {
    btn.addEventListener("click", () => {
      horizonDays = Number(btn.dataset.horizon) || 1;
      renderZoneDetail({ selectedZone, dayKey, fallbackLabel });
    });
  });
  body.querySelectorAll("[data-toggle-secondary]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.toggleSecondary;
      showSecondaryBySpot.set(key, !showSecondaryBySpot.get(key));
      renderZoneDetail({ selectedZone, dayKey, fallbackLabel });
    });
  });

  body.scrollTop = scrollTop;
  if (!desktop) pane.classList.add("is-open");
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
