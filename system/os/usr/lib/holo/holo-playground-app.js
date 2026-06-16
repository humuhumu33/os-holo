// holo-playground-app.js — the IN-FRAME bootstrap. Injected post-load into every same-origin holo app
// (the same lifecycle as Ambient Q, shell.html), this wires the Holo Playground agent INSIDE the app so
// every element becomes right-click-editable. It is marked [data-holo-ephemeral] by the injector, so the
// agent's own serialise drops it — the sealed κ never contains this script (Law L5).
//
// One direction only: the agent serialises (ephemeral-stripped) and posts the bytes UP to the shell, which
// calls the ONE primitive createLiveEditor.edit. The agent has no sealer of its own.

import { createPlaygroundAgent } from "./holo-playground-agent.mjs";

(function () {
  try {
    if (window.__holoPlayground) return;
    const tag = document.getElementById("holo-playground-app");
    const surfaceId = (tag && tag.dataset && tag.dataset.surface) || "";
    if (!surfaceId) return;                         // honest: no surface id → nothing to attribute edits to
    const agent = createPlaygroundAgent({
      doc: document,
      win: window,
      surfaceId,
      postUp: (msg) => { try { parent.postMessage(msg, "*"); } catch (e) {} },   // host verifies by event.source identity, not origin
    });
    agent.mount();
    window.__holoPlayground = agent;
    // OFF by default. If this surface was already in Playground mode when the frame (re)loaded, the shell
    // stamps data-pg-active="1" on the injector so the mode survives a reload; otherwise stay dormant.
    if (tag.dataset.pgActive === "1") agent.setActive(true);
  } catch (e) { /* an app that refuses injection simply isn't element-editable — honest, no crash */ }
})();
