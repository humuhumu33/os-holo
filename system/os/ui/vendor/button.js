var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// http-url:https://esm.sh/clsx@2.1.1/es2022/clsx.mjs
function a(r18) {
  var n21, f21, t18 = "";
  if (typeof r18 == "string" || typeof r18 == "number") t18 += r18;
  else if (typeof r18 == "object") if (Array.isArray(r18)) {
    var o15 = r18.length;
    for (n21 = 0; n21 < o15; n21++) r18[n21] && (f21 = a(r18[n21])) && (t18 && (t18 += " "), t18 += f21);
  } else for (f21 in r18) r18[f21] && (t18 && (t18 += " "), t18 += f21);
  return t18;
}
function e() {
  for (var r18, n21, f21 = 0, t18 = "", o15 = arguments.length; f21 < o15; f21++) (r18 = arguments[f21]) && (n21 = a(r18)) && (t18 && (t18 += " "), t18 += n21);
  return t18;
}

// http-url:https://esm.sh/class-variance-authority@0.7.1/X-ZXJlYWN0LHJlYWN0LWRvbSxyZWFjdC1kb20vY2xpZW50LHJlYWN0L2pzeC1kZXYtcnVudGltZSxyZWFjdC9qc3gtcnVudGltZQ/es2022/class-variance-authority.mjs
var m = (e20) => typeof e20 == "boolean" ? `${e20}` : e20 === 0 ? "0" : e20;
var y = e;
var b = (e20, l20) => (n21) => {
  var s16;
  if (l20?.variants == null) return y(e20, n21?.class, n21?.className);
  let { variants: r18, defaultVariants: d14 } = l20, V19 = Object.keys(r18).map((t18) => {
    let a20 = n21?.[t18], u20 = d14?.[t18];
    if (a20 === null) return null;
    let i23 = m(a20) || m(u20);
    return r18[t18][i23];
  }), v18 = n21 && Object.entries(n21).reduce((t18, a20) => {
    let [u20, i23] = a20;
    return i23 === void 0 || (t18[u20] = i23), t18;
  }, {}), N26 = l20 == null || (s16 = l20.compoundVariants) === null || s16 === void 0 ? void 0 : s16.reduce((t18, a20) => {
    let { class: u20, className: i23, ...f21 } = a20;
    return Object.entries(f21).every((C18) => {
      let [c15, o15] = C18;
      return Array.isArray(o15) ? o15.includes({ ...d14, ...v18 }[c15]) : { ...d14, ...v18 }[c15] === o15;
    }) ? [...t18, u20, i23] : t18;
  }, []);
  return y(e20, V19, N26, n21?.class, n21?.className);
};

// http-url:https://esm.sh/@radix-ui/react-accessible-icon@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-accessible-icon.mjs
import * as e4 from "react";

// http-url:https://esm.sh/@radix-ui/react-visually-hidden@1.2.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-visually-hidden.mjs
import * as e3 from "react";

// http-url:https://esm.sh/@radix-ui/react-primitive@2.1.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-primitive.mjs
import * as o from "react";
import * as e2 from "react-dom";

// http-url:https://esm.sh/@radix-ui/react-slot@1.3.0/X-ZXJlYWN0/es2022/react-slot.mjs
var react_slot_exports = {};
__export(react_slot_exports, {
  Root: () => L,
  Slot: () => L,
  Slottable: () => O,
  createSlot: () => b2,
  createSlottable: () => g
});
import * as n from "react";

// http-url:https://esm.sh/@radix-ui/react-compose-refs@1.1.3/X-ZXJlYWN0/es2022/react-compose-refs.mjs
import * as f from "react";
function l(n21, o15) {
  if (typeof n21 == "function") return n21(o15);
  n21 != null && (n21.current = o15);
}
function i2(...n21) {
  return (o15) => {
    let u20 = false, c15 = n21.map((t18) => {
      let e20 = l(t18, o15);
      return !u20 && typeof e20 == "function" && (u20 = true), e20;
    });
    if (u20) return () => {
      for (let t18 = 0; t18 < c15.length; t18++) {
        let e20 = c15[t18];
        typeof e20 == "function" ? e20() : l(n21[t18], null);
      }
    };
  };
}
function s(...n21) {
  return f.useCallback(i2(...n21), n21);
}

// http-url:https://esm.sh/@radix-ui/react-slot@1.3.0/X-ZXJlYWN0/es2022/react-slot.mjs
function b2(t18) {
  let e20 = n.forwardRef((r18, i23) => {
    let { children: o15, ...a20 } = r18, l20 = null, c15 = false, s16 = [];
    h(o15) && typeof d == "function" && (o15 = d(o15._payload)), n.Children.forEach(o15, (u20) => {
      if (x(u20)) {
        c15 = true;
        let f21 = u20, p16 = "child" in f21.props ? f21.props.child : f21.props.children;
        h(p16) && typeof d == "function" && (p16 = d(p16._payload)), l20 = _(f21, p16), s16.push(l20?.props?.children);
      } else s16.push(u20);
    }), l20 ? l20 = n.cloneElement(l20, void 0, s16) : !c15 && n.Children.count(o15) === 1 && n.isValidElement(o15) && (l20 = o15);
    let R18 = l20 ? $(l20) : void 0, S18 = s(i23, R18);
    if (!l20) {
      if (o15 || o15 === 0) throw new Error(c15 ? V(t18) : I(t18));
      return o15;
    }
    let y21 = v(a20, l20.props ?? {});
    return l20.type !== n.Fragment && (y21.ref = i23 ? S18 : R18), n.cloneElement(l20, y21);
  });
  return e20.displayName = `${t18}.Slot`, e20;
}
var L = b2("Slot");
var E = Symbol.for("radix.slottable");
function g(t18) {
  let e20 = (r18) => "child" in r18 ? r18.children(r18.child) : r18.children;
  return e20.displayName = `${t18}.Slottable`, e20.__radixId = E, e20;
}
var O = g("Slottable");
var _ = (t18, e20) => {
  if ("child" in t18.props) {
    let r18 = t18.props.child;
    return n.isValidElement(r18) ? n.cloneElement(r18, void 0, t18.props.children(r18.props.children)) : null;
  }
  return n.isValidElement(e20) ? e20 : null;
};
function v(t18, e20) {
  let r18 = { ...e20 };
  for (let i23 in e20) {
    let o15 = t18[i23], a20 = e20[i23];
    /^on[A-Z]/.test(i23) ? o15 && a20 ? r18[i23] = (...c15) => {
      let s16 = a20(...c15);
      return o15(...c15), s16;
    } : o15 && (r18[i23] = o15) : i23 === "style" ? r18[i23] = { ...o15, ...a20 } : i23 === "className" && (r18[i23] = [o15, a20].filter(Boolean).join(" "));
  }
  return { ...t18, ...r18 };
}
function $(t18) {
  let e20 = Object.getOwnPropertyDescriptor(t18.props, "ref")?.get, r18 = e20 && "isReactWarning" in e20 && e20.isReactWarning;
  return r18 ? t18.ref : (e20 = Object.getOwnPropertyDescriptor(t18, "ref")?.get, r18 = e20 && "isReactWarning" in e20 && e20.isReactWarning, r18 ? t18.props.ref : t18.props.ref || t18.ref);
}
function x(t18) {
  return n.isValidElement(t18) && typeof t18.type == "function" && "__radixId" in t18.type && t18.type.__radixId === E;
}
var P = Symbol.for("react.lazy");
function h(t18) {
  return t18 != null && typeof t18 == "object" && "$$typeof" in t18 && t18.$$typeof === P && "_payload" in t18 && C(t18._payload);
}
function C(t18) {
  return typeof t18 == "object" && t18 !== null && "then" in t18;
}
var I = (t18) => `${t18} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
var V = (t18) => `${t18} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
var d = n[" use ".trim().toString()];

// http-url:https://esm.sh/@radix-ui/react-primitive@2.1.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-primitive.mjs
import { jsx as l2 } from "react/jsx-runtime";
var u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"];
var v2 = u.reduce((i23, t18) => {
  let a20 = b2(`Primitive.${t18}`), r18 = o.forwardRef((m20, s16) => {
    let { asChild: c15, ...n21 } = m20, f21 = c15 ? a20 : t18;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), l2(f21, { ...n21, ref: s16 });
  });
  return r18.displayName = `Primitive.${t18}`, { ...i23, [t18]: r18 };
}, {});
function R(i23, t18) {
  i23 && e2.flushSync(() => i23.dispatchEvent(t18));
}
var w = v2;

// http-url:https://esm.sh/@radix-ui/react-visually-hidden@1.2.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-visually-hidden.mjs
import { jsx as t } from "react/jsx-runtime";
var d2 = Object.freeze({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" });
var l3 = "VisuallyHidden";
var a2 = e3.forwardRef((r18, i23) => t(v2.span, { ...r18, ref: i23, style: { ...d2, ...r18.style } }));
a2.displayName = l3;
var p = a2;

// http-url:https://esm.sh/@radix-ui/react-accessible-icon@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-accessible-icon.mjs
import { Fragment as l4, jsx as s2, jsxs as c } from "react/jsx-runtime";
var n2 = "AccessibleIcon";
var r = ({ children: o15, label: a20 }) => {
  let t18 = e4.Children.only(o15);
  return c(l4, { children: [e4.cloneElement(t18, { "aria-hidden": "true", focusable: "false" }), s2(p, { children: a20 })] });
};
r.displayName = n2;

// http-url:https://esm.sh/@radix-ui/react-accordion@1.2.14/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-accordion.mjs
import * as n7 from "react";

// http-url:https://esm.sh/@radix-ui/react-context@1.1.4/X-ZXJlYWN0/es2022/react-context.mjs
import * as o2 from "react";
import { jsx as m2 } from "react/jsx-runtime";
function $2(t18, s16 = []) {
  let c15 = [];
  function a20(r18, e20) {
    let n21 = o2.createContext(e20);
    n21.displayName = r18 + "Context";
    let u20 = c15.length;
    c15 = [...c15, e20];
    let d14 = (x19) => {
      let { scope: v18, children: C18, ...p16 } = x19, R18 = v18?.[t18]?.[u20] || n21, l20 = o2.useMemo(() => p16, Object.values(p16));
      return m2(R18.Provider, { value: l20, children: C18 });
    };
    d14.displayName = r18 + "Provider";
    function f21(x19, v18) {
      let C18 = v18?.[t18]?.[u20] || n21, p16 = o2.useContext(C18);
      if (p16) return p16;
      if (e20 !== void 0) return e20;
      throw new Error(`\`${x19}\` must be used within \`${r18}\``);
    }
    return [d14, f21];
  }
  let i23 = () => {
    let r18 = c15.map((e20) => o2.createContext(e20));
    return function(n21) {
      let u20 = n21?.[t18] || r18;
      return o2.useMemo(() => ({ [`__scope${t18}`]: { ...n21, [t18]: u20 } }), [n21, u20]);
    };
  };
  return i23.scopeName = t18, [a20, S(i23, ...s16)];
}
function S(...t18) {
  let s16 = t18[0];
  if (t18.length === 1) return s16;
  let c15 = () => {
    let a20 = t18.map((i23) => ({ useScope: i23(), scopeName: i23.scopeName }));
    return function(r18) {
      let e20 = a20.reduce((n21, { useScope: u20, scopeName: d14 }) => {
        let x19 = u20(r18)[`__scope${d14}`];
        return { ...n21, ...x19 };
      }, {});
      return o2.useMemo(() => ({ [`__scope${s16.scopeName}`]: e20 }), [e20]);
    };
  };
  return c15.scopeName = s16.scopeName, c15;
}

// http-url:https://esm.sh/@radix-ui/react-collection@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-collection.mjs
import * as R2 from "react";
import { jsx as L2 } from "react/jsx-runtime";
import * as a3 from "react";
import { jsx as P2 } from "react/jsx-runtime";
function re(r18) {
  let e20 = r18 + "CollectionProvider", [t18, o15] = $2(e20), [n21, s16] = t18(e20, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), l20 = (h23) => {
    let { scope: d14, children: E25 } = h23, A17 = R2.useRef(null), i23 = R2.useRef(/* @__PURE__ */ new Map()).current;
    return L2(n21, { scope: d14, itemMap: i23, collectionRef: A17, children: E25 });
  };
  l20.displayName = e20;
  let f21 = r18 + "CollectionSlot", S18 = b2(f21), M17 = R2.forwardRef((h23, d14) => {
    let { scope: E25, children: A17 } = h23, i23 = s16(f21, E25), c15 = s(d14, i23.collectionRef);
    return L2(S18, { ref: c15, children: A17 });
  });
  M17.displayName = f21;
  let m20 = r18 + "CollectionItemSlot", v18 = "data-radix-collection-item", O23 = b2(m20), u20 = R2.forwardRef((h23, d14) => {
    let { scope: E25, children: A17, ...i23 } = h23, c15 = R2.useRef(null), N26 = s(d14, c15), C18 = s16(m20, E25);
    return R2.useEffect(() => (C18.itemMap.set(c15, { ref: c15, ...i23 }), () => {
      C18.itemMap.delete(c15);
    })), L2(O23, { [v18]: "", ref: N26, children: A17 });
  });
  u20.displayName = m20;
  function x19(h23) {
    let d14 = s16(r18 + "CollectionConsumer", h23);
    return R2.useCallback(() => {
      let A17 = d14.collectionRef.current;
      if (!A17) return [];
      let i23 = Array.from(A17.querySelectorAll(`[${v18}]`));
      return Array.from(d14.itemMap.values()).sort((C18, y21) => i23.indexOf(C18.ref.current) - i23.indexOf(y21.ref.current));
    }, [d14.collectionRef, d14.itemMap]);
  }
  return [{ Provider: l20, Slot: M17, ItemSlot: u20 }, x19, o15];
}
var U = /* @__PURE__ */ new WeakMap();
var j = class g2 extends Map {
  #e;
  constructor(e20) {
    super(e20), this.#e = [...super.keys()], U.set(this, true);
  }
  set(e20, t18) {
    return U.get(this) && (this.has(e20) ? this.#e[this.#e.indexOf(e20)] = e20 : this.#e.push(e20)), super.set(e20, t18), this;
  }
  insert(e20, t18, o15) {
    let n21 = this.has(t18), s16 = this.#e.length, l20 = $3(e20), f21 = l20 >= 0 ? l20 : s16 + l20, S18 = f21 < 0 || f21 >= s16 ? -1 : f21;
    if (S18 === this.size || n21 && S18 === this.size - 1 || S18 === -1) return this.set(t18, o15), this;
    let M17 = this.size + (n21 ? 0 : 1);
    l20 < 0 && f21++;
    let m20 = [...this.#e], v18, O23 = false;
    for (let u20 = f21; u20 < M17; u20++) if (f21 === u20) {
      let x19 = m20[u20];
      m20[u20] === t18 && (x19 = m20[u20 + 1]), n21 && this.delete(t18), v18 = this.get(x19), this.set(t18, o15);
    } else {
      !O23 && m20[u20 - 1] === t18 && (O23 = true);
      let x19 = m20[O23 ? u20 : u20 - 1], h23 = v18;
      v18 = this.get(x19), this.delete(x19), this.set(x19, h23);
    }
    return this;
  }
  with(e20, t18, o15) {
    let n21 = new g2(this);
    return n21.insert(e20, t18, o15), n21;
  }
  before(e20) {
    let t18 = this.#e.indexOf(e20) - 1;
    if (!(t18 < 0)) return this.entryAt(t18);
  }
  setBefore(e20, t18, o15) {
    let n21 = this.#e.indexOf(e20);
    return n21 === -1 ? this : this.insert(n21, t18, o15);
  }
  after(e20) {
    let t18 = this.#e.indexOf(e20);
    if (t18 = t18 === -1 || t18 === this.size - 1 ? -1 : t18 + 1, t18 !== -1) return this.entryAt(t18);
  }
  setAfter(e20, t18, o15) {
    let n21 = this.#e.indexOf(e20);
    return n21 === -1 ? this : this.insert(n21 + 1, t18, o15);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return this.#e = [], super.clear();
  }
  delete(e20) {
    let t18 = super.delete(e20);
    return t18 && this.#e.splice(this.#e.indexOf(e20), 1), t18;
  }
  deleteAt(e20) {
    let t18 = this.keyAt(e20);
    return t18 !== void 0 ? this.delete(t18) : false;
  }
  at(e20) {
    let t18 = V2(this.#e, e20);
    if (t18 !== void 0) return this.get(t18);
  }
  entryAt(e20) {
    let t18 = V2(this.#e, e20);
    if (t18 !== void 0) return [t18, this.get(t18)];
  }
  indexOf(e20) {
    return this.#e.indexOf(e20);
  }
  keyAt(e20) {
    return V2(this.#e, e20);
  }
  from(e20, t18) {
    let o15 = this.indexOf(e20);
    if (o15 === -1) return;
    let n21 = o15 + t18;
    return n21 < 0 && (n21 = 0), n21 >= this.size && (n21 = this.size - 1), this.at(n21);
  }
  keyFrom(e20, t18) {
    let o15 = this.indexOf(e20);
    if (o15 === -1) return;
    let n21 = o15 + t18;
    return n21 < 0 && (n21 = 0), n21 >= this.size && (n21 = this.size - 1), this.keyAt(n21);
  }
  find(e20, t18) {
    let o15 = 0;
    for (let n21 of this) {
      if (Reflect.apply(e20, t18, [n21, o15, this])) return n21;
      o15++;
    }
  }
  findIndex(e20, t18) {
    let o15 = 0;
    for (let n21 of this) {
      if (Reflect.apply(e20, t18, [n21, o15, this])) return o15;
      o15++;
    }
    return -1;
  }
  filter(e20, t18) {
    let o15 = [], n21 = 0;
    for (let s16 of this) Reflect.apply(e20, t18, [s16, n21, this]) && o15.push(s16), n21++;
    return new g2(o15);
  }
  map(e20, t18) {
    let o15 = [], n21 = 0;
    for (let s16 of this) o15.push([s16[0], Reflect.apply(e20, t18, [s16, n21, this])]), n21++;
    return new g2(o15);
  }
  reduce(...e20) {
    let [t18, o15] = e20, n21 = 0, s16 = o15 ?? this.at(0);
    for (let l20 of this) n21 === 0 && e20.length === 1 ? s16 = l20 : s16 = Reflect.apply(t18, this, [s16, l20, n21, this]), n21++;
    return s16;
  }
  reduceRight(...e20) {
    let [t18, o15] = e20, n21 = o15 ?? this.at(-1);
    for (let s16 = this.size - 1; s16 >= 0; s16--) {
      let l20 = this.at(s16);
      s16 === this.size - 1 && e20.length === 1 ? n21 = l20 : n21 = Reflect.apply(t18, this, [n21, l20, s16, this]);
    }
    return n21;
  }
  toSorted(e20) {
    let t18 = [...this.entries()].sort(e20);
    return new g2(t18);
  }
  toReversed() {
    let e20 = new g2();
    for (let t18 = this.size - 1; t18 >= 0; t18--) {
      let o15 = this.keyAt(t18), n21 = this.get(o15);
      e20.set(o15, n21);
    }
    return e20;
  }
  toSpliced(...e20) {
    let t18 = [...this.entries()];
    return t18.splice(...e20), new g2(t18);
  }
  slice(e20, t18) {
    let o15 = new g2(), n21 = this.size - 1;
    if (e20 === void 0) return o15;
    e20 < 0 && (e20 = e20 + this.size), t18 !== void 0 && t18 > 0 && (n21 = t18 - 1);
    for (let s16 = e20; s16 <= n21; s16++) {
      let l20 = this.keyAt(s16), f21 = this.get(l20);
      o15.set(l20, f21);
    }
    return o15;
  }
  every(e20, t18) {
    let o15 = 0;
    for (let n21 of this) {
      if (!Reflect.apply(e20, t18, [n21, o15, this])) return false;
      o15++;
    }
    return true;
  }
  some(e20, t18) {
    let o15 = 0;
    for (let n21 of this) {
      if (Reflect.apply(e20, t18, [n21, o15, this])) return true;
      o15++;
    }
    return false;
  }
};
function V2(r18, e20) {
  if ("at" in Array.prototype) return Array.prototype.at.call(r18, e20);
  let t18 = Q(r18, e20);
  return t18 === -1 ? void 0 : r18[t18];
}
function Q(r18, e20) {
  let t18 = r18.length, o15 = $3(e20), n21 = o15 >= 0 ? o15 : t18 + o15;
  return n21 < 0 || n21 >= t18 ? -1 : n21;
}
function $3(r18) {
  return r18 !== r18 || r18 === 0 ? 0 : Math.trunc(r18);
}
function fe(r18) {
  let e20 = r18 + "CollectionProvider", [t18, o15] = $2(e20), [n21, s16] = t18(e20, { collectionElement: null, collectionRef: { current: null }, collectionRefObject: { current: null }, itemMap: new j(), setItemMap: () => {
  } }), l20 = ({ state: i23, ...c15 }) => i23 ? P2(S18, { ...c15, state: i23 }) : P2(f21, { ...c15 });
  l20.displayName = e20;
  let f21 = (i23) => {
    let c15 = d14();
    return P2(S18, { ...i23, state: c15 });
  };
  f21.displayName = e20 + "Init";
  let S18 = (i23) => {
    let { scope: c15, children: N26, state: C18 } = i23, y21 = a3.useRef(null), [w18, p16] = a3.useState(null), z17 = s(y21, p16), [D18, k16] = C18;
    return a3.useEffect(() => {
      if (!w18) return;
      let T21 = Z(() => {
      });
      return T21.observe(w18, { childList: true, subtree: true }), () => {
        T21.disconnect();
      };
    }, [w18]), P2(n21, { scope: c15, itemMap: D18, setItemMap: k16, collectionRef: z17, collectionRefObject: y21, collectionElement: w18, children: N26 });
  };
  S18.displayName = e20 + "Impl";
  let M17 = r18 + "CollectionSlot", m20 = b2(M17), v18 = a3.forwardRef((i23, c15) => {
    let { scope: N26, children: C18 } = i23, y21 = s16(M17, N26), w18 = s(c15, y21.collectionRef);
    return P2(m20, { ref: w18, children: C18 });
  });
  v18.displayName = M17;
  let O23 = r18 + "CollectionItemSlot", u20 = "data-radix-collection-item", x19 = b2(O23), h23 = a3.forwardRef((i23, c15) => {
    let { scope: N26, children: C18, ...y21 } = i23, w18 = a3.useRef(null), [p16, z17] = a3.useState(null), D18 = s(c15, w18, z17), k16 = s16(O23, N26), { setItemMap: T21 } = k16, _22 = a3.useRef(y21);
    X(_22.current, y21) || (_22.current = y21);
    let B18 = _22.current;
    return a3.useEffect(() => {
      let q22 = B18;
      return T21((I19) => p16 ? I19.has(p16) ? I19.set(p16, { ...q22, element: p16 }).toSorted(W) : (I19.set(p16, { ...q22, element: p16 }), I19.toSorted(W)) : I19), () => {
        T21((I19) => !p16 || !I19.has(p16) ? I19 : (I19.delete(p16), new j(I19)));
      };
    }, [p16, B18, T21]), P2(x19, { [u20]: "", ref: D18, children: C18 });
  });
  h23.displayName = O23;
  function d14() {
    return a3.useState(new j());
  }
  function E25(i23) {
    let { itemMap: c15 } = s16(r18 + "CollectionConsumer", i23);
    return c15;
  }
  return [{ Provider: l20, Slot: v18, ItemSlot: h23 }, { createCollectionScope: o15, useCollection: E25, useInitCollection: d14 }];
}
function X(r18, e20) {
  if (r18 === e20) return true;
  if (typeof r18 != "object" || typeof e20 != "object" || r18 == null || e20 == null) return false;
  let t18 = Object.keys(r18), o15 = Object.keys(e20);
  if (t18.length !== o15.length) return false;
  for (let n21 of t18) if (!Object.prototype.hasOwnProperty.call(e20, n21) || r18[n21] !== e20[n21]) return false;
  return true;
}
function Y(r18, e20) {
  return !!(e20.compareDocumentPosition(r18) & Node.DOCUMENT_POSITION_PRECEDING);
}
function W(r18, e20) {
  return !r18[1].element || !e20[1].element ? 0 : Y(r18[1].element, e20[1].element) ? -1 : 1;
}
function Z(r18) {
  return new MutationObserver((t18) => {
    for (let o15 of t18) if (o15.type === "childList") {
      r18();
      return;
    }
  });
}

// http-url:https://esm.sh/@radix-ui/primitive@1.1.4/es2022/primitive.mjs
var i3 = !!(typeof window < "u" && window.document && window.document.createElement);
function f2(e20, o15, { checkForDefaultPrevented: n21 = true } = {}) {
  return function(t18) {
    if (e20?.(t18), n21 === false || !t18.defaultPrevented) return o15?.(t18);
  };
}

// http-url:https://esm.sh/@radix-ui/react-use-controllable-state@1.2.3/X-ZXJlYWN0/es2022/react-use-controllable-state.mjs
import * as n4 from "react";

// http-url:https://esm.sh/@radix-ui/react-use-layout-effect@1.1.2/X-ZXJlYWN0/es2022/react-use-layout-effect.mjs
import * as t2 from "react";
var e5 = globalThis?.document ? t2.useLayoutEffect : () => {
};

// http-url:https://esm.sh/@radix-ui/react-use-controllable-state@1.2.3/X-ZXJlYWN0/es2022/react-use-controllable-state.mjs
import * as c2 from "react";

// http-url:https://esm.sh/@radix-ui/react-use-effect-event@0.0.3/X-ZXJlYWN0/es2022/react-use-effect-event.mjs
import * as e6 from "react";
var n3 = e6[" useEffectEvent ".trim().toString()];
var f3 = e6[" useInsertionEffect ".trim().toString()];
function i4(t18) {
  if (typeof n3 == "function") return n3(t18);
  let r18 = e6.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof f3 == "function" ? f3(() => {
    r18.current = t18;
  }) : e5(() => {
    r18.current = t18;
  }), e6.useMemo(() => (...o15) => r18.current?.(...o15), []);
}

// http-url:https://esm.sh/@radix-ui/react-use-controllable-state@1.2.3/X-ZXJlYWN0/es2022/react-use-controllable-state.mjs
var w2 = n4[" useInsertionEffect ".trim().toString()] || e5;
function D({ prop: e20, defaultProp: a20, onChange: s16 = () => {
}, caller: i23 }) {
  let [t18, f21, v18] = $4({ defaultProp: a20, onChange: s16 }), l20 = e20 !== void 0, r18 = l20 ? e20 : t18;
  {
    let u20 = n4.useRef(e20 !== void 0);
    n4.useEffect(() => {
      let o15 = u20.current;
      o15 !== l20 && console.warn(`${i23} is changing from ${o15 ? "controlled" : "uncontrolled"} to ${l20 ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), u20.current = l20;
    }, [l20, i23]);
  }
  let C18 = n4.useCallback((u20) => {
    if (l20) {
      let o15 = y2(u20) ? u20(e20) : u20;
      o15 !== e20 && v18.current?.(o15);
    } else f21(u20);
  }, [l20, e20, f21, v18]);
  return [r18, C18];
}
function $4({ defaultProp: e20, onChange: a20 }) {
  let [s16, i23] = n4.useState(e20), t18 = n4.useRef(s16), f21 = n4.useRef(a20);
  return w2(() => {
    f21.current = a20;
  }, [a20]), n4.useEffect(() => {
    t18.current !== s16 && (f21.current?.(s16), t18.current = s16);
  }, [s16, t18]), [s16, i23, f21];
}
function y2(e20) {
  return typeof e20 == "function";
}
var E2 = Symbol("RADIX:SYNC_STATE");

// http-url:https://esm.sh/@radix-ui/react-collapsible@1.1.14/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-collapsible.mjs
import * as e7 from "react";

// http-url:https://esm.sh/@radix-ui/react-presence@1.1.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-presence.mjs
import * as t3 from "react";
import * as g3 from "react";
function E3(n21, e20) {
  return g3.useReducer((r18, o15) => e20[r18][o15] ?? r18, n21);
}
var y3 = (n21) => {
  let { present: e20, children: r18 } = n21, o15 = v3(e20), i23 = typeof r18 == "function" ? r18({ present: o15.isPresent }) : t3.Children.only(r18), u20 = S2(o15.ref, h2(i23));
  return typeof r18 == "function" || o15.isPresent ? t3.cloneElement(i23, { ref: u20 }) : null;
};
y3.displayName = "Presence";
function v3(n21) {
  let [e20, r18] = t3.useState(), o15 = t3.useRef(null), i23 = t3.useRef(n21), u20 = t3.useRef("none"), s16 = n21 ? "mounted" : "unmounted", [c15, f21] = E3(s16, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return t3.useEffect(() => {
    let a20 = N(o15.current);
    u20.current = c15 === "mounted" ? a20 : "none";
  }, [c15]), e5(() => {
    let a20 = o15.current, m20 = i23.current;
    if (m20 !== n21) {
      let p16 = u20.current, l20 = N(a20);
      n21 ? f21("MOUNT") : l20 === "none" || a20?.display === "none" ? f21("UNMOUNT") : f21(m20 && p16 !== l20 ? "ANIMATION_OUT" : "UNMOUNT"), i23.current = n21;
    }
  }, [n21, f21]), e5(() => {
    if (e20) {
      let a20, m20 = e20.ownerDocument.defaultView ?? window, d14 = (l20) => {
        let O23 = N(o15.current).includes(CSS.escape(l20.animationName));
        if (l20.target === e20 && O23 && (f21("ANIMATION_END"), !i23.current)) {
          let T21 = e20.style.animationFillMode;
          e20.style.animationFillMode = "forwards", a20 = m20.setTimeout(() => {
            e20.style.animationFillMode === "forwards" && (e20.style.animationFillMode = T21);
          });
        }
      }, p16 = (l20) => {
        l20.target === e20 && (u20.current = N(o15.current));
      };
      return e20.addEventListener("animationstart", p16), e20.addEventListener("animationcancel", d14), e20.addEventListener("animationend", d14), () => {
        m20.clearTimeout(a20), e20.removeEventListener("animationstart", p16), e20.removeEventListener("animationcancel", d14), e20.removeEventListener("animationend", d14);
      };
    } else f21("ANIMATION_END");
  }, [e20, f21]), { isPresent: ["mounted", "unmountSuspended"].includes(c15), ref: t3.useCallback((a20) => {
    o15.current = a20 ? getComputedStyle(a20) : null, r18(a20);
  }, []) };
}
function A(n21, e20) {
  if (typeof n21 == "function") return n21(e20);
  n21 != null && (n21.current = e20);
}
function S2(...n21) {
  let e20 = t3.useRef(n21);
  return e20.current = n21, t3.useCallback((r18) => {
    let o15 = e20.current, i23 = false, u20 = o15.map((s16) => {
      let c15 = A(s16, r18);
      return !i23 && typeof c15 == "function" && (i23 = true), c15;
    });
    if (i23) return () => {
      for (let s16 = 0; s16 < u20.length; s16++) {
        let c15 = u20[s16];
        typeof c15 == "function" ? c15() : A(o15[s16], null);
      }
    };
  }, []);
}
function N(n21) {
  return n21?.animationName || "none";
}
function h2(n21) {
  let e20 = Object.getOwnPropertyDescriptor(n21.props, "ref")?.get, r18 = e20 && "isReactWarning" in e20 && e20.isReactWarning;
  return r18 ? n21.ref : (e20 = Object.getOwnPropertyDescriptor(n21, "ref")?.get, r18 = e20 && "isReactWarning" in e20 && e20.isReactWarning, r18 ? n21.props.ref : n21.props.ref || n21.ref);
}

// http-url:https://esm.sh/@radix-ui/react-id@1.1.2/X-ZXJlYWN0/es2022/react-id.mjs
import * as o3 from "react";
var f4 = o3[" useId ".trim().toString()] || (() => {
});
var s3 = 0;
function n5(t18) {
  let [r18, a20] = o3.useState(f4());
  return e5(() => {
    t18 || a20((e20) => e20 ?? String(s3++));
  }, [t18]), t18 || (r18 ? `radix-${r18}` : "");
}

// http-url:https://esm.sh/@radix-ui/react-collapsible@1.1.14/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-collapsible.mjs
import { jsx as c3 } from "react/jsx-runtime";
var u2 = "Collapsible";
var [B, W2] = $2(u2);
var [G, v4] = B(u2);
var w3 = e7.forwardRef((o15, r18) => {
  let { __scopeCollapsible: i23, open: a20, defaultOpen: t18, disabled: l20, onOpenChange: s16, ...m20 } = o15, [d14, p16] = D({ prop: a20, defaultProp: t18 ?? false, onChange: s16, caller: u2 });
  return c3(G, { scope: i23, disabled: l20, contentId: n5(), open: d14, onOpenToggle: e7.useCallback(() => p16((C18) => !C18), [p16]), children: c3(v2.div, { "data-state": h3(d14), "data-disabled": l20 ? "" : void 0, ...m20, ref: r18 }) });
});
w3.displayName = u2;
var A2 = "CollapsibleTrigger";
var I2 = e7.forwardRef((o15, r18) => {
  let { __scopeCollapsible: i23, ...a20 } = o15, t18 = v4(A2, i23);
  return c3(v2.button, { type: "button", "aria-controls": t18.open ? t18.contentId : void 0, "aria-expanded": t18.open || false, "data-state": h3(t18.open), "data-disabled": t18.disabled ? "" : void 0, disabled: t18.disabled, ...a20, ref: r18, onClick: f2(o15.onClick, t18.onOpenToggle) });
});
I2.displayName = A2;
var g4 = "CollapsibleContent";
var O2 = e7.forwardRef((o15, r18) => {
  let { forceMount: i23, ...a20 } = o15, t18 = v4(g4, o15.__scopeCollapsible);
  return c3(y3, { present: i23 || t18.open, children: ({ present: l20 }) => c3($5, { ...a20, ref: r18, present: l20 }) });
});
O2.displayName = g4;
var $5 = e7.forwardRef((o15, r18) => {
  let { __scopeCollapsible: i23, present: a20, children: t18, ...l20 } = o15, s16 = v4(g4, i23), [m20, d14] = e7.useState(a20), p16 = e7.useRef(null), C18 = s(r18, p16), y21 = e7.useRef(0), x19 = y21.current, N26 = e7.useRef(0), P16 = N26.current, R18 = s16.open || m20, _22 = e7.useRef(R18), f21 = e7.useRef(void 0);
  return e7.useEffect(() => {
    let n21 = requestAnimationFrame(() => _22.current = false);
    return () => cancelAnimationFrame(n21);
  }, []), e5(() => {
    let n21 = p16.current;
    if (n21) {
      f21.current = f21.current || { transitionDuration: n21.style.transitionDuration, animationName: n21.style.animationName }, n21.style.transitionDuration = "0s", n21.style.animationName = "none";
      let E25 = n21.getBoundingClientRect();
      y21.current = E25.height, N26.current = E25.width, _22.current || (n21.style.transitionDuration = f21.current.transitionDuration, n21.style.animationName = f21.current.animationName), d14(a20);
    }
  }, [s16.open, a20]), c3(v2.div, { "data-state": h3(s16.open), "data-disabled": s16.disabled ? "" : void 0, id: s16.contentId, hidden: !R18, ...l20, ref: C18, style: { "--radix-collapsible-content-height": x19 ? `${x19}px` : void 0, "--radix-collapsible-content-width": P16 ? `${P16}px` : void 0, ...o15.style }, children: R18 && t18 });
});
function h3(o15) {
  return o15 ? "open" : "closed";
}
var X2 = w3;
var Y2 = I2;
var Z2 = O2;

// http-url:https://esm.sh/@radix-ui/react-direction@1.1.2/X-ZXJlYWN0/es2022/react-direction.mjs
import * as r2 from "react";
import { jsx as n6 } from "react/jsx-runtime";
var o4 = r2.createContext(void 0);
function v5(e20) {
  let t18 = r2.useContext(o4);
  return e20 || t18 || "ltr";
}

// http-url:https://esm.sh/@radix-ui/react-accordion@1.2.14/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-accordion.mjs
import { jsx as c4 } from "react/jsx-runtime";
var d3 = "Accordion";
var re2 = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [E4, te, ce] = re(d3);
var [R3, Ie] = $2(d3, [ce, W2]);
var k = W2();
var H = n7.forwardRef((o15, i23) => {
  let { type: e20, ...t18 } = o15, a20 = t18, r18 = t18;
  return c4(E4.Provider, { scope: o15.__scopeAccordion, children: e20 === "multiple" ? c4(le, { ...r18, ref: i23 }) : c4(ae, { ...a20, ref: i23 }) });
});
H.displayName = d3;
var [K, ne] = R3(d3);
var [L3, ie] = R3(d3, { collapsible: false });
var ae = n7.forwardRef((o15, i23) => {
  let { value: e20, defaultValue: t18, onValueChange: a20 = () => {
  }, collapsible: r18 = false, ...s16 } = o15, [l20, p16] = D({ prop: e20, defaultProp: t18 ?? "", onChange: a20, caller: d3 });
  return c4(K, { scope: o15.__scopeAccordion, value: n7.useMemo(() => l20 ? [l20] : [], [l20]), onItemOpen: p16, onItemClose: n7.useCallback(() => r18 && p16(""), [r18, p16]), children: c4(L3, { scope: o15.__scopeAccordion, collapsible: r18, children: c4(z, { ...s16, ref: i23 }) }) });
});
var le = n7.forwardRef((o15, i23) => {
  let { value: e20, defaultValue: t18, onValueChange: a20 = () => {
  }, ...r18 } = o15, [s16, l20] = D({ prop: e20, defaultProp: t18 ?? [], onChange: a20, caller: d3 }), p16 = n7.useCallback((v18) => l20((f21 = []) => [...f21, v18]), [l20]), u20 = n7.useCallback((v18) => l20((f21 = []) => f21.filter((h23) => h23 !== v18)), [l20]);
  return c4(K, { scope: o15.__scopeAccordion, value: s16, onItemOpen: p16, onItemClose: u20, children: c4(L3, { scope: o15.__scopeAccordion, collapsible: true, children: c4(z, { ...r18, ref: i23 }) }) });
});
var [se, I3] = R3(d3);
var z = n7.forwardRef((o15, i23) => {
  let { __scopeAccordion: e20, disabled: t18, dir: a20, orientation: r18 = "vertical", ...s16 } = o15, l20 = n7.useRef(null), p16 = s(l20, i23), u20 = te(e20), f21 = v5(a20) === "ltr", h23 = f2(o15.onKeyDown, (A17) => {
    if (!re2.includes(A17.key)) return;
    let J18 = A17.target, x19 = u20().filter((S18) => !S18.ref.current?.disabled), g21 = x19.findIndex((S18) => S18.ref.current === J18), O23 = x19.length;
    if (g21 === -1) return;
    A17.preventDefault();
    let m20 = g21, _22 = 0, P16 = O23 - 1, w18 = () => {
      m20 = g21 + 1, m20 > P16 && (m20 = _22);
    }, N26 = () => {
      m20 = g21 - 1, m20 < _22 && (m20 = P16);
    };
    switch (A17.key) {
      case "Home":
        m20 = _22;
        break;
      case "End":
        m20 = P16;
        break;
      case "ArrowRight":
        r18 === "horizontal" && (f21 ? w18() : N26());
        break;
      case "ArrowDown":
        r18 === "vertical" && w18();
        break;
      case "ArrowLeft":
        r18 === "horizontal" && (f21 ? N26() : w18());
        break;
      case "ArrowUp":
        r18 === "vertical" && N26();
        break;
    }
    let Q17 = m20 % O23;
    x19[Q17].ref.current?.focus();
  });
  return c4(se, { scope: e20, disabled: t18, direction: a20, orientation: r18, children: c4(E4.Slot, { scope: e20, children: c4(v2.div, { ...s16, "data-orientation": r18, ref: p16, onKeyDown: t18 ? void 0 : h23 }) }) });
});
var b3 = "AccordionItem";
var [de, D2] = R3(b3);
var G2 = n7.forwardRef((o15, i23) => {
  let { __scopeAccordion: e20, value: t18, ...a20 } = o15, r18 = I3(b3, e20), s16 = ne(b3, e20), l20 = k(e20), p16 = n5(), u20 = t18 && s16.value.includes(t18) || false, v18 = r18.disabled || o15.disabled;
  return c4(de, { scope: e20, open: u20, disabled: v18, triggerId: p16, children: c4(X2, { "data-orientation": r18.orientation, "data-state": F(u20), ...l20, ...a20, ref: i23, disabled: v18, open: u20, onOpenChange: (f21) => {
    f21 ? s16.onItemOpen(t18) : s16.onItemClose(t18);
  } }) });
});
G2.displayName = b3;
var U2 = "AccordionHeader";
var j2 = n7.forwardRef((o15, i23) => {
  let { __scopeAccordion: e20, ...t18 } = o15, a20 = I3(d3, e20), r18 = D2(U2, e20);
  return c4(v2.h3, { "data-orientation": a20.orientation, "data-state": F(r18.open), "data-disabled": r18.disabled ? "" : void 0, ...t18, ref: i23 });
});
j2.displayName = U2;
var y4 = "AccordionTrigger";
var Y3 = n7.forwardRef((o15, i23) => {
  let { __scopeAccordion: e20, ...t18 } = o15, a20 = I3(d3, e20), r18 = D2(y4, e20), s16 = ie(y4, e20), l20 = k(e20);
  return c4(E4.ItemSlot, { scope: e20, children: c4(Y2, { "aria-disabled": r18.open && !s16.collapsible || void 0, "data-orientation": a20.orientation, id: r18.triggerId, ...l20, ...t18, ref: i23 }) });
});
Y3.displayName = y4;
var q = "AccordionContent";
var B2 = n7.forwardRef((o15, i23) => {
  let { __scopeAccordion: e20, ...t18 } = o15, a20 = I3(d3, e20), r18 = D2(q, e20), s16 = k(e20);
  return c4(Z2, { role: "region", "aria-labelledby": r18.triggerId, "data-orientation": a20.orientation, ...s16, ...t18, ref: i23, style: { "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", ...o15.style } });
});
B2.displayName = q;
function F(o15) {
  return o15 ? "open" : "closed";
}

// http-url:https://esm.sh/@radix-ui/react-alert-dialog@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-alert-dialog.mjs
import * as i13 from "react";

// http-url:https://esm.sh/@radix-ui/react-dialog@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dialog.mjs
import * as i12 from "react";

// http-url:https://esm.sh/@radix-ui/react-dismissable-layer@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dismissable-layer.mjs
import * as e9 from "react";

// http-url:https://esm.sh/@radix-ui/react-use-callback-ref@1.1.2/X-ZXJlYWN0/es2022/react-use-callback-ref.mjs
import * as e8 from "react";
function u3(t18) {
  let c15 = e8.useRef(t18);
  return e8.useEffect(() => {
    c15.current = t18;
  }), e8.useMemo(() => (...r18) => c15.current?.(...r18), []);
}

// http-url:https://esm.sh/@radix-ui/react-use-escape-keydown@1.1.2/X-ZXJlYWN0/es2022/react-use-escape-keydown.mjs
import * as n8 from "react";
function p2(r18, e20 = globalThis?.document) {
  let t18 = u3(r18);
  n8.useEffect(() => {
    let a20 = (o15) => {
      o15.key === "Escape" && t18(o15);
    };
    return e20.addEventListener("keydown", a20, { capture: true }), () => e20.removeEventListener("keydown", a20, { capture: true });
  }, [t18, e20]);
}

// http-url:https://esm.sh/@radix-ui/react-dismissable-layer@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dismissable-layer.mjs
import { jsx as k2 } from "react/jsx-runtime";
var j3 = "DismissableLayer";
var g5 = "dismissableLayer.update";
var X3 = "dismissableLayer.pointerDownOutside";
var Y4 = "dismissableLayer.focusOutside";
var N2;
var I4 = e9.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set(), dismissableSurfaces: /* @__PURE__ */ new Set() });
var _2 = e9.forwardRef((s16, o15) => {
  let { disableOutsidePointerEvents: t18 = false, deferPointerDownOutside: a20 = false, onEscapeKeyDown: u20, onPointerDownOutside: d14, onFocusOutside: p16, onInteractOutside: v18, onDismiss: l20, ...m20 } = s16, n21 = e9.useContext(I4), [c15, P16] = e9.useState(null), f21 = c15?.ownerDocument ?? globalThis?.document, [, y21] = e9.useState({}), O23 = s(o15, (i23) => P16(i23)), h23 = Array.from(n21.layers), [L24] = [...n21.layersWithOutsidePointerEventsDisabled].slice(-1), r18 = h23.indexOf(L24), E25 = c15 ? h23.indexOf(c15) : -1, D18 = n21.layersWithOutsidePointerEventsDisabled.size > 0, b21 = E25 >= r18, w18 = e9.useRef(false), H15 = G3((i23) => {
    let R18 = i23.target;
    if (!(R18 instanceof Node)) return;
    let x19 = [...n21.branches].some((C18) => C18.contains(R18));
    !b21 || x19 || (d14?.(i23), v18?.(i23), i23.defaultPrevented || l20?.());
  }, { ownerDocument: f21, deferPointerDownOutside: a20, isDeferredPointerDownOutsideRef: w18, dismissableSurfaces: n21.dismissableSurfaces }), B18 = J((i23) => {
    if (a20 && w18.current) return;
    let R18 = i23.target;
    [...n21.branches].some((C18) => C18.contains(R18)) || (p16?.(i23), v18?.(i23), i23.defaultPrevented || l20?.());
  }, f21);
  return p2((i23) => {
    E25 === n21.layers.size - 1 && (u20?.(i23), !i23.defaultPrevented && l20 && (i23.preventDefault(), l20()));
  }, f21), e9.useEffect(() => {
    if (c15) return t18 && (n21.layersWithOutsidePointerEventsDisabled.size === 0 && (N2 = f21.body.style.pointerEvents, f21.body.style.pointerEvents = "none"), n21.layersWithOutsidePointerEventsDisabled.add(c15)), n21.layers.add(c15), T(), () => {
      t18 && (n21.layersWithOutsidePointerEventsDisabled.delete(c15), n21.layersWithOutsidePointerEventsDisabled.size === 0 && (f21.body.style.pointerEvents = N2));
    };
  }, [c15, f21, t18, n21]), e9.useEffect(() => () => {
    c15 && (n21.layers.delete(c15), n21.layersWithOutsidePointerEventsDisabled.delete(c15), T());
  }, [c15, n21]), e9.useEffect(() => {
    let i23 = () => y21({});
    return document.addEventListener(g5, i23), () => document.removeEventListener(g5, i23);
  }, []), k2(v2.div, { ...m20, ref: O23, style: { pointerEvents: D18 ? b21 ? "auto" : "none" : void 0, ...s16.style }, onFocusCapture: f2(s16.onFocusCapture, B18.onFocusCapture), onBlurCapture: f2(s16.onBlurCapture, B18.onBlurCapture), onPointerDownCapture: f2(s16.onPointerDownCapture, H15.onPointerDownCapture) });
});
_2.displayName = j3;
var q2 = "DismissableLayerBranch";
var U3 = e9.forwardRef((s16, o15) => {
  let t18 = e9.useContext(I4), a20 = e9.useRef(null), u20 = s(o15, a20);
  return e9.useEffect(() => {
    let d14 = a20.current;
    if (d14) return t18.branches.add(d14), () => {
      t18.branches.delete(d14);
    };
  }, [t18.branches]), k2(v2.div, { ...s16, ref: u20 });
});
U3.displayName = q2;
function ne2() {
  let s16 = e9.useContext(I4), [o15, t18] = e9.useState(null);
  return e9.useEffect(() => {
    if (o15) return s16.dismissableSurfaces.add(o15), () => {
      s16.dismissableSurfaces.delete(o15);
    };
  }, [o15, s16.dismissableSurfaces]), t18;
}
function G3(s16, o15) {
  let { ownerDocument: t18 = globalThis?.document, deferPointerDownOutside: a20 = false, isDeferredPointerDownOutsideRef: u20, dismissableSurfaces: d14 } = o15, p16 = u3(s16), v18 = e9.useRef(false), l20 = e9.useRef(false), m20 = e9.useRef(/* @__PURE__ */ new Map()), n21 = e9.useRef(() => {
  });
  return e9.useEffect(() => {
    function c15() {
      l20.current = false, u20.current = false, m20.current.clear();
    }
    function P16() {
      return Array.from(m20.current.values()).some(Boolean);
    }
    function f21(r18) {
      if (!l20.current) return;
      let E25 = r18.target;
      E25 instanceof Node && [...d14].some((b21) => b21.contains(E25)) || m20.current.set(r18.type, true), r18.type === "click" && window.setTimeout(() => {
        l20.current && n21.current();
      }, 0);
    }
    function y21(r18) {
      l20.current && m20.current.set(r18.type, false);
    }
    let O23 = (r18) => {
      if (r18.target && !v18.current) {
        let D18 = function() {
          t18.removeEventListener("click", n21.current);
          let w18 = P16();
          c15(), w18 || z2(X3, p16, b21, { discrete: true });
        };
        var E25 = D18;
        let b21 = { originalEvent: r18 };
        l20.current = true, u20.current = a20 && r18.button === 0, m20.current.clear(), !a20 || r18.button !== 0 ? D18() : (t18.removeEventListener("click", n21.current), n21.current = D18, t18.addEventListener("click", n21.current, { once: true }));
      } else t18.removeEventListener("click", n21.current), c15();
      v18.current = false;
    }, h23 = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
    for (let r18 of h23) t18.addEventListener(r18, f21, true), t18.addEventListener(r18, y21);
    let L24 = window.setTimeout(() => {
      t18.addEventListener("pointerdown", O23);
    }, 0);
    return () => {
      window.clearTimeout(L24), t18.removeEventListener("pointerdown", O23), t18.removeEventListener("click", n21.current);
      for (let r18 of h23) t18.removeEventListener(r18, f21, true), t18.removeEventListener(r18, y21);
    };
  }, [t18, p16, a20, u20, d14]), { onPointerDownCapture: () => v18.current = true };
}
function J(s16, o15 = globalThis?.document) {
  let t18 = u3(s16), a20 = e9.useRef(false);
  return e9.useEffect(() => {
    let u20 = (d14) => {
      d14.target && !a20.current && z2(Y4, t18, { originalEvent: d14 }, { discrete: false });
    };
    return o15.addEventListener("focusin", u20), () => o15.removeEventListener("focusin", u20);
  }, [o15, t18]), { onFocusCapture: () => a20.current = true, onBlurCapture: () => a20.current = false };
}
function T() {
  let s16 = new CustomEvent(g5);
  document.dispatchEvent(s16);
}
function z2(s16, o15, t18, { discrete: a20 }) {
  let u20 = t18.originalEvent.target, d14 = new CustomEvent(s16, { bubbles: false, cancelable: true, detail: t18 });
  o15 && u20.addEventListener(s16, o15, { once: true }), a20 ? R(u20, d14) : u20.dispatchEvent(d14);
}
var se2 = _2;
var re3 = U3;

// http-url:https://esm.sh/@radix-ui/react-focus-scope@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-focus-scope.mjs
import * as c5 from "react";
import { jsx as x2 } from "react/jsx-runtime";
var y5 = "focusScope.autoFocusOnMount";
var N3 = "focusScope.autoFocusOnUnmount";
var O3 = { bubbles: false, cancelable: true };
var D3 = "FocusScope";
var L4 = c5.forwardRef((e20, t18) => {
  let { loop: n21 = false, trapped: s16 = false, onMountAutoFocus: v18, onUnmountAutoFocus: U15, ...A17 } = e20, [o15, M17] = c5.useState(null), E25 = u3(v18), F11 = u3(U15), b21 = c5.useRef(null), P16 = s(t18, (u20) => M17(u20)), a20 = c5.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  c5.useEffect(() => {
    if (s16) {
      let d14 = function(p16) {
        if (a20.paused || !o15) return;
        let m20 = p16.target;
        o15.contains(m20) ? b21.current = m20 : i5(b21.current, { select: true });
      }, f21 = function(p16) {
        if (a20.paused || !o15) return;
        let m20 = p16.relatedTarget;
        m20 !== null && (o15.contains(m20) || i5(b21.current, { select: true }));
      }, l20 = function(p16) {
        if (document.activeElement === document.body) for (let K19 of p16) K19.removedNodes.length > 0 && i5(o15);
      };
      var u20 = d14, h23 = f21, r18 = l20;
      document.addEventListener("focusin", d14), document.addEventListener("focusout", f21);
      let T21 = new MutationObserver(l20);
      return o15 && T21.observe(o15, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", d14), document.removeEventListener("focusout", f21), T21.disconnect();
      };
    }
  }, [s16, o15, a20.paused]), c5.useEffect(() => {
    if (o15) {
      C2.add(a20);
      let u20 = document.activeElement;
      if (!o15.contains(u20)) {
        let r18 = new CustomEvent(y5, O3);
        o15.addEventListener(y5, E25), o15.dispatchEvent(r18), r18.defaultPrevented || (H2(z3(g6(o15)), { select: true }), document.activeElement === u20 && i5(o15));
      }
      return () => {
        o15.removeEventListener(y5, E25), setTimeout(() => {
          let r18 = new CustomEvent(N3, O3);
          o15.addEventListener(N3, F11), o15.dispatchEvent(r18), r18.defaultPrevented || i5(u20 ?? document.body, { select: true }), o15.removeEventListener(N3, F11), C2.remove(a20);
        }, 0);
      };
    }
  }, [o15, E25, F11, a20]);
  let _22 = c5.useCallback((u20) => {
    if (!n21 && !s16 || a20.paused) return;
    let h23 = u20.key === "Tab" && !u20.altKey && !u20.ctrlKey && !u20.metaKey, r18 = document.activeElement;
    if (h23 && r18) {
      let d14 = u20.currentTarget, [f21, l20] = V3(d14);
      f21 && l20 ? !u20.shiftKey && r18 === l20 ? (u20.preventDefault(), n21 && i5(f21, { select: true })) : u20.shiftKey && r18 === f21 && (u20.preventDefault(), n21 && i5(l20, { select: true })) : r18 === d14 && u20.preventDefault();
    }
  }, [n21, s16, a20.paused]);
  return x2(v2.div, { tabIndex: -1, ...A17, ref: P16, onKeyDown: _22 });
});
L4.displayName = D3;
function H2(e20, { select: t18 = false } = {}) {
  let n21 = document.activeElement;
  for (let s16 of e20) if (i5(s16, { select: t18 }), document.activeElement !== n21) return;
}
function V3(e20) {
  let t18 = g6(e20), n21 = R4(t18, e20), s16 = R4(t18.reverse(), e20);
  return [n21, s16];
}
function g6(e20) {
  let t18 = [], n21 = document.createTreeWalker(e20, NodeFilter.SHOW_ELEMENT, { acceptNode: (s16) => {
    let v18 = s16.tagName === "INPUT" && s16.type === "hidden";
    return s16.disabled || s16.hidden || v18 ? NodeFilter.FILTER_SKIP : s16.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n21.nextNode(); ) t18.push(n21.currentNode);
  return t18;
}
function R4(e20, t18) {
  for (let n21 of e20) if (!W3(n21, { upTo: t18 })) return n21;
}
function W3(e20, { upTo: t18 }) {
  if (getComputedStyle(e20).visibility === "hidden") return true;
  for (; e20; ) {
    if (t18 !== void 0 && e20 === t18) return false;
    if (getComputedStyle(e20).display === "none") return true;
    e20 = e20.parentElement;
  }
  return false;
}
function j4(e20) {
  return e20 instanceof HTMLInputElement && "select" in e20;
}
function i5(e20, { select: t18 = false } = {}) {
  if (e20 && e20.focus) {
    let n21 = document.activeElement;
    e20.focus({ preventScroll: true }), e20 !== n21 && j4(e20) && t18 && e20.select();
  }
}
var C2 = q3();
function q3() {
  let e20 = [];
  return { add(t18) {
    let n21 = e20[0];
    t18 !== n21 && n21?.pause(), e20 = I5(e20, t18), e20.unshift(t18);
  }, remove(t18) {
    e20 = I5(e20, t18), e20[0]?.resume();
  } };
}
function I5(e20, t18) {
  let n21 = [...e20], s16 = n21.indexOf(t18);
  return s16 !== -1 && n21.splice(s16, 1), n21;
}
function z3(e20) {
  return e20.filter((t18) => t18.tagName !== "A");
}

// http-url:https://esm.sh/@radix-ui/react-portal@1.1.12/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-portal.mjs
import * as t4 from "react";
import * as r3 from "react-dom";
import { jsx as p3 } from "react/jsx-runtime";
var u4 = "Portal";
var e10 = t4.forwardRef((a20, c15) => {
  let { container: i23, ...n21 } = a20, [m20, s16] = t4.useState(false);
  e5(() => s16(true), []);
  let o15 = i23 || m20 && globalThis?.document?.body;
  return o15 ? r3.createPortal(p3(v2.div, { ...n21, ref: c15 }), o15) : null;
});
e10.displayName = u4;

// http-url:https://esm.sh/@radix-ui/react-focus-guards@1.1.4/X-ZXJlYWN0/es2022/react-focus-guards.mjs
import * as s4 from "react";
var n9 = 0;
var t5 = null;
function a4() {
  s4.useEffect(() => {
    t5 || (t5 = { start: r4(), end: r4() });
    let { start: e20, end: o15 } = t5;
    return document.body.firstElementChild !== e20 && document.body.insertAdjacentElement("afterbegin", e20), document.body.lastElementChild !== o15 && document.body.insertAdjacentElement("beforeend", o15), n9++, () => {
      n9 === 1 && (t5?.start.remove(), t5?.end.remove(), t5 = null), n9 = Math.max(0, n9 - 1);
    };
  }, []);
}
function r4() {
  let e20 = document.createElement("span");
  return e20.setAttribute("data-radix-focus-guard", ""), e20.tabIndex = 0, e20.style.outline = "none", e20.style.opacity = "0", e20.style.position = "fixed", e20.style.pointerEvents = "none", e20;
}

// http-url:https://esm.sh/tslib@2.8.1/es2022/tslib.mjs
var v6 = function() {
  return v6 = Object.assign || function(t18) {
    for (var r18, n21 = 1, i23 = arguments.length; n21 < i23; n21++) {
      r18 = arguments[n21];
      for (var o15 in r18) Object.prototype.hasOwnProperty.call(r18, o15) && (t18[o15] = r18[o15]);
    }
    return t18;
  }, v6.apply(this, arguments);
};
function S3(e20, t18) {
  var r18 = {};
  for (var n21 in e20) Object.prototype.hasOwnProperty.call(e20, n21) && t18.indexOf(n21) < 0 && (r18[n21] = e20[n21]);
  if (e20 != null && typeof Object.getOwnPropertySymbols == "function") for (var i23 = 0, n21 = Object.getOwnPropertySymbols(e20); i23 < n21.length; i23++) t18.indexOf(n21[i23]) < 0 && Object.prototype.propertyIsEnumerable.call(e20, n21[i23]) && (r18[n21[i23]] = e20[n21[i23]]);
  return r18;
}
function V4(e20, t18, r18) {
  if (r18 || arguments.length === 2) for (var n21 = 0, i23 = t18.length, o15; n21 < i23; n21++) (o15 || !(n21 in t18)) && (o15 || (o15 = Array.prototype.slice.call(t18, 0, n21)), o15[n21] = t18[n21]);
  return e20.concat(o15 || Array.prototype.slice.call(t18));
}

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/Combination.mjs
import * as e16 from "react";

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/UI.mjs
import * as e13 from "react";

// http-url:https://esm.sh/react-remove-scroll-bar@2.3.8/X-ZXJlYWN0/es2022/constants.mjs
var r5 = "right-scroll-bar-position";
var a5 = "width-before-scroll-bar";

// http-url:https://esm.sh/use-callback-ref@1.3.3/X-ZXJlYWN0/es2022/use-callback-ref.mjs
import { useState as k3 } from "react";
import * as i6 from "react";
function o5(r18, e20) {
  return typeof r18 == "function" ? r18(e20) : r18 && (r18.current = e20), r18;
}
function u5(r18, e20) {
  var t18 = k3(function() {
    return { value: r18, callback: e20, facade: { get current() {
      return t18.value;
    }, set current(n21) {
      var a20 = t18.value;
      a20 !== n21 && (t18.value = n21, t18.callback(n21, a20));
    } } };
  })[0];
  return t18.callback = e20, t18.facade;
}
var x3 = typeof window < "u" ? i6.useLayoutEffect : i6.useEffect;
var s5 = /* @__PURE__ */ new WeakMap();
function v7(r18, e20) {
  var t18 = u5(e20 || null, function(n21) {
    return r18.forEach(function(a20) {
      return o5(a20, n21);
    });
  });
  return x3(function() {
    var n21 = s5.get(t18);
    if (n21) {
      var a20 = new Set(n21), l20 = new Set(r18), R18 = t18.current;
      a20.forEach(function(f21) {
        l20.has(f21) || o5(f21, null);
      }), l20.forEach(function(f21) {
        a20.has(f21) || o5(f21, R18);
      });
    }
    s5.set(t18, r18);
  }, [r18]), t18;
}

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/exports.mjs
import * as i7 from "react";
var a6 = function(r18) {
  var e20 = r18.sideCar, o15 = S3(r18, ["sideCar"]);
  if (!e20) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var t18 = e20.read();
  if (!t18) throw new Error("Sidecar medium not found");
  return i7.createElement(t18, v6({}, o15));
};
a6.isSideCarExport = true;
function p4(r18, e20) {
  return r18.useMedium(e20), a6;
}

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/hoc.mjs
import * as i9 from "react";

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/hook.mjs
import { useState as l5, useEffect as p5 } from "react";

// http-url:https://esm.sh/node/async_hooks.mjs
var c6 = class {
  __unenv__ = true;
  _currentStore;
  _enterStore;
  _enabled = true;
  getStore() {
    return this._currentStore ?? this._enterStore;
  }
  disable() {
    this._enabled = false;
  }
  enable() {
    this._enabled = true;
  }
  enterWith(e20) {
    this._enterStore = e20;
  }
  run(e20, r18, ...t18) {
    this._currentStore = e20;
    let n21 = r18(...t18);
    return this._currentStore = void 0, n21;
  }
  exit(e20, ...r18) {
    let t18 = this._currentStore;
    this._currentStore = void 0;
    let n21 = e20(...r18);
    return this._currentStore = t18, n21;
  }
  static snapshot() {
    throw new Error("[unenv] `AsyncLocalStorage.snapshot` is not implemented!");
  }
};
var S4 = globalThis.AsyncLocalStorage || c6;
var R5 = Symbol("init");
var a7 = Symbol("before");
var o6 = Symbol("after");
var i8 = Symbol("destroy");
var A3 = Symbol("promiseResolve");
var T2 = class {
  __unenv__ = true;
  _enabled = false;
  _callbacks = {};
  constructor(e20 = {}) {
    this._callbacks = e20;
  }
  enable() {
    return this._enabled = true, this;
  }
  disable() {
    return this._enabled = false, this;
  }
  get [R5]() {
    return this._callbacks.init;
  }
  get [a7]() {
    return this._callbacks.before;
  }
  get [o6]() {
    return this._callbacks.after;
  }
  get [i8]() {
    return this._callbacks.destroy;
  }
  get [A3]() {
    return this._callbacks.promiseResolve;
  }
};
var s6 = function() {
  return 0;
};
var I6 = Object.assign(/* @__PURE__ */ Object.create(null), { NONE: 0, DIRHANDLE: 1, DNSCHANNEL: 2, ELDHISTOGRAM: 3, FILEHANDLE: 4, FILEHANDLECLOSEREQ: 5, BLOBREADER: 6, FSEVENTWRAP: 7, FSREQCALLBACK: 8, FSREQPROMISE: 9, GETADDRINFOREQWRAP: 10, GETNAMEINFOREQWRAP: 11, HEAPSNAPSHOT: 12, HTTP2SESSION: 13, HTTP2STREAM: 14, HTTP2PING: 15, HTTP2SETTINGS: 16, HTTPINCOMINGMESSAGE: 17, HTTPCLIENTREQUEST: 18, JSSTREAM: 19, JSUDPWRAP: 20, MESSAGEPORT: 21, PIPECONNECTWRAP: 22, PIPESERVERWRAP: 23, PIPEWRAP: 24, PROCESSWRAP: 25, PROMISE: 26, QUERYWRAP: 27, QUIC_ENDPOINT: 28, QUIC_LOGSTREAM: 29, QUIC_PACKET: 30, QUIC_SESSION: 31, QUIC_STREAM: 32, QUIC_UDP: 33, SHUTDOWNWRAP: 34, SIGNALWRAP: 35, STATWATCHER: 36, STREAMPIPE: 37, TCPCONNECTWRAP: 38, TCPSERVERWRAP: 39, TCPWRAP: 40, TTYWRAP: 41, UDPSENDWRAP: 42, UDPWRAP: 43, SIGINTWATCHDOG: 44, WORKER: 45, WORKERHEAPSNAPSHOT: 46, WRITEWRAP: 47, ZLIB: 48, CHECKPRIMEREQUEST: 49, PBKDF2REQUEST: 50, KEYPAIRGENREQUEST: 51, KEYGENREQUEST: 52, KEYEXPORTREQUEST: 53, CIPHERREQUEST: 54, DERIVEBITSREQUEST: 55, HASHREQUEST: 56, RANDOMBYTESREQUEST: 57, RANDOMPRIMEREQUEST: 58, SCRYPTREQUEST: 59, SIGNREQUEST: 60, TLSWRAP: 61, VERIFYREQUEST: 62 });
var _3 = 100;
var y6 = class {
  __unenv__ = true;
  type;
  _asyncId;
  _triggerAsyncId;
  constructor(e20, r18 = s6()) {
    this.type = e20, this._asyncId = -1 * _3++, this._triggerAsyncId = typeof r18 == "number" ? r18 : r18?.triggerAsyncId;
  }
  static bind(e20, r18, t18) {
    return new E5(r18 ?? "anonymous").bind(e20);
  }
  bind(e20, r18) {
    let t18 = (...n21) => this.runInAsyncScope(e20, r18, ...n21);
    return t18.asyncResource = this, t18;
  }
  runInAsyncScope(e20, r18, ...t18) {
    return e20.apply(r18, t18);
  }
  emitDestroy() {
    return this;
  }
  asyncId() {
    return this._asyncId;
  }
  triggerAsyncId() {
    return this._triggerAsyncId;
  }
};
var E5 = globalThis.AsyncResource || y6;

// http-url:https://esm.sh/node/events.mjs
function te2(e20) {
  return new Error(`[unenv] ${e20} is not implemented yet!`);
}
function w4(e20) {
  return Object.assign(() => {
    throw te2(e20);
  }, { __unenv__: true });
}
var y7 = 10;
var ne3 = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
}).prototype);
var G4 = (e20, t18) => e20;
var _4 = Error;
var ie2 = Error;
var v8 = Error;
var b4 = Error;
var se3 = Error;
var C3 = Symbol.for("nodejs.rejection");
var f5 = Symbol.for("kCapture");
var M = Symbol.for("events.errorMonitor");
var d4 = Symbol.for("shapeMode");
var x4 = Symbol.for("events.maxEventTargetListeners");
var oe = Symbol.for("kEnhanceStackBeforeInspector");
var ue = Symbol.for("nodejs.watermarkData");
var S5 = Symbol.for("kEventEmitter");
var h4 = Symbol.for("kAsyncResource");
var le2 = Symbol.for("kFirstEventParam");
var P3 = Symbol.for("kResistStopPropagation");
var W4 = Symbol.for("events.maxEventTargetListenersWarned");
var U4 = class E6 {
  _events = void 0;
  _eventsCount = 0;
  _maxListeners = y7;
  [f5] = false;
  [d4] = false;
  static captureRejectionSymbol = C3;
  static errorMonitor = M;
  static kMaxEventTargetListeners = x4;
  static kMaxEventTargetListenersWarned = W4;
  static usingDomains = false;
  static get on() {
    return fe2;
  }
  static get once() {
    return he;
  }
  static get getEventListeners() {
    return ve;
  }
  static get getMaxListeners() {
    return me;
  }
  static get addAbortListener() {
    return X4;
  }
  static get EventEmitterAsyncResource() {
    return ae2;
  }
  static get EventEmitter() {
    return E6;
  }
  static setMaxListeners(t18 = y7, ...r18) {
    if (r18.length === 0) y7 = t18;
    else for (let n21 of r18) if (J2(n21)) n21[x4] = t18, n21[W4] = false;
    else if (typeof n21.setMaxListeners == "function") n21.setMaxListeners(t18);
    else throw new v8("eventTargets", ["EventEmitter", "EventTarget"], n21);
  }
  static listenerCount(t18, r18) {
    if (typeof t18.listenerCount == "function") return t18.listenerCount(r18);
    E6.prototype.listenerCount.call(t18, r18);
  }
  static init() {
    throw new Error("EventEmitter.init() is not implemented.");
  }
  static get captureRejections() {
    return this[f5];
  }
  static set captureRejections(t18) {
    this[f5] = t18;
  }
  static get defaultMaxListeners() {
    return y7;
  }
  static set defaultMaxListeners(t18) {
    y7 = t18;
  }
  constructor(t18) {
    this._events === void 0 || this._events === Object.getPrototypeOf(this)._events ? (this._events = { __proto__: null }, this._eventsCount = 0, this[d4] = false) : this[d4] = true, this._maxListeners = this._maxListeners || void 0, t18?.captureRejections ? this[f5] = !!t18.captureRejections : this[f5] = E6.prototype[f5];
  }
  setMaxListeners(t18) {
    return this._maxListeners = t18, this;
  }
  getMaxListeners() {
    return T3(this);
  }
  emit(t18, ...r18) {
    let n21 = t18 === "error", i23 = this._events;
    if (i23 !== void 0) n21 && i23[M] !== void 0 && this.emit(M, ...r18), n21 = n21 && i23.error === void 0;
    else if (!n21) return false;
    if (n21) {
      let s16;
      if (r18.length > 0 && (s16 = r18[0]), s16 instanceof Error) {
        try {
          let c15 = {};
          Error.captureStackTrace?.(c15, E6.prototype.emit), Object.defineProperty(s16, oe, { __proto__: null, value: Function.prototype.bind(de2, this, s16, c15), configurable: true });
        } catch {
        }
        throw s16;
      }
      let l20;
      try {
        l20 = G4(s16);
      } catch {
        l20 = s16;
      }
      let a20 = new ie2(l20);
      throw a20.context = s16, a20;
    }
    let o15 = i23[t18];
    if (o15 === void 0) return false;
    if (typeof o15 == "function") {
      let s16 = o15.apply(this, r18);
      s16 != null && K2(this, s16, t18, r18);
    } else {
      let s16 = o15.length, l20 = I7(o15);
      for (let a20 = 0; a20 < s16; ++a20) {
        let c15 = l20[a20].apply(this, r18);
        c15 != null && K2(this, c15, t18, r18);
      }
    }
    return true;
  }
  addListener(t18, r18) {
    return q4(this, t18, r18, false), this;
  }
  on(t18, r18) {
    return this.addListener(t18, r18);
  }
  prependListener(t18, r18) {
    return q4(this, t18, r18, true), this;
  }
  once(t18, r18) {
    return this.on(t18, z4(this, t18, r18)), this;
  }
  prependOnceListener(t18, r18) {
    return this.prependListener(t18, z4(this, t18, r18)), this;
  }
  removeListener(t18, r18) {
    let n21 = this._events;
    if (n21 === void 0) return this;
    let i23 = n21[t18];
    if (i23 === void 0) return this;
    if (i23 === r18 || i23.listener === r18) this._eventsCount -= 1, this[d4] ? n21[t18] = void 0 : this._eventsCount === 0 ? this._events = { __proto__: null } : (delete n21[t18], n21.removeListener && this.emit("removeListener", t18, i23.listener || r18));
    else if (typeof i23 != "function") {
      let o15 = -1;
      for (let s16 = i23.length - 1; s16 >= 0; s16--) if (i23[s16] === r18 || i23[s16].listener === r18) {
        o15 = s16;
        break;
      }
      if (o15 < 0) return this;
      o15 === 0 ? i23.shift() : ge(i23, o15), i23.length === 1 && (n21[t18] = i23[0]), n21.removeListener !== void 0 && this.emit("removeListener", t18, r18);
    }
    return this;
  }
  off(t18, r18) {
    return this.removeListener(t18, r18);
  }
  removeAllListeners(t18) {
    let r18 = this._events;
    if (r18 === void 0) return this;
    if (r18.removeListener === void 0) return arguments.length === 0 ? (this._events = { __proto__: null }, this._eventsCount = 0) : r18[t18] !== void 0 && (--this._eventsCount === 0 ? this._events = { __proto__: null } : delete r18[t18]), this[d4] = false, this;
    if (arguments.length === 0) {
      for (let i23 of Reflect.ownKeys(r18)) i23 !== "removeListener" && this.removeAllListeners(i23);
      return this.removeAllListeners("removeListener"), this._events = { __proto__: null }, this._eventsCount = 0, this[d4] = false, this;
    }
    let n21 = r18[t18];
    if (typeof n21 == "function") this.removeListener(t18, n21);
    else if (n21 !== void 0) for (let i23 = n21.length - 1; i23 >= 0; i23--) this.removeListener(t18, n21[i23]);
    return this;
  }
  listeners(t18) {
    return B3(this, t18, true);
  }
  rawListeners(t18) {
    return B3(this, t18, false);
  }
  eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  }
  listenerCount(t18, r18) {
    let n21 = this._events;
    if (n21 !== void 0) {
      let i23 = n21[t18];
      if (typeof i23 == "function") return r18 != null ? r18 === i23 || r18 === i23.listener ? 1 : 0 : 1;
      if (i23 !== void 0) {
        if (r18 != null) {
          let o15 = 0;
          for (let s16 = 0, l20 = i23.length; s16 < l20; s16++) (i23[s16] === r18 || i23[s16].listener === r18) && o15++;
          return o15;
        }
        return i23.length;
      }
    }
    return 0;
  }
};
var ae2 = class extends U4 {
  constructor(e20) {
    let t18;
    typeof e20 == "string" ? (t18 = e20, e20 = void 0) : t18 = e20?.name || new.target.name, super(e20), this[h4] = new ce2(this, t18, e20);
  }
  emit(e20, ...t18) {
    if (this[h4] === void 0) throw new _4("EventEmitterAsyncResource");
    let { asyncResource: r18 } = this;
    return Array.prototype.unshift(t18, super.emit, this, e20), Reflect.apply(r18.runInAsyncScope, r18, t18);
  }
  emitDestroy() {
    if (this[h4] === void 0) throw new _4("EventEmitterAsyncResource");
    this.asyncResource.emitDestroy();
  }
  get asyncId() {
    if (this[h4] === void 0) throw new _4("EventEmitterAsyncResource");
    return this.asyncResource.asyncId();
  }
  get triggerAsyncId() {
    if (this[h4] === void 0) throw new _4("EventEmitterAsyncResource");
    return this.asyncResource.triggerAsyncId();
  }
  get asyncResource() {
    if (this[h4] === void 0) throw new _4("EventEmitterAsyncResource");
    return this[h4];
  }
};
var ce2 = class extends E5 {
  constructor(e20, t18, r18) {
    super(t18, r18), this[S5] = e20;
  }
  get eventEmitter() {
    if (this[S5] === void 0) throw new _4("EventEmitterReferencingAsyncResource");
    return this[S5];
  }
};
var fe2 = function(e20, t18, r18 = {}) {
  let n21 = r18.signal;
  if (n21?.aborted) throw new b4(void 0, { cause: n21?.reason });
  let i23 = r18.highWaterMark ?? r18.highWatermark ?? Number.MAX_SAFE_INTEGER, o15 = r18.lowWaterMark ?? r18.lowWatermark ?? 1, s16 = new N4(), l20 = new N4(), a20 = false, c15 = null, m20 = false, p16 = 0, Q17 = Object.setPrototypeOf({ next() {
    if (p16) {
      let u20 = s16.shift();
      return p16--, a20 && p16 < o15 && (e20.resume?.(), a20 = false), Promise.resolve(k4(u20, false));
    }
    if (c15) {
      let u20 = Promise.reject(c15);
      return c15 = null, u20;
    }
    return m20 ? L24() : new Promise(function(u20, ee16) {
      l20.push({ resolve: u20, reject: ee16 });
    });
  }, return() {
    return L24();
  }, throw(u20) {
    if (!u20 || !(u20 instanceof Error)) throw new v8("EventEmitter.AsyncIterator", "Error", u20);
    R18(u20);
  }, [Symbol.asyncIterator]() {
    return this;
  }, [ue]: { get size() {
    return p16;
  }, get low() {
    return o15;
  }, get high() {
    return i23;
  }, get isPaused() {
    return a20;
  } } }, ne3), { addEventListener: A17, removeAll: V19 } = Ee();
  A17(e20, t18, r18[le2] ? $19 : function(...u20) {
    return $19(u20);
  }), t18 !== "error" && typeof e20.on == "function" && A17(e20, "error", R18);
  let F11 = r18?.close;
  if (F11?.length) for (let u20 of F11) A17(e20, u20, L24);
  let Y20 = n21 ? X4(n21, Z17) : null;
  return Q17;
  function Z17() {
    R18(new b4(void 0, { cause: n21?.reason }));
  }
  function $19(u20) {
    l20.isEmpty() ? (p16++, !a20 && p16 > i23 && (a20 = true, e20.pause?.()), s16.push(u20)) : l20.shift().resolve(k4(u20, false));
  }
  function R18(u20) {
    l20.isEmpty() ? c15 = u20 : l20.shift().reject(u20), L24();
  }
  function L24() {
    Y20?.[Symbol.dispose](), V19(), m20 = true;
    let u20 = k4(void 0, true);
    for (; !l20.isEmpty(); ) l20.shift().resolve(u20);
    return Promise.resolve(u20);
  }
};
var he = async function(e20, t18, r18 = {}) {
  let n21 = r18?.signal;
  if (n21?.aborted) throw new b4(void 0, { cause: n21?.reason });
  return new Promise((i23, o15) => {
    let s16 = (m20) => {
      typeof e20.removeListener == "function" && e20.removeListener(t18, l20), n21 != null && g7(n21, "abort", c15), o15(m20);
    }, l20 = (...m20) => {
      typeof e20.removeListener == "function" && e20.removeListener("error", s16), n21 != null && g7(n21, "abort", c15), i23(m20);
    }, a20 = { __proto__: null, once: true, [P3]: true };
    O4(e20, t18, l20, a20), t18 !== "error" && typeof e20.once == "function" && e20.once("error", s16);
    function c15() {
      g7(e20, t18, l20), g7(e20, "error", s16), o15(new b4(void 0, { cause: n21?.reason }));
    }
    n21 != null && O4(n21, "abort", c15, { __proto__: null, once: true, [P3]: true });
  });
};
var X4 = function(e20, t18) {
  if (e20 === void 0) throw new v8("signal", "AbortSignal", e20);
  let r18;
  return e20.aborted ? queueMicrotask(() => t18()) : (e20.addEventListener("abort", t18, { __proto__: null, once: true, [P3]: true }), r18 = () => {
    e20.removeEventListener("abort", t18);
  }), { __proto__: null, [Symbol.dispose]() {
    r18?.();
  } };
};
var ve = function(e20, t18) {
  if (typeof e20.listeners == "function") return e20.listeners(t18);
  if (J2(e20)) {
    let r18 = e20[kEvents].get(t18), n21 = [], i23 = r18?.next;
    for (; i23?.listener !== void 0; ) {
      let o15 = i23.listener?.deref ? i23.listener.deref() : i23.listener;
      n21.push(o15), i23 = i23.next;
    }
    return n21;
  }
  throw new v8("emitter", ["EventEmitter", "EventTarget"], e20);
};
var me = function(e20) {
  if (typeof e20?.getMaxListeners == "function") return T3(e20);
  if (e20?.[x4]) return e20[x4];
  throw new v8("emitter", ["EventEmitter", "EventTarget"], e20);
};
var H3 = 2048;
var j5 = H3 - 1;
var D4 = class {
  bottom;
  top;
  list;
  next;
  constructor() {
    this.bottom = 0, this.top = 0, this.list = new Array(H3), this.next = null;
  }
  isEmpty() {
    return this.top === this.bottom;
  }
  isFull() {
    return (this.top + 1 & j5) === this.bottom;
  }
  push(e20) {
    this.list[this.top] = e20, this.top = this.top + 1 & j5;
  }
  shift() {
    let e20 = this.list[this.bottom];
    return e20 === void 0 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & j5, e20);
  }
};
var N4 = class {
  head;
  tail;
  constructor() {
    this.head = this.tail = new D4();
  }
  isEmpty() {
    return this.head.isEmpty();
  }
  push(e20) {
    this.head.isFull() && (this.head = this.head.next = new D4()), this.head.push(e20);
  }
  shift() {
    let e20 = this.tail, t18 = e20.shift();
    return e20.isEmpty() && e20.next !== null && (this.tail = e20.next, e20.next = null), t18;
  }
};
function J2(e20) {
  return typeof e20?.addEventListener == "function";
}
function K2(e20, t18, r18, n21) {
  if (e20[f5]) try {
    let i23 = t18.then;
    typeof i23 == "function" && i23.call(t18, void 0, function(o15) {
      setTimeout(pe, 0, e20, o15, r18, n21);
    });
  } catch (i23) {
    e20.emit("error", i23);
  }
}
function pe(e20, t18, r18, n21) {
  if (typeof e20[C3] == "function") e20[C3](t18, r18, ...n21);
  else {
    let i23 = e20[f5];
    try {
      e20[f5] = false, e20.emit("error", t18);
    } finally {
      e20[f5] = i23;
    }
  }
}
function T3(e20) {
  return e20._maxListeners === void 0 ? y7 : e20._maxListeners;
}
function de2(e20, t18) {
  let r18 = "";
  try {
    let { name: o15 } = this.constructor;
    o15 !== "EventEmitter" && (r18 = ` on ${o15} instance`);
  } catch {
  }
  let n21 = `
Emitted 'error' event${r18} at:
`, i23 = (t18.stack || "").split(`
`).slice(1);
  return e20.stack + n21 + i23.join(`
`);
}
function q4(e20, t18, r18, n21) {
  let i23, o15, s16;
  if (o15 = e20._events, o15 === void 0 ? (o15 = e20._events = { __proto__: null }, e20._eventsCount = 0) : (o15.newListener !== void 0 && (e20.emit("newListener", t18, r18.listener ?? r18), o15 = e20._events), s16 = o15[t18]), s16 === void 0) o15[t18] = r18, ++e20._eventsCount;
  else if (typeof s16 == "function" ? s16 = o15[t18] = n21 ? [r18, s16] : [s16, r18] : n21 ? s16.unshift(r18) : s16.push(r18), i23 = T3(e20), i23 > 0 && s16.length > i23 && !s16.warned) {
    s16.warned = true;
    let l20 = new se3(`Possible EventEmitter memory leak detected. ${s16.length} ${String(t18)} listeners added to ${G4(e20, { depth: -1 })}. MaxListeners is ${i23}. Use emitter.setMaxListeners() to increase limit`, { name: "MaxListenersExceededWarning", emitter: e20, type: t18, count: s16.length });
    console.warn(l20);
  }
  return e20;
}
function ye() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function z4(e20, t18, r18) {
  let n21 = { fired: false, wrapFn: void 0, target: e20, type: t18, listener: r18 }, i23 = ye.bind(n21);
  return i23.listener = r18, n21.wrapFn = i23, i23;
}
function B3(e20, t18, r18) {
  let n21 = e20._events;
  if (n21 === void 0) return [];
  let i23 = n21[t18];
  return i23 === void 0 ? [] : typeof i23 == "function" ? r18 ? [i23.listener || i23] : [i23] : r18 ? _e(i23) : I7(i23);
}
function I7(e20) {
  switch (e20.length) {
    case 2:
      return [e20[0], e20[1]];
    case 3:
      return [e20[0], e20[1], e20[2]];
    case 4:
      return [e20[0], e20[1], e20[2], e20[3]];
    case 5:
      return [e20[0], e20[1], e20[2], e20[3], e20[4]];
    case 6:
      return [e20[0], e20[1], e20[2], e20[3], e20[4], e20[5]];
  }
  return Array.prototype.slice.call(e20);
}
function _e(e20) {
  let t18 = I7(e20);
  for (let r18 = 0; r18 < t18.length; ++r18) {
    let n21 = t18[r18].listener;
    typeof n21 == "function" && (t18[r18] = n21);
  }
  return t18;
}
function k4(e20, t18) {
  return { value: e20, done: t18 };
}
function g7(e20, t18, r18, n21) {
  if (typeof e20.removeListener == "function") e20.removeListener(t18, r18);
  else if (typeof e20.removeEventListener == "function") e20.removeEventListener(t18, r18, n21);
  else throw new v8("emitter", "EventEmitter", e20);
}
function O4(e20, t18, r18, n21) {
  if (typeof e20.on == "function") n21?.once ? e20.once(t18, r18) : e20.on(t18, r18);
  else if (typeof e20.addEventListener == "function") e20.addEventListener(t18, r18, n21);
  else throw new v8("emitter", "EventEmitter", e20);
}
function Ee() {
  let e20 = [];
  return { addEventListener(t18, r18, n21, i23) {
    O4(t18, r18, n21, i23), Array.prototype.push(e20, [t18, r18, n21, i23]);
  }, removeAll() {
    for (; e20.length > 0; ) Reflect.apply(g7, void 0, e20.pop());
  } };
}
function ge(e20, t18) {
  for (; t18 + 1 < e20.length; t18++) e20[t18] = e20[t18 + 1];
  e20.pop();
}
var Me = Symbol.for("nodejs.rejection");
var je = Symbol.for("events.errorMonitor");
var Ce = w4("node:events.setMaxListeners");
var Pe = w4("node:events.listenerCount");
var Oe = w4("node:events.init");

// http-url:https://esm.sh/node/tty.mjs
var o7 = class {
  fd;
  isRaw = false;
  isTTY = false;
  constructor(t18) {
    this.fd = t18;
  }
  setRawMode(t18) {
    return this.isRaw = t18, this;
  }
};
var s7 = class {
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(t18) {
    this.fd = t18;
  }
  clearLine(t18, r18) {
    return r18 && r18(), false;
  }
  clearScreenDown(t18) {
    return t18 && t18(), false;
  }
  cursorTo(t18, r18, e20) {
    return e20 && typeof e20 == "function" && e20(), false;
  }
  moveCursor(t18, r18, e20) {
    return e20 && e20(), false;
  }
  getColorDepth(t18) {
    return 1;
  }
  hasColors(t18, r18) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(t18, r18, e20) {
    t18 instanceof Uint8Array && (t18 = new TextDecoder().decode(t18));
    try {
      console.log(t18);
    } catch {
    }
    return e20 && typeof e20 == "function" && e20(), false;
  }
};

// http-url:https://esm.sh/node/process.mjs
function r6(t18) {
  return new Error(`[unenv] ${t18} is not implemented yet!`);
}
function a8(t18) {
  return Object.assign(() => {
    throw r6(t18);
  }, { __unenv__: true });
}
var v9 = "22.14.0";
var _5 = class m3 extends U4 {
  env;
  hrtime;
  nextTick;
  constructor(e20) {
    super(), this.env = e20.env, this.hrtime = e20.hrtime, this.nextTick = e20.nextTick;
    for (let s16 of [...Object.getOwnPropertyNames(m3.prototype), ...Object.getOwnPropertyNames(U4.prototype)]) {
      let i23 = this[s16];
      typeof i23 == "function" && (this[s16] = i23.bind(this));
    }
  }
  emitWarning(e20, s16, i23) {
    console.warn(`${i23 ? `[${i23}] ` : ""}${s16 ? `${s16}: ` : ""}${e20}`);
  }
  emit(...e20) {
    return super.emit(...e20);
  }
  listeners(e20) {
    return super.listeners(e20);
  }
  #t;
  #s;
  #r;
  get stdin() {
    return this.#t ??= new o7(0);
  }
  get stdout() {
    return this.#s ??= new s7(1);
  }
  get stderr() {
    return this.#r ??= new s7(2);
  }
  #e = "/";
  chdir(e20) {
    this.#e = e20;
  }
  cwd() {
    return this.#e;
  }
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${v9}`;
  }
  get versions() {
    return { node: v9 };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  ref() {
  }
  unref() {
  }
  umask() {
    throw r6("process.umask");
  }
  getBuiltinModule() {
  }
  getActiveResourcesInfo() {
    throw r6("process.getActiveResourcesInfo");
  }
  exit() {
    throw r6("process.exit");
  }
  reallyExit() {
    throw r6("process.reallyExit");
  }
  kill() {
    throw r6("process.kill");
  }
  abort() {
    throw r6("process.abort");
  }
  dlopen() {
    throw r6("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw r6("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw r6("process.loadEnvFile");
  }
  disconnect() {
    throw r6("process.disconnect");
  }
  cpuUsage() {
    throw r6("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw r6("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw r6("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw r6("process.initgroups");
  }
  openStdin() {
    throw r6("process.openStdin");
  }
  assert() {
    throw r6("process.assert");
  }
  binding() {
    throw r6("process.binding");
  }
  permission = { has: a8("process.permission.has") };
  report = { directory: "", filename: "", signal: "SIGUSR2", compact: false, reportOnFatalError: false, reportOnSignal: false, reportOnUncaughtException: false, getReport: a8("process.report.getReport"), writeReport: a8("process.report.writeReport") };
  finalization = { register: a8("process.finalization.register"), unregister: a8("process.finalization.unregister"), registerBeforeExit: a8("process.finalization.registerBeforeExit") };
  memoryUsage = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: () => 0 });
  mainModule = void 0;
  domain = void 0;
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};
var u6 = /* @__PURE__ */ Object.create(null);
var b5 = globalThis.process;
var o8 = (t18) => globalThis.__env__ || b5?.env || (t18 ? u6 : globalThis);
var x5 = new Proxy(u6, { get(t18, e20) {
  return o8()[e20] ?? u6[e20];
}, has(t18, e20) {
  let s16 = o8();
  return e20 in s16 || e20 in u6;
}, set(t18, e20, s16) {
  let i23 = o8(true);
  return i23[e20] = s16, true;
}, deleteProperty(t18, e20) {
  let s16 = o8(true);
  return delete s16[e20], true;
}, ownKeys() {
  let t18 = o8();
  return Object.keys(t18);
}, getOwnPropertyDescriptor(t18, e20) {
  let s16 = o8();
  if (e20 in s16) return { value: s16[e20], writable: true, enumerable: true, configurable: true };
} });
var w5 = Object.assign(function(t18) {
  let e20 = Date.now(), s16 = Math.trunc(e20 / 1e3), i23 = e20 % 1e3 * 1e6;
  if (t18) {
    let d14 = s16 - t18[0], n21 = i23 - t18[0];
    return n21 < 0 && (d14 = d14 - 1, n21 = 1e9 + n21), [d14, n21];
  }
  return [s16, i23];
}, { bigint: function() {
  return BigInt(Date.now() * 1e6);
} });
var E7 = globalThis.queueMicrotask ? (t18, ...e20) => {
  globalThis.queueMicrotask(t18.bind(void 0, ...e20));
} : k5();
function k5() {
  let t18 = [], e20 = false, s16, i23 = -1;
  function d14() {
    !e20 || !s16 || (e20 = false, s16.length > 0 ? t18 = [...s16, ...t18] : i23 = -1, t18.length > 0 && n21());
  }
  function n21() {
    if (e20) return;
    let c15 = setTimeout(d14);
    e20 = true;
    let l20 = t18.length;
    for (; l20; ) {
      for (s16 = t18, t18 = []; ++i23 < l20; ) s16 && s16[i23]();
      i23 = -1, l20 = t18.length;
    }
    s16 = void 0, e20 = false, clearTimeout(c15);
  }
  return (c15, ...l20) => {
    t18.push(c15.bind(void 0, ...l20)), t18.length === 1 && !e20 && setTimeout(n21);
  };
}
var h5 = new _5({ env: x5, hrtime: w5, nextTick: E7 });
var A4 = h5;
var { abort: O5, addListener: T4, allowedNodeEnvironmentFlags: S6, hasUncaughtExceptionCaptureCallback: N5, setUncaughtExceptionCaptureCallback: R6, loadEnvFile: I8, sourceMapsEnabled: B4, arch: j6, argv: D5, argv0: F2, chdir: $6, config: z5, connected: q5, constrainedMemory: W5, availableMemory: H4, cpuUsage: Q2, cwd: G5, debugPort: K3, dlopen: J3, disconnect: V5, emit: X5, emitWarning: Y5, env: Z3, eventNames: ee2, execArgv: te3, execPath: se4, exit: re4, finalization: ie3, features: ne4, getBuiltinModule: ae3, getActiveResourcesInfo: oe2, getMaxListeners: de3, hrtime: le3, kill: ue2, listeners: ce3, listenerCount: ge2, memoryUsage: pe2, nextTick: ve2, on: me2, off: he2, once: fe3, pid: _e2, platform: be, ppid: xe, prependListener: we, prependOnceListener: Ee2, rawListeners: ke, release: ye2, removeAllListeners: Me2, removeListener: Ce2, report: Le, resourceUsage: Pe2, setMaxListeners: Ue, setSourceMapsEnabled: Ae, stderr: Oe2, stdin: Te, stdout: Se, title: Ne, umask: Re, uptime: Ie2, version: Be, versions: je2, domain: De, initgroups: Fe, moduleLoadList: $e, reallyExit: ze, openStdin: qe, assert: We, binding: He, send: Qe, exitCode: Ge, channel: Ke, getegid: Je, geteuid: Ve, getgid: Xe, getgroups: Ye, getuid: Ze, setegid: et, seteuid: tt, setgid: st, setgroups: rt, setuid: it, permission: nt, mainModule: at, ref: ot, unref: dt, _events: lt, _eventsCount: ut, _exiting: ct, _maxListeners: gt, _debugEnd: pt, _debugProcess: vt, _fatalException: mt, _getActiveHandles: ht, _getActiveRequests: ft, _kill: _t, _preload_modules: bt, _rawDebug: xt, _startProfilerIdleNotifier: wt, _stopProfilerIdleNotifier: Et, _tickCallback: kt, _disconnect: yt, _handleQueue: Mt, _pendingMessage: Ct, _channel: Lt, _send: Pt, _linkedBinding: Ut } = h5;

// http-url:https://esm.sh/detect-node-es@1.1.0/es2022/detect-node-es.mjs
var e11 = Object.prototype.toString.call(typeof A4 < "u" ? A4 : 0) === "[object process]";

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/medium.mjs
function a9(u20) {
  return u20;
}
function s8(u20, r18) {
  r18 === void 0 && (r18 = a9);
  var e20 = [], o15 = false, d14 = { read: function() {
    if (o15) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return e20.length ? e20[e20.length - 1] : u20;
  }, useMedium: function(t18) {
    var n21 = r18(t18, o15);
    return e20.push(n21), function() {
      e20 = e20.filter(function(i23) {
        return i23 !== n21;
      });
    };
  }, assignSyncMedium: function(t18) {
    for (o15 = true; e20.length; ) {
      var n21 = e20;
      e20 = [], n21.forEach(t18);
    }
    e20 = { push: function(i23) {
      return t18(i23);
    }, filter: function() {
      return e20;
    } };
  }, assignMedium: function(t18) {
    o15 = true;
    var n21 = [];
    if (e20.length) {
      var i23 = e20;
      e20 = [], i23.forEach(t18), n21 = e20;
    }
    var h23 = function() {
      var f21 = n21;
      n21 = [], f21.forEach(t18);
    }, c15 = function() {
      return Promise.resolve().then(h23);
    };
    c15(), e20 = { push: function(f21) {
      n21.push(f21), c15();
    }, filter: function(f21) {
      return n21 = n21.filter(f21), e20;
    } };
  } };
  return d14;
}
function g8(u20) {
  u20 === void 0 && (u20 = {});
  var r18 = s8(null);
  return r18.options = v6({ async: true, ssr: false }, u20), r18;
}

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/renderProp.mjs
import * as e12 from "react";
import { useState as m4, useCallback as d5, useEffect as v10, useLayoutEffect as g9 } from "react";

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/medium.mjs
var a10 = g8();

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/UI.mjs
var l7 = function() {
};
var m6 = e13.forwardRef(function(a20, d14) {
  var o15 = e13.useRef(null), t18 = e13.useState({ onScrollCapture: l7, onWheelCapture: l7, onTouchMoveCapture: l7 }), f21 = t18[0], R18 = t18[1], v18 = a20.forwardProps, n21 = a20.children, h23 = a20.className, u20 = a20.removeScrollBar, C18 = a20.enabled, g21 = a20.shards, P16 = a20.sideCar, S18 = a20.noRelative, b21 = a20.noIsolation, w18 = a20.inert, N26 = a20.allowPinchZoom, c15 = a20.as, M17 = c15 === void 0 ? "div" : c15, _22 = a20.gapMode, B18 = S3(a20, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k16 = P16, i23 = v7([o15, d14]), s16 = v6(v6({}, B18), f21);
  return e13.createElement(e13.Fragment, null, C18 && e13.createElement(k16, { sideCar: a10, removeScrollBar: u20, shards: g21, noRelative: S18, noIsolation: b21, inert: w18, setCallbacks: R18, allowPinchZoom: !!N26, lockRef: o15, gapMode: _22 }), v18 ? e13.cloneElement(e13.Children.only(n21), v6(v6({}, s16), { ref: i23 })) : e13.createElement(M17, v6({}, s16, { className: h23, ref: i23 }), n21));
});
m6.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
m6.classNames = { fullWidth: a5, zeroRight: r5 };

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/SideEffect.mjs
import * as r10 from "react";

// http-url:https://esm.sh/get-nonce@1.0.1/es2022/get-nonce.mjs
var e14;
var t6 = function() {
  if (e14) return e14;
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};

// http-url:https://esm.sh/react-style-singleton@2.2.3/X-ZXJlYWN0/es2022/react-style-singleton.mjs
import * as l8 from "react";
function c7() {
  if (!document) return null;
  var t18 = document.createElement("style");
  t18.type = "text/css";
  var e20 = t6();
  return e20 && t18.setAttribute("nonce", e20), t18;
}
function s9(t18, e20) {
  t18.styleSheet ? t18.styleSheet.cssText = e20 : t18.appendChild(document.createTextNode(e20));
}
function f6(t18) {
  var e20 = document.head || document.getElementsByTagName("head")[0];
  e20.appendChild(t18);
}
var o9 = function() {
  var t18 = 0, e20 = null;
  return { add: function(n21) {
    t18 == 0 && (e20 = c7()) && (s9(e20, n21), f6(e20)), t18++;
  }, remove: function() {
    t18--, !t18 && e20 && (e20.parentNode && e20.parentNode.removeChild(e20), e20 = null);
  } };
};
var r8 = function() {
  var t18 = o9();
  return function(e20, n21) {
    l8.useEffect(function() {
      return t18.add(e20), function() {
        t18.remove();
      };
    }, [e20 && n21]);
  };
};
var m7 = function() {
  var t18 = r8(), e20 = function(n21) {
    var i23 = n21.styles, u20 = n21.dynamic;
    return t18(i23, u20), null;
  };
  return e20;
};

// http-url:https://esm.sh/react-remove-scroll-bar@2.3.8/X-ZXJlYWN0/es2022/react-remove-scroll-bar.mjs
import * as c8 from "react";
var d6 = "right-scroll-bar-position";
var l9 = "width-before-scroll-bar";
var p6 = "with-scroll-bars-hidden";
var s10 = "--removed-body-scroll-bar-size";
var h7 = { left: 0, top: 0, right: 0, gap: 0 };
var m8 = function(t18) {
  return parseInt(t18 || "", 10) || 0;
};
var b6 = function(t18) {
  var r18 = window.getComputedStyle(document.body), o15 = r18[t18 === "padding" ? "paddingLeft" : "marginLeft"], n21 = r18[t18 === "padding" ? "paddingTop" : "marginTop"], e20 = r18[t18 === "padding" ? "paddingRight" : "marginRight"];
  return [m8(o15), m8(n21), m8(e20)];
};
var f7 = function(t18) {
  if (t18 === void 0 && (t18 = "margin"), typeof window > "u") return h7;
  var r18 = b6(t18), o15 = document.documentElement.clientWidth, n21 = window.innerWidth;
  return { left: r18[0], top: r18[1], right: r18[2], gap: Math.max(0, n21 - o15 + r18[2] - r18[0]) };
};
var y8 = m7();
var i10 = "data-scroll-locked";
var S7 = function(t18, r18, o15, n21) {
  var e20 = t18.left, g21 = t18.top, v18 = t18.right, a20 = t18.gap;
  return o15 === void 0 && (o15 = "margin"), `
  .`.concat(p6, ` {
   overflow: hidden `).concat(n21, `;
   padding-right: `).concat(a20, "px ").concat(n21, `;
  }
  body[`).concat(i10, `] {
    overflow: hidden `).concat(n21, `;
    overscroll-behavior: contain;
    `).concat([r18 && "position: relative ".concat(n21, ";"), o15 === "margin" && `
    padding-left: `.concat(e20, `px;
    padding-top: `).concat(g21, `px;
    padding-right: `).concat(v18, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a20, "px ").concat(n21, `;
    `), o15 === "padding" && "padding-right: ".concat(a20, "px ").concat(n21, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(d6, ` {
    right: `).concat(a20, "px ").concat(n21, `;
  }
  
  .`).concat(l9, ` {
    margin-right: `).concat(a20, "px ").concat(n21, `;
  }
  
  .`).concat(d6, " .").concat(d6, ` {
    right: 0 `).concat(n21, `;
  }
  
  .`).concat(l9, " .").concat(l9, ` {
    margin-right: 0 `).concat(n21, `;
  }
  
  body[`).concat(i10, `] {
    `).concat(s10, ": ").concat(a20, `px;
  }
`);
};
var u7 = function() {
  var t18 = parseInt(document.body.getAttribute(i10) || "0", 10);
  return isFinite(t18) ? t18 : 0;
};
var w6 = function() {
  c8.useEffect(function() {
    return document.body.setAttribute(i10, (u7() + 1).toString()), function() {
      var t18 = u7() - 1;
      t18 <= 0 ? document.body.removeAttribute(i10) : document.body.setAttribute(i10, t18.toString());
    };
  }, []);
};
var C4 = function(t18) {
  var r18 = t18.noRelative, o15 = t18.noImportant, n21 = t18.gapMode, e20 = n21 === void 0 ? "margin" : n21;
  w6();
  var g21 = c8.useMemo(function() {
    return f7(e20);
  }, [e20]);
  return c8.createElement(y8, { styles: S7(g21, !r18, e20, o15 ? "" : "!important") });
};

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/aggresiveCapture.mjs
var r9 = false;
if (typeof window < "u") try {
  e15 = Object.defineProperty({}, "passive", { get: function() {
    return r9 = true, true;
  } }), window.addEventListener("test", e15, e15), window.removeEventListener("test", e15, e15);
} catch {
  r9 = false;
}
var e15;
var a11 = r9 ? { passive: false } : false;

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/handleScroll.mjs
var N7 = function(e20) {
  return e20.tagName === "TEXTAREA";
};
var b7 = function(e20, r18) {
  if (!(e20 instanceof Element)) return false;
  var l20 = window.getComputedStyle(e20);
  return l20[r18] !== "hidden" && !(l20.overflowY === l20.overflowX && !N7(e20) && l20[r18] === "visible");
};
var p7 = function(e20) {
  return b7(e20, "overflowY");
};
var D6 = function(e20) {
  return b7(e20, "overflowX");
};
var T5 = function(e20, r18) {
  var l20 = r18.ownerDocument, t18 = r18;
  do {
    typeof ShadowRoot < "u" && t18 instanceof ShadowRoot && (t18 = t18.host);
    var n21 = g10(e20, t18);
    if (n21) {
      var a20 = m9(e20, t18), i23 = a20[1], o15 = a20[2];
      if (i23 > o15) return true;
    }
    t18 = t18.parentNode;
  } while (t18 && t18 !== l20.body);
  return false;
};
var E8 = function(e20) {
  var r18 = e20.scrollTop, l20 = e20.scrollHeight, t18 = e20.clientHeight;
  return [r18, l20, t18];
};
var H5 = function(e20) {
  var r18 = e20.scrollLeft, l20 = e20.scrollWidth, t18 = e20.clientWidth;
  return [r18, l20, t18];
};
var g10 = function(e20, r18) {
  return e20 === "v" ? p7(r18) : D6(r18);
};
var m9 = function(e20, r18) {
  return e20 === "v" ? E8(r18) : H5(r18);
};
var B5 = function(e20, r18) {
  return e20 === "h" && r18 === "rtl" ? -1 : 1;
};
var V6 = function(e20, r18, l20, t18, n21) {
  var a20 = B5(e20, window.getComputedStyle(r18).direction), i23 = a20 * t18, o15 = l20.target, h23 = r18.contains(o15), u20 = false, S18 = i23 > 0, v18 = 0, f21 = 0;
  do {
    if (!o15) break;
    var d14 = m9(e20, o15), s16 = d14[0], C18 = d14[1], y21 = d14[2], w18 = C18 - y21 - a20 * s16;
    (s16 || w18) && g10(e20, o15) && (v18 += w18, f21 += s16);
    var c15 = o15.parentNode;
    o15 = c15 && c15.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? c15.host : c15;
  } while (!h23 && o15 !== document.body || h23 && (r18.contains(o15) || r18 === o15));
  return (S18 && (n21 && Math.abs(v18) < 1 || !n21 && i23 > v18) || !S18 && (n21 && Math.abs(f21) < 1 || !n21 && -i23 > f21)) && (u20 = true), u20;
};

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/SideEffect.mjs
var b8 = function(e20) {
  return "changedTouches" in e20 ? [e20.changedTouches[0].clientX, e20.changedTouches[0].clientY] : [0, 0];
};
var M2 = function(e20) {
  return [e20.deltaX, e20.deltaY];
};
var X6 = function(e20) {
  return e20 && "current" in e20 ? e20.current : e20;
};
var K4 = function(e20, c15) {
  return e20[0] === c15[0] && e20[1] === c15[1];
};
var O6 = function(e20) {
  return `
  .block-interactivity-`.concat(e20, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e20, ` {pointer-events: all;}
`);
};
var Q3 = 0;
var f8 = [];
function H6(e20) {
  var c15 = r10.useRef([]), E25 = r10.useRef([0, 0]), m20 = r10.useRef(), h23 = r10.useState(Q3++)[0], R18 = r10.useState(m7)[0], g21 = r10.useRef(e20);
  r10.useEffect(function() {
    g21.current = e20;
  }, [e20]), r10.useEffect(function() {
    if (e20.inert) {
      document.body.classList.add("block-interactivity-".concat(h23));
      var t18 = V4([e20.lockRef.current], (e20.shards || []).map(X6), true).filter(Boolean);
      return t18.forEach(function(a20) {
        return a20.classList.add("allow-interactivity-".concat(h23));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(h23)), t18.forEach(function(a20) {
          return a20.classList.remove("allow-interactivity-".concat(h23));
        });
      };
    }
  }, [e20.inert, e20.lockRef.current, e20.shards]);
  var k16 = r10.useCallback(function(t18, a20) {
    if ("touches" in t18 && t18.touches.length === 2 || t18.type === "wheel" && t18.ctrlKey) return !g21.current.allowPinchZoom;
    var l20 = b8(t18), u20 = E25.current, o15 = "deltaX" in t18 ? t18.deltaX : u20[0] - l20[0], i23 = "deltaY" in t18 ? t18.deltaY : u20[1] - l20[1], n21, v18 = t18.target, d14 = Math.abs(o15) > Math.abs(i23) ? "h" : "v";
    if ("touches" in t18 && d14 === "h" && v18.type === "range") return false;
    var P16 = window.getSelection(), C18 = P16 && P16.anchorNode, I19 = C18 ? C18 === v18 || C18.contains(v18) : false;
    if (I19) return false;
    var y21 = T5(d14, v18);
    if (!y21) return true;
    if (y21 ? n21 = d14 : (n21 = d14 === "v" ? "h" : "v", y21 = T5(d14, v18)), !y21) return false;
    if (!m20.current && "changedTouches" in t18 && (o15 || i23) && (m20.current = n21), !n21) return true;
    var Y20 = m20.current || n21;
    return V6(Y20, a20, t18, Y20 === "h" ? o15 : i23, true);
  }, []), S18 = r10.useCallback(function(t18) {
    var a20 = t18;
    if (!(!f8.length || f8[f8.length - 1] !== R18)) {
      var l20 = "deltaY" in a20 ? M2(a20) : b8(a20), u20 = c15.current.filter(function(n21) {
        return n21.name === a20.type && (n21.target === a20.target || a20.target === n21.shadowParent) && K4(n21.delta, l20);
      })[0];
      if (u20 && u20.should) {
        a20.cancelable && a20.preventDefault();
        return;
      }
      if (!u20) {
        var o15 = (g21.current.shards || []).map(X6).filter(Boolean).filter(function(n21) {
          return n21.contains(a20.target);
        }), i23 = o15.length > 0 ? k16(a20, o15[0]) : !g21.current.noIsolation;
        i23 && a20.cancelable && a20.preventDefault();
      }
    }
  }, []), w18 = r10.useCallback(function(t18, a20, l20, u20) {
    var o15 = { name: t18, delta: a20, target: l20, should: u20, shadowParent: Z4(l20) };
    c15.current.push(o15), setTimeout(function() {
      c15.current = c15.current.filter(function(i23) {
        return i23 !== o15;
      });
    }, 1);
  }, []), L24 = r10.useCallback(function(t18) {
    E25.current = b8(t18), m20.current = void 0;
  }, []), T21 = r10.useCallback(function(t18) {
    w18(t18.type, M2(t18), t18.target, k16(t18, e20.lockRef.current));
  }, []), x19 = r10.useCallback(function(t18) {
    w18(t18.type, b8(t18), t18.target, k16(t18, e20.lockRef.current));
  }, []);
  r10.useEffect(function() {
    return f8.push(R18), e20.setCallbacks({ onScrollCapture: T21, onWheelCapture: T21, onTouchMoveCapture: x19 }), document.addEventListener("wheel", S18, a11), document.addEventListener("touchmove", S18, a11), document.addEventListener("touchstart", L24, a11), function() {
      f8 = f8.filter(function(t18) {
        return t18 !== R18;
      }), document.removeEventListener("wheel", S18, a11), document.removeEventListener("touchmove", S18, a11), document.removeEventListener("touchstart", L24, a11);
    };
  }, []);
  var D18 = e20.removeScrollBar, A17 = e20.inert;
  return r10.createElement(r10.Fragment, null, A17 ? r10.createElement(R18, { styles: O6(h23) }) : null, D18 ? r10.createElement(C4, { noRelative: e20.noRelative, gapMode: e20.gapMode }) : null);
}
function Z4(e20) {
  for (var c15 = null; e20 !== null; ) e20 instanceof ShadowRoot && (c15 = e20.host, e20 = e20.host), e20 = e20.parentNode;
  return c15;
}

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/sidecar.mjs
var i11 = p4(a10, H6);

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/Combination.mjs
var a12 = e16.forwardRef(function(o15, t18) {
  return e16.createElement(m6, v6({}, o15, { ref: t18, sideCar: i11 }));
});
a12.classNames = m6.classNames;
var l10 = a12;

// http-url:https://esm.sh/aria-hidden@1.2.6/es2022/aria-hidden.mjs
var W6 = function(r18) {
  if (typeof document > "u") return null;
  var a20 = Array.isArray(r18) ? r18[0] : r18;
  return a20.ownerDocument.body;
};
var f9 = /* @__PURE__ */ new WeakMap();
var v11 = /* @__PURE__ */ new WeakMap();
var p8 = {};
var h8 = 0;
var b9 = function(r18) {
  return r18 && (r18.host || b9(r18.parentNode));
};
var P4 = function(r18, a20) {
  return a20.map(function(t18) {
    if (r18.contains(t18)) return t18;
    var u20 = b9(t18);
    return u20 && r18.contains(u20) ? u20 : (console.error("aria-hidden", t18, "in not contained inside", r18, ". Doing nothing"), null);
  }).filter(function(t18) {
    return !!t18;
  });
};
var E9 = function(r18, a20, t18, u20) {
  var i23 = P4(a20, Array.isArray(r18) ? r18 : [r18]);
  p8[t18] || (p8[t18] = /* @__PURE__ */ new WeakMap());
  var s16 = p8[t18], l20 = [], c15 = /* @__PURE__ */ new Set(), O23 = new Set(i23), y21 = function(e20) {
    !e20 || c15.has(e20) || (c15.add(e20), y21(e20.parentNode));
  };
  i23.forEach(y21);
  var d14 = function(e20) {
    !e20 || O23.has(e20) || Array.prototype.forEach.call(e20.children, function(n21) {
      if (c15.has(n21)) d14(n21);
      else try {
        var o15 = n21.getAttribute(u20), A17 = o15 !== null && o15 !== "false", w18 = (f9.get(n21) || 0) + 1, M17 = (s16.get(n21) || 0) + 1;
        f9.set(n21, w18), s16.set(n21, M17), l20.push(n21), w18 === 1 && A17 && v11.set(n21, true), M17 === 1 && n21.setAttribute(t18, "true"), A17 || n21.setAttribute(u20, "true");
      } catch (x19) {
        console.error("aria-hidden: cannot operate on ", n21, x19);
      }
    });
  };
  return d14(a20), c15.clear(), h8++, function() {
    l20.forEach(function(e20) {
      var n21 = f9.get(e20) - 1, o15 = s16.get(e20) - 1;
      f9.set(e20, n21), s16.set(e20, o15), n21 || (v11.has(e20) || e20.removeAttribute(u20), v11.delete(e20)), o15 || e20.removeAttribute(t18);
    }), h8--, h8 || (f9 = /* @__PURE__ */ new WeakMap(), f9 = /* @__PURE__ */ new WeakMap(), v11 = /* @__PURE__ */ new WeakMap(), p8 = {});
  };
};
var S8 = function(r18, a20, t18) {
  t18 === void 0 && (t18 = "data-aria-hidden");
  var u20 = Array.from(Array.isArray(r18) ? r18 : [r18]), i23 = a20 || W6(r18);
  return i23 ? (u20.push.apply(u20, Array.from(i23.querySelectorAll("[aria-live], script"))), E9(u20, i23, t18, "aria-hidden")) : function() {
    return null;
  };
};

// http-url:https://esm.sh/@radix-ui/react-dialog@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dialog.mjs
import { Fragment as U5, jsx as s11 } from "react/jsx-runtime";
var m10 = "Dialog";
var [h9, ve3] = $2(m10);
var [V7, l11] = h9(m10);
var W7 = (e20) => {
  let { __scopeDialog: a20, children: r18, open: n21, defaultOpen: t18, onOpenChange: o15, modal: c15 = true } = e20, u20 = i12.useRef(null), O23 = i12.useRef(null), [T21, D18] = D({ prop: n21, defaultProp: t18 ?? false, onChange: o15, caller: m10 });
  return s11(V7, { scope: a20, triggerRef: u20, contentRef: O23, contentId: n5(), titleId: n5(), descriptionId: n5(), open: T21, onOpenChange: D18, onOpenToggle: i12.useCallback(() => D18((b21) => !b21), [D18]), modal: c15, children: r18 });
};
W7.displayName = m10;
var y9 = "DialogTrigger";
var Y6 = i12.forwardRef((e20, a20) => {
  let { __scopeDialog: r18, ...n21 } = e20, t18 = l11(y9, r18), o15 = s(a20, t18.triggerRef);
  return s11(v2.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": t18.open, "aria-controls": t18.open ? t18.contentId : void 0, "data-state": P5(t18.open), ...n21, ref: o15, onClick: f2(e20.onClick, t18.onOpenToggle) });
});
Y6.displayName = y9;
var _6 = "DialogPortal";
var [Z5, E10] = h9(_6, { forceMount: void 0 });
var q6 = (e20) => {
  let { __scopeDialog: a20, forceMount: r18, children: n21, container: t18 } = e20, o15 = l11(_6, a20);
  return s11(Z5, { scope: a20, forceMount: r18, children: i12.Children.map(n21, (c15) => s11(y3, { present: r18 || o15.open, children: s11(e10, { asChild: true, container: t18, children: c15 }) })) });
};
q6.displayName = _6;
var g11 = "DialogOverlay";
var z6 = i12.forwardRef((e20, a20) => {
  let r18 = E10(g11, e20.__scopeDialog), { forceMount: n21 = r18.forceMount, ...t18 } = e20, o15 = l11(g11, e20.__scopeDialog);
  return o15.modal ? s11(y3, { present: n21 || o15.open, children: s11(J4, { ...t18, ref: a20 }) }) : null;
});
z6.displayName = g11;
var B6 = b2("DialogOverlay.RemoveScroll");
var J4 = i12.forwardRef((e20, a20) => {
  let { __scopeDialog: r18, ...n21 } = e20, t18 = l11(g11, r18), o15 = ne2(), c15 = s(a20, o15);
  return s11(l10, { as: B6, allowPinchZoom: true, shards: [t18.contentRef], children: s11(v2.div, { "data-state": P5(t18.open), ...n21, ref: c15, style: { pointerEvents: "auto", ...n21.style } }) });
});
var f10 = "DialogContent";
var Q4 = i12.forwardRef((e20, a20) => {
  let r18 = E10(f10, e20.__scopeDialog), { forceMount: n21 = r18.forceMount, ...t18 } = e20, o15 = l11(f10, e20.__scopeDialog);
  return s11(y3, { present: n21 || o15.open, children: o15.modal ? s11(X7, { ...t18, ref: a20 }) : s11($7, { ...t18, ref: a20 }) });
});
Q4.displayName = f10;
var X7 = i12.forwardRef((e20, a20) => {
  let r18 = l11(f10, e20.__scopeDialog), n21 = i12.useRef(null), t18 = s(a20, r18.contentRef, n21);
  return i12.useEffect(() => {
    let o15 = n21.current;
    if (o15) return S8(o15);
  }, []), s11(I9, { ...e20, ref: t18, trapFocus: r18.open, disableOutsidePointerEvents: r18.open, onCloseAutoFocus: f2(e20.onCloseAutoFocus, (o15) => {
    o15.preventDefault(), r18.triggerRef.current?.focus();
  }), onPointerDownOutside: f2(e20.onPointerDownOutside, (o15) => {
    let c15 = o15.detail.originalEvent, u20 = c15.button === 0 && c15.ctrlKey === true;
    (c15.button === 2 || u20) && o15.preventDefault();
  }), onFocusOutside: f2(e20.onFocusOutside, (o15) => o15.preventDefault()) });
});
var $7 = i12.forwardRef((e20, a20) => {
  let r18 = l11(f10, e20.__scopeDialog), n21 = i12.useRef(false), t18 = i12.useRef(false);
  return s11(I9, { ...e20, ref: a20, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (o15) => {
    e20.onCloseAutoFocus?.(o15), o15.defaultPrevented || (n21.current || r18.triggerRef.current?.focus(), o15.preventDefault()), n21.current = false, t18.current = false;
  }, onInteractOutside: (o15) => {
    e20.onInteractOutside?.(o15), o15.defaultPrevented || (n21.current = true, o15.detail.originalEvent.type === "pointerdown" && (t18.current = true));
    let c15 = o15.target;
    r18.triggerRef.current?.contains(c15) && o15.preventDefault(), o15.detail.originalEvent.type === "focusin" && t18.current && o15.preventDefault();
  } });
});
var I9 = i12.forwardRef((e20, a20) => {
  let { __scopeDialog: r18, trapFocus: n21, onOpenAutoFocus: t18, onCloseAutoFocus: o15, ...c15 } = e20, u20 = l11(f10, r18);
  return a4(), s11(U5, { children: s11(L4, { asChild: true, loop: true, trapped: n21, onMountAutoFocus: t18, onUnmountAutoFocus: o15, children: s11(_2, { role: "dialog", id: u20.contentId, "aria-describedby": u20.descriptionId, "aria-labelledby": u20.titleId, "data-state": P5(u20.open), ...c15, ref: a20, deferPointerDownOutside: true, onDismiss: () => u20.onOpenChange(false) }) }) });
});
var x6 = "DialogTitle";
var ee3 = i12.forwardRef((e20, a20) => {
  let { __scopeDialog: r18, ...n21 } = e20, t18 = l11(x6, r18);
  return s11(v2.h2, { id: t18.titleId, ...n21, ref: a20 });
});
ee3.displayName = x6;
var N8 = "DialogDescription";
var oe3 = i12.forwardRef((e20, a20) => {
  let { __scopeDialog: r18, ...n21 } = e20, t18 = l11(N8, r18);
  return s11(v2.p, { id: t18.descriptionId, ...n21, ref: a20 });
});
oe3.displayName = N8;
var A5 = "DialogClose";
var te4 = i12.forwardRef((e20, a20) => {
  let { __scopeDialog: r18, ...n21 } = e20, t18 = l11(A5, r18);
  return s11(v2.button, { type: "button", ...n21, ref: a20, onClick: f2(e20.onClick, () => t18.onOpenChange(false)) });
});
te4.displayName = A5;
function P5(e20) {
  return e20 ? "open" : "closed";
}

// http-url:https://esm.sh/@radix-ui/react-alert-dialog@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-alert-dialog.mjs
import { jsx as c9 } from "react/jsx-runtime";
var f11 = "AlertDialog";
var [w7, z7] = $2(f11, [ve3]);
var n11 = ve3();
var m11 = (o15) => {
  let { __scopeAlertDialog: r18, ...e20 } = o15, t18 = n11(r18);
  return c9(W7, { ...t18, ...e20, modal: true });
};
m11.displayName = f11;
var I10 = "AlertDialogTrigger";
var d7 = i13.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e20, ...t18 } = o15, l20 = n11(e20);
  return c9(Y6, { ...l20, ...t18, ref: r18 });
});
d7.displayName = I10;
var x7 = "AlertDialogPortal";
var R7 = (o15) => {
  let { __scopeAlertDialog: r18, ...e20 } = o15, t18 = n11(r18);
  return c9(q6, { ...t18, ...e20 });
};
R7.displayName = x7;
var L5 = "AlertDialogOverlay";
var u8 = i13.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e20, ...t18 } = o15, l20 = n11(e20);
  return c9(z6, { ...l20, ...t18, ref: r18 });
});
u8.displayName = L5;
var P6 = "AlertDialogContent";
var [h10, F3] = w7(P6);
var _7 = i13.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e20, children: t18, ...l20 } = o15, g21 = n11(e20), p16 = i13.useRef(null), y21 = s(r18, p16), D18 = i13.useRef(null);
  return c9(h10, { scope: e20, cancelRef: D18, children: c9(Q4, { role: "alertdialog", ...g21, ...l20, ref: y21, onOpenAutoFocus: f2(l20.onOpenAutoFocus, (s16) => {
    s16.preventDefault(), D18.current?.focus({ preventScroll: true });
  }), onPointerDownOutside: (s16) => s16.preventDefault(), onInteractOutside: (s16) => s16.preventDefault(), children: t18 }) });
});
_7.displayName = P6;
var G6 = "AlertDialogTitle";
var N9 = i13.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e20, ...t18 } = o15, l20 = n11(e20);
  return c9(ee3, { ...l20, ...t18, ref: r18 });
});
N9.displayName = G6;
var j7 = "AlertDialogDescription";
var C5 = i13.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e20, ...t18 } = o15, l20 = n11(e20);
  return c9(oe3, { ...l20, ...t18, ref: r18 });
});
C5.displayName = j7;
var H7 = "AlertDialogAction";
var T6 = i13.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e20, ...t18 } = o15, l20 = n11(e20);
  return c9(te4, { ...l20, ...t18, ref: r18 });
});
T6.displayName = H7;
var E11 = "AlertDialogCancel";
var O7 = i13.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e20, ...t18 } = o15, { cancelRef: l20 } = F3(E11, e20), g21 = n11(e20), p16 = s(r18, l20);
  return c9(te4, { ...g21, ...t18, ref: p16 });
});
O7.displayName = E11;

// http-url:https://esm.sh/@radix-ui/react-aspect-ratio@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-aspect-ratio.mjs
import * as o10 from "react";
import { jsx as t7 } from "react/jsx-runtime";
var m12 = "AspectRatio";
var r11 = o10.forwardRef((i23, a20) => {
  let { ratio: e20 = 1 / 1, style: p16, ...s16 } = i23;
  return t7("div", { style: { position: "relative", width: "100%", paddingBottom: `${100 / e20}%` }, "data-radix-aspect-ratio-wrapper": "", children: t7(v2.div, { ...s16, ref: a20, style: { ...p16, position: "absolute", top: 0, right: 0, bottom: 0, left: 0 } }) });
});
r11.displayName = m12;

// http-url:https://esm.sh/@radix-ui/react-avatar@1.2.0/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-avatar.mjs
import * as r12 from "react";
import { jsx as l12 } from "react/jsx-runtime";
var v12 = "Avatar";
var [L6, O8] = $2(v12);
var C6 = [0, () => {
}];
var [w8, A6] = L6(v12);
var _8 = r12.forwardRef((e20, o15) => {
  let { __scopeAvatar: a20, ...n21 } = e20, [i23, t18] = r12.useState("idle"), [c15, s16] = x8();
  return l12(w8, { scope: a20, imageLoadingStatus: i23, setImageLoadingStatus: t18, imageCount: c15, setImageCount: s16, children: l12(v2.span, { ...n21, ref: o15 }) });
});
_8.displayName = v12;
var R8 = "AvatarImage";
var h11 = r12.forwardRef((e20, o15) => {
  let { __scopeAvatar: a20, src: n21, onLoadingStatusChange: i23, ...t18 } = e20, c15 = A6(R8, a20);
  y10(c15.setImageCount);
  let s16 = b10(n21, { referrerPolicy: t18.referrerPolicy, crossOrigin: t18.crossOrigin, loadingStatus: c15.imageLoadingStatus, setLoadingStatus: c15.setImageLoadingStatus }), u20 = u3((m20) => {
    i23?.(m20);
  }), d14 = r12.useRef(s16);
  return e5(() => {
    let m20 = d14.current;
    d14.current = s16, s16 !== m20 && u20(s16);
  }, [s16, u20]), s16 === "loaded" ? l12(v2.img, { ...t18, ref: o15, src: n21 }) : null;
});
h11.displayName = R8;
var S9 = "AvatarFallback";
var T7 = r12.forwardRef((e20, o15) => {
  let { __scopeAvatar: a20, delayMs: n21, ...i23 } = e20, t18 = A6(S9, a20), [c15, s16] = r12.useState(n21 === void 0);
  return r12.useEffect(() => {
    if (n21 !== void 0) {
      let u20 = window.setTimeout(() => s16(true), n21);
      return () => window.clearTimeout(u20);
    }
  }, [n21]), c15 && t18.imageLoadingStatus !== "loaded" ? l12(v2.span, { ...i23, ref: o15 }) : null;
});
T7.displayName = S9;
function b10(e20, { loadingStatus: o15, setLoadingStatus: a20, referrerPolicy: n21, crossOrigin: i23 }) {
  return e5(() => {
    if (!e20) {
      a20("error");
      return;
    }
    let t18 = new window.Image(), c15 = (u20) => {
      let d14 = u20.currentTarget;
      a20(g12(d14));
    }, s16 = () => a20("error");
    return t18.addEventListener("load", c15), t18.addEventListener("error", s16), n21 && (t18.referrerPolicy = n21), t18.crossOrigin = i23 ?? null, t18.src = e20, a20(g12(t18)), () => {
      t18.removeEventListener("load", c15), t18.removeEventListener("error", s16), a20("idle");
    };
  }, [e20, i23, n21, a20]), o15;
}
function g12(e20) {
  return e20.complete ? e20.naturalWidth > 0 ? "loaded" : "error" : "loading";
}
function x8() {
  let e20 = C6;
  {
    e20 = r12.useState(0);
    let [o15] = e20, a20 = r12.useRef(false);
    r12.useEffect(() => {
      o15 > 1 && !a20.current && (a20.current = true, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."));
    }, [o15]);
  }
  return e20;
}
function y10(e20) {
  r12.useEffect(() => (e20((o15) => o15 + 1), () => {
    e20((o15) => o15 - 1);
  }), [e20]);
}

// http-url:https://esm.sh/@radix-ui/react-checkbox@1.3.5/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-checkbox.mjs
import * as o11 from "react";

// http-url:https://esm.sh/@radix-ui/react-use-previous@1.1.2/X-ZXJlYWN0/es2022/react-use-previous.mjs
import * as t8 from "react";
function u9(r18) {
  let e20 = t8.useRef({ value: r18, previous: r18 });
  return t8.useMemo(() => (e20.current.value !== r18 && (e20.current.previous = e20.current.value, e20.current.value = r18), e20.current.previous), [r18]);
}

// http-url:https://esm.sh/@radix-ui/react-use-size@1.1.2/X-ZXJlYWN0/es2022/react-use-size.mjs
import * as h12 from "react";
function u10(r18) {
  let [z17, e20] = h12.useState(void 0);
  return e5(() => {
    if (r18) {
      e20({ width: r18.offsetWidth, height: r18.offsetHeight });
      let f21 = new ResizeObserver((i23) => {
        if (!Array.isArray(i23) || !i23.length) return;
        let b21 = i23[0], o15, t18;
        if ("borderBoxSize" in b21) {
          let s16 = b21.borderBoxSize, d14 = Array.isArray(s16) ? s16[0] : s16;
          o15 = d14.inlineSize, t18 = d14.blockSize;
        } else o15 = r18.offsetWidth, t18 = r18.offsetHeight;
        e20({ width: o15, height: t18 });
      });
      return f21.observe(r18, { box: "border-box" }), () => f21.unobserve(r18);
    } else e20(void 0);
  }, [r18]), z17;
}

// http-url:https://esm.sh/@radix-ui/react-checkbox@1.3.5/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-checkbox.mjs
import { Fragment as G7, jsx as b11, jsxs as K5 } from "react/jsx-runtime";
var _9 = "Checkbox";
var [U6, ae4] = $2(_9);
var [X8, E12] = U6(_9);
function J5(t18) {
  let { __scopeCheckbox: s16, checked: a20, children: u20, defaultChecked: n21, disabled: e20, form: p16, name: f21, onCheckedChange: i23, required: m20, value: C18 = "on", internal_do_not_use_render: d14 } = t18, [l20, R18] = D({ prop: a20, defaultProp: n21 ?? false, onChange: i23, caller: _9 }), [k16, x19] = o11.useState(null), [v18, r18] = o11.useState(null), c15 = o11.useRef(false), g21 = k16 ? !!p16 || !!k16.closest("form") : true, I19 = { checked: l20, disabled: e20, setChecked: R18, control: k16, setControl: x19, name: f21, form: p16, value: C18, hasConsumerStoppedPropagationRef: c15, required: m20, defaultChecked: h13(n21) ? false : n21, isFormControl: g21, bubbleInput: v18, setBubbleInput: r18 };
  return b11(X8, { scope: s16, ...I19, children: W8(d14) ? d14(I19) : u20 });
}
var N10 = "CheckboxTrigger";
var w9 = o11.forwardRef(({ __scopeCheckbox: t18, onKeyDown: s16, onClick: a20, ...u20 }, n21) => {
  let { control: e20, value: p16, disabled: f21, checked: i23, required: m20, setControl: C18, setChecked: d14, hasConsumerStoppedPropagationRef: l20, isFormControl: R18, bubbleInput: k16 } = E12(N10, t18), x19 = s(n21, C18), v18 = o11.useRef(i23);
  return o11.useEffect(() => {
    let r18 = e20?.form;
    if (r18) {
      let c15 = () => d14(v18.current);
      return r18.addEventListener("reset", c15), () => r18.removeEventListener("reset", c15);
    }
  }, [e20, d14]), b11(v2.button, { type: "button", role: "checkbox", "aria-checked": h13(i23) ? "mixed" : i23, "aria-required": m20, "data-state": A7(i23), "data-disabled": f21 ? "" : void 0, disabled: f21, value: p16, ...u20, ref: x19, onKeyDown: f2(s16, (r18) => {
    r18.key === "Enter" && r18.preventDefault();
  }), onClick: f2(a20, (r18) => {
    d14((c15) => h13(c15) ? true : !c15), k16 && R18 && (l20.current = r18.isPropagationStopped(), l20.current || r18.stopPropagation());
  }) });
});
w9.displayName = N10;
var Q5 = o11.forwardRef((t18, s16) => {
  let { __scopeCheckbox: a20, name: u20, checked: n21, defaultChecked: e20, required: p16, disabled: f21, value: i23, onCheckedChange: m20, form: C18, ...d14 } = t18;
  return b11(J5, { __scopeCheckbox: a20, checked: n21, defaultChecked: e20, disabled: f21, required: p16, onCheckedChange: m20, name: u20, form: C18, value: i23, internal_do_not_use_render: ({ isFormControl: l20 }) => K5(G7, { children: [b11(w9, { ...d14, ref: s16, __scopeCheckbox: a20 }), l20 && b11(q7, { __scopeCheckbox: a20 })] }) });
});
Q5.displayName = _9;
var T8 = "CheckboxIndicator";
var V8 = o11.forwardRef((t18, s16) => {
  let { __scopeCheckbox: a20, forceMount: u20, ...n21 } = t18, e20 = E12(T8, a20);
  return b11(y3, { present: u20 || h13(e20.checked) || e20.checked === true, children: b11(v2.span, { "data-state": A7(e20.checked), "data-disabled": e20.disabled ? "" : void 0, ...n21, ref: s16, style: { pointerEvents: "none", ...t18.style } }) });
});
V8.displayName = T8;
var M3 = "CheckboxBubbleInput";
var q7 = o11.forwardRef(({ __scopeCheckbox: t18, ...s16 }, a20) => {
  let { control: u20, hasConsumerStoppedPropagationRef: n21, checked: e20, defaultChecked: p16, required: f21, disabled: i23, name: m20, value: C18, form: d14, bubbleInput: l20, setBubbleInput: R18 } = E12(M3, t18), k16 = s(a20, R18), x19 = u9(e20), v18 = u10(u20);
  o11.useEffect(() => {
    let c15 = l20;
    if (!c15) return;
    let g21 = window.HTMLInputElement.prototype, y21 = Object.getOwnPropertyDescriptor(g21, "checked").set, D18 = !n21.current;
    if (x19 !== e20 && y21) {
      let F11 = new Event("click", { bubbles: D18 });
      c15.indeterminate = h13(e20), y21.call(c15, h13(e20) ? false : e20), c15.dispatchEvent(F11);
    }
  }, [l20, x19, e20, n21]);
  let r18 = o11.useRef(h13(e20) ? false : e20);
  return b11(v2.input, { type: "checkbox", "aria-hidden": true, defaultChecked: p16 ?? r18.current, required: f21, disabled: i23, name: m20, value: C18, form: d14, ...s16, tabIndex: -1, ref: k16, style: { ...s16.style, ...v18, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0, transform: "translateX(-100%)" } });
});
q7.displayName = M3;
function W8(t18) {
  return typeof t18 == "function";
}
function h13(t18) {
  return t18 === "indeterminate";
}
function A7(t18) {
  return h13(t18) ? "indeterminate" : t18 ? "checked" : "unchecked";
}

// http-url:https://esm.sh/@radix-ui/react-context-menu@2.3.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-context-menu.mjs
import * as i16 from "react";

// http-url:https://esm.sh/@radix-ui/react-menu@2.1.18/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-menu.mjs
import * as r13 from "react";

// http-url:https://esm.sh/@radix-ui/react-popper@1.3.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-popper.mjs
import * as t9 from "react";

// http-url:https://esm.sh/@floating-ui/react-dom@^2.0.0?external=react,react-dom&target=es2022
var react_dom_2_0_exports = {};

// http-url:https://esm.sh/@floating-ui/utils@0.2.11/es2022/utils.mjs
var h14 = ["top", "right", "bottom", "left"];
var f12 = ["start", "end"];
var C7 = h14.reduce((t18, n21) => t18.concat(n21, n21 + "-" + f12[0], n21 + "-" + f12[1]), []);
var E13 = (t18) => ({ x: t18, y: t18 });

// http-url:https://esm.sh/@floating-ui/dom@1.7.6/es2022/dom.mjs
var yt2 = E13(0);

// http-url:https://esm.sh/@floating-ui/react-dom@^2.0.0?external=react,react-dom&target=es2022
__reExport(react_dom_2_0_exports, react_dom_star);
import * as react_dom_star from "react-dom";

// http-url:https://esm.sh/@radix-ui/react-arrow@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-arrow.mjs
import * as e17 from "react";
import { jsx as o12 } from "react/jsx-runtime";
var v13 = "Arrow";
var i15 = e17.forwardRef((r18, t18) => {
  let { children: a20, width: s16 = 10, height: m20 = 5, ...n21 } = r18;
  return o12(v2.svg, { ...n21, ref: t18, width: s16, height: m20, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: r18.asChild ? a20 : o12("polygon", { points: "0,0 30,0 15,10" }) });
});
i15.displayName = v13;
var f14 = i15;

// http-url:https://esm.sh/@radix-ui/react-popper@1.3.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-popper.mjs
import { jsx as u12 } from "react/jsx-runtime";
var N12 = "Popper";
var [j9, Fe2] = $2(N12);
var [be3, L9] = j9(N12);
var U7 = (r18) => {
  let { __scopePopper: c15, children: a20 } = r18, [i23, s16] = t9.useState(null), [e20, o15] = t9.useState(void 0);
  return u12(be3, { scope: c15, anchor: i23, onAnchorChange: s16, placementState: e20, setPlacementState: o15, children: a20 });
};
U7.displayName = N12;
var Z6 = "PopperAnchor";
var G8 = t9.forwardRef((r18, c15) => {
  let { __scopePopper: a20, virtualRef: i23, ...s16 } = r18, e20 = L9(Z6, a20), o15 = t9.useRef(null), h23 = e20.onAnchorChange, p16 = t9.useCallback((n21) => {
    o15.current = n21, n21 && h23(n21);
  }, [h23]), l20 = s(c15, p16), d14 = t9.useRef(null);
  t9.useEffect(() => {
    if (!i23) return;
    let n21 = d14.current;
    d14.current = i23.current, n21 !== d14.current && h23(d14.current);
  });
  let f21 = e20.placementState && E14(e20.placementState), g21 = f21?.[0], w18 = f21?.[1];
  return i23 ? null : u12(v2.div, { "data-radix-popper-side": g21, "data-radix-popper-align": w18, ...s16, ref: l20 });
});
G8.displayName = Z6;
var _11 = "PopperContent";
var [Oe3, Ne2] = j9(_11);
var q9 = t9.forwardRef((r18, c15) => {
  let { __scopePopper: a20, side: i23 = "bottom", sideOffset: s16 = 0, align: e20 = "center", alignOffset: o15 = 0, arrowPadding: h23 = 0, avoidCollisions: p16 = true, collisionBoundary: l20 = [], collisionPadding: d14 = 0, sticky: f21 = "partial", hideWhenDetached: g21 = false, updatePositionStrategy: w18 = "optimized", onPlaced: n21, ...m20 } = r18, $19 = L9(_11, a20), [S18, Q17] = t9.useState(null), V19 = s(c15, (x19) => Q17(x19)), [R18, ee16] = t9.useState(null), I19 = u10(R18), te14 = I19?.width ?? 0, H15 = I19?.height ?? 0, re16 = i23 + (e20 !== "center" ? "-" + e20 : ""), oe16 = typeof d14 == "number" ? d14 : { top: 0, right: 0, bottom: 0, left: 0, ...d14 }, W19 = Array.isArray(l20) ? l20 : [l20], z17 = W19.length > 0, A17 = { padding: oe16, boundary: W19.filter(Ee3), altBoundary: z17 }, { refs: ne18, floatingStyles: Y20, placement: C18, isPositioned: v18, middlewareData: P16 } = (0, react_dom_2_0_exports.useFloating)({ strategy: "fixed", placement: re16, whileElementsMounted: (...x19) => (0, react_dom_2_0_exports.autoUpdate)(...x19, { animationFrame: w18 === "always" }), elements: { reference: $19.anchor }, middleware: [(0, react_dom_2_0_exports.offset)({ mainAxis: s16 + H15, alignmentAxis: o15 }), p16 && (0, react_dom_2_0_exports.shift)({ mainAxis: true, crossAxis: false, limiter: f21 === "partial" ? (0, react_dom_2_0_exports.limitShift)() : void 0, ...A17 }), p16 && (0, react_dom_2_0_exports.flip)({ ...A17 }), (0, react_dom_2_0_exports.size)({ ...A17, apply: ({ elements: x19, rects: T21, availableWidth: le11, availableHeight: de12 }) => {
    let { width: fe13, height: me13 } = T21.reference, y21 = x19.floating.style;
    y21.setProperty("--radix-popper-available-width", `${le11}px`), y21.setProperty("--radix-popper-available-height", `${de12}px`), y21.setProperty("--radix-popper-anchor-width", `${fe13}px`), y21.setProperty("--radix-popper-anchor-height", `${me13}px`);
  } }), R18 && (0, react_dom_2_0_exports.arrow)({ element: R18, padding: h23 }), $e2({ arrowWidth: te14, arrowHeight: H15 }), g21 && (0, react_dom_2_0_exports.hide)({ strategy: "referenceHidden", ...A17, boundary: z17 ? A17.boundary : void 0 })] }), b21 = $19.setPlacementState;
  e5(() => (b21(C18), () => {
    b21(void 0);
  }), [C18, b21]);
  let [k16, D18] = E14(C18), M17 = u3(n21);
  e5(() => {
    v18 && M17?.();
  }, [v18, M17]);
  let ae15 = P16.arrow?.x, ie10 = P16.arrow?.y, se12 = P16.arrow?.centerOffset !== 0, [ce12, pe13] = t9.useState();
  return e5(() => {
    S18 && pe13(window.getComputedStyle(S18).zIndex);
  }, [S18]), u12("div", { ref: ne18.setFloating, "data-radix-popper-content-wrapper": "", style: { ...Y20, transform: v18 ? Y20.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: ce12, "--radix-popper-transform-origin": [P16.transformOrigin?.x, P16.transformOrigin?.y].join(" "), ...P16.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" } }, dir: r18.dir, children: u12(Oe3, { scope: a20, placedSide: k16, placedAlign: D18, onArrowChange: ee16, arrowX: ae15, arrowY: ie10, shouldHideArrow: se12, children: u12(v2.div, { "data-side": k16, "data-align": D18, ...m20, ref: V19, style: { ...m20.style, animation: v18 ? void 0 : "none" } }) }) });
});
q9.displayName = _11;
var J6 = "PopperArrow";
var _e3 = { top: "bottom", right: "left", bottom: "top", left: "right" };
var K6 = t9.forwardRef(function(c15, a20) {
  let { __scopePopper: i23, ...s16 } = c15, e20 = Ne2(J6, i23), o15 = _e3[e20.placedSide];
  return u12("span", { ref: e20.onArrowChange, style: { position: "absolute", left: e20.arrowX, top: e20.arrowY, [o15]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[e20.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[e20.placedSide], visibility: e20.shouldHideArrow ? "hidden" : void 0 }, children: u12(f14, { ...s16, ref: a20, style: { ...s16.style, display: "block" } }) });
});
K6.displayName = J6;
function Ee3(r18) {
  return r18 !== null;
}
var $e2 = (r18) => ({ name: "transformOrigin", options: r18, fn(c15) {
  let { placement: a20, rects: i23, middlewareData: s16 } = c15, o15 = s16.arrow?.centerOffset !== 0, h23 = o15 ? 0 : r18.arrowWidth, p16 = o15 ? 0 : r18.arrowHeight, [l20, d14] = E14(a20), f21 = { start: "0%", center: "50%", end: "100%" }[d14], g21 = (s16.arrow?.x ?? 0) + h23 / 2, w18 = (s16.arrow?.y ?? 0) + p16 / 2, n21 = "", m20 = "";
  return l20 === "bottom" ? (n21 = o15 ? f21 : `${g21}px`, m20 = `${-p16}px`) : l20 === "top" ? (n21 = o15 ? f21 : `${g21}px`, m20 = `${i23.floating.height + p16}px`) : l20 === "right" ? (n21 = `${-p16}px`, m20 = o15 ? f21 : `${w18}px`) : l20 === "left" && (n21 = `${i23.floating.width + p16}px`, m20 = o15 ? f21 : `${w18}px`), { data: { x: n21, y: m20 } };
} });
function E14(r18) {
  let [c15, a20 = "center"] = r18.split("-");
  return [c15, a20];
}
var Be2 = U7;
var je3 = G8;
var Le2 = q9;
var Ue2 = K6;

// http-url:https://esm.sh/@radix-ui/react-roving-focus@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-roving-focus.mjs
import * as t10 from "react";
import { jsx as d9 } from "react/jsx-runtime";
var y13 = "rovingFocusGroup.onEntryFocus";
var X9 = { bubbles: false, cancelable: true };
var R11 = "RovingFocusGroup";
var [D9, N13, Z7] = re(R11);
var [$9, be4] = $2(R11, [Z7]);
var [ee4, te5] = $9(R11);
var O9 = t10.forwardRef((e20, n21) => d9(D9.Provider, { scope: e20.__scopeRovingFocusGroup, children: d9(D9.Slot, { scope: e20.__scopeRovingFocusGroup, children: d9(oe4, { ...e20, ref: n21 }) }) }));
O9.displayName = R11;
var oe4 = t10.forwardRef((e20, n21) => {
  let { __scopeRovingFocusGroup: s16, orientation: o15, loop: T21 = false, dir: w18, currentTabStopId: v18, defaultCurrentTabStopId: C18, onCurrentTabStopIdChange: S18, onEntryFocus: m20, preventScrollOnEntryFocus: a20 = false, ...I19 } = e20, b21 = t10.useRef(null), F11 = s(n21, b21), g21 = v5(w18), [E25, r18] = D({ prop: v18, defaultProp: C18 ?? null, onChange: S18, caller: R11 }), [i23, h23] = t10.useState(false), u20 = u3(m20), l20 = N13(s16), A17 = t10.useRef(false), [L24, P16] = t10.useState(0);
  return t10.useEffect(() => {
    let c15 = b21.current;
    if (c15) return c15.addEventListener(y13, u20), () => c15.removeEventListener(y13, u20);
  }, [u20]), d9(ee4, { scope: s16, orientation: o15, dir: g21, loop: T21, currentTabStopId: E25, onItemFocus: t10.useCallback((c15) => r18(c15), [r18]), onItemShiftTab: t10.useCallback(() => h23(true), []), onFocusableItemAdd: t10.useCallback(() => P16((c15) => c15 + 1), []), onFocusableItemRemove: t10.useCallback(() => P16((c15) => c15 - 1), []), children: d9(v2.div, { tabIndex: i23 || L24 === 0 ? -1 : 0, "data-orientation": o15, ...I19, ref: F11, style: { outline: "none", ...e20.style }, onMouseDown: f2(e20.onMouseDown, () => {
    A17.current = true;
  }), onFocus: f2(e20.onFocus, (c15) => {
    let U15 = !A17.current;
    if (c15.target === c15.currentTarget && U15 && !i23) {
      let x19 = new CustomEvent(y13, X9);
      if (c15.currentTarget.dispatchEvent(x19), !x19.defaultPrevented) {
        let _22 = l20().filter((f21) => f21.focusable), B18 = _22.find((f21) => f21.active), Y20 = _22.find((f21) => f21.id === E25), H15 = [B18, Y20, ..._22].filter(Boolean).map((f21) => f21.ref.current);
        k8(H15, a20);
      }
    }
    A17.current = false;
  }), onBlur: f2(e20.onBlur, () => h23(false)) }) });
});
var K7 = "RovingFocusGroupItem";
var M4 = t10.forwardRef((e20, n21) => {
  let { __scopeRovingFocusGroup: s16, focusable: o15 = true, active: T21 = false, tabStopId: w18, children: v18, ...C18 } = e20, S18 = n5(), m20 = w18 || S18, a20 = te5(K7, s16), I19 = a20.currentTabStopId === m20, b21 = N13(s16), { onFocusableItemAdd: F11, onFocusableItemRemove: g21, currentTabStopId: E25 } = a20;
  return t10.useEffect(() => {
    if (o15) return F11(), () => g21();
  }, [o15, F11, g21]), d9(D9.ItemSlot, { scope: s16, id: m20, focusable: o15, active: T21, children: d9(v2.span, { tabIndex: I19 ? 0 : -1, "data-orientation": a20.orientation, ...C18, ref: n21, onMouseDown: f2(e20.onMouseDown, (r18) => {
    o15 ? a20.onItemFocus(m20) : r18.preventDefault();
  }), onFocus: f2(e20.onFocus, () => a20.onItemFocus(m20)), onKeyDown: f2(e20.onKeyDown, (r18) => {
    if (r18.key === "Tab" && r18.shiftKey) {
      a20.onItemShiftTab();
      return;
    }
    if (r18.target !== r18.currentTarget) return;
    let i23 = ce4(r18, a20.orientation, a20.dir);
    if (i23 !== void 0) {
      if (r18.metaKey || r18.ctrlKey || r18.altKey || r18.shiftKey) return;
      r18.preventDefault();
      let u20 = b21().filter((l20) => l20.focusable).map((l20) => l20.ref.current);
      if (i23 === "last") u20.reverse();
      else if (i23 === "prev" || i23 === "next") {
        i23 === "prev" && u20.reverse();
        let l20 = u20.indexOf(r18.currentTarget);
        u20 = a20.loop ? se5(u20, l20 + 1) : u20.slice(l20 + 1);
      }
      setTimeout(() => k8(u20));
    }
  }), children: typeof v18 == "function" ? v18({ isCurrentTabStop: I19, hasTabStop: E25 != null }) : v18 }) });
});
M4.displayName = K7;
var re6 = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function ne5(e20, n21) {
  return n21 !== "rtl" ? e20 : e20 === "ArrowLeft" ? "ArrowRight" : e20 === "ArrowRight" ? "ArrowLeft" : e20;
}
function ce4(e20, n21, s16) {
  let o15 = ne5(e20.key, s16);
  if (!(n21 === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o15)) && !(n21 === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o15))) return re6[o15];
}
function k8(e20, n21 = false) {
  let s16 = document.activeElement;
  for (let o15 of e20) if (o15 === s16 || (o15.focus({ preventScroll: n21 }), document.activeElement !== s16)) return;
}
function se5(e20, n21) {
  return e20.map((s16, o15) => e20[(n21 + o15) % e20.length]);
}
var Fe3 = O9;
var ge5 = M4;

// http-url:https://esm.sh/@radix-ui/react-menu@2.1.18/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-menu.mjs
import { jsx as s13 } from "react/jsx-runtime";
var Q6 = ["Enter", " "];
var st2 = ["ArrowDown", "PageUp", "Home"];
var he5 = ["ArrowUp", "PageDown", "End"];
var ut2 = [...st2, ...he5];
var it2 = { ltr: [...Q6, "ArrowRight"], rtl: [...Q6, "ArrowLeft"] };
var lt2 = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] };
var L10 = "Menu";
var [k9, dt2, ft2] = re(L10);
var [E15, $t] = $2(L10, [ft2, Fe2, be4]);
var G9 = Fe2();
var Me3 = be4();
var [Ce3, P8] = E15(L10);
var [pt2, K8] = E15(L10);
var ge6 = (e20) => {
  let { __scopeMenu: n21, open: t18 = false, children: c15, dir: u20, onOpenChange: a20, modal: l20 = true } = e20, m20 = G9(n21), [p16, d14] = r13.useState(null), R18 = r13.useRef(false), o15 = u3(a20), f21 = v5(u20);
  return r13.useEffect(() => {
    let M17 = () => {
      R18.current = true, document.addEventListener("pointerdown", v18, { capture: true, once: true }), document.addEventListener("pointermove", v18, { capture: true, once: true });
    }, v18 = () => R18.current = false;
    return document.addEventListener("keydown", M17, { capture: true }), () => {
      document.removeEventListener("keydown", M17, { capture: true }), document.removeEventListener("pointerdown", v18, { capture: true }), document.removeEventListener("pointermove", v18, { capture: true });
    };
  }, []), r13.useEffect(() => {
    if (!t18) return;
    let M17 = () => o15(false);
    return window.addEventListener("blur", M17), () => window.removeEventListener("blur", M17);
  }, [t18, o15]), s13(Be2, { ...m20, children: s13(Ce3, { scope: n21, open: t18, onOpenChange: o15, content: p16, onContentChange: d14, children: s13(pt2, { scope: n21, onClose: r13.useCallback(() => o15(false), [o15]), isUsingKeyboardRef: R18, dir: f21, modal: l20, children: c15 }) }) });
};
ge6.displayName = L10;
var mt2 = "MenuAnchor";
var ee5 = r13.forwardRef((e20, n21) => {
  let { __scopeMenu: t18, ...c15 } = e20, u20 = G9(t18);
  return s13(je3, { ...u20, ...c15, ref: n21 });
});
ee5.displayName = mt2;
var te6 = "MenuPortal";
var [Rt, _e4] = E15(te6, { forceMount: void 0 });
var Pe4 = (e20) => {
  let { __scopeMenu: n21, forceMount: t18, children: c15, container: u20 } = e20, a20 = P8(te6, n21);
  return s13(Rt, { scope: n21, forceMount: t18, children: s13(y3, { present: t18 || a20.open, children: s13(e10, { asChild: true, container: u20, children: c15 }) }) });
};
Pe4.displayName = te6;
var g15 = "MenuContent";
var [vt2, ne6] = E15(g15);
var Se2 = r13.forwardRef((e20, n21) => {
  let t18 = _e4(g15, e20.__scopeMenu), { forceMount: c15 = t18.forceMount, ...u20 } = e20, a20 = P8(g15, e20.__scopeMenu), l20 = K8(g15, e20.__scopeMenu);
  return s13(k9.Provider, { scope: e20.__scopeMenu, children: s13(y3, { present: c15 || a20.open, children: s13(k9.Slot, { scope: e20.__scopeMenu, children: l20.modal ? s13(ht2, { ...u20, ref: n21 }) : s13(Mt2, { ...u20, ref: n21 }) }) }) });
});
var ht2 = r13.forwardRef((e20, n21) => {
  let t18 = P8(g15, e20.__scopeMenu), c15 = r13.useRef(null), u20 = s(n21, c15);
  return r13.useEffect(() => {
    let a20 = c15.current;
    if (a20) return S8(a20);
  }, []), s13(oe5, { ...e20, ref: u20, trapFocus: t18.open, disableOutsidePointerEvents: t18.open, disableOutsideScroll: true, onFocusOutside: f2(e20.onFocusOutside, (a20) => a20.preventDefault(), { checkForDefaultPrevented: false }), onDismiss: () => t18.onOpenChange(false) });
});
var Mt2 = r13.forwardRef((e20, n21) => {
  let t18 = P8(g15, e20.__scopeMenu);
  return s13(oe5, { ...e20, ref: n21, trapFocus: false, disableOutsidePointerEvents: false, disableOutsideScroll: false, onDismiss: () => t18.onOpenChange(false) });
});
var Ct2 = b2("MenuContent.ScrollLock");
var oe5 = r13.forwardRef((e20, n21) => {
  let { __scopeMenu: t18, loop: c15 = false, trapFocus: u20, onOpenAutoFocus: a20, onCloseAutoFocus: l20, disableOutsidePointerEvents: m20, onEntryFocus: p16, onEscapeKeyDown: d14, onPointerDownOutside: R18, onFocusOutside: o15, onInteractOutside: f21, onDismiss: M17, disableOutsideScroll: v18, ...w18 } = e20, b21 = P8(g15, t18), I19 = K8(g15, t18), Be8 = G9(t18), Ve7 = Me3(t18), ue12 = dt2(t18), [Ye5, ie10] = r13.useState(null), U15 = r13.useRef(null), Xe4 = s(n21, U15, b21.onContentChange), B18 = r13.useRef(0), V19 = r13.useRef(""), je7 = r13.useRef(0), z17 = r13.useRef(null), le11 = r13.useRef("right"), Z17 = r13.useRef(0), He6 = v18 ? l10 : r13.Fragment, We7 = v18 ? { as: Ct2, allowPinchZoom: true } : void 0, ze5 = (i23) => {
    let x19 = V19.current + i23, S18 = ue12().filter((C18) => !C18.disabled), T21 = document.activeElement, q22 = S18.find((C18) => C18.ref.current === T21)?.textValue, J18 = S18.map((C18) => C18.textValue), de12 = At(J18, x19, q22), A17 = S18.find((C18) => C18.textValue === de12)?.ref.current;
    (function C18(fe13) {
      V19.current = fe13, window.clearTimeout(B18.current), fe13 !== "" && (B18.current = window.setTimeout(() => C18(""), 1e3));
    })(x19), A17 && setTimeout(() => A17.focus());
  };
  r13.useEffect(() => () => window.clearTimeout(B18.current), []), a4();
  let y21 = r13.useCallback((i23) => le11.current === z17.current?.side && kt2(i23, z17.current?.area), []);
  return s13(vt2, { scope: t18, searchRef: V19, onItemEnter: r13.useCallback((i23) => {
    y21(i23) && i23.preventDefault();
  }, [y21]), onItemLeave: r13.useCallback((i23) => {
    y21(i23) || (U15.current?.focus(), ie10(null));
  }, [y21]), onTriggerLeave: r13.useCallback((i23) => {
    y21(i23) && i23.preventDefault();
  }, [y21]), pointerGraceTimerRef: je7, onPointerGraceIntentChange: r13.useCallback((i23) => {
    z17.current = i23;
  }, []), children: s13(He6, { ...We7, children: s13(L4, { asChild: true, trapped: u20, onMountAutoFocus: f2(a20, (i23) => {
    i23.preventDefault(), U15.current?.focus({ preventScroll: true });
  }), onUnmountAutoFocus: l20, children: s13(_2, { asChild: true, disableOutsidePointerEvents: m20, onEscapeKeyDown: d14, onPointerDownOutside: R18, onFocusOutside: o15, onInteractOutside: f21, onDismiss: M17, children: s13(Fe3, { asChild: true, ...Ve7, dir: I19.dir, orientation: "vertical", loop: c15, currentTabStopId: Ye5, onCurrentTabStopIdChange: ie10, onEntryFocus: f2(p16, (i23) => {
    I19.isUsingKeyboardRef.current || i23.preventDefault();
  }), preventScrollOnEntryFocus: true, children: s13(Le2, { role: "menu", "aria-orientation": "vertical", "data-state": Ue3(b21.open), "data-radix-menu-content": "", dir: I19.dir, ...Be8, ...w18, ref: Xe4, style: { outline: "none", ...w18.style }, onKeyDown: f2(w18.onKeyDown, (i23) => {
    let S18 = i23.target.closest("[data-radix-menu-content]") === i23.currentTarget, T21 = i23.ctrlKey || i23.altKey || i23.metaKey, q22 = i23.key.length === 1;
    S18 && (i23.key === "Tab" && i23.preventDefault(), !T21 && q22 && ze5(i23.key));
    let J18 = U15.current;
    if (i23.target !== J18 || !ut2.includes(i23.key)) return;
    i23.preventDefault();
    let A17 = ue12().filter((C18) => !C18.disabled).map((C18) => C18.ref.current);
    he5.includes(i23.key) && A17.reverse(), bt2(A17);
  }), onBlur: f2(e20.onBlur, (i23) => {
    i23.currentTarget.contains(i23.target) || (window.clearTimeout(B18.current), V19.current = "");
  }), onPointerMove: f2(e20.onPointerMove, D10((i23) => {
    let x19 = i23.target, S18 = Z17.current !== i23.clientX;
    if (i23.currentTarget.contains(x19) && S18) {
      let T21 = i23.clientX > Z17.current ? "right" : "left";
      le11.current = T21, Z17.current = i23.clientX;
    }
  })) }) }) }) }) }) });
});
Se2.displayName = g15;
var gt2 = "MenuGroup";
var re7 = r13.forwardRef((e20, n21) => {
  let { __scopeMenu: t18, ...c15 } = e20;
  return s13(v2.div, { role: "group", ...c15, ref: n21 });
});
re7.displayName = gt2;
var _t2 = "MenuLabel";
var Ee4 = r13.forwardRef((e20, n21) => {
  let { __scopeMenu: t18, ...c15 } = e20;
  return s13(v2.div, { ...c15, ref: n21 });
});
Ee4.displayName = _t2;
var Y7 = "MenuItem";
var me3 = "menu.itemSelect";
var W10 = r13.forwardRef((e20, n21) => {
  let { disabled: t18 = false, onSelect: c15, ...u20 } = e20, a20 = r13.useRef(null), l20 = K8(Y7, e20.__scopeMenu), m20 = ne6(Y7, e20.__scopeMenu), p16 = s(n21, a20), d14 = r13.useRef(false), R18 = () => {
    let o15 = a20.current;
    if (!t18 && o15) {
      let f21 = new CustomEvent(me3, { bubbles: true, cancelable: true });
      o15.addEventListener(me3, (M17) => c15?.(M17), { once: true }), R(o15, f21), f21.defaultPrevented ? d14.current = false : l20.onClose();
    }
  };
  return s13(we4, { ...u20, ref: p16, disabled: t18, onClick: f2(e20.onClick, R18), onPointerDown: (o15) => {
    e20.onPointerDown?.(o15), d14.current = true;
  }, onPointerUp: f2(e20.onPointerUp, (o15) => {
    d14.current || o15.currentTarget?.click();
  }), onKeyDown: f2(e20.onKeyDown, (o15) => {
    let f21 = m20.searchRef.current !== "";
    t18 || f21 && o15.key === " " || Q6.includes(o15.key) && (o15.currentTarget.click(), o15.preventDefault());
  }) });
});
W10.displayName = Y7;
var we4 = r13.forwardRef((e20, n21) => {
  let { __scopeMenu: t18, disabled: c15 = false, textValue: u20, ...a20 } = e20, l20 = ne6(Y7, t18), m20 = Me3(t18), p16 = r13.useRef(null), d14 = s(n21, p16), [R18, o15] = r13.useState(false), [f21, M17] = r13.useState("");
  return r13.useEffect(() => {
    let v18 = p16.current;
    v18 && M17((v18.textContent ?? "").trim());
  }, [a20.children]), s13(k9.ItemSlot, { scope: t18, disabled: c15, textValue: u20 ?? f21, children: s13(ge5, { asChild: true, ...m20, focusable: !c15, children: s13(v2.div, { role: "menuitem", "data-highlighted": R18 ? "" : void 0, "aria-disabled": c15 || void 0, "data-disabled": c15 ? "" : void 0, ...a20, ref: d14, onPointerMove: f2(e20.onPointerMove, D10((v18) => {
    c15 ? l20.onItemLeave(v18) : (l20.onItemEnter(v18), v18.defaultPrevented || v18.currentTarget.focus({ preventScroll: true }));
  })), onPointerLeave: f2(e20.onPointerLeave, D10((v18) => l20.onItemLeave(v18))), onFocus: f2(e20.onFocus, () => o15(true)), onBlur: f2(e20.onBlur, () => o15(false)) }) }) });
});
var Pt2 = "MenuCheckboxItem";
var Ie3 = r13.forwardRef((e20, n21) => {
  let { checked: t18 = false, onCheckedChange: c15, ...u20 } = e20;
  return s13(Ae4, { scope: e20.__scopeMenu, checked: t18, children: s13(W10, { role: "menuitemcheckbox", "aria-checked": X10(t18) ? "mixed" : t18, ...u20, ref: n21, "data-state": se6(t18), onSelect: f2(u20.onSelect, () => c15?.(X10(t18) ? true : !t18), { checkForDefaultPrevented: false }) }) });
});
Ie3.displayName = Pt2;
var ye5 = "MenuRadioGroup";
var [St, Et2] = E15(ye5, { value: void 0, onValueChange: () => {
} });
var xe4 = r13.forwardRef((e20, n21) => {
  let { value: t18, onValueChange: c15, ...u20 } = e20, a20 = u3(c15);
  return s13(St, { scope: e20.__scopeMenu, value: t18, onValueChange: a20, children: s13(re7, { ...u20, ref: n21 }) });
});
xe4.displayName = ye5;
var be5 = "MenuRadioItem";
var Te2 = r13.forwardRef((e20, n21) => {
  let { value: t18, ...c15 } = e20, u20 = Et2(be5, e20.__scopeMenu), a20 = t18 === u20.value;
  return s13(Ae4, { scope: e20.__scopeMenu, checked: a20, children: s13(W10, { role: "menuitemradio", "aria-checked": a20, ...c15, ref: n21, "data-state": se6(a20), onSelect: f2(c15.onSelect, () => u20.onValueChange?.(t18), { checkForDefaultPrevented: false }) }) });
});
Te2.displayName = be5;
var ce5 = "MenuItemIndicator";
var [Ae4, wt2] = E15(ce5, { checked: false });
var Oe4 = r13.forwardRef((e20, n21) => {
  let { __scopeMenu: t18, forceMount: c15, ...u20 } = e20, a20 = wt2(ce5, t18);
  return s13(y3, { present: c15 || X10(a20.checked) || a20.checked === true, children: s13(v2.span, { ...u20, ref: n21, "data-state": se6(a20.checked) }) });
});
Oe4.displayName = ce5;
var It = "MenuSeparator";
var ke2 = r13.forwardRef((e20, n21) => {
  let { __scopeMenu: t18, ...c15 } = e20;
  return s13(v2.div, { role: "separator", "aria-orientation": "horizontal", ...c15, ref: n21 });
});
ke2.displayName = It;
var yt3 = "MenuArrow";
var De2 = r13.forwardRef((e20, n21) => {
  let { __scopeMenu: t18, ...c15 } = e20, u20 = G9(t18);
  return s13(Ue2, { ...u20, ...c15, ref: n21 });
});
De2.displayName = yt3;
var ae5 = "MenuSub";
var [xt2, Ne3] = E15(ae5);
var Fe4 = (e20) => {
  let { __scopeMenu: n21, children: t18, open: c15 = false, onOpenChange: u20 } = e20, a20 = P8(ae5, n21), l20 = G9(n21), [m20, p16] = r13.useState(null), [d14, R18] = r13.useState(null), o15 = u3(u20);
  return r13.useEffect(() => (a20.open === false && o15(false), () => o15(false)), [a20.open, o15]), s13(Be2, { ...l20, children: s13(Ce3, { scope: n21, open: c15, onOpenChange: o15, content: d14, onContentChange: R18, children: s13(xt2, { scope: n21, contentId: n5(), triggerId: n5(), trigger: m20, onTriggerChange: p16, children: t18 }) }) });
};
Fe4.displayName = ae5;
var O10 = "MenuSubTrigger";
var Le3 = r13.forwardRef((e20, n21) => {
  let t18 = P8(O10, e20.__scopeMenu), c15 = K8(O10, e20.__scopeMenu), u20 = Ne3(O10, e20.__scopeMenu), a20 = ne6(O10, e20.__scopeMenu), l20 = r13.useRef(null), { pointerGraceTimerRef: m20, onPointerGraceIntentChange: p16 } = a20, d14 = { __scopeMenu: e20.__scopeMenu }, R18 = r13.useCallback(() => {
    l20.current && window.clearTimeout(l20.current), l20.current = null;
  }, []);
  return r13.useEffect(() => R18, [R18]), r13.useEffect(() => {
    let o15 = m20.current;
    return () => {
      window.clearTimeout(o15), p16(null);
    };
  }, [m20, p16]), s13(ee5, { asChild: true, ...d14, children: s13(we4, { id: u20.triggerId, "aria-haspopup": "menu", "aria-expanded": t18.open, "aria-controls": t18.open ? u20.contentId : void 0, "data-state": Ue3(t18.open), ...e20, ref: i2(n21, u20.onTriggerChange), onClick: (o15) => {
    e20.onClick?.(o15), !(e20.disabled || o15.defaultPrevented) && (o15.currentTarget.focus(), t18.open || t18.onOpenChange(true));
  }, onPointerMove: f2(e20.onPointerMove, D10((o15) => {
    a20.onItemEnter(o15), !o15.defaultPrevented && !e20.disabled && !t18.open && !l20.current && (a20.onPointerGraceIntentChange(null), l20.current = window.setTimeout(() => {
      t18.onOpenChange(true), R18();
    }, 100));
  })), onPointerLeave: f2(e20.onPointerLeave, D10((o15) => {
    R18();
    let f21 = t18.content?.getBoundingClientRect();
    if (f21) {
      let M17 = t18.content?.dataset.side, v18 = M17 === "right", w18 = v18 ? -5 : 5, b21 = f21[v18 ? "left" : "right"], I19 = f21[v18 ? "right" : "left"];
      a20.onPointerGraceIntentChange({ area: [{ x: o15.clientX + w18, y: o15.clientY }, { x: b21, y: f21.top }, { x: I19, y: f21.top }, { x: I19, y: f21.bottom }, { x: b21, y: f21.bottom }], side: M17 }), window.clearTimeout(m20.current), m20.current = window.setTimeout(() => a20.onPointerGraceIntentChange(null), 300);
    } else {
      if (a20.onTriggerLeave(o15), o15.defaultPrevented) return;
      a20.onPointerGraceIntentChange(null);
    }
  })), onKeyDown: f2(e20.onKeyDown, (o15) => {
    let f21 = a20.searchRef.current !== "";
    e20.disabled || f21 && o15.key === " " || it2[c15.dir].includes(o15.key) && (t18.onOpenChange(true), t18.content?.focus(), o15.preventDefault());
  }) }) });
});
Le3.displayName = O10;
var Ge2 = "MenuSubContent";
var Ke2 = r13.forwardRef((e20, n21) => {
  let t18 = _e4(g15, e20.__scopeMenu), { forceMount: c15 = t18.forceMount, align: u20 = "start", ...a20 } = e20, l20 = P8(g15, e20.__scopeMenu), m20 = K8(g15, e20.__scopeMenu), p16 = Ne3(Ge2, e20.__scopeMenu), d14 = r13.useRef(null), R18 = s(n21, d14);
  return s13(k9.Provider, { scope: e20.__scopeMenu, children: s13(y3, { present: c15 || l20.open, children: s13(k9.Slot, { scope: e20.__scopeMenu, children: s13(oe5, { id: p16.contentId, "aria-labelledby": p16.triggerId, ...a20, ref: R18, align: u20, side: m20.dir === "rtl" ? "left" : "right", disableOutsidePointerEvents: false, disableOutsideScroll: false, trapFocus: false, onOpenAutoFocus: (o15) => {
    m20.isUsingKeyboardRef.current && d14.current?.focus(), o15.preventDefault();
  }, onCloseAutoFocus: (o15) => o15.preventDefault(), onFocusOutside: f2(e20.onFocusOutside, (o15) => {
    o15.target !== p16.trigger && l20.onOpenChange(false);
  }), onEscapeKeyDown: f2(e20.onEscapeKeyDown, (o15) => {
    m20.onClose(), o15.preventDefault();
  }), onKeyDown: f2(e20.onKeyDown, (o15) => {
    let f21 = o15.currentTarget.contains(o15.target), M17 = lt2[m20.dir].includes(o15.key);
    f21 && M17 && (l20.onOpenChange(false), p16.trigger?.focus(), o15.preventDefault());
  }) }) }) }) });
});
Ke2.displayName = Ge2;
function Ue3(e20) {
  return e20 ? "open" : "closed";
}
function X10(e20) {
  return e20 === "indeterminate";
}
function se6(e20) {
  return X10(e20) ? "indeterminate" : e20 ? "checked" : "unchecked";
}
function bt2(e20) {
  let n21 = document.activeElement;
  for (let t18 of e20) if (t18 === n21 || (t18.focus(), document.activeElement !== n21)) return;
}
function Tt(e20, n21) {
  return e20.map((t18, c15) => e20[(n21 + c15) % e20.length]);
}
function At(e20, n21, t18) {
  let u20 = n21.length > 1 && Array.from(n21).every((d14) => d14 === n21[0]) ? n21[0] : n21, a20 = t18 ? e20.indexOf(t18) : -1, l20 = Tt(e20, Math.max(a20, 0));
  u20.length === 1 && (l20 = l20.filter((d14) => d14 !== t18));
  let p16 = l20.find((d14) => d14.toLowerCase().startsWith(u20.toLowerCase()));
  return p16 !== t18 ? p16 : void 0;
}
function Ot(e20, n21) {
  let { x: t18, y: c15 } = e20, u20 = false;
  for (let a20 = 0, l20 = n21.length - 1; a20 < n21.length; l20 = a20++) {
    let m20 = n21[a20], p16 = n21[l20], d14 = m20.x, R18 = m20.y, o15 = p16.x, f21 = p16.y;
    R18 > c15 != f21 > c15 && t18 < (o15 - d14) * (c15 - R18) / (f21 - R18) + d14 && (u20 = !u20);
  }
  return u20;
}
function kt2(e20, n21) {
  if (!n21) return false;
  let t18 = { x: e20.clientX, y: e20.clientY };
  return Ot(t18, n21);
}
function D10(e20) {
  return (n21) => n21.pointerType === "mouse" ? e20(n21) : void 0;
}
var en = ge6;
var tn = ee5;
var nn = Pe4;
var on = Se2;
var rn = re7;
var cn = Ee4;
var an = W10;
var sn = Ie3;
var un = xe4;
var ln = Te2;
var dn = Oe4;
var fn = ke2;
var pn = De2;
var mn = Fe4;
var Rn = Le3;
var vn = Ke2;

// http-url:https://esm.sh/@radix-ui/react-context-menu@2.3.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-context-menu.mjs
import { Fragment as H8, jsx as u13, jsxs as K9 } from "react/jsx-runtime";
var R12 = "ContextMenu";
var [Y8, me4] = $2(R12, [$t]);
var c10 = $t();
var [q10, g16] = Y8(R12);
var _12 = (e20) => {
  let { __scopeContextMenu: n21, children: o15, onOpenChange: t18, open: a20, dir: p16, modal: m20 = true } = e20, s16 = i16.useRef(false);
  {
    let M17 = i16.useRef(false);
    i16.useEffect(() => {
      a20 === true && !s16.current && !M17.current && (M17.current = true, console.warn("ContextMenu: The `open` prop has been set to `true` before the user has interacted with the trigger, so its position is indeterminate. This is likely unintended and will result in the menu being anchored to the top-left corner of the viewport."));
    }, [a20]);
  }
  let [x19, C18] = D({ prop: a20, defaultProp: false, onChange: t18, caller: R12 }), d14 = c10(n21);
  return u13(q10, { scope: n21, open: x19, onOpenChange: C18, modal: m20, hasInteractedRef: s16, children: u13(en, { ...d14, dir: p16, open: x19, onOpenChange: C18, modal: m20, children: o15 }) });
};
_12.displayName = R12;
var S10 = "ContextMenuTrigger";
var b13 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, disabled: t18 = false, ...a20 } = e20, p16 = g16(S10, o15), m20 = c10(o15), s16 = i16.useRef({ x: 0, y: 0 }), x19 = i16.useRef({ getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...s16.current }) }), C18 = i16.useRef(0), d14 = i16.useCallback(() => window.clearTimeout(C18.current), []), M17 = (l20) => {
    p16.hasInteractedRef.current = true, s16.current = { x: l20.clientX, y: l20.clientY }, p16.onOpenChange(true);
  };
  return i16.useEffect(() => d14, [d14]), i16.useEffect(() => {
    t18 && d14();
  }, [t18, d14]), K9(H8, { children: [u13(tn, { ...m20, virtualRef: x19 }), u13(v2.span, { "data-state": p16.open ? "open" : "closed", "data-disabled": t18 ? "" : void 0, ...a20, ref: n21, style: { WebkitTouchCallout: "none", ...e20.style }, onContextMenu: t18 ? e20.onContextMenu : f2(e20.onContextMenu, (l20) => {
    d14(), M17(l20), l20.preventDefault();
  }), onPointerDown: t18 ? e20.onPointerDown : f2(e20.onPointerDown, v14((l20) => {
    d14(), p16.open && p16.onOpenChange(false), C18.current = window.setTimeout(() => M17(l20), 700);
  })), onPointerMove: t18 ? e20.onPointerMove : f2(e20.onPointerMove, v14(d14)), onPointerCancel: t18 ? e20.onPointerCancel : f2(e20.onPointerCancel, v14(d14)), onPointerUp: t18 ? e20.onPointerUp : f2(e20.onPointerUp, v14(d14)) })] });
});
b13.displayName = S10;
var z9 = "ContextMenuPortal";
var I11 = (e20) => {
  let { __scopeContextMenu: n21, ...o15 } = e20, t18 = c10(n21);
  return u13(nn, { ...t18, ...o15 });
};
I11.displayName = z9;
var w11 = "ContextMenuContent";
var N14 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e20, a20 = g16(w11, o15), p16 = c10(o15), m20 = i16.useRef(false);
  return u13(on, { ...p16, ...t18, ref: n21, side: "right", sideOffset: 2, align: "start", onCloseAutoFocus: (s16) => {
    e20.onCloseAutoFocus?.(s16), !s16.defaultPrevented && m20.current && s16.preventDefault(), m20.current = false;
  }, onInteractOutside: (s16) => {
    e20.onInteractOutside?.(s16), !s16.defaultPrevented && !a20.modal && (m20.current = true);
  }, style: { ...e20.style, "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
N14.displayName = w11;
var J7 = "ContextMenuGroup";
var A9 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e20, a20 = c10(o15);
  return u13(rn, { ...a20, ...t18, ref: n21 });
});
A9.displayName = J7;
var Q7 = "ContextMenuLabel";
var E16 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e20, a20 = c10(o15);
  return u13(cn, { ...a20, ...t18, ref: n21 });
});
E16.displayName = Q7;
var V9 = "ContextMenuItem";
var T11 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e20, a20 = c10(o15);
  return u13(an, { ...a20, ...t18, ref: n21 });
});
T11.displayName = V9;
var Z8 = "ContextMenuCheckboxItem";
var O11 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e20, a20 = c10(o15);
  return u13(sn, { ...a20, ...t18, ref: n21 });
});
O11.displayName = Z8;
var $10 = "ContextMenuRadioGroup";
var y14 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e20, a20 = c10(o15);
  return u13(un, { ...a20, ...t18, ref: n21 });
});
y14.displayName = $10;
var ee6 = "ContextMenuRadioItem";
var G10 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e20, a20 = c10(o15);
  return u13(ln, { ...a20, ...t18, ref: n21 });
});
G10.displayName = ee6;
var te7 = "ContextMenuItemIndicator";
var k10 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e20, a20 = c10(o15);
  return u13(dn, { ...a20, ...t18, ref: n21 });
});
k10.displayName = te7;
var ne7 = "ContextMenuSeparator";
var D11 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e20, a20 = c10(o15);
  return u13(fn, { ...a20, ...t18, ref: n21 });
});
D11.displayName = ne7;
var oe6 = "ContextMenuArrow";
var L11 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e20, a20 = c10(o15);
  return u13(pn, { ...a20, ...t18, ref: n21 });
});
L11.displayName = oe6;
var U8 = "ContextMenuSub";
var B8 = (e20) => {
  let { __scopeContextMenu: n21, children: o15, onOpenChange: t18, open: a20, defaultOpen: p16 } = e20, m20 = c10(n21), [s16, x19] = D({ prop: a20, defaultProp: p16 ?? false, onChange: t18, caller: U8 });
  return u13(mn, { ...m20, open: s16, onOpenChange: x19, children: o15 });
};
B8.displayName = U8;
var re8 = "ContextMenuSubTrigger";
var F4 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e20, a20 = c10(o15);
  return u13(Rn, { ...a20, ...t18, ref: n21 });
});
F4.displayName = re8;
var ae6 = "ContextMenuSubContent";
var W11 = i16.forwardRef((e20, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e20, a20 = c10(o15);
  return u13(vn, { ...a20, ...t18, ref: n21, style: { ...e20.style, "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
W11.displayName = ae6;
function v14(e20) {
  return (n21) => n21.pointerType !== "mouse" ? e20(n21) : void 0;
}

// http-url:https://esm.sh/@radix-ui/react-dropdown-menu@2.1.18/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dropdown-menu.mjs
import * as p10 from "react";
import { jsx as i17 } from "react/jsx-runtime";
var M5 = "DropdownMenu";
var [W12, me5] = $2(M5, [$t]);
var c11 = $t();
var [j10, _13] = W12(M5);
var h16 = (e20) => {
  let { __scopeDropdownMenu: n21, children: o15, dir: r18, open: t18, defaultOpen: u20, onOpenChange: s16, modal: d14 = true } = e20, m20 = c11(n21), f21 = p10.useRef(null), [l20, w18] = D({ prop: t18, defaultProp: u20 ?? false, onChange: s16, caller: M5 });
  return i17(j10, { scope: n21, triggerId: n5(), triggerRef: f21, contentId: n5(), open: l20, onOpenChange: w18, onOpenToggle: p10.useCallback(() => w18((U15) => !U15), [w18]), modal: d14, children: i17(en, { ...m20, open: l20, onOpenChange: w18, dir: r18, modal: d14, children: o15 }) });
};
h16.displayName = M5;
var P9 = "DropdownMenuTrigger";
var b14 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, disabled: r18 = false, ...t18 } = e20, u20 = _13(P9, o15), s16 = c11(o15);
  return i17(tn, { asChild: true, ...s16, children: i17(v2.button, { type: "button", id: u20.triggerId, "aria-haspopup": "menu", "aria-expanded": u20.open, "aria-controls": u20.open ? u20.contentId : void 0, "data-state": u20.open ? "open" : "closed", "data-disabled": r18 ? "" : void 0, disabled: r18, ...t18, ref: i2(n21, u20.triggerRef), onPointerDown: f2(e20.onPointerDown, (d14) => {
    !r18 && d14.button === 0 && d14.ctrlKey === false && (u20.onOpenToggle(), u20.open || d14.preventDefault());
  }), onKeyDown: f2(e20.onKeyDown, (d14) => {
    r18 || (["Enter", " "].includes(d14.key) && u20.onOpenToggle(), d14.key === "ArrowDown" && u20.onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(d14.key) && d14.preventDefault());
  }) }) });
});
b14.displayName = P9;
var X11 = "DropdownMenuPortal";
var I12 = (e20) => {
  let { __scopeDropdownMenu: n21, ...o15 } = e20, r18 = c11(n21);
  return i17(nn, { ...r18, ...o15 });
};
I12.displayName = X11;
var S11 = "DropdownMenuContent";
var C8 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e20, t18 = _13(S11, o15), u20 = c11(o15), s16 = p10.useRef(false);
  return i17(on, { id: t18.contentId, "aria-labelledby": t18.triggerId, ...u20, ...r18, ref: n21, onCloseAutoFocus: f2(e20.onCloseAutoFocus, (d14) => {
    s16.current || t18.triggerRef.current?.focus(), s16.current = false, d14.preventDefault();
  }), onInteractOutside: f2(e20.onInteractOutside, (d14) => {
    let m20 = d14.detail.originalEvent, f21 = m20.button === 0 && m20.ctrlKey === true, l20 = m20.button === 2 || f21;
    (!t18.modal || l20) && (s16.current = true);
  }), style: { ...e20.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
C8.displayName = S11;
var q11 = "DropdownMenuGroup";
var N15 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e20, t18 = c11(o15);
  return i17(rn, { ...t18, ...r18, ref: n21 });
});
N15.displayName = q11;
var z10 = "DropdownMenuLabel";
var x10 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e20, t18 = c11(o15);
  return i17(cn, { ...t18, ...r18, ref: n21 });
});
x10.displayName = z10;
var J8 = "DropdownMenuItem";
var A10 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e20, t18 = c11(o15);
  return i17(an, { ...t18, ...r18, ref: n21 });
});
A10.displayName = J8;
var Q8 = "DropdownMenuCheckboxItem";
var E17 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e20, t18 = c11(o15);
  return i17(sn, { ...t18, ...r18, ref: n21 });
});
E17.displayName = Q8;
var V10 = "DropdownMenuRadioGroup";
var O12 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e20, t18 = c11(o15);
  return i17(un, { ...t18, ...r18, ref: n21 });
});
O12.displayName = V10;
var Y9 = "DropdownMenuRadioItem";
var y15 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e20, t18 = c11(o15);
  return i17(ln, { ...t18, ...r18, ref: n21 });
});
y15.displayName = Y9;
var Z9 = "DropdownMenuItemIndicator";
var T12 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e20, t18 = c11(o15);
  return i17(dn, { ...t18, ...r18, ref: n21 });
});
T12.displayName = Z9;
var $11 = "DropdownMenuSeparator";
var G11 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e20, t18 = c11(o15);
  return i17(fn, { ...t18, ...r18, ref: n21 });
});
G11.displayName = $11;
var ee7 = "DropdownMenuArrow";
var k11 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e20, t18 = c11(o15);
  return i17(pn, { ...t18, ...r18, ref: n21 });
});
k11.displayName = ee7;
var oe7 = "DropdownMenuSubTrigger";
var L12 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e20, t18 = c11(o15);
  return i17(Rn, { ...t18, ...r18, ref: n21 });
});
L12.displayName = oe7;
var ne8 = "DropdownMenuSubContent";
var K10 = p10.forwardRef((e20, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e20, t18 = c11(o15);
  return i17(vn, { ...t18, ...r18, ref: n21, style: { ...e20.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
K10.displayName = ne8;

// http-url:https://esm.sh/@radix-ui/react-form@0.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-form.mjs
import * as t11 from "react";

// http-url:https://esm.sh/@radix-ui/react-label@2.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-label.mjs
import * as r14 from "react";
import { jsx as l13 } from "react/jsx-runtime";
var f15 = "Label";
var a14 = r14.forwardRef((e20, o15) => l13(v2.label, { ...e20, ref: o15, onMouseDown: (t18) => {
  t18.target.closest("button, input, select, textarea") || (e20.onMouseDown?.(t18), !t18.defaultPrevented && t18.detail > 1 && t18.preventDefault());
} }));
a14.displayName = f15;

// http-url:https://esm.sh/@radix-ui/react-form@0.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-form.mjs
import { Fragment as fe4, jsx as h17 } from "react/jsx-runtime";
var [H9, we5] = $2("Form");
var K11 = "Form";
var [he6, S12] = H9(K11);
var [Ce4, X12] = H9(K11);
var Z10 = t11.forwardRef((e20, o15) => {
  let { __scopeForm: r18, onClearServerErrors: i23 = () => {
  }, ...s16 } = e20, l20 = t11.useRef(null), v18 = s(o15, l20), [d14, f21] = t11.useState({}), m20 = t11.useCallback((n21) => d14[n21], [d14]), g21 = t11.useCallback((n21, u20) => f21((c15) => ({ ...c15, [n21]: { ...c15[n21] ?? {}, ...u20 } })), []), b21 = t11.useCallback((n21) => {
    f21((u20) => ({ ...u20, [n21]: void 0 })), a20((u20) => ({ ...u20, [n21]: {} }));
  }, []), [C18, y21] = t11.useState({}), I19 = t11.useCallback((n21) => C18[n21] ?? [], [C18]), p16 = t11.useCallback((n21, u20) => {
    y21((c15) => ({ ...c15, [n21]: [...c15[n21] ?? [], u20] }));
  }, []), R18 = t11.useCallback((n21, u20) => {
    y21((c15) => ({ ...c15, [n21]: (c15[n21] ?? []).filter((E25) => E25.id !== u20) }));
  }, []), [_22, a20] = t11.useState({}), F11 = t11.useCallback((n21) => _22[n21] ?? {}, [_22]), M17 = t11.useCallback((n21, u20) => {
    a20((c15) => ({ ...c15, [n21]: { ...c15[n21] ?? {}, ...u20 } }));
  }, []), [V19, A17] = t11.useState({}), B18 = t11.useCallback((n21, u20) => {
    A17((c15) => {
      let E25 = new Set(c15[n21]).add(u20);
      return { ...c15, [n21]: E25 };
    });
  }, []), D18 = t11.useCallback((n21, u20) => {
    A17((c15) => {
      let E25 = new Set(c15[n21]);
      return E25.delete(u20), { ...c15, [n21]: E25 };
    });
  }, []), k16 = t11.useCallback((n21) => Array.from(V19[n21] ?? []).join(" ") || void 0, [V19]);
  return h17(he6, { scope: r18, getFieldValidity: m20, onFieldValidityChange: g21, getFieldCustomMatcherEntries: I19, onFieldCustomMatcherEntryAdd: p16, onFieldCustomMatcherEntryRemove: R18, getFieldCustomErrors: F11, onFieldCustomErrorsChange: M17, onFieldValiditionClear: b21, children: h17(Ce4, { scope: r18, onFieldMessageIdAdd: B18, onFieldMessageIdRemove: D18, getFieldDescription: k16, children: h17(v2.form, { ...s16, ref: v18, onInvalid: f2(e20.onInvalid, (n21) => {
    let u20 = ae7(n21.currentTarget);
    u20 === n21.target && u20.focus(), n21.preventDefault();
  }), onSubmit: f2(e20.onSubmit, i23, { checkForDefaultPrevented: false }), onReset: f2(e20.onReset, i23) }) }) });
});
Z10.displayName = K11;
var Y10 = "FormField";
var [Fe5, N16] = H9(Y10);
var $12 = t11.forwardRef((e20, o15) => {
  let { __scopeForm: r18, name: i23, serverInvalid: s16 = false, ...l20 } = e20, d14 = S12(Y10, r18).getFieldValidity(i23), f21 = n5();
  return h17(Fe5, { scope: r18, id: f21, name: i23, serverInvalid: s16, children: h17(v2.div, { "data-valid": J9(d14, s16), "data-invalid": Q9(d14, s16), ...l20, ref: o15 }) });
});
$12.displayName = Y10;
var j11 = "FormLabel";
var ee8 = t11.forwardRef((e20, o15) => {
  let { __scopeForm: r18, ...i23 } = e20, s16 = S12(j11, r18), l20 = N16(j11, r18), v18 = i23.htmlFor || l20.id, d14 = s16.getFieldValidity(l20.name);
  return h17(a14, { "data-valid": J9(d14, l20.serverInvalid), "data-invalid": Q9(d14, l20.serverInvalid), ...i23, ref: o15, htmlFor: v18 });
});
ee8.displayName = j11;
var w12 = "FormControl";
var te8 = t11.forwardRef((e20, o15) => {
  let { __scopeForm: r18, ...i23 } = e20, s16 = S12(w12, r18), l20 = N16(w12, r18), v18 = X12(w12, r18), d14 = t11.useRef(null), f21 = s(o15, d14), m20 = i23.name || l20.name, g21 = i23.id || l20.id, b21 = s16.getFieldCustomMatcherEntries(m20), { onFieldValidityChange: C18, onFieldCustomErrorsChange: y21, onFieldValiditionClear: I19 } = s16, p16 = t11.useCallback(async (a20) => {
    if (se7(a20.validity)) {
      let c15 = O13(a20.validity);
      C18(m20, c15);
      return;
    }
    let F11 = a20.form ? new FormData(a20.form) : new FormData(), M17 = [a20.value, F11], V19 = [], A17 = [];
    b21.forEach((c15) => {
      be6(c15, M17) ? A17.push(c15) : _e5(c15) && V19.push(c15);
    });
    let B18 = V19.map(({ id: c15, match: E25 }) => [c15, E25(...M17)]), D18 = Object.fromEntries(B18), k16 = Object.values(D18).some(Boolean), n21 = k16;
    a20.setCustomValidity(n21 ? T13 : "");
    let u20 = O13(a20.validity);
    if (C18(m20, u20), y21(m20, D18), !k16 && A17.length > 0) {
      let c15 = A17.map(({ id: le11, match: de12 }) => de12(...M17).then((me13) => [le11, me13])), E25 = await Promise.all(c15), W19 = Object.fromEntries(E25), ie10 = Object.values(W19).some(Boolean);
      a20.setCustomValidity(ie10 ? T13 : "");
      let ce12 = O13(a20.validity);
      C18(m20, ce12), y21(m20, W19);
    }
  }, [b21, m20, y21, C18]);
  t11.useEffect(() => {
    let a20 = d14.current;
    if (a20) {
      let F11 = () => p16(a20);
      return a20.addEventListener("change", F11), () => a20.removeEventListener("change", F11);
    }
  }, [p16]);
  let R18 = t11.useCallback(() => {
    let a20 = d14.current;
    a20 && (a20.setCustomValidity(""), I19(m20));
  }, [m20, I19]);
  t11.useEffect(() => {
    let a20 = d14.current?.form;
    if (a20) return a20.addEventListener("reset", R18), () => a20.removeEventListener("reset", R18);
  }, [R18]), t11.useEffect(() => {
    let a20 = d14.current, F11 = a20?.closest("form");
    if (F11 && l20.serverInvalid) {
      let M17 = ae7(F11);
      M17 === a20 && M17.focus();
    }
  }, [l20.serverInvalid]);
  let _22 = s16.getFieldValidity(m20);
  return h17(v2.input, { "data-valid": J9(_22, l20.serverInvalid), "data-invalid": Q9(_22, l20.serverInvalid), "aria-invalid": l20.serverInvalid ? true : void 0, "aria-describedby": v18.getFieldDescription(m20), title: "", ...i23, ref: f21, id: g21, name: m20, onInvalid: f2(e20.onInvalid, (a20) => {
    let F11 = a20.currentTarget;
    p16(F11);
  }), onChange: f2(e20.onChange, (a20) => {
    R18();
  }) });
});
te8.displayName = w12;
var T13 = "This value is not valid";
var ye6 = { badInput: T13, patternMismatch: "This value does not match the required pattern", rangeOverflow: "This value is too large", rangeUnderflow: "This value is too small", stepMismatch: "This value does not match the required step", tooLong: "This value is too long", tooShort: "This value is too short", typeMismatch: "This value does not match the required type", valid: void 0, valueMissing: "This value is missing" };
var L13 = "FormMessage";
var oe8 = t11.forwardRef((e20, o15) => {
  let { match: r18, name: i23, ...s16 } = e20, l20 = N16(L13, e20.__scopeForm), v18 = i23 ?? l20.name;
  return r18 === void 0 ? h17(z11, { ...s16, ref: o15, name: v18, children: e20.children || T13 }) : typeof r18 == "function" ? h17(Re2, { match: r18, ...s16, ref: o15, name: v18 }) : h17(Ee5, { match: r18, ...s16, ref: o15, name: v18 });
});
oe8.displayName = L13;
var Ee5 = t11.forwardRef((e20, o15) => {
  let { match: r18, forceMatch: i23 = false, name: s16, children: l20, ...v18 } = e20, f21 = S12(L13, v18.__scopeForm).getFieldValidity(s16);
  return i23 || f21?.[r18] ? h17(z11, { ref: o15, ...v18, name: s16, children: l20 ?? ye6[r18] }) : null;
});
var Re2 = t11.forwardRef((e20, o15) => {
  let { match: r18, forceMatch: i23 = false, name: s16, id: l20, children: v18, ...d14 } = e20, f21 = S12(L13, d14.__scopeForm), m20 = t11.useRef(null), g21 = s(o15, m20), b21 = n5(), C18 = l20 ?? b21, y21 = t11.useMemo(() => ({ id: C18, match: r18 }), [C18, r18]), { onFieldCustomMatcherEntryAdd: I19, onFieldCustomMatcherEntryRemove: p16 } = f21;
  t11.useEffect(() => (I19(s16, y21), () => p16(s16, y21.id)), [y21, s16, I19, p16]);
  let R18 = f21.getFieldValidity(s16), a20 = f21.getFieldCustomErrors(s16)[C18];
  return i23 || R18 && !se7(R18) && a20 ? h17(z11, { id: C18, ref: g21, ...d14, name: s16, children: v18 ?? T13 }) : null;
});
var z11 = t11.forwardRef((e20, o15) => {
  let { __scopeForm: r18, id: i23, name: s16, ...l20 } = e20, v18 = X12(L13, r18), d14 = n5(), f21 = i23 ?? d14, { onFieldMessageIdAdd: m20, onFieldMessageIdRemove: g21 } = v18;
  return t11.useEffect(() => (m20(s16, f21), () => g21(s16, f21)), [s16, f21, m20, g21]), h17(v2.span, { id: f21, ...l20, ref: o15 });
});
var U9 = "FormValidityState";
var re9 = (e20) => {
  let { __scopeForm: o15, name: r18, children: i23 } = e20, s16 = S12(U9, o15), l20 = N16(U9, o15), v18 = r18 ?? l20.name, d14 = s16.getFieldValidity(v18);
  return h17(fe4, { children: i23(d14) });
};
re9.displayName = U9;
var ge7 = "FormSubmit";
var ne9 = t11.forwardRef((e20, o15) => {
  let { __scopeForm: r18, ...i23 } = e20;
  return h17(v2.button, { type: "submit", ...i23, ref: o15 });
});
ne9.displayName = ge7;
function O13(e20) {
  let o15 = {};
  for (let r18 in e20) o15[r18] = e20[r18];
  return o15;
}
function pe4(e20) {
  return e20 instanceof HTMLElement;
}
function Me4(e20) {
  return "validity" in e20;
}
function Ie4(e20) {
  return Me4(e20) && (e20.validity.valid === false || e20.getAttribute("aria-invalid") === "true");
}
function ae7(e20) {
  let o15 = e20.elements, [r18] = Array.from(o15).filter(pe4).filter(Ie4);
  return r18;
}
function be6(e20, o15) {
  return e20.match.constructor.name === "AsyncFunction" || Ae5(e20.match, o15);
}
function _e5(e20) {
  return e20.match.constructor.name === "Function";
}
function Ae5(e20, o15) {
  return e20(...o15) instanceof Promise;
}
function se7(e20) {
  let o15 = false;
  for (let r18 in e20) {
    let i23 = r18;
    if (i23 !== "valid" && i23 !== "customError" && e20[i23]) {
      o15 = true;
      break;
    }
  }
  return o15;
}
function J9(e20, o15) {
  if (e20?.valid === true && !o15) return true;
}
function Q9(e20, o15) {
  if (e20?.valid === false || o15) return true;
}

// http-url:https://esm.sh/@radix-ui/react-hover-card@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-hover-card.mjs
import * as t12 from "react";
import { jsx as s14 } from "react/jsx-runtime";
var x11;
var b15 = "HoverCard";
var [_14, ce6] = $2(b15, [Fe2]);
var E18 = Fe2();
var [j12, g17] = _14(b15);
var y16 = (e20) => {
  let { __scopeHoverCard: o15, children: n21, open: c15, defaultOpen: a20, onOpenChange: i23, openDelay: v18 = 700, closeDelay: m20 = 300 } = e20, l20 = E18(o15), C18 = t12.useRef(0), p16 = t12.useRef(0), R18 = t12.useRef(false), f21 = t12.useRef(false), [h23, r18] = D({ prop: c15, defaultProp: a20 ?? false, onChange: i23, caller: b15 }), P16 = t12.useCallback(() => {
    clearTimeout(p16.current), C18.current = window.setTimeout(() => r18(true), v18);
  }, [v18, r18]), k16 = t12.useCallback(() => {
    clearTimeout(C18.current), !R18.current && !f21.current && (p16.current = window.setTimeout(() => r18(false), m20));
  }, [m20, r18]), F11 = t12.useCallback(() => r18(false), [r18]);
  return t12.useEffect(() => () => {
    clearTimeout(C18.current), clearTimeout(p16.current);
  }, []), s14(j12, { scope: o15, open: h23, onOpenChange: r18, onOpen: P16, onClose: k16, onDismiss: F11, hasSelectionRef: R18, isPointerDownOnContentRef: f21, children: s14(Be2, { ...l20, children: n21 }) });
};
y16.displayName = b15;
var N17 = "HoverCardTrigger";
var D12 = t12.forwardRef((e20, o15) => {
  let { __scopeHoverCard: n21, ...c15 } = e20, a20 = g17(N17, n21), i23 = E18(n21);
  return s14(je3, { asChild: true, ...i23, children: s14(v2.a, { "data-state": a20.open ? "open" : "closed", ...c15, ref: o15, onPointerEnter: f2(e20.onPointerEnter, w13(a20.onOpen)), onPointerLeave: f2(e20.onPointerLeave, w13(a20.onClose)), onFocus: f2(e20.onFocus, a20.onOpen), onBlur: f2(e20.onBlur, a20.onClose), onTouchStart: f2(e20.onTouchStart, (v18) => v18.preventDefault()) }) });
});
D12.displayName = N17;
var T14 = "HoverCardPortal";
var [V11, q12] = _14(T14, { forceMount: void 0 });
var A11 = (e20) => {
  let { __scopeHoverCard: o15, forceMount: n21, children: c15, container: a20 } = e20, i23 = g17(T14, o15);
  return s14(V11, { scope: o15, forceMount: n21, children: s14(y3, { present: n21 || i23.open, children: s14(e10, { asChild: true, container: a20, children: c15 }) }) });
};
A11.displayName = T14;
var S13 = "HoverCardContent";
var L14 = t12.forwardRef((e20, o15) => {
  let n21 = q12(S13, e20.__scopeHoverCard), { forceMount: c15 = n21.forceMount, ...a20 } = e20, i23 = g17(S13, e20.__scopeHoverCard);
  return s14(y3, { present: c15 || i23.open, children: s14(z12, { "data-state": i23.open ? "open" : "closed", ...a20, onPointerEnter: f2(e20.onPointerEnter, w13(i23.onOpen)), onPointerLeave: f2(e20.onPointerLeave, w13(i23.onClose)), ref: o15 }) });
});
L14.displayName = S13;
var z12 = t12.forwardRef((e20, o15) => {
  let { __scopeHoverCard: n21, onEscapeKeyDown: c15, onPointerDownOutside: a20, onFocusOutside: i23, onInteractOutside: v18, ...m20 } = e20, l20 = g17(S13, n21), C18 = E18(n21), p16 = t12.useRef(null), R18 = s(o15, p16), [f21, h23] = t12.useState(false);
  return t12.useEffect(() => {
    if (f21) {
      let r18 = document.body;
      return x11 = r18.style.userSelect || r18.style.webkitUserSelect, r18.style.userSelect = "none", r18.style.webkitUserSelect = "none", () => {
        r18.style.userSelect = x11, r18.style.webkitUserSelect = x11;
      };
    }
  }, [f21]), t12.useEffect(() => {
    if (p16.current) {
      let r18 = () => {
        h23(false), l20.isPointerDownOnContentRef.current = false, setTimeout(() => {
          document.getSelection()?.toString() !== "" && (l20.hasSelectionRef.current = true);
        });
      };
      return document.addEventListener("pointerup", r18), () => {
        document.removeEventListener("pointerup", r18), l20.hasSelectionRef.current = false, l20.isPointerDownOnContentRef.current = false;
      };
    }
  }, [l20.isPointerDownOnContentRef, l20.hasSelectionRef]), t12.useEffect(() => {
    p16.current && Q10(p16.current).forEach((P16) => P16.setAttribute("tabindex", "-1"));
  }), s14(_2, { asChild: true, disableOutsidePointerEvents: false, onInteractOutside: v18, onEscapeKeyDown: c15, onPointerDownOutside: a20, onFocusOutside: f2(i23, (r18) => {
    r18.preventDefault();
  }), onDismiss: l20.onDismiss, children: s14(Le2, { ...C18, ...m20, onPointerDown: f2(m20.onPointerDown, (r18) => {
    r18.currentTarget.contains(r18.target) && h23(true), l20.hasSelectionRef.current = false, l20.isPointerDownOnContentRef.current = true;
  }), ref: R18, style: { ...m20.style, userSelect: f21 ? "text" : void 0, WebkitUserSelect: f21 ? "text" : void 0, "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)", "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)", "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)", "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)" } }) });
});
var J10 = "HoverCardArrow";
var M6 = t12.forwardRef((e20, o15) => {
  let { __scopeHoverCard: n21, ...c15 } = e20, a20 = E18(n21);
  return s14(Ue2, { ...a20, ...c15, ref: o15 });
});
M6.displayName = J10;
function w13(e20) {
  return (o15) => o15.pointerType === "touch" ? void 0 : e20();
}
function Q10(e20) {
  let o15 = [], n21 = document.createTreeWalker(e20, NodeFilter.SHOW_ELEMENT, { acceptNode: (c15) => c15.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
  for (; n21.nextNode(); ) o15.push(n21.currentNode);
  return o15;
}

// http-url:https://esm.sh/@radix-ui/react-menubar@1.1.18/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-menubar.mjs
import * as u14 from "react";
import { jsx as i18 } from "react/jsx-runtime";
var _15 = "Menubar";
var [x12, se8, pe5] = re(_15);
var [k12, Ke3] = $2(_15, [pe5, be4]);
var l14 = $t();
var K12 = be4();
var [le4, N18] = k12(_15);
var L15 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, value: a20, onValueChange: t18, defaultValue: g21, loop: d14 = true, dir: p16, ...c15 } = e20, b21 = v5(p16), s16 = K12(r18), [f21, v18] = D({ prop: a20, onChange: t18, defaultProp: g21 ?? "", caller: _15 }), [M17, m20] = u14.useState(null);
  return i18(le4, { scope: r18, value: f21, onMenuOpen: u14.useCallback((R18) => {
    v18(R18), m20(R18);
  }, [v18]), onMenuClose: u14.useCallback(() => v18(""), [v18]), onMenuToggle: u14.useCallback((R18) => {
    v18((E25) => E25 ? "" : R18), m20(R18);
  }, [v18]), dir: b21, loop: d14, children: i18(x12.Provider, { scope: r18, children: i18(x12.Slot, { scope: r18, children: i18(Fe3, { asChild: true, ...s16, orientation: "horizontal", loop: d14, dir: b21, currentTabStopId: M17, onCurrentTabStopIdChange: m20, children: i18(v2.div, { role: "menubar", ...c15, ref: n21 }) }) }) }) });
});
L15.displayName = _15;
var y17 = "MenubarMenu";
var [de4, B9] = k12(y17);
var U10 = (e20) => {
  let { __scopeMenubar: n21, value: r18, ...a20 } = e20, t18 = n5(), g21 = r18 || t18 || "LEGACY_REACT_AUTO_VALUE", d14 = N18(y17, n21), p16 = l14(n21), c15 = u14.useRef(null), b21 = u14.useRef(false), s16 = d14.value === g21;
  return u14.useEffect(() => {
    s16 || (b21.current = false);
  }, [s16]), i18(de4, { scope: n21, value: g21, triggerId: n5(), triggerRef: c15, contentId: n5(), wasKeyboardTriggerOpenRef: b21, children: i18(en, { ...p16, open: s16, onOpenChange: (f21) => {
    f21 || d14.onMenuClose();
  }, modal: false, dir: d14.dir, ...a20 }) });
};
U10.displayName = y17;
var w14 = "MenubarTrigger";
var V12 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, disabled: a20 = false, ...t18 } = e20, g21 = K12(r18), d14 = l14(r18), p16 = N18(w14, r18), c15 = B9(w14, r18), b21 = u14.useRef(null), s16 = s(n21, b21, c15.triggerRef), [f21, v18] = u14.useState(false), M17 = p16.value === c15.value;
  return i18(x12.ItemSlot, { scope: r18, value: c15.value, disabled: a20, children: i18(ge5, { asChild: true, ...g21, focusable: !a20, tabStopId: c15.value, children: i18(tn, { asChild: true, ...d14, children: i18(v2.button, { type: "button", role: "menuitem", id: c15.triggerId, "aria-haspopup": "menu", "aria-expanded": M17, "aria-controls": M17 ? c15.contentId : void 0, "data-highlighted": f21 ? "" : void 0, "data-state": M17 ? "open" : "closed", "data-disabled": a20 ? "" : void 0, disabled: a20, ...t18, ref: s16, onPointerDown: f2(e20.onPointerDown, (m20) => {
    !a20 && m20.button === 0 && m20.ctrlKey === false && (p16.onMenuOpen(c15.value), M17 || m20.preventDefault());
  }), onPointerEnter: f2(e20.onPointerEnter, () => {
    p16.value && !M17 && (p16.onMenuOpen(c15.value), b21.current?.focus());
  }), onKeyDown: f2(e20.onKeyDown, (m20) => {
    a20 || (["Enter", " "].includes(m20.key) && p16.onMenuToggle(c15.value), m20.key === "ArrowDown" && p16.onMenuOpen(c15.value), ["Enter", " ", "ArrowDown"].includes(m20.key) && (c15.wasKeyboardTriggerOpenRef.current = true, m20.preventDefault()));
  }), onFocus: f2(e20.onFocus, () => v18(true)), onBlur: f2(e20.onBlur, () => v18(false)) }) }) }) });
});
V12.displayName = w14;
var me6 = "MenubarPortal";
var H10 = (e20) => {
  let { __scopeMenubar: n21, ...r18 } = e20, a20 = l14(n21);
  return i18(nn, { ...a20, ...r18 });
};
H10.displayName = me6;
var A12 = "MenubarContent";
var j13 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, align: a20 = "start", ...t18 } = e20, g21 = l14(r18), d14 = N18(A12, r18), p16 = B9(A12, r18), c15 = se8(r18), b21 = u14.useRef(false);
  return i18(on, { id: p16.contentId, "aria-labelledby": p16.triggerId, "data-radix-menubar-content": "", ...g21, ...t18, ref: n21, align: a20, onCloseAutoFocus: f2(e20.onCloseAutoFocus, (s16) => {
    !d14.value && !b21.current && p16.triggerRef.current?.focus(), b21.current = false, s16.preventDefault();
  }), onFocusOutside: f2(e20.onFocusOutside, (s16) => {
    let f21 = s16.target;
    c15().some((M17) => M17.ref.current?.contains(f21)) && s16.preventDefault();
  }), onInteractOutside: f2(e20.onInteractOutside, () => {
    b21.current = true;
  }), onEntryFocus: (s16) => {
    p16.wasKeyboardTriggerOpenRef.current || s16.preventDefault();
  }, onKeyDown: f2(e20.onKeyDown, (s16) => {
    if (["ArrowRight", "ArrowLeft"].includes(s16.key)) {
      let f21 = s16.target, v18 = f21.hasAttribute("data-radix-menubar-subtrigger"), M17 = f21.closest("[data-radix-menubar-content]") !== s16.currentTarget, R18 = (d14.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === s16.key;
      if (!R18 && v18 || M17 && R18) return;
      let S18 = c15().filter((P16) => !P16.disabled).map((P16) => P16.value);
      R18 && S18.reverse();
      let O23 = S18.indexOf(p16.value);
      S18 = d14.loop ? Ce5(S18, O23 + 1) : S18.slice(O23 + 1);
      let [T21] = S18;
      T21 && d14.onMenuOpen(T21);
    }
  }, { checkForDefaultPrevented: false }), style: { ...e20.style, "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-menubar-content-available-width": "var(--radix-popper-available-width)", "--radix-menubar-content-available-height": "var(--radix-popper-available-height)", "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)", "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)" } });
});
j13.displayName = A12;
var be7 = "MenubarGroup";
var z13 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, ...a20 } = e20, t18 = l14(r18);
  return i18(rn, { ...t18, ...a20, ref: n21 });
});
z13.displayName = be7;
var ve6 = "MenubarLabel";
var W13 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, ...a20 } = e20, t18 = l14(r18);
  return i18(cn, { ...t18, ...a20, ref: n21 });
});
W13.displayName = ve6;
var fe5 = "MenubarItem";
var X13 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, ...a20 } = e20, t18 = l14(r18);
  return i18(an, { ...t18, ...a20, ref: n21 });
});
X13.displayName = fe5;
var Me5 = "MenubarCheckboxItem";
var Y11 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, ...a20 } = e20, t18 = l14(r18);
  return i18(sn, { ...t18, ...a20, ref: n21 });
});
Y11.displayName = Me5;
var ge8 = "MenubarRadioGroup";
var q13 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, ...a20 } = e20, t18 = l14(r18);
  return i18(un, { ...t18, ...a20, ref: n21 });
});
q13.displayName = ge8;
var Re3 = "MenubarRadioItem";
var J11 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, ...a20 } = e20, t18 = l14(r18);
  return i18(ln, { ...t18, ...a20, ref: n21 });
});
J11.displayName = Re3;
var he7 = "MenubarItemIndicator";
var Q11 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, ...a20 } = e20, t18 = l14(r18);
  return i18(dn, { ...t18, ...a20, ref: n21 });
});
Q11.displayName = he7;
var Se3 = "MenubarSeparator";
var Z11 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, ...a20 } = e20, t18 = l14(r18);
  return i18(fn, { ...t18, ...a20, ref: n21 });
});
Z11.displayName = Se3;
var _e6 = "MenubarArrow";
var $13 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, ...a20 } = e20, t18 = l14(r18);
  return i18(pn, { ...t18, ...a20, ref: n21 });
});
$13.displayName = _e6;
var ee9 = "MenubarSub";
var re10 = (e20) => {
  let { __scopeMenubar: n21, children: r18, open: a20, onOpenChange: t18, defaultOpen: g21 } = e20, d14 = l14(n21), [p16, c15] = D({ prop: a20, defaultProp: g21 ?? false, onChange: t18, caller: ee9 });
  return i18(mn, { ...d14, open: p16, onOpenChange: c15, children: r18 });
};
re10.displayName = ee9;
var Ie5 = "MenubarSubTrigger";
var ae8 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, ...a20 } = e20, t18 = l14(r18);
  return i18(Rn, { "data-radix-menubar-subtrigger": "", ...t18, ...a20, ref: n21 });
});
ae8.displayName = Ie5;
var Pe5 = "MenubarSubContent";
var ne10 = u14.forwardRef((e20, n21) => {
  let { __scopeMenubar: r18, ...a20 } = e20, t18 = l14(r18);
  return i18(vn, { ...t18, "data-radix-menubar-content": "", ...a20, ref: n21, style: { ...e20.style, "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-menubar-content-available-width": "var(--radix-popper-available-width)", "--radix-menubar-content-available-height": "var(--radix-popper-available-height)", "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)", "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)" } });
});
ne10.displayName = Pe5;
function Ce5(e20, n21) {
  return e20.map((r18, a20) => e20[(n21 + a20) % e20.length]);
}

// http-url:https://esm.sh/@radix-ui/react-navigation-menu@1.2.16/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-navigation-menu.mjs
import * as n12 from "react";
import * as oe9 from "react-dom";
import { Fragment as Z12, jsx as u15, jsxs as ee10 } from "react/jsx-runtime";
var O14 = "NavigationMenu";
var [$14, ce7, De3] = re(O14);
var [G12, Oe5, Ae6] = re(O14);
var [Y12, at2] = $2(O14, [De3, Ae6]);
var [ke3, I13] = Y12(O14);
var [Fe6, Le4] = Y12(O14);
var ue5 = n12.forwardRef((e20, t18) => {
  let { __scopeNavigationMenu: i23, value: a20, onValueChange: o15, defaultValue: r18, delayDuration: s16 = 200, skipDelayDuration: d14 = 300, orientation: l20 = "horizontal", dir: C18, ...c15 } = e20, [m20, E25] = n12.useState(null), N26 = s(t18, (M17) => E25(M17)), p16 = v5(C18), R18 = n12.useRef(0), h23 = n12.useRef(0), T21 = n12.useRef(0), [P16, v18] = n12.useState(true), [g21, f21] = D({ prop: a20, onChange: (M17) => {
    let x19 = M17 !== "", V19 = d14 > 0;
    x19 ? (window.clearTimeout(T21.current), V19 && v18(false)) : (window.clearTimeout(T21.current), T21.current = window.setTimeout(() => v18(true), d14)), o15?.(M17);
  }, defaultProp: r18 ?? "", caller: O14 }), w18 = n12.useCallback(() => {
    window.clearTimeout(h23.current), h23.current = window.setTimeout(() => f21(""), 150);
  }, [f21]), _22 = n12.useCallback((M17) => {
    window.clearTimeout(h23.current), f21(M17);
  }, [f21]), S18 = n12.useCallback((M17) => {
    g21 === M17 ? window.clearTimeout(h23.current) : R18.current = window.setTimeout(() => {
      window.clearTimeout(h23.current), f21(M17);
    }, s16);
  }, [g21, f21, s16]);
  return n12.useEffect(() => () => {
    window.clearTimeout(R18.current), window.clearTimeout(h23.current), window.clearTimeout(T21.current);
  }, []), u15(de5, { scope: i23, isRootMenu: true, value: g21, dir: p16, orientation: l20, rootNavigationMenu: m20, onTriggerEnter: (M17) => {
    window.clearTimeout(R18.current), P16 ? S18(M17) : _22(M17);
  }, onTriggerLeave: () => {
    window.clearTimeout(R18.current), w18();
  }, onContentEnter: () => window.clearTimeout(h23.current), onContentLeave: w18, onItemSelect: (M17) => {
    f21((x19) => x19 === M17 ? "" : M17);
  }, onItemDismiss: () => f21(""), children: u15(v2.nav, { "aria-label": "Main", "data-orientation": l20, dir: p16, ...c15, ref: N26 }) });
});
ue5.displayName = O14;
var U11 = "NavigationMenuSub";
var le5 = n12.forwardRef((e20, t18) => {
  let { __scopeNavigationMenu: i23, value: a20, onValueChange: o15, defaultValue: r18, orientation: s16 = "horizontal", ...d14 } = e20, l20 = I13(U11, i23), [C18, c15] = D({ prop: a20, onChange: o15, defaultProp: r18 ?? "", caller: U11 });
  return u15(de5, { scope: i23, isRootMenu: false, value: C18, dir: l20.dir, orientation: s16, rootNavigationMenu: l20.rootNavigationMenu, onTriggerEnter: (m20) => c15(m20), onItemSelect: (m20) => c15(m20), onItemDismiss: () => c15(""), children: u15(v2.div, { "data-orientation": s16, ...d14, ref: t18 }) });
});
le5.displayName = U11;
var de5 = (e20) => {
  let { scope: t18, isRootMenu: i23, rootNavigationMenu: a20, dir: o15, orientation: r18, children: s16, value: d14, onItemSelect: l20, onItemDismiss: C18, onTriggerEnter: c15, onTriggerLeave: m20, onContentEnter: E25, onContentLeave: N26 } = e20, [p16, R18] = n12.useState(null), [h23, T21] = n12.useState(/* @__PURE__ */ new Map()), [P16, v18] = n12.useState(null);
  return u15(ke3, { scope: t18, isRootMenu: i23, rootNavigationMenu: a20, value: d14, previousValue: u9(d14), baseId: n5(), dir: o15, orientation: r18, viewport: p16, onViewportChange: R18, indicatorTrack: P16, onIndicatorTrackChange: v18, onTriggerEnter: u3(c15), onTriggerLeave: u3(m20), onContentEnter: u3(E25), onContentLeave: u3(N26), onItemSelect: u3(l20), onItemDismiss: u3(C18), onViewportContentChange: n12.useCallback((g21, f21) => {
    T21((w18) => (w18.set(g21, f21), new Map(w18)));
  }, []), onViewportContentRemove: n12.useCallback((g21) => {
    T21((f21) => f21.has(g21) ? (f21.delete(g21), new Map(f21)) : f21);
  }, []), children: u15($14.Provider, { scope: t18, children: u15(Fe6, { scope: t18, items: h23, children: s16 }) }) });
};
var ve7 = "NavigationMenuList";
var fe6 = n12.forwardRef((e20, t18) => {
  let { __scopeNavigationMenu: i23, ...a20 } = e20, o15 = I13(ve7, i23), r18 = u15(v2.ul, { "data-orientation": o15.orientation, ...a20, ref: t18 });
  return u15(v2.div, { style: { position: "relative" }, ref: o15.onIndicatorTrackChange, children: u15($14.Slot, { scope: i23, children: o15.isRootMenu ? u15(Ee6, { asChild: true, children: r18 }) : r18 }) });
});
fe6.displayName = ve7;
var me7 = "NavigationMenuItem";
var [Ke4, ge9] = Y12(me7);
var pe6 = n12.forwardRef((e20, t18) => {
  let { __scopeNavigationMenu: i23, value: a20, ...o15 } = e20, r18 = n5(), s16 = a20 || r18 || "LEGACY_REACT_AUTO_VALUE", d14 = n12.useRef(null), l20 = n12.useRef(null), C18 = n12.useRef(null), c15 = n12.useRef(() => {
  }), m20 = n12.useRef(false), E25 = n12.useCallback((p16 = "start") => {
    if (d14.current) {
      c15.current();
      let R18 = B10(d14.current);
      R18.length && X14(p16 === "start" ? R18 : R18.reverse());
    }
  }, []), N26 = n12.useCallback(() => {
    if (d14.current) {
      let p16 = B10(d14.current);
      p16.length && (c15.current = We2(p16));
    }
  }, []);
  return u15(Ke4, { scope: i23, value: s16, triggerRef: l20, contentRef: d14, focusProxyRef: C18, wasEscapeCloseRef: m20, onEntryKeyDown: E25, onFocusProxyEnter: E25, onRootContentClose: N26, onContentFocusOutside: N26, children: u15(v2.li, { ...o15, ref: t18 }) });
});
pe6.displayName = me7;
var H11 = "NavigationMenuTrigger";
var Re4 = n12.forwardRef((e20, t18) => {
  let { __scopeNavigationMenu: i23, disabled: a20, ...o15 } = e20, r18 = I13(H11, e20.__scopeNavigationMenu), s16 = ge9(H11, e20.__scopeNavigationMenu), d14 = n12.useRef(null), l20 = s(d14, s16.triggerRef, t18), C18 = ye7(r18.baseId, s16.value), c15 = Ie6(r18.baseId, s16.value), m20 = n12.useRef(false), E25 = n12.useRef(false), N26 = s16.value === r18.value;
  return ee10(Z12, { children: [u15($14.ItemSlot, { scope: i23, value: s16.value, children: u15(Te3, { asChild: true, children: u15(v2.button, { id: C18, disabled: a20, "data-disabled": a20 ? "" : void 0, "data-state": J12(N26), "aria-expanded": N26, "aria-controls": N26 ? c15 : void 0, ...o15, ref: l20, onPointerEnter: f2(e20.onPointerEnter, () => {
    E25.current = false, s16.wasEscapeCloseRef.current = false;
  }), onPointerMove: f2(e20.onPointerMove, L16(() => {
    a20 || E25.current || s16.wasEscapeCloseRef.current || m20.current || (r18.onTriggerEnter(s16.value), m20.current = true);
  })), onPointerLeave: f2(e20.onPointerLeave, L16(() => {
    a20 || (r18.onTriggerLeave(), m20.current = false);
  })), onClick: f2(e20.onClick, () => {
    r18.onItemSelect(s16.value), E25.current = N26;
  }), onKeyDown: f2(e20.onKeyDown, (p16) => {
    let h23 = { horizontal: "ArrowDown", vertical: r18.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[r18.orientation];
    N26 && p16.key === h23 && (s16.onEntryKeyDown(), p16.preventDefault());
  }) }) }) }), N26 && ee10(Z12, { children: [u15(p, { "aria-hidden": true, tabIndex: 0, ref: s16.focusProxyRef, onFocus: (p16) => {
    let R18 = s16.contentRef.current, h23 = p16.relatedTarget, T21 = h23 === d14.current, P16 = R18?.contains(h23);
    (T21 || !P16) && s16.onFocusProxyEnter(T21 ? "start" : "end");
  } }), r18.viewport && u15("span", { "aria-owns": c15 })] })] });
});
Re4.displayName = H11;
var Ve2 = "NavigationMenuLink";
var te9 = "navigationMenu.linkSelect";
var we6 = n12.forwardRef((e20, t18) => {
  let { __scopeNavigationMenu: i23, active: a20, onSelect: o15, ...r18 } = e20;
  return u15(Te3, { asChild: true, children: u15(v2.a, { "data-active": a20 ? "" : void 0, "aria-current": a20 ? "page" : void 0, ...r18, ref: t18, onClick: f2(e20.onClick, (s16) => {
    let d14 = s16.target, l20 = new CustomEvent(te9, { bubbles: true, cancelable: true });
    if (d14.addEventListener(te9, (C18) => o15?.(C18), { once: true }), R(d14, l20), !l20.defaultPrevented && !s16.metaKey) {
      let C18 = new CustomEvent(F5, { bubbles: true, cancelable: true });
      R(d14, C18);
    }
  }, { checkForDefaultPrevented: false }) }) });
});
we6.displayName = Ve2;
var j14 = "NavigationMenuIndicator";
var Ce6 = n12.forwardRef((e20, t18) => {
  let { forceMount: i23, ...a20 } = e20, o15 = I13(j14, e20.__scopeNavigationMenu), r18 = !!o15.value;
  return o15.indicatorTrack ? oe9.createPortal(u15(y3, { present: i23 || r18, children: u15(ze2, { ...a20, ref: t18 }) }), o15.indicatorTrack) : null;
});
Ce6.displayName = j14;
var ze2 = n12.forwardRef((e20, t18) => {
  let { __scopeNavigationMenu: i23, ...a20 } = e20, o15 = I13(j14, i23), r18 = ce7(i23), [s16, d14] = n12.useState(null), [l20, C18] = n12.useState(null), c15 = o15.orientation === "horizontal", m20 = !!o15.value;
  n12.useEffect(() => {
    let p16 = r18().find((R18) => R18.value === o15.value)?.ref.current;
    p16 && d14(p16);
  }, [r18, o15.value]);
  let E25 = () => {
    s16 && C18({ size: c15 ? s16.offsetWidth : s16.offsetHeight, offset: c15 ? s16.offsetLeft : s16.offsetTop });
  };
  return W14(s16, E25), W14(o15.indicatorTrack, E25), l20 ? u15(v2.div, { "aria-hidden": true, "data-state": m20 ? "visible" : "hidden", "data-orientation": o15.orientation, ...a20, ref: t18, style: { position: "absolute", ...c15 ? { left: 0, width: l20.size + "px", transform: `translateX(${l20.offset}px)` } : { top: 0, height: l20.size + "px", transform: `translateY(${l20.offset}px)` }, ...a20.style } }) : null;
});
var A13 = "NavigationMenuContent";
var Me6 = n12.forwardRef((e20, t18) => {
  let { forceMount: i23, ...a20 } = e20, o15 = I13(A13, e20.__scopeNavigationMenu), r18 = ge9(A13, e20.__scopeNavigationMenu), s16 = s(r18.contentRef, t18), d14 = r18.value === o15.value, l20 = { value: r18.value, triggerRef: r18.triggerRef, focusProxyRef: r18.focusProxyRef, wasEscapeCloseRef: r18.wasEscapeCloseRef, onContentFocusOutside: r18.onContentFocusOutside, onRootContentClose: r18.onRootContentClose, ...a20 };
  return o15.viewport ? u15(Ge3, { forceMount: i23, ...l20, ref: s16 }) : u15(y3, { present: i23 || d14, children: u15(Ne4, { "data-state": J12(d14), ...l20, ref: s16, onPointerEnter: f2(e20.onPointerEnter, o15.onContentEnter), onPointerLeave: f2(e20.onPointerLeave, L16(o15.onContentLeave)), style: { pointerEvents: !d14 && o15.isRootMenu ? "none" : void 0, ...l20.style } }) });
});
Me6.displayName = A13;
var Ge3 = n12.forwardRef((e20, t18) => {
  let i23 = I13(A13, e20.__scopeNavigationMenu), { onViewportContentChange: a20, onViewportContentRemove: o15 } = i23;
  return e5(() => {
    a20(e20.value, { ref: t18, ...e20 });
  }, [e20, t18, a20]), e5(() => () => o15(e20.value), [e20.value, o15]), null;
});
var F5 = "navigationMenu.rootContentDismiss";
var Ne4 = n12.forwardRef((e20, t18) => {
  let { __scopeNavigationMenu: i23, value: a20, triggerRef: o15, focusProxyRef: r18, wasEscapeCloseRef: s16, onRootContentClose: d14, onContentFocusOutside: l20, ...C18 } = e20, c15 = I13(A13, i23), m20 = n12.useRef(null), E25 = s(m20, t18), N26 = ye7(c15.baseId, a20), p16 = Ie6(c15.baseId, a20), R18 = ce7(i23), h23 = n12.useRef(null), { onItemDismiss: T21 } = c15;
  n12.useEffect(() => {
    let v18 = m20.current;
    if (c15.isRootMenu && v18) {
      let g21 = () => {
        T21(), d14(), v18.contains(document.activeElement) && o15.current?.focus();
      };
      return v18.addEventListener(F5, g21), () => v18.removeEventListener(F5, g21);
    }
  }, [c15.isRootMenu, e20.value, o15, T21, d14]);
  let P16 = n12.useMemo(() => {
    let g21 = R18().map((x19) => x19.value);
    c15.dir === "rtl" && g21.reverse();
    let f21 = g21.indexOf(c15.value), w18 = g21.indexOf(c15.previousValue), _22 = a20 === c15.value, S18 = w18 === g21.indexOf(a20);
    if (!_22 && !S18) return h23.current;
    let M17 = (() => {
      if (f21 !== w18) {
        if (_22 && w18 !== -1) return f21 > w18 ? "from-end" : "from-start";
        if (S18 && f21 !== -1) return f21 > w18 ? "to-start" : "to-end";
      }
      return null;
    })();
    return h23.current = M17, M17;
  }, [c15.previousValue, c15.value, c15.dir, R18, a20]);
  return u15(Ee6, { asChild: true, children: u15(_2, { id: p16, "aria-labelledby": N26, "data-motion": P16, "data-orientation": c15.orientation, ...C18, ref: E25, disableOutsidePointerEvents: false, onDismiss: () => {
    let v18 = new Event(F5, { bubbles: true, cancelable: true });
    m20.current?.dispatchEvent(v18);
  }, onFocusOutside: f2(e20.onFocusOutside, (v18) => {
    l20();
    let g21 = v18.target;
    c15.rootNavigationMenu?.contains(g21) && v18.preventDefault();
  }), onPointerDownOutside: f2(e20.onPointerDownOutside, (v18) => {
    let g21 = v18.target, f21 = R18().some((_22) => _22.ref.current?.contains(g21)), w18 = c15.isRootMenu && c15.viewport?.contains(g21);
    (f21 || w18 || !c15.isRootMenu) && v18.preventDefault();
  }), onKeyDown: f2(e20.onKeyDown, (v18) => {
    let g21 = v18.altKey || v18.ctrlKey || v18.metaKey;
    if (v18.key === "Tab" && !g21) {
      let w18 = B10(v18.currentTarget), _22 = document.activeElement, S18 = w18.findIndex((V19) => V19 === _22), x19 = v18.shiftKey ? w18.slice(0, S18).reverse() : w18.slice(S18 + 1, w18.length);
      X14(x19) ? v18.preventDefault() : r18.current?.focus();
    }
  }), onEscapeKeyDown: f2(e20.onEscapeKeyDown, (v18) => {
    s16.current = true;
  }) }) });
});
var q14 = "NavigationMenuViewport";
var he8 = n12.forwardRef((e20, t18) => {
  let { forceMount: i23, ...a20 } = e20, r18 = !!I13(q14, e20.__scopeNavigationMenu).value;
  return u15(y3, { present: i23 || r18, children: u15(Ue4, { ...a20, ref: t18 }) });
});
he8.displayName = q14;
var Ue4 = n12.forwardRef((e20, t18) => {
  let { __scopeNavigationMenu: i23, children: a20, ...o15 } = e20, r18 = I13(q14, i23), s16 = s(t18, r18.onViewportChange), d14 = Le4(A13, e20.__scopeNavigationMenu), [l20, C18] = n12.useState(null), [c15, m20] = n12.useState(null), E25 = l20 ? l20?.width + "px" : void 0, N26 = l20 ? l20?.height + "px" : void 0, p16 = !!r18.value, R18 = p16 ? r18.value : r18.previousValue;
  return W14(c15, () => {
    c15 && C18({ width: c15.offsetWidth, height: c15.offsetHeight });
  }), u15(v2.div, { "data-state": J12(p16), "data-orientation": r18.orientation, ...o15, ref: s16, style: { pointerEvents: !p16 && r18.isRootMenu ? "none" : void 0, "--radix-navigation-menu-viewport-width": E25, "--radix-navigation-menu-viewport-height": N26, ...o15.style }, onPointerEnter: f2(e20.onPointerEnter, r18.onContentEnter), onPointerLeave: f2(e20.onPointerLeave, L16(r18.onContentLeave)), children: Array.from(d14.items).map(([T21, { ref: P16, forceMount: v18, ...g21 }]) => {
    let f21 = R18 === T21;
    return u15(y3, { present: v18 || f21, children: u15(Ne4, { ...g21, ref: i2(P16, (w18) => {
      f21 && w18 && m20(w18);
    }) }) }, T21);
  }) });
});
var He2 = "FocusGroup";
var Ee6 = n12.forwardRef((e20, t18) => {
  let { __scopeNavigationMenu: i23, ...a20 } = e20, o15 = I13(He2, i23);
  return u15(G12.Provider, { scope: i23, children: u15(G12.Slot, { scope: i23, children: u15(v2.div, { dir: o15.dir, ...a20, ref: t18 }) }) });
});
var ne11 = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
var Be3 = "FocusGroupItem";
var Te3 = n12.forwardRef((e20, t18) => {
  let { __scopeNavigationMenu: i23, ...a20 } = e20, o15 = Oe5(i23), r18 = I13(Be3, i23);
  return u15(G12.ItemSlot, { scope: i23, children: u15(v2.button, { ...a20, ref: t18, onKeyDown: f2(e20.onKeyDown, (s16) => {
    if (["Home", "End", ...ne11].includes(s16.key)) {
      let l20 = o15().map((m20) => m20.ref.current);
      if ([r18.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s16.key) && l20.reverse(), ne11.includes(s16.key)) {
        let m20 = l20.indexOf(s16.currentTarget);
        l20 = l20.slice(m20 + 1);
      }
      setTimeout(() => X14(l20)), s16.preventDefault();
    }
  }) }) });
});
function B10(e20) {
  let t18 = [], i23 = document.createTreeWalker(e20, NodeFilter.SHOW_ELEMENT, { acceptNode: (a20) => {
    let o15 = a20.tagName === "INPUT" && a20.type === "hidden";
    return a20.disabled || a20.hidden || o15 ? NodeFilter.FILTER_SKIP : a20.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; i23.nextNode(); ) t18.push(i23.currentNode);
  return t18;
}
function X14(e20) {
  let t18 = document.activeElement;
  return e20.some((i23) => i23 === t18 ? true : (i23.focus(), document.activeElement !== t18));
}
function We2(e20) {
  return e20.forEach((t18) => {
    t18.dataset.tabindex = t18.getAttribute("tabindex") || "", t18.setAttribute("tabindex", "-1");
  }), () => {
    e20.forEach((t18) => {
      let i23 = t18.dataset.tabindex;
      t18.setAttribute("tabindex", i23);
    });
  };
}
function W14(e20, t18) {
  let i23 = u3(t18);
  e5(() => {
    let a20 = 0;
    if (e20) {
      let o15 = new ResizeObserver(() => {
        cancelAnimationFrame(a20), a20 = window.requestAnimationFrame(i23);
      });
      return o15.observe(e20), () => {
        window.cancelAnimationFrame(a20), o15.unobserve(e20);
      };
    }
  }, [e20, i23]);
}
function J12(e20) {
  return e20 ? "open" : "closed";
}
function ye7(e20, t18) {
  return `${e20}-trigger-${t18}`;
}
function Ie6(e20, t18) {
  return `${e20}-content-${t18}`;
}
function L16(e20) {
  return (t18) => t18.pointerType === "mouse" ? e20(t18) : void 0;
}

// http-url:https://esm.sh/@radix-ui/react-use-is-hydrated@0.1.1/X-ZXJlYWN0/es2022/react-use-is-hydrated.mjs
import * as u16 from "react";
import * as e18 from "react";
var t13 = false;
function n13() {
  let [s16, a20] = e18.useState(t13);
  return e18.useEffect(() => {
    t13 || (t13 = true, a20(true));
  }, []), s16;
}
var r15 = u16[" useSyncExternalStore ".trim().toString()];
function d10() {
  return () => {
  };
}
function o13() {
  return r15(d10, () => true, () => false);
}
var c12 = typeof r15 == "function" ? o13 : n13;

// http-url:https://esm.sh/@radix-ui/react-one-time-password-field@0.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-one-time-password-field.mjs
import * as n14 from "react";
import { flushSync as K13 } from "react-dom";

// http-url:https://esm.sh/@radix-ui/number@1.1.2/es2022/number.mjs
function m14(t18, [a20, n21]) {
  return Math.min(n21, Math.max(a20, t18));
}

// http-url:https://esm.sh/@radix-ui/react-one-time-password-field@0.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-one-time-password-field.mjs
import { jsx as v15 } from "react/jsx-runtime";
var q15 = { numeric: { type: "numeric", regexp: /[^\d]/g, pattern: "\\d{1}", inputMode: "numeric" }, alpha: { type: "alpha", regexp: /[^a-zA-Z]/g, pattern: "[a-zA-Z]{1}", inputMode: "text" }, alphanumeric: { type: "alphanumeric", regexp: /[^a-zA-Z0-9]/g, pattern: "[a-zA-Z0-9]{1}", inputMode: "text" }, none: null };
var ae9 = "OneTimePasswordField";
var [ne12, { useCollection: Te4, createCollectionScope: Ae7, useInitCollection: xe5 }] = fe(ae9);
var [ke4] = $2(ae9, [Ae7, be4]);
var de6 = be4();
var [ve8, ye8] = ke4(ae9);
var Be4 = n14.forwardRef(function({ __scopeOneTimePasswordField: g21, defaultValue: D18, value: I19, onValueChange: R18, autoSubmit: b21 = false, children: _22, onPaste: L24, onAutoSubmit: U15, disabled: ce12 = false, readOnly: le11 = false, autoComplete: ue12 = "one-time-code", autoFocus: se12 = false, form: O23, name: ie10, placeholder: pe13, type: W19 = "text", orientation: s16 = "horizontal", dir: C18, validationType: p16 = "numeric", sanitizeValue: P16, ...$19 }, J18) {
  let h23 = de6(g21), Q17 = v5(C18), B18 = xe5(), [l20] = B18, f21 = q15[p16] ? q15[p16] : null, r18 = n14.useCallback((t18) => {
    if (Array.isArray(t18) ? t18 = t18.map(fe7).join("") : t18 = fe7(t18), f21) {
      let a20 = new RegExp(f21.regexp);
      t18 = t18.replace(a20, "");
    } else P16 && (t18 = P16(t18));
    return t18.split("");
  }, [f21, P16]), X22 = n14.useMemo(() => I19 != null ? r18(I19) : void 0, [I19, r18]), [m20, w18] = D({ caller: "OneTimePasswordField", prop: X22, defaultProp: D18 != null ? r18(D18) : [], onChange: n14.useCallback((t18) => R18?.(t18.join("")), [R18]) }), M17 = n14.useRef(m20);
  M17.current = m20;
  let E25 = n14.useCallback((t18) => {
    let a20 = M17.current;
    switch (t18.type) {
      case "SET_CHAR": {
        let { index: A17, char: d14 } = t18, y21 = l20.at(A17)?.element;
        if (a20[A17] === d14) {
          let k16 = y21 && l20.from(y21, 1)?.element;
          x13(k16);
          return;
        }
        if (d14 === "") return;
        if (f21) {
          let k16 = new RegExp(f21.regexp);
          if (d14.replace(k16, "") !== d14) return;
        }
        if (a20.length >= l20.size) {
          let k16 = [...a20];
          k16[A17] = d14, K13(() => w18(k16));
          let N26 = y21 && l20.from(y21, 1)?.element;
          x13(N26);
          return;
        }
        let V19 = [...a20];
        V19[A17] = d14;
        let te14 = l20.at(-1)?.element;
        if (K13(() => w18(V19)), y21 !== te14) {
          let k16 = y21 && l20.from(y21, 1)?.element;
          x13(k16);
        } else y21?.select();
        return;
      }
      case "CLEAR_CHAR": {
        let { index: A17, reason: d14 } = t18;
        if (!a20[A17]) return;
        let y21 = a20.filter((k16, N26) => N26 !== A17), V19 = l20.at(A17)?.element, te14 = V19 && l20.from(V19, -1)?.element;
        K13(() => w18(y21)), d14 === "Backspace" ? x13(te14) : (d14 === "Delete" || d14 === "Cut") && x13(V19);
        return;
      }
      case "CLEAR": {
        if (a20.length === 0) return;
        t18.reason === "Backspace" || t18.reason === "Delete" ? (K13(() => w18([])), x13(l20.at(0)?.element)) : w18([]);
        return;
      }
      case "PASTE": {
        let { value: A17 } = t18, d14 = r18(A17);
        if (!d14) return;
        let y21 = d14.slice(0, l20.size);
        K13(() => w18(y21)), x13(l20.at(y21.length - 1)?.element);
        return;
      }
    }
  }, [l20, r18, w18, f21]), j20 = n14.useRef(f21);
  n14.useEffect(() => {
    f21 && j20.current?.type !== f21.type && (j20.current = f21, w18(r18(m20.join(""))));
  }, [r18, w18, f21, m20]);
  let F11 = n14.useRef(null), Y20 = n14.useRef(null), H15 = n14.useRef(null), ee16 = s(J18, H15), z17 = l20.at(0)?.element, T21 = n14.useCallback(() => {
    let t18;
    if (O23) {
      let a20 = (H15.current?.ownerDocument ?? document).getElementById(O23);
      Ie7(a20) && (t18 = a20);
    } else F11.current ? t18 = F11.current.form : z17 && (t18 = z17.form);
    return t18 ?? null;
  }, [O23, z17]), e20 = n14.useCallback(() => {
    T21()?.requestSubmit();
  }, [T21]);
  n14.useEffect(() => {
    let t18 = T21();
    if (t18) {
      let a20 = () => E25({ type: "CLEAR", reason: "Reset" });
      return t18.addEventListener("reset", a20), () => t18.removeEventListener("reset", a20);
    }
  }, [E25, T21]);
  let o15 = m20.join(""), u20 = n14.useRef(o15), c15 = l20.size;
  n14.useEffect(() => {
    let t18 = u20.current;
    u20.current = o15, t18 !== o15 && b21 && m20.every((a20) => a20 !== "") && m20.length === c15 && (U15?.(m20.join("")), e20());
  }, [e20, b21, o15, c15, U15, m20]);
  let G20 = c12();
  return v15(ve8, { scope: g21, value: m20, attemptSubmit: e20, disabled: ce12, readOnly: le11, autoComplete: ue12, autoFocus: se12, form: O23, name: ie10, placeholder: pe13, type: W19, hiddenInputRef: F11, userActionRef: Y20, dispatch: E25, validationType: p16, orientation: s16, isHydrated: G20, sanitizeValue: r18, children: v15(ne12.Provider, { scope: g21, state: B18, children: v15(ne12.Slot, { scope: g21, children: v15(Fe3, { asChild: true, ...h23, orientation: s16, dir: Q17, children: v15(w.div, { ...$19, role: "group", ref: ee16, onPaste: f2(L24, (t18) => {
    t18.preventDefault();
    let a20 = t18.clipboardData.getData("text/plain");
    E25({ type: "PASTE", value: a20 });
  }), children: _22 }) }) }) }) });
});
var Me7 = n14.forwardRef(function({ __scopeOneTimePasswordField: g21, ...D18 }, I19) {
  let { value: R18, hiddenInputRef: b21, name: _22 } = ye8("OneTimePasswordFieldHiddenInput", g21), L24 = s(b21, I19);
  return v15("input", { ref: L24, name: _22, value: R18.join("").trim(), autoComplete: "off", autoFocus: false, autoCapitalize: "off", autoCorrect: "off", autoSave: "off", spellCheck: false, ...D18, type: "hidden", readOnly: true });
});
var je4 = n14.forwardRef(function({ __scopeOneTimePasswordField: g21, onInvalidChange: D18, index: I19, ...R18 }, b21) {
  let { value: _22, defaultValue: L24, disabled: U15, readOnly: ce12, autoComplete: le11, autoFocus: ue12, form: se12, name: O23, placeholder: ie10, type: pe13, ...W19 } = R18, s16 = ye8("OneTimePasswordFieldInput", g21), { dispatch: C18, userActionRef: p16, validationType: P16, isHydrated: $19, disabled: J18 } = s16, h23 = Te4(g21), Q17 = de6(g21), B18 = n14.useRef(null), [l20, f21] = n14.useState(null), r18 = I19 ?? (l20 ? h23.indexOf(l20) : -1), X22 = I19 != null || $19, m20;
  X22 && s16.placeholder && s16.value.length === 0 && (m20 = s16.placeholder[r18]);
  let w18 = s(b21, B18, f21), M17 = s16.value[r18] ?? "", E25 = n14.useRef(null);
  n14.useEffect(() => () => {
    E25.current && window.clearTimeout(E25.current);
  }, []);
  let j20 = s16.value.join("").trim(), F11 = m14(j20.length, [0, h23.size - 1]), Y20 = r18 <= F11, H15 = P16 in q15 ? q15[P16] : void 0;
  return v15(ne12.ItemSlot, { scope: g21, children: v15(ge5, { ...Q17, asChild: true, focusable: !s16.disabled && Y20, active: r18 === F11, children: ({ hasTabStop: ee16, isCurrentTabStop: z17 }) => {
    let T21 = ee16 ? z17 : r18 === 0;
    return v15(w.input, { ref: w18, type: s16.type, disabled: J18, "aria-label": `Character ${r18 + 1} of ${h23.size}`, autoComplete: T21 ? s16.autoComplete : "off", "data-1p-ignore": T21 ? void 0 : "true", "data-lpignore": T21 ? void 0 : "true", "data-protonpass-ignore": T21 ? void 0 : "true", "data-bwignore": T21 ? void 0 : "true", inputMode: H15?.inputMode, maxLength: T21 ? h23.size : 1, pattern: H15?.pattern, readOnly: s16.readOnly, value: M17, placeholder: m20, "data-radix-otp-input": "", "data-radix-index": r18, ...W19, onFocus: f2(R18.onFocus, (e20) => {
      e20.currentTarget.select();
    }), onCut: f2(R18.onCut, (e20) => {
      e20.currentTarget.value !== "" && (p16.current = { type: "cut" }, E25.current = window.setTimeout(() => {
        p16.current = null;
      }, 10));
    }), onInput: f2(R18.onInput, (e20) => {
      let o15 = e20.currentTarget.value;
      o15.length > 1 && (e20.preventDefault(), p16.current = { type: "autocomplete-paste" }, C18({ type: "PASTE", value: o15 }), E25.current = window.setTimeout(() => {
        p16.current = null;
      }, 10));
    }), onChange: f2(R18.onChange, (e20) => {
      let o15 = e20.target.value;
      e20.preventDefault();
      let u20 = p16.current;
      if (p16.current = null, u20) switch (u20.type) {
        case "cut":
          C18({ type: "CLEAR_CHAR", index: r18, reason: "Cut" });
          return;
        case "autocomplete-paste":
          return;
        case "keydown": {
          if (u20.key === "Char") return;
          let c15 = u20.key === "Backspace" && (u20.metaKey || u20.ctrlKey);
          u20.key === "Clear" || c15 ? C18({ type: "CLEAR", reason: "Backspace" }) : C18({ type: "CLEAR_CHAR", index: r18, reason: u20.key });
          return;
        }
        default:
          return;
      }
      if (e20.target.validity.valid) if (o15 === "") {
        let c15 = "Backspace";
        if (Fe7(e20.nativeEvent)) {
          let G20 = e20.nativeEvent.inputType;
          G20 === "deleteContentBackward" ? c15 = "Backspace" : G20 === "deleteByCut" && (c15 = "Cut");
        }
        C18({ type: "CLEAR_CHAR", index: r18, reason: c15 });
      } else C18({ type: "SET_CHAR", char: o15, index: r18, event: e20 });
      else {
        let c15 = e20.target;
        D18?.(c15.value), requestAnimationFrame(() => {
          c15.ownerDocument.activeElement === c15 && c15.select();
        });
      }
    }), onKeyDown: f2(R18.onKeyDown, (e20) => {
      switch (e20.key) {
        case "Clear":
        case "Delete":
        case "Backspace": {
          if (e20.currentTarget.value === "") {
            if (e20.key === "Delete") return;
            if (e20.key === "Clear" || e20.metaKey || e20.ctrlKey) C18({ type: "CLEAR", reason: "Backspace" });
            else {
              let c15 = e20.currentTarget;
              requestAnimationFrame(() => {
                x13(h23.from(c15, -1)?.element);
              });
            }
          } else p16.current = { type: "keydown", key: e20.key, metaKey: e20.metaKey, ctrlKey: e20.ctrlKey }, E25.current = window.setTimeout(() => {
            p16.current = null;
          }, 10);
          return;
        }
        case "Enter": {
          e20.preventDefault(), s16.attemptSubmit();
          return;
        }
        case "ArrowDown":
        case "ArrowUp": {
          s16.orientation === "horizontal" && e20.preventDefault();
          return;
        }
        default:
          if (e20.currentTarget.value === e20.key) {
            let o15 = e20.currentTarget;
            e20.preventDefault(), x13(h23.from(o15, 1)?.element);
            return;
          } else if (e20.currentTarget.value && !(e20.currentTarget.selectionStart === 0 && e20.currentTarget.selectionEnd != null && e20.currentTarget.selectionEnd > 0)) {
            let o15 = e20.key;
            if (e20.key.length > 1 || e20.key === " ") return;
            {
              let u20 = h23.from(e20.currentTarget, 1)?.element, c15 = h23.at(-1)?.element;
              u20 !== c15 && e20.currentTarget !== c15 && (e20.currentTarget.selectionStart === 0 ? C18({ type: "SET_CHAR", char: o15, index: r18, event: e20 }) : C18({ type: "SET_CHAR", char: o15, index: r18 + 1, event: e20 }), p16.current = { type: "keydown", key: "Char", metaKey: e20.metaKey, ctrlKey: e20.ctrlKey }, E25.current = window.setTimeout(() => {
                p16.current = null;
              }, 10));
            }
          }
      }
    }), onPointerDown: f2(R18.onPointerDown, (e20) => {
      e20.preventDefault();
      let o15 = Math.min(r18, F11), u20 = h23.at(o15)?.element;
      x13(u20);
    }) });
  } }) });
});
function Ie7(i23) {
  return i23?.tagName === "FORM";
}
function fe7(i23) {
  return i23.replace(/\s/g, "");
}
function x13(i23) {
  i23 && (i23.ownerDocument.activeElement === i23 ? window.requestAnimationFrame(() => {
    i23.select?.();
  }) : i23.focus());
}
function Fe7(i23) {
  return i23.type === "input";
}

// http-url:https://esm.sh/@radix-ui/react-password-toggle-field@0.1.5/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-password-toggle-field.mjs
import * as t14 from "react";
import { flushSync as B11 } from "react-dom";
import { jsx as _16 } from "react/jsx-runtime";
var I14 = "PasswordToggleField";
var [K14] = $2(I14);
var [Q12, w15] = K14(I14);
var C9 = { clickTriggered: false, selectionStart: null, selectionEnd: null };
var X15 = ({ __scopePasswordToggleField: n21, ...e20 }) => {
  let l20 = `${n5(e20.id)}-input`, [a20, c15] = t14.useState(l20), E25 = a20 ?? l20, d14 = t14.useCallback((i23) => c15(i23 != null ? String(i23) : null), []), { visible: m20, defaultVisible: R18, children: S18 } = e20, g21 = e20.onVisibilityChange, b21 = false;
  !g21 && "onVisiblityChange" in e20 && typeof e20.onVisiblityChange == "function" ? (b21 = true, g21 = e20.onVisiblityChange) : g21 = e20.onVisibilityChange, t14.useEffect(() => {
    b21 && console.warn("PasswordToggleField: The misspelled `onVisiblityChange` prop has been removed. Please use `onVisibilityChange` instead.");
  }, [b21]);
  let [h23 = false, p16] = D({ caller: I14, prop: m20, defaultProp: R18 ?? false, onChange: g21 }), f21 = t14.useRef(null), u20 = t14.useRef(C9);
  return _16(Q12, { scope: n21, inputId: E25, inputRef: f21, setVisible: p16, syncInputId: d14, visible: h23, focusState: u20, children: S18 });
};
X15.displayName = I14;
var V13 = I14 + "Input";
var Y13 = t14.forwardRef(({ __scopePasswordToggleField: n21, autoComplete: e20 = "current-password", autoCapitalize: s16 = "off", spellCheck: l20 = false, id: a20, ...c15 }, E25) => {
  let { visible: d14, inputRef: m20, inputId: R18, syncInputId: S18, setVisible: g21, focusState: b21 } = w15(V13, n21);
  t14.useEffect(() => {
    S18(a20);
  }, [a20, S18]);
  let h23 = i4(g21);
  return t14.useEffect(() => {
    let f21 = m20.current?.form;
    if (!f21) return;
    let u20 = new AbortController();
    return f21.addEventListener("reset", (i23) => {
      i23.defaultPrevented || h23(false);
    }, { signal: u20.signal }), f21.addEventListener("submit", () => {
      h23(false);
    }, { signal: u20.signal }), () => {
      u20.abort();
    };
  }, [m20]), _16(v2.input, { ...c15, id: a20 ?? R18, autoCapitalize: s16, autoComplete: e20, ref: s(E25, m20), spellCheck: l20, type: d14 ? "text" : "password", onBlur: f2(c15.onBlur, (p16) => {
    let { selectionStart: f21, selectionEnd: u20 } = p16.currentTarget;
    b21.current.selectionStart = f21, b21.current.selectionEnd = u20;
  }) });
});
Y13.displayName = V13;
var x14 = I14 + "Toggle";
var Z13 = t14.forwardRef(({ __scopePasswordToggleField: n21, onClick: e20, onPointerDown: s16, onPointerCancel: l20, onPointerUp: a20, onFocus: c15, children: E25, "aria-label": d14, "aria-controls": m20, "aria-hidden": R18, tabIndex: S18, ...g21 }, b21) => {
  let { setVisible: h23, visible: p16, inputRef: f21, inputId: u20, focusState: i23 } = w15(x14, n21), [k16, F11] = t14.useState(void 0), y21 = t14.useRef(null), M17 = s(b21, y21), W19 = c12();
  t14.useEffect(() => {
    let r18 = y21.current;
    if (!r18 || d14) {
      F11(void 0);
      return;
    }
    let o15 = p16 ? "Hide password" : "Show password";
    function T21(P16) {
      F11(P16 || void 0 ? void 0 : o15);
    }
    T21(r18.textContent);
    let v18 = new MutationObserver((P16) => {
      let L24;
      for (let q22 of P16) q22.type === "characterData" && r18.textContent && (L24 = r18.textContent);
      T21(L24);
    });
    return v18.observe(r18, { characterData: true, subtree: true }), () => {
      v18.disconnect();
    };
  }, [p16, d14]);
  let U15 = d14 || k16;
  return W19 ? m20 ??= u20 : (R18 ??= true, S18 ??= -1), t14.useEffect(() => {
    let r18 = () => {
    }, o15 = y21.current?.ownerDocument?.defaultView || window, T21 = () => i23.current.clickTriggered = false, v18 = () => r18 = ne13(o15, T21);
    return o15.addEventListener("pointerup", v18), () => {
      r18(), o15.removeEventListener("pointerup", v18);
    };
  }, [i23]), _16(v2.button, { "aria-controls": m20, "aria-hidden": R18, "aria-label": U15, ref: M17, id: u20, ...g21, onPointerDown: f2(s16, () => {
    i23.current.clickTriggered = true;
  }), onPointerCancel: (r18) => {
    l20?.(r18), i23.current = C9;
  }, onClick: (r18) => {
    if (e20?.(r18), r18.defaultPrevented) {
      i23.current = C9;
      return;
    }
    if (B11(() => {
      h23((o15) => !o15);
    }), i23.current.clickTriggered) {
      let o15 = f21.current;
      if (o15) {
        let { selectionStart: T21, selectionEnd: v18 } = i23.current;
        o15.focus(), (T21 !== null || v18 !== null) && requestAnimationFrame(() => {
          o15.ownerDocument.activeElement === o15 && (o15.selectionStart = T21, o15.selectionEnd = v18);
        });
      }
    }
    i23.current = C9;
  }, onPointerUp: (r18) => {
    a20?.(r18), setTimeout(() => {
      i23.current = C9;
    }, 50);
  }, type: "button", children: E25 });
});
Z13.displayName = x14;
var N19 = I14 + "Slot";
var ee11 = ({ __scopePasswordToggleField: n21, ...e20 }) => {
  let { visible: s16 } = w15(N19, n21);
  return "render" in e20 ? e20.render({ visible: s16 }) : s16 ? e20.visible : e20.hidden;
};
ee11.displayName = N19;
var G13 = I14 + "Icon";
var te10 = t14.forwardRef(({ __scopePasswordToggleField: n21, children: e20, ...s16 }, l20) => {
  let { visible: a20 } = w15(G13, n21), { visible: c15, hidden: E25, ...d14 } = s16;
  return _16(v2.svg, { ...d14, ref: l20, "aria-hidden": true, asChild: true, children: a20 ? c15 : E25 });
});
te10.displayName = G13;
function ne13(n21, e20, s16) {
  if (n21.requestIdleCallback) {
    let c15 = n21.requestIdleCallback(e20, s16);
    return () => {
      n21.cancelIdleCallback(c15);
    };
  }
  let l20 = Date.now(), a20 = n21.setTimeout(() => {
    e20({ didTimeout: false, timeRemaining: () => Math.max(0, 50 - (Date.now() - l20)) });
  }, 1);
  return () => {
    n21.clearTimeout(a20);
  };
}

// http-url:https://esm.sh/@radix-ui/react-popover@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-popover.mjs
import * as n15 from "react";
import { jsx as i19 } from "react/jsx-runtime";
var C10 = "Popover";
var [b16, ge10] = $2(C10, [Fe2]);
var R13 = Fe2();
var [Q13, l15] = b16(C10);
var F6 = (e20) => {
  let { __scopePopover: a20, children: t18, open: c15, defaultOpen: o15, onOpenChange: r18, modal: s16 = false } = e20, p16 = R13(a20), v18 = n15.useRef(null), [P16, h23] = n15.useState(false), [g21, f21] = D({ prop: c15, defaultProp: o15 ?? false, onChange: r18, caller: C10 });
  return i19(Be2, { ...p16, children: i19(Q13, { scope: a20, contentId: n5(), triggerRef: v18, open: g21, onOpenChange: f21, onOpenToggle: n15.useCallback(() => f21((A17) => !A17), [f21]), hasCustomAnchor: P16, onCustomAnchorAdd: n15.useCallback(() => h23(true), []), onCustomAnchorRemove: n15.useCallback(() => h23(false), []), modal: s16, children: t18 }) });
};
F6.displayName = C10;
var N20 = "PopoverAnchor";
var S14 = n15.forwardRef((e20, a20) => {
  let { __scopePopover: t18, ...c15 } = e20, o15 = l15(N20, t18), r18 = R13(t18), { onCustomAnchorAdd: s16, onCustomAnchorRemove: p16 } = o15;
  return n15.useEffect(() => (s16(), () => p16()), [s16, p16]), i19(je3, { ...r18, ...c15, ref: a20 });
});
S14.displayName = N20;
var y18 = "PopoverTrigger";
var D13 = n15.forwardRef((e20, a20) => {
  let { __scopePopover: t18, ...c15 } = e20, o15 = l15(y18, t18), r18 = R13(t18), s16 = s(a20, o15.triggerRef), p16 = i19(v2.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": o15.open, "aria-controls": o15.open ? o15.contentId : void 0, "data-state": H12(o15.open), ...c15, ref: s16, onClick: f2(e20.onClick, o15.onOpenToggle) });
  return o15.hasCustomAnchor ? p16 : i19(je3, { asChild: true, ...r18, children: p16 });
});
D13.displayName = y18;
var O15 = "PopoverPortal";
var [X16, Y14] = b16(O15, { forceMount: void 0 });
var M7 = (e20) => {
  let { __scopePopover: a20, forceMount: t18, children: c15, container: o15 } = e20, r18 = l15(O15, a20);
  return i19(X16, { scope: a20, forceMount: t18, children: i19(y3, { present: t18 || r18.open, children: i19(e10, { asChild: true, container: o15, children: c15 }) }) });
};
M7.displayName = O15;
var d11 = "PopoverContent";
var k13 = n15.forwardRef((e20, a20) => {
  let t18 = Y14(d11, e20.__scopePopover), { forceMount: c15 = t18.forceMount, ...o15 } = e20, r18 = l15(d11, e20.__scopePopover);
  return i19(y3, { present: c15 || r18.open, children: r18.modal ? i19(ee12, { ...o15, ref: a20 }) : i19(oe10, { ...o15, ref: a20 }) });
});
k13.displayName = d11;
var $15 = b2("PopoverContent.RemoveScroll");
var ee12 = n15.forwardRef((e20, a20) => {
  let t18 = l15(d11, e20.__scopePopover), c15 = n15.useRef(null), o15 = s(a20, c15), r18 = n15.useRef(false);
  return n15.useEffect(() => {
    let s16 = c15.current;
    if (s16) return S8(s16);
  }, []), i19(l10, { as: $15, allowPinchZoom: true, children: i19(I15, { ...e20, ref: o15, trapFocus: t18.open, disableOutsidePointerEvents: true, onCloseAutoFocus: f2(e20.onCloseAutoFocus, (s16) => {
    s16.preventDefault(), r18.current || t18.triggerRef.current?.focus();
  }), onPointerDownOutside: f2(e20.onPointerDownOutside, (s16) => {
    let p16 = s16.detail.originalEvent, v18 = p16.button === 0 && p16.ctrlKey === true, P16 = p16.button === 2 || v18;
    r18.current = P16;
  }, { checkForDefaultPrevented: false }), onFocusOutside: f2(e20.onFocusOutside, (s16) => s16.preventDefault(), { checkForDefaultPrevented: false }) }) });
});
var oe10 = n15.forwardRef((e20, a20) => {
  let t18 = l15(d11, e20.__scopePopover), c15 = n15.useRef(false), o15 = n15.useRef(false);
  return i19(I15, { ...e20, ref: a20, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (r18) => {
    e20.onCloseAutoFocus?.(r18), r18.defaultPrevented || (c15.current || t18.triggerRef.current?.focus(), r18.preventDefault()), c15.current = false, o15.current = false;
  }, onInteractOutside: (r18) => {
    e20.onInteractOutside?.(r18), r18.defaultPrevented || (c15.current = true, r18.detail.originalEvent.type === "pointerdown" && (o15.current = true));
    let s16 = r18.target;
    t18.triggerRef.current?.contains(s16) && r18.preventDefault(), r18.detail.originalEvent.type === "focusin" && o15.current && r18.preventDefault();
  } });
});
var I15 = n15.forwardRef((e20, a20) => {
  let { __scopePopover: t18, trapFocus: c15, onOpenAutoFocus: o15, onCloseAutoFocus: r18, disableOutsidePointerEvents: s16, onEscapeKeyDown: p16, onPointerDownOutside: v18, onFocusOutside: P16, onInteractOutside: h23, ...g21 } = e20, f21 = l15(d11, t18), A17 = R13(t18);
  return a4(), i19(L4, { asChild: true, loop: true, trapped: c15, onMountAutoFocus: o15, onUnmountAutoFocus: r18, children: i19(_2, { asChild: true, disableOutsidePointerEvents: s16, onInteractOutside: h23, onEscapeKeyDown: p16, onPointerDownOutside: v18, onFocusOutside: P16, onDismiss: () => f21.onOpenChange(false), deferPointerDownOutside: true, children: i19(Le2, { "data-state": H12(f21.open), role: "dialog", id: f21.contentId, ...A17, ...g21, ref: a20, style: { ...g21.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
});
var T15 = "PopoverClose";
var L17 = n15.forwardRef((e20, a20) => {
  let { __scopePopover: t18, ...c15 } = e20, o15 = l15(T15, t18);
  return i19(v2.button, { type: "button", ...c15, ref: a20, onClick: f2(e20.onClick, () => o15.onOpenChange(false)) });
});
L17.displayName = T15;
var re11 = "PopoverArrow";
var G14 = n15.forwardRef((e20, a20) => {
  let { __scopePopover: t18, ...c15 } = e20, o15 = R13(t18);
  return i19(Ue2, { ...o15, ...c15, ref: a20 });
});
G14.displayName = re11;
function H12(e20) {
  return e20 ? "open" : "closed";
}

// http-url:https://esm.sh/@radix-ui/react-progress@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-progress.mjs
import * as u17 from "react";
import { jsx as l16 } from "react/jsx-runtime";
var d12 = "Progress";
var v16 = 100;
var [$16, C11] = $2(d12);
var [h18, _17] = $16(d12);
var f16 = u17.forwardRef((r18, e20) => {
  let { __scopeProgress: i23, value: o15 = null, max: a20, getValueLabel: N26 = E19, ...b21 } = r18;
  (a20 || a20 === 0) && !p11(a20) && console.error(M8(`${a20}`, "Progress"));
  let t18 = p11(a20) ? a20 : v16;
  o15 !== null && !c13(o15, t18) && console.error(V14(`${o15}`, "Progress"));
  let s16 = c13(o15, t18) ? o15 : null, I19 = n16(s16) ? N26(s16, t18) : void 0;
  return l16(h18, { scope: i23, value: s16, max: t18, children: l16(v2.div, { "aria-valuemax": t18, "aria-valuemin": 0, "aria-valuenow": n16(s16) ? s16 : void 0, "aria-valuetext": I19, role: "progressbar", "data-state": x15(s16, t18), "data-value": s16 ?? void 0, "data-max": t18, ...b21, ref: e20 }) });
});
f16.displayName = d12;
var g18 = "ProgressIndicator";
var P10 = u17.forwardRef((r18, e20) => {
  let { __scopeProgress: i23, ...o15 } = r18, a20 = _17(g18, i23);
  return l16(v2.div, { "data-state": x15(a20.value, a20.max), "data-value": a20.value ?? void 0, "data-max": a20.max, ...o15, ref: e20 });
});
P10.displayName = g18;
function E19(r18, e20) {
  return `${Math.round(r18 / e20 * 100)}%`;
}
function x15(r18, e20) {
  return r18 == null ? "indeterminate" : r18 === e20 ? "complete" : "loading";
}
function n16(r18) {
  return typeof r18 == "number";
}
function p11(r18) {
  return n16(r18) && !isNaN(r18) && r18 > 0;
}
function c13(r18, e20) {
  return n16(r18) && !isNaN(r18) && r18 <= e20 && r18 >= 0;
}
function M8(r18, e20) {
  return `Invalid prop \`max\` of value \`${r18}\` supplied to \`${e20}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v16}\`.`;
}
function V14(r18, e20) {
  return `Invalid prop \`value\` of value \`${r18}\` supplied to \`${e20}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v16} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}

// http-url:https://esm.sh/@radix-ui/react-radio-group@1.4.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-radio-group.mjs
import * as f17 from "react";
import * as p12 from "react";
import { Fragment as ae10, jsx as b17, jsxs as ne14 } from "react/jsx-runtime";
import { Fragment as ue6, jsx as m15, jsxs as pe7 } from "react/jsx-runtime";
var y19 = "Radio";
var [ie4, M9] = $2(y19);
var [se9, C12] = ie4(y19);
function F7(r18) {
  let { __scopeRadio: t18, checked: e20 = false, children: a20, disabled: o15, form: n21, name: i23, onCheck: u20, required: c15, value: l20 = "on", internal_do_not_use_render: d14 } = r18, [s16, R18] = p12.useState(null), [v18, _22] = p12.useState(null), h23 = p12.useRef(false), g21 = s16 ? !!n21 || !!s16.closest("form") : true, I19 = { checked: e20, disabled: o15, required: c15, name: i23, form: n21, value: l20, control: s16, setControl: R18, hasConsumerStoppedPropagationRef: h23, isFormControl: g21, bubbleInput: v18, setBubbleInput: _22, onCheck: () => u20?.() };
  return b17(se9, { scope: t18, ...I19, children: de7(d14) ? d14(I19) : a20 });
}
var B12 = "RadioTrigger";
var S15 = p12.forwardRef(({ __scopeRadio: r18, onClick: t18, ...e20 }, a20) => {
  let { checked: o15, disabled: n21, value: i23, setControl: u20, onCheck: c15, hasConsumerStoppedPropagationRef: l20, isFormControl: d14, bubbleInput: s16 } = C12(B12, r18), R18 = s(a20, u20);
  return b17(v2.button, { type: "button", role: "radio", "aria-checked": o15, "data-state": j15(o15), "data-disabled": n21 ? "" : void 0, disabled: n21, value: i23, ...e20, ref: R18, onClick: f2(t18, (v18) => {
    o15 || c15(), s16 && d14 && (l20.current = v18.isPropagationStopped(), l20.current || v18.stopPropagation());
  }) });
});
S15.displayName = B12;
var ce8 = p12.forwardRef((r18, t18) => {
  let { __scopeRadio: e20, name: a20, checked: o15, required: n21, disabled: i23, value: u20, onCheck: c15, form: l20, ...d14 } = r18;
  return b17(F7, { __scopeRadio: e20, checked: o15, disabled: i23, required: n21, onCheck: c15, name: a20, form: l20, value: u20, internal_do_not_use_render: ({ isFormControl: s16 }) => ne14(ae10, { children: [b17(S15, { ...d14, ref: t18, __scopeRadio: e20 }), s16 && b17(w16, { __scopeRadio: e20 })] }) });
});
ce8.displayName = y19;
var D14 = "RadioIndicator";
var O16 = p12.forwardRef((r18, t18) => {
  let { __scopeRadio: e20, forceMount: a20, ...o15 } = r18, n21 = C12(D14, e20);
  return b17(y3, { present: a20 || n21.checked, children: b17(v2.span, { "data-state": j15(n21.checked), "data-disabled": n21.disabled ? "" : void 0, ...o15, ref: t18 }) });
});
O16.displayName = D14;
var L18 = "RadioBubbleInput";
var w16 = p12.forwardRef(({ __scopeRadio: r18, ...t18 }, e20) => {
  let { control: a20, checked: o15, required: n21, disabled: i23, name: u20, value: c15, form: l20, bubbleInput: d14, setBubbleInput: s16, hasConsumerStoppedPropagationRef: R18 } = C12(L18, r18), v18 = s(e20, s16), _22 = u9(o15), h23 = u10(a20);
  p12.useEffect(() => {
    let I19 = d14;
    if (!I19) return;
    let H15 = window.HTMLInputElement.prototype, N26 = Object.getOwnPropertyDescriptor(H15, "checked").set, z17 = !R18.current;
    if (_22 !== o15 && N26) {
      let W19 = new Event("click", { bubbles: z17 });
      N26.call(I19, o15), I19.dispatchEvent(W19);
    }
  }, [d14, _22, o15, R18]);
  let g21 = p12.useRef(o15);
  return b17(v2.input, { type: "radio", "aria-hidden": true, defaultChecked: g21.current, required: n21, disabled: i23, name: u20, value: c15, form: l20, ...t18, tabIndex: -1, ref: v18, style: { ...t18.style, ...h23, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0, transform: "translateX(-100%)" } });
});
w16.displayName = L18;
function de7(r18) {
  return typeof r18 == "function";
}
function j15(r18) {
  return r18 ? "checked" : "unchecked";
}
var le6 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var E20 = "RadioGroup";
var [Re5, qe2] = $2(E20, [be4, M9]);
var q16 = be4();
var P11 = M9();
var [me8, fe8] = Re5(E20);
var ve9 = f17.forwardRef((r18, t18) => {
  let { __scopeRadioGroup: e20, name: a20, defaultValue: o15, value: n21, required: i23 = false, disabled: u20 = false, orientation: c15, dir: l20, loop: d14 = true, onValueChange: s16, ...R18 } = r18, v18 = q16(e20), _22 = v5(l20), [h23, g21] = D({ prop: n21, defaultProp: o15 ?? null, onChange: s16, caller: E20 });
  return m15(me8, { scope: e20, name: a20, required: i23, disabled: u20, value: h23, onValueChange: g21, children: m15(Fe3, { asChild: true, ...v18, orientation: c15, dir: _22, loop: d14, children: m15(v2.div, { role: "radiogroup", "aria-required": i23, "aria-orientation": c15, "data-disabled": u20 ? "" : void 0, dir: _22, ...R18, ref: t18 }) }) });
});
ve9.displayName = E20;
var be8 = "RadioGroupItem";
var _e7 = "RadioGroupItemProvider";
var U12 = "RadioGroupItemTrigger";
var Ie8 = "RadioGroupItemBubbleInput";
function he9(r18) {
  let { __scopeRadioGroup: t18, value: e20, disabled: a20, children: o15, internal_do_not_use_render: n21 } = r18, i23 = fe8(_e7, t18), u20 = P11(t18), c15 = i23.disabled || a20;
  return m15(F7, { ...u20, checked: i23.value === e20, disabled: c15, required: i23.required, name: i23.name, value: e20, onCheck: () => i23.onValueChange(e20), internal_do_not_use_render: n21, children: o15 });
}
var K15 = f17.forwardRef((r18, t18) => {
  let { __scopeRadioGroup: e20, ...a20 } = r18, o15 = q16(e20), n21 = P11(e20), { checked: i23, disabled: u20 } = C12(U12, n21.__scopeRadio), c15 = f17.useRef(null), l20 = s(t18, c15), d14 = f17.useRef(false);
  return f17.useEffect(() => {
    let s16 = (v18) => {
      le6.includes(v18.key) && (d14.current = true);
    }, R18 = () => d14.current = false;
    return document.addEventListener("keydown", s16), document.addEventListener("keyup", R18), () => {
      document.removeEventListener("keydown", s16), document.removeEventListener("keyup", R18);
    };
  }, []), m15(ge5, { asChild: true, ...o15, focusable: !u20, active: i23, children: m15(S15, { ...n21, ...a20, ref: l20, onKeyDown: f2(a20.onKeyDown, (s16) => {
    s16.key === "Enter" && s16.preventDefault();
  }), onFocus: f2(a20.onFocus, () => {
    d14.current && c15.current?.click();
  }) }) });
});
K15.displayName = U12;
var ge11 = f17.forwardRef((r18, t18) => {
  let { __scopeRadioGroup: e20, value: a20, disabled: o15, ...n21 } = r18;
  return m15(he9, { __scopeRadioGroup: e20, value: a20, disabled: o15, internal_do_not_use_render: ({ isFormControl: i23 }) => pe7(ue6, { children: [m15(K15, { ...n21, ref: t18, __scopeRadioGroup: e20 }), i23 && m15(V15, { __scopeRadioGroup: e20 })] }) });
});
ge11.displayName = be8;
var V15 = f17.forwardRef((r18, t18) => {
  let { __scopeRadioGroup: e20, ...a20 } = r18, o15 = P11(e20);
  return m15(w16, { ...o15, ...a20, ref: t18 });
});
V15.displayName = Ie8;
var Ge4 = "RadioGroupIndicator";
var Ce7 = f17.forwardRef((r18, t18) => {
  let { __scopeRadioGroup: e20, ...a20 } = r18, o15 = P11(e20);
  return m15(O16, { ...o15, ...a20, ref: t18 });
});
Ce7.displayName = Ge4;

// http-url:https://esm.sh/@radix-ui/react-scroll-area@1.2.12/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-scroll-area.mjs
import * as n17 from "react";
import * as j16 from "react";
import { Fragment as ue7, jsx as h19, jsxs as fe9 } from "react/jsx-runtime";
function de8(e20, o15) {
  return j16.useReducer((t18, c15) => o15[t18][c15] ?? t18, e20);
}
var V16 = "ScrollArea";
var [q17, Ne5] = $2(V16);
var [he10, v17] = q17(V16);
var $17 = n17.forwardRef((e20, o15) => {
  let { __scopeScrollArea: t18, type: c15 = "hover", dir: r18, scrollHideDelay: l20 = 600, ...a20 } = e20, [i23, s16] = n17.useState(null), [f21, d14] = n17.useState(null), [b21, u20] = n17.useState(null), [S18, w18] = n17.useState(null), [y21, M17] = n17.useState(null), [g21, _22] = n17.useState(0), [U15, D18] = n17.useState(0), [W19, x19] = n17.useState(false), [H15, z17] = n17.useState(false), m20 = s(o15, (E25) => s16(E25)), p16 = v5(r18);
  return h19(he10, { scope: t18, type: c15, dir: p16, scrollHideDelay: l20, scrollArea: i23, viewport: f21, onViewportChange: d14, content: b21, onContentChange: u20, scrollbarX: S18, onScrollbarXChange: w18, scrollbarXEnabled: W19, onScrollbarXEnabledChange: x19, scrollbarY: y21, onScrollbarYChange: M17, scrollbarYEnabled: H15, onScrollbarYEnabledChange: z17, onCornerWidthChange: _22, onCornerHeightChange: D18, children: h19(v2.div, { dir: p16, ...a20, ref: m20, style: { position: "relative", "--radix-scroll-area-corner-width": g21 + "px", "--radix-scroll-area-corner-height": U15 + "px", ...e20.style } }) });
});
$17.displayName = V16;
var G15 = "ScrollAreaViewport";
var J13 = n17.forwardRef((e20, o15) => {
  let { __scopeScrollArea: t18, children: c15, nonce: r18, ...l20 } = e20, a20 = v17(G15, t18), i23 = n17.useRef(null), s16 = s(o15, i23, a20.onViewportChange);
  return fe9(ue7, { children: [h19(be9, { nonce: r18 }), h19(v2.div, { "data-radix-scroll-area-viewport": "", ...l20, ref: s16, style: { overflowX: a20.scrollbarXEnabled ? "scroll" : "hidden", overflowY: a20.scrollbarYEnabled ? "scroll" : "hidden", ...e20.style }, children: h19("div", { ref: a20.onContentChange, style: { minWidth: "100%", display: "table" }, children: c15 }) })] });
});
J13.displayName = G15;
var be9 = n17.memo(({ nonce: e20 }) => h19("style", { dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" }, nonce: e20 }), (e20, o15) => e20.nonce === o15.nonce);
var R14 = "ScrollAreaScrollbar";
var K16 = n17.forwardRef((e20, o15) => {
  let { forceMount: t18, ...c15 } = e20, r18 = v17(R14, e20.__scopeScrollArea), { onScrollbarXEnabledChange: l20, onScrollbarYEnabledChange: a20 } = r18, i23 = e20.orientation === "horizontal";
  return n17.useEffect(() => (i23 ? l20(true) : a20(true), () => {
    i23 ? l20(false) : a20(false);
  }), [i23, l20, a20]), r18.type === "hover" ? h19(Se4, { ...c15, ref: o15, forceMount: t18 }) : r18.type === "scroll" ? h19(me9, { ...c15, ref: o15, forceMount: t18 }) : r18.type === "auto" ? h19(Q14, { ...c15, ref: o15, forceMount: t18 }) : r18.type === "always" ? h19(k14, { ...c15, ref: o15, "data-state": "visible" }) : null;
});
K16.displayName = R14;
var Se4 = n17.forwardRef((e20, o15) => {
  let { forceMount: t18, ...c15 } = e20, r18 = v17(R14, e20.__scopeScrollArea), [l20, a20] = n17.useState(false);
  return n17.useEffect(() => {
    let i23 = r18.scrollArea, s16 = 0;
    if (i23) {
      let f21 = () => {
        window.clearTimeout(s16), a20(true);
      }, d14 = () => {
        s16 = window.setTimeout(() => a20(false), r18.scrollHideDelay);
      };
      return i23.addEventListener("pointerenter", f21), i23.addEventListener("pointerleave", d14), () => {
        window.clearTimeout(s16), i23.removeEventListener("pointerenter", f21), i23.removeEventListener("pointerleave", d14);
      };
    }
  }, [r18.scrollArea, r18.scrollHideDelay]), h19(y3, { present: t18 || l20, children: h19(Q14, { "data-state": l20 ? "visible" : "hidden", ...c15, ref: o15 }) });
});
var me9 = n17.forwardRef((e20, o15) => {
  let { forceMount: t18, ...c15 } = e20, r18 = v17(R14, e20.__scopeScrollArea), l20 = e20.orientation === "horizontal", a20 = Y15(() => s16("SCROLL_END"), 100), [i23, s16] = de8("hidden", { hidden: { SCROLL: "scrolling" }, scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" }, interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" }, idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" } });
  return n17.useEffect(() => {
    if (i23 === "idle") {
      let f21 = window.setTimeout(() => s16("HIDE"), r18.scrollHideDelay);
      return () => window.clearTimeout(f21);
    }
  }, [i23, r18.scrollHideDelay, s16]), n17.useEffect(() => {
    let f21 = r18.viewport, d14 = l20 ? "scrollLeft" : "scrollTop";
    if (f21) {
      let b21 = f21[d14], u20 = () => {
        let S18 = f21[d14];
        b21 !== S18 && (s16("SCROLL"), a20()), b21 = S18;
      };
      return f21.addEventListener("scroll", u20), () => f21.removeEventListener("scroll", u20);
    }
  }, [r18.viewport, l20, s16, a20]), h19(y3, { present: t18 || i23 !== "hidden", children: h19(k14, { "data-state": i23 === "hidden" ? "hidden" : "visible", ...c15, ref: o15, onPointerEnter: f2(e20.onPointerEnter, () => s16("POINTER_ENTER")), onPointerLeave: f2(e20.onPointerLeave, () => s16("POINTER_LEAVE")) }) });
});
var Q14 = n17.forwardRef((e20, o15) => {
  let t18 = v17(R14, e20.__scopeScrollArea), { forceMount: c15, ...r18 } = e20, [l20, a20] = n17.useState(false), i23 = e20.orientation === "horizontal", s16 = Y15(() => {
    if (t18.viewport) {
      let f21 = t18.viewport.offsetWidth < t18.viewport.scrollWidth, d14 = t18.viewport.offsetHeight < t18.viewport.scrollHeight;
      a20(i23 ? f21 : d14);
    }
  }, 10);
  return T16(t18.viewport, s16), T16(t18.content, s16), h19(y3, { present: c15 || l20, children: h19(k14, { "data-state": l20 ? "visible" : "hidden", ...r18, ref: o15 }) });
});
var k14 = n17.forwardRef((e20, o15) => {
  let { orientation: t18 = "vertical", ...c15 } = e20, r18 = v17(R14, e20.__scopeScrollArea), l20 = n17.useRef(null), a20 = n17.useRef(0), [i23, s16] = n17.useState({ content: 0, viewport: 0, scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 } }), f21 = oe11(i23.viewport, i23.content), d14 = { ...c15, sizes: i23, onSizesChange: s16, hasThumb: f21 > 0 && f21 < 1, onThumbChange: (u20) => l20.current = u20, onThumbPointerUp: () => a20.current = 0, onThumbPointerDown: (u20) => a20.current = u20 };
  function b21(u20, S18) {
    return Pe6(u20, a20.current, i23, S18);
  }
  return t18 === "horizontal" ? h19(ve10, { ...d14, ref: o15, onThumbPositionChange: () => {
    if (r18.viewport && l20.current) {
      let u20 = r18.viewport.scrollLeft, S18 = F8(u20, i23, r18.dir);
      l20.current.style.transform = `translate3d(${S18}px, 0, 0)`;
    }
  }, onWheelScroll: (u20) => {
    r18.viewport && (r18.viewport.scrollLeft = u20);
  }, onDragScroll: (u20) => {
    r18.viewport && (r18.viewport.scrollLeft = b21(u20, r18.dir));
  } }) : t18 === "vertical" ? h19(pe8, { ...d14, ref: o15, onThumbPositionChange: () => {
    if (r18.viewport && l20.current) {
      let u20 = r18.viewport.scrollTop, S18 = F8(u20, i23);
      l20.current.style.transform = `translate3d(0, ${S18}px, 0)`;
    }
  }, onWheelScroll: (u20) => {
    r18.viewport && (r18.viewport.scrollTop = u20);
  }, onDragScroll: (u20) => {
    r18.viewport && (r18.viewport.scrollTop = b21(u20));
  } }) : null;
});
var ve10 = n17.forwardRef((e20, o15) => {
  let { sizes: t18, onSizesChange: c15, ...r18 } = e20, l20 = v17(R14, e20.__scopeScrollArea), [a20, i23] = n17.useState(), s16 = n17.useRef(null), f21 = s(o15, s16, l20.onScrollbarXChange);
  return n17.useEffect(() => {
    s16.current && i23(getComputedStyle(s16.current));
  }, [s16]), h19(ee13, { "data-orientation": "horizontal", ...r18, ref: f21, sizes: t18, style: { bottom: 0, left: l20.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0, right: l20.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0, "--radix-scroll-area-thumb-width": X17(t18) + "px", ...e20.style }, onThumbPointerDown: (d14) => e20.onThumbPointerDown(d14.x), onDragScroll: (d14) => e20.onDragScroll(d14.x), onWheelScroll: (d14, b21) => {
    if (l20.viewport) {
      let u20 = l20.viewport.scrollLeft + d14.deltaX;
      e20.onWheelScroll(u20), le7(u20, b21) && d14.preventDefault();
    }
  }, onResize: () => {
    s16.current && l20.viewport && a20 && c15({ content: l20.viewport.scrollWidth, viewport: l20.viewport.offsetWidth, scrollbar: { size: s16.current.clientWidth, paddingStart: O17(a20.paddingLeft), paddingEnd: O17(a20.paddingRight) } });
  } });
});
var pe8 = n17.forwardRef((e20, o15) => {
  let { sizes: t18, onSizesChange: c15, ...r18 } = e20, l20 = v17(R14, e20.__scopeScrollArea), [a20, i23] = n17.useState(), s16 = n17.useRef(null), f21 = s(o15, s16, l20.onScrollbarYChange);
  return n17.useEffect(() => {
    s16.current && i23(getComputedStyle(s16.current));
  }, [s16]), h19(ee13, { "data-orientation": "vertical", ...r18, ref: f21, sizes: t18, style: { top: 0, right: l20.dir === "ltr" ? 0 : void 0, left: l20.dir === "rtl" ? 0 : void 0, bottom: "var(--radix-scroll-area-corner-height)", "--radix-scroll-area-thumb-height": X17(t18) + "px", ...e20.style }, onThumbPointerDown: (d14) => e20.onThumbPointerDown(d14.y), onDragScroll: (d14) => e20.onDragScroll(d14.y), onWheelScroll: (d14, b21) => {
    if (l20.viewport) {
      let u20 = l20.viewport.scrollTop + d14.deltaY;
      e20.onWheelScroll(u20), le7(u20, b21) && d14.preventDefault();
    }
  }, onResize: () => {
    s16.current && l20.viewport && a20 && c15({ content: l20.viewport.scrollHeight, viewport: l20.viewport.offsetHeight, scrollbar: { size: s16.current.clientHeight, paddingStart: O17(a20.paddingTop), paddingEnd: O17(a20.paddingBottom) } });
  } });
});
var [we7, Z14] = q17(R14);
var ee13 = n17.forwardRef((e20, o15) => {
  let { __scopeScrollArea: t18, sizes: c15, hasThumb: r18, onThumbChange: l20, onThumbPointerUp: a20, onThumbPointerDown: i23, onThumbPositionChange: s16, onDragScroll: f21, onWheelScroll: d14, onResize: b21, ...u20 } = e20, S18 = v17(R14, t18), [w18, y21] = n17.useState(null), M17 = s(o15, (m20) => y21(m20)), g21 = n17.useRef(null), _22 = n17.useRef(""), U15 = S18.viewport, D18 = c15.content - c15.viewport, W19 = u3(d14), x19 = u3(s16), H15 = Y15(b21, 10);
  function z17(m20) {
    if (g21.current) {
      let p16 = m20.clientX - g21.current.left, E25 = m20.clientY - g21.current.top;
      f21({ x: p16, y: E25 });
    }
  }
  return n17.useEffect(() => {
    let m20 = (p16) => {
      let E25 = p16.target;
      w18?.contains(E25) && W19(p16, D18);
    };
    return document.addEventListener("wheel", m20, { passive: false }), () => document.removeEventListener("wheel", m20, { passive: false });
  }, [U15, w18, D18, W19]), n17.useEffect(x19, [c15, x19]), T16(w18, H15), T16(S18.content, H15), h19(we7, { scope: t18, scrollbar: w18, hasThumb: r18, onThumbChange: u3(l20), onThumbPointerUp: u3(a20), onThumbPositionChange: x19, onThumbPointerDown: u3(i23), children: h19(v2.div, { ...u20, ref: M17, style: { position: "absolute", ...u20.style }, onPointerDown: f2(e20.onPointerDown, (m20) => {
    m20.button === 0 && (m20.target.setPointerCapture(m20.pointerId), g21.current = w18.getBoundingClientRect(), _22.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", S18.viewport && (S18.viewport.style.scrollBehavior = "auto"), z17(m20));
  }), onPointerMove: f2(e20.onPointerMove, z17), onPointerUp: f2(e20.onPointerUp, (m20) => {
    let p16 = m20.target;
    p16.hasPointerCapture(m20.pointerId) && p16.releasePointerCapture(m20.pointerId), document.body.style.webkitUserSelect = _22.current, S18.viewport && (S18.viewport.style.scrollBehavior = ""), g21.current = null;
  }) }) });
});
var N21 = "ScrollAreaThumb";
var te11 = n17.forwardRef((e20, o15) => {
  let { forceMount: t18, ...c15 } = e20, r18 = Z14(N21, e20.__scopeScrollArea);
  return h19(y3, { present: t18 || r18.hasThumb, children: h19(Re6, { ref: o15, ...c15 }) });
});
var Re6 = n17.forwardRef((e20, o15) => {
  let { __scopeScrollArea: t18, style: c15, ...r18 } = e20, l20 = v17(N21, t18), a20 = Z14(N21, t18), { onThumbPositionChange: i23 } = a20, s16 = s(o15, (b21) => a20.onThumbChange(b21)), f21 = n17.useRef(void 0), d14 = Y15(() => {
    f21.current && (f21.current(), f21.current = void 0);
  }, 100);
  return n17.useEffect(() => {
    let b21 = l20.viewport;
    if (b21) {
      let u20 = () => {
        if (d14(), !f21.current) {
          let S18 = Ce8(b21, i23);
          f21.current = S18, i23();
        }
      };
      return i23(), b21.addEventListener("scroll", u20), () => b21.removeEventListener("scroll", u20);
    }
  }, [l20.viewport, d14, i23]), h19(v2.div, { "data-state": a20.hasThumb ? "visible" : "hidden", ...r18, ref: s16, style: { width: "var(--radix-scroll-area-thumb-width)", height: "var(--radix-scroll-area-thumb-height)", ...c15 }, onPointerDownCapture: f2(e20.onPointerDownCapture, (b21) => {
    let S18 = b21.target.getBoundingClientRect(), w18 = b21.clientX - S18.left, y21 = b21.clientY - S18.top;
    a20.onThumbPointerDown({ x: w18, y: y21 });
  }), onPointerUp: f2(e20.onPointerUp, a20.onThumbPointerUp) });
});
te11.displayName = N21;
var B13 = "ScrollAreaCorner";
var re12 = n17.forwardRef((e20, o15) => {
  let t18 = v17(B13, e20.__scopeScrollArea), c15 = !!(t18.scrollbarX && t18.scrollbarY);
  return t18.type !== "scroll" && c15 ? h19(ge12, { ...e20, ref: o15 }) : null;
});
re12.displayName = B13;
var ge12 = n17.forwardRef((e20, o15) => {
  let { __scopeScrollArea: t18, ...c15 } = e20, r18 = v17(B13, t18), [l20, a20] = n17.useState(0), [i23, s16] = n17.useState(0), f21 = !!(l20 && i23);
  return T16(r18.scrollbarX, () => {
    let d14 = r18.scrollbarX?.offsetHeight || 0;
    r18.onCornerHeightChange(d14), s16(d14);
  }), T16(r18.scrollbarY, () => {
    let d14 = r18.scrollbarY?.offsetWidth || 0;
    r18.onCornerWidthChange(d14), a20(d14);
  }), f21 ? h19(v2.div, { ...c15, ref: o15, style: { width: l20, height: i23, position: "absolute", right: r18.dir === "ltr" ? 0 : void 0, left: r18.dir === "rtl" ? 0 : void 0, bottom: 0, ...e20.style } }) : null;
});
function O17(e20) {
  return e20 ? parseInt(e20, 10) : 0;
}
function oe11(e20, o15) {
  let t18 = e20 / o15;
  return isNaN(t18) ? 0 : t18;
}
function X17(e20) {
  let o15 = oe11(e20.viewport, e20.content), t18 = e20.scrollbar.paddingStart + e20.scrollbar.paddingEnd, c15 = (e20.scrollbar.size - t18) * o15;
  return Math.max(c15, 18);
}
function Pe6(e20, o15, t18, c15 = "ltr") {
  let r18 = X17(t18), l20 = r18 / 2, a20 = o15 || l20, i23 = r18 - a20, s16 = t18.scrollbar.paddingStart + a20, f21 = t18.scrollbar.size - t18.scrollbar.paddingEnd - i23, d14 = t18.content - t18.viewport, b21 = c15 === "ltr" ? [0, d14] : [d14 * -1, 0];
  return ne15([s16, f21], b21)(e20);
}
function F8(e20, o15, t18 = "ltr") {
  let c15 = X17(o15), r18 = o15.scrollbar.paddingStart + o15.scrollbar.paddingEnd, l20 = o15.scrollbar.size - r18, a20 = o15.content - o15.viewport, i23 = l20 - c15, s16 = t18 === "ltr" ? [0, a20] : [a20 * -1, 0], f21 = m14(e20, s16);
  return ne15([0, a20], [0, i23])(f21);
}
function ne15(e20, o15) {
  return (t18) => {
    if (e20[0] === e20[1] || o15[0] === o15[1]) return o15[0];
    let c15 = (o15[1] - o15[0]) / (e20[1] - e20[0]);
    return o15[0] + c15 * (t18 - e20[0]);
  };
}
function le7(e20, o15) {
  return e20 > 0 && e20 < o15;
}
var Ce8 = (e20, o15 = () => {
}) => {
  let t18 = { left: e20.scrollLeft, top: e20.scrollTop }, c15 = 0;
  return function r18() {
    let l20 = { left: e20.scrollLeft, top: e20.scrollTop }, a20 = t18.left !== l20.left, i23 = t18.top !== l20.top;
    (a20 || i23) && o15(), t18 = l20, c15 = window.requestAnimationFrame(r18);
  }(), () => window.cancelAnimationFrame(c15);
};
function Y15(e20, o15) {
  let t18 = u3(e20), c15 = n17.useRef(0);
  return n17.useEffect(() => () => window.clearTimeout(c15.current), []), n17.useCallback(() => {
    window.clearTimeout(c15.current), c15.current = window.setTimeout(t18, o15);
  }, [t18, o15]);
}
function T16(e20, o15) {
  let t18 = u3(o15);
  e5(() => {
    let c15 = 0;
    if (e20) {
      let r18 = new ResizeObserver(() => {
        cancelAnimationFrame(c15), c15 = window.requestAnimationFrame(t18);
      });
      return r18.observe(e20), () => {
        window.cancelAnimationFrame(c15), r18.unobserve(e20);
      };
    }
  }, [e20, t18]);
}

// http-url:https://esm.sh/@radix-ui/react-select@2.3.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-select.mjs
import * as t15 from "react";
import * as Pe7 from "react-dom";
import { Fragment as Te5, jsx as p13, jsxs as pe9 } from "react/jsx-runtime";
var it3 = [" ", "Enter", "ArrowUp", "ArrowDown"];
var dt3 = [" ", "Enter"];
var te12 = "Select";
var [fe10, me10, ut3] = re(te12);
var [oe12, vo] = $2(te12, [ut3, Fe2]);
var he11 = Fe2();
var [pt3, q18] = oe12(te12);
var [ft3, mt3] = oe12(te12);
var ht3 = "SelectProvider";
function Me8(o15) {
  let { __scopeSelect: c15, children: e20, open: a20, defaultOpen: n21, onOpenChange: f21, value: r18, defaultValue: i23, onValueChange: l20, dir: u20, name: S18, autoComplete: R18, disabled: y21, required: P16, form: C18, internal_do_not_use_render: s16 } = o15, h23 = he11(c15), [g21, d14] = t15.useState(null), [v18, B18] = t15.useState(null), [b21, Z17] = t15.useState(false), E25 = v5(u20), [A17, ne18] = D({ prop: a20, defaultProp: n21 ?? false, onChange: f21, caller: te12 }), [re16, H15] = D({ prop: r18, defaultProp: i23, onChange: l20, caller: te12 }), F11 = t15.useRef(null), $19 = g21 ? !!C18 || !!g21.closest("form") : true, [U15, D18] = t15.useState(/* @__PURE__ */ new Set()), W19 = n5(), K19 = Array.from(U15).map((V19) => V19.props.value).join(";"), G20 = t15.useCallback((V19) => {
    D18((J18) => new Set(J18).add(V19));
  }, []), L24 = t15.useCallback((V19) => {
    D18((J18) => {
      let ae15 = new Set(J18);
      return ae15.delete(V19), ae15;
    });
  }, []), ce12 = { required: P16, trigger: g21, onTriggerChange: d14, valueNode: v18, onValueNodeChange: B18, valueNodeHasChildren: b21, onValueNodeHasChildrenChange: Z17, contentId: W19, value: re16, onValueChange: H15, open: A17, onOpenChange: ne18, dir: E25, triggerPointerDownPosRef: F11, disabled: y21, name: S18, autoComplete: R18, form: C18, nativeOptions: U15, nativeSelectKey: K19, isFormControl: $19 };
  return p13(Be2, { ...h23, children: p13(pt3, { scope: c15, ...ce12, children: p13(fe10.Provider, { scope: c15, children: p13(ft3, { scope: c15, onNativeOptionAdd: G20, onNativeOptionRemove: L24, children: Gt(s16) ? s16(ce12) : e20 }) }) }) });
}
Me8.displayName = ht3;
var vt3 = (o15) => {
  let { __scopeSelect: c15, children: e20, ...a20 } = o15;
  return p13(Me8, { __scopeSelect: c15, ...a20, internal_do_not_use_render: ({ isFormControl: n21 }) => pe9(Te5, { children: [e20, n21 ? p13(Ye2, { __scopeSelect: c15 }) : null] }) });
};
vt3.displayName = te12;
var Oe6 = "SelectTrigger";
var St2 = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, disabled: a20 = false, ...n21 } = o15, f21 = he11(e20), r18 = q18(Oe6, e20), i23 = r18.disabled || a20, l20 = s(c15, r18.onTriggerChange), u20 = me10(e20), S18 = t15.useRef("touch"), [R18, y21, P16] = je5((s16) => {
    let h23 = u20().filter((v18) => !v18.disabled), g21 = h23.find((v18) => v18.value === r18.value), d14 = qe3(h23, s16, g21);
    d14 !== void 0 && r18.onValueChange(d14.value);
  }), C18 = (s16) => {
    i23 || (r18.onOpenChange(true), P16()), s16 && (r18.triggerPointerDownPosRef.current = { x: Math.round(s16.pageX), y: Math.round(s16.pageY) });
  };
  return p13(je3, { asChild: true, ...f21, children: p13(v2.button, { type: "button", role: "combobox", "aria-controls": r18.open ? r18.contentId : void 0, "aria-expanded": r18.open, "aria-required": r18.required, "aria-autocomplete": "none", dir: r18.dir, "data-state": r18.open ? "open" : "closed", disabled: i23, "data-disabled": i23 ? "" : void 0, "data-placeholder": ve11(r18.value) ? "" : void 0, ...n21, ref: l20, onClick: f2(n21.onClick, (s16) => {
    s16.currentTarget.focus(), S18.current !== "mouse" && C18(s16);
  }), onPointerDown: f2(n21.onPointerDown, (s16) => {
    S18.current = s16.pointerType;
    let h23 = s16.target;
    h23.hasPointerCapture(s16.pointerId) && h23.releasePointerCapture(s16.pointerId), s16.button === 0 && s16.ctrlKey === false && s16.pointerType === "mouse" && (C18(s16), s16.preventDefault());
  }), onKeyDown: f2(n21.onKeyDown, (s16) => {
    let h23 = R18.current !== "";
    !(s16.ctrlKey || s16.altKey || s16.metaKey) && s16.key.length === 1 && y21(s16.key), !(h23 && s16.key === " ") && it3.includes(s16.key) && (C18(), s16.preventDefault());
  }) }) });
});
St2.displayName = Oe6;
var Ae8 = "SelectValue";
var gt3 = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, className: a20, style: n21, children: f21, placeholder: r18 = "", ...i23 } = o15, l20 = q18(Ae8, e20), { onValueNodeHasChildrenChange: u20 } = l20, S18 = f21 !== void 0, R18 = s(c15, l20.onValueNodeChange);
  e5(() => {
    u20(S18);
  }, [u20, S18]);
  let y21 = ve11(l20.value);
  return p13(v2.span, { ...i23, asChild: y21 ? false : i23.asChild, ref: R18, style: { pointerEvents: "none" }, children: p13(t15.Fragment, { children: y21 ? r18 : f21 }, y21 ? "placeholder" : "value") });
});
gt3.displayName = Ae8;
var Rt2 = "SelectIcon";
var wt3 = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, children: a20, ...n21 } = o15;
  return p13(v2.span, { "aria-hidden": true, ...n21, ref: c15, children: a20 || "\u25BC" });
});
wt3.displayName = Rt2;
var De4 = "SelectPortal";
var [Ct3, xt3] = oe12(De4, { forceMount: void 0 });
var yt4 = (o15) => {
  let { __scopeSelect: c15, forceMount: e20, ...a20 } = o15;
  return p13(Ct3, { scope: o15.__scopeSelect, forceMount: e20, children: p13(e10, { asChild: true, ...a20 }) });
};
yt4.displayName = De4;
var Y16 = "SelectContent";
var Pt3 = t15.forwardRef((o15, c15) => {
  let e20 = xt3(Y16, o15.__scopeSelect), { forceMount: a20 = e20.forceMount, ...n21 } = o15, f21 = q18(Y16, o15.__scopeSelect), [r18, i23] = t15.useState();
  return e5(() => {
    i23(new DocumentFragment());
  }, []), p13(y3, { present: a20 || f21.open, children: ({ present: l20 }) => l20 ? p13(ke5, { ...n21, ref: c15 }) : p13(Le5, { ...n21, fragment: r18 }) });
});
Pt3.displayName = Y16;
var Le5 = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, children: a20, fragment: n21 } = o15;
  return n21 ? Pe7.createPortal(p13(Ve3, { scope: e20, children: p13(fe10.Slot, { scope: e20, children: p13("div", { ref: c15, children: a20 }) }) }), n21) : null;
});
Le5.displayName = "SelectContentFragment";
var O18 = 10;
var [Ve3, X18] = oe12(Y16);
var It2 = "SelectContentImpl";
var Tt2 = b2("SelectContent.RemoveScroll");
var ke5 = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20 } = o15, { position: a20 = "item-aligned", onCloseAutoFocus: n21, onEscapeKeyDown: f21, onPointerDownOutside: r18, side: i23, sideOffset: l20, align: u20, alignOffset: S18, arrowPadding: R18, collisionBoundary: y21, collisionPadding: P16, sticky: C18, hideWhenDetached: s16, avoidCollisions: h23, ...g21 } = o15, d14 = q18(Y16, e20), [v18, B18] = t15.useState(null), [b21, Z17] = t15.useState(null), E25 = s(c15, (m20) => B18(m20)), [A17, ne18] = t15.useState(null), [re16, H15] = t15.useState(null), F11 = me10(e20), [$19, U15] = t15.useState(false), D18 = t15.useRef(false);
  t15.useEffect(() => {
    if (v18) return S8(v18);
  }, [v18]), a4();
  let W19 = t15.useCallback((m20) => {
    let [I19, ...N26] = F11().map((T21) => T21.ref.current), [w18] = N26.slice(-1), x19 = document.activeElement;
    for (let T21 of m20) if (T21 === x19 || (T21?.scrollIntoView({ block: "nearest" }), T21 === I19 && b21 && (b21.scrollTop = 0), T21 === w18 && b21 && (b21.scrollTop = b21.scrollHeight), T21?.focus(), document.activeElement !== x19)) return;
  }, [F11, b21]), K19 = t15.useCallback(() => W19([A17, v18]), [W19, A17, v18]);
  t15.useEffect(() => {
    $19 && K19();
  }, [$19, K19]);
  let { onOpenChange: G20, triggerPointerDownPosRef: L24 } = d14;
  t15.useEffect(() => {
    if (v18) {
      let m20 = { x: 0, y: 0 }, I19 = (w18) => {
        m20 = { x: Math.abs(Math.round(w18.pageX) - (L24.current?.x ?? 0)), y: Math.abs(Math.round(w18.pageY) - (L24.current?.y ?? 0)) };
      }, N26 = (w18) => {
        m20.x <= 10 && m20.y <= 10 ? w18.preventDefault() : w18.composedPath().includes(v18) || G20(false), document.removeEventListener("pointermove", I19), L24.current = null;
      };
      return L24.current !== null && (document.addEventListener("pointermove", I19), document.addEventListener("pointerup", N26, { capture: true, once: true })), () => {
        document.removeEventListener("pointermove", I19), document.removeEventListener("pointerup", N26, { capture: true });
      };
    }
  }, [v18, G20, L24]), t15.useEffect(() => {
    let m20 = () => G20(false);
    return window.addEventListener("blur", m20), window.addEventListener("resize", m20), () => {
      window.removeEventListener("blur", m20), window.removeEventListener("resize", m20);
    };
  }, [G20]);
  let [ce12, V19] = je5((m20) => {
    let I19 = F11().filter((x19) => !x19.disabled), N26 = I19.find((x19) => x19.ref.current === document.activeElement), w18 = qe3(I19, m20, N26);
    w18 && setTimeout(() => w18.ref.current?.focus());
  }), J18 = t15.useCallback((m20, I19, N26) => {
    let w18 = !D18.current && !N26;
    (d14.value !== void 0 && d14.value === I19 || w18) && (ne18(m20), w18 && (D18.current = true));
  }, [d14.value]), ae15 = t15.useCallback(() => v18?.focus(), [v18]), le11 = t15.useCallback((m20, I19, N26) => {
    let w18 = !D18.current && !N26;
    (d14.value !== void 0 && d14.value === I19 || w18) && H15(m20);
  }, [d14.value]), de12 = a20 === "popper" ? we8 : Be5, se12 = de12 === we8 ? { side: i23, sideOffset: l20, align: u20, alignOffset: S18, arrowPadding: R18, collisionBoundary: y21, collisionPadding: P16, sticky: C18, hideWhenDetached: s16, avoidCollisions: h23 } : {};
  return p13(Ve3, { scope: e20, content: v18, viewport: b21, onViewportChange: Z17, itemRefCallback: J18, selectedItem: A17, onItemLeave: ae15, itemTextRefCallback: le11, focusSelectedItem: K19, selectedItemText: re16, position: a20, isPositioned: $19, searchRef: ce12, children: p13(l10, { as: Tt2, allowPinchZoom: true, children: p13(L4, { asChild: true, trapped: d14.open, onMountAutoFocus: (m20) => {
    m20.preventDefault();
  }, onUnmountAutoFocus: f2(n21, (m20) => {
    d14.trigger?.focus({ preventScroll: true }), m20.preventDefault();
  }), children: p13(_2, { asChild: true, disableOutsidePointerEvents: true, onEscapeKeyDown: f21, onPointerDownOutside: r18, onFocusOutside: (m20) => m20.preventDefault(), onDismiss: () => d14.onOpenChange(false), children: p13(de12, { role: "listbox", id: d14.contentId, "data-state": d14.open ? "open" : "closed", dir: d14.dir, onContextMenu: (m20) => m20.preventDefault(), ...g21, ...se12, onPlaced: () => U15(true), ref: E25, style: { display: "flex", flexDirection: "column", outline: "none", ...g21.style }, onKeyDown: f2(g21.onKeyDown, (m20) => {
    let I19 = m20.ctrlKey || m20.altKey || m20.metaKey;
    if (m20.key === "Tab" && m20.preventDefault(), !I19 && m20.key.length === 1 && V19(m20.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(m20.key)) {
      let w18 = F11().filter((x19) => !x19.disabled).map((x19) => x19.ref.current);
      if (["ArrowUp", "End"].includes(m20.key) && (w18 = w18.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(m20.key)) {
        let x19 = m20.target, T21 = w18.indexOf(x19);
        w18 = w18.slice(T21 + 1);
      }
      setTimeout(() => W19(w18)), m20.preventDefault();
    }
  }) }) }) }) }) });
});
ke5.displayName = It2;
var _t3 = "SelectItemAlignedPosition";
var Be5 = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, onPlaced: a20, ...n21 } = o15, f21 = q18(Y16, e20), r18 = X18(Y16, e20), [i23, l20] = t15.useState(null), [u20, S18] = t15.useState(null), R18 = s(c15, (E25) => S18(E25)), y21 = me10(e20), P16 = t15.useRef(false), C18 = t15.useRef(true), { viewport: s16, selectedItem: h23, selectedItemText: g21, focusSelectedItem: d14 } = r18, v18 = t15.useCallback(() => {
    if (f21.trigger && f21.valueNode && i23 && u20 && s16 && h23 && g21) {
      let E25 = f21.trigger.getBoundingClientRect(), A17 = u20.getBoundingClientRect(), ne18 = f21.valueNode.getBoundingClientRect(), re16 = g21.getBoundingClientRect();
      if (f21.dir !== "rtl") {
        let x19 = re16.left - A17.left, T21 = ne18.left - x19, Q17 = E25.left - T21, ee16 = E25.width + Q17, Se6 = Math.max(ee16, A17.width), ge14 = window.innerWidth - O18, Re11 = m14(T21, [O18, Math.max(O18, ge14 - Se6)]);
        i23.style.minWidth = ee16 + "px", i23.style.left = Re11 + "px";
      } else {
        let x19 = A17.right - re16.right, T21 = window.innerWidth - ne18.right - x19, Q17 = window.innerWidth - E25.right - T21, ee16 = E25.width + Q17, Se6 = Math.max(ee16, A17.width), ge14 = window.innerWidth - O18, Re11 = m14(T21, [O18, Math.max(O18, ge14 - Se6)]);
        i23.style.minWidth = ee16 + "px", i23.style.right = Re11 + "px";
      }
      let H15 = y21(), F11 = window.innerHeight - O18 * 2, $19 = s16.scrollHeight, U15 = window.getComputedStyle(u20), D18 = parseInt(U15.borderTopWidth, 10), W19 = parseInt(U15.paddingTop, 10), K19 = parseInt(U15.borderBottomWidth, 10), G20 = parseInt(U15.paddingBottom, 10), L24 = D18 + W19 + $19 + G20 + K19, ce12 = Math.min(h23.offsetHeight * 5, L24), V19 = window.getComputedStyle(s16), J18 = parseInt(V19.paddingTop, 10), ae15 = parseInt(V19.paddingBottom, 10), le11 = E25.top + E25.height / 2 - O18, de12 = F11 - le11, se12 = h23.offsetHeight / 2, m20 = h23.offsetTop + se12, I19 = D18 + W19 + m20, N26 = L24 - I19;
      if (I19 <= le11) {
        let x19 = H15.length > 0 && h23 === H15[H15.length - 1].ref.current;
        i23.style.bottom = "0px";
        let T21 = u20.clientHeight - s16.offsetTop - s16.offsetHeight, Q17 = Math.max(de12, se12 + (x19 ? ae15 : 0) + T21 + K19), ee16 = I19 + Q17;
        i23.style.height = ee16 + "px";
      } else {
        let x19 = H15.length > 0 && h23 === H15[0].ref.current;
        i23.style.top = "0px";
        let Q17 = Math.max(le11, D18 + s16.offsetTop + (x19 ? J18 : 0) + se12) + N26;
        i23.style.height = Q17 + "px", s16.scrollTop = I19 - le11 + s16.offsetTop;
      }
      i23.style.margin = `${O18}px 0`, i23.style.minHeight = ce12 + "px", i23.style.maxHeight = F11 + "px", a20?.(), requestAnimationFrame(() => P16.current = true);
    }
  }, [y21, f21.trigger, f21.valueNode, i23, u20, s16, h23, g21, f21.dir, a20]);
  e5(() => v18(), [v18]);
  let [B18, b21] = t15.useState();
  e5(() => {
    u20 && b21(window.getComputedStyle(u20).zIndex);
  }, [u20]);
  let Z17 = t15.useCallback((E25) => {
    E25 && C18.current === true && (v18(), d14?.(), C18.current = false);
  }, [v18, d14]);
  return p13(Et3, { scope: e20, contentWrapper: i23, shouldExpandOnScrollRef: P16, onScrollButtonChange: Z17, children: p13("div", { ref: l20, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: B18 }, children: p13(v2.div, { ...n21, ref: R18, style: { boxSizing: "border-box", maxHeight: "100%", ...n21.style } }) }) });
});
Be5.displayName = _t3;
var bt3 = "SelectPopperPosition";
var we8 = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, align: a20 = "start", collisionPadding: n21 = O18, ...f21 } = o15, r18 = he11(e20);
  return p13(Le2, { ...r18, ...f21, ref: c15, align: a20, collisionPadding: n21, style: { boxSizing: "border-box", ...f21.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } });
});
we8.displayName = bt3;
var [Et3, _e8] = oe12(Y16, {});
var Ce9 = "SelectViewport";
var Nt = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, nonce: a20, ...n21 } = o15, f21 = X18(Ce9, e20), r18 = _e8(Ce9, e20), i23 = s(c15, f21.onViewportChange), l20 = t15.useRef(0);
  return pe9(Te5, { children: [p13("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: a20 }), p13(fe10.Slot, { scope: e20, children: p13(v2.div, { "data-radix-select-viewport": "", role: "presentation", ...n21, ref: i23, style: { position: "relative", flex: 1, overflow: "hidden auto", ...n21.style }, onScroll: f2(n21.onScroll, (u20) => {
    let S18 = u20.currentTarget, { contentWrapper: R18, shouldExpandOnScrollRef: y21 } = r18;
    if (y21?.current && R18) {
      let P16 = Math.abs(l20.current - S18.scrollTop);
      if (P16 > 0) {
        let C18 = window.innerHeight - O18 * 2, s16 = parseFloat(R18.style.minHeight), h23 = parseFloat(R18.style.height), g21 = Math.max(s16, h23);
        if (g21 < C18) {
          let d14 = g21 + P16, v18 = Math.min(C18, d14), B18 = d14 - v18;
          R18.style.height = v18 + "px", R18.style.bottom === "0px" && (S18.scrollTop = B18 > 0 ? B18 : 0, R18.style.justifyContent = "flex-end");
        }
      }
    }
    l20.current = S18.scrollTop;
  }) }) })] });
});
Nt.displayName = Ce9;
var He3 = "SelectGroup";
var [Mt3, Ot2] = oe12(He3);
var At2 = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, ...a20 } = o15, n21 = n5();
  return p13(Mt3, { scope: e20, id: n21, children: p13(v2.div, { role: "group", "aria-labelledby": n21, ...a20, ref: c15 }) });
});
At2.displayName = He3;
var Fe8 = "SelectLabel";
var Dt = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, ...a20 } = o15, n21 = Ot2(Fe8, e20);
  return p13(v2.div, { id: n21.id, ...a20, ref: c15 });
});
Dt.displayName = Fe8;
var ue8 = "SelectItem";
var [Lt2, Ue5] = oe12(ue8);
var Vt = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, value: a20, disabled: n21 = false, textValue: f21, ...r18 } = o15, i23 = q18(ue8, e20), l20 = X18(ue8, e20), u20 = i23.value === a20, [S18, R18] = t15.useState(f21 ?? ""), [y21, P16] = t15.useState(false), C18 = s(c15, (d14) => l20.itemRefCallback?.(d14, a20, n21)), s16 = n5(), h23 = t15.useRef("touch"), g21 = () => {
    n21 || (i23.onValueChange(a20), i23.onOpenChange(false));
  };
  return p13(Lt2, { scope: e20, value: a20, disabled: n21, textId: s16, isSelected: u20, onItemTextChange: t15.useCallback((d14) => {
    R18((v18) => v18 || (d14?.textContent ?? "").trim());
  }, []), children: p13(fe10.ItemSlot, { scope: e20, value: a20, disabled: n21, textValue: S18, children: p13(v2.div, { role: "option", "aria-labelledby": s16, "data-highlighted": y21 ? "" : void 0, "aria-selected": u20 && y21, "data-state": u20 ? "checked" : "unchecked", "aria-disabled": n21 || void 0, "data-disabled": n21 ? "" : void 0, tabIndex: n21 ? void 0 : -1, ...r18, ref: C18, onFocus: f2(r18.onFocus, () => P16(true)), onBlur: f2(r18.onBlur, () => P16(false)), onClick: f2(r18.onClick, () => {
    h23.current !== "mouse" && g21();
  }), onPointerUp: f2(r18.onPointerUp, () => {
    h23.current === "mouse" && g21();
  }), onPointerDown: f2(r18.onPointerDown, (d14) => {
    h23.current = d14.pointerType;
  }), onPointerMove: f2(r18.onPointerMove, (d14) => {
    h23.current = d14.pointerType, n21 ? l20.onItemLeave?.() : h23.current === "mouse" && d14.currentTarget.focus({ preventScroll: true });
  }), onPointerLeave: f2(r18.onPointerLeave, (d14) => {
    d14.currentTarget === document.activeElement && l20.onItemLeave?.();
  }), onKeyDown: f2(r18.onKeyDown, (d14) => {
    l20.searchRef?.current !== "" && d14.key === " " || (dt3.includes(d14.key) && g21(), d14.key === " " && d14.preventDefault());
  }) }) }) });
});
Vt.displayName = ue8;
var ie5 = "SelectItemText";
var kt3 = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, className: a20, style: n21, ...f21 } = o15, r18 = q18(ie5, e20), i23 = X18(ie5, e20), l20 = Ue5(ie5, e20), u20 = mt3(ie5, e20), [S18, R18] = t15.useState(null), y21 = s(c15, (g21) => R18(g21), l20.onItemTextChange, (g21) => i23.itemTextRefCallback?.(g21, l20.value, l20.disabled)), P16 = S18?.textContent, C18 = t15.useMemo(() => p13("option", { value: l20.value, disabled: l20.disabled, children: P16 }, l20.value), [l20.disabled, l20.value, P16]), { onNativeOptionAdd: s16, onNativeOptionRemove: h23 } = u20;
  return e5(() => (s16(C18), () => h23(C18)), [s16, h23, C18]), pe9(Te5, { children: [p13(v2.span, { id: l20.textId, ...f21, ref: y21 }), l20.isSelected && r18.valueNode && !r18.valueNodeHasChildren && !ve11(r18.value) ? Pe7.createPortal(f21.children, r18.valueNode) : null] });
});
kt3.displayName = ie5;
var We3 = "SelectItemIndicator";
var Bt = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, ...a20 } = o15;
  return Ue5(We3, e20).isSelected ? p13(v2.span, { "aria-hidden": true, ...a20, ref: c15 }) : null;
});
Bt.displayName = We3;
var xe6 = "SelectScrollUpButton";
var Ht = t15.forwardRef((o15, c15) => {
  let e20 = X18(xe6, o15.__scopeSelect), a20 = _e8(xe6, o15.__scopeSelect), [n21, f21] = t15.useState(false), r18 = s(c15, a20.onScrollButtonChange);
  return e5(() => {
    if (e20.viewport && e20.isPositioned) {
      let l20 = function() {
        let S18 = u20.scrollTop > 0;
        f21(S18);
      };
      var i23 = l20;
      let u20 = e20.viewport;
      return l20(), u20.addEventListener("scroll", l20), () => u20.removeEventListener("scroll", l20);
    }
  }, [e20.viewport, e20.isPositioned]), n21 ? p13(Ke5, { ...o15, ref: r18, onAutoScroll: () => {
    let { viewport: i23, selectedItem: l20 } = e20;
    i23 && l20 && (i23.scrollTop = i23.scrollTop - l20.offsetHeight);
  } }) : null;
});
Ht.displayName = xe6;
var ye9 = "SelectScrollDownButton";
var Ft = t15.forwardRef((o15, c15) => {
  let e20 = X18(ye9, o15.__scopeSelect), a20 = _e8(ye9, o15.__scopeSelect), [n21, f21] = t15.useState(false), r18 = s(c15, a20.onScrollButtonChange);
  return e5(() => {
    if (e20.viewport && e20.isPositioned) {
      let l20 = function() {
        let S18 = u20.scrollHeight - u20.clientHeight, R18 = Math.ceil(u20.scrollTop) < S18;
        f21(R18);
      };
      var i23 = l20;
      let u20 = e20.viewport;
      return l20(), u20.addEventListener("scroll", l20), () => u20.removeEventListener("scroll", l20);
    }
  }, [e20.viewport, e20.isPositioned]), n21 ? p13(Ke5, { ...o15, ref: r18, onAutoScroll: () => {
    let { viewport: i23, selectedItem: l20 } = e20;
    i23 && l20 && (i23.scrollTop = i23.scrollTop + l20.offsetHeight);
  } }) : null;
});
Ft.displayName = ye9;
var Ke5 = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, onAutoScroll: a20, ...n21 } = o15, f21 = X18("SelectScrollButton", e20), r18 = t15.useRef(null), i23 = me10(e20), l20 = t15.useCallback(() => {
    r18.current !== null && (window.clearInterval(r18.current), r18.current = null);
  }, []);
  return t15.useEffect(() => () => l20(), [l20]), e5(() => {
    i23().find((S18) => S18.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [i23]), p13(v2.div, { "aria-hidden": true, ...n21, ref: c15, style: { flexShrink: 0, ...n21.style }, onPointerDown: f2(n21.onPointerDown, () => {
    r18.current === null && (r18.current = window.setInterval(a20, 50));
  }), onPointerMove: f2(n21.onPointerMove, () => {
    f21.onItemLeave?.(), r18.current === null && (r18.current = window.setInterval(a20, 50));
  }), onPointerLeave: f2(n21.onPointerLeave, () => {
    l20();
  }) });
});
var Ut2 = "SelectSeparator";
var Wt = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, ...a20 } = o15;
  return p13(v2.div, { "aria-hidden": true, ...a20, ref: c15 });
});
Wt.displayName = Ut2;
var Ge5 = "SelectArrow";
var Kt = t15.forwardRef((o15, c15) => {
  let { __scopeSelect: e20, ...a20 } = o15, n21 = he11(e20);
  return X18(Ge5, e20).position === "popper" ? p13(Ue2, { ...n21, ...a20, ref: c15 }) : null;
});
Kt.displayName = Ge5;
var ze3 = "SelectBubbleInput";
var Ye2 = t15.forwardRef(({ __scopeSelect: o15, ...c15 }, e20) => {
  let a20 = q18(ze3, o15), { value: n21, onValueChange: f21, required: r18, disabled: i23, name: l20, autoComplete: u20, form: S18 } = a20, { nativeOptions: R18, nativeSelectKey: y21 } = a20, P16 = t15.useRef(null), C18 = s(e20, P16), s16 = n21 ?? "", h23 = u9(s16), g21 = Array.from(R18).some((d14) => (d14.props.value ?? "") === "");
  return t15.useEffect(() => {
    let d14 = P16.current;
    if (!d14) return;
    let v18 = window.HTMLSelectElement.prototype, b21 = Object.getOwnPropertyDescriptor(v18, "value").set;
    if (h23 !== s16 && b21) {
      let Z17 = new Event("change", { bubbles: true });
      b21.call(d14, s16), d14.dispatchEvent(Z17);
    }
  }, [h23, s16]), pe9(v2.select, { "aria-hidden": true, required: r18, tabIndex: -1, name: l20, autoComplete: u20, disabled: i23, form: S18, onChange: (d14) => f21(d14.target.value), ...c15, style: { ...d2, ...c15.style }, ref: C18, defaultValue: s16, children: [ve11(n21) && !g21 ? p13("option", { value: "" }) : null, Array.from(R18)] }, y21);
});
Ye2.displayName = ze3;
function Gt(o15) {
  return typeof o15 == "function";
}
function ve11(o15) {
  return o15 === "" || o15 === void 0;
}
function je5(o15) {
  let c15 = u3(o15), e20 = t15.useRef(""), a20 = t15.useRef(0), n21 = t15.useCallback((r18) => {
    let i23 = e20.current + r18;
    c15(i23), function l20(u20) {
      e20.current = u20, window.clearTimeout(a20.current), u20 !== "" && (a20.current = window.setTimeout(() => l20(""), 1e3));
    }(i23);
  }, [c15]), f21 = t15.useCallback(() => {
    e20.current = "", window.clearTimeout(a20.current);
  }, []);
  return t15.useEffect(() => () => window.clearTimeout(a20.current), []), [e20, n21, f21];
}
function qe3(o15, c15, e20) {
  let n21 = c15.length > 1 && Array.from(c15).every((u20) => u20 === c15[0]) ? c15[0] : c15, f21 = e20 ? o15.indexOf(e20) : -1, r18 = zt(o15, Math.max(f21, 0));
  n21.length === 1 && (r18 = r18.filter((u20) => u20 !== e20));
  let l20 = r18.find((u20) => u20.textValue.toLowerCase().startsWith(n21.toLowerCase()));
  return l20 !== e20 ? l20 : void 0;
}
function zt(o15, c15) {
  return o15.map((e20, a20) => o15[(c15 + a20) % o15.length]);
}

// http-url:https://esm.sh/@radix-ui/react-separator@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-separator.mjs
import * as i20 from "react";
import { jsx as m16 } from "react/jsx-runtime";
var d13 = "Separator";
var a15 = "horizontal";
var l17 = ["horizontal", "vertical"];
var n18 = i20.forwardRef((r18, e20) => {
  let { decorative: s16, orientation: t18 = a15, ...c15 } = r18, o15 = f18(t18) ? t18 : a15, p16 = s16 ? { role: "none" } : { "aria-orientation": o15 === "vertical" ? o15 : void 0, role: "separator" };
  return m16(v2.div, { "data-orientation": o15, ...p16, ...c15, ref: e20 });
});
n18.displayName = d13;
function f18(r18) {
  return l17.includes(r18);
}
var T17 = n18;

// http-url:https://esm.sh/@radix-ui/react-slider@1.4.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-slider.mjs
import * as c14 from "react";
import { Fragment as ge13, jsx as m17, jsxs as be10 } from "react/jsx-runtime";
var j17 = ["PageUp", "PageDown"];
var X19 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var W15 = { "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"], "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"] };
var C13 = "Slider";
var [z14, ve12, Re7] = re(C13);
var [F9, We4] = $2(C13, [Re7]);
var [we9, B14] = F9(C13);
var Pe8 = c14.forwardRef((e20, t18) => {
  let { name: n21, min: o15 = 0, max: r18 = 100, step: i23 = 1, orientation: d14 = "horizontal", disabled: s16 = false, minStepsBetweenThumbs: p16 = 0, defaultValue: u20 = [o15], value: S18, onValueChange: a20 = () => {
  }, onValueCommit: l20 = () => {
  }, inverted: g21 = false, form: w18, ...f21 } = e20, b21 = c14.useRef(/* @__PURE__ */ new Set()), h23 = c14.useRef(0), x19 = c14.useRef(false), y21 = d14 === "horizontal" ? xe7 : ye10, [P16 = [], U15] = D({ prop: S18, defaultProp: u20, onChange: (v18) => {
    [...b21.current][h23.current]?.focus({ preventScroll: true, focusVisible: x19.current }), x19.current = false, a20(v18);
  } }), V19 = c14.useRef(P16);
  function ce12(v18) {
    let _22 = Ie9(P16, v18);
    M17(v18, _22);
  }
  function le11(v18) {
    M17(v18, h23.current);
  }
  function de12() {
    let v18 = V19.current[h23.current];
    P16[h23.current] !== v18 && l20(P16);
  }
  function M17(v18, _22, { commit: k16 } = { commit: false }) {
    let Y20 = Ve4(i23), H15 = Ne6(Math.round((v18 - o15) / i23) * i23 + o15, Y20), I19 = m14(H15, [o15, r18]);
    U15((D18 = []) => {
      let E25 = Ce10(D18, I19, _22);
      if (Be6(E25, p16 * i23)) {
        h23.current = E25.indexOf(I19);
        let G20 = String(E25) !== String(D18);
        return G20 && k16 && l20(E25), G20 ? E25 : D18;
      } else return D18;
    });
  }
  return m17(we9, { scope: e20.__scopeSlider, name: n21, disabled: s16, min: o15, max: r18, valueIndexToChangeRef: h23, thumbs: b21.current, values: P16, orientation: d14, form: w18, children: m17(z14.Provider, { scope: e20.__scopeSlider, children: m17(z14.Slot, { scope: e20.__scopeSlider, children: m17(y21, { "aria-disabled": s16, "data-disabled": s16 ? "" : void 0, ...f21, ref: t18, onPointerDown: f2(f21.onPointerDown, () => {
    s16 || (V19.current = P16, x19.current = false);
  }), min: o15, max: r18, inverted: g21, onSlideStart: s16 ? void 0 : ce12, onSlideMove: s16 ? void 0 : le11, onSlideEnd: s16 ? void 0 : de12, onHomeKeyDown: () => {
    s16 || (x19.current = true, M17(o15, 0, { commit: true }));
  }, onEndKeyDown: () => {
    s16 || (x19.current = true, M17(r18, P16.length - 1, { commit: true }));
  }, onStepKeyDown: ({ event: v18, direction: _22 }) => {
    if (!s16) {
      x19.current = true;
      let H15 = j17.includes(v18.key) || v18.shiftKey && X19.includes(v18.key) ? 10 : 1, I19 = h23.current, D18 = P16[I19], E25 = i23 * H15 * _22;
      M17(D18 + E25, I19, { commit: true });
    }
  } }) }) }) });
});
Pe8.displayName = C13;
var [q19, J14] = F9(C13, { startEdge: "left", endEdge: "right", size: "width", direction: 1 });
var xe7 = c14.forwardRef((e20, t18) => {
  let { min: n21, max: o15, dir: r18, inverted: i23, onSlideStart: d14, onSlideMove: s16, onSlideEnd: p16, onStepKeyDown: u20, ...S18 } = e20, [a20, l20] = c14.useState(null), g21 = s(t18, (R18) => l20(R18)), w18 = c14.useRef(void 0), f21 = v5(r18), b21 = f21 === "ltr", h23 = b21 && !i23 || !b21 && i23;
  function x19(R18) {
    let y21 = w18.current || a20.getBoundingClientRect(), P16 = [0, y21.width], V19 = L19(P16, h23 ? [n21, o15] : [o15, n21]);
    return w18.current = y21, V19(R18 - y21.left);
  }
  return m17(q19, { scope: e20.__scopeSlider, startEdge: h23 ? "left" : "right", endEdge: h23 ? "right" : "left", direction: h23 ? 1 : -1, size: "width", children: m17(Q15, { dir: f21, "data-orientation": "horizontal", ...S18, ref: g21, style: { ...S18.style, "--radix-slider-thumb-transform": "translateX(-50%)" }, onSlideStart: (R18) => {
    let y21 = x19(R18.clientX);
    d14?.(y21);
  }, onSlideMove: (R18) => {
    let y21 = x19(R18.clientX);
    s16?.(y21);
  }, onSlideEnd: () => {
    w18.current = void 0, p16?.();
  }, onStepKeyDown: (R18) => {
    let P16 = W15[h23 ? "from-left" : "from-right"].includes(R18.key);
    u20?.({ event: R18, direction: P16 ? -1 : 1 });
  } }) });
});
var ye10 = c14.forwardRef((e20, t18) => {
  let { min: n21, max: o15, inverted: r18, onSlideStart: i23, onSlideMove: d14, onSlideEnd: s16, onStepKeyDown: p16, ...u20 } = e20, S18 = c14.useRef(null), a20 = s(t18, S18), l20 = c14.useRef(void 0), g21 = !r18;
  function w18(f21) {
    let b21 = l20.current || S18.current.getBoundingClientRect(), h23 = [0, b21.height], R18 = L19(h23, g21 ? [o15, n21] : [n21, o15]);
    return l20.current = b21, R18(f21 - b21.top);
  }
  return m17(q19, { scope: e20.__scopeSlider, startEdge: g21 ? "bottom" : "top", endEdge: g21 ? "top" : "bottom", size: "height", direction: g21 ? 1 : -1, children: m17(Q15, { "data-orientation": "vertical", ...u20, ref: a20, style: { ...u20.style, "--radix-slider-thumb-transform": "translateY(50%)" }, onSlideStart: (f21) => {
    let b21 = w18(f21.clientY);
    i23?.(b21);
  }, onSlideMove: (f21) => {
    let b21 = w18(f21.clientY);
    d14?.(b21);
  }, onSlideEnd: () => {
    l20.current = void 0, s16?.();
  }, onStepKeyDown: (f21) => {
    let h23 = W15[g21 ? "from-bottom" : "from-top"].includes(f21.key);
    p16?.({ event: f21, direction: h23 ? -1 : 1 });
  } }) });
});
var Q15 = c14.forwardRef((e20, t18) => {
  let { __scopeSlider: n21, onSlideStart: o15, onSlideMove: r18, onSlideEnd: i23, onHomeKeyDown: d14, onEndKeyDown: s16, onStepKeyDown: p16, ...u20 } = e20, S18 = B14(C13, n21);
  return m17(v2.span, { ...u20, ref: t18, onKeyDown: f2(e20.onKeyDown, (a20) => {
    a20.key === "Home" ? (d14(a20), a20.preventDefault()) : a20.key === "End" ? (s16(a20), a20.preventDefault()) : j17.concat(X19).includes(a20.key) && (p16(a20), a20.preventDefault());
  }), onPointerDown: f2(e20.onPointerDown, (a20) => {
    let l20 = a20.target;
    l20.setPointerCapture(a20.pointerId), a20.preventDefault(), S18.thumbs.has(l20) ? l20.focus({ preventScroll: true, focusVisible: false }) : o15(a20);
  }), onPointerMove: f2(e20.onPointerMove, (a20) => {
    a20.target.hasPointerCapture(a20.pointerId) && r18(a20);
  }), onPointerUp: f2(e20.onPointerUp, (a20) => {
    let l20 = a20.target;
    l20.hasPointerCapture(a20.pointerId) && (l20.releasePointerCapture(a20.pointerId), i23(a20));
  }) });
});
var Z15 = "SliderTrack";
var _e9 = c14.forwardRef((e20, t18) => {
  let { __scopeSlider: n21, ...o15 } = e20, r18 = B14(Z15, n21);
  return m17(v2.span, { "data-disabled": r18.disabled ? "" : void 0, "data-orientation": r18.orientation, ...o15, ref: t18 });
});
_e9.displayName = Z15;
var O19 = "SliderRange";
var Ee7 = c14.forwardRef((e20, t18) => {
  let { __scopeSlider: n21, ...o15 } = e20, r18 = B14(O19, n21), i23 = J14(O19, n21), d14 = c14.useRef(null), s16 = s(t18, d14), p16 = r18.values.length, u20 = r18.values.map((l20) => se10(l20, r18.min, r18.max)), S18 = p16 > 1 ? Math.min(...u20) : 0, a20 = 100 - Math.max(...u20);
  return m17(v2.span, { "data-orientation": r18.orientation, "data-disabled": r18.disabled ? "" : void 0, ...o15, ref: s16, style: { ...e20.style, [i23.startEdge]: S18 + "%", [i23.endEdge]: a20 + "%" } });
});
Ee7.displayName = O19;
var ee14 = "SliderThumb";
var [De5, te13] = F9(ee14);
var ne16 = "SliderThumbProvider";
function oe13(e20) {
  let { __scopeSlider: t18, name: n21, children: o15, internal_do_not_use_render: r18 } = e20, i23 = B14(ne16, t18), d14 = ve12(t18), [s16, p16] = c14.useState(null), u20 = c14.useMemo(() => s16 ? d14().findIndex((b21) => b21.ref.current === s16) : -1, [d14, s16]), S18 = u10(s16), a20 = s16 ? !!i23.form || !!s16.closest("form") : true, l20 = i23.values[u20], g21 = n21 ?? (i23.name ? i23.name + (i23.values.length > 1 ? "[]" : "") : void 0), w18 = l20 === void 0 ? 0 : se10(l20, i23.min, i23.max);
  c14.useEffect(() => {
    if (s16) return i23.thumbs.add(s16), () => {
      i23.thumbs.delete(s16);
    };
  }, [s16, i23.thumbs]);
  let f21 = { value: l20, name: g21, form: i23.form, isFormControl: a20, index: u20, thumb: s16, onThumbChange: p16, percent: w18, size: S18 };
  return m17(De5, { scope: t18, ...f21, children: ke6(r18) ? r18(f21) : o15 });
}
oe13.displayName = ne16;
var N22 = "SliderThumbTrigger";
var re13 = c14.forwardRef((e20, t18) => {
  let { __scopeSlider: n21, ...o15 } = e20, r18 = B14(N22, n21), i23 = J14(N22, n21), { index: d14, value: s16, percent: p16, size: u20, onThumbChange: S18 } = te13(N22, n21), a20 = s(t18, (f21) => S18(f21)), l20 = Me9(d14, r18.values.length), g21 = u20?.[i23.size], w18 = g21 ? Ke6(g21, p16, i23.direction) : 0;
  return m17("span", { style: { transform: "var(--radix-slider-thumb-transform)", position: "absolute", [i23.startEdge]: `calc(${p16}% + ${w18}px)` }, children: m17(z14.ItemSlot, { scope: n21, children: m17(v2.span, { role: "slider", "aria-label": e20["aria-label"] || l20, "aria-valuemin": r18.min, "aria-valuenow": s16, "aria-valuemax": r18.max, "aria-orientation": r18.orientation, "data-orientation": r18.orientation, "data-disabled": r18.disabled ? "" : void 0, tabIndex: r18.disabled ? void 0 : 0, ...o15, ref: a20, style: s16 === void 0 ? { display: "none" } : e20.style, onFocus: f2(e20.onFocus, () => {
    r18.valueIndexToChangeRef.current = d14;
  }) }) }) });
});
re13.displayName = N22;
var Te6 = c14.forwardRef((e20, t18) => {
  let { __scopeSlider: n21, name: o15, ...r18 } = e20;
  return m17(oe13, { __scopeSlider: n21, name: o15, internal_do_not_use_render: ({ index: i23, isFormControl: d14 }) => be10(ge13, { children: [m17(re13, { ...r18, ref: t18, __scopeSlider: n21 }), d14 ? m17(ae11, { __scopeSlider: n21 }, i23) : null] }) });
});
Te6.displayName = ee14;
var ie6 = "SliderBubbleInput";
var ae11 = c14.forwardRef(({ __scopeSlider: e20, ...t18 }, n21) => {
  let { value: o15, name: r18, form: i23 } = te13(ie6, e20), d14 = c14.useRef(null), s16 = s(d14, n21), p16 = u9(o15);
  return c14.useEffect(() => {
    let u20 = d14.current;
    if (!u20) return;
    let S18 = window.HTMLInputElement.prototype, l20 = Object.getOwnPropertyDescriptor(S18, "value").set;
    if (p16 !== o15 && l20) {
      let g21 = new Event("input", { bubbles: true });
      l20.call(u20, o15), u20.dispatchEvent(g21);
    }
  }, [p16, o15]), m17(v2.input, { style: { display: "none" }, name: r18, form: i23, ...t18, ref: s16, defaultValue: o15 });
});
ae11.displayName = ie6;
function Ce10(e20 = [], t18, n21) {
  let o15 = [...e20];
  return o15[n21] = t18, o15.sort((r18, i23) => r18 - i23);
}
function se10(e20, t18, n21) {
  let i23 = 100 / (n21 - t18) * (e20 - t18);
  return m14(i23, [0, 100]);
}
function Me9(e20, t18) {
  return t18 > 2 ? `Value ${e20 + 1} of ${t18}` : t18 === 2 ? ["Minimum", "Maximum"][e20] : void 0;
}
function Ie9(e20, t18) {
  if (e20.length === 1) return 0;
  let n21 = e20.map((r18) => Math.abs(r18 - t18)), o15 = Math.min(...n21);
  return n21.indexOf(o15);
}
function Ke6(e20, t18, n21) {
  let o15 = e20 / 2, i23 = L19([0, 50], [0, o15]);
  return (o15 - i23(t18) * n21) * n21;
}
function Ae9(e20) {
  return e20.slice(0, -1).map((t18, n21) => e20[n21 + 1] - t18);
}
function Be6(e20, t18) {
  if (t18 > 0) {
    let n21 = Ae9(e20);
    return Math.min(...n21) >= t18;
  }
  return true;
}
function L19(e20, t18) {
  return (n21) => {
    if (e20[0] === e20[1] || t18[0] === t18[1]) return t18[0];
    let o15 = (t18[1] - t18[0]) / (e20[1] - e20[0]);
    return t18[0] + o15 * (n21 - e20[0]);
  };
}
function Ve4(e20) {
  if (!Number.isFinite(e20)) return 0;
  let t18 = e20.toString();
  if (t18.includes("e")) {
    let [o15, r18] = t18.split("e"), i23 = o15.split(".")[1] || "", d14 = Number(r18);
    return Math.max(0, i23.length - d14);
  }
  let n21 = t18.split(".")[1];
  return n21 ? n21.length : 0;
}
function Ne6(e20, t18) {
  let n21 = Math.pow(10, t18);
  return Math.round(e20 * n21) / n21;
}
function ke6(e20) {
  return typeof e20 == "function";
}

// http-url:https://esm.sh/@radix-ui/react-switch@1.3.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-switch.mjs
import * as t16 from "react";
import { Fragment as G16, jsx as b18, jsxs as L20 } from "react/jsx-runtime";
var C14 = "Switch";
var [O20, oe14] = $2(C14);
var [D15, P12] = O20(C14);
function W16(e20) {
  let { __scopeSwitch: c15, checked: n21, children: a20, defaultChecked: r18, disabled: o15, form: s16, name: p16, onCheckedChange: h23, required: f21, value: i23 = "on", internal_do_not_use_render: u20 } = e20, [d14, S18] = D({ prop: n21, defaultProp: r18 ?? false, onChange: h23, caller: C14 }), [l20, m20] = t16.useState(null), [v18, R18] = t16.useState(null), w18 = t16.useRef(false), k16 = l20 ? !!s16 || !!l20.closest("form") : true, _22 = { checked: d14, setChecked: S18, disabled: o15, control: l20, setControl: m20, name: p16, form: s16, value: i23, hasConsumerStoppedPropagationRef: w18, required: f21, defaultChecked: r18, isFormControl: k16, bubbleInput: v18, setBubbleInput: R18 };
  return b18(D15, { scope: c15, ..._22, children: K17(u20) ? u20(_22) : a20 });
}
var E21 = "SwitchTrigger";
var T18 = t16.forwardRef(({ __scopeSwitch: e20, onClick: c15, ...n21 }, a20) => {
  let { value: r18, disabled: o15, checked: s16, required: p16, setControl: h23, setChecked: f21, hasConsumerStoppedPropagationRef: i23, isFormControl: u20, bubbleInput: d14 } = P12(E21, e20), S18 = s(a20, h23);
  return b18(v2.button, { type: "button", role: "switch", "aria-checked": s16, "aria-required": p16, "data-state": M10(s16), "data-disabled": o15 ? "" : void 0, disabled: o15, value: r18, ...n21, ref: S18, onClick: f2(c15, (l20) => {
    f21((m20) => !m20), d14 && u20 && (i23.current = l20.isPropagationStopped(), i23.current || l20.stopPropagation());
  }) });
});
T18.displayName = E21;
var X20 = t16.forwardRef((e20, c15) => {
  let { __scopeSwitch: n21, name: a20, checked: r18, defaultChecked: o15, required: s16, disabled: p16, value: h23, onCheckedChange: f21, form: i23, ...u20 } = e20;
  return b18(W16, { __scopeSwitch: n21, checked: r18, defaultChecked: o15, disabled: p16, required: s16, onCheckedChange: f21, name: a20, form: i23, value: h23, internal_do_not_use_render: ({ isFormControl: d14 }) => L20(G16, { children: [b18(T18, { ...u20, ref: c15, __scopeSwitch: n21 }), d14 && b18(N23, { __scopeSwitch: n21 })] }) });
});
X20.displayName = C14;
var x16 = "SwitchThumb";
var J15 = t16.forwardRef((e20, c15) => {
  let { __scopeSwitch: n21, ...a20 } = e20, r18 = P12(x16, n21);
  return b18(v2.span, { "data-state": M10(r18.checked), "data-disabled": r18.disabled ? "" : void 0, ...a20, ref: c15 });
});
J15.displayName = x16;
var B15 = "SwitchBubbleInput";
var N23 = t16.forwardRef(({ __scopeSwitch: e20, ...c15 }, n21) => {
  let { control: a20, hasConsumerStoppedPropagationRef: r18, checked: o15, defaultChecked: s16, required: p16, disabled: h23, name: f21, value: i23, form: u20, bubbleInput: d14, setBubbleInput: S18 } = P12(B15, e20), l20 = s(n21, S18), m20 = u9(o15), v18 = u10(a20);
  t16.useEffect(() => {
    let w18 = d14;
    if (!w18) return;
    let k16 = window.HTMLInputElement.prototype, I19 = Object.getOwnPropertyDescriptor(k16, "checked").set, q22 = !r18.current;
    if (m20 !== o15 && I19) {
      let A17 = new Event("click", { bubbles: q22 });
      I19.call(w18, o15), w18.dispatchEvent(A17);
    }
  }, [d14, m20, o15, r18]);
  let R18 = t16.useRef(o15);
  return b18(v2.input, { type: "checkbox", "aria-hidden": true, defaultChecked: s16 ?? R18.current, required: p16, disabled: h23, name: f21, value: i23, form: u20, ...c15, tabIndex: -1, ref: l20, style: { ...c15.style, ...v18, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0, transform: "translateX(-100%)" } });
});
N23.displayName = B15;
function K17(e20) {
  return typeof e20 == "function";
}
function M10(e20) {
  return e20 ? "checked" : "unchecked";
}

// http-url:https://esm.sh/@radix-ui/react-tabs@1.1.15/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-tabs.mjs
import * as u18 from "react";
import { jsx as l18 } from "react/jsx-runtime";
var g19 = "Tabs";
var [V17, J16] = $2(g19, [be4]);
var h20 = be4();
var [L21, R15] = V17(g19);
var I16 = u18.forwardRef((e20, r18) => {
  let { __scopeTabs: s16, value: t18, onValueChange: n21, defaultValue: c15, orientation: o15 = "horizontal", dir: d14, activationMode: f21 = "automatic", ...m20 } = e20, i23 = v5(d14), [a20, v18] = D({ prop: t18, onChange: n21, defaultProp: c15 ?? "", caller: g19 });
  return l18(L21, { scope: s16, baseId: n5(), value: a20, onValueChange: v18, orientation: o15, dir: i23, activationMode: f21, children: l18(v2.div, { dir: i23, "data-orientation": o15, ...m20, ref: r18 }) });
});
I16.displayName = g19;
var _18 = "TabsList";
var y20 = u18.forwardRef((e20, r18) => {
  let { __scopeTabs: s16, loop: t18 = true, ...n21 } = e20, c15 = R15(_18, s16), o15 = h20(s16);
  return l18(Fe3, { asChild: true, ...o15, orientation: c15.orientation, dir: c15.dir, loop: t18, children: l18(v2.div, { role: "tablist", "aria-orientation": c15.orientation, ...n21, ref: r18 }) });
});
y20.displayName = _18;
var A14 = "TabsTrigger";
var F10 = u18.forwardRef((e20, r18) => {
  let { __scopeTabs: s16, value: t18, disabled: n21 = false, ...c15 } = e20, o15 = R15(A14, s16), d14 = h20(s16), f21 = N24(o15.baseId, t18), m20 = P13(o15.baseId, t18), i23 = t18 === o15.value;
  return l18(ge5, { asChild: true, ...d14, focusable: !n21, active: i23, children: l18(v2.button, { type: "button", role: "tab", "aria-selected": i23, "aria-controls": m20, "data-state": i23 ? "active" : "inactive", "data-disabled": n21 ? "" : void 0, disabled: n21, id: f21, ...c15, ref: r18, onMouseDown: f2(e20.onMouseDown, (a20) => {
    !n21 && a20.button === 0 && a20.ctrlKey === false ? o15.onValueChange(t18) : a20.preventDefault();
  }), onKeyDown: f2(e20.onKeyDown, (a20) => {
    [" ", "Enter"].includes(a20.key) && o15.onValueChange(t18);
  }), onFocus: f2(e20.onFocus, () => {
    let a20 = o15.activationMode !== "manual";
    !i23 && !n21 && a20 && o15.onValueChange(t18);
  }) }) });
});
F10.displayName = A14;
var S16 = "TabsContent";
var M11 = u18.forwardRef((e20, r18) => {
  let { __scopeTabs: s16, value: t18, forceMount: n21, children: c15, ...o15 } = e20, d14 = R15(S16, s16), f21 = N24(d14.baseId, t18), m20 = P13(d14.baseId, t18), i23 = t18 === d14.value, a20 = u18.useRef(i23);
  return u18.useEffect(() => {
    let v18 = requestAnimationFrame(() => a20.current = false);
    return () => cancelAnimationFrame(v18);
  }, []), l18(y3, { present: n21 || i23, children: ({ present: v18 }) => l18(v2.div, { "data-state": i23 ? "active" : "inactive", "data-orientation": d14.orientation, role: "tabpanel", "aria-labelledby": f21, hidden: !v18, id: m20, tabIndex: 0, ...o15, ref: r18, style: { ...e20.style, animationDuration: a20.current ? "0s" : void 0 }, children: v18 && c15 }) });
});
M11.displayName = S16;
function N24(e20, r18) {
  return `${e20}-trigger-${r18}`;
}
function P13(e20, r18) {
  return `${e20}-content-${r18}`;
}

// http-url:https://esm.sh/@radix-ui/react-toast@1.2.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-toast.mjs
import * as o14 from "react";
import * as re14 from "react-dom";
import { Fragment as ae12, jsx as l19, jsxs as G17 } from "react/jsx-runtime";
var J17 = "ToastProvider";
var [Q16, Ie10, Ae10] = re("Toast");
var [ie7, nt2] = $2("Toast", [Ae10]);
var [Fe9, Y17] = ie7(J17);
var ce9 = (e20) => {
  let { __scopeToast: r18, label: n21 = "Notification", duration: t18 = 5e3, swipeDirection: c15 = "right", swipeThreshold: d14 = 50, announcerContainer: p16, children: v18 } = e20, [T21, i23] = o14.useState(null), [x19, w18] = o14.useState(0), I19 = o14.useRef(false), A17 = o14.useRef(false);
  return n21.trim() || console.error(`Invalid prop \`label\` supplied to \`${J17}\`. Expected non-empty \`string\`.`), l19(Q16.Provider, { scope: r18, children: l19(Fe9, { scope: r18, label: n21, duration: t18, swipeDirection: c15, swipeThreshold: d14, toastCount: x19, viewport: T21, onViewportChange: i23, onToastAdd: o14.useCallback(() => w18((C18) => C18 + 1), []), onToastRemove: o14.useCallback(() => w18((C18) => C18 - 1), []), isFocusedToastEscapeKeyDownRef: I19, isClosePausedRef: A17, announcerContainer: p16, children: v18 }) });
};
ce9.displayName = J17;
var ue9 = "ToastViewport";
var _e10 = ["F8"];
var j18 = "toast.viewportPause";
var q20 = "toast.viewportResume";
var le8 = o14.forwardRef((e20, r18) => {
  let { __scopeToast: n21, hotkey: t18 = _e10, label: c15 = "Notifications ({hotkey})", ...d14 } = e20, p16 = Y17(ue9, n21), v18 = Ie10(n21), T21 = o14.useRef(null), i23 = o14.useRef(null), x19 = o14.useRef(null), w18 = o14.useRef(null), I19 = s(r18, w18, p16.onViewportChange), A17 = t18.join("+").replace(/Key/g, "").replace(/Digit/g, ""), C18 = p16.toastCount > 0;
  o14.useEffect(() => {
    let a20 = (R18) => {
      t18.length !== 0 && t18.every((m20) => R18[m20] || R18.code === m20) && w18.current?.focus();
    };
    return document.addEventListener("keydown", a20), () => document.removeEventListener("keydown", a20);
  }, [t18]), o14.useEffect(() => {
    let a20 = T21.current, R18 = w18.current;
    if (C18 && a20 && R18) {
      let f21 = () => {
        if (!p16.isClosePausedRef.current) {
          let E25 = new CustomEvent(j18);
          R18.dispatchEvent(E25), p16.isClosePausedRef.current = true;
        }
      }, m20 = () => {
        if (p16.isClosePausedRef.current) {
          let E25 = new CustomEvent(q20);
          R18.dispatchEvent(E25), p16.isClosePausedRef.current = false;
        }
      }, y21 = (E25) => {
        !a20.contains(E25.relatedTarget) && m20();
      }, P16 = () => {
        a20.contains(document.activeElement) || m20();
      };
      return a20.addEventListener("focusin", f21), a20.addEventListener("focusout", y21), a20.addEventListener("pointermove", f21), a20.addEventListener("pointerleave", P16), window.addEventListener("blur", f21), window.addEventListener("focus", m20), () => {
        a20.removeEventListener("focusin", f21), a20.removeEventListener("focusout", y21), a20.removeEventListener("pointermove", f21), a20.removeEventListener("pointerleave", P16), window.removeEventListener("blur", f21), window.removeEventListener("focus", m20);
      };
    }
  }, [C18, p16.isClosePausedRef]);
  let u20 = o14.useCallback(({ tabbingDirection: a20 }) => {
    let f21 = v18().map((m20) => {
      let y21 = m20.ref.current, P16 = [y21, ...$e3(y21)];
      return a20 === "forwards" ? P16 : P16.reverse();
    });
    return (a20 === "forwards" ? f21.reverse() : f21).flat();
  }, [v18]);
  return o14.useEffect(() => {
    let a20 = w18.current;
    if (a20) {
      let R18 = (f21) => {
        let m20 = f21.altKey || f21.ctrlKey || f21.metaKey;
        if (f21.key === "Tab" && !m20) {
          let P16 = document.activeElement, E25 = f21.shiftKey;
          if (f21.target === a20 && E25) {
            i23.current?.focus();
            return;
          }
          let _22 = u20({ tabbingDirection: E25 ? "backwards" : "forwards" }), k16 = _22.findIndex((S18) => S18 === P16);
          B16(_22.slice(k16 + 1)) ? f21.preventDefault() : E25 ? i23.current?.focus() : x19.current?.focus();
        }
      };
      return a20.addEventListener("keydown", R18), () => a20.removeEventListener("keydown", R18);
    }
  }, [v18, u20]), G17(re3, { ref: T21, role: "region", "aria-label": c15.replace("{hotkey}", A17), tabIndex: -1, style: { pointerEvents: C18 ? void 0 : "none" }, children: [C18 && l19(z15, { ref: i23, onFocusFromOutsideViewport: () => {
    let a20 = u20({ tabbingDirection: "forwards" });
    B16(a20);
  } }), l19(Q16.Slot, { scope: n21, children: l19(v2.ol, { tabIndex: -1, ...d14, ref: I19 }) }), C18 && l19(z15, { ref: x19, onFocusFromOutsideViewport: () => {
    let a20 = u20({ tabbingDirection: "backwards" });
    B16(a20);
  } })] });
});
le8.displayName = ue9;
var de9 = "ToastFocusProxy";
var z15 = o14.forwardRef((e20, r18) => {
  let { __scopeToast: n21, onFocusFromOutsideViewport: t18, ...c15 } = e20, d14 = Y17(de9, n21);
  return l19(a2, { tabIndex: 0, ...c15, ref: r18, style: { position: "fixed" }, onFocus: (p16) => {
    let v18 = p16.relatedTarget;
    !d14.viewport?.contains(v18) && t18();
  } });
});
z15.displayName = de9;
var M12 = "Toast";
var Ne7 = "toast.swipeStart";
var Le6 = "toast.swipeMove";
var Me10 = "toast.swipeCancel";
var Oe7 = "toast.swipeEnd";
var pe10 = o14.forwardRef((e20, r18) => {
  let { forceMount: n21, open: t18, defaultOpen: c15, onOpenChange: d14, ...p16 } = e20, [v18, T21] = D({ prop: t18, defaultProp: c15 ?? true, onChange: d14, caller: M12 });
  return l19(y3, { present: n21 || v18, children: l19(Ve5, { open: v18, ...p16, ref: r18, onClose: () => T21(false), onPause: u3(e20.onPause), onResume: u3(e20.onResume), onSwipeStart: f2(e20.onSwipeStart, (i23) => {
    i23.currentTarget.setAttribute("data-swipe", "start");
  }), onSwipeMove: f2(e20.onSwipeMove, (i23) => {
    let { x: x19, y: w18 } = i23.detail.delta;
    i23.currentTarget.setAttribute("data-swipe", "move"), i23.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${x19}px`), i23.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${w18}px`);
  }), onSwipeCancel: f2(e20.onSwipeCancel, (i23) => {
    i23.currentTarget.setAttribute("data-swipe", "cancel"), i23.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), i23.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), i23.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), i23.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
  }), onSwipeEnd: f2(e20.onSwipeEnd, (i23) => {
    let { x: x19, y: w18 } = i23.detail.delta;
    i23.currentTarget.setAttribute("data-swipe", "end"), i23.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), i23.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), i23.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${x19}px`), i23.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${w18}px`), T21(false);
  }) }) });
});
pe10.displayName = M12;
var [ke7, Ke7] = ie7(M12, { onClose() {
} });
var Ve5 = o14.forwardRef((e20, r18) => {
  let { __scopeToast: n21, type: t18 = "foreground", duration: c15, open: d14, onClose: p16, onEscapeKeyDown: v18, onPause: T21, onResume: i23, onSwipeStart: x19, onSwipeMove: w18, onSwipeCancel: I19, onSwipeEnd: A17, ...C18 } = e20, u20 = Y17(M12, n21), [a20, R18] = o14.useState(null), f21 = s(r18, (s16) => R18(s16)), m20 = o14.useRef(null), y21 = o14.useRef(null), P16 = c15 || u20.duration, E25 = o14.useRef(0), F11 = o14.useRef(P16), O23 = o14.useRef(0), { onToastAdd: _22, onToastRemove: k16 } = u20, S18 = u3(() => {
    a20?.contains(document.activeElement) && u20.viewport?.focus(), p16();
  }), K19 = o14.useCallback((s16) => {
    !s16 || s16 === 1 / 0 || (window.clearTimeout(O23.current), E25.current = (/* @__PURE__ */ new Date()).getTime(), O23.current = window.setTimeout(S18, s16));
  }, [S18]);
  o14.useEffect(() => {
    let s16 = u20.viewport;
    if (s16) {
      let b21 = () => {
        K19(F11.current), i23?.();
      }, g21 = () => {
        let N26 = (/* @__PURE__ */ new Date()).getTime() - E25.current;
        F11.current = F11.current - N26, window.clearTimeout(O23.current), T21?.();
      };
      return s16.addEventListener(j18, g21), s16.addEventListener(q20, b21), () => {
        s16.removeEventListener(j18, g21), s16.removeEventListener(q20, b21);
      };
    }
  }, [u20.viewport, P16, T21, i23, K19]), o14.useEffect(() => {
    d14 && !u20.isClosePausedRef.current && K19(P16);
  }, [d14, P16, u20.isClosePausedRef, K19]), o14.useEffect(() => (_22(), () => k16()), [_22, k16]);
  let ee16 = o14.useMemo(() => a20 ? Re8(a20) : null, [a20]);
  return u20.viewport ? G17(ae12, { children: [ee16 && l19(He4, { __scopeToast: n21, role: "status", "aria-live": t18 === "foreground" ? "assertive" : "polite", children: ee16 }), l19(ke7, { scope: n21, onClose: S18, children: re14.createPortal(l19(Q16.ItemSlot, { scope: n21, children: l19(se2, { asChild: true, onEscapeKeyDown: f2(v18, () => {
    u20.isFocusedToastEscapeKeyDownRef.current || S18(), u20.isFocusedToastEscapeKeyDownRef.current = false;
  }), children: l19(v2.li, { tabIndex: 0, "data-state": d14 ? "open" : "closed", "data-swipe-direction": u20.swipeDirection, ...C18, ref: f21, style: { userSelect: "none", touchAction: "none", ...e20.style }, onKeyDown: f2(e20.onKeyDown, (s16) => {
    s16.key === "Escape" && (v18?.(s16.nativeEvent), s16.nativeEvent.defaultPrevented || (u20.isFocusedToastEscapeKeyDownRef.current = true, S18()));
  }), onPointerDown: f2(e20.onPointerDown, (s16) => {
    s16.button === 0 && (m20.current = { x: s16.clientX, y: s16.clientY });
  }), onPointerMove: f2(e20.onPointerMove, (s16) => {
    if (!m20.current) return;
    let b21 = s16.clientX - m20.current.x, g21 = s16.clientY - m20.current.y, N26 = !!y21.current, L24 = ["left", "right"].includes(u20.swipeDirection), V19 = ["left", "up"].includes(u20.swipeDirection) ? Math.min : Math.max, ye11 = L24 ? V19(0, b21) : 0, Pe10 = L24 ? 0 : V19(0, g21), $19 = s16.pointerType === "touch" ? 10 : 2, H15 = { x: ye11, y: Pe10 }, te14 = { originalEvent: s16, delta: H15 };
    N26 ? (y21.current = H15, W17(Le6, w18, te14, { discrete: false })) : oe15(H15, u20.swipeDirection, $19) ? (y21.current = H15, W17(Ne7, x19, te14, { discrete: false }), s16.target.setPointerCapture(s16.pointerId)) : (Math.abs(b21) > $19 || Math.abs(g21) > $19) && (m20.current = null);
  }), onPointerUp: f2(e20.onPointerUp, (s16) => {
    let b21 = y21.current, g21 = s16.target;
    if (g21.hasPointerCapture(s16.pointerId) && g21.releasePointerCapture(s16.pointerId), y21.current = null, m20.current = null, b21) {
      let N26 = s16.currentTarget, L24 = { originalEvent: s16, delta: b21 };
      oe15(b21, u20.swipeDirection, u20.swipeThreshold) ? W17(Oe7, A17, L24, { discrete: true }) : W17(Me10, I19, L24, { discrete: true }), N26.addEventListener("click", (V19) => V19.preventDefault(), { once: true });
    }
  }) }) }) }), u20.viewport) })] }) : null;
});
var He4 = (e20) => {
  let { __scopeToast: r18, children: n21, ...t18 } = e20, c15 = Y17(M12, r18), [d14, p16] = o14.useState(false), [v18, T21] = o14.useState(false);
  return Xe2(() => p16(true)), o14.useEffect(() => {
    let i23 = window.setTimeout(() => T21(true), 1e3);
    return () => window.clearTimeout(i23);
  }, []), v18 ? null : l19(e10, { asChild: true, container: c15.announcerContainer || void 0, children: l19(a2, { ...t18, children: d14 && G17(ae12, { children: [c15.label, " ", n21] }) }) });
};
var We5 = "ToastTitle";
var fe11 = o14.forwardRef((e20, r18) => {
  let { __scopeToast: n21, ...t18 } = e20;
  return l19(v2.div, { ...t18, ref: r18 });
});
fe11.displayName = We5;
var Ue6 = "ToastDescription";
var me11 = o14.forwardRef((e20, r18) => {
  let { __scopeToast: n21, ...t18 } = e20;
  return l19(v2.div, { ...t18, ref: r18 });
});
me11.displayName = Ue6;
var ve13 = "ToastAction";
var Te7 = o14.forwardRef((e20, r18) => {
  let { altText: n21, ...t18 } = e20;
  return n21.trim() ? l19(Ee8, { altText: n21, asChild: true, children: l19(Z16, { ...t18, ref: r18 }) }) : (console.error(`Invalid prop \`altText\` supplied to \`${ve13}\`. Expected non-empty \`string\`.`), null);
});
Te7.displayName = ve13;
var we10 = "ToastClose";
var Z16 = o14.forwardRef((e20, r18) => {
  let { __scopeToast: n21, ...t18 } = e20, c15 = Ke7(we10, n21);
  return l19(Ee8, { asChild: true, children: l19(v2.button, { type: "button", ...t18, ref: r18, onClick: f2(e20.onClick, c15.onClose) }) });
});
Z16.displayName = we10;
var Ee8 = o14.forwardRef((e20, r18) => {
  let { __scopeToast: n21, altText: t18, ...c15 } = e20;
  return l19(v2.div, { "data-radix-toast-announce-exclude": "", "data-radix-toast-announce-alt": t18 || void 0, ...c15, ref: r18 });
});
function Re8(e20) {
  let r18 = [];
  return Array.from(e20.childNodes).forEach((t18) => {
    if (t18.nodeType === t18.TEXT_NODE && t18.textContent && r18.push(t18.textContent), Ye3(t18)) {
      let c15 = t18.ariaHidden || t18.hidden || t18.style.display === "none", d14 = t18.dataset.radixToastAnnounceExclude === "";
      if (!c15) if (d14) {
        let p16 = t18.dataset.radixToastAnnounceAlt;
        p16 && r18.push(p16);
      } else r18.push(...Re8(t18));
    }
  }), r18;
}
function W17(e20, r18, n21, { discrete: t18 }) {
  let c15 = n21.originalEvent.currentTarget, d14 = new CustomEvent(e20, { bubbles: true, cancelable: true, detail: n21 });
  r18 && c15.addEventListener(e20, r18, { once: true }), t18 ? R(c15, d14) : c15.dispatchEvent(d14);
}
var oe15 = (e20, r18, n21 = 0) => {
  let t18 = Math.abs(e20.x), c15 = Math.abs(e20.y), d14 = t18 > c15;
  return r18 === "left" || r18 === "right" ? d14 && t18 > n21 : !d14 && c15 > n21;
};
function Xe2(e20 = () => {
}) {
  let r18 = u3(e20);
  e5(() => {
    let n21 = 0, t18 = 0;
    return n21 = window.requestAnimationFrame(() => t18 = window.requestAnimationFrame(r18)), () => {
      window.cancelAnimationFrame(n21), window.cancelAnimationFrame(t18);
    };
  }, [r18]);
}
function Ye3(e20) {
  return e20.nodeType === e20.ELEMENT_NODE;
}
function $e3(e20) {
  let r18 = [], n21 = document.createTreeWalker(e20, NodeFilter.SHOW_ELEMENT, { acceptNode: (t18) => {
    let c15 = t18.tagName === "INPUT" && t18.type === "hidden";
    return t18.disabled || t18.hidden || c15 ? NodeFilter.FILTER_SKIP : t18.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n21.nextNode(); ) r18.push(n21.currentNode);
  return r18;
}
function B16(e20) {
  let r18 = document.activeElement;
  return e20.some((n21) => n21 === r18 ? true : (n21.focus(), document.activeElement !== r18));
}

// http-url:https://esm.sh/@radix-ui/react-toggle-group@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-toggle-group.mjs
import * as r17 from "react";

// http-url:https://esm.sh/@radix-ui/react-toggle@1.1.12/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-toggle.mjs
import * as r16 from "react";
import { jsx as u19 } from "react/jsx-runtime";
var t17 = "Toggle";
var a16 = r16.forwardRef((e20, s16) => {
  let { pressed: d14, defaultPressed: i23, onPressedChange: l20, ...n21 } = e20, [o15, f21] = D({ prop: d14, onChange: l20, defaultProp: i23 ?? false, caller: t17 });
  return u19(v2.button, { type: "button", "aria-pressed": o15, "data-state": o15 ? "on" : "off", "data-disabled": e20.disabled ? "" : void 0, ...n21, ref: s16, onClick: f2(e20.onClick, () => {
    e20.disabled || f21(!o15);
  }) });
});
a16.displayName = t17;

// http-url:https://esm.sh/@radix-ui/react-toggle-group@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-toggle-group.mjs
import { jsx as a17 } from "react/jsx-runtime";
var p14 = "ToggleGroup";
var [C15, $18] = $2(p14, [be4]);
var _19 = be4();
var h21 = r17.forwardRef((e20, t18) => {
  let { type: u20, ...l20 } = e20;
  if (u20 === "single") return a17(M13, { role: "radiogroup", ...l20, ref: t18 });
  if (u20 === "multiple") return a17(A15, { role: "toolbar", ...l20, ref: t18 });
  throw new Error(`Missing prop \`type\` expected on \`${p14}\``);
});
h21.displayName = p14;
var [I17, x17] = C15(p14);
var M13 = r17.forwardRef((e20, t18) => {
  let { value: u20, defaultValue: l20, onValueChange: c15 = () => {
  }, ...s16 } = e20, [n21, o15] = D({ prop: u20, defaultProp: l20 ?? "", onChange: c15, caller: p14 });
  return a17(I17, { scope: e20.__scopeToggleGroup, type: "single", value: r17.useMemo(() => n21 ? [n21] : [], [n21]), onItemActivate: o15, onItemDeactivate: r17.useCallback(() => o15(""), [o15]), children: a17(b19, { ...s16, ref: t18 }) });
});
var A15 = r17.forwardRef((e20, t18) => {
  let { value: u20, defaultValue: l20, onValueChange: c15 = () => {
  }, ...s16 } = e20, [n21, o15] = D({ prop: u20, defaultProp: l20 ?? [], onChange: c15, caller: p14 }), i23 = r17.useCallback((g21) => o15((v18 = []) => [...v18, g21]), [o15]), f21 = r17.useCallback((g21) => o15((v18 = []) => v18.filter((y21) => y21 !== g21)), [o15]);
  return a17(I17, { scope: e20.__scopeToggleGroup, type: "multiple", value: n21, onItemActivate: i23, onItemDeactivate: f21, children: a17(b19, { ...s16, ref: t18 }) });
});
h21.displayName = p14;
var [w17, D16] = C15(p14);
var b19 = r17.forwardRef((e20, t18) => {
  let { __scopeToggleGroup: u20, disabled: l20 = false, rovingFocus: c15 = true, orientation: s16, dir: n21, loop: o15 = true, ...i23 } = e20, f21 = _19(u20), g21 = v5(n21), v18 = { dir: g21, ...i23 };
  return a17(w17, { scope: u20, rovingFocus: c15, disabled: l20, children: c15 ? a17(Fe3, { asChild: true, ...f21, orientation: s16, dir: g21, loop: o15, children: a17(v2.div, { ...v18, ref: t18 }) }) : a17(v2.div, { ...v18, ref: t18 }) });
});
var m18 = "ToggleGroupItem";
var E22 = r17.forwardRef((e20, t18) => {
  let u20 = x17(m18, e20.__scopeToggleGroup), l20 = D16(m18, e20.__scopeToggleGroup), c15 = _19(e20.__scopeToggleGroup), s16 = u20.value.includes(e20.value), n21 = l20.disabled || e20.disabled, o15 = { ...e20, pressed: s16, disabled: n21 }, i23 = r17.useRef(null);
  return l20.rovingFocus ? a17(ge5, { asChild: true, ...c15, focusable: !n21, active: s16, ref: i23, children: a17(R16, { ...o15, ref: t18 }) }) : a17(R16, { ...o15, ref: t18 });
});
E22.displayName = m18;
var R16 = r17.forwardRef((e20, t18) => {
  let { __scopeToggleGroup: u20, value: l20, ...c15 } = e20, s16 = x17(m18, u20), n21 = { role: "radio", "aria-checked": e20.pressed, "aria-pressed": void 0 }, o15 = s16.type === "single" ? n21 : void 0;
  return a17(a16, { ...o15, ...c15, ref: t18, onPressedChange: (i23) => {
    i23 ? s16.onItemActivate(l20) : s16.onItemDeactivate(l20);
  } });
});

// http-url:https://esm.sh/@radix-ui/react-toolbar@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-toolbar.mjs
import * as n19 from "react";
import { jsx as i21 } from "react/jsx-runtime";
var T19 = "Toolbar";
var [x18, H13] = $2(T19, [be4, $18]);
var m19 = be4();
var b20 = $18();
var [C16, R17] = x18(T19);
var G18 = n19.forwardRef((o15, a20) => {
  let { __scopeToolbar: r18, orientation: e20 = "horizontal", dir: t18, loop: c15 = true, ...y21 } = o15, F11 = m19(r18), s16 = v5(t18);
  return i21(C16, { scope: r18, orientation: e20, dir: s16, children: i21(Fe3, { asChild: true, ...F11, orientation: e20, dir: s16, loop: c15, children: i21(v2.div, { role: "toolbar", "aria-orientation": e20, dir: s16, ...y21, ref: a20 }) }) });
});
G18.displayName = T19;
var _20 = "ToolbarSeparator";
var S17 = n19.forwardRef((o15, a20) => {
  let { __scopeToolbar: r18, ...e20 } = o15, t18 = R17(_20, r18);
  return i21(T17, { orientation: t18.orientation === "horizontal" ? "vertical" : "horizontal", ...e20, ref: a20 });
});
S17.displayName = _20;
var L22 = "ToolbarButton";
var g20 = n19.forwardRef((o15, a20) => {
  let { __scopeToolbar: r18, ...e20 } = o15, t18 = m19(r18);
  return i21(ge5, { asChild: true, ...t18, focusable: !o15.disabled, children: i21(v2.button, { type: "button", ...e20, ref: a20 }) });
});
g20.displayName = L22;
var M14 = "ToolbarLink";
var P14 = n19.forwardRef((o15, a20) => {
  let { __scopeToolbar: r18, ...e20 } = o15, t18 = m19(r18);
  return i21(ge5, { asChild: true, ...t18, focusable: true, children: i21(v2.a, { ...e20, ref: a20, onKeyDown: f2(o15.onKeyDown, (c15) => {
    c15.key === " " && c15.currentTarget.click();
  }) }) });
});
P14.displayName = M14;
var N25 = "ToolbarToggleGroup";
var h22 = n19.forwardRef((o15, a20) => {
  let { __scopeToolbar: r18, ...e20 } = o15, t18 = R17(N25, r18), c15 = b20(r18);
  return i21(h21, { "data-orientation": t18.orientation, dir: t18.dir, ...c15, ...e20, ref: a20, rovingFocus: false });
});
h22.displayName = N25;
var O21 = "ToolbarToggleItem";
var E23 = n19.forwardRef((o15, a20) => {
  let { __scopeToolbar: r18, ...e20 } = o15, t18 = b20(r18), c15 = { __scopeToolbar: o15.__scopeToolbar };
  return i21(g20, { asChild: true, ...c15, children: i21(E22, { ...t18, ...e20, ref: a20 }) });
});
E23.displayName = O21;

// http-url:https://esm.sh/@radix-ui/react-tooltip@1.2.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-tooltip.mjs
import * as a18 from "react";
import { jsx as f19, jsxs as re15 } from "react/jsx-runtime";
var [A16, Le7] = $2("Tooltip", [Fe2]);
var D17 = Fe2();
var V18 = "TooltipProvider";
var ne17 = 700;
var L23 = "tooltip.open";
var [ae13, M15] = A16(V18);
var B17 = (t18) => {
  let { __scopeTooltip: o15, delayDuration: e20 = ne17, skipDelayDuration: r18 = 300, disableHoverableContent: n21 = false, children: c15 } = t18, s16 = a18.useRef(true), m20 = a18.useRef(false), i23 = a18.useRef(0);
  return a18.useEffect(() => {
    let u20 = i23.current;
    return () => window.clearTimeout(u20);
  }, []), f19(ae13, { scope: o15, isOpenDelayedRef: s16, delayDuration: e20, onOpen: a18.useCallback(() => {
    r18 <= 0 || (window.clearTimeout(i23.current), s16.current = false);
  }, [r18]), onClose: a18.useCallback(() => {
    r18 <= 0 || (window.clearTimeout(i23.current), i23.current = window.setTimeout(() => s16.current = true, r18));
  }, [r18]), isPointerInTransitRef: m20, onPointerInTransitChange: a18.useCallback((u20) => {
    m20.current = u20;
  }, []), disableHoverableContent: n21, children: c15 });
};
B17.displayName = V18;
var _21 = "Tooltip";
var [ie8, O22] = A16(_21);
var U13 = (t18) => {
  let { __scopeTooltip: o15, children: e20, open: r18, defaultOpen: n21, onOpenChange: c15, disableHoverableContent: s16, delayDuration: m20 } = t18, i23 = M15(_21, t18.__scopeTooltip), u20 = D17(o15), [l20, p16] = a18.useState(null), v18 = n5(), d14 = a18.useRef(0), h23 = s16 ?? i23.disableHoverableContent, T21 = m20 ?? i23.delayDuration, R18 = a18.useRef(false), [C18, y21] = D({ prop: r18, defaultProp: n21 ?? false, onChange: (N26) => {
    N26 ? (i23.onOpen(), document.dispatchEvent(new CustomEvent(L23))) : i23.onClose(), c15?.(N26);
  }, caller: _21 }), b21 = a18.useMemo(() => C18 ? R18.current ? "delayed-open" : "instant-open" : "closed", [C18]), w18 = a18.useCallback(() => {
    window.clearTimeout(d14.current), d14.current = 0, R18.current = false, y21(true);
  }, [y21]), E25 = a18.useCallback(() => {
    window.clearTimeout(d14.current), d14.current = 0, y21(false);
  }, [y21]), I19 = a18.useCallback(() => {
    window.clearTimeout(d14.current), d14.current = window.setTimeout(() => {
      R18.current = true, y21(true), d14.current = 0;
    }, T21);
  }, [T21, y21]);
  return a18.useEffect(() => () => {
    d14.current && (window.clearTimeout(d14.current), d14.current = 0);
  }, []), f19(Be2, { ...u20, children: f19(ie8, { scope: o15, contentId: v18, open: C18, stateAttribute: b21, trigger: l20, onTriggerChange: p16, onTriggerEnter: a18.useCallback(() => {
    i23.isOpenDelayedRef.current ? I19() : w18();
  }, [i23.isOpenDelayedRef, I19, w18]), onTriggerLeave: a18.useCallback(() => {
    h23 ? E25() : (window.clearTimeout(d14.current), d14.current = 0);
  }, [E25, h23]), onOpen: w18, onClose: E25, disableHoverableContent: h23, children: e20 }) });
};
U13.displayName = _21;
var k15 = "TooltipTrigger";
var Y18 = a18.forwardRef((t18, o15) => {
  let { __scopeTooltip: e20, ...r18 } = t18, n21 = O22(k15, e20), c15 = M15(k15, e20), s16 = D17(e20), m20 = a18.useRef(null), i23 = s(o15, m20, n21.onTriggerChange), u20 = a18.useRef(false), l20 = a18.useRef(false), p16 = a18.useCallback(() => u20.current = false, []);
  return a18.useEffect(() => () => document.removeEventListener("pointerup", p16), [p16]), f19(je3, { asChild: true, ...s16, children: f19(v2.button, { "aria-describedby": n21.open ? n21.contentId : void 0, "data-state": n21.stateAttribute, ...r18, ref: i23, onPointerMove: f2(t18.onPointerMove, (v18) => {
    v18.pointerType !== "touch" && !l20.current && !c15.isPointerInTransitRef.current && (n21.onTriggerEnter(), l20.current = true);
  }), onPointerLeave: f2(t18.onPointerLeave, () => {
    n21.onTriggerLeave(), l20.current = false;
  }), onPointerDown: f2(t18.onPointerDown, () => {
    n21.open && n21.onClose(), u20.current = true, document.addEventListener("pointerup", p16, { once: true });
  }), onFocus: f2(t18.onFocus, () => {
    u20.current || n21.onOpen();
  }), onBlur: f2(t18.onBlur, n21.onClose), onClick: f2(t18.onClick, n21.onClose) }) });
});
Y18.displayName = k15;
var H14 = "TooltipPortal";
var [se11, ce10] = A16(H14, { forceMount: void 0 });
var q21 = (t18) => {
  let { __scopeTooltip: o15, forceMount: e20, children: r18, container: n21 } = t18, c15 = O22(H14, o15);
  return f19(se11, { scope: o15, forceMount: e20, children: f19(y3, { present: e20 || c15.open, children: f19(e10, { asChild: true, container: n21, children: r18 }) }) });
};
q21.displayName = H14;
var P15 = "TooltipContent";
var X21 = a18.forwardRef((t18, o15) => {
  let e20 = ce10(P15, t18.__scopeTooltip), { forceMount: r18 = e20.forceMount, side: n21 = "top", ...c15 } = t18, s16 = O22(P15, t18.__scopeTooltip);
  return f19(y3, { present: r18 || s16.open, children: s16.disableHoverableContent ? f19(K18, { side: n21, ...c15, ref: o15 }) : f19(le9, { side: n21, ...c15, ref: o15 }) });
});
var le9 = a18.forwardRef((t18, o15) => {
  let e20 = O22(P15, t18.__scopeTooltip), r18 = M15(P15, t18.__scopeTooltip), n21 = a18.useRef(null), c15 = s(o15, n21), [s16, m20] = a18.useState(null), { trigger: i23, onClose: u20 } = e20, l20 = n21.current, { onPointerInTransitChange: p16 } = r18, v18 = a18.useCallback(() => {
    m20(null), p16(false);
  }, [p16]), d14 = a18.useCallback((h23, T21) => {
    let R18 = h23.currentTarget, C18 = { x: h23.clientX, y: h23.clientY }, y21 = fe12(C18, R18.getBoundingClientRect()), b21 = ve14(C18, y21), w18 = me12(T21.getBoundingClientRect()), E25 = Re9([...b21, ...w18]);
    m20(E25), p16(true);
  }, [p16]);
  return a18.useEffect(() => () => v18(), [v18]), a18.useEffect(() => {
    if (i23 && l20) {
      let h23 = (R18) => d14(R18, l20), T21 = (R18) => d14(R18, i23);
      return i23.addEventListener("pointerleave", h23), l20.addEventListener("pointerleave", T21), () => {
        i23.removeEventListener("pointerleave", h23), l20.removeEventListener("pointerleave", T21);
      };
    }
  }, [i23, l20, d14, v18]), a18.useEffect(() => {
    if (s16) {
      let h23 = (T21) => {
        let R18 = T21.target, C18 = { x: T21.clientX, y: T21.clientY }, y21 = i23?.contains(R18) || l20?.contains(R18), b21 = !he12(C18, s16);
        y21 ? v18() : b21 && (v18(), u20());
      };
      return document.addEventListener("pointermove", h23), () => document.removeEventListener("pointermove", h23);
    }
  }, [i23, l20, s16, u20, v18]), f19(K18, { ...t18, ref: c15 });
});
var [ue10, pe11] = A16(_21, { isInside: false });
var de10 = g("TooltipContent");
var K18 = a18.forwardRef((t18, o15) => {
  let { __scopeTooltip: e20, children: r18, "aria-label": n21, onEscapeKeyDown: c15, onPointerDownOutside: s16, ...m20 } = t18, i23 = O22(P15, e20), u20 = D17(e20), { onClose: l20 } = i23;
  return a18.useEffect(() => (document.addEventListener(L23, l20), () => document.removeEventListener(L23, l20)), [l20]), a18.useEffect(() => {
    if (i23.trigger) {
      let p16 = (v18) => {
        v18.target instanceof Node && v18.target.contains(i23.trigger) && l20();
      };
      return window.addEventListener("scroll", p16, { capture: true }), () => window.removeEventListener("scroll", p16, { capture: true });
    }
  }, [i23.trigger, l20]), f19(_2, { asChild: true, disableOutsidePointerEvents: false, onEscapeKeyDown: c15, onPointerDownOutside: s16, onFocusOutside: (p16) => p16.preventDefault(), onDismiss: l20, children: re15(Le2, { "data-state": i23.stateAttribute, ...u20, ...m20, ref: o15, style: { ...m20.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" }, children: [f19(de10, { children: r18 }), f19(ue10, { scope: e20, isInside: true, children: f19(p, { id: i23.contentId, role: "tooltip", children: n21 || r18 }) })] }) });
});
X21.displayName = P15;
var W18 = "TooltipArrow";
var z16 = a18.forwardRef((t18, o15) => {
  let { __scopeTooltip: e20, ...r18 } = t18, n21 = D17(e20);
  return pe11(W18, e20).isInside ? null : f19(Ue2, { ...n21, ...r18, ref: o15 });
});
z16.displayName = W18;
function fe12(t18, o15) {
  let e20 = Math.abs(o15.top - t18.y), r18 = Math.abs(o15.bottom - t18.y), n21 = Math.abs(o15.right - t18.x), c15 = Math.abs(o15.left - t18.x);
  switch (Math.min(e20, r18, n21, c15)) {
    case c15:
      return "left";
    case n21:
      return "right";
    case e20:
      return "top";
    case r18:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ve14(t18, o15, e20 = 5) {
  let r18 = [];
  switch (o15) {
    case "top":
      r18.push({ x: t18.x - e20, y: t18.y + e20 }, { x: t18.x + e20, y: t18.y + e20 });
      break;
    case "bottom":
      r18.push({ x: t18.x - e20, y: t18.y - e20 }, { x: t18.x + e20, y: t18.y - e20 });
      break;
    case "left":
      r18.push({ x: t18.x + e20, y: t18.y - e20 }, { x: t18.x + e20, y: t18.y + e20 });
      break;
    case "right":
      r18.push({ x: t18.x - e20, y: t18.y - e20 }, { x: t18.x - e20, y: t18.y + e20 });
      break;
  }
  return r18;
}
function me12(t18) {
  let { top: o15, right: e20, bottom: r18, left: n21 } = t18;
  return [{ x: n21, y: o15 }, { x: e20, y: o15 }, { x: e20, y: r18 }, { x: n21, y: r18 }];
}
function he12(t18, o15) {
  let { x: e20, y: r18 } = t18, n21 = false;
  for (let c15 = 0, s16 = o15.length - 1; c15 < o15.length; s16 = c15++) {
    let m20 = o15[c15], i23 = o15[s16], u20 = m20.x, l20 = m20.y, p16 = i23.x, v18 = i23.y;
    l20 > r18 != v18 > r18 && e20 < (p16 - u20) * (r18 - l20) / (v18 - l20) + u20 && (n21 = !n21);
  }
  return n21;
}
function Re9(t18) {
  let o15 = t18.slice();
  return o15.sort((e20, r18) => e20.x < r18.x ? -1 : e20.x > r18.x ? 1 : e20.y < r18.y ? -1 : e20.y > r18.y ? 1 : 0), Te8(o15);
}
function Te8(t18) {
  if (t18.length <= 1) return t18.slice();
  let o15 = [];
  for (let r18 = 0; r18 < t18.length; r18++) {
    let n21 = t18[r18];
    for (; o15.length >= 2; ) {
      let c15 = o15[o15.length - 1], s16 = o15[o15.length - 2];
      if ((c15.x - s16.x) * (n21.y - s16.y) >= (c15.y - s16.y) * (n21.x - s16.x)) o15.pop();
      else break;
    }
    o15.push(n21);
  }
  o15.pop();
  let e20 = [];
  for (let r18 = t18.length - 1; r18 >= 0; r18--) {
    let n21 = t18[r18];
    for (; e20.length >= 2; ) {
      let c15 = e20[e20.length - 1], s16 = e20[e20.length - 2];
      if ((c15.x - s16.x) * (n21.y - s16.y) >= (c15.y - s16.y) * (n21.x - s16.x)) e20.pop();
      else break;
    }
    e20.push(n21);
  }
  return e20.pop(), o15.length === 1 && e20.length === 1 && o15[0].x === e20[0].x && o15[0].y === e20[0].y ? o15 : o15.concat(e20);
}

// http-url:https://esm.sh/clsx@2.1.1/X-ZXJlYWN0LHJlYWN0LWRvbSxyZWFjdC1kb20vY2xpZW50LHJlYWN0L2pzeC1kZXYtcnVudGltZSxyZWFjdC9qc3gtcnVudGltZQ/es2022/clsx.mjs
function a19(r18) {
  var n21, f21, t18 = "";
  if (typeof r18 == "string" || typeof r18 == "number") t18 += r18;
  else if (typeof r18 == "object") if (Array.isArray(r18)) {
    var o15 = r18.length;
    for (n21 = 0; n21 < o15; n21++) r18[n21] && (f21 = a19(r18[n21])) && (t18 && (t18 += " "), t18 += f21);
  } else for (f21 in r18) r18[f21] && (t18 && (t18 += " "), t18 += f21);
  return t18;
}
function e19() {
  for (var r18, n21, f21 = 0, t18 = "", o15 = arguments.length; f21 < o15; f21++) (r18 = arguments[f21]) && (n21 = a19(r18)) && (t18 && (t18 += " "), t18 += n21);
  return t18;
}

// http-url:https://esm.sh/tailwind-merge@3.6.0/X-ZXJlYWN0LHJlYWN0LWRvbSxyZWFjdC1kb20vY2xpZW50LHJlYWN0L2pzeC1kZXYtcnVudGltZSxyZWFjdC9qc3gtcnVudGltZQ/es2022/tailwind-merge.mjs
var Xe3 = (e20, r18) => {
  let o15 = new Array(e20.length + r18.length);
  for (let t18 = 0; t18 < e20.length; t18++) o15[t18] = e20[t18];
  for (let t18 = 0; t18 < r18.length; t18++) o15[e20.length + t18] = r18[t18];
  return o15;
};
var Je2 = (e20, r18) => ({ classGroupId: e20, validator: r18 });
var Se5 = (e20 = /* @__PURE__ */ new Map(), r18 = null, o15) => ({ nextPart: e20, validators: r18, classGroupId: o15 });
var ze4 = [];
var Qe2 = "arbitrary..";
var He5 = (e20) => {
  let r18 = Ze2(e20), { conflictingClassGroups: o15, conflictingClassGroupModifiers: t18 } = e20;
  return { getClassGroupId: (l20) => {
    if (l20.startsWith("[") && l20.endsWith("]")) return Ke8(l20);
    let u20 = l20.split("-"), b21 = u20[0] === "" && u20.length > 1 ? 1 : 0;
    return Ce11(u20, b21, r18);
  }, getConflictingClassGroupIds: (l20, u20) => {
    if (u20) {
      let b21 = t18[l20], m20 = o15[l20];
      return b21 ? m20 ? Xe3(m20, b21) : b21 : m20 || ze4;
    }
    return o15[l20] || ze4;
  } };
};
var Ce11 = (e20, r18, o15) => {
  if (e20.length - r18 === 0) return o15.classGroupId;
  let i23 = e20[r18], d14 = o15.nextPart.get(i23);
  if (d14) {
    let m20 = Ce11(e20, r18 + 1, d14);
    if (m20) return m20;
  }
  let l20 = o15.validators;
  if (l20 === null) return;
  let u20 = r18 === 0 ? e20.join("-") : e20.slice(r18).join("-"), b21 = l20.length;
  for (let m20 = 0; m20 < b21; m20++) {
    let h23 = l20[m20];
    if (h23.validator(u20)) return h23.classGroupId;
  }
};
var Ke8 = (e20) => e20.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  let r18 = e20.slice(1, -1), o15 = r18.indexOf(":"), t18 = r18.slice(0, o15);
  return t18 ? Qe2 + t18 : void 0;
})();
var Ze2 = (e20) => {
  let { theme: r18, classGroups: o15 } = e20;
  return eo(o15, r18);
};
var eo = (e20, r18) => {
  let o15 = Se5();
  for (let t18 in e20) {
    let i23 = e20[t18];
    pe12(i23, o15, t18, r18);
  }
  return o15;
};
var pe12 = (e20, r18, o15, t18) => {
  let i23 = e20.length;
  for (let d14 = 0; d14 < i23; d14++) {
    let l20 = e20[d14];
    oo(l20, r18, o15, t18);
  }
};
var oo = (e20, r18, o15, t18) => {
  if (typeof e20 == "string") {
    ro(e20, r18, o15);
    return;
  }
  if (typeof e20 == "function") {
    to(e20, r18, o15, t18);
    return;
  }
  so(e20, r18, o15, t18);
};
var ro = (e20, r18, o15) => {
  let t18 = e20 === "" ? r18 : Re10(r18, e20);
  t18.classGroupId = o15;
};
var to = (e20, r18, o15, t18) => {
  if (no(e20)) {
    pe12(e20(t18), r18, o15, t18);
    return;
  }
  r18.validators === null && (r18.validators = []), r18.validators.push(Je2(o15, e20));
};
var so = (e20, r18, o15, t18) => {
  let i23 = Object.entries(e20), d14 = i23.length;
  for (let l20 = 0; l20 < d14; l20++) {
    let [u20, b21] = i23[l20];
    pe12(b21, Re10(r18, u20), o15, t18);
  }
};
var Re10 = (e20, r18) => {
  let o15 = e20, t18 = r18.split("-"), i23 = t18.length;
  for (let d14 = 0; d14 < i23; d14++) {
    let l20 = t18[d14], u20 = o15.nextPart.get(l20);
    u20 || (u20 = Se5(), o15.nextPart.set(l20, u20)), o15 = u20;
  }
  return o15;
};
var no = (e20) => "isThemeGetter" in e20 && e20.isThemeGetter === true;
var ao = (e20) => {
  if (e20 < 1) return { get: () => {
  }, set: () => {
  } };
  let r18 = 0, o15 = /* @__PURE__ */ Object.create(null), t18 = /* @__PURE__ */ Object.create(null), i23 = (d14, l20) => {
    o15[d14] = l20, r18++, r18 > e20 && (r18 = 0, t18 = o15, o15 = /* @__PURE__ */ Object.create(null));
  };
  return { get(d14) {
    let l20 = o15[d14];
    if (l20 !== void 0) return l20;
    if ((l20 = t18[d14]) !== void 0) return i23(d14, l20), l20;
  }, set(d14, l20) {
    d14 in o15 ? o15[d14] = l20 : i23(d14, l20);
  } };
};
var io = [];
var Ae11 = (e20, r18, o15, t18, i23) => ({ modifiers: e20, hasImportantModifier: r18, baseClassName: o15, maybePostfixModifierPosition: t18, isExternal: i23 });
var lo = (e20) => {
  let { prefix: r18, experimentalParseClassName: o15 } = e20, t18 = (i23) => {
    let d14 = [], l20 = 0, u20 = 0, b21 = 0, m20, h23 = i23.length;
    for (let y21 = 0; y21 < h23; y21++) {
      let A17 = i23[y21];
      if (l20 === 0 && u20 === 0) {
        if (A17 === ":") {
          d14.push(i23.slice(b21, y21)), b21 = y21 + 1;
          continue;
        }
        if (A17 === "/") {
          m20 = y21;
          continue;
        }
      }
      A17 === "[" ? l20++ : A17 === "]" ? l20-- : A17 === "(" ? u20++ : A17 === ")" && u20--;
    }
    let k16 = d14.length === 0 ? i23 : i23.slice(b21), L24 = k16, R18 = false;
    k16.endsWith("!") ? (L24 = k16.slice(0, -1), R18 = true) : k16.startsWith("!") && (L24 = k16.slice(1), R18 = true);
    let D18 = m20 && m20 > b21 ? m20 - b21 : void 0;
    return Ae11(d14, R18, L24, D18);
  };
  if (r18) {
    let i23 = r18 + ":", d14 = t18;
    t18 = (l20) => l20.startsWith(i23) ? d14(l20.slice(i23.length)) : Ae11(io, false, l20, void 0, true);
  }
  if (o15) {
    let i23 = t18;
    t18 = (d14) => o15({ className: d14, parseClassName: i23 });
  }
  return t18;
};
var co = (e20) => {
  let r18 = /* @__PURE__ */ new Map();
  return e20.orderSensitiveModifiers.forEach((o15, t18) => {
    r18.set(o15, 1e6 + t18);
  }), (o15) => {
    let t18 = [], i23 = [];
    for (let d14 = 0; d14 < o15.length; d14++) {
      let l20 = o15[d14], u20 = l20[0] === "[", b21 = r18.has(l20);
      u20 || b21 ? (i23.length > 0 && (i23.sort(), t18.push(...i23), i23 = []), t18.push(l20)) : i23.push(l20);
    }
    return i23.length > 0 && (i23.sort(), t18.push(...i23)), t18;
  };
};
var mo = (e20) => ({ cache: ao(e20.cacheSize), parseClassName: lo(e20), sortModifiers: co(e20), postfixLookupClassGroupIds: po(e20), ...He5(e20) });
var po = (e20) => {
  let r18 = /* @__PURE__ */ Object.create(null), o15 = e20.postfixLookupClassGroups;
  if (o15) for (let t18 = 0; t18 < o15.length; t18++) r18[o15[t18]] = true;
  return r18;
};
var uo = /\s+/;
var bo = (e20, r18) => {
  let { parseClassName: o15, getClassGroupId: t18, getConflictingClassGroupIds: i23, sortModifiers: d14, postfixLookupClassGroupIds: l20 } = r18, u20 = [], b21 = e20.trim().split(uo), m20 = "";
  for (let h23 = b21.length - 1; h23 >= 0; h23 -= 1) {
    let k16 = b21[h23], { isExternal: L24, modifiers: R18, hasImportantModifier: D18, baseClassName: y21, maybePostfixModifierPosition: A17 } = o15(k16);
    if (L24) {
      m20 = k16 + (m20.length > 0 ? " " + m20 : m20);
      continue;
    }
    let O23 = !!A17, v18;
    if (O23) {
      let P16 = y21.substring(0, A17);
      v18 = t18(P16);
      let a20 = v18 && l20[v18] ? t18(y21) : void 0;
      a20 && a20 !== v18 && (v18 = a20, O23 = false);
    } else v18 = t18(y21);
    if (!v18) {
      if (!O23) {
        m20 = k16 + (m20.length > 0 ? " " + m20 : m20);
        continue;
      }
      if (v18 = t18(y21), !v18) {
        m20 = k16 + (m20.length > 0 ? " " + m20 : m20);
        continue;
      }
      O23 = false;
    }
    let $19 = R18.length === 0 ? "" : R18.length === 1 ? R18[0] : d14(R18).join(":"), N26 = D18 ? $19 + "!" : $19, F11 = N26 + v18;
    if (u20.indexOf(F11) > -1) continue;
    u20.push(F11);
    let W19 = i23(v18, O23);
    for (let P16 = 0; P16 < W19.length; ++P16) {
      let a20 = W19[P16];
      u20.push(N26 + a20);
    }
    m20 = k16 + (m20.length > 0 ? " " + m20 : m20);
  }
  return m20;
};
var fo = (...e20) => {
  let r18 = 0, o15, t18, i23 = "";
  for (; r18 < e20.length; ) (o15 = e20[r18++]) && (t18 = Ie11(o15)) && (i23 && (i23 += " "), i23 += t18);
  return i23;
};
var Ie11 = (e20) => {
  if (typeof e20 == "string") return e20;
  let r18, o15 = "";
  for (let t18 = 0; t18 < e20.length; t18++) e20[t18] && (r18 = Ie11(e20[t18])) && (o15 && (o15 += " "), o15 += r18);
  return o15;
};
var ae14 = (e20, ...r18) => {
  let o15, t18, i23, d14, l20 = (b21) => {
    let m20 = r18.reduce((h23, k16) => k16(h23), e20());
    return o15 = mo(m20), t18 = o15.cache.get, i23 = o15.cache.set, d14 = u20, u20(b21);
  }, u20 = (b21) => {
    let m20 = t18(b21);
    if (m20) return m20;
    let h23 = bo(b21, o15);
    return i23(b21, h23), h23;
  };
  return d14 = l20, (...b21) => d14(fo(...b21));
};
var go = [];
var f20 = (e20) => {
  let r18 = (o15) => o15[e20] || go;
  return r18.isThemeGetter = true, r18;
};
var Pe9 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var Ge6 = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var ho = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
var ko = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var xo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var wo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var yo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var vo2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var G19 = (e20) => ho.test(e20);
var p15 = (e20) => !!e20 && !Number.isNaN(Number(e20));
var C17 = (e20) => !!e20 && Number.isInteger(Number(e20));
var ee15 = (e20) => e20.endsWith("%") && p15(e20.slice(0, -1));
var I18 = (e20) => ko.test(e20);
var ue11 = () => true;
var zo = (e20) => xo.test(e20) && !wo.test(e20);
var be11 = () => false;
var Ao = (e20) => yo.test(e20);
var So = (e20) => vo2.test(e20);
var Me11 = (e20) => !s15(e20) && !n20(e20);
var Te9 = (e20) => e20.startsWith("@container") && (e20[10] === "/" && e20[11] !== void 0 || e20[11] === "s" && e20[16] !== void 0 && e20.startsWith("-size/", 10) || e20[11] === "n" && e20[18] !== void 0 && e20.startsWith("-normal/", 10));
var Le8 = (e20) => T20(e20, De6, be11);
var s15 = (e20) => Pe9.test(e20);
var M16 = (e20) => T20(e20, $e4, zo);
var ie9 = (e20) => T20(e20, Co, p15);
var Oe8 = (e20) => T20(e20, Ye4, ue11);
var _e11 = (e20) => T20(e20, Ue7, be11);
var le10 = (e20) => T20(e20, je6, be11);
var Ee9 = (e20) => T20(e20, Be7, So);
var U14 = (e20) => T20(e20, qe4, Ao);
var n20 = (e20) => Ge6.test(e20);
var j19 = (e20) => E24(e20, $e4);
var Ne8 = (e20) => E24(e20, Ue7);
var ce11 = (e20) => E24(e20, je6);
var Fe10 = (e20) => E24(e20, De6);
var We6 = (e20) => E24(e20, Be7);
var Y19 = (e20) => E24(e20, qe4, true);
var Ve6 = (e20) => E24(e20, Ye4, true);
var T20 = (e20, r18, o15) => {
  let t18 = Pe9.exec(e20);
  return t18 ? t18[1] ? r18(t18[1]) : o15(t18[2]) : false;
};
var E24 = (e20, r18, o15 = false) => {
  let t18 = Ge6.exec(e20);
  return t18 ? t18[1] ? r18(t18[1]) : o15 : false;
};
var je6 = (e20) => e20 === "position" || e20 === "percentage";
var Be7 = (e20) => e20 === "image" || e20 === "url";
var De6 = (e20) => e20 === "length" || e20 === "size" || e20 === "bg-size";
var $e4 = (e20) => e20 === "length";
var Co = (e20) => e20 === "number";
var Ue7 = (e20) => e20 === "family-name";
var Ye4 = (e20) => e20 === "number" || e20 === "weight";
var qe4 = (e20) => e20 === "shadow";
var Io = Object.defineProperty({ __proto__: null, isAny: ue11, isAnyNonArbitrary: Me11, isArbitraryFamilyName: _e11, isArbitraryImage: Ee9, isArbitraryLength: M16, isArbitraryNumber: ie9, isArbitraryPosition: le10, isArbitraryShadow: U14, isArbitrarySize: Le8, isArbitraryValue: s15, isArbitraryVariable: n20, isArbitraryVariableFamilyName: Ne8, isArbitraryVariableImage: We6, isArbitraryVariableLength: j19, isArbitraryVariablePosition: ce11, isArbitraryVariableShadow: Y19, isArbitraryVariableSize: Fe10, isArbitraryVariableWeight: Ve6, isArbitraryWeight: Oe8, isFraction: G19, isInteger: C17, isNamedContainerQuery: Te9, isNumber: p15, isPercent: ee15, isTshirtSize: I18 }, Symbol.toStringTag, { value: "Module" });
var de11 = () => {
  let e20 = f20("color"), r18 = f20("font"), o15 = f20("text"), t18 = f20("font-weight"), i23 = f20("tracking"), d14 = f20("leading"), l20 = f20("breakpoint"), u20 = f20("container"), b21 = f20("spacing"), m20 = f20("radius"), h23 = f20("shadow"), k16 = f20("inset-shadow"), L24 = f20("text-shadow"), R18 = f20("drop-shadow"), D18 = f20("blur"), y21 = f20("perspective"), A17 = f20("aspect"), O23 = f20("ease"), v18 = f20("animate"), $19 = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N26 = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"], F11 = () => [...N26(), n20, s15], W19 = () => ["auto", "hidden", "clip", "visible", "scroll"], P16 = () => ["auto", "contain", "none"], a20 = () => [n20, s15, b21], z17 = () => [G19, "full", "auto", ...a20()], fe13 = () => [C17, "none", "subgrid", n20, s15], ge14 = () => ["auto", { span: ["full", C17, n20, s15] }, C17, n20, s15], q22 = () => [C17, "auto", n20, s15], he13 = () => ["auto", "min", "max", "fr", n20, s15], oe16 = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], V19 = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], S18 = () => ["auto", ...a20()], _22 = () => [G19, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...a20()], re16 = () => [G19, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...a20()], te14 = () => [G19, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...a20()], c15 = () => [e20, n20, s15], ke8 = () => [...N26(), ce11, le10, { position: [n20, s15] }], xe8 = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }], we11 = () => ["auto", "cover", "contain", Fe10, Le8, { size: [n20, s15] }], se12 = () => [ee15, j19, M16], x19 = () => ["", "none", "full", m20, n20, s15], w18 = () => ["", p15, j19, M16], X22 = () => ["solid", "dashed", "dotted", "double"], ye11 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], g21 = () => [p15, ee15, ce11, le10], ve15 = () => ["", "none", D18, n20, s15], J18 = () => ["none", p15, n20, s15], Q17 = () => ["none", p15, n20, s15], ne18 = () => [p15, n20, s15], H15 = () => [G19, "full", ...a20()];
  return { cacheSize: 500, theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [I18], breakpoint: [I18], color: [ue11], container: [I18], "drop-shadow": [I18], ease: ["in", "out", "in-out"], font: [Me11], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [I18], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [I18], shadow: [I18], spacing: ["px", p15], text: [I18], "text-shadow": [I18], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] }, classGroups: { aspect: [{ aspect: ["auto", "square", G19, s15, n20, A17] }], container: ["container"], "container-type": [{ "@container": ["", "normal", "size", n20, s15] }], "container-named": [Te9], columns: [{ columns: [p15, s15, n20, u20] }], "break-after": [{ "break-after": $19() }], "break-before": [{ "break-before": $19() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], sr: ["sr-only", "not-sr-only"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: F11() }], overflow: [{ overflow: W19() }], "overflow-x": [{ "overflow-x": W19() }], "overflow-y": [{ "overflow-y": W19() }], overscroll: [{ overscroll: P16() }], "overscroll-x": [{ "overscroll-x": P16() }], "overscroll-y": [{ "overscroll-y": P16() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: z17() }], "inset-x": [{ "inset-x": z17() }], "inset-y": [{ "inset-y": z17() }], start: [{ "inset-s": z17(), start: z17() }], end: [{ "inset-e": z17(), end: z17() }], "inset-bs": [{ "inset-bs": z17() }], "inset-be": [{ "inset-be": z17() }], top: [{ top: z17() }], right: [{ right: z17() }], bottom: [{ bottom: z17() }], left: [{ left: z17() }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [C17, "auto", n20, s15] }], basis: [{ basis: [G19, "full", "auto", u20, ...a20()] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }], flex: [{ flex: [p15, G19, "auto", "initial", "none", s15] }], grow: [{ grow: ["", p15, n20, s15] }], shrink: [{ shrink: ["", p15, n20, s15] }], order: [{ order: [C17, "first", "last", "none", n20, s15] }], "grid-cols": [{ "grid-cols": fe13() }], "col-start-end": [{ col: ge14() }], "col-start": [{ "col-start": q22() }], "col-end": [{ "col-end": q22() }], "grid-rows": [{ "grid-rows": fe13() }], "row-start-end": [{ row: ge14() }], "row-start": [{ "row-start": q22() }], "row-end": [{ "row-end": q22() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": he13() }], "auto-rows": [{ "auto-rows": he13() }], gap: [{ gap: a20() }], "gap-x": [{ "gap-x": a20() }], "gap-y": [{ "gap-y": a20() }], "justify-content": [{ justify: [...oe16(), "normal"] }], "justify-items": [{ "justify-items": [...V19(), "normal"] }], "justify-self": [{ "justify-self": ["auto", ...V19()] }], "align-content": [{ content: ["normal", ...oe16()] }], "align-items": [{ items: [...V19(), { baseline: ["", "last"] }] }], "align-self": [{ self: ["auto", ...V19(), { baseline: ["", "last"] }] }], "place-content": [{ "place-content": oe16() }], "place-items": [{ "place-items": [...V19(), "baseline"] }], "place-self": [{ "place-self": ["auto", ...V19()] }], p: [{ p: a20() }], px: [{ px: a20() }], py: [{ py: a20() }], ps: [{ ps: a20() }], pe: [{ pe: a20() }], pbs: [{ pbs: a20() }], pbe: [{ pbe: a20() }], pt: [{ pt: a20() }], pr: [{ pr: a20() }], pb: [{ pb: a20() }], pl: [{ pl: a20() }], m: [{ m: S18() }], mx: [{ mx: S18() }], my: [{ my: S18() }], ms: [{ ms: S18() }], me: [{ me: S18() }], mbs: [{ mbs: S18() }], mbe: [{ mbe: S18() }], mt: [{ mt: S18() }], mr: [{ mr: S18() }], mb: [{ mb: S18() }], ml: [{ ml: S18() }], "space-x": [{ "space-x": a20() }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": a20() }], "space-y-reverse": ["space-y-reverse"], size: [{ size: _22() }], "inline-size": [{ inline: ["auto", ...re16()] }], "min-inline-size": [{ "min-inline": ["auto", ...re16()] }], "max-inline-size": [{ "max-inline": ["none", ...re16()] }], "block-size": [{ block: ["auto", ...te14()] }], "min-block-size": [{ "min-block": ["auto", ...te14()] }], "max-block-size": [{ "max-block": ["none", ...te14()] }], w: [{ w: [u20, "screen", ..._22()] }], "min-w": [{ "min-w": [u20, "screen", "none", ..._22()] }], "max-w": [{ "max-w": [u20, "screen", "none", "prose", { screen: [l20] }, ..._22()] }], h: [{ h: ["screen", "lh", ..._22()] }], "min-h": [{ "min-h": ["screen", "lh", "none", ..._22()] }], "max-h": [{ "max-h": ["screen", "lh", ..._22()] }], "font-size": [{ text: ["base", o15, j19, M16] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: [t18, Ve6, Oe8] }], "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ee15, s15] }], "font-family": [{ font: [Ne8, _e11, r18] }], "font-features": [{ "font-features": [s15] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: [i23, n20, s15] }], "line-clamp": [{ "line-clamp": [p15, "none", n20, ie9] }], leading: [{ leading: [d14, ...a20()] }], "list-image": [{ "list-image": ["none", n20, s15] }], "list-style-position": [{ list: ["inside", "outside"] }], "list-style-type": [{ list: ["disc", "decimal", "none", n20, s15] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "placeholder-color": [{ placeholder: c15() }], "text-color": [{ text: c15() }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...X22(), "wavy"] }], "text-decoration-thickness": [{ decoration: [p15, "from-font", "auto", n20, M16] }], "text-decoration-color": [{ decoration: c15() }], "underline-offset": [{ "underline-offset": [p15, "auto", n20, s15] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: a20() }], "tab-size": [{ tab: [C17, n20, s15] }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", n20, s15] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], wrap: [{ wrap: ["break-word", "anywhere", "normal"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", n20, s15] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: ke8() }], "bg-repeat": [{ bg: xe8() }], "bg-size": [{ bg: we11() }], "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, C17, n20, s15], radial: ["", n20, s15], conic: [C17, n20, s15] }, We6, Ee9] }], "bg-color": [{ bg: c15() }], "gradient-from-pos": [{ from: se12() }], "gradient-via-pos": [{ via: se12() }], "gradient-to-pos": [{ to: se12() }], "gradient-from": [{ from: c15() }], "gradient-via": [{ via: c15() }], "gradient-to": [{ to: c15() }], rounded: [{ rounded: x19() }], "rounded-s": [{ "rounded-s": x19() }], "rounded-e": [{ "rounded-e": x19() }], "rounded-t": [{ "rounded-t": x19() }], "rounded-r": [{ "rounded-r": x19() }], "rounded-b": [{ "rounded-b": x19() }], "rounded-l": [{ "rounded-l": x19() }], "rounded-ss": [{ "rounded-ss": x19() }], "rounded-se": [{ "rounded-se": x19() }], "rounded-ee": [{ "rounded-ee": x19() }], "rounded-es": [{ "rounded-es": x19() }], "rounded-tl": [{ "rounded-tl": x19() }], "rounded-tr": [{ "rounded-tr": x19() }], "rounded-br": [{ "rounded-br": x19() }], "rounded-bl": [{ "rounded-bl": x19() }], "border-w": [{ border: w18() }], "border-w-x": [{ "border-x": w18() }], "border-w-y": [{ "border-y": w18() }], "border-w-s": [{ "border-s": w18() }], "border-w-e": [{ "border-e": w18() }], "border-w-bs": [{ "border-bs": w18() }], "border-w-be": [{ "border-be": w18() }], "border-w-t": [{ "border-t": w18() }], "border-w-r": [{ "border-r": w18() }], "border-w-b": [{ "border-b": w18() }], "border-w-l": [{ "border-l": w18() }], "divide-x": [{ "divide-x": w18() }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": w18() }], "divide-y-reverse": ["divide-y-reverse"], "border-style": [{ border: [...X22(), "hidden", "none"] }], "divide-style": [{ divide: [...X22(), "hidden", "none"] }], "border-color": [{ border: c15() }], "border-color-x": [{ "border-x": c15() }], "border-color-y": [{ "border-y": c15() }], "border-color-s": [{ "border-s": c15() }], "border-color-e": [{ "border-e": c15() }], "border-color-bs": [{ "border-bs": c15() }], "border-color-be": [{ "border-be": c15() }], "border-color-t": [{ "border-t": c15() }], "border-color-r": [{ "border-r": c15() }], "border-color-b": [{ "border-b": c15() }], "border-color-l": [{ "border-l": c15() }], "divide-color": [{ divide: c15() }], "outline-style": [{ outline: [...X22(), "none", "hidden"] }], "outline-offset": [{ "outline-offset": [p15, n20, s15] }], "outline-w": [{ outline: ["", p15, j19, M16] }], "outline-color": [{ outline: c15() }], shadow: [{ shadow: ["", "none", h23, Y19, U14] }], "shadow-color": [{ shadow: c15() }], "inset-shadow": [{ "inset-shadow": ["none", k16, Y19, U14] }], "inset-shadow-color": [{ "inset-shadow": c15() }], "ring-w": [{ ring: w18() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: c15() }], "ring-offset-w": [{ "ring-offset": [p15, M16] }], "ring-offset-color": [{ "ring-offset": c15() }], "inset-ring-w": [{ "inset-ring": w18() }], "inset-ring-color": [{ "inset-ring": c15() }], "text-shadow": [{ "text-shadow": ["none", L24, Y19, U14] }], "text-shadow-color": [{ "text-shadow": c15() }], opacity: [{ opacity: [p15, n20, s15] }], "mix-blend": [{ "mix-blend": [...ye11(), "plus-darker", "plus-lighter"] }], "bg-blend": [{ "bg-blend": ye11() }], "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"], "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }], "mask-image-linear-pos": [{ "mask-linear": [p15] }], "mask-image-linear-from-pos": [{ "mask-linear-from": g21() }], "mask-image-linear-to-pos": [{ "mask-linear-to": g21() }], "mask-image-linear-from-color": [{ "mask-linear-from": c15() }], "mask-image-linear-to-color": [{ "mask-linear-to": c15() }], "mask-image-t-from-pos": [{ "mask-t-from": g21() }], "mask-image-t-to-pos": [{ "mask-t-to": g21() }], "mask-image-t-from-color": [{ "mask-t-from": c15() }], "mask-image-t-to-color": [{ "mask-t-to": c15() }], "mask-image-r-from-pos": [{ "mask-r-from": g21() }], "mask-image-r-to-pos": [{ "mask-r-to": g21() }], "mask-image-r-from-color": [{ "mask-r-from": c15() }], "mask-image-r-to-color": [{ "mask-r-to": c15() }], "mask-image-b-from-pos": [{ "mask-b-from": g21() }], "mask-image-b-to-pos": [{ "mask-b-to": g21() }], "mask-image-b-from-color": [{ "mask-b-from": c15() }], "mask-image-b-to-color": [{ "mask-b-to": c15() }], "mask-image-l-from-pos": [{ "mask-l-from": g21() }], "mask-image-l-to-pos": [{ "mask-l-to": g21() }], "mask-image-l-from-color": [{ "mask-l-from": c15() }], "mask-image-l-to-color": [{ "mask-l-to": c15() }], "mask-image-x-from-pos": [{ "mask-x-from": g21() }], "mask-image-x-to-pos": [{ "mask-x-to": g21() }], "mask-image-x-from-color": [{ "mask-x-from": c15() }], "mask-image-x-to-color": [{ "mask-x-to": c15() }], "mask-image-y-from-pos": [{ "mask-y-from": g21() }], "mask-image-y-to-pos": [{ "mask-y-to": g21() }], "mask-image-y-from-color": [{ "mask-y-from": c15() }], "mask-image-y-to-color": [{ "mask-y-to": c15() }], "mask-image-radial": [{ "mask-radial": [n20, s15] }], "mask-image-radial-from-pos": [{ "mask-radial-from": g21() }], "mask-image-radial-to-pos": [{ "mask-radial-to": g21() }], "mask-image-radial-from-color": [{ "mask-radial-from": c15() }], "mask-image-radial-to-color": [{ "mask-radial-to": c15() }], "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }], "mask-image-radial-pos": [{ "mask-radial-at": N26() }], "mask-image-conic-pos": [{ "mask-conic": [p15] }], "mask-image-conic-from-pos": [{ "mask-conic-from": g21() }], "mask-image-conic-to-pos": [{ "mask-conic-to": g21() }], "mask-image-conic-from-color": [{ "mask-conic-from": c15() }], "mask-image-conic-to-color": [{ "mask-conic-to": c15() }], "mask-mode": [{ mask: ["alpha", "luminance", "match"] }], "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }], "mask-position": [{ mask: ke8() }], "mask-repeat": [{ mask: xe8() }], "mask-size": [{ mask: we11() }], "mask-type": [{ "mask-type": ["alpha", "luminance"] }], "mask-image": [{ mask: ["none", n20, s15] }], filter: [{ filter: ["", "none", n20, s15] }], blur: [{ blur: ve15() }], brightness: [{ brightness: [p15, n20, s15] }], contrast: [{ contrast: [p15, n20, s15] }], "drop-shadow": [{ "drop-shadow": ["", "none", R18, Y19, U14] }], "drop-shadow-color": [{ "drop-shadow": c15() }], grayscale: [{ grayscale: ["", p15, n20, s15] }], "hue-rotate": [{ "hue-rotate": [p15, n20, s15] }], invert: [{ invert: ["", p15, n20, s15] }], saturate: [{ saturate: [p15, n20, s15] }], sepia: [{ sepia: ["", p15, n20, s15] }], "backdrop-filter": [{ "backdrop-filter": ["", "none", n20, s15] }], "backdrop-blur": [{ "backdrop-blur": ve15() }], "backdrop-brightness": [{ "backdrop-brightness": [p15, n20, s15] }], "backdrop-contrast": [{ "backdrop-contrast": [p15, n20, s15] }], "backdrop-grayscale": [{ "backdrop-grayscale": ["", p15, n20, s15] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p15, n20, s15] }], "backdrop-invert": [{ "backdrop-invert": ["", p15, n20, s15] }], "backdrop-opacity": [{ "backdrop-opacity": [p15, n20, s15] }], "backdrop-saturate": [{ "backdrop-saturate": [p15, n20, s15] }], "backdrop-sepia": [{ "backdrop-sepia": ["", p15, n20, s15] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": a20() }], "border-spacing-x": [{ "border-spacing-x": a20() }], "border-spacing-y": [{ "border-spacing-y": a20() }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", n20, s15] }], "transition-behavior": [{ transition: ["normal", "discrete"] }], duration: [{ duration: [p15, "initial", n20, s15] }], ease: [{ ease: ["linear", "initial", O23, n20, s15] }], delay: [{ delay: [p15, n20, s15] }], animate: [{ animate: ["none", v18, n20, s15] }], backface: [{ backface: ["hidden", "visible"] }], perspective: [{ perspective: [y21, n20, s15] }], "perspective-origin": [{ "perspective-origin": F11() }], rotate: [{ rotate: J18() }], "rotate-x": [{ "rotate-x": J18() }], "rotate-y": [{ "rotate-y": J18() }], "rotate-z": [{ "rotate-z": J18() }], scale: [{ scale: Q17() }], "scale-x": [{ "scale-x": Q17() }], "scale-y": [{ "scale-y": Q17() }], "scale-z": [{ "scale-z": Q17() }], "scale-3d": ["scale-3d"], skew: [{ skew: ne18() }], "skew-x": [{ "skew-x": ne18() }], "skew-y": [{ "skew-y": ne18() }], transform: [{ transform: [n20, s15, "", "none", "gpu", "cpu"] }], "transform-origin": [{ origin: F11() }], "transform-style": [{ transform: ["3d", "flat"] }], translate: [{ translate: H15() }], "translate-x": [{ "translate-x": H15() }], "translate-y": [{ "translate-y": H15() }], "translate-z": [{ "translate-z": H15() }], "translate-none": ["translate-none"], zoom: [{ zoom: [C17, n20, s15] }], accent: [{ accent: c15() }], appearance: [{ appearance: ["none", "auto"] }], "caret-color": [{ caret: c15() }], "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", n20, s15] }], "field-sizing": [{ "field-sizing": ["fixed", "content"] }], "pointer-events": [{ "pointer-events": ["auto", "none"] }], resize: [{ resize: ["none", "", "y", "x"] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scrollbar-thumb-color": [{ "scrollbar-thumb": c15() }], "scrollbar-track-color": [{ "scrollbar-track": c15() }], "scrollbar-gutter": [{ "scrollbar-gutter": ["auto", "stable", "both"] }], "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }], "scroll-m": [{ "scroll-m": a20() }], "scroll-mx": [{ "scroll-mx": a20() }], "scroll-my": [{ "scroll-my": a20() }], "scroll-ms": [{ "scroll-ms": a20() }], "scroll-me": [{ "scroll-me": a20() }], "scroll-mbs": [{ "scroll-mbs": a20() }], "scroll-mbe": [{ "scroll-mbe": a20() }], "scroll-mt": [{ "scroll-mt": a20() }], "scroll-mr": [{ "scroll-mr": a20() }], "scroll-mb": [{ "scroll-mb": a20() }], "scroll-ml": [{ "scroll-ml": a20() }], "scroll-p": [{ "scroll-p": a20() }], "scroll-px": [{ "scroll-px": a20() }], "scroll-py": [{ "scroll-py": a20() }], "scroll-ps": [{ "scroll-ps": a20() }], "scroll-pe": [{ "scroll-pe": a20() }], "scroll-pbs": [{ "scroll-pbs": a20() }], "scroll-pbe": [{ "scroll-pbe": a20() }], "scroll-pt": [{ "scroll-pt": a20() }], "scroll-pr": [{ "scroll-pr": a20() }], "scroll-pb": [{ "scroll-pb": a20() }], "scroll-pl": [{ "scroll-pl": a20() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", n20, s15] }], fill: [{ fill: ["none", ...c15()] }], "stroke-w": [{ stroke: [p15, j19, M16, ie9] }], stroke: [{ stroke: ["none", ...c15()] }], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { "container-named": ["container-type"], overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] }, postfixLookupClassGroups: ["container-type"], orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"] };
};
var Go = ae14(de11);

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/lib/utils.ts
function cn2(...inputs) {
  return Go(e19(inputs));
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/button.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = b(
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
  const Comp = asChild ? react_slot_exports.Root : "button";
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
export {
  Button,
  buttonVariants
};
