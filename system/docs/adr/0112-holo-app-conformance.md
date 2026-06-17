# ADR-0112 — Holo App Conformance: every app a self-contained, shareable, provenance-tracked κ-holospace

Status: **Stage 0 LANDED (hermetic harness + the six-property witness + the P4 discovery closure); Stages 1–2 PROPOSED (P6 provenance, P2 egress declaration, hub sealing).** Stage 0 makes the conformance gate reproducible from a clean checkout, adds the fail-closed `#app-conformance` ratchet row that proves all six properties per app over the served corpus, and closes P4 by carrying each app's true root κ in the catalog. Current honest state (41 apps): P1 41/41 · P2 38/41 · P3 40/41 · P4 40/41 · P5 41/41 · **P6 0/41** · fully conformant 0/41 — reported, never faked green (Law L5).

Relates: ADR-0109 (Share carriage — `#wks=` link · Copy · navigator.share · live QR · social preview) · ADR-0105/0106 (Workspace Sync + Session-sovereign capture — the sealer this builds on) · ADR-0082 (Holo Prov — PROV-O `prov:wasDerivedFrom`, out-of-band lineage) · ADR-0111 (Boot Root — the ONE canonical shell + the CSP/clickjacking floor) · ADR-0103 (Onion/Omnisearch — the honest transport split + unified resolver) · `#app-mobile-conformance` (the 'betterer' ratchet template this copies) · the Gateway launcher (`gateway-witness.mjs`).

## Context

The ask: make **every** existing Holo app a self-contained, shareable, provenance-tracked κ-holospace — run in the one shell, serverless, locatable from any storage tier, launchable and shareable from a single κ-address, carrying a κ-addressed provenance chain with per-version creator κ for programmatic royalties. Solve it once at the shell/substrate layer so all current and future apps inherit it.

The honest first-principles read, after a read-only audit of the consolidated tree (`holo-os` + `holo-apps`), is that **most of this already ships** — the work is bundling, not building. Six substrates already exist and are reused verbatim: the canonical shell + CSP floor (ADR-0111), the κ-store service worker (`holo-fhs-sw.js`, re-derives + 409-refuses), the unified honest resolver (`holo-omni.mjs` / `holo-omni-unified.mjs`), the one-door launcher/omnibar/homepage, the Share carriage (ADR-0109), and PROV-O sealing (ADR-0082). No new subsystem is warranted; the gaps are bindings, a metadata field, and an enforcement witness.

But the audit surfaced one blocker that invalidated the whole gate: **the harness was not hermetic.** 63 witnesses hardcoded absolute paths to two standalone checkouts (`Hologram Apps`, `Hologram OS2`) that no longer exist after consolidation. A witness pointed at a missing app dir finds zero apps and passes **vacuously** — silently breaking "can't regress." The conformance gate is meaningless until it is reproducible, so the path fix is Stage 0, step 0 of this ADR.

## Decision

### Stage 0 (LANDED)

**Step 0 — make the harness hermetic.** A new `tools/holo-paths.mjs` resolves the served app repo and OS root from the checkout itself (`import.meta.url`), honoring `HOLO_APPS_DIR` / `HOLO_APPS_REPO` overrides. All **84 LIVE witnesses** the gate re-runs were migrated off the dead absolutes to repo-relative paths; `node tools/gate.mjs` now scans the real 41-app corpus from any clone. (Non-LIVE dev utilities — `gen-apps-catalog.mjs`, `bundle-sdk-shell.mjs`, the `burndown-*` tools, etc. — still carry the old absolutes and are tracked for migration to `holo-paths.mjs`; they are not on the gate path.) This immediately surfaced pre-existing drift the dead paths had masked (e.g. `holo-app-ui-conformance` regressions vs. a baseline sealed against the old corpus) — that is honest signal, not regression introduced here, and is not re-baselined silently.

**The six-property witness + row.** `tools/holo-app-conformance-witness.mjs` asserts, per app, all six properties as a RATCHET (the sibling of `#app-mobile-conformance`): an app may never **lose** a property it satisfied, so the corpus only ratchets up; unmet properties are RED, never faked green. It joins each app's `holospace.lock.json` + authored sources + `holospace.prov.json` to the OS catalog `apps/index.jsonld`, and writes a full per-app matrix to `holo-app-conformance-witness.result.json`. Registered as the fail-closed, required row `#app-conformance` in `os/etc/conformance.jsonld` and added to the gate's LIVE set.

The checks (static evidence, honest):

- **P1 canonical-shell** — an authored `index.html` surface that mounts in the OS frame, shipping **no** forked `shell.html` of its own (the `tauri` native build is the documented exception). 41/41.
- **P2 self-contained + serverless** — a sealed κ-object (`holospace.lock.json` with a `did:holo:sha256` root + non-empty closure) and **no undeclared mandatory backend**: an external `fetch`/`WebSocket` to an http(s) origin with no `holo:egress` declaration is an honest RED. Catches `browser` (ENS → `cloudflare-eth.com`) and `etherscan` (Etherscan/CoinGecko). 38/41.
- **P3 storage-agnostic** — the app is named by a content address (`did:holo:sha256`), so the WHAT is fixed and any tier supplies the WHERE (the honest split of ADR-0103/0105). 40/41.
- **P4 single-address discovery** — the app's TRUE root κ is discoverable from the one door. **Closed in Stage 0:** `apps/index.jsonld` now carries `holo:root = <app content κ>` on every entry with a lock (the additive, non-breaking option; the slug/metadata `@id` is left intact). 40/41 — only `hub` (no lock) remains.
- **P5 share = a link** — the catalog entry carries `schema:name` + `schema:description`, the per-app OG cover + auto-description the ADR-0109 carriage unfurls. 41/41.
- **P6 provenance + royalties** — an out-of-band κ-addressed version chain (`holospace.prov.json`) with a per-version creator κ. **0/41 — the principal remaining gap** (see Stage 1).

### Stage 1 (PROPOSED) — provenance + royalties (P6)

Define and materialize `holospace.prov.json` (out-of-band, so lineage never folds into the κ and κ-memo is preserved, per ADR-0082):

```json
{
  "@context": { "prov": "http://www.w3.org/ns/prov#", "schema": "https://schema.org/", "holo": "https://hologram.os/ns#" },
  "root": "did:holo:sha256:<current app κ>",
  "versions": [
    { "version": 1, "kappa": "did:holo:sha256:<v1 κ>", "creator": "did:holo:<creator identity κ>",
      "prov:wasDerivedFrom": null, "dcterms:created": "<ISO date>", "holo:royalty": { "recipient": "did:holo:<κ>", "share": 1.0 } }
  ]
}
```

The witness already validates this shape (each version must carry a `creator`/`creatorKappa`/`schema:author` that is a `did:holo:` identity). It is **not auto-generated**, because a creator κ must be a real `holo-identity` key (ADR-0094); fabricating one would fake green. Stage 1 wires the Create studio version-history (ADR-0110 `createLiveEditor` Freeze) and the ADR-0082 sealer to emit a real version + creator κ per Freeze, so P6 ratchets up as apps are re-sealed by an identified author.

### Stage 2 (PROPOSED) — close the residue

- **P2 egress declaration.** Add a `holo:egress` field to `holospace.lock.json` (the list of allowed external origins) so network-client apps (`browser`, `etherscan`) declare their opt-in egress and turn green honestly, while undeclared backends stay red.
- **hub** — seal it (`relock`) so it gains a root κ (P2/P3/P4), or document it as a non-app surface and exempt it like `tauri`.
- **Single-κ identity (optional, breaking).** Optionally rewrite catalog `@id` to equal the root κ so an app has exactly one address; deferred because it breaks existing slug links — the additive `holo:root` already makes the true κ discoverable.

## Consequences

- The gate is reproducible from a clean checkout; "can't regress" is now real, not an artifact of which machine ran it.
- Every app is proven across all six properties on every gate run, fail-closed, with an honest per-app matrix — no per-app special-casing; new apps inherit the row automatically.
- The current truth is on the record: 0/41 fully conformant, P6 the dominant gap, P2 honest about two network-client apps. The ratchet guarantees the only direction is up.
