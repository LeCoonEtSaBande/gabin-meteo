const test = require("node:test");
const assert = require("node:assert/strict");
const { slotDurationHours, clipSlot, isUsableSession, windArrowDeg, windColor } = require("./session.js");

test("10h-13h compte 3 heures", () => {
  assert.equal(slotDurationHours({ slot_start_h: 10, slot_end_h: 13 }), 3);
});

test("flèche : pointe vers où ça souffle, pas d'où ça vient", () => {
  assert.equal(windArrowDeg(0), 180);
  assert.equal(windArrowDeg(180), 0);
  assert.equal(windArrowDeg(207), 27);
  assert.equal(windArrowDeg(14), 194);
});

test("créneau 0 h ou 2 h : puce muette", () => {
  assert.equal(isUsableSession({ slot_start_h: 23, slot_end_h: 23, slot_label: "(23h-23h)" }), false);
  assert.equal(isUsableSession({ slot_start_h: 21, slot_end_h: 23, slot_label: "(21h-23h)" }), false);
  assert.equal(isUsableSession({ slot_start_h: 4, slot_end_h: 6, slot_label: "(04h-06h)" }), false);
});

test("créneau commençant avant 7 h recadré, muet s'il reste < 3 h", () => {
  assert.equal(isUsableSession({ slot_start_h: 5, slot_end_h: 8, slot_label: "(05h-08h)" }), false);
  assert.deepEqual(clipSlot({ slot_start_h: 0, slot_end_h: 14, slot_label: "(00h-14h)" }), {
    start_h: 7,
    end_h: 14,
    label: "(07h-14h)",
  });
});

test("créneau débordant après 22 h recadré, muet s'il reste < 3 h", () => {
  assert.equal(isUsableSession({ slot_start_h: 20, slot_end_h: 23, slot_label: "(20h-23h)" }), false);
  assert.deepEqual(clipSlot({ slot_start_h: 12, slot_end_h: 23, slot_label: "(12h-23h)" }), {
    start_h: 12,
    end_h: 22,
    label: "(12h-22h)",
  });
});

test("sans bornes la puce reste muette même avec un label", () => {
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

test("puce visible pour un créneau ≥ 3 h dans 7 h–22 h", () => {
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
});

test("vent <= 8 nds reste muet (gris)", () => {
  assert.equal(windColor(8), "rgb(90, 90, 90)");
  assert.notEqual(windColor(15), "rgb(90, 90, 90)");
});
