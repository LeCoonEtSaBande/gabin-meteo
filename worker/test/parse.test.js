import test from "node:test";
import assert from "node:assert/strict";

import {
  hourStampsForDay,
  isAllowedOrigin,
  mergePoints,
  meteoFranceHourUrl,
  meteoFranceLatestUrl,
  meteoSuisseUrl,
  parisDayKey,
  parseCsv,
  parseMeteoFrance,
  parseMeteoSuisse,
  parseSpecs,
  parseSwissTimestampUtc,
  pointsForDay,
  pointsForDayOrLast,
} from "../src/parse.js";

const SWISS_CSV = [
  "station_abbr;reference_timestamp;tre200s0;fkl010z1;fve010z0;fkl010z0;dkl010z0;fu3010z0;fu3010z1",
  "GVE;11.10.2026 20:10;10.4;1.1;0.8;0.8;298;2.9;4",
  "GVE;11.10.2026 20:20;10.2;1;0.6;0.6;355;2.2;3.6",
  "GVE;11.10.2026 20:30;10.1;;;;;;",
].join("\n");

/* Pas de 6 min de DPObs : rafale `raf10`, sa direction `ddraf10`. */
const FRENCH_CSV = [
  "geo_id_insee;reference_time;insert_time;validity_time;t;td;u;dd;ff;ddraf10;raf10;rr_per;pres",
  "73329001;2026-10-11T20:12:07Z;2026-10-11T20:11:03Z;2026-10-11T20:06:00Z;283.75;282.15;90;210;2;230;3.9;0;968",
  "73329001;2026-10-11T20:18:07Z;2026-10-11T20:17:03Z;2026-10-11T20:12:00Z;283.65;282.05;91;;;230;;0;968",
  "73329001;2026-10-11T20:24:07Z;2026-10-11T20:23:03Z;2026-10-11T20:18:00Z;283.55;282.05;91;390;5.144;240;7.716;0;968",
].join("\n");

test("parseCsv découpe sur « ; » et nettoie les cellules", () => {
  const rows = parseCsv("a;b\r\n1; 2 \n\n3;4\n");
  assert.deepEqual(rows, [
    { a: "1", b: "2" },
    { a: "3", b: "4" },
  ]);
});

test("horodatage MétéoSuisse lu en UTC", () => {
  assert.equal(parseSwissTimestampUtc("11.10.2026 20:20"), Date.UTC(2026, 9, 11, 20, 20));
  assert.equal(parseSwissTimestampUtc("2026-10-11 20:20"), null);
});

test("URL MétéoSuisse en minuscules", () => {
  assert.equal(
    meteoSuisseUrl("GVE"),
    "https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/gve/ogd-smn_gve_t_now.csv"
  );
});

test("URL Météo-France : dernière mesure 6 min et heure pleine", () => {
  assert.equal(
    meteoFranceLatestUrl("73329001"),
    "https://public-api.meteofrance.fr/public/DPObs/v2/station/infrahoraire-6m?id_station=73329001&format=csv"
  );
  assert.equal(
    meteoFranceHourUrl("73329001", "2026-10-11T18:00:00Z"),
    "https://public-api.meteofrance.fr/public/DPObs/v2/station/horaire?id_station=73329001&date=2026-10-11T18%3A00%3A00Z&format=csv"
  );
});

test("MétéoSuisse : km/h → nœuds, lignes sans vent ignorées", () => {
  const points = parseMeteoSuisse(SWISS_CSV);
  assert.equal(points.length, 2);
  assert.deepEqual(points[0], {
    t: "2026-10-11T20:10:00Z",
    mean_kt: 1.57,
    gust_kt: 2.16,
    dir_deg: 298,
  });
  assert.equal(points[1].dir_deg, 355);
});

test("Météo-France : m/s → nœuds, dd en provenance, lignes sans vent ignorées", () => {
  const points = parseMeteoFrance(FRENCH_CSV);
  assert.equal(points.length, 2);
  assert.deepEqual(points[0], {
    t: "2026-10-11T20:06:00Z",
    mean_kt: 3.89,
    gust_kt: 7.58,
    dir_deg: 210,
  });
  // 5.144 m/s = 10 nds, 7.716 m/s = 15 nds ; 390° est ramené dans la rose.
  assert.deepEqual(points[1], {
    t: "2026-10-11T20:18:00Z",
    mean_kt: 10,
    gust_kt: 15,
    dir_deg: 30,
  });
});

test("Météo-France : le pas horaire nomme la rafale autrement", () => {
  const csv = [
    "geo_id_insee;validity_time;dd;ff;dxy;fxy;ddraf;raf",
    "73329001;2026-10-11T18:00:00Z;160;5.144;140;6;220;7.716",
  ].join("\n");
  assert.deepEqual(parseMeteoFrance(csv), [
    { t: "2026-10-11T18:00:00Z", mean_kt: 10, gust_kt: 15, dir_deg: 160 },
  ]);
});

test("rafale absente : on retombe sur le vent moyen", () => {
  const csv = [
    "geo_id_insee;validity_time;dd;ff;ddraf10;raf10",
    "73329001;2026-10-11T20:06:00Z;180;5.144;;",
  ].join("\n");
  const [point] = parseMeteoFrance(csv);
  assert.equal(point.mean_kt, 10);
  assert.equal(point.gust_kt, 10);
});

test("direction absente : celle de la rafale prend le relais", () => {
  const csv = [
    "geo_id_insee;validity_time;dd;ff;ddraf10;raf10",
    "73329001;2026-10-11T20:06:00Z;;5.144;290;6",
  ].join("\n");
  assert.equal(parseMeteoFrance(csv)[0].dir_deg, 290);
});

test("heures pleines du jour : celles déjà écoulées, dans le fuseau de Paris", () => {
  const now = Date.UTC(2026, 9, 11, 9, 30);
  const stamps = hourStampsForDay("2026-10-11", now);
  // Été : le jour parisien commence à 22 h UTC la veille.
  assert.equal(stamps[0], "2026-10-10T22:00:00Z");
  assert.equal(stamps.at(-1), "2026-10-11T09:00:00Z");
  assert.equal(stamps.length, 12);
  // Le 25 octobre 2026, Paris repasse à l'heure d'hiver : la journée fait 25 h.
  assert.equal(hourStampsForDay("2026-10-25", Date.UTC(2026, 9, 26, 12, 0)).length, 25);
  assert.deepEqual(hourStampsForDay("", now), []);
  assert.deepEqual(hourStampsForDay("2026-10-11", Date.UTC(2026, 9, 1)), []);
});

test("mergePoints : horodatages dédoublonnés, la dernière série gagne", () => {
  const hours = [
    { t: "2026-10-11T18:00:00Z", mean_kt: 10 },
    { t: "2026-10-11T19:00:00Z", mean_kt: 11 },
  ];
  const latest = [{ t: "2026-10-11T19:00:00Z", mean_kt: 12 }];
  assert.deepEqual(mergePoints(hours, latest), [
    { t: "2026-10-11T18:00:00Z", mean_kt: 10 },
    { t: "2026-10-11T19:00:00Z", mean_kt: 12 },
  ]);
});

test("les points sont triés par horodatage croissant", () => {
  const csv = [
    "geo_id_insee;validity_time;dd;ff",
    "73329001;2026-10-11T20:18:00Z;180;5",
    "73329001;2026-10-11T20:06:00Z;180;5",
  ].join("\n");
  assert.deepEqual(
    parseMeteoFrance(csv).map((p) => p.t),
    ["2026-10-11T20:06:00Z", "2026-10-11T20:18:00Z"]
  );
});

test("le jour est celui de Paris, pas celui d'UTC", () => {
  // 22:30 UTC le 11 octobre = 00:30 le 12 à Paris (heure d'été).
  assert.equal(parisDayKey(Date.UTC(2026, 9, 11, 22, 30)), "2026-10-12");
  assert.equal(parisDayKey(Date.UTC(2026, 9, 11, 21, 30)), "2026-10-11");
  // En hiver, Paris n'a qu'une heure d'avance.
  assert.equal(parisDayKey(Date.UTC(2026, 11, 11, 23, 30)), "2026-12-12");
});

test("pointsForDay garde la journée parisienne demandée", () => {
  const points = [
    { t: "2026-10-11T21:30:00Z" },
    { t: "2026-10-11T22:30:00Z" },
    { t: "2026-10-12T05:00:00Z" },
  ];
  assert.deepEqual(
    pointsForDay(points, "2026-10-12").map((p) => p.t),
    ["2026-10-11T22:30:00Z", "2026-10-12T05:00:00Z"]
  );
});

test("journée pas encore commencée : la dernière mesure de la veille est conservée", () => {
  // Minuit passé à Paris, le fichier suisse en est encore au jour UTC d'avant.
  const points = [{ t: "2026-10-11T21:40:00Z" }, { t: "2026-10-11T21:50:00Z" }];
  assert.deepEqual(
    pointsForDayOrLast(points, "2026-10-12").map((p) => p.t),
    ["2026-10-11T21:50:00Z"]
  );
  assert.deepEqual(pointsForDayOrLast([], "2026-10-12"), []);
  assert.equal(pointsForDayOrLast(points, "2026-10-11").length, 2);
});

test("fiches : sources inconnues et identifiants mal formés écartés", () => {
  const csv = [
    "station_key;display_name;short_name;source;source_id;latitude;longitude;elevation_m;link_station",
    "geneve_cointrin;Genève / Cointrin;Genève;MeteoSuisse;GVE;46.24;6.12;411;https://x",
    "chambery;Chambéry-Aix;Chambéry;MeteoFrance;73329001;45.63;5.88;235;https://x",
    "faux_source;X;X;Infoclimat;000001;45;5;100;https://x",
    "faux_id;X;X;MeteoFrance;73329;45;5;100;https://x",
    "sans_cle;X;X;MeteoSuisse;GVE;45;5;100;https://x",
  ].join("\n");
  const rows = parseSpecs(csv);
  assert.deepEqual(rows, [
    { station_key: "geneve_cointrin", source: "MeteoSuisse", source_id: "GVE" },
    { station_key: "chambery", source: "MeteoFrance", source_id: "73329001" },
    { station_key: "sans_cle", source: "MeteoSuisse", source_id: "GVE" },
  ]);
});

test("fiches : le nombre de stations relayées est plafonné", () => {
  const rows = [
    "station_key;source;source_id",
    ...Array.from({ length: 50 }, (_, i) => `s${i};MeteoSuisse;GVE`),
  ].join("\n");
  assert.equal(parseSpecs(rows).length, 40);
  assert.equal(parseSpecs(rows, 5).length, 5);
});

test("CORS : le site publié et le serveur local, rien d'autre", () => {
  const allowed = ["https://lecoonetsabande.github.io"];
  assert.equal(isAllowedOrigin("https://lecoonetsabande.github.io", allowed), true);
  assert.equal(isAllowedOrigin("http://localhost:8080", allowed), true);
  assert.equal(isAllowedOrigin("http://127.0.0.1:8080", allowed), true);
  assert.equal(isAllowedOrigin("http://localhost", allowed), true);
  assert.equal(isAllowedOrigin("https://ailleurs.example", allowed), false);
  assert.equal(isAllowedOrigin("https://lecoonetsabande.github.io.evil.example", allowed), false);
  assert.equal(isAllowedOrigin(null, allowed), false);
});
