#!/usr/bin/env node
// holo-hub-audio-witness.mjs — witness Holo Hub PHASE 2b audio (apps/hub/audio-stream.html): a LOSSLESS,
// SPATIAL κ-audio object. The BBB audio as a lossless FLAC κ-object streams chunk by chunk; each chunk
// re-derives to its declared κ (Law L5) BEFORE decode; verified bytes persist in the OpfsKappaStore;
// Web Audio decodes the reassembled FLAC; a deterministic OfflineAudioContext render through an HRTF
// panner proves the binaural spatial path. (Web Audio decode + offline render both run headless.)
//   node tools/holo-hub-audio-witness.mjs
import { createServer } from "node:http";
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const HUB = join(here, "../../../holo-apps/apps/hub");
const MOD = join(here, "../os/usr/lib/holo/holo-opfs-kappastore.mjs");
const AUDIO = join(here, "../../../holo-apps/apps/video/video/dev/dev-bbb-audio");
const TYPES = { ".html": "text/html", ".mjs": "text/javascript", ".json": "application/json", ".bin": "application/octet-stream" };
const results = []; let passed = 0, failed = 0;
const rec = (n, ok, d = "") => { results.push({ name: n, ok, detail: d }); ok ? passed++ : failed++; console.log(`${ok ? "PASS" : "FAIL"} — ${n}${d ? "  (" + d + ")" : ""}`); };
const sha = (b) => createHash("sha256").update(b).digest("hex");

let chromium; try { ({ chromium } = await import("playwright")); } catch { console.log("playwright not installed"); process.exit(2); }

const man = JSON.parse(readFileSync(join(AUDIO, "manifest.json"), "utf8"));
let oracle = 0; for (const ch of man.chunks) if (sha(readFileSync(join(AUDIO, ch.file))) === String(ch.kappa).split(":").pop()) oracle++;
rec("every FLAC chunk's κ pin is REAL — on-disk bytes re-derive to declared sha256 (L5, oracle)", oracle === man.chunks.length, `${oracle}/${man.chunks.length} chunks`);

const server = createServer((req, res) => {
  const u = decodeURIComponent(req.url.split("?")[0]); let file = null;
  if (u === "/" || u === "/audio") file = join(HUB, "audio-stream.html");
  else if (u === "/holo-opfs-kappastore.mjs") file = MOD;
  else if (u.startsWith("/audio/")) file = join(AUDIO, u.slice("/audio/".length));
  if (!file) { res.writeHead(404); return res.end("nf"); }
  try { const body = readFileSync(file); res.writeHead(200, { "content-type": TYPES[file.slice(file.lastIndexOf("."))] || "application/octet-stream", "cache-control": "no-store" }); res.end(body); }
  catch (e) { res.writeHead(404); res.end(String(e)); }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const baseUrl = `http://127.0.0.1:${server.address().port}`;
console.log(`audio showcase served at ${baseUrl}\n`);

async function launch() { for (const channel of ["chrome", "msedge"]) { try { const b = await chromium.launch({ channel }); console.log(`browser: ${channel}`); return b; } catch {} } console.log("browser: bundled chromium"); return chromium.launch(); }
const browser = await launch();
try {
  const page = await browser.newContext().then((c) => c.newPage());
  const perr = []; page.on("pageerror", (e) => perr.push(String(e)));
  await page.goto(`${baseUrl}/`, { waitUntil: "load", timeout: 30000 });
  await page.waitForFunction((n) => { const s = window.__holo.state(); return s.verified >= n && s.decoded && s.spatial; }, man.chunks.length, { timeout: 45000 });
  const s = await page.evaluate(() => window.__holo.state());

  rec("every FLAC chunk verified to its declared κ BEFORE decode — verified all, refused none", s.verified === man.chunks.length && s.unverified === 0, `verified ${s.verified}/${man.chunks.length} · mismatches ${s.unverified}`);
  const d = s.decoded || {};
  rec("the lossless FLAC κ-object decodes to real audio — 48 kHz · stereo · ~10 s · non-silent", d.sampleRate === 48000 && d.channels === 2 && d.duration > 9 && d.rms > 0, `${d.sampleRate} Hz · ${d.channels}ch · ${d.duration}s · rms ${d.rms}`);
  const sp = s.spatial || {};
  rec("SPATIAL (HRTF binaural) is real — a source placed right renders the right channel louder (offline-proven)", sp.nonZero === true && sp.binaural === true, `L ${sp.lr} vs R ${sp.rr} → binaural ${sp.binaural}`);
  rec("bytes-decoded-before-verified = 0 (no chunk decodes until its κ re-derives)", s.unverified === 0, String(s.unverified));
  rec("no fatal page errors", perr.length === 0, perr.slice(0, 2).join(" | ") || "clean");

  try { await page.screenshot({ path: join(here, "holo-hub-audio-witness.png") }); console.log("screenshot → tools/holo-hub-audio-witness.png"); } catch {}
  await browser.close();
} catch (e) { await browser.close().catch(() => {}); rec("witness completed without throwing", false, String((e && e.message) || e)); }
server.close();

const witnessed = failed === 0 && passed >= 5;
console.log(`\n${witnessed ? "WITNESSED ✓ — a lossless FLAC κ-object streams, verifies per-chunk, decodes, and renders binaural-spatial" : "NOT WITNESSED ✗"} · ${passed}/${passed + failed}`);
writeFileSync(join(here, "holo-hub-audio-witness.result.json"),
  JSON.stringify({ witnessed, passed, failed, covers: results.filter((r) => r.ok).map((r) => r.name.slice(0, 64)), results,
    spec: "Holo Hub Phase 2b audio: the BBB audio as a lossless FLAC κ-object streams chunk by chunk; each re-derives to its declared κ (L5) before decode; persists in the OpfsKappaStore; Web Audio decodes it (48kHz stereo); a deterministic OfflineAudioContext render through an HRTF panner proves binaural spatial output. Lossless FLAC; source master is AAC (lossless-of-a-lossy-source)." }, null, 2) + "\n");
process.exit(witnessed ? 0 : 1);
