const DATA_URL = "data/processed/quotidien.json";
const META_URL = "data/processed/last_update.json";
const MAP_URL = "assets/svg_map/Carte%20RA%20804x1200.svg";
const CACHE_KEY = "gabin-quotidien";
const UPDATE_KEY = "gabin-last-update";
const ICON_DIR = "assets/meteocons";
const LAYER_ATTR = "vectornator:layerName";
const PARIS_TZ = "Europe/Paris";

const JOURS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const MOIS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

const ICON_FILES = {
  soleil: "icon-soleil.svg",
  "soleil-couvert": "icon-soleil-couvert.svg",
  couvert: "icon-couvert.svg",
  pluie: "icon-pluie.svg",
  orage: "icon-orage.svg",
};

const MODEL_SHORT = {
  AROMEHD: "AROHD",
  ARPEGE: "ARPEG",
  ICONCH1: "ICO1",
  ICONCH2: "ICO2",
  ICON13KM: "ICO13",
  IFS: "IFS",
  GFS: "GFS",
};

const ZONE_LABELS = {
  leman_grand_lac: "Léman Grand Lac",
  leman_petit_lac: "Léman Petit Lac",
  annecy: "Annecy",
  bourget: "Bourget",
  laffrey: "Laffrey",
  monteynard: "Monteynard",
  valence: "Valence",
  st_alban_du_rhone: "St-Alban",
  chasse_sur_rhone: "Chasse",
  saone: "Saône",
  grand_large: "Grand Large",
};

const PRIMARY_SPOT = {
  leman_grand_lac: "messery",
  leman_petit_lac: "vengeron",
  annecy: "plage_de_sevrier",
  bourget: "cap_des_seselets",
  laffrey: "parking_pre_rencontre",
  monteynard: "treffort",
  valence: "portes_les_valence",
  st_alban_du_rhone: "st_alban_du_rhone",
  chasse_sur_rhone: "loire_sur_rhone",
  saone: "pont_darciat",
  grand_large: "wwmeyzieu",
};

/* Centre de puce en coordonnées SVG, calé au cas par cas. */
const CHIP_POS = {
  leman_grand_lac: { x: 748, y: 188 },
  leman_petit_lac: { x: 575, y: 268 },
  annecy: { x: 748, y: 498 },
  bourget: { x: 478, y: 598 },
  grand_large: { x: 188, y: 498 },
  saone: { x: 198, y: 268 },
  chasse_sur_rhone: { x: 52, y: 658 },
  st_alban_du_rhone: { x: 188, y: 798 },
  valence: { x: 58, y: 1038 },
  laffrey: { x: 588, y: 958 },
  monteynard: { x: 368, y: 1048 },
};

let svgRoot = null;
let dataset = null;
let dayKeys = [];
let dayIndex = 0;
let viewMode = "daily";
let selectedZone = null;

function todayKey(timeZone = PARIS_TZ) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function formatDayLabel(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day));
  const weekday = JOURS[(utc.getUTCDay() + 6) % 7];
  return `${weekday} ${day} ${MOIS[month - 1]} ${year}`;
}

function layerName(el) {
  return el.getAttribute(LAYER_ATTR) || el.getAttribute("data-layer") || "";
}

function tagLayers(root) {
  for (const el of root.querySelectorAll("*")) {
    const name = el.getAttribute(LAYER_ATTR);
    if (name) el.setAttribute("data-layer", name);
  }
}

function zoneKeyFromLayer(name) {
  if (!name.startsWith("Z_")) return "";
  return name.slice(2).toLowerCase();
}

function modelLabel(key) {
  if (!key) return "";
  return MODEL_SHORT[key] || String(key).slice(0, 5);
}

function iconHref(key) {
  const file = ICON_FILES[key] || ICON_FILES.couvert;
  return `${ICON_DIR}/${file}`;
}

function status(message) {
  const el = document.getElementById("status");
  if (el) el.textContent = message;
}

function spotsOfZone(zoneKey) {
  return Object.entries(dataset.spots)
    .filter(([, spot]) => spot.zone_key === zoneKey)
    .map(([key, spot]) => ({ key, ...spot }));
}

function svgToPane(x, y) {
  const pane = document.getElementById("map-pane").getBoundingClientRect();
  const pt = svgRoot.createSVGPoint();
  pt.x = x;
  pt.y = y;
  const ctm = svgRoot.getScreenCTM();
  if (!ctm) return { x: 0, y: 0 };
  const sp = pt.matrixTransform(ctm);
  return { x: sp.x - pane.left, y: sp.y - pane.top };
}

function arrowSvg(deg, color) {
  return `<svg class="chip-dir" viewBox="0 0 10 14" aria-hidden="true" style="transform:rotate(${deg}deg)">
    <path d="M5 0 L10 14 L5 10 L0 14 Z" fill="${color}"></path>
  </svg>`;
}

function renderChips() {
  const host = document.getElementById("chips");
  if (!host || !svgRoot || !dataset) return;
  const iso = dayKeys[dayIndex];
  host.innerHTML = "";
  if (viewMode !== "daily") return;

  for (const [zoneKey, pos] of Object.entries(CHIP_POS)) {
    const spotKey = PRIMARY_SPOT[zoneKey];
    const day = dataset.spots[spotKey]?.days?.[iso];
    const usable = isUsableSession(day);
    const pt = svgToPane(pos.x, pos.y);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `chip${usable ? "" : " is-muted"}${selectedZone === zoneKey ? " is-selected" : ""}`;
    btn.dataset.zone = zoneKey;
    btn.style.left = `${pt.x}px`;
    btn.style.top = `${pt.y}px`;

    const mean = usable ? String(day.mean_max_kt) : "—";
    const gust = usable ? String(day.gust_at_mean_max_kt) : "";
    const meanCol = usable ? windColor(day.mean_max_kt) : "var(--muted)";
    const gustCol = usable ? gustColor(day.gust_at_mean_max_kt) : "var(--muted)";
    const temp = day?.temp_15h_c == null ? "" : `${day.temp_15h_c}°`;
    const tCol = day?.temp_15h_c == null ? "var(--muted)" : tempColor(day.temp_15h_c);
    const slot = usable ? day.slot_label || "" : "";
    const model = usable ? modelLabel(day.source_model_at_max) : "";
    const dir = usable ? arrowSvg(day.wind_dir_deg, meanCol) : "";
    const wx = day?.weather_icon
      ? `<img class="chip-wx" alt="" src="${iconHref(day.weather_icon)}">`
      : "";

    btn.innerHTML = `
      <div class="chip-name">${ZONE_LABELS[zoneKey] || zoneKey}</div>
      <div class="chip-row">
        <span class="chip-mean" style="color:${meanCol}">${mean}</span>
        ${gust ? `<span class="chip-gust" style="color:${gustCol}">${gust}</span>` : ""}
        <span class="chip-unit">nds</span>
        ${dir}
        ${wx}
        <span class="chip-temp" style="color:${tCol}">${temp}</span>
      </div>
      <div class="chip-meta">
        <span>${slot}</span>
        <span>${model}</span>
      </div>`;
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openZone(zoneKey);
    });
    host.appendChild(btn);
  }
}

function renderDayChrome() {
  const iso = dayKeys[dayIndex];
  document.getElementById("day-label").textContent = formatDayLabel(iso);
  const maj = document.getElementById("maj-label");
  maj.textContent = dataset.last_update_label
    ? `MAJ ${dataset.last_update_label.replace(" ", " · ")}`
    : "";
  document.getElementById("prev-day").classList.toggle("is-disabled", dayIndex <= 0);
  document.getElementById("next-day").classList.toggle("is-disabled", dayIndex >= dayKeys.length - 1);
}

function renderDetail() {
  const empty = document.getElementById("detail-empty");
  const body = document.getElementById("detail-body");
  const title = document.getElementById("detail-title");
  const pane = document.getElementById("detail");
  const desktop = window.matchMedia("(min-width: 960px)").matches;

  if (!selectedZone) {
    title.textContent = "Zone";
    empty.hidden = false;
    body.hidden = true;
    pane.classList.toggle("is-open", false);
    return;
  }

  const spots = spotsOfZone(selectedZone);
  const iso = dayKeys[dayIndex];
  title.textContent = ZONE_LABELS[selectedZone] || selectedZone;
  empty.hidden = true;
  body.hidden = false;
  pane.classList.add("is-open");
  body.innerHTML = spots
    .map((spot) => {
      const day = spot.days?.[iso];
      const usable = isUsableSession(day);
      const mean = usable ? `${day.mean_max_kt} nds` : "—";
      const gust = usable ? `${day.gust_at_mean_max_kt} nds` : "—";
      const slot = usable ? day.slot_label : "pas de créneau exploitable";
      const temp = day?.temp_15h_c == null ? "—" : `${day.temp_15h_c} °C`;
      return `<article class="spot-card">
        <h3>${spot.display_name}</h3>
        <div class="spot-grid">
          <span>Vent moyen</span><span style="color:${usable ? windColor(day.mean_max_kt) : "var(--muted)"}">${mean}</span>
          <span>Rafales</span><span style="color:${usable ? gustColor(day.gust_at_mean_max_kt) : "var(--muted)"}">${gust}</span>
          <span>Créneau</span><span>${slot}</span>
          <span>Temp. 15 h</span><span style="color:${day?.temp_15h_c == null ? "var(--muted)" : tempColor(day.temp_15h_c)}">${temp}</span>
          <span>Modèle</span><span>${usable ? modelLabel(day.source_model_at_max) : "—"}</span>
        </div>
        <div class="chart-slot">Graphique des courbes — à brancher</div>
      </article>`;
    })
    .join("");
  if (!desktop) pane.classList.add("is-open");
}

function openZone(zoneKey) {
  selectedZone = zoneKey;
  renderChips();
  renderDetail();
}

function closeZone() {
  selectedZone = null;
  renderChips();
  renderDetail();
}

function setMode(mode) {
  viewMode = mode;
  document.getElementById("mode-daily").classList.toggle("is-active", mode === "daily");
  document.getElementById("mode-buoys").classList.toggle("is-active", mode === "buoys");
  document.getElementById("soon").hidden = mode !== "buoys";
  document.getElementById("chips").hidden = mode !== "daily";
  if (mode === "buoys") closeZone();
  else renderChips();
}

function renderAll() {
  renderDayChrome();
  renderChips();
  renderDetail();
}

function bindUi() {
  document.getElementById("prev-day").addEventListener("click", () => {
    if (dayIndex <= 0) return;
    dayIndex -= 1;
    renderAll();
  });
  document.getElementById("next-day").addEventListener("click", () => {
    if (dayIndex >= dayKeys.length - 1) return;
    dayIndex += 1;
    renderAll();
  });
  document.getElementById("mode-daily").addEventListener("click", () => setMode("daily"));
  document.getElementById("mode-buoys").addEventListener("click", () => setMode("buoys"));
  document.getElementById("detail-back").addEventListener("click", () => closeZone());

  for (const zone of svgRoot.querySelectorAll('[data-layer^="Z_"]')) {
    const key = zoneKeyFromLayer(layerName(zone));
    const hit = zone.querySelector('[data-layer="Zone_clic_zoom"]') || zone;
    hit.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (viewMode !== "daily") return;
      openZone(key);
    });
  }

  window.addEventListener("resize", () => renderChips());
}

function usableDays(data) {
  const today = todayKey();
  return (data.days || []).filter((day) => day >= today);
}

async function loadDataset() {
  let remoteStamp = null;
  try {
    const metaRes = await fetch(META_URL, { cache: "no-store" });
    if (metaRes.ok) {
      const meta = await metaRes.json();
      remoteStamp = meta.last_update_at || null;
    }
  } catch {
    remoteStamp = null;
  }

  const previous = localStorage.getItem(UPDATE_KEY);
  if (remoteStamp && previous === remoteStamp) {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {
        localStorage.removeItem(CACHE_KEY);
      }
    }
  }

  const dataRes = await fetch(DATA_URL, { cache: "no-store" });
  if (!dataRes.ok) throw new Error(`Données introuvables (${dataRes.status})`);
  const data = await dataRes.json();
  const stamp = data.last_update_at || remoteStamp || "";
  try {
    localStorage.setItem(UPDATE_KEY, stamp);
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // Quota téléphone : on affiche quand même le JSON frais.
  }
  return data;
}

async function boot() {
  try {
    const [mapRes, data] = await Promise.all([fetch(MAP_URL), loadDataset()]);
    if (!mapRes.ok) throw new Error(`Carte SVG introuvable (${mapRes.status})`);
    const svgText = await mapRes.text();
    dataset = data;
    const parsed = new DOMParser().parseFromString(svgText, "image/svg+xml");
    if (parsed.querySelector("parsererror")) throw new Error("SVG illisible");
    svgRoot = document.importNode(parsed.documentElement, true);
    svgRoot.setAttribute("width", "100%");
    svgRoot.setAttribute("height", "100%");
    svgRoot.setAttribute("preserveAspectRatio", "xMidYMid meet");
    tagLayers(svgRoot);
    const map = document.getElementById("map");
    map.innerHTML = "";
    map.appendChild(svgRoot);
    const statusEl = document.getElementById("status");
    if (statusEl) statusEl.remove();
    dayKeys = usableDays(dataset);
    if (!dayKeys.length) throw new Error("Aucun jour disponible à partir d'aujourd'hui");
    const today = todayKey();
    dayIndex = Math.max(0, dayKeys.indexOf(today));
    bindUi();
    setMode("daily");
    renderAll();
  } catch (error) {
    status(error.message || String(error));
  }
}

boot();
