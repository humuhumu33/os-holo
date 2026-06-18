#!/usr/bin/env node
// holo-hub-wired-witness.mjs — witness the κ-stream wired into the REAL Holo Hub (apps/hub/index.html).
// Serves the real apps tree, loads Hub, finds the additively-injected "κ-stream" listing, clicks it, and
// proves the 4K κ-object streams + verifies (verify→OPFS→MSE) INSIDE Hub's real player iframe — i.e. the
// streaming substrate is now a genuine Hub catalog listing, not a standalone page.
//   node tools/holo-hub-wired-witness.mjs
import { createServer } from "node:http";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const APPS = join(here, "../../../holo-apps/apps");
const MOD = join(here, "../os/usr/lib/holo/holo-opfs-kappastore.mjs");
const TYPES = { ".html": "text/html", ".mjs": "text/javascript", ".js": "text/javascript", ".json": "application/json", ".jsonld": "application/ld+json", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".mp4": "video/mp4", ".m4s": "video/mp4", ".webmanifest": "application/manifest+json" };
const results = []; let passed = 0, failed = 0;
const rec = (n, ok, d = "") => { results.push({ name: n, ok, detail: d }); ok ? passed++ : failed++; console.log(`${ok ? "PASS" : "FAIL"} — ${n}${d ? "  (" + d + ")" : ""}`); };

let chromium; try { ({ chromium } = await import("playwright")); } catch { console.log("playwright not installed"); process.exit(2); }

const server = createServer((req, res) => {
  const u = decodeURIComponent(req.url.split("?")[0]); let file = null;
  if (u === "/" || u === "/apps/hub/" || u === "/apps/hub/index.html") file = join(APPS, "hub/index.html");
  else if (u === "/apps/hub/holo-opfs-kappastore.mjs") file = MOD;   // the OS substrate module, served at the app path the embed imports
  else if (u.startsWith("/apps/")) file = join(APPS, u.slice("/apps/".length));
  if (!file) { res.writeHead(404); return res.end("nf"); }
  try { const body = readFileSync(file); res.writeHead(200, { "content-type": TYPES[file.slice(file.lastIndexOf("."))] || "application/octet-stream", "cache-control": "no-store" }); res.end(body); }
  catch { res.writeHead(404); res.end("nf"); }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const baseUrl = `http://127.0.0.1:${server.address().port}`;
console.log(`Hub served at ${baseUrl}/apps/hub/index.html\n`);

async function launch() { for (const channel of ["chrome", "msedge"]) { try { const b = await chromium.launch({ channel }); console.log(`browser: ${channel}`); return b; } catch {} } console.log("browser: bundled chromium"); return chromium.launch(); }
const browser = await launch();
try {
  const page = await browser.newContext().then((c) => c.newPage());
  const perr = []; page.on("pageerror", (e) => perr.push(String(e)));
  await page.goto(`${baseUrl}/apps/hub/index.html`, { waitUntil: "load", timeout: 30000 });

  // 1 · the real Hub loads and the injected κ-stream listing appears
  await page.waitForSelector("#kappa-stream-card", { timeout: 15000 });
  rec("the real Holo Hub loads and a self-verifying κ-stream listing is present in the catalog", true);

  // 2 · clicking the listing opens Hub's real watch view + player
  await page.click("#kappa-stream-card");
  await page.waitForFunction(() => document.getElementById("watch").classList.contains("on") && /stream-embed/.test(document.getElementById("pFrame").src || ""), { timeout: 10000 });
  rec("clicking it opens Hub's real player (watch view, #pFrame ← stream-embed)", true);

  // 3 · the κ-object streams + verifies INSIDE Hub's player iframe
  let frame = null;
  for (let i = 0; i < 60 && !frame; i++) { frame = page.frames().find((fr) => /stream-embed/.test(fr.url())); if (!frame) await page.waitForTimeout(250); }
  if (frame) await frame.waitForFunction(() => window.__holo && window.__holo.state().verified >= 2, { timeout: 30000 }).catch(() => {});
  const es = frame ? await frame.evaluate(() => window.__holo.state()).catch(() => null) : null;
  rec("the 4K κ-object streams + verifies (verify→OPFS→MSE) inside Hub's player", !!es && es.verified === 2 && es.unverified !== true, es ? `verified ${es.verified}/${es.total} · source ${es.source}` : "no embed frame");

  // 4 · Hub's player marks it verified + ready (boot → ready)
  const pl = await page.evaluate(() => { const p = document.getElementById("player"), l = document.getElementById("pLive"); return { ready: !!p && p.classList.contains("ready"), live: l ? l.textContent : "" }; });
  rec("Hub's player reports it ready + verified (boot → ready, '0 servers')", pl.ready && /verified/.test(pl.live), pl.live || "not ready");

  const fatal = perr.filter((e) => !/fetch|404|Failed to load|feed|catalog\.json|index\.jsonld|net::/i.test(e));
  rec("no fatal page errors (catalog-dep 404s ignored)", fatal.length === 0, fatal.slice(0, 2).join(" | ") || "clean");

  try { await page.screenshot({ path: join(here, "holo-hub-wired-witness.png") }); console.log("screenshot → tools/holo-hub-wired-witness.png"); } catch {}
  await browser.close();
} catch (e) { await browser.close().catch(() => {}); rec("witness completed without throwing", false, String((e && e.message) || e)); }
server.close();

const witnessed = failed === 0 && passed >= 4;
console.log(`\n${witnessed ? "WITNESSED ✓ — the κ-stream is a real Holo Hub listing: it streams + verifies inside Hub's player" : "NOT WITNESSED ✗"} · ${passed}/${passed + failed}`);
writeFileSync(join(here, "holo-hub-wired-witness.result.json"),
  JSON.stringify({ witnessed, passed, failed, covers: results.filter((r) => r.ok).map((r) => r.name.slice(0, 64)), results,
    spec: "The κ-streaming pipeline wired into the REAL Holo Hub (apps/hub/index.html, additive injector): a self-verifying κ-stream listing appears in the catalog; clicking it opens Hub's real player and streams the 4K κ-object (verify→OPFS→MSE) inside the player iframe, which Hub marks verified + ready. Standalone demos are now a genuine Hub listing." }, null, 2) + "\n");
process.exit(witnessed ? 0 : 1);
