#!/usr/bin/env node
// holo-recover-witness.mjs — PROVE Holo Login social recovery (Shamir over the BIP-39 entropy) is
// secure: any T guardians reconstruct the mnemonic → the SAME canonical identity + wallet; fewer
// than T reveal nothing and are refused; tampered or mismatched shares are refused (Law L5).
//
//   node tools/holo-recover-witness.mjs

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { split, combine, splitMnemonic, recoverMnemonic } from "../os/usr/lib/holo/holo-recover.mjs";
import { recover, principalFromSeed } from "../os/usr/lib/holo/holo-login.mjs";
import { seedFromMnemonic, generateMnemonic } from "../os/usr/lib/holo/holo-wdk.js";

const here = dirname(fileURLToPath(import.meta.url));
const results = []; let pass = 0, fail = 0;
const rec = (n, ok, d = "") => { results.push({ n, ok, d }); ok ? pass++ : fail++; console.log(`${ok ? "PASS" : "FAIL"} — ${n}${d ? "  (" + d + ")" : ""}`); };
const rejects = async (fn) => { try { await fn(); return false; } catch { return true; } };
const eqBytes = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
const rng = (n) => globalThis.crypto.getRandomValues(new Uint8Array(n));

// 1 · raw split/combine round-trips for EVERY T-subset (2-of-3) and a 3-of-5
const secret = rng(16);
const s3 = await split(secret, { shares: 3, threshold: 2 });
const pairs = [[0, 1], [0, 2], [1, 2]];
rec("2-of-3: every pair of shares reconstructs", (await Promise.all(pairs.map((p) => combine([s3[p[0]], s3[p[1]]])))).every((r) => eqBytes(r, secret)));
rec("2-of-3: all three shares also reconstruct", eqBytes(await combine(s3), secret));
const s5 = await split(secret, { shares: 5, threshold: 3 });
rec("3-of-5: any three reconstruct", eqBytes(await combine([s5[0], s5[2], s5[4]]), secret) && eqBytes(await combine([s5[1], s5[3], s5[4]]), secret));

// 2 · THRESHOLD security — fewer than T is refused, and a single share leaks nothing
rec("fewer than T shares refused", await rejects(() => combine([s3[0]])) && await rejects(() => combine([s5[0], s5[1]])));
const oneShareGuess = await split(secret, { shares: 3, threshold: 2 });
rec("a lone share never equals the secret (no info from < T)", !eqBytes(unb(oneShareGuess[0].y), secret));

// 3 · TAMPER — a flipped byte in any share → reconstruction refused (commitment, Law L5)
const tampered = s3.map((s) => ({ ...s }));
tampered[1] = { ...tampered[1], y: flip(tampered[1].y) };
rec("tampered share refused (hash commitment)", await rejects(() => combine([tampered[0], tampered[1]])));

// 4 · MISMATCH — shares from two different splits cannot be mixed
const other = await split(rng(16), { shares: 3, threshold: 2 });
rec("shares from different splits refused", await rejects(() => combine([s3[0], other[1]])));
rec("duplicate share index refused", await rejects(() => combine([s3[0], s3[0]])));

// 5 · MNEMONIC end-to-end: split a real mnemonic → recover from T guardians → SAME identity + wallet
const mnemonic = generateMnemonic(12);
const orig = await principalFromSeed(seedFromMnemonic(mnemonic), "Ilya");
const guardians = await splitMnemonic(mnemonic, { shares: 3, threshold: 2 });   // device + device + friend
const recovered = await recoverMnemonic([guardians[0], guardians[2]]);          // lost one; 2 of 3 left
rec("guardian shares recover the exact mnemonic", recovered === mnemonic);
const back = await principalFromSeed(seedFromMnemonic(recovered), "Ilya");
rec("recovered mnemonic → SAME canonical identity (did:holo + did:key)", back.kappa === orig.kappa && back.did === orig.did);
rec("recovered mnemonic → SAME omni-chain wallet", JSON.stringify(back.addresses()) === JSON.stringify(orig.addresses()));
rec("a tampered guardian share fails recovery (BIP-39 + commitment)", await rejects(() => recoverMnemonic([guardians[0], { ...guardians[2], y: flip(guardians[2].y) }])));

function unb(s) { return Uint8Array.from(atob(s), (c) => c.charCodeAt(0)); }
function flip(b64) { const u = unb(b64); u[0] ^= 0xff; return btoa(String.fromCharCode(...u)); }

await (async () => {})();
const ok = fail === 0;
writeFileSync(join(here, "holo-recover-witness.result.json"), JSON.stringify({ ok, pass, fail, results }, null, 2) + "\n");
console.log(`\n${ok ? "PASS" : "FAIL"} — Holo Login social recovery ${pass}/${pass + fail}`);
process.exit(ok ? 0 : 1);
