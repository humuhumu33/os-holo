// holo-factory-grow.mjs — SELF-IMPROVEMENT for Holo Factory (ADR-0097): the factory improves over time by
// OBSERVING ITSELF. This closes the last Factory 2.0 pillar — "a system that improves by observing itself."
//
// The tender already appends a Trace per run (success or failure) to the append-only corpus. Growth reads
// the FAILURE traces and drives Holo Mind's Phase-2 optimizer (evolve, ADR-0081): propose an improved skill
// from the failures, seal it as a GOVERNED, re-derivable SkillRevision (in force only when every condition
// holds — tests pass · within the size ceiling · conscience accepts · operator-ratified · cooling-off
// elapsed). NO new substrate — it composes holo-mind-evolve verbatim; the factory just supplies the trigger.
//
// HONEST (Law L5 + the ADR-0052 boundary): the optimizer's PROPOSAL is a stochastic LLM generation, NOT
// reproducible — L5 holds over the AUDIT TRAIL (which corpus, which optimizer, which gate verdicts), not the
// search. And growth WON'T churn on noise: below a failure threshold it does nothing; with no model it makes
// no proposal; a failing gate seals a revision that is honestly NOT in force. The behavior-change projection
// (an in-force revision → the live propose strategy, holo-mind-evolve.projectSkill) is the consumption seam.

import { failures, evolve, isInForce, projectSkill } from "../holo-mind-evolve.mjs";
import { resolve } from "../holo-mind.mjs";

// growFromFailures(store, corpusHead, opts) → { grew, revision?, inForce?, failures, reason? }.
// opts: { parentKappa?, parentBytes, optimizerKappa?, sampler, gate, minFailures? }.
export async function growFromFailures(store, corpusHead, { parentKappa = null, parentBytes = "", optimizerKappa = null, sampler = null, gate = {}, minFailures = 2 } = {}) {
  const fails = corpusHead ? failures(store, corpusHead) : [];
  if (fails.length < minFailures) return { grew: false, failures: fails.length, reason: `only ${fails.length} failure(s) — need ${minFailures} (won't churn the skill on noise)` };
  if (typeof sampler !== "function") return { grew: false, failures: fails.length, reason: "no model in context — nothing to propose (the optimizer borrows the existing sampler)" };
  const rev = await evolve(store, { parentKappa, parentBytes, corpusHeadKappa: corpusHead, optimizerKappa, sampler, gate });
  if (!rev) return { grew: false, failures: fails.length, reason: "optimizer returned no proposal (empty) — nothing to govern" };
  return { grew: true, failures: fails.length, revision: rev.id, inForce: isInForce(rev), gate: rev["holo:gate"], proposalBytes: rev["holo:proposalBytes"] };
}

// growSkill(store, corpusHead, opts) → the FULL evolving-skill step as ONE pure transform over the κ-store:
//   read failures → evolve (propose + seal a κ revision) → if (and ONLY if) the revision is IN FORCE,
//   project it to a live agentskills.io skill AND advance the lineage head to its κ.
// This is what makes a skill EVOLVE rather than be re-minted from scratch: pass the prior generation's κ +
// bytes as { skillHead, skillBytes }; a verified child links prov:wasRevisionOf its parent (the chain), and
// the returned skillHead is the κ the caller persists as the new generation. HONEST: a not-in-force
// revision NEVER advances the head (the lineage only grows by verified generations) and projects to null,
// so a failing gate cannot silently change behaviour (L5). Pure given the sampler + gate; re-derivable.
//   opts: { skillHead?, skillBytes?, sampler, gate, optimizerKappa?, minFailures? }
//   → { ...growFromFailures result, projected, skillHead, skillBytes, advanced }
export async function growSkill(store, corpusHead, { skillHead = null, skillBytes = "", sampler = null, gate = {}, optimizerKappa = null, minFailures = 2 } = {}) {
  const res = await growFromFailures(store, corpusHead, { parentKappa: skillHead, parentBytes: skillBytes, optimizerKappa, sampler, gate, minFailures });
  if (!res.grew || !res.revision) return { ...res, projected: null, skillHead, skillBytes, advanced: false };
  const rev = resolve(store, res.revision);
  const skill = rev && isInForce(rev) ? projectSkill(rev) : null;   // project ONLY a verified, in-force generation
  return {
    ...res,
    projected: skill,                                               // the live skill descriptor (or null: not in force / no frontmatter)
    skillHead: skill ? res.revision : skillHead,                    // the κ-addressed lineage head advances ONLY on a verified generation
    skillBytes: skill ? (rev["holo:proposalBytes"] || skillBytes) : skillBytes,
    advanced: !!skill,                                              // did this step lawfully advance the evolving skill?
  };
}

export default { growFromFailures, growSkill };
