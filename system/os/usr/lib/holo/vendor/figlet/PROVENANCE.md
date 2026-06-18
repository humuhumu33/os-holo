# figlet — vendored provenance

- **Package:** `figlet`
- **Version:** 1.11.0
- **License:** MIT (see `LICENSE.txt`)
- **Author:** Patrick Gillespie (patorjk) and contributors
- **npm:** https://www.npmjs.com/package/figlet
- **Repository:** https://github.com/patorjk/figlet.js
- **Live tool:** https://patorjk.com/software/taag/ (TAAG — Text to ASCII Art Generator)
- **Description:** "Creates ASCII Art from text. A full implementation of the FIGfont spec."

## What this is

`figlet.mjs` is the byte-faithful authoritative ESM bundle published as
`figlet@1.11.0` (`dist/figlet-C8Ns3Vyn.js`, the chunk the package's `figlet.mjs`
façade re-exports). It is a complete, dependency-free implementation of the FIGfont
spec: header parsing (`parseFont`), the full horizontal + vertical smushing rule set
(`getSmushingRules`, `hRule1..6`, `vRule1..5`, controlled/universal smushing), and
text generation (`textSync`, `text`). It exports `{ figlet as f, getFontName as g }`.

The same author wrote TAAG, and `vendor/figlet-fonts/*.flf` are the same `.flf` font
files TAAG ships — so Hologram's encoder is byte-identical to the patorjk tool the
user pointed at, not a lookalike.

## How Hologram uses it

Per the substrate doctrine (adopt OSS standards as content-addressed κ-objects, never
run a foreign runtime), this vendored bundle is the **source of truth**. The OS engine
`os/usr/lib/holo/holo-ascii.mjs` imports its core (`parseFont` + `textSync`) and adds
only a κ-aware font loader: each `.flf` is fetched on demand from
`vendor/figlet-fonts/`, re-verified against its `kappa` in `manifest.json` (Law L5),
parsed once, and cached. `HoloFX.ascii(text, { font })` is the thin facade every
surface calls. Fonts are lazy — nothing but the requested `.flf` is ever fetched.

To regenerate the font κ-manifest after adding/updating a `.flf`:

```bash
node tools/gen-figlet-manifest.mjs
```
