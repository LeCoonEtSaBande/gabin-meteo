const test = require("node:test");
const assert = require("node:assert/strict");
const { parseCsv } = require("./csv.js");
const {
  mapsUrl,
  addDays,
  sliceHorizon,
  indexCurves,
  envelopeMean,
  hourlyWindLevels,
  buildChartSvg,
  parseValidAt,
} = require("./courbes.js");

test("CSV conserve un point-virgule dans un champ quoté", () => {
  const rows = parseCsv(
    "spot_key;display_spot_infos\nroche_de_glun;\"Navigation au Nord du barage.;Se garer au parking\"\n"
  );
  assert.equal(rows.length, 1);
  assert.equal(
    rows[0].display_spot_infos,
    "Navigation au Nord du barage.;Se garer au parking"
  );
});

test("CSV trim les espaces de zone_key", () => {
  const rows = parseCsv("zone_key;display_name\nvalence;Valence\nst_alban_du_rhone; Saint-Alban-du-Rhône\n");
  assert.equal(rows[1].display_name, "Saint-Alban-du-Rhône");
});

test("mapsUrl compose les coordonnées de mise à l'eau", () => {
  assert.equal(
    mapsUrl("46.34881609885344", "6.360139830224631"),
    "https://www.google.com/maps?q=46.34881609885344,6.360139830224631"
  );
  assert.equal(mapsUrl("", ""), "");
});

test("addDays avance l'horizon sans décalage de fuseau", () => {
  assert.equal(addDays("2026-08-20", 1), "2026-08-21");
  assert.equal(addDays("2026-08-20", 5), "2026-08-25");
});

test("sliceHorizon garde la journée puis 3 jours", () => {
  const points = [
    { valid_at: "2026-08-20T23:00", mean: 10 },
    { valid_at: "2026-08-21T00:00", mean: 11 },
    { valid_at: "2026-08-22T12:00", mean: 12 },
    { valid_at: "2026-08-23T00:00", mean: 13 },
  ];
  assert.equal(sliceHorizon(points, "2026-08-20", 1).length, 1);
  assert.deepEqual(
    sliceHorizon(points, "2026-08-20", 3).map((p) => p.valid_at),
    ["2026-08-20T23:00", "2026-08-21T00:00", "2026-08-22T12:00"]
  );
});

test("indexCurves sépare AROMEIFS et ICONGFS par spot", () => {
  const indexed = indexCurves([
    {
      spot_key: "excenevex",
      curve_set: "AROMEIFS",
      valid_at: "2026-08-20T00:00",
      source_model: "AROMEHD",
      wind_speed_10m_kn: "9.2",
      wind_gusts_10m_kn: "14",
      wind_direction_10m_deg: "20",
      precipitation_mm: "0",
      cloud_cover_max_pct: "10",
    },
    {
      spot_key: "excenevex",
      curve_set: "ICONGFS",
      valid_at: "2026-08-20T00:00",
      source_model: "ICONCH1",
      wind_speed_10m_kn: "16",
      wind_gusts_10m_kn: "22",
      wind_direction_10m_deg: "30",
      precipitation_mm: "1.2",
      cloud_cover_max_pct: "80",
    },
  ]);
  assert.equal(indexed.AROMEIFS.excenevex[0].mean, 9.2);
  assert.equal(indexed.ICONGFS.excenevex[0].source_model, "ICONCH1");
});

test("créneaux > 8 et > 15 nds sur l'enveloppe des deux modèles", () => {
  const env = envelopeMean([
    [
      { valid_at: "2026-08-20T10:00", mean: 6 },
      { valid_at: "2026-08-20T11:00", mean: 9 },
      { valid_at: "2026-08-20T12:00", mean: 16 },
    ],
    [{ valid_at: "2026-08-20T10:00", mean: 7 }],
  ]);
  const levels = hourlyWindLevels(env);
  assert.equal(levels[0].level, 0);
  assert.equal(levels[1].level, 8);
  assert.equal(levels[2].level, 15);
});

test("le SVG nomme les modèles et les seuils 8 / 15 nds", () => {
  const svg = buildChartSvg(
    {
      AROMEIFS: [
        {
          valid_at: "2026-08-20T10:00",
          source_model: "AROMEHD",
          mean: 12,
          gust: 18,
          dir: 40,
          precip: 0.4,
          cloud: 50,
        },
        {
          valid_at: "2026-08-20T11:00",
          source_model: "IFS",
          mean: 16,
          gust: 22,
          dir: 50,
          precip: 0,
          cloud: 20,
        },
      ],
      ICONGFS: [
        {
          valid_at: "2026-08-20T10:00",
          source_model: "GFS",
          mean: 9,
          gust: 12,
          dir: 200,
          precip: 1,
          cloud: 90,
        },
      ],
    },
    "2026-08-20",
    1,
    400
  );
  assert.match(svg, /AROMEHD/);
  assert.match(svg, /IFS/);
  assert.match(svg, /GFS/);
  assert.match(svg, /&gt; 8 nds/);
  assert.match(svg, /&gt; 15 nds/);
  assert.match(svg, /#b29f84/);
});

test("parseValidAt lit l'heure civile sans Date locale", () => {
  const p = parseValidAt("2026-08-20T14:00");
  assert.equal(p.hour, 14);
  assert.equal(p.dayKey, "2026-08-20");
});
