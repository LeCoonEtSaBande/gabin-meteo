const test = require("node:test");
const assert = require("node:assert/strict");
const { slotDurationHours, isUsableSession, windArrowDeg, windColor } = require("./session.js");

test("10h-13h compte 3 heures", () => {
  assert.equal(slotDurationHours({ slot_start_h: 10, slot_end_h: 13 }), 3);
});

test("flèche : pointe vers où ça souffle, pas d'où ça vient", () => {
  assert.equal(windArrowDeg(0), 180);
  assert.equal(windArrowDeg(180), 0);
  assert.equal(windArrowDeg(207), 27);
  assert.equal(windArrowDeg(14), 194);
});

test("sans slot_label la puce reste muette même avec du vent", () => {
  assert.equal(
    isUsableSession({
      mean_max_kt: 18,
      gust_at_mean_max_kt: 22,
      slot_start_h: null,
      slot_end_h: null,
      slot_label: "",
    }),
    false
  );
});

test("puce visible dès que le traitement a écrit un créneau", () => {
  assert.equal(
    isUsableSession({
      mean_max_kt: 9,
      gust_at_mean_max_kt: 11,
      slot_start_h: 11,
      slot_end_h: 14,
      slot_label: "(11h-14h)",
    }),
    true
  );
  assert.equal(
    isUsableSession({
      mean_max_kt: 7,
      gust_at_mean_max_kt: 16,
      slot_start_h: 10,
      slot_end_h: 13,
      slot_label: "(10h-13h)",
    }),
    true
  );
});

test("vent <= 8 nds reste muet (gris)", () => {
  assert.equal(windColor(8), "rgb(90, 90, 90)");
  assert.notEqual(windColor(15), "rgb(90, 90, 90)");
});
