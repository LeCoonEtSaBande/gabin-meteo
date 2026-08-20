const test = require("node:test");
const assert = require("node:assert/strict");
const { slotDurationHours, isUsableSession, windColor } = require("./session.js");

test("10h-13h compte 3 heures", () => {
  assert.equal(slotDurationHours({ slot_start_h: 10, slot_end_h: 13 }), 3);
});

test("créneau d'une heure ignoré même avec du vent", () => {
  assert.equal(
    isUsableSession({
      mean_max_kt: 18,
      gust_at_mean_max_kt: 22,
      slot_start_h: 16,
      slot_end_h: 18,
    }),
    false
  );
});

test("session affichée si moyen > 8 et durée >= 3 h", () => {
  assert.equal(
    isUsableSession({
      mean_max_kt: 9,
      gust_at_mean_max_kt: 11,
      slot_start_h: 11,
      slot_end_h: 14,
    }),
    true
  );
});

test("session affichée si rafales > 15 même avec un moyen faible", () => {
  assert.equal(
    isUsableSession({
      mean_max_kt: 7,
      gust_at_mean_max_kt: 16,
      slot_start_h: 10,
      slot_end_h: 13,
    }),
    true
  );
});

test("pic 8 nds / 15 rafales sur 3 h ignoré (seuils stricts)", () => {
  assert.equal(
    isUsableSession({
      mean_max_kt: 8,
      gust_at_mean_max_kt: 15,
      slot_start_h: 10,
      slot_end_h: 13,
    }),
    false
  );
});

test("vent <= 8 nds reste muet (gris)", () => {
  assert.equal(windColor(8), "rgb(90, 90, 90)");
  assert.notEqual(windColor(15), "rgb(90, 90, 90)");
});
