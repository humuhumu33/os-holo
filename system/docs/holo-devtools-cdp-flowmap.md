# Holo DevTools — the CDP ↔ κ flow-map (design, pre-acceptance)

Companion to [ADR-0095](adr/0095-holo-devtools.md). This is the load-bearing artifact: the
mapping from each Chrome DevTools Protocol (CDP) domain onto a concrete operation over the
κ-addressed substrate, plus the transport, the three doors, the governance line, the vendoring
plan, and the staged witness plan. No code lands until the ADR is accepted (deliverable 4).

The premise the ADR settles: **the UI is the cheap part** (vendor `devtools-frontend` UNMODIFIED).
The whole engineering load is a backend that speaks enough CDP to drive that UI, whose objects
ARE κ. Below, "read-through-κ" means `resolve(store, did) → JSON` then `verifyDeep` (Law L5);
"write" means the `holo-blocks-repo` / scene-manifest mutation path with `prov:wasDerivedFrom`
lineage preserved (per [ADR-0089](adr/0089-holo-scene.md)).

---

## 0. What CDP is, and why the mapping is a re-interpretation not a port

CDP is a JSON-RPC protocol: the frontend sends `{id, method, params}`, the backend answers
`{id, result}` and pushes `{method, params}` events. `devtools-frontend` is a pure client of
that protocol over a `Connection` abstraction (normally a WebSocket to a browser's
`content/browser` CDP server). Nothing in the frontend assumes Chrome — it assumes a CDP peer.

So we do not "port Chrome". We stand up a **κ-CDP backend**: a dispatcher that implements a
faithful SUBSET of CDP domains, where every `nodeId` / `objectId` / `scriptId` / `requestId`
is a stable handle that resolves to a κ. The frontend renders its familiar panels; the domain
of inspection is the live holospace, not a web page. Some panels map 1:1 (Elements ⇄ scene
tree). Some are re-interpreted (Network ⇄ the κ-stream timeline — the differentiator). A few
are honestly out of scope in phase 1 (live V8 stepping — see §7).

---

## 1. Transport — in-process / cross-frame, not a socket

CDP's default transport is a WebSocket round-trip. We do NOT use it. We bind `devtools-frontend`'s
`Connection` to the **existing Q cross-frame channel** (`holo-privacy:rpc` / `:res` / `:delta`,
brokered by `holo-gov.js` `byWin`, the same one ADR-0091 §3 and ADR-0090 already run):

```
devtools-frontend  ──postMessage{type:"holo-privacy:rpc", method:"cdp", args:{cdp:{id,method,params}}}──▶  holo-gov.js
       ▲                                                                                                       │
       └──────postMessage{type:"holo-privacy:res"|":delta", ...}◀── HoloDevToolsServe (the κ-CDP backend) ◀────┘
```

- One CDP message = one `holo-privacy:rpc` with `method:"cdp"`. CDP **events** ride the existing
  `:delta` push (already used for streaming inference and Q deltas), so the frontend's event
  stream is just delta frames — no new bus.
- The backend's host-asserted caller identity comes free from `byWin` (the frame cannot forge
  who it is — same property ADR-0091 relies on).
- **Latency**: no socket, no JSON-over-TCP, no localhost server. A repeat inspection of an
  unchanged κ is an O(1) `Map.get` (Law L3) — the κ-memo IS the DevTools cache. We stream
  deltas (node-inserted, request-will-be-sent) rather than re-sending whole trees.

A `HoloDevToolsServe({app, method, args, onDelta})` host function mirrors `HoloQServe` /
`HoloQRemoteServe` exactly, so `holo-gov.js` gains one branch (`d.method === "cdp"`) and nothing
else changes in the broker.

---

## 2. The domain map (CDP domain → κ substrate operation)

`store` = the κ object store (`Map` of hex → canonical bytes, `holo-object.mjs`).
`handle` = a live `HoloHandle` (`holo-blocks-repo.mjs`) for the focused holospace's mutable doc.
`scene` = the scene manifest (`holo-scene.mjs` / `holo-home.mjs`).

| CDP domain | DevTools panel | κ substrate operation | Read / Write | Key existing API |
|---|---|---|---|---|
| **Target / Browser** | (handshake) | enumerate the open holospaces as CDP "targets"; the focused holospace is the attached target. `targetId` = the holospace's doc `id` | read | `repo` doc ids; `byWin` for the focused frame |
| **DOM** | Elements | `DOM.getDocument` → the scene manifest tree as the document; each `objects[]` entry is a DOM node whose `backendNodeId` ⇄ its κ. Children = nested κ-objects (Merkle-DAG). `pushNodesByBackendIdsToFrontend` = κ → node | read | `worldToScene` / `scene.objects`; `resolve(store, κ)`; `verifyDeep` |
| **DOM (write)** | Elements (edit) | move/insert/remove a node = `handle.change(d => …)` on the `world` RGA + `nodes` LWWMap; a κ edit → `remix` child + `prov:wasDerivedFrom` | **write** | `HoloHandle.change`; `Scene.remix`; lineage metadata |
| **CSS** | Styles / Computed | `CSS.getComputedStyleForNode` → the resolved `--holo-*` design tokens for that object ([ADR-0023](adr/0023-holo-theme.md)/[0030](adr/0030-holo-ui.md)/[0057](adr/0057-holo-ui-conformance.md)); each "stylesheet" is a token κ-object; the readability floor (`--holo-font-min`) shows as an enforced, un-overridable rule | read (write in a later stage) | holo-theme token layer; computed token resolution |
| **Runtime** | Console (eval) | `Runtime.evaluate` → routed through `Q.agent` (governed, fail-closed) — NOT a raw JS eval. A `RemoteObject.objectId` ⇄ a κ; expanding it = `resolve` + property projection | read + **governed write** | `Q.agent(request,{caller})` (ADR-0091 §2) |
| **Runtime / Log** | Console (messages) | console entries are κ-addressed events: each Q run / receipt / heal emits a console message whose `objectId` resolves to its PROV-O receipt κ | read | Q receipts; `holo-mind` traces |
| **Debugger** | Sources | `Debugger.getScriptSource` → the holospace's source κ (`publishSource` → `SoftwareSourceCode`, [ADR-0055](adr/0055-holo-build.md)/[0056](adr/0056-holo-lang.md)); `scriptId` ⇄ source κ; the source tree is the κ document tree | read | `repo.publishSource`; `holo-blocks-repo` |
| **Network** | Network | **the differentiator** — every "request" is a κ resolve/stream over the substrate, not HTTP. Columns: κ, axis (sha256/blake3), **cache hit** (Map O(1) vs cold), **L5 verify** (verifyDeep pass/fail badge), render cost, **stream provenance** (`prov:wasDerivedFrom`). `Network.requestWillBeSent`/`responseReceived`/`loadingFinished` ⇄ store `get` + stream-delta lifecycle | read | `store.get`; `HoloHandle.applyDelta` deltas; `linkTo` digests; `verifyDeep` |
| **Performance** | Performance | a frame/compositor timeline of `sceneToWorld` mount calls, κ-memo hit ratio, and re-derivation cost; "scripting/rendering" buckets become "resolve / verify / render" buckets | read | `sceneToWorld` calls[]; memo metrics |
| **HeapProfiler / Memory** | Memory | the heap snapshot IS the κ store: each node = a κ-object, edges = its `links[]` (the Merkle-DAG), retained size = transitive closure bytes ([ADR-0060](adr/0060-holo-link.md)). Dedup is visible (one κ, many referrers) | read | `store` enumeration; `links`; closure graph |
| **Storage / Application** | Application | OPFS Home ([ADR-0058](adr/0058-holo-files.md)), the OS closure pins (`os-closure.json`), scene manifests, capability/governance grants (`holo-gov` state), the content-verify Service Worker (`holo-fhs-sw.js`) | read | `holo-fhs-sw.js`; `os-closure.json`; `holo-gov` grants |
| **Overlay** | (inspect hover) | highlight a holospace object on hover = map `backendNodeId` → its on-screen κ-object bounds via the compositor | read | compositor node bounds |

**The invariant across every row**: a `nodeId`/`objectId`/`scriptId`/`requestId` is never opaque
state living in the backend — it is a **stable alias for a κ**. Re-attaching, reloading, or
inspecting from a different door yields the same handles because they are content-derived
(Law L1). This is why the three doors (§3) can share one backend with zero forked logic.

---

## 3. The three doors — one backend, three entries (mirror ADR-0091)

All three call the SAME `HoloDevToolsServe` dispatcher. The door only changes the transport and
the governance posture, never the logic.

| Door | Surface | Entry | Governance |
|---|---|---|---|
| **Human** | the vendored `devtools-frontend` UI, mounted as a right-dockable / full-screen holospace | CDP over the cross-frame channel (§1) | sovereign over your own scene; cross-holospace/remote gated |
| **AI agent** | governed MCP tools (`devtools_inspect`, `devtools_query_dom`, `devtools_network`, `devtools_eval`) + a CDP-over-REST seam at `/~holo-devtools/api` | `tools/call` / `POST /~holo-devtools/api` (the [ADR-0093](adr/0093-holo-import-agent.md) wiring) | conscience-gated, **fail-closed** (no grant → refused) |
| **Holo Q** | a first-class Q capability — `Q` can inspect and mutate the running scene | a registered Q verb routing to `HoloDevToolsServe`, κ-memoized | the existing Q conscience gate; deterministic, receipted |

- The agent door exposes the SAME CDP methods as named MCP tools — `devtools_query_dom({selector})`
  is `DOM.querySelector` projected to a tool, returning a self-verifying κ result (verify, don't
  trust), exactly the ADR-0049/0093 pattern.
- The Q door makes inspection a native verb so an agent built on Q ("why is this widget not
  rendering?") inspects the live scene through the same governed path a human's Elements panel
  uses.

---

## 4. The governance line (Law L4 — no L4 violation)

Read-through-κ inspection of **your own** focused holospace is sovereign (no gate) — it is
re-derivation of content you already hold (Law L5), the same posture as opening Holo Files on the
substrate. Everything beyond that routes through `holo-gov.js` → conscience, fail-closed:

- **`Runtime.evaluate` / any mutation** → `Q.agent` (governed, receipted) — never a raw eval; an
  external caller gets exactly the tool, never the interior store (ADR-0091 §2).
- **Cross-holospace inspection** (attaching to a target you don't own) → a conscience grant,
  default-deny.
- **Remote / off-device inspection** → the governed egress door ([ADR-0090](adr/0090-holo-q-remote.md)),
  the same "remote-model repair" posture; opening a network transport is a deliberate, separate,
  opt-in step (NOT lit in phase 1).
- Every admitted privileged op seals a re-derivable receipt (who · verb · effect κ · at).

DevTools mints nothing of its own: it returns the substrate's existing κs (scene, source, token,
receipt) plus a lightweight inspection receipt on the governed doors.

---

## 5. Vendoring plan (devtools-frontend, UNMODIFIED, pinned)

**Reality check (corrected after vendoring — the original premise was wrong).** The design assumed npm
ships a *built* `front_end/` bundle. It does NOT: `chrome-devtools-frontend@1.0.1645245` ships the
**TypeScript source** tree (`core/sdk/Connections.ts`, no compiled `.js`; the only `.js` are third-party
deps — puppeteer/codemirror). Browsers cannot execute `.ts`, and the bundled `inspector.js` is produced
only by devtools' GN/Ninja build. Google's old pre-built CDN (appspot `serve_rev`/`serve_file`) is dead
(404 even on a valid git hash). So a **bootable** bundle must come from one of:
- **(A) a local Chrome/Edge install** — Chrome ships the *built* devtools and serves it via remote
  debugging (`--remote-debugging-port` → `/devtools/inspector.html`); this box has Chrome 149. This is
  the cheapest path to the real, compiled UI and the recommended vendoring SOURCE going forward.
- **(B) a from-source GN/Ninja/depot_tools build** — heaviest (multi-GB toolchain), explicitly the path
  ADR-0095 wanted to avoid; only if a specific pinned build is required.

What we DID vendor — `system/tools/vendor-chrome-devtools.mjs` — fetches the npm tarball, pins it by its
npm **sha512 integrity** (Law L5 on the one artifact, the MCP-SDK pattern), extracts `front_end/` to
`system/os/usr/lib/holo/devtools/vendor/` (gitignored). This SOURCE tree is exactly what grounds the
transport binding (the embedder seam is read from `Connections.ts`), but it is **not** bootable as-is.

Steps once a BUILT bundle is sourced (A or B):
1. Pin the bundle by content (tarball integrity, or per-file κ for the built file set).
2. The only first-party code is the **adapter** — `holo-devtools-host.mjs` (LANDED): installs
   `globalThis.InspectorFrontendHost`, binds the embedder seam to the cross-frame transport (§1).
3. Register as a holospace app (seal/register/audit), add to `apps/index.jsonld`.
4. On any adapter edit: `holo-shared-ref-witness` → `repin-shared-refs.mjs` → `npm run reseal`
   → `relock-app.mjs holo-devtools` → `npm run gate`.

Bundle weight + the build-vs-Chrome sourcing are named honest costs (§8). The frontend stays
byte-pinned (Law L5: a tampered DevTools asset is refused on read by `holo-fhs-sw.js`).

---

## 6. Staged build + witness plan (one witness per stage, all → green gate)

Each stage adds one `#holo-devtools-*` conformance row (`conformance.jsonld`), registers its
witness in `gate.mjs` LIVE, and emits an `earl:TestResult`. No stage half-lands.

| Stage | Proves | Witness |
|---|---|---|
| **1. Vendor + mount** | `devtools-frontend` loads as a holospace, every asset κ-verifies (no 404, no drift), the panel opens right-docked/full-screen | `holo-devtools-vendor-witness.mjs` |
| **2. CDP transport** | the frontend's `Connection` binds to the cross-frame channel; the CDP handshake (Target/Browser) completes; an event rides a `:delta` frame | `holo-devtools-cdp-witness.mjs` |
| **3. DOM ⇄ scene** | Elements shows the live scene tree; `backendNodeId` ⇄ κ round-trips; a node edit writes through `handle.change` → child κ + `prov:wasDerivedFrom` | `holo-devtools-dom-witness.mjs` |
| **4. Network = κ-stream** | the Network panel lists κ resolves/streams with axis · cache-hit · L5-verify · provenance; a tampered κ shows a red verify badge (Law L5) | `holo-devtools-network-witness.mjs` |
| **5. CSS / Runtime / Console** | Styles resolves `--holo-*` tokens (floor enforced); `Runtime.evaluate` routes through `Q.agent` (governed, receipted), never raw eval | `holo-devtools-runtime-witness.mjs` |
| **6. Memory / Performance / Application** | heap snapshot = the κ store (dedup visible, edges = links); storage shows OPFS/closure/grants/SW | `holo-devtools-store-witness.mjs` |
| **7. Three doors** | the SAME backend answers human-CDP, MCP tools, REST seam, and the Q verb; agent/remote doors are fail-closed (no grant → refused); each admitted op seals a receipt | `holo-devtools-doors-witness.mjs` |
| **8. W3C conformance** | the agent/REST door returns RFC-8785-canonical, `verifyDeep`-able JSON-LD/PROV-O objects with NO CDP leakage; the OpenAPI 3.1 descriptor + NANDA facts re-derive; readability-floor (WCAG) shim-or-exemption is declared (§7 T1/T2) | `holo-devtools-conform-witness.mjs` |

Final: `npm run reseal` + os-closure re-lock (the deferred branch-wide seal batch, gate is
non-idempotent — same discipline as ADR-0091/0094).

---

## 7. Laws & W3C conformance — strict mapping, and the three honest tensions

The brief demands strict conformance to the holospaces Laws and 100% compatibility with W3C's
open-semantic-web vision for agents and humans. This section maps each Law and the relevant
specs, then names the three places where an UNMODIFIED Chrome frontend genuinely strains
conformance — and how each is resolved. Papering over these would be the unsafe move.

**The five Laws (engine ADRs 0001–0021), and how Holo DevTools satisfies each:**

| Law | Canonical statement | How DevTools conforms |
|---|---|---|
| **L1** | identity is content, not location (ADR-001) | every inspected handle (`nodeId`/`objectId`/`scriptId`/`requestId`) is a content-derived alias for a κ — no location, no opaque backend pointer; the vendored frontend bundle is itself addressed by its κ, not its URL |
| **L2** | the one κ primitive (a single canonical content-address form, multi-axis) | DevTools introduces NO new identifier scheme; it reuses `did:holo:sha256:…` ⊕ the BLAKE3 axis, and the Network panel surfaces the axis explicitly |
| **L3** | O(1) replay / instantiate-once (canonical singleton) | the κ-memo IS the DevTools cache — a repeat inspection of an unchanged κ is one `Map.get`; deltas, never whole-tree re-sends; this is the "very fast in any browser" guarantee, derived from the Law, not bolted on |
| **L4** | no parallel infrastructure / mint nothing (anchor, don't mint) | DevTools mints nothing — it returns the substrate's existing scene/source/token/receipt κs; privileged/remote inspection routes through the existing governed door, it does not stand up a new authority or transport |
| **L5** | verify by re-derivation (a tampered byte refused on read) | reads are `resolve` + `verifyDeep`; the Network panel's verify badge IS `verifyDeep` (a tampered κ shows red); the vendored frontend is byte-pinned (SRI) and refused on drift by `holo-fhs-sw.js` |

**W3C / IETF / open-standard surface (the OS's declared stack — [0022](adr/0022-w3c-addressing.md)/[0024](adr/0024-w3c-conformance.md)/[0025](adr/0025-uor-object.md)/[0031](adr/0031-holo-conform.md)):**
every result an agent or Q receives is a self-verifying **JSON-LD / UOR object** (schema.org ⊕
PROV-O ⊕ DID), canonicalized by **RFC 8785 JCS / RDFC-1.0**, addressed by **DID + multihash**,
integrity-checked by **SRI**; witnesses emit **EARL 1.0** `earl:TestResult`; the agent doors are
**MCP** ⊕ **OpenAPI 3.1** (the REST seam) ⊕ **NANDA**/**A2A** discovery; delivery is via the
**Service Worker** content-verify layer; authority is **UCAN**/**ODRL** through the conscience.
DevTools adds nothing to this stack — it is a new *consumer* of it.

**The three tensions, named and resolved:**

- **T1 — CDP is not a W3C standard, and the vendored UI bundle is not a JSON-LD object.** This is
  the sharpest one and the brief's "100% W3C" claim has to be made honestly. **Resolution: CDP is
  the HUMAN door's PRIVATE internal transport only — agents and Q never speak it.** The frontend
  bundle is treated exactly like every other vendored app (Medusa, JupyterLite, the voice model):
  a byte-pinned artifact, addressed by κ (L1) and verified by SRI (L5), not required to *be*
  semantic-web-native any more than a vendored binary is. The OPEN, INTEROPERABLE surface — the
  one that must be 100% W3C — is the **agent/Q doors**, which are MCP + OpenAPI/JSON-LD REST +
  NANDA/A2A, and every object they return is a self-verifying UOR/JSON-LD/PROV-O object. So the
  semantic web sees standards-native doors and self-verifying objects; CDP stays an implementation
  detail behind the human UI. **This makes the agent door, not the CDP path, the conformance
  centre of gravity — build it as a first-class door, not a projection of CDP** (it shares the
  backend, but its contract is the OpenAPI/MCP one, independently witnessed).

- **T2 — accessibility / the readability floor ([0057](adr/0057-holo-ui-conformance.md)), i.e.
  W3C WCAG + WAI-ARIA.** An UNMODIFIED Chrome frontend hardcodes sub-16px fonts and its own
  focus/contrast model, which the `--holo-font-min` conformance witness would flag. **Resolution
  (a decision to ratify):** prefer a **holo-theme token shim at the mount boundary** (inject the
  `--holo-*` tokens + a min-size floor into the frontend's root so the cascade lifts it) where the
  bundle's CSS permits; fall back to the **verbatim-vendor exemption** the same witness already
  grants SDDM/Plymouth reproductions, declared explicitly in the `#holo-devtools-vendor` row.
  Either way the choice is recorded in the witness, not left implicit.

- **T3 — "feature-complete like a browser console" vs the CDP subset.** Resolved in §8: feature-
  complete for the SUBSTRATE's reality (the panels that map to κ), with live V8 step-debugging out
  of phase 1 and Performance showing substrate timings. The claim is "feature-complete for
  inspecting a holospace", not "a bit-exact Chrome clone".

A dedicated witness row — `#holo-devtools-conform` — asserts T1 mechanically: that the agent/REST
door returns RFC-8785-canonical, `verifyDeep`-able JSON-LD objects with no CDP leakage, and that
the OpenAPI descriptor + NANDA facts re-derive. This is the row that backs the "100% W3C" claim.

## 8. Honest costs / non-goals

- **CDP subset, not the whole protocol.** We implement the domains in §2 faithfully; we do NOT
  claim full CDP coverage. Unmapped methods return a clean "unsupported" — the frontend degrades
  gracefully (panels it can't drive stay inert).
- **No live V8 stepping in phase 1.** Sources maps to κ **source objects**, not a real V8
  `Debugger` over the page's running JS (breakpoints/stepping/scope). Holo Build/Lang
  ([0055](adr/0055-holo-build.md)/[0056](adr/0056-holo-lang.md)) already own the editor surface;
  true step-debugging of a holospace's JS is a later, separate stage. The Performance panel
  likewise shows substrate timings (resolve/verify/render), not a V8 sampling profiler.
- **Bundle weight.** `devtools-frontend` is large; vendoring it unmodified accepts that bundle
  cost. We pin the built bundle, not a from-source toolchain.
- **Re-interpretation, not emulation.** Network/Memory/Performance are reframed onto the
  substrate's reality (κ streams, the object store, re-derivation cost). This is the point — a
  familiar UI onto a content-addressed world — but it means the numbers mean substrate things,
  not browser things, and the UI copy should say so.
- **Remote inspection is gated and unlit.** A network transport for cross-device DevTools is the
  real attack surface and is a deliberate opt-in, not opened here (same line as ADR-0090/0091).
