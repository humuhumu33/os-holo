# ADR-064: Holo Share-to-Run — every shared link is a live, forkable app (the growth loop)

**Status:** Phase 0 LANDED + witnessed — the guest share-to-run chrome is implemented
(`os/usr/lib/holo/holo-share-chrome.js`) and wired into the projection
(`os/usr/share/frame/holospace.html`); `tools/holo-share-to-run-witness.mjs` drives the whole
loop in real Chromium and is **green (13/13)** — the shared landing renders, a kiosk link stays
clean, **both the World shell's Share AND the in-app Manage panel** emit the magic link, a
path-built `?app=<folder>` link resolves and lands in the chrome, and that link lands the next guest
back in the chrome (the loop closed end-to-end) — and `#share-to-run` is a required row in
`os/etc/conformance.jsonld` (`node system/tools/gate.mjs` reports it ✓; the one unrelated red is
`#app-ui-tokens`, a pre-existing color-ratchet regression in the separate Apps repo's `browser`
app — not this work). The loop now SELF-seeds from **every** creation surface: the World shell's
Share (`shareLinkFor` in the served `apps/sdk/index.html` — its modal, QR and Copy all carry the
magic link) and the in-app **Manage panel** (`#hm-share` in `holo-manage.js`, built from the app's
served path) both emit `holospace.html?app=<ref>#k=<κ>`; the projection resolves it by content
address **or** by served-path app id (a small additive leniency in the frame, zero regression). This
needed **no relock** — pure JS-logic changes, no new colors/radii, so the gate is unmoved. The rest
of the design below remains **Proposed**. **Production seal: DONE for the Pages / κ-SW path** —
`bundle-sdk-shell` (seeded SDK → lean image), `repin-shared-refs` (70 app refs → current `_shared`
κ), `reseal-drift` (os-closure → current bytes), the chrome sealed as a closure key
(`_shared/holo-share-chrome.js`), and `gen-fhs-graph` (the structure graph after the image grew):
`os/etc/os-closure.json` is **0-drift (772 κ)**, `#fhs-graph` re-witnessed, and the gate is back to
its prior state (the only red is the unrelated `#app-ui-tokens` `browser` regression). The remaining
outward steps are the **native static build** (`native/make-dist.mjs`) and the actual **Pages
deploy** (git push / CI) — both user-triggered. Phases 1–4 (below) are future work. It composes, by reference, the
teleport affordance (`os/usr/lib/holo/teleport.js`), the projection launcher
(`os/lib/holo-launch.mjs`), the World shell (`apps/sdk`), the self-sovereign identity
(`_shared/holo-identity.mjs` + the biometric `login.html`), Holo Atlas (ADR-0043), the same-origin
mesh (ADR-027), Title lineage (ADR-053), and the UI/UX conformance ratchets (ADR-0057 · ADR-0062).
**Mints nothing** — it un-hides and wires capability the substrate already has.

---

**Context.** Hologram OS can **Read** (resolve any identifier → a self-verifying object),
**Write** (every component is a durable content-addressed object), and **Own** (ADR-053). What it
has not yet engineered is *adoption* — the loop by which use creates more use. This ADR is the
growth decision.

The substrate already holds the single rarest asset in product growth: **time-to-value ≈ zero.**
No signup, no install, no server, no API key — a shared `holo://κ` link just *runs*. The growth
literature is unanimous that speed-to-first-value dominates retention — users who reach the "aha
moment" in the first hour retain
[4–5× better at D7](https://markcrosling.medium.com/why-the-aha-moment-and-user-activation-are-equally-important-in-saas-onboarding-20017e6054c1),
and [top-quartile SaaS reaches value in under five minutes](https://productgrowth.in/insights/saas/saas-onboarding-benchmarks/).
Hologram can reach it in **under ten seconds**. That is not a feature; it is the strategy.

**The native viral loop is not a central feed.** Law L1 (identity is content, never a host) and a
private-first posture forbid the Facebook/Twitter pattern (a central social graph + public
broadcast) — and we do not want it. The loop native to a content-addressed substrate is
**share-to-run-to-remix**: a shared κ-link runs instantly for the recipient, who forks it into
*their own* κ-link and re-shares. This fuses the three patterns whose
[K-factor has historically crossed 1.0](https://www.wearefounders.uk/the-collaborative-design-tools-going-viral-lessons-from-figma-and-loom/) —
Loom (each share both *uses* and *promotes* the product), Figma (value unlocks when you pull
others in), and CodePen (remix culture). [Velocity beats magnitude: a fast loop outruns a slower,
higher-K one](https://fourweekmba.com/viral-coefficients-k-factor-the-mathematics-of-exponential-growth/) —
and this loop can cycle in under two minutes.

**The blunt finding from the code: the rocket is built; the fuses are unlit.**
- `teleport.js` carries the whole share machinery — link builder, `#k=` provenance, Law-L5
  re-derivation — but the visible button was removed (the source says so verbatim: *"No
  auto-injected floating 'Share' button — removed by request"*). Sharing works only from the
  console.
- `holospace.html` *deliberately* redirects a shared link to the World shell
  (`apps/sdk?open=…`), reaching the standalone fullscreen mount only under `?bare=1`. The
  recipient lands in a desktop, not in the running app.
- There is no Remix affordance, no "Made on Hologram" mark, no presence (the World HUD says
  *"just you"*), and Atlas is not the home.

**The privacy tension, resolved.** Default-private is non-negotiable; a shared link is always a
*deliberate* act by its owner. Per the operator decision, discovery is **opt-in public**: a κ
becomes runnable/discoverable by anyone only when its owner publishes it (then it enters Atlas,
the feed). Sharing a direct link never implies publication. Virality and privacy coexist because
the unit of sharing is a self-verifying object the owner chooses to hand over — not a profile a
platform broadcasts.

---

**Decision.** Engineer the share-to-run loop as six binding rules. Phase 0 (below) ships rules
1–5's minimum; rule 6 is the compounding social layer, sequenced later.

1. **Time-to-magic is the product.** One experience proves *build · run · share · fast/free/
   private* at once: *open a link → a real app is already running → change it → you have your own
   link to send.* Engineer that one moment. Target: first wow in **< 10 s**, zero signup. The
   marketing message ("your personal internet supercomputer — build, run, share serverless AI
   apps, fast/free/private") is *felt* in this moment, not stated.

2. **A shared link lands in the magic, not the shell — and the marker is native.** A shared link
   is exactly a teleport link carrying `#k=` provenance. When `#k=` is present (or an explicit
   `?shared=1`), the projection takes the **fullscreen mount** (the existing `?bare=1` path)
   wrapped in a slim share-to-run chrome. Plain `?app=` *internal* navigation keeps the editable
   World-shell default. This resolves the routing tension without betraying the "everything is an
   editable object" philosophy: internal use stays editable; *shared* links get the instant
   magic.

3. **Share is contextual, never spammy.** No always-on floating button — the prior removal stands.
   Share surfaces at the **six joy moments** (post-activation — the
   [optimal trigger window](https://insightfulcfo.blog/2025/07/28/viral-coefficient-engineering-product-led-growth/)):
   (a) a recipient's first successful run of a shared app, (b) just built something that works,
   (c) just remixed and it runs, (d) an app produced an impressive output (share the *artifact*,
   Loom's move), (e) the provenance chip turns green ✓, (f) a "your app was run N times"
   return. Sharing is **double-sided**: a remix credits the origin Title (ADR-053), so both ends
   of the loop are rewarded —
   [the design that spins a loop faster](https://productled.com/blog/growth-loops-accelerants-for-plg-saas).

4. **Remix is one tap to an editable fork.** The chrome's **Remix** opens the app as a new
   editable holospace object (World shell `?open=…&remix=1`), forking to a new κ on first edit —
   its own shareable link. The fork is a PROV-O / Title lineage edge (`prov:wasDerivedFrom` →
   origin κ, ADR-053), so the loop is **verifiable**, not vanity: the graph of who-remixed-what
   re-derives.

5. **Every shared app advertises the substrate.** A single, content-addressed **"Made on
   Hologram · Run it free"** mark on the chrome (Canva's public-output loop — every output is an
   ad). The *only* attribution; opt-out for owned/paid Titles.

6. **The loop compounds into the social layer by reference, minting nothing** (later phases).
   *Presence* = `holo-wire` pings over the same-origin/relay mesh (ADR-027) → "**N running now**"
   on a shared app (the social proof that accelerates the cycle, and the cheap bridge from
   share-to-run into multiplayer). *Follow* = subscribe to a creator's κ (pull-based, no central
   graph). *Publish* = opt-in → **Atlas becomes the feed** (Trending / New, ADR-0043). *Reactions
   & comments* = κ-objects appended to an app (ADR-025), append-only and portable, no server.
   *Notifications* = "X ran / remixed your app" (the creator pull-back loop that feeds D7
   retention). Co-presence cursors + watch-together (Phase 4) are the heaviest lift; the presence
   count is the 10% of multiplayer that delivers 80% of the pull.

---

## Phase 0 — the build spec (the highest-leverage un-hiding)

The goal of Phase 0 is to turn *every existing share into a live loop* with roughly one new file
and ~10 lines of routing. It implements rules 1–5's minimum.

**Files touched**

- `os/usr/share/frame/holospace.html` — **routing.** Today the boot branch is:
  ```js
  if (params.get("bare") === "1") { boot()... } else { /* redirect to apps/sdk?open=… */ }
  ```
  Change the predicate so a *shared* link also takes the fullscreen mount, and flag the chrome:
  ```js
  const h = new URLSearchParams((location.hash || "").replace(/^#/, ""));
  const shared = !!h.get("k") || params.get("shared") === "1";
  const wantChrome = shared || params.get("chrome") === "1";   // kiosk embeds stay clean
  if (params.get("bare") === "1" || shared) {
    boot().then(() => { if (wantChrome) window.HoloShareChrome?.mount(); })
          .catch((e) => die(...));
  } else { /* unchanged: World-shell editable default */ }
  ```
  ~10 lines. The chrome renders **only** when `wantChrome`, so internal bare/kiosk embeds are
  unaffected.

- **NEW** `os/usr/lib/holo/holo-share-chrome.js` — the share-to-run chrome. Self-contained,
  dependency-free, ~150 lines. A slim bar over the mounted app carrying: **Share**
  (→ `HoloTeleport.share()`), **Remix** (→ `apps/sdk/index.html?open=<raw>&remix=1`), the
  provenance chip (already produced by teleport's `onOpen`), and the **"Made on Hologram · Run it
  free"** mark. Built on `--holo-*` tokens with the 16px floor (ADR-0057), reduced-motion-aware
  (ADR-0062), glyphs via `<holo-icon>` (ADR-0032). Exposes `window.HoloShareChrome.mount()`.
  Loaded by the frame after `teleport.js`.

- `os/usr/lib/holo/teleport.js` — small additions, the "no floating button" promise intact:
  (a) ensure `share()` yields a *landing-in-magic* link — carry `#k=` when the page knows its κ,
  else append `shared=1`; (b) expose the bits the chrome needs (it already exposes
  `link/share/verifyAgainst`). QR encode (a tiny content-addressed encoder for phone↔desktop) is
  Phase 2.

**The seal / serve / gate cascade** (the part to respect — it is the repeated footgun). The
κ-route serving layer (`tools/holo-serve-fhs.mjs`) serves **only sealed files**, so a new
`usr/lib/holo/` file 404s until the closure is re-sealed. In order:
  1. Make the three edits above.
  2. Re-seal the closure that covers the frame's `usr/lib/holo/` path (`tools/reseal-drift.mjs`;
     if anything under `_shared/` changed, run `tools/repin-shared-refs.mjs` **in the same pass** —
     they must run together) and refresh the OS root manifest if required
     (`tools/compute-manifest.mjs`). *Confirm at build time which seal owns `usr/lib/holo/`* — the
     login chain uses `seal-login-closure.mjs`; the frame closure likely flows through
     reseal-drift + compute-manifest. Reseal **before** rendering or the new file will not serve.
  3. `node system/tools/gate.mjs` must stay **PASS**. Watch the app-UI/token/wired/UX rows
     (ADR-0057/0062) — the chrome must conform to the readability floor and the token layer or the
     gate goes red; that is why it is built on tokens from day one. Watch `#fhs-graph` (structure).
  4. On acceptance, add row `#share-to-run` to `os/etc/conformance.jsonld` and ship its witness
     (below).

**The witness** (`tools/holo-share-to-run-witness.mjs`, ships with acceptance, not Phase 0):
render `holospace.html?app=<id>#k=<κ>` in the offline Playwright harness (the proven recipe) and
assert — the chrome mounts in the bare path; **Share** produces a `#k=` link that re-mounts to the
same running app; **Remix** routes to the editable World shell with `remix=1`; the provenance chip
re-derives green (Law L5); the chrome passes the UI/UX floors; a plain `?app=` link does **not**
land fullscreen (the World-shell default is preserved); a `?bare=1` kiosk link with no `#k=`
renders **no** chrome.

**North star & metrics.** North star = **weekly remix-and-reshare loops completed** (the truest
proxy for compounding creation). Supporting: apps-run-from-a-shared-link / week; TTV (< 10 s);
cycle time (< 2 min); K-factor (drive 0.5 → 1.0). [Guard retention while driving K — a high K with
churning users is noise](https://growth-experiments.com/guides/growth-loops).

**Sequencing after Phase 0:** Phase 1 time-to-magic onboarding (first-run = a live demo running +
curated gallery, replacing the empty-desktop hotkey prompt; a visible Create with live preview).
Phase 2 the six joy-moment triggers + QR + delight toasts. Phase 3 the compounding social layer
(rule 6). Phase 4 multiplayer rooms (co-presence + watch-together over `holo-wire`; finalize Holo
Pair).

---

**Consequences.**

- **Every existing share becomes a live loop** with ~one new file and ~10 lines of routing — Phase
  0 is mostly *un-hiding* capability the substrate already has. The lowest-effort, highest-leverage
  move available.
- **No promise is broken.** Law L1 (the link *is* content), the privacy default (a share is a
  deliberate act; publication is separately opt-in), the "no floating button" decision (the chrome
  is contextual to shared-link landings and the explicit app-window action), and the
  "everything is an editable object" philosophy (internal `?app=` stays World-shell-editable) all
  hold.
- **Mints nothing.** Reuses teleport, holo-launch, the World shell, Atlas, holo-wire, and Title
  lineage — consistent with Law L4 and the cardinal "reference, don't restate" discipline.
- **The conformance ratchets are a feature here.** The chrome must pass the UI/UX floors or the
  gate refuses it — so virality cannot ship ugly or inaccessible. The cost: it must be built on
  tokens from the first line, and bare *kiosk* embeds must stay chrome-free (gated on the `shared`
  marker).
- **Negative / risks.** The `#k=` marker only fires when the page knows its κ; apps that have not
  stamped a κ fall back to the `shared=1` marker, so `share()` must always set one. Presence
  (rule 6) depends on the mesh/relay being reachable — it degrades to "just you," never blocks the
  run.

**Considered alternatives.**
- *Re-add the global floating Share button.* Rejected: the operator removed it, it is spammy, and
  it violates the contextual-share best practice (share *at* the joy moment, not always-on).
- *Make ALL links land fullscreen (drop the World-shell default).* Rejected: it breaks the
  "everything is an editable object" philosophy and the in-shell remix path. The `#k=` marker gives
  *shared* links the magic without that cost.
- *Build a central feed / social graph first (the literal Facebook model).* Rejected: violates Law
  L1 and the private-first posture, and is the heaviest lift. Share-to-run seeds the social layer
  natively (rule 6) and ships now.
- *Chosen:* the native **share-to-run-to-remix** loop — lands shared links in the running app,
  surfaces contextual Share + one-tap Remix, advertises the substrate on every output, and
  compounds into presence/feed/follow *by reference* — maximal virality, zero betrayal of the core
  promise, zero parallel infrastructure.

**External authorities.** [W3C Web Share API](https://www.w3.org/TR/web-share/) (the OS share
sheet, already used by teleport) · [PROV-O](https://www.w3.org/TR/prov-o/) (remix/fork lineage) ·
the teleport `#k=` provenance + holospaces **Law L5** re-derivation (a ✓ only on true match) ·
**Law L1** (identity is content) · **Law L4** (no parallel infrastructure) · ADR-053 (Title — remix
credit + publish/own) · ADR-0057 / ADR-0062 (UI/UX conformance floors) · ADR-0032 (`<holo-icon>`) ·
ADR-027 (same-origin / signaling-free mesh — presence) · ADR-0043 (Atlas — the opt-in public feed).
Growth grounding: [aha-moment → retention](https://markcrosling.medium.com/why-the-aha-moment-and-user-activation-are-equally-important-in-saas-onboarding-20017e6054c1) ·
[onboarding benchmarks](https://productgrowth.in/insights/saas/saas-onboarding-benchmarks/) ·
[viral coefficient / PLG](https://insightfulcfo.blog/2025/07/28/viral-coefficient-engineering-product-led-growth/) ·
[K-factor velocity](https://fourweekmba.com/viral-coefficients-k-factor-the-mathematics-of-exponential-growth/) ·
[Figma/Loom collaborative virality](https://www.wearefounders.uk/the-collaborative-design-tools-going-viral-lessons-from-figma-and-loom/) ·
[incentive accelerants](https://productled.com/blog/growth-loops-accelerants-for-plg-saas) ·
[retention guard](https://growth-experiments.com/guides/growth-loops).
