#!/usr/bin/env node
// holo-devtools-cdp-witness.mjs — HOLO DEVTOOLS (ADR-0095): the κ-CDP backend. Proves the load-bearing
// half of the F12-for-holospaces design WITHOUT the browser or the vendored frontend — the backend is a
// PURE function from a CDP message to a κ operation, so it is witnessed in Node against the REAL substrate
// (holo-object + holo-scene). Proves: every CDP handle is an alias for a κ (L1); the DOM domain ⇄ the
// scene manifest and the node⇄κ map round-trips and re-derives identically (L1/L5); the Network domain is
// the κ-stream timeline with an L5 verify badge that goes RED on a tampered κ (L5); Runtime.evaluate is
// FAIL-CLOSED through the conscience and only routes on accept, sealing a receipt (L4, mirrors Q.agent);
// and ONE backend answers all three doors — human CDP, the agent MCP tool (self-verifying JSON-LD, NO CDP
// leakage), and the Holo Q verb — with no forked logic (the ADR-0091 pattern).
//
// Authority: Chrome DevTools Protocol (the UI's private transport) · W3C DID Core · W3C PROV-O ·
//   schema.org · IETF RFC 8785 (JCS) · UOR-ADDR · holospaces Law L1/L2/L3/L4/L5.
//   node tools/holo-devtools-cdp-witness.mjs
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { makeObject, put, resolve, verifyDeep, jcs } from "../os/usr/lib/holo/holo-object.mjs";
import { scene } from "../os/usr/lib/holo/holo-scene.mjs";
import { createDevToolsBackend, cdpDomFromScene } from "../os/usr/lib/holo/devtools/holo-devtools-backend.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {}; const fail = [];
const ok = (n, c, d = "") => { checks[n] = !!c; if (!c) fail.push(n + (d ? ` — ${d}` : "")); return !!c; };
const hexOf = (did) => String(did).split(":").pop();

// ── a real composed holospace: two self-verifying κ-objects placed in a scene ────────────────────
const store = new Map();
const note = makeObject(store, { type: ["schema:CreativeWork", "holo:Note"], "schema:text": "hello holospace" });
const clock = makeObject(store, { type: ["schema:SoftwareApplication", "holo:Widget"], "holo:widget": "clock" });
const sceneManifest = scene({
  type: "holo:AppScene",
  objects: [{ k: note.id, x: 40, y: 60, w: 200, h: 120 }, { k: clock.id, x: 300, y: 80, w: 160, h: 160 }],
});

const be = createDevToolsBackend({ store, scene: sceneManifest });

// ── 1 · handshake — the scene is one CDP target ──
const targets = be.dispatch("Target.getTargets");
ok("handshake-scene-is-a-target", targets.targetInfos.length === 1 && targets.targetInfos[0].title === "holo:AppScene");

// ── 2 · DOM.getDocument ⇄ the scene tree; every node carries its κ (L1) ──
const doc = be.dispatch("DOM.getDocument");
const htmlNode = doc.root.children[0];          // HTML — the documentElement the Elements panel renders from
const sceneNode = htmlNode.children[0];          // BODY — carries scene-type, holds the placed κ-objects
const objNodes = sceneNode.children;
ok("dom-is-the-scene-tree",
  doc.root.nodeType === 9 && htmlNode.nodeName === "HTML" && sceneNode.localName === "body" && objNodes.length === 2 &&
  objNodes.every((n) => n.localName === "holo-object"));
ok("every-node-is-an-alias-for-a-kappa",
  objNodes.map((n) => n.kappa).sort().join("|") === [note.id, clock.id].sort().join("|"));

// ── 3 · the node ⇄ κ map round-trips (backendNodeId ⇄ κ) ──
const someNodeId = objNodes[0].nodeId;
const resolved = be.dispatch("DOM.resolveNode", { nodeId: someNodeId });
const back = be.dispatch("DOM.pushNodesByBackendIdsToFrontend", { backendNodeIds: [resolved.object.objectId] });
ok("node-kappa-roundtrips",
  resolved.object.objectId === objNodes[0].kappa && back.nodeIds[0] === someNodeId);

// ── 4 · DETERMINISM — the same scene re-derives the SAME node⇄κ assignment (L1/L5) ──
const dom2 = cdpDomFromScene(sceneManifest, { store });
const sameMap = [...be.cdpDom().byNode.entries()].every(([id, k]) => dom2.byNode.get(id) === k) &&
  be.cdpDom().byNode.size === dom2.byNode.size;
ok("node-ids-re-derive-from-the-content-addressed-scene", sameMap);

// ── 5 · Network = the κ-stream timeline; a resolvable κ shows a GREEN verify badge (L5) ──
const net = be.dispatch("Network.getResponseBody", { requestId: note.id });
ok("network-resolves-kappa-with-green-verify-badge",
  net.holo.found === true && net.holo.verify.ok === true && net.holo.axis === "sha256" &&
  JSON.parse(net.body)["schema:text"] === "hello holospace");

// ── 6 · Law L5 — a TAMPERED κ shows the RED badge (re-derivation refuses it) ──
const victim = makeObject(store, { type: "holo:Note", "schema:text": "original" });
const tampered = JSON.parse(jcs(resolve(store, victim.id)));
tampered["schema:text"] = "TAMPERED";                          // change content, keep the id → id no longer re-derives
store.set(hexOf(victim.id), Buffer.from(JSON.stringify(tampered), "utf8"));
const netBad = be.dispatch("Network.getResponseBody", { requestId: victim.id });
ok("tampered-kappa-shows-red-verify-badge", netBad.holo.found === true && netBad.holo.verify.ok === false);

// ── 7 · Runtime.evaluate is FAIL-CLOSED with no conscience (L4) ──
const r0 = be.dispatch("Runtime.evaluate", { expression: "delete everything" });
ok("eval-fail-closed-without-conscience", r0.refused === true && /fail-closed/.test(r0.reason));

// ── 8 · a BLOCKING conscience refuses; an ACCEPTING one routes through Q + seals a receipt (mirrors Q.agent) ──
const blockBe = createDevToolsBackend({ store, scene: sceneManifest,
  conscience: { evaluate: () => ({ outcome: "block", reason: "no" }) }, qAgent: () => ({ kappa: note.id }) });
const rBlock = blockBe.dispatch("Runtime.evaluate", { expression: "x" });
ok("eval-refused-when-conscience-blocks", rBlock.refused === true);

const govBe = createDevToolsBackend({ store, scene: sceneManifest,
  conscience: { evaluate: () => ({ outcome: "accept" }) },
  qAgent: (expr) => ({ kappa: note.id, value: "ok:" + expr }) });
const rOk = govBe.dispatch("Runtime.evaluate", { expression: "inspect this" });
ok("eval-accepted-routes-through-Q-and-seals-a-receipt",
  rOk.result && rOk.result.objectId === note.id && rOk.receipt &&
  rOk.receipt.verb === "devtools.eval" && rOk.receipt.effectKappa === note.id);

// ── 9 · ONE backend, THREE doors — the agent MCP tool + the Q verb hit the SAME dispatch ──
const toolDoc = await be.tool("devtools_query_dom", {});
const qDoc = await be.qInspect("DOM.getDocument");
ok("one-backend-three-doors",
  qDoc.root.nodeId === doc.root.nodeId &&
  toolDoc["holo:result"].root.nodeId === doc.root.nodeId);

// ── 10 · the AGENT door is W3C-native: a self-verifying JSON-LD envelope, NOT a raw CDP frame (§7 T1) ──
ok("agent-door-returns-jsonld-not-cdp",
  !!toolDoc["@context"] && toolDoc["@context"].schema === "https://schema.org/" &&
  [].concat(toolDoc["@type"]).includes("prov:Activity") && toolDoc["holo:caller"] === "agent");

// ── 11 · graceful degradation — an unmapped CDP method returns a clean "unsupported" (§8) ──
const un = be.dispatch("Debugger.setBreakpoint", {});
ok("unmapped-method-degrades-gracefully", un.error === "unsupported" && un.method === "Debugger.setBreakpoint");

// ── 12 · L3 — a repeat inspection of an unchanged κ is stable (κ-memoizable; the cache IS the memo) ──
const a1 = be.inspectKappa(note.id), a2 = be.inspectKappa(note.id);
ok("repeat-inspection-is-stable-kappa-memoizable",
  a1.verify.ok && a2.verify.ok && JSON.stringify(a1.object) === JSON.stringify(a2.object));

// ── 13 · the WRITE door — DevTools EDIT → liveEdit (ADR-0093): the same κ-act the Build chat performs.
//    Read-only without a live editor; FAIL-CLOSED + conscience-gated; a granted edit drives liveEdit and
//    advances the holospace κ; DOM.setOuterHTML maps the node → its κ first. (Mirrors Runtime.evaluate.) ──
const accept = { evaluate: () => ({ outcome: "accept" }) };
ok("write-read-only-without-live-editor",
  createDevToolsBackend({ store, scene: sceneManifest, conscience: accept }).dispatch("Page.setDocumentContent", { html: "<h1>x</h1>" }).refused === true);
let edits = [];
ok("write-fail-closed-without-conscience",
  createDevToolsBackend({ store, scene: sceneManifest, liveEdit: (a) => { edits.push(a); return { ok: true }; } }).dispatch("Page.setDocumentContent", { html: "<h1>x</h1>" }).refused === true && edits.length === 0);
edits = [];
ok("write-refused-when-conscience-blocks",
  createDevToolsBackend({ store, scene: sceneManifest, conscience: { evaluate: () => ({ outcome: "block", reason: "policy" }) }, liveEdit: (a) => { edits.push(a); return { ok: true }; } }).dispatch("DOM.setOuterHTML", { nodeId: someNodeId, outerHTML: "<b>x</b>" }).refused === true && edits.length === 0);
edits = [];
const okEd = createDevToolsBackend({ store, scene: sceneManifest, conscience: accept, liveEdit: (a) => { edits.push(a); return { ok: true, kappa: "did:holo:sha256:" + "f".repeat(64) }; } });
const wrote = okEd.dispatch("Page.setDocumentContent", { html: "<h1>edited via devtools</h1>" });
ok("write-accepted-drives-liveEdit-with-source-and-new-kappa",
  edits.length === 1 && edits[0].source === "<h1>edited via devtools</h1>" && wrote.holo && /^did:holo:sha256:/.test(wrote.holo.kappa));
const wroteNode = okEd.dispatch("DOM.setOuterHTML", { nodeId: someNodeId, outerHTML: "<b>n</b>" });
ok("setOuterHTML-maps-node-to-kappa-then-edits",
  edits.length === 2 && edits[1].method === "DOM.setOuterHTML" && !!edits[1].kappa && wroteNode.holo);

const witnessed = Object.values(checks).every(Boolean);
const result = {
  "@type": "earl:TestResult",
  witnessed,
  subject: "Holo DevTools κ-CDP backend (ADR-0095) — every CDP handle is an alias for a κ; one backend, three doors",
  covers: [
    "handshake — a holospace scene is one CDP target",
    "DOM domain ⇄ the scene manifest tree; every node is an alias for a κ (Law L1)",
    "the node ⇄ κ map round-trips (backendNodeId ⇄ κ) and re-derives identically from the content-addressed scene (Law L1/L5)",
    "Network domain = the κ-stream timeline with an L5 verify badge (axis · found · verify); a resolvable κ is GREEN",
    "Law L5 — a tampered κ shows the RED verify badge (re-derivation refuses it)",
    "Runtime.evaluate is FAIL-CLOSED with no conscience; a blocking conscience refuses; an accepting one routes through Q and seals a PROV-O-shaped receipt (Law L4, mirrors Q.agent / ADR-0091)",
    "ONE backend, THREE doors — human CDP (serve), the agent MCP tool, and the Holo Q verb all land on the same dispatch with no forked logic",
    "the agent door is W3C-native — a self-verifying JSON-LD envelope (schema.org ⊕ PROV-O ⊕ DID), NOT a raw CDP frame (ADR-0095 §7 T1: CDP stays the human door's private transport)",
    "graceful degradation — an unmapped CDP method returns a clean 'unsupported' (a faithful SUBSET, ADR-0095 §8)",
    "Law L3 — repeat inspection of an unchanged κ is stable (the κ-memo IS the DevTools cache)",
  ],
  scene: { kappa: undefined, type: sceneManifest["@type"], objects: sceneManifest.objects.map((o) => o.k) },
  checks, failed: fail,
  authority: "Chrome DevTools Protocol (the human UI's private transport) · W3C DID Core · W3C PROV-O · schema.org · IETF RFC 8785 (JCS) · UOR-ADDR · holospaces Law L1/L2/L3/L4/L5",
};
writeFileSync(join(here, "holo-devtools-cdp-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("Holo DevTools witness — the κ-CDP backend (one backend, three doors)\n");
for (const [k, v] of Object.entries(checks)) console.log(`  ${v ? "✓" : "✗"}  ${k}`);
console.log(`\n  scene ${sceneManifest["@type"]} · objects ${sceneManifest.objects.map((o) => o.k.slice(0, 24) + "…").join(", ")}`);
console.log(`\n  ${witnessed ? "WITNESSED ✓" : "NOT witnessed — " + fail.join("; ")}`);
process.exit(witnessed ? 0 : 1);
