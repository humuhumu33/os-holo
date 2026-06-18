// holo-ascii.mjs — native, κ-addressable text→ASCII (FIGlet) encoder for hologram.
// The OS's faithful adoption of figlet / TAAG (Patrick Gillespie, MIT — vendored at
// vendor/figlet/, the byte source of truth). Same algorithm + same 328 .flf fonts as
// patorjk.com/software/taag, so output is byte-identical to that tool — not a lookalike.
//
// Zero foreign runtime: this module imports only the vendored core (parseFont + textSync)
// and adds a κ-aware loader. Fonts are LAZY — only the requested .flf is ever fetched —
// and each .flf is re-verified against its κ in manifest.json on read (Law L5).
//
//   import { renderAscii, listFonts, fontKappa } from "./holo-ascii.mjs";
//   await renderAscii("Hologram", { font: "Graffiti" })   → the ASCII art (string)
//   await listFonts()                                      → ["1Row", "3-D", … 328]
//   fontKappa("Graffiti")                                  → "did:holo:sha256:…"
//
// Also surfaced as HoloFX.ascii(text, opts) for every surface that already has HoloFX.

import { f as figlet, g as getFontName } from "./vendor/figlet/figlet.mjs";

const FONT_BASE = new URL("./vendor/figlet-fonts/", import.meta.url);
export const DEFAULT_FONT = "Graffiti";

let _manifest = null;          // { default, count, fonts: { name → { file, kappa, bytes, … } } }
let _manifestPromise = null;
const _inflight = new Map();   // name → Promise (dedupe concurrent loads)

async function manifest() {
  if (_manifest) return _manifest;
  if (!_manifestPromise) {
    _manifestPromise = fetch(new URL("manifest.json", FONT_BASE))
      .then((r) => (r.ok ? r.json() : null))
      .then((m) => (_manifest = m || { fonts: {} }))
      .catch(() => (_manifest = { fonts: {} }));
  }
  return _manifestPromise;
}

const hex = (buf) =>
  Array.prototype.map.call(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");

async function sha256Hex(bytes) {
  try {
    if (globalThis.crypto && crypto.subtle) return hex(await crypto.subtle.digest("SHA-256", bytes));
  } catch (_) {}
  return null; // no WebCrypto (e.g. insecure context) → skip verification, don't fail the render
}

// loadFont(name) — fetch + κ-verify + parse a single .flf, once. Resolves to the font name
// actually registered (after alias resolution). Cached in figlet.figFonts thereafter.
export async function loadFont(name) {
  const fontName = getFontName(name || DEFAULT_FONT);
  if (figlet.figFonts[fontName]) return fontName;
  if (_inflight.has(fontName)) return _inflight.get(fontName);

  const p = (async () => {
    const m = await manifest();
    const entry = m.fonts && m.fonts[fontName];
    const file = (entry && entry.file) || encodeURIComponent(fontName) + ".flf";
    const res = await fetch(new URL(file, FONT_BASE));
    if (!res.ok) throw new Error(`holo-ascii: font "${fontName}" not found (${res.status})`);
    const bytes = await res.arrayBuffer();

    // Law L5 — re-verify the bytes against the sealed κ before trusting them.
    if (entry && entry.kappa) {
      const want = entry.kappa.split(":").pop();
      const got = await sha256Hex(bytes);
      if (got && got !== want) throw new Error(`holo-ascii: κ mismatch for "${fontName}" (got ${got}, want ${want})`);
    }
    figlet.parseFont(fontName, new TextDecoder().decode(bytes));
    return fontName;
  })();

  _inflight.set(fontName, p);
  try { return await p; }
  finally { _inflight.delete(fontName); }
}

// renderAscii(text, opts) — the encoder. opts: { font, horizontalLayout, verticalLayout,
// width, whitespaceBreak, showHardBlanks }. Returns the ASCII-art string.
export async function renderAscii(text, opts = {}) {
  const font = opts.font || DEFAULT_FONT;
  const resolved = await loadFont(font);
  return figlet.textSync(String(text == null ? "" : text), {
    font: resolved,
    horizontalLayout: opts.horizontalLayout,   // "default" | "full" | "fitted" | "controlled smushing" | "universal smushing"
    verticalLayout: opts.verticalLayout,
    width: opts.width,
    whitespaceBreak: opts.whitespaceBreak,
    showHardBlanks: opts.showHardBlanks,
  });
}

// listFonts() — every available font name (sorted). From the κ-manifest; falls back to the
// engine's built-in list. Synchronous fallback if the manifest hasn't loaded yet.
export async function listFonts() {
  const m = await manifest();
  const names = m.fonts && Object.keys(m.fonts);
  return names && names.length ? names.sort() : figlet.fontsSync();
}
export function listFontsSync() {
  if (_manifest && _manifest.fonts) return Object.keys(_manifest.fonts).sort();
  return figlet.fontsSync();
}

// fontKappa(name) — the sealed dual-axis identity of a font's bytes (null if unknown).
export function fontKappa(name) {
  const fontName = getFontName(name || DEFAULT_FONT);
  const e = _manifest && _manifest.fonts && _manifest.fonts[fontName];
  return e ? e.kappa : null;
}

export { figlet };
export default { renderAscii, loadFont, listFonts, listFontsSync, fontKappa, DEFAULT_FONT };
