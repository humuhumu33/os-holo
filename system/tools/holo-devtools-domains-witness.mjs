#!/usr/bin/env node
// holo-devtools-domains-witness.mjs — HOLO DEVTOOLS (ADR-0095): the REMAINING CDP domains over the κ
// substrate + the live-shell governance branch. Bet B proved DOM/Network/Runtime; this extends the κ-CDP
// backend across the rest of the F12 surface and proves the holo-gov.js wiring:
//   • CSS         — Styles resolves the --holo-* design tokens AND surfaces the readability FLOOR
//                   (ADR-0057, --holo-font-min) as an un-overridable rule (WCAG, §7 T2)
//   • Sources     — Debugger.getScriptSource returns the source κ (publishSource → SoftwareSourceCode,
//                   ADR-0055), with the L5 verify badge; SOURCE-by-κ, NOT a live V8 debugger (§8)
//   • Memory      — HeapProfiler snapshot IS the κ store: node=κ-object, edges=links[] (the Merkle-DAG,
//                   ADR-0060), dedup visible (one κ stored once)
//   • Performance — substrate counters (resolves/frames/objects); wall-clock is HOST-ATTESTED, not faked
//                   (the Holo Telemetry honesty split, ADR-0073)
//   • Application — Storage.getUsageAndQuota reports the κ-store usage + the live scene
//   • GOV BRANCH  — holo-gov.js routes method:"cdp" to W.HoloDevToolsServe, FAIL-CLOSED (the design's
//                   "holo-gov.js gains ONE branch" claim, asserted against the real edited file)
//
// Authority: Chrome DevTools Protocol (the human UI's private transport) · W3C PROV-O · schema.org ·
//   ADR-0057 (readability floor / WCAG) · ADR-0060 (link closure) · ADR-0073 (telemetry honesty) ·
//   holospaces Law L1/L3/L4/L5.   node tools/holo-devtools-domains-witness.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { makeObject, linkTo } from "../os/usr/lib/holo/holo-object.mjs";
import { scene } from "../os/usr/lib/holo/holo-scene.mjs";
import { createDevToolsBackend } from "../os/usr/lib/holo/devtools/holo-devtools-backend.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {}; const fail = [];
const ok = (n, c, d = "") => { checks[n] = !!c; if (!c) fail.push(n + (d ? ` — ${d}` : "")); return !!c; };

// ── a real composed holospace: a source object + a parent→child link (an edge for the heap) ──
const store = new Map();
const child = makeObject(store, { type: "holo:Leaf", "schema:name": "child" });
const note = makeObject(store, { type: ["schema:CreativeWork", "holo:Note"], "schema:text": "domains hello",
  links: [linkTo(store, "schema:hasPart", child)] });                       // 1 edge
const source = makeObject(store, { type: ["schema:SoftwareSourceCode", "schema:WebApplication"],
  "schema:name": "app.js", "schema:text": "export const answer = 42;\n" });
const sceneManifest = scene({ type: "holo:AppScene", objects: [
  { k: note.id, x: 10, y: 20, w: 100, h: 80 }, { k: source.id, x: 200, y: 40, w: 120, h: 120 } ] });

const theme = (kappa) => [{ name: "--holo-accent", value: "#7cf" }, { name: "--holo-bg", value: "#0b0d10" }];
const be = createDevToolsBackend({ store, scene: sceneManifest, theme });
const noteNodeId = be.cdpDom().byKappa.get(note.id);

// ── 1 · CSS — resolves --holo-* tokens AND surfaces the readability floor as un-overridable (ADR-0057) ──
const css = be.dispatch("CSS.getComputedStyleForNode", { nodeId: noteNodeId });
const floor = css.computedStyle.find((p) => p.name === "--holo-font-min");
ok("css-resolves-tokens-and-enforces-floor",
  css.computedStyle.some((p) => p.name === "--holo-accent") && floor && floor.important === true && css.holo.floorEnforced === true);

// ── 2 · Sources — getScriptSource by the source κ returns the text + L5 badge (ADR-0055) ──
const src = be.dispatch("Debugger.getScriptSource", { scriptId: source.id });
ok("sources-getScriptSource-by-kappa", src.scriptSource.includes("answer = 42") && src.holo.verify.ok === true);

// ── 3 · Memory — the heap IS the κ store; node count = entries, edges = links (Merkle-DAG, ADR-0060) ──
const heap = be.dispatch("HeapProfiler.takeHeapSnapshot");
ok("memory-heap-is-the-kappa-store",
  heap.holo.nodes === store.size && heap.holo.distinctKappa === store.size && heap.holo.edges >= 1);

// ── 4 · Performance — substrate counters present; wall-clock is HOST-ATTESTED, not faked (ADR-0073) ──
const perf = be.dispatch("Performance.getMetrics");
const m = Object.fromEntries(perf.metrics.map((x) => [x.name, x.value]));
ok("performance-substrate-metrics-not-faked-walltime",
  typeof m.KappaResolves === "number" && m.StoreObjects === store.size && /host-attested/.test(perf.holo.wallClock));

// ── 5 · Application — κ-store usage + the live scene ──
const app = be.dispatch("Storage.getUsageAndQuota");
ok("application-reports-store-usage-and-scene",
  app.usage > 0 && app.holo.objects === 2 && app.holo.sceneType === "holo:AppScene");

// ── 6 · graceful degradation still holds for the now-larger surface (ADR-0095 §8) ──
const un = be.dispatch("Debugger.setBreakpointByUrl", {});
ok("unmapped-still-degrades", un.error === "unsupported");

// ── 7 · GOV BRANCH — holo-gov.js routes method:"cdp" to W.HoloDevToolsServe, FAIL-CLOSED (real file) ──
const gov = readFileSync(join(here, "../os/usr/lib/holo/holo-gov.js"), "utf8");
ok("gov-cdp-branch-wired", /d\.method === "cdp"/.test(gov) && /W\.HoloDevToolsServe/.test(gov));
ok("gov-cdp-branch-fail-closed",
  /typeof W\.HoloDevToolsServe !== "function"\) return reply\(null, "no devtools authority"\)/.test(gov));
ok("gov-cdp-asserts-app-identity", /app: app\.did \|\| app\.id \|\| app\.name/.test(gov.split('d.method === "cdp"')[1] || ""));

const witnessed = Object.values(checks).every(Boolean);
const result = {
  "@type": "earl:TestResult",
  witnessed,
  subject: "Holo DevTools — the remaining CDP domains over the κ substrate + the holo-gov.js cdp branch (ADR-0095)",
  covers: [
    "CSS — the Styles panel resolves the --holo-* design tokens and surfaces the readability FLOOR (--holo-font-min, ADR-0057) as an un-overridable !important rule (WCAG, §7 T2)",
    "Sources — Debugger.getScriptSource returns the source κ's text (publishSource → SoftwareSourceCode, ADR-0055) with the L5 verify badge; SOURCE-by-κ, not a live V8 debugger (ADR-0095 §8 honest non-goal)",
    "Memory — the HeapProfiler snapshot IS the κ store: node=κ-object, edges=links[] (the Merkle-DAG, ADR-0060), dedup visible (distinctKappa===store size, one κ stored once)",
    "Performance — substrate counters (CDP frames · κ resolves · store objects · link edges); wall-clock is HOST-ATTESTED (rederivable=false), never faked (the Holo Telemetry honesty split, ADR-0073)",
    "Application — Storage.getUsageAndQuota reports κ-store usage + the live scene (type · object count · distinct κ)",
    "graceful degradation holds across the larger surface — an unmapped method returns a clean 'unsupported' (ADR-0095 §8)",
    "GOV BRANCH — holo-gov.js routes the human DevTools frame's method:'cdp' to W.HoloDevToolsServe, FAIL-CLOSED (no authority ⇒ refused) with the app identity host-asserted (byWin) — the design's 'holo-gov.js gains ONE branch', asserted against the real edited file",
  ],
  checks, failed: fail,
  authority: "Chrome DevTools Protocol (the human UI's private transport) · W3C PROV-O · schema.org · ADR-0057 (readability floor / WCAG) · ADR-0060 (link closure) · ADR-0073 (telemetry honesty) · ADR-0091 (the governed bus) · holospaces Law L1/L3/L4/L5",
};
writeFileSync(join(here, "holo-devtools-domains-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("Holo DevTools witness — the remaining CDP domains + the holo-gov.js cdp branch\n");
for (const [k, v] of Object.entries(checks)) console.log(`  ${v ? "✓" : "✗"}  ${k}`);
console.log(`\n  ${witnessed ? "WITNESSED ✓" : "NOT witnessed — " + fail.join("; ")}`);
process.exit(witnessed ? 0 : 1);
