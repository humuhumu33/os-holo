# ADR-076: Holo Heal — the OS heals itself, autonomously, by content

**Status:** LANDED + witnessed. The healer (`os/sbin/holo-heal.mjs`), the autonomous supervisor
(`os/sbin/holo-heal-supervisor.mjs`), the open-web transport (`os/sbin/holo-web.mjs`), the worker
recovery wiring (`os/holo-fhs-sw.js`), and the boot bootstrap (`os/lib/holo-heal-boot.mjs`, loaded by
`os/usr/share/frame/holospace.html`) are implemented. `tools/holo-heal-witness.mjs` proves the heal
contract (recover · refuse · anchor-protected · seed · scrub · receipt · autonomous · evolve) and
`tools/holo-web-witness.mjs` proves open-internet reach + W3C linked-data conformance; `#self-heal`
and `#open-web` are required rows in `os/etc/conformance.jsonld`. Browser-verified in real Chromium
(boot intact; the idle loop runs with no user action; `__holoImport` content-addresses a live web
object that re-derives). **Mints nothing** — it wires recovery onto capability the substrate already
had (the κ-resolver spine `holo-resolver`/`holo-sources`/`holo-peers`, the durable κ-store, the
constitution gate); it adds no new trust.

## Context — a content address is a lie-detector, not a healer

Every byte the OS serves is re-derived against its content address and refused on a mismatch (Law L5).
That detects corruption perfectly — and, before this, did nothing else: a mismatch was a dead end
(HTTP 409 / boot-refused). Knowing a byte is wrong does not hand you the right byte back. Recovery
needs a *second, independent* copy of the correct bytes, and an autonomous loop to fetch it. Neither
existed on the default path; the multi-source resolver was built but unwired.

## Decision

Make the OS keep itself whole, with **no user action**, over the κ-addressed self-verified substrate:

- **Detect** — re-derive every object against its κ (already everywhere).
- **Recover** — `holo-heal` resolves a missing/corrupt κ origin-agnostically: durable on-device
  κ-store → origin → the **open web** (the object's W3C DID Core `alsoKnownAs` HTTPS IRIs + content-
  address gateways) → IPFS (a sha-256 κ *is* a CIDv1 sha2-256) → WebRTC-mesh peers. The **first copy
  that re-derives wins**; a wrong byte from any source is refused. Trust is in the math, not the source.
- **Seed** — every healed byte is persisted to the durable κ-store, so the device becomes its own
  redundancy and a source for peers. "Can recover" → "will recover", with zero infrastructure.
- **Scrub (autonomous)** — `holo-heal-supervisor` re-arms on idle (`requestIdleCallback`), re-verifies
  the whole closure, pre-heals latent corruption before anyone asks, appends a verifiable PROV-O
  receipt per repair to an append-only heal-log, and seals a re-derivable **health attestation** — so
  the OS *proves* its health rather than asserting it.
- **Evolve** — the supervisor learns per-κ flakiness from each sweep's own outcomes and re-sweeps the
  historically-unstable objects first (and, under a heal-budget, more often). The priority signal is
  *repairs* (broke-and-recovered); a *miss* (currently unreachable) is tracked but never escalates, so
  an unresolvable κ can't starve the fixable ones. Plain integer history — no clock, no randomness —
  so the sweep stays deterministic and re-derivation-safe.

## The one boundary — the constitution

Two guarantees keep the autonomous loop from ever breaking the law:

1. **Structural:** the sealed **anchor** — the constitution (`etc/constitution/*`), the conscience-gate
   source (`holo-conscience.js`), and the OS-closure root — is excluded from healing. The loop can
   only ever *restore correct content*; it has no path to alter the law. Healing recovers pinned
   bytes; it never re-seals a pin (re-sealing legitimate drift is a build/operator act).
2. **Behavioral:** the loop acts only *under* a verified law. If the conscience gate reports the
   constitution broken (`sealed() === false`), the OS is already fail-closed, so the loop holds too and
   resumes the instant the law re-verifies.

A broken anchor stays fail-closed and is surfaced to the operator — never auto-rewritten to match
drifted bytes. A healer that could do that is a back-door, not a repair.

## Open internet + open semantic web (W3C)

The internet is a hypergraph: every object is a node addressed by its self-verifying attributes (κ);
an HTTPS IRI, an IPFS CID, a `holo://` alias and a `did:holo` are edges to the same node. `holo-web`
follows any edge and re-derives, so the whole web is one address space; `importObject(κ | https-URL)`
lets agents and humans pull any node into the substrate, verified. Every heal artifact is standards-
native: the receipt and attestation are valid JSON-LD (W3C DID Core + Data Integrity + PROV-O +
schema.org), content-addressed and re-derivable, and every `hosheal:` term is defined in a published
OWL ontology (`usr/share/ns/heal.jsonld`) — mint-nothing, so humans and agents can interpret every heal.

## Consequences

- The OS survives a corrupted/offline origin, cache eviction, and a hostile CDN — silently, offline,
  and as a peer-seed for others. Invisible when healthy; a witnessed attestation when it acts.
- New runtime egress: on the failure path the worker, and on idle the supervisor, may reach IPFS/peers/
  the web. All best-effort, time-boxed, and re-derived — never a trust dependency, never blocking boot.
- The sealed anchor is the single thing the loop will not touch — by design, and by witness.
