/**
 * Worker « gabin-meteo » : un seul appel renvoie les mesures du jour de toutes
 * les balises de `balises_specifications.csv` (MétéoSuisse en accès libre,
 * Météo-France via la clé gardée en secret du Worker).
 *
 * Une balise = un appel à sa source, et la journée entière arrive d'un coup :
 * côté suisse le fichier du jour, côté français le paquet de 24 h au pas de
 * 6 min. Les mesures sont ensuite ramenées sur la grille de la fiche avant de
 * partir vers le navigateur.
 *
 * Appelé par l'onglet Balises de la carte, à la demande. Petit cache de bord
 * pour qu'une volée de visites ne multiplie pas les appels aux deux API.
 */

import {
  isAllowedOrigin,
  lastCsvRecord,
  mergePoints,
  meteoFrancePaquetUrl,
  meteoFranceLatestUrl,
  meteoSuisseUrl,
  onGrid,
  parisDayKey,
  parseMeteoFrance,
  parseMeteoSuisse,
  parseSpecs,
  pointsForDayOrLast,
  subscribedApis,
  subscribedApiDetails,
  subscriptionStatus,
  errorReason,
  keyExpiry,
  timeGrid,
} from "./parse.js";

const DEFAULTS = {
  SPECS_URL:
    "https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/affichage-web/assets/balises_specs/balises_specifications.csv",
  ALLOWED_ORIGINS: "https://lecoonetsabande.github.io",
  CACHE_SECONDS: "180",
  SPECS_CACHE_SECONDS: "600",
  METEOFRANCE_BASE: "https://public-api.meteofrance.fr/public/DPObs/v2",
  METEOFRANCE_PAQUET_BASE: "https://public-api.meteofrance.fr/public/DPPaquetObs/v2",
  COARSE_STEP_MIN: "30",
};

const ERROR_CACHE_SECONDS = 30;
const FETCH_TIMEOUT_MS = 8000;
const PAQUET_API = "DonneesPubliquesPaquetObservation";

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
  if (!res.ok) {
    // La passerelle Météo-France dit pourquoi elle refuse (abonnement, ressource,
    // quota) : sans ce motif, un 403 ne se diagnostique pas.
    const reason = errorReason(await res.text().catch(() => ""));
    throw new Error(`HTTP ${res.status}${reason ? ` (${reason})` : ""}`);
  }
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

/**
 * Journée d'une balise française : un appel au paquet de 24 h, décimé à la
 * volée sur la grille de la fiche, plus la mesure la plus récente du fichier
 * pour que la vignette ne traîne pas une demi-heure de retard.
 */
async function readFrance(station, env, shared) {
  const headers = { apikey: shared.apikey, accept: "*/*" };
  const grid = timeGrid(station, shared.day, shared.coarseStepMin);
  const url = meteoFrancePaquetUrl(station.source_id, setting(env, "METEOFRANCE_PAQUET_BASE"));
  const text = await fetchText(url, { headers, cf: { cacheTtl: 0 } });
  return mergePoints(
    parseMeteoFrance(text, (ms) => onGrid(ms, grid)),
    parseMeteoFrance(lastCsvRecord(text))
  );
}

/**
 * Repli quand le paquet n'est pas accessible : DPObs ne rend qu'une mesure par
 * appel, reconstituer la journée y coûtait des dizaines de sous-requêtes. On
 * garde la vignette vivante et on laisse la courbe vide plutôt que d'entretenir
 * cette mécanique pour une panne d'abonnement.
 */
async function readFranceLatest(station, env, shared) {
  const headers = { apikey: shared.apikey, accept: "*/*" };
  const url = meteoFranceLatestUrl(station.source_id, setting(env, "METEOFRANCE_BASE"));
  return parseMeteoFrance(await fetchText(url, { headers, cf: { cacheTtl: 0 } }));
}

async function readStation(station, env, shared) {
  if (station.source === "MeteoSuisse") {
    const grid = timeGrid(station, shared.day, shared.coarseStepMin);
    const text = await fetchText(meteoSuisseUrl(station.source_id));
    return mergePoints(
      parseMeteoSuisse(text, (ms) => onGrid(ms, grid)),
      parseMeteoSuisse(lastCsvRecord(text))
    );
  }
  if (!shared.apikey) throw new Error("clé Météo-France absente du Worker");
  try {
    return await readFrance(station, env, shared);
  } catch (error) {
    shared.degraded.push(`${station.station_key} : ${error?.message || error}`);
    return readFranceLatest(station, env, shared);
  }
}

async function buildPayload(request, env, ctx) {
  const now = Date.now();
  const day = parisDayKey(now);
  const specs = await loadSpecs(request, env, ctx);
  const shared = {
    day,
    apikey: env.METEOFRANCE_API_KEY || "",
    coarseStepMin: Number(setting(env, "COARSE_STEP_MIN")),
    degraded: [],
  };
  const results = await Promise.allSettled(
    specs.map((station) => readStation(station, env, shared))
  );
  const stations = specs.map((station, i) => {
    const result = results[i];
    if (result.status !== "fulfilled") {
      return { ...station, status: "error", error: String(result.reason?.message || result.reason), points: [] };
    }
    return { ...station, status: "ok", points: pointsForDayOrLast(result.value, day) };
  });
  return {
    generated_at: new Date(now).toISOString().replace(/\.\d{3}Z$/, "Z"),
    day,
    unit: "kt",
    direction: "provenance",
    step_min: shared.coarseStepMin,
    ...(shared.degraded.length ? { degraded: shared.degraded } : {}),
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
      const apis = subscribedApis(env.METEOFRANCE_API_KEY);
      const details = subscribedApiDetails(env.METEOFRANCE_API_KEY);
      return json(
        {
          service: "gabin-meteo",
          endpoint: "/balises",
          meteofrance_key: env.METEOFRANCE_API_KEY ? "présente" : "absente",
          // Les abonnements sont encodés dans la clé : la courbe française
          // reste vide tant que le paquet n'y est pas, et c'est ici qu'on le voit.
          meteofrance_paquet: subscriptionStatus(details, PAQUET_API, setting(env, "METEOFRANCE_PAQUET_BASE")),
          meteofrance_apis: apis,
          meteofrance_abonnements: details,
          meteofrance_expire: keyExpiry(env.METEOFRANCE_API_KEY),
          meteofrance_base: setting(env, "METEOFRANCE_BASE"),
          meteofrance_paquet_base: setting(env, "METEOFRANCE_PAQUET_BASE"),
          step_min: Number(setting(env, "COARSE_STEP_MIN")),
          specs: setting(env, "SPECS_URL"),
        },
        { headers: cors }
      );
    }

    return json({ error: "ressource inconnue" }, { status: 404, headers: cors });
  },
};
