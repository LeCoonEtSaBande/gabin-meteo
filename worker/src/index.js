/**
 * Worker « gabin-meteo » : un seul appel renvoie les mesures du jour de toutes
 * les balises de `balises_specifications.csv` (MétéoSuisse en accès libre,
 * Météo-France via la clé DPObs gardée en secret du Worker).
 *
 * Appelé par l'onglet Balises de la carte, à la demande. Petit cache de bord
 * pour qu'une volée de visites ne multiplie pas les appels aux deux API.
 */

import {
  hourStampsForDay,
  isAllowedOrigin,
  mergePoints,
  meteoFranceHourUrl,
  meteoFranceLatestUrl,
  meteoSuisseUrl,
  parisDayKey,
  parseMeteoFrance,
  parseMeteoSuisse,
  parseSpecs,
  pointsForDayOrLast,
} from "./parse.js";

const DEFAULTS = {
  SPECS_URL:
    "https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/affichage-web/assets/balises_specs/balises_specifications.csv",
  ALLOWED_ORIGINS: "https://lecoonetsabande.github.io",
  CACHE_SECONDS: "180",
  SPECS_CACHE_SECONDS: "600",
  METEOFRANCE_BASE: "https://public-api.meteofrance.fr/public/DPObs/v2",
  METEOFRANCE_HOURS_BUDGET: "24",
};

const ERROR_CACHE_SECONDS = 30;
const FETCH_TIMEOUT_MS = 8000;
// Une heure révolue ne bouge plus : la journée déjà lue est gardée jusqu'au
// lendemain. Une heure encore vide est réessayée au bout de 5 min, un peu plus
// que le délai d'insertion de Météo-France (~2 min 30).
const HOURS_CACHE_SECONDS = 26 * 3600;
const MISS_RETRY_MS = 300000;

function setting(env, name) {
  const value = env[name];
  return value === undefined || value === "" ? DEFAULTS[name] : String(value);
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin");
  const allowed = setting(env, "ALLOWED_ORIGINS")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const headers = { Vary: "Origin" };
  if (isAllowedOrigin(origin, allowed)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Methods"] = "GET, OPTIONS";
    headers["Access-Control-Max-Age"] = "86400";
  }
  return headers;
}

function json(body, { status = 200, headers = {} } = {}) {
  return new Response(`${JSON.stringify(body, null, 2)}\n`, {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...headers },
  });
}

async function fetchText(url, init = {}) {
  const res = await fetch(url, { ...init, signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

/**
 * Mise en cache au mieux : une écriture compte dans le quota de sous-requêtes
 * de l'appel, donc elle peut être refusée. La réponse est déjà partie, on
 * n'échoue pas pour autant.
 */
function cachePut(key, response, ctx) {
  try {
    ctx.waitUntil(caches.default.put(key, response).catch(() => {}));
  } catch {
    // Quota dépassé dès l'appel : la prochaine lecture refera le travail.
  }
}

/**
 * Les fiches changent rarement : gardées quelques minutes, assez peu pour
 * qu'une balise ajoutée au CSV apparaisse sans attendre. La clé de cache est
 * celle du Worker, pas l'URL d'origine, qui est partagée avec le cache général.
 */
async function loadSpecs(request, env, ctx) {
  const key = new Request(new URL("/_specs", request.url).toString(), { method: "GET" });
  const cached = await caches.default.match(key);
  if (cached) return parseSpecs(await cached.text());
  // `cacheTtl: 0` : pas de second cache sous l'URL d'origine, celui du Worker suffit.
  const text = await fetchText(setting(env, "SPECS_URL"), { cf: { cacheTtl: 0 } });
  const store = new Response(text, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "cache-control": `public, s-maxage=${setting(env, "SPECS_CACHE_SECONDS")}`,
    },
  });
  cachePut(key, store, ctx);
  return parseSpecs(text);
}

function hoursCacheKey(request, day) {
  return new Request(new URL(`/_mf/${day}`, request.url).toString(), { method: "GET" });
}

/**
 * Heures françaises déjà connues de la journée : `{ id_station: { heure ISO:
 * point } }`. Une seule entrée de cache pour toutes les stations, parce qu'une
 * écriture de cache compte dans le quota de sous-requêtes du Worker.
 */
async function loadFrenchHours(request, day) {
  try {
    const hit = await caches.default.match(hoursCacheKey(request, day));
    if (hit) return await hit.json();
  } catch {
    // Cache de bord muet : on repart d'une journée vide, les heures se relisent.
  }
  return {};
}

function saveFrenchHours(request, day, known, ctx) {
  const store = new Response(JSON.stringify(known), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": `public, s-maxage=${HOURS_CACHE_SECONDS}`,
    },
  });
  cachePut(hoursCacheKey(request, day), store, ctx);
}

/**
 * Complète la courbe du jour d'une station française. DPObs ne renvoie qu'une
 * mesure par appel : on relit les heures pleines encore manquantes, du plus
 * récent au plus ancien. `budget` plafonne les appels de l'ensemble des stations
 * pour une requête ; le reste est rattrapé par les lectures suivantes.
 */
async function fillFrenchHours(station, { base, headers, day, now, budget, known }) {
  const hours = known[station.source_id] || (known[station.source_id] = {});
  for (const iso of hourStampsForDay(day, now).reverse()) {
    const seen = hours[iso];
    if (seen?.t) continue;
    if (seen && now - seen.miss < MISS_RETRY_MS) continue;
    if (budget.left <= 0) continue;
    budget.left -= 1;
    try {
      const url = meteoFranceHourUrl(station.source_id, iso, base);
      const [point] = parseMeteoFrance(await fetchText(url, { headers, cf: { cacheTtl: 0 } }));
      hours[iso] = point || { miss: now };
    } catch {
      // Un trou dans la courbe ne doit pas emporter la mesure du moment.
    }
  }
  return Object.values(hours).filter((item) => item.t);
}

async function readStation(station, env, shared) {
  if (station.source === "MeteoSuisse") {
    return parseMeteoSuisse(await fetchText(meteoSuisseUrl(station.source_id)));
  }
  const apikey = env.METEOFRANCE_API_KEY;
  if (!apikey) throw new Error("clé Météo-France absente du Worker");
  const headers = { apikey, accept: "*/*" };
  const base = setting(env, "METEOFRANCE_BASE");
  const latest = parseMeteoFrance(
    await fetchText(meteoFranceLatestUrl(station.source_id, base), { headers, cf: { cacheTtl: 0 } })
  );
  let hours = [];
  try {
    hours = await fillFrenchHours(station, { ...shared, base, headers });
  } catch {
    // Courbe incomplète plutôt que balise muette : la vignette, elle, tient.
  }
  // La mesure de 6 min passe après l'heure pleine qu'elle recouvre parfois.
  return mergePoints(hours, latest);
}

async function buildPayload(request, env, ctx) {
  const now = Date.now();
  const day = parisDayKey(now);
  const specs = await loadSpecs(request, env, ctx);
  const french = specs.some((station) => station.source === "MeteoFrance");
  const known = french ? await loadFrenchHours(request, day) : {};
  const asked = Number(setting(env, "METEOFRANCE_HOURS_BUDGET"));
  const budget = { left: asked };
  const shared = { day, now, budget, known };
  const results = await Promise.allSettled(
    specs.map((station) => readStation(station, env, shared))
  );
  if (french && budget.left < asked) saveFrenchHours(request, day, known, ctx);
  const stations = specs.map((station, i) => {
    const result = results[i];
    if (result.status !== "fulfilled") {
      return { ...station, status: "error", error: String(result.reason?.message || result.reason), points: [] };
    }
    const points = pointsForDayOrLast(result.value, day);
    return { ...station, status: "ok", points };
  });
  return {
    generated_at: new Date(now).toISOString().replace(/\.\d{3}Z$/, "Z"),
    day,
    unit: "kt",
    direction: "provenance",
    stations,
  };
}

async function handleBalises(request, env, ctx) {
  const key = new Request(new URL("/balises", request.url).toString(), { method: "GET" });
  const hit = await caches.default.match(key);
  if (hit) return { body: await hit.text(), cache: "HIT" };

  let payload;
  try {
    payload = await buildPayload(request, env, ctx);
  } catch (error) {
    payload = {
      generated_at: new Date().toISOString().replace(/\.\d{3}Z$/, "Z"),
      day: parisDayKey(Date.now()),
      unit: "kt",
      direction: "provenance",
      error: String(error?.message || error),
      stations: [],
    };
  }
  const healthy = payload.stations.some((station) => station.points.length);
  const ttl = healthy ? Number(setting(env, "CACHE_SECONDS")) : ERROR_CACHE_SECONDS;
  // Charge utile compacte : une journée de mesures de toutes les balises passe
  // par un réseau mobile à chaque ouverture de l'onglet.
  const body = JSON.stringify(payload);
  const store = new Response(body, {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": `public, s-maxage=${ttl}`,
    },
  });
  cachePut(key, store, ctx);
  return { body, cache: "MISS" };
}

export default {
  async fetch(request, env, ctx) {
    const cors = corsHeaders(request, env);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "GET") {
      return json({ error: "méthode non autorisée" }, { status: 405, headers: cors });
    }

    const { pathname } = new URL(request.url);
    if (pathname === "/balises") {
      const { body, cache } = await handleBalises(request, env, ctx);
      return new Response(body, {
        headers: {
          "content-type": "application/json; charset=utf-8",
          // Le navigateur revient toujours au Worker ; c'est le cache de bord
          // qui absorbe les appels rapprochés.
          "cache-control": "public, max-age=0, must-revalidate",
          "x-cache": cache,
          ...cors,
        },
      });
    }

    if (pathname === "/" || pathname === "/health") {
      return json(
        {
          service: "gabin-meteo",
          endpoint: "/balises",
          meteofrance_key: env.METEOFRANCE_API_KEY ? "présente" : "absente",
          meteofrance_base: setting(env, "METEOFRANCE_BASE"),
          specs: setting(env, "SPECS_URL"),
        },
        { headers: cors }
      );
    }

    return json({ error: "ressource inconnue" }, { status: 404, headers: cors });
  },
};
