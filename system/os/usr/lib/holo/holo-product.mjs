// holo-product.mjs — THE one source of Holo Product (ADR-0065): the canonical upstream foundation
// for building beautiful, valuable and delightful Hologram-native products. It BUNDLES the two
// already-wired faculties — Holo UI (the look: visual design, colour, type, layout) and Holo UX (the
// experience: interaction, native feel, the 13 tenets) — into one balanced whole (the two brain
// hemispheres of the UX·&·UI diagram), and adds the delivery METHOD every product follows.
//
// It mints nothing reusable: the faculties bind the existing Holo UI tokens + the sealed Holo UX
// doctrine by content address; the method is a HYBRID (the 2026 trend — predictive governance +
// agile execution) the substrate already lives. Pure + isomorphic; the witness re-derives every
// materialization from here so nothing drifts (the discipline of holo-ux-doctrine.mjs).

// ── the ten faculties — balanced 5 UX (left brain) + 5 UI (right brain) ──
// Each faculty is a capability the UX·&·UI diagram names, mapped to where it is ALREADY WIRED in the
// OS (`realizedBy`) and the checkable obligation a product holds. `hemisphere` keeps the balance
// explicit: neither half ships without the other.
export const FACULTIES = [
  // — UX · left brain · the experience —
  { id: "interaction-design", hemisphere: "ux", label: "Interaction Design",
    realizedBy: "usr/lib/holo/holo-ux.js",
    obligation: "Interaction adapts to the host (native-adaptive feel + data-holo-shortcut) and propagates from one source over the postMessage tree — bound, not re-implemented." },
  { id: "wireframes-prototypes", hemisphere: "ux", label: "Wireframes & Prototypes",
    realizedBy: "usr/lib/holo/holo-phi.css",
    obligation: "Structure is laid on the golden-ratio proportion system (holo-phi) and the zone/layout grid — a coherent skeleton before any skin." },
  { id: "information-architecture", hemisphere: "ux", label: "Information Architecture",
    realizedBy: "usr/share/ns/fs.jsonld",
    obligation: "Content is organized as the one self-verifying, content-addressed FHS/holospace graph — findable, navigable, addressable by κ." },
  { id: "user-research", hemisphere: "ux", label: "User Research",
    realizedBy: "usr/lib/holo/holo-capability.mjs",
    obligation: "The product meets the real user + device: the capability tier and operator context are resolved, not assumed (treat their resources as sacred)." },
  { id: "scenarios", hemisphere: "ux", label: "Scenarios",
    realizedBy: "usr/lib/holo/holo-voice.mjs",
    obligation: "Every flow is told in the plain voice (why → how → what), self-descriptive, revealing power on the user's curiosity — never a manual." },
  // — UI · right brain · the look —
  { id: "visual-design", hemisphere: "ui", label: "Visual Design",
    realizedBy: "usr/lib/holo/holo-theme.js",
    obligation: "The look is driven by the one Holo UI engine (palette · presentation · accent), inherited live — beautiful and coherent out of the box." },
  { id: "colors", hemisphere: "ui", label: "Colors",
    realizedBy: "usr/lib/holo/holo-theme.css",
    obligation: "Colour flows through the canonical --holo-* palette tokens; no attention-grabbing hardcodes bypass them (signal over noise)." },
  { id: "graphic-design", hemisphere: "ui", label: "Graphic Design",
    realizedBy: "usr/lib/holo/holo-icons.js",
    obligation: "Iconography is the κ-pinned Holo Icons library — every glyph a content-addressed, self-verifying object, not a one-off asset." },
  { id: "layouts", hemisphere: "ui", label: "Layouts",
    realizedBy: "usr/lib/holo/holo-mobile.css",
    obligation: "Layout adapts by container with safe-area, the 8px rhythm and the tap-target floor — one responsive system, mobile through desktop." },
  { id: "typography", hemisphere: "ui", label: "Typography",
    realizedBy: "usr/lib/holo/holo-theme.css",
    obligation: "Type is the canonical --holo-font-* tokens with the --holo-font-min readability floor; no token-rendered text falls below it." },
];

// ── the delivery method — a HYBRID (ADR-0065), the substrate's product lifecycle ──
// The 2026 trend is hybrid: predictive governance + agile execution. Hologram OS already lives one —
// an ADR is the decision record (PRINCE2 stage), a witness is the definition of done (Six Sigma
// Control), the fail-closed gate is the stage-gate, apps iterate continuously (Agile/Kanban), the
// resource budget is the waste discipline (Lean), and a sealed κ is the predictable artifact
// (Waterfall). Each phase is a checkable obligation, citing the frameworks it draws from.
export const METHOD = [
  { id: "discover", label: "Discover", draws: ["Lean", "Agile"],
    obligation: "Name the value and the user before building — the product's manifest states what it is for, in the plain voice (maximize value, minimize waste)." },
  { id: "define", label: "Define", draws: ["PRINCE2", "Waterfall"],
    obligation: "Every product is a recorded decision: an ADR captures why/what, and its structure is content-addressed (a controlled, documented stage)." },
  { id: "design", label: "Design", draws: ["Agile"],
    obligation: "Design to BOTH doctrines at once — adhere to Holo UI (look) and Holo UX (experience); the two hemispheres are balanced, neither skipped." },
  { id: "build", label: "Build", draws: ["Scrum", "Kanban", "Lean"],
    obligation: "Build iteratively as re-derivable κ-objects within the declared resource budget — continuous flow, work visualized, waste eliminated." },
  { id: "verify", label: "Verify", draws: ["Six Sigma"],
    obligation: "Done is proven, not asserted: a witness re-derives the product to its content address (Law L5) and the fail-closed gate refuses anything unwitnessed." },
  { id: "deliver-iterate", label: "Deliver & Iterate", draws: ["Kanban", "Agile"],
    obligation: "Ship as a self-verifying holo://κ and keep flowing — a product evolves continuously without ever breaking the gate (no regression)." },
];

// the frameworks the hybrid draws from (cited, never minted) — the union over METHOD.draws.
export const FRAMEWORKS = ["Agile", "Scrum", "Kanban", "Waterfall", "Lean", "PRINCE2", "Six Sigma", "Hybrid"];

// the balance principle — the spine of the bundle.
export const BALANCE = "Left brain (UX faculties) and right brain (UI faculties) are equal partners: a beautiful product that does not work, and a working product that is not beautiful, both fail Holo Product. Combine and balance the two, every time.";

// ── materialize the dereferenceable hosprod: ontology + the SKOS faculty/method schemes ──
const NS = "https://hologram.os/ns/product";
export function toOntology() {
  const term = (id, type, label, comment, extra = {}) => ({ "@id": `hosprod:${id}`, "@type": type, label, comment, isDefinedBy: NS, ...extra });
  return {
    "@context": {
      rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
      rdfs: "http://www.w3.org/2000/01/rdf-schema#",
      owl: "http://www.w3.org/2002/07/owl#",
      xsd: "http://www.w3.org/2001/XMLSchema#",
      skos: "http://www.w3.org/2004/02/skos/core#",
      dcterms: "http://purl.org/dc/terms/",
      schema: "https://schema.org/",
      hosprod: "https://hologram.os/ns/product#",
      hosux: "https://hologram.os/ns/ux#",
      label: "rdfs:label",
      comment: "rdfs:comment",
      subClassOf: { "@id": "rdfs:subClassOf", "@type": "@id" },
      isDefinedBy: { "@id": "rdfs:isDefinedBy", "@type": "@id" },
      inScheme: { "@id": "skos:inScheme", "@type": "@id" },
      prefLabel: "skos:prefLabel",
      definition: "skos:definition",
      obligation: "hosprod:obligation",
      realizedBy: "hosprod:realizedBy",
      hemisphere: "hosprod:hemisphere",
      draws: "hosprod:draws",
    },
    "@id": NS,
    "@type": "owl:Ontology",
    label: "Hologram OS — Holo Product foundation (hosprod:)",
    comment: "The canonical upstream foundation for building beautiful, valuable and delightful Hologram-native products (ADR-0065): it bundles + balances Holo UI (look) and Holo UX (experience) as ten faculties, and a hybrid delivery method. Mints only the genuinely-new product terms (Faculty · hemisphere · realizedBy · MethodPhase · obligation · draws); the faculties bind the existing Holo UI tokens + the sealed Holo UX doctrine by content address. Re-derived from holo-product.mjs (no drift).",
    "dcterms:license": "https://creativecommons.org/publicdomain/zero/1.0/",
    "@graph": [
      term("Foundation", "rdfs:Class", "Product Foundation", "The one bundle that balances the UI and UX faculties under a delivery method.", { subClassOf: "skos:ConceptScheme" }),
      term("Faculty", "rdfs:Class", "Product Faculty", "One capability of building a product (a UX or UI faculty), bound to where it is wired and a checkable obligation.", { subClassOf: "skos:Concept" }),
      term("MethodPhase", "rdfs:Class", "Method Phase", "One phase of the hybrid delivery method, drawing on named project-management frameworks.", { subClassOf: "skos:Concept" }),
      term("hemisphere", "rdf:Property", "hemisphere", "Which half a faculty belongs to: ux (experience) or ui (look). Keeps the balance explicit.", { range: "xsd:string" }),
      term("realizedBy", "rdf:Property", "realized by", "The canonical OS artifact that already wires a faculty (a path or κ).", {}),
      term("obligation", "rdf:Property", "obligation", "The checkable rule a faculty or phase places on a product. OS-specific product term.", { range: "xsd:string" }),
      term("draws", "rdf:Property", "draws from", "A project-management framework a method phase draws from (cited, never minted).", { range: "xsd:string" }),
      {
        "@id": `${NS}#faculties`, "@type": ["skos:ConceptScheme", "hosprod:Foundation"],
        prefLabel: "Holo Product faculties — Holo UI ⊕ Holo UX, balanced (ADR-0065)",
        comment: BALANCE, "dcterms:license": "https://creativecommons.org/publicdomain/zero/1.0/",
      },
      { "@id": `${NS}#method`, "@type": "skos:ConceptScheme",
        prefLabel: "Holo Product method — the hybrid delivery lifecycle (ADR-0065)",
        comment: `A hybrid drawing on ${FRAMEWORKS.join(" · ")}; predictive governance (ADR · gate) with agile execution (iterate · flow).` },
      ...FACULTIES.map((f) => ({
        "@id": `hosprod:${f.id}`, "@type": ["skos:Concept", "hosprod:Faculty"],
        prefLabel: f.label, hemisphere: f.hemisphere, realizedBy: f.realizedBy, obligation: f.obligation,
        inScheme: `${NS}#faculties`,
      })),
      ...METHOD.map((m) => ({
        "@id": `hosprod:${m.id}`, "@type": ["skos:Concept", "hosprod:MethodPhase"],
        prefLabel: m.label, draws: m.draws, obligation: m.obligation,
        inScheme: `${NS}#method`,
      })),
    ],
  };
}

if (typeof globalThis !== "undefined") globalThis.HoloProduct = { FACULTIES, METHOD, FRAMEWORKS, BALANCE, toOntology };
