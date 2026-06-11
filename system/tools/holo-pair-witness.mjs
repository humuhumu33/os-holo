#!/usr/bin/env node
// holo-pair-witness.mjs — PROVE the delegated cross-device sign-in ("scan QR to Access") is secure.
// Mint a device grant with the operator's key, deliver it E2E to the device, and assert: the happy
// path verifies; and every adversarial variant is REFUSED — tampered ciphertext, forged signature,
// swapped issuer key, wrong device (audience), expired, capability escalation, revoked, replayed to
// another pairing. (Distinct from holo-link-witness.mjs, ADR-0060, which is WASM composition.)
//
//   node tools/holo-pair-witness.mjs

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { enroll, forget } from "../os/usr/lib/holo/holo-identity.mjs";
import { createPairOffer, mintDeviceGrant, acceptGrant, verifyDelegation, makeRevocation, verifyRevocation, offerToUrl, urlToOffer } from "../os/usr/lib/holo/holo-pair.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const results = []; let pass = 0, fail = 0;
const rec = (name, ok, detail = "") => { results.push({ name, ok, detail }); ok ? pass++ : fail++; console.log(`${ok ? "PASS" : "FAIL"} — ${name}${detail ? "  (" + detail + ")" : ""}`); };
const rejects = async (fn) => { try { await fn(); return false; } catch { return true; } };

const operator = await enroll({ label: "Ilya", passphrase: "correct horse battery" });
const attacker = await enroll({ label: "Mallory", passphrase: "evil" });

// happy path: desktop offer → phone mints → desktop accepts
const { offer, secrets } = await createPairOffer({ deviceName: "Ilya's Desktop" });
const { blob, grantId } = await mintDeviceGrant(operator, offer);
const got = await acceptGrant(secrets, blob);
rec("happy path: device accepts the operator's grant", got.operator === operator.kappa && got.can.includes("session/open"), got.operator.slice(0, 28) + "…");

// the QR payload round-trips through a deep-link URL (device κ re-derived from devicePub, L5)
rec("QR offer round-trips via deep link", (await urlToOffer(offerToUrl(offer, "https://x.io"))).deviceKappa === secrets.deviceKappa);

// tampered ciphertext → AES-GCM auth-tag fails
const tct = { ...blob, ct: blob.ct.slice(0, -2) + (blob.ct.endsWith("A") ? "B" : "A") };
rec("tampered ciphertext refused", await rejects(() => acceptGrant(secrets, tct)));

// forged signature → bad operator signature
const dec = await acceptGrant(secrets, blob);
const forged = { ...dec.grant, sig: dec.grant.sig.slice(0, -2) + (dec.grant.sig.endsWith("A") ? "B" : "A") };
rec("forged signature refused", !(await verifyDelegation(forged, { expectAud: offer.deviceKappa })).ok);

// swapped issuer key (claims to be operator, signs with attacker key) → κ does not re-derive
const swapped = { ...dec.grant, issPub: attacker.pub };
rec("swapped issuer key refused (L5)", !(await verifyDelegation(swapped, { expectAud: offer.deviceKappa })).ok);

// wrong device: grant minted for device A, device B tries to accept → E2E decrypt fails
const other = await createPairOffer({ deviceName: "Other" });
rec("wrong device (audience) refused", await rejects(() => acceptGrant(other.secrets, blob)));

// expired grant
const expired = await mintDeviceGrant(operator, offer, { ttlMs: -1000 });
rec("expired grant refused", await rejects(() => acceptGrant(secrets, expired.blob)));

// capability escalation: operator signs a broad cap, the device only allows session/open
const escal = await mintDeviceGrant(operator, offer, { caps: ["session/open", "wallet/spend"] });
rec("capability escalation refused", await rejects(() => acceptGrant(secrets, escal.blob)));

// revocation: operator revokes the grant → device re-checks and refuses
const rev = await makeRevocation(operator, grantId);
rec("revocation verifies to the grant id", (await verifyRevocation(rev)) === grantId);
rec("revoked grant refused", await rejects(() => acceptGrant(secrets, blob, { revoked: [grantId] })));

// replay to a different pairing/channel → bound-channel mismatch
const replay = { ...blob, channel: other.offer.channel };
rec("replay to another pairing refused", await rejects(() => acceptGrant({ ...secrets, channel: other.offer.channel }, replay)));

await forget(operator.kappa); await forget(attacker.kappa);
const ok = fail === 0;
writeFileSync(join(here, "holo-pair-witness.result.json"), JSON.stringify({ ok, pass, fail, results }, null, 2) + "\n");
console.log(`\n${ok ? "PASS" : "FAIL"} — holo-pair ${pass}/${pass + fail}`);
process.exit(ok ? 0 : 1);
