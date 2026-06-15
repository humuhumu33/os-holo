// holo-forge-bundle-witness.mjs — proves the FORGE bundler class (ADR-0093, the "any repo" widener): a
// CLIENT-BUNDLE repo (Vite/React/webpack — a real source tree) → ONE self-contained, content-addressed
// Holo app via a REAL in-browser-grade esbuild κ-transform. Drives the REAL esbuild (the in-tree binary)
// so "it bundles" is honest, not mocked; bare deps resolve through an injected resolveBare (the CDN ingest
// boundary, here a hermetic stub). Re-derivable (esbuild is deterministic → same κ), seals exactly like a
// studio app (κ-parity), and the imported bundle agent-wires (ADR-0093) like any other import.

import esbuild from "../docs/site/node_modules/esbuild/lib/main.js";   // the real bundler, injected (browser: esbuild-wasm)
import { makeBundler, findEntry, bundleRepo } from "../os/usr/lib/holo/holo-forge-bundle.mjs";
import importer, { importRepo, classify } from "../os/usr/lib/holo/holo-import.mjs";
import { deriveAgentSurface } from "../os/usr/lib/holo/holo-import-agent.mjs";
import { buildAppRegistry, handle } from "../os/usr/lib/holo/mcp/holo-mcp.mjs";
import { HoloRepo, sha256hex } from "../os/usr/lib/holo/holo-blocks-repo.mjs";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
const ok = (n, c, x = "") => { (c ? pass++ : fail++); checks[(slug(n) || "check") + "-" + (++kn)] = !!c; console.log((c ? "  ok  " : " FAIL ") + n + (x ? "  — " + x : "")); };

// ── a real client-bundle repo (Vite-shaped): an HTML entry → a module → a relative import + a BARE dep ──
const mapOf = (o) => new Map(Object.entries(o).map(([k, v]) => [k, { text: v }]));
const REPO = mapOf({
  "package.json": JSON.stringify({ name: "counter", devDependencies: { vite: "^5" }, scripts: { build: "vite build" } }),
  "index.html": '<!doctype html><html><head><title>Counter</title></head><body><div id="root"></div><script type="module" src="/src/main.js"></script></body></html>',
  "src/main.js": "import { view } from './ui.js';\nimport { ten } from 'tiny-dep';\ndocument.getElementById('root').innerHTML = view(ten());",
  "src/ui.js": "export const view = (n) => '<h1>Count: ' + n + '</h1>';",
});
const resolveBare = async (spec) => spec === "tiny-dep" ? { contents: "export const ten = () => 10;" } : null;
const fetchRepo = async () => ({ commit: "f".repeat(40), files: REPO });

// ── 1) classify → forge, and forge is gated on a bundler being injected ──────────────────────────────
ok("classify → client-bundle / forge", (() => { const c = classify({ files: [...REPO.keys()], pkg: JSON.parse(REPO.get("package.json").text) }); return c.class === "client-bundle" && c.path === "forge"; })());
const noBundler = await importRepo({ input: "acme/counter", fetchRepo, hash: sha256hex });
ok("forge WITHOUT a bundler → runnable:false (honest staged, never faked)", noBundler.ok && noBundler.runnable === false);

// ── 2) the REAL esbuild κ-transform bundles the repo into one self-contained app ─────────────────────
const bundle = makeBundler({ esbuild, resolveBare, hash: sha256hex });
const imp = await importRepo({ input: "https://github.com/acme/counter", fetchRepo, hash: sha256hex, bundle });
ok("forge WITH esbuild → runnable", imp.ok && imp.runnable && !!imp.app && !!imp.html, imp.runnable ? "" : imp.reason);
ok("the relative module is bundled in (no /src/main.js ref remains)", imp.html.includes("Count:") && !/src=["']\/src\/main\.js/.test(imp.html));
ok("the BARE dep resolved via resolveBare (the CDN ingest boundary) is inlined", imp.html.includes("() => 10") || imp.html.includes("ten"));
ok("the bundle is self-contained (no unresolved deps) → 0-network at runtime", imp.selfContained === true && imp.externalRefs.length === 0);
ok("a forge build receipt is minted (κ-transform, ADR-0051)", imp.built && imp.built.receipt && /Compilation|esbuild/.test(JSON.stringify(imp.built.receipt)));

// ── 3) re-derivable (Law L5): esbuild is deterministic → a re-import seals the SAME app κ ─────────────
const imp2 = await importRepo({ input: "acme/counter", fetchRepo, hash: sha256hex, bundle });
ok("re-import bundles to the SAME app κ (deterministic, re-derivable)", imp2.app.id === imp.app.id, imp.app.id.slice(0, 30) + "…");

// ── 4) κ-PARITY: a forge app seals exactly like a studio app of the same source (first-class) ─────────
const repo = new HoloRepo();
ok("forge app κ === repo.publishSource κ (a bundled app is first-class)", imp.app.id === repo.publishSource({ name: "counter", source: imp.html }).id);

// ── 5) a bundled import AGENT-WIRES like any other (ADR-0093) ─────────────────────────────────────────
const surf = deriveAgentSurface(imp, { hash: sha256hex });
const reg = buildAppRegistry(surf.manifest);
const res = (await handle({ jsonrpc: "2.0", id: 1, method: "resources/list" }, { registry: reg, resolve: surf.resolve })).result.resources;
ok("the bundled app exposes its κ over MCP (agent-accessible)", res.some((r) => r.uri === imp.app.id));

// ── 6) an UNRESOLVABLE bare dep is an HONEST build error, never a fake bundle ─────────────────────────
const badImp = await importRepo({ input: "acme/counter", fetchRepo, hash: sha256hex, bundle: makeBundler({ esbuild, resolveBare: null, hash: sha256hex }) });
ok("a bare dep with NO resolver → runnable:false with the dep named (honest)", badImp.runnable === false && /tiny-dep|resolver|bundle failed/i.test(badImp.reason));

// ── 7) JSX compiles (the React path) — esbuild jsx:automatic, jsx-runtime stubbed via resolveBare ─────
const JSXREPO = mapOf({
  "package.json": JSON.stringify({ name: "jsxapp", dependencies: { react: "^18" }, devDependencies: { vite: "^5" } }),
  "index.html": '<!doctype html><body><div id="root"></div><script type="module" src="/src/main.jsx"></script></body>',
  "src/main.jsx": "const el = <h1>Hi {1 + 1}</h1>;\ndocument.getElementById('root').appendChild(el);",
});
const jsxRuntime = async (spec) => /jsx-runtime$/.test(spec) ? { contents: "export const jsx=(t,p)=>({t,p});export const jsxs=jsx;export const Fragment='F';" } : null;
const jsxImp = await importRepo({ input: "acme/jsxapp", fetchRepo: async () => ({ commit: "a".repeat(40), files: JSXREPO }), hash: sha256hex, bundle: makeBundler({ esbuild, resolveBare: jsxRuntime, hash: sha256hex }) });
ok("a JSX (React-style) entry compiles + bundles into one app", jsxImp.runnable === true && !!jsxImp.app, jsxImp.runnable ? "" : jsxImp.reason);

const result = { "@type": "earl:TestResult", witnessed: fail === 0,
  subject: "Holo Forge bundler class — a client-bundle GitHub repo → one self-contained, content-addressed, agent-wired Holo app via a real esbuild κ-transform (ADR-0093)",
  passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-forge-bundle-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
if (esbuild.stop) await esbuild.stop();
process.exit(fail === 0 ? 0 : 1);
