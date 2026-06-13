#!/usr/bin/env node
// holo-heal-witness.mjs — proves AUTONOMOUS SELF-HEALING is sound: the OS recovers a corrupted or
// missing κ-object from an alternate source and serves it ONLY after re-derivation (Law L5), never
// laundering a wrong byte, never touching the sealed anchor, and witnessing every repair. Detection
// (re-derive + refuse) was already witnessed across the substrate rows; this proves the RECOVERY leg
// the substrate was missing — turning a content address from a lie-detector into a healer.
//
// Checks (all must hold):
//   1 recoversFromMesh   — primary source corrupt, alternate healthy ⇒ healed; bytes re-derive to κ.
//   2 onlyVerifiedAdmitted — the bytes admitted to the store re-derive to their address (no laundering).
//   3 refusesWhenAllCorrupt — every source wrong ⇒ heal refuses (ok:false), serves nothing, stores nothing.
//   4 anchorNeverHealed  — an anchor κ is refused even when a healthy source HAS it (fail-closed, surfaced).
//   5 receiptVerifies    — a heal mints a PROV-O receipt that itself re-derives (Law L5); a tampered one fails.
//   6 seededServesLocal  — a healed object is persisted, then served from the local store (the device seeds).
//   7 scrubHealsAll      — the proactive sweep heals the missing, keeps the healthy, reports the unresolved,
//                          and SKIPS anchors — bringing every reachable non-anchor object healthy, no user action.
//   8 autonomousScrub    — the supervisor loop scrubs, logs verifiable receipts, attests health, idempotent when whole.
//   9 evolves            — the supervisor LEARNS per-κ flakiness from each sweep and re-sweeps the flaky FIRST /
//                          more often (verify → refocus → EVOLVE); the ranking is inspectable and folded into the attestation.
//  10 noStarveOnUnresolved — a MISS never escalates rank: an unresolvable κ can't monopolise a heal-budget; the recoverable one still heals.
//
// Authority (external): holospaces Laws L1/L3/L5 (identity is content · storage is a cache of the address
// space · verify by re-derivation) — docs/02-Architecture-Constraints · ADR-026 (Sovereign Delivery:
// cache → peers → origin, demoted) · W3C DID Core · W3C PROV-O · W3C Subresource Integrity · IETF RFC 8785
// (JCS) · IPFS Trustless Gateways (a sha-256 κ IS a CIDv1 sha2-256). Usage: node tools/holo-heal-witness.mjs

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { makeHealer, anchorSet } from "../os/sbin/holo-heal.mjs";
import { makeSupervisor } from "../os/sbin/holo-heal-supervisor.mjs";
import { reDerive, hexOf } from "../os/sbin/holo-resolver.mjs";
import { makeObject, verify } from "../os/usr/lib/holo/holo-object.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const write = (r) => writeFileSync(join(here, "holo-heal-witness.result.json"), JSON.stringify(r, null, 2) + "\n");
const enc = (s) => new TextEncoder().encode(s);
const kOf = async (bytes) => "did:holo:sha256:" + (await reDerive(bytes));

// a labelled source: async (κ) → bytes | null. It need NOT verify — the healer re-derives every byte.
const source = (label, pairs) => { const m = new Map(pairs.map(([k, b]) => [hexOf(k), b])); const s = async (k) => m.get(hexOf(k)) || null; s.peer = label; return s; };

// a node receipt sealer (the SW injects its browser twin) — a PROV-O activity sealed as a UOR object.
const receiptStore = new Map();
const sealReceipt = (info) => makeObject(receiptStore, {
  type: ["prov:Activity", "hosheal:Heal", "schema:UpdateAction"],
  context: [{ hosheal: "https://hologram.os/ns/heal#" }],
  "schema:name": "Self-heal — content recovered and re-derived (Law L5)",
  "hosheal:target": info.kappa,
  "hosheal:recoveredFrom": info.recoveredFrom,
  "hosheal:axis": info.axis,
  "hosheal:reDerived": info.reDerived,
  "hosheal:reason": info.reason,
  "prov:generatedAtTime": info.generatedAtTime,
});

const checks = {};
const A = enc("object-A · the real bytes"), B = enc("object-B · another real object");
const Abad = enc("object-A · TAMPERED — does not re-derive");
const kA = await kOf(A), kB = await kOf(B);
const kMiss = await kOf(enc("nobody serves this κ")), kAnchor = await kOf(enc("the sealed law — anchor"));

// ── 1 · recovers from the mesh: corrupt primary (origin), healthy alternate (ipfs) ──────────────
{
  const store = new Map(), durable = new Map();
  const h = makeHealer({
    sources: [source("origin", [[kA, Abad]]), source("ipfs", [[kA, A], [kB, B]])],
    store, persist: async (hex, b) => durable.set(hex, b), sealReceipt,
    now: () => "2026-06-13T00:00:00Z",
  });
  const r = await h.heal(kA);
  checks.recoversFromMesh = r.ok === true && r.recoveredFrom === "ipfs" && (await reDerive(r.bytes)) === hexOf(kA);
  // 2 · only κ-verified bytes were admitted to the store (the corrupt origin copy was refused, not laundered)
  checks.onlyVerifiedAdmitted = store.has(hexOf(kA)) && (await reDerive(store.get(hexOf(kA)))) === hexOf(kA) && !(await sameBytes(store.get(hexOf(kA)), Abad));
  // 5 · the heal minted a receipt that re-derives; a tampered receipt is refused (Law L5)
  const tampered = { ...r.receipt, "hosheal:recoveredFrom": "forged-provenance" };
  checks.receiptVerifies = !!r.receipt && verify(r.receipt) === true && verify(tampered) === false;
  // 6 · the device now seeds it: persisted, and served from the local store on the next heal (offline)
  const store2 = new Map([[hexOf(kA), durable.get(hexOf(kA))]]);
  const h2 = makeHealer({ sources: [], store: store2 });   // NO sources — only what the device already holds
  const r2 = await h2.heal(kA);
  checks.seededServesLocal = durable.has(hexOf(kA)) && r2.ok === true && r2.recoveredFrom === "store";
}

// ── 3 · refuses when every source is corrupt: serves nothing, stores nothing (fail-closed preserved) ─
{
  const store = new Map();
  const h = makeHealer({ sources: [source("origin", [[kA, Abad]]), source("ipfs", [[kA, Abad]])], store });
  const r = await h.heal(kA);
  checks.refusesWhenAllCorrupt = r.ok === false && r.refused === "unresolved" && r.bytes === undefined && !store.has(hexOf(kA));
}

// ── 4 · the sealed anchor is NEVER auto-healed, even when a healthy source has it ───────────────
{
  const store = new Map(), durable = new Map();
  const h = makeHealer({ sources: [source("ipfs", [[kAnchor, enc("the sealed law — anchor")]])], store, persist: async (hex, b) => durable.set(hex, b), isAnchor: anchorSet([kAnchor]) });
  const r = await h.heal(kAnchor);
  checks.anchorNeverHealed = r.ok === false && r.refused === "anchor" && !store.has(hexOf(kAnchor)) && !durable.has(hexOf(kAnchor));
}

// ── 7 · the proactive scrub: heal the missing, keep the healthy, report the unresolved, skip anchors ─
let scrubSummary = null;
{
  const durable = new Map([[hexOf(kA), A]]);                  // kA already healthy on-device
  const intact = async (hex) => durable.has(hex) && (await reDerive(durable.get(hex))) === hex;
  const h = makeHealer({
    sources: [source("ipfs", [[kA, A], [kB, B]])],            // peer has A and B, not kMiss / kAnchor
    store: new Map(), persist: async (hex, b) => durable.set(hex, b), sealReceipt,
    isAnchor: anchorSet([kAnchor]), now: () => "2026-06-13T00:00:00Z",
  });
  const closure = { "a.js": kA, "b.js": kB, "missing.js": kMiss, "law.json": kAnchor };
  scrubSummary = await h.scrub(closure, { intact });
  checks.scrubHealsAll =
    scrubSummary.total === 4 && scrubSummary.healthy === 1 && scrubSummary.healed === 1 &&
    scrubSummary.unresolved === 1 && scrubSummary.anchors === 1 &&
    durable.has(hexOf(kB)) && !durable.has(hexOf(kAnchor));   // B seeded; anchor never touched
}

// ── 8 · the AUTONOMOUS loop (no user action): the supervisor scrubs the closure, heals the missing,
//        keeps an append-only verifiable heal-log, seals a re-derivable health attestation, and is
//        idempotent once whole — invisible when healthy, self-evident (a witness) when it acts ───────
let attest1 = null;
{
  const durable = new Map([[hexOf(kA), A]]);                 // kA already healthy on-device
  const intact = async (hex) => durable.has(hex) && (await reDerive(durable.get(hex))) === hex;
  const healer = makeHealer({
    sources: [source("ipfs", [[kA, A], [kB, B]])],
    store: new Map(), persist: async (hex, b) => durable.set(hex, b), sealReceipt,
    isAnchor: anchorSet([kAnchor]), now: () => "2026-06-13T00:00:00Z",
  });
  const sealAttestation = (info) => makeObject(new Map(), {
    type: ["prov:Entity", "hosheal:HealthAttestation", "schema:DataFeed"],
    context: [{ hosheal: "https://hologram.os/ns/heal#" }],
    "schema:name": "OS health — re-derived self-attestation (Law L5)",
    "hosheal:total": info.total, "hosheal:healthy": info.healthy, "hosheal:healed": info.healed,
    "hosheal:unresolved": info.unresolved, "hosheal:anchors": info.anchors, "hosheal:whole": info.whole,
    "prov:generatedAtTime": info.generatedAtTime,
  });
  const closure = { "a.js": kA, "b.js": kB, "law.json": kAnchor };   // all reachable (a healthy, b healable), 1 anchor
  const sup = makeSupervisor({ loadClosure: async () => closure, healer, intact, sealAttestation, now: () => "2026-06-13T00:00:00Z" });

  const t1 = await sup.tick("boot");
  attest1 = t1.attestation;
  // first tick: healed the missing (b), kept the healthy (a), skipped the anchor, became WHOLE; attestation re-derives
  const tickHealsAndAttests = t1.summary.healed === 1 && t1.summary.healthy === 1 && t1.summary.anchors === 1 &&
    t1.summary.unresolved === 0 && verify(attest1) === true && attest1["hosheal:whole"] === true;
  // the heal-log is an append-only trail of VERIFIABLE receipts; the anchor never appears in it
  const logVerifies = sup.healLog.length === 1 && sup.healLog.every(verify) &&
    !sup.healLog.some((r) => r["hosheal:target"].endsWith(hexOf(kAnchor)));
  // a tampered attestation / log entry is refused (Law L5)
  const tamperRefused = verify({ ...attest1, "hosheal:whole": false }) === false &&
    verify({ ...sup.healLog[0], "hosheal:recoveredFrom": "forged" }) === false;

  const t2 = await sup.tick("idle");
  // IDEMPOTENT once whole: a second pass heals nothing (both objects now re-derive locally; anchor counted apart) and adds no receipts
  const idempotentWhenHealthy = t2.summary.healed === 0 && t2.summary.healthy === 2 && t2.summary.anchors === 1 && sup.healLog.length === 1;

  checks.autonomousScrub = tickHealsAndAttests && logVerifies && tamperRefused && idempotentWhenHealthy;
}

// ── 9 · the EVOLVE leg (verify → refocus → EVOLVE): the supervisor LEARNS which κ are historically flaky
//        and sweeps them FIRST / MORE OFTEN — self-improvement, not just self-healing. Proven, not asserted:
//        flakiness() exposes the learned ranking, the visit order front-loads it, a scarce heal-budget is
//        spent on the learned-flaky κ, and once it settles the deferred tail is no longer starved ────────
let evolveAttest = null;
{
  const Aflaky = enc("flaky object — re-breaks each tick"), C = enc("stable object"), D = enc("other broken object");
  const kFlaky = await kOf(Aflaky), kStable = await kOf(C), kOther = await kOf(D);
  const durable = new Map([[hexOf(kStable), C]]);            // only the stable one is healthy on-device
  let flakySettled = false;                                  // flip later to prove the deferred tail isn't starved
  const intact = async (hex) =>
    hex === hexOf(kStable) ? true :
    hex === hexOf(kFlaky) ? flakySettled :                   // latent re-corruption: not-intact until it settles
    durable.has(hex) && (await reDerive(durable.get(hex))) === hex;
  const healer = makeHealer({
    sources: [source("ipfs", [[kFlaky, Aflaky], [kOther, D]])],
    store: new Map(), persist: async (hex, b) => durable.set(hex, b), sealReceipt,
    now: () => "2026-06-13T00:00:00Z",
  });
  const sealAttestation = (info) => makeObject(new Map(), {
    type: ["prov:Entity", "hosheal:HealthAttestation", "schema:DataFeed"],
    context: [{ hosheal: "https://hologram.os/ns/heal#" }],
    "schema:name": "OS health — re-derived self-attestation with learned flakiness (Law L5)",
    "hosheal:total": info.total, "hosheal:healthy": info.healthy, "hosheal:healed": info.healed,
    "hosheal:unresolved": info.unresolved, "hosheal:deferred": info.deferred, "hosheal:anchors": info.anchors,
    "hosheal:tracked": info.tracked, "hosheal:flaky": info.flaky, "hosheal:whole": info.whole,
    "prov:generatedAtTime": info.generatedAtTime,
  });
  const closure = { "flaky.js": kFlaky, "stable.js": kStable, "other.js": kOther };
  // budget 1: only ONE object may be healed per sweep — so WHICH one the supervisor picks reveals what it learned
  const sup = makeSupervisor({ loadClosure: async () => closure, healer, intact, sealAttestation, budget: 1, now: () => "2026-06-13T00:00:00Z" });

  await sup.tick("boot");                                    // tick1: no history yet — original order heals flaky.js, defers other.js
  await sup.tick("idle");                                    // tick2: flaky now has a repair → ranked first → keeps the budget slot
  const t3 = await sup.tick("idle");                         // tick3: flaky still flakiest → swept first, gets the scarce heal
  evolveAttest = t3.attestation;

  const learned = sup.flakiness();
  const flakyRankedTop = learned.length > 0 && learned[0].hex === hexOf(kFlaky) && learned[0].repairs >= 2;
  const sweepsFlakyFirst = t3.order[0] === hexOf(kFlaky);                        // it VISITS the learned-flaky κ first
  const budgetSpentOnFlaky = t3.summary.healed === 1 && t3.summary.deferred >= 1; // the scarce slot went to the flaky one
  const attestLearns = verify(evolveAttest) === true && evolveAttest["hosheal:tracked"] >= 1 && evolveAttest["hosheal:flaky"] >= 1;

  // fairness: once the flaky κ settles (heals durably), it stops consuming the budget and the deferred 'other' is reached
  flakySettled = true;
  const t4 = await sup.tick("idle");
  const tailNotStarved = t4.summary.healed === 1 && t4.order.includes(hexOf(kOther));

  checks.evolves = flakyRankedTop && sweepsFlakyFirst && budgetSpentOnFlaky && attestLearns && tailNotStarved;
}

// ── 10 · a MISS does not escalate: an unresolvable κ (no source serves it) must NOT monopolise a small
//        heal-budget and starve a recoverable one. Misses are tracked but never raise rank — staleness
//        rotates the unreachable κ through its fair share, so the fixable object still heals promptly ────
{
  const Egone = enc("unresolvable — nobody serves this κ"), Ffix = enc("recoverable on the mesh");
  const kGone = await kOf(Egone), kFix = await kOf(Ffix);
  const durable = new Map();                                 // nothing healthy on-device yet
  const intact = async (hex) => durable.has(hex) && (await reDerive(durable.get(hex))) === hex;
  const healer = makeHealer({
    sources: [source("ipfs", [[kFix, Ffix]])],               // the mesh has kFix; it NEVER has kGone
    store: new Map(), persist: async (hex, b) => durable.set(hex, b),
    now: () => "2026-06-13T00:00:00Z",
  });
  const closure = { "gone.js": kGone, "fix.js": kFix };      // gone.js is FIRST — without the fix it would hog the budget forever
  const sup = makeSupervisor({ loadClosure: async () => closure, healer, intact, budget: 1, now: () => "2026-06-13T00:00:00Z" });

  await sup.tick("boot");                                    // tick1: budget spent attempting gone.js (a miss) → fix.js deferred
  const t2 = await sup.tick("idle");                         // tick2: gone.js missed once → staler fix.js now sorts first → it heals
  // the recoverable object got the slot within two ticks despite the unresolvable one; the miss never out-ranked it
  checks.noStarveOnUnresolved = t2.summary.healed === 1 && durable.has(hexOf(kFix)) && !durable.has(hexOf(kGone)) &&
    sup.flakiness().some((m) => m.hex === hexOf(kGone) && m.misses >= 1 && m.repairs === 0);
}

async function sameBytes(a, b) { if (!a || !b || a.length !== b.length) return false; for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false; return true; }

const witnessed = Object.values(checks).every(Boolean);
write({
  spec: "Hologram OS self-healing — autonomous, content-addressed recovery: detect (re-derive) → recover (origin-agnostic mesh) → re-verify (Law L5) → witness, with the sealed anchor never auto-healed; and EVOLVE — the supervisor learns per-κ flakiness and re-sweeps the historically-unstable first / more often",
  authority: "holospaces Laws L1/L3/L5 · ADR-026 Sovereign Delivery (cache → peers → origin) · W3C DID Core · W3C PROV-O · W3C Subresource Integrity · IETF RFC 8785 (JCS) · IPFS Trustless Gateways (κ = CIDv1 sha2-256)",
  witnessed,
  covers: witnessed ? ["self-heal", "self-improve", "evolve", "content-recovery", "mesh-resolution", "anchor-protected", "heal-witness", "law-l5"] : [],
  scrub: scrubSummary,
  checks,
});

for (const [k, v] of Object.entries(checks)) console.log(`  ${v ? "ok  " : "FAIL"}  ${k}`);
console.log(`· scrub: ${scrubSummary.healthy} healthy · ${scrubSummary.healed} healed · ${scrubSummary.unresolved} unresolved · ${scrubSummary.anchors} anchor(s) skipped`);
console.log(`VERDICT : ${witnessed ? "WITNESSED ✓ the OS recovers itself by content, re-derives every byte, and never auto-heals the anchor" : "NOT WITNESSED"}`);
process.exit(witnessed ? 0 : 1);
