#!/usr/bin/env node
// gen-orbital-atlas.mjs — seal the 35 hydrogenoid stationary states |n,l,m> (n=1..5, l=0..n-1,
// m=0..l) as κ-addressed UOR MATH OBJECTS and pin each one's deterministic coordinate in the finite
// Φ-Atlas-12288 torus. The wavefunction is the EXACT analytic Coulomb solution shown in the source
// animation:  ψ_nlm = N_nl e^{-ρ/2} ρ^l L_{n-l-1}^{2l+1}(ρ) · N_lm P_l^{|m|}(cosθ) e^{imφ},  ρ = 2Zr/(n a0).
// Each state's identity is the sha256 of its own canonical content (Law L2/L5); its position is a pure
// function of that κ (holo-atlas-coord). The browser app (orbital-atlas.html) re-derives both, verbatim.
//
//   node tools/gen-orbital-atlas.mjs

import { writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const OS2 = join(here, "../os");
const { makeObject } = await import(pathToFileURL(join(OS2, "usr/lib/holo/holo-object.mjs")));
const { atlasCoord } = await import(pathToFileURL(join(OS2, "usr/lib/holo/holo-atlas-coord.mjs")));

// One canonical math object per stationary state. Keys are content only — jcs sorts them, so order is
// irrelevant; what matters is that the browser builds the IDENTICAL object and re-derives the same κ.
const stateObject = (n, l, m) => ({
  type: ["holo:MathObject", "schema:DefinedTerm"],
  context: [{ holo: "https://holo.foundation/ns#" }],
  family: "hydrogenoid-stationary-state",
  model: "schrodinger-coulomb",
  Z: 1, a0: 1, n, l, m,
  rho: "2*Z*r/(n*a0)",
  wavefunction: "psi_nlm = N_nl * e^(-rho/2) * rho^l * L_{n-l-1}^{2l+1}(rho) * N_lm * P_l^|m|(cos theta) * e^(i*m*phi)",
  N_nl: "sqrt( (2Z/(n a0))^3 * (n-l-1)! / (2n (n+l)!) )",
  N_lm: "sqrt( (2l+1)/(4 pi) * (l-|m|)! / (l+|m|)! )",
  density: "|psi_nlm|^2",
  norm: "triple integral |psi_nlm|^2 r^2 sin(theta) dr dtheta dphi = 1",
});

const store = new Map();
const states = [];
for (let n = 1; n <= 5; n++)
  for (let l = 0; l <= n - 1; l++)
    for (let m = 0; m <= l; m++) {
      const obj = makeObject(store, stateObject(n, l, m));   // seal → did:holo:sha256:<hex>
      const coord = atlasCoord(obj.id);                      // pure-κ Φ-Atlas-12288 position
      states.push({ n, l, m, radialNodes: n - l - 1, angularNodes: l,
        kappa: obj.id, atlas: coord });
    }

const manifest = {
  spec: "35 hydrogenoid stationary states |n,l,m> (n=1..5, l=0..n-1, m=0..l) as κ-addressed UOR math objects, each coordinated in the finite Φ-Atlas-12288 torus (verbatim atlas-12288 math).",
  space: "Φ-Atlas-12288", within: "did:holo:sha256:f82435dab0215aa6695797d5e9ef4809f1905c015c419f085b2d42346441aad0",
  count: states.length, states,
};
const cells = new Set(states.map((s) => s.atlas.cell));
writeFileSync(join(here, "orbital-atlas.manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`sealed ${states.length} states · ${cells.size} distinct Φ-Atlas-12288 cells`);
for (const s of states.slice(0, 4))
  console.log(`  |${s.n},${s.l},${s.m}>  ${s.kappa.slice(0, 28)}…  cell ${s.atlas.cell} · page ${s.atlas.page} · byte ${s.atlas.byte} · R96 ${s.atlas.r96}`);
console.log(`  … (${states.length - 4} more) → tools/orbital-atlas.manifest.json`);
