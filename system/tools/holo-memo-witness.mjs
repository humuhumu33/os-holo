#!/usr/bin/env node
// holo-memo-witness.mjs — Phase 0c witness for the unified HoloMemo layer (the O(1) render/compute/
// inference memo). Proves the contract the κ-scene renderer will key against:
//   1. canonical σ-axis key (BLAKE3, the 0b substrate axis); a κ string is used verbatim; deterministic
//   2. memo(): compute-once — the build runs ONCE across repeats; later calls are L1 O(1) hits
//   3. memo() persistence: after L1 is cleared (a page reload), the value is rehydrated from L2 — the
//      expensive build does NOT run again
//   4. handle() TWO-LAYER: L1 holds the live (non-serializable) handle; L2 holds the serializable SOURCE.
//      Cold → buildSource ONCE. Reload (L1 cleared) → handle is HYDRATED from L2 source bytes, the
//      expensive buildSource is NOT re-run. This is what makes "O(1) across reloads" honest for GPU state
//      (pipelines/textures) that cannot be serialized.
//   5. dedup: identical material → one key → one build, shared.
//
// Run: node holo-os/system/tools/holo-memo-witness.mjs
import { pathToFileURL, fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const MOD = join(here, "../os/usr/lib/holo/holo-memo.mjs");
const BLAKE = join(here, "../os/usr/lib/holo/holo-blake3.mjs");
const m = await import(pathToFileURL(MOD)).catch((e) => ({ __err: e }));
const { blake3hex } = await import(pathToFileURL(BLAKE));

let pass = 0, fail = 0;
const ok = (c, msg) => { c ? pass++ : fail++; console.log((c ? "  ✓ " : "  ✗ ") + msg); };

if (m.__err || typeof m.createMemo !== "function") {
  console.log("  ✗ holo-memo.mjs exports createMemo  (" + (m.__err ? m.__err.message : "missing export") + ")");
  console.log(`\nRED — module not ready`); process.exit(1);
}

const te = new TextEncoder();
// in-memory L2 so persistence-across-reload is testable in Node (browser default = Cache API/OPFS)
const makeL2 = () => { const s = new Map(); return { store: s, async get(k) { return s.has(k) ? s.get(k) : undefined; }, async put(k, b) { s.set(k, b); } }; };

// 1 — canonical key
{
  const mem = m.createMemo({ l2: null });
  ok(mem.key("abc") === blake3hex(te.encode("abc")), "key(raw string) = canonical BLAKE3 (σ-axis)");
  ok(mem.key("did:holo:blake3:" + "a".repeat(64)) === "a".repeat(64), "key(κ string) used verbatim (the identity IS the key)");
  ok(mem.key({ b: 1, a: 2 }) === mem.key({ a: 2, b: 1 }), "key(obj) is canonical (key order independent)");
}

// 2 — memo compute-once + L1 hit
{
  const mem = m.createMemo({ l2: null });
  let builds = 0;
  const f = () => mem.memo("surface-1", async () => { builds++; return { laidOut: true }; });
  const a = await f(); const b = await f();
  ok(builds === 1, "memo: build runs ONCE across repeats");
  ok(a === b || JSON.stringify(a) === JSON.stringify(b), "memo: repeat returns the same value (L1 hit)");
  ok(mem.stats().l1 >= 1, "memo: second call is an L1 hit");
}

// 3 — memo persistence across reload (L1 cleared, L2 rehydrates, no rebuild)
{
  const l2 = makeL2();
  const mem = m.createMemo({ l2 });
  let builds = 0;
  await mem.memo("layout-7", async () => { builds++; return { w: 100 }; });
  mem.clearL1();                                              // simulate a page reload (in-memory tier gone)
  const v = await mem.memo("layout-7", async () => { builds++; return { w: 999 }; });
  ok(builds === 1, "memo: after reload, value rehydrates from L2 — build does NOT re-run");
  ok(v && v.w === 100, "memo: rehydrated value is the original (not recomputed)");
}

// 4 — handle() TWO-LAYER: L1 live handle / L2 source bytes
{
  const l2 = makeL2();
  const mem = m.createMemo({ l2 });
  let builtSource = 0, hydrated = 0;
  const opts = {
    buildSource: async () => { builtSource++; return te.encode("compiled-WGSL-or-atlas-bytes"); },  // expensive, once
    hydrate: (bytes) => { hydrated++; return { gpuHandle: true, fromBytes: bytes.length }; },        // cheap, rebuild
  };
  const h1 = await mem.handle("pipeline:card", opts);
  const h2 = await mem.handle("pipeline:card", opts);          // L1 hit
  ok(builtSource === 1, "handle: buildSource (expensive) runs ONCE");
  ok(hydrated === 1, "handle: hydrate not re-run on an L1 hit");
  ok(h1 === h2, "handle: L1 returns the identical live handle");
  ok(l2.store.size === 1, "handle: the serializable SOURCE bytes are persisted to L2");

  mem.clearL1();                                               // reload: live GPU handles are gone
  const h3 = await mem.handle("pipeline:card", opts);
  ok(builtSource === 1, "handle: after reload, buildSource does NOT re-run (no recompute)");
  ok(hydrated === 2, "handle: after reload, handle is HYDRATED from L2 source bytes (cheap rebuild)");
  ok(h3 && h3.fromBytes > 0, "handle: rehydrated handle is rebuilt from the cached source");
}

// 5 — dedup: same material → one build
{
  const mem = m.createMemo({ l2: null });
  let builds = 0;
  await Promise.all([0, 1, 2].map(() => mem.memo("shared-κ", async () => { builds++; return 1; })));
  ok(builds === 1, "dedup: identical material → one build shared across callers");
}

console.log(`\n${fail === 0 ? "GREEN" : "RED"} — ${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
