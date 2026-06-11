// holo-recover.mjs — SOCIAL RECOVERY for Holo Login. Shamir Secret Sharing (GF(256)) splits the
// BIP-39 mnemonic's ENTROPY into N shares with threshold T, so the operator's sovereign identity +
// omni-chain wallet can be recovered from any T guardians (the user's own devices + a trusted
// person) — no phrase to lose, no server, no custodian. Recovery reconstructs the entropy →
// mnemonic → seed → the SAME canonical identity (holo-login.recover).
//
// The only genuinely new crypto in Holo Login. Standard, dependency-free, information-theoretic
// Shamir over the AES field (0x11b): T-1 shares reveal NOTHING about the secret; any T reconstruct
// it. Each share carries a hash COMMITMENT to the secret, so a tampered/mismatched share is REFUSED
// (Law L5); the BIP-39 checksum is a second integrity net. The secret exists only transiently during
// split/recover. Guardian distribution (E2E-encrypt each share to a guardian, like Holo Pair) + the
// signed recovery policy are the layer ABOVE this — this module is the secret-sharing core.

import { mnemonicToEntropy, entropyToMnemonic, validateMnemonic, wordlist } from "./wdk-crypto/wdk-crypto.bundle.mjs";

const SUB = (globalThis.crypto && globalThis.crypto.subtle) || null;
const RNG = globalThis.crypto || (typeof require !== "undefined" ? require("node:crypto").webcrypto : null);
const te = new TextEncoder();
const b64 = (u8) => btoa(String.fromCharCode(...new Uint8Array(u8)));
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const hex = (u8) => [...new Uint8Array(u8)].map((b) => b.toString(16).padStart(2, "0")).join("");
const rand = (n) => RNG.getRandomValues(new Uint8Array(n));
async function sha256Hex(u8) { return hex(new Uint8Array(await SUB.digest("SHA-256", u8))); }
const RECOVER_V = "holo-recover:v1";

// ── GF(256) over the AES polynomial x^8+x^4+x^3+x+1 (0x11b), generator 0x03 ──────────────
const EXP = new Uint8Array(512), LOG = new Uint8Array(256);
(function () {
  const xtime = (a) => ((a << 1) ^ ((a & 0x80) ? 0x1b : 0)) & 0xff;
  let x = 1;
  for (let i = 0; i < 255; i++) { EXP[i] = x; LOG[x] = i; x = (xtime(x) ^ x) & 0xff; }  // ·3 = xtime ⊕ self
  for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];                                 // doubled → no modulo
})();
const gmul = (a, b) => (a && b) ? EXP[LOG[a] + LOG[b]] : 0;
const ginv = (a) => EXP[255 - LOG[a]];                                                   // a ≠ 0

// split a byte array into n shares, any t of which reconstruct it
function splitBytes(secret, n, t) {
  const shares = []; for (let i = 1; i <= n; i++) shares.push({ x: i, y: new Uint8Array(secret.length) });
  for (let b = 0; b < secret.length; b++) {
    const coeff = new Uint8Array(t); coeff[0] = secret[b]; for (let j = 1; j < t; j++) coeff[j] = rand(1)[0];
    for (const s of shares) { let acc = 0; for (let j = t - 1; j >= 0; j--) acc = gmul(acc, s.x) ^ coeff[j]; s.y[b] = acc; }
  }
  return shares;
}
// Lagrange interpolation at x=0 over the given points (XOR is GF subtraction)
function combineBytes(points, len) {
  const out = new Uint8Array(len);
  for (let b = 0; b < len; b++) {
    let secret = 0;
    for (let j = 0; j < points.length; j++) {
      let num = 1, den = 1;
      for (let m = 0; m < points.length; m++) { if (m === j) continue; num = gmul(num, points[m].x); den = gmul(den, points[j].x ^ points[m].x); }
      secret ^= gmul(points[j].y[b], gmul(num, ginv(den)));
    }
    out[b] = secret;
  }
  return out;
}

// ── public API: split / combine arbitrary secret bytes ──────────────────────────────────
export async function split(secret, { shares = 3, threshold = 2 } = {}) {
  if (!(secret instanceof Uint8Array) || !secret.length) throw new Error("secret must be non-empty bytes");
  if (threshold < 2 || threshold > shares || shares > 255) throw new Error("require 2 ≤ threshold ≤ shares ≤ 255");
  const commit = await sha256Hex(secret);
  const parts = splitBytes(secret, shares, threshold);
  return Promise.all(parts.map(async (p) => {
    const body = { v: RECOVER_V, x: p.x, t: threshold, n: shares, len: secret.length, y: b64(p.y), commit };
    const id = "sha256:" + await sha256Hex(te.encode(JSON.stringify(body)));
    return { id, ...body };
  }));
}
export async function combine(shareList) {
  if (!Array.isArray(shareList) || !shareList.length) throw new Error("no shares");
  const t = shareList[0].t, commit = shareList[0].commit, len = shareList[0].len;
  if (shareList.length < t) throw new Error(`need ${t} shares to recover, have ${shareList.length}`);
  if (!shareList.every((s) => s.v === RECOVER_V && s.t === t && s.commit === commit)) throw new Error("shares are from different splits");
  const xs = new Set(shareList.map((s) => s.x)); if (xs.size !== shareList.length) throw new Error("duplicate share index");
  const points = shareList.map((s) => ({ x: s.x, y: unb64(s.y) }));
  const secret = combineBytes(points, len);
  if (await sha256Hex(secret) !== commit) throw new Error("shares did not reconstruct the secret (tampered or mismatched)");  // Law L5
  return secret;
}

// ── mnemonic ⇄ guardian shares (what Holo Login actually splits) ─────────────────────────
export async function splitMnemonic(mnemonic, { shares = 3, threshold = 2 } = {}) {
  if (!validateMnemonic(mnemonic, wordlist)) throw new Error("invalid mnemonic");
  return split(mnemonicToEntropy(mnemonic, wordlist), { shares, threshold });
}
export async function recoverMnemonic(shareList) {
  const entropy = await combine(shareList);
  const mnemonic = entropyToMnemonic(entropy, wordlist);                 // BIP-39 checksum = second net
  if (!validateMnemonic(mnemonic, wordlist)) throw new Error("recovered entropy is not a valid mnemonic");
  return mnemonic;
}
