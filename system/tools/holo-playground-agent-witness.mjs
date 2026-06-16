// holo-playground-agent-witness.mjs — proves Holo Playground: every element rendered INSIDE a holo app is a
// κ-addressed object you can right-click and edit live, and that edit bottoms out in the ONE primitive
// (createLiveEditor) — no second sealer, no shadow copy, L5 re-derivable, with the agent's own UI stripped
// before sealing. Pure: a tiny deterministic DOM (no jsdom), the host wired to the REAL HoloRepo.publishSource
// and the REAL createLiveEditor — the same dispatch that runs in the shell (the Atlas-isomorphism discipline).
//
// Run: node system/tools/holo-playground-agent-witness.mjs

import { createPlaygroundAgent, createPlaygroundHost } from "../os/usr/lib/holo/holo-playground-agent.mjs";
import { createLiveEditor } from "../os/usr/lib/holo/holo-live-edit.mjs";
import { HoloRepo } from "../os/usr/lib/holo/holo-blocks-repo.mjs";
import { verify as verifyObject } from "../os/usr/lib/holo/holo-object.mjs";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
const ok = (n, c, x = "") => { (c ? pass++ : fail++); checks[(slug(n) || "check") + "-" + (++kn)] = !!c; console.log((c ? "  ok  " : " FAIL ") + n + (x ? "  — " + x : "")); };

// ── a tiny deterministic DOM (only what serializeNode touches: nodeType/childNodes/attributes/nodeValue) ──
const mkText = (t) => ({ nodeType: 3, nodeName: "#text", nodeValue: t, childNodes: [] });
const mkComment = (t) => ({ nodeType: 8, nodeName: "#comment", nodeValue: t, childNodes: [] });
function mkEl(tag, attrs = {}, kids = []) {
  const attributes = Object.entries(attrs).map(([name, value]) => ({ name, value: String(value) }));
  return {
    nodeType: 1, nodeName: tag.toUpperCase(), localName: tag.toLowerCase(), nodeValue: "", childNodes: kids, attributes,
    getAttribute(n) { const a = attributes.find((a) => a.name === n); return a ? a.value : null; },
  };
}
// the live app DOM AFTER injection: an ephemeral style + the agent script + a hovered element carry agent state.
//   <html><head><style ephemeral></head>
//   <body class="app"><h1 class="title holo-pg-hot">Hello</h1><p>world</p>
//                      <script id=holo-q-app ephemeral><script id=holo-playground-app ephemeral></body></html>
function buildDoc() {
  const style = mkEl("style", { "data-holo-ephemeral": "" }, [mkText(".x{color:red}")]);
  const h1 = mkEl("h1", { class: "title holo-pg-hot" }, [mkText("Hello")]);   // glow class must NOT persist
  const p = mkEl("p", {}, [mkText("world")]);
  const qScript = mkEl("script", { id: "holo-q-app", "data-holo-ephemeral": "" }, []);
  const pgScript = mkEl("script", { id: "holo-playground-app", "data-holo-ephemeral": "", "data-surface": "win-1" }, []);
  const head = mkEl("head", {}, [style]);
  const body = mkEl("body", { class: "app" }, [h1, p, qScript, pgScript]);
  const html = mkEl("html", { lang: "en" }, [head, body]);
  return { nodeType: 9, nodeName: "#document", documentElement: html, body, childNodes: [html] };
}

// ── 1) the L5 strip — the agent's own UI + ambient injected runtime never reach the sealed source ─────────
const doc = buildDoc();
const posted = [];
const agent = createPlaygroundAgent({ doc, win: null, surfaceId: "win-1", postUp: (m) => posted.push(m) });

// ── 0) OPT-IN: Playground is OFF by default (no hover-glow / right-click hijack until asked) ───────────────
ok("Playground is OFF by default (dormant until opted in — no hover selection)", agent.isActive() === false);
agent.setActive(true);
ok("setActive(true) arms Playground for this surface", agent.isActive() === true);
agent.setActive(false);
ok("setActive(false) / Exit returns to dormant", agent.isActive() === false);

const src = agent.serialize();
ok("serialize() drops the agent script (#holo-playground-app)", !/holo-playground-app/.test(src), src.slice(0, 120));
ok("serialize() drops the ambient Q script (#holo-q-app)", !/holo-q-app/.test(src));
ok("serialize() drops the ephemeral <style>", !/data-holo-ephemeral|color:red/.test(src));
ok("serialize() drops the transient .holo-pg-hot glow class", !/holo-pg-hot/.test(src));
ok("serialize() KEEPS the user content (the actual app source)", /<h1 class="title">Hello<\/h1>/.test(src) && /<p>world<\/p>/.test(src), src);
ok("serialize() is a full document (doctype + html root)", /^<!doctype html>\n<html /.test(src));

// ── 1b) HOST / IN-SHELL mode: serialise a SUB-TREE (a non-iframe surface root, e.g. a pure component) ──────
// no doctype (it's an element, not a document), and the ephemeral + glow strip still applies (Law L5).
const subRoot = mkEl("section", { class: "card holo-pg-hot" }, [mkEl("h2", {}, [mkText("Title")]), mkEl("style", { "data-holo-ephemeral": "" }, [mkText("x{}")])]);
const subHtml = agent.serialize(subRoot);
ok("host mode: serialize(subtree) is the element HTML, no doctype", /^<section class="card">/.test(subHtml) && !/doctype/i.test(subHtml), subHtml);
ok("host mode: subtree serialize strips ephemeral + glow, keeps content", !/data-holo-ephemeral|holo-pg-hot|x\{\}/.test(subHtml) && /<h2>Title<\/h2>/.test(subHtml));

// ── 2) ONE edit path: the agent emits ONLY a postUp message; it has NO sealer of its own ──────────────────
const msg = agent.requestReseal();
ok("requestReseal posts the clean source UP (the only outbound effect)", posted.length === 1 && posted[0].op === "reseal" && posted[0].surfaceId === "win-1" && posted[0].source === src);
ok("the agent exposes NO seal/publishSource (no second sealer)", typeof agent.seal === "undefined" && typeof agent.publishSource === "undefined");

// ── the host wired to the REAL substrate (the same createLiveEditor + HoloRepo the shell uses) ────────────
const repo = new HoloRepo();
let renders = 0, inPlaceFlags = 0;
const editor = createLiveEditor({ seal: (name, source) => repo.publishSource({ name: name || "app", source }), gate: () => null, now: () => 1700000000000 });
editor.register("win-1", { name: "App", render: () => { renders++; } });
const FRAME = { id: "the-app-frame" };          // stands in for f.contentWindow of the mounted surface
const replies = [], lineages = [];
const host = createPlaygroundHost({
  editor,
  frameFor: (id) => (id === "win-1" ? FRAME : null),
  beforeEdit: () => { inPlaceFlags++; },
  onLineage: (e) => lineages.push(e),
  replyTo: (id, m) => replies.push({ id, m }),
});

// ── 3) an accepted in-frame edit routes to createLiveEditor.edit → a NEW κ, re-render, in-place flag ──────
const r1 = host.handle({ data: msg, source: FRAME });
ok("an in-frame edit reseals through the ONE primitive → ok + a new κ", r1 && r1.ok === true && r1.changed === true && /^did:holo:sha256:/.test(r1.kappa));
ok("the host flags mutate-in-place (reseal κ, skip the srcdoc reload)", inPlaceFlags === 1 && renders === 1);
ok("the resulting κ is posted back to the frame (the loop closes visibly)", replies.length === 1 && replies[0].m.op === "sealed" && replies[0].m.kappa === r1.kappa);

// ── 4) the edited object re-derives by content (Law L5) ───────────────────────────────────────────────────
const obj = JSON.parse(repo.objStore.get(r1.kappa.split(":").pop()));
ok("the edited surface re-derives (verify by content, Law L5)", verifyObject({ ...obj, id: r1.kappa }) === true);

// ── 5) content-addressing intact: the κ === publishSource(source) — lineage is NOT folded into the κ ──────
ok("the edit κ === repo.publishSource(source) (pure content address, memo-safe)", r1.kappa === repo.publishSource({ name: "App", source: src }).id);
ok("lineage is recorded as an OUT-OF-BAND prov edge, not inside the κ", obj["prov:wasDerivedFrom"] === undefined);

// ── 6) a SECOND, different edit records prior→new lineage (free undo/redo trail) ──────────────────────────
const src2 = "<!doctype html>\n<html><body><h1>Hello again</h1></body></html>";
const r2 = host.handle({ data: { t: "holo-live-edit", op: "reseal", surfaceId: "win-1", source: src2 }, source: FRAME });
ok("a changed edit → a new κ + a prov:Derivation edge prior→new", r2.changed === true && r2.kappa !== r1.kappa && lineages.length === 1 && lineages[0]["prov:wasDerivedFrom"] === r1.kappa && lineages[0]["prov:generated"] === r2.kappa);

// ── 7) κ-memo: re-sealing identical source is an O(1) no-op (no re-render, no spurious lineage) ───────────
const before = renders, beforeLin = lineages.length;
const r3 = host.handle({ data: { t: "holo-live-edit", op: "reseal", surfaceId: "win-1", source: src2 }, source: FRAME });
ok("identical source → same κ, O(1) no-op (no re-render, no lineage edge)", r3.changed === false && renders === before && lineages.length === beforeLin, "renders=" + renders);

// ── 8) the origin guard — a message whose source is NOT the mounted frame is REFUSED (un-forgeable) ───────
const IMPOSTER = { id: "evil-window" };
const bad = host.handle({ data: { t: "holo-live-edit", op: "reseal", surfaceId: "win-1", source: "<h1>pwned</h1>" }, source: IMPOSTER });
ok("a forged sender (event.source ≠ the mounted frame) is refused — no edit applied", bad && bad.rejected === true && renders === before);

// ── 9) a non-reseal / unknown message is ignored cleanly ─────────────────────────────────────────────────
ok("an unrelated message is ignored (returns null, no throw)", host.handle({ data: { t: "other" }, source: FRAME }) === null);

// ── 10) the GOVERNED door stays fail-closed — an external agent edit with NO conscience is refused ───────
const noGate = createLiveEditor({ seal: (name, source) => repo.publishSource({ name, source }), gate: () => null });
noGate.register("win-1", { name: "App", render: () => {} });
ok("agentEdit (the governed door) with NO conscience → refused (fail-closed, exposure ≠ authorization)", (await noGate.agentEdit("win-1", "<h1>x</h1>", { caller: "bot" })).refused === true);

const result = { "@type": "earl:TestResult", witnessed: fail === 0,
  subject: "Holo Playground — every element in a holo app is a κ-addressed object, right-click-editable live; the edit reseals the host surface to a NEW κ through the ONE liveEdit primitive (no second sealer, no shadow copy, L5 re-derivable, agent UI stripped before sealing, mutate-in-place, out-of-band lineage, origin-guarded)",
  passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-playground-agent-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
