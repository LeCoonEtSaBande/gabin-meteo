const test = require("node:test");
const assert = require("node:assert/strict");
const { parseCsv } = require("./csv.js");
const { mapsUrl } = require("./courbes.js");
const fs = require("node:fs");
const path = require("node:path");

test("spots_specifications expose les liens Excenevex et les champs texte", () => {
  const csv = fs.readFileSync(
    path.join(__dirname, "..", "assets", "spots_specs", "spots_specifications.csv"),
    "utf8"
  );
  const rows = parseCsv(csv);
  const excenevex = rows.find((row) => row.spot_key === "excenevex");
  assert.ok(excenevex);
  assert.match(excenevex.link_windguru, /^https:\/\/www\.windguru\.cz\/179$/);
  assert.match(excenevex.link_webcam, /^https:\/\//);
  assert.match(excenevex.link_anemometer, /^https:\/\//);
  assert.ok(excenevex.display_wind_requirements.includes("Bise"));
  assert.ok(excenevex.display_spot_infos.includes("mini-golf"));
  const maps = mapsUrl(excenevex.Latitude_mise_a_leau, excenevex.Longitude_mise_a_leau);
  assert.match(maps, /46\.3488/);

  const messery = rows.find((row) => row.spot_key === "messery");
  assert.equal(messery.link_windguru, "");
  assert.equal(messery.zone_key, "leman_grand_lac");
});

test("zones_specifications nomme Léman Grand Lac", () => {
  const csv = fs.readFileSync(
    path.join(__dirname, "..", "assets", "spots_specs", "zones_specifications.csv"),
    "utf8"
  );
  const rows = parseCsv(csv);
  const zone = rows.find((row) => row.zone_key === "leman_grand_lac");
  assert.equal(zone.display_name, "Leman - Grand Lac (Yvoire)");
});
