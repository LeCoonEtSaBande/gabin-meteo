const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { parseCsv } = require("./csv.js");
const courbes = require("./courbes.js");

global.parseCsv = parseCsv;
global.parseValidAt = courbes.parseValidAt;

const {
  meteoSuisseNowUrl,
  parisValidAt,
  parseMeteoSuisseNow,
  cardinalFr,
  fitAffine,
  projectLatLon,
  nearestSpot,
  observedPeaks,
  hourLabel,
  ageLabel,
  clampToBox,
} = require("./balises.js");

const ROOT = path.join(__dirname, "..");

const NOW_CSV = [
  "station_abbr;reference_timestamp;tre200s0;fkl010z1;fve010z0;fkl010z0;dkl010z0;fu3010z0;fu3010z1",
  "GVE;03.10.2026 13:50;20.9;3.3;1.6;1.7;75;6.1;11.9",
  "GVE;03.10.2026 14:00;20.7;3.2;1.6;1.6;72;18.52;37.04",
  "GVE;03.10.2026 14:10;20.7;;;;;;",
].join("\n");

test("URL du fichier 10 min MétéoSuisse en minuscules", () => {
  assert.equal(
    meteoSuisseNowUrl("GVE"),
    "https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/gve/ogd-smn_gve_t_now.csv"
  );
});

test("heure UTC MétéoSuisse convertie en heure de Paris (été et hiver)", () => {
  assert.equal(parisValidAt(Date.UTC(2026, 9, 3, 14, 0)), "2026-10-03T16:00");
  assert.equal(parisValidAt(Date.UTC(2026, 11, 3, 14, 0)), "2026-12-03T15:00");
  assert.equal(parisValidAt(Date.UTC(2026, 9, 3, 22, 10)), "2026-10-04T00:10");
});

test("CSV MétéoSuisse : km/h → nœuds, provenance, lignes vides écartées", () => {
  const points = parseMeteoSuisseNow(NOW_CSV);
  assert.equal(points.length, 2);
  const last = points[1];
  assert.equal(last.valid_at, "2026-10-03T16:00");
  assert.equal(last.source_model, "MESURE");
  assert.ok(Math.abs(last.mean - 10) < 1e-9);
  assert.ok(Math.abs(last.gust - 20) < 1e-9);
  assert.equal(last.dir, 72);
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
  });
});

test("fiches balises MétéoSuisse complètes", () => {
  const balises = parseCsv(
    fs.readFileSync(path.join(ROOT, "assets", "balises_specs", "balises_specifications.csv"), "utf8")
  );
  assert.deepEqual(balises.map((row) => row.source_id), ["GVE", "CGI", "PRE"]);
  for (const row of balises) {
    assert.equal(row.source, "MeteoSuisse");
    assert.ok(Number.isFinite(Number(row.latitude)) && Number.isFinite(Number(row.longitude)));
    assert.match(row.link_station, /^https:\/\/www\.meteosuisse\.admin\.ch\//);
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
    overlay: { name: "ICONGFS", points: forecast },
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

test("infobulle : heure avec minutes pour les mesures, inchangée pour les prévisions", () => {
  assert.equal(courbes.slotCaption("2026-10-03T14:10", 1), "14h10");
  assert.equal(courbes.slotCaption("2026-10-03T14:00", 1), "14h");
});
