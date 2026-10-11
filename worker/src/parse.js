/**
 * Lecture des deux sources de balises et conversion vers le format commun du
 * Worker : un point = horodatage UTC, vent moyen et rafale en nœuds,
 * provenance en degrés. Fonctions pures, testées par `test/parse.test.js`.
 */

export const KMH_PER_KN = 1.852;
export const MS_PER_KN = 1.852 / 3.6;

export const SOURCES = ["MeteoSuisse", "MeteoFrance"];

const PARIS_PARTS = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Paris",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

/** Horodatage UTC → `AAAA-MM-JJ` du jour en cours à Paris. */
export function parisDayKey(ms) {
  const parts = Object.fromEntries(
    PARIS_PARTS.formatToParts(new Date(ms)).map((part) => [part.type, part.value])
  );
  return `${parts.year}-${parts.month}-${parts.day}`;
}

/** Parseur CSV `;` minimal, partagé par les deux sources et par les fiches. */
export function parseCsv(text) {
  const lines = String(text || "")
    .replace(/\r/g, "")
    .split("\n")
    .filter((line) => line.trim());
  if (!lines.length) return [];
  const header = lines[0].split(";").map((name) => name.trim());
  return lines.slice(1).map((line) => {
    const cells = line.split(";");
    const row = {};
    header.forEach((name, i) => {
      row[name] = (cells[i] ?? "").trim();
    });
    return row;
  });
}

function numberOrNull(raw) {
  const text = String(raw ?? "").trim();
  if (!text) return null;
  const value = Number(text);
  return Number.isFinite(value) ? value : null;
}

function round(value, digits = 2) {
  if (value == null) return null;
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

/** `JJ.MM.AAAA HH:MM` (UTC) des fichiers MétéoSuisse → millisecondes. */
export function parseSwissTimestampUtc(raw) {
  const match = /^(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2})$/.exec(String(raw || "").trim());
  if (!match) return null;
  const [, dd, mm, yyyy, hh, mi] = match.map(Number);
  return Date.UTC(yyyy, mm - 1, dd, hh, mi);
}

function isoUtc(ms) {
  return new Date(ms).toISOString().replace(/\.\d{3}Z$/, "Z");
}

function point(ms, meanKn, gustKn, dir) {
  return {
    t: isoUtc(ms),
    mean_kt: round(meanKn),
    gust_kt: round(gustKn == null ? meanKn : gustKn),
    dir_deg: dir == null ? null : Math.round(((dir % 360) + 360) % 360),
  };
}

export function meteoSuisseUrl(sourceId) {
  const id = String(sourceId || "").toLowerCase();
  return `https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/${id}/ogd-smn_${id}_t_now.csv`;
}

/**
 * Fichier 10 min MétéoSuisse (jour UTC en cours) : `fu3010z0` vent moyen 10 min
 * et `fu3010z1` rafale (pointe 1 s) en km/h, `dkl010z0` provenance en degrés.
 */
export function parseMeteoSuisse(text) {
  const points = [];
  for (const row of parseCsv(text)) {
    const ms = parseSwissTimestampUtc(row.reference_timestamp);
    const meanKmh = numberOrNull(row.fu3010z0);
    if (ms == null || meanKmh == null) continue;
    const gustKmh = numberOrNull(row.fu3010z1);
    points.push(
      point(
        ms,
        meanKmh / KMH_PER_KN,
        gustKmh == null ? null : gustKmh / KMH_PER_KN,
        numberOrNull(row.dkl010z0)
      )
    );
  }
  return points.sort((a, b) => (a.t < b.t ? -1 : 1));
}

/** Paquet 24 h au pas de 6 min pour une station (API DPPaquetObs). */
export function meteoFranceUrl(sourceId, base = "https://public-api.meteofrance.fr/public/DPPaquetObs/v1") {
  return `${base}/paquet/infrahoraire-6m?id_station=${encodeURIComponent(sourceId)}&format=csv`;
}

/**
 * Paquet 6 min Météo-France : `ff` vent moyen 10 min et `fxi10` rafale maximale
 * instantanée sur 10 min en m/s, `dd` provenance de `ff` (`dxi10` en secours).
 */
export function parseMeteoFrance(text) {
  const points = [];
  for (const row of parseCsv(text)) {
    const stamp = row.validity_time || row.reference_time;
    const ms = Date.parse(String(stamp || "").trim());
    const meanMs = numberOrNull(row.ff);
    if (!Number.isFinite(ms) || meanMs == null) continue;
    const gustMs = numberOrNull(row.fxi10);
    const dir = numberOrNull(row.dd);
    points.push(
      point(
        ms,
        meanMs / MS_PER_KN,
        gustMs == null ? null : gustMs / MS_PER_KN,
        dir == null ? numberOrNull(row.dxi10) : dir
      )
    );
  }
  return points.sort((a, b) => (a.t < b.t ? -1 : 1));
}

/** Ne garde que les mesures tombant dans la journée `dayKey` à Paris. */
export function pointsForDay(points, dayKey) {
  return (points || []).filter((p) => parisDayKey(Date.parse(p.t)) === dayKey);
}

/**
 * Comme `pointsForDay`, mais une journée encore vide retombe sur la dernière
 * mesure connue. Entre minuit à Paris et la première mesure du jour, la vignette
 * doit continuer d'afficher la soirée de la veille plutôt que « indisponible ».
 */
export function pointsForDayOrLast(points, dayKey) {
  const day = pointsForDay(points, dayKey);
  if (day.length || !points?.length) return day;
  return [points[points.length - 1]];
}

const SOURCE_ID_PATTERNS = {
  MeteoSuisse: /^[A-Za-z]{3}$/,
  MeteoFrance: /^\d{8}$/,
};

/**
 * Fiches `balises_specifications.csv` → liste de balises interrogeables. Les
 * identifiants sont filtrés sur leur forme : le Worker ne relaie que des
 * stations plausibles, jamais une URL arbitraire.
 */
export function parseSpecs(text, maxStations = 40) {
  const stations = [];
  for (const row of parseCsv(text)) {
    const key = row.station_key;
    const source = row.source;
    const id = row.source_id;
    if (!key || !SOURCE_ID_PATTERNS[source]) continue;
    if (!SOURCE_ID_PATTERNS[source].test(String(id || ""))) continue;
    stations.push({ station_key: key, source, source_id: id });
    if (stations.length >= maxStations) break;
  }
  return stations;
}

const LOCALHOST = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

/** Origine autorisée : le site publié, plus un serveur local pour les tests. */
export function isAllowedOrigin(origin, allowed) {
  if (!origin) return false;
  if (allowed.includes(origin)) return true;
  return LOCALHOST.test(origin);
}
