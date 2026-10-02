const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const ROOT = path.join(__dirname, "..");

test("les scripts de index.html partagent la portée globale sans doublon de nom", () => {
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  const sources = [...html.matchAll(/<script[^>]*src="([^"?]+)/g)].map((m) => m[1]);
  assert.ok(sources.length >= 5);
  const context = vm.createContext({
    window: { matchMedia: () => ({ matches: false }), addEventListener() {} },
    document: { getElementById: () => null, addEventListener() {}, querySelectorAll: () => [] },
    fetch: async () => ({ ok: false }),
    console,
    setTimeout,
  });
  for (const src of sources) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, src), "utf8"), context, { filename: src });
  }
  assert.equal(vm.runInContext("typeof loadDetailAssets", context), "function");
  assert.equal(vm.runInContext("typeof buildChartSvg", context), "function");
});
