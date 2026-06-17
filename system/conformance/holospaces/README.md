# holospaces conformance (staging)

New `CC-*` rows for the Semantic-Web substrate, authored in the holospaces V&V shape and **staged here for
upstream** to the [holospaces](https://github.com/Hologram-Technologies/holospaces) repo's `vv/`.

holospaces discipline (`vv/README.md`): a component is complete only when its `CC-*` row is **witnessed
against its external authority**; work begins as an **expected-RED target** in `vv/targets/`, is built to
green, then **promoted** to `vv/suites/` with its catalog row (arc42 ch.10) flipped live. A green suite left
in `targets/` is a placement defect. Each row imports its authority verbatim and pinned — never hand-authored.

This stack is implemented in JavaScript (`holo-os/`), so each suite is a `.sh` that runs a Node witness
(`holo-os/system/tools/holo-*-witness.mjs`) — the witness is the behavioral definition. The same witness runs
fast in the HOLOGRAM dev loop; the `.sh` is what `vv/run.sh` invokes once upstreamed.

## Rows

| Row | Status | Suite | External authority |
|---|---|---|---|
| `CC-render` | live (green) | `suites/cc-render.sh` | IANA media types; `schema:encodingFormat`; Law L5 (dispatch is a view over re-derived bytes) |

Planned (subsequent slices, target-first against the official W3C test suites):
`CC-linkeddata` (JSON-LD 1.1 API + RDF 1.1), `CC-sparql` (SPARQL 1.1 / DAWG), `CC-reasoning` (RDF Semantics /
RDFS entailment), `CC-shacl` (SHACL), `CC-owl` (OWL 2 RL), `CC-did` (DID Core), `CC-vc` (VC Data Model 2.0),
plus a `perf-*` row for the render/resolve latency budget (mirrors `vv/suites/perf-throughput.sh`).

## Upstream

Copy `suites/cc-render.sh` → holospaces `vv/suites/`, add the `CC-render` row to the arc42 ch.10 conformance
catalog, and record any imported authority artifact in `vv/PROVENANCE.md`. Adjust `SYSTEM=` path resolution
in the suite to the holospaces layout if the Node witnesses are vendored rather than referenced.
