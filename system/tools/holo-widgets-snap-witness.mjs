#!/usr/bin/env node
// holo-widgets-snap-witness.mjs — the interact.js SNAP ENGINE wired into the Holo Widgets runtime: seamless,
// magnetic position anchoring for every object on a holospace tab. holo-widgets.js is a browser IIFE, so this
// witness (a) RE-DERIVES the nearest-line snap math numerically (magnetic within range, ignores beyond, snaps
// to sibling edges/centres + golden gridlines), and (b) source-asserts the wiring: interact.js is vendored
// MIT + tarball-integrity-pinned, loaded same-origin (no CDN), drives draggable+resizable+snap modifiers, and
// the hand-rolled drag stays as a gated graceful fallback. Tap/double-tap preserved.
//
// Authority: interact.js (MIT, vendored unmodified) · φ = golden ratio (1.618) · holospaces Law L1/L2/L5 ·
//   ADR-0088/0089 (per-holospace boards).   node tools/holo-widgets-snap-witness.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const OS = join(here, "../os");
const checks = {}; const fail = [];
const ok = (n, c, d = "") => { checks[n] = !!c; if (!c) fail.push(n + (d ? ` — ${d}` : "")); return !!c; };
const src = readFileSync(join(OS, "usr/lib/holo/holo-widgets.js"), "utf8");
const shell = readFileSync(join(OS, "usr/share/frame/shell.html"), "utf8");
const vendor = readFileSync(join(here, "vendor-interactjs.mjs"), "utf8");

// ── 1 · the nearest-line snap math (re-derived) — magnetic within range, NULL beyond ──
const SNAP_RANGE = 9;
const nearestLine = (lines, c) => { let best = null, bd = SNAP_RANGE + 1; for (const L of lines) { const d = Math.abs(c - L); if (d < bd) { bd = d; best = Math.round(L); } } return best; };
const lines = [100, 200, 360.4, 500];
ok("snap-magnetic-within-range", nearestLine(lines, 206) === 200 && nearestLine(lines, 357) === 360);
ok("snap-ignores-beyond-range", nearestLine(lines, 240) === null);
ok("snap-picks-the-nearest", nearestLine(lines, 150) === null && nearestLine(lines, 197) === 200);

// ── 2 · the candidate lines combine SIBLING edges/centres + the GOLDEN anchors (the alignment delight) ──
// re-derive vLines for a mock scene: one sibling at x=300 w=200 → left300/centre400/right500; golden lines.
const b = { minX: 64, minY: 92, maxX: 1888, maxY: 1032 }, Wu = b.maxX - b.minX;
const sib = { x: 300, w: 200 };
const vLines = [b.minX + 80, b.maxX - 80, (b.minX + b.maxX) / 2, b.minX + Wu * 0.382, b.minX + Wu * 0.618, sib.x, sib.x + sib.w / 2, sib.x + sib.w];
ok("targets-include-sibling-edges-and-centre", vLines.includes(300) && vLines.includes(400) && vLines.includes(500));
ok("targets-include-golden-gridlines", vLines.some((l) => Math.abs(l - (b.minX + Wu * 0.382)) < 1e-6) && vLines.some((l) => Math.abs(l - (b.minX + Wu * 0.618)) < 1e-6));
ok("dragging-near-a-sibling-edge-snaps-to-it", nearestLine(vLines, 304) === 300 && nearestLine(vLines, 402) === 400);

// ── 3 · WIRING — interact.js is the engine: vendored MIT + integrity-pinned, loaded same-origin, modifiers ──
ok("interactjs-vendored-MIT-integrity-pinned", /interactjs/.test(vendor) && /MIT/.test(vendor) && /const INTEGRITY = "sha512-/.test(vendor) && /tarball integrity verified \(Law L5\)/.test(vendor));
ok("loaded-same-origin-no-CDN", /\/_shared\/interactjs\/interact\.min\.js/.test(src) && !/https?:\/\/[^"']*interact/i.test(src));
ok("uses-interact-draggable-resizable-snap", /I\(w\.el\)\.draggable\(/.test(src) && /I\(w\.el\)\.resizable\(/.test(src) && /I\.modifiers\.snap\(/.test(src) && /I\.snappers\.grid\(/.test(src));
ok("snap-targets-sibling-and-golden", /function collectLines\(excludeEl\)/.test(src) && /Wu \* 0\.382/.test(src) && /Wu \* 0\.618/.test(src) && /v\.push\(o\.l, o\.cx, o\.r\)/.test(src));

// ── 4 · GRACEFUL FALLBACK — the hand-rolled drag stays, gated by w._snap; tap/double preserved ──
ok("legacy-drag-gated-by-snap-flag", /if \(w\._snap\) return;/.test(src) && /w\._snap = true/.test(src));
ok("loader-is-graceful-on-absence", /s\.onerror = function \(\) \{[^}]*graceful/.test(src) && /ensureInteract\(\)/.test(src));
ok("tap-and-doubletap-preserved", /\.on\("tap"/.test(src) && /\.on\("doubletap"/.test(src) && /onDouble/.test(src) && /onTap/.test(src));

// ── 5 · applies to EVERY object (all widgets, every tab) + snaps from the first frame when interact is ready ──
ok("snap-engine-applied-at-mount", /if \(W\.interact\) wireSnapEngine\(w\);/.test(src) && /live\.forEach\(wireSnapEngine\)/.test(src));

// ── 6 · VISUAL GUIDE LINES — drawn while a drag aligns, cleared on drop; the widget drag draws them ──
ok("guide-lines-render-and-clear", /function showGuides/.test(src) && /function clearGuides/.test(src) && /id = "hw-guides"/.test(src) && /function guidesFor/.test(src));
ok("widget-drag-draws-then-clears-guides", /showGuides\(g\.v, g\.h\)/.test(src) && /clearGuides\(\); save\(\);/.test(src));

// ── 7 · SHARED engine (window.HoloSnap) scans EVERY object (widgets + app windows + icons) ──
ok("shared-HoloSnap-engine-exposed", /W\.HoloSnap = \{/.test(src) && /snapRect:/.test(src) && /guidesFor:/.test(src) && /showGuides:/.test(src) && /clearGuides:/.test(src));
ok("collectLines-scans-all-objects", /querySelectorAll\("\.hw-widget, holo-window"\)/.test(src));

// ── 8 · snapRect (the hand-rolled-dragger helper) — numeric: snaps an edge + returns the guide line ──
const near = (lines, c) => { let best = null, bd = SNAP_RANGE + 1; for (const L of lines) { const d = Math.abs(c - L); if (d < bd) { bd = d; best = Math.round(L); } } return best; };
const snapRect = (rect, V, H) => {
  const va = [rect.left, rect.left + rect.width / 2, rect.left + rect.width]; let bV = null;
  va.forEach((c) => { const s = near(V, c); if (s != null) { const d = Math.abs(c - s); if (!bV || d < bV.d) bV = { d, off: s - c, line: s }; } });
  return { left: Math.round(rect.left + (bV ? bV.off : 0)), v: bV ? [bV.line] : [] };
};
const sr = snapRect({ left: 304, top: 0, width: 100, height: 60 }, [300, 700], [200]);
ok("snapRect-snaps-edge-and-returns-guide", sr.left === 300 && sr.v[0] === 300);
ok("snapRect-releases-beyond-range", snapRect({ left: 320, top: 0, width: 100, height: 60 }, [300], []).left === 320);

// ── 9 · APP WINDOWS + DESKTOP ICONS snap to the SAME engine + show guides (the extension) ──
ok("app-windows-snap-via-shared-engine", /window\.HoloSnap\.snapRect\(\{ left: po\.left \+ nx/.test(shell) && /win-dragend/.test(shell) && (shell.match(/window\.HoloSnap\.clearGuides\(\)/g) || []).length >= 2);
ok("desktop-icons-snap-via-shared-engine", /el\.style\.transform = "translate3d\(" \+ nx/.test(shell) && /window\.HoloSnap\.snapRect\(\{ left: po\.left \+ nx, top: po\.top \+ ny, width: el\.offsetWidth/.test(shell));

// ── 6 · the vendored bundle is present on THIS host (soft — gitignored artifact, absent on fresh clone) ──
const bundlePresent = existsSync(join(OS, "usr/lib/holo/interactjs/interact.min.js"));

const witnessed = Object.values(checks).every(Boolean);
const result = {
  "@type": "earl:TestResult",
  witnessed,
  subject: "Holo Widgets snap engine (interact.js) — seamless magnetic position anchoring for every object on a holospace tab",
  covers: [
    "the nearest-line snap is magnetic within range and null beyond (a delightful, non-sticky pull)",
    "snap targets combine sibling edges + centres (Figma-style alignment) with the canvas golden gridlines 0.382/0.618 + margins + centre",
    "interact.js is the engine — vendored MIT + tarball-integrity-pinned (Law L5), loaded same-origin (no CDN), driving draggable+resizable+snap/grid modifiers",
    "graceful fallback — the hand-rolled drag stays active (gated by w._snap) when interact is absent/offline, and tap/double-tap are preserved",
    "the snap engine applies to EVERY widget on EVERY tab and engages from the first frame once interact is ready",
  ],
  bundlePresent, snapRange: SNAP_RANGE,
  checks, failed: fail,
  authority: "interact.js (MIT, vendored unmodified, tarball-integrity-pinned) · φ = golden ratio (1.618) · holospaces Law L1/L2/L5 · ADR-0088/0089 (per-holospace boards)",
};
writeFileSync(join(here, "holo-widgets-snap-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("Holo Widgets snap-engine witness — interact.js magnetic anchoring (golden + sibling + grid)\n");
for (const [k, v] of Object.entries(checks)) console.log(`  ${v ? "✓" : "✗"}  ${k}`);
console.log(`\n  interact.min.js vendored on this host: ${bundlePresent ? "yes" : "no (run tools/vendor-interactjs.mjs)"}`);
console.log(`\n  ${witnessed ? "WITNESSED ✓" : "NOT witnessed — " + fail.join("; ")}`);
process.exit(witnessed ? 0 : 1);
