#!/usr/bin/env node
// holo-q-manifest-pin-witness.mjs — Phase 0a (Law L5) witness for the q κ-object manifest pin.
//
// Hole (conformance-audit M5 / KAPPA-1): apps/q/holo-load2bit.mjs trusted manifest.json as an
// UNAUTHENTICATED ROOT. The manifest names every block's expected κ, but was never itself verified —
// so a tampered manifest can re-point all blocks to forged-but-self-consistent κs and every per-block
// L5 check passes against the forgery. THE FIX: verify the manifest's OWN bytes re-derive to a pinned
// κ (external anchor: catalog/lock) BEFORE trusting man.tensors[*].kappa.
//
// Behavioral definition (this witness IS the spec — holospaces V&V discipline):
//   T1 honest manifest + correct pin            → loads            (accept the genuine root)
//   T2 tampered manifest + honest pin           → REFUSED (throws) (the security property — Law L5)
//   T3 tampered manifest + allowUnpinned (dev)  → loads            (documents the residual: no pin ⇒ no protection)
//
// Run: node holo-os/system/tools/holo-q-manifest-pin-witness.mjs
import { pathToFileURL, fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const LOADER = join(here, "../../../holo-apps/apps/q/holo-load2bit.mjs");
const { loadKappaObject } = await import(pathToFileURL(LOADER));

const enc = new TextEncoder();
const sha256hex = async (u8) => [...new Uint8Array(await crypto.subtle.digest("SHA-256", u8))].map((b) => b.toString(16).padStart(2, "0")).join("");

// a minimal but well-formed manifest (native q4 κ-object: skips the twoBit / e8lut / source paths at load).
// only the tensor's κ differs between honest and tampered — that is the "re-point a block" attack.
const baseManifest = (tensorKappa) => ({
  mode: "q4", bits: 4, d: 8, n_heads: 1, n_kv_heads: 1, ff: 8, vocab: 4, n_layers: 1, hd: 8,
  layout: "row", rope_base: 10000, tied: true,
  tensors: { "norm.weight": { kappa: tensorKappa, fmt: "f32", N: 1, K: 1 } },
});

const HONEST = enc.encode(JSON.stringify(baseManifest("sha256:" + "a".repeat(64))));
const TAMPERED = enc.encode(JSON.stringify(baseManifest("sha256:" + "b".repeat(64))));  // re-points the block κ

// loadKappaObject only fetches manifest.json at LOAD time (blocks are lazy via fetchTensor), so serving
// the manifest from memory is sufficient. Mock provides BOTH arrayBuffer() and json() so the witness runs
// against the pre-fix code (.json) and the post-fix code (.arrayBuffer) identically.
function mockFetch(bytes) {
  globalThis.fetch = async (url) => {
    if (!String(url).endsWith("/manifest.json")) throw new Error("unexpected fetch " + url);
    return {
      ok: true,
      arrayBuffer: async () => bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength),
      json: async () => JSON.parse(new TextDecoder().decode(bytes)),
    };
  };
}

const honestPin = "did:holo:sha256:" + await sha256hex(HONEST);
let pass = 0, fail = 0;
const ok = (cond, msg) => { if (cond) { pass++; console.log("  ✓ " + msg); } else { fail++; console.log("  ✗ " + msg); } };

// T1 — honest manifest + correct pin → loads
mockFetch(HONEST);
let t1 = false; try { await loadKappaObject("https://x/m", { expectKappa: honestPin }); t1 = true; } catch { t1 = false; }
ok(t1, "T1 honest manifest + correct pin loads");

// T2 — tampered manifest + honest pin → REFUSED (the property the fix establishes)
mockFetch(TAMPERED);
let t2refused = false; try { await loadKappaObject("https://x/m", { expectKappa: honestPin }); } catch (e) { t2refused = /L5|MISMATCH/i.test(String(e && e.message)); }
ok(t2refused, "T2 tampered manifest + honest pin is REFUSED (Law L5)");

// T3 — tampered manifest + allowUnpinned → loads (residual: without a pin there is no protection)
mockFetch(TAMPERED);
let t3 = false; try { await loadKappaObject("https://x/m", { allowUnpinned: true }); t3 = true; } catch { t3 = false; }
ok(t3, "T3 tampered manifest loads ONLY when explicitly unpinned (documents the residual)");

console.log(`\n${fail === 0 ? "GREEN" : "RED"} — ${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
