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

const TEMP_STOPS = [
  [-5, [255, 255, 255]],
  [0, [76, 155, 232]],
  [10, [29, 111, 191]],
  [15, [245, 208, 0]],
  [25, [240, 136, 0]],
  [35, [224, 32, 32]],
  [40, [200, 74, 212]],
];

const WIND_STOPS = [
  [0, [255, 255, 255]],
  [10, [255, 255, 255]],
  [12, [60, 176, 67]],
  [15, [245, 208, 0]],
  [20, [240, 136, 0]],
  [25, [196, 90, 0]],
  [30, [224, 32, 32]],
  [40, [224, 80, 144]],
];

const PLACEHOLDER = {
  mean: "00",
  gust: "00",
  temp: "00°C",
  slot: "(00h -00h)",
  color: "#e6e6e6",
};

let svgRoot = null;
let dataset = null;
let dayKeys = [];
let dayIndex = 0;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpRgb(a, b, t) {
  return [
    Math.round(lerp(a[0], b[0], t)),
    Math.round(lerp(a[1], b[1], t)),
    Math.round(lerp(a[2], b[2], t)),
  ];
}

function rgbCss(rgb) {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function colorFromStops(value, stops) {
  const minV = stops[0][0];
  const maxV = stops[stops.length - 1][0];
  const v = Math.min(maxV, Math.max(minV, value));
  for (let i = 1; i < stops.length; i += 1) {
    const [x1, c1] = stops[i - 1];
    const [x2, c2] = stops[i];
    if (v <= x2) {
      const t = x2 === x1 ? 0 : (v - x1) / (x2 - x1);
      return rgbCss(lerpRgb(c1, c2, t));
    }
  }
  return rgbCss(stops[stops.length - 1][1]);
}

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

function findLayer(root, name) {
  return root.querySelector(`[data-layer="${name}"]`);
}

function setTspanText(textEl, value) {
  if (!textEl) return;
  const tspan = textEl.querySelector("tspan") || textEl;
  tspan.textContent = value;
  tspan.removeAttribute("textLength");
  tspan.removeAttribute("lengthAdjust");
}

function setFill(el, color) {
  if (!el) return;
  el.setAttribute("fill", color);
}

function status(message) {
  const el = document.getElementById("status");
  if (el) el.textContent = message;
}

function spotGroups(root) {
  return [...root.querySelectorAll("[data-layer]")].filter((el) =>
    layerName(el).startsWith("S_")
  );
}

function iconHref(key) {
  const file = ICON_FILES[key] || ICON_FILES.couvert;
  return `${ICON_DIR}/${file}`;
}

function ensureWeatherIcon(tendance) {
  let image = tendance.querySelector("image.weather-icon");
  if (image) return image;
  const neb = findLayer(tendance, "Nebulosite");
  const box = neb ? neb.getBBox() : { x: 0, y: 0, width: 28.75, height: 28.75 };
  image = document.createElementNS("http://www.w3.org/2000/svg", "image");
  image.classList.add("weather-icon");
  image.setAttribute("x", String(box.x));
  image.setAttribute("y", String(box.y));
  image.setAttribute("width", String(box.width));
  image.setAttribute("height", String(box.height));
  image.setAttribute("preserveAspectRatio", "xMidYMid meet");
  tendance.appendChild(image);
  return image;
}

function resetSpot(tendance) {
  setTspanText(findLayer(tendance, "Moyenne Max"), PLACEHOLDER.mean);
  setTspanText(findLayer(tendance, "Rafales Max"), PLACEHOLDER.gust);
  setTspanText(findLayer(tendance, "Temperature 15h"), PLACEHOLDER.temp);
  setTspanText(findLayer(tendance, "(00h -00h)"), PLACEHOLDER.slot);
  setFill(findLayer(tendance, "Moyenne Max"), PLACEHOLDER.color);
  setFill(findLayer(tendance, "Rafales Max"), PLACEHOLDER.color);
  setFill(findLayer(tendance, "Temperature 15h"), PLACEHOLDER.color);
  setFill(findLayer(tendance, "Nds"), PLACEHOLDER.color);
  setFill(findLayer(tendance, "(00h -00h)"), PLACEHOLDER.color);
  setFill(findLayer(tendance, "Direction Vent Moy Max"), PLACEHOLDER.color);
  const arrow = findLayer(tendance, "Direction Vent Moy Max");
  if (arrow) arrow.removeAttribute("transform");
  const icon = tendance.querySelector("image.weather-icon");
  if (icon) icon.setAttribute("opacity", "0");
}

function applySpot(tendance, day) {
  const meanColor = colorFromStops(day.mean_max_kt, WIND_STOPS);
  const gustColor = colorFromStops(day.gust_at_mean_max_kt, WIND_STOPS);
  const tempColor =
    day.temp_15h_c == null ? PLACEHOLDER.color : colorFromStops(day.temp_15h_c, TEMP_STOPS);

  setTspanText(findLayer(tendance, "Moyenne Max"), String(day.mean_max_kt));
  setTspanText(findLayer(tendance, "Rafales Max"), String(day.gust_at_mean_max_kt));
  setTspanText(
    findLayer(tendance, "Temperature 15h"),
    day.temp_15h_c == null ? PLACEHOLDER.temp : `${day.temp_15h_c}°C`
  );
  setTspanText(findLayer(tendance, "(00h -00h)"), day.slot_label || "");

  setFill(findLayer(tendance, "Moyenne Max"), meanColor);
  setFill(findLayer(tendance, "Rafales Max"), gustColor);
  setFill(findLayer(tendance, "Temperature 15h"), tempColor);
  setFill(findLayer(tendance, "Nds"), meanColor);
  setFill(findLayer(tendance, "(00h -00h)"), meanColor);

  const arrow = findLayer(tendance, "Direction Vent Moy Max");
  if (arrow) {
    setFill(arrow, meanColor);
    const box = arrow.getBBox();
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;
    arrow.setAttribute("transform", `rotate(${day.wind_dir_deg} ${cx} ${cy})`);
  }

  const icon = ensureWeatherIcon(tendance);
  icon.setAttributeNS("http://www.w3.org/1999/xlink", "href", iconHref(day.weather_icon));
  icon.setAttribute("href", iconHref(day.weather_icon));
  icon.setAttribute("opacity", "1");
}

function dailyPanel() {
  return svgRoot.querySelector("#PANNEAU_QUOTIDIEN") || svgRoot;
}

function renderDay() {
  if (!svgRoot || !dataset) return;
  const panel = dailyPanel();
  const iso = dayKeys[dayIndex];
  const dateText = findLayer(panel, "Jour_de_prevision");
  if (dateText) setTspanText(findLayer(dateText, "Txt") || dateText, formatDayLabel(iso));

  const maj = findLayer(panel, "Heure_MAJ");
  if (maj && dataset.last_update_label) {
    setTspanText(maj, dataset.last_update_label.replace(" ", " - "));
  }

  for (const group of spotGroups(panel)) {
    const tendance = findLayer(group, "Tendance_journaliere");
    if (!tendance) continue;
    const spotKey = layerName(group).slice(2);
    const day = dataset.spots[spotKey]?.days?.[iso];
    if (day) applySpot(tendance, day);
    else resetSpot(tendance);
  }

  const prev = findLayer(panel, "Bouton_J-1");
  const next = findLayer(panel, "Bouton_J+1");
  if (prev) prev.classList.toggle("is-disabled", dayIndex <= 0);
  if (next) next.classList.toggle("is-disabled", dayIndex >= dayKeys.length - 1);
}

function bindNav() {
  const panel = dailyPanel();
  const prev = findLayer(panel, "Bouton_J-1");
  const next = findLayer(panel, "Bouton_J+1");
  for (const [el, delta] of [
    [prev, -1],
    [next, 1],
  ]) {
    if (!el) continue;
    el.classList.add("day-nav");
    el.style.cursor = "pointer";
    el.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const target = dayIndex + delta;
      if (target < 0 || target >= dayKeys.length) return;
      dayIndex = target;
      renderDay();
    });
  }
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
  const app = document.getElementById("app");
  try {
    const [mapRes, data] = await Promise.all([fetch(MAP_URL), loadDataset()]);
    if (!mapRes.ok) throw new Error(`Carte SVG introuvable (${mapRes.status})`);
    const svgText = await mapRes.text();
    dataset = data;
    const parsed = new DOMParser().parseFromString(svgText, "image/svg+xml");
    if (parsed.querySelector("parsererror")) throw new Error("SVG illisible");
    svgRoot = document.importNode(parsed.documentElement, true);
    svgRoot.setAttribute("width", "100%");
    svgRoot.setAttribute("preserveAspectRatio", "xMidYMin meet");
    tagLayers(svgRoot);
    app.innerHTML = "";
    app.appendChild(svgRoot);
    dayKeys = usableDays(dataset);
    if (!dayKeys.length) throw new Error("Aucun jour disponible à partir d'aujourd'hui");
    const today = todayKey();
    dayIndex = Math.max(0, dayKeys.indexOf(today));
    bindNav();
    renderDay();
    const statusEl = document.getElementById("status");
    if (statusEl) statusEl.remove();
  } catch (error) {
    status(error.message || String(error));
  }
}

boot();
