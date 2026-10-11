/**
 * Le gestionnaire de requêtes tourné hors Cloudflare : `fetch` et `caches.default`
 * sont remplacés par des doublures, ce qui laisse vérifier le routage, le CORS,
 * le cache de bord et la dégradation station par station.
 */
import test from "node:test";
import assert from "node:assert/strict";

import worker from "../src/index.js";

const SPECS_URL = "https://exemple.test/balises.csv";

const SPECS_CSV = [
  "station_key;display_name;short_name;source;source_id;latitude;longitude;elevation_m;link_station",
  "geneve_cointrin;Genève / Cointrin;Genève;MeteoSuisse;GVE;46.24;6.12;411;https://x",
  "chambery_aix;Chambéry-Aix;Chambéry;MeteoFrance;73329001;45.63;5.88;235;https://x",
].join("\n");

/* Jour de Paris, celui que renvoie le Worker : après 22 h UTC il a déjà tourné. */
const nowIso = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

function swissCsvToday() {
  const [y, m, d] = nowIso().split("-");
  return [
    "station_abbr;reference_timestamp;dkl010z0;fu3010z0;fu3010z1",
    `GVE;${d}.${m}.${y} 12:00;298;18.52;37.04`,
  ].join("\n");
}

function frenchCsvToday() {
  return [
    "geo_id_insee;validity_time;dd;ff;dxi10;fxi10",
    `73329001;${nowIso()}T12:06:00Z;210;5.144;230;7.716`,
  ].join("\n");
}

function stub({ french = frenchCsvToday(), frenchStatus = 200 } = {}) {
  const calls = [];
  const store = new Map();
  globalThis.caches = {
    default: {
      async match(request) {
        const hit = store.get(request.url);
        return hit ? hit.clone() : undefined;
      },
      async put(request, response) {
        store.set(request.url, response.clone());
      },
    },
  };
  globalThis.fetch = async (url, init) => {
    calls.push({ url: String(url), headers: init?.headers || {} });
    if (String(url) === SPECS_URL) return new Response(SPECS_CSV, { status: 200 });
    if (String(url).includes("meteoschweiz")) return new Response(swissCsvToday(), { status: 200 });
    if (String(url).includes("meteofrance")) {
      return new Response(frenchStatus === 200 ? french : "", { status: frenchStatus });
    }
    return new Response("", { status: 404 });
  };
  return { calls, store };
}

const ENV = { SPECS_URL, METEOFRANCE_API_KEY: "clé-de-test" };
const CTX = { waitUntil: (promise) => promise };

const SITE = "https://lecoonetsabande.github.io";

function get(path, { origin } = {}) {
  const headers = origin ? { Origin: origin } : {};
  return worker.fetch(new Request(`https://gabin-meteo.test${path}`, { headers }), ENV, CTX);
}

test("/balises renvoie les deux sources en nœuds dans un seul appel", async () => {
  const { calls } = stub();
  const res = await get("/balises", { origin: SITE });
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("x-cache"), "MISS");
  const body = await res.json();
  assert.equal(body.unit, "kt");
  assert.equal(body.direction, "provenance");
  assert.equal(body.day, nowIso());
  assert.deepEqual(
    body.stations.map((s) => [s.station_key, s.status, s.points.length]),
    [
      ["geneve_cointrin", "ok", 1],
      ["chambery_aix", "ok", 1],
    ]
  );
  assert.deepEqual(body.stations[0].points[0], {
    t: `${nowIso()}T12:00:00Z`,
    mean_kt: 10,
    gust_kt: 20,
    dir_deg: 298,
  });
  assert.deepEqual(body.stations[1].points[0], {
    t: `${nowIso()}T12:06:00Z`,
    mean_kt: 10,
    gust_kt: 15,
    dir_deg: 210,
  });
  // Fiches + une lecture par station, rien de plus.
  assert.equal(calls.length, 3);
  const mf = calls.find((call) => call.url.includes("meteofrance"));
  assert.equal(mf.headers.apikey, "clé-de-test");
  assert.match(mf.url, /paquet\/infrahoraire-6m\?id_station=73329001&format=csv$/);
});

test("deuxième appel servi par le cache de bord, sans toucher aux API", async () => {
  const { calls } = stub();
  await get("/balises", { origin: SITE });
  const before = calls.length;
  const res = await get("/balises", { origin: SITE });
  assert.equal(res.headers.get("x-cache"), "HIT");
  assert.equal(calls.length, before);
  assert.equal((await res.json()).stations.length, 2);
});

test("une station en panne n'emporte pas les autres", async () => {
  stub({ frenchStatus: 500 });
  const body = await (await get("/balises", { origin: SITE })).json();
  assert.equal(body.stations[0].status, "ok");
  assert.equal(body.stations[1].status, "error");
  assert.equal(body.stations[1].error, "HTTP 500");
  assert.deepEqual(body.stations[1].points, []);
});

test("sans clé Météo-France, les balises françaises le disent", async () => {
  stub();
  const res = await worker.fetch(
    new Request("https://gabin-meteo.test/balises", { headers: { Origin: SITE } }),
    { SPECS_URL },
    CTX
  );
  const body = await res.json();
  assert.equal(body.stations[1].status, "error");
  assert.match(body.stations[1].error, /clé Météo-France absente/);
});

test("CORS : en-tête renvoyé au site et à localhost, pas ailleurs", async () => {
  stub();
  const site = await get("/balises", { origin: SITE });
  assert.equal(site.headers.get("access-control-allow-origin"), SITE);
  assert.equal(site.headers.get("vary"), "Origin");

  const local = await get("/balises", { origin: "http://localhost:8080" });
  assert.equal(local.headers.get("access-control-allow-origin"), "http://localhost:8080");

  const other = await get("/balises", { origin: "https://ailleurs.example" });
  assert.equal(other.headers.get("access-control-allow-origin"), null);
});

test("préflight OPTIONS accepté pour le site", async () => {
  stub();
  const res = await worker.fetch(
    new Request("https://gabin-meteo.test/balises", {
      method: "OPTIONS",
      headers: { Origin: SITE },
    }),
    ENV,
    CTX
  );
  assert.equal(res.status, 204);
  assert.equal(res.headers.get("access-control-allow-methods"), "GET, OPTIONS");
});

test("écriture refusée, chemin inconnu en 404, /health sans secret", async () => {
  stub();
  const post = await worker.fetch(
    new Request("https://gabin-meteo.test/balises", { method: "POST" }),
    ENV,
    CTX
  );
  assert.equal(post.status, 405);
  assert.equal((await get("/autre")).status, 404);
  const health = await (await get("/health")).json();
  assert.equal(health.meteofrance_key, "présente");
  assert.equal(JSON.stringify(health).includes("clé-de-test"), false);
});
