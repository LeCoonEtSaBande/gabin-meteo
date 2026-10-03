const test = require("node:test");
const assert = require("node:assert/strict");
const { parseCsv } = require("./csv.js");
const {
  isDayHour,
  mapsUrl,
  addDays,
  sliceHorizon,
  indexCurves,
  primaryCurveSet,
  secondaryCurveSet,
  visibleSets,
  mergeWxMax,
  xTicks,
  slotCaption,
  pickNearestWind,
  buildChartSvg,
  legendHtml,
  parseValidAt,
  MEAN_STROKE,
  arrowRotation,
  WX_CLOUD,
  WX_CLOUD_OPACITY,
  aboveThresholdRuns,
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

test("nébulosité : cloud_cover_display_pct prioritaire sur cloud_cover_max_pct", () => {
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
      cloud_cover_display_pct: "20",
      cloud_cover_max_pct: "80",
    },
  ]);
  assert.equal(indexed.AROMEIFS.excenevex[0].cloud, 20);
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

test("l'axe X : heures en journée, midi à 3 jours, coupures de jour à 5 jours", () => {
  const day = xTicks("2026-08-20", 1, 64, 300);
  assert.ok(day.hours.some((t) => t.label === "00h"));
  assert.ok(day.hours.some((t) => t.label === "12h"));
  assert.equal(day.noonDots.length, 0);
  assert.equal(day.dayBreaks.length, 0);

  const three = xTicks("2026-08-20", 3, 64, 300);
  assert.equal(three.hours.length, 0);
  assert.equal(three.noonDots.length, 3);
  assert.equal(three.dayBreaks.length, 2);
  assert.ok(three.days.some((t) => t.label.startsWith("jeu.")));
  assert.ok(three.days.some((t) => t.label.startsWith("ven.")));

  const five = xTicks("2026-08-20", 5, 64, 300);
  assert.equal(five.hours.length, 0);
  assert.equal(five.noonDots.length, 0);
  assert.equal(five.dayBreaks.length, 4);
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
  const svg = buildChartSvg(SAMPLE, "2026-08-20", 1, 400, {
    primarySet: "ICONGFS",
    showSecondary: true,
  });
  assert.match(svg, /rotate\(220\)/);
  assert.match(svg, /rotate\(20\)/);
});

test("journée : heures entre vent et nuages, un point par heure, échelles 0-100 et mm", () => {
  const svg = buildChartSvg(SAMPLE, "2026-08-20", 1, 400, { primarySet: "ICONGFS" });
  assert.match(svg, /class="hour-dot"/);
  const dots = [...svg.matchAll(/class="hour-dot" cx="([0-9.]+)"/g)].map((m) => Number(m[1]));
  assert.equal(dots.length, 16, "un point par heure de 6 h à 21 h, aucun la nuit");
  const geom = JSON.parse(svg.match(/data-geom="([^"]+)"/)[1].replace(/&quot;/g, '"'));
  const hourX = (h) => geom.x0 + (h / 24) * geom.innerW;
  assert.ok(Math.abs(dots[0] - hourX(6)) < 0.2);
  assert.ok(Math.abs(dots[dots.length - 1] - hourX(21)) < 0.2);
  assert.match(svg, /Nuages \(%\)/);
  assert.match(svg, />100</);
  assert.match(svg, /Pluie \(mm\)/);
  const hourIndex = svg.indexOf("00h");
  const nebIndex = svg.indexOf("Nuages (%)");
  assert.ok(hourIndex > 0 && nebIndex > hourIndex);
  const neb = svg.match(/translate\(([0-9.]+) [0-9.]+\) rotate\(-90\)"[^>]*>Nuages \(%\)</);
  const mm = svg.match(/translate\(([0-9.]+) [0-9.]+\) rotate\(-90\)"[^>]*>Pluie \(mm\)</);
  assert.ok(neb, "Nuages (%) doit être une légende verticale à gauche");
  assert.ok(mm, "Pluie (mm) doit être une légende verticale à droite");
  assert.ok(Number(neb[1]) <= 12, `Nuages (%) trop à droite: ${neb[1]}`);
  assert.ok(Number(mm[1]) >= 388, `Pluie (mm) trop à gauche: ${mm[1]}`);
  const plotLeft = Number((svg.match(/<line x1="([0-9.]+)" y1="[^"]+" x2="[^"]+" y2="[^"]+" stroke="#2a2a2a"/) || [])[1]);
  const cloudTick = svg.match(/class="wx-tick" x="([0-9.]+)"[^>]*>100</);
  const precipTick = svg.match(/class="wx-tick" x="([0-9.]+)"[^>]*text-anchor="start"[^>]*>[0-9]+</);
  assert.ok(plotLeft >= 45);
  assert.ok(cloudTick && Number(cloudTick[1]) < plotLeft);
  assert.ok(precipTick && Number(precipTick[1]) > plotLeft);
  assert.match(svg, /class="kt-10"/);
  assert.doesNotMatch(svg, /class="kt-8"/);
  assert.match(svg, /class="kt-grid"/);
  assert.match(svg, />5</);
  assert.match(svg, />10</);
  assert.match(svg, /class="wx-mid"/);
  assert.match(svg, /class="wx-tick wx-tick-precip-mid"/);
  assert.match(svg, /wx-tick-precip-mid"[^>]*>0\.5</);
});

test("le nom de courbe ne touche pas la première flèche, zone de tracé large", () => {
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
    { primarySet: "AROMEIFS", compactSetLabels: true }
  );
  const label = svg.match(/class="set-label" x="([0-9.]+)"[^>]*>AROMEIFS</);
  assert.ok(label);
  assert.ok(Number(label[1]) <= 3);
  const arrow = svg.match(/translate\(([0-9.]+),/);
  assert.ok(arrow);
  // « AROMEIFS » en monospace 8 px ≈ 39 px de large, flèche de ±3,2 px.
  assert.ok(Number(arrow[1]) - Number(label[1]) >= 48);
  const geom = JSON.parse(svg.match(/data-geom="([^"]+)"/)[1].replace(/&quot;/g, '"'));
  assert.ok(geom.innerW >= 300, `zone de tracé trop étroite : ${geom.innerW}`);
});

test("nds est une unité verticale à gauche, pas collée au max de l'axe", () => {
  const svg = buildChartSvg(SAMPLE, "2026-08-20", 1, 400, { primarySet: "AROMEIFS" });
  const unit = svg.match(
    /class="kt-unit" transform="translate\(([0-9.]+) ([0-9.]+)\) rotate\(-90\)"[^>]*>nds</
  );
  assert.ok(unit, "unité nds verticale à gauche");
  assert.ok(Number(unit[1]) < 20, "nds collé au bord gauche comme Nuages (%)");
  const topTick = svg.match(/y="([0-9.]+)" text-anchor="end"[^>]*>25</);
  assert.ok(topTick);
  assert.notEqual(Number(unit[2]).toFixed(1), Number(topTick[1]).toFixed(1));
  assert.doesNotMatch(svg, /text-anchor="end"[^>]*>nds</);
});

test("le SVG nomme AROMEIFS/ICONGFS, le 25 nds, sans bandes 8/15", () => {
  const svg = buildChartSvg(SAMPLE, "2026-08-20", 1, 400, {
    primarySet: "ICONGFS",
    showSecondary: true,
  });
  assert.match(svg, /AROMEIFS/);
  assert.match(svg, /ICONGFS/);
  assert.match(svg, />25</);
  assert.doesNotMatch(svg, /rgba\(60,176,67/);
  assert.doesNotMatch(svg, /rgba\(212,176,64/);
  assert.match(svg, /fill-opacity="0.18"/);
  assert.match(svg, new RegExp(`stroke-width="${MEAN_STROKE}"`));
  const legend = legendHtml([SAMPLE.AROMEIFS, SAMPLE.ICONGFS]);
  assert.match(legend, /vent moyen/);
  assert.match(legend, /pointillé = rafales/);
  assert.doesNotMatch(legend, /plage/);
  assert.doesNotMatch(legend, /&gt; 8 nds/);
});

test("par défaut seule la courbe principale est dessinée", () => {
  const svg = buildChartSvg(SAMPLE, "2026-08-20", 1, 400, { primarySet: "AROMEIFS" });
  assert.match(svg, /AROMEIFS/);
  assert.doesNotMatch(svg, />ICONGFS</);
});

test("afficher la courbe secondaire ajoute ICONGFS si le principal est AROMEIFS", () => {
  const svg = buildChartSvg(SAMPLE, "2026-08-20", 1, 400, {
    primarySet: "AROMEIFS",
    showSecondary: true,
  });
  assert.match(svg, /AROMEIFS/);
  assert.match(svg, />ICONGFS</);
});

test("masquer le principal ne laisse que le secondaire, nébulosité et pluie incluses", () => {
  assert.deepEqual(visibleSets("AROMEIFS", { showPrimary: false, showSecondary: true }), ["ICONGFS"]);
  const svg = buildChartSvg(SAMPLE, "2026-08-20", 1, 400, {
    primarySet: "AROMEIFS",
    showPrimary: false,
    showSecondary: true,
  });
  assert.doesNotMatch(svg, />AROMEIFS</);
  assert.match(svg, />ICONGFS</);
  assert.match(svg, /Nuages 90 %/);
  assert.match(svg, /Pluie 1\.0 mm/);
  assert.doesNotMatch(svg, /Nuages 50 %/);
  assert.doesNotMatch(svg, /Pluie 0\.4 mm/);
});

test("principal seul : nuages et pluie du jeu AROMEIFS", () => {
  const svg = buildChartSvg(SAMPLE, "2026-08-20", 1, 400, { primarySet: "AROMEIFS" });
  assert.match(svg, /Nuages 50 %/);
  assert.match(svg, /Pluie 0\.4 mm/);
  assert.doesNotMatch(svg, /Nuages 90 %/);
  assert.doesNotMatch(svg, /Pluie 1\.0 mm/);
});

test("3 jours : midi marqué, pas d'heures ; 5 jours : seulement les jours", () => {
  const three = buildChartSvg(SAMPLE, "2026-08-20", 3, 400, { primarySet: "AROMEIFS" });
  assert.match(three, /class="noon-dot"/);
  assert.equal((three.match(/class="noon-dot"/g) || []).length, 3);
  assert.match(three, /class="day-break"/);
  assert.doesNotMatch(three, /class="hour-dot"/);
  assert.doesNotMatch(three, />00h</);
  const five = buildChartSvg(SAMPLE, "2026-08-20", 5, 400, { primarySet: "AROMEIFS" });
  assert.doesNotMatch(five, /class="noon-dot"/);
  assert.equal((five.match(/class="day-break"/g) || []).length, 4);
});

test("le survol choisit le créneau le plus proche, flèche dir+180°", () => {
  assert.equal(slotCaption("2026-08-20T14:00", 1), "14h");
  assert.equal(slotCaption("2026-08-21T09:00", 3), "ven. 21 09h");
  const geom = { x0: 80, innerW: 240, windTop: 20, windH: 100, yWind0: 120, maxKt: 30 };
  const hit = pickNearestWind(
    [{ name: "AROMEIFS", points: SAMPLE.AROMEIFS }],
    "2026-08-20",
    1,
    geom,
    80 + (10 / 24) * 240,
    120 - (12 / 30) * 100
  );
  assert.equal(hit.point.valid_at, "2026-08-20T10:00");
  assert.equal(hit.point.mean, 12);
  assert.equal(arrowRotation(hit.point.dir), 220);
});

test("parseValidAt lit l'heure civile sans Date locale", () => {
  const p = parseValidAt("2026-08-20T14:00");
  assert.equal(p.hour, 14);
  assert.equal(p.dayKey, "2026-08-20");
});

test("créneaux nuages : même largeur horaire, gris quel que soit le modèle", () => {
  const hourly = { AROMEIFS: [], ICONGFS: [] };
  for (let hour = 0; hour < 24 * 5; hour += 1) {
    const day = 20 + Math.floor(hour / 24);
    const h = hour % 24;
    const valid_at = `2026-08-${day}T${String(h).padStart(2, "0")}:00`;
    hourly.AROMEIFS.push({
      valid_at,
      source_model: h < 12 ? "AROMEHD" : "IFS",
      mean: 10,
      gust: 14,
      dir: 0,
      precip: 0,
      cloud: 80,
    });
  }

  for (const nDays of [1, 3, 5]) {
    for (const compact of [false, true]) {
      const svg = buildChartSvg(hourly, "2026-08-20", nDays, 400, {
        primarySet: "AROMEIFS",
        compactSetLabels: compact,
      });
      const geom = JSON.parse(svg.match(/data-geom="([^"]+)"/)[1].replace(/&quot;/g, '"'));
      const clouds = [...svg.matchAll(/class="wx-cloud"[^>]*x="([0-9.]+)"[^>]*width="([0-9.]+)"/g)]
        .map((m) => ({ x: Number(m[1]), w: Number(m[2]) }))
        .sort((a, b) => a.x - b.x);
      assert.ok(clouds.length >= 24, `horizon ${nDays}j sans barres nuages`);
      const widths = [...new Set(clouds.map((c) => c.w.toFixed(1)))];
      assert.equal(widths.length, 1, `créneaux nuages inégaux (${nDays}j, compact=${compact}): ${widths}`);
      const firstX = clouds[0].x;
      const last = clouds[clouds.length - 1];
      const lastRight = last.x + last.w;
      assert.ok(Math.abs(firstX - geom.x0) < 0.2);
      assert.ok(Math.abs(lastRight - (geom.x0 + geom.innerW)) < 0.2);
    }
  }

  const svg = buildChartSvg(hourly, "2026-08-20", 1, 400, { primarySet: "AROMEIFS" });
  const fills = [...svg.matchAll(/class="wx-cloud"[^>]*fill="([^"]+)"[^>]*opacity="([^"]+)"/g)];
  assert.ok(fills.length > 0);
  assert.ok(fills.every((m) => m[1] === WX_CLOUD && m[2] === String(WX_CLOUD_OPACITY)));

  hourly.ICONGFS = hourly.AROMEIFS.map((p) => ({ ...p, source_model: "ICONCH1" }));
  const icon = buildChartSvg(hourly, "2026-08-20", 1, 400, { primarySet: "ICONGFS" });
  const iconFills = [...icon.matchAll(/class="wx-cloud"[^>]*fill="([^"]+)"/g)];
  assert.ok(iconFills.length > 0);
  assert.ok(iconFills.every((m) => m[1] === WX_CLOUD));
});

function windDay(day, means, model = "AROMEHD") {
  return means.map((mean, h) => ({
    valid_at: `${day}T${String(h).padStart(2, "0")}:00`,
    source_model: model,
    mean,
    gust: mean + 8,
    dir: 0,
    precip: 0,
    cloud: 10,
  }));
}

test("zone colorée seulement quand le vent moyen dépasse 10 nds", () => {
  const means = Array.from({ length: 24 }, (_, h) => (h >= 12 && h <= 15 ? 14 : 6));
  const points = windDay("2026-10-08", means);
  const runs = aboveThresholdRuns(points, 10);
  assert.equal(runs.length, 1);
  assert.equal(runs[0][0].mean, 10);
  assert.equal(runs[0][runs[0].length - 1].mean, 10);
  const svg = buildChartSvg({ AROMEIFS: points, ICONGFS: [] }, "2026-10-08", 1, 400, { primarySet: "AROMEIFS" });
  assert.equal((svg.match(/class="wind-fill"/g) || []).length, 1);
  const calm = buildChartSvg(
    { AROMEIFS: windDay("2026-10-08", Array(24).fill(9)), ICONGFS: [] },
    "2026-10-08",
    1,
    400,
    { primarySet: "AROMEIFS" }
  );
  assert.doesNotMatch(calm, /class="wind-fill"/);
});

test("bornes du créneau et pics affichés pour chaque courbe visible", () => {
  const series = {
    AROMEIFS: windDay("2026-10-08", Array.from({ length: 24 }, (_, h) => (h >= 10 && h <= 17 ? 12 + (h === 14) : 4))),
    ICONGFS: windDay("2026-10-08", Array.from({ length: 24 }, (_, h) => (h >= 12 && h <= 20 ? 16 : 5)), "ICONCH1"),
  };
  const chartDays = {
    AROMEIFS: {
      "2026-10-08": {
        slot_start_h: 10, slot_end_h: 17,
        mean_max_kt: 13, mean_max_at: "2026-10-08T14:00",
        gust_max_kt: 21, gust_max_at: "2026-10-08T14:00",
      },
    },
    ICONGFS: {
      "2026-10-08": {
        slot_start_h: 12, slot_end_h: 20,
        mean_max_kt: 16, mean_max_at: "2026-10-08T12:00",
        gust_max_kt: 24, gust_max_at: "2026-10-08T12:00",
      },
    },
  };
  const one = buildChartSvg(series, "2026-10-08", 1, 400, { primarySet: "AROMEIFS", chartDays });
  assert.equal((one.match(/class="slot-bracket"/g) || []).length, 1);
  assert.match(one, /class="slot-start"[^>]*>10h</);
  assert.match(one, /class="slot-end"[^>]*>17h</);
  assert.match(one, /class="peak-label peak-mean"[^>]*>13</);
  assert.match(one, /class="peak-label peak-gust"[^>]*>21</);
  assert.doesNotMatch(one, /class="peak-label peak-mean"[^>]*>16</);

  const both = buildChartSvg(series, "2026-10-08", 1, 400, {
    primarySet: "AROMEIFS",
    showSecondary: true,
    chartDays,
  });
  assert.equal((both.match(/class="slot-bracket"/g) || []).length, 2);
  assert.match(both, /data-set="ICONGFS"[\s\S]*>12h<[\s\S]*>20h</);
  assert.match(both, /class="peak-label peak-mean"[^>]*>16</);
  assert.match(both, /class="peak-label peak-gust"[^>]*>24</);

  const onlySecondary = buildChartSvg(series, "2026-10-08", 1, 400, {
    primarySet: "AROMEIFS",
    showPrimary: false,
    showSecondary: true,
    chartDays,
  });
  assert.equal((onlySecondary.match(/class="slot-bracket"/g) || []).length, 1);
  assert.doesNotMatch(onlySecondary, /class="peak-label peak-mean"[^>]*>13</);

  const none = buildChartSvg(series, "2026-10-08", 1, 400, { primarySet: "AROMEIFS" });
  assert.doesNotMatch(none, /class="slot-bracket"/);
});

test("3 et 5 jours : bornes compactes et pics seulement les jours avec créneau", () => {
  const points = [
    ...windDay("2026-10-08", Array.from({ length: 24 }, (_, h) => (h >= 10 && h <= 22 ? 14 : 4))),
    ...windDay("2026-10-09", Array.from({ length: 24 }, (_, h) => (h >= 7 && h <= 18 ? 14 : 4))),
    ...windDay("2026-10-10", Array(24).fill(5)),
  ];
  const chartDays = {
    AROMEIFS: {
      "2026-10-08": { slot_start_h: 10, slot_end_h: 22, mean_max_kt: 14, mean_max_at: "2026-10-08T12:00", gust_max_kt: 22, gust_max_at: "2026-10-08T12:00" },
      "2026-10-09": { slot_start_h: 7, slot_end_h: 18, mean_max_kt: 14, mean_max_at: "2026-10-09T12:00", gust_max_kt: 22, gust_max_at: "2026-10-09T12:00" },
      "2026-10-10": { slot_start_h: null, slot_end_h: null, mean_max_kt: 5, mean_max_at: "2026-10-10T12:00", gust_max_kt: 13, gust_max_at: "2026-10-10T12:00" },
    },
  };
  const svg = buildChartSvg({ AROMEIFS: points, ICONGFS: [] }, "2026-10-08", 3, 400, { primarySet: "AROMEIFS", chartDays });
  assert.match(svg, /class="slot-range"[^>]*>10-22h</);
  assert.match(svg, /class="slot-range"[^>]*>07-18h</);
  assert.doesNotMatch(svg, /class="slot-start"/);
  assert.equal((svg.match(/class="peak-label peak-mean"[^>]*>14</g) || []).length, 2);
  assert.doesNotMatch(svg, /class="peak-label peak-mean"[^>]*>5</);
  const day = buildChartSvg({ AROMEIFS: points, ICONGFS: [] }, "2026-10-10", 1, 400, { primarySet: "AROMEIFS", chartDays });
  assert.match(day, /class="peak-label peak-mean"[^>]*>5</);
});

test("points de l'axe : jour de 6 h à 21 h inclus, nuit sans point", () => {
  const day = Array.from({ length: 24 }, (_, h) => h).filter(isDayHour);
  assert.deepEqual(day, [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
});
