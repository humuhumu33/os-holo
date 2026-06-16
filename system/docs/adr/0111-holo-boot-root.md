# ADR-0111 — Holo Boot Root: root the boot sequence in the substrate from byte 0

Status: **Stage 0 LANDED (the security floor); Stages 1–3 PROPOSED (design).** Stage 0 — a substrate-wide clickjacking floor (`frame-ancestors 'self'` + `X-Frame-Options: SAMEORIGIN` stamped on every κ-served byte via the one `COI` chokepoint in `holo-fhs-sw.js`), a cold-entry CSP meta (`object-src 'none'; base-uri 'self'; form-action 'self'`), and a strict, **hash-based** CSP served `Content-Security-Policy-Report-Only` for the boot screens (new `tools/csp-hashes.mjs` → `os/etc/boot-csp.json` → the SW `finalize` path). Resealed; gateway witness 3/4 (the one fail is `playwright not installed`, pre-existing/environmental). Stages 1–3 are design-only here because they restructure a κ-pinned boot loader and cannot be browser-verified in the build harness (the heavy shell renderer is unresponsive to the preview tools); they ship behind the existing fail-closed gates.

Relates: ADR-0026 (sovereign delivery — the OS serves itself by hash; one OS root κ · multi-source κ SW) · ADR-0027 (survive the switch — total-offline precache + same-origin mesh) · ADR-0033 (the fail-closed Constitution boot gate) · the Stage 0 hardening recorded in the `holo-boot-hardening-csp` working note.

## Context

The ask: make the boot sequence **more performant and more secure**, and "100% rooted in the substrate from the very start."

The honest first-principles read is that "rooted from byte 0" is **already true on every visit except the genuinely-cold first one** — and that one is irreducible. Once the κ Service Worker is active it intercepts the root navigation (`holo-fhs-sw.js`: `/` → `index.html` → look up the pinned κ → re-derive the bytes → refuse a mismatch, Law L5), so the very first byte of the document is substrate-verified. But the **cold first byte** arrives over TLS from an origin *before any of our code exists*. The current self-certification (`index.html`, the `SELF-CERTIFICATION (Law L5)` block) tries to close this by re-fetching its own bytes and comparing them to a κ pinned *inside the same page* — which is circular: a malicious origin ships a tampered page with a matching tampered pin. **No logic carried by the first byte can verify the first byte.**

So the target is not "make the cold byte self-root" (impossible in a browser tab). It is a **tiered root of trust**:

- **Tier 0 — cold first visit.** Origin/TLS is the trust anchor. Minimize the surface, anchor it externally, and never claim more than this.
- **Tier 1 — SW active / installed PWA.** The SW is the root: it serves and re-derives the entry from κ, so byte 0 comes from the substrate.

Three decisions below move as much of the experience as possible from Tier 0 to Tier 1, and one (Stage 0, landed) hardens what must stay at Tier 0.

## Decision

### Stage 0 (LANDED) — the security floor

A strict CSP is the highest-ROI hardening and was entirely absent from the boot chain. Two constraints shaped it, both load-bearing:

- **Nonces are out.** The SW serves *fixed, κ-pinned* bytes (Law L5). A per-response nonce would change those bytes and break the pin. The only CSP that composes with content addressing is **hash-based** — and the CSP hash of an inline block *is* a content address of that block. The same idea, twice.
- **Report-Only and `frame-ancestors` are header-only** (ignored in `<meta>`). So the clickjacking floor and the strict observe-mode policy must come from the SW; the cold entry (served by a dumb static host) can carry only the meta-effective directives.

Landed: the `COI` bundle now stamps `frame-ancestors 'self'` + `X-Frame-Options: SAMEORIGIN` on every κ-served byte (`'self'` keeps shell→holospace iframes working while denying foreign framing); the cold entry carries `object-src 'none'; base-uri 'self'; form-action 'self'` (`base-uri 'self'` is the load-bearing one — it denies a `<base>` injection that would silently re-root the entire relative-path boot chain); and `tools/csp-hashes.mjs` derives a full per-page policy (`default-src 'self'` + inline hashes) for `splash.html` and `login.html`, served Report-Only so it observes without ever blocking.

### Stage 1 (PROPOSED) — the minimal cold seed

Today's `index.html` is ~1.6k lines of inline CSS/JS: a large, render-blocking first byte whose *entire* trust surface is the gateway UI. Shrink the cold entry to a **trampoline** whose only jobs are: set the CSP meta, register the SW, and hand off. Everything rich (the gateway face, the search, the cloud field) becomes a **κ-served, pinned page** the SW delivers and re-derives.

Wins: the unverifiable cold byte becomes small enough to audit by eye; the gateway UI moves behind substrate verification (Tier 1); and first paint stops blocking on the full inline payload.

The load-bearing requirement: the page the seed hands off to **must be pinned** (in `os-closure.json`, or an equivalent closure for the gateway path) so the SW re-derives it. An unpinned page is served by the SW but *not* L5-verified, which would defeat the purpose. This is the same requirement that gates Stage 2 and resolves Stage 3.

### Stage 2 (PROPOSED) — the installed PWA is the verified byte-0 path

The manifest already declares `scope: "/"`, `start_url: "/"`, `display: fullscreen`, `launch_handler: navigate-existing`. The blessing makes the *installed launch* land on a substrate-verified byte:

1. Ensure the SW scope **covers `start_url`**. On the canonical root deploy (OS root === origin) the SW at `/` already controls `/`. On a host that serves the OS under a subtree, this needs `Service-Worker-Allowed: /` (already used for the `/webview/` worker) or the seed served at the root.
2. **Pin the `start_url` page** (Stage 1's requirement) so the controlled launch is re-derived, not merely served.

With both, an installed launch is byte-0 from the substrate (Tier 1). This is the strongest available answer to "rooted from the very start": for any user who has been here before, the first byte comes from the SW, not the network. The cold first visit remains the single origin-trusted moment, stated plainly rather than papered over.

### Stage 3 (PROPOSED) — self-cert perf, as a consequence not a standalone change

The self-cert re-fetches the whole document (`fetch(location.href, { cache: "no-store" })`) on every load, gating "Power up". The tempting optimization — skip it when `navigator.serviceWorker.controller` is present — is **unsafe today**: the cold `index.html` is *not* in any closure, so even when SW-controlled it is served unpinned and un-re-derived; the in-page self-cert is the only verification of record there, and skipping it removes verification. The re-fetch becomes *genuinely* redundant — and therefore safely skippable — only **after** Stage 1+2 pin the entry and put it under SW control, at which point the SW's inbound L5 already proves the bytes (and the footer κ can be read from the SW's response or cached in `sessionStorage` for display). So the perf gate is a downstream consequence of the seed split, not an independent edit.

### Stage 4 (PROPOSED) — service-worker topology: keep the separation, prune the dead

Investigation of all five workers shows they are **purpose-separated, not redundant**, and consolidation is largely unwarranted:

| Worker | Purpose | Scope | When |
|---|---|---|---|
| `holo-fhs-sw.js` | content-addressed delivery (L5 on every byte) | OS root | **default** boot path |
| `holo-boot-sw.js` | sovereign multi-source delivery (cache→peers/IPFS/mesh→origin) | OS root | **only** under `?sovereign=1` / `holoSovereign` |
| `holo-sw.js` | legacy A29 per-app delivery | per-app | superseded; **no live `register()` site anywhere — confirmed dead** |
| `browser-sw.js` | Holo Browser web proxy (mints live web to κ) | `/webview/` | on browser-tab open |
| `coi-serviceworker.min.js` | COOP/COEP header shim | boot dir | `boot/index.html` |

The apparent `fhs` vs `boot-sw` "race" is a non-issue: `holospace.html` registers `holo-fhs-sw` only when `!sovereign`, and `holo-boot-sw` registers only under the sovereign flag — they are **mutually exclusive**, never both active in one session. `browser-sw` lives at a disjoint `/webview/` scope and must stay separate (different job). The only genuine cleanup candidates are narrow: **retire `holo-sw.js`** (confirmed — no `register()` site anywhere in the tree; removal still needs an os-closure + `holo-fhs-map.mjs` edit and a real-browser boot check), and **fold `coi-serviceworker.min.js`** into the boot path if `holo-boot-sw` already stamps the COI headers it provides. Neither is a merge of the delivery workers; the topology is correct as designed.

## Honest boundaries

- **Byte 0 on a cold first visit cannot be substrate-rooted inside a browser tab.** That byte is fetched over TLS from an origin before any code runs. The maximum achievable is minimal + externally-anchored + SW-rooted from navigation #2; the installed PWA is how "the very first byte" comes from the substrate for a returning user. Claiming literal 100% on a cold first visit would be the faked feasibility Law L5 forbids.
- **Stages 1–4 cannot be browser-verified in this harness** (the shell renderer is unresponsive to the preview tools, and the cold entry needs http). They are validated by `node --check`, the witnesses, `reseal-drift --check`, and Node simulation of the SW logic — then must pass a real-browser check before any Report-Only CSP is promoted to enforcing and before a boot-loader's bytes change.
- **Stage 0's strict CSP is Report-Only** until that browser pass shows zero violations. `login.html` carries 3 inline `style=""` attributes that block strict `style-src` *enforcement* (Report-Only is unaffected); `boot-csp.json` is currently unpinned (harmless while Report-Only, but **must be pinned before promotion to enforcing**, via `compute-manifest`/`seal-hub` — `reseal-drift` cannot add new keys).

## Staged plan

- **Stage 0 (LANDED).** CSP floor + clickjacking headers + Report-Only strict CSP for the boot screens. Witnessed via the gateway witness + Node simulation; resealed.
- **Stage 1.** Minimal cold seed + κ-served, pinned gateway page. Requires a closure pin for the gateway path; reseal + (if the seed becomes a boot loader) `repin-boot-loaders`.
- **Stage 2.** SW scope covers `start_url` + pinned entry → installed launch is verified byte 0. Browser-verify install + launch.
- **Stage 3.** Cold-only self-cert gate, valid once Stage 1+2 land; preserve the footer κ via the SW response or `sessionStorage`.
- **Stage 4.** Confirm `holo-sw.js` dead → retire it (remove from `os-closure.json` + `holo-fhs-map.mjs`); evaluate folding `coi-serviceworker`. Keep `fhs`/`boot-sw`/`browser-sw` separate.
- **CSP promotion (cross-cutting).** Browser pass → refactor `login.html` inline styles → pin `boot-csp.json` → swap the SW header to enforcing `Content-Security-Policy`. Extend the policy to `shell.html`/`home.html` once their `connect-src` allow-list is mapped.
