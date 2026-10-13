/**
 * Lecture des deux sources de balises et conversion vers le format commun du
 * Worker : un point = horodatage UTC, vent moyen et rafale en nœuds,
 * provenance en degrés. Fonctions pures, testées par `test/parse.test.js`.
 */

export const KMH_PER_KN = 1.852;
export const MS_PER_KN = 1.852 / 3.6;
export const HOUR_MS = 3600000;
export const MINUTE_MS = 60000;

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

function parisFields(ms) {
  const parts = Object.fromEntries(
    PARIS_PARTS.formatToParts(new Date(ms)).map((part) => [part.type, part.value])
  );
  return { day: `${parts.year}-${parts.month}-${parts.day}`, hour: Number(parts.hour) };
}

/** Horodatage UTC → `AAAA-MM-JJ` du jour en cours à Paris. */
export function parisDayKey(ms) {
  return parisFields(ms).day;
}

/**
 * Instant UTC où le jour `dayKey` atteint `hour` à Paris. Les minutes d'une
 * heure UTC et d'une heure de Paris coïncident, l'écart est toujours un nombre
 * entier d'heures : il suffit de balayer les heures UTC autour de la date, ce
 * qui reste juste les jours de changement d'heure.
 */
export function parisHourMs(dayKey, hour) {
  const [year, month, day] = String(dayKey || "").split("-").map(Number);
  if (!year || !month || !day || !Number.isFinite(hour)) return null;
  const start = Date.UTC(year, month - 1, day) - 2 * HOUR_MS;
  for (let ms = start; ms <= start + 27 * HOUR_MS; ms += HOUR_MS) {
    const parts = parisFields(ms);
    if (parts.day === dayKey && parts.hour === hour) return ms;
  }
  return null;
}

/**
 * Parseur CSV `;` minimal, partagé par les deux sources et par les fiches.
 *
 * `keep`, facultatif, reçoit un accesseur par nom de colonne et tranche avant
 * qu'on alloue la ligne. Sur un paquet Météo-France de 24 h au pas de 6 min,
 * quatre lignes sur cinq partent sans qu'on ait rien construit : à ce volume,
 * le parsing complet coûtait la moitié des 10 ms de CPU du plan gratuit.
 */
export function parseCsv(text, keep) {
  const lines = String(text || "")
    .replace(/\r/g, "")
    .split("\n")
    .filter((line) => line.trim());
  if (!lines.length) return [];
  const header = lines[0].split(";").map((name) => name.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i += 1) {
    const cells = lines[i].split(";");
    const cell = (name) => (cells[header.indexOf(name)] ?? "").trim();
    if (keep && !keep(cell)) continue;
    const row = {};
    header.forEach((name, j) => {
      row[name] = (cells[j] ?? "").trim();
    });
    rows.push(row);
  }
  return rows;
}

/**
 * En-tête et dernière ligne du CSV, sans le redécouper. La grille décimée perd
 * jusqu'à une demi-heure de fraîcheur ; la vignette, elle, doit montrer la
 * mesure la plus récente que la station ait publiée.
 */
export function lastCsvRecord(text) {
  const body = String(text || "").replace(/\s+$/, "");
  const head = body.indexOf("\n");
  if (head < 0) return "";
  return `${body.slice(0, head)}\n${body.slice(body.lastIndexOf("\n") + 1)}`.replace(/\r/g, "");
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
export function parseMeteoSuisse(text, keepStamp) {
  const points = [];
  const rows = parseCsv(
    text,
    keepStamp && ((cell) => keepStamp(parseSwissTimestampUtc(cell("reference_timestamp"))))
  );
  for (const row of rows) {
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

export const METEOFRANCE_BASE = "https://public-api.meteofrance.fr/public/DPObs/v2";
export const METEOFRANCE_PAQUET_BASE = "https://public-api.meteofrance.fr/public/DPPaquetObs/v1";

/** Dernière mesure disponible d'une station, au pas de 6 min (API DPObs). */
export function meteoFranceLatestUrl(sourceId, base = METEOFRANCE_BASE) {
  return `${base}/station/infrahoraire-6m?id_station=${encodeURIComponent(sourceId)}&format=csv`;
}

/**
 * Les 24 h écoulées d'une station au pas de 6 min, en un appel (API Paquet
 * Observation). C'est ce que DPObs ne sait pas faire : là-bas, une requête rend
 * une mesure, et la journée d'une station coûtait des dizaines d'appels.
 */
export function meteoFrancePaquetUrl(sourceId, base = METEOFRANCE_PAQUET_BASE) {
  return `${base}/paquet/infrahoraire-6m?id_station=${encodeURIComponent(sourceId)}&format=csv`;
}

/* `ff` est le vent moyen 10 min en m/s dans les deux pas de temps ; la rafale et
 * sa direction changent de nom (`raf10`/`ddraf10` à 6 min, `raf`/`ddraf` à
 * l'heure). `fxi10`/`dxi10` sont ceux des paquets. */
const MF_GUST_FIELDS = ["raf10", "raf", "fxi10"];
const MF_GUST_DIR_FIELDS = ["ddraf10", "ddraf", "dxi10"];
const MF_STAMP_FIELDS = ["validity_time", "reference_time"];

function firstCell(cell, fields) {
  for (const name of fields) {
    const value = cell(name);
    if (value) return value;
  }
  return "";
}

function firstNumber(row, fields) {
  for (const name of fields) {
    const value = numberOrNull(row[name]);
    if (value != null) return value;
  }
  return null;
}

/**
 * Convention OMM reprise par Météo-France : `dd = 360` est le plein nord et
 * `dd = 0` le calme, pas le nord. Un vent nul n'a pas de provenance ; reste
 * celle de la rafale, quand la station en relève une.
 */
function meteoFranceDirection(row) {
  const mean = numberOrNull(row.dd);
  if (mean != null && mean !== 0) return mean;
  return firstNumber(row, MF_GUST_DIR_FIELDS);
}

/** CSV Météo-France (mesure seule ou paquet) → points en nœuds, provenance en degrés. */
export function parseMeteoFrance(text, keepStamp) {
  const points = [];
  const rows = parseCsv(
    text,
    keepStamp && ((cell) => keepStamp(Date.parse(firstCell(cell, MF_STAMP_FIELDS))))
  );
  for (const row of rows) {
    const stamp = row.validity_time || row.reference_time;
    const ms = Date.parse(String(stamp || "").trim());
    const meanMs = numberOrNull(row.ff);
    if (!Number.isFinite(ms) || meanMs == null) continue;
    const gustMs = firstNumber(row, MF_GUST_FIELDS);
    points.push(
      point(ms, meanMs / MS_PER_KN, gustMs == null ? null : gustMs / MS_PER_KN, meteoFranceDirection(row))
    );
  }
  return points.sort((a, b) => (a.t < b.t ? -1 : 1));
}

/**
 * Grille de temps d'une balise pour la journée `dayKey` : le pas commun, et la
 * plage où la fiche en demande un plus serré. Les bornes fines sont calculées
 * une fois par requête, pour que le tri des points reste une comparaison.
 */
export function timeGrid(station, dayKey, coarseStepMin) {
  const grid = { coarseStepMin, fine: null };
  const step = station?.fine_step_min;
  if (!step) return grid;
  const from = parisHourMs(dayKey, station.fine_from_hour);
  const to = parisHourMs(dayKey, station.fine_to_hour);
  if (from == null || to == null || to <= from) return grid;
  grid.fine = { from, to, stepMin: step };
  return grid;
}

/**
 * Un horodatage tombe-t-il sur la grille ? 30 minutes est le seul pas qui
 * tombe juste à la fois sur les 6 minutes de Météo-France et les 10 minutes de
 * MétéoSuisse : décimer ne déplace donc aucune mesure.
 */
export function onGrid(ms, grid) {
  if (!Number.isFinite(ms)) return false;
  const minute = Math.floor(ms / MINUTE_MS) % 60;
  const fine = grid?.fine;
  if (fine && ms >= fine.from && ms < fine.to) return minute % fine.stepMin === 0;
  return minute % grid.coarseStepMin === 0;
}

/** Fusionne plusieurs séries : à horodatage égal, la dernière passée gagne. */
export function mergePoints(...series) {
  const byStamp = new Map();
  for (const points of series) {
    for (const item of points || []) byStamp.set(item.t, item);
  }
  return [...byStamp.values()].sort((a, b) => (a.t < b.t ? -1 : 1));
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

/** Un pas fin doit diviser l'heure, sinon la grille ne retombe pas sur ses pieds. */
function fineSpec(row) {
  const step = Number(row.pas_fin_min);
  const from = Number(row.pas_fin_debut_h);
  const to = Number(row.pas_fin_fin_h);
  if (!Number.isInteger(step) || step < 1 || step > 60 || 60 % step !== 0) return null;
  if (!Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to > 24 || to <= from) {
    return null;
  }
  return { fine_step_min: step, fine_from_hour: from, fine_to_hour: to };
}

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
    stations.push({ station_key: key, source, source_id: id, ...fineSpec(row) });
    if (stations.length >= maxStations) break;
  }
  return stations;
}

/**
 * Noms des API inscrites dans la clé Météo-France. Les abonnements sont encodés
 * dans le jeton : les lire dit si le Paquet est accessible sans dépenser un
 * appel, et sans jamais sortir la clé du Worker.
 */
function jwtPayload(token) {
  const part = String(token || "").split(".")[1];
  if (!part) return null;
  try {
    const base64 = part.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
    const bytes = Uint8Array.from(atob(padded), (char) => char.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    // Jeton illisible : on ne sait pas, et /health le dira ainsi.
    return null;
  }
}

export function subscribedApis(token) {
  const apis = jwtPayload(token)?.subscribedAPIs;
  if (!Array.isArray(apis)) return [];
  return apis.map((api) => String(api?.name ?? api)).filter(Boolean);
}

/** Date d'expiration de la clé (AAAA-MM-JJ), ou null si le jeton ne la porte pas. */
export function keyExpiry(token) {
  const exp = Number(jwtPayload(token)?.exp);
  if (!Number.isFinite(exp) || exp <= 0) return null;
  return new Date(exp * 1000).toISOString().slice(0, 10);
}

const LOCALHOST = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

/** Origine autorisée : le site publié, plus un serveur local pour les tests. */
export function isAllowedOrigin(origin, allowed) {
  if (!origin) return false;
  if (allowed.includes(origin)) return true;
  return LOCALHOST.test(origin);
}
