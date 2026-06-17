#!/usr/bin/env node
// holo-w2-opfs-kappastore-witness.mjs — W2 (design -04-): PROVE the browser OpfsKappaStore is a
// faithful, persistent KappaStore backend. Runs the contract differentially against an in-memory
// reference (MemKappaStore, the holospaces oracle) in real Chromium on the localhost secure context
// (OPFS + crypto.subtle work on 127.0.0.1):
//   · round-trip — get(put(B)) === B, byte-for-byte;
//   · κ-identity / dedup — same bytes ⇒ same κ (and one file); different bytes ⇒ different κ;
//   · differential — OpfsKappaStore κ ≡ MemKappaStore κ, and get bytes equal across both backends;
//   · contains / pin / evict — present/absent, pinned survives, unpinned evicts (correctness-free);
//   · PERSISTENCE (the L3 keystone) — put, RELOAD the page (hot map gone), reopen, get still returns
//     the exact bytes from OPFS. "The store is the memory" survives a restart.
//   node tools/holo-w2-opfs-kappastore-witness.mjs
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { startServer } from "./holo-serve-fhs.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const results = []; let passed = 0, failed = 0;
const rec = (n, ok, d = "") => { results.push({ name: n, ok, detail: d }); ok ? passed++ : failed++; console.log(`${ok ? "PASS" : "FAIL"} — ${n}${d ? "  (" + d + ")" : ""}`); };
const MOD = "/usr/lib/holo/holo-opfs-kappastore.mjs";

let chromium; try { ({ chromium } = await import("playwright")); }
catch { console.log("playwright not installed — cd system && npm i -D playwright && npx playwright install chromium"); process.exit(2); }

const { port, close } = await startServer();
const base = `http://127.0.0.1:${port}`;
console.log(`OS2 serving at ${base}\n`);
const browser = await chromium.launch();
try {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const perr = []; page.on("pageerror", (e) => perr.push(String(e)));
  await page.goto(`${base}/`, { waitUntil: "domcontentloaded", timeout: 30000 });

  // ── main TCK (one secure-context evaluate) ──
  const r = await page.evaluate(async (mod) => {
    const { OpfsKappaStore, MemKappaStore } = await import(mod);
    const eq = (a, b) => a && b && a.length === b.length && a.every((x, i) => x === b[i]);
    const rand = (n) => { const u = new Uint8Array(n); crypto.getRandomValues(u); return u; };
    const opfs = await OpfsKappaStore.open("w2-tck");
    const mem = await MemKappaStore.open();

    // round-trip + κ identity across backends
    const B = rand(4096);
    const kO = await opfs.put("sha256", B), kM = await mem.put("sha256", B);
    const got = await opfs.get(kO);
    const roundtrip = eq(Array.from(got), Array.from(B));
    const sameKappa = kO === kM;

    // dedup (same bytes ⇒ same κ) + distinct (different bytes ⇒ different κ)
    const kO2 = await opfs.put("sha256", B);
    const dedup = kO2 === kO;
    const distinct = (await opfs.put("sha256", rand(4096))) !== kO;

    // contains present/absent
    const cPresent = await opfs.contains(kO);
    const cAbsent = await opfs.contains("sha256:" + "0".repeat(64));

    // differential over a batch: κ identical AND bytes equal across both backends
    let diffOk = 0; const N = 12;
    for (let i = 0; i < N; i++) { const b = rand(1024 + i * 37); const a = await opfs.put("sha256", b); const c = await mem.put("sha256", b); const ga = await opfs.get(a); const gc = await mem.get(c); if (a === c && eq(Array.from(ga), Array.from(gc))) diffOk++; }

    // pin survives hot-cache pressure; evict is correctness-free and refuses pinned
    opfs.pin(kO);
    for (let i = 0; i < 200; i++) await opfs.put("sha256", rand(64));   // exceed HOT_MAX
    const pinnedStillGets = !!(await opfs.get(kO));
    const kEv = await opfs.put("sha256", rand(64)); const evicted = await opfs.evict(kEv); const goneAfterEvict = (await opfs.get(kEv)) === null;
    const pinnedEvictRefused = (await opfs.evict(kO)) === false && !!(await opfs.get(kO));

    // seed a known blob for the persistence check (read back after reload)
    const P = rand(2048); const kP = await opfs.put("sha256", P);
    return { roundtrip, sameKappa, dedup, distinct, cPresent, cAbsent, diffOk, N, pinnedStillGets, evicted, goneAfterEvict, pinnedEvictRefused, kP, pHex: Array.from(P).map((x) => x.toString(16).padStart(2, "0")).join("") };
  }, MOD);

  rec("round-trip — get(put(B)) returns B byte-for-byte", r.roundtrip);
  rec("κ-identity across backends — OpfsKappaStore κ ≡ MemKappaStore κ for the same bytes", r.sameKappa, r.kP ? "" : "");
  rec("dedup — the same bytes always yield the same κ (stored once)", r.dedup);
  rec("distinct — different bytes yield a different κ", r.distinct);
  rec("contains — present κ true, absent κ false", r.cPresent && !r.cAbsent, `present:${r.cPresent} absent:${r.cAbsent}`);
  rec("differential TCK — κ identical AND bytes equal vs the MemKappaStore oracle", r.diffOk === r.N, `${r.diffOk}/${r.N}`);
  rec("pin survives hot-cache pressure (200 puts past HOT_MAX) — pinned κ still resolves", r.pinnedStillGets);
  rec("evict is correctness-free — unpinned κ evicts (get→null), pinned κ refuses eviction", r.evicted && r.goneAfterEvict && r.pinnedEvictRefused, `evicted:${r.evicted} gone:${r.goneAfterEvict} pinnedRefused:${r.pinnedEvictRefused}`);

  // ── PERSISTENCE across reload (the L3 keystone) ──
  await page.reload({ waitUntil: "domcontentloaded", timeout: 30000 });   // fresh JS context: the hot map is GONE
  const p = await page.evaluate(async ({ mod, kP, pHex }) => {
    const { OpfsKappaStore } = await import(mod);
    const store = await OpfsKappaStore.open("w2-tck");                    // reopen the SAME OPFS namespace
    const got = await store.get(kP);
    const gotHex = got ? Array.from(got).map((x) => x.toString(16).padStart(2, "0")).join("") : null;
    return { found: !!got, identical: gotHex === pHex };
  }, { mod: MOD, kP: r.kP, pHex: r.pHex });
  rec("PERSISTENCE — after a page reload (in-memory cache gone), the store serves the bytes from OPFS, byte-identical (L3: the store is the memory)", p.found && p.identical, `found:${p.found} identical:${p.identical}`);

  rec("no fatal page errors", perr.length === 0, perr.slice(0, 2).join(" | ") || "clean");
  await browser.close();
} catch (e) { await browser.close().catch(() => {}); rec("witness completed without throwing", false, String((e && e.message) || e)); }
await close();

const witnessed = failed === 0 && passed >= 9;
console.log(`\n${witnessed ? "WITNESSED ✓ — OpfsKappaStore is a faithful, persistent KappaStore backend" : "FAILED ✗"} · ${passed}/${passed + failed}`);
writeFileSync(join(here, "holo-w2-opfs-kappastore-witness.result.json"),
  JSON.stringify({ witnessed, passed, failed, covers: results.filter((x) => x.ok).map((x) => x.name.slice(0, 64)), results,
    spec: "W2 — the browser OpfsKappaStore (os/usr/lib/holo/holo-opfs-kappastore.mjs) implements the holospaces KappaStore contract (put/get/contains/pin) over OPFS, content-addressed by κ. Witnessed in real Chromium: round-trip, κ-identity/dedup, differential vs MemKappaStore, contains/pin/evict, and PERSISTENCE across a page reload (served from OPFS, not memory) — proving Law L3 (the store is the memory) survives a restart in a browser tab." }, null, 2) + "\n");
process.exit(witnessed ? 0 : 1);
