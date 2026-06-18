"use client";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/chart.tsx
import * as React from "react";

// http-url:https://esm.sh/immer@11.1.8/es2022/immer.mjs
var Me = Symbol.for("immer-nothing");
var $ = Symbol.for("immer-draftable");
var h = Symbol.for("immer-state");
function z(e14, ...t10) {
  throw new Error(`[Immer] minified error nr: ${e14}. Full error at: https://bit.ly/3cXEKWf`);
}
var C = Object;
var U = C.getPrototypeOf;
var Y = "constructor";
var j = "prototype";
var me = "configurable";
var oe = "enumerable";
var ie = "writable";
var J = "value";
var T = (e14) => !!e14 && !!e14[h];
function F(e14) {
  return e14 ? Ne(e14) || ee(e14) || !!e14[$] || !!e14[Y]?.[$] || te(e14) || re(e14) : false;
}
var Le = C[j][Y].toString();
var be = /* @__PURE__ */ new WeakMap();
function Ne(e14) {
  if (!e14 || !G(e14)) return false;
  let t10 = U(e14);
  if (t10 === null || t10 === C[j]) return true;
  let r11 = C.hasOwnProperty.call(t10, Y) && t10[Y];
  if (r11 === Object) return true;
  if (!R(r11)) return false;
  let n10 = be.get(r11);
  return n10 === void 0 && (n10 = Function.toString.call(r11), be.set(r11, n10)), n10 === Le;
}
function W(e14, t10, r11 = true) {
  V(e14) === 0 ? (r11 ? Reflect.ownKeys(e14) : C.keys(e14)).forEach((s8) => {
    t10(s8, e14[s8], e14);
  }) : e14.forEach((n10, s8) => t10(s8, n10, e14));
}
function V(e14) {
  let t10 = e14[h];
  return t10 ? t10.type_ : ee(e14) ? 1 : te(e14) ? 2 : re(e14) ? 3 : 0;
}
var B = (e14, t10, r11 = V(e14)) => r11 === 2 ? e14.has(t10) : C[j].hasOwnProperty.call(e14, t10);
var x = (e14, t10, r11 = V(e14)) => r11 === 2 ? e14.get(t10) : e14[t10];
var se = (e14, t10, r11, n10 = V(e14)) => {
  n10 === 2 ? e14.set(t10, r11) : n10 === 3 ? e14.add(r11) : e14[t10] = r11;
};
function He(e14, t10) {
  return e14 === t10 ? e14 !== 0 || 1 / e14 === 1 / t10 : e14 !== e14 && t10 !== t10;
}
var ee = Array.isArray;
var te = (e14) => e14 instanceof Map;
var re = (e14) => e14 instanceof Set;
var G = (e14) => typeof e14 == "object";
var R = (e14) => typeof e14 == "function";
var ye = (e14) => typeof e14 == "boolean";
function Ge(e14) {
  let t10 = +e14;
  return Number.isInteger(t10) && String(t10) === e14;
}
var I = (e14) => e14.copy_ || e14.base_;
var Oe = (e14) => e14.modified_ ? e14.copy_ : e14.base_;
function Se(e14, t10) {
  if (te(e14)) return new Map(e14);
  if (re(e14)) return new Set(e14);
  if (ee(e14)) return Array[j].slice.call(e14);
  let r11 = Ne(e14);
  if (t10 === true || t10 === "class_only" && !r11) {
    let n10 = C.getOwnPropertyDescriptors(e14);
    delete n10[h];
    let s8 = Reflect.ownKeys(n10);
    for (let a11 = 0; a11 < s8.length; a11++) {
      let _14 = s8[a11], m18 = n10[_14];
      m18[ie] === false && (m18[ie] = true, m18[me] = true), (m18.get || m18.set) && (n10[_14] = { [me]: true, [ie]: true, [oe]: m18[oe], [J]: e14[_14] });
    }
    return C.create(U(e14), n10);
  } else {
    let n10 = U(e14);
    if (n10 !== null && r11) return { ...e14 };
    let s8 = C.create(n10);
    return C.assign(s8, e14);
  }
}
function Ie(e14, t10 = false) {
  return _e(e14) || T(e14) || !F(e14) || (V(e14) > 1 && C.defineProperties(e14, { set: ne, add: ne, clear: ne, delete: ne }), C.freeze(e14), t10 && W(e14, (r11, n10) => {
    Ie(n10, true);
  }, false)), e14;
}
function $e() {
  z(2);
}
var ne = { [J]: $e };
function _e(e14) {
  return e14 === null || !G(e14) ? true : C.isFrozen(e14);
}
var Q = "MapSet";
var ce = "Patches";
var ve = "ArrayMethods";
var ae = {};
function L(e14) {
  let t10 = ae[e14];
  return t10 || z(0, e14), t10;
}
var ze = (e14) => !!ae[e14];
var X;
var fe = () => X;
var Be = (e14, t10) => ({ drafts_: [], parent_: e14, immer_: t10, canAutoFreeze_: true, unfinalizedDrafts_: 0, handledSet_: /* @__PURE__ */ new Set(), processedForPatches_: /* @__PURE__ */ new Set(), mapSetPlugin_: ze(Q) ? L(Q) : void 0, arrayMethodsPlugin_: ze(ve) ? L(ve) : void 0 });
function De(e14, t10) {
  t10 && (e14.patchPlugin_ = L(ce), e14.patches_ = [], e14.inversePatches_ = [], e14.patchListener_ = t10);
}
function Pe(e14) {
  we(e14), e14.drafts_.forEach(Ke), e14.drafts_ = null;
}
function we(e14) {
  e14 === X && (X = e14.parent_);
}
var Ae = (e14) => X = Be(X, e14);
function Ke(e14) {
  let t10 = e14[h];
  t10.type_ === 0 || t10.type_ === 1 ? t10.revoke_() : t10.revoked_ = true;
}
function Ce(e14, t10) {
  t10.unfinalizedDrafts_ = t10.drafts_.length;
  let r11 = t10.drafts_[0];
  if (e14 !== void 0 && e14 !== r11) {
    r11[h].modified_ && (Pe(t10), z(4)), F(e14) && (e14 = Fe(t10, e14));
    let { patchPlugin_: s8 } = t10;
    s8 && s8.generateReplacementPatches_(r11[h].base_, e14, t10);
  } else e14 = Fe(t10, r11);
  return Ye(t10, e14, true), Pe(t10), t10.patches_ && t10.patchListener_(t10.patches_, t10.inversePatches_), e14 !== Me ? e14 : void 0;
}
function Fe(e14, t10) {
  if (_e(t10)) return t10;
  let r11 = t10[h];
  if (!r11) return le(t10, e14.handledSet_, e14);
  if (!pe(r11, e14)) return t10;
  if (!r11.modified_) return r11.base_;
  if (!r11.finalized_) {
    let { callbacks_: n10 } = r11;
    if (n10) for (; n10.length > 0; ) n10.pop()(e14);
    Re(r11, e14);
  }
  return r11.copy_;
}
function Ye(e14, t10, r11 = false) {
  !e14.parent_ && e14.immer_.autoFreeze_ && e14.canAutoFreeze_ && Ie(t10, r11);
}
function ke(e14) {
  e14.finalized_ = true, e14.scope_.unfinalizedDrafts_--;
}
var pe = (e14, t10) => e14.scope_ === t10;
var Je = [];
function xe(e14, t10, r11, n10) {
  let s8 = I(e14), a11 = e14.type_;
  if (n10 !== void 0 && x(s8, n10, a11) === t10) {
    se(s8, n10, r11, a11);
    return;
  }
  if (!e14.draftLocations_) {
    let m18 = e14.draftLocations_ = /* @__PURE__ */ new Map();
    W(s8, (p12, i9) => {
      if (T(i9)) {
        let o15 = m18.get(i9) || [];
        o15.push(p12), m18.set(i9, o15);
      }
    });
  }
  let _14 = e14.draftLocations_.get(t10) ?? Je;
  for (let m18 of _14) se(s8, m18, r11, a11);
}
function Qe(e14, t10, r11) {
  e14.callbacks_.push(function(s8) {
    let a11 = t10;
    if (!a11 || !pe(a11, s8)) return;
    s8.mapSetPlugin_?.fixSetContents(a11);
    let _14 = Oe(a11);
    xe(e14, a11.draft_ ?? a11, _14, r11), Re(a11, s8);
  });
}
function Re(e14, t10) {
  if (e14.modified_ && !e14.finalized_ && (e14.type_ === 3 || e14.type_ === 1 && e14.allIndicesReassigned_ || (e14.assigned_?.size ?? 0) > 0)) {
    let { patchPlugin_: n10 } = t10;
    if (n10) {
      let s8 = n10.getPath(e14);
      s8 && n10.generatePatches_(e14, s8, t10);
    }
    ke(e14);
  }
}
function ue(e14, t10, r11) {
  let { scope_: n10 } = e14;
  if (T(r11)) {
    let s8 = r11[h];
    pe(s8, n10) && s8.callbacks_.push(function() {
      K(e14);
      let _14 = Oe(s8);
      xe(e14, r11, _14, t10);
    });
  } else F(r11) && e14.callbacks_.push(function() {
    let a11 = I(e14);
    e14.type_ === 3 ? a11.has(r11) && le(r11, n10.handledSet_, n10) : x(a11, t10, e14.type_) === r11 && n10.drafts_.length > 1 && (e14.assigned_.get(t10) ?? false) === true && e14.copy_ && le(x(e14.copy_, t10, e14.type_), n10.handledSet_, n10);
  });
}
function le(e14, t10, r11) {
  return !r11.immer_.autoFreeze_ && r11.unfinalizedDrafts_ < 1 || T(e14) || t10.has(e14) || !F(e14) || _e(e14) || (t10.add(e14), W(e14, (n10, s8) => {
    if (T(s8)) {
      let a11 = s8[h];
      if (pe(a11, r11)) {
        let _14 = Oe(a11);
        se(e14, n10, _14, e14.type_), ke(a11);
      }
    } else F(s8) && le(s8, t10, r11);
  })), e14;
}
function Xe(e14, t10) {
  let r11 = ee(e14), n10 = { type_: r11 ? 1 : 0, scope_: t10 ? t10.scope_ : fe(), modified_: false, finalized_: false, assigned_: void 0, parent_: t10, base_: e14, draft_: null, copy_: null, revoke_: null, isManual_: false, callbacks_: void 0 }, s8 = n10, a11 = de;
  r11 && (s8 = [n10], a11 = q);
  let { revoke: _14, proxy: m18 } = Proxy.revocable(s8, a11);
  return n10.draft_ = m18, n10.revoke_ = _14, [m18, n10];
}
var de = { get(e14, t10) {
  if (t10 === h) return e14;
  let r11 = e14.scope_.arrayMethodsPlugin_, n10 = e14.type_ === 1 && typeof t10 == "string";
  if (n10 && r11?.isArrayOperationMethod(t10)) return r11.createMethodInterceptor(e14, t10);
  let s8 = I(e14);
  if (!B(s8, t10, e14.type_)) return qe(e14, s8, t10);
  let a11 = s8[t10];
  if (e14.finalized_ || !F(a11) || n10 && e14.operationMethod && r11?.isMutatingArrayMethod(e14.operationMethod) && Ge(t10)) return a11;
  if (a11 === ge(e14.base_, t10)) {
    K(e14);
    let _14 = e14.type_ === 1 ? +t10 : t10, m18 = Z(e14.scope_, a11, e14, _14);
    return e14.copy_[_14] = m18;
  }
  return a11;
}, has(e14, t10) {
  return t10 in I(e14);
}, ownKeys(e14) {
  return Reflect.ownKeys(I(e14));
}, set(e14, t10, r11) {
  let n10 = Ue(I(e14), t10);
  if (n10?.set) return n10.set.call(e14.draft_, r11), true;
  if (!e14.modified_) {
    let s8 = ge(I(e14), t10), a11 = s8?.[h];
    if (a11 && a11.base_ === r11) return e14.copy_[t10] = r11, e14.assigned_.set(t10, false), true;
    if (He(r11, s8) && (r11 !== void 0 || B(e14.base_, t10, e14.type_))) return true;
    K(e14), N(e14);
  }
  return e14.copy_[t10] === r11 && (r11 !== void 0 || t10 in e14.copy_) || Number.isNaN(r11) && Number.isNaN(e14.copy_[t10]) || (e14.copy_[t10] = r11, e14.assigned_.set(t10, true), ue(e14, t10, r11)), true;
}, deleteProperty(e14, t10) {
  return K(e14), ge(e14.base_, t10) !== void 0 || t10 in e14.base_ ? (e14.assigned_.set(t10, false), N(e14)) : e14.assigned_.delete(t10), e14.copy_ && delete e14.copy_[t10], true;
}, getOwnPropertyDescriptor(e14, t10) {
  let r11 = I(e14), n10 = Reflect.getOwnPropertyDescriptor(r11, t10);
  return n10 && { [ie]: true, [me]: e14.type_ !== 1 || t10 !== "length", [oe]: n10[oe], [J]: r11[t10] };
}, defineProperty() {
  z(11);
}, getPrototypeOf(e14) {
  return U(e14.base_);
}, setPrototypeOf() {
  z(12);
} };
var q = {};
for (let e14 in de) {
  let t10 = de[e14];
  q[e14] = function() {
    let r11 = arguments;
    return r11[0] = r11[0][0], t10.apply(this, r11);
  };
}
q.deleteProperty = function(e14, t10) {
  return q.set.call(this, e14, t10, void 0);
};
q.set = function(e14, t10, r11) {
  return de.set.call(this, e14[0], t10, r11, e14[0]);
};
function ge(e14, t10) {
  let r11 = e14[h];
  return (r11 ? I(r11) : e14)[t10];
}
function qe(e14, t10, r11) {
  let n10 = Ue(t10, r11);
  return n10 ? J in n10 ? n10[J] : n10.get?.call(e14.draft_) : void 0;
}
function Ue(e14, t10) {
  if (!(t10 in e14)) return;
  let r11 = U(e14);
  for (; r11; ) {
    let n10 = Object.getOwnPropertyDescriptor(r11, t10);
    if (n10) return n10;
    r11 = U(r11);
  }
}
function N(e14) {
  e14.modified_ || (e14.modified_ = true, e14.parent_ && N(e14.parent_));
}
function K(e14) {
  e14.copy_ || (e14.assigned_ = /* @__PURE__ */ new Map(), e14.copy_ = Se(e14.base_, e14.scope_.immer_.useStrictShallowCopy_));
}
var Ze = class {
  constructor(e14) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.useStrictIteration_ = false, this.produce = (t10, r11, n10) => {
      if (R(t10) && !R(r11)) {
        let a11 = r11;
        r11 = t10;
        let _14 = this;
        return function(p12 = a11, ...i9) {
          return _14.produce(p12, (o15) => r11.call(this, o15, ...i9));
        };
      }
      R(r11) || z(6), n10 !== void 0 && !R(n10) && z(7);
      let s8;
      if (F(t10)) {
        let a11 = Ae(this), _14 = Z(a11, t10, void 0), m18 = true;
        try {
          s8 = r11(_14), m18 = false;
        } finally {
          m18 ? Pe(a11) : we(a11);
        }
        return De(a11, n10), Ce(s8, a11);
      } else if (!t10 || !G(t10)) {
        if (s8 = r11(t10), s8 === void 0 && (s8 = t10), s8 === Me && (s8 = void 0), this.autoFreeze_ && Ie(s8, true), n10) {
          let a11 = [], _14 = [];
          L(ce).generateReplacementPatches_(t10, s8, { patches_: a11, inversePatches_: _14 }), n10(a11, _14);
        }
        return s8;
      } else z(1, t10);
    }, this.produceWithPatches = (t10, r11) => {
      if (R(t10)) return (_14, ...m18) => this.produceWithPatches(_14, (p12) => t10(p12, ...m18));
      let n10, s8;
      return [this.produce(t10, r11, (_14, m18) => {
        n10 = _14, s8 = m18;
      }), n10, s8];
    }, ye(e14?.autoFreeze) && this.setAutoFreeze(e14.autoFreeze), ye(e14?.useStrictShallowCopy) && this.setUseStrictShallowCopy(e14.useStrictShallowCopy), ye(e14?.useStrictIteration) && this.setUseStrictIteration(e14.useStrictIteration);
  }
  createDraft(e14) {
    F(e14) || z(8), T(e14) && (e14 = je(e14));
    let t10 = Ae(this), r11 = Z(t10, e14, void 0);
    return r11[h].isManual_ = true, we(t10), r11;
  }
  finishDraft(e14, t10) {
    let r11 = e14 && e14[h];
    (!r11 || !r11.isManual_) && z(9);
    let { scope_: n10 } = r11;
    return De(n10, t10), Ce(void 0, n10);
  }
  setAutoFreeze(e14) {
    this.autoFreeze_ = e14;
  }
  setUseStrictShallowCopy(e14) {
    this.useStrictShallowCopy_ = e14;
  }
  setUseStrictIteration(e14) {
    this.useStrictIteration_ = e14;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e14, t10) {
    let r11;
    for (r11 = t10.length - 1; r11 >= 0; r11--) {
      let s8 = t10[r11];
      if (s8.path.length === 0 && s8.op === "replace") {
        e14 = s8.value;
        break;
      }
    }
    r11 > -1 && (t10 = t10.slice(r11 + 1));
    let n10 = L(ce).applyPatches_;
    return T(e14) ? n10(e14, t10) : this.produce(e14, (s8) => n10(s8, t10));
  }
};
function Z(e14, t10, r11, n10) {
  let [s8, a11] = te(t10) ? L(Q).proxyMap_(t10, r11) : re(t10) ? L(Q).proxySet_(t10, r11) : Xe(t10, r11);
  return (r11?.scope_ ?? fe()).drafts_.push(s8), a11.callbacks_ = r11?.callbacks_ ?? [], a11.key_ = n10, r11 && n10 !== void 0 ? Qe(r11, a11, n10) : a11.callbacks_.push(function(p12) {
    p12.mapSetPlugin_?.fixSetContents(a11);
    let { patchPlugin_: i9 } = p12;
    a11.modified_ && i9 && i9.generatePatches_(a11, [], p12);
  }), s8;
}
function je(e14) {
  return T(e14) || z(10, e14), Ve(e14);
}
function Ve(e14) {
  if (!F(e14) || _e(e14)) return e14;
  let t10 = e14[h], r11, n10 = true;
  if (t10) {
    if (!t10.modified_) return t10.base_;
    t10.finalized_ = true, r11 = Se(e14, t10.scope_.immer_.useStrictShallowCopy_), n10 = t10.scope_.immer_.shouldUseStrictIteration();
  } else r11 = Se(e14, true);
  return W(r11, (s8, a11) => {
    se(r11, s8, Ve(a11));
  }, n10), t10 && (t10.finalized_ = false), r11;
}
var D = new Ze();
var it = D.produce;
var ot = D.produceWithPatches.bind(D);
var st = D.setAutoFreeze.bind(D);
var ct = D.setUseStrictShallowCopy.bind(D);
var at = D.setUseStrictIteration.bind(D);
var ft = D.applyPatches.bind(D);
var ut = D.createDraft.bind(D);
var lt = D.finishDraft.bind(D);

// http-url:https://esm.sh/redux-thunk@3.1.0/es2022/redux-thunk.mjs
function e(t10) {
  return ({ dispatch: n10, getState: u9 }) => (d12) => (r11) => typeof r11 == "function" ? r11(n10, u9, t10) : d12(r11);
}
var i = e();
var f = e;

// http-url:https://esm.sh/redux@5.0.1/es2022/redux.mjs
function r(e14) {
  return `Minified Redux error #${e14}; visit https://redux.js.org/Errors?code=${e14} for the full message or use the non-minified dev environment for full errors. `;
}
var D2 = typeof Symbol == "function" && Symbol.observable || "@@observable";
var v = D2;
var N2 = () => Math.random().toString(36).substring(7).split("").join(".");
var I2 = { INIT: `@@redux/INIT${N2()}`, REPLACE: `@@redux/REPLACE${N2()}`, PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${N2()}` };
var g = I2;
function x2(e14) {
  if (typeof e14 != "object" || e14 === null) return false;
  let t10 = e14;
  for (; Object.getPrototypeOf(t10) !== null; ) t10 = Object.getPrototypeOf(t10);
  return Object.getPrototypeOf(e14) === t10 || Object.getPrototypeOf(e14) === null;
}
function _(e14, t10, n10) {
  if (typeof e14 != "function") throw new Error(r(2));
  if (typeof t10 == "function" && typeof n10 == "function" || typeof n10 == "function" && typeof arguments[3] == "function") throw new Error(r(0));
  if (typeof t10 == "function" && typeof n10 > "u" && (n10 = t10, t10 = void 0), typeof n10 < "u") {
    if (typeof n10 != "function") throw new Error(r(1));
    return n10(_)(e14, t10);
  }
  let s8 = e14, a11 = t10, u9 = /* @__PURE__ */ new Map(), i9 = u9, d12 = 0, c16 = false;
  function f10() {
    i9 === u9 && (i9 = /* @__PURE__ */ new Map(), u9.forEach((o15, p12) => {
      i9.set(p12, o15);
    }));
  }
  function E18() {
    if (c16) throw new Error(r(3));
    return a11;
  }
  function l12(o15) {
    if (typeof o15 != "function") throw new Error(r(4));
    if (c16) throw new Error(r(5));
    let p12 = true;
    f10();
    let h13 = d12++;
    return i9.set(h13, o15), function() {
      if (p12) {
        if (c16) throw new Error(r(6));
        p12 = false, f10(), i9.delete(h13), u9 = null;
      }
    };
  }
  function y16(o15) {
    if (!x2(o15)) throw new Error(r(7));
    if (typeof o15.type > "u") throw new Error(r(8));
    if (typeof o15.type != "string") throw new Error(r(17));
    if (c16) throw new Error(r(9));
    try {
      c16 = true, a11 = s8(a11, o15);
    } finally {
      c16 = false;
    }
    return (u9 = i9).forEach((h13) => {
      h13();
    }), o15;
  }
  function m18(o15) {
    if (typeof o15 != "function") throw new Error(r(10));
    s8 = o15, y16({ type: g.REPLACE });
  }
  function b14() {
    let o15 = l12;
    return { subscribe(p12) {
      if (typeof p12 != "object" || p12 === null) throw new Error(r(11));
      function h13() {
        let O12 = p12;
        O12.next && O12.next(E18());
      }
      return h13(), { unsubscribe: o15(h13) };
    }, [v]() {
      return this;
    } };
  }
  return y16({ type: g.INIT }), { dispatch: y16, subscribe: l12, getState: E18, replaceReducer: m18, [v]: b14 };
}
function $2(e14) {
  Object.keys(e14).forEach((t10) => {
    let n10 = e14[t10];
    if (typeof n10(void 0, { type: g.INIT }) > "u") throw new Error(r(12));
    if (typeof n10(void 0, { type: g.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(r(13));
  });
}
function V2(e14) {
  let t10 = Object.keys(e14), n10 = {};
  for (let i9 = 0; i9 < t10.length; i9++) {
    let d12 = t10[i9];
    typeof e14[d12] == "function" && (n10[d12] = e14[d12]);
  }
  let s8 = Object.keys(n10), a11, u9;
  try {
    $2(n10);
  } catch (i9) {
    u9 = i9;
  }
  return function(d12 = {}, c16) {
    if (u9) throw u9;
    let f10 = false, E18 = {};
    for (let l12 = 0; l12 < s8.length; l12++) {
      let y16 = s8[l12], m18 = n10[y16], b14 = d12[y16], w9 = m18(b14, c16);
      if (typeof w9 > "u") {
        let o15 = c16 && c16.type;
        throw new Error(r(14));
      }
      E18[y16] = w9, f10 = f10 || w9 !== b14;
    }
    return f10 = f10 || s8.length !== Object.keys(d12).length, f10 ? E18 : d12;
  };
}
function T2(...e14) {
  return e14.length === 0 ? (t10) => t10 : e14.length === 1 ? e14[0] : e14.reduce((t10, n10) => (...s8) => t10(n10(...s8)));
}
function R2(...e14) {
  return (t10) => (n10, s8) => {
    let a11 = t10(n10, s8), u9 = () => {
      throw new Error(r(15));
    }, i9 = { getState: a11.getState, dispatch: (c16, ...f10) => u9(c16, ...f10) }, d12 = e14.map((c16) => c16(i9));
    return u9 = T2(...d12)(a11.dispatch), { ...a11, dispatch: u9 };
  };
}
function P(e14) {
  return x2(e14) && "type" in e14 && typeof e14.type == "string";
}

// http-url:https://esm.sh/reselect@5.2.0/es2022/reselect.mjs
var R3 = Symbol("NOT_FOUND");
function z2(e14, t10 = `expected a function, instead received ${typeof e14}`) {
  if (typeof e14 != "function") throw new TypeError(t10);
}
function G2(e14, t10 = `expected an object, instead received ${typeof e14}`) {
  if (typeof e14 != "object") throw new TypeError(t10);
}
function L2(e14, t10 = "expected all items to be functions, instead received the following types: ") {
  if (!e14.every((n10) => typeof n10 == "function")) {
    let n10 = e14.map((i9) => typeof i9 == "function" ? `function ${i9.name || "unnamed"}()` : typeof i9).join(", ");
    throw new TypeError(`${t10}[${n10}]`);
  }
}
var N3 = (e14) => Array.isArray(e14) ? e14 : [e14];
function B2(e14) {
  let t10 = Array.isArray(e14[0]) ? e14[0] : e14;
  return L2(t10, "createSelector expects all input-selectors to be functions, but received the following types: "), t10;
}
function J2(e14, t10) {
  let n10 = [], { length: i9 } = e14;
  for (let c16 = 0; c16 < i9; c16++) n10.push(e14[c16].apply(null, t10));
  return n10;
}
var te2 = Object.getPrototypeOf({});
var ce2 = class {
  constructor(e14) {
    this.value = e14;
  }
  deref() {
    return this.value;
  }
};
var ue2 = () => typeof WeakRef > "u" ? ce2 : WeakRef;
var V3 = ue2();
var le2 = 0;
var I3 = 1;
function m() {
  return { s: le2, v: void 0, o: null, p: null };
}
function ae2(e14) {
  return e14 instanceof V3 ? e14.deref() : e14;
}
function K2(e14, t10 = {}) {
  let n10 = m(), { resultEqualityCheck: i9 } = t10, c16, r11 = 0;
  function s8() {
    let o15 = n10, { length: l12 } = arguments;
    for (let p12 = 0, h13 = l12; p12 < h13; p12++) {
      let f10 = arguments[p12];
      if (typeof f10 == "function" || typeof f10 == "object" && f10 !== null) {
        let d12 = o15.o;
        d12 === null && (o15.o = d12 = /* @__PURE__ */ new WeakMap());
        let y16 = d12.get(f10);
        y16 === void 0 ? (o15 = m(), d12.set(f10, o15)) : o15 = y16;
      } else {
        let d12 = o15.p;
        d12 === null && (o15.p = d12 = /* @__PURE__ */ new Map());
        let y16 = d12.get(f10);
        y16 === void 0 ? (o15 = m(), d12.set(f10, o15)) : o15 = y16;
      }
    }
    let u9 = o15, a11;
    if (o15.s === I3) a11 = o15.v;
    else if (a11 = e14.apply(null, arguments), r11++, i9) {
      let p12 = ae2(c16);
      p12 != null && i9(p12, a11) && (a11 = p12, r11 !== 0 && r11--), c16 = typeof a11 == "object" && a11 !== null || typeof a11 == "function" ? new V3(a11) : a11;
    }
    return u9.s = I3, u9.v = a11, a11;
  }
  return s8.clearCache = () => {
    n10 = m(), s8.resetResultsCount();
  }, s8.resultsCount = () => r11, s8.resetResultsCount = () => {
    r11 = 0;
  }, s8;
}
function fe2(e14, ...t10) {
  let n10 = typeof e14 == "function" ? { memoize: e14, memoizeOptions: t10 } : e14, i9 = (...c16) => {
    let r11 = 0, s8 = 0, o15, l12 = {}, u9 = c16.pop();
    typeof u9 == "object" && (l12 = u9, u9 = c16.pop()), z2(u9, `createSelector expects an output function after the inputs, but received: [${typeof u9}]`);
    let a11 = { ...n10, ...l12 }, { memoize: p12, memoizeOptions: h13 = [], argsMemoize: f10 = K2, argsMemoizeOptions: d12 = [] } = a11, y16 = N3(h13), P16 = N3(d12), T15 = B2(c16), _14 = p12(function() {
      return r11++, u9.apply(null, arguments);
    }, ...y16), he5 = true, $14 = f10(function() {
      s8++;
      let U11 = J2(T15, arguments);
      return o15 = _14.apply(null, U11), o15;
    }, ...P16);
    return Object.assign($14, { resultFunc: u9, memoizedResultFunc: _14, dependencies: T15, dependencyRecomputations: () => s8, resetDependencyRecomputations: () => {
      s8 = 0;
    }, lastResult: () => o15, recomputations: () => r11, resetRecomputations: () => {
      r11 = 0;
    }, memoize: p12, argsMemoize: f10 });
  };
  return Object.assign(i9, { withTypes: () => i9 }), i9;
}
var pe2 = fe2(K2);
var de2 = Object.assign((e14, t10 = pe2) => {
  G2(e14, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e14}`);
  let n10 = Object.keys(e14), i9 = n10.map((r11) => e14[r11]);
  return t10(i9, (...r11) => r11.reduce((s8, o15, l12) => (s8[n10[l12]] = o15, s8), {}));
}, { withTypes: () => de2 });

// http-url:https://esm.sh/@reduxjs/toolkit@2.12.0/X-ZXJlYWN0/es2022/toolkit.mjs
var Le2 = (...e14) => {
  let t10 = fe2(...e14), r11 = Object.assign((...n10) => {
    let a11 = t10(...n10), i9 = (o15, ...l12) => a11(T(o15) ? je(o15) : o15, ...l12);
    return Object.assign(i9, a11), i9;
  }, { withTypes: () => r11 });
  return r11;
};
var Ne2 = Le2(K2);
var We = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0) return typeof arguments[0] == "object" ? T2 : T2.apply(null, arguments);
};
var or = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
  return function(e14) {
    return e14;
  };
};
var me2 = (e14) => e14 && typeof e14.match == "function";
function T3(e14, t10) {
  function r11(...n10) {
    if (t10) {
      let a11 = t10(...n10);
      if (!a11) throw new Error(A(0));
      return { type: e14, payload: a11.payload, ..."meta" in a11 && { meta: a11.meta }, ..."error" in a11 && { error: a11.error } };
    }
    return { type: e14, payload: n10[0] };
  }
  return r11.toString = () => `${e14}`, r11.type = e14, r11.match = (n10) => P(n10) && n10.type === e14, r11;
}
var ge2 = class x3 extends Array {
  constructor(...t10) {
    super(...t10), Object.setPrototypeOf(this, x3.prototype);
  }
  static get [Symbol.species]() {
    return x3;
  }
  concat(...t10) {
    return super.concat.apply(this, t10);
  }
  prepend(...t10) {
    return t10.length === 1 && Array.isArray(t10[0]) ? new x3(...t10[0].concat(this)) : new x3(...t10.concat(this));
  }
};
function oe2(e14) {
  return F(e14) ? it(e14, () => {
  }) : e14;
}
function C2(e14, t10, r11) {
  return e14.has(t10) ? e14.get(t10) : e14.set(t10, r11(t10)).get(t10);
}
function Je2(e14) {
  return typeof e14 == "boolean";
}
var Ke2 = () => function(e14) {
  let { thunk: t10 = true, immutableCheck: r11 = true, serializableCheck: n10 = true, actionCreatorCheck: a11 = true } = e14 ?? {}, i9 = new ge2();
  return t10 && (Je2(t10) ? i9.push(i) : i9.push(f(t10.extraArgument))), i9;
};
var be2 = "RTK_autoBatch";
var pr = () => (e14) => ({ payload: e14, meta: { [be2]: true } });
var se2 = (e14) => (t10) => {
  setTimeout(t10, e14);
};
var Qe2 = (e14, t10) => (r11) => {
  let n10 = false, a11 = () => {
    n10 || (n10 = true, cancelAnimationFrame(i9), clearTimeout(o15), r11());
  }, i9 = e14(a11), o15 = setTimeout(a11, t10);
};
var Ye2 = (e14 = { type: "raf" }) => (t10) => (...r11) => {
  let n10 = t10(...r11), a11 = true, i9 = false, o15 = false, l12 = /* @__PURE__ */ new Set(), s8 = e14.type === "tick" ? queueMicrotask : e14.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? Qe2(window.requestAnimationFrame, 100) : se2(10) : e14.type === "callback" ? e14.queueNotification : se2(e14.timeout), g13 = () => {
    o15 = false, i9 && (i9 = false, l12.forEach((d12) => d12()));
  };
  return Object.assign({}, n10, { subscribe(d12) {
    let p12 = () => a11 && d12(), u9 = n10.subscribe(p12);
    return l12.add(d12), () => {
      u9(), l12.delete(d12);
    };
  }, dispatch(d12) {
    try {
      return a11 = !d12?.meta?.[be2], i9 = !a11, i9 && (o15 || (o15 = true, s8(g13))), n10.dispatch(d12);
    } finally {
      a11 = true;
    }
  } });
};
var Ze2 = (e14) => function(t10) {
  let { autoBatch: r11 = true } = t10 ?? {}, n10 = new ge2(e14);
  return r11 && n10.push(Ye2(typeof r11 == "object" ? r11 : void 0)), n10;
};
function hr(e14) {
  let t10 = Ke2(), { reducer: r11 = void 0, middleware: n10, devTools: a11 = true, duplicateMiddlewareCheck: i9 = true, preloadedState: o15 = void 0, enhancers: l12 = void 0 } = e14 || {}, s8;
  if (typeof r11 == "function") s8 = r11;
  else if (x2(r11)) s8 = V2(r11);
  else throw new Error(A(1));
  let g13;
  typeof n10 == "function" ? g13 = n10(t10) : g13 = t10();
  let d12 = T2;
  a11 && (d12 = We({ trace: false, ...typeof a11 == "object" && a11 }));
  let p12 = R2(...g13), u9 = Ze2(p12), v9 = typeof l12 == "function" ? l12(u9) : u9(), h13 = d12(...v9);
  return _(s8, o15, h13);
}
function ve2(e14) {
  let t10 = {}, r11 = [], n10, a11 = { addCase(i9, o15) {
    let l12 = typeof i9 == "string" ? i9 : i9.type;
    if (!l12) throw new Error(A(28));
    if (l12 in t10) throw new Error(A(29));
    return t10[l12] = o15, a11;
  }, addAsyncThunk(i9, o15) {
    return o15.pending && (t10[i9.pending.type] = o15.pending), o15.rejected && (t10[i9.rejected.type] = o15.rejected), o15.fulfilled && (t10[i9.fulfilled.type] = o15.fulfilled), o15.settled && r11.push({ matcher: i9.settled, reducer: o15.settled }), a11;
  }, addMatcher(i9, o15) {
    return r11.push({ matcher: i9, reducer: o15 }), a11;
  }, addDefaultCase(i9) {
    return n10 = i9, a11;
  } };
  return e14(a11), [t10, r11, n10];
}
function et2(e14) {
  return typeof e14 == "function";
}
function tt(e14, t10) {
  let [r11, n10, a11] = ve2(t10), i9;
  if (et2(e14)) i9 = () => oe2(e14());
  else {
    let l12 = oe2(e14);
    i9 = () => l12;
  }
  function o15(l12 = i9(), s8) {
    let g13 = [r11[s8.type], ...n10.filter(({ matcher: d12 }) => d12(s8)).map(({ reducer: d12 }) => d12)];
    return g13.filter((d12) => !!d12).length === 0 && (g13 = [a11]), g13.reduce((d12, p12) => {
      if (p12) if (T(d12)) {
        let u9 = p12(d12, s8);
        return u9 === void 0 ? d12 : u9;
      } else {
        if (F(d12)) return it(d12, (u9) => p12(u9, s8));
        {
          let u9 = p12(d12, s8);
          if (u9 === void 0) {
            if (d12 === null) return d12;
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return u9;
        }
      }
      return d12;
    }, l12);
  }
  return o15.getInitialState = i9, o15;
}
var Ee = (e14, t10) => me2(e14) ? e14.match(t10) : e14(t10);
function D3(...e14) {
  return (t10) => e14.some((r11) => Ee(r11, t10));
}
var ot2 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var U2 = (e14 = 21) => {
  let t10 = "", r11 = e14;
  for (; r11--; ) t10 += ot2[Math.random() * 64 | 0];
  return t10;
};
var st2 = ["name", "message", "stack", "code"];
var J3 = class {
  constructor(e14, t10) {
    this.payload = e14, this.meta = t10;
  }
  payload;
  meta;
  _type;
};
var ce3 = class {
  constructor(e14, t10) {
    this.payload = e14, this.meta = t10;
  }
  payload;
  meta;
  _type;
};
var ct2 = (e14) => {
  if (typeof e14 == "object" && e14 !== null) {
    let t10 = {};
    for (let r11 of st2) typeof e14[r11] == "string" && (t10[r11] = e14[r11]);
    return t10;
  }
  return { message: String(e14) };
};
var ue3 = "External signal was aborted";
var ut2 = (() => {
  function e14(t10, r11, n10) {
    let a11 = T3(t10 + "/fulfilled", (s8, g13, d12, p12) => ({ payload: s8, meta: { ...p12 || {}, arg: d12, requestId: g13, requestStatus: "fulfilled" } })), i9 = T3(t10 + "/pending", (s8, g13, d12) => ({ payload: void 0, meta: { ...d12 || {}, arg: g13, requestId: s8, requestStatus: "pending" } })), o15 = T3(t10 + "/rejected", (s8, g13, d12, p12, u9) => ({ payload: p12, error: (n10 && n10.serializeError || ct2)(s8 || "Rejected"), meta: { ...u9 || {}, arg: d12, requestId: g13, rejectedWithValue: !!p12, requestStatus: "rejected", aborted: s8?.name === "AbortError", condition: s8?.name === "ConditionError" } }));
    function l12(s8, { signal: g13 } = {}) {
      return (d12, p12, u9) => {
        let v9 = n10?.idGenerator ? n10.idGenerator(s8) : U2(), h13 = new AbortController(), y16, c16;
        function m18(w9) {
          c16 = w9, h13.abort();
        }
        g13 && (g13.aborted ? m18(ue3) : g13.addEventListener("abort", () => m18(ue3), { once: true }));
        let f10 = async function() {
          let w9;
          try {
            let b14 = n10?.condition?.(s8, { getState: p12, extra: u9 });
            if (dt(b14) && (b14 = await b14), b14 === false || h13.signal.aborted) throw { name: "ConditionError", message: "Aborted due to condition callback returning false." };
            let S11 = new Promise((E18, j15) => {
              y16 = () => {
                j15({ name: "AbortError", message: c16 || "Aborted" });
              }, h13.signal.addEventListener("abort", y16, { once: true });
            });
            d12(i9(v9, s8, n10?.getPendingMeta?.({ requestId: v9, arg: s8 }, { getState: p12, extra: u9 }))), w9 = await Promise.race([S11, Promise.resolve(r11(s8, { dispatch: d12, getState: p12, extra: u9, requestId: v9, signal: h13.signal, abort: m18, rejectWithValue: (E18, j15) => new J3(E18, j15), fulfillWithValue: (E18, j15) => new ce3(E18, j15) })).then((E18) => {
              if (E18 instanceof J3) throw E18;
              return E18 instanceof ce3 ? a11(E18.payload, v9, s8, E18.meta) : a11(E18, v9, s8);
            })]);
          } catch (b14) {
            w9 = b14 instanceof J3 ? o15(null, v9, s8, b14.payload, b14.meta) : o15(b14, v9, s8);
          } finally {
            y16 && h13.signal.removeEventListener("abort", y16);
          }
          return n10 && !n10.dispatchConditionRejection && o15.match(w9) && w9.meta.condition || d12(w9), w9;
        }();
        return Object.assign(f10, { abort: m18, requestId: v9, arg: s8, unwrap() {
          return f10.then(lt2);
        } });
      };
    }
    return Object.assign(l12, { pending: i9, rejected: o15, fulfilled: a11, settled: D3(o15, a11), typePrefix: t10 });
  }
  return e14.withTypes = () => e14, e14;
})();
function lt2(e14) {
  if (e14.meta && e14.meta.rejectedWithValue) throw e14.payload;
  if (e14.error) throw e14.error;
  return e14.payload;
}
function dt(e14) {
  return e14 !== null && typeof e14 == "object" && typeof e14.then == "function";
}
var je2 = Symbol.for("rtk-slice-createasyncthunk");
var yr = { [je2]: ut2 };
var ft2 = ((e14) => (e14.reducer = "reducer", e14.reducerWithPrepare = "reducerWithPrepare", e14.asyncThunk = "asyncThunk", e14))(ft2 || {});
function pt(e14, t10) {
  return `${e14}/${t10}`;
}
function ht({ creators: e14 } = {}) {
  let t10 = e14?.asyncThunk?.[je2];
  return function(r11) {
    let { name: n10, reducerPath: a11 = n10 } = r11;
    if (!n10) throw new Error(A(11));
    let i9 = (typeof r11.reducers == "function" ? r11.reducers(mt()) : r11.reducers) || {}, o15 = Object.keys(i9), l12 = { sliceCaseReducersByName: {}, sliceCaseReducersByType: {}, actionCreators: {}, sliceMatchers: [] }, s8 = { addCase(f10, w9) {
      let b14 = typeof f10 == "string" ? f10 : f10.type;
      if (!b14) throw new Error(A(12));
      if (b14 in l12.sliceCaseReducersByType) throw new Error(A(13));
      return l12.sliceCaseReducersByType[b14] = w9, s8;
    }, addMatcher(f10, w9) {
      return l12.sliceMatchers.push({ matcher: f10, reducer: w9 }), s8;
    }, exposeAction(f10, w9) {
      return l12.actionCreators[f10] = w9, s8;
    }, exposeCaseReducer(f10, w9) {
      return l12.sliceCaseReducersByName[f10] = w9, s8;
    } };
    o15.forEach((f10) => {
      let w9 = i9[f10], b14 = { reducerName: f10, type: pt(n10, f10), createNotation: typeof r11.reducers == "function" };
      wt(w9) ? vt(b14, w9, s8, t10) : gt(b14, w9, s8);
    });
    function g13() {
      let [f10 = {}, w9 = [], b14 = void 0] = typeof r11.extraReducers == "function" ? ve2(r11.extraReducers) : [r11.extraReducers], S11 = { ...f10, ...l12.sliceCaseReducersByType };
      return tt(r11.initialState, (E18) => {
        for (let j15 in S11) E18.addCase(j15, S11[j15]);
        for (let j15 of l12.sliceMatchers) E18.addMatcher(j15.matcher, j15.reducer);
        for (let j15 of w9) E18.addMatcher(j15.matcher, j15.reducer);
        b14 && E18.addDefaultCase(b14);
      });
    }
    let d12 = (f10) => f10, p12 = /* @__PURE__ */ new Map(), u9 = /* @__PURE__ */ new WeakMap(), v9;
    function h13(f10, w9) {
      return v9 || (v9 = g13()), v9(f10, w9);
    }
    function y16() {
      return v9 || (v9 = g13()), v9.getInitialState();
    }
    function c16(f10, w9 = false) {
      function b14(E18) {
        let j15 = E18[f10];
        return typeof j15 > "u" && w9 && (j15 = C2(u9, b14, y16)), j15;
      }
      function S11(E18 = d12) {
        let j15 = C2(p12, w9, () => /* @__PURE__ */ new WeakMap());
        return C2(j15, E18, () => {
          let k12 = {};
          for (let [L12, N19] of Object.entries(r11.selectors ?? {})) k12[L12] = yt(N19, E18, () => C2(u9, E18, y16), w9);
          return k12;
        });
      }
      return { reducerPath: f10, getSelectors: S11, get selectors() {
        return S11(b14);
      }, selectSlice: b14 };
    }
    let m18 = { name: n10, reducer: h13, actions: l12.actionCreators, caseReducers: l12.sliceCaseReducersByName, getInitialState: y16, ...c16(a11), injectInto(f10, { reducerPath: w9, ...b14 } = {}) {
      let S11 = w9 ?? a11;
      return f10.inject({ reducerPath: S11, reducer: h13 }, b14), { ...m18, ...c16(S11, true) };
    } };
    return m18;
  };
}
function yt(e14, t10, r11, n10) {
  function a11(i9, ...o15) {
    let l12 = t10(i9);
    return typeof l12 > "u" && n10 && (l12 = r11()), e14(l12, ...o15);
  }
  return a11.unwrapped = e14, a11;
}
var mr = ht();
function mt() {
  function e14(t10, r11) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t10, ...r11 };
  }
  return e14.withTypes = () => e14, { reducer(t10) {
    return Object.assign({ [t10.name](...r11) {
      return t10(...r11);
    } }[t10.name], { _reducerDefinitionType: "reducer" });
  }, preparedReducer(t10, r11) {
    return { _reducerDefinitionType: "reducerWithPrepare", prepare: t10, reducer: r11 };
  }, asyncThunk: e14 };
}
function gt({ type: e14, reducerName: t10, createNotation: r11 }, n10, a11) {
  let i9, o15;
  if ("reducer" in n10) {
    if (r11 && !bt(n10)) throw new Error(A(17));
    i9 = n10.reducer, o15 = n10.prepare;
  } else i9 = n10;
  a11.addCase(e14, i9).exposeCaseReducer(t10, i9).exposeAction(t10, o15 ? T3(e14, o15) : T3(e14));
}
function wt(e14) {
  return e14._reducerDefinitionType === "asyncThunk";
}
function bt(e14) {
  return e14._reducerDefinitionType === "reducerWithPrepare";
}
function vt({ type: e14, reducerName: t10 }, r11, n10, a11) {
  if (!a11) throw new Error(A(18));
  let { payloadCreator: i9, fulfilled: o15, pending: l12, rejected: s8, settled: g13, options: d12 } = r11, p12 = a11(e14, i9, d12);
  n10.exposeAction(t10, p12), o15 && n10.addCase(p12.fulfilled, o15), l12 && n10.addCase(p12.pending, l12), s8 && n10.addCase(p12.rejected, s8), g13 && n10.addMatcher(p12.settled, g13), n10.exposeCaseReducer(t10, { fulfilled: o15 || B3, pending: l12 || B3, rejected: s8 || B3, settled: g13 || B3 });
}
function B3() {
}
var Ct = "task";
var Ae2 = "listener";
var ke2 = "completed";
var re2 = "cancelled";
var Rt = `task-${re2}`;
var Pt = `task-${ke2}`;
var Y2 = `${Ae2}-${re2}`;
var It = `${Ae2}-${ke2}`;
var G3 = class {
  constructor(e14) {
    this.code = e14, this.message = `${Ct} ${re2} (reason: ${e14})`;
  }
  code;
  name = "TaskAbortError";
  message;
};
var ne2 = (e14, t10) => {
  if (typeof e14 != "function") throw new TypeError(A(32));
};
var W2 = () => {
};
var Te = (e14, t10 = W2) => (e14.catch(t10), e14);
var Me2 = (e14, t10) => (e14.addEventListener("abort", t10, { once: true }), () => e14.removeEventListener("abort", t10));
var R4 = (e14) => {
  if (e14.aborted) throw new G3(e14.reason);
};
function Ce2(e14, t10) {
  let r11 = W2;
  return new Promise((n10, a11) => {
    let i9 = () => a11(new G3(e14.reason));
    if (e14.aborted) {
      i9();
      return;
    }
    r11 = Me2(e14, i9), t10.finally(() => r11()).then(n10, a11);
  }).finally(() => {
    r11 = W2;
  });
}
var _t = async (e14, t10) => {
  try {
    return await Promise.resolve(), { status: "ok", value: await e14() };
  } catch (r11) {
    return { status: r11 instanceof G3 ? "cancelled" : "rejected", error: r11 };
  } finally {
    t10?.();
  }
};
var V4 = (e14) => (t10) => Te(Ce2(e14, t10).then((r11) => (R4(e14), r11)));
var Re3 = (e14) => {
  let t10 = V4(e14);
  return (r11) => t10(new Promise((n10) => setTimeout(n10, r11)));
};
var { assign: I4 } = Object;
var le3 = {};
var H = "listenerMiddleware";
var xt = (e14, t10) => {
  let r11 = (n10) => Me2(e14, () => n10.abort(e14.reason));
  return (n10, a11) => {
    ne2(n10, "taskExecutor");
    let i9 = new AbortController();
    r11(i9);
    let o15 = _t(async () => {
      R4(e14), R4(i9.signal);
      let l12 = await n10({ pause: V4(i9.signal), delay: Re3(i9.signal), signal: i9.signal });
      return R4(i9.signal), l12;
    }, () => i9.abort(Pt));
    return a11?.autoJoin && t10.push(o15.catch(W2)), { result: V4(e14)(o15), cancel() {
      i9.abort(Rt);
    } };
  };
};
var Dt = (e14, t10) => {
  let r11 = async (n10, a11) => {
    R4(t10);
    let i9 = () => {
    }, o15 = [new Promise((l12, s8) => {
      let g13 = e14({ predicate: n10, effect: (d12, p12) => {
        p12.unsubscribe(), l12([d12, p12.getState(), p12.getOriginalState()]);
      } });
      i9 = () => {
        g13(), s8();
      };
    })];
    a11 != null && o15.push(new Promise((l12) => setTimeout(l12, a11, null)));
    try {
      let l12 = await Ce2(t10, Promise.race(o15));
      return R4(t10), l12;
    } finally {
      i9();
    }
  };
  return (n10, a11) => Te(r11(n10, a11));
};
var Pe2 = (e14) => {
  let { type: t10, actionCreator: r11, matcher: n10, predicate: a11, effect: i9 } = e14;
  if (t10) a11 = T3(t10).match;
  else if (r11) t10 = r11.type, a11 = r11.match;
  else if (n10) a11 = n10;
  else if (!a11) throw new Error(A(21));
  return ne2(i9, "options.listener"), { predicate: a11, type: t10, effect: i9 };
};
var Ie2 = I4((e14) => {
  let { type: t10, predicate: r11, effect: n10 } = Pe2(e14);
  return { id: U2(), effect: n10, type: t10, predicate: r11, pending: /* @__PURE__ */ new Set(), unsubscribe: () => {
    throw new Error(A(22));
  } };
}, { withTypes: () => Ie2 });
var de3 = (e14, t10) => {
  let { type: r11, effect: n10, predicate: a11 } = Pe2(t10);
  return Array.from(e14.values()).find((i9) => (typeof r11 == "string" ? i9.type === r11 : i9.predicate === a11) && i9.effect === n10);
};
var Z2 = (e14) => {
  e14.pending.forEach((t10) => {
    t10.abort(Y2);
  });
};
var $t = (e14, t10) => () => {
  for (let r11 of t10.keys()) Z2(r11);
  e14.clear();
};
var fe3 = (e14, t10, r11) => {
  try {
    e14(t10, r11);
  } catch (n10) {
    setTimeout(() => {
      throw n10;
    }, 0);
  }
};
var _e2 = I4(T3(`${H}/add`), { withTypes: () => _e2 });
var Lt = T3(`${H}/removeAll`);
var xe2 = I4(T3(`${H}/remove`), { withTypes: () => xe2 });
var Nt = (...e14) => {
  console.error(`${H}/error`, ...e14);
};
var wr = (e14 = {}) => {
  let t10 = /* @__PURE__ */ new Map(), r11 = /* @__PURE__ */ new Map(), n10 = (u9) => {
    let v9 = r11.get(u9) ?? 0;
    r11.set(u9, v9 + 1);
  }, a11 = (u9) => {
    let v9 = r11.get(u9) ?? 1;
    v9 === 1 ? r11.delete(u9) : r11.set(u9, v9 - 1);
  }, { extra: i9, onError: o15 = Nt } = e14;
  ne2(o15, "onError");
  let l12 = (u9) => (u9.unsubscribe = () => t10.delete(u9.id), t10.set(u9.id, u9), (v9) => {
    u9.unsubscribe(), v9?.cancelActive && Z2(u9);
  }), s8 = (u9) => {
    let v9 = de3(t10, u9) ?? Ie2(u9);
    return l12(v9);
  };
  I4(s8, { withTypes: () => s8 });
  let g13 = (u9) => {
    let v9 = de3(t10, u9);
    return v9 && (v9.unsubscribe(), u9.cancelActive && Z2(v9)), !!v9;
  };
  I4(g13, { withTypes: () => g13 });
  let d12 = async (u9, v9, h13, y16) => {
    let c16 = new AbortController(), m18 = Dt(s8, c16.signal), f10 = [];
    try {
      u9.pending.add(c16), n10(u9), await Promise.resolve(u9.effect(v9, I4({}, h13, { getOriginalState: y16, condition: (w9, b14) => m18(w9, b14).then(Boolean), take: m18, delay: Re3(c16.signal), pause: V4(c16.signal), extra: i9, signal: c16.signal, fork: xt(c16.signal, f10), unsubscribe: u9.unsubscribe, subscribe: () => {
        t10.set(u9.id, u9);
      }, cancelActiveListeners: () => {
        u9.pending.forEach((w9, b14, S11) => {
          w9 !== c16 && (w9.abort(Y2), S11.delete(w9));
        });
      }, cancel: () => {
        c16.abort(Y2), u9.pending.delete(c16);
      }, throwIfCancelled: () => {
        R4(c16.signal);
      } })));
    } catch (w9) {
      w9 instanceof G3 || fe3(o15, w9, { raisedBy: "effect" });
    } finally {
      await Promise.all(f10), c16.abort(It), a11(u9), u9.pending.delete(c16);
    }
  }, p12 = $t(t10, r11);
  return { middleware: (u9) => (v9) => (h13) => {
    if (!P(h13)) return v9(h13);
    if (_e2.match(h13)) return s8(h13.payload);
    if (Lt.match(h13)) {
      p12();
      return;
    }
    if (xe2.match(h13)) return g13(h13.payload);
    let y16 = u9.getState(), c16 = () => {
      if (y16 === le3) throw new Error(A(23));
      return y16;
    }, m18;
    try {
      if (m18 = v9(h13), t10.size > 0) {
        let f10 = u9.getState(), w9 = Array.from(t10.values());
        for (let b14 of w9) {
          let S11 = false;
          try {
            S11 = b14.predicate(h13, f10, y16);
          } catch (E18) {
            S11 = false, fe3(o15, E18, { raisedBy: "predicate" });
          }
          S11 && d12(b14, h13, u9, c16);
        }
      }
    } finally {
      y16 = le3;
    }
    return m18;
  }, startListening: s8, stopListening: g13, clearListeners: p12 };
};
var ae3 = Symbol.for("rtk-state-proxy-original");
function A(e14) {
  return `Minified Redux Toolkit error #${e14}; visit https://redux-toolkit.js.org/Errors?code=${e14} for the full message or use the non-minified dev environment for full errors. `;
}

// http-url:https://esm.sh/decimal.js-light@2.5.1/es2022/decimal.js-light.mjs
var de4 = Object.create;
var se3 = Object.defineProperty;
var ae4 = Object.getOwnPropertyDescriptor;
var ge3 = Object.getOwnPropertyNames;
var pe3 = Object.getPrototypeOf;
var we2 = Object.prototype.hasOwnProperty;
var Ee2 = (C11, m18) => () => (m18 || C11((m18 = { exports: {} }).exports, m18), m18.exports);
var ve3 = (C11, m18, _14, p12) => {
  if (m18 && typeof m18 == "object" || typeof m18 == "function") for (let L12 of ge3(m18)) !we2.call(C11, L12) && L12 !== _14 && se3(C11, L12, { get: () => m18[L12], enumerable: !(p12 = ae4(m18, L12)) || p12.enumerable });
  return C11;
};
var me3 = (C11, m18, _14) => (_14 = C11 != null ? de4(pe3(C11)) : {}, ve3(m18 || !C11 || !C11.__esModule ? se3(_14, "default", { value: C11, enumerable: true }) : _14, C11));
var ue4 = Ee2((fe9, $14) => {
  (function(C11) {
    "use strict";
    var m18 = 1e9, _14 = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, p12 = true, L12 = "[DecimalError] ", U11 = L12 + "Invalid argument: ", Q13 = L12 + "Exponent out of range: ", H14 = Math.floor, F11 = Math.pow, ce9 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, q14, D18 = 1e7, E18 = 7, y16 = 9007199254740991, W16 = H14(y16 / E18), c16 = {};
    c16.absoluteValue = c16.abs = function() {
      var e14 = new this.constructor(this);
      return e14.s && (e14.s = 1), e14;
    }, c16.comparedTo = c16.cmp = function(e14) {
      var r11, o15, t10, n10, i9 = this;
      if (e14 = new i9.constructor(e14), i9.s !== e14.s) return i9.s || -e14.s;
      if (i9.e !== e14.e) return i9.e > e14.e ^ i9.s < 0 ? 1 : -1;
      for (t10 = i9.d.length, n10 = e14.d.length, r11 = 0, o15 = t10 < n10 ? t10 : n10; r11 < o15; ++r11) if (i9.d[r11] !== e14.d[r11]) return i9.d[r11] > e14.d[r11] ^ i9.s < 0 ? 1 : -1;
      return t10 === n10 ? 0 : t10 > n10 ^ i9.s < 0 ? 1 : -1;
    }, c16.decimalPlaces = c16.dp = function() {
      var e14 = this, r11 = e14.d.length - 1, o15 = (r11 - e14.e) * E18;
      if (r11 = e14.d[r11], r11) for (; r11 % 10 == 0; r11 /= 10) o15--;
      return o15 < 0 ? 0 : o15;
    }, c16.dividedBy = c16.div = function(e14) {
      return P16(this, new this.constructor(e14));
    }, c16.dividedToIntegerBy = c16.idiv = function(e14) {
      var r11 = this, o15 = r11.constructor;
      return w9(P16(r11, new o15(e14), 0, 1), o15.precision);
    }, c16.equals = c16.eq = function(e14) {
      return !this.cmp(e14);
    }, c16.exponent = function() {
      return N19(this);
    }, c16.greaterThan = c16.gt = function(e14) {
      return this.cmp(e14) > 0;
    }, c16.greaterThanOrEqualTo = c16.gte = function(e14) {
      return this.cmp(e14) >= 0;
    }, c16.isInteger = c16.isint = function() {
      return this.e > this.d.length - 2;
    }, c16.isNegative = c16.isneg = function() {
      return this.s < 0;
    }, c16.isPositive = c16.ispos = function() {
      return this.s > 0;
    }, c16.isZero = function() {
      return this.s === 0;
    }, c16.lessThan = c16.lt = function(e14) {
      return this.cmp(e14) < 0;
    }, c16.lessThanOrEqualTo = c16.lte = function(e14) {
      return this.cmp(e14) < 1;
    }, c16.logarithm = c16.log = function(e14) {
      var r11, o15 = this, t10 = o15.constructor, n10 = t10.precision, i9 = n10 + 5;
      if (e14 === void 0) e14 = new t10(10);
      else if (e14 = new t10(e14), e14.s < 1 || e14.eq(q14)) throw Error(L12 + "NaN");
      if (o15.s < 1) throw Error(L12 + (o15.s ? "NaN" : "-Infinity"));
      return o15.eq(q14) ? new t10(0) : (p12 = false, r11 = P16(G20(o15, i9), G20(e14, i9), i9), p12 = true, w9(r11, n10));
    }, c16.minus = c16.sub = function(e14) {
      var r11 = this;
      return e14 = new r11.constructor(e14), r11.s == e14.s ? te8(r11, e14) : ee6(r11, (e14.s = -e14.s, e14));
    }, c16.modulo = c16.mod = function(e14) {
      var r11, o15 = this, t10 = o15.constructor, n10 = t10.precision;
      if (e14 = new t10(e14), !e14.s) throw Error(L12 + "NaN");
      return o15.s ? (p12 = false, r11 = P16(o15, e14, 0, 1).times(e14), p12 = true, o15.minus(r11)) : w9(new t10(o15), n10);
    }, c16.naturalExponential = c16.exp = function() {
      return re8(this);
    }, c16.naturalLogarithm = c16.ln = function() {
      return G20(this);
    }, c16.negated = c16.neg = function() {
      var e14 = new this.constructor(this);
      return e14.s = -e14.s || 0, e14;
    }, c16.plus = c16.add = function(e14) {
      var r11 = this;
      return e14 = new r11.constructor(e14), r11.s == e14.s ? ee6(r11, e14) : te8(r11, (e14.s = -e14.s, e14));
    }, c16.precision = c16.sd = function(e14) {
      var r11, o15, t10, n10 = this;
      if (e14 !== void 0 && e14 !== !!e14 && e14 !== 1 && e14 !== 0) throw Error(U11 + e14);
      if (r11 = N19(n10) + 1, t10 = n10.d.length - 1, o15 = t10 * E18 + 1, t10 = n10.d[t10], t10) {
        for (; t10 % 10 == 0; t10 /= 10) o15--;
        for (t10 = n10.d[0]; t10 >= 10; t10 /= 10) o15++;
      }
      return e14 && r11 > o15 ? r11 : o15;
    }, c16.squareRoot = c16.sqrt = function() {
      var e14, r11, o15, t10, n10, i9, s8, f10 = this, u9 = f10.constructor;
      if (f10.s < 1) {
        if (!f10.s) return new u9(0);
        throw Error(L12 + "NaN");
      }
      for (e14 = N19(f10), p12 = false, n10 = Math.sqrt(+f10), n10 == 0 || n10 == 1 / 0 ? (r11 = M13(f10.d), (r11.length + e14) % 2 == 0 && (r11 += "0"), n10 = Math.sqrt(r11), e14 = H14((e14 + 1) / 2) - (e14 < 0 || e14 % 2), n10 == 1 / 0 ? r11 = "5e" + e14 : (r11 = n10.toExponential(), r11 = r11.slice(0, r11.indexOf("e") + 1) + e14), t10 = new u9(r11)) : t10 = new u9(n10.toString()), o15 = u9.precision, n10 = s8 = o15 + 3; ; ) if (i9 = t10, t10 = i9.plus(P16(f10, i9, s8 + 2)).times(0.5), M13(i9.d).slice(0, s8) === (r11 = M13(t10.d)).slice(0, s8)) {
        if (r11 = r11.slice(s8 - 3, s8 + 1), n10 == s8 && r11 == "4999") {
          if (w9(i9, o15 + 1, 0), i9.times(i9).eq(f10)) {
            t10 = i9;
            break;
          }
        } else if (r11 != "9999") break;
        s8 += 4;
      }
      return p12 = true, w9(t10, o15);
    }, c16.times = c16.mul = function(e14) {
      var r11, o15, t10, n10, i9, s8, f10, u9, h13, l12 = this, d12 = l12.constructor, A13 = l12.d, a11 = (e14 = new d12(e14)).d;
      if (!l12.s || !e14.s) return new d12(0);
      for (e14.s *= l12.s, o15 = l12.e + e14.e, u9 = A13.length, h13 = a11.length, u9 < h13 && (i9 = A13, A13 = a11, a11 = i9, s8 = u9, u9 = h13, h13 = s8), i9 = [], s8 = u9 + h13, t10 = s8; t10--; ) i9.push(0);
      for (t10 = h13; --t10 >= 0; ) {
        for (r11 = 0, n10 = u9 + t10; n10 > t10; ) f10 = i9[n10] + a11[t10] * A13[n10 - t10 - 1] + r11, i9[n10--] = f10 % D18 | 0, r11 = f10 / D18 | 0;
        i9[n10] = (i9[n10] + r11) % D18 | 0;
      }
      for (; !i9[--s8]; ) i9.pop();
      return r11 ? ++o15 : i9.shift(), e14.d = i9, e14.e = o15, p12 ? w9(e14, d12.precision) : e14;
    }, c16.toDecimalPlaces = c16.todp = function(e14, r11) {
      var o15 = this, t10 = o15.constructor;
      return o15 = new t10(o15), e14 === void 0 ? o15 : (x18(e14, 0, m18), r11 === void 0 ? r11 = t10.rounding : x18(r11, 0, 8), w9(o15, e14 + N19(o15) + 1, r11));
    }, c16.toExponential = function(e14, r11) {
      var o15, t10 = this, n10 = t10.constructor;
      return e14 === void 0 ? o15 = S11(t10, true) : (x18(e14, 0, m18), r11 === void 0 ? r11 = n10.rounding : x18(r11, 0, 8), t10 = w9(new n10(t10), e14 + 1, r11), o15 = S11(t10, true, e14 + 1)), o15;
    }, c16.toFixed = function(e14, r11) {
      var o15, t10, n10 = this, i9 = n10.constructor;
      return e14 === void 0 ? S11(n10) : (x18(e14, 0, m18), r11 === void 0 ? r11 = i9.rounding : x18(r11, 0, 8), t10 = w9(new i9(n10), e14 + N19(n10) + 1, r11), o15 = S11(t10.abs(), false, e14 + N19(t10) + 1), n10.isneg() && !n10.isZero() ? "-" + o15 : o15);
    }, c16.toInteger = c16.toint = function() {
      var e14 = this, r11 = e14.constructor;
      return w9(new r11(e14), N19(e14) + 1, r11.rounding);
    }, c16.toNumber = function() {
      return +this;
    }, c16.toPower = c16.pow = function(e14) {
      var r11, o15, t10, n10, i9, s8, f10 = this, u9 = f10.constructor, h13 = 12, l12 = +(e14 = new u9(e14));
      if (!e14.s) return new u9(q14);
      if (f10 = new u9(f10), !f10.s) {
        if (e14.s < 1) throw Error(L12 + "Infinity");
        return f10;
      }
      if (f10.eq(q14)) return f10;
      if (t10 = u9.precision, e14.eq(q14)) return w9(f10, t10);
      if (r11 = e14.e, o15 = e14.d.length - 1, s8 = r11 >= o15, i9 = f10.s, s8) {
        if ((o15 = l12 < 0 ? -l12 : l12) <= y16) {
          for (n10 = new u9(q14), r11 = Math.ceil(t10 / E18 + 4), p12 = false; o15 % 2 && (n10 = n10.times(f10), ne8(n10.d, r11)), o15 = H14(o15 / 2), o15 !== 0; ) f10 = f10.times(f10), ne8(f10.d, r11);
          return p12 = true, e14.s < 0 ? new u9(q14).div(n10) : w9(n10, t10);
        }
      } else if (i9 < 0) throw Error(L12 + "NaN");
      return i9 = i9 < 0 && e14.d[Math.max(r11, o15)] & 1 ? -1 : 1, f10.s = 1, p12 = false, n10 = e14.times(G20(f10, t10 + h13)), p12 = true, n10 = re8(n10), n10.s = i9, n10;
    }, c16.toPrecision = function(e14, r11) {
      var o15, t10, n10 = this, i9 = n10.constructor;
      return e14 === void 0 ? (o15 = N19(n10), t10 = S11(n10, o15 <= i9.toExpNeg || o15 >= i9.toExpPos)) : (x18(e14, 1, m18), r11 === void 0 ? r11 = i9.rounding : x18(r11, 0, 8), n10 = w9(new i9(n10), e14, r11), o15 = N19(n10), t10 = S11(n10, e14 <= o15 || o15 <= i9.toExpNeg, e14)), t10;
    }, c16.toSignificantDigits = c16.tosd = function(e14, r11) {
      var o15 = this, t10 = o15.constructor;
      return e14 === void 0 ? (e14 = t10.precision, r11 = t10.rounding) : (x18(e14, 1, m18), r11 === void 0 ? r11 = t10.rounding : x18(r11, 0, 8)), w9(new t10(o15), e14, r11);
    }, c16.toString = c16.valueOf = c16.val = c16.toJSON = function() {
      var e14 = this, r11 = N19(e14), o15 = e14.constructor;
      return S11(e14, r11 <= o15.toExpNeg || r11 >= o15.toExpPos);
    };
    function ee6(e14, r11) {
      var o15, t10, n10, i9, s8, f10, u9, h13, l12 = e14.constructor, d12 = l12.precision;
      if (!e14.s || !r11.s) return r11.s || (r11 = new l12(e14)), p12 ? w9(r11, d12) : r11;
      if (u9 = e14.d, h13 = r11.d, s8 = e14.e, n10 = r11.e, u9 = u9.slice(), i9 = s8 - n10, i9) {
        for (i9 < 0 ? (t10 = u9, i9 = -i9, f10 = h13.length) : (t10 = h13, n10 = s8, f10 = u9.length), s8 = Math.ceil(d12 / E18), f10 = s8 > f10 ? s8 + 1 : f10 + 1, i9 > f10 && (i9 = f10, t10.length = 1), t10.reverse(); i9--; ) t10.push(0);
        t10.reverse();
      }
      for (f10 = u9.length, i9 = h13.length, f10 - i9 < 0 && (i9 = f10, t10 = h13, h13 = u9, u9 = t10), o15 = 0; i9; ) o15 = (u9[--i9] = u9[i9] + h13[i9] + o15) / D18 | 0, u9[i9] %= D18;
      for (o15 && (u9.unshift(o15), ++n10), f10 = u9.length; u9[--f10] == 0; ) u9.pop();
      return r11.d = u9, r11.e = n10, p12 ? w9(r11, d12) : r11;
    }
    function x18(e14, r11, o15) {
      if (e14 !== ~~e14 || e14 < r11 || e14 > o15) throw Error(U11 + e14);
    }
    function M13(e14) {
      var r11, o15, t10, n10 = e14.length - 1, i9 = "", s8 = e14[0];
      if (n10 > 0) {
        for (i9 += s8, r11 = 1; r11 < n10; r11++) t10 = e14[r11] + "", o15 = E18 - t10.length, o15 && (i9 += T15(o15)), i9 += t10;
        s8 = e14[r11], t10 = s8 + "", o15 = E18 - t10.length, o15 && (i9 += T15(o15));
      } else if (s8 === 0) return "0";
      for (; s8 % 10 === 0; ) s8 /= 10;
      return i9 + s8;
    }
    var P16 = /* @__PURE__ */ function() {
      function e14(t10, n10) {
        var i9, s8 = 0, f10 = t10.length;
        for (t10 = t10.slice(); f10--; ) i9 = t10[f10] * n10 + s8, t10[f10] = i9 % D18 | 0, s8 = i9 / D18 | 0;
        return s8 && t10.unshift(s8), t10;
      }
      function r11(t10, n10, i9, s8) {
        var f10, u9;
        if (i9 != s8) u9 = i9 > s8 ? 1 : -1;
        else for (f10 = u9 = 0; f10 < i9; f10++) if (t10[f10] != n10[f10]) {
          u9 = t10[f10] > n10[f10] ? 1 : -1;
          break;
        }
        return u9;
      }
      function o15(t10, n10, i9) {
        for (var s8 = 0; i9--; ) t10[i9] -= s8, s8 = t10[i9] < n10[i9] ? 1 : 0, t10[i9] = s8 * D18 + t10[i9] - n10[i9];
        for (; !t10[0] && t10.length > 1; ) t10.shift();
      }
      return function(t10, n10, i9, s8) {
        var f10, u9, h13, l12, d12, A13, a11, B19, g13, v9, X12, R13, j15, Z11, b14, z16, k12, V15, J15 = t10.constructor, he5 = t10.s == n10.s ? 1 : -1, I24 = t10.d, O12 = n10.d;
        if (!t10.s) return new J15(t10);
        if (!n10.s) throw Error(L12 + "Division by zero");
        for (u9 = t10.e - n10.e, k12 = O12.length, b14 = I24.length, a11 = new J15(he5), B19 = a11.d = [], h13 = 0; O12[h13] == (I24[h13] || 0); ) ++h13;
        if (O12[h13] > (I24[h13] || 0) && --u9, i9 == null ? R13 = i9 = J15.precision : s8 ? R13 = i9 + (N19(t10) - N19(n10)) + 1 : R13 = i9, R13 < 0) return new J15(0);
        if (R13 = R13 / E18 + 2 | 0, h13 = 0, k12 == 1) for (l12 = 0, O12 = O12[0], R13++; (h13 < b14 || l12) && R13--; h13++) j15 = l12 * D18 + (I24[h13] || 0), B19[h13] = j15 / O12 | 0, l12 = j15 % O12 | 0;
        else {
          for (l12 = D18 / (O12[0] + 1) | 0, l12 > 1 && (O12 = e14(O12, l12), I24 = e14(I24, l12), k12 = O12.length, b14 = I24.length), Z11 = k12, g13 = I24.slice(0, k12), v9 = g13.length; v9 < k12; ) g13[v9++] = 0;
          V15 = O12.slice(), V15.unshift(0), z16 = O12[0], O12[1] >= D18 / 2 && ++z16;
          do
            l12 = 0, f10 = r11(O12, g13, k12, v9), f10 < 0 ? (X12 = g13[0], k12 != v9 && (X12 = X12 * D18 + (g13[1] || 0)), l12 = X12 / z16 | 0, l12 > 1 ? (l12 >= D18 && (l12 = D18 - 1), d12 = e14(O12, l12), A13 = d12.length, v9 = g13.length, f10 = r11(d12, g13, A13, v9), f10 == 1 && (l12--, o15(d12, k12 < A13 ? V15 : O12, A13))) : (l12 == 0 && (f10 = l12 = 1), d12 = O12.slice()), A13 = d12.length, A13 < v9 && d12.unshift(0), o15(g13, d12, v9), f10 == -1 && (v9 = g13.length, f10 = r11(O12, g13, k12, v9), f10 < 1 && (l12++, o15(g13, k12 < v9 ? V15 : O12, v9))), v9 = g13.length) : f10 === 0 && (l12++, g13 = [0]), B19[h13++] = l12, f10 && g13[0] ? g13[v9++] = I24[Z11] || 0 : (g13 = [I24[Z11]], v9 = 1);
          while ((Z11++ < b14 || g13[0] !== void 0) && R13--);
        }
        return B19[0] || B19.shift(), a11.e = u9, w9(a11, s8 ? i9 + N19(a11) + 1 : i9);
      };
    }();
    function re8(e14, r11) {
      var o15, t10, n10, i9, s8, f10, u9 = 0, h13 = 0, l12 = e14.constructor, d12 = l12.precision;
      if (N19(e14) > 16) throw Error(Q13 + N19(e14));
      if (!e14.s) return new l12(q14);
      for (r11 == null ? (p12 = false, f10 = d12) : f10 = r11, s8 = new l12(0.03125); e14.abs().gte(0.1); ) e14 = e14.times(s8), h13 += 5;
      for (t10 = Math.log(F11(2, h13)) / Math.LN10 * 2 + 5 | 0, f10 += t10, o15 = n10 = i9 = new l12(q14), l12.precision = f10; ; ) {
        if (n10 = w9(n10.times(e14), f10), o15 = o15.times(++u9), s8 = i9.plus(P16(n10, o15, f10)), M13(s8.d).slice(0, f10) === M13(i9.d).slice(0, f10)) {
          for (; h13--; ) i9 = w9(i9.times(i9), f10);
          return l12.precision = d12, r11 == null ? (p12 = true, w9(i9, d12)) : i9;
        }
        i9 = s8;
      }
    }
    function N19(e14) {
      for (var r11 = e14.e * E18, o15 = e14.d[0]; o15 >= 10; o15 /= 10) r11++;
      return r11;
    }
    function Y10(e14, r11, o15) {
      if (r11 > e14.LN10.sd()) throw p12 = true, o15 && (e14.precision = o15), Error(L12 + "LN10 precision limit exceeded");
      return w9(new e14(e14.LN10), r11);
    }
    function T15(e14) {
      for (var r11 = ""; e14--; ) r11 += "0";
      return r11;
    }
    function G20(e14, r11) {
      var o15, t10, n10, i9, s8, f10, u9, h13, l12, d12 = 1, A13 = 10, a11 = e14, B19 = a11.d, g13 = a11.constructor, v9 = g13.precision;
      if (a11.s < 1) throw Error(L12 + (a11.s ? "NaN" : "-Infinity"));
      if (a11.eq(q14)) return new g13(0);
      if (r11 == null ? (p12 = false, h13 = v9) : h13 = r11, a11.eq(10)) return r11 == null && (p12 = true), Y10(g13, h13);
      if (h13 += A13, g13.precision = h13, o15 = M13(B19), t10 = o15.charAt(0), i9 = N19(a11), Math.abs(i9) < 15e14) {
        for (; t10 < 7 && t10 != 1 || t10 == 1 && o15.charAt(1) > 3; ) a11 = a11.times(e14), o15 = M13(a11.d), t10 = o15.charAt(0), d12++;
        i9 = N19(a11), t10 > 1 ? (a11 = new g13("0." + o15), i9++) : a11 = new g13(t10 + "." + o15.slice(1));
      } else return u9 = Y10(g13, h13 + 2, v9).times(i9 + ""), a11 = G20(new g13(t10 + "." + o15.slice(1)), h13 - A13).plus(u9), g13.precision = v9, r11 == null ? (p12 = true, w9(a11, v9)) : a11;
      for (f10 = s8 = a11 = P16(a11.minus(q14), a11.plus(q14), h13), l12 = w9(a11.times(a11), h13), n10 = 3; ; ) {
        if (s8 = w9(s8.times(l12), h13), u9 = f10.plus(P16(s8, new g13(n10), h13)), M13(u9.d).slice(0, h13) === M13(f10.d).slice(0, h13)) return f10 = f10.times(2), i9 !== 0 && (f10 = f10.plus(Y10(g13, h13 + 2, v9).times(i9 + ""))), f10 = P16(f10, new g13(d12), h13), g13.precision = v9, r11 == null ? (p12 = true, w9(f10, v9)) : f10;
        f10 = u9, n10 += 2;
      }
    }
    function ie6(e14, r11) {
      var o15, t10, n10;
      for ((o15 = r11.indexOf(".")) > -1 && (r11 = r11.replace(".", "")), (t10 = r11.search(/e/i)) > 0 ? (o15 < 0 && (o15 = t10), o15 += +r11.slice(t10 + 1), r11 = r11.substring(0, t10)) : o15 < 0 && (o15 = r11.length), t10 = 0; r11.charCodeAt(t10) === 48; ) ++t10;
      for (n10 = r11.length; r11.charCodeAt(n10 - 1) === 48; ) --n10;
      if (r11 = r11.slice(t10, n10), r11) {
        if (n10 -= t10, o15 = o15 - t10 - 1, e14.e = H14(o15 / E18), e14.d = [], t10 = (o15 + 1) % E18, o15 < 0 && (t10 += E18), t10 < n10) {
          for (t10 && e14.d.push(+r11.slice(0, t10)), n10 -= E18; t10 < n10; ) e14.d.push(+r11.slice(t10, t10 += E18));
          r11 = r11.slice(t10), t10 = E18 - r11.length;
        } else t10 -= n10;
        for (; t10--; ) r11 += "0";
        if (e14.d.push(+r11), p12 && (e14.e > W16 || e14.e < -W16)) throw Error(Q13 + o15);
      } else e14.s = 0, e14.e = 0, e14.d = [0];
      return e14;
    }
    function w9(e14, r11, o15) {
      var t10, n10, i9, s8, f10, u9, h13, l12, d12 = e14.d;
      for (s8 = 1, i9 = d12[0]; i9 >= 10; i9 /= 10) s8++;
      if (t10 = r11 - s8, t10 < 0) t10 += E18, n10 = r11, h13 = d12[l12 = 0];
      else {
        if (l12 = Math.ceil((t10 + 1) / E18), i9 = d12.length, l12 >= i9) return e14;
        for (h13 = i9 = d12[l12], s8 = 1; i9 >= 10; i9 /= 10) s8++;
        t10 %= E18, n10 = t10 - E18 + s8;
      }
      if (o15 !== void 0 && (i9 = F11(10, s8 - n10 - 1), f10 = h13 / i9 % 10 | 0, u9 = r11 < 0 || d12[l12 + 1] !== void 0 || h13 % i9, u9 = o15 < 4 ? (f10 || u9) && (o15 == 0 || o15 == (e14.s < 0 ? 3 : 2)) : f10 > 5 || f10 == 5 && (o15 == 4 || u9 || o15 == 6 && (t10 > 0 ? n10 > 0 ? h13 / F11(10, s8 - n10) : 0 : d12[l12 - 1]) % 10 & 1 || o15 == (e14.s < 0 ? 8 : 7))), r11 < 1 || !d12[0]) return u9 ? (i9 = N19(e14), d12.length = 1, r11 = r11 - i9 - 1, d12[0] = F11(10, (E18 - r11 % E18) % E18), e14.e = H14(-r11 / E18) || 0) : (d12.length = 1, d12[0] = e14.e = e14.s = 0), e14;
      if (t10 == 0 ? (d12.length = l12, i9 = 1, l12--) : (d12.length = l12 + 1, i9 = F11(10, E18 - t10), d12[l12] = n10 > 0 ? (h13 / F11(10, s8 - n10) % F11(10, n10) | 0) * i9 : 0), u9) for (; ; ) if (l12 == 0) {
        (d12[0] += i9) == D18 && (d12[0] = 1, ++e14.e);
        break;
      } else {
        if (d12[l12] += i9, d12[l12] != D18) break;
        d12[l12--] = 0, i9 = 1;
      }
      for (t10 = d12.length; d12[--t10] === 0; ) d12.pop();
      if (p12 && (e14.e > W16 || e14.e < -W16)) throw Error(Q13 + N19(e14));
      return e14;
    }
    function te8(e14, r11) {
      var o15, t10, n10, i9, s8, f10, u9, h13, l12, d12, A13 = e14.constructor, a11 = A13.precision;
      if (!e14.s || !r11.s) return r11.s ? r11.s = -r11.s : r11 = new A13(e14), p12 ? w9(r11, a11) : r11;
      if (u9 = e14.d, d12 = r11.d, t10 = r11.e, h13 = e14.e, u9 = u9.slice(), s8 = h13 - t10, s8) {
        for (l12 = s8 < 0, l12 ? (o15 = u9, s8 = -s8, f10 = d12.length) : (o15 = d12, t10 = h13, f10 = u9.length), n10 = Math.max(Math.ceil(a11 / E18), f10) + 2, s8 > n10 && (s8 = n10, o15.length = 1), o15.reverse(), n10 = s8; n10--; ) o15.push(0);
        o15.reverse();
      } else {
        for (n10 = u9.length, f10 = d12.length, l12 = n10 < f10, l12 && (f10 = n10), n10 = 0; n10 < f10; n10++) if (u9[n10] != d12[n10]) {
          l12 = u9[n10] < d12[n10];
          break;
        }
        s8 = 0;
      }
      for (l12 && (o15 = u9, u9 = d12, d12 = o15, r11.s = -r11.s), f10 = u9.length, n10 = d12.length - f10; n10 > 0; --n10) u9[f10++] = 0;
      for (n10 = d12.length; n10 > s8; ) {
        if (u9[--n10] < d12[n10]) {
          for (i9 = n10; i9 && u9[--i9] === 0; ) u9[i9] = D18 - 1;
          --u9[i9], u9[n10] += D18;
        }
        u9[n10] -= d12[n10];
      }
      for (; u9[--f10] === 0; ) u9.pop();
      for (; u9[0] === 0; u9.shift()) --t10;
      return u9[0] ? (r11.d = u9, r11.e = t10, p12 ? w9(r11, a11) : r11) : new A13(0);
    }
    function S11(e14, r11, o15) {
      var t10, n10 = N19(e14), i9 = M13(e14.d), s8 = i9.length;
      return r11 ? (o15 && (t10 = o15 - s8) > 0 ? i9 = i9.charAt(0) + "." + i9.slice(1) + T15(t10) : s8 > 1 && (i9 = i9.charAt(0) + "." + i9.slice(1)), i9 = i9 + (n10 < 0 ? "e" : "e+") + n10) : n10 < 0 ? (i9 = "0." + T15(-n10 - 1) + i9, o15 && (t10 = o15 - s8) > 0 && (i9 += T15(t10))) : n10 >= s8 ? (i9 += T15(n10 + 1 - s8), o15 && (t10 = o15 - n10 - 1) > 0 && (i9 = i9 + "." + T15(t10))) : ((t10 = n10 + 1) < s8 && (i9 = i9.slice(0, t10) + "." + i9.slice(t10)), o15 && (t10 = o15 - s8) > 0 && (n10 + 1 === s8 && (i9 += "."), i9 += T15(t10))), e14.s < 0 ? "-" + i9 : i9;
    }
    function ne8(e14, r11) {
      if (e14.length > r11) return e14.length = r11, true;
    }
    function oe8(e14) {
      var r11, o15, t10;
      function n10(i9) {
        var s8 = this;
        if (!(s8 instanceof n10)) return new n10(i9);
        if (s8.constructor = n10, i9 instanceof n10) {
          s8.s = i9.s, s8.e = i9.e, s8.d = (i9 = i9.d) ? i9.slice() : i9;
          return;
        }
        if (typeof i9 == "number") {
          if (i9 * 0 !== 0) throw Error(U11 + i9);
          if (i9 > 0) s8.s = 1;
          else if (i9 < 0) i9 = -i9, s8.s = -1;
          else {
            s8.s = 0, s8.e = 0, s8.d = [0];
            return;
          }
          if (i9 === ~~i9 && i9 < 1e7) {
            s8.e = 0, s8.d = [i9];
            return;
          }
          return ie6(s8, i9.toString());
        } else if (typeof i9 != "string") throw Error(U11 + i9);
        if (i9.charCodeAt(0) === 45 ? (i9 = i9.slice(1), s8.s = -1) : s8.s = 1, ce9.test(i9)) ie6(s8, i9);
        else throw Error(U11 + i9);
      }
      if (n10.prototype = c16, n10.ROUND_UP = 0, n10.ROUND_DOWN = 1, n10.ROUND_CEIL = 2, n10.ROUND_FLOOR = 3, n10.ROUND_HALF_UP = 4, n10.ROUND_HALF_DOWN = 5, n10.ROUND_HALF_EVEN = 6, n10.ROUND_HALF_CEIL = 7, n10.ROUND_HALF_FLOOR = 8, n10.clone = oe8, n10.config = n10.set = le9, e14 === void 0 && (e14 = {}), e14) for (t10 = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], r11 = 0; r11 < t10.length; ) e14.hasOwnProperty(o15 = t10[r11++]) || (e14[o15] = this[o15]);
      return n10.config(e14), n10;
    }
    function le9(e14) {
      if (!e14 || typeof e14 != "object") throw Error(L12 + "Object expected");
      var r11, o15, t10, n10 = ["precision", 1, m18, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (r11 = 0; r11 < n10.length; r11 += 3) if ((t10 = e14[o15 = n10[r11]]) !== void 0) if (H14(t10) === t10 && t10 >= n10[r11 + 1] && t10 <= n10[r11 + 2]) this[o15] = t10;
      else throw Error(U11 + o15 + ": " + t10);
      if ((t10 = e14[o15 = "LN10"]) !== void 0) if (t10 == Math.LN10) this[o15] = new this(t10);
      else throw Error(U11 + o15 + ": " + t10);
      return this;
    }
    _14 = oe8(_14), _14.default = _14.Decimal = _14, q14 = new _14(1), typeof define == "function" && define.amd ? define(function() {
      return _14;
    }) : typeof $14 < "u" && $14.exports ? $14.exports = _14 : (C11 || (C11 = typeof self < "u" && self && self.self == self ? self : Function("return this")()), C11.Decimal = _14);
  })(fe9);
});
var K3 = me3(ue4());
var { precision: Oe2, rounding: Le3, toExpNeg: De2, toExpPos: Ae3, LN10: Ce3 } = K3;
var _e3 = K3.default ?? K3;

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/_internal/isUnsafeProperty.mjs
function o(r11) {
  return r11 === "__proto__";
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/compat/get.mjs
function g2(r11) {
  switch (typeof r11) {
    case "number":
    case "symbol":
      return false;
    case "string":
      return r11.includes(".") || r11.includes("[") || r11.includes("]");
  }
}
function o2(r11) {
  return typeof r11 == "string" || typeof r11 == "symbol" ? r11 : Object.is(r11?.valueOf?.(), -0) ? "-0" : String(r11);
}
function c(r11) {
  if (r11 == null) return "";
  if (typeof r11 == "string") return r11;
  if (Array.isArray(r11)) return r11.map(c).join(",");
  let i9 = String(r11);
  return i9 === "0" && Object.is(Number(r11), -0) ? "-0" : i9;
}
function l(r11) {
  if (Array.isArray(r11)) return r11.map(o2);
  if (typeof r11 == "symbol") return [r11];
  r11 = c(r11);
  let i9 = [], s8 = r11.length;
  if (s8 === 0) return i9;
  let t10 = 0, n10 = "", f10 = "", u9 = false;
  for (r11.charCodeAt(0) === 46 && (i9.push(""), t10++); t10 < s8; ) {
    let e14 = r11[t10];
    f10 ? e14 === "\\" && t10 + 1 < s8 ? (t10++, n10 += r11[t10]) : e14 === f10 ? f10 = "" : n10 += e14 : u9 ? e14 === '"' || e14 === "'" ? f10 = e14 : e14 === "]" ? (u9 = false, i9.push(n10), n10 = "") : n10 += e14 : e14 === "[" ? (u9 = true, n10 && (i9.push(n10), n10 = "")) : e14 === "." ? n10 && (i9.push(n10), n10 = "") : n10 += e14, t10++;
  }
  return n10 && i9.push(n10), i9;
}
function y(r11, i9, s8) {
  if (r11 == null) return s8;
  switch (typeof i9) {
    case "string": {
      if (o(i9)) return s8;
      let t10 = r11[i9];
      return t10 === void 0 ? g2(i9) ? y(r11, l(i9), s8) : s8 : t10;
    }
    case "number":
    case "symbol": {
      typeof i9 == "number" && (i9 = o2(i9));
      let t10 = r11[i9];
      return t10 === void 0 ? s8 : t10;
    }
    default: {
      if (Array.isArray(i9)) return x4(r11, i9, s8);
      if (Object.is(i9?.valueOf(), -0) ? i9 = "-0" : i9 = String(i9), o(i9)) return s8;
      let t10 = r11[i9];
      return t10 === void 0 ? s8 : t10;
    }
  }
}
function x4(r11, i9, s8) {
  if (i9.length === 0) return s8;
  let t10 = r11;
  for (let n10 = 0; n10 < i9.length; n10++) {
    if (t10 == null || o(i9[n10])) return s8;
    t10 = t10[i9[n10]];
  }
  return t10 === void 0 ? s8 : t10;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/compat/predicate/isPlainObject.mjs
function l2(t10) {
  if (typeof t10 != "object" || t10 == null) return false;
  if (Object.getPrototypeOf(t10) === null) return true;
  if (Object.prototype.toString.call(t10) !== "[object Object]") {
    let r11 = t10[Symbol.toStringTag];
    return r11 == null || !Object.getOwnPropertyDescriptor(t10, Symbol.toStringTag)?.writable ? false : t10.toString() === `[object ${r11}]`;
  }
  let e14 = t10;
  for (; Object.getPrototypeOf(e14) !== null; ) e14 = Object.getPrototypeOf(e14);
  return Object.getPrototypeOf(t10) === e14;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/array/last.mjs
function n(t10) {
  return t10[t10.length - 1];
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/predicate/isLength.mjs
function n2(e14) {
  return Number.isSafeInteger(e14) && e14 >= 0;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/compat/last.mjs
function t(r11) {
  return Array.isArray(r11) ? r11 : Array.from(r11);
}
function o3(r11) {
  return r11 != null && typeof r11 != "function" && n2(r11.length);
}
function f2(r11) {
  if (o3(r11)) return n(t(r11));
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/_internal/isEqualsSameValueZero.mjs
function r2(N19, e14) {
  return N19 === e14 || Number.isNaN(N19) && Number.isNaN(e14);
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/array/maxBy.mjs
function a(n10, u9) {
  if (n10.length === 0) return;
  let l12 = n10[0], f10 = -1 / 0;
  for (let e14 = 0; e14 < n10.length; e14++) {
    let t10 = n10[e14], r11 = u9(t10, e14, n10);
    if (Number.isNaN(r11)) return t10;
    r11 > f10 && (f10 = r11, l12 = t10);
  }
  return l12;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/compat/_internal/getTag.mjs
function e2(t10) {
  return t10 == null ? t10 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t10);
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/compat/_internal/tags.mjs
var t2 = "[object RegExp]";
var a2 = "[object String]";
var o4 = "[object Number]";
var r3 = "[object Boolean]";
var c2 = "[object Arguments]";
var n3 = "[object Symbol]";
var e3 = "[object Date]";
var g3 = "[object Map]";
var b = "[object Set]";
var s = "[object Array]";
var y2 = "[object ArrayBuffer]";
var T4 = "[object Object]";
var i2 = "[object DataView]";
var u = "[object Uint8Array]";
var l3 = "[object Uint8ClampedArray]";
var m2 = "[object Uint16Array]";
var f3 = "[object Uint32Array]";
var U3 = "[object Int8Array]";
var B4 = "[object Int16Array]";
var I5 = "[object Int32Array]";
var x5 = "[object Float32Array]";
var F2 = "[object Float64Array]";

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/function/identity.mjs
function n4(t10) {
  return t10;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/predicate/isPrimitive.mjs
function i3(t10) {
  return t10 == null || typeof t10 != "object" && typeof t10 != "function";
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/predicate/isTypedArray.mjs
function e4(r11) {
  return ArrayBuffer.isView(r11) && !(r11 instanceof DataView);
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/compat/_internal/getSymbols.mjs
function r4(e14) {
  return Object.getOwnPropertySymbols(e14).filter((t10) => Object.prototype.propertyIsEnumerable.call(e14, t10));
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/_internal/globalThis.mjs
var o5 = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof globalThis == "object" && globalThis || /* @__PURE__ */ function() {
  return this;
}();

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/predicate/isBuffer.mjs
function u2(e14) {
  return typeof o5.Buffer < "u" && o5.Buffer.isBuffer(e14);
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/object/cloneDeepWith.mjs
function j2(r11, c16) {
  return p(r11, void 0, r11, /* @__PURE__ */ new Map(), c16);
}
function p(r11, c16, f10, i9 = /* @__PURE__ */ new Map(), g13 = void 0) {
  let n10 = g13?.(r11, c16, f10, i9);
  if (n10 !== void 0) return n10;
  if (i3(r11)) return r11;
  if (i9.has(r11)) return i9.get(r11);
  if (Array.isArray(r11)) {
    let t10 = new Array(r11.length);
    i9.set(r11, t10);
    for (let s8 = 0; s8 < r11.length; s8++) t10[s8] = p(r11[s8], s8, f10, i9, g13);
    return Object.hasOwn(r11, "index") && (t10.index = r11.index), Object.hasOwn(r11, "input") && (t10.input = r11.input), t10;
  }
  if (r11 instanceof Date) return new Date(r11.getTime());
  if (r11 instanceof RegExp) {
    let t10 = new RegExp(r11.source, r11.flags);
    return t10.lastIndex = r11.lastIndex, t10;
  }
  if (r11 instanceof Map) {
    let t10 = /* @__PURE__ */ new Map();
    i9.set(r11, t10);
    for (let [s8, m18] of r11) t10.set(s8, p(m18, s8, f10, i9, g13));
    return t10;
  }
  if (r11 instanceof Set) {
    let t10 = /* @__PURE__ */ new Set();
    i9.set(r11, t10);
    for (let s8 of r11) t10.add(p(s8, void 0, f10, i9, g13));
    return t10;
  }
  if (u2(r11)) return r11.subarray();
  if (e4(r11)) {
    let t10 = new (Object.getPrototypeOf(r11)).constructor(r11.length);
    i9.set(r11, t10);
    for (let s8 = 0; s8 < r11.length; s8++) t10[s8] = p(r11[s8], s8, f10, i9, g13);
    return t10;
  }
  if (r11 instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && r11 instanceof SharedArrayBuffer) return r11.slice(0);
  if (r11 instanceof DataView) {
    let t10 = new DataView(r11.buffer.slice(0), r11.byteOffset, r11.byteLength);
    return i9.set(r11, t10), y3(t10, r11, f10, i9, g13), t10;
  }
  if (typeof File < "u" && r11 instanceof File) {
    let t10 = new File([r11], r11.name, { type: r11.type });
    return i9.set(r11, t10), y3(t10, r11, f10, i9, g13), t10;
  }
  if (typeof Blob < "u" && r11 instanceof Blob) {
    let t10 = new Blob([r11], { type: r11.type });
    return i9.set(r11, t10), y3(t10, r11, f10, i9, g13), t10;
  }
  if (r11 instanceof Error) {
    let t10 = structuredClone(r11);
    return i9.set(r11, t10), t10.message = r11.message, t10.name = r11.name, t10.stack = r11.stack, t10.cause = r11.cause, t10.constructor = r11.constructor, y3(t10, r11, f10, i9, g13), t10;
  }
  if (r11 instanceof Boolean) {
    let t10 = new Boolean(r11.valueOf());
    return i9.set(r11, t10), y3(t10, r11, f10, i9, g13), t10;
  }
  if (r11 instanceof Number) {
    let t10 = new Number(r11.valueOf());
    return i9.set(r11, t10), y3(t10, r11, f10, i9, g13), t10;
  }
  if (r11 instanceof String) {
    let t10 = new String(r11.valueOf());
    return i9.set(r11, t10), y3(t10, r11, f10, i9, g13), t10;
  }
  if (typeof r11 == "object" && Q2(r11)) {
    let t10 = Object.create(Object.getPrototypeOf(r11));
    return i9.set(r11, t10), y3(t10, r11, f10, i9, g13), t10;
  }
  return r11;
}
function y3(r11, c16, f10 = r11, i9, g13) {
  let n10 = [...Object.keys(c16), ...r4(c16)];
  for (let t10 = 0; t10 < n10.length; t10++) {
    let s8 = n10[t10], m18 = Object.getOwnPropertyDescriptor(r11, s8);
    (m18 == null || m18.writable) && (r11[s8] = p(c16[s8], s8, f10, i9, g13));
  }
}
function Q2(r11) {
  switch (e2(r11)) {
    case c2:
    case s:
    case y2:
    case i2:
    case r3:
    case e3:
    case x5:
    case F2:
    case U3:
    case B4:
    case I5:
    case g3:
    case o4:
    case T4:
    case t2:
    case b:
    case a2:
    case n3:
    case u:
    case l3:
    case m2:
    case f3:
      return true;
    default:
      return false;
  }
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/object/cloneDeep.mjs
function p2(e14) {
  return p(e14, void 0, e14, /* @__PURE__ */ new Map(), void 0);
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/compat/maxBy.mjs
function p3(r11) {
  switch (typeof r11) {
    case "number":
    case "symbol":
      return false;
    case "string":
      return r11.includes(".") || r11.includes("[") || r11.includes("]");
  }
}
function m3(r11) {
  return typeof r11 == "string" || typeof r11 == "symbol" ? r11 : Object.is(r11?.valueOf?.(), -0) ? "-0" : String(r11);
}
function g4(r11) {
  if (r11 == null) return "";
  if (typeof r11 == "string") return r11;
  if (Array.isArray(r11)) return r11.map(g4).join(",");
  let t10 = String(r11);
  return t10 === "0" && Object.is(Number(r11), -0) ? "-0" : t10;
}
function h2(r11) {
  if (Array.isArray(r11)) return r11.map(m3);
  if (typeof r11 == "symbol") return [r11];
  r11 = g4(r11);
  let t10 = [], e14 = r11.length;
  if (e14 === 0) return t10;
  let n10 = 0, i9 = "", o15 = "", s8 = false;
  for (r11.charCodeAt(0) === 46 && (t10.push(""), n10++); n10 < e14; ) {
    let f10 = r11[n10];
    o15 ? f10 === "\\" && n10 + 1 < e14 ? (n10++, i9 += r11[n10]) : f10 === o15 ? o15 = "" : i9 += f10 : s8 ? f10 === '"' || f10 === "'" ? o15 = f10 : f10 === "]" ? (s8 = false, t10.push(i9), i9 = "") : i9 += f10 : f10 === "[" ? (s8 = true, i9 && (t10.push(i9), i9 = "")) : f10 === "." ? i9 && (t10.push(i9), i9 = "") : i9 += f10, n10++;
  }
  return i9 && t10.push(i9), t10;
}
function l4(r11, t10, e14) {
  if (r11 == null) return e14;
  switch (typeof t10) {
    case "string": {
      if (o(t10)) return e14;
      let n10 = r11[t10];
      return n10 === void 0 ? p3(t10) ? l4(r11, h2(t10), e14) : e14 : n10;
    }
    case "number":
    case "symbol": {
      typeof t10 == "number" && (t10 = m3(t10));
      let n10 = r11[t10];
      return n10 === void 0 ? e14 : n10;
    }
    default: {
      if (Array.isArray(t10)) return q2(r11, t10, e14);
      if (Object.is(t10?.valueOf(), -0) ? t10 = "-0" : t10 = String(t10), o(t10)) return e14;
      let n10 = r11[t10];
      return n10 === void 0 ? e14 : n10;
    }
  }
}
function q2(r11, t10, e14) {
  if (t10.length === 0) return e14;
  let n10 = r11;
  for (let i9 = 0; i9 < t10.length; i9++) {
    if (n10 == null || o(t10[i9])) return e14;
    n10 = n10[t10[i9]];
  }
  return n10 === void 0 ? e14 : n10;
}
function O(r11) {
  return function(t10) {
    return l4(t10, r11);
  };
}
function M(r11) {
  return r11 !== null && (typeof r11 == "object" || typeof r11 == "function");
}
function b2(r11, t10, e14) {
  return typeof e14 != "function" ? b2(r11, t10, () => {
  }) : A2(r11, t10, function n10(i9, o15, s8, f10, u9, y16) {
    let c16 = e14(i9, o15, s8, f10, u9, y16);
    return c16 !== void 0 ? !!c16 : A2(i9, o15, n10, y16);
  }, /* @__PURE__ */ new Map());
}
function A2(r11, t10, e14, n10) {
  if (t10 === r11) return true;
  switch (typeof t10) {
    case "object":
      return G4(r11, t10, e14, n10);
    case "function":
      return Object.keys(t10).length > 0 ? A2(r11, { ...t10 }, e14, n10) : r2(r11, t10);
    default:
      return M(r11) ? typeof t10 == "string" ? t10 === "" : true : r2(r11, t10);
  }
}
function G4(r11, t10, e14, n10) {
  if (t10 == null) return true;
  if (Array.isArray(t10)) return D4(r11, t10, e14, n10);
  if (t10 instanceof Map) return $3(r11, t10, e14, n10);
  if (t10 instanceof Set) return j3(r11, t10, e14, n10);
  let i9 = Object.keys(t10);
  if (r11 == null || i3(r11)) return i9.length === 0;
  if (i9.length === 0) return true;
  if (n10?.has(t10)) return n10.get(t10) === r11;
  n10?.set(t10, r11);
  try {
    for (let o15 = 0; o15 < i9.length; o15++) {
      let s8 = i9[o15];
      if (!i3(r11) && !(s8 in r11) || t10[s8] === void 0 && r11[s8] !== void 0 || t10[s8] === null && r11[s8] !== null || !e14(r11[s8], t10[s8], s8, r11, t10, n10)) return false;
    }
    return true;
  } finally {
    n10?.delete(t10);
  }
}
function $3(r11, t10, e14, n10) {
  if (t10.size === 0) return true;
  if (!(r11 instanceof Map)) return false;
  for (let [i9, o15] of t10.entries()) if (e14(r11.get(i9), o15, i9, r11, t10, n10) === false) return false;
  return true;
}
function D4(r11, t10, e14, n10) {
  if (t10.length === 0) return true;
  if (!Array.isArray(r11)) return false;
  let i9 = /* @__PURE__ */ new Set();
  for (let o15 = 0; o15 < t10.length; o15++) {
    let s8 = t10[o15], f10 = false;
    for (let u9 = 0; u9 < r11.length; u9++) {
      if (i9.has(u9)) continue;
      let y16 = r11[u9], c16 = false;
      if (e14(y16, s8, o15, r11, t10, n10) && (c16 = true), c16) {
        i9.add(u9), f10 = true;
        break;
      }
    }
    if (!f10) return false;
  }
  return true;
}
function j3(r11, t10, e14, n10) {
  return t10.size === 0 ? true : r11 instanceof Set ? D4([...r11], [...t10], e14, n10) : false;
}
function x6(r11, t10) {
  return b2(r11, t10, () => {
  });
}
function I6(r11) {
  return r11 = p2(r11), (t10) => x6(t10, r11);
}
function P2(r11, t10) {
  return j2(r11, (e14, n10, i9, o15) => {
    let s8 = t10?.(e14, n10, i9, o15);
    if (s8 !== void 0) return s8;
    if (typeof r11 == "object") {
      if (e2(r11) === "[object Object]" && typeof r11.constructor != "function") {
        let f10 = {};
        return o15.set(r11, f10), y3(f10, r11, i9, o15), f10;
      }
      switch (Object.prototype.toString.call(r11)) {
        case o4:
        case a2:
        case r3: {
          let f10 = new r11.constructor(r11?.valueOf());
          return y3(f10, r11), f10;
        }
        case c2: {
          let f10 = {};
          return y3(f10, r11), f10.length = r11.length, f10[Symbol.iterator] = r11[Symbol.iterator], f10;
        }
        default:
          return;
      }
    }
  });
}
function E(r11) {
  return P2(r11);
}
var H2 = /^(?:0|[1-9]\d*)$/;
function T5(r11, t10 = Number.MAX_SAFE_INTEGER) {
  switch (typeof r11) {
    case "number":
      return Number.isInteger(r11) && r11 >= 0 && r11 < t10;
    case "symbol":
      return false;
    case "string":
      return H2.test(r11);
  }
}
function W3(r11) {
  return r11 !== null && typeof r11 == "object" && e2(r11) === "[object Arguments]";
}
function N4(r11, t10) {
  let e14;
  if (Array.isArray(t10) ? e14 = t10 : typeof t10 == "string" && p3(t10) && r11?.[t10] == null ? e14 = h2(t10) : e14 = [t10], e14.length === 0) return false;
  let n10 = r11;
  for (let i9 = 0; i9 < e14.length; i9++) {
    let o15 = e14[i9];
    if ((n10 == null || !Object.hasOwn(n10, o15)) && !((Array.isArray(n10) || W3(n10)) && T5(o15) && o15 < n10.length)) return false;
    n10 = n10[o15];
  }
  return true;
}
function B5(r11, t10) {
  switch (typeof r11) {
    case "object":
      Object.is(r11?.valueOf(), -0) && (r11 = "-0");
      break;
    case "number":
      r11 = m3(r11);
      break;
  }
  return t10 = E(t10), function(e14) {
    let n10 = l4(e14, r11);
    return n10 === void 0 ? N4(e14, r11) : t10 === void 0 ? n10 === void 0 : x6(n10, t10);
  };
}
function _2(r11) {
  if (r11 == null) return n4;
  switch (typeof r11) {
    case "function":
      return r11;
    case "object":
      return Array.isArray(r11) && r11.length === 2 ? B5(r11[0], r11[1]) : I6(r11);
    case "string":
    case "symbol":
    case "number":
      return O(r11);
  }
}
function K4(r11, t10) {
  if (r11 != null) return a(Array.from(r11), _2(t10 ?? n4));
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/array/minBy.mjs
function u3(n10, f10) {
  if (n10.length === 0) return;
  let l12 = n10[0], i9 = 1 / 0;
  for (let e14 = 0; e14 < n10.length; e14++) {
    let t10 = n10[e14], r11 = f10(t10, e14, n10);
    if (Number.isNaN(r11)) return t10;
    r11 < i9 && (i9 = r11, l12 = t10);
  }
  return l12;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/compat/minBy.mjs
function p4(r11) {
  switch (typeof r11) {
    case "number":
    case "symbol":
      return false;
    case "string":
      return r11.includes(".") || r11.includes("[") || r11.includes("]");
  }
}
function m4(r11) {
  return typeof r11 == "string" || typeof r11 == "symbol" ? r11 : Object.is(r11?.valueOf?.(), -0) ? "-0" : String(r11);
}
function x7(r11) {
  if (r11 == null) return "";
  if (typeof r11 == "string") return r11;
  if (Array.isArray(r11)) return r11.map(x7).join(",");
  let t10 = String(r11);
  return t10 === "0" && Object.is(Number(r11), -0) ? "-0" : t10;
}
function h3(r11) {
  if (Array.isArray(r11)) return r11.map(m4);
  if (typeof r11 == "symbol") return [r11];
  r11 = x7(r11);
  let t10 = [], e14 = r11.length;
  if (e14 === 0) return t10;
  let n10 = 0, i9 = "", o15 = "", s8 = false;
  for (r11.charCodeAt(0) === 46 && (t10.push(""), n10++); n10 < e14; ) {
    let f10 = r11[n10];
    o15 ? f10 === "\\" && n10 + 1 < e14 ? (n10++, i9 += r11[n10]) : f10 === o15 ? o15 = "" : i9 += f10 : s8 ? f10 === '"' || f10 === "'" ? o15 = f10 : f10 === "]" ? (s8 = false, t10.push(i9), i9 = "") : i9 += f10 : f10 === "[" ? (s8 = true, i9 && (t10.push(i9), i9 = "")) : f10 === "." ? i9 && (t10.push(i9), i9 = "") : i9 += f10, n10++;
  }
  return i9 && t10.push(i9), t10;
}
function l5(r11, t10, e14) {
  if (r11 == null) return e14;
  switch (typeof t10) {
    case "string": {
      if (o(t10)) return e14;
      let n10 = r11[t10];
      return n10 === void 0 ? p4(t10) ? l5(r11, h3(t10), e14) : e14 : n10;
    }
    case "number":
    case "symbol": {
      typeof t10 == "number" && (t10 = m4(t10));
      let n10 = r11[t10];
      return n10 === void 0 ? e14 : n10;
    }
    default: {
      if (Array.isArray(t10)) return q3(r11, t10, e14);
      if (Object.is(t10?.valueOf(), -0) ? t10 = "-0" : t10 = String(t10), o(t10)) return e14;
      let n10 = r11[t10];
      return n10 === void 0 ? e14 : n10;
    }
  }
}
function q3(r11, t10, e14) {
  if (t10.length === 0) return e14;
  let n10 = r11;
  for (let i9 = 0; i9 < t10.length; i9++) {
    if (n10 == null || o(t10[i9])) return e14;
    n10 = n10[t10[i9]];
  }
  return n10 === void 0 ? e14 : n10;
}
function O2(r11) {
  return function(t10) {
    return l5(t10, r11);
  };
}
function M2(r11) {
  return r11 !== null && (typeof r11 == "object" || typeof r11 == "function");
}
function a3(r11, t10, e14) {
  return typeof e14 != "function" ? a3(r11, t10, () => {
  }) : b3(r11, t10, function n10(i9, o15, s8, f10, u9, y16) {
    let c16 = e14(i9, o15, s8, f10, u9, y16);
    return c16 !== void 0 ? !!c16 : b3(i9, o15, n10, y16);
  }, /* @__PURE__ */ new Map());
}
function b3(r11, t10, e14, n10) {
  if (t10 === r11) return true;
  switch (typeof t10) {
    case "object":
      return G5(r11, t10, e14, n10);
    case "function":
      return Object.keys(t10).length > 0 ? b3(r11, { ...t10 }, e14, n10) : r2(r11, t10);
    default:
      return M2(r11) ? typeof t10 == "string" ? t10 === "" : true : r2(r11, t10);
  }
}
function G5(r11, t10, e14, n10) {
  if (t10 == null) return true;
  if (Array.isArray(t10)) return D5(r11, t10, e14, n10);
  if (t10 instanceof Map) return $4(r11, t10, e14, n10);
  if (t10 instanceof Set) return j4(r11, t10, e14, n10);
  let i9 = Object.keys(t10);
  if (r11 == null || i3(r11)) return i9.length === 0;
  if (i9.length === 0) return true;
  if (n10?.has(t10)) return n10.get(t10) === r11;
  n10?.set(t10, r11);
  try {
    for (let o15 = 0; o15 < i9.length; o15++) {
      let s8 = i9[o15];
      if (!i3(r11) && !(s8 in r11) || t10[s8] === void 0 && r11[s8] !== void 0 || t10[s8] === null && r11[s8] !== null || !e14(r11[s8], t10[s8], s8, r11, t10, n10)) return false;
    }
    return true;
  } finally {
    n10?.delete(t10);
  }
}
function $4(r11, t10, e14, n10) {
  if (t10.size === 0) return true;
  if (!(r11 instanceof Map)) return false;
  for (let [i9, o15] of t10.entries()) if (e14(r11.get(i9), o15, i9, r11, t10, n10) === false) return false;
  return true;
}
function D5(r11, t10, e14, n10) {
  if (t10.length === 0) return true;
  if (!Array.isArray(r11)) return false;
  let i9 = /* @__PURE__ */ new Set();
  for (let o15 = 0; o15 < t10.length; o15++) {
    let s8 = t10[o15], f10 = false;
    for (let u9 = 0; u9 < r11.length; u9++) {
      if (i9.has(u9)) continue;
      let y16 = r11[u9], c16 = false;
      if (e14(y16, s8, o15, r11, t10, n10) && (c16 = true), c16) {
        i9.add(u9), f10 = true;
        break;
      }
    }
    if (!f10) return false;
  }
  return true;
}
function j4(r11, t10, e14, n10) {
  return t10.size === 0 ? true : r11 instanceof Set ? D5([...r11], [...t10], e14, n10) : false;
}
function g5(r11, t10) {
  return a3(r11, t10, () => {
  });
}
function I7(r11) {
  return r11 = p2(r11), (t10) => g5(t10, r11);
}
function P3(r11, t10) {
  return j2(r11, (e14, n10, i9, o15) => {
    let s8 = t10?.(e14, n10, i9, o15);
    if (s8 !== void 0) return s8;
    if (typeof r11 == "object") {
      if (e2(r11) === "[object Object]" && typeof r11.constructor != "function") {
        let f10 = {};
        return o15.set(r11, f10), y3(f10, r11, i9, o15), f10;
      }
      switch (Object.prototype.toString.call(r11)) {
        case o4:
        case a2:
        case r3: {
          let f10 = new r11.constructor(r11?.valueOf());
          return y3(f10, r11), f10;
        }
        case c2: {
          let f10 = {};
          return y3(f10, r11), f10.length = r11.length, f10[Symbol.iterator] = r11[Symbol.iterator], f10;
        }
        default:
          return;
      }
    }
  });
}
function E2(r11) {
  return P3(r11);
}
var H3 = /^(?:0|[1-9]\d*)$/;
function T6(r11, t10 = Number.MAX_SAFE_INTEGER) {
  switch (typeof r11) {
    case "number":
      return Number.isInteger(r11) && r11 >= 0 && r11 < t10;
    case "symbol":
      return false;
    case "string":
      return H3.test(r11);
  }
}
function W4(r11) {
  return r11 !== null && typeof r11 == "object" && e2(r11) === "[object Arguments]";
}
function N5(r11, t10) {
  let e14;
  if (Array.isArray(t10) ? e14 = t10 : typeof t10 == "string" && p4(t10) && r11?.[t10] == null ? e14 = h3(t10) : e14 = [t10], e14.length === 0) return false;
  let n10 = r11;
  for (let i9 = 0; i9 < e14.length; i9++) {
    let o15 = e14[i9];
    if ((n10 == null || !Object.hasOwn(n10, o15)) && !((Array.isArray(n10) || W4(n10)) && T6(o15) && o15 < n10.length)) return false;
    n10 = n10[o15];
  }
  return true;
}
function B6(r11, t10) {
  switch (typeof r11) {
    case "object":
      Object.is(r11?.valueOf(), -0) && (r11 = "-0");
      break;
    case "number":
      r11 = m4(r11);
      break;
  }
  return t10 = E2(t10), function(e14) {
    let n10 = l5(e14, r11);
    return n10 === void 0 ? N5(e14, r11) : t10 === void 0 ? n10 === void 0 : g5(n10, t10);
  };
}
function _3(r11) {
  if (r11 == null) return n4;
  switch (typeof r11) {
    case "function":
      return r11;
    case "object":
      return Array.isArray(r11) && r11.length === 2 ? B6(r11[0], r11[1]) : I7(r11);
    case "string":
    case "symbol":
    case "number":
      return O2(r11);
  }
}
function K5(r11, t10) {
  if (r11 != null) return u3(Array.from(r11), _3(t10 ?? n4));
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/compat/predicate/isSymbol.mjs
function n5(o15) {
  return typeof o15 == "symbol" || o15 instanceof Symbol;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/compat/util/toNumber.mjs
function m5(r11) {
  return n5(r11) ? NaN : Number(r11);
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/compat/util/toFinite.mjs
function n6(r11) {
  return r11 ? (r11 = m5(r11), r11 === 1 / 0 || r11 === -1 / 0 ? (r11 < 0 ? -1 : 1) * Number.MAX_VALUE : r11 === r11 ? r11 : 0) : r11 === 0 ? r11 : 0;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/compat/util/toInteger.mjs
function i4(e14) {
  let t10 = n6(e14), n10 = t10 % 1;
  return n10 ? t10 - n10 : t10;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/compat/omit.mjs
function c3(r11) {
  switch (typeof r11) {
    case "number":
    case "symbol":
      return false;
    case "string":
      return r11.includes(".") || r11.includes("[") || r11.includes("]");
  }
}
function w(r11, t10) {
  return j2(r11, (e14, n10, i9, s8) => {
    let f10 = t10?.(e14, n10, i9, s8);
    if (f10 !== void 0) return f10;
    if (typeof r11 == "object") {
      if (e2(r11) === "[object Object]" && typeof r11.constructor != "function") {
        let o15 = {};
        return s8.set(r11, o15), y3(o15, r11, i9, s8), o15;
      }
      switch (Object.prototype.toString.call(r11)) {
        case o4:
        case a2:
        case r3: {
          let o15 = new r11.constructor(r11?.valueOf());
          return y3(o15, r11), o15;
        }
        case c2: {
          let o15 = {};
          return y3(o15, r11), o15.length = r11.length, o15[Symbol.iterator] = r11[Symbol.iterator], o15;
        }
        default:
          return;
      }
    }
  });
}
function m6(r11) {
  return r11 != null && typeof r11 != "function" && n2(r11.length);
}
function I8(r11, t10 = 1) {
  let e14 = [], n10 = Math.floor(t10);
  if (!m6(r11)) return e14;
  let i9 = (s8, f10) => {
    for (let o15 = 0; o15 < s8.length; o15++) {
      let u9 = s8[o15];
      f10 < n10 && (Array.isArray(u9) || u9?.[Symbol.isConcatSpreadable] || u9 !== null && typeof u9 == "object" && Object.prototype.toString.call(u9) === "[object Arguments]") ? Array.isArray(u9) ? i9(u9, f10 + 1) : i9(Array.from(u9), f10 + 1) : e14.push(u9);
    }
  };
  return i9(Array.from(r11), 0), e14;
}
function l6(r11) {
  return typeof r11 == "string" || typeof r11 == "symbol" ? r11 : Object.is(r11?.valueOf?.(), -0) ? "-0" : String(r11);
}
function a4(r11) {
  if (r11 == null) return "";
  if (typeof r11 == "string") return r11;
  if (Array.isArray(r11)) return r11.map(a4).join(",");
  let t10 = String(r11);
  return t10 === "0" && Object.is(Number(r11), -0) ? "-0" : t10;
}
function y4(r11) {
  if (Array.isArray(r11)) return r11.map(l6);
  if (typeof r11 == "symbol") return [r11];
  r11 = a4(r11);
  let t10 = [], e14 = r11.length;
  if (e14 === 0) return t10;
  let n10 = 0, i9 = "", s8 = "", f10 = false;
  for (r11.charCodeAt(0) === 46 && (t10.push(""), n10++); n10 < e14; ) {
    let o15 = r11[n10];
    s8 ? o15 === "\\" && n10 + 1 < e14 ? (n10++, i9 += r11[n10]) : o15 === s8 ? s8 = "" : i9 += o15 : f10 ? o15 === '"' || o15 === "'" ? s8 = o15 : o15 === "]" ? (f10 = false, t10.push(i9), i9 = "") : i9 += o15 : o15 === "[" ? (f10 = true, i9 && (t10.push(i9), i9 = "")) : o15 === "." ? i9 && (t10.push(i9), i9 = "") : i9 += o15, n10++;
  }
  return i9 && t10.push(i9), t10;
}
function d(r11, t10, e14) {
  if (r11 == null) return e14;
  switch (typeof t10) {
    case "string": {
      if (o(t10)) return e14;
      let n10 = r11[t10];
      return n10 === void 0 ? c3(t10) ? d(r11, y4(t10), e14) : e14 : n10;
    }
    case "number":
    case "symbol": {
      typeof t10 == "number" && (t10 = l6(t10));
      let n10 = r11[t10];
      return n10 === void 0 ? e14 : n10;
    }
    default: {
      if (Array.isArray(t10)) return N6(r11, t10, e14);
      if (Object.is(t10?.valueOf(), -0) ? t10 = "-0" : t10 = String(t10), o(t10)) return e14;
      let n10 = r11[t10];
      return n10 === void 0 ? e14 : n10;
    }
  }
}
function N6(r11, t10, e14) {
  if (t10.length === 0) return e14;
  let n10 = r11;
  for (let i9 = 0; i9 < t10.length; i9++) {
    if (n10 == null || o(t10[i9])) return e14;
    n10 = n10[t10[i9]];
  }
  return n10 === void 0 ? e14 : n10;
}
function x8(r11, t10) {
  if (r11 == null) return true;
  switch (typeof t10) {
    case "symbol":
    case "number":
    case "object":
      if (Array.isArray(t10)) return P4(r11, t10);
      if (typeof t10 == "number" ? t10 = l6(t10) : typeof t10 == "object" && (Object.is(t10?.valueOf(), -0) ? t10 = "-0" : t10 = String(t10)), o(t10)) return false;
      if (r11?.[t10] === void 0) return true;
      try {
        return delete r11[t10], true;
      } catch {
        return false;
      }
    case "string":
      if (r11?.[t10] === void 0 && c3(t10)) return P4(r11, y4(t10));
      if (o(t10)) return false;
      try {
        return delete r11[t10], true;
      } catch {
        return false;
      }
  }
}
function P4(r11, t10) {
  let e14 = t10.length === 1 ? r11 : d(r11, t10.slice(0, -1)), n10 = t10[t10.length - 1];
  if (e14?.[n10] === void 0) return true;
  if (o(n10)) return false;
  try {
    return delete e14[n10], true;
  } catch {
    return false;
  }
}
function T7(r11) {
  let t10 = r11?.constructor;
  return r11 === (typeof t10 == "function" ? t10.prototype : Object.prototype);
}
function k(r11) {
  return e4(r11);
}
function D6(r11, t10) {
  if (r11 = i4(r11), r11 < 1 || !Number.isSafeInteger(r11)) return [];
  let e14 = new Array(r11);
  for (let n10 = 0; n10 < r11; n10++) e14[n10] = typeof t10 == "function" ? t10(n10) : n10;
  return e14;
}
function S(r11) {
  if (r11 == null) return [];
  switch (typeof r11) {
    case "object":
    case "function":
      return m6(r11) ? E3(r11) : T7(r11) ? z3(r11) : p5(r11);
    default:
      return p5(Object(r11));
  }
}
function p5(r11) {
  let t10 = [];
  for (let e14 in r11) t10.push(e14);
  return t10;
}
function z3(r11) {
  return p5(r11).filter((t10) => t10 !== "constructor");
}
function E3(r11) {
  let t10 = D6(r11.length, (i9) => `${i9}`), e14 = new Set(t10);
  u2(r11) && (e14.add("offset"), e14.add("parent")), k(r11) && (e14.add("buffer"), e14.add("byteLength"), e14.add("byteOffset"));
  let n10 = p5(r11).filter((i9) => !e14.has(i9));
  return Array.isArray(r11) ? [...t10, ...n10] : [...t10.filter((i9) => Object.hasOwn(r11, i9)), ...n10];
}
function h4(r11) {
  let t10 = [];
  for (; r11; ) t10.push(...r4(r11)), r11 = Object.getPrototypeOf(r11);
  return t10;
}
function H4(r11, ...t10) {
  if (r11 == null) return {};
  t10 = I8(t10);
  let e14 = J4(r11, t10);
  for (let n10 = 0; n10 < t10.length; n10++) {
    let i9 = t10[n10];
    switch (typeof i9) {
      case "object":
        Array.isArray(i9) || (i9 = Array.from(i9));
        for (let s8 = 0; s8 < i9.length; s8++) {
          let f10 = i9[s8];
          x8(e14, f10);
        }
        break;
      case "string":
      case "symbol":
      case "number":
        x8(e14, i9);
        break;
    }
  }
  return e14;
}
function J4(r11, t10) {
  return t10.some((e14) => Array.isArray(e14) || c3(e14)) ? R5(r11) : Q3(r11);
}
function Q3(r11) {
  let t10 = {}, e14 = [...S(r11), ...h4(r11)];
  for (let n10 = 0; n10 < e14.length; n10++) {
    let i9 = e14[n10];
    t10[i9] = r11[i9];
  }
  return t10;
}
function R5(r11) {
  let t10 = {}, e14 = [...S(r11), ...h4(r11)];
  for (let n10 = 0; n10 < e14.length; n10++) {
    let i9 = e14[n10];
    t10[i9] = w(r11[i9], (s8) => {
      if (!l2(s8)) return s8;
    });
  }
  return t10;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/compat/range.mjs
function m7(r11) {
  return r11 != null && typeof r11 != "function" && n2(r11.length);
}
function u4(r11) {
  return r11 !== null && (typeof r11 == "object" || typeof r11 == "function");
}
var s2 = /^(?:0|[1-9]\d*)$/;
function c4(r11, o15 = Number.MAX_SAFE_INTEGER) {
  switch (typeof r11) {
    case "number":
      return Number.isInteger(r11) && r11 >= 0 && r11 < o15;
    case "symbol":
      return false;
    case "string":
      return s2.test(r11);
  }
}
function l7(r11, o15, i9) {
  return u4(i9) && (typeof o15 == "number" && m7(i9) && c4(o15) && o15 < i9.length || typeof o15 == "string" && o15 in i9) ? r2(i9[o15], r11) : false;
}
function g6(r11, o15, i9) {
  i9 && typeof i9 != "number" && l7(r11, o15, i9) && (o15 = i9 = void 0), r11 = n6(r11), o15 === void 0 ? (o15 = r11, r11 = 0) : o15 = n6(o15), i9 = i9 === void 0 ? r11 < o15 ? 1 : -1 : n6(i9);
  let n10 = Math.max(Math.ceil((o15 - r11) / (i9 || 1)), 0), f10 = new Array(n10);
  for (let t10 = 0; t10 < n10; t10++) f10[t10] = r11, r11 += i9;
  return f10;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/array/flatten.mjs
function c5(l12, f10 = 1) {
  let o15 = [], i9 = Math.floor(f10), r11 = (s8, n10) => {
    for (let t10 = 0; t10 < s8.length; t10++) {
      let e14 = s8[t10];
      Array.isArray(e14) && n10 < i9 ? r11(e14, n10 + 1) : o15.push(e14);
    }
  };
  return r11(l12, 0), o15;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/compat/sortBy.mjs
function g7(t10) {
  return t10 != null && typeof t10 != "function" && n2(t10.length);
}
function a5(t10) {
  return t10 !== null && (typeof t10 == "object" || typeof t10 == "function");
}
var N7 = /^(?:0|[1-9]\d*)$/;
function h5(t10, r11 = Number.MAX_SAFE_INTEGER) {
  switch (typeof t10) {
    case "number":
      return Number.isInteger(t10) && t10 >= 0 && t10 < r11;
    case "symbol":
      return false;
    case "string":
      return N7.test(t10);
  }
}
function y5(t10, r11, f10) {
  return a5(f10) && (typeof r11 == "number" && g7(f10) && h5(r11) && r11 < f10.length || typeof r11 == "string" && r11 in f10) ? r2(f10[r11], t10) : false;
}
function A3(t10) {
  return typeof t10 == "string" || typeof t10 == "symbol" ? t10 : Object.is(t10?.valueOf?.(), -0) ? "-0" : String(t10);
}
function m8(t10) {
  if (t10 == null) return "";
  if (typeof t10 == "string") return t10;
  if (Array.isArray(t10)) return t10.map(m8).join(",");
  let r11 = String(t10);
  return r11 === "0" && Object.is(Number(t10), -0) ? "-0" : r11;
}
function x9(t10) {
  if (Array.isArray(t10)) return t10.map(A3);
  if (typeof t10 == "symbol") return [t10];
  t10 = m8(t10);
  let r11 = [], f10 = t10.length;
  if (f10 === 0) return r11;
  let u9 = 0, e14 = "", i9 = "", p12 = false;
  for (t10.charCodeAt(0) === 46 && (r11.push(""), u9++); u9 < f10; ) {
    let n10 = t10[u9];
    i9 ? n10 === "\\" && u9 + 1 < f10 ? (u9++, e14 += t10[u9]) : n10 === i9 ? i9 = "" : e14 += n10 : p12 ? n10 === '"' || n10 === "'" ? i9 = n10 : n10 === "]" ? (p12 = false, r11.push(e14), e14 = "") : e14 += n10 : n10 === "[" ? (p12 = true, e14 && (r11.push(e14), e14 = "")) : n10 === "." ? e14 && (r11.push(e14), e14 = "") : e14 += n10, u9++;
  }
  return e14 && r11.push(e14), r11;
}
function I9(t10) {
  return typeof t10 == "symbol" ? 1 : t10 === null ? 2 : t10 === void 0 ? 3 : t10 !== t10 ? 4 : 0;
}
var O3 = (t10, r11, f10) => {
  if (t10 !== r11) {
    let u9 = I9(t10), e14 = I9(r11);
    if (u9 === e14 && u9 === 0) {
      if (t10 < r11) return f10 === "desc" ? 1 : -1;
      if (t10 > r11) return f10 === "desc" ? -1 : 1;
    }
    return f10 === "desc" ? e14 - u9 : u9 - e14;
  }
  return 0;
};
var B7 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var C3 = /^\w*$/;
function S2(t10, r11) {
  return Array.isArray(t10) ? false : typeof t10 == "number" || typeof t10 == "boolean" || t10 == null || n5(t10) ? true : typeof t10 == "string" && (C3.test(t10) || !B7.test(t10)) || r11 != null && Object.hasOwn(r11, t10);
}
function P5(t10, r11, f10, u9) {
  if (t10 == null) return [];
  f10 = u9 ? void 0 : f10, Array.isArray(t10) || (t10 = Object.values(t10)), Array.isArray(r11) || (r11 = r11 == null ? [null] : [r11]), r11.length === 0 && (r11 = [null]), Array.isArray(f10) || (f10 = f10 == null ? [] : [f10]), f10 = f10.map((n10) => String(n10));
  let e14 = (n10, s8) => {
    let o15 = n10;
    for (let l12 = 0; l12 < s8.length && o15 != null; ++l12) o15 = o15[s8[l12]];
    return o15;
  }, i9 = (n10, s8) => s8 == null || n10 == null ? s8 : typeof n10 == "object" && "key" in n10 ? Object.hasOwn(s8, n10.key) ? s8[n10.key] : e14(s8, n10.path) : typeof n10 == "function" ? n10(s8) : Array.isArray(n10) ? e14(s8, n10) : typeof s8 == "object" ? s8[n10] : s8, p12 = r11.map((n10) => (Array.isArray(n10) && n10.length === 1 && (n10 = n10[0]), n10 == null || typeof n10 == "function" || Array.isArray(n10) || S2(n10) ? n10 : { key: n10, path: x9(n10) }));
  return t10.map((n10) => ({ original: n10, criteria: p12.map((s8) => i9(s8, n10)) })).slice().sort((n10, s8) => {
    for (let o15 = 0; o15 < p12.length; o15++) {
      let l12 = O3(n10.criteria[o15], s8.criteria[o15], f10[o15]);
      if (l12 !== 0) return l12;
    }
    return 0;
  }).map((n10) => n10.original);
}
function V5(t10, ...r11) {
  let f10 = r11.length;
  return f10 > 1 && y5(t10, r11[0], r11[1]) ? r11 = [] : f10 > 2 && y5(r11[0], r11[1], r11[2]) && (r11 = [r11[0]]), P5(t10, c5(r11), ["asc"]);
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/compat/sumBy.mjs
function y6(r11) {
  switch (typeof r11) {
    case "number":
    case "symbol":
      return false;
    case "string":
      return r11.includes(".") || r11.includes("[") || r11.includes("]");
  }
}
function m9(r11) {
  return typeof r11 == "string" || typeof r11 == "symbol" ? r11 : Object.is(r11?.valueOf?.(), -0) ? "-0" : String(r11);
}
function x10(r11) {
  if (r11 == null) return "";
  if (typeof r11 == "string") return r11;
  if (Array.isArray(r11)) return r11.map(x10).join(",");
  let t10 = String(r11);
  return t10 === "0" && Object.is(Number(r11), -0) ? "-0" : t10;
}
function h6(r11) {
  if (Array.isArray(r11)) return r11.map(m9);
  if (typeof r11 == "symbol") return [r11];
  r11 = x10(r11);
  let t10 = [], e14 = r11.length;
  if (e14 === 0) return t10;
  let n10 = 0, i9 = "", o15 = "", s8 = false;
  for (r11.charCodeAt(0) === 46 && (t10.push(""), n10++); n10 < e14; ) {
    let f10 = r11[n10];
    o15 ? f10 === "\\" && n10 + 1 < e14 ? (n10++, i9 += r11[n10]) : f10 === o15 ? o15 = "" : i9 += f10 : s8 ? f10 === '"' || f10 === "'" ? o15 = f10 : f10 === "]" ? (s8 = false, t10.push(i9), i9 = "") : i9 += f10 : f10 === "[" ? (s8 = true, i9 && (t10.push(i9), i9 = "")) : f10 === "." ? i9 && (t10.push(i9), i9 = "") : i9 += f10, n10++;
  }
  return i9 && t10.push(i9), t10;
}
function c6(r11, t10, e14) {
  if (r11 == null) return e14;
  switch (typeof t10) {
    case "string": {
      if (o(t10)) return e14;
      let n10 = r11[t10];
      return n10 === void 0 ? y6(t10) ? c6(r11, h6(t10), e14) : e14 : n10;
    }
    case "number":
    case "symbol": {
      typeof t10 == "number" && (t10 = m9(t10));
      let n10 = r11[t10];
      return n10 === void 0 ? e14 : n10;
    }
    default: {
      if (Array.isArray(t10)) return B8(r11, t10, e14);
      if (Object.is(t10?.valueOf(), -0) ? t10 = "-0" : t10 = String(t10), o(t10)) return e14;
      let n10 = r11[t10];
      return n10 === void 0 ? e14 : n10;
    }
  }
}
function B8(r11, t10, e14) {
  if (t10.length === 0) return e14;
  let n10 = r11;
  for (let i9 = 0; i9 < t10.length; i9++) {
    if (n10 == null || o(t10[i9])) return e14;
    n10 = n10[t10[i9]];
  }
  return n10 === void 0 ? e14 : n10;
}
function M3(r11) {
  return function(t10) {
    return c6(t10, r11);
  };
}
function S3(r11) {
  return r11 !== null && (typeof r11 == "object" || typeof r11 == "function");
}
function d2(r11, t10, e14) {
  return typeof e14 != "function" ? d2(r11, t10, () => {
  }) : A4(r11, t10, function n10(i9, o15, s8, f10, u9, p12) {
    let l12 = e14(i9, o15, s8, f10, u9, p12);
    return l12 !== void 0 ? !!l12 : A4(i9, o15, n10, p12);
  }, /* @__PURE__ */ new Map());
}
function A4(r11, t10, e14, n10) {
  if (t10 === r11) return true;
  switch (typeof t10) {
    case "object":
      return G6(r11, t10, e14, n10);
    case "function":
      return Object.keys(t10).length > 0 ? A4(r11, { ...t10 }, e14, n10) : r2(r11, t10);
    default:
      return S3(r11) ? typeof t10 == "string" ? t10 === "" : true : r2(r11, t10);
  }
}
function G6(r11, t10, e14, n10) {
  if (t10 == null) return true;
  if (Array.isArray(t10)) return I10(r11, t10, e14, n10);
  if (t10 instanceof Map) return j5(r11, t10, e14, n10);
  if (t10 instanceof Set) return z4(r11, t10, e14, n10);
  let i9 = Object.keys(t10);
  if (r11 == null || i3(r11)) return i9.length === 0;
  if (i9.length === 0) return true;
  if (n10?.has(t10)) return n10.get(t10) === r11;
  n10?.set(t10, r11);
  try {
    for (let o15 = 0; o15 < i9.length; o15++) {
      let s8 = i9[o15];
      if (!i3(r11) && !(s8 in r11) || t10[s8] === void 0 && r11[s8] !== void 0 || t10[s8] === null && r11[s8] !== null || !e14(r11[s8], t10[s8], s8, r11, t10, n10)) return false;
    }
    return true;
  } finally {
    n10?.delete(t10);
  }
}
function j5(r11, t10, e14, n10) {
  if (t10.size === 0) return true;
  if (!(r11 instanceof Map)) return false;
  for (let [i9, o15] of t10.entries()) if (e14(r11.get(i9), o15, i9, r11, t10, n10) === false) return false;
  return true;
}
function I10(r11, t10, e14, n10) {
  if (t10.length === 0) return true;
  if (!Array.isArray(r11)) return false;
  let i9 = /* @__PURE__ */ new Set();
  for (let o15 = 0; o15 < t10.length; o15++) {
    let s8 = t10[o15], f10 = false;
    for (let u9 = 0; u9 < r11.length; u9++) {
      if (i9.has(u9)) continue;
      let p12 = r11[u9], l12 = false;
      if (e14(p12, s8, o15, r11, t10, n10) && (l12 = true), l12) {
        i9.add(u9), f10 = true;
        break;
      }
    }
    if (!f10) return false;
  }
  return true;
}
function z4(r11, t10, e14, n10) {
  return t10.size === 0 ? true : r11 instanceof Set ? I10([...r11], [...t10], e14, n10) : false;
}
function g8(r11, t10) {
  return d2(r11, t10, () => {
  });
}
function P6(r11) {
  return r11 = p2(r11), (t10) => g8(t10, r11);
}
function a6(r11, t10) {
  return j2(r11, (e14, n10, i9, o15) => {
    let s8 = t10?.(e14, n10, i9, o15);
    if (s8 !== void 0) return s8;
    if (typeof r11 == "object") {
      if (e2(r11) === "[object Object]" && typeof r11.constructor != "function") {
        let f10 = {};
        return o15.set(r11, f10), y3(f10, r11, i9, o15), f10;
      }
      switch (Object.prototype.toString.call(r11)) {
        case o4:
        case a2:
        case r3: {
          let f10 = new r11.constructor(r11?.valueOf());
          return y3(f10, r11), f10;
        }
        case c2: {
          let f10 = {};
          return y3(f10, r11), f10.length = r11.length, f10[Symbol.iterator] = r11[Symbol.iterator], f10;
        }
        default:
          return;
      }
    }
  });
}
function E4(r11) {
  return a6(r11);
}
var J5 = /^(?:0|[1-9]\d*)$/;
function T8(r11, t10 = Number.MAX_SAFE_INTEGER) {
  switch (typeof r11) {
    case "number":
      return Number.isInteger(r11) && r11 >= 0 && r11 < t10;
    case "symbol":
      return false;
    case "string":
      return J5.test(r11);
  }
}
function W5(r11) {
  return r11 !== null && typeof r11 == "object" && e2(r11) === "[object Arguments]";
}
function N8(r11, t10) {
  let e14;
  if (Array.isArray(t10) ? e14 = t10 : typeof t10 == "string" && y6(t10) && r11?.[t10] == null ? e14 = h6(t10) : e14 = [t10], e14.length === 0) return false;
  let n10 = r11;
  for (let i9 = 0; i9 < e14.length; i9++) {
    let o15 = e14[i9];
    if ((n10 == null || !Object.hasOwn(n10, o15)) && !((Array.isArray(n10) || W5(n10)) && T8(o15) && o15 < n10.length)) return false;
    n10 = n10[o15];
  }
  return true;
}
function _4(r11, t10) {
  switch (typeof r11) {
    case "object":
      Object.is(r11?.valueOf(), -0) && (r11 = "-0");
      break;
    case "number":
      r11 = m9(r11);
      break;
  }
  return t10 = E4(t10), function(e14) {
    let n10 = c6(e14, r11);
    return n10 === void 0 ? N8(e14, r11) : t10 === void 0 ? n10 === void 0 : g8(n10, t10);
  };
}
function q4(r11) {
  if (r11 == null) return n4;
  switch (typeof r11) {
    case "function":
      return r11;
    case "object":
      return Array.isArray(r11) && r11.length === 2 ? _4(r11[0], r11[1]) : P6(r11);
    case "string":
    case "symbol":
    case "number":
      return M3(r11);
  }
}
function Y3(r11, t10) {
  if (!r11 || !r11.length) return 0;
  t10 != null && (t10 = q4(t10));
  let e14;
  for (let n10 = 0; n10 < r11.length; n10++) {
    let i9 = t10 ? t10(r11[n10]) : r11[n10];
    i9 !== void 0 && (e14 === void 0 ? e14 = i9 : e14 += i9);
  }
  return e14;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/function/debounce.mjs
function b4(r11, d12, { signal: o15, edges: e14 } = {}) {
  let t10, l12 = null, a11 = e14 != null && e14.includes("leading"), f10 = e14 == null || e14.includes("trailing"), u9 = () => {
    l12 !== null && (r11.apply(t10, l12), t10 = void 0, l12 = null);
  }, h13 = () => {
    f10 && u9(), c16();
  }, n10 = null, s8 = () => {
    n10 != null && clearTimeout(n10), n10 = setTimeout(() => {
      n10 = null, h13();
    }, d12);
  }, m18 = () => {
    n10 !== null && (clearTimeout(n10), n10 = null);
  }, c16 = () => {
    m18(), t10 = void 0, l12 = null;
  }, T15 = () => {
    u9();
  }, i9 = function(...p12) {
    if (o15?.aborted) return;
    t10 = this, l12 = p12;
    let v9 = n10 == null;
    s8(), a11 && v9 && u9();
  };
  return i9.schedule = s8, i9.cancel = c16, i9.flush = T15, o15?.addEventListener("abort", c16, { once: true }), i9;
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/compat/throttle.mjs
function s3(o15, r11 = 0, e14 = {}) {
  typeof e14 != "object" && (e14 = {});
  let { leading: i9 = false, trailing: a11 = true, maxWait: d12 } = e14, c16 = Array(2);
  i9 && (c16[0] = "leading"), a11 && (c16[1] = "trailing");
  let t10, n10 = null, l12 = b4(function(...u9) {
    t10 = o15.apply(this, u9), n10 = null;
  }, r11, { edges: c16 }), f10 = function(...u9) {
    return d12 != null && (n10 === null && (n10 = Date.now()), Date.now() - n10 >= d12) ? (t10 = o15.apply(this, u9), n10 = Date.now(), l12.cancel(), l12.schedule(), t10) : (l12.apply(this, u9), t10);
  }, p12 = () => (l12.flush(), t10);
  return f10.cancel = l12.cancel, f10.flush = p12, f10;
}
function b5(o15, r11 = 0, e14 = {}) {
  let { leading: i9 = true, trailing: a11 = true } = e14;
  return s3(o15, r11, { leading: i9, maxWait: r11, trailing: a11 });
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/array/uniqBy.mjs
function c7(e14, i9) {
  let n10 = /* @__PURE__ */ new Map();
  for (let t10 = 0; t10 < e14.length; t10++) {
    let o15 = e14[t10], s8 = i9(o15, t10, e14);
    n10.has(s8) || n10.set(s8, o15);
  }
  return Array.from(n10.values());
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/dist/function/ary.mjs
function e5(n10, r11) {
  return function(...t10) {
    return n10.apply(this, t10.slice(0, r11));
  };
}

// http-url:https://esm.sh/es-toolkit@1.47.1/es2022/compat/uniqBy.mjs
function y7(r11) {
  switch (typeof r11) {
    case "number":
    case "symbol":
      return false;
    case "string":
      return r11.includes(".") || r11.includes("[") || r11.includes("]");
  }
}
function m10(r11) {
  return typeof r11 == "string" || typeof r11 == "symbol" ? r11 : Object.is(r11?.valueOf?.(), -0) ? "-0" : String(r11);
}
function b6(r11) {
  if (r11 == null) return "";
  if (typeof r11 == "string") return r11;
  if (Array.isArray(r11)) return r11.map(b6).join(",");
  let t10 = String(r11);
  return t10 === "0" && Object.is(Number(r11), -0) ? "-0" : t10;
}
function h7(r11) {
  if (Array.isArray(r11)) return r11.map(m10);
  if (typeof r11 == "symbol") return [r11];
  r11 = b6(r11);
  let t10 = [], e14 = r11.length;
  if (e14 === 0) return t10;
  let n10 = 0, i9 = "", o15 = "", s8 = false;
  for (r11.charCodeAt(0) === 46 && (t10.push(""), n10++); n10 < e14; ) {
    let f10 = r11[n10];
    o15 ? f10 === "\\" && n10 + 1 < e14 ? (n10++, i9 += r11[n10]) : f10 === o15 ? o15 = "" : i9 += f10 : s8 ? f10 === '"' || f10 === "'" ? o15 = f10 : f10 === "]" ? (s8 = false, t10.push(i9), i9 = "") : i9 += f10 : f10 === "[" ? (s8 = true, i9 && (t10.push(i9), i9 = "")) : f10 === "." ? i9 && (t10.push(i9), i9 = "") : i9 += f10, n10++;
  }
  return i9 && t10.push(i9), t10;
}
function l8(r11, t10, e14) {
  if (r11 == null) return e14;
  switch (typeof t10) {
    case "string": {
      if (o(t10)) return e14;
      let n10 = r11[t10];
      return n10 === void 0 ? y7(t10) ? l8(r11, h7(t10), e14) : e14 : n10;
    }
    case "number":
    case "symbol": {
      typeof t10 == "number" && (t10 = m10(t10));
      let n10 = r11[t10];
      return n10 === void 0 ? e14 : n10;
    }
    default: {
      if (Array.isArray(t10)) return k2(r11, t10, e14);
      if (Object.is(t10?.valueOf(), -0) ? t10 = "-0" : t10 = String(t10), o(t10)) return e14;
      let n10 = r11[t10];
      return n10 === void 0 ? e14 : n10;
    }
  }
}
function k2(r11, t10, e14) {
  if (t10.length === 0) return e14;
  let n10 = r11;
  for (let i9 = 0; i9 < t10.length; i9++) {
    if (n10 == null || o(t10[i9])) return e14;
    n10 = n10[t10[i9]];
  }
  return n10 === void 0 ? e14 : n10;
}
function d3(r11) {
  return function(t10) {
    return l8(t10, r11);
  };
}
function M4(r11) {
  return r11 !== null && (typeof r11 == "object" || typeof r11 == "function");
}
function a7(r11, t10, e14) {
  return typeof e14 != "function" ? a7(r11, t10, () => {
  }) : x11(r11, t10, function n10(i9, o15, s8, f10, u9, p12) {
    let c16 = e14(i9, o15, s8, f10, u9, p12);
    return c16 !== void 0 ? !!c16 : x11(i9, o15, n10, p12);
  }, /* @__PURE__ */ new Map());
}
function x11(r11, t10, e14, n10) {
  if (t10 === r11) return true;
  switch (typeof t10) {
    case "object":
      return G7(r11, t10, e14, n10);
    case "function":
      return Object.keys(t10).length > 0 ? x11(r11, { ...t10 }, e14, n10) : r2(r11, t10);
    default:
      return M4(r11) ? typeof t10 == "string" ? t10 === "" : true : r2(r11, t10);
  }
}
function G7(r11, t10, e14, n10) {
  if (t10 == null) return true;
  if (Array.isArray(t10)) return D7(r11, t10, e14, n10);
  if (t10 instanceof Map) return $5(r11, t10, e14, n10);
  if (t10 instanceof Set) return z5(r11, t10, e14, n10);
  let i9 = Object.keys(t10);
  if (r11 == null || i3(r11)) return i9.length === 0;
  if (i9.length === 0) return true;
  if (n10?.has(t10)) return n10.get(t10) === r11;
  n10?.set(t10, r11);
  try {
    for (let o15 = 0; o15 < i9.length; o15++) {
      let s8 = i9[o15];
      if (!i3(r11) && !(s8 in r11) || t10[s8] === void 0 && r11[s8] !== void 0 || t10[s8] === null && r11[s8] !== null || !e14(r11[s8], t10[s8], s8, r11, t10, n10)) return false;
    }
    return true;
  } finally {
    n10?.delete(t10);
  }
}
function $5(r11, t10, e14, n10) {
  if (t10.size === 0) return true;
  if (!(r11 instanceof Map)) return false;
  for (let [i9, o15] of t10.entries()) if (e14(r11.get(i9), o15, i9, r11, t10, n10) === false) return false;
  return true;
}
function D7(r11, t10, e14, n10) {
  if (t10.length === 0) return true;
  if (!Array.isArray(r11)) return false;
  let i9 = /* @__PURE__ */ new Set();
  for (let o15 = 0; o15 < t10.length; o15++) {
    let s8 = t10[o15], f10 = false;
    for (let u9 = 0; u9 < r11.length; u9++) {
      if (i9.has(u9)) continue;
      let p12 = r11[u9], c16 = false;
      if (e14(p12, s8, o15, r11, t10, n10) && (c16 = true), c16) {
        i9.add(u9), f10 = true;
        break;
      }
    }
    if (!f10) return false;
  }
  return true;
}
function z5(r11, t10, e14, n10) {
  return t10.size === 0 ? true : r11 instanceof Set ? D7([...r11], [...t10], e14, n10) : false;
}
function g9(r11, t10) {
  return a7(r11, t10, () => {
  });
}
function I11(r11) {
  return r11 = p2(r11), (t10) => g9(t10, r11);
}
function P7(r11, t10) {
  return j2(r11, (e14, n10, i9, o15) => {
    let s8 = t10?.(e14, n10, i9, o15);
    if (s8 !== void 0) return s8;
    if (typeof r11 == "object") {
      if (e2(r11) === "[object Object]" && typeof r11.constructor != "function") {
        let f10 = {};
        return o15.set(r11, f10), y3(f10, r11, i9, o15), f10;
      }
      switch (Object.prototype.toString.call(r11)) {
        case o4:
        case a2:
        case r3: {
          let f10 = new r11.constructor(r11?.valueOf());
          return y3(f10, r11), f10;
        }
        case c2: {
          let f10 = {};
          return y3(f10, r11), f10.length = r11.length, f10[Symbol.iterator] = r11[Symbol.iterator], f10;
        }
        default:
          return;
      }
    }
  });
}
function E5(r11) {
  return P7(r11);
}
var J6 = /^(?:0|[1-9]\d*)$/;
function T9(r11, t10 = Number.MAX_SAFE_INTEGER) {
  switch (typeof r11) {
    case "number":
      return Number.isInteger(r11) && r11 >= 0 && r11 < t10;
    case "symbol":
      return false;
    case "string":
      return J6.test(r11);
  }
}
function W6(r11) {
  return r11 !== null && typeof r11 == "object" && e2(r11) === "[object Arguments]";
}
function j6(r11, t10) {
  let e14;
  if (Array.isArray(t10) ? e14 = t10 : typeof t10 == "string" && y7(t10) && r11?.[t10] == null ? e14 = h7(t10) : e14 = [t10], e14.length === 0) return false;
  let n10 = r11;
  for (let i9 = 0; i9 < e14.length; i9++) {
    let o15 = e14[i9];
    if ((n10 == null || !Object.hasOwn(n10, o15)) && !((Array.isArray(n10) || W6(n10)) && T9(o15) && o15 < n10.length)) return false;
    n10 = n10[o15];
  }
  return true;
}
function q5(r11, t10) {
  switch (typeof r11) {
    case "object":
      Object.is(r11?.valueOf(), -0) && (r11 = "-0");
      break;
    case "number":
      r11 = m10(r11);
      break;
  }
  return t10 = E5(t10), function(e14) {
    let n10 = l8(e14, r11);
    return n10 === void 0 ? j6(e14, r11) : t10 === void 0 ? n10 === void 0 : g9(n10, t10);
  };
}
function L3(r11) {
  if (r11 == null) return n4;
  switch (typeof r11) {
    case "function":
      return r11;
    case "object":
      return Array.isArray(r11) && r11.length === 2 ? q5(r11[0], r11[1]) : I11(r11);
    case "string":
    case "symbol":
    case "number":
      return d3(r11);
  }
}
function N9(r11) {
  return r11 != null && typeof r11 != "function" && n2(r11.length);
}
function B9(r11) {
  return typeof r11 == "object" && r11 !== null;
}
function _5(r11) {
  return B9(r11) && N9(r11);
}
function tr(r11, t10 = n4) {
  return _5(r11) ? c7(Array.from(r11), e5(L3(t10), 1)) : [];
}

// http-url:https://esm.sh/eventemitter3@5.0.4/es2022/eventemitter3.mjs
var E6 = Object.create;
var d4 = Object.defineProperty;
var L4 = Object.getOwnPropertyDescriptor;
var O4 = Object.getOwnPropertyNames;
var C4 = Object.getPrototypeOf;
var A5 = Object.prototype.hasOwnProperty;
var k3 = (n10, e14) => () => (e14 || n10((e14 = { exports: {} }).exports, e14), e14.exports);
var P8 = (n10, e14, t10, s8) => {
  if (e14 && typeof e14 == "object" || typeof e14 == "function") for (let i9 of O4(e14)) !A5.call(n10, i9) && i9 !== t10 && d4(n10, i9, { get: () => e14[i9], enumerable: !(s8 = L4(e14, i9)) || s8.enumerable });
  return n10;
};
var N10 = (n10, e14, t10) => (t10 = n10 != null ? E6(C4(n10)) : {}, P8(e14 || !n10 || !n10.__esModule ? d4(t10, "default", { value: n10, enumerable: true }) : t10, n10));
var m11 = k3((q14, x18) => {
  "use strict";
  var S11 = Object.prototype.hasOwnProperty, l12 = "~";
  function _14() {
  }
  Object.create && (_14.prototype = /* @__PURE__ */ Object.create(null), new _14().__proto__ || (l12 = false));
  function T15(n10, e14, t10) {
    this.fn = n10, this.context = e14, this.once = t10 || false;
  }
  function w9(n10, e14, t10, s8, i9) {
    if (typeof t10 != "function") throw new TypeError("The listener must be a function");
    var u9 = new T15(t10, s8 || n10, i9), o15 = l12 ? l12 + e14 : e14;
    return n10._events[o15] ? n10._events[o15].fn ? n10._events[o15] = [n10._events[o15], u9] : n10._events[o15].push(u9) : (n10._events[o15] = u9, n10._eventsCount++), n10;
  }
  function y16(n10, e14) {
    --n10._eventsCount === 0 ? n10._events = new _14() : delete n10._events[e14];
  }
  function c16() {
    this._events = new _14(), this._eventsCount = 0;
  }
  c16.prototype.eventNames = function() {
    var e14 = [], t10, s8;
    if (this._eventsCount === 0) return e14;
    for (s8 in t10 = this._events) S11.call(t10, s8) && e14.push(l12 ? s8.slice(1) : s8);
    return Object.getOwnPropertySymbols ? e14.concat(Object.getOwnPropertySymbols(t10)) : e14;
  };
  c16.prototype.listeners = function(e14) {
    var t10 = l12 ? l12 + e14 : e14, s8 = this._events[t10];
    if (!s8) return [];
    if (s8.fn) return [s8.fn];
    for (var i9 = 0, u9 = s8.length, o15 = new Array(u9); i9 < u9; i9++) o15[i9] = s8[i9].fn;
    return o15;
  };
  c16.prototype.listenerCount = function(e14) {
    var t10 = l12 ? l12 + e14 : e14, s8 = this._events[t10];
    return s8 ? s8.fn ? 1 : s8.length : 0;
  };
  c16.prototype.emit = function(e14, t10, s8, i9, u9, o15) {
    var a11 = l12 ? l12 + e14 : e14;
    if (!this._events[a11]) return false;
    var r11 = this._events[a11], p12 = arguments.length, h13, f10;
    if (r11.fn) {
      switch (r11.once && this.removeListener(e14, r11.fn, void 0, true), p12) {
        case 1:
          return r11.fn.call(r11.context), true;
        case 2:
          return r11.fn.call(r11.context, t10), true;
        case 3:
          return r11.fn.call(r11.context, t10, s8), true;
        case 4:
          return r11.fn.call(r11.context, t10, s8, i9), true;
        case 5:
          return r11.fn.call(r11.context, t10, s8, i9, u9), true;
        case 6:
          return r11.fn.call(r11.context, t10, s8, i9, u9, o15), true;
      }
      for (f10 = 1, h13 = new Array(p12 - 1); f10 < p12; f10++) h13[f10 - 1] = arguments[f10];
      r11.fn.apply(r11.context, h13);
    } else {
      var b14 = r11.length, v9;
      for (f10 = 0; f10 < b14; f10++) switch (r11[f10].once && this.removeListener(e14, r11[f10].fn, void 0, true), p12) {
        case 1:
          r11[f10].fn.call(r11[f10].context);
          break;
        case 2:
          r11[f10].fn.call(r11[f10].context, t10);
          break;
        case 3:
          r11[f10].fn.call(r11[f10].context, t10, s8);
          break;
        case 4:
          r11[f10].fn.call(r11[f10].context, t10, s8, i9);
          break;
        default:
          if (!h13) for (v9 = 1, h13 = new Array(p12 - 1); v9 < p12; v9++) h13[v9 - 1] = arguments[v9];
          r11[f10].fn.apply(r11[f10].context, h13);
      }
    }
    return true;
  };
  c16.prototype.on = function(e14, t10, s8) {
    return w9(this, e14, t10, s8, false);
  };
  c16.prototype.once = function(e14, t10, s8) {
    return w9(this, e14, t10, s8, true);
  };
  c16.prototype.removeListener = function(e14, t10, s8, i9) {
    var u9 = l12 ? l12 + e14 : e14;
    if (!this._events[u9]) return this;
    if (!t10) return y16(this, u9), this;
    var o15 = this._events[u9];
    if (o15.fn) o15.fn === t10 && (!i9 || o15.once) && (!s8 || o15.context === s8) && y16(this, u9);
    else {
      for (var a11 = 0, r11 = [], p12 = o15.length; a11 < p12; a11++) (o15[a11].fn !== t10 || i9 && !o15[a11].once || s8 && o15[a11].context !== s8) && r11.push(o15[a11]);
      r11.length ? this._events[u9] = r11.length === 1 ? r11[0] : r11 : y16(this, u9);
    }
    return this;
  };
  c16.prototype.removeAllListeners = function(e14) {
    var t10;
    return e14 ? (t10 = l12 ? l12 + e14 : e14, this._events[t10] && y16(this, t10)) : (this._events = new _14(), this._eventsCount = 0), this;
  };
  c16.prototype.off = c16.prototype.removeListener;
  c16.prototype.addListener = c16.prototype.on;
  c16.prefixed = l12;
  c16.EventEmitter = c16;
  typeof x18 < "u" && (x18.exports = c16);
});
var g10 = N10(m11(), 1);
var z6 = g10.default;
var export_EventEmitter = g10.default;

// http-url:https://esm.sh/immer@10.2.0/es2022/immer.mjs
var ee2 = Symbol.for("immer-nothing");
var R6 = Symbol.for("immer-draftable");
var d5 = Symbol.for("immer-state");
function v2(e14, ...t10) {
  throw new Error(`[Immer] minified error nr: ${e14}. Full error at: https://bit.ly/3cXEKWf`);
}
var C5 = Object.getPrototypeOf;
function I12(e14) {
  return !!e14 && !!e14[d5];
}
function D8(e14) {
  return e14 ? ae5(e14) || Array.isArray(e14) || !!e14[R6] || !!e14.constructor?.[R6] || k4(e14) || j7(e14) : false;
}
var _e4 = Object.prototype.constructor.toString();
var ne3 = /* @__PURE__ */ new WeakMap();
function ae5(e14) {
  if (!e14 || typeof e14 != "object") return false;
  let t10 = Object.getPrototypeOf(e14);
  if (t10 === null || t10 === Object.prototype) return true;
  let r11 = Object.hasOwnProperty.call(t10, "constructor") && t10.constructor;
  if (r11 === Object) return true;
  if (typeof r11 != "function") return false;
  let n10 = ne3.get(r11);
  return n10 === void 0 && (n10 = Function.toString.call(r11), ne3.set(r11, n10)), n10 === _e4;
}
function x12(e14, t10, r11 = true) {
  F3(e14) === 0 ? (r11 ? Reflect.ownKeys(e14) : Object.keys(e14)).forEach((o15) => {
    t10(o15, e14[o15], e14);
  }) : e14.forEach((n10, o15) => t10(o15, n10, e14));
}
function F3(e14) {
  let t10 = e14[d5];
  return t10 ? t10.type_ : Array.isArray(e14) ? 1 : k4(e14) ? 2 : j7(e14) ? 3 : 0;
}
function T10(e14, t10) {
  return F3(e14) === 2 ? e14.has(t10) : Object.prototype.hasOwnProperty.call(e14, t10);
}
function fe4(e14, t10, r11) {
  let n10 = F3(e14);
  n10 === 2 ? e14.set(t10, r11) : n10 === 3 ? e14.add(r11) : e14[t10] = r11;
}
function pe4(e14, t10) {
  return e14 === t10 ? e14 !== 0 || 1 / e14 === 1 / t10 : e14 !== e14 && t10 !== t10;
}
function k4(e14) {
  return e14 instanceof Map;
}
function j7(e14) {
  return e14 instanceof Set;
}
function w2(e14) {
  return e14.copy_ || e14.base_;
}
function Q4(e14, t10) {
  if (k4(e14)) return new Map(e14);
  if (j7(e14)) return new Set(e14);
  if (Array.isArray(e14)) return Array.prototype.slice.call(e14);
  let r11 = ae5(e14);
  if (t10 === true || t10 === "class_only" && !r11) {
    let n10 = Object.getOwnPropertyDescriptors(e14);
    delete n10[d5];
    let o15 = Reflect.ownKeys(n10);
    for (let a11 = 0; a11 < o15.length; a11++) {
      let u9 = o15[a11], c16 = n10[u9];
      c16.writable === false && (c16.writable = true, c16.configurable = true), (c16.get || c16.set) && (n10[u9] = { configurable: true, writable: true, enumerable: c16.enumerable, value: e14[u9] });
    }
    return Object.create(C5(e14), n10);
  } else {
    let n10 = C5(e14);
    if (n10 !== null && r11) return { ...e14 };
    let o15 = Object.create(n10);
    return Object.assign(o15, e14);
  }
}
function te3(e14, t10 = false) {
  return J7(e14) || I12(e14) || !D8(e14) || (F3(e14) > 1 && Object.defineProperties(e14, { set: K6, add: K6, clear: K6, delete: K6 }), Object.freeze(e14), t10 && Object.values(e14).forEach((r11) => te3(r11, true))), e14;
}
function he() {
  v2(2);
}
var K6 = { value: he };
function J7(e14) {
  return e14 === null || typeof e14 != "object" ? true : Object.isFrozen(e14);
}
var Y4 = {};
function M5(e14) {
  let t10 = Y4[e14];
  return t10 || v2(0, e14), t10;
}
var U4;
function B10() {
  return U4;
}
function ye2(e14, t10) {
  return { drafts_: [], parent_: e14, immer_: t10, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function ie2(e14, t10) {
  t10 && (M5("Patches"), e14.patches_ = [], e14.inversePatches_ = [], e14.patchListener_ = t10);
}
function Z3(e14) {
  L5(e14), e14.drafts_.forEach(me4), e14.drafts_ = null;
}
function L5(e14) {
  e14 === U4 && (U4 = e14.parent_);
}
function se4(e14) {
  return U4 = ye2(U4, e14);
}
function me4(e14) {
  let t10 = e14[d5];
  t10.type_ === 0 || t10.type_ === 1 ? t10.revoke_() : t10.revoked_ = true;
}
function oe3(e14, t10) {
  t10.unfinalizedDrafts_ = t10.drafts_.length;
  let r11 = t10.drafts_[0];
  return e14 !== void 0 && e14 !== r11 ? (r11[d5].modified_ && (Z3(t10), v2(4)), D8(e14) && (e14 = G8(t10, e14), t10.parent_ || H5(t10, e14)), t10.patches_ && M5("Patches").generateReplacementPatches_(r11[d5].base_, e14, t10.patches_, t10.inversePatches_)) : e14 = G8(t10, r11, []), Z3(t10), t10.patches_ && t10.patchListener_(t10.patches_, t10.inversePatches_), e14 !== ee2 ? e14 : void 0;
}
function G8(e14, t10, r11) {
  if (J7(t10)) return t10;
  let n10 = e14.immer_.shouldUseStrictIteration(), o15 = t10[d5];
  if (!o15) return x12(t10, (a11, u9) => ce4(e14, o15, t10, a11, u9, r11), n10), t10;
  if (o15.scope_ !== e14) return t10;
  if (!o15.modified_) return H5(e14, o15.base_, true), o15.base_;
  if (!o15.finalized_) {
    o15.finalized_ = true, o15.scope_.unfinalizedDrafts_--;
    let a11 = o15.copy_, u9 = a11, c16 = false;
    o15.type_ === 3 && (u9 = new Set(a11), a11.clear(), c16 = true), x12(u9, (i9, s8) => ce4(e14, o15, a11, i9, s8, r11, c16), n10), H5(e14, a11, false), r11 && e14.patches_ && M5("Patches").generatePatches_(o15, r11, e14.patches_, e14.inversePatches_);
  }
  return o15.copy_;
}
function ce4(e14, t10, r11, n10, o15, a11, u9) {
  if (o15 == null || typeof o15 != "object" && !u9) return;
  let c16 = J7(o15);
  if (!(c16 && !u9)) {
    if (I12(o15)) {
      let i9 = a11 && t10 && t10.type_ !== 3 && !T10(t10.assigned_, n10) ? a11.concat(n10) : void 0, s8 = G8(e14, o15, i9);
      if (fe4(r11, n10, s8), I12(s8)) e14.canAutoFreeze_ = false;
      else return;
    } else u9 && r11.add(o15);
    if (D8(o15) && !c16) {
      if (!e14.immer_.autoFreeze_ && e14.unfinalizedDrafts_ < 1 || t10 && t10.base_ && t10.base_[n10] === o15 && c16) return;
      G8(e14, o15), (!t10 || !t10.scope_.parent_) && typeof n10 != "symbol" && (k4(r11) ? r11.has(n10) : Object.prototype.propertyIsEnumerable.call(r11, n10)) && H5(e14, o15);
    }
  }
}
function H5(e14, t10, r11 = false) {
  !e14.parent_ && e14.immer_.autoFreeze_ && e14.canAutoFreeze_ && te3(t10, r11);
}
function ge4(e14, t10) {
  let r11 = Array.isArray(e14), n10 = { type_: r11 ? 1 : 0, scope_: t10 ? t10.scope_ : B10(), modified_: false, finalized_: false, assigned_: {}, parent_: t10, base_: e14, draft_: null, copy_: null, revoke_: null, isManual_: false }, o15 = n10, a11 = re3;
  r11 && (o15 = [n10], a11 = $6);
  let { revoke: u9, proxy: c16 } = Proxy.revocable(o15, a11);
  return n10.draft_ = c16, n10.revoke_ = u9, c16;
}
var re3 = { get(e14, t10) {
  if (t10 === d5) return e14;
  let r11 = w2(e14);
  if (!T10(r11, t10)) return be3(e14, r11, t10);
  let n10 = r11[t10];
  return e14.finalized_ || !D8(n10) ? n10 : n10 === X2(e14.base_, t10) ? (q6(e14), e14.copy_[t10] = W7(n10, e14)) : n10;
}, has(e14, t10) {
  return t10 in w2(e14);
}, ownKeys(e14) {
  return Reflect.ownKeys(w2(e14));
}, set(e14, t10, r11) {
  let n10 = le4(w2(e14), t10);
  if (n10?.set) return n10.set.call(e14.draft_, r11), true;
  if (!e14.modified_) {
    let o15 = X2(w2(e14), t10), a11 = o15?.[d5];
    if (a11 && a11.base_ === r11) return e14.copy_[t10] = r11, e14.assigned_[t10] = false, true;
    if (pe4(r11, o15) && (r11 !== void 0 || T10(e14.base_, t10))) return true;
    q6(e14), A6(e14);
  }
  return e14.copy_[t10] === r11 && (r11 !== void 0 || t10 in e14.copy_) || Number.isNaN(r11) && Number.isNaN(e14.copy_[t10]) || (e14.copy_[t10] = r11, e14.assigned_[t10] = true), true;
}, deleteProperty(e14, t10) {
  return X2(e14.base_, t10) !== void 0 || t10 in e14.base_ ? (e14.assigned_[t10] = false, q6(e14), A6(e14)) : delete e14.assigned_[t10], e14.copy_ && delete e14.copy_[t10], true;
}, getOwnPropertyDescriptor(e14, t10) {
  let r11 = w2(e14), n10 = Reflect.getOwnPropertyDescriptor(r11, t10);
  return n10 && { writable: true, configurable: e14.type_ !== 1 || t10 !== "length", enumerable: n10.enumerable, value: r11[t10] };
}, defineProperty() {
  v2(11);
}, getPrototypeOf(e14) {
  return C5(e14.base_);
}, setPrototypeOf() {
  v2(12);
} };
var $6 = {};
x12(re3, (e14, t10) => {
  $6[e14] = function() {
    return arguments[0] = arguments[0][0], t10.apply(this, arguments);
  };
});
$6.deleteProperty = function(e14, t10) {
  return $6.set.call(this, e14, t10, void 0);
};
$6.set = function(e14, t10, r11) {
  return re3.set.call(this, e14[0], t10, r11, e14[0]);
};
function X2(e14, t10) {
  let r11 = e14[d5];
  return (r11 ? w2(r11) : e14)[t10];
}
function be3(e14, t10, r11) {
  let n10 = le4(t10, r11);
  return n10 ? "value" in n10 ? n10.value : n10.get?.call(e14.draft_) : void 0;
}
function le4(e14, t10) {
  if (!(t10 in e14)) return;
  let r11 = C5(e14);
  for (; r11; ) {
    let n10 = Object.getOwnPropertyDescriptor(r11, t10);
    if (n10) return n10;
    r11 = C5(r11);
  }
}
function A6(e14) {
  e14.modified_ || (e14.modified_ = true, e14.parent_ && A6(e14.parent_));
}
function q6(e14) {
  e14.copy_ || (e14.copy_ = Q4(e14.base_, e14.scope_.immer_.useStrictShallowCopy_));
}
var we3 = class {
  constructor(e14) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.useStrictIteration_ = true, this.produce = (t10, r11, n10) => {
      if (typeof t10 == "function" && typeof r11 != "function") {
        let a11 = r11;
        r11 = t10;
        let u9 = this;
        return function(i9 = a11, ...s8) {
          return u9.produce(i9, (_14) => r11.call(this, _14, ...s8));
        };
      }
      typeof r11 != "function" && v2(6), n10 !== void 0 && typeof n10 != "function" && v2(7);
      let o15;
      if (D8(t10)) {
        let a11 = se4(this), u9 = W7(t10, void 0), c16 = true;
        try {
          o15 = r11(u9), c16 = false;
        } finally {
          c16 ? Z3(a11) : L5(a11);
        }
        return ie2(a11, n10), oe3(o15, a11);
      } else if (!t10 || typeof t10 != "object") {
        if (o15 = r11(t10), o15 === void 0 && (o15 = t10), o15 === ee2 && (o15 = void 0), this.autoFreeze_ && te3(o15, true), n10) {
          let a11 = [], u9 = [];
          M5("Patches").generateReplacementPatches_(t10, o15, a11, u9), n10(a11, u9);
        }
        return o15;
      } else v2(1, t10);
    }, this.produceWithPatches = (t10, r11) => {
      if (typeof t10 == "function") return (u9, ...c16) => this.produceWithPatches(u9, (i9) => t10(i9, ...c16));
      let n10, o15;
      return [this.produce(t10, r11, (u9, c16) => {
        n10 = u9, o15 = c16;
      }), n10, o15];
    }, typeof e14?.autoFreeze == "boolean" && this.setAutoFreeze(e14.autoFreeze), typeof e14?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e14.useStrictShallowCopy), typeof e14?.useStrictIteration == "boolean" && this.setUseStrictIteration(e14.useStrictIteration);
  }
  createDraft(e14) {
    D8(e14) || v2(8), I12(e14) && (e14 = ve4(e14));
    let t10 = se4(this), r11 = W7(e14, void 0);
    return r11[d5].isManual_ = true, L5(t10), r11;
  }
  finishDraft(e14, t10) {
    let r11 = e14 && e14[d5];
    (!r11 || !r11.isManual_) && v2(9);
    let { scope_: n10 } = r11;
    return ie2(n10, t10), oe3(void 0, n10);
  }
  setAutoFreeze(e14) {
    this.autoFreeze_ = e14;
  }
  setUseStrictShallowCopy(e14) {
    this.useStrictShallowCopy_ = e14;
  }
  setUseStrictIteration(e14) {
    this.useStrictIteration_ = e14;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e14, t10) {
    let r11;
    for (r11 = t10.length - 1; r11 >= 0; r11--) {
      let o15 = t10[r11];
      if (o15.path.length === 0 && o15.op === "replace") {
        e14 = o15.value;
        break;
      }
    }
    r11 > -1 && (t10 = t10.slice(r11 + 1));
    let n10 = M5("Patches").applyPatches_;
    return I12(e14) ? n10(e14, t10) : this.produce(e14, (o15) => n10(o15, t10));
  }
};
function W7(e14, t10) {
  let r11 = k4(e14) ? M5("MapSet").proxyMap_(e14, t10) : j7(e14) ? M5("MapSet").proxySet_(e14, t10) : ge4(e14, t10);
  return (t10 ? t10.scope_ : B10()).drafts_.push(r11), r11;
}
function ve4(e14) {
  return I12(e14) || v2(10, e14), de5(e14);
}
function de5(e14) {
  if (!D8(e14) || J7(e14)) return e14;
  let t10 = e14[d5], r11, n10 = true;
  if (t10) {
    if (!t10.modified_) return t10.base_;
    t10.finalized_ = true, r11 = Q4(e14, t10.scope_.immer_.useStrictShallowCopy_), n10 = t10.scope_.immer_.shouldUseStrictIteration();
  } else r11 = Q4(e14, true);
  return x12(r11, (o15, a11) => {
    fe4(r11, o15, de5(a11));
  }, n10), t10 && (t10.finalized_ = false), r11;
}
var S4 = new we3();
var ze2 = S4.produce;
var De3 = S4.produceWithPatches.bind(S4);
var Ee3 = S4.setAutoFreeze.bind(S4);
var Ae4 = S4.setUseStrictShallowCopy.bind(S4);
var Ie3 = S4.setUseStrictIteration.bind(S4);
var Fe2 = S4.applyPatches.bind(S4);
var Me3 = S4.createDraft.bind(S4);
var Ne3 = S4.finishDraft.bind(S4);
function Ce4(e14) {
  return e14;
}

// http-url:https://esm.sh/react-is@19.2.7/es2022/react-is.mjs
var L6 = Object.create;
var d6 = Object.defineProperty;
var Y5 = Object.getOwnPropertyDescriptor;
var $7 = Object.getOwnPropertyNames;
var x13 = Object.getPrototypeOf;
var F4 = Object.prototype.hasOwnProperty;
var p6 = (e14, t10) => () => (t10 || e14((t10 = { exports: {} }).exports, t10), t10.exports);
var N11 = (e14, t10, n10, P16) => {
  if (t10 && typeof t10 == "object" || typeof t10 == "function") for (let s8 of $7(t10)) !F4.call(e14, s8) && s8 !== n10 && d6(e14, s8, { get: () => t10[s8], enumerable: !(P16 = Y5(t10, s8)) || P16.enumerable });
  return e14;
};
var O5 = (e14, t10, n10) => (n10 = e14 != null ? L6(x13(e14)) : {}, N11(t10 || !e14 || !e14.__esModule ? d6(n10, "default", { value: e14, enumerable: true }) : n10, e14));
var y8 = p6((r11) => {
  "use strict";
  var C11 = Symbol.for("react.transitional.element"), R13 = Symbol.for("react.portal"), i9 = Symbol.for("react.fragment"), f10 = Symbol.for("react.strict_mode"), u9 = Symbol.for("react.profiler"), a11 = Symbol.for("react.consumer"), E18 = Symbol.for("react.context"), c16 = Symbol.for("react.forward_ref"), l12 = Symbol.for("react.suspense"), m18 = Symbol.for("react.suspense_list"), T15 = Symbol.for("react.memo"), _14 = Symbol.for("react.lazy"), v9 = Symbol.for("react.view_transition"), w9 = Symbol.for("react.client.reference");
  function o15(e14) {
    if (typeof e14 == "object" && e14 !== null) {
      var t10 = e14.$$typeof;
      switch (t10) {
        case C11:
          switch (e14 = e14.type, e14) {
            case i9:
            case u9:
            case f10:
            case l12:
            case m18:
            case v9:
              return e14;
            default:
              switch (e14 = e14 && e14.$$typeof, e14) {
                case E18:
                case c16:
                case _14:
                case T15:
                  return e14;
                case a11:
                  return e14;
                default:
                  return t10;
              }
          }
        case R13:
          return t10;
      }
    }
  }
  r11.ContextConsumer = a11;
  r11.ContextProvider = E18;
  r11.Element = C11;
  r11.ForwardRef = c16;
  r11.Fragment = i9;
  r11.Lazy = _14;
  r11.Memo = T15;
  r11.Portal = R13;
  r11.Profiler = u9;
  r11.StrictMode = f10;
  r11.Suspense = l12;
  r11.SuspenseList = m18;
  r11.isContextConsumer = function(e14) {
    return o15(e14) === a11;
  };
  r11.isContextProvider = function(e14) {
    return o15(e14) === E18;
  };
  r11.isElement = function(e14) {
    return typeof e14 == "object" && e14 !== null && e14.$$typeof === C11;
  };
  r11.isForwardRef = function(e14) {
    return o15(e14) === c16;
  };
  r11.isFragment = function(e14) {
    return o15(e14) === i9;
  };
  r11.isLazy = function(e14) {
    return o15(e14) === _14;
  };
  r11.isMemo = function(e14) {
    return o15(e14) === T15;
  };
  r11.isPortal = function(e14) {
    return o15(e14) === R13;
  };
  r11.isProfiler = function(e14) {
    return o15(e14) === u9;
  };
  r11.isStrictMode = function(e14) {
    return o15(e14) === f10;
  };
  r11.isSuspense = function(e14) {
    return o15(e14) === l12;
  };
  r11.isSuspenseList = function(e14) {
    return o15(e14) === m18;
  };
  r11.isValidElementType = function(e14) {
    return typeof e14 == "string" || typeof e14 == "function" || e14 === i9 || e14 === u9 || e14 === f10 || e14 === l12 || e14 === m18 || typeof e14 == "object" && e14 !== null && (e14.$$typeof === _14 || e14.$$typeof === T15 || e14.$$typeof === E18 || e14.$$typeof === a11 || e14.$$typeof === c16 || e14.$$typeof === w9 || e14.getModuleId !== void 0);
  };
  r11.typeOf = o15;
});
var M6 = p6((z16, A13) => {
  "use strict";
  A13.exports = y8();
});
var S5 = O5(M6());
var { ContextConsumer: V6, ContextProvider: b7, Element: h8, ForwardRef: D9, Fragment: U5, Lazy: q7, Memo: W8, Portal: G9, Profiler: X3, StrictMode: Z4, Suspense: k5, SuspenseList: B11, isContextConsumer: H6, isContextProvider: J8, isElement: K7, isForwardRef: Q5, isFragment: j8, isLazy: ee3, isMemo: re4, isPortal: te4, isProfiler: oe4, isStrictMode: ne4, isSuspense: se5, isSuspenseList: ie3, isValidElementType: fe5, typeOf: ue5 } = S5;
var ae6 = S5.default ?? S5;

// http-url:https://esm.sh/use-sync-external-store@1.6.0/X-ZXJlYWN0/es2022/with-selector.mjs
import * as __0$ from "react";
var require2 = (n10) => {
  const e14 = (m18) => typeof m18.default < "u" ? m18.default : m18, c16 = (m18) => Object.assign({ __esModule: true }, m18);
  switch (n10) {
    case "react":
      return e14(__0$);
    default:
      console.error('module "' + n10 + '" not found');
      return null;
  }
};
var O6 = Object.create;
var y9 = Object.defineProperty;
var N12 = Object.getOwnPropertyDescriptor;
var W9 = Object.getOwnPropertyNames;
var w3 = Object.getPrototypeOf;
var G10 = Object.prototype.hasOwnProperty;
var I13 = ((e14) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(e14, { get: (r11, u9) => (typeof require2 < "u" ? require2 : r11)[u9] }) : e14)(function(e14) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + e14 + '" is not supported');
});
var E7 = (e14, r11) => () => (r11 || e14((r11 = { exports: {} }).exports, r11), r11.exports);
var _6 = (e14, r11, u9, f10) => {
  if (r11 && typeof r11 == "object" || typeof r11 == "function") for (let o15 of W9(r11)) !G10.call(e14, o15) && o15 !== u9 && y9(e14, o15, { get: () => r11[o15], enumerable: !(f10 = N12(r11, o15)) || f10.enumerable });
  return e14;
};
var k6 = (e14, r11, u9) => (u9 = e14 != null ? O6(w3(e14)) : {}, _6(r11 || !e14 || !e14.__esModule ? y9(u9, "default", { value: e14, enumerable: true }) : u9, e14));
var z7 = E7((R13) => {
  "use strict";
  var s8 = I13("react");
  function p12(e14, r11) {
    return e14 === r11 && (e14 !== 0 || 1 / e14 === 1 / r11) || e14 !== e14 && r11 !== r11;
  }
  var A13 = typeof Object.is == "function" ? Object.is : p12, B19 = s8.useSyncExternalStore, C11 = s8.useRef, F11 = s8.useEffect, H14 = s8.useMemo, J15 = s8.useDebugValue;
  R13.useSyncExternalStoreWithSelector = function(e14, r11, u9, f10, o15) {
    var l12 = C11(null);
    if (l12.current === null) {
      var c16 = { hasValue: false, value: null };
      l12.current = c16;
    } else c16 = l12.current;
    l12 = H14(function() {
      function d12(t10) {
        if (!j15) {
          if (j15 = true, a11 = t10, t10 = f10(t10), o15 !== void 0 && c16.hasValue) {
            var i9 = c16.value;
            if (o15(i9, t10)) return v9 = i9;
          }
          return v9 = t10;
        }
        if (i9 = v9, A13(a11, t10)) return i9;
        var V15 = f10(t10);
        return o15 !== void 0 && o15(i9, V15) ? (a11 = t10, i9) : (a11 = t10, v9 = V15);
      }
      var j15 = false, a11, v9, b14 = u9 === void 0 ? null : u9;
      return [function() {
        return d12(r11());
      }, b14 === null ? void 0 : function() {
        return d12(b14());
      }];
    }, [r11, u9, f10, o15]);
    var n10 = B19(e14, l12[0], l12[1]);
    return F11(function() {
      c16.hasValue = true, c16.value = n10;
    }, [n10]), J15(n10), n10;
  };
});
var M7 = E7((P16, D18) => {
  "use strict";
  D18.exports = z7();
});
var m12 = k6(M7());
var { useSyncExternalStoreWithSelector: Q6 } = m12;
var T11 = m12.default ?? m12;

// http-url:https://esm.sh/react-redux@9.3.0/X-ZXJlYWN0/es2022/react-redux.mjs
import * as c8 from "react";
var me5 = c8.version.startsWith("19");
var Ce5 = Symbol.for(me5 ? "react.transitional.element" : "react.element");
var be4 = Symbol.for("react.portal");
var Re4 = Symbol.for("react.fragment");
var Ee4 = Symbol.for("react.strict_mode");
var we4 = Symbol.for("react.profiler");
var Pe3 = Symbol.for("react.consumer");
var ge5 = Symbol.for("react.context");
var ie4 = Symbol.for("react.forward_ref");
var Oe3 = Symbol.for("react.suspense");
var xe3 = Symbol.for("react.suspense_list");
var K8 = Symbol.for("react.memo");
var Ne4 = Symbol.for("react.lazy");
var Te2 = ie4;
var _e5 = K8;
function le5(e14) {
  e14();
}
function Le4() {
  let e14 = null, t10 = null;
  return { clear() {
    e14 = null, t10 = null;
  }, notify() {
    le5(() => {
      let r11 = e14;
      for (; r11; ) r11.callback(), r11 = r11.next;
    });
  }, get() {
    let r11 = [], o15 = e14;
    for (; o15; ) r11.push(o15), o15 = o15.next;
    return r11;
  }, subscribe(r11) {
    let o15 = true, n10 = t10 = { callback: r11, next: null, prev: t10 };
    return n10.prev ? n10.prev.next = n10 : e14 = n10, function() {
      !o15 || e14 === null || (o15 = false, n10.next ? n10.next.prev = n10.prev : t10 = n10.prev, n10.prev ? n10.prev.next = n10.next : e14 = n10.next);
    };
  } };
}
var ne5 = { notify() {
}, get: () => [] };
function fe6(e14, t10) {
  let r11, o15 = ne5, n10 = 0, s8 = false;
  function u9(x18) {
    d12();
    let y16 = o15.subscribe(x18), C11 = false;
    return () => {
      C11 || (C11 = true, y16(), f10());
    };
  }
  function l12() {
    o15.notify();
  }
  function a11() {
    v9.onStateChange && v9.onStateChange();
  }
  function i9() {
    return s8;
  }
  function d12() {
    n10++, r11 || (r11 = t10 ? t10.addNestedSub(a11) : e14.subscribe(a11), o15 = Le4());
  }
  function f10() {
    n10--, r11 && n10 === 0 && (r11(), r11 = void 0, o15.clear(), o15 = ne5);
  }
  function p12() {
    s8 || (s8 = true, d12());
  }
  function b14() {
    s8 && (s8 = false, f10());
  }
  let v9 = { addNestedSub: u9, notifyNestedSubs: l12, handleChangeWrapper: a11, isSubscribed: i9, trySubscribe: p12, tryUnsubscribe: b14, getListeners: () => o15 };
  return v9;
}
var We2 = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
var qe2 = We2();
var je3 = () => typeof navigator < "u" && navigator.product === "ReactNative";
var ze3 = je3();
var Be2 = () => qe2 || ze3 ? c8.useLayoutEffect : c8.useEffect;
var D10 = Be2();
function oe5(e14, t10) {
  return e14 === t10 ? e14 !== 0 || t10 !== 0 || 1 / e14 === 1 / t10 : e14 !== e14 && t10 !== t10;
}
function z8(e14, t10) {
  if (oe5(e14, t10)) return true;
  if (typeof e14 != "object" || e14 === null || typeof t10 != "object" || t10 === null) return false;
  let r11 = Object.keys(e14), o15 = Object.keys(t10);
  if (r11.length !== o15.length) return false;
  for (let n10 = 0; n10 < r11.length; n10++) if (!Object.prototype.hasOwnProperty.call(t10, r11[n10]) || !oe5(e14[r11[n10]], t10[r11[n10]])) return false;
  return true;
}
var Ge2 = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true };
var de6 = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
var Je3 = { [Te2]: Ge2, [_e5]: de6 };
var ae7 = Object.prototype;
var tt2 = Symbol.for("react-redux-context");
var rt = typeof globalThis < "u" ? globalThis : {};
function nt() {
  if (!c8.createContext) return {};
  let e14 = rt[tt2] ??= /* @__PURE__ */ new Map(), t10 = e14.get(c8.createContext);
  return t10 || (t10 = c8.createContext(null), e14.set(c8.createContext, t10)), t10;
}
var P9 = nt();
function ut3(e14) {
  let { children: t10, context: r11, serverState: o15, store: n10 } = e14, s8 = c8.useMemo(() => {
    let a11 = fe6(n10);
    return { store: n10, subscription: a11, getServerState: o15 ? () => o15 : void 0 };
  }, [n10, o15]), u9 = c8.useMemo(() => n10.getState(), [n10]);
  return D10(() => {
    let { subscription: a11 } = s8;
    return a11.onStateChange = a11.notifyNestedSubs, a11.trySubscribe(), u9 !== n10.getState() && a11.notifyNestedSubs(), () => {
      a11.tryUnsubscribe(), a11.onStateChange = void 0;
    };
  }, [s8, u9]), c8.createElement((r11 || P9).Provider, { value: s8 }, t10);
}
var mt2 = ut3;
function J9(e14 = P9) {
  return function() {
    return c8.useContext(e14);
  };
}
var ye3 = J9();
function he2(e14 = P9) {
  let t10 = e14 === P9 ? ye3 : J9(e14), r11 = () => {
    let { store: o15 } = t10();
    return o15;
  };
  return Object.assign(r11, { withTypes: () => r11 }), r11;
}
var lt3 = he2();
function ft3(e14 = P9) {
  let t10 = e14 === P9 ? lt3 : he2(e14), r11 = () => t10().dispatch;
  return Object.assign(r11, { withTypes: () => r11 }), r11;
}
var Ct2 = ft3();
var pt2 = (e14, t10) => e14 === t10;
function yt2(e14 = P9) {
  let t10 = e14 === P9 ? ye3 : J9(e14), r11 = (o15, n10 = {}) => {
    let { equalityFn: s8 = pt2 } = typeof n10 == "function" ? { equalityFn: n10 } : n10, u9 = t10(), { store: l12, subscription: a11, getServerState: i9 } = u9, d12 = c8.useRef(true), f10 = c8.useCallback({ [o15.name](b14) {
      return o15(b14);
    } }[o15.name], [o15]), p12 = Q6(a11.addNestedSub, l12.getState, i9 || l12.getState, f10, s8);
    return c8.useDebugValue(p12), p12;
  };
  return Object.assign(r11, { withTypes: () => r11 }), r11;
}
var Rt2 = yt2();

// http-url:https://esm.sh/reselect@5.1.1/es2022/reselect.mjs
var R7 = Symbol("NOT_FOUND");
function z9(e14, t10 = `expected a function, instead received ${typeof e14}`) {
  if (typeof e14 != "function") throw new TypeError(t10);
}
function H7(e14, t10 = `expected an object, instead received ${typeof e14}`) {
  if (typeof e14 != "object") throw new TypeError(t10);
}
function X4(e14, t10 = "expected all items to be functions, instead received the following types: ") {
  if (!e14.every((n10) => typeof n10 == "function")) {
    let n10 = e14.map((i9) => typeof i9 == "function" ? `function ${i9.name || "unnamed"}()` : typeof i9).join(", ");
    throw new TypeError(`${t10}[${n10}]`);
  }
}
var N13 = (e14) => Array.isArray(e14) ? e14 : [e14];
function B12(e14) {
  let t10 = Array.isArray(e14[0]) ? e14[0] : e14;
  return X4(t10, "createSelector expects all input-selectors to be functions, but received the following types: "), t10;
}
function G11(e14, t10) {
  let n10 = [], { length: i9 } = e14;
  for (let c16 = 0; c16 < i9; c16++) n10.push(e14[c16].apply(null, t10));
  return n10;
}
var me6 = Symbol();
var te5 = Object.getPrototypeOf({});
var ce5 = class {
  constructor(e14) {
    this.value = e14;
  }
  deref() {
    return this.value;
  }
};
var ue6 = typeof WeakRef < "u" ? WeakRef : ce5;
var le6 = 0;
var I14 = 1;
function m13() {
  return { s: le6, v: void 0, o: null, p: null };
}
function V7(e14, t10 = {}) {
  let n10 = m13(), { resultEqualityCheck: i9 } = t10, c16, r11 = 0;
  function s8() {
    let o15 = n10, { length: l12 } = arguments;
    for (let p12 = 0, h13 = l12; p12 < h13; p12++) {
      let f10 = arguments[p12];
      if (typeof f10 == "function" || typeof f10 == "object" && f10 !== null) {
        let d12 = o15.o;
        d12 === null && (o15.o = d12 = /* @__PURE__ */ new WeakMap());
        let y16 = d12.get(f10);
        y16 === void 0 ? (o15 = m13(), d12.set(f10, o15)) : o15 = y16;
      } else {
        let d12 = o15.p;
        d12 === null && (o15.p = d12 = /* @__PURE__ */ new Map());
        let y16 = d12.get(f10);
        y16 === void 0 ? (o15 = m13(), d12.set(f10, o15)) : o15 = y16;
      }
    }
    let u9 = o15, a11;
    if (o15.s === I14) a11 = o15.v;
    else if (a11 = e14.apply(null, arguments), r11++, i9) {
      let p12 = c16?.deref?.() ?? c16;
      p12 != null && i9(p12, a11) && (a11 = p12, r11 !== 0 && r11--), c16 = typeof a11 == "object" && a11 !== null || typeof a11 == "function" ? new ue6(a11) : a11;
    }
    return u9.s = I14, u9.v = a11, a11;
  }
  return s8.clearCache = () => {
    n10 = m13(), s8.resetResultsCount();
  }, s8.resultsCount = () => r11, s8.resetResultsCount = () => {
    r11 = 0;
  }, s8;
}
function ae8(e14, ...t10) {
  let n10 = typeof e14 == "function" ? { memoize: e14, memoizeOptions: t10 } : e14, i9 = (...c16) => {
    let r11 = 0, s8 = 0, o15, l12 = {}, u9 = c16.pop();
    typeof u9 == "object" && (l12 = u9, u9 = c16.pop()), z9(u9, `createSelector expects an output function after the inputs, but received: [${typeof u9}]`);
    let a11 = { ...n10, ...l12 }, { memoize: p12, memoizeOptions: h13 = [], argsMemoize: f10 = V7, argsMemoizeOptions: d12 = [], devModeChecks: y16 = {} } = a11, P16 = N13(h13), K13 = N13(d12), T15 = B12(c16), _14 = p12(function() {
      return r11++, u9.apply(null, arguments);
    }, ...P16), de10 = true, $14 = f10(function() {
      s8++;
      let U11 = G11(T15, arguments);
      return o15 = _14.apply(null, U11), o15;
    }, ...K13);
    return Object.assign($14, { resultFunc: u9, memoizedResultFunc: _14, dependencies: T15, dependencyRecomputations: () => s8, resetDependencyRecomputations: () => {
      s8 = 0;
    }, lastResult: () => o15, recomputations: () => r11, resetRecomputations: () => {
      r11 = 0;
    }, memoize: p12, argsMemoize: f10 });
  };
  return Object.assign(i9, { withTypes: () => i9 }), i9;
}
var fe7 = ae8(V7);
var pe5 = Object.assign((e14, t10 = fe7) => {
  H7(e14, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e14}`);
  let n10 = Object.keys(e14), i9 = n10.map((r11) => e14[r11]);
  return t10(i9, (...r11) => r11.reduce((s8, o15, l12) => (s8[n10[l12]] = o15, s8), {}));
}, { withTypes: () => pe5 });

// http-url:https://esm.sh/tiny-invariant@1.3.3/es2022/tiny-invariant.mjs
var a8 = true;
var n7 = "Invariant failed";
function c9(t10, r11) {
  if (!t10) {
    if (a8) throw new Error(n7);
    var o15 = typeof r11 == "function" ? r11() : r11, i9 = o15 ? "".concat(n7, ": ").concat(o15) : n7;
    throw new Error(i9);
  }
}

// http-url:https://esm.sh/use-sync-external-store@1.6.0/X-ZXJlYWN0/es2022/shim.mjs
var shim_exports = {};
__export(shim_exports, {
  default: () => G12,
  useSyncExternalStore: () => C6
});
import * as __0$2 from "react";
var require3 = (n10) => {
  const e14 = (m18) => typeof m18.default < "u" ? m18.default : m18, c16 = (m18) => Object.assign({ __esModule: true }, m18);
  switch (n10) {
    case "react":
      return e14(__0$2);
    default:
      console.error('module "' + n10 + '" not found');
      return null;
  }
};
var v3 = Object.create;
var i5 = Object.defineProperty;
var E8 = Object.getOwnPropertyDescriptor;
var m14 = Object.getOwnPropertyNames;
var y10 = Object.getPrototypeOf;
var h9 = Object.prototype.hasOwnProperty;
var j9 = ((e14) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(e14, { get: (t10, n10) => (typeof require3 < "u" ? require3 : t10)[n10] }) : e14)(function(e14) {
  if (typeof require3 < "u") return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + e14 + '" is not supported');
});
var f4 = (e14, t10) => () => (t10 || e14((t10 = { exports: {} }).exports, t10), t10.exports);
var x14 = (e14, t10, n10, u9) => {
  if (t10 && typeof t10 == "object" || typeof t10 == "function") for (let r11 of m14(t10)) !h9.call(e14, r11) && r11 !== n10 && i5(e14, r11, { get: () => t10[r11], enumerable: !(u9 = E8(t10, r11)) || u9.enumerable });
  return e14;
};
var w4 = (e14, t10, n10) => (n10 = e14 != null ? v3(y10(e14)) : {}, x14(t10 || !e14 || !e14.__esModule ? i5(n10, "default", { value: e14, enumerable: true }) : n10, e14));
var d7 = f4((l12) => {
  "use strict";
  var o15 = j9("react");
  function b14(e14, t10) {
    return e14 === t10 && (e14 !== 0 || 1 / e14 === 1 / t10) || e14 !== e14 && t10 !== t10;
  }
  var g13 = typeof Object.is == "function" ? Object.is : b14, q14 = o15.useState, D18 = o15.useEffect, O12 = o15.useLayoutEffect, V15 = o15.useDebugValue;
  function I24(e14, t10) {
    var n10 = t10(), u9 = q14({ inst: { value: n10, getSnapshot: t10 } }), r11 = u9[0].inst, c16 = u9[1];
    return O12(function() {
      r11.value = n10, r11.getSnapshot = t10, a11(r11) && c16({ inst: r11 });
    }, [e14, n10, t10]), D18(function() {
      return a11(r11) && c16({ inst: r11 }), e14(function() {
        a11(r11) && c16({ inst: r11 });
      });
    }, [e14]), V15(n10), n10;
  }
  function a11(e14) {
    var t10 = e14.getSnapshot;
    e14 = e14.value;
    try {
      var n10 = t10();
      return !g13(e14, n10);
    } catch {
      return true;
    }
  }
  function L12(e14, t10) {
    return t10();
  }
  var N19 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? L12 : I24;
  l12.useSyncExternalStore = o15.useSyncExternalStore !== void 0 ? o15.useSyncExternalStore : N19;
});
var p7 = f4((k12, S11) => {
  "use strict";
  S11.exports = d7();
});
var s4 = w4(p7());
var { useSyncExternalStore: C6 } = s4;
var G12 = s4.default ?? s4;

// http-url:https://esm.sh/use-sync-external-store@1.6.0/X-ZXJlYWN0/es2022/shim/with-selector.mjs
import * as __0$3 from "react";
var require4 = (n10) => {
  const e14 = (m18) => typeof m18.default < "u" ? m18.default : m18, c16 = (m18) => Object.assign({ __esModule: true }, m18);
  switch (n10) {
    case "react":
      return e14(__0$3);
    case "use-sync-external-store/shim":
      return e14(shim_exports);
    default:
      console.error('module "' + n10 + '" not found');
      return null;
  }
};
var N14 = Object.create;
var y11 = Object.defineProperty;
var W10 = Object.getOwnPropertyDescriptor;
var w5 = Object.getOwnPropertyNames;
var G13 = Object.getPrototypeOf;
var I15 = Object.prototype.hasOwnProperty;
var E9 = ((e14) => typeof require4 < "u" ? require4 : typeof Proxy < "u" ? new Proxy(e14, { get: (r11, u9) => (typeof require4 < "u" ? require4 : r11)[u9] }) : e14)(function(e14) {
  if (typeof require4 < "u") return require4.apply(this, arguments);
  throw Error('Dynamic require of "' + e14 + '" is not supported');
});
var R8 = (e14, r11) => () => (r11 || e14((r11 = { exports: {} }).exports, r11), r11.exports);
var _7 = (e14, r11, u9, t10) => {
  if (r11 && typeof r11 == "object" || typeof r11 == "function") for (let i9 of w5(r11)) !I15.call(e14, i9) && i9 !== u9 && y11(e14, i9, { get: () => r11[i9], enumerable: !(t10 = W10(r11, i9)) || t10.enumerable });
  return e14;
};
var h10 = (e14, r11, u9) => (u9 = e14 != null ? N14(G13(e14)) : {}, _7(r11 || !e14 || !e14.__esModule ? y11(u9, "default", { value: e14, enumerable: true }) : u9, e14));
var D11 = R8((z16) => {
  "use strict";
  var m18 = E9("react"), k12 = E9("use-sync-external-store/shim");
  function p12(e14, r11) {
    return e14 === r11 && (e14 !== 0 || 1 / e14 === 1 / r11) || e14 !== e14 && r11 !== r11;
  }
  var q14 = typeof Object.is == "function" ? Object.is : p12, A13 = k12.useSyncExternalStore, B19 = m18.useRef, C11 = m18.useEffect, F11 = m18.useMemo, H14 = m18.useDebugValue;
  z16.useSyncExternalStoreWithSelector = function(e14, r11, u9, t10, i9) {
    var f10 = B19(null);
    if (f10.current === null) {
      var l12 = { hasValue: false, value: null };
      f10.current = l12;
    } else l12 = f10.current;
    f10 = F11(function() {
      function d12(o15) {
        if (!j15) {
          if (j15 = true, n10 = o15, o15 = t10(o15), i9 !== void 0 && l12.hasValue) {
            var c16 = l12.value;
            if (i9(c16, o15)) return a11 = c16;
          }
          return a11 = o15;
        }
        if (c16 = a11, q14(n10, o15)) return c16;
        var V15 = t10(o15);
        return i9 !== void 0 && i9(c16, V15) ? (n10 = o15, c16) : (n10 = o15, a11 = V15);
      }
      var j15 = false, n10, a11, b14 = u9 === void 0 ? null : u9;
      return [function() {
        return d12(r11());
      }, b14 === null ? void 0 : function() {
        return d12(b14());
      }];
    }, [r11, u9, t10, i9]);
    var s8 = A13(e14, f10[0], f10[1]);
    return C11(function() {
      l12.hasValue = true, l12.value = s8;
    }, [s8]), H14(s8), s8;
  };
});
var O7 = R8((L12, M13) => {
  "use strict";
  M13.exports = D11();
});
var v4 = h10(O7());
var { useSyncExternalStoreWithSelector: P10 } = v4;
var Q7 = v4.default ?? v4;

// http-url:https://esm.sh/victory-vendor@^37.0.2/d3-scale?target=es2022
var d3_scale_target_es2022_exports = {};
__export(d3_scale_target_es2022_exports, {
  scaleBand: () => E14,
  scaleDiverging: () => rn3,
  scaleDivergingLog: () => wn2,
  scaleDivergingPow: () => en2,
  scaleDivergingSqrt: () => Tt2,
  scaleDivergingSymlog: () => kn2,
  scaleIdentity: () => V12,
  scaleImplicit: () => W14,
  scaleLinear: () => C9,
  scaleLog: () => _12,
  scaleOrdinal: () => A11,
  scalePoint: () => Sn2,
  scalePow: () => Q11,
  scaleQuantile: () => K11,
  scaleQuantize: () => X9,
  scaleRadial: () => J14,
  scaleSequential: () => $12,
  scaleSequentialLog: () => vn2,
  scaleSequentialPow: () => nn2,
  scaleSequentialQuantile: () => tn2,
  scaleSequentialSqrt: () => It3,
  scaleSequentialSymlog: () => Mn2,
  scaleSqrt: () => Xn,
  scaleSymlog: () => G18,
  scaleThreshold: () => Z8,
  scaleTime: () => dn2,
  scaleUtc: () => yn2,
  tickFormat: () => z14
});

// http-url:https://esm.sh/internmap@2.0.3/es2022/internmap.mjs
var u5 = class extends Map {
  constructor(e14, s8 = h11) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: s8 } }), e14 != null) for (let [r11, f10] of e14) this.set(r11, f10);
  }
  get(e14) {
    return super.get(n8(this, e14));
  }
  has(e14) {
    return super.has(n8(this, e14));
  }
  set(e14, s8) {
    return super.set(i6(this, e14), s8);
  }
  delete(e14) {
    return super.delete(c10(this, e14));
  }
};
function n8({ _intern: t10, _key: e14 }, s8) {
  let r11 = e14(s8);
  return t10.has(r11) ? t10.get(r11) : s8;
}
function i6({ _intern: t10, _key: e14 }, s8) {
  let r11 = e14(s8);
  return t10.has(r11) ? t10.get(r11) : (t10.set(r11, s8), s8);
}
function c10({ _intern: t10, _key: e14 }, s8) {
  let r11 = e14(s8);
  return t10.has(r11) && (s8 = t10.get(r11), t10.delete(r11)), s8;
}
function h11(t10) {
  return t10 !== null && typeof t10 == "object" ? t10.valueOf() : t10;
}

// http-url:https://esm.sh/d3-array@3.2.4/es2022/d3-array.mjs
function s5(e14, t10) {
  return e14 == null || t10 == null ? NaN : e14 < t10 ? -1 : e14 > t10 ? 1 : e14 >= t10 ? 0 : NaN;
}
function H8(e14, t10) {
  return e14 == null || t10 == null ? NaN : t10 < e14 ? -1 : t10 > e14 ? 1 : t10 >= e14 ? 0 : NaN;
}
function F5(e14) {
  let t10, n10, o15;
  e14.length !== 2 ? (t10 = s5, n10 = (u9, c16) => s5(e14(u9), c16), o15 = (u9, c16) => e14(u9) - c16) : (t10 = e14 === s5 || e14 === H8 ? e14 : Xe2, n10 = e14, o15 = e14);
  function r11(u9, c16, l12 = 0, m18 = u9.length) {
    if (l12 < m18) {
      if (t10(c16, c16) !== 0) return m18;
      do {
        let d12 = l12 + m18 >>> 1;
        n10(u9[d12], c16) < 0 ? l12 = d12 + 1 : m18 = d12;
      } while (l12 < m18);
    }
    return l12;
  }
  function f10(u9, c16, l12 = 0, m18 = u9.length) {
    if (l12 < m18) {
      if (t10(c16, c16) !== 0) return m18;
      do {
        let d12 = l12 + m18 >>> 1;
        n10(u9[d12], c16) <= 0 ? l12 = d12 + 1 : m18 = d12;
      } while (l12 < m18);
    }
    return l12;
  }
  function i9(u9, c16, l12 = 0, m18 = u9.length) {
    let d12 = r11(u9, c16, l12, m18 - 1);
    return d12 > l12 && o15(u9[d12 - 1], c16) > -o15(u9[d12], c16) ? d12 - 1 : d12;
  }
  return { left: r11, center: i9, right: f10 };
}
function Xe2() {
  return 0;
}
function b8(e14) {
  return e14 === null ? NaN : +e14;
}
function* ce6(e14, t10) {
  if (t10 === void 0) for (let n10 of e14) n10 != null && (n10 = +n10) >= n10 && (yield n10);
  else {
    let n10 = -1;
    for (let o15 of e14) (o15 = t10(o15, ++n10, e14)) != null && (o15 = +o15) >= o15 && (yield o15);
  }
}
var de7 = F5(s5);
var ae9 = de7.right;
var Ye3 = de7.left;
var Ze3 = F5(b8).center;
var re5 = ae9;
var ve5 = me7(oe6);
var et3 = me7(tt3);
function me7(e14) {
  return function(t10, n10, o15 = n10) {
    if (!((n10 = +n10) >= 0)) throw new RangeError("invalid rx");
    if (!((o15 = +o15) >= 0)) throw new RangeError("invalid ry");
    let { data: r11, width: f10, height: i9 } = t10;
    if (!((f10 = Math.floor(f10)) >= 0)) throw new RangeError("invalid width");
    if (!((i9 = Math.floor(i9 !== void 0 ? i9 : r11.length / f10)) >= 0)) throw new RangeError("invalid height");
    if (!f10 || !i9 || !n10 && !o15) return t10;
    let u9 = n10 && e14(n10), c16 = o15 && e14(o15), l12 = r11.slice();
    return u9 && c16 ? (N15(u9, l12, r11, f10, i9), N15(u9, r11, l12, f10, i9), N15(u9, l12, r11, f10, i9), q8(c16, r11, l12, f10, i9), q8(c16, l12, r11, f10, i9), q8(c16, r11, l12, f10, i9)) : u9 ? (N15(u9, r11, l12, f10, i9), N15(u9, l12, r11, f10, i9), N15(u9, r11, l12, f10, i9)) : c16 && (q8(c16, r11, l12, f10, i9), q8(c16, l12, r11, f10, i9), q8(c16, r11, l12, f10, i9)), t10;
  };
}
function N15(e14, t10, n10, o15, r11) {
  for (let f10 = 0, i9 = o15 * r11; f10 < i9; ) e14(t10, n10, f10, f10 += o15, 1);
}
function q8(e14, t10, n10, o15, r11) {
  for (let f10 = 0, i9 = o15 * r11; f10 < o15; ++f10) e14(t10, n10, f10, f10 + i9, o15);
}
function tt3(e14) {
  let t10 = oe6(e14);
  return (n10, o15, r11, f10, i9) => {
    r11 <<= 2, f10 <<= 2, i9 <<= 2, t10(n10, o15, r11 + 0, f10 + 0, i9), t10(n10, o15, r11 + 1, f10 + 1, i9), t10(n10, o15, r11 + 2, f10 + 2, i9), t10(n10, o15, r11 + 3, f10 + 3, i9);
  };
}
function oe6(e14) {
  let t10 = Math.floor(e14);
  if (t10 === e14) return nt2(e14);
  let n10 = e14 - t10, o15 = 2 * e14 + 1;
  return (r11, f10, i9, u9, c16) => {
    if (!((u9 -= c16) >= i9)) return;
    let l12 = t10 * f10[i9], m18 = c16 * t10, d12 = m18 + c16;
    for (let a11 = i9, p12 = i9 + m18; a11 < p12; a11 += c16) l12 += f10[Math.min(u9, a11)];
    for (let a11 = i9, p12 = u9; a11 <= p12; a11 += c16) l12 += f10[Math.min(u9, a11 + m18)], r11[a11] = (l12 + n10 * (f10[Math.max(i9, a11 - d12)] + f10[Math.min(u9, a11 + d12)])) / o15, l12 -= f10[Math.max(i9, a11 - m18)];
  };
}
function nt2(e14) {
  let t10 = 2 * e14 + 1;
  return (n10, o15, r11, f10, i9) => {
    if (!((f10 -= i9) >= r11)) return;
    let u9 = e14 * o15[r11], c16 = i9 * e14;
    for (let l12 = r11, m18 = r11 + c16; l12 < m18; l12 += i9) u9 += o15[Math.min(f10, l12)];
    for (let l12 = r11, m18 = f10; l12 <= m18; l12 += i9) u9 += o15[Math.min(f10, l12 + c16)], n10[l12] = u9 / t10, u9 -= o15[Math.max(r11, l12 - c16)];
  };
}
function O8(e14 = s5) {
  if (e14 === s5) return g11;
  if (typeof e14 != "function") throw new TypeError("compare is not a function");
  return (t10, n10) => {
    let o15 = e14(t10, n10);
    return o15 || o15 === 0 ? o15 : (e14(n10, n10) === 0) - (e14(t10, t10) === 0);
  };
}
function g11(e14, t10) {
  return (e14 == null || !(e14 >= e14)) - (t10 == null || !(t10 >= t10)) || (e14 < t10 ? -1 : e14 > t10 ? 1 : 0);
}
var ye4 = Array.prototype;
var be5 = ye4.slice;
var un = ye4.map;
var pt3 = Math.sqrt(50);
var xt2 = Math.sqrt(10);
var ht2 = Math.sqrt(2);
function W11(e14, t10, n10) {
  let o15 = (t10 - e14) / Math.max(0, n10), r11 = Math.floor(Math.log10(o15)), f10 = o15 / Math.pow(10, r11), i9 = f10 >= pt3 ? 10 : f10 >= xt2 ? 5 : f10 >= ht2 ? 2 : 1, u9, c16, l12;
  return r11 < 0 ? (l12 = Math.pow(10, -r11) / i9, u9 = Math.round(e14 * l12), c16 = Math.round(t10 * l12), u9 / l12 < e14 && ++u9, c16 / l12 > t10 && --c16, l12 = -l12) : (l12 = Math.pow(10, r11) * i9, u9 = Math.round(e14 / l12), c16 = Math.round(t10 / l12), u9 * l12 < e14 && ++u9, c16 * l12 > t10 && --c16), c16 < u9 && 0.5 <= n10 && n10 < 2 ? W11(e14, t10, n10 * 2) : [u9, c16, l12];
}
function X5(e14, t10, n10) {
  if (t10 = +t10, e14 = +e14, n10 = +n10, !(n10 > 0)) return [];
  if (e14 === t10) return [e14];
  let o15 = t10 < e14, [r11, f10, i9] = o15 ? W11(t10, e14, n10) : W11(e14, t10, n10);
  if (!(f10 >= r11)) return [];
  let u9 = f10 - r11 + 1, c16 = new Array(u9);
  if (o15) if (i9 < 0) for (let l12 = 0; l12 < u9; ++l12) c16[l12] = (f10 - l12) / -i9;
  else for (let l12 = 0; l12 < u9; ++l12) c16[l12] = (f10 - l12) * i9;
  else if (i9 < 0) for (let l12 = 0; l12 < u9; ++l12) c16[l12] = (r11 + l12) / -i9;
  else for (let l12 = 0; l12 < u9; ++l12) c16[l12] = (r11 + l12) * i9;
  return c16;
}
function M8(e14, t10, n10) {
  return t10 = +t10, e14 = +e14, n10 = +n10, W11(e14, t10, n10)[2];
}
function gt2(e14, t10, n10) {
  t10 = +t10, e14 = +e14, n10 = +n10;
  let o15 = t10 < e14, r11 = o15 ? M8(t10, e14, n10) : M8(e14, t10, n10);
  return (o15 ? -1 : 1) * (r11 < 0 ? 1 / -r11 : r11);
}
function U6(e14, t10) {
  let n10;
  if (t10 === void 0) for (let o15 of e14) o15 != null && (n10 < o15 || n10 === void 0 && o15 >= o15) && (n10 = o15);
  else {
    let o15 = -1;
    for (let r11 of e14) (r11 = t10(r11, ++o15, e14)) != null && (n10 < r11 || n10 === void 0 && r11 >= r11) && (n10 = r11);
  }
  return n10;
}
function I16(e14, t10) {
  let n10;
  if (t10 === void 0) for (let o15 of e14) o15 != null && (n10 > o15 || n10 === void 0 && o15 >= o15) && (n10 = o15);
  else {
    let o15 = -1;
    for (let r11 of e14) (r11 = t10(r11, ++o15, e14)) != null && (n10 > r11 || n10 === void 0 && r11 >= r11) && (n10 = r11);
  }
  return n10;
}
function D12(e14, t10, n10 = 0, o15 = 1 / 0, r11) {
  if (t10 = Math.floor(t10), n10 = Math.floor(Math.max(0, n10)), o15 = Math.floor(Math.min(e14.length - 1, o15)), !(n10 <= t10 && t10 <= o15)) return e14;
  for (r11 = r11 === void 0 ? g11 : O8(r11); o15 > n10; ) {
    if (o15 - n10 > 600) {
      let c16 = o15 - n10 + 1, l12 = t10 - n10 + 1, m18 = Math.log(c16), d12 = 0.5 * Math.exp(2 * m18 / 3), a11 = 0.5 * Math.sqrt(m18 * d12 * (c16 - d12) / c16) * (l12 - c16 / 2 < 0 ? -1 : 1), p12 = Math.max(n10, Math.floor(t10 - l12 * d12 / c16 + a11)), x18 = Math.min(o15, Math.floor(t10 + (c16 - l12) * d12 / c16 + a11));
      D12(e14, t10, p12, x18, r11);
    }
    let f10 = e14[t10], i9 = n10, u9 = o15;
    for (B13(e14, n10, t10), r11(e14[o15], f10) > 0 && B13(e14, n10, o15); i9 < u9; ) {
      for (B13(e14, i9, u9), ++i9, --u9; r11(e14[i9], f10) < 0; ) ++i9;
      for (; r11(e14[u9], f10) > 0; ) --u9;
    }
    r11(e14[n10], f10) === 0 ? B13(e14, n10, u9) : (++u9, B13(e14, u9, o15)), u9 <= t10 && (n10 = u9 + 1), t10 <= u9 && (o15 = u9 - 1);
  }
  return e14;
}
function B13(e14, t10, n10) {
  let o15 = e14[t10];
  e14[t10] = e14[n10], e14[n10] = o15;
}
function A7(e14, t10, n10) {
  if (e14 = Float64Array.from(ce6(e14, n10)), !(!(o15 = e14.length) || isNaN(t10 = +t10))) {
    if (t10 <= 0 || o15 < 2) return I16(e14);
    if (t10 >= 1) return U6(e14);
    var o15, r11 = (o15 - 1) * t10, f10 = Math.floor(r11), i9 = U6(D12(e14, f10).subarray(0, f10 + 1)), u9 = I16(e14.subarray(f10 + 1));
    return i9 + (u9 - i9) * (r11 - f10);
  }
}
function wt2(e14, t10, n10 = b8) {
  if (!(!(o15 = e14.length) || isNaN(t10 = +t10))) {
    if (t10 <= 0 || o15 < 2) return +n10(e14[0], 0, e14);
    if (t10 >= 1) return +n10(e14[o15 - 1], o15 - 1, e14);
    var o15, r11 = (o15 - 1) * t10, f10 = Math.floor(r11), i9 = +n10(e14[f10], f10, e14), u9 = +n10(e14[f10 + 1], f10 + 1, e14);
    return i9 + (u9 - i9) * (r11 - f10);
  }
}
function ke3(e14, t10, n10) {
  e14 = +e14, t10 = +t10, n10 = (r11 = arguments.length) < 2 ? (t10 = e14, e14 = 0, 1) : r11 < 3 ? 1 : +n10;
  for (var o15 = -1, r11 = Math.max(0, Math.ceil((t10 - e14) / n10)) | 0, f10 = new Array(r11); ++o15 < r11; ) f10[o15] = e14 + o15 * n10;
  return f10;
}
var At = Fe3(Math.random);
function Fe3(e14) {
  return function(n10, o15 = 0, r11 = n10.length) {
    let f10 = r11 - (o15 = +o15);
    for (; f10; ) {
      let i9 = e14() * f10-- | 0, u9 = n10[f10 + o15];
      n10[f10 + o15] = n10[i9 + o15], n10[i9 + o15] = u9;
    }
    return n10;
  };
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/formatDecimal.mjs
function r5(e14) {
  return Math.abs(e14 = Math.round(e14)) >= 1e21 ? e14.toLocaleString("en").replace(/,/g, "") : e14.toString(10);
}
function o7(e14, n10) {
  if (!isFinite(e14) || e14 === 0) return null;
  var i9 = (e14 = n10 ? e14.toExponential(n10 - 1) : e14.toExponential()).indexOf("e"), t10 = e14.slice(0, i9);
  return [t10.length > 1 ? t10[0] + t10.slice(2) : t10, +e14.slice(i9 + 1)];
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/exponent.mjs
function o8(t10) {
  return t10 = o7(Math.abs(t10)), t10 ? t10[1] : NaN;
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/formatGroup.mjs
function s6(t10, l12) {
  return function(a11, n10) {
    for (var r11 = a11.length, h13 = [], i9 = 0, e14 = t10[0], f10 = 0; r11 > 0 && e14 > 0 && (f10 + e14 + 1 > n10 && (e14 = Math.max(1, n10 - f10)), h13.push(a11.substring(r11 -= e14, r11 + e14)), !((f10 += e14 + 1) > n10)); ) e14 = t10[i9 = (i9 + 1) % t10.length];
    return h13.reverse().join(l12);
  };
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/formatNumerals.mjs
function e6(n10) {
  return function(r11) {
    return r11.replace(/[0-9]/g, function(t10) {
      return n10[+t10];
    });
  };
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/formatSpecifier.mjs
var d8 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function o9(t10) {
  if (!(n10 = d8.exec(t10))) throw new Error("invalid format: " + t10);
  var n10;
  return new i7({ fill: n10[1], align: n10[2], sign: n10[3], symbol: n10[4], zero: n10[5], width: n10[6], comma: n10[7], precision: n10[8] && n10[8].slice(1), trim: n10[9], type: n10[10] });
}
o9.prototype = i7.prototype;
function i7(t10) {
  this.fill = t10.fill === void 0 ? " " : t10.fill + "", this.align = t10.align === void 0 ? ">" : t10.align + "", this.sign = t10.sign === void 0 ? "-" : t10.sign + "", this.symbol = t10.symbol === void 0 ? "" : t10.symbol + "", this.zero = !!t10.zero, this.width = t10.width === void 0 ? void 0 : +t10.width, this.comma = !!t10.comma, this.precision = t10.precision === void 0 ? void 0 : +t10.precision, this.trim = !!t10.trim, this.type = t10.type === void 0 ? "" : t10.type + "";
}
i7.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/formatTrim.mjs
function c11(r11) {
  e: for (var t10 = r11.length, e14 = 1, a11 = -1, f10; e14 < t10; ++e14) switch (r11[e14]) {
    case ".":
      a11 = f10 = e14;
      break;
    case "0":
      a11 === 0 && (a11 = e14), f10 = e14;
      break;
    default:
      if (!+r11[e14]) break e;
      a11 > 0 && (a11 = 0);
      break;
  }
  return a11 > 0 ? r11.slice(0, a11) + r11.slice(f10 + 1) : r11;
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/formatPrefixAuto.mjs
var c12;
function l9(n10, t10) {
  var i9 = o7(n10, t10);
  if (!i9) return c12 = void 0, n10.toPrecision(t10);
  var r11 = i9[0], o15 = i9[1], e14 = o15 - (c12 = Math.max(-8, Math.min(8, Math.floor(o15 / 3))) * 3) + 1, a11 = r11.length;
  return e14 === a11 ? r11 : e14 > a11 ? r11 + new Array(e14 - a11 + 1).join("0") : e14 > 0 ? r11.slice(0, e14) + "." + r11.slice(e14) : "0." + new Array(1 - e14).join("0") + o7(n10, Math.max(0, t10 + e14 - 1))[0];
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/formatRounded.mjs
function f5(t10, i9) {
  var n10 = o7(t10, i9);
  if (!n10) return t10 + "";
  var e14 = n10[0], r11 = n10[1];
  return r11 < 0 ? "0." + new Array(-r11).join("0") + e14 : e14.length > r11 + 1 ? e14.slice(0, r11 + 1) + "." + e14.slice(r11 + 1) : e14 + new Array(r11 - e14.length + 2).join("0");
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/formatTypes.mjs
var m15 = { "%": (o15, t10) => (o15 * 100).toFixed(t10), b: (o15) => Math.round(o15).toString(2), c: (o15) => o15 + "", d: r5, e: (o15, t10) => o15.toExponential(t10), f: (o15, t10) => o15.toFixed(t10), g: (o15, t10) => o15.toPrecision(t10), o: (o15) => Math.round(o15).toString(8), p: (o15, t10) => f5(o15 * 100, t10), r: f5, s: l9, X: (o15) => Math.round(o15).toString(16).toUpperCase(), x: (o15) => Math.round(o15).toString(16) };

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/identity.mjs
function e7(t10) {
  return t10;
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/locale.mjs
var G14 = Array.prototype.map;
var I17 = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function rn(r11) {
  var w9 = r11.grouping === void 0 || r11.thousands === void 0 ? e7 : s6(G14.call(r11.grouping, Number), r11.thousands + ""), $14 = r11.currency === void 0 ? "" : r11.currency[0] + "", j15 = r11.currency === void 0 ? "" : r11.currency[1] + "", F11 = r11.decimal === void 0 ? "." : r11.decimal + "", L12 = r11.numerals === void 0 ? e7 : e6(G14.call(r11.numerals, String)), X12 = r11.percent === void 0 ? "%" : r11.percent + "", Y10 = r11.minus === void 0 ? "\u2212" : r11.minus + "", Z11 = r11.nan === void 0 ? "NaN" : r11.nan + "";
  function k12(t10, e14) {
    t10 = o9(t10);
    var u9 = t10.fill, x18 = t10.align, m18 = t10.sign, a11 = t10.symbol, g13 = t10.zero, c16 = t10.width, M13 = t10.comma, o15 = t10.precision, S11 = t10.trim, f10 = t10.type;
    f10 === "n" ? (M13 = true, f10 = "g") : m15[f10] || (o15 === void 0 && (o15 = 12), S11 = true, f10 = "g"), (g13 || u9 === "0" && x18 === "=") && (g13 = true, u9 = "0", x18 = "=");
    var B19 = (e14 && e14.prefix !== void 0 ? e14.prefix : "") + (a11 === "$" ? $14 : a11 === "#" && /[boxX]/.test(f10) ? "0" + f10.toLowerCase() : ""), D18 = (a11 === "$" ? j15 : /[%p]/.test(f10) ? X12 : "") + (e14 && e14.suffix !== void 0 ? e14.suffix : ""), N19 = m15[f10], H14 = /[defgprs%]/.test(f10);
    o15 = o15 === void 0 ? 6 : /[gprs]/.test(f10) ? Math.max(1, Math.min(21, o15)) : Math.max(0, Math.min(20, o15));
    function P16(n10) {
      var s8 = B19, i9 = D18, h13, T15, p12;
      if (f10 === "c") i9 = N19(n10) + i9, n10 = "";
      else {
        n10 = +n10;
        var y16 = n10 < 0 || 1 / n10 < 0;
        if (n10 = isNaN(n10) ? Z11 : N19(Math.abs(n10), o15), S11 && (n10 = c11(n10)), y16 && +n10 == 0 && m18 !== "+" && (y16 = false), s8 = (y16 ? m18 === "(" ? m18 : Y10 : m18 === "-" || m18 === "(" ? "" : m18) + s8, i9 = (f10 === "s" && !isNaN(n10) && c12 !== void 0 ? I17[8 + c12 / 3] : "") + i9 + (y16 && m18 === "(" ? ")" : ""), H14) {
          for (h13 = -1, T15 = n10.length; ++h13 < T15; ) if (p12 = n10.charCodeAt(h13), 48 > p12 || p12 > 57) {
            i9 = (p12 === 46 ? F11 + n10.slice(h13 + 1) : n10.slice(h13)) + i9, n10 = n10.slice(0, h13);
            break;
          }
        }
      }
      M13 && !g13 && (n10 = w9(n10, 1 / 0));
      var b14 = s8.length + n10.length + i9.length, d12 = b14 < c16 ? new Array(c16 - b14 + 1).join(u9) : "";
      switch (M13 && g13 && (n10 = w9(d12 + n10, d12.length ? c16 - i9.length : 1 / 0), d12 = ""), x18) {
        case "<":
          n10 = s8 + n10 + i9 + d12;
          break;
        case "=":
          n10 = s8 + d12 + n10 + i9;
          break;
        case "^":
          n10 = d12.slice(0, b14 = d12.length >> 1) + s8 + n10 + i9 + d12.slice(b14);
          break;
        default:
          n10 = d12 + s8 + n10 + i9;
          break;
      }
      return L12(n10);
    }
    return P16.toString = function() {
      return t10 + "";
    }, P16;
  }
  function q14(t10, e14) {
    var u9 = Math.max(-8, Math.min(8, Math.floor(o8(e14) / 3))) * 3, x18 = Math.pow(10, -u9), m18 = k12((t10 = o9(t10), t10.type = "f", t10), { suffix: I17[8 + u9 / 3] });
    return function(a11) {
      return m18(x18 * a11);
    };
  }
  return { format: k12, formatPrefix: q14 };
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/defaultLocale.mjs
var r6;
var e8;
var f6;
o10({ thousands: ",", grouping: [3], currency: ["$", ""] });
function o10(a11) {
  return r6 = rn(a11), e8 = r6.format, f6 = r6.formatPrefix, r6;
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/precisionFixed.mjs
function n9(t10) {
  return Math.max(0, -o8(Math.abs(t10)));
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/precisionPrefix.mjs
function r7(a11, o15) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(o8(o15) / 3))) * 3 - o8(Math.abs(a11)));
}

// http-url:https://esm.sh/d3-format@3.1.2/es2022/src/precisionRound.mjs
function r8(t10, a11) {
  return t10 = Math.abs(t10), a11 = Math.abs(a11) - t10, Math.max(0, o8(a11) - o8(t10)) + 1;
}

// http-url:https://esm.sh/d3-color@3.1.0/es2022/d3-color.mjs
function b9(e14, t10, r11) {
  e14.prototype = t10.prototype = r11, r11.constructor = e14;
}
function g12(e14, t10) {
  var r11 = Object.create(e14.prototype);
  for (var n10 in t10) r11[n10] = t10[n10];
  return r11;
}
function u6() {
}
var p8 = 0.7;
var y12 = 1 / p8;
var N16 = "\\s*([+-]?\\d+)\\s*";
var M9 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var c13 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var be6 = /^#([0-9a-f]{3,8})$/;
var de8 = new RegExp(`^rgb\\(${N16},${N16},${N16}\\)$`);
var ge6 = new RegExp(`^rgb\\(${c13},${c13},${c13}\\)$`);
var pe6 = new RegExp(`^rgba\\(${N16},${N16},${N16},${M9}\\)$`);
var me8 = new RegExp(`^rgba\\(${c13},${c13},${c13},${M9}\\)$`);
var we5 = new RegExp(`^hsl\\(${M9},${c13},${c13}\\)$`);
var ye5 = new RegExp(`^hsla\\(${M9},${c13},${c13},${M9}\\)$`);
var Y6 = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
b9(u6, H9, { copy(e14) {
  return Object.assign(new this.constructor(), this, e14);
}, displayable() {
  return this.rgb().displayable();
}, hex: Z5, formatHex: Z5, formatHex8: $e2, formatHsl: Ne5, formatRgb: F6, toString: F6 });
function Z5() {
  return this.rgb().formatHex();
}
function $e2() {
  return this.rgb().formatHex8();
}
function Ne5() {
  return W12(this).formatHsl();
}
function F6() {
  return this.rgb().formatRgb();
}
function H9(e14) {
  var t10, r11;
  return e14 = (e14 + "").trim().toLowerCase(), (t10 = be6.exec(e14)) ? (r11 = t10[1].length, t10 = parseInt(t10[1], 16), r11 === 6 ? G15(t10) : r11 === 3 ? new a9(t10 >> 8 & 15 | t10 >> 4 & 240, t10 >> 4 & 15 | t10 & 240, (t10 & 15) << 4 | t10 & 15, 1) : r11 === 8 ? C7(t10 >> 24 & 255, t10 >> 16 & 255, t10 >> 8 & 255, (t10 & 255) / 255) : r11 === 4 ? C7(t10 >> 12 & 15 | t10 >> 8 & 240, t10 >> 8 & 15 | t10 >> 4 & 240, t10 >> 4 & 15 | t10 & 240, ((t10 & 15) << 4 | t10 & 15) / 255) : null) : (t10 = de8.exec(e14)) ? new a9(t10[1], t10[2], t10[3], 1) : (t10 = ge6.exec(e14)) ? new a9(t10[1] * 255 / 100, t10[2] * 255 / 100, t10[3] * 255 / 100, 1) : (t10 = pe6.exec(e14)) ? C7(t10[1], t10[2], t10[3], t10[4]) : (t10 = me8.exec(e14)) ? C7(t10[1] * 255 / 100, t10[2] * 255 / 100, t10[3] * 255 / 100, t10[4]) : (t10 = we5.exec(e14)) ? T12(t10[1], t10[2] / 100, t10[3] / 100, 1) : (t10 = ye5.exec(e14)) ? T12(t10[1], t10[2] / 100, t10[3] / 100, t10[4]) : Y6.hasOwnProperty(e14) ? G15(Y6[e14]) : e14 === "transparent" ? new a9(NaN, NaN, NaN, 0) : null;
}
function G15(e14) {
  return new a9(e14 >> 16 & 255, e14 >> 8 & 255, e14 & 255, 1);
}
function C7(e14, t10, r11, n10) {
  return n10 <= 0 && (e14 = t10 = r11 = NaN), new a9(e14, t10, r11, n10);
}
function R9(e14) {
  return e14 instanceof u6 || (e14 = H9(e14)), e14 ? (e14 = e14.rgb(), new a9(e14.r, e14.g, e14.b, e14.opacity)) : new a9();
}
function V8(e14, t10, r11, n10) {
  return arguments.length === 1 ? R9(e14) : new a9(e14, t10, r11, n10 ?? 1);
}
function a9(e14, t10, r11, n10) {
  this.r = +e14, this.g = +t10, this.b = +r11, this.opacity = +n10;
}
b9(a9, V8, g12(u6, { brighter(e14) {
  return e14 = e14 == null ? y12 : Math.pow(y12, e14), new a9(this.r * e14, this.g * e14, this.b * e14, this.opacity);
}, darker(e14) {
  return e14 = e14 == null ? p8 : Math.pow(p8, e14), new a9(this.r * e14, this.g * e14, this.b * e14, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new a9(w6(this.r), w6(this.g), w6(this.b), E10(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: J10, formatHex: J10, formatHex8: ve6, formatRgb: Q8, toString: Q8 }));
function J10() {
  return `#${m16(this.r)}${m16(this.g)}${m16(this.b)}`;
}
function ve6() {
  return `#${m16(this.r)}${m16(this.g)}${m16(this.b)}${m16((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Q8() {
  let e14 = E10(this.opacity);
  return `${e14 === 1 ? "rgb(" : "rgba("}${w6(this.r)}, ${w6(this.g)}, ${w6(this.b)}${e14 === 1 ? ")" : `, ${e14})`}`;
}
function E10(e14) {
  return isNaN(e14) ? 1 : Math.max(0, Math.min(1, e14));
}
function w6(e14) {
  return Math.max(0, Math.min(255, Math.round(e14) || 0));
}
function m16(e14) {
  return e14 = w6(e14), (e14 < 16 ? "0" : "") + e14.toString(16);
}
function T12(e14, t10, r11, n10) {
  return n10 <= 0 ? e14 = t10 = r11 = NaN : r11 <= 0 || r11 >= 1 ? e14 = t10 = NaN : t10 <= 0 && (e14 = NaN), new h12(e14, t10, r11, n10);
}
function W12(e14) {
  if (e14 instanceof h12) return new h12(e14.h, e14.s, e14.l, e14.opacity);
  if (e14 instanceof u6 || (e14 = H9(e14)), !e14) return new h12();
  if (e14 instanceof h12) return e14;
  e14 = e14.rgb();
  var t10 = e14.r / 255, r11 = e14.g / 255, n10 = e14.b / 255, i9 = Math.min(t10, r11, n10), f10 = Math.max(t10, r11, n10), s8 = NaN, x18 = f10 - i9, d12 = (f10 + i9) / 2;
  return x18 ? (t10 === f10 ? s8 = (r11 - n10) / x18 + (r11 < n10) * 6 : r11 === f10 ? s8 = (n10 - t10) / x18 + 2 : s8 = (t10 - r11) / x18 + 4, x18 /= d12 < 0.5 ? f10 + i9 : 2 - f10 - i9, s8 *= 60) : x18 = d12 > 0 && d12 < 1 ? 0 : s8, new h12(s8, x18, d12, e14.opacity);
}
function ee4(e14, t10, r11, n10) {
  return arguments.length === 1 ? W12(e14) : new h12(e14, t10, r11, n10 ?? 1);
}
function h12(e14, t10, r11, n10) {
  this.h = +e14, this.s = +t10, this.l = +r11, this.opacity = +n10;
}
b9(h12, ee4, g12(u6, { brighter(e14) {
  return e14 = e14 == null ? y12 : Math.pow(y12, e14), new h12(this.h, this.s, this.l * e14, this.opacity);
}, darker(e14) {
  return e14 = e14 == null ? p8 : Math.pow(p8, e14), new h12(this.h, this.s, this.l * e14, this.opacity);
}, rgb() {
  var e14 = this.h % 360 + (this.h < 0) * 360, t10 = isNaN(e14) || isNaN(this.s) ? 0 : this.s, r11 = this.l, n10 = r11 + (r11 < 0.5 ? r11 : 1 - r11) * t10, i9 = 2 * r11 - n10;
  return new a9(j10(e14 >= 240 ? e14 - 240 : e14 + 120, i9, n10), j10(e14, i9, n10), j10(e14 < 120 ? e14 + 240 : e14 - 120, i9, n10), this.opacity);
}, clamp() {
  return new h12(U7(this.h), q9(this.s), q9(this.l), E10(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  let e14 = E10(this.opacity);
  return `${e14 === 1 ? "hsl(" : "hsla("}${U7(this.h)}, ${q9(this.s) * 100}%, ${q9(this.l) * 100}%${e14 === 1 ? ")" : `, ${e14})`}`;
} }));
function U7(e14) {
  return e14 = (e14 || 0) % 360, e14 < 0 ? e14 + 360 : e14;
}
function q9(e14) {
  return Math.max(0, Math.min(1, e14 || 0));
}
function j10(e14, t10, r11) {
  return (e14 < 60 ? t10 + (r11 - t10) * e14 / 60 : e14 < 180 ? r11 : e14 < 240 ? t10 + (r11 - t10) * (240 - e14) / 60 : t10) * 255;
}
var P11 = Math.PI / 180;
var _8 = 180 / Math.PI;
var I18 = 18;
var te6 = 0.96422;
var re6 = 1;
var ne6 = 0.82521;
var ie5 = 4 / 29;
var v5 = 6 / 29;
var ae10 = 3 * v5 * v5;
var Me4 = v5 * v5 * v5;
function fe8(e14) {
  if (e14 instanceof l10) return new l10(e14.l, e14.a, e14.b, e14.opacity);
  if (e14 instanceof o11) return le7(e14);
  e14 instanceof a9 || (e14 = R9(e14));
  var t10 = S6(e14.r), r11 = S6(e14.g), n10 = S6(e14.b), i9 = B14((0.2225045 * t10 + 0.7168786 * r11 + 0.0606169 * n10) / re6), f10, s8;
  return t10 === r11 && r11 === n10 ? f10 = s8 = i9 : (f10 = B14((0.4360747 * t10 + 0.3850649 * r11 + 0.1430804 * n10) / te6), s8 = B14((0.0139322 * t10 + 0.0971045 * r11 + 0.7141733 * n10) / ne6)), new l10(116 * i9 - 16, 500 * (f10 - i9), 200 * (i9 - s8), e14.opacity);
}
function A8(e14, t10, r11, n10) {
  return arguments.length === 1 ? fe8(e14) : new l10(e14, t10, r11, n10 ?? 1);
}
function l10(e14, t10, r11, n10) {
  this.l = +e14, this.a = +t10, this.b = +r11, this.opacity = +n10;
}
b9(l10, A8, g12(u6, { brighter(e14) {
  return new l10(this.l + I18 * (e14 ?? 1), this.a, this.b, this.opacity);
}, darker(e14) {
  return new l10(this.l - I18 * (e14 ?? 1), this.a, this.b, this.opacity);
}, rgb() {
  var e14 = (this.l + 16) / 116, t10 = isNaN(this.a) ? e14 : e14 + this.a / 500, r11 = isNaN(this.b) ? e14 : e14 - this.b / 200;
  return t10 = te6 * D13(t10), e14 = re6 * D13(e14), r11 = ne6 * D13(r11), new a9(O9(3.1338561 * t10 - 1.6168667 * e14 - 0.4906146 * r11), O9(-0.9787684 * t10 + 1.9161415 * e14 + 0.033454 * r11), O9(0.0719453 * t10 - 0.2289914 * e14 + 1.4052427 * r11), this.opacity);
} }));
function B14(e14) {
  return e14 > Me4 ? Math.pow(e14, 1 / 3) : e14 / ae10 + ie5;
}
function D13(e14) {
  return e14 > v5 ? e14 * e14 * e14 : ae10 * (e14 - ie5);
}
function O9(e14) {
  return 255 * (e14 <= 31308e-7 ? 12.92 * e14 : 1.055 * Math.pow(e14, 1 / 2.4) - 0.055);
}
function S6(e14) {
  return (e14 /= 255) <= 0.04045 ? e14 / 12.92 : Math.pow((e14 + 0.055) / 1.055, 2.4);
}
function se6(e14) {
  if (e14 instanceof o11) return new o11(e14.h, e14.c, e14.l, e14.opacity);
  if (e14 instanceof l10 || (e14 = fe8(e14)), e14.a === 0 && e14.b === 0) return new o11(NaN, 0 < e14.l && e14.l < 100 ? 0 : NaN, e14.l, e14.opacity);
  var t10 = Math.atan2(e14.b, e14.a) * _8;
  return new o11(t10 < 0 ? t10 + 360 : t10, Math.sqrt(e14.a * e14.a + e14.b * e14.b), e14.l, e14.opacity);
}
function he3(e14, t10, r11, n10) {
  return arguments.length === 1 ? se6(e14) : new o11(e14, t10, r11, n10 ?? 1);
}
function o11(e14, t10, r11, n10) {
  this.h = +e14, this.c = +t10, this.l = +r11, this.opacity = +n10;
}
function le7(e14) {
  if (isNaN(e14.h)) return new l10(e14.l, 0, 0, e14.opacity);
  var t10 = e14.h * P11;
  return new l10(e14.l, Math.cos(t10) * e14.c, Math.sin(t10) * e14.c, e14.opacity);
}
b9(o11, he3, g12(u6, { brighter(e14) {
  return new o11(this.h, this.c, this.l + I18 * (e14 ?? 1), this.opacity);
}, darker(e14) {
  return new o11(this.h, this.c, this.l - I18 * (e14 ?? 1), this.opacity);
}, rgb() {
  return le7(this).rgb();
} }));
var oe7 = -0.14861;
var L7 = 1.78277;
var K9 = -0.29227;
var z10 = -0.90649;
var k7 = 1.97294;
var xe4 = k7 * z10;
var ce7 = k7 * L7;
var ue7 = L7 * K9 - z10 * oe7;
function ke4(e14) {
  if (e14 instanceof $8) return new $8(e14.h, e14.s, e14.l, e14.opacity);
  e14 instanceof a9 || (e14 = R9(e14));
  var t10 = e14.r / 255, r11 = e14.g / 255, n10 = e14.b / 255, i9 = (ue7 * n10 + xe4 * t10 - ce7 * r11) / (ue7 + xe4 - ce7), f10 = n10 - i9, s8 = (k7 * (r11 - i9) - K9 * f10) / z10, x18 = Math.sqrt(s8 * s8 + f10 * f10) / (k7 * i9 * (1 - i9)), d12 = x18 ? Math.atan2(s8, f10) * _8 - 120 : NaN;
  return new $8(d12 < 0 ? d12 + 360 : d12, x18, i9, e14.opacity);
}
function X6(e14, t10, r11, n10) {
  return arguments.length === 1 ? ke4(e14) : new $8(e14, t10, r11, n10 ?? 1);
}
function $8(e14, t10, r11, n10) {
  this.h = +e14, this.s = +t10, this.l = +r11, this.opacity = +n10;
}
b9($8, X6, g12(u6, { brighter(e14) {
  return e14 = e14 == null ? y12 : Math.pow(y12, e14), new $8(this.h, this.s, this.l * e14, this.opacity);
}, darker(e14) {
  return e14 = e14 == null ? p8 : Math.pow(p8, e14), new $8(this.h, this.s, this.l * e14, this.opacity);
}, rgb() {
  var e14 = isNaN(this.h) ? 0 : (this.h + 120) * P11, t10 = +this.l, r11 = isNaN(this.s) ? 0 : this.s * t10 * (1 - t10), n10 = Math.cos(e14), i9 = Math.sin(e14);
  return new a9(255 * (t10 + r11 * (oe7 * n10 + L7 * i9)), 255 * (t10 + r11 * (K9 * n10 + z10 * i9)), 255 * (t10 + r11 * (k7 * n10)), this.opacity);
} }));

// http-url:https://esm.sh/d3-interpolate@3.0.1/es2022/d3-interpolate.mjs
function T13(e14, r11, t10, n10, o15) {
  var u9 = e14 * e14, i9 = u9 * e14;
  return ((1 - 3 * e14 + 3 * u9 - i9) * r11 + (4 - 6 * u9 + 3 * i9) * t10 + (1 + 3 * e14 + 3 * u9 - 3 * i9) * n10 + i9 * o15) / 6;
}
function D14(e14) {
  var r11 = e14.length - 1;
  return function(t10) {
    var n10 = t10 <= 0 ? t10 = 0 : t10 >= 1 ? (t10 = 1, r11 - 1) : Math.floor(t10 * r11), o15 = e14[n10], u9 = e14[n10 + 1], i9 = n10 > 0 ? e14[n10 - 1] : 2 * o15 - u9, f10 = n10 < r11 - 1 ? e14[n10 + 2] : 2 * u9 - o15;
    return T13((t10 - n10 / r11) * r11, i9, o15, u9, f10);
  };
}
function H10(e14) {
  var r11 = e14.length;
  return function(t10) {
    var n10 = Math.floor(((t10 %= 1) < 0 ? ++t10 : t10) * r11), o15 = e14[(n10 + r11 - 1) % r11], u9 = e14[n10 % r11], i9 = e14[(n10 + 1) % r11], f10 = e14[(n10 + 2) % r11];
    return T13((t10 - n10 / r11) * r11, o15, u9, i9, f10);
  };
}
var w7 = (e14) => () => e14;
function Z6(e14, r11) {
  return function(t10) {
    return e14 + t10 * r11;
  };
}
function mr2(e14, r11, t10) {
  return e14 = Math.pow(e14, t10), r11 = Math.pow(r11, t10) - e14, t10 = 1 / t10, function(n10) {
    return Math.pow(e14 + n10 * r11, t10);
  };
}
function v6(e14, r11) {
  var t10 = r11 - e14;
  return t10 ? Z6(e14, t10 > 180 || t10 < -180 ? t10 - 360 * Math.round(t10 / 360) : t10) : w7(isNaN(e14) ? r11 : e14);
}
function F7(e14) {
  return (e14 = +e14) == 1 ? s7 : function(r11, t10) {
    return t10 - r11 ? mr2(r11, t10, e14) : w7(isNaN(r11) ? t10 : r11);
  };
}
function s7(e14, r11) {
  var t10 = r11 - e14;
  return t10 ? Z6(e14, t10) : w7(isNaN(e14) ? r11 : e14);
}
var C8 = function e9(r11) {
  var t10 = F7(r11);
  function n10(o15, u9) {
    var i9 = t10((o15 = V8(o15)).r, (u9 = V8(u9)).r), f10 = t10(o15.g, u9.g), c16 = t10(o15.b, u9.b), l12 = s7(o15.opacity, u9.opacity);
    return function(a11) {
      return o15.r = i9(a11), o15.g = f10(a11), o15.b = c16(a11), o15.opacity = l12(a11), o15 + "";
    };
  }
  return n10.gamma = e9, n10;
}(1);
function J11(e14) {
  return function(r11) {
    var t10 = r11.length, n10 = new Array(t10), o15 = new Array(t10), u9 = new Array(t10), i9, f10;
    for (i9 = 0; i9 < t10; ++i9) f10 = V8(r11[i9]), n10[i9] = f10.r || 0, o15[i9] = f10.g || 0, u9[i9] = f10.b || 0;
    return n10 = e14(n10), o15 = e14(o15), u9 = e14(u9), f10.opacity = 1, function(c16) {
      return f10.r = n10(c16), f10.g = o15(c16), f10.b = u9(c16), f10 + "";
    };
  };
}
var sr = J11(D14);
var hr2 = J11(H10);
function S7(e14, r11) {
  r11 || (r11 = []);
  var t10 = e14 ? Math.min(r11.length, e14.length) : 0, n10 = r11.slice(), o15;
  return function(u9) {
    for (o15 = 0; o15 < t10; ++o15) n10[o15] = e14[o15] * (1 - u9) + r11[o15] * u9;
    return n10;
  };
}
function L8(e14) {
  return ArrayBuffer.isView(e14) && !(e14 instanceof DataView);
}
function I19(e14, r11) {
  var t10 = r11 ? r11.length : 0, n10 = e14 ? Math.min(t10, e14.length) : 0, o15 = new Array(n10), u9 = new Array(t10), i9;
  for (i9 = 0; i9 < n10; ++i9) o15[i9] = y13(e14[i9], r11[i9]);
  for (; i9 < t10; ++i9) u9[i9] = r11[i9];
  return function(f10) {
    for (i9 = 0; i9 < n10; ++i9) u9[i9] = o15[i9](f10);
    return u9;
  };
}
function z11(e14, r11) {
  var t10 = /* @__PURE__ */ new Date();
  return e14 = +e14, r11 = +r11, function(n10) {
    return t10.setTime(e14 * (1 - n10) + r11 * n10), t10;
  };
}
function x15(e14, r11) {
  return e14 = +e14, r11 = +r11, function(t10) {
    return e14 * (1 - t10) + r11 * t10;
  };
}
function O10(e14, r11) {
  var t10 = {}, n10 = {}, o15;
  (e14 === null || typeof e14 != "object") && (e14 = {}), (r11 === null || typeof r11 != "object") && (r11 = {});
  for (o15 in r11) o15 in e14 ? t10[o15] = y13(e14[o15], r11[o15]) : n10[o15] = r11[o15];
  return function(u9) {
    for (o15 in t10) n10[o15] = t10[o15](u9);
    return n10;
  };
}
var V9 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var E11 = new RegExp(V9.source, "g");
function gr(e14) {
  return function() {
    return e14;
  };
}
function dr(e14) {
  return function(r11) {
    return e14(r11) + "";
  };
}
function _9(e14, r11) {
  var t10 = V9.lastIndex = E11.lastIndex = 0, n10, o15, u9, i9 = -1, f10 = [], c16 = [];
  for (e14 = e14 + "", r11 = r11 + ""; (n10 = V9.exec(e14)) && (o15 = E11.exec(r11)); ) (u9 = o15.index) > t10 && (u9 = r11.slice(t10, u9), f10[i9] ? f10[i9] += u9 : f10[++i9] = u9), (n10 = n10[0]) === (o15 = o15[0]) ? f10[i9] ? f10[i9] += o15 : f10[++i9] = o15 : (f10[++i9] = null, c16.push({ i: i9, x: x15(n10, o15) })), t10 = E11.lastIndex;
  return t10 < r11.length && (u9 = r11.slice(t10), f10[i9] ? f10[i9] += u9 : f10[++i9] = u9), f10.length < 2 ? c16[0] ? dr(c16[0].x) : gr(r11) : (r11 = c16.length, function(l12) {
    for (var a11 = 0, p12; a11 < r11; ++a11) f10[(p12 = c16[a11]).i] = p12.x(l12);
    return f10.join("");
  });
}
function y13(e14, r11) {
  var t10 = typeof r11, n10;
  return r11 == null || t10 === "boolean" ? w7(r11) : (t10 === "number" ? x15 : t10 === "string" ? (n10 = H9(r11)) ? (r11 = n10, C8) : _9 : r11 instanceof H9 ? C8 : r11 instanceof Date ? z11 : L8(r11) ? S7 : Array.isArray(r11) ? I19 : typeof r11.valueOf != "function" && typeof r11.toString != "function" || isNaN(r11) ? O10 : x15)(e14, r11);
}
function yr2(e14, r11) {
  return e14 = +e14, r11 = +r11, function(t10) {
    return Math.round(e14 * (1 - t10) + r11 * t10);
  };
}
var $9 = 180 / Math.PI;
var B15 = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function G16(e14, r11, t10, n10, o15, u9) {
  var i9, f10, c16;
  return (i9 = Math.sqrt(e14 * e14 + r11 * r11)) && (e14 /= i9, r11 /= i9), (c16 = e14 * t10 + r11 * n10) && (t10 -= e14 * c16, n10 -= r11 * c16), (f10 = Math.sqrt(t10 * t10 + n10 * n10)) && (t10 /= f10, n10 /= f10, c16 /= f10), e14 * n10 < r11 * t10 && (e14 = -e14, r11 = -r11, c16 = -c16, i9 = -i9), { translateX: o15, translateY: u9, rotate: Math.atan2(r11, e14) * $9, skewX: Math.atan(c16) * $9, scaleX: i9, scaleY: f10 };
}
var k8;
function P12(e14) {
  let r11 = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e14 + "");
  return r11.isIdentity ? B15 : G16(r11.a, r11.b, r11.c, r11.d, r11.e, r11.f);
}
function b10(e14) {
  return e14 == null ? B15 : (k8 || (k8 = document.createElementNS("http://www.w3.org/2000/svg", "g")), k8.setAttribute("transform", e14), (e14 = k8.transform.baseVal.consolidate()) ? (e14 = e14.matrix, G16(e14.a, e14.b, e14.c, e14.d, e14.e, e14.f)) : B15);
}
function rr(e14, r11, t10, n10) {
  function o15(l12) {
    return l12.length ? l12.pop() + " " : "";
  }
  function u9(l12, a11, p12, m18, h13, d12) {
    if (l12 !== p12 || a11 !== m18) {
      var g13 = h13.push("translate(", null, r11, null, t10);
      d12.push({ i: g13 - 4, x: x15(l12, p12) }, { i: g13 - 2, x: x15(a11, m18) });
    } else (p12 || m18) && h13.push("translate(" + p12 + r11 + m18 + t10);
  }
  function i9(l12, a11, p12, m18) {
    l12 !== a11 ? (l12 - a11 > 180 ? a11 += 360 : a11 - l12 > 180 && (l12 += 360), m18.push({ i: p12.push(o15(p12) + "rotate(", null, n10) - 2, x: x15(l12, a11) })) : a11 && p12.push(o15(p12) + "rotate(" + a11 + n10);
  }
  function f10(l12, a11, p12, m18) {
    l12 !== a11 ? m18.push({ i: p12.push(o15(p12) + "skewX(", null, n10) - 2, x: x15(l12, a11) }) : a11 && p12.push(o15(p12) + "skewX(" + a11 + n10);
  }
  function c16(l12, a11, p12, m18, h13, d12) {
    if (l12 !== p12 || a11 !== m18) {
      var g13 = h13.push(o15(h13) + "scale(", null, ",", null, ")");
      d12.push({ i: g13 - 4, x: x15(l12, p12) }, { i: g13 - 2, x: x15(a11, m18) });
    } else (p12 !== 1 || m18 !== 1) && h13.push(o15(h13) + "scale(" + p12 + "," + m18 + ")");
  }
  return function(l12, a11) {
    var p12 = [], m18 = [];
    return l12 = e14(l12), a11 = e14(a11), u9(l12.translateX, l12.translateY, a11.translateX, a11.translateY, p12, m18), i9(l12.rotate, a11.rotate, p12, m18), f10(l12.skewX, a11.skewX, p12, m18), c16(l12.scaleX, l12.scaleY, a11.scaleX, a11.scaleY, p12, m18), l12 = a11 = null, function(h13) {
      for (var d12 = -1, g13 = m18.length, M13; ++d12 < g13; ) p12[(M13 = m18[d12]).i] = M13.x(h13);
      return p12.join("");
    };
  };
}
var wr2 = rr(P12, "px, ", "px)", "deg)");
var Ar = rr(b10, ", ", ")", ")");
var Xr = 1e-12;
function er(e14) {
  return ((e14 = Math.exp(e14)) + 1 / e14) / 2;
}
function Nr(e14) {
  return ((e14 = Math.exp(e14)) - 1 / e14) / 2;
}
function Sr(e14) {
  return ((e14 = Math.exp(2 * e14)) - 1) / (e14 + 1);
}
var Cr = function e10(r11, t10, n10) {
  function o15(u9, i9) {
    var f10 = u9[0], c16 = u9[1], l12 = u9[2], a11 = i9[0], p12 = i9[1], m18 = i9[2], h13 = a11 - f10, d12 = p12 - c16, g13 = h13 * h13 + d12 * d12, M13, A13;
    if (g13 < Xr) A13 = Math.log(m18 / l12) / r11, M13 = function(N19) {
      return [f10 + N19 * h13, c16 + N19 * d12, l12 * Math.exp(r11 * N19 * A13)];
    };
    else {
      var R13 = Math.sqrt(g13), Y10 = (m18 * m18 - l12 * l12 + n10 * g13) / (2 * l12 * t10 * R13), q14 = (m18 * m18 - l12 * l12 - n10 * g13) / (2 * m18 * t10 * R13), X12 = Math.log(Math.sqrt(Y10 * Y10 + 1) - Y10), cr2 = Math.log(Math.sqrt(q14 * q14 + 1) - q14);
      A13 = (cr2 - X12) / r11, M13 = function(N19) {
        var Q13 = N19 * A13, K13 = er(X12), W16 = l12 / (t10 * R13) * (K13 * Sr(r11 * Q13 + X12) - Nr(X12));
        return [f10 + W16 * h13, c16 + W16 * d12, l12 * K13 / er(r11 * Q13 + X12)];
      };
    }
    return M13.duration = A13 * 1e3 * r11 / Math.SQRT2, M13;
  }
  return o15.rho = function(u9) {
    var i9 = Math.max(1e-3, +u9), f10 = i9 * i9, c16 = f10 * f10;
    return e10(i9, f10, c16);
  }, o15;
}(Math.SQRT2, 2, 4);
function or2(e14) {
  return function(r11, t10) {
    var n10 = e14((r11 = ee4(r11)).h, (t10 = ee4(t10)).h), o15 = s7(r11.s, t10.s), u9 = s7(r11.l, t10.l), i9 = s7(r11.opacity, t10.opacity);
    return function(f10) {
      return r11.h = n10(f10), r11.s = o15(f10), r11.l = u9(f10), r11.opacity = i9(f10), r11 + "";
    };
  };
}
var Lr = or2(v6);
var Br = or2(s7);
function fr(e14) {
  return function(r11, t10) {
    var n10 = e14((r11 = he3(r11)).h, (t10 = he3(t10)).h), o15 = s7(r11.c, t10.c), u9 = s7(r11.l, t10.l), i9 = s7(r11.opacity, t10.opacity);
    return function(f10) {
      return r11.h = n10(f10), r11.c = o15(f10), r11.l = u9(f10), r11.opacity = i9(f10), r11 + "";
    };
  };
}
var kr = fr(v6);
var Rr = fr(s7);
function lr(e14) {
  return function r11(t10) {
    t10 = +t10;
    function n10(o15, u9) {
      var i9 = e14((o15 = X6(o15)).h, (u9 = X6(u9)).h), f10 = s7(o15.s, u9.s), c16 = s7(o15.l, u9.l), l12 = s7(o15.opacity, u9.opacity);
      return function(a11) {
        return o15.h = i9(a11), o15.s = f10(a11), o15.l = c16(Math.pow(a11, t10)), o15.opacity = l12(a11), o15 + "";
      };
    }
    return n10.gamma = r11, n10;
  }(1);
}
var Yr = lr(v6);
var qr = lr(s7);
function pr2(e14, r11) {
  r11 === void 0 && (r11 = e14, e14 = y13);
  for (var t10 = 0, n10 = r11.length - 1, o15 = r11[0], u9 = new Array(n10 < 0 ? 0 : n10); t10 < n10; ) u9[t10] = e14(o15, o15 = r11[++t10]);
  return function(i9) {
    var f10 = Math.max(0, Math.min(n10 - 1, Math.floor(i9 *= n10)));
    return u9[f10](i9 - f10);
  };
}

// http-url:https://esm.sh/d3-time@3.1.0/es2022/d3-time.mjs
var q10 = /* @__PURE__ */ new Date();
var A9 = /* @__PURE__ */ new Date();
function o12(t10, e14, u9, C11) {
  function i9(r11) {
    return t10(r11 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+r11)), r11;
  }
  return i9.floor = (r11) => (t10(r11 = /* @__PURE__ */ new Date(+r11)), r11), i9.ceil = (r11) => (t10(r11 = new Date(r11 - 1)), e14(r11, 1), t10(r11), r11), i9.round = (r11) => {
    let n10 = i9(r11), c16 = i9.ceil(r11);
    return r11 - n10 < c16 - r11 ? n10 : c16;
  }, i9.offset = (r11, n10) => (e14(r11 = /* @__PURE__ */ new Date(+r11), n10 == null ? 1 : Math.floor(n10)), r11), i9.range = (r11, n10, c16) => {
    let h13 = [];
    if (r11 = i9.ceil(r11), c16 = c16 == null ? 1 : Math.floor(c16), !(r11 < n10) || !(c16 > 0)) return h13;
    let a11;
    do
      h13.push(a11 = /* @__PURE__ */ new Date(+r11)), e14(r11, c16), t10(r11);
    while (a11 < r11 && r11 < n10);
    return h13;
  }, i9.filter = (r11) => o12((n10) => {
    if (n10 >= n10) for (; t10(n10), !r11(n10); ) n10.setTime(n10 - 1);
  }, (n10, c16) => {
    if (n10 >= n10) if (c16 < 0) for (; ++c16 <= 0; ) for (; e14(n10, -1), !r11(n10); ) ;
    else for (; --c16 >= 0; ) for (; e14(n10, 1), !r11(n10); ) ;
  }), u9 && (i9.count = (r11, n10) => (q10.setTime(+r11), A9.setTime(+n10), t10(q10), t10(A9), Math.floor(u9(q10, A9))), i9.every = (r11) => (r11 = Math.floor(r11), !isFinite(r11) || !(r11 > 0) ? null : r11 > 1 ? i9.filter(C11 ? (n10) => C11(n10) % r11 === 0 : (n10) => i9.count(0, n10) % r11 === 0) : i9)), i9;
}
var x16 = o12(() => {
}, (t10, e14) => {
  t10.setTime(+t10 + e14);
}, (t10, e14) => e14 - t10);
x16.every = (t10) => (t10 = Math.floor(t10), !isFinite(t10) || !(t10 > 0) ? null : t10 > 1 ? o12((e14) => {
  e14.setTime(Math.floor(e14 / t10) * t10);
}, (e14, u9) => {
  e14.setTime(+e14 + u9 * t10);
}, (e14, u9) => (u9 - e14) / t10) : x16);
var E12 = x16.range;
var p9 = o12((t10) => {
  t10.setTime(t10 - t10.getMilliseconds());
}, (t10, e14) => {
  t10.setTime(+t10 + e14 * 1e3);
}, (t10, e14) => (e14 - t10) / 1e3, (t10) => t10.getUTCSeconds());
var G17 = p9.range;
var H11 = o12((t10) => {
  t10.setTime(t10 - t10.getMilliseconds() - t10.getSeconds() * 1e3);
}, (t10, e14) => {
  t10.setTime(+t10 + e14 * 6e4);
}, (t10, e14) => (e14 - t10) / 6e4, (t10) => t10.getMinutes());
var ct3 = H11.range;
var W13 = o12((t10) => {
  t10.setUTCSeconds(0, 0);
}, (t10, e14) => {
  t10.setTime(+t10 + e14 * 6e4);
}, (t10, e14) => (e14 - t10) / 6e4, (t10) => t10.getUTCMinutes());
var at2 = W13.range;
var I20 = o12((t10) => {
  t10.setTime(t10 - t10.getMilliseconds() - t10.getSeconds() * 1e3 - t10.getMinutes() * 6e4);
}, (t10, e14) => {
  t10.setTime(+t10 + e14 * 36e5);
}, (t10, e14) => (e14 - t10) / 36e5, (t10) => t10.getHours());
var mt3 = I20.range;
var w8 = o12((t10) => {
  t10.setUTCMinutes(0, 0, 0);
}, (t10, e14) => {
  t10.setTime(+t10 + e14 * 36e5);
}, (t10, e14) => (e14 - t10) / 36e5, (t10) => t10.getUTCHours());
var lt4 = w8.range;
var k9 = o12((t10) => t10.setHours(0, 0, 0, 0), (t10, e14) => t10.setDate(t10.getDate() + e14), (t10, e14) => (e14 - t10 - (e14.getTimezoneOffset() - t10.getTimezoneOffset()) * 6e4) / 864e5, (t10) => t10.getDate() - 1);
var yt3 = k9.range;
var J12 = o12((t10) => {
  t10.setUTCHours(0, 0, 0, 0);
}, (t10, e14) => {
  t10.setUTCDate(t10.getUTCDate() + e14);
}, (t10, e14) => (e14 - t10) / 864e5, (t10) => t10.getUTCDate() - 1);
var gt3 = J12.range;
var z12 = o12((t10) => {
  t10.setUTCHours(0, 0, 0, 0);
}, (t10, e14) => {
  t10.setUTCDate(t10.getUTCDate() + e14);
}, (t10, e14) => (e14 - t10) / 864e5, (t10) => Math.floor(t10 / 864e5));
var Tt = z12.range;
function d9(t10) {
  return o12((e14) => {
    e14.setDate(e14.getDate() - (e14.getDay() + 7 - t10) % 7), e14.setHours(0, 0, 0, 0);
  }, (e14, u9) => {
    e14.setDate(e14.getDate() + u9 * 7);
  }, (e14, u9) => (u9 - e14 - (u9.getTimezoneOffset() - e14.getTimezoneOffset()) * 6e4) / 6048e5);
}
var U8 = d9(0);
var K10 = d9(1);
var L9 = d9(2);
var N17 = d9(3);
var P13 = d9(4);
var Q9 = d9(5);
var R10 = d9(6);
var V10 = U8.range;
var pt4 = K10.range;
var xt3 = L9.range;
var Mt = N17.range;
var dt2 = P13.range;
var ft4 = Q9.range;
var ht3 = R10.range;
function f7(t10) {
  return o12((e14) => {
    e14.setUTCDate(e14.getUTCDate() - (e14.getUTCDay() + 7 - t10) % 7), e14.setUTCHours(0, 0, 0, 0);
  }, (e14, u9) => {
    e14.setUTCDate(e14.getUTCDate() + u9 * 7);
  }, (e14, u9) => (u9 - e14) / 6048e5);
}
var S8 = f7(0);
var X7 = f7(1);
var Z7 = f7(2);
var _10 = f7(3);
var $10 = f7(4);
var tt4 = f7(5);
var et4 = f7(6);
var rt2 = S8.range;
var Dt2 = X7.range;
var Ct3 = Z7.range;
var Ut = _10.range;
var St = $10.range;
var Ft = tt4.range;
var Yt = et4.range;
var b11 = o12((t10) => {
  t10.setDate(1), t10.setHours(0, 0, 0, 0);
}, (t10, e14) => {
  t10.setMonth(t10.getMonth() + e14);
}, (t10, e14) => e14.getMonth() - t10.getMonth() + (e14.getFullYear() - t10.getFullYear()) * 12, (t10) => t10.getMonth());
var vt2 = b11.range;
var j11 = o12((t10) => {
  t10.setUTCDate(1), t10.setUTCHours(0, 0, 0, 0);
}, (t10, e14) => {
  t10.setUTCMonth(t10.getUTCMonth() + e14);
}, (t10, e14) => e14.getUTCMonth() - t10.getUTCMonth() + (e14.getUTCFullYear() - t10.getUTCFullYear()) * 12, (t10) => t10.getUTCMonth());
var Ht = j11.range;
var F8 = o12((t10) => {
  t10.setMonth(0, 1), t10.setHours(0, 0, 0, 0);
}, (t10, e14) => {
  t10.setFullYear(t10.getFullYear() + e14);
}, (t10, e14) => e14.getFullYear() - t10.getFullYear(), (t10) => t10.getFullYear());
F8.every = (t10) => !isFinite(t10 = Math.floor(t10)) || !(t10 > 0) ? null : o12((e14) => {
  e14.setFullYear(Math.floor(e14.getFullYear() / t10) * t10), e14.setMonth(0, 1), e14.setHours(0, 0, 0, 0);
}, (e14, u9) => {
  e14.setFullYear(e14.getFullYear() + u9 * t10);
});
var Wt = F8.range;
var Y7 = o12((t10) => {
  t10.setUTCMonth(0, 1), t10.setUTCHours(0, 0, 0, 0);
}, (t10, e14) => {
  t10.setUTCFullYear(t10.getUTCFullYear() + e14);
}, (t10, e14) => e14.getUTCFullYear() - t10.getUTCFullYear(), (t10) => t10.getUTCFullYear());
Y7.every = (t10) => !isFinite(t10 = Math.floor(t10)) || !(t10 > 0) ? null : o12((e14) => {
  e14.setUTCFullYear(Math.floor(e14.getUTCFullYear() / t10) * t10), e14.setUTCMonth(0, 1), e14.setUTCHours(0, 0, 0, 0);
}, (e14, u9) => {
  e14.setUTCFullYear(e14.getUTCFullYear() + u9 * t10);
});
var It2 = Y7.range;
function ut4(t10, e14, u9, C11, i9, r11) {
  let n10 = [[p9, 1, 1e3], [p9, 5, 5 * 1e3], [p9, 15, 15 * 1e3], [p9, 30, 30 * 1e3], [r11, 1, 6e4], [r11, 5, 5 * 6e4], [r11, 15, 15 * 6e4], [r11, 30, 30 * 6e4], [i9, 1, 36e5], [i9, 3, 3 * 36e5], [i9, 6, 6 * 36e5], [i9, 12, 12 * 36e5], [C11, 1, 864e5], [C11, 2, 2 * 864e5], [u9, 1, 6048e5], [e14, 1, 2592e6], [e14, 3, 3 * 2592e6], [t10, 1, 31536e6]];
  function c16(a11, l12, T15) {
    let D18 = l12 < a11;
    D18 && ([a11, l12] = [l12, a11]);
    let y16 = T15 && typeof T15.range == "function" ? T15 : h13(a11, l12, T15), v9 = y16 ? y16.range(a11, +l12 + 1) : [];
    return D18 ? v9.reverse() : v9;
  }
  function h13(a11, l12, T15) {
    let D18 = Math.abs(l12 - a11) / T15, y16 = F5(([, , st5]) => st5).right(n10, D18);
    if (y16 === n10.length) return t10.every(gt2(a11 / 31536e6, l12 / 31536e6, T15));
    if (y16 === 0) return x16.every(Math.max(gt2(a11, l12, T15), 1));
    let [v9, it3] = n10[D18 / n10[y16 - 1][2] < n10[y16][2] / D18 ? y16 - 1 : y16];
    return v9.every(it3);
  }
  return [c16, h13];
}
var [kt, zt] = ut4(Y7, j11, S8, z12, w8, W13);
var [Ot, bt2] = ut4(F8, b11, U8, k9, I20, H11);

// http-url:https://esm.sh/d3-time-format@4.1.0/es2022/src/locale.mjs
function H12(e14) {
  if (0 <= e14.y && e14.y < 100) {
    var n10 = new Date(-1, e14.m, e14.d, e14.H, e14.M, e14.S, e14.L);
    return n10.setFullYear(e14.y), n10;
  }
  return new Date(e14.y, e14.m, e14.d, e14.H, e14.M, e14.S, e14.L);
}
function b12(e14) {
  if (0 <= e14.y && e14.y < 100) {
    var n10 = new Date(Date.UTC(-1, e14.m, e14.d, e14.H, e14.M, e14.S, e14.L));
    return n10.setUTCFullYear(e14.y), n10;
  }
  return new Date(Date.UTC(e14.y, e14.m, e14.d, e14.H, e14.M, e14.S, e14.L));
}
function p10(e14, n10, t10) {
  return { y: e14, m: n10, d: t10, H: 0, M: 0, S: 0, L: 0 };
}
function be7(e14) {
  var n10 = e14.dateTime, t10 = e14.date, u9 = e14.time, y16 = e14.periods, T15 = e14.days, k12 = e14.shortDays, W16 = e14.months, L12 = e14.shortMonths, K13 = v7(y16), ee6 = D15(y16), ne8 = v7(T15), te8 = D15(T15), re8 = v7(k12), ue9 = D15(k12), oe8 = v7(W16), ae11 = D15(W16), ce9 = v7(L12), fe9 = D15(L12), U11 = { a: Ce7, A: Me5, b: pe7, B: ve8, c: null, d: _11, e: _11, f: nn, g: mn, G: yn, H: Je4, I: Ke3, j: en, L: z13, m: tn, M: rn2, p: De5, q: Se3, Q: X8, s: j12, S: un2, u: on, U: an, V: cn, w: fn, W: ln, x: null, X: null, y: sn, Y: gn, Z: hn, "%": P14 }, C11 = { a: we7, A: de10, b: xe6, B: ke6, c: null, d: q11, e: q11, f: Mn, g: Ln, G: Hn, H: Tn, I: Un, j: Cn, L: E13, m: pn, M: vn, p: We4, q: Le6, Q: X8, s: j12, S: Dn, u: Sn, U: wn, V: dn, w: xn, W: kn, x: null, X: null, y: Wn, Y: Yn, Z: bn, "%": P14 }, ie6 = { a: se8, A: me10, b: ge8, B: ye7, c: he5, d: Q10, e: Q10, f: Ge3, g: R11, G: A10, H: V11, I: V11, j: Pe4, L: Be3, m: qe3, M: Xe3, p: le9, q: _e6, Q: $e3, s: Ee5, S: je4, u: Ie4, U: Ae5, V: Re5, w: Ze4, W: Qe3, x: Te4, X: Ue3, y: R11, Y: A10, Z: Ve2, "%": ze4 };
  U11.x = h13(t10, U11), U11.X = h13(u9, U11), U11.c = h13(n10, U11), C11.x = h13(t10, C11), C11.X = h13(u9, C11), C11.c = h13(n10, C11);
  function h13(o15, a11) {
    return function(c16) {
      var r11 = [], s8 = -1, i9 = 0, m18 = o15.length, g13, M13, Z11;
      for (c16 instanceof Date || (c16 = /* @__PURE__ */ new Date(+c16)); ++s8 < m18; ) o15.charCodeAt(s8) === 37 && (r11.push(o15.slice(i9, s8)), (M13 = I21[g13 = o15.charAt(++s8)]) != null ? g13 = o15.charAt(++s8) : M13 = g13 === "e" ? " " : "0", (Z11 = a11[g13]) && (g13 = Z11(c16, M13)), r11.push(g13), i9 = s8 + 1);
      return r11.push(o15.slice(i9, s8)), r11.join("");
    };
  }
  function O12(o15, a11) {
    return function(c16) {
      var r11 = p10(1900, void 0, 1), s8 = Y10(r11, o15, c16 += "", 0), i9, m18;
      if (s8 != c16.length) return null;
      if ("Q" in r11) return new Date(r11.Q);
      if ("s" in r11) return new Date(r11.s * 1e3 + ("L" in r11 ? r11.L : 0));
      if (a11 && !("Z" in r11) && (r11.Z = 0), "p" in r11 && (r11.H = r11.H % 12 + r11.p * 12), r11.m === void 0 && (r11.m = "q" in r11 ? r11.q : 0), "V" in r11) {
        if (r11.V < 1 || r11.V > 53) return null;
        "w" in r11 || (r11.w = 1), "Z" in r11 ? (i9 = b12(p10(r11.y, 0, 1)), m18 = i9.getUTCDay(), i9 = m18 > 4 || m18 === 0 ? X7.ceil(i9) : X7(i9), i9 = J12.offset(i9, (r11.V - 1) * 7), r11.y = i9.getUTCFullYear(), r11.m = i9.getUTCMonth(), r11.d = i9.getUTCDate() + (r11.w + 6) % 7) : (i9 = H12(p10(r11.y, 0, 1)), m18 = i9.getDay(), i9 = m18 > 4 || m18 === 0 ? K10.ceil(i9) : K10(i9), i9 = k9.offset(i9, (r11.V - 1) * 7), r11.y = i9.getFullYear(), r11.m = i9.getMonth(), r11.d = i9.getDate() + (r11.w + 6) % 7);
      } else ("W" in r11 || "U" in r11) && ("w" in r11 || (r11.w = "u" in r11 ? r11.u % 7 : "W" in r11 ? 1 : 0), m18 = "Z" in r11 ? b12(p10(r11.y, 0, 1)).getUTCDay() : H12(p10(r11.y, 0, 1)).getDay(), r11.m = 0, r11.d = "W" in r11 ? (r11.w + 6) % 7 + r11.W * 7 - (m18 + 5) % 7 : r11.w + r11.U * 7 - (m18 + 6) % 7);
      return "Z" in r11 ? (r11.H += r11.Z / 100 | 0, r11.M += r11.Z % 100, b12(r11)) : H12(r11);
    };
  }
  function Y10(o15, a11, c16, r11) {
    for (var s8 = 0, i9 = a11.length, m18 = c16.length, g13, M13; s8 < i9; ) {
      if (r11 >= m18) return -1;
      if (g13 = a11.charCodeAt(s8++), g13 === 37) {
        if (g13 = a11.charAt(s8++), M13 = ie6[g13 in I21 ? a11.charAt(s8++) : g13], !M13 || (r11 = M13(o15, c16, r11)) < 0) return -1;
      } else if (g13 != c16.charCodeAt(r11++)) return -1;
    }
    return r11;
  }
  function le9(o15, a11, c16) {
    var r11 = K13.exec(a11.slice(c16));
    return r11 ? (o15.p = ee6.get(r11[0].toLowerCase()), c16 + r11[0].length) : -1;
  }
  function se8(o15, a11, c16) {
    var r11 = re8.exec(a11.slice(c16));
    return r11 ? (o15.w = ue9.get(r11[0].toLowerCase()), c16 + r11[0].length) : -1;
  }
  function me10(o15, a11, c16) {
    var r11 = ne8.exec(a11.slice(c16));
    return r11 ? (o15.w = te8.get(r11[0].toLowerCase()), c16 + r11[0].length) : -1;
  }
  function ge8(o15, a11, c16) {
    var r11 = ce9.exec(a11.slice(c16));
    return r11 ? (o15.m = fe9.get(r11[0].toLowerCase()), c16 + r11[0].length) : -1;
  }
  function ye7(o15, a11, c16) {
    var r11 = oe8.exec(a11.slice(c16));
    return r11 ? (o15.m = ae11.get(r11[0].toLowerCase()), c16 + r11[0].length) : -1;
  }
  function he5(o15, a11, c16) {
    return Y10(o15, n10, a11, c16);
  }
  function Te4(o15, a11, c16) {
    return Y10(o15, t10, a11, c16);
  }
  function Ue3(o15, a11, c16) {
    return Y10(o15, u9, a11, c16);
  }
  function Ce7(o15) {
    return k12[o15.getDay()];
  }
  function Me5(o15) {
    return T15[o15.getDay()];
  }
  function pe7(o15) {
    return L12[o15.getMonth()];
  }
  function ve8(o15) {
    return W16[o15.getMonth()];
  }
  function De5(o15) {
    return y16[+(o15.getHours() >= 12)];
  }
  function Se3(o15) {
    return 1 + ~~(o15.getMonth() / 3);
  }
  function we7(o15) {
    return k12[o15.getUTCDay()];
  }
  function de10(o15) {
    return T15[o15.getUTCDay()];
  }
  function xe6(o15) {
    return L12[o15.getUTCMonth()];
  }
  function ke6(o15) {
    return W16[o15.getUTCMonth()];
  }
  function We4(o15) {
    return y16[+(o15.getUTCHours() >= 12)];
  }
  function Le6(o15) {
    return 1 + ~~(o15.getUTCMonth() / 3);
  }
  return { format: function(o15) {
    var a11 = h13(o15 += "", U11);
    return a11.toString = function() {
      return o15;
    }, a11;
  }, parse: function(o15) {
    var a11 = O12(o15 += "", false);
    return a11.toString = function() {
      return o15;
    }, a11;
  }, utcFormat: function(o15) {
    var a11 = h13(o15 += "", C11);
    return a11.toString = function() {
      return o15;
    }, a11;
  }, utcParse: function(o15) {
    var a11 = O12(o15 += "", true);
    return a11.toString = function() {
      return o15;
    }, a11;
  } };
}
var I21 = { "-": "", _: " ", 0: "0" };
var l11 = /^\s*\d+/;
var Fe4 = /^%/;
var Ne6 = /[\\^$*+?|[\]().{}]/g;
function f8(e14, n10, t10) {
  var u9 = e14 < 0 ? "-" : "", y16 = (u9 ? -e14 : e14) + "", T15 = y16.length;
  return u9 + (T15 < t10 ? new Array(t10 - T15 + 1).join(n10) + y16 : y16);
}
function Oe4(e14) {
  return e14.replace(Ne6, "\\$&");
}
function v7(e14) {
  return new RegExp("^(?:" + e14.map(Oe4).join("|") + ")", "i");
}
function D15(e14) {
  return new Map(e14.map((n10, t10) => [n10.toLowerCase(), t10]));
}
function Ze4(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 1));
  return u9 ? (e14.w = +u9[0], t10 + u9[0].length) : -1;
}
function Ie4(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 1));
  return u9 ? (e14.u = +u9[0], t10 + u9[0].length) : -1;
}
function Ae5(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 2));
  return u9 ? (e14.U = +u9[0], t10 + u9[0].length) : -1;
}
function Re5(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 2));
  return u9 ? (e14.V = +u9[0], t10 + u9[0].length) : -1;
}
function Qe3(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 2));
  return u9 ? (e14.W = +u9[0], t10 + u9[0].length) : -1;
}
function A10(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 4));
  return u9 ? (e14.y = +u9[0], t10 + u9[0].length) : -1;
}
function R11(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 2));
  return u9 ? (e14.y = +u9[0] + (+u9[0] > 68 ? 1900 : 2e3), t10 + u9[0].length) : -1;
}
function Ve2(e14, n10, t10) {
  var u9 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n10.slice(t10, t10 + 6));
  return u9 ? (e14.Z = u9[1] ? 0 : -(u9[2] + (u9[3] || "00")), t10 + u9[0].length) : -1;
}
function _e6(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 1));
  return u9 ? (e14.q = u9[0] * 3 - 3, t10 + u9[0].length) : -1;
}
function qe3(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 2));
  return u9 ? (e14.m = u9[0] - 1, t10 + u9[0].length) : -1;
}
function Q10(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 2));
  return u9 ? (e14.d = +u9[0], t10 + u9[0].length) : -1;
}
function Pe4(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 3));
  return u9 ? (e14.m = 0, e14.d = +u9[0], t10 + u9[0].length) : -1;
}
function V11(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 2));
  return u9 ? (e14.H = +u9[0], t10 + u9[0].length) : -1;
}
function Xe3(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 2));
  return u9 ? (e14.M = +u9[0], t10 + u9[0].length) : -1;
}
function je4(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 2));
  return u9 ? (e14.S = +u9[0], t10 + u9[0].length) : -1;
}
function Be3(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 3));
  return u9 ? (e14.L = +u9[0], t10 + u9[0].length) : -1;
}
function Ge3(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10, t10 + 6));
  return u9 ? (e14.L = Math.floor(u9[0] / 1e3), t10 + u9[0].length) : -1;
}
function ze4(e14, n10, t10) {
  var u9 = Fe4.exec(n10.slice(t10, t10 + 1));
  return u9 ? t10 + u9[0].length : -1;
}
function $e3(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10));
  return u9 ? (e14.Q = +u9[0], t10 + u9[0].length) : -1;
}
function Ee5(e14, n10, t10) {
  var u9 = l11.exec(n10.slice(t10));
  return u9 ? (e14.s = +u9[0], t10 + u9[0].length) : -1;
}
function _11(e14, n10) {
  return f8(e14.getDate(), n10, 2);
}
function Je4(e14, n10) {
  return f8(e14.getHours(), n10, 2);
}
function Ke3(e14, n10) {
  return f8(e14.getHours() % 12 || 12, n10, 2);
}
function en(e14, n10) {
  return f8(1 + k9.count(F8(e14), e14), n10, 3);
}
function z13(e14, n10) {
  return f8(e14.getMilliseconds(), n10, 3);
}
function nn(e14, n10) {
  return z13(e14, n10) + "000";
}
function tn(e14, n10) {
  return f8(e14.getMonth() + 1, n10, 2);
}
function rn2(e14, n10) {
  return f8(e14.getMinutes(), n10, 2);
}
function un2(e14, n10) {
  return f8(e14.getSeconds(), n10, 2);
}
function on(e14) {
  var n10 = e14.getDay();
  return n10 === 0 ? 7 : n10;
}
function an(e14, n10) {
  return f8(U8.count(F8(e14) - 1, e14), n10, 2);
}
function $11(e14) {
  var n10 = e14.getDay();
  return n10 >= 4 || n10 === 0 ? P13(e14) : P13.ceil(e14);
}
function cn(e14, n10) {
  return e14 = $11(e14), f8(P13.count(F8(e14), e14) + (F8(e14).getDay() === 4), n10, 2);
}
function fn(e14) {
  return e14.getDay();
}
function ln(e14, n10) {
  return f8(K10.count(F8(e14) - 1, e14), n10, 2);
}
function sn(e14, n10) {
  return f8(e14.getFullYear() % 100, n10, 2);
}
function mn(e14, n10) {
  return e14 = $11(e14), f8(e14.getFullYear() % 100, n10, 2);
}
function gn(e14, n10) {
  return f8(e14.getFullYear() % 1e4, n10, 4);
}
function yn(e14, n10) {
  var t10 = e14.getDay();
  return e14 = t10 >= 4 || t10 === 0 ? P13(e14) : P13.ceil(e14), f8(e14.getFullYear() % 1e4, n10, 4);
}
function hn(e14) {
  var n10 = e14.getTimezoneOffset();
  return (n10 > 0 ? "-" : (n10 *= -1, "+")) + f8(n10 / 60 | 0, "0", 2) + f8(n10 % 60, "0", 2);
}
function q11(e14, n10) {
  return f8(e14.getUTCDate(), n10, 2);
}
function Tn(e14, n10) {
  return f8(e14.getUTCHours(), n10, 2);
}
function Un(e14, n10) {
  return f8(e14.getUTCHours() % 12 || 12, n10, 2);
}
function Cn(e14, n10) {
  return f8(1 + J12.count(Y7(e14), e14), n10, 3);
}
function E13(e14, n10) {
  return f8(e14.getUTCMilliseconds(), n10, 3);
}
function Mn(e14, n10) {
  return E13(e14, n10) + "000";
}
function pn(e14, n10) {
  return f8(e14.getUTCMonth() + 1, n10, 2);
}
function vn(e14, n10) {
  return f8(e14.getUTCMinutes(), n10, 2);
}
function Dn(e14, n10) {
  return f8(e14.getUTCSeconds(), n10, 2);
}
function Sn(e14) {
  var n10 = e14.getUTCDay();
  return n10 === 0 ? 7 : n10;
}
function wn(e14, n10) {
  return f8(S8.count(Y7(e14) - 1, e14), n10, 2);
}
function J13(e14) {
  var n10 = e14.getUTCDay();
  return n10 >= 4 || n10 === 0 ? $10(e14) : $10.ceil(e14);
}
function dn(e14, n10) {
  return e14 = J13(e14), f8($10.count(Y7(e14), e14) + (Y7(e14).getUTCDay() === 4), n10, 2);
}
function xn(e14) {
  return e14.getUTCDay();
}
function kn(e14, n10) {
  return f8(X7.count(Y7(e14) - 1, e14), n10, 2);
}
function Wn(e14, n10) {
  return f8(e14.getUTCFullYear() % 100, n10, 2);
}
function Ln(e14, n10) {
  return e14 = J13(e14), f8(e14.getUTCFullYear() % 100, n10, 2);
}
function Yn(e14, n10) {
  return f8(e14.getUTCFullYear() % 1e4, n10, 4);
}
function Hn(e14, n10) {
  var t10 = e14.getUTCDay();
  return e14 = t10 >= 4 || t10 === 0 ? $10(e14) : $10.ceil(e14), f8(e14.getUTCFullYear() % 1e4, n10, 4);
}
function bn() {
  return "+0000";
}
function P14() {
  return "%";
}
function X8(e14) {
  return +e14;
}
function j12(e14) {
  return Math.floor(+e14 / 1e3);
}

// http-url:https://esm.sh/d3-time-format@4.1.0/es2022/src/defaultLocale.mjs
var e11;
var o13;
var u7;
var d10;
var m17;
r9({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function r9(a11) {
  return e11 = be7(a11), o13 = e11.format, u7 = e11.parse, d10 = e11.utcFormat, m17 = e11.utcParse, e11;
}

// http-url:https://esm.sh/d3-time-format@4.1.0/es2022/src/isoFormat.mjs
var r10 = "%Y-%m-%dT%H:%M:%S.%LZ";
function e12(t10) {
  return t10.toISOString();
}
var a10 = Date.prototype.toISOString ? e12 : d10(r10);

// http-url:https://esm.sh/d3-time-format@4.1.0/es2022/src/isoParse.mjs
function o14(r11) {
  var e14 = new Date(r11);
  return isNaN(e14) ? null : e14;
}
var i8 = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? o14 : m17(r10);

// http-url:https://esm.sh/d3-scale@4.0.2/es2022/d3-scale.mjs
function y14(n10, r11) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(n10);
      break;
    default:
      this.range(r11).domain(n10);
      break;
  }
  return this;
}
function k10(n10, r11) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof n10 == "function" ? this.interpolator(n10) : this.range(n10);
      break;
    }
    default: {
      this.domain(n10), typeof r11 == "function" ? this.interpolator(r11) : this.range(r11);
      break;
    }
  }
  return this;
}
var W14 = Symbol("implicit");
function A11() {
  var n10 = new u5(), r11 = [], o15 = [], t10 = W14;
  function u9(e14) {
    let i9 = n10.get(e14);
    if (i9 === void 0) {
      if (t10 !== W14) return t10;
      n10.set(e14, i9 = r11.push(e14) - 1);
    }
    return o15[i9 % o15.length];
  }
  return u9.domain = function(e14) {
    if (!arguments.length) return r11.slice();
    r11 = [], n10 = new u5();
    for (let i9 of e14) n10.has(i9) || n10.set(i9, r11.push(i9) - 1);
    return u9;
  }, u9.range = function(e14) {
    return arguments.length ? (o15 = Array.from(e14), u9) : o15.slice();
  }, u9.unknown = function(e14) {
    return arguments.length ? (t10 = e14, u9) : t10;
  }, u9.copy = function() {
    return A11(r11, o15).unknown(t10);
  }, y14.apply(u9, arguments), u9;
}
function E14() {
  var n10 = A11().unknown(void 0), r11 = n10.domain, o15 = n10.range, t10 = 0, u9 = 1, e14, i9, f10 = false, c16 = 0, a11 = 0, s8 = 0.5;
  delete n10.unknown;
  function m18() {
    var l12 = r11().length, g13 = u9 < t10, d12 = g13 ? u9 : t10, p12 = g13 ? t10 : u9;
    e14 = (p12 - d12) / Math.max(1, l12 - c16 + a11 * 2), f10 && (e14 = Math.floor(e14)), d12 += (p12 - d12 - e14 * (l12 - c16)) * s8, i9 = e14 * (1 - c16), f10 && (d12 = Math.round(d12), i9 = Math.round(i9));
    var x18 = ke3(l12).map(function(w9) {
      return d12 + e14 * w9;
    });
    return o15(g13 ? x18.reverse() : x18);
  }
  return n10.domain = function(l12) {
    return arguments.length ? (r11(l12), m18()) : r11();
  }, n10.range = function(l12) {
    return arguments.length ? ([t10, u9] = l12, t10 = +t10, u9 = +u9, m18()) : [t10, u9];
  }, n10.rangeRound = function(l12) {
    return [t10, u9] = l12, t10 = +t10, u9 = +u9, f10 = true, m18();
  }, n10.bandwidth = function() {
    return i9;
  }, n10.step = function() {
    return e14;
  }, n10.round = function(l12) {
    return arguments.length ? (f10 = !!l12, m18()) : f10;
  }, n10.padding = function(l12) {
    return arguments.length ? (c16 = Math.min(1, a11 = +l12), m18()) : c16;
  }, n10.paddingInner = function(l12) {
    return arguments.length ? (c16 = Math.min(1, l12), m18()) : c16;
  }, n10.paddingOuter = function(l12) {
    return arguments.length ? (a11 = +l12, m18()) : a11;
  }, n10.align = function(l12) {
    return arguments.length ? (s8 = Math.max(0, Math.min(1, l12)), m18()) : s8;
  }, n10.copy = function() {
    return E14(r11(), [t10, u9]).round(f10).paddingInner(c16).paddingOuter(a11).align(s8);
  }, y14.apply(m18(), arguments);
}
function un3(n10) {
  var r11 = n10.copy;
  return n10.padding = n10.paddingOuter, delete n10.paddingInner, delete n10.paddingOuter, n10.copy = function() {
    return un3(r11());
  }, n10;
}
function Sn2() {
  return un3(E14.apply(null, arguments).paddingInner(1));
}
function j13(n10) {
  return function() {
    return n10;
  };
}
function b13(n10) {
  return +n10;
}
var an2 = [0, 1];
function v8(n10) {
  return n10;
}
function B16(n10, r11) {
  return (r11 -= n10 = +n10) ? function(o15) {
    return (o15 - n10) / r11;
  } : j13(isNaN(r11) ? NaN : 0.5);
}
function Dn2(n10, r11) {
  var o15;
  return n10 > r11 && (o15 = n10, n10 = r11, r11 = o15), function(t10) {
    return Math.max(n10, Math.min(r11, t10));
  };
}
function Fn(n10, r11, o15) {
  var t10 = n10[0], u9 = n10[1], e14 = r11[0], i9 = r11[1];
  return u9 < t10 ? (t10 = B16(u9, t10), e14 = o15(i9, e14)) : (t10 = B16(t10, u9), e14 = o15(e14, i9)), function(f10) {
    return e14(t10(f10));
  };
}
function Ln2(n10, r11, o15) {
  var t10 = Math.min(n10.length, r11.length) - 1, u9 = new Array(t10), e14 = new Array(t10), i9 = -1;
  for (n10[t10] < n10[0] && (n10 = n10.slice().reverse(), r11 = r11.slice().reverse()); ++i9 < t10; ) u9[i9] = B16(n10[i9], n10[i9 + 1]), e14[i9] = o15(r11[i9], r11[i9 + 1]);
  return function(f10) {
    var c16 = re5(n10, f10, 1, t10) - 1;
    return e14[c16](u9[c16](f10));
  };
}
function N18(n10, r11) {
  return r11.domain(n10.domain()).range(n10.range()).interpolate(n10.interpolate()).clamp(n10.clamp()).unknown(n10.unknown());
}
function R12() {
  var n10 = an2, r11 = an2, o15 = y13, t10, u9, e14, i9 = v8, f10, c16, a11;
  function s8() {
    var l12 = Math.min(n10.length, r11.length);
    return i9 !== v8 && (i9 = Dn2(n10[0], n10[l12 - 1])), f10 = l12 > 2 ? Ln2 : Fn, c16 = a11 = null, m18;
  }
  function m18(l12) {
    return l12 == null || isNaN(l12 = +l12) ? e14 : (c16 || (c16 = f10(n10.map(t10), r11, o15)))(t10(i9(l12)));
  }
  return m18.invert = function(l12) {
    return i9(u9((a11 || (a11 = f10(r11, n10.map(t10), x15)))(l12)));
  }, m18.domain = function(l12) {
    return arguments.length ? (n10 = Array.from(l12, b13), s8()) : n10.slice();
  }, m18.range = function(l12) {
    return arguments.length ? (r11 = Array.from(l12), s8()) : r11.slice();
  }, m18.rangeRound = function(l12) {
    return r11 = Array.from(l12), o15 = yr2, s8();
  }, m18.clamp = function(l12) {
    return arguments.length ? (i9 = l12 ? true : v8, s8()) : i9 !== v8;
  }, m18.interpolate = function(l12) {
    return arguments.length ? (o15 = l12, s8()) : o15;
  }, m18.unknown = function(l12) {
    return arguments.length ? (e14 = l12, m18) : e14;
  }, function(l12, g13) {
    return t10 = l12, u9 = g13, s8();
  };
}
function I22() {
  return R12()(v8, v8);
}
function z14(n10, r11, o15, t10) {
  var u9 = gt2(n10, r11, o15), e14;
  switch (t10 = o9(t10 ?? ",f"), t10.type) {
    case "s": {
      var i9 = Math.max(Math.abs(n10), Math.abs(r11));
      return t10.precision == null && !isNaN(e14 = r7(u9, i9)) && (t10.precision = e14), f6(t10, i9);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      t10.precision == null && !isNaN(e14 = r8(u9, Math.max(Math.abs(n10), Math.abs(r11)))) && (t10.precision = e14 - (t10.type === "e"));
      break;
    }
    case "f":
    case "%": {
      t10.precision == null && !isNaN(e14 = n9(u9)) && (t10.precision = e14 - (t10.type === "%") * 2);
      break;
    }
  }
  return e8(t10);
}
function M10(n10) {
  var r11 = n10.domain;
  return n10.ticks = function(o15) {
    var t10 = r11();
    return X5(t10[0], t10[t10.length - 1], o15 ?? 10);
  }, n10.tickFormat = function(o15, t10) {
    var u9 = r11();
    return z14(u9[0], u9[u9.length - 1], o15 ?? 10, t10);
  }, n10.nice = function(o15) {
    o15 == null && (o15 = 10);
    var t10 = r11(), u9 = 0, e14 = t10.length - 1, i9 = t10[u9], f10 = t10[e14], c16, a11, s8 = 10;
    for (f10 < i9 && (a11 = i9, i9 = f10, f10 = a11, a11 = u9, u9 = e14, e14 = a11); s8-- > 0; ) {
      if (a11 = M8(i9, f10, o15), a11 === c16) return t10[u9] = i9, t10[e14] = f10, r11(t10);
      if (a11 > 0) i9 = Math.floor(i9 / a11) * a11, f10 = Math.ceil(f10 / a11) * a11;
      else if (a11 < 0) i9 = Math.ceil(i9 * a11) / a11, f10 = Math.floor(f10 * a11) / a11;
      else break;
      c16 = a11;
    }
    return n10;
  }, n10;
}
function C9() {
  var n10 = I22();
  return n10.copy = function() {
    return N18(n10, C9());
  }, y14.apply(n10, arguments), M10(n10);
}
function V12(n10) {
  var r11;
  function o15(t10) {
    return t10 == null || isNaN(t10 = +t10) ? r11 : t10;
  }
  return o15.invert = o15, o15.domain = o15.range = function(t10) {
    return arguments.length ? (n10 = Array.from(t10, b13), o15) : n10.slice();
  }, o15.unknown = function(t10) {
    return arguments.length ? (r11 = t10, o15) : r11;
  }, o15.copy = function() {
    return V12(n10).unknown(r11);
  }, n10 = arguments.length ? Array.from(n10, b13) : [0, 1], M10(o15);
}
function D16(n10, r11) {
  n10 = n10.slice();
  var o15 = 0, t10 = n10.length - 1, u9 = n10[o15], e14 = n10[t10], i9;
  return e14 < u9 && (i9 = o15, o15 = t10, t10 = i9, i9 = u9, u9 = e14, e14 = i9), n10[o15] = r11.floor(u9), n10[t10] = r11.ceil(e14), n10;
}
function fn2(n10) {
  return Math.log(n10);
}
function cn2(n10) {
  return Math.exp(n10);
}
function Bn(n10) {
  return -Math.log(-n10);
}
function Cn2(n10) {
  return -Math.exp(-n10);
}
function Vn(n10) {
  return isFinite(n10) ? +("1e" + n10) : n10 < 0 ? 0 : n10;
}
function _n(n10) {
  return n10 === 10 ? Vn : n10 === Math.E ? Math.exp : (r11) => Math.pow(n10, r11);
}
function Gn(n10) {
  return n10 === Math.E ? Math.log : n10 === 10 && Math.log10 || n10 === 2 && Math.log2 || (n10 = Math.log(n10), (r11) => Math.log(r11) / n10);
}
function mn2(n10) {
  return (r11, o15) => -n10(-r11, o15);
}
function F9(n10) {
  let r11 = n10(fn2, cn2), o15 = r11.domain, t10 = 10, u9, e14;
  function i9() {
    return u9 = Gn(t10), e14 = _n(t10), o15()[0] < 0 ? (u9 = mn2(u9), e14 = mn2(e14), n10(Bn, Cn2)) : n10(fn2, cn2), r11;
  }
  return r11.base = function(f10) {
    return arguments.length ? (t10 = +f10, i9()) : t10;
  }, r11.domain = function(f10) {
    return arguments.length ? (o15(f10), i9()) : o15();
  }, r11.ticks = (f10) => {
    let c16 = o15(), a11 = c16[0], s8 = c16[c16.length - 1], m18 = s8 < a11;
    m18 && ([a11, s8] = [s8, a11]);
    let l12 = u9(a11), g13 = u9(s8), d12, p12, x18 = f10 == null ? 10 : +f10, w9 = [];
    if (!(t10 % 1) && g13 - l12 < x18) {
      if (l12 = Math.floor(l12), g13 = Math.ceil(g13), a11 > 0) {
        for (; l12 <= g13; ++l12) for (d12 = 1; d12 < t10; ++d12) if (p12 = l12 < 0 ? d12 / e14(-l12) : d12 * e14(l12), !(p12 < a11)) {
          if (p12 > s8) break;
          w9.push(p12);
        }
      } else for (; l12 <= g13; ++l12) for (d12 = t10 - 1; d12 >= 1; --d12) if (p12 = l12 > 0 ? d12 / e14(-l12) : d12 * e14(l12), !(p12 < a11)) {
        if (p12 > s8) break;
        w9.push(p12);
      }
      w9.length * 2 < x18 && (w9 = X5(a11, s8, x18));
    } else w9 = X5(l12, g13, Math.min(g13 - l12, x18)).map(e14);
    return m18 ? w9.reverse() : w9;
  }, r11.tickFormat = (f10, c16) => {
    if (f10 == null && (f10 = 10), c16 == null && (c16 = t10 === 10 ? "s" : ","), typeof c16 != "function" && (!(t10 % 1) && (c16 = o9(c16)).precision == null && (c16.trim = true), c16 = e8(c16)), f10 === 1 / 0) return c16;
    let a11 = Math.max(1, t10 * f10 / r11.ticks().length);
    return (s8) => {
      let m18 = s8 / e14(Math.round(u9(s8)));
      return m18 * t10 < t10 - 0.5 && (m18 *= t10), m18 <= a11 ? c16(s8) : "";
    };
  }, r11.nice = () => o15(D16(o15(), { floor: (f10) => e14(Math.floor(u9(f10))), ceil: (f10) => e14(Math.ceil(u9(f10))) })), r11;
}
function _12() {
  let n10 = F9(R12()).domain([1, 10]);
  return n10.copy = () => N18(n10, _12()).base(n10.base()), y14.apply(n10, arguments), n10;
}
function sn2(n10) {
  return function(r11) {
    return Math.sign(r11) * Math.log1p(Math.abs(r11 / n10));
  };
}
function pn2(n10) {
  return function(r11) {
    return Math.sign(r11) * Math.expm1(Math.abs(r11)) * n10;
  };
}
function L10(n10) {
  var r11 = 1, o15 = n10(sn2(r11), pn2(r11));
  return o15.constant = function(t10) {
    return arguments.length ? n10(sn2(r11 = +t10), pn2(r11)) : r11;
  }, M10(o15);
}
function G18() {
  var n10 = L10(R12());
  return n10.copy = function() {
    return N18(n10, G18()).constant(n10.constant());
  }, y14.apply(n10, arguments);
}
function gn2(n10) {
  return function(r11) {
    return r11 < 0 ? -Math.pow(-r11, n10) : Math.pow(r11, n10);
  };
}
function Jn(n10) {
  return n10 < 0 ? -Math.sqrt(-n10) : Math.sqrt(n10);
}
function Kn(n10) {
  return n10 < 0 ? -n10 * n10 : n10 * n10;
}
function P15(n10) {
  var r11 = n10(v8, v8), o15 = 1;
  function t10() {
    return o15 === 1 ? n10(v8, v8) : o15 === 0.5 ? n10(Jn, Kn) : n10(gn2(o15), gn2(1 / o15));
  }
  return r11.exponent = function(u9) {
    return arguments.length ? (o15 = +u9, t10()) : o15;
  }, M10(r11);
}
function Q11() {
  var n10 = P15(R12());
  return n10.copy = function() {
    return N18(n10, Q11()).exponent(n10.exponent());
  }, y14.apply(n10, arguments), n10;
}
function Xn() {
  return Q11.apply(null, arguments).exponent(0.5);
}
function hn2(n10) {
  return Math.sign(n10) * n10 * n10;
}
function Zn(n10) {
  return Math.sign(n10) * Math.sqrt(Math.abs(n10));
}
function J14() {
  var n10 = I22(), r11 = [0, 1], o15 = false, t10;
  function u9(e14) {
    var i9 = Zn(n10(e14));
    return isNaN(i9) ? t10 : o15 ? Math.round(i9) : i9;
  }
  return u9.invert = function(e14) {
    return n10.invert(hn2(e14));
  }, u9.domain = function(e14) {
    return arguments.length ? (n10.domain(e14), u9) : n10.domain();
  }, u9.range = function(e14) {
    return arguments.length ? (n10.range((r11 = Array.from(e14, b13)).map(hn2)), u9) : r11.slice();
  }, u9.rangeRound = function(e14) {
    return u9.range(e14).round(true);
  }, u9.round = function(e14) {
    return arguments.length ? (o15 = !!e14, u9) : o15;
  }, u9.clamp = function(e14) {
    return arguments.length ? (n10.clamp(e14), u9) : n10.clamp();
  }, u9.unknown = function(e14) {
    return arguments.length ? (t10 = e14, u9) : t10;
  }, u9.copy = function() {
    return J14(n10.domain(), r11).round(o15).clamp(n10.clamp()).unknown(t10);
  }, y14.apply(u9, arguments), M10(u9);
}
function K11() {
  var n10 = [], r11 = [], o15 = [], t10;
  function u9() {
    var i9 = 0, f10 = Math.max(1, r11.length);
    for (o15 = new Array(f10 - 1); ++i9 < f10; ) o15[i9 - 1] = wt2(n10, i9 / f10);
    return e14;
  }
  function e14(i9) {
    return i9 == null || isNaN(i9 = +i9) ? t10 : r11[re5(o15, i9)];
  }
  return e14.invertExtent = function(i9) {
    var f10 = r11.indexOf(i9);
    return f10 < 0 ? [NaN, NaN] : [f10 > 0 ? o15[f10 - 1] : n10[0], f10 < o15.length ? o15[f10] : n10[n10.length - 1]];
  }, e14.domain = function(i9) {
    if (!arguments.length) return n10.slice();
    n10 = [];
    for (let f10 of i9) f10 != null && !isNaN(f10 = +f10) && n10.push(f10);
    return n10.sort(s5), u9();
  }, e14.range = function(i9) {
    return arguments.length ? (r11 = Array.from(i9), u9()) : r11.slice();
  }, e14.unknown = function(i9) {
    return arguments.length ? (t10 = i9, e14) : t10;
  }, e14.quantiles = function() {
    return o15.slice();
  }, e14.copy = function() {
    return K11().domain(n10).range(r11).unknown(t10);
  }, y14.apply(e14, arguments);
}
function X9() {
  var n10 = 0, r11 = 1, o15 = 1, t10 = [0.5], u9 = [0, 1], e14;
  function i9(c16) {
    return c16 != null && c16 <= c16 ? u9[re5(t10, c16, 0, o15)] : e14;
  }
  function f10() {
    var c16 = -1;
    for (t10 = new Array(o15); ++c16 < o15; ) t10[c16] = ((c16 + 1) * r11 - (c16 - o15) * n10) / (o15 + 1);
    return i9;
  }
  return i9.domain = function(c16) {
    return arguments.length ? ([n10, r11] = c16, n10 = +n10, r11 = +r11, f10()) : [n10, r11];
  }, i9.range = function(c16) {
    return arguments.length ? (o15 = (u9 = Array.from(c16)).length - 1, f10()) : u9.slice();
  }, i9.invertExtent = function(c16) {
    var a11 = u9.indexOf(c16);
    return a11 < 0 ? [NaN, NaN] : a11 < 1 ? [n10, t10[0]] : a11 >= o15 ? [t10[o15 - 1], r11] : [t10[a11 - 1], t10[a11]];
  }, i9.unknown = function(c16) {
    return arguments.length && (e14 = c16), i9;
  }, i9.thresholds = function() {
    return t10.slice();
  }, i9.copy = function() {
    return X9().domain([n10, r11]).range(u9).unknown(e14);
  }, y14.apply(M10(i9), arguments);
}
function Z8() {
  var n10 = [0.5], r11 = [0, 1], o15, t10 = 1;
  function u9(e14) {
    return e14 != null && e14 <= e14 ? r11[re5(n10, e14, 0, t10)] : o15;
  }
  return u9.domain = function(e14) {
    return arguments.length ? (n10 = Array.from(e14), t10 = Math.min(n10.length, r11.length - 1), u9) : n10.slice();
  }, u9.range = function(e14) {
    return arguments.length ? (r11 = Array.from(e14), t10 = Math.min(n10.length, r11.length - 1), u9) : r11.slice();
  }, u9.invertExtent = function(e14) {
    var i9 = r11.indexOf(e14);
    return [n10[i9 - 1], n10[i9]];
  }, u9.unknown = function(e14) {
    return arguments.length ? (o15 = e14, u9) : o15;
  }, u9.copy = function() {
    return Z8().domain(n10).range(r11).unknown(o15);
  }, y14.apply(u9, arguments);
}
function gt4(n10) {
  return new Date(n10);
}
function ht4(n10) {
  return n10 instanceof Date ? +n10 : +/* @__PURE__ */ new Date(+n10);
}
function Y8(n10, r11, o15, t10, u9, e14, i9, f10, c16, a11) {
  var s8 = I22(), m18 = s8.invert, l12 = s8.domain, g13 = a11(".%L"), d12 = a11(":%S"), p12 = a11("%I:%M"), x18 = a11("%I %p"), w9 = a11("%a %d"), O12 = a11("%b %d"), T15 = a11("%B"), xn4 = a11("%Y");
  function qn2(h13) {
    return (c16(h13) < h13 ? g13 : f10(h13) < h13 ? d12 : i9(h13) < h13 ? p12 : e14(h13) < h13 ? x18 : t10(h13) < h13 ? u9(h13) < h13 ? w9 : O12 : o15(h13) < h13 ? T15 : xn4)(h13);
  }
  return s8.invert = function(h13) {
    return new Date(m18(h13));
  }, s8.domain = function(h13) {
    return arguments.length ? l12(Array.from(h13, ht4)) : l12().map(gt4);
  }, s8.ticks = function(h13) {
    var q14 = l12();
    return n10(q14[0], q14[q14.length - 1], h13 ?? 10);
  }, s8.tickFormat = function(h13, q14) {
    return q14 == null ? qn2 : a11(q14);
  }, s8.nice = function(h13) {
    var q14 = l12();
    return (!h13 || typeof h13.range != "function") && (h13 = r11(q14[0], q14[q14.length - 1], h13 ?? 10)), h13 ? l12(D16(q14, h13)) : s8;
  }, s8.copy = function() {
    return N18(s8, Y8(n10, r11, o15, t10, u9, e14, i9, f10, c16, a11));
  }, s8;
}
function dn2() {
  return y14.apply(Y8(Ot, bt2, F8, b11, U8, k9, I20, H11, p9, o13).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function yn2() {
  return y14.apply(Y8(kt, zt, Y7, j11, S8, J12, w8, W13, p9, d10).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function H13() {
  var n10 = 0, r11 = 1, o15, t10, u9, e14, i9 = v8, f10 = false, c16;
  function a11(m18) {
    return m18 == null || isNaN(m18 = +m18) ? c16 : i9(u9 === 0 ? 0.5 : (m18 = (e14(m18) - o15) * u9, f10 ? Math.max(0, Math.min(1, m18)) : m18));
  }
  a11.domain = function(m18) {
    return arguments.length ? ([n10, r11] = m18, o15 = e14(n10 = +n10), t10 = e14(r11 = +r11), u9 = o15 === t10 ? 0 : 1 / (t10 - o15), a11) : [n10, r11];
  }, a11.clamp = function(m18) {
    return arguments.length ? (f10 = !!m18, a11) : f10;
  }, a11.interpolator = function(m18) {
    return arguments.length ? (i9 = m18, a11) : i9;
  };
  function s8(m18) {
    return function(l12) {
      var g13, d12;
      return arguments.length ? ([g13, d12] = l12, i9 = m18(g13, d12), a11) : [i9(0), i9(1)];
    };
  }
  return a11.range = s8(y13), a11.rangeRound = s8(yr2), a11.unknown = function(m18) {
    return arguments.length ? (c16 = m18, a11) : c16;
  }, function(m18) {
    return e14 = m18, o15 = m18(n10), t10 = m18(r11), u9 = o15 === t10 ? 0 : 1 / (t10 - o15), a11;
  };
}
function S9(n10, r11) {
  return r11.domain(n10.domain()).interpolator(n10.interpolator()).clamp(n10.clamp()).unknown(n10.unknown());
}
function $12() {
  var n10 = M10(H13()(v8));
  return n10.copy = function() {
    return S9(n10, $12());
  }, k10.apply(n10, arguments);
}
function vn2() {
  var n10 = F9(H13()).domain([1, 10]);
  return n10.copy = function() {
    return S9(n10, vn2()).base(n10.base());
  }, k10.apply(n10, arguments);
}
function Mn2() {
  var n10 = L10(H13());
  return n10.copy = function() {
    return S9(n10, Mn2()).constant(n10.constant());
  }, k10.apply(n10, arguments);
}
function nn2() {
  var n10 = P15(H13());
  return n10.copy = function() {
    return S9(n10, nn2()).exponent(n10.exponent());
  }, k10.apply(n10, arguments);
}
function It3() {
  return nn2.apply(null, arguments).exponent(0.5);
}
function tn2() {
  var n10 = [], r11 = v8;
  function o15(t10) {
    if (t10 != null && !isNaN(t10 = +t10)) return r11((re5(n10, t10, 1) - 1) / (n10.length - 1));
  }
  return o15.domain = function(t10) {
    if (!arguments.length) return n10.slice();
    n10 = [];
    for (let u9 of t10) u9 != null && !isNaN(u9 = +u9) && n10.push(u9);
    return n10.sort(s5), o15;
  }, o15.interpolator = function(t10) {
    return arguments.length ? (r11 = t10, o15) : r11;
  }, o15.range = function() {
    return n10.map((t10, u9) => r11(u9 / (n10.length - 1)));
  }, o15.quantiles = function(t10) {
    return Array.from({ length: t10 + 1 }, (u9, e14) => A7(n10, e14 / t10));
  }, o15.copy = function() {
    return tn2(r11).domain(n10);
  }, k10.apply(o15, arguments);
}
function U9() {
  var n10 = 0, r11 = 0.5, o15 = 1, t10 = 1, u9, e14, i9, f10, c16, a11 = v8, s8, m18 = false, l12;
  function g13(p12) {
    return isNaN(p12 = +p12) ? l12 : (p12 = 0.5 + ((p12 = +s8(p12)) - e14) * (t10 * p12 < t10 * e14 ? f10 : c16), a11(m18 ? Math.max(0, Math.min(1, p12)) : p12));
  }
  g13.domain = function(p12) {
    return arguments.length ? ([n10, r11, o15] = p12, u9 = s8(n10 = +n10), e14 = s8(r11 = +r11), i9 = s8(o15 = +o15), f10 = u9 === e14 ? 0 : 0.5 / (e14 - u9), c16 = e14 === i9 ? 0 : 0.5 / (i9 - e14), t10 = e14 < u9 ? -1 : 1, g13) : [n10, r11, o15];
  }, g13.clamp = function(p12) {
    return arguments.length ? (m18 = !!p12, g13) : m18;
  }, g13.interpolator = function(p12) {
    return arguments.length ? (a11 = p12, g13) : a11;
  };
  function d12(p12) {
    return function(x18) {
      var w9, O12, T15;
      return arguments.length ? ([w9, O12, T15] = x18, a11 = pr2(p12, [w9, O12, T15]), g13) : [a11(0), a11(0.5), a11(1)];
    };
  }
  return g13.range = d12(y13), g13.rangeRound = d12(yr2), g13.unknown = function(p12) {
    return arguments.length ? (l12 = p12, g13) : l12;
  }, function(p12) {
    return s8 = p12, u9 = p12(n10), e14 = p12(r11), i9 = p12(o15), f10 = u9 === e14 ? 0 : 0.5 / (e14 - u9), c16 = e14 === i9 ? 0 : 0.5 / (i9 - e14), t10 = e14 < u9 ? -1 : 1, g13;
  };
}
function rn3() {
  var n10 = M10(U9()(v8));
  return n10.copy = function() {
    return S9(n10, rn3());
  }, k10.apply(n10, arguments);
}
function wn2() {
  var n10 = F9(U9()).domain([0.1, 1, 10]);
  return n10.copy = function() {
    return S9(n10, wn2()).base(n10.base());
  }, k10.apply(n10, arguments);
}
function kn2() {
  var n10 = L10(U9());
  return n10.copy = function() {
    return S9(n10, kn2()).constant(n10.constant());
  }, k10.apply(n10, arguments);
}
function en2() {
  var n10 = P15(U9());
  return n10.copy = function() {
    return S9(n10, en2()).exponent(n10.exponent());
  }, k10.apply(n10, arguments);
}
function Tt2() {
  return en2.apply(null, arguments).exponent(0.5);
}

// http-url:https://esm.sh/d3-path@3.1.0/es2022/d3-path.mjs
var c14 = Math.PI;
var y15 = 2 * c14;
var u8 = 1e-6;
var q12 = y15 - u8;
function A12($14) {
  this._ += $14[0];
  for (let t10 = 1, h13 = $14.length; t10 < h13; ++t10) this._ += arguments[t10] + $14[t10];
}
function C10($14) {
  let t10 = Math.floor($14);
  if (!(t10 >= 0)) throw new Error(`invalid digits: ${$14}`);
  if (t10 > 15) return A12;
  let h13 = 10 ** t10;
  return function(i9) {
    this._ += i9[0];
    for (let s8 = 1, e14 = i9.length; s8 < e14; ++s8) this._ += Math.round(arguments[s8] * h13) / h13 + i9[s8];
  };
}
var d11 = class {
  constructor(t10) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t10 == null ? A12 : C10(t10);
  }
  moveTo(t10, h13) {
    this._append`M${this._x0 = this._x1 = +t10},${this._y0 = this._y1 = +h13}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t10, h13) {
    this._append`L${this._x1 = +t10},${this._y1 = +h13}`;
  }
  quadraticCurveTo(t10, h13, i9, s8) {
    this._append`Q${+t10},${+h13},${this._x1 = +i9},${this._y1 = +s8}`;
  }
  bezierCurveTo(t10, h13, i9, s8, e14, a11) {
    this._append`C${+t10},${+h13},${+i9},${+s8},${this._x1 = +e14},${this._y1 = +a11}`;
  }
  arcTo(t10, h13, i9, s8, e14) {
    if (t10 = +t10, h13 = +h13, i9 = +i9, s8 = +s8, e14 = +e14, e14 < 0) throw new Error(`negative radius: ${e14}`);
    let a11 = this._x1, r11 = this._y1, l12 = i9 - t10, p12 = s8 - h13, _14 = a11 - t10, o15 = r11 - h13, n10 = _14 * _14 + o15 * o15;
    if (this._x1 === null) this._append`M${this._x1 = t10},${this._y1 = h13}`;
    else if (n10 > u8) if (!(Math.abs(o15 * l12 - p12 * _14) > u8) || !e14) this._append`L${this._x1 = t10},${this._y1 = h13}`;
    else {
      let f10 = i9 - a11, M13 = s8 - r11, v9 = l12 * l12 + p12 * p12, L12 = f10 * f10 + M13 * M13, b14 = Math.sqrt(v9), T15 = Math.sqrt(n10), m18 = e14 * Math.tan((c14 - Math.acos((v9 + n10 - L12) / (2 * b14 * T15))) / 2), x18 = m18 / T15, w9 = m18 / b14;
      Math.abs(x18 - 1) > u8 && this._append`L${t10 + x18 * _14},${h13 + x18 * o15}`, this._append`A${e14},${e14},0,0,${+(o15 * f10 > _14 * M13)},${this._x1 = t10 + w9 * l12},${this._y1 = h13 + w9 * p12}`;
    }
  }
  arc(t10, h13, i9, s8, e14, a11) {
    if (t10 = +t10, h13 = +h13, i9 = +i9, a11 = !!a11, i9 < 0) throw new Error(`negative radius: ${i9}`);
    let r11 = i9 * Math.cos(s8), l12 = i9 * Math.sin(s8), p12 = t10 + r11, _14 = h13 + l12, o15 = 1 ^ a11, n10 = a11 ? s8 - e14 : e14 - s8;
    this._x1 === null ? this._append`M${p12},${_14}` : (Math.abs(this._x1 - p12) > u8 || Math.abs(this._y1 - _14) > u8) && this._append`L${p12},${_14}`, i9 && (n10 < 0 && (n10 = n10 % y15 + y15), n10 > q12 ? this._append`A${i9},${i9},0,1,${o15},${t10 - r11},${h13 - l12}A${i9},${i9},0,1,${o15},${this._x1 = p12},${this._y1 = _14}` : n10 > u8 && this._append`A${i9},${i9},0,${+(n10 >= c14)},${o15},${this._x1 = t10 + i9 * Math.cos(e14)},${this._y1 = h13 + i9 * Math.sin(e14)}`);
  }
  rect(t10, h13, i9, s8) {
    this._append`M${this._x0 = this._x1 = +t10},${this._y0 = this._y1 = +h13}h${i9 = +i9}v${+s8}h${-i9}Z`;
  }
  toString() {
    return this._;
  }
};
function E15() {
  return new d11();
}
E15.prototype = d11.prototype;

// http-url:https://esm.sh/d3-shape@3.2.0/es2022/d3-shape.mjs
function c15(t10) {
  return function() {
    return t10;
  };
}
var Y9 = Math.cos;
var E16 = Math.sin;
var x17 = Math.sqrt;
var S10 = 1e-12;
var B17 = Math.PI;
var rt3 = B17 / 2;
var M11 = 2 * B17;
function I23(t10) {
  let n10 = 3;
  return t10.digits = function(i9) {
    if (!arguments.length) return n10;
    if (i9 == null) n10 = null;
    else {
      let e14 = Math.floor(i9);
      if (!(e14 >= 0)) throw new RangeError(`invalid digits: ${i9}`);
      n10 = e14;
    }
    return t10;
  }, () => new d11(n10);
}
var rn4 = Array.prototype.slice;
function G19(t10) {
  return typeof t10 == "object" && "length" in t10 ? t10 : Array.from(t10);
}
function sn3(t10) {
  this._context = t10;
}
sn3.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t10, n10) {
  switch (t10 = +t10, n10 = +n10, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(t10, n10) : this._context.moveTo(t10, n10);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(t10, n10);
      break;
  }
} };
function K12(t10) {
  return new sn3(t10);
}
function Z9(t10) {
  return t10[0];
}
function j14(t10) {
  return t10[1];
}
function st3(t10, n10) {
  var i9 = c15(true), e14 = null, s8 = K12, o15 = null, a11 = I23(r11);
  t10 = typeof t10 == "function" ? t10 : t10 === void 0 ? Z9 : c15(t10), n10 = typeof n10 == "function" ? n10 : n10 === void 0 ? j14 : c15(n10);
  function r11(u9) {
    var l12, h13 = (u9 = G19(u9)).length, f10, _14 = false, m18;
    for (e14 == null && (o15 = s8(m18 = a11())), l12 = 0; l12 <= h13; ++l12) !(l12 < h13 && i9(f10 = u9[l12], l12, u9)) === _14 && ((_14 = !_14) ? o15.lineStart() : o15.lineEnd()), _14 && o15.point(+t10(f10, l12, u9), +n10(f10, l12, u9));
    if (m18) return o15 = null, m18 + "" || null;
  }
  return r11.x = function(u9) {
    return arguments.length ? (t10 = typeof u9 == "function" ? u9 : c15(+u9), r11) : t10;
  }, r11.y = function(u9) {
    return arguments.length ? (n10 = typeof u9 == "function" ? u9 : c15(+u9), r11) : n10;
  }, r11.defined = function(u9) {
    return arguments.length ? (i9 = typeof u9 == "function" ? u9 : c15(!!u9), r11) : i9;
  }, r11.curve = function(u9) {
    return arguments.length ? (s8 = u9, e14 != null && (o15 = s8(e14)), r11) : s8;
  }, r11.context = function(u9) {
    return arguments.length ? (u9 == null ? e14 = o15 = null : o15 = s8(e14 = u9), r11) : e14;
  }, r11;
}
function qt(t10, n10, i9) {
  var e14 = null, s8 = c15(true), o15 = null, a11 = K12, r11 = null, u9 = I23(l12);
  t10 = typeof t10 == "function" ? t10 : t10 === void 0 ? Z9 : c15(+t10), n10 = typeof n10 == "function" ? n10 : n10 === void 0 ? c15(0) : c15(+n10), i9 = typeof i9 == "function" ? i9 : i9 === void 0 ? j14 : c15(+i9);
  function l12(f10) {
    var _14, m18, y16, v9 = (f10 = G19(f10)).length, k12, d12 = false, w9, b14 = new Array(v9), T15 = new Array(v9);
    for (o15 == null && (r11 = a11(w9 = u9())), _14 = 0; _14 <= v9; ++_14) {
      if (!(_14 < v9 && s8(k12 = f10[_14], _14, f10)) === d12) if (d12 = !d12) m18 = _14, r11.areaStart(), r11.lineStart();
      else {
        for (r11.lineEnd(), r11.lineStart(), y16 = _14 - 1; y16 >= m18; --y16) r11.point(b14[y16], T15[y16]);
        r11.lineEnd(), r11.areaEnd();
      }
      d12 && (b14[_14] = +t10(k12, _14, f10), T15[_14] = +n10(k12, _14, f10), r11.point(e14 ? +e14(k12, _14, f10) : b14[_14], i9 ? +i9(k12, _14, f10) : T15[_14]));
    }
    if (w9) return r11 = null, w9 + "" || null;
  }
  function h13() {
    return st3().defined(s8).curve(a11).context(o15);
  }
  return l12.x = function(f10) {
    return arguments.length ? (t10 = typeof f10 == "function" ? f10 : c15(+f10), e14 = null, l12) : t10;
  }, l12.x0 = function(f10) {
    return arguments.length ? (t10 = typeof f10 == "function" ? f10 : c15(+f10), l12) : t10;
  }, l12.x1 = function(f10) {
    return arguments.length ? (e14 = f10 == null ? null : typeof f10 == "function" ? f10 : c15(+f10), l12) : e14;
  }, l12.y = function(f10) {
    return arguments.length ? (n10 = typeof f10 == "function" ? f10 : c15(+f10), i9 = null, l12) : n10;
  }, l12.y0 = function(f10) {
    return arguments.length ? (n10 = typeof f10 == "function" ? f10 : c15(+f10), l12) : n10;
  }, l12.y1 = function(f10) {
    return arguments.length ? (i9 = f10 == null ? null : typeof f10 == "function" ? f10 : c15(+f10), l12) : i9;
  }, l12.lineX0 = l12.lineY0 = function() {
    return h13().x(t10).y(n10);
  }, l12.lineY1 = function() {
    return h13().x(t10).y(i9);
  }, l12.lineX1 = function() {
    return h13().x(e14).y(n10);
  }, l12.defined = function(f10) {
    return arguments.length ? (s8 = typeof f10 == "function" ? f10 : c15(!!f10), l12) : s8;
  }, l12.curve = function(f10) {
    return arguments.length ? (a11 = f10, o15 != null && (r11 = a11(o15)), l12) : a11;
  }, l12.context = function(f10) {
    return arguments.length ? (f10 == null ? o15 = r11 = null : r11 = a11(o15 = f10), l12) : o15;
  }, l12;
}
var xt4 = tt5(K12);
function un4(t10) {
  this._curve = t10;
}
un4.prototype = { areaStart: function() {
  this._curve.areaStart();
}, areaEnd: function() {
  this._curve.areaEnd();
}, lineStart: function() {
  this._curve.lineStart();
}, lineEnd: function() {
  this._curve.lineEnd();
}, point: function(t10, n10) {
  this._curve.point(n10 * Math.sin(t10), n10 * -Math.cos(t10));
} };
function tt5(t10) {
  function n10(i9) {
    return new un4(t10(i9));
  }
  return n10._curve = t10, n10;
}
var dt3 = class {
  constructor(n10, i9) {
    this._context = n10, this._x = i9;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(n10, i9) {
    switch (n10 = +n10, i9 = +i9, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(n10, i9) : this._context.moveTo(n10, i9);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + n10) / 2, this._y0, this._x0, i9, n10, i9) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + i9) / 2, n10, this._y0, n10, i9);
        break;
      }
    }
    this._x0 = n10, this._y0 = i9;
  }
};
function Xt(t10) {
  return new dt3(t10, true);
}
function Yt2(t10) {
  return new dt3(t10, false);
}
var Wn2 = x17(3);
var at3 = { draw(t10, n10) {
  let i9 = x17(n10 / B17);
  t10.moveTo(i9, 0), t10.arc(0, 0, i9, 0, M11);
} };
var Lt2 = { draw(t10, n10) {
  let i9 = x17(n10 / 5) / 2;
  t10.moveTo(-3 * i9, -i9), t10.lineTo(-i9, -i9), t10.lineTo(-i9, -3 * i9), t10.lineTo(i9, -3 * i9), t10.lineTo(i9, -i9), t10.lineTo(3 * i9, -i9), t10.lineTo(3 * i9, i9), t10.lineTo(i9, i9), t10.lineTo(i9, 3 * i9), t10.lineTo(-i9, 3 * i9), t10.lineTo(-i9, i9), t10.lineTo(-3 * i9, i9), t10.closePath();
} };
var cn3 = x17(1 / 3);
var $n = cn3 * 2;
var zt2 = { draw(t10, n10) {
  let i9 = x17(n10 / $n), e14 = i9 * cn3;
  t10.moveTo(0, -i9), t10.lineTo(e14, 0), t10.lineTo(0, i9), t10.lineTo(-e14, 0), t10.closePath();
} };
var Vt = { draw(t10, n10) {
  let i9 = x17(n10), e14 = -i9 / 2;
  t10.rect(e14, e14, i9, i9);
} };
var Gn2 = 0.8908130915292852;
var pn3 = E16(B17 / 10) / E16(7 * B17 / 10);
var Jn2 = E16(M11 / 10) * pn3;
var Kn2 = -Y9(M11 / 10) * pn3;
var Ht2 = { draw(t10, n10) {
  let i9 = x17(n10 * Gn2), e14 = Jn2 * i9, s8 = Kn2 * i9;
  t10.moveTo(0, -i9), t10.lineTo(e14, s8);
  for (let o15 = 1; o15 < 5; ++o15) {
    let a11 = M11 * o15 / 5, r11 = Y9(a11), u9 = E16(a11);
    t10.lineTo(u9 * i9, -r11 * i9), t10.lineTo(r11 * e14 - u9 * s8, u9 * e14 + r11 * s8);
  }
  t10.closePath();
} };
var Wt2 = x17(3);
var $t2 = { draw(t10, n10) {
  let i9 = -x17(n10 / (Wt2 * 3));
  t10.moveTo(0, i9 * 2), t10.lineTo(-Wt2 * i9, -i9), t10.lineTo(Wt2 * i9, -i9), t10.closePath();
} };
var Qn = x17(3);
var q13 = -0.5;
var O11 = x17(3) / 2;
var Jt = 1 / x17(12);
var Un2 = (Jt / 2 + 1) * 3;
var Kt = { draw(t10, n10) {
  let i9 = x17(n10 / Un2), e14 = i9 / 2, s8 = i9 * Jt, o15 = e14, a11 = i9 * Jt + i9, r11 = -o15, u9 = a11;
  t10.moveTo(e14, s8), t10.lineTo(o15, a11), t10.lineTo(r11, u9), t10.lineTo(q13 * e14 - O11 * s8, O11 * e14 + q13 * s8), t10.lineTo(q13 * o15 - O11 * a11, O11 * o15 + q13 * a11), t10.lineTo(q13 * r11 - O11 * u9, O11 * r11 + q13 * u9), t10.lineTo(q13 * e14 + O11 * s8, q13 * s8 - O11 * e14), t10.lineTo(q13 * o15 + O11 * a11, q13 * a11 - O11 * o15), t10.lineTo(q13 * r11 + O11 * u9, q13 * u9 - O11 * r11), t10.closePath();
} };
function xn2(t10, n10) {
  let i9 = null, e14 = I23(s8);
  t10 = typeof t10 == "function" ? t10 : c15(t10 || at3), n10 = typeof n10 == "function" ? n10 : c15(n10 === void 0 ? 64 : +n10);
  function s8() {
    let o15;
    if (i9 || (i9 = o15 = e14()), t10.apply(this, arguments).draw(i9, +n10.apply(this, arguments)), o15) return i9 = null, o15 + "" || null;
  }
  return s8.type = function(o15) {
    return arguments.length ? (t10 = typeof o15 == "function" ? o15 : c15(o15), s8) : t10;
  }, s8.size = function(o15) {
    return arguments.length ? (n10 = typeof o15 == "function" ? o15 : c15(+o15), s8) : n10;
  }, s8.context = function(o15) {
    return arguments.length ? (i9 = o15 ?? null, s8) : i9;
  }, s8;
}
function X10() {
}
function et5(t10, n10, i9) {
  t10._context.bezierCurveTo((2 * t10._x0 + t10._x1) / 3, (2 * t10._y0 + t10._y1) / 3, (t10._x0 + 2 * t10._x1) / 3, (t10._y0 + 2 * t10._y1) / 3, (t10._x0 + 4 * t10._x1 + n10) / 6, (t10._y0 + 4 * t10._y1 + i9) / 6);
}
function lt5(t10) {
  this._context = t10;
}
lt5.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      et5(this, this._x1, this._y1);
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t10, n10) {
  switch (t10 = +t10, n10 = +n10, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(t10, n10) : this._context.moveTo(t10, n10);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
    default:
      et5(this, t10, n10);
      break;
  }
  this._x0 = this._x1, this._x1 = t10, this._y0 = this._y1, this._y1 = n10;
} };
function jn(t10) {
  return new lt5(t10);
}
function dn3(t10) {
  this._context = t10;
}
dn3.prototype = { areaStart: X10, areaEnd: X10, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x2, this._y2), this._context.closePath();
      break;
    }
    case 2: {
      this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      break;
    }
  }
}, point: function(t10, n10) {
  switch (t10 = +t10, n10 = +n10, this._point) {
    case 0:
      this._point = 1, this._x2 = t10, this._y2 = n10;
      break;
    case 1:
      this._point = 2, this._x3 = t10, this._y3 = n10;
      break;
    case 2:
      this._point = 3, this._x4 = t10, this._y4 = n10, this._context.moveTo((this._x0 + 4 * this._x1 + t10) / 6, (this._y0 + 4 * this._y1 + n10) / 6);
      break;
    default:
      et5(this, t10, n10);
      break;
  }
  this._x0 = this._x1, this._x1 = t10, this._y0 = this._y1, this._y1 = n10;
} };
function ti(t10) {
  return new dn3(t10);
}
function yn3(t10) {
  this._context = t10;
}
yn3.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t10, n10) {
  switch (t10 = +t10, n10 = +n10, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
      var i9 = (this._x0 + 4 * this._x1 + t10) / 6, e14 = (this._y0 + 4 * this._y1 + n10) / 6;
      this._line ? this._context.lineTo(i9, e14) : this._context.moveTo(i9, e14);
      break;
    case 3:
      this._point = 4;
    default:
      et5(this, t10, n10);
      break;
  }
  this._x0 = this._x1, this._x1 = t10, this._y0 = this._y1, this._y1 = n10;
} };
function ni(t10) {
  return new yn3(t10);
}
function gn3(t10, n10) {
  this._basis = new lt5(t10), this._beta = n10;
}
gn3.prototype = { lineStart: function() {
  this._x = [], this._y = [], this._basis.lineStart();
}, lineEnd: function() {
  var t10 = this._x, n10 = this._y, i9 = t10.length - 1;
  if (i9 > 0) for (var e14 = t10[0], s8 = n10[0], o15 = t10[i9] - e14, a11 = n10[i9] - s8, r11 = -1, u9; ++r11 <= i9; ) u9 = r11 / i9, this._basis.point(this._beta * t10[r11] + (1 - this._beta) * (e14 + u9 * o15), this._beta * n10[r11] + (1 - this._beta) * (s8 + u9 * a11));
  this._x = this._y = null, this._basis.lineEnd();
}, point: function(t10, n10) {
  this._x.push(+t10), this._y.push(+n10);
} };
var ii = function t3(n10) {
  function i9(e14) {
    return n10 === 1 ? new lt5(e14) : new gn3(e14, n10);
  }
  return i9.beta = function(e14) {
    return t3(+e14);
  }, i9;
}(0.85);
function ot3(t10, n10, i9) {
  t10._context.bezierCurveTo(t10._x1 + t10._k * (t10._x2 - t10._x0), t10._y1 + t10._k * (t10._y2 - t10._y0), t10._x2 + t10._k * (t10._x1 - n10), t10._y2 + t10._k * (t10._y1 - i9), t10._x2, t10._y2);
}
function vt3(t10, n10) {
  this._context = t10, this._k = (1 - n10) / 6;
}
vt3.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x2, this._y2);
      break;
    case 3:
      ot3(this, this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t10, n10) {
  switch (t10 = +t10, n10 = +n10, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(t10, n10) : this._context.moveTo(t10, n10);
      break;
    case 1:
      this._point = 2, this._x1 = t10, this._y1 = n10;
      break;
    case 2:
      this._point = 3;
    default:
      ot3(this, t10, n10);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = t10, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n10;
} };
var ei = function t4(n10) {
  function i9(e14) {
    return new vt3(e14, n10);
  }
  return i9.tension = function(e14) {
    return t4(+e14);
  }, i9;
}(0);
function Tt3(t10, n10) {
  this._context = t10, this._k = (1 - n10) / 6;
}
Tt3.prototype = { areaStart: X10, areaEnd: X10, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x3, this._y3), this._context.closePath();
      break;
    }
    case 2: {
      this._context.lineTo(this._x3, this._y3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
      break;
    }
  }
}, point: function(t10, n10) {
  switch (t10 = +t10, n10 = +n10, this._point) {
    case 0:
      this._point = 1, this._x3 = t10, this._y3 = n10;
      break;
    case 1:
      this._point = 2, this._context.moveTo(this._x4 = t10, this._y4 = n10);
      break;
    case 2:
      this._point = 3, this._x5 = t10, this._y5 = n10;
      break;
    default:
      ot3(this, t10, n10);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = t10, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n10;
} };
var oi = function t5(n10) {
  function i9(e14) {
    return new Tt3(e14, n10);
  }
  return i9.tension = function(e14) {
    return t5(+e14);
  }, i9;
}(0);
function bt3(t10, n10) {
  this._context = t10, this._k = (1 - n10) / 6;
}
bt3.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t10, n10) {
  switch (t10 = +t10, n10 = +n10, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
      break;
    case 3:
      this._point = 4;
    default:
      ot3(this, t10, n10);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = t10, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n10;
} };
var ri = function t6(n10) {
  function i9(e14) {
    return new bt3(e14, n10);
  }
  return i9.tension = function(e14) {
    return t6(+e14);
  }, i9;
}(0);
function ut5(t10, n10, i9) {
  var e14 = t10._x1, s8 = t10._y1, o15 = t10._x2, a11 = t10._y2;
  if (t10._l01_a > S10) {
    var r11 = 2 * t10._l01_2a + 3 * t10._l01_a * t10._l12_a + t10._l12_2a, u9 = 3 * t10._l01_a * (t10._l01_a + t10._l12_a);
    e14 = (e14 * r11 - t10._x0 * t10._l12_2a + t10._x2 * t10._l01_2a) / u9, s8 = (s8 * r11 - t10._y0 * t10._l12_2a + t10._y2 * t10._l01_2a) / u9;
  }
  if (t10._l23_a > S10) {
    var l12 = 2 * t10._l23_2a + 3 * t10._l23_a * t10._l12_a + t10._l12_2a, h13 = 3 * t10._l23_a * (t10._l23_a + t10._l12_a);
    o15 = (o15 * l12 + t10._x1 * t10._l23_2a - n10 * t10._l12_2a) / h13, a11 = (a11 * l12 + t10._y1 * t10._l23_2a - i9 * t10._l12_2a) / h13;
  }
  t10._context.bezierCurveTo(e14, s8, o15, a11, t10._x2, t10._y2);
}
function vn3(t10, n10) {
  this._context = t10, this._alpha = n10;
}
vn3.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x2, this._y2);
      break;
    case 3:
      this.point(this._x2, this._y2);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t10, n10) {
  if (t10 = +t10, n10 = +n10, this._point) {
    var i9 = this._x2 - t10, e14 = this._y2 - n10;
    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i9 * i9 + e14 * e14, this._alpha));
  }
  switch (this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(t10, n10) : this._context.moveTo(t10, n10);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
    default:
      ut5(this, t10, n10);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t10, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n10;
} };
var si = function t7(n10) {
  function i9(e14) {
    return n10 ? new vn3(e14, n10) : new vt3(e14, 0);
  }
  return i9.alpha = function(e14) {
    return t7(+e14);
  }, i9;
}(0.5);
function Tn2(t10, n10) {
  this._context = t10, this._alpha = n10;
}
Tn2.prototype = { areaStart: X10, areaEnd: X10, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x3, this._y3), this._context.closePath();
      break;
    }
    case 2: {
      this._context.lineTo(this._x3, this._y3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
      break;
    }
  }
}, point: function(t10, n10) {
  if (t10 = +t10, n10 = +n10, this._point) {
    var i9 = this._x2 - t10, e14 = this._y2 - n10;
    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i9 * i9 + e14 * e14, this._alpha));
  }
  switch (this._point) {
    case 0:
      this._point = 1, this._x3 = t10, this._y3 = n10;
      break;
    case 1:
      this._point = 2, this._context.moveTo(this._x4 = t10, this._y4 = n10);
      break;
    case 2:
      this._point = 3, this._x5 = t10, this._y5 = n10;
      break;
    default:
      ut5(this, t10, n10);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t10, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n10;
} };
var ai = function t8(n10) {
  function i9(e14) {
    return n10 ? new Tn2(e14, n10) : new Tt3(e14, 0);
  }
  return i9.alpha = function(e14) {
    return t8(+e14);
  }, i9;
}(0.5);
function bn2(t10, n10) {
  this._context = t10, this._alpha = n10;
}
bn2.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t10, n10) {
  if (t10 = +t10, n10 = +n10, this._point) {
    var i9 = this._x2 - t10, e14 = this._y2 - n10;
    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i9 * i9 + e14 * e14, this._alpha));
  }
  switch (this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
      break;
    case 3:
      this._point = 4;
    default:
      ut5(this, t10, n10);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t10, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n10;
} };
var li = function t9(n10) {
  function i9(e14) {
    return n10 ? new bn2(e14, n10) : new bt3(e14, 0);
  }
  return i9.alpha = function(e14) {
    return t9(+e14);
  }, i9;
}(0.5);
function kn3(t10) {
  this._context = t10;
}
kn3.prototype = { areaStart: X10, areaEnd: X10, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(t10, n10) {
  t10 = +t10, n10 = +n10, this._point ? this._context.lineTo(t10, n10) : (this._point = 1, this._context.moveTo(t10, n10));
} };
function ui(t10) {
  return new kn3(t10);
}
function wn3(t10) {
  return t10 < 0 ? -1 : 1;
}
function Sn3(t10, n10, i9) {
  var e14 = t10._x1 - t10._x0, s8 = n10 - t10._x1, o15 = (t10._y1 - t10._y0) / (e14 || s8 < 0 && -0), a11 = (i9 - t10._y1) / (s8 || e14 < 0 && -0), r11 = (o15 * s8 + a11 * e14) / (e14 + s8);
  return (wn3(o15) + wn3(a11)) * Math.min(Math.abs(o15), Math.abs(a11), 0.5 * Math.abs(r11)) || 0;
}
function Nn(t10, n10) {
  var i9 = t10._x1 - t10._x0;
  return i9 ? (3 * (t10._y1 - t10._y0) / i9 - n10) / 2 : n10;
}
function Qt(t10, n10, i9) {
  var e14 = t10._x0, s8 = t10._y0, o15 = t10._x1, a11 = t10._y1, r11 = (o15 - e14) / 3;
  t10._context.bezierCurveTo(e14 + r11, s8 + r11 * n10, o15 - r11, a11 - r11 * i9, o15, a11);
}
function kt2(t10) {
  this._context = t10;
}
kt2.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
    case 3:
      Qt(this, this._t0, Nn(this, this._t0));
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t10, n10) {
  var i9 = NaN;
  if (t10 = +t10, n10 = +n10, !(t10 === this._x1 && n10 === this._y1)) {
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t10, n10) : this._context.moveTo(t10, n10);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, Qt(this, Nn(this, i9 = Sn3(this, t10, n10)), i9);
        break;
      default:
        Qt(this, this._t0, i9 = Sn3(this, t10, n10));
        break;
    }
    this._x0 = this._x1, this._x1 = t10, this._y0 = this._y1, this._y1 = n10, this._t0 = i9;
  }
} };
function En(t10) {
  this._context = new An(t10);
}
(En.prototype = Object.create(kt2.prototype)).point = function(t10, n10) {
  kt2.prototype.point.call(this, n10, t10);
};
function An(t10) {
  this._context = t10;
}
An.prototype = { moveTo: function(t10, n10) {
  this._context.moveTo(n10, t10);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(t10, n10) {
  this._context.lineTo(n10, t10);
}, bezierCurveTo: function(t10, n10, i9, e14, s8, o15) {
  this._context.bezierCurveTo(n10, t10, e14, i9, o15, s8);
} };
function hi(t10) {
  return new kt2(t10);
}
function fi(t10) {
  return new En(t10);
}
function Pn(t10) {
  this._context = t10;
}
Pn.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var t10 = this._x, n10 = this._y, i9 = t10.length;
  if (i9) if (this._line ? this._context.lineTo(t10[0], n10[0]) : this._context.moveTo(t10[0], n10[0]), i9 === 2) this._context.lineTo(t10[1], n10[1]);
  else for (var e14 = Rn(t10), s8 = Rn(n10), o15 = 0, a11 = 1; a11 < i9; ++o15, ++a11) this._context.bezierCurveTo(e14[0][o15], s8[0][o15], e14[1][o15], s8[1][o15], t10[a11], n10[a11]);
  (this._line || this._line !== 0 && i9 === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(t10, n10) {
  this._x.push(+t10), this._y.push(+n10);
} };
function Rn(t10) {
  var n10, i9 = t10.length - 1, e14, s8 = new Array(i9), o15 = new Array(i9), a11 = new Array(i9);
  for (s8[0] = 0, o15[0] = 2, a11[0] = t10[0] + 2 * t10[1], n10 = 1; n10 < i9 - 1; ++n10) s8[n10] = 1, o15[n10] = 4, a11[n10] = 4 * t10[n10] + 2 * t10[n10 + 1];
  for (s8[i9 - 1] = 2, o15[i9 - 1] = 7, a11[i9 - 1] = 8 * t10[i9 - 1] + t10[i9], n10 = 1; n10 < i9; ++n10) e14 = s8[n10] / o15[n10 - 1], o15[n10] -= e14, a11[n10] -= e14 * a11[n10 - 1];
  for (s8[i9 - 1] = a11[i9 - 1] / o15[i9 - 1], n10 = i9 - 2; n10 >= 0; --n10) s8[n10] = (a11[n10] - s8[n10 + 1]) / o15[n10];
  for (o15[i9 - 1] = (t10[i9] + s8[i9 - 1]) / 2, n10 = 0; n10 < i9 - 1; ++n10) o15[n10] = 2 * t10[n10 + 1] - s8[n10 + 1];
  return [s8, o15];
}
function _i(t10) {
  return new Pn(t10);
}
function wt3(t10, n10) {
  this._context = t10, this._t = n10;
}
wt3.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = this._y = NaN, this._point = 0;
}, lineEnd: function() {
  0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
}, point: function(t10, n10) {
  switch (t10 = +t10, n10 = +n10, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(t10, n10) : this._context.moveTo(t10, n10);
      break;
    case 1:
      this._point = 2;
    default: {
      if (this._t <= 0) this._context.lineTo(this._x, n10), this._context.lineTo(t10, n10);
      else {
        var i9 = this._x * (1 - this._t) + t10 * this._t;
        this._context.lineTo(i9, this._y), this._context.lineTo(i9, n10);
      }
      break;
    }
  }
  this._x = t10, this._y = n10;
} };
function ci(t10) {
  return new wt3(t10, 0.5);
}
function pi(t10) {
  return new wt3(t10, 0);
}
function mi(t10) {
  return new wt3(t10, 1);
}
function D17(t10, n10) {
  if ((a11 = t10.length) > 1) for (var i9 = 1, e14, s8, o15 = t10[n10[0]], a11, r11 = o15.length; i9 < a11; ++i9) for (s8 = o15, o15 = t10[n10[i9]], e14 = 0; e14 < r11; ++e14) o15[e14][1] += o15[e14][0] = isNaN(s8[e14][1]) ? s8[e14][0] : s8[e14][1];
}
function V13(t10) {
  for (var n10 = t10.length, i9 = new Array(n10); --n10 >= 0; ) i9[n10] = n10;
  return i9;
}
function xi(t10, n10) {
  return t10[n10];
}
function di(t10) {
  let n10 = [];
  return n10.key = t10, n10;
}
function yi() {
  var t10 = c15([]), n10 = V13, i9 = D17, e14 = xi;
  function s8(o15) {
    var a11 = Array.from(t10.apply(this, arguments), di), r11, u9 = a11.length, l12 = -1, h13;
    for (let f10 of o15) for (r11 = 0, ++l12; r11 < u9; ++r11) (a11[r11][l12] = [0, +e14(f10, a11[r11].key, l12, o15)]).data = f10;
    for (r11 = 0, h13 = G19(n10(a11)); r11 < u9; ++r11) a11[h13[r11]].index = r11;
    return i9(a11, h13), a11;
  }
  return s8.keys = function(o15) {
    return arguments.length ? (t10 = typeof o15 == "function" ? o15 : c15(Array.from(o15)), s8) : t10;
  }, s8.value = function(o15) {
    return arguments.length ? (e14 = typeof o15 == "function" ? o15 : c15(+o15), s8) : e14;
  }, s8.order = function(o15) {
    return arguments.length ? (n10 = o15 == null ? V13 : typeof o15 == "function" ? o15 : c15(Array.from(o15)), s8) : n10;
  }, s8.offset = function(o15) {
    return arguments.length ? (i9 = o15 ?? D17, s8) : i9;
  }, s8;
}
function gi(t10, n10) {
  if ((e14 = t10.length) > 0) {
    for (var i9, e14, s8 = 0, o15 = t10[0].length, a11; s8 < o15; ++s8) {
      for (a11 = i9 = 0; i9 < e14; ++i9) a11 += t10[i9][s8][1] || 0;
      if (a11) for (i9 = 0; i9 < e14; ++i9) t10[i9][s8][1] /= a11;
    }
    D17(t10, n10);
  }
}
function Ti(t10, n10) {
  if ((s8 = t10.length) > 0) {
    for (var i9 = 0, e14 = t10[n10[0]], s8, o15 = e14.length; i9 < o15; ++i9) {
      for (var a11 = 0, r11 = 0; a11 < s8; ++a11) r11 += t10[a11][i9][1] || 0;
      e14[i9][1] += e14[i9][0] = -r11 / 2;
    }
    D17(t10, n10);
  }
}
function bi(t10, n10) {
  if (!(!((a11 = t10.length) > 0) || !((o15 = (s8 = t10[n10[0]]).length) > 0))) {
    for (var i9 = 0, e14 = 1, s8, o15, a11; e14 < o15; ++e14) {
      for (var r11 = 0, u9 = 0, l12 = 0; r11 < a11; ++r11) {
        for (var h13 = t10[n10[r11]], f10 = h13[e14][1] || 0, _14 = h13[e14 - 1][1] || 0, m18 = (f10 - _14) / 2, y16 = 0; y16 < r11; ++y16) {
          var v9 = t10[n10[y16]], k12 = v9[e14][1] || 0, d12 = v9[e14 - 1][1] || 0;
          m18 += k12 - d12;
        }
        u9 += f10, l12 += m18 * f10;
      }
      s8[e14 - 1][1] += s8[e14 - 1][0] = i9, u9 && (i9 -= l12 / u9);
    }
    s8[e14 - 1][1] += s8[e14 - 1][0] = i9, D17(t10, n10);
  }
}

// http-url:https://esm.sh/recharts@3.8.1/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/recharts.mjs
import * as Co from "react";
import { forwardRef as c0 } from "react";
import { clsx as s0 } from "clsx";
import { isValidElement as n0 } from "react";
import { isValidElement as r0 } from "react";
import * as jo from "react";
import { clsx as p0 } from "clsx";
import * as Nr2 from "react";
import { useEffect as yp } from "react";
import { createPortal as mw } from "react-dom";
import { createContext as m0, useContext as v0 } from "react";
import * as br from "react";
import { clsx as H0 } from "clsx";
import * as wf from "react";
import { clsx as D0 } from "clsx";
import { isValidElement as _0 } from "react";
import { useContext as Df, useMemo as Q0 } from "react";
import { createContext as $0 } from "react";
import { useCallback as oO, useState as lO } from "react";
import { useEffect as up } from "react";
import * as Qf from "react";
import { createContext as TO, useContext as LO } from "react";
import { clsx as XO } from "clsx";
import * as Ba from "react";
import { createContext as GO, forwardRef as lp, useCallback as HO, useContext as YO, useEffect as UO, useImperativeHandle as ZO, useMemo as qO, useRef as op, useState as $O } from "react";
import * as $r from "react";
import { useEffect as ZR } from "react";
import { createPortal as qR } from "react-dom";
import * as dt4 from "react";
import { clsx as bp } from "clsx";
import * as fa from "react";
import { clsx as Cw } from "clsx";
import { useEffect as Lw, useState as Nw } from "react";
import * as Xl from "react";
import { cloneElement as wR, createElement as ER, isValidElement as SR } from "react";
import { clsx as IR } from "clsx";
import * as jp from "react";
import { clsx as aE } from "clsx";
import * as Tp from "react";
import { clsx as pE } from "clsx";
import * as tl from "react";
import { useEffect as FE, useMemo as VE, useRef as Si, useState as XE } from "react";
import { clsx as GE } from "clsx";
import { useEffect as Up, useRef as TE, useState as LE } from "react";
import { createContext as CE, useContext as jE, useMemo as kE } from "react";
import { useRef as qp } from "react";
import * as Am from "react";
import { clsx as eS } from "clsx";
import { useLayoutEffect as $v, useRef as Jv } from "react";
import { createPortal as bR } from "react-dom";
import { createContext as jR, useContext as kR } from "react";
import { useEffect as $i } from "react";
import * as Fu from "react";
import { useMemo as SC, forwardRef as IC } from "react";
import { clsx as RC } from "clsx";
import * as Cr2 from "react";
import { cloneElement as Kh, createContext as zh, createElement as FC, isValidElement as $l, useContext as Wh, useMemo as Fh } from "react";
import { clsx as Vh } from "clsx";
import * as ea from "react";
import { createContext as Jh, useContext as Qh } from "react";
import * as ty from "react";
import { isValidElement as nj, cloneElement as ij, createElement as oj } from "react";
import * as Zn2 from "react";
import { clsx as dj } from "clsx";
import * as oy from "react";
import { clsx as mj } from "clsx";
import { clsx as xy } from "clsx";
import * as jr from "react";
import * as er2 from "react";
import { useEffect as Fj, useMemo as Vj } from "react";
import { clsx as Cy } from "clsx";
import * as rr2 from "react";
import { useEffect as lk, useMemo as ck } from "react";
import { clsx as Ly } from "clsx";
import * as ee5 from "react";
import { useCallback as bg, useMemo as ed, useRef as oD, useState as lD } from "react";
import { clsx as rd } from "clsx";
import { Children as wk } from "react";
import * as Lt3 from "react";
import { cloneElement as Kk, isValidElement as tg } from "react";
import * as no from "react";
import { useEffect as Ck, useRef as ei2, useState as jk } from "react";
import { clsx as kk } from "clsx";
import { useLayoutEffect as ag, useRef as Xk } from "react";
import { useLayoutEffect as oc, useRef as ng } from "react";
import * as og from "react";
import { createContext as Hk, useContext as Yk } from "react";
import * as lc from "react";
import { memo as yg, useLayoutEffect as uc, useRef as gg } from "react";
import * as ve7 from "react";
import { useCallback as qg, useRef as $g, useState as CT } from "react";
import { clsx as kT } from "clsx";
import * as io from "react";
import { cloneElement as DD, isValidElement as TD } from "react";
import { clsx as LD } from "clsx";
import * as oo from "react";
import { cloneElement as cT, isValidElement as sT } from "react";
import * as se7 from "react";
import { PureComponent as bL, useCallback as px, useRef as PL, useState as AL } from "react";
import { clsx as mx } from "clsx";
import * as ex from "react";
import * as ue8 from "react";
import { Children as zL, PureComponent as WL, useCallback as FL, useContext as VL, useEffect as Tx } from "react";
import { clsx as XL } from "clsx";
import { useEffect as xx } from "react";
import { createContext as ML } from "react";
import * as Ar2 from "react";
import { useEffect as mN } from "react";
import { clsx as vN } from "clsx";
import * as so from "react";
import { createContext as cN, useContext as sN, useState as uN } from "react";
import * as Or from "react";
import { useEffect as IN } from "react";
import { clsx as RN } from "clsx";
import * as wr3 from "react";
import { useEffect as _N } from "react";
import { clsx as BN } from "clsx";
import * as Oe5 from "react";
import { useState as mb, useRef as n1, useCallback as i1, forwardRef as vb, useImperativeHandle as o1, useEffect as l1 } from "react";
import { clsx as fo } from "clsx";
import * as Ne7 from "react";
import * as de9 from "react";
import { Component as J1, useCallback as _b, useMemo as Q1, useRef as po, useState as eM } from "react";
import { clsx as rM } from "clsx";
import * as Sb from "react";
import { createContext as _1, useContext as B1, useEffect as Eb, useRef as K1 } from "react";
import * as xd from "react";
import * as $13 from "react";
import { PureComponent as EM, useCallback as $b, useMemo as SM, useRef as Jb, useState as IM } from "react";
import { clsx as RM } from "clsx";
import * as ne7 from "react";
import { PureComponent as I_, useCallback as Cd, useEffect as R_, useRef as C_, useState as jd } from "react";
import { clsx as j_ } from "clsx";
import * as tP from "react";
import * as ia from "react";
import { createContext as f_, useContext as sP, useMemo as p_ } from "react";
import * as te7 from "react";
import { useCallback as bP, useMemo as PP, useRef as sB, useState as uB } from "react";
import { clsx as dB } from "clsx";
import * as Bc from "react";
import * as oa from "react";
import { useLayoutEffect as RP, useMemo as DB, useRef as TB } from "react";
import { clsx as LB } from "clsx";
import * as la from "react";
import { isValidElement as HB, useLayoutEffect as _d, useMemo as YB, useRef as Bd } from "react";
import { clsx as UB } from "clsx";
import * as LP from "react";
import { useLayoutEffect as TP, useRef as QB } from "react";
import * as At2 from "react";
import { useCallback as tK, useEffect as aK, useRef as nK, useState as iK } from "react";
import * as sA from "react";
import { forwardRef as Oz } from "react";
import * as un5 from "react";
import { forwardRef as bz } from "react";
import * as tA from "react";
import { useRef as NK } from "react";
import { memo as _K, useEffect as BK } from "react";
import { useEffect as zK } from "react";
import { useEffect as WK, memo as FK } from "react";
import * as ca from "react";
import { forwardRef as vz } from "react";
import * as sn4 from "react";
import { forwardRef as nA } from "react";
import * as cn4 from "react";
import { useLayoutEffect as XK, useRef as GK } from "react";
import * as Ie5 from "react";
import { forwardRef as Ao, useCallback as $e4, useEffect as nz, useRef as lA, useState as Uc } from "react";
import { clsx as iz } from "clsx";
import { useEffect as JK, useState as QK } from "react";
import * as uA from "react";
import { forwardRef as Ez } from "react";
import * as vA from "react";
import { forwardRef as zz } from "react";
import { forwardRef as Nz } from "react";
import * as Na from "react";
import { useEffect as Iz } from "react";
import * as le8 from "react";
import { PureComponent as Uz, useCallback as yA, useState as Zz } from "react";
import * as ce8 from "react";
import { useCallback as lf, useMemo as xW, useState as bW } from "react";
import * as IA from "react";
import { forwardRef as r22 } from "react";
import * as RA from "react";
import { forwardRef as n22 } from "react";
import * as CA from "react";
import { forwardRef as o22 } from "react";
import * as DA from "react";
import { forwardRef as d22 } from "react";
import * as TA from "react";
import { forwardRef as m22 } from "react";
import * as ar from "react";
import { useState as x22 } from "react";
import { clsx as P22 } from "clsx";
import * as je5 from "react";
import { useCallback as FA, useMemo as VA, useRef as G22, useState as H22 } from "react";
import { clsx as U22 } from "clsx";
import * as MA from "react";
import * as GA from "react";
import { forwardRef as nF } from "react";
import * as fn3 from "react";
import * as is from "react";
var e0 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function gi2(e14) {
  if (typeof e14 != "string") return false;
  var r11 = e0;
  return r11.includes(e14);
}
var t0 = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"];
var a0 = new Set(t0);
function ds(e14) {
  return typeof e14 != "string" ? false : a0.has(e14);
}
function fs(e14) {
  return typeof e14 == "string" && e14.startsWith("data-");
}
function X11(e14) {
  if (typeof e14 != "object" || e14 === null) return {};
  var r11 = {};
  for (var t10 in e14) Object.prototype.hasOwnProperty.call(e14, t10) && (ds(t10) || fs(t10)) && (r11[t10] = e14[t10]);
  return r11;
}
function Ee6(e14) {
  if (e14 == null) return null;
  if (r0(e14) && typeof e14.props == "object" && e14.props !== null) {
    var r11 = e14.props;
    return X11(r11);
  }
  return typeof e14 == "object" && !Array.isArray(e14) ? X11(e14) : null;
}
function re7(e14) {
  var r11 = {};
  for (var t10 in e14) Object.prototype.hasOwnProperty.call(e14, t10) && (ds(t10) || fs(t10) || gi2(t10)) && (r11[t10] = e14[t10]);
  return r11;
}
function xf(e14) {
  return e14 == null ? null : n0(e14) ? re7(e14.props) : typeof e14 == "object" && !Array.isArray(e14) ? re7(e14) : null;
}
var i0 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function ps() {
  return ps = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, ps.apply(null, arguments);
}
function o0(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = l0(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function l0(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var Vr = c0((e14, r11) => {
  var { children: t10, width: a11, height: n10, viewBox: i9, className: o15, style: l12, title: c16, desc: s8 } = e14, u9 = o0(e14, i0), d12 = i9 || { width: a11, height: n10, x: 0, y: 0 }, f10 = s0("recharts-surface", o15);
  return Co.createElement("svg", ps({}, re7(u9), { className: f10, width: a11, height: n10, style: l12, viewBox: "".concat(d12.x, " ").concat(d12.y, " ").concat(d12.width, " ").concat(d12.height), ref: r11 }), Co.createElement("title", null, c16), Co.createElement("desc", null, s8), t10);
});
var u0 = ["children", "className"];
function ms() {
  return ms = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, ms.apply(null, arguments);
}
function d0(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = f0(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function f0(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var T14 = jo.forwardRef((e14, r11) => {
  var { children: t10, className: a11 } = e14, n10 = d0(e14, u0), i9 = p0("recharts-layer", a11);
  return jo.createElement("g", ms({ className: i9 }, re7(n10), { ref: r11 }), t10);
});
var vs = m0(null);
var bf = () => v0(vs);
var h0 = 4;
function Et(e14) {
  var r11 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h0, t10 = 10 ** r11, a11 = Math.round(e14 * t10) / t10;
  return Object.is(a11, -0) ? 0 : a11;
}
function xe5(e14) {
  for (var r11 = arguments.length, t10 = new Array(r11 > 1 ? r11 - 1 : 0), a11 = 1; a11 < r11; a11++) t10[a11 - 1] = arguments[a11];
  return e14.reduce((n10, i9, o15) => {
    var l12 = t10[o15 - 1];
    return typeof l12 == "string" ? n10 + l12 + i9 : l12 !== void 0 ? n10 + Et(l12) + i9 : n10 + i9;
  }, "");
}
var he4 = (e14) => e14 === 0 ? 0 : e14 > 0 ? 1 : -1;
var _e7 = (e14) => typeof e14 == "number" && e14 != +e14;
var Bt = (e14) => typeof e14 == "string" && e14.indexOf("%") === e14.length - 1;
var k11 = (e14) => (typeof e14 == "number" || e14 instanceof Number) && !_e7(e14);
var be8 = (e14) => k11(e14) || typeof e14 == "string";
var g0 = 0;
var lt6 = (e14) => {
  var r11 = ++g0;
  return "".concat(e14 || "").concat(r11);
};
var Ae6 = function(r11, t10) {
  var a11 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n10 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!k11(r11) && typeof r11 != "string") return a11;
  var i9;
  if (Bt(r11)) {
    if (t10 == null) return a11;
    var o15 = r11.indexOf("%");
    i9 = t10 * parseFloat(r11.slice(0, o15)) / 100;
  } else i9 = +r11;
  return _e7(i9) && (i9 = a11), n10 && t10 != null && i9 > t10 && (i9 = t10), i9;
};
var hs = (e14) => {
  if (!Array.isArray(e14)) return false;
  for (var r11 = e14.length, t10 = {}, a11 = 0; a11 < r11; a11++) if (!t10[String(e14[a11])]) t10[String(e14[a11])] = true;
  else return true;
  return false;
};
function B18(e14, r11, t10) {
  return k11(e14) && k11(r11) ? Et(e14 + t10 * (r11 - e14)) : r11;
}
function ko(e14, r11, t10) {
  if (!(!e14 || !e14.length)) return e14.find((a11) => a11 && (typeof r11 == "function" ? r11(a11) : y(a11, r11)) === t10);
}
var Pf = (e14) => {
  for (var r11 = e14.length, t10 = 0, a11 = 0, n10 = 0, i9 = 0, o15 = 1 / 0, l12 = -1 / 0, c16 = 0, s8 = 0, u9 = 0; u9 < r11; u9++) {
    var d12, f10;
    c16 = ((d12 = e14[u9]) === null || d12 === void 0 ? void 0 : d12.cx) || 0, s8 = ((f10 = e14[u9]) === null || f10 === void 0 ? void 0 : f10.cy) || 0, t10 += c16, a11 += s8, n10 += c16 * s8, i9 += c16 * c16, o15 = Math.min(o15, c16), l12 = Math.max(l12, c16);
  }
  var p12 = r11 * i9 !== t10 * t10 ? (r11 * n10 - t10 * a11) / (r11 * i9 - t10 * t10) : 0;
  return { xmin: o15, xmax: l12, a: p12, b: (a11 - p12 * t10) / r11 };
};
var Z10 = (e14) => e14 === null || typeof e14 > "u";
var Kt2 = (e14) => Z10(e14) ? e14 : "".concat(e14.charAt(0).toUpperCase()).concat(e14.slice(1));
function ke5(e14) {
  return e14 != null;
}
function ye6() {
}
var x0 = ["type", "size", "sizeType"];
function ys() {
  return ys = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, ys.apply(null, arguments);
}
function Af(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Of(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Af(Object(t10), true).forEach(function(a11) {
      b0(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Af(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function b0(e14, r11, t10) {
  return (r11 = P0(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function P0(e14) {
  var r11 = A0(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function A0(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function O0(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = w0(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function w0(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var Sf = { symbolCircle: at3, symbolCross: Lt2, symbolDiamond: zt2, symbolSquare: Vt, symbolStar: Ht2, symbolTriangle: $t2, symbolWye: Kt };
var T0 = Math.PI / 180;
var L0 = (e14) => {
  var r11 = "symbol".concat(Kt2(e14));
  return Sf[r11] || at3;
};
var N0 = (e14, r11, t10) => {
  if (r11 === "area") return e14;
  switch (t10) {
    case "cross":
      return 5 * e14 * e14 / 9;
    case "diamond":
      return 0.5 * e14 * e14 / Math.sqrt(3);
    case "square":
      return e14 * e14;
    case "star": {
      var a11 = 18 * T0;
      return 1.25 * e14 * e14 * (Math.tan(a11) - Math.tan(a11 * 2) * Math.tan(a11) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e14 * e14 / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e14 * e14 / 8;
    default:
      return Math.PI * e14 * e14 / 4;
  }
};
var M0 = (e14, r11) => {
  Sf["symbol".concat(Kt2(e14))] = r11;
};
var sa = (e14) => {
  var { type: r11 = "circle", size: t10 = 64, sizeType: a11 = "area" } = e14, n10 = O0(e14, x0), i9 = Of(Of({}, n10), {}, { type: r11, size: t10, sizeType: a11 }), o15 = "circle";
  typeof r11 == "string" && (o15 = r11);
  var l12 = () => {
    var f10 = L0(o15), p12 = xn2().type(f10).size(N0(t10, a11, o15)), m18 = p12();
    if (m18 !== null) return m18;
  }, { className: c16, cx: s8, cy: u9 } = i9, d12 = re7(i9);
  return k11(s8) && k11(u9) && k11(t10) ? wf.createElement("path", ys({}, d12, { className: D0("recharts-symbols", c16), transform: "translate(".concat(s8, ", ").concat(u9, ")"), d: l12() })) : null;
};
sa.registerSymbol = M0;
var Do = (e14) => "radius" in e14 && "startAngle" in e14 && "endAngle" in e14;
var mn3 = (e14, r11) => {
  if (!e14 || typeof e14 == "function" || typeof e14 == "boolean") return null;
  var t10 = e14;
  if (_0(e14) && (t10 = e14.props), typeof t10 != "object" && typeof t10 != "function") return null;
  var a11 = {};
  return Object.keys(t10).forEach((n10) => {
    gi2(n10) && typeof t10[n10] == "function" && (a11[n10] = r11 || ((i9) => t10[n10](t10, i9)));
  }), a11;
};
var B0 = (e14, r11, t10) => (a11) => (e14(r11, t10, a11), null);
var Ve3 = (e14, r11, t10) => {
  if (e14 === null || typeof e14 != "object" && typeof e14 != "function") return null;
  var a11 = null;
  return Object.keys(e14).forEach((n10) => {
    var i9 = e14[n10];
    gi2(n10) && typeof i9 == "function" && (a11 || (a11 = {}), a11[n10] = B0(i9, r11, t10));
  }), a11;
};
var If = (e14) => Array.isArray(e14) && e14.length > 0;
function Rf(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function K0(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Rf(Object(t10), true).forEach(function(a11) {
      z0(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Rf(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function z0(e14, r11, t10) {
  return (r11 = W0(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function W0(e14) {
  var r11 = F0(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function F0(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function L11(e14, r11) {
  var t10 = K0({}, e14), a11 = r11, n10 = Object.keys(r11), i9 = n10.reduce((o15, l12) => (o15[l12] === void 0 && a11[l12] !== void 0 && (o15[l12] = a11[l12]), o15), t10);
  return i9;
}
function To() {
  return To = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, To.apply(null, arguments);
}
function Cf(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function jf(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Cf(Object(t10), true).forEach(function(a11) {
      V0(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Cf(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function V0(e14, r11, t10) {
  return (r11 = X0(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function X0(e14) {
  var r11 = G0(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function G0(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Xr2 = 32;
var Y0 = { align: "center", iconSize: 14, inactiveColor: "#ccc", layout: "horizontal", verticalAlign: "middle", labelStyle: {} };
function U0(e14) {
  if (typeof e14 == "object" && e14 !== null && "strokeDasharray" in e14) return String(e14.strokeDasharray);
}
function Z0(e14) {
  var { data: r11, iconType: t10, inactiveColor: a11 } = e14, n10 = Xr2 / 2, i9 = Xr2 / 6, o15 = Xr2 / 3, l12 = r11.inactive ? a11 : r11.color, c16 = t10 ?? r11.type;
  if (c16 === "none") return null;
  if (c16 === "plainline") return br.createElement("line", { strokeWidth: 4, fill: "none", stroke: l12, strokeDasharray: U0(r11.payload), x1: 0, y1: n10, x2: Xr2, y2: n10, className: "recharts-legend-icon" });
  if (c16 === "line") return br.createElement("path", { strokeWidth: 4, fill: "none", stroke: l12, d: "M0,".concat(n10, "h").concat(o15, `
            A`).concat(i9, ",").concat(i9, ",0,1,1,").concat(2 * o15, ",").concat(n10, `
            H`).concat(Xr2, "M").concat(2 * o15, ",").concat(n10, `
            A`).concat(i9, ",").concat(i9, ",0,1,1,").concat(o15, ",").concat(n10), className: "recharts-legend-icon" });
  if (c16 === "rect") return br.createElement("path", { stroke: "none", fill: l12, d: "M0,".concat(Xr2 / 8, "h").concat(Xr2, "v").concat(Xr2 * 3 / 4, "h").concat(-Xr2, "z"), className: "recharts-legend-icon" });
  if (br.isValidElement(r11.legendIcon)) {
    var s8 = jf({}, r11);
    return delete s8.legendIcon, br.cloneElement(r11.legendIcon, s8);
  }
  return br.createElement(sa, { fill: l12, cx: n10, cy: n10, size: Xr2, sizeType: "diameter", type: c16 });
}
function q0(e14) {
  var { payload: r11, iconSize: t10, layout: a11, formatter: n10, inactiveColor: i9, iconType: o15, labelStyle: l12 } = e14, c16 = { x: 0, y: 0, width: Xr2, height: Xr2 }, s8 = { display: a11 === "horizontal" ? "inline-block" : "block", marginRight: 10 }, u9 = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
  return r11.map((d12, f10) => {
    var p12 = d12.formatter || n10, m18 = H0({ "recharts-legend-item": true, ["legend-item-".concat(f10)]: true, inactive: d12.inactive });
    if (d12.type === "none") return null;
    var h13 = typeof l12 == "object" ? jf({}, l12) : {};
    h13.color = d12.inactive ? i9 : h13.color || d12.color;
    var y16 = p12 ? p12(d12.value, d12, f10) : d12.value;
    return br.createElement("li", To({ className: m18, style: s8, key: "legend-item-".concat(f10) }, Ve3(e14, d12, f10)), br.createElement(Vr, { width: t10, height: t10, viewBox: c16, style: u9, "aria-label": "".concat(d12.value, " legend icon") }, br.createElement(Z0, { data: d12, iconType: o15, inactiveColor: i9 })), br.createElement("span", { className: "recharts-legend-item-text", style: h13 }, y16));
  });
}
var gs = (e14) => {
  var r11 = L11(e14, Y0), { payload: t10, layout: a11, align: n10 } = r11;
  if (!t10 || !t10.length) return null;
  var i9 = { padding: 0, margin: 0, textAlign: a11 === "horizontal" ? n10 : "left" };
  return br.createElement("ul", { className: "recharts-default-legend", style: i9 }, br.createElement(q0, To({}, r11, { payload: t10 })));
};
function Lo(e14, r11, t10) {
  return r11 === true ? tr(e14, t10) : typeof r11 == "function" ? tr(e14, r11) : e14;
}
var xi2 = $0(null);
var eO = (e14) => e14;
var M12 = () => {
  var e14 = Df(xi2);
  return e14 ? e14.store.dispatch : eO;
};
var No = () => {
};
var rO = () => No;
var tO = (e14, r11) => e14 === r11;
function E17(e14) {
  var r11 = Df(xi2), t10 = Q0(() => r11 ? (a11) => {
    if (a11 != null) return e14(a11);
  } : No, [r11, e14]);
  return P10(r11 ? r11.subscription.addNestedSub : rO, r11 ? r11.store.getState : No, r11 ? r11.store.getState : No, t10, tO);
}
var xs = (e14) => e14.legend.settings;
var Tf = (e14) => e14.legend.size;
var iO = (e14) => e14.legend.payload;
var Lf = fe7([iO, xs], (e14, r11) => {
  var { itemSorter: t10 } = r11, a11 = e14.flat(1);
  return t10 ? V5(a11, t10) : a11;
});
function Nf() {
  return E17(Lf);
}
var Mo = 1;
function _o() {
  var e14 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [r11, t10] = lO({ height: 0, left: 0, top: 0, width: 0 }), a11 = oO((n10) => {
    if (n10 != null) {
      var i9 = n10.getBoundingClientRect(), o15 = { height: i9.height, left: i9.left, top: i9.top, width: i9.width };
      (Math.abs(o15.height - r11.height) > Mo || Math.abs(o15.left - r11.left) > Mo || Math.abs(o15.top - r11.top) > Mo || Math.abs(o15.width - r11.width) > Mo) && t10({ height: o15.height, left: o15.left, top: o15.top, width: o15.width });
    }
  }, [r11.width, r11.height, r11.top, r11.left, ...e14]);
  return [r11, a11];
}
var sO = { layoutType: "horizontal", width: 0, height: 0, margin: { top: 5, right: 5, bottom: 5, left: 5 }, scale: 1 };
var Mf = mr({ name: "chartLayout", initialState: sO, reducers: { setLayout(e14, r11) {
  e14.layoutType = r11.payload;
}, setChartSize(e14, r11) {
  e14.width = r11.payload.width, e14.height = r11.payload.height;
}, setMargin(e14, r11) {
  var t10, a11, n10, i9;
  e14.margin.top = (t10 = r11.payload.top) !== null && t10 !== void 0 ? t10 : 0, e14.margin.right = (a11 = r11.payload.right) !== null && a11 !== void 0 ? a11 : 0, e14.margin.bottom = (n10 = r11.payload.bottom) !== null && n10 !== void 0 ? n10 : 0, e14.margin.left = (i9 = r11.payload.left) !== null && i9 !== void 0 ? i9 : 0;
}, setScale(e14, r11) {
  e14.scale = r11.payload;
} } });
var { setMargin: Bo, setLayout: _f, setChartSize: Bf, setScale: Kf } = Mf.actions;
var zf = Mf.reducer;
function Ko(e14, r11, t10) {
  return Array.isArray(e14) && e14 && r11 + t10 !== 0 ? e14.slice(r11, t10 + 1) : e14;
}
function W15(e14) {
  return Number.isFinite(e14);
}
function Xe4(e14) {
  return typeof e14 == "number" && e14 > 0 && Number.isFinite(e14);
}
function Wf(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function vn4(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Wf(Object(t10), true).forEach(function(a11) {
      uO(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Wf(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function uO(e14, r11, t10) {
  return (r11 = dO(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function dO(e14) {
  var r11 = fO(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function fO(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function _13(e14, r11, t10) {
  return Z10(e14) || Z10(r11) ? t10 : be8(r11) ? y(e14, r11, t10) : typeof r11 == "function" ? r11(e14) : t10;
}
var Vf = (e14, r11, t10) => {
  if (r11 && t10) {
    var { width: a11, height: n10 } = t10, { align: i9, verticalAlign: o15, layout: l12 } = r11;
    if ((l12 === "vertical" || l12 === "horizontal" && o15 === "middle") && i9 !== "center" && k11(e14[i9])) return vn4(vn4({}, e14), {}, { [i9]: e14[i9] + (a11 || 0) });
    if ((l12 === "horizontal" || l12 === "vertical" && i9 === "center") && o15 !== "middle" && k11(e14[o15])) return vn4(vn4({}, e14), {}, { [o15]: e14[o15] + (n10 || 0) });
  }
  return e14;
};
var Ge4 = (e14, r11) => e14 === "horizontal" && r11 === "xAxis" || e14 === "vertical" && r11 === "yAxis" || e14 === "centric" && r11 === "angleAxis" || e14 === "radial" && r11 === "radiusAxis";
var bs = (e14, r11, t10, a11) => {
  if (a11) return e14.map((l12) => l12.coordinate);
  var n10, i9, o15 = e14.map((l12) => (l12.coordinate === r11 && (n10 = true), l12.coordinate === t10 && (i9 = true), l12.coordinate));
  return n10 || o15.push(r11), i9 || o15.push(t10), o15;
};
var Ps = (e14, r11, t10) => {
  if (!e14) return null;
  var { duplicateDomain: a11, type: n10, range: i9, scale: o15, realScaleType: l12, isCategorical: c16, categoricalDomain: s8, tickCount: u9, ticks: d12, niceTicks: f10, axisType: p12 } = e14;
  if (!o15) return null;
  var m18 = l12 === "scaleBand" && o15.bandwidth ? o15.bandwidth() / 2 : 2, h13 = (r11 || t10) && n10 === "category" && o15.bandwidth ? o15.bandwidth() / m18 : 0;
  if (h13 = p12 === "angleAxis" && i9 && i9.length >= 2 ? he4(i9[0] - i9[1]) * 2 * h13 : h13, r11 && (d12 || f10)) {
    var y16 = (d12 || f10 || []).map((v9, g13) => {
      var x18 = a11 ? a11.indexOf(v9) : v9, b14 = o15.map(x18);
      return W15(b14) ? { coordinate: b14 + h13, value: v9, offset: h13, index: g13 } : null;
    }).filter(ke5);
    return y16;
  }
  return c16 && s8 ? s8.map((v9, g13) => {
    var x18 = o15.map(v9);
    return W15(x18) ? { coordinate: x18 + h13, value: v9, index: g13, offset: h13 } : null;
  }).filter(ke5) : o15.ticks && !t10 && u9 != null ? o15.ticks(u9).map((v9, g13) => {
    var x18 = o15.map(v9);
    return W15(x18) ? { coordinate: x18 + h13, value: v9, index: g13, offset: h13 } : null;
  }).filter(ke5) : o15.domain().map((v9, g13) => {
    var x18 = o15.map(v9);
    return W15(x18) ? { coordinate: x18 + h13, value: a11 ? a11[v9] : v9, index: g13, offset: h13 } : null;
  }).filter(ke5);
};
var zo = (e14, r11) => {
  if (!r11 || r11.length !== 2 || !k11(r11[0]) || !k11(r11[1])) return e14;
  var t10 = Math.min(r11[0], r11[1]), a11 = Math.max(r11[0], r11[1]), n10 = [e14[0], e14[1]];
  return (!k11(e14[0]) || e14[0] < t10) && (n10[0] = t10), (!k11(e14[1]) || e14[1] > a11) && (n10[1] = a11), n10[0] > a11 && (n10[0] = a11), n10[1] < t10 && (n10[1] = t10), n10;
};
var bO = (e14) => {
  var r11, t10 = e14.length;
  if (!(t10 <= 0)) {
    var a11 = (r11 = e14[0]) === null || r11 === void 0 ? void 0 : r11.length;
    if (!(a11 == null || a11 <= 0)) for (var n10 = 0; n10 < a11; ++n10) for (var i9 = 0, o15 = 0, l12 = 0; l12 < t10; ++l12) {
      var c16 = e14[l12], s8 = c16?.[n10];
      if (s8 != null) {
        var u9 = s8[1], d12 = s8[0], f10 = _e7(u9) ? d12 : u9;
        f10 >= 0 ? (s8[0] = i9, i9 += f10, s8[1] = i9) : (s8[0] = o15, o15 += f10, s8[1] = o15);
      }
    }
  }
};
var PO = (e14) => {
  var r11, t10 = e14.length;
  if (!(t10 <= 0)) {
    var a11 = (r11 = e14[0]) === null || r11 === void 0 ? void 0 : r11.length;
    if (!(a11 == null || a11 <= 0)) for (var n10 = 0; n10 < a11; ++n10) for (var i9 = 0, o15 = 0; o15 < t10; ++o15) {
      var l12 = e14[o15], c16 = l12?.[n10];
      if (c16 != null) {
        var s8 = _e7(c16[1]) ? c16[0] : c16[1];
        s8 >= 0 ? (c16[0] = i9, i9 += s8, c16[1] = i9) : (c16[0] = 0, c16[1] = 0);
      }
    }
  }
};
var AO = { sign: bO, expand: gi, none: D17, silhouette: Ti, wiggle: bi, positive: PO };
var Xf = (e14, r11, t10) => {
  var a11, n10 = (a11 = AO[t10]) !== null && a11 !== void 0 ? a11 : D17, i9 = yi().keys(r11).value((l12, c16) => Number(_13(l12, c16, 0))).order(V13).offset(n10), o15 = i9(e14);
  return o15.forEach((l12, c16) => {
    l12.forEach((s8, u9) => {
      var d12 = _13(e14[u9], r11[c16], 0);
      Array.isArray(d12) && d12.length === 2 && k11(d12[0]) && k11(d12[1]) && (s8[0] = d12[0], s8[1] = d12[1]);
    });
  }), o15;
};
function ua(e14) {
  return e14 == null ? void 0 : String(e14);
}
function zt3(e14) {
  var { axis: r11, ticks: t10, bandSize: a11, entry: n10, index: i9, dataKey: o15 } = e14;
  if (r11.type === "category") {
    if (!r11.allowDuplicatedCategory && r11.dataKey && !Z10(n10[r11.dataKey])) {
      var l12 = ko(t10, "value", n10[r11.dataKey]);
      if (l12) return l12.coordinate + a11 / 2;
    }
    return t10 != null && t10[i9] ? t10[i9].coordinate + a11 / 2 : null;
  }
  var c16 = _13(n10, Z10(o15) ? r11.dataKey : o15), s8 = r11.scale.map(c16);
  return k11(s8) ? s8 : null;
}
var hn3 = (e14) => {
  var { axis: r11, ticks: t10, offset: a11, bandSize: n10, entry: i9, index: o15 } = e14;
  if (r11.type === "category") return t10[o15] ? t10[o15].coordinate + a11 : null;
  var l12 = _13(i9, r11.dataKey, r11.scale.domain()[o15]);
  if (Z10(l12)) return null;
  var c16 = r11.scale.map(l12);
  return k11(c16) ? c16 - n10 / 2 + a11 : null;
};
var Wo = (e14) => {
  var { numericAxis: r11 } = e14, t10 = r11.scale.domain();
  if (r11.type === "number") {
    var a11 = Math.min(t10[0], t10[1]), n10 = Math.max(t10[0], t10[1]);
    return a11 <= 0 && n10 >= 0 ? 0 : n10 < 0 ? n10 : a11;
  }
  return t10[0];
};
var OO = (e14) => {
  var r11 = e14.flat(2).filter(k11);
  return [Math.min(...r11), Math.max(...r11)];
};
var wO = (e14) => [e14[0] === 1 / 0 ? 0 : e14[0], e14[1] === -1 / 0 ? 0 : e14[1]];
var Gf = (e14, r11, t10) => {
  if (e14 != null) return wO(Object.keys(e14).reduce((a11, n10) => {
    var i9 = e14[n10];
    if (!i9) return a11;
    var { stackedData: o15 } = i9, l12 = o15.reduce((c16, s8) => {
      var u9 = Ko(s8, r11, t10), d12 = OO(u9);
      return !W15(d12[0]) || !W15(d12[1]) ? c16 : [Math.min(c16[0], d12[0]), Math.max(c16[1], d12[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(l12[0], a11[0]), Math.max(l12[1], a11[1])];
  }, [1 / 0, -1 / 0]));
};
var As = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var Os = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var He2 = (e14, r11, t10) => {
  if (e14 && e14.scale && e14.scale.bandwidth) {
    var a11 = e14.scale.bandwidth();
    if (!t10 || a11 > 0) return a11;
  }
  if (e14 && r11 && r11.length >= 2) {
    for (var n10 = V5(r11, (u9) => u9.coordinate), i9 = 1 / 0, o15 = 1, l12 = n10.length; o15 < l12; o15++) {
      var c16 = n10[o15], s8 = n10[o15 - 1];
      i9 = Math.min((c16?.coordinate || 0) - (s8?.coordinate || 0), i9);
    }
    return i9 === 1 / 0 ? 0 : i9;
  }
  return t10 ? void 0 : 0;
};
function ws(e14) {
  var { tooltipEntrySettings: r11, dataKey: t10, payload: a11, value: n10, name: i9 } = e14;
  return vn4(vn4({}, r11), {}, { dataKey: t10, payload: a11, value: n10, name: i9 });
}
function Be4(e14, r11) {
  if (e14) return String(e14);
  if (typeof r11 == "string") return r11;
}
var Hf = (e14, r11) => {
  if (r11 === "horizontal") return e14.relativeX;
  if (r11 === "vertical") return e14.relativeY;
};
var Yf = (e14, r11) => r11 === "centric" ? e14.angle : e14.radius;
var or3 = (e14) => e14.layout.width;
var lr2 = (e14) => e14.layout.height;
var Uf = (e14) => e14.layout.scale;
var Fo = (e14) => e14.layout.margin;
var yn4 = fe7((e14) => e14.cartesianAxis.xAxis, (e14) => Object.values(e14));
var gn4 = fe7((e14) => e14.cartesianAxis.yAxis, (e14) => Object.values(e14));
var qf = ["#1890FF", "#66B5FF", "#41D9C7", "#2FC25B", "#6EDB8F", "#9AE65C", "#FACC14", "#E6965C", "#57AD71", "#223273", "#738AE6", "#7564CC", "#8543E0", "#A877ED", "#5C8EE6", "#13C2C2", "#70E0E0", "#5CA3E6", "#3436C7", "#8082FF", "#DD81E6", "#F04864", "#FA7D92", "#D598D9"];
var Vo = "data-recharts-item-index";
var xn3 = "data-recharts-item-id";
var _a = 60;
function $f(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Xo(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? $f(Object(t10), true).forEach(function(a11) {
      EO(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : $f(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function EO(e14, r11, t10) {
  return (r11 = SO(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function SO(e14) {
  var r11 = IO(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function IO(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var RO = (e14) => e14.brush.height;
function CO(e14) {
  var r11 = gn4(e14);
  return r11.reduce((t10, a11) => {
    if (a11.orientation === "left" && !a11.mirror && !a11.hide) {
      var n10 = typeof a11.width == "number" ? a11.width : _a;
      return t10 + n10;
    }
    return t10;
  }, 0);
}
function jO(e14) {
  var r11 = gn4(e14);
  return r11.reduce((t10, a11) => {
    if (a11.orientation === "right" && !a11.mirror && !a11.hide) {
      var n10 = typeof a11.width == "number" ? a11.width : _a;
      return t10 + n10;
    }
    return t10;
  }, 0);
}
function kO(e14) {
  var r11 = yn4(e14);
  return r11.reduce((t10, a11) => a11.orientation === "top" && !a11.mirror && !a11.hide ? t10 + a11.height : t10, 0);
}
function DO(e14) {
  var r11 = yn4(e14);
  return r11.reduce((t10, a11) => a11.orientation === "bottom" && !a11.mirror && !a11.hide ? t10 + a11.height : t10, 0);
}
var me9 = fe7([or3, lr2, Fo, RO, CO, jO, kO, DO, xs, Tf], (e14, r11, t10, a11, n10, i9, o15, l12, c16, s8) => {
  var u9 = { left: (t10.left || 0) + n10, right: (t10.right || 0) + i9 }, d12 = { top: (t10.top || 0) + o15, bottom: (t10.bottom || 0) + l12 }, f10 = Xo(Xo({}, d12), u9), p12 = f10.bottom;
  f10.bottom += a11, f10 = Vf(f10, c16, s8);
  var m18 = e14 - f10.left - f10.right, h13 = r11 - f10.top - f10.bottom;
  return Xo(Xo({ brushBottom: p12 }, f10), {}, { width: Math.max(m18, 0), height: Math.max(h13, 0) });
});
var Jf = fe7(me9, (e14) => ({ x: e14.left, y: e14.top, width: e14.width, height: e14.height }));
var bn3 = fe7(or3, lr2, (e14, r11) => ({ x: 0, y: 0, width: e14, height: r11 }));
var ep = TO(null);
var F10 = () => LO(ep) != null;
var rp = (e14) => {
  var { children: r11 } = e14;
  return Qf.createElement(ep.Provider, { value: true }, r11);
};
var Pn2 = (e14) => e14.brush;
var Wt3 = fe7([Pn2, me9, Fo], (e14, r11, t10) => ({ height: e14.height, x: k11(e14.x) ? e14.x : r11.left, y: k11(e14.y) ? e14.y : r11.top + r11.height + r11.brushBottom - (t10?.bottom || 0), width: k11(e14.width) ? e14.width : r11.width }));
var MO = true;
var da = function(r11, t10) {
  for (var a11 = arguments.length, n10 = new Array(a11 > 2 ? a11 - 2 : 0), i9 = 2; i9 < a11; i9++) n10[i9 - 2] = arguments[i9];
  if (MO && typeof console < "u" && console.warn && (t10 === void 0 && console.warn("LogUtils requires an error message argument"), !r11)) if (t10 === void 0) console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
  else {
    var o15 = 0;
    console.warn(t10.replace(/%s/g, () => n10[o15++]));
  }
};
var ct4 = { width: "100%", height: "100%", debounce: 0, minWidth: 0, initialDimension: { width: -1, height: -1 } };
var Ss = (e14, r11, t10) => {
  var { width: a11 = ct4.width, height: n10 = ct4.height, aspect: i9, maxHeight: o15 } = t10, l12 = Bt(a11) ? e14 : Number(a11), c16 = Bt(n10) ? r11 : Number(n10);
  return i9 && i9 > 0 && (l12 ? c16 = l12 / i9 : c16 && (l12 = c16 * i9), o15 && c16 != null && c16 > o15 && (c16 = o15)), { calculatedWidth: l12, calculatedHeight: c16 };
};
var _O = { width: 0, height: 0, overflow: "visible" };
var BO = { width: 0, overflowX: "visible" };
var KO = { height: 0, overflowY: "visible" };
var zO = {};
var tp = (e14) => {
  var { width: r11, height: t10 } = e14, a11 = Bt(r11), n10 = Bt(t10);
  return a11 && n10 ? _O : a11 ? BO : n10 ? KO : zO;
};
function ap(e14) {
  var { width: r11, height: t10, aspect: a11 } = e14, n10 = r11, i9 = t10;
  return n10 === void 0 && i9 === void 0 ? (n10 = ct4.width, i9 = ct4.height) : n10 === void 0 ? n10 = a11 && a11 > 0 ? void 0 : ct4.width : i9 === void 0 && (i9 = a11 && a11 > 0 ? void 0 : ct4.height), { width: n10, height: i9 };
}
function Is() {
  return Is = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Is.apply(null, arguments);
}
function np(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function ip(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? np(Object(t10), true).forEach(function(a11) {
      WO(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : np(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function WO(e14, r11, t10) {
  return (r11 = FO(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function FO(e14) {
  var r11 = VO(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function VO(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var cp = GO(ct4.initialDimension);
function QO(e14) {
  return Xe4(e14.width) && Xe4(e14.height);
}
function sp(e14) {
  var { children: r11, width: t10, height: a11 } = e14, n10 = qO(() => ({ width: t10, height: a11 }), [t10, a11]);
  return QO(n10) ? Ba.createElement(cp.Provider, { value: n10 }, r11) : null;
}
var bi2 = () => YO(cp);
var ew = lp((e14, r11) => {
  var { aspect: t10, initialDimension: a11 = ct4.initialDimension, width: n10, height: i9, minWidth: o15 = ct4.minWidth, minHeight: l12, maxHeight: c16, children: s8, debounce: u9 = ct4.debounce, id: d12, className: f10, onResize: p12, style: m18 = {} } = e14, h13 = op(null), y16 = op();
  y16.current = p12, ZO(r11, () => h13.current);
  var [v9, g13] = $O({ containerWidth: a11.width, containerHeight: a11.height }), x18 = HO((w9, S11) => {
    g13((I24) => {
      var R13 = Math.round(w9), C11 = Math.round(S11);
      return I24.containerWidth === R13 && I24.containerHeight === C11 ? I24 : { containerWidth: R13, containerHeight: C11 };
    });
  }, []);
  UO(() => {
    if (h13.current == null || typeof ResizeObserver > "u") return ye6;
    var w9 = (C11) => {
      var N19, j15 = C11[0];
      if (j15 != null) {
        var { width: D18, height: G20 } = j15.contentRect;
        x18(D18, G20), (N19 = y16.current) === null || N19 === void 0 || N19.call(y16, D18, G20);
      }
    };
    u9 > 0 && (w9 = b5(w9, u9, { trailing: true, leading: false }));
    var S11 = new ResizeObserver(w9), { width: I24, height: R13 } = h13.current.getBoundingClientRect();
    return x18(I24, R13), S11.observe(h13.current), () => {
      S11.disconnect();
    };
  }, [x18, u9]);
  var { containerWidth: b14, containerHeight: P16 } = v9;
  da(!t10 || t10 > 0, "The aspect(%s) must be greater than zero.", t10);
  var { calculatedWidth: A13, calculatedHeight: O12 } = Ss(b14, P16, { width: n10, height: i9, aspect: t10, maxHeight: c16 });
  return da(A13 != null && A13 > 0 || O12 != null && O12 > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, A13, O12, n10, i9, o15, l12, t10), Ba.createElement("div", { id: d12 ? "".concat(d12) : void 0, className: XO("recharts-responsive-container", f10), style: ip(ip({}, m18), {}, { width: n10, height: i9, minWidth: o15, minHeight: l12, maxHeight: c16 }), ref: h13 }, Ba.createElement("div", { style: tp({ width: n10, height: i9 }) }, Ba.createElement(sp, { width: A13, height: O12 }, s8)));
});
var rw = lp((e14, r11) => {
  var t10 = bi2();
  if (Xe4(t10.width) && Xe4(t10.height)) return e14.children;
  var { width: a11, height: n10 } = ap({ width: e14.width, height: e14.height, aspect: e14.aspect }), { calculatedWidth: i9, calculatedHeight: o15 } = Ss(void 0, void 0, { width: a11, height: n10, aspect: e14.aspect, maxHeight: e14.maxHeight });
  return k11(i9) && k11(o15) ? Ba.createElement(sp, { width: i9, height: o15 }, e14.children) : Ba.createElement(ew, Is({}, e14, { width: a11, height: n10, ref: r11 }));
});
function Pi(e14) {
  if (e14) return { x: e14.x, y: e14.y, upperWidth: "upperWidth" in e14 ? e14.upperWidth : e14.width, lowerWidth: "lowerWidth" in e14 ? e14.lowerWidth : e14.width, width: e14.width, height: e14.height };
}
var st4 = () => {
  var e14, r11 = F10(), t10 = E17(Jf), a11 = E17(Wt3), n10 = (e14 = E17(Pn2)) === null || e14 === void 0 ? void 0 : e14.padding;
  return !r11 || !a11 || !n10 ? t10 : { width: a11.width - n10.left - n10.right, height: a11.height - n10.top - n10.bottom, x: n10.left, y: n10.top };
};
var tw = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0, brushBottom: 0 };
var Go = () => {
  var e14;
  return (e14 = E17(me9)) !== null && e14 !== void 0 ? e14 : tw;
};
var Tr = () => E17(or3);
var Lr2 = () => E17(lr2);
var Rs = () => E17((e14) => e14.layout.margin);
var z15 = (e14) => e14.layout.layoutType;
var cr = () => E17(z15);
var An2 = () => {
  var e14 = cr();
  if (e14 === "horizontal" || e14 === "vertical") return e14;
};
var Ho = (e14) => {
  var r11 = e14.layout.layoutType;
  if (r11 === "centric" || r11 === "radial") return r11;
};
var Yo = () => E17(Ho);
var dp = () => {
  var e14 = cr();
  return e14 !== void 0;
};
var ut6 = (e14) => {
  var r11 = M12(), t10 = F10(), { width: a11, height: n10 } = e14, i9 = bi2(), o15 = a11, l12 = n10;
  return i9 && (o15 = i9.width > 0 ? i9.width : a11, l12 = i9.height > 0 ? i9.height : n10), up(() => {
    !t10 && Xe4(o15) && Xe4(l12) && r11(Bf({ width: o15, height: l12 }));
  }, [r11, t10, o15, l12]), null;
};
var On = (e14) => {
  var { margin: r11 } = e14, t10 = M12();
  return up(() => {
    t10(Bo(r11));
  }, [t10, r11]), null;
};
var nw = { settings: { layout: "horizontal", align: "center", verticalAlign: "middle", itemSorter: "value" }, size: { width: 0, height: 0 }, payload: [] };
var pp = mr({ name: "legend", initialState: nw, reducers: { setLegendSize(e14, r11) {
  e14.size.width = r11.payload.width, e14.size.height = r11.payload.height;
}, setLegendSettings(e14, r11) {
  e14.settings.align = r11.payload.align, e14.settings.layout = r11.payload.layout, e14.settings.verticalAlign = r11.payload.verticalAlign, e14.settings.itemSorter = r11.payload.itemSorter;
}, addLegendPayload: { reducer(e14, r11) {
  e14.payload.push(Ce4(r11.payload));
}, prepare: pr() }, replaceLegendPayload: { reducer(e14, r11) {
  var { prev: t10, next: a11 } = r11.payload, n10 = je(e14).payload.indexOf(Ce4(t10));
  n10 > -1 && (e14.payload[n10] = Ce4(a11));
}, prepare: pr() }, removeLegendPayload: { reducer(e14, r11) {
  var t10 = je(e14).payload.indexOf(Ce4(r11.payload));
  t10 > -1 && e14.payload.splice(t10, 1);
}, prepare: pr() } } });
var { setLegendSize: js, setLegendSettings: mp, addLegendPayload: ks, replaceLegendPayload: Ds, removeLegendPayload: Ts } = pp.actions;
var vp = pp.reducer;
var ow = /* @__PURE__ */ new Set(["axisLine", "tickLine", "activeBar", "activeDot", "activeLabel", "activeShape", "allowEscapeViewBox", "background", "cursor", "dot", "label", "line", "margin", "padding", "position", "shape", "style", "tick", "wrapperStyle", "radius", "throttledEvents"]);
function lw(e14, r11) {
  return e14 == null && r11 == null ? true : typeof e14 == "number" && typeof r11 == "number" ? e14 === r11 || e14 !== e14 && r11 !== r11 : e14 === r11;
}
function Je5(e14, r11) {
  var t10 = /* @__PURE__ */ new Set([...Object.keys(e14), ...Object.keys(r11)]);
  for (var a11 of t10) if (ow.has(a11)) {
    if (e14[a11] == null && r11[a11] == null) continue;
    if (!z8(e14[a11], r11[a11])) return false;
  } else if (!lw(e14[a11], r11[a11])) return false;
  return true;
}
var cw = ["contextPayload"];
function Ls() {
  return Ls = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Ls.apply(null, arguments);
}
function hp(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function wn4(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? hp(Object(t10), true).forEach(function(a11) {
      sw(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : hp(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function sw(e14, r11, t10) {
  return (r11 = uw(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function uw(e14) {
  var r11 = dw(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function dw(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function fw(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = pw(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function pw(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function vw(e14) {
  return e14.value;
}
function hw(e14) {
  var { contextPayload: r11 } = e14, t10 = fw(e14, cw), a11 = Lo(r11, e14.payloadUniqBy, vw), n10 = wn4(wn4({}, t10), {}, { payload: a11 });
  return Nr2.isValidElement(e14.content) ? Nr2.cloneElement(e14.content, n10) : typeof e14.content == "function" ? Nr2.createElement(e14.content, n10) : Nr2.createElement(gs, n10);
}
function yw(e14, r11, t10, a11, n10, i9) {
  var { layout: o15, align: l12, verticalAlign: c16 } = r11, s8, u9;
  return (!e14 || (e14.left === void 0 || e14.left === null) && (e14.right === void 0 || e14.right === null)) && (l12 === "center" && o15 === "vertical" ? s8 = { left: ((a11 || 0) - i9.width) / 2 } : s8 = l12 === "right" ? { right: t10 && t10.right || 0 } : { left: t10 && t10.left || 0 }), (!e14 || (e14.top === void 0 || e14.top === null) && (e14.bottom === void 0 || e14.bottom === null)) && (c16 === "middle" ? u9 = { top: ((n10 || 0) - i9.height) / 2 } : u9 = c16 === "bottom" ? { bottom: t10 && t10.bottom || 0 } : { top: t10 && t10.top || 0 }), wn4(wn4({}, s8), u9);
}
function gw(e14) {
  var r11 = M12();
  return yp(() => {
    r11(mp(e14));
  }, [r11, e14]), null;
}
function xw(e14) {
  var r11 = M12();
  return yp(() => (r11(js(e14)), () => {
    r11(js({ width: 0, height: 0 }));
  }), [r11, e14]), null;
}
function bw(e14, r11, t10, a11) {
  return e14 === "vertical" && r11 != null ? { height: r11 } : e14 === "horizontal" ? { width: t10 || a11 } : null;
}
var Pw = { align: "center", iconSize: 14, inactiveColor: "#ccc", itemSorter: "value", layout: "horizontal", verticalAlign: "bottom" };
function Aw(e14) {
  var r11 = L11(e14, Pw), t10 = Nf(), a11 = bf(), n10 = Rs(), { width: i9, height: o15, wrapperStyle: l12, portal: c16 } = r11, [s8, u9] = _o([t10]), d12 = Tr(), f10 = Lr2();
  if (d12 == null || f10 == null) return null;
  var p12 = d12 - (n10?.left || 0) - (n10?.right || 0), m18 = bw(r11.layout, o15, i9, p12), h13 = c16 ? l12 : wn4(wn4({ position: "absolute", width: m18?.width || i9 || "auto", height: m18?.height || o15 || "auto" }, yw(l12, r11, n10, d12, f10, s8)), l12), y16 = c16 ?? a11;
  if (y16 == null || t10 == null) return null;
  var v9 = Nr2.createElement("div", { className: "recharts-legend-wrapper", style: h13, ref: u9 }, Nr2.createElement(gw, { layout: r11.layout, align: r11.align, verticalAlign: r11.verticalAlign, itemSorter: r11.itemSorter }), !c16 && Nr2.createElement(xw, { width: s8.width, height: s8.height }), Nr2.createElement(hw, Ls({}, r11, m18, { margin: n10, chartWidth: d12, chartHeight: f10, contextPayload: t10 })));
  return mw(v9, y16);
}
var gp = Nr2.memo(Aw, Je5);
gp.displayName = "Legend";
function Ns() {
  return Ns = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Ns.apply(null, arguments);
}
function xp(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Ai(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? xp(Object(t10), true).forEach(function(a11) {
      Ow(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : xp(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function Ow(e14, r11, t10) {
  return (r11 = ww(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function ww(e14) {
  var r11 = Ew(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function Ew(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Iw(e14) {
  return Array.isArray(e14) && be8(e14[0]) && be8(e14[1]) ? e14.join(" ~ ") : e14;
}
var En2 = { separator: " : ", contentStyle: { margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, itemStyle: { display: "block", paddingTop: 4, paddingBottom: 4, color: "#000" }, labelStyle: {}, accessibilityLayer: false };
function Rw(e14, r11) {
  return r11 == null ? e14 : V5(e14, r11);
}
var Ms = (e14) => {
  var { separator: r11 = En2.separator, contentStyle: t10, itemStyle: a11, labelStyle: n10 = En2.labelStyle, payload: i9, formatter: o15, itemSorter: l12, wrapperClassName: c16, labelClassName: s8, label: u9, labelFormatter: d12, accessibilityLayer: f10 = En2.accessibilityLayer } = e14, p12 = () => {
    if (i9 && i9.length) {
      var P16 = { padding: 0, margin: 0 }, A13 = Rw(i9, l12), O12 = A13.map((w9, S11) => {
        if (!w9 || w9.type === "none") return null;
        var I24 = w9.formatter || o15 || Iw, { value: R13, name: C11 } = w9, N19 = R13, j15 = C11;
        if (I24) {
          var D18 = I24(R13, C11, w9, S11, i9);
          if (Array.isArray(D18)) [N19, j15] = D18;
          else if (D18 != null) N19 = D18;
          else return null;
        }
        var G20 = Ai(Ai({}, En2.itemStyle), {}, { color: w9.color || En2.itemStyle.color }, a11);
        return dt4.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(S11), style: G20 }, be8(j15) ? dt4.createElement("span", { className: "recharts-tooltip-item-name" }, j15) : null, be8(j15) ? dt4.createElement("span", { className: "recharts-tooltip-item-separator" }, r11) : null, dt4.createElement("span", { className: "recharts-tooltip-item-value" }, N19), dt4.createElement("span", { className: "recharts-tooltip-item-unit" }, w9.unit || ""));
      });
      return dt4.createElement("ul", { className: "recharts-tooltip-item-list", style: P16 }, O12);
    }
    return null;
  }, m18 = Ai(Ai({}, En2.contentStyle), t10), h13 = Ai({ margin: 0 }, n10), y16 = !Z10(u9), v9 = y16 ? u9 : "", g13 = bp("recharts-default-tooltip", c16), x18 = bp("recharts-tooltip-label", s8);
  y16 && d12 && i9 !== void 0 && i9 !== null && (v9 = d12(u9, i9));
  var b14 = f10 ? { role: "status", "aria-live": "assertive" } : {};
  return dt4.createElement("div", Ns({ className: g13, style: m18 }, b14), dt4.createElement("p", { className: x18, style: h13 }, dt4.isValidElement(v9) ? v9 : "".concat(v9)), p12());
};
var Oi = "recharts-tooltip-wrapper";
var jw = { visibility: "hidden" };
function kw(e14) {
  var { coordinate: r11, translateX: t10, translateY: a11 } = e14;
  return Cw(Oi, { ["".concat(Oi, "-right")]: k11(t10) && r11 && k11(r11.x) && t10 >= r11.x, ["".concat(Oi, "-left")]: k11(t10) && r11 && k11(r11.x) && t10 < r11.x, ["".concat(Oi, "-bottom")]: k11(a11) && r11 && k11(r11.y) && a11 >= r11.y, ["".concat(Oi, "-top")]: k11(a11) && r11 && k11(r11.y) && a11 < r11.y });
}
function Pp(e14) {
  var { allowEscapeViewBox: r11, coordinate: t10, key: a11, offset: n10, position: i9, reverseDirection: o15, tooltipDimension: l12, viewBox: c16, viewBoxDimension: s8 } = e14;
  if (i9 && k11(i9[a11])) return i9[a11];
  var u9 = t10[a11] - l12 - (n10 > 0 ? n10 : 0), d12 = t10[a11] + n10;
  if (r11[a11]) return o15[a11] ? u9 : d12;
  var f10 = c16[a11];
  if (f10 == null) return 0;
  if (o15[a11]) {
    var p12 = u9, m18 = f10;
    return p12 < m18 ? Math.max(d12, f10) : Math.max(u9, f10);
  }
  if (s8 == null) return 0;
  var h13 = d12 + l12, y16 = f10 + s8;
  return h13 > y16 ? Math.max(u9, f10) : Math.max(d12, f10);
}
function Dw(e14) {
  var { translateX: r11, translateY: t10, useTranslate3d: a11 } = e14;
  return { transform: a11 ? "translate3d(".concat(r11, "px, ").concat(t10, "px, 0)") : "translate(".concat(r11, "px, ").concat(t10, "px)") };
}
function Ap(e14) {
  var { allowEscapeViewBox: r11, coordinate: t10, offsetTop: a11, offsetLeft: n10, position: i9, reverseDirection: o15, tooltipBox: l12, useTranslate3d: c16, viewBox: s8 } = e14, u9, d12, f10;
  return l12.height > 0 && l12.width > 0 && t10 ? (d12 = Pp({ allowEscapeViewBox: r11, coordinate: t10, key: "x", offset: n10, position: i9, reverseDirection: o15, tooltipDimension: l12.width, viewBox: s8, viewBoxDimension: s8.width }), f10 = Pp({ allowEscapeViewBox: r11, coordinate: t10, key: "y", offset: a11, position: i9, reverseDirection: o15, tooltipDimension: l12.height, viewBox: s8, viewBoxDimension: s8.height }), u9 = Dw({ translateX: d12, translateY: f10, useTranslate3d: c16 })) : u9 = jw, { cssProperties: u9, cssClasses: kw({ translateX: d12, translateY: f10, coordinate: t10 }) };
}
var Tw = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
var Pr = { devToolsEnabled: true, isSsr: Tw() };
function Sn4() {
  var [e14, r11] = Nw(() => Pr.isSsr || !window.matchMedia ? false : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return Lw(() => {
    if (window.matchMedia) {
      var t10 = window.matchMedia("(prefers-reduced-motion: reduce)"), a11 = () => {
        r11(t10.matches);
      };
      return t10.addEventListener("change", a11), () => {
        t10.removeEventListener("change", a11);
      };
    }
  }, []), e14;
}
function Op(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function In(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Op(Object(t10), true).forEach(function(a11) {
      Mw(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Op(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function Mw(e14, r11, t10) {
  return (r11 = _w(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function _w(e14) {
  var r11 = Bw(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function Bw(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Kw(e14) {
  if (!(e14.prefersReducedMotion && e14.isAnimationActive === "auto") && e14.isAnimationActive && e14.active) return "transform ".concat(e14.animationDuration, "ms ").concat(e14.animationEasing);
}
function zw(e14) {
  var r11, t10, a11, n10, i9, o15, l12 = Sn4(), [c16, s8] = fa.useState(() => ({ dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 } }));
  fa.useEffect(() => {
    var m18 = (h13) => {
      if (h13.key === "Escape") {
        var y16, v9, g13, x18;
        s8({ dismissed: true, dismissedAtCoordinate: { x: (y16 = (v9 = e14.coordinate) === null || v9 === void 0 ? void 0 : v9.x) !== null && y16 !== void 0 ? y16 : 0, y: (g13 = (x18 = e14.coordinate) === null || x18 === void 0 ? void 0 : x18.y) !== null && g13 !== void 0 ? g13 : 0 } });
      }
    };
    return document.addEventListener("keydown", m18), () => {
      document.removeEventListener("keydown", m18);
    };
  }, [(r11 = e14.coordinate) === null || r11 === void 0 ? void 0 : r11.x, (t10 = e14.coordinate) === null || t10 === void 0 ? void 0 : t10.y]), c16.dismissed && (((a11 = (n10 = e14.coordinate) === null || n10 === void 0 ? void 0 : n10.x) !== null && a11 !== void 0 ? a11 : 0) !== c16.dismissedAtCoordinate.x || ((i9 = (o15 = e14.coordinate) === null || o15 === void 0 ? void 0 : o15.y) !== null && i9 !== void 0 ? i9 : 0) !== c16.dismissedAtCoordinate.y) && s8(In(In({}, c16), {}, { dismissed: false }));
  var { cssClasses: u9, cssProperties: d12 } = Ap({ allowEscapeViewBox: e14.allowEscapeViewBox, coordinate: e14.coordinate, offsetLeft: typeof e14.offset == "number" ? e14.offset : e14.offset.x, offsetTop: typeof e14.offset == "number" ? e14.offset : e14.offset.y, position: e14.position, reverseDirection: e14.reverseDirection, tooltipBox: { height: e14.lastBoundingBox.height, width: e14.lastBoundingBox.width }, useTranslate3d: e14.useTranslate3d, viewBox: e14.viewBox }), f10 = e14.hasPortalFromProps ? {} : In(In({ transition: Kw({ prefersReducedMotion: l12, isAnimationActive: e14.isAnimationActive, active: e14.active, animationDuration: e14.animationDuration, animationEasing: e14.animationEasing }) }, d12), {}, { pointerEvents: "none", position: "absolute", top: 0, left: 0 }), p12 = In(In({}, f10), {}, { visibility: !c16.dismissed && e14.active && e14.hasPayload ? "visible" : "hidden" }, e14.wrapperStyle);
  return fa.createElement("div", { xmlns: "http://www.w3.org/1999/xhtml", tabIndex: -1, className: u9, style: p12, ref: e14.innerRef }, e14.children);
}
var wp = fa.memo(zw);
var Zo = () => {
  var e14;
  return (e14 = E17((r11) => r11.rootProps.accessibilityLayer)) !== null && e14 !== void 0 ? e14 : true;
};
function _s() {
  return _s = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, _s.apply(null, arguments);
}
function Ep(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Sp(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Ep(Object(t10), true).forEach(function(a11) {
      Ww(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Ep(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function Ww(e14, r11, t10) {
  return (r11 = Fw(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function Fw(e14) {
  var r11 = Vw(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function Vw(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Ip = { curveBasisClosed: ti, curveBasisOpen: ni, curveBasis: jn, curveBumpX: Xt, curveBumpY: Yt2, curveLinearClosed: ui, curveLinear: K12, curveMonotoneX: hi, curveMonotoneY: fi, curveNatural: _i, curveStep: ci, curveStepAfter: mi, curveStepBefore: pi };
var $o = (e14) => W15(e14.x) && W15(e14.y);
var Rp = (e14) => e14.base != null && $o(e14.base) && $o(e14);
var wi = (e14) => e14.x;
var Ei = (e14) => e14.y;
var nE = (e14, r11) => {
  if (typeof e14 == "function") return e14;
  var t10 = "curve".concat(Kt2(e14));
  if ((t10 === "curveMonotone" || t10 === "curveBump") && r11) {
    var a11 = Ip["".concat(t10).concat(r11 === "vertical" ? "Y" : "X")];
    if (a11) return a11;
  }
  return Ip[t10] || K12;
};
var Cp = { connectNulls: false, type: "linear" };
var iE = (e14) => {
  var { type: r11 = Cp.type, points: t10 = [], baseLine: a11, layout: n10, connectNulls: i9 = Cp.connectNulls } = e14, o15 = nE(r11, n10), l12 = i9 ? t10.filter($o) : t10;
  if (Array.isArray(a11)) {
    var c16, s8 = t10.map((m18, h13) => Sp(Sp({}, m18), {}, { base: a11[h13] }));
    n10 === "vertical" ? c16 = qt().y(Ei).x1(wi).x0((m18) => m18.base.x) : c16 = qt().x(wi).y1(Ei).y0((m18) => m18.base.y);
    var u9 = c16.defined(Rp).curve(o15), d12 = i9 ? s8.filter(Rp) : s8;
    return u9(d12);
  }
  var f10;
  n10 === "vertical" && k11(a11) ? f10 = qt().y(Ei).x1(wi).x0(a11) : k11(a11) ? f10 = qt().x(wi).y1(Ei).y0(a11) : f10 = st3().x(wi).y(Ei);
  var p12 = f10.defined($o).curve(o15);
  return p12(l12);
};
var Mr = (e14) => {
  var { className: r11, points: t10, path: a11, pathRef: n10 } = e14, i9 = cr();
  if ((!t10 || !t10.length) && !a11) return null;
  var o15 = { type: e14.type, points: e14.points, baseLine: e14.baseLine, layout: e14.layout || i9, connectNulls: e14.connectNulls }, l12 = t10 && t10.length ? iE(o15) : a11;
  return jp.createElement("path", _s({}, X11(e14), mn3(e14), { className: aE("recharts-curve", r11), d: l12 === null ? void 0 : l12, ref: n10 }));
};
var oE = ["x", "y", "top", "left", "width", "height", "className"];
function Bs() {
  return Bs = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Bs.apply(null, arguments);
}
function Dp(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function lE(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Dp(Object(t10), true).forEach(function(a11) {
      cE(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Dp(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function cE(e14, r11, t10) {
  return (r11 = sE(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function sE(e14) {
  var r11 = uE(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function uE(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function dE(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = fE(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function fE(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var mE = (e14, r11, t10, a11, n10, i9) => "M".concat(e14, ",").concat(n10, "v").concat(a11, "M").concat(i9, ",").concat(r11, "h").concat(t10);
var Ks = (e14) => {
  var { x: r11 = 0, y: t10 = 0, top: a11 = 0, left: n10 = 0, width: i9 = 0, height: o15 = 0, className: l12 } = e14, c16 = dE(e14, oE), s8 = lE({ x: r11, y: t10, top: a11, left: n10, width: i9, height: o15 }, c16);
  return !k11(r11) || !k11(t10) || !k11(i9) || !k11(o15) || !k11(a11) || !k11(n10) ? null : Tp.createElement("path", Bs({}, re7(s8), { className: pE("recharts-cross", l12), d: mE(r11, t10, i9, o15, a11, n10) }));
};
function Lp(e14, r11, t10, a11) {
  var n10 = a11 / 2;
  return { stroke: "none", fill: "#ccc", x: e14 === "horizontal" ? r11.x - n10 : t10.left + 0.5, y: e14 === "horizontal" ? t10.top + 0.5 : r11.y - n10, width: e14 === "horizontal" ? a11 : t10.width - 1, height: e14 === "horizontal" ? t10.height - 1 : a11 };
}
function Np(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Mp(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Np(Object(t10), true).forEach(function(a11) {
      vE(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Np(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function vE(e14, r11, t10) {
  return (r11 = hE(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function hE(e14) {
  var r11 = yE(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function yE(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var gE = (e14) => e14.replace(/([A-Z])/g, (r11) => "-".concat(r11.toLowerCase()));
var Rn2 = (e14, r11, t10) => e14.map((a11) => "".concat(gE(a11), " ").concat(r11, "ms ").concat(t10)).join(",");
var _p = (e14, r11) => [Object.keys(e14), Object.keys(r11)].reduce((t10, a11) => t10.filter((n10) => a11.includes(n10)));
var Cn3 = (e14, r11) => Object.keys(r11).reduce((t10, a11) => Mp(Mp({}, t10), {}, { [a11]: e14(a11, r11[a11]) }), {});
function Bp(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Ze5(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Bp(Object(t10), true).forEach(function(a11) {
      xE(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Bp(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function xE(e14, r11, t10) {
  return (r11 = bE(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function bE(e14) {
  var r11 = PE(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function PE(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Jo = (e14, r11, t10) => e14 + (r11 - e14) * t10;
var zs = (e14) => {
  var { from: r11, to: t10 } = e14;
  return r11 !== t10;
};
var Kp = (e14, r11, t10) => {
  var a11 = Cn3((n10, i9) => {
    if (zs(i9)) {
      var [o15, l12] = e14(i9.from, i9.to, i9.velocity);
      return Ze5(Ze5({}, i9), {}, { from: o15, velocity: l12 });
    }
    return i9;
  }, r11);
  return t10 < 1 ? Cn3((n10, i9) => zs(i9) && a11[n10] != null ? Ze5(Ze5({}, i9), {}, { velocity: Jo(i9.velocity, a11[n10].velocity, t10), from: Jo(i9.from, a11[n10].from, t10) }) : i9, r11) : Kp(e14, a11, t10 - 1);
};
function AE(e14, r11, t10, a11, n10, i9) {
  var o15, l12 = a11.reduce((f10, p12) => Ze5(Ze5({}, f10), {}, { [p12]: { from: e14[p12], velocity: 0, to: r11[p12] } }), {}), c16 = () => Cn3((f10, p12) => p12.from, l12), s8 = () => !Object.values(l12).filter(zs).length, u9 = null, d12 = (f10) => {
    o15 || (o15 = f10);
    var p12 = f10 - o15, m18 = p12 / t10.dt;
    l12 = Kp(t10, l12, m18), n10(Ze5(Ze5(Ze5({}, e14), r11), c16())), o15 = f10, s8() || (u9 = i9.setTimeout(d12));
  };
  return () => (u9 = i9.setTimeout(d12), () => {
    var f10;
    (f10 = u9) === null || f10 === void 0 || f10();
  });
}
function OE(e14, r11, t10, a11, n10, i9, o15) {
  var l12 = null, c16 = n10.reduce((d12, f10) => {
    var p12 = e14[f10], m18 = r11[f10];
    return p12 == null || m18 == null ? d12 : Ze5(Ze5({}, d12), {}, { [f10]: [p12, m18] });
  }, {}), s8, u9 = (d12) => {
    s8 || (s8 = d12);
    var f10 = (d12 - s8) / a11, p12 = Cn3((h13, y16) => Jo(...y16, t10(f10)), c16);
    if (i9(Ze5(Ze5(Ze5({}, e14), r11), p12)), f10 < 1) l12 = o15.setTimeout(u9);
    else {
      var m18 = Cn3((h13, y16) => Jo(...y16, t10(1)), c16);
      i9(Ze5(Ze5(Ze5({}, e14), r11), m18));
    }
  };
  return () => (l12 = o15.setTimeout(u9), () => {
    var d12;
    (d12 = l12) === null || d12 === void 0 || d12();
  });
}
var zp = (e14, r11, t10, a11, n10, i9) => {
  var o15 = _p(e14, r11);
  return t10 == null ? () => (n10(Ze5(Ze5({}, e14), r11)), () => {
  }) : t10.isStepper === true ? AE(e14, r11, t10, o15, n10, i9) : OE(e14, r11, t10, a11, o15, n10, i9);
};
var Qo = 1e-4;
var Vp = (e14, r11) => [0, 3 * e14, 3 * r11 - 6 * e14, 3 * e14 - 3 * r11 + 1];
var Xp = (e14, r11) => e14.map((t10, a11) => t10 * r11 ** a11).reduce((t10, a11) => t10 + a11);
var Wp = (e14, r11) => (t10) => {
  var a11 = Vp(e14, r11);
  return Xp(a11, t10);
};
var wE = (e14, r11) => (t10) => {
  var a11 = Vp(e14, r11), n10 = [...a11.map((i9, o15) => i9 * o15).slice(1), 0];
  return Xp(n10, t10);
};
var EE = (e14) => {
  var r11, t10 = e14.split("(");
  if (t10.length !== 2 || t10[0] !== "cubic-bezier") return null;
  var a11 = (r11 = t10[1]) === null || r11 === void 0 || (r11 = r11.split(")")[0]) === null || r11 === void 0 ? void 0 : r11.split(",");
  if (a11 == null || a11.length !== 4) return null;
  var n10 = a11.map((i9) => parseFloat(i9));
  return [n10[0], n10[1], n10[2], n10[3]];
};
var SE = function() {
  for (var r11 = arguments.length, t10 = new Array(r11), a11 = 0; a11 < r11; a11++) t10[a11] = arguments[a11];
  if (t10.length === 1) switch (t10[0]) {
    case "linear":
      return [0, 0, 1, 1];
    case "ease":
      return [0.25, 0.1, 0.25, 1];
    case "ease-in":
      return [0.42, 0, 1, 1];
    case "ease-out":
      return [0.42, 0, 0.58, 1];
    case "ease-in-out":
      return [0, 0, 0.58, 1];
    default: {
      var n10 = EE(t10[0]);
      if (n10) return n10;
    }
  }
  return t10.length === 4 ? t10 : [0, 0, 1, 1];
};
var IE = (e14, r11, t10, a11) => {
  var n10 = Wp(e14, t10), i9 = Wp(r11, a11), o15 = wE(e14, t10), l12 = (s8) => s8 > 1 ? 1 : s8 < 0 ? 0 : s8, c16 = (s8) => {
    for (var u9 = s8 > 1 ? 1 : s8, d12 = u9, f10 = 0; f10 < 8; ++f10) {
      var p12 = n10(d12) - u9, m18 = o15(d12);
      if (Math.abs(p12 - u9) < Qo || m18 < Qo) return i9(d12);
      d12 = l12(d12 - p12 / m18);
    }
    return i9(d12);
  };
  return c16.isStepper = false, c16;
};
var Fp = function() {
  return IE(...SE(...arguments));
};
var RE = function() {
  var r11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { stiff: t10 = 100, damping: a11 = 8, dt: n10 = 17 } = r11, i9 = (o15, l12, c16) => {
    var s8 = -(o15 - l12) * t10, u9 = c16 * a11, d12 = c16 + (s8 - u9) * n10 / 1e3, f10 = c16 * n10 / 1e3 + o15;
    return Math.abs(f10 - l12) < Qo && Math.abs(d12) < Qo ? [l12, 0] : [f10, d12];
  };
  return i9.isStepper = true, i9.dt = n10, i9;
};
var Gp = (e14) => {
  if (typeof e14 == "string") switch (e14) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return Fp(e14);
    case "spring":
      return RE();
    default:
      if (e14.split("(")[0] === "cubic-bezier") return Fp(e14);
  }
  return typeof e14 == "function" ? e14 : null;
};
function Hp(e14) {
  var r11, t10 = () => null, a11 = false, n10 = null, i9 = (o15) => {
    if (!a11) {
      if (Array.isArray(o15)) {
        if (!o15.length) return;
        var l12 = o15, [c16, ...s8] = l12;
        if (typeof c16 == "number") {
          n10 = e14.setTimeout(i9.bind(null, s8), c16);
          return;
        }
        i9(c16), n10 = e14.setTimeout(i9.bind(null, s8));
        return;
      }
      typeof o15 == "string" && (r11 = o15, t10(r11)), typeof o15 == "object" && (r11 = o15, t10(r11)), typeof o15 == "function" && o15();
    }
  };
  return { stop: () => {
    a11 = true;
  }, start: (o15) => {
    a11 = false, n10 && (n10(), n10 = null), i9(o15);
  }, subscribe: (o15) => (t10 = o15, () => {
    t10 = () => null;
  }), getTimeoutController: () => e14 };
}
var el = class {
  setTimeout(r11) {
    var t10 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a11 = performance.now(), n10 = null, i9 = (o15) => {
      o15 - a11 >= t10 ? r11(o15) : typeof requestAnimationFrame == "function" && (n10 = requestAnimationFrame(i9));
    };
    return n10 = requestAnimationFrame(i9), () => {
      n10 != null && cancelAnimationFrame(n10);
    };
  }
};
function Yp() {
  return Hp(new el());
}
var DE = CE(Yp);
function rl(e14, r11) {
  var t10 = jE(DE);
  return kE(() => r11 ?? t10(e14), [e14, r11, t10]);
}
var NE = { begin: 0, duration: 1e3, easing: "ease", isActive: true, canBegin: true, onAnimationEnd: () => {
}, onAnimationStart: () => {
} };
var Zp = { t: 0 };
var Ws = { t: 1 };
function Ye4(e14) {
  var r11 = L11(e14, NE), { isActive: t10, canBegin: a11, duration: n10, easing: i9, begin: o15, onAnimationEnd: l12, onAnimationStart: c16, children: s8 } = r11, u9 = Sn4(), d12 = t10 === "auto" ? !Pr.isSsr && !u9 : t10, f10 = rl(r11.animationId, r11.animationManager), [p12, m18] = LE(d12 ? Zp : Ws), h13 = TE(null);
  return Up(() => {
    d12 || m18(Ws);
  }, [d12]), Up(() => {
    if (!d12 || !a11) return ye6;
    var y16 = zp(Zp, Ws, Gp(i9), n10, m18, f10.getTimeoutController()), v9 = () => {
      h13.current = y16();
    };
    return f10.start([c16, o15, v9, n10, l12]), () => {
      f10.stop(), h13.current && h13.current(), l12();
    };
  }, [d12, a11, n10, i9, o15, c16, l12, f10]), s8(p12.t);
}
function Ue2(e14) {
  var r11 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", t10 = qp(lt6(r11)), a11 = qp(e14);
  return a11.current !== e14 && (t10.current = lt6(r11), a11.current = e14), t10.current;
}
var ME = ["radius"];
var _E = ["radius"];
var $p;
var Jp;
var Qp;
var em;
var rm;
var tm;
var am;
var nm;
var im;
var om;
function lm(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function cm(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? lm(Object(t10), true).forEach(function(a11) {
      BE(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : lm(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function BE(e14, r11, t10) {
  return (r11 = KE(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function KE(e14) {
  var r11 = zE(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function zE(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function al() {
  return al = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, al.apply(null, arguments);
}
function sm(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = WE(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function WE(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function St2(e14, r11) {
  return r11 || (r11 = e14.slice(0)), Object.freeze(Object.defineProperties(e14, { raw: { value: Object.freeze(r11) } }));
}
var um = (e14, r11, t10, a11, n10) => {
  var i9 = Et(t10), o15 = Et(a11), l12 = Math.min(Math.abs(i9) / 2, Math.abs(o15) / 2), c16 = o15 >= 0 ? 1 : -1, s8 = i9 >= 0 ? 1 : -1, u9 = o15 >= 0 && i9 >= 0 || o15 < 0 && i9 < 0 ? 1 : 0, d12;
  if (l12 > 0 && Array.isArray(n10)) {
    for (var f10 = [0, 0, 0, 0], p12 = 0, m18 = 4; p12 < m18; p12++) {
      var h13, y16 = (h13 = n10[p12]) !== null && h13 !== void 0 ? h13 : 0;
      f10[p12] = y16 > l12 ? l12 : y16;
    }
    d12 = xe5($p || ($p = St2(["M", ",", ""])), e14, r11 + c16 * f10[0]), f10[0] > 0 && (d12 += xe5(Jp || (Jp = St2(["A ", ",", ",0,0,", ",", ",", ""])), f10[0], f10[0], u9, e14 + s8 * f10[0], r11)), d12 += xe5(Qp || (Qp = St2(["L ", ",", ""])), e14 + t10 - s8 * f10[1], r11), f10[1] > 0 && (d12 += xe5(em || (em = St2(["A ", ",", ",0,0,", `,
        `, ",", ""])), f10[1], f10[1], u9, e14 + t10, r11 + c16 * f10[1])), d12 += xe5(rm || (rm = St2(["L ", ",", ""])), e14 + t10, r11 + a11 - c16 * f10[2]), f10[2] > 0 && (d12 += xe5(tm || (tm = St2(["A ", ",", ",0,0,", `,
        `, ",", ""])), f10[2], f10[2], u9, e14 + t10 - s8 * f10[2], r11 + a11)), d12 += xe5(am || (am = St2(["L ", ",", ""])), e14 + s8 * f10[3], r11 + a11), f10[3] > 0 && (d12 += xe5(nm || (nm = St2(["A ", ",", ",0,0,", `,
        `, ",", ""])), f10[3], f10[3], u9, e14, r11 + a11 - c16 * f10[3])), d12 += "Z";
  } else if (l12 > 0 && n10 === +n10 && n10 > 0) {
    var v9 = Math.min(l12, n10);
    d12 = xe5(im || (im = St2(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e14, r11 + c16 * v9, v9, v9, u9, e14 + s8 * v9, r11, e14 + t10 - s8 * v9, r11, v9, v9, u9, e14 + t10, r11 + c16 * v9, e14 + t10, r11 + a11 - c16 * v9, v9, v9, u9, e14 + t10 - s8 * v9, r11 + a11, e14 + s8 * v9, r11 + a11, v9, v9, u9, e14, r11 + a11 - c16 * v9);
  } else d12 = xe5(om || (om = St2(["M ", ",", " h ", " v ", " h ", " Z"])), e14, r11, t10, a11, -t10);
  return d12;
};
var dm = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" };
var _r = (e14) => {
  var r11 = L11(e14, dm), t10 = Si(null), [a11, n10] = XE(-1);
  FE(() => {
    if (t10.current && t10.current.getTotalLength) try {
      var H14 = t10.current.getTotalLength();
      H14 && n10(H14);
    } catch {
    }
  }, []);
  var { x: i9, y: o15, width: l12, height: c16, radius: s8, className: u9 } = r11, { animationEasing: d12, animationDuration: f10, animationBegin: p12, isAnimationActive: m18, isUpdateAnimationActive: h13 } = r11, y16 = Si(l12), v9 = Si(c16), g13 = Si(i9), x18 = Si(o15), b14 = VE(() => ({ x: i9, y: o15, width: l12, height: c16, radius: s8 }), [i9, o15, l12, c16, s8]), P16 = Ue2(b14, "rectangle-");
  if (i9 !== +i9 || o15 !== +o15 || l12 !== +l12 || c16 !== +c16 || l12 === 0 || c16 === 0) return null;
  var A13 = GE("recharts-rectangle", u9);
  if (!h13) {
    var O12 = re7(r11), { radius: w9 } = O12, S11 = sm(O12, ME);
    return tl.createElement("path", al({}, S11, { x: Et(i9), y: Et(o15), width: Et(l12), height: Et(c16), radius: typeof s8 == "number" ? s8 : void 0, className: A13, d: um(i9, o15, l12, c16, s8) }));
  }
  var I24 = y16.current, R13 = v9.current, C11 = g13.current, N19 = x18.current, j15 = "0px ".concat(a11 === -1 ? 1 : a11, "px"), D18 = "".concat(a11, "px ").concat(a11, "px"), G20 = Rn2(["strokeDasharray"], f10, typeof d12 == "string" ? d12 : dm.animationEasing);
  return tl.createElement(Ye4, { animationId: P16, key: P16, canBegin: a11 > 0, duration: f10, easing: d12, isActive: h13, begin: p12 }, (H14) => {
    var ie6 = B18(I24, l12, H14), Y10 = B18(R13, c16, H14), oe8 = B18(C11, i9, H14), ae11 = B18(N19, o15, H14);
    t10.current && (y16.current = ie6, v9.current = Y10, g13.current = oe8, x18.current = ae11);
    var fe9;
    m18 ? H14 > 0 ? fe9 = { transition: G20, strokeDasharray: D18 } : fe9 = { strokeDasharray: j15 } : fe9 = { strokeDasharray: D18 };
    var Me5 = re7(r11), { radius: Pe5 } = Me5, Fe5 = sm(Me5, _E);
    return tl.createElement("path", al({}, Fe5, { radius: typeof s8 == "number" ? s8 : void 0, className: A13, d: um(oe8, ae11, ie6, Y10, s8), ref: t10, style: cm(cm({}, fe9), r11.style) }));
  });
};
function fm(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function pm(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? fm(Object(t10), true).forEach(function(a11) {
      HE(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : fm(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function HE(e14, r11, t10) {
  return (r11 = YE(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function YE(e14) {
  var r11 = UE(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function UE(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Ii = Math.PI / 180;
var Ri = (e14) => e14 * Math.PI / 180;
var ZE = (e14) => e14 * 180 / Math.PI;
var Q12 = (e14, r11, t10, a11) => ({ x: e14 + Math.cos(-Ii * a11) * t10, y: r11 + Math.sin(-Ii * a11) * t10 });
var nl = function(r11, t10) {
  var a11 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0, brushBottom: 0 };
  return Math.min(Math.abs(r11 - (a11.left || 0) - (a11.right || 0)), Math.abs(t10 - (a11.top || 0) - (a11.bottom || 0))) / 2;
};
var qE = (e14, r11) => {
  var { x: t10, y: a11 } = e14, { x: n10, y: i9 } = r11;
  return Math.sqrt((t10 - n10) ** 2 + (a11 - i9) ** 2);
};
var $E = (e14, r11) => {
  var { x: t10, y: a11 } = e14, { cx: n10, cy: i9 } = r11, o15 = qE({ x: t10, y: a11 }, { x: n10, y: i9 });
  if (o15 <= 0) return { radius: o15, angle: 0 };
  var l12 = (t10 - n10) / o15, c16 = Math.acos(l12);
  return a11 > i9 && (c16 = 2 * Math.PI - c16), { radius: o15, angle: ZE(c16), angleInRadian: c16 };
};
var JE = (e14) => {
  var { startAngle: r11, endAngle: t10 } = e14, a11 = Math.floor(r11 / 360), n10 = Math.floor(t10 / 360), i9 = Math.min(a11, n10);
  return { startAngle: r11 - i9 * 360, endAngle: t10 - i9 * 360 };
};
var QE = (e14, r11) => {
  var { startAngle: t10, endAngle: a11 } = r11, n10 = Math.floor(t10 / 360), i9 = Math.floor(a11 / 360), o15 = Math.min(n10, i9);
  return e14 + o15 * 360;
};
var mm = (e14, r11) => {
  var { relativeX: t10, relativeY: a11 } = e14, { radius: n10, angle: i9 } = $E({ x: t10, y: a11 }, r11), { innerRadius: o15, outerRadius: l12 } = r11;
  if (n10 < o15 || n10 > l12 || n10 === 0) return null;
  var { startAngle: c16, endAngle: s8 } = JE(r11), u9 = i9, d12;
  if (c16 <= s8) {
    for (; u9 > s8; ) u9 -= 360;
    for (; u9 < c16; ) u9 += 360;
    d12 = u9 >= c16 && u9 <= s8;
  } else {
    for (; u9 > c16; ) u9 -= 360;
    for (; u9 < s8; ) u9 += 360;
    d12 = u9 >= s8 && u9 <= c16;
  }
  return d12 ? pm(pm({}, r11), {}, { radius: n10, angle: QE(u9, r11) }) : null;
};
function il(e14) {
  var { cx: r11, cy: t10, radius: a11, startAngle: n10, endAngle: i9 } = e14, o15 = Q12(r11, t10, a11, n10), l12 = Q12(r11, t10, a11, i9);
  return { points: [o15, l12], cx: r11, cy: t10, radius: a11, startAngle: n10, endAngle: i9 };
}
var vm;
var hm;
var ym;
var gm;
var xm;
var bm;
var Pm;
function Fs() {
  return Fs = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Fs.apply(null, arguments);
}
function Ka(e14, r11) {
  return r11 || (r11 = e14.slice(0)), Object.freeze(Object.defineProperties(e14, { raw: { value: Object.freeze(r11) } }));
}
var rS = (e14, r11) => {
  var t10 = he4(r11 - e14), a11 = Math.min(Math.abs(r11 - e14), 359.999);
  return t10 * a11;
};
var ol = (e14) => {
  var { cx: r11, cy: t10, radius: a11, angle: n10, sign: i9, isExternal: o15, cornerRadius: l12, cornerIsExternal: c16 } = e14, s8 = l12 * (o15 ? 1 : -1) + a11, u9 = Math.asin(l12 / s8) / Ii, d12 = c16 ? n10 : n10 + i9 * u9, f10 = Q12(r11, t10, s8, d12), p12 = Q12(r11, t10, a11, d12), m18 = c16 ? n10 - i9 * u9 : n10, h13 = Q12(r11, t10, s8 * Math.cos(u9 * Ii), m18);
  return { center: f10, circleTangency: p12, lineTangency: h13, theta: u9 };
};
var Om = (e14) => {
  var { cx: r11, cy: t10, innerRadius: a11, outerRadius: n10, startAngle: i9, endAngle: o15 } = e14, l12 = rS(i9, o15), c16 = i9 + l12, s8 = Q12(r11, t10, n10, i9), u9 = Q12(r11, t10, n10, c16), d12 = xe5(vm || (vm = Ka(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), s8.x, s8.y, n10, n10, +(Math.abs(l12) > 180), +(i9 > c16), u9.x, u9.y);
  if (a11 > 0) {
    var f10 = Q12(r11, t10, a11, i9), p12 = Q12(r11, t10, a11, c16);
    d12 += xe5(hm || (hm = Ka(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), p12.x, p12.y, a11, a11, +(Math.abs(l12) > 180), +(i9 <= c16), f10.x, f10.y);
  } else d12 += xe5(ym || (ym = Ka(["L ", ",", " Z"])), r11, t10);
  return d12;
};
var tS = (e14) => {
  var { cx: r11, cy: t10, innerRadius: a11, outerRadius: n10, cornerRadius: i9, forceCornerRadius: o15, cornerIsExternal: l12, startAngle: c16, endAngle: s8 } = e14, u9 = he4(s8 - c16), { circleTangency: d12, lineTangency: f10, theta: p12 } = ol({ cx: r11, cy: t10, radius: n10, angle: c16, sign: u9, cornerRadius: i9, cornerIsExternal: l12 }), { circleTangency: m18, lineTangency: h13, theta: y16 } = ol({ cx: r11, cy: t10, radius: n10, angle: s8, sign: -u9, cornerRadius: i9, cornerIsExternal: l12 }), v9 = l12 ? Math.abs(c16 - s8) : Math.abs(c16 - s8) - p12 - y16;
  if (v9 < 0) return o15 ? xe5(gm || (gm = Ka(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), f10.x, f10.y, i9, i9, i9 * 2, i9, i9, -i9 * 2) : Om({ cx: r11, cy: t10, innerRadius: a11, outerRadius: n10, startAngle: c16, endAngle: s8 });
  var g13 = xe5(xm || (xm = Ka(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), f10.x, f10.y, i9, i9, +(u9 < 0), d12.x, d12.y, n10, n10, +(v9 > 180), +(u9 < 0), m18.x, m18.y, i9, i9, +(u9 < 0), h13.x, h13.y);
  if (a11 > 0) {
    var { circleTangency: x18, lineTangency: b14, theta: P16 } = ol({ cx: r11, cy: t10, radius: a11, angle: c16, sign: u9, isExternal: true, cornerRadius: i9, cornerIsExternal: l12 }), { circleTangency: A13, lineTangency: O12, theta: w9 } = ol({ cx: r11, cy: t10, radius: a11, angle: s8, sign: -u9, isExternal: true, cornerRadius: i9, cornerIsExternal: l12 }), S11 = l12 ? Math.abs(c16 - s8) : Math.abs(c16 - s8) - P16 - w9;
    if (S11 < 0 && i9 === 0) return "".concat(g13, "L").concat(r11, ",").concat(t10, "Z");
    g13 += xe5(bm || (bm = Ka(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), O12.x, O12.y, i9, i9, +(u9 < 0), A13.x, A13.y, a11, a11, +(S11 > 180), +(u9 > 0), x18.x, x18.y, i9, i9, +(u9 < 0), b14.x, b14.y);
  } else g13 += xe5(Pm || (Pm = Ka(["L", ",", "Z"])), r11, t10);
  return g13;
};
var aS = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false };
var za = (e14) => {
  var r11 = L11(e14, aS), { cx: t10, cy: a11, innerRadius: n10, outerRadius: i9, cornerRadius: o15, forceCornerRadius: l12, cornerIsExternal: c16, startAngle: s8, endAngle: u9, className: d12 } = r11;
  if (i9 < n10 || s8 === u9) return null;
  var f10 = eS("recharts-sector", d12), p12 = i9 - n10, m18 = Ae6(o15, p12, 0, true), h13;
  return m18 > 0 && Math.abs(s8 - u9) < 360 ? h13 = tS({ cx: t10, cy: a11, innerRadius: n10, outerRadius: i9, cornerRadius: Math.min(m18, p12 / 2), forceCornerRadius: l12, cornerIsExternal: c16, startAngle: s8, endAngle: u9 }) : h13 = Om({ cx: t10, cy: a11, innerRadius: n10, outerRadius: i9, startAngle: s8, endAngle: u9 }), Am.createElement("path", Fs({}, re7(r11), { className: f10, d: h13 }));
};
function wm(e14, r11, t10) {
  if (e14 === "horizontal") return [{ x: r11.x, y: t10.top }, { x: r11.x, y: t10.top + t10.height }];
  if (e14 === "vertical") return [{ x: t10.left, y: r11.y }, { x: t10.left + t10.width, y: r11.y }];
  if (Do(r11)) {
    if (e14 === "centric") {
      var { cx: a11, cy: n10, innerRadius: i9, outerRadius: o15, angle: l12 } = r11, c16 = Q12(a11, n10, i9, l12), s8 = Q12(a11, n10, o15, l12);
      return [{ x: c16.x, y: c16.y }, { x: s8.x, y: s8.y }];
    }
    return il(r11);
  }
}
var sr2 = (e14) => e14.chartData;
var Sr2 = fe7([sr2], (e14) => {
  var r11 = e14.chartData != null ? e14.chartData.length - 1 : 0;
  return { chartData: e14.chartData, computedData: e14.computedData, dataEndIndex: r11, dataStartIndex: 0 };
});
var Ft2 = (e14, r11, t10, a11) => a11 ? Sr2(e14) : sr2(e14);
var cl = (e14, r11, t10) => t10 ? Sr2(e14) : sr2(e14);
var Em = fe7([Ft2], (e14) => {
  var { chartData: r11, dataStartIndex: t10, dataEndIndex: a11 } = e14;
  return r11 != null ? r11.slice(t10, a11 + 1) : [];
});
var Sm = fe7([Sr2], (e14) => {
  var { chartData: r11, dataStartIndex: t10, dataEndIndex: a11 } = e14;
  return r11 != null ? r11.slice(t10, a11 + 1) : [];
});
var Im = fe7([sr2], (e14) => {
  var { chartData: r11, dataStartIndex: t10, dataEndIndex: a11 } = e14;
  return r11 != null ? r11.slice(t10, a11 + 1) : [];
});
function Br2(e14) {
  if (Array.isArray(e14) && e14.length === 2) {
    var [r11, t10] = e14;
    if (W15(r11) && W15(t10)) return true;
  }
  return false;
}
function Rm(e14, r11, t10) {
  return t10 ? e14 : [Math.min(e14[0], r11[0]), Math.max(e14[1], r11[1])];
}
function sl(e14, r11) {
  if (r11 && typeof e14 != "function" && Array.isArray(e14) && e14.length === 2) {
    var [t10, a11] = e14, n10, i9;
    if (W15(t10)) n10 = t10;
    else if (typeof t10 == "function") return;
    if (W15(a11)) i9 = a11;
    else if (typeof a11 == "function") return;
    var o15 = [n10, i9];
    if (Br2(o15)) return o15;
  }
}
function Cm(e14, r11, t10) {
  if (!(!t10 && r11 == null)) {
    if (typeof e14 == "function" && r11 != null) try {
      var a11 = e14(r11, t10);
      if (Br2(a11)) return Rm(a11, r11, t10);
    } catch {
    }
    if (Array.isArray(e14) && e14.length === 2) {
      var [n10, i9] = e14, o15, l12;
      if (n10 === "auto") r11 != null && (o15 = Math.min(...r11));
      else if (k11(n10)) o15 = n10;
      else if (typeof n10 == "function") try {
        r11 != null && (o15 = n10(r11?.[0]));
      } catch {
      }
      else if (typeof n10 == "string" && As.test(n10)) {
        var c16 = As.exec(n10);
        if (c16 == null || c16[1] == null || r11 == null) o15 = void 0;
        else {
          var s8 = +c16[1];
          o15 = r11[0] - s8;
        }
      } else o15 = r11?.[0];
      if (i9 === "auto") r11 != null && (l12 = Math.max(...r11));
      else if (k11(i9)) l12 = i9;
      else if (typeof i9 == "function") try {
        r11 != null && (l12 = i9(r11?.[1]));
      } catch {
      }
      else if (typeof i9 == "string" && Os.test(i9)) {
        var u9 = Os.exec(i9);
        if (u9 == null || u9[1] == null || r11 == null) l12 = void 0;
        else {
          var d12 = +u9[1];
          l12 = r11[1] + d12;
        }
      } else l12 = r11?.[1];
      var f10 = [o15, l12];
      if (Br2(f10)) return r11 == null ? f10 : Rm(f10, r11, t10);
    }
  }
}
function Vs(e14) {
  var r11;
  return e14 === 0 ? r11 = 1 : r11 = Math.floor(new _e3(e14).abs().log(10).toNumber()) + 1, r11;
}
function Xs(e14, r11, t10) {
  for (var a11 = new _e3(e14), n10 = 0, i9 = []; a11.lt(r11) && n10 < 1e5; ) i9.push(a11.toNumber()), a11 = a11.add(t10), n10++;
  return i9;
}
var km = (e14) => {
  var [r11, t10] = e14, [a11, n10] = [r11, t10];
  return r11 > t10 && ([a11, n10] = [t10, r11]), [a11, n10];
};
var Gs = (e14, r11, t10) => {
  if (e14.lte(0)) return new _e3(0);
  var a11 = Vs(e14.toNumber()), n10 = new _e3(10).pow(a11), i9 = e14.div(n10), o15 = a11 !== 1 ? 0.05 : 0.1, l12 = new _e3(Math.ceil(i9.div(o15).toNumber())).add(t10).mul(o15), c16 = l12.mul(n10);
  return r11 ? new _e3(c16.toNumber()) : new _e3(Math.ceil(c16.toNumber()));
};
var Dm = (e14, r11, t10) => {
  var a11;
  if (e14.lte(0)) return new _e3(0);
  var n10 = [1, 2, 2.5, 5], i9 = e14.toNumber(), o15 = Math.floor(new _e3(i9).abs().log(10).toNumber()), l12 = new _e3(10).pow(o15), c16 = e14.div(l12).toNumber(), s8 = n10.findIndex((p12) => p12 >= c16 - 1e-10);
  if (s8 === -1 && (l12 = l12.mul(10), s8 = 0), s8 += t10, s8 >= n10.length) {
    var u9 = Math.floor(s8 / n10.length);
    s8 %= n10.length, l12 = l12.mul(new _e3(10).pow(u9));
  }
  var d12 = (a11 = n10[s8]) !== null && a11 !== void 0 ? a11 : 1, f10 = new _e3(d12).mul(l12);
  return r11 ? f10 : new _e3(Math.ceil(f10.toNumber()));
};
var nS = (e14, r11, t10) => {
  var a11 = new _e3(1), n10 = new _e3(e14);
  if (!n10.isint() && t10) {
    var i9 = Math.abs(e14);
    i9 < 1 ? (a11 = new _e3(10).pow(Vs(e14) - 1), n10 = new _e3(Math.floor(n10.div(a11).toNumber())).mul(a11)) : i9 > 1 && (n10 = new _e3(Math.floor(e14)));
  } else e14 === 0 ? n10 = new _e3(Math.floor((r11 - 1) / 2)) : t10 || (n10 = new _e3(Math.floor(e14)));
  for (var o15 = Math.floor((r11 - 1) / 2), l12 = [], c16 = 0; c16 < r11; c16++) l12.push(n10.add(new _e3(c16 - o15).mul(a11)).toNumber());
  return l12;
};
var Tm = function(r11, t10, a11, n10) {
  var i9 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, o15 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Gs;
  if (!Number.isFinite((t10 - r11) / (a11 - 1))) return { step: new _e3(0), tickMin: new _e3(0), tickMax: new _e3(0) };
  var l12 = o15(new _e3(t10).sub(r11).div(a11 - 1), n10, i9), c16;
  r11 <= 0 && t10 >= 0 ? c16 = new _e3(0) : (c16 = new _e3(r11).add(t10).div(2), c16 = c16.sub(new _e3(c16).mod(l12)));
  var s8 = Math.ceil(c16.sub(r11).div(l12).toNumber()), u9 = Math.ceil(new _e3(t10).sub(c16).div(l12).toNumber()), d12 = s8 + u9 + 1;
  return d12 > a11 ? Tm(r11, t10, a11, n10, i9 + 1, o15) : (d12 < a11 && (u9 = t10 > 0 ? u9 + (a11 - d12) : u9, s8 = t10 > 0 ? s8 : s8 + (a11 - d12)), { step: l12, tickMin: c16.sub(new _e3(s8).mul(l12)), tickMax: c16.add(new _e3(u9).mul(l12)) });
};
var Ci = function(r11) {
  var [t10, a11] = r11, n10 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i9 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o15 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", l12 = Math.max(n10, 2), [c16, s8] = km([t10, a11]);
  if (c16 === -1 / 0 || s8 === 1 / 0) {
    var u9 = s8 === 1 / 0 ? [c16, ...Array(n10 - 1).fill(1 / 0)] : [...Array(n10 - 1).fill(-1 / 0), s8];
    return t10 > a11 ? u9.reverse() : u9;
  }
  if (c16 === s8) return nS(c16, n10, i9);
  var d12 = o15 === "snap125" ? Dm : Gs, { step: f10, tickMin: p12, tickMax: m18 } = Tm(c16, s8, l12, i9, 0, d12), h13 = Xs(p12, m18.add(new _e3(0.1).mul(f10)), f10);
  return t10 > a11 ? h13.reverse() : h13;
};
var ul = function(r11, t10) {
  var [a11, n10] = r11, i9 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o15 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", [l12, c16] = km([a11, n10]);
  if (l12 === -1 / 0 || c16 === 1 / 0) return [a11, n10];
  if (l12 === c16) return [l12];
  var s8 = o15 === "snap125" ? Dm : Gs, u9 = Math.max(t10, 2), d12 = s8(new _e3(c16).sub(l12).div(u9 - 1), i9, 0), f10 = [...Xs(new _e3(l12), new _e3(c16), d12), c16];
  return i9 === false && (f10 = f10.map((p12) => Math.round(p12))), a11 > n10 ? f10.reverse() : f10;
};
var jn2 = (e14) => e14.rootProps.maxBarSize;
var dl = (e14) => e14.rootProps.barGap;
var kn4 = (e14) => e14.rootProps.barCategoryGap;
var fl = (e14) => e14.rootProps.barSize;
var It4 = (e14) => e14.rootProps.stackOffset;
var Dn3 = (e14) => e14.rootProps.reverseStackOrder;
var Tn3 = (e14) => e14.options.chartName;
var ji = (e14) => e14.rootProps.syncId;
var Hs = (e14) => e14.rootProps.syncMethod;
var ki = (e14) => e14.options.eventEmitter;
var Lm = (e14) => e14.rootProps.baseValue;
var V14 = { grid: -100, barBackground: -50, area: 100, cursorRectangle: 200, bar: 300, line: 400, axis: 500, scatter: 600, activeBar: 1e3, cursorLine: 1100, activeDot: 1200, label: 2e3 };
var Rt3 = { allowDecimals: false, allowDuplicatedCategory: true, allowDataOverflow: false, angle: 0, angleAxisId: 0, axisLine: true, axisLineType: "polygon", cx: 0, cy: 0, hide: false, includeHidden: false, label: false, niceTicks: "auto", orientation: "outer", reversed: false, scale: "auto", tick: true, tickLine: true, tickSize: 8, type: "auto", zIndex: V14.axis };
var Kr = { allowDataOverflow: false, allowDecimals: false, allowDuplicatedCategory: true, angle: 0, axisLine: true, includeHidden: false, hide: false, niceTicks: "auto", label: false, orientation: "right", radiusAxisId: 0, reversed: false, scale: "auto", stroke: "#ccc", tick: true, tickCount: 5, tickLine: true, type: "auto", zIndex: V14.axis };
var Wa = (e14, r11) => {
  if (!(!e14 || !r11)) return e14 != null && e14.reversed ? [r11[1], r11[0]] : r11;
};
function ft5(e14, r11, t10) {
  if (t10 !== "auto") return t10;
  if (e14 != null) return Ge4(e14, r11) ? "category" : "number";
}
function Nm(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function pl(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Nm(Object(t10), true).forEach(function(a11) {
      iS(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Nm(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function iS(e14, r11, t10) {
  return (r11 = oS(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function oS(e14) {
  var r11 = lS(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function lS(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Mm = { allowDataOverflow: Rt3.allowDataOverflow, allowDecimals: Rt3.allowDecimals, allowDuplicatedCategory: false, dataKey: void 0, domain: void 0, id: Rt3.angleAxisId, includeHidden: false, name: void 0, reversed: Rt3.reversed, scale: Rt3.scale, tick: Rt3.tick, tickCount: void 0, ticks: void 0, type: Rt3.type, unit: void 0, niceTicks: "auto" };
var _m = { allowDataOverflow: Kr.allowDataOverflow, allowDecimals: Kr.allowDecimals, allowDuplicatedCategory: Kr.allowDuplicatedCategory, dataKey: void 0, domain: void 0, id: Kr.radiusAxisId, includeHidden: Kr.includeHidden, name: void 0, reversed: Kr.reversed, scale: Kr.scale, tick: Kr.tick, tickCount: Kr.tickCount, ticks: void 0, type: Kr.type, unit: void 0, niceTicks: "auto" };
var cS = (e14, r11) => {
  if (r11 != null) return e14.polarAxis.angleAxis[r11];
};
var Gr = fe7([cS, Ho], (e14, r11) => {
  var t10;
  if (e14 != null) return e14;
  var a11 = (t10 = ft5(r11, "angleAxis", Mm.type)) !== null && t10 !== void 0 ? t10 : "category";
  return pl(pl({}, Mm), {}, { type: a11 });
});
var sS = (e14, r11) => e14.polarAxis.radiusAxis[r11];
var jt = fe7([sS, Ho], (e14, r11) => {
  var t10;
  if (e14 != null) return e14;
  var a11 = (t10 = ft5(r11, "radiusAxis", _m.type)) !== null && t10 !== void 0 ? t10 : "category";
  return pl(pl({}, _m), {}, { type: a11 });
});
var ml = (e14) => e14.polarOptions;
var Ys = fe7([or3, lr2, me9], nl);
var Bm = fe7([ml, Ys], (e14, r11) => {
  if (e14 != null) return Ae6(e14.innerRadius, r11, 0);
});
var Km = fe7([ml, Ys], (e14, r11) => {
  if (e14 != null) return Ae6(e14.outerRadius, r11, r11 * 0.8);
});
var uS = (e14) => {
  if (e14 == null) return [0, 0];
  var { startAngle: r11, endAngle: t10 } = e14;
  return [r11, t10];
};
var Us = fe7([ml], uS);
var zm = fe7([Gr, Us], Wa);
var Zs = fe7([Ys, Bm, Km], (e14, r11, t10) => {
  if (!(e14 == null || r11 == null || t10 == null)) return [r11, t10];
});
var Wm = fe7([jt, Zs], Wa);
var Ir = fe7([z15, ml, Bm, Km, or3, lr2], (e14, r11, t10, a11, n10, i9) => {
  if (!(e14 !== "centric" && e14 !== "radial" || r11 == null || t10 == null || a11 == null)) {
    var { cx: o15, cy: l12, startAngle: c16, endAngle: s8 } = r11;
    return { cx: Ae6(o15, n10, n10 / 2), cy: Ae6(l12, i9, i9 / 2), innerRadius: t10, outerRadius: a11, startAngle: c16, endAngle: s8, clockWise: false };
  }
});
var ge7 = (e14, r11) => r11;
var Fa = (e14, r11, t10) => t10;
function pa(e14) {
  return e14?.id;
}
function Ln3(e14, r11, t10) {
  var { chartData: a11 = [] } = r11, { allowDuplicatedCategory: n10, dataKey: i9 } = t10, o15 = /* @__PURE__ */ new Map();
  return e14.forEach((l12) => {
    var c16, s8 = (c16 = l12.data) !== null && c16 !== void 0 ? c16 : a11;
    if (!(s8 == null || s8.length === 0)) {
      var u9 = pa(l12);
      s8.forEach((d12, f10) => {
        var p12 = i9 == null || n10 ? f10 : String(_13(d12, i9, null)), m18 = _13(d12, l12.dataKey, 0), h13;
        o15.has(p12) ? h13 = o15.get(p12) : h13 = {}, Object.assign(h13, { [u9]: m18 }), o15.set(p12, h13);
      });
    }
  }), Array.from(o15.values());
}
function Vt2(e14) {
  return "stackId" in e14 && e14.stackId != null && e14.dataKey != null;
}
var Nn2 = (e14, r11) => e14 === r11 ? true : e14 == null || r11 == null ? false : e14[0] === r11[0] && e14[1] === r11[1];
function Mn3(e14, r11) {
  return Array.isArray(e14) && Array.isArray(r11) && e14.length === 0 && r11.length === 0 ? true : e14 === r11;
}
function Fm(e14, r11) {
  if (e14.length === r11.length) {
    for (var t10 = 0; t10 < e14.length; t10++) if (e14[t10] !== r11[t10]) return false;
    return true;
  }
  return false;
}
var Ke4 = (e14) => {
  var r11 = z15(e14);
  return r11 === "horizontal" ? "xAxis" : r11 === "vertical" ? "yAxis" : r11 === "centric" ? "angleAxis" : "radiusAxis";
};
var ma = (e14) => e14.tooltip.settings.axisId;
function Va(e14) {
  if (e14 != null) {
    var r11 = e14.ticks, t10 = e14.bandwidth, a11 = e14.range(), n10 = [Math.min(...a11), Math.max(...a11)];
    return { domain: () => e14.domain(), range: function(i9) {
      function o15() {
        return i9.apply(this, arguments);
      }
      return o15.toString = function() {
        return i9.toString();
      }, o15;
    }(() => n10), rangeMin: () => n10[0], rangeMax: () => n10[1], isInRange(i9) {
      var o15 = n10[0], l12 = n10[1];
      return o15 <= l12 ? i9 >= o15 && i9 <= l12 : i9 >= l12 && i9 <= o15;
    }, bandwidth: t10 ? () => t10.call(e14) : void 0, ticks: r11 ? (i9) => r11.call(e14, i9) : void 0, map: (i9, o15) => {
      var l12 = e14(i9);
      if (l12 != null) {
        if (e14.bandwidth && o15 !== null && o15 !== void 0 && o15.position) {
          var c16 = e14.bandwidth();
          switch (o15.position) {
            case "middle":
              l12 += c16 / 2;
              break;
            case "end":
              l12 += c16;
              break;
            default:
              break;
          }
        }
        return l12;
      }
    } };
  }
}
var vl = (e14, r11) => {
  if (r11 != null) switch (e14) {
    case "linear": {
      if (!Br2(r11)) {
        for (var t10, a11, n10 = 0; n10 < r11.length; n10++) {
          var i9 = r11[n10];
          W15(i9) && ((t10 === void 0 || i9 < t10) && (t10 = i9), (a11 === void 0 || i9 > a11) && (a11 = i9));
        }
        return t10 !== void 0 && a11 !== void 0 ? [t10, a11] : void 0;
      }
      return r11;
    }
    default:
      return r11;
  }
};
function fS(e14) {
  var r11 = d3_scale_target_es2022_exports;
  if (e14 in r11 && typeof r11[e14] == "function") return r11[e14]();
  var t10 = "scale".concat(Kt2(e14));
  if (t10 in r11 && typeof r11[t10] == "function") return r11[t10]();
}
function Vm(e14, r11, t10) {
  if (typeof e14 == "function") return e14.copy().domain(r11).range(t10);
  if (e14 != null) {
    var a11 = fS(e14);
    if (a11 != null) return a11.domain(r11).range(t10), a11;
  }
}
function Xa(e14, r11, t10, a11) {
  if (!(t10 == null || a11 == null)) return typeof e14.scale == "function" ? Vm(e14.scale, t10, a11) : Vm(r11, t10, a11);
}
function mS(e14) {
  return "scale".concat(Kt2(e14));
}
function vS(e14) {
  return mS(e14) in d3_scale_target_es2022_exports;
}
var hl = (e14, r11, t10) => {
  if (e14 != null) {
    var { scale: a11, type: n10 } = e14;
    if (a11 === "auto") return n10 === "category" && t10 && (t10.indexOf("LineChart") >= 0 || t10.indexOf("AreaChart") >= 0 || t10.indexOf("ComposedChart") >= 0 && !r11) ? "point" : n10 === "category" ? "band" : "linear";
    if (typeof a11 == "string") return vS(a11) ? a11 : "point";
  }
};
function hS(e14, r11) {
  for (var t10 = 0, a11 = e14.length, n10 = e14[0] < e14[e14.length - 1]; t10 < a11; ) {
    var i9 = Math.floor((t10 + a11) / 2);
    (n10 ? e14[i9] < r11 : e14[i9] > r11) ? t10 = i9 + 1 : a11 = i9;
  }
  return t10;
}
function yl(e14, r11) {
  if (e14) {
    var t10 = r11 ?? e14.domain(), a11 = t10.map((i9) => {
      var o15;
      return (o15 = e14(i9)) !== null && o15 !== void 0 ? o15 : 0;
    }), n10 = e14.range();
    if (!(t10.length === 0 || n10.length < 2)) return (i9) => {
      var o15, l12, c16 = hS(a11, i9);
      if (c16 <= 0) return t10[0];
      if (c16 >= t10.length) return t10[t10.length - 1];
      var s8 = (o15 = a11[c16 - 1]) !== null && o15 !== void 0 ? o15 : 0, u9 = (l12 = a11[c16]) !== null && l12 !== void 0 ? l12 : 0;
      return Math.abs(i9 - s8) <= Math.abs(i9 - u9) ? t10[c16 - 1] : t10[c16];
    };
  }
}
function Xm(e14) {
  if (e14 != null) return "invert" in e14 && typeof e14.invert == "function" ? e14.invert.bind(e14) : yl(e14, void 0);
}
function Gm(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function gl(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Gm(Object(t10), true).forEach(function(a11) {
      yS(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Gm(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function yS(e14, r11, t10) {
  return (r11 = gS(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function gS(e14) {
  var r11 = xS(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function xS(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var qs = [0, "auto"];
var ze5 = { allowDataOverflow: false, allowDecimals: true, allowDuplicatedCategory: true, angle: 0, dataKey: void 0, domain: void 0, height: 30, hide: true, id: 0, includeHidden: false, interval: "preserveEnd", minTickGap: 5, mirror: false, name: void 0, orientation: "bottom", padding: { left: 0, right: 0 }, reversed: false, scale: "auto", tick: true, tickCount: 5, tickFormatter: void 0, ticks: void 0, type: "category", unit: void 0, niceTicks: "auto" };
var $s = (e14, r11) => e14.cartesianAxis.xAxis[r11];
var Hr = (e14, r11) => {
  var t10 = $s(e14, r11);
  return t10 ?? ze5;
};
var We3 = { allowDataOverflow: false, allowDecimals: true, allowDuplicatedCategory: true, angle: 0, dataKey: void 0, domain: qs, hide: true, id: 0, includeHidden: false, interval: "preserveEnd", minTickGap: 5, mirror: false, name: void 0, orientation: "left", padding: { top: 0, bottom: 0 }, reversed: false, scale: "auto", tick: true, tickCount: 5, tickFormatter: void 0, ticks: void 0, type: "number", unit: void 0, niceTicks: "auto", width: _a };
var Js = (e14, r11) => e14.cartesianAxis.yAxis[r11];
var Yr2 = (e14, r11) => {
  var t10 = Js(e14, r11);
  return t10 ?? We3;
};
var pt5 = { domain: [0, "auto"], includeHidden: false, reversed: false, allowDataOverflow: false, allowDuplicatedCategory: false, dataKey: void 0, id: 0, name: "", range: [64, 64], scale: "auto", type: "number", unit: "" };
var Qs = (e14, r11) => {
  var t10 = e14.cartesianAxis.zAxis[r11];
  return t10 ?? pt5;
};
var Re6 = (e14, r11, t10) => {
  switch (r11) {
    case "xAxis":
      return Hr(e14, t10);
    case "yAxis":
      return Yr2(e14, t10);
    case "zAxis":
      return Qs(e14, t10);
    case "angleAxis":
      return Gr(e14, t10);
    case "radiusAxis":
      return jt(e14, t10);
    default:
      throw new Error("Unexpected axis type: ".concat(r11));
  }
};
var bS = (e14, r11, t10) => {
  switch (r11) {
    case "xAxis":
      return Hr(e14, t10);
    case "yAxis":
      return Yr2(e14, t10);
    default:
      throw new Error("Unexpected axis type: ".concat(r11));
  }
};
var Xt2 = (e14, r11, t10) => {
  switch (r11) {
    case "xAxis":
      return Hr(e14, t10);
    case "yAxis":
      return Yr2(e14, t10);
    case "angleAxis":
      return Gr(e14, t10);
    case "radiusAxis":
      return jt(e14, t10);
    default:
      throw new Error("Unexpected axis type: ".concat(r11));
  }
};
var eu = (e14) => e14.graphicalItems.cartesianItems.some((r11) => r11.type === "bar") || e14.graphicalItems.polarItems.some((r11) => r11.type === "radialBar");
function Ti2(e14, r11) {
  return (t10) => {
    switch (e14) {
      case "xAxis":
        return "xAxisId" in t10 && t10.xAxisId === r11;
      case "yAxis":
        return "yAxisId" in t10 && t10.yAxisId === r11;
      case "zAxis":
        return "zAxisId" in t10 && t10.zAxisId === r11;
      case "angleAxis":
        return "angleAxisId" in t10 && t10.angleAxisId === r11;
      case "radiusAxis":
        return "radiusAxisId" in t10 && t10.radiusAxisId === r11;
      default:
        return false;
    }
  };
}
var Ur = (e14) => e14.graphicalItems.cartesianItems;
var PS = fe7([ge7, Fa], Ti2);
var Li = (e14, r11, t10) => e14.filter(t10).filter((a11) => r11?.includeHidden === true ? true : !a11.hide);
var Bn2 = fe7([Ur, Re6, PS], Li, { memoizeOptions: { resultEqualityCheck: Mn3 } });
var Um = fe7([Bn2], (e14) => e14.filter((r11) => r11.type === "area" || r11.type === "bar").filter(Vt2));
var ru = (e14) => e14.filter((r11) => !("stackId" in r11) || r11.stackId === void 0);
var AS = fe7([Bn2], ru);
var Ni = (e14) => e14.map((r11) => r11.data).filter(Boolean).flat(1);
var OS = fe7([Bn2], (e14) => e14.some((r11) => !r11.data));
var Zm = fe7([Bn2], Ni, { memoizeOptions: { resultEqualityCheck: Mn3 } });
var Mi = (e14, r11) => {
  var { chartData: t10 = [], dataStartIndex: a11, dataEndIndex: n10 } = r11;
  return e14.length > 0 ? e14 : t10.slice(a11, n10 + 1);
};
var tu = fe7([Zm, Ft2], Mi);
var au = (e14, r11, t10) => r11?.dataKey != null ? e14.map((a11) => ({ value: _13(a11, r11.dataKey) })) : t10.length > 0 ? t10.map((a11) => a11.dataKey).flatMap((a11) => e14.map((n10) => ({ value: _13(n10, a11) }))) : e14.map((a11) => ({ value: a11 }));
var nu = (e14, r11, t10, a11, n10, i9) => {
  var { chartData: o15 = [], dataStartIndex: l12, dataEndIndex: c16 } = a11, s8 = au(e14, r11, t10);
  if (n10 && r11?.dataKey != null && i9.length > 0) {
    var u9 = o15.slice(l12, c16 + 1), d12 = u9.map((f10) => ({ value: _13(f10, r11.dataKey) })).filter((f10) => f10.value != null);
    return [...d12, ...s8];
  }
  return s8;
};
var _i2 = fe7([tu, Re6, Bn2, Ft2, OS, Zm], nu);
function _n2(e14) {
  if (be8(e14) || e14 instanceof Date) {
    var r11 = Number(e14);
    if (W15(r11)) return r11;
  }
}
function Hm(e14) {
  if (Array.isArray(e14)) {
    var r11 = [_n2(e14[0]), _n2(e14[1])];
    return Br2(r11) ? r11 : void 0;
  }
  var t10 = _n2(e14);
  if (t10 != null) return [t10, t10];
}
function kt3(e14) {
  return e14.map(_n2).filter(ke5);
}
function wS(e14, r11) {
  var t10 = _n2(e14), a11 = _n2(r11);
  return t10 == null && a11 == null ? 0 : t10 == null ? -1 : a11 == null ? 1 : t10 - a11;
}
var ES = fe7([_i2], (e14) => e14?.map((r11) => r11.value).sort(wS));
function qm(e14, r11) {
  switch (e14) {
    case "xAxis":
      return r11.direction === "x";
    case "yAxis":
      return r11.direction === "y";
    default:
      return false;
  }
}
function SS(e14, r11, t10) {
  if (!t10) return [];
  if (!t10.length) return [];
  var a11;
  if (typeof r11 == "number" && !_e7(r11)) a11 = r11;
  else if (Array.isArray(r11)) {
    var n10 = kt3(r11);
    n10.length > 0 && (a11 = Math.max(...n10));
  }
  return a11 == null ? [] : kt3(t10.flatMap((i9) => {
    var o15 = _13(e14, i9.dataKey), l12, c16;
    if (Array.isArray(o15) ? [l12, c16] = o15 : l12 = c16 = o15, !(!W15(l12) || !W15(c16))) return [a11 - l12, a11 + c16];
  }));
}
var Ce6 = (e14) => {
  var r11 = Ke4(e14), t10 = ma(e14);
  return Xt2(e14, r11, t10);
};
var Gt = fe7([Ce6], (e14) => e14?.dataKey);
var IS = fe7([Um, Ft2, Ce6], Ln3);
var Bi = (e14, r11, t10, a11) => {
  var n10 = {}, i9 = r11.reduce((o15, l12) => {
    if (l12.stackId == null) return o15;
    var c16 = o15[l12.stackId];
    return c16 == null && (c16 = []), c16.push(l12), o15[l12.stackId] = c16, o15;
  }, n10);
  return Object.fromEntries(Object.entries(i9).map((o15) => {
    var [l12, c16] = o15, s8 = a11 ? [...c16].reverse() : c16, u9 = s8.map(pa);
    return [l12, { stackedData: Xf(e14, u9, t10), graphicalItems: s8 }];
  }));
};
var Kn3 = fe7([IS, Um, It4, Dn3], Bi);
var iu = (e14, r11, t10, a11) => {
  var { dataStartIndex: n10, dataEndIndex: i9 } = r11;
  if (a11 == null && t10 !== "zAxis") {
    var o15 = Gf(e14, n10, i9);
    if (!(o15 != null && o15[0] === 0 && o15[1] === 0)) return o15;
  }
};
var RS = fe7([Re6], (e14) => e14.allowDataOverflow);
var xl = (e14) => {
  var r11;
  if (e14 == null || !("domain" in e14)) return qs;
  if (e14.domain != null) return e14.domain;
  if ("ticks" in e14 && e14.ticks != null) {
    if (e14.type === "number") {
      var t10 = kt3(e14.ticks);
      return [Math.min(...t10), Math.max(...t10)];
    }
    if (e14.type === "category") return e14.ticks.map(String);
  }
  return (r11 = e14?.domain) !== null && r11 !== void 0 ? r11 : qs;
};
var bl = fe7([Re6], xl);
var Pl = fe7([bl, RS], sl);
var CS = fe7([Kn3, sr2, ge7, Pl], iu, { memoizeOptions: { resultEqualityCheck: Nn2 } });
var zn = (e14) => e14.errorBars;
var jS = (e14, r11, t10) => e14.flatMap((a11) => r11[a11.id]).filter(Boolean).filter((a11) => qm(t10, a11));
var Di = function() {
  for (var r11 = arguments.length, t10 = new Array(r11), a11 = 0; a11 < r11; a11++) t10[a11] = arguments[a11];
  var n10 = t10.filter(Boolean);
  if (n10.length !== 0) {
    var i9 = n10.flat(), o15 = Math.min(...i9), l12 = Math.max(...i9);
    return [o15, l12];
  }
};
var Ki = function(r11, t10, a11, n10, i9) {
  var o15 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], l12, c16;
  if (a11.length > 0 && a11.forEach((s8) => {
    var u9, d12 = s8.data != null ? [...s8.data] : o15, f10 = (u9 = n10[s8.id]) === null || u9 === void 0 ? void 0 : u9.filter((p12) => qm(i9, p12));
    d12.forEach((p12) => {
      var m18, h13 = _13(p12, (m18 = t10.dataKey) !== null && m18 !== void 0 ? m18 : s8.dataKey), y16 = SS(p12, h13, f10);
      if (y16.length >= 2) {
        var v9 = Math.min(...y16), g13 = Math.max(...y16);
        (l12 == null || v9 < l12) && (l12 = v9), (c16 == null || g13 > c16) && (c16 = g13);
      }
      var x18 = Hm(h13);
      x18 != null && (l12 = l12 == null ? x18[0] : Math.min(l12, x18[0]), c16 = c16 == null ? x18[1] : Math.max(c16, x18[1]));
    });
  }), t10?.dataKey != null && a11.length === 0 && r11.forEach((s8) => {
    var u9 = Hm(_13(s8, t10.dataKey));
    u9 != null && (l12 = l12 == null ? u9[0] : Math.min(l12, u9[0]), c16 = c16 == null ? u9[1] : Math.max(c16, u9[1]));
  }), W15(l12) && W15(c16)) return [l12, c16];
};
var kS = fe7([tu, Re6, AS, zn, ge7, Em], Ki, { memoizeOptions: { resultEqualityCheck: Nn2 } });
function DS(e14) {
  var { value: r11 } = e14;
  if (be8(r11) || r11 instanceof Date) return r11;
}
var TS = (e14, r11, t10) => {
  var a11 = e14.map(DS).filter((n10) => n10 != null);
  return t10 && (r11.dataKey == null || r11.allowDuplicatedCategory && hs(a11)) ? g6(0, e14.length) : r11.allowDuplicatedCategory ? a11 : Array.from(new Set(a11));
};
var ou = (e14) => e14.referenceElements.dots;
var Ga = (e14, r11, t10) => e14.filter((a11) => a11.ifOverflow === "extendDomain").filter((a11) => r11 === "xAxis" ? a11.xAxisId === t10 : a11.yAxisId === t10);
var LS = fe7([ou, ge7, Fa], Ga);
var lu = (e14) => e14.referenceElements.areas;
var NS = fe7([lu, ge7, Fa], Ga);
var cu = (e14) => e14.referenceElements.lines;
var MS = fe7([cu, ge7, Fa], Ga);
var su = (e14, r11) => {
  if (e14 != null) {
    var t10 = kt3(e14.map((a11) => r11 === "xAxis" ? a11.x : a11.y));
    if (t10.length !== 0) return [Math.min(...t10), Math.max(...t10)];
  }
};
var _S = fe7(LS, ge7, su);
var uu = (e14, r11) => {
  if (e14 != null) {
    var t10 = kt3(e14.flatMap((a11) => [r11 === "xAxis" ? a11.x1 : a11.y1, r11 === "xAxis" ? a11.x2 : a11.y2]));
    if (t10.length !== 0) return [Math.min(...t10), Math.max(...t10)];
  }
};
var BS = fe7([NS, ge7], uu);
function KS(e14) {
  var r11;
  if (e14.x != null) return kt3([e14.x]);
  var t10 = (r11 = e14.segment) === null || r11 === void 0 ? void 0 : r11.map((a11) => a11.x);
  return t10 == null || t10.length === 0 ? [] : kt3(t10);
}
function zS(e14) {
  var r11;
  if (e14.y != null) return kt3([e14.y]);
  var t10 = (r11 = e14.segment) === null || r11 === void 0 ? void 0 : r11.map((a11) => a11.y);
  return t10 == null || t10.length === 0 ? [] : kt3(t10);
}
var du = (e14, r11) => {
  if (e14 != null) {
    var t10 = e14.flatMap((a11) => r11 === "xAxis" ? KS(a11) : zS(a11));
    if (t10.length !== 0) return [Math.min(...t10), Math.max(...t10)];
  }
};
var WS = fe7([MS, ge7], du);
var FS = fe7(_S, WS, BS, (e14, r11, t10) => Di(e14, t10, r11));
var zi = (e14, r11, t10, a11, n10, i9, o15, l12) => {
  if (t10 != null) return t10;
  var c16 = o15 === "vertical" && l12 === "xAxis" || o15 === "horizontal" && l12 === "yAxis", s8 = c16 ? Di(a11, i9, n10) : Di(i9, n10);
  return Cm(r11, s8, e14.allowDataOverflow);
};
var VS = fe7([Re6, bl, Pl, CS, kS, FS, z15, ge7], zi, { memoizeOptions: { resultEqualityCheck: Nn2 } });
var XS = [0, 1];
var Wi = (e14, r11, t10, a11, n10, i9, o15) => {
  if (!((e14 == null || t10 == null || t10.length === 0) && o15 === void 0)) {
    var { dataKey: l12, type: c16 } = e14, s8 = Ge4(r11, i9);
    if (s8 && l12 == null) {
      var u9;
      return g6(0, (u9 = t10?.length) !== null && u9 !== void 0 ? u9 : 0);
    }
    return c16 === "category" ? TS(a11, e14, s8) : n10 === "expand" && !s8 ? XS : o15;
  }
};
var Wn3 = fe7([Re6, z15, tu, _i2, It4, ge7, VS], Wi);
var Zr = fe7([Re6, eu, Tn3], hl);
var Fi = (e14, r11, t10) => {
  var { niceTicks: a11 } = r11;
  if (a11 !== "none") {
    var n10 = xl(r11), i9 = Array.isArray(n10) && (n10[0] === "auto" || n10[1] === "auto");
    if ((a11 === "snap125" || a11 === "adaptive") && r11 != null && r11.tickCount && Br2(e14)) {
      if (i9) return Ci(e14, r11.tickCount, r11.allowDecimals, a11);
      if (r11.type === "number") return ul(e14, r11.tickCount, r11.allowDecimals, a11);
    }
    if (a11 === "auto" && t10 === "linear" && r11 != null && r11.tickCount) {
      if (i9 && Br2(e14)) return Ci(e14, r11.tickCount, r11.allowDecimals, "adaptive");
      if (r11.type === "number" && Br2(e14)) return ul(e14, r11.tickCount, r11.allowDecimals, "adaptive");
    }
  }
};
var fu = fe7([Wn3, Xt2, Zr], Fi);
var Vi = (e14, r11, t10, a11) => {
  if (a11 !== "angleAxis" && e14?.type === "number" && Br2(r11) && Array.isArray(t10) && t10.length > 0) {
    var n10, i9, o15 = r11[0], l12 = (n10 = t10[0]) !== null && n10 !== void 0 ? n10 : 0, c16 = r11[1], s8 = (i9 = t10[t10.length - 1]) !== null && i9 !== void 0 ? i9 : 0;
    return [Math.min(o15, l12), Math.max(c16, s8)];
  }
  return r11;
};
var GS = fe7([Re6, Wn3, fu, ge7], Vi);
var HS = fe7(_i2, Re6, (e14, r11) => {
  if (!(!r11 || r11.type !== "number")) {
    var t10 = 1 / 0, a11 = Array.from(kt3(e14.map((d12) => d12.value))).sort((d12, f10) => d12 - f10), n10 = a11[0], i9 = a11[a11.length - 1];
    if (n10 == null || i9 == null) return 1 / 0;
    var o15 = i9 - n10;
    if (o15 === 0) return 1 / 0;
    for (var l12 = 0; l12 < a11.length - 1; l12++) {
      var c16 = a11[l12], s8 = a11[l12 + 1];
      if (!(c16 == null || s8 == null)) {
        var u9 = s8 - c16;
        t10 = Math.min(t10, u9);
      }
    }
    return t10 / o15;
  }
});
var $m = fe7(HS, z15, kn4, me9, (e14, r11, t10, a11, n10) => n10, (e14, r11, t10, a11, n10) => {
  if (!W15(e14)) return 0;
  var i9 = r11 === "vertical" ? a11.height : a11.width;
  if (n10 === "gap") return e14 * i9 / 2;
  if (n10 === "no-gap") {
    var o15 = Ae6(t10, e14 * i9), l12 = e14 * i9 / 2;
    return l12 - o15 - (l12 - o15) / i9 * o15;
  }
  return 0;
});
var YS = (e14, r11, t10) => {
  var a11 = Hr(e14, r11);
  return a11 == null || typeof a11.padding != "string" ? 0 : $m(e14, "xAxis", r11, t10, a11.padding);
};
var US = (e14, r11, t10) => {
  var a11 = Yr2(e14, r11);
  return a11 == null || typeof a11.padding != "string" ? 0 : $m(e14, "yAxis", r11, t10, a11.padding);
};
var ZS = fe7(Hr, YS, (e14, r11) => {
  var t10, a11;
  if (e14 == null) return { left: 0, right: 0 };
  var { padding: n10 } = e14;
  return typeof n10 == "string" ? { left: r11, right: r11 } : { left: ((t10 = n10.left) !== null && t10 !== void 0 ? t10 : 0) + r11, right: ((a11 = n10.right) !== null && a11 !== void 0 ? a11 : 0) + r11 };
});
var qS = fe7(Yr2, US, (e14, r11) => {
  var t10, a11;
  if (e14 == null) return { top: 0, bottom: 0 };
  var { padding: n10 } = e14;
  return typeof n10 == "string" ? { top: r11, bottom: r11 } : { top: ((t10 = n10.top) !== null && t10 !== void 0 ? t10 : 0) + r11, bottom: ((a11 = n10.bottom) !== null && a11 !== void 0 ? a11 : 0) + r11 };
});
var $S = fe7([me9, ZS, Wt3, Pn2, (e14, r11, t10) => t10], (e14, r11, t10, a11, n10) => {
  var { padding: i9 } = a11;
  return n10 ? [i9.left, t10.width - i9.right] : [e14.left + r11.left, e14.left + e14.width - r11.right];
});
var JS = fe7([me9, z15, qS, Wt3, Pn2, (e14, r11, t10) => t10], (e14, r11, t10, a11, n10, i9) => {
  var { padding: o15 } = n10;
  return i9 ? [a11.height - o15.bottom, o15.top] : r11 === "horizontal" ? [e14.top + e14.height - t10.bottom, e14.top + t10.top] : [e14.top + t10.top, e14.top + e14.height - t10.bottom];
});
var Fn2 = (e14, r11, t10, a11) => {
  var n10;
  switch (r11) {
    case "xAxis":
      return $S(e14, t10, a11);
    case "yAxis":
      return JS(e14, t10, a11);
    case "zAxis":
      return (n10 = Qs(e14, t10)) === null || n10 === void 0 ? void 0 : n10.range;
    case "angleAxis":
      return Us(e14);
    case "radiusAxis":
      return Zs(e14, t10);
    default:
      return;
  }
};
var Jm = fe7([Re6, Fn2], Wa);
var QS = fe7([Zr, GS], vl);
var pu = fe7([Re6, Zr, QS, Jm], Xa);
var Xi = (e14, r11, t10, a11) => {
  if (!(t10 == null || t10.dataKey == null)) {
    var { type: n10, scale: i9 } = t10, o15 = Ge4(e14, a11);
    if (o15 && (n10 === "number" || i9 !== "auto")) return r11.map((l12) => l12.value);
  }
};
var mu = fe7([z15, _i2, Xt2, ge7], Xi);
var ur = fe7([pu], Va);
var vu = fe7([pu], Xm);
var hu = fe7([pu, ES], yl);
var jY = fe7([Bn2, zn, ge7], jS);
function Qm(e14, r11) {
  return e14.id < r11.id ? -1 : e14.id > r11.id ? 1 : 0;
}
var Al = (e14, r11) => r11;
var Ol = (e14, r11, t10) => t10;
var eI = fe7(yn4, Al, Ol, (e14, r11, t10) => e14.filter((a11) => a11.orientation === r11).filter((a11) => a11.mirror === t10).sort(Qm));
var rI = fe7(gn4, Al, Ol, (e14, r11, t10) => e14.filter((a11) => a11.orientation === r11).filter((a11) => a11.mirror === t10).sort(Qm));
var ev = (e14, r11) => ({ width: e14.width, height: r11.height });
var tI = (e14, r11) => {
  var t10 = typeof r11.width == "number" ? r11.width : _a;
  return { width: t10, height: e14.height };
};
var yu = fe7(me9, Hr, ev);
var aI = (e14, r11, t10) => {
  switch (r11) {
    case "top":
      return e14.top;
    case "bottom":
      return t10 - e14.bottom;
    default:
      return 0;
  }
};
var nI = (e14, r11, t10) => {
  switch (r11) {
    case "left":
      return e14.left;
    case "right":
      return t10 - e14.right;
    default:
      return 0;
  }
};
var iI = fe7(lr2, me9, eI, Al, Ol, (e14, r11, t10, a11, n10) => {
  var i9 = {}, o15;
  return t10.forEach((l12) => {
    var c16 = ev(r11, l12);
    o15 == null && (o15 = aI(r11, a11, e14));
    var s8 = a11 === "top" && !n10 || a11 === "bottom" && n10;
    i9[l12.id] = o15 - Number(s8) * c16.height, o15 += (s8 ? -1 : 1) * c16.height;
  }), i9;
});
var oI = fe7(or3, me9, rI, Al, Ol, (e14, r11, t10, a11, n10) => {
  var i9 = {}, o15;
  return t10.forEach((l12) => {
    var c16 = tI(r11, l12);
    o15 == null && (o15 = nI(r11, a11, e14));
    var s8 = a11 === "left" && !n10 || a11 === "right" && n10;
    i9[l12.id] = o15 - Number(s8) * c16.width, o15 += (s8 ? -1 : 1) * c16.width;
  }), i9;
});
var lI = (e14, r11) => {
  var t10 = Hr(e14, r11);
  if (t10 != null) return iI(e14, t10.orientation, t10.mirror);
};
var rv = fe7([me9, Hr, lI, (e14, r11) => r11], (e14, r11, t10, a11) => {
  if (r11 != null) {
    var n10 = t10?.[a11];
    return n10 == null ? { x: e14.left, y: 0 } : { x: e14.left, y: n10 };
  }
});
var cI = (e14, r11) => {
  var t10 = Yr2(e14, r11);
  if (t10 != null) return oI(e14, t10.orientation, t10.mirror);
};
var tv = fe7([me9, Yr2, cI, (e14, r11) => r11], (e14, r11, t10, a11) => {
  if (r11 != null) {
    var n10 = t10?.[a11];
    return n10 == null ? { x: 0, y: e14.top } : { x: n10, y: e14.top };
  }
});
var gu = fe7(me9, Yr2, (e14, r11) => {
  var t10 = typeof r11.width == "number" ? r11.width : _a;
  return { width: t10, height: e14.height };
});
var xu = (e14, r11, t10) => {
  switch (r11) {
    case "xAxis":
      return yu(e14, t10).width;
    case "yAxis":
      return gu(e14, t10).height;
    default:
      return;
  }
};
var bu = (e14, r11, t10, a11) => {
  if (t10 != null) {
    var { allowDuplicatedCategory: n10, type: i9, dataKey: o15 } = t10, l12 = Ge4(e14, a11), c16 = r11.map((u9) => u9.value), s8 = c16.filter((u9) => u9 != null);
    if (o15 && l12 && i9 === "category" && n10 && hs(s8)) return c16;
  }
};
var Vn2 = fe7([z15, _i2, Re6, ge7], bu);
var Pu = fe7([z15, bS, Zr, ur, Vn2, mu, Fn2, fu, ge7], (e14, r11, t10, a11, n10, i9, o15, l12, c16) => {
  if (r11 != null) {
    var s8 = Ge4(e14, c16);
    return { angle: r11.angle, interval: r11.interval, minTickGap: r11.minTickGap, orientation: r11.orientation, tick: r11.tick, tickCount: r11.tickCount, tickFormatter: r11.tickFormatter, ticks: r11.ticks, type: r11.type, unit: r11.unit, axisType: c16, categoricalDomain: i9, duplicateDomain: n10, isCategorical: s8, niceTicks: l12, range: o15, realScaleType: t10, scale: a11 };
  }
});
var Au = (e14, r11, t10, a11, n10, i9, o15, l12, c16) => {
  if (!(r11 == null || a11 == null)) {
    var s8 = Ge4(e14, c16), { type: u9, ticks: d12, tickCount: f10 } = r11, p12 = t10 === "scaleBand" && typeof a11.bandwidth == "function" ? a11.bandwidth() / 2 : 2, m18 = u9 === "category" && a11.bandwidth ? a11.bandwidth() / p12 : 0;
    m18 = c16 === "angleAxis" && i9 != null && i9.length >= 2 ? he4(i9[0] - i9[1]) * 2 * m18 : m18;
    var h13 = d12 || n10;
    return h13 ? h13.map((y16, v9) => {
      var g13 = o15 ? o15.indexOf(y16) : y16, x18 = a11.map(g13);
      return W15(x18) ? { index: v9, coordinate: x18 + m18, value: y16, offset: m18 } : null;
    }).filter(ke5) : s8 && l12 ? l12.map((y16, v9) => {
      var g13 = a11.map(y16);
      return W15(g13) ? { coordinate: g13 + m18, value: y16, index: v9, offset: m18 } : null;
    }).filter(ke5) : a11.ticks ? a11.ticks(f10).map((y16, v9) => {
      var g13 = a11.map(y16);
      return W15(g13) ? { coordinate: g13 + m18, value: y16, index: v9, offset: m18 } : null;
    }).filter(ke5) : a11.domain().map((y16, v9) => {
      var g13 = a11.map(y16);
      return W15(g13) ? { coordinate: g13 + m18, value: o15 ? o15[y16] : y16, index: v9, offset: m18 } : null;
    }).filter(ke5);
  }
};
var wl = fe7([z15, Xt2, Zr, ur, fu, Fn2, Vn2, mu, ge7], Au);
var Ou = (e14, r11, t10, a11, n10, i9, o15) => {
  if (!(r11 == null || t10 == null || a11 == null || a11[0] === a11[1])) {
    var l12 = Ge4(e14, o15), { tickCount: c16 } = r11, s8 = 0;
    return s8 = o15 === "angleAxis" && a11?.length >= 2 ? he4(a11[0] - a11[1]) * 2 * s8 : s8, l12 && i9 ? i9.map((u9, d12) => {
      var f10 = t10.map(u9);
      return W15(f10) ? { coordinate: f10 + s8, value: u9, index: d12, offset: s8 } : null;
    }).filter(ke5) : t10.ticks ? t10.ticks(c16).map((u9, d12) => {
      var f10 = t10.map(u9);
      return W15(f10) ? { coordinate: f10 + s8, value: u9, index: d12, offset: s8 } : null;
    }).filter(ke5) : t10.domain().map((u9, d12) => {
      var f10 = t10.map(u9);
      return W15(f10) ? { coordinate: f10 + s8, value: n10 ? n10[u9] : u9, index: d12, offset: s8 } : null;
    }).filter(ke5);
  }
};
var dr2 = fe7([z15, Xt2, ur, Fn2, Vn2, mu, ge7], Ou);
var qe4 = fe7(Re6, ur, (e14, r11) => {
  if (!(e14 == null || r11 == null)) return gl(gl({}, e14), {}, { scale: r11 });
});
var sI = fe7([Re6, Zr, Wn3, Jm], Xa);
var uI = fe7([sI], Va);
var av = fe7((e14, r11, t10) => Qs(e14, t10), uI, (e14, r11) => {
  if (!(e14 == null || r11 == null)) return gl(gl({}, e14), {}, { scale: r11 });
});
var nv = fe7([z15, yn4, gn4], (e14, r11, t10) => {
  switch (e14) {
    case "horizontal":
      return r11.some((a11) => a11.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return t10.some((a11) => a11.reversed) ? "bottom-to-top" : "top-to-bottom";
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
});
var El = (e14, r11, t10) => {
  var a11;
  return (a11 = e14.renderedTicks[r11]) === null || a11 === void 0 ? void 0 : a11[t10];
};
var wu = fe7([El], (e14) => {
  if (!(!e14 || e14.length === 0)) return (r11) => {
    var t10, a11 = 1 / 0, n10 = e14[0];
    for (var i9 of e14) {
      var o15 = Math.abs(i9.coordinate - r11);
      o15 < a11 && (a11 = o15, n10 = i9);
    }
    return (t10 = n10) === null || t10 === void 0 ? void 0 : t10.value;
  };
});
var Eu = (e14) => e14.options.defaultTooltipEventType;
var Su = (e14) => e14.options.validateTooltipEventTypes;
function Iu(e14, r11, t10) {
  if (e14 == null) return r11;
  var a11 = e14 ? "axis" : "item";
  return t10 == null ? r11 : t10.includes(a11) ? a11 : r11;
}
function va(e14, r11) {
  var t10 = Eu(e14), a11 = Su(e14);
  return Iu(r11, t10, a11);
}
function iv(e14) {
  return E17((r11) => va(r11, e14));
}
var Sl = (e14, r11) => {
  var t10, a11 = Number(r11);
  if (!(_e7(a11) || r11 == null)) return a11 >= 0 ? e14 == null || (t10 = e14[a11]) === null || t10 === void 0 ? void 0 : t10.value : void 0;
};
var ov = (e14) => e14.tooltip.settings;
var Ht3 = { active: false, index: null, dataKey: void 0, graphicalItemId: void 0, coordinate: void 0 };
var fI = { itemInteraction: { click: Ht3, hover: Ht3 }, axisInteraction: { click: Ht3, hover: Ht3 }, keyboardInteraction: Ht3, syncInteraction: { active: false, index: null, dataKey: void 0, label: void 0, coordinate: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }, tooltipItemPayloads: [], settings: { shared: void 0, trigger: "hover", axisId: 0, active: false, defaultIndex: void 0 } };
var cv = mr({ name: "tooltip", initialState: fI, reducers: { addTooltipEntrySettings: { reducer(e14, r11) {
  e14.tooltipItemPayloads.push(Ce4(r11.payload));
}, prepare: pr() }, replaceTooltipEntrySettings: { reducer(e14, r11) {
  var { prev: t10, next: a11 } = r11.payload, n10 = je(e14).tooltipItemPayloads.indexOf(Ce4(t10));
  n10 > -1 && (e14.tooltipItemPayloads[n10] = Ce4(a11));
}, prepare: pr() }, removeTooltipEntrySettings: { reducer(e14, r11) {
  var t10 = je(e14).tooltipItemPayloads.indexOf(Ce4(r11.payload));
  t10 > -1 && e14.tooltipItemPayloads.splice(t10, 1);
}, prepare: pr() }, setTooltipSettingsState(e14, r11) {
  e14.settings = r11.payload;
}, setActiveMouseOverItemIndex(e14, r11) {
  e14.syncInteraction.active = false, e14.syncInteraction.sourceViewBox = void 0, e14.keyboardInteraction.active = false, e14.itemInteraction.hover.active = true, e14.itemInteraction.hover.index = r11.payload.activeIndex, e14.itemInteraction.hover.dataKey = r11.payload.activeDataKey, e14.itemInteraction.hover.graphicalItemId = r11.payload.activeGraphicalItemId, e14.itemInteraction.hover.coordinate = r11.payload.activeCoordinate;
}, mouseLeaveChart(e14) {
  e14.itemInteraction.hover.active = false, e14.axisInteraction.hover.active = false;
}, mouseLeaveItem(e14) {
  e14.itemInteraction.hover.active = false;
}, setActiveClickItemIndex(e14, r11) {
  e14.syncInteraction.active = false, e14.syncInteraction.sourceViewBox = void 0, e14.itemInteraction.click.active = true, e14.keyboardInteraction.active = false, e14.itemInteraction.click.index = r11.payload.activeIndex, e14.itemInteraction.click.dataKey = r11.payload.activeDataKey, e14.itemInteraction.click.graphicalItemId = r11.payload.activeGraphicalItemId, e14.itemInteraction.click.coordinate = r11.payload.activeCoordinate;
}, setMouseOverAxisIndex(e14, r11) {
  e14.syncInteraction.active = false, e14.syncInteraction.sourceViewBox = void 0, e14.axisInteraction.hover.active = true, e14.keyboardInteraction.active = false, e14.axisInteraction.hover.index = r11.payload.activeIndex, e14.axisInteraction.hover.dataKey = r11.payload.activeDataKey, e14.axisInteraction.hover.coordinate = r11.payload.activeCoordinate;
}, setMouseClickAxisIndex(e14, r11) {
  e14.syncInteraction.active = false, e14.syncInteraction.sourceViewBox = void 0, e14.keyboardInteraction.active = false, e14.axisInteraction.click.active = true, e14.axisInteraction.click.index = r11.payload.activeIndex, e14.axisInteraction.click.dataKey = r11.payload.activeDataKey, e14.axisInteraction.click.coordinate = r11.payload.activeCoordinate;
}, setSyncInteraction(e14, r11) {
  e14.syncInteraction = r11.payload;
}, setKeyboardInteraction(e14, r11) {
  e14.keyboardInteraction.active = r11.payload.active, e14.keyboardInteraction.index = r11.payload.activeIndex, e14.keyboardInteraction.coordinate = r11.payload.activeCoordinate;
} } });
var { addTooltipEntrySettings: sv, replaceTooltipEntrySettings: uv, removeTooltipEntrySettings: dv, setTooltipSettingsState: fv, setActiveMouseOverItemIndex: qr2, mouseLeaveItem: Ha, mouseLeaveChart: Rl, setActiveClickItemIndex: Yt3, setMouseOverAxisIndex: Cl, setMouseClickAxisIndex: pv, setSyncInteraction: Xn2, setKeyboardInteraction: Gi } = cv.actions;
var mv = cv.reducer;
function vv(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function jl(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? vv(Object(t10), true).forEach(function(a11) {
      pI(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : vv(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function pI(e14, r11, t10) {
  return (r11 = mI(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function mI(e14) {
  var r11 = vI(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function vI(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function hI(e14, r11, t10) {
  return r11 === "axis" ? t10 === "click" ? e14.axisInteraction.click : e14.axisInteraction.hover : t10 === "click" ? e14.itemInteraction.click : e14.itemInteraction.hover;
}
function yI(e14) {
  return e14.index != null;
}
var kl = (e14, r11, t10, a11) => {
  if (r11 == null) return Ht3;
  var n10 = hI(e14, r11, t10);
  if (n10 == null) return Ht3;
  if (n10.active) return n10;
  if (e14.keyboardInteraction.active) return e14.keyboardInteraction;
  if (e14.syncInteraction.active && e14.syncInteraction.index != null) return e14.syncInteraction;
  var i9 = e14.settings.active === true;
  if (yI(n10)) {
    if (i9) return jl(jl({}, n10), {}, { active: true });
  } else if (a11 != null) return { active: true, coordinate: void 0, dataKey: void 0, index: a11, graphicalItemId: void 0 };
  return jl(jl({}, Ht3), {}, { coordinate: n10.coordinate });
};
function gI(e14) {
  if (typeof e14 == "number") return Number.isFinite(e14) ? e14 : void 0;
  if (e14 instanceof Date) {
    var r11 = e14.valueOf();
    return Number.isFinite(r11) ? r11 : void 0;
  }
  var t10 = Number(e14);
  return Number.isFinite(t10) ? t10 : void 0;
}
function xI(e14, r11) {
  var t10 = gI(e14), a11 = r11[0], n10 = r11[1];
  if (t10 === void 0) return false;
  var i9 = Math.min(a11, n10), o15 = Math.max(a11, n10);
  return t10 >= i9 && t10 <= o15;
}
function bI(e14, r11, t10) {
  if (t10 == null || r11 == null) return true;
  var a11 = _13(e14, r11);
  return a11 == null || !Br2(t10) ? true : xI(a11, t10);
}
var ha = (e14, r11, t10, a11) => {
  var n10 = e14?.index;
  if (n10 == null) return null;
  var i9 = Number(n10);
  if (!W15(i9)) return n10;
  var o15 = 0, l12 = 1 / 0;
  r11.length > 0 && (l12 = r11.length - 1);
  var c16 = Math.max(o15, Math.min(i9, l12)), s8 = r11[c16];
  return s8 == null || bI(s8, t10, a11) ? String(c16) : null;
};
var Dl = (e14, r11, t10, a11, n10, i9, o15) => {
  if (i9 != null) {
    var l12 = o15[0], c16 = l12?.getPosition(i9);
    if (c16 != null) return c16;
    var s8 = n10?.[Number(i9)];
    if (s8) return t10 === "horizontal" ? { x: s8.coordinate, y: (a11.top + r11) / 2 } : { x: (a11.left + e14) / 2, y: s8.coordinate };
  }
};
var Tl = (e14, r11, t10, a11) => {
  if (r11 === "axis") return e14.tooltipItemPayloads;
  if (e14.tooltipItemPayloads.length === 0) return [];
  var n10;
  if (t10 === "hover" ? n10 = e14.itemInteraction.hover.graphicalItemId : n10 = e14.itemInteraction.click.graphicalItemId, e14.syncInteraction.active && n10 == null) return e14.tooltipItemPayloads;
  if (n10 == null && (a11 != null || e14.keyboardInteraction.active)) {
    var i9 = e14.tooltipItemPayloads[0];
    return i9 != null ? [i9] : [];
  }
  return e14.tooltipItemPayloads.filter((o15) => {
    var l12;
    return ((l12 = o15.settings) === null || l12 === void 0 ? void 0 : l12.graphicalItemId) === n10;
  });
};
var Ll = (e14) => e14.options.tooltipPayloadSearcher;
var Ut2 = (e14) => e14.tooltip;
function hv(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function yv(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? hv(Object(t10), true).forEach(function(a11) {
      PI(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : hv(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function PI(e14, r11, t10) {
  return (r11 = AI(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function AI(e14) {
  var r11 = OI(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function OI(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function wI(e14) {
  if (typeof e14 == "string" || typeof e14 == "number") return e14;
}
function EI(e14) {
  if (typeof e14 == "string" || typeof e14 == "number" || typeof e14 == "boolean") return e14;
}
function SI(e14) {
  if (typeof e14 == "string" || typeof e14 == "number") return e14;
  if (typeof e14 == "function") return (r11) => e14(r11);
}
function gv(e14) {
  if (typeof e14 == "string") return e14;
}
function II(e14) {
  if (!(e14 == null || typeof e14 != "object")) {
    var r11 = "name" in e14 ? wI(e14.name) : void 0, t10 = "unit" in e14 ? EI(e14.unit) : void 0, a11 = "dataKey" in e14 ? SI(e14.dataKey) : void 0, n10 = "payload" in e14 ? e14.payload : void 0, i9 = "color" in e14 ? gv(e14.color) : void 0, o15 = "fill" in e14 ? gv(e14.fill) : void 0;
    return { name: r11, unit: t10, dataKey: a11, payload: n10, color: i9, fill: o15 };
  }
}
function RI(e14, r11) {
  return e14 ?? r11;
}
var Nl = (e14, r11, t10, a11, n10, i9, o15) => {
  if (!(r11 == null || i9 == null)) {
    var { chartData: l12, computedData: c16, dataStartIndex: s8, dataEndIndex: u9 } = t10, d12 = [];
    return e14.reduce((f10, p12) => {
      var m18, { dataDefinedOnItem: h13, settings: y16 } = p12, v9 = RI(h13, l12), g13 = Array.isArray(v9) ? Ko(v9, s8, u9) : v9, x18 = (m18 = y16?.dataKey) !== null && m18 !== void 0 ? m18 : a11, b14 = y16?.nameKey, P16;
      if (a11 && Array.isArray(g13) && !Array.isArray(g13[0]) && o15 === "axis" ? P16 = ko(g13, a11, n10) : P16 = i9(g13, r11, c16, b14), Array.isArray(P16)) P16.forEach((O12) => {
        var w9, S11, I24 = II(O12), R13 = I24?.name, C11 = I24?.dataKey, N19 = I24?.payload, j15 = yv(yv({}, y16), {}, { name: R13, unit: I24?.unit, color: (w9 = I24?.color) !== null && w9 !== void 0 ? w9 : y16?.color, fill: (S11 = I24?.fill) !== null && S11 !== void 0 ? S11 : y16?.fill });
        f10.push(ws({ tooltipEntrySettings: j15, dataKey: C11, payload: N19, value: _13(N19, C11), name: R13 == null ? void 0 : String(R13) }));
      });
      else {
        var A13;
        f10.push(ws({ tooltipEntrySettings: y16, dataKey: x18, payload: P16, value: _13(P16, x18), name: (A13 = _13(P16, b14)) !== null && A13 !== void 0 ? A13 : y16?.name }));
      }
      return f10;
    }, d12);
  }
};
var Cu = fe7([Ce6, eu, Tn3], hl);
var CI = fe7([(e14) => e14.graphicalItems.cartesianItems, (e14) => e14.graphicalItems.polarItems], (e14, r11) => [...e14, ...r11]);
var jI = fe7([Ke4, ma], Ti2);
var ya = fe7([CI, Ce6, jI], Li, { memoizeOptions: { resultEqualityCheck: Mn3 } });
var kI = fe7([ya], (e14) => e14.filter(Vt2));
var xv = fe7([ya], Ni, { memoizeOptions: { resultEqualityCheck: Mn3 } });
var DI = fe7([ya], (e14) => e14.some((r11) => !r11.data));
var Zt = fe7([xv, sr2], Mi);
var TI = fe7([kI, sr2, Ce6], Ln3);
var ju = fe7([Zt, Ce6, ya, sr2, DI, xv], nu);
var bv = fe7([Ce6], xl);
var LI = fe7([Ce6], (e14) => e14.allowDataOverflow);
var Pv = fe7([bv, LI], sl);
var NI = fe7([ya], (e14) => e14.filter(Vt2));
var MI = fe7([TI, NI, It4, Dn3], Bi);
var _I = fe7([MI, sr2, Ke4, Pv], iu);
var BI = fe7([ya], ru);
var KI = fe7([Zt, Ce6, BI, zn, Ke4, Im], Ki, { memoizeOptions: { resultEqualityCheck: Nn2 } });
var zI = fe7([ou, Ke4, ma], Ga);
var WI = fe7([zI, Ke4], su);
var FI = fe7([lu, Ke4, ma], Ga);
var VI = fe7([FI, Ke4], uu);
var XI = fe7([cu, Ke4, ma], Ga);
var GI = fe7([XI, Ke4], du);
var HI = fe7([WI, GI, VI], Di);
var YI = fe7([Ce6, bv, Pv, _I, KI, HI, z15, Ke4], zi);
var ga = fe7([Ce6, z15, Zt, ju, It4, Ke4, YI], Wi);
var UI = fe7([ga, Ce6, Cu], Fi);
var ZI = fe7([Ce6, ga, UI, Ke4], Vi);
var Av = (e14) => {
  var r11 = Ke4(e14), t10 = ma(e14), a11 = false;
  return Fn2(e14, r11, t10, a11);
};
var ku = fe7([Ce6, Av], Wa);
var qI = fe7([Ce6, Cu, ZI, ku], Xa);
var Du = fe7([qI], Va);
var $I = fe7([z15, ju, Ce6, Ke4], bu);
var JI = fe7([z15, ju, Ce6, Ke4], Xi);
var QI = (e14, r11, t10, a11, n10, i9, o15, l12) => {
  if (r11) {
    var { type: c16 } = r11, s8 = Ge4(e14, l12);
    if (a11) {
      var u9 = t10 === "scaleBand" && a11.bandwidth ? a11.bandwidth() / 2 : 2, d12 = c16 === "category" && a11.bandwidth ? a11.bandwidth() / u9 : 0;
      return d12 = l12 === "angleAxis" && n10 != null && n10?.length >= 2 ? he4(n10[0] - n10[1]) * 2 * d12 : d12, s8 && o15 ? o15.map((f10, p12) => {
        var m18 = a11.map(f10);
        return W15(m18) ? { coordinate: m18 + d12, value: f10, index: p12, offset: d12 } : null;
      }).filter(ke5) : a11.domain().map((f10, p12) => {
        var m18 = a11.map(f10);
        return W15(m18) ? { coordinate: m18 + d12, value: i9 ? i9[f10] : f10, index: p12, offset: d12 } : null;
      }).filter(ke5);
    }
  }
};
var Rr2 = fe7([z15, Ce6, Cu, Du, Av, $I, JI, Ke4], QI);
var Tu = fe7([Eu, Su, ov], (e14, r11, t10) => Iu(t10.shared, e14, r11));
var Ov = (e14) => e14.tooltip.settings.trigger;
var Lu = (e14) => e14.tooltip.settings.defaultIndex;
var Hi = fe7([Ut2, Tu, Ov, Lu], kl);
var fr2 = fe7([Hi, Zt, Gt, ga], ha);
var Yi = fe7([Rr2, fr2], Sl);
var Gn3 = fe7([Hi], (e14) => {
  if (e14) return e14.dataKey;
});
var Ml = fe7([Hi], (e14) => {
  if (e14) return e14.graphicalItemId;
});
var wv = fe7([Ut2, Tu, Ov, Lu], Tl);
var eR = fe7([or3, lr2, z15, me9, Rr2, Lu, wv], Dl);
var _l = fe7([Hi, eR], (e14, r11) => e14 != null && e14.coordinate ? e14.coordinate : r11);
var Bl = fe7([Hi], (e14) => {
  var r11;
  return (r11 = e14?.active) !== null && r11 !== void 0 ? r11 : false;
});
var rR = fe7([wv, fr2, sr2, Gt, Yi, Ll, Tu], Nl);
var Ev = fe7([rR], (e14) => {
  if (e14 != null) {
    var r11 = e14.map((t10) => t10.payload).filter((t10) => t10 != null);
    return Array.from(new Set(r11));
  }
});
function Sv(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Iv(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Sv(Object(t10), true).forEach(function(a11) {
      tR(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Sv(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function tR(e14, r11, t10) {
  return (r11 = aR(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function aR(e14) {
  var r11 = nR(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function nR(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var iR = () => E17(Ce6);
var Rv = () => {
  var e14 = iR(), r11 = E17(Rr2), t10 = E17(Du);
  return !e14 || !t10 ? He2(void 0, r11) : He2(Iv(Iv({}, e14), {}, { scale: t10 }), r11);
};
function Cv(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Hn2(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Cv(Object(t10), true).forEach(function(a11) {
      oR(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Cv(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function oR(e14, r11, t10) {
  return (r11 = lR(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function lR(e14) {
  var r11 = cR(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function cR(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var jv = (e14, r11, t10, a11) => {
  var n10 = r11.find((i9) => i9 && i9.index === t10);
  if (n10) {
    if (e14 === "horizontal") return { x: n10.coordinate, y: a11.relativeY };
    if (e14 === "vertical") return { x: a11.relativeX, y: n10.coordinate };
  }
  return { x: 0, y: 0 };
};
var kv = (e14, r11, t10, a11) => {
  var n10 = r11.find((s8) => s8 && s8.index === t10);
  if (n10) {
    if (e14 === "centric") {
      var i9 = n10.coordinate, { radius: o15 } = a11;
      return Hn2(Hn2(Hn2({}, a11), Q12(a11.cx, a11.cy, o15, i9)), {}, { angle: i9, radius: o15 });
    }
    var l12 = n10.coordinate, { angle: c16 } = a11;
    return Hn2(Hn2(Hn2({}, a11), Q12(a11.cx, a11.cy, l12, c16)), {}, { angle: c16, radius: l12 });
  }
  return { angle: 0, clockWise: false, cx: 0, cy: 0, endAngle: 0, innerRadius: 0, outerRadius: 0, radius: 0, startAngle: 0, x: 0, y: 0 };
};
function Dv(e14, r11) {
  var { relativeX: t10, relativeY: a11 } = e14;
  return t10 >= r11.left && t10 <= r11.left + r11.width && a11 >= r11.top && a11 <= r11.top + r11.height;
}
var Nu = (e14, r11, t10, a11, n10) => {
  var i9, o15 = (i9 = r11?.length) !== null && i9 !== void 0 ? i9 : 0;
  if (o15 <= 1 || e14 == null) return 0;
  if (a11 === "angleAxis" && n10 != null && Math.abs(Math.abs(n10[1] - n10[0]) - 360) <= 1e-6) for (var l12 = 0; l12 < o15; l12++) {
    var c16, s8, u9, d12, f10, p12 = l12 > 0 ? (c16 = t10[l12 - 1]) === null || c16 === void 0 ? void 0 : c16.coordinate : (s8 = t10[o15 - 1]) === null || s8 === void 0 ? void 0 : s8.coordinate, m18 = (u9 = t10[l12]) === null || u9 === void 0 ? void 0 : u9.coordinate, h13 = l12 >= o15 - 1 ? (d12 = t10[0]) === null || d12 === void 0 ? void 0 : d12.coordinate : (f10 = t10[l12 + 1]) === null || f10 === void 0 ? void 0 : f10.coordinate, y16 = void 0;
    if (!(p12 == null || m18 == null || h13 == null)) if (he4(m18 - p12) !== he4(h13 - m18)) {
      var v9 = [];
      if (he4(h13 - m18) === he4(n10[1] - n10[0])) {
        y16 = h13;
        var g13 = m18 + n10[1] - n10[0];
        v9[0] = Math.min(g13, (g13 + p12) / 2), v9[1] = Math.max(g13, (g13 + p12) / 2);
      } else {
        y16 = p12;
        var x18 = h13 + n10[1] - n10[0];
        v9[0] = Math.min(m18, (x18 + m18) / 2), v9[1] = Math.max(m18, (x18 + m18) / 2);
      }
      var b14 = [Math.min(m18, (y16 + m18) / 2), Math.max(m18, (y16 + m18) / 2)];
      if (e14 > b14[0] && e14 <= b14[1] || e14 >= v9[0] && e14 <= v9[1]) {
        var P16;
        return (P16 = t10[l12]) === null || P16 === void 0 ? void 0 : P16.index;
      }
    } else {
      var A13 = Math.min(p12, h13), O12 = Math.max(p12, h13);
      if (e14 > (A13 + m18) / 2 && e14 <= (O12 + m18) / 2) {
        var w9;
        return (w9 = t10[l12]) === null || w9 === void 0 ? void 0 : w9.index;
      }
    }
  }
  else if (r11) for (var S11 = 0; S11 < o15; S11++) {
    var I24 = r11[S11];
    if (I24 != null) {
      var R13 = r11[S11 + 1], C11 = r11[S11 - 1];
      if (S11 === 0 && R13 != null && e14 <= (I24.coordinate + R13.coordinate) / 2 || S11 === o15 - 1 && C11 != null && e14 > (I24.coordinate + C11.coordinate) / 2 || S11 > 0 && S11 < o15 - 1 && C11 != null && R13 != null && e14 > (I24.coordinate + C11.coordinate) / 2 && e14 <= (I24.coordinate + R13.coordinate) / 2) return I24.index;
    }
  }
  return -1;
};
var Kl = () => E17(Tn3);
var Mu = (e14, r11) => r11;
var Tv = (e14, r11, t10) => t10;
var _u = (e14, r11, t10, a11) => a11;
var Lv = fe7(Rr2, (e14) => V5(e14, (r11) => r11.coordinate));
var Bu = fe7([Ut2, Mu, Tv, _u], kl);
var Ui = fe7([Bu, Zt, Gt, ga], ha);
var Nv = (e14, r11, t10) => {
  if (r11 != null) {
    var a11 = Ut2(e14);
    return r11 === "axis" ? t10 === "hover" ? a11.axisInteraction.hover.dataKey : a11.axisInteraction.click.dataKey : t10 === "hover" ? a11.itemInteraction.hover.dataKey : a11.itemInteraction.click.dataKey;
  }
};
var Mv = fe7([Ut2, Mu, Tv, _u], Tl);
var Zi = fe7([or3, lr2, z15, me9, Rr2, _u, Mv], Dl);
var _v = fe7([Bu, Zi], (e14, r11) => {
  var t10;
  return (t10 = e14.coordinate) !== null && t10 !== void 0 ? t10 : r11;
});
var Ku = fe7([Rr2, Ui], Sl);
var Bv = fe7([Mv, Ui, sr2, Gt, Ku, Ll, Mu], Nl);
var Kv = fe7([Bu, Ui], (e14, r11) => ({ isActive: e14.active && r11 != null, activeIndex: r11 }));
var uR = (e14, r11, t10, a11, n10, i9, o15) => {
  if (!(!e14 || !t10 || !a11 || !n10) && Dv(e14, o15)) {
    var l12 = Hf(e14, r11), c16 = Nu(l12, i9, n10, t10, a11), s8 = jv(r11, n10, c16, e14);
    return { activeIndex: String(c16), activeCoordinate: s8 };
  }
};
var dR = (e14, r11, t10, a11, n10, i9, o15) => {
  if (!(!e14 || !a11 || !n10 || !i9 || !t10)) {
    var l12 = mm(e14, t10);
    if (l12) {
      var c16 = Yf(l12, r11), s8 = Nu(c16, o15, i9, a11, n10), u9 = kv(r11, i9, s8, l12);
      return { activeIndex: String(s8), activeCoordinate: u9 };
    }
  }
};
var zv = (e14, r11, t10, a11, n10, i9, o15, l12) => {
  if (!(!e14 || !r11 || !a11 || !n10 || !i9)) return r11 === "horizontal" || r11 === "vertical" ? uR(e14, r11, a11, n10, i9, o15, l12) : dR(e14, r11, t10, a11, n10, i9, o15);
};
var Fv = fe7((e14) => e14.zIndex.zIndexMap, (e14, r11) => r11, (e14, r11, t10) => t10, (e14, r11, t10) => {
  if (r11 != null) {
    var a11 = e14[r11];
    if (a11 != null) return t10 ? a11.panoramaElement : a11.element;
  }
});
var Vv = fe7((e14) => e14.zIndex.zIndexMap, (e14) => {
  var r11 = Object.keys(e14).map((a11) => parseInt(a11, 10)).concat(Object.values(V14)), t10 = Array.from(new Set(r11));
  return t10.sort((a11, n10) => a11 - n10);
}, { memoizeOptions: { resultEqualityCheck: Fm } });
function Xv(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Gv(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Xv(Object(t10), true).forEach(function(a11) {
      fR(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Xv(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function fR(e14, r11, t10) {
  return (r11 = pR(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function pR(e14) {
  var r11 = mR(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function mR(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var hR = {};
var yR = { zIndexMap: Object.values(V14).reduce((e14, r11) => Gv(Gv({}, e14), {}, { [r11]: { element: void 0, panoramaElement: void 0, consumers: 0 } }), hR) };
var gR = new Set(Object.values(V14));
function xR(e14) {
  return gR.has(e14);
}
var Hv = mr({ name: "zIndex", initialState: yR, reducers: { registerZIndexPortal: { reducer: (e14, r11) => {
  var { zIndex: t10 } = r11.payload;
  e14.zIndexMap[t10] ? e14.zIndexMap[t10].consumers += 1 : e14.zIndexMap[t10] = { consumers: 1, element: void 0, panoramaElement: void 0 };
}, prepare: pr() }, unregisterZIndexPortal: { reducer: (e14, r11) => {
  var { zIndex: t10 } = r11.payload;
  e14.zIndexMap[t10] && (e14.zIndexMap[t10].consumers -= 1, e14.zIndexMap[t10].consumers <= 0 && !xR(t10) && delete e14.zIndexMap[t10]);
}, prepare: pr() }, registerZIndexPortalElement: { reducer: (e14, r11) => {
  var { zIndex: t10, element: a11, isPanorama: n10 } = r11.payload;
  e14.zIndexMap[t10] ? n10 ? e14.zIndexMap[t10].panoramaElement = Ce4(a11) : e14.zIndexMap[t10].element = Ce4(a11) : e14.zIndexMap[t10] = { consumers: 0, element: n10 ? void 0 : Ce4(a11), panoramaElement: n10 ? Ce4(a11) : void 0 };
}, prepare: pr() }, unregisterZIndexPortalElement: { reducer: (e14, r11) => {
  var { zIndex: t10 } = r11.payload;
  e14.zIndexMap[t10] && (r11.payload.isPanorama ? e14.zIndexMap[t10].panoramaElement = void 0 : e14.zIndexMap[t10].element = void 0);
}, prepare: pr() } } });
var { registerZIndexPortal: Yv, unregisterZIndexPortal: Fl, registerZIndexPortalElement: Uv, unregisterZIndexPortalElement: Zv } = Hv.actions;
var qv = Hv.reducer;
function U10(e14) {
  var { zIndex: r11, children: t10 } = e14, a11 = dp(), n10 = a11 && r11 !== void 0 && r11 !== 0, i9 = F10(), o15 = Jv(void 0), l12 = Jv(/* @__PURE__ */ new Set()), c16 = M12(), s8 = E17((d12) => Fv(d12, r11, i9));
  if ($v(() => {
    if (!n10) {
      var d12 = l12.current;
      d12.forEach((p12) => {
        c16(Fl({ zIndex: p12 }));
      }), d12.clear(), o15.current = void 0;
      return;
    }
    if (l12.current.has(r11) || (c16(Yv({ zIndex: r11 })), l12.current.add(r11)), s8) {
      o15.current = s8;
      var f10 = l12.current;
      f10.forEach((p12) => {
        p12 !== r11 && (c16(Fl({ zIndex: p12 })), f10.delete(p12));
      });
    }
  }, [c16, r11, n10, s8]), $v(() => {
    var d12 = l12.current;
    return () => {
      d12.forEach((f10) => {
        c16(Fl({ zIndex: f10 }));
      }), d12.clear();
    };
  }, [c16]), !n10) return t10;
  var u9 = s8 ?? o15.current;
  return u9 ? bR(t10, u9) : null;
}
function zu() {
  return zu = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, zu.apply(null, arguments);
}
function Qv(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Vl(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Qv(Object(t10), true).forEach(function(a11) {
      PR(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Qv(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function PR(e14, r11, t10) {
  return (r11 = AR(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function AR(e14) {
  var r11 = OR(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function OR(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function RR(e14) {
  var { cursor: r11, cursorComp: t10, cursorProps: a11 } = e14;
  return SR(r11) ? wR(r11, a11) : ER(t10, a11);
}
function CR(e14) {
  var r11, { coordinate: t10, payload: a11, index: n10, offset: i9, tooltipAxisBandSize: o15, layout: l12, cursor: c16, tooltipEventType: s8, chartName: u9 } = e14, d12 = t10, f10 = a11, p12 = n10;
  if (!c16 || !d12 || u9 !== "ScatterChart" && s8 !== "axis") return null;
  var m18, h13, y16;
  if (u9 === "ScatterChart") m18 = d12, h13 = Ks, y16 = V14.cursorLine;
  else if (u9 === "BarChart") m18 = Lp(l12, d12, i9, o15), h13 = _r, y16 = V14.cursorRectangle;
  else if (l12 === "radial" && Do(d12)) {
    var { cx: v9, cy: g13, radius: x18, startAngle: b14, endAngle: P16 } = il(d12);
    m18 = { cx: v9, cy: g13, startAngle: b14, endAngle: P16, innerRadius: x18, outerRadius: x18 }, h13 = za, y16 = V14.cursorLine;
  } else m18 = { points: wm(l12, d12, i9) }, h13 = Mr, y16 = V14.cursorLine;
  var A13 = typeof c16 == "object" && "className" in c16 ? c16.className : void 0, O12 = Vl(Vl(Vl(Vl({ stroke: "#ccc", pointerEvents: "none" }, i9), m18), Ee6(c16)), {}, { payload: f10, payloadIndex: p12, className: IR("recharts-tooltip-cursor", A13) });
  return Xl.createElement(U10, { zIndex: (r11 = e14.zIndex) !== null && r11 !== void 0 ? r11 : y16 }, Xl.createElement(RR, { cursor: c16, cursorComp: h13, cursorProps: O12 }));
}
function eh(e14) {
  var r11 = Rv(), t10 = Go(), a11 = cr(), n10 = Kl();
  return r11 == null || t10 == null || a11 == null || n10 == null ? null : Xl.createElement(CR, zu({}, e14, { offset: t10, layout: a11, tooltipAxisBandSize: r11, chartName: n10 }));
}
var $t3 = jR(null);
var rh = () => kR($t3);
var Ya = new z6();
var Gl = "recharts.syncEvent.tooltip";
var Hl = "recharts.syncEvent.brush";
var Qe4 = (e14, r11) => {
  if (r11 && Array.isArray(e14)) {
    var t10 = Number.parseInt(r11, 10);
    if (!_e7(t10)) return e14[t10];
  }
};
var LR = { chartName: "", tooltipPayloadSearcher: () => {
}, eventEmitter: void 0, defaultTooltipEventType: "axis" };
var th = mr({ name: "options", initialState: LR, reducers: { createEventEmitter: (e14) => {
  e14.eventEmitter == null && (e14.eventEmitter = Symbol("rechartsEventEmitter"));
} } });
var ah = th.reducer;
var { createEventEmitter: nh } = th.actions;
function ih(e14) {
  return e14.tooltip.syncInteraction;
}
var _R = { chartData: void 0, computedData: void 0, dataStartIndex: 0, dataEndIndex: 0 };
var oh = mr({ name: "chartData", initialState: _R, reducers: { setChartData(e14, r11) {
  if (e14.chartData = Ce4(r11.payload), r11.payload == null) {
    e14.dataStartIndex = 0, e14.dataEndIndex = 0;
    return;
  }
  r11.payload.length > 0 && e14.dataEndIndex !== r11.payload.length - 1 && (e14.dataEndIndex = r11.payload.length - 1);
}, setComputedData(e14, r11) {
  e14.computedData = r11.payload;
}, setDataStartEndIndexes(e14, r11) {
  var { startIndex: t10, endIndex: a11 } = r11.payload;
  t10 != null && (e14.dataStartIndex = t10), a11 != null && (e14.dataEndIndex = a11);
} } });
var { setChartData: Yl, setDataStartEndIndexes: qi, setComputedData: lh } = oh.actions;
var ch = oh.reducer;
var BR = ["x", "y"];
function sh(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Yn2(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? sh(Object(t10), true).forEach(function(a11) {
      KR(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : sh(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function KR(e14, r11, t10) {
  return (r11 = zR(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function zR(e14) {
  var r11 = WR(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function WR(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function FR(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = VR(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function VR(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function XR() {
  var e14 = E17(ji), r11 = E17(ki), t10 = M12(), a11 = E17(Hs), n10 = E17(Rr2), i9 = cr(), o15 = st4(), l12 = E17((c16) => c16.rootProps.className);
  $i(() => {
    if (e14 == null) return ye6;
    var c16 = (s8, u9, d12) => {
      if (r11 !== d12 && e14 === s8) {
        if (u9.payload.active === false) {
          t10(Xn2({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }));
          return;
        }
        if (a11 === "index") {
          var f10;
          if (o15 && u9 !== null && u9 !== void 0 && (f10 = u9.payload) !== null && f10 !== void 0 && f10.coordinate && u9.payload.sourceViewBox) {
            var p12 = u9.payload.coordinate, { x: m18, y: h13 } = p12, y16 = FR(p12, BR), { x: v9, y: g13, width: x18, height: b14 } = u9.payload.sourceViewBox, P16 = Yn2(Yn2({}, y16), {}, { x: o15.x + (x18 ? (m18 - v9) / x18 : 0) * o15.width, y: o15.y + (b14 ? (h13 - g13) / b14 : 0) * o15.height });
            t10(Yn2(Yn2({}, u9), {}, { payload: Yn2(Yn2({}, u9.payload), {}, { coordinate: P16 }) }));
          } else t10(u9);
          return;
        }
        if (n10 != null) {
          var A13;
          if (typeof a11 == "function") {
            var O12 = { activeTooltipIndex: u9.payload.index == null ? void 0 : Number(u9.payload.index), isTooltipActive: u9.payload.active, activeIndex: u9.payload.index == null ? void 0 : Number(u9.payload.index), activeLabel: u9.payload.label, activeDataKey: u9.payload.dataKey, activeCoordinate: u9.payload.coordinate }, w9 = a11(n10, O12);
            A13 = n10[w9];
          } else a11 === "value" && (A13 = n10.find((G20) => String(G20.value) === u9.payload.label));
          var { coordinate: S11 } = u9.payload;
          if (S11 == null || o15 == null) {
            t10(Xn2({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }));
            return;
          }
          if (A13 == null) {
            t10(Xn2({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: u9.payload.sourceViewBox, graphicalItemId: void 0 }));
            return;
          }
          var { x: I24, y: R13 } = S11, C11 = Math.min(I24, o15.x + o15.width), N19 = Math.min(R13, o15.y + o15.height), j15 = { x: i9 === "horizontal" ? A13.coordinate : C11, y: i9 === "horizontal" ? N19 : A13.coordinate }, D18 = Xn2({ active: u9.payload.active, coordinate: j15, dataKey: u9.payload.dataKey, index: String(A13.index), label: u9.payload.label, sourceViewBox: u9.payload.sourceViewBox, graphicalItemId: u9.payload.graphicalItemId });
          t10(D18);
        }
      }
    };
    return Ya.on(Gl, c16), () => {
      Ya.off(Gl, c16);
    };
  }, [l12, t10, r11, e14, a11, n10, i9, o15]);
}
function GR() {
  var e14 = E17(ji), r11 = E17(ki), t10 = M12();
  $i(() => {
    if (e14 == null) return ye6;
    var a11 = (n10, i9, o15) => {
      r11 !== o15 && e14 === n10 && t10(qi(i9));
    };
    return Ya.on(Hl, a11), () => {
      Ya.off(Hl, a11);
    };
  }, [t10, r11, e14]);
}
function uh() {
  var e14 = M12();
  $i(() => {
    e14(nh());
  }, [e14]), XR(), GR();
}
function dh(e14, r11, t10, a11, n10, i9) {
  var o15 = E17((m18) => Nv(m18, e14, r11)), l12 = E17(Ml), c16 = E17(ki), s8 = E17(ji), u9 = E17(Hs), d12 = E17(ih), f10 = d12?.sourceViewBox != null, p12 = st4();
  $i(() => {
    if (!f10 && s8 != null && c16 != null) {
      var m18 = Xn2({ active: i9, coordinate: t10, dataKey: o15, index: n10, label: typeof a11 == "number" ? String(a11) : a11, sourceViewBox: p12, graphicalItemId: l12 });
      Ya.emit(Gl, s8, m18, c16);
    }
  }, [f10, t10, o15, l12, n10, a11, c16, s8, u9, i9, p12]);
}
function fh() {
  var e14 = E17(ji), r11 = E17(ki), t10 = E17((n10) => n10.chartData.dataStartIndex), a11 = E17((n10) => n10.chartData.dataEndIndex);
  $i(() => {
    if (!(e14 == null || t10 == null || a11 == null || r11 == null)) {
      var n10 = { startIndex: t10, endIndex: a11 };
      Ya.emit(Hl, e14, n10, r11);
    }
  }, [a11, t10, r11, e14]);
}
function ph(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function mh(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? ph(Object(t10), true).forEach(function(a11) {
      HR(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : ph(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function HR(e14, r11, t10) {
  return (r11 = YR(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function YR(e14) {
  var r11 = UR(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function UR(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function $R(e14) {
  return e14.dataKey;
}
function JR(e14, r11) {
  return $r.isValidElement(e14) ? $r.cloneElement(e14, r11) : typeof e14 == "function" ? $r.createElement(e14, r11) : $r.createElement(Ms, r11);
}
var vh = [];
var QR = { allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", axisId: 0, contentStyle: {}, cursor: true, filterNull: true, includeHidden: false, isAnimationActive: "auto", itemSorter: "name", itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, wrapperStyle: {} };
function eC(e14) {
  var r11, t10, a11 = L11(e14, QR), { active: n10, allowEscapeViewBox: i9, animationDuration: o15, animationEasing: l12, content: c16, filterNull: s8, isAnimationActive: u9, offset: d12, payloadUniqBy: f10, position: p12, reverseDirection: m18, useTranslate3d: h13, wrapperStyle: y16, cursor: v9, shared: g13, trigger: x18, defaultIndex: b14, portal: P16, axisId: A13 } = a11, O12 = M12(), w9 = typeof b14 == "number" ? String(b14) : b14;
  ZR(() => {
    O12(fv({ shared: g13, trigger: x18, axisId: A13, active: n10, defaultIndex: w9 }));
  }, [O12, g13, x18, A13, n10, w9]);
  var S11 = st4(), I24 = Zo(), R13 = iv(g13), { activeIndex: C11, isActive: N19 } = (r11 = E17((ir) => Kv(ir, R13, x18, w9))) !== null && r11 !== void 0 ? r11 : {}, j15 = E17((ir) => Bv(ir, R13, x18, w9)), D18 = E17((ir) => Ku(ir, R13, x18, w9)), G20 = E17((ir) => _v(ir, R13, x18, w9)), H14 = j15, ie6 = rh(), Y10 = (t10 = n10 ?? N19) !== null && t10 !== void 0 ? t10 : false, [oe8, ae11] = _o([H14, Y10]), fe9 = R13 === "axis" ? D18 : void 0;
  dh(R13, x18, G20, fe9, C11, Y10);
  var Me5 = P16 ?? ie6;
  if (Me5 == null || S11 == null || R13 == null) return null;
  var Pe5 = H14 ?? vh;
  Y10 || (Pe5 = vh), s8 && Pe5.length && (Pe5 = Lo(Pe5.filter((ir) => ir.value != null && (ir.hide !== true || a11.includeHidden)), f10, $R));
  var Fe5 = Pe5.length > 0, ot4 = mh(mh({}, a11), {}, { payload: Pe5, label: fe9, active: Y10, activeIndex: C11, coordinate: G20, accessibilityLayer: I24 }), xr = $r.createElement(wp, { allowEscapeViewBox: i9, animationDuration: o15, animationEasing: l12, isAnimationActive: u9, active: Y10, coordinate: G20, hasPayload: Fe5, offset: d12, position: p12, reverseDirection: m18, useTranslate3d: h13, viewBox: S11, wrapperStyle: y16, lastBoundingBox: oe8, innerRef: ae11, hasPortalFromProps: !!P16 }, JR(c16, ot4));
  return $r.createElement($r.Fragment, null, qR(xr, Me5), Y10 && $r.createElement(eh, { cursor: v9, tooltipEventType: R13, coordinate: G20, payload: Pe5, index: C11 }));
}
var zr = (e14) => null;
zr.displayName = "Cell";
function rC(e14, r11, t10) {
  return (r11 = tC(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function tC(e14) {
  var r11 = aC(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function aC(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Ul = class {
  constructor(r11) {
    rC(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = r11;
  }
  get(r11) {
    var t10 = this.cache.get(r11);
    return t10 !== void 0 && (this.cache.delete(r11), this.cache.set(r11, t10)), t10;
  }
  set(r11, t10) {
    if (this.cache.has(r11)) this.cache.delete(r11);
    else if (this.cache.size >= this.maxSize) {
      var a11 = this.cache.keys().next().value;
      a11 != null && this.cache.delete(a11);
    }
    this.cache.set(r11, t10);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
};
function hh(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function nC(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? hh(Object(t10), true).forEach(function(a11) {
      iC(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : hh(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function iC(e14, r11, t10) {
  return (r11 = oC(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function oC(e14) {
  var r11 = lC(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function lC(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var cC = { cacheSize: 2e3, enableCache: true };
var bh = nC({}, cC);
var yh = new Ul(bh.cacheSize);
var sC = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" };
var gh = "recharts_measurement_span";
function uC(e14, r11) {
  var t10 = r11.fontSize || "", a11 = r11.fontFamily || "", n10 = r11.fontWeight || "", i9 = r11.fontStyle || "", o15 = r11.letterSpacing || "", l12 = r11.textTransform || "";
  return "".concat(e14, "|").concat(t10, "|").concat(a11, "|").concat(n10, "|").concat(i9, "|").concat(o15, "|").concat(l12);
}
var xh = (e14, r11) => {
  try {
    var t10 = document.getElementById(gh);
    t10 || (t10 = document.createElement("span"), t10.setAttribute("id", gh), t10.setAttribute("aria-hidden", "true"), document.body.appendChild(t10)), Object.assign(t10.style, sC, r11), t10.textContent = "".concat(e14);
    var a11 = t10.getBoundingClientRect();
    return { width: a11.width, height: a11.height };
  } catch {
    return { width: 0, height: 0 };
  }
};
var Jt2 = function(r11) {
  var t10 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (r11 == null || Pr.isSsr) return { width: 0, height: 0 };
  if (!bh.enableCache) return xh(r11, t10);
  var a11 = uC(r11, t10), n10 = yh.get(a11);
  if (n10) return n10;
  var i9 = xh(r11, t10);
  return yh.set(a11, i9), i9;
};
var wh;
function dC(e14, r11, t10) {
  return (r11 = fC(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function fC(e14) {
  var r11 = pC(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function pC(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Ph = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var Ah = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var mC = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/;
var vC = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;
var hC = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 };
var yC = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function gC(e14) {
  return yC.includes(e14);
}
var Un3 = "NaN";
function xC(e14, r11) {
  return e14 * hC[r11];
}
var xa = class e13 {
  static parse(r11) {
    var t10, [, a11, n10] = (t10 = vC.exec(r11)) !== null && t10 !== void 0 ? t10 : [];
    return a11 == null ? e13.NaN : new e13(parseFloat(a11), n10 ?? "");
  }
  constructor(r11, t10) {
    this.num = r11, this.unit = t10, this.num = r11, this.unit = t10, _e7(r11) && (this.unit = ""), t10 !== "" && !mC.test(t10) && (this.num = NaN, this.unit = ""), gC(t10) && (this.num = xC(r11, t10), this.unit = "px");
  }
  add(r11) {
    return this.unit !== r11.unit ? new e13(NaN, "") : new e13(this.num + r11.num, this.unit);
  }
  subtract(r11) {
    return this.unit !== r11.unit ? new e13(NaN, "") : new e13(this.num - r11.num, this.unit);
  }
  multiply(r11) {
    return this.unit !== "" && r11.unit !== "" && this.unit !== r11.unit ? new e13(NaN, "") : new e13(this.num * r11.num, this.unit || r11.unit);
  }
  divide(r11) {
    return this.unit !== "" && r11.unit !== "" && this.unit !== r11.unit ? new e13(NaN, "") : new e13(this.num / r11.num, this.unit || r11.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return _e7(this.num);
  }
};
wh = xa;
dC(xa, "NaN", new wh(NaN, ""));
function Eh(e14) {
  if (e14 == null || e14.includes(Un3)) return Un3;
  for (var r11 = e14; r11.includes("*") || r11.includes("/"); ) {
    var t10, [, a11, n10, i9] = (t10 = Ph.exec(r11)) !== null && t10 !== void 0 ? t10 : [], o15 = xa.parse(a11 ?? ""), l12 = xa.parse(i9 ?? ""), c16 = n10 === "*" ? o15.multiply(l12) : o15.divide(l12);
    if (c16.isNaN()) return Un3;
    r11 = r11.replace(Ph, c16.toString());
  }
  for (; r11.includes("+") || /.-\d+(?:\.\d+)?/.test(r11); ) {
    var s8, [, u9, d12, f10] = (s8 = Ah.exec(r11)) !== null && s8 !== void 0 ? s8 : [], p12 = xa.parse(u9 ?? ""), m18 = xa.parse(f10 ?? ""), h13 = d12 === "+" ? p12.add(m18) : p12.subtract(m18);
    if (h13.isNaN()) return Un3;
    r11 = r11.replace(Ah, h13.toString());
  }
  return r11;
}
var Oh = /\(([^()]*)\)/;
function bC(e14) {
  for (var r11 = e14, t10; (t10 = Oh.exec(r11)) != null; ) {
    var [, a11] = t10;
    r11 = r11.replace(Oh, Eh(a11));
  }
  return r11;
}
function PC(e14) {
  var r11 = e14.replace(/\s+/g, "");
  return r11 = bC(r11), r11 = Eh(r11), r11;
}
function AC(e14) {
  try {
    return PC(e14);
  } catch {
    return Un3;
  }
}
function Zl(e14) {
  var r11 = AC(e14.slice(5, -1));
  return r11 === Un3 ? "" : r11;
}
var OC = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"];
var wC = ["dx", "dy", "angle", "className", "breakAll"];
function Wu() {
  return Wu = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Wu.apply(null, arguments);
}
function Sh(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = EC(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function EC(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var Ch = /[ \f\n\r\t\v\u2028\u2029]+/;
var jh = (e14) => {
  var { children: r11, breakAll: t10, style: a11 } = e14;
  try {
    var n10 = [];
    Z10(r11) || (t10 ? n10 = r11.toString().split("") : n10 = r11.toString().split(Ch));
    var i9 = n10.map((l12) => ({ word: l12, width: Jt2(l12, a11).width })), o15 = t10 ? 0 : Jt2("\xA0", a11).width;
    return { wordsWithComputedWidth: i9, spaceWidth: o15 };
  } catch {
    return null;
  }
};
function ql(e14) {
  return e14 === "start" || e14 === "middle" || e14 === "end" || e14 === "inherit";
}
function kh(e14) {
  return Z10(e14) || typeof e14 == "string" || typeof e14 == "number" || typeof e14 == "boolean";
}
var Dh = (e14, r11, t10, a11) => e14.reduce((n10, i9) => {
  var { word: o15, width: l12 } = i9, c16 = n10[n10.length - 1];
  if (c16 && l12 != null && (r11 == null || a11 || c16.width + l12 + t10 < Number(r11))) c16.words.push(o15), c16.width += l12 + t10;
  else {
    var s8 = { words: [o15], width: l12 };
    n10.push(s8);
  }
  return n10;
}, []);
var Th = (e14) => e14.reduce((r11, t10) => r11.width > t10.width ? r11 : t10);
var CC = "\u2026";
var Ih = (e14, r11, t10, a11, n10, i9, o15, l12) => {
  var c16 = e14.slice(0, r11), s8 = jh({ breakAll: t10, style: a11, children: c16 + CC });
  if (!s8) return [false, []];
  var u9 = Dh(s8.wordsWithComputedWidth, i9, o15, l12), d12 = u9.length > n10 || Th(u9).width > Number(i9);
  return [d12, u9];
};
var jC = (e14, r11, t10, a11, n10) => {
  var { maxLines: i9, children: o15, style: l12, breakAll: c16 } = e14, s8 = k11(i9), u9 = String(o15), d12 = Dh(r11, a11, t10, n10);
  if (!s8 || n10) return d12;
  var f10 = d12.length > i9 || Th(d12).width > Number(a11);
  if (!f10) return d12;
  for (var p12 = 0, m18 = u9.length - 1, h13 = 0, y16; p12 <= m18 && h13 <= u9.length - 1; ) {
    var v9 = Math.floor((p12 + m18) / 2), g13 = v9 - 1, [x18, b14] = Ih(u9, g13, c16, l12, i9, a11, t10, n10), [P16] = Ih(u9, v9, c16, l12, i9, a11, t10, n10);
    if (!x18 && !P16 && (p12 = v9 + 1), x18 && P16 && (m18 = v9 - 1), !x18 && P16) {
      y16 = b14;
      break;
    }
    h13++;
  }
  return y16 || d12;
};
var Rh = (e14) => {
  var r11 = Z10(e14) ? [] : e14.toString().split(Ch);
  return [{ words: r11, width: void 0 }];
};
var kC = (e14) => {
  var { width: r11, scaleToFit: t10, children: a11, style: n10, breakAll: i9, maxLines: o15 } = e14;
  if ((r11 || t10) && !Pr.isSsr) {
    var l12, c16, s8 = jh({ breakAll: i9, children: a11, style: n10 });
    if (s8) {
      var { wordsWithComputedWidth: u9, spaceWidth: d12 } = s8;
      l12 = u9, c16 = d12;
    } else return Rh(a11);
    return jC({ breakAll: i9, children: a11, maxLines: o15, style: n10 }, l12, c16, r11, !!t10);
  }
  return Rh(a11);
};
var Lh = "#808080";
var DC = { angle: 0, breakAll: false, capHeight: "0.71em", fill: Lh, lineHeight: "1em", scaleToFit: false, textAnchor: "start", verticalAnchor: "end", x: 0, y: 0 };
var nr = IC((e14, r11) => {
  var t10 = L11(e14, DC), { x: a11, y: n10, lineHeight: i9, capHeight: o15, fill: l12, scaleToFit: c16, textAnchor: s8, verticalAnchor: u9 } = t10, d12 = Sh(t10, OC), f10 = SC(() => kC({ breakAll: d12.breakAll, children: d12.children, maxLines: d12.maxLines, scaleToFit: c16, style: d12.style, width: d12.width }), [d12.breakAll, d12.children, d12.maxLines, c16, d12.style, d12.width]), { dx: p12, dy: m18, angle: h13, className: y16, breakAll: v9 } = d12, g13 = Sh(d12, wC);
  if (!be8(a11) || !be8(n10) || f10.length === 0) return null;
  var x18 = Number(a11) + (k11(p12) ? p12 : 0), b14 = Number(n10) + (k11(m18) ? m18 : 0);
  if (!W15(x18) || !W15(b14)) return null;
  var P16;
  switch (u9) {
    case "start":
      P16 = Zl("calc(".concat(o15, ")"));
      break;
    case "middle":
      P16 = Zl("calc(".concat((f10.length - 1) / 2, " * -").concat(i9, " + (").concat(o15, " / 2))"));
      break;
    default:
      P16 = Zl("calc(".concat(f10.length - 1, " * -").concat(i9, ")"));
      break;
  }
  var A13 = [], O12 = f10[0];
  if (c16 && O12 != null) {
    var w9 = O12.width, { width: S11 } = d12;
    A13.push("scale(".concat(k11(S11) && k11(w9) ? S11 / w9 : 1, ")"));
  }
  return h13 && A13.push("rotate(".concat(h13, ", ").concat(x18, ", ").concat(b14, ")")), A13.length && (g13.transform = A13.join(" ")), Fu.createElement("text", Wu({}, re7(g13), { ref: r11, x: x18, y: b14, className: RC("recharts-text", y16), textAnchor: s8, fill: l12.includes("url") ? Lh : l12 }), f10.map((I24, R13) => {
    var C11 = I24.words.join(v9 ? "" : " ");
    return Fu.createElement("tspan", { x: x18, dy: R13 === 0 ? P16 : i9, key: "".concat(C11, "-").concat(R13) }, C11);
  }));
});
nr.displayName = "Text";
function Nh(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Dt3(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Nh(Object(t10), true).forEach(function(a11) {
      TC(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Nh(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function TC(e14, r11, t10) {
  return (r11 = LC(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function LC(e14) {
  var r11 = NC(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function NC(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Mh = (e14) => {
  var { viewBox: r11, position: t10, offset: a11 = 0, parentViewBox: n10, clamp: i9 } = e14, { x: o15, y: l12, height: c16, upperWidth: s8, lowerWidth: u9 } = Pi(r11), d12 = o15, f10 = o15 + (s8 - u9) / 2, p12 = (d12 + f10) / 2, m18 = (s8 + u9) / 2, h13 = d12 + s8 / 2, y16 = c16 >= 0 ? 1 : -1, v9 = y16 * a11, g13 = y16 > 0 ? "end" : "start", x18 = y16 > 0 ? "start" : "end", b14 = s8 >= 0 ? 1 : -1, P16 = b14 * a11, A13 = b14 > 0 ? "end" : "start", O12 = b14 > 0 ? "start" : "end", w9 = n10;
  if (t10 === "top") {
    var S11 = { x: d12 + s8 / 2, y: l12 - v9, horizontalAnchor: "middle", verticalAnchor: g13 };
    return i9 && w9 && (S11.height = Math.max(l12 - w9.y, 0), S11.width = s8), S11;
  }
  if (t10 === "bottom") {
    var I24 = { x: f10 + u9 / 2, y: l12 + c16 + v9, horizontalAnchor: "middle", verticalAnchor: x18 };
    return i9 && w9 && (I24.height = Math.max(w9.y + w9.height - (l12 + c16), 0), I24.width = u9), I24;
  }
  if (t10 === "left") {
    var R13 = { x: p12 - P16, y: l12 + c16 / 2, horizontalAnchor: A13, verticalAnchor: "middle" };
    return i9 && w9 && (R13.width = Math.max(R13.x - w9.x, 0), R13.height = c16), R13;
  }
  if (t10 === "right") {
    var C11 = { x: p12 + m18 + P16, y: l12 + c16 / 2, horizontalAnchor: O12, verticalAnchor: "middle" };
    return i9 && w9 && (C11.width = Math.max(w9.x + w9.width - C11.x, 0), C11.height = c16), C11;
  }
  var N19 = i9 && w9 ? { width: m18, height: c16 } : {};
  return t10 === "insideLeft" ? Dt3({ x: p12 + P16, y: l12 + c16 / 2, horizontalAnchor: O12, verticalAnchor: "middle" }, N19) : t10 === "insideRight" ? Dt3({ x: p12 + m18 - P16, y: l12 + c16 / 2, horizontalAnchor: A13, verticalAnchor: "middle" }, N19) : t10 === "insideTop" ? Dt3({ x: d12 + s8 / 2, y: l12 + v9, horizontalAnchor: "middle", verticalAnchor: x18 }, N19) : t10 === "insideBottom" ? Dt3({ x: f10 + u9 / 2, y: l12 + c16 - v9, horizontalAnchor: "middle", verticalAnchor: g13 }, N19) : t10 === "insideTopLeft" ? Dt3({ x: d12 + P16, y: l12 + v9, horizontalAnchor: O12, verticalAnchor: x18 }, N19) : t10 === "insideTopRight" ? Dt3({ x: d12 + s8 - P16, y: l12 + v9, horizontalAnchor: A13, verticalAnchor: x18 }, N19) : t10 === "insideBottomLeft" ? Dt3({ x: f10 + P16, y: l12 + c16 - v9, horizontalAnchor: O12, verticalAnchor: g13 }, N19) : t10 === "insideBottomRight" ? Dt3({ x: f10 + u9 - P16, y: l12 + c16 - v9, horizontalAnchor: A13, verticalAnchor: g13 }, N19) : t10 && typeof t10 == "object" && (k11(t10.x) || Bt(t10.x)) && (k11(t10.y) || Bt(t10.y)) ? Dt3({ x: o15 + Ae6(t10.x, m18), y: l12 + Ae6(t10.y, c16), horizontalAnchor: "end", verticalAnchor: "end" }, N19) : Dt3({ x: h13, y: l12 + c16 / 2, horizontalAnchor: "middle", verticalAnchor: "middle" }, N19);
};
var MC = ["labelRef"];
var _C = ["content"];
function _h(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = BC(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function BC(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function Bh(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Ji(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Bh(Object(t10), true).forEach(function(a11) {
      KC(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Bh(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function KC(e14, r11, t10) {
  return (r11 = zC(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function zC(e14) {
  var r11 = WC(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function WC(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Qt2() {
  return Qt2 = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Qt2.apply(null, arguments);
}
var Xh = zh(null);
var ba = (e14) => {
  var { x: r11, y: t10, upperWidth: a11, lowerWidth: n10, width: i9, height: o15, children: l12 } = e14, c16 = Fh(() => ({ x: r11, y: t10, upperWidth: a11, lowerWidth: n10, width: i9, height: o15 }), [r11, t10, a11, n10, i9, o15]);
  return Cr2.createElement(Xh.Provider, { value: c16 }, l12);
};
var Gh = () => {
  var e14 = Wh(Xh), r11 = st4();
  return e14 || (r11 ? Pi(r11) : void 0);
};
var Hh = zh(null);
var Yh = (e14) => {
  var { cx: r11, cy: t10, innerRadius: a11, outerRadius: n10, startAngle: i9, endAngle: o15, clockWise: l12, children: c16 } = e14, s8 = Fh(() => ({ cx: r11, cy: t10, innerRadius: a11, outerRadius: n10, startAngle: i9, endAngle: o15, clockWise: l12 }), [r11, t10, a11, n10, i9, o15, l12]);
  return Cr2.createElement(Hh.Provider, { value: s8 }, c16);
};
var Uh = () => {
  var e14 = Wh(Hh), r11 = E17(Ir);
  return e14 || r11;
};
var VC = (e14) => {
  var { value: r11, formatter: t10 } = e14, a11 = Z10(e14.children) ? r11 : e14.children;
  return typeof t10 == "function" ? t10(a11) : a11;
};
var Qi = (e14) => e14 != null && typeof e14 == "function";
var XC = (e14, r11) => {
  var t10 = he4(r11 - e14), a11 = Math.min(Math.abs(r11 - e14), 360);
  return t10 * a11;
};
var GC = (e14, r11, t10, a11, n10) => {
  var { offset: i9, className: o15 } = e14, { cx: l12, cy: c16, innerRadius: s8, outerRadius: u9, startAngle: d12, endAngle: f10, clockWise: p12 } = n10, m18 = (s8 + u9) / 2, h13 = XC(d12, f10), y16 = h13 >= 0 ? 1 : -1, v9, g13;
  switch (r11) {
    case "insideStart":
      v9 = d12 + y16 * i9, g13 = p12;
      break;
    case "insideEnd":
      v9 = f10 - y16 * i9, g13 = !p12;
      break;
    case "end":
      v9 = f10 + y16 * i9, g13 = p12;
      break;
    default:
      throw new Error("Unsupported position ".concat(r11));
  }
  g13 = h13 <= 0 ? g13 : !g13;
  var x18 = Q12(l12, c16, m18, v9), b14 = Q12(l12, c16, m18, v9 + (g13 ? 1 : -1) * 359), P16 = "M".concat(x18.x, ",").concat(x18.y, `
    A`).concat(m18, ",").concat(m18, ",0,1,").concat(g13 ? 0 : 1, `,
    `).concat(b14.x, ",").concat(b14.y), A13 = Z10(e14.id) ? lt6("recharts-radial-line-") : e14.id;
  return Cr2.createElement("text", Qt2({}, a11, { dominantBaseline: "central", className: Vh("recharts-radial-bar-label", o15) }), Cr2.createElement("defs", null, Cr2.createElement("path", { id: A13, d: P16 })), Cr2.createElement("textPath", { xlinkHref: "#".concat(A13) }, t10));
};
var HC = (e14, r11, t10) => {
  var { cx: a11, cy: n10, innerRadius: i9, outerRadius: o15, startAngle: l12, endAngle: c16 } = e14, s8 = (l12 + c16) / 2;
  if (t10 === "outside") {
    var { x: u9, y: d12 } = Q12(a11, n10, o15 + r11, s8);
    return { x: u9, y: d12, textAnchor: u9 >= a11 ? "start" : "end", verticalAnchor: "middle" };
  }
  if (t10 === "center") return { x: a11, y: n10, textAnchor: "middle", verticalAnchor: "middle" };
  if (t10 === "centerTop") return { x: a11, y: n10, textAnchor: "middle", verticalAnchor: "start" };
  if (t10 === "centerBottom") return { x: a11, y: n10, textAnchor: "middle", verticalAnchor: "end" };
  var f10 = (i9 + o15) / 2, { x: p12, y: m18 } = Q12(a11, n10, f10, s8);
  return { x: p12, y: m18, textAnchor: "middle", verticalAnchor: "middle" };
};
var Jl = (e14) => e14 != null && "cx" in e14 && k11(e14.cx);
var YC = { angle: 0, offset: 5, zIndex: V14.label, position: "middle", textBreakAll: false };
function UC(e14) {
  if (!Jl(e14)) return e14;
  var { cx: r11, cy: t10, outerRadius: a11 } = e14, n10 = a11 * 2;
  return { x: r11 - a11, y: t10 - a11, width: n10, upperWidth: n10, lowerWidth: n10, height: n10 };
}
function Tt4(e14) {
  var r11 = L11(e14, YC), { viewBox: t10, parentViewBox: a11, position: n10, value: i9, children: o15, content: l12, className: c16 = "", textBreakAll: s8, labelRef: u9 } = r11, d12 = Uh(), f10 = Gh(), p12 = n10 === "center" ? f10 : d12 ?? f10, m18, h13, y16;
  t10 == null ? m18 = p12 : Jl(t10) ? m18 = t10 : m18 = Pi(t10);
  var v9 = UC(m18);
  if (!m18 || Z10(i9) && Z10(o15) && !$l(l12) && typeof l12 != "function") return null;
  var g13 = Ji(Ji({}, r11), {}, { viewBox: m18 });
  if ($l(l12)) {
    var { labelRef: x18 } = g13, b14 = _h(g13, MC);
    return Kh(l12, b14);
  }
  if (typeof l12 == "function") {
    var { content: P16 } = g13, A13 = _h(g13, _C);
    if (h13 = FC(l12, A13), $l(h13)) return h13;
  } else h13 = VC(r11);
  var O12 = re7(r11);
  if (Jl(m18)) {
    if (n10 === "insideStart" || n10 === "insideEnd" || n10 === "end") return GC(r11, n10, h13, O12, m18);
    y16 = HC(m18, r11.offset, r11.position);
  } else {
    if (!v9) return null;
    var w9 = Mh({ viewBox: v9, position: n10, offset: r11.offset, parentViewBox: Jl(a11) ? void 0 : a11, clamp: true });
    y16 = Ji(Ji({ x: w9.x, y: w9.y, textAnchor: w9.horizontalAnchor, verticalAnchor: w9.verticalAnchor }, w9.width !== void 0 ? { width: w9.width } : {}), w9.height !== void 0 ? { height: w9.height } : {});
  }
  return Cr2.createElement(U10, { zIndex: r11.zIndex }, Cr2.createElement(nr, Qt2({ ref: u9, className: Vh("recharts-label", c16) }, O12, y16, { textAnchor: ql(O12.textAnchor) ? O12.textAnchor : y16.textAnchor, breakAll: s8 }), h13));
}
Tt4.displayName = "Label";
var Zh = (e14, r11, t10) => {
  if (!e14) return null;
  var a11 = { viewBox: r11, labelRef: t10 };
  return e14 === true ? Cr2.createElement(Tt4, Qt2({ key: "label-implicit" }, a11)) : be8(e14) ? Cr2.createElement(Tt4, Qt2({ key: "label-implicit", value: e14 }, a11)) : $l(e14) ? e14.type === Tt4 ? Kh(e14, Ji({ key: "label-implicit" }, a11)) : Cr2.createElement(Tt4, Qt2({ key: "label-implicit", content: e14 }, a11)) : Qi(e14) ? Cr2.createElement(Tt4, Qt2({ key: "label-implicit", content: e14 }, a11)) : e14 && typeof e14 == "object" ? Cr2.createElement(Tt4, Qt2({}, e14, { key: "label-implicit" }, a11)) : null;
};
function Pa(e14) {
  var { label: r11, labelRef: t10 } = e14, a11 = Gh();
  return Zh(r11, a11, t10) || null;
}
function qh(e14) {
  var { label: r11 } = e14, t10 = Uh();
  return Zh(r11, t10) || null;
}
var ZC = ["valueAccessor"];
var qC = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function Ql() {
  return Ql = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Ql.apply(null, arguments);
}
function $h(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = $C(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function $C(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var JC = (e14) => {
  var r11 = Array.isArray(e14.value) ? e14.value[e14.value.length - 1] : e14.value;
  if (kh(r11)) return r11;
};
var ey = Jh(void 0);
var Jr = ey.Provider;
var ry = Jh(void 0);
var ec = ry.Provider;
function QC() {
  return Qh(ey);
}
function ej() {
  return Qh(ry);
}
function eo(e14) {
  var { valueAccessor: r11 = JC } = e14, t10 = $h(e14, ZC), { dataKey: a11, clockWise: n10, id: i9, textBreakAll: o15, zIndex: l12 } = t10, c16 = $h(t10, qC), s8 = QC(), u9 = ej(), d12 = s8 || u9;
  return !d12 || !d12.length ? null : ea.createElement(U10, { zIndex: l12 ?? V14.label }, ea.createElement(T14, { className: "recharts-label-list" }, d12.map((f10, p12) => {
    var m18, h13 = Z10(a11) ? r11(f10, p12) : _13(f10.payload, a11), y16 = Z10(i9) ? {} : { id: "".concat(i9, "-").concat(p12) };
    return ea.createElement(Tt4, Ql({ key: "label-".concat(p12) }, re7(f10), c16, y16, { fill: (m18 = t10.fill) !== null && m18 !== void 0 ? m18 : f10.fill, parentViewBox: f10.parentViewBox, value: h13, textBreakAll: o15, viewBox: f10.viewBox, index: p12, zIndex: 0 }));
  })));
}
eo.displayName = "LabelList";
function pr3(e14) {
  var { label: r11 } = e14;
  return r11 ? r11 === true ? ea.createElement(eo, { key: "labelList-implicit" }) : ea.isValidElement(r11) || Qi(r11) ? ea.createElement(eo, { key: "labelList-implicit", content: r11 }) : typeof r11 == "object" ? ea.createElement(eo, Ql({ key: "labelList-implicit" }, r11, { type: String(r11.type) })) : null : null;
}
var rj = ["component"];
function tj(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = aj(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function aj(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function ay(e14) {
  var { component: r11 } = e14, t10 = tj(e14, rj), a11;
  return nj(r11) ? a11 = ij(r11, t10) : typeof r11 == "function" ? a11 = oj(r11, t10) : da(false, "Customized's props `component` must be React.element or Function, but got %s.", typeof r11), ty.createElement(T14, { className: "recharts-customized-wrapper" }, a11);
}
ay.displayName = "Customized";
var lj = ["points", "className", "baseLinePoints", "connectNulls"];
var ny;
function qn() {
  return qn = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, qn.apply(null, arguments);
}
function cj(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = sj(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function sj(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function uj(e14, r11) {
  return r11 || (r11 = e14.slice(0)), Object.freeze(Object.defineProperties(e14, { raw: { value: Object.freeze(r11) } }));
}
var iy = (e14) => e14 != null && e14.x === +e14.x && e14.y === +e14.y;
var fj = function() {
  var r11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t10 = [[]];
  r11.forEach((o15) => {
    var l12 = t10[t10.length - 1];
    iy(o15) ? l12 && l12.push(o15) : l12 && l12.length > 0 && t10.push([]);
  });
  var a11 = r11[0], n10 = t10[t10.length - 1];
  iy(a11) && n10 && n10.push(a11);
  var i9 = t10[t10.length - 1];
  return i9 && i9.length <= 0 && (t10 = t10.slice(0, -1)), t10;
};
var ro = (e14, r11) => {
  var t10 = fj(e14);
  r11 && (t10 = [t10.reduce((n10, i9) => [...n10, ...i9], [])]);
  var a11 = t10.map((n10) => n10.reduce((i9, o15, l12) => xe5(ny || (ny = uj(["", "", "", ",", ""])), i9, l12 === 0 ? "M" : "L", o15.x, o15.y), "")).join("");
  return t10.length === 1 ? "".concat(a11, "Z") : a11;
};
var pj = (e14, r11, t10) => {
  var a11 = ro(e14, t10);
  return "".concat(a11.slice(-1) === "Z" ? a11.slice(0, -1) : a11, "L").concat(ro(Array.from(r11).reverse(), t10).slice(1));
};
var Ua = (e14) => {
  var { points: r11, className: t10, baseLinePoints: a11, connectNulls: n10 } = e14, i9 = cj(e14, lj);
  if (!r11 || !r11.length) return null;
  var o15 = dj("recharts-polygon", t10);
  if (a11 && a11.length) {
    var l12 = i9.stroke && i9.stroke !== "none", c16 = pj(r11, a11, n10);
    return Zn2.createElement("g", { className: o15 }, Zn2.createElement("path", qn({}, re7(i9), { fill: c16.slice(-1) === "Z" ? i9.fill : "none", stroke: "none", d: c16 })), l12 ? Zn2.createElement("path", qn({}, re7(i9), { fill: "none", d: ro(r11, n10) })) : null, l12 ? Zn2.createElement("path", qn({}, re7(i9), { fill: "none", d: ro(a11, n10) })) : null);
  }
  var s8 = ro(r11, n10);
  return Zn2.createElement("path", qn({}, re7(i9), { fill: s8.slice(-1) === "Z" ? i9.fill : "none", className: o15, d: s8 }));
};
function Vu() {
  return Vu = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Vu.apply(null, arguments);
}
var ra = (e14) => {
  var { cx: r11, cy: t10, r: a11, className: n10 } = e14, i9 = mj("recharts-dot", n10);
  return k11(r11) && k11(t10) && k11(a11) ? oy.createElement("circle", Vu({}, X11(e14), mn3(e14), { className: i9, cx: r11, cy: t10, r: a11 })) : null;
};
var Aa = (e14) => e14.graphicalItems.polarItems;
var vj = fe7([ge7, Fa], Ti2);
var $n2 = fe7([Aa, Re6, vj], Li);
var hj = fe7([$n2], Ni);
var rc = fe7([hj, Sr2], Mi);
var Xu = fe7([rc, Re6, $n2], au);
var z32 = fe7([rc, Re6, $n2], (e14, r11, t10) => t10.length > 0 ? e14.flatMap((a11) => t10.flatMap((n10) => {
  var i9, o15 = _13(a11, (i9 = r11.dataKey) !== null && i9 !== void 0 ? i9 : n10.dataKey);
  return { value: o15, errorDomain: [] };
})).filter(Boolean) : r11?.dataKey != null ? e14.map((a11) => ({ value: _13(a11, r11.dataKey), errorDomain: [] })) : e14.map((a11) => ({ value: a11, errorDomain: [] })));
var ly = () => {
};
var yj = fe7([rc, Re6, $n2, zn, ge7, Sm], Ki);
var gj = fe7([Re6, bl, Pl, ly, yj, ly, z15, ge7], zi);
var cy = fe7([Re6, z15, rc, Xu, It4, ge7, gj], Wi);
var Gu = fe7([cy, Xt2, Zr], Fi);
var xj = fe7([Re6, cy, Gu, ge7], Vi);
var sy = fe7([Zr, xj], vl);
var Hu = (e14, r11, t10) => {
  switch (r11) {
    case "angleAxis":
      return Gr(e14, t10);
    case "radiusAxis":
      return jt(e14, t10);
    default:
      throw new Error("Unexpected axis type: ".concat(r11));
  }
};
var Yu = (e14, r11, t10) => {
  switch (r11) {
    case "angleAxis":
      return zm(e14, t10);
    case "radiusAxis":
      return Wm(e14, t10);
    default:
      throw new Error("Unexpected axis type: ".concat(r11));
  }
};
var bj = fe7([Hu, Zr, sy, Yu], Xa);
var et6 = fe7([bj], Va);
var uy = fe7([z15, Xu, Xt2, ge7], Xi);
var mt4 = fe7([z15, Hu, Zr, et6, Gu, Yu, Vn2, uy, ge7], Au);
var dy = fe7([mt4], (e14) => {
  if (e14) {
    var r11 = /* @__PURE__ */ new Map();
    return e14.forEach((t10) => {
      var a11 = (t10.coordinate + 360) % 360;
      r11.has(a11) || r11.set(a11, t10);
    }), Array.from(r11.values());
  }
});
var fy = fe7([z15, Hu, et6, Yu, Vn2, uy, ge7], Ou);
var Pj = (e14, r11) => mt4(e14, "angleAxis", r11, false);
var my = fe7([Pj], (e14) => {
  if (e14) return e14.map((r11) => r11.coordinate);
});
var Aj = (e14, r11) => mt4(e14, "radiusAxis", r11, false);
var vy = fe7([Aj], (e14) => {
  if (e14) return e14.map((r11) => r11.coordinate);
});
var Oj = ["gridType", "radialLines", "angleAxisId", "radiusAxisId", "cx", "cy", "innerRadius", "outerRadius", "polarAngles", "polarRadius", "zIndex"];
function wj(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = Ej(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function Ej(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function vt4() {
  return vt4 = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, vt4.apply(null, arguments);
}
function hy(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function tc(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? hy(Object(t10), true).forEach(function(a11) {
      Sj(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : hy(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function Sj(e14, r11, t10) {
  return (r11 = Ij(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function Ij(e14) {
  var r11 = Rj(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function Rj(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Cj = (e14, r11, t10, a11) => {
  var n10 = "";
  return a11.forEach((i9, o15) => {
    var l12 = Q12(r11, t10, e14, i9);
    o15 ? n10 += "L ".concat(l12.x, ",").concat(l12.y) : n10 += "M ".concat(l12.x, ",").concat(l12.y);
  }), n10 += "Z", n10;
};
var jj = (e14) => {
  var { cx: r11, cy: t10, innerRadius: a11, outerRadius: n10, polarAngles: i9, radialLines: o15 } = e14;
  if (!i9 || !i9.length || !o15) return null;
  var l12 = tc({}, X11(e14));
  return jr.createElement("g", { className: "recharts-polar-grid-angle" }, i9.map((c16) => {
    var s8 = Q12(r11, t10, a11, c16), u9 = Q12(r11, t10, n10, c16);
    return jr.createElement("line", vt4({ key: "line-".concat(c16) }, l12, { x1: s8.x, y1: s8.y, x2: u9.x, y2: u9.y }));
  }));
};
var yy = (e14) => {
  var { cx: r11, cy: t10, radius: a11 } = e14, n10 = tc({}, X11(e14));
  return jr.createElement("circle", vt4({}, n10, { className: xy("recharts-polar-grid-concentric-circle", e14.className), cx: r11, cy: t10, r: a11 }));
};
var gy = (e14) => {
  var { radius: r11 } = e14, t10 = tc({}, X11(e14));
  return jr.createElement("path", vt4({}, t10, { className: xy("recharts-polar-grid-concentric-polygon", e14.className), d: Cj(r11, e14.cx, e14.cy, e14.polarAngles) }));
};
var kj = (e14) => {
  var { polarRadius: r11, gridType: t10 } = e14;
  if (!r11 || !r11.length) return null;
  var a11 = Math.max(...r11), n10 = e14.fill && e14.fill !== "none";
  return jr.createElement("g", { className: "recharts-polar-grid-concentric" }, n10 && t10 === "circle" && jr.createElement(yy, vt4({}, e14, { radius: a11 })), n10 && t10 !== "circle" && jr.createElement(gy, vt4({}, e14, { radius: a11 })), r11.map((i9, o15) => {
    var l12 = o15;
    return t10 === "circle" ? jr.createElement(yy, vt4({ key: l12 }, e14, { fill: "none", radius: i9 })) : jr.createElement(gy, vt4({ key: l12 }, e14, { fill: "none", radius: i9 }));
  }));
};
var Dj = { angleAxisId: 0, radiusAxisId: 0, gridType: "polygon", radialLines: true, zIndex: V14.grid, stroke: "#ccc", strokeWidth: 1, fill: "none" };
var by = (e14) => {
  var r11, t10, a11, n10, i9, o15, l12, c16, s8 = L11(e14, Dj), { gridType: u9, radialLines: d12, angleAxisId: f10, radiusAxisId: p12, cx: m18, cy: h13, innerRadius: y16, outerRadius: v9, polarAngles: g13, polarRadius: x18, zIndex: b14 } = s8, P16 = wj(s8, Oj), A13 = E17(Ir), O12 = E17((N19) => my(N19, f10)), w9 = E17((N19) => vy(N19, p12)), S11 = Array.isArray(g13) ? g13 : O12, I24 = Array.isArray(x18) ? x18 : w9;
  if (S11 == null || I24 == null) return null;
  var R13 = tc({ cx: (r11 = (t10 = A13?.cx) !== null && t10 !== void 0 ? t10 : m18) !== null && r11 !== void 0 ? r11 : 0, cy: (a11 = (n10 = A13?.cy) !== null && n10 !== void 0 ? n10 : h13) !== null && a11 !== void 0 ? a11 : 0, innerRadius: (i9 = (o15 = A13?.innerRadius) !== null && o15 !== void 0 ? o15 : y16) !== null && i9 !== void 0 ? i9 : 0, outerRadius: (l12 = (c16 = A13?.outerRadius) !== null && c16 !== void 0 ? c16 : v9) !== null && l12 !== void 0 ? l12 : 0, polarAngles: S11, polarRadius: I24, zIndex: b14 }, P16), { outerRadius: C11 } = R13;
  return C11 <= 0 ? null : jr.createElement(U10, { zIndex: R13.zIndex }, jr.createElement("g", { className: "recharts-polar-grid" }, jr.createElement(kj, vt4({ gridType: u9, radialLines: d12 }, R13, { polarAngles: S11, polarRadius: I24 })), jr.createElement(jj, vt4({ gridType: u9, radialLines: d12 }, R13, { polarAngles: S11, polarRadius: I24 }))));
};
by.displayName = "PolarGrid";
var Lj = { radiusAxis: {}, angleAxis: {} };
var Ay = mr({ name: "polarAxis", initialState: Lj, reducers: { addRadiusAxis(e14, r11) {
  e14.radiusAxis[r11.payload.id] = Ce4(r11.payload);
}, removeRadiusAxis(e14, r11) {
  delete e14.radiusAxis[r11.payload.id];
}, addAngleAxis(e14, r11) {
  e14.angleAxis[r11.payload.id] = Ce4(r11.payload);
}, removeAngleAxis(e14, r11) {
  delete e14.angleAxis[r11.payload.id];
} } });
var { addRadiusAxis: Oy, removeRadiusAxis: wy, addAngleAxis: Ey, removeAngleAxis: Sy } = Ay.actions;
var Iy = Ay.reducer;
function Oa(e14) {
  return e14 && typeof e14 == "object" && "className" in e14 && typeof e14.className == "string" ? e14.className : "";
}
var Nj = ["type"];
var Mj = ["cx", "cy", "angle", "axisLine"];
var _j = ["angle", "tickFormatter", "stroke", "tick"];
function to() {
  return to = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, to.apply(null, arguments);
}
function Ry(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function ht5(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Ry(Object(t10), true).forEach(function(a11) {
      Bj(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Ry(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function Bj(e14, r11, t10) {
  return (r11 = Kj(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function Kj(e14) {
  var r11 = zj(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function zj(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Uu(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = Wj(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function Wj(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var Hj = "radiusAxis";
function Yj(e14) {
  var r11 = M12(), t10 = Yo(), a11 = Vj(() => {
    var { type: n10 } = e14, i9 = Uu(e14, Nj), o15 = ft5(t10, "radiusAxis", n10);
    if (o15 != null) return ht5(ht5({}, i9), {}, { type: o15 });
  }, [e14, t10]);
  return Fj(() => a11 == null ? ye6 : (r11(Oy(a11)), () => {
    r11(wy(a11));
  }), [r11, a11]), null;
}
var Uj = (e14, r11, t10, a11) => {
  var { coordinate: n10 } = e14;
  return Q12(t10, a11, n10, r11);
};
var Zj = (e14) => {
  var r11;
  switch (e14) {
    case "left":
      r11 = "end";
      break;
    case "right":
      r11 = "start";
      break;
    default:
      r11 = "middle";
      break;
  }
  return r11;
};
var qj = (e14, r11, t10, a11) => {
  var n10 = K4(a11, (o15) => o15.coordinate || 0), i9 = K5(a11, (o15) => o15.coordinate || 0);
  return { cx: r11, cy: t10, startAngle: e14, endAngle: e14, innerRadius: i9?.coordinate || 0, outerRadius: n10?.coordinate || 0, clockWise: false };
};
var $j = (e14, r11) => {
  var { cx: t10, cy: a11, angle: n10, axisLine: i9 } = e14, o15 = Uu(e14, Mj), l12 = r11.reduce((d12, f10) => [Math.min(d12[0], f10.coordinate), Math.max(d12[1], f10.coordinate)], [1 / 0, -1 / 0]), c16 = Q12(t10, a11, l12[0], n10), s8 = Q12(t10, a11, l12[1], n10), u9 = ht5(ht5(ht5({}, X11(o15)), {}, { fill: "none" }, X11(i9)), {}, { x1: c16.x, y1: c16.y, x2: s8.x, y2: s8.y });
  return er2.createElement("line", to({ className: "recharts-polar-radius-axis-line" }, u9));
};
var Jj = (e14, r11, t10) => {
  var a11;
  return er2.isValidElement(e14) ? a11 = er2.cloneElement(e14, r11) : typeof e14 == "function" ? a11 = e14(r11) : a11 = er2.createElement(nr, to({}, r11, { className: "recharts-polar-radius-axis-tick-value" }), t10), a11;
};
var Qj = (e14, r11) => {
  var { angle: t10, tickFormatter: a11, stroke: n10, tick: i9 } = e14, o15 = Uu(e14, _j), l12 = Zj(e14.orientation), c16 = X11(o15), s8 = Ee6(i9), u9 = r11.map((d12, f10) => {
    var p12 = Uj(d12, e14.angle, e14.cx, e14.cy), m18 = ht5(ht5(ht5(ht5({ textAnchor: l12, transform: "rotate(".concat(90 - t10, ", ").concat(p12.x, ", ").concat(p12.y, ")") }, c16), {}, { stroke: "none", fill: n10 }, s8), {}, { index: f10 }, p12), {}, { payload: d12 });
    return er2.createElement(T14, to({ className: Cy("recharts-polar-radius-axis-tick", Oa(i9)), key: "tick-".concat(d12.coordinate) }, Ve3(e14, d12, f10)), Jj(i9, m18, a11 ? a11(d12.value, f10) : d12.value));
  });
  return er2.createElement(T14, { className: "recharts-polar-radius-axis-ticks" }, u9);
};
var ek = (e14) => {
  var { radiusAxisId: r11 } = e14, t10 = E17(Ir), a11 = E17((c16) => et6(c16, "radiusAxis", r11)), n10 = E17((c16) => mt4(c16, "radiusAxis", r11, false));
  if (t10 == null || !n10 || !n10.length || a11 == null) return null;
  var i9 = ht5(ht5({}, e14), {}, { scale: a11 }, t10), { tick: o15, axisLine: l12 } = i9;
  return er2.createElement(U10, { zIndex: i9.zIndex }, er2.createElement(T14, { className: Cy("recharts-polar-radius-axis", Hj, i9.className) }, l12 && $j(i9, n10), o15 && Qj(i9, n10), er2.createElement(Yh, qj(i9.angle, i9.cx, i9.cy, n10), er2.createElement(qh, { label: i9.label }), i9.children)));
};
function jy(e14) {
  var r11, t10 = L11(e14, Kr);
  return er2.createElement(er2.Fragment, null, er2.createElement(Yj, { domain: t10.domain, id: t10.radiusAxisId, scale: t10.scale, type: t10.type, dataKey: t10.dataKey, unit: void 0, name: t10.name, allowDuplicatedCategory: t10.allowDuplicatedCategory, allowDataOverflow: t10.allowDataOverflow, reversed: t10.reversed, includeHidden: t10.includeHidden, allowDecimals: t10.allowDecimals, niceTicks: (r11 = t10.niceTicks) !== null && r11 !== void 0 ? r11 : "auto", ticks: t10.ticks, tickCount: t10.tickCount, tick: t10.tick }), er2.createElement(ek, t10));
}
jy.displayName = "PolarRadiusAxis";
var rk = ["children", "type"];
var tk = ["ref"];
function Za() {
  return Za = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Za.apply(null, arguments);
}
function ky(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function rt4(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? ky(Object(t10), true).forEach(function(a11) {
      ak(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : ky(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function ak(e14, r11, t10) {
  return (r11 = nk(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function nk(e14) {
  var r11 = ik(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function ik(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Ty(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = ok(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function ok(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var Dy = 1e-5;
var sk = Math.cos(Ri(45));
var uk = "angleAxis";
function dk(e14) {
  var r11 = M12(), t10 = Yo(), a11 = ck(() => {
    var { children: o15, type: l12 } = e14, c16 = Ty(e14, rk), s8 = ft5(t10, "angleAxis", l12);
    if (s8 != null) return rt4(rt4({}, c16), {}, { type: s8 });
  }, [e14, t10]), n10 = E17((o15) => Gr(o15, a11?.id)), i9 = a11 === n10;
  return lk(() => a11 == null ? ye6 : (r11(Ey(a11)), () => {
    r11(Sy(a11));
  }), [r11, a11]), i9 ? e14.children : null;
}
var fk = (e14, r11) => {
  var { cx: t10, cy: a11, radius: n10, orientation: i9, tickSize: o15 } = r11, l12 = o15 || 8, c16 = Q12(t10, a11, n10, e14.coordinate), s8 = Q12(t10, a11, n10 + (i9 === "inner" ? -1 : 1) * l12, e14.coordinate);
  return { x1: c16.x, y1: c16.y, x2: s8.x, y2: s8.y };
};
var pk = (e14, r11) => {
  var t10 = Math.cos(Ri(-e14.coordinate));
  return t10 > Dy ? r11 === "outer" ? "start" : "end" : t10 < -Dy ? r11 === "outer" ? "end" : "start" : "middle";
};
var mk = (e14) => {
  var r11 = Math.cos(Ri(-e14.coordinate)), t10 = Math.sin(Ri(-e14.coordinate));
  return Math.abs(r11) <= sk ? t10 > 0 ? "start" : "end" : "middle";
};
var vk = (e14) => {
  var { cx: r11, cy: t10, radius: a11, axisLineType: n10, axisLine: i9, ticks: o15 } = e14;
  if (!i9) return null;
  var l12 = rt4(rt4({}, X11(e14)), {}, { fill: "none" }, X11(i9));
  if (n10 === "circle") return rr2.createElement(ra, Za({ className: "recharts-polar-angle-axis-line" }, l12, { cx: r11, cy: t10, r: a11 }));
  var c16 = o15.map((s8) => Q12(r11, t10, a11, s8.coordinate));
  return rr2.createElement(Ua, Za({ className: "recharts-polar-angle-axis-line" }, l12, { points: c16 }));
};
var hk = (e14) => {
  var { tick: r11, tickProps: t10, value: a11 } = e14;
  return r11 ? rr2.isValidElement(r11) ? rr2.cloneElement(r11, t10) : typeof r11 == "function" ? r11(t10) : rr2.createElement(nr, Za({}, t10, { className: "recharts-polar-angle-axis-tick-value" }), a11) : null;
};
var yk = (e14) => {
  var { tick: r11, tickLine: t10, tickFormatter: a11, stroke: n10, ticks: i9 } = e14, o15 = X11(e14), { ref: l12 } = o15, c16 = Ty(o15, tk), s8 = Ee6(r11), u9 = rt4(rt4({}, c16), {}, { fill: "none" }, X11(t10)), d12 = i9.map((f10, p12) => {
    var m18 = fk(f10, e14), h13 = pk(f10, e14.orientation), y16 = mk(f10), v9 = rt4(rt4(rt4({}, c16), {}, { textAnchor: h13, verticalAnchor: y16, stroke: "none", fill: n10 }, s8), {}, { index: p12, payload: f10, x: m18.x2, y: m18.y2 });
    return rr2.createElement(T14, Za({ className: Ly("recharts-polar-angle-axis-tick", Oa(r11)), key: "tick-".concat(f10.coordinate) }, Ve3(e14, f10, p12)), t10 && rr2.createElement("line", Za({ className: "recharts-polar-angle-axis-tick-line" }, u9, m18)), rr2.createElement(hk, { tick: r11, tickProps: v9, value: a11 ? a11(f10.value, p12) : f10.value }));
  });
  return rr2.createElement(T14, { className: "recharts-polar-angle-axis-ticks" }, d12);
};
var gk = (e14) => {
  var { angleAxisId: r11 } = e14, t10 = E17(Ir), a11 = E17((l12) => et6(l12, "angleAxis", r11)), n10 = F10(), i9 = E17((l12) => dy(l12, "angleAxis", r11, n10));
  if (t10 == null || !i9 || !i9.length || a11 == null) return null;
  var o15 = rt4(rt4(rt4({}, e14), {}, { scale: a11 }, t10), {}, { radius: t10.outerRadius, ticks: i9 });
  return rr2.createElement(U10, { zIndex: o15.zIndex }, rr2.createElement(T14, { className: Ly("recharts-polar-angle-axis", uk, o15.className) }, rr2.createElement(vk, o15), rr2.createElement(yk, o15)));
};
function Ny(e14) {
  var r11, t10 = L11(e14, Rt3);
  return rr2.createElement(dk, { id: t10.angleAxisId, scale: t10.scale, type: t10.type, dataKey: t10.dataKey, unit: void 0, name: t10.name, allowDuplicatedCategory: false, allowDataOverflow: false, reversed: t10.reversed, includeHidden: false, allowDecimals: t10.allowDecimals, tickCount: t10.tickCount, niceTicks: (r11 = t10.niceTicks) !== null && r11 !== void 0 ? r11 : "auto", ticks: t10.ticks, tick: t10.tick, domain: t10.domain }, rr2.createElement(gk, t10));
}
Ny.displayName = "PolarAngleAxis";
function My(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function _y(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? My(Object(t10), true).forEach(function(a11) {
      xk(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : My(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function xk(e14, r11, t10) {
  return (r11 = bk(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function bk(e14) {
  var r11 = Pk(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function Pk(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Ak = (e14, r11) => r11;
var Zu = fe7([Aa, Ak], (e14, r11) => e14.filter((t10) => t10.type === "pie").find((t10) => t10.id === r11));
var Ok = [];
var qu = (e14, r11, t10) => t10?.length === 0 ? Ok : t10;
var By = fe7([Sr2, Zu, qu], (e14, r11, t10) => {
  var { chartData: a11 } = e14;
  if (r11 != null) {
    var n10;
    if (r11?.data != null && r11.data.length > 0 ? n10 = r11.data : n10 = a11, (!n10 || !n10.length) && t10 != null && (n10 = t10.map((i9) => _y(_y({}, r11.presentationProps), i9.props))), n10 != null) return n10;
  }
});
var Ky = fe7([By, Zu, qu], (e14, r11, t10) => {
  if (!(e14 == null || r11 == null)) return e14.map((a11, n10) => {
    var i9, o15 = _13(a11, r11.nameKey, r11.name), l12;
    return t10 != null && (i9 = t10[n10]) !== null && i9 !== void 0 && (i9 = i9.props) !== null && i9 !== void 0 && i9.fill ? l12 = t10[n10].props.fill : typeof a11 == "object" && a11 != null && "fill" in a11 ? l12 = a11.fill : l12 = r11.fill, { value: Be4(o15, r11.dataKey), color: l12, payload: a11, type: r11.legendType };
  });
});
var zy = fe7([By, Zu, qu, me9], (e14, r11, t10, a11) => {
  if (!(r11 == null || e14 == null)) return Wy({ offset: a11, pieSettings: r11, displayedData: e14, cells: t10 });
});
var Vy = (e14) => typeof e14 == "string" ? e14 : e14 ? e14.displayName || e14.name || "Component" : "";
var Xy = null;
var $u = null;
var Gy = (e14) => {
  if (e14 === Xy && Array.isArray($u)) return $u;
  var r11 = [];
  return wk.forEach(e14, (t10) => {
    Z10(t10) || (j8(t10) ? r11 = r11.concat(Gy(t10.props.children)) : r11.push(t10));
  }), $u = r11, Xy = e14, r11;
};
function yt4(e14, r11) {
  var t10 = [], a11 = [];
  return Array.isArray(r11) ? a11 = r11.map((n10) => Vy(n10)) : a11 = [Vy(r11)], Gy(e14).forEach((n10) => {
    var i9 = y(n10, "type.displayName") || y(n10, "type.name");
    i9 && a11.indexOf(i9) !== -1 && t10.push(n10);
  }), t10;
}
var Qn2 = (e14) => e14 && typeof e14 == "object" && "clipDot" in e14 ? !!e14.clipDot : true;
var Hy;
var Yy;
var Uy;
var Zy;
var qy;
function $y(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Jy(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? $y(Object(t10), true).forEach(function(a11) {
      Sk(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : $y(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function Sk(e14, r11, t10) {
  return (r11 = Ik(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function Ik(e14) {
  var r11 = Rk(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function Rk(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function nc() {
  return nc = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, nc.apply(null, arguments);
}
function ao(e14, r11) {
  return r11 || (r11 = e14.slice(0)), Object.freeze(Object.defineProperties(e14, { raw: { value: Object.freeze(r11) } }));
}
var Qy = (e14, r11, t10, a11, n10) => {
  var i9 = t10 - a11, o15;
  return o15 = xe5(Hy || (Hy = ao(["M ", ",", ""])), e14, r11), o15 += xe5(Yy || (Yy = ao(["L ", ",", ""])), e14 + t10, r11), o15 += xe5(Uy || (Uy = ao(["L ", ",", ""])), e14 + t10 - i9 / 2, r11 + n10), o15 += xe5(Zy || (Zy = ao(["L ", ",", ""])), e14 + t10 - i9 / 2 - a11, r11 + n10), o15 += xe5(qy || (qy = ao(["L ", ",", " Z"])), e14, r11), o15;
};
var Dk = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" };
var Ju = (e14) => {
  var r11 = L11(e14, Dk), { x: t10, y: a11, upperWidth: n10, lowerWidth: i9, height: o15, className: l12 } = r11, { animationEasing: c16, animationDuration: s8, animationBegin: u9, isUpdateAnimationActive: d12 } = r11, f10 = ei2(null), [p12, m18] = jk(-1), h13 = ei2(n10), y16 = ei2(i9), v9 = ei2(o15), g13 = ei2(t10), x18 = ei2(a11), b14 = Ue2(e14, "trapezoid-");
  if (Ck(() => {
    if (f10.current && f10.current.getTotalLength) try {
      var j15 = f10.current.getTotalLength();
      j15 && m18(j15);
    } catch {
    }
  }, []), t10 !== +t10 || a11 !== +a11 || n10 !== +n10 || i9 !== +i9 || o15 !== +o15 || n10 === 0 && i9 === 0 || o15 === 0) return null;
  var P16 = kk("recharts-trapezoid", l12);
  if (!d12) return no.createElement("g", null, no.createElement("path", nc({}, re7(r11), { className: P16, d: Qy(t10, a11, n10, i9, o15) })));
  var A13 = h13.current, O12 = y16.current, w9 = v9.current, S11 = g13.current, I24 = x18.current, R13 = "0px ".concat(p12 === -1 ? 1 : p12, "px"), C11 = "".concat(p12, "px ").concat(p12, "px"), N19 = Rn2(["strokeDasharray"], s8, c16);
  return no.createElement(Ye4, { animationId: b14, key: b14, canBegin: p12 > 0, duration: s8, easing: c16, isActive: d12, begin: u9 }, (j15) => {
    var D18 = B18(A13, n10, j15), G20 = B18(O12, i9, j15), H14 = B18(w9, o15, j15), ie6 = B18(S11, t10, j15), Y10 = B18(I24, a11, j15);
    f10.current && (h13.current = D18, y16.current = G20, v9.current = H14, g13.current = ie6, x18.current = Y10);
    var oe8 = j15 > 0 ? { transition: N19, strokeDasharray: C11 } : { strokeDasharray: R13 };
    return no.createElement("path", nc({}, re7(r11), { className: P16, d: Qy(ie6, Y10, D18, G20, H14), ref: f10, style: Jy(Jy({}, oe8), r11.style) }));
  });
};
var Tk = ["option", "shapeType", "activeClassName", "inActiveClassName"];
function Lk(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = Nk(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function Nk(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function eg(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function ic(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? eg(Object(t10), true).forEach(function(a11) {
      Mk(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : eg(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function Mk(e14, r11, t10) {
  return (r11 = _k(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function _k(e14) {
  var r11 = Bk(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function Bk(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Wk(e14, r11) {
  return ic(ic({}, r11), e14);
}
function Fk(e14, r11) {
  return e14 === "symbols";
}
function rg(e14) {
  var { shapeType: r11, elementProps: t10 } = e14;
  switch (r11) {
    case "rectangle":
      return Lt3.createElement(_r, t10);
    case "trapezoid":
      return Lt3.createElement(Ju, t10);
    case "sector":
      return Lt3.createElement(za, t10);
    case "symbols":
      if (Fk(r11, t10)) return Lt3.createElement(sa, t10);
      break;
    case "curve":
      return Lt3.createElement(Mr, t10);
    default:
      return null;
  }
}
function Vk(e14) {
  return tg(e14) ? e14.props : e14;
}
function Wr(e14) {
  var { option: r11, shapeType: t10, activeClassName: a11 = "recharts-active-shape", inActiveClassName: n10 = "recharts-shape" } = e14, i9 = Lk(e14, Tk), o15;
  if (tg(r11)) o15 = Kk(r11, ic(ic({}, i9), Vk(r11)));
  else if (typeof r11 == "function") o15 = r11(i9, i9.index);
  else if (l2(r11) && typeof r11 != "boolean") {
    var l12 = Wk(r11, i9);
    o15 = Lt3.createElement(rg, { shapeType: t10, elementProps: l12 });
  } else {
    var c16 = i9;
    o15 = Lt3.createElement(rg, { shapeType: t10, elementProps: c16 });
  }
  return i9.isActive ? Lt3.createElement(T14, { className: a11 }, o15) : Lt3.createElement(T14, { className: n10 }, o15);
}
var gt5 = (e14, r11, t10) => {
  var a11 = M12();
  return (n10, i9) => (o15) => {
    e14?.(n10, i9, o15), a11(qr2({ activeIndex: String(i9), activeDataKey: r11, activeCoordinate: n10.tooltipPosition, activeGraphicalItemId: t10 }));
  };
};
var xt5 = (e14) => {
  var r11 = M12();
  return (t10, a11) => (n10) => {
    e14?.(t10, a11, n10), r11(Ha());
  };
};
var bt4 = (e14, r11, t10) => {
  var a11 = M12();
  return (n10, i9) => (o15) => {
    e14?.(n10, i9, o15), a11(Yt3({ activeIndex: String(i9), activeDataKey: r11, activeCoordinate: n10.tooltipPosition, activeGraphicalItemId: t10 }));
  };
};
function De4(e14) {
  var { tooltipEntrySettings: r11 } = e14, t10 = M12(), a11 = F10(), n10 = Xk(null);
  return ag(() => {
    a11 || (n10.current === null ? t10(sv(r11)) : n10.current !== r11 && t10(uv({ prev: n10.current, next: r11 })), n10.current = r11);
  }, [r11, t10, a11]), ag(() => () => {
    n10.current && (t10(dv(n10.current)), n10.current = null);
  }, [t10]), null;
}
function wa(e14) {
  var { legendPayload: r11 } = e14, t10 = M12(), a11 = F10(), n10 = ng(null);
  return oc(() => {
    a11 || (n10.current === null ? t10(ks(r11)) : n10.current !== r11 && t10(Ds({ prev: n10.current, next: r11 })), n10.current = r11);
  }, [t10, a11, r11]), oc(() => () => {
    n10.current && (t10(Ts(n10.current)), n10.current = null);
  }, [t10]), null;
}
function ri2(e14) {
  var { legendPayload: r11 } = e14, t10 = M12(), a11 = E17(z15), n10 = ng(null);
  return oc(() => {
    a11 !== "centric" && a11 !== "radial" || (n10.current === null ? t10(ks(r11)) : n10.current !== r11 && t10(Ds({ prev: n10.current, next: r11 })), n10.current = r11);
  }, [t10, a11, r11]), oc(() => () => {
    n10.current && (t10(Ts(n10.current)), n10.current = null);
  }, [t10]), null;
}
var Qu;
var Gk = () => {
  var [e14] = lc.useState(() => lt6("uid-"));
  return e14;
};
var ig = (Qu = lc.useId) !== null && Qu !== void 0 ? Qu : Gk;
function cc(e14, r11) {
  var t10 = ig();
  return r11 || (e14 ? "".concat(e14, "-").concat(t10) : t10);
}
var lg = Hk(void 0);
var Te3 = (e14) => {
  var { id: r11, type: t10, children: a11 } = e14, n10 = cc("recharts-".concat(t10), r11);
  return og.createElement(lg.Provider, { value: n10 }, a11(n10));
};
function cg() {
  return Yk(lg);
}
var Zk = { cartesianItems: [], polarItems: [] };
var sg = mr({ name: "graphicalItems", initialState: Zk, reducers: { addCartesianGraphicalItem: { reducer(e14, r11) {
  e14.cartesianItems.push(Ce4(r11.payload));
}, prepare: pr() }, replaceCartesianGraphicalItem: { reducer(e14, r11) {
  var { prev: t10, next: a11 } = r11.payload, n10 = je(e14).cartesianItems.indexOf(Ce4(t10));
  n10 > -1 && (e14.cartesianItems[n10] = Ce4(a11));
}, prepare: pr() }, removeCartesianGraphicalItem: { reducer(e14, r11) {
  var t10 = je(e14).cartesianItems.indexOf(Ce4(r11.payload));
  t10 > -1 && e14.cartesianItems.splice(t10, 1);
}, prepare: pr() }, addPolarGraphicalItem: { reducer(e14, r11) {
  e14.polarItems.push(Ce4(r11.payload));
}, prepare: pr() }, removePolarGraphicalItem: { reducer(e14, r11) {
  var t10 = je(e14).polarItems.indexOf(Ce4(r11.payload));
  t10 > -1 && e14.polarItems.splice(t10, 1);
}, prepare: pr() }, replacePolarGraphicalItem: { reducer(e14, r11) {
  var { prev: t10, next: a11 } = r11.payload, n10 = je(e14).polarItems.indexOf(Ce4(t10));
  n10 > -1 && (e14.polarItems[n10] = Ce4(a11));
}, prepare: pr() } } });
var { addCartesianGraphicalItem: ug, replaceCartesianGraphicalItem: dg, removeCartesianGraphicalItem: fg, addPolarGraphicalItem: pg, removePolarGraphicalItem: mg, replacePolarGraphicalItem: vg } = sg.actions;
var hg = sg.reducer;
var qk = (e14) => {
  var r11 = M12(), t10 = gg(null);
  return uc(() => {
    t10.current === null ? r11(ug(e14)) : t10.current !== e14 && r11(dg({ prev: t10.current, next: e14 })), t10.current = e14;
  }, [r11, e14]), uc(() => () => {
    t10.current && (r11(fg(t10.current)), t10.current = null);
  }, [r11]), null;
};
var Sa = yg(qk);
var $k = (e14) => {
  var r11 = M12(), t10 = gg(null);
  return uc(() => {
    t10.current === null ? r11(pg(e14)) : t10.current !== e14 && r11(vg({ prev: t10.current, next: e14 })), t10.current = e14;
  }, [r11, e14]), uc(() => () => {
    t10.current && (r11(mg(t10.current)), t10.current = null);
  }, [r11]), null;
};
var ai2 = yg($k);
var Jk = ["key"];
var Qk = ["onMouseEnter", "onClick", "onMouseLeave"];
var eD = ["id"];
var rD = ["id"];
function Ia() {
  return Ia = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Ia.apply(null, arguments);
}
function dc(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = tD(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function tD(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function xg(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Se2(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? xg(Object(t10), true).forEach(function(a11) {
      aD(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : xg(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function aD(e14, r11, t10) {
  return (r11 = nD(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function nD(e14) {
  var r11 = iD(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function iD(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function sD(e14) {
  var r11 = ed(() => yt4(e14.children, zr), [e14.children]), t10 = E17((a11) => Ky(a11, e14.id, r11));
  return t10 == null ? null : ee5.createElement(ri2, { legendPayload: t10 });
}
function uD(e14) {
  if (!(e14 == null || typeof e14 == "boolean" || typeof e14 == "function")) {
    if (ee5.isValidElement(e14)) {
      var r11, t10 = (r11 = e14.props) === null || r11 === void 0 ? void 0 : r11.fill;
      return typeof t10 == "string" ? t10 : void 0;
    }
    var { fill: a11 } = e14;
    return typeof a11 == "string" ? a11 : void 0;
  }
}
var dD = ee5.memo((e14) => {
  var { dataKey: r11, nameKey: t10, sectors: a11, stroke: n10, strokeWidth: i9, fill: o15, name: l12, hide: c16, tooltipType: s8, id: u9, activeShape: d12 } = e14, f10 = uD(d12), p12 = a11.map((h13) => {
    var y16 = h13.tooltipPayload;
    return f10 == null || y16 == null ? y16 : y16.map((v9) => Se2(Se2({}, v9), {}, { color: f10, fill: f10 }));
  }), m18 = { dataDefinedOnItem: p12, getPosition: (h13) => {
    var y16;
    return (y16 = a11[Number(h13)]) === null || y16 === void 0 ? void 0 : y16.tooltipPosition;
  }, settings: { stroke: n10, strokeWidth: i9, fill: o15, dataKey: r11, nameKey: t10, name: Be4(l12, r11), hide: c16, type: s8, color: o15, unit: "", graphicalItemId: u9 } };
  return ee5.createElement(De4, { tooltipEntrySettings: m18 });
});
var fD = (e14, r11) => e14 > r11 ? "start" : e14 < r11 ? "end" : "middle";
var pD = (e14, r11, t10) => typeof r11 == "function" ? Ae6(r11(e14), t10, t10 * 0.8) : Ae6(r11, t10, t10 * 0.8);
var mD = (e14, r11, t10) => {
  var { top: a11, left: n10, width: i9, height: o15 } = r11, l12 = nl(i9, o15), c16 = n10 + Ae6(e14.cx, i9, i9 / 2), s8 = a11 + Ae6(e14.cy, o15, o15 / 2), u9 = Ae6(e14.innerRadius, l12, 0), d12 = pD(t10, e14.outerRadius, l12), f10 = e14.maxRadius || Math.sqrt(i9 * i9 + o15 * o15) / 2;
  return { cx: c16, cy: s8, innerRadius: u9, outerRadius: d12, maxRadius: f10 };
};
var vD = (e14, r11) => {
  var t10 = he4(r11 - e14), a11 = Math.min(Math.abs(r11 - e14), 360);
  return t10 * a11;
};
var hD = (e14, r11) => {
  if (ee5.isValidElement(e14)) return ee5.cloneElement(e14, r11);
  if (typeof e14 == "function") return e14(r11);
  var t10 = rd("recharts-pie-label-line", typeof e14 != "boolean" ? e14.className : ""), { key: a11 } = r11, n10 = dc(r11, Jk);
  return ee5.createElement(Mr, Ia({}, n10, { type: "linear", className: t10 }));
};
var yD = (e14, r11, t10) => {
  if (ee5.isValidElement(e14)) return ee5.cloneElement(e14, r11);
  var a11 = t10;
  if (typeof e14 == "function" && (a11 = e14(r11), ee5.isValidElement(a11))) return a11;
  var n10 = rd("recharts-pie-label-text", Oa(e14));
  return ee5.createElement(nr, Ia({}, r11, { alignmentBaseline: "middle", className: n10 }), a11);
};
function gD(e14) {
  var { sectors: r11, props: t10, showLabels: a11 } = e14, { label: n10, labelLine: i9, dataKey: o15 } = t10;
  if (!a11 || !n10 || !r11) return null;
  var l12 = X11(t10), c16 = Ee6(n10), s8 = Ee6(i9), u9 = typeof n10 == "object" && "offsetRadius" in n10 && typeof n10.offsetRadius == "number" && n10.offsetRadius || 20, d12 = r11.map((f10, p12) => {
    var m18 = (f10.startAngle + f10.endAngle) / 2, h13 = Q12(f10.cx, f10.cy, f10.outerRadius + u9, m18), y16 = Se2(Se2(Se2(Se2({}, l12), f10), {}, { stroke: "none" }, c16), {}, { index: p12, textAnchor: fD(h13.x, f10.cx) }, h13), v9 = Se2(Se2(Se2(Se2({}, l12), f10), {}, { fill: "none", stroke: f10.fill }, s8), {}, { index: p12, points: [Q12(f10.cx, f10.cy, f10.outerRadius, m18), h13], key: "line" });
    return ee5.createElement(U10, { zIndex: V14.label, key: "label-".concat(f10.startAngle, "-").concat(f10.endAngle, "-").concat(f10.midAngle, "-").concat(p12) }, ee5.createElement(T14, null, i9 && hD(i9, v9), yD(n10, y16, _13(f10, o15))));
  });
  return ee5.createElement(T14, { className: "recharts-pie-labels" }, d12);
}
function xD(e14) {
  var { sectors: r11, props: t10, showLabels: a11 } = e14, { label: n10 } = t10;
  return typeof n10 == "object" && n10 != null && "position" in n10 ? ee5.createElement(pr3, { label: n10 }) : ee5.createElement(gD, { sectors: r11, props: t10, showLabels: a11 });
}
function bD(e14) {
  var { sectors: r11, activeShape: t10, inactiveShape: a11, allOtherPieProps: n10, shape: i9, id: o15 } = e14, l12 = E17(fr2), c16 = E17(Gn3), s8 = E17(Ml), { onMouseEnter: u9, onClick: d12, onMouseLeave: f10 } = n10, p12 = dc(n10, Qk), m18 = gt5(u9, n10.dataKey, o15), h13 = xt5(f10), y16 = bt4(d12, n10.dataKey, o15);
  return r11 == null || r11.length === 0 ? null : ee5.createElement(ee5.Fragment, null, r11.map((v9, g13) => {
    if (v9?.startAngle === 0 && v9?.endAngle === 0 && r11.length !== 1) return null;
    var x18 = s8 == null || s8 === o15, b14 = String(g13) === l12 && (c16 == null || n10.dataKey === c16) && x18, P16 = l12 ? a11 : null, A13 = t10 && b14 ? t10 : P16, O12 = Se2(Se2({}, v9), {}, { stroke: v9.stroke, tabIndex: -1, [Vo]: g13, [xn3]: o15 });
    return ee5.createElement(T14, Ia({ key: "sector-".concat(v9?.startAngle, "-").concat(v9?.endAngle, "-").concat(v9.midAngle, "-").concat(g13), tabIndex: -1, className: "recharts-pie-sector" }, Ve3(p12, v9, g13), { onMouseEnter: m18(v9, g13), onMouseLeave: h13(v9, g13), onClick: y16(v9, g13) }), ee5.createElement(Wr, Ia({ option: i9 ?? A13, index: g13, shapeType: "sector", isActive: b14 }, O12)));
  }));
}
function Wy(e14) {
  var r11, { pieSettings: t10, displayedData: a11, cells: n10, offset: i9 } = e14, { cornerRadius: o15, startAngle: l12, endAngle: c16, dataKey: s8, nameKey: u9, tooltipType: d12 } = t10, f10 = Math.abs(t10.minAngle), p12 = vD(l12, c16), m18 = Math.abs(p12), h13 = a11.length <= 1 ? 0 : (r11 = t10.paddingAngle) !== null && r11 !== void 0 ? r11 : 0, y16 = a11.filter((w9) => _13(w9, s8, 0) !== 0).length, v9 = (m18 >= 360 ? y16 : y16 - 1) * h13, g13 = a11.reduce((w9, S11) => {
    var I24 = _13(S11, s8, 0);
    return w9 + (k11(I24) ? I24 : 0);
  }, 0), x18 = f10 > 0 && g13 > 0 && a11.some((w9) => {
    var S11 = _13(w9, s8, 0), I24 = (k11(S11) ? S11 : 0) / g13;
    return S11 !== 0 && I24 * m18 < f10;
  }), b14 = x18 ? f10 : 0, P16 = m18 - y16 * b14 - v9, A13;
  if (g13 > 0) {
    var O12;
    A13 = a11.map((w9, S11) => {
      var I24 = _13(w9, s8, 0), R13 = _13(w9, u9, S11), C11 = mD(t10, i9, w9), N19 = (k11(I24) ? I24 : 0) / g13, j15, D18 = Se2(Se2({}, w9), n10 && n10[S11] && n10[S11].props), G20 = D18 != null && "fill" in D18 && typeof D18.fill == "string" ? D18.fill : t10.fill;
      S11 ? j15 = O12.endAngle + he4(p12) * h13 * (I24 !== 0 ? 1 : 0) : j15 = l12;
      var H14 = j15 + he4(p12) * ((I24 !== 0 ? b14 : 0) + N19 * P16), ie6 = (j15 + H14) / 2, Y10 = (C11.innerRadius + C11.outerRadius) / 2, oe8 = [{ name: R13, value: I24, payload: D18, dataKey: s8, type: d12, color: G20, fill: G20, graphicalItemId: t10.id }], ae11 = Q12(C11.cx, C11.cy, Y10, ie6);
      return O12 = Se2(Se2(Se2(Se2({}, t10.presentationProps), {}, { percent: N19, cornerRadius: typeof o15 == "string" ? parseFloat(o15) : o15, name: R13, tooltipPayload: oe8, midAngle: ie6, middleRadius: Y10, tooltipPosition: ae11 }, D18), C11), {}, { value: I24, dataKey: s8, startAngle: j15, endAngle: H14, payload: D18, paddingAngle: I24 !== 0 ? he4(p12) * h13 : 0 }), O12;
    });
  }
  return A13;
}
function PD(e14) {
  var { showLabels: r11, sectors: t10, children: a11 } = e14, n10 = ed(() => !r11 || !t10 ? [] : t10.map((i9) => ({ value: i9.value, payload: i9.payload, clockWise: false, parentViewBox: void 0, viewBox: { cx: i9.cx, cy: i9.cy, innerRadius: i9.innerRadius, outerRadius: i9.outerRadius, startAngle: i9.startAngle, endAngle: i9.endAngle, clockWise: false }, fill: i9.fill })), [t10, r11]);
  return ee5.createElement(ec, { value: r11 ? n10 : void 0 }, a11);
}
function AD(e14) {
  var { props: r11, previousSectorsRef: t10, id: a11 } = e14, { sectors: n10, isAnimationActive: i9, animationBegin: o15, animationDuration: l12, animationEasing: c16, activeShape: s8, inactiveShape: u9, onAnimationStart: d12, onAnimationEnd: f10 } = r11, p12 = Ue2(r11, "recharts-pie-"), m18 = t10.current, [h13, y16] = lD(false), v9 = bg(() => {
    typeof f10 == "function" && f10(), y16(false);
  }, [f10]), g13 = bg(() => {
    typeof d12 == "function" && d12(), y16(true);
  }, [d12]);
  return ee5.createElement(PD, { showLabels: !h13, sectors: n10 }, ee5.createElement(Ye4, { animationId: p12, begin: o15, duration: l12, isActive: i9, easing: c16, onAnimationStart: g13, onAnimationEnd: v9, key: p12 }, (x18) => {
    var b14, P16 = [], A13 = n10 && n10[0], O12 = (b14 = A13?.startAngle) !== null && b14 !== void 0 ? b14 : 0;
    return n10?.forEach((w9, S11) => {
      var I24 = m18 && m18[S11], R13 = S11 > 0 ? y(w9, "paddingAngle", 0) : 0;
      if (I24) {
        var C11 = B18(I24.endAngle - I24.startAngle, w9.endAngle - w9.startAngle, x18), N19 = Se2(Se2({}, w9), {}, { startAngle: O12 + R13, endAngle: O12 + C11 + R13 });
        P16.push(N19), O12 = N19.endAngle;
      } else {
        var { endAngle: j15, startAngle: D18 } = w9, G20 = B18(0, j15 - D18, x18), H14 = Se2(Se2({}, w9), {}, { startAngle: O12 + R13, endAngle: O12 + G20 + R13 });
        P16.push(H14), O12 = H14.endAngle;
      }
    }), t10.current = P16, ee5.createElement(T14, null, ee5.createElement(bD, { sectors: P16, activeShape: s8, inactiveShape: u9, allOtherPieProps: r11, shape: r11.shape, id: a11 }));
  }), ee5.createElement(xD, { showLabels: !h13, sectors: n10, props: r11 }), r11.children);
}
var OD = { animationBegin: 400, animationDuration: 1500, animationEasing: "ease", cx: "50%", cy: "50%", dataKey: "value", endAngle: 360, fill: "#808080", hide: false, innerRadius: 0, isAnimationActive: "auto", label: false, labelLine: true, legendType: "rect", minAngle: 0, nameKey: "name", outerRadius: "80%", paddingAngle: 0, rootTabIndex: 0, startAngle: 0, stroke: "#fff", zIndex: V14.area };
function wD(e14) {
  var { id: r11 } = e14, t10 = dc(e14, eD), { hide: a11, className: n10, rootTabIndex: i9 } = e14, o15 = ed(() => yt4(e14.children, zr), [e14.children]), l12 = E17((u9) => zy(u9, r11, o15)), c16 = oD(null), s8 = rd("recharts-pie", n10);
  return a11 || l12 == null ? (c16.current = null, ee5.createElement(T14, { tabIndex: i9, className: s8 })) : ee5.createElement(U10, { zIndex: e14.zIndex }, ee5.createElement(dD, { dataKey: e14.dataKey, nameKey: e14.nameKey, sectors: l12, stroke: e14.stroke, strokeWidth: e14.strokeWidth, fill: e14.fill, name: e14.name, hide: e14.hide, tooltipType: e14.tooltipType, id: r11, activeShape: e14.activeShape }), ee5.createElement(T14, { tabIndex: i9, className: s8 }, ee5.createElement(AD, { props: Se2(Se2({}, t10), {}, { sectors: l12 }), previousSectorsRef: c16, id: r11 })));
}
function ED(e14) {
  var r11 = L11(e14, OD), { id: t10 } = r11, a11 = dc(r11, rD), n10 = X11(a11);
  return ee5.createElement(Te3, { id: t10, type: "pie" }, (i9) => ee5.createElement(ee5.Fragment, null, ee5.createElement(ai2, { type: "pie", id: i9, data: a11.data, dataKey: a11.dataKey, hide: a11.hide, angleAxisId: 0, radiusAxisId: 0, name: a11.name, nameKey: a11.nameKey, tooltipType: a11.tooltipType, legendType: a11.legendType, fill: a11.fill, cx: a11.cx, cy: a11.cy, startAngle: a11.startAngle, endAngle: a11.endAngle, paddingAngle: a11.paddingAngle, minAngle: a11.minAngle, innerRadius: a11.innerRadius, outerRadius: a11.outerRadius, cornerRadius: a11.cornerRadius, presentationProps: n10, maxRadius: r11.maxRadius }), ee5.createElement(sD, Ia({}, a11, { id: i9 })), ee5.createElement(wD, Ia({}, a11, { id: i9 }))));
}
var Pg = ED;
Pg.displayName = "Pie";
var SD = ["points"];
function Ag(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function td(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Ag(Object(t10), true).forEach(function(a11) {
      ID(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Ag(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function ID(e14, r11, t10) {
  return (r11 = RD(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function RD(e14) {
  var r11 = CD(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function CD(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function fc() {
  return fc = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, fc.apply(null, arguments);
}
function jD(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = kD(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function kD(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function ND(e14) {
  var { option: r11, dotProps: t10, className: a11 } = e14;
  if (TD(r11)) return DD(r11, t10);
  if (typeof r11 == "function") return r11(t10);
  var n10 = LD(a11, typeof r11 != "boolean" ? r11.className : ""), i9 = t10 ?? {}, { points: o15 } = i9, l12 = jD(i9, SD);
  return io.createElement(ra, fc({}, l12, { className: n10 }));
}
function MD(e14, r11) {
  return e14 == null ? false : r11 ? true : e14.length === 1;
}
function ni2(e14) {
  var { points: r11, dot: t10, className: a11, dotClassName: n10, dataKey: i9, baseProps: o15, needClip: l12, clipPathId: c16, zIndex: s8 = V14.scatter } = e14;
  if (!MD(r11, t10)) return null;
  var u9 = Qn2(t10), d12 = xf(t10), f10 = r11.map((m18, h13) => {
    var y16, v9, g13 = td(td(td({ r: 3 }, o15), d12), {}, { index: h13, cx: (y16 = m18.x) !== null && y16 !== void 0 ? y16 : void 0, cy: (v9 = m18.y) !== null && v9 !== void 0 ? v9 : void 0, dataKey: i9, value: m18.value, payload: m18.payload, points: r11 });
    return io.createElement(ND, { key: "dot-".concat(h13), option: t10, dotProps: g13, className: n10 });
  }), p12 = {};
  return l12 && c16 != null && (p12.clipPath = "url(#clipPath-".concat(u9 ? "" : "dots-").concat(c16, ")")), io.createElement(U10, { zIndex: s8 }, io.createElement(T14, fc({ className: a11 }, p12), f10));
}
function Og(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function wg(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Og(Object(t10), true).forEach(function(a11) {
      _D(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Og(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function _D(e14, r11, t10) {
  return (r11 = BD(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function BD(e14) {
  var r11 = KD(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function KD(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var tr2 = 0;
var WD = { xAxis: {}, yAxis: {}, zAxis: {} };
var Eg = mr({ name: "cartesianAxis", initialState: WD, reducers: { addXAxis: { reducer(e14, r11) {
  e14.xAxis[r11.payload.id] = Ce4(r11.payload);
}, prepare: pr() }, replaceXAxis: { reducer(e14, r11) {
  var { prev: t10, next: a11 } = r11.payload;
  e14.xAxis[t10.id] !== void 0 && (t10.id !== a11.id && delete e14.xAxis[t10.id], e14.xAxis[a11.id] = Ce4(a11));
}, prepare: pr() }, removeXAxis: { reducer(e14, r11) {
  delete e14.xAxis[r11.payload.id];
}, prepare: pr() }, addYAxis: { reducer(e14, r11) {
  e14.yAxis[r11.payload.id] = Ce4(r11.payload);
}, prepare: pr() }, replaceYAxis: { reducer(e14, r11) {
  var { prev: t10, next: a11 } = r11.payload;
  e14.yAxis[t10.id] !== void 0 && (t10.id !== a11.id && delete e14.yAxis[t10.id], e14.yAxis[a11.id] = Ce4(a11));
}, prepare: pr() }, removeYAxis: { reducer(e14, r11) {
  delete e14.yAxis[r11.payload.id];
}, prepare: pr() }, addZAxis: { reducer(e14, r11) {
  e14.zAxis[r11.payload.id] = Ce4(r11.payload);
}, prepare: pr() }, replaceZAxis: { reducer(e14, r11) {
  var { prev: t10, next: a11 } = r11.payload;
  e14.zAxis[t10.id] !== void 0 && (t10.id !== a11.id && delete e14.zAxis[t10.id], e14.zAxis[a11.id] = Ce4(a11));
}, prepare: pr() }, removeZAxis: { reducer(e14, r11) {
  delete e14.zAxis[r11.payload.id];
}, prepare: pr() }, updateYAxisWidth(e14, r11) {
  var { id: t10, width: a11 } = r11.payload, n10 = e14.yAxis[t10];
  if (n10) {
    var i9, o15 = n10.widthHistory || [];
    if (o15.length === 3 && o15[0] === o15[2] && a11 === o15[1] && a11 !== n10.width && Math.abs(a11 - ((i9 = o15[0]) !== null && i9 !== void 0 ? i9 : 0)) <= 1) return;
    var l12 = [...o15, a11].slice(-3);
    e14.yAxis[t10] = wg(wg({}, n10), {}, { width: a11, widthHistory: l12 });
  }
} } });
var { addXAxis: Sg, replaceXAxis: Ig, removeXAxis: Rg, addYAxis: Cg, replaceYAxis: jg, removeYAxis: kg, addZAxis: Dg, replaceZAxis: Tg, removeZAxis: Lg, updateYAxisWidth: Ng } = Eg.actions;
var Mg = Eg.reducer;
var pc = fe7([me9], (e14) => ({ top: e14.top, bottom: e14.bottom, left: e14.left, right: e14.right }));
var _g = fe7([pc, or3, lr2], (e14, r11, t10) => {
  if (!(!e14 || r11 == null || t10 == null)) return { x: e14.left, y: e14.top, width: Math.max(0, r11 - e14.left - e14.right), height: Math.max(0, t10 - e14.top - e14.bottom) };
});
var Bg = (e14) => {
  var r11 = F10();
  return E17((t10) => qe4(t10, "xAxis", e14, r11));
};
var Kg = (e14) => {
  var r11 = F10();
  return E17((t10) => qe4(t10, "yAxis", e14, r11));
};
var Pt2 = () => E17(_g);
var ad = () => E17(Ev);
function Fg(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function nd(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Fg(Object(t10), true).forEach(function(a11) {
      iT(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Fg(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function iT(e14, r11, t10) {
  return (r11 = oT(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function oT(e14) {
  var r11 = lT(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function lT(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var uT = (e14) => {
  var { point: r11, childIndex: t10, mainColor: a11, activeDot: n10, dataKey: i9, clipPath: o15 } = e14;
  if (n10 === false || r11.x == null || r11.y == null) return null;
  var l12 = { index: t10, dataKey: i9, cx: r11.x, cy: r11.y, r: 4, fill: a11 ?? "none", strokeWidth: 2, stroke: "#fff", payload: r11.payload, value: r11.value }, c16 = nd(nd(nd({}, l12), Ee6(n10)), mn3(n10)), s8;
  return sT(n10) ? s8 = cT(n10, c16) : typeof n10 == "function" ? s8 = n10(c16) : s8 = oo.createElement(ra, c16), oo.createElement(T14, { className: "recharts-active-dot", clipPath: o15 }, s8);
};
function qa(e14) {
  var { points: r11, mainColor: t10, activeDot: a11, itemDataKey: n10, clipPath: i9, zIndex: o15 = V14.activeDot } = e14, l12 = E17(fr2), c16 = ad();
  if (r11 == null || c16 == null) return null;
  var s8 = r11.find((u9) => c16.includes(u9.payload));
  return Z10(s8) ? null : oo.createElement(U10, { zIndex: o15 }, oo.createElement(uT, { point: s8, childIndex: Number(l12), mainColor: t10, dataKey: n10, activeDot: a11, clipPath: i9 }));
}
function Vg(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function mc(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Vg(Object(t10), true).forEach(function(a11) {
      dT(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Vg(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function dT(e14, r11, t10) {
  return (r11 = fT(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function fT(e14) {
  var r11 = pT(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function pT(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Xg = (e14, r11) => et6(e14, "radiusAxis", r11);
var mT = fe7([Xg], (e14) => {
  if (e14 != null) return { scale: e14 };
});
var vT = fe7([jt, Xg], (e14, r11) => {
  if (!(e14 == null || r11 == null)) return mc(mc({}, e14), {}, { scale: r11 });
});
var hT = (e14, r11, t10, a11) => mt4(e14, "radiusAxis", r11, a11);
var Gg = (e14, r11, t10) => Gr(e14, t10);
var Hg = (e14, r11, t10) => et6(e14, "angleAxis", t10);
var yT = fe7([Gg, Hg], (e14, r11) => {
  if (!(e14 == null || r11 == null)) return mc(mc({}, e14), {}, { scale: r11 });
});
var gT = (e14, r11, t10, a11) => mt4(e14, "angleAxis", t10, a11);
var xT = fe7([Gg, Hg, Ir], (e14, r11, t10) => {
  if (!(t10 == null || r11 == null)) return { scale: r11, type: e14.type, dataKey: e14.dataKey, cx: t10.cx, cy: t10.cy };
});
var bT = (e14, r11, t10, a11, n10) => n10;
var PT = fe7([z15, vT, hT, yT, gT], (e14, r11, t10, a11, n10) => Ge4(e14, "radiusAxis") ? He2(r11, t10, false) : He2(a11, n10, false));
var AT = fe7([Aa, bT], (e14, r11) => {
  if (e14 != null) {
    var t10 = e14.find((a11) => a11.type === "radar" && r11 === a11.id);
    return t10?.dataKey;
  }
});
var Yg = fe7([mT, xT, Sr2, AT, PT], (e14, r11, t10, a11, n10) => {
  var { chartData: i9, dataStartIndex: o15, dataEndIndex: l12 } = t10;
  if (!(e14 == null || r11 == null || i9 == null || n10 == null || a11 == null)) {
    var c16 = i9.slice(o15, l12 + 1);
    return Ug({ radiusAxis: e14, angleAxis: r11, displayedData: c16, dataKey: a11, bandSize: n10 });
  }
});
var OT = ["id"];
function lo() {
  return lo = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, lo.apply(null, arguments);
}
function Zg(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function kr2(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Zg(Object(t10), true).forEach(function(a11) {
      wT(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Zg(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function wT(e14, r11, t10) {
  return (r11 = ET(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function ET(e14) {
  var r11 = ST(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function ST(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function IT(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = RT(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function RT(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function id(e14, r11) {
  return e14 && e14 !== "none" ? e14 : r11;
}
var DT = (e14) => {
  var { dataKey: r11, name: t10, stroke: a11, fill: n10, legendType: i9, hide: o15 } = e14;
  return [{ inactive: o15, dataKey: r11, type: i9, color: id(a11, n10), value: Be4(t10, r11), payload: e14 }];
};
var TT = ve7.memo((e14) => {
  var { dataKey: r11, stroke: t10, strokeWidth: a11, fill: n10, name: i9, hide: o15, tooltipType: l12, id: c16 } = e14, s8 = { dataDefinedOnItem: void 0, getPosition: ye6, settings: { stroke: t10, strokeWidth: a11, fill: n10, nameKey: void 0, dataKey: r11, name: Be4(i9, r11), hide: o15, type: l12, color: id(t10, n10), unit: "", graphicalItemId: c16 } };
  return ve7.createElement(De4, { tooltipEntrySettings: s8 });
});
function LT(e14) {
  var { points: r11, props: t10 } = e14, { dot: a11, dataKey: n10 } = t10, { id: i9 } = t10, o15 = IT(t10, OT), l12 = X11(o15);
  return ve7.createElement(ni2, { points: r11, dot: a11, className: "recharts-radar-dots", dotClassName: "recharts-radar-dot", dataKey: n10, baseProps: l12 });
}
function Ug(e14) {
  var { radiusAxis: r11, angleAxis: t10, displayedData: a11, dataKey: n10, bandSize: i9 } = e14, { cx: o15, cy: l12 } = t10, c16 = false, s8 = [], u9 = t10.type !== "number" ? i9 ?? 0 : 0;
  a11.forEach((f10, p12) => {
    var m18, h13, y16 = _13(f10, t10.dataKey, p12), v9 = _13(f10, n10), g13 = ((m18 = t10.scale.map(y16)) !== null && m18 !== void 0 ? m18 : 0) + u9, x18 = Array.isArray(v9) ? f2(v9) : v9, b14 = Z10(x18) ? 0 : (h13 = r11.scale.map(x18)) !== null && h13 !== void 0 ? h13 : 0;
    Array.isArray(v9) && v9.length >= 2 && (c16 = true), s8.push(kr2(kr2({}, Q12(o15, l12, b14, g13)), {}, { name: y16, value: v9, cx: o15, cy: l12, radius: b14, angle: g13, payload: f10 }));
  });
  var d12 = [];
  return c16 && s8.forEach((f10) => {
    if (Array.isArray(f10.value)) {
      var p12, m18 = f10.value[0], h13 = Z10(m18) ? 0 : (p12 = r11.scale.map(m18)) !== null && p12 !== void 0 ? p12 : 0;
      d12.push(kr2(kr2({}, f10), {}, { radius: h13 }, Q12(o15, l12, h13, f10.angle)));
    } else d12.push(f10);
  }), { points: s8, isRange: c16, baseLinePoints: d12 };
}
function NT(e14) {
  var { showLabels: r11, points: t10, children: a11 } = e14, n10 = t10.map((i9) => {
    var o15, l12 = { x: i9.x, y: i9.y, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return kr2(kr2({}, l12), {}, { value: (o15 = i9.value) !== null && o15 !== void 0 ? o15 : "", payload: i9.payload, parentViewBox: void 0, viewBox: l12, fill: void 0 });
  });
  return ve7.createElement(Jr, { value: r11 ? n10 : void 0 }, a11);
}
function MT(e14) {
  var { points: r11, baseLinePoints: t10, props: a11 } = e14;
  if (r11 == null) return null;
  var { shape: n10, isRange: i9, connectNulls: o15 } = a11, l12 = (u9) => {
    var { onMouseEnter: d12 } = a11;
    d12 && d12(a11, u9);
  }, c16 = (u9) => {
    var { onMouseLeave: d12 } = a11;
    d12 && d12(a11, u9);
  }, s8;
  return ve7.isValidElement(n10) ? s8 = ve7.cloneElement(n10, kr2(kr2({}, a11), {}, { points: r11 })) : typeof n10 == "function" ? s8 = n10(kr2(kr2({}, a11), {}, { points: r11 })) : s8 = ve7.createElement(Ua, lo({}, re7(a11), { onMouseEnter: l12, onMouseLeave: c16, points: r11, baseLinePoints: i9 ? t10 : void 0, connectNulls: o15 })), ve7.createElement(T14, { className: "recharts-radar-polygon" }, s8, ve7.createElement(LT, { props: a11, points: r11 }));
}
var Jg = (e14, r11, t10) => (a11, n10) => {
  var i9 = e14 && e14[Math.floor(n10 * r11)];
  return i9 ? kr2(kr2({}, a11), {}, { x: B18(i9.x, a11.x, t10), y: B18(i9.y, a11.y, t10) }) : kr2(kr2({}, a11), {}, { x: B18(a11.cx, a11.x, t10), y: B18(a11.cy, a11.y, t10) });
};
function _T(e14) {
  var { props: r11, previousPointsRef: t10, previousBaseLinePointsRef: a11 } = e14, { points: n10, baseLinePoints: i9, isAnimationActive: o15, animationBegin: l12, animationDuration: c16, animationEasing: s8, onAnimationEnd: u9, onAnimationStart: d12 } = r11, f10 = t10.current, p12 = a11.current, m18 = f10 ? f10.length / n10.length : 1, h13 = p12 ? p12.length / i9.length : 1, y16 = Ue2(r11, "recharts-radar-"), [v9, g13] = CT(false), x18 = !v9, b14 = qg(() => {
    typeof u9 == "function" && u9(), g13(false);
  }, [u9]), P16 = qg(() => {
    typeof d12 == "function" && d12(), g13(true);
  }, [d12]);
  return ve7.createElement(NT, { showLabels: x18, points: n10 }, ve7.createElement(Ye4, { animationId: y16, begin: l12, duration: c16, isActive: o15, easing: s8, key: "radar-".concat(y16), onAnimationEnd: b14, onAnimationStart: P16 }, (A13) => {
    var O12 = A13 === 1 ? n10 : n10.map(Jg(f10, m18, A13)), w9 = A13 === 1 ? i9 : i9?.map(Jg(p12, h13, A13));
    return A13 > 0 && (t10.current = O12, a11.current = w9), ve7.createElement(MT, { points: O12, baseLinePoints: w9, props: r11 });
  }), ve7.createElement(pr3, { label: r11.label }), r11.children);
}
function BT(e14) {
  var r11 = $g(void 0), t10 = $g(void 0);
  return ve7.createElement(_T, { props: e14, previousPointsRef: r11, previousBaseLinePointsRef: t10 });
}
var KT = { activeDot: true, angleAxisId: 0, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", dot: false, hide: false, isAnimationActive: "auto", label: false, legendType: "rect", radiusAxisId: 0, zIndex: V14.area };
function zT(e14) {
  var { hide: r11, className: t10, points: a11 } = e14;
  if (r11) return null;
  var n10 = kT("recharts-radar", t10);
  return ve7.createElement(U10, { zIndex: e14.zIndex }, ve7.createElement(T14, { className: n10 }, ve7.createElement(BT, e14)), ve7.createElement(qa, { points: a11, mainColor: id(e14.stroke, e14.fill), itemDataKey: e14.dataKey, activeDot: e14.activeDot }));
}
function WT(e14) {
  var r11 = F10(), t10 = E17((a11) => Yg(a11, e14.radiusAxisId, e14.angleAxisId, r11, e14.id));
  return t10?.points == null ? null : ve7.createElement(zT, lo({}, e14, { points: t10?.points, baseLinePoints: t10?.baseLinePoints, isRange: t10?.isRange }));
}
function Qg(e14) {
  var r11 = L11(e14, KT);
  return ve7.createElement(Te3, { id: r11.id, type: "radar" }, (t10) => ve7.createElement(ve7.Fragment, null, ve7.createElement(ai2, { type: "radar", id: t10, data: void 0, dataKey: r11.dataKey, hide: r11.hide, angleAxisId: r11.angleAxisId, radiusAxisId: r11.radiusAxisId }), ve7.createElement(ri2, { legendPayload: DT(r11) }), ve7.createElement(TT, { dataKey: r11.dataKey, stroke: r11.stroke, strokeWidth: r11.strokeWidth, fill: r11.fill, name: r11.name, hide: r11.hide, tooltipType: r11.tooltipType, id: t10 }), ve7.createElement(WT, lo({}, r11, { id: t10 }))));
}
Qg.displayName = "Radar";
function od() {
  return od = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, od.apply(null, arguments);
}
function ld(e14) {
  return typeof e14 == "string" ? parseInt(e14, 10) : e14;
}
function vc(e14) {
  return ex.createElement(Wr, od({ shapeType: "sector" }, e14));
}
var rx = (e14, r11, t10) => {
  var a11 = t10 ?? e14;
  if (!Z10(a11)) return Ae6(a11, r11, 0);
};
var hc = (e14, r11, t10) => {
  var a11 = {}, n10 = e14.filter(Vt2), i9 = e14.filter((s8) => s8.stackId == null), o15 = n10.reduce((s8, u9) => {
    var d12 = s8[u9.stackId];
    return d12 == null && (d12 = []), d12.push(u9), s8[u9.stackId] = d12, s8;
  }, a11), l12 = Object.entries(o15).map((s8) => {
    var u9, [d12, f10] = s8, p12 = f10.map((h13) => h13.dataKey), m18 = rx(r11, t10, (u9 = f10[0]) === null || u9 === void 0 ? void 0 : u9.barSize);
    return { stackId: d12, dataKeys: p12, barSize: m18 };
  }), c16 = i9.map((s8) => {
    var u9 = [s8.dataKey].filter((f10) => f10 != null), d12 = rx(r11, t10, s8.barSize);
    return { stackId: void 0, dataKeys: u9, barSize: d12 };
  });
  return [...l12, ...c16];
};
function tx(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function yc(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? tx(Object(t10), true).forEach(function(a11) {
      FT(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : tx(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function FT(e14, r11, t10) {
  return (r11 = VT(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function VT(e14) {
  var r11 = XT(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function XT(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function GT(e14, r11, t10, a11, n10) {
  var i9, o15 = a11.length;
  if (!(o15 < 1)) {
    var l12 = Ae6(e14, t10, 0, true), c16, s8 = [];
    if (W15((i9 = a11[0]) === null || i9 === void 0 ? void 0 : i9.barSize)) {
      var u9 = false, d12 = t10 / o15, f10 = a11.reduce((g13, x18) => g13 + (x18.barSize || 0), 0);
      f10 += (o15 - 1) * l12, f10 >= t10 && (f10 -= (o15 - 1) * l12, l12 = 0), f10 >= t10 && d12 > 0 && (u9 = true, d12 *= 0.9, f10 = o15 * d12);
      var p12 = (t10 - f10) / 2 >> 0, m18 = { offset: p12 - l12, size: 0 };
      c16 = a11.reduce((g13, x18) => {
        var b14, P16 = { stackId: x18.stackId, dataKeys: x18.dataKeys, position: { offset: m18.offset + m18.size + l12, size: u9 ? d12 : (b14 = x18.barSize) !== null && b14 !== void 0 ? b14 : 0 } }, A13 = [...g13, P16];
        return m18 = P16.position, A13;
      }, s8);
    } else {
      var h13 = Ae6(r11, t10, 0, true);
      t10 - 2 * h13 - (o15 - 1) * l12 <= 0 && (l12 = 0);
      var y16 = (t10 - 2 * h13 - (o15 - 1) * l12) / o15;
      y16 > 1 && (y16 >>= 0);
      var v9 = W15(n10) ? Math.min(y16, n10) : y16;
      c16 = a11.reduce((g13, x18, b14) => [...g13, { stackId: x18.stackId, dataKeys: x18.dataKeys, position: { offset: h13 + (y16 + l12) * b14 + (y16 - v9) / 2, size: v9 } }], s8);
    }
    return c16;
  }
}
var gc = (e14, r11, t10, a11, n10, i9, o15) => {
  var l12 = Z10(o15) ? r11 : o15, c16 = GT(t10, a11, n10 !== i9 ? n10 : i9, e14, l12);
  return n10 !== i9 && c16 != null && (c16 = c16.map((s8) => yc(yc({}, s8), {}, { position: yc(yc({}, s8.position), {}, { offset: s8.position.offset - n10 / 2 }) }))), c16;
};
var xc = (e14, r11) => {
  var t10 = pa(r11);
  if (!(!e14 || t10 == null || r11 == null)) {
    var { stackId: a11 } = r11;
    if (a11 != null) {
      var n10 = e14[a11];
      if (n10) {
        var { stackedData: i9 } = n10;
        if (i9) return i9.find((o15) => o15.key === t10);
      }
    }
  }
};
var bc = (e14, r11) => {
  if (!(e14 == null || r11 == null)) {
    var t10 = e14.find((a11) => a11.stackId === r11.stackId && r11.dataKey != null && a11.dataKeys.includes(r11.dataKey));
    if (t10 != null) return t10.position;
  }
};
function ax(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Pc(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? ax(Object(t10), true).forEach(function(a11) {
      HT(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : ax(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function HT(e14, r11, t10) {
  return (r11 = YT(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function YT(e14) {
  var r11 = UT(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function UT(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var ZT = (e14, r11) => jt(e14, r11);
var qT = (e14, r11) => et6(e14, "radiusAxis", r11);
var Ac = fe7([ZT, qT], (e14, r11) => {
  if (!(e14 == null || r11 == null)) return Pc(Pc({}, e14), {}, { scale: r11 });
});
var cd = (e14, r11) => fy(e14, "radiusAxis", r11, false);
var $T = (e14, r11, t10) => Gr(e14, t10);
var JT = (e14, r11, t10) => et6(e14, "angleAxis", t10);
var Oc = fe7([$T, JT], (e14, r11) => {
  if (!(e14 == null || r11 == null)) return Pc(Pc({}, e14), {}, { scale: r11 });
});
var sd = (e14, r11, t10) => mt4(e14, "angleAxis", t10, false);
var QT = (e14, r11, t10, a11) => a11;
var ud = fe7([Aa, QT], (e14, r11) => {
  if (e14.some((t10) => t10.type === "radialBar" && r11.dataKey === t10.dataKey && r11.stackId === t10.stackId)) return r11;
});
var ix = fe7([z15, Ac, cd, Oc, sd], (e14, r11, t10, a11, n10) => Ge4(e14, "radiusAxis") ? He2(r11, t10, false) : He2(a11, n10, false));
var eL = fe7([Oc, Ac, z15], (e14, r11, t10) => {
  var a11 = t10 === "radial" ? e14 : r11;
  if (!(a11 == null || a11.scale == null)) return Wo({ numericAxis: a11 });
});
var rL = (e14, r11, t10, a11, n10) => n10;
var tL = (e14, r11, t10, a11, n10) => t10;
var aL = (e14, r11, t10, a11, n10) => r11;
var ox = (e14, r11, t10, a11, n10) => a11.maxBarSize;
var lx = (e14) => e14.type === "radialBar";
var nL = fe7([z15, Aa, tL, aL], (e14, r11, t10, a11) => r11.filter((n10) => e14 === "centric" ? n10.angleAxisId === t10 : n10.radiusAxisId === a11).filter((n10) => n10.hide === false).filter(lx));
var iL = () => {
};
var oL = fe7([nL, fl, iL], hc);
var lL = fe7([z15, jn2, Oc, sd, Ac, cd, ox], (e14, r11, t10, a11, n10, i9, o15) => {
  var l12, c16, s8 = Z10(o15) ? r11 : o15;
  if (e14 === "centric") {
    var u9, d12;
    return (u9 = (d12 = He2(t10, a11, true)) !== null && d12 !== void 0 ? d12 : s8) !== null && u9 !== void 0 ? u9 : 0;
  }
  return (l12 = (c16 = He2(n10, i9, true)) !== null && c16 !== void 0 ? c16 : s8) !== null && l12 !== void 0 ? l12 : 0;
});
var cL = fe7([oL, jn2, dl, kn4, lL, ix, ox], gc);
var sL = fe7([cL, ud], bc);
var cx = fe7([$n2], (e14) => e14.filter(lx).filter(Vt2));
var uL = fe7([cx, Sr2, Ce6], Ln3);
var nx = fe7([uL, cx, It4, Dn3], Bi);
var dL = (e14, r11, t10) => {
  var a11 = z15(e14);
  return a11 === "centric" ? nx(e14, "radiusAxis", r11) : nx(e14, "angleAxis", t10);
};
var fL = fe7([dL, ud], xc);
var sx = fe7([Oc, sd, Ac, cd, sr2, ud, ix, z15, eL, Ir, rL, sL, fL], (e14, r11, t10, a11, n10, i9, o15, l12, c16, s8, u9, d12, f10) => {
  var { chartData: p12, dataStartIndex: m18, dataEndIndex: h13 } = n10;
  if (i9 == null || t10 == null || e14 == null || p12 == null || o15 == null || d12 == null || l12 !== "centric" && l12 !== "radial" || a11 == null || s8 == null) return [];
  var { dataKey: y16, minPointSize: v9 } = i9, { cx: g13, cy: x18, startAngle: b14, endAngle: P16 } = s8, A13 = p12.slice(m18, h13 + 1), O12 = l12 === "centric" ? t10 : e14, w9 = f10 ? O12.scale.domain() : null;
  return dx({ angleAxis: e14, angleAxisTicks: r11, bandSize: o15, baseValue: c16, cells: u9, cx: g13, cy: x18, dataKey: y16, dataStartIndex: m18, displayedData: A13, endAngle: P16, layout: l12, minPointSize: v9, pos: d12, radiusAxis: t10, radiusAxisTicks: a11, stackedData: f10, stackedDomain: w9, startAngle: b14 });
});
var ux = fe7([Sr2, (e14, r11) => r11], (e14, r11) => {
  var { chartData: t10, dataStartIndex: a11, dataEndIndex: n10 } = e14;
  if (t10 == null) return [];
  var i9 = t10.slice(a11, n10 + 1);
  return i9.length === 0 ? [] : i9.map((o15) => ({ type: r11, value: o15.name, color: o15.fill, payload: o15 }));
});
function wc(e14, r11) {
  return e14 && typeof e14 == "object" && "zIndex" in e14 && typeof e14.zIndex == "number" && W15(e14.zIndex) ? e14.zIndex : r11;
}
var pL = ["shape", "activeShape", "cornerRadius", "id"];
var mL = ["onMouseEnter", "onClick", "onMouseLeave"];
var vL = ["value", "background"];
function oi2() {
  return oi2 = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, oi2.apply(null, arguments);
}
function fx(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function vr(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? fx(Object(t10), true).forEach(function(a11) {
      hL(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : fx(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function hL(e14, r11, t10) {
  return (r11 = yL(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function yL(e14) {
  var r11 = gL(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function gL(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function dd(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = xL(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function xL(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var Sc = [];
function OL(e14) {
  var { showLabels: r11, sectors: t10, children: a11 } = e14, n10 = t10.map((i9) => ({ value: i9.value, payload: i9.payload, parentViewBox: void 0, clockWise: false, viewBox: { cx: i9.cx, cy: i9.cy, innerRadius: i9.innerRadius, outerRadius: i9.outerRadius, startAngle: i9.startAngle, endAngle: i9.endAngle, clockWise: false }, fill: i9.fill }));
  return se7.createElement(ec, { value: r11 ? n10 : void 0 }, a11);
}
function wL(e14) {
  var { sectors: r11, allOtherRadialBarProps: t10, showLabels: a11 } = e14, { shape: n10, activeShape: i9, cornerRadius: o15, id: l12 } = t10, c16 = dd(t10, pL), s8 = X11(c16), u9 = E17(fr2), { onMouseEnter: d12, onClick: f10, onMouseLeave: p12 } = t10, m18 = dd(t10, mL), h13 = gt5(d12, t10.dataKey, l12), y16 = xt5(p12), v9 = bt4(f10, t10.dataKey, l12);
  return r11 == null ? null : se7.createElement(OL, { showLabels: a11, sectors: r11 }, r11.map((g13, x18) => {
    var b14 = !!(i9 && u9 === String(x18)), P16 = h13(g13, x18), A13 = y16(g13, x18), O12 = v9(g13, x18), w9 = vr(vr(vr(vr({}, s8), {}, { cornerRadius: ld(o15) }, g13), Ve3(m18, g13, x18)), {}, { onMouseEnter: P16, onMouseLeave: A13, onClick: O12, className: "recharts-radial-bar-sector ".concat(g13.className), forceCornerRadius: c16.forceCornerRadius, cornerIsExternal: c16.cornerIsExternal, isActive: b14, option: b14 ? i9 : n10, index: x18 });
    return b14 ? se7.createElement(U10, { zIndex: V14.activeBar, key: "sector-".concat(g13.cx, "-").concat(g13.cy, "-").concat(g13.innerRadius, "-").concat(g13.outerRadius, "-").concat(g13.startAngle, "-").concat(g13.endAngle, "-").concat(x18) }, se7.createElement(vc, w9)) : se7.createElement(vc, oi2({ key: "sector-".concat(g13.cx, "-").concat(g13.cy, "-").concat(g13.innerRadius, "-").concat(g13.outerRadius, "-").concat(g13.startAngle, "-").concat(g13.endAngle, "-").concat(x18) }, w9));
  }), se7.createElement(pr3, { label: t10.label }), t10.children);
}
function EL(e14) {
  var { props: r11, previousSectorsRef: t10 } = e14, { sectors: a11, isAnimationActive: n10, animationBegin: i9, animationDuration: o15, animationEasing: l12, onAnimationEnd: c16, onAnimationStart: s8 } = r11, u9 = Ue2(r11, "recharts-radialbar-"), d12 = t10.current, [f10, p12] = AL(false), m18 = px(() => {
    typeof c16 == "function" && c16(), p12(false);
  }, [c16]), h13 = px(() => {
    typeof s8 == "function" && s8(), p12(true);
  }, [s8]);
  return se7.createElement(Ye4, { animationId: u9, begin: i9, duration: o15, isActive: n10, easing: l12, onAnimationStart: h13, onAnimationEnd: m18, key: u9 }, (y16) => {
    var v9 = y16 === 1 ? a11 : (a11 ?? Sc).map((g13, x18) => {
      var b14 = d12 && d12[x18];
      if (b14) return vr(vr({}, g13), {}, { startAngle: B18(b14.startAngle, g13.startAngle, y16), endAngle: B18(b14.endAngle, g13.endAngle, y16) });
      var { endAngle: P16, startAngle: A13 } = g13;
      return vr(vr({}, g13), {}, { endAngle: B18(A13, P16, y16) });
    });
    return y16 > 0 && (t10.current = v9 ?? null), se7.createElement(wL, { sectors: v9 ?? Sc, allOtherRadialBarProps: r11, showLabels: !f10 });
  });
}
function SL(e14) {
  var r11 = PL(null);
  return se7.createElement(EL, { props: e14, previousSectorsRef: r11 });
}
function IL(e14) {
  var r11 = E17((t10) => ux(t10, e14.legendType));
  return se7.createElement(ri2, { legendPayload: r11 ?? [] });
}
var RL = se7.memo((e14) => {
  var { dataKey: r11, sectors: t10, stroke: a11, strokeWidth: n10, name: i9, hide: o15, fill: l12, tooltipType: c16, id: s8 } = e14, u9 = { dataDefinedOnItem: t10, getPosition: ye6, settings: { graphicalItemId: s8, stroke: a11, strokeWidth: n10, fill: l12, nameKey: void 0, dataKey: r11, name: Be4(i9, r11), hide: o15, type: c16, color: l12, unit: "" } };
  return se7.createElement(De4, { tooltipEntrySettings: u9 });
});
var fd = class extends bL {
  renderBackground(r11) {
    if (r11 == null) return null;
    var { cornerRadius: t10 } = this.props, a11 = Ee6(this.props.background);
    return se7.createElement(U10, { zIndex: wc(this.props.background, V14.barBackground) }, r11.map((n10, i9) => {
      var { value: o15, background: l12 } = n10, c16 = dd(n10, vL);
      if (!l12) return null;
      var s8 = vr(vr(vr(vr(vr({ cornerRadius: ld(t10) }, c16), {}, { fill: "#eee" }, l12), a11), Ve3(this.props, n10, i9)), {}, { index: i9, className: mx("recharts-radial-bar-background-sector", String(a11?.className)), option: l12, isActive: false });
      return se7.createElement(vc, oi2({ key: "background-".concat(c16.cx, "-").concat(c16.cy, "-").concat(c16.innerRadius, "-").concat(c16.outerRadius, "-").concat(c16.startAngle, "-").concat(c16.endAngle, "-").concat(i9) }, s8));
    }));
  }
  render() {
    var { hide: r11, sectors: t10, className: a11, background: n10 } = this.props;
    if (r11) return null;
    var i9 = mx("recharts-area", a11);
    return se7.createElement(U10, { zIndex: this.props.zIndex }, se7.createElement(T14, { className: i9 }, n10 && se7.createElement(T14, { className: "recharts-radial-bar-background" }, this.renderBackground(t10)), se7.createElement(T14, { className: "recharts-radial-bar-sectors" }, se7.createElement(SL, this.props))));
  }
};
function CL(e14) {
  var r11, t10 = se7.useMemo(() => yt4(e14.children, zr), [e14.children]), a11 = se7.useMemo(() => ({ data: void 0, hide: false, id: e14.id, dataKey: e14.dataKey, minPointSize: e14.minPointSize, stackId: ua(e14.stackId), maxBarSize: e14.maxBarSize, barSize: e14.barSize, type: "radialBar", angleAxisId: e14.angleAxisId, radiusAxisId: e14.radiusAxisId }), [e14.id, e14.dataKey, e14.minPointSize, e14.stackId, e14.maxBarSize, e14.barSize, e14.angleAxisId, e14.radiusAxisId]), n10 = (r11 = E17((i9) => sx(i9, e14.radiusAxisId, e14.angleAxisId, a11, t10))) !== null && r11 !== void 0 ? r11 : Sc;
  return se7.createElement(se7.Fragment, null, se7.createElement(RL, { dataKey: e14.dataKey, sectors: n10, stroke: e14.stroke, strokeWidth: e14.strokeWidth, name: e14.name, hide: e14.hide, fill: e14.fill, tooltipType: e14.tooltipType, id: e14.id }), se7.createElement(fd, oi2({}, e14, { sectors: n10 })));
}
var Ec = { angleAxisId: 0, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", background: false, cornerIsExternal: false, cornerRadius: 0, forceCornerRadius: false, hide: false, isAnimationActive: "auto", label: false, legendType: "rect", minPointSize: 0, radiusAxisId: 0, zIndex: V14.bar };
function dx(e14) {
  var { displayedData: r11, stackedData: t10, dataStartIndex: a11, stackedDomain: n10, dataKey: i9, baseValue: o15, layout: l12, radiusAxis: c16, radiusAxisTicks: s8, bandSize: u9, pos: d12, angleAxis: f10, minPointSize: p12, cx: m18, cy: h13, angleAxisTicks: y16, cells: v9, startAngle: g13, endAngle: x18 } = e14;
  return y16 == null || s8 == null ? Sc : (r11 ?? []).map((b14, P16) => {
    var A13, O12, w9, S11, I24, R13;
    if (t10 ? A13 = zo(t10[a11 + P16], n10) : (A13 = _13(b14, i9), Array.isArray(A13) || (A13 = [o15, A13])), l12 === "radial") {
      var C11, N19;
      if (S11 = (C11 = f10.scale.map(A13[0])) !== null && C11 !== void 0 ? C11 : g13, I24 = (N19 = f10.scale.map(A13[1])) !== null && N19 !== void 0 ? N19 : x18, O12 = hn3({ axis: c16, ticks: s8, bandSize: u9, offset: d12.offset, entry: b14, index: P16 }), O12 != null && I24 != null && S11 != null) {
        w9 = O12 + d12.size;
        var j15 = I24 - S11;
        if (Math.abs(p12) > 0 && Math.abs(j15) < Math.abs(p12)) {
          var D18 = he4(j15 || p12) * (Math.abs(p12) - Math.abs(j15));
          I24 += D18;
        }
        R13 = { background: { cx: m18, cy: h13, innerRadius: O12, outerRadius: w9, startAngle: g13, endAngle: x18 } };
      }
    } else if (O12 = c16.scale.map(A13[0]), w9 = c16.scale.map(A13[1]), S11 = hn3({ axis: f10, ticks: y16, bandSize: u9, offset: d12.offset, entry: b14, index: P16 }), O12 != null && w9 != null && S11 != null) {
      I24 = S11 + d12.size;
      var G20 = w9 - O12;
      if (Math.abs(p12) > 0 && Math.abs(G20) < Math.abs(p12)) {
        var H14 = he4(G20 || p12) * (Math.abs(p12) - Math.abs(G20));
        w9 += H14;
      }
    }
    return vr(vr(vr({}, b14), R13), {}, { payload: b14, value: t10 ? A13 : A13[1], cx: m18, cy: h13, innerRadius: O12, outerRadius: w9, startAngle: S11, endAngle: I24 }, v9 && v9[P16] && v9[P16].props);
  });
}
function vx(e14) {
  var r11 = L11(e14, Ec);
  return se7.createElement(Te3, { id: r11.id, type: "radialBar" }, (t10) => {
    var a11, n10, i9;
    return se7.createElement(se7.Fragment, null, se7.createElement(ai2, { type: "radialBar", id: t10, data: void 0, dataKey: r11.dataKey, hide: (a11 = r11.hide) !== null && a11 !== void 0 ? a11 : Ec.hide, angleAxisId: (n10 = r11.angleAxisId) !== null && n10 !== void 0 ? n10 : Ec.angleAxisId, radiusAxisId: (i9 = r11.radiusAxisId) !== null && i9 !== void 0 ? i9 : Ec.radiusAxisId, stackId: ua(r11.stackId), barSize: r11.barSize, minPointSize: r11.minPointSize, maxBarSize: r11.maxBarSize }), se7.createElement(IL, r11), se7.createElement(CL, oi2({}, r11, { id: t10 })));
  });
}
vx.displayName = "RadialBar";
function hx(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function yx(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? hx(Object(t10), true).forEach(function(a11) {
      jL(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : hx(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function jL(e14, r11, t10) {
  return (r11 = kL(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function kL(e14) {
  var r11 = DL(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function DL(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var TL = ["Webkit", "Moz", "O", "ms"];
var gx = (e14, r11) => {
  if (e14) {
    var t10 = e14.replace(/(\w)/, (n10) => n10.toUpperCase()), a11 = TL.reduce((n10, i9) => yx(yx({}, n10), {}, { [i9 + t10]: r11 }), {});
    return a11[e14] = r11, a11;
  }
};
var Ic = (e14) => {
  var { chartData: r11 } = e14, t10 = M12(), a11 = F10();
  return xx(() => a11 ? () => {
  } : (t10(Yl(r11)), () => {
    t10(Yl(void 0));
  }), [r11, t10, a11]), null;
};
var bx = (e14) => {
  var { computedData: r11 } = e14, t10 = M12();
  return xx(() => (t10(lh(r11)), () => {
    t10(Yl(void 0));
  }), [r11, t10]), null;
};
var LL = (e14) => e14.chartData.chartData;
var Px = () => E17(LL);
var NL = (e14) => {
  var { dataStartIndex: r11, dataEndIndex: t10 } = e14.chartData;
  return { startIndex: r11, endIndex: t10 };
};
var Ax = () => E17(NL);
var Ox = ML(() => {
});
var wx = { x: 0, y: 0, width: 0, height: 0, padding: { top: 0, right: 0, bottom: 0, left: 0 } };
var Ex = mr({ name: "brush", initialState: wx, reducers: { setBrushSettings(e14, r11) {
  return r11.payload == null ? wx : r11.payload;
} } });
var { setBrushSettings: pd } = Ex.actions;
var Sx = Ex.reducer;
function co() {
  return co = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, co.apply(null, arguments);
}
function Ix(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Ja(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Ix(Object(t10), true).forEach(function(a11) {
      aa(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Ix(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function aa(e14, r11, t10) {
  return (r11 = BL(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function BL(e14) {
  var r11 = KL(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function KL(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function YL(e14) {
  var { x: r11, y: t10, width: a11, height: n10, stroke: i9 } = e14, o15 = Math.floor(t10 + n10 / 2) - 1;
  return ue8.createElement(ue8.Fragment, null, ue8.createElement("rect", { x: r11, y: t10, width: a11, height: n10, fill: i9, stroke: "none" }), ue8.createElement("line", { x1: r11 + 1, y1: o15, x2: r11 + a11 - 1, y2: o15, fill: "none", stroke: "#fff" }), ue8.createElement("line", { x1: r11 + 1, y1: o15 + 2, x2: r11 + a11 - 1, y2: o15 + 2, fill: "none", stroke: "#fff" }));
}
function UL(e14) {
  var { travellerProps: r11, travellerType: t10 } = e14;
  return ue8.isValidElement(t10) ? ue8.cloneElement(t10, r11) : typeof t10 == "function" ? t10(r11) : ue8.createElement(YL, r11);
}
function Rx(e14) {
  if (ke5(e14) && typeof e14 == "object" && "name" in e14 && typeof e14.name == "string") return e14.name;
}
function ZL(e14, r11, t10) {
  var a11 = Rx(e14[r11]), n10 = Rx(e14[t10]);
  return "Min value: ".concat(a11, ", Max value: ").concat(n10);
}
function Cx(e14) {
  var { otherProps: r11, travellerX: t10, id: a11, onMouseEnter: n10, onMouseLeave: i9, onMouseDown: o15, onTouchStart: l12, onTravellerMoveKeyboard: c16, onFocus: s8, onBlur: u9 } = e14, { y: d12, x: f10, travellerWidth: p12, height: m18, traveller: h13, ariaLabel: y16, data: v9, startIndex: g13, endIndex: x18 } = r11, b14 = Math.max(t10, f10), P16 = Ja(Ja({}, X11(r11)), {}, { x: b14, y: d12, width: p12, height: m18 }), A13 = y16 || ZL(v9, g13, x18);
  return ue8.createElement(T14, { tabIndex: 0, role: "slider", "aria-label": A13, "aria-valuenow": t10, className: "recharts-brush-traveller", onMouseEnter: n10, onMouseLeave: i9, onMouseDown: o15, onTouchStart: l12, onKeyDown: (O12) => {
    ["ArrowLeft", "ArrowRight"].includes(O12.key) && (O12.preventDefault(), O12.stopPropagation(), c16(O12.key === "ArrowRight" ? 1 : -1, a11));
  }, onFocus: s8, onBlur: u9, style: { cursor: "col-resize" } }, ue8.createElement(UL, { travellerType: h13, travellerProps: P16 }));
}
function jx(e14) {
  var { index: r11, data: t10, tickFormatter: a11, dataKey: n10 } = e14, i9 = _13(t10[r11], n10, r11);
  return typeof a11 == "function" ? a11(i9, r11) : i9;
}
function kx(e14, r11) {
  for (var t10 = e14.length, a11 = 0, n10 = t10 - 1; n10 - a11 > 1; ) {
    var i9 = Math.floor((a11 + n10) / 2), o15 = e14[i9];
    o15 != null && o15 > r11 ? n10 = i9 : a11 = i9;
  }
  var l12 = e14[n10];
  return l12 != null && r11 >= l12 ? n10 : a11;
}
function md(e14) {
  var { startX: r11, endX: t10, scaleValues: a11, gap: n10, data: i9 } = e14, o15 = i9.length - 1, l12 = Math.min(r11, t10), c16 = Math.max(r11, t10), s8 = kx(a11, l12), u9 = kx(a11, c16);
  return { startIndex: s8 - s8 % n10, endIndex: u9 === o15 ? o15 : u9 - u9 % n10 };
}
function qL(e14) {
  var { x: r11, y: t10, width: a11, height: n10, fill: i9, stroke: o15 } = e14;
  return ue8.createElement("rect", { stroke: o15, fill: i9, x: r11, y: t10, width: a11, height: n10 });
}
function $L(e14) {
  var { startIndex: r11, endIndex: t10, y: a11, height: n10, travellerWidth: i9, stroke: o15, tickFormatter: l12, dataKey: c16, data: s8, startX: u9, endX: d12 } = e14, f10 = 5, p12 = { pointerEvents: "none", fill: o15 };
  return ue8.createElement(T14, { className: "recharts-brush-texts" }, ue8.createElement(nr, co({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(u9, d12) - f10, y: a11 + n10 / 2 }, p12), jx({ index: r11, tickFormatter: l12, dataKey: c16, data: s8 })), ue8.createElement(nr, co({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(u9, d12) + i9 + f10, y: a11 + n10 / 2 }, p12), jx({ index: t10, tickFormatter: l12, dataKey: c16, data: s8 })));
}
function JL(e14) {
  var { y: r11, height: t10, stroke: a11, travellerWidth: n10, startX: i9, endX: o15, onMouseEnter: l12, onMouseLeave: c16, onMouseDown: s8, onTouchStart: u9 } = e14, d12 = Math.min(i9, o15) + n10, f10 = Math.max(Math.abs(o15 - i9) - n10, 0);
  return ue8.createElement("rect", { className: "recharts-brush-slide", onMouseEnter: l12, onMouseLeave: c16, onMouseDown: s8, onTouchStart: u9, style: { cursor: "move" }, stroke: "none", fill: a11, fillOpacity: 0.2, x: d12, y: r11, width: f10, height: t10 });
}
function QL(e14) {
  var { x: r11, y: t10, width: a11, height: n10, data: i9, children: o15, padding: l12 } = e14, c16 = ue8.Children.count(o15) === 1;
  if (!c16) return null;
  var s8 = zL.only(o15);
  return s8 ? ue8.cloneElement(s8, { x: r11, y: t10, width: a11, height: n10, margin: l12, compact: true, data: i9 }) : null;
}
var eN = (e14) => {
  var { data: r11, startIndex: t10, endIndex: a11, x: n10, width: i9, travellerWidth: o15 } = e14;
  if (!r11 || !r11.length) return {};
  var l12 = r11.length, c16 = Sn2().domain(g6(0, l12)).range([n10, n10 + i9 - o15]), s8 = c16.domain().map((u9) => c16(u9)).filter(ke5);
  return { isTextActive: false, isSlideMoving: false, isTravellerMoving: false, isTravellerFocused: false, startX: c16(t10), endX: c16(a11), scale: c16, scaleValues: s8 };
};
var Dx = (e14) => e14.changedTouches && !!e14.changedTouches.length;
var vd = class extends WL {
  constructor(r11) {
    super(r11), aa(this, "handleDrag", (t10) => {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.state.isTravellerMoving ? this.handleTravellerMove(t10) : this.state.isSlideMoving && this.handleSlideDrag(t10);
    }), aa(this, "handleTouchMove", (t10) => {
      var a11, n10 = (a11 = t10.changedTouches) === null || a11 === void 0 ? void 0 : a11[0];
      n10 != null && this.handleDrag(n10);
    }), aa(this, "handleDragEnd", () => {
      this.setState({ isTravellerMoving: false, isSlideMoving: false }, () => {
        var { endIndex: t10, onDragEnd: a11, startIndex: n10 } = this.props;
        a11?.({ endIndex: t10, startIndex: n10 });
      }), this.detachDragEndListener();
    }), aa(this, "handleLeaveWrapper", () => {
      (this.state.isTravellerMoving || this.state.isSlideMoving) && (this.leaveTimer = window.setTimeout(this.handleDragEnd, this.props.leaveTimeOut));
    }), aa(this, "handleEnterSlideOrTraveller", () => {
      this.setState({ isTextActive: true });
    }), aa(this, "handleLeaveSlideOrTraveller", () => {
      this.setState({ isTextActive: false });
    }), aa(this, "handleSlideDragStart", (t10) => {
      var a11 = Dx(t10) ? t10.changedTouches[0] : t10;
      a11 != null && (this.setState({ isTravellerMoving: false, isSlideMoving: true, slideMoveStartX: a11.pageX }), this.attachDragEndListener());
    }), aa(this, "handleTravellerMoveKeyboard", (t10, a11) => {
      var { data: n10, gap: i9, startIndex: o15, endIndex: l12 } = this.props, { scaleValues: c16, startX: s8, endX: u9 } = this.state;
      if (c16 != null) {
        var d12 = -1;
        if (a11 === "startX" ? d12 = o15 : a11 === "endX" && (d12 = l12), !(d12 < 0 || d12 >= n10.length)) {
          var f10 = d12 + t10;
          if (!(f10 === -1 || f10 >= c16.length)) {
            var p12 = c16[f10];
            p12 != null && (a11 === "startX" && p12 >= u9 || a11 === "endX" && p12 <= s8 || this.setState({ [a11]: p12 }, () => {
              this.props.onChange(md({ startX: this.state.startX, endX: this.state.endX, data: n10, gap: i9, scaleValues: c16 }));
            }));
          }
        }
      }
    }), this.travellerDragStartHandlers = { startX: this.handleTravellerDragStart.bind(this, "startX"), endX: this.handleTravellerDragStart.bind(this, "endX") }, this.state = { brushMoveStartX: 0, movingTravellerId: void 0, endX: 0, startX: 0, slideMoveStartX: 0 };
  }
  static getDerivedStateFromProps(r11, t10) {
    var { data: a11, width: n10, x: i9, travellerWidth: o15, startIndex: l12, endIndex: c16, startIndexControlledFromProps: s8, endIndexControlledFromProps: u9 } = r11;
    if (a11 !== t10.prevData) return Ja({ prevData: a11, prevTravellerWidth: o15, prevX: i9, prevWidth: n10 }, a11 && a11.length ? eN({ data: a11, width: n10, x: i9, travellerWidth: o15, startIndex: l12, endIndex: c16 }) : { scale: void 0, scaleValues: void 0 });
    var d12 = t10.scale;
    if (d12 && (n10 !== t10.prevWidth || i9 !== t10.prevX || o15 !== t10.prevTravellerWidth)) {
      d12.range([i9, i9 + n10 - o15]);
      var f10 = d12.domain().map((p12) => d12(p12)).filter((p12) => p12 != null);
      return { prevData: a11, prevTravellerWidth: o15, prevX: i9, prevWidth: n10, startX: d12(r11.startIndex), endX: d12(r11.endIndex), scaleValues: f10 };
    }
    if (t10.scale && !t10.isSlideMoving && !t10.isTravellerMoving && !t10.isTravellerFocused && !t10.isTextActive) {
      if (s8 != null && t10.prevStartIndexControlledFromProps !== s8) return { startX: t10.scale(s8), prevStartIndexControlledFromProps: s8 };
      if (u9 != null && t10.prevEndIndexControlledFromProps !== u9) return { endX: t10.scale(u9), prevEndIndexControlledFromProps: u9 };
    }
    return null;
  }
  componentWillUnmount() {
    this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
  }
  attachDragEndListener() {
    window.addEventListener("mouseup", this.handleDragEnd, true), window.addEventListener("touchend", this.handleDragEnd, true), window.addEventListener("mousemove", this.handleDrag, true);
  }
  detachDragEndListener() {
    window.removeEventListener("mouseup", this.handleDragEnd, true), window.removeEventListener("touchend", this.handleDragEnd, true), window.removeEventListener("mousemove", this.handleDrag, true);
  }
  handleSlideDrag(r11) {
    var { slideMoveStartX: t10, startX: a11, endX: n10, scaleValues: i9 } = this.state;
    if (i9 != null) {
      var { x: o15, width: l12, travellerWidth: c16, startIndex: s8, endIndex: u9, onChange: d12, data: f10, gap: p12 } = this.props, m18 = r11.pageX - t10;
      m18 > 0 ? m18 = Math.min(m18, o15 + l12 - c16 - n10, o15 + l12 - c16 - a11) : m18 < 0 && (m18 = Math.max(m18, o15 - a11, o15 - n10));
      var h13 = md({ startX: a11 + m18, endX: n10 + m18, data: f10, gap: p12, scaleValues: i9 });
      (h13.startIndex !== s8 || h13.endIndex !== u9) && d12 && d12(h13), this.setState({ startX: a11 + m18, endX: n10 + m18, slideMoveStartX: r11.pageX });
    }
  }
  handleTravellerDragStart(r11, t10) {
    var a11 = Dx(t10) ? t10.changedTouches[0] : t10;
    a11 != null && (this.setState({ isSlideMoving: false, isTravellerMoving: true, movingTravellerId: r11, brushMoveStartX: a11.pageX }), this.attachDragEndListener());
  }
  handleTravellerMove(r11) {
    var { brushMoveStartX: t10, movingTravellerId: a11, endX: n10, startX: i9, scaleValues: o15 } = this.state;
    if (!(a11 == null || o15 == null)) {
      var l12 = this.state[a11], { x: c16, width: s8, travellerWidth: u9, onChange: d12, gap: f10, data: p12 } = this.props, m18 = { startX: this.state.startX, endX: this.state.endX, data: p12, gap: f10, scaleValues: o15 }, h13 = r11.pageX - t10;
      h13 > 0 ? h13 = Math.min(h13, c16 + s8 - u9 - l12) : h13 < 0 && (h13 = Math.max(h13, c16 - l12)), m18[a11] = l12 + h13;
      var y16 = md(m18), { startIndex: v9, endIndex: g13 } = y16, x18 = () => {
        var b14 = p12.length - 1;
        return a11 === "startX" && (n10 > i9 ? v9 % f10 === 0 : g13 % f10 === 0) || n10 < i9 && g13 === b14 || a11 === "endX" && (n10 > i9 ? g13 % f10 === 0 : v9 % f10 === 0) || n10 > i9 && g13 === b14;
      };
      this.setState({ [a11]: l12 + h13, brushMoveStartX: r11.pageX }, () => {
        d12 && x18() && d12(y16);
      });
    }
  }
  render() {
    var { data: r11, className: t10, children: a11, x: n10, y: i9, dy: o15, width: l12, height: c16, alwaysShowText: s8, fill: u9, stroke: d12, startIndex: f10, endIndex: p12, travellerWidth: m18, tickFormatter: h13, dataKey: y16, padding: v9 } = this.props, { startX: g13, endX: x18, isTextActive: b14, isSlideMoving: P16, isTravellerMoving: A13, isTravellerFocused: O12 } = this.state;
    if (!r11 || !r11.length || !k11(n10) || !k11(i9) || !k11(l12) || !k11(c16) || l12 <= 0 || c16 <= 0) return null;
    var w9 = XL("recharts-brush", t10), S11 = gx("userSelect", "none"), I24 = i9 + (o15 ?? 0);
    return ue8.createElement(T14, { className: w9, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: S11 }, ue8.createElement(qL, { x: n10, y: I24, width: l12, height: c16, fill: u9, stroke: d12 }), ue8.createElement(rp, null, ue8.createElement(QL, { x: n10, y: I24, width: l12, height: c16, data: r11, padding: v9 }, a11)), ue8.createElement(JL, { y: I24, height: c16, stroke: d12, travellerWidth: m18, startX: g13, endX: x18, onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.handleSlideDragStart, onTouchStart: this.handleSlideDragStart }), ue8.createElement(Cx, { travellerX: g13, id: "startX", otherProps: Ja(Ja({}, this.props), {}, { y: I24 }), onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.travellerDragStartHandlers.startX, onTouchStart: this.travellerDragStartHandlers.startX, onTravellerMoveKeyboard: this.handleTravellerMoveKeyboard, onFocus: () => {
      this.setState({ isTravellerFocused: true });
    }, onBlur: () => {
      this.setState({ isTravellerFocused: false });
    } }), ue8.createElement(Cx, { travellerX: x18, id: "endX", otherProps: Ja(Ja({}, this.props), {}, { y: I24 }), onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.travellerDragStartHandlers.endX, onTouchStart: this.travellerDragStartHandlers.endX, onTravellerMoveKeyboard: this.handleTravellerMoveKeyboard, onFocus: () => {
      this.setState({ isTravellerFocused: true });
    }, onBlur: () => {
      this.setState({ isTravellerFocused: false });
    } }), (b14 || P16 || A13 || O12 || s8) && ue8.createElement($L, { startIndex: f10, endIndex: p12, y: I24, height: c16, travellerWidth: m18, stroke: d12, tickFormatter: h13, dataKey: y16, data: r11, startX: g13, endX: x18 }));
  }
};
function rN(e14) {
  var r11 = M12(), t10 = Px(), a11 = Ax(), n10 = VL(Ox), i9 = e14.onChange, { startIndex: o15, endIndex: l12 } = e14;
  Tx(() => {
    r11(qi({ startIndex: o15, endIndex: l12 }));
  }, [r11, l12, o15]), fh();
  var c16 = FL((y16) => {
    if (a11 != null) {
      var { startIndex: v9, endIndex: g13 } = a11;
      (y16.startIndex !== v9 || y16.endIndex !== g13) && (n10?.(y16), i9?.(y16), r11(qi(y16)));
    }
  }, [i9, n10, r11, a11]), s8 = E17(Wt3);
  if (s8 == null || a11 == null || t10 == null || !t10.length) return null;
  var { startIndex: u9, endIndex: d12 } = a11, { x: f10, y: p12, width: m18 } = s8, h13 = { data: t10, x: f10, y: p12, width: m18, startIndex: u9, endIndex: d12, onChange: c16 };
  return ue8.createElement(vd, co({}, e14, h13, { startIndexControlledFromProps: o15 ?? void 0, endIndexControlledFromProps: l12 ?? void 0 }));
}
function tN(e14) {
  var r11 = M12();
  return Tx(() => (r11(pd(e14)), () => {
    r11(pd(null));
  }), [r11, e14]), null;
}
var aN = { height: 40, travellerWidth: 5, gap: 1, fill: "#fff", stroke: "#666", padding: { top: 1, right: 1, bottom: 1, left: 1 }, leaveTimeOut: 1e3, alwaysShowText: false };
function Lx(e14) {
  var r11 = L11(e14, aN);
  return ue8.createElement(ue8.Fragment, null, ue8.createElement(tN, { height: r11.height, x: r11.x, y: r11.y, width: r11.width, padding: r11.padding }), ue8.createElement(rN, r11));
}
Lx.displayName = "Brush";
var hd = (e14, r11) => {
  var { x: t10, y: a11 } = e14, { x: n10, y: i9 } = r11;
  return { x: Math.min(t10, n10), y: Math.min(a11, i9), width: Math.abs(n10 - t10), height: Math.abs(i9 - a11) };
};
var Nx = (e14) => {
  var { x1: r11, y1: t10, x2: a11, y2: n10 } = e14;
  return hd({ x: r11, y: t10 }, { x: a11, y: n10 });
};
function nN(e14) {
  return (e14 % 180 + 180) % 180;
}
var Mx = function(r11) {
  var { width: t10, height: a11 } = r11, n10 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i9 = nN(n10), o15 = i9 * Math.PI / 180, l12 = Math.atan(a11 / t10), c16 = o15 > l12 && o15 < Math.PI - l12 ? a11 / Math.sin(o15) : t10 / Math.cos(o15);
  return Math.abs(c16);
};
var lN = { dots: [], areas: [], lines: [] };
var _x = mr({ name: "referenceElements", initialState: lN, reducers: { addDot: (e14, r11) => {
  e14.dots.push(r11.payload);
}, removeDot: (e14, r11) => {
  var t10 = je(e14).dots.findIndex((a11) => a11 === r11.payload);
  t10 !== -1 && e14.dots.splice(t10, 1);
}, addArea: (e14, r11) => {
  e14.areas.push(r11.payload);
}, removeArea: (e14, r11) => {
  var t10 = je(e14).areas.findIndex((a11) => a11 === r11.payload);
  t10 !== -1 && e14.areas.splice(t10, 1);
}, addLine: (e14, r11) => {
  e14.lines.push(Ce4(r11.payload));
}, removeLine: (e14, r11) => {
  var t10 = je(e14).lines.findIndex((a11) => a11 === r11.payload);
  t10 !== -1 && e14.lines.splice(t10, 1);
} } });
var { addDot: Bx, removeDot: Kx, addArea: zx, removeArea: Wx, addLine: Fx, removeLine: Vx } = _x.actions;
var Xx = _x.reducer;
var Gx = cN(void 0);
var Hx = (e14) => {
  var { children: r11 } = e14, [t10] = uN("".concat(lt6("recharts"), "-clip")), a11 = Pt2();
  if (a11 == null) return null;
  var { x: n10, y: i9, width: o15, height: l12 } = a11;
  return so.createElement(Gx.Provider, { value: t10 }, so.createElement("defs", null, so.createElement("clipPath", { id: t10 }, so.createElement("rect", { x: n10, y: i9, height: l12, width: o15 }))), r11);
};
var li2 = () => sN(Gx);
var Ra = class {
  constructor(r11) {
    var { x: t10, y: a11 } = r11;
    this.xAxisScale = t10, this.yAxisScale = a11;
  }
  map(r11, t10) {
    var a11, n10, { position: i9 } = t10;
    return { x: (a11 = this.xAxisScale.map(r11.x, { position: i9 })) !== null && a11 !== void 0 ? a11 : 0, y: (n10 = this.yAxisScale.map(r11.y, { position: i9 })) !== null && n10 !== void 0 ? n10 : 0 };
  }
  mapWithFallback(r11, t10) {
    var a11, n10, { position: i9, fallback: o15 } = t10, l12, c16;
    return o15 === "rangeMin" ? l12 = this.yAxisScale.rangeMin() : o15 === "rangeMax" ? l12 = this.yAxisScale.rangeMax() : l12 = 0, o15 === "rangeMin" ? c16 = this.xAxisScale.rangeMin() : o15 === "rangeMax" ? c16 = this.xAxisScale.rangeMax() : c16 = 0, { x: (a11 = this.xAxisScale.map(r11.x, { position: i9 })) !== null && a11 !== void 0 ? a11 : c16, y: (n10 = this.yAxisScale.map(r11.y, { position: i9 })) !== null && n10 !== void 0 ? n10 : l12 };
  }
  isInRange(r11) {
    var { x: t10, y: a11 } = r11, n10 = t10 == null || this.xAxisScale.isInRange(t10), i9 = a11 == null || this.yAxisScale.isInRange(a11);
    return n10 && i9;
  }
};
function Yx(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Ux(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Yx(Object(t10), true).forEach(function(a11) {
      dN(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Yx(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function dN(e14, r11, t10) {
  return (r11 = fN(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function fN(e14) {
  var r11 = pN(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function pN(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Rc() {
  return Rc = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Rc.apply(null, arguments);
}
var hN = (e14, r11) => {
  var t10;
  if (Ar2.isValidElement(e14)) t10 = Ar2.cloneElement(e14, r11);
  else if (typeof e14 == "function") t10 = e14(r11);
  else {
    if (!W15(r11.x1) || !W15(r11.y1) || !W15(r11.x2) || !W15(r11.y2)) return null;
    t10 = Ar2.createElement("line", Rc({}, r11, { className: "recharts-reference-line-line" }));
  }
  return t10;
};
var yN = (e14, r11, t10, a11, n10, i9) => {
  var { x: o15, width: l12 } = i9, c16 = n10.map(e14, { position: t10 });
  if (!W15(c16) || r11 === "discard" && !n10.isInRange(c16)) return null;
  var s8 = [{ x: o15 + l12, y: c16 }, { x: o15, y: c16 }];
  return a11 === "left" ? s8.reverse() : s8;
};
var gN = (e14, r11, t10, a11, n10, i9) => {
  var { y: o15, height: l12 } = i9, c16 = n10.map(e14, { position: t10 });
  if (!W15(c16) || r11 === "discard" && !n10.isInRange(c16)) return null;
  var s8 = [{ x: c16, y: o15 + l12 }, { x: c16, y: o15 }];
  return a11 === "top" ? s8.reverse() : s8;
};
var xN = (e14, r11, t10, a11) => {
  var n10 = [a11.mapWithFallback(e14[0], { position: t10, fallback: "rangeMin" }), a11.mapWithFallback(e14[1], { position: t10, fallback: "rangeMax" })];
  return r11 === "discard" && n10.some((i9) => !a11.isInRange(i9)) ? null : n10;
};
var bN = (e14, r11, t10, a11, n10, i9, o15) => {
  var { x: l12, y: c16, segment: s8, ifOverflow: u9 } = o15, d12 = be8(l12), f10 = be8(c16);
  return f10 ? yN(c16, u9, a11, i9, r11, t10) : d12 ? gN(l12, u9, a11, n10, e14, t10) : s8 != null && s8.length === 2 ? xN(s8, u9, a11, new Ra({ x: e14, y: r11 })) : null;
};
function PN(e14) {
  var r11 = M12();
  return mN(() => (r11(Fx(e14)), () => {
    r11(Vx(e14));
  })), null;
}
function AN(e14) {
  var { xAxisId: r11, yAxisId: t10, shape: a11, className: n10, ifOverflow: i9 } = e14, o15 = F10(), l12 = li2(), c16 = E17((O12) => Hr(O12, r11)), s8 = E17((O12) => Yr2(O12, t10)), u9 = E17((O12) => ur(O12, "xAxis", r11, o15)), d12 = E17((O12) => ur(O12, "yAxis", t10, o15)), f10 = st4();
  if (!l12 || !f10 || c16 == null || s8 == null || u9 == null || d12 == null) return null;
  var p12 = bN(u9, d12, f10, e14.position, c16.orientation, s8.orientation, e14);
  if (!p12) return null;
  var m18 = p12[0], h13 = p12[1];
  if (m18 == null || h13 == null) return null;
  var { x: y16, y: v9 } = m18, { x: g13, y: x18 } = h13, b14 = i9 === "hidden" ? "url(#".concat(l12, ")") : void 0, P16 = Ux(Ux({ clipPath: b14 }, re7(e14)), {}, { x1: y16, y1: v9, x2: g13, y2: x18 }), A13 = Nx({ x1: y16, y1: v9, x2: g13, y2: x18 });
  return Ar2.createElement(U10, { zIndex: e14.zIndex }, Ar2.createElement(T14, { className: vN("recharts-reference-line", n10) }, hN(a11, P16), Ar2.createElement(ba, Rc({}, A13, { lowerWidth: A13.width, upperWidth: A13.width }), Ar2.createElement(Pa, { label: e14.label }), e14.children)));
}
var ON = { ifOverflow: "discard", xAxisId: 0, yAxisId: 0, fill: "none", label: false, stroke: "#ccc", fillOpacity: 1, strokeWidth: 1, position: "middle", zIndex: V14.line };
function Zx(e14) {
  var r11 = L11(e14, ON);
  return Ar2.createElement(Ar2.Fragment, null, Ar2.createElement(PN, { yAxisId: r11.yAxisId, xAxisId: r11.xAxisId, ifOverflow: r11.ifOverflow, x: r11.x, y: r11.y, segment: r11.segment }), Ar2.createElement(AN, r11));
}
Zx.displayName = "ReferenceLine";
function qx(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function $x(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? qx(Object(t10), true).forEach(function(a11) {
      wN(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : qx(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function wN(e14, r11, t10) {
  return (r11 = EN(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function EN(e14) {
  var r11 = SN(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function SN(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function gd() {
  return gd = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, gd.apply(null, arguments);
}
var CN = (e14, r11, t10, a11, n10) => {
  var i9 = be8(e14), o15 = be8(r11), l12 = F10(), c16 = E17((f10) => ur(f10, "xAxis", t10, l12)), s8 = E17((f10) => ur(f10, "yAxis", a11, l12));
  if (!i9 || !o15 || c16 == null || s8 == null) return null;
  var u9 = new Ra({ x: c16, y: s8 }), d12 = u9.map({ x: e14, y: r11 }, { position: "middle" });
  return n10 === "discard" && !u9.isInRange(d12) ? null : d12;
};
function jN(e14) {
  var r11 = M12();
  return IN(() => (r11(Bx(e14)), () => {
    r11(Kx(e14));
  })), null;
}
var kN = (e14, r11) => {
  var t10;
  return Or.isValidElement(e14) ? t10 = Or.cloneElement(e14, r11) : typeof e14 == "function" ? t10 = e14(r11) : t10 = Or.createElement(ra, gd({}, r11, { cx: r11.cx, cy: r11.cy, className: "recharts-reference-dot-dot" })), t10;
};
function DN(e14) {
  var { x: r11, y: t10, r: a11 } = e14, n10 = li2(), i9 = CN(r11, t10, e14.xAxisId, e14.yAxisId, e14.ifOverflow);
  if (!i9) return null;
  var { x: o15, y: l12 } = i9, { shape: c16, className: s8, ifOverflow: u9 } = e14, d12 = u9 === "hidden" ? "url(#".concat(n10, ")") : void 0, f10 = $x($x({ clipPath: d12 }, re7(e14)), {}, { cx: o15 ?? void 0, cy: l12 ?? void 0 });
  return Or.createElement(U10, { zIndex: e14.zIndex }, Or.createElement(T14, { className: RN("recharts-reference-dot", s8) }, kN(c16, f10), Or.createElement(ba, { x: o15 - a11, y: l12 - a11, width: 2 * a11, height: 2 * a11, upperWidth: 2 * a11, lowerWidth: 2 * a11 }, Or.createElement(Pa, { label: e14.label }), e14.children)));
}
var TN = { ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, label: false, fill: "#fff", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1, zIndex: V14.scatter };
function Jx(e14) {
  var r11 = L11(e14, TN), { x: t10, y: a11, r: n10, ifOverflow: i9, yAxisId: o15, xAxisId: l12 } = r11;
  return Or.createElement(Or.Fragment, null, Or.createElement(jN, { y: a11, x: t10, r: n10, yAxisId: o15, xAxisId: l12, ifOverflow: i9 }), Or.createElement(DN, r11));
}
Jx.displayName = "ReferenceDot";
function Qx(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function eb(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Qx(Object(t10), true).forEach(function(a11) {
      LN(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Qx(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function LN(e14, r11, t10) {
  return (r11 = NN(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function NN(e14) {
  var r11 = MN(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function MN(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Cc() {
  return Cc = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Cc.apply(null, arguments);
}
var KN = (e14, r11, t10, a11, n10, i9, o15) => {
  var l12, c16, s8, u9, { x1: d12, x2: f10, y1: p12, y2: m18 } = o15;
  if (n10 == null || i9 == null) return null;
  var h13 = new Ra({ x: n10, y: i9 }), y16 = { x: e14 ? (l12 = n10.map(d12, { position: "start" })) !== null && l12 !== void 0 ? l12 : null : n10.rangeMin(), y: t10 ? (c16 = i9.map(p12, { position: "start" })) !== null && c16 !== void 0 ? c16 : null : i9.rangeMin() }, v9 = { x: r11 ? (s8 = n10.map(f10, { position: "end" })) !== null && s8 !== void 0 ? s8 : null : n10.rangeMax(), y: a11 ? (u9 = i9.map(m18, { position: "end" })) !== null && u9 !== void 0 ? u9 : null : i9.rangeMax() };
  return o15.ifOverflow === "discard" && (!h13.isInRange(y16) || !h13.isInRange(v9)) ? null : hd(y16, v9);
};
var zN = (e14, r11) => {
  var t10;
  return wr3.isValidElement(e14) ? t10 = wr3.cloneElement(e14, r11) : typeof e14 == "function" ? t10 = e14(r11) : t10 = wr3.createElement(_r, Cc({}, r11, { className: "recharts-reference-area-rect" })), t10;
};
function WN(e14) {
  var r11 = M12();
  return _N(() => (r11(zx(e14)), () => {
    r11(Wx(e14));
  })), null;
}
function FN(e14) {
  var { x1: r11, x2: t10, y1: a11, y2: n10, className: i9, shape: o15, xAxisId: l12, yAxisId: c16 } = e14, s8 = li2(), u9 = F10(), d12 = E17((b14) => ur(b14, "xAxis", l12, u9)), f10 = E17((b14) => ur(b14, "yAxis", c16, u9));
  if (d12 == null || f10 == null) return null;
  var p12 = be8(r11), m18 = be8(t10), h13 = be8(a11), y16 = be8(n10);
  if (!p12 && !m18 && !h13 && !y16 && !o15) return null;
  var v9 = KN(p12, m18, h13, y16, d12, f10, e14);
  if (!v9 && !o15) return null;
  var g13 = e14.ifOverflow === "hidden", x18 = g13 ? "url(#".concat(s8, ")") : void 0;
  return wr3.createElement(U10, { zIndex: e14.zIndex }, wr3.createElement(T14, { className: BN("recharts-reference-area", i9) }, zN(o15, eb(eb({ clipPath: x18 }, re7(e14)), v9)), v9 != null && wr3.createElement(ba, Cc({}, v9, { lowerWidth: v9.width, upperWidth: v9.width }), wr3.createElement(Pa, { label: e14.label }), e14.children)));
}
var VN = { ifOverflow: "discard", xAxisId: 0, yAxisId: 0, radius: 0, fill: "#ccc", label: false, fillOpacity: 0.5, stroke: "none", strokeWidth: 1, zIndex: V14.area };
function rb(e14) {
  var r11 = L11(e14, VN);
  return wr3.createElement(wr3.Fragment, null, wr3.createElement(WN, { yAxisId: r11.yAxisId, xAxisId: r11.xAxisId, ifOverflow: r11.ifOverflow, x1: r11.x1, x2: r11.x2, y1: r11.y1, y2: r11.y2 }), wr3.createElement(FN, r11));
}
rb.displayName = "ReferenceArea";
function jc(e14, r11) {
  if (r11 < 1) return [];
  if (r11 === 1) return e14;
  for (var t10 = [], a11 = 0; a11 < e14.length; a11 += r11) {
    var n10 = e14[a11];
    n10 !== void 0 && t10.push(n10);
  }
  return t10;
}
function tb(e14, r11, t10) {
  var a11 = { width: e14.width + r11.width, height: e14.height + r11.height };
  return Mx(a11, t10);
}
function ab(e14, r11, t10) {
  var a11 = t10 === "width", { x: n10, y: i9, width: o15, height: l12 } = e14;
  return r11 === 1 ? { start: a11 ? n10 : i9, end: a11 ? n10 + o15 : i9 + l12 } : { start: a11 ? n10 + o15 : i9 + l12, end: a11 ? n10 : i9 };
}
function Qa(e14, r11, t10, a11, n10) {
  if (e14 * r11 < e14 * a11 || e14 * r11 > e14 * n10) return false;
  var i9 = t10();
  return e14 * (r11 - e14 * i9 / 2 - a11) >= 0 && e14 * (r11 + e14 * i9 / 2 - n10) <= 0;
}
function nb(e14, r11) {
  return jc(e14, r11 + 1);
}
function ib(e14, r11, t10, a11, n10) {
  for (var i9 = (a11 || []).slice(), { start: o15, end: l12 } = r11, c16 = 0, s8 = 1, u9 = o15, d12 = function() {
    var m18 = a11?.[c16];
    if (m18 === void 0) return { v: jc(a11, s8) };
    var h13 = c16, y16, v9 = () => (y16 === void 0 && (y16 = t10(m18, h13)), y16), g13 = m18.coordinate, x18 = c16 === 0 || Qa(e14, g13, v9, u9, l12);
    x18 || (c16 = 0, u9 = o15, s8 += 1), x18 && (u9 = g13 + e14 * (v9() / 2 + n10), c16 += s8);
  }, f10; s8 <= i9.length; ) if (f10 = d12(), f10) return f10.v;
  return [];
}
function ob(e14, r11, t10, a11, n10) {
  var i9 = (a11 || []).slice(), o15 = i9.length;
  if (o15 === 0) return [];
  for (var { start: l12, end: c16 } = r11, s8 = 1; s8 <= o15; s8++) {
    for (var u9 = (o15 - 1) % s8, d12 = l12, f10 = true, p12 = function() {
      var b14 = a11[h13];
      if (b14 == null) return 0;
      var P16 = h13, A13, O12 = () => (A13 === void 0 && (A13 = t10(b14, P16)), A13), w9 = b14.coordinate, S11 = h13 === u9 || Qa(e14, w9, O12, d12, c16);
      if (!S11) return f10 = false, 1;
      S11 && (d12 = w9 + e14 * (O12() / 2 + n10));
    }, m18, h13 = u9; h13 < o15 && (m18 = p12(), !(m18 !== 0 && m18 === 1)); h13 += s8) ;
    if (f10) {
      for (var y16 = [], v9 = u9; v9 < o15; v9 += s8) {
        var g13 = a11[v9];
        g13 != null && y16.push(g13);
      }
      return y16;
    }
  }
  return [];
}
function lb(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function hr3(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? lb(Object(t10), true).forEach(function(a11) {
      XN(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : lb(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function XN(e14, r11, t10) {
  return (r11 = GN(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function GN(e14) {
  var r11 = HN(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function HN(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function YN(e14, r11, t10, a11, n10) {
  for (var i9 = (a11 || []).slice(), o15 = i9.length, { start: l12 } = r11, { end: c16 } = r11, s8 = function(f10) {
    var p12 = i9[f10];
    if (p12 == null) return 1;
    var m18 = p12, h13, y16 = () => (h13 === void 0 && (h13 = t10(p12, f10)), h13);
    if (f10 === o15 - 1) {
      var v9 = e14 * (m18.coordinate + e14 * y16() / 2 - c16);
      i9[f10] = m18 = hr3(hr3({}, m18), {}, { tickCoord: v9 > 0 ? m18.coordinate - v9 * e14 : m18.coordinate });
    } else i9[f10] = m18 = hr3(hr3({}, m18), {}, { tickCoord: m18.coordinate });
    if (m18.tickCoord != null) {
      var g13 = Qa(e14, m18.tickCoord, y16, l12, c16);
      g13 && (c16 = m18.tickCoord - e14 * (y16() / 2 + n10), i9[f10] = hr3(hr3({}, m18), {}, { isShow: true }));
    }
  }, u9 = o15 - 1; u9 >= 0; u9--) s8(u9);
  return i9;
}
function UN(e14, r11, t10, a11, n10, i9) {
  var o15 = (a11 || []).slice(), l12 = o15.length, { start: c16, end: s8 } = r11;
  if (i9) {
    var u9 = a11[l12 - 1];
    if (u9 != null) {
      var d12 = t10(u9, l12 - 1), f10 = e14 * (u9.coordinate + e14 * d12 / 2 - s8);
      if (o15[l12 - 1] = u9 = hr3(hr3({}, u9), {}, { tickCoord: f10 > 0 ? u9.coordinate - f10 * e14 : u9.coordinate }), u9.tickCoord != null) {
        var p12 = Qa(e14, u9.tickCoord, () => d12, c16, s8);
        p12 && (s8 = u9.tickCoord - e14 * (d12 / 2 + n10), o15[l12 - 1] = hr3(hr3({}, u9), {}, { isShow: true }));
      }
    }
  }
  for (var m18 = i9 ? l12 - 1 : l12, h13 = function(g13) {
    var x18 = o15[g13];
    if (x18 == null) return 1;
    var b14 = x18, P16, A13 = () => (P16 === void 0 && (P16 = t10(x18, g13)), P16);
    if (g13 === 0) {
      var O12 = e14 * (b14.coordinate - e14 * A13() / 2 - c16);
      o15[g13] = b14 = hr3(hr3({}, b14), {}, { tickCoord: O12 < 0 ? b14.coordinate - O12 * e14 : b14.coordinate });
    } else o15[g13] = b14 = hr3(hr3({}, b14), {}, { tickCoord: b14.coordinate });
    if (b14.tickCoord != null) {
      var w9 = Qa(e14, b14.tickCoord, A13, c16, s8);
      w9 && (c16 = b14.tickCoord + e14 * (A13() / 2 + n10), o15[g13] = hr3(hr3({}, b14), {}, { isShow: true }));
    }
  }, y16 = 0; y16 < m18; y16++) h13(y16);
  return o15;
}
function uo(e14, r11, t10) {
  var { tick: a11, ticks: n10, viewBox: i9, minTickGap: o15, orientation: l12, interval: c16, tickFormatter: s8, unit: u9, angle: d12 } = e14;
  if (!n10 || !n10.length || !a11) return [];
  if (k11(c16) || Pr.isSsr) {
    var f10;
    return (f10 = nb(n10, k11(c16) ? c16 : 0)) !== null && f10 !== void 0 ? f10 : [];
  }
  var p12 = [], m18 = l12 === "top" || l12 === "bottom" ? "width" : "height", h13 = u9 && m18 === "width" ? Jt2(u9, { fontSize: r11, letterSpacing: t10 }) : { width: 0, height: 0 }, y16 = (P16, A13) => {
    var O12 = typeof s8 == "function" ? s8(P16.value, A13) : P16.value;
    return m18 === "width" ? tb(Jt2(O12, { fontSize: r11, letterSpacing: t10 }), h13, d12) : Jt2(O12, { fontSize: r11, letterSpacing: t10 })[m18];
  }, v9 = n10[0], g13 = n10[1], x18 = n10.length >= 2 && v9 != null && g13 != null ? he4(g13.coordinate - v9.coordinate) : 1, b14 = ab(i9, x18, m18);
  return c16 === "equidistantPreserveStart" ? ib(x18, b14, y16, n10, o15) : c16 === "equidistantPreserveEnd" ? ob(x18, b14, y16, n10, o15) : (c16 === "preserveStart" || c16 === "preserveStartEnd" ? p12 = UN(x18, b14, y16, n10, o15, c16 === "preserveStartEnd") : p12 = YN(x18, b14, y16, n10, o15), p12.filter((P16) => P16.isShow));
}
var cb = (e14) => {
  var { ticks: r11, label: t10, labelGapWithTick: a11 = 5, tickSize: n10 = 0, tickMargin: i9 = 0 } = e14, o15 = 0;
  if (r11) {
    Array.from(r11).forEach((u9) => {
      if (u9) {
        var d12 = u9.getBoundingClientRect();
        d12.width > o15 && (o15 = d12.width);
      }
    });
    var l12 = t10 ? t10.getBoundingClientRect().width : 0, c16 = n10 + i9, s8 = o15 + c16 + l12 + (t10 ? a11 : 0);
    return Math.round(s8);
  }
  return 0;
};
var $N = { xAxis: {}, yAxis: {} };
var sb = mr({ name: "renderedTicks", initialState: $N, reducers: { setRenderedTicks: (e14, r11) => {
  var { axisType: t10, axisId: a11, ticks: n10 } = r11.payload;
  e14[t10][a11] = Ce4(n10);
}, removeRenderedTicks: (e14, r11) => {
  var { axisType: t10, axisId: a11 } = r11.payload;
  delete e14[t10][a11];
} } });
var { setRenderedTicks: ub, removeRenderedTicks: db } = sb.actions;
var fb = sb.reducer;
var JN = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
function QN(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = e1(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function e1(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function en3() {
  return en3 = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, en3.apply(null, arguments);
}
function pb(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Le5(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? pb(Object(t10), true).forEach(function(a11) {
      r1(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : pb(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function r1(e14, r11, t10) {
  return (r11 = t1(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function t1(e14) {
  var r11 = a1(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function a1(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var tt6 = { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd", zIndex: V14.axis };
function c1(e14) {
  var { x: r11, y: t10, width: a11, height: n10, orientation: i9, mirror: o15, axisLine: l12, otherSvgProps: c16 } = e14;
  if (!l12) return null;
  var s8 = Le5(Le5(Le5({}, c16), X11(l12)), {}, { fill: "none" });
  if (i9 === "top" || i9 === "bottom") {
    var u9 = +(i9 === "top" && !o15 || i9 === "bottom" && o15);
    s8 = Le5(Le5({}, s8), {}, { x1: r11, y1: t10 + u9 * n10, x2: r11 + a11, y2: t10 + u9 * n10 });
  } else {
    var d12 = +(i9 === "left" && !o15 || i9 === "right" && o15);
    s8 = Le5(Le5({}, s8), {}, { x1: r11 + d12 * a11, y1: t10, x2: r11 + d12 * a11, y2: t10 + n10 });
  }
  return Oe5.createElement("line", en3({}, s8, { className: fo("recharts-cartesian-axis-line", y(l12, "className")) }));
}
function s1(e14, r11, t10, a11, n10, i9, o15, l12, c16) {
  var s8, u9, d12, f10, p12, m18, h13 = l12 ? -1 : 1, y16 = e14.tickSize || o15, v9 = k11(e14.tickCoord) ? e14.tickCoord : e14.coordinate;
  switch (i9) {
    case "top":
      s8 = u9 = e14.coordinate, f10 = t10 + +!l12 * n10, d12 = f10 - h13 * y16, m18 = d12 - h13 * c16, p12 = v9;
      break;
    case "left":
      d12 = f10 = e14.coordinate, u9 = r11 + +!l12 * a11, s8 = u9 - h13 * y16, p12 = s8 - h13 * c16, m18 = v9;
      break;
    case "right":
      d12 = f10 = e14.coordinate, u9 = r11 + +l12 * a11, s8 = u9 + h13 * y16, p12 = s8 + h13 * c16, m18 = v9;
      break;
    default:
      s8 = u9 = e14.coordinate, f10 = t10 + +l12 * n10, d12 = f10 + h13 * y16, m18 = d12 + h13 * c16, p12 = v9;
      break;
  }
  return { line: { x1: s8, y1: d12, x2: u9, y2: f10 }, tick: { x: p12, y: m18 } };
}
function u1(e14, r11) {
  switch (e14) {
    case "left":
      return r11 ? "start" : "end";
    case "right":
      return r11 ? "end" : "start";
    default:
      return "middle";
  }
}
function d1(e14, r11) {
  switch (e14) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return r11 ? "start" : "end";
    default:
      return r11 ? "end" : "start";
  }
}
function f1(e14) {
  var { option: r11, tickProps: t10, value: a11 } = e14, n10, i9 = fo(t10.className, "recharts-cartesian-axis-tick-value");
  if (Oe5.isValidElement(r11)) n10 = Oe5.cloneElement(r11, Le5(Le5({}, t10), {}, { className: i9 }));
  else if (typeof r11 == "function") n10 = r11(Le5(Le5({}, t10), {}, { className: i9 }));
  else {
    var o15 = "recharts-cartesian-axis-tick-value";
    typeof r11 != "boolean" && (o15 = fo(o15, Oa(r11))), n10 = Oe5.createElement(nr, en3({}, t10, { className: o15 }), a11);
  }
  return n10;
}
function p1(e14) {
  var { ticks: r11, axisType: t10, axisId: a11 } = e14, n10 = M12();
  return l1(() => {
    if (a11 == null || t10 == null) return ye6;
    var i9 = r11.map((o15) => ({ value: o15.value, coordinate: o15.coordinate, offset: o15.offset, index: o15.index }));
    return n10(ub({ ticks: i9, axisId: a11, axisType: t10 })), () => {
      n10(db({ axisId: a11, axisType: t10 }));
    };
  }, [n10, r11, a11, t10]), null;
}
var m1 = vb((e14, r11) => {
  var { ticks: t10 = [], tick: a11, tickLine: n10, stroke: i9, tickFormatter: o15, unit: l12, padding: c16, tickTextProps: s8, orientation: u9, mirror: d12, x: f10, y: p12, width: m18, height: h13, tickSize: y16, tickMargin: v9, fontSize: g13, letterSpacing: x18, getTicksConfig: b14, events: P16, axisType: A13, axisId: O12 } = e14, w9 = uo(Le5(Le5({}, b14), {}, { ticks: t10 }), g13, x18), S11 = X11(b14), I24 = Ee6(a11), R13 = ql(S11.textAnchor) ? S11.textAnchor : u1(u9, d12), C11 = d1(u9, d12), N19 = {};
  typeof n10 == "object" && (N19 = n10);
  var j15 = Le5(Le5({}, S11), {}, { fill: "none" }, N19), D18 = w9.map((ie6) => Le5({ entry: ie6 }, s1(ie6, f10, p12, m18, h13, u9, y16, d12, v9))), G20 = D18.map((ie6) => {
    var { entry: Y10, line: oe8 } = ie6;
    return Oe5.createElement(T14, { className: "recharts-cartesian-axis-tick", key: "tick-".concat(Y10.value, "-").concat(Y10.coordinate, "-").concat(Y10.tickCoord) }, n10 && Oe5.createElement("line", en3({}, j15, oe8, { className: fo("recharts-cartesian-axis-tick-line", y(n10, "className")) })));
  }), H14 = D18.map((ie6, Y10) => {
    var oe8, ae11, { entry: fe9, tick: Me5 } = ie6, Pe5 = Le5(Le5(Le5(Le5({ verticalAnchor: C11 }, S11), {}, { textAnchor: R13, stroke: "none", fill: i9 }, Me5), {}, { index: Y10, payload: fe9, visibleTicksCount: w9.length, tickFormatter: o15, padding: c16 }, s8), {}, { angle: (oe8 = (ae11 = s8?.angle) !== null && ae11 !== void 0 ? ae11 : S11.angle) !== null && oe8 !== void 0 ? oe8 : 0 }), Fe5 = Le5(Le5({}, Pe5), I24);
    return Oe5.createElement(T14, en3({ className: "recharts-cartesian-axis-tick-label", key: "tick-label-".concat(fe9.value, "-").concat(fe9.coordinate, "-").concat(fe9.tickCoord) }, Ve3(P16, fe9, Y10)), a11 && Oe5.createElement(f1, { option: a11, tickProps: Fe5, value: "".concat(typeof o15 == "function" ? o15(fe9.value, Y10) : fe9.value).concat(l12 || "") }));
  });
  return Oe5.createElement("g", { className: "recharts-cartesian-axis-ticks recharts-".concat(A13, "-ticks") }, Oe5.createElement(p1, { ticks: w9, axisId: O12, axisType: A13 }), H14.length > 0 && Oe5.createElement(U10, { zIndex: V14.label }, Oe5.createElement("g", { className: "recharts-cartesian-axis-tick-labels recharts-".concat(A13, "-tick-labels"), ref: r11 }, H14)), G20.length > 0 && Oe5.createElement("g", { className: "recharts-cartesian-axis-tick-lines recharts-".concat(A13, "-tick-lines") }, G20));
});
var v1 = vb((e14, r11) => {
  var { axisLine: t10, width: a11, height: n10, className: i9, hide: o15, ticks: l12, axisType: c16, axisId: s8 } = e14, u9 = QN(e14, JN), [d12, f10] = mb(""), [p12, m18] = mb(""), h13 = n1(null);
  o1(r11, () => ({ getCalculatedWidth: () => {
    var v9;
    return cb({ ticks: h13.current, label: (v9 = e14.labelRef) === null || v9 === void 0 ? void 0 : v9.current, labelGapWithTick: 5, tickSize: e14.tickSize, tickMargin: e14.tickMargin });
  } }));
  var y16 = i1((v9) => {
    if (v9) {
      var g13 = v9.getElementsByClassName("recharts-cartesian-axis-tick-value");
      h13.current = g13;
      var x18 = g13[0];
      if (x18) {
        var b14 = window.getComputedStyle(x18), P16 = b14.fontSize, A13 = b14.letterSpacing;
        (P16 !== d12 || A13 !== p12) && (f10(P16), m18(A13));
      }
    }
  }, [d12, p12]);
  return o15 || a11 != null && a11 <= 0 || n10 != null && n10 <= 0 ? null : Oe5.createElement(U10, { zIndex: e14.zIndex }, Oe5.createElement(T14, { className: fo("recharts-cartesian-axis", i9) }, Oe5.createElement(c1, { x: e14.x, y: e14.y, width: a11, height: n10, orientation: e14.orientation, mirror: e14.mirror, axisLine: t10, otherSvgProps: X11(e14) }), Oe5.createElement(m1, { ref: y16, axisType: c16, events: u9, fontSize: d12, getTicksConfig: e14, height: e14.height, letterSpacing: p12, mirror: e14.mirror, orientation: e14.orientation, padding: e14.padding, stroke: e14.stroke, tick: e14.tick, tickFormatter: e14.tickFormatter, tickLine: e14.tickLine, tickMargin: e14.tickMargin, tickSize: e14.tickSize, tickTextProps: e14.tickTextProps, ticks: l12, unit: e14.unit, width: e14.width, x: e14.x, y: e14.y, axisId: s8 }), Oe5.createElement(ba, { x: e14.x, y: e14.y, width: e14.width, height: e14.height, lowerWidth: e14.width, upperWidth: e14.width }, Oe5.createElement(Pa, { label: e14.label, labelRef: e14.labelRef }), e14.children)));
});
var ci2 = Oe5.forwardRef((e14, r11) => {
  var t10 = L11(e14, tt6);
  return Oe5.createElement(v1, en3({}, t10, { ref: r11 }));
});
ci2.displayName = "CartesianAxis";
var h1 = ["x1", "y1", "x2", "y2", "key"];
var y1 = ["offset"];
var g1 = ["xAxisId", "yAxisId"];
var x1 = ["xAxisId", "yAxisId"];
function yb(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function yr3(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? yb(Object(t10), true).forEach(function(a11) {
      b1(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : yb(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function b1(e14, r11, t10) {
  return (r11 = P1(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function P1(e14) {
  var r11 = A1(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function A1(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function rn5() {
  return rn5 = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, rn5.apply(null, arguments);
}
function kc(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = O1(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function O1(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var w1 = (e14) => {
  var { fill: r11 } = e14;
  if (!r11 || r11 === "none") return null;
  var { fillOpacity: t10, x: a11, y: n10, width: i9, height: o15, ry: l12 } = e14;
  return Ne7.createElement("rect", { x: a11, y: n10, ry: l12, width: i9, height: o15, stroke: "none", fill: r11, fillOpacity: t10, className: "recharts-cartesian-grid-bg" });
};
function gb(e14) {
  var { option: r11, lineItemProps: t10 } = e14, a11;
  if (Ne7.isValidElement(r11)) a11 = Ne7.cloneElement(r11, t10);
  else if (typeof r11 == "function") a11 = r11(t10);
  else {
    var n10, { x1: i9, y1: o15, x2: l12, y2: c16, key: s8 } = t10, u9 = kc(t10, h1), d12 = (n10 = X11(u9)) !== null && n10 !== void 0 ? n10 : {}, { offset: f10 } = d12, p12 = kc(d12, y1);
    a11 = Ne7.createElement("line", rn5({}, p12, { x1: i9, y1: o15, x2: l12, y2: c16, fill: "none", key: s8 }));
  }
  return a11;
}
function E1(e14) {
  var { x: r11, width: t10, horizontal: a11 = true, horizontalPoints: n10 } = e14;
  if (!a11 || !n10 || !n10.length) return null;
  var { xAxisId: i9, yAxisId: o15 } = e14, l12 = kc(e14, g1), c16 = n10.map((s8, u9) => {
    var d12 = yr3(yr3({}, l12), {}, { x1: r11, y1: s8, x2: r11 + t10, y2: s8, key: "line-".concat(u9), index: u9 });
    return Ne7.createElement(gb, { key: "line-".concat(u9), option: a11, lineItemProps: d12 });
  });
  return Ne7.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, c16);
}
function S1(e14) {
  var { y: r11, height: t10, vertical: a11 = true, verticalPoints: n10 } = e14;
  if (!a11 || !n10 || !n10.length) return null;
  var { xAxisId: i9, yAxisId: o15 } = e14, l12 = kc(e14, x1), c16 = n10.map((s8, u9) => {
    var d12 = yr3(yr3({}, l12), {}, { x1: s8, y1: r11, x2: s8, y2: r11 + t10, key: "line-".concat(u9), index: u9 });
    return Ne7.createElement(gb, { option: a11, lineItemProps: d12, key: "line-".concat(u9) });
  });
  return Ne7.createElement("g", { className: "recharts-cartesian-grid-vertical" }, c16);
}
function I1(e14) {
  var { horizontalFill: r11, fillOpacity: t10, x: a11, y: n10, width: i9, height: o15, horizontalPoints: l12, horizontal: c16 = true } = e14;
  if (!c16 || !r11 || !r11.length || l12 == null) return null;
  var s8 = l12.map((d12) => Math.round(d12 + n10 - n10)).sort((d12, f10) => d12 - f10);
  n10 !== s8[0] && s8.unshift(0);
  var u9 = s8.map((d12, f10) => {
    var p12 = s8[f10 + 1], m18 = p12 == null, h13 = m18 ? n10 + o15 - d12 : p12 - d12;
    if (h13 <= 0) return null;
    var y16 = f10 % r11.length;
    return Ne7.createElement("rect", { key: "react-".concat(f10), y: d12, x: a11, height: h13, width: i9, stroke: "none", fill: r11[y16], fillOpacity: t10, className: "recharts-cartesian-grid-bg" });
  });
  return Ne7.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, u9);
}
function R1(e14) {
  var { vertical: r11 = true, verticalFill: t10, fillOpacity: a11, x: n10, y: i9, width: o15, height: l12, verticalPoints: c16 } = e14;
  if (!r11 || !t10 || !t10.length) return null;
  var s8 = c16.map((d12) => Math.round(d12 + n10 - n10)).sort((d12, f10) => d12 - f10);
  n10 !== s8[0] && s8.unshift(0);
  var u9 = s8.map((d12, f10) => {
    var p12 = s8[f10 + 1], m18 = p12 == null, h13 = m18 ? n10 + o15 - d12 : p12 - d12;
    if (h13 <= 0) return null;
    var y16 = f10 % t10.length;
    return Ne7.createElement("rect", { key: "react-".concat(f10), x: d12, y: i9, width: h13, height: l12, stroke: "none", fill: t10[y16], fillOpacity: a11, className: "recharts-cartesian-grid-bg" });
  });
  return Ne7.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, u9);
}
var C1 = (e14, r11) => {
  var { xAxis: t10, width: a11, height: n10, offset: i9 } = e14;
  return bs(uo(yr3(yr3(yr3({}, tt6), t10), {}, { ticks: Ps(t10, true), viewBox: { x: 0, y: 0, width: a11, height: n10 } })), i9.left, i9.left + i9.width, r11);
};
var j1 = (e14, r11) => {
  var { yAxis: t10, width: a11, height: n10, offset: i9 } = e14;
  return bs(uo(yr3(yr3(yr3({}, tt6), t10), {}, { ticks: Ps(t10, true), viewBox: { x: 0, y: 0, width: a11, height: n10 } })), i9.top, i9.top + i9.height, r11);
};
var k1 = { horizontal: true, vertical: true, horizontalPoints: [], verticalPoints: [], stroke: "#ccc", fill: "none", verticalFill: [], horizontalFill: [], xAxisId: 0, yAxisId: 0, syncWithTicks: false, zIndex: V14.grid };
function xb(e14) {
  var r11 = Tr(), t10 = Lr2(), a11 = Go(), n10 = yr3(yr3({}, L11(e14, k1)), {}, { x: k11(e14.x) ? e14.x : a11.left, y: k11(e14.y) ? e14.y : a11.top, width: k11(e14.width) ? e14.width : a11.width, height: k11(e14.height) ? e14.height : a11.height }), { xAxisId: i9, yAxisId: o15, x: l12, y: c16, width: s8, height: u9, syncWithTicks: d12, horizontalValues: f10, verticalValues: p12 } = n10, m18 = F10(), h13 = E17((S11) => Pu(S11, "xAxis", i9, m18)), y16 = E17((S11) => Pu(S11, "yAxis", o15, m18));
  if (!Xe4(s8) || !Xe4(u9) || !k11(l12) || !k11(c16)) return null;
  var v9 = n10.verticalCoordinatesGenerator || C1, g13 = n10.horizontalCoordinatesGenerator || j1, { horizontalPoints: x18, verticalPoints: b14 } = n10;
  if ((!x18 || !x18.length) && typeof g13 == "function") {
    var P16 = f10 && f10.length, A13 = g13({ yAxis: y16 ? yr3(yr3({}, y16), {}, { ticks: P16 ? f10 : y16.ticks }) : void 0, width: r11 ?? s8, height: t10 ?? u9, offset: a11 }, P16 ? true : d12);
    da(Array.isArray(A13), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof A13, "]")), Array.isArray(A13) && (x18 = A13);
  }
  if ((!b14 || !b14.length) && typeof v9 == "function") {
    var O12 = p12 && p12.length, w9 = v9({ xAxis: h13 ? yr3(yr3({}, h13), {}, { ticks: O12 ? p12 : h13.ticks }) : void 0, width: r11 ?? s8, height: t10 ?? u9, offset: a11 }, O12 ? true : d12);
    da(Array.isArray(w9), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof w9, "]")), Array.isArray(w9) && (b14 = w9);
  }
  return Ne7.createElement(U10, { zIndex: n10.zIndex }, Ne7.createElement("g", { className: "recharts-cartesian-grid" }, Ne7.createElement(w1, { fill: n10.fill, fillOpacity: n10.fillOpacity, x: n10.x, y: n10.y, width: n10.width, height: n10.height, ry: n10.ry }), Ne7.createElement(I1, rn5({}, n10, { horizontalPoints: x18 })), Ne7.createElement(R1, rn5({}, n10, { verticalPoints: b14 })), Ne7.createElement(E1, rn5({}, n10, { offset: a11, horizontalPoints: x18, xAxis: h13, yAxis: y16 })), Ne7.createElement(S1, rn5({}, n10, { offset: a11, verticalPoints: b14, xAxis: h13, yAxis: y16 }))));
}
xb.displayName = "CartesianGrid";
var T1 = {};
var bb = mr({ name: "errorBars", initialState: T1, reducers: { addErrorBar: (e14, r11) => {
  var { itemId: t10, errorBar: a11 } = r11.payload;
  e14[t10] || (e14[t10] = []), e14[t10].push(a11);
}, replaceErrorBar: (e14, r11) => {
  var { itemId: t10, prev: a11, next: n10 } = r11.payload;
  e14[t10] && (e14[t10] = e14[t10].map((i9) => i9.dataKey === a11.dataKey && i9.direction === a11.direction ? n10 : i9));
}, removeErrorBar: (e14, r11) => {
  var { itemId: t10, errorBar: a11 } = r11.payload;
  e14[t10] && (e14[t10] = e14[t10].filter((n10) => n10.dataKey !== a11.dataKey || n10.direction !== a11.direction));
} } });
var { addErrorBar: Pb, replaceErrorBar: Ab, removeErrorBar: Ob } = bb.actions;
var wb = bb.reducer;
var L1 = ["children"];
function N1(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = M1(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function M1(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var z1 = { data: [], xAxisId: "xAxis-0", yAxisId: "yAxis-0", dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }), errorBarOffset: 0 };
var Ib = _1(z1);
function si2(e14) {
  var { children: r11 } = e14, t10 = N1(e14, L1);
  return Sb.createElement(Ib.Provider, { value: t10 }, r11);
}
var Rb = () => B1(Ib);
function Cb(e14) {
  var r11 = M12(), t10 = cg(), a11 = K1(null);
  return Eb(() => {
    t10 != null && (a11.current === null ? r11(Pb({ itemId: t10, errorBar: e14 })) : a11.current !== e14 && r11(Ab({ itemId: t10, prev: a11.current, next: e14 })), a11.current = e14);
  }, [r11, t10, e14]), Eb(() => () => {
    a11.current != null && t10 != null && (r11(Ob({ itemId: t10, errorBar: a11.current })), a11.current = null);
  }, [r11, t10]), null;
}
function na(e14, r11) {
  var t10, a11, n10 = E17((s8) => Hr(s8, e14)), i9 = E17((s8) => Yr2(s8, r11)), o15 = (t10 = n10?.allowDataOverflow) !== null && t10 !== void 0 ? t10 : ze5.allowDataOverflow, l12 = (a11 = i9?.allowDataOverflow) !== null && a11 !== void 0 ? a11 : We3.allowDataOverflow, c16 = o15 || l12;
  return { needClip: c16, needClipX: o15, needClipY: l12 };
}
function Ca(e14) {
  var { xAxisId: r11, yAxisId: t10, clipPathId: a11 } = e14, n10 = Pt2(), { needClipX: i9, needClipY: o15, needClip: l12 } = na(r11, t10);
  if (!l12 || !n10) return null;
  var { x: c16, y: s8, width: u9, height: d12 } = n10;
  return xd.createElement("clipPath", { id: "clipPath-".concat(a11) }, xd.createElement("rect", { x: i9 ? c16 : c16 - u9 / 2, y: o15 ? s8 : s8 - d12 / 2, width: i9 ? u9 : u9 * 2, height: o15 ? d12 : d12 * 2 }));
}
var jb = (e14, r11, t10, a11) => qe4(e14, "xAxis", r11, a11);
var kb = (e14, r11, t10, a11) => dr2(e14, "xAxis", r11, a11);
var Db = (e14, r11, t10, a11) => qe4(e14, "yAxis", t10, a11);
var Tb = (e14, r11, t10, a11) => dr2(e14, "yAxis", t10, a11);
var W1 = fe7([z15, jb, Db, kb, Tb], (e14, r11, t10, a11, n10) => Ge4(e14, "xAxis") ? He2(r11, a11, false) : He2(t10, n10, false));
var F1 = (e14, r11, t10, a11, n10) => n10;
function V1(e14) {
  return e14.type === "line";
}
var X1 = fe7([Ur, F1], (e14, r11) => e14.filter(V1).find((t10) => t10.id === r11));
var Lb = fe7([z15, jb, Db, kb, Tb, X1, W1, Ft2], (e14, r11, t10, a11, n10, i9, o15, l12) => {
  var { chartData: c16, dataStartIndex: s8, dataEndIndex: u9 } = l12;
  if (!(i9 == null || r11 == null || t10 == null || a11 == null || n10 == null || a11.length === 0 || n10.length === 0 || o15 == null || e14 !== "horizontal" && e14 !== "vertical")) {
    var { dataKey: d12, data: f10 } = i9, p12;
    if (f10 != null && f10.length > 0 ? p12 = f10 : p12 = c16?.slice(s8, u9 + 1), p12 != null) return Nb({ layout: e14, xAxis: r11, yAxis: t10, xAxisTicks: a11, yAxisTicks: n10, dataKey: d12, bandSize: o15, displayedData: p12 });
  }
});
function Dc(e14) {
  var r11 = Ee6(e14), t10 = 3, a11 = 2;
  if (r11 != null) {
    var { r: n10, strokeWidth: i9 } = r11, o15 = Number(n10), l12 = Number(i9);
    return (Number.isNaN(o15) || o15 < 0) && (o15 = t10), (Number.isNaN(l12) || l12 < 0) && (l12 = a11), { r: o15, strokeWidth: l12 };
  }
  return { r: t10, strokeWidth: a11 };
}
var G1 = ["id"];
var H1 = ["type", "layout", "connectNulls", "needClip", "shape"];
var Y1 = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function mo() {
  return mo = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, mo.apply(null, arguments);
}
function Mb(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Nt2(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? Mb(Object(t10), true).forEach(function(a11) {
      U1(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : Mb(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function U1(e14, r11, t10) {
  return (r11 = Z1(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function Z1(e14) {
  var r11 = q1(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function q1(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Ad(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = $1(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function $1(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var tM = (e14) => {
  var { dataKey: r11, name: t10, stroke: a11, legendType: n10, hide: i9 } = e14;
  return [{ inactive: i9, dataKey: r11, type: n10, color: a11, value: Be4(t10, r11), payload: e14 }];
};
var aM = de9.memo((e14) => {
  var { dataKey: r11, data: t10, stroke: a11, strokeWidth: n10, fill: i9, name: o15, hide: l12, unit: c16, tooltipType: s8, id: u9 } = e14, d12 = { dataDefinedOnItem: t10, getPosition: ye6, settings: { stroke: a11, strokeWidth: n10, fill: i9, dataKey: r11, nameKey: void 0, name: Be4(o15, r11), hide: l12, type: s8, color: a11, unit: c16, graphicalItemId: u9 } };
  return de9.createElement(De4, { tooltipEntrySettings: d12 });
});
var Kb = (e14, r11) => "".concat(r11, "px ").concat(e14, "px");
function nM(e14, r11) {
  for (var t10 = e14.length % 2 !== 0 ? [...e14, 0] : e14, a11 = [], n10 = 0; n10 < r11; ++n10) a11.push(...t10);
  return a11;
}
var iM = (e14, r11, t10) => {
  var a11 = t10.reduce((f10, p12) => f10 + p12, 0);
  if (!a11) return Kb(r11, e14);
  for (var n10 = Math.floor(e14 / a11), i9 = e14 % a11, o15 = [], l12 = 0, c16 = 0; l12 < t10.length; c16 += (s8 = t10[l12]) !== null && s8 !== void 0 ? s8 : 0, ++l12) {
    var s8, u9 = t10[l12];
    if (u9 != null && c16 + u9 > i9) {
      o15 = [...t10.slice(0, l12), i9 - c16];
      break;
    }
  }
  var d12 = o15.length % 2 === 0 ? [0, r11] : [r11];
  return [...nM(t10, n10), ...o15, ...d12].map((f10) => "".concat(f10, "px")).join(", ");
};
function oM(e14) {
  var { clipPathId: r11, points: t10, props: a11 } = e14, { dot: n10, dataKey: i9, needClip: o15 } = a11, { id: l12 } = a11, c16 = Ad(a11, G1), s8 = X11(c16);
  return de9.createElement(ni2, { points: t10, dot: n10, className: "recharts-line-dots", dotClassName: "recharts-line-dot", dataKey: i9, baseProps: s8, needClip: o15, clipPathId: r11 });
}
function lM(e14) {
  var { showLabels: r11, children: t10, points: a11 } = e14, n10 = Q1(() => a11?.map((i9) => {
    var o15, l12, c16 = { x: (o15 = i9.x) !== null && o15 !== void 0 ? o15 : 0, y: (l12 = i9.y) !== null && l12 !== void 0 ? l12 : 0, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return Nt2(Nt2({}, c16), {}, { value: i9.value, payload: i9.payload, viewBox: c16, parentViewBox: void 0, fill: void 0 });
  }), [a11]);
  return de9.createElement(Jr, { value: r11 ? n10 : void 0 }, t10);
}
function Bb(e14) {
  var { clipPathId: r11, pathRef: t10, points: a11, strokeDasharray: n10, props: i9 } = e14, { type: o15, layout: l12, connectNulls: c16, needClip: s8, shape: u9 } = i9, d12 = Ad(i9, H1), f10 = Nt2(Nt2({}, re7(d12)), {}, { fill: "none", className: "recharts-line-curve", clipPath: s8 ? "url(#clipPath-".concat(r11, ")") : void 0, points: a11, type: o15, layout: l12, connectNulls: c16, strokeDasharray: n10 ?? i9.strokeDasharray });
  return de9.createElement(de9.Fragment, null, a11?.length > 1 && de9.createElement(Wr, mo({ shapeType: "curve", option: u9 }, f10, { pathRef: t10 })), de9.createElement(oM, { points: a11, clipPathId: r11, props: i9 }));
}
function cM(e14) {
  try {
    return e14 && e14.getTotalLength && e14.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function sM(e14) {
  var { clipPathId: r11, props: t10, pathRef: a11, previousPointsRef: n10, longestAnimatedLengthRef: i9 } = e14, { points: o15, strokeDasharray: l12, isAnimationActive: c16, animationBegin: s8, animationDuration: u9, animationEasing: d12, animateNewValues: f10, width: p12, height: m18, onAnimationEnd: h13, onAnimationStart: y16 } = t10, v9 = n10.current, g13 = Ue2(o15, "recharts-line-"), x18 = po(g13), [b14, P16] = eM(false), A13 = !b14, O12 = _b(() => {
    typeof h13 == "function" && h13(), P16(false);
  }, [h13]), w9 = _b(() => {
    typeof y16 == "function" && y16(), P16(true);
  }, [y16]), S11 = cM(a11.current), I24 = po(0);
  x18.current !== g13 && (I24.current = i9.current, x18.current = g13);
  var R13 = I24.current;
  return de9.createElement(lM, { points: o15, showLabels: A13 }, t10.children, de9.createElement(Ye4, { animationId: g13, begin: s8, duration: u9, isActive: c16, easing: d12, onAnimationEnd: O12, onAnimationStart: w9, key: g13 }, (C11) => {
    var N19 = B18(R13, S11 + R13, C11), j15 = Math.min(N19, S11), D18;
    if (c16) if (l12) {
      var G20 = "".concat(l12).split(/[,\s]+/gim).map((Y10) => parseFloat(Y10));
      D18 = iM(j15, S11, G20);
    } else D18 = Kb(S11, j15);
    else D18 = l12 == null ? void 0 : String(l12);
    if (C11 > 0 && S11 > 0 && (n10.current = o15, i9.current = Math.max(i9.current, j15)), v9) {
      var H14 = v9.length / o15.length, ie6 = C11 === 1 ? o15 : o15.map((Y10, oe8) => {
        var ae11 = Math.floor(oe8 * H14);
        if (v9[ae11]) {
          var fe9 = v9[ae11];
          return Nt2(Nt2({}, Y10), {}, { x: B18(fe9.x, Y10.x, C11), y: B18(fe9.y, Y10.y, C11) });
        }
        return f10 ? Nt2(Nt2({}, Y10), {}, { x: B18(p12 * 2, Y10.x, C11), y: B18(m18 / 2, Y10.y, C11) }) : Nt2(Nt2({}, Y10), {}, { x: Y10.x, y: Y10.y });
      });
      return n10.current = ie6, de9.createElement(Bb, { props: t10, points: ie6, clipPathId: r11, pathRef: a11, strokeDasharray: D18 });
    }
    return de9.createElement(Bb, { props: t10, points: o15, clipPathId: r11, pathRef: a11, strokeDasharray: D18 });
  }), de9.createElement(pr3, { label: t10.label }));
}
function uM(e14) {
  var { clipPathId: r11, props: t10 } = e14, a11 = po(null), n10 = po(0), i9 = po(null);
  return de9.createElement(sM, { props: t10, clipPathId: r11, previousPointsRef: a11, longestAnimatedLengthRef: n10, pathRef: i9 });
}
var dM = (e14, r11) => {
  var t10, a11;
  return { x: (t10 = e14.x) !== null && t10 !== void 0 ? t10 : void 0, y: (a11 = e14.y) !== null && a11 !== void 0 ? a11 : void 0, value: e14.value, errorVal: _13(e14.payload, r11) };
};
var Pd = class extends J1 {
  render() {
    var { hide: r11, dot: t10, points: a11, className: n10, xAxisId: i9, yAxisId: o15, top: l12, left: c16, width: s8, height: u9, id: d12, needClip: f10, zIndex: p12 } = this.props;
    if (r11) return null;
    var m18 = rM("recharts-line", n10), h13 = d12, { r: y16, strokeWidth: v9 } = Dc(t10), g13 = Qn2(t10), x18 = y16 * 2 + v9, b14 = f10 ? "url(#clipPath-".concat(g13 ? "" : "dots-").concat(h13, ")") : void 0;
    return de9.createElement(U10, { zIndex: p12 }, de9.createElement(T14, { className: m18 }, f10 && de9.createElement("defs", null, de9.createElement(Ca, { clipPathId: h13, xAxisId: i9, yAxisId: o15 }), !g13 && de9.createElement("clipPath", { id: "clipPath-dots-".concat(h13) }, de9.createElement("rect", { x: c16 - x18 / 2, y: l12 - x18 / 2, width: s8 + x18, height: u9 + x18 }))), de9.createElement(si2, { xAxisId: i9, yAxisId: o15, data: a11, dataPointFormatter: dM, errorBarOffset: 0 }, de9.createElement(uM, { props: this.props, clipPathId: h13 }))), de9.createElement(qa, { activeDot: this.props.activeDot, points: a11, mainColor: this.props.stroke, itemDataKey: this.props.dataKey, clipPath: b14 }));
  }
};
var zb = { activeDot: true, animateNewValues: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", connectNulls: false, dot: true, fill: "#fff", hide: false, isAnimationActive: "auto", label: false, legendType: "line", stroke: "#3182bd", strokeWidth: 1, xAxisId: 0, yAxisId: 0, zIndex: V14.line, type: "linear" };
function fM(e14) {
  var r11 = L11(e14, zb), { activeDot: t10, animateNewValues: a11, animationBegin: n10, animationDuration: i9, animationEasing: o15, connectNulls: l12, dot: c16, hide: s8, isAnimationActive: u9, label: d12, legendType: f10, xAxisId: p12, yAxisId: m18, id: h13 } = r11, y16 = Ad(r11, Y1), { needClip: v9 } = na(p12, m18), g13 = Pt2(), x18 = cr(), b14 = F10(), P16 = E17((I24) => Lb(I24, p12, m18, b14, h13));
  if (x18 !== "horizontal" && x18 !== "vertical" || P16 == null || g13 == null) return null;
  var { height: A13, width: O12, x: w9, y: S11 } = g13;
  return de9.createElement(Pd, mo({}, y16, { id: h13, connectNulls: l12, dot: c16, activeDot: t10, animateNewValues: a11, animationBegin: n10, animationDuration: i9, animationEasing: o15, isAnimationActive: u9, hide: s8, label: d12, legendType: f10, xAxisId: p12, yAxisId: m18, points: P16, layout: x18, height: A13, width: O12, left: w9, top: S11, needClip: v9 }));
}
function Nb(e14) {
  var { layout: r11, xAxis: t10, yAxis: a11, xAxisTicks: n10, yAxisTicks: i9, dataKey: o15, bandSize: l12, displayedData: c16 } = e14;
  return c16.map((s8, u9) => {
    var d12 = _13(s8, o15);
    if (r11 === "horizontal") {
      var f10 = zt3({ axis: t10, ticks: n10, bandSize: l12, entry: s8, index: u9 }), p12 = Z10(d12) ? null : a11.scale.map(d12);
      return { x: f10, y: p12 ?? null, value: d12, payload: s8 };
    }
    var m18 = Z10(d12) ? null : t10.scale.map(d12), h13 = zt3({ axis: a11, ticks: i9, bandSize: l12, entry: s8, index: u9 });
    return m18 == null || h13 == null ? null : { x: m18, y: h13, value: d12, payload: s8 };
  }).filter(Boolean);
}
function pM(e14) {
  var r11 = L11(e14, zb), t10 = F10();
  return de9.createElement(Te3, { id: r11.id, type: "line" }, (a11) => de9.createElement(de9.Fragment, null, de9.createElement(wa, { legendPayload: tM(r11) }), de9.createElement(aM, { dataKey: r11.dataKey, data: r11.data, stroke: r11.stroke, strokeWidth: r11.strokeWidth, fill: r11.fill, name: r11.name, hide: r11.hide, unit: r11.unit, tooltipType: r11.tooltipType, id: a11 }), de9.createElement(Sa, { type: "line", id: a11, data: r11.data, xAxisId: r11.xAxisId, yAxisId: r11.yAxisId, zAxisId: 0, dataKey: r11.dataKey, hide: r11.hide, isPanorama: t10 }), de9.createElement(fM, mo({}, r11, { id: a11 }))));
}
var Wb = de9.memo(pM, Je5);
Wb.displayName = "Line";
function at4(e14, r11) {
  var t10, a11;
  return (t10 = (a11 = e14.graphicalItems.cartesianItems.find((n10) => n10.id === r11)) === null || a11 === void 0 ? void 0 : a11.xAxisId) !== null && t10 !== void 0 ? t10 : tr2;
}
function nt3(e14, r11) {
  var t10, a11;
  return (t10 = (a11 = e14.graphicalItems.cartesianItems.find((n10) => n10.id === r11)) === null || a11 === void 0 ? void 0 : a11.yAxisId) !== null && t10 !== void 0 ? t10 : tr2;
}
var Fb = (e14, r11, t10) => qe4(e14, "xAxis", at4(e14, r11), t10);
var Vb = (e14, r11, t10) => dr2(e14, "xAxis", at4(e14, r11), t10);
var Xb = (e14, r11, t10) => qe4(e14, "yAxis", nt3(e14, r11), t10);
var Gb = (e14, r11, t10) => dr2(e14, "yAxis", nt3(e14, r11), t10);
var mM = fe7([z15, Fb, Xb, Vb, Gb], (e14, r11, t10, a11, n10) => Ge4(e14, "xAxis") ? He2(r11, a11, false) : He2(t10, n10, false));
var vM = (e14, r11) => r11;
var Hb = fe7([Ur, vM], (e14, r11) => e14.filter((t10) => t10.type === "area").find((t10) => t10.id === r11));
var Yb = (e14) => {
  var r11 = z15(e14), t10 = Ge4(r11, "xAxis");
  return t10 ? "yAxis" : "xAxis";
};
var hM = (e14, r11) => {
  var t10 = Yb(e14);
  return t10 === "yAxis" ? nt3(e14, r11) : at4(e14, r11);
};
var yM = (e14, r11, t10) => Kn3(e14, Yb(e14), hM(e14, r11), t10);
var gM = fe7([Hb, yM], (e14, r11) => {
  var t10;
  if (!(e14 == null || r11 == null)) {
    var { stackId: a11 } = e14, n10 = pa(e14);
    if (!(a11 == null || n10 == null)) {
      var i9 = (t10 = r11[a11]) === null || t10 === void 0 ? void 0 : t10.stackedData, o15 = i9?.find((l12) => l12.key === n10);
      if (o15 != null) return o15.map((l12) => [l12[0], l12[1]]);
    }
  }
});
var Ub = fe7([z15, Fb, Xb, Vb, Gb, gM, cl, mM, Hb, Lm], (e14, r11, t10, a11, n10, i9, o15, l12, c16, s8) => {
  var { chartData: u9, dataStartIndex: d12, dataEndIndex: f10 } = o15;
  if (!(c16 == null || e14 !== "horizontal" && e14 !== "vertical" || r11 == null || t10 == null || a11 == null || n10 == null || a11.length === 0 || n10.length === 0 || l12 == null)) {
    var { data: p12 } = c16, m18;
    if (p12 && p12.length > 0 ? m18 = p12 : m18 = u9?.slice(d12, f10 + 1), m18 != null) return Zb({ layout: e14, xAxis: r11, yAxis: t10, xAxisTicks: a11, yAxisTicks: n10, dataStartIndex: d12, areaSettings: c16, stackedData: i9, displayedData: m18, chartBaseValue: s8, bandSize: l12 });
  }
});
var xM = ["id"];
var bM = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function tn3() {
  return tn3 = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, tn3.apply(null, arguments);
}
function eP(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = PM(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function PM(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function qb(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function ui2(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? qb(Object(t10), true).forEach(function(a11) {
      AM(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : qb(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function AM(e14, r11, t10) {
  return (r11 = OM(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function OM(e14) {
  var r11 = wM(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function wM(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Lc(e14, r11) {
  return e14 && e14 !== "none" ? e14 : r11;
}
var CM = (e14) => {
  var { dataKey: r11, name: t10, stroke: a11, fill: n10, legendType: i9, hide: o15 } = e14;
  return [{ inactive: o15, dataKey: r11, type: i9, color: Lc(a11, n10), value: Be4(t10, r11), payload: e14 }];
};
var jM = $13.memo((e14) => {
  var { dataKey: r11, data: t10, stroke: a11, strokeWidth: n10, fill: i9, name: o15, hide: l12, unit: c16, tooltipType: s8, id: u9 } = e14, d12 = { dataDefinedOnItem: t10, getPosition: ye6, settings: { stroke: a11, strokeWidth: n10, fill: i9, dataKey: r11, nameKey: void 0, name: Be4(o15, r11), hide: l12, type: s8, color: Lc(a11, i9), unit: c16, graphicalItemId: u9 } };
  return $13.createElement(De4, { tooltipEntrySettings: d12 });
});
function kM(e14) {
  var { clipPathId: r11, points: t10, props: a11 } = e14, { needClip: n10, dot: i9, dataKey: o15 } = a11, l12 = X11(a11);
  return $13.createElement(ni2, { points: t10, dot: i9, className: "recharts-area-dots", dotClassName: "recharts-area-dot", dataKey: o15, baseProps: l12, needClip: n10, clipPathId: r11 });
}
function DM(e14) {
  var { showLabels: r11, children: t10, points: a11 } = e14, n10 = a11.map((i9) => {
    var o15, l12, c16 = { x: (o15 = i9.x) !== null && o15 !== void 0 ? o15 : 0, y: (l12 = i9.y) !== null && l12 !== void 0 ? l12 : 0, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return ui2(ui2({}, c16), {}, { value: i9.value, payload: i9.payload, parentViewBox: void 0, viewBox: c16, fill: void 0 });
  });
  return $13.createElement(Jr, { value: r11 ? n10 : void 0 }, t10);
}
function Qb(e14) {
  var { points: r11, baseLine: t10, needClip: a11, clipPathId: n10, props: i9 } = e14, { layout: o15, type: l12, stroke: c16, connectNulls: s8, isRange: u9 } = i9, { id: d12 } = i9, f10 = eP(i9, xM), p12 = X11(f10), m18 = re7(f10);
  return $13.createElement($13.Fragment, null, r11?.length > 1 && $13.createElement(T14, { clipPath: a11 ? "url(#clipPath-".concat(n10, ")") : void 0 }, $13.createElement(Mr, tn3({}, m18, { id: d12, points: r11, connectNulls: s8, type: l12, baseLine: t10, layout: o15, stroke: "none", className: "recharts-area-area" })), c16 !== "none" && $13.createElement(Mr, tn3({}, p12, { className: "recharts-area-curve", layout: o15, type: l12, connectNulls: s8, fill: "none", points: r11 })), c16 !== "none" && u9 && Array.isArray(t10) && $13.createElement(Mr, tn3({}, p12, { className: "recharts-area-curve", layout: o15, type: l12, connectNulls: s8, fill: "none", points: t10 }))), $13.createElement(kM, { points: r11, props: f10, clipPathId: n10 }));
}
function TM(e14) {
  var r11, t10, { alpha: a11, baseLine: n10, points: i9, strokeWidth: o15 } = e14, l12 = (r11 = i9[0]) === null || r11 === void 0 ? void 0 : r11.y, c16 = (t10 = i9[i9.length - 1]) === null || t10 === void 0 ? void 0 : t10.y;
  if (!W15(l12) || !W15(c16)) return null;
  var s8 = a11 * Math.abs(l12 - c16), u9 = Math.max(...i9.map((d12) => d12.x || 0));
  return k11(n10) ? u9 = Math.max(n10, u9) : n10 && Array.isArray(n10) && n10.length && (u9 = Math.max(...n10.map((d12) => d12.x || 0), u9)), k11(u9) ? $13.createElement("rect", { x: 0, y: l12 < c16 ? l12 : l12 - s8, width: u9 + (o15 ? parseInt("".concat(o15), 10) : 1), height: Math.floor(s8) }) : null;
}
function LM(e14) {
  var r11, t10, { alpha: a11, baseLine: n10, points: i9, strokeWidth: o15 } = e14, l12 = (r11 = i9[0]) === null || r11 === void 0 ? void 0 : r11.x, c16 = (t10 = i9[i9.length - 1]) === null || t10 === void 0 ? void 0 : t10.x;
  if (!W15(l12) || !W15(c16)) return null;
  var s8 = a11 * Math.abs(l12 - c16), u9 = Math.max(...i9.map((d12) => d12.y || 0));
  return k11(n10) ? u9 = Math.max(n10, u9) : n10 && Array.isArray(n10) && n10.length && (u9 = Math.max(...n10.map((d12) => d12.y || 0), u9)), k11(u9) ? $13.createElement("rect", { x: l12 < c16 ? l12 : l12 - s8, y: 0, width: s8, height: Math.floor(u9 + (o15 ? parseInt("".concat(o15), 10) : 1)) }) : null;
}
function NM(e14) {
  var { alpha: r11, layout: t10, points: a11, baseLine: n10, strokeWidth: i9 } = e14;
  return t10 === "vertical" ? $13.createElement(TM, { alpha: r11, points: a11, baseLine: n10, strokeWidth: i9 }) : $13.createElement(LM, { alpha: r11, points: a11, baseLine: n10, strokeWidth: i9 });
}
function MM(e14) {
  var { needClip: r11, clipPathId: t10, props: a11, previousPointsRef: n10, previousBaselineRef: i9 } = e14, { points: o15, baseLine: l12, isAnimationActive: c16, animationBegin: s8, animationDuration: u9, animationEasing: d12, onAnimationStart: f10, onAnimationEnd: p12 } = a11, m18 = SM(() => ({ points: o15, baseLine: l12 }), [o15, l12]), h13 = Ue2(m18, "recharts-area-"), y16 = An2(), [v9, g13] = IM(false), x18 = !v9, b14 = $b(() => {
    typeof p12 == "function" && p12(), g13(false);
  }, [p12]), P16 = $b(() => {
    typeof f10 == "function" && f10(), g13(true);
  }, [f10]);
  if (y16 == null) return null;
  var A13 = n10.current, O12 = i9.current;
  return $13.createElement(DM, { showLabels: x18, points: o15 }, a11.children, $13.createElement(Ye4, { animationId: h13, begin: s8, duration: u9, isActive: c16, easing: d12, onAnimationEnd: b14, onAnimationStart: P16, key: h13 }, (w9) => {
    if (A13) {
      var S11 = A13.length / o15.length, I24 = w9 === 1 ? o15 : o15.map((C11, N19) => {
        var j15 = Math.floor(N19 * S11);
        if (A13[j15]) {
          var D18 = A13[j15];
          return ui2(ui2({}, C11), {}, { x: B18(D18.x, C11.x, w9), y: B18(D18.y, C11.y, w9) });
        }
        return C11;
      }), R13;
      return k11(l12) ? R13 = B18(O12, l12, w9) : Z10(l12) || _e7(l12) ? R13 = B18(O12, 0, w9) : R13 = l12.map((C11, N19) => {
        var j15 = Math.floor(N19 * S11);
        if (Array.isArray(O12) && O12[j15]) {
          var D18 = O12[j15];
          return ui2(ui2({}, C11), {}, { x: B18(D18.x, C11.x, w9), y: B18(D18.y, C11.y, w9) });
        }
        return C11;
      }), w9 > 0 && (n10.current = I24, i9.current = R13), $13.createElement(Qb, { points: I24, baseLine: R13, needClip: r11, clipPathId: t10, props: a11 });
    }
    return w9 > 0 && (n10.current = o15, i9.current = l12), $13.createElement(T14, null, c16 && $13.createElement("defs", null, $13.createElement("clipPath", { id: "animationClipPath-".concat(t10) }, $13.createElement(NM, { alpha: w9, points: o15, baseLine: l12, layout: y16, strokeWidth: a11.strokeWidth }))), $13.createElement(T14, { clipPath: "url(#animationClipPath-".concat(t10, ")") }, $13.createElement(Qb, { points: o15, baseLine: l12, needClip: r11, clipPathId: t10, props: a11 })));
  }), $13.createElement(pr3, { label: a11.label }));
}
function _M(e14) {
  var { needClip: r11, clipPathId: t10, props: a11 } = e14, n10 = Jb(null), i9 = Jb();
  return $13.createElement(MM, { needClip: r11, clipPathId: t10, props: a11, previousPointsRef: n10, previousBaselineRef: i9 });
}
var Od = class extends EM {
  render() {
    var { hide: r11, dot: t10, points: a11, className: n10, top: i9, left: o15, needClip: l12, xAxisId: c16, yAxisId: s8, width: u9, height: d12, id: f10, baseLine: p12, zIndex: m18 } = this.props;
    if (r11) return null;
    var h13 = RM("recharts-area", n10), y16 = f10, { r: v9, strokeWidth: g13 } = Dc(t10), x18 = Qn2(t10), b14 = v9 * 2 + g13, P16 = l12 ? "url(#clipPath-".concat(x18 ? "" : "dots-").concat(y16, ")") : void 0;
    return $13.createElement(U10, { zIndex: m18 }, $13.createElement(T14, { className: h13 }, l12 && $13.createElement("defs", null, $13.createElement(Ca, { clipPathId: y16, xAxisId: c16, yAxisId: s8 }), !x18 && $13.createElement("clipPath", { id: "clipPath-dots-".concat(y16) }, $13.createElement("rect", { x: o15 - b14 / 2, y: i9 - b14 / 2, width: u9 + b14, height: d12 + b14 }))), $13.createElement(_M, { needClip: l12, clipPathId: y16, props: this.props })), $13.createElement(qa, { points: a11, mainColor: Lc(this.props.stroke, this.props.fill), itemDataKey: this.props.dataKey, activeDot: this.props.activeDot, clipPath: P16 }), this.props.isRange && Array.isArray(p12) && $13.createElement(qa, { points: p12, mainColor: Lc(this.props.stroke, this.props.fill), itemDataKey: this.props.dataKey, activeDot: this.props.activeDot, clipPath: P16 }));
  }
};
var BM = { activeDot: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", connectNulls: false, dot: false, fill: "#3182bd", fillOpacity: 0.6, hide: false, isAnimationActive: "auto", legendType: "line", stroke: "#3182bd", strokeWidth: 1, type: "linear", label: false, xAxisId: 0, yAxisId: 0, zIndex: V14.area };
function KM(e14) {
  var r11, { activeDot: t10, animationBegin: a11, animationDuration: n10, animationEasing: i9, connectNulls: o15, dot: l12, fill: c16, fillOpacity: s8, hide: u9, isAnimationActive: d12, legendType: f10, stroke: p12, xAxisId: m18, yAxisId: h13 } = e14, y16 = eP(e14, bM), v9 = cr(), g13 = Kl(), { needClip: x18 } = na(m18, h13), b14 = F10(), { points: P16, isRange: A13, baseLine: O12 } = (r11 = E17((N19) => Ub(N19, e14.id, b14))) !== null && r11 !== void 0 ? r11 : {}, w9 = Pt2();
  if (v9 !== "horizontal" && v9 !== "vertical" || w9 == null || g13 !== "AreaChart" && g13 !== "ComposedChart") return null;
  var { height: S11, width: I24, x: R13, y: C11 } = w9;
  return !P16 || !P16.length ? null : $13.createElement(Od, tn3({}, y16, { activeDot: t10, animationBegin: a11, animationDuration: n10, animationEasing: i9, baseLine: O12, connectNulls: o15, dot: l12, fill: c16, fillOpacity: s8, height: S11, hide: u9, layout: v9, isAnimationActive: d12, isRange: A13, legendType: f10, needClip: x18, points: P16, stroke: p12, width: I24, left: R13, top: C11, xAxisId: m18, yAxisId: h13 }));
}
var zM = (e14, r11, t10, a11, n10) => {
  var i9 = t10 ?? r11;
  if (k11(i9)) return i9;
  var o15 = e14 === "horizontal" ? n10 : a11, l12 = o15.scale.domain();
  if (o15.type === "number") {
    var c16 = Math.max(l12[0], l12[1]), s8 = Math.min(l12[0], l12[1]);
    return i9 === "dataMin" ? s8 : i9 === "dataMax" || c16 < 0 ? c16 : Math.max(Math.min(l12[0], l12[1]), 0);
  }
  return i9 === "dataMin" ? l12[0] : i9 === "dataMax" ? l12[1] : l12[0];
};
function Zb(e14) {
  var { areaSettings: { connectNulls: r11, baseValue: t10, dataKey: a11 }, stackedData: n10, layout: i9, chartBaseValue: o15, xAxis: l12, yAxis: c16, displayedData: s8, dataStartIndex: u9, xAxisTicks: d12, yAxisTicks: f10, bandSize: p12 } = e14, m18 = n10 && n10.length, h13 = zM(i9, o15, t10, l12, c16), y16 = i9 === "horizontal", v9 = false, g13 = s8.map((b14, P16) => {
    var A13, O12, w9, S11;
    if (m18) S11 = n10[u9 + P16];
    else {
      var I24 = _13(b14, a11);
      Array.isArray(I24) ? (S11 = I24, v9 = true) : S11 = [h13, I24];
    }
    var R13 = (A13 = (O12 = S11) === null || O12 === void 0 ? void 0 : O12[1]) !== null && A13 !== void 0 ? A13 : null, C11 = R13 == null || m18 && !r11 && _13(b14, a11) == null;
    if (y16) {
      var N19;
      return { x: zt3({ axis: l12, ticks: d12, bandSize: p12, entry: b14, index: P16 }), y: C11 ? null : (N19 = c16.scale.map(R13)) !== null && N19 !== void 0 ? N19 : null, value: S11, payload: b14 };
    }
    return { x: C11 ? null : (w9 = l12.scale.map(R13)) !== null && w9 !== void 0 ? w9 : null, y: zt3({ axis: c16, ticks: f10, bandSize: p12, entry: b14, index: P16 }), value: S11, payload: b14 };
  }), x18;
  return m18 || v9 ? x18 = g13.map((b14) => {
    var P16, A13 = Array.isArray(b14.value) ? b14.value[0] : null;
    if (y16) {
      var O12;
      return { x: b14.x, y: A13 != null && b14.y != null && (O12 = c16.scale.map(A13)) !== null && O12 !== void 0 ? O12 : null, payload: b14.payload };
    }
    return { x: A13 != null && (P16 = l12.scale.map(A13)) !== null && P16 !== void 0 ? P16 : null, y: b14.y, payload: b14.payload };
  }) : x18 = y16 ? c16.scale.map(h13) : l12.scale.map(h13), { points: g13, baseLine: x18 ?? 0, isRange: v9 };
}
function WM(e14) {
  var r11 = L11(e14, BM), t10 = F10();
  return $13.createElement(Te3, { id: r11.id, type: "area" }, (a11) => $13.createElement($13.Fragment, null, $13.createElement(wa, { legendPayload: CM(r11) }), $13.createElement(jM, { dataKey: r11.dataKey, data: r11.data, stroke: r11.stroke, strokeWidth: r11.strokeWidth, fill: r11.fill, name: r11.name, hide: r11.hide, unit: r11.unit, tooltipType: r11.tooltipType, id: a11 }), $13.createElement(Sa, { type: "area", id: a11, data: r11.data, dataKey: r11.dataKey, xAxisId: r11.xAxisId, yAxisId: r11.yAxisId, zAxisId: 0, stackId: ua(r11.stackId), hide: r11.hide, barSize: void 0, baseValue: r11.baseValue, isPanorama: t10, connectNulls: r11.connectNulls }), $13.createElement(KM, tn3({}, r11, { id: a11 }))));
}
var rP = $13.memo(WM, Je5);
rP.displayName = "Area";
function wd() {
  return wd = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, wd.apply(null, arguments);
}
function Nc(e14) {
  return tP.createElement(Wr, wd({ shapeType: "rectangle", activeClassName: "recharts-active-bar", inActiveClassName: "recharts-inactive-bar" }, e14));
}
var aP = function(r11) {
  var t10 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (a11, n10) => {
    if (k11(r11)) return r11;
    var i9 = k11(a11) || Z10(a11);
    return i9 ? r11(a11, n10) : (i9 || c9(false, "minPointSize callback function received a value with type of ".concat(typeof a11, ". Currently only numbers or null/undefined are supported.")), t10);
  };
};
var VM = (e14, r11, t10) => t10;
var XM = (e14, r11) => r11;
var vo = fe7([Ur, XM], (e14, r11) => e14.filter((t10) => t10.type === "bar").find((t10) => t10.id === r11));
var GM = fe7([vo], (e14) => e14?.maxBarSize);
var HM = (e14, r11, t10, a11) => a11;
var YM = fe7([z15, Ur, at4, nt3, VM], (e14, r11, t10, a11, n10) => r11.filter((i9) => e14 === "horizontal" ? i9.xAxisId === t10 : i9.yAxisId === a11).filter((i9) => i9.isPanorama === n10).filter((i9) => i9.hide === false).filter((i9) => i9.type === "bar"));
var UM = (e14, r11, t10) => {
  var a11 = z15(e14), n10 = at4(e14, r11), i9 = nt3(e14, r11);
  if (!(n10 == null || i9 == null)) return a11 === "horizontal" ? Kn3(e14, "yAxis", i9, t10) : Kn3(e14, "xAxis", n10, t10);
};
var ZM = (e14, r11) => {
  var t10 = z15(e14), a11 = at4(e14, r11), n10 = nt3(e14, r11);
  if (!(a11 == null || n10 == null)) return t10 === "horizontal" ? xu(e14, "xAxis", a11) : xu(e14, "yAxis", n10);
};
var qM = fe7([YM, fl, ZM], hc);
var $M = (e14, r11, t10) => {
  var a11, n10, i9 = vo(e14, r11);
  if (i9 == null) return 0;
  var o15 = at4(e14, r11), l12 = nt3(e14, r11);
  if (o15 == null || l12 == null) return 0;
  var c16 = z15(e14), s8 = jn2(e14), { maxBarSize: u9 } = i9, d12 = Z10(u9) ? s8 : u9, f10, p12;
  return c16 === "horizontal" ? (f10 = qe4(e14, "xAxis", o15, t10), p12 = dr2(e14, "xAxis", o15, t10)) : (f10 = qe4(e14, "yAxis", l12, t10), p12 = dr2(e14, "yAxis", l12, t10)), (a11 = (n10 = He2(f10, p12, true)) !== null && n10 !== void 0 ? n10 : d12) !== null && a11 !== void 0 ? a11 : 0;
};
var nP = (e14, r11, t10) => {
  var a11 = z15(e14), n10 = at4(e14, r11), i9 = nt3(e14, r11);
  if (!(n10 == null || i9 == null)) {
    var o15, l12;
    return a11 === "horizontal" ? (o15 = qe4(e14, "xAxis", n10, t10), l12 = dr2(e14, "xAxis", n10, t10)) : (o15 = qe4(e14, "yAxis", i9, t10), l12 = dr2(e14, "yAxis", i9, t10)), He2(o15, l12);
  }
};
var JM = fe7([qM, jn2, dl, kn4, $M, nP, GM], gc);
var QM = (e14, r11, t10) => {
  var a11 = at4(e14, r11);
  if (a11 != null) return qe4(e14, "xAxis", a11, t10);
};
var e_ = (e14, r11, t10) => {
  var a11 = nt3(e14, r11);
  if (a11 != null) return qe4(e14, "yAxis", a11, t10);
};
var r_ = (e14, r11, t10) => {
  var a11 = at4(e14, r11);
  if (a11 != null) return dr2(e14, "xAxis", a11, t10);
};
var t_ = (e14, r11, t10) => {
  var a11 = nt3(e14, r11);
  if (a11 != null) return dr2(e14, "yAxis", a11, t10);
};
var a_ = fe7([JM, vo], bc);
var n_ = fe7([UM, vo], xc);
var Mc = fe7([me9, bn3, QM, e_, r_, t_, a_, z15, cl, nP, n_, vo, HM], (e14, r11, t10, a11, n10, i9, o15, l12, c16, s8, u9, d12, f10) => {
  var { chartData: p12, dataStartIndex: m18, dataEndIndex: h13 } = c16;
  if (!(d12 == null || o15 == null || r11 == null || l12 !== "horizontal" && l12 !== "vertical" || t10 == null || a11 == null || n10 == null || i9 == null || s8 == null)) {
    var { data: y16 } = d12, v9;
    if (y16 != null && y16.length > 0 ? v9 = y16 : v9 = p12?.slice(m18, h13 + 1), v9 != null) return iP({ layout: l12, barSettings: d12, pos: o15, parentViewBox: r11, bandSize: s8, xAxis: t10, yAxis: a11, xAxisTicks: n10, yAxisTicks: i9, stackedData: u9, displayedData: v9, offset: e14, cells: f10, dataStartIndex: m18 });
  }
});
var oP = (e14, r11) => r11;
var lP = (e14, r11, t10) => t10;
var i_ = fe7([oP, Ur, lP], (e14, r11, t10) => r11.filter((a11) => a11.type === "bar").filter((a11) => a11.stackId === e14).filter((a11) => a11.isPanorama === t10).filter((a11) => !a11.hide));
var o_ = fe7([i_], (e14) => e14.map((r11) => r11.id));
var l_ = (e14, r11) => {
  if (!e14) return r11;
  if (!r11) return e14;
  var t10 = Math.min(e14.x, e14.x + e14.width, r11.x, r11.x + r11.width), a11 = Math.min(e14.y, e14.y + e14.height, r11.y, r11.y + r11.height), n10 = Math.max(e14.x, e14.x + e14.width, r11.x, r11.x + r11.width), i9 = Math.max(e14.y, e14.y + e14.height, r11.y, r11.y + r11.height), o15 = n10 - t10, l12 = i9 - a11;
  return { x: t10, y: a11, width: o15, height: l12 };
};
var c_ = (e14, r11, t10) => {
  var a11 = o_(e14, r11, t10), n10 = [];
  return a11.forEach((i9) => {
    var o15 = Mc(e14, i9, t10, void 0);
    o15?.forEach((l12) => {
      var c16 = l12.originalDataIndex;
      n10[c16] = l_(n10[c16], l12);
    });
  }), n10;
};
var cP = fe7([(e14) => e14, oP, lP], c_);
var s_ = ["index"];
function Sd() {
  return Sd = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Sd.apply(null, arguments);
}
function u_(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = d_(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function d_(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var Id = f_(void 0);
var uP = (e14) => {
  var r11 = sP(Id);
  if (r11 != null) return r11.stackId;
  if (e14 != null) return ua(e14);
};
var m_ = { radius: 0 };
var dP = (e14, r11) => "recharts-bar-stack-clip-path-".concat(e14, "-").concat(r11);
var v_ = (e14) => {
  var r11 = sP(Id);
  if (r11 != null) {
    var { stackId: t10 } = r11;
    return "url(#".concat(dP(t10, e14), ")");
  }
};
var Rd = (e14) => {
  var { index: r11 } = e14, t10 = u_(e14, s_), a11 = v_(r11);
  return ia.createElement(T14, Sd({ className: "recharts-bar-stack-layer", clipPath: a11 }, t10));
};
var h_ = (e14) => {
  var { stackId: r11, radius: t10 } = e14, a11 = F10(), n10 = E17((i9) => cP(i9, r11, a11));
  return n10 == null || n10.length === 0 ? null : ia.createElement("defs", null, n10.map((i9, o15) => {
    if (i9 == null) return null;
    var l12 = dP(r11, o15);
    return ia.createElement("clipPath", { key: l12, id: l12 }, ia.createElement(_r, { isAnimationActive: false, isUpdateAnimationActive: false, x: i9.x, y: i9.y, width: i9.width, height: i9.height, radius: t10 }));
  }));
};
var y_ = (e14) => {
  var r11 = cc("recharts-bar-stack", ua(e14.stackId)), { children: t10, radius: a11 } = L11(e14, m_), n10 = p_(() => ({ stackId: r11, radius: a11 }), [r11, a11]);
  return ia.createElement(Id.Provider, { value: n10 }, ia.createElement(h_, { stackId: r11, radius: a11 }), t10);
};
var g_ = ia.memo(y_, Je5);
var x_ = ["onMouseEnter", "onMouseLeave", "onClick"];
var b_ = ["value", "background", "tooltipPosition"];
var P_ = ["id"];
var A_ = ["onMouseEnter", "onClick", "onMouseLeave"];
function ka() {
  return ka = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, ka.apply(null, arguments);
}
function fP(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Er(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? fP(Object(t10), true).forEach(function(a11) {
      O_(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : fP(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function O_(e14, r11, t10) {
  return (r11 = w_(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function w_(e14) {
  var r11 = E_(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function E_(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function _c(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = S_(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function S_(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var k_ = (e14) => {
  var { dataKey: r11, name: t10, fill: a11, legendType: n10, hide: i9 } = e14;
  return [{ inactive: i9, dataKey: r11, type: n10, color: a11, value: Be4(t10, r11), payload: e14 }];
};
var D_ = ne7.memo((e14) => {
  var { dataKey: r11, stroke: t10, strokeWidth: a11, fill: n10, name: i9, hide: o15, unit: l12, tooltipType: c16, id: s8 } = e14, u9 = { dataDefinedOnItem: void 0, getPosition: ye6, settings: { stroke: t10, strokeWidth: a11, fill: n10, dataKey: r11, nameKey: void 0, name: Be4(i9, r11), hide: o15, type: c16, color: n10, unit: l12, graphicalItemId: s8 } };
  return ne7.createElement(De4, { tooltipEntrySettings: u9 });
});
function T_(e14) {
  var r11 = E17(fr2), { data: t10, dataKey: a11, background: n10, allOtherBarProps: i9 } = e14, { onMouseEnter: o15, onMouseLeave: l12, onClick: c16 } = i9, s8 = _c(i9, x_), u9 = gt5(o15, a11, i9.id), d12 = xt5(l12), f10 = bt4(c16, a11, i9.id);
  if (!n10 || t10 == null) return null;
  var p12 = Ee6(n10);
  return ne7.createElement(U10, { zIndex: wc(n10, V14.barBackground) }, t10.map((m18, h13) => {
    var { value: y16, background: v9, tooltipPosition: g13 } = m18, x18 = _c(m18, b_);
    if (!v9) return null;
    var b14 = u9(m18, h13), P16 = d12(m18, h13), A13 = f10(m18, h13), O12 = Er(Er(Er(Er(Er({ option: n10, isActive: String(h13) === r11 }, x18), {}, { fill: "#eee" }, v9), p12), Ve3(s8, m18, h13)), {}, { onMouseEnter: b14, onMouseLeave: P16, onClick: A13, dataKey: a11, index: h13, className: "recharts-bar-background-rectangle" });
    return ne7.createElement(Nc, ka({ key: "background-bar-".concat(h13) }, O12));
  }));
}
function L_(e14) {
  var { showLabels: r11, children: t10, rects: a11 } = e14, n10 = a11?.map((i9) => {
    var o15 = { x: i9.x, y: i9.y, width: i9.width, lowerWidth: i9.width, upperWidth: i9.width, height: i9.height };
    return Er(Er({}, o15), {}, { value: i9.value, payload: i9.payload, parentViewBox: i9.parentViewBox, viewBox: o15, fill: i9.fill });
  });
  return ne7.createElement(Jr, { value: r11 ? n10 : void 0 }, t10);
}
function N_(e14) {
  var { shape: r11, activeBar: t10, baseProps: a11, entry: n10, index: i9, dataKey: o15 } = e14, l12 = E17(fr2), c16 = E17(Gn3), s8 = t10 && String(n10.originalDataIndex) === l12 && (c16 == null || o15 === c16), [u9, d12] = jd(false), [f10, p12] = jd(false);
  R_(() => {
    var x18;
    return s8 ? (d12(true), x18 = requestAnimationFrame(() => {
      p12(true);
    })) : p12(false), () => {
      cancelAnimationFrame(x18);
    };
  }, [s8]);
  var m18 = Cd(() => {
    s8 || d12(false);
  }, [s8]), h13 = s8 && f10, y16 = s8 || u9, v9;
  s8 ? t10 === true ? v9 = r11 : v9 = t10 : v9 = r11;
  var g13 = ne7.createElement(Nc, ka({}, a11, { name: String(a11.name) }, n10, { isActive: h13, option: v9, index: i9, dataKey: o15, onTransitionEnd: m18 }));
  return y16 ? ne7.createElement(U10, { zIndex: V14.activeBar }, ne7.createElement(Rd, { index: n10.originalDataIndex }, g13)) : g13;
}
function M_(e14) {
  var { shape: r11, baseProps: t10, entry: a11, index: n10, dataKey: i9 } = e14;
  return ne7.createElement(Nc, ka({}, t10, { name: String(t10.name) }, a11, { isActive: false, option: r11, index: n10, dataKey: i9 }));
}
function __(e14) {
  var r11, { data: t10, props: a11 } = e14, n10 = (r11 = X11(a11)) !== null && r11 !== void 0 ? r11 : {}, { id: i9 } = n10, o15 = _c(n10, P_), { shape: l12, dataKey: c16, activeBar: s8 } = a11, { onMouseEnter: u9, onClick: d12, onMouseLeave: f10 } = a11, p12 = _c(a11, A_), m18 = gt5(u9, c16, i9), h13 = xt5(f10), y16 = bt4(d12, c16, i9);
  return t10 ? ne7.createElement(ne7.Fragment, null, t10.map((v9, g13) => ne7.createElement(Rd, ka({ index: v9.originalDataIndex, key: "rectangle-".concat(v9?.x, "-").concat(v9?.y, "-").concat(v9?.value, "-").concat(g13), className: "recharts-bar-rectangle" }, Ve3(p12, v9, g13), { onMouseEnter: m18(v9, g13), onMouseLeave: h13(v9, g13), onClick: y16(v9, g13) }), s8 ? ne7.createElement(N_, { shape: l12, activeBar: s8, baseProps: o15, entry: v9, index: g13, dataKey: c16 }) : ne7.createElement(M_, { shape: l12, baseProps: o15, entry: v9, index: g13, dataKey: c16 })))) : null;
}
function B_(e14) {
  var { props: r11, previousRectanglesRef: t10 } = e14, { data: a11, layout: n10, isAnimationActive: i9, animationBegin: o15, animationDuration: l12, animationEasing: c16, onAnimationEnd: s8, onAnimationStart: u9 } = r11, d12 = t10.current, f10 = Ue2(r11, "recharts-bar-"), [p12, m18] = jd(false), h13 = !p12, y16 = Cd(() => {
    typeof s8 == "function" && s8(), m18(false);
  }, [s8]), v9 = Cd(() => {
    typeof u9 == "function" && u9(), m18(true);
  }, [u9]);
  return ne7.createElement(L_, { showLabels: h13, rects: a11 }, ne7.createElement(Ye4, { animationId: f10, begin: o15, duration: l12, isActive: i9, easing: c16, onAnimationEnd: y16, onAnimationStart: v9, key: f10 }, (g13) => {
    var x18 = g13 === 1 ? a11 : a11?.map((b14, P16) => {
      var A13 = d12 && d12[P16];
      if (A13) return Er(Er({}, b14), {}, { x: B18(A13.x, b14.x, g13), y: B18(A13.y, b14.y, g13), width: B18(A13.width, b14.width, g13), height: B18(A13.height, b14.height, g13) });
      if (n10 === "horizontal") {
        var O12 = B18(0, b14.height, g13), w9 = B18(b14.stackedBarStart, b14.y, g13);
        return Er(Er({}, b14), {}, { y: w9, height: O12 });
      }
      var S11 = B18(0, b14.width, g13), I24 = B18(b14.stackedBarStart, b14.x, g13);
      return Er(Er({}, b14), {}, { width: S11, x: I24 });
    });
    return g13 > 0 && (t10.current = x18 ?? null), x18 == null ? null : ne7.createElement(T14, null, ne7.createElement(__, { props: r11, data: x18 }));
  }), ne7.createElement(pr3, { label: r11.label }), r11.children);
}
function K_(e14) {
  var r11 = C_(null);
  return ne7.createElement(B_, { previousRectanglesRef: r11, props: e14 });
}
var pP = 0;
var z_ = (e14, r11) => {
  var t10 = Array.isArray(e14.value) ? e14.value[1] : e14.value;
  return { x: e14.x, y: e14.y, value: t10, errorVal: _13(e14, r11) };
};
var kd = class extends I_ {
  render() {
    var { hide: r11, data: t10, dataKey: a11, className: n10, xAxisId: i9, yAxisId: o15, needClip: l12, background: c16, id: s8 } = this.props;
    if (r11 || t10 == null) return null;
    var u9 = j_("recharts-bar", n10), d12 = s8;
    return ne7.createElement(T14, { className: u9, id: s8 }, l12 && ne7.createElement("defs", null, ne7.createElement(Ca, { clipPathId: d12, xAxisId: i9, yAxisId: o15 })), ne7.createElement(T14, { className: "recharts-bar-rectangles", clipPath: l12 ? "url(#clipPath-".concat(d12, ")") : void 0 }, ne7.createElement(T_, { data: t10, dataKey: a11, background: c16, allOtherBarProps: this.props }), ne7.createElement(K_, this.props)));
  }
};
var W_ = { activeBar: false, animationBegin: 0, animationDuration: 400, animationEasing: "ease", background: false, hide: false, isAnimationActive: "auto", label: false, legendType: "rect", minPointSize: pP, xAxisId: 0, yAxisId: 0, zIndex: V14.bar };
function F_(e14) {
  var { xAxisId: r11, yAxisId: t10, hide: a11, legendType: n10, minPointSize: i9, activeBar: o15, animationBegin: l12, animationDuration: c16, animationEasing: s8, isAnimationActive: u9 } = e14, { needClip: d12 } = na(r11, t10), f10 = cr(), p12 = F10(), m18 = yt4(e14.children, zr), h13 = E17((g13) => Mc(g13, e14.id, p12, m18));
  if (f10 !== "vertical" && f10 !== "horizontal") return null;
  var y16, v9 = h13?.[0];
  return v9 == null || v9.height == null || v9.width == null ? y16 = 0 : y16 = f10 === "vertical" ? v9.height / 2 : v9.width / 2, ne7.createElement(si2, { xAxisId: r11, yAxisId: t10, data: h13, dataPointFormatter: z_, errorBarOffset: y16 }, ne7.createElement(kd, ka({}, e14, { layout: f10, needClip: d12, data: h13, xAxisId: r11, yAxisId: t10, hide: a11, legendType: n10, minPointSize: i9, activeBar: o15, animationBegin: l12, animationDuration: c16, animationEasing: s8, isAnimationActive: u9 })));
}
function iP(e14) {
  var { layout: r11, barSettings: { dataKey: t10, minPointSize: a11, hasCustomShape: n10 }, pos: i9, bandSize: o15, xAxis: l12, yAxis: c16, xAxisTicks: s8, yAxisTicks: u9, stackedData: d12, displayedData: f10, offset: p12, cells: m18, parentViewBox: h13, dataStartIndex: y16 } = e14, v9 = r11 === "horizontal" ? c16 : l12, g13 = d12 ? v9.scale.domain() : null, x18 = Wo({ numericAxis: v9 }), b14 = v9.scale.map(x18);
  return f10.map((P16, A13) => {
    var O12, w9, S11, I24, R13, C11;
    if (d12) {
      var N19 = d12[A13 + y16];
      if (N19 == null) return null;
      O12 = zo(N19, g13);
    } else O12 = _13(P16, t10), Array.isArray(O12) || (O12 = [x18, O12]);
    var j15 = aP(a11, pP)(O12[1], A13);
    if (r11 === "horizontal") {
      var D18, G20 = c16.scale.map(O12[0]), H14 = c16.scale.map(O12[1]);
      if (G20 == null || H14 == null) return null;
      w9 = hn3({ axis: l12, ticks: s8, bandSize: o15, offset: i9.offset, entry: P16, index: A13 }), S11 = (D18 = H14 ?? G20) !== null && D18 !== void 0 ? D18 : void 0, I24 = i9.size;
      var ie6 = G20 - H14;
      if (R13 = _e7(ie6) ? 0 : ie6, C11 = { x: w9, y: p12.top, width: I24, height: p12.height }, Math.abs(j15) > 0 && Math.abs(R13) < Math.abs(j15)) {
        var Y10 = he4(R13 || j15) * (Math.abs(j15) - Math.abs(R13));
        S11 -= Y10, R13 += Y10;
      }
    } else {
      var oe8 = l12.scale.map(O12[0]), ae11 = l12.scale.map(O12[1]);
      if (oe8 == null || ae11 == null) return null;
      if (w9 = oe8, S11 = hn3({ axis: c16, ticks: u9, bandSize: o15, offset: i9.offset, entry: P16, index: A13 }), I24 = ae11 - oe8, R13 = i9.size, C11 = { x: p12.left, y: S11, width: p12.width, height: R13 }, Math.abs(j15) > 0 && Math.abs(I24) < Math.abs(j15)) {
        var fe9 = he4(I24 || j15) * (Math.abs(j15) - Math.abs(I24));
        I24 += fe9;
      }
    }
    if (w9 == null || S11 == null || I24 == null || R13 == null || !n10 && (I24 === 0 || R13 === 0)) return null;
    var Me5 = Er(Er({}, P16), {}, { stackedBarStart: b14, x: w9, y: S11, width: I24, height: R13, value: d12 ? O12 : O12[1], payload: P16, background: C11, tooltipPosition: { x: w9 + I24 / 2, y: S11 + R13 / 2 }, parentViewBox: h13, originalDataIndex: A13 }, m18 && m18[A13] && m18[A13].props);
    return Me5;
  }).filter(Boolean);
}
function V_(e14) {
  var r11 = L11(e14, W_), t10 = uP(r11.stackId), a11 = F10();
  return ne7.createElement(Te3, { id: r11.id, type: "bar" }, (n10) => ne7.createElement(ne7.Fragment, null, ne7.createElement(wa, { legendPayload: k_(r11) }), ne7.createElement(D_, { dataKey: r11.dataKey, stroke: r11.stroke, strokeWidth: r11.strokeWidth, fill: r11.fill, name: r11.name, hide: r11.hide, unit: r11.unit, tooltipType: r11.tooltipType, id: n10 }), ne7.createElement(Sa, { type: "bar", id: n10, data: void 0, xAxisId: r11.xAxisId, yAxisId: r11.yAxisId, zAxisId: 0, dataKey: r11.dataKey, stackId: t10, hide: r11.hide, barSize: r11.barSize, minPointSize: r11.minPointSize, maxBarSize: r11.maxBarSize, isPanorama: a11, hasCustomShape: r11.shape != null }), ne7.createElement(U10, { zIndex: r11.zIndex }, ne7.createElement(F_, ka({}, r11, { id: n10 })))));
}
var mP = ne7.memo(V_, Je5);
mP.displayName = "Bar";
var X_ = ["option", "isActive"];
function ho() {
  return ho = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, ho.apply(null, arguments);
}
function G_(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = H_(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function H_(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function vP(e14) {
  var { option: r11, isActive: t10 } = e14, a11 = G_(e14, X_);
  return typeof r11 == "string" ? Bc.createElement(Wr, ho({ option: Bc.createElement(sa, ho({ type: r11 }, a11)), isActive: t10, shapeType: "symbols" }, a11)) : Bc.createElement(Wr, ho({ option: r11, isActive: t10, shapeType: "symbols" }, a11));
}
var Y_ = (e14, r11, t10, a11, n10, i9, o15) => qe4(e14, "xAxis", r11, o15);
var U_ = (e14, r11, t10, a11, n10, i9, o15) => dr2(e14, "xAxis", r11, o15);
var Z_ = (e14, r11, t10, a11, n10, i9, o15) => qe4(e14, "yAxis", t10, o15);
var q_ = (e14, r11, t10, a11, n10, i9, o15) => dr2(e14, "yAxis", t10, o15);
var $_ = (e14, r11, t10, a11) => av(e14, "zAxis", a11, false);
var J_ = (e14, r11, t10, a11, n10) => n10;
var Q_ = (e14, r11, t10, a11, n10, i9) => i9;
var eB = (e14, r11, t10, a11, n10, i9, o15) => Ft2(e14, void 0, void 0, o15);
var rB = fe7([Ur, J_], (e14, r11) => e14.filter((t10) => t10.type === "scatter").find((t10) => t10.id === r11));
var yP = fe7([eB, Y_, U_, Z_, q_, $_, rB, Q_], (e14, r11, t10, a11, n10, i9, o15, l12) => {
  var { chartData: c16, dataStartIndex: s8, dataEndIndex: u9 } = e14;
  if (o15 != null) {
    var d12;
    if (o15?.data != null && o15.data.length > 0 ? d12 = o15.data : d12 = c16?.slice(s8, u9 + 1), !(d12 == null || r11 == null || a11 == null || t10 == null || n10 == null || t10?.length === 0 || n10?.length === 0)) return gP({ displayedData: d12, xAxis: r11, yAxis: a11, zAxis: i9, scatterSettings: o15, xAxisTicks: t10, yAxisTicks: n10, cells: l12 });
  }
});
var tB = ["id"];
var aB = ["onMouseEnter", "onClick", "onMouseLeave"];
var nB = ["animationBegin", "animationDuration", "animationEasing", "hide", "isAnimationActive", "legendType", "lineJointType", "lineType", "shape", "xAxisId", "yAxisId", "zAxisId"];
function Dd(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = iB(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function iB(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function an3() {
  return an3 = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, an3.apply(null, arguments);
}
function xP(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Dr(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? xP(Object(t10), true).forEach(function(a11) {
      oB(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : xP(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function oB(e14, r11, t10) {
  return (r11 = lB(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function lB(e14) {
  var r11 = cB(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function cB(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var fB = (e14) => {
  var { dataKey: r11, name: t10, fill: a11, legendType: n10, hide: i9 } = e14;
  return [{ inactive: i9, dataKey: r11, type: n10, color: a11, value: Be4(t10, r11), payload: e14 }];
};
var pB = te7.memo((e14) => {
  var { dataKey: r11, points: t10, stroke: a11, strokeWidth: n10, fill: i9, name: o15, hide: l12, tooltipType: c16, id: s8 } = e14, u9 = { dataDefinedOnItem: t10?.map((d12) => d12.tooltipPayload), getPosition: (d12) => {
    var f10;
    return t10 == null || (f10 = t10[Number(d12)]) === null || f10 === void 0 ? void 0 : f10.tooltipPosition;
  }, settings: { stroke: a11, strokeWidth: n10, fill: i9, nameKey: void 0, dataKey: r11, name: Be4(o15, r11), hide: l12, type: c16, color: i9, unit: "", graphicalItemId: s8 } };
  return te7.createElement(De4, { tooltipEntrySettings: u9 });
});
function mB(e14) {
  var { points: r11, props: t10 } = e14, { line: a11, lineType: n10, lineJointType: i9 } = t10;
  if (!a11) return null;
  var o15 = X11(t10), l12 = Ee6(a11), c16, s8;
  if (n10 === "joint") c16 = r11.map((y16) => {
    var v9, g13;
    return { x: (v9 = y16.cx) !== null && v9 !== void 0 ? v9 : null, y: (g13 = y16.cy) !== null && g13 !== void 0 ? g13 : null };
  });
  else if (n10 === "fitting") {
    var { xmin: u9, xmax: d12, a: f10, b: p12 } = Pf(r11), m18 = (y16) => f10 * y16 + p12;
    c16 = [{ x: u9, y: m18(u9) }, { x: d12, y: m18(d12) }];
  }
  var h13 = Dr(Dr(Dr({}, o15), {}, { fill: "none", stroke: o15 && o15.fill }, l12), {}, { points: c16 });
  return te7.isValidElement(a11) ? s8 = te7.cloneElement(a11, h13) : typeof a11 == "function" ? s8 = a11(h13) : s8 = te7.createElement(Mr, an3({}, h13, { type: i9 })), te7.createElement(T14, { className: "recharts-scatter-line", key: "recharts-scatter-line" }, s8);
}
function vB(e14) {
  var { showLabels: r11, points: t10, children: a11 } = e14, n10 = st4(), i9 = PP(() => t10?.map((o15) => {
    var l12, c16, s8 = { x: (l12 = o15.x) !== null && l12 !== void 0 ? l12 : 0, y: (c16 = o15.y) !== null && c16 !== void 0 ? c16 : 0, width: o15.width, height: o15.height, lowerWidth: o15.width, upperWidth: o15.width };
    return Dr(Dr({}, s8), {}, { value: void 0, payload: o15.payload, viewBox: s8, parentViewBox: n10, fill: void 0 });
  }), [n10, t10]);
  return te7.createElement(Jr, { value: r11 ? i9 : void 0 }, a11);
}
function hB(e14) {
  var { points: r11, allOtherScatterProps: t10 } = e14, { shape: a11, activeShape: n10, dataKey: i9 } = t10, { id: o15 } = t10, l12 = Dd(t10, tB), c16 = E17(fr2), { onMouseEnter: s8, onClick: u9, onMouseLeave: d12 } = t10, f10 = Dd(t10, aB), p12 = gt5(s8, i9, o15), m18 = xt5(d12), h13 = bt4(u9, i9, o15);
  if (!If(r11)) return null;
  var y16 = X11(l12);
  return te7.createElement(te7.Fragment, null, te7.createElement(mB, { points: r11, props: l12 }), r11.map((v9, g13) => {
    var x18 = n10 != null && n10 !== false, b14 = x18 && c16 === String(g13), P16 = x18 && b14 ? n10 : a11, A13 = Dr(Dr(Dr({}, y16), v9), {}, { index: g13, [xn3]: String(o15) });
    return te7.createElement(U10, { key: "symbol-".concat(v9?.cx, "-").concat(v9?.cy, "-").concat(v9?.size, "-").concat(g13), zIndex: b14 ? V14.activeDot : void 0 }, te7.createElement(T14, an3({ className: "recharts-scatter-symbol" }, Ve3(f10, v9, g13), { onMouseEnter: p12(v9, g13), onMouseLeave: m18(v9, g13), onClick: h13(v9, g13) }), te7.createElement(vP, an3({ option: P16, isActive: b14 }, A13))));
  }));
}
function yB(e14) {
  var { previousPointsRef: r11, props: t10 } = e14, { points: a11, isAnimationActive: n10, animationBegin: i9, animationDuration: o15, animationEasing: l12 } = t10, c16 = r11.current, s8 = Ue2(t10, "recharts-scatter-"), [u9, d12] = uB(false), f10 = bP(() => {
    d12(false);
  }, []), p12 = bP(() => {
    d12(true);
  }, []), m18 = !u9;
  return te7.createElement(vB, { showLabels: m18, points: a11 }, t10.children, te7.createElement(Ye4, { animationId: s8, begin: i9, duration: o15, isActive: n10, easing: l12, onAnimationEnd: f10, onAnimationStart: p12, key: s8 }, (h13) => {
    var y16 = h13 === 1 ? a11 : a11?.map((v9, g13) => {
      var x18 = c16 && c16[g13];
      return x18 ? Dr(Dr({}, v9), {}, { cx: v9.cx == null ? void 0 : B18(x18.cx, v9.cx, h13), cy: v9.cy == null ? void 0 : B18(x18.cy, v9.cy, h13), size: B18(x18.size, v9.size, h13) }) : Dr(Dr({}, v9), {}, { size: B18(0, v9.size, h13) });
    });
    return h13 > 0 && (r11.current = y16), te7.createElement(T14, null, te7.createElement(hB, { points: y16, allOtherScatterProps: t10, showLabels: m18 }));
  }), te7.createElement(pr3, { label: t10.label }));
}
function gP(e14) {
  var { displayedData: r11, xAxis: t10, yAxis: a11, zAxis: n10, scatterSettings: i9, xAxisTicks: o15, yAxisTicks: l12, cells: c16 } = e14, s8 = Z10(t10.dataKey) ? i9.dataKey : t10.dataKey, u9 = Z10(a11.dataKey) ? i9.dataKey : a11.dataKey, d12 = n10 && n10.dataKey, f10 = n10 ? n10.range : pt5.range, p12 = f10 && f10[0], m18 = t10.scale.bandwidth ? t10.scale.bandwidth() : 0, h13 = a11.scale.bandwidth ? a11.scale.bandwidth() : 0;
  return r11.map((y16, v9) => {
    var g13 = _13(y16, s8), x18 = _13(y16, u9), b14 = !Z10(d12) && _13(y16, d12) || "-", P16 = [{ name: Z10(t10.dataKey) ? i9.name : t10.name || String(t10.dataKey), unit: t10.unit || "", value: g13, payload: y16, dataKey: s8, type: i9.tooltipType, graphicalItemId: i9.id }, { name: Z10(a11.dataKey) ? i9.name : a11.name || String(a11.dataKey), unit: a11.unit || "", value: x18, payload: y16, dataKey: u9, type: i9.tooltipType, graphicalItemId: i9.id }];
    b14 !== "-" && n10 != null && P16.push({ name: n10.name || n10.dataKey, unit: n10.unit || "", value: b14, payload: y16, dataKey: d12, type: i9.tooltipType, graphicalItemId: i9.id });
    var A13 = zt3({ axis: t10, ticks: o15, bandSize: m18, entry: y16, index: v9, dataKey: s8 }), O12 = zt3({ axis: a11, ticks: l12, bandSize: h13, entry: y16, index: v9, dataKey: u9 }), w9 = b14 !== "-" && n10 != null ? n10.scale.map(b14) : p12, S11 = w9 == null ? 0 : Math.sqrt(Math.max(w9, 0) / Math.PI);
    return Dr(Dr({}, y16), {}, { cx: A13, cy: O12, x: A13 == null ? void 0 : A13 - S11, y: O12 == null ? void 0 : O12 - S11, width: 2 * S11, height: 2 * S11, size: w9, node: { x: g13, y: x18, z: b14 }, tooltipPayload: P16, tooltipPosition: { x: A13, y: O12 }, payload: y16 }, c16 && c16[v9] && c16[v9].props);
  });
}
var gB = (e14, r11, t10) => ({ x: e14.cx, y: e14.cy, value: Number(t10 === "x" ? e14.node.x : e14.node.y), errorVal: _13(e14, r11) });
function xB(e14) {
  var { hide: r11, points: t10, className: a11, needClip: n10, xAxisId: i9, yAxisId: o15, id: l12 } = e14, c16 = sB(null);
  if (r11) return null;
  var s8 = dB("recharts-scatter", a11), u9 = l12;
  return te7.createElement(U10, { zIndex: e14.zIndex }, te7.createElement(T14, { className: s8, clipPath: n10 ? "url(#clipPath-".concat(u9, ")") : void 0, id: l12 }, n10 && te7.createElement("defs", null, te7.createElement(Ca, { clipPathId: u9, xAxisId: i9, yAxisId: o15 })), te7.createElement(si2, { xAxisId: i9, yAxisId: o15, data: t10, dataPointFormatter: gB, errorBarOffset: 0 }, te7.createElement(T14, { key: "recharts-scatter-symbols" }, te7.createElement(yB, { props: e14, previousPointsRef: c16 })))));
}
var AP = { xAxisId: 0, yAxisId: 0, zAxisId: 0, label: false, line: false, legendType: "circle", lineType: "joint", lineJointType: "linear", shape: "circle", hide: false, isAnimationActive: "auto", animationBegin: 0, animationDuration: 400, animationEasing: "linear", zIndex: V14.scatter };
function bB(e14) {
  var r11 = L11(e14, AP), { animationBegin: t10, animationDuration: a11, animationEasing: n10, hide: i9, isAnimationActive: o15, legendType: l12, lineJointType: c16, lineType: s8, shape: u9, xAxisId: d12, yAxisId: f10, zAxisId: p12 } = r11, m18 = Dd(r11, nB), { needClip: h13 } = na(d12, f10), y16 = PP(() => yt4(e14.children, zr), [e14.children]), v9 = F10(), g13 = E17((x18) => yP(x18, d12, f10, p12, e14.id, y16, v9));
  return h13 == null || g13 == null ? null : te7.createElement(te7.Fragment, null, te7.createElement(pB, { dataKey: e14.dataKey, points: g13, stroke: e14.stroke, strokeWidth: e14.strokeWidth, fill: e14.fill, name: e14.name, hide: e14.hide, tooltipType: e14.tooltipType, id: e14.id }), te7.createElement(xB, an3({}, m18, { xAxisId: d12, yAxisId: f10, zAxisId: p12, lineType: s8, lineJointType: c16, legendType: l12, shape: u9, hide: i9, isAnimationActive: o15, animationBegin: t10, animationDuration: a11, animationEasing: n10, points: g13, needClip: h13 })));
}
function PB(e14) {
  var r11 = L11(e14, AP), t10 = F10();
  return te7.createElement(Te3, { id: r11.id, type: "scatter" }, (a11) => te7.createElement(te7.Fragment, null, te7.createElement(wa, { legendPayload: fB(r11) }), te7.createElement(Sa, { type: "scatter", id: a11, data: r11.data, xAxisId: r11.xAxisId, yAxisId: r11.yAxisId, zAxisId: r11.zAxisId, dataKey: r11.dataKey, hide: r11.hide, name: r11.name, tooltipType: r11.tooltipType, isPanorama: t10 }), te7.createElement(bB, an3({}, r11, { id: a11 }))));
}
var OP = te7.memo(PB, Je5);
OP.displayName = "Scatter";
var AB = ["domain", "range"];
var OB = ["domain", "range"];
function wP(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = wB(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function wB(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function EP(e14, r11) {
  return e14 === r11 ? true : Array.isArray(e14) && e14.length === 2 && Array.isArray(r11) && r11.length === 2 ? e14[0] === r11[0] && e14[1] === r11[1] : false;
}
function Kc(e14, r11) {
  if (e14 === r11) return true;
  var { domain: t10, range: a11 } = e14, n10 = wP(e14, AB), { domain: i9, range: o15 } = r11, l12 = wP(r11, OB);
  return !EP(t10, i9) || !EP(a11, o15) ? false : Je5(n10, l12);
}
var EB = ["type"];
var SB = ["dangerouslySetInnerHTML", "ticks", "scale"];
var IB = ["id", "scale"];
function Td() {
  return Td = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Td.apply(null, arguments);
}
function SP(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function IP(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? SP(Object(t10), true).forEach(function(a11) {
      RB(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : SP(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function RB(e14, r11, t10) {
  return (r11 = CB(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function CB(e14) {
  var r11 = jB(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function jB(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Ld(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = kB(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function kB(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function NB(e14) {
  var r11 = M12(), t10 = TB(null), a11 = An2(), { type: n10 } = e14, i9 = Ld(e14, EB), o15 = ft5(a11, "xAxis", n10), l12 = DB(() => {
    if (o15 != null) return IP(IP({}, i9), {}, { type: o15 });
  }, [i9, o15]);
  return RP(() => {
    l12 != null && (t10.current === null ? r11(Sg(l12)) : t10.current !== l12 && r11(Ig({ prev: t10.current, next: l12 })), t10.current = l12);
  }, [l12, r11]), RP(() => () => {
    t10.current && (r11(Rg(t10.current)), t10.current = null);
  }, [r11]), null;
}
var MB = (e14) => {
  var { xAxisId: r11, className: t10 } = e14, a11 = E17(bn3), n10 = F10(), i9 = "xAxis", o15 = E17((v9) => wl(v9, i9, r11, n10)), l12 = E17((v9) => yu(v9, r11)), c16 = E17((v9) => rv(v9, r11)), s8 = E17((v9) => $s(v9, r11));
  if (l12 == null || c16 == null || s8 == null) return null;
  var { dangerouslySetInnerHTML: u9, ticks: d12, scale: f10 } = e14, p12 = Ld(e14, SB), { id: m18, scale: h13 } = s8, y16 = Ld(s8, IB);
  return oa.createElement(ci2, Td({}, p12, y16, { x: c16.x, y: c16.y, width: l12.width, height: l12.height, className: LB("recharts-".concat(i9, " ").concat(i9), t10), viewBox: a11, ticks: o15, axisType: i9, axisId: r11 }));
};
var _B = { allowDataOverflow: ze5.allowDataOverflow, allowDecimals: ze5.allowDecimals, allowDuplicatedCategory: ze5.allowDuplicatedCategory, angle: ze5.angle, axisLine: tt6.axisLine, height: ze5.height, hide: false, includeHidden: ze5.includeHidden, interval: ze5.interval, label: false, minTickGap: ze5.minTickGap, mirror: ze5.mirror, orientation: ze5.orientation, padding: ze5.padding, reversed: ze5.reversed, scale: ze5.scale, tick: ze5.tick, tickCount: ze5.tickCount, tickLine: tt6.tickLine, tickSize: tt6.tickSize, type: ze5.type, niceTicks: ze5.niceTicks, xAxisId: 0 };
var BB = (e14) => {
  var r11 = L11(e14, _B);
  return oa.createElement(oa.Fragment, null, oa.createElement(NB, { allowDataOverflow: r11.allowDataOverflow, allowDecimals: r11.allowDecimals, allowDuplicatedCategory: r11.allowDuplicatedCategory, angle: r11.angle, dataKey: r11.dataKey, domain: r11.domain, height: r11.height, hide: r11.hide, id: r11.xAxisId, includeHidden: r11.includeHidden, interval: r11.interval, minTickGap: r11.minTickGap, mirror: r11.mirror, name: r11.name, orientation: r11.orientation, padding: r11.padding, reversed: r11.reversed, scale: r11.scale, tick: r11.tick, tickCount: r11.tickCount, tickFormatter: r11.tickFormatter, ticks: r11.ticks, type: r11.type, unit: r11.unit, niceTicks: r11.niceTicks }), oa.createElement(MB, r11));
};
var CP = oa.memo(BB, Kc);
CP.displayName = "XAxis";
var KB = ["type"];
var zB = ["dangerouslySetInnerHTML", "ticks", "scale"];
var WB = ["id", "scale"];
function Nd() {
  return Nd = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Nd.apply(null, arguments);
}
function jP(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function kP(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? jP(Object(t10), true).forEach(function(a11) {
      FB(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : jP(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function FB(e14, r11, t10) {
  return (r11 = VB(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function VB(e14) {
  var r11 = XB(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function XB(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Md(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = GB(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function GB(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function ZB(e14) {
  var r11 = M12(), t10 = Bd(null), a11 = An2(), { type: n10 } = e14, i9 = Md(e14, KB), o15 = ft5(a11, "yAxis", n10), l12 = YB(() => {
    if (o15 != null) return kP(kP({}, i9), {}, { type: o15 });
  }, [o15, i9]);
  return _d(() => {
    l12 != null && (t10.current === null ? r11(Cg(l12)) : t10.current !== l12 && r11(jg({ prev: t10.current, next: l12 })), t10.current = l12);
  }, [l12, r11]), _d(() => () => {
    t10.current && (r11(kg(t10.current)), t10.current = null);
  }, [r11]), null;
}
function qB(e14) {
  var { yAxisId: r11, className: t10, width: a11, label: n10 } = e14, i9 = Bd(null), o15 = Bd(null), l12 = E17(bn3), c16 = F10(), s8 = M12(), u9 = "yAxis", d12 = E17((A13) => gu(A13, r11)), f10 = E17((A13) => tv(A13, r11)), p12 = E17((A13) => wl(A13, u9, r11, c16)), m18 = E17((A13) => Js(A13, r11));
  if (_d(() => {
    if (!(a11 !== "auto" || !d12 || Qi(n10) || HB(n10) || m18 == null)) {
      var A13 = i9.current;
      if (A13) {
        var O12 = A13.getCalculatedWidth();
        Math.round(d12.width) !== Math.round(O12) && s8(Ng({ id: r11, width: O12 }));
      }
    }
  }, [p12, d12, s8, n10, r11, a11, m18]), d12 == null || f10 == null || m18 == null) return null;
  var { dangerouslySetInnerHTML: h13, ticks: y16, scale: v9 } = e14, g13 = Md(e14, zB), { id: x18, scale: b14 } = m18, P16 = Md(m18, WB);
  return la.createElement(ci2, Nd({}, g13, P16, { ref: i9, labelRef: o15, x: f10.x, y: f10.y, tickTextProps: a11 === "auto" ? { width: void 0 } : { width: a11 }, width: d12.width, height: d12.height, className: UB("recharts-".concat(u9, " ").concat(u9), t10), viewBox: l12, ticks: p12, axisType: u9, axisId: r11 }));
}
var $B = { allowDataOverflow: We3.allowDataOverflow, allowDecimals: We3.allowDecimals, allowDuplicatedCategory: We3.allowDuplicatedCategory, angle: We3.angle, axisLine: tt6.axisLine, hide: false, includeHidden: We3.includeHidden, interval: We3.interval, label: false, minTickGap: We3.minTickGap, mirror: We3.mirror, orientation: We3.orientation, padding: We3.padding, reversed: We3.reversed, scale: We3.scale, tick: We3.tick, tickCount: We3.tickCount, tickLine: tt6.tickLine, tickSize: tt6.tickSize, type: We3.type, niceTicks: We3.niceTicks, width: We3.width, yAxisId: 0 };
var JB = (e14) => {
  var r11 = L11(e14, $B);
  return la.createElement(la.Fragment, null, la.createElement(ZB, { interval: r11.interval, id: r11.yAxisId, scale: r11.scale, type: r11.type, domain: r11.domain, allowDataOverflow: r11.allowDataOverflow, dataKey: r11.dataKey, allowDuplicatedCategory: r11.allowDuplicatedCategory, allowDecimals: r11.allowDecimals, tickCount: r11.tickCount, padding: r11.padding, includeHidden: r11.includeHidden, reversed: r11.reversed, ticks: r11.ticks, width: r11.width, orientation: r11.orientation, mirror: r11.mirror, hide: r11.hide, unit: r11.unit, name: r11.name, angle: r11.angle, minTickGap: r11.minTickGap, tick: r11.tick, tickFormatter: r11.tickFormatter, niceTicks: r11.niceTicks }), la.createElement(qB, r11));
};
var DP = la.memo(JB, Kc);
DP.displayName = "YAxis";
function eK(e14) {
  var r11 = M12(), t10 = QB(null);
  return TP(() => {
    t10.current === null ? r11(Dg(e14)) : t10.current !== e14 && r11(Tg({ prev: t10.current, next: e14 })), t10.current = e14;
  }, [e14, r11]), TP(() => () => {
    t10.current && (r11(Lg(t10.current)), t10.current = null);
  }, [r11]), null;
}
var rK = { zAxisId: 0, range: pt5.range, scale: pt5.scale, type: pt5.type };
function NP(e14) {
  var r11 = L11(e14, rK);
  return LP.createElement(eK, { domain: r11.domain, id: r11.zAxisId, dataKey: r11.dataKey, name: r11.name, unit: r11.unit, range: r11.range, scale: r11.scale, type: r11.type, allowDuplicatedCategory: pt5.allowDuplicatedCategory, allowDataOverflow: pt5.allowDataOverflow, reversed: pt5.reversed, includeHidden: pt5.includeHidden });
}
NP.displayName = "ZAxis";
var oK = { begin: 0, duration: 1e3, easing: "ease", isActive: true, canBegin: true, onAnimationEnd: () => {
}, onAnimationStart: () => {
} };
function zc(e14) {
  var r11 = L11(e14, oK), { animationId: t10, from: a11, to: n10, attributeName: i9, isActive: o15, canBegin: l12, duration: c16, easing: s8, begin: u9, onAnimationEnd: d12, onAnimationStart: f10, children: p12 } = r11, m18 = Sn4(), h13 = o15 === "auto" ? !Pr.isSsr && !m18 : o15, y16 = rl(t10 + i9, r11.animationManager), [v9, g13] = iK(() => h13 ? a11 : n10), x18 = nK(false), b14 = tK(() => {
    g13(a11), f10();
  }, [a11, f10]);
  if (aK(() => {
    if (!h13 || !l12) return ye6;
    x18.current = true;
    var A13 = y16.subscribe(g13);
    return y16.start([b14, u9, n10, c16, d12]), () => {
      y16.stop(), A13 && A13(), d12();
    };
  }, [h13, l12, c16, s8, u9, b14, d12, y16, n10, a11]), !h13) return p12({ [i9]: n10 });
  if (!l12) return p12({ [i9]: a11 });
  if (x18.current) {
    var P16 = Rn2([i9], c16, s8);
    return p12({ transition: P16, [i9]: v9 });
  }
  return p12({ [i9]: a11 });
}
var lK = ["direction", "width", "dataKey", "isAnimationActive", "animationBegin", "animationDuration", "animationEasing"];
function yo() {
  return yo = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, yo.apply(null, arguments);
}
function MP(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function _P(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? MP(Object(t10), true).forEach(function(a11) {
      cK(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : MP(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function cK(e14, r11, t10) {
  return (r11 = sK(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function sK(e14) {
  var r11 = uK(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function uK(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function dK(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = fK(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function fK(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function pK(e14) {
  var { direction: r11, width: t10, dataKey: a11, isAnimationActive: n10, animationBegin: i9, animationDuration: o15, animationEasing: l12 } = e14, c16 = dK(e14, lK), s8 = X11(c16), { data: u9, dataPointFormatter: d12, xAxisId: f10, yAxisId: p12, errorBarOffset: m18 } = Rb(), h13 = Bg(f10), y16 = Kg(p12);
  if (h13?.scale == null || y16?.scale == null || u9 == null || r11 === "x" && h13.type !== "number") return null;
  var v9 = u9.map((g13, x18) => {
    var { x: b14, y: P16, value: A13, errorVal: O12 } = d12(g13, a11, r11);
    if (!O12 || b14 == null || P16 == null) return null;
    var w9 = [], S11, I24;
    if (Array.isArray(O12)) {
      var [R13, C11] = O12;
      if (R13 == null || C11 == null) return null;
      S11 = R13, I24 = C11;
    } else S11 = I24 = O12;
    if (r11 === "x") {
      var { scale: N19 } = h13, j15 = P16 + m18, D18 = j15 + t10, G20 = j15 - t10, H14 = N19.map(A13 - S11), ie6 = N19.map(A13 + I24);
      H14 != null && ie6 != null && (w9.push({ x1: ie6, y1: D18, x2: ie6, y2: G20 }), w9.push({ x1: H14, y1: j15, x2: ie6, y2: j15 }), w9.push({ x1: H14, y1: D18, x2: H14, y2: G20 }));
    } else if (r11 === "y") {
      var { scale: Y10 } = y16, oe8 = b14 + m18, ae11 = oe8 - t10, fe9 = oe8 + t10, Me5 = Y10.map(A13 - S11), Pe5 = Y10.map(A13 + I24);
      Me5 != null && Pe5 != null && (w9.push({ x1: ae11, y1: Pe5, x2: fe9, y2: Pe5 }), w9.push({ x1: oe8, y1: Me5, x2: oe8, y2: Pe5 }), w9.push({ x1: ae11, y1: Me5, x2: fe9, y2: Me5 }));
    }
    var Fe5 = r11 === "x" ? "scaleX" : "scaleY", ot4 = "".concat(b14 + m18, "px ").concat(P16 + m18, "px");
    return At2.createElement(T14, yo({ className: "recharts-errorBar", key: "bar-".concat(b14, "-").concat(P16, "-").concat(A13, "-").concat(x18) }, s8), w9.map((xr, ir) => {
      var pn4 = n10 ? { transformOrigin: ot4 } : void 0;
      return At2.createElement(zc, { animationId: "error-bar-".concat(r11, "_").concat(xr.x1, "-").concat(xr.x2, "-").concat(xr.y1, "-").concat(xr.y2), from: "".concat(Fe5, "(0)"), to: "".concat(Fe5, "(1)"), attributeName: "transform", begin: i9, easing: l12, isActive: n10, duration: o15, key: "errorbar-".concat(x18, "-").concat(xr.x1, "-").concat(xr.y1, "-").concat(xr.x2, "-").concat(xr.y2, "-").concat(ir) }, (J15) => At2.createElement("line", yo({}, xr, { style: _P(_P({}, pn4), J15) })));
    }));
  });
  return At2.createElement(T14, { className: "recharts-errorBars" }, v9);
}
function mK(e14) {
  var r11 = cr();
  return e14 ?? (r11 != null && r11 === "horizontal" ? "y" : "x");
}
var vK = { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, isAnimationActive: true, animationBegin: 0, animationDuration: 400, animationEasing: "ease-in-out", zIndex: V14.line };
function BP(e14) {
  var r11 = mK(e14.direction), t10 = L11(e14, vK), { width: a11, isAnimationActive: n10, animationBegin: i9, animationDuration: o15, animationEasing: l12, zIndex: c16 } = t10;
  return At2.createElement(At2.Fragment, null, At2.createElement(Cb, { dataKey: t10.dataKey, direction: r11 }), At2.createElement(U10, { zIndex: c16 }, At2.createElement(pK, yo({}, t10, { direction: r11, width: a11, isAnimationActive: n10, animationBegin: i9, animationDuration: o15, animationEasing: l12 }))));
}
BP.displayName = "ErrorBar";
var yK = (e14, r11) => r11;
var go = fe7([yK, z15, Ir, Ke4, ku, Rr2, Lv, me9], zv);
function gK(e14) {
  return "getBBox" in e14.currentTarget && typeof e14.currentTarget.getBBox == "function";
}
function di2(e14) {
  var r11 = e14.currentTarget.getBoundingClientRect(), t10, a11;
  if (gK(e14)) {
    var n10 = e14.currentTarget.getBBox();
    t10 = n10.width > 0 ? r11.width / n10.width : 1, a11 = n10.height > 0 ? r11.height / n10.height : 1;
  } else {
    var i9 = e14.currentTarget;
    t10 = i9.offsetWidth > 0 ? r11.width / i9.offsetWidth : 1, a11 = i9.offsetHeight > 0 ? r11.height / i9.offsetHeight : 1;
  }
  var o15 = (l12, c16) => ({ relativeX: Math.round((l12 - r11.left) / t10), relativeY: Math.round((c16 - r11.top) / a11) });
  return "touches" in e14 ? Array.from(e14.touches).map((l12) => o15(l12.clientX, l12.clientY)) : o15(e14.clientX, e14.clientY);
}
var zd = T3("mouseClick");
var Wd = wr();
Wd.startListening({ actionCreator: zd, effect: (e14, r11) => {
  var t10 = e14.payload, a11 = go(r11.getState(), di2(t10));
  a11?.activeIndex != null && r11.dispatch(pv({ activeIndex: a11.activeIndex, activeDataKey: void 0, activeCoordinate: a11.activeCoordinate }));
} });
var Wc = T3("mouseMove");
var Fd = wr();
var fi2 = null;
var nn3 = null;
var Kd = null;
Fd.startListening({ actionCreator: Wc, effect: (e14, r11) => {
  var t10 = e14.payload, a11 = r11.getState(), { throttleDelay: n10, throttledEvents: i9 } = a11.eventSettings, o15 = i9 === "all" || i9?.includes("mousemove");
  fi2 !== null && (cancelAnimationFrame(fi2), fi2 = null), nn3 !== null && (typeof n10 != "number" || !o15) && (clearTimeout(nn3), nn3 = null), Kd = di2(t10);
  var l12 = () => {
    var c16 = r11.getState(), s8 = va(c16, c16.tooltip.settings.shared);
    if (!Kd) {
      fi2 = null, nn3 = null;
      return;
    }
    if (s8 === "axis") {
      var u9 = go(c16, Kd);
      u9?.activeIndex != null ? r11.dispatch(Cl({ activeIndex: u9.activeIndex, activeDataKey: void 0, activeCoordinate: u9.activeCoordinate })) : r11.dispatch(Rl());
    }
    fi2 = null, nn3 = null;
  };
  if (!o15) {
    l12();
    return;
  }
  n10 === "raf" ? fi2 = requestAnimationFrame(l12) : typeof n10 == "number" && nn3 === null && (nn3 = setTimeout(l12, n10));
} });
function WP(e14, r11) {
  return r11 instanceof HTMLElement ? "HTMLElement <".concat(r11.tagName, ' class="').concat(r11.className, '">') : r11 === window ? "global.window" : e14 === "children" && typeof r11 == "object" && r11 !== null ? "<<CHILDREN>>" : r11;
}
var FP = { accessibilityLayer: true, barCategoryGap: "10%", barGap: 4, barSize: void 0, className: void 0, maxBarSize: void 0, stackOffset: "none", syncId: void 0, syncMethod: "index", baseValue: void 0, reverseStackOrder: false };
var VP = mr({ name: "rootProps", initialState: FP, reducers: { updateOptions: (e14, r11) => {
  var t10;
  e14.accessibilityLayer = r11.payload.accessibilityLayer, e14.barCategoryGap = r11.payload.barCategoryGap, e14.barGap = (t10 = r11.payload.barGap) !== null && t10 !== void 0 ? t10 : FP.barGap, e14.barSize = r11.payload.barSize, e14.maxBarSize = r11.payload.maxBarSize, e14.stackOffset = r11.payload.stackOffset, e14.syncId = r11.payload.syncId, e14.syncMethod = r11.payload.syncMethod, e14.className = r11.payload.className, e14.baseValue = r11.payload.baseValue, e14.reverseStackOrder = r11.payload.reverseStackOrder;
} } });
var XP = VP.reducer;
var { updateOptions: GP } = VP.actions;
var PK = null;
var AK = { updatePolarOptions: (e14, r11) => e14 === null ? r11.payload : (e14.startAngle = r11.payload.startAngle, e14.endAngle = r11.payload.endAngle, e14.cx = r11.payload.cx, e14.cy = r11.payload.cy, e14.innerRadius = r11.payload.innerRadius, e14.outerRadius = r11.payload.outerRadius, e14) };
var HP = mr({ name: "polarOptions", initialState: PK, reducers: AK });
var { updatePolarOptions: YP } = HP.actions;
var UP = HP.reducer;
var Xd = T3("keyDown");
var Gd = T3("focus");
var Hd = T3("blur");
var xo = wr();
var pi2 = null;
var on2 = null;
var Fc = null;
xo.startListening({ actionCreator: Xd, effect: (e14, r11) => {
  Fc = e14.payload, pi2 !== null && (cancelAnimationFrame(pi2), pi2 = null);
  var t10 = r11.getState(), { throttleDelay: a11, throttledEvents: n10 } = t10.eventSettings, i9 = n10 === "all" || n10.includes("keydown");
  on2 !== null && (typeof a11 != "number" || !i9) && (clearTimeout(on2), on2 = null);
  var o15 = () => {
    try {
      var l12 = r11.getState(), c16 = l12.rootProps.accessibilityLayer !== false;
      if (!c16) return;
      var { keyboardInteraction: s8 } = l12.tooltip, u9 = Fc;
      if (u9 !== "ArrowRight" && u9 !== "ArrowLeft" && u9 !== "Enter") return;
      var d12 = ha(s8, Zt(l12), Gt(l12), ga(l12)), f10 = d12 == null ? -1 : Number(d12), p12 = !Number.isFinite(f10) || f10 < 0, m18 = Rr2(l12), h13 = Zt(l12), y16 = va(l12, l12.tooltip.settings.shared);
      if (u9 === "Enter") {
        if (p12) return;
        var v9 = Zi(l12, y16, "hover", String(s8.index));
        r11.dispatch(Gi({ active: !s8.active, activeIndex: s8.index, activeCoordinate: v9 }));
        return;
      }
      var g13 = nv(l12), x18 = g13 === "left-to-right" ? 1 : -1, b14 = u9 === "ArrowRight" ? 1 : -1, P16;
      if (p12) {
        var A13 = Gt(l12), O12 = ga(l12), w9 = b14 * x18, S11 = (j15) => ({ active: false, index: String(j15), dataKey: void 0, graphicalItemId: void 0, coordinate: void 0 });
        if (P16 = -1, w9 > 0) {
          for (var I24 = 0; I24 < h13.length; I24++) if (ha(S11(I24), h13, A13, O12) != null) {
            P16 = I24;
            break;
          }
        } else for (var R13 = h13.length - 1; R13 >= 0; R13--) if (ha(S11(R13), h13, A13, O12) != null) {
          P16 = R13;
          break;
        }
        if (P16 < 0) return;
      } else {
        P16 = f10 + b14 * x18;
        var C11 = m18?.length || h13.length;
        if (C11 === 0 || P16 >= C11 || P16 < 0) return;
      }
      var N19 = Zi(l12, y16, "hover", String(P16));
      r11.dispatch(Gi({ active: true, activeIndex: P16.toString(), activeCoordinate: N19 }));
    } finally {
      pi2 = null, on2 = null;
    }
  };
  if (!i9) {
    o15();
    return;
  }
  a11 === "raf" ? pi2 = requestAnimationFrame(o15) : typeof a11 == "number" && on2 === null && (o15(), Fc = null, on2 = setTimeout(() => {
    Fc ? o15() : (on2 = null, pi2 = null);
  }, a11));
} });
xo.startListening({ actionCreator: Gd, effect: (e14, r11) => {
  var t10 = r11.getState(), a11 = t10.rootProps.accessibilityLayer !== false;
  if (a11) {
    var { keyboardInteraction: n10 } = t10.tooltip;
    if (!n10.active && n10.index == null) {
      var i9 = "0", o15 = va(t10, t10.tooltip.settings.shared), l12 = Zi(t10, o15, "hover", String(i9));
      r11.dispatch(Gi({ active: true, activeIndex: i9, activeCoordinate: l12 }));
    }
  }
} });
xo.startListening({ actionCreator: Hd, effect: (e14, r11) => {
  var t10 = r11.getState(), a11 = t10.rootProps.accessibilityLayer !== false;
  if (a11) {
    var { keyboardInteraction: n10 } = t10.tooltip;
    n10.active && r11.dispatch(Gi({ active: false, activeIndex: n10.index, activeCoordinate: n10.coordinate }));
  }
} });
function Vc(e14) {
  e14.persist();
  var { currentTarget: r11 } = e14;
  return new Proxy(e14, { get: (t10, a11) => {
    if (a11 === "currentTarget") return r11;
    var n10 = Reflect.get(t10, a11);
    return typeof n10 == "function" ? n10.bind(t10) : n10;
  } });
}
var Fr = T3("externalEvent");
var Ud = wr();
var Xc = /* @__PURE__ */ new Map();
var bo = /* @__PURE__ */ new Map();
var Yd = /* @__PURE__ */ new Map();
Ud.startListening({ actionCreator: Fr, effect: (e14, r11) => {
  var { handler: t10, reactEvent: a11 } = e14.payload;
  if (t10 != null) {
    var n10 = a11.type, i9 = Vc(a11);
    Yd.set(n10, { handler: t10, reactEvent: i9 });
    var o15 = Xc.get(n10);
    o15 !== void 0 && (cancelAnimationFrame(o15), Xc.delete(n10));
    var l12 = r11.getState(), { throttleDelay: c16, throttledEvents: s8 } = l12.eventSettings, u9 = s8, d12 = u9 === "all" || u9?.includes(n10), f10 = bo.get(n10);
    f10 !== void 0 && (typeof c16 != "number" || !d12) && (clearTimeout(f10), bo.delete(n10));
    var p12 = () => {
      var y16 = Yd.get(n10);
      try {
        if (!y16) return;
        var { handler: v9, reactEvent: g13 } = y16, x18 = r11.getState(), b14 = { activeCoordinate: _l(x18), activeDataKey: Gn3(x18), activeIndex: fr2(x18), activeLabel: Yi(x18), activeTooltipIndex: fr2(x18), isTooltipActive: Bl(x18) };
        v9 && v9(b14, g13);
      } finally {
        Xc.delete(n10), bo.delete(n10), Yd.delete(n10);
      }
    };
    if (!d12) {
      p12();
      return;
    }
    if (c16 === "raf") {
      var m18 = requestAnimationFrame(p12);
      Xc.set(n10, m18);
    } else if (typeof c16 == "number") {
      if (!bo.has(n10)) {
        p12();
        var h13 = setTimeout(p12, c16);
        bo.set(n10, h13);
      }
    } else p12();
  }
} });
var SK = fe7([Ut2], (e14) => e14.tooltipItemPayloads);
var qP = fe7([SK, (e14, r11) => r11, (e14, r11, t10) => t10], (e14, r11, t10) => {
  if (r11 != null) {
    var a11 = e14.find((i9) => i9.settings.graphicalItemId === t10);
    if (a11 != null) {
      var { getPosition: n10 } = a11;
      if (n10 != null) return n10(r11);
    }
  }
});
var Zd = T3("touchMove");
var qd = wr();
var ln2 = null;
var Da = null;
var $P = null;
var Po = null;
qd.startListening({ actionCreator: Zd, effect: (e14, r11) => {
  var t10 = e14.payload;
  if (!(t10.touches == null || t10.touches.length === 0)) {
    Po = Vc(t10);
    var a11 = r11.getState(), { throttleDelay: n10, throttledEvents: i9 } = a11.eventSettings, o15 = i9 === "all" || i9.includes("touchmove");
    ln2 !== null && (cancelAnimationFrame(ln2), ln2 = null), Da !== null && (typeof n10 != "number" || !o15) && (clearTimeout(Da), Da = null), $P = Array.from(t10.touches).map((c16) => di2({ clientX: c16.clientX, clientY: c16.clientY, currentTarget: t10.currentTarget }));
    var l12 = () => {
      if (Po != null) {
        var c16 = r11.getState(), s8 = va(c16, c16.tooltip.settings.shared);
        if (s8 === "axis") {
          var u9, d12 = (u9 = $P) === null || u9 === void 0 ? void 0 : u9[0];
          if (d12 == null) {
            ln2 = null, Da = null;
            return;
          }
          var f10 = go(c16, d12);
          f10?.activeIndex != null && r11.dispatch(Cl({ activeIndex: f10.activeIndex, activeDataKey: void 0, activeCoordinate: f10.activeCoordinate }));
        } else if (s8 === "item") {
          var p12, m18 = Po.touches[0];
          if (document.elementFromPoint == null || m18 == null) return;
          var h13 = document.elementFromPoint(m18.clientX, m18.clientY);
          if (!h13 || !h13.getAttribute) return;
          var y16 = h13.getAttribute(Vo), v9 = (p12 = h13.getAttribute(xn3)) !== null && p12 !== void 0 ? p12 : void 0, g13 = ya(c16).find((P16) => P16.id === v9);
          if (y16 == null || g13 == null || v9 == null) return;
          var { dataKey: x18 } = g13, b14 = qP(c16, y16, v9);
          r11.dispatch(qr2({ activeDataKey: x18, activeIndex: y16, activeCoordinate: b14, activeGraphicalItemId: v9 }));
        }
        ln2 = null, Da = null;
      }
    };
    if (!o15) {
      l12();
      return;
    }
    n10 === "raf" ? ln2 = requestAnimationFrame(l12) : typeof n10 == "number" && Da === null && (l12(), Po = null, Da = setTimeout(() => {
      Po ? l12() : (Da = null, ln2 = null);
    }, n10));
  }
} });
var Ot2 = { throttleDelay: "raf", throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"] };
var JP = mr({ name: "eventSettings", initialState: Ot2, reducers: { setEventSettings: (e14, r11) => {
  r11.payload.throttleDelay != null && (e14.throttleDelay = r11.payload.throttleDelay), r11.payload.throttledEvents != null && (e14.throttledEvents = Ce4(r11.payload.throttledEvents));
} } });
var { setEventSettings: QP } = JP.actions;
var eA = JP.reducer;
var LK = V2({ brush: Sx, cartesianAxis: Mg, chartData: ch, errorBars: wb, eventSettings: eA, graphicalItems: hg, layout: zf, legend: vp, options: ah, polarAxis: Iy, polarOptions: UP, referenceElements: Xx, renderedTicks: fb, rootProps: XP, tooltip: mv, zIndex: qv });
var rA = function(r11) {
  var t10 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return hr({ reducer: LK, preloadedState: r11, middleware: (a11) => {
    var n10;
    return a11({ serializableCheck: false, immutableCheck: !["commonjs", "es6", "production"].includes((n10 = "es6") !== null && n10 !== void 0 ? n10 : "") }).concat([Wd.middleware, Fd.middleware, xo.middleware, Ud.middleware, qd.middleware]);
  }, enhancers: (a11) => {
    var n10 = a11;
    return typeof a11 == "function" && (n10 = a11()), n10.concat(Ye2({ type: "raf" }));
  }, devTools: Pr.devToolsEnabled && { serialize: { replacer: WP }, name: "recharts-".concat(t10) } });
};
function Mt2(e14) {
  var { preloadedState: r11, children: t10, reduxStoreName: a11 } = e14, n10 = F10(), i9 = NK(null);
  if (n10) return t10;
  i9.current == null && (i9.current = rA(r11, a11));
  var o15 = xi2;
  return tA.createElement(mt2, { context: o15, store: i9.current }, t10);
}
function KK(e14) {
  var { layout: r11, margin: t10 } = e14, a11 = M12(), n10 = F10();
  return BK(() => {
    n10 || (a11(_f(r11)), a11(Bo(t10)));
  }, [a11, n10, r11, t10]), null;
}
var Gc = _K(KK, Je5);
function Hc(e14) {
  var r11 = M12();
  return zK(() => {
    r11(GP(e14));
  }, [r11, e14]), null;
}
var VK = (e14) => {
  var r11 = M12();
  return WK(() => {
    r11(QP(e14));
  }, [r11, e14]), null;
};
var _t2 = FK(VK, Je5);
function aA(e14) {
  var { zIndex: r11, isPanorama: t10 } = e14, a11 = GK(null), n10 = M12();
  return XK(() => (a11.current && n10(Uv({ zIndex: r11, element: a11.current, isPanorama: t10 })), () => {
    n10(Zv({ zIndex: r11, isPanorama: t10 }));
  }), [n10, r11, t10]), cn4.createElement("g", { tabIndex: -1, ref: a11, className: "recharts-zIndex-layer_".concat(r11) });
}
function $d(e14) {
  var { children: r11, isPanorama: t10 } = e14, a11 = E17(Vv);
  if (!a11 || a11.length === 0) return r11;
  var n10 = a11.filter((o15) => o15 < 0), i9 = a11.filter((o15) => o15 > 0);
  return cn4.createElement(cn4.Fragment, null, n10.map((o15) => cn4.createElement(aA, { key: o15, zIndex: o15, isPanorama: t10 })), r11, i9.map((o15) => cn4.createElement(aA, { key: o15, zIndex: o15, isPanorama: t10 })));
}
var HK = ["children"];
function YK(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = UK(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function UK(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function Yc() {
  return Yc = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Yc.apply(null, arguments);
}
var ZK = { width: "100%", height: "100%", display: "block" };
var qK = nA((e14, r11) => {
  var t10 = Tr(), a11 = Lr2(), n10 = Zo();
  if (!Xe4(t10) || !Xe4(a11)) return null;
  var { children: i9, otherAttributes: o15, title: l12, desc: c16 } = e14, s8, u9;
  return o15 != null && (typeof o15.tabIndex == "number" ? s8 = o15.tabIndex : s8 = n10 ? 0 : void 0, typeof o15.role == "string" ? u9 = o15.role : u9 = n10 ? "application" : void 0), sn4.createElement(Vr, Yc({}, o15, { title: l12, desc: c16, role: u9, tabIndex: s8, width: t10, height: a11, style: ZK, ref: r11 }), i9);
});
var $K = (e14) => {
  var { children: r11 } = e14, t10 = E17(Wt3);
  if (!t10) return null;
  var { width: a11, height: n10, y: i9, x: o15 } = t10;
  return sn4.createElement(Vr, { width: a11, height: n10, x: o15, y: i9 }, r11);
};
var Jd = nA((e14, r11) => {
  var { children: t10 } = e14, a11 = YK(e14, HK), n10 = F10();
  return n10 ? sn4.createElement($K, null, sn4.createElement($d, { isPanorama: true }, t10)) : sn4.createElement(qK, Yc({ ref: r11 }, a11), sn4.createElement($d, { isPanorama: false }, t10));
});
function iA() {
  var e14 = M12(), [r11, t10] = QK(null), a11 = E17(Uf);
  return JK(() => {
    if (r11 != null) {
      var n10 = r11.getBoundingClientRect(), i9 = n10.width / r11.offsetWidth;
      W15(i9) && i9 !== a11 && e14(Kf(i9));
    }
  }, [r11, e14, a11]), t10;
}
function oA(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function ez(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? oA(Object(t10), true).forEach(function(a11) {
      rz(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : oA(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function rz(e14, r11, t10) {
  return (r11 = tz(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function tz(e14) {
  var r11 = az(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function az(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
function Ta() {
  return Ta = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Ta.apply(null, arguments);
}
var oz = () => (uh(), null);
function Zc(e14) {
  if (typeof e14 == "number") return e14;
  if (typeof e14 == "string") {
    var r11 = parseFloat(e14);
    if (!Number.isNaN(r11)) return r11;
  }
  return 0;
}
var lz = Ao((e14, r11) => {
  var t10, a11, n10 = lA(null), [i9, o15] = Uc({ containerWidth: Zc((t10 = e14.style) === null || t10 === void 0 ? void 0 : t10.width), containerHeight: Zc((a11 = e14.style) === null || a11 === void 0 ? void 0 : a11.height) }), l12 = $e4((s8, u9) => {
    o15((d12) => {
      var f10 = Math.round(s8), p12 = Math.round(u9);
      return d12.containerWidth === f10 && d12.containerHeight === p12 ? d12 : { containerWidth: f10, containerHeight: p12 };
    });
  }, []), c16 = $e4((s8) => {
    if (typeof r11 == "function" && r11(s8), n10.current != null && (n10.current.disconnect(), n10.current = null), s8 != null && typeof ResizeObserver < "u") {
      var { width: u9, height: d12 } = s8.getBoundingClientRect();
      l12(u9, d12);
      var f10 = (m18) => {
        var h13 = m18[0];
        if (h13 != null) {
          var { width: y16, height: v9 } = h13.contentRect;
          l12(y16, v9);
        }
      }, p12 = new ResizeObserver(f10);
      p12.observe(s8), n10.current = p12;
    }
  }, [r11, l12]);
  return nz(() => () => {
    var s8 = n10.current;
    s8?.disconnect();
  }, [l12]), Ie5.createElement(Ie5.Fragment, null, Ie5.createElement(ut6, { width: i9.containerWidth, height: i9.containerHeight }), Ie5.createElement("div", Ta({ ref: c16 }, e14)));
});
var cz = Ao((e14, r11) => {
  var { width: t10, height: a11 } = e14, [n10, i9] = Uc({ containerWidth: Zc(t10), containerHeight: Zc(a11) }), o15 = $e4((c16, s8) => {
    i9((u9) => {
      var d12 = Math.round(c16), f10 = Math.round(s8);
      return u9.containerWidth === d12 && u9.containerHeight === f10 ? u9 : { containerWidth: d12, containerHeight: f10 };
    });
  }, []), l12 = $e4((c16) => {
    if (typeof r11 == "function" && r11(c16), c16 != null) {
      var { width: s8, height: u9 } = c16.getBoundingClientRect();
      o15(s8, u9);
    }
  }, [r11, o15]);
  return Ie5.createElement(Ie5.Fragment, null, Ie5.createElement(ut6, { width: n10.containerWidth, height: n10.containerHeight }), Ie5.createElement("div", Ta({ ref: l12 }, e14)));
});
var sz = Ao((e14, r11) => {
  var { width: t10, height: a11 } = e14;
  return Ie5.createElement(Ie5.Fragment, null, Ie5.createElement(ut6, { width: t10, height: a11 }), Ie5.createElement("div", Ta({ ref: r11 }, e14)));
});
var uz = Ao((e14, r11) => {
  var { width: t10, height: a11 } = e14;
  return typeof t10 == "string" || typeof a11 == "string" ? Ie5.createElement(cz, Ta({}, e14, { ref: r11 })) : typeof t10 == "number" && typeof a11 == "number" ? Ie5.createElement(sz, Ta({}, e14, { width: t10, height: a11, ref: r11 })) : Ie5.createElement(Ie5.Fragment, null, Ie5.createElement(ut6, { width: t10, height: a11 }), Ie5.createElement("div", Ta({ ref: r11 }, e14)));
});
function dz(e14) {
  return e14 ? lz : uz;
}
var La = Ao((e14, r11) => {
  var { children: t10, className: a11, height: n10, onClick: i9, onContextMenu: o15, onDoubleClick: l12, onMouseDown: c16, onMouseEnter: s8, onMouseLeave: u9, onMouseMove: d12, onMouseUp: f10, onTouchEnd: p12, onTouchMove: m18, onTouchStart: h13, style: y16, width: v9, responsive: g13, dispatchTouchEvents: x18 = true } = e14, b14 = lA(null), P16 = M12(), [A13, O12] = Uc(null), [w9, S11] = Uc(null), I24 = iA(), R13 = bi2(), C11 = R13?.width > 0 ? R13.width : v9, N19 = R13?.height > 0 ? R13.height : n10, j15 = $e4((J15) => {
    I24(J15), typeof r11 == "function" && r11(J15), O12(J15), S11(J15), J15 != null && (b14.current = J15);
  }, [I24, r11, O12, S11]), D18 = $e4((J15) => {
    P16(zd(J15)), P16(Fr({ handler: i9, reactEvent: J15 }));
  }, [P16, i9]), G20 = $e4((J15) => {
    P16(Wc(J15)), P16(Fr({ handler: s8, reactEvent: J15 }));
  }, [P16, s8]), H14 = $e4((J15) => {
    P16(Rl()), P16(Fr({ handler: u9, reactEvent: J15 }));
  }, [P16, u9]), ie6 = $e4((J15) => {
    P16(Wc(J15)), P16(Fr({ handler: d12, reactEvent: J15 }));
  }, [P16, d12]), Y10 = $e4(() => {
    P16(Gd());
  }, [P16]), oe8 = $e4(() => {
    P16(Hd());
  }, [P16]), ae11 = $e4((J15) => {
    P16(Xd(J15.key));
  }, [P16]), fe9 = $e4((J15) => {
    P16(Fr({ handler: o15, reactEvent: J15 }));
  }, [P16, o15]), Me5 = $e4((J15) => {
    P16(Fr({ handler: l12, reactEvent: J15 }));
  }, [P16, l12]), Pe5 = $e4((J15) => {
    P16(Fr({ handler: c16, reactEvent: J15 }));
  }, [P16, c16]), Fe5 = $e4((J15) => {
    P16(Fr({ handler: f10, reactEvent: J15 }));
  }, [P16, f10]), ot4 = $e4((J15) => {
    P16(Fr({ handler: h13, reactEvent: J15 }));
  }, [P16, h13]), xr = $e4((J15) => {
    x18 && P16(Zd(J15)), P16(Fr({ handler: m18, reactEvent: J15 }));
  }, [P16, x18, m18]), ir = $e4((J15) => {
    P16(Fr({ handler: p12, reactEvent: J15 }));
  }, [P16, p12]), pn4 = dz(g13);
  return Ie5.createElement($t3.Provider, { value: A13 }, Ie5.createElement(vs.Provider, { value: w9 }, Ie5.createElement(pn4, { width: C11 ?? y16?.width, height: N19 ?? y16?.height, className: iz("recharts-wrapper", a11), style: ez({ position: "relative", cursor: "default", width: C11, height: N19 }, y16), onClick: D18, onContextMenu: fe9, onDoubleClick: Me5, onFocus: Y10, onBlur: oe8, onKeyDown: ae11, onMouseDown: Pe5, onMouseEnter: G20, onMouseLeave: H14, onMouseMove: ie6, onMouseUp: Fe5, onTouchEnd: ir, onTouchMove: xr, onTouchStart: ot4, ref: j15 }, Ie5.createElement(oz, null), t10)));
});
var fz = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function pz(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = mz(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function mz(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
var qc = vz((e14, r11) => {
  var { width: t10, height: a11, responsive: n10, children: i9, className: o15, style: l12, compact: c16, title: s8, desc: u9 } = e14, d12 = pz(e14, fz), f10 = X11(d12);
  return c16 ? ca.createElement(ca.Fragment, null, ca.createElement(ut6, { width: t10, height: a11 }), ca.createElement(Jd, { otherAttributes: f10, title: s8, desc: u9 }, i9)) : ca.createElement(La, { className: o15, style: l12, width: t10, height: a11, responsive: n10 ?? false, onClick: e14.onClick, onMouseLeave: e14.onMouseLeave, onMouseEnter: e14.onMouseEnter, onMouseMove: e14.onMouseMove, onMouseDown: e14.onMouseDown, onMouseUp: e14.onMouseUp, onContextMenu: e14.onContextMenu, onDoubleClick: e14.onDoubleClick, onTouchStart: e14.onTouchStart, onTouchMove: e14.onTouchMove, onTouchEnd: e14.onTouchEnd }, ca.createElement(Jd, { otherAttributes: f10, title: s8, desc: u9, ref: r11 }, ca.createElement(Hx, null, i9)));
});
function Qd() {
  return Qd = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, Qd.apply(null, arguments);
}
function cA(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function hz(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? cA(Object(t10), true).forEach(function(a11) {
      yz(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : cA(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function yz(e14, r11, t10) {
  return (r11 = gz(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function gz(e14) {
  var r11 = xz(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function xz(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Pz = { top: 5, right: 5, bottom: 5, left: 5 };
var Az = hz({ accessibilityLayer: true, barCategoryGap: "10%", barGap: 4, layout: "horizontal", margin: Pz, responsive: false, reverseStackOrder: false, stackOffset: "none", syncMethod: "index" }, Ot2);
var it2 = bz(function(r11, t10) {
  var a11, n10 = L11(r11.categoricalChartProps, Az), { chartName: i9, defaultTooltipEventType: o15, validateTooltipEventTypes: l12, tooltipPayloadSearcher: c16, categoricalChartProps: s8 } = r11, u9 = { chartName: i9, defaultTooltipEventType: o15, validateTooltipEventTypes: l12, tooltipPayloadSearcher: c16, eventEmitter: void 0 };
  return un5.createElement(Mt2, { preloadedState: { options: u9 }, reduxStoreName: (a11 = s8.id) !== null && a11 !== void 0 ? a11 : i9 }, un5.createElement(Ic, { chartData: s8.data }), un5.createElement(Gc, { layout: n10.layout, margin: n10.margin }), un5.createElement(_t2, { throttleDelay: n10.throttleDelay, throttledEvents: n10.throttledEvents }), un5.createElement(Hc, { baseValue: n10.baseValue, accessibilityLayer: n10.accessibilityLayer, barCategoryGap: n10.barCategoryGap, maxBarSize: n10.maxBarSize, stackOffset: n10.stackOffset, barGap: n10.barGap, barSize: n10.barSize, syncId: n10.syncId, syncMethod: n10.syncMethod, className: n10.className, reverseStackOrder: n10.reverseStackOrder }), un5.createElement(qc, Qd({}, n10, { ref: t10 })));
});
var wz = ["axis"];
var ef = Oz((e14, r11) => sA.createElement(it2, { chartName: "LineChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: wz, tooltipPayloadSearcher: Qe4, categoricalChartProps: e14, ref: r11 }));
var Sz = ["axis", "item"];
var rf = Ez((e14, r11) => uA.createElement(it2, { chartName: "BarChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: Sz, tooltipPayloadSearcher: Qe4, categoricalChartProps: e14, ref: r11 }));
function dA(e14) {
  var r11 = M12();
  return Iz(() => {
    r11(YP(e14));
  }, [r11, e14]), null;
}
var Rz = ["layout"];
function tf() {
  return tf = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, tf.apply(null, arguments);
}
function Cz(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = jz(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function jz(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function fA(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function kz(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? fA(Object(t10), true).forEach(function(a11) {
      Dz(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : fA(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function Dz(e14, r11, t10) {
  return (r11 = Tz(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function Tz(e14) {
  var r11 = Lz(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function Lz(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Mz = { top: 5, right: 5, bottom: 5, left: 5 };
var dn4 = kz({ accessibilityLayer: true, stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: Mz, reverseStackOrder: false, syncMethod: "index", layout: "radial", responsive: false, cx: "50%", cy: "50%", innerRadius: 0, outerRadius: "80%" }, Ot2);
var mi2 = Nz(function(r11, t10) {
  var a11, n10 = L11(r11.categoricalChartProps, dn4), { layout: i9 } = n10, o15 = Cz(n10, Rz), { chartName: l12, defaultTooltipEventType: c16, validateTooltipEventTypes: s8, tooltipPayloadSearcher: u9 } = r11, d12 = { chartName: l12, defaultTooltipEventType: c16, validateTooltipEventTypes: s8, tooltipPayloadSearcher: u9, eventEmitter: void 0 };
  return Na.createElement(Mt2, { preloadedState: { options: d12 }, reduxStoreName: (a11 = n10.id) !== null && a11 !== void 0 ? a11 : l12 }, Na.createElement(Ic, { chartData: n10.data }), Na.createElement(Gc, { layout: i9, margin: n10.margin }), Na.createElement(_t2, { throttleDelay: n10.throttleDelay, throttledEvents: n10.throttledEvents }), Na.createElement(Hc, { baseValue: void 0, accessibilityLayer: n10.accessibilityLayer, barCategoryGap: n10.barCategoryGap, maxBarSize: n10.maxBarSize, stackOffset: n10.stackOffset, barGap: n10.barGap, barSize: n10.barSize, syncId: n10.syncId, syncMethod: n10.syncMethod, className: n10.className, reverseStackOrder: n10.reverseStackOrder }), Na.createElement(dA, { cx: n10.cx, cy: n10.cy, startAngle: n10.startAngle, endAngle: n10.endAngle, innerRadius: n10.innerRadius, outerRadius: n10.outerRadius }), Na.createElement(qc, tf({}, o15, { ref: t10 })));
});
function pA(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function mA(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? pA(Object(t10), true).forEach(function(a11) {
      _z(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : pA(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function _z(e14, r11, t10) {
  return (r11 = Bz(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function Bz(e14) {
  var r11 = Kz(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function Kz(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Wz = ["item"];
var Fz = mA(mA({}, dn4), {}, { layout: "centric", startAngle: 0, endAngle: 360 });
var af = zz((e14, r11) => {
  var t10 = L11(e14, Fz);
  return vA.createElement(mi2, { chartName: "PieChart", defaultTooltipEventType: "item", validateTooltipEventTypes: Wz, tooltipPayloadSearcher: Qe4, categoricalChartProps: t10, ref: r11 });
});
var Vz = ["width", "height", "className", "style", "children", "type"];
function Xz(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = Gz(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function Gz(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function vi() {
  return vi = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, vi.apply(null, arguments);
}
function hA(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function we6(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? hA(Object(t10), true).forEach(function(a11) {
      Oo(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : hA(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function Oo(e14, r11, t10) {
  return (r11 = Hz(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function Hz(e14) {
  var r11 = Yz(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function Yz(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var of = "value";
function $z(e14) {
  return e14 != null && typeof e14 == "object" && "x" in e14 && "y" in e14 && "width" in e14 && "height" in e14 && typeof e14.x == "number" && typeof e14.y == "number" && typeof e14.width == "number" && typeof e14.height == "number";
}
var bA = (e14, r11) => {
  if (!(!e14 || !r11)) return y(e14, r11);
};
var Jz = function(r11) {
  var t10 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "".concat(t10, "children[").concat(r11, "]");
};
var $c = (e14) => {
  var { depth: r11, node: t10, index: a11, dataKey: n10, nameKey: i9, nestedActiveTooltipIndex: o15 } = e14, l12 = r11 === 0 ? "" : Jz(a11, o15), { children: c16 } = t10, s8 = r11 + 1, u9 = c16 && c16.length ? c16.map((m18, h13) => $c({ depth: s8, node: m18, index: h13, dataKey: n10, nameKey: i9, nestedActiveTooltipIndex: l12 })) : null, d12;
  if (u9 && u9.length) d12 = u9.reduce((m18, h13) => m18 + h13.value, 0);
  else {
    var f10 = t10[n10], p12 = typeof f10 == "number" ? f10 : 0;
    d12 = _e7(p12) || p12 <= 0 ? 0 : p12;
  }
  return we6(we6({}, t10), {}, { children: u9, name: _13(t10, i9, ""), [of]: d12, depth: r11, index: a11, tooltipIndex: l12 });
};
var eW = (e14) => ({ x: e14.x, y: e14.y, width: e14.width, height: e14.height });
var rW = (e14, r11) => {
  var t10 = r11 < 0 ? 0 : r11;
  return e14.map((a11) => {
    var n10 = a11[of] * t10;
    return we6(we6({}, a11), {}, { area: _e7(n10) || n10 <= 0 ? 0 : n10 });
  });
};
var tW = (e14, r11, t10) => {
  var a11 = r11 * r11, n10 = e14.area * e14.area, { min: i9, max: o15 } = e14.reduce((l12, c16) => ({ min: Math.min(l12.min, c16.area), max: Math.max(l12.max, c16.area) }), { min: 1 / 0, max: 0 });
  return n10 ? Math.max(a11 * o15 * t10 / n10, n10 / (a11 * i9 * t10)) : 1 / 0;
};
var aW = (e14, r11, t10, a11) => {
  var n10 = r11 ? Math.round(e14.area / r11) : 0;
  (a11 || n10 > t10.height) && (n10 = t10.height);
  for (var i9 = t10.x, o15, l12 = 0, c16 = e14.length; l12 < c16; l12++) o15 = e14[l12], o15 != null && (o15.x = i9, o15.y = t10.y, o15.height = n10, o15.width = Math.min(n10 ? Math.round(o15.area / n10) : 0, t10.x + t10.width - i9), i9 += o15.width);
  return o15 != null && (o15.width += t10.x + t10.width - i9), we6(we6({}, t10), {}, { y: t10.y + n10, height: t10.height - n10 });
};
var nW = (e14, r11, t10, a11) => {
  var n10 = r11 ? Math.round(e14.area / r11) : 0;
  (a11 || n10 > t10.width) && (n10 = t10.width);
  for (var i9 = t10.y, o15, l12 = 0, c16 = e14.length; l12 < c16; l12++) o15 = e14[l12], o15 != null && (o15.x = t10.x, o15.y = i9, o15.width = n10, o15.height = Math.min(n10 ? Math.round(o15.area / n10) : 0, t10.y + t10.height - i9), i9 += o15.height);
  return o15 && (o15.height += t10.y + t10.height - i9), we6(we6({}, t10), {}, { x: t10.x + n10, width: t10.width - n10 });
};
var gA = (e14, r11, t10, a11) => r11 === t10.width ? aW(e14, r11, t10, a11) : nW(e14, r11, t10, a11);
var Jc = (e14, r11) => {
  var { children: t10 } = e14;
  if (t10 && t10.length) {
    var a11 = eW(e14), n10 = [], i9 = 1 / 0, o15, l12, c16 = Math.min(a11.width, a11.height), s8 = rW(t10, a11.width * a11.height / e14[of]), u9 = s8.slice();
    for (n10.area = 0; u9.length > 0; ) if ([o15] = u9, o15 != null) if (n10.push(o15), n10.area += o15.area, l12 = tW(n10, c16, r11), l12 <= i9) u9.shift(), i9 = l12;
    else {
      var d12, f10;
      n10.area -= (d12 = (f10 = n10.pop()) === null || f10 === void 0 ? void 0 : f10.area) !== null && d12 !== void 0 ? d12 : 0, a11 = gA(n10, c16, a11, false), c16 = Math.min(a11.width, a11.height), n10.length = n10.area = 0, i9 = 1 / 0;
    }
    return n10.length && (a11 = gA(n10, c16, a11, true), n10.length = n10.area = 0), we6(we6({}, e14), {}, { children: s8.map((p12) => Jc(p12, r11)) });
  }
  return e14;
};
var nf = we6({ aspectRatio: 0.5 * (1 + Math.sqrt(5)), dataKey: "value", nameKey: "name", type: "flat", isAnimationActive: "auto", isUpdateAnimationActive: "auto", animationBegin: 0, animationDuration: 1500, animationEasing: "linear" }, Ot2);
var iW = { isAnimationFinished: false, formatRoot: null, currentRoot: void 0, nestIndex: [], prevAspectRatio: nf.aspectRatio, prevDataKey: nf.dataKey };
function oW(e14) {
  var { content: r11, nodeProps: t10, type: a11, colorPanel: n10, onMouseEnter: i9, onMouseLeave: o15, onClick: l12 } = e14;
  if (le8.isValidElement(r11)) return le8.createElement(T14, { onMouseEnter: i9, onMouseLeave: o15, onClick: l12 }, le8.cloneElement(r11, t10));
  if (typeof r11 == "function") return le8.createElement(T14, { onMouseEnter: i9, onMouseLeave: o15, onClick: l12 }, r11(t10));
  var { x: c16, y: s8, width: u9, height: d12, index: f10 } = t10, p12 = null;
  u9 > 10 && d12 > 10 && t10.children && a11 === "nest" && (p12 = le8.createElement(Ua, { points: [{ x: c16 + 2, y: s8 + d12 / 2 }, { x: c16 + 6, y: s8 + d12 / 2 + 3 }, { x: c16 + 2, y: s8 + d12 / 2 + 6 }] }));
  var m18 = null, h13 = Jt2(t10.name);
  u9 > 20 && d12 > 20 && h13.width < u9 && h13.height < d12 && (m18 = le8.createElement("text", { x: c16 + 8, y: s8 + d12 / 2 + 7, fontSize: 14 }, t10.name));
  var y16 = n10 || qf;
  return le8.createElement("g", null, le8.createElement(_r, vi({ fill: t10.depth < 2 ? y16[f10 % y16.length] : "rgba(255,255,255,0)", stroke: "#fff" }, H4(t10, ["children"]), { onMouseEnter: i9, onMouseLeave: o15, onClick: l12, "data-recharts-item-index": t10.tooltipIndex })), p12, m18);
}
function lW(e14) {
  var r11 = M12(), t10 = { x: e14.nodeProps.x + e14.nodeProps.width / 2, y: e14.nodeProps.y + e14.nodeProps.height / 2 }, a11 = () => {
    r11(qr2({ activeIndex: e14.nodeProps.tooltipIndex, activeDataKey: e14.dataKey, activeCoordinate: t10, activeGraphicalItemId: e14.id }));
  }, n10 = () => {
  }, i9 = () => {
    r11(Yt3({ activeIndex: e14.nodeProps.tooltipIndex, activeDataKey: e14.dataKey, activeCoordinate: t10, activeGraphicalItemId: e14.id }));
  };
  return le8.createElement(oW, vi({}, e14, { onMouseEnter: a11, onMouseLeave: n10, onClick: i9 }));
}
var cW = le8.memo((e14) => {
  var { dataKey: r11, nameKey: t10, stroke: a11, fill: n10, currentRoot: i9, id: o15 } = e14, l12 = { dataDefinedOnItem: i9, getPosition: ye6, settings: { stroke: a11, strokeWidth: void 0, fill: n10, dataKey: r11, nameKey: t10, name: void 0, hide: false, type: void 0, color: n10, unit: "", graphicalItemId: o15 } };
  return le8.createElement(De4, { tooltipEntrySettings: l12 });
});
function uW(e14) {
  var { content: r11, nodeProps: t10, isLeaf: a11, treemapProps: n10, onNestClick: i9 } = e14, { id: o15, isAnimationActive: l12, animationBegin: c16, animationDuration: s8, animationEasing: u9, isUpdateAnimationActive: d12, type: f10, colorPanel: p12, dataKey: m18, onAnimationStart: h13, onAnimationEnd: y16, onMouseEnter: v9, onClick: g13, onMouseLeave: x18 } = n10, { width: b14, height: P16, x: A13, y: O12 } = t10, w9 = -A13 - b14, S11 = 0, I24 = (D18) => {
    (a11 || f10 === "nest") && typeof v9 == "function" && v9(t10, D18);
  }, R13 = (D18) => {
    (a11 || f10 === "nest") && typeof x18 == "function" && x18(t10, D18);
  }, C11 = () => {
    f10 === "nest" && i9(t10), (a11 || f10 === "nest") && typeof g13 == "function" && g13(t10);
  }, N19 = yA(() => {
    typeof y16 == "function" && y16();
  }, [y16]), j15 = yA(() => {
    typeof h13 == "function" && h13();
  }, [h13]);
  return le8.createElement(zc, { animationId: "treemap-".concat(t10.tooltipIndex), from: "translate(".concat(w9, "px, ").concat(S11, "px)"), to: "translate(0, 0)", attributeName: "transform", begin: c16, easing: u9, isActive: l12, duration: s8, onAnimationStart: j15, onAnimationEnd: N19 }, (D18) => le8.createElement(T14, { onMouseEnter: I24, onMouseLeave: R13, onClick: C11, style: we6(we6({}, D18), {}, { transformOrigin: "".concat(A13, " ").concat(O12) }) }, le8.createElement(lW, { id: o15, content: r11, dataKey: m18, nodeProps: we6(we6({}, t10), {}, { isAnimationActive: l12, isUpdateAnimationActive: !d12, width: b14, height: P16, x: A13, y: O12 }), type: f10, colorPanel: p12 })));
}
var Qc = class extends Uz {
  constructor() {
    super(...arguments), Oo(this, "state", we6({}, iW)), Oo(this, "handleClick", (r11) => {
      var { onClick: t10, type: a11 } = this.props;
      if (a11 === "nest" && r11.children) {
        var { width: n10, height: i9, dataKey: o15, nameKey: l12, aspectRatio: c16 } = this.props, s8 = $c({ depth: 0, node: we6(we6({}, r11), {}, { x: 0, y: 0, width: n10, height: i9 }), index: 0, dataKey: o15, nameKey: l12, nestedActiveTooltipIndex: r11.tooltipIndex }), u9 = Jc(s8, c16), { nestIndex: d12 } = this.state;
        d12.push(r11), this.setState({ formatRoot: u9, currentRoot: s8, nestIndex: d12 });
      }
      t10 && t10(r11);
    }), Oo(this, "handleTouchMove", (r11) => {
      var t10 = r11.touches[0];
      if (t10 != null) {
        var a11 = document.elementFromPoint(t10.clientX, t10.clientY);
        if (!(!a11 || !a11.getAttribute || this.state.formatRoot == null)) {
          var n10 = a11.getAttribute("data-recharts-item-index"), i9 = bA(this.state.formatRoot, n10);
          if ($z(i9)) {
            var { dataKey: o15, dispatch: l12 } = this.props, c16 = { x: i9.x + i9.width / 2, y: i9.y + i9.height / 2 };
            l12(qr2({ activeIndex: n10, activeDataKey: o15, activeCoordinate: c16, activeGraphicalItemId: this.props.id }));
          }
        }
      }
    });
  }
  static getDerivedStateFromProps(r11, t10) {
    if (r11.data !== t10.prevData || r11.type !== t10.prevType || r11.width !== t10.prevWidth || r11.height !== t10.prevHeight || r11.dataKey !== t10.prevDataKey || r11.aspectRatio !== t10.prevAspectRatio) {
      var a11 = $c({ depth: 0, node: { children: r11.data, x: 0, y: 0, width: r11.width, height: r11.height }, index: 0, dataKey: r11.dataKey, nameKey: r11.nameKey }), n10 = Jc(a11, r11.aspectRatio);
      return we6(we6({}, t10), {}, { formatRoot: n10, currentRoot: a11, nestIndex: [a11], prevAspectRatio: r11.aspectRatio, prevData: r11.data, prevWidth: r11.width, prevHeight: r11.height, prevDataKey: r11.dataKey, prevType: r11.type });
    }
    return null;
  }
  handleNestIndex(r11, t10) {
    var { nestIndex: a11 } = this.state, { width: n10, height: i9, dataKey: o15, nameKey: l12, aspectRatio: c16 } = this.props, s8 = $c({ depth: 0, node: we6(we6({}, r11), {}, { x: 0, y: 0, width: n10, height: i9 }), index: 0, dataKey: o15, nameKey: l12, nestedActiveTooltipIndex: r11.tooltipIndex }), u9 = Jc(s8, c16);
    a11 = a11.slice(0, t10 + 1), this.setState({ formatRoot: u9, currentRoot: r11, nestIndex: a11 });
  }
  renderNode(r11, t10) {
    var { content: a11, type: n10 } = this.props, i9 = we6(we6(we6({}, X11(this.props)), t10), {}, { root: r11 }), o15 = !t10.children || !t10.children.length, { currentRoot: l12 } = this.state, c16 = (l12?.children || []).filter((s8) => s8.depth === t10.depth && s8.name === t10.name);
    return !c16.length && r11.depth && n10 === "nest" ? null : le8.createElement(T14, { key: "recharts-treemap-node-".concat(i9.x, "-").concat(i9.y, "-").concat(i9.name), className: "recharts-treemap-depth-".concat(t10.depth) }, le8.createElement(uW, { isLeaf: o15, content: a11, nodeProps: i9, treemapProps: this.props, onNestClick: this.handleClick }), t10.children && t10.children.length ? t10.children.map((s8) => this.renderNode(t10, s8)) : null);
  }
  renderAllNodes() {
    var { formatRoot: r11 } = this.state;
    return r11 ? this.renderNode(r11, r11) : null;
  }
  renderNestIndex() {
    var { nameKey: r11, nestIndexContent: t10 } = this.props, { nestIndex: a11 } = this.state;
    return le8.createElement("div", { className: "recharts-treemap-nest-index-wrapper", style: { marginTop: "8px", textAlign: "center" } }, a11.map((n10, i9) => {
      var o15 = y(n10, r11, "root"), l12 = typeof o15 == "string" ? o15 : "root", c16;
      return le8.isValidElement(t10) && (c16 = le8.cloneElement(t10, n10, i9)), typeof t10 == "function" ? c16 = t10(n10, i9) : c16 = l12, le8.createElement("div", { onClick: this.handleNestIndex.bind(this, n10, i9), key: "nest-index-".concat(lt6()), className: "recharts-treemap-nest-index-box", style: { cursor: "pointer", display: "inline-block", padding: "0 7px", background: "#000", color: "#fff", marginRight: "3px" } }, c16);
    }));
  }
  render() {
    var r11 = this.props, { width: t10, height: a11, className: n10, style: i9, children: o15, type: l12 } = r11, c16 = Xz(r11, Vz), s8 = X11(c16);
    return le8.createElement(le8.Fragment, null, le8.createElement(cW, { dataKey: this.props.dataKey, nameKey: this.props.nameKey, stroke: this.props.stroke, fill: this.props.fill, currentRoot: this.state.currentRoot, id: this.props.id }), le8.createElement(Vr, vi({}, s8, { width: t10, height: l12 === "nest" ? a11 - 30 : a11, onTouchMove: this.handleTouchMove }), this.renderAllNodes(), o15), l12 === "nest" && this.renderNestIndex());
  }
};
Oo(Qc, "displayName", "Treemap");
var pW = ["sourceX", "sourceY", "sourceControlX", "targetX", "targetY", "targetControlX", "linkWidth"];
var mW = ["className", "style", "children", "id"];
function hi2() {
  return hi2 = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, hi2.apply(null, arguments);
}
function AA(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = vW(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function vW(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function PA(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function wt4(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? PA(Object(t10), true).forEach(function(a11) {
      hW(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : PA(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function hW(e14, r11, t10) {
  return (r11 = yW(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function yW(e14) {
  var r11 = gW(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function gW(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var wW = (e14, r11) => {
  var t10 = +e14, a11 = r11 - t10;
  return (n10) => t10 + a11 * n10;
};
var rs = (e14) => e14.y + e14.dy / 2;
var wo = (e14) => e14 && e14.value || 0;
var es = (e14, r11) => r11.reduce((t10, a11) => t10 + wo(e14[a11]), 0);
var EW = (e14, r11, t10) => t10.reduce((a11, n10) => {
  var i9 = r11[n10];
  if (i9 == null) return a11;
  var o15 = e14[i9.source];
  return o15 == null ? a11 : a11 + rs(o15) * wo(r11[n10]);
}, 0);
var SW = (e14, r11, t10) => t10.reduce((a11, n10) => {
  var i9 = r11[n10];
  if (i9 == null) return a11;
  var o15 = e14[i9.target];
  return o15 == null ? a11 : a11 + rs(o15) * wo(r11[n10]);
}, 0);
var IW = (e14, r11) => e14.y - r11.y;
var RW = (e14, r11) => {
  for (var t10 = [], a11 = [], n10 = [], i9 = [], o15 = 0, l12 = e14.length; o15 < l12; o15++) {
    var c16 = e14[o15];
    c16?.source === r11 && (n10.push(c16.target), i9.push(o15)), c16?.target === r11 && (t10.push(c16.source), a11.push(o15));
  }
  return { sourceNodes: t10, sourceLinks: a11, targetLinks: i9, targetNodes: n10 };
};
var OA = (e14, r11) => {
  for (var { targetNodes: t10 } = r11, a11 = 0, n10 = t10.length; a11 < n10; a11++) {
    var i9 = t10[a11];
    if (i9 != null) {
      var o15 = e14[i9];
      o15 && (o15.depth = Math.max(r11.depth + 1, o15.depth), OA(e14, o15));
    }
  }
};
var CW = (e14, r11, t10, a11) => {
  for (var n10, i9, { nodes: o15, links: l12 } = e14, c16 = o15.map((v9, g13) => {
    var x18 = RW(l12, g13);
    return wt4(wt4(wt4({}, v9), x18), {}, { value: Math.max(es(l12, x18.sourceLinks), es(l12, x18.targetLinks)), depth: 0 });
  }), s8 = 0, u9 = c16.length; s8 < u9; s8++) {
    var d12 = c16[s8];
    d12 != null && !d12.sourceNodes.length && OA(c16, d12);
  }
  var f10 = (n10 = (i9 = K4(c16, (v9) => v9.depth)) === null || i9 === void 0 ? void 0 : i9.depth) !== null && n10 !== void 0 ? n10 : 0;
  if (f10 >= 1) for (var p12 = (r11 - t10) / f10, m18 = 0, h13 = c16.length; m18 < h13; m18++) {
    var y16 = c16[m18];
    y16 != null && (y16.targetNodes.length || a11 === "justify" && (y16.depth = f10), y16.x = y16.depth * p12, y16.dx = t10);
  }
  return { tree: c16, maxDepth: f10 };
};
var jW = (e14) => {
  for (var r11 = [], t10 = 0, a11 = e14.length; t10 < a11; t10++) {
    var n10, i9 = e14[t10];
    i9 != null && (r11[i9.depth] || (r11[i9.depth] = []), (n10 = r11[i9.depth]) === null || n10 === void 0 || n10.push(i9));
  }
  return r11;
};
var kW = (e14, r11, t10, a11, n10) => {
  for (var i9 = Math.min(...e14.map((y16) => (r11 - (y16.length - 1) * t10) / Y3(y16, wo))), o15 = 0, l12 = e14.length; o15 < l12; o15++) {
    var c16 = e14[o15];
    if (c16 != null) if (n10 === "top") for (var s8 = 0, u9 = 0, d12 = c16.length; u9 < d12; u9++) {
      var f10 = c16[u9];
      f10 != null && (f10.dy = f10.value * i9, f10.y = s8, s8 += f10.dy + t10);
    }
    else for (var p12 = 0, m18 = c16.length; p12 < m18; p12++) {
      var h13 = c16[p12];
      h13 != null && (h13.y = p12, h13.dy = h13.value * i9);
    }
  }
  return a11.map((y16) => wt4(wt4({}, y16), {}, { dy: wo(y16) * i9 }));
};
var cf = function(r11, t10, a11) {
  for (var n10 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i9 = 0, o15 = r11.length; i9 < o15; i9++) {
    var l12 = r11[i9];
    if (l12 != null) {
      var c16 = l12.length;
      n10 && l12.sort(IW);
      for (var s8 = 0, u9 = 0; u9 < c16; u9++) {
        var d12 = l12[u9];
        if (d12 != null) {
          var f10 = s8 - d12.y;
          f10 > 0 && (d12.y += f10), s8 = d12.y + d12.dy + a11;
        }
      }
      s8 = t10 + a11;
      for (var p12 = c16 - 1; p12 >= 0; p12--) {
        var m18 = l12[p12];
        if (m18 != null) {
          var h13 = m18.y + m18.dy + a11 - s8;
          if (h13 > 0) m18.y -= h13, s8 = m18.y;
          else break;
        }
      }
    }
  }
};
var DW = (e14, r11, t10, a11) => {
  for (var n10 = 0, i9 = r11.length; n10 < i9; n10++) {
    var o15 = r11[n10];
    if (o15 != null) for (var l12 = 0, c16 = o15.length; l12 < c16; l12++) {
      var s8 = o15[l12];
      if (s8 != null && s8.sourceLinks.length) {
        var u9 = es(t10, s8.sourceLinks), d12 = EW(e14, t10, s8.sourceLinks), f10 = d12 / u9;
        s8.y += (f10 - rs(s8)) * a11;
      }
    }
  }
};
var TW = (e14, r11, t10, a11) => {
  for (var n10 = r11.length - 1; n10 >= 0; n10--) {
    var i9 = r11[n10];
    if (i9 != null) for (var o15 = 0, l12 = i9.length; o15 < l12; o15++) {
      var c16 = i9[o15];
      if (c16 != null && c16.targetLinks.length) {
        var s8 = es(t10, c16.targetLinks), u9 = SW(e14, t10, c16.targetLinks), d12 = u9 / s8;
        c16.y += (d12 - rs(c16)) * a11;
      }
    }
  }
};
var LW = (e14, r11) => {
  for (var t10 = 0, a11 = e14.length; t10 < a11; t10++) {
    var n10 = e14[t10];
    if (n10 != null) {
      var i9 = 0, o15 = 0;
      n10.targetLinks.sort((h13, y16) => {
        var v9, g13, x18, b14, P16 = (v9 = r11[h13]) === null || v9 === void 0 ? void 0 : v9.target, A13 = (g13 = r11[y16]) === null || g13 === void 0 ? void 0 : g13.target;
        if (P16 == null || A13 == null) return 0;
        var O12 = (x18 = e14[P16]) === null || x18 === void 0 ? void 0 : x18.y, w9 = (b14 = e14[A13]) === null || b14 === void 0 ? void 0 : b14.y;
        return O12 == null || w9 == null ? 0 : O12 - w9;
      }), n10.sourceLinks.sort((h13, y16) => {
        var v9, g13, x18, b14, P16 = (v9 = r11[h13]) === null || v9 === void 0 ? void 0 : v9.source, A13 = (g13 = r11[y16]) === null || g13 === void 0 ? void 0 : g13.source;
        if (P16 == null || A13 == null) return 0;
        var O12 = (x18 = e14[P16]) === null || x18 === void 0 ? void 0 : x18.y, w9 = (b14 = e14[A13]) === null || b14 === void 0 ? void 0 : b14.y;
        return O12 == null || w9 == null ? 0 : O12 - w9;
      });
      for (var l12 = 0, c16 = n10.targetLinks.length; l12 < c16; l12++) {
        var s8 = n10.targetLinks[l12];
        if (s8 != null) {
          var u9 = r11[s8];
          u9 && (u9.sy = i9, i9 += u9.dy);
        }
      }
      for (var d12 = 0, f10 = n10.sourceLinks.length; d12 < f10; d12++) {
        var p12 = n10.sourceLinks[d12];
        if (p12 != null) {
          var m18 = r11[p12];
          m18 && (m18.ty = o15, o15 += m18.dy);
        }
      }
    }
  }
};
var NW = (e14) => {
  var { data: r11, width: t10, height: a11, iterations: n10, nodeWidth: i9, nodePadding: o15, sort: l12, verticalAlign: c16, align: s8 } = e14, { links: u9 } = r11, { tree: d12 } = CW(r11, t10, i9, s8), f10 = jW(d12), p12 = kW(f10, a11, o15, u9, c16);
  if (cf(f10, a11, o15, l12), c16 === "justify") for (var m18 = 1, h13 = 1; h13 <= n10; h13++) TW(d12, f10, p12, m18 *= 0.99), cf(f10, a11, o15, l12), DW(d12, f10, p12, m18), cf(f10, a11, o15, l12);
  LW(d12, p12);
  var y16 = p12;
  return { nodes: d12, links: y16 };
};
var MW = (e14) => ({ x: +e14.x + +e14.width / 2, y: +e14.y + +e14.height / 2 });
var _W = (e14) => "sourceX" in e14 ? { x: (e14.sourceX + e14.targetX) / 2, y: (e14.sourceY + e14.targetY) / 2 } : void 0;
var BW = (e14, r11, t10) => {
  var { payload: a11 } = e14;
  if (r11 === "node") return { payload: a11, name: _13(a11, t10, ""), value: _13(a11, "value") };
  if ("source" in a11 && a11.source && a11.target) {
    var n10 = _13(a11.source, t10, ""), i9 = _13(a11.target, t10, "");
    return { payload: a11, name: "".concat(n10, " - ").concat(i9), value: _13(a11, "value") };
  }
};
var KW = (e14, r11, t10, a11) => {
  if (!(r11 == null || typeof r11 != "string") && !(t10 == null || typeof t10 != "object")) {
    var n10 = r11.split("-"), [i9, o15] = n10, l12 = y(t10, "".concat(i9, "s[").concat(o15, "]"));
    if (l12) {
      var c16 = BW(l12, i9, a11);
      return c16;
    }
  }
};
var zW = { chartName: "Sankey", defaultTooltipEventType: "item", validateTooltipEventTypes: ["item"], tooltipPayloadSearcher: KW, eventEmitter: void 0 };
var WW = ce8.memo((e14) => {
  var { dataKey: r11, nameKey: t10, stroke: a11, strokeWidth: n10, fill: i9, name: o15, data: l12, id: c16 } = e14, s8 = { dataDefinedOnItem: l12, getPosition: ye6, settings: { stroke: a11, strokeWidth: n10, fill: i9, dataKey: r11, name: o15, nameKey: t10, hide: false, type: void 0, color: i9, unit: "", graphicalItemId: c16 } };
  return ce8.createElement(De4, { tooltipEntrySettings: s8 });
});
function FW(e14, r11) {
  if (ce8.isValidElement(e14)) return ce8.cloneElement(e14, r11);
  if (typeof e14 == "function") return e14(r11);
  var { sourceX: t10, sourceY: a11, sourceControlX: n10, targetX: i9, targetY: o15, targetControlX: l12, linkWidth: c16 } = r11, s8 = AA(r11, pW);
  return ce8.createElement("path", hi2({ className: "recharts-sankey-link", d: `
          M`.concat(t10, ",").concat(a11, `
          C`).concat(n10, ",").concat(a11, " ").concat(l12, ",").concat(o15, " ").concat(i9, ",").concat(o15, `
        `), fill: "none", stroke: "#333", strokeWidth: c16, strokeOpacity: "0.2" }, X11(s8)));
}
var VW = (e14) => {
  var { link: r11, nodes: t10, left: a11, top: n10, i: i9, linkContent: o15, linkCurvature: l12 } = e14, { sy: c16, ty: s8, dy: u9 } = r11, d12 = t10[r11.source], f10 = t10[r11.target];
  if (!(d12 == null || f10 == null)) {
    var p12 = d12.x + d12.dx + a11, m18 = f10.x + a11, h13 = wW(p12, m18), y16 = h13(l12), v9 = h13(1 - l12), g13 = d12.y + c16 + u9 / 2 + n10, x18 = f10.y + s8 + u9 / 2 + n10, b14 = wt4({ sourceX: p12, targetX: m18, sourceY: g13, targetY: x18, sourceControlX: y16, targetControlX: v9, sourceRelativeY: c16, targetRelativeY: s8, linkWidth: u9, index: i9, payload: wt4(wt4({}, r11), {}, { source: d12, target: f10 }) }, Ee6(o15));
    return b14;
  }
};
function XW(e14) {
  var { graphicalItemId: r11, props: t10, i: a11, linkContent: n10, onMouseEnter: i9, onMouseLeave: o15, onClick: l12, dataKey: c16 } = e14, s8 = _W(t10), u9 = "link-".concat(a11), d12 = M12(), f10 = { onMouseEnter: (p12) => {
    d12(qr2({ activeIndex: u9, activeDataKey: c16, activeCoordinate: s8, activeGraphicalItemId: r11 })), i9(t10, p12);
  }, onMouseLeave: (p12) => {
    d12(Ha()), o15(t10, p12);
  }, onClick: (p12) => {
    d12(Yt3({ activeIndex: u9, activeDataKey: c16, activeCoordinate: s8, activeGraphicalItemId: r11 })), l12(t10, p12);
  } };
  return ce8.createElement(T14, f10, FW(n10, t10));
}
function GW(e14) {
  var { graphicalItemId: r11, modifiedLinks: t10, links: a11, linkContent: n10, onMouseEnter: i9, onMouseLeave: o15, onClick: l12, dataKey: c16 } = e14;
  return ce8.createElement(T14, { className: "recharts-sankey-links", key: "recharts-sankey-links" }, a11.map((s8, u9) => {
    var d12 = t10[u9];
    return d12 == null ? null : ce8.createElement(XW, { graphicalItemId: r11, key: "link-".concat(s8.source, "-").concat(s8.target, "-").concat(s8.value), props: d12, linkContent: n10, i: u9, onMouseEnter: i9, onMouseLeave: o15, onClick: l12, dataKey: c16 });
  }));
}
function HW(e14, r11) {
  return ce8.isValidElement(e14) ? ce8.cloneElement(e14, r11) : typeof e14 == "function" ? e14(r11) : ce8.createElement(_r, hi2({ className: "recharts-sankey-node", fill: "#0088fe", fillOpacity: "0.8" }, X11(r11)));
}
var YW = (e14) => {
  var { node: r11, nodeContent: t10, top: a11, left: n10, i: i9 } = e14, { x: o15, y: l12, dx: c16, dy: s8 } = r11, u9 = wt4(wt4({}, Ee6(t10)), {}, { x: o15 + n10, y: l12 + a11, width: c16, height: s8, index: i9, payload: r11 });
  return u9;
};
function UW(e14) {
  var { graphicalItemId: r11, props: t10, nodeContent: a11, i: n10, onMouseEnter: i9, onMouseLeave: o15, onClick: l12, dataKey: c16 } = e14, s8 = M12(), u9 = MW(t10), d12 = "node-".concat(n10), f10 = { onMouseEnter: (p12) => {
    s8(qr2({ activeIndex: d12, activeDataKey: c16, activeCoordinate: u9, activeGraphicalItemId: r11 })), i9(t10, p12);
  }, onMouseLeave: (p12) => {
    s8(Ha()), o15(t10, p12);
  }, onClick: (p12) => {
    s8(Yt3({ activeIndex: d12, activeDataKey: c16, activeCoordinate: u9, activeGraphicalItemId: r11 })), l12(t10, p12);
  } };
  return ce8.createElement(T14, f10, HW(a11, t10));
}
function ZW(e14) {
  var { graphicalItemId: r11, modifiedNodes: t10, nodeContent: a11, onMouseEnter: n10, onMouseLeave: i9, onClick: o15, dataKey: l12 } = e14;
  return ce8.createElement(T14, { className: "recharts-sankey-nodes", key: "recharts-sankey-nodes" }, t10.map((c16, s8) => ce8.createElement(UW, { graphicalItemId: r11, key: "node-".concat(c16.index, "-").concat(c16.x, "-").concat(c16.y), props: c16, nodeContent: a11, i: s8, onMouseEnter: n10, onMouseLeave: i9, onClick: o15, dataKey: l12 })));
}
var qW = wt4({ align: "justify", dataKey: "value", iterations: 32, linkCurvature: 0.5, margin: { top: 5, right: 5, bottom: 5, left: 5 }, nameKey: "name", nodePadding: 10, nodeWidth: 10, sort: true, verticalAlign: "justify" }, Ot2);
function $W(e14) {
  var { className: r11, style: t10, children: a11, id: n10 } = e14, i9 = AA(e14, mW), { link: o15, dataKey: l12, node: c16, onMouseEnter: s8, onMouseLeave: u9, onClick: d12, data: f10, iterations: p12, nodeWidth: m18, nodePadding: h13, sort: y16, linkCurvature: v9, margin: g13, verticalAlign: x18, align: b14 } = e14, P16 = X11(i9), A13 = Tr(), O12 = Lr2(), { links: w9, modifiedLinks: S11, modifiedNodes: I24 } = xW(() => {
    var j15, D18, G20, H14;
    if (!f10 || !A13 || !O12 || A13 <= 0 || O12 <= 0) return { nodes: [], links: [], modifiedLinks: [], modifiedNodes: [] };
    var ie6 = A13 - ((j15 = g13.left) !== null && j15 !== void 0 ? j15 : 0) - ((D18 = g13.right) !== null && D18 !== void 0 ? D18 : 0), Y10 = O12 - ((G20 = g13.top) !== null && G20 !== void 0 ? G20 : 0) - ((H14 = g13.bottom) !== null && H14 !== void 0 ? H14 : 0), oe8 = NW({ data: f10, width: ie6, height: Y10, iterations: p12, nodeWidth: m18, nodePadding: h13, sort: y16, verticalAlign: x18, align: b14 }), ae11 = g13.top || 0, fe9 = g13.left || 0, Me5 = oe8.links.map((Fe5, ot4) => VW({ link: Fe5, nodes: oe8.nodes, i: ot4, top: ae11, left: fe9, linkContent: o15, linkCurvature: v9 })).filter(ke5), Pe5 = oe8.nodes.map((Fe5, ot4) => YW({ node: Fe5, nodeContent: c16, i: ot4, top: ae11, left: fe9 }));
    return { nodes: oe8.nodes, links: oe8.links, modifiedLinks: Me5, modifiedNodes: Pe5 };
  }, [f10, A13, O12, g13, p12, m18, h13, y16, o15, c16, v9, b14, x18]), R13 = lf((j15, D18, G20) => {
    s8 && s8(j15, D18, G20);
  }, [s8]), C11 = lf((j15, D18, G20) => {
    u9 && u9(j15, D18, G20);
  }, [u9]), N19 = lf((j15, D18, G20) => {
    d12 && d12(j15, D18, G20);
  }, [d12]);
  return !Xe4(A13) || !Xe4(O12) || !f10 || !f10.links || !f10.nodes ? null : ce8.createElement(ce8.Fragment, null, ce8.createElement(bx, { computedData: { links: S11, nodes: I24 } }), ce8.createElement(Vr, hi2({}, P16, { width: A13, height: O12 }), a11, ce8.createElement(GW, { graphicalItemId: n10, links: w9, modifiedLinks: S11, linkContent: o15, dataKey: l12, onMouseEnter: (j15, D18) => R13(j15, "link", D18), onMouseLeave: (j15, D18) => C11(j15, "link", D18), onClick: (j15, D18) => N19(j15, "link", D18) }), ce8.createElement(ZW, { graphicalItemId: n10, modifiedNodes: I24, nodeContent: c16, dataKey: l12, onMouseEnter: (j15, D18) => R13(j15, "node", D18), onMouseLeave: (j15, D18) => C11(j15, "node", D18), onClick: (j15, D18) => N19(j15, "node", D18) })));
}
function wA(e14) {
  var r11 = L11(e14, qW), { width: t10, height: a11, style: n10, className: i9, id: o15, throttleDelay: l12, throttledEvents: c16 } = r11, [s8, u9] = bW(null);
  return ce8.createElement(Mt2, { preloadedState: { options: zW }, reduxStoreName: i9 ?? "Sankey" }, ce8.createElement(ut6, { width: t10, height: a11 }), ce8.createElement(On, { margin: r11.margin }), ce8.createElement(_t2, { throttleDelay: l12, throttledEvents: c16 }), ce8.createElement(La, { className: i9, style: n10, width: t10, height: a11, responsive: false, ref: (d12) => {
    d12 && !s8 && u9(d12);
  }, onMouseEnter: void 0, onMouseLeave: void 0, onClick: void 0, onMouseMove: void 0, onMouseDown: void 0, onMouseUp: void 0, onContextMenu: void 0, onDoubleClick: void 0, onTouchStart: void 0, onTouchMove: void 0, onTouchEnd: void 0 }, ce8.createElement($t3.Provider, { value: s8 }, ce8.createElement(Te3, { id: o15, type: "sankey" }, (d12) => ce8.createElement(ce8.Fragment, null, ce8.createElement(WW, { dataKey: r11.dataKey, nameKey: r11.nameKey, stroke: r11.stroke, strokeWidth: r11.strokeWidth, fill: r11.fill, name: r11.name, data: r11.data, id: d12 }), ce8.createElement($W, hi2({}, r11, { id: d12 })))))));
}
wA.displayName = "Sankey";
function EA(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function SA(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? EA(Object(t10), true).forEach(function(a11) {
      JW(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : EA(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function JW(e14, r11, t10) {
  return (r11 = QW(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function QW(e14) {
  var r11 = e22(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function e22(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var t22 = ["axis"];
var a22 = SA(SA({}, dn4), {}, { layout: "centric", startAngle: 90, endAngle: -270 });
var sf = r22((e14, r11) => {
  var t10 = L11(e14, a22);
  return IA.createElement(mi2, { chartName: "RadarChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: t22, tooltipPayloadSearcher: Qe4, categoricalChartProps: t10, ref: r11 });
});
var i22 = ["item"];
var uf = n22((e14, r11) => RA.createElement(it2, { chartName: "ScatterChart", defaultTooltipEventType: "item", validateTooltipEventTypes: i22, tooltipPayloadSearcher: Qe4, categoricalChartProps: e14, ref: r11 }));
var l22 = ["axis"];
var df = o22((e14, r11) => CA.createElement(it2, { chartName: "AreaChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: l22, tooltipPayloadSearcher: Qe4, categoricalChartProps: e14, ref: r11 }));
function jA(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function kA(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? jA(Object(t10), true).forEach(function(a11) {
      c22(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : jA(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function c22(e14, r11, t10) {
  return (r11 = s22(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function s22(e14) {
  var r11 = u22(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function u22(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var f22 = ["axis", "item"];
var p22 = kA(kA({}, dn4), {}, { layout: "radial", startAngle: 0, endAngle: 360 });
var ff = d22((e14, r11) => {
  var t10 = L11(e14, p22);
  return DA.createElement(mi2, { chartName: "RadialBarChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: f22, tooltipPayloadSearcher: Qe4, categoricalChartProps: t10, ref: r11 });
});
var v22 = ["axis"];
var pf = m22((e14, r11) => TA.createElement(it2, { chartName: "ComposedChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: v22, tooltipPayloadSearcher: Qe4, categoricalChartProps: e14, ref: r11 }));
function LA(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function mf(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? LA(Object(t10), true).forEach(function(a11) {
      h22(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : LA(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function h22(e14, r11, t10) {
  return (r11 = y22(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function y22(e14) {
  var r11 = g22(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function g22(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var O22 = { fontWeight: "bold", paintOrder: "stroke fill", fontSize: ".75rem", stroke: "#FFF", fill: "black", pointerEvents: "none" };
var w22 = ar.memo((e14) => {
  var { dataKey: r11, nameKey: t10, data: a11, stroke: n10, fill: i9, positions: o15, id: l12 } = e14, c16 = { dataDefinedOnItem: a11.children, getPosition: (s8) => o15.get(s8), settings: { stroke: n10, strokeWidth: void 0, fill: i9, nameKey: t10, dataKey: r11, name: t10 ? void 0 : r11, hide: false, type: void 0, color: i9, unit: "", graphicalItemId: l12 } };
  return ar.createElement(De4, { tooltipEntrySettings: c16 });
});
var C22 = mf({ padding: 2, dataKey: "value", nameKey: "name", ringPadding: 2, innerRadius: 50, fill: "#333", stroke: "#FFF", textOptions: O22, startAngle: 0, endAngle: 360, responsive: false }, Ot2);
function vf() {
  return vf = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, vf.apply(null, arguments);
}
function _A(e14) {
  return MA.createElement(Wr, vf({ shapeType: "trapezoid" }, e14));
}
function BA(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function Eo(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? BA(Object(t10), true).forEach(function(a11) {
      D22(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : BA(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function D22(e14, r11, t10) {
  return (r11 = T22(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function T22(e14) {
  var r11 = L22(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function L22(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var M22 = (e14, r11) => r11;
var KA = fe7([me9, M22, Sr2], (e14, r11, t10) => {
  var { data: a11, dataKey: n10, nameKey: i9, tooltipType: o15, lastShapeType: l12, reversed: c16, customWidth: s8, cells: u9, presentationProps: d12, id: f10 } = r11, { chartData: p12 } = t10, m18;
  if (a11 != null && a11.length > 0 ? m18 = a11 : p12 != null && p12.length > 0 && (m18 = p12), m18 && m18.length) m18 = m18.map((h13, y16) => Eo(Eo(Eo({ payload: h13 }, d12), h13), u9 && u9[y16] && u9[y16].props));
  else if (u9 && u9.length) m18 = u9.map((h13) => Eo(Eo({}, d12), h13.props));
  else return [];
  return zA({ dataKey: n10, nameKey: i9, displayedData: m18, tooltipType: o15, lastShapeType: l12, reversed: c16, offset: e14, customWidth: s8, graphicalItemId: f10 });
});
var _22 = ["onMouseEnter", "onClick", "onMouseLeave", "shape", "activeShape"];
var B22 = ["id"];
var K22 = ["stroke", "fill", "legendType", "hide", "isAnimationActive", "animationBegin", "animationDuration", "animationEasing", "nameKey", "lastShapeType", "id"];
var z22 = ["id"];
function So() {
  return So = Object.assign ? Object.assign.bind() : function(e14) {
    for (var r11 = 1; r11 < arguments.length; r11++) {
      var t10 = arguments[r11];
      for (var a11 in t10) ({}).hasOwnProperty.call(t10, a11) && (e14[a11] = t10[a11]);
    }
    return e14;
  }, So.apply(null, arguments);
}
function as(e14, r11) {
  if (e14 == null) return {};
  var t10, a11, n10 = W22(e14, r11);
  if (Object.getOwnPropertySymbols) {
    var i9 = Object.getOwnPropertySymbols(e14);
    for (a11 = 0; a11 < i9.length; a11++) t10 = i9[a11], r11.indexOf(t10) === -1 && {}.propertyIsEnumerable.call(e14, t10) && (n10[t10] = e14[t10]);
  }
  return n10;
}
function W22(e14, r11) {
  if (e14 == null) return {};
  var t10 = {};
  for (var a11 in e14) if ({}.hasOwnProperty.call(e14, a11)) {
    if (r11.indexOf(a11) !== -1) continue;
    t10[a11] = e14[a11];
  }
  return t10;
}
function WA(e14, r11) {
  var t10 = Object.keys(e14);
  if (Object.getOwnPropertySymbols) {
    var a11 = Object.getOwnPropertySymbols(e14);
    r11 && (a11 = a11.filter(function(n10) {
      return Object.getOwnPropertyDescriptor(e14, n10).enumerable;
    })), t10.push.apply(t10, a11);
  }
  return t10;
}
function gr2(e14) {
  for (var r11 = 1; r11 < arguments.length; r11++) {
    var t10 = arguments[r11] != null ? arguments[r11] : {};
    r11 % 2 ? WA(Object(t10), true).forEach(function(a11) {
      F22(e14, a11, t10[a11]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e14, Object.getOwnPropertyDescriptors(t10)) : WA(Object(t10)).forEach(function(a11) {
      Object.defineProperty(e14, a11, Object.getOwnPropertyDescriptor(t10, a11));
    });
  }
  return e14;
}
function F22(e14, r11, t10) {
  return (r11 = V22(r11)) in e14 ? Object.defineProperty(e14, r11, { value: t10, enumerable: true, configurable: true, writable: true }) : e14[r11] = t10, e14;
}
function V22(e14) {
  var r11 = X22(e14, "string");
  return typeof r11 == "symbol" ? r11 : r11 + "";
}
function X22(e14, r11) {
  if (typeof e14 != "object" || !e14) return e14;
  var t10 = e14[Symbol.toPrimitive];
  if (t10 !== void 0) {
    var a11 = t10.call(e14, r11 || "default");
    if (typeof a11 != "object") return a11;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r11 === "string" ? String : Number)(e14);
}
var Z22 = je5.memo((e14) => {
  var { dataKey: r11, nameKey: t10, stroke: a11, strokeWidth: n10, fill: i9, name: o15, hide: l12, tooltipType: c16, data: s8, trapezoids: u9, id: d12 } = e14, f10 = { dataDefinedOnItem: s8, getPosition: (p12) => {
    var m18;
    return (m18 = u9[Number(p12)]) === null || m18 === void 0 ? void 0 : m18.tooltipPosition;
  }, settings: { stroke: a11, strokeWidth: n10, fill: i9, dataKey: r11, name: o15, nameKey: t10, hide: l12, type: c16, color: i9, unit: "", graphicalItemId: d12 } };
  return je5.createElement(De4, { tooltipEntrySettings: f10 });
});
function q22(e14) {
  var { showLabels: r11, trapezoids: t10, children: a11 } = e14, n10 = VA(() => {
    if (r11) return t10?.map((i9) => {
      var o15 = i9.labelViewBox;
      return gr2(gr2({}, o15), {}, { value: i9.name, payload: i9.payload, parentViewBox: i9.parentViewBox, viewBox: o15, fill: i9.fill });
    });
  }, [r11, t10]);
  return je5.createElement(Jr, { value: n10 }, a11);
}
function $22(e14) {
  var { trapezoids: r11, allOtherFunnelProps: t10 } = e14, a11 = E17((p12) => Ui(p12, "item", p12.tooltip.settings.trigger, void 0)), { onMouseEnter: n10, onClick: i9, onMouseLeave: o15, shape: l12, activeShape: c16 } = t10, s8 = as(t10, _22), u9 = gt5(n10, t10.dataKey, t10.id), d12 = xt5(o15), f10 = bt4(i9, t10.dataKey, t10.id);
  return je5.createElement(je5.Fragment, null, r11.map((p12, m18) => {
    var h13 = !!c16 && a11 === String(m18), y16 = h13 ? c16 : l12, v9 = gr2(gr2({}, p12), {}, { option: y16, isActive: h13, stroke: p12.stroke }), { id: g13 } = v9, x18 = as(v9, B22);
    return je5.createElement(T14, So({ key: "trapezoid-".concat(p12?.x, "-").concat(p12?.y, "-").concat(p12?.name, "-").concat(p12?.value), className: "recharts-funnel-trapezoid" }, Ve3(s8, p12, m18), { onMouseEnter: u9(p12, m18), onMouseLeave: d12(p12, m18), onClick: f10(p12, m18) }), je5.createElement(_A, x18));
  }));
}
function J22(e14) {
  var { previousTrapezoidsRef: r11, props: t10 } = e14, { trapezoids: a11, isAnimationActive: n10, animationBegin: i9, animationDuration: o15, animationEasing: l12, onAnimationEnd: c16, onAnimationStart: s8 } = t10, u9 = r11.current, [d12, f10] = H22(false), p12 = !d12, m18 = Ue2(a11, "recharts-funnel-"), h13 = FA(() => {
    typeof c16 == "function" && c16(), f10(false);
  }, [c16]), y16 = FA(() => {
    typeof s8 == "function" && s8(), f10(true);
  }, [s8]);
  return je5.createElement(q22, { showLabels: p12, trapezoids: a11 }, je5.createElement(Ye4, { animationId: m18, begin: i9, duration: o15, isActive: n10, easing: l12, key: m18, onAnimationStart: y16, onAnimationEnd: h13 }, (v9) => {
    var g13 = v9 === 1 ? a11 : a11.map((x18, b14) => {
      var P16 = u9 && u9[b14];
      return P16 ? gr2(gr2({}, x18), {}, { x: B18(P16.x, x18.x, v9), y: B18(P16.y, x18.y, v9), upperWidth: B18(P16.upperWidth, x18.upperWidth, v9), lowerWidth: B18(P16.lowerWidth, x18.lowerWidth, v9), height: B18(P16.height, x18.height, v9) }) : gr2(gr2({}, x18), {}, { x: B18(x18.x + x18.upperWidth / 2, x18.x, v9), y: B18(x18.y + x18.height / 2, x18.y, v9), upperWidth: B18(0, x18.upperWidth, v9), lowerWidth: B18(0, x18.lowerWidth, v9), height: B18(0, x18.height, v9) });
    });
    return v9 > 0 && (r11.current = g13), je5.createElement(T14, null, je5.createElement($22, { trapezoids: g13, allOtherFunnelProps: t10 }));
  }), je5.createElement(pr3, { label: t10.label }), t10.children);
}
function Q22(e14) {
  var r11 = G22(void 0);
  return je5.createElement(J22, { props: e14, previousTrapezoidsRef: r11 });
}
var eF = (e14, r11) => {
  var { width: t10, height: a11, left: n10, top: i9 } = r11, o15 = Ae6(e14, t10, t10);
  return { realWidth: o15, realHeight: a11, offsetX: n10, offsetY: i9 };
};
var rF = { animationBegin: 400, animationDuration: 1500, animationEasing: "ease", fill: "#808080", hide: false, isAnimationActive: "auto", lastShapeType: "triangle", legendType: "rect", nameKey: "name", reversed: false, stroke: "#fff" };
function tF(e14) {
  var r11 = Pt2(), { stroke: t10, fill: a11, legendType: n10, hide: i9, isAnimationActive: o15, animationBegin: l12, animationDuration: c16, animationEasing: s8, nameKey: u9, lastShapeType: d12, id: f10 } = e14, p12 = as(e14, K22), m18 = X11(e14), h13 = yt4(e14.children, zr), y16 = VA(() => ({ dataKey: e14.dataKey, nameKey: u9, data: e14.data, tooltipType: e14.tooltipType, lastShapeType: d12, reversed: e14.reversed, customWidth: e14.width, cells: h13, presentationProps: m18, id: f10 }), [e14.dataKey, u9, e14.data, e14.tooltipType, d12, e14.reversed, e14.width, h13, m18, f10]), v9 = E17((P16) => KA(P16, y16));
  if (i9 || !v9 || !v9.length || !r11) return null;
  var { height: g13, width: x18 } = r11, b14 = U22("recharts-trapezoids", e14.className);
  return je5.createElement(je5.Fragment, null, je5.createElement(Z22, { dataKey: e14.dataKey, nameKey: e14.nameKey, stroke: e14.stroke, strokeWidth: e14.strokeWidth, fill: e14.fill, name: e14.name, hide: e14.hide, tooltipType: e14.tooltipType, data: e14.data, trapezoids: v9, id: f10 }), je5.createElement(T14, { className: b14 }, je5.createElement(Q22, So({}, p12, { id: f10, stroke: t10, fill: a11, nameKey: u9, lastShapeType: d12, animationBegin: l12, animationDuration: c16, animationEasing: s8, isAnimationActive: o15, hide: i9, legendType: n10, height: g13, width: x18, trapezoids: v9 }))));
}
function zA(e14) {
  var { dataKey: r11, nameKey: t10, displayedData: a11, tooltipType: n10, lastShapeType: i9, reversed: o15, offset: l12, customWidth: c16, graphicalItemId: s8 } = e14, { realHeight: u9, realWidth: d12, offsetX: f10, offsetY: p12 } = eF(c16, l12), m18 = a11.map((b14) => {
    var P16 = _13(b14, r11, 0);
    return typeof P16 == "number" ? P16 : 0;
  }), h13 = Math.max.apply(null, m18), y16 = a11.length, v9 = u9 / y16, g13 = { x: l12.left, y: l12.top, width: l12.width, height: l12.height }, x18 = a11.map((b14, P16) => {
    var A13 = _13(b14, r11, 0), O12 = String(_13(b14, t10, P16)), w9 = A13, S11;
    if (P16 !== y16 - 1) {
      var I24 = _13(a11[P16 + 1], r11, 0);
      if (typeof I24 == "number") S11 = I24;
      else if (Array.isArray(I24)) {
        var [R13, C11] = I24;
        typeof R13 == "number" && (w9 = R13), typeof C11 == "number" && (S11 = C11);
      }
    } else if (A13 instanceof Array && A13.length === 2) {
      var [N19, j15] = A13;
      typeof N19 == "number" && (w9 = N19), typeof j15 == "number" && (S11 = j15);
    } else i9 === "rectangle" ? S11 = w9 : S11 = 0;
    var D18 = (h13 - w9) * d12 / (2 * h13) + f10, G20 = v9 * P16 + p12, H14 = w9 / h13 * d12, ie6 = S11 / h13 * d12, Y10 = [{ name: O12, value: w9, payload: b14, dataKey: r11, type: n10, graphicalItemId: s8 }], oe8 = { x: D18 + H14 / 2, y: G20 + v9 / 2 }, ae11 = { x: D18, y: G20, upperWidth: H14, lowerWidth: ie6, width: Math.max(H14, ie6), height: v9 };
    return gr2(gr2(gr2({}, ae11), {}, { name: O12, val: w9, tooltipPayload: Y10, tooltipPosition: oe8 }, b14 != null && typeof b14 == "object" ? H4(b14, ["width"]) : {}), {}, { payload: b14, parentViewBox: g13, labelViewBox: ae11 });
  });
  return o15 && (x18 = x18.map((b14, P16) => {
    var A13 = { x: b14.x - (b14.lowerWidth - b14.upperWidth) / 2, y: b14.y - P16 * v9 + (y16 - 1 - P16) * v9, upperWidth: b14.lowerWidth, lowerWidth: b14.upperWidth, width: Math.max(b14.lowerWidth, b14.upperWidth), height: v9 };
    return gr2(gr2(gr2({}, b14), A13), {}, { tooltipPosition: gr2(gr2({}, b14.tooltipPosition), {}, { y: b14.y - P16 * v9 + (y16 - 1 - P16) * v9 + v9 / 2 }), labelViewBox: A13 });
  })), x18;
}
function aF(e14) {
  var r11 = L11(e14, rF), { id: t10 } = r11, a11 = as(r11, z22);
  return je5.createElement(Te3, { id: t10, type: "funnel" }, (n10) => je5.createElement(tF, So({}, a11, { id: n10 })));
}
var XA = aF;
XA.displayName = "Funnel";
var iF = ["item"];
var hf = nF((e14, r11) => GA.createElement(it2, { chartName: "FunnelChart", defaultTooltipEventType: "item", validateTooltipEventTypes: iF, tooltipPayloadSearcher: Qe4, categoricalChartProps: e14, ref: r11 }));

// ../../ui-main/ui-main/apps/v4/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn5(...inputs) {
  return twMerge(clsx(inputs));
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/chart.tsx
import { Fragment as Fragment23, jsx, jsxs } from "react/jsx-runtime";
var THEMES = { light: "", dark: ".dark" };
var INITIAL_DIMENSION = { width: 320, height: 200 };
var ChartContext = React.createContext(null);
function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
function ChartContainer({
  id: id2,
  className,
  children,
  config,
  initialDimension = INITIAL_DIMENSION,
  ...props
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id2 ?? uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "chart",
      "data-chart": chartId,
      className: cn5(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx(
          rw,
          {
            initialDimension,
            children
          }
        )
      ]
    }
  ) });
}
var ChartStyle = ({ id: id2, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme ?? config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id2}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] ?? itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
var ChartTooltip = eC;
function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}) {
  const { config } = useChart();
  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }
    const [item] = payload;
    const key = `${labelKey ?? item?.dataKey ?? item?.name ?? "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? config[label]?.label ?? label : itemConfig?.label;
    if (labelFormatter) {
      return /* @__PURE__ */ jsx("div", { className: cn5("font-medium", labelClassName), children: labelFormatter(value, payload) });
    }
    if (!value) {
      return null;
    }
    return /* @__PURE__ */ jsx("div", { className: cn5("font-medium", labelClassName), children: value });
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey
  ]);
  if (!active || !payload?.length) {
    return null;
  }
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn5(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      ),
      children: [
        !nestLabel ? tooltipLabel : null,
        /* @__PURE__ */ jsx("div", { className: "grid gap-1.5", children: payload.filter((item) => item.type !== "none").map((item, index) => {
          const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color ?? item.payload?.fill ?? item.color;
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: cn5(
                "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                indicator === "dot" && "items-center"
              ),
              children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment23, { children: [
                itemConfig?.icon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn5(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": indicatorColor,
                      "--color-border": indicatorColor
                    }
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: cn5(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5", children: [
                        nestLabel ? tooltipLabel : null,
                        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: itemConfig?.label ?? item.name })
                      ] }),
                      item.value != null && /* @__PURE__ */ jsx("span", { className: "font-mono font-medium text-foreground tabular-nums", children: typeof item.value === "number" ? item.value.toLocaleString() : String(item.value) })
                    ]
                  }
                )
              ] })
            },
            index
          );
        }) })
      ]
    }
  );
}
var ChartLegend = gp;
function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey
}) {
  const { config } = useChart();
  if (!payload?.length) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn5(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      ),
      children: payload.filter((item) => item.type !== "none").map((item, index) => {
        const key = `${nameKey ?? item.dataKey ?? "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn5(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            ),
            children: [
              itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : /* @__PURE__ */ jsx(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: item.color
                  }
                }
              ),
              itemConfig?.label
            ]
          },
          index
        );
      })
    }
  );
}
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
export {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent
};
