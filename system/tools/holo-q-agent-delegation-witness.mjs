// holo-q-agent-delegation-witness.mjs — proves the governed Q.agent door ENFORCES PC→NPC delegation
// (ADR-0094): a valid grant naming the caller as subject + including the verb's capability is honored;
// everything else is fail-closed, ON TOP of the conscience gate. Run:
//   node system/tools/holo-q-agent-delegation-witness.mjs
import { createQ } from "../os/usr/lib/holo/q/holo-q.js";
import { principalFromSeed } from "../os/usr/lib/holo/holo-login.mjs";
import { firstRun } from "../os/usr/lib/holo/holo-ceremony.mjs";
import { generateMnemonic, seedFromMnemonic } from "../os/usr/lib/holo/holo-wdk.js";
import { mintNpc, delegate } from "../os/usr/lib/holo/holo-delegate.mjs";

let pass = 0, fail = 0;
const ok = (n, c) => { (c ? pass++ : fail++); console.log(`  ${c ? "✓" : "✗"}  ${n}`); };

console.log("Q.agent — the governed door enforces PC→NPC delegation\n");

// a stub trinity (engine) + an ALLOW conscience, so we isolate the DOOR's delegation policy
const trinity = { create: async () => ({ kappa: "did:holo:sha256:" + "0".repeat(64), value: "built", cached: false, ms: 1 }), state: () => ({}), improve: () => ({}) };
const Q = createQ({ trinity, conscience: { evaluate: async () => ({ outcome: "accept" }) } });

const pc = await principalFromSeed(seedFromMnemonic(generateMnemonic(12)), "Ada");
await firstRun(pc, {});
const npc = mintNpc("Scout");
const { credential } = await delegate(pc, npc, { capabilities: ["q.agent"], notAfter: "2030-01-01T00:00:00Z" });
const { credential: walletOnly } = await delegate(pc, npc, { capabilities: ["wallet:read"], notAfter: "2030-01-01T00:00:00Z" });
const { credential: expired } = await delegate(pc, npc, { capabilities: ["q.agent"], notAfter: "2000-01-01T00:00:00Z" });

let r;
r = await Q.agent("build a clock", { caller: npc.kappa, delegation: credential, capability: "q.agent" });
ok("honors a valid grant (subject + capability match)", r.ok === true);
ok("receipt records the delegation κ + npc subjectType", r.receipt && r.receipt.delegation === credential.id && r.receipt.subjectType === "npc");

r = await Q.agent("build a clock", { caller: npc.kappa, delegation: walletOnly, capability: "q.agent" });
ok("refuses when the capability isn't granted", r.refused === true && /capability not granted/.test(r.reason));

r = await Q.agent("build a clock", { caller: "did:holo:sha256:" + "9".repeat(64), delegation: credential, capability: "q.agent" });
ok("refuses when caller ≠ delegation subject", r.refused === true && /subject ≠ caller/.test(r.reason));

r = await Q.agent("build a clock", { caller: npc.kappa, delegation: { ...credential, capabilities: [...credential.capabilities, "wallet:send"] }, capability: "wallet:send" });
ok("refuses a tampered grant (re-derivation fails, Law L5)", r.refused === true && /failed verification/.test(r.reason));

r = await Q.agent("build a clock", { caller: npc.kappa, delegation: expired, capability: "q.agent" });
ok("refuses an expired grant", r.refused === true && /failed verification/.test(r.reason));

// backward-compatible: no delegation presented → the conscience gate alone governs (unchanged)
r = await Q.agent("build a clock", { caller: "external" });
ok("no-delegation path still works (conscience-only, backward-compatible)", r.ok === true && !r.receipt.delegation);

// fail-closed: no gate + no delegation + not allowUngoverned → denied
const Qnc = createQ({ trinity, conscience: null });
r = await Qnc.agent("build a clock", { caller: "external" });
ok("fail-closed when no conscience gate is present", r.refused === true && /fail-closed/.test(r.reason));

console.log(`\n${fail ? "WITNESS FAILED" : "WITNESSED ✓"}  ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
