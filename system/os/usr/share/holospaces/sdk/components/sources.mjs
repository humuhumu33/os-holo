// sources.mjs — the seed of Hologram OS's content-addressed COMPONENT LIBRARY. Each entry is
// a native holo-blocks single-file component (zero dependency) + concise meta. build-components.mjs
// content-addresses each source into a UOR object (did:holo) and writes components.jsonld — a DCAT
// catalog the World shell browses. Importing one re-derives the SAME κ in the browser (Law L5), so
// a component you pick from the library IS a verifiable, shareable object (holo://κ). The internet
// becomes an object library: this is the seed; any pasted source / URL joins the same κ-space.

export default [
  {
    slug: "button", name: "Button", category: "Controls", license: "MIT", accent: "#1f6feb",
    summary: "A solid accent button that counts its taps. The OS accent flows in automatically.",
    source: `<div class="wrap"><button data-on:click="taps++" data-text="label"></button><div class="n">tapped <b data-text="taps"></b></div></div>
<script type="module">export default { label: "Click me", taps: 0 }</script>
<style>.wrap{height:100%;display:grid;place-content:center;gap:14px;text-align:center;color:#c9d1d9}
button{background:var(--accent,#1f6feb);color:#fff;border:0;border-radius:12px;padding:14px 28px;font:600 16px system-ui;cursor:pointer;box-shadow:0 6px 18px #0006}
button:active{transform:translateY(1px)}.n{color:#8b949e;font:13px system-ui}</style>`,
  },
  {
    slug: "toggle", name: "Switch", category: "Controls", license: "MIT", accent: "#3fb950",
    summary: "An iOS-style toggle. Click to flip; the track animates to the accent when on.",
    source: `<div class="wrap"><div class="sw" data-attr:data-on="on" data-on:click="on=!on"><span class="knob"></span></div><div class="s" data-text="on ? 'On' : 'Off'"></div></div>
<script type="module">export default { on: false }</script>
<style>.wrap{height:100%;display:grid;place-content:center;gap:14px;text-align:center;color:#c9d1d9}
.sw{width:64px;height:36px;border-radius:999px;background:#30363d;cursor:pointer;position:relative;transition:background .18s}
.sw[data-on="true"]{background:var(--accent,#3fb950)}.knob{position:absolute;top:3px;left:3px;width:30px;height:30px;border-radius:50%;background:#fff;transition:transform .18s}
.sw[data-on="true"] .knob{transform:translateX(28px)}.s{font:13px system-ui;color:#8b949e}</style>`,
  },
  {
    slug: "sticky", name: "Sticky Note", category: "Productivity", license: "MIT", accent: "#febc2e",
    summary: "An editable yellow note. Type into it — the text is the component's live state.",
    source: `<textarea class="note" data-model="text" placeholder="Type a note…"></textarea>
<script type="module">export default { text: "" }</script>
<style>.note{display:block;height:100%;width:100%;border:0;background:linear-gradient(160deg,#fde68a,#fbbf24);color:#1a1a1a;font:15px/1.6 system-ui;padding:18px;resize:none;outline:none}</style>`,
  },
  {
    slug: "clock", name: "Clock", category: "Widgets", license: "MIT", accent: "#2dd4bf",
    summary: "A live digital clock — ticks every second, cleans up its timer when closed.",
    source: `<div class="clock"><div class="t" data-text="now"></div><div class="d" data-text="date"></div></div>
<script type="module">export default { now: "", date: "",
  init(){ const tick=()=>{ const d=new Date(); this.now=d.toLocaleTimeString(); this.date=d.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'}); }; tick(); this._i=setInterval(tick,1000); },
  destroy(){ clearInterval(this._i); } }</script>
<style>.clock{height:100%;display:grid;place-content:center;text-align:center;gap:8px;color:#c9d1d9}
.t{font:600 46px ui-monospace,monospace;letter-spacing:1px}.d{color:#8b949e;font:14px system-ui}</style>`,
  },
  {
    slug: "counter", name: "Stepper", category: "Controls", license: "MIT", accent: "#a371f7",
    summary: "A plus/minus stepper around a big live number. Reactive state, no framework.",
    source: `<div class="wrap"><button data-on:click="n--">−</button><div class="n" data-text="n"></div><button data-on:click="n++">+</button></div>
<script type="module">export default { n: 0 }</script>
<style>.wrap{height:100%;display:flex;align-items:center;justify-content:center;gap:20px;color:#c9d1d9}
button{width:50px;height:50px;border-radius:50%;border:1px solid #30363d;background:#161b22;color:#fff;font-size:24px;cursor:pointer}
button:hover{border-color:var(--accent,#a371f7)}.n{font:600 42px ui-monospace,monospace;min-width:90px;text-align:center}</style>`,
  },
  {
    slug: "color", name: "Color Picker", category: "Widgets", license: "MIT", accent: "#ff66cc",
    summary: "A swatch palette; pick one and the big preview + hex update. Lists render with data-for.",
    source: `<div class="wrap"><div class="big" data-attr:style="'background:'+c"></div><div class="row"><template data-for="x in palette"><button data-on:click="c=x" data-attr:style="'background:'+x"></button></template></div><div class="hex" data-text="c"></div></div>
<script type="module">export default { c: "#1f6feb", palette: ["#1f6feb","#3fb950","#f85149","#febc2e","#a371f7","#2dd4bf","#ff66cc","#e6edf3"] }</script>
<style>.wrap{height:100%;display:grid;place-content:center;gap:14px;text-align:center;color:#c9d1d9}
.big{width:160px;height:80px;border-radius:12px;margin:0 auto;border:1px solid #ffffff22}
.row{display:flex;gap:8px;justify-content:center}.row button{width:26px;height:26px;border-radius:7px;border:1px solid #ffffff22;cursor:pointer}
.hex{font:600 16px ui-monospace,monospace}</style>`,
  },
  {
    slug: "calculator", name: "Calculator", category: "Apps", license: "MIT", accent: "#0a84ff",
    summary: "A fully working calculator — a complete little app, content-addressed like any object.",
    source: `<div class="calc"><div class="disp" data-text="display"></div><div class="keys"><template data-for="k in keys"><button data-on:click="press(k)" data-text="k" data-attr:class="'op'.includes(k)?'':''"></button></template></div></div>
<script type="module">export default {
  display: "0", _a: null, _op: null, _fresh: true,
  keys: ["C","÷","×","−","7","8","9","+","4","5","6","=","1","2","3","0","."],
  press(k){
    if(k==="C"){ this.display="0"; this._a=null; this._op=null; this._fresh=true; return; }
    if("+−×÷".includes(k)){ this._a=parseFloat(this.display); this._op=k; this._fresh=true; return; }
    if(k==="="){ if(this._op!=null){ const a=this._a,b=parseFloat(this.display); let r=b; if(this._op==="+")r=a+b; if(this._op==="−")r=a-b; if(this._op==="×")r=a*b; if(this._op==="÷")r=b?a/b:0; this.display=String(+r.toFixed(8)); this._op=null; this._fresh=true; } return; }
    if(this._fresh){ this.display=(k===".")?"0.":k; this._fresh=false; }
    else { if(k==="."&&this.display.includes("."))return; this.display=(this.display==="0"&&k!==".")?k:this.display+k; }
  }
}</script>
<style>.calc{height:100%;display:flex;flex-direction:column;background:#0d1117;color:#c9d1d9}
.disp{padding:18px;text-align:right;font:600 34px ui-monospace,monospace;overflow:hidden}
.keys{flex:1;display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#21262d}
.keys button{border:0;background:#161b22;color:#e6edf3;font:18px ui-monospace,monospace;cursor:pointer}
.keys button:hover{background:#21262d}.keys button:active{background:var(--accent,#0a84ff)}</style>`,
  },

  // ── EXISTING open-source libraries, imported AS-IS and run as FIRST-CLASS, IN-SHELL custom
  //    elements (no iframe). Each entry is a content-addressed LOADING RECIPE: its κ = H(the
  //    descriptor); importing loads the real library module(s) from the CDN and instantiates the
  //    genuine element directly in the holospace, so it's a pure object you move/resize/delete
  //    like any other. (Pinning the bundle bytes by SRI/κ is the verification hardening step —
  //    the recipe is already content-addressed.)
  {
    slug: "sl-button", name: "Button", library: "Shoelace", sourceUrl: "https://shoelace.style", license: "MIT", category: "Controls", accent: "#4e8cff", kind: "pure",
    summary: "Shoelace's themeable button — a real OSS web component, live in your holospace.",
    pure: { tag: "sl-button", modules: ["https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2/cdn/components/button/button.js"], css: ["https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2/cdn/themes/dark.css"], theme: "sl-theme-dark", attrs: { variant: "primary", size: "large" }, text: "Shoelace" },
  },
  {
    slug: "sl-rating", name: "Rating", library: "Shoelace", sourceUrl: "https://shoelace.style", license: "MIT", category: "Controls", accent: "#4e8cff", kind: "pure",
    summary: "Shoelace's interactive star rating, running natively in your holospace.",
    pure: { tag: "sl-rating", modules: ["https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2/cdn/components/rating/rating.js"], css: ["https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2/cdn/themes/dark.css"], theme: "sl-theme-dark", attrs: { label: "Rating" }, style: "font-size:2.2rem" },
  },
  {
    slug: "sl-qr", name: "QR Code", library: "Shoelace", sourceUrl: "https://shoelace.style", license: "MIT", category: "Widgets", accent: "#2dd4bf", kind: "pure",
    summary: "Shoelace's QR code, encoding a holo:// address — a pure object, not a framed page.",
    pure: { tag: "sl-qr-code", modules: ["https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2/cdn/components/qr-code/qr-code.js"], attrs: { value: "holo://hologram-os", fill: "#2dd4bf", background: "transparent", size: "200" } },
  },
  {
    slug: "md-button", name: "Filled Button", library: "Material Web", sourceUrl: "https://material-web.dev", license: "Apache-2.0", category: "Controls", accent: "#a8c7fa", kind: "pure",
    summary: "Google's Material Web filled button (md-filled-button) via esm.sh — real, in-shell.",
    pure: { tag: "md-filled-button", modules: ["https://esm.sh/@material/web@2/button/filled-button.js"], text: "Material" },
  },
  {
    slug: "md-slider", name: "Slider", library: "Material Web", sourceUrl: "https://material-web.dev", license: "Apache-2.0", category: "Controls", accent: "#a8c7fa", kind: "pure",
    summary: "Material Web's slider with ticks — a genuine Google component, first-class.",
    pure: { tag: "md-slider", modules: ["https://esm.sh/@material/web@2/slider/slider.js"], attrs: { ticks: "", value: "50" }, style: "width:240px" },
  },
  // Icons — adopted as κ-pinned UOR objects (ADR-032), rendered by the native <holo-icon> from
  // LOCAL data (no CDN, Law L4). One per-set showcase tile per library; importing drops a live,
  // recolorable icon onto the desktop.
  {
    slug: "tabler", name: "Tabler", library: "Tabler", sourceUrl: "https://tabler.io/icons", license: "MIT", category: "Widgets", accent: "#206bc4", kind: "pure",
    summary: "Tabler — 6,000+ open-source SVG icons, κ-pinned and rendered natively by <holo-icon> (no CDN).",
    pure: { tag: "holo-icon", modules: ["/_shared/holo-icons.js"], attrs: { set: "tabler", name: "brand-tabler", label: "Tabler" }, style: "font-size:84px;color:var(--holo-accent,#206bc4)" },
  },
  {
    slug: "material-symbols", name: "Material Symbols", library: "Material Symbols", sourceUrl: "https://fonts.google.com/icons", license: "Apache-2.0", category: "Widgets", accent: "#a8c7fa", kind: "pure",
    summary: "Google Material Symbols (Outlined) — κ-pinned and rendered natively by <holo-icon> (no CDN).",
    pure: { tag: "holo-icon", modules: ["/_shared/holo-icons.js"], attrs: { set: "material-symbols", name: "rocket-launch", label: "Material Symbols" }, style: "font-size:84px;color:var(--holo-accent,#a8c7fa)" },
  },

  // ── Manim (manim.community) — math animations, native + content-addressed. Each scene is DATA
  //    (mobjects + a play/wait timeline → SVG, in-shell, serverless) and carries its real Manim
  //    Python source as provenance. A Manim-FLAVORED engine, not CPython-in-the-tab; the real-
  //    render path (offline Manim → content-addressed MP4) is a build step.
  {
    slug: "manim-square-circle", name: "Square → Circle", library: "Manim", sourceUrl: "https://www.manim.community", license: "MIT", category: "Animation", accent: "#58a6ff", kind: "manim",
    summary: "Manim's canonical first scene — Create a square, Transform it into a circle, rotate. Live.",
    scene: { bg: "#0b0f17", mobjects: { s: { type: "square", side: 2.6, stroke: "#58a6ff", width: 5 } }, timeline: [ { play: "Create", target: "s", run: 1.2 }, { wait: 0.3 }, { play: "Transform", target: "s", to: { type: "circle", radius: 1.5, stroke: "#3fb950", fill: "#3fb95022" }, run: 1.2 }, { play: "Rotate", target: "s", angle: 3.14159, run: 1 }, { wait: 0.5 } ], manim_src: "from manim import *\n\nclass SquareToCircle(Scene):\n    def construct(self):\n        sq = Square()\n        self.play(Create(sq))\n        self.play(Transform(sq, Circle()))\n        self.play(Rotate(sq, PI))\n        self.wait()" },
  },
  {
    slug: "manim-write", name: "Write & Transform Text", library: "Manim", sourceUrl: "https://www.manim.community", license: "MIT", category: "Animation", accent: "#2dd4bf", kind: "manim",
    summary: "Write text on, then Transform it into another — Manim's text animations, native.",
    scene: { bg: "#0b0f17", mobjects: { t: { type: "text", text: "Hologram", size: 1.2, color: "#e6edf3", opacity: 0 } }, timeline: [ { play: "Write", target: "t", run: 1 }, { wait: 0.4 }, { play: "Transform", target: "t", to: { text: "× Manim", color: "#2dd4bf" }, run: 1 }, { wait: 0.7 } ], manim_src: "from manim import *\n\nclass WriteText(Scene):\n    def construct(self):\n        t = Text('Hologram')\n        self.play(Write(t))\n        self.play(Transform(t, Text('x Manim')))\n        self.wait()" },
  },
  {
    slug: "manim-fadein", name: "Fade In Shapes", library: "Manim", sourceUrl: "https://www.manim.community", license: "MIT", category: "Animation", accent: "#3fb950", kind: "manim",
    summary: "Circle, square and triangle fade in across the frame, then out — FadeIn/FadeOut.",
    scene: { bg: "#0b0f17", mobjects: { a: { type: "circle", radius: 0.9, pos: [-3.2, 0], stroke: "#58a6ff", width: 5, opacity: 0 }, b: { type: "square", side: 1.7, pos: [0, 0], stroke: "#3fb950", width: 5, opacity: 0 }, c: { type: "polygon", points: [[0, 1], [-0.95, -0.6], [0.95, -0.6]], pos: [3.2, 0], stroke: "#f0883e", width: 5, opacity: 0 } }, timeline: [ { play: "FadeIn", target: "a", run: 0.6 }, { play: "FadeIn", target: "b", run: 0.6 }, { play: "FadeIn", target: "c", run: 0.6 }, { wait: 0.7 }, { play: "FadeOut", target: "a", run: 0.5 }, { play: "FadeOut", target: "b", run: 0.5 }, { play: "FadeOut", target: "c", run: 0.5 } ], manim_src: "from manim import *\n\nclass FadeInShapes(Scene):\n    def construct(self):\n        s = [Circle(), Square(), Triangle()]\n        for m in s: self.play(FadeIn(m))\n        self.play(*[FadeOut(m) for m in s])" },
  },
  {
    slug: "manim-sine", name: "Sine Wave", library: "Manim", sourceUrl: "https://www.manim.community", license: "MIT", category: "Animation", accent: "#2dd4bf", kind: "manim",
    summary: "Axes, then a sine curve drawn on with Create — a 3Blue1Brown-style plot.",
    scene: { bg: "#0b0f17", mobjects: { ax: { type: "line", from: [-6, 0], to: [6, 0], stroke: "#30363d", width: 3 }, ay: { type: "line", from: [0, -3], to: [0, 3], stroke: "#30363d", width: 3 }, sine: { type: "plot", fn: "sin", x0: -6, x1: 6, yscale: 1.7, stroke: "#2dd4bf", width: 5 } }, timeline: [ { play: "Create", target: "ax", run: 0.4 }, { play: "Create", target: "ay", run: 0.4 }, { play: "Create", target: "sine", run: 1.8 }, { wait: 0.7 } ], manim_src: "from manim import *\n\nclass SineWave(Scene):\n    def construct(self):\n        ax = Axes()\n        graph = ax.plot(lambda x: np.sin(x), color=TEAL)\n        self.add(ax); self.play(Create(graph))\n        self.wait()" },
  },
  {
    slug: "manim-grow", name: "Grow Circles", library: "Manim", sourceUrl: "https://www.manim.community", license: "MIT", category: "Animation", accent: "#a371f7", kind: "manim",
    summary: "Concentric circles GrowFromCenter — staggered scale-up animation.",
    scene: { bg: "#0b0f17", mobjects: { c1: { type: "circle", radius: 0.6, stroke: "#58a6ff", width: 5, opacity: 0 }, c2: { type: "circle", radius: 1.4, stroke: "#a371f7", width: 5, opacity: 0 }, c3: { type: "circle", radius: 2.2, stroke: "#2dd4bf", width: 5, opacity: 0 } }, timeline: [ { play: "GrowFromCenter", target: "c1", run: 0.6 }, { play: "GrowFromCenter", target: "c2", run: 0.6 }, { play: "GrowFromCenter", target: "c3", run: 0.6 }, { wait: 0.9 } ], manim_src: "from manim import *\n\nclass GrowCircles(Scene):\n    def construct(self):\n        for r in (0.6, 1.4, 2.2):\n            self.play(GrowFromCenter(Circle(radius=r)))\n        self.wait()" },
  },
  {
    slug: "manim-trace", name: "Moving Dot", library: "Manim", sourceUrl: "https://www.manim.community", license: "MIT", category: "Animation", accent: "#f0883e", kind: "manim",
    summary: "A dot traces a circular path (MoveAlongPath) after the ring is drawn.",
    scene: { bg: "#0b0f17", mobjects: { ring: { type: "circle", radius: 2, stroke: "#30363d", width: 3 }, d: { type: "dot", radius: 0.14, fill: "#f0883e", stroke: "#f0883e", pos: [2, 0] } }, timeline: [ { play: "Create", target: "ring", run: 1 }, { play: "Trace", target: "d", path: { type: "circle", radius: 2 }, run: 2.2 }, { wait: 0.4 } ], manim_src: "from manim import *\n\nclass MovingDot(Scene):\n    def construct(self):\n        ring = Circle(radius=2)\n        dot = Dot(ring.point_from_proportion(0))\n        self.play(Create(ring))\n        self.play(MoveAlongPath(dot, ring), run_time=2)\n        self.wait()" },
  },
];
