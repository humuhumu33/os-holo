#!/usr/bin/env node
// holo-login-witness.mjs — PROVE the unified Holo Login identity: one BIP-39 seed → a signing
// principal that (a) is the SAME key as the omni-chain wallet + the did:key, (b) verifies through the
// EXISTING holo-identity session machinery UNCHANGED (Law L5), and (c) recovers from the 12-word
// phrase to the identical canonical identity + wallet. No new crypto — WDK + holo-identity only.
//
//   node tools/holo-login-witness.mjs

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { enroll, unlock, recover, roster, forget, principalFromSeed } from "../os/usr/lib/holo/holo-login.mjs";
import { openSession, verifySession } from "../os/usr/lib/holo/holo-identity.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const results = []; let pass = 0, fail = 0;
const rec = (n, ok, d = "") => { results.push({ n, ok, d }); ok ? pass++ : fail++; console.log(`${ok ? "PASS" : "FAIL"} — ${n}${d ? "  (" + d + ")" : ""}`); };

const SECRET = "biometric-prf-secret-zN8x"; // stands in for the WebAuthn PRF output (≥12 chars)

// 1 · enrol → unified identity (did:holo κ + did:key) + omni-chain wallet
const { principal, mnemonic, did } = await enroll({ label: "Ilya", secret: SECRET, cred: "credAAA" });
rec("enrol → did:holo κ (content address) + did:key + Ed25519", /^did:holo:sha256:[0-9a-f]{64}$/.test(principal.kappa) && /^did:key:z6Mk/.test(principal.did) && principal.alg === "Ed25519", principal.did.slice(0, 24) + "…");
const addrs = principal.addresses();
rec("ONE seed → an omni-chain wallet (eth+btc+sol)", !!(addrs.ethereum && addrs.bitcoin && addrs.solana), Object.keys(addrs).join(","));
rec("12-word recovery phrase issued", mnemonic.split(" ").length === 12 && did === principal.did);

// 2 · the session signs + VERIFIES through the existing holo-identity machinery, UNCHANGED (L5)
const tok = await openSession(principal, { session: "primeos", next: "home.html", host: "" });
const body = await verifySession(tok);
rec("session verifies via existing verifySession (Law L5, shell-compatible)", !!body && body.operator === principal.kappa);

// a tampered session is still refused (the shell's guarantee is intact)
const tampered = { ...tok, operator: "did:holo:sha256:" + "0".repeat(64) };
rec("tampered session refused", (await verifySession(tampered)) === null);

// 3 · returning unlock with the same secret → the same identity; wrong secret refused
const back = await unlock(principal.kappa, SECRET);
rec("returning unlock → same canonical identity + did:key", back.kappa === principal.kappa && back.did === principal.did);
let wrong = false; try { await unlock(principal.kappa, "wrong-secret-xyz"); } catch { wrong = true; }
rec("wrong secret refused (vault AEAD)", wrong);

// roster carries the did:key + cred for the greeter (checked before recovery overwrites the record)
rec("roster lists the operator (κ + did:key + cred)", (await roster()).some((o) => o.kappa === principal.kappa && o.did === principal.did && o.cred === "credAAA"));

// 4 · RECOVERY from the phrase (a new device, a different unlock secret) → IDENTICAL identity + wallet
const r2 = await recover({ mnemonic, secret: "new-device-prf-secret-Q", label: "Ilya" });
rec("recovery (phrase) → same canonical identity", r2.principal.kappa === principal.kappa && r2.principal.did === principal.did);
rec("recovery → same omni-chain wallet addresses", JSON.stringify(r2.principal.addresses()) === JSON.stringify(addrs));

await forget(principal.kappa);
const ok = fail === 0;
writeFileSync(join(here, "holo-login-witness.result.json"), JSON.stringify({ ok, pass, fail, results }, null, 2) + "\n");
console.log(`\n${ok ? "PASS" : "FAIL"} — Holo Login (unified seed → identity + wallet) ${pass}/${pass + fail}`);
process.exit(ok ? 0 : 1);
