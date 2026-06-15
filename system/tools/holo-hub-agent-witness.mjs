// holo-hub-agent-witness.mjs — proves Holo Hub Stage 6 (ADR-0094): the store's AGENT door, mounted on
// the REAL holo-mcp registry/handle (no new infra, ADR-0093). A person and an agent drive the SAME store:
// products are self-verifying MCP resources (resolve + re-derive, L5); the store verbs are Store-API-shaped
// MCP tools; effectful verbs (own/buy) are EGRESS — discoverable but default-deny (exposure ≠ authorization).

import { hubAgentSurface, STORE_TOOLS } from "../os/usr/lib/holo/holo-hub-agent.mjs";
import { buildAppRegistry, handle } from "../os/usr/lib/holo/mcp/holo-mcp.mjs";
import { verify } from "../os/usr/lib/holo/holo-object.mjs";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {}; let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
const ok = (n, c, x = "") => { (c ? pass++ : fail++); checks[(slug(n) || "check") + "-" + (++kn)] = !!c; console.log((c ? "  ok  " : " FAIL ") + n + (x ? "  — " + x : "")); };

let fetches = 0; globalThis.fetch = () => { fetches++; throw new Error("agent surface must be 0-network"); };

// derive the Hub agent surface from the REAL catalog, mount it on the REAL MCP registry
const index = JSON.parse(readFileSync(join(here, "..", "..", "..", "Hologram Apps", "apps", "index.jsonld"), "utf8"));
const { manifest, resolve, products } = hubAgentSurface({ index });
const registry = buildAppRegistry(manifest);
const ctx = { registry, resolve };
const rpc = (method, params) => handle({ jsonrpc: "2.0", id: 1, method, params }, ctx);

ok("the Hub manifest declares every product as a self-verifying resource (uri = product κ)",
  manifest.resources.length === products.length && manifest.resources.every((r) => r.uri.startsWith("did:holo:sha256:")));

// tools/list exposes the Store-API-shaped store verbs (alongside the universal built-ins)
const tools = (await rpc("tools/list")).result.tools.map((t) => t.name);
ok("MCP tools/list exposes the store verbs (listProducts·searchProducts·getProduct·ownProduct·buyProduct)",
  ["listProducts", "searchProducts", "getProduct", "ownProduct", "buyProduct"].every((t) => tools.includes(t)));
ok("the universal built-in verbs are present too (resolve/verify/run over a product κ)",
  ["resolve_object", "verify_object", "holo_run"].every((t) => tools.includes(t)));

// resources/list has the product κs; resources/read returns a product that RE-DERIVES (L5)
const res = (await rpc("resources/list")).result.resources;
const aKappa = products[0].id;
ok("MCP resources/list includes a product κ", res.some((r) => r.uri === aKappa), aKappa.slice(0, 26) + "…");
const read = await rpc("resources/read", { uri: aKappa });
const obj = JSON.parse(read.result.contents[0].text);
ok("MCP resources/read returns the product as a self-verifying object that re-derives (L5)", obj.id === aKappa && verify(obj));

// EXPOSURE ≠ AUTHORIZATION: read verbs are pure; own/buy are EGRESS (discoverable, default-deny)
const byName = Object.fromEntries(STORE_TOOLS.map((t) => [t.name, t]));
ok("read verbs are pure (listProducts/getProduct are not egress)",
  byName.listProducts["x-holo-exec"] === "read" && byName.getProduct["x-holo-exec"] === "read");
ok("buyProduct is EGRESS — discoverable but default-deny (value moves only through the wallet)",
  byName.buyProduct["x-holo-exec"] === "egress" && byName.ownProduct["x-holo-exec"] === "egress");

// each store tool carries a faithful JSON-Schema (an agent can call it correctly)
ok("store tools are faithfully schema'd (getProduct requires an id; buyProduct takes id+price)",
  byName.getProduct.inputSchema.required.includes("id") && byName.buyProduct.inputSchema.properties.price?.type === "number");

// the surface names the byte-pinned Medusa Store-API contract κ
ok("the agent surface binds the pinned Medusa Store-API κ (the adopted model)",
  manifest["hosc:adoptedModel"] === "did:holo:sha256:40e306a68628bd0e6f51b1dfa9dff9fac18a2db901a41f8f38d8ecf37a97ca78");

ok("0-network: deriving + mounting the agent surface made no fetch", fetches === 0, fetches + " fetches");

const result = { "@type": "earl:TestResult", witnessed: fail === 0,
  subject: "Holo Hub — the agent door (MCP + Store-API-shaped verbs over the real cores, ADR-0094 Stage 6)",
  passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-hub-agent-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
