// holo-import-agent-witness.mjs — proves Holo Import → AGENT-NATIVE (ADR-0093): the moment a GitHub repo
// imports (ADR-0092), it is auto-wired into the seams every holospace ALREADY exposes — the MCP server
// (holo-mcp.mjs) and the unified /~<app>/api REST surface (holo-api-core.mjs) — so an AI agent can list ·
// fetch · re-derive (L5) · run · share · DISCOVER it with ZERO author effort, 100% serverless.
//
// Drives the REAL cores (buildAppRegistry/handle/capabilityCard from holo-mcp.mjs, makeApiServer from
// holo-api-core.mjs, verify from holo-object.mjs) over the manifest+resolver holo-import-agent DERIVES from
// a real import — no re-implementation, so "an agent can drive an imported app" is honest. MOCK GitHub
// fetch (Law L4: the network is an injected ingest boundary); everything else is pure isomorphic logic.

import importer, { importRepo } from "../os/usr/lib/holo/holo-import.mjs";
import { deriveAgentSurface, deriveManifest, agentFacts, appId, createLiveRegistry, detectDeclaredSurface, openapiToTools, swCacheEntries, SW_IMPORTS_CACHE, makeEgressToolHandlers } from "../os/usr/lib/holo/holo-import-agent.mjs";
import { makeGovernedFetch } from "../os/usr/lib/holo/holo-import.mjs";
import { scanPii } from "../os/usr/lib/holo/holo-conscience.js";
import { buildAppRegistry, handle, capabilityCard } from "../os/usr/lib/holo/mcp/holo-mcp.mjs";
import { makeServer as makeCoreServer } from "../os/usr/lib/holo/mcp/holo-mcp-core.mjs";
import { makeApiServer } from "../os/usr/lib/holo/api/holo-api-core.mjs";
import { verify as verifyObject } from "../os/usr/lib/holo/holo-object.mjs";
import { sha256hex } from "../os/usr/lib/holo/holo-blocks-repo.mjs";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
const ok = (n, c, x = "") => { (c ? pass++ : fail++); checks[(slug(n) || "check") + "-" + (++kn)] = !!c; console.log((c ? "  ok  " : " FAIL ") + n + (x ? "  — " + x : "")); };
const rpc = (method, params) => handle({ jsonrpc: "2.0", id: 1, method, params }, ctx);

// ── a real import (mock ingest) → a static/SPA app ────────────────────────────────────────────────
const STATIC = new Map(Object.entries({
  "index.html": { text: '<!doctype html><html><head><link rel="stylesheet" href="style.css"></head><body><h1 id="t">--</h1><script src="app.js"></script></body></html>' },
  "style.css": { text: "h1{color:#6cf}" },
  "app.js": { text: "document.getElementById('t').textContent='live'" },
}));
const fetchRepo = async () => ({ commit: "abc1234def5678abc1234def5678abc1234def56", files: STATIC, entry: "index.html" });
const imp = await importRepo({ input: "https://github.com/octocat/clock", fetchRepo, hash: sha256hex });
ok("a runnable static import to wire", imp.ok && imp.runnable && !!imp.app);

// ── DERIVE the agent surface (the only new work — the endpoints already exist) ─────────────────────
const surf = deriveAgentSurface(imp, { hash: sha256hex });
const registry = buildAppRegistry(surf.manifest);                       // REAL holo-mcp registry
const ctx = { registry, resolve: surf.resolve };                        // ONE resolver, fed to MCP + REST below

// ── 1) MCP: an agent LISTS the imported app, app-scoped ───────────────────────────────────────────
const init = await rpc("initialize");
ok("MCP initialize → an app-scoped server (the imported app's id)", /io\.github\.octocat\.clock/.test(init.result.serverInfo.name), init.result.serverInfo.name);
const res = (await rpc("resources/list")).result.resources;
ok("MCP resources/list includes the imported app's source κ", res.some((r) => r.uri === imp.app.id), imp.app.id.slice(0, 30) + "…");
const tools = (await rpc("tools/list")).result.tools.map((t) => t.name);
ok("MCP tools/list exposes the universal agent verbs over the app", ["resolve_object", "verify_object", "holo_describe", "holo_run", "holo_share"].every((t) => tools.includes(t)));

// ── 2) MCP: FETCH + RE-DERIVE the app (Law L5 — self-verifying, no trusted server) ─────────────────
const read = await rpc("resources/read", { uri: imp.app.id });
const obj = JSON.parse(read.result.contents[0].text);
ok("MCP resources/read returns the app as a self-verifying UOR object", obj.id === imp.app.id);
ok("the resource RE-DERIVES (verify_object, Law L5)", verifyObject(obj) === true);
const vo = await rpc("tools/call", { name: "verify_object", arguments: { object: obj } });
ok("MCP tools/call verify_object → verified true", /"verified":true/.test(vo.result.content[0].text));
const ro = await rpc("tools/call", { name: "resolve_object", arguments: { uri: imp.app.id } });
ok("MCP tools/call resolve_object → the app object", JSON.parse(ro.result.content[0].text).id === imp.app.id);

// ── 3) MCP: the STANDARDIZED capability card describes THIS app (one introspection call) ───────────
const card = JSON.parse((await rpc("tools/call", { name: "holo_describe", arguments: {} })).result.content[0].text);
ok("holo_describe card names the imported app", card["schema:name"] === "clock");
ok("card lists the app source as a subjectOf resource", (card["schema:subjectOf"] || []).some((s) => s["@id"] === imp.app.id));
ok("card advertises the agent verbs as schema:Action", (card["schema:potentialAction"] || []).some((a) => a["schema:name"] === "holo_run"));
ok("the capability card itself self-verifies (Law L5)", verifyObject(card) === true);

// ── 4) REST: the SAME app over /~<id>/api (one resolver, no parallel infra) ─────────────────────────
const api = makeApiServer({ appId: surf.appId, registry, resolve: surf.resolve });
const desc = await api.handle({ method: "GET", path: "/" });
ok("REST GET /~<id>/api → a 200 service descriptor", desc.status === 200);
const get = await api.handle({ method: "GET", path: "/o/" + encodeURIComponent(imp.app.id) });
const body = JSON.parse(get.body);
ok("REST GET /o/<κ> egresses the app object (200)", get.status === 200 && body.id === imp.app.id);
ok("REST stamps x-holo-verify=true (re-derived at the edge, Law L5)", get.headers["x-holo-verify"] === "true");
ok("the SAME resolver serves MCP and REST (no parallel infra)", ctx.resolve === api.opts.resolve);

// ── 5) TAMPER is refused (Law L5), both surfaces ───────────────────────────────────────────────────
const tampered = { ...obj, "schema:text": obj["schema:text"] + "<!--evil-->" };
ok("a tampered app object does NOT re-derive (verify false)", verifyObject(tampered) === false);
const miss = await api.handle({ method: "GET", path: "/o/" + encodeURIComponent("did:holo:sha256:" + "00".repeat(32)) });
ok("REST GET of an unknown κ → 404 (resolves nothing it can't verify)", miss.status === 404);

// ── 6) DISCOVERY: a NANDA AgentFacts record, self-verifying (ADR-0034) ─────────────────────────────
const facts = surf.agentFacts;
ok("AgentFacts record self-verifies (Law L5)", verifyObject(facts) === true);
ok("AgentFacts points at the app's MCP+REST endpoints", facts["nanda:endpoints"].rest === "/~" + surf.appId + "/api" && /\/mcp$/.test(facts["nanda:endpoints"].mcp));
ok("AgentFacts lineage → the app κ (prov:wasDerivedFrom)", facts["prov:wasDerivedFrom"] === imp.app.id);

// ── 7) EXPOSURE ≠ AUTHORIZATION + O(1)/deterministic ───────────────────────────────────────────────
ok("BASELINE auto-grants NO app-specific capability (tools:[] — verbs are universal built-ins)", surf.manifest.tools.length === 0);
const surf2 = deriveAgentSurface(imp, { hash: sha256hex });
ok("the surface is DETERMINISTIC (same manifest resource κ + same AgentFacts κ)", surf2.manifest.resources[0].uri === imp.app.id && surf2.agentFacts.id === facts.id);
ok("re-resolve is O(1) and stable (same κ object)", surf.resolve(imp.app.id).id === imp.app.id);

// ── 8) LIVE AUTO-REGISTRATION — the in-page tier: an imported app (an in-memory κ, NO disk manifest)
//    is registered at runtime and answers MCP + /~<id>/api with no reload, no server. Uses the SAME
//    node-free makeServer (holo-mcp-core, the browser engine) + makeApiServer the shell injects. ─────
const live = createLiveRegistry({ makeServer: makeCoreServer, makeApiServer, hash: sha256hex });
const reg = live.register(imp);                                          // ← what the shell calls on import
ok("live registry lists the imported app (no disk manifest)", live.list().includes(reg.appId) && live.has(reg.appId));
const mounted = live.mount(reg.appId);
const lres = (await mounted.mcp.handle({ jsonrpc: "2.0", id: 1, method: "resources/list" })).result.resources;
ok("LIVE MCP resources/list has the imported app κ (no reload)", lres.some((r) => r.uri === imp.app.id));
const lread = await mounted.mcp.handle({ jsonrpc: "2.0", id: 2, method: "tools/call", params: { name: "resolve_object", arguments: { uri: imp.app.id } } });
ok("LIVE MCP resolve_object → the self-verifying app object", JSON.parse(lread.result.content[0].text).id === imp.app.id);
const lget = await mounted.api.handle({ method: "GET", path: "/o/" + encodeURIComponent(imp.app.id) });
ok("LIVE REST GET /~<id>/api/o/<κ> → 200 + x-holo-verify (no server)", lget.status === 200 && lget.headers["x-holo-verify"] === "true");
ok("LIVE registry shares ONE κ-store resolver across its MCP + REST", live.resolve(imp.app.id).id === imp.app.id);

// ── 9) DECLARED SURFACE — a repo that ships an OpenAPI spec → its operations become app-declared MCP
//    tools, FAITHFULLY (names · descriptions · input schemas), but DISCOVERY ≠ EXECUTION (a backend op
//    needs governed egress; calling it without a wired handler returns an honest error, never a fake). ──
const OPENAPI = JSON.stringify({
  openapi: "3.0.0", info: { title: "Pet API", version: "1.0" }, servers: [{ url: "https://api.example.com/v1" }],
  paths: {
    "/pets": {
      get: { operationId: "listPets", summary: "List all pets", parameters: [{ name: "limit", in: "query", schema: { type: "integer" } }] },
      post: { operationId: "createPet", summary: "Create a pet", requestBody: { required: true, content: { "application/json": { schema: { type: "object", properties: { name: { type: "string" } }, required: ["name"] } } } } },
    },
    "/pets/{id}": { get: { operationId: "getPet", summary: "Get one pet", parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }] } },
  },
});
const STATIC_API = new Map([...STATIC, ["openapi.json", { text: OPENAPI }]]);
const impApi = await importRepo({ input: "https://github.com/petstore/api-ui", fetchRepo: async () => ({ commit: "0".repeat(40), files: STATIC_API, entry: "index.html" }), hash: sha256hex });
const surfApi = deriveAgentSurface(impApi, { hash: sha256hex, files: STATIC_API });
ok("detect OpenAPI JSON → 3 operations projected", surfApi.declared && surfApi.declared.kind === "openapi" && surfApi.declared.tools.length === 3, surfApi.declared && surfApi.declared.tools.map((t) => t.name).join(","));
const tnames = surfApi.manifest.tools.map((t) => t.name);
ok("manifest declares the app's own tools (listPets/createPet/getPet)", ["listPets", "createPet", "getPet"].every((n) => tnames.includes(n)));
const byName = Object.fromEntries(surfApi.manifest.tools.map((t) => [t.name, t]));
ok("input schema is FAITHFUL — query param typed", byName.listPets.inputSchema.properties.limit.type === "integer");
ok("input schema is FAITHFUL — requestBody required as 'body'", (byName.createPet.inputSchema.required || []).includes("body"));
ok("input schema is FAITHFUL — path param required", (byName.getPet.inputSchema.required || []).includes("id"));
ok("each projected tool marks its execution locus (egress, not serverless)", surfApi.manifest.tools.every((t) => t["x-holo-exec"] === "egress"));
// mount over the REAL registry → the agent SEES the app's API
const regApi = buildAppRegistry(surfApi.manifest);
const ctxApi = { registry: regApi, resolve: surfApi.resolve };
const apiTools = (await handle({ jsonrpc: "2.0", id: 1, method: "tools/list" }, ctxApi)).result.tools.map((t) => t.name);
ok("LIVE tools/list exposes the declared ops alongside the built-ins", apiTools.includes("listPets") && apiTools.includes("holo_run"));
const cardApi = JSON.parse((await handle({ jsonrpc: "2.0", id: 2, method: "tools/call", params: { name: "holo_describe", arguments: {} } }, ctxApi)).result.content[0].text);
ok("capability card advertises a declared op as schema:Action", (cardApi["schema:potentialAction"] || []).some((a) => a["schema:name"] === "listPets"));
const callDeclared = await handle({ jsonrpc: "2.0", id: 3, method: "tools/call", params: { name: "createPet", arguments: { body: { name: "Rex" } } } }, ctxApi);
ok("EXPOSURE ≠ AUTHORIZATION — calling an egress op returns an honest error, NOT a fake result", callDeclared.result && callDeclared.result.isError === true, (callDeclared.result && callDeclared.result.content[0].text || "").slice(0, 40));
ok("AgentFacts advertises the declared ops + interface kind", surfApi.agentFacts["nanda:capabilities"].includes("listPets") && surfApi.agentFacts["nanda:declaredInterface"] === "openapi");
ok("BASELINE (no spec) still has NO app-declared tools (no regression)", deriveAgentSurface(imp, { hash: sha256hex }).manifest.tools.length === 0);

// typed-exports detector — a declared interface whose execution is the conscience-gated SANDBOX (staged)
const EXPORTS = new Map([
  ["index.html", { text: "<!doctype html><body>lib</body>" }],
  ["package.json", { text: JSON.stringify({ name: "mylib", main: "lib.js", types: "lib.d.ts" }) }],
  ["lib.js", { text: "export function add(a,b){return a+b}\nexport const VERSION='1';\nexport { add as plus };" }],
  ["lib.d.ts", { text: "export declare function add(a:number,b:number):number;" }],
]);
const dEx = detectDeclaredSurface(EXPORTS);
ok("detect typed exports → descriptive tools (exec = sandbox, staged)", dEx && dEx.kind === "exports" && dEx.tools.some((t) => t.name === "add") && dEx.tools.every((t) => t["x-holo-exec"] === "sandbox"), dEx && dEx.tools.map((t) => t.name).join(","));

// ── 10) SERVERLESS TRANSPORT BRIDGE — the contract the page writes into the SW imports cache so the
//    Service Worker answers /~<id>/mcp + /~<id>/api for an in-memory import (the live HTTP reach is
//    browser-verified; here we pin the entry shape the SW reads — manifest path + κ-keyed objects). ──
const entries = swCacheEntries(surfApi, { base: "/" });
ok("SW imports cache name is stable", SW_IMPORTS_CACHE === "holo-imports-v1");
ok("bridge writes the manifest at the SW's apps/<id>/holospace.json key", entries.some((e) => e.url === "/apps/" + surfApi.appId + "/holospace.json" && JSON.parse(e.body).tools.length === 3));
ok("bridge writes the app source object keyed by its κ hex (resolve hits it)", entries.some((e) => e.url === "/.holo-import/o/" + impApi.app.id.split(":").pop() && JSON.parse(e.body).id === impApi.app.id));
ok("bridge writes the AgentFacts object too (discoverable over the SW)", entries.some((e) => JSON.parse(e.body)["@type"] && String(JSON.parse(e.body)["@type"]).includes("nanda:AgentFacts")));

// ── 11) GOVERNED-EGRESS EXECUTION — declared OpenAPI tools become CALLABLE, conscience-gated ──────────
//    The egress goes through makeGovernedFetch (Law L4): DEFAULT-DENY — refused unless the conscience
//    grants the host; a granted call fills path/query/body from args + seals a re-derivable egress receipt.
let egF = 0;
const egRaw = async (url, init) => { egF++; return { ok: true, status: 200, text: async () => JSON.stringify({ url, method: (init && init.method) || "GET", body: (init && init.body) || null }) }; };
const egConsc = (granted = new Set(["api.example.com"])) => ({ evaluateText: (text, { decision }) => scanPii(text).length ? { outcome: "block", blocked: ["P5"], reason: "PII" } : (granted.has(decision.host) ? { outcome: "accept" } : { outcome: "block", blocked: ["P4"], reason: "host not granted" }) });
egF = 0;
const hGrant = makeEgressToolHandlers({ manifest: surfApi.manifest, governedFetch: makeGovernedFetch({ conscience: egConsc(), fetch: egRaw, hash: sha256hex }), hash: sha256hex });
const callList = await hGrant.listPets({ limit: 5 });
ok("a declared egress tool is now CALLABLE when the host is granted", callList.ok === true && egF === 1 && callList.body.includes("api.example.com"));
ok("query/path are filled from the agent's args (listPets?limit=5)", callList.body.includes("limit=5"));
ok("a granted egress call mints a re-derivable PROV-O egress receipt", /hosc:Egress/.test(JSON.stringify(callList.receipt)) && /^did:holo:sha256:/.test(callList.receipt["prov:generated"] || ""));
ok("path params fill ({id} → /pets/abc)", (await hGrant.getPet({ id: "abc" })).body.includes("/pets/abc"));
ok("a POST egress sends a JSON body", (await hGrant.createPet({ body: { name: "Rex" } })).body.includes("POST"));
egF = 0;
const hDeny = makeEgressToolHandlers({ manifest: surfApi.manifest, governedFetch: makeGovernedFetch({ conscience: egConsc(new Set()), fetch: egRaw, hash: sha256hex }), hash: sha256hex });
const denied = await hDeny.listPets({ limit: 1 });
ok("EXPOSURE ≠ AUTHORIZATION — an UNGRANTED egress is REFUSED, the network is not touched", denied.refused === true && egF === 0, denied.reason);
ok("no egress authority wired → refused (default-deny)", (await makeEgressToolHandlers({ manifest: surfApi.manifest, governedFetch: null }).listPets({})).refused === true);
// the agent drives it over the REAL MCP tools/call via createLiveRegistry(governedFetch)
const liveEg = createLiveRegistry({ makeServer: makeCoreServer, makeApiServer, hash: sha256hex, governedFetch: makeGovernedFetch({ conscience: egConsc(), fetch: egRaw, hash: sha256hex }) });
liveEg.register(impApi, STATIC_API);
const rpcEg = await liveEg.mount(appId(impApi.repo)).mcp.handle({ jsonrpc: "2.0", id: 9, method: "tools/call", params: { name: "listPets", arguments: { limit: 2 } } });
ok("an agent CALLS the egress tool over the REAL MCP tools/call (granted → executes)", !rpcEg.result.isError && /api\.example\.com/.test(rpcEg.result.content[0].text));

const result = { "@type": "earl:TestResult", witnessed: fail === 0,
  subject: "Holo Import → agent-native — an imported GitHub app is instantly MCP + /~<app>/api accessible, self-verifying, serverless (ADR-0093)",
  passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-import-agent-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
