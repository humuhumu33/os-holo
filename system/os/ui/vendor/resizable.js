"use client";

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/resizable.tsx
import { GripVerticalIcon } from "lucide-react";

// http-url:https://esm.sh/react-resizable-panels@4.11.2/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/react-resizable-panels.mjs
import { jsx as se } from "react/jsx-runtime";
import { useState as Z, useCallback as ae, useId as pt, useLayoutEffect as Je, useEffect as ve, useRef as T, createContext as ht, useImperativeHandle as Ue, useMemo as be, useSyncExternalStore as qe, useContext as gt } from "react";
function vt(e, t) {
  let n = getComputedStyle(e), o = parseFloat(n.fontSize);
  return t * o;
}
function mt(e, t) {
  let n = getComputedStyle(e.ownerDocument.documentElement), o = parseFloat(n.fontSize);
  return t * o;
}
function yt(e) {
  return e / 100 * window.innerHeight;
}
function bt(e) {
  return e / 100 * window.innerWidth;
}
function zt(e) {
  switch (typeof e) {
    case "number":
      return [e, "px"];
    case "string": {
      let t = parseFloat(e);
      return e.endsWith("%") ? [t, "%"] : e.endsWith("px") ? [t, "px"] : e.endsWith("rem") ? [t, "rem"] : e.endsWith("em") ? [t, "em"] : e.endsWith("vh") ? [t, "vh"] : e.endsWith("vw") ? [t, "vw"] : [t, "%"];
    }
  }
}
function re({ groupSize: e, panelElement: t, styleProp: n }) {
  let o, [r, a] = zt(n);
  switch (a) {
    case "%": {
      o = r / 100 * e;
      break;
    }
    case "px": {
      o = r;
      break;
    }
    case "rem": {
      o = mt(t, r);
      break;
    }
    case "em": {
      o = vt(t, r);
      break;
    }
    case "vh": {
      o = yt(r);
      break;
    }
    case "vw": {
      o = bt(r);
      break;
    }
  }
  return o;
}
function I(e) {
  return parseFloat(e.toFixed(3));
}
function te({ group: e }) {
  let { orientation: t, panels: n } = e;
  return n.reduce((o, r) => (o += t === "horizontal" ? r.element.offsetWidth : r.element.offsetHeight, o), 0);
}
function ze(e) {
  let { panels: t } = e, n = te({ group: e });
  return n === 0 ? t.map((o) => ({ groupResizeBehavior: o.panelConstraints.groupResizeBehavior, collapsedSize: 0, collapsible: o.panelConstraints.collapsible === true, defaultSize: void 0, disabled: o.panelConstraints.disabled, minSize: 0, maxSize: 100, panelId: o.id })) : t.map((o) => {
    let { element: r, panelConstraints: a } = o, c = 0;
    if (a.collapsedSize !== void 0) {
      let u = re({ groupSize: n, panelElement: r, styleProp: a.collapsedSize });
      c = I(u / n * 100);
    }
    let s;
    if (a.defaultSize !== void 0) {
      let u = re({ groupSize: n, panelElement: r, styleProp: a.defaultSize });
      s = I(u / n * 100);
    }
    let i = 0;
    if (a.minSize !== void 0) {
      let u = re({ groupSize: n, panelElement: r, styleProp: a.minSize });
      i = I(u / n * 100);
    }
    let l = 100;
    if (a.maxSize !== void 0) {
      let u = re({ groupSize: n, panelElement: r, styleProp: a.maxSize });
      l = I(u / n * 100);
    }
    return { groupResizeBehavior: a.groupResizeBehavior, collapsedSize: c, collapsible: a.collapsible === true, defaultSize: s, disabled: a.disabled, minSize: i, maxSize: l, panelId: o.id };
  });
}
function P(e, t = "Assertion error") {
  if (!e) throw Error(t);
}
function Se(e, t) {
  return Array.from(t).sort(e === "horizontal" ? St : wt);
}
function St(e, t) {
  let n = e.element.offsetLeft - t.element.offsetLeft;
  return n !== 0 ? n : e.element.offsetWidth - t.element.offsetWidth;
}
function wt(e, t) {
  let n = e.element.offsetTop - t.element.offsetTop;
  return n !== 0 ? n : e.element.offsetHeight - t.element.offsetHeight;
}
function Ke(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function Qe(e, t) {
  return { x: e.x >= t.left && e.x <= t.right ? 0 : Math.min(Math.abs(e.x - t.left), Math.abs(e.x - t.right)), y: e.y >= t.top && e.y <= t.bottom ? 0 : Math.min(Math.abs(e.y - t.top), Math.abs(e.y - t.bottom)) };
}
function xt({ orientation: e, rects: t, targetRect: n }) {
  let o = { x: n.x + n.width / 2, y: n.y + n.height / 2 }, r, a = Number.MAX_VALUE;
  for (let c of t) {
    let { x: s, y: i } = Qe(o, c), l = e === "horizontal" ? s : i;
    l < a && (a = l, r = c);
  }
  return P(r, "No rect found"), r;
}
var de;
function Ct() {
  return de === void 0 && (typeof matchMedia == "function" ? de = !!matchMedia("(pointer:coarse)").matches : de = false), de;
}
function Ze(e) {
  let { element: t, orientation: n, panels: o, separators: r } = e, a = Se(n, Array.from(t.children).filter(Ke).map((m) => ({ element: m }))).map(({ element: m }) => m), c = [], s = false, i = false, l = -1, u = -1, g = 0, f, b = [];
  {
    let m = -1;
    for (let d of a) d.hasAttribute("data-panel") && (m++, d.hasAttribute("data-disabled") || (g++, l === -1 && (l = m), u = m));
  }
  if (g > 1) {
    let m = -1;
    for (let d of a) if (d.hasAttribute("data-panel")) {
      m++;
      let h = o.find((p) => p.element === d);
      if (h) {
        if (f) {
          let p = f.element.getBoundingClientRect(), z = d.getBoundingClientRect(), S;
          if (i) {
            let y = n === "horizontal" ? new DOMRect(p.right, p.top, 0, p.height) : new DOMRect(p.left, p.bottom, p.width, 0), v = n === "horizontal" ? new DOMRect(z.left, z.top, 0, z.height) : new DOMRect(z.left, z.top, z.width, 0);
            switch (b.length) {
              case 0: {
                S = [y, v];
                break;
              }
              case 1: {
                let L = b[0], k = xt({ orientation: n, rects: [p, z], targetRect: L.element.getBoundingClientRect() });
                S = [L, k === p ? v : y];
                break;
              }
              default: {
                S = b;
                break;
              }
            }
          } else b.length ? S = b : S = [n === "horizontal" ? new DOMRect(p.right, z.top, z.left - p.right, z.height) : new DOMRect(z.left, p.bottom, z.width, z.top - p.bottom)];
          for (let y of S) {
            let v = "width" in y ? y : y.element.getBoundingClientRect(), L = Ct() ? e.resizeTargetMinimumSize.coarse : e.resizeTargetMinimumSize.fine;
            if (v.width < L) {
              let E = L - v.width;
              v = new DOMRect(v.x - E / 2, v.y, v.width + E, v.height);
            }
            if (v.height < L) {
              let E = L - v.height;
              v = new DOMRect(v.x, v.y - E / 2, v.width, v.height + E);
            }
            let k = m <= l || m > u;
            !s && !k && c.push({ group: e, groupSize: te({ group: e }), panels: [f, h], separator: "width" in y ? void 0 : y, rect: v }), s = false;
          }
        }
        i = false, f = h, b = [];
      }
    } else if (d.hasAttribute("data-separator")) {
      d.ariaDisabled !== null && (s = true);
      let h = r.find((p) => p.element === d);
      h ? b.push(h) : (f = void 0, b = []);
    } else i = true;
  }
  return c;
}
var ge = class {
  #e = {};
  addListener(t, n) {
    let o = this.#e[t];
    return o === void 0 ? this.#e[t] = [n] : o.includes(n) || o.push(n), () => {
      this.removeListener(t, n);
    };
  }
  emit(t, n) {
    let o = this.#e[t];
    if (o !== void 0) if (o.length === 1) o[0].call(null, n);
    else {
      let r = false, a = null, c = Array.from(o);
      for (let s = 0; s < c.length; s++) {
        let i = c[s];
        try {
          i.call(null, n);
        } catch (l) {
          a === null && (r = true, a = l);
        }
      }
      if (r) throw a;
    }
  }
  removeAllListeners() {
    this.#e = {};
  }
  removeListener(t, n) {
    let o = this.#e[t];
    if (o !== void 0) {
      let r = o.indexOf(n);
      r >= 0 && o.splice(r, 1);
    }
  }
};
var F = /* @__PURE__ */ new Map();
var _e = new ge();
function Pt(e) {
  F = new Map(F), F.delete(e);
}
function De(e, t) {
  for (let [n] of F) if (n.id === e) return n;
}
function W(e, t) {
  for (let [n, o] of F) if (n.id === e) return o;
  if (t) throw Error(`Could not find data for Group with id ${e}`);
}
function J() {
  return F;
}
function we(e, t) {
  return _e.addListener("groupChange", (n) => {
    n.group.id === e && t(n);
  });
}
function $(e, t) {
  let n = F.get(e);
  F = new Map(F), F.set(e, t), _e.emit("groupChange", { group: e, prev: n, next: t });
}
function Lt(e, t, n) {
  let o, r = { x: 1 / 0, y: 1 / 0 };
  for (let a of t) {
    let c = Qe(n, a.rect);
    switch (e) {
      case "horizontal": {
        c.x <= r.x && (o = a, r = c);
        break;
      }
      case "vertical": {
        c.y <= r.y && (o = a, r = c);
        break;
      }
    }
  }
  return o ? { distance: r, hitRegion: o } : void 0;
}
function kt(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
function Mt(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  let n = { a: Oe(e), b: Oe(t) }, o;
  for (; n.a.at(-1) === n.b.at(-1); ) o = n.a.pop(), n.b.pop();
  P(o, "Stacking order can only be calculated for elements with a common ancestor");
  let r = { a: Te(Ie(n.a)), b: Te(Ie(n.b)) };
  if (r.a === r.b) {
    let a = o.childNodes, c = { a: n.a.at(-1), b: n.b.at(-1) }, s = a.length;
    for (; s--; ) {
      let i = a[s];
      if (i === c.a) return 1;
      if (i === c.b) return -1;
    }
  }
  return Math.sign(r.a - r.b);
}
var Et = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function Rt(e) {
  let t = getComputedStyle(et(e) ?? e).display;
  return t === "flex" || t === "inline-flex";
}
function Dt(e) {
  let t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || Rt(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || Et.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Ie(e) {
  let t = e.length;
  for (; t--; ) {
    let n = e[t];
    if (P(n, "Missing node"), Dt(n)) return n;
  }
  return null;
}
function Te(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function Oe(e) {
  let t = [];
  for (; e; ) t.push(e), e = et(e);
  return t;
}
function et(e) {
  let { parentNode: t } = e;
  return kt(t) ? t.host : t;
}
function It(e, t) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function Tt({ groupElement: e, hitRegion: t, pointerEventTarget: n }) {
  if (!Ke(n) || n.contains(e) || e.contains(n)) return true;
  if (Mt(n, e) > 0) {
    let o = n;
    for (; o; ) {
      if (o.contains(e)) return true;
      if (It(o.getBoundingClientRect(), t)) return false;
      o = o.parentElement;
    }
  }
  return true;
}
function xe(e, t) {
  let n = [];
  return t.forEach((o, r) => {
    if (r.disabled) return;
    let a = Ze(r), c = Lt(r.orientation, a, { x: e.clientX, y: e.clientY });
    c && c.distance.x <= 0 && c.distance.y <= 0 && Tt({ groupElement: r.element, hitRegion: c.hitRegion.rect, pointerEventTarget: e.target }) && n.push(c.hitRegion);
  }), n;
}
function Ot(e, t) {
  if (e.length !== t.length) return false;
  for (let n = 0; n < e.length; n++) if (e[n] != t[n]) return false;
  return true;
}
function D(e, t, n = 0) {
  return Math.abs(I(e) - I(t)) <= n;
}
function A(e, t) {
  return D(e, t) ? 0 : e > t ? 1 : -1;
}
function Q({ overrideDisabledPanels: e, panelConstraints: t, prevSize: n, size: o }) {
  let { collapsedSize: r = 0, collapsible: a, disabled: c, maxSize: s = 100, minSize: i = 0 } = t;
  if (c && !e) return n;
  if (A(o, i) < 0) if (a) {
    let l = (r + i) / 2;
    A(o, l) < 0 ? o = r : o = i;
  } else o = i;
  return o = Math.min(s, o), o = I(o), o;
}
function le({ delta: e, initialLayout: t, panelConstraints: n, pivotIndices: o, prevLayout: r, trigger: a }) {
  if (D(e, 0)) return t;
  let c = a === "imperative-api", s = Object.values(t), i = Object.values(r), l = [...s], [u, g] = o;
  P(u != null, "Invalid first pivot index"), P(g != null, "Invalid second pivot index");
  let f = 0;
  switch (a) {
    case "keyboard": {
      {
        let d = e < 0 ? g : u, h = n[d];
        P(h, `Panel constraints not found for index ${d}`);
        let { collapsedSize: p = 0, collapsible: z, minSize: S = 0 } = h;
        if (z) {
          let y = s[d];
          if (P(y != null, `Previous layout not found for panel index ${d}`), D(y, p)) {
            let v = S - y;
            A(v, Math.abs(e)) > 0 && (e = e < 0 ? 0 - v : v);
          }
        }
      }
      {
        let d = e < 0 ? u : g, h = n[d];
        P(h, `No panel constraints found for index ${d}`);
        let { collapsedSize: p = 0, collapsible: z, minSize: S = 0 } = h;
        if (z) {
          let y = s[d];
          if (P(y != null, `Previous layout not found for panel index ${d}`), D(y, S)) {
            let v = y - p;
            A(v, Math.abs(e)) > 0 && (e = e < 0 ? 0 - v : v);
          }
        }
      }
      break;
    }
    default: {
      let d = e < 0 ? g : u, h = n[d];
      P(h, `Panel constraints not found for index ${d}`);
      let p = s[d], { collapsible: z, collapsedSize: S, minSize: y } = h;
      if (z && A(p, y) < 0) if (e > 0) {
        let v = y - S, L = v / 2, k = p + e;
        A(k, y) < 0 && (e = A(e, L) <= 0 ? 0 : v);
      } else {
        let v = y - S, L = 100 - v / 2, k = p - e;
        A(k, y) < 0 && (e = A(100 + e, L) > 0 ? 0 : -v);
      }
      break;
    }
  }
  {
    let d = e < 0 ? 1 : -1, h = e < 0 ? g : u, p = 0;
    for (; ; ) {
      let S = s[h];
      P(S != null, `Previous layout not found for panel index ${h}`);
      let y = Q({ overrideDisabledPanels: c, panelConstraints: n[h], prevSize: S, size: 100 }) - S;
      if (p += y, h += d, h < 0 || h >= n.length) break;
    }
    let z = Math.min(Math.abs(e), Math.abs(p));
    e = e < 0 ? 0 - z : z;
  }
  {
    let d = e < 0 ? u : g;
    for (; d >= 0 && d < n.length; ) {
      let h = Math.abs(e) - Math.abs(f), p = s[d];
      P(p != null, `Previous layout not found for panel index ${d}`);
      let z = p - h, S = Q({ overrideDisabledPanels: c, panelConstraints: n[d], prevSize: p, size: z });
      if (!D(p, S) && (f += p - S, l[d] = S, f.toFixed(3).localeCompare(Math.abs(e).toFixed(3), void 0, { numeric: true }) >= 0)) break;
      e < 0 ? d-- : d++;
    }
  }
  if (Ot(i, l)) return r;
  {
    let d = e < 0 ? g : u, h = s[d];
    P(h != null, `Previous layout not found for panel index ${d}`);
    let p = h + f, z = Q({ overrideDisabledPanels: c, panelConstraints: n[d], prevSize: h, size: p });
    if (l[d] = z, !D(z, p)) {
      let S = p - z, y = e < 0 ? g : u;
      for (; y >= 0 && y < n.length; ) {
        let v = l[y];
        P(v != null, `Previous layout not found for panel index ${y}`);
        let L = v + S, k = Q({ overrideDisabledPanels: c, panelConstraints: n[y], prevSize: v, size: L });
        if (D(v, k) || (S -= k - v, l[y] = k), D(S, 0)) break;
        e > 0 ? y-- : y++;
      }
    }
  }
  let b = Object.values(l).reduce((d, h) => h + d, 0);
  if (!D(b, 100, 0.1)) return r;
  let m = Object.keys(r);
  return l.reduce((d, h, p) => (d[m[p]] = h, d), {});
}
function H(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (let n in e) if (t[n] === void 0 || A(e[n], t[n]) !== 0) return false;
  return true;
}
function Y({ layout: e, panelConstraints: t }) {
  let n = Object.values(e), o = [...n], r = o.reduce((s, i) => s + i, 0);
  if (o.length !== t.length) throw Error(`Invalid ${t.length} panel layout: ${o.map((s) => `${s}%`).join(", ")}`);
  if (!D(r, 100) && o.length > 0) for (let s = 0; s < t.length; s++) {
    let i = o[s];
    P(i != null, `No layout data found for index ${s}`);
    let l = 100 / r * i;
    o[s] = l;
  }
  let a = 0;
  for (let s = 0; s < t.length; s++) {
    let i = n[s];
    P(i != null, `No layout data found for index ${s}`);
    let l = o[s];
    P(l != null, `No layout data found for index ${s}`);
    let u = Q({ overrideDisabledPanels: true, panelConstraints: t[s], prevSize: i, size: l });
    l != u && (a += l - u, o[s] = u);
  }
  if (!D(a, 0)) for (let s = 0; s < t.length; s++) {
    let i = o[s];
    P(i != null, `No layout data found for index ${s}`);
    let l = i + a, u = Q({ overrideDisabledPanels: true, panelConstraints: t[s], prevSize: i, size: l });
    if (i !== u && (a -= u - i, o[s] = u, D(a, 0))) break;
  }
  let c = Object.keys(e);
  return o.reduce((s, i, l) => (s[c[l]] = i, s), {});
}
function tt({ groupId: e, panelId: t }) {
  let n = () => {
    let i = J();
    for (let [l, { defaultLayoutDeferred: u, derivedPanelConstraints: g, layout: f, groupSize: b, separatorToPanels: m }] of i) if (l.id === e) return { defaultLayoutDeferred: u, derivedPanelConstraints: g, group: l, groupSize: b, layout: f, separatorToPanels: m };
    throw Error(`Group ${e} not found`);
  }, o = () => {
    let i = n().derivedPanelConstraints.find((l) => l.panelId === t);
    if (i !== void 0) return i;
    throw Error(`Panel constraints not found for Panel ${t}`);
  }, r = () => {
    let i = n().group.panels.find((l) => l.id === t);
    if (i !== void 0) return i;
    throw Error(`Layout not found for Panel ${t}`);
  }, a = () => {
    let i = n().layout[t];
    if (i !== void 0) return i;
    throw Error(`Layout not found for Panel ${t}`);
  }, c = ({ nextSize: i, panels: l, prevLayout: u, derivedPanelConstraints: g }) => {
    let f = a(), b = l.findIndex((h) => h.id === t), m = b === 0, d = b === l.length - 1;
    if (d && i < f && (m || l.slice(0, b).every((h, p) => {
      let z = g[p];
      return z?.collapsible && D(z.collapsedSize, u[z.panelId]);
    }))) {
      let h = l.slice(0, b).reduce((p, z) => p + u[z.id], 0);
      return { ...u, [t]: I(100 - h) };
    }
    return le({ delta: d ? f - i : i - f, initialLayout: u, panelConstraints: g, pivotIndices: d ? [b - 1, b] : [b, b + 1], prevLayout: u, trigger: "imperative-api" });
  }, s = (i) => {
    let l = a();
    if (i === l) return;
    let { defaultLayoutDeferred: u, derivedPanelConstraints: g, group: f, groupSize: b, layout: m, separatorToPanels: d } = n(), h = c({ nextSize: i, panels: f.panels, prevLayout: m, derivedPanelConstraints: g }), p = Y({ layout: h, panelConstraints: g });
    H(m, p) || $(f, { defaultLayoutDeferred: u, derivedPanelConstraints: g, groupSize: b, layout: p, separatorToPanels: d });
  };
  return { collapse: () => {
    let { collapsible: i, collapsedSize: l } = o(), { mutableValues: u } = r(), g = a();
    i && g !== l && (u.expandToSize = g, s(l));
  }, expand: () => {
    let { collapsible: i, collapsedSize: l, minSize: u } = o(), { mutableValues: g } = r(), f = a();
    if (i && f === l) {
      let b = g.expandToSize ?? u;
      b === 0 && (b = 1), s(b);
    }
  }, getSize: () => {
    let { group: i } = n(), l = a(), { element: u } = r(), g = i.orientation === "horizontal" ? u.offsetWidth : u.offsetHeight;
    return { asPercentage: l, inPixels: g };
  }, isCollapsed: () => {
    let { collapsible: i, collapsedSize: l } = o(), u = a();
    return i && D(l, u);
  }, resize: (i) => {
    let { group: l } = n(), { element: u } = r(), g = te({ group: l }), f = re({ groupSize: g, panelElement: u, styleProp: i }), b = I(f / g * 100);
    s(b);
  } };
}
function Ne(e) {
  if (e.defaultPrevented) return;
  let t = J();
  xe(e, t).forEach((n) => {
    if (n.separator && !n.separator.disableDoubleClick) {
      let o = n.panels.find((r) => r.panelConstraints.defaultSize !== void 0);
      if (o) {
        let r = o.panelConstraints.defaultSize, a = tt({ groupId: n.group.id, panelId: o.id });
        a && r !== void 0 && (a.resize(r), e.preventDefault());
      }
    }
  });
}
function pe(e) {
  let t = J();
  for (let [n] of t) if (n.separators.some((o) => o.element === e)) return n;
  throw Error("Could not find parent Group for separator element");
}
function nt({ groupId: e }) {
  let t = () => {
    let n = J();
    for (let [o, r] of n) if (o.id === e) return { group: o, ...r };
    throw Error(`Could not find Group with id "${e}"`);
  };
  return { getLayout() {
    let { defaultLayoutDeferred: n, layout: o } = t();
    return n ? {} : o;
  }, setLayout(n) {
    let { defaultLayoutDeferred: o, derivedPanelConstraints: r, group: a, groupSize: c, layout: s, separatorToPanels: i } = t(), l = Y({ layout: n, panelConstraints: r });
    return o ? s : (H(s, l) || $(a, { defaultLayoutDeferred: o, derivedPanelConstraints: r, groupSize: c, layout: l, separatorToPanels: i }), l);
  } };
}
function V(e, t) {
  let n = pe(e), o = W(n.id, true), r = n.separators.find((u) => u.element === e);
  P(r, "Matching separator not found");
  let a = o.separatorToPanels.get(r);
  P(a, "Matching panels not found");
  let c = a.map((u) => n.panels.indexOf(u)), s = nt({ groupId: n.id }).getLayout(), i = le({ delta: t, initialLayout: s, panelConstraints: o.derivedPanelConstraints, pivotIndices: c, prevLayout: s, trigger: "keyboard" }), l = Y({ layout: i, panelConstraints: o.derivedPanelConstraints });
  H(s, l) || $(n, { defaultLayoutDeferred: o.defaultLayoutDeferred, derivedPanelConstraints: o.derivedPanelConstraints, groupSize: o.groupSize, layout: l, separatorToPanels: o.separatorToPanels });
}
function Ae(e) {
  if (e.defaultPrevented) return;
  let t = e.currentTarget, n = pe(t);
  if (!n.disabled) switch (e.key) {
    case "ArrowDown": {
      e.preventDefault(), n.orientation === "vertical" && V(t, 5);
      break;
    }
    case "ArrowLeft": {
      e.preventDefault(), n.orientation === "horizontal" && V(t, -5);
      break;
    }
    case "ArrowRight": {
      e.preventDefault(), n.orientation === "horizontal" && V(t, 5);
      break;
    }
    case "ArrowUp": {
      e.preventDefault(), n.orientation === "vertical" && V(t, -5);
      break;
    }
    case "End": {
      e.preventDefault(), V(t, 100);
      break;
    }
    case "Enter": {
      e.preventDefault();
      let o = pe(t), r = W(o.id, true), { derivedPanelConstraints: a, layout: c, separatorToPanels: s } = r, i = o.separators.find((f) => f.element === t);
      P(i, "Matching separator not found");
      let l = s.get(i);
      P(l, "Matching panels not found");
      let u = l[0], g = a.find((f) => f.panelId === u.id);
      if (P(g, "Panel metadata not found"), g.collapsible) {
        let f = c[u.id], b = g.collapsedSize === f ? o.mutableState.expandedPanelSizes[u.id] ?? g.minSize : g.collapsedSize;
        V(t, b - f);
      }
      break;
    }
    case "F6": {
      e.preventDefault();
      let o = pe(t).separators.map((c) => c.element), r = Array.from(o).findIndex((c) => c === e.currentTarget);
      P(r !== null, "Index not found");
      let a = e.shiftKey ? r > 0 ? r - 1 : o.length - 1 : r + 1 < o.length ? r + 1 : 0;
      o[a].focus({ preventScroll: true });
      break;
    }
    case "Home": {
      e.preventDefault(), V(t, -100);
      break;
    }
  }
}
var _ = { cursorFlags: 0, state: "inactive" };
var Ce = new ge();
function X() {
  return _;
}
function Nt(e) {
  return Ce.addListener("change", e);
}
function At(e) {
  let t = _, n = { ..._ };
  n.cursorFlags = e, _ = n, Ce.emit("change", { prev: t, next: n });
}
function ee(e) {
  let t = _;
  _ = e, Ce.emit("change", { prev: t, next: e });
}
function Fe(e) {
  if (e.defaultPrevented || e.pointerType === "mouse" && e.button > 0) return;
  let t = J(), n = xe(e, t), o = /* @__PURE__ */ new Map(), r = false;
  n.forEach((a) => {
    a.separator && (r || (r = true, a.separator.element.focus({ focusVisible: false, preventScroll: true })));
    let c = t.get(a.group);
    c && o.set(a.group, c.layout);
  }), ee({ cursorFlags: 0, hitRegions: n, initialLayoutMap: o, pointerDownAtPoint: { x: e.clientX, y: e.clientY }, state: "active" }), n.length && e.preventDefault();
}
var Ft = (e) => e;
var ye = () => {
};
var ot = 1;
var rt = 2;
var at = 4;
var it = 8;
var je = 3;
var Ge = 12;
var fe;
function $e() {
  return fe === void 0 && (fe = false, typeof window < "u" && (window.navigator.userAgent.includes("Chrome") || window.navigator.userAgent.includes("Firefox")) && (fe = true)), fe;
}
function jt({ cursorFlags: e, groups: t, state: n }) {
  let o = 0, r = 0;
  switch (n) {
    case "active":
    case "hover":
      t.forEach((a) => {
        if (!a.mutableState.disableCursor) switch (a.orientation) {
          case "horizontal": {
            o++;
            break;
          }
          case "vertical": {
            r++;
            break;
          }
        }
      });
  }
  if (!(o === 0 && r === 0)) {
    switch (n) {
      case "active": {
        if (e && $e()) {
          let a = (e & ot) !== 0, c = (e & rt) !== 0, s = (e & at) !== 0, i = (e & it) !== 0;
          if (a) return s ? "se-resize" : i ? "ne-resize" : "e-resize";
          if (c) return s ? "sw-resize" : i ? "nw-resize" : "w-resize";
          if (s) return "s-resize";
          if (i) return "n-resize";
        }
        break;
      }
    }
    return $e() ? o > 0 && r > 0 ? "move" : o > 0 ? "ew-resize" : "ns-resize" : o > 0 && r > 0 ? "grab" : o > 0 ? "col-resize" : "row-resize";
  }
}
var Be = /* @__PURE__ */ new WeakMap();
function Pe(e) {
  if (e.defaultView === null || e.defaultView === void 0) return;
  let { prevStyle: t, styleSheet: n } = Be.get(e) ?? {};
  n === void 0 && (n = new e.defaultView.CSSStyleSheet(), e.adoptedStyleSheets && (Object.isExtensible(e.adoptedStyleSheets) ? e.adoptedStyleSheets.push(n) : e.adoptedStyleSheets = [...e.adoptedStyleSheets, n]));
  let o = X();
  switch (o.state) {
    case "active":
    case "hover": {
      let r = jt({ cursorFlags: o.cursorFlags, groups: o.hitRegions.map((c) => c.group), state: o.state }), a = `*, *:hover {cursor: ${r} !important; }`;
      if (t === a) return;
      t = a, r ? n.cssRules.length === 0 ? n.insertRule(a) : n.replaceSync(a) : n.cssRules.length === 1 && n.deleteRule(0);
      break;
    }
    case "inactive": {
      t = void 0, n.cssRules.length === 1 && n.deleteRule(0);
      break;
    }
  }
  Be.set(e, { prevStyle: t, styleSheet: n });
}
function st({ document: e, event: t, hitRegions: n, initialLayoutMap: o, mountedGroups: r, pointerDownAtPoint: a, prevCursorFlags: c }) {
  let s = 0;
  n.forEach((l) => {
    let { group: u, groupSize: g } = l, { orientation: f, panels: b } = u, { disableCursor: m } = u.mutableState, d = 0;
    a ? f === "horizontal" ? d = (t.clientX - a.x) / g * 100 : d = (t.clientY - a.y) / g * 100 : f === "horizontal" ? d = t.clientX < 0 ? -100 : 100 : d = t.clientY < 0 ? -100 : 100;
    let h = o.get(u), p = r.get(u);
    if (!h || !p) return;
    let { defaultLayoutDeferred: z, derivedPanelConstraints: S, groupSize: y, layout: v, separatorToPanels: L } = p;
    if (S && v && L) {
      let k = le({ delta: d, initialLayout: h, panelConstraints: S, pivotIndices: l.panels.map((E) => b.indexOf(E)), prevLayout: v, trigger: "mouse-or-touch" });
      if (H(k, v)) {
        if (d !== 0 && !m) switch (f) {
          case "horizontal": {
            s |= d < 0 ? ot : rt;
            break;
          }
          case "vertical": {
            s |= d < 0 ? at : it;
            break;
          }
        }
      } else $(l.group, { defaultLayoutDeferred: z, derivedPanelConstraints: S, groupSize: y, layout: k, separatorToPanels: L });
    }
  });
  let i = 0;
  t.movementX === 0 ? i |= c & je : i |= s & je, t.movementY === 0 ? i |= c & Ge : i |= s & Ge, At(i), Pe(e);
}
function We(e) {
  let t = J(), n = X();
  n.state === "active" && st({ document: e.currentTarget, event: e, hitRegions: n.hitRegions, initialLayoutMap: n.initialLayoutMap, mountedGroups: t, prevCursorFlags: n.cursorFlags });
}
function Ve(e) {
  if (e.defaultPrevented) return;
  let t = X(), n = J();
  switch (t.state) {
    case "active": {
      if (e.buttons === 0) {
        ee({ cursorFlags: 0, state: "inactive" }), t.hitRegions.forEach((o) => {
          let r = W(o.group.id, true);
          $(o.group, r);
        });
        return;
      }
      for (let o of t.hitRegions) if (o.separator) {
        let { element: r } = o.separator;
        r.hasPointerCapture?.(e.pointerId) || r.setPointerCapture?.(e.pointerId);
      }
      st({ document: e.currentTarget, event: e, hitRegions: t.hitRegions, initialLayoutMap: t.initialLayoutMap, mountedGroups: n, pointerDownAtPoint: t.pointerDownAtPoint, prevCursorFlags: t.cursorFlags });
      break;
    }
    default: {
      let o = xe(e, n);
      o.length === 0 ? t.state !== "inactive" && ee({ cursorFlags: 0, state: "inactive" }) : ee({ cursorFlags: 0, hitRegions: o, state: "hover" }), Pe(e.currentTarget);
      break;
    }
  }
}
function He(e) {
  e.relatedTarget instanceof HTMLIFrameElement && X().state === "hover" && ee({ cursorFlags: 0, state: "inactive" });
}
function Ye(e) {
  if (e.defaultPrevented || e.pointerType === "mouse" && e.button > 0) return;
  let t = X();
  t.state === "active" && (ee({ cursorFlags: 0, state: "inactive" }), t.hitRegions.length > 0 && (Pe(e.currentTarget), t.hitRegions.forEach((n) => {
    let o = W(n.group.id, true);
    $(n.group, o);
  }), e.preventDefault()));
}
function Xe(e) {
  let t = 0, n = 0, o = {};
  for (let a of e) if (a.defaultSize !== void 0) {
    t++;
    let c = I(a.defaultSize);
    n += c, o[a.panelId] = c;
  } else o[a.panelId] = void 0;
  let r = e.length - t;
  if (r !== 0) {
    let a = I((100 - n) / r);
    for (let c of e) c.defaultSize === void 0 && (o[c.panelId] = a);
  }
  return o;
}
function Gt(e, t, n) {
  if (!n[0]) return;
  let o = e.panels.find((i) => i.element === t);
  if (!o || !o.onResize) return;
  let r = te({ group: e }), a = e.orientation === "horizontal" ? o.element.offsetWidth : o.element.offsetHeight, c = o.mutableValues.prevSize, s = { asPercentage: I(a / r * 100), inPixels: a };
  o.mutableValues.prevSize = s, o.onResize(s, o.id, c);
}
function $t(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (let n in e) if (e[n] !== t[n]) return false;
  return true;
}
function Bt({ group: e, nextGroupSize: t, prevGroupSize: n, prevLayout: o }) {
  if (n <= 0 || t <= 0 || n === t) return o;
  let r = 0, a = 0, c = false, s = /* @__PURE__ */ new Map(), i = [];
  for (let g of e.panels) {
    let f = o[g.id] ?? 0;
    if (g.panelConstraints.groupResizeBehavior === "preserve-pixel-size") {
      c = true;
      let b = f / 100 * n, m = I(b / t * 100);
      s.set(g.id, m), r += m;
    } else i.push(g.id), a += f;
  }
  if (!c || i.length === 0) return o;
  let l = 100 - r, u = { ...o };
  if (s.forEach((g, f) => {
    u[f] = g;
  }), a > 0) for (let g of i) {
    let f = o[g] ?? 0;
    u[g] = I(f / a * l);
  }
  else {
    let g = I(l / i.length);
    for (let f of i) u[f] = g;
  }
  return u;
}
function Wt(e, t) {
  let n = e.map((r) => r.id), o = Object.keys(t);
  if (n.length !== o.length) return false;
  for (let r of n) if (!o.includes(r)) return false;
  return true;
}
var K = /* @__PURE__ */ new Map();
function Vt(e) {
  let t = true;
  P(e.element.ownerDocument.defaultView, "Cannot register an unmounted Group");
  let n = e.element.ownerDocument.defaultView.ResizeObserver, o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), a = new n((m) => {
    for (let d of m) {
      let { borderBoxSize: h, target: p } = d;
      if (p === e.element) {
        if (t) {
          let z = te({ group: e });
          if (z === 0) return;
          let S = W(e.id);
          if (!S) return;
          let y = ze(e), v = S.defaultLayoutDeferred ? Xe(y) : S.layout, L = Bt({ group: e, nextGroupSize: z, prevGroupSize: S.groupSize, prevLayout: v }), k = Y({ layout: L, panelConstraints: y });
          if (!S.defaultLayoutDeferred && H(S.layout, k) && $t(S.derivedPanelConstraints, y) && S.groupSize === z) return;
          $(e, { defaultLayoutDeferred: false, derivedPanelConstraints: y, groupSize: z, layout: k, separatorToPanels: S.separatorToPanels });
        }
      } else Gt(e, p, h);
    }
  });
  a.observe(e.element), e.panels.forEach((m) => {
    P(!o.has(m.id), `Panel ids must be unique; id "${m.id}" was used more than once`), o.add(m.id), m.onResize && a.observe(m.element);
  });
  let c = te({ group: e }), s = ze(e), i = e.panels.map(({ id: m }) => m).join(","), l = e.mutableState.defaultLayout;
  l && (Wt(e.panels, l) || (l = void 0));
  let u = e.mutableState.layouts[i] ?? l ?? Xe(s), g = Y({ layout: u, panelConstraints: s }), f = e.element.ownerDocument;
  K.set(f, (K.get(f) ?? 0) + 1);
  let b = /* @__PURE__ */ new Map();
  return Ze(e).forEach((m) => {
    m.separator && b.set(m.separator, m.panels);
  }), $(e, { defaultLayoutDeferred: c === 0, derivedPanelConstraints: s, groupSize: c, layout: g, separatorToPanels: b }), e.separators.forEach((m) => {
    P(!r.has(m.id), `Separator ids must be unique; id "${m.id}" was used more than once`), r.add(m.id), m.element.addEventListener("keydown", Ae);
  }), K.get(f) === 1 && (f.addEventListener("dblclick", Ne, true), f.addEventListener("pointerdown", Fe, true), f.addEventListener("pointerleave", We), f.addEventListener("pointermove", Ve), f.addEventListener("pointerout", He), f.addEventListener("pointerup", Ye, true)), function() {
    t = false, K.set(f, Math.max(0, (K.get(f) ?? 0) - 1)), Pt(e), e.separators.forEach((m) => {
      m.element.removeEventListener("keydown", Ae);
    }), K.get(f) || (f.removeEventListener("dblclick", Ne, true), f.removeEventListener("pointerdown", Fe, true), f.removeEventListener("pointerleave", We), f.removeEventListener("pointermove", Ve), f.removeEventListener("pointerout", He), f.removeEventListener("pointerup", Ye, true)), a.disconnect();
  };
}
function Ht() {
  let [e, t] = Z({}), n = ae(() => t({}), []);
  return [e, n];
}
function Le(e) {
  let t = pt();
  return `${e ?? t}`;
}
var U = typeof window < "u" ? Je : ve;
function ie(e) {
  let t = T(e);
  return U(() => {
    t.current = e;
  }, [e]), ae((...n) => t.current?.(...n), [t]);
}
function ke(...e) {
  return ie((t) => {
    e.forEach((n) => {
      if (n) switch (typeof n) {
        case "function": {
          n(t);
          break;
        }
        case "object": {
          n.current = t;
          break;
        }
      }
    });
  });
}
function Me(e) {
  let t = T({ ...e });
  return U(() => {
    for (let n in e) t.current[n] = e[n];
  }, [e]), t.current;
}
var lt = ht(null);
function Yt(e, t) {
  let n = T({ getLayout: () => ({}), setLayout: Ft });
  Ue(t, () => n.current, []), U(() => {
    Object.assign(n.current, nt({ groupId: e }));
  });
}
function Xt({ children: e, className: t, defaultLayout: n, disableCursor: o, disabled: r, elementRef: a, groupRef: c, id: s, onLayoutChange: i, onLayoutChanged: l, orientation: u = "horizontal", resizeTargetMinimumSize: g = { coarse: 20, fine: 10 }, style: f, ...b }) {
  let m = T({ onLayoutChange: {}, onLayoutChanged: {} }), d = ie((w) => {
    H(m.current.onLayoutChange, w) || (m.current.onLayoutChange = w, i?.(w));
  }), h = ie((w) => {
    H(m.current.onLayoutChanged, w) || (m.current.onLayoutChanged = w, l?.(w));
  }), p = Le(s), z = T(null), [S, y] = Ht(), v = T({ lastExpandedPanelSizes: {}, layouts: {}, panels: [], resizeTargetMinimumSize: g, separators: [] }), L = ke(z, a);
  Yt(p, c);
  let k = ie((w, x) => {
    let M = X(), C = De(w), R = W(w);
    if (R) {
      let O = false;
      return M.state === "active" && (O = M.hitRegions.some((ne) => ne.group === C)), { flexGrow: R.layout[x] ?? 1, pointerEvents: O ? "none" : void 0 };
    }
    if (n?.[x]) return { flexGrow: n?.[x] };
  }), E = Me({ defaultLayout: n, disableCursor: o }), N = be(() => ({ get disableCursor() {
    return !!E.disableCursor;
  }, getPanelStyles: k, id: p, orientation: u, registerPanel: (w) => {
    let x = v.current;
    return x.panels = Se(u, [...x.panels, w]), y(), () => {
      x.panels = x.panels.filter((M) => M !== w), y();
    };
  }, registerSeparator: (w) => {
    let x = v.current;
    return x.separators = Se(u, [...x.separators, w]), y(), () => {
      x.separators = x.separators.filter((M) => M !== w), y();
    };
  }, updatePanelProps: (w, { disabled: x }) => {
    let M = v.current.panels.find((O) => O.id === w);
    M && (M.panelConstraints.disabled = x);
    let C = De(p), R = W(p);
    C && R && $(C, { ...R, derivedPanelConstraints: ze(C) });
  }, updateSeparatorProps: (w, { disabled: x, disableDoubleClick: M }) => {
    let C = v.current.separators.find((R) => R.id === w);
    C && (C.disabled = x, C.disableDoubleClick = M);
  } }), [k, p, y, u, E]), j = T(null);
  return U(() => {
    let w = z.current;
    if (w === null) return;
    let x = v.current, M;
    if (E.defaultLayout !== void 0 && Object.keys(E.defaultLayout).length === x.panels.length) {
      M = {};
      for (let B of x.panels) {
        let q = E.defaultLayout[B.id];
        q !== void 0 && (M[B.id] = q);
      }
    }
    let C = { disabled: !!r, element: w, id: p, mutableState: { defaultLayout: M, disableCursor: !!E.disableCursor, expandedPanelSizes: v.current.lastExpandedPanelSizes, layouts: v.current.layouts }, orientation: u, panels: x.panels, resizeTargetMinimumSize: x.resizeTargetMinimumSize, separators: x.separators };
    j.current = C;
    let R = Vt(C), { defaultLayoutDeferred: O, derivedPanelConstraints: ne, layout: ue } = W(C.id, true);
    !O && ne.length > 0 && (d(ue), h(ue));
    let oe = we(p, (B) => {
      let { defaultLayoutDeferred: q, derivedPanelConstraints: Re, layout: ce } = B.next;
      if (q || Re.length === 0) return;
      let ut = C.panels.map(({ id: G }) => G).join(",");
      C.mutableState.layouts[ut] = ce, Re.forEach((G) => {
        if (G.collapsible) {
          let { layout: me } = B.prev ?? {};
          if (me) {
            let dt = D(G.collapsedSize, ce[G.panelId]), ft = D(G.collapsedSize, me[G.panelId]);
            dt && !ft && (C.mutableState.expandedPanelSizes[G.panelId] = me[G.panelId]);
          }
        }
      });
      let ct = X().state !== "active";
      d(ce), ct && h(ce);
    });
    return () => {
      j.current = null, R(), oe();
    };
  }, [r, p, h, d, u, S, E]), ve(() => {
    let w = j.current;
    w && (w.mutableState.defaultLayout = n, w.mutableState.disableCursor = !!o);
  }), se(lt.Provider, { value: N, children: se("div", { ...b, className: t, "data-group": true, "data-testid": p, id: p, ref: L, style: { height: "100%", width: "100%", overflow: "hidden", ...f, display: "flex", flexDirection: u === "horizontal" ? "row" : "column", flexWrap: "nowrap", touchAction: u === "horizontal" ? "pan-y" : "pan-x" }, children: e }) });
}
Xt.displayName = "Group";
function Ee() {
  let e = gt(lt);
  return P(e, "Group Context not found; did you render a Panel or Separator outside of a Group?"), e;
}
function qt(e, t) {
  let { id: n } = Ee(), o = T({ collapse: ye, expand: ye, getSize: () => ({ asPercentage: 0, inPixels: 0 }), isCollapsed: () => false, resize: ye });
  Ue(t, () => o.current, []), U(() => {
    Object.assign(o.current, tt({ groupId: n, panelId: e }));
  });
}
function Kt({ children: e, className: t, collapsedSize: n = "0%", collapsible: o = false, defaultSize: r, disabled: a, elementRef: c, groupResizeBehavior: s = "preserve-relative-size", id: i, maxSize: l = "100%", minSize: u = "0%", onResize: g, panelRef: f, style: b, ...m }) {
  let d = !!i, h = Le(i), p = Me({ disabled: a }), z = T(null), S = ke(z, c), { getPanelStyles: y, id: v, orientation: L, registerPanel: k, updatePanelProps: E } = Ee(), N = g !== null, j = ie((C, R, O) => {
    g?.(C, i, O);
  });
  U(() => {
    let C = z.current;
    if (C !== null) {
      let R = { element: C, id: h, idIsStable: d, mutableValues: { expandToSize: void 0, prevSize: void 0 }, onResize: N ? j : void 0, panelConstraints: { groupResizeBehavior: s, collapsedSize: n, collapsible: o, defaultSize: r, disabled: p.disabled, maxSize: l, minSize: u } };
      return k(R);
    }
  }, [s, n, o, r, N, h, d, l, u, j, k, p]), ve(() => {
    E(h, { disabled: a });
  }, [a, h, E]), qt(h, f);
  let w = () => {
    let C = y(v, h);
    if (C) return JSON.stringify(C);
  }, x = qe((C) => we(v, C), w, w), M;
  return x ? M = JSON.parse(x) : r !== void 0 ? M = { flexGrow: void 0, flexShrink: void 0, flexBasis: r } : M = { flexGrow: 1 }, se("div", { ...m, "data-disabled": a || void 0, "data-panel": true, "data-testid": h, id: h, ref: S, style: { ...Qt, display: "flex", flexBasis: 0, flexShrink: 1, overflow: "visible", ...M }, children: se("div", { className: t, style: { maxHeight: "100%", maxWidth: "100%", flexGrow: 1, overflow: "auto", ...b, touchAction: L === "horizontal" ? "pan-y" : "pan-x" }, children: e }) });
}
Kt.displayName = "Panel";
var Qt = { minHeight: 0, maxHeight: "100%", height: "auto", minWidth: 0, maxWidth: "100%", width: "auto", border: "none", borderWidth: 0, padding: 0, margin: 0 };
function Zt({ layout: e, panelConstraints: t, panelId: n, panelIndex: o }) {
  let r, a, c = e[n], s = t.find((i) => i.panelId === n);
  if (s) {
    let i = s.maxSize, l = s.collapsible ? s.collapsedSize : s.minSize, u = [o, o + 1];
    a = Y({ layout: le({ delta: l - c, initialLayout: e, panelConstraints: t, pivotIndices: u, prevLayout: e }), panelConstraints: t })[n], r = Y({ layout: le({ delta: i - c, initialLayout: e, panelConstraints: t, pivotIndices: u, prevLayout: e }), panelConstraints: t })[n];
  }
  return { valueControls: n, valueMax: r, valueMin: a, valueNow: c };
}
function _t({ children: e, className: t, disabled: n, disableDoubleClick: o, elementRef: r, id: a, style: c, ...s }) {
  let i = Le(a), l = Me({ disabled: n, disableDoubleClick: o }), [u, g] = Z({}), [f, b] = Z("inactive"), [m, d] = Z(false), h = T(null), p = ke(h, r), { disableCursor: z, id: S, orientation: y, registerSeparator: v, updateSeparatorProps: L } = Ee(), k = y === "horizontal" ? "vertical" : "horizontal";
  U(() => {
    let j = h.current;
    if (j !== null) {
      let w = { disabled: l.disabled, disableDoubleClick: l.disableDoubleClick, element: j, id: i }, x = v(w), M = Nt((R) => {
        b(R.next.state !== "inactive" && R.next.hitRegions.some((O) => O.separator === w) ? R.next.state : "inactive");
      }), C = we(S, (R) => {
        let { derivedPanelConstraints: O, layout: ne, separatorToPanels: ue } = R.next, oe = ue.get(w);
        if (oe) {
          let B = oe[0], q = oe.indexOf(B);
          g(Zt({ layout: ne, panelConstraints: O, panelId: B.id, panelIndex: q }));
        }
      });
      return () => {
        M(), C(), x();
      };
    }
  }, [S, i, v, l]), ve(() => {
    L(i, { disabled: n, disableDoubleClick: o });
  }, [n, o, i, L]);
  let E;
  n && !z && (E = "not-allowed");
  let N;
  return n ? N = "disabled" : f === "active" ? N = "active" : m ? N = "focus" : N = f, se("div", { ...s, "aria-controls": u.valueControls, "aria-disabled": n || void 0, "aria-orientation": k, "aria-valuemax": u.valueMax, "aria-valuemin": u.valueMin, "aria-valuenow": u.valueNow, children: e, className: t, "data-separator": N, "data-testid": i, id: i, onBlur: () => d(false), onFocus: () => d(true), ref: p, role: "separator", style: { flexBasis: "auto", cursor: E, ...c, flexGrow: 0, flexShrink: 0, touchAction: "none" }, tabIndex: n ? void 0 : 0 });
}
_t.displayName = "Separator";

// ../../ui-main/ui-main/apps/v4/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/resizable.tsx
import { jsx } from "react/jsx-runtime";
function ResizablePanelGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Xt,
    {
      "data-slot": "resizable-panel-group",
      className: cn(
        "flex h-full w-full aria-[orientation=vertical]:flex-col",
        className
      ),
      ...props
    }
  );
}
function ResizablePanel({ ...props }) {
  return /* @__PURE__ */ jsx(Kt, { "data-slot": "resizable-panel", ...props });
}
function ResizableHandle({
  withHandle,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    _t,
    {
      "data-slot": "resizable-handle",
      className: cn(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
        className
      ),
      ...props,
      children: withHandle && /* @__PURE__ */ jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-xs border bg-border", children: /* @__PURE__ */ jsx(GripVerticalIcon, { className: "size-2.5" }) })
    }
  );
}
export {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
};
