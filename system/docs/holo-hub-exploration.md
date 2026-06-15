# Holo Hub — feasibility note + staged plan (companion to ADR-0094)

This is deliverable 2 (feasibility) and deliverable 3 (staged plan) of the Holo Hub brief.
The decision and the architecture live in [ADR-0094](adr/0094-holo-hub.md). Read that first.

> **Revised** after the operator made **100% serverless · κ-anchored · in-tab · fast in any
> browser** a hard constraint. The earlier off-device-Medusa resolution is superseded: the
> server is **eliminated**, not relocated. The pattern is **adopt Medusa, don't run it**
> ([ADR-0029](adr/0029-adopt-the-desktop.md)).

---

## 1. Feasibility — can the brief's two constraints both hold?

**No — and the evidence is decisive. "Run Medusa verbatim" and "100% serverless in any
browser" are mutually exclusive. Serverless is the constraint kept; we ADOPT Medusa's model.**

### What Medusa is (v2, the current major) — sourced
- **Runtime:** a Node.js HTTP server + **PostgreSQL** (≥15) via **MikroORM**; Redis optional.
- Medusa v2's commerce modules "work independently … within **any Node environment, including
  compatible serverless runtimes**" and can be used inside Next.js without a full backend —
  i.e. **serverless = serverless-Node-with-a-database (Lambda/edge), NOT the browser.**
- MikroORM was chosen partly for a smaller bundle as Medusa moves "toward modern infrastructure
  solutions like serverless and edge runtime" — still server-side Node.
- **SQLite is explicitly "not a priority"**; the new data-access layer is swappable, but that
  is adapter work, and the modules still assume Node APIs.
- **No browser/WASM execution path exists** in Medusa's docs, releases, or discussions.

Sources: [v1→v2 conceptual differences](https://docs.medusajs.com/learn/introduction/from-v1-to-v2),
[Toward Medusa 2.0](https://medusajs.com/blog/toward-medusa-2/),
[Add SQLite support (disc. #4058)](https://github.com/medusajs/medusa/discussions/4058),
[TypeORM→MikroORM (disc. #4431)](https://github.com/medusajs/medusa/discussions/4431).

### Why running Medusa's packages in a tab is rejected
- Postgres + MikroORM + the Node HTTP server expect a Node runtime and a relational DB —
  none present in a browser. Polyfilling Node + running a SQL engine in WASM + MikroORM in the
  browser is unsupported and slow — the opposite of "fast in any browser."
- [0092](adr/0092-holo-import.md): `backend/DB → out-of-scope-v1` ("no server on a serverless
  device to host it"). [0029](adr/0029-adopt-the-desktop.md): never import a foreign runtime as
  the source of truth (Law L4). QEMU-in-tab (a Linux VM hosting Node+Postgres) is rejected too
  (TCG too slow for checkout; guest DB durable only via fragile whole-machine OPFS snapshots).

### The resolution — adopt, don't run (the OS's own pattern)
| Concern | Locus | How |
|---|---|---|
| Medusa **data model** + **Store-API OpenAPI** | **in-tab, byte-pinned κ-object** | the source of truth + drop-in Store-API shape ([0031](adr/0031-holo-conform.md)) |
| Medusa **pure calc fns** (price-list, tax, promotion, cart totals) | **in-tab, Forge-compiled WASM κ-transform** | vendored from upstream, compiled, re-derivable (L5, [0051](adr/0051-holo-forge.md)) |
| Medusa **DI/ORM/HTTP glue** | **in-tab, native κ-transform** | realized natively — the unavoidable new code (the [0029](adr/0029-adopt-the-desktop.md) trade) |
| **Persistence** (was Postgres) | **in-tab κ-store** | content-addressed objects in `holo-store.js` (IndexedDB/OPFS), durable via [0076](adr/0076-holo-heal.md) |
| Catalog feed | **in-tab** (already is) | `apps/index.jsonld`; product = its κ |
| Storefront, render, nesting | **in-tab, sealed κ** | the Hub holospace SPA (twin of Atlas) + Scene ([0089](adr/0089-holo-scene.md)); 0-network |
| Ownership / payment / receipts | **in-tab** | Own Title + Wallet/Plasma + PROV-O — all κ |

**The empirical split (extractable-and-Forge-compilable vs must-be-native) is resolved in
Stage 1 by probing Medusa's actual packages, and surfaced honestly — never faked.**

### Pin discipline
Vendor Medusa at a **pinned commit** (the import receipt pins `git+repo@commit`,
[0092](adr/0092-holo-import.md)). Pin the data model + Store-API OpenAPI as a **κ-object**
([0031](adr/0031-holo-conform.md)): a changed spec → a changed κ → re-witnessed.

---

## 2. Staged plan — each stage independently witnessable

> Per the brief's deliverable 4: **no app code until ADR-0094 is accepted.**

- **Stage 0 — Design (this).** ADR-0094 + this note. *Exit:* accepted.

- **Stage 1 — Adopt + pin Medusa's model (the empirical probe). ✓ DONE.** Vendored Medusa
  **v2.15.5** (`b74b5b19569534412a67835ffae8fb3afbf6f5c5`) under
  `Hologram Apps/apps/hub/vendor/medusa/` (paths preserved upstream), 21 files / 1.5 MB, each
  content-addressed in `medusa-pin.kappa.json`; **L5 re-derive 21/21 ✓**. Store-API contract
  pinned: `www/apps/api-reference/specs/store/openapi.full.yaml`
  (κ `did:holo:sha256:40e306a6…`, OpenAPI 3.0.0, 48 `/store/*` paths). The pure-vs-native split
  was VERIFIED by reading source (`SPLIT.md`): **ADOPT** = the Store-API spec (+ models, Stage 2);
  **COMPILE** = `core/utils/src/totals/**` (the MathBN math engine + tax/promotion/cart totals,
  verified pure — closure = `bignumber.js` + 2 tiny helpers), `pricing/price-list.ts`,
  `promotion/src/utils/compute-actions/**`; **NATIVE** = the `*-module-service.ts` DI/ORM
  glue (verified: `extends MedusaService`, injected `DAL.RepositoryService`, MikroORM models).
  *Witnessed:* model/OpenAPI κ re-derives (21/21); split truthful; commit pinned.

- **Stage 2 — κ-store data layer + catalog as products. ✓ DONE.** `holo-hub.mjs`
  (pure, isomorphic encoder) maps each `apps/index.jsonld` entry → a Medusa **StoreProduct**-shaped
  record wrapped in a self-verifying UOR object (κ = its own content hash), `metadata.holo_app` =
  the app's `did:holo`, bound to the Stage-1 spec κ; `createHubStore`/`mapCatalog` persist them
  over a content-addressed store (the Postgres replacement). Price is honestly UNSET (Stage 3
  supplies it). Witnessed `tools/holo-hub-witness.mjs` **12/12** (→ `holo-hub-witness.result.json`):
  41 apps → 41 products (bijection, no orphan) · each re-derives + round-trips (L5) · product=app
  by κ · faithful StoreProduct shape · deterministic rebuild (L3/L5) · **tamper refused** ·
  adopted-model κ re-hashes to the pinned spec · **0-network**.

- **Stage 3 — Forge-compiled commerce kernel. ✓ DONE (clean core).** `holo-hub-kernel.mjs`
  compiles Medusa's VERBATIM tax+totals math (`totals/math.ts` `MathBN`, `totals/big-number.ts`,
  `totals/tax/index.ts` + the pure `common` helpers + pinned `bignumber.js@9.1.2`) through the
  in-tree Forge esbuild κ-transform (`bundleRepo`, extended with `format:"esm"`) into one
  self-contained 48 KB ESM kernel; minted a Forge PROV-O receipt (κ(source)⊕esbuild⊕flags→κ(kernel)).
  Witnessed `tools/holo-hub-kernel-witness.mjs` **11/11** (→ `holo-hub-kernel-witness.result.json`):
  bundles self-contained · **deterministic** rebuild → identical κ (L5) · **verbatim** (7/7 source
  files re-hash to their pinned κ) · loads + runs — `calculateTaxTotal` 200@10%=20, multi-rate
  400@(8.25+1.75)%=40, tax-exclusive 100→110/100, tax-inclusive 110→110/100, BigNumber 0.1+0.2===0.3 ·
  **0-network** runtime. Forge bundler witness still 12/12 (no regression from the `bundleRepo` edit).
  HONEST scope: this is the clean pure core; the broader totals (cart/line-item/shipping) +
  promotion ACTION-selection pull `@medusajs/framework/utils` + `@mikro-orm/postgresql` (glue) and
  are the next compile sub-stage (surfaced in `vendor/medusa/SPLIT.md`, never faked).

- **Stage 4 — Storefront render. ✓ DONE (verified live).** `Hologram Apps/apps/hub/index.html` —
  a self-contained, sealed in-tab storefront (own Holo-aligned design tokens; no framework, no SSR,
  no shared-ref dependency). Reads `apps/index.jsonld`; renders an editorial **Today** cover (curated
  features) + category sections + **product=app cards** each with a **live κ badge re-derived in-tab**
  via WebCrypto (the in-tab twin of `holo-hub.mjs`); search; one-tap **Open** renders the LIVE app in a
  slide-up viewer (iframe to the app's landing page) — nesting works (Atlas renders inside Hub). An
  **agent door** `window.HoloHub` (`products`/`search`/`open`/`today`) lets an agent drive the SAME
  store. `holospace.json` + `icon.svg` added. Verified live (localhost:8792 + real browser): 41 cards,
  12 categories, 5 curated Today, "41 verified in your tab", 0 console errors,
  `HoloHub.open('org.hologram.HoloAtlas')` → renders `/apps/atlas/index.html` with a verified κ.
  (In-tool screenshot times out — an environmental harness limit shared with Atlas, not a Hub bug;
  proven via accessibility snapshot + interaction + real-browser open. True Hub-in-Hub self-listing
  rides the Stage-6 catalog regen.)

- **Stage 5 — Own + pay (Holo Wallet). ✓ DONE (witnessed + wired).** `holo-hub-checkout.mjs` is
  pure COMPOSITION of the real Holo Own (Titles, [0053](adr/0053-holo-own.md)) + the real Holo Wallet
  rail ([0068](adr/0068-holo-settle-plasma.md)/`holo-own-rail.js`→`holo-wallet-bridge.js`): `publishListing`
  (seller mints a Title over the product κ), `ownFree` (buyer holds a Title), `buyProduct` (settles ONLY
  against the proven listing, then pays the seller through `walletRail` → the running wallet's default-deny
  human-approval gate; value moves ONLY through Holo Wallet, Law L4). Witnessed
  `tools/holo-hub-checkout-witness.mjs` **11/11** (real WebCrypto principals + a real Stage-2 product κ;
  dual-axis sha256-shown/blake3-owned): free own + paid buy, voucher pays the seller, **idempotent voucher
  κ**, **tamper refused** (unproven listing pays nothing, L5), **default-deny** (a wallet decline finalizes
  nothing), no-rail refused, **0-network**. APP WIRED into Holo Wallet: the Hub viewer's action bar
  gives **Get · free** (mints a portable self-sovereign title — a did:key the user holds — over the
  product κ; owned ribbon + persistence) and **Buy license · Holo Wallet** (posts on the SAME
  `BroadcastChannel("holo-wallet")` the OS bridge uses → the real wallet approves a Plasma USD₮ send;
  no wallet ⇒ fails closed). Agent door extended: `HoloHub.own/buy/owned/identity`. Verified live: free
  Get mints a title (owner=me, owned=product κ), owned ribbon shows, buy engages the wallet channel
  (default-deny pending with no wallet open).

- **Stage 6 — Agent surface + gate + self-listing. ✓ DONE.** `holo-hub-agent.mjs` derives the Hub's
  agent door on the REAL holo-mcp core (ADR-0093, no new infra): every product is a self-verifying MCP
  **resource** (uri = product κ; `resources/read` re-derives, L5); the store verbs are **Store-API-shaped
  MCP tools** (`listProducts`/`searchProducts`/`getProduct` READ; `ownProduct`/`buyProduct` EGRESS,
  default-deny — value only through the wallet). Witnessed `tools/holo-hub-agent-witness.mjs` **10/10**
  (tools/list has the store verbs + built-ins · `resources/read` re-derives a product · read-vs-egress
  markers · faithful schemas · binds the pinned Store-API κ · 0-network). **Catalog regenerated** —
  `gen-apps-catalog.mjs` now lists **42 apps including the Hub itself** (`did:holo:slug:org.hologram.HoloHub`),
  so the store appears in the catalog/Atlas and **true Hub-in-Hub** nesting works (verified live: opening
  Hub inside Hub renders `/apps/hub/index.html` recursively). The catalog-reading witnesses still pass at
  42 (Stage 2 12/12, Stage 5 11/11, Stage 6 10/10). **`#holo-hub` gate registered** — 4 required
  conformance rows in `os/etc/conformance.jsonld` (`holo-hub` · `-kernel` · `-checkout` · `-agent`), each
  bound to its witness. *Deferred (maintainer batch, per the 0090–0093 pattern):* the os-closure re-lock
  pinning the new `holo-hub*.mjs` κs, and the broader-totals/promotion compile sub-stage (SPLIT.md).

---

- **Shell integration — ▶ Play launches the Hub. ✓ DONE (verified live).** The shell's **Play**
  verb (`shell.html` `#verb-run`, shared by every holospace tab) now opens the real Holo Hub
  (`openHolospaceApp("org.hologram.HoloHub")`) instead of the old aspirational Atlas-as-"Holo Hub".
  Verified in the booted shell (FHS gateway :8300): Play → a new tab "✦ Holo Hub", address
  `holo://org.hologram.HoloHub`, the store renders in-place (42 cards, Today, "42 verified in your
  tab", self-listed, agent door live), 0 errors. (`shell.html` joins the os-closure re-lock batch.)

- **Sealed into the OS κ-route closure. ✓ DONE.** `tools/seal-hub-closure.mjs` added the 6 Hub
  OS-tree files to `os/etc/os-closure.json` (`_shared/holo-hub{,-kernel,-checkout,-agent}.mjs` +
  `_shared/holo-forge-bundle.mjs` + `shell.html`) → 265 κ-routes, **6/6 re-derive (L5) verified** — each
  resolves by content at `/.holo/sha256/<hex>`. Matches the `seal-login-closure` convention (maintains
  the κ-route map; the OS-image Merkle `root`/`files` recompute is the separate cross-repo full-image
  pipeline — compute-manifest → copy-content from `hologram-os/os` — which the in-place seal tools, by
  design, leave untouched). Remaining full-image batch: the `root` recompute + a Hub-app
  `holospace.lock.json`/`apps[]` κ-entry + the broader-totals compile sub-stage.

## 3. The one-line summary

Holo Hub composes the substrate's already-shipped render · own · pay · discover · nest rails
into a storefront where **a product is a holo app addressed by its κ**, and **adopts Medusa's
commerce model as a byte-pinned κ-spec** (Forge-compiling its pure functions, realizing the rest
natively) so the engine runs **100% serverless, in-tab, fast in any browser** over the κ-store.
No Postgres, no Node, no server — every product, cart, order, and Title is a self-verifying
κ-object re-derived in the tab.
