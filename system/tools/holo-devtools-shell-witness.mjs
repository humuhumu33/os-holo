#!/usr/bin/env node
// holo-devtools-shell-witness.mjs — HOLO DEVTOOLS (ADR-0095): the SHELL INSTALL. Proves the running shell
// can serve CDP to a DevTools holospace frame, 100% serverless and κ-anchored, with the vendored UI loaded
// UNMODIFIED. The browser-only auto-install is guarded, so this Node witness exercises the SAME pure path:
//   • PROJECT live sealed UOR objects → a string-valued κ-store (serverless, Map.get O(1), Law L3)
//   • browser/SW-safe resolve + verifyDeep (no Buffer) — re-derive the address, a tampered κ refused (L5)
//   • installDevToolsServe → the κ-CDP backend answers a real CDP frame over the projected, verifying store
//   • the shell wiring + the holospace entry are correct + SERVERLESS (same-origin only, no CDN/socket)
//
// Authority: Chrome DevTools Protocol (the human UI's private transport) · W3C DID Core · schema.org ·
//   IETF RFC 8785 (JCS) · holospaces Law L1/L2/L3/L5.   node tools/holo-devtools-shell-witness.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { makeObject, linkTo } from "../os/usr/lib/holo/holo-object.mjs";
import * as UI from "../os/usr/lib/holo/devtools/holo-devtools-ui.js";

const here = dirname(fileURLToPath(import.meta.url));
const OS = join(here, "../os");
const checks = {}; const fail = [];
const ok = (n, c, d = "") => { checks[n] = !!c; if (!c) fail.push(n + (d ? ` — ${d}` : "")); return !!c; };
const hexOf = (did) => String(did).split(":").pop();
const read = (p) => readFileSync(join(OS, p), "utf8");

// ── build real, sealed UOR objects (a parent→child link = a heap edge) ──
const tmp = new Map();
const child = makeObject(tmp, { type: "holo:Leaf", "schema:name": "child" });
const note = makeObject(tmp, { type: ["schema:CreativeWork", "holo:Note"], "schema:text": "shell hello",
  links: [linkTo(tmp, "schema:hasPart", child)] });
const objects = [child, note];
const placements = [{ k: note.id, x: 12, y: 24, w: 100, h: 80 }];

// ── 1 · browser/SW-safe resolve + verifyDeep (no Buffer) re-derive correctly (Law L5) ──
const store = UI.buildStore(objects);
const back = UI.browserResolve(store, note.id);
ok("browser-resolve-roundtrips", back && back["schema:text"] === "shell hello");
ok("browser-verifyDeep-green", UI.browserVerifyDeep(store, back).ok === true);

// ── 2 · a TAMPERED κ is refused by the browser-safe re-derivation (the RED badge, Law L5) ──
const tamperStore = UI.buildStore(objects);
const orig = JSON.parse(tamperStore.get(hexOf(note.id)));
tamperStore.set(hexOf(note.id), JSON.stringify({ ...orig, "schema:text": "TAMPERED" }));   // content changed, id kept
ok("browser-verifyDeep-red-on-tamper", UI.browserVerifyDeep(tamperStore, UI.browserResolve(tamperStore, note.id)).ok === false);

// ── 3 · installDevToolsServe → the κ-CDP backend answers a real CDP frame over the projected store ──
const serve = UI.installDevToolsServe({ objects, placements, type: "holo:HomeScene" });
const doc = await serve({ app: "holo-devtools", method: "cdp", args: { cdp: { id: 1, method: "DOM.getDocument" } } });
// #document › HTML › BODY › κ-nodes — devtools renders the tree only when the document has an HTML child (DOMModel.ts:299)
const html0 = doc.result && doc.result.result.root.children[0];
const node0 = html0 && html0.children[0].children[0];
ok("install-serves-scene-tree-by-kappa",
  doc.result.result.root.nodeType === 9 && html0 && html0.nodeName === "HTML" && node0 && node0.kappa === note.id);

// ── 4 · the Network κ-stream verify badge is GREEN over the serverless browser store (end-to-end) ──
const net = await serve({ app: "holo-devtools", method: "cdp", args: { cdp: { id: 2, method: "Network.getResponseBody", params: { requestId: note.id } } } });
ok("install-network-verify-green", net.result.result.holo.found === true && net.result.result.holo.verify.ok === true);

// ── 5 · the shell imports the installer (window.HoloDevToolsServe is wired into the live shell) ──
const shell = read("usr/share/frame/shell.html");
ok("shell-imports-devtools-installer", /import\s+"\/_shared\/devtools\/holo-devtools-ui\.js"/.test(shell));
ok("installer-installs-the-authority", /window\.HoloDevToolsServe\s*=\s*serve/.test(read("usr/lib/holo/devtools/holo-devtools-ui.js")));

// ── 6 · the holospace entry loads the VENDORED UI + the host shim, and is SERVERLESS (no CDN/socket) ──
const entry = read("usr/lib/holo/devtools/holo-devtools.html");
ok("entry-loads-vendored-devtools", /vendor\/front_end\/entrypoints\/devtools_app\/devtools_app\.js/.test(entry));
ok("entry-installs-host-shim-bound-to-bus", /installHoloBridgeWebSocket/.test(entry) && /method:\s*"cdp"/.test(entry) && /holo-privacy:rpc/.test(entry));   // the fake-WebSocket bridge routes the frontend's proven WebSocketConnection to the κ backend over the bus (replaces the embedder shim, which never painted)
ok("entry-is-serverless", !/(src|href)\s*=\s*["']https?:\/\//i.test(entry) && !/wss?:\/\//i.test(entry));

// ── 7 · the VENDORED bundle is BOOT-COMPLETE — the runtime assets devtools awaits on startup are present.
//   Both of these were silent 404s that aborted the whole boot (i18n rejects → MainImpl throws; missing
//   icons → broken UI): guard them fail-loud so the bundle can't regress to an empty shell. ──
const V = "usr/lib/holo/devtools/vendor/front_end";
ok("bundle-has-default-locale", existsSync(join(OS, V, "core/i18n/locales/en-US.json")),
   "devtools awaits this on boot; absent ⇒ i18n rejects and MainImpl never mounts a panel");
ok("bundle-has-flattened-icons",
   ["filter", "gear", "plus", "select-element", "dots-vertical"].every((n) => existsSync(join(OS, V, `Images/${n}.svg`))),
   "the build flattens Images/src/*.svg → Images/*.svg; absent ⇒ icon 404s across the UI");

const witnessed = Object.values(checks).every(Boolean);
const result = {
  "@type": "earl:TestResult",
  witnessed,
  subject: "Holo DevTools shell install (ADR-0095) — the running shell serves CDP to a DevTools holospace, serverless + κ-anchored, vendored UI unmodified",
  covers: [
    "browser/SW-safe resolve + verifyDeep (no Buffer) re-derive the address — identical Law-L5 semantics to the Node path (Law L2)",
    "a tampered κ is refused by browser-safe re-derivation (the RED verify badge, Law L5)",
    "installDevToolsServe projects sealed UOR objects → a string-valued κ-store (Map.get O(1), Law L3) and the κ-CDP backend answers a real CDP DOM.getDocument BY κ over it",
    "the Network κ-stream verify badge is GREEN end-to-end over the serverless browser store",
    "shell.html imports holo-devtools-ui.js so window.HoloDevToolsServe is installed in the live shell (holo-gov.js routes the DevTools frame's method:'cdp' to it)",
    "the HoloDevTools holospace entry loads the VENDORED Chrome devtools entrypoint UNMODIFIED + installs the fake-WebSocket bridge that routes the frontend's WebSocketConnection to the κ backend over the bus (method:'cdp')",
    "the entry is 100% SERVERLESS — same-origin /_shared only, no CDN (http(s)://) and no socket (ws(s)://)",
  ],
  install: { authority: "window.HoloDevToolsServe", entry: "/_shared/devtools/holo-devtools.html", transport: "holo-privacy:rpc#cdp (no socket)" },
  checks, failed: fail,
  authority: "Chrome DevTools Protocol (the human UI's private transport) · W3C DID Core · schema.org · IETF RFC 8785 (JCS) · ADR-0091 (the governed cross-frame bus) · holospaces Law L1/L2/L3/L5",
};
writeFileSync(join(here, "holo-devtools-shell-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("Holo DevTools witness — the shell install (serverless, κ-anchored, vendored UI)\n");
for (const [k, v] of Object.entries(checks)) console.log(`  ${v ? "✓" : "✗"}  ${k}`);
console.log(`\n  ${witnessed ? "WITNESSED ✓" : "NOT witnessed — " + fail.join("; ")}`);
process.exit(witnessed ? 0 : 1);
