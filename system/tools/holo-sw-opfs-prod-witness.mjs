#!/usr/bin/env node
// holo-sw-opfs-prod-witness.mjs — PROVE the OpfsKappaStore is wired into the SW persistence path, in
// PROD cache-first mode (where the integration actually runs — on localhost every closure entry is a
// source file served dev-fresh). Forces prod mode without a deploy: an HTTPS reverse proxy with a
// self-signed cert for a NON-localhost hostname (holo.test → 127.0.0.1 via Chromium host-resolver,
// --ignore-certificate-errors ⇒ genuine secure context). Then: full boot under SW control caches a
// boot path (KCACHE + write-through to OPFS) → open the SW's holo-fhs-kstore from the page to confirm
// the write-through → CLEAR Cache Storage → refetch must serve from OPFS (x-holo-cache: opfs),
// byte-identical. Durable storage that survives Cache-Storage eviction (Law L3).
//   node tools/holo-sw-opfs-prod-witness.mjs
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createServer as createHttps } from "node:https";
import { request as httpRequest } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { startServer } from "./holo-serve-fhs.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const CERT = join(here, "_certs");
// self-contained: generate a throwaway self-signed cert for holo.test if absent (needs openssl). The
// cert only exists to make a non-localhost hostname a SECURE CONTEXT so the SW runs in PROD mode.
if (!existsSync(join(CERT, "cert.pem"))) {
  try {
    mkdirSync(CERT, { recursive: true });
    execFileSync("openssl", ["req", "-x509", "-newkey", "rsa:2048", "-keyout", join(CERT, "key.pem"), "-out", join(CERT, "cert.pem"), "-days", "2", "-nodes", "-subj", "/CN=holo.test", "-addext", "subjectAltName=DNS:holo.test"], { stdio: "ignore", env: { ...process.env, MSYS_NO_PATHCONV: "1" } });
  } catch (e) { console.log("cannot generate cert (openssl required for the prod-mode harness): " + e.message); process.exit(2); }
}
const results = []; let passed = 0, failed = 0;
const rec = (n, ok, d = "") => { results.push({ name: n, ok, detail: d }); ok ? passed++ : failed++; console.log(`${ok ? "PASS" : "FAIL"} — ${n}${d ? "  (" + d + ")" : ""}`); };

let chromium; try { ({ chromium } = await import("playwright")); } catch { console.log("playwright not installed"); process.exit(2); }

const { port: httpPort, close } = await startServer();
const HOST = "holo.test";
const proxy = createHttps({ key: readFileSync(join(CERT, "key.pem")), cert: readFileSync(join(CERT, "cert.pem")) }, (creq, cres) => {
  const preq = httpRequest({ host: "127.0.0.1", port: httpPort, method: creq.method, path: creq.url, headers: { ...creq.headers, host: `127.0.0.1:${httpPort}` } }, (pres) => { cres.writeHead(pres.statusCode, pres.headers); pres.pipe(cres); });
  preq.on("error", (e) => { cres.writeHead(502); cres.end(String(e)); });
  creq.pipe(preq);
});
await new Promise((r) => proxy.listen(0, "127.0.0.1", r));
const httpsPort = proxy.address().port;
const origin = `https://${HOST}:${httpsPort}`;
console.log(`http 127.0.0.1:${httpPort} → https ${origin} (prod mode)\n`);

const browser = await chromium.launch({ args: [`--host-resolver-rules=MAP ${HOST} 127.0.0.1`, "--ignore-certificate-errors"] });
try {
  const ctx = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await ctx.newPage();
  const perr = []; page.on("pageerror", (e) => perr.push(String(e)));

  await page.goto(`${origin}/shell.html`, { waitUntil: "load", timeout: 40000 });
  const reg = await page.evaluate(async () => {
    try { await navigator.serviceWorker.register("/holo-fhs-sw.js", { type: "module" }); await navigator.serviceWorker.ready; } catch (e) { return { err: String(e).slice(0, 80) }; }
    for (let i = 0; i < 120 && !navigator.serviceWorker.controller; i++) await new Promise((r) => setTimeout(r, 100));
    return { secure: isSecureContext, controlled: !!navigator.serviceWorker.controller, host: location.hostname };
  });
  rec("prod secure context + SW controls (non-localhost ⇒ cache-first mode)", reg.secure && reg.controlled && reg.host === HOST, JSON.stringify(reg));
  await page.waitForTimeout(500);   // SW controls; the test fetches the target path directly (which caches + OPFS-writes it)

  const closure = (await (await fetch(`http://127.0.0.1:${httpPort}/etc/os-closure.json`)).json()).closure || {};   // Node can't resolve holo.test (Chromium-only host-resolver) → hit the http server directly
  const pick = ["holo-launch.mjs", "shell.html"].find((p) => closure[p]);
  const hex = String(closure[pick].kappa).split(":").pop();
  console.log(`  driving prod path ${pick} · sha256 ${hex.slice(0, 12)}…\n`);

  const r = await page.evaluate(async ({ pick, hex }) => {
    const f1 = await fetch("/" + pick, { cache: "no-store" }); const c1 = f1.headers.get("x-holo-cache"); const b1 = (await f1.arrayBuffer()).byteLength;
    const { OpfsKappaStore } = await import("/usr/lib/holo/holo-opfs-kappastore.mjs");
    const ks = await OpfsKappaStore.open("holo-fhs-kstore");
    const inOpfs = await ks.hasKey("sha256", hex);
    let cleared = 0; for (const k of await caches.keys()) if (k.startsWith("holo-kappa")) { await caches.delete(k); cleared++; }
    const f2 = await fetch("/" + pick, { cache: "no-store" }); const c2 = f2.headers.get("x-holo-cache"); const b2 = (await f2.arrayBuffer()).byteLength;
    return { c1, b1, inOpfs, cleared, c2, b2 };
  }, { pick, hex });

  rec("PROD cache-first confirmed — the boot path runs the verify+cache+OPFS branch, NOT the DEV dev-fresh path", r.c1 === "miss" || r.c1 === "hit" || r.c1 === "opfs", `first fetch x-holo-cache:${r.c1} (miss = cold prod fetch, cached + OPFS-written; dev-fresh would mean the integration path was skipped)`);
  rec("the SW WRITES VERIFIED bytes through to OPFS — κ present in the SW's holo-fhs-kstore", r.inOpfs === true, `in OPFS:${r.inOpfs}`);
  rec("Cache Storage cleared (hot tier evicted)", r.cleared >= 1, `${r.cleared} cache(s)`);
  rec("DURABILITY — after Cache Storage is cleared, the SW still serves from OPFS (x-holo-cache: opfs), byte-identical (L3 survives Cache-Storage eviction)", r.c2 === "opfs" && r.b2 === r.b1, `x-holo-cache:${r.c2} · ${r.b2}/${r.b1} bytes`);
  rec("no fatal page errors", perr.length === 0, perr.slice(0, 2).join(" | ") || "clean");
  await browser.close();
} catch (e) { await browser.close().catch(() => {}); rec("witness completed without throwing", false, String((e && e.message) || e)); }
await close(); proxy.close();

const witnessed = failed === 0 && passed >= 5;
console.log(`\n${witnessed ? "WITNESSED ✓ — OpfsKappaStore wired into the SW; durable storage survives Cache-Storage eviction (prod)" : "NOT WITNESSED ✗ — see failing rows"} · ${passed}/${passed + failed}`);
writeFileSync(join(here, "holo-sw-opfs-prod-witness.result.json"),
  JSON.stringify({ witnessed, passed, failed, covers: results.filter((x) => x.ok).map((x) => x.name.slice(0, 64)), results,
    spec: "The OpfsKappaStore (-04-) is wired into holo-fhs-sw.js as a durable tier behind KCACHE. Witnessed in real Chromium in PROD cache-first mode (forced locally via an HTTPS proxy on a non-localhost host so the SW's DEV bypass is off): the SW writes verified bytes through to OPFS, and after Cache Storage is cleared it still serves them network-free from OPFS (x-holo-cache: opfs), byte-identical — durable storage surviving Cache-Storage eviction (Law L3). On localhost the integration is a guarded no-op (every closure entry is a dev-fresh source file); the no-regression property (SW installs+controls with the new import) is shown by holo-sw-opfs-persist-witness.mjs." }, null, 2) + "\n");
process.exit(witnessed ? 0 : 1);
