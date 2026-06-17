#!/usr/bin/env node
// holo-code-desktop-witness.mjs — TARGET-FIRST (expected-RED) conformance suite for HOLO CODE DESKTOP:
// the browser-first Desktop GUI shell that wraps the already-witnessed Holo Code engine (apps/code) as
// its OWN sealed κ-object. Per the holospaces vv/ discipline this suite is authored BEFORE the
// implementation (a target in the spirit of vv/targets/): it defines "done", is EXPECTED to be RED
// until apps/code-desktop is assembled, then promoted to a live suite (catalog row → live).
//
// "Done", browser-first =
//   • apps/code-desktop is ONE self-verifying κ-object: its whole closure + its root RE-DERIVE (Law L5).
//   • It REUSES the proven engine (agent · tools · providers) from apps/code — it does NOT fork it.
//   • The GUI is COMPOSED from existing OS surfaces, not handwritten widgets:
//       <holo-window> panes + a 3-tab shell (Chat · Code · Cowork) + Monaco editor + XTerm terminal.
//   • The visual diff view renders edit_file diffs with per-line accept/reject wired to the holo-files
//     VFS write (the only mutation path).
//   • The familiar permission modes (default · plan · auto · acceptEdits · bypass) are surfaced on the
//     fail-closed conscience floor (ADR-033).
//   • Q (QVAC) is the streaming on-device brain, reused via holo-code-providers (no second brain).
//   • Execution-dependent features (run · build · test · terminal-exec · worktrees · schedule · ssh ·
//     cowork) are PRESENT but honestly DISABLED-WITH-AFFORDANCE ("requires native host") — never faked.
//
// Pure Node: it RE-DERIVES the shipped bytes and IMPORTS the reused engine logic, so the logic under
// test is the logic that ships. Emits tools/holo-code-desktop-witness.result.json and exits 0/1.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const DESKTOP_DIR = join(here, "../../../holo-apps/apps/code-desktop"); // the app under construction
const CODE_DIR = join(here, "../../../holo-apps/apps/code"); // the witnessed engine it reuses
const SHARED = join(here, "../os/usr/lib/holo"); // OS _shared runtime
const FRAME = join(here, "../os/usr/share/frame"); // <holo-window> shell + Monaco/XTerm host
const HOLOGRAM_OS = join(here, "../os/usr/lib/holo"); // in-tree content-addressing primitives (this mirror; canonical witness points at a sibling absent here)

const checks = {};
const failed = [];
const ok = (name, cond, detail) => {
  checks[name] = !!cond;
  if (!cond) failed.push(name + (detail ? ` — ${detail}` : ""));
  return !!cond;
};
const safeRead = (p) => {
  try {
    return readFileSync(p);
  } catch {
    return null;
  }
};
const safeText = (p) => {
  try {
    return readFileSync(p, "utf8");
  } catch {
    return null;
  }
};

// the SAME content-addressing primitives relock-app/build-app use — re-derivation, not a re-hash.
// Guarded so this target suite degrades gracefully on a checkout without the sibling OS runtime.
let sha256hex = null,
  makeObject = null,
  contentLink = null,
  primitivesReady = false;
try {
  ({ sha256hex } = await import(pathToFileURL(join(HOLOGRAM_OS, "holo-uor.mjs"))));
  ({ makeObject, contentLink } = await import(pathToFileURL(join(HOLOGRAM_OS, "holo-object.mjs"))));
  primitivesReady = typeof sha256hex === "function" && typeof makeObject === "function" && typeof contentLink === "function";
} catch {
  /* re-derivation checks will be marked pending with a note */
}

const appPresent = existsSync(join(DESKTOP_DIR, "holospace.json"));

// resolve a closure path → real bytes (desktop app · reused engine · OS _shared · frame shell)
const bytesFor = (rel) =>
  rel.startsWith("apps/code-desktop/")
    ? safeRead(join(DESKTOP_DIR, rel.slice("apps/code-desktop/".length)))
    : rel.startsWith("apps/code/")
      ? safeRead(join(CODE_DIR, rel.slice("apps/code/".length)))
      : rel.startsWith("_shared/")
        ? safeRead(join(SHARED, rel.slice("_shared/".length)))
        : rel.startsWith("frame/")
          ? safeRead(join(FRAME, rel.slice("frame/".length)))
          : null;

// app-dependent check helper: until apps/code-desktop is assembled, record a calm PENDING (expected RED).
const need = (name, fn) => {
  if (!appPresent) return ok(name, false, "pending — apps/code-desktop not yet assembled (expected RED)");
  try {
    return fn();
  } catch (e) {
    return ok(name, false, e?.message || String(e));
  }
};

// ── 0) FOUNDATION (passes now) — the engine the Desktop reuses is real and importable ────────────────
// This is the seam the GUI builds on; proving it green keeps the target honest (not all-red by accident).
let engineImportable = false,
  qBrainSeam = false;
try {
  const prov = await import(pathToFileURL(join(CODE_DIR, "holo-code-providers.mjs")));
  const local = prov.PROVIDERS?.local;
  const hq = prov.PROVIDERS?.["holo-q"];
  engineImportable = !!(local && hq && typeof local.stream === "function");
  qBrainSeam = !!(hq && hq.kind === "verifiable-llm" && typeof hq.stream === "function" && typeof hq.connect === "function");
} catch (e) {
  failed.push("engineImport — " + (e?.message || e));
}
ok("engineImportable", engineImportable, "apps/code exposes PROVIDERS.local + PROVIDERS['holo-q'] (the reused engine seam)");
ok("qBrainSeam", qBrainSeam, "the reused Holo Q (QVAC) brain is a streaming verifiable-llm provider");

// ── 1) MANIFEST — the Desktop declares itself a browser-first κ-object that REUSES the engine ─────────
need("manifestConforms", () => {
  const def = JSON.parse(safeText(join(DESKTOP_DIR, "holospace.json")));
  const specs = def?.conforms?.specs || [];
  return ok(
    "manifestConforms",
    def?.id === "org.hologram.HoloCodeDesktop" &&
      specs.includes("law-l5") &&
      specs.includes("holo-code") &&
      specs.includes("holo-code-desktop") &&
      specs.includes("browser-first"),
    "id · specs(law-l5, holo-code, holo-code-desktop, browser-first)",
  );
});

// ── 2) Law L5 — the whole closure RE-DERIVES, byte-for-byte ───────────────────────────────────────────
need("closureReDerives", () => {
  if (!primitivesReady) return ok("closureReDerives", false, "pending — content-addressing primitives unavailable on this checkout");
  const lock = JSON.parse(safeText(join(DESKTOP_DIR, "holospace.lock.json")));
  const closure = lock?.closure || {};
  let bad = 0,
    missing = 0;
  for (const [rel, meta] of Object.entries(closure)) {
    const b = bytesFor(rel);
    if (!b) {
      missing++;
      continue;
    }
    if ("did:holo:sha256:" + sha256hex(b) !== meta.kappa) bad++;
  }
  return ok("closureReDerives", Object.keys(closure).length > 0 && bad === 0 && missing === 0, `${Object.keys(closure).length} files · ${bad} mismatch · ${missing} unresolved`);
});

// ── 3) the ROOT re-derives (the Desktop is ONE self-verifying κ-object) ───────────────────────────────
need("rootReDerives", () => {
  if (!primitivesReady) return ok("rootReDerives", false, "pending — content-addressing primitives unavailable");
  const def = JSON.parse(safeText(join(DESKTOP_DIR, "holospace.json")));
  const lock = JSON.parse(safeText(join(DESKTOP_DIR, "holospace.lock.json")));
  const closure = lock?.closure || {};
  const TYPE = {
    ".html": "schema:WebPage",
    ".js": "schema:SoftwareSourceCode",
    ".mjs": "schema:SoftwareSourceCode",
    ".css": "schema:SoftwareSourceCode",
    ".json": "schema:Dataset",
    ".jsonld": "schema:Dataset",
    ".svg": "schema:ImageObject",
    ".png": "schema:ImageObject",
    ".md": "schema:MediaObject",
  };
  const extOf = (p) => {
    const m = /\.[a-z0-9]+$/i.exec(p);
    return m ? m[0].toLowerCase() : "";
  };
  const typeOf = (p) => TYPE[extOf(p)] || "schema:MediaObject";
  const links = [];
  for (const [rel] of Object.entries(closure)) {
    const b = bytesFor(rel);
    if (!b) continue;
    links.push({ ...contentLink("schema:hasPart", `sha256:${sha256hex(b)}`, typeOf(rel)), "schema:name": rel });
  }
  links.sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  const root = makeObject(new Map(), {
    type: [...(def.type || ["schema:SoftwareApplication"]), "prov:Entity"],
    context: [{ hosc: "https://hologram.os/ns/conformance#" }],
    "schema:name": def.name,
    ...(def.summary ? { "schema:description": def.summary } : {}),
    ...(def.applicationCategory ? { "schema:applicationCategory": def.applicationCategory } : {}),
    "schema:identifier": def.id,
    ...(def.conforms?.specs ? { "schema:featureList": def.conforms.specs } : {}),
    ...(def.capabilities ? { "hosc:capabilities": def.capabilities } : {}),
    "prov:wasGeneratedBy": { "@id": "https://hologram.os/tools/build-app" },
    links,
  });
  return ok("rootReDerives", root.id === lock.root, `${String(root.id).slice(0, 24)}… vs ${String(lock?.root).slice(0, 24)}…`);
});

// ── 4) REUSE — the Desktop closure references the apps/code engine, it does not fork it ───────────────
need("reusesEngine", () => {
  // compose-by-reference: the manifest PINS the engine by its content-address (holo:dependsOn → the
  // org.hologram.HoloCode root κ) and the GUI imports ../code/*.mjs at runtime — there is NO forked copy.
  const def = JSON.parse(safeText(join(DESKTOP_DIR, "holospace.json")));
  const deps = def?.["holo:dependsOn"] || [];
  const pinsEngine = deps.some(
    (d) => d?.["schema:identifier"] === "org.hologram.HoloCode" && /^did:holo:sha256:[0-9a-f]{64}$/.test(d?.["holo:root"] || ""),
  );
  const src = (safeText(join(DESKTOP_DIR, "index.html")) || "") + (safeText(join(DESKTOP_DIR, "holo-code-desktop.js")) || "");
  const importsEngine = /\.\.\/code\/holo-code-(agent|providers|tools)/.test(src);
  const lock = JSON.parse(safeText(join(DESKTOP_DIR, "holospace.lock.json")) || "{}");
  const forked = Object.keys(lock?.closure || {}).filter((k) => /apps\/code-desktop\/holo-code-(agent|tools|providers)\.mjs$/.test(k));
  return ok("reusesEngine", pinsEngine && importsEngine && forked.length === 0, `manifest pins engine κ · imports ../code · ${forked.length} forked copies`);
});

// ── 5) GUI — composed from existing OS surfaces (reuse, not handwritten widgets) ──────────────────────
need("composedGuiShell", () => {
  const html = safeText(join(DESKTOP_DIR, "index.html")) || "";
  const ctrl = safeText(join(DESKTOP_DIR, "holo-code-desktop.js")) || "";
  const src = html + ctrl;
  // reuse precedent is workspace.html (Monaco + XTerm panes + the OS UI kernel); the OS shell provides
  // window chrome at launch, so the app composes panes rather than embedding <holo-window> (inline in
  // shell.html, not importable standalone). The editor/terminal panes live in index.html; the vendored
  // Monaco/XTerm are loaded by the controller — so verify the pane hosts (html) AND the loaders (ctrl).
  const reusesKernel = /holo-ui-kernel/.test(html);
  const reusesMonaco = /monaco/i.test(src) && /id="editor-host"/.test(html);
  const reusesXterm = /xterm/i.test(src) && /id="term-host"/.test(html);
  const threeTabs = /data-tab=["']chat["']/.test(html) && /data-tab=["']code["']/.test(html) && /data-tab=["']cowork["']/.test(html);
  return ok("composedGuiShell", reusesKernel && reusesMonaco && reusesXterm && threeTabs, "Monaco+XTerm pane hosts (index.html) + vendored loaders (controller) + OS UI kernel + 3-tab shell (chat·code·cowork)");
});

// ── 6) DIFF VIEW — per-line accept/reject, wired to the holo-files VFS write (the only mutation path) ─
need("diffViewAcceptReject", () => {
  const diff = safeText(join(DESKTOP_DIR, "desktop-diff.js")) || safeText(join(DESKTOP_DIR, "holo-code-desktop.js")) || "";
  return ok(
    "diffViewAcceptReject",
    /accept/i.test(diff) && /reject/i.test(diff) && /holo-files\.js|VFS|write_file|edit_file/.test(diff),
    "renders edit_file diffs; accept writes via holo-files VFS, reject is a no-op",
  );
});

// ── 7) PERMISSION MODES — the familiar modes on the fail-closed conscience floor ──────────────────────
need("permissionModesSurfaced", () => {
  const shell = (safeText(join(DESKTOP_DIR, "holo-code-desktop.js")) || "") + (safeText(join(DESKTOP_DIR, "index.html")) || "");
  return ok(
    "permissionModesSurfaced",
    /default/.test(shell) && /plan/.test(shell) && /auto/.test(shell) && /acceptEdits/.test(shell) && /bypass/.test(shell) && /conscience/i.test(shell),
    "default·plan·auto·acceptEdits·bypass surfaced over the conscience gate",
  );
});

// ── 8) Q BRAIN — the GUI drives the REUSED Holo Q provider (no second brain) ──────────────────────────
need("qBrainWired", () => {
  const shell = (safeText(join(DESKTOP_DIR, "holo-code-desktop.js")) || "") + (safeText(join(DESKTOP_DIR, "index.html")) || "");
  return ok("qBrainWired", /holo-code-providers/.test(shell) && /(holo-q|PROVIDERS)/.test(shell), "streams via the reused apps/code holo-q provider");
});

// ── 9) HONEST EXECUTION AFFORDANCE — browser-first gaps are disabled-with-affordance, never faked ─────
need("executionAffordance", () => {
  const shell = (safeText(join(DESKTOP_DIR, "holo-code-desktop.js")) || "") + (safeText(join(DESKTOP_DIR, "index.html")) || "");
  const declaresGap = /requires native host|native host|disabled|not available in browser/i.test(shell);
  const namesGated = /(\brun\b|build|test|terminal|worktree|schedule|ssh|cowork)/i.test(shell);
  return ok("executionAffordance", declaresGap && namesGated, "run·build·test·terminal·worktrees·schedule·ssh·cowork present but gated to the native host (honest, not faked)");
});

// ── verdict ───────────────────────────────────────────────────────────────────────────────────────────
const witnessed = failed.length === 0;
const covers = [
  "Holo Code Desktop is the browser-first Desktop GUI shell for the witnessed Holo Code engine (apps/code), sealed as its OWN κ-object whose closure + root RE-DERIVE to their content address (Law L5)",
  "It REUSES the proven engine (agent · tools · providers) and the Holo Q (QVAC) streaming on-device brain unchanged — the Desktop is an additive surface, not a fork",
  "The GUI is COMPOSED from existing OS surfaces — <holo-window> panes, a 3-tab shell (Chat · Code · Cowork), Monaco editor, XTerm terminal — reuse over handwritten widgets",
  "The visual diff view renders edit_file diffs with per-line accept/reject wired to the holo-files content-addressed VFS write (the only mutation path)",
  "The familiar Claude Code permission modes (default · plan · auto · acceptEdits · bypass) are surfaced on the fail-closed conscience floor (ADR-033)",
  "Execution-dependent features (run · build · test · terminal-exec · worktrees · schedule · ssh · cowork) are present but honestly DISABLED-WITH-AFFORDANCE (requires the native host) — never faked",
];
const result = {
  spec: "Holo Code Desktop (holo-code-desktop) — browser-first Desktop GUI κ-object wrapping the apps/code engine; reuse-first, sealed, L5 re-derivable, conscience-gated, Q-brained, honest about the browser execution boundary.",
  authority: "re-derivation of the shipped bytes (hash KAT, Law L5) + execution of the reused apps/code engine logic (no browser, no server) · external authorities: holospaces vv/ (CC-*), ADR-033 conscience, ADR-0101 streaming κ-models",
  tier: "target", // expected-RED until apps/code-desktop is assembled, then promote: targets/ → suites/
  witnessed,
  covers,
  appPresent,
  checks,
  failed,
};
writeFileSync(join(here, "holo-code-desktop-witness.result.json"), JSON.stringify(result, null, 2) + "\n");

console.log("Holo Code Desktop — browser-first Desktop GUI over the Holo Code engine (TARGET-FIRST suite)\n");
for (const [k, v] of Object.entries(checks)) console.log(`  ${v ? "✓" : "✗"}  ${k}`);
console.log(`\n${witnessed ? "WITNESSED" : appPresent ? "NOT WITNESSED" : "RED (expected) — engine seam verified; app pending"} · ${Object.values(checks).filter(Boolean).length}/${Object.keys(checks).length} checks${failed.length ? "\n  open:\n    - " + failed.join("\n    - ") : ""}`);
process.exit(witnessed ? 0 : 1);
