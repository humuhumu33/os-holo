"use client";

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/form.tsx
import * as React from "react";
import { Slot } from "radix-ui";

// http-url:https://esm.sh/react-hook-form@7.79.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/react-hook-form.mjs
import h from "react";
var be = (t) => t.type === "checkbox";
var ce = (t) => t instanceof Date;
var z = (t) => t == null;
var et = (t) => typeof t == "object";
var W = (t) => !z(t) && !Array.isArray(t) && et(t) && !ce(t);
var Ye = (t) => W(t) && t.target ? be(t.target) ? t.target.checked : t.target.value : t;
var pt = (t, r) => r.split(".").some((e, i, u) => !isNaN(Number(e)) && t.has(u.slice(0, i).join(".")));
var Ct = (t) => {
  let r = t.constructor && t.constructor.prototype;
  return W(r) && r.hasOwnProperty("isPrototypeOf");
};
var Ee = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function U(t) {
  if (t instanceof Date) return new Date(t);
  let r = typeof FileList < "u" && t instanceof FileList;
  if (Ee && (t instanceof Blob || r)) return t;
  let e = Array.isArray(t);
  if (!e && !(W(t) && Ct(t))) return t;
  let i = e ? [] : Object.create(Object.getPrototypeOf(t));
  for (let u in t) Object.prototype.hasOwnProperty.call(t, u) && (i[u] = U(t[u]));
  return i;
}
var le = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change", SUBMIT: "submit", TRIGGER: "trigger", VALID: "valid" };
var se = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" };
var Rt = ["__proto__", "constructor", "prototype"];
var Fe = (t) => /^\w*$/.test(t);
var T = (t) => t === void 0;
var pe = (t) => t.split(/[.[\]'"]/g).filter(Boolean);
var c = (t, r, e) => {
  if (!r || !W(t)) return e;
  let i = Fe(r) ? [r] : pe(r);
  if (i.some((l) => Rt.includes(l))) return e;
  let u = i.reduce((l, o) => z(l) ? void 0 : l[o], t);
  return T(u) || u === t ? T(t[r]) ? e : t[r] : u;
};
var X = (t) => typeof t == "boolean";
var J = (t) => typeof t == "function";
var M = (t, r, e) => {
  let i = -1, u = Fe(r) ? [r] : pe(r), l = u.length, o = l - 1;
  for (; ++i < l; ) {
    let f = u[i], D = e;
    if (i !== o) {
      let w = t[f];
      D = W(w) || Array.isArray(w) ? w : isNaN(+u[i + 1]) ? {} : [];
    }
    if (Rt.includes(f)) return;
    t[f] = D, t = t[f];
  }
};
var tt = h.createContext(null);
tt.displayName = "HookFormControlContext";
var Ce = () => h.useContext(tt);
var Tt = (t, r, e, i = true) => {
  let u = {};
  for (let l in t) Object.defineProperty(u, l, { get: () => {
    let o = l;
    return r._proxyFormState[o] !== se.all && (r._proxyFormState[o] = !i || se.all), e && (e[o] = true), t[o];
  } });
  return u;
};
var Oe = Ee ? h.useLayoutEffect : h.useEffect;
function Mt(t) {
  let r = Ce(), { control: e = r, disabled: i, name: u, exact: l } = t || {}, [o, f] = h.useState(() => ({ ...e._formState, defaultValues: e._defaultValues })), D = h.useRef({ isDirty: false, isLoading: false, dirtyFields: false, touchedFields: false, validatingFields: false, isValidating: false, isValid: false, errors: false });
  return Oe(() => e._subscribe({ name: u, formState: D.current, exact: l, callback: (w) => {
    !i && f({ ...e._formState, ...w, defaultValues: e._defaultValues });
  } }), [u, i, l]), h.useEffect(() => {
    D.current.isValid && e._setValid(true);
  }, [e]), h.useMemo(() => Tt(o, e, D.current, false), [o, e]);
}
var Q = (t) => typeof t == "string";
var je = (t, r, e, i, u) => Q(t) ? (i && r.watch.add(t), c(e, t, u)) : Array.isArray(t) ? t.map((l) => (i && r.watch.add(l), c(e, l))) : (i && (r.watchAll = true), e);
var ze = (t) => z(t) || !et(t);
var Vt = (t, r) => r.length === 0 && !Array.isArray(t) && !Ct(t);
function Z(t, r, e = /* @__PURE__ */ new WeakMap()) {
  if (t === r) return true;
  if (ze(t) || ze(r)) return Object.is(t, r);
  if (ce(t) && ce(r)) return Object.is(t.getTime(), r.getTime());
  let i = Object.keys(t), u = Object.keys(r);
  if (i.length !== u.length) return false;
  if (Vt(t, i) || Vt(r, u)) return Object.is(t, r);
  let l = e.get(t);
  if (l && l.has(r)) return true;
  l ? l.add(r) : e.set(t, new WeakSet([r]));
  for (let o of i) {
    let f = t[o];
    if (!(o in r)) return false;
    if (o !== "ref") {
      let D = r[o];
      if (ce(f) && ce(D) || (W(f) || Array.isArray(f)) && (W(D) || Array.isArray(D)) ? !Z(f, D, e) : !Object.is(f, D)) return false;
    }
  }
  return true;
}
function Ut(t) {
  let r = Ce(), { control: e = r, name: i, defaultValue: u, disabled: l, exact: o, compute: f } = t || {}, D = h.useRef(u), w = h.useRef(f), p = h.useRef(void 0), b = h.useRef(e), V = h.useRef(i);
  w.current = f;
  let [F, P] = h.useState(() => {
    let S = e._getWatch(i, D.current);
    return w.current ? w.current(S) : S;
  }), L = h.useCallback((S) => {
    let m = je(i, e._names, S || e._formValues, false, D.current);
    return w.current ? w.current(m) : m;
  }, [e._formValues, e._names, i]), I = h.useCallback((S) => {
    if (!l) {
      let m = je(i, e._names, S || e._formValues, false, D.current);
      if (w.current) {
        let v = w.current(m);
        Z(v, p.current) || (P(v), p.current = v);
      } else P(m);
    }
  }, [e._formValues, e._names, l, i]);
  Oe(() => ((b.current !== e || !Z(V.current, i)) && (b.current = e, V.current = i, I()), e._subscribe({ name: i, formState: { values: true }, exact: o, callback: (S) => {
    I(S.values);
  } })), [e, o, i, I]), h.useEffect(() => e._removeUnmounted());
  let N = b.current !== e, k = V.current, G = h.useMemo(() => {
    if (l) return null;
    let S = !N && !Z(k, i);
    return N || S ? L() : null;
  }, [l, N, i, k, L]);
  return G !== null ? G : F;
}
function Zt(t) {
  let r = Ce(), { name: e, disabled: i, control: u = r, shouldUnregister: l, defaultValue: o, exact: f = true } = t, D = pt(u._names.array, e), w = h.useMemo(() => c(u._formValues, e, c(u._defaultValues, e, o)), [u, e, o]), p = Ut({ control: u, name: e, defaultValue: w, exact: f }), b = Mt({ control: u, name: e, exact: f }), V = h.useRef(t), F = h.useRef(null), P = h.useRef(u.register(e, { ...t.rules, value: p, ...X(t.disabled) ? { disabled: t.disabled } : {} }));
  V.current = t;
  let L = h.useMemo(() => Object.defineProperties({}, { invalid: { enumerable: true, get: () => !!c(b.errors, e) }, isDirty: { enumerable: true, get: () => !!c(b.dirtyFields, e) }, isTouched: { enumerable: true, get: () => !!c(b.touchedFields, e) }, isValidating: { enumerable: true, get: () => !!c(b.validatingFields, e) }, error: { enumerable: true, get: () => c(b.errors, e) } }), [b, e]), I = h.useCallback((S) => {
    let m = Ye(S);
    return c(u._fields, e) || (P.current = u.register(e, { ...V.current.rules, value: m })), P.current.onChange({ target: { value: Ye(S), name: e }, type: le.CHANGE });
  }, [e, u]), N = h.useCallback(() => P.current.onBlur({ target: { value: c(u._formValues, e), name: e }, type: le.BLUR }), [e, u._formValues]), k = h.useCallback((S) => {
    S && (F.current = { focus: () => J(S.focus) && S.focus(), select: () => J(S.select) && S.select(), setCustomValidity: (v) => J(S.setCustomValidity) && S.setCustomValidity(v), reportValidity: () => J(S.reportValidity) && S.reportValidity() });
    let m = c(u._fields, e);
    m && m._f && S && (m._f.ref = F.current);
  }, [u._fields, e]), G = h.useMemo(() => ({ name: e, value: p, ...X(i) || b.disabled ? { disabled: b.disabled || i } : {}, onChange: I, onBlur: N, ref: k }), [e, i, b.disabled, I, N, k, p]);
  return h.useEffect(() => {
    let S = u._options.shouldUnregister || l;
    u.register(e, { ...V.current.rules, ...X(V.current.disabled) ? { disabled: V.current.disabled } : {} });
    let m = (v, x) => {
      let E = c(u._fields, v);
      E && E._f && (E._f.mount = x);
    };
    if (m(e, true), S) {
      let v = U(c(l ? u._defaultValues : u._options.values || u._defaultValues, e, c(u._options.defaultValues, e, V.current.defaultValue)));
      M(u._defaultValues, e, v), T(c(u._formValues, e)) && M(u._formValues, e, v);
    }
    if (!D && u.register(e), F.current) {
      let v = c(u._fields, e);
      v && v._f && (v._f.ref = F.current);
    }
    return () => {
      (D ? S && !u._state.action : S) ? u.unregister(e) : m(e, false);
    };
  }, [e, u, D, l]), h.useEffect(() => {
    u._setDisabledField({ disabled: i, name: e });
  }, [i, e, u]), h.useMemo(() => ({ field: G, formState: b, fieldState: L }), [G, b, L]);
}
var br = (t) => t.render(Zt(t));
var rt = h.createContext(null);
rt.displayName = "HookFormContext";
var er = () => h.useContext(rt);
var Fr = ({ children: t, watch: r, getValues: e, getFieldState: i, setError: u, clearErrors: l, setValue: o, setValues: f, trigger: D, formState: w, resetField: p, reset: b, handleSubmit: V, unregister: F, control: P, register: L, setFocus: I, subscribe: N }) => {
  let k = h.useMemo(() => ({ watch: r, getValues: e, getFieldState: i, setError: u, clearErrors: l, setValue: o, setValues: f, trigger: D, formState: w, resetField: p, reset: b, handleSubmit: V, unregister: F, control: P, register: L, setFocus: I, subscribe: N }), [l, P, w, i, e, V, L, b, p, u, I, o, f, N, D, F, r]);
  return h.createElement(rt.Provider, { value: k }, h.createElement(tt.Provider, { value: k.control }, t));
};
var mr = { mode: se.onSubmit, reValidateMode: se.onChange, shouldFocusError: true };

// ../../ui-main/ui-main/apps/v4/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/label.tsx
import { Label as LabelPrimitive } from "radix-ui";
import { jsx } from "react/jsx-runtime";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/form.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Form = Fr;
var FormFieldContext = React.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx2(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx2(br, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = er();
  const formState = Mt({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React.useId();
  return /* @__PURE__ */ jsx2(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    }
  ) });
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx2(
    Label,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx2(
    Slot.Root,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx2(
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx2(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-sm text-destructive", className),
      ...props,
      children: body
    }
  );
}
export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField
};
