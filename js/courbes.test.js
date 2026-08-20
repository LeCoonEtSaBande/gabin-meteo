const test = require("node:test");
const assert = require("node:assert/strict");
const { parseCsv } = require("./csv.js");
const {
  mapsUrl,
  addDays,
  sliceHorizon,
  indexCurves,
  primaryCurveSet,
  secondaryCurveSet,
  mergeWxMax,
  xTicks,
  buildChartSvg,
  legendHtml,
  parseValidAt,
  MEAN_STROKE,
  arrowRotation,
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

test("courbe principale selon le modèle court terme", () => {
  assert.equal(primaryCurveSet({ short_term_model: "AROMEHD" }), "AROMEIFS");
  assert.equal(primaryCurveSet({ short_term_model: "ICONCH1" }), "ICONGFS");
  assert.equal(secondaryCurveSet("AROMEIFS"), "ICONGFS");
  assert.equal(secondaryCurveSet("ICONGFS"), "AROMEIFS");
});

test("nébulosité : max des modèles puis max sur 3 heures", () => {
  const wx = mergeWxMax([
    [
      { valid_at: "2026-08-20T10:00", cloud: 20, precip: 0 },
      { valid_at: "2026-08-20T11:00", cloud: 40, precip: 0.2 },
      { valid_at: "2026-08-20T12:00", cloud: 10, precip: 0 },
    ],
    [{ valid_at: "2026-08-20T11:00", cloud: 90, precip: 1 }],
  ]);
  assert.equal(wx[1].cloud, 90);
  assert.equal(wx[0].cloud, 90);
  assert.equal(wx[2].cloud, 90);
  assert.equal(wx[1].precip, 1);
});

test("l'axe X porte les jours et les heures", () => {
  const ticks = xTicks("2026-08-20", 3, 64, 300);
  assert.ok(ticks.days.some((t) => t.label.startsWith("jeu.")));
  assert.ok(ticks.days.some((t) => t.label.startsWith("ven.")));
  assert.ok(ticks.hours.some((t) => t.label === "00h"));
  assert.ok(ticks.hours.some((t) => t.label === "12h"));
});

const SAMPLE = {
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
};

test("la flèche graphique pointe à dir + 180°", () => {
  assert.equal(arrowRotation(0), 180);
  assert.equal(arrowRotation(40), 220);
  assert.equal(arrowRotation(220), 40);
  const svg = buildChartSvg(SAMPLE, "2026-08-20", 1, 400, { primarySet: "ICONGFS" });
  assert.match(svg, /rotate\(220\)/);
  assert.match(svg, /rotate\(20\)/);
});

test("journée : heures entre vent et nébulosité, un point par heure, échelles 0-100 et mm", () => {
  const svg = buildChartSvg(SAMPLE, "2026-08-20", 1, 400, { primarySet: "ICONGFS" });
  assert.match(svg, /class="hour-dot"/);
  assert.equal((svg.match(/class="hour-dot"/g) || []).length, 24);
  assert.match(svg, /néb\. %/);
  assert.match(svg, />100</);
  assert.match(svg, />mm</);
  const hourIndex = svg.indexOf("00h");
  const nebIndex = svg.indexOf("néb. %");
  assert.ok(hourIndex > 0 && nebIndex > hourIndex);
  const neb = svg.match(/translate\(([0-9.]+) [0-9.]+\) rotate\(-90\)"[^>]*>néb\. %</);
  const mm = svg.match(/translate\(([0-9.]+) [0-9.]+\) rotate\(-90\)"[^>]*>mm</);
  assert.ok(neb, "néb. % doit être une légende verticale à gauche");
  assert.ok(mm, "mm doit être une légende verticale à droite");
  assert.ok(Number(neb[1]) <= 12, `néb. % trop à droite: ${neb[1]}`);
  assert.ok(Number(mm[1]) >= 388, `mm trop à gauche: ${mm[1]}`);
  const plotLeft = Number((svg.match(/<line x1="([0-9.]+)" y1="[^"]+" x2="[^"]+" y2="[^"]+" stroke="#2a2a2a"/) || [])[1]);
  const cloudTick = svg.match(/class="wx-tick" x="([0-9.]+)"[^>]*>100</);
  const precipTick = svg.match(/class="wx-tick" x="([0-9.]+)"[^>]*text-anchor="start"[^>]*>[0-9]+</);
  assert.ok(plotLeft > 70);
  assert.ok(cloudTick && Number(cloudTick[1]) < plotLeft);
  assert.ok(precipTick && Number(precipTick[1]) > plotLeft);
});

test("sur PC AROMEIFS est collé à gauche, loin de la première flèche", () => {
  const svg = buildChartSvg(
    {
      AROMEIFS: [
        {
          valid_at: "2026-08-20T00:00",
          source_model: "AROMEHD",
          mean: 10,
          gust: 14,
          dir: 0,
          precip: 0,
          cloud: 10,
        },
      ],
      ICONGFS: [],
    },
    "2026-08-20",
    1,
    400,
    { primarySet: "AROMEIFS", hideSecondary: true, compactSetLabels: true }
  );
  const label = svg.match(/class="set-label" x="([0-9.]+)"[^>]*>AROMEIFS</);
  assert.ok(label);
  assert.ok(Number(label[1]) <= 3);
  const arrow = svg.match(/translate\(([0-9.]+),/);
  assert.ok(arrow);
  assert.ok(Number(arrow[1]) - Number(label[1]) >= 100);
});

test("le SVG nomme AROMEIFS/ICONGFS, le 25 nds, sans bandes 8/15", () => {
  const svg = buildChartSvg(SAMPLE, "2026-08-20", 1, 400, { primarySet: "ICONGFS" });
  assert.match(svg, /AROMEIFS/);
  assert.match(svg, /ICONGFS/);
  assert.match(svg, />25</);
  assert.doesNotMatch(svg, /rgba\(60,176,67/);
  assert.doesNotMatch(svg, /rgba\(212,176,64/);
  assert.match(svg, /fill-opacity="0.18"/);
  assert.match(svg, new RegExp(`stroke-width="${MEAN_STROKE}"`));
  const legend = legendHtml([SAMPLE.AROMEIFS, SAMPLE.ICONGFS]);
  assert.match(legend, /vent moyen/);
  assert.doesNotMatch(legend, /&gt; 8 nds/);
});

test("masquer la courbe secondaire retire ICONGFS si le principal est AROMEIFS", () => {
  const svg = buildChartSvg(SAMPLE, "2026-08-20", 1, 400, {
    primarySet: "AROMEIFS",
    hideSecondary: true,
  });
  assert.match(svg, /AROMEIFS/);
  assert.doesNotMatch(svg, />ICONGFS</);
});

test("parseValidAt lit l'heure civile sans Date locale", () => {
  const p = parseValidAt("2026-08-20T14:00");
  assert.equal(p.hour, 14);
  assert.equal(p.dayKey, "2026-08-20");
});
