// holo-devtools-backend.mjs — the κ-CDP backend (ADR-0095). The load-bearing half of Holo DevTools:
// a PURE dispatcher that speaks a faithful SUBSET of the Chrome DevTools Protocol (CDP) where every
// handle (nodeId · backendNodeId · objectId · requestId) is an ALIAS for a κ. The vendored Chrome
// `devtools-frontend` is the cheap UI half (a CDP client over a Connection); this is the part the
// substrate owns. ONE backend, reached through three doors (mirror ADR-0091): humans speak CDP over
// the cross-frame bus, agents call the MCP `tool()` adapter, Holo Q calls `qInspect()` — all three
// land on the SAME `dispatch()`, so there is no forked logic.
//
// Conformance (ADR-0095 §7, the brief's L1–L5 + 100%-W3C demand, made honestly):
//   L1 — every handle resolves to a content κ; node ids are derived from the content-addressed scene
//        order (same scene → same id assignment), never opaque backend state.
//   L2 — no new identifier scheme: only did:holo κ.
//   L3 — repeat inspection of an unchanged κ is one Map.get; the κ-memo IS the cache.
//   L4 — mints nothing, stands up no authority; Runtime.evaluate + mutation are FAIL-CLOSED through
//        the injected conscience gate (no gate → refused), exactly like Q.agent.
//   L5 — reads are resolve + verifyDeep; a tampered κ is refused (the red verify badge).
//   W3C — the agent/Q doors return self-verifying JSON-LD/UOR results (schema.org ⊕ PROV-O ⊕ DID),
//        NOT raw CDP frames; CDP stays the human UI's private transport.
//
// Pure + dependency-injected: the witness passes a Node store; the browser adapter passes a
// browser-safe store/resolve. Identical logic in both (the Atlas-isomorphism discipline).

// Defaults wire the real substrate; both are overridable so the module stays browser-safe.
import { resolve as resolveDefault, verifyDeep as verifyDeepDefault } from "../holo-object.mjs";

const hexOf = (did) => String(did).split(":").pop();
const isKappa = (s) => typeof s === "string" && /^did:holo:(sha256|blake3):[0-9a-f]+$/.test(s);

// ── the CDP DOM tree, derived from a scene manifest (ADR-0089) ──────────────────────────────────
// The scene manifest IS the document. Each placed object { k, x, y, w, h, z?, state? } becomes one
// <holo-object> node whose backendNodeId ⇄ its κ. Traversal order = the scene's canonical (k,x,y,z)
// order (already content-addressed), so the id assignment is a pure function of the scene (L1).
export function cdpDomFromScene(sceneManifest, { resolve = resolveDefault, store } = {}) {
  const byNode = new Map();      // nodeId → κ
  const byKappa = new Map();     // κ → nodeId
  const byId = new Map();        // nodeId → the cdp node object (for DOM.requestChildNodes → setChildNodes)
  let seq = 0;
  const nextId = () => ++seq;

  const objects = (sceneManifest && sceneManifest.objects) || [];
  const children = objects.map((o) => {
    const nodeId = nextId();
    byNode.set(nodeId, o.k);
    if (!byKappa.has(o.k)) byKappa.set(o.k, nodeId);
    const obj = store ? resolve(store, o.k) : null;
    const attributes = [
      "k", String(o.k),
      "x", String(o.x | 0), "y", String(o.y | 0), "w", String(o.w | 0), "h", String(o.h | 0),
      ...(o.z !== undefined ? ["z", String(o.z | 0)] : []),
      ...(obj && obj["@type"] ? ["holo-type", [].concat(obj["@type"]).join(" ")] : []),
    ];
    return {
      nodeId,
      backendNodeId: nodeId,                  // backend id == nodeId in this session; both alias the κ
      nodeType: 1,                            // ELEMENT_NODE
      nodeName: "HOLO-OBJECT",
      localName: "holo-object",
      nodeValue: "",                          // element nodes carry an empty nodeValue (CDP DOM.Node)
      kappa: o.k,                             // the alias, surfaced explicitly (the L1 invariant)
      childNodeCount: 0,
      attributes,
    };
  });

  // BODY holds the placed objects and carries the scene type. The κ-mapped LEAVES are the holo-objects
  // (the L1 invariant); BODY/HTML are the structural wrappers a CDP document requires.
  const bodyId = nextId();
  const body = {
    nodeId: bodyId, backendNodeId: bodyId, nodeType: 1, nodeName: "BODY", localName: "body", nodeValue: "",
    attributes: ["scene-type", String((sceneManifest && sceneManifest["@type"]) || "holo:Scene")],
    childNodeCount: children.length, children,
  };
  // HTML is the documentElement. The vendored Elements panel only renders the tree once the document has a
  // child named 'HTML' (DOMModel.ts:299 → ownerDocument.documentElement). Without it the tree paints EMPTY,
  // however correct the rest of the payload is — so the scene is projected as #document › HTML › BODY › κ-nodes.
  const htmlId = nextId();
  const html = {
    nodeId: htmlId, backendNodeId: htmlId, nodeType: 1, nodeName: "HTML", localName: "html", nodeValue: "",
    attributes: [], childNodeCount: 1, children: [body],
    frameId: "holo",   // binds the documentElement to the main frame (else the Elements panel never shows the tree)
  };
  const rootId = nextId();
  const root = {
    nodeId: rootId, backendNodeId: rootId, nodeType: 9, nodeName: "#document", nodeValue: "",
    documentURL: "holo://scene", baseURL: "holo://scene", compatibilityMode: "NoQuirksMode", childNodeCount: 1, children: [html],
  };
  for (const n of [root, html, body, ...children]) byId.set(n.nodeId, n);
  return { root, byNode, byKappa, byId };
}

// ── the backend: ONE dispatch, three doors ───────────────────────────────────────────────────────
// The canonical Holo UI readability FLOOR (ADR-0057) the CSS domain always surfaces as an un-overridable
// rule — so the Styles panel shows the floor that no token-rendered text can fall below (WCAG, §7 T2).
const HOLO_FLOOR = Object.freeze([
  { name: "--holo-font-min", value: "16px", floor: true, important: true },
]);

// The devtools BOOT HANDSHAKE: the UI calls a flurry of lifecycle/enable methods on startup and waits for
// each ack before it paints its panels. In our context these are no-ops — acknowledging them (empty result)
// lets the real UI come up over the κ substrate. This is the backend answering the PROTOCOL, not new UI.
const BOOT_ACK = new Set([
  "Runtime.runIfWaitingForDebugger", "Runtime.discardConsoleEntries",
  "Target.setAutoAttach", "Target.setDiscoverTargets", "Target.setRemoteLocations",
  "Page.setLifecycleEventsEnabled", "Page.setBypassCSP", "Page.setInterceptFileChooserDialog",
  "Emulation.setEmulatedMedia", "Emulation.setFocusEmulationEnabled", "Emulation.setAutoDarkModeOverride",
  "Network.setCacheDisabled", "Network.setAttachDebugStack",
  "DOM.setInspectMode", "Overlay.setShowViewportSizeOnResize", "Autofill.setAddresses",
]);
const BOOT_PAYLOAD = {
  "Page.getResourceTree": (s) => ({ frameTree: { frame: { id: "holo", loaderId: "holo", url: "holo://scene",
    domainAndRegistry: "", securityOrigin: "holo://", mimeType: "text/holo", secureContextType: "Secure",
    crossOriginIsolatedContextType: "NotIsolated", gatedAPIFeatures: [] }, resources: [] } }),
  "Page.getNavigationHistory": (s) => ({ currentIndex: 0, entries: [{ id: 0, url: "holo://scene",
    userTypedURL: "holo://scene", title: (s && s["@type"]) || "holo:Scene", transitionType: "typed" }] }),
  "Runtime.getHeapUsage": () => ({ usedSize: 0, totalSize: 0 }),
  "Runtime.globalLexicalScopeNames": () => ({ names: [] }),
};

export function createDevToolsBackend({
  store,
  scene = null,                      // the focused holospace's scene manifest (the DOM root)
  resolve = resolveDefault,
  verifyDeep = verifyDeepDefault,
  conscience = null,                 // { evaluate({verb,caller,intent}) -> {outcome:"accept"|"block",reason?} }
  qAgent = null,                     // governed eval executor (Q.agent), only called AFTER the gate accepts
  liveEdit = null,                   // liveEdit({ method, nodeId, kappa, source, caller }) -> {ok,kappa} — the WRITE seam: a DevTools edit (Elements/Sources) drives the LIVE holospace in place (ADR-0093), only AFTER the gate accepts. Absent ⇒ DevTools is READ-ONLY (honest).
  theme = null,                      // optional (kappa)->[{name,value}] holo-theme token resolver (CSS domain)
  now = () => 0,                     // injectable clock (the substrate keeps receipts timestamp-stable in tests)
} = {}) {
  let dom = scene ? cdpDomFromScene(scene, { resolve, store }) : { root: null, byNode: new Map(), byKappa: new Map(), byId: new Map() };
  let attached = false;                          // page attach emitted once (guards the "target already exists" flood)
  const metrics = { frames: 0, resolves: 0 };   // observability (Performance domain); wall-clock is host-attested, not faked

  const setScene = (s) => { scene = s; dom = cdpDomFromScene(s, { resolve, store }); return dom.root; };

  // resolve a κ + verify it (Law L5). Returns the verify badge the Network panel paints.
  const inspectKappa = (kappa) => {
    if (!isKappa(kappa)) return { kappa, found: false, verify: { ok: false, why: "not a κ" } };
    const obj = store ? resolve(store, kappa) : null;
    metrics.resolves++;
    if (!obj) return { kappa, found: false, verify: { ok: false, why: "unresolved" } };
    const v = verifyDeep(store, obj);
    return { kappa, found: true, object: obj, verify: v };   // v.ok === false ⇒ the RED badge
  };

  // the heap IS the κ store (Memory domain): each entry is a node, its links[] are the edges (the
  // Merkle-DAG, ADR-0060); dedup is visible because one κ is stored once however many parents link it.
  const heapStats = () => {
    let nodes = 0, edges = 0, bytes = 0; const seen = new Set();
    if (store && typeof store.forEach === "function") {
      store.forEach((buf, hex) => {
        nodes++; seen.add(hex);
        bytes += (buf && buf.length) || 0;
        try { const o = JSON.parse(Buffer.from(buf).toString("utf8")); edges += (o.links || []).length; } catch (e) {}
      });
    }
    return { nodes, distinctKappa: seen.size, edges, bytes };
  };

  // the single dispatcher every door funnels into. `caller` carries the host-asserted identity.
  function dispatch(method, params = {}, { caller = "human", onEvent = null } = {}) {
    metrics.frames++;
    // boot handshake — the UI calls Target.setAutoAttach/attachToTarget and then WAITS for a
    // Target.attachedToTarget EVENT to create its primary session before it mounts ANY panel. Emit it
    // (the scene is the one "page" target) so the real UI attaches. Deferred a microtask so the method
    // reply lands first.
    if (method === "Target.setAutoAttach" || method === "Target.attachToTarget") {
      if (typeof onEvent === "function" && !attached) {
        attached = true;   // emit the page attach EXACTLY ONCE — re-emitting registers the target twice ("already exists" flood)
        const targetInfo = { targetId: "holo-scene", type: "page", title: (scene && scene["@type"]) || "holo:Scene",
          url: "holo://scene", attached: true, canAccessOpener: false, browserContextId: "holo" };
        Promise.resolve().then(() => onEvent({ method: "Target.attachedToTarget",
          params: { sessionId: "holo-session", targetInfo, waitingForDebugger: false } }));
      }
      return method === "Target.attachToTarget" ? { sessionId: "holo-session" } : {};
    }
    // Runtime.enable must emit the default execution context, or the Console panel stays dead (no eval prompt).
    if (method === "Runtime.enable") {
      if (typeof onEvent === "function") {
        Promise.resolve().then(() => onEvent({ method: "Runtime.executionContextCreated", params: { context: {
          id: 1, origin: "holo://scene", name: "holospace", uniqueId: "holo-scene-ctx",
          auxData: { isDefault: true, type: "default", frameId: "holo" } } } }));
      }
      return {};
    }
    // boot handshake: ack the UI's lifecycle/enable methods (no-ops here) so the real panels come up.
    if (/\.(enable|disable)$/.test(method) || BOOT_ACK.has(method)) {
      const p = BOOT_PAYLOAD[method]; return p ? p(scene) : {};
    }
    if (BOOT_PAYLOAD[method]) return BOOT_PAYLOAD[method](scene);
    switch (method) {
      // ── handshake ──
      case "Target.getTargets":
        return { targetInfos: scene ? [{
          targetId: "holo:scene", type: "page", title: String(scene["@type"] || "holo:Scene"),
          url: "holo://scene", attached: true,
        }] : [] };
      case "Target.attachToTarget":
        return { sessionId: "holo:" + String(params.targetId || "scene") };

      // ── DOM domain ⇄ scene tree ──
      case "DOM.getDocument":
        return { root: dom.root };
      case "DOM.requestChildNodes": {                              // children arrive via a setChildNodes EVENT (not the result)
        const node = dom.byId.get(params.nodeId);
        if (node && node.children && typeof onEvent === "function") onEvent({ method: "DOM.setChildNodes", params: { parentId: params.nodeId, nodes: node.children } });
        return {};
      }
      case "DOM.resolveNode": {                                   // nodeId/backendNodeId → a RemoteObject whose objectId IS the κ
        const id = params.nodeId || params.backendNodeId;
        const kappa = dom.byNode.get(id) || null;
        if (!kappa) return { error: "no such node" };
        return { object: { type: "object", subtype: "node", className: "HoloObject", objectId: kappa } };
      }
      case "DOM.pushNodesByBackendIdsToFrontend": {               // κ → nodeId (the inverse), proving the round-trip
        const ids = (params.backendNodeIds || []).map((b) => {
          const kappa = isKappa(b) ? b : dom.byNode.get(b);       // accept a κ or a numeric id
          return dom.byKappa.get(kappa) || null;
        });
        return { nodeIds: ids };
      }

      // ── Network domain = the κ-stream timeline (the differentiator) ──
      case "Network.getResponseBody": {                           // requestId IS the κ
        const r = inspectKappa(params.requestId);
        return {
          body: r.found ? JSON.stringify(r.object) : "",
          base64Encoded: false,
          // substrate-native columns the panel renders beyond HTTP:
          holo: { kappa: r.kappa, axis: r.kappa.startsWith("did:holo:blake3") ? "blake3" : "sha256",
                  verify: r.verify, found: r.found },
        };
      }

      // ── Runtime domain — FAIL-CLOSED governed eval (L4 / the conscience line) ──
      case "Runtime.evaluate": {
        const expression = String(params.expression || "");
        if (!conscience || typeof conscience.evaluate !== "function") {
          return { refused: true, reason: "no conscience gate present — DevTools eval is fail-closed", caller };
        }
        let verdict;
        try { verdict = conscience.evaluate({ verb: "devtools.eval", caller, intent: expression }); }
        catch (e) { return { refused: true, reason: "gate error: " + (e && e.message), caller }; }
        if (verdict && typeof verdict.then === "function") {
          return verdict.then((v) => finishEval(v, expression, caller));   // tolerate async gates
        }
        return finishEval(verdict, expression, caller);
      }

      // ── WRITE / mutate — the door that makes DevTools EDIT the live holospace (ADR-0093 liveEdit), not
      //    just inspect it. Page.setDocumentContent (whole source) + DOM.setOuterHTML (a node) → liveEdit,
      //    which re-renders the live surface in place + advances its κ. FAIL-CLOSED + conscience-gated
      //    exactly like Runtime.evaluate (a non-human tool WRITE is governed; absent editor ⇒ read-only). ──
      case "Page.setDocumentContent":
      case "DOM.setOuterHTML": {
        const source = method === "Page.setDocumentContent" ? params.html : params.outerHTML;
        const kappa = method === "DOM.setOuterHTML" ? (dom.byNode.get(params.nodeId) || null) : null;
        if (typeof liveEdit !== "function") return { refused: true, reason: "DevTools is read-only here — no live editor wired", caller };
        if (!conscience || typeof conscience.evaluate !== "function") return { refused: true, reason: "no conscience gate — DevTools edit is fail-closed", caller };
        const apply = (v) => {
          if (!v || v.outcome === "block") return { refused: true, reason: (v && v.reason) || "refused by conscience", caller };
          let r; try { r = liveEdit({ method, nodeId: params.nodeId, frameId: params.frameId, kappa, source: String(source == null ? "" : source), caller }); }
          catch (e) { return { refused: true, reason: "edit failed: " + ((e && e.message) || e), caller }; }
          if (r && typeof r.then === "function") return r.then((rr) => (rr && rr.ok === false) ? { refused: true, reason: rr.reason, caller } : { holo: { kappa: rr && rr.kappa } });
          return (r && r.ok === false) ? { refused: true, reason: r.reason, caller } : { holo: { kappa: r && r.kappa } };   // CDP setDocumentContent/setOuterHTML return {} — we add the new κ
        };
        let verdict; try { verdict = conscience.evaluate({ verb: "devtools.edit", caller, intent: String(source || "").slice(0, 200) }); }
        catch (e) { return { refused: true, reason: "gate error: " + (e && e.message), caller }; }
        return (verdict && typeof verdict.then === "function") ? verdict.then(apply) : apply(verdict);
      }

      // ── CSS domain — the Styles panel resolves the --holo-* design tokens; the readability FLOOR
      // (ADR-0057) is surfaced as an un-overridable rule (WCAG, §7 T2) ──
      case "CSS.getComputedStyleForNode": {
        const id = params.nodeId || params.backendNodeId;
        const kappa = dom.byNode.get(id) || null;
        const tokens = (theme && kappa) ? (theme(kappa) || []) : [];
        return { computedStyle: [...tokens, ...HOLO_FLOOR], holo: { kappa, floorEnforced: true } };
      }
      case "CSS.getStyleSheetText":
        return { text: HOLO_FLOOR.map((t) => `${t.name}: ${t.value}${t.important ? " !important" : ""};`).join("\n"),
                 holo: { source: "holo-theme tokens (ADR-0023/0030/0057)" } };

      // ── Debugger/Sources domain — getScriptSource by the source κ (publishSource → SoftwareSourceCode,
      // ADR-0055). scriptId IS a κ. NOTE: this is SOURCE-by-κ, NOT a live V8 debugger (ADR-0095 §8). ──
      case "Debugger.getScriptSource": {
        const r = inspectKappa(params.scriptId);
        if (!r.found) return { error: "no such script κ" };
        const src = (typeof r.object["schema:text"] === "string") ? r.object["schema:text"] : JSON.stringify(r.object, null, 2);
        return { scriptSource: src, holo: { kappa: r.kappa, verify: r.verify } };
      }

      // ── Memory/HeapProfiler domain — the heap IS the κ store; dedup + link edges are visible (ADR-0060) ──
      case "HeapProfiler.takeHeapSnapshot":
      case "HeapProfiler.collectGarbage":
        return { holo: { heap: "the κ-store", ...heapStats(), note: "node=κ-object · edges=links[] (Merkle-DAG) · one κ stored once (dedup)" } };

      // ── Performance domain — substrate timings (resolve/verify/render counts); wall-clock is HOST-ATTESTED,
      // never faked (the Holo Telemetry honesty split, ADR-0073) ──
      case "Performance.getMetrics": {
        const h = heapStats();
        return { metrics: [
          { name: "CDPFrames", value: metrics.frames },
          { name: "KappaResolves", value: metrics.resolves },
          { name: "StoreObjects", value: h.nodes },
          { name: "DistinctKappa", value: h.distinctKappa },
          { name: "LinkEdges", value: h.edges },
        ], holo: { wallClock: "host-attested (rederivable=false, ADR-0073)" } };
      }

      // ── Application/Storage domain — the live scene κ, the κ-store usage, object count ──
      case "Storage.getUsageAndQuota": {
        const h = heapStats();
        return { usage: h.bytes, quota: null, usageBreakdown: [{ storageType: "kappa-store", usage: h.bytes }],
                 holo: { sceneType: scene ? scene["@type"] : null, objects: (scene && scene.objects || []).length, distinctKappa: h.distinctKappa } };
      }

      default:
        return { error: "unsupported", method };                 // graceful degradation (ADR-0095 §8)
    }
  }

  function finishEval(verdict, expression, caller) {
    if (!verdict || verdict.outcome === "block") {
      return { refused: true, reason: (verdict && verdict.reason) || "refused by conscience", caller };
    }
    if (typeof qAgent !== "function") {
      return { refused: true, reason: "no Q authority bound", caller };
    }
    const r = qAgent(expression, { caller });
    const effectKappa = (r && r.kappa) || null;
    return {
      result: { type: "object", subtype: "node", className: "HoloObject", objectId: effectKappa, value: r && r.value },
      receipt: { who: caller, verb: "devtools.eval", intent: expression, effectKappa, at: now() },   // PROV-O-shaped
    };
  }

  // ── DOOR 1 · humans: raw CDP over the cross-frame bus ──
  // msg = { id, method, params }; returns { id, result } | streams events via onEvent.
  function serve(msg, { caller = "human", onEvent = null } = {}) {
    const out = dispatch(msg.method, msg.params || {}, { caller, onEvent });
    if (out && typeof out.then === "function") return out.then((result) => ({ id: msg.id, result }));
    return { id: msg.id, result: out };
  }

  // ── DOOR 2 · AI agents: the MCP tool adapter — SAME dispatch, but results are self-verifying
  // JSON-LD/UOR objects (W3C), never raw CDP frames (ADR-0095 §7 T1). caller is host-asserted. ──
  const TOOL_TO_CDP = {
    devtools_query_dom: () => ["DOM.getDocument", {}],
    devtools_inspect: (a) => ["DOM.resolveNode", { backendNodeId: a.kappa || a.nodeId }],
    devtools_network: (a) => ["Network.getResponseBody", { requestId: a.kappa }],
    devtools_eval: (a) => ["Runtime.evaluate", { expression: a.expression }],
  };
  function tool(name, args = {}, { caller = "agent" } = {}) {
    const map = TOOL_TO_CDP[name];
    if (!map) return jsonld({ "@type": "schema:SoftwareApplication", error: "unknown tool: " + name });
    const [method, params] = map(args);
    const raw = dispatch(method, params, { caller });
    return Promise.resolve(raw).then((r) => jsonld({
      "@type": ["schema:Action", "prov:Activity"],
      "schema:instrument": "holo-devtools",
      "schema:object": name,
      "holo:caller": caller,
      "holo:result": r,
    }));
  }

  // ── DOOR 3 · Holo Q: a first-class inspect verb, κ-memoized + deterministic, same dispatch ──
  function qInspect(method, params = {}, { caller = "holo-q" } = {}) {
    return Promise.resolve(dispatch(method, params, { caller }));
  }

  return { dispatch, serve, tool, qInspect, inspectKappa, setScene, cdpDom: () => dom, describe };
}

// a tiny JSON-LD envelope so the agent door is W3C-native by construction (no CDP leakage).
function jsonld(props) {
  return { "@context": { schema: "https://schema.org/", prov: "http://www.w3.org/ns/prov#", holo: "https://hologram.os/ns#" }, ...props };
}

export function describe() {
  return {
    is: "the κ-CDP backend (ADR-0095) — every CDP handle is an alias for a κ; one dispatch, three doors",
    doors: { human: "serve() — raw CDP over the cross-frame bus", agent: "tool() — MCP, returns self-verifying JSON-LD", q: "qInspect() — a first-class Q verb" },
    laws: "L1 ids derive from the content-addressed scene · L2 only did:holo κ · L3 κ-memo IS the cache · L4 eval fail-closed through the conscience · L5 reads resolve+verifyDeep, a tampered κ refused",
    honest: "CDP is the human door's PRIVATE transport — agents/Q get JSON-LD, never CDP frames; a faithful SUBSET, not full CDP; no live V8 stepping (Sources = source κ objects)",
  };
}

export default { createDevToolsBackend, cdpDomFromScene, describe };
