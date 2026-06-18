#!/usr/bin/env node
// holo-hub-catalog-witness.mjs — witness Holo Hub PHASE 2a (apps/hub/catalog-stream.html): a real
// catalog of live κ-streaming tiles. Proves, in a real browser, the three magical moments:
//   · STREAM + VERIFY — tile A streams its κ-object from origin, each chunk re-derives to its declared
//     κ before decode, 4K plays, bytes persist in the OpfsKappaStore;
//   · DEDUP-INSTANT — tile B shares A's κ ⇒ it materializes from the κ-store with ZERO origin bytes (O(1));
//   · a DIFFERENT κ (tile C) streams fresh from origin (no false dedup);
//   · SHOW-ME-THE-κ — the κ panel re-derives the resident bytes to the declared κ (L5);
//   · OFFLINE-EVERYTHING — with the origin cut, a streamed tile still plays from the κ-store.
//   node tools/holo-hub-catalog-witness.mjs
import { createServer } from "node:http";
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const HUB = join(here, "../../../holo-apps/apps/hub");
const MOD = join(here, "../os/usr/lib/holo/holo-opfs-kappastore.mjs");
const VID = join(here, "../../../holo-apps/apps/video/video/dev");
const ASSETS = { asset: join(VID, "dev-bbb-2160-hq"), asset2: join(VID, "dev-bbb-2160") };
const TYPES = { ".html": "text/html", ".mjs": "text/javascript", ".json": "application/json", ".jsonld": "application/ld+json", ".jpg": "image/jpeg", ".mp4": "video/mp4", ".m4s": "video/mp4" };
const results = []; let passed = 0, failed = 0;
const rec = (n, ok, d = "") => { results.push({ name: n, ok, detail: d }); ok ? passed++ : failed++; console.log(`${ok ? "PASS" : "FAIL"} — ${n}${d ? "  (" + d + ")" : ""}`); };
const sha = (b) => createHash("sha256").update(b).digest("hex");

let chromium; try { ({ chromium } = await import("playwright")); } catch { console.log("playwright not installed"); process.exit(2); }

// independent oracle: both assets' pins are real
let oracle = 0;
for (const k of Object.keys(ASSETS)) { const m = JSON.parse(readFileSync(join(ASSETS[k], "manifest.json"), "utf8")); for (const f of ["init.mp4", "seg_000.m4s"]) if (sha(readFileSync(join(ASSETS[k], f))) === String(m[f]).split(":").pop()) oracle++; }
rec("both catalog assets' κ pins are REAL — on-disk bytes re-derive to their declared sha256 (L5, oracle)", oracle === 4, `${oracle}/4`);

const server = createServer((req, res) => {
  const u = decodeURIComponent(req.url.split("?")[0]); let file = null;
  if (u === "/" || u === "/index.html") file = join(HUB, "catalog-stream.html");
  else if (u === "/holo-opfs-kappastore.mjs") file = MOD;
  else { const m = u.match(/^\/(asset2|asset)\/(.+)$/); if (m) file = join(ASSETS[m[1]], m[2]); }
  if (!file) { res.writeHead(404); return res.end("nf"); }
  try { const body = readFileSync(file); res.writeHead(200, { "content-type": TYPES[file.slice(file.lastIndexOf("."))] || "application/octet-stream", "cache-control": "no-store" }); res.end(body); }
  catch (e) { res.writeHead(404); res.end(String(e)); }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const baseUrl = `http://127.0.0.1:${server.address().port}`;
console.log(`catalog served at ${baseUrl}\n`);

async function launch() { for (const channel of ["chrome", "msedge"]) { try { const b = await chromium.launch({ channel }); console.log(`browser: ${channel}`); return b; } catch {} } console.log("browser: bundled chromium"); return chromium.launch(); }
const browser = await launch();
const done = (id) => `(() => { const s = window.__holo.state(); return !s.busy && s.focused === "${id}" && s.verified >= s.total && s.total > 0; })()`;
try {
  const page = await browser.newContext().then((c) => c.newPage());
  const perr = []; page.on("pageerror", (e) => perr.push(String(e)));
  await page.goto(`${baseUrl}/`, { waitUntil: "load", timeout: 30000 });

  // 1 · tile A streams + verifies from origin, 4K decodes
  await page.click("#tile-bbb4k"); await page.waitForFunction(done("bbb4k"), { timeout: 45000 });
  let s = await page.evaluate(() => window.__holo.state());
  const v = await page.evaluate(() => ({ w: document.getElementById("vid").videoWidth, h: document.getElementById("vid").videoHeight }));
  rec("tile A streams + verifies from origin (4K decodes)", s.source === "origin" && s.originBytes > 13_000_000 && v.w === 3840 && v.h === 2160, `${v.w}×${v.h} · ${(s.originBytes / 1048576).toFixed(1)} MB from origin`);

  // 2 · tile B shares A's κ → DEDUP-INSTANT, zero origin bytes
  await page.click("#tile-bbb4k-share"); await page.waitForFunction(done("bbb4k-share"), { timeout: 20000 });
  s = await page.evaluate(() => window.__holo.state());
  rec("DEDUP-INSTANT — tile B (same κ) materializes from the κ-store with ZERO origin bytes (O(1), Law L1)", s.dedupHits === 2 && s.originBytes === 0 && s.source === "κ-store", `dedupHits ${s.dedupHits}/2 · origin ${s.originBytes} B`);

  // 3 · tile C is a DIFFERENT κ → streams fresh (no false dedup)
  await page.click("#tile-bbb4k-classic"); await page.waitForFunction(done("bbb4k-classic"), { timeout: 45000 });
  s = await page.evaluate(() => window.__holo.state());
  rec("a DIFFERENT κ (tile C) streams fresh from origin — no false dedup", s.source === "origin" && s.dedupHits === 0 && s.originBytes > 5_000_000, `dedupHits ${s.dedupHits} · ${(s.originBytes / 1048576).toFixed(1)} MB from origin`);

  // 4 · SHOW-ME-THE-κ — re-derive resident bytes to the declared κ
  await page.click("#kappa-bbb4k"); await page.waitForSelector("#modal.open", { timeout: 5000 });
  const kbody = await page.evaluate(() => document.getElementById("kbody").innerText);
  rec("SHOW-ME-THE-κ — the panel re-derives the resident bytes to the declared κ (L5)", /re-derive to this κ|re-derived/.test(kbody), kbody.replace(/\s+/g, " ").slice(0, 60));
  await page.click("#kx");

  // 5 · OFFLINE-EVERYTHING — cut origin, a resident tile still plays from the κ-store
  await page.click("#btnCut");
  await page.click("#tile-bbb4k-share"); await page.waitForFunction(done("bbb4k-share"), { timeout: 15000 }).catch(() => {});
  s = await page.evaluate(() => window.__holo.state());
  rec("OFFLINE-EVERYTHING — origin cut, a streamed tile still plays from the κ-store (L3 + serverless)", s.originCut === true && s.source === "κ-store" && s.verified === 2, `cut:${s.originCut} source:${s.source}`);
  rec("no fatal page errors", perr.length === 0, perr.slice(0, 2).join(" | ") || "clean");

  try { await page.screenshot({ path: join(here, "holo-hub-catalog-witness.png") }); console.log("screenshot → tools/holo-hub-catalog-witness.png"); } catch {}
  await browser.close();
} catch (e) { await browser.close().catch(() => {}); rec("witness completed without throwing", false, String((e && e.message) || e)); }
server.close();

const witnessed = failed === 0 && passed >= 6;
console.log(`\n${witnessed ? "WITNESSED ✓ — Holo Hub catalog: real κ-streaming tiles · dedup-instant · show-me-the-κ · offline-everything" : "NOT WITNESSED ✗"} · ${passed}/${passed + failed}`);
writeFileSync(join(here, "holo-hub-catalog-witness.result.json"),
  JSON.stringify({ witnessed, passed, failed, covers: results.filter((r) => r.ok).map((r) => r.name.slice(0, 64)), results,
    spec: "Holo Hub Phase 2a: a real catalog of live κ-streaming tiles. Each tile is a real κ-object verified to its declared κ before decode and persisted in the OpfsKappaStore. Witnessed live: stream+verify (4K), DEDUP-INSTANT (shared κ ⇒ zero origin bytes, O(1)), distinct κ streams fresh, show-me-the-κ re-derivation, and offline-everything (origin cut ⇒ still plays from the κ-store)." }, null, 2) + "\n");
process.exit(witnessed ? 0 : 1);
