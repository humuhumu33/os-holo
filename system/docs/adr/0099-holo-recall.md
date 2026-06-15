# ADR-0099 — Holo Recall: serverless κ-graph retrieval over the private corpus (hybrid + zero-LLM auto-link)

Status: Accepted (2026-06-15) — landed + Node-witnessed 40/40 (`holo-q-recall-witness.mjs`); `#holo-recall` conformance row earl:passed in the gate; shell-wired (wireRecall + index-on-build) + Omni-surfaced (find.html via `window.parent.Q.recall`) + resealed; browser-verified end-to-end on the live OS
Relates: [[holo-q-fuse-adr]] (ADR-0098, synthesis with gap analysis) · [[holo-q-model-registry]] (ADR-0096, the on-device embedder) · [[holo-q-mux-specialists]] (ADR-0091, one door `window.Q`) · [[omni-search-bar]] · [[holo-mind-adr]] (ADR-0081, the orchestrator that learns) · ADR-0038 (Federate · Reciprocal Rank Fusion) · ADR-0046 (Holo Graph · the open-web object graph) · ADR-0040/0041 (Answer/Ask) · ADR-0084 (the mux fabric · κ-memo) · ADR-0033/0083 (conscience) · ADR-0082 (PROV-O receipts)

## Context

The open-web retrieval stack is already excellent and *deterministic, no-AI*: Resolve →
Federate → Answer → Graph (ADRs 0037–0046) fan a query across Wikipedia · Wikidata ·
Crossref · OpenStreetMap, fuse by **Reciprocal Rank Fusion**, reconcile to Wikidata Q-ids,
and seal a re-derivable answer κ. That pipeline answers *"what does the open web know"*.

It does **not** answer *"what do **I** know"* — retrieval over the user's own corpus: their
holospace objects, sealed receipts, notes, memory pages, the durable κ-store. Today recall
over private data is either absent or a single vector lookup. A four-sweep grounding of the
substrate (mirroring the [[holo-q-fuse-adr]] method) found ~85% of a strong private-corpus
retriever already present and unconnected:

- **Vector search exists.** `holo-q-embed.js` (ADR-0096) runs bge-small on-device (WebGPU→WASM
  floor), q8, ORT-in-worker, with a **content-addressed cache** — identical text → its vector in
  O(1), no compute. The semantic leg is built; nothing indexes a corpus with it.
- **Rank fusion exists.** `holo-federate.js` / `holo-search.js` already fuse ranked lists by RRF.
  It is pointed at the open web, never at a local index.
- **Synthesis-with-gaps exists.** `Q.fuse` (ADR-0098) already judges a set of texts for
  *consensus · contradictions · unique insights · blind spots* and synthesizes one answer. A
  recall *answer with citations and an honest "what's missing"* is exactly that judge prompt over
  retrieved chunks instead of panel outputs.
- **The store, the memo, the receipt, the gate exist** — `holo-q-fabric.js` (durable κ-memo),
  `holo-q-receipt.mjs` (Law-L5 re-derivation), `holo-conscience.js` (pre-dispatch verdict).

The benchmark that motivates this comes from a sweep of the SovereignAI stack's *GBrain*
component: hybrid retrieval (vector ⊕ keyword ⊕ RRF) **over a typed knowledge graph that is
built at write-time with zero LLM calls** scored **+31 P@5 over vector-only RAG** on a 240-page
corpus. The graph is the load-bearing part, and it is nearly free: edges are extracted by regex
+ heuristic link-typing on every write, not by a model. On the κ substrate this is not a foreign
idea — it is the ADR-0046 nesting idiom (nesting = links, recursion = verifyDeep) applied to the
*private* corpus instead of the open web.

The two genuinely new things the substrate lacks: a **keyword (BM25) index over the local
corpus**, and a **write-time auto-link typed κ-graph builder**. Everything else is wiring. That
gap is this ADR.

## Decision

Add **`Q.recall`** — one more verb on the single door (ADR-0091) — implemented as a thin
orchestrator over the existing embed, fabric, fusion, and conscience seams. **No new transport,
no new store, no new gate** (Law L4). Two new modules: `q/holo-q-corpus.js` (the index) and
`q/holo-q-recall.js` (the retriever). Private-corpus retrieval is distinct from the open-web
graph (ADR-0046) and never blurs into it — provenance keeps the two universes separate.

### Two ops, every op a κ op

**WRITE — index a corpus object (the cost is paid once, on write):**

```
page κ ─► CHUNK     semantic split → chunks, each its own κ_chunk
          │
          ├─► EMBED   holo-q-embed.autowire().embed(chunk) → vector   (O(1) cache on repeat)
          │
          ├─► POST    BM25 postings (tf over the corpus, idf over the brain) → keyword index
          │
          └─► LINK    AUTO-LINK, zero LLM: regex entity scan + heuristic edge-typing
                      (cites · derived_from · authored_by · mentions · part_of)
                      → typed edges in the κ-graph        edge = {from κ, type, to κ}
          ▼
        SEAL        the corpus index is itself κ-addressed and durable (fabric kstore)
```

**RECALL — answer from the corpus (the read path):**

```
query ─► HYBRID     vector(query) ⊕ BM25(query)  → two ranked lists
          │                                          (semantic + lexical; names/code/exact need BM25)
          ▼
        FUSE        Reciprocal Rank Fusion (REUSE holo-federate RRF) → one fused ranking
          │                                          cross-method agreement ranks, no global weighting
          ▼
        EXPAND      1-hop typed graph walk from the top-k chunks → pulls in linked context
          │                                          (the +31 P@5 step; bounded fan-out, somatic-capped)
          ▼
        SYNTH?      optional: Q.fuse judge/synth prompt over the retrieved chunks
          │         → answer · citations (each a clickable did:holo) · GAP ANALYSIS ("what's missing")
          ▼
        RECEIPT     mint ONE holoq:RecallReceipt
                    prov:used = [κ_chunk…(ranked), κ_edge…(walked)] · prov:generated = κ_answer
```

`HYBRID` and `EXPAND` are deterministic and AI-free; `SYNTH?` is opt-in and is the *only* step
that runs a model. A bare `Q.recall(q)` returns the fused, graph-expanded chunk set (no model,
fully deterministic, re-derivable); `Q.recall(q, { synthesize: true })` adds the answer card.
This mirrors ADR-0040/0041: evidence first, composed answer as an optional layer over it.

### What is reused vs new

| Capability | Status | Where |
|---|---|---|
| On-device embedder + content-addressed vector cache | reuse | `holo-q-embed.js` `autowire`/`embed` |
| Reciprocal Rank Fusion of ranked lists | reuse | `holo-federate.js` / `holo-search.js` |
| Judge/synthesize prompt (→ consensus · gaps) | reuse | `holo-q-fuse.js` `createFuse` |
| Durable κ-memo store + seal-to-κ | reuse | `holo-q-fabric.js` `run`/`index` |
| Receipt canonicalization + Law-L5 re-derivation | reuse | `holo-q-receipt.mjs` `address`/`verifyReceipt` |
| Conscience verdict carried into the receipt | reuse | `holo-conscience.js` `evaluate` |
| Graph-nesting idiom (links + verifyDeep) | reuse (pattern) | ADR-0046 Holo Graph |
| **BM25 keyword index over the local corpus** | **new** | `holo-q-corpus.js` `index`/`bm25` |
| **Write-time auto-link typed κ-graph (zero LLM)** | **new** | `holo-q-corpus.js` `autoLink` |
| **Hybrid retrieve → RRF → 1-hop expand orchestrator** | **new** | `holo-q-recall.js` `recall` |
| **`holoq:RecallReceipt` type + `Q.recall` verb** | **new** | `holo-q-recall.js` · `holo-q.js` |

The host wires which corpus a brain recalls over via `Q.configureRecall({ corpus })` — exactly
as binding a specialist (mux) or a fuse panel is the host's job. With no corpus configured,
`Q.recall` returns an honest notice and never throws, like `Q.ask` / `Q.fuse`.

### Why zero-LLM auto-link is the right call (not a shortcut)

A model-extracted graph would mint a non-re-derivable artifact (the same input could yield
different edges across runs — a Law-L5 violation) and cost a model call per write. Regex +
heuristic typing is **deterministic**: the same page bytes always produce the same edge set, so
the corpus index is itself re-derivable and the graph dedups by content (Law L3). It is also
near-free, which is what lets the graph grow on *every* write without a budget. The ceiling is
recall quality on ambiguous entities — accepted, and exactly where the optional `SYNTH?` model
step earns its keep at read time rather than write time.

### The O(1) story

The embedder cache keys each chunk vector by content; the fabric memo keys each synthesis by
`κ(query ⊕ retrieved-set ⊕ params)`.

- **Re-index an unchanged page** → every chunk vector is a cache hit, BM25 postings are identical,
  the edge set is identical → the corpus κ is unchanged, **zero compute**.
- **Repeat a query against an unchanged corpus** → identical fused ranking; if `synthesize` was
  on, the answer is a κ-memo hit → **zero models run**.
- **Edit one page** → only that page re-chunks/re-embeds/re-links; the rest of the index is
  untouched (the [[holo-q-fuse-adr]] near-repeat property, applied to a corpus).

## Consequences

- **What Q gains:** "search **my** stuff" as a first-class, serverless verb — semantic + lexical +
  graph-expanded retrieval over the private κ-corpus, with an optional cited answer + honest gap
  analysis, all re-derivable from a single `holoq:RecallReceipt`. Directly upgrades the Omni
  search bar ([[omni-search-bar]]) for private results, gives Holo Mind ([[holo-mind-adr]]) a real
  "learn" leg to recall against, and gives the Factory corpus a retrieval surface.
- **Strictly separate from the open web.** ADR-0037–0046 stay the no-AI open-web path; Holo Recall
  is the private-corpus path. A result's provenance always says which universe it came from; they
  never silently merge. (A future verb could *fuse* both rankings — out of scope here.)
- **Honest limits (stated, not hidden):**
  - The auto-link graph trades recall on ambiguous entities for determinism + zero cost. It is not
    an LLM-grade entity resolver; that is the read-time `SYNTH?` step's job, not the index's.
  - The benchmark (+31 P@5) is GBrain's on its corpus, not yet reproduced on a Hologram corpus —
    it motivates the shape, it is not a promise. A witness must measure our own lift.
  - PGLite (GBrain's WASM-Postgres engine) is **not** adopted — the κ-store/fabric is the store
    (Law L4). We borrow the *retrieval model*, not the database.
  - `synthesize: true` runs an on-device model and so inherits Q.fuse's ceiling (lifts above a
    single small model, does not reach frontier). The deterministic `Q.recall` without it has no
    such ceiling.
- **Fold-in #1 — the somatic conscience axis (deferred to the next gate touch).** The SovereignAI
  sweep also surfaced a *somatic* conscience (can the hardware sustain this — memory pressure,
  VRAM budget, timeout pre-flight) alongside the constitutional one we already have (ADR-0033).
  The `EXPAND` fan-out and `SYNTH?` model call are precisely the operations that need a pre-flight
  "will this fit / finish" gate in an in-tab OS under a hard memory ceiling. **Not built here** —
  recorded as the right home for a third conscience axis when `holo-conscience.js` is next opened.
- **Fold-in #2 — ingestion (deferred until needed).** A corpus needs documents in it. `lite-parse`
  (Rust→WASM, PDF/DOCX → layout-preserving JSON, Tesseract-WASM OCR, fully in-browser) is the
  clean serverless ingest primitive, pinnable as a Holo Forge κ-transform (ADR-0051). **Pin it
  only once `Q.recall` has a corpus worth feeding** — not on the critical path for this ADR.
- **Reversible:** `Q.recall` is additive; nothing else changes. Remove the verb + the two modules
  and the door is exactly ADR-0098. Pending follow-ups (not blocking acceptance): a `#holo-recall`
  conformance row + witness measuring our own P@5 lift; shell wiring of `configureRecall` onto the
  warm corpus; the Omni bar surfacing private results behind the open-web ones.
```
