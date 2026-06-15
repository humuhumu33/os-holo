// detect.js — runs in the MAIN world (manifest world:"MAIN") so the PAGE can see it. It announces the
// extension to the Holo shell, which then offers the real-debugger tier (true breakpoints/stepping/heap)
// in Dev mode and mounts the DevTools holospace with ?ws=holo-ext. A no-op flag — no capability, just a
// presence signal the shell reads (window.__HOLO_DEVTOOLS_EXT__). The actual debugger attach is opt-in and
// only happens when the operator opens Dev mode on their own holospace.
try { window.__HOLO_DEVTOOLS_EXT__ = "1.0.0"; } catch (e) {}
