/** Règles d'affichage quotidien. Créneaux : JSON tel quel (seuil 8 nds côté traitement). */

const MUTED = [90, 90, 90];

const TEMP_STOPS = [
  [-5, [230, 236, 242]],
  [0, [180, 210, 230]],
  [10, [40, 90, 160]],
  [20, [70, 150, 170]],
  [25, [196, 168, 90]],
  [30, [196, 168, 90]],
  [38, [224, 120, 48]],
  [40, [216, 48, 48]],
  [45, [200, 74, 212]],
];

const WIND_STOPS = [
  [0, MUTED],
  [8, MUTED],
  [9, [120, 140, 150]],
  [12, [60, 176, 67]],
  [15, [212, 176, 64]],
  [20, [232, 132, 32]],
  [30, [224, 48, 48]],
  [40, [200, 74, 212]],
];

const GUST_STOPS = [
  [0, MUTED],
  [12, MUTED],
  [15, [120, 140, 150]],
  [18, [60, 176, 67]],
  [22, [212, 176, 64]],
  [28, [232, 132, 32]],
  [35, [224, 48, 48]],
  [45, [200, 74, 212]],
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpRgb(a, b, t) {
  return [
    Math.round(lerp(a[0], b[0], t)),
    Math.round(lerp(a[1], b[1], t)),
    Math.round(lerp(a[2], b[2], t)),
  ];
}

function rgbCss(rgb) {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function colorFromStops(value, stops) {
  if (value == null || Number.isNaN(value)) return rgbCss(MUTED);
  const minV = stops[0][0];
  const maxV = stops[stops.length - 1][0];
  const v = Math.min(maxV, Math.max(minV, value));
  for (let i = 1; i < stops.length; i += 1) {
    const [x1, c1] = stops[i - 1];
    const [x2, c2] = stops[i];
    if (v <= x2) {
      const t = x2 === x1 ? 0 : (v - x1) / (x2 - x1);
      return rgbCss(lerpRgb(c1, c2, t));
    }
  }
  return rgbCss(stops[stops.length - 1][1]);
}

function slotDurationHours(day) {
  if (!day || day.slot_start_h == null || day.slot_end_h == null) return 0;
  return day.slot_end_h - day.slot_start_h;
}

function isUsableSession(day) {
  if (!day) return false;
  const windOk = day.mean_max_kt > 8 || day.gust_at_mean_max_kt > 15;
  return windOk && slotDurationHours(day) >= 3;
}

function windColor(kt) {
  return colorFromStops(kt, WIND_STOPS);
}

function gustColor(kt) {
  return colorFromStops(kt, GUST_STOPS);
}

function tempColor(c) {
  return colorFromStops(c, TEMP_STOPS);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    slotDurationHours,
    isUsableSession,
    windColor,
    gustColor,
    tempColor,
    colorFromStops,
    WIND_STOPS,
    TEMP_STOPS,
    MUTED,
  };
}
