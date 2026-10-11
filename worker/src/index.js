/**
 * Worker « gabin-meteo » : un seul appel renvoie les mesures du jour de toutes
 * les balises de `balises_specifications.csv` (MétéoSuisse en accès libre,
 * Météo-France via la clé DPPaquetObs gardée en secret du Worker).
 *
 * Appelé par l'onglet Balises de la carte, à la demande. Petit cache de bord
 * pour qu'une volée de visites ne multiplie pas les appels aux deux API.
 */

import {
  isAllowedOrigin,
  meteoFranceUrl,
  meteoSuisseUrl,
  parisDayKey,
  parseMeteoFrance,
  parseMeteoSuisse,
  parseSpecs,
  pointsForDay,
} from "./parse.js";

const DEFAULTS = {
  SPECS_URL:
    "https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/affichage-web/assets/balises_specs/balises_specifications.csv",
  ALLOWED_ORIGINS: "https://lecoonetsabande.github.io",
  CACHE_SECONDS: "180",
  SPECS_CACHE_SECONDS: "3600",
  METEOFRANCE_BASE: "https://public-api.meteofrance.fr/public/DPPaquetObs/v1",
};

const ERROR_CACHE_SECONDS = 30;
const FETCH_TIMEOUT_MS = 8000;

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

/** Les fiches changent rarement : une lecture par heure suffit. */
async function loadSpecs(env, ctx) {
  const url = setting(env, "SPECS_URL");
  const key = new Request(url, { method: "GET" });
  const cached = await caches.default.match(key);
  if (cached) return parseSpecs(await cached.text());
  const text = await fetchText(url);
  const store = new Response(text, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "cache-control": `public, s-maxage=${setting(env, "SPECS_CACHE_SECONDS")}`,
    },
  });
  ctx.waitUntil(caches.default.put(key, store));
  return parseSpecs(text);
}

async function readStation(station, env) {
  if (station.source === "MeteoSuisse") {
    return parseMeteoSuisse(await fetchText(meteoSuisseUrl(station.source_id)));
  }
  const apikey = env.METEOFRANCE_API_KEY;
  if (!apikey) throw new Error("clé Météo-France absente du Worker");
  const url = meteoFranceUrl(station.source_id, setting(env, "METEOFRANCE_BASE"));
  return parseMeteoFrance(await fetchText(url, { headers: { apikey, accept: "*/*" } }));
}

async function buildPayload(env, ctx) {
  const now = Date.now();
  const day = parisDayKey(now);
  const specs = await loadSpecs(env, ctx);
  const results = await Promise.allSettled(specs.map((station) => readStation(station, env)));
  const stations = specs.map((station, i) => {
    const result = results[i];
    if (result.status !== "fulfilled") {
      return { ...station, status: "error", error: String(result.reason?.message || result.reason), points: [] };
    }
    const points = pointsForDay(result.value, day);
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
    payload = await buildPayload(env, ctx);
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
  ctx.waitUntil(caches.default.put(key, store));
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
          specs: setting(env, "SPECS_URL"),
        },
        { headers: cors }
      );
    }

    return json({ error: "ressource inconnue" }, { status: 404, headers: cors });
  },
};
