import test from "node:test";
import assert from "node:assert/strict";

import {
  isAllowedOrigin,
  lastCsvRecord,
  mergePoints,
  meteoFranceLatestUrl,
  meteoFrancePaquetUrl,
  meteoSuisseUrl,
  onGrid,
  parisDayKey,
  parisHourMs,
  parseCsv,
  parseMeteoFrance,
  parseMeteoSuisse,
  parseSpecs,
  parseSwissTimestampUtc,
  pointsForDay,
  pointsForDayOrLast,
  subscribedApis,
  timeGrid,
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

test("parseCsv : une ligne écartée par « keep » n'est jamais construite", () => {
  const seen = [];
  const rows = parseCsv("a;b\n1;x\n2;y\n3;z\n", (cell) => {
    seen.push(cell("a"));
    return cell("a") !== "2";
  });
  assert.deepEqual(seen, ["1", "2", "3"]);
  assert.deepEqual(rows, [
    { a: "1", b: "x" },
    { a: "3", b: "z" },
  ]);
});

test("lastCsvRecord : en-tête et dernière ligne, sans redécouper le paquet", () => {
  assert.equal(lastCsvRecord("a;b\r\n1;2\r\n3;4\r\n"), "a;b\n3;4");
  assert.equal(lastCsvRecord("a;b\n1;2"), "a;b\n1;2");
  // En-tête seul ou fichier vide : rien à relire.
  assert.equal(lastCsvRecord("a;b\n"), "");
  assert.equal(lastCsvRecord(""), "");
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

test("URL Météo-France : paquet de 24 h, et dernière mesure pour le repli", () => {
  assert.equal(
    meteoFrancePaquetUrl("73329001"),
    "https://public-api.meteofrance.fr/public/DPPaquetObs/v1/paquet/infrahoraire-6m?id_station=73329001&format=csv"
  );
  assert.equal(
    meteoFranceLatestUrl("73329001"),
    "https://public-api.meteofrance.fr/public/DPObs/v2/station/infrahoraire-6m?id_station=73329001&format=csv"
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

test("Météo-France : « dd » vaut 0 au calme et 360 au nord", () => {
  const csv = [
    "geo_id_insee;validity_time;dd;ff;ddraf10;raf10",
    "73329001;2026-10-11T20:06:00Z;360;5.144;350;6",
    "73329001;2026-10-11T20:12:00Z;0;0;260;0.6",
    "73329001;2026-10-11T20:18:00Z;0;0;;",
  ].join("\n");
  assert.deepEqual(
    parseMeteoFrance(csv).map((p) => p.dir_deg),
    [0, 260, null]
  );
});

test("parseMeteoFrance : « keep » reçoit l'horodatage de validité", () => {
  const kept = parseMeteoFrance(FRENCH_CSV, (ms) => ms === Date.UTC(2026, 9, 11, 20, 18));
  assert.deepEqual(
    kept.map((p) => p.t),
    ["2026-10-11T20:18:00Z"]
  );
});

test("parseMeteoSuisse : « keep » reçoit l'horodatage de la mesure", () => {
  const kept = parseMeteoSuisse(SWISS_CSV, (ms) => ms === Date.UTC(2026, 9, 11, 20, 20));
  assert.deepEqual(
    kept.map((p) => p.t),
    ["2026-10-11T20:20:00Z"]
  );
});

test("heure de Paris → instant UTC, changement d'heure compris", () => {
  // Été : Paris a deux heures d'avance.
  assert.equal(parisHourMs("2026-10-11", 11), Date.UTC(2026, 9, 11, 9, 0));
  // Hiver : une seule.
  assert.equal(parisHourMs("2026-12-11", 11), Date.UTC(2026, 11, 11, 10, 0));
  // 25 octobre 2026, jour du retour à l'heure d'hiver : 11 h reste 11 h.
  assert.equal(parisHourMs("2026-10-25", 11), Date.UTC(2026, 9, 25, 10, 0));
  assert.equal(parisHourMs("", 11), null);
});

const FINE = { fine_step_min: 6, fine_from_hour: 11, fine_to_hour: 19 };

test("grille : 30 min partout, 6 min dans la plage fine de la fiche", () => {
  const grid = timeGrid({ station_key: "reventin", ...FINE }, "2026-10-11", 30);
  const at = (h, m) => Date.UTC(2026, 9, 11, h, m);
  // 9 h UTC = 11 h à Paris : la plage fine s'ouvre.
  assert.equal(onGrid(at(8, 54), grid), false);
  assert.equal(onGrid(at(9, 0), grid), true);
  assert.equal(onGrid(at(9, 6), grid), true);
  assert.equal(onGrid(at(9, 7), grid), false);
  // 17 h UTC = 19 h à Paris : elle se referme, 18h54 est le dernier pas fin.
  assert.equal(onGrid(at(16, 54), grid), true);
  assert.equal(onGrid(at(17, 6), grid), false);
  assert.equal(onGrid(at(17, 0), grid), true);
  assert.equal(onGrid(at(17, 30), grid), true);
  // Hors plage, seules les demi-heures restent.
  assert.equal(onGrid(at(6, 0), grid), true);
  assert.equal(onGrid(at(6, 30), grid), true);
  assert.equal(onGrid(at(6, 12), grid), false);
  assert.equal(onGrid(NaN, grid), false);
});

test("grille : une balise sans pas fin garde les demi-heures toute la journée", () => {
  const grid = timeGrid({ station_key: "macon" }, "2026-10-11", 30);
  assert.equal(grid.fine, null);
  assert.equal(onGrid(Date.UTC(2026, 9, 11, 12, 30), grid), true);
  assert.equal(onGrid(Date.UTC(2026, 9, 11, 12, 6), grid), false);
});

test("grille : 30 min tombe juste sur les 6 min françaises et les 10 min suisses", () => {
  const grid = timeGrid({ station_key: "x" }, "2026-10-11", 30);
  const kept = (step) =>
    Array.from({ length: 60 / step }, (_, i) => Date.UTC(2026, 9, 11, 12, i * step)).filter((ms) =>
      onGrid(ms, grid)
    ).length;
  // Deux mesures gardées par heure dans les deux cas : aucun point déplacé.
  assert.equal(kept(6), 2);
  assert.equal(kept(10), 2);
});

test("mergePoints : horodatages dédoublonnés, la dernière série gagne", () => {
  const grid = [
    { t: "2026-10-11T18:00:00Z", mean_kt: 10 },
    { t: "2026-10-11T19:00:00Z", mean_kt: 11 },
  ];
  const latest = [{ t: "2026-10-11T19:00:00Z", mean_kt: 12 }];
  assert.deepEqual(mergePoints(grid, latest), [
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

test("fiches : le pas fin est repris, une plage incohérente est ignorée", () => {
  const csv = [
    "station_key;source;source_id;pas_fin_min;pas_fin_debut_h;pas_fin_fin_h",
    "reventin;MeteoFrance;38336001;6;11;19",
    "macon;MeteoFrance;71105001;;;",
    // Un pas qui ne divise pas l'heure ne retomberait pas sur ses pieds.
    "pas_bancal;MeteoFrance;71105002;7;11;19",
    // Plage vide ou à l'envers.
    "plage_vide;MeteoFrance;71105003;6;19;11",
    "heures_absentes;MeteoFrance;71105004;6;;",
  ].join("\n");
  assert.deepEqual(parseSpecs(csv), [
    {
      station_key: "reventin",
      source: "MeteoFrance",
      source_id: "38336001",
      fine_step_min: 6,
      fine_from_hour: 11,
      fine_to_hour: 19,
    },
    { station_key: "macon", source: "MeteoFrance", source_id: "71105001" },
    { station_key: "pas_bancal", source: "MeteoFrance", source_id: "71105002" },
    { station_key: "plage_vide", source: "MeteoFrance", source_id: "71105003" },
    { station_key: "heures_absentes", source: "MeteoFrance", source_id: "71105004" },
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

test("abonnements lus dans la clé, sans appel ni fuite", () => {
  const payload = {
    subscribedAPIs: [
      { name: "DonneesPubliquesObservation", context: "/public/DPObs" },
      { name: "DonneesPubliquesPaquetObservation", context: "/public/DPPaquetObs" },
    ],
  };
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  assert.deepEqual(subscribedApis(`entete.${body}.signature`), [
    "DonneesPubliquesObservation",
    "DonneesPubliquesPaquetObservation",
  ]);
  // Jeton tronqué, illisible ou absent : on ne prétend rien.
  assert.deepEqual(subscribedApis("entete"), []);
  assert.deepEqual(subscribedApis("entete.pas-du-base64-json.signature"), []);
  assert.deepEqual(subscribedApis(""), []);
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
