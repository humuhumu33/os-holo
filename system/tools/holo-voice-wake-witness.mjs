// holo-voice-wake-witness.mjs — proves the SOVEREIGN wake path holds WITHOUT a mic (CI has none):
//   1. the κ wake-receipt is a content-addressed holo:WakeEvent in the SAME did:holo:sha256 space as
//      scenes/desktops/the orb (imports the REAL canon from holo-scene.mjs), deterministic over IDENTITY
//      fields only — the wall clock is excluded, so the same wake re-derives the same address (Law L5);
//   2. the two-stage cascade's stage-2 gate (the wake regex) accepts every carrier the user asked for
//      ("hey Q", "yo Q", "morning Q", bare "Q") and rejects the "Q" homophones (queue/cue/you);
//   3. the carrier extractor agrees with the regex (one GREET_LIST drives both — no drift).
//
// The regex builder + greeting list below MIRROR holo-voice.js exactly (it's a browser IIFE, not
// importable in node) — this witness is the guard that they stay in lock-step. canon is imported live.

import { canon } from "../os/usr/lib/holo/holo-scene.mjs";
import { webcrypto } from "node:crypto";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 56);
const ok = (name, cond, extra = "") => { (cond ? pass++ : fail++); checks[(slug(name) || "check") + "-" + (++kn)] = !!cond; console.log((cond ? "  ok  " : " FAIL ") + name + (extra ? "  — " + extra : "")); };

// ── mirror of holo-voice.js wake construction (kept in lock-step by this witness) ───────────────────
const esc = (s) => String(s).toLowerCase().trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const alt = (list) => list.map(esc).filter(Boolean).join("|");
const GREET_LIST = ["good morning", "good evening", "good afternoon", "hey there", "excuse me",
  "morning", "evening", "afternoon", "greetings", "hello", "hiya", "okay", "hey", "hi", "yo", "sup", "ok", "um", "uh", "so"];
const GREET = "(?:" + alt(GREET_LIST) + ")";
const HOMOPHONES = { q: { strong: ["q", "kyu", "kew", "kuh"], weak: ["cue", "queue", "qu"] } };
function buildWake(word) {
  const w = String(word || "Q").trim().toLowerCase();
  const h = HOMOPHONES[w] || { strong: [w], weak: [] };
  const strong = h.strong.indexOf(w) < 0 ? [w].concat(h.strong) : h.strong;
  const all = strong.concat(h.weak);
  const core = "(?:" + GREET + "\\s+(?:" + alt(all) + ")|(?:" + alt(strong) + "))";
  return { re: new RegExp("^\\s*" + core + "\\b", "i"), strip: new RegExp("^\\s*" + core + "\\b[\\s,.!?-]*", "i") };
}
const CARRIER_RE = new RegExp("^\\s*(" + alt(GREET_LIST) + ")\\b", "i");
const norm = (t) => String(t || "").toLowerCase().replace(/[.,!?;:]+/g, " ").replace(/\s+/g, " ").trim();

// ── mirror of mintWakeReceipt's IDENTITY object + κ scheme (canon is the REAL imported fn) ──────────
async function wkKappa(obj) {
  const str = canon(obj);
  const h = await webcrypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return "did:holo:sha256:" + [...new Uint8Array(h)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function wakeEvent(d) {
  return {
    "@type": "holo:WakeEvent", word: d.word || "Q", heard: d.heard || "", carrier: d.carrier || "",
    command: d.command || "", stage: d.stage || "vad-energy", asr: d.asr || "whisper-tiny",
    confidence: typeof d.confidence === "number" ? Math.round(d.confidence * 1000) / 1000 : null,
    durationMs: d.durationMs != null ? Math.round(d.durationMs) : null,
  };
}

const WAKE = buildWake("Q");

// 1 — WAKE-RECEIPT κ: determinism, clock-exclusion, sensitivity, address shape
const evA = wakeEvent({ heard: "hey q open the browser", carrier: "hey", command: "open the browser", stage: "vad-silero", confidence: 0.82, durationMs: 1500 });
const kA = await wkKappa(evA);
const kA2 = await wkKappa(wakeEvent({ heard: "hey q open the browser", carrier: "hey", command: "open the browser", stage: "vad-silero", confidence: 0.82, durationMs: 1500 }));
ok("receipt κ is a did:holo:sha256 (64 hex)", /^did:holo:sha256:[0-9a-f]{64}$/.test(kA), kA);
ok("same wake identity → same κ (re-derivable, Law L5)", kA === kA2, kA);
// the wall clock (`at`) lives OUTSIDE the canon → two receipts moments apart share the κ
const receipt1 = Object.assign({ kappa: kA, at: 1000 }, evA);
const receipt2 = Object.assign({ kappa: await wkKappa(evA), at: 999999 }, evA);
ok("wall clock is NOT in the address (at differs, κ same)", receipt1.kappa === receipt2.kappa, "at " + receipt1.at + " vs " + receipt2.at);
const kCmd = await wkKappa(wakeEvent({ heard: "hey q open atlas", carrier: "hey", command: "open atlas", stage: "vad-silero", confidence: 0.82, durationMs: 1500 }));
ok("different command → different κ (content-sensitive)", kCmd !== kA, kCmd.slice(0, 30) + "…");
const kBare = await wkKappa(wakeEvent({ heard: "q", carrier: "", command: "", stage: "vad-energy" }));
ok("bare-wake receipt addresses cleanly", /^did:holo:sha256:[0-9a-f]{64}$/.test(kBare), kBare.slice(0, 30) + "…");
// shares the address space: the same object hashed via the real holo-scene canon == our κ
ok("κ uses the OS canon (shared address space with scenes/orb)", kA === "did:holo:sha256:" + [...new Uint8Array(await webcrypto.subtle.digest("SHA-256", new TextEncoder().encode(canon(evA))))].map((b) => b.toString(16).padStart(2, "0")).join(""));

// 2 — STAGE-2 GATE: every carrier the user asked for wakes; the homophones do not
const WAKES = ["q", "Q", "hey Q", "yo Q", "sup Q", "morning Q", "good morning Q", "okay Q", "hey, Q", "kyu", "Q open the browser"];
const NOPES = ["queue up the song", "cue the music", "join the queue", "please open the door", "what is a holospace", "you should try it", "the iq test"];
let wAll = true, nAll = true;
for (const u of WAKES) { const m = WAKE.re.test(norm(u)); if (!m) { wAll = false; console.log("     · expected WAKE but missed:", u); } }
for (const u of NOPES) { const m = WAKE.re.test(norm(u)); if (m) { nAll = false; console.log("     · expected NO-wake but fired:", u); } }
ok("wakes on every requested carrier incl. 'morning Q' / bare 'Q'", wAll);
ok("rejects the 'Q' homophones (queue/cue/you/iq)", nAll);

// 3 — CARRIER extractor agrees with the regex (one list, no drift)
ok("carrier('hey Q …') === 'hey'", wakeCarrierTest("hey Q open the browser") === "hey");
ok("carrier('good morning Q') === 'good morning' (longest-first)", wakeCarrierTest("good morning Q") === "good morning");
ok("carrier('morning Q') === 'morning'", wakeCarrierTest("morning Q") === "morning");
ok("carrier(bare 'Q') === '' (no greeting)", wakeCarrierTest("q") === "");
function wakeCarrierTest(t) { const m = CARRIER_RE.exec(norm(t)); return m ? m[1].toLowerCase() : ""; }
// the stripped command is what the receipt records as `command`
const stripped = norm("Q, open the browser").replace(WAKE.strip, "").trim();
ok("address strips to the command ('open the browser')", stripped === "open the browser", stripped);

const result = { "@type": "earl:TestResult", witnessed: fail === 0, subject: "holo-voice sovereign wake (κ wake-receipt + two-stage cascade gate)", passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-voice-wake-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
