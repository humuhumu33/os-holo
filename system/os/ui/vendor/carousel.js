"use client";

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/carousel.tsx
import * as React from "react";

// http-url:https://esm.sh/embla-carousel-reactive-utils@8.6.0/es2022/embla-carousel-reactive-utils.mjs
function y(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function a(n) {
  return y(n) || Array.isArray(n);
}
function p() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function l(n, t) {
  let e = Object.keys(n), c2 = Object.keys(t);
  if (e.length !== c2.length) return false;
  let s = JSON.stringify(Object.keys(n.breakpoints || {})), u = JSON.stringify(Object.keys(t.breakpoints || {}));
  return s !== u ? false : e.every((o) => {
    let r = n[o], i = t[o];
    return typeof r == "function" ? `${r}` == `${i}` : !a(r) || !a(i) ? r === i : l(r, i);
  });
}
function f(n) {
  return n.concat().sort((t, e) => t.name > e.name ? 1 : -1).map((t) => t.options);
}
function O(n, t) {
  if (n.length !== t.length) return false;
  let e = f(n), c2 = f(t);
  return e.every((s, u) => {
    let o = c2[u];
    return l(s, o);
  });
}

// http-url:https://esm.sh/embla-carousel@8.6.0/es2022/embla-carousel.mjs
function Tt(t) {
  return typeof t == "number";
}
function Lt(t) {
  return typeof t == "string";
}
function gt(t) {
  return typeof t == "boolean";
}
function Vt(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function P(t) {
  return Math.abs(t);
}
function It(t) {
  return Math.sign(t);
}
function ft(t, n) {
  return P(t - n);
}
function Jt(t, n) {
  if (t === 0 || n === 0 || P(t) <= P(n)) return 0;
  let s = ft(P(t), P(n));
  return P(s / t);
}
function Zt(t) {
  return Math.round(t * 100) / 100;
}
function at(t) {
  return lt(t).map(Number);
}
function k(t) {
  return t[pt(t)];
}
function pt(t) {
  return Math.max(0, t.length - 1);
}
function vt(t, n) {
  return n === pt(t);
}
function zt(t, n = 0) {
  return Array.from(Array(t), (s, r) => n + r);
}
function lt(t) {
  return Object.keys(t);
}
function Bt(t, n) {
  return [t, n].reduce((s, r) => (lt(r).forEach((c2) => {
    let o = s[c2], e = r[c2], f3 = Vt(o) && Vt(e);
    s[c2] = f3 ? Bt(o, e) : e;
  }), s), {});
}
function Et(t, n) {
  return typeof n.MouseEvent < "u" && t instanceof n.MouseEvent;
}
function Wt(t, n) {
  let s = { start: r, center: c2, end: o };
  function r() {
    return 0;
  }
  function c2(i) {
    return o(i) / 2;
  }
  function o(i) {
    return n - i;
  }
  function e(i, u) {
    return Lt(t) ? s[t](i) : t(n, i, u);
  }
  return { measure: e };
}
function dt() {
  let t = [];
  function n(c2, o, e, f3 = { passive: true }) {
    let i;
    if ("addEventListener" in c2) c2.addEventListener(o, e, f3), i = () => c2.removeEventListener(o, e, f3);
    else {
      let u = c2;
      u.addListener(e), i = () => u.removeListener(e);
    }
    return t.push(i), r;
  }
  function s() {
    t = t.filter((c2) => c2());
  }
  let r = { add: n, clear: s };
  return r;
}
function tn(t, n, s, r) {
  let c2 = dt(), o = 1e3 / 60, e = null, f3 = 0, i = 0;
  function u() {
    c2.add(t, "visibilitychange", () => {
      t.hidden && l3();
    });
  }
  function h() {
    b2(), c2.clear();
  }
  function d(g) {
    if (!i) return;
    e || (e = g, s(), s());
    let a2 = g - e;
    for (e = g, f3 += a2; f3 >= o; ) s(), f3 -= o;
    let S = f3 / o;
    r(S), i && (i = n.requestAnimationFrame(d));
  }
  function p3() {
    i || (i = n.requestAnimationFrame(d));
  }
  function b2() {
    n.cancelAnimationFrame(i), e = null, f3 = 0, i = 0;
  }
  function l3() {
    e = null, f3 = 0;
  }
  return { init: u, destroy: h, start: p3, stop: b2, update: s, render: r };
}
function nn(t, n) {
  let s = n === "rtl", r = t === "y", c2 = r ? "y" : "x", o = r ? "x" : "y", e = !r && s ? -1 : 1, f3 = h(), i = d();
  function u(l3) {
    let { height: m, width: g } = l3;
    return r ? m : g;
  }
  function h() {
    return r ? "top" : s ? "right" : "left";
  }
  function d() {
    return r ? "bottom" : s ? "left" : "right";
  }
  function p3(l3) {
    return l3 * e;
  }
  return { scroll: c2, cross: o, startEdge: f3, endEdge: i, measureSize: u, direction: p3 };
}
function tt(t = 0, n = 0) {
  let s = P(t - n);
  function r(u) {
    return u < t;
  }
  function c2(u) {
    return u > n;
  }
  function o(u) {
    return r(u) || c2(u);
  }
  function e(u) {
    return o(u) ? r(u) ? t : n : u;
  }
  function f3(u) {
    return s ? u - s * Math.ceil((u - n) / s) : u;
  }
  return { length: s, max: n, min: t, constrain: e, reachedAny: o, reachedMax: c2, reachedMin: r, removeOffset: f3 };
}
function kt(t, n, s) {
  let { constrain: r } = tt(0, t), c2 = t + 1, o = e(n);
  function e(p3) {
    return s ? P((c2 + p3) % c2) : r(p3);
  }
  function f3() {
    return o;
  }
  function i(p3) {
    return o = e(p3), d;
  }
  function u(p3) {
    return h().set(f3() + p3);
  }
  function h() {
    return kt(t, f3(), s);
  }
  let d = { get: f3, set: i, add: u, clone: h };
  return d;
}
function en(t, n, s, r, c2, o, e, f3, i, u, h, d, p3, b2, l3, m, g, a2, S) {
  let { cross: x, direction: T } = t, M = ["INPUT", "SELECT", "TEXTAREA"], I = { passive: false }, L = dt(), E = dt(), v = tt(50, 225).constrain(b2.measure(20)), C = { mouse: 300, touch: 400 }, D = { mouse: 500, touch: 600 }, V = l3 ? 43 : 25, G = false, H = 0, j = 0, J = false, Y = false, U = false, $ = false;
  function st(y2) {
    if (!S) return;
    function A(N) {
      (gt(S) || S(y2, N)) && it(N);
    }
    let O2 = n;
    L.add(O2, "dragstart", (N) => N.preventDefault(), I).add(O2, "touchmove", () => {
    }, I).add(O2, "touchend", () => {
    }).add(O2, "touchstart", A).add(O2, "mousedown", A).add(O2, "touchcancel", w).add(O2, "contextmenu", w).add(O2, "click", K, true);
  }
  function R() {
    L.clear(), E.clear();
  }
  function nt() {
    let y2 = $ ? s : n;
    E.add(y2, "touchmove", z, I).add(y2, "touchend", w).add(y2, "mousemove", z, I).add(y2, "mouseup", w);
  }
  function et(y2) {
    let A = y2.nodeName || "";
    return M.includes(A);
  }
  function Q() {
    return (l3 ? D : C)[$ ? "mouse" : "touch"];
  }
  function rt(y2, A) {
    let O2 = d.add(It(y2) * -1), N = h.byDistance(y2, !l3).distance;
    return l3 || P(y2) < v ? N : g && A ? N * 0.5 : h.byIndex(O2.get(), 0).distance;
  }
  function it(y2) {
    let A = Et(y2, r);
    $ = A, U = l3 && A && !y2.buttons && G, G = ft(c2.get(), e.get()) >= 2, !(A && y2.button !== 0) && (et(y2.target) || (J = true, o.pointerDown(y2), u.useFriction(0).useDuration(0), c2.set(e), nt(), H = o.readPoint(y2), j = o.readPoint(y2, x), p3.emit("pointerDown")));
  }
  function z(y2) {
    if (!Et(y2, r) && y2.touches.length >= 2) return w(y2);
    let O2 = o.readPoint(y2), N = o.readPoint(y2, x), q = ft(O2, H), X = ft(N, j);
    if (!Y && !$ && (!y2.cancelable || (Y = q > X, !Y))) return w(y2);
    let Z = o.pointerMove(y2);
    q > m && (U = true), u.useFriction(0.3).useDuration(0.75), f3.start(), c2.add(T(Z)), y2.preventDefault();
  }
  function w(y2) {
    let O2 = h.byDistance(0, false).index !== d.get(), N = o.pointerUp(y2) * Q(), q = rt(T(N), O2), X = Jt(N, q), Z = V - 10 * X, _ = a2 + X / 50;
    Y = false, J = false, E.clear(), u.useDuration(Z).useFriction(_), i.distance(q, !l3), $ = false, p3.emit("pointerUp");
  }
  function K(y2) {
    U && (y2.stopPropagation(), y2.preventDefault(), U = false);
  }
  function B() {
    return J;
  }
  return { init: st, destroy: R, pointerDown: B };
}
function on(t, n) {
  let r, c2;
  function o(d) {
    return d.timeStamp;
  }
  function e(d, p3) {
    let l3 = `client${(p3 || t.scroll) === "x" ? "X" : "Y"}`;
    return (Et(d, n) ? d : d.touches[0])[l3];
  }
  function f3(d) {
    return r = d, c2 = d, e(d);
  }
  function i(d) {
    let p3 = e(d) - e(c2), b2 = o(d) - o(r) > 170;
    return c2 = d, b2 && (r = d), p3;
  }
  function u(d) {
    if (!r || !c2) return 0;
    let p3 = e(c2) - e(r), b2 = o(d) - o(r), l3 = o(d) - o(c2) > 170, m = p3 / b2;
    return b2 && !l3 && P(m) > 0.1 ? m : 0;
  }
  return { pointerDown: f3, pointerMove: i, pointerUp: u, readPoint: e };
}
function sn() {
  function t(s) {
    let { offsetTop: r, offsetLeft: c2, offsetWidth: o, offsetHeight: e } = s;
    return { top: r, right: c2 + o, bottom: r + e, left: c2, width: o, height: e };
  }
  return { measure: t };
}
function rn(t) {
  function n(r) {
    return t * (r / 100);
  }
  return { measure: n };
}
function cn(t, n, s, r, c2, o, e) {
  let f3 = [t].concat(r), i, u, h = [], d = false;
  function p3(g) {
    return c2.measureSize(e.measure(g));
  }
  function b2(g) {
    if (!o) return;
    u = p3(t), h = r.map(p3);
    function a2(S) {
      for (let x of S) {
        if (d) return;
        let T = x.target === t, M = r.indexOf(x.target), I = T ? u : h[M], L = p3(T ? t : r[M]);
        if (P(L - I) >= 0.5) {
          g.reInit(), n.emit("resize");
          break;
        }
      }
    }
    i = new ResizeObserver((S) => {
      (gt(o) || o(g, S)) && a2(S);
    }), s.requestAnimationFrame(() => {
      f3.forEach((S) => i.observe(S));
    });
  }
  function l3() {
    d = true, i && i.disconnect();
  }
  return { init: b2, destroy: l3 };
}
function un(t, n, s, r, c2, o) {
  let e = 0, f3 = 0, i = c2, u = o, h = t.get(), d = 0;
  function p3() {
    let I = r.get() - t.get(), L = !i, E = 0;
    return L ? (e = 0, s.set(r), t.set(r), E = I) : (s.set(t), e += I / i, e *= u, h += e, t.add(e), E = h - d), f3 = It(E), d = h, M;
  }
  function b2() {
    let I = r.get() - n.get();
    return P(I) < 1e-3;
  }
  function l3() {
    return i;
  }
  function m() {
    return f3;
  }
  function g() {
    return e;
  }
  function a2() {
    return x(c2);
  }
  function S() {
    return T(o);
  }
  function x(I) {
    return i = I, M;
  }
  function T(I) {
    return u = I, M;
  }
  let M = { direction: m, duration: l3, velocity: g, seek: p3, settled: b2, useBaseFriction: S, useBaseDuration: a2, useFriction: T, useDuration: x };
  return M;
}
function fn(t, n, s, r, c2) {
  let o = c2.measure(10), e = c2.measure(50), f3 = tt(0.1, 0.99), i = false;
  function u() {
    return !(i || !t.reachedAny(s.get()) || !t.reachedAny(n.get()));
  }
  function h(b2) {
    if (!u()) return;
    let l3 = t.reachedMin(n.get()) ? "min" : "max", m = P(t[l3] - n.get()), g = s.get() - n.get(), a2 = f3.constrain(m / e);
    s.subtract(g * a2), !b2 && P(g) < o && (s.set(t.constrain(s.get())), r.useDuration(25).useBaseFriction());
  }
  function d(b2) {
    i = !b2;
  }
  return { shouldConstrain: u, constrain: h, toggleActive: d };
}
function an(t, n, s, r, c2) {
  let o = tt(-n + t, 0), e = d(), f3 = h(), i = p3();
  function u(l3, m) {
    return ft(l3, m) <= 1;
  }
  function h() {
    let l3 = e[0], m = k(e), g = e.lastIndexOf(l3), a2 = e.indexOf(m) + 1;
    return tt(g, a2);
  }
  function d() {
    return s.map((l3, m) => {
      let { min: g, max: a2 } = o, S = o.constrain(l3), x = !m, T = vt(s, m);
      return x ? a2 : T || u(g, S) ? g : u(a2, S) ? a2 : S;
    }).map((l3) => parseFloat(l3.toFixed(3)));
  }
  function p3() {
    if (n <= t + c2) return [o.max];
    if (r === "keepSnaps") return e;
    let { min: l3, max: m } = f3;
    return e.slice(l3, m);
  }
  return { snapsContained: i, scrollContainLimit: f3 };
}
function ln(t, n, s) {
  let r = n[0], c2 = s ? r - t : k(n);
  return { limit: tt(c2, r) };
}
function dn(t, n, s, r) {
  let o = n.min + 0.1, e = n.max + 0.1, { reachedMin: f3, reachedMax: i } = tt(o, e);
  function u(p3) {
    return p3 === 1 ? i(s.get()) : p3 === -1 ? f3(s.get()) : false;
  }
  function h(p3) {
    if (!u(p3)) return;
    let b2 = t * (p3 * -1);
    r.forEach((l3) => l3.add(b2));
  }
  return { loop: h };
}
function pn(t) {
  let { max: n, length: s } = t;
  function r(o) {
    let e = o - n;
    return s ? e / -s : 0;
  }
  return { get: r };
}
function mn(t, n, s, r, c2) {
  let { startEdge: o, endEdge: e } = t, { groupSlides: f3 } = c2, i = d().map(n.measure), u = p3(), h = b2();
  function d() {
    return f3(r).map((m) => k(m)[e] - m[0][o]).map(P);
  }
  function p3() {
    return r.map((m) => s[o] - m[o]).map((m) => -P(m));
  }
  function b2() {
    return f3(u).map((m) => m[0]).map((m, g) => m + i[g]);
  }
  return { snaps: u, snapsAligned: h };
}
function gn(t, n, s, r, c2, o) {
  let { groupSlides: e } = c2, { min: f3, max: i } = r, u = h();
  function h() {
    let p3 = e(o), b2 = !t || n === "keepSnaps";
    return s.length === 1 ? [o] : b2 ? p3 : p3.slice(f3, i).map((l3, m, g) => {
      let a2 = !m, S = vt(g, m);
      if (a2) {
        let x = k(g[0]) + 1;
        return zt(x);
      }
      if (S) {
        let x = pt(o) - k(g)[0] + 1;
        return zt(x, k(g)[0]);
      }
      return l3;
    });
  }
  return { slideRegistry: u };
}
function hn(t, n, s, r, c2) {
  let { reachedAny: o, removeOffset: e, constrain: f3 } = r;
  function i(l3) {
    return l3.concat().sort((m, g) => P(m) - P(g))[0];
  }
  function u(l3) {
    let m = t ? e(l3) : f3(l3), g = n.map((S, x) => ({ diff: h(S - m, 0), index: x })).sort((S, x) => P(S.diff) - P(x.diff)), { index: a2 } = g[0];
    return { index: a2, distance: m };
  }
  function h(l3, m) {
    let g = [l3, l3 + s, l3 - s];
    if (!t) return l3;
    if (!m) return i(g);
    let a2 = g.filter((S) => It(S) === m);
    return a2.length ? i(a2) : k(g) - s;
  }
  function d(l3, m) {
    let g = n[l3] - c2.get(), a2 = h(g, m);
    return { index: l3, distance: a2 };
  }
  function p3(l3, m) {
    let g = c2.get() + l3, { index: a2, distance: S } = u(g), x = !t && o(g);
    if (!m || x) return { index: a2, distance: l3 };
    let T = n[a2] - S, M = l3 + h(T, 0);
    return { index: a2, distance: M };
  }
  return { byDistance: p3, byIndex: d, shortcut: h };
}
function Sn(t, n, s, r, c2, o, e) {
  function f3(d) {
    let p3 = d.distance, b2 = d.index !== n.get();
    o.add(p3), p3 && (r.duration() ? t.start() : (t.update(), t.render(1), t.update())), b2 && (s.set(n.get()), n.set(d.index), e.emit("select"));
  }
  function i(d, p3) {
    let b2 = c2.byDistance(d, p3);
    f3(b2);
  }
  function u(d, p3) {
    let b2 = n.clone().set(d), l3 = c2.byIndex(b2.get(), p3);
    f3(l3);
  }
  return { distance: i, index: u };
}
function yn(t, n, s, r, c2, o, e, f3) {
  let i = { passive: true, capture: true }, u = 0;
  function h(b2) {
    if (!f3) return;
    function l3(m) {
      if ((/* @__PURE__ */ new Date()).getTime() - u > 10) return;
      e.emit("slideFocusStart"), t.scrollLeft = 0;
      let S = s.findIndex((x) => x.includes(m));
      Tt(S) && (c2.useDuration(0), r.index(S, 0), e.emit("slideFocus"));
    }
    o.add(document, "keydown", d, false), n.forEach((m, g) => {
      o.add(m, "focus", (a2) => {
        (gt(f3) || f3(b2, a2)) && l3(g);
      }, i);
    });
  }
  function d(b2) {
    b2.code === "Tab" && (u = (/* @__PURE__ */ new Date()).getTime());
  }
  return { init: h };
}
function ut(t) {
  let n = t;
  function s() {
    return n;
  }
  function r(i) {
    n = e(i);
  }
  function c2(i) {
    n += e(i);
  }
  function o(i) {
    n -= e(i);
  }
  function e(i) {
    return Tt(i) ? i : i.get();
  }
  return { get: s, set: r, add: c2, subtract: o };
}
function Gt(t, n) {
  let s = t.scroll === "x" ? e : f3, r = n.style, c2 = null, o = false;
  function e(p3) {
    return `translate3d(${p3}px,0px,0px)`;
  }
  function f3(p3) {
    return `translate3d(0px,${p3}px,0px)`;
  }
  function i(p3) {
    if (o) return;
    let b2 = Zt(t.direction(p3));
    b2 !== c2 && (r.transform = s(b2), c2 = b2);
  }
  function u(p3) {
    o = !p3;
  }
  function h() {
    o || (r.transform = "", n.getAttribute("style") || n.removeAttribute("style"));
  }
  return { clear: h, to: i, toggleActive: u };
}
function bn(t, n, s, r, c2, o, e, f3, i) {
  let h = at(c2), d = at(c2).reverse(), p3 = a2().concat(S());
  function b2(L, E) {
    return L.reduce((v, C) => v - c2[C], E);
  }
  function l3(L, E) {
    return L.reduce((v, C) => b2(v, E) > 0 ? v.concat([C]) : v, []);
  }
  function m(L) {
    return o.map((E, v) => ({ start: E - r[v] + 0.5 + L, end: E + n - 0.5 + L }));
  }
  function g(L, E, v) {
    let C = m(E);
    return L.map((D) => {
      let V = v ? 0 : -s, G = v ? s : 0, H = v ? "end" : "start", j = C[D][H];
      return { index: D, loopPoint: j, slideLocation: ut(-1), translate: Gt(t, i[D]), target: () => f3.get() > j ? V : G };
    });
  }
  function a2() {
    let L = e[0], E = l3(d, L);
    return g(E, s, false);
  }
  function S() {
    let L = n - e[0] - 1, E = l3(h, L);
    return g(E, -s, true);
  }
  function x() {
    return p3.every(({ index: L }) => {
      let E = h.filter((v) => v !== L);
      return b2(E, n) <= 0.1;
    });
  }
  function T() {
    p3.forEach((L) => {
      let { target: E, translate: v, slideLocation: C } = L, D = E();
      D !== C.get() && (v.to(D), C.set(D));
    });
  }
  function M() {
    p3.forEach((L) => L.translate.clear());
  }
  return { canLoop: x, clear: M, loop: T, loopPoints: p3 };
}
function xn(t, n, s) {
  let r, c2 = false;
  function o(i) {
    if (!s) return;
    function u(h) {
      for (let d of h) if (d.type === "childList") {
        i.reInit(), n.emit("slidesChanged");
        break;
      }
    }
    r = new MutationObserver((h) => {
      c2 || (gt(s) || s(i, h)) && u(h);
    }), r.observe(t, { childList: true });
  }
  function e() {
    r && r.disconnect(), c2 = true;
  }
  return { init: o, destroy: e };
}
function Ln(t, n, s, r) {
  let c2 = {}, o = null, e = null, f3, i = false;
  function u() {
    f3 = new IntersectionObserver((l3) => {
      i || (l3.forEach((m) => {
        let g = n.indexOf(m.target);
        c2[g] = m;
      }), o = null, e = null, s.emit("slidesInView"));
    }, { root: t.parentElement, threshold: r }), n.forEach((l3) => f3.observe(l3));
  }
  function h() {
    f3 && f3.disconnect(), i = true;
  }
  function d(l3) {
    return lt(c2).reduce((m, g) => {
      let a2 = parseInt(g), { isIntersecting: S } = c2[a2];
      return (l3 && S || !l3 && !S) && m.push(a2), m;
    }, []);
  }
  function p3(l3 = true) {
    if (l3 && o) return o;
    if (!l3 && e) return e;
    let m = d(l3);
    return l3 && (o = m), l3 || (e = m), m;
  }
  return { init: u, destroy: h, get: p3 };
}
function En(t, n, s, r, c2, o) {
  let { measureSize: e, startEdge: f3, endEdge: i } = t, u = s[0] && c2, h = l3(), d = m(), p3 = s.map(e), b2 = g();
  function l3() {
    if (!u) return 0;
    let S = s[0];
    return P(n[f3] - S[f3]);
  }
  function m() {
    if (!u) return 0;
    let S = o.getComputedStyle(k(r));
    return parseFloat(S.getPropertyValue(`margin-${i}`));
  }
  function g() {
    return s.map((S, x, T) => {
      let M = !x, I = vt(T, x);
      return M ? p3[x] + h : I ? p3[x] + d : T[x + 1][f3] - S[f3];
    }).map(P);
  }
  return { slideSizes: p3, slideSizesWithGaps: b2, startGap: h, endGap: d };
}
function Tn(t, n, s, r, c2, o, e, f3, i) {
  let { startEdge: u, endEdge: h, direction: d } = t, p3 = Tt(s);
  function b2(a2, S) {
    return at(a2).filter((x) => x % S === 0).map((x) => a2.slice(x, x + S));
  }
  function l3(a2) {
    return a2.length ? at(a2).reduce((S, x, T) => {
      let M = k(S) || 0, I = M === 0, L = x === pt(a2), E = c2[u] - o[M][u], v = c2[u] - o[x][h], C = !r && I ? d(e) : 0, D = !r && L ? d(f3) : 0, V = P(v - D - (E + C));
      return T && V > n + i && S.push(x), L && S.push(a2.length), S;
    }, []).map((S, x, T) => {
      let M = Math.max(T[x - 1] || 0);
      return a2.slice(M, S);
    }) : [];
  }
  function m(a2) {
    return p3 ? b2(a2, s) : l3(a2);
  }
  return { groupSlides: m };
}
function In(t, n, s, r, c2, o, e) {
  let { align: f3, axis: i, direction: u, startIndex: h, loop: d, duration: p3, dragFree: b2, dragThreshold: l3, inViewThreshold: m, slidesToScroll: g, skipSnaps: a2, containScroll: S, watchResize: x, watchSlides: T, watchDrag: M, watchFocus: I } = o, L = 2, E = sn(), v = E.measure(n), C = s.map(E.measure), D = nn(i, u), V = D.measureSize(v), G = rn(V), H = Wt(f3, V), j = !d && !!S, J = d || !!S, { slideSizes: Y, slideSizesWithGaps: U, startGap: $, endGap: st } = En(D, v, C, s, J, c2), R = Tn(D, V, g, d, v, C, $, st, L), { snaps: nt, snapsAligned: et } = mn(D, H, v, C, R), Q = -k(nt) + k(U), { snapsContained: rt, scrollContainLimit: it } = an(V, Q, et, S, L), z = j ? rt : et, { limit: w } = ln(Q, z, d), K = kt(pt(z), h, d), B = K.clone(), F = at(s), y2 = ({ dragHandler: ot, scrollBody: bt, scrollBounds: xt, options: { loop: mt } }) => {
    mt || xt.constrain(ot.pointerDown()), bt.seek();
  }, A = ({ scrollBody: ot, translate: bt, location: xt, offsetLocation: mt, previousLocation: qt, scrollLooper: Ut, slideLooper: $t, dragHandler: Qt, animation: Kt, eventHandler: Ft, scrollBounds: Xt, options: { loop: Pt } }, Ct) => {
    let Ot = ot.settled(), Yt = !Xt.shouldConstrain(), wt = Pt ? Ot : Ot && Yt, Nt = wt && !Qt.pointerDown();
    Nt && Kt.stop();
    let _t = xt.get() * Ct + qt.get() * (1 - Ct);
    mt.set(_t), Pt && (Ut.loop(ot.direction()), $t.loop()), bt.to(mt.get()), Nt && Ft.emit("settle"), wt || Ft.emit("scroll");
  }, O2 = tn(r, c2, () => y2(yt), (ot) => A(yt, ot)), N = 0.68, q = z[K.get()], X = ut(q), Z = ut(q), _ = ut(q), W = ut(q), ct = un(X, _, Z, W, p3, N), ht = hn(d, z, Q, w, W), St = Sn(O2, K, B, ct, ht, W, e), Dt = pn(w), At = dt(), jt = Ln(n, s, e, m), { slideRegistry: Mt } = gn(j, S, z, it, R, F), Rt = yn(t, s, Mt, St, ct, At, e, I), yt = { ownerDocument: r, ownerWindow: c2, eventHandler: e, containerRect: v, slideRects: C, animation: O2, axis: D, dragHandler: en(D, t, r, c2, W, on(D, c2), X, O2, St, ct, ht, K, e, G, b2, l3, a2, N, M), eventStore: At, percentOfView: G, index: K, indexPrevious: B, limit: w, location: X, offsetLocation: _, previousLocation: Z, options: o, resizeHandler: cn(n, e, c2, s, D, x, E), scrollBody: ct, scrollBounds: fn(w, _, W, ct, G), scrollLooper: dn(Q, w, _, [X, _, Z, W]), scrollProgress: Dt, scrollSnapList: z.map(Dt.get), scrollSnaps: z, scrollTarget: ht, scrollTo: St, slideLooper: bn(D, V, Q, Y, U, nt, z, _, s), slideFocus: Rt, slidesHandler: xn(n, e, T), slidesInView: jt, slideIndexes: F, slideRegistry: Mt, slidesToScroll: R, target: W, translate: Gt(D, n) };
  return yt;
}
function vn() {
  let t = {}, n;
  function s(u) {
    n = u;
  }
  function r(u) {
    return t[u] || [];
  }
  function c2(u) {
    return r(u).forEach((h) => h(n, u)), i;
  }
  function o(u, h) {
    return t[u] = r(u).concat([h]), i;
  }
  function e(u, h) {
    return t[u] = r(u).filter((d) => d !== h), i;
  }
  function f3() {
    t = {};
  }
  let i = { init: s, emit: c2, off: e, on: o, clear: f3 };
  return i;
}
var Dn = { align: "center", axis: "x", container: null, slides: null, containScroll: "trimSnaps", direction: "ltr", slidesToScroll: 1, inViewThreshold: 0, breakpoints: {}, dragFree: false, dragThreshold: 10, loop: false, skipSnaps: false, duration: 25, startIndex: 0, active: true, watchDrag: true, watchResize: true, watchSlides: true, watchFocus: true };
function An(t) {
  function n(o, e) {
    return Bt(o, e || {});
  }
  function s(o) {
    let e = o.breakpoints || {}, f3 = lt(e).filter((i) => t.matchMedia(i).matches).map((i) => e[i]).reduce((i, u) => n(i, u), {});
    return n(o, f3);
  }
  function r(o) {
    return o.map((e) => lt(e.breakpoints || {})).reduce((e, f3) => e.concat(f3), []).map(t.matchMedia);
  }
  return { mergeOptions: n, optionsAtMedia: s, optionsMediaQueries: r };
}
function Mn(t) {
  let n = [];
  function s(o, e) {
    return n = e.filter(({ options: f3 }) => t.optionsAtMedia(f3).active !== false), n.forEach((f3) => f3.init(o, t)), e.reduce((f3, i) => Object.assign(f3, { [i.name]: i }), {});
  }
  function r() {
    n = n.filter((o) => o.destroy());
  }
  return { init: s, destroy: r };
}
function Ht(t, n, s) {
  let r = t.ownerDocument, c2 = r.defaultView, o = An(c2), e = Mn(o), f3 = dt(), i = vn(), { mergeOptions: u, optionsAtMedia: h, optionsMediaQueries: d } = o, { on: p3, off: b2, emit: l3 } = i, m = D, g = false, a2, S = u(Dn, Ht.globalOptions), x = u(S), T = [], M, I, L;
  function E() {
    let { container: F, slides: y2 } = x;
    I = (Lt(F) ? t.querySelector(F) : F) || t.children[0];
    let O2 = Lt(y2) ? I.querySelectorAll(y2) : y2;
    L = [].slice.call(O2 || I.children);
  }
  function v(F) {
    let y2 = In(t, I, L, r, c2, F, i);
    if (F.loop && !y2.slideLooper.canLoop()) {
      let A = Object.assign({}, F, { loop: false });
      return v(A);
    }
    return y2;
  }
  function C(F, y2) {
    g || (S = u(S, F), x = h(S), T = y2 || T, E(), a2 = v(x), d([S, ...T.map(({ options: A }) => A)]).forEach((A) => f3.add(A, "change", D)), x.active && (a2.translate.to(a2.location.get()), a2.animation.init(), a2.slidesInView.init(), a2.slideFocus.init(B), a2.eventHandler.init(B), a2.resizeHandler.init(B), a2.slidesHandler.init(B), a2.options.loop && a2.slideLooper.loop(), I.offsetParent && L.length && a2.dragHandler.init(B), M = e.init(B, T)));
  }
  function D(F, y2) {
    let A = R();
    V(), C(u({ startIndex: A }, F), y2), i.emit("reInit");
  }
  function V() {
    a2.dragHandler.destroy(), a2.eventStore.clear(), a2.translate.clear(), a2.slideLooper.clear(), a2.resizeHandler.destroy(), a2.slidesHandler.destroy(), a2.slidesInView.destroy(), a2.animation.destroy(), e.destroy(), f3.clear();
  }
  function G() {
    g || (g = true, f3.clear(), V(), i.emit("destroy"), i.clear());
  }
  function H(F, y2, A) {
    !x.active || g || (a2.scrollBody.useBaseFriction().useDuration(y2 === true ? 0 : x.duration), a2.scrollTo.index(F, A || 0));
  }
  function j(F) {
    let y2 = a2.index.add(1).get();
    H(y2, F, -1);
  }
  function J(F) {
    let y2 = a2.index.add(-1).get();
    H(y2, F, 1);
  }
  function Y() {
    return a2.index.add(1).get() !== R();
  }
  function U() {
    return a2.index.add(-1).get() !== R();
  }
  function $() {
    return a2.scrollSnapList;
  }
  function st() {
    return a2.scrollProgress.get(a2.offsetLocation.get());
  }
  function R() {
    return a2.index.get();
  }
  function nt() {
    return a2.indexPrevious.get();
  }
  function et() {
    return a2.slidesInView.get();
  }
  function Q() {
    return a2.slidesInView.get(false);
  }
  function rt() {
    return M;
  }
  function it() {
    return a2;
  }
  function z() {
    return t;
  }
  function w() {
    return I;
  }
  function K() {
    return L;
  }
  let B = { canScrollNext: Y, canScrollPrev: U, containerNode: w, internalEngine: it, destroy: G, off: b2, on: p3, emit: l3, plugins: rt, previousScrollSnap: nt, reInit: m, rootNode: z, scrollNext: j, scrollPrev: J, scrollProgress: st, scrollSnapList: $, scrollTo: H, selectedScrollSnap: R, slideNodes: K, slidesInView: et, slidesNotInView: Q };
  return C(n, s), setTimeout(() => i.emit("init"), 0), B;
}
Ht.globalOptions = void 0;

// http-url:https://esm.sh/embla-carousel-react@8.6.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/embla-carousel-react.mjs
import { useRef as l2, useState as f2, useCallback as p2, useEffect as c } from "react";
function b(e = {}, r = []) {
  let t = l2(e), n = l2(r), [u, s] = f2(), [a2, d] = f2(), o = p2(() => {
    u && u.reInit(t.current, n.current);
  }, [u]);
  return c(() => {
    l(t.current, e) || (t.current = e, o());
  }, [e, o]), c(() => {
    O(n.current, r) || (n.current = r, o());
  }, [r, o]), c(() => {
    if (p() && a2) {
      Ht.globalOptions = b.globalOptions;
      let i = Ht(a2, t.current, n.current);
      return s(i), () => i.destroy();
    } else s(void 0);
  }, [a2, s]), [d, u];
}
b.globalOptions = void 0;

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/carousel.tsx
import { ArrowLeft, ArrowRight } from "lucide-react";

// ../../ui-main/ui-main/apps/v4/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn2(...inputs) {
  return twMerge(clsx(inputs));
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/button.tsx
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn2(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/carousel.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = b(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx2(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx2(
        "div",
        {
          onKeyDownCapture: handleKeyDown,
          className: cn2("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...props,
          children
        }
      )
    }
  );
}
function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx2(
    "div",
    {
      ref: carouselRef,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ jsx2(
        "div",
        {
          className: cn2(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          ),
          ...props
        }
      )
    }
  );
}
function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx2(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: cn2(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
}
function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      "data-slot": "carousel-previous",
      variant,
      size,
      className: cn2(
        "absolute size-8 rounded-full",
        orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx2(ArrowLeft, {}),
        /* @__PURE__ */ jsx2("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      "data-slot": "carousel-next",
      variant,
      size,
      className: cn2(
        "absolute size-8 rounded-full",
        orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx2(ArrowRight, {}),
        /* @__PURE__ */ jsx2("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
};
