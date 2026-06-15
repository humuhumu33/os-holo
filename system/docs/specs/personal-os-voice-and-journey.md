# The Personal OS — Voice & Journey

*The canonical reference for making Hologram feel like the sovereign user's own sanctuary. Tone is
locked here; every copy change across the OS should trace back to this document.*

> The constitution already names the user: **"Operator — you, the sovereign user."** This work makes
> that abstract "you" resolve to a real person, on every surface, without weakening a single
> guarantee. Personalization touches voice, copy, and feeling — never determinism, κ-addressing, the
> conscience gate, or any sovereignty guarantee. Honesty (P1) and caretaker duty (P8) are the floor.

---

## The story

**"This machine is mine. From here, I can build my world."**

The arc is emotional, not technical: **safety first, then curiosity.** The user arrives somewhere
unmistakably theirs. From that safety, curiosity pulls them outward — and every horizon is reached
*from* the sanctuary, never by leaving it. The OS never tells the user's story. It hands them the
instrument and gets out of the way.

Our purpose, stated plainly: **enable every Hologram OS sovereign user to tell their story.**

---

## The voice doctrine

1. **Speak as the user's, not to a stranger.** The OS narrates from inside the user's world. Labels
   about their things use first person ("My spaces"). Never "Welcome back."
2. **Use the name sparingly** — thresholds and milestones (login, a daily greeting, a real
   confirmation), never every line. Warm, never naggy.
3. **Honest before warm (P1).** The constitution invites verification, not trust. Never overclaim.
   Intimacy through truth, not flattery.
4. **Why → how → what, implicit.** Each line carries its reason without naming machinery. If it needs
   a glossary, cut it.
5. **Less is more.** Remove before adding. One idea per line. The shortest true sentence wins.
6. **Magical because effortless.** Delight is the absence of friction, never an announcement of it.
7. **Q is part of the user's own mind** — sovereign, on-device, calm. A trusted faculty, never a
   vendor's assistant.

**Register:** calm & spare (Jobs-grade restraint). **Name usage:** sparing. Both locked.

---

## The journey — four verbs, revealed in time

Complexity is **earned**, not hidden forever. Each stage hands the user one new power and reveals
exactly as much of the machine as that power requires — no κ, no Law L5, no "content-addressed" until
the moment it makes them *more* sovereign, not less. The same word that would intimidate at Stage 0
empowers at Stage 4. That is progressive disclosure working.

| Stage | Power | What's revealed | The aha (they connect it themselves) |
|---|---|---|---|
| **0 · Arrive** | *It's mine* | nothing technical | "It opened as if it were waiting for me." |
| **1 · Read** | *I see my world* | it's all here, on my machine | "Nothing leaves unless I say so." |
| **2 · Write** | *I author it* | I don't use apps — I make them | "The machine builds alongside me." |
| **3 · Own** | *I can prove it* | verify, don't trust (Law L5 surfaces here) | "I don't have to believe it. I can check it." |
| **4 · Explore** | *I bring the world in* | the whole web, on my terms | "The internet is a library I pull into my sanctuary." |

### Stage 0 — Arrive (threshold)
Surfaces: `index.html`, `splash.html`, `login.html`.
- Splash already cycles **"Own your compute · data · intelligence · future"** — the overture. Keep.
- Magic: the name *is* the welcome. Returning users already see their name as the login headline
  (it renders `u.label`). Unlock reads **"It's me"**; status reads **"Opening my space…"**.

### Stage 1 — Read (I see my world)
Surfaces: `home.html`, `holo-files.js`, `holo-widgets.js`, `holo-dock.js`.
- Magic (already half-built): the clock widget greets by time of day and falls back to the
  `HoloIdentity` name — so first paint says **"Good morning, &lt;name&gt;."** automatically.
- File locations and the home reassurance shift to first person ("on my machine — nothing leaves").

### Stage 2 — Write (I author my life)
Surfaces: `holo-voice.js`, `q/studio-demo.html`, `holo-edit.js`.
- Magic (the biggest aha): Create's **Restyle** self-heal loop — the user watches the OS rebuild
  itself coherently and realizes they compose software, not just use it. Don't explain the
  orchestrator; let them connect the dot.
- Q speaks as a faculty of the user's own mind: calm first-person, name held for milestones.

### Stage 3 — Own (I can prove it)
Surfaces: `shell.html` (privacy + version), `holo-terms.js`, `holo-privacy.js`.
- Already strong: "You decide what anyone sees", "take it back any time", "first party: you". Barely
  touch.
- Magic: the self-verify pill re-derives the OS in front of the user ("[N] objects checked",
  "change one byte and it won't run"). Law L5 surfaces here as **power**, not jargon.

### Stage 4 — Explore (bring the world in)
Surfaces: `holo-import.mjs`, Hub, DevTools (F12), `holo-mind-ui.js`.
- Magic: paste a GitHub URL → the web becomes the user's own governed app.
- Progressive-disclosure fix: import verdicts lead with one human line, machinery one tap deeper.
- Deep κ-CDP / Mind copy stays dense — by F12 the vocabulary is already theirs.

---

## How it stays one coherent story
- Read → Write → Own → Explore is a single outward spiral; each stage launches from safety.
- The constitution is the floor, never the subject. P1 keeps every line honest; P8 keeps the OS in
  service; the red lines (P5/P6/P7) are untouched. The voice *embodies* the law instead of citing it.
- The landing beat: the first time the self-verify count finishes in front of the user, "this machine
  is mine" stops being a slogan and becomes something they just watched be true.

---

## Operating notes
- Reseal any touched bytes (`npm run reseal`); keep all witnesses green and the constitution row
  re-deriving.
- Honor the design language: golden-ratio scale, 16px readability floor, no braille UI.
- The Read tool drops the em dashes (`—`) these files use — match ASCII-only fragments when editing.
