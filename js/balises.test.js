const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { parseCsv } = require("./csv.js");
const courbes = require("./courbes.js");

global.parseCsv = parseCsv;
global.parseValidAt = courbes.parseValidAt;

const {
  BUOY_API_URL,
  parisValidAt,
  buoyPoint,
  parseBuoyPayload,
  cardinalFr,
  fitAffine,
  projectLatLon,
  nearestSpot,
  observedPeaks,
  hourLabel,
  ageLabel,
  clampToBox,
  stackBoxes,
  defaultBuoyCurves,
  toggleBuoyCurveState,
} = require("./balises.js");

const ROOT = path.join(__dirname, "..");

const WORKER_PAYLOAD = {
  generated_at: "2026-10-03T14:12:00Z",
  day: "2026-10-03",
  unit: "kt",
  direction: "provenance",
  stations: [
    {
      station_key: "geneve_cointrin",
      source: "MeteoSuisse",
      source_id: "GVE",
      status: "ok",
      points: [
        { t: "2026-10-03T14:00:00Z", mean_kt: 10, gust_kt: 20, dir_deg: 72 },
        { t: "2026-10-03T13:50:00Z", mean_kt: 3.29, gust_kt: 6.43, dir_deg: 75 },
      ],
    },
    {
      station_key: "chambery_aix",
      source: "MeteoFrance",
      source_id: "73329001",
      status: "error",
      error: "HTTP 401",
      points: [],
    },
  ],
};

test("le front n'appelle que le Worker", () => {
  assert.equal(BUOY_API_URL, "https://gabin-meteo.garinlu-subs.workers.dev/balises");
});

test("heure UTC convertie en heure de Paris (été et hiver)", () => {
  assert.equal(parisValidAt(Date.UTC(2026, 9, 3, 14, 0)), "2026-10-03T16:00");
  assert.equal(parisValidAt(Date.UTC(2026, 11, 3, 14, 0)), "2026-12-03T15:00");
  assert.equal(parisValidAt(Date.UTC(2026, 9, 3, 22, 10)), "2026-10-04T00:10");
});

test("réponse du Worker : points triés, dernière mesure à part, station en panne signalée", () => {
  const data = parseBuoyPayload(WORKER_PAYLOAD);
  assert.deepEqual(Object.keys(data), ["geneve_cointrin", "chambery_aix"]);

  const gve = data.geneve_cointrin;
  assert.deepEqual(gve.points.map((p) => p.valid_at), ["2026-10-03T15:50", "2026-10-03T16:00"]);
  assert.equal(gve.error, "");
  assert.equal(gve.last.source_model, "MESURE");
  assert.equal(gve.last.mean, 10);
  assert.equal(gve.last.gust, 20);
  assert.equal(gve.last.dir, 72);

  const chambery = data.chambery_aix;
  assert.deepEqual(chambery.points, []);
  assert.equal(chambery.last, null);
  assert.equal(chambery.error, "HTTP 401");
});

test("point du Worker : rafale ou direction absente tolérée, ligne illisible écartée", () => {
  const point = buoyPoint({ t: "2026-10-03T14:00:00Z", mean_kt: 12, gust_kt: null, dir_deg: null });
  assert.equal(point.gust, 12);
  assert.ok(Number.isNaN(point.dir));
  assert.equal(buoyPoint({ t: "2026-10-03T14:00:00Z", mean_kt: null }), null);
  assert.equal(buoyPoint({ t: "jamais", mean_kt: 12 }), null);
});

test("réponse vide ou cassée : aucune balise, pas d'exception", () => {
  assert.deepEqual(parseBuoyPayload(null), {});
  assert.deepEqual(parseBuoyPayload({ stations: [{ points: [] }] }), {});
});

test("rose des vents en français sur 16 secteurs", () => {
  assert.equal(cardinalFr(0), "N");
  assert.equal(cardinalFr(45), "NE");
  assert.equal(cardinalFr(225), "SO");
  assert.equal(cardinalFr(292), "ONO");
  assert.equal(cardinalFr(359), "N");
  assert.equal(cardinalFr(NaN), "");
});

test("projection GPS → carte calée sur les marqueurs des spots", () => {
  const svg = fs.readFileSync(path.join(ROOT, "assets", "svg_map", "Carte RA 804x1200.svg"), "utf8");
  const spots = parseCsv(
    fs.readFileSync(path.join(ROOT, "assets", "spots_specs", "spots_specifications.csv"), "utf8")
  );
  const pairs = [];
  for (const spot of spots) {
    const re = new RegExp(`layerName="S_${spot.spot_key}"[\\s\\S]*?<circle cx="([\\d.]+)" cy="([\\d.]+)"`, "i");
    const m = re.exec(svg);
    if (!m) continue;
    pairs.push({
      lat: Number(spot.Latitude_mise_a_leau),
      lon: Number(spot.Longitude_mise_a_leau),
      x: Number(m[1]),
      y: Number(m[2]),
    });
  }
  assert.equal(pairs.length, spots.length);
  const fit = fitAffine(pairs);
  assert.ok(fit);
  const errors = pairs.map((p) => {
    const q = projectLatLon(fit, p.lat, p.lon);
    return Math.hypot(q.x - p.x, q.y - p.y);
  });
  assert.ok(Math.max(...errors) < 15, `erreur max ${Math.max(...errors)}`);
  const gve = projectLatLon(fit, 46.247519, 6.127742);
  assert.ok(gve.x > 600 && gve.x < 700 && gve.y > 250 && gve.y < 330);
});

test("projection impossible avec moins de trois spots", () => {
  assert.equal(fitAffine([{ lat: 1, lon: 1, x: 1, y: 1 }]), null);
});

test("chaque balise est rattachée au spot le plus proche", () => {
  const spots = parseCsv(
    fs.readFileSync(path.join(ROOT, "assets", "spots_specs", "spots_specifications.csv"), "utf8")
  );
  const balises = parseCsv(
    fs.readFileSync(path.join(ROOT, "assets", "balises_specs", "balises_specifications.csv"), "utf8")
  );
  const near = Object.fromEntries(
    balises.map((station) => [station.station_key, nearestSpot(station, spots).spot.spot_key])
  );
  assert.deepEqual(near, {
    geneve_cointrin: "vengeron",
    changins: "messery",
    st_prex: "excenevex",
    annecy_meythet: "plage_de_sevrier",
    chambery_aix: "cap_des_seselets",
    macon: "pont_darciat",
    lyon_bron: "wwmeyzieu",
    reventin: "st_cyr_sur_le_rhone",
    etoile: "portes_les_valence",
    montelimar: "portes_les_valence",
    la_mure: "treffort",
  });
});

test("fiches balises complètes : 3 suisses, 8 françaises", () => {
  const balises = parseCsv(
    fs.readFileSync(path.join(ROOT, "assets", "balises_specs", "balises_specifications.csv"), "utf8")
  );
  assert.deepEqual(
    balises.map((row) => [row.source, row.source_id]),
    [
      ["MeteoSuisse", "GVE"],
      ["MeteoSuisse", "CGI"],
      ["MeteoSuisse", "PRE"],
      ["MeteoFrance", "74182001"],
      ["MeteoFrance", "73329001"],
      ["MeteoFrance", "71105001"],
      ["MeteoFrance", "69029001"],
      ["MeteoFrance", "38336001"],
      ["MeteoFrance", "26124001"],
      ["MeteoFrance", "26198001"],
      ["MeteoFrance", "38269004"],
    ]
  );
  for (const row of balises) {
    assert.ok(row.display_name && row.short_name);
    assert.ok(Number.isFinite(Number(row.latitude)) && Number.isFinite(Number(row.longitude)));
    assert.ok(Number.isFinite(Number(row.elevation_m)));
    assert.match(row.link_station, /^https:\/\//);
    // Le Worker filtre les identifiants sur leur forme : 3 lettres ou 8 chiffres.
    assert.match(row.source_id, row.source === "MeteoSuisse" ? /^[A-Z]{3}$/ : /^\d{8}$/);
  }
});

test("pics mesurés limités à 8 h–20 h du jour demandé", () => {
  const points = [
    { valid_at: "2026-10-03T07:50", mean: 30, gust: 40 },
    { valid_at: "2026-10-03T12:10", mean: 14.4, gust: 19 },
    { valid_at: "2026-10-03T15:20", mean: 12, gust: 23.6 },
    { valid_at: "2026-10-03T20:00", mean: 25, gust: 35 },
  ];
  assert.deepEqual(observedPeaks(points, "2026-10-03", 8, 20), {
    mean_max_at: "2026-10-03T12:10",
    mean_max_kt: 14,
    gust_max_at: "2026-10-03T15:20",
    gust_max_kt: 24,
  });
  assert.equal(observedPeaks(points.slice(0, 1), "2026-10-03", 8, 20), null);
});

test("libellés d'heure et d'âge de la mesure", () => {
  assert.equal(hourLabel("2026-10-03T16:00"), "16h00");
  assert.equal(hourLabel("2026-10-03T09:10"), "09h10");
  const now = Date.UTC(2026, 9, 3, 14, 20);
  assert.equal(ageLabel(Date.UTC(2026, 9, 3, 14, 8), now), "il y a 12 min");
  assert.equal(ageLabel(Date.UTC(2026, 9, 3, 11, 0), now), "il y a 3 h");
});

test("repère en bordure : point hors carte ramené au bord avec une flèche", () => {
  const box = { x: -24, y: 128, width: 852, height: 1000 };
  assert.deepEqual(clampToBox({ x: 85, y: 1246 }, box, 14), { x: 85, y: 1114, edge: "↓" });
  assert.deepEqual(clampToBox({ x: 646, y: 290 }, box, 14), { x: 646, y: 290, edge: "" });
  assert.equal(clampToBox({ x: 900, y: 500 }, box, 14).edge, "→");
});

test("vignettes empilées : quatre balises au même endroit se séparent", () => {
  const box = (left, top) => ({ left, right: left + 90, top, height: 50 });
  // Bron, Reventin, Étoile, Montélimar tombent toutes vers 360 dans la vallée.
  const tops = stackBoxes([box(10, 360), box(20, 360), box(15, 360), box(5, 356)], 60, 480);
  const sorted = [...tops].sort((a, b) => a - b);
  for (let i = 1; i < sorted.length; i += 1) {
    assert.ok(sorted[i] - sorted[i - 1] >= 50 + 6, `vignettes ${i - 1} et ${i} encore collées`);
  }
  assert.ok(Math.min(...tops) >= 60 && Math.max(...tops) + 50 <= 480);
});

test("vignettes : deux colonnes distinctes ne se poussent pas", () => {
  const left = { left: 0, right: 80, top: 100, height: 50 };
  const right = { left: 200, right: 280, top: 100, height: 50 };
  assert.deepEqual(stackBoxes([left, right], 0, 600), [100, 100]);
});

test("vignettes : ce qui déborde en bas remonte au lieu de sortir de la carte", () => {
  const boxes = [
    { left: 0, right: 90, top: 400, height: 50 },
    { left: 0, right: 90, top: 400, height: 50 },
    { left: 0, right: 90, top: 400, height: 50 },
  ];
  const tops = stackBoxes(boxes, 100, 500);
  assert.deepEqual(tops, [338, 394, 450]);
});

test("graphique en mode mesures : pas de rangée météo, prévision en trait fin, flèches aux heures pleines", () => {
  const day = "2026-10-03";
  const obs = [];
  for (let m = 8 * 60; m <= 16 * 60; m += 10) {
    const hh = String(Math.floor(m / 60)).padStart(2, "0");
    const mm = String(m % 60).padStart(2, "0");
    obs.push({ valid_at: `${day}T${hh}:${mm}`, source_model: "MESURE", mean: 12, gust: 18, dir: 45 });
  }
  const forecast = [
    { valid_at: `${day}T08:00`, source_model: "ICONCH1", mean: 9, gust: 14, dir: 40 },
    { valid_at: `${day}T12:00`, source_model: "ICONCH1", mean: 15, gust: 22, dir: 40 },
  ];
  const svg = courbes.buildChartSvg({}, day, 1, 400, {
    seriesList: [{ name: "MESURE", points: obs }],
    hideWeather: true,
    overlays: [{ name: "ICONGFS", points: forecast }],
    chartDays: { MESURE: { [day]: observedPeaks(obs, day, 8, 20) } },
    nowAt: `${day}T16:05`,
  });
  assert.ok(!svg.includes("Nuages (%)"));
  assert.ok(svg.includes('class="forecast-overlay"'));
  assert.ok(svg.includes('class="now-line"'));
  assert.ok(svg.includes(">Mesuré<"));
  assert.ok(svg.includes("peak-mean"));
  const arrows = svg.match(/rotate\(225\)/g) || [];
  assert.equal(arrows.length, 5);
});

test("mesure + prévision : liseré sous la mesure, prévision en trait plein, infobulle sur les deux courbes", () => {
  const day = "2026-10-03";
  const obs = [
    { valid_at: `${day}T12:00`, source_model: "MESURE", mean: 12, gust: 18, dir: 45 },
    { valid_at: `${day}T12:10`, source_model: "MESURE", mean: 13, gust: 19, dir: 45 },
  ];
  const forecast = [
    { valid_at: `${day}T11:00`, source_model: "ICONCH1", mean: 20, gust: 28, dir: 40 },
    { valid_at: `${day}T13:00`, source_model: "ICONCH1", mean: 22, gust: 30, dir: 40 },
  ];
  const opts = {
    seriesList: [{ name: "MESURE", points: obs }],
    hideWeather: true,
    overlays: [{ name: "ICONGFS", points: forecast }],
    halo: true,
  };
  const svg = courbes.buildChartSvg({}, day, 1, 400, opts);
  assert.equal((svg.match(/class="wind-halo"/g) || []).length, 2);
  const overlay = svg.slice(svg.indexOf('class="forecast-overlay"'));
  assert.match(overlay, /stroke="#6eb4d0" stroke-width="1\.6\d*" opacity="0\.9"/);
  assert.ok(svg.indexOf('class="forecast-overlay"') < svg.indexOf('class="wind-halo"'));
  assert.ok(!courbes.buildChartSvg({}, day, 1, 400, { ...opts, halo: false }).includes("wind-halo"));

  const geom = JSON.parse(
    svg.match(/data-geom="([^"]+)"/)[1].replace(/&quot;/g, '"')
  );
  const xNoon = geom.x0 + (12 / 24) * geom.innerW;
  const yHigh = geom.yWind0 - (22 / geom.maxKt) * geom.windH;
  const hit = courbes.pickNearestWind(
    [{ name: "MESURE", points: obs }, { name: "ICONGFS", points: forecast }],
    day, 1, geom, xNoon, yHigh
  );
  assert.equal(hit.setName, "ICONGFS");
});

test("AROME et ICON superposés ensemble, chacun dans sa couleur, échelle calée sur le plus fort", () => {
  const day = "2026-10-03";
  const obs = [
    { valid_at: `${day}T12:00`, source_model: "MESURE", mean: 8, gust: 12, dir: 45 },
    { valid_at: `${day}T12:10`, source_model: "MESURE", mean: 9, gust: 13, dir: 45 },
  ];
  const arome = [
    { valid_at: `${day}T11:00`, source_model: "AROMEHD", mean: 10, gust: 14, dir: 40 },
    { valid_at: `${day}T13:00`, source_model: "AROMEHD", mean: 12, gust: 16, dir: 40 },
  ];
  const icon = [
    { valid_at: `${day}T11:00`, source_model: "ICONCH1", mean: 20, gust: 33, dir: 40 },
    { valid_at: `${day}T13:00`, source_model: "ICONCH1", mean: 22, gust: 36, dir: 40 },
  ];
  const svg = courbes.buildChartSvg({}, day, 1, 400, {
    seriesList: [{ name: "MESURE", points: obs }],
    hideWeather: true,
    overlays: [{ name: "ICONGFS", points: icon }, { name: "AROMEIFS", points: arome }, { name: "AROMEIFS", points: [] }],
  });
  const groups = svg.match(/class="forecast-overlay" data-set="(\w+)"/g) || [];
  assert.deepEqual(groups.map((g) => g.match(/data-set="(\w+)"/)[1]), ["ICONGFS", "AROMEIFS"]);
  assert.ok(svg.includes('stroke="#6eb4d0"'));
  assert.ok(svg.includes('stroke="#b29f84"'));
  const geom = JSON.parse(svg.match(/data-geom="([^"]+)"/)[1].replace(/&quot;/g, '"'));
  assert.ok(geom.maxKt >= 36);
});

test("boutons Mesure / AROME / ICON : modèle par défaut du spot, au moins une courbe affichée", () => {
  assert.deepEqual(defaultBuoyCurves("AROMEIFS"), { MESURE: true, AROMEIFS: true, ICONGFS: false });
  assert.deepEqual(defaultBuoyCurves("ICONGFS"), { MESURE: true, AROMEIFS: false, ICONGFS: true });

  const all = ["MESURE", "AROMEIFS", "ICONGFS"];
  let state = defaultBuoyCurves("ICONGFS");
  state = toggleBuoyCurveState(state, "AROMEIFS", "ICONGFS", all);
  assert.deepEqual(state, { MESURE: true, AROMEIFS: true, ICONGFS: true });
  state = toggleBuoyCurveState(state, "MESURE", "ICONGFS", all);
  assert.deepEqual(state, { MESURE: false, AROMEIFS: true, ICONGFS: true });

  // Masquer la mesure seule : le modèle par défaut du spot revient.
  assert.deepEqual(
    toggleBuoyCurveState({ MESURE: true, AROMEIFS: false, ICONGFS: false }, "MESURE", "ICONGFS", all),
    { MESURE: false, AROMEIFS: false, ICONGFS: true }
  );
  // Masquer le dernier modèle : la mesure revient.
  assert.deepEqual(
    toggleBuoyCurveState({ MESURE: false, AROMEIFS: true, ICONGFS: false }, "AROMEIFS", "ICONGFS", all),
    { MESURE: true, AROMEIFS: false, ICONGFS: false }
  );
  // Modèle par défaut sans données aujourd'hui : on rallume l'autre.
  assert.deepEqual(
    toggleBuoyCurveState({ MESURE: true, AROMEIFS: false, ICONGFS: false }, "MESURE", "AROMEIFS", ["MESURE", "ICONGFS"]),
    { MESURE: false, AROMEIFS: false, ICONGFS: true }
  );
  // Aucune prévision : la mesure ne peut pas être masquée.
  assert.deepEqual(toggleBuoyCurveState({ MESURE: true }, "MESURE", "ICONGFS", ["MESURE"]), { MESURE: true });
});

test("infobulle : heure avec minutes pour les mesures, inchangée pour les prévisions", () => {
  assert.equal(courbes.slotCaption("2026-10-03T14:10", 1), "14h10");
  assert.equal(courbes.slotCaption("2026-10-03T14:00", 1), "14h");
});
