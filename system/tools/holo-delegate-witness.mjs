// holo-delegate-witness.mjs — proves PC → NPC delegation: an agent identity, a hybrid-signed scoped
// capability grant with lineage, and a Holo-ZK minimal disclosure sealed by the hybrid KEM (fail-closed,
// Law L5). Run: node system/tools/holo-delegate-witness.mjs
import { principalFromSeed } from "../os/usr/lib/holo/holo-login.mjs";
import { firstRun } from "../os/usr/lib/holo/holo-ceremony.mjs";
import { generateMnemonic, seedFromMnemonic } from "../os/usr/lib/holo/holo-wdk.js";
import { mintNpc, delegate, verifyDelegation, openDelegation, grants } from "../os/usr/lib/holo/holo-delegate.mjs";

let pass = 0, fail = 0;
const ok = (n, c) => { (c ? pass++ : fail++); console.log(`  ${c ? "✓" : "✗"}  ${n}`); };

console.log("holo-delegate — PC mints an NPC (agent) with ZK + hybrid post-quantum\n");

// the human Player Character + its private ceremony claims (Holo ZK salted set)
const pc = await principalFromSeed(seedFromMnemonic(generateMnemonic(12)), "Ada");
const fr = await firstRun(pc, { claims: { tier: "gold", region: "EU" } });
const pcCeremony = { digests: fr.credential.digests, disclosures: fr.disclosures };

// the agent
const npc = mintNpc("Scout");
ok("NPC has its OWN sovereign κ (did:holo:sha256)", /^did:holo:sha256:[0-9a-f]{64}$/.test(npc.kappa) && npc.subjectType === "npc");
ok("NPC κ ≠ PC κ (distinct identities)", npc.kappa !== pc.kappa);

// the PC grants scoped capabilities + discloses ONLY name+tier (not did/region/identity)
const { credential, sealed } = await delegate(pc, npc,
  { capabilities: ["wallet:read", "q:create"], discloseKeys: ["name", "tier"], notAfter: "2030-01-01T00:00:00Z", nowIso: "2026-06-15T00:00:00Z" },
  pcCeremony);

const body = verifyDelegation(credential, { nowIso: "2026-06-15T12:00:00Z" });
ok("delegation verifies (hybrid Ed25519 ‖ ML-DSA, re-derived id)", !!body);
ok("lineage: issuer = PC κ, subject = NPC κ", body && body.issuer === pc.kappa && body.subject === npc.kappa);
ok("capabilities are scoped + present", grants(body, "wallet:read") && grants(body, "q:create") && !grants(body, "wallet:send"));

ok("rejects a tampered capability", !verifyDelegation({ ...credential, capabilities: [...credential.capabilities, "wallet:send"] }));
ok("rejects a forged ML-DSA half", !verifyDelegation({ ...credential, pqSig: (await delegate(pc, mintNpc("x"), { capabilities: ["a"] })).credential.pqSig }));
ok("rejects an expired grant", !verifyDelegation(credential, { nowIso: "2031-01-01T00:00:00Z" }));

// the agent opens its sealed ZK disclosure — only it can, and it sees ONLY the authorised claims
const revealed = await openDelegation(npc, sealed);
ok("NPC opens the hybrid-KEM-sealed disclosure", !!revealed);
ok("ZK disclosure reveals ONLY name + tier (region/did/identity stay hidden)",
  revealed && revealed.name === "Ada" && revealed.tier === "gold" && !("region" in revealed) && !("did" in revealed) && !("identity" in revealed));

// a different agent cannot open it (wrong KEM key → AEAD authentication fails)
let blocked = false; try { await openDelegation(mintNpc("Mallory"), sealed); } catch { blocked = true; }
ok("a different agent cannot open the sealed disclosure", blocked);

console.log(`\n${fail ? "WITNESS FAILED" : "WITNESSED ✓"}  ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
