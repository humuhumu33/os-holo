# ADR-065: Holo Product — the canonical foundation that bundles and balances Holo UI ⊕ Holo UX

**Status:** Accepted — implemented and witnessed (`#holo-product`, `tools/holo-product-witness.mjs`,
18 checks; operative in the build flow). Composes [ADR-030/057 Holo UI](0030-holo-ui.md) (the look) and
[ADR-062 Holo UX](0062-holo-ux.md) (the experience) into one foundation; adds nothing to either —
it *binds* both by content address and adds the delivery method around them.

**Context.** Holo UI and Holo UX each became a canonical, self-verifying source — UI the `--holo-*`
tokens and engine (visual design, colour, type, layout); UX the sealed doctrine (interaction, native
feel, the 13 tenets). They are the two hemispheres of the well-known UX·&·UI diagram: left brain
(experience) and right brain (look). But a *product* is neither half alone — a beautiful thing that
doesn't work, and a working thing that isn't beautiful, both fail. The brief is to give Hologram one
**canonical upstream foundation for building beautiful, valuable and delightful native products**,
that (a) combines and balances the two already-wired faculties, and (b) follows a real delivery
method. Three facts constrain it:

- **Bundle, don't fork (Law L2).** Holo Product must *bind* Holo UI and Holo UX by their content
  address, never restate or re-implement them — change a hemisphere, the bundle changes.
- **Balance is the point.** The two halves are equal partners; the foundation must make that
  checkable, not rhetorical (neither hemisphere may be missing).
- **Mint nothing (ADR-024).** The faculties reuse the existing wiring; the method *cites* the
  field's project-management frameworks (Agile · Scrum · Kanban · Waterfall · Lean · PRINCE2 · Six
  Sigma) rather than inventing one; the vocabulary is OWL/SKOS.

**Decision.** **Holo Product is one content-addressed object — the foundation — that bundles and
balances the UI and UX faculties and binds a hybrid delivery method.**

- **One source (`_shared/holo-product.mjs`).** Pure data: the **ten faculties** of the diagram —
  five UX (interaction design · wireframes & prototypes · information architecture · user research ·
  scenarios) and five UI (visual design · colours · graphic design · layouts · typography) — each
  with its `hemisphere`, the canonical OS artifact that **already wires it** (`realizedBy`), and a
  checkable `obligation`; the **method**; and the materializer for the vocabulary.

- **Balance, made checkable.** Exactly 5 UX + 5 UI faculties; the witness fails if the count is
  uneven, if a faculty lacks an obligation, or if its `realizedBy` artifact is absent — "combine and
  balance the two, every time" becomes the gate, not a slogan.

- **The hybrid method.** The 2026 trend is hybrid — predictive governance with agile execution — and
  Hologram OS already lives one. Six phases, each a checkable obligation citing the frameworks it
  draws from: **Discover** (Lean/Agile — name the value + user in the plain voice), **Define**
  (PRINCE2/Waterfall — an ADR records the decision, structure is content-addressed), **Design**
  (Agile — to *both* doctrines at once), **Build** (Scrum/Kanban/Lean — iterate as re-derivable
  κ-objects within the resource budget), **Verify** (Six Sigma — a witness re-derives it, the gate
  refuses anything unwitnessed), **Deliver & Iterate** (Kanban/Agile — ship a holo://κ, keep flowing
  with no regression). The mapping is literal: an ADR is the PRINCE2 stage, a witness is the Six
  Sigma Control / definition of done, the fail-closed gate is the stage-gate, the budget is the Lean
  discipline, a sealed κ is the Waterfall-predictable artifact.

- **The sealed bundle (`os/etc/holo-product/product.uor.json`).** A UOR envelope (ADR-025) that
  embeds the faculties + method and **Merkle-links BOTH hemispheres** by content address — the
  sealed Holo UX doctrine (`etc/holo-ux/doctrine.uor.json`, which transitively commits to the UX
  sources) and the canonical Holo UI token/engine layer (`holo-theme.{js,css}`, `holo-mobile.css`,
  `holo-phi.css`, `holo-zones.js`, `holo-icons.js`, `holo-ui-kernel.js`). Its `did:holo` re-derives
  and a tampered byte in either hemisphere breaks the address (Law L5). Built by
  `tools/seal-product.mjs`. The dereferenceable vocabulary is `os/usr/share/ns/product.jsonld`
  (mints `hosprod:`; the witness refuses drift).

- **Rests on proven foundations.** `tools/holo-product-witness.mjs` also checks the bundle sits on
  *witnessed* rows — the gate must carry `#holo-ui-conformance`, `#holo-ux`, `#app-ui-wired`,
  `#app-ux-conformance` — so Holo Product is a foundation over faculties that are themselves proven,
  not a new island. Required row `#holo-product`.

- **Operative in the build flow.** A foundation that only sits sealed is inert, so Holo Product
  *shapes how products are made*. The SDK front door (`_shared/holo-sdk.js`) exposes `product()` and
  lists `window.HoloProduct`, so an app or an AGENT reads — at runtime — the faculties it inherits,
  the method it follows, and that the hemispheres are balanced. The scaffolder
  (`_shared/holo-scaffold.js`, behind `create-holospace` + the `apps/sdk` playground) **builds every
  new product ON the foundation**: the manifest declares `builtOn: "holo-product"`, the page declares
  `dcterms:conformsTo` the foundation, the five core modules wire the UI ⊕ UX faculties (Design is
  inherited), and the method is seeded as a `DECISION.md` (Discover · Define · Verify). The witness
  gates this — a new product is *born* on the foundation, not measured against it afterward.

**Consequences.** Hologram now has one canonical upstream foundation a native product binds — "build
something beautiful, valuable and delightful" becomes a foundation you inherit (the balanced
faculties) and a method you follow (decide → design to both doctrines → build → prove → ship), with
the balance and the method gated, not hoped. It composes ADR-030/057/062 and adds zero runtime
framework. Costs: the `hosprod:` vocabulary and the seal step to maintain — **re-run
`seal-product.mjs` after re-sealing the Holo UX doctrine or editing any linked UI file** (the
witness catches a stale link); and the same honest non-coverage of pixel-only surfaces inherited
from the two doctrines.

**External authorities — project management:** Agile; Scrum; Kanban; Waterfall; Lean; PRINCE2; Six
Sigma; Hybrid (cited, not minted). **Semantic web:** OWL 2; RDF Schema 1.1; SKOS Reference; JSON-LD
1.1; PROV-O; schema.org; RFC 8785 (JCS). **Identity & regime:** ADR-024 (conformance gate), ADR-025
(UOR envelope), ADR-030/057 (Holo UI), ADR-062 (Holo UX). UOR-ADDR (κ = H(canonical_form)); verify
by re-derivation (Law L5).
