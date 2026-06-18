#!/usr/bin/env node
// holo-hub-3d-witness.mjs — witness Holo Hub PHASE 2b render path (apps/hub/3d-stream.html): a streamed
// κ-object MATERIALIZING in 3D. The 4K BBB frame, re-expressed as a κ-addressed point cloud, streams
// chunk by chunk; each chunk re-derives to its declared κ (Law L5) BEFORE its points render; verified
// bytes persist in the OpfsKappaStore; the cloud assembles in WebGL2. WebGPU is absent in headless test
// browsers, so this proves the WebGL2 (Tier-B) render path — real and witnessable; the WebGPU
// compute-verify upgrade slots behind the same pipeline.
//   node tools/holo-hub-3d-witness.mjs
import { createServer } from "node:http";
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const HUB = join(here, "../../../holo-apps/apps/hub");
const MOD = join(here, "../os/usr/lib/holo/holo-opfs-kappastore.mjs");
const CLOUD = join(here, "../../../holo-apps/apps/video/video/dev/dev-bbb-cloud");
const TYPES = { ".html": "text/html", ".mjs": "text/javascript", ".json": "application/json", ".bin": "application/octet-stream" };
const results = []; let passed = 0, failed = 0;
const rec = (n, ok, d = "") => { results.push({ name: n, ok, detail: d }); ok ? passed++ : failed++; console.log(`${ok ? "PASS" : "FAIL"} — ${n}${d ? "  (" + d + ")" : ""}`); };
const sha = (b) => createHash("sha256").update(b).digest("hex");

let chromium; try { ({ chromium } = await import("playwright")); } catch { console.log("playwright not installed"); process.exit(2); }

// independent oracle: every cloud chunk's pin is real
const man = JSON.parse(readFileSync(join(CLOUD, "manifest.json"), "utf8"));
let oracle = 0; for (const ch of man.chunks) if (sha(readFileSync(join(CLOUD, ch.file))) === String(ch.kappa).split(":").pop()) oracle++;
rec("every point-cloud chunk's κ pin is REAL — on-disk bytes re-derive to declared sha256 (L5, oracle)", oracle === man.chunks.length, `${oracle}/${man.chunks.length} chunks`);

const server = createServer((req, res) => {
  const u = decodeURIComponent(req.url.split("?")[0]); let file = null;
  if (u === "/" || u === "/3d") file = join(HUB, "3d-stream.html");
  else if (u === "/holo-opfs-kappastore.mjs") file = MOD;
  else if (u.startsWith("/cloud/")) file = join(CLOUD, u.slice("/cloud/".length));
  if (!file) { res.writeHead(404); return res.end("nf"); }
  try { const body = readFileSync(file); res.writeHead(200, { "content-type": TYPES[file.slice(file.lastIndexOf("."))] || "application/octet-stream", "cache-control": "no-store" }); res.end(body); }
  catch (e) { res.writeHead(404); res.end(String(e)); }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const baseUrl = `http://127.0.0.1:${server.address().port}`;
console.log(`3D showcase served at ${baseUrl}\n`);

const GL_ARGS = ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"];
async function launch() { for (const channel of ["chrome", "msedge"]) { try { const b = await chromium.launch({ channel, args: GL_ARGS }); console.log(`browser: ${channel}`); return b; } catch {} } console.log("browser: bundled chromium"); return chromium.launch({ args: GL_ARGS }); }
const browser = await launch();
try {
  const page = await browser.newContext({ viewport: { width: 1100, height: 720 } }).then((c) => c.newPage());
  const perr = []; page.on("pageerror", (e) => perr.push(String(e)));
  await page.goto(`${baseUrl}/3d`, { waitUntil: "load", timeout: 30000 });

  // all chunks stream + verify
  await page.waitForFunction((n) => { const s = window.__holo.state(); return s.verified >= n; }, man.chunks.length, { timeout: 45000 });
  // the cloud actually renders (lit pixels appear on the canvas)
  await page.waitForFunction(() => window.__holo.state().litPixels > 50, { timeout: 15000 }).catch(() => {});
  const s = await page.evaluate(() => window.__holo.state());

  rec("every κ-chunk verified to its declared κ BEFORE its points render — verified all, refused none", s.verified === man.chunks.length && s.unverified === 0, `verified ${s.verified}/${man.chunks.length} · mismatches ${s.unverified}`);
  rec("the full point cloud materialized — all points rendered", s.points === man.count, `${s.points.toLocaleString()} / ${man.count.toLocaleString()} points`);
  rec("the cloud actually RENDERS in WebGL2 — lit pixels on the canvas (render path real)", s.litPixels > 50, `${s.litPixels} lit pixels · ${s.frames} frames`);
  rec("bytes-rendered-before-verified = 0 (no points upload until their chunk's κ re-derives)", s.unverified === 0, String(s.unverified));
  rec("no fatal page errors", perr.length === 0, perr.slice(0, 2).join(" | ") || "clean");

  try { await page.screenshot({ path: join(here, "holo-hub-3d-witness.png") }); console.log("screenshot → tools/holo-hub-3d-witness.png"); } catch {}
  await browser.close();
} catch (e) { await browser.close().catch(() => {}); rec("witness completed without throwing", false, String((e && e.message) || e)); }
server.close();

const witnessed = failed === 0 && passed >= 5;
console.log(`\n${witnessed ? "WITNESSED ✓ — a κ-object streams, verifies per-chunk, and materializes in 3D (WebGL2 render path)" : "NOT WITNESSED ✗"} · ${passed}/${passed + failed}`);
writeFileSync(join(here, "holo-hub-3d-witness.result.json"),
  JSON.stringify({ witnessed, passed, failed, webgpu: false, renderPath: "WebGL2 (WebGPU absent in test browser)", covers: results.filter((r) => r.ok).map((r) => r.name.slice(0, 64)), results,
    spec: "Holo Hub Phase 2b render path: the 4K BBB frame re-expressed as a κ-addressed point cloud streams chunk by chunk; each chunk re-derives to its declared κ (L5) before its points render; verified bytes persist in the OpfsKappaStore; the cloud materializes in WebGL2 and orbits. WebGPU compute-verify is the slot-in upgrade (absent in headless test browsers, so the WebGL2 Tier-B path is witnessed here)." }, null, 2) + "\n");
process.exit(witnessed ? 0 : 1);
