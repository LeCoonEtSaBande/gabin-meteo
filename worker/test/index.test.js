/**
 * Le gestionnaire de requêtes tourné hors Cloudflare : `fetch` et `caches.default`
 * sont remplacés par des doublures, ce qui laisse vérifier le routage, le CORS,
 * le cache de bord, la décimation et la dégradation station par station.
 */
import test from "node:test";
import assert from "node:assert/strict";

import worker from "../src/index.js";

const SPECS_URL = "https://exemple.test/balises.csv";

const SPECS_CSV = [
  "station_key;display_name;short_name;source;source_id;latitude;longitude;elevation_m;link_station;pas_fin_min;pas_fin_debut_h;pas_fin_fin_h",
  "geneve_cointrin;Genève / Cointrin;Genève;MeteoSuisse;GVE;46.24;6.12;411;https://x;;;",
  "chambery_aix;Chambéry-Aix;Chambéry;MeteoFrance;73329001;45.63;5.88;235;https://x;;;",
  "reventin;Reventin;Reventin;MeteoFrance;38336001;45.47;4.81;295;https://x;6;11;19",
].join("\n");

/* Jour de Paris, celui que renvoie le Worker : après 22 h UTC il a déjà tourné. */
const nowIso = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

/** Décalage de Paris sur UTC ce jour-là, en heures : 2 l'été, 1 l'hiver. */
function parisOffsetHours() {
  const noonUtc = Date.parse(`${nowIso()}T12:00:00Z`);
  const parisHour = Number(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      hourCycle: "h23",
    }).format(new Date(noonUtc))
  );
  return parisHour - 12;
}

const pad = (value) => String(value).padStart(2, "0");

/** Journée UTC complète au pas de 10 min, comme le fichier du jour de MétéoSuisse. */
function swissDayCsv() {
  const lines = ["station_abbr;reference_timestamp;dkl010z0;fu3010z0;fu3010z1"];
  const [y, m, d] = nowIso().split("-");
  for (let minute = 0; minute < 24 * 60; minute += 10) {
    lines.push(
      `GVE;${d}.${m}.${y} ${pad(Math.floor(minute / 60))}:${pad(minute % 60)};298;18.52;37.04`
    );
  }
  return lines.join("\n");
}

/**
 * Paquet de 24 h au pas de 6 min : toute la journée de Paris, donc les heures
 * UTC décalées d'autant. Le vent code l'horodatage, pour repérer d'où vient
 * chaque point gardé.
 */
function frenchPaquetCsv(sourceId) {
  const lines = ["geo_id_insee;validity_time;dd;ff;ddraf10;raf10"];
  const offset = parisOffsetHours();
  for (let minute = 0; minute < 24 * 60; minute += 6) {
    const stamp = Date.parse(`${nowIso()}T00:00:00Z`) + (minute - offset * 60) * 60000;
    const iso = new Date(stamp).toISOString().replace(/\.\d{3}Z$/, "Z");
    lines.push(`${sourceId};${iso};210;5.144;230;7.716`);
  }
  return lines.join("\n");
}

/* Dernière mesure 6 min de DPObs : un seul enregistrement, hors grille. */
function frenchLatestCsv(sourceId) {
  return [
    "geo_id_insee;validity_time;dd;ff;ddraf10;raf10",
    `${sourceId};${nowIso()}T12:06:00Z;210;5.144;230;7.716`,
  ].join("\n");
}

/**
 * `subrequests` reproduit le plafond de Cloudflare : au-delà, `fetch` et
 * `caches.default.put` lèvent la même erreur que sur la plateforme.
 */
function stub({ paquetStatus = 200, latestStatus = 200, subrequests = Infinity } = {}) {
  const calls = [];
  const store = new Map();
  let spent = 0;
  const spend = () => {
    spent += 1;
    if (spent > subrequests) throw new Error("Too many subrequests by single Worker invocation.");
  };
  globalThis.caches = {
    default: {
      async match(request) {
        spend();
        const hit = store.get(request.url);
        return hit ? hit.clone() : undefined;
      },
      async put(request, response) {
        spend();
        store.set(request.url, response.clone());
      },
    },
  };
  globalThis.fetch = async (url, init) => {
    const href = String(url);
    calls.push({ url: href, headers: init?.headers || {} });
    spend();
    if (href === SPECS_URL) return new Response(SPECS_CSV, { status: 200 });
    if (href.includes("meteoschweiz")) return new Response(swissDayCsv(), { status: 200 });
    const id = new URL(href).searchParams.get("id_station");
    if (href.includes("DPPaquetObs")) {
      if (paquetStatus !== 200) return new Response("", { status: paquetStatus });
      return new Response(frenchPaquetCsv(id), { status: 200 });
    }
    if (href.includes("DPObs")) {
      if (latestStatus !== 200) return new Response("", { status: latestStatus });
      return new Response(frenchLatestCsv(id), { status: 200 });
    }
    return new Response("", { status: 404 });
  };
  return { calls, store, spent: () => spent };
}

const ENV = { SPECS_URL, METEOFRANCE_API_KEY: "clé-de-test" };
const CTX = { waitUntil: (promise) => promise };

const SITE = "https://lecoonetsabande.github.io";

function get(path, { origin, env = ENV } = {}) {
  const headers = origin ? { Origin: origin } : {};
  return worker.fetch(new Request(`https://gabin-meteo.test${path}`, { headers }), env, CTX);
}

const byKey = (body, key) => body.stations.find((station) => station.station_key === key);
const minutesOf = (points) => points.map((p) => Number(p.t.slice(14, 16)));

/** Dernière ligne du paquet simulé : 23h54 à Paris, hors de la grille. */
function paquetTail() {
  const ms = Date.parse(`${nowIso()}T00:00:00Z`) + (23 * 60 + 54 - parisOffsetHours() * 60) * 60000;
  return new Date(ms).toISOString().replace(/\.\d{3}Z$/, "Z");
}

test("/balises : un appel par balise, journée entière, deux sources en nœuds", async () => {
  const { calls } = stub();
  const res = await get("/balises", { origin: SITE });
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("x-cache"), "MISS");
  const body = await res.json();
  assert.equal(body.unit, "kt");
  assert.equal(body.direction, "provenance");
  assert.equal(body.day, nowIso());
  assert.equal(body.step_min, 30);
  assert.equal(body.degraded, undefined);
  assert.deepEqual(
    body.stations.map((s) => [s.station_key, s.status]),
    [
      ["geneve_cointrin", "ok"],
      ["chambery_aix", "ok"],
      ["reventin", "ok"],
    ]
  );

  // Fiche + une seule lecture par balise : plus de reconstitution heure par heure.
  const fetched = calls.map((call) => call.url);
  assert.equal(fetched.length, 4);
  assert.equal(fetched.filter((url) => url.includes("DPPaquetObs")).length, 2);
  assert.match(
    fetched.find((url) => url.includes("38336001")),
    /DPPaquetObs\/v1\/paquet\/infrahoraire-6m\?id_station=38336001&format=csv$/
  );
  assert.equal(calls.find((call) => call.url.includes("meteofrance")).headers.apikey, "clé-de-test");
});

test("une balise française sans pas fin est ramenée aux demi-heures", async () => {
  stub();
  const body = await (await get("/balises", { origin: SITE })).json();
  const points = byKey(body, "chambery_aix").points;
  // Les 48 demi-heures de la journée, plus la dernière mesure du paquet.
  assert.equal(points.length, 49);
  assert.equal(points.at(-1).t, paquetTail());
  assert.deepEqual(
    [...new Set(minutesOf(points.slice(0, -1)))].sort((a, b) => a - b),
    [0, 30]
  );
});

test("balise suisse : demi-heures du fichier du jour UTC", async () => {
  stub();
  const body = await (await get("/balises", { origin: SITE })).json();
  const points = byKey(body, "geneve_cointrin").points;
  assert.deepEqual([...new Set(minutesOf(points))].sort((a, b) => a - b), [0, 30]);
  // Le fichier du jour de MétéoSuisse couvre une journée UTC : sa fin tombe
  // déjà le lendemain à Paris, et le début de la journée parisienne était dans
  // le fichier de la veille. 48 demi-heures moins le décalage horaire.
  assert.equal(points.length, 48 - 2 * parisOffsetHours());
});

test("Reventin : 6 min de 11 h à 19 h, 30 min le reste de la journée", async () => {
  stub();
  const body = await (await get("/balises", { origin: SITE })).json();
  const points = byKey(body, "reventin").points;
  // 48 demi-heures, dont 16 déjà dans la plage fine, plus 80 pas de 6 min,
  // plus la dernière mesure du paquet.
  assert.equal(points.length, 113);
  assert.equal(points.at(-1).t, paquetTail());

  const parisHour = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    hourCycle: "h23",
  });
  const inWindow = points.filter((p) => {
    const hour = Number(parisHour.format(new Date(p.t)));
    return hour >= 11 && hour < 19;
  });
  assert.equal(inWindow.length, 80);
  assert.deepEqual(
    [...new Set(minutesOf(inWindow))].sort((a, b) => a - b),
    [0, 6, 12, 18, 24, 30, 36, 42, 48, 54]
  );
  const outside = points.slice(0, -1).filter((p) => !inWindow.includes(p));
  assert.deepEqual([...new Set(minutesOf(outside))].sort((a, b) => a - b), [0, 30]);
});

test("la mesure la plus récente survit à la décimation", async () => {
  // Le paquet s'arrête à 12h06, hors de la grille des demi-heures.
  const tail = `${nowIso()}T12:06:00Z`;
  const { calls } = stub();
  const realFetch = globalThis.fetch;
  globalThis.fetch = async (url, init) => {
    const href = String(url);
    if (href.includes("DPPaquetObs")) {
      calls.push({ url: href, headers: init?.headers || {} });
      const id = new URL(href).searchParams.get("id_station");
      return new Response(
        [
          "geo_id_insee;validity_time;dd;ff;ddraf10;raf10",
          `${id};${nowIso()}T11:30:00Z;210;5.144;230;7.716`,
          `${id};${nowIso()}T12:00:00Z;210;5.144;230;7.716`,
          `${id};${tail};180;10.288;190;12.86`,
        ].join("\n"),
        { status: 200 }
      );
    }
    return realFetch(url, init);
  };
  const body = await (await get("/balises", { origin: SITE })).json();
  const points = byKey(body, "chambery_aix").points;
  assert.equal(points.at(-1).t, tail);
  assert.equal(points.at(-1).mean_kt, 20);
});

test("paquet refusé : la vignette tient sur DPObs, la courbe reste vide", async () => {
  const { calls } = stub({ paquetStatus: 403 });
  const body = await (await get("/balises", { origin: SITE })).json();
  assert.deepEqual(body.degraded, [
    "chambery_aix : HTTP 403",
    "reventin : HTTP 403",
  ]);
  for (const key of ["chambery_aix", "reventin"]) {
    const points = byKey(body, key).points;
    assert.equal(byKey(body, key).status, "ok");
    assert.equal(points.length, 1);
    assert.equal(points[0].t, `${nowIso()}T12:06:00Z`);
  }
  // La suisse n'est pas concernée et garde sa journée.
  assert.equal(byKey(body, "geneve_cointrin").points.length, 48 - 2 * parisOffsetHours());
  // Un repli coûte un second appel, pas une reconstitution.
  assert.equal(calls.filter((call) => call.url.includes("meteofrance")).length, 4);
});

test("les deux API muettes : la balise le dit sans emporter les autres", async () => {
  stub({ paquetStatus: 403, latestStatus: 500 });
  const body = await (await get("/balises", { origin: SITE })).json();
  assert.equal(byKey(body, "geneve_cointrin").status, "ok");
  assert.equal(byKey(body, "chambery_aix").status, "error");
  assert.equal(byKey(body, "chambery_aix").error, "HTTP 500");
  assert.deepEqual(byKey(body, "chambery_aix").points, []);
});

test("la journée tient largement sous le plafond de sous-requêtes du plan gratuit", async () => {
  const { spent } = stub();
  await get("/balises", { origin: SITE });
  // Lectures de cache, fiche et sa mise en cache, une lecture par balise,
  // écriture de la réponse : l'ancienne reconstitution frôlait les 50.
  assert.ok(spent() <= 16, `${spent()} sous-requêtes`);
});

test("deuxième appel servi par le cache de bord, sans toucher aux API", async () => {
  const { calls } = stub();
  await get("/balises", { origin: SITE });
  const before = calls.length;
  const res = await get("/balises", { origin: SITE });
  assert.equal(res.headers.get("x-cache"), "HIT");
  assert.equal(calls.length, before);
  assert.equal((await res.json()).stations.length, 3);
});

test("sans clé Météo-France, les balises françaises le disent", async () => {
  stub();
  const res = await worker.fetch(
    new Request("https://gabin-meteo.test/balises", { headers: { Origin: SITE } }),
    { SPECS_URL },
    CTX
  );
  const body = await res.json();
  assert.equal(byKey(body, "geneve_cointrin").status, "ok");
  assert.match(byKey(body, "chambery_aix").error, /clé Météo-France absente/);
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

test("/health dit si la clé porte l'abonnement au paquet", async () => {
  stub();
  const sansPaquet = await (await get("/health")).json();
  assert.equal(sansPaquet.meteofrance_paquet, "absent de la clé");

  const payload = {
    subscribedAPIs: [
      { name: "DonneesPubliquesObservation" },
      { name: "DonneesPubliquesPaquetObservation" },
    ],
  };
  const jwt = `entete.${Buffer.from(JSON.stringify(payload)).toString("base64url")}.signature`;
  const avec = await (
    await get("/health", { env: { ...ENV, METEOFRANCE_API_KEY: jwt } })
  ).json();
  assert.equal(avec.meteofrance_paquet, "abonné");
  assert.deepEqual(avec.meteofrance_apis, [
    "DonneesPubliquesObservation",
    "DonneesPubliquesPaquetObservation",
  ]);
  assert.equal(JSON.stringify(avec).includes("signature"), false);
});
