# ADR-0063: Holo Native — the content-addressed native host

**Status:** Accepted — scaffolded in the **Hologram Apps** repo at `apps/tauri/` (kept OUT of the lean
OS2 repo; it builds its image FROM OS2's `os/`). A canonical [Tauri v2](https://github.com/tauri-apps/tauri)
application whose only first-party logic is the `holo://` κ-route. The browser tier (the dev server +
GitHub Pages Service Worker) is unchanged; this adds a *second tier* that runs the SAME
content-addressed OS natively, with Law-L5 verification enforced at the host boundary.

**Context.** Hologram OS2 boots into Holo Browser — the universal navigator over the UOR substrate —
but inside Chrome it is a guest: a sandbox denies it a terminal, the real filesystem, and CORS-free
HTTP, so live web has to be faked with a dev proxy and "install" means a PWA pill. The objective is to
remove the last layer between the user and the object universe: a **100% native tier, effortless to
boot**. An earlier idea — "compile native Chromium on-device from the browser via Holo Forge" — was
rejected as physically impossible: the web sandbox cannot emit or run native code, and Forge targets
sandboxed WASM, not a native browser engine. The honest native path is a small native host that
**embeds the system webview** and serves the OS to it over a custom scheme.

**Constraint (the user's, restated).** *Strictly adhere to the Tauri spec; avoid hand-writing new
code; be very lean, low-latency, secure, functional on any device; adhere to the holospaces spec; 100%
native to the UOR content-addressable substrate; seamless and magical.* And project law (ADR-0029):
do not run a foreign runtime **inside the browser substrate**. The native tier does not violate that —
it IS the native runtime. The faithful move is to adopt Tauri's canonical structure **verbatim** (no
hand-rolled webview, IPC, or build) and add exactly one substrate-native thing on top.

**Decision.** Ship **Holo Native** (`Hologram Apps/apps/tauri/`): a standard `create-tauri-app` v2 crate
(`Cargo.toml`, `build.rs`, `main.rs` → `lib::run()`, `tauri.conf.json`, `capabilities/`) where the
only first-party Rust is the **`holo://` URI scheme** (`src-tauri/src/lib.rs`). Everything else is
Tauri core + its official plugins, used as the spec documents them.

- **The κ-route is the substrate, natively.** `register_asynchronous_uri_scheme_protocol("holo", …)`
  resolves each request to a flat OS image on disk, **re-derives its sha256 content address, and
  refuses a mismatch** (holospaces **Law L5**, fail-closed). The window loads
  `holo://os/apps/browser/index.html` fullscreen — the same boot target as the browser tier — so the
  guarantee a sandbox can't give (the bytes on your machine are exactly the bytes that were sealed) is
  enforced by the host. Two tolerant normalizations keep parity with `os/lib/holo-fhs-map.mjs`: strip
  the `os` root segment (Tauri exposes the URL host as a path prefix on some platforms) and collapse an
  app-relative `apps/<id>/_shared|pkg/…` ref to the one top-level engine path.
- **The official plugins supply the native powers the browser faked.** `deep-link` →
  `hologram://`·`web+hologram://`·`holo://` (one link boots the host and navigates to an object);
  `shell` → a real terminal; `fs` → the real filesystem; `http` → live web with **no CORS** (the dev
  `/web` proxy disappears); `opener` → "Open in Chromium ↗". A least-privilege `capabilities/default.json`
  grants the main window exactly these and nothing more.
- **The image is self-sealed (`make-dist.mjs`).** The OS lives FHS-shaped but apps speak a flat URL
  space; the dev server bridges the two live via `holo-fhs-map.mjs`. `make-dist` materializes that
  bridge ahead of time into `apps/tauri/dist/` (so the host carries no mapping logic to drift), then
  **re-derives a κ for every byte** and writes `dist/os-closure.json` — a tamper-evident manifest of
  the exact image shipped. It cross-checks each pin against the canonical OS closure and reports drift
  (files newer than the OS's last reseal — dev-in-flight, expected). Heavy *data* (model κ-disks, demo
  media) is excluded and fetched on demand by κ, keeping the image lean (~74 MB).
- **The single link IS the install.** `bootstrap.ps1` / `bootstrap.sh` fetch the released host binary,
  re-derive its sha256 κ, **refuse to run on a mismatch** (Law L5), then launch it once; the host
  registers `hologram://` so every later link is instant. No installer wizard — verify-and-run.
- **Preview without Rust.** `serve-dist.mjs` serves `dist/` over HTTP with the EXACT contract `lib.rs`
  implements (flat read · `os/` strip · `_shared`/`pkg` collapse · Law-L5 verify · COI headers), so the
  native image is inspectable in any browser and doubles as living documentation of the host.

**Why this shape.** The κ-route is the whole thesis in one function: in the browser tier the substrate
is *served* and the Service Worker verifies; in the native tier the substrate is *the protocol* and the
host verifies — identical semantics, one tier deeper. Adopting Tauri verbatim means the webview, IPC,
updater, and bundler are all upstream-maintained; the surface we own is ~150 lines that do one thing.
The same `apps/browser/index.html` shell, the same engines, the same Holo Dock render in both tiers
(verified: the sealed image boots and renders with zero console errors).

**Consequences.**
- A real terminal + filesystem + CORS-free HTTP are now available to the OS; apps should feature-detect
  the native tier (`window.__TAURI__`) and prefer the `http` plugin over the dev `/web` proxy, the
  `shell` plugin over the simulated terminal — a per-app follow-up, not required for boot.
- The host fails closed: a corrupted or post-build-tampered image file is refused, not served. Drift
  between the canonical OS closure and dev-in-flight apps is surfaced by `make-dist`, not hidden.
- Building a bundle needs the Rust + Tauri toolchain and a one-time `tauri icon`; the from-source
  bootstrap path covers machines without a pinned release.

**Out of scope / follow-ups.** Mobile targets (`tauri android|ios init` — the lib is already the mobile
entry point); an auto-updater keyed to the published κ; tightening the `fs`/`http`/`shell` capability
scopes for a public build; routing the OS's live-web fetches through the `http` plugin natively; an
optional network κ-resolver so objects absent from the local image stream in by content address; a
`#holo-native` gate witness (static checks over `lib.rs` + the sealed `dist` manifest).
