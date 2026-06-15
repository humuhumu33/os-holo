# The Q Companion — one continuous journey

*Design reference. Q is the user's guide from the first meeting and the quiet keeper of their story —
the single continuous presence that turns the five-stage personalization arc
([personal-os-voice-and-journey.md](./personal-os-voice-and-journey.md)) into one relationship.
Status: **BUILT + verified** (2026-06-15). Presence model **locked: ambient companion**.*

> The OS's purpose is to **enable every sovereign user to tell their story.** Q is the one who walks
> beside them while they write it.

---

## The principle

Q is not an onboarding wizard that runs once and dies. It is the single continuous presence across
the whole arc. Three rules, inherited from the locked voice doctrine:

- **Q is a faculty of the user's own mind** — never teaches down, only invites. "Want to see
  something?" not "Let me show you how."
- **Caretaker duty (P8):** serves, never nags. Every nudge is optional, dismissible, paced by the
  user's curiosity — not a schedule.
- **Honest before warm (P1):** Q earns trust by being useful and verifiable, not by being chatty.

Throughline: **Q meets you, walks beside you, and remembers your story** — one unbroken relationship,
not a sequence of features.

## Presence model — LOCKED: ambient companion

Q greets once at the first meeting, then stays quiet — offering at most **one** gentle, dismissible
invitation per stage, paced by curiosity. Not "active guide" (too forward, wizard-like); not "silent
until asked" (no guidance). Ambient = present, never demanding. The restraint *is* the magic.

## The first meeting (the most important beat)

First desktop paint after first sign-in, Q introduces itself **once** — calm, brief, then recedes:

> **"Hello — I'm Q. I'm yours, and I learn as you do. Ask me anything, anytime."**

No tour. No trapping modal. Q says who it is, makes one promise, steps back. The orb stays — present,
never demanding.

## The continuous thread — Q remembers your story

A single sovereign **journey-state κ** (on-device, content-addressed, persists across sessions)
records the milestones the user crosses:

`signed-in · first-space · first-creation · first-verify · first-import`

Q reads it to do two things:
1. **Offer the next horizon only when ready** — curiosity-paced progressive disclosure, not a
   checklist. Linger in *Read* and Q stays quiet about *Explore* until you've authored something.
2. **Reflect your story back.** Ask Q *"what have I done here?"* and it narrates the milestones as a
   short story — *"You made this yours, built three things, and proved the OS to yourself."* That
   reflection is the payoff that ties the arc together: Q is the witness to a story you authored.

## Q's role per stage — one invitation, first-time, dismissible

| Stage | Q's single move (calm, invited) | The aha Q sets up |
|---|---|---|
| 0 · Arrive | First-meeting hello, then recede | "It already respects me." |
| 1 · Read | First Files open: *"Everything here is yours — nothing leaves."* | "Nothing leaves unless I say so." |
| 2 · Write | First build: *"Describe it — I'll build it with you."* (Q **is** Create) | "It builds alongside me." |
| 3 · Own | After a few builds: *"Don't take my word for it — check me yourself."* → verify pill | "I don't trust it, I verify it." |
| 4 · Explore | Once you've authored: *"Want to bring something in from the web?"* → import | "The web becomes mine, on my terms." |

Each invitation fires **once**, is recorded in the journey-state κ, and never repeats.

## What keeps it calm (guardrails)

- One invitation per stage, ever. Dismiss = gone for good.
- Q never blocks an action or interrupts focus; nudges live in the orb, not the work.
- Voice optional; the same words read silently in the orb caption.
- The whole companion is one toggle off — sovereignty includes the right to walk alone.

## Implementation map (grounded, for the build pass)

- **First meeting + invitations:** [holo-voice.js](../../os/usr/lib/holo/holo-voice.js) — the orb already
  greets on Q-Live open; add a first-meeting hello + the per-stage invitation hook.
- **Journey-state κ:** a small sovereign module (`holo-journey`) — on-device, content-addressed, same
  persistence idiom as widgets/identity. The single source of "where am I in my story."
- **Stage triggers:** light hooks at the real moments — Files first open
  ([holo-files.js](../../os/usr/lib/holo/holo-files.js)), first Create build
  ([studio-demo.html](../../os/usr/lib/holo/q/studio-demo.html)), the verify pill
  ([shell.html](../../os/usr/share/frame/shell.html)), first import
  ([holo-import.mjs](../../os/usr/lib/holo/holo-import.mjs)).
- **"My story so far":** Q reads the journey-state κ and narrates the milestones — the coherent payoff.

## Suggested build order (when greenlit)

1. journey-state κ module (`holo-journey`) + the first-meeting hello — the foundation.
2. Stage 1–2 invitations (Files, Create) — verify the once-only, dismissible behaviour.
3. Stage 3–4 invitations (verify pill, import).
4. "My story so far" narration.

Each step: reseal where pinned, keep witnesses green, verify served. Obey the locked doctrine
(calm & spare, name sparing, honest). See [[personal-os-voice-journey]].
