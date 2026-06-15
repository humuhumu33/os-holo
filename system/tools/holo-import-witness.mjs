// holo-import-witness.mjs — proves Holo Import (ADR-0092): paste a GitHub URL → a running,
// content-addressed Holo app, 100% serverless, riding the EXISTING substrate. Drives the PURE core
// (holo-import.mjs) against the REAL holo-blocks-repo (publishSource), the REAL holo-scene engine, and
// the REAL Q/trinity/mux spine — no re-implementation, so the κ-parity and O(1) claims are honest.
//
// The keystone check: an imported static repo seals to the SAME κ as repo.publishSource() for the same
// source — so an imported app is a first-class Holo app, not a second-class wrapper. Plus: the build-locus
// classifier tells the truth per class; the encode is byte-faithful; re-import is O(1) (and re-fetches
// NOTHING); tamper is refused (L5); the receipt walks to GitHub; unserved external refs are SURFACED.
//
// No network: fetchRepo is a MOCK (Law L4 — the network is an injected ingest boundary). Pure isomorphic
// logic only, so the browser path runs identically.

import { HoloRepo } from "../os/usr/lib/holo/holo-blocks-repo.mjs";
import importer, { parseRepoRef, classify, encodeStatic, sealApp, importRepo, bindImporter, makeGovernedFetch } from "../os/usr/lib/holo/holo-import.mjs";
import { scanPii } from "../os/usr/lib/holo/holo-conscience.js";   // the REAL PII patterns drive the gate's red-line
import { scene, sceneKappa, render, serializeWorld } from "../os/usr/lib/holo/holo-scene.mjs";
import { createTrinity } from "../os/usr/lib/holo/q/holo-q-trinity.js";
import { createQ } from "../os/usr/lib/holo/q/holo-q.js";
import mux from "../os/usr/lib/holo/q/holo-q-mux.js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 56);
const ok = (n, c, x = "") => { (c ? pass++ : fail++); checks[(slug(n) || "check") + "-" + (++kn)] = !!c; console.log((c ? "  ok  " : " FAIL ") + n + (x ? "  — " + x : "")); };

// ── the injected hash — the SAME pure FIPS-180-4 SHA-256 holo-blocks-repo.publishSource uses internally,
//    so sealApp() and publishSource() address identically (the κ-parity is real, not asserted by fiat). ──
const K256 = [0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
function sha256hex(input) {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : input;
  const l = bytes.length, k = Math.ceil((l + 9) / 64) * 64;
  const msg = new Uint8Array(k); msg.set(bytes); msg[l] = 0x80;
  const dv = new DataView(msg.buffer);
  dv.setUint32(k - 8, Math.floor((l * 8) / 0x100000000), false); dv.setUint32(k - 4, (l * 8) >>> 0, false);
  let H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  const w = new Uint32Array(64), rotr = (x, n) => (x >>> n) | (x << (32 - n));
  for (let i = 0; i < k; i += 64) {
    for (let t = 0; t < 16; t++) w[t] = dv.getUint32(i + t * 4, false);
    for (let t = 16; t < 64; t++) { const s0 = rotr(w[t-15],7)^rotr(w[t-15],18)^(w[t-15]>>>3); const s1 = rotr(w[t-2],17)^rotr(w[t-2],19)^(w[t-2]>>>10); w[t] = (w[t-16]+s0+w[t-7]+s1)|0; }
    let [a,b,c,d,e,f,g,h] = H;
    for (let t = 0; t < 64; t++) { const S1 = rotr(e,6)^rotr(e,11)^rotr(e,25); const ch = (e&f)^(~e&g); const t1 = (h+S1+ch+K256[t]+w[t])|0; const S0 = rotr(a,2)^rotr(a,13)^rotr(a,22); const maj = (a&b)^(a&c)^(b&c); const t2 = (S0+maj)|0; h=g; g=f; f=e; e=(d+t1)|0; d=c; c=b; b=a; a=(t1+t2)|0; }
    H = [(H[0]+a)|0,(H[1]+b)|0,(H[2]+c)|0,(H[3]+d)|0,(H[4]+e)|0,(H[5]+f)|0,(H[6]+g)|0,(H[7]+h)|0];
  }
  return H.map((x) => (x >>> 0).toString(16).padStart(8, "0")).join("");
}

// ── mock repos (the ingest boundary, mocked) — a Map<path,{text}> + a pinned commit per repo ──────────
const mapOf = (obj) => new Map(Object.entries(obj).map(([k, v]) => [k, { text: v }]));
const STATIC_FILES = (cssColor = "#6cf") => mapOf({
  "index.html": '<!doctype html><html><head><meta charset="utf-8"><title>Clock</title>' +
    '<link rel="stylesheet" href="style.css">' +
    '<link rel="stylesheet" href="https://fonts.example.com/inter.css">' +   // ABSOLUTE → must be SURFACED, not inlined
    '</head><body><h1 id="t">--:--</h1>' +
    '<script src="https://cdn.example.com/analytics.js"></script>' +          // ABSOLUTE → surfaced
    '<script src="app.js" type="module"></script></body></html>',
  "style.css": "body{background:" + cssColor + ";color:#fff;font-family:system-ui}h1{font-size:3rem}",
  "app.js": "const t=document.getElementById('t');setInterval(()=>t.textContent=new Date().toLocaleTimeString(),1000);",
  "README.md": "# clock\na tiny static clock",
});
const REPOS = {
  "octocat/clock": { commit: "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2", files: STATIC_FILES(), entry: "index.html" },
  "acme/vite-spa": { commit: "1111111111111111111111111111111111111111", files: mapOf({ "package.json": JSON.stringify({ name: "vite-spa", devDependencies: { vite: "^5" }, scripts: { build: "vite build" } }), "index.html": "<div id=app></div>", "src/main.js": "console.log('spa')" }) },
  "acme/api-server": { commit: "2222222222222222222222222222222222222222", files: mapOf({ "package.json": JSON.stringify({ name: "api", dependencies: { express: "^4", pg: "^8" } }), "server.js": "require('express')()" }) },
  "acme/py-svc": { commit: "3333333333333333333333333333333333333333", files: mapOf({ "requirements.txt": "flask\npsycopg2", "app.py": "print('hi')" }) },
};
let fetchCalls = 0;
const fetchRepo = async ({ owner, repo }) => {
  fetchCalls++;
  const r = REPOS[owner + "/" + repo];
  if (!r) throw new Error("mock: unknown repo " + owner + "/" + repo);
  return { commit: r.commit, files: r.files, entry: r.entry };
};

// ════════════════════════════════════════ 1) PARSE ════════════════════════════════════════
ok("parseRepoRef — full URL", (() => { const p = parseRepoRef("https://github.com/octocat/clock"); return p && p.owner === "octocat" && p.repo === "clock"; })());
ok("parseRepoRef — owner/repo shorthand", (() => { const p = parseRepoRef("octocat/clock"); return p && p.owner === "octocat" && p.repo === "clock"; })());
ok("parseRepoRef — /tree/<ref> deep link pins a ref", (() => { const p = parseRepoRef("https://github.com/octocat/clock/tree/v2"); return p && p.ref === "v2"; })());
ok("parseRepoRef — bare github.com/owner/repo (no protocol, as users paste)", (() => { const p = parseRepoRef("github.com/octocat/clock/tree/main"); return p && p.owner === "octocat" && p.repo === "clock" && p.ref === "main"; })());
ok("parseRepoRef — junk → null (refused, not guessed)", parseRepoRef("not a repo at all") === null);

// ════════════════════════════════════ 2) CLASSIFY (the honest build-locus) ═══════════════════════════
const cStatic = classify({ files: [...STATIC_FILES().keys()] });
ok("classify static/SPA → DIRECT, runs in v1", cStatic.class === "static" && cStatic.path === "direct" && cStatic.runs === true, cStatic.reason.slice(0, 48));
const cVite = classify({ files: ["index.html", "package.json", "src/main.js"], pkg: { devDependencies: { vite: "^5" } } });
ok("classify client-bundle → FORGE, staged (runs:false, named not faked)", cVite.class === "client-bundle" && cVite.path === "forge" && cVite.runs === false, cVite.reason.slice(0, 44));
const cApi = classify({ files: ["package.json", "server.js"], pkg: { dependencies: { express: "^4", pg: "^8" } } });
ok("classify backend+DB → OUT OF SCOPE v1, reason names the DB", cApi.class === "backend" && cApi.runs === false && /database/i.test(cApi.reason), cApi.reason.slice(0, 52));
const cPy = classify({ files: ["requirements.txt", "app.py"] });
ok("classify non-JS server → OUT OF SCOPE v1", cPy.class === "backend" && cPy.runs === false);
const cLib = classify({ files: ["index.js", "package.json"], pkg: { main: "index.js" } });
ok("classify library (no app entry) → OUT OF SCOPE v1", cLib.runs === false && (cLib.class === "library" || cLib.class === "unknown"));

// ════════════════════════════════ 3) ENCODE — byte-faithful, honest about gaps ═══════════════════════
const enc = encodeStatic({ name: "clock", entry: "index.html", files: STATIC_FILES(), hash: sha256hex });
ok("encode inlines the relative stylesheet VERBATIM", enc.html.includes("background:#6cf") && !/href="style\.css"/.test(enc.html));
ok("encode inlines the relative script VERBATIM (and keeps type=module)", enc.html.includes("toLocaleTimeString") && /type="module"/.test(enc.html) && !/src="app\.js"/.test(enc.html));
ok("encode SURFACES absolute refs (does NOT silently drop the CDN/font)", enc.externalRefs.length === 2 && enc.externalRefs.some((r) => /cdn\.example/.test(r.ref)) && enc.externalRefs.some((r) => /fonts\.example/.test(r.ref)), enc.externalRefs.map((r) => r.ref).join(" , "));
ok("encode reports NOT self-contained (honest, because of the external refs)", enc.selfContained === false);
ok("encode records per-asset κ (content-addressed inlined bytes)", Object.keys(enc.assetKappas).length === 2 && /^did:holo:sha256:/.test(enc.assetKappas["style.css"]));

// ════════════════════════ 4) IMPORT → SEAL — the κ-PARITY keystone ══════════════════════════════════
const imp = await importRepo({ input: "https://github.com/octocat/clock", fetchRepo, hash: sha256hex });
ok("importRepo(static) is runnable", imp.ok && imp.runnable && !!imp.app && !!imp.html);
// the keystone: an imported app addresses IDENTICALLY to a studio-built app of the same source.
const repo = new HoloRepo();
const studioApp = repo.publishSource({ name: "clock", source: imp.html });
ok("imported app κ === repo.publishSource κ (FIRST-CLASS, not a wrapper)", imp.app.id === studioApp.id, imp.app.id.slice(0, 34) + "…");
ok("imported app verifies under the repo's own L5 verifier", repo.verifySource(studioApp) === true);

// ════════════════════════ 5) O(1) RE-IMPORT + RE-DERIVE (Law L3/L5) ═════════════════════════════════
const imp2 = await importRepo({ input: "octocat/clock", fetchRepo, hash: sha256hex });
ok("re-import same repo@commit → same app κ (re-derivable, Law L5)", imp2.app.id === imp.app.id);
ok("re-import HTML is byte-identical (deterministic encode, no model)", imp2.html === imp.html);

// ════════════════════════ 6) TAMPER IS REFUSED (Law L5) ═════════════════════════════════════════════
const tampered = await importRepo({ input: "octocat/clock", fetchRepo: async () => ({ commit: REPOS["octocat/clock"].commit, files: STATIC_FILES("#f00"), entry: "index.html" }), hash: sha256hex });
ok("a flipped asset byte → DIFFERENT app κ (changed source → changed κ)", tampered.app.id !== imp.app.id);
ok("the studio seal agrees (publishSource of tampered html ≠ original)", repo.publishSource({ name: "clock", source: tampered.html }).id !== studioApp.id);

// ════════════════════════ 7) RECEIPT walks to GitHub (Holo Prov, ADR-0082) ══════════════════════════
const rc = imp.receipt;
ok("receipt prov:used pins git+repo@commit", typeof rc["prov:used"]["@id"] === "string" && rc["prov:used"]["@id"].includes("github.com/octocat/clock") && rc["prov:used"]["@id"].includes("@" + imp.commit), rc["prov:used"]["@id"].slice(0, 56));
ok("receipt prov:generated === the app κ (lineage source→app)", rc["prov:generated"]["@id"] === imp.app.id);
ok("receipt records the build-locus class (auditable)", rc["hosc:class"] === "static" && rc["hosc:buildLocus"] === "direct");
ok("receipt SURFACES unserved external refs (never hides the gap)", Array.isArray(rc["hosc:unservedExternalRefs"]) && rc["hosc:unservedExternalRefs"].length === 2);

// ════════════════════════ 8) SCENE INTEROP — the app is one κ-object in any holospace (ADR-0089) ═════
const appScene = scene({ type: "holo:AppScene", objects: [{ k: imp.app.id, x: 0, y: 0, w: 1280, h: 800 }] });
const k1 = await sceneKappa(appScene);
const rendered = render(appScene, {});
const round = serializeWorld({ type: "holo:AppScene", objectNodes: rendered.calls.filter((c) => c.op === "object"), readObject: (n) => ({ k: n.k, x: n.x, y: n.y, w: n.w, h: n.h }) });
const k2 = await sceneKappa(round);
ok("imported app drops into a scene as ONE κ-object (render⇄serialize round-trips, same κ)", k1 === k2, k1.slice(0, 30) + "…");

// ════════════════════════ 9) RIDES Q.create (task:import) — O(1) ingest-once on the spine ════════════
const T = createTrinity({ doc: null });
bindImporter(mux, { fetchRepo, hash: sha256hex });            // the deterministic "import" specialist
const Q = createQ({ trinity: T, mux, conscience: null, clock: () => 1700000000000 });
const before = fetchCalls;
const q1 = await Q.create("https://github.com/octocat/clock", { task: "import" });
const after1 = fetchCalls;
const q2 = await Q.create("https://github.com/octocat/clock", { task: "import" });
const after2 = fetchCalls;
ok("Q.create(repoUrl, {task:import}) yields the faithful HTML (same path as a build)", typeof q1.value === "string" && q1.value === imp.html);
ok("repeat is O(1) cached on the κ-memo spine (cached=hot)", q2.cached === "hot", "cached=" + q2.cached);
ok("the ingest happens ONCE — a re-import RE-FETCHES NOTHING (Law L3/L4)", (after1 - before) === 1 && (after2 - after1) === 0, "fetches: first=" + (after1 - before) + " repeat=" + (after2 - after1));

// ════════════════════════ 10) HONEST STOP — a non-runnable class is named, never faked ══════════════
const backend = await importRepo({ input: "acme/api-server", fetchRepo, hash: sha256hex });
ok("backend repo → ok but runnable:false, reason surfaced (no empty fake app)", backend.ok && backend.runnable === false && !backend.app && /server|database/i.test(backend.reason), (backend.reason || "").slice(0, 50));
const vite = await importRepo({ input: "acme/vite-spa", fetchRepo, hash: sha256hex });
ok("client-bundle → runnable:false in v1, FORGE path named (the next class up)", vite.runnable === false && vite.classification.path === "forge");

// ════════════════════════ 11) GOVERNED INGEST — the network is a conscience-gated boundary (Law L4) ══
// A thin conscience built on the REAL scanPii: PII in a URL → P5 red-line block; an ungranted host → block.
let fetches = 0;
const rawFetch = async (u) => { fetches++; return { ok: true, url: u, json: async () => ({ u }) }; };
const consc = (blockHosts = new Set()) => ({
  evaluateText: (text, { decision }) => {
    if (scanPii(text).length) return { outcome: "block", blocked: ["P5"], reason: "PII red-line (P5)" };
    if (blockHosts.has(decision.host)) return { outcome: "block", blocked: ["P4"], reason: "host not granted" };
    return { outcome: "accept" };
  },
});
// fail-closed: NO conscience + no host opt-in → the ingest is denied by default (L4)
fetches = 0;
const gf0 = makeGovernedFetch({ conscience: null, fetch: rawFetch, hash: sha256hex });
const d0 = await gf0("https://api.github.com/repos/octocat/clock");
ok("no conscience + no opt-in → ingest REFUSED (fail-closed, L4)", d0.ok === false && d0.refused === true && fetches === 0, d0.reason);
// host opt-in (trusted host) → fetch proceeds + a re-derivable ingest receipt
fetches = 0;
const gfTrust = makeGovernedFetch({ conscience: null, fetch: rawFetch, allowUngoverned: true, hash: sha256hex, now: () => 1700000000000 });
const dT = await gfTrust("https://raw.githubusercontent.com/octocat/clock/main/index.html", { body: "<h1>hi</h1>", purpose: "repo" });
ok("host opt-in → fetch proceeds + mints a PROV-O ingest receipt", dT.ok === true && fetches === 1 && /hosc:Ingest/.test(JSON.stringify(dT.receipt)));
ok("the ingest receipt records host + purpose + the content κ (re-derivable)", dT.receipt["hosc:host"] === "raw.githubusercontent.com" && dT.receipt["hosc:purpose"] === "repo" && dT.receipt["prov:generated"] === "did:holo:sha256:" + sha256hex("<h1>hi</h1>"));
// conscience present + ACCEPT → fetch happens
fetches = 0;
const gfOk = makeGovernedFetch({ conscience: consc(), fetch: rawFetch, hash: sha256hex });
ok("conscience ACCEPT → fetch proceeds", (await gfOk("https://api.github.com/repos/x/y")).ok === true && fetches === 1);
// PII in the URL → P5 red-line BLOCK, the network is NEVER touched
fetches = 0;
const gfPii = makeGovernedFetch({ conscience: consc(), fetch: rawFetch, hash: sha256hex });
const dPii = await gfPii("https://evil.example.com/leak?email=alice@example.com");
ok("PII in an ingest URL → P5 red-line REFUSED, fetch NOT called", dPii.refused === true && dPii.blocked.includes("P5") && fetches === 0, dPii.reason);
// an ungranted host → blocked
fetches = 0;
const gfHost = makeGovernedFetch({ conscience: consc(new Set(["malware.example.com"])), fetch: rawFetch, hash: sha256hex });
ok("an ungranted host → REFUSED before any fetch", (await gfHost("https://malware.example.com/x")).refused === true && fetches === 0);

// ── emit the EARL result + exit ──
const result = { "@type": "earl:TestResult", witnessed: fail === 0,
  subject: "Holo Import — paste a GitHub URL → a running, content-addressed, serverless Holo app (ADR-0092)",
  passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-import-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
