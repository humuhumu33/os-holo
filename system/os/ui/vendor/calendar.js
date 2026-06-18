"use client";

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/calendar.tsx
import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "lucide-react";

// http-url:https://esm.sh/@date-fns/tz@1.5.0/es2022/tzName.mjs
function o(e30, n19, t8 = "long") {
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", timeZone: e30, timeZoneName: t8 }).format(n19).split(/\s/g).slice(2).join(" ");
}

// http-url:https://esm.sh/@date-fns/tz@1.5.0/es2022/tzOffset.mjs
var e = {};
var s = {};
function u(t8, r32) {
  try {
    let n19 = (e[t8] ||= new Intl.DateTimeFormat("en-US", { timeZone: t8, timeZoneName: "longOffset" }).format)(r32).split("GMT")[1];
    return n19 in s ? s[n19] : o2(n19, n19.split(":"));
  } catch {
    if (t8 in s) return s[t8];
    let f75 = t8?.match(a);
    return f75 ? o2(t8, f75.slice(1)) : NaN;
  }
}
var a = /([+-]\d\d):?(\d\d)?/;
function o2(t8, r32) {
  let f75 = +(r32[0] || 0), n19 = +(r32[1] || 0), c60 = +(r32[2] || 0) / 60;
  return s[t8] = f75 * 60 + n19 > 0 ? f75 * 60 + n19 + c60 : f75 * 60 - n19 - c60;
}

// http-url:https://esm.sh/@date-fns/tz@1.5.0/es2022/date/mini.mjs
var f = class t extends Date {
  constructor(...e30) {
    super(), e30.length > 1 && typeof e30[e30.length - 1] == "string" && (this.timeZone = e30.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(u(this.timeZone, this)) ? this.setTime(NaN) : e30.length ? typeof e30[0] == "number" && (e30.length === 1 || e30.length === 2 && typeof e30[1] != "number") ? this.setTime(e30[0]) : typeof e30[0] == "string" ? this.setTime(+new Date(e30[0])) : e30[0] instanceof Date ? this.setTime(+e30[0]) : (this.setTime(+new Date(...e30)), z(this, e30)) : this.setTime(Date.now());
  }
  static tz(e30, ...n19) {
    return n19.length ? new t(...n19, e30) : new t(Date.now(), e30);
  }
  withTimeZone(e30) {
    return new t(+this, e30);
  }
  getTimezoneOffset() {
    let e30 = -u(this.timeZone, this);
    return e30 > 0 ? Math.floor(e30) : Math.ceil(e30);
  }
  setTime(e30) {
    return Date.prototype.setTime.apply(this, arguments), p(this), +this;
  }
  [Symbol.for("constructDateFrom")](e30) {
    return new t(+new Date(e30), this.timeZone);
  }
};
var H = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((t8) => {
  if (!H.test(t8)) return;
  let e30 = t8.replace(H, "$1UTC");
  f.prototype[e30] && (t8.startsWith("get") ? f.prototype[t8] = function() {
    return this.internal[e30]();
  } : (f.prototype[t8] = function() {
    return Date.prototype[e30].apply(this.internal, arguments), j(this), +this;
  }, f.prototype[e30] = function() {
    return Date.prototype[e30].apply(this, arguments), p(this), +this;
  }));
});
function p(t8) {
  t8.internal.setTime(+t8), t8.internal.setUTCSeconds(t8.internal.getUTCSeconds() - Math.round(-u(t8.timeZone, t8) * 60));
}
function j(t8) {
  Date.prototype.setFullYear.call(t8, t8.internal.getUTCFullYear(), t8.internal.getUTCMonth(), t8.internal.getUTCDate()), Date.prototype.setHours.call(t8, t8.internal.getUTCHours(), t8.internal.getUTCMinutes(), t8.internal.getUTCSeconds(), t8.internal.getUTCMilliseconds()), z(t8);
}
function z(t8, e30) {
  let n19 = Array.isArray(e30) ? v(e30) : +t8.internal, h48 = u(t8.timeZone, t8), o36 = h48 > 0 ? Math.floor(h48) : Math.ceil(h48), T44 = /* @__PURE__ */ new Date(+t8);
  T44.setUTCHours(T44.getUTCHours() - 1);
  let r32 = -(/* @__PURE__ */ new Date(+t8)).getTimezoneOffset(), O24 = -(/* @__PURE__ */ new Date(+T44)).getTimezoneOffset(), b58 = r32 - O24, S71 = r32;
  if (b58 && r32 !== o36) {
    let l53 = Date.prototype.getHours.apply(t8), U3 = Array.isArray(e30) ? e30[3] || 0 : t8.internal.getUTCHours();
    if (l53 !== U3) {
      let i19 = /* @__PURE__ */ new Date(+t8), Z3 = r32 - o36;
      Z3 && i19.setUTCMinutes(i19.getUTCMinutes() + Z3);
      let M78 = u(t8.timeZone, i19);
      (M78 > 0 ? Math.floor(M78) : Math.ceil(M78)) === o36 && (S71 = O24);
    }
  }
  let u50 = S71 - o36;
  u50 && Date.prototype.setUTCMinutes.call(t8, Date.prototype.getUTCMinutes.call(t8) + u50);
  let m72 = /* @__PURE__ */ new Date(+t8);
  m72.setUTCSeconds(0);
  let g65 = r32 > 0 ? m72.getSeconds() : (m72.getSeconds() - 60) % 60, a33 = Math.round(-(u(t8.timeZone, t8) * 60)) % 60;
  (a33 || g65) && Date.prototype.setUTCSeconds.call(t8, Date.prototype.getUTCSeconds.call(t8) + a33 + g65);
  let y75 = u(t8.timeZone, t8), c60 = y75 > 0 ? Math.floor(y75) : Math.ceil(y75), F77 = -(/* @__PURE__ */ new Date(+t8)).getTimezoneOffset() - c60, I22 = c60 !== o36, D66 = F77 - u50, w71 = c60 - o36, N66 = n19 - c60 * 60 * 1e3, W61 = w71 > 0 && x(t8) - n19 === w71 * 60 * 1e3 && x(t8, N66) !== n19;
  if (I22 && D66 && !W61) {
    Date.prototype.setUTCMinutes.call(t8, Date.prototype.getUTCMinutes.call(t8) + D66);
    let l53 = u(t8.timeZone, t8), U3 = l53 > 0 ? Math.floor(l53) : Math.ceil(l53), i19 = c60 - U3;
    i19 && D66 < 0 && Date.prototype.setUTCMinutes.call(t8, Date.prototype.getUTCMinutes.call(t8) + i19);
  }
  p(t8);
  let C62 = (e30 ? n19 : n19 + a33 * 1e3) - +t8.internal;
  C62 && Math.abs(C62) < 1800 * 1e3 && (Date.prototype.setTime.call(t8, +t8 + C62), p(t8));
}
function v(t8) {
  return Date.UTC(t8[0], t8.length > 1 ? t8[1] : 0, t8.length > 2 ? t8[2] : 1, ...t8.slice(3));
}
function x(t8, e30) {
  let n19 = new Date(e30 ?? +t8);
  return n19.setUTCSeconds(n19.getUTCSeconds() - Math.round(-u(t8.timeZone, n19) * 60)), +n19;
}

// http-url:https://esm.sh/@date-fns/tz@1.5.0/es2022/date.mjs
var r = class o3 extends f {
  static tz(t8, ...e30) {
    return e30.length ? new o3(...e30, t8) : new o3(Date.now(), t8);
  }
  toISOString() {
    let [t8, e30, n19] = this.tzComponents(), i19 = `${t8}${e30}:${n19}`;
    return this.internal.toISOString().slice(0, -1) + i19;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    let [t8, e30, n19, i19] = this.internal.toUTCString().split(" ");
    return `${t8?.slice(0, -1)} ${n19} ${e30} ${i19}`;
  }
  toTimeString() {
    let t8 = this.internal.toUTCString().split(" ")[4], [e30, n19, i19] = this.tzComponents();
    return `${t8} GMT${e30}${n19}${i19} (${o(this.timeZone, this)})`;
  }
  toLocaleString(t8, e30) {
    return Date.prototype.toLocaleString.call(this, t8, { ...e30, timeZone: e30?.timeZone || this.timeZone });
  }
  toLocaleDateString(t8, e30) {
    return Date.prototype.toLocaleDateString.call(this, t8, { ...e30, timeZone: e30?.timeZone || this.timeZone });
  }
  toLocaleTimeString(t8, e30) {
    return Date.prototype.toLocaleTimeString.call(this, t8, { ...e30, timeZone: e30?.timeZone || this.timeZone });
  }
  tzComponents() {
    let t8 = this.getTimezoneOffset(), e30 = t8 > 0 ? "-" : "+", n19 = String(Math.floor(Math.abs(t8) / 60)).padStart(2, "0"), i19 = String(Math.abs(t8) % 60).padStart(2, "0");
    return [e30, n19, i19];
  }
  withTimeZone(t8) {
    return new o3(+this, t8);
  }
  [Symbol.for("constructDateFrom")](t8) {
    return new o3(+new Date(t8), this.timeZone);
  }
};

// http-url:https://esm.sh/@date-fns/tz@1.5.0/es2022/constants.mjs
var o4 = Symbol.for("constructDateFrom");

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/_lib/buildFormatLongFn.mjs
function r2(t8) {
  return (d43 = {}) => {
    let n19 = d43.width ? String(d43.width) : t8.defaultWidth;
    return t8.formats[n19] || t8.formats[t8.defaultWidth];
  };
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/_lib/buildLocalizeFn.mjs
function c(t8) {
  return (l53, e30) => {
    let u50 = e30?.context ? String(e30.context) : "standalone", d43;
    if (u50 === "formatting" && t8.formattingValues) {
      let n19 = t8.defaultFormattingWidth || t8.defaultWidth, i19 = e30?.width ? String(e30.width) : n19;
      d43 = t8.formattingValues[i19] || t8.formattingValues[n19];
    } else {
      let n19 = t8.defaultWidth, i19 = e30?.width ? String(e30.width) : t8.defaultWidth;
      d43 = t8.values[i19] || t8.values[n19];
    }
    let a33 = t8.argumentCallback ? t8.argumentCallback(l53) : l53;
    return d43[a33];
  };
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/_lib/buildMatchFn.mjs
function P(t8) {
  return (n19, e30 = {}) => {
    let l53 = e30.width, h48 = l53 && t8.matchPatterns[l53] || t8.matchPatterns[t8.defaultMatchWidth], i19 = n19.match(h48);
    if (!i19) return null;
    let r32 = i19[0], c60 = l53 && t8.parsePatterns[l53] || t8.parsePatterns[t8.defaultParseWidth], d43 = Array.isArray(c60) ? o5(c60, (u50) => u50.test(r32)) : s2(c60, (u50) => u50.test(r32)), a33;
    a33 = t8.valueCallback ? t8.valueCallback(d43) : d43, a33 = e30.valueCallback ? e30.valueCallback(a33) : a33;
    let f75 = n19.slice(r32.length);
    return { value: a33, rest: f75 };
  };
}
function s2(t8, n19) {
  for (let e30 in t8) if (Object.prototype.hasOwnProperty.call(t8, e30) && n19(t8[e30])) return e30;
}
function o5(t8, n19) {
  for (let e30 = 0; e30 < t8.length; e30++) if (n19(t8[e30])) return e30;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/_lib/buildMatchPatternFn.mjs
function h(t8) {
  return (e30, c60 = {}) => {
    let n19 = e30.match(t8.matchPattern);
    if (!n19) return null;
    let u50 = n19[0], a33 = e30.match(t8.parsePattern);
    if (!a33) return null;
    let l53 = t8.valueCallback ? t8.valueCallback(a33[0]) : a33[0];
    l53 = c60.valueCallback ? c60.valueCallback(l53) : l53;
    let r32 = e30.slice(u50.length);
    return { value: l53, rest: r32 };
  };
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/af.mjs
var h2 = { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "yyyy/MM/dd" };
var f2 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var v2 = { full: "{{date}} 'om' {{time}}", long: "{{date}} 'om' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var s3 = { date: r2({ formats: h2, defaultWidth: "full" }), time: r2({ formats: f2, defaultWidth: "full" }), dateTime: r2({ formats: v2, defaultWidth: "full" }) };
var b = { narrow: ["vC", "nC"], abbreviated: ["vC", "nC"], wide: ["voor Christus", "na Christus"] };
var y = { narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1ste kwartaal", "2de kwartaal", "3de kwartaal", "4de kwartaal"] };
var M = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], wide: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"] };
var w = { narrow: ["S", "M", "D", "W", "D", "V", "S"], short: ["So", "Ma", "Di", "Wo", "Do", "Vr", "Sa"], abbreviated: ["Son", "Maa", "Din", "Woe", "Don", "Vry", "Sat"], wide: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"] };
var D = { narrow: { am: "vm", pm: "nm", midnight: "middernag", noon: "middaguur", morning: "oggend", afternoon: "middag", evening: "laat middag", night: "aand" }, abbreviated: { am: "vm", pm: "nm", midnight: "middernag", noon: "middaguur", morning: "oggend", afternoon: "middag", evening: "laat middag", night: "aand" }, wide: { am: "vm", pm: "nm", midnight: "middernag", noon: "middaguur", morning: "oggend", afternoon: "middag", evening: "laat middag", night: "aand" } };
var P2 = { narrow: { am: "vm", pm: "nm", midnight: "middernag", noon: "uur die middag", morning: "uur die oggend", afternoon: "uur die middag", evening: "uur die aand", night: "uur die aand" }, abbreviated: { am: "vm", pm: "nm", midnight: "middernag", noon: "uur die middag", morning: "uur die oggend", afternoon: "uur die middag", evening: "uur die aand", night: "uur die aand" }, wide: { am: "vm", pm: "nm", midnight: "middernag", noon: "uur die middag", morning: "uur die oggend", afternoon: "uur die middag", evening: "uur die aand", night: "uur die aand" } };
var W = (e30) => {
  let a33 = Number(e30), t8 = a33 % 100;
  if (t8 < 20) switch (t8) {
    case 1:
    case 8:
      return a33 + "ste";
    default:
      return a33 + "de";
  }
  return a33 + "ste";
};
var g = { ordinalNumber: W, era: c({ values: b, defaultWidth: "wide" }), quarter: c({ values: y, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: M, defaultWidth: "wide" }), day: c({ values: w, defaultWidth: "wide" }), dayPeriod: c({ values: D, defaultWidth: "wide", formattingValues: P2, defaultFormattingWidth: "wide" }) };
var k = /^(\d+)(ste|de)?/i;
var J = /\d+/i;
var V = { narrow: /^([vn]\.? ?C\.?)/, abbreviated: /^([vn]\. ?C\.?)/, wide: /^((voor|na) Christus)/ };
var x2 = { any: [/^v/, /^n/] };
var F = { narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234](st|d)e kwartaal/i };
var A = { any: [/1/i, /2/i, /3/i, /4/i] };
var C = { narrow: /^[jfmasond]/i, abbreviated: /^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i, wide: /^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i };
var N = { narrow: [/^J/i, /^F/i, /^M/i, /^A/i, /^M/i, /^J/i, /^J/i, /^A/i, /^S/i, /^O/i, /^N/i, /^D/i], any: [/^Jan/i, /^Feb/i, /^Mrt/i, /^Apr/i, /^Mei/i, /^Jun/i, /^Jul/i, /^Aug/i, /^Sep/i, /^Okt/i, /^Nov/i, /^Dec/i] };
var H2 = { narrow: /^[smdwv]/i, short: /^(So|Ma|Di|Wo|Do|Vr|Sa)/i, abbreviated: /^(Son|Maa|Din|Woe|Don|Vry|Sat)/i, wide: /^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i };
var O = { narrow: [/^S/i, /^M/i, /^D/i, /^W/i, /^D/i, /^V/i, /^S/i], any: [/^So/i, /^Ma/i, /^Di/i, /^Wo/i, /^Do/i, /^Vr/i, /^Sa/i] };
var j2 = { any: /^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i };
var z2 = { any: { am: /^vm/i, pm: /^nm/i, midnight: /^middernag/i, noon: /^middaguur/i, morning: /oggend/i, afternoon: /middag/i, evening: /laat middag/i, night: /aand/i } };
var l = { ordinalNumber: h({ matchPattern: k, parsePattern: J, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: V, defaultMatchWidth: "wide", parsePatterns: x2, defaultParseWidth: "any" }), quarter: P({ matchPatterns: F, defaultMatchWidth: "wide", parsePatterns: A, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: C, defaultMatchWidth: "wide", parsePatterns: N, defaultParseWidth: "any" }), day: P({ matchPatterns: H2, defaultMatchWidth: "wide", parsePatterns: O, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: j2, defaultMatchWidth: "any", parsePatterns: z2, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ar-DZ.mjs
var f3 = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" };
var g2 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var w2 = { full: "{{date}} '\u0639\u0646\u062F' {{time}}", long: "{{date}} '\u0639\u0646\u062F' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m = { date: r2({ formats: f3, defaultWidth: "full" }), time: r2({ formats: g2, defaultWidth: "full" }), dateTime: r2({ formats: w2, defaultWidth: "full" }) };
var b2 = { narrow: ["\u0642", "\u0628"], abbreviated: ["\u0642.\u0645.", "\u0628.\u0645."], wide: ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0628\u0639\u062F \u0627\u0644\u0645\u064A\u0644\u0627\u062F"] };
var P3 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u06311", "\u06312", "\u06313", "\u06314"], wide: ["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"] };
var T = { narrow: ["\u062C", "\u0641", "\u0645", "\u0623", "\u0645", "\u062C", "\u062C", "\u0623", "\u0633", "\u0623", "\u0646", "\u062F"], abbreviated: ["\u062C\u0627\u0646\u0640", "\u0641\u064A\u0641\u0640", "\u0645\u0627\u0631\u0633", "\u0623\u0641\u0631\u064A\u0644", "\u0645\u0627\u064A\u0640", "\u062C\u0648\u0627\u0646\u0640", "\u062C\u0648\u064A\u0640", "\u0623\u0648\u062A", "\u0633\u0628\u062A\u0640", "\u0623\u0643\u062A\u0640", "\u0646\u0648\u0641\u0640", "\u062F\u064A\u0633\u0640"], wide: ["\u062C\u0627\u0646\u0641\u064A", "\u0641\u064A\u0641\u0631\u064A", "\u0645\u0627\u0631\u0633", "\u0623\u0641\u0631\u064A\u0644", "\u0645\u0627\u064A", "\u062C\u0648\u0627\u0646", "\u062C\u0648\u064A\u0644\u064A\u0629", "\u0623\u0648\u062A", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"] };
var y2 = { narrow: ["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"], short: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"], abbreviated: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u0640", "\u062B\u0644\u0627", "\u0623\u0631\u0628\u0640", "\u062E\u0645\u064A\u0640", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"], wide: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"] };
var v3 = { narrow: { am: "\u0635", pm: "\u0645", midnight: "\u0646", noon: "\u0638", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0645\u0633\u0627\u0621\u0627\u064B", night: "\u0644\u064A\u0644\u0627\u064B" }, abbreviated: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0645\u0633\u0627\u0621\u0627\u064B", night: "\u0644\u064A\u0644\u0627\u064B" }, wide: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0645\u0633\u0627\u0621\u0627\u064B", night: "\u0644\u064A\u0644\u0627\u064B" } };
var M2 = { narrow: { am: "\u0635", pm: "\u0645", midnight: "\u0646", noon: "\u0638", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0640\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644" }, abbreviated: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644" }, wide: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0640\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644" } };
var W2 = (t8) => String(t8);
var u2 = { ordinalNumber: W2, era: c({ values: b2, defaultWidth: "wide" }), quarter: c({ values: P3, defaultWidth: "wide", argumentCallback: (t8) => Number(t8) - 1 }), month: c({ values: T, defaultWidth: "wide" }), day: c({ values: y2, defaultWidth: "wide" }), dayPeriod: c({ values: v3, defaultWidth: "wide", formattingValues: M2, defaultFormattingWidth: "wide" }) };
var D2 = /^(\d+)(th|st|nd|rd)?/i;
var k2 = /\d+/i;
var z3 = { narrow: /^(ق|ب)/i, abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i, wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i };
var F2 = { any: [/^قبل/i, /^بعد/i] };
var X = { narrow: /^[1234]/i, abbreviated: /^ر[1234]/i, wide: /^الربع [1234]/i };
var L = { any: [/1/i, /2/i, /3/i, /4/i] };
var N2 = { narrow: /^[جفمأسند]/i, abbreviated: /^(جان|فيف|مار|أفر|ماي|جوا|جوي|أوت|سبت|أكت|نوف|ديس)/i, wide: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/i };
var S = { narrow: [/^ج/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ج/i, /^ج/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i], any: [/^جان/i, /^فيف/i, /^مار/i, /^أفر/i, /^ماي/i, /^جوا/i, /^جوي/i, /^أوت/i, /^سبت/i, /^أكت/i, /^نوف/i, /^ديس/i] };
var V2 = { narrow: /^[حنثرخجس]/i, short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, abbreviated: /^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i, wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i };
var E = { narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i], wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i], any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i] };
var C2 = { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i };
var R = { any: { am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i } };
var c2 = { ordinalNumber: h({ matchPattern: D2, parsePattern: k2, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: z3, defaultMatchWidth: "wide", parsePatterns: F2, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X, defaultMatchWidth: "wide", parsePatterns: L, defaultParseWidth: "any", valueCallback: (t8) => Number(t8) + 1 }), month: P({ matchPatterns: N2, defaultMatchWidth: "wide", parsePatterns: S, defaultParseWidth: "any" }), day: P({ matchPatterns: V2, defaultMatchWidth: "wide", parsePatterns: E, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: C2, defaultMatchWidth: "any", parsePatterns: R, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ar-EG.mjs
var f4 = { full: "EEEE\u060C do MMMM y", long: "do MMMM y", medium: "dd/MMM/y", short: "d/MM/y" };
var w3 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var g3 = { full: "{{date}} '\u0627\u0644\u0633\u0627\u0639\u0629' {{time}}", long: "{{date}} '\u0627\u0644\u0633\u0627\u0639\u0629' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m2 = { date: r2({ formats: f4, defaultWidth: "full" }), time: r2({ formats: w3, defaultWidth: "full" }), dateTime: r2({ formats: g3, defaultWidth: "full" }) };
var b3 = { narrow: ["\u0642", "\u0628"], abbreviated: ["\u0642.\u0645", "\u0628.\u0645"], wide: ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0628\u0639\u062F \u0627\u0644\u0645\u064A\u0644\u0627\u062F"] };
var P4 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u06311", "\u06312", "\u06313", "\u06314"], wide: ["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"] };
var T2 = { narrow: ["\u064A", "\u0641", "\u0645", "\u0623", "\u0645", "\u064A", "\u064A", "\u0623", "\u0633", "\u0623", "\u0646", "\u062F"], abbreviated: ["\u064A\u0646\u0627", "\u0641\u0628\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u0640", "\u064A\u0648\u0644\u0640", "\u0623\u063A\u0633\u0640", "\u0633\u0628\u062A\u0640", "\u0623\u0643\u062A\u0640", "\u0646\u0648\u0641\u0640", "\u062F\u064A\u0633\u0640"], wide: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"] };
var y3 = { narrow: ["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"], short: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"], abbreviated: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"], wide: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"] };
var v4 = { narrow: { am: "\u0635", pm: "\u0645", midnight: "\u0646", noon: "\u0638", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0645\u0633\u0627\u0621\u064B", night: "\u0644\u064A\u0644\u0627\u064B" }, abbreviated: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631\u0627\u064B", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0645\u0633\u0627\u0621\u064B", night: "\u0644\u064A\u0644\u0627\u064B" }, wide: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631\u0627\u064B", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0645\u0633\u0627\u0621\u064B", night: "\u0644\u064A\u0644\u0627\u064B" } };
var M3 = { narrow: { am: "\u0635", pm: "\u0645", midnight: "\u0646", noon: "\u0638", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644" }, abbreviated: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631\u0627\u064B", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644" }, wide: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0638\u0647\u0631\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644" } };
var W3 = (t8, o36) => String(t8);
var u3 = { ordinalNumber: W3, era: c({ values: b3, defaultWidth: "wide" }), quarter: c({ values: P4, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: T2, defaultWidth: "wide" }), day: c({ values: y3, defaultWidth: "wide" }), dayPeriod: c({ values: v4, defaultWidth: "wide", formattingValues: M3, defaultFormattingWidth: "wide" }) };
var D3 = /^(\d+)/;
var k3 = /\d+/i;
var z4 = { narrow: /^(ق|ب)/g, abbreviated: /^(ق.م|ب.م)/g, wide: /^(قبل الميلاد|بعد الميلاد)/g };
var F3 = { any: [/^ق/g, /^ب/g] };
var E2 = { narrow: /^[1234]/, abbreviated: /^ر[1234]/, wide: /^الربع (الأول|الثاني|الثالث|الرابع)/ };
var V3 = { wide: [/الربع الأول/, /الربع الثاني/, /الربع الثالث/, /الربع الرابع/], any: [/1/, /2/, /3/, /4/] };
var X2 = { narrow: /^(ي|ف|م|أ|س|ن|د)/, abbreviated: /^(ينا|فبر|مارس|أبريل|مايو|يونـ|يولـ|أغسـ|سبتـ|أكتـ|نوفـ|ديسـ)/, wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/ };
var L2 = { narrow: [/^ي/, /^ف/, /^م/, /^أ/, /^م/, /^ي/, /^ي/, /^أ/, /^س/, /^أ/, /^ن/, /^د/], any: [/^ينا/, /^فبر/, /^مارس/, /^أبريل/, /^مايو/, /^يون/, /^يول/, /^أغس/, /^سبت/, /^أكت/, /^نوف/, /^ديس/] };
var S2 = { narrow: /^(ح|ن|ث|ر|خ|ج|س)/, short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/, abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/, wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/ };
var C3 = { narrow: [/^ح/, /^ن/, /^ث/, /^ر/, /^خ/, /^ج/, /^س/], any: [/أحد/, /اثنين/, /ثلاثاء/, /أربعاء/, /خميس/, /جمعة/, /سبت/] };
var N3 = { narrow: /^(ص|م|ن|ظ|في الصباح|بعد الظهر|في المساء|في الليل)/, abbreviated: /^(ص|م|نصف الليل|ظهراً|في الصباح|بعد الظهر|في المساء|في الليل)/, wide: /^(ص|م|نصف الليل|في الصباح|ظهراً|بعد الظهر|في المساء|في الليل)/, any: /^(ص|م|صباح|ظهر|مساء|ليل)/ };
var R2 = { any: { am: /^ص/, pm: /^م/, midnight: /^ن/, noon: /^ظ/, morning: /^ص/, afternoon: /^بعد/, evening: /^م/, night: /^ل/ } };
var c3 = { ordinalNumber: h({ matchPattern: D3, parsePattern: k3, valueCallback: function(t8) {
  return parseInt(t8, 10);
} }), era: P({ matchPatterns: z4, defaultMatchWidth: "wide", parsePatterns: F3, defaultParseWidth: "any" }), quarter: P({ matchPatterns: E2, defaultMatchWidth: "wide", parsePatterns: V3, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: X2, defaultMatchWidth: "wide", parsePatterns: L2, defaultParseWidth: "any" }), day: P({ matchPatterns: S2, defaultMatchWidth: "wide", parsePatterns: C3, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: N3, defaultMatchWidth: "any", parsePatterns: R2, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ar-MA.mjs
var f5 = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" };
var g4 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var w4 = { full: "{{date}} '\u0639\u0646\u062F' {{time}}", long: "{{date}} '\u0639\u0646\u062F' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m3 = { date: r2({ formats: f5, defaultWidth: "full" }), time: r2({ formats: g4, defaultWidth: "full" }), dateTime: r2({ formats: w4, defaultWidth: "full" }) };
var b4 = { narrow: ["\u0642", "\u0628"], abbreviated: ["\u0642.\u0645.", "\u0628.\u0645."], wide: ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0628\u0639\u062F \u0627\u0644\u0645\u064A\u0644\u0627\u062F"] };
var P5 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u06311", "\u06312", "\u06313", "\u06314"], wide: ["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"] };
var T3 = { narrow: ["\u064A", "\u0641", "\u0645", "\u0623", "\u0645", "\u064A", "\u064A", "\u063A", "\u0634", "\u0623", "\u0646", "\u062F"], abbreviated: ["\u064A\u0646\u0627", "\u0641\u0628\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A", "\u064A\u0648\u0646\u0640", "\u064A\u0648\u0644\u0640", "\u063A\u0634\u062A", "\u0634\u062A\u0646\u0640", "\u0623\u0643\u062A\u0640", "\u0646\u0648\u0646\u0640", "\u062F\u062C\u0646\u0640"], wide: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648\u0632", "\u063A\u0634\u062A", "\u0634\u062A\u0646\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0646\u0628\u0631", "\u062F\u062C\u0646\u0628\u0631"] };
var y4 = { narrow: ["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"], short: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"], abbreviated: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u0640", "\u062B\u0644\u0627", "\u0623\u0631\u0628\u0640", "\u062E\u0645\u064A\u0640", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"], wide: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0625\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"] };
var v5 = { narrow: { am: "\u0635", pm: "\u0645", midnight: "\u0646", noon: "\u0638", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0645\u0633\u0627\u0621\u0627\u064B", night: "\u0644\u064A\u0644\u0627\u064B" }, abbreviated: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0645\u0633\u0627\u0621\u0627\u064B", night: "\u0644\u064A\u0644\u0627\u064B" }, wide: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0645\u0633\u0627\u0621\u0627\u064B", night: "\u0644\u064A\u0644\u0627\u064B" } };
var M4 = { narrow: { am: "\u0635", pm: "\u0645", midnight: "\u0646", noon: "\u0638", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0640\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644" }, abbreviated: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644" }, wide: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0640\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644" } };
var W4 = (t8) => String(t8);
var u4 = { ordinalNumber: W4, era: c({ values: b4, defaultWidth: "wide" }), quarter: c({ values: P5, defaultWidth: "wide", argumentCallback: (t8) => Number(t8) - 1 }), month: c({ values: T3, defaultWidth: "wide" }), day: c({ values: y4, defaultWidth: "wide" }), dayPeriod: c({ values: v5, defaultWidth: "wide", formattingValues: M4, defaultFormattingWidth: "wide" }) };
var D4 = /^(\d+)(th|st|nd|rd)?/i;
var k4 = /\d+/i;
var z5 = { narrow: /^(ق|ب)/i, abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i, wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i };
var F4 = { any: [/^قبل/i, /^بعد/i] };
var X3 = { narrow: /^[1234]/i, abbreviated: /^ر[1234]/i, wide: /^الربع [1234]/i };
var L3 = { any: [/1/i, /2/i, /3/i, /4/i] };
var N4 = { narrow: /^[يفمأمسند]/i, abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i, wide: /^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i };
var S3 = { narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^غ/i, /^ش/i, /^أ/i, /^ن/i, /^د/i], any: [/^ين/i, /^فب/i, /^مار/i, /^أب/i, /^ماي/i, /^يون/i, /^يول/i, /^غشت/i, /^ش/i, /^أك/i, /^ن/i, /^د/i] };
var V4 = { narrow: /^[حنثرخجس]/i, short: /^(أحد|إثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, abbreviated: /^(أحد|إثن|ثلا|أرب|خمي|جمعة|سبت)/i, wide: /^(الأحد|الإثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i };
var E3 = { narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i], wide: [/^الأحد/i, /^الإثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i], any: [/^أح/i, /^إث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i] };
var C4 = { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i };
var R3 = { any: { am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i } };
var c4 = { ordinalNumber: h({ matchPattern: D4, parsePattern: k4, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: z5, defaultMatchWidth: "wide", parsePatterns: F4, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X3, defaultMatchWidth: "wide", parsePatterns: L3, defaultParseWidth: "any", valueCallback: (t8) => Number(t8) + 1 }), month: P({ matchPatterns: N4, defaultMatchWidth: "wide", parsePatterns: S3, defaultParseWidth: "any" }), day: P({ matchPatterns: V4, defaultMatchWidth: "wide", parsePatterns: E3, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: C4, defaultMatchWidth: "any", parsePatterns: R3, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ar-SA.mjs
var f6 = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" };
var g5 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var w5 = { full: "{{date}} '\u0639\u0646\u062F' {{time}}", long: "{{date}} '\u0639\u0646\u062F' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m4 = { date: r2({ formats: f6, defaultWidth: "full" }), time: r2({ formats: g5, defaultWidth: "full" }), dateTime: r2({ formats: w5, defaultWidth: "full" }) };
var P6 = { narrow: ["\u0642", "\u0628"], abbreviated: ["\u0642.\u0645.", "\u0628.\u0645."], wide: ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0628\u0639\u062F \u0627\u0644\u0645\u064A\u0644\u0627\u062F"] };
var b5 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u06311", "\u06312", "\u06313", "\u06314"], wide: ["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"] };
var T4 = { narrow: ["\u064A", "\u0641", "\u0645", "\u0623", "\u0645", "\u064A", "\u064A", "\u0623", "\u0633", "\u0623", "\u0646", "\u062F"], abbreviated: ["\u064A\u0646\u0627", "\u0641\u0628\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u0640", "\u064A\u0648\u0644\u0640", "\u0623\u063A\u0633\u0640", "\u0633\u0628\u062A\u0640", "\u0623\u0643\u062A\u0640", "\u0646\u0648\u0641\u0640", "\u062F\u064A\u0633\u0640"], wide: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"] };
var y5 = { narrow: ["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"], short: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"], abbreviated: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u0640", "\u062B\u0644\u0627", "\u0623\u0631\u0628\u0640", "\u062E\u0645\u064A\u0640", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"], wide: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"] };
var v6 = { narrow: { am: "\u0635", pm: "\u0645", midnight: "\u0646", noon: "\u0638", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0645\u0633\u0627\u0621\u0627\u064B", night: "\u0644\u064A\u0644\u0627\u064B" }, abbreviated: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0645\u0633\u0627\u0621\u0627\u064B", night: "\u0644\u064A\u0644\u0627\u064B" }, wide: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0645\u0633\u0627\u0621\u0627\u064B", night: "\u0644\u064A\u0644\u0627\u064B" } };
var M5 = { narrow: { am: "\u0635", pm: "\u0645", midnight: "\u0646", noon: "\u0638", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0640\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644" }, abbreviated: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644" }, wide: { am: "\u0635", pm: "\u0645", midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u0627\u062D\u0627\u064B", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0640\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644" } };
var W5 = (t8) => String(t8);
var c5 = { ordinalNumber: W5, era: c({ values: P6, defaultWidth: "wide" }), quarter: c({ values: b5, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: T4, defaultWidth: "wide" }), day: c({ values: y5, defaultWidth: "wide" }), dayPeriod: c({ values: v6, defaultWidth: "wide", formattingValues: M5, defaultFormattingWidth: "wide" }) };
var D5 = /^(\d+)(th|st|nd|rd)?/i;
var k5 = /\d+/i;
var z6 = { narrow: /^(ق|ب)/i, abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i, wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i };
var F5 = { any: [/^قبل/i, /^بعد/i] };
var S4 = { narrow: /^[1234]/i, abbreviated: /^ر[1234]/i, wide: /^الربع [1234]/i };
var V5 = { any: [/1/i, /2/i, /3/i, /4/i] };
var X4 = { narrow: /^[يفمأمسند]/i, abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i, wide: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i };
var L4 = { narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i], any: [/^ين/i, /^ف/i, /^مار/i, /^أب/i, /^ماي/i, /^يون/i, /^يول/i, /^أغ/i, /^س/i, /^أك/i, /^ن/i, /^د/i] };
var E4 = { narrow: /^[حنثرخجس]/i, short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, abbreviated: /^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i, wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i };
var C5 = { narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i], wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i], any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i] };
var N5 = { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i };
var R4 = { any: { am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i } };
var u5 = { ordinalNumber: h({ matchPattern: D5, parsePattern: k5, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: z6, defaultMatchWidth: "wide", parsePatterns: F5, defaultParseWidth: "any" }), quarter: P({ matchPatterns: S4, defaultMatchWidth: "wide", parsePatterns: V5, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: X4, defaultMatchWidth: "wide", parsePatterns: L4, defaultParseWidth: "any" }), day: P({ matchPatterns: E4, defaultMatchWidth: "wide", parsePatterns: C5, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: N5, defaultMatchWidth: "any", parsePatterns: R4, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ar-TN.mjs
var f7 = { full: "EEEE\u060C do MMMM y", long: "do MMMM y", medium: "d MMM y", short: "dd/MM/yyyy" };
var w6 = { full: "HH:mm:ss", long: "HH:mm:ss", medium: "HH:mm:ss", short: "HH:mm" };
var p2 = { full: "{{date}} '\u0645\u0639' {{time}}", long: "{{date}} '\u0645\u0639' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m5 = { date: r2({ formats: f7, defaultWidth: "full" }), time: r2({ formats: w6, defaultWidth: "full" }), dateTime: r2({ formats: p2, defaultWidth: "full" }) };
var T5 = { narrow: ["\u0642", "\u0628"], abbreviated: ["\u0642.\u0645.", "\u0628.\u0645."], wide: ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0628\u0639\u062F \u0627\u0644\u0645\u064A\u0644\u0627\u062F"] };
var P7 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u06311", "\u06312", "\u06313", "\u06314"], wide: ["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"] };
var b6 = { narrow: ["\u062F", "\u0646", "\u0623", "\u0633", "\u0623", "\u062C", "\u062C", "\u0645", "\u0623", "\u0645", "\u0641", "\u062C"], abbreviated: ["\u062C\u0627\u0646\u0641\u064A", "\u0641\u064A\u0641\u0631\u064A", "\u0645\u0627\u0631\u0633", "\u0623\u0641\u0631\u064A\u0644", "\u0645\u0627\u064A", "\u062C\u0648\u0627\u0646", "\u062C\u0648\u064A\u0644\u064A\u0629", "\u0623\u0648\u062A", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"], wide: ["\u062C\u0627\u0646\u0641\u064A", "\u0641\u064A\u0641\u0631\u064A", "\u0645\u0627\u0631\u0633", "\u0623\u0641\u0631\u064A\u0644", "\u0645\u0627\u064A", "\u062C\u0648\u0627\u0646", "\u062C\u0648\u064A\u0644\u064A\u0629", "\u0623\u0648\u062A", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"] };
var y6 = { narrow: ["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"], short: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"], abbreviated: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"], wide: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"] };
var v7 = { narrow: { am: "\u0635", pm: "\u0639", morning: "\u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0627\u0644\u0642\u0627\u064A\u0644\u0629", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0642\u0627\u064A\u0644\u0629", evening: "\u0627\u0644\u0639\u0634\u064A\u0629", night: "\u0627\u0644\u0644\u064A\u0644", midnight: "\u0646\u0635 \u0627\u0644\u0644\u064A\u0644" }, abbreviated: { am: "\u0635", pm: "\u0639", morning: "\u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0627\u0644\u0642\u0627\u064A\u0644\u0629", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0642\u0627\u064A\u0644\u0629", evening: "\u0627\u0644\u0639\u0634\u064A\u0629", night: "\u0627\u0644\u0644\u064A\u0644", midnight: "\u0646\u0635 \u0627\u0644\u0644\u064A\u0644" }, wide: { am: "\u0635", pm: "\u0639", morning: "\u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0627\u0644\u0642\u0627\u064A\u0644\u0629", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0642\u0627\u064A\u0644\u0629", evening: "\u0627\u0644\u0639\u0634\u064A\u0629", night: "\u0627\u0644\u0644\u064A\u0644", midnight: "\u0646\u0635 \u0627\u0644\u0644\u064A\u0644" } };
var M6 = { narrow: { am: "\u0635", pm: "\u0639", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0641\u064A \u0627\u0644\u0642\u0627\u064A\u0644\u0629", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0642\u0627\u064A\u0644\u0629", evening: "\u0641\u064A \u0627\u0644\u0639\u0634\u064A\u0629", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644", midnight: "\u0646\u0635 \u0627\u0644\u0644\u064A\u0644" }, abbreviated: { am: "\u0635", pm: "\u0639", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0641\u064A \u0627\u0644\u0642\u0627\u064A\u0644\u0629", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0642\u0627\u064A\u0644\u0629", evening: "\u0641\u064A \u0627\u0644\u0639\u0634\u064A\u0629", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644", midnight: "\u0646\u0635 \u0627\u0644\u0644\u064A\u0644" }, wide: { am: "\u0635", pm: "\u0639", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0641\u064A \u0627\u0644\u0642\u0627\u064A\u0644\u0629", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0642\u0627\u064A\u0644\u0629", evening: "\u0641\u064A \u0627\u0644\u0639\u0634\u064A\u0629", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644", midnight: "\u0646\u0635 \u0627\u0644\u0644\u064A\u0644" } };
var W6 = (t8) => String(t8);
var u6 = { ordinalNumber: W6, era: c({ values: T5, defaultWidth: "wide" }), quarter: c({ values: P7, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: b6, defaultWidth: "wide" }), day: c({ values: y6, defaultWidth: "wide" }), dayPeriod: c({ values: v7, defaultWidth: "wide", formattingValues: M6, defaultFormattingWidth: "wide" }) };
var D6 = /^(\d+)(th|st|nd|rd)?/i;
var H3 = /\d+/i;
var k6 = { narrow: /[قب]/, abbreviated: /[قب]\.م\./, wide: /(قبل|بعد) الميلاد/ };
var F6 = { any: [/قبل/, /بعد/] };
var X5 = { narrow: /^[1234]/i, abbreviated: /ر[1234]/, wide: /الربع (الأول|الثاني|الثالث|الرابع)/ };
var L5 = { any: [/1/i, /2/i, /3/i, /4/i] };
var N6 = { narrow: /^[جفمأسند]/, abbreviated: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/, wide: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/ };
var S5 = { narrow: [/^ج/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ج/i, /^ج/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i], any: [/^جانفي/i, /^فيفري/i, /^مارس/i, /^أفريل/i, /^ماي/i, /^جوان/i, /^جويلية/i, /^أوت/i, /^سبتمبر/i, /^أكتوبر/i, /^نوفمبر/i, /^ديسمبر/i] };
var V6 = { narrow: /^[حنثرخجس]/i, short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i };
var E5 = { narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i], wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i], any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i] };
var z7 = { narrow: /^(ص|ع|ن ل|ل|(في|مع) (صباح|قايلة|عشية|ليل))/, any: /^([صع]|نص الليل|قايلة|(في|مع) (صباح|قايلة|عشية|ليل))/ };
var C6 = { any: { am: /^ص/, pm: /^ع/, midnight: /نص الليل/, noon: /قايلة/, afternoon: /بعد القايلة/, morning: /صباح/, evening: /عشية/, night: /ليل/ } };
var c6 = { ordinalNumber: h({ matchPattern: D6, parsePattern: H3, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: k6, defaultMatchWidth: "wide", parsePatterns: F6, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X5, defaultMatchWidth: "wide", parsePatterns: L5, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: N6, defaultMatchWidth: "wide", parsePatterns: S5, defaultParseWidth: "any" }), day: P({ matchPatterns: V6, defaultMatchWidth: "wide", parsePatterns: E5, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: z7, defaultMatchWidth: "any", parsePatterns: C6, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ar.mjs
var f8 = { full: "EEEE\u060C do MMMM y", long: "do MMMM y", medium: "d MMM y", short: "dd/MM/yyyy" };
var w7 = { full: "HH:mm:ss", long: "HH:mm:ss", medium: "HH:mm:ss", short: "HH:mm" };
var p3 = { full: "{{date}} '\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629' {{time}}", long: "{{date}} '\u0639\u0646\u062F \u0627\u0644\u0633\u0627\u0639\u0629' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m6 = { date: r2({ formats: f8, defaultWidth: "full" }), time: r2({ formats: w7, defaultWidth: "full" }), dateTime: r2({ formats: p3, defaultWidth: "full" }) };
var P8 = { narrow: ["\u0642", "\u0628"], abbreviated: ["\u0642.\u0645.", "\u0628.\u0645."], wide: ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0628\u0639\u062F \u0627\u0644\u0645\u064A\u0644\u0627\u062F"] };
var b7 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u06311", "\u06312", "\u06313", "\u06314"], wide: ["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"] };
var T6 = { narrow: ["\u064A", "\u0641", "\u0645", "\u0623", "\u0645", "\u064A", "\u064A", "\u0623", "\u0633", "\u0623", "\u0646", "\u062F"], abbreviated: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"], wide: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"] };
var y7 = { narrow: ["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"], short: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"], abbreviated: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"], wide: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"] };
var v8 = { narrow: { am: "\u0635", pm: "\u0645", morning: "\u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0627\u0644\u0638\u0647\u0631", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0627\u0644\u0644\u064A\u0644", midnight: "\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644" }, abbreviated: { am: "\u0635", pm: "\u0645", morning: "\u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0627\u0644\u0638\u0647\u0631", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0627\u0644\u0644\u064A\u0644", midnight: "\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644" }, wide: { am: "\u0635", pm: "\u0645", morning: "\u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0627\u0644\u0638\u0647\u0631", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0627\u0644\u0644\u064A\u0644", midnight: "\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644" } };
var M7 = { narrow: { am: "\u0635", pm: "\u0645", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0627\u0644\u0638\u0647\u0631", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644", midnight: "\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644" }, abbreviated: { am: "\u0635", pm: "\u0645", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0627\u0644\u0638\u0647\u0631", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644", midnight: "\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644" }, wide: { am: "\u0635", pm: "\u0645", morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D", noon: "\u0627\u0644\u0638\u0647\u0631", afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631", evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621", night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644", midnight: "\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644" } };
var W7 = (t8) => String(t8);
var u7 = { ordinalNumber: W7, era: c({ values: P8, defaultWidth: "wide" }), quarter: c({ values: b7, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: T6, defaultWidth: "wide" }), day: c({ values: y7, defaultWidth: "wide" }), dayPeriod: c({ values: v8, defaultWidth: "wide", formattingValues: M7, defaultFormattingWidth: "wide" }) };
var D7 = /^(\d+)(th|st|nd|rd)?/i;
var H4 = /\d+/i;
var k7 = { narrow: /[قب]/, abbreviated: /[قب]\.م\./, wide: /(قبل|بعد) الميلاد/ };
var F7 = { any: [/قبل/, /بعد/] };
var X6 = { narrow: /^[1234]/i, abbreviated: /ر[1234]/, wide: /الربع (الأول|الثاني|الثالث|الرابع)/ };
var L6 = { any: [/1/i, /2/i, /3/i, /4/i] };
var S6 = { narrow: /^[أيفمسند]/, abbreviated: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/, wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/ };
var V7 = { narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i], any: [/^يناير/i, /^فبراير/i, /^مارس/i, /^أبريل/i, /^مايو/i, /^يونيو/i, /^يوليو/i, /^أغسطس/i, /^سبتمبر/i, /^أكتوبر/i, /^نوفمبر/i, /^ديسمبر/i] };
var E6 = { narrow: /^[حنثرخجس]/i, short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i };
var N7 = { narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i], wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i], any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i] };
var z8 = { narrow: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/, any: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/ };
var C7 = { any: { am: /^ص/, pm: /^م/, midnight: /منتصف الليل/, noon: /الظهر/, afternoon: /بعد الظهر/, morning: /في الصباح/, evening: /في المساء/, night: /في الليل/ } };
var c7 = { ordinalNumber: h({ matchPattern: D7, parsePattern: H4, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: k7, defaultMatchWidth: "wide", parsePatterns: F7, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X6, defaultMatchWidth: "wide", parsePatterns: L6, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: S6, defaultMatchWidth: "wide", parsePatterns: V7, defaultParseWidth: "any" }), day: P({ matchPatterns: E6, defaultMatchWidth: "wide", parsePatterns: N7, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: z8, defaultMatchWidth: "any", parsePatterns: C7, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/az.mjs
var g6 = { full: "EEEE, do MMMM y 'il'", long: "do MMMM y 'il'", medium: "d MMM y 'il'", short: "dd.MM.yyyy" };
var f9 = { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var y8 = { full: "{{date}} {{time}} - 'd\u0259'", long: "{{date}} {{time}} - 'd\u0259'", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var c8 = { date: r2({ formats: g6, defaultWidth: "full" }), time: r2({ formats: f9, defaultWidth: "full" }), dateTime: r2({ formats: y8, defaultWidth: "full" }) };
var p4 = { narrow: ["e.\u0259", "b.e"], abbreviated: ["e.\u0259", "b.e"], wide: ["eram\u0131zdan \u0259vv\u0259l", "bizim era"] };
var v9 = { narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1ci kvartal", "2ci kvartal", "3c\xFC kvartal", "4c\xFC kvartal"] };
var M8 = { narrow: ["Y", "F", "M", "A", "M", "\u0130", "\u0130", "A", "S", "O", "N", "D"], abbreviated: ["Yan", "Fev", "Mar", "Apr", "May", "\u0130yun", "\u0130yul", "Avq", "Sen", "Okt", "Noy", "Dek"], wide: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "\u0130yun", "\u0130yul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"] };
var x3 = { narrow: ["B.", "B.e", "\xC7.a", "\xC7.", "C.a", "C.", "\u015E."], short: ["B.", "B.e", "\xC7.a", "\xC7.", "C.a", "C.", "\u015E."], abbreviated: ["Baz", "Baz.e", "\xC7\u0259r.a", "\xC7\u0259r", "C\xFCm.a", "C\xFCm", "\u015E\u0259"], wide: ["Bazar", "Bazar ert\u0259si", "\xC7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131", "\xC7\u0259r\u015F\u0259nb\u0259", "C\xFCm\u0259 ax\u015Fam\u0131", "C\xFCm\u0259", "\u015E\u0259nb\u0259"] };
var P9 = { narrow: { am: "am", pm: "pm", midnight: "gec\u0259yar\u0131", noon: "g\xFCn", morning: "s\u0259h\u0259r", afternoon: "g\xFCnd\xFCz", evening: "ax\u015Fam", night: "gec\u0259" }, abbreviated: { am: "AM", pm: "PM", midnight: "gec\u0259yar\u0131", noon: "g\xFCn", morning: "s\u0259h\u0259r", afternoon: "g\xFCnd\xFCz", evening: "ax\u015Fam", night: "gec\u0259" }, wide: { am: "a.m.", pm: "p.m.", midnight: "gec\u0259yar\u0131", noon: "g\xFCn", morning: "s\u0259h\u0259r", afternoon: "g\xFCnd\xFCz", evening: "ax\u015Fam", night: "gec\u0259" } };
var z9 = { narrow: { am: "a", pm: "p", midnight: "gec\u0259yar\u0131", noon: "g\xFCn", morning: "s\u0259h\u0259r", afternoon: "g\xFCnd\xFCz", evening: "ax\u015Fam", night: "gec\u0259" }, abbreviated: { am: "AM", pm: "PM", midnight: "gec\u0259yar\u0131", noon: "g\xFCn", morning: "s\u0259h\u0259r", afternoon: "g\xFCnd\xFCz", evening: "ax\u015Fam", night: "gec\u0259" }, wide: { am: "a.m.", pm: "p.m.", midnight: "gec\u0259yar\u0131", noon: "g\xFCn", morning: "s\u0259h\u0259r", afternoon: "g\xFCnd\xFCz", evening: "ax\u015Fam", night: "gec\u0259" } };
var r3 = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-\xFCnc\xFC", 4: "-\xFCnc\xFC", 100: "-\xFCnc\xFC", 6: "-nc\u0131", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-\u0131nc\u0131", 90: "-\u0131nc\u0131" };
var w8 = (a33) => {
  if (a33 === 0) return a33 + "-\u0131nc\u0131";
  let n19 = a33 % 10, e30 = a33 % 100 - n19, t8 = a33 >= 100 ? 100 : null;
  return r3[n19] ? r3[n19] : r3[e30] ? r3[e30] : t8 !== null ? r3[t8] : "";
};
var k8 = (a33, n19) => {
  let e30 = Number(a33), t8 = w8(e30);
  return e30 + t8;
};
var u8 = { ordinalNumber: k8, era: c({ values: p4, defaultWidth: "wide" }), quarter: c({ values: v9, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: M8, defaultWidth: "wide" }), day: c({ values: x3, defaultWidth: "wide" }), dayPeriod: c({ values: P9, defaultWidth: "wide", formattingValues: z9, defaultFormattingWidth: "wide" }) };
var W8 = /^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i;
var B = /\d+/i;
var D8 = { narrow: /^(b|a)$/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i, wide: /^(bizim eradan əvvəl|bizim era)$/i };
var A2 = { any: [/^b$/i, /^(a|c)$/i] };
var q = { narrow: /^[1234]$/i, abbreviated: /^K[1234]$/i, wide: /^[1234](ci)? kvartal$/i };
var F8 = { any: [/1/i, /2/i, /3/i, /4/i] };
var S7 = { narrow: /^[(?-i)yfmaisond]$/i, abbreviated: /^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i, wide: /^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i };
var N8 = { narrow: [/^[(?-i)y]$/i, /^[(?-i)f]$/i, /^[(?-i)m]$/i, /^[(?-i)a]$/i, /^[(?-i)m]$/i, /^[(?-i)i]$/i, /^[(?-i)i]$/i, /^[(?-i)a]$/i, /^[(?-i)s]$/i, /^[(?-i)o]$/i, /^[(?-i)n]$/i, /^[(?-i)d]$/i], abbreviated: [/^Yan$/i, /^Fev$/i, /^Mar$/i, /^Apr$/i, /^May$/i, /^İyun$/i, /^İyul$/i, /^Avg$/i, /^Sen$/i, /^Okt$/i, /^Noy$/i, /^Dek$/i], wide: [/^Yanvar$/i, /^Fevral$/i, /^Mart$/i, /^Aprel$/i, /^May$/i, /^İyun$/i, /^İyul$/i, /^Avgust$/i, /^Sentyabr$/i, /^Oktyabr$/i, /^Noyabr$/i, /^Dekabr$/i] };
var Y = { narrow: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i, short: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i, abbreviated: /^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i, wide: /^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i };
var O2 = { narrow: [/^B\.$/i, /^B\.e$/i, /^Ç\.a$/i, /^Ç\.$/i, /^C\.a$/i, /^C\.$/i, /^Ş\.$/i], abbreviated: [/^Baz$/i, /^Baz\.e$/i, /^Çər\.a$/i, /^Çər$/i, /^Cüm\.a$/i, /^Cüm$/i, /^Şə$/i], wide: [/^Bazar$/i, /^Bazar ertəsi$/i, /^Çərşənbə axşamı$/i, /^Çərşənbə$/i, /^Cümə axşamı$/i, /^Cümə$/i, /^Şənbə$/i], any: [/^B\.$/i, /^B\.e$/i, /^Ç\.a$/i, /^Ç\.$/i, /^C\.a$/i, /^C\.$/i, /^Ş\.$/i] };
var V8 = { narrow: /^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i, any: /^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i };
var X7 = { any: { am: /^a$/i, pm: /^p$/i, midnight: /^gecəyarı$/i, noon: /^gün$/i, morning: /səhər$/i, afternoon: /gündüz$/i, evening: /axşam$/i, night: /gecə$/i } };
var h3 = { ordinalNumber: h({ matchPattern: W8, parsePattern: B, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: D8, defaultMatchWidth: "wide", parsePatterns: A2, defaultParseWidth: "any" }), quarter: P({ matchPatterns: q, defaultMatchWidth: "wide", parsePatterns: F8, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: S7, defaultMatchWidth: "wide", parsePatterns: N8, defaultParseWidth: "narrow" }), day: P({ matchPatterns: Y, defaultMatchWidth: "wide", parsePatterns: O2, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: V8, defaultMatchWidth: "any", parsePatterns: X7, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/constants.mjs
var n = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var p5 = -n;
var x4 = 6048e5;
var I = 864e5;
var i = 6e4;
var m7 = 36e5;
var a2 = 1e3;
var t2 = 3600;
var o6 = t2 * 24;
var k9 = o6 * 7;
var e2 = o6 * 365.2425;
var s4 = e2 / 12;
var H5 = s4 * 3;
var S8 = Symbol.for("constructDateFrom");

// http-url:https://esm.sh/date-fns@4.4.0/es2022/constructFrom.mjs
function t3(r32, o36) {
  return typeof r32 == "function" ? r32(o36) : r32 && typeof r32 == "object" && S8 in r32 ? r32[S8](o36) : r32 instanceof Date ? new r32.constructor(o36) : new Date(o36);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/_lib/normalizeDates.mjs
function m8(n19, ...o36) {
  let r32 = t3.bind(null, n19 || o36.find((t8) => typeof t8 == "object"));
  return o36.map(r32);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/_lib/defaultOptions.mjs
var t4 = {};
function n2() {
  return t4;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/toDate.mjs
function e3(t8, o36) {
  return t3(o36 || t8, t8);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/startOfWeek.mjs
function O3(s23, e30) {
  let o36 = n2(), a33 = e30?.weekStartsOn ?? e30?.locale?.options?.weekStartsOn ?? o36.weekStartsOn ?? o36.locale?.options?.weekStartsOn ?? 0, t8 = e3(s23, e30?.in), n19 = t8.getDay(), r32 = (n19 < a33 ? 7 : 0) + n19 - a33;
  return t8.setDate(t8.getDate() - r32), t8.setHours(0, 0, 0, 0), t8;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/be-tarask.mjs
function u9(t8, e30) {
  if (t8.one !== void 0 && e30 === 1) return t8.one;
  let n19 = e30 % 10, i19 = e30 % 100;
  return n19 === 1 && i19 !== 11 ? t8.singularNominative.replace("{{count}}", String(e30)) : n19 >= 2 && n19 <= 4 && (i19 < 10 || i19 > 20) ? t8.singularGenitive.replace("{{count}}", String(e30)) : t8.pluralGenitive.replace("{{count}}", String(e30));
}
function a3(t8) {
  return (e30, n19) => n19 && n19.addSuffix ? n19.comparison && n19.comparison > 0 ? t8.future ? u9(t8.future, e30) : "\u043F\u0440\u0430\u0437 " + u9(t8.regular, e30) : t8.past ? u9(t8.past, e30) : u9(t8.regular, e30) + " \u0442\u0430\u043C\u0443" : u9(t8.regular, e30);
}
var w9 = (t8, e30) => e30 && e30.addSuffix ? e30.comparison && e30.comparison > 0 ? "\u043F\u0440\u0430\u0437 \u043F\u0430\u045E\u0445\u0432\u0456\u043B\u0456\u043D\u044B" : "\u043F\u0430\u045E\u0445\u0432\u0456\u043B\u0456\u043D\u044B \u0442\u0430\u043C\u0443" : "\u043F\u0430\u045E\u0445\u0432\u0456\u043B\u0456\u043D\u044B";
var b8 = { lessThanXSeconds: a3({ regular: { one: "\u043C\u0435\u043D\u0448 \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularNominative: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, future: { one: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularNominative: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } }), xSeconds: a3({ regular: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, past: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u0442\u0430\u043C\u0443", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u0442\u0430\u043C\u0443", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0442\u0430\u043C\u0443" }, future: { singularNominative: "\u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } }), halfAMinute: w9, lessThanXMinutes: a3({ regular: { one: "\u043C\u0435\u043D\u0448 \u0437\u0430 \u0445\u0432\u0456\u043B\u0456\u043D\u0443", singularNominative: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443", singularGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B", pluralGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D" }, future: { one: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 \u0445\u0432\u0456\u043B\u0456\u043D\u0443", singularNominative: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443", singularGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B", pluralGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D" } }), xMinutes: a3({ regular: { singularNominative: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0430", singularGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B", pluralGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D" }, past: { singularNominative: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443 \u0442\u0430\u043C\u0443", singularGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B \u0442\u0430\u043C\u0443", pluralGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D \u0442\u0430\u043C\u0443" }, future: { singularNominative: "\u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443", singularGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B", pluralGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D" } }), aboutXHours: a3({ regular: { singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B", singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u0437\u0456\u043D", pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u0437\u0456\u043D" }, future: { singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0443", singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B", pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D" } }), xHours: a3({ regular: { singularNominative: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0430", singularGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B", pluralGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D" }, past: { singularNominative: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0443 \u0442\u0430\u043C\u0443", singularGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B \u0442\u0430\u043C\u0443", pluralGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D \u0442\u0430\u043C\u0443" }, future: { singularNominative: "\u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0443", singularGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B", pluralGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D" } }), xDays: a3({ regular: { singularNominative: "{{count}} \u0434\u0437\u0435\u043D\u044C", singularGenitive: "{{count}} \u0434\u043D\u0456", pluralGenitive: "{{count}} \u0434\u0437\u0451\u043D" } }), aboutXWeeks: a3({ regular: { singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u0442\u044B\u0434\u043D\u0456", singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0442\u044B\u0434\u043D\u044F\u045E", pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0442\u044B\u0434\u043D\u044F\u045E" }, future: { singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0442\u044B\u0434\u0437\u0435\u043D\u044C", singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0442\u044B\u0434\u043D\u0456", pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0442\u044B\u0434\u043D\u044F\u045E" } }), xWeeks: a3({ regular: { singularNominative: "{{count}} \u0442\u044B\u0434\u0437\u0435\u043D\u044C", singularGenitive: "{{count}} \u0442\u044B\u0434\u043D\u0456", pluralGenitive: "{{count}} \u0442\u044B\u0434\u043D\u044F\u045E" } }), aboutXMonths: a3({ regular: { singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430", singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E", pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E" }, future: { singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446", singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u044B", pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E" } }), xMonths: a3({ regular: { singularNominative: "{{count}} \u043C\u0435\u0441\u044F\u0446", singularGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u044B", pluralGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E" } }), aboutXYears: a3({ regular: { singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u0433\u043E\u0434\u0430", singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u043E\u045E", pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u043E\u045E" }, future: { singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044B", pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043E\u045E" } }), xYears: a3({ regular: { singularNominative: "{{count}} \u0433\u043E\u0434", singularGenitive: "{{count}} \u0433\u0430\u0434\u044B", pluralGenitive: "{{count}} \u0433\u0430\u0434\u043E\u045E" } }), overXYears: a3({ regular: { singularNominative: "\u0431\u043E\u043B\u044C\u0448 \u0437\u0430 {{count}} \u0433\u043E\u0434", singularGenitive: "\u0431\u043E\u043B\u044C\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u044B", pluralGenitive: "\u0431\u043E\u043B\u044C\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u043E\u045E" }, future: { singularNominative: "\u0431\u043E\u043B\u044C\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u0431\u043E\u043B\u044C\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044B", pluralGenitive: "\u0431\u043E\u043B\u044C\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043E\u045E" } }), almostXYears: a3({ regular: { singularNominative: "\u0430\u043C\u0430\u043B\u044C {{count}} \u0433\u043E\u0434", singularGenitive: "\u0430\u043C\u0430\u043B\u044C {{count}} \u0433\u0430\u0434\u044B", pluralGenitive: "\u0430\u043C\u0430\u043B\u044C {{count}} \u0433\u0430\u0434\u043E\u045E" }, future: { singularNominative: "\u0430\u043C\u0430\u043B\u044C \u043F\u0440\u0430\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u0430\u043C\u0430\u043B\u044C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044B", pluralGenitive: "\u0430\u043C\u0430\u043B\u044C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043E\u045E" } }) };
var y9 = { full: "EEEE, d MMMM y '\u0433.'", long: "d MMMM y '\u0433.'", medium: "d MMM y '\u0433.'", short: "dd.MM.y" };
var P10 = { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var N9 = { any: "{{date}}, {{time}}" };
var d = { date: r2({ formats: y9, defaultWidth: "full" }), time: r2({ formats: P10, defaultWidth: "full" }), dateTime: r2({ formats: N9, defaultWidth: "any" }) };
var F9 = { narrow: ["\u0434\u0430 \u043D.\u044D.", "\u043D.\u044D."], abbreviated: ["\u0434\u0430 \u043D. \u044D.", "\u043D. \u044D."], wide: ["\u0434\u0430 \u043D\u0430\u0448\u0430\u0439 \u044D\u0440\u044B", "\u043D\u0430\u0448\u0430\u0439 \u044D\u0440\u044B"] };
var z10 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1-\u044B \u043A\u0432.", "2-\u0456 \u043A\u0432.", "3-\u0456 \u043A\u0432.", "4-\u044B \u043A\u0432."], wide: ["1-\u044B \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0456 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0456 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u044B \u043A\u0432\u0430\u0440\u0442\u0430\u043B"] };
var S9 = { narrow: ["\u0421", "\u041B", "\u0421", "\u041A", "\u0422", "\u0427", "\u041B", "\u0416", "\u0412", "\u041A", "\u041B", "\u0421"], abbreviated: ["\u0441\u0442\u0443\u0434\u0437.", "\u043B\u044E\u0442.", "\u0441\u0430\u043A.", "\u043A\u0440\u0430\u0441.", "\u0442\u0440\u0430\u0432.", "\u0447\u044D\u0440\u0432.", "\u043B\u0456\u043F.", "\u0436\u043D.", "\u0432\u0435\u0440.", "\u043A\u0430\u0441\u0442\u0440.", "\u043B\u0456\u0441\u0442.", "\u0441\u044C\u043D\u0435\u0436."], wide: ["\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044C", "\u043B\u044E\u0442\u044B", "\u0441\u0430\u043A\u0430\u0432\u0456\u043A", "\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A", "\u0442\u0440\u0430\u0432\u0435\u043D\u044C", "\u0447\u044D\u0440\u0432\u0435\u043D\u044C", "\u043B\u0456\u043F\u0435\u043D\u044C", "\u0436\u043D\u0456\u0432\u0435\u043D\u044C", "\u0432\u0435\u0440\u0430\u0441\u0435\u043D\u044C", "\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A", "\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434", "\u0441\u044C\u043D\u0435\u0436\u0430\u043D\u044C"] };
var V9 = { narrow: ["\u0421", "\u041B", "\u0421", "\u041A", "\u0422", "\u0427", "\u041B", "\u0416", "\u0412", "\u041A", "\u041B", "\u0421"], abbreviated: ["\u0441\u0442\u0443\u0434\u0437.", "\u043B\u044E\u0442.", "\u0441\u0430\u043A.", "\u043A\u0440\u0430\u0441.", "\u0442\u0440\u0430\u0432.", "\u0447\u044D\u0440\u0432.", "\u043B\u0456\u043F.", "\u0436\u043D.", "\u0432\u0435\u0440.", "\u043A\u0430\u0441\u0442\u0440.", "\u043B\u0456\u0441\u0442.", "\u0441\u044C\u043D\u0435\u0436."], wide: ["\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044F", "\u043B\u044E\u0442\u0430\u0433\u0430", "\u0441\u0430\u043A\u0430\u0432\u0456\u043A\u0430", "\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A\u0430", "\u0442\u0440\u0430\u045E\u043D\u044F", "\u0447\u044D\u0440\u0432\u0435\u043D\u044F", "\u043B\u0456\u043F\u0435\u043D\u044F", "\u0436\u043D\u0456\u045E\u043D\u044F", "\u0432\u0435\u0440\u0430\u0441\u043D\u044F", "\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A\u0430", "\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434\u0430", "\u0441\u044C\u043D\u0435\u0436\u043D\u044F"] };
var L7 = { narrow: ["\u041D", "\u041F", "\u0410", "\u0421", "\u0427", "\u041F", "\u0421"], short: ["\u043D\u0434", "\u043F\u043D", "\u0430\u045E", "\u0441\u0440", "\u0447\u0446", "\u043F\u0442", "\u0441\u0431"], abbreviated: ["\u043D\u044F\u0434\u0437", "\u043F\u0430\u043D", "\u0430\u045E\u0442", "\u0441\u0435\u0440", "\u0447\u0430\u0446\u044C", "\u043F\u044F\u0442", "\u0441\u0443\u0431"], wide: ["\u043D\u044F\u0434\u0437\u0435\u043B\u044F", "\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A", "\u0430\u045E\u0442\u043E\u0440\u0430\u043A", "\u0441\u0435\u0440\u0430\u0434\u0430", "\u0447\u0430\u0446\u044C\u0432\u0435\u0440", "\u043F\u044F\u0442\u043D\u0456\u0446\u0430", "\u0441\u0443\u0431\u043E\u0442\u0430"] };
var X8 = { narrow: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u045E\u043D.", noon: "\u043F\u043E\u045E\u0434.", morning: "\u0440\u0430\u043D.", afternoon: "\u0434\u0437\u0435\u043D\u044C", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447" }, abbreviated: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u045E\u043D.", noon: "\u043F\u043E\u045E\u0434.", morning: "\u0440\u0430\u043D.", afternoon: "\u0434\u0437\u0435\u043D\u044C", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447" }, wide: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u045E\u043D\u0430\u0447", noon: "\u043F\u043E\u045E\u0434\u0437\u0435\u043D\u044C", morning: "\u0440\u0430\u043D\u0456\u0446\u0430", afternoon: "\u0434\u0437\u0435\u043D\u044C", evening: "\u0432\u0435\u0447\u0430\u0440", night: "\u043D\u043E\u0447" } };
var E7 = { narrow: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u045E\u043D.", noon: "\u043F\u043E\u045E\u0434.", morning: "\u0440\u0430\u043D.", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u044B" }, abbreviated: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u045E\u043D.", noon: "\u043F\u043E\u045E\u0434.", morning: "\u0440\u0430\u043D.", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u044B" }, wide: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u045E\u043D\u0430\u0447", noon: "\u043F\u043E\u045E\u0434\u0437\u0435\u043D\u044C", morning: "\u0440\u0430\u043D\u0456\u0446\u044B", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447\u0430\u0440\u0430", night: "\u043D\u043E\u0447\u044B" } };
var H6 = (t8, e30) => {
  let n19 = String(e30?.unit), i19 = Number(t8), r32;
  return n19 === "date" ? r32 = "-\u0433\u0430" : n19 === "hour" || n19 === "minute" || n19 === "second" ? r32 = "-\u044F" : r32 = (i19 % 10 === 2 || i19 % 10 === 3) && i19 % 100 !== 12 && i19 % 100 !== 13 ? "-\u0456" : "-\u044B", i19 + r32;
};
var h4 = { ordinalNumber: H6, era: c({ values: F9, defaultWidth: "wide" }), quarter: c({ values: z10, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: S9, defaultWidth: "wide", formattingValues: V9, defaultFormattingWidth: "wide" }), day: c({ values: L7, defaultWidth: "wide" }), dayPeriod: c({ values: X8, defaultWidth: "any", formattingValues: E7, defaultFormattingWidth: "wide" }) };
var C8 = /^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i;
var R5 = /\d+/i;
var Y2 = { narrow: /^((да )?н\.?\s?э\.?)/i, abbreviated: /^((да )?н\.?\s?э\.?)/i, wide: /^(да нашай эры|нашай эры|наша эра)/i };
var q2 = { any: [/^д/i, /^н/i] };
var O4 = { narrow: /^[1234]/i, abbreviated: /^[1234](-?[ыі]?)? кв.?/i, wide: /^[1234](-?[ыі]?)? квартал/i };
var A3 = { any: [/1/i, /2/i, /3/i, /4/i] };
var Q = { narrow: /^[слкмчжв]/i, abbreviated: /^(студз|лют|сак|крас|тр(ав)?|чэрв|ліп|жн|вер|кастр|ліст|сьнеж)\.?/i, wide: /^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|тра(вень|ўня)|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|сьнеж(ань|ня))/i };
var I2 = { narrow: [/^с/i, /^л/i, /^с/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^ж/i, /^в/i, /^к/i, /^л/i, /^с/i], any: [/^ст/i, /^лю/i, /^са/i, /^кр/i, /^тр/i, /^ч/i, /^ліп/i, /^ж/i, /^в/i, /^ка/i, /^ліс/i, /^сн/i] };
var _ = { narrow: /^[нпасч]/i, short: /^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i, abbreviated: /^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцьв|чаць|птн|пят|суб).?/i, wide: /^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацьв(ер|ярга)|пятніц[аы]|субот[аы])/i };
var j3 = { narrow: [/^н/i, /^п/i, /^а/i, /^с/i, /^ч/i, /^п/i, /^с/i], any: [/^н/i, /^п[ан]/i, /^а/i, /^с[ер]/i, /^ч/i, /^п[ят]/i, /^с[уб]/i] };
var B2 = { narrow: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i, abbreviated: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i, wide: /^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i };
var J2 = { any: { am: /^дп/i, pm: /^пп/i, midnight: /^поўн/i, noon: /^поўд/i, morning: /^р/i, afternoon: /^д[зн]/i, evening: /^в/i, night: /^н/i } };
var G = { ordinalNumber: h({ matchPattern: C8, parsePattern: R5, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: Y2, defaultMatchWidth: "wide", parsePatterns: q2, defaultParseWidth: "any" }), quarter: P({ matchPatterns: O4, defaultMatchWidth: "wide", parsePatterns: A3, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: Q, defaultMatchWidth: "wide", parsePatterns: I2, defaultParseWidth: "any" }), day: P({ matchPatterns: _, defaultMatchWidth: "wide", parsePatterns: j3, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: B2, defaultMatchWidth: "wide", parsePatterns: J2, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/be.mjs
function u10(t8, e30) {
  if (t8.one !== void 0 && e30 === 1) return t8.one;
  let n19 = e30 % 10, i19 = e30 % 100;
  return n19 === 1 && i19 !== 11 ? t8.singularNominative.replace("{{count}}", String(e30)) : n19 >= 2 && n19 <= 4 && (i19 < 10 || i19 > 20) ? t8.singularGenitive.replace("{{count}}", String(e30)) : t8.pluralGenitive.replace("{{count}}", String(e30));
}
function a4(t8) {
  return (e30, n19) => n19 && n19.addSuffix ? n19.comparison && n19.comparison > 0 ? t8.future ? u10(t8.future, e30) : "\u043F\u0440\u0430\u0437 " + u10(t8.regular, e30) : t8.past ? u10(t8.past, e30) : u10(t8.regular, e30) + " \u0442\u0430\u043C\u0443" : u10(t8.regular, e30);
}
var w10 = (t8, e30) => e30 && e30.addSuffix ? e30.comparison && e30.comparison > 0 ? "\u043F\u0440\u0430\u0437 \u043F\u0430\u045E\u0445\u0432\u0456\u043B\u0456\u043D\u044B" : "\u043F\u0430\u045E\u0445\u0432\u0456\u043B\u0456\u043D\u044B \u0442\u0430\u043C\u0443" : "\u043F\u0430\u045E\u0445\u0432\u0456\u043B\u0456\u043D\u044B";
var b9 = { lessThanXSeconds: a4({ regular: { one: "\u043C\u0435\u043D\u0448 \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularNominative: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, future: { one: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularNominative: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } }), xSeconds: a4({ regular: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, past: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u0442\u0430\u043C\u0443", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u0442\u0430\u043C\u0443", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0442\u0430\u043C\u0443" }, future: { singularNominative: "\u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } }), halfAMinute: w10, lessThanXMinutes: a4({ regular: { one: "\u043C\u0435\u043D\u0448 \u0437\u0430 \u0445\u0432\u0456\u043B\u0456\u043D\u0443", singularNominative: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443", singularGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B", pluralGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D" }, future: { one: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 \u0445\u0432\u0456\u043B\u0456\u043D\u0443", singularNominative: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443", singularGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B", pluralGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D" } }), xMinutes: a4({ regular: { singularNominative: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0430", singularGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B", pluralGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D" }, past: { singularNominative: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443 \u0442\u0430\u043C\u0443", singularGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B \u0442\u0430\u043C\u0443", pluralGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D \u0442\u0430\u043C\u0443" }, future: { singularNominative: "\u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443", singularGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B", pluralGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D" } }), aboutXHours: a4({ regular: { singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B", singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u0437\u0456\u043D", pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u0437\u0456\u043D" }, future: { singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0443", singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B", pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D" } }), xHours: a4({ regular: { singularNominative: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0430", singularGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B", pluralGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D" }, past: { singularNominative: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0443 \u0442\u0430\u043C\u0443", singularGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B \u0442\u0430\u043C\u0443", pluralGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D \u0442\u0430\u043C\u0443" }, future: { singularNominative: "\u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0443", singularGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B", pluralGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D" } }), xDays: a4({ regular: { singularNominative: "{{count}} \u0434\u0437\u0435\u043D\u044C", singularGenitive: "{{count}} \u0434\u043D\u0456", pluralGenitive: "{{count}} \u0434\u0437\u0451\u043D" } }), aboutXWeeks: a4({ regular: { singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u0442\u044B\u0434\u043D\u0456", singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0442\u044B\u0434\u043D\u044F\u045E", pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0442\u044B\u0434\u043D\u044F\u045E" }, future: { singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0442\u044B\u0434\u0437\u0435\u043D\u044C", singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0442\u044B\u0434\u043D\u0456", pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0442\u044B\u0434\u043D\u044F\u045E" } }), xWeeks: a4({ regular: { singularNominative: "{{count}} \u0442\u044B\u0434\u0437\u0435\u043D\u044C", singularGenitive: "{{count}} \u0442\u044B\u0434\u043D\u0456", pluralGenitive: "{{count}} \u0442\u044B\u0434\u043D\u044F\u045E" } }), aboutXMonths: a4({ regular: { singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430", singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E", pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E" }, future: { singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446", singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u044B", pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E" } }), xMonths: a4({ regular: { singularNominative: "{{count}} \u043C\u0435\u0441\u044F\u0446", singularGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u044B", pluralGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E" } }), aboutXYears: a4({ regular: { singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u0433\u043E\u0434\u0430", singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u043E\u045E", pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u043E\u045E" }, future: { singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044B", pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043E\u045E" } }), xYears: a4({ regular: { singularNominative: "{{count}} \u0433\u043E\u0434", singularGenitive: "{{count}} \u0433\u0430\u0434\u044B", pluralGenitive: "{{count}} \u0433\u0430\u0434\u043E\u045E" } }), overXYears: a4({ regular: { singularNominative: "\u0431\u043E\u043B\u044C\u0448 \u0437\u0430 {{count}} \u0433\u043E\u0434", singularGenitive: "\u0431\u043E\u043B\u044C\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u044B", pluralGenitive: "\u0431\u043E\u043B\u044C\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u043E\u045E" }, future: { singularNominative: "\u0431\u043E\u043B\u044C\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u0431\u043E\u043B\u044C\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044B", pluralGenitive: "\u0431\u043E\u043B\u044C\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043E\u045E" } }), almostXYears: a4({ regular: { singularNominative: "\u0430\u043C\u0430\u043B\u044C {{count}} \u0433\u043E\u0434", singularGenitive: "\u0430\u043C\u0430\u043B\u044C {{count}} \u0433\u0430\u0434\u044B", pluralGenitive: "\u0430\u043C\u0430\u043B\u044C {{count}} \u0433\u0430\u0434\u043E\u045E" }, future: { singularNominative: "\u0430\u043C\u0430\u043B\u044C \u043F\u0440\u0430\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u0430\u043C\u0430\u043B\u044C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044B", pluralGenitive: "\u0430\u043C\u0430\u043B\u044C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043E\u045E" } }) };
var y10 = { full: "EEEE, d MMMM y '\u0433.'", long: "d MMMM y '\u0433.'", medium: "d MMM y '\u0433.'", short: "dd.MM.y" };
var P11 = { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var N10 = { any: "{{date}}, {{time}}" };
var d2 = { date: r2({ formats: y10, defaultWidth: "full" }), time: r2({ formats: P11, defaultWidth: "full" }), dateTime: r2({ formats: N10, defaultWidth: "any" }) };
var F10 = { narrow: ["\u0434\u0430 \u043D.\u044D.", "\u043D.\u044D."], abbreviated: ["\u0434\u0430 \u043D. \u044D.", "\u043D. \u044D."], wide: ["\u0434\u0430 \u043D\u0430\u0448\u0430\u0439 \u044D\u0440\u044B", "\u043D\u0430\u0448\u0430\u0439 \u044D\u0440\u044B"] };
var z11 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1-\u044B \u043A\u0432.", "2-\u0456 \u043A\u0432.", "3-\u0456 \u043A\u0432.", "4-\u044B \u043A\u0432."], wide: ["1-\u044B \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0456 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0456 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u044B \u043A\u0432\u0430\u0440\u0442\u0430\u043B"] };
var S10 = { narrow: ["\u0421", "\u041B", "\u0421", "\u041A", "\u041C", "\u0427", "\u041B", "\u0416", "\u0412", "\u041A", "\u041B", "\u0421"], abbreviated: ["\u0441\u0442\u0443\u0434\u0437.", "\u043B\u044E\u0442.", "\u0441\u0430\u043A.", "\u043A\u0440\u0430\u0441.", "\u043C\u0430\u0439", "\u0447\u044D\u0440\u0432.", "\u043B\u0456\u043F.", "\u0436\u043D.", "\u0432\u0435\u0440.", "\u043A\u0430\u0441\u0442\u0440.", "\u043B\u0456\u0441\u0442.", "\u0441\u043D\u0435\u0436."], wide: ["\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044C", "\u043B\u044E\u0442\u044B", "\u0441\u0430\u043A\u0430\u0432\u0456\u043A", "\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A", "\u043C\u0430\u0439", "\u0447\u044D\u0440\u0432\u0435\u043D\u044C", "\u043B\u0456\u043F\u0435\u043D\u044C", "\u0436\u043D\u0456\u0432\u0435\u043D\u044C", "\u0432\u0435\u0440\u0430\u0441\u0435\u043D\u044C", "\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A", "\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434", "\u0441\u043D\u0435\u0436\u0430\u043D\u044C"] };
var V10 = { narrow: ["\u0421", "\u041B", "\u0421", "\u041A", "\u041C", "\u0427", "\u041B", "\u0416", "\u0412", "\u041A", "\u041B", "\u0421"], abbreviated: ["\u0441\u0442\u0443\u0434\u0437.", "\u043B\u044E\u0442.", "\u0441\u0430\u043A.", "\u043A\u0440\u0430\u0441.", "\u043C\u0430\u044F", "\u0447\u044D\u0440\u0432.", "\u043B\u0456\u043F.", "\u0436\u043D.", "\u0432\u0435\u0440.", "\u043A\u0430\u0441\u0442\u0440.", "\u043B\u0456\u0441\u0442.", "\u0441\u043D\u0435\u0436."], wide: ["\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044F", "\u043B\u044E\u0442\u0430\u0433\u0430", "\u0441\u0430\u043A\u0430\u0432\u0456\u043A\u0430", "\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A\u0430", "\u043C\u0430\u044F", "\u0447\u044D\u0440\u0432\u0435\u043D\u044F", "\u043B\u0456\u043F\u0435\u043D\u044F", "\u0436\u043D\u0456\u045E\u043D\u044F", "\u0432\u0435\u0440\u0430\u0441\u043D\u044F", "\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A\u0430", "\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434\u0430", "\u0441\u043D\u0435\u0436\u043D\u044F"] };
var L8 = { narrow: ["\u041D", "\u041F", "\u0410", "\u0421", "\u0427", "\u041F", "\u0421"], short: ["\u043D\u0434", "\u043F\u043D", "\u0430\u045E", "\u0441\u0440", "\u0447\u0446", "\u043F\u0442", "\u0441\u0431"], abbreviated: ["\u043D\u044F\u0434\u0437", "\u043F\u0430\u043D", "\u0430\u045E\u0442", "\u0441\u0435\u0440", "\u0447\u0430\u0446", "\u043F\u044F\u0442", "\u0441\u0443\u0431"], wide: ["\u043D\u044F\u0434\u0437\u0435\u043B\u044F", "\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A", "\u0430\u045E\u0442\u043E\u0440\u0430\u043A", "\u0441\u0435\u0440\u0430\u0434\u0430", "\u0447\u0430\u0446\u0432\u0435\u0440", "\u043F\u044F\u0442\u043D\u0456\u0446\u0430", "\u0441\u0443\u0431\u043E\u0442\u0430"] };
var X9 = { narrow: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u045E\u043D.", noon: "\u043F\u043E\u045E\u0434.", morning: "\u0440\u0430\u043D.", afternoon: "\u0434\u0437\u0435\u043D\u044C", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447" }, abbreviated: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u045E\u043D.", noon: "\u043F\u043E\u045E\u0434.", morning: "\u0440\u0430\u043D.", afternoon: "\u0434\u0437\u0435\u043D\u044C", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447" }, wide: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u045E\u043D\u0430\u0447", noon: "\u043F\u043E\u045E\u0434\u0437\u0435\u043D\u044C", morning: "\u0440\u0430\u043D\u0456\u0446\u0430", afternoon: "\u0434\u0437\u0435\u043D\u044C", evening: "\u0432\u0435\u0447\u0430\u0440", night: "\u043D\u043E\u0447" } };
var E8 = { narrow: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u045E\u043D.", noon: "\u043F\u043E\u045E\u0434.", morning: "\u0440\u0430\u043D.", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u044B" }, abbreviated: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u045E\u043D.", noon: "\u043F\u043E\u045E\u0434.", morning: "\u0440\u0430\u043D.", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u044B" }, wide: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u045E\u043D\u0430\u0447", noon: "\u043F\u043E\u045E\u0434\u0437\u0435\u043D\u044C", morning: "\u0440\u0430\u043D\u0456\u0446\u044B", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447\u0430\u0440\u0430", night: "\u043D\u043E\u0447\u044B" } };
var H7 = (t8, e30) => {
  let n19 = String(e30?.unit), i19 = Number(t8), r32;
  return n19 === "date" ? r32 = "-\u0433\u0430" : n19 === "hour" || n19 === "minute" || n19 === "second" ? r32 = "-\u044F" : r32 = (i19 % 10 === 2 || i19 % 10 === 3) && i19 % 100 !== 12 && i19 % 100 !== 13 ? "-\u0456" : "-\u044B", i19 + r32;
};
var h5 = { ordinalNumber: H7, era: c({ values: F10, defaultWidth: "wide" }), quarter: c({ values: z11, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: S10, defaultWidth: "wide", formattingValues: V10, defaultFormattingWidth: "wide" }), day: c({ values: L8, defaultWidth: "wide" }), dayPeriod: c({ values: X9, defaultWidth: "any", formattingValues: E8, defaultFormattingWidth: "wide" }) };
var C9 = /^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i;
var R6 = /\d+/i;
var Y3 = { narrow: /^((да )?н\.?\s?э\.?)/i, abbreviated: /^((да )?н\.?\s?э\.?)/i, wide: /^(да нашай эры|нашай эры|наша эра)/i };
var q3 = { any: [/^д/i, /^н/i] };
var O5 = { narrow: /^[1234]/i, abbreviated: /^[1234](-?[ыі]?)? кв.?/i, wide: /^[1234](-?[ыі]?)? квартал/i };
var A4 = { any: [/1/i, /2/i, /3/i, /4/i] };
var Q2 = { narrow: /^[слкмчжв]/i, abbreviated: /^(студз|лют|сак|крас|ма[йя]|чэрв|ліп|жн|вер|кастр|ліст|снеж)\.?/i, wide: /^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|ма[йя]|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|снеж(ань|ня))/i };
var I3 = { narrow: [/^с/i, /^л/i, /^с/i, /^к/i, /^м/i, /^ч/i, /^л/i, /^ж/i, /^в/i, /^к/i, /^л/i, /^с/i], any: [/^ст/i, /^лю/i, /^са/i, /^кр/i, /^ма/i, /^ч/i, /^ліп/i, /^ж/i, /^в/i, /^ка/i, /^ліс/i, /^сн/i] };
var _2 = { narrow: /^[нпасч]/i, short: /^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i, abbreviated: /^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцв|чац|птн|пят|суб).?/i, wide: /^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацв(ер|ярга)|пятніц[аы]|субот[аы])/i };
var j4 = { narrow: [/^н/i, /^п/i, /^а/i, /^с/i, /^ч/i, /^п/i, /^с/i], any: [/^н/i, /^п[ан]/i, /^а/i, /^с[ер]/i, /^ч/i, /^п[ят]/i, /^с[уб]/i] };
var B3 = { narrow: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i, abbreviated: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i, wide: /^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i };
var J3 = { any: { am: /^дп/i, pm: /^пп/i, midnight: /^поўн/i, noon: /^поўд/i, morning: /^р/i, afternoon: /^д[зн]/i, evening: /^в/i, night: /^н/i } };
var G2 = { ordinalNumber: h({ matchPattern: C9, parsePattern: R6, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: Y3, defaultMatchWidth: "wide", parsePatterns: q3, defaultParseWidth: "any" }), quarter: P({ matchPatterns: O5, defaultMatchWidth: "wide", parsePatterns: A4, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: Q2, defaultMatchWidth: "wide", parsePatterns: I3, defaultParseWidth: "any" }), day: P({ matchPatterns: _2, defaultMatchWidth: "wide", parsePatterns: j4, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: B3, defaultMatchWidth: "wide", parsePatterns: J3, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/bg.mjs
var W9 = { full: "EEEE, dd MMMM yyyy", long: "dd MMMM yyyy", medium: "dd MMM yyyy", short: "dd.MM.yyyy" };
var M9 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "H:mm" };
var k10 = { any: "{{date}} {{time}}" };
var m9 = { date: r2({ formats: W9, defaultWidth: "full" }), time: r2({ formats: M9, defaultWidth: "full" }), dateTime: r2({ formats: k10, defaultWidth: "any" }) };
var z12 = { narrow: ["\u043F\u0440.\u043D.\u0435.", "\u043D.\u0435."], abbreviated: ["\u043F\u0440\u0435\u0434\u0438 \u043D. \u0435.", "\u043D. \u0435."], wide: ["\u043F\u0440\u0435\u0434\u0438 \u043D\u043E\u0432\u0430\u0442\u0430 \u0435\u0440\u0430", "\u043D\u043E\u0432\u0430\u0442\u0430 \u0435\u0440\u0430"] };
var H8 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1-\u0432\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "2-\u0440\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "3-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "4-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441."], wide: ["1-\u0432\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435", "2-\u0440\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435", "3-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435", "4-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435"] };
var X10 = { abbreviated: ["\u044F\u043D\u0443", "\u0444\u0435\u0432", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0439", "\u044E\u043D\u0438", "\u044E\u043B\u0438", "\u0430\u0432\u0433", "\u0441\u0435\u043F", "\u043E\u043A\u0442", "\u043D\u043E\u0435", "\u0434\u0435\u043A"], wide: ["\u044F\u043D\u0443\u0430\u0440\u0438", "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0439", "\u044E\u043D\u0438", "\u044E\u043B\u0438", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438", "\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438", "\u043D\u043E\u0435\u043C\u0432\u0440\u0438", "\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438"] };
var L9 = { narrow: ["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"], short: ["\u043D\u0434", "\u043F\u043D", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043F\u0442", "\u0441\u0431"], abbreviated: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0432\u0442\u043E", "\u0441\u0440\u044F", "\u0447\u0435\u0442", "\u043F\u0435\u0442", "\u0441\u044A\u0431"], wide: ["\u043D\u0435\u0434\u0435\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u044F\u0434\u0430", "\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A", "\u043F\u0435\u0442\u044A\u043A", "\u0441\u044A\u0431\u043E\u0442\u0430"] };
var S11 = { wide: { am: "\u043F\u0440\u0435\u0434\u0438 \u043E\u0431\u044F\u0434", pm: "\u0441\u043B\u0435\u0434 \u043E\u0431\u044F\u0434", midnight: "\u0432 \u043F\u043E\u043B\u0443\u043D\u043E\u0449", noon: "\u043D\u0430 \u043E\u0431\u044F\u0434", morning: "\u0441\u0443\u0442\u0440\u0438\u043D\u0442\u0430", afternoon: "\u0441\u043B\u0435\u0434\u043E\u0431\u0435\u0434", evening: "\u0432\u0435\u0447\u0435\u0440\u0442\u0430", night: "\u043F\u0440\u0435\u0437 \u043D\u043E\u0449\u0442\u0430" } };
function E9(t8) {
  return t8 === "year" || t8 === "week" || t8 === "minute" || t8 === "second";
}
function N11(t8) {
  return t8 === "quarter";
}
function o8(t8, a33, r32, e30, n19) {
  let P76 = N11(a33) ? n19 : E9(a33) ? e30 : r32;
  return t8 + "-" + P76;
}
var T7 = (t8, a33) => {
  let r32 = Number(t8), e30 = a33?.unit;
  if (r32 === 0) return o8(0, e30, "\u0435\u0432", "\u0435\u0432\u0430", "\u0435\u0432\u043E");
  if (r32 % 1e3 === 0) return o8(r32, e30, "\u0435\u043D", "\u043D\u0430", "\u043D\u043E");
  if (r32 % 100 === 0) return o8(r32, e30, "\u0442\u0435\u043D", "\u0442\u043D\u0430", "\u0442\u043D\u043E");
  let n19 = r32 % 100;
  if (n19 > 20 || n19 < 10) switch (n19 % 10) {
    case 1:
      return o8(r32, e30, "\u0432\u0438", "\u0432\u0430", "\u0432\u043E");
    case 2:
      return o8(r32, e30, "\u0440\u0438", "\u0440\u0430", "\u0440\u043E");
    case 7:
    case 8:
      return o8(r32, e30, "\u043C\u0438", "\u043C\u0430", "\u043C\u043E");
  }
  return o8(r32, e30, "\u0442\u0438", "\u0442\u0430", "\u0442\u043E");
};
var p6 = { ordinalNumber: T7, era: c({ values: z12, defaultWidth: "wide" }), quarter: c({ values: H8, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: X10, defaultWidth: "wide" }), day: c({ values: L9, defaultWidth: "wide" }), dayPeriod: c({ values: S11, defaultWidth: "wide" }) };
var q4 = /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i;
var C10 = /\d+/i;
var R7 = { narrow: /^((пр)?н\.?\s?е\.?)/i, abbreviated: /^((пр)?н\.?\s?е\.?)/i, wide: /^(преди новата ера|новата ера|нова ера)/i };
var Y4 = { any: [/^п/i, /^н/i] };
var O6 = { narrow: /^[1234]/i, abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i, wide: /^[1234](-?[врт]?о?)? тримесечие/i };
var Q3 = { any: [/1/i, /2/i, /3/i, /4/i] };
var A5 = { narrow: /^[нпвсч]/i, short: /^(нд|пн|вт|ср|чт|пт|сб)/i, abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i, wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i };
var I4 = { narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i], any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[ъб]/i] };
var j5 = { abbreviated: /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i, wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i };
var B4 = { any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^май/i, /^юн/i, /^юл/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i] };
var G3 = { any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i };
var J4 = { any: { am: /^преди о/i, pm: /^след о/i, midnight: /^в пол/i, noon: /^на об/i, morning: /^сут/i, afternoon: /^следо/i, evening: /^веч/i, night: /^през н/i } };
var b10 = { ordinalNumber: h({ matchPattern: q4, parsePattern: C10, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: R7, defaultMatchWidth: "wide", parsePatterns: Y4, defaultParseWidth: "any" }), quarter: P({ matchPatterns: O6, defaultMatchWidth: "wide", parsePatterns: Q3, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: j5, defaultMatchWidth: "wide", parsePatterns: B4, defaultParseWidth: "any" }), day: P({ matchPatterns: A5, defaultMatchWidth: "wide", parsePatterns: I4, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: G3, defaultMatchWidth: "any", parsePatterns: J4, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/bn.mjs
var f10 = { locale: { 1: "\u09E7", 2: "\u09E8", 3: "\u09E9", 4: "\u09EA", 5: "\u09EB", 6: "\u09EC", 7: "\u09ED", 8: "\u09EE", 9: "\u09EF", 0: "\u09E6" }, number: { "\u09E7": "1", "\u09E8": "2", "\u09E9": "3", "\u09EA": "4", "\u09EB": "5", "\u09EC": "6", "\u09ED": "7", "\u09EE": "8", "\u09EF": "9", "\u09E6": "0" } };
var p7 = { narrow: ["\u0996\u09CD\u09B0\u09BF\u0983\u09AA\u09C2\u0983", "\u0996\u09CD\u09B0\u09BF\u0983"], abbreviated: ["\u0996\u09CD\u09B0\u09BF\u0983\u09AA\u09C2\u09B0\u09CD\u09AC", "\u0996\u09CD\u09B0\u09BF\u0983"], wide: ["\u0996\u09CD\u09B0\u09BF\u09B8\u09CD\u099F\u09AA\u09C2\u09B0\u09CD\u09AC", "\u0996\u09CD\u09B0\u09BF\u09B8\u09CD\u099F\u09BE\u09AC\u09CD\u09A6"] };
var b11 = { narrow: ["\u09E7", "\u09E8", "\u09E9", "\u09EA"], abbreviated: ["\u09E7\u09A4\u09CD\u09B0\u09C8", "\u09E8\u09A4\u09CD\u09B0\u09C8", "\u09E9\u09A4\u09CD\u09B0\u09C8", "\u09EA\u09A4\u09CD\u09B0\u09C8"], wide: ["\u09E7\u09AE \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995", "\u09E8\u09DF \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995", "\u09E9\u09DF \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995", "\u09EA\u09B0\u09CD\u09A5 \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995"] };
var w11 = { narrow: ["\u099C\u09BE\u09A8\u09C1", "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1", "\u09AE\u09BE\u09B0\u09CD\u099A", "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997\u09B8\u09CD\u099F", "\u09B8\u09C7\u09AA\u09CD\u099F", "\u0985\u0995\u09CD\u099F\u09CB", "\u09A8\u09AD\u09C7", "\u09A1\u09BF\u09B8\u09C7"], abbreviated: ["\u099C\u09BE\u09A8\u09C1", "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1", "\u09AE\u09BE\u09B0\u09CD\u099A", "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997\u09B8\u09CD\u099F", "\u09B8\u09C7\u09AA\u09CD\u099F", "\u0985\u0995\u09CD\u099F\u09CB", "\u09A8\u09AD\u09C7", "\u09A1\u09BF\u09B8\u09C7"], wide: ["\u099C\u09BE\u09A8\u09C1\u09DF\u09BE\u09B0\u09BF", "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09DF\u09BE\u09B0\u09BF", "\u09AE\u09BE\u09B0\u09CD\u099A", "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997\u09B8\u09CD\u099F", "\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0", "\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0", "\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0", "\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0"] };
var g7 = { narrow: ["\u09B0", "\u09B8\u09CB", "\u09AE", "\u09AC\u09C1", "\u09AC\u09C3", "\u09B6\u09C1", "\u09B6"], short: ["\u09B0\u09AC\u09BF", "\u09B8\u09CB\u09AE", "\u09AE\u0999\u09CD\u0997\u09B2", "\u09AC\u09C1\u09A7", "\u09AC\u09C3\u09B9", "\u09B6\u09C1\u0995\u09CD\u09B0", "\u09B6\u09A8\u09BF"], abbreviated: ["\u09B0\u09AC\u09BF", "\u09B8\u09CB\u09AE", "\u09AE\u0999\u09CD\u0997\u09B2", "\u09AC\u09C1\u09A7", "\u09AC\u09C3\u09B9", "\u09B6\u09C1\u0995\u09CD\u09B0", "\u09B6\u09A8\u09BF"], wide: ["\u09B0\u09AC\u09BF\u09AC\u09BE\u09B0", "\u09B8\u09CB\u09AE\u09AC\u09BE\u09B0", "\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09B0", "\u09AC\u09C1\u09A7\u09AC\u09BE\u09B0", "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09B0 ", "\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0", "\u09B6\u09A8\u09BF\u09AC\u09BE\u09B0"] };
var P12 = { narrow: { am: "\u09AA\u09C2", pm: "\u0985\u09AA", midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4", noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8", morning: "\u09B8\u0995\u09BE\u09B2", afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2", evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE", night: "\u09B0\u09BE\u09A4" }, abbreviated: { am: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8", pm: "\u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8", midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4", noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8", morning: "\u09B8\u0995\u09BE\u09B2", afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2", evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE", night: "\u09B0\u09BE\u09A4" }, wide: { am: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8", pm: "\u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8", midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4", noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8", morning: "\u09B8\u0995\u09BE\u09B2", afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2", evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE", night: "\u09B0\u09BE\u09A4" } };
var v10 = { narrow: { am: "\u09AA\u09C2", pm: "\u0985\u09AA", midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4", noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8", morning: "\u09B8\u0995\u09BE\u09B2", afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2", evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE", night: "\u09B0\u09BE\u09A4" }, abbreviated: { am: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8", pm: "\u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8", midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4", noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8", morning: "\u09B8\u0995\u09BE\u09B2", afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2", evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE", night: "\u09B0\u09BE\u09A4" }, wide: { am: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8", pm: "\u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8", midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4", noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8", morning: "\u09B8\u0995\u09BE\u09B2", afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2", evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE", night: "\u09B0\u09BE\u09A4" } };
function y11(t8, a33) {
  if (t8 > 18 && t8 <= 31) return a33 + "\u09B6\u09C7";
  switch (t8) {
    case 1:
      return a33 + "\u09B2\u09BE";
    case 2:
    case 3:
      return a33 + "\u09B0\u09BE";
    case 4:
      return a33 + "\u09A0\u09BE";
    default:
      return a33 + "\u0987";
  }
}
var M10 = (t8, a33) => {
  let n19 = Number(t8), e30 = s5(n19);
  if (a33?.unit === "date") return y11(n19, e30);
  if (n19 > 10 || n19 === 0) return e30 + "\u09A4\u09AE";
  switch (n19 % 10) {
    case 2:
    case 3:
      return e30 + "\u09DF";
    case 4:
      return e30 + "\u09B0\u09CD\u09A5";
    case 6:
      return e30 + "\u09B7\u09CD\u09A0";
    default:
      return e30 + "\u09AE";
  }
};
function s5(t8) {
  return t8.toString().replace(/\d/g, function(a33) {
    return f10.locale[a33];
  });
}
var m10 = { ordinalNumber: M10, era: c({ values: p7, defaultWidth: "wide" }), quarter: c({ values: b11, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: w11, defaultWidth: "wide" }), day: c({ values: g7, defaultWidth: "wide" }), dayPeriod: c({ values: P12, defaultWidth: "wide", formattingValues: v10, defaultFormattingWidth: "wide" }) };
var x5 = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" };
var D9 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var k11 = { full: "{{date}} {{time}} '\u09B8\u09AE\u09DF'", long: "{{date}} {{time}} '\u09B8\u09AE\u09DF'", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var c9 = { date: r2({ formats: x5, defaultWidth: "full" }), time: r2({ formats: D9, defaultWidth: "full" }), dateTime: r2({ formats: k11, defaultWidth: "full" }) };
var L10 = /^(\d+)(ম|য়|র্থ|ষ্ঠ|শে|ই|তম)?/i;
var V11 = /\d+/i;
var X11 = { narrow: /^(খ্রিঃপূঃ|খ্রিঃ)/i, abbreviated: /^(খ্রিঃপূর্ব|খ্রিঃ)/i, wide: /^(খ্রিস্টপূর্ব|খ্রিস্টাব্দ)/i };
var E10 = { narrow: [/^খ্রিঃপূঃ/i, /^খ্রিঃ/i], abbreviated: [/^খ্রিঃপূর্ব/i, /^খ্রিঃ/i], wide: [/^খ্রিস্টপূর্ব/i, /^খ্রিস্টাব্দ/i] };
var T8 = { narrow: /^[১২৩৪]/i, abbreviated: /^[১২৩৪]ত্রৈ/i, wide: /^[১২৩৪](ম|য়|র্থ)? ত্রৈমাসিক/i };
var S12 = { any: [/১/i, /২/i, /৩/i, /৪/i] };
var C11 = { narrow: /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i, abbreviated: /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i, wide: /^(জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর)/i };
var O7 = { any: [/^জানু/i, /^ফেব্রু/i, /^মার্চ/i, /^এপ্রিল/i, /^মে/i, /^জুন/i, /^জুলাই/i, /^আগস্ট/i, /^সেপ্ট/i, /^অক্টো/i, /^নভে/i, /^ডিসে/i] };
var R8 = { narrow: /^(র|সো|ম|বু|বৃ|শু|শ)+/i, short: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i, abbreviated: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i, wide: /^(রবিবার|সোমবার|মঙ্গলবার|বুধবার|বৃহস্পতিবার |শুক্রবার|শনিবার)+/i };
var Y5 = { narrow: [/^র/i, /^সো/i, /^ম/i, /^বু/i, /^বৃ/i, /^শু/i, /^শ/i], short: [/^রবি/i, /^সোম/i, /^মঙ্গল/i, /^বুধ/i, /^বৃহ/i, /^শুক্র/i, /^শনি/i], abbreviated: [/^রবি/i, /^সোম/i, /^মঙ্গল/i, /^বুধ/i, /^বৃহ/i, /^শুক্র/i, /^শনি/i], wide: [/^রবিবার/i, /^সোমবার/i, /^মঙ্গলবার/i, /^বুধবার/i, /^বৃহস্পতিবার /i, /^শুক্রবার/i, /^শনিবার/i] };
var q5 = { narrow: /^(পূ|অপ|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i, abbreviated: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i, wide: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i };
var N12 = { any: { am: /^পূ/i, pm: /^অপ/i, midnight: /^মধ্যরাত/i, noon: /^মধ্যাহ্ন/i, morning: /সকাল/i, afternoon: /বিকাল/i, evening: /সন্ধ্যা/i, night: /রাত/i } };
var l2 = { ordinalNumber: h({ matchPattern: L10, parsePattern: V11, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: X11, defaultMatchWidth: "wide", parsePatterns: E10, defaultParseWidth: "wide" }), quarter: P({ matchPatterns: T8, defaultMatchWidth: "wide", parsePatterns: S12, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: C11, defaultMatchWidth: "wide", parsePatterns: O7, defaultParseWidth: "any" }), day: P({ matchPatterns: R8, defaultMatchWidth: "wide", parsePatterns: Y5, defaultParseWidth: "wide" }), dayPeriod: P({ matchPatterns: q5, defaultMatchWidth: "wide", parsePatterns: N12, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/bs.mjs
var h6 = { full: "EEEE, d. MMMM yyyy.", long: "d. MMMM yyyy.", medium: "d. MMM yy.", short: "dd. MM. yy." };
var g8 = { full: "HH:mm:ss (zzzz)", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var f11 = { full: "{{date}} 'u' {{time}}", long: "{{date}} 'u' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var d3 = { date: r2({ formats: h6, defaultWidth: "full" }), time: r2({ formats: g8, defaultWidth: "full" }), dateTime: r2({ formats: f11, defaultWidth: "full" }) };
var P13 = { narrow: ["pr.n.e.", "AD"], abbreviated: ["pr. Hr.", "po. Hr."], wide: ["Prije Hrista", "Poslije Hrista"] };
var v11 = { narrow: ["1.", "2.", "3.", "4."], abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"] };
var b12 = { narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], wide: ["januar", "februar", "mart", "april", "maj", "juni", "juli", "avgust", "septembar", "oktobar", "novembar", "decembar"] };
var w12 = { narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], wide: ["januar", "februar", "mart", "april", "maj", "juni", "juli", "avgust", "septembar", "oktobar", "novembar", "decembar"] };
var k12 = { narrow: ["N", "P", "U", "S", "\u010C", "P", "S"], short: ["ned", "pon", "uto", "sre", "\u010Det", "pet", "sub"], abbreviated: ["ned", "pon", "uto", "sre", "\u010Det", "pet", "sub"], wide: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "\u010Detvrtak", "petak", "subota"] };
var y12 = { narrow: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uve\u010De", night: "no\u0107u" }, abbreviated: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uve\u010De", night: "no\u0107u" }, wide: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutru", afternoon: "poslije podne", evening: "uve\u010De", night: "no\u0107u" } };
var M11 = { narrow: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uve\u010De", night: "no\u0107u" }, abbreviated: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uve\u010De", night: "no\u0107u" }, wide: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutru", afternoon: "poslije podne", evening: "uve\u010De", night: "no\u0107u" } };
var A6 = (e30, n19) => {
  let a33 = Number(e30);
  return String(a33) + ".";
};
var p8 = { ordinalNumber: A6, era: c({ values: P13, defaultWidth: "wide" }), quarter: c({ values: v11, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: b12, defaultWidth: "wide", formattingValues: w12, defaultFormattingWidth: "wide" }), day: c({ values: k12, defaultWidth: "wide" }), dayPeriod: c({ values: y12, defaultWidth: "wide", formattingValues: M11, defaultFormattingWidth: "wide" }) };
var H9 = /^(\d+)\./i;
var x6 = /\d+/i;
var I5 = { narrow: /^(pr\.n\.e\.|AD)/i, abbreviated: /^(pr\.\s?Hr\.|po\.\s?Hr\.)/i, wide: /^(Prije Hrista|prije nove ere|Poslije Hrista|nova era)/i };
var D10 = { any: [/^pr/i, /^(po|nova)/i] };
var E11 = { narrow: /^[1234]/i, abbreviated: /^[1234]\.\s?kv\.?/i, wide: /^[1234]\. kvartal/i };
var S13 = { any: [/1/i, /2/i, /3/i, /4/i] };
var z13 = { narrow: /^(10|11|12|[123456789])\./i, abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i, wide: /^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(juni|juna)|(juli|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i };
var F11 = { narrow: [/^1/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^avg/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var V12 = { narrow: /^[npusčc]/i, short: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i, abbreviated: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i, wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i };
var X12 = { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] };
var L11 = { any: /^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|poslije podne|ujutru)/i };
var N13 = { any: { am: /^a/i, pm: /^p/i, midnight: /^pono/i, noon: /^pod/i, morning: /jutro/i, afternoon: /(poslije\s|po)+podne/i, evening: /(uvece|uveče)/i, night: /(nocu|noću)/i } };
var l3 = { ordinalNumber: h({ matchPattern: H9, parsePattern: x6, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: I5, defaultMatchWidth: "wide", parsePatterns: D10, defaultParseWidth: "any" }), quarter: P({ matchPatterns: E11, defaultMatchWidth: "wide", parsePatterns: S13, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: z13, defaultMatchWidth: "wide", parsePatterns: F11, defaultParseWidth: "any" }), day: P({ matchPatterns: V12, defaultMatchWidth: "wide", parsePatterns: X12, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: L11, defaultMatchWidth: "any", parsePatterns: N13, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ca.mjs
var g9 = { full: "EEEE, d 'de' MMMM y", long: "d 'de' MMMM y", medium: "d MMM y", short: "dd/MM/y" };
var p9 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var b13 = { full: "{{date}} 'a les' {{time}}", long: "{{date}} 'a les' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m11 = { date: r2({ formats: g9, defaultWidth: "full" }), time: r2({ formats: p9, defaultWidth: "full" }), dateTime: r2({ formats: b13, defaultWidth: "full" }) };
var y13 = { narrow: ["aC", "dC"], abbreviated: ["a. de C.", "d. de C."], wide: ["abans de Crist", "despr\xE9s de Crist"] };
var w13 = { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1r trimestre", "2n trimestre", "3r trimestre", "4t trimestre"] };
var P14 = { narrow: ["GN", "FB", "M\xC7", "AB", "MG", "JN", "JL", "AG", "ST", "OC", "NV", "DS"], abbreviated: ["gen.", "febr.", "mar\xE7", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."], wide: ["gener", "febrer", "mar\xE7", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"] };
var M12 = { narrow: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."], short: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."], abbreviated: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."], wide: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"] };
var j6 = { narrow: { am: "am", pm: "pm", midnight: "mitjanit", noon: "migdia", morning: "mat\xED", afternoon: "tarda", evening: "vespre", night: "nit" }, abbreviated: { am: "a.m.", pm: "p.m.", midnight: "mitjanit", noon: "migdia", morning: "mat\xED", afternoon: "tarda", evening: "vespre", night: "nit" }, wide: { am: "ante meridiem", pm: "post meridiem", midnight: "mitjanit", noon: "migdia", morning: "mat\xED", afternoon: "tarda", evening: "vespre", night: "nit" } };
var W10 = { narrow: { am: "am", pm: "pm", midnight: "de la mitjanit", noon: "del migdia", morning: "del mat\xED", afternoon: "de la tarda", evening: "del vespre", night: "de la nit" }, abbreviated: { am: "AM", pm: "PM", midnight: "de la mitjanit", noon: "del migdia", morning: "del mat\xED", afternoon: "de la tarda", evening: "del vespre", night: "de la nit" }, wide: { am: "ante meridiem", pm: "post meridiem", midnight: "de la mitjanit", noon: "del migdia", morning: "del mat\xED", afternoon: "de la tarda", evening: "del vespre", night: "de la nit" } };
var x7 = (e30, i19) => {
  let a33 = Number(e30), t8 = a33 % 100;
  if (t8 > 20 || t8 < 10) switch (t8 % 10) {
    case 1:
      return a33 + "r";
    case 2:
      return a33 + "n";
    case 3:
      return a33 + "r";
    case 4:
      return a33 + "t";
  }
  return a33 + "\xE8";
};
var u11 = { ordinalNumber: x7, era: c({ values: y13, defaultWidth: "wide" }), quarter: c({ values: w13, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: P14, defaultWidth: "wide" }), day: c({ values: M12, defaultWidth: "wide" }), dayPeriod: c({ values: j6, defaultWidth: "wide", formattingValues: W10, defaultFormattingWidth: "wide" }) };
var D11 = /^(\d+)(è|r|n|r|t)?/i;
var N14 = /\d+/i;
var T9 = { narrow: /^(aC|dC)/i, abbreviated: /^(a. de C.|d. de C.)/i, wide: /^(abans de Crist|despr[eé]s de Crist)/i };
var z14 = { narrow: [/^aC/i, /^dC/i], abbreviated: [/^(a. de C.)/i, /^(d. de C.)/i], wide: [/^(abans de Crist)/i, /^(despr[eé]s de Crist)/i] };
var F12 = { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](è|r|n|r|t)? trimestre/i };
var L12 = { any: [/1/i, /2/i, /3/i, /4/i] };
var k13 = { narrow: /^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i, abbreviated: /^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i, wide: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i };
var H10 = { narrow: [/^GN/i, /^FB/i, /^MÇ/i, /^AB/i, /^MG/i, /^JN/i, /^JL/i, /^AG/i, /^ST/i, /^OC/i, /^NV/i, /^DS/i], abbreviated: [/^gen./i, /^febr./i, /^març/i, /^abr./i, /^maig/i, /^juny/i, /^jul./i, /^ag./i, /^set./i, /^oct./i, /^nov./i, /^des./i], wide: [/^gener/i, /^febrer/i, /^març/i, /^abril/i, /^maig/i, /^juny/i, /^juliol/i, /^agost/i, /^setembre/i, /^octubre/i, /^novembre/i, /^desembre/i] };
var S14 = { narrow: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i, short: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i, abbreviated: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i, wide: /^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i };
var V13 = { narrow: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i], abbreviated: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i], wide: [/^diumenge/i, /^dilluns/i, /^dimarts/i, /^dimecres/i, /^dijous/i, /^divendres/i, /^disssabte/i] };
var G4 = { narrow: /^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i, abbreviated: /^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i, wide: /^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i };
var A7 = { any: { am: /^a/i, pm: /^p/i, midnight: /^mitjanit/i, noon: /^migdia/i, morning: /matí/i, afternoon: /tarda/i, evening: /vespre/i, night: /nit/i } };
var c10 = { ordinalNumber: h({ matchPattern: D11, parsePattern: N14, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: T9, defaultMatchWidth: "wide", parsePatterns: z14, defaultParseWidth: "wide" }), quarter: P({ matchPatterns: F12, defaultMatchWidth: "wide", parsePatterns: L12, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: k13, defaultMatchWidth: "wide", parsePatterns: H10, defaultParseWidth: "wide" }), day: P({ matchPatterns: S14, defaultMatchWidth: "wide", parsePatterns: V13, defaultParseWidth: "wide" }), dayPeriod: P({ matchPatterns: G4, defaultMatchWidth: "wide", parsePatterns: A7, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ckb.mjs
var f12 = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" };
var p10 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var g10 = { full: "{{date}} '\u06A9\u0627\u062A\u0698\u0645\u06CE\u0631' {{time}}", long: "{{date}} '\u06A9\u0627\u062A\u0698\u0645\u06CE\u0631' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m12 = { date: r2({ formats: f12, defaultWidth: "full" }), time: r2({ formats: p10, defaultWidth: "full" }), dateTime: r2({ formats: g10, defaultWidth: "full" }) };
var w14 = { narrow: ["\u067E", "\u062F"], abbreviated: ["\u067E-\u0632", "\u062F-\u0632"], wide: ["\u067E\u06CE\u0634 \u0632\u0627\u06CC\u0646", "\u062F\u0648\u0627\u06CC \u0632\u0627\u06CC\u0646"] };
var P15 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u06861\u0645", "\u06862\u0645", "\u06863\u0645", "\u06864\u0645"], wide: ["\u0686\u0627\u0631\u06D5\u06AF\u06CC \u06CC\u06D5\u06A9\u06D5\u0645", "\u0686\u0627\u0631\u06D5\u06AF\u06CC \u062F\u0648\u0648\u06D5\u0645", "\u0686\u0627\u0631\u06D5\u06AF\u06CC \u0633\u06CE\u06CC\u06D5\u0645", "\u0686\u0627\u0631\u06D5\u06AF\u06CC \u0686\u0648\u0627\u0631\u06D5\u0645"] };
var y14 = { narrow: ["\u06A9-\u062F", "\u0634", "\u0626\u0627", "\u0646", "\u0645", "\u062D", "\u062A", "\u0626\u0627", "\u0626\u06D5", "\u062A\u0634-\u06CC", "\u062A\u0634-\u062F", "\u06A9-\u06CC"], abbreviated: ["\u06A9\u0627\u0646-\u062F\u0648\u0648", "\u0634\u0648\u0628", "\u0626\u0627\u062F", "\u0646\u06CC\u0633", "\u0645\u0627\u06CC\u0633", "\u062D\u0648\u0632", "\u062A\u06D5\u0645", "\u0626\u0627\u0628", "\u0626\u06D5\u0644", "\u062A\u0634-\u06CC\u06D5\u06A9", "\u062A\u0634-\u062F\u0648\u0648", "\u06A9\u0627\u0646-\u06CC\u06D5\u06A9"], wide: ["\u06A9\u0627\u0646\u0648\u0648\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645", "\u0634\u0648\u0628\u0627\u062A", "\u0626\u0627\u062F\u0627\u0631", "\u0646\u06CC\u0633\u0627\u0646", "\u0645\u0627\u06CC\u0633", "\u062D\u0648\u0632\u06D5\u06CC\u0631\u0627\u0646", "\u062A\u06D5\u0645\u0645\u0648\u0632", "\u0626\u0627\u0628", "\u0626\u06D5\u06CC\u0644\u0648\u0644", "\u062A\u0634\u0631\u06CC\u0646\u06CC \u06CC\u06D5\u06A9\u06D5\u0645", "\u062A\u0634\u0631\u06CC\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645", "\u06A9\u0627\u0646\u0648\u0648\u0646\u06CC \u06CC\u06D5\u06A9\u06D5\u0645"] };
var v12 = { narrow: ["\u06CC-\u0634", "\u062F-\u0634", "\u0633-\u0634", "\u0686-\u0634", "\u067E-\u0634", "\u0647\u06D5", "\u0634"], short: ["\u06CC\u06D5-\u0634\u06D5", "\u062F\u0648\u0648-\u0634\u06D5", "\u0633\u06CE-\u0634\u06D5", "\u0686\u0648-\u0634\u06D5", "\u067E\u06CE-\u0634\u06D5", "\u0647\u06D5\u06CC", "\u0634\u06D5"], abbreviated: ["\u06CC\u06D5\u06A9-\u0634\u06D5\u0645", "\u062F\u0648\u0648-\u0634\u06D5\u0645", "\u0633\u06CE-\u0634\u06D5\u0645", "\u0686\u0648\u0627\u0631-\u0634\u06D5\u0645", "\u067E\u06CE\u0646\u062C-\u0634\u06D5\u0645", "\u0647\u06D5\u06CC\u0646\u06CC", "\u0634\u06D5\u0645\u06D5"], wide: ["\u06CC\u06D5\u06A9 \u0634\u06D5\u0645\u06D5", "\u062F\u0648\u0648 \u0634\u06D5\u0645\u06D5", "\u0633\u06CE \u0634\u06D5\u0645\u06D5", "\u0686\u0648\u0627\u0631 \u0634\u06D5\u0645\u06D5", "\u067E\u06CE\u0646\u062C \u0634\u06D5\u0645\u06D5", "\u0647\u06D5\u06CC\u0646\u06CC", "\u0634\u06D5\u0645\u06D5"] };
var M13 = { narrow: { am: "\u067E", pm: "\u062F", midnight: "\u0646-\u0634", noon: "\u0646", morning: "\u0628\u06D5\u06CC\u0627\u0646\u06CC", afternoon: "\u062F\u0648\u0627\u06CC \u0646\u06CC\u0648\u06D5\u0695\u06C6", evening: "\u0626\u06CE\u0648\u0627\u0631\u06D5", night: "\u0634\u06D5\u0648" }, abbreviated: { am: "\u067E-\u0646", pm: "\u062F-\u0646", midnight: "\u0646\u06CC\u0648\u06D5 \u0634\u06D5\u0648", noon: "\u0646\u06CC\u0648\u06D5\u0695\u06C6", morning: "\u0628\u06D5\u06CC\u0627\u0646\u06CC", afternoon: "\u062F\u0648\u0627\u06CC \u0646\u06CC\u0648\u06D5\u0695\u06C6", evening: "\u0626\u06CE\u0648\u0627\u0631\u06D5", night: "\u0634\u06D5\u0648" }, wide: { am: "\u067E\u06CE\u0634 \u0646\u06CC\u0648\u06D5\u0695\u06C6", pm: "\u062F\u0648\u0627\u06CC \u0646\u06CC\u0648\u06D5\u0695\u06C6", midnight: "\u0646\u06CC\u0648\u06D5 \u0634\u06D5\u0648", noon: "\u0646\u06CC\u0648\u06D5\u0695\u06C6", morning: "\u0628\u06D5\u06CC\u0627\u0646\u06CC", afternoon: "\u062F\u0648\u0627\u06CC \u0646\u06CC\u0648\u06D5\u0695\u06C6", evening: "\u0626\u06CE\u0648\u0627\u0631\u06D5", night: "\u0634\u06D5\u0648" } };
var W11 = { narrow: { am: "\u067E", pm: "\u062F", midnight: "\u0646-\u0634", noon: "\u0646", morning: "\u0644\u06D5 \u0628\u06D5\u06CC\u0627\u0646\u06CC\u062F\u0627", afternoon: "\u0644\u06D5 \u062F\u0648\u0627\u06CC \u0646\u06CC\u0648\u06D5\u0695\u06C6\u062F\u0627", evening: "\u0644\u06D5 \u0626\u06CE\u0648\u0627\u0631\u06D5\u062F\u0627", night: "\u0644\u06D5 \u0634\u06D5\u0648\u062F\u0627" }, abbreviated: { am: "\u067E-\u0646", pm: "\u062F-\u0646", midnight: "\u0646\u06CC\u0648\u06D5 \u0634\u06D5\u0648", noon: "\u0646\u06CC\u0648\u06D5\u0695\u06C6", morning: "\u0644\u06D5 \u0628\u06D5\u06CC\u0627\u0646\u06CC\u062F\u0627", afternoon: "\u0644\u06D5 \u062F\u0648\u0627\u06CC \u0646\u06CC\u0648\u06D5\u0695\u06C6\u062F\u0627", evening: "\u0644\u06D5 \u0626\u06CE\u0648\u0627\u0631\u06D5\u062F\u0627", night: "\u0644\u06D5 \u0634\u06D5\u0648\u062F\u0627" }, wide: { am: "\u067E\u06CE\u0634 \u0646\u06CC\u0648\u06D5\u0695\u06C6", pm: "\u062F\u0648\u0627\u06CC \u0646\u06CC\u0648\u06D5\u0695\u06C6", midnight: "\u0646\u06CC\u0648\u06D5 \u0634\u06D5\u0648", noon: "\u0646\u06CC\u0648\u06D5\u0695\u06C6", morning: "\u0644\u06D5 \u0628\u06D5\u06CC\u0627\u0646\u06CC\u062F\u0627", afternoon: "\u0644\u06D5 \u062F\u0648\u0627\u06CC \u0646\u06CC\u0648\u06D5\u0695\u06C6\u062F\u0627", evening: "\u0644\u06D5 \u0626\u06CE\u0648\u0627\u0631\u06D5\u062F\u0627", night: "\u0644\u06D5 \u0634\u06D5\u0648\u062F\u0627" } };
var x8 = (t8, o36) => String(t8);
var u12 = { ordinalNumber: x8, era: c({ values: w14, defaultWidth: "wide" }), quarter: c({ values: P15, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: y14, defaultWidth: "wide" }), day: c({ values: v12, defaultWidth: "wide" }), dayPeriod: c({ values: M13, defaultWidth: "wide", formattingValues: W11, defaultFormattingWidth: "wide" }) };
var D12 = /^(\d+)(th|st|nd|rd)?/i;
var F13 = /\d+/i;
var z15 = { narrow: /^(پ|د)/i, abbreviated: /^(پ-ز|د.ز)/i, wide: /^(پێش زاین| دوای زاین)/i };
var V14 = { any: [/^د/g, /^پ/g] };
var X13 = { narrow: /^[1234]/i, abbreviated: /^م[1234]چ/i, wide: /^(یەکەم|دووەم|سێیەم| چوارەم) (چارەگی)? quarter/i };
var E12 = { wide: [/چارەگی یەکەم/, /چارەگی دووەم/, /چارەگی سيیەم/, /چارەگی چوارەم/], any: [/1/i, /2/i, /3/i, /4/i] };
var L13 = { narrow: /^(ک-د|ش|ئا|ن|م|ح|ت|ئە|تش-ی|تش-د|ک-ی)/i, abbreviated: /^(کان-دوو|شوب|ئاد|نیس|مایس|حوز|تەم|ئاب|ئەل|تش-یەک|تش-دوو|کان-یەک)/i, wide: /^(کانوونی دووەم|شوبات|ئادار|نیسان|مایس|حوزەیران|تەمموز|ئاب|ئەیلول|تشرینی یەکەم|تشرینی دووەم|کانوونی یەکەم)/i };
var S15 = { narrow: [/^ک-د/i, /^ش/i, /^ئا/i, /^ن/i, /^م/i, /^ح/i, /^ت/i, /^ئا/i, /^ئە/i, /^تش-ی/i, /^تش-د/i, /^ک-ی/i], any: [/^کان-دوو/i, /^شوب/i, /^ئاد/i, /^نیس/i, /^مایس/i, /^حوز/i, /^تەم/i, /^ئاب/i, /^ئەل/i, /^تش-یەک/i, /^تش-دوو/i, /^|کان-یەک/i] };
var q6 = { narrow: /^(ش|ی|د|س|چ|پ|هە)/i, short: /^(یە-شە|دوو-شە|سێ-شە|چو-شە|پێ-شە|هە|شە)/i, abbreviated: /^(یەک-شەم|دوو-شەم|سێ-شەم|چوار-شەم|پێنخ-شەم|هەینی|شەمە)/i, wide: /^(یەک شەمە|دوو شەمە|سێ شەمە|چوار شەمە|پێنج شەمە|هەینی|شەمە)/i };
var C12 = { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] };
var N15 = { narrow: /^(پ|د|ن-ش|ن| (بەیانی|دوای نیوەڕۆ|ئێوارە|شەو))/i, abbreviated: /^(پ-ن|د-ن|نیوە شەو|نیوەڕۆ|بەیانی|دوای نیوەڕۆ|ئێوارە|شەو)/, wide: /^(پێش نیوەڕۆ|دوای نیوەڕۆ|نیوەڕۆ|نیوە شەو|لەبەیانیدا|لەدواینیوەڕۆدا|لە ئێوارەدا|لە شەودا)/, any: /^(پ|د|بەیانی|نیوەڕۆ|ئێوارە|شەو)/ };
var T10 = { any: { am: /^د/i, pm: /^پ/i, midnight: /^ن-ش/i, noon: /^ن/i, morning: /بەیانی/i, afternoon: /دواینیوەڕۆ/i, evening: /ئێوارە/i, night: /شەو/i } };
var c11 = { ordinalNumber: h({ matchPattern: D12, parsePattern: F13, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: z15, defaultMatchWidth: "wide", parsePatterns: V14, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X13, defaultMatchWidth: "wide", parsePatterns: E12, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: L13, defaultMatchWidth: "wide", parsePatterns: S15, defaultParseWidth: "any" }), day: P({ matchPatterns: q6, defaultMatchWidth: "wide", parsePatterns: C12, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: N15, defaultMatchWidth: "any", parsePatterns: T10, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/cs.mjs
var h7 = { full: "EEEE, d. MMMM yyyy", long: "d. MMMM yyyy", medium: "d. M. yyyy", short: "dd.MM.yyyy" };
var v13 = { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var g11 = { full: "{{date}} 'v' {{time}}", long: "{{date}} 'v' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var c12 = { date: r2({ formats: h7, defaultWidth: "full" }), time: r2({ formats: v13, defaultWidth: "full" }), dateTime: r2({ formats: g11, defaultWidth: "full" }) };
var w15 = { narrow: ["p\u0159. n. l.", "n. l."], abbreviated: ["p\u0159. n. l.", "n. l."], wide: ["p\u0159ed na\u0161\xEDm letopo\u010Dtem", "na\u0161eho letopo\u010Dtu"] };
var P16 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1. \u010Dtvrtlet\xED", "2. \u010Dtvrtlet\xED", "3. \u010Dtvrtlet\xED", "4. \u010Dtvrtlet\xED"], wide: ["1. \u010Dtvrtlet\xED", "2. \u010Dtvrtlet\xED", "3. \u010Dtvrtlet\xED", "4. \u010Dtvrtlet\xED"] };
var M14 = { narrow: ["L", "\xDA", "B", "D", "K", "\u010C", "\u010C", "S", "Z", "\u0158", "L", "P"], abbreviated: ["led", "\xFAno", "b\u0159e", "dub", "kv\u011B", "\u010Dvn", "\u010Dvc", "srp", "z\xE1\u0159", "\u0159\xEDj", "lis", "pro"], wide: ["leden", "\xFAnor", "b\u0159ezen", "duben", "kv\u011Bten", "\u010Derven", "\u010Dervenec", "srpen", "z\xE1\u0159\xED", "\u0159\xEDjen", "listopad", "prosinec"] };
var W12 = { narrow: ["L", "\xDA", "B", "D", "K", "\u010C", "\u010C", "S", "Z", "\u0158", "L", "P"], abbreviated: ["led", "\xFAno", "b\u0159e", "dub", "kv\u011B", "\u010Dvn", "\u010Dvc", "srp", "z\xE1\u0159", "\u0159\xEDj", "lis", "pro"], wide: ["ledna", "\xFAnora", "b\u0159ezna", "dubna", "kv\u011Btna", "\u010Dervna", "\u010Dervence", "srpna", "z\xE1\u0159\xED", "\u0159\xEDjna", "listopadu", "prosince"] };
var x9 = { narrow: ["ne", "po", "\xFAt", "st", "\u010Dt", "p\xE1", "so"], short: ["ne", "po", "\xFAt", "st", "\u010Dt", "p\xE1", "so"], abbreviated: ["ned", "pon", "\xFAte", "st\u0159", "\u010Dtv", "p\xE1t", "sob"], wide: ["ned\u011Ble", "pond\u011Bl\xED", "\xFAter\xFD", "st\u0159eda", "\u010Dtvrtek", "p\xE1tek", "sobota"] };
var D13 = { narrow: { am: "dop.", pm: "odp.", midnight: "p\u016Flnoc", noon: "poledne", morning: "r\xE1no", afternoon: "odpoledne", evening: "ve\u010Der", night: "noc" }, abbreviated: { am: "dop.", pm: "odp.", midnight: "p\u016Flnoc", noon: "poledne", morning: "r\xE1no", afternoon: "odpoledne", evening: "ve\u010Der", night: "noc" }, wide: { am: "dopoledne", pm: "odpoledne", midnight: "p\u016Flnoc", noon: "poledne", morning: "r\xE1no", afternoon: "odpoledne", evening: "ve\u010Der", night: "noc" } };
var L14 = { narrow: { am: "dop.", pm: "odp.", midnight: "p\u016Flnoc", noon: "poledne", morning: "r\xE1no", afternoon: "odpoledne", evening: "ve\u010Der", night: "noc" }, abbreviated: { am: "dop.", pm: "odp.", midnight: "p\u016Flnoc", noon: "poledne", morning: "r\xE1no", afternoon: "odpoledne", evening: "ve\u010Der", night: "noc" }, wide: { am: "dopoledne", pm: "odpoledne", midnight: "p\u016Flnoc", noon: "poledne", morning: "r\xE1no", afternoon: "odpoledne", evening: "ve\u010Der", night: "noc" } };
var F14 = (e30, n19) => Number(e30) + ".";
var f13 = { ordinalNumber: F14, era: c({ values: w15, defaultWidth: "wide" }), quarter: c({ values: P16, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: M14, defaultWidth: "wide", formattingValues: W12, defaultFormattingWidth: "wide" }), day: c({ values: x9, defaultWidth: "wide" }), dayPeriod: c({ values: D13, defaultWidth: "wide", formattingValues: L14, defaultFormattingWidth: "wide" }) };
var j7 = /^(\d+)\.?/i;
var K = /\d+/i;
var X14 = { narrow: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i, abbreviated: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i, wide: /^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i };
var E13 = { any: [/^p[řr]/i, /^(po|n)/i] };
var S16 = { narrow: /^[1234]/i, abbreviated: /^[1234]\. [čc]tvrtlet[íi]/i, wide: /^[1234]\. [čc]tvrtlet[íi]/i };
var H11 = { any: [/1/i, /2/i, /3/i, /4/i] };
var R9 = { narrow: /^[lúubdkčcszřrlp]/i, abbreviated: /^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i, wide: /^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i };
var N16 = { narrow: [/^l/i, /^[úu]/i, /^b/i, /^d/i, /^k/i, /^[čc]/i, /^[čc]/i, /^s/i, /^z/i, /^[řr]/i, /^l/i, /^p/i], any: [/^led/i, /^[úu]n/i, /^b[řr]e/i, /^dub/i, /^kv[ěe]/i, /^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i, /^[čc]vc|[čc]erven(ec|ce)/i, /^srp/i, /^z[áa][řr]/i, /^[řr][íi]j/i, /^lis/i, /^pro/i] };
var C13 = { narrow: /^[npuúsčps]/i, short: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i, abbreviated: /^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i, wide: /^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i };
var T11 = { narrow: [/^n/i, /^p/i, /^[úu]/i, /^s/i, /^[čc]/i, /^p/i, /^s/i], any: [/^ne/i, /^po/i, /^[úu]t/i, /^st/i, /^[čc]t/i, /^p[áa]/i, /^so/i] };
var Y6 = { any: /^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i };
var q7 = { any: { am: /^dop/i, pm: /^odp/i, midnight: /^p[ůu]lnoc/i, noon: /^poledne/i, morning: /r[áa]no/i, afternoon: /odpoledne/i, evening: /ve[čc]er/i, night: /noc/i } };
var y15 = { ordinalNumber: h({ matchPattern: j7, parsePattern: K, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: X14, defaultMatchWidth: "wide", parsePatterns: E13, defaultParseWidth: "any" }), quarter: P({ matchPatterns: S16, defaultMatchWidth: "wide", parsePatterns: H11, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: R9, defaultMatchWidth: "wide", parsePatterns: N16, defaultParseWidth: "any" }), day: P({ matchPatterns: C13, defaultMatchWidth: "wide", parsePatterns: T11, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: Y6, defaultMatchWidth: "any", parsePatterns: q7, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/cy.mjs
var u13 = { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy" };
var w16 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var f14 = { full: "{{date}} 'am' {{time}}", long: "{{date}} 'am' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var h8 = { date: r2({ formats: u13, defaultWidth: "full" }), time: r2({ formats: w16, defaultWidth: "full" }), dateTime: r2({ formats: f14, defaultWidth: "full" }) };
var b14 = { narrow: ["C", "O"], abbreviated: ["CC", "OC"], wide: ["Cyn Crist", "Ar \xF4l Crist"] };
var p11 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Ch1", "Ch2", "Ch3", "Ch4"], wide: ["Chwarter 1af", "2ail chwarter", "3ydd chwarter", "4ydd chwarter"] };
var M15 = { narrow: ["I", "Ch", "Ma", "E", "Mi", "Me", "G", "A", "Md", "H", "T", "Rh"], abbreviated: ["Ion", "Chwe", "Maw", "Ebr", "Mai", "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rhag"], wide: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"] };
var P17 = { narrow: ["S", "Ll", "M", "M", "I", "G", "S"], short: ["Su", "Ll", "Ma", "Me", "Ia", "Gw", "Sa"], abbreviated: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"], wide: ["dydd Sul", "dydd Llun", "dydd Mawrth", "dydd Mercher", "dydd Iau", "dydd Gwener", "dydd Sadwrn"] };
var v14 = { narrow: { am: "b", pm: "h", midnight: "hn", noon: "hd", morning: "bore", afternoon: "prynhawn", evening: "gyda'r nos", night: "nos" }, abbreviated: { am: "yb", pm: "yh", midnight: "hanner nos", noon: "hanner dydd", morning: "bore", afternoon: "prynhawn", evening: "gyda'r nos", night: "nos" }, wide: { am: "y.b.", pm: "y.h.", midnight: "hanner nos", noon: "hanner dydd", morning: "bore", afternoon: "prynhawn", evening: "gyda'r nos", night: "nos" } };
var W13 = { narrow: { am: "b", pm: "h", midnight: "hn", noon: "hd", morning: "yn y bore", afternoon: "yn y prynhawn", evening: "gyda'r nos", night: "yn y nos" }, abbreviated: { am: "yb", pm: "yh", midnight: "hanner nos", noon: "hanner dydd", morning: "yn y bore", afternoon: "yn y prynhawn", evening: "gyda'r nos", night: "yn y nos" }, wide: { am: "y.b.", pm: "y.h.", midnight: "hanner nos", noon: "hanner dydd", morning: "yn y bore", afternoon: "yn y prynhawn", evening: "gyda'r nos", night: "yn y nos" } };
var C14 = (a33, r32) => {
  let e30 = Number(a33);
  if (e30 < 20) switch (e30) {
    case 0:
      return e30 + "fed";
    case 1:
      return e30 + "af";
    case 2:
      return e30 + "ail";
    case 3:
    case 4:
      return e30 + "ydd";
    case 5:
    case 6:
      return e30 + "ed";
    case 7:
    case 8:
    case 9:
    case 10:
    case 12:
    case 15:
    case 18:
      return e30 + "fed";
    case 11:
    case 13:
    case 14:
    case 16:
    case 17:
    case 19:
      return e30 + "eg";
  }
  else if (e30 >= 50 && e30 <= 60 || e30 === 80 || e30 >= 100) return e30 + "fed";
  return e30 + "ain";
};
var y16 = { ordinalNumber: C14, era: c({ values: b14, defaultWidth: "wide" }), quarter: c({ values: p11, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: M15, defaultWidth: "wide" }), day: c({ values: P17, defaultWidth: "wide" }), dayPeriod: c({ values: v14, defaultWidth: "wide", formattingValues: W13, defaultFormattingWidth: "wide" }) };
var S17 = /^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i;
var D14 = /\d+/i;
var L15 = { narrow: /^(c|o)/i, abbreviated: /^(c\.?\s?c\.?|o\.?\s?c\.?)/i, wide: /^(cyn christ|ar ôl crist|ar ol crist)/i };
var k14 = { wide: [/^c/i, /^(ar ôl crist|ar ol crist)/i], any: [/^c/i, /^o/i] };
var z16 = { narrow: /^[1234]/i, abbreviated: /^ch[1234]/i, wide: /^(chwarter 1af)|([234](ail|ydd)? chwarter)/i };
var E14 = { any: [/1/i, /2/i, /3/i, /4/i] };
var F15 = { narrow: /^(i|ch|m|e|g|a|h|t|rh)/i, abbreviated: /^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i, wide: /^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i };
var I6 = { narrow: [/^i/i, /^ch/i, /^m/i, /^e/i, /^m/i, /^m/i, /^g/i, /^a/i, /^m/i, /^h/i, /^t/i, /^rh/i], any: [/^io/i, /^ch/i, /^maw/i, /^e/i, /^mai/i, /^meh/i, /^g/i, /^a/i, /^med/i, /^h/i, /^t/i, /^rh/i] };
var V15 = { narrow: /^(s|ll|m|i|g)/i, short: /^(su|ll|ma|me|ia|gw|sa)/i, abbreviated: /^(sul|llun|maw|mer|iau|gwe|sad)/i, wide: /^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i };
var X15 = { narrow: [/^s/i, /^ll/i, /^m/i, /^m/i, /^i/i, /^g/i, /^s/i], wide: [/^dydd su/i, /^dydd ll/i, /^dydd ma/i, /^dydd me/i, /^dydd i/i, /^dydd g/i, /^dydd sa/i], any: [/^su/i, /^ll/i, /^ma/i, /^me/i, /^i/i, /^g/i, /^sa/i] };
var G5 = { narrow: /^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i, any: /^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i };
var R10 = { any: { am: /^b|(y\.?\s?b\.?)/i, pm: /^h|(y\.?\s?h\.?)|(yr hwyr)/i, midnight: /^hn|hanner nos/i, noon: /^hd|hanner dydd/i, morning: /bore/i, afternoon: /prynhawn/i, evening: /^gyda'r nos$/i, night: /blah/i } };
var l4 = { ordinalNumber: h({ matchPattern: S17, parsePattern: D14, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: L15, defaultMatchWidth: "wide", parsePatterns: k14, defaultParseWidth: "any" }), quarter: P({ matchPatterns: z16, defaultMatchWidth: "wide", parsePatterns: E14, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: F15, defaultMatchWidth: "wide", parsePatterns: I6, defaultParseWidth: "any" }), day: P({ matchPatterns: V15, defaultMatchWidth: "wide", parsePatterns: X15, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: G5, defaultMatchWidth: "any", parsePatterns: R10, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/da.mjs
var c13 = { full: "EEEE 'den' d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "dd/MM/y" };
var h9 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var p12 = { full: "{{date}} 'kl'. {{time}}", long: "{{date}} 'kl'. {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var s6 = { date: r2({ formats: c13, defaultWidth: "full" }), time: r2({ formats: h9, defaultWidth: "full" }), dateTime: r2({ formats: p12, defaultWidth: "full" }) };
var b15 = { narrow: ["fvt", "vt"], abbreviated: ["f.v.t.", "v.t."], wide: ["f\xF8r vesterlandsk tidsregning", "vesterlandsk tidsregning"] };
var k15 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"] };
var P18 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"] };
var w17 = { narrow: ["S", "M", "T", "O", "T", "F", "L"], short: ["s\xF8", "ma", "ti", "on", "to", "fr", "l\xF8"], abbreviated: ["s\xF8n.", "man.", "tir.", "ons.", "tor.", "fre.", "l\xF8r."], wide: ["s\xF8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\xF8rdag"] };
var M16 = { narrow: { am: "a", pm: "p", midnight: "midnat", noon: "middag", morning: "morgen", afternoon: "eftermiddag", evening: "aften", night: "nat" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnat", noon: "middag", morning: "morgen", afternoon: "eftermiddag", evening: "aften", night: "nat" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnat", noon: "middag", morning: "morgen", afternoon: "eftermiddag", evening: "aften", night: "nat" } };
var y17 = { narrow: { am: "a", pm: "p", midnight: "midnat", noon: "middag", morning: "om morgenen", afternoon: "om eftermiddagen", evening: "om aftenen", night: "om natten" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnat", noon: "middag", morning: "om morgenen", afternoon: "om eftermiddagen", evening: "om aftenen", night: "om natten" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnat", noon: "middag", morning: "om morgenen", afternoon: "om eftermiddagen", evening: "om aftenen", night: "om natten" } };
var j8 = (e30, i19) => Number(e30) + ".";
var l5 = { ordinalNumber: j8, era: c({ values: b15, defaultWidth: "wide" }), quarter: c({ values: k15, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: P18, defaultWidth: "wide" }), day: c({ values: w17, defaultWidth: "wide" }), dayPeriod: c({ values: M16, defaultWidth: "wide", formattingValues: y17, defaultFormattingWidth: "wide" }) };
var x10 = /^(\d+)(\.)?/i;
var D15 = /\d+/i;
var F16 = { narrow: /^(fKr|fvt|eKr|vt)/i, abbreviated: /^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i, wide: /^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i };
var H12 = { any: [/^f/i, /^(v|e)/i] };
var z17 = { narrow: /^[1234]/i, abbreviated: /^[1234]. kvt\./i, wide: /^[1234]\.? kvartal/i };
var L16 = { any: [/1/i, /2/i, /3/i, /4/i] };
var V16 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i, wide: /^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i };
var X16 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var S18 = { narrow: /^[smtofl]/i, short: /^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i, abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i, wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i };
var E15 = { narrow: [/^s/i, /^m/i, /^t/i, /^o/i, /^t/i, /^f/i, /^l/i], any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i] };
var K2 = { narrow: /^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i, any: /^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i };
var N17 = { any: { am: /^a/i, pm: /^p/i, midnight: /midnat/i, noon: /middag/i, morning: /morgen/i, afternoon: /eftermiddag/i, evening: /aften/i, night: /nat/i } };
var f15 = { ordinalNumber: h({ matchPattern: x10, parsePattern: D15, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: F16, defaultMatchWidth: "wide", parsePatterns: H12, defaultParseWidth: "any" }), quarter: P({ matchPatterns: z17, defaultMatchWidth: "wide", parsePatterns: L16, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: V16, defaultMatchWidth: "wide", parsePatterns: X16, defaultParseWidth: "any" }), day: P({ matchPatterns: S18, defaultMatchWidth: "wide", parsePatterns: E15, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: K2, defaultMatchWidth: "any", parsePatterns: N17, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/de/_lib/formatLong.mjs
var m13 = { full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.y" };
var o9 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var d4 = { full: "{{date}} 'um' {{time}}", long: "{{date}} 'um' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var a5 = { date: r2({ formats: m13, defaultWidth: "full" }), time: r2({ formats: o9, defaultWidth: "full" }), dateTime: r2({ formats: d4, defaultWidth: "full" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/de/_lib/match.mjs
var e4 = /^(\d+)(\.)?/i;
var n3 = /\d+/i;
var r4 = { narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i };
var s7 = { any: [/^v/i, /^n/i] };
var d5 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](\.)? Quartal/i };
var o10 = { any: [/1/i, /2/i, /3/i, /4/i] };
var m14 = { narrow: /^[jfmasond]/i, abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i, wide: /^(jänner|januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i };
var h10 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var c14 = { narrow: /^[smdmf]/i, short: /^(so|mo|di|mi|do|fr|sa)/i, abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i, wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i };
var u14 = { any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i] };
var P19 = { narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i, abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i, wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i };
var b16 = { any: { am: /^v/i, pm: /^n/i, midnight: /^Mitte/i, noon: /^Mitta/i, morning: /morgens/i, afternoon: /nachmittags/i, evening: /abends/i, night: /nachts/i } };
var f16 = { ordinalNumber: h({ matchPattern: e4, parsePattern: n3, valueCallback: (t8) => parseInt(t8) }), era: P({ matchPatterns: r4, defaultMatchWidth: "wide", parsePatterns: s7, defaultParseWidth: "any" }), quarter: P({ matchPatterns: d5, defaultMatchWidth: "wide", parsePatterns: o10, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: m14, defaultMatchWidth: "wide", parsePatterns: h10, defaultParseWidth: "any" }), day: P({ matchPatterns: c14, defaultMatchWidth: "wide", parsePatterns: u14, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: P19, defaultMatchWidth: "wide", parsePatterns: b16, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/de-AT.mjs
var r6 = { narrow: ["v.Chr.", "n.Chr."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["vor Christus", "nach Christus"] };
var i3 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"] };
var n4 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["J\xE4n", "Feb", "M\xE4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], wide: ["J\xE4nner", "Februar", "M\xE4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] };
var o11 = { narrow: n4.narrow, abbreviated: ["J\xE4n.", "Feb.", "M\xE4rz", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], wide: n4.wide };
var m15 = { narrow: ["S", "M", "D", "M", "D", "F", "S"], short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"] };
var g12 = { narrow: { am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachm.", evening: "Abend", night: "Nacht" }, abbreviated: { am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht" }, wide: { am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht" } };
var d6 = { narrow: { am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachm.", evening: "abends", night: "nachts" }, abbreviated: { am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts" }, wide: { am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts" } };
var s8 = (a33) => Number(a33) + ".";
var e5 = { ordinalNumber: s8, era: c({ values: r6, defaultWidth: "wide" }), quarter: c({ values: i3, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: n4, formattingValues: o11, defaultWidth: "wide" }), day: c({ values: m15, defaultWidth: "wide" }), dayPeriod: c({ values: g12, defaultWidth: "wide", formattingValues: d6, defaultFormattingWidth: "wide" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/de.mjs
var r7 = { narrow: ["v.Chr.", "n.Chr."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["vor Christus", "nach Christus"] };
var i4 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"] };
var n5 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "M\xE4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], wide: ["Januar", "Februar", "M\xE4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] };
var o12 = { narrow: n5.narrow, abbreviated: ["Jan.", "Feb.", "M\xE4rz", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], wide: n5.wide };
var m16 = { narrow: ["S", "M", "D", "M", "D", "F", "S"], short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"] };
var g13 = { narrow: { am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachm.", evening: "Abend", night: "Nacht" }, abbreviated: { am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht" }, wide: { am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht" } };
var d7 = { narrow: { am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachm.", evening: "abends", night: "nachts" }, abbreviated: { am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts" }, wide: { am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts" } };
var s9 = (a33) => Number(a33) + ".";
var e6 = { ordinalNumber: s9, era: c({ values: r7, defaultWidth: "wide" }), quarter: c({ values: i4, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: n5, formattingValues: o12, defaultWidth: "wide" }), day: c({ values: m16, defaultWidth: "wide" }), dayPeriod: c({ values: g13, defaultWidth: "wide", formattingValues: d7, defaultFormattingWidth: "wide" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/el.mjs
var f17 = { full: "EEEE, d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "d/M/yy" };
var p13 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var b17 = { full: "{{date}} - {{time}}", long: "{{date}} - {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m17 = { date: r2({ formats: f17, defaultWidth: "full" }), time: r2({ formats: p13, defaultWidth: "full" }), dateTime: r2({ formats: b17, defaultWidth: "full" }) };
var y18 = { narrow: ["\u03C0\u03A7", "\u03BC\u03A7"], abbreviated: ["\u03C0.\u03A7.", "\u03BC.\u03A7."], wide: ["\u03C0\u03C1\u03BF \u03A7\u03C1\u03B9\u03C3\u03C4\u03BF\u03CD", "\u03BC\u03B5\u03C4\u03AC \u03A7\u03C1\u03B9\u03C3\u03C4\u03CC\u03BD"] };
var P20 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u03A41", "\u03A42", "\u03A43", "\u03A44"], wide: ["1\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF", "2\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF", "3\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF", "4\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF"] };
var g14 = { narrow: ["\u0399", "\u03A6", "\u039C", "\u0391", "\u039C", "\u0399", "\u0399", "\u0391", "\u03A3", "\u039F", "\u039D", "\u0394"], abbreviated: ["\u0399\u03B1\u03BD", "\u03A6\u03B5\u03B2", "\u039C\u03AC\u03C1", "\u0391\u03C0\u03C1", "\u039C\u03AC\u03B9", "\u0399\u03BF\u03CD\u03BD", "\u0399\u03BF\u03CD\u03BB", "\u0391\u03CD\u03B3", "\u03A3\u03B5\u03C0", "\u039F\u03BA\u03C4", "\u039D\u03BF\u03AD", "\u0394\u03B5\u03BA"], wide: ["\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2", "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2", "\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2", "\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2", "\u039C\u03AC\u03B9\u03BF\u03C2", "\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2", "\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2", "\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2", "\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2", "\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2", "\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2", "\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2"] };
var M17 = { narrow: ["\u0399", "\u03A6", "\u039C", "\u0391", "\u039C", "\u0399", "\u0399", "\u0391", "\u03A3", "\u039F", "\u039D", "\u0394"], abbreviated: ["\u0399\u03B1\u03BD", "\u03A6\u03B5\u03B2", "\u039C\u03B1\u03C1", "\u0391\u03C0\u03C1", "\u039C\u03B1\u0390", "\u0399\u03BF\u03C5\u03BD", "\u0399\u03BF\u03C5\u03BB", "\u0391\u03C5\u03B3", "\u03A3\u03B5\u03C0", "\u039F\u03BA\u03C4", "\u039D\u03BF\u03B5", "\u0394\u03B5\u03BA"], wide: ["\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5", "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5", "\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5", "\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5", "\u039C\u03B1\u0390\u03BF\u03C5", "\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5", "\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5", "\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5", "\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5", "\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5", "\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5", "\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5"] };
var v15 = { narrow: ["\u039A", "\u0394", "T", "\u03A4", "\u03A0", "\u03A0", "\u03A3"], short: ["\u039A\u03C5", "\u0394\u03B5", "\u03A4\u03C1", "\u03A4\u03B5", "\u03A0\u03AD", "\u03A0\u03B1", "\u03A3\u03AC"], abbreviated: ["\u039A\u03C5\u03C1", "\u0394\u03B5\u03C5", "\u03A4\u03C1\u03AF", "\u03A4\u03B5\u03C4", "\u03A0\u03AD\u03BC", "\u03A0\u03B1\u03C1", "\u03A3\u03AC\u03B2"], wide: ["\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE", "\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1", "\u03A4\u03C1\u03AF\u03C4\u03B7", "\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7", "\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7", "\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE", "\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF"] };
var W14 = { narrow: { am: "\u03C0\u03BC", pm: "\u03BC\u03BC", midnight: "\u03BC\u03B5\u03C3\u03AC\u03BD\u03C5\u03C7\u03C4\u03B1", noon: "\u03BC\u03B5\u03C3\u03B7\u03BC\u03AD\u03C1\u03B9", morning: "\u03C0\u03C1\u03C9\u03AF", afternoon: "\u03B1\u03C0\u03CC\u03B3\u03B5\u03C5\u03BC\u03B1", evening: "\u03B2\u03C1\u03AC\u03B4\u03C5", night: "\u03BD\u03CD\u03C7\u03C4\u03B1" }, abbreviated: { am: "\u03C0.\u03BC.", pm: "\u03BC.\u03BC.", midnight: "\u03BC\u03B5\u03C3\u03AC\u03BD\u03C5\u03C7\u03C4\u03B1", noon: "\u03BC\u03B5\u03C3\u03B7\u03BC\u03AD\u03C1\u03B9", morning: "\u03C0\u03C1\u03C9\u03AF", afternoon: "\u03B1\u03C0\u03CC\u03B3\u03B5\u03C5\u03BC\u03B1", evening: "\u03B2\u03C1\u03AC\u03B4\u03C5", night: "\u03BD\u03CD\u03C7\u03C4\u03B1" }, wide: { am: "\u03C0.\u03BC.", pm: "\u03BC.\u03BC.", midnight: "\u03BC\u03B5\u03C3\u03AC\u03BD\u03C5\u03C7\u03C4\u03B1", noon: "\u03BC\u03B5\u03C3\u03B7\u03BC\u03AD\u03C1\u03B9", morning: "\u03C0\u03C1\u03C9\u03AF", afternoon: "\u03B1\u03C0\u03CC\u03B3\u03B5\u03C5\u03BC\u03B1", evening: "\u03B2\u03C1\u03AC\u03B4\u03C5", night: "\u03BD\u03CD\u03C7\u03C4\u03B1" } };
var x11 = (e30, o36) => {
  let a33 = Number(e30), t8 = o36?.unit, r32;
  return t8 === "year" || t8 === "month" ? r32 = "\u03BF\u03C2" : t8 === "week" || t8 === "dayOfYear" || t8 === "day" || t8 === "hour" || t8 === "date" ? r32 = "\u03B7" : r32 = "\u03BF", a33 + r32;
};
var l6 = { ordinalNumber: x11, era: c({ values: y18, defaultWidth: "wide" }), quarter: c({ values: P20, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: g14, defaultWidth: "wide", formattingValues: M17, defaultFormattingWidth: "wide" }), day: c({ values: v15, defaultWidth: "wide" }), dayPeriod: c({ values: W14, defaultWidth: "wide" }) };
var D16 = /^(\d+)(ος|η|ο)?/i;
var z18 = /\d+/i;
var F17 = { narrow: /^(πΧ|μΧ)/i, abbreviated: /^(π\.?\s?χ\.?|π\.?\s?κ\.?\s?χ\.?|μ\.?\s?χ\.?|κ\.?\s?χ\.?)/i, wide: /^(προ Χριστο(ύ|υ)|πριν απ(ό|ο) την Κοιν(ή|η) Χρονολογ(ί|ι)α|μετ(ά|α) Χριστ(ό|ο)ν|Κοιν(ή|η) Χρονολογ(ί|ι)α)/i };
var V17 = { any: [/^π/i, /^(μ|κ)/i] };
var X17 = { narrow: /^[1234]/i, abbreviated: /^τ[1234]/i, wide: /^[1234]ο? τρ(ί|ι)μηνο/i };
var L17 = { any: [/1/i, /2/i, /3/i, /4/i] };
var E16 = { narrow: /^[ιφμαμιιασονδ]/i, abbreviated: /^(ιαν|φεβ|μ[άα]ρ|απρ|μ[άα][ιΐ]|ιο[ύυ]ν|ιο[ύυ]λ|α[ύυ]γ|σεπ|οκτ|νο[έε]|δεκ)/i, wide: /^(μ[άα][ιΐ]|α[ύυ]γο[υύ]στ)(ος|ου)|(ιανου[άα]ρ|φεβρου[άα]ρ|μ[άα]ρτ|απρ[ίι]λ|ιο[ύυ]ν|ιο[ύυ]λ|σεπτ[έε]μβρ|οκτ[ώω]βρ|νο[έε]μβρ|δεκ[έε]μβρ)(ιος|ίου)/i };
var N18 = { narrow: [/^ι/i, /^φ/i, /^μ/i, /^α/i, /^μ/i, /^ι/i, /^ι/i, /^α/i, /^σ/i, /^ο/i, /^ν/i, /^δ/i], any: [/^ια/i, /^φ/i, /^μ[άα]ρ/i, /^απ/i, /^μ[άα][ιΐ]/i, /^ιο[ύυ]ν/i, /^ιο[ύυ]λ/i, /^α[ύυ]/i, /^σ/i, /^ο/i, /^ν/i, /^δ/i] };
var S19 = { narrow: /^[κδτπσ]/i, short: /^(κυ|δε|τρ|τε|π[εέ]|π[αά]|σ[αά])/i, abbreviated: /^(κυρ|δευ|τρι|τετ|πεμ|παρ|σαβ)/i, wide: /^(κυριακ(ή|η)|δευτ(έ|ε)ρα|τρ(ί|ι)τη|τετ(ά|α)ρτη|π(έ|ε)μπτη|παρασκευ(ή|η)|σ(ά|α)ββατο)/i };
var T12 = { narrow: [/^κ/i, /^δ/i, /^τ/i, /^τ/i, /^π/i, /^π/i, /^σ/i], any: [/^κ/i, /^δ/i, /^τρ/i, /^τε/i, /^π[εέ]/i, /^π[αά]/i, /^σ/i] };
var Y7 = { narrow: /^(πμ|μμ|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i, any: /^([πμ]\.?\s?μ\.?|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i };
var C15 = { any: { am: /^πμ|π\.\s?μ\./i, pm: /^μμ|μ\.\s?μ\./i, midnight: /^μεσάν/i, noon: /^μεσημ(έ|ε)/i, morning: /πρω(ί|ι)/i, afternoon: /απ(ό|ο)γευμα/i, evening: /βρ(ά|α)δυ/i, night: /ν(ύ|υ)χτα/i } };
var c15 = { ordinalNumber: h({ matchPattern: D16, parsePattern: z18, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: F17, defaultMatchWidth: "wide", parsePatterns: V17, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X17, defaultMatchWidth: "wide", parsePatterns: L17, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: E16, defaultMatchWidth: "wide", parsePatterns: N18, defaultParseWidth: "any" }), day: P({ matchPatterns: S19, defaultMatchWidth: "wide", parsePatterns: T12, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: Y7, defaultMatchWidth: "any", parsePatterns: C15, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/en-US/_lib/formatDistance.mjs
var a6 = { lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" }, xSeconds: { one: "1 second", other: "{{count}} seconds" }, halfAMinute: "half a minute", lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" }, xMinutes: { one: "1 minute", other: "{{count}} minutes" }, aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" }, xHours: { one: "1 hour", other: "{{count}} hours" }, xDays: { one: "1 day", other: "{{count}} days" }, aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" }, xWeeks: { one: "1 week", other: "{{count}} weeks" }, aboutXMonths: { one: "about 1 month", other: "about {{count}} months" }, xMonths: { one: "1 month", other: "{{count}} months" }, aboutXYears: { one: "about 1 year", other: "about {{count}} years" }, xYears: { one: "1 year", other: "{{count}} years" }, overXYears: { one: "over 1 year", other: "over {{count}} years" }, almostXYears: { one: "almost 1 year", other: "almost {{count}} years" } };
var r8 = (s23, n19, t8) => {
  let e30, o36 = a6[s23];
  return typeof o36 == "string" ? e30 = o36 : n19 === 1 ? e30 = o36.one : e30 = o36.other.replace("{{count}}", n19.toString()), t8?.addSuffix ? t8.comparison && t8.comparison > 0 ? "in " + e30 : e30 + " ago" : e30;
};

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/en-US/_lib/formatRelative.mjs
var t5 = { lastWeek: "'last' eeee 'at' p", yesterday: "'yesterday at' p", today: "'today at' p", tomorrow: "'tomorrow at' p", nextWeek: "eeee 'at' p", other: "P" };
var s10 = (e30, a33, o36, r32) => t5[e30];

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/en-US/_lib/localize.mjs
var a7 = { narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"] };
var r9 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"] };
var o13 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] };
var d8 = { narrow: ["S", "M", "T", "W", "T", "F", "S"], short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] };
var m18 = { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" } };
var g15 = { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" } };
var u15 = (i19, h48) => {
  let n19 = Number(i19), t8 = n19 % 100;
  if (t8 > 20 || t8 < 10) switch (t8 % 10) {
    case 1:
      return n19 + "st";
    case 2:
      return n19 + "nd";
    case 3:
      return n19 + "rd";
  }
  return n19 + "th";
};
var l7 = { ordinalNumber: u15, era: c({ values: a7, defaultWidth: "wide" }), quarter: c({ values: r9, defaultWidth: "wide", argumentCallback: (i19) => i19 - 1 }), month: c({ values: o13, defaultWidth: "wide" }), day: c({ values: d8, defaultWidth: "wide" }), dayPeriod: c({ values: m18, defaultWidth: "wide", formattingValues: g15, defaultFormattingWidth: "wide" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/en-US/_lib/match.mjs
var n6 = /^(\d+)(th|st|nd|rd)?/i;
var e7 = /\d+/i;
var r10 = { narrow: /^(b|a)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(before christ|before common era|anno domini|common era)/i };
var s11 = { any: [/^b/i, /^(a|c)/i] };
var o14 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i };
var d9 = { any: [/1/i, /2/i, /3/i, /4/i] };
var m19 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i, wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i };
var h11 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var c16 = { narrow: /^[smtwf]/i, short: /^(su|mo|tu|we|th|fr|sa)/i, abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i, wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i };
var u16 = { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] };
var P21 = { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i };
var y19 = { any: { am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i } };
var l8 = { ordinalNumber: h({ matchPattern: n6, parsePattern: e7, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: r10, defaultMatchWidth: "wide", parsePatterns: s11, defaultParseWidth: "any" }), quarter: P({ matchPatterns: o14, defaultMatchWidth: "wide", parsePatterns: d9, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: m19, defaultMatchWidth: "wide", parsePatterns: h11, defaultParseWidth: "any" }), day: P({ matchPatterns: c16, defaultMatchWidth: "wide", parsePatterns: u16, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: P21, defaultMatchWidth: "any", parsePatterns: y19, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/en-AU.mjs
var o15 = { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy" };
var a8 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var e8 = { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m20 = { date: r2({ formats: o15, defaultWidth: "full" }), time: r2({ formats: a8, defaultWidth: "full" }), dateTime: r2({ formats: e8, defaultWidth: "full" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/en-CA.mjs
var i5 = { full: "EEEE, MMMM do, yyyy", long: "MMMM do, yyyy", medium: "MMM d, yyyy", short: "yyyy-MM-dd" };
var h12 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var l9 = { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var s12 = { date: r2({ formats: i5, defaultWidth: "full" }), time: r2({ formats: h12, defaultWidth: "full" }), dateTime: r2({ formats: l9, defaultWidth: "full" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/en-GB/_lib/formatLong.mjs
var m21 = { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy" };
var d10 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var e9 = { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var a9 = { date: r2({ formats: m21, defaultWidth: "full" }), time: r2({ formats: d10, defaultWidth: "full" }), dateTime: r2({ formats: e9, defaultWidth: "full" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/en-IN.mjs
var o16 = { full: "EEEE, d MMMM yyyy", long: "d MMMM, yyyy", medium: "d MMM, yyyy", short: "dd/MM/yyyy" };
var a10 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var e10 = { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m22 = { date: r2({ formats: o16, defaultWidth: "full" }), time: r2({ formats: a10, defaultWidth: "full" }), dateTime: r2({ formats: e10, defaultWidth: "full" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/en-NZ.mjs
var o17 = { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy" };
var a11 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var e11 = { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m23 = { date: r2({ formats: o17, defaultWidth: "full" }), time: r2({ formats: a11, defaultWidth: "full" }), dateTime: r2({ formats: e11, defaultWidth: "full" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/en-US.mjs
var m24 = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" };
var a12 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var e12 = { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var o18 = { date: r2({ formats: m24, defaultWidth: "full" }), time: r2({ formats: a12, defaultWidth: "full" }), dateTime: r2({ formats: e12, defaultWidth: "full" }) };
var s13 = { code: "en-US", formatDistance: r8, formatLong: o18, formatRelative: s10, localize: l7, match: l8, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/en-ZA.mjs
var o19 = { full: "EEEE, dd MMMM yyyy", long: "dd MMMM yyyy", medium: "dd MMM yyyy", short: "yyyy/MM/dd" };
var e13 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var a13 = { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m25 = { date: r2({ formats: o19, defaultWidth: "full" }), time: r2({ formats: e13, defaultWidth: "full" }), dateTime: r2({ formats: a13, defaultWidth: "full" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/eo.mjs
var p14 = { full: "EEEE, do 'de' MMMM y", long: "y-MMMM-dd", medium: "y-MMM-dd", short: "yyyy-MM-dd" };
var j9 = { full: "Ho 'horo kaj' m:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var f18 = { any: "{{date}} {{time}}" };
var d11 = { date: r2({ formats: p14, defaultWidth: "full" }), time: r2({ formats: j9, defaultWidth: "full" }), dateTime: r2({ formats: f18, defaultWidth: "any" }) };
var k16 = { narrow: ["aK", "pK"], abbreviated: ["a.K.E.", "p.K.E."], wide: ["anta\u016D Komuna Erao", "Komuna Erao"] };
var v16 = { narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1-a kvaronjaro", "2-a kvaronjaro", "3-a kvaronjaro", "4-a kvaronjaro"] };
var g16 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "a\u016Dg", "sep", "okt", "nov", "dec"], wide: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "a\u016Dgusto", "septembro", "oktobro", "novembro", "decembro"] };
var P22 = { narrow: ["D", "L", "M", "M", "\u0134", "V", "S"], short: ["di", "lu", "ma", "me", "\u0135a", "ve", "sa"], abbreviated: ["dim", "lun", "mar", "mer", "\u0135a\u016D", "ven", "sab"], wide: ["diman\u0109o", "lundo", "mardo", "merkredo", "\u0135a\u016Ddo", "vendredo", "sabato"] };
var w18 = { narrow: { am: "a", pm: "p", midnight: "noktomezo", noon: "tagmezo", morning: "matene", afternoon: "posttagmeze", evening: "vespere", night: "nokte" }, abbreviated: { am: "a.t.m.", pm: "p.t.m.", midnight: "noktomezo", noon: "tagmezo", morning: "matene", afternoon: "posttagmeze", evening: "vespere", night: "nokte" }, wide: { am: "anta\u016Dtagmeze", pm: "posttagmeze", midnight: "noktomezo", noon: "tagmezo", morning: "matene", afternoon: "posttagmeze", evening: "vespere", night: "nokte" } };
var y20 = (e30) => Number(e30) + "-a";
var l10 = { ordinalNumber: y20, era: c({ values: k16, defaultWidth: "wide" }), quarter: c({ values: v16, defaultWidth: "wide", argumentCallback: function(e30) {
  return Number(e30) - 1;
} }), month: c({ values: g16, defaultWidth: "wide" }), day: c({ values: P22, defaultWidth: "wide" }), dayPeriod: c({ values: w18, defaultWidth: "wide" }) };
var M18 = /^(\d+)(-?a)?/i;
var x12 = /\d+/i;
var W15 = { narrow: /^([ap]k)/i, abbreviated: /^([ap]\.?\s?k\.?\s?e\.?)/i, wide: /^((antaǔ |post )?komuna erao)/i };
var D17 = { any: [/^a/i, /^[kp]/i] };
var E17 = { narrow: /^[1234]/i, abbreviated: /^k[1234]/i, wide: /^[1234](-?a)? kvaronjaro/i };
var K3 = { any: [/1/i, /2/i, /3/i, /4/i] };
var F18 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux|uh|u)g|sep|okt|nov|dec)/i, wide: /^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i };
var H13 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^a(u|ŭ)/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var L18 = { narrow: /^[dlmĵjvs]/i, short: /^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i, abbreviated: /^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i, wide: /^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i };
var N19 = { narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^(j|ĵ)/i, /^v/i, /^s/i], any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^(j|ĵ)/i, /^v/i, /^s/i] };
var X18 = { narrow: /^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i, abbreviated: /^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i, wide: /^(anta(ŭ|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i };
var S20 = { any: { am: /^a/i, pm: /^p/i, midnight: /^noktom/i, noon: /^t/i, morning: /^m/i, afternoon: /^posttagmeze/i, evening: /^v/i, night: /^n/i } };
var c17 = { ordinalNumber: h({ matchPattern: M18, parsePattern: x12, valueCallback: function(e30) {
  return parseInt(e30, 10);
} }), era: P({ matchPatterns: W15, defaultMatchWidth: "wide", parsePatterns: D17, defaultParseWidth: "any" }), quarter: P({ matchPatterns: E17, defaultMatchWidth: "wide", parsePatterns: K3, defaultParseWidth: "any", valueCallback: function(e30) {
  return e30 + 1;
} }), month: P({ matchPatterns: F18, defaultMatchWidth: "wide", parsePatterns: H13, defaultParseWidth: "any" }), day: P({ matchPatterns: L18, defaultMatchWidth: "wide", parsePatterns: N19, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: X18, defaultMatchWidth: "wide", parsePatterns: S20, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/es.mjs
var f19 = { full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d MMM y", short: "dd/MM/y" };
var p15 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var b18 = { full: "{{date}} 'a las' {{time}}", long: "{{date}} 'a las' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m26 = { date: r2({ formats: f19, defaultWidth: "full" }), time: r2({ formats: p15, defaultWidth: "full" }), dateTime: r2({ formats: b18, defaultWidth: "full" }) };
var y21 = { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "despu\xE9s de cristo"] };
var P23 = { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"] };
var w19 = { narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"], wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"] };
var M19 = { narrow: ["d", "l", "m", "m", "j", "v", "s"], short: ["do", "lu", "ma", "mi", "ju", "vi", "s\xE1"], abbreviated: ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"], wide: ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"] };
var W16 = { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "ma\xF1ana", afternoon: "tarde", evening: "tarde", night: "noche" }, abbreviated: { am: "AM", pm: "PM", midnight: "medianoche", noon: "mediodia", morning: "ma\xF1ana", afternoon: "tarde", evening: "tarde", night: "noche" }, wide: { am: "a.m.", pm: "p.m.", midnight: "medianoche", noon: "mediodia", morning: "ma\xF1ana", afternoon: "tarde", evening: "tarde", night: "noche" } };
var j10 = { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "de la ma\xF1ana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche" }, abbreviated: { am: "AM", pm: "PM", midnight: "medianoche", noon: "mediodia", morning: "de la ma\xF1ana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche" }, wide: { am: "a.m.", pm: "p.m.", midnight: "medianoche", noon: "mediodia", morning: "de la ma\xF1ana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche" } };
var x13 = (e30, t8) => Number(e30) + "\xBA";
var u17 = { ordinalNumber: x13, era: c({ values: y21, defaultWidth: "wide" }), quarter: c({ values: P23, defaultWidth: "wide", argumentCallback: (e30) => Number(e30) - 1 }), month: c({ values: w19, defaultWidth: "wide" }), day: c({ values: M19, defaultWidth: "wide" }), dayPeriod: c({ values: W16, defaultWidth: "wide", formattingValues: j10, defaultFormattingWidth: "wide" }) };
var k17 = /^(\d+)(º)?/i;
var z19 = /\d+/i;
var H14 = { narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i, wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i };
var F19 = { any: [/^ac/i, /^dc/i], wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i] };
var T13 = { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º)? trimestre/i };
var C16 = { any: [/1/i, /2/i, /3/i, /4/i] };
var L19 = { narrow: /^[efmajsond]/i, abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i, wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i };
var V18 = { narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i] };
var X19 = { narrow: /^[dlmjvs]/i, short: /^(do|lu|ma|mi|ju|vi|s[áa])/i, abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i, wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i };
var N20 = { narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i], any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i] };
var E18 = { narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i, any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i };
var A8 = { any: { am: /^a/i, pm: /^p/i, midnight: /^mn/i, noon: /^md/i, morning: /mañana/i, afternoon: /tarde/i, evening: /tarde/i, night: /noche/i } };
var c18 = { ordinalNumber: h({ matchPattern: k17, parsePattern: z19, valueCallback: function(e30) {
  return parseInt(e30, 10);
} }), era: P({ matchPatterns: H14, defaultMatchWidth: "wide", parsePatterns: F19, defaultParseWidth: "any" }), quarter: P({ matchPatterns: T13, defaultMatchWidth: "wide", parsePatterns: C16, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: L19, defaultMatchWidth: "wide", parsePatterns: V18, defaultParseWidth: "any" }), day: P({ matchPatterns: X19, defaultMatchWidth: "wide", parsePatterns: N20, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: E18, defaultMatchWidth: "any", parsePatterns: A8, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/et.mjs
var v17 = { full: "EEEE, d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "dd.MM.y" };
var f20 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var b19 = { full: "{{date}} 'kell' {{time}}", long: "{{date}} 'kell' {{time}}", medium: "{{date}}. {{time}}", short: "{{date}}. {{time}}" };
var l11 = { date: r2({ formats: v17, defaultWidth: "full" }), time: r2({ formats: f20, defaultWidth: "full" }), dateTime: r2({ formats: b19, defaultWidth: "full" }) };
var g17 = { narrow: ["e.m.a", "m.a.j"], abbreviated: ["e.m.a", "m.a.j"], wide: ["enne meie ajaarvamist", "meie ajaarvamise j\xE4rgi"] };
var w20 = { narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"] };
var h13 = { narrow: ["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jaan", "veebr", "m\xE4rts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"], wide: ["jaanuar", "veebruar", "m\xE4rts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"] };
var p16 = { narrow: ["P", "E", "T", "K", "N", "R", "L"], short: ["P", "E", "T", "K", "N", "R", "L"], abbreviated: ["p\xFChap.", "esmasp.", "teisip.", "kolmap.", "neljap.", "reede.", "laup."], wide: ["p\xFChap\xE4ev", "esmasp\xE4ev", "teisip\xE4ev", "kolmap\xE4ev", "neljap\xE4ev", "reede", "laup\xE4ev"] };
var M20 = { narrow: { am: "AM", pm: "PM", midnight: "kesk\xF6\xF6", noon: "keskp\xE4ev", morning: "hommik", afternoon: "p\xE4rastl\xF5una", evening: "\xF5htu", night: "\xF6\xF6" }, abbreviated: { am: "AM", pm: "PM", midnight: "kesk\xF6\xF6", noon: "keskp\xE4ev", morning: "hommik", afternoon: "p\xE4rastl\xF5una", evening: "\xF5htu", night: "\xF6\xF6" }, wide: { am: "AM", pm: "PM", midnight: "kesk\xF6\xF6", noon: "keskp\xE4ev", morning: "hommik", afternoon: "p\xE4rastl\xF5una", evening: "\xF5htu", night: "\xF6\xF6" } };
var j11 = { narrow: { am: "AM", pm: "PM", midnight: "kesk\xF6\xF6l", noon: "keskp\xE4eval", morning: "hommikul", afternoon: "p\xE4rastl\xF5unal", evening: "\xF5htul", night: "\xF6\xF6sel" }, abbreviated: { am: "AM", pm: "PM", midnight: "kesk\xF6\xF6l", noon: "keskp\xE4eval", morning: "hommikul", afternoon: "p\xE4rastl\xF5unal", evening: "\xF5htul", night: "\xF6\xF6sel" }, wide: { am: "AM", pm: "PM", midnight: "kesk\xF6\xF6l", noon: "keskp\xE4eval", morning: "hommikul", afternoon: "p\xE4rastl\xF5unal", evening: "\xF5htul", night: "\xF6\xF6sel" } };
var y22 = (e30, r32) => Number(e30) + ".";
var k18 = { ordinalNumber: y22, era: c({ values: g17, defaultWidth: "wide" }), quarter: c({ values: w20, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: h13, defaultWidth: "wide", formattingValues: h13, defaultFormattingWidth: "wide" }), day: c({ values: p16, defaultWidth: "wide", formattingValues: p16, defaultFormattingWidth: "wide" }), dayPeriod: c({ values: M20, defaultWidth: "wide", formattingValues: j11, defaultFormattingWidth: "wide" }) };
var x14 = /^\d+\./i;
var D18 = /\d+/i;
var K4 = { narrow: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i, abbreviated: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i, wide: /^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i };
var F20 = { any: [/^e/i, /^(m|p)/i] };
var H15 = { narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234](\.)? kvartal/i };
var V19 = { any: [/1/i, /2/i, /3/i, /4/i] };
var z20 = { narrow: /^[jvmasond]/i, abbreviated: /^(jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets)/i, wide: /^(jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember)/i };
var A9 = { narrow: [/^j/i, /^v/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^v/i, /^mär/i, /^ap/i, /^mai/i, /^juun/i, /^juul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var L20 = { narrow: /^[petknrl]/i, short: /^[petknrl]/i, abbreviated: /^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i, wide: /^(pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev)/i };
var E19 = { any: [/^p/i, /^e/i, /^t/i, /^k/i, /^n/i, /^r/i, /^l/i] };
var N21 = { any: /^(am|pm|keskööl?|keskpäev(al)?|hommik(ul)?|pärastlõunal?|õhtul?|öö(sel)?)/i };
var X20 = { any: { am: /^a/i, pm: /^p/i, midnight: /^keskö/i, noon: /^keskp/i, morning: /hommik/i, afternoon: /pärastlõuna/i, evening: /õhtu/i, night: /öö/i } };
var c19 = { ordinalNumber: h({ matchPattern: x14, parsePattern: D18, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: K4, defaultMatchWidth: "wide", parsePatterns: F20, defaultParseWidth: "any" }), quarter: P({ matchPatterns: H15, defaultMatchWidth: "wide", parsePatterns: V19, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: z20, defaultMatchWidth: "wide", parsePatterns: A9, defaultParseWidth: "any" }), day: P({ matchPatterns: L20, defaultMatchWidth: "wide", parsePatterns: E19, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: N21, defaultMatchWidth: "any", parsePatterns: X20, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/eu.mjs
var c20 = { full: "EEEE, y'ko' MMMM'ren' d'a' y'ren'", long: "y'ko' MMMM'ren' d'a'", medium: "y MMM d", short: "yy/MM/dd" };
var b20 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var f21 = { full: "{{date}} 'tan' {{time}}", long: "{{date}} 'tan' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var d12 = { date: r2({ formats: c20, defaultWidth: "full" }), time: r2({ formats: b20, defaultWidth: "full" }), dateTime: r2({ formats: f21, defaultWidth: "full" }) };
var z21 = { narrow: ["k.a.", "k.o."], abbreviated: ["k.a.", "k.o."], wide: ["kristo aurretik", "kristo ondoren"] };
var w21 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1H", "2H", "3H", "4H"], wide: ["1. hiruhilekoa", "2. hiruhilekoa", "3. hiruhilekoa", "4. hiruhilekoa"] };
var P24 = { narrow: ["u", "o", "m", "a", "m", "e", "u", "a", "i", "u", "a", "a"], abbreviated: ["urt", "ots", "mar", "api", "mai", "eka", "uzt", "abu", "ira", "urr", "aza", "abe"], wide: ["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"] };
var v18 = { narrow: ["i", "a", "a", "a", "o", "o", "l"], short: ["ig", "al", "as", "az", "og", "or", "lr"], abbreviated: ["iga", "ast", "ast", "ast", "ost", "ost", "lar"], wide: ["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"] };
var y23 = { narrow: { am: "a", pm: "p", midnight: "ge", noon: "eg", morning: "goiza", afternoon: "arratsaldea", evening: "arratsaldea", night: "gaua" }, abbreviated: { am: "AM", pm: "PM", midnight: "gauerdia", noon: "eguerdia", morning: "goiza", afternoon: "arratsaldea", evening: "arratsaldea", night: "gaua" }, wide: { am: "a.m.", pm: "p.m.", midnight: "gauerdia", noon: "eguerdia", morning: "goiza", afternoon: "arratsaldea", evening: "arratsaldea", night: "gaua" } };
var M21 = { narrow: { am: "a", pm: "p", midnight: "ge", noon: "eg", morning: "goizean", afternoon: "arratsaldean", evening: "arratsaldean", night: "gauean" }, abbreviated: { am: "AM", pm: "PM", midnight: "gauerdia", noon: "eguerdia", morning: "goizean", afternoon: "arratsaldean", evening: "arratsaldean", night: "gauean" }, wide: { am: "a.m.", pm: "p.m.", midnight: "gauerdia", noon: "eguerdia", morning: "goizean", afternoon: "arratsaldean", evening: "arratsaldean", night: "gauean" } };
var x15 = (a33, t8) => Number(a33) + ".";
var m27 = { ordinalNumber: x15, era: c({ values: z21, defaultWidth: "wide" }), quarter: c({ values: w21, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: P24, defaultWidth: "wide" }), day: c({ values: v18, defaultWidth: "wide" }), dayPeriod: c({ values: y23, defaultWidth: "wide", formattingValues: M21, defaultFormattingWidth: "wide" }) };
var H16 = /^(\d+)(.)?/i;
var D19 = /\d+/i;
var F21 = { narrow: /^(k.a.|k.o.)/i, abbreviated: /^(k.a.|k.o.)/i, wide: /^(kristo aurretik|kristo ondoren)/i };
var L21 = { narrow: [/^k.a./i, /^k.o./i], abbreviated: [/^(k.a.)/i, /^(k.o.)/i], wide: [/^(kristo aurretik)/i, /^(kristo ondoren)/i] };
var V20 = { narrow: /^[1234]/i, abbreviated: /^[1234]H/i, wide: /^[1234](.)? hiruhilekoa/i };
var X21 = { any: [/1/i, /2/i, /3/i, /4/i] };
var E20 = { narrow: /^[uomaei]/i, abbreviated: /^(urt|ots|mar|api|mai|eka|uzt|abu|ira|urr|aza|abe)/i, wide: /^(urtarrila|otsaila|martxoa|apirila|maiatza|ekaina|uztaila|abuztua|iraila|urria|azaroa|abendua)/i };
var N22 = { narrow: [/^u/i, /^o/i, /^m/i, /^a/i, /^m/i, /^e/i, /^u/i, /^a/i, /^i/i, /^u/i, /^a/i, /^a/i], any: [/^urt/i, /^ots/i, /^mar/i, /^api/i, /^mai/i, /^eka/i, /^uzt/i, /^abu/i, /^ira/i, /^urr/i, /^aza/i, /^abe/i] };
var R11 = { narrow: /^[iaol]/i, short: /^(ig|al|as|az|og|or|lr)/i, abbreviated: /^(iga|ast|ast|ast|ost|ost|lar)/i, wide: /^(igandea|astelehena|asteartea|asteazkena|osteguna|ostirala|larunbata)/i };
var S21 = { narrow: [/^i/i, /^a/i, /^a/i, /^a/i, /^o/i, /^o/i, /^l/i], short: [/^ig/i, /^al/i, /^as/i, /^az/i, /^og/i, /^or/i, /^lr/i], abbreviated: [/^iga/i, /^ast/i, /^ast/i, /^ast/i, /^ost/i, /^ost/i, /^lar/i], wide: [/^igandea/i, /^astelehena/i, /^asteartea/i, /^asteazkena/i, /^osteguna/i, /^ostirala/i, /^larunbata/i] };
var T14 = { narrow: /^(a|p|ge|eg|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i, any: /^([ap]\.?\s?m\.?|gauerdia|eguerdia|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i };
var C17 = { narrow: { am: /^a/i, pm: /^p/i, midnight: /^ge/i, noon: /^eg/i, morning: /goiz/i, afternoon: /arratsaldea/i, evening: /arratsaldea/i, night: /gau/i }, any: { am: /^a/i, pm: /^p/i, midnight: /^gauerdia/i, noon: /^eguerdia/i, morning: /goiz/i, afternoon: /arratsaldea/i, evening: /arratsaldea/i, night: /gau/i } };
var g18 = { ordinalNumber: h({ matchPattern: H16, parsePattern: D19, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: F21, defaultMatchWidth: "wide", parsePatterns: L21, defaultParseWidth: "wide" }), quarter: P({ matchPatterns: V20, defaultMatchWidth: "wide", parsePatterns: X21, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: E20, defaultMatchWidth: "wide", parsePatterns: N22, defaultParseWidth: "any" }), day: P({ matchPatterns: R11, defaultMatchWidth: "wide", parsePatterns: S21, defaultParseWidth: "wide" }), dayPeriod: P({ matchPatterns: T14, defaultMatchWidth: "any", parsePatterns: C17, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/fa-IR.mjs
var f22 = { full: "EEEE do MMMM y", long: "do MMMM y", medium: "d MMM y", short: "yyyy/MM/dd" };
var p17 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var g19 = { full: "{{date}} '\u062F\u0631' {{time}}", long: "{{date}} '\u062F\u0631' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m28 = { date: r2({ formats: f22, defaultWidth: "full" }), time: r2({ formats: p17, defaultWidth: "full" }), dateTime: r2({ formats: g19, defaultWidth: "full" }) };
var w22 = { narrow: ["\u0642", "\u0628"], abbreviated: ["\u0642.\u0645.", "\u0628.\u0645."], wide: ["\u0642\u0628\u0644 \u0627\u0632 \u0645\u06CC\u0644\u0627\u062F", "\u0628\u0639\u062F \u0627\u0632 \u0645\u06CC\u0644\u0627\u062F"] };
var P25 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u0633\u200C\u06451", "\u0633\u200C\u06452", "\u0633\u200C\u06453", "\u0633\u200C\u06454"], wide: ["\u0633\u0647\u200C\u0645\u0627\u0647\u0647 1", "\u0633\u0647\u200C\u0645\u0627\u0647\u0647 2", "\u0633\u0647\u200C\u0645\u0627\u0647\u0647 3", "\u0633\u0647\u200C\u0645\u0627\u0647\u0647 4"] };
var y24 = { narrow: ["\u0698", "\u0641", "\u0645", "\u0622", "\u0645", "\u062C", "\u062C", "\u0622", "\u0633", "\u0627", "\u0646", "\u062F"], abbreviated: ["\u0698\u0627\u0646\u0640", "\u0641\u0648\u0631", "\u0645\u0627\u0631\u0633", "\u0622\u067E\u0631", "\u0645\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0640", "\u0622\u06AF\u0648", "\u0633\u067E\u062A\u0640", "\u0627\u06A9\u062A\u0640", "\u0646\u0648\u0627\u0645\u0640", "\u062F\u0633\u0627\u0645\u0640"], wide: ["\u0698\u0627\u0646\u0648\u06CC\u0647", "\u0641\u0648\u0631\u06CC\u0647", "\u0645\u0627\u0631\u0633", "\u0622\u067E\u0631\u06CC\u0644", "\u0645\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u06CC", "\u0622\u06AF\u0648\u0633\u062A", "\u0633\u067E\u062A\u0627\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0628\u0631", "\u0646\u0648\u0627\u0645\u0628\u0631", "\u062F\u0633\u0627\u0645\u0628\u0631"] };
var v19 = { narrow: ["\u06CC", "\u062F", "\u0633", "\u0686", "\u067E", "\u062C", "\u0634"], short: ["1\u0634", "2\u0634", "3\u0634", "4\u0634", "5\u0634", "\u062C", "\u0634"], abbreviated: ["\u06CC\u06A9\u0634\u0646\u0628\u0647", "\u062F\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200C\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067E\u0646\u062C\u0634\u0646\u0628\u0647", "\u062C\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"], wide: ["\u06CC\u06A9\u0634\u0646\u0628\u0647", "\u062F\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200C\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067E\u0646\u062C\u0634\u0646\u0628\u0647", "\u062C\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"] };
var M22 = { narrow: { am: "\u0642", pm: "\u0628", midnight: "\u0646", noon: "\u0638", morning: "\u0635", afternoon: "\u0628.\u0638.", evening: "\u0639", night: "\u0634" }, abbreviated: { am: "\u0642.\u0638.", pm: "\u0628.\u0638.", midnight: "\u0646\u06CC\u0645\u0647\u200C\u0634\u0628", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u062D", afternoon: "\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631", evening: "\u0639\u0635\u0631", night: "\u0634\u0628" }, wide: { am: "\u0642\u0628\u0644\u200C\u0627\u0632\u0638\u0647\u0631", pm: "\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631", midnight: "\u0646\u06CC\u0645\u0647\u200C\u0634\u0628", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u062D", afternoon: "\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631", evening: "\u0639\u0635\u0631", night: "\u0634\u0628" } };
var W17 = { narrow: { am: "\u0642", pm: "\u0628", midnight: "\u0646", noon: "\u0638", morning: "\u0635", afternoon: "\u0628.\u0638.", evening: "\u0639", night: "\u0634" }, abbreviated: { am: "\u0642.\u0638.", pm: "\u0628.\u0638.", midnight: "\u0646\u06CC\u0645\u0647\u200C\u0634\u0628", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u062D", afternoon: "\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631", evening: "\u0639\u0635\u0631", night: "\u0634\u0628" }, wide: { am: "\u0642\u0628\u0644\u200C\u0627\u0632\u0638\u0647\u0631", pm: "\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631", midnight: "\u0646\u06CC\u0645\u0647\u200C\u0634\u0628", noon: "\u0638\u0647\u0631", morning: "\u0635\u0628\u062D", afternoon: "\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631", evening: "\u0639\u0635\u0631", night: "\u0634\u0628" } };
var x16 = (t8, o36) => String(t8);
var l12 = { ordinalNumber: x16, era: c({ values: w22, defaultWidth: "wide" }), quarter: c({ values: P25, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: y24, defaultWidth: "wide" }), day: c({ values: v19, defaultWidth: "wide" }), dayPeriod: c({ values: M22, defaultWidth: "wide", formattingValues: W17, defaultFormattingWidth: "wide" }) };
var k19 = /^(\d+)(th|st|nd|rd)?/i;
var z22 = /\d+/i;
var F22 = { narrow: /^(ق|ب)/i, abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?د\.?\s?م\.?|م\.?\s?|د\.?\s?م\.?)/i, wide: /^(قبل از میلاد|قبل از دوران مشترک|میلادی|دوران مشترک|بعد از میلاد)/i };
var V21 = { any: [/^قبل/i, /^بعد/i] };
var X22 = { narrow: /^[1234]/i, abbreviated: /^س‌م[1234]/i, wide: /^سه‌ماهه [1234]/i };
var L22 = { any: [/1/i, /2/i, /3/i, /4/i] };
var E21 = { narrow: /^[جژفمآاماسند]/i, abbreviated: /^(جنو|ژانـ|ژانویه|فوریه|فور|مارس|آوریل|آپر|مه|می|ژوئن|جون|جول|جولـ|ژوئیه|اوت|آگو|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نوامـ|دسامبر|دسامـ|دسم)/i, wide: /^(ژانویه|جنوری|فبروری|فوریه|مارچ|مارس|آپریل|اپریل|ایپریل|آوریل|مه|می|ژوئن|جون|جولای|ژوئیه|آگست|اگست|آگوست|اوت|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نومبر|دسامبر|دسمبر)/i };
var R12 = { narrow: [/^(ژ|ج)/i, /^ف/i, /^م/i, /^(آ|ا)/i, /^م/i, /^(ژ|ج)/i, /^(ج|ژ)/i, /^(آ|ا)/i, /^س/i, /^ا/i, /^ن/i, /^د/i], any: [/^ژا/i, /^ف/i, /^ما/i, /^آپ/i, /^(می|مه)/i, /^(ژوئن|جون)/i, /^(ژوئی|جول)/i, /^(اوت|آگ)/i, /^س/i, /^(اوک|اک)/i, /^ن/i, /^د/i] };
var S22 = { narrow: /^[شیدسچپج]/i, short: /^(ش|ج|1ش|2ش|3ش|4ش|5ش)/i, abbreviated: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i, wide: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i };
var C18 = { narrow: [/^ی/i, /^دو/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i], any: [/^(ی|1ش|یکشنبه)/i, /^(د|2ش|دوشنبه)/i, /^(س|3ش|سه‌شنبه)/i, /^(چ|4ش|چهارشنبه)/i, /^(پ|5ش|پنجشنبه)/i, /^(ج|جمعه)/i, /^(ش|شنبه)/i] };
var N23 = { narrow: /^(ب|ق|ن|ظ|ص|ب.ظ.|ع|ش)/i, abbreviated: /^(ق.ظ.|ب.ظ.|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i, wide: /^(قبل‌ازظهر|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i };
var T15 = { any: { am: /^(ق|ق.ظ.|قبل‌ازظهر)/i, pm: /^(ب|ب.ظ.|بعدازظهر)/i, midnight: /^(‌نیمه‌شب|ن)/i, noon: /^(ظ|ظهر)/i, morning: /(ص|صبح)/i, afternoon: /(ب|ب.ظ.|بعدازظهر)/i, evening: /(ع|عصر)/i, night: /(ش|شب)/i } };
var u18 = { ordinalNumber: h({ matchPattern: k19, parsePattern: z22, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: F22, defaultMatchWidth: "wide", parsePatterns: V21, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X22, defaultMatchWidth: "wide", parsePatterns: L22, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: E21, defaultMatchWidth: "wide", parsePatterns: R12, defaultParseWidth: "any" }), day: P({ matchPatterns: S22, defaultMatchWidth: "wide", parsePatterns: C18, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: N23, defaultMatchWidth: "wide", parsePatterns: T15, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/fi.mjs
var g20 = { full: "eeee d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "d.M.y" };
var W18 = { full: "HH.mm.ss zzzz", long: "HH.mm.ss z", medium: "HH.mm.ss", short: "HH.mm" };
var T16 = { full: "{{date}} 'klo' {{time}}", long: "{{date}} 'klo' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var v20 = { date: r2({ formats: g20, defaultWidth: "full" }), time: r2({ formats: W18, defaultWidth: "full" }), dateTime: r2({ formats: T16, defaultWidth: "full" }) };
var x17 = { narrow: ["eaa.", "jaa."], abbreviated: ["eaa.", "jaa."], wide: ["ennen ajanlaskun alkua", "j\xE4lkeen ajanlaskun alun"] };
var H17 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. kvartaali", "2. kvartaali", "3. kvartaali", "4. kvartaali"] };
var m29 = { narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"], abbreviated: ["tammi", "helmi", "maalis", "huhti", "touko", "kes\xE4", "hein\xE4", "elo", "syys", "loka", "marras", "joulu"], wide: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kes\xE4kuu", "hein\xE4kuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"] };
var D20 = { narrow: m29.narrow, abbreviated: m29.abbreviated, wide: ["tammikuuta", "helmikuuta", "maaliskuuta", "huhtikuuta", "toukokuuta", "kes\xE4kuuta", "hein\xE4kuuta", "elokuuta", "syyskuuta", "lokakuuta", "marraskuuta", "joulukuuta"] };
var r11 = { narrow: ["S", "M", "T", "K", "T", "P", "L"], short: ["su", "ma", "ti", "ke", "to", "pe", "la"], abbreviated: ["sunn.", "maan.", "tiis.", "kesk.", "torst.", "perj.", "la"], wide: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"] };
var F23 = { narrow: r11.narrow, short: r11.short, abbreviated: r11.abbreviated, wide: ["sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina"] };
var V22 = { narrow: { am: "ap", pm: "ip", midnight: "keskiy\xF6", noon: "keskip\xE4iv\xE4", morning: "ap", afternoon: "ip", evening: "illalla", night: "y\xF6ll\xE4" }, abbreviated: { am: "ap", pm: "ip", midnight: "keskiy\xF6", noon: "keskip\xE4iv\xE4", morning: "ap", afternoon: "ip", evening: "illalla", night: "y\xF6ll\xE4" }, wide: { am: "ap", pm: "ip", midnight: "keskiy\xF6ll\xE4", noon: "keskip\xE4iv\xE4ll\xE4", morning: "aamup\xE4iv\xE4ll\xE4", afternoon: "iltap\xE4iv\xE4ll\xE4", evening: "illalla", night: "y\xF6ll\xE4" } };
var z23 = (t8, n19) => Number(t8) + ".";
var b21 = { ordinalNumber: z23, era: c({ values: x17, defaultWidth: "wide" }), quarter: c({ values: H17, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: m29, defaultWidth: "wide", formattingValues: D20, defaultFormattingWidth: "wide" }), day: c({ values: r11, defaultWidth: "wide", formattingValues: F23, defaultFormattingWidth: "wide" }), dayPeriod: c({ values: V22, defaultWidth: "wide" }) };
var S23 = /^(\d+)(\.)/i;
var X23 = /\d+/i;
var Q4 = { narrow: /^(e|j)/i, abbreviated: /^(eaa.|jaa.)/i, wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i };
var N24 = { any: [/^e/i, /^j/i] };
var Y8 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]\.? kvartaali/i };
var _3 = { any: [/1/i, /2/i, /3/i, /4/i] };
var q8 = { narrow: /^[thmkeslj]/i, abbreviated: /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i, wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i };
var C19 = { narrow: [/^t/i, /^h/i, /^m/i, /^h/i, /^t/i, /^k/i, /^h/i, /^e/i, /^s/i, /^l/i, /^m/i, /^j/i], any: [/^ta/i, /^hel/i, /^maa/i, /^hu/i, /^to/i, /^k/i, /^hei/i, /^e/i, /^s/i, /^l/i, /^mar/i, /^j/i] };
var R13 = { narrow: /^[smtkpl]/i, short: /^(su|ma|ti|ke|to|pe|la)/i, abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i, wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i };
var E22 = { narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i], any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i] };
var O8 = { narrow: /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i, any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i };
var K5 = { any: { am: /^ap/i, pm: /^ip/i, midnight: /^keskiyö/i, noon: /^keskipäivä/i, morning: /aamupäivällä/i, afternoon: /iltapäivällä/i, evening: /illalla/i, night: /yöllä/i } };
var w23 = { ordinalNumber: h({ matchPattern: S23, parsePattern: X23, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: Q4, defaultMatchWidth: "wide", parsePatterns: N24, defaultParseWidth: "any" }), quarter: P({ matchPatterns: Y8, defaultMatchWidth: "wide", parsePatterns: _3, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: q8, defaultMatchWidth: "wide", parsePatterns: C19, defaultParseWidth: "any" }), day: P({ matchPatterns: R13, defaultMatchWidth: "wide", parsePatterns: E22, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: O8, defaultMatchWidth: "any", parsePatterns: K5, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/fr/_lib/localize.mjs
var o20 = { narrow: ["av. J.-C", "ap. J.-C"], abbreviated: ["av. J.-C", "ap. J.-C"], wide: ["avant J\xE9sus-Christ", "apr\xE8s J\xE9sus-Christ"] };
var d13 = { narrow: ["T1", "T2", "T3", "T4"], abbreviated: ["1er trim.", "2\xE8me trim.", "3\xE8me trim.", "4\xE8me trim."], wide: ["1er trimestre", "2\xE8me trimestre", "3\xE8me trimestre", "4\xE8me trimestre"] };
var s14 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["janv.", "f\xE9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\xFBt", "sept.", "oct.", "nov.", "d\xE9c."], wide: ["janvier", "f\xE9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xFBt", "septembre", "octobre", "novembre", "d\xE9cembre"] };
var u19 = { narrow: ["D", "L", "M", "M", "J", "V", "S"], short: ["di", "lu", "ma", "me", "je", "ve", "sa"], abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"] };
var l13 = { narrow: { am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "mat.", afternoon: "ap.m.", evening: "soir", night: "mat." }, abbreviated: { am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "matin", afternoon: "apr\xE8s-midi", evening: "soir", night: "matin" }, wide: { am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "du matin", afternoon: "de l\u2019apr\xE8s-midi", evening: "du soir", night: "du matin" } };
var v21 = (n19, i19) => {
  let a33 = Number(n19), e30 = i19?.unit;
  if (a33 === 0) return "0";
  let m72 = ["year", "week", "hour", "minute", "second"], t8;
  return a33 === 1 ? t8 = e30 && m72.includes(e30) ? "\xE8re" : "er" : t8 = "\xE8me", a33 + t8;
};
var c21 = ["MMM", "MMMM"];
var M23 = { preprocessor: (n19, i19) => n19.getDate() === 1 || !i19.some((e30) => e30.isToken && c21.includes(e30.value)) ? i19 : i19.map((e30) => e30.isToken && e30.value === "do" ? { isToken: true, value: "d" } : e30), ordinalNumber: v21, era: c({ values: o20, defaultWidth: "wide" }), quarter: c({ values: d13, defaultWidth: "wide", argumentCallback: (n19) => n19 - 1 }), month: c({ values: s14, defaultWidth: "wide" }), day: c({ values: u19, defaultWidth: "wide" }), dayPeriod: c({ values: l13, defaultWidth: "wide" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/fr/_lib/match.mjs
var e14 = /^(\d+)(ième|ère|ème|er|e)?/i;
var r12 = /\d+/i;
var n7 = { narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i, abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i, wide: /^(avant Jésus-Christ|après Jésus-Christ)/i };
var s15 = { any: [/^av/i, /^ap/i] };
var d14 = { narrow: /^T?[1234]/i, abbreviated: /^[1234](er|ème|e)? trim\.?/i, wide: /^[1234](er|ème|e)? trimestre/i };
var m30 = { any: [/1/i, /2/i, /3/i, /4/i] };
var o21 = { narrow: /^[jfmasond]/i, abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i, wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i };
var c22 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var u20 = { narrow: /^[lmjvsd]/i, short: /^(di|lu|ma|me|je|ve|sa)/i, abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i, wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i };
var h14 = { narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i], any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i] };
var l14 = { narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i, any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i };
var P26 = { any: { am: /^a/i, pm: /^p/i, midnight: /^min/i, noon: /^mid/i, morning: /mat/i, afternoon: /ap/i, evening: /soir/i, night: /nuit/i } };
var j12 = { ordinalNumber: h({ matchPattern: e14, parsePattern: r12, valueCallback: (i19) => parseInt(i19) }), era: P({ matchPatterns: n7, defaultMatchWidth: "wide", parsePatterns: s15, defaultParseWidth: "any" }), quarter: P({ matchPatterns: d14, defaultMatchWidth: "wide", parsePatterns: m30, defaultParseWidth: "any", valueCallback: (i19) => i19 + 1 }), month: P({ matchPatterns: o21, defaultMatchWidth: "wide", parsePatterns: c22, defaultParseWidth: "any" }), day: P({ matchPatterns: u20, defaultMatchWidth: "wide", parsePatterns: h14, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: l14, defaultMatchWidth: "any", parsePatterns: P26, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/fr-CA.mjs
var o22 = { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "yy-MM-dd" };
var e15 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var a14 = { full: "{{date}} '\xE0' {{time}}", long: "{{date}} '\xE0' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m31 = { date: r2({ formats: o22, defaultWidth: "full" }), time: r2({ formats: e15, defaultWidth: "full" }), dateTime: r2({ formats: a14, defaultWidth: "full" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/fr-CH.mjs
var a15 = { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd.MM.y" };
var r13 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var i7 = { full: "{{date}} '\xE0' {{time}}", long: "{{date}} '\xE0' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var e16 = { date: r2({ formats: a15, defaultWidth: "full" }), time: r2({ formats: r13, defaultWidth: "full" }), dateTime: r2({ formats: i7, defaultWidth: "full" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/fr.mjs
var o23 = { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y" };
var e17 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var a16 = { full: "{{date}} '\xE0' {{time}}", long: "{{date}} '\xE0' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m32 = { date: r2({ formats: o23, defaultWidth: "full" }), time: r2({ formats: e17, defaultWidth: "full" }), dateTime: r2({ formats: a16, defaultWidth: "full" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/fy.mjs
var h15 = { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd-MM-y" };
var w24 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var p18 = { full: "{{date}} 'om' {{time}}", long: "{{date}} 'om' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var d15 = { date: r2({ formats: h15, defaultWidth: "full" }), time: r2({ formats: w24, defaultWidth: "full" }), dateTime: r2({ formats: p18, defaultWidth: "full" }) };
var j13 = { narrow: ["f.K.", "n.K."], abbreviated: ["f.Kr.", "n.Kr."], wide: ["foar Kristus", "nei Kristus"] };
var P27 = { narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1e fearnsjier", "2e fearnsjier", "3e fearnsjier", "4e fearnsjier"] };
var y25 = { narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mai.", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "des."], wide: ["jannewaris", "febrewaris", "maart", "april", "maaie", "juny", "july", "augustus", "septimber", "oktober", "novimber", "desimber"] };
var g21 = { narrow: ["s", "m", "t", "w", "t", "f", "s"], short: ["si", "mo", "ti", "wo", "to", "fr", "so"], abbreviated: ["snein", "moa", "tii", "woa", "ton", "fre", "sneon"], wide: ["snein", "moandei", "tiisdei", "woansdei", "tongersdei", "freed", "sneon"] };
var M24 = { narrow: { am: "AM", pm: "PM", midnight: "middernacht", noon: "middei", morning: "moarns", afternoon: "middeis", evening: "j\xFBns", night: "nachts" }, abbreviated: { am: "AM", pm: "PM", midnight: "middernacht", noon: "middei", morning: "moarns", afternoon: "middeis", evening: "j\xFBns", night: "nachts" }, wide: { am: "AM", pm: "PM", midnight: "middernacht", noon: "middei", morning: "moarns", afternoon: "middeis", evening: "j\xFBns", night: "nachts" } };
var v22 = (e30, i19) => Number(e30) + "e";
var c23 = { ordinalNumber: v22, era: c({ values: j13, defaultWidth: "wide" }), quarter: c({ values: P27, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: y25, defaultWidth: "wide" }), day: c({ values: g21, defaultWidth: "wide" }), dayPeriod: c({ values: M24, defaultWidth: "wide" }) };
var W19 = /^(\d+)e?/i;
var x18 = /\d+/i;
var K6 = { narrow: /^([fn]\.? ?K\.?)/, abbreviated: /^([fn]\. ?Kr\.?)/, wide: /^((foar|nei) Kristus)/ };
var D21 = { any: [/^f/, /^n/] };
var H18 = { narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234]e fearnsjier/i };
var z24 = { any: [/1/i, /2/i, /3/i, /4/i] };
var F24 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan.|feb.|mrt.|apr.|mai.|jun.|jul.|aug.|sep.|okt.|nov.|des.)/i, wide: /^(jannewaris|febrewaris|maart|april|maaie|juny|july|augustus|septimber|oktober|novimber|desimber)/i };
var X24 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mai/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^des/i] };
var L23 = { narrow: /^[smtwf]/i, short: /^(si|mo|ti|wo|to|fr|so)/i, abbreviated: /^(snein|moa|tii|woa|ton|fre|sneon)/i, wide: /^(snein|moandei|tiisdei|woansdei|tongersdei|freed|sneon)/i };
var E23 = { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^sn/i, /^mo/i, /^ti/i, /^wo/i, /^to/i, /^fr/i, /^sn/i] };
var V23 = { any: /^(am|pm|middernacht|middeis|moarns|middei|jûns|nachts)/i };
var N25 = { any: { am: /^am/i, pm: /^pm/i, midnight: /^middernacht/i, noon: /^middei/i, morning: /moarns/i, afternoon: /^middeis/i, evening: /jûns/i, night: /nachts/i } };
var f23 = { ordinalNumber: h({ matchPattern: W19, parsePattern: x18, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: K6, defaultMatchWidth: "wide", parsePatterns: D21, defaultParseWidth: "any" }), quarter: P({ matchPatterns: H18, defaultMatchWidth: "wide", parsePatterns: z24, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: F24, defaultMatchWidth: "wide", parsePatterns: X24, defaultParseWidth: "any" }), day: P({ matchPatterns: L23, defaultMatchWidth: "wide", parsePatterns: E23, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: V23, defaultMatchWidth: "any", parsePatterns: N25, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/gd.mjs
var f24 = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" };
var g22 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var b22 = { full: "{{date}} 'aig' {{time}}", long: "{{date}} 'aig' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m33 = { date: r2({ formats: f24, defaultWidth: "full" }), time: r2({ formats: g22, defaultWidth: "full" }), dateTime: r2({ formats: b22, defaultWidth: "full" }) };
var w25 = { narrow: ["R", "A"], abbreviated: ["RC", "AD"], wide: ["ro Chr\xECosta", "anno domini"] };
var y26 = { narrow: ["1", "2", "3", "4"], abbreviated: ["C1", "C2", "C3", "C4"], wide: ["a' chiad chairteal", "an d\xE0rna cairteal", "an treas cairteal", "an ceathramh cairteal"] };
var P28 = { narrow: ["F", "G", "M", "G", "C", "\xD2", "I", "L", "S", "D", "S", "D"], abbreviated: ["Faoi", "Gear", "M\xE0rt", "Gibl", "C\xE8it", "\xD2gmh", "Iuch", "L\xF9n", "Sult", "D\xE0mh", "Samh", "D\xF9bh"], wide: ["Am Faoilleach", "An Gearran", "Am M\xE0rt", "An Giblean", "An C\xE8itean", "An t-\xD2gmhios", "An t-Iuchar", "An L\xF9nastal", "An t-Sultain", "An D\xE0mhair", "An t-Samhain", "An D\xF9bhlachd"] };
var D22 = { narrow: ["D", "L", "M", "C", "A", "H", "S"], short: ["D\xF2", "Lu", "M\xE0", "Ci", "Ar", "Ha", "Sa"], abbreviated: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], wide: ["Did\xF2mhnaich", "Diluain", "Dim\xE0irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"] };
var M25 = { narrow: { am: "m", pm: "f", midnight: "m.o.", noon: "m.l.", morning: "madainn", afternoon: "feasgar", evening: "feasgar", night: "oidhche" }, abbreviated: { am: "M.", pm: "F.", midnight: "meadhan oidhche", noon: "meadhan l\xE0", morning: "madainn", afternoon: "feasgar", evening: "feasgar", night: "oidhche" }, wide: { am: "m.", pm: "f.", midnight: "meadhan oidhche", noon: "meadhan l\xE0", morning: "madainn", afternoon: "feasgar", evening: "feasgar", night: "oidhche" } };
var v23 = { narrow: { am: "m", pm: "f", midnight: "m.o.", noon: "m.l.", morning: "sa mhadainn", afternoon: "feasgar", evening: "feasgar", night: "air an oidhche" }, abbreviated: { am: "M.", pm: "F.", midnight: "meadhan oidhche", noon: "meadhan l\xE0", morning: "sa mhadainn", afternoon: "feasgar", evening: "feasgar", night: "air an oidhche" }, wide: { am: "m.", pm: "f.", midnight: "meadhan oidhche", noon: "meadhan l\xE0", morning: "sa mhadainn", afternoon: "feasgar", evening: "feasgar", night: "air an oidhche" } };
var W20 = (a33) => {
  let e30 = Number(a33), i19 = e30 % 100;
  if (i19 > 20 || i19 < 10) switch (i19 % 10) {
    case 1:
      return e30 + "d";
    case 2:
      return e30 + "na";
  }
  return i19 === 12 ? e30 + "na" : e30 + "mh";
};
var c24 = { ordinalNumber: W20, era: c({ values: w25, defaultWidth: "wide" }), quarter: c({ values: y26, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: P28, defaultWidth: "wide" }), day: c({ values: D22, defaultWidth: "wide" }), dayPeriod: c({ values: M25, defaultWidth: "wide", formattingValues: v23, defaultFormattingWidth: "wide" }) };
var x19 = /^(\d+)(d|na|tr|mh)?/i;
var C20 = /\d+/i;
var S24 = { narrow: /^(r|a)/i, abbreviated: /^(r\.?\s?c\.?|r\.?\s?a\.?\s?c\.?|a\.?\s?d\.?|a\.?\s?c\.?)/i, wide: /^(ro Chrìosta|ron aois choitchinn|anno domini|aois choitcheann)/i };
var F25 = { any: [/^b/i, /^(a|c)/i] };
var L24 = { narrow: /^[1234]/i, abbreviated: /^c[1234]/i, wide: /^[1234](cd|na|tr|mh)? cairteal/i };
var k20 = { any: [/1/i, /2/i, /3/i, /4/i] };
var z25 = { narrow: /^[fgmcòilsd]/i, abbreviated: /^(faoi|gear|màrt|gibl|cèit|ògmh|iuch|lùn|sult|dàmh|samh|dùbh)/i, wide: /^(am faoilleach|an gearran|am màrt|an giblean|an cèitean|an t-Ògmhios|an t-Iuchar|an lùnastal|an t-Sultain|an dàmhair|an t-Samhain|an dùbhlachd)/i };
var V24 = { narrow: [/^f/i, /^g/i, /^m/i, /^g/i, /^c/i, /^ò/i, /^i/i, /^l/i, /^s/i, /^d/i, /^s/i, /^d/i], any: [/^fa/i, /^ge/i, /^mà/i, /^gi/i, /^c/i, /^ò/i, /^i/i, /^l/i, /^su/i, /^d/i, /^sa/i, /^d/i] };
var X25 = { narrow: /^[dlmcahs]/i, short: /^(dò|lu|mà|ci|ar|ha|sa)/i, abbreviated: /^(did|dil|dim|dic|dia|dih|dis)/i, wide: /^(didòmhnaich|diluain|dimàirt|diciadain|diardaoin|dihaoine|disathairne)/i };
var E24 = { narrow: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i], any: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i] };
var G6 = { narrow: /^(a|p|mi|n|(san|aig) (madainn|feasgar|feasgar|oidhche))/i, any: /^([ap]\.?\s?m\.?|meadhan oidhche|meadhan là|(san|aig) (madainn|feasgar|feasgar|oidhche))/i };
var R14 = { any: { am: /^m/i, pm: /^f/i, midnight: /^meadhan oidhche/i, noon: /^meadhan là/i, morning: /sa mhadainn/i, afternoon: /feasgar/i, evening: /feasgar/i, night: /air an oidhche/i } };
var l15 = { ordinalNumber: h({ matchPattern: x19, parsePattern: C20, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: S24, defaultMatchWidth: "wide", parsePatterns: F25, defaultParseWidth: "any" }), quarter: P({ matchPatterns: L24, defaultMatchWidth: "wide", parsePatterns: k20, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: z25, defaultMatchWidth: "wide", parsePatterns: V24, defaultParseWidth: "any" }), day: P({ matchPatterns: X25, defaultMatchWidth: "wide", parsePatterns: E24, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: G6, defaultMatchWidth: "any", parsePatterns: R14, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/gl.mjs
var f25 = { full: "EEEE, d 'de' MMMM y", long: "d 'de' MMMM y", medium: "d MMM y", short: "dd/MM/y" };
var p19 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var b23 = { full: "{{date}} '\xE1s' {{time}}", long: "{{date}} '\xE1s' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m34 = { date: r2({ formats: f25, defaultWidth: "full" }), time: r2({ formats: p19, defaultWidth: "full" }), dateTime: r2({ formats: b23, defaultWidth: "full" }) };
var x20 = { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "despois de cristo"] };
var P29 = { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"] };
var w26 = { narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["xan", "feb", "mar", "abr", "mai", "xun", "xul", "ago", "set", "out", "nov", "dec"], wide: ["xaneiro", "febreiro", "marzo", "abril", "maio", "xu\xF1o", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"] };
var y27 = { narrow: ["d", "l", "m", "m", "j", "v", "s"], short: ["do", "lu", "ma", "me", "xo", "ve", "sa"], abbreviated: ["dom", "lun", "mar", "mer", "xov", "ven", "sab"], wide: ["domingo", "luns", "martes", "m\xE9rcores", "xoves", "venres", "s\xE1bado"] };
var M26 = { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "ma\xF1\xE1", afternoon: "tarde", evening: "tarde", night: "noite" }, abbreviated: { am: "AM", pm: "PM", midnight: "medianoite", noon: "mediod\xEDa", morning: "ma\xF1\xE1", afternoon: "tarde", evening: "tardi\xF1a", night: "noite" }, wide: { am: "a.m.", pm: "p.m.", midnight: "medianoite", noon: "mediod\xEDa", morning: "ma\xF1\xE1", afternoon: "tarde", evening: "tardi\xF1a", night: "noite" } };
var W21 = { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "da ma\xF1\xE1", afternoon: "da tarde", evening: "da tardi\xF1a", night: "da noite" }, abbreviated: { am: "AM", pm: "PM", midnight: "medianoite", noon: "mediod\xEDa", morning: "da ma\xF1\xE1", afternoon: "da tarde", evening: "da tardi\xF1a", night: "da noite" }, wide: { am: "a.m.", pm: "p.m.", midnight: "medianoite", noon: "mediod\xEDa", morning: "da ma\xF1\xE1", afternoon: "da tarde", evening: "da tardi\xF1a", night: "da noite" } };
var D23 = (e30, t8) => Number(e30) + "\xBA";
var c25 = { ordinalNumber: D23, era: c({ values: x20, defaultWidth: "wide" }), quarter: c({ values: P29, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: w26, defaultWidth: "wide" }), day: c({ values: y27, defaultWidth: "wide" }), dayPeriod: c({ values: M26, defaultWidth: "wide", formattingValues: W21, defaultFormattingWidth: "wide" }) };
var z26 = /^(\d+)(º)?/i;
var H19 = /\d+/i;
var T17 = { narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i, wide: /^(antes de cristo|antes da era com[uú]n|despois de cristo|era com[uú]n)/i };
var F26 = { any: [/^ac/i, /^dc/i], wide: [/^(antes de cristo|antes da era com[uú]n)/i, /^(despois de cristo|era com[uú]n)/i] };
var L25 = { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º)? trimestre/i };
var C21 = { any: [/1/i, /2/i, /3/i, /4/i] };
var V25 = { narrow: /^[xfmasond]/i, abbreviated: /^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i, wide: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i };
var X26 = { narrow: [/^x/i, /^f/i, /^m/i, /^a/i, /^m/i, /^x/i, /^x/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xun/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i] };
var E25 = { narrow: /^[dlmxvs]/i, short: /^(do|lu|ma|me|xo|ve|sa)/i, abbreviated: /^(dom|lun|mar|mer|xov|ven|sab)/i, wide: /^(domingo|luns|martes|m[eé]rcores|xoves|venres|s[áa]bado)/i };
var A10 = { narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^x/i, /^v/i, /^s/i], any: [/^do/i, /^lu/i, /^ma/i, /^me/i, /^xo/i, /^ve/i, /^sa/i] };
var N26 = { narrow: /^(a|p|mn|md|(da|[aá]s) (mañ[aá]|tarde|noite))/i, any: /^([ap]\.?\s?m\.?|medianoite|mediod[ií]a|(da|[aá]s) (mañ[aá]|tarde|noite))/i };
var R15 = { any: { am: /^a/i, pm: /^p/i, midnight: /^mn/i, noon: /^md/i, morning: /mañ[aá]/i, afternoon: /tarde/i, evening: /tardiña/i, night: /noite/i } };
var l16 = { ordinalNumber: h({ matchPattern: z26, parsePattern: H19, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: T17, defaultMatchWidth: "wide", parsePatterns: F26, defaultParseWidth: "any" }), quarter: P({ matchPatterns: L25, defaultMatchWidth: "wide", parsePatterns: C21, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: V25, defaultMatchWidth: "wide", parsePatterns: X26, defaultParseWidth: "any" }), day: P({ matchPatterns: E25, defaultMatchWidth: "wide", parsePatterns: A10, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: N26, defaultMatchWidth: "any", parsePatterns: R15, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/gu.mjs
var f26 = { full: "EEEE, d MMMM, y", long: "d MMMM, y", medium: "d MMM, y", short: "d/M/yy" };
var p20 = { full: "hh:mm:ss a zzzz", long: "hh:mm:ss a z", medium: "hh:mm:ss a", short: "hh:mm a" };
var g23 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m35 = { date: r2({ formats: f26, defaultWidth: "full" }), time: r2({ formats: p20, defaultWidth: "full" }), dateTime: r2({ formats: g23, defaultWidth: "full" }) };
var M27 = { narrow: ["\u0A88\u0AB8\u0AAA\u0AC2", "\u0A88\u0AB8"], abbreviated: ["\u0A88.\u0AB8.\u0AAA\u0AC2\u0AB0\u0ACD\u0AB5\u0AC7", "\u0A88.\u0AB8."], wide: ["\u0A88\u0AB8\u0AB5\u0AC0\u0AB8\u0AA8 \u0AAA\u0AC2\u0AB0\u0ACD\u0AB5\u0AC7", "\u0A88\u0AB8\u0AB5\u0AC0\u0AB8\u0AA8"] };
var b24 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1\u0AB2\u0ACB \u0AA4\u0ACD\u0AB0\u0ABF\u0AAE\u0ABE\u0AB8", "2\u0A9C\u0ACB \u0AA4\u0ACD\u0AB0\u0ABF\u0AAE\u0ABE\u0AB8", "3\u0A9C\u0ACB \u0AA4\u0ACD\u0AB0\u0ABF\u0AAE\u0ABE\u0AB8", "4\u0AA5\u0ACB \u0AA4\u0ACD\u0AB0\u0ABF\u0AAE\u0ABE\u0AB8"] };
var w27 = { narrow: ["\u0A9C\u0ABE", "\u0AAB\u0AC7", "\u0AAE\u0ABE", "\u0A8F", "\u0AAE\u0AC7", "\u0A9C\u0AC2", "\u0A9C\u0AC1", "\u0A93", "\u0AB8", "\u0A93", "\u0AA8", "\u0AA1\u0ABF"], abbreviated: ["\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1", "\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1", "\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A", "\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF\u0AB2", "\u0AAE\u0AC7", "\u0A9C\u0AC2\u0AA8", "\u0A9C\u0AC1\u0AB2\u0ABE\u0A88", "\u0A91\u0A97\u0AB8\u0ACD\u0A9F", "\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7", "\u0A93\u0A95\u0ACD\u0A9F\u0ACB", "\u0AA8\u0AB5\u0AC7", "\u0AA1\u0ABF\u0AB8\u0AC7"], wide: ["\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1\u0A86\u0AB0\u0AC0", "\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1\u0A86\u0AB0\u0AC0", "\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A", "\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF\u0AB2", "\u0AAE\u0AC7", "\u0A9C\u0AC2\u0AA8", "\u0A9C\u0AC1\u0AB2\u0ABE\u0A87", "\u0A93\u0A97\u0AB8\u0ACD\u0A9F", "\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0", "\u0A93\u0A95\u0ACD\u0A9F\u0ACB\u0AAC\u0AB0", "\u0AA8\u0AB5\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0", "\u0AA1\u0ABF\u0AB8\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0"] };
var y28 = { narrow: ["\u0AB0", "\u0AB8\u0ACB", "\u0AAE\u0A82", "\u0AAC\u0AC1", "\u0A97\u0AC1", "\u0AB6\u0AC1", "\u0AB6"], short: ["\u0AB0", "\u0AB8\u0ACB", "\u0AAE\u0A82", "\u0AAC\u0AC1", "\u0A97\u0AC1", "\u0AB6\u0AC1", "\u0AB6"], abbreviated: ["\u0AB0\u0AB5\u0ABF", "\u0AB8\u0ACB\u0AAE", "\u0AAE\u0A82\u0A97\u0AB3", "\u0AAC\u0AC1\u0AA7", "\u0A97\u0AC1\u0AB0\u0AC1", "\u0AB6\u0AC1\u0A95\u0ACD\u0AB0", "\u0AB6\u0AA8\u0ABF"], wide: ["\u0AB0\u0AB5\u0ABF\u0AB5\u0ABE\u0AB0", "\u0AB8\u0ACB\u0AAE\u0AB5\u0ABE\u0AB0", "\u0AAE\u0A82\u0A97\u0AB3\u0AB5\u0ABE\u0AB0", "\u0AAC\u0AC1\u0AA7\u0AB5\u0ABE\u0AB0", "\u0A97\u0AC1\u0AB0\u0AC1\u0AB5\u0ABE\u0AB0", "\u0AB6\u0AC1\u0A95\u0ACD\u0AB0\u0AB5\u0ABE\u0AB0", "\u0AB6\u0AA8\u0ABF\u0AB5\u0ABE\u0AB0"] };
var v24 = { narrow: { am: "AM", pm: "PM", midnight: "\u0AAE.\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0ABF", noon: "\u0AAC.", morning: "\u0AB8\u0AB5\u0ABE\u0AB0\u0AC7", afternoon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7", evening: "\u0AB8\u0ABE\u0A82\u0A9C\u0AC7", night: "\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC7" }, abbreviated: { am: "AM", pm: "PM", midnight: "\u200B\u0AAE\u0AA7\u0ACD\u0AAF\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0ABF", noon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7", morning: "\u0AB8\u0AB5\u0ABE\u0AB0\u0AC7", afternoon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7", evening: "\u0AB8\u0ABE\u0A82\u0A9C\u0AC7", night: "\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC7" }, wide: { am: "AM", pm: "PM", midnight: "\u200B\u0AAE\u0AA7\u0ACD\u0AAF\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0ABF", noon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7", morning: "\u0AB8\u0AB5\u0ABE\u0AB0\u0AC7", afternoon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7", evening: "\u0AB8\u0ABE\u0A82\u0A9C\u0AC7", night: "\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC7" } };
var W22 = { narrow: { am: "AM", pm: "PM", midnight: "\u0AAE.\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0ABF", noon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7", morning: "\u0AB8\u0AB5\u0ABE\u0AB0\u0AC7", afternoon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7", evening: "\u0AB8\u0ABE\u0A82\u0A9C\u0AC7", night: "\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC7" }, abbreviated: { am: "AM", pm: "PM", midnight: "\u0AAE\u0AA7\u0ACD\u0AAF\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0ABF", noon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7", morning: "\u0AB8\u0AB5\u0ABE\u0AB0\u0AC7", afternoon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7", evening: "\u0AB8\u0ABE\u0A82\u0A9C\u0AC7", night: "\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC7" }, wide: { am: "AM", pm: "PM", midnight: "\u200B\u0AAE\u0AA7\u0ACD\u0AAF\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0ABF", noon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7", morning: "\u0AB8\u0AB5\u0ABE\u0AB0\u0AC7", afternoon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7", evening: "\u0AB8\u0ABE\u0A82\u0A9C\u0AC7", night: "\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC7" } };
var x21 = (t8, o36) => String(t8);
var u22 = { ordinalNumber: x21, era: c({ values: M27, defaultWidth: "wide" }), quarter: c({ values: b24, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: w27, defaultWidth: "wide" }), day: c({ values: y28, defaultWidth: "wide" }), dayPeriod: c({ values: v24, defaultWidth: "wide", formattingValues: W22, defaultFormattingWidth: "wide" }) };
var k21 = /^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i;
var z27 = /\d+/i;
var F27 = { narrow: /^(ઈસપૂ|ઈસ)/i, abbreviated: /^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i, wide: /^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i };
var V26 = { any: [/^ઈસપૂ/i, /^ઈસ/i] };
var X27 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](લો|જો|થો)? ત્રિમાસ/i };
var A11 = { any: [/1/i, /2/i, /3/i, /4/i] };
var L26 = { narrow: /^[જાફેમાએમેજૂજુઓસઓનડિ]/i, abbreviated: /^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i, wide: /^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i };
var E26 = { narrow: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i], any: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i] };
var Q5 = { narrow: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i, short: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i, abbreviated: /^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i, wide: /^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i };
var S25 = { narrow: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i], any: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i] };
var q9 = { narrow: /^(a|p|મ\.?|સ|બ|સાં|રા)/i, any: /^(a|p|મ\.?|સ|બ|સાં|રા)/i };
var C22 = { any: { am: /^a/i, pm: /^p/i, midnight: /^મ\.?/i, noon: /^બ/i, morning: /સ/i, afternoon: /બ/i, evening: /સાં/i, night: /રા/i } };
var l17 = { ordinalNumber: h({ matchPattern: k21, parsePattern: z27, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: F27, defaultMatchWidth: "wide", parsePatterns: V26, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X27, defaultMatchWidth: "wide", parsePatterns: A11, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: L26, defaultMatchWidth: "wide", parsePatterns: E26, defaultParseWidth: "any" }), day: P({ matchPatterns: Q5, defaultMatchWidth: "wide", parsePatterns: S25, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: q9, defaultMatchWidth: "any", parsePatterns: C22, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/he.mjs
var g24 = { full: "EEEE, d \u05D1MMMM y", long: "d \u05D1MMMM y", medium: "d \u05D1MMM y", short: "d.M.y" };
var b25 = { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var P30 = { full: "{{date}} '\u05D1\u05E9\u05E2\u05D4' {{time}}", long: "{{date}} '\u05D1\u05E9\u05E2\u05D4' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var u23 = { date: r2({ formats: g24, defaultWidth: "full" }), time: r2({ formats: b25, defaultWidth: "full" }), dateTime: r2({ formats: P30, defaultWidth: "full" }) };
var v25 = { narrow: ["\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1", "\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4"], abbreviated: ["\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1", "\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4"], wide: ["\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E1\u05E4\u05D9\u05E8\u05D4", "\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4"] };
var M28 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["\u05E8\u05D1\u05E2\u05D5\u05DF 1", "\u05E8\u05D1\u05E2\u05D5\u05DF 2", "\u05E8\u05D1\u05E2\u05D5\u05DF 3", "\u05E8\u05D1\u05E2\u05D5\u05DF 4"] };
var W23 = { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["\u05D9\u05E0\u05D5\u05F3", "\u05E4\u05D1\u05E8\u05F3", "\u05DE\u05E8\u05E5", "\u05D0\u05E4\u05E8\u05F3", "\u05DE\u05D0\u05D9", "\u05D9\u05D5\u05E0\u05D9", "\u05D9\u05D5\u05DC\u05D9", "\u05D0\u05D5\u05D2\u05F3", "\u05E1\u05E4\u05D8\u05F3", "\u05D0\u05D5\u05E7\u05F3", "\u05E0\u05D5\u05D1\u05F3", "\u05D3\u05E6\u05DE\u05F3"], wide: ["\u05D9\u05E0\u05D5\u05D0\u05E8", "\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8", "\u05DE\u05E8\u05E5", "\u05D0\u05E4\u05E8\u05D9\u05DC", "\u05DE\u05D0\u05D9", "\u05D9\u05D5\u05E0\u05D9", "\u05D9\u05D5\u05DC\u05D9", "\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8", "\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8", "\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8", "\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8", "\u05D3\u05E6\u05DE\u05D1\u05E8"] };
var x22 = { narrow: ["\u05D0\u05F3", "\u05D1\u05F3", "\u05D2\u05F3", "\u05D3\u05F3", "\u05D4\u05F3", "\u05D5\u05F3", "\u05E9\u05F3"], short: ["\u05D0\u05F3", "\u05D1\u05F3", "\u05D2\u05F3", "\u05D3\u05F3", "\u05D4\u05F3", "\u05D5\u05F3", "\u05E9\u05F3"], abbreviated: ["\u05D9\u05D5\u05DD \u05D0\u05F3", "\u05D9\u05D5\u05DD \u05D1\u05F3", "\u05D9\u05D5\u05DD \u05D2\u05F3", "\u05D9\u05D5\u05DD \u05D3\u05F3", "\u05D9\u05D5\u05DD \u05D4\u05F3", "\u05D9\u05D5\u05DD \u05D5\u05F3", "\u05E9\u05D1\u05EA"], wide: ["\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF", "\u05D9\u05D5\u05DD \u05E9\u05E0\u05D9", "\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9", "\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9", "\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9", "\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9", "\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA"] };
var $ = { narrow: { am: "\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6", pm: "\u05D0\u05D7\u05D4\u05F4\u05E6", midnight: "\u05D7\u05E6\u05D5\u05EA", noon: "\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD", morning: "\u05D1\u05D5\u05E7\u05E8", afternoon: "\u05D0\u05D7\u05E8 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD", evening: "\u05E2\u05E8\u05D1", night: "\u05DC\u05D9\u05DC\u05D4" }, abbreviated: { am: "\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6", pm: "\u05D0\u05D7\u05D4\u05F4\u05E6", midnight: "\u05D7\u05E6\u05D5\u05EA", noon: "\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD", morning: "\u05D1\u05D5\u05E7\u05E8", afternoon: "\u05D0\u05D7\u05E8 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD", evening: "\u05E2\u05E8\u05D1", night: "\u05DC\u05D9\u05DC\u05D4" }, wide: { am: "\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6", pm: "\u05D0\u05D7\u05D4\u05F4\u05E6", midnight: "\u05D7\u05E6\u05D5\u05EA", noon: "\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD", morning: "\u05D1\u05D5\u05E7\u05E8", afternoon: "\u05D0\u05D7\u05E8 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD", evening: "\u05E2\u05E8\u05D1", night: "\u05DC\u05D9\u05DC\u05D4" } };
var D24 = { narrow: { am: "\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6", pm: "\u05D0\u05D7\u05D4\u05F4\u05E6", midnight: "\u05D7\u05E6\u05D5\u05EA", noon: "\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD", morning: "\u05D1\u05D1\u05D5\u05E7\u05E8", afternoon: "\u05D1\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD", evening: "\u05D1\u05E2\u05E8\u05D1", night: "\u05D1\u05DC\u05D9\u05DC\u05D4" }, abbreviated: { am: "\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6", pm: "\u05D0\u05D7\u05D4\u05F4\u05E6", midnight: "\u05D7\u05E6\u05D5\u05EA", noon: "\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD", morning: "\u05D1\u05D1\u05D5\u05E7\u05E8", afternoon: "\u05D0\u05D7\u05E8 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD", evening: "\u05D1\u05E2\u05E8\u05D1", night: "\u05D1\u05DC\u05D9\u05DC\u05D4" }, wide: { am: "\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6", pm: "\u05D0\u05D7\u05D4\u05F4\u05E6", midnight: "\u05D7\u05E6\u05D5\u05EA", noon: "\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD", morning: "\u05D1\u05D1\u05D5\u05E7\u05E8", afternoon: "\u05D0\u05D7\u05E8 \u05D4\u05E6\u05D4\u05E8\u05D9\u05D9\u05DD", evening: "\u05D1\u05E2\u05E8\u05D1", night: "\u05D1\u05DC\u05D9\u05DC\u05D4" } };
var F28 = (t8, e30) => {
  let a33 = Number(t8);
  if (a33 <= 0 || a33 > 10) return String(a33);
  let n19 = String(e30?.unit), o36 = ["year", "hour", "minute", "second"].indexOf(n19) >= 0, f75 = ["\u05E8\u05D0\u05E9\u05D5\u05DF", "\u05E9\u05E0\u05D9", "\u05E9\u05DC\u05D9\u05E9\u05D9", "\u05E8\u05D1\u05D9\u05E2\u05D9", "\u05D7\u05DE\u05D9\u05E9\u05D9", "\u05E9\u05D9\u05E9\u05D9", "\u05E9\u05D1\u05D9\u05E2\u05D9", "\u05E9\u05DE\u05D9\u05E0\u05D9", "\u05EA\u05E9\u05D9\u05E2\u05D9", "\u05E2\u05E9\u05D9\u05E8\u05D9"], w71 = ["\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4", "\u05E9\u05E0\u05D9\u05D9\u05D4", "\u05E9\u05DC\u05D9\u05E9\u05D9\u05EA", "\u05E8\u05D1\u05D9\u05E2\u05D9\u05EA", "\u05D7\u05DE\u05D9\u05E9\u05D9\u05EA", "\u05E9\u05D9\u05E9\u05D9\u05EA", "\u05E9\u05D1\u05D9\u05E2\u05D9\u05EA", "\u05E9\u05DE\u05D9\u05E0\u05D9\u05EA", "\u05EA\u05E9\u05D9\u05E2\u05D9\u05EA", "\u05E2\u05E9\u05D9\u05E8\u05D9\u05EA"], d43 = a33 - 1;
  return o36 ? w71[d43] : f75[d43];
};
var l18 = { ordinalNumber: F28, era: c({ values: v25, defaultWidth: "wide" }), quarter: c({ values: M28, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: W23, defaultWidth: "wide" }), day: c({ values: x22, defaultWidth: "wide" }), dayPeriod: c({ values: $, defaultWidth: "wide", formattingValues: D24, defaultFormattingWidth: "wide" }) };
var z28 = /^(\d+|(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי|שמיני|תשיעי|עשירי|ראשונה|שנייה|שלישית|רביעית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית))/i;
var N27 = /^(\d+|רא|שנ|של|רב|ח|שי|שב|שמ|ת|ע)/i;
var S26 = { narrow: /^ל(ספירה|פנה״ס)/i, abbreviated: /^ל(ספירה|פנה״ס)/i, wide: /^ל(פני ה)?ספירה/i };
var V27 = { any: [/^לפ/i, /^לס/i] };
var X28 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^רבעון [1234]/i };
var L27 = { any: [/1/i, /2/i, /3/i, /4/i] };
var E27 = { narrow: /^\d+/i, abbreviated: /^(ינו|פבר|מרץ|אפר|מאי|יוני|יולי|אוג|ספט|אוק|נוב|דצמ)׳?/i, wide: /^(ינואר|פברואר|מרץ|אפריל|מאי|יוני|יולי|אוגוסט|ספטמבר|אוקטובר|נובמבר|דצמבר)/i };
var H20 = { narrow: [/^1$/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i], any: [/^ינ/i, /^פ/i, /^מר/i, /^אפ/i, /^מא/i, /^יונ/i, /^יול/i, /^אוג/i, /^ס/i, /^אוק/i, /^נ/i, /^ד/i] };
var Q6 = { narrow: /^[אבגדהוש]׳/i, short: /^[אבגדהוש]׳/i, abbreviated: /^(שבת|יום (א|ב|ג|ד|ה|ו)׳)/i, wide: /^יום (ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/i };
var O9 = { abbreviated: [/א׳$/i, /ב׳$/i, /ג׳$/i, /ד׳$/i, /ה׳$/i, /ו׳$/i, /^ש/i], wide: [/ן$/i, /ני$/i, /לישי$/i, /עי$/i, /מישי$/i, /שישי$/i, /ת$/i], any: [/^א/i, /^ב/i, /^ג/i, /^ד/i, /^ה/i, /^ו/i, /^ש/i] };
var q10 = { any: /^(אחר ה|ב)?(חצות|צהריים|בוקר|ערב|לילה|אחה״צ|לפנה״צ)/i };
var C23 = { any: { am: /^לפ/i, pm: /^אחה/i, midnight: /^ח/i, noon: /^צ/i, morning: /בוקר/i, afternoon: /בצ|אחר/i, evening: /ערב/i, night: /לילה/i } };
var R16 = ["\u05E8\u05D0", "\u05E9\u05E0", "\u05E9\u05DC", "\u05E8\u05D1", "\u05D7", "\u05E9\u05D9", "\u05E9\u05D1", "\u05E9\u05DE", "\u05EA", "\u05E2"];
var h16 = { ordinalNumber: h({ matchPattern: z28, parsePattern: N27, valueCallback: (t8) => {
  let e30 = parseInt(t8, 10);
  return isNaN(e30) ? R16.indexOf(t8) + 1 : e30;
} }), era: P({ matchPatterns: S26, defaultMatchWidth: "wide", parsePatterns: V27, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X28, defaultMatchWidth: "wide", parsePatterns: L27, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: E27, defaultMatchWidth: "wide", parsePatterns: H20, defaultParseWidth: "any" }), day: P({ matchPatterns: Q6, defaultMatchWidth: "wide", parsePatterns: O9, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: q10, defaultMatchWidth: "any", parsePatterns: C23, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/hi.mjs
var d16 = { locale: { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096A", 5: "\u096B", 6: "\u096C", 7: "\u096D", 8: "\u096E", 9: "\u096F", 0: "\u0966" }, number: { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096A": "4", "\u096B": "5", "\u096C": "6", "\u096D": "7", "\u096E": "8", "\u096F": "9", "\u0966": "0" } };
var b26 = { narrow: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u094D\u0935\u0940"], abbreviated: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u094D\u0935\u0940"], wide: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u0935\u0940 \u0938\u0928"] };
var g25 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u0924\u093F1", "\u0924\u093F2", "\u0924\u093F3", "\u0924\u093F4"], wide: ["\u092A\u0939\u0932\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u0926\u0942\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u091A\u094C\u0925\u0940 \u0924\u093F\u092E\u093E\u0939\u0940"] };
var P31 = { narrow: ["\u091C", "\u092B\u093C", "\u092E\u093E", "\u0905", "\u092E\u0908", "\u091C\u0942", "\u091C\u0941", "\u0905\u0917", "\u0938\u093F", "\u0905\u0915\u094D\u091F\u0942", "\u0928", "\u0926\u093F"], abbreviated: ["\u091C\u0928", "\u092B\u093C\u0930", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930\u0948\u0932", "\u092E\u0908", "\u091C\u0942\u0928", "\u091C\u0941\u0932", "\u0905\u0917", "\u0938\u093F\u0924", "\u0905\u0915\u094D\u091F\u0942", "\u0928\u0935", "\u0926\u093F\u0938"], wide: ["\u091C\u0928\u0935\u0930\u0940", "\u092B\u093C\u0930\u0935\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930\u0948\u0932", "\u092E\u0908", "\u091C\u0942\u0928", "\u091C\u0941\u0932\u093E\u0908", "\u0905\u0917\u0938\u094D\u0924", "\u0938\u093F\u0924\u0902\u092C\u0930", "\u0905\u0915\u094D\u091F\u0942\u092C\u0930", "\u0928\u0935\u0902\u092C\u0930", "\u0926\u093F\u0938\u0902\u092C\u0930"] };
var w28 = { narrow: ["\u0930", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u0917\u0941", "\u0936\u0941", "\u0936"], short: ["\u0930", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u0917\u0941", "\u0936\u0941", "\u0936"], abbreviated: ["\u0930\u0935\u093F", "\u0938\u094B\u092E", "\u092E\u0902\u0917\u0932", "\u092C\u0941\u0927", "\u0917\u0941\u0930\u0941", "\u0936\u0941\u0915\u094D\u0930", "\u0936\u0928\u093F"], wide: ["\u0930\u0935\u093F\u0935\u093E\u0930", "\u0938\u094B\u092E\u0935\u093E\u0930", "\u092E\u0902\u0917\u0932\u0935\u093E\u0930", "\u092C\u0941\u0927\u0935\u093E\u0930", "\u0917\u0941\u0930\u0941\u0935\u093E\u0930", "\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930", "\u0936\u0928\u093F\u0935\u093E\u0930"] };
var y29 = { narrow: { am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928", pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928", midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F", noon: "\u0926\u094B\u092A\u0939\u0930", morning: "\u0938\u0941\u092C\u0939", afternoon: "\u0926\u094B\u092A\u0939\u0930", evening: "\u0936\u093E\u092E", night: "\u0930\u093E\u0924" }, abbreviated: { am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928", pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928", midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F", noon: "\u0926\u094B\u092A\u0939\u0930", morning: "\u0938\u0941\u092C\u0939", afternoon: "\u0926\u094B\u092A\u0939\u0930", evening: "\u0936\u093E\u092E", night: "\u0930\u093E\u0924" }, wide: { am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928", pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928", midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F", noon: "\u0926\u094B\u092A\u0939\u0930", morning: "\u0938\u0941\u092C\u0939", afternoon: "\u0926\u094B\u092A\u0939\u0930", evening: "\u0936\u093E\u092E", night: "\u0930\u093E\u0924" } };
var v26 = { narrow: { am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928", pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928", midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F", noon: "\u0926\u094B\u092A\u0939\u0930", morning: "\u0938\u0941\u092C\u0939", afternoon: "\u0926\u094B\u092A\u0939\u0930", evening: "\u0936\u093E\u092E", night: "\u0930\u093E\u0924" }, abbreviated: { am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928", pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928", midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F", noon: "\u0926\u094B\u092A\u0939\u0930", morning: "\u0938\u0941\u092C\u0939", afternoon: "\u0926\u094B\u092A\u0939\u0930", evening: "\u0936\u093E\u092E", night: "\u0930\u093E\u0924" }, wide: { am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928", pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928", midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F", noon: "\u0926\u094B\u092A\u0939\u0930", morning: "\u0938\u0941\u092C\u0939", afternoon: "\u0926\u094B\u092A\u0939\u0930", evening: "\u0936\u093E\u092E", night: "\u0930\u093E\u0924" } };
var M29 = (t8, e30) => {
  let a33 = Number(t8);
  return s16(a33);
};
function u24(t8) {
  let e30 = t8.toString().replace(/[१२३४५६७८९०]/g, function(a33) {
    return d16.number[a33];
  });
  return Number(e30);
}
function s16(t8) {
  return t8.toString().replace(/\d/g, function(e30) {
    return d16.locale[e30];
  });
}
var c26 = { ordinalNumber: M29, era: c({ values: b26, defaultWidth: "wide" }), quarter: c({ values: g25, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: P31, defaultWidth: "wide" }), day: c({ values: w28, defaultWidth: "wide" }), dayPeriod: c({ values: y29, defaultWidth: "wide", formattingValues: v26, defaultFormattingWidth: "wide" }) };
var x23 = { full: "EEEE, do MMMM, y", long: "do MMMM, y", medium: "d MMM, y", short: "dd/MM/yyyy" };
var D25 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var k22 = { full: "{{date}} '\u0915\u094B' {{time}}", long: "{{date}} '\u0915\u094B' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var h17 = { date: r2({ formats: x23, defaultWidth: "full" }), time: r2({ formats: D25, defaultWidth: "full" }), dateTime: r2({ formats: k22, defaultWidth: "full" }) };
var L28 = /^[०१२३४५६७८९]+/i;
var N28 = /^[०१२३४५६७८९]+/i;
var V28 = { narrow: /^(ईसा-पूर्व|ईस्वी)/i, abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i, wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i };
var T18 = { any: [/^b/i, /^(a|c)/i] };
var X29 = { narrow: /^[1234]/i, abbreviated: /^ति[1234]/i, wide: /^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i };
var E28 = { any: [/1/i, /2/i, /3/i, /4/i] };
var S27 = { narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i, abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i, wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i };
var C24 = { narrow: [/^ज/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^न/i, /^दि/i], any: [/^जन/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^नव/i, /^दिस/i] };
var R17 = { narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i, short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i, abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i, wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i };
var Y9 = { narrow: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i], any: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i] };
var _4 = { narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i, any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i };
var q11 = { any: { am: /^पूर्वाह्न/i, pm: /^अपराह्न/i, midnight: /^मध्य/i, noon: /^दो/i, morning: /सु/i, afternoon: /दो/i, evening: /शा/i, night: /रा/i } };
var p21 = { ordinalNumber: h({ matchPattern: L28, parsePattern: N28, valueCallback: u24 }), era: P({ matchPatterns: V28, defaultMatchWidth: "wide", parsePatterns: T18, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X29, defaultMatchWidth: "wide", parsePatterns: E28, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: S27, defaultMatchWidth: "wide", parsePatterns: C24, defaultParseWidth: "any" }), day: P({ matchPatterns: R17, defaultMatchWidth: "wide", parsePatterns: Y9, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: _4, defaultMatchWidth: "any", parsePatterns: q11, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/hr.mjs
var h18 = { full: "EEEE, d. MMMM y.", long: "d. MMMM y.", medium: "d. MMM y.", short: "dd. MM. y." };
var j14 = { full: "HH:mm:ss (zzzz)", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var g26 = { full: "{{date}} 'u' {{time}}", long: "{{date}} 'u' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var d17 = { date: r2({ formats: h18, defaultWidth: "full" }), time: r2({ formats: j14, defaultWidth: "full" }), dateTime: r2({ formats: g26, defaultWidth: "full" }) };
var f27 = { narrow: ["pr.n.e.", "AD"], abbreviated: ["pr. Kr.", "po. Kr."], wide: ["Prije Krista", "Poslije Krista"] };
var P32 = { narrow: ["1.", "2.", "3.", "4."], abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"] };
var k23 = { narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["sij", "velj", "o\u017Eu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], wide: ["sije\u010Danj", "velja\u010Da", "o\u017Eujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"] };
var w29 = { narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["sij", "velj", "o\u017Eu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], wide: ["sije\u010Dnja", "velja\u010De", "o\u017Eujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenog", "prosinca"] };
var b27 = { narrow: ["N", "P", "U", "S", "\u010C", "P", "S"], short: ["ned", "pon", "uto", "sri", "\u010Det", "pet", "sub"], abbreviated: ["ned", "pon", "uto", "sri", "\u010Det", "pet", "sub"], wide: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "\u010Detvrtak", "petak", "subota"] };
var M30 = { narrow: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "nave\u010Der", night: "no\u0107u" }, abbreviated: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "nave\u010Der", night: "no\u0107u" }, wide: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "poslije podne", evening: "nave\u010Der", night: "no\u0107u" } };
var y30 = { narrow: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "nave\u010Der", night: "no\u0107u" }, abbreviated: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "nave\u010Der", night: "no\u0107u" }, wide: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutro", afternoon: "poslije podne", evening: "nave\u010Der", night: "no\u0107u" } };
var A12 = (o36, n19) => Number(o36) + ".";
var p22 = { ordinalNumber: A12, era: c({ values: f27, defaultWidth: "wide" }), quarter: c({ values: P32, defaultWidth: "wide", argumentCallback: (o36) => o36 - 1 }), month: c({ values: k23, defaultWidth: "wide", formattingValues: w29, defaultFormattingWidth: "wide" }), day: c({ values: b27, defaultWidth: "wide" }), dayPeriod: c({ values: y30, defaultWidth: "wide", formattingValues: M30, defaultFormattingWidth: "wide" }) };
var z29 = /^(\d+)\./i;
var x24 = /\d+/i;
var I7 = { narrow: /^(pr\.n\.e\.|AD)/i, abbreviated: /^(pr\.\s?Kr\.|po\.\s?Kr\.)/i, wide: /^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i };
var D26 = { any: [/^pr/i, /^(po|nova)/i] };
var E29 = { narrow: /^[1234]/i, abbreviated: /^[1234]\.\s?kv\.?/i, wide: /^[1234]\. kvartal/i };
var F29 = { any: [/1/i, /2/i, /3/i, /4/i] };
var H21 = { narrow: /^(10|11|12|[123456789])\./i, abbreviated: /^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i, wide: /^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i };
var S28 = { narrow: [/1/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i, /8/i, /9/i, /10/i, /11/i, /12/i], abbreviated: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i], wide: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i] };
var V29 = { narrow: /^[npusčc]/i, short: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i, abbreviated: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i, wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i };
var K7 = { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] };
var X30 = { any: /^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i };
var L29 = { any: { am: /^a/i, pm: /^p/i, midnight: /^pono/i, noon: /^pod/i, morning: /jutro/i, afternoon: /(poslije\s|po)+podne/i, evening: /(navece|naveče)/i, night: /(nocu|noću)/i } };
var m36 = { ordinalNumber: h({ matchPattern: z29, parsePattern: x24, valueCallback: (o36) => parseInt(o36, 10) }), era: P({ matchPatterns: I7, defaultMatchWidth: "wide", parsePatterns: D26, defaultParseWidth: "any" }), quarter: P({ matchPatterns: E29, defaultMatchWidth: "wide", parsePatterns: F29, defaultParseWidth: "any", valueCallback: (o36) => o36 + 1 }), month: P({ matchPatterns: H21, defaultMatchWidth: "wide", parsePatterns: S28, defaultParseWidth: "wide" }), day: P({ matchPatterns: V29, defaultMatchWidth: "wide", parsePatterns: K7, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: X30, defaultMatchWidth: "any", parsePatterns: L29, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ht.mjs
var p23 = { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y" };
var f28 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var v27 = { full: "{{date}} 'nan l\xE8' {{time}}", long: "{{date}} 'nan l\xE8' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var d18 = { date: r2({ formats: p23, defaultWidth: "full" }), time: r2({ formats: f28, defaultWidth: "full" }), dateTime: r2({ formats: v27, defaultWidth: "full" }) };
var y31 = { narrow: ["av. J.-K", "ap. J.-K"], abbreviated: ["av. J.-K", "ap. J.-K"], wide: ["anvan Jezi Kris", "apre Jezi Kris"] };
var P33 = { narrow: ["T1", "T2", "T3", "T4"], abbreviated: ["1ye trim.", "2y\xE8m trim.", "3y\xE8m trim.", "4y\xE8m trim."], wide: ["1ye trim\xE8s", "2y\xE8m trim\xE8s", "3y\xE8m trim\xE8s", "4y\xE8m trim\xE8s"] };
var b28 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"], abbreviated: ["janv.", "fevr.", "mas", "avr.", "me", "jen", "jiy\xE8", "out", "sept.", "okt.", "nov.", "des."], wide: ["janvye", "fevrye", "mas", "avril", "me", "jen", "jiy\xE8", "out", "septanm", "okt\xF2b", "novanm", "desanm"] };
var M31 = { narrow: ["D", "L", "M", "M", "J", "V", "S"], short: ["di", "le", "ma", "m\xE8", "je", "va", "sa"], abbreviated: ["dim.", "len.", "mad.", "m\xE8k.", "jed.", "van.", "sam."], wide: ["dimanch", "lendi", "madi", "m\xE8kredi", "jedi", "vandredi", "samdi"] };
var g27 = { narrow: { am: "AM", pm: "PM", midnight: "minwit", noon: "midi", morning: "mat.", afternoon: "ap.m.", evening: "swa", night: "mat." }, abbreviated: { am: "AM", pm: "PM", midnight: "minwit", noon: "midi", morning: "maten", afternoon: "apr\xE8midi", evening: "swa", night: "maten" }, wide: { am: "AM", pm: "PM", midnight: "minwit", noon: "midi", morning: "nan maten", afternoon: "nan apr\xE8midi", evening: "nan asw\xE8", night: "nan maten" } };
var j15 = (a33, o36) => {
  let e30 = Number(a33);
  return e30 === 0 ? String(e30) : e30 + (e30 === 1 ? "ye" : "y\xE8m");
};
var u25 = { ordinalNumber: j15, era: c({ values: y31, defaultWidth: "wide" }), quarter: c({ values: P33, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: b28, defaultWidth: "wide" }), day: c({ values: M31, defaultWidth: "wide" }), dayPeriod: c({ values: g27, defaultWidth: "wide" }) };
var k24 = /^(\d+)(ye|yèm)?/i;
var J5 = /\d+/i;
var x25 = { narrow: /^(av\.J\.K|ap\.J\.K|ap\.J\.-K)/i, abbreviated: /^(av\.J\.-K|av\.J-K|apr\.J\.-K|apr\.J-K|ap\.J-K)/i, wide: /^(avan Jezi Kris|apre Jezi Kris)/i };
var K8 = { any: [/^av/i, /^ap/i] };
var z30 = { narrow: /^[1234]/i, abbreviated: /^t[1234]/i, wide: /^[1234](ye|yèm)? trimès/i };
var D27 = { any: [/1/i, /2/i, /3/i, /4/i] };
var H22 = { narrow: /^[jfmasond]/i, abbreviated: /^(janv|fevr|mas|avr|me|jen|jiyè|out|sept|okt|nov|des)\.?/i, wide: /^(janvye|fevrye|mas|avril|me|jen|jiyè|out|septanm|oktòb|novanm|desanm)/i };
var F30 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^o/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^ma/i, /^av/i, /^me/i, /^je/i, /^ji/i, /^ou/i, /^s/i, /^ok/i, /^n/i, /^d/i] };
var L30 = { narrow: /^[lmjvsd]/i, short: /^(di|le|ma|me|je|va|sa)/i, abbreviated: /^(dim|len|mad|mèk|jed|van|sam)\.?/i, wide: /^(dimanch|lendi|madi|mèkredi|jedi|vandredi|samdi)/i };
var S29 = { narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i], any: [/^di/i, /^le/i, /^ma/i, /^mè/i, /^je/i, /^va/i, /^sa/i] };
var T19 = { narrow: /^(a|p|minwit|midi|mat\.?|ap\.?m\.?|swa)/i, any: /^([ap]\.?\s?m\.?|nan maten|nan aprèmidi|nan aswè)/i };
var X31 = { any: { am: /^a/i, pm: /^p/i, midnight: /^min/i, noon: /^mid/i, morning: /mat/i, afternoon: /ap/i, evening: /sw/i, night: /nwit/i } };
var c27 = { ordinalNumber: h({ matchPattern: k24, parsePattern: J5, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: x25, defaultMatchWidth: "wide", parsePatterns: K8, defaultParseWidth: "any" }), quarter: P({ matchPatterns: z30, defaultMatchWidth: "wide", parsePatterns: D27, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: H22, defaultMatchWidth: "wide", parsePatterns: F30, defaultParseWidth: "any" }), day: P({ matchPatterns: L30, defaultMatchWidth: "wide", parsePatterns: S29, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: T19, defaultMatchWidth: "any", parsePatterns: X31, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/hu.mjs
var P34 = { full: "y. MMMM d., EEEE", long: "y. MMMM d.", medium: "y. MMM d.", short: "y. MM. dd." };
var k25 = { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var I8 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var u26 = { date: r2({ formats: P34, defaultWidth: "full" }), time: r2({ formats: k25, defaultWidth: "full" }), dateTime: r2({ formats: I8, defaultWidth: "full" }) };
var x26 = ["vas\xE1rnap", "h\xE9tf\u0151n", "kedden", "szerd\xE1n", "cs\xFCt\xF6rt\xF6k\xF6n", "p\xE9nteken", "szombaton"];
function c28(e30) {
  return (a33) => {
    let t8 = x26[a33.getDay()];
    return `${e30 ? "" : "'m\xFAlt' "}'${t8}' p'-kor'`;
  };
}
var M32 = { lastWeek: c28(false), yesterday: "'tegnap' p'-kor'", today: "'ma' p'-kor'", tomorrow: "'holnap' p'-kor'", nextWeek: c28(true), other: "P" };
var W24 = { narrow: ["ie.", "isz."], abbreviated: ["i. e.", "i. sz."], wide: ["Krisztus el\u0151tt", "id\u0151sz\xE1m\xEDt\xE1sunk szerint"] };
var V30 = { narrow: ["1.", "2.", "3.", "4."], abbreviated: ["1. n.\xE9v", "2. n.\xE9v", "3. n.\xE9v", "4. n.\xE9v"], wide: ["1. negyed\xE9v", "2. negyed\xE9v", "3. negyed\xE9v", "4. negyed\xE9v"] };
var S30 = { narrow: ["I.", "II.", "III.", "IV."], abbreviated: ["I. n.\xE9v", "II. n.\xE9v", "III. n.\xE9v", "IV. n.\xE9v"], wide: ["I. negyed\xE9v", "II. negyed\xE9v", "III. negyed\xE9v", "IV. negyed\xE9v"] };
var D28 = { narrow: ["J", "F", "M", "\xC1", "M", "J", "J", "A", "Sz", "O", "N", "D"], abbreviated: ["jan.", "febr.", "m\xE1rc.", "\xE1pr.", "m\xE1j.", "j\xFAn.", "j\xFAl.", "aug.", "szept.", "okt.", "nov.", "dec."], wide: ["janu\xE1r", "febru\xE1r", "m\xE1rcius", "\xE1prilis", "m\xE1jus", "j\xFAnius", "j\xFAlius", "augusztus", "szeptember", "okt\xF3ber", "november", "december"] };
var F31 = { narrow: ["V", "H", "K", "Sz", "Cs", "P", "Sz"], short: ["V", "H", "K", "Sze", "Cs", "P", "Szo"], abbreviated: ["V", "H", "K", "Sze", "Cs", "P", "Szo"], wide: ["vas\xE1rnap", "h\xE9tf\u0151", "kedd", "szerda", "cs\xFCt\xF6rt\xF6k", "p\xE9ntek", "szombat"] };
var C25 = { narrow: { am: "de.", pm: "du.", midnight: "\xE9jf\xE9l", noon: "d\xE9l", morning: "reggel", afternoon: "du.", evening: "este", night: "\xE9jjel" }, abbreviated: { am: "de.", pm: "du.", midnight: "\xE9jf\xE9l", noon: "d\xE9l", morning: "reggel", afternoon: "du.", evening: "este", night: "\xE9jjel" }, wide: { am: "de.", pm: "du.", midnight: "\xE9jf\xE9l", noon: "d\xE9l", morning: "reggel", afternoon: "d\xE9lut\xE1n", evening: "este", night: "\xE9jjel" } };
var L31 = (e30, a33) => Number(e30) + ".";
var h19 = { ordinalNumber: L31, era: c({ values: W24, defaultWidth: "wide" }), quarter: c({ values: V30, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1, formattingValues: S30, defaultFormattingWidth: "wide" }), month: c({ values: D28, defaultWidth: "wide" }), day: c({ values: F31, defaultWidth: "wide" }), dayPeriod: c({ values: C25, defaultWidth: "wide" }) };
var E30 = /^(\d+)\.?/i;
var N29 = /\d+/i;
var K9 = { narrow: /^(ie\.|isz\.)/i, abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i, wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i };
var O10 = { narrow: [/ie/i, /isz/i], abbreviated: [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i], any: [/előtt/i, /(szerint|i. sz.)/i] };
var R18 = { narrow: /^[1234]\.?/i, abbreviated: /^[1234]?\.?\s?n\.év/i, wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i };
var $2 = { any: [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i] };
var q12 = { narrow: /^[jfmaásond]|sz/i, abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i, wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i };
var J6 = { narrow: [/^j/i, /^f/i, /^m/i, /^a|á/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s|sz/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^már/i, /^áp/i, /^máj/i, /^jún/i, /^júl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var Q7 = { narrow: /^([vhkpc]|sz|cs|sz)/i, short: /^([vhkp]|sze|cs|szo)/i, abbreviated: /^([vhkp]|sze|cs|szo)/i, wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i };
var T20 = { narrow: [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i], any: [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i] };
var A13 = { any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i };
var _5 = { any: { am: /^de\.?/i, pm: /^du\.?/i, midnight: /^éjf/i, noon: /^dé/i, morning: /reg/i, afternoon: /^délu\.?/i, evening: /es/i, night: /éjj/i } };
var p24 = { ordinalNumber: h({ matchPattern: E30, parsePattern: N29, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: K9, defaultMatchWidth: "wide", parsePatterns: O10, defaultParseWidth: "any" }), quarter: P({ matchPatterns: R18, defaultMatchWidth: "wide", parsePatterns: $2, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: q12, defaultMatchWidth: "wide", parsePatterns: J6, defaultParseWidth: "any" }), day: P({ matchPatterns: Q7, defaultMatchWidth: "wide", parsePatterns: T20, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: A13, defaultMatchWidth: "any", parsePatterns: _5, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/hy.mjs
var f29 = { full: "d MMMM, y, EEEE", long: "d MMMM, y", medium: "d MMM, y", short: "dd.MM.yyyy" };
var p25 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var g28 = { full: "{{date}} '\u056A\u2024'{{time}}", long: "{{date}} '\u056A\u2024'{{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m37 = { date: r2({ formats: f29, defaultWidth: "full" }), time: r2({ formats: p25, defaultWidth: "full" }), dateTime: r2({ formats: g28, defaultWidth: "full" }) };
var P35 = { narrow: ["\u0554", "\u0544"], abbreviated: ["\u0554\u0531", "\u0544\u0539"], wide: ["\u0554\u0580\u056B\u057D\u057F\u0578\u057D\u056B\u0581 \u0561\u057C\u0561\u057B", "\u0544\u0565\u0580 \u0569\u057E\u0561\u0580\u056F\u0578\u0582\u0569\u0575\u0561\u0576"] };
var w30 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u05541", "\u05542", "\u05543", "\u05544"], wide: ["1\u058A\u056B\u0576 \u0584\u0561\u057C\u0578\u0580\u0564", "2\u058A\u0580\u0564 \u0584\u0561\u057C\u0578\u0580\u0564", "3\u058A\u0580\u0564 \u0584\u0561\u057C\u0578\u0580\u0564", "4\u058A\u0580\u0564 \u0584\u0561\u057C\u0578\u0580\u0564"] };
var y32 = { narrow: ["\u0540", "\u0553", "\u0544", "\u0531", "\u0544", "\u0540", "\u0540", "\u0555", "\u054D", "\u0540", "\u0546", "\u0534"], abbreviated: ["\u0570\u0578\u0582\u0576", "\u0583\u0565\u057F", "\u0574\u0561\u0580", "\u0561\u057A\u0580", "\u0574\u0561\u0575", "\u0570\u0578\u0582\u0576", "\u0570\u0578\u0582\u056C", "\u0585\u0563\u057D", "\u057D\u0565\u057A", "\u0570\u0578\u056F", "\u0576\u0578\u0575", "\u0564\u0565\u056F"], wide: ["\u0570\u0578\u0582\u0576\u057E\u0561\u0580", "\u0583\u0565\u057F\u0580\u057E\u0561\u0580", "\u0574\u0561\u0580\u057F", "\u0561\u057A\u0580\u056B\u056C", "\u0574\u0561\u0575\u056B\u057D", "\u0570\u0578\u0582\u0576\u056B\u057D", "\u0570\u0578\u0582\u056C\u056B\u057D", "\u0585\u0563\u0578\u057D\u057F\u0578\u057D", "\u057D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580", "\u0570\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580", "\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580", "\u0564\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580"] };
var M33 = { narrow: ["\u053F", "\u0535", "\u0535", "\u0549", "\u0540", "\u0548", "\u0547"], short: ["\u056F\u0580", "\u0565\u0580", "\u0565\u0584", "\u0579\u0584", "\u0570\u0563", "\u0578\u0582\u0580", "\u0577\u0562"], abbreviated: ["\u056F\u056B\u0580", "\u0565\u0580\u056F", "\u0565\u0580\u0584", "\u0579\u0578\u0580", "\u0570\u0576\u0563", "\u0578\u0582\u0580\u0562", "\u0577\u0561\u0562"], wide: ["\u056F\u056B\u0580\u0561\u056F\u056B", "\u0565\u0580\u056F\u0578\u0582\u0577\u0561\u0562\u0569\u056B", "\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B", "\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B", "\u0570\u056B\u0576\u0563\u0577\u0561\u0562\u0569\u056B", "\u0578\u0582\u0580\u0562\u0561\u0569", "\u0577\u0561\u0562\u0561\u0569"] };
var v28 = { narrow: { am: "a", pm: "p", midnight: "\u056F\u0565\u057D\u0563\u0577", noon: "\u056F\u0565\u057D\u0585\u0580", morning: "\u0561\u057C\u0561\u057E\u0578\u057F", afternoon: "\u0581\u0565\u0580\u0565\u056F", evening: "\u0565\u0580\u0565\u056F\u0578", night: "\u0563\u056B\u0577\u0565\u0580" }, abbreviated: { am: "AM", pm: "PM", midnight: "\u056F\u0565\u057D\u0563\u056B\u0577\u0565\u0580", noon: "\u056F\u0565\u057D\u0585\u0580", morning: "\u0561\u057C\u0561\u057E\u0578\u057F", afternoon: "\u0581\u0565\u0580\u0565\u056F", evening: "\u0565\u0580\u0565\u056F\u0578", night: "\u0563\u056B\u0577\u0565\u0580" }, wide: { am: "a.m.", pm: "p.m.", midnight: "\u056F\u0565\u057D\u0563\u056B\u0577\u0565\u0580", noon: "\u056F\u0565\u057D\u0585\u0580", morning: "\u0561\u057C\u0561\u057E\u0578\u057F", afternoon: "\u0581\u0565\u0580\u0565\u056F", evening: "\u0565\u0580\u0565\u056F\u0578", night: "\u0563\u056B\u0577\u0565\u0580" } };
var W25 = { narrow: { am: "a", pm: "p", midnight: "\u056F\u0565\u057D\u0563\u0577", noon: "\u056F\u0565\u057D\u0585\u0580", morning: "\u0561\u057C\u0561\u057E\u0578\u057F\u0568", afternoon: "\u0581\u0565\u0580\u0565\u056F\u0568", evening: "\u0565\u0580\u0565\u056F\u0578\u0575\u0561\u0576", night: "\u0563\u056B\u0577\u0565\u0580\u0568" }, abbreviated: { am: "AM", pm: "PM", midnight: "\u056F\u0565\u057D\u0563\u056B\u0577\u0565\u0580\u056B\u0576", noon: "\u056F\u0565\u057D\u0585\u0580\u056B\u0576", morning: "\u0561\u057C\u0561\u057E\u0578\u057F\u0568", afternoon: "\u0581\u0565\u0580\u0565\u056F\u0568", evening: "\u0565\u0580\u0565\u056F\u0578\u0575\u0561\u0576", night: "\u0563\u056B\u0577\u0565\u0580\u0568" }, wide: { am: "a.m.", pm: "p.m.", midnight: "\u056F\u0565\u057D\u0563\u056B\u0577\u0565\u0580\u056B\u0576", noon: "\u056F\u0565\u057D\u0585\u0580\u056B\u0576", morning: "\u0561\u057C\u0561\u057E\u0578\u057F\u0568", afternoon: "\u0581\u0565\u0580\u0565\u056F\u0568", evening: "\u0565\u0580\u0565\u056F\u0578\u0575\u0561\u0576", night: "\u0563\u056B\u0577\u0565\u0580\u0568" } };
var x27 = (t8, i19) => {
  let a33 = Number(t8), e30 = a33 % 100;
  return e30 < 10 && e30 % 10 === 1 ? a33 + "\u058A\u056B\u0576" : a33 + "\u058A\u0580\u0564";
};
var h20 = { ordinalNumber: x27, era: c({ values: P35, defaultWidth: "wide" }), quarter: c({ values: w30, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: y32, defaultWidth: "wide" }), day: c({ values: M33, defaultWidth: "wide" }), dayPeriod: c({ values: v28, defaultWidth: "wide", formattingValues: W25, defaultFormattingWidth: "wide" }) };
var k26 = /^(\d+)((-|֊)?(ին|րդ))?/i;
var H23 = /\d+/i;
var z31 = { narrow: /^(Ք|Մ)/i, abbreviated: /^(Ք\.?\s?Ա\.?|Մ\.?\s?Թ\.?\s?Ա\.?|Մ\.?\s?Թ\.?|Ք\.?\s?Հ\.?)/i, wide: /^(քրիստոսից առաջ|մեր թվարկությունից առաջ|մեր թվարկության|քրիստոսից հետո)/i };
var F32 = { any: [/^ք/i, /^մ/i] };
var V31 = { narrow: /^[1234]/i, abbreviated: /^ք[1234]/i, wide: /^[1234]((-|֊)?(ին|րդ)) քառորդ/i };
var X32 = { any: [/1/i, /2/i, /3/i, /4/i] };
var L32 = { narrow: /^[հփմաօսնդ]/i, abbreviated: /^(հուն|փետ|մար|ապր|մայ|հուն|հուլ|օգս|սեպ|հոկ|նոյ|դեկ)/i, wide: /^(հունվար|փետրվար|մարտ|ապրիլ|մայիս|հունիս|հուլիս|օգոստոս|սեպտեմբեր|հոկտեմբեր|նոյեմբեր|դեկտեմբեր)/i };
var E31 = { narrow: [/^հ/i, /^փ/i, /^մ/i, /^ա/i, /^մ/i, /^հ/i, /^հ/i, /^օ/i, /^ս/i, /^հ/i, /^ն/i, /^դ/i], any: [/^հու/i, /^փ/i, /^մար/i, /^ա/i, /^մայ/i, /^հուն/i, /^հուլ/i, /^օ/i, /^ս/i, /^հոկ/i, /^ն/i, /^դ/i] };
var N30 = { narrow: /^[եչհոշկ]/i, short: /^(կր|եր|եք|չք|հգ|ուր|շբ)/i, abbreviated: /^(կիր|երկ|երք|չոր|հնգ|ուրբ|շաբ)/i, wide: /^(կիրակի|երկուշաբթի|երեքշաբթի|չորեքշաբթի|հինգշաբթի|ուրբաթ|շաբաթ)/i };
var S31 = { narrow: [/^կ/i, /^ե/i, /^ե/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i], short: [/^կ/i, /^եր/i, /^եք/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i], abbreviated: [/^կ/i, /^երկ/i, /^երք/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i], wide: [/^կ/i, /^երկ/i, /^երե/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i] };
var C26 = { narrow: /^([ap]|կեսգշ|կեսօր|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i, any: /^([ap]\.?\s?m\.?|կեսգիշեր(ին)?|կեսօր(ին)?|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i };
var R19 = { any: { am: /^a/i, pm: /^p/i, midnight: /կեսգիշեր/i, noon: /կեսօր/i, morning: /առավոտ/i, afternoon: /ցերեկ/i, evening: /երեկո/i, night: /գիշեր/i } };
var c29 = { ordinalNumber: h({ matchPattern: k26, parsePattern: H23, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: z31, defaultMatchWidth: "wide", parsePatterns: F32, defaultParseWidth: "any" }), quarter: P({ matchPatterns: V31, defaultMatchWidth: "wide", parsePatterns: X32, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: L32, defaultMatchWidth: "wide", parsePatterns: E31, defaultParseWidth: "any" }), day: P({ matchPatterns: N30, defaultMatchWidth: "wide", parsePatterns: S31, defaultParseWidth: "wide" }), dayPeriod: P({ matchPatterns: C26, defaultMatchWidth: "any", parsePatterns: R19, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/id.mjs
var c30 = { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "d/M/yyyy" };
var p26 = { full: "HH.mm.ss", long: "HH.mm.ss", medium: "HH.mm", short: "HH.mm" };
var b29 = { full: "{{date}} 'pukul' {{time}}", long: "{{date}} 'pukul' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var u27 = { date: r2({ formats: c30, defaultWidth: "full" }), time: r2({ formats: p26, defaultWidth: "full" }), dateTime: r2({ formats: b29, defaultWidth: "full" }) };
var k27 = { narrow: ["SM", "M"], abbreviated: ["SM", "M"], wide: ["Sebelum Masehi", "Masehi"] };
var M34 = { narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["Kuartal ke-1", "Kuartal ke-2", "Kuartal ke-3", "Kuartal ke-4"] };
var y33 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"], wide: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"] };
var P36 = { narrow: ["M", "S", "S", "R", "K", "J", "S"], short: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"], abbreviated: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"], wide: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"] };
var w31 = { narrow: { am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "siang", evening: "sore", night: "malam" }, abbreviated: { am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "siang", evening: "sore", night: "malam" }, wide: { am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "siang", evening: "sore", night: "malam" } };
var v29 = { narrow: { am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "siang", evening: "sore", night: "malam" }, abbreviated: { am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "siang", evening: "sore", night: "malam" }, wide: { am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "siang", evening: "sore", night: "malam" } };
var W26 = (a33, r32) => "ke-" + Number(a33);
var d19 = { ordinalNumber: W26, era: c({ values: k27, defaultWidth: "wide" }), quarter: c({ values: M34, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: y33, defaultWidth: "wide" }), day: c({ values: P36, defaultWidth: "wide" }), dayPeriod: c({ values: w31, defaultWidth: "wide", formattingValues: v29, defaultFormattingWidth: "wide" }) };
var S32 = /^ke-(\d+)?/i;
var x28 = /\d+/i;
var D29 = { narrow: /^(sm|m)/i, abbreviated: /^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i, wide: /^(sebelum masehi|sebelum era umum|masehi|era umum)/i };
var K10 = { any: [/^s/i, /^(m|e)/i] };
var A14 = { narrow: /^[1234]/i, abbreviated: /^K-?\s[1234]/i, wide: /^Kuartal ke-?\s?[1234]/i };
var J7 = { any: [/1/i, /2/i, /3/i, /4/i] };
var F33 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i, wide: /^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i };
var H24 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^ma/i, /^ap/i, /^me/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var N31 = { narrow: /^[srkjm]/i, short: /^(min|sen|sel|rab|kam|jum|sab)/i, abbreviated: /^(min|sen|sel|rab|kam|jum|sab)/i, wide: /^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i };
var R20 = { narrow: [/^m/i, /^s/i, /^s/i, /^r/i, /^k/i, /^j/i, /^s/i], any: [/^m/i, /^sen/i, /^sel/i, /^r/i, /^k/i, /^j/i, /^sa/i] };
var V32 = { narrow: /^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i, any: /^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i };
var X33 = { any: { am: /^a/i, pm: /^pm/i, midnight: /^tengah m/i, noon: /^tengah h/i, morning: /pagi/i, afternoon: /siang/i, evening: /sore/i, night: /malam/i } };
var h21 = { ordinalNumber: h({ matchPattern: S32, parsePattern: x28, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: D29, defaultMatchWidth: "wide", parsePatterns: K10, defaultParseWidth: "any" }), quarter: P({ matchPatterns: A14, defaultMatchWidth: "wide", parsePatterns: J7, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: F33, defaultMatchWidth: "wide", parsePatterns: H24, defaultParseWidth: "any" }), day: P({ matchPatterns: N31, defaultMatchWidth: "wide", parsePatterns: R20, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: V32, defaultMatchWidth: "any", parsePatterns: X33, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/is.mjs
var g29 = { full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "d.MM.y" };
var c31 = { full: "'kl'. HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var b30 = { full: "{{date}} 'kl.' {{time}}", long: "{{date}} 'kl.' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var u28 = { date: r2({ formats: g29, defaultWidth: "full" }), time: r2({ formats: c31, defaultWidth: "full" }), dateTime: r2({ formats: b30, defaultWidth: "full" }) };
var k28 = { narrow: ["f.Kr.", "e.Kr."], abbreviated: ["f.Kr.", "e.Kr."], wide: ["fyrir Krist", "eftir Krist"] };
var v30 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1F", "2F", "3F", "4F"], wide: ["1. fj\xF3r\xF0ungur", "2. fj\xF3r\xF0ungur", "3. fj\xF3r\xF0ungur", "4. fj\xF3r\xF0ungur"] };
var y34 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "\xC1", "S", "\xD3", "N", "D"], abbreviated: ["jan.", "feb.", "mars", "apr\xEDl", "ma\xED", "j\xFAn\xED", "j\xFAl\xED", "\xE1g\xFAst", "sept.", "okt.", "n\xF3v.", "des."], wide: ["jan\xFAar", "febr\xFAar", "mars", "apr\xEDl", "ma\xED", "j\xFAn\xED", "j\xFAl\xED", "\xE1g\xFAst", "september", "okt\xF3ber", "n\xF3vember", "desember"] };
var P37 = { narrow: ["S", "M", "\xDE", "M", "F", "F", "L"], short: ["Su", "M\xE1", "\xDEr", "Mi", "Fi", "F\xF6", "La"], abbreviated: ["sun.", "m\xE1n.", "\xFEri.", "mi\xF0.", "fim.", "f\xF6s.", "lau."], wide: ["sunnudagur", "m\xE1nudagur", "\xFEri\xF0judagur", "mi\xF0vikudagur", "fimmtudagur", "f\xF6studagur", "laugardagur"] };
var w32 = { narrow: { am: "f", pm: "e", midnight: "mi\xF0n\xE6tti", noon: "h\xE1degi", morning: "morgunn", afternoon: "s\xED\xF0degi", evening: "kv\xF6ld", night: "n\xF3tt" }, abbreviated: { am: "f.h.", pm: "e.h.", midnight: "mi\xF0n\xE6tti", noon: "h\xE1degi", morning: "morgunn", afternoon: "s\xED\xF0degi", evening: "kv\xF6ld", night: "n\xF3tt" }, wide: { am: "fyrir h\xE1degi", pm: "eftir h\xE1degi", midnight: "mi\xF0n\xE6tti", noon: "h\xE1degi", morning: "morgunn", afternoon: "s\xED\xF0degi", evening: "kv\xF6ld", night: "n\xF3tt" } };
var M35 = { narrow: { am: "f", pm: "e", midnight: "\xE1 mi\xF0n\xE6tti", noon: "\xE1 h\xE1degi", morning: "a\xF0 morgni", afternoon: "s\xED\xF0degis", evening: "um kv\xF6ld", night: "um n\xF3tt" }, abbreviated: { am: "f.h.", pm: "e.h.", midnight: "\xE1 mi\xF0n\xE6tti", noon: "\xE1 h\xE1degi", morning: "a\xF0 morgni", afternoon: "s\xED\xF0degis", evening: "um kv\xF6ld", night: "um n\xF3tt" }, wide: { am: "fyrir h\xE1degi", pm: "eftir h\xE1degi", midnight: "\xE1 mi\xF0n\xE6tti", noon: "\xE1 h\xE1degi", morning: "a\xF0 morgni", afternoon: "s\xED\xF0degis", evening: "um kv\xF6ld", night: "um n\xF3tt" } };
var j16 = (t8, i19) => Number(t8) + ".";
var l19 = { ordinalNumber: j16, era: c({ values: k28, defaultWidth: "wide" }), quarter: c({ values: v30, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: y34, defaultWidth: "wide" }), day: c({ values: P37, defaultWidth: "wide" }), dayPeriod: c({ values: w32, defaultWidth: "wide", formattingValues: M35, defaultFormattingWidth: "wide" }) };
var F34 = /^(\d+)(\.)?/i;
var x29 = /\d+(\.)?/i;
var K11 = { narrow: /^(f\.Kr\.|e\.Kr\.)/i, abbreviated: /^(f\.Kr\.|e\.Kr\.)/i, wide: /^(fyrir Krist|eftir Krist)/i };
var D30 = { any: [/^(f\.Kr\.)/i, /^(e\.Kr\.)/i] };
var H25 = { narrow: /^[1234]\.?/i, abbreviated: /^q[1234]\.?/i, wide: /^[1234]\.? fjórðungur/i };
var z32 = { any: [/1\.?/i, /2\.?/i, /3\.?/i, /4\.?/i] };
var L33 = { narrow: /^[jfmásónd]/i, abbreviated: /^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i, wide: /^(januar|febrúar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i };
var S33 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^á/i, /^s/i, /^ó/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maí/i, /^jún/i, /^júl/i, /^áu/i, /^s/i, /^ó/i, /^n/i, /^d/i] };
var V33 = { narrow: /^[smtwf]/i, short: /^(su|má|þr|mi|fi|fö|la)/i, abbreviated: /^(sun|mán|þri|mið|fim|fös|lau)\.?/i, wide: /^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i };
var X34 = { narrow: [/^s/i, /^m/i, /^þ/i, /^m/i, /^f/i, /^f/i, /^l/i], any: [/^su/i, /^má/i, /^þr/i, /^mi/i, /^fi/i, /^fö/i, /^la/i] };
var E32 = { narrow: /^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i, any: /^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i };
var N32 = { any: { am: /^f/i, pm: /^e/i, midnight: /^mi/i, noon: /^há/i, morning: /morgunn/i, afternoon: /síðdegi/i, evening: /kvöld/i, night: /nótt/i } };
var f30 = { ordinalNumber: h({ matchPattern: F34, parsePattern: x29, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: K11, defaultMatchWidth: "wide", parsePatterns: D30, defaultParseWidth: "any" }), quarter: P({ matchPatterns: H25, defaultMatchWidth: "wide", parsePatterns: z32, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: L33, defaultMatchWidth: "wide", parsePatterns: S33, defaultParseWidth: "any" }), day: P({ matchPatterns: V33, defaultMatchWidth: "wide", parsePatterns: X34, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: E32, defaultMatchWidth: "any", parsePatterns: N32, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/it/_lib/localize.mjs
var i8 = { narrow: ["aC", "dC"], abbreviated: ["a.C.", "d.C."], wide: ["avanti Cristo", "dopo Cristo"] };
var t6 = { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"] };
var a17 = { narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], abbreviated: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], wide: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"] };
var r14 = { narrow: ["D", "L", "M", "M", "G", "V", "S"], short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], wide: ["domenica", "luned\xEC", "marted\xEC", "mercoled\xEC", "gioved\xEC", "venerd\xEC", "sabato"] };
var m38 = { narrow: { am: "m.", pm: "p.", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte" }, abbreviated: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte" }, wide: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte" } };
var d20 = { narrow: { am: "m.", pm: "p.", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte" }, abbreviated: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte" }, wide: { am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte" } };
var g30 = (o36, s23) => {
  let n19 = Number(o36);
  return String(n19);
};
var u29 = { ordinalNumber: g30, era: c({ values: i8, defaultWidth: "wide" }), quarter: c({ values: t6, defaultWidth: "wide", argumentCallback: (o36) => o36 - 1 }), month: c({ values: a17, defaultWidth: "wide" }), day: c({ values: r14, defaultWidth: "wide" }), dayPeriod: c({ values: m38, defaultWidth: "wide", formattingValues: d20, defaultFormattingWidth: "wide" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/it/_lib/match.mjs
var e18 = /^(\d+)(º)?/i;
var r15 = /\d+/i;
var n8 = { narrow: /^(aC|dC)/i, abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i, wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i };
var o24 = { any: [/^a/i, /^(d|e)/i] };
var s17 = { narrow: /^[1234]/i, abbreviated: /^t[1234]/i, wide: /^[1234](º)? trimestre/i };
var d21 = { any: [/1/i, /2/i, /3/i, /4/i] };
var m39 = { narrow: /^[gfmalsond]/i, abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i, wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i };
var c32 = { narrow: [/^g/i, /^f/i, /^m/i, /^a/i, /^m/i, /^g/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ge/i, /^f/i, /^mar/i, /^ap/i, /^mag/i, /^gi/i, /^l/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var g31 = { narrow: /^[dlmgvs]/i, short: /^(do|lu|ma|me|gi|ve|sa)/i, abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i, wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i };
var l20 = { narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i], any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i] };
var h22 = { narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i, any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i };
var P38 = { any: { am: /^a/i, pm: /^p/i, midnight: /^mezza/i, noon: /^mezzo/i, morning: /mattina/i, afternoon: /pomeriggio/i, evening: /sera/i, night: /notte/i } };
var b31 = { ordinalNumber: h({ matchPattern: e18, parsePattern: r15, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: n8, defaultMatchWidth: "wide", parsePatterns: o24, defaultParseWidth: "any" }), quarter: P({ matchPatterns: s17, defaultMatchWidth: "wide", parsePatterns: d21, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: m39, defaultMatchWidth: "wide", parsePatterns: c32, defaultParseWidth: "any" }), day: P({ matchPatterns: g31, defaultMatchWidth: "wide", parsePatterns: l20, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: h22, defaultMatchWidth: "any", parsePatterns: P38, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/it-CH.mjs
var o25 = { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd.MM.y" };
var e19 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var a18 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m40 = { date: r2({ formats: o25, defaultWidth: "full" }), time: r2({ formats: e19, defaultWidth: "full" }), dateTime: r2({ formats: a18, defaultWidth: "full" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/it.mjs
var o26 = { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y" };
var e20 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var a19 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m41 = { date: r2({ formats: o26, defaultWidth: "full" }), time: r2({ formats: e20, defaultWidth: "full" }), dateTime: r2({ formats: a19, defaultWidth: "full" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ja-Hira.mjs
var f32 = { full: "y\u306D\u3093M\u304C\u3064d\u306B\u3061EEEE", long: "y\u306D\u3093M\u304C\u3064d\u306B\u3061", medium: "y/MM/dd", short: "y/MM/dd" };
var g32 = { full: "H\u3058mm\u3075\u3093ss\u3073\u3087\u3046 zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var p27 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m42 = { date: r2({ formats: f32, defaultWidth: "full" }), time: r2({ formats: g32, defaultWidth: "full" }), dateTime: r2({ formats: p27, defaultWidth: "full" }) };
var P39 = { narrow: ["BC", "AC"], abbreviated: ["\u304D\u3052\u3093\u305C\u3093", "\u305B\u3044\u308C\u304D"], wide: ["\u304D\u3052\u3093\u305C\u3093", "\u305B\u3044\u308C\u304D"] };
var w33 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["\u3060\u30441\u3057\u306F\u3093\u304D", "\u3060\u30442\u3057\u306F\u3093\u304D", "\u3060\u30443\u3057\u306F\u3093\u304D", "\u3060\u30444\u3057\u306F\u3093\u304D"] };
var y35 = { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["1\u304C\u3064", "2\u304C\u3064", "3\u304C\u3064", "4\u304C\u3064", "5\u304C\u3064", "6\u304C\u3064", "7\u304C\u3064", "8\u304C\u3064", "9\u304C\u3064", "10\u304C\u3064", "11\u304C\u3064", "12\u304C\u3064"], wide: ["1\u304C\u3064", "2\u304C\u3064", "3\u304C\u3064", "4\u304C\u3064", "5\u304C\u3064", "6\u304C\u3064", "7\u304C\u3064", "8\u304C\u3064", "9\u304C\u3064", "10\u304C\u3064", "11\u304C\u3064", "12\u304C\u3064"] };
var W27 = { narrow: ["\u306B\u3061", "\u3052\u3064", "\u304B", "\u3059\u3044", "\u3082\u304F", "\u304D\u3093", "\u3069"], short: ["\u306B\u3061", "\u3052\u3064", "\u304B", "\u3059\u3044", "\u3082\u304F", "\u304D\u3093", "\u3069"], abbreviated: ["\u306B\u3061", "\u3052\u3064", "\u304B", "\u3059\u3044", "\u3082\u304F", "\u304D\u3093", "\u3069"], wide: ["\u306B\u3061\u3088\u3046\u3073", "\u3052\u3064\u3088\u3046\u3073", "\u304B\u3088\u3046\u3073", "\u3059\u3044\u3088\u3046\u3073", "\u3082\u304F\u3088\u3046\u3073", "\u304D\u3093\u3088\u3046\u3073", "\u3069\u3088\u3046\u3073"] };
var v31 = { narrow: { am: "\u3054\u305C\u3093", pm: "\u3054\u3054", midnight: "\u3057\u3093\u3084", noon: "\u3057\u3087\u3046\u3054", morning: "\u3042\u3055", afternoon: "\u3054\u3054", evening: "\u3088\u308B", night: "\u3057\u3093\u3084" }, abbreviated: { am: "\u3054\u305C\u3093", pm: "\u3054\u3054", midnight: "\u3057\u3093\u3084", noon: "\u3057\u3087\u3046\u3054", morning: "\u3042\u3055", afternoon: "\u3054\u3054", evening: "\u3088\u308B", night: "\u3057\u3093\u3084" }, wide: { am: "\u3054\u305C\u3093", pm: "\u3054\u3054", midnight: "\u3057\u3093\u3084", noon: "\u3057\u3087\u3046\u3054", morning: "\u3042\u3055", afternoon: "\u3054\u3054", evening: "\u3088\u308B", night: "\u3057\u3093\u3084" } };
var x30 = { narrow: { am: "\u3054\u305C\u3093", pm: "\u3054\u3054", midnight: "\u3057\u3093\u3084", noon: "\u3057\u3087\u3046\u3054", morning: "\u3042\u3055", afternoon: "\u3054\u3054", evening: "\u3088\u308B", night: "\u3057\u3093\u3084" }, abbreviated: { am: "\u3054\u305C\u3093", pm: "\u3054\u3054", midnight: "\u3057\u3093\u3084", noon: "\u3057\u3087\u3046\u3054", morning: "\u3042\u3055", afternoon: "\u3054\u3054", evening: "\u3088\u308B", night: "\u3057\u3093\u3084" }, wide: { am: "\u3054\u305C\u3093", pm: "\u3054\u3054", midnight: "\u3057\u3093\u3084", noon: "\u3057\u3087\u3046\u3054", morning: "\u3042\u3055", afternoon: "\u3054\u3054", evening: "\u3088\u308B", night: "\u3057\u3093\u3084" } };
var M36 = (e30, r32) => {
  let t8 = Number(e30);
  switch (String(r32?.unit)) {
    case "year":
      return `${t8}\u306D\u3093`;
    case "quarter":
      return `\u3060\u3044${t8}\u3057\u306F\u3093\u304D`;
    case "month":
      return `${t8}\u304C\u3064`;
    case "week":
      return `\u3060\u3044${t8}\u3057\u3085\u3046`;
    case "date":
      return `${t8}\u306B\u3061`;
    case "hour":
      return `${t8}\u3058`;
    case "minute":
      return `${t8}\u3075\u3093`;
    case "second":
      return `${t8}\u3073\u3087\u3046`;
    default:
      return `${t8}`;
  }
};
var c33 = { ordinalNumber: M36, era: c({ values: P39, defaultWidth: "wide" }), quarter: c({ values: w33, defaultWidth: "wide", argumentCallback: (e30) => Number(e30) - 1 }), month: c({ values: y35, defaultWidth: "wide" }), day: c({ values: W27, defaultWidth: "wide" }), dayPeriod: c({ values: v31, defaultWidth: "wide", formattingValues: x30, defaultFormattingWidth: "wide" }) };
var D31 = /^だ?い?\d+(ねん|しはんき|がつ|しゅう|にち|じ|ふん|びょう)?/i;
var k29 = /\d+/i;
var z33 = { narrow: /^(B\.?C\.?|A\.?D\.?)/i, abbreviated: /^(きげん[前後]|せいれき)/i, wide: /^(きげん[前後]|せいれき)/i };
var F35 = { narrow: [/^B/i, /^A/i], any: [/^(きげんぜん)/i, /^(せいれき|きげんご)/i] };
var $3 = { narrow: /^[1234]/i, abbreviated: /^Q[1234]/i, wide: /^だい[1234一二三四１２３４]しはんき/i };
var H26 = { any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i] };
var V34 = { narrow: /^([123456789]|1[012])/, abbreviated: /^([123456789]|1[012])がつ/i, wide: /^([123456789]|1[012])がつ/i };
var X35 = { any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/] };
var C27 = { narrow: /^(にち|げつ|か|すい|もく|きん|ど)/, short: /^(にち|げつ|か|すい|もく|きん|ど)/, abbreviated: /^(にち|げつ|か|すい|もく|きん|ど)/, wide: /^(にち|げつ|か|すい|もく|きん|ど)ようび/ };
var L34 = { any: [/^にち/, /^げつ/, /^か/, /^すい/, /^もく/, /^きん/, /^ど/] };
var N33 = { any: /^(AM|PM|ごぜん|ごご|しょうご|しんや|まよなか|よる|あさ)/i };
var Q8 = { any: { am: /^(A|ごぜん)/i, pm: /^(P|ごご)/i, midnight: /^しんや|まよなか/i, noon: /^しょうご/i, morning: /^あさ/i, afternoon: /^ごご/i, evening: /^よる/i, night: /^しんや/i } };
var h23 = { ordinalNumber: h({ matchPattern: D31, parsePattern: k29, valueCallback: function(e30) {
  return parseInt(e30, 10);
} }), era: P({ matchPatterns: z33, defaultMatchWidth: "wide", parsePatterns: F35, defaultParseWidth: "any" }), quarter: P({ matchPatterns: $3, defaultMatchWidth: "wide", parsePatterns: H26, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: V34, defaultMatchWidth: "wide", parsePatterns: X35, defaultParseWidth: "any" }), day: P({ matchPatterns: C27, defaultMatchWidth: "wide", parsePatterns: L34, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: N33, defaultMatchWidth: "any", parsePatterns: Q8, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ja.mjs
var f33 = { full: "y\u5E74M\u6708d\u65E5EEEE", long: "y\u5E74M\u6708d\u65E5", medium: "y/MM/dd", short: "y/MM/dd" };
var g33 = { full: "H\u6642mm\u5206ss\u79D2 zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var p28 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m43 = { date: r2({ formats: f33, defaultWidth: "full" }), time: r2({ formats: g33, defaultWidth: "full" }), dateTime: r2({ formats: p28, defaultWidth: "full" }) };
var P40 = { narrow: ["BC", "AC"], abbreviated: ["\u7D00\u5143\u524D", "\u897F\u66A6"], wide: ["\u7D00\u5143\u524D", "\u897F\u66A6"] };
var w34 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["\u7B2C1\u56DB\u534A\u671F", "\u7B2C2\u56DB\u534A\u671F", "\u7B2C3\u56DB\u534A\u671F", "\u7B2C4\u56DB\u534A\u671F"] };
var y36 = { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], wide: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"] };
var W28 = { narrow: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"], short: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"], abbreviated: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"], wide: ["\u65E5\u66DC\u65E5", "\u6708\u66DC\u65E5", "\u706B\u66DC\u65E5", "\u6C34\u66DC\u65E5", "\u6728\u66DC\u65E5", "\u91D1\u66DC\u65E5", "\u571F\u66DC\u65E5"] };
var v32 = { narrow: { am: "\u5348\u524D", pm: "\u5348\u5F8C", midnight: "\u6DF1\u591C", noon: "\u6B63\u5348", morning: "\u671D", afternoon: "\u5348\u5F8C", evening: "\u591C", night: "\u6DF1\u591C" }, abbreviated: { am: "\u5348\u524D", pm: "\u5348\u5F8C", midnight: "\u6DF1\u591C", noon: "\u6B63\u5348", morning: "\u671D", afternoon: "\u5348\u5F8C", evening: "\u591C", night: "\u6DF1\u591C" }, wide: { am: "\u5348\u524D", pm: "\u5348\u5F8C", midnight: "\u6DF1\u591C", noon: "\u6B63\u5348", morning: "\u671D", afternoon: "\u5348\u5F8C", evening: "\u591C", night: "\u6DF1\u591C" } };
var x31 = { narrow: { am: "\u5348\u524D", pm: "\u5348\u5F8C", midnight: "\u6DF1\u591C", noon: "\u6B63\u5348", morning: "\u671D", afternoon: "\u5348\u5F8C", evening: "\u591C", night: "\u6DF1\u591C" }, abbreviated: { am: "\u5348\u524D", pm: "\u5348\u5F8C", midnight: "\u6DF1\u591C", noon: "\u6B63\u5348", morning: "\u671D", afternoon: "\u5348\u5F8C", evening: "\u591C", night: "\u6DF1\u591C" }, wide: { am: "\u5348\u524D", pm: "\u5348\u5F8C", midnight: "\u6DF1\u591C", noon: "\u6B63\u5348", morning: "\u671D", afternoon: "\u5348\u5F8C", evening: "\u591C", night: "\u6DF1\u591C" } };
var M37 = (e30, r32) => {
  let t8 = Number(e30);
  switch (String(r32?.unit)) {
    case "year":
      return `${t8}\u5E74`;
    case "quarter":
      return `\u7B2C${t8}\u56DB\u534A\u671F`;
    case "month":
      return `${t8}\u6708`;
    case "week":
      return `\u7B2C${t8}\u9031`;
    case "date":
      return `${t8}\u65E5`;
    case "hour":
      return `${t8}\u6642`;
    case "minute":
      return `${t8}\u5206`;
    case "second":
      return `${t8}\u79D2`;
    default:
      return `${t8}`;
  }
};
var c34 = { ordinalNumber: M37, era: c({ values: P40, defaultWidth: "wide" }), quarter: c({ values: w34, defaultWidth: "wide", argumentCallback: (e30) => Number(e30) - 1 }), month: c({ values: y36, defaultWidth: "wide" }), day: c({ values: W28, defaultWidth: "wide" }), dayPeriod: c({ values: v32, defaultWidth: "wide", formattingValues: x31, defaultFormattingWidth: "wide" }) };
var D32 = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i;
var k30 = /\d+/i;
var z34 = { narrow: /^(B\.?C\.?|A\.?D\.?)/i, abbreviated: /^(紀元[前後]|西暦)/i, wide: /^(紀元[前後]|西暦)/i };
var F36 = { narrow: [/^B/i, /^A/i], any: [/^(紀元前)/i, /^(西暦|紀元後)/i] };
var $4 = { narrow: /^[1234]/i, abbreviated: /^Q[1234]/i, wide: /^第[1234一二三四１２３４]四半期/i };
var V35 = { any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i] };
var X36 = { narrow: /^([123456789]|1[012])/, abbreviated: /^([123456789]|1[012])月/i, wide: /^([123456789]|1[012])月/i };
var C28 = { any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/] };
var L35 = { narrow: /^[日月火水木金土]/, short: /^[日月火水木金土]/, abbreviated: /^[日月火水木金土]/, wide: /^[日月火水木金土]曜日/ };
var N34 = { any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/] };
var Q9 = { any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i };
var A15 = { any: { am: /^(A|午前)/i, pm: /^(P|午後)/i, midnight: /^深夜|真夜中/i, noon: /^正午/i, morning: /^朝/i, afternoon: /^午後/i, evening: /^夜/i, night: /^深夜/i } };
var h24 = { ordinalNumber: h({ matchPattern: D32, parsePattern: k30, valueCallback: function(e30) {
  return parseInt(e30, 10);
} }), era: P({ matchPatterns: z34, defaultMatchWidth: "wide", parsePatterns: F36, defaultParseWidth: "any" }), quarter: P({ matchPatterns: $4, defaultMatchWidth: "wide", parsePatterns: V35, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: X36, defaultMatchWidth: "wide", parsePatterns: C28, defaultParseWidth: "any" }), day: P({ matchPatterns: L35, defaultMatchWidth: "wide", parsePatterns: N34, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: Q9, defaultMatchWidth: "any", parsePatterns: A15, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ka.mjs
var p29 = { full: "EEEE, do MMMM, y", long: "do, MMMM, y", medium: "d, MMM, y", short: "dd/MM/yyyy" };
var h25 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var g34 = { full: "{{date}} {{time}}'-\u10D6\u10D4'", long: "{{date}} {{time}}'-\u10D6\u10D4'", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m44 = { date: r2({ formats: p29, defaultWidth: "full" }), time: r2({ formats: h25, defaultWidth: "full" }), dateTime: r2({ formats: g34, defaultWidth: "full" }) };
var y37 = { narrow: ["\u10E9.\u10EC-\u10DB\u10D3\u10D4", "\u10E9.\u10EC"], abbreviated: ["\u10E9\u10D5.\u10EC-\u10DB\u10D3\u10D4", "\u10E9\u10D5.\u10EC"], wide: ["\u10E9\u10D5\u10D4\u10DC\u10E1 \u10EC\u10D4\u10DA\u10D7\u10D0\u10E6\u10E0\u10D8\u10EA\u10EE\u10D5\u10D0\u10DB\u10D3\u10D4", "\u10E9\u10D5\u10D4\u10DC\u10D8 \u10EC\u10D4\u10DA\u10D7\u10D0\u10E6\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8\u10D7"] };
var b32 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1-\u10DA\u10D8 \u10D9\u10D5", "2-\u10D4 \u10D9\u10D5", "3-\u10D4 \u10D9\u10D5", "4-\u10D4 \u10D9\u10D5"], wide: ["1-\u10DA\u10D8 \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8", "2-\u10D4 \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8", "3-\u10D4 \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8", "4-\u10D4 \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8"] };
var M38 = { narrow: ["\u10D8\u10D0", "\u10D7\u10D4", "\u10DB\u10D0", "\u10D0\u10DE", "\u10DB\u10E1", "\u10D5\u10DC", "\u10D5\u10DA", "\u10D0\u10D2", "\u10E1\u10D4", "\u10DD\u10E5", "\u10DC\u10DD", "\u10D3\u10D4"], abbreviated: ["\u10D8\u10D0\u10DC", "\u10D7\u10D4\u10D1", "\u10DB\u10D0\u10E0", "\u10D0\u10DE\u10E0", "\u10DB\u10D0\u10D8", "\u10D8\u10D5\u10DC", "\u10D8\u10D5\u10DA", "\u10D0\u10D2\u10D5", "\u10E1\u10D4\u10E5", "\u10DD\u10E5\u10E2", "\u10DC\u10DD\u10D4", "\u10D3\u10D4\u10D9"], wide: ["\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8", "\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8", "\u10DB\u10D0\u10E0\u10E2\u10D8", "\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8", "\u10DB\u10D0\u10D8\u10E1\u10D8", "\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8", "\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8", "\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD", "\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8"] };
var w35 = { narrow: ["\u10D9\u10D5", "\u10DD\u10E0", "\u10E1\u10D0", "\u10DD\u10D7", "\u10EE\u10E3", "\u10DE\u10D0", "\u10E8\u10D0"], short: ["\u10D9\u10D5\u10D8", "\u10DD\u10E0\u10E8", "\u10E1\u10D0\u10DB", "\u10DD\u10D7\u10EE", "\u10EE\u10E3\u10D7", "\u10DE\u10D0\u10E0", "\u10E8\u10D0\u10D1"], abbreviated: ["\u10D9\u10D5\u10D8", "\u10DD\u10E0\u10E8", "\u10E1\u10D0\u10DB", "\u10DD\u10D7\u10EE", "\u10EE\u10E3\u10D7", "\u10DE\u10D0\u10E0", "\u10E8\u10D0\u10D1"], wide: ["\u10D9\u10D5\u10D8\u10E0\u10D0", "\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8", "\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8"] };
var v33 = { narrow: { am: "a", pm: "p", midnight: "\u10E8\u10E3\u10D0\u10E6\u10D0\u10DB\u10D4", noon: "\u10E8\u10E3\u10D0\u10D3\u10E6\u10D4", morning: "\u10D3\u10D8\u10DA\u10D0", afternoon: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD", evening: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD", night: "\u10E6\u10D0\u10DB\u10D4" }, abbreviated: { am: "AM", pm: "PM", midnight: "\u10E8\u10E3\u10D0\u10E6\u10D0\u10DB\u10D4", noon: "\u10E8\u10E3\u10D0\u10D3\u10E6\u10D4", morning: "\u10D3\u10D8\u10DA\u10D0", afternoon: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD", evening: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD", night: "\u10E6\u10D0\u10DB\u10D4" }, wide: { am: "a.m.", pm: "p.m.", midnight: "\u10E8\u10E3\u10D0\u10E6\u10D0\u10DB\u10D4", noon: "\u10E8\u10E3\u10D0\u10D3\u10E6\u10D4", morning: "\u10D3\u10D8\u10DA\u10D0", afternoon: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD", evening: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD", night: "\u10E6\u10D0\u10DB\u10D4" } };
var W29 = { narrow: { am: "a", pm: "p", midnight: "\u10E8\u10E3\u10D0\u10E6\u10D0\u10DB\u10D8\u10D7", noon: "\u10E8\u10E3\u10D0\u10D3\u10E6\u10D8\u10E1\u10D0\u10E1", morning: "\u10D3\u10D8\u10DA\u10D8\u10D7", afternoon: "\u10DC\u10D0\u10E8\u10E3\u10D0\u10D3\u10E6\u10D4\u10D5\u10E1", evening: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD\u10E1", night: "\u10E6\u10D0\u10DB\u10D8\u10D7" }, abbreviated: { am: "AM", pm: "PM", midnight: "\u10E8\u10E3\u10D0\u10E6\u10D0\u10DB\u10D8\u10D7", noon: "\u10E8\u10E3\u10D0\u10D3\u10E6\u10D8\u10E1\u10D0\u10E1", morning: "\u10D3\u10D8\u10DA\u10D8\u10D7", afternoon: "\u10DC\u10D0\u10E8\u10E3\u10D0\u10D3\u10E6\u10D4\u10D5\u10E1", evening: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD\u10E1", night: "\u10E6\u10D0\u10DB\u10D8\u10D7" }, wide: { am: "a.m.", pm: "p.m.", midnight: "\u10E8\u10E3\u10D0\u10E6\u10D0\u10DB\u10D8\u10D7", noon: "\u10E8\u10E3\u10D0\u10D3\u10E6\u10D8\u10E1\u10D0\u10E1", morning: "\u10D3\u10D8\u10DA\u10D8\u10D7", afternoon: "\u10DC\u10D0\u10E8\u10E3\u10D0\u10D3\u10E6\u10D4\u10D5\u10E1", evening: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD\u10E1", night: "\u10E6\u10D0\u10DB\u10D8\u10D7" } };
var x32 = (t8) => {
  let e30 = Number(t8);
  return e30 === 1 ? e30 + "-\u10DA\u10D8" : e30 + "-\u10D4";
};
var d22 = { ordinalNumber: x32, era: c({ values: y37, defaultWidth: "wide" }), quarter: c({ values: b32, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: M38, defaultWidth: "wide" }), day: c({ values: w35, defaultWidth: "wide" }), dayPeriod: c({ values: v33, defaultWidth: "wide", formattingValues: W29, defaultFormattingWidth: "wide" }) };
var D33 = /^(\d+)(-ლი|-ე)?/i;
var z35 = /\d+/i;
var F37 = { narrow: /^(ჩვ?\.წ)/i, abbreviated: /^(ჩვ?\.წ)/i, wide: /^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე|ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i };
var S34 = { any: [/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე)/i, /^(ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i] };
var V36 = { narrow: /^[1234]/i, abbreviated: /^[1234]-(ლი|ე)? კვ/i, wide: /^[1234]-(ლი|ე)? კვარტალი/i };
var X37 = { any: [/1/i, /2/i, /3/i, /4/i] };
var L36 = { any: /^(ია|თე|მა|აპ|მს|ვნ|ვლ|აგ|სე|ოქ|ნო|დე)/i };
var E33 = { any: [/^ია/i, /^თ/i, /^მარ/i, /^აპ/i, /^მაი/i, /^ი?ვნ/i, /^ი?ვლ/i, /^აგ/i, /^ს/i, /^ო/i, /^ნ/i, /^დ/i] };
var N35 = { narrow: /^(კვ|ორ|სა|ოთ|ხუ|პა|შა)/i, short: /^(კვი|ორშ|სამ|ოთხ|ხუთ|პარ|შაბ)/i, wide: /^(კვირა|ორშაბათი|სამშაბათი|ოთხშაბათი|ხუთშაბათი|პარასკევი|შაბათი)/i };
var C29 = { any: [/^კვ/i, /^ორ/i, /^სა/i, /^ოთ/i, /^ხუ/i, /^პა/i, /^შა/i] };
var R21 = { any: /^([ap]\.?\s?m\.?|შუაღ|დილ)/i };
var T21 = { any: { am: /^a/i, pm: /^p/i, midnight: /^შუაღ/i, noon: /^შუადღ/i, morning: /^დილ/i, afternoon: /ნაშუადღევს/i, evening: /საღამო/i, night: /ღამ/i } };
var l21 = { ordinalNumber: h({ matchPattern: D33, parsePattern: z35, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: F37, defaultMatchWidth: "wide", parsePatterns: S34, defaultParseWidth: "any" }), quarter: P({ matchPatterns: V36, defaultMatchWidth: "wide", parsePatterns: X37, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: L36, defaultMatchWidth: "any", parsePatterns: E33, defaultParseWidth: "any" }), day: P({ matchPatterns: N35, defaultMatchWidth: "wide", parsePatterns: C29, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: R21, defaultMatchWidth: "any", parsePatterns: T21, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/kk.mjs
var w36 = { full: "EEEE, do MMMM y '\u0436.'", long: "do MMMM y '\u0436.'", medium: "d MMM y '\u0436.'", short: "dd.MM.yyyy" };
var P41 = { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var b33 = { any: "{{date}}, {{time}}" };
var d23 = { date: r2({ formats: w36, defaultWidth: "full" }), time: r2({ formats: P41, defaultWidth: "full" }), dateTime: r2({ formats: b33, defaultWidth: "any" }) };
var M39 = { narrow: ["\u0431.\u0437.\u0434.", "\u0431.\u0437."], abbreviated: ["\u0431.\u0437.\u0434.", "\u0431.\u0437."], wide: ["\u0431\u0456\u0437\u0434\u0456\u04A3 \u0437\u0430\u043C\u0430\u043D\u044B\u043C\u044B\u0437\u0493\u0430 \u0434\u0435\u0439\u0456\u043D", "\u0431\u0456\u0437\u0434\u0456\u04A3 \u0437\u0430\u043C\u0430\u043D\u044B\u043C\u044B\u0437"] };
var x33 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1-\u0448\u0456 \u0442\u043E\u049B.", "2-\u0448\u0456 \u0442\u043E\u049B.", "3-\u0448\u0456 \u0442\u043E\u049B.", "4-\u0448\u0456 \u0442\u043E\u049B."], wide: ["1-\u0448\u0456 \u0442\u043E\u049B\u0441\u0430\u043D", "2-\u0448\u0456 \u0442\u043E\u049B\u0441\u0430\u043D", "3-\u0448\u0456 \u0442\u043E\u049B\u0441\u0430\u043D", "4-\u0448\u0456 \u0442\u043E\u049B\u0441\u0430\u043D"] };
var D34 = { narrow: ["\u049A", "\u0410", "\u041D", "\u0421", "\u041C", "\u041C", "\u0428", "\u0422", "\u049A", "\u049A", "\u049A", "\u0416"], abbreviated: ["\u049B\u0430\u04A3", "\u0430\u049B\u043F", "\u043D\u0430\u0443", "\u0441\u04D9\u0443", "\u043C\u0430\u043C", "\u043C\u0430\u0443", "\u0448\u0456\u043B", "\u0442\u0430\u043C", "\u049B\u044B\u0440", "\u049B\u0430\u0437", "\u049B\u0430\u0440", "\u0436\u0435\u043B"], wide: ["\u049B\u0430\u04A3\u0442\u0430\u0440", "\u0430\u049B\u043F\u0430\u043D", "\u043D\u0430\u0443\u0440\u044B\u0437", "\u0441\u04D9\u0443\u0456\u0440", "\u043C\u0430\u043C\u044B\u0440", "\u043C\u0430\u0443\u0441\u044B\u043C", "\u0448\u0456\u043B\u0434\u0435", "\u0442\u0430\u043C\u044B\u0437", "\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A", "\u049B\u0430\u0437\u0430\u043D", "\u049B\u0430\u0440\u0430\u0448\u0430", "\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"] };
var F38 = { narrow: ["\u049A", "\u0410", "\u041D", "\u0421", "\u041C", "\u041C", "\u0428", "\u0422", "\u049A", "\u049A", "\u049A", "\u0416"], abbreviated: ["\u049B\u0430\u04A3", "\u0430\u049B\u043F", "\u043D\u0430\u0443", "\u0441\u04D9\u0443", "\u043C\u0430\u043C", "\u043C\u0430\u0443", "\u0448\u0456\u043B", "\u0442\u0430\u043C", "\u049B\u044B\u0440", "\u049B\u0430\u0437", "\u049B\u0430\u0440", "\u0436\u0435\u043B"], wide: ["\u049B\u0430\u04A3\u0442\u0430\u0440", "\u0430\u049B\u043F\u0430\u043D", "\u043D\u0430\u0443\u0440\u044B\u0437", "\u0441\u04D9\u0443\u0456\u0440", "\u043C\u0430\u043C\u044B\u0440", "\u043C\u0430\u0443\u0441\u044B\u043C", "\u0448\u0456\u043B\u0434\u0435", "\u0442\u0430\u043C\u044B\u0437", "\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A", "\u049B\u0430\u0437\u0430\u043D", "\u049B\u0430\u0440\u0430\u0448\u0430", "\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"] };
var S35 = { narrow: ["\u0416", "\u0414", "\u0421", "\u0421", "\u0411", "\u0416", "\u0421"], short: ["\u0436\u0441", "\u0434\u0441", "\u0441\u0441", "\u0441\u0440", "\u0431\u0441", "\u0436\u043C", "\u0441\u0431"], abbreviated: ["\u0436\u0441", "\u0434\u0441", "\u0441\u0441", "\u0441\u0440", "\u0431\u0441", "\u0436\u043C", "\u0441\u0431"], wide: ["\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456", "\u0434\u04AF\u0439\u0441\u0435\u043D\u0431\u0456", "\u0441\u0435\u0439\u0441\u0435\u043D\u0431\u0456", "\u0441\u04D9\u0440\u0441\u0435\u043D\u0431\u0456", "\u0431\u0435\u0439\u0441\u0435\u043D\u0431\u0456", "\u0436\u04B1\u043C\u0430", "\u0441\u0435\u043D\u0431\u0456"] };
var V37 = { narrow: { am: "\u0422\u0414", pm: "\u0422\u041A", midnight: "\u0442\u04AF\u043D \u043E\u0440\u0442\u0430\u0441\u044B", noon: "\u0442\u04AF\u0441", morning: "\u0442\u0430\u04A3", afternoon: "\u043A\u04AF\u043D\u0434\u0456\u0437", evening: "\u043A\u0435\u0448", night: "\u0442\u04AF\u043D" }, wide: { am: "\u0422\u0414", pm: "\u0422\u041A", midnight: "\u0442\u04AF\u043D \u043E\u0440\u0442\u0430\u0441\u044B", noon: "\u0442\u04AF\u0441", morning: "\u0442\u0430\u04A3", afternoon: "\u043A\u04AF\u043D\u0434\u0456\u0437", evening: "\u043A\u0435\u0448", night: "\u0442\u04AF\u043D" } };
var z36 = { narrow: { am: "\u0422\u0414", pm: "\u0422\u041A", midnight: "\u0442\u04AF\u043D \u043E\u0440\u0442\u0430\u0441\u044B\u043D\u0434\u0430", noon: "\u0442\u04AF\u0441", morning: "\u0442\u0430\u04A3", afternoon: "\u043A\u04AF\u043D", evening: "\u043A\u0435\u0448", night: "\u0442\u04AF\u043D" }, wide: { am: "\u0422\u0414", pm: "\u0422\u041A", midnight: "\u0442\u04AF\u043D \u043E\u0440\u0442\u0430\u0441\u044B\u043D\u0434\u0430", noon: "\u0442\u04AF\u0441\u0442\u0435", morning: "\u0442\u0430\u04A3\u0435\u0440\u0442\u0435\u04A3", afternoon: "\u043A\u04AF\u043D\u0434\u0456\u0437", evening: "\u043A\u0435\u0448\u0442\u0435", night: "\u0442\u04AF\u043D\u0434\u0435" } };
var c35 = { 0: "-\u0448\u0456", 1: "-\u0448\u0456", 2: "-\u0448\u0456", 3: "-\u0448\u0456", 4: "-\u0448\u0456", 5: "-\u0448\u0456", 6: "-\u0448\u044B", 7: "-\u0448\u0456", 8: "-\u0448\u0456", 9: "-\u0448\u044B", 10: "-\u0448\u044B", 20: "-\u0448\u044B", 30: "-\u0448\u044B", 40: "-\u0448\u044B", 50: "-\u0448\u0456", 60: "-\u0448\u044B", 70: "-\u0448\u0456", 80: "-\u0448\u0456", 90: "-\u0448\u044B", 100: "-\u0448\u0456" };
var X38 = (t8, i19) => {
  let n19 = Number(t8), e30 = n19 % 10, a33 = n19 >= 100 ? 100 : null, G15 = c35[n19] || c35[e30] || a33 && c35[a33] || "";
  return n19 + G15;
};
var p30 = { ordinalNumber: X38, era: c({ values: M39, defaultWidth: "wide" }), quarter: c({ values: x33, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: D34, defaultWidth: "wide", formattingValues: F38, defaultFormattingWidth: "wide" }), day: c({ values: S35, defaultWidth: "wide" }), dayPeriod: c({ values: V37, defaultWidth: "any", formattingValues: z36, defaultFormattingWidth: "wide" }) };
var E34 = /^(\d+)(-?(ші|шы))?/i;
var H27 = /\d+/i;
var C30 = { narrow: /^((б )?з\.?\s?д\.?)/i, abbreviated: /^((б )?з\.?\s?д\.?)/i, wide: /^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i };
var R22 = { any: [/^б/i, /^з/i] };
var T22 = { narrow: /^[1234]/i, abbreviated: /^[1234](-?ші)? тоқ.?/i, wide: /^[1234](-?ші)? тоқсан/i };
var Y10 = { any: [/1/i, /2/i, /3/i, /4/i] };
var q13 = { narrow: /^(қ|а|н|с|м|мау|ш|т|қыр|қаз|қар|ж)/i, abbreviated: /^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i, wide: /^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i };
var O11 = { narrow: [/^қ/i, /^а/i, /^н/i, /^с/i, /^м/i, /^м/i, /^ш/i, /^т/i, /^қ/i, /^қ/i, /^қ/i, /^ж/i], abbreviated: [/^қаң/i, /^ақп/i, /^нау/i, /^сәу/i, /^мам/i, /^мау/i, /^шіл/i, /^там/i, /^қыр/i, /^қаз/i, /^қар/i, /^жел/i], any: [/^қ/i, /^а/i, /^н/i, /^с/i, /^м/i, /^м/i, /^ш/i, /^т/i, /^қ/i, /^қ/i, /^қ/i, /^ж/i] };
var Q10 = { narrow: /^(ж|д|с|с|б|ж|с)/i, short: /^(жс|дс|сс|ср|бс|жм|сб)/i, wide: /^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i };
var A16 = { narrow: [/^ж/i, /^д/i, /^с/i, /^с/i, /^б/i, /^ж/i, /^с/i], short: [/^жс/i, /^дс/i, /^сс/i, /^ср/i, /^бс/i, /^жм/i, /^сб/i], any: [/^ж[ек]/i, /^д[үй]/i, /^сe[й]/i, /^сә[р]/i, /^б[ей]/i, /^ж[ұм]/i, /^се[н]/i] };
var I9 = { narrow: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i, wide: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i, any: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i };
var _6 = { any: { am: /^ТД/i, pm: /^ТК/i, midnight: /^түн орта/i, noon: /^күндіз/i, morning: /таң/i, afternoon: /түс/i, evening: /кеш/i, night: /түн/i } };
var h26 = { ordinalNumber: h({ matchPattern: E34, parsePattern: H27, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: C30, defaultMatchWidth: "wide", parsePatterns: R22, defaultParseWidth: "any" }), quarter: P({ matchPatterns: T22, defaultMatchWidth: "wide", parsePatterns: Y10, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: q13, defaultMatchWidth: "wide", parsePatterns: O11, defaultParseWidth: "any" }), day: P({ matchPatterns: Q10, defaultMatchWidth: "wide", parsePatterns: A16, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: I9, defaultMatchWidth: "wide", parsePatterns: _6, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/km.mjs
var f34 = { full: "EEEE do MMMM y", long: "do MMMM y", medium: "d MMM y", short: "dd/MM/yyyy" };
var p31 = { full: "h:mm:ss a", long: "h:mm:ss a", medium: "h:mm:ss a", short: "h:mm a" };
var g35 = { full: "{{date}} '\u1798\u17C9\u17C4\u1784' {{time}}", long: "{{date}} '\u1798\u17C9\u17C4\u1784' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var d24 = { date: r2({ formats: f34, defaultWidth: "full" }), time: r2({ formats: p31, defaultWidth: "full" }), dateTime: r2({ formats: g35, defaultWidth: "full" }) };
var P42 = { narrow: ["\u1798.\u1782\u179F", "\u1782\u179F"], abbreviated: ["\u1798\u17BB\u1793\u1782.\u179F", "\u1782.\u179F"], wide: ["\u1798\u17BB\u1793\u1782\u17D2\u179A\u17B7\u179F\u17D2\u178F\u179F\u1780\u179A\u17B6\u1787", "\u1793\u17C3\u1782\u17D2\u179A\u17B7\u179F\u17D2\u178F\u179F\u1780\u179A\u17B6\u1787"] };
var w37 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["\u178F\u17D2\u179A\u17B8\u1798\u17B6\u179F\u1791\u17B8 1", "\u178F\u17D2\u179A\u17B8\u1798\u17B6\u179F\u1791\u17B8 2", "\u178F\u17D2\u179A\u17B8\u1798\u17B6\u179F\u1791\u17B8 3", "\u178F\u17D2\u179A\u17B8\u1798\u17B6\u179F\u1791\u17B8 4"] };
var y38 = { narrow: ["\u1798.\u1780", "\u1780.\u1798", "\u1798\u17B7", "\u1798.\u179F", "\u17A7.\u179F", "\u1798.\u1790", "\u1780.\u178A", "\u179F\u17B8", "\u1780\u1789", "\u178F\u17BB", "\u179C\u17B7", "\u1792"], abbreviated: ["\u1798\u1780\u179A\u17B6", "\u1780\u17BB\u1798\u17D2\u1797\u17C8", "\u1798\u17B8\u1793\u17B6", "\u1798\u17C1\u179F\u17B6", "\u17A7\u179F\u1797\u17B6", "\u1798\u17B7\u1790\u17BB\u1793\u17B6", "\u1780\u1780\u17D2\u1780\u178A\u17B6", "\u179F\u17B8\u17A0\u17B6", "\u1780\u1789\u17D2\u1789\u17B6", "\u178F\u17BB\u179B\u17B6", "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6", "\u1792\u17D2\u1793\u17BC"], wide: ["\u1798\u1780\u179A\u17B6", "\u1780\u17BB\u1798\u17D2\u1797\u17C8", "\u1798\u17B8\u1793\u17B6", "\u1798\u17C1\u179F\u17B6", "\u17A7\u179F\u1797\u17B6", "\u1798\u17B7\u1790\u17BB\u1793\u17B6", "\u1780\u1780\u17D2\u1780\u178A\u17B6", "\u179F\u17B8\u17A0\u17B6", "\u1780\u1789\u17D2\u1789\u17B6", "\u178F\u17BB\u179B\u17B6", "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6", "\u1792\u17D2\u1793\u17BC"] };
var v34 = { narrow: ["\u17A2\u17B6", "\u1785", "\u17A2", "\u1796", "\u1796\u17D2\u179A", "\u179F\u17BB", "\u179F"], short: ["\u17A2\u17B6", "\u1785", "\u17A2", "\u1796", "\u1796\u17D2\u179A", "\u179F\u17BB", "\u179F"], abbreviated: ["\u17A2\u17B6", "\u1785", "\u17A2", "\u1796", "\u1796\u17D2\u179A", "\u179F\u17BB", "\u179F"], wide: ["\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799", "\u1785\u1793\u17D2\u1791", "\u17A2\u1784\u17D2\u1782\u17B6\u179A", "\u1796\u17BB\u1792", "\u1796\u17D2\u179A\u17A0\u179F\u17D2\u1794\u178F\u17B7\u17CD", "\u179F\u17BB\u1780\u17D2\u179A", "\u179F\u17C5\u179A\u17CD"] };
var M40 = { narrow: { am: "\u1796\u17D2\u179A\u17B9\u1780", pm: "\u179B\u17D2\u1784\u17B6\u1785", midnight: "\u200B\u1796\u17C1\u179B\u1780\u178E\u17D2\u178A\u17B6\u179B\u17A2\u1792\u17D2\u179A\u17B6\u178F\u17D2\u179A", noon: "\u1796\u17C1\u179B\u1790\u17D2\u1784\u17C3\u178F\u17D2\u179A\u1784\u17CB", morning: "\u1796\u17C1\u179B\u1796\u17D2\u179A\u17B9\u1780", afternoon: "\u1796\u17C1\u179B\u179A\u179F\u17C0\u179B", evening: "\u1796\u17C1\u179B\u179B\u17D2\u1784\u17B6\u1785", night: "\u1796\u17C1\u179B\u1799\u1794\u17CB" }, abbreviated: { am: "\u1796\u17D2\u179A\u17B9\u1780", pm: "\u179B\u17D2\u1784\u17B6\u1785", midnight: "\u200B\u1796\u17C1\u179B\u1780\u178E\u17D2\u178A\u17B6\u179B\u17A2\u1792\u17D2\u179A\u17B6\u178F\u17D2\u179A", noon: "\u1796\u17C1\u179B\u1790\u17D2\u1784\u17C3\u178F\u17D2\u179A\u1784\u17CB", morning: "\u1796\u17C1\u179B\u1796\u17D2\u179A\u17B9\u1780", afternoon: "\u1796\u17C1\u179B\u179A\u179F\u17C0\u179B", evening: "\u1796\u17C1\u179B\u179B\u17D2\u1784\u17B6\u1785", night: "\u1796\u17C1\u179B\u1799\u1794\u17CB" }, wide: { am: "\u1796\u17D2\u179A\u17B9\u1780", pm: "\u179B\u17D2\u1784\u17B6\u1785", midnight: "\u200B\u1796\u17C1\u179B\u1780\u178E\u17D2\u178A\u17B6\u179B\u17A2\u1792\u17D2\u179A\u17B6\u178F\u17D2\u179A", noon: "\u1796\u17C1\u179B\u1790\u17D2\u1784\u17C3\u178F\u17D2\u179A\u1784\u17CB", morning: "\u1796\u17C1\u179B\u1796\u17D2\u179A\u17B9\u1780", afternoon: "\u1796\u17C1\u179B\u179A\u179F\u17C0\u179B", evening: "\u1796\u17C1\u179B\u179B\u17D2\u1784\u17B6\u1785", night: "\u1796\u17C1\u179B\u1799\u1794\u17CB" } };
var W30 = { narrow: { am: "\u1796\u17D2\u179A\u17B9\u1780", pm: "\u179B\u17D2\u1784\u17B6\u1785", midnight: "\u200B\u1796\u17C1\u179B\u1780\u178E\u17D2\u178A\u17B6\u179B\u17A2\u1792\u17D2\u179A\u17B6\u178F\u17D2\u179A", noon: "\u1796\u17C1\u179B\u1790\u17D2\u1784\u17C3\u178F\u17D2\u179A\u1784\u17CB", morning: "\u1796\u17C1\u179B\u1796\u17D2\u179A\u17B9\u1780", afternoon: "\u1796\u17C1\u179B\u179A\u179F\u17C0\u179B", evening: "\u1796\u17C1\u179B\u179B\u17D2\u1784\u17B6\u1785", night: "\u1796\u17C1\u179B\u1799\u1794\u17CB" }, abbreviated: { am: "\u1796\u17D2\u179A\u17B9\u1780", pm: "\u179B\u17D2\u1784\u17B6\u1785", midnight: "\u200B\u1796\u17C1\u179B\u1780\u178E\u17D2\u178A\u17B6\u179B\u17A2\u1792\u17D2\u179A\u17B6\u178F\u17D2\u179A", noon: "\u1796\u17C1\u179B\u1790\u17D2\u1784\u17C3\u178F\u17D2\u179A\u1784\u17CB", morning: "\u1796\u17C1\u179B\u1796\u17D2\u179A\u17B9\u1780", afternoon: "\u1796\u17C1\u179B\u179A\u179F\u17C0\u179B", evening: "\u1796\u17C1\u179B\u179B\u17D2\u1784\u17B6\u1785", night: "\u1796\u17C1\u179B\u1799\u1794\u17CB" }, wide: { am: "\u1796\u17D2\u179A\u17B9\u1780", pm: "\u179B\u17D2\u1784\u17B6\u1785", midnight: "\u200B\u1796\u17C1\u179B\u1780\u178E\u17D2\u178A\u17B6\u179B\u17A2\u1792\u17D2\u179A\u17B6\u178F\u17D2\u179A", noon: "\u1796\u17C1\u179B\u1790\u17D2\u1784\u17C3\u178F\u17D2\u179A\u1784\u17CB", morning: "\u1796\u17C1\u179B\u1796\u17D2\u179A\u17B9\u1780", afternoon: "\u1796\u17C1\u179B\u179A\u179F\u17C0\u179B", evening: "\u1796\u17C1\u179B\u179B\u17D2\u1784\u17B6\u1785", night: "\u1796\u17C1\u179B\u1799\u1794\u17CB" } };
var x34 = (t8, r32) => Number(t8).toString();
var u30 = { ordinalNumber: x34, era: c({ values: P42, defaultWidth: "wide" }), quarter: c({ values: w37, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: y38, defaultWidth: "wide" }), day: c({ values: v34, defaultWidth: "wide" }), dayPeriod: c({ values: M40, defaultWidth: "wide", formattingValues: W30, defaultFormattingWidth: "wide" }) };
var D35 = /^(\d+)(th|st|nd|rd)?/i;
var F39 = /\d+/i;
var V38 = { narrow: /^(ម\.)?គស/i, abbreviated: /^(មុន)?គ\.ស/i, wide: /^(មុន|នៃ)គ្រិស្តសករាជ/i };
var X39 = { any: [/^(ម|មុន)គ\.?ស/i, /^(នៃ)?គ\.?ស/i] };
var L37 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^(ត្រីមាស)(ទី)?\s?[1234]/i };
var E35 = { any: [/1/i, /2/i, /3/i, /4/i] };
var Q11 = { narrow: /^(ម\.ក|ក\.ម|មិ|ម\.ស|ឧ\.ស|ម\.ថ|ក\.ដ|សី|កញ|តុ|វិ|ធ)/i, abbreviated: /^(មករា|កុម្ភៈ|មីនា|មេសា|ឧសភា|មិថុនា|កក្កដា|សីហា|កញ្ញា|តុលា|វិច្ឆិកា|ធ្នូ)/i, wide: /^(មករា|កុម្ភៈ|មីនា|មេសា|ឧសភា|មិថុនា|កក្កដា|សីហា|កញ្ញា|តុលា|វិច្ឆិកា|ធ្នូ)/i };
var S36 = { narrow: [/^ម\.ក/i, /^ក\.ម/i, /^មិ/i, /^ម\.ស/i, /^ឧ\.ស/i, /^ម\.ថ/i, /^ក\.ដ/i, /^សី/i, /^កញ/i, /^តុ/i, /^វិ/i, /^ធ/i], any: [/^មក/i, /^កុ/i, /^មីន/i, /^មេ/i, /^ឧស/i, /^មិថ/i, /^កក/i, /^សី/i, /^កញ/i, /^តុ/i, /^វិច/i, /^ធ/i] };
var N36 = { narrow: /^(អា|ច|អ|ព|ព្រ|សុ|ស)/i, short: /^(អា|ច|អ|ព|ព្រ|សុ|ស)/i, abbreviated: /^(អា|ច|អ|ព|ព្រ|សុ|ស)/i, wide: /^(អាទិត្យ|ចន្ទ|អង្គារ|ពុធ|ព្រហស្បតិ៍|សុក្រ|សៅរ៍)/i };
var q14 = { narrow: [/^អា/i, /^ច/i, /^អ/i, /^ព/i, /^ព្រ/i, /^សុ/i, /^ស/i], any: [/^អា/i, /^ច/i, /^អ/i, /^ព/i, /^ព្រ/i, /^សុ/i, /^សៅ/i] };
var z37 = { narrow: /^(ព្រឹក|ល្ងាច|ពេលព្រឹក|ពេលថ្ងៃត្រង់|ពេលល្ងាច|ពេលរសៀល|ពេលយប់|ពេលកណ្ដាលអធ្រាត្រ)/i, any: /^(ព្រឹក|ល្ងាច|ពេលព្រឹក|ពេលថ្ងៃត្រង់|ពេលល្ងាច|ពេលរសៀល|ពេលយប់|ពេលកណ្ដាលអធ្រាត្រ)/i };
var C31 = { any: { am: /^ព្រឹក/i, pm: /^ល្ងាច/i, midnight: /^ពេលកណ្ដាលអធ្រាត្រ/i, noon: /^ពេលថ្ងៃត្រង់/i, morning: /ពេលព្រឹក/i, afternoon: /ពេលរសៀល/i, evening: /ពេលល្ងាច/i, night: /ពេលយប់/i } };
var c36 = { ordinalNumber: h({ matchPattern: D35, parsePattern: F39, valueCallback: function(t8) {
  return parseInt(t8, 10);
} }), era: P({ matchPatterns: V38, defaultMatchWidth: "wide", parsePatterns: X39, defaultParseWidth: "any" }), quarter: P({ matchPatterns: L37, defaultMatchWidth: "wide", parsePatterns: E35, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: Q11, defaultMatchWidth: "wide", parsePatterns: S36, defaultParseWidth: "any" }), day: P({ matchPatterns: N36, defaultMatchWidth: "wide", parsePatterns: q14, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: z37, defaultMatchWidth: "any", parsePatterns: C31, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/kn.mjs
var p32 = { full: "EEEE, MMMM d, y", long: "MMMM d, y", medium: "MMM d, y", short: "d/M/yy" };
var g36 = { full: "hh:mm:ss a zzzz", long: "hh:mm:ss a z", medium: "hh:mm:ss a", short: "hh:mm a" };
var b34 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var f35 = { date: r2({ formats: p32, defaultWidth: "full" }), time: r2({ formats: g36, defaultWidth: "full" }), dateTime: r2({ formats: b34, defaultWidth: "full" }) };
var w38 = { narrow: ["\u0C95\u0CCD\u0CB0\u0CBF.\u0CAA\u0CC2", "\u0C95\u0CCD\u0CB0\u0CBF.\u0CB6"], abbreviated: ["\u0C95\u0CCD\u0CB0\u0CBF.\u0CAA\u0CC2", "\u0C95\u0CCD\u0CB0\u0CBF.\u0CB6"], wide: ["\u0C95\u0CCD\u0CB0\u0CBF\u0CB8\u0CCD\u0CA4 \u0CAA\u0CC2\u0CB0\u0CCD\u0CB5", "\u0C95\u0CCD\u0CB0\u0CBF\u0CB8\u0CCD\u0CA4 \u0CB6\u0C95"] };
var y39 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u0CA4\u0CCD\u0CB0\u0CC8 1", "\u0CA4\u0CCD\u0CB0\u0CC8 2", "\u0CA4\u0CCD\u0CB0\u0CC8 3", "\u0CA4\u0CCD\u0CB0\u0CC8 4"], wide: ["1\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95", "2\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95", "3\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95", "4\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95"] };
var v35 = { narrow: ["\u0C9C", "\u0CAB\u0CC6", "\u0CAE\u0CBE", "\u0C8F", "\u0CAE\u0CC7", "\u0C9C\u0CC2", "\u0C9C\u0CC1", "\u0C86", "\u0CB8\u0CC6", "\u0C85", "\u0CA8", "\u0CA1\u0CBF"], abbreviated: ["\u0C9C\u0CA8", "\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0", "\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD", "\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF", "\u0CAE\u0CC7", "\u0C9C\u0CC2\u0CA8\u0CCD", "\u0C9C\u0CC1\u0CB2\u0CC8", "\u0C86\u0C97", "\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82", "\u0C85\u0C95\u0CCD\u0C9F\u0CCB", "\u0CA8\u0CB5\u0CC6\u0C82", "\u0CA1\u0CBF\u0CB8\u0CC6\u0C82"], wide: ["\u0C9C\u0CA8\u0CB5\u0CB0\u0CBF", "\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0\u0CB5\u0CB0\u0CBF", "\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD", "\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF\u0CB2\u0CCD", "\u0CAE\u0CC7", "\u0C9C\u0CC2\u0CA8\u0CCD", "\u0C9C\u0CC1\u0CB2\u0CC8", "\u0C86\u0C97\u0CB8\u0CCD\u0C9F\u0CCD", "\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82\u0CAC\u0CB0\u0CCD", "\u0C85\u0C95\u0CCD\u0C9F\u0CCB\u0CAC\u0CB0\u0CCD", "\u0CA8\u0CB5\u0CC6\u0C82\u0CAC\u0CB0\u0CCD", "\u0CA1\u0CBF\u0CB8\u0CC6\u0C82\u0CAC\u0CB0\u0CCD"] };
var M41 = { narrow: ["\u0CAD\u0CBE", "\u0CB8\u0CCB", "\u0CAE\u0C82", "\u0CAC\u0CC1", "\u0C97\u0CC1", "\u0CB6\u0CC1", "\u0CB6"], short: ["\u0CAD\u0CBE\u0CA8\u0CC1", "\u0CB8\u0CCB\u0CAE", "\u0CAE\u0C82\u0C97\u0CB3", "\u0CAC\u0CC1\u0CA7", "\u0C97\u0CC1\u0CB0\u0CC1", "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0", "\u0CB6\u0CA8\u0CBF"], abbreviated: ["\u0CAD\u0CBE\u0CA8\u0CC1", "\u0CB8\u0CCB\u0CAE", "\u0CAE\u0C82\u0C97\u0CB3", "\u0CAC\u0CC1\u0CA7", "\u0C97\u0CC1\u0CB0\u0CC1", "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0", "\u0CB6\u0CA8\u0CBF"], wide: ["\u0CAD\u0CBE\u0CA8\u0CC1\u0CB5\u0CBE\u0CB0", "\u0CB8\u0CCB\u0CAE\u0CB5\u0CBE\u0CB0", "\u0CAE\u0C82\u0C97\u0CB3\u0CB5\u0CBE\u0CB0", "\u0CAC\u0CC1\u0CA7\u0CB5\u0CBE\u0CB0", "\u0C97\u0CC1\u0CB0\u0CC1\u0CB5\u0CBE\u0CB0", "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0\u0CB5\u0CBE\u0CB0", "\u0CB6\u0CA8\u0CBF\u0CB5\u0CBE\u0CB0"] };
var W31 = { narrow: { am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8", pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8", midnight: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF", noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CB9\u0CCD\u0CA8", morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6", afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CB9\u0CCD\u0CA8", evening: "\u0CB8\u0C82\u0C9C\u0CC6", night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF" }, abbreviated: { am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8", pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8", midnight: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF", noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9", morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6", afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9", evening: "\u0CB8\u0C82\u0C9C\u0CC6", night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF" }, wide: { am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8", pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8", midnight: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF", noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9", morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6", afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9", evening: "\u0CB8\u0C82\u0C9C\u0CC6", night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF" } };
var x35 = { narrow: { am: "\u0CAA\u0CC2", pm: "\u0C85", midnight: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF", noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9", morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6", afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9", evening: "\u0CB8\u0C82\u0C9C\u0CC6", night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF" }, abbreviated: { am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8", pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8", midnight: "\u0CAE\u0CA7\u0CCD\u0CAF \u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF", noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9", morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6", afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9", evening: "\u0CB8\u0C82\u0C9C\u0CC6", night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF" }, wide: { am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8", pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8", midnight: "\u0CAE\u0CA7\u0CCD\u0CAF \u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF", noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9", morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6", afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9", evening: "\u0CB8\u0C82\u0C9C\u0CC6", night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF" } };
var D36 = (t8, e30) => Number(t8) + "\u0CA8\u0CC7";
var l22 = { ordinalNumber: D36, era: c({ values: w38, defaultWidth: "wide" }), quarter: c({ values: y39, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: v35, defaultWidth: "wide" }), day: c({ values: M41, defaultWidth: "wide" }), dayPeriod: c({ values: W31, defaultWidth: "wide", formattingValues: x35, defaultFormattingWidth: "wide" }) };
var F40 = /^(\d+)(ನೇ|ನೆ)?/i;
var k31 = /\d+/i;
var V39 = { narrow: /^(ಕ್ರಿ.ಪೂ|ಕ್ರಿ.ಶ)/i, abbreviated: /^(ಕ್ರಿ\.?\s?ಪೂ\.?|ಕ್ರಿ\.?\s?ಶ\.?|ಪ್ರ\.?\s?ಶ\.?)/i, wide: /^(ಕ್ರಿಸ್ತ ಪೂರ್ವ|ಕ್ರಿಸ್ತ ಶಕ|ಪ್ರಸಕ್ತ ಶಕ)/i };
var L38 = { any: [/^ಪೂ/i, /^(ಶ|ಪ್ರ)/i] };
var X40 = { narrow: /^[1234]/i, abbreviated: /^ತ್ರೈ[1234]|ತ್ರೈ [1234]| [1234]ತ್ರೈ/i, wide: /^[1234](ನೇ)? ತ್ರೈಮಾಸಿಕ/i };
var E36 = { any: [/1/i, /2/i, /3/i, /4/i] };
var N37 = { narrow: /^(ಜೂ|ಜು|ಜ|ಫೆ|ಮಾ|ಏ|ಮೇ|ಆ|ಸೆ|ಅ|ನ|ಡಿ)/i, abbreviated: /^(ಜನ|ಫೆಬ್ರ|ಮಾರ್ಚ್|ಏಪ್ರಿ|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗ|ಸೆಪ್ಟೆಂ|ಅಕ್ಟೋ|ನವೆಂ|ಡಿಸೆಂ)/i, wide: /^(ಜನವರಿ|ಫೆಬ್ರವರಿ|ಮಾರ್ಚ್|ಏಪ್ರಿಲ್|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗಸ್ಟ್|ಸೆಪ್ಟೆಂಬರ್|ಅಕ್ಟೋಬರ್|ನವೆಂಬರ್|ಡಿಸೆಂಬರ್)/i };
var R23 = { narrow: [/^ಜ$/i, /^ಫೆ/i, /^ಮಾ/i, /^ಏ/i, /^ಮೇ/i, /^ಜೂ/i, /^ಜು$/i, /^ಆ/i, /^ಸೆ/i, /^ಅ/i, /^ನ/i, /^ಡಿ/i], any: [/^ಜನ/i, /^ಫೆ/i, /^ಮಾ/i, /^ಏ/i, /^ಮೇ/i, /^ಜೂನ್/i, /^ಜುಲೈ/i, /^ಆ/i, /^ಸೆ/i, /^ಅ/i, /^ನ/i, /^ಡಿ/i] };
var S37 = { narrow: /^(ಭಾ|ಸೋ|ಮ|ಬು|ಗು|ಶು|ಶ)/i, short: /^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i, abbreviated: /^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i, wide: /^(ಭಾನುವಾರ|ಸೋಮವಾರ|ಮಂಗಳವಾರ|ಬುಧವಾರ|ಗುರುವಾರ|ಶುಕ್ರವಾರ|ಶನಿವಾರ)/i };
var C32 = { narrow: [/^ಭಾ/i, /^ಸೋ/i, /^ಮ/i, /^ಬು/i, /^ಗು/i, /^ಶು/i, /^ಶ/i], any: [/^ಭಾ/i, /^ಸೋ/i, /^ಮ/i, /^ಬು/i, /^ಗು/i, /^ಶು/i, /^ಶ/i] };
var Y11 = { narrow: /^(ಪೂ|ಅ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i, any: /^(ಪೂರ್ವಾಹ್ನ|ಅಪರಾಹ್ನ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i };
var _7 = { any: { am: /^ಪೂ/i, pm: /^ಅ/i, midnight: /ಮಧ್ಯರಾತ್ರಿ/i, noon: /ಮಧ್ಯಾನ್ಹ/i, morning: /ಬೆಳಗ್ಗೆ/i, afternoon: /ಮಧ್ಯಾನ್ಹ/i, evening: /ಸಂಜೆ/i, night: /ರಾತ್ರಿ/i } };
var c37 = { ordinalNumber: h({ matchPattern: F40, parsePattern: k31, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: V39, defaultMatchWidth: "wide", parsePatterns: L38, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X40, defaultMatchWidth: "wide", parsePatterns: E36, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: N37, defaultMatchWidth: "wide", parsePatterns: R23, defaultParseWidth: "any" }), day: P({ matchPatterns: S37, defaultMatchWidth: "wide", parsePatterns: C32, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: Y11, defaultMatchWidth: "any", parsePatterns: _7, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ko.mjs
var f36 = { full: "y\uB144 M\uC6D4 d\uC77C EEEE", long: "y\uB144 M\uC6D4 d\uC77C", medium: "y.MM.dd", short: "y.MM.dd" };
var p33 = { full: "a H\uC2DC mm\uBD84 ss\uCD08 zzzz", long: "a H:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var b35 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m45 = { date: r2({ formats: f36, defaultWidth: "full" }), time: r2({ formats: p33, defaultWidth: "full" }), dateTime: r2({ formats: b35, defaultWidth: "full" }) };
var P43 = { narrow: ["BC", "AD"], abbreviated: ["BC", "AD"], wide: ["\uAE30\uC6D0\uC804", "\uC11C\uAE30"] };
var w39 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1\uBD84\uAE30", "2\uBD84\uAE30", "3\uBD84\uAE30", "4\uBD84\uAE30"] };
var y40 = { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"], wide: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"] };
var v36 = { narrow: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"], short: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"], abbreviated: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"], wide: ["\uC77C\uC694\uC77C", "\uC6D4\uC694\uC77C", "\uD654\uC694\uC77C", "\uC218\uC694\uC77C", "\uBAA9\uC694\uC77C", "\uAE08\uC694\uC77C", "\uD1A0\uC694\uC77C"] };
var W32 = { narrow: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" }, abbreviated: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" }, wide: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" } };
var M42 = { narrow: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" }, abbreviated: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" }, wide: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" } };
var x36 = (t8, n19) => {
  let e30 = Number(t8);
  switch (String(n19?.unit)) {
    case "minute":
    case "second":
      return String(e30);
    case "date":
      return e30 + "\uC77C";
    default:
      return e30 + "\uBC88\uC9F8";
  }
};
var u31 = { ordinalNumber: x36, era: c({ values: P43, defaultWidth: "wide" }), quarter: c({ values: w39, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: y40, defaultWidth: "wide" }), day: c({ values: v36, defaultWidth: "wide" }), dayPeriod: c({ values: W32, defaultWidth: "wide", formattingValues: M42, defaultFormattingWidth: "wide" }) };
var k32 = /^(\d+)(일|번째)?/i;
var z38 = /\d+/i;
var F41 = { narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(기원전|서기)/i };
var H28 = { any: [/^(bc|기원전)/i, /^(ad|서기)/i] };
var V40 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]사?분기/i };
var X41 = { any: [/1/i, /2/i, /3/i, /4/i] };
var L39 = { narrow: /^(1[012]|[123456789])/, abbreviated: /^(1[012]|[123456789])월/i, wide: /^(1[012]|[123456789])월/i };
var S38 = { any: [/^1월?$/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/] };
var C33 = { narrow: /^[일월화수목금토]/, short: /^[일월화수목금토]/, abbreviated: /^[일월화수목금토]/, wide: /^[일월화수목금토]요일/ };
var E37 = { any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/] };
var Q12 = { any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i };
var N38 = { any: { am: /^(am|오전)/i, pm: /^(pm|오후)/i, midnight: /^자정/i, noon: /^정오/i, morning: /^아침/i, afternoon: /^오후/i, evening: /^저녁/i, night: /^밤/i } };
var l23 = { ordinalNumber: h({ matchPattern: k32, parsePattern: z38, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: F41, defaultMatchWidth: "wide", parsePatterns: H28, defaultParseWidth: "any" }), quarter: P({ matchPatterns: V40, defaultMatchWidth: "wide", parsePatterns: X41, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: L39, defaultMatchWidth: "wide", parsePatterns: S38, defaultParseWidth: "any" }), day: P({ matchPatterns: C33, defaultMatchWidth: "wide", parsePatterns: E37, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: Q12, defaultMatchWidth: "any", parsePatterns: N38, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/lb.mjs
var P44 = { full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.yy" };
var v37 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var S39 = { full: "{{date}} 'um' {{time}}", long: "{{date}} 'um' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var h27 = { date: r2({ formats: P44, defaultWidth: "full" }), time: r2({ formats: v37, defaultWidth: "full" }), dateTime: r2({ formats: S39, defaultWidth: "full" }) };
var D37 = { narrow: ["v.Chr.", "n.Chr."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["viru Christus", "no Christus"] };
var W33 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"] };
var N39 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "M\xE4e", "Abr", "Mee", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], wide: ["Januar", "Februar", "M\xE4erz", "Abr\xEBll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] };
var J8 = { narrow: ["S", "M", "D", "M", "D", "F", "S"], short: ["So", "M\xE9", "D\xEB", "M\xEB", "Do", "Fr", "Sa"], abbreviated: ["So.", "M\xE9.", "D\xEB.", "M\xEB.", "Do.", "Fr.", "Sa."], wide: ["Sonndeg", "M\xE9indeg", "D\xEBnschdeg", "M\xEBttwoch", "Donneschdeg", "Freideg", "Samschdeg"] };
var k33 = { narrow: { am: "mo.", pm: "nom\xEB.", midnight: "M\xEBtternuecht", noon: "M\xEBtteg", morning: "Moien", afternoon: "Nom\xEBtteg", evening: "Owend", night: "Nuecht" }, abbreviated: { am: "moies", pm: "nom\xEBttes", midnight: "M\xEBtternuecht", noon: "M\xEBtteg", morning: "Moien", afternoon: "Nom\xEBtteg", evening: "Owend", night: "Nuecht" }, wide: { am: "moies", pm: "nom\xEBttes", midnight: "M\xEBtternuecht", noon: "M\xEBtteg", morning: "Moien", afternoon: "Nom\xEBtteg", evening: "Owend", night: "Nuecht" } };
var O12 = { narrow: { am: "mo.", pm: "nom.", midnight: "M\xEBtternuecht", noon: "m\xEBttes", morning: "moies", afternoon: "nom\xEBttes", evening: "owes", night: "nuets" }, abbreviated: { am: "moies", pm: "nom\xEBttes", midnight: "M\xEBtternuecht", noon: "m\xEBttes", morning: "moies", afternoon: "nom\xEBttes", evening: "owes", night: "nuets" }, wide: { am: "moies", pm: "nom\xEBttes", midnight: "M\xEBtternuecht", noon: "m\xEBttes", morning: "moies", afternoon: "nom\xEBttes", evening: "owes", night: "nuets" } };
var x37 = (e30, o36) => Number(e30) + ".";
var l24 = { ordinalNumber: x37, era: c({ values: D37, defaultWidth: "wide" }), quarter: c({ values: W33, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: N39, defaultWidth: "wide" }), day: c({ values: J8, defaultWidth: "wide" }), dayPeriod: c({ values: k33, defaultWidth: "wide", formattingValues: O12, defaultFormattingWidth: "wide" }) };
var F42 = /^(\d+)(\.)?/i;
var E38 = /\d+/i;
var z39 = { narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, wide: /^(viru Christus|virun eiser Zäitrechnung|no Christus|eiser Zäitrechnung)/i };
var j17 = { any: [/^v/i, /^n/i] };
var _8 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](\.)? Quartal/i };
var Q13 = { any: [/1/i, /2/i, /3/i, /4/i] };
var H29 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mäe|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i, wide: /^(januar|februar|mäerz|abrëll|mee|juni|juli|august|september|oktober|november|dezember)/i };
var L40 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mä/i, /^ab/i, /^me/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var T23 = { narrow: /^[smdf]/i, short: /^(so|mé|dë|më|do|fr|sa)/i, abbreviated: /^(son?|méi?|dën?|mët?|don?|fre?|sam?)\.?/i, wide: /^(sonndeg|méindeg|dënschdeg|mëttwoch|donneschdeg|freideg|samschdeg)/i };
var A17 = { any: [/^so/i, /^mé/i, /^dë/i, /^më/i, /^do/i, /^f/i, /^sa/i] };
var I10 = { narrow: /^(mo\.?|nomë\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i, abbreviated: /^(moi\.?|nomët\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i, wide: /^(moies|nomëttes|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i };
var V41 = { any: { am: /^m/i, pm: /^n/i, midnight: /^Mëtter/i, noon: /^mëttes/i, morning: /moies/i, afternoon: /nomëttes/i, evening: /owes/i, night: /nuets/i } };
var g37 = { ordinalNumber: h({ matchPattern: F42, parsePattern: E38, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: z39, defaultMatchWidth: "wide", parsePatterns: j17, defaultParseWidth: "any" }), quarter: P({ matchPatterns: _8, defaultMatchWidth: "wide", parsePatterns: Q13, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: H29, defaultMatchWidth: "wide", parsePatterns: L40, defaultParseWidth: "any" }), day: P({ matchPatterns: T23, defaultMatchWidth: "wide", parsePatterns: A17, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: I10, defaultMatchWidth: "wide", parsePatterns: V41, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/lt.mjs
var y41 = { full: "y 'm'. MMMM d 'd'., EEEE", long: "y 'm'. MMMM d 'd'.", medium: "y-MM-dd", short: "y-MM-dd" };
var x38 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var M43 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var f37 = { date: r2({ formats: y41, defaultWidth: "full" }), time: r2({ formats: x38, defaultWidth: "full" }), dateTime: r2({ formats: M43, defaultWidth: "full" }) };
var V42 = { narrow: ["pr. Kr.", "po Kr."], abbreviated: ["pr. Kr.", "po Kr."], wide: ["prie\u0161 Krist\u0173", "po Kristaus"] };
var S40 = { narrow: ["1", "2", "3", "4"], abbreviated: ["I ketv.", "II ketv.", "III ketv.", "IV ketv."], wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"] };
var K12 = { narrow: ["1", "2", "3", "4"], abbreviated: ["I k.", "II k.", "III k.", "IV k."], wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"] };
var L41 = { narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"], abbreviated: ["saus.", "vas.", "kov.", "bal.", "geg.", "bir\u017E.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."], wide: ["sausis", "vasaris", "kovas", "balandis", "gegu\u017E\u0117", "bir\u017Eelis", "liepa", "rugpj\u016Btis", "rugs\u0117jis", "spalis", "lapkritis", "gruodis"] };
var D38 = { narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"], abbreviated: ["saus.", "vas.", "kov.", "bal.", "geg.", "bir\u017E.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."], wide: ["sausio", "vasario", "kovo", "baland\u017Eio", "gegu\u017E\u0117s", "bir\u017Eelio", "liepos", "rugpj\u016B\u010Dio", "rugs\u0117jo", "spalio", "lapkri\u010Dio", "gruod\u017Eio"] };
var j18 = { narrow: ["S", "P", "A", "T", "K", "P", "\u0160"], short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "\u0160t"], abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "\u0161t"], wide: ["sekmadienis", "pirmadienis", "antradienis", "tre\u010Diadienis", "ketvirtadienis", "penktadienis", "\u0161e\u0161tadienis"] };
var F43 = { narrow: ["S", "P", "A", "T", "K", "P", "\u0160"], short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "\u0160t"], abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "\u0161t"], wide: ["sekmadien\u012F", "pirmadien\u012F", "antradien\u012F", "tre\u010Diadien\u012F", "ketvirtadien\u012F", "penktadien\u012F", "\u0161e\u0161tadien\u012F"] };
var H30 = { narrow: { am: "pr. p.", pm: "pop.", midnight: "vidurnaktis", noon: "vidurdienis", morning: "rytas", afternoon: "diena", evening: "vakaras", night: "naktis" }, abbreviated: { am: "prie\u0161piet", pm: "popiet", midnight: "vidurnaktis", noon: "vidurdienis", morning: "rytas", afternoon: "diena", evening: "vakaras", night: "naktis" }, wide: { am: "prie\u0161piet", pm: "popiet", midnight: "vidurnaktis", noon: "vidurdienis", morning: "rytas", afternoon: "diena", evening: "vakaras", night: "naktis" } };
var z40 = { narrow: { am: "pr. p.", pm: "pop.", midnight: "vidurnaktis", noon: "perpiet", morning: "rytas", afternoon: "popiet\u0117", evening: "vakaras", night: "naktis" }, abbreviated: { am: "prie\u0161piet", pm: "popiet", midnight: "vidurnaktis", noon: "perpiet", morning: "rytas", afternoon: "popiet\u0117", evening: "vakaras", night: "naktis" }, wide: { am: "prie\u0161piet", pm: "popiet", midnight: "vidurnaktis", noon: "perpiet", morning: "rytas", afternoon: "popiet\u0117", evening: "vakaras", night: "naktis" } };
var R24 = (e30, r32) => Number(e30) + "-oji";
var w40 = { ordinalNumber: R24, era: c({ values: V42, defaultWidth: "wide" }), quarter: c({ values: S40, defaultWidth: "wide", formattingValues: K12, defaultFormattingWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: L41, defaultWidth: "wide", formattingValues: D38, defaultFormattingWidth: "wide" }), day: c({ values: j18, defaultWidth: "wide", formattingValues: F43, defaultFormattingWidth: "wide" }), dayPeriod: c({ values: H30, defaultWidth: "wide", formattingValues: z40, defaultFormattingWidth: "wide" }) };
var X42 = /^(\d+)(-oji)?/i;
var C34 = /\d+/i;
var E39 = { narrow: /^p(r|o)\.?\s?(kr\.?|me)/i, abbreviated: /^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i, wide: /^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i };
var A18 = { wide: [/prieš/i, /(po|mūsų)/i], any: [/^pr/i, /^(po|m)/i] };
var N40 = { narrow: /^([1234])/i, abbreviated: /^(I|II|III|IV)\s?ketv?\.?/i, wide: /^(I|II|III|IV)\s?ketvirtis/i };
var B5 = { narrow: [/1/i, /2/i, /3/i, /4/i], any: [/I$/i, /II$/i, /III/i, /IV/i] };
var G7 = { narrow: /^[svkbglr]/i, abbreviated: /^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i, wide: /^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i };
var Y12 = { narrow: [/^s/i, /^v/i, /^k/i, /^b/i, /^g/i, /^b/i, /^l/i, /^r/i, /^r/i, /^s/i, /^l/i, /^g/i], any: [/^saus/i, /^vas/i, /^kov/i, /^bal/i, /^geg/i, /^birž/i, /^liep/i, /^rugp/i, /^rugs/i, /^spal/i, /^lapkr/i, /^gruod/i] };
var $5 = { narrow: /^[spatkš]/i, short: /^(sk|pr|an|tr|kt|pn|št)/i, abbreviated: /^(sk|pr|an|tr|kt|pn|št)/i, wide: /^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i };
var q15 = { narrow: [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^š/i], wide: [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^še/i], any: [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^št/i] };
var O13 = { narrow: /^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i, any: /^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i };
var Q14 = { narrow: { am: /^pr/i, pm: /^pop./i, midnight: /^vidurnaktis/i, noon: /^(vidurdienis|perp)/i, morning: /rytas/i, afternoon: /(die|popietė)/i, evening: /vakaras/i, night: /naktis/i }, any: { am: /^pr/i, pm: /^popiet$/i, midnight: /^vidurnaktis/i, noon: /^(vidurdienis|perp)/i, morning: /rytas/i, afternoon: /(die|popietė)/i, evening: /vakaras/i, night: /naktis/i } };
var I11 = { ordinalNumber: h({ matchPattern: X42, parsePattern: C34, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: E39, defaultMatchWidth: "wide", parsePatterns: A18, defaultParseWidth: "any" }), quarter: P({ matchPatterns: N40, defaultMatchWidth: "wide", parsePatterns: B5, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: G7, defaultMatchWidth: "wide", parsePatterns: Y12, defaultParseWidth: "any" }), day: P({ matchPatterns: $5, defaultMatchWidth: "wide", parsePatterns: q15, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: O13, defaultMatchWidth: "any", parsePatterns: Q14, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/lv.mjs
function a20(e30) {
  return (t8, i19) => {
    if (t8 === 1) return i19?.addSuffix ? e30.one[0].replace("{{time}}", e30.one[2]) : e30.one[0].replace("{{time}}", e30.one[1]);
    {
      let n19 = t8 % 10 === 1 && t8 % 100 !== 11;
      return i19?.addSuffix ? e30.other[0].replace("{{time}}", n19 ? e30.other[3] : e30.other[4]).replace("{{count}}", String(t8)) : e30.other[0].replace("{{time}}", n19 ? e30.other[1] : e30.other[2]).replace("{{count}}", String(t8));
    }
  };
}
var h28 = { lessThanXSeconds: a20({ one: ["maz\u0101k par {{time}}", "sekundi", "sekundi"], other: ["maz\u0101k nek\u0101 {{count}} {{time}}", "sekunde", "sekundes", "sekundes", "sekund\u0113m"] }), xSeconds: a20({ one: ["1 {{time}}", "sekunde", "sekundes"], other: ["{{count}} {{time}}", "sekunde", "sekundes", "sekundes", "sekund\u0113m"] }), halfAMinute: (e30, t8) => t8?.addSuffix ? "pusmin\u016Btes" : "pusmin\u016Bte", lessThanXMinutes: a20({ one: ["maz\u0101k par {{time}}", "min\u016Bti", "min\u016Bti"], other: ["maz\u0101k nek\u0101 {{count}} {{time}}", "min\u016Bte", "min\u016Btes", "min\u016Btes", "min\u016Bt\u0113m"] }), xMinutes: a20({ one: ["1 {{time}}", "min\u016Bte", "min\u016Btes"], other: ["{{count}} {{time}}", "min\u016Bte", "min\u016Btes", "min\u016Btes", "min\u016Bt\u0113m"] }), aboutXHours: a20({ one: ["apm\u0113ram 1 {{time}}", "stunda", "stundas"], other: ["apm\u0113ram {{count}} {{time}}", "stunda", "stundas", "stundas", "stund\u0101m"] }), xHours: a20({ one: ["1 {{time}}", "stunda", "stundas"], other: ["{{count}} {{time}}", "stunda", "stundas", "stundas", "stund\u0101m"] }), xDays: a20({ one: ["1 {{time}}", "diena", "dienas"], other: ["{{count}} {{time}}", "diena", "dienas", "dienas", "dien\u0101m"] }), aboutXWeeks: a20({ one: ["apm\u0113ram 1 {{time}}", "ned\u0113\u013Ca", "ned\u0113\u013Cas"], other: ["apm\u0113ram {{count}} {{time}}", "ned\u0113\u013Ca", "ned\u0113\u013Cu", "ned\u0113\u013Cas", "ned\u0113\u013C\u0101m"] }), xWeeks: a20({ one: ["1 {{time}}", "ned\u0113\u013Ca", "ned\u0113\u013Cas"], other: ["{{count}} {{time}}", "ned\u0113\u013Ca", "ned\u0113\u013Cu", "ned\u0113\u013Cas", "ned\u0113\u013C\u0101m"] }), aboutXMonths: a20({ one: ["apm\u0113ram 1 {{time}}", "m\u0113nesis", "m\u0113ne\u0161a"], other: ["apm\u0113ram {{count}} {{time}}", "m\u0113nesis", "m\u0113ne\u0161i", "m\u0113ne\u0161a", "m\u0113ne\u0161iem"] }), xMonths: a20({ one: ["1 {{time}}", "m\u0113nesis", "m\u0113ne\u0161a"], other: ["{{count}} {{time}}", "m\u0113nesis", "m\u0113ne\u0161i", "m\u0113ne\u0161a", "m\u0113ne\u0161iem"] }), aboutXYears: a20({ one: ["apm\u0113ram 1 {{time}}", "gads", "gada"], other: ["apm\u0113ram {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"] }), xYears: a20({ one: ["1 {{time}}", "gads", "gada"], other: ["{{count}} {{time}}", "gads", "gadi", "gada", "gadiem"] }), overXYears: a20({ one: ["ilg\u0101k par 1 {{time}}", "gadu", "gadu"], other: ["vair\u0101k nek\u0101 {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"] }), almostXYears: a20({ one: ["gandr\u012Bz 1 {{time}}", "gads", "gada"], other: ["vair\u0101k nek\u0101 {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"] }) };
var g38 = { full: "EEEE, y. 'gada' d. MMMM", long: "y. 'gada' d. MMMM", medium: "dd.MM.y.", short: "dd.MM.y." };
var v38 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var b36 = { full: "{{date}} 'plkst.' {{time}}", long: "{{date}} 'plkst.' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var u32 = { date: r2({ formats: g38, defaultWidth: "full" }), time: r2({ formats: v38, defaultWidth: "full" }), dateTime: r2({ formats: b36, defaultWidth: "full" }) };
var j19 = { narrow: ["p.m.\u0113", "m.\u0113"], abbreviated: ["p. m. \u0113.", "m. \u0113."], wide: ["pirms m\u016Bsu \u0113ras", "m\u016Bsu \u0113r\u0101"] };
var P45 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."], wide: ["pirmais ceturksnis", "otrais ceturksnis", "tre\u0161ais ceturksnis", "ceturtais ceturksnis"] };
var y42 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."], wide: ["pirmaj\u0101 ceturksn\u012B", "otraj\u0101 ceturksn\u012B", "tre\u0161aj\u0101 ceturksn\u012B", "ceturtaj\u0101 ceturksn\u012B"] };
var M44 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["janv.", "febr.", "marts", "apr.", "maijs", "j\u016Bn.", "j\u016Bl.", "aug.", "sept.", "okt.", "nov.", "dec."], wide: ["janv\u0101ris", "febru\u0101ris", "marts", "apr\u012Blis", "maijs", "j\u016Bnijs", "j\u016Blijs", "augusts", "septembris", "oktobris", "novembris", "decembris"] };
var W34 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["janv.", "febr.", "mart\u0101", "apr.", "maijs", "j\u016Bn.", "j\u016Bl.", "aug.", "sept.", "okt.", "nov.", "dec."], wide: ["janv\u0101r\u012B", "febru\u0101r\u012B", "mart\u0101", "apr\u012Bl\u012B", "maij\u0101", "j\u016Bnij\u0101", "j\u016Blij\u0101", "august\u0101", "septembr\u012B", "oktobr\u012B", "novembr\u012B", "decembr\u012B"] };
var S41 = { narrow: ["S", "P", "O", "T", "C", "P", "S"], short: ["Sv", "P", "O", "T", "C", "Pk", "S"], abbreviated: ["sv\u0113td.", "pirmd.", "otrd.", "tre\u0161d.", "ceturtd.", "piektd.", "sestd."], wide: ["sv\u0113tdiena", "pirmdiena", "otrdiena", "tre\u0161diena", "ceturtdiena", "piektdiena", "sestdiena"] };
var x39 = { narrow: ["S", "P", "O", "T", "C", "P", "S"], short: ["Sv", "P", "O", "T", "C", "Pk", "S"], abbreviated: ["sv\u0113td.", "pirmd.", "otrd.", "tre\u0161d.", "ceturtd.", "piektd.", "sestd."], wide: ["sv\u0113tdien\u0101", "pirmdien\u0101", "otrdien\u0101", "tre\u0161dien\u0101", "ceturtdien\u0101", "piektdien\u0101", "sestdien\u0101"] };
var D39 = { narrow: { am: "am", pm: "pm", midnight: "pusn.", noon: "pusd.", morning: "r\u012Bts", afternoon: "diena", evening: "vakars", night: "nakts" }, abbreviated: { am: "am", pm: "pm", midnight: "pusn.", noon: "pusd.", morning: "r\u012Bts", afternoon: "p\u0113cpusd.", evening: "vakars", night: "nakts" }, wide: { am: "am", pm: "pm", midnight: "pusnakts", noon: "pusdienlaiks", morning: "r\u012Bts", afternoon: "p\u0113cpusdiena", evening: "vakars", night: "nakts" } };
var z41 = { narrow: { am: "am", pm: "pm", midnight: "pusn.", noon: "pusd.", morning: "r\u012Bt\u0101", afternoon: "dien\u0101", evening: "vakar\u0101", night: "nakt\u012B" }, abbreviated: { am: "am", pm: "pm", midnight: "pusn.", noon: "pusd.", morning: "r\u012Bt\u0101", afternoon: "p\u0113cpusd.", evening: "vakar\u0101", night: "nakt\u012B" }, wide: { am: "am", pm: "pm", midnight: "pusnakt\u012B", noon: "pusdienlaik\u0101", morning: "r\u012Bt\u0101", afternoon: "p\u0113cpusdien\u0101", evening: "vakar\u0101", night: "nakt\u012B" } };
var F44 = (e30, t8) => Number(e30) + ".";
var f38 = { ordinalNumber: F44, era: c({ values: j19, defaultWidth: "wide" }), quarter: c({ values: P45, defaultWidth: "wide", formattingValues: y42, defaultFormattingWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: M44, defaultWidth: "wide", formattingValues: W34, defaultFormattingWidth: "wide" }), day: c({ values: S41, defaultWidth: "wide", formattingValues: x39, defaultFormattingWidth: "wide" }), dayPeriod: c({ values: D39, defaultWidth: "wide", formattingValues: z41, defaultFormattingWidth: "wide" }) };
var H31 = /^(\d+)\./i;
var O14 = /\d+/i;
var T24 = { narrow: /^(p\.m\.ē|m\.ē)/i, abbreviated: /^(p\. m\. ē\.|m\. ē\.)/i, wide: /^(pirms mūsu ēras|mūsu ērā)/i };
var C35 = { any: [/^p/i, /^m/i] };
var L42 = { narrow: /^[1234]/i, abbreviated: /^[1234](\. cet\.)/i, wide: /^(pirma(is|jā)|otra(is|jā)|treša(is|jā)|ceturta(is|jā)) ceturksn(is|ī)/i };
var N41 = { narrow: [/^1/i, /^2/i, /^3/i, /^4/i], abbreviated: [/^1/i, /^2/i, /^3/i, /^4/i], wide: [/^p/i, /^o/i, /^t/i, /^c/i] };
var X43 = { narrow: /^[jfmasond]/i, abbreviated: /^(janv\.|febr\.|marts|apr\.|maijs|jūn\.|jūl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i, wide: /^(janvār(is|ī)|februār(is|ī)|mart[sā]|aprīl(is|ī)|maij[sā]|jūnij[sā]|jūlij[sā]|august[sā]|septembr(is|ī)|oktobr(is|ī)|novembr(is|ī)|decembr(is|ī))/i };
var E40 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jūn/i, /^jūl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var J9 = { narrow: /^[spotc]/i, short: /^(sv|pi|o|t|c|pk|s)/i, abbreviated: /^(svētd\.|pirmd\.|otrd.\|trešd\.|ceturtd\.|piektd\.|sestd\.)/i, wide: /^(svētdien(a|ā)|pirmdien(a|ā)|otrdien(a|ā)|trešdien(a|ā)|ceturtdien(a|ā)|piektdien(a|ā)|sestdien(a|ā))/i };
var A19 = { narrow: [/^s/i, /^p/i, /^o/i, /^t/i, /^c/i, /^p/i, /^s/i], any: [/^sv/i, /^pi/i, /^o/i, /^t/i, /^c/i, /^p/i, /^se/i] };
var R25 = { narrow: /^(am|pm|pusn\.|pusd\.|rīt(s|ā)|dien(a|ā)|vakar(s|ā)|nakt(s|ī))/, abbreviated: /^(am|pm|pusn\.|pusd\.|rīt(s|ā)|pēcpusd\.|vakar(s|ā)|nakt(s|ī))/, wide: /^(am|pm|pusnakt(s|ī)|pusdienlaik(s|ā)|rīt(s|ā)|pēcpusdien(a|ā)|vakar(s|ā)|nakt(s|ī))/i };
var Y13 = { any: { am: /^am/i, pm: /^pm/i, midnight: /^pusn/i, noon: /^pusd/i, morning: /^r/i, afternoon: /^(d|pēc)/i, evening: /^v/i, night: /^n/i } };
var k34 = { ordinalNumber: h({ matchPattern: H31, parsePattern: O14, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: T24, defaultMatchWidth: "wide", parsePatterns: C35, defaultParseWidth: "any" }), quarter: P({ matchPatterns: L42, defaultMatchWidth: "wide", parsePatterns: N41, defaultParseWidth: "wide", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: X43, defaultMatchWidth: "wide", parsePatterns: E40, defaultParseWidth: "any" }), day: P({ matchPatterns: J9, defaultMatchWidth: "wide", parsePatterns: A19, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: R25, defaultMatchWidth: "wide", parsePatterns: Y13, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/mk.mjs
var P46 = { full: "EEEE, dd MMMM yyyy", long: "dd MMMM yyyy", medium: "dd MMM yyyy", short: "dd/MM/yyyy" };
var w41 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "H:mm" };
var b37 = { any: "{{date}} {{time}}" };
var u33 = { date: r2({ formats: P46, defaultWidth: "full" }), time: r2({ formats: w41, defaultWidth: "full" }), dateTime: r2({ formats: b37, defaultWidth: "any" }) };
var k35 = { narrow: ["\u043F\u0440.\u043D.\u0435.", "\u043D.\u0435."], abbreviated: ["\u043F\u0440\u0435\u0434 \u043D. \u0435.", "\u043D. \u0435."], wide: ["\u043F\u0440\u0435\u0434 \u043D\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430", "\u043D\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430"] };
var g39 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1-\u0432\u0438 \u043A\u0432.", "2-\u0440\u0438 \u043A\u0432.", "3-\u0442\u0438 \u043A\u0432.", "4-\u0442\u0438 \u043A\u0432."], wide: ["1-\u0432\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0440\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0442\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u0442\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"] };
var x40 = { abbreviated: ["\u0458\u0430\u043D", "\u0444\u0435\u0432", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043F\u0442", "\u043E\u043A\u0442", "\u043D\u043E\u0435\u043C", "\u0434\u0435\u043A"], wide: ["\u0458\u0430\u043D\u0443\u0430\u0440\u0438", "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0458", "\u0458\u0443\u043D\u0438", "\u0458\u0443\u043B\u0438", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438", "\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438", "\u043D\u043E\u0435\u043C\u0432\u0440\u0438", "\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438"] };
var D40 = { narrow: ["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"], short: ["\u043D\u0435", "\u043F\u043E", "\u0432\u0442", "\u0441\u0440", "\u0447\u0435", "\u043F\u0435", "\u0441\u0430"], abbreviated: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0432\u0442\u043E", "\u0441\u0440\u0435", "\u0447\u0435\u0442", "\u043F\u0435\u0442", "\u0441\u0430\u0431"], wide: ["\u043D\u0435\u0434\u0435\u043B\u0430", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0440\u0442\u043E\u043A", "\u043F\u0435\u0442\u043E\u043A", "\u0441\u0430\u0431\u043E\u0442\u0430"] };
var z42 = { wide: { am: "\u043F\u0440\u0435\u0442\u043F\u043B\u0430\u0434\u043D\u0435", pm: "\u043F\u043E\u043F\u043B\u0430\u0434\u043D\u0435", midnight: "\u043F\u043E\u043B\u043D\u043E\u045C", noon: "\u043D\u0430\u043F\u043B\u0430\u0434\u043D\u0435", morning: "\u043D\u0430\u0443\u0442\u0440\u043E", afternoon: "\u043F\u043E\u043F\u043B\u0430\u0434\u043D\u0435", evening: "\u043D\u0430\u0432\u0435\u0447\u0435\u0440", night: "\u043D\u043E\u045C\u0435" } };
var H32 = (t8, e30) => {
  let r32 = Number(t8), a33 = r32 % 100;
  if (a33 > 20 || a33 < 10) switch (a33 % 10) {
    case 1:
      return r32 + "-\u0432\u0438";
    case 2:
      return r32 + "-\u0440\u0438";
    case 7:
    case 8:
      return r32 + "-\u043C\u0438";
  }
  return r32 + "-\u0442\u0438";
};
var f39 = { ordinalNumber: H32, era: c({ values: k35, defaultWidth: "wide" }), quarter: c({ values: g39, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: x40, defaultWidth: "wide" }), day: c({ values: D40, defaultWidth: "wide" }), dayPeriod: c({ values: z42, defaultWidth: "wide" }) };
var X44 = /^(\d+)(-?[врмт][и])?/i;
var L43 = /\d+/i;
var E41 = { narrow: /^((пр)?н\.?\s?е\.?)/i, abbreviated: /^((пр)?н\.?\s?е\.?)/i, wide: /^(пред нашата ера|нашата ера)/i };
var S42 = { any: [/^п/i, /^н/i] };
var V43 = { narrow: /^[1234]/i, abbreviated: /^[1234](-?[врт]?и?)? кв.?/i, wide: /^[1234](-?[врт]?и?)? квартал/i };
var N42 = { any: [/1/i, /2/i, /3/i, /4/i] };
var C36 = { narrow: /^[нпвсч]/i, short: /^(не|по|вт|ср|че|пе|са)/i, abbreviated: /^(нед|пон|вто|сре|чет|пет|саб)/i, wide: /^(недела|понеделник|вторник|среда|четврток|петок|сабота)/i };
var R26 = { narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i], any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[аб]/i] };
var T25 = { abbreviated: /^(јан|фев|мар|апр|мај|јун|јул|авг|сеп|окт|ноем|дек)/i, wide: /^(јануари|февруари|март|април|мај|јуни|јули|август|септември|октомври|ноември|декември)/i };
var Y14 = { any: [/^ја/i, /^Ф/i, /^мар/i, /^ап/i, /^мај/i, /^јун/i, /^јул/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i] };
var q16 = { any: /^(претп|попл|полноќ|утро|пладне|вечер|ноќ)/i };
var O15 = { any: { am: /претпладне/i, pm: /попладне/i, midnight: /полноќ/i, noon: /напладне/i, morning: /наутро/i, afternoon: /попладне/i, evening: /навечер/i, night: /ноќе/i } };
var y43 = { ordinalNumber: h({ matchPattern: X44, parsePattern: L43, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: E41, defaultMatchWidth: "wide", parsePatterns: S42, defaultParseWidth: "any" }), quarter: P({ matchPatterns: V43, defaultMatchWidth: "wide", parsePatterns: N42, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: T25, defaultMatchWidth: "wide", parsePatterns: Y14, defaultParseWidth: "any" }), day: P({ matchPatterns: C36, defaultMatchWidth: "wide", parsePatterns: R26, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: q16, defaultMatchWidth: "any", parsePatterns: O15, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/mn.mjs
var b38 = { full: "y '\u043E\u043D\u044B' MMMM'\u044B\u043D' d, EEEE '\u0433\u0430\u0440\u0430\u0433'", long: "y '\u043E\u043D\u044B' MMMM'\u044B\u043D' d", medium: "y '\u043E\u043D\u044B' MMM'\u044B\u043D' d", short: "y.MM.dd" };
var p34 = { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var w42 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var l25 = { date: r2({ formats: b38, defaultWidth: "full" }), time: r2({ formats: p34, defaultWidth: "full" }), dateTime: r2({ formats: w42, defaultWidth: "full" }) };
var P47 = { narrow: ["\u041D\u0422\u04E8", "\u041D\u0422"], abbreviated: ["\u041D\u0422\u04E8", "\u041D\u0422"], wide: ["\u043D\u0438\u0439\u0442\u0438\u0439\u043D \u0442\u043E\u043E\u043B\u043B\u044B\u043D \u04E9\u043C\u043D\u04E9\u0445", "\u043D\u0438\u0439\u0442\u0438\u0439\u043D \u0442\u043E\u043E\u043B\u043B\u044B\u043D"] };
var g40 = { narrow: ["I", "II", "III", "IV"], abbreviated: ["I \u0443\u043B\u0438\u0440\u0430\u043B", "II \u0443\u043B\u0438\u0440\u0430\u043B", "III \u0443\u043B\u0438\u0440\u0430\u043B", "IV \u0443\u043B\u0438\u0440\u0430\u043B"], wide: ["1-\u0440 \u0443\u043B\u0438\u0440\u0430\u043B", "2-\u0440 \u0443\u043B\u0438\u0440\u0430\u043B", "3-\u0440 \u0443\u043B\u0438\u0440\u0430\u043B", "4-\u0440 \u0443\u043B\u0438\u0440\u0430\u043B"] };
var y44 = { narrow: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"], abbreviated: ["1-\u0440 \u0441\u0430\u0440", "2-\u0440 \u0441\u0430\u0440", "3-\u0440 \u0441\u0430\u0440", "4-\u0440 \u0441\u0430\u0440", "5-\u0440 \u0441\u0430\u0440", "6-\u0440 \u0441\u0430\u0440", "7-\u0440 \u0441\u0430\u0440", "8-\u0440 \u0441\u0430\u0440", "9-\u0440 \u0441\u0430\u0440", "10-\u0440 \u0441\u0430\u0440", "11-\u0440 \u0441\u0430\u0440", "12-\u0440 \u0441\u0430\u0440"], wide: ["\u041D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0425\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0414\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0417\u0443\u0440\u0433\u0430\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0414\u043E\u043B\u043E\u043E\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u041D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0415\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0410\u0440\u0432\u0430\u043D\u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0410\u0440\u0432\u0430\u043D \u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440"] };
var M45 = { narrow: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"], abbreviated: ["1-\u0440 \u0441\u0430\u0440", "2-\u0440 \u0441\u0430\u0440", "3-\u0440 \u0441\u0430\u0440", "4-\u0440 \u0441\u0430\u0440", "5-\u0440 \u0441\u0430\u0440", "6-\u0440 \u0441\u0430\u0440", "7-\u0440 \u0441\u0430\u0440", "8-\u0440 \u0441\u0430\u0440", "9-\u0440 \u0441\u0430\u0440", "10-\u0440 \u0441\u0430\u0440", "11-\u0440 \u0441\u0430\u0440", "12-\u0440 \u0441\u0430\u0440"], wide: ["\u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0433\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0434\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0442\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0437\u0443\u0440\u0433\u0430\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0434\u043E\u043B\u043E\u043E\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u043D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0435\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0430\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0430\u0440\u0432\u0430\u043D\u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0430\u0440\u0432\u0430\u043D \u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440"] };
var W35 = { narrow: ["\u041D", "\u0414", "\u041C", "\u041B", "\u041F", "\u0411", "\u0411"], short: ["\u041D\u044F", "\u0414\u0430", "\u041C\u044F", "\u041B\u0445", "\u041F\u04AF", "\u0411\u0430", "\u0411\u044F"], abbreviated: ["\u041D\u044F\u043C", "\u0414\u0430\u0432", "\u041C\u044F\u0433", "\u041B\u0445\u0430", "\u041F\u04AF\u0440", "\u0411\u0430\u0430", "\u0411\u044F\u043C"], wide: ["\u041D\u044F\u043C", "\u0414\u0430\u0432\u0430\u0430", "\u041C\u044F\u0433\u043C\u0430\u0440", "\u041B\u0445\u0430\u0433\u0432\u0430", "\u041F\u04AF\u0440\u044D\u0432", "\u0411\u0430\u0430\u0441\u0430\u043D", "\u0411\u044F\u043C\u0431\u0430"] };
var x41 = { narrow: ["\u041D", "\u0414", "\u041C", "\u041B", "\u041F", "\u0411", "\u0411"], short: ["\u041D\u044F", "\u0414\u0430", "\u041C\u044F", "\u041B\u0445", "\u041F\u04AF", "\u0411\u0430", "\u0411\u044F"], abbreviated: ["\u041D\u044F\u043C", "\u0414\u0430\u0432", "\u041C\u044F\u0433", "\u041B\u0445\u0430", "\u041F\u04AF\u0440", "\u0411\u0430\u0430", "\u0411\u044F\u043C"], wide: ["\u043D\u044F\u043C", "\u0434\u0430\u0432\u0430\u0430", "\u043C\u044F\u0433\u043C\u0430\u0440", "\u043B\u0445\u0430\u0433\u0432\u0430", "\u043F\u04AF\u0440\u044D\u0432", "\u0431\u0430\u0430\u0441\u0430\u043D", "\u0431\u044F\u043C\u0431\u0430"] };
var V44 = { narrow: { am: "\u04AF.\u04E9.", pm: "\u04AF.\u0445.", midnight: "\u0448\u04E9\u043D\u04E9 \u0434\u0443\u043D\u0434", noon: "\u04AF\u0434 \u0434\u0443\u043D\u0434", morning: "\u04E9\u0433\u043B\u04E9\u04E9", afternoon: "\u04E9\u0434\u04E9\u0440", evening: "\u043E\u0440\u043E\u0439", night: "\u0448\u04E9\u043D\u04E9" }, abbreviated: { am: "\u04AF.\u04E9.", pm: "\u04AF.\u0445.", midnight: "\u0448\u04E9\u043D\u04E9 \u0434\u0443\u043D\u0434", noon: "\u04AF\u0434 \u0434\u0443\u043D\u0434", morning: "\u04E9\u0433\u043B\u04E9\u04E9", afternoon: "\u04E9\u0434\u04E9\u0440", evening: "\u043E\u0440\u043E\u0439", night: "\u0448\u04E9\u043D\u04E9" }, wide: { am: "\u04AF.\u04E9.", pm: "\u04AF.\u0445.", midnight: "\u0448\u04E9\u043D\u04E9 \u0434\u0443\u043D\u0434", noon: "\u04AF\u0434 \u0434\u0443\u043D\u0434", morning: "\u04E9\u0433\u043B\u04E9\u04E9", afternoon: "\u04E9\u0434\u04E9\u0440", evening: "\u043E\u0440\u043E\u0439", night: "\u0448\u04E9\u043D\u04E9" } };
var k36 = (e30, r32) => String(e30);
var h29 = { ordinalNumber: k36, era: c({ values: P47, defaultWidth: "wide" }), quarter: c({ values: g40, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: y44, defaultWidth: "wide", formattingValues: M45, defaultFormattingWidth: "wide" }), day: c({ values: W35, defaultWidth: "wide", formattingValues: x41, defaultFormattingWidth: "wide" }), dayPeriod: c({ values: V44, defaultWidth: "wide" }) };
var $6 = /\d+/i;
var D41 = /\d+/i;
var F45 = { narrow: /^(нтө|нт)/i, abbreviated: /^(нтө|нт)/i, wide: /^(нийтийн тооллын өмнө|нийтийн тооллын)/i };
var z43 = { any: [/^(нтө|нийтийн тооллын өмнө)/i, /^(нт|нийтийн тооллын)/i] };
var L44 = { narrow: /^(iv|iii|ii|i)/i, abbreviated: /^(iv|iii|ii|i) улирал/i, wide: /^[1-4]-р улирал/i };
var E42 = { any: [/^(i(\s|$)|1)/i, /^(ii(\s|$)|2)/i, /^(iii(\s|$)|3)/i, /^(iv(\s|$)|4)/i] };
var H33 = { narrow: /^(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i)/i, abbreviated: /^(1-р сар|2-р сар|3-р сар|4-р сар|5-р сар|6-р сар|7-р сар|8-р сар|9-р сар|10-р сар|11-р сар|12-р сар)/i, wide: /^(нэгдүгээр сар|хоёрдугаар сар|гуравдугаар сар|дөрөвдүгээр сар|тавдугаар сар|зургаадугаар сар|долоодугаар сар|наймдугаар сар|есдүгээр сар|аравдугаар сар|арван нэгдүгээр сар|арван хоёрдугаар сар)/i };
var S43 = { narrow: [/^i$/i, /^ii$/i, /^iii$/i, /^iv$/i, /^v$/i, /^vi$/i, /^vii$/i, /^viii$/i, /^ix$/i, /^x$/i, /^xi$/i, /^xii$/i], any: [/^(1|нэгдүгээр)/i, /^(2|хоёрдугаар)/i, /^(3|гуравдугаар)/i, /^(4|дөрөвдүгээр)/i, /^(5|тавдугаар)/i, /^(6|зургаадугаар)/i, /^(7|долоодугаар)/i, /^(8|наймдугаар)/i, /^(9|есдүгээр)/i, /^(10|аравдугаар)/i, /^(11|арван нэгдүгээр)/i, /^(12|арван хоёрдугаар)/i] };
var C37 = { narrow: /^[ндмлпбб]/i, short: /^(ня|да|мя|лх|пү|ба|бя)/i, abbreviated: /^(ням|дав|мяг|лха|пүр|баа|бям)/i, wide: /^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i };
var N43 = { narrow: [/^н/i, /^д/i, /^м/i, /^л/i, /^п/i, /^б/i, /^б/i], any: [/^ня/i, /^да/i, /^мя/i, /^лх/i, /^пү/i, /^ба/i, /^бя/i] };
var R27 = { narrow: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i, any: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i };
var T26 = { any: { am: /^ү\.ө\./i, pm: /^ү\.х\./i, midnight: /^шөнө дунд/i, noon: /^үд дунд/i, morning: /өглөө/i, afternoon: /өдөр/i, evening: /орой/i, night: /шөнө/i } };
var f40 = { ordinalNumber: h({ matchPattern: $6, parsePattern: D41, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: F45, defaultMatchWidth: "wide", parsePatterns: z43, defaultParseWidth: "any" }), quarter: P({ matchPatterns: L44, defaultMatchWidth: "wide", parsePatterns: E42, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: H33, defaultMatchWidth: "wide", parsePatterns: S43, defaultParseWidth: "any" }), day: P({ matchPatterns: C37, defaultMatchWidth: "wide", parsePatterns: N43, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: R27, defaultMatchWidth: "any", parsePatterns: T26, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ms.mjs
var p35 = { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "d/M/yyyy" };
var c38 = { full: "HH.mm.ss", long: "HH.mm.ss", medium: "HH.mm", short: "HH.mm" };
var f41 = { full: "{{date}} 'pukul' {{time}}", long: "{{date}} 'pukul' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var h30 = { date: r2({ formats: p35, defaultWidth: "full" }), time: r2({ formats: c38, defaultWidth: "full" }), dateTime: r2({ formats: f41, defaultWidth: "full" }) };
var k37 = { narrow: ["SM", "M"], abbreviated: ["SM", "M"], wide: ["Sebelum Masihi", "Masihi"] };
var y45 = { narrow: ["1", "2", "3", "4"], abbreviated: ["S1", "S2", "S3", "S4"], wide: ["Suku pertama", "Suku kedua", "Suku ketiga", "Suku keempat"] };
var M46 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"], wide: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"] };
var P48 = { narrow: ["A", "I", "S", "R", "K", "J", "S"], short: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"], abbreviated: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"], wide: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"] };
var w43 = { narrow: { am: "am", pm: "pm", midnight: "tgh malam", noon: "tgh hari", morning: "pagi", afternoon: "tengah hari", evening: "petang", night: "malam" }, abbreviated: { am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "tengah hari", evening: "petang", night: "malam" }, wide: { am: "a.m.", pm: "p.m.", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "tengah hari", evening: "petang", night: "malam" } };
var v39 = { narrow: { am: "am", pm: "pm", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "tengah hari", evening: "petang", night: "malam" }, abbreviated: { am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "tengah hari", evening: "petang", night: "malam" }, wide: { am: "a.m.", pm: "p.m.", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "tengah hari", evening: "petang", night: "malam" } };
var S44 = (a33, i19) => "ke-" + Number(a33);
var d25 = { ordinalNumber: S44, era: c({ values: k37, defaultWidth: "wide" }), quarter: c({ values: y45, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: M46, defaultWidth: "wide" }), day: c({ values: P48, defaultWidth: "wide" }), dayPeriod: c({ values: w43, defaultWidth: "wide", formattingValues: v39, defaultFormattingWidth: "wide" }) };
var W36 = /^ke-(\d+)?/i;
var x42 = /petama|\d+/i;
var D42 = { narrow: /^(sm|m)/i, abbreviated: /^(s\.?\s?m\.?|m\.?)/i, wide: /^(sebelum masihi|masihi)/i };
var J10 = { any: [/^s/i, /^(m)/i] };
var F46 = { narrow: /^[1234]/i, abbreviated: /^S[1234]/i, wide: /Suku (pertama|kedua|ketiga|keempat)/i };
var H34 = { any: [/pertama|1/i, /kedua|2/i, /ketiga|3/i, /keempat|4/i] };
var A20 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mac|apr|mei|jun|jul|ogo|sep|okt|nov|dis)/i, wide: /^(januari|februari|mac|april|mei|jun|julai|ogos|september|oktober|november|disember)/i };
var O16 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^o/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^ma/i, /^ap/i, /^me/i, /^jun/i, /^jul/i, /^og/i, /^s/i, /^ok/i, /^n/i, /^d/i] };
var N44 = { narrow: /^[aisrkj]/i, short: /^(ahd|isn|sel|rab|kha|jum|sab)/i, abbreviated: /^(ahd|isn|sel|rab|kha|jum|sab)/i, wide: /^(ahad|isnin|selasa|rabu|khamis|jumaat|sabtu)/i };
var R28 = { narrow: [/^a/i, /^i/i, /^s/i, /^r/i, /^k/i, /^j/i, /^s/i], any: [/^a/i, /^i/i, /^se/i, /^r/i, /^k/i, /^j/i, /^sa/i] };
var V45 = { narrow: /^(am|pm|tengah malam|tengah hari|pagi|petang|malam)/i, any: /^([ap]\.?\s?m\.?|tengah malam|tengah hari|pagi|petang|malam)/i };
var X45 = { any: { am: /^a/i, pm: /^pm/i, midnight: /^tengah m/i, noon: /^tengah h/i, morning: /pa/i, afternoon: /tengah h/i, evening: /pe/i, night: /m/i } };
var l26 = { ordinalNumber: h({ matchPattern: W36, parsePattern: x42, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: D42, defaultMatchWidth: "wide", parsePatterns: J10, defaultParseWidth: "any" }), quarter: P({ matchPatterns: F46, defaultMatchWidth: "wide", parsePatterns: H34, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: A20, defaultMatchWidth: "wide", parsePatterns: O16, defaultParseWidth: "any" }), day: P({ matchPatterns: N44, defaultMatchWidth: "wide", parsePatterns: R28, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: V45, defaultMatchWidth: "any", parsePatterns: X45, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/mt.mjs
var c39 = { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy" };
var w44 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var g41 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m46 = { date: r2({ formats: c39, defaultWidth: "full" }), time: r2({ formats: w44, defaultWidth: "full" }), dateTime: r2({ formats: g41, defaultWidth: "full" }) };
var p36 = { narrow: ["Q", "W"], abbreviated: ["QK", "WK"], wide: ["qabel Kristu", "wara Kristu"] };
var j20 = { narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1. kwart", "2. kwart", "3. kwart", "4. kwart"] };
var y46 = { narrow: ["J", "F", "M", "A", "M", "\u0120", "L", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Fra", "Mar", "Apr", "Mej", "\u0120un", "Lul", "Aww", "Set", "Ott", "Nov", "Di\u010B"], wide: ["Jannar", "Frar", "Marzu", "April", "Mejju", "\u0120unju", "Lulju", "Awwissu", "Settembru", "Ottubru", "Novembru", "Di\u010Bembru"] };
var P49 = { narrow: ["\u0126", "T", "T", "E", "\u0126", "\u0120", "S"], short: ["\u0126a", "Tn", "Tl", "Er", "\u0126a", "\u0120i", "Si"], abbreviated: ["\u0126ad", "Tne", "Tli", "Erb", "\u0126am", "\u0120im", "Sib"], wide: ["Il-\u0126add", "It-Tnejn", "It-Tlieta", "L-Erbg\u0127a", "Il-\u0126amis", "Il-\u0120img\u0127a", "Is-Sibt"] };
var M47 = { narrow: { am: "a", pm: "p", midnight: "nofsillejl", noon: "nofsinhar", morning: "g\u0127odwa", afternoon: "wara nofsinhar", evening: "filg\u0127axija", night: "lejl" }, abbreviated: { am: "AM", pm: "PM", midnight: "nofsillejl", noon: "nofsinhar", morning: "g\u0127odwa", afternoon: "wara nofsinhar", evening: "filg\u0127axija", night: "lejl" }, wide: { am: "a.m.", pm: "p.m.", midnight: "nofsillejl", noon: "nofsinhar", morning: "g\u0127odwa", afternoon: "wara nofsinhar", evening: "filg\u0127axija", night: "lejl" } };
var v40 = { narrow: { am: "a", pm: "p", midnight: "f'nofsillejl", noon: "f'nofsinhar", morning: "filg\u0127odu", afternoon: "wara nofsinhar", evening: "filg\u0127axija", night: "billejl" }, abbreviated: { am: "AM", pm: "PM", midnight: "f'nofsillejl", noon: "f'nofsinhar", morning: "filg\u0127odu", afternoon: "wara nofsinhar", evening: "filg\u0127axija", night: "billejl" }, wide: { am: "a.m.", pm: "p.m.", midnight: "f'nofsillejl", noon: "f'nofsinhar", morning: "filg\u0127odu", afternoon: "wara nofsinhar", evening: "filg\u0127axija", night: "billejl" } };
var k38 = (a33, n19) => Number(a33) + "\xBA";
var u34 = { ordinalNumber: k38, era: c({ values: p36, defaultWidth: "wide" }), quarter: c({ values: j20, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: y46, defaultWidth: "wide" }), day: c({ values: P49, defaultWidth: "wide" }), dayPeriod: c({ values: M47, defaultWidth: "wide", formattingValues: v40, defaultFormattingWidth: "wide" }) };
var W37 = /^(\d+)(º)?/i;
var D43 = /\d+/i;
var q17 = { narrow: /^(q|w)/i, abbreviated: /^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i, wide: /^(qabel kristu|before common era|wara kristu|common era)/i };
var F47 = { any: [/^(q|b)/i, /^(w|c)/i] };
var S45 = { narrow: /^[1234]/i, abbreviated: /^k[1234]/i, wide: /^[1234](\.)? kwart/i };
var T27 = { any: [/1/i, /2/i, /3/i, /4/i] };
var z44 = { narrow: /^[jfmaglsond]/i, abbreviated: /^(jan|fra|mar|apr|mej|ġun|lul|aww|set|ott|nov|diċ)/i, wide: /^(jannar|frar|marzu|april|mejju|ġunju|lulju|awwissu|settembru|ottubru|novembru|diċembru)/i };
var L45 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^ġ/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mej/i, /^ġ/i, /^l/i, /^aw/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var E43 = { narrow: /^[ħteġs]/i, short: /^(ħa|tn|tl|er|ħa|ġi|si)/i, abbreviated: /^(ħad|tne|tli|erb|ħam|ġim|sib)/i, wide: /^(il-ħadd|it-tnejn|it-tlieta|l-erbgħa|il-ħamis|il-ġimgħa|is-sibt)/i };
var H35 = { narrow: [/^ħ/i, /^t/i, /^t/i, /^e/i, /^ħ/i, /^ġ/i, /^s/i], any: [/^(il-)?ħad/i, /^(it-)?tn/i, /^(it-)?tl/i, /^(l-)?er/i, /^(il-)?ham/i, /^(il-)?ġi/i, /^(is-)?si/i] };
var A21 = { narrow: /^(a|p|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i, any: /^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i };
var I12 = { any: { am: /^a/i, pm: /^p/i, midnight: /^f'nofsillejl/i, noon: /^f'nofsinhar/i, morning: /għodwa/i, afternoon: /wara(\s.*)nofsinhar/i, evening: /filgħaxija/i, night: /lejl/i } };
var f42 = { ordinalNumber: h({ matchPattern: W37, parsePattern: D43, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: q17, defaultMatchWidth: "wide", parsePatterns: F47, defaultParseWidth: "any" }), quarter: P({ matchPatterns: S45, defaultMatchWidth: "wide", parsePatterns: T27, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: z44, defaultMatchWidth: "wide", parsePatterns: L45, defaultParseWidth: "any" }), day: P({ matchPatterns: E43, defaultMatchWidth: "wide", parsePatterns: H35, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: A21, defaultMatchWidth: "any", parsePatterns: I12, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/nb.mjs
var h31 = { full: "EEEE d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "dd.MM.y" };
var p37 = { full: "'kl'. HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var g42 = { full: "{{date}} 'kl.' {{time}}", long: "{{date}} 'kl.' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var d26 = { date: r2({ formats: h31, defaultWidth: "full" }), time: r2({ formats: p37, defaultWidth: "full" }), dateTime: r2({ formats: g42, defaultWidth: "full" }) };
var v41 = { narrow: ["f.Kr.", "e.Kr."], abbreviated: ["f.Kr.", "e.Kr."], wide: ["f\xF8r Kristus", "etter Kristus"] };
var k39 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"] };
var P50 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."], wide: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"] };
var w45 = { narrow: ["S", "M", "T", "O", "T", "F", "L"], short: ["s\xF8", "ma", "ti", "on", "to", "fr", "l\xF8"], abbreviated: ["s\xF8n", "man", "tir", "ons", "tor", "fre", "l\xF8r"], wide: ["s\xF8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\xF8rdag"] };
var y47 = { narrow: { am: "a", pm: "p", midnight: "midnatt", noon: "middag", morning: "p\xE5 morg.", afternoon: "p\xE5 etterm.", evening: "p\xE5 kvelden", night: "p\xE5 natten" }, abbreviated: { am: "a.m.", pm: "p.m.", midnight: "midnatt", noon: "middag", morning: "p\xE5 morg.", afternoon: "p\xE5 etterm.", evening: "p\xE5 kvelden", night: "p\xE5 natten" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnatt", noon: "middag", morning: "p\xE5 morgenen", afternoon: "p\xE5 ettermiddagen", evening: "p\xE5 kvelden", night: "p\xE5 natten" } };
var M48 = (t8, o36) => Number(t8) + ".";
var l27 = { ordinalNumber: M48, era: c({ values: v41, defaultWidth: "wide" }), quarter: c({ values: k39, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: P50, defaultWidth: "wide" }), day: c({ values: w45, defaultWidth: "wide" }), dayPeriod: c({ values: y47, defaultWidth: "wide" }) };
var j21 = /^(\d+)\.?/i;
var x43 = /\d+/i;
var D44 = { narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i, abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i, wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i };
var K13 = { any: [/^f/i, /^e/i] };
var E44 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](\.)? kvartal/i };
var F48 = { any: [/1/i, /2/i, /3/i, /4/i] };
var H36 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i, wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i };
var z45 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^aug/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var L46 = { narrow: /^[smtofl]/i, short: /^(sø|ma|ti|on|to|fr|lø)/i, abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i, wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i };
var X46 = { any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i] };
var S46 = { narrow: /^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i, any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i };
var N45 = { any: { am: /^a(\.?\s?m\.?)?$/i, pm: /^p(\.?\s?m\.?)?$/i, midnight: /^midn/i, noon: /^midd/i, morning: /morgen/i, afternoon: /ettermiddag/i, evening: /kveld/i, night: /natt/i } };
var c40 = { ordinalNumber: h({ matchPattern: j21, parsePattern: x43, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: D44, defaultMatchWidth: "wide", parsePatterns: K13, defaultParseWidth: "any" }), quarter: P({ matchPatterns: E44, defaultMatchWidth: "wide", parsePatterns: F48, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: H36, defaultMatchWidth: "wide", parsePatterns: z45, defaultParseWidth: "any" }), day: P({ matchPatterns: L46, defaultMatchWidth: "wide", parsePatterns: X46, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: S46, defaultMatchWidth: "any", parsePatterns: N45, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/nl-BE.mjs
var g43 = { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd.MM.y" };
var f43 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var v42 = { full: "{{date}} 'om' {{time}}", long: "{{date}} 'om' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m47 = { date: r2({ formats: g43, defaultWidth: "full" }), time: r2({ formats: f43, defaultWidth: "full" }), dateTime: r2({ formats: v42, defaultWidth: "full" }) };
var b39 = { narrow: ["v.C.", "n.C."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["voor Christus", "na Christus"] };
var w46 = { narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"] };
var P51 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"] };
var M49 = { narrow: ["Z", "M", "D", "W", "D", "V", "Z"], short: ["zo", "ma", "di", "wo", "do", "vr", "za"], abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"], wide: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"] };
var j22 = { narrow: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middag", morning: "'s ochtends", afternoon: "'s namiddags", evening: "'s avonds", night: "'s nachts" }, abbreviated: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middag", morning: "'s ochtends", afternoon: "'s namiddags", evening: "'s avonds", night: "'s nachts" }, wide: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middag", morning: "'s ochtends", afternoon: "'s namiddags", evening: "'s avonds", night: "'s nachts" } };
var y48 = (e30, o36) => Number(e30) + "e";
var c41 = { ordinalNumber: y48, era: c({ values: b39, defaultWidth: "wide" }), quarter: c({ values: w46, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: P51, defaultWidth: "wide" }), day: c({ values: M49, defaultWidth: "wide" }), dayPeriod: c({ values: j22, defaultWidth: "wide" }) };
var k40 = /^(\d+)e?/i;
var W38 = /\d+/i;
var x44 = { narrow: /^([vn]\.? ?C\.?)/, abbreviated: /^([vn]\. ?Chr\.?)/, wide: /^((voor|na) Christus)/ };
var D45 = { any: [/^v/, /^n/] };
var C38 = { narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234]e kwartaal/i };
var H37 = { any: [/1/i, /2/i, /3/i, /4/i] };
var F49 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i, wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i };
var E45 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mei/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i] };
var X47 = { narrow: /^[zmdwv]/i, short: /^(zo|ma|di|wo|do|vr|za)/i, abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i, wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i };
var L47 = { narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i], any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i] };
var V46 = { any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i };
var A22 = { any: { am: /^am/i, pm: /^pm/i, midnight: /^middernacht/i, noon: /^het middaguur/i, morning: /ochtend/i, afternoon: /middag/i, evening: /avond/i, night: /nacht/i } };
var h32 = { ordinalNumber: h({ matchPattern: k40, parsePattern: W38, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: x44, defaultMatchWidth: "wide", parsePatterns: D45, defaultParseWidth: "any" }), quarter: P({ matchPatterns: C38, defaultMatchWidth: "wide", parsePatterns: H37, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: F49, defaultMatchWidth: "wide", parsePatterns: E45, defaultParseWidth: "any" }), day: P({ matchPatterns: X47, defaultMatchWidth: "wide", parsePatterns: L47, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: V46, defaultMatchWidth: "any", parsePatterns: A22, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/nl.mjs
var g44 = { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd-MM-y" };
var f44 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var v43 = { full: "{{date}} 'om' {{time}}", long: "{{date}} 'om' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m48 = { date: r2({ formats: g44, defaultWidth: "full" }), time: r2({ formats: f44, defaultWidth: "full" }), dateTime: r2({ formats: v43, defaultWidth: "full" }) };
var b40 = { narrow: ["v.C.", "n.C."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["voor Christus", "na Christus"] };
var w47 = { narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"] };
var P52 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"] };
var M50 = { narrow: ["Z", "M", "D", "W", "D", "V", "Z"], short: ["zo", "ma", "di", "wo", "do", "vr", "za"], abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"], wide: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"] };
var j23 = { narrow: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts" }, abbreviated: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts" }, wide: { am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts" } };
var y49 = (e30, o36) => Number(e30) + "e";
var c42 = { ordinalNumber: y49, era: c({ values: b40, defaultWidth: "wide" }), quarter: c({ values: w47, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: P52, defaultWidth: "wide" }), day: c({ values: M50, defaultWidth: "wide" }), dayPeriod: c({ values: j23, defaultWidth: "wide" }) };
var k41 = /^(\d+)e?/i;
var W39 = /\d+/i;
var x45 = { narrow: /^([vn]\.? ?C\.?)/, abbreviated: /^([vn]\. ?Chr\.?)/, wide: /^((voor|na) Christus)/ };
var D46 = { any: [/^v/, /^n/] };
var C39 = { narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234]e kwartaal/i };
var H38 = { any: [/1/i, /2/i, /3/i, /4/i] };
var F50 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i, wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i };
var X48 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mei/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i] };
var L48 = { narrow: /^[zmdwv]/i, short: /^(zo|ma|di|wo|do|vr|za)/i, abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i, wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i };
var V47 = { narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i], any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i] };
var A23 = { any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i };
var E46 = { any: { am: /^am/i, pm: /^pm/i, midnight: /^middernacht/i, noon: /^het middaguur/i, morning: /ochtend/i, afternoon: /middag/i, evening: /avond/i, night: /nacht/i } };
var h33 = { ordinalNumber: h({ matchPattern: k41, parsePattern: W39, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: x45, defaultMatchWidth: "wide", parsePatterns: D46, defaultParseWidth: "any" }), quarter: P({ matchPatterns: C39, defaultMatchWidth: "wide", parsePatterns: H38, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: F50, defaultMatchWidth: "wide", parsePatterns: X48, defaultParseWidth: "any" }), day: P({ matchPatterns: L48, defaultMatchWidth: "wide", parsePatterns: V47, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: A23, defaultMatchWidth: "any", parsePatterns: E46, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/nn.mjs
var p38 = { full: "EEEE d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "dd.MM.y" };
var g45 = { full: "'kl'. HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var v44 = { full: "{{date}} 'kl.' {{time}}", long: "{{date}} 'kl.' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var d27 = { date: r2({ formats: p38, defaultWidth: "full" }), time: r2({ formats: g45, defaultWidth: "full" }), dateTime: r2({ formats: v44, defaultWidth: "full" }) };
var k42 = { narrow: ["f.Kr.", "e.Kr."], abbreviated: ["f.Kr.", "e.Kr."], wide: ["f\xF8r Kristus", "etter Kristus"] };
var y50 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"] };
var P53 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."], wide: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"] };
var w48 = { narrow: ["S", "M", "T", "O", "T", "F", "L"], short: ["su", "m\xE5", "ty", "on", "to", "fr", "lau"], abbreviated: ["sun", "m\xE5n", "tys", "ons", "tor", "fre", "laur"], wide: ["sundag", "m\xE5ndag", "tysdag", "onsdag", "torsdag", "fredag", "laurdag"] };
var M51 = { narrow: { am: "a", pm: "p", midnight: "midnatt", noon: "middag", morning: "p\xE5 morg.", afternoon: "p\xE5 etterm.", evening: "p\xE5 kvelden", night: "p\xE5 natta" }, abbreviated: { am: "a.m.", pm: "p.m.", midnight: "midnatt", noon: "middag", morning: "p\xE5 morg.", afternoon: "p\xE5 etterm.", evening: "p\xE5 kvelden", night: "p\xE5 natta" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnatt", noon: "middag", morning: "p\xE5 morgonen", afternoon: "p\xE5 ettermiddagen", evening: "p\xE5 kvelden", night: "p\xE5 natta" } };
var W40 = (t8, a33) => Number(t8) + ".";
var l28 = { ordinalNumber: W40, era: c({ values: k42, defaultWidth: "wide" }), quarter: c({ values: y50, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: P53, defaultWidth: "wide" }), day: c({ values: w48, defaultWidth: "wide" }), dayPeriod: c({ values: M51, defaultWidth: "wide" }) };
var x46 = /^(\d+)\.?/i;
var D47 = /\d+/i;
var K14 = { narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i, abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i, wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i };
var E47 = { any: [/^f/i, /^e/i] };
var F51 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](\.)? kvartal/i };
var H39 = { any: [/1/i, /2/i, /3/i, /4/i] };
var z46 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i, wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i };
var L49 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^aug/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var X49 = { narrow: /^[smtofl]/i, short: /^(su|må|ty|on|to|fr|la)/i, abbreviated: /^(sun|mån|tys|ons|tor|fre|laur)/i, wide: /^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i };
var S47 = { any: [/^s/i, /^m/i, /^ty/i, /^o/i, /^to/i, /^f/i, /^l/i] };
var N46 = { narrow: /^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i, any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i };
var Q15 = { any: { am: /^a(\.?\s?m\.?)?$/i, pm: /^p(\.?\s?m\.?)?$/i, midnight: /^midn/i, noon: /^midd/i, morning: /morgon/i, afternoon: /ettermiddag/i, evening: /kveld/i, night: /natt/i } };
var f45 = { ordinalNumber: h({ matchPattern: x46, parsePattern: D47, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: K14, defaultMatchWidth: "wide", parsePatterns: E47, defaultParseWidth: "any" }), quarter: P({ matchPatterns: F51, defaultMatchWidth: "wide", parsePatterns: H39, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: z46, defaultMatchWidth: "wide", parsePatterns: L49, defaultParseWidth: "any" }), day: P({ matchPatterns: X49, defaultMatchWidth: "wide", parsePatterns: S47, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: N46, defaultMatchWidth: "any", parsePatterns: Q15, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/oc.mjs
var p39 = { full: "EEEE d 'de' MMMM y", long: "d 'de' MMMM y", medium: "d MMM y", short: "dd/MM/y" };
var g46 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var f46 = { full: "{{date}} 'a' {{time}}", long: "{{date}} 'a' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m49 = { date: r2({ formats: p39, defaultWidth: "full" }), time: r2({ formats: g46, defaultWidth: "full" }), dateTime: r2({ formats: f46, defaultWidth: "full" }) };
var v45 = { narrow: ["ab. J.C.", "apr. J.C."], abbreviated: ["ab. J.C.", "apr. J.C."], wide: ["abans J\xE8sus-Crist", "apr\xE8s J\xE8sus-Crist"] };
var j24 = { narrow: ["T1", "T2", "T3", "T4"], abbreviated: ["1\xE8r trim.", "2nd trim.", "3en trim.", "4en trim."], wide: ["1\xE8r trim\xE8stre", "2nd trim\xE8stre", "3en trim\xE8stre", "4en trim\xE8stre"] };
var P54 = { narrow: ["GN", "FB", "M\xC7", "AB", "MA", "JN", "JL", "AG", "ST", "OC", "NV", "DC"], abbreviated: ["gen.", "febr.", "mar\xE7", "abr.", "mai", "junh", "jul.", "ag.", "set.", "oct.", "nov.", "dec."], wide: ["geni\xE8r", "febri\xE8r", "mar\xE7", "abril", "mai", "junh", "julhet", "agost", "setembre", "oct\xF2bre", "novembre", "decembre"] };
var w49 = { narrow: ["dg.", "dl.", "dm.", "dc.", "dj.", "dv.", "ds."], short: ["dg.", "dl.", "dm.", "dc.", "dj.", "dv.", "ds."], abbreviated: ["dg.", "dl.", "dm.", "dc.", "dj.", "dv.", "ds."], wide: ["dimenge", "diluns", "dimars", "dim\xE8cres", "dij\xF2us", "divendres", "dissabte"] };
var M52 = { narrow: { am: "am", pm: "pm", midnight: "mi\xE8janu\xE8ch", noon: "mi\xE8gjorn", morning: "matin", afternoon: "apr\xE8p-mi\xE8gjorn", evening: "v\xE8spre", night: "nu\xE8ch" }, abbreviated: { am: "a.m.", pm: "p.m.", midnight: "mi\xE8janu\xE8ch", noon: "mi\xE8gjorn", morning: "matin", afternoon: "apr\xE8p-mi\xE8gjorn", evening: "v\xE8spre", night: "nu\xE8ch" }, wide: { am: "a.m.", pm: "p.m.", midnight: "mi\xE8janu\xE8ch", noon: "mi\xE8gjorn", morning: "matin", afternoon: "apr\xE8p-mi\xE8gjorn", evening: "v\xE8spre", night: "nu\xE8ch" } };
var y51 = { narrow: { am: "am", pm: "pm", midnight: "mi\xE8janu\xE8ch", noon: "mi\xE8gjorn", morning: "del matin", afternoon: "de l\u2019apr\xE8p-mi\xE8gjorn", evening: "del ser", night: "de la nu\xE8ch" }, abbreviated: { am: "AM", pm: "PM", midnight: "mi\xE8janu\xE8ch", noon: "mi\xE8gjorn", morning: "del matin", afternoon: "de l\u2019apr\xE8p-mi\xE8gjorn", evening: "del ser", night: "de la nu\xE8ch" }, wide: { am: "ante meridiem", pm: "post meridiem", midnight: "mi\xE8janu\xE8ch", noon: "mi\xE8gjorn", morning: "del matin", afternoon: "de l\u2019apr\xE8p-mi\xE8gjorn", evening: "del ser", night: "de la nu\xE8ch" } };
var C40 = (a33, r32) => {
  let n19 = Number(a33), e30 = r32?.unit, t8;
  switch (n19) {
    case 1:
      t8 = "\xE8r";
      break;
    case 2:
      t8 = "nd";
      break;
    default:
      t8 = "en";
  }
  return (e30 === "year" || e30 === "week" || e30 === "hour" || e30 === "minute" || e30 === "second") && (t8 += "a"), n19 + t8;
};
var c43 = { ordinalNumber: C40, era: c({ values: v45, defaultWidth: "wide" }), quarter: c({ values: j24, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: P54, defaultWidth: "wide" }), day: c({ values: w49, defaultWidth: "wide" }), dayPeriod: c({ values: M52, defaultWidth: "wide", formattingValues: y51, defaultFormattingWidth: "wide" }) };
var J11 = /^(\d+)(èr|nd|en)?[a]?/i;
var x47 = /\d+/i;
var D48 = { narrow: /^(ab\.J\.C|apr\.J\.C|apr\.J\.-C)/i, abbreviated: /^(ab\.J\.-C|ab\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i, wide: /^(abans Jèsus-Crist|après Jèsus-Crist)/i };
var k43 = { any: [/^ab/i, /^ap/i] };
var N47 = { narrow: /^T[1234]/i, abbreviated: /^[1234](èr|nd|en)? trim\.?/i, wide: /^[1234](èr|nd|en)? trimèstre/i };
var F52 = { any: [/1/i, /2/i, /3/i, /4/i] };
var T28 = { narrow: /^(GN|FB|MÇ|AB|MA|JN|JL|AG|ST|OC|NV|DC)/i, abbreviated: /^(gen|febr|març|abr|mai|junh|jul|ag|set|oct|nov|dec)\.?/i, wide: /^(genièr|febrièr|març|abril|mai|junh|julhet|agost|setembre|octòbre|novembre|decembre)/i };
var H40 = { any: [/^g/i, /^f/i, /^ma[r?]|MÇ/i, /^ab/i, /^ma[i?]/i, /^ju[n?]|JN/i, /^ju[l?]|JL/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var L50 = { narrow: /^d[glmcjvs]\.?/i, short: /^d[glmcjvs]\.?/i, abbreviated: /^d[glmcjvs]\.?/i, wide: /^(dimenge|diluns|dimars|dimècres|dijòus|divendres|dissabte)/i };
var V48 = { narrow: [/^dg/i, /^dl/i, /^dm/i, /^dc/i, /^dj/i, /^dv/i, /^ds/i], short: [/^dg/i, /^dl/i, /^dm/i, /^dc/i, /^dj/i, /^dv/i, /^ds/i], abbreviated: [/^dg/i, /^dl/i, /^dm/i, /^dc/i, /^dj/i, /^dv/i, /^ds/i], any: [/^dg|dime/i, /^dl|dil/i, /^dm|dima/i, /^dc|dimè/i, /^dj|dij/i, /^dv|div/i, /^ds|dis/i] };
var z47 = { any: /(^(a\.?m|p\.?m))|(ante meridiem|post meridiem)|((del |de la |de l’)(matin|aprèp-miègjorn|vèspre|ser|nuèch))/i };
var A24 = { any: { am: /(^a)|ante meridiem/i, pm: /(^p)|post meridiem/i, midnight: /^mièj/i, noon: /^mièg/i, morning: /matin/i, afternoon: /aprèp-miègjorn/i, evening: /vèspre|ser/i, night: /nuèch/i } };
var l29 = { ordinalNumber: h({ matchPattern: J11, parsePattern: x47, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: D48, defaultMatchWidth: "wide", parsePatterns: k43, defaultParseWidth: "any" }), quarter: P({ matchPatterns: N47, defaultMatchWidth: "wide", parsePatterns: F52, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: T28, defaultMatchWidth: "wide", parsePatterns: H40, defaultParseWidth: "any" }), day: P({ matchPatterns: L50, defaultMatchWidth: "wide", parsePatterns: V48, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: z47, defaultMatchWidth: "any", parsePatterns: A24, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/pl.mjs
var k44 = { full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.y" };
var y52 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var b41 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var c44 = { date: r2({ formats: k44, defaultWidth: "full" }), time: r2({ formats: y52, defaultWidth: "full" }), dateTime: r2({ formats: b41, defaultWidth: "full" }) };
var F53 = { narrow: ["p.n.e.", "n.e."], abbreviated: ["p.n.e.", "n.e."], wide: ["przed nasz\u0105 er\u0105", "naszej ery"] };
var x48 = { narrow: ["1", "2", "3", "4"], abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."], wide: ["I kwarta\u0142", "II kwarta\u0142", "III kwarta\u0142", "IV kwarta\u0142"] };
var V49 = { narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"], abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "pa\u017A", "lis", "gru"], wide: ["stycze\u0144", "luty", "marzec", "kwiecie\u0144", "maj", "czerwiec", "lipiec", "sierpie\u0144", "wrzesie\u0144", "pa\u017Adziernik", "listopad", "grudzie\u0144"] };
var D49 = { narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"], abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "pa\u017A", "lis", "gru"], wide: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "wrze\u015Bnia", "pa\u017Adziernika", "listopada", "grudnia"] };
var L51 = { narrow: ["N", "P", "W", "\u015A", "C", "P", "S"], short: ["nie", "pon", "wto", "\u015Bro", "czw", "pi\u0105", "sob"], abbreviated: ["niedz.", "pon.", "wt.", "\u015Br.", "czw.", "pt.", "sob."], wide: ["niedziela", "poniedzia\u0142ek", "wtorek", "\u015Broda", "czwartek", "pi\u0105tek", "sobota"] };
var H41 = { narrow: ["n", "p", "w", "\u015B", "c", "p", "s"], short: ["nie", "pon", "wto", "\u015Bro", "czw", "pi\u0105", "sob"], abbreviated: ["niedz.", "pon.", "wt.", "\u015Br.", "czw.", "pt.", "sob."], wide: ["niedziela", "poniedzia\u0142ek", "wtorek", "\u015Broda", "czwartek", "pi\u0105tek", "sobota"] };
var S48 = { narrow: { am: "a", pm: "p", midnight: "p\xF3\u0142n.", noon: "po\u0142", morning: "rano", afternoon: "popo\u0142.", evening: "wiecz.", night: "noc" }, abbreviated: { am: "AM", pm: "PM", midnight: "p\xF3\u0142noc", noon: "po\u0142udnie", morning: "rano", afternoon: "popo\u0142udnie", evening: "wiecz\xF3r", night: "noc" }, wide: { am: "AM", pm: "PM", midnight: "p\xF3\u0142noc", noon: "po\u0142udnie", morning: "rano", afternoon: "popo\u0142udnie", evening: "wiecz\xF3r", night: "noc" } };
var T29 = { narrow: { am: "a", pm: "p", midnight: "o p\xF3\u0142n.", noon: "w po\u0142.", morning: "rano", afternoon: "po po\u0142.", evening: "wiecz.", night: "w nocy" }, abbreviated: { am: "AM", pm: "PM", midnight: "o p\xF3\u0142nocy", noon: "w po\u0142udnie", morning: "rano", afternoon: "po po\u0142udniu", evening: "wieczorem", night: "w nocy" }, wide: { am: "AM", pm: "PM", midnight: "o p\xF3\u0142nocy", noon: "w po\u0142udnie", morning: "rano", afternoon: "po po\u0142udniu", evening: "wieczorem", night: "w nocy" } };
var X50 = (e30, t8) => String(e30);
var l30 = { ordinalNumber: X50, era: c({ values: F53, defaultWidth: "wide" }), quarter: c({ values: x48, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: V49, defaultWidth: "wide", formattingValues: D49, defaultFormattingWidth: "wide" }), day: c({ values: L51, defaultWidth: "wide", formattingValues: H41, defaultFormattingWidth: "wide" }), dayPeriod: c({ values: S48, defaultWidth: "wide", formattingValues: T29, defaultFormattingWidth: "wide" }) };
var C41 = /^(\d+)?/i;
var E48 = /\d+/i;
var N48 = { narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i, abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i, wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i };
var $7 = { any: [/^p/i, /^n/i] };
var G8 = { narrow: /^[1234]/i, abbreviated: /^(I|II|III|IV)\s*kw\.?/i, wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i };
var R29 = { narrow: [/1/i, /2/i, /3/i, /4/i], any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i] };
var Y15 = { narrow: /^[slmkcwpg]/i, abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i, wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i };
var q18 = { narrow: [/^s/i, /^l/i, /^m/i, /^k/i, /^m/i, /^c/i, /^l/i, /^s/i, /^w/i, /^p/i, /^l/i, /^g/i], any: [/^st/i, /^lu/i, /^mar/i, /^k/i, /^maj/i, /^c/i, /^lip/i, /^si/i, /^w/i, /^p/i, /^lis/i, /^g/i] };
var O17 = { narrow: /^[npwścs]/i, short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i, abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i, wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i };
var Q16 = { narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i], abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i], any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i] };
var K15 = { narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i, any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i };
var _9 = { narrow: { am: /^a$/i, pm: /^p$/i, midnight: /pó(ł|l)n/i, noon: /po(ł|l)/i, morning: /rano/i, afternoon: /po\s*po(ł|l)/i, evening: /wiecz/i, night: /noc/i }, any: { am: /^am/i, pm: /^pm/i, midnight: /pó(ł|l)n/i, noon: /po(ł|l)/i, morning: /rano/i, afternoon: /po\s*po(ł|l)/i, evening: /wiecz/i, night: /noc/i } };
var w50 = { ordinalNumber: h({ matchPattern: C41, parsePattern: E48, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: N48, defaultMatchWidth: "wide", parsePatterns: $7, defaultParseWidth: "any" }), quarter: P({ matchPatterns: G8, defaultMatchWidth: "wide", parsePatterns: R29, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: Y15, defaultMatchWidth: "wide", parsePatterns: q18, defaultParseWidth: "any" }), day: P({ matchPatterns: O17, defaultMatchWidth: "wide", parsePatterns: Q16, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: K15, defaultMatchWidth: "any", parsePatterns: _9, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/pt-BR.mjs
var f47 = { full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d MMM y", short: "dd/MM/yyyy" };
var g47 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var b42 = { full: "{{date}} '\xE0s' {{time}}", long: "{{date}} '\xE0s' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m50 = { date: r2({ formats: f47, defaultWidth: "full" }), time: r2({ formats: g47, defaultWidth: "full" }), dateTime: r2({ formats: b42, defaultWidth: "full" }) };
var v46 = { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "depois de cristo"] };
var P55 = { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"] };
var w51 = { narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], wide: ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"] };
var y53 = { narrow: ["D", "S", "T", "Q", "Q", "S", "S"], short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"], abbreviated: ["domingo", "segunda", "ter\xE7a", "quarta", "quinta", "sexta", "s\xE1bado"], wide: ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"] };
var M53 = { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "manh\xE3", afternoon: "tarde", evening: "tarde", night: "noite" }, abbreviated: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "manh\xE3", afternoon: "tarde", evening: "tarde", night: "noite" }, wide: { am: "a.m.", pm: "p.m.", midnight: "meia-noite", noon: "meio-dia", morning: "manh\xE3", afternoon: "tarde", evening: "tarde", night: "noite" } };
var j25 = { narrow: { am: "a", pm: "p", midnight: "mn", noon: "md", morning: "da manh\xE3", afternoon: "da tarde", evening: "da tarde", night: "da noite" }, abbreviated: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "da manh\xE3", afternoon: "da tarde", evening: "da tarde", night: "da noite" }, wide: { am: "a.m.", pm: "p.m.", midnight: "meia-noite", noon: "meio-dia", morning: "da manh\xE3", afternoon: "da tarde", evening: "da tarde", night: "da noite" } };
var W41 = (e30, a33) => {
  let t8 = Number(e30);
  return a33?.unit === "week" ? t8 + "\xAA" : t8 + "\xBA";
};
var c45 = { ordinalNumber: W41, era: c({ values: v46, defaultWidth: "wide" }), quarter: c({ values: P55, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: w51, defaultWidth: "wide" }), day: c({ values: y53, defaultWidth: "wide" }), dayPeriod: c({ values: M53, defaultWidth: "wide", formattingValues: j25, defaultFormattingWidth: "wide" }) };
var q19 = /^(\d+)[ºªo]?/i;
var D50 = /\d+/i;
var z48 = { narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i, wide: /^(antes de cristo|depois de cristo)/i };
var k45 = { any: [/^ac/i, /^dc/i], wide: [/^antes de cristo/i, /^depois de cristo/i] };
var H42 = { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º)? trimestre/i };
var T30 = { any: [/1/i, /2/i, /3/i, /4/i] };
var F54 = { narrow: /^[jfmajsond]/i, abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i, wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i };
var C42 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i] };
var S49 = { narrow: /^(dom|[23456]ª?|s[aá]b)/i, short: /^(dom|[23456]ª?|s[aá]b)/i, abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i, wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i };
var V50 = { short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i], narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i], any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i] };
var X51 = { narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i, any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i };
var L52 = { any: { am: /^a/i, pm: /^p/i, midnight: /^mn|^meia[-\s]noite/i, noon: /^md|^meio[-\s]dia/i, morning: /manhã/i, afternoon: /tarde/i, evening: /tarde/i, night: /noite/i } };
var h34 = { ordinalNumber: h({ matchPattern: q19, parsePattern: D50, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: z48, defaultMatchWidth: "wide", parsePatterns: k45, defaultParseWidth: "any" }), quarter: P({ matchPatterns: H42, defaultMatchWidth: "wide", parsePatterns: T30, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: F54, defaultMatchWidth: "wide", parsePatterns: C42, defaultParseWidth: "any" }), day: P({ matchPatterns: S49, defaultMatchWidth: "wide", parsePatterns: V50, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: X51, defaultMatchWidth: "any", parsePatterns: L52, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/pt.mjs
var f48 = { full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d 'de' MMM 'de' y", short: "dd/MM/y" };
var g48 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var p40 = { full: "{{date}} '\xE0s' {{time}}", long: "{{date}} '\xE0s' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var d28 = { date: r2({ formats: f48, defaultWidth: "full" }), time: r2({ formats: g48, defaultWidth: "full" }), dateTime: r2({ formats: p40, defaultWidth: "full" }) };
var P56 = { narrow: ["aC", "dC"], abbreviated: ["a.C.", "d.C."], wide: ["antes de Cristo", "depois de Cristo"] };
var M54 = { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"] };
var v47 = { narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], wide: ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"] };
var w52 = { narrow: ["d", "s", "t", "q", "q", "s", "s"], short: ["dom", "seg", "ter", "qua", "qui", "sex", "s\xE1b"], abbreviated: ["dom", "seg", "ter", "qua", "qui", "sex", "s\xE1b"], wide: ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"] };
var y54 = { narrow: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "manh\xE3", afternoon: "tarde", evening: "noite", night: "madrugada" }, abbreviated: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "manh\xE3", afternoon: "tarde", evening: "noite", night: "madrugada" }, wide: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "manh\xE3", afternoon: "tarde", evening: "noite", night: "madrugada" } };
var x49 = { narrow: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "da manh\xE3", afternoon: "da tarde", evening: "da noite", night: "da madrugada" }, abbreviated: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "da manh\xE3", afternoon: "da tarde", evening: "da noite", night: "da madrugada" }, wide: { am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "da manh\xE3", afternoon: "da tarde", evening: "da noite", night: "da madrugada" } };
var q20 = (a33, e30) => Number(a33) + "\xBA";
var c46 = { ordinalNumber: q20, era: c({ values: P56, defaultWidth: "wide" }), quarter: c({ values: M54, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: v47, defaultWidth: "wide" }), day: c({ values: w52, defaultWidth: "wide" }), dayPeriod: c({ values: y54, defaultWidth: "wide", formattingValues: x49, defaultFormattingWidth: "wide" }) };
var j26 = /^(\d+)(º|ª)?/i;
var z49 = /\d+/i;
var D51 = { narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i, wide: /^(antes de cristo|antes da era comum|depois de cristo|era comum)/i };
var k46 = { any: [/^ac/i, /^dc/i], wide: [/^(antes de cristo|antes da era comum)/i, /^(depois de cristo|era comum)/i] };
var C43 = { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º|ª)? trimestre/i };
var H43 = { any: [/1/i, /2/i, /3/i, /4/i] };
var F55 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i, wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i };
var T31 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ab/i, /^mai/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var V51 = { narrow: /^[dstq]/i, short: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i, abbreviated: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i, wide: /^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i };
var X52 = { narrow: [/^d/i, /^s/i, /^t/i, /^q/i, /^q/i, /^s/i, /^s/i], any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[áa]/i] };
var A25 = { narrow: /^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i, any: /^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i };
var L53 = { any: { am: /^a/i, pm: /^p/i, midnight: /^meia/i, noon: /^meio/i, morning: /manh[ãa]/i, afternoon: /tarde/i, evening: /noite/i, night: /madrugada/i } };
var h35 = { ordinalNumber: h({ matchPattern: j26, parsePattern: z49, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: D51, defaultMatchWidth: "wide", parsePatterns: k46, defaultParseWidth: "any" }), quarter: P({ matchPatterns: C43, defaultMatchWidth: "wide", parsePatterns: H43, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: F55, defaultMatchWidth: "wide", parsePatterns: T31, defaultParseWidth: "any" }), day: P({ matchPatterns: V51, defaultMatchWidth: "wide", parsePatterns: X52, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: A25, defaultMatchWidth: "any", parsePatterns: L53, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ro.mjs
var h36 = { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd.MM.yyyy" };
var f49 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var b43 = { full: "{{date}} 'la' {{time}}", long: "{{date}} 'la' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var d29 = { date: r2({ formats: h36, defaultWidth: "full" }), time: r2({ formats: f49, defaultWidth: "full" }), dateTime: r2({ formats: b43, defaultWidth: "full" }) };
var y55 = { narrow: ["\xCE", "D"], abbreviated: ["\xCE.d.C.", "D.C."], wide: ["\xCEnainte de Cristos", "Dup\u0103 Cristos"] };
var v48 = { narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["primul trimestru", "al doilea trimestru", "al treilea trimestru", "al patrulea trimestru"] };
var P57 = { narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], abbreviated: ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"], wide: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"] };
var w53 = { narrow: ["d", "l", "m", "m", "j", "v", "s"], short: ["du", "lu", "ma", "mi", "jo", "vi", "s\xE2"], abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "s\xE2m"], wide: ["duminic\u0103", "luni", "mar\u021Bi", "miercuri", "joi", "vineri", "s\xE2mb\u0103t\u0103"] };
var M55 = { narrow: { am: "a", pm: "p", midnight: "mn", noon: "ami", morning: "dim", afternoon: "da", evening: "s", night: "n" }, abbreviated: { am: "AM", pm: "PM", midnight: "miezul nop\u021Bii", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" }, wide: { am: "a.m.", pm: "p.m.", midnight: "miezul nop\u021Bii", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" } };
var z50 = { narrow: { am: "a", pm: "p", midnight: "mn", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" }, abbreviated: { am: "AM", pm: "PM", midnight: "miezul nop\u021Bii", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" }, wide: { am: "a.m.", pm: "p.m.", midnight: "miezul nop\u021Bii", noon: "amiaz\u0103", morning: "diminea\u021B\u0103", afternoon: "dup\u0103-amiaz\u0103", evening: "sear\u0103", night: "noapte" } };
var W42 = (a33, n19) => String(a33);
var l31 = { ordinalNumber: W42, era: c({ values: y55, defaultWidth: "wide" }), quarter: c({ values: v48, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: P57, defaultWidth: "wide" }), day: c({ values: w53, defaultWidth: "wide" }), dayPeriod: c({ values: M55, defaultWidth: "wide", formattingValues: z50, defaultFormattingWidth: "wide" }) };
var x50 = /^(\d+)?/i;
var C44 = /\d+/i;
var j27 = { narrow: /^(Î|D)/i, abbreviated: /^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i, wide: /^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i };
var k47 = { any: [/^ÎC/i, /^DC/i], wide: [/^(Înainte de Cristos|Înaintea erei noastre)/i, /^(După Cristos|Era noastră)/i] };
var F56 = { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^trimestrul [1234]/i };
var H44 = { any: [/1/i, /2/i, /3/i, /4/i] };
var T32 = { narrow: /^[ifmaasond]/i, abbreviated: /^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i, wide: /^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i };
var E49 = { narrow: [/^i/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ia/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^iun/i, /^iul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var V52 = { narrow: /^[dlmjvs]/i, short: /^(d|l|ma|mi|j|v|s)/i, abbreviated: /^(dum|lun|mar|mie|jo|vi|sâ)/i, wide: /^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i };
var X53 = { narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i], any: [/^d/i, /^l/i, /^ma/i, /^mi/i, /^j/i, /^v/i, /^s/i] };
var L54 = { narrow: /^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i, any: /^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i };
var S50 = { any: { am: /^a/i, pm: /^p/i, midnight: /^mn/i, noon: /amiaza/i, morning: /dimineaţa/i, afternoon: /după-amiaza/i, evening: /seara/i, night: /noaptea/i } };
var c47 = { ordinalNumber: h({ matchPattern: x50, parsePattern: C44, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: j27, defaultMatchWidth: "wide", parsePatterns: k47, defaultParseWidth: "any" }), quarter: P({ matchPatterns: F56, defaultMatchWidth: "wide", parsePatterns: H44, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: T32, defaultMatchWidth: "wide", parsePatterns: E49, defaultParseWidth: "any" }), day: P({ matchPatterns: V52, defaultMatchWidth: "wide", parsePatterns: X53, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: L54, defaultMatchWidth: "any", parsePatterns: S50, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ru.mjs
function u35(t8, e30) {
  if (t8.one !== void 0 && e30 === 1) return t8.one;
  let n19 = e30 % 10, i19 = e30 % 100;
  return n19 === 1 && i19 !== 11 ? t8.singularNominative.replace("{{count}}", String(e30)) : n19 >= 2 && n19 <= 4 && (i19 < 10 || i19 > 20) ? t8.singularGenitive.replace("{{count}}", String(e30)) : t8.pluralGenitive.replace("{{count}}", String(e30));
}
function a21(t8) {
  return (e30, n19) => n19?.addSuffix ? n19.comparison && n19.comparison > 0 ? t8.future ? u35(t8.future, e30) : "\u0447\u0435\u0440\u0435\u0437 " + u35(t8.regular, e30) : t8.past ? u35(t8.past, e30) : u35(t8.regular, e30) + " \u043D\u0430\u0437\u0430\u0434" : u35(t8.regular, e30);
}
var G9 = { lessThanXSeconds: a21({ regular: { one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u044B", singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434", pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, future: { one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } }), xSeconds: a21({ regular: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, past: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u043D\u0430\u0437\u0430\u0434", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430\u0437\u0430\u0434", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434" }, future: { singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B", pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } }), halfAMinute: (t8, e30) => e30?.addSuffix ? e30.comparison && e30.comparison > 0 ? "\u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B" : "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434" : "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B", lessThanXMinutes: a21({ regular: { one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u043C\u0438\u043D\u0443\u0442\u044B", singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B", singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442", pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442" }, future: { one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u043C\u0438\u043D\u0443\u0442\u0443", singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443", singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B", pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442" } }), xMinutes: a21({ regular: { singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0430", singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B", pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442" }, past: { singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0443 \u043D\u0430\u0437\u0430\u0434", singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434", pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434" }, future: { singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443", singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B", pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442" } }), aboutXHours: a21({ regular: { singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u0430", singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432", pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u0430", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u043E\u0432" } }), xHours: a21({ regular: { singularNominative: "{{count}} \u0447\u0430\u0441", singularGenitive: "{{count}} \u0447\u0430\u0441\u0430", pluralGenitive: "{{count}} \u0447\u0430\u0441\u043E\u0432" } }), xDays: a21({ regular: { singularNominative: "{{count}} \u0434\u0435\u043D\u044C", singularGenitive: "{{count}} \u0434\u043D\u044F", pluralGenitive: "{{count}} \u0434\u043D\u0435\u0439" } }), aboutXWeeks: a21({ regular: { singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u0438", singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C", pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044E", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u0438", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044C" } }), xWeeks: a21({ regular: { singularNominative: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044F", singularGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u0438", pluralGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044C" } }), aboutXMonths: a21({ regular: { singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0430", singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432", pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0430", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432" } }), xMonths: a21({ regular: { singularNominative: "{{count}} \u043C\u0435\u0441\u044F\u0446", singularGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0430", pluralGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432" } }), aboutXYears: a21({ regular: { singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0433\u043E\u0434\u0430", singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442", pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442" } }), xYears: a21({ regular: { singularNominative: "{{count}} \u0433\u043E\u0434", singularGenitive: "{{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "{{count}} \u043B\u0435\u0442" } }), overXYears: a21({ regular: { singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u0433\u043E\u0434\u0430", singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442", pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442" }, future: { singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442" } }), almostXYears: a21({ regular: { singularNominative: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434", singularGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u043B\u0435\u0442" }, future: { singularNominative: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", singularGenitive: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430", pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442" } }) };
var w54 = { full: "EEEE, d MMMM y '\u0433.'", long: "d MMMM y '\u0433.'", medium: "d MMM y '\u0433.'", short: "dd.MM.y" };
var b44 = { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var y56 = { any: "{{date}}, {{time}}" };
var d30 = { date: r2({ formats: w54, defaultWidth: "full" }), time: r2({ formats: b44, defaultWidth: "full" }), dateTime: r2({ formats: y56, defaultWidth: "any" }) };
var M56 = { narrow: ["\u0434\u043E \u043D.\u044D.", "\u043D.\u044D."], abbreviated: ["\u0434\u043E \u043D. \u044D.", "\u043D. \u044D."], wide: ["\u0434\u043E \u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B", "\u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B"] };
var k48 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1-\u0439 \u043A\u0432.", "2-\u0439 \u043A\u0432.", "3-\u0439 \u043A\u0432.", "4-\u0439 \u043A\u0432."], wide: ["1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"] };
var x51 = { narrow: ["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"], abbreviated: ["\u044F\u043D\u0432.", "\u0444\u0435\u0432.", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440.", "\u043C\u0430\u0439", "\u0438\u044E\u043D\u044C", "\u0438\u044E\u043B\u044C", "\u0430\u0432\u0433.", "\u0441\u0435\u043D\u0442.", "\u043E\u043A\u0442.", "\u043D\u043E\u044F\u0431.", "\u0434\u0435\u043A."], wide: ["\u044F\u043D\u0432\u0430\u0440\u044C", "\u0444\u0435\u0432\u0440\u0430\u043B\u044C", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0435\u043B\u044C", "\u043C\u0430\u0439", "\u0438\u044E\u043D\u044C", "\u0438\u044E\u043B\u044C", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u043E\u043A\u0442\u044F\u0431\u0440\u044C", "\u043D\u043E\u044F\u0431\u0440\u044C", "\u0434\u0435\u043A\u0430\u0431\u0440\u044C"] };
var D52 = { narrow: ["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"], abbreviated: ["\u044F\u043D\u0432.", "\u0444\u0435\u0432.", "\u043C\u0430\u0440.", "\u0430\u043F\u0440.", "\u043C\u0430\u044F", "\u0438\u044E\u043D.", "\u0438\u044E\u043B.", "\u0430\u0432\u0433.", "\u0441\u0435\u043D\u0442.", "\u043E\u043A\u0442.", "\u043D\u043E\u044F\u0431.", "\u0434\u0435\u043A."], wide: ["\u044F\u043D\u0432\u0430\u0440\u044F", "\u0444\u0435\u0432\u0440\u0430\u043B\u044F", "\u043C\u0430\u0440\u0442\u0430", "\u0430\u043F\u0440\u0435\u043B\u044F", "\u043C\u0430\u044F", "\u0438\u044E\u043D\u044F", "\u0438\u044E\u043B\u044F", "\u0430\u0432\u0433\u0443\u0441\u0442\u0430", "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F", "\u043E\u043A\u0442\u044F\u0431\u0440\u044F", "\u043D\u043E\u044F\u0431\u0440\u044F", "\u0434\u0435\u043A\u0430\u0431\u0440\u044F"] };
var F57 = { narrow: ["\u0412", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"], short: ["\u0432\u0441", "\u043F\u043D", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043F\u0442", "\u0441\u0431"], abbreviated: ["\u0432\u0441\u043A", "\u043F\u043D\u0434", "\u0432\u0442\u0440", "\u0441\u0440\u0434", "\u0447\u0442\u0432", "\u043F\u0442\u043D", "\u0441\u0443\u0431"], wide: ["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0435\u0440\u0433", "\u043F\u044F\u0442\u043D\u0438\u0446\u0430", "\u0441\u0443\u0431\u0431\u043E\u0442\u0430"] };
var z51 = { narrow: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u043B\u043D.", noon: "\u043F\u043E\u043B\u0434.", morning: "\u0443\u0442\u0440\u043E", afternoon: "\u0434\u0435\u043D\u044C", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u044C" }, abbreviated: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u043B\u043D.", noon: "\u043F\u043E\u043B\u0434.", morning: "\u0443\u0442\u0440\u043E", afternoon: "\u0434\u0435\u043D\u044C", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u044C" }, wide: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C", noon: "\u043F\u043E\u043B\u0434\u0435\u043D\u044C", morning: "\u0443\u0442\u0440\u043E", afternoon: "\u0434\u0435\u043D\u044C", evening: "\u0432\u0435\u0447\u0435\u0440", night: "\u043D\u043E\u0447\u044C" } };
var S51 = { narrow: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u043B\u043D.", noon: "\u043F\u043E\u043B\u0434.", morning: "\u0443\u0442\u0440\u0430", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u0438" }, abbreviated: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u043B\u043D.", noon: "\u043F\u043E\u043B\u0434.", morning: "\u0443\u0442\u0440\u0430", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u0438" }, wide: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C", noon: "\u043F\u043E\u043B\u0434\u0435\u043D\u044C", morning: "\u0443\u0442\u0440\u0430", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447\u0435\u0440\u0430", night: "\u043D\u043E\u0447\u0438" } };
var V53 = (t8, e30) => {
  let n19 = Number(t8), i19 = e30?.unit, r32;
  return i19 === "date" ? r32 = "-\u0435" : i19 === "week" || i19 === "minute" || i19 === "second" ? r32 = "-\u044F" : r32 = "-\u0439", n19 + r32;
};
var p41 = { ordinalNumber: V53, era: c({ values: M56, defaultWidth: "wide" }), quarter: c({ values: k48, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: x51, defaultWidth: "wide", formattingValues: D52, defaultFormattingWidth: "wide" }), day: c({ values: F57, defaultWidth: "wide" }), dayPeriod: c({ values: z51, defaultWidth: "any", formattingValues: S51, defaultFormattingWidth: "wide" }) };
var X54 = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i;
var E50 = /\d+/i;
var H45 = { narrow: /^((до )?н\.?\s?э\.?)/i, abbreviated: /^((до )?н\.?\s?э\.?)/i, wide: /^(до нашей эры|нашей эры|наша эра)/i };
var T33 = { any: [/^д/i, /^н/i] };
var C45 = { narrow: /^[1234]/i, abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i, wide: /^[1234](-?[ыои]?й?)? квартал/i };
var R30 = { any: [/1/i, /2/i, /3/i, /4/i] };
var Y16 = { narrow: /^[яфмаисонд]/i, abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i, wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i };
var q21 = { narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i], any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i] };
var O18 = { narrow: /^[впсч]/i, short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i, abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i, wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i };
var Q17 = { narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i], any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i] };
var A26 = { narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i, abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i, wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i };
var I13 = { any: { am: /^дп/i, pm: /^пп/i, midnight: /^полн/i, noon: /^полд/i, morning: /^у/i, afternoon: /^д[ен]/i, evening: /^в/i, night: /^н/i } };
var h37 = { ordinalNumber: h({ matchPattern: X54, parsePattern: E50, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: H45, defaultMatchWidth: "wide", parsePatterns: T33, defaultParseWidth: "any" }), quarter: P({ matchPatterns: C45, defaultMatchWidth: "wide", parsePatterns: R30, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: Y16, defaultMatchWidth: "wide", parsePatterns: q21, defaultParseWidth: "any" }), day: P({ matchPatterns: O18, defaultMatchWidth: "wide", parsePatterns: Q17, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: A26, defaultMatchWidth: "wide", parsePatterns: I13, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/se.mjs
var c48 = { full: "EEEE MMMM d. 'b.' y", long: "MMMM d. 'b.' y", medium: "MMM d. 'b.' y", short: "dd.MM.y" };
var v49 = { full: "'dii.' HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var k49 = { full: "{{date}} 'dii.' {{time}}", long: "{{date}} 'dii.' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m51 = { date: r2({ formats: c48, defaultWidth: "full" }), time: r2({ formats: v49, defaultWidth: "full" }), dateTime: r2({ formats: k49, defaultWidth: "full" }) };
var f50 = { narrow: ["o.Kr.", "m.Kr."], abbreviated: ["o.Kr.", "m.Kr."], wide: ["ovdal Kristusa", "ma\u014B\u014Bel Kristusa"] };
var p42 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. kvart\xE1la", "2. kvart\xE1la", "3. kvart\xE1la", "4. kvart\xE1la"] };
var P58 = { narrow: ["O", "G", "N", "C", "M", "G", "S", "B", "\u010C", "G", "S", "J"], abbreviated: ["o\u0111\u0111a", "guov", "njuk", "cuo", "mies", "geas", "suoi", "borg", "\u010Dak\u010D", "golg", "sk\xE1b", "juov"], wide: ["o\u0111\u0111ajagem\xE1nnu", "guovvam\xE1nnu", "njuk\u010Dam\xE1nnu", "cuo\u014Bom\xE1nnu", "miessem\xE1nnu", "geassem\xE1nnu", "suoidnem\xE1nnu", "borgem\xE1nnu", "\u010Dak\u010Dam\xE1nnu", "golggotm\xE1nnu", "sk\xE1bmam\xE1nnu", "juovlam\xE1nnu"] };
var w55 = { narrow: ["S", "V", "M", "G", "D", "B", "L"], short: ["sotn", "vuos", "ma\u014B", "gask", "duor", "bear", "l\xE1v"], abbreviated: ["sotn", "vuos", "ma\u014B", "gask", "duor", "bear", "l\xE1v"], wide: ["sotnabeaivi", "vuoss\xE1rga", "ma\u014B\u014Beb\xE1rga", "gaskavahkku", "duorastat", "bearjadat", "l\xE1vvardat"] };
var y57 = { narrow: { am: "a", pm: "p", midnight: "gaskaidja", noon: "gaskabeaivi", morning: "i\u0111\u0111es", afternoon: "ma\u014B\u014Bel gaska.", evening: "eahkes", night: "ihkku" }, abbreviated: { am: "a.m.", pm: "p.m.", midnight: "gaskaidja", noon: "gaskabeaivvi", morning: "i\u0111\u0111es", afternoon: "ma\u014B\u014Bel gaskabea.", evening: "eahkes", night: "ihkku" }, wide: { am: "a.m.", pm: "p.m.", midnight: "gaskaidja", noon: "gaskabeavvi", morning: "i\u0111\u0111es", afternoon: "ma\u014B\u014Bel gaskabeaivvi", evening: "eahkes", night: "ihkku" } };
var M57 = (a33, o36) => Number(a33) + ".";
var l32 = { ordinalNumber: M57, era: c({ values: f50, defaultWidth: "wide" }), quarter: c({ values: p42, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: P58, defaultWidth: "wide" }), day: c({ values: w55, defaultWidth: "wide" }), dayPeriod: c({ values: y57, defaultWidth: "wide" }) };
var W43 = /^(\d+)\.?/i;
var x52 = /\d+/i;
var D53 = { narrow: /^(o\.? ?Kr\.?|m\.? ?Kr\.?)/i, abbreviated: /^(o\.? ?Kr\.?|m\.? ?Kr\.?)/i, wide: /^(ovdal Kristusa|ovdal min áiggi|maŋŋel Kristusa|min áigi)/i };
var K16 = { any: [/^o/i, /^m/i] };
var E51 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](\.)? kvartála/i };
var H46 = { any: [/1/i, /2/i, /3/i, /4/i] };
var z52 = { narrow: /^[ogncmsbčj]/i, abbreviated: /^(ođđa|guov|njuk|cuo|mies|geas|suoi|borg|čakč|golg|skáb|juov)\.?/i, wide: /^(ođđajagemánnu|guovvamánnu|njukčamánnu|cuoŋománnu|miessemánnu|geassemánnu|suoidnemánnu|borgemánnu|čakčamánnu|golggotmánnu|skábmamánnu|juovlamánnu)/i };
var F58 = { narrow: [/^o/i, /^g/i, /^n/i, /^c/i, /^m/i, /^g/i, /^s/i, /^b/i, /^č/i, /^g/i, /^s/i, /^j/i], any: [/^o/i, /^gu/i, /^n/i, /^c/i, /^m/i, /^ge/i, /^su/i, /^b/i, /^č/i, /^go/i, /^sk/i, /^j/i] };
var L55 = { narrow: /^[svmgdbl]/i, short: /^(sotn|vuos|maŋ|gask|duor|bear|láv)/i, abbreviated: /^(sotn|vuos|maŋ|gask|duor|bear|láv)/i, wide: /^(sotnabeaivi|vuossárga|maŋŋebárga|gaskavahkku|duorastat|bearjadat|lávvardat)/i };
var S52 = { any: [/^s/i, /^v/i, /^m/i, /^g/i, /^d/i, /^b/i, /^l/i] };
var X55 = { narrow: /^(gaskaidja|gaskabeaivvi|(på) (iđđes|maŋŋel gaskabeaivvi|eahkes|ihkku)|[ap])/i, any: /^([ap]\.?\s?m\.?|gaskaidja|gaskabeaivvi|(på) (iđđes|maŋŋel gaskabeaivvi|eahkes|ihkku))/i };
var V54 = { any: { am: /^a(\.?\s?m\.?)?$/i, pm: /^p(\.?\s?m\.?)?$/i, midnight: /^gaskai/i, noon: /^gaskab/i, morning: /iđđes/i, afternoon: /maŋŋel gaskabeaivvi/i, evening: /eahkes/i, night: /ihkku/i } };
var g49 = { ordinalNumber: h({ matchPattern: W43, parsePattern: x52, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: D53, defaultMatchWidth: "wide", parsePatterns: K16, defaultParseWidth: "any" }), quarter: P({ matchPatterns: E51, defaultMatchWidth: "wide", parsePatterns: H46, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: z52, defaultMatchWidth: "wide", parsePatterns: F58, defaultParseWidth: "any" }), day: P({ matchPatterns: L55, defaultMatchWidth: "wide", parsePatterns: S52, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: X55, defaultMatchWidth: "any", parsePatterns: V54, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/sk.mjs
var M58 = { full: "EEEE d. MMMM y", long: "d. MMMM y", medium: "d. M. y", short: "d. M. y" };
var W44 = { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var x53 = { full: "{{date}}, {{time}}", long: "{{date}}, {{time}}", medium: "{{date}}, {{time}}", short: "{{date}} {{time}}" };
var f51 = { date: r2({ formats: M58, defaultWidth: "full" }), time: r2({ formats: W44, defaultWidth: "full" }), dateTime: r2({ formats: x53, defaultWidth: "full" }) };
var z53 = { narrow: ["pred Kr.", "po Kr."], abbreviated: ["pred Kr.", "po Kr."], wide: ["pred Kristom", "po Kristovi"] };
var L56 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. \u0161tvr\u0165rok", "2. \u0161tvr\u0165rok", "3. \u0161tvr\u0165rok", "4. \u0161tvr\u0165rok"] };
var V55 = { narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan", "feb", "mar", "apr", "m\xE1j", "j\xFAn", "j\xFAl", "aug", "sep", "okt", "nov", "dec"], wide: ["janu\xE1r", "febru\xE1r", "marec", "apr\xEDl", "m\xE1j", "j\xFAn", "j\xFAl", "august", "september", "okt\xF3ber", "november", "december"] };
var A27 = { narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan", "feb", "mar", "apr", "m\xE1j", "j\xFAn", "j\xFAl", "aug", "sep", "okt", "nov", "dec"], wide: ["janu\xE1ra", "febru\xE1ra", "marca", "apr\xEDla", "m\xE1ja", "j\xFAna", "j\xFAla", "augusta", "septembra", "okt\xF3bra", "novembra", "decembra"] };
var E52 = { narrow: ["n", "p", "u", "s", "\u0161", "p", "s"], short: ["ne", "po", "ut", "st", "\u0161t", "pi", "so"], abbreviated: ["ne", "po", "ut", "st", "\u0161t", "pi", "so"], wide: ["nede\u013Ea", "pondelok", "utorok", "streda", "\u0161tvrtok", "piatok", "sobota"] };
var Q18 = { narrow: { am: "AM", pm: "PM", midnight: "poln.", noon: "pol.", morning: "r\xE1no", afternoon: "pop.", evening: "ve\u010D.", night: "noc" }, abbreviated: { am: "AM", pm: "PM", midnight: "poln.", noon: "pol.", morning: "r\xE1no", afternoon: "popol.", evening: "ve\u010Der", night: "noc" }, wide: { am: "AM", pm: "PM", midnight: "polnoc", noon: "poludnie", morning: "r\xE1no", afternoon: "popoludnie", evening: "ve\u010Der", night: "noc" } };
var T34 = { narrow: { am: "AM", pm: "PM", midnight: "o poln.", noon: "nap.", morning: "r\xE1no", afternoon: "pop.", evening: "ve\u010D.", night: "v n." }, abbreviated: { am: "AM", pm: "PM", midnight: "o poln.", noon: "napol.", morning: "r\xE1no", afternoon: "popol.", evening: "ve\u010Der", night: "v noci" }, wide: { am: "AM", pm: "PM", midnight: "o polnoci", noon: "napoludnie", morning: "r\xE1no", afternoon: "popoludn\xED", evening: "ve\u010Der", night: "v noci" } };
var C46 = (t8, e30) => Number(t8) + ".";
var k50 = { ordinalNumber: C46, era: c({ values: z53, defaultWidth: "wide" }), quarter: c({ values: L56, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: V55, defaultWidth: "wide", formattingValues: A27, defaultFormattingWidth: "wide" }), day: c({ values: E52, defaultWidth: "wide" }), dayPeriod: c({ values: Q18, defaultWidth: "wide", formattingValues: T34, defaultFormattingWidth: "wide" }) };
var N49 = /^(\d+)\.?/i;
var R31 = /\d+/i;
var S53 = { narrow: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i, abbreviated: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i, wide: /^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i };
var q22 = { any: [/^pr/i, /^(po|n)/i] };
var O19 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]\. [šs]tvr[ťt]rok/i };
var G10 = { any: [/1/i, /2/i, /3/i, /4/i] };
var I14 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i, wide: /^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i };
var Y17 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^m[áa]j/i, /^j[úu]n/i, /^j[úu]l/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var _10 = { narrow: /^[npusšp]/i, short: /^(ne|po|ut|st|št|pi|so)/i, abbreviated: /^(ne|po|ut|st|št|pi|so)/i, wide: /^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i };
var B6 = { narrow: [/^n/i, /^p/i, /^u/i, /^s/i, /^š/i, /^p/i, /^s/i], any: [/^n/i, /^po/i, /^u/i, /^st/i, /^(št|stv)/i, /^pi/i, /^so/i] };
var J12 = { narrow: /^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i, abbreviated: /^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i, any: /^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i };
var U = { any: { am: /^am/i, pm: /^pm/i, midnight: /poln/i, noon: /^(nap|(na)?pol(\.|u))/i, morning: /^r[áa]no/i, afternoon: /^pop/i, evening: /^ve[čc]/i, night: /^(noc|v n\.)/i } };
var g50 = { ordinalNumber: h({ matchPattern: N49, parsePattern: R31, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: S53, defaultMatchWidth: "wide", parsePatterns: q22, defaultParseWidth: "any" }), quarter: P({ matchPatterns: O19, defaultMatchWidth: "wide", parsePatterns: G10, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: I14, defaultMatchWidth: "wide", parsePatterns: Y17, defaultParseWidth: "any" }), day: P({ matchPatterns: _10, defaultMatchWidth: "wide", parsePatterns: B6, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: J12, defaultMatchWidth: "any", parsePatterns: U, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/sl.mjs
var b45 = { full: "EEEE, dd. MMMM y", long: "dd. MMMM y", medium: "d. MMM y", short: "d. MM. yy" };
var k51 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var v50 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var d31 = { date: r2({ formats: b45, defaultWidth: "full" }), time: r2({ formats: k51, defaultWidth: "full" }), dateTime: r2({ formats: v50, defaultWidth: "full" }) };
var y58 = { narrow: ["pr. n. \u0161t.", "po n. \u0161t."], abbreviated: ["pr. n. \u0161t.", "po n. \u0161t."], wide: ["pred na\u0161im \u0161tetjem", "po na\u0161em \u0161tetju"] };
var P59 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1. \u010Det.", "2. \u010Det.", "3. \u010Det.", "4. \u010Det."], wide: ["1. \u010Detrtletje", "2. \u010Detrtletje", "3. \u010Detrtletje", "4. \u010Detrtletje"] };
var M59 = { narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "avg.", "sep.", "okt.", "nov.", "dec."], wide: ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"] };
var W45 = { narrow: ["n", "p", "t", "s", "\u010D", "p", "s"], short: ["ned.", "pon.", "tor.", "sre.", "\u010Det.", "pet.", "sob."], abbreviated: ["ned.", "pon.", "tor.", "sre.", "\u010Det.", "pet.", "sob."], wide: ["nedelja", "ponedeljek", "torek", "sreda", "\u010Detrtek", "petek", "sobota"] };
var z54 = { narrow: { am: "d", pm: "p", midnight: "24.00", noon: "12.00", morning: "j", afternoon: "p", evening: "v", night: "n" }, abbreviated: { am: "dop.", pm: "pop.", midnight: "poln.", noon: "pold.", morning: "jut.", afternoon: "pop.", evening: "ve\u010D.", night: "no\u010D" }, wide: { am: "dop.", pm: "pop.", midnight: "polno\u010D", noon: "poldne", morning: "jutro", afternoon: "popoldne", evening: "ve\u010Der", night: "no\u010D" } };
var x54 = { narrow: { am: "d", pm: "p", midnight: "24.00", noon: "12.00", morning: "zj", afternoon: "p", evening: "zv", night: "po" }, abbreviated: { am: "dop.", pm: "pop.", midnight: "opoln.", noon: "opold.", morning: "zjut.", afternoon: "pop.", evening: "zve\u010D.", night: "pono\u010Di" }, wide: { am: "dop.", pm: "pop.", midnight: "opolno\u010Di", noon: "opoldne", morning: "zjutraj", afternoon: "popoldan", evening: "zve\u010Der", night: "pono\u010Di" } };
var D54 = (t8, e30) => Number(t8) + ".";
var l33 = { ordinalNumber: D54, era: c({ values: y58, defaultWidth: "wide" }), quarter: c({ values: P59, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: M59, defaultWidth: "wide" }), day: c({ values: W45, defaultWidth: "wide" }), dayPeriod: c({ values: z54, defaultWidth: "wide", formattingValues: x54, defaultFormattingWidth: "wide" }) };
var F59 = /^(\d+)\./i;
var H47 = /\d+/i;
var V56 = { abbreviated: /^(pr\. n\. št\.|po n\. št\.)/i, wide: /^(pred Kristusom|pred na[sš]im [sš]tetjem|po Kristusu|po na[sš]em [sš]tetju|na[sš]ega [sš]tetja)/i };
var X56 = { any: [/^pr/i, /^(po|na[sš]em)/i] };
var L57 = { narrow: /^[1234]/i, abbreviated: /^[1234]\.\s?[čc]et\.?/i, wide: /^[1234]\. [čc]etrtletje/i };
var S54 = { any: [/1/i, /2/i, /3/i, /4/i] };
var C47 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i, wide: /^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i };
var N50 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], abbreviated: [/^ja/i, /^fe/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i], wide: [/^ja/i, /^fe/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var T35 = { narrow: /^[nptsčc]/i, short: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i, abbreviated: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i, wide: /^(nedelja|ponedeljek|torek|sreda|[cč]etrtek|petek|sobota)/i };
var R32 = { narrow: [/^n/i, /^p/i, /^t/i, /^s/i, /^[cč]/i, /^p/i, /^s/i], any: [/^n/i, /^po/i, /^t/i, /^sr/i, /^[cč]/i, /^pe/i, /^so/i] };
var Y18 = { narrow: /^(d|po?|z?v|n|z?j|24\.00|12\.00)/i, any: /^(dop\.|pop\.|o?poln(\.|o[cč]i?)|o?pold(\.|ne)|z?ve[cč](\.|er)|(po)?no[cč]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i };
var q23 = { narrow: { am: /^d/i, pm: /^p/i, midnight: /^24/i, noon: /^12/i, morning: /^(z?j)/i, afternoon: /^p/i, evening: /^(z?v)/i, night: /^(n|po)/i }, any: { am: /^dop\./i, pm: /^pop\./i, midnight: /^o?poln/i, noon: /^o?pold/i, morning: /j/i, afternoon: /^pop\./i, evening: /^z?ve/i, night: /(po)?no/i } };
var f52 = { ordinalNumber: h({ matchPattern: F59, parsePattern: H47, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: V56, defaultMatchWidth: "wide", parsePatterns: X56, defaultParseWidth: "any" }), quarter: P({ matchPatterns: L57, defaultMatchWidth: "wide", parsePatterns: S54, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: C47, defaultMatchWidth: "wide", parsePatterns: N50, defaultParseWidth: "wide" }), day: P({ matchPatterns: T35, defaultMatchWidth: "wide", parsePatterns: R32, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: Y18, defaultMatchWidth: "any", parsePatterns: q23, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/sq.mjs
var p43 = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" };
var f53 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var b46 = { full: "{{date}} 'n\xEB' {{time}}", long: "{{date}} 'n\xEB' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var d32 = { date: r2({ formats: p43, defaultWidth: "full" }), time: r2({ formats: f53, defaultWidth: "full" }), dateTime: r2({ formats: b46, defaultWidth: "full" }) };
var j28 = { narrow: ["P", "M"], abbreviated: ["PK", "MK"], wide: ["Para Krishtit", "Mbas Krishtit"] };
var P60 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["4-mujori I", "4-mujori II", "4-mujori III", "4-mujori IV"] };
var M60 = { narrow: ["J", "S", "M", "P", "M", "Q", "K", "G", "S", "T", "N", "D"], abbreviated: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "N\xEBn", "Dhj"], wide: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\xEBntor", "Dhjetor"] };
var v51 = { narrow: ["D", "H", "M", "M", "E", "P", "S"], short: ["Di", "H\xEB", "Ma", "M\xEB", "En", "Pr", "Sh"], abbreviated: ["Die", "H\xEBn", "Mar", "M\xEBr", "Enj", "Pre", "Sht"], wide: ["Diel\xEB", "H\xEBn\xEB", "Mart\xEB", "M\xEBrkur\xEB", "Enjte", "Premte", "Shtun\xEB"] };
var k52 = { narrow: { am: "p", pm: "m", midnight: "m", noon: "d", morning: "m\xEBngjes", afternoon: "dite", evening: "mbr\xEBmje", night: "nat\xEB" }, abbreviated: { am: "PD", pm: "MD", midnight: "mesn\xEBt\xEB", noon: "drek", morning: "m\xEBngjes", afternoon: "mbasdite", evening: "mbr\xEBmje", night: "nat\xEB" }, wide: { am: "p.d.", pm: "m.d.", midnight: "mesn\xEBt\xEB", noon: "drek", morning: "m\xEBngjes", afternoon: "mbasdite", evening: "mbr\xEBmje", night: "nat\xEB" } };
var y59 = { narrow: { am: "p", pm: "m", midnight: "m", noon: "d", morning: "n\xEB m\xEBngjes", afternoon: "n\xEB mbasdite", evening: "n\xEB mbr\xEBmje", night: "n\xEB mesnat\xEB" }, abbreviated: { am: "PD", pm: "MD", midnight: "mesnat\xEB", noon: "drek", morning: "n\xEB m\xEBngjes", afternoon: "n\xEB mbasdite", evening: "n\xEB mbr\xEBmje", night: "n\xEB mesnat\xEB" }, wide: { am: "p.d.", pm: "m.d.", midnight: "mesnat\xEB", noon: "drek", morning: "n\xEB m\xEBngjes", afternoon: "n\xEB mbasdite", evening: "n\xEB mbr\xEBmje", night: "n\xEB mesnat\xEB" } };
var w56 = (t8, r32) => {
  let e30 = Number(t8);
  return r32?.unit === "hour" ? String(e30) : e30 === 1 ? e30 + "-r\xEB" : e30 === 4 ? e30 + "t" : e30 + "-t\xEB";
};
var u36 = { ordinalNumber: w56, era: c({ values: j28, defaultWidth: "wide" }), quarter: c({ values: P60, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: M60, defaultWidth: "wide" }), day: c({ values: v51, defaultWidth: "wide" }), dayPeriod: c({ values: k52, defaultWidth: "wide", formattingValues: y59, defaultFormattingWidth: "wide" }) };
var D55 = /^(\d+)(-rë|-të|t|)?/i;
var x55 = /\d+/i;
var S55 = { narrow: /^(p|m)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(para krishtit|mbas krishtit)/i };
var q24 = { any: [/^b/i, /^(p|m)/i] };
var E53 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]-mujori (i{1,3}|iv)/i };
var z55 = { any: [/1/i, /2/i, /3/i, /4/i] };
var F60 = { narrow: /^[jsmpqkftnd]/i, abbreviated: /^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i, wide: /^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i };
var Q19 = { narrow: [/^j/i, /^s/i, /^m/i, /^p/i, /^m/i, /^q/i, /^k/i, /^g/i, /^s/i, /^t/i, /^n/i, /^d/i], any: [/^ja/i, /^shk/i, /^mar/i, /^pri/i, /^maj/i, /^qer/i, /^kor/i, /^gu/i, /^sht/i, /^tet/i, /^n/i, /^d/i] };
var V57 = { narrow: /^[dhmeps]/i, short: /^(di|hë|ma|më|en|pr|sh)/i, abbreviated: /^(die|hën|mar|mër|enj|pre|sht)/i, wide: /^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i };
var I15 = { narrow: [/^d/i, /^h/i, /^m/i, /^m/i, /^e/i, /^p/i, /^s/i], any: [/^d/i, /^h/i, /^ma/i, /^më/i, /^e/i, /^p/i, /^s/i] };
var N51 = { narrow: /^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i, any: /^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i };
var X57 = { any: { am: /^p/i, pm: /^m/i, midnight: /^me/i, noon: /^dr/i, morning: /mëngjes/i, afternoon: /mbasdite/i, evening: /mbrëmje/i, night: /natë/i } };
var l34 = { ordinalNumber: h({ matchPattern: D55, parsePattern: x55, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: S55, defaultMatchWidth: "wide", parsePatterns: q24, defaultParseWidth: "any" }), quarter: P({ matchPatterns: E53, defaultMatchWidth: "wide", parsePatterns: z55, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: F60, defaultMatchWidth: "wide", parsePatterns: Q19, defaultParseWidth: "any" }), day: P({ matchPatterns: V57, defaultMatchWidth: "wide", parsePatterns: I15, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: N51, defaultMatchWidth: "any", parsePatterns: X57, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/sr-Latn.mjs
var h38 = { full: "EEEE, d. MMMM yyyy.", long: "d. MMMM yyyy.", medium: "d. MMM yy.", short: "dd. MM. yy." };
var g51 = { full: "HH:mm:ss (zzzz)", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var f54 = { full: "{{date}} 'u' {{time}}", long: "{{date}} 'u' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var d33 = { date: r2({ formats: h38, defaultWidth: "full" }), time: r2({ formats: g51, defaultWidth: "full" }), dateTime: r2({ formats: f54, defaultWidth: "full" }) };
var v52 = { narrow: ["pr.n.e.", "AD"], abbreviated: ["pr. Hr.", "po. Hr."], wide: ["Pre Hrista", "Posle Hrista"] };
var b47 = { narrow: ["1.", "2.", "3.", "4."], abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"] };
var w57 = { narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], wide: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"] };
var k53 = { narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], wide: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"] };
var j29 = { narrow: ["N", "P", "U", "S", "\u010C", "P", "S"], short: ["ned", "pon", "uto", "sre", "\u010Det", "pet", "sub"], abbreviated: ["ned", "pon", "uto", "sre", "\u010Det", "pet", "sub"], wide: ["nedelja", "ponedeljak", "utorak", "sreda", "\u010Detvrtak", "petak", "subota"] };
var y60 = { narrow: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uve\u010De", night: "no\u0107u" }, abbreviated: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uve\u010De", night: "no\u0107u" }, wide: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutru", afternoon: "posle podne", evening: "uve\u010De", night: "no\u0107u" } };
var M61 = { narrow: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uve\u010De", night: "no\u0107u" }, abbreviated: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uve\u010De", night: "no\u0107u" }, wide: { am: "AM", pm: "PM", midnight: "pono\u0107", noon: "podne", morning: "ujutru", afternoon: "posle podne", evening: "uve\u010De", night: "no\u0107u" } };
var A28 = (e30, n19) => Number(e30) + ".";
var l35 = { ordinalNumber: A28, era: c({ values: v52, defaultWidth: "wide" }), quarter: c({ values: b47, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: w57, defaultWidth: "wide", formattingValues: k53, defaultFormattingWidth: "wide" }), day: c({ values: j29, defaultWidth: "wide" }), dayPeriod: c({ values: M61, defaultWidth: "wide", formattingValues: y60, defaultFormattingWidth: "wide" }) };
var H48 = /^(\d+)\./i;
var x56 = /\d+/i;
var I16 = { narrow: /^(pr\.n\.e\.|AD)/i, abbreviated: /^(pr\.\s?Hr\.|po\.\s?Hr\.)/i, wide: /^(Pre Hrista|pre nove ere|Posle Hrista|nova era)/i };
var D56 = { any: [/^pr/i, /^(po|nova)/i] };
var E54 = { narrow: /^[1234]/i, abbreviated: /^[1234]\.\s?kv\.?/i, wide: /^[1234]\. kvartal/i };
var z56 = { any: [/1/i, /2/i, /3/i, /4/i] };
var F61 = { narrow: /^(10|11|12|[123456789])\./i, abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i, wide: /^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(jun|juna)|(jul|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i };
var S56 = { narrow: [/^1/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^avg/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var V58 = { narrow: /^[npusčc]/i, short: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i, abbreviated: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i, wide: /^(nedelja|ponedeljak|utorak|sreda|(četvrtak|cetvrtak)|petak|subota)/i };
var L58 = { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] };
var X58 = { any: /^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|posle podne|ujutru)/i };
var N52 = { any: { am: /^a/i, pm: /^p/i, midnight: /^pono/i, noon: /^pod/i, morning: /jutro/i, afternoon: /(posle\s|po)+podne/i, evening: /(uvece|uveče)/i, night: /(nocu|noću)/i } };
var p44 = { ordinalNumber: h({ matchPattern: H48, parsePattern: x56, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: I16, defaultMatchWidth: "wide", parsePatterns: D56, defaultParseWidth: "any" }), quarter: P({ matchPatterns: E54, defaultMatchWidth: "wide", parsePatterns: z56, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: F61, defaultMatchWidth: "wide", parsePatterns: S56, defaultParseWidth: "any" }), day: P({ matchPatterns: V58, defaultMatchWidth: "wide", parsePatterns: L58, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: X58, defaultMatchWidth: "any", parsePatterns: N52, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/sr.mjs
var p45 = { full: "EEEE, d. MMMM yyyy.", long: "d. MMMM yyyy.", medium: "d. MMM yy.", short: "dd. MM. yy." };
var f55 = { full: "HH:mm:ss (zzzz)", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var P61 = { full: "{{date}} '\u0443' {{time}}", long: "{{date}} '\u0443' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var u37 = { date: r2({ formats: p45, defaultWidth: "full" }), time: r2({ formats: f55, defaultWidth: "full" }), dateTime: r2({ formats: P61, defaultWidth: "full" }) };
var g52 = { narrow: ["\u043F\u0440.\u043D.\u0435.", "\u0410\u0414"], abbreviated: ["\u043F\u0440. \u0425\u0440.", "\u043F\u043E. \u0425\u0440."], wide: ["\u041F\u0440\u0435 \u0425\u0440\u0438\u0441\u0442\u0430", "\u041F\u043E\u0441\u043B\u0435 \u0425\u0440\u0438\u0441\u0442\u0430"] };
var y61 = { narrow: ["1.", "2.", "3.", "4."], abbreviated: ["1. \u043A\u0432.", "2. \u043A\u0432.", "3. \u043A\u0432.", "4. \u043A\u0432."], wide: ["1. \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2. \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3. \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4. \u043A\u0432\u0430\u0440\u0442\u0430\u043B"] };
var b48 = { narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["\u0458\u0430\u043D", "\u0444\u0435\u0431", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043F", "\u043E\u043A\u0442", "\u043D\u043E\u0432", "\u0434\u0435\u0446"], wide: ["\u0458\u0430\u043D\u0443\u0430\u0440", "\u0444\u0435\u0431\u0440\u0443\u0430\u0440", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440", "\u043E\u043A\u0442\u043E\u0431\u0430\u0440", "\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440", "\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440"] };
var M62 = { narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["\u0458\u0430\u043D", "\u0444\u0435\u0431", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043F", "\u043E\u043A\u0442", "\u043D\u043E\u0432", "\u0434\u0435\u0446"], wide: ["\u0458\u0430\u043D\u0443\u0430\u0440", "\u0444\u0435\u0431\u0440\u0443\u0430\u0440", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440", "\u043E\u043A\u0442\u043E\u0431\u0430\u0440", "\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440", "\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440"] };
var v53 = { narrow: ["\u041D", "\u041F", "\u0423", "\u0421", "\u0427", "\u041F", "\u0421"], short: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0443\u0442\u043E", "\u0441\u0440\u0435", "\u0447\u0435\u0442", "\u043F\u0435\u0442", "\u0441\u0443\u0431"], abbreviated: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0443\u0442\u043E", "\u0441\u0440\u0435", "\u0447\u0435\u0442", "\u043F\u0435\u0442", "\u0441\u0443\u0431"], wide: ["\u043D\u0435\u0434\u0435\u0459\u0430", "\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A", "\u0443\u0442\u043E\u0440\u0430\u043A", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A", "\u043F\u0435\u0442\u0430\u043A", "\u0441\u0443\u0431\u043E\u0442\u0430"] };
var W46 = { narrow: { am: "\u0410\u041C", pm: "\u041F\u041C", midnight: "\u043F\u043E\u043D\u043E\u045B", noon: "\u043F\u043E\u0434\u043D\u0435", morning: "\u0443\u0458\u0443\u0442\u0440\u0443", afternoon: "\u043F\u043E\u043F\u043E\u0434\u043D\u0435", evening: "\u0443\u0432\u0435\u0447\u0435", night: "\u043D\u043E\u045B\u0443" }, abbreviated: { am: "\u0410\u041C", pm: "\u041F\u041C", midnight: "\u043F\u043E\u043D\u043E\u045B", noon: "\u043F\u043E\u0434\u043D\u0435", morning: "\u0443\u0458\u0443\u0442\u0440\u0443", afternoon: "\u043F\u043E\u043F\u043E\u0434\u043D\u0435", evening: "\u0443\u0432\u0435\u0447\u0435", night: "\u043D\u043E\u045B\u0443" }, wide: { am: "AM", pm: "PM", midnight: "\u043F\u043E\u043D\u043E\u045B", noon: "\u043F\u043E\u0434\u043D\u0435", morning: "\u0443\u0458\u0443\u0442\u0440\u0443", afternoon: "\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u043D\u0435", evening: "\u0443\u0432\u0435\u0447\u0435", night: "\u043D\u043E\u045B\u0443" } };
var A29 = { narrow: { am: "AM", pm: "PM", midnight: "\u043F\u043E\u043D\u043E\u045B", noon: "\u043F\u043E\u0434\u043D\u0435", morning: "\u0443\u0458\u0443\u0442\u0440\u0443", afternoon: "\u043F\u043E\u043F\u043E\u0434\u043D\u0435", evening: "\u0443\u0432\u0435\u0447\u0435", night: "\u043D\u043E\u045B\u0443" }, abbreviated: { am: "AM", pm: "PM", midnight: "\u043F\u043E\u043D\u043E\u045B", noon: "\u043F\u043E\u0434\u043D\u0435", morning: "\u0443\u0458\u0443\u0442\u0440\u0443", afternoon: "\u043F\u043E\u043F\u043E\u0434\u043D\u0435", evening: "\u0443\u0432\u0435\u0447\u0435", night: "\u043D\u043E\u045B\u0443" }, wide: { am: "AM", pm: "PM", midnight: "\u043F\u043E\u043D\u043E\u045B", noon: "\u043F\u043E\u0434\u043D\u0435", morning: "\u0443\u0458\u0443\u0442\u0440\u0443", afternoon: "\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u043D\u0435", evening: "\u0443\u0432\u0435\u0447\u0435", night: "\u043D\u043E\u045B\u0443" } };
var x57 = (t8, e30) => Number(t8) + ".";
var m52 = { ordinalNumber: x57, era: c({ values: g52, defaultWidth: "wide" }), quarter: c({ values: y61, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: b48, defaultWidth: "wide", formattingValues: M62, defaultFormattingWidth: "wide" }), day: c({ values: v53, defaultWidth: "wide" }), dayPeriod: c({ values: A29, defaultWidth: "wide", formattingValues: W46, defaultFormattingWidth: "wide" }) };
var D57 = /^(\d+)\./i;
var E55 = /\d+/i;
var k54 = { narrow: /^(пр\.н\.е\.|АД)/i, abbreviated: /^(пр\.\s?Хр\.|по\.\s?Хр\.)/i, wide: /^(Пре Христа|пре нове ере|После Христа|нова ера)/i };
var F62 = { any: [/^пр/i, /^(по|нова)/i] };
var H49 = { narrow: /^[1234]/i, abbreviated: /^[1234]\.\s?кв\.?/i, wide: /^[1234]\. квартал/i };
var V59 = { any: [/1/i, /2/i, /3/i, /4/i] };
var z57 = { narrow: /^(10|11|12|[123456789])\./i, abbreviated: /^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i, wide: /^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i };
var S57 = { narrow: [/^1/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i], any: [/^ја/i, /^ф/i, /^мар/i, /^ап/i, /^мај/i, /^јун/i, /^јул/i, /^авг/i, /^с/i, /^о/i, /^н/i, /^д/i] };
var X59 = { narrow: /^[пусчн]/i, short: /^(нед|пон|уто|сре|чет|пет|суб)/i, abbreviated: /^(нед|пон|уто|сре|чет|пет|суб)/i, wide: /^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i };
var L59 = { narrow: [/^п/i, /^у/i, /^с/i, /^ч/i, /^п/i, /^с/i, /^н/i], any: [/^нед/i, /^пон/i, /^уто/i, /^сре/i, /^чет/i, /^пет/i, /^суб/i] };
var N53 = { any: /^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i };
var C48 = { any: { am: /^a/i, pm: /^p/i, midnight: /^поно/i, noon: /^под/i, morning: /ујутру/i, afternoon: /(после\s|по)+подне/i, evening: /(увече)/i, night: /(ноћу)/i } };
var h39 = { ordinalNumber: h({ matchPattern: D57, parsePattern: E55, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: k54, defaultMatchWidth: "wide", parsePatterns: F62, defaultParseWidth: "any" }), quarter: P({ matchPatterns: H49, defaultMatchWidth: "wide", parsePatterns: V59, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: z57, defaultMatchWidth: "wide", parsePatterns: S57, defaultParseWidth: "any" }), day: P({ matchPatterns: X59, defaultMatchWidth: "wide", parsePatterns: L59, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: N53, defaultMatchWidth: "any", parsePatterns: C48, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/sv.mjs
var h40 = { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "y-MM-dd" };
var p46 = { full: "'kl'. HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var v54 = { full: "{{date}} 'kl.' {{time}}", long: "{{date}} 'kl.' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var s18 = { date: r2({ formats: h40, defaultWidth: "full" }), time: r2({ formats: p46, defaultWidth: "full" }), dateTime: r2({ formats: v54, defaultWidth: "full" }) };
var k55 = { narrow: ["f.Kr.", "e.Kr."], abbreviated: ["f.Kr.", "e.Kr."], wide: ["f\xF6re Kristus", "efter Kristus"] };
var P62 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"] };
var w58 = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"] };
var y62 = { narrow: ["S", "M", "T", "O", "T", "F", "L"], short: ["s\xF6", "m\xE5", "ti", "on", "to", "fr", "l\xF6"], abbreviated: ["s\xF6n", "m\xE5n", "tis", "ons", "tors", "fre", "l\xF6r"], wide: ["s\xF6ndag", "m\xE5ndag", "tisdag", "onsdag", "torsdag", "fredag", "l\xF6rdag"] };
var M63 = { narrow: { am: "fm", pm: "em", midnight: "midnatt", noon: "middag", morning: "morg.", afternoon: "efterm.", evening: "kv\xE4ll", night: "natt" }, abbreviated: { am: "f.m.", pm: "e.m.", midnight: "midnatt", noon: "middag", morning: "morgon", afternoon: "efterm.", evening: "kv\xE4ll", night: "natt" }, wide: { am: "f\xF6rmiddag", pm: "eftermiddag", midnight: "midnatt", noon: "middag", morning: "morgon", afternoon: "eftermiddag", evening: "kv\xE4ll", night: "natt" } };
var j30 = { narrow: { am: "fm", pm: "em", midnight: "midnatt", noon: "middag", morning: "p\xE5 morg.", afternoon: "p\xE5 efterm.", evening: "p\xE5 kv\xE4llen", night: "p\xE5 natten" }, abbreviated: { am: "fm", pm: "em", midnight: "midnatt", noon: "middag", morning: "p\xE5 morg.", afternoon: "p\xE5 efterm.", evening: "p\xE5 kv\xE4llen", night: "p\xE5 natten" }, wide: { am: "fm", pm: "em", midnight: "midnatt", noon: "middag", morning: "p\xE5 morgonen", afternoon: "p\xE5 eftermiddagen", evening: "p\xE5 kv\xE4llen", night: "p\xE5 natten" } };
var W47 = (e30, n19) => {
  let a33 = Number(e30), t8 = a33 % 100;
  if (t8 > 20 || t8 < 10) switch (t8 % 10) {
    case 1:
    case 2:
      return a33 + ":a";
  }
  return a33 + ":e";
};
var u38 = { ordinalNumber: W47, era: c({ values: k55, defaultWidth: "wide" }), quarter: c({ values: P62, defaultWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: w58, defaultWidth: "wide" }), day: c({ values: y62, defaultWidth: "wide" }), dayPeriod: c({ values: M63, defaultWidth: "wide", formattingValues: j30, defaultFormattingWidth: "wide" }) };
var E56 = /^(\d+)(:a|:e)?/i;
var D58 = /\d+/i;
var K17 = { narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i, abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i, wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i };
var F63 = { any: [/^f/i, /^[ev]/i] };
var H50 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](:a|:e)? kvartalet/i };
var z58 = { any: [/1/i, /2/i, /3/i, /4/i] };
var L60 = { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i, wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i };
var V60 = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var X60 = { narrow: /^[smtofl]/i, short: /^(sö|må|ti|on|to|fr|lö)/i, abbreviated: /^(sön|mån|tis|ons|tors|fre|lör)/i, wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i };
var S58 = { any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i] };
var N54 = { any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i };
var Q20 = { any: { am: /^f/i, pm: /^e/i, midnight: /^midn/i, noon: /^midd/i, morning: /morgon/i, afternoon: /eftermiddag/i, evening: /kväll/i, night: /natt/i } };
var f56 = { ordinalNumber: h({ matchPattern: E56, parsePattern: D58, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: K17, defaultMatchWidth: "wide", parsePatterns: F63, defaultParseWidth: "any" }), quarter: P({ matchPatterns: H50, defaultMatchWidth: "wide", parsePatterns: z58, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: L60, defaultMatchWidth: "wide", parsePatterns: V60, defaultParseWidth: "any" }), day: P({ matchPatterns: X60, defaultMatchWidth: "wide", parsePatterns: S58, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: N54, defaultMatchWidth: "any", parsePatterns: Q20, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ta.mjs
var g53 = { full: "EEEE, d MMMM, y", long: "d MMMM, y", medium: "d MMM, y", short: "d/M/yy" };
var p47 = { full: "a h:mm:ss zzzz", long: "a h:mm:ss z", medium: "a h:mm:ss", short: "a h:mm" };
var P63 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var s19 = { date: r2({ formats: g53, defaultWidth: "full" }), time: r2({ formats: p47, defaultWidth: "full" }), dateTime: r2({ formats: P63, defaultWidth: "full" }) };
var w59 = { narrow: ["\u0B95\u0BBF.\u0BAE\u0BC1.", "\u0B95\u0BBF.\u0BAA\u0BBF."], abbreviated: ["\u0B95\u0BBF.\u0BAE\u0BC1.", "\u0B95\u0BBF.\u0BAA\u0BBF."], wide: ["\u0B95\u0BBF\u0BB1\u0BBF\u0BB8\u0BCD\u0BA4\u0BC1\u0BB5\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "\u0B85\u0BA9\u0BCD\u0BA9\u0BCB \u0B9F\u0BCB\u0BAE\u0BBF\u0BA9\u0BBF"] };
var y63 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u0B95\u0BBE\u0BB2\u0BBE.1", "\u0B95\u0BBE\u0BB2\u0BBE.2", "\u0B95\u0BBE\u0BB2\u0BBE.3", "\u0B95\u0BBE\u0BB2\u0BBE.4"], wide: ["\u0B92\u0BA9\u0BCD\u0BB1\u0BBE\u0BAE\u0BCD \u0B95\u0BBE\u0BB2\u0BBE\u0BA3\u0BCD\u0B9F\u0BC1", "\u0B87\u0BB0\u0BA3\u0BCD\u0B9F\u0BBE\u0BAE\u0BCD \u0B95\u0BBE\u0BB2\u0BBE\u0BA3\u0BCD\u0B9F\u0BC1", "\u0BAE\u0BC2\u0BA9\u0BCD\u0BB1\u0BBE\u0BAE\u0BCD \u0B95\u0BBE\u0BB2\u0BBE\u0BA3\u0BCD\u0B9F\u0BC1", "\u0BA8\u0BBE\u0BA9\u0BCD\u0B95\u0BBE\u0BAE\u0BCD \u0B95\u0BBE\u0BB2\u0BBE\u0BA3\u0BCD\u0B9F\u0BC1"] };
var v55 = { narrow: ["\u0B9C", "\u0BAA\u0BBF", "\u0BAE\u0BBE", "\u0B8F", "\u0BAE\u0BC7", "\u0B9C\u0BC2", "\u0B9C\u0BC2", "\u0B86", "\u0B9A\u0BC6", "\u0B85", "\u0BA8", "\u0B9F\u0BBF"], abbreviated: ["\u0B9C\u0BA9.", "\u0BAA\u0BBF\u0BAA\u0BCD.", "\u0BAE\u0BBE\u0BB0\u0BCD.", "\u0B8F\u0BAA\u0BCD.", "\u0BAE\u0BC7", "\u0B9C\u0BC2\u0BA9\u0BCD", "\u0B9C\u0BC2\u0BB2\u0BC8", "\u0B86\u0B95.", "\u0B9A\u0BC6\u0BAA\u0BCD.", "\u0B85\u0B95\u0BCD.", "\u0BA8\u0BB5.", "\u0B9F\u0BBF\u0B9A."], wide: ["\u0B9C\u0BA9\u0BB5\u0BB0\u0BBF", "\u0BAA\u0BBF\u0BAA\u0BCD\u0BB0\u0BB5\u0BB0\u0BBF", "\u0BAE\u0BBE\u0BB0\u0BCD\u0B9A\u0BCD", "\u0B8F\u0BAA\u0BCD\u0BB0\u0BB2\u0BCD", "\u0BAE\u0BC7", "\u0B9C\u0BC2\u0BA9\u0BCD", "\u0B9C\u0BC2\u0BB2\u0BC8", "\u0B86\u0B95\u0BB8\u0BCD\u0B9F\u0BCD", "\u0B9A\u0BC6\u0BAA\u0BCD\u0B9F\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD", "\u0B85\u0B95\u0BCD\u0B9F\u0BCB\u0BAA\u0BB0\u0BCD", "\u0BA8\u0BB5\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD", "\u0B9F\u0BBF\u0B9A\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD"] };
var M64 = { narrow: ["\u0B9E\u0BBE", "\u0BA4\u0BBF", "\u0B9A\u0BC6", "\u0BAA\u0BC1", "\u0BB5\u0BBF", "\u0BB5\u0BC6", "\u0B9A"], short: ["\u0B9E\u0BBE", "\u0BA4\u0BBF", "\u0B9A\u0BC6", "\u0BAA\u0BC1", "\u0BB5\u0BBF", "\u0BB5\u0BC6", "\u0B9A"], abbreviated: ["\u0B9E\u0BBE\u0BAF\u0BBF.", "\u0BA4\u0BBF\u0B99\u0BCD.", "\u0B9A\u0BC6\u0BB5\u0BCD.", "\u0BAA\u0BC1\u0BA4.", "\u0BB5\u0BBF\u0BAF\u0BBE.", "\u0BB5\u0BC6\u0BB3\u0BCD.", "\u0B9A\u0BA9\u0BBF"], wide: ["\u0B9E\u0BBE\u0BAF\u0BBF\u0BB1\u0BC1", "\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0BB3\u0BCD", "\u0B9A\u0BC6\u0BB5\u0BCD\u0BB5\u0BBE\u0BAF\u0BCD", "\u0BAA\u0BC1\u0BA4\u0BA9\u0BCD", "\u0BB5\u0BBF\u0BAF\u0BBE\u0BB4\u0BA9\u0BCD", "\u0BB5\u0BC6\u0BB3\u0BCD\u0BB3\u0BBF", "\u0B9A\u0BA9\u0BBF"] };
var W48 = { narrow: { am: "\u0BAE\u0BC1.\u0BAA", pm: "\u0BAA\u0BBF.\u0BAA", midnight: "\u0BA8\u0BB3\u0BCD.", noon: "\u0BA8\u0BA3\u0BCD.", morning: "\u0B95\u0BBE.", afternoon: "\u0BAE\u0BA4\u0BBF.", evening: "\u0BAE\u0BBE.", night: "\u0B87\u0BB0." }, abbreviated: { am: "\u0BAE\u0BC1\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD", pm: "\u0BAA\u0BBF\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD", midnight: "\u0BA8\u0BB3\u0BCD\u0BB3\u0BBF\u0BB0\u0BB5\u0BC1", noon: "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD", morning: "\u0B95\u0BBE\u0BB2\u0BC8", afternoon: "\u0BAE\u0BA4\u0BBF\u0BAF\u0BAE\u0BCD", evening: "\u0BAE\u0BBE\u0BB2\u0BC8", night: "\u0B87\u0BB0\u0BB5\u0BC1" }, wide: { am: "\u0BAE\u0BC1\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD", pm: "\u0BAA\u0BBF\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD", midnight: "\u0BA8\u0BB3\u0BCD\u0BB3\u0BBF\u0BB0\u0BB5\u0BC1", noon: "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD", morning: "\u0B95\u0BBE\u0BB2\u0BC8", afternoon: "\u0BAE\u0BA4\u0BBF\u0BAF\u0BAE\u0BCD", evening: "\u0BAE\u0BBE\u0BB2\u0BC8", night: "\u0B87\u0BB0\u0BB5\u0BC1" } };
var x58 = { narrow: { am: "\u0BAE\u0BC1.\u0BAA", pm: "\u0BAA\u0BBF.\u0BAA", midnight: "\u0BA8\u0BB3\u0BCD.", noon: "\u0BA8\u0BA3\u0BCD.", morning: "\u0B95\u0BBE.", afternoon: "\u0BAE\u0BA4\u0BBF.", evening: "\u0BAE\u0BBE.", night: "\u0B87\u0BB0." }, abbreviated: { am: "\u0BAE\u0BC1\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD", pm: "\u0BAA\u0BBF\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD", midnight: "\u0BA8\u0BB3\u0BCD\u0BB3\u0BBF\u0BB0\u0BB5\u0BC1", noon: "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD", morning: "\u0B95\u0BBE\u0BB2\u0BC8", afternoon: "\u0BAE\u0BA4\u0BBF\u0BAF\u0BAE\u0BCD", evening: "\u0BAE\u0BBE\u0BB2\u0BC8", night: "\u0B87\u0BB0\u0BB5\u0BC1" }, wide: { am: "\u0BAE\u0BC1\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD", pm: "\u0BAA\u0BBF\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD", midnight: "\u0BA8\u0BB3\u0BCD\u0BB3\u0BBF\u0BB0\u0BB5\u0BC1", noon: "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD", morning: "\u0B95\u0BBE\u0BB2\u0BC8", afternoon: "\u0BAE\u0BA4\u0BBF\u0BAF\u0BAE\u0BCD", evening: "\u0BAE\u0BBE\u0BB2\u0BC8", night: "\u0B87\u0BB0\u0BB5\u0BC1" } };
var D59 = (t8, n19) => String(t8);
var l36 = { ordinalNumber: D59, era: c({ values: w59, defaultWidth: "wide" }), quarter: c({ values: y63, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: v55, defaultWidth: "wide" }), day: c({ values: M64, defaultWidth: "wide" }), dayPeriod: c({ values: W48, defaultWidth: "wide", formattingValues: x58, defaultFormattingWidth: "wide" }) };
var z59 = /^(\d+)(வது)?/i;
var F64 = /\d+/i;
var V61 = { narrow: /^(கி.மு.|கி.பி.)/i, abbreviated: /^(கி\.?\s?மு\.?|கி\.?\s?பி\.?)/, wide: /^(கிறிஸ்துவுக்கு\sமுன்|அன்னோ\sடோமினி)/i };
var X61 = { any: [/கி\.?\s?மு\.?/, /கி\.?\s?பி\.?/] };
var L61 = { narrow: /^[1234]/i, abbreviated: /^காலா.[1234]/i, wide: /^(ஒன்றாம்|இரண்டாம்|மூன்றாம்|நான்காம்) காலாண்டு/i };
var E57 = { narrow: [/1/i, /2/i, /3/i, /4/i], any: [/(1|காலா.1|ஒன்றாம்)/i, /(2|காலா.2|இரண்டாம்)/i, /(3|காலா.3|மூன்றாம்)/i, /(4|காலா.4|நான்காம்)/i] };
var S59 = { narrow: /^(ஜ|பி|மா|ஏ|மே|ஜூ|ஆ|செ|அ|ந|டி)$/i, abbreviated: /^(ஜன.|பிப்.|மார்.|ஏப்.|மே|ஜூன்|ஜூலை|ஆக.|செப்.|அக்.|நவ.|டிச.)/i, wide: /^(ஜனவரி|பிப்ரவரி|மார்ச்|ஏப்ரல்|மே|ஜூன்|ஜூலை|ஆகஸ்ட்|செப்டம்பர்|அக்டோபர்|நவம்பர்|டிசம்பர்)/i };
var T36 = { narrow: [/^ஜ$/i, /^பி/i, /^மா/i, /^ஏ/i, /^மே/i, /^ஜூ/i, /^ஜூ/i, /^ஆ/i, /^செ/i, /^அ/i, /^ந/i, /^டி/i], any: [/^ஜன/i, /^பி/i, /^மா/i, /^ஏ/i, /^மே/i, /^ஜூன்/i, /^ஜூலை/i, /^ஆ/i, /^செ/i, /^அ/i, /^ந/i, /^டி/i] };
var C49 = { narrow: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i, short: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i, abbreviated: /^(ஞாயி.|திங்.|செவ்.|புத.|வியா.|வெள்.|சனி)/i, wide: /^(ஞாயிறு|திங்கள்|செவ்வாய்|புதன்|வியாழன்|வெள்ளி|சனி)/i };
var N55 = { narrow: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i], any: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i] };
var R33 = { narrow: /^(மு.ப|பி.ப|நள்|நண்|காலை|மதியம்|மாலை|இரவு)/i, any: /^(மு.ப|பி.ப|முற்பகல்|பிற்பகல்|நள்ளிரவு|நண்பகல்|காலை|மதியம்|மாலை|இரவு)/i };
var Y19 = { any: { am: /^மு/i, pm: /^பி/i, midnight: /^நள்/i, noon: /^நண்/i, morning: /காலை/i, afternoon: /மதியம்/i, evening: /மாலை/i, night: /இரவு/i } };
var m53 = { ordinalNumber: h({ matchPattern: z59, parsePattern: F64, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: V61, defaultMatchWidth: "wide", parsePatterns: X61, defaultParseWidth: "any" }), quarter: P({ matchPatterns: L61, defaultMatchWidth: "wide", parsePatterns: E57, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: S59, defaultMatchWidth: "wide", parsePatterns: T36, defaultParseWidth: "any" }), day: P({ matchPatterns: C49, defaultMatchWidth: "wide", parsePatterns: N55, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: R33, defaultMatchWidth: "any", parsePatterns: Y19, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/te.mjs
var f57 = { full: "d, MMMM y, EEEE", long: "d MMMM, y", medium: "d MMM, y", short: "dd-MM-yy" };
var p48 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var P64 = { full: "{{date}} {{time}}'\u0C15\u0C3F'", long: "{{date}} {{time}}'\u0C15\u0C3F'", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m54 = { date: r2({ formats: f57, defaultWidth: "full" }), time: r2({ formats: p48, defaultWidth: "full" }), dateTime: r2({ formats: P64, defaultWidth: "full" }) };
var g54 = { narrow: ["\u0C15\u0C4D\u0C30\u0C40.\u0C2A\u0C42.", "\u0C15\u0C4D\u0C30\u0C40.\u0C36."], abbreviated: ["\u0C15\u0C4D\u0C30\u0C40.\u0C2A\u0C42.", "\u0C15\u0C4D\u0C30\u0C40.\u0C36."], wide: ["\u0C15\u0C4D\u0C30\u0C40\u0C38\u0C4D\u0C24\u0C41 \u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C02", "\u0C15\u0C4D\u0C30\u0C40\u0C38\u0C4D\u0C24\u0C41\u0C36\u0C15\u0C02"] };
var b49 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u0C24\u0C4D\u0C30\u0C481", "\u0C24\u0C4D\u0C30\u0C482", "\u0C24\u0C4D\u0C30\u0C483", "\u0C24\u0C4D\u0C30\u0C484"], wide: ["1\u0C35 \u0C24\u0C4D\u0C30\u0C48\u0C2E\u0C3E\u0C38\u0C3F\u0C15\u0C02", "2\u0C35 \u0C24\u0C4D\u0C30\u0C48\u0C2E\u0C3E\u0C38\u0C3F\u0C15\u0C02", "3\u0C35 \u0C24\u0C4D\u0C30\u0C48\u0C2E\u0C3E\u0C38\u0C3F\u0C15\u0C02", "4\u0C35 \u0C24\u0C4D\u0C30\u0C48\u0C2E\u0C3E\u0C38\u0C3F\u0C15\u0C02"] };
var y64 = { narrow: ["\u0C1C", "\u0C2B\u0C3F", "\u0C2E\u0C3E", "\u0C0F", "\u0C2E\u0C47", "\u0C1C\u0C42", "\u0C1C\u0C41", "\u0C06", "\u0C38\u0C46", "\u0C05", "\u0C28", "\u0C21\u0C3F"], abbreviated: ["\u0C1C\u0C28", "\u0C2B\u0C3F\u0C2C\u0C4D\u0C30", "\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C3F", "\u0C0F\u0C2A\u0C4D\u0C30\u0C3F", "\u0C2E\u0C47", "\u0C1C\u0C42\u0C28\u0C4D", "\u0C1C\u0C41\u0C32\u0C48", "\u0C06\u0C17", "\u0C38\u0C46\u0C2A\u0C4D\u0C1F\u0C46\u0C02", "\u0C05\u0C15\u0C4D\u0C1F\u0C4B", "\u0C28\u0C35\u0C02", "\u0C21\u0C3F\u0C38\u0C46\u0C02"], wide: ["\u0C1C\u0C28\u0C35\u0C30\u0C3F", "\u0C2B\u0C3F\u0C2C\u0C4D\u0C30\u0C35\u0C30\u0C3F", "\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C3F", "\u0C0F\u0C2A\u0C4D\u0C30\u0C3F\u0C32\u0C4D", "\u0C2E\u0C47", "\u0C1C\u0C42\u0C28\u0C4D", "\u0C1C\u0C41\u0C32\u0C48", "\u0C06\u0C17\u0C38\u0C4D\u0C1F\u0C41", "\u0C38\u0C46\u0C2A\u0C4D\u0C1F\u0C46\u0C02\u0C2C\u0C30\u0C4D", "\u0C05\u0C15\u0C4D\u0C1F\u0C4B\u0C2C\u0C30\u0C4D", "\u0C28\u0C35\u0C02\u0C2C\u0C30\u0C4D", "\u0C21\u0C3F\u0C38\u0C46\u0C02\u0C2C\u0C30\u0C4D"] };
var v56 = { narrow: ["\u0C06", "\u0C38\u0C4B", "\u0C2E", "\u0C2C\u0C41", "\u0C17\u0C41", "\u0C36\u0C41", "\u0C36"], short: ["\u0C06\u0C26\u0C3F", "\u0C38\u0C4B\u0C2E", "\u0C2E\u0C02\u0C17\u0C33", "\u0C2C\u0C41\u0C27", "\u0C17\u0C41\u0C30\u0C41", "\u0C36\u0C41\u0C15\u0C4D\u0C30", "\u0C36\u0C28\u0C3F"], abbreviated: ["\u0C06\u0C26\u0C3F", "\u0C38\u0C4B\u0C2E", "\u0C2E\u0C02\u0C17\u0C33", "\u0C2C\u0C41\u0C27", "\u0C17\u0C41\u0C30\u0C41", "\u0C36\u0C41\u0C15\u0C4D\u0C30", "\u0C36\u0C28\u0C3F"], wide: ["\u0C06\u0C26\u0C3F\u0C35\u0C3E\u0C30\u0C02", "\u0C38\u0C4B\u0C2E\u0C35\u0C3E\u0C30\u0C02", "\u0C2E\u0C02\u0C17\u0C33\u0C35\u0C3E\u0C30\u0C02", "\u0C2C\u0C41\u0C27\u0C35\u0C3E\u0C30\u0C02", "\u0C17\u0C41\u0C30\u0C41\u0C35\u0C3E\u0C30\u0C02", "\u0C36\u0C41\u0C15\u0C4D\u0C30\u0C35\u0C3E\u0C30\u0C02", "\u0C36\u0C28\u0C3F\u0C35\u0C3E\u0C30\u0C02"] };
var M65 = { narrow: { am: "\u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C3E\u0C39\u0C4D\u0C28\u0C02", pm: "\u0C05\u0C2A\u0C30\u0C3E\u0C39\u0C4D\u0C28\u0C02", midnight: "\u0C05\u0C30\u0C4D\u0C27\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F", noon: "\u0C2E\u0C3F\u0C1F\u0C4D\u0C1F\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02", morning: "\u0C09\u0C26\u0C2F\u0C02", afternoon: "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02", evening: "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02", night: "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F" }, abbreviated: { am: "\u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C3E\u0C39\u0C4D\u0C28\u0C02", pm: "\u0C05\u0C2A\u0C30\u0C3E\u0C39\u0C4D\u0C28\u0C02", midnight: "\u0C05\u0C30\u0C4D\u0C27\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F", noon: "\u0C2E\u0C3F\u0C1F\u0C4D\u0C1F\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02", morning: "\u0C09\u0C26\u0C2F\u0C02", afternoon: "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02", evening: "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02", night: "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F" }, wide: { am: "\u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C3E\u0C39\u0C4D\u0C28\u0C02", pm: "\u0C05\u0C2A\u0C30\u0C3E\u0C39\u0C4D\u0C28\u0C02", midnight: "\u0C05\u0C30\u0C4D\u0C27\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F", noon: "\u0C2E\u0C3F\u0C1F\u0C4D\u0C1F\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02", morning: "\u0C09\u0C26\u0C2F\u0C02", afternoon: "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02", evening: "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02", night: "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F" } };
var W49 = { narrow: { am: "\u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C3E\u0C39\u0C4D\u0C28\u0C02", pm: "\u0C05\u0C2A\u0C30\u0C3E\u0C39\u0C4D\u0C28\u0C02", midnight: "\u0C05\u0C30\u0C4D\u0C27\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F", noon: "\u0C2E\u0C3F\u0C1F\u0C4D\u0C1F\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02", morning: "\u0C09\u0C26\u0C2F\u0C02", afternoon: "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02", evening: "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02", night: "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F" }, abbreviated: { am: "\u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C3E\u0C39\u0C4D\u0C28\u0C02", pm: "\u0C05\u0C2A\u0C30\u0C3E\u0C39\u0C4D\u0C28\u0C02", midnight: "\u0C05\u0C30\u0C4D\u0C27\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F", noon: "\u0C2E\u0C3F\u0C1F\u0C4D\u0C1F\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02", morning: "\u0C09\u0C26\u0C2F\u0C02", afternoon: "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02", evening: "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02", night: "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F" }, wide: { am: "\u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C3E\u0C39\u0C4D\u0C28\u0C02", pm: "\u0C05\u0C2A\u0C30\u0C3E\u0C39\u0C4D\u0C28\u0C02", midnight: "\u0C05\u0C30\u0C4D\u0C27\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F", noon: "\u0C2E\u0C3F\u0C1F\u0C4D\u0C1F\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02", morning: "\u0C09\u0C26\u0C2F\u0C02", afternoon: "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02", evening: "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02", night: "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F" } };
var x59 = (t8, i19) => Number(t8) + "\u0C35";
var l37 = { ordinalNumber: x59, era: c({ values: g54, defaultWidth: "wide" }), quarter: c({ values: b49, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: y64, defaultWidth: "wide" }), day: c({ values: v56, defaultWidth: "wide" }), dayPeriod: c({ values: M65, defaultWidth: "wide", formattingValues: W49, defaultFormattingWidth: "wide" }) };
var k56 = /^(\d+)(వ)?/i;
var z60 = /\d+/i;
var F65 = { narrow: /^(క్రీ\.పూ\.|క్రీ\.శ\.)/i, abbreviated: /^(క్రీ\.?\s?పూ\.?|ప్ర\.?\s?శ\.?\s?పూ\.?|క్రీ\.?\s?శ\.?|సా\.?\s?శ\.?)/i, wide: /^(క్రీస్తు పూర్వం|ప్రస్తుత శకానికి పూర్వం|క్రీస్తు శకం|ప్రస్తుత శకం)/i };
var V62 = { any: [/^(పూ|శ)/i, /^సా/i] };
var X62 = { narrow: /^[1234]/i, abbreviated: /^త్రై[1234]/i, wide: /^[1234](వ)? త్రైమాసికం/i };
var L62 = { any: [/1/i, /2/i, /3/i, /4/i] };
var E58 = { narrow: /^(జూ|జు|జ|ఫి|మా|ఏ|మే|ఆ|సె|అ|న|డి)/i, abbreviated: /^(జన|ఫిబ్ర|మార్చి|ఏప్రి|మే|జూన్|జులై|ఆగ|సెప్|అక్టో|నవ|డిసె)/i, wide: /^(జనవరి|ఫిబ్రవరి|మార్చి|ఏప్రిల్|మే|జూన్|జులై|ఆగస్టు|సెప్టెంబర్|అక్టోబర్|నవంబర్|డిసెంబర్)/i };
var S60 = { narrow: [/^జ/i, /^ఫి/i, /^మా/i, /^ఏ/i, /^మే/i, /^జూ/i, /^జు/i, /^ఆ/i, /^సె/i, /^అ/i, /^న/i, /^డి/i], any: [/^జన/i, /^ఫి/i, /^మా/i, /^ఏ/i, /^మే/i, /^జూన్/i, /^జులై/i, /^ఆగ/i, /^సె/i, /^అ/i, /^న/i, /^డి/i] };
var N56 = { narrow: /^(ఆ|సో|మ|బు|గు|శు|శ)/i, short: /^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i, abbreviated: /^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i, wide: /^(ఆదివారం|సోమవారం|మంగళవారం|బుధవారం|గురువారం|శుక్రవారం|శనివారం)/i };
var C50 = { narrow: [/^ఆ/i, /^సో/i, /^మ/i, /^బు/i, /^గు/i, /^శు/i, /^శ/i], any: [/^ఆది/i, /^సోమ/i, /^మం/i, /^బుధ/i, /^గురు/i, /^శుక్ర/i, /^శని/i] };
var R34 = { narrow: /^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i, any: /^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i };
var T37 = { any: { am: /^పూర్వాహ్నం/i, pm: /^అపరాహ్నం/i, midnight: /^అర్ధ/i, noon: /^మిట్ట/i, morning: /ఉదయం/i, afternoon: /మధ్యాహ్నం/i, evening: /సాయంత్రం/i, night: /రాత్రి/i } };
var c49 = { ordinalNumber: h({ matchPattern: k56, parsePattern: z60, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: F65, defaultMatchWidth: "wide", parsePatterns: V62, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X62, defaultMatchWidth: "wide", parsePatterns: L62, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: E58, defaultMatchWidth: "wide", parsePatterns: S60, defaultParseWidth: "any" }), day: P({ matchPatterns: N56, defaultMatchWidth: "wide", parsePatterns: C50, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: R34, defaultMatchWidth: "any", parsePatterns: T37, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/th.mjs
var f58 = { full: "\u0E27\u0E31\u0E19EEEE\u0E17\u0E35\u0E48 do MMMM y", long: "do MMMM y", medium: "d MMM y", short: "dd/MM/yyyy" };
var p49 = { full: "H:mm:ss \u0E19. zzzz", long: "H:mm:ss \u0E19. z", medium: "H:mm:ss \u0E19.", short: "H:mm \u0E19." };
var g55 = { full: "{{date}} '\u0E40\u0E27\u0E25\u0E32' {{time}}", long: "{{date}} '\u0E40\u0E27\u0E25\u0E32' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m55 = { date: r2({ formats: f58, defaultWidth: "full" }), time: r2({ formats: p49, defaultWidth: "medium" }), dateTime: r2({ formats: g55, defaultWidth: "full" }) };
var P65 = { narrow: ["B", "\u0E04\u0E28"], abbreviated: ["BC", "\u0E04.\u0E28."], wide: ["\u0E1B\u0E35\u0E01\u0E48\u0E2D\u0E19\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E01\u0E32\u0E25", "\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E4C\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A"] };
var y65 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A\u0E41\u0E23\u0E01", "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07", "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21", "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E35\u0E48"] };
var w60 = { narrow: ["\u0E2D\u0E32.", "\u0E08.", "\u0E2D.", "\u0E1E.", "\u0E1E\u0E24.", "\u0E28.", "\u0E2A."], short: ["\u0E2D\u0E32.", "\u0E08.", "\u0E2D.", "\u0E1E.", "\u0E1E\u0E24.", "\u0E28.", "\u0E2A."], abbreviated: ["\u0E2D\u0E32.", "\u0E08.", "\u0E2D.", "\u0E1E.", "\u0E1E\u0E24.", "\u0E28.", "\u0E2A."], wide: ["\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C", "\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C", "\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23", "\u0E1E\u0E38\u0E18", "\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35", "\u0E28\u0E38\u0E01\u0E23\u0E4C", "\u0E40\u0E2A\u0E32\u0E23\u0E4C"] };
var v57 = { narrow: ["\u0E21.\u0E04.", "\u0E01.\u0E1E.", "\u0E21\u0E35.\u0E04.", "\u0E40\u0E21.\u0E22.", "\u0E1E.\u0E04.", "\u0E21\u0E34.\u0E22.", "\u0E01.\u0E04.", "\u0E2A.\u0E04.", "\u0E01.\u0E22.", "\u0E15.\u0E04.", "\u0E1E.\u0E22.", "\u0E18.\u0E04."], abbreviated: ["\u0E21.\u0E04.", "\u0E01.\u0E1E.", "\u0E21\u0E35.\u0E04.", "\u0E40\u0E21.\u0E22.", "\u0E1E.\u0E04.", "\u0E21\u0E34.\u0E22.", "\u0E01.\u0E04.", "\u0E2A.\u0E04.", "\u0E01.\u0E22.", "\u0E15.\u0E04.", "\u0E1E.\u0E22.", "\u0E18.\u0E04."], wide: ["\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21", "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C", "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21", "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19", "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21", "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19", "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21", "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21", "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19", "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21", "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19", "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21"] };
var M66 = { narrow: { am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19", noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", morning: "\u0E40\u0E0A\u0E49\u0E32", afternoon: "\u0E1A\u0E48\u0E32\u0E22", evening: "\u0E40\u0E22\u0E47\u0E19", night: "\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19" }, abbreviated: { am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19", noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", morning: "\u0E40\u0E0A\u0E49\u0E32", afternoon: "\u0E1A\u0E48\u0E32\u0E22", evening: "\u0E40\u0E22\u0E47\u0E19", night: "\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19" }, wide: { am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19", noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", morning: "\u0E40\u0E0A\u0E49\u0E32", afternoon: "\u0E1A\u0E48\u0E32\u0E22", evening: "\u0E40\u0E22\u0E47\u0E19", night: "\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19" } };
var W50 = { narrow: { am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19", noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", morning: "\u0E15\u0E2D\u0E19\u0E40\u0E0A\u0E49\u0E32", afternoon: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19", evening: "\u0E15\u0E2D\u0E19\u0E40\u0E22\u0E47\u0E19", night: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19" }, abbreviated: { am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19", noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", morning: "\u0E15\u0E2D\u0E19\u0E40\u0E0A\u0E49\u0E32", afternoon: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19", evening: "\u0E15\u0E2D\u0E19\u0E40\u0E22\u0E47\u0E19", night: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19" }, wide: { am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19", noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07", morning: "\u0E15\u0E2D\u0E19\u0E40\u0E0A\u0E49\u0E32", afternoon: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19", evening: "\u0E15\u0E2D\u0E19\u0E40\u0E22\u0E47\u0E19", night: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19" } };
var x60 = (t8, o36) => String(t8);
var h41 = { ordinalNumber: x60, era: c({ values: P65, defaultWidth: "wide" }), quarter: c({ values: y65, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: v57, defaultWidth: "wide" }), day: c({ values: w60, defaultWidth: "wide" }), dayPeriod: c({ values: M66, defaultWidth: "wide", formattingValues: W50, defaultFormattingWidth: "wide" }) };
var k57 = /^\d+/i;
var z61 = /\d+/i;
var F66 = { narrow: /^([bB]|[aA]|คศ)/i, abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i, wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i };
var V63 = { any: [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i] };
var X63 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^ไตรมาส(ที่)? ?[1234]/i };
var L63 = { any: [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i] };
var C51 = { narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i, abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i, wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i };
var E59 = { wide: [/^มก/i, /^กุม/i, /^มี/i, /^เม/i, /^พฤษ/i, /^มิ/i, /^กรก/i, /^ส/i, /^กัน/i, /^ต/i, /^พฤศ/i, /^ธ/i], any: [/^ม\.?ค\.?/i, /^ก\.?พ\.?/i, /^มี\.?ค\.?/i, /^เม\.?ย\.?/i, /^พ\.?ค\.?/i, /^มิ\.?ย\.?/i, /^ก\.?ค\.?/i, /^ส\.?ค\.?/i, /^ก\.?ย\.?/i, /^ต\.?ค\.?/i, /^พ\.?ย\.?/i, /^ธ\.?ค\.?/i] };
var H51 = { narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i, short: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i, abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i, wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i };
var Q21 = { wide: [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i], any: [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i] };
var S61 = { any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i };
var B7 = { any: { am: /^ก่อนเที่ยง/i, pm: /^หลังเที่ยง/i, midnight: /^เที่ยงคืน/i, noon: /^เที่ยง/i, morning: /เช้า/i, afternoon: /บ่าย/i, evening: /เย็น/i, night: /กลางคืน/i } };
var u39 = { ordinalNumber: h({ matchPattern: k57, parsePattern: z61, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: F66, defaultMatchWidth: "wide", parsePatterns: V63, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X63, defaultMatchWidth: "wide", parsePatterns: L63, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: C51, defaultMatchWidth: "wide", parsePatterns: E59, defaultParseWidth: "any" }), day: P({ matchPatterns: H51, defaultMatchWidth: "wide", parsePatterns: Q21, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: S61, defaultMatchWidth: "any", parsePatterns: B7, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/tr.mjs
var y66 = { full: "d MMMM y EEEE", long: "d MMMM y", medium: "d MMM y", short: "dd.MM.yyyy" };
var f59 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var k58 = { full: "{{date}} 'saat' {{time}}", long: "{{date}} 'saat' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var l38 = { date: r2({ formats: y66, defaultWidth: "full" }), time: r2({ formats: f59, defaultWidth: "full" }), dateTime: r2({ formats: k58, defaultWidth: "full" }) };
var g56 = { narrow: ["M\xD6", "MS"], abbreviated: ["M\xD6", "MS"], wide: ["Milattan \xD6nce", "Milattan Sonra"] };
var b50 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1\xC7", "2\xC7", "3\xC7", "4\xC7"], wide: ["\u0130lk \xE7eyrek", "\u0130kinci \xC7eyrek", "\xDC\xE7\xFCnc\xFC \xE7eyrek", "Son \xE7eyrek"] };
var P66 = { narrow: ["O", "\u015E", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"], abbreviated: ["Oca", "\u015Eub", "Mar", "Nis", "May", "Haz", "Tem", "A\u011Fu", "Eyl", "Eki", "Kas", "Ara"], wide: ["Ocak", "\u015Eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011Fustos", "Eyl\xFCl", "Ekim", "Kas\u0131m", "Aral\u0131k"] };
var M67 = { narrow: ["P", "P", "S", "\xC7", "P", "C", "C"], short: ["Pz", "Pt", "Sa", "\xC7a", "Pe", "Cu", "Ct"], abbreviated: ["Paz", "Pzt", "Sal", "\xC7ar", "Per", "Cum", "Cts"], wide: ["Pazar", "Pazartesi", "Sal\u0131", "\xC7ar\u015Famba", "Per\u015Fembe", "Cuma", "Cumartesi"] };
var w61 = { narrow: { am: "\xF6\xF6", pm: "\xF6s", midnight: "gy", noon: "\xF6", morning: "sa", afternoon: "\xF6s", evening: "ak", night: "ge" }, abbreviated: { am: "\xD6\xD6", pm: "\xD6S", midnight: "gece yar\u0131s\u0131", noon: "\xF6\u011Fle", morning: "sabah", afternoon: "\xF6\u011Fleden sonra", evening: "ak\u015Fam", night: "gece" }, wide: { am: "\xD6.\xD6.", pm: "\xD6.S.", midnight: "gece yar\u0131s\u0131", noon: "\xF6\u011Fle", morning: "sabah", afternoon: "\xF6\u011Fleden sonra", evening: "ak\u015Fam", night: "gece" } };
var z62 = { narrow: { am: "\xF6\xF6", pm: "\xF6s", midnight: "gy", noon: "\xF6", morning: "sa", afternoon: "\xF6s", evening: "ak", night: "ge" }, abbreviated: { am: "\xD6\xD6", pm: "\xD6S", midnight: "gece yar\u0131s\u0131", noon: "\xF6\u011Flen", morning: "sabahleyin", afternoon: "\xF6\u011Fleden sonra", evening: "ak\u015Famleyin", night: "geceleyin" }, wide: { am: "\xF6.\xF6.", pm: "\xF6.s.", midnight: "gece yar\u0131s\u0131", noon: "\xF6\u011Flen", morning: "sabahleyin", afternoon: "\xF6\u011Fleden sonra", evening: "ak\u015Famleyin", night: "geceleyin" } };
var v58 = (a33, r32) => Number(a33) + ".";
var c50 = { ordinalNumber: v58, era: c({ values: g56, defaultWidth: "wide" }), quarter: c({ values: b50, defaultWidth: "wide", argumentCallback: (a33) => Number(a33) - 1 }), month: c({ values: P66, defaultWidth: "wide" }), day: c({ values: M67, defaultWidth: "wide" }), dayPeriod: c({ values: w61, defaultWidth: "wide", formattingValues: z62, defaultFormattingWidth: "wide" }) };
var x61 = /^(\d+)(\.)?/i;
var S62 = /\d+/i;
var H52 = { narrow: /^(mö|ms)/i, abbreviated: /^(mö|ms)/i, wide: /^(milattan önce|milattan sonra)/i };
var C52 = { any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i] };
var D60 = { narrow: /^[1234]/i, abbreviated: /^[1234]ç/i, wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i };
var E60 = { any: [/1/i, /2/i, /3/i, /4/i], abbreviated: [/1ç/i, /2ç/i, /3ç/i, /4ç/i], wide: [/^(i|İ)lk çeyrek/i, /(i|İ)kinci çeyrek/i, /üçüncü çeyrek/i, /son çeyrek/i] };
var F67 = { narrow: /^[oşmnhtaek]/i, abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i, wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i };
var N57 = { narrow: [/^o/i, /^ş/i, /^m/i, /^n/i, /^m/i, /^h/i, /^t/i, /^a/i, /^e/i, /^e/i, /^k/i, /^a/i], any: [/^o/i, /^ş/i, /^mar/i, /^n/i, /^may/i, /^h/i, /^t/i, /^ağ/i, /^ey/i, /^ek/i, /^k/i, /^ar/i] };
var V64 = { narrow: /^[psçc]/i, short: /^(pz|pt|sa|ça|pe|cu|ct)/i, abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i, wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i };
var X64 = { narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i], any: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i], wide: [/^pazar(?!tesi)/i, /^pazartesi/i, /^salı/i, /^çarşamba/i, /^perşembe/i, /^cuma(?!rtesi)/i, /^cumartesi/i] };
var A30 = { narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i, any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i };
var L64 = { any: { am: /^ö\.?ö\.?/i, pm: /^ö\.?s\.?/i, midnight: /^(gy|gece yarısı)/i, noon: /^öğ/i, morning: /^sa/i, afternoon: /^öğleden sonra/i, evening: /^ak/i, night: /^ge/i } };
var u40 = { ordinalNumber: h({ matchPattern: x61, parsePattern: S62, valueCallback: function(a33) {
  return parseInt(a33, 10);
} }), era: P({ matchPatterns: H52, defaultMatchWidth: "wide", parsePatterns: C52, defaultParseWidth: "any" }), quarter: P({ matchPatterns: D60, defaultMatchWidth: "wide", parsePatterns: E60, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: F67, defaultMatchWidth: "wide", parsePatterns: N57, defaultParseWidth: "any" }), day: P({ matchPatterns: V64, defaultMatchWidth: "wide", parsePatterns: X64, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: A30, defaultMatchWidth: "any", parsePatterns: L64, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/ug.mjs
var f60 = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" };
var p50 = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" };
var g57 = { full: "{{date}} '\u062F\u06D5' {{time}}", long: "{{date}} '\u062F\u06D5' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var m56 = { date: r2({ formats: f60, defaultWidth: "full" }), time: r2({ formats: p50, defaultWidth: "full" }), dateTime: r2({ formats: g57, defaultWidth: "full" }) };
var w62 = { narrow: ["\u0628", "\u0643"], abbreviated: ["\u0628", "\u0643"], wide: ["\u0645\u0649\u064A\u0644\u0627\u062F\u0649\u062F\u0649\u0646 \u0628\u06C7\u0631\u06C7\u0646", "\u0645\u0649\u064A\u0644\u0627\u062F\u0649\u062F\u0649\u0646 \u0643\u0649\u064A\u0649\u0646"] };
var y67 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1", "2", "3", "4"], wide: ["\u0628\u0649\u0631\u0649\u0646\u062C\u0649 \u0686\u0627\u0631\u06D5\u0643", "\u0626\u0649\u0643\u0643\u0649\u0646\u062C\u0649 \u0686\u0627\u0631\u06D5\u0643", "\u0626\u06C8\u0686\u0649\u0646\u062C\u0649 \u0686\u0627\u0631\u06D5\u0643", "\u062A\u06C6\u062A\u0649\u0646\u062C\u0649 \u0686\u0627\u0631\u06D5\u0643"] };
var b51 = { narrow: ["\u064A", "\u0641", "\u0645", "\u0627", "\u0645", "\u0649", "\u0649", "\u0627", "\u0633", "\u06C6", "\u0646", "\u062F"], abbreviated: ["\u064A\u0627\u0646\u06CB\u0627\u0631", "\u0641\u06D0\u06CB\u0649\u0631\u0627\u0644", "\u0645\u0627\u0631\u062A", "\u0626\u0627\u067E\u0631\u0649\u0644", "\u0645\u0627\u064A", "\u0626\u0649\u064A\u06C7\u0646", "\u0626\u0649\u064A\u0648\u0644", "\u0626\u0627\u06CB\u063A\u06C7\u0633\u062A", "\u0633\u0649\u0646\u062A\u06D5\u0628\u0649\u0631", "\u0626\u06C6\u0643\u062A\u06D5\u0628\u0649\u0631", "\u0646\u0648\u064A\u0627\u0628\u0649\u0631", "\u062F\u0649\u0643\u0627\u0628\u0649\u0631"], wide: ["\u064A\u0627\u0646\u06CB\u0627\u0631", "\u0641\u06D0\u06CB\u0649\u0631\u0627\u0644", "\u0645\u0627\u0631\u062A", "\u0626\u0627\u067E\u0631\u0649\u0644", "\u0645\u0627\u064A", "\u0626\u0649\u064A\u06C7\u0646", "\u0626\u0649\u064A\u0648\u0644", "\u0626\u0627\u06CB\u063A\u06C7\u0633\u062A", "\u0633\u0649\u0646\u062A\u06D5\u0628\u0649\u0631", "\u0626\u06C6\u0643\u062A\u06D5\u0628\u0649\u0631", "\u0646\u0648\u064A\u0627\u0628\u0649\u0631", "\u062F\u0649\u0643\u0627\u0628\u0649\u0631"] };
var v59 = { narrow: ["\u064A", "\u062F", "\u0633", "\u0686", "\u067E", "\u062C", "\u0634"], short: ["\u064A", "\u062F", "\u0633", "\u0686", "\u067E", "\u062C", "\u0634"], abbreviated: ["\u064A\u06D5\u0643\u0634\u06D5\u0646\u0628\u06D5", "\u062F\u06C8\u0634\u06D5\u0646\u0628\u06D5", "\u0633\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5", "\u0686\u0627\u0631\u0634\u06D5\u0646\u0628\u06D5", "\u067E\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5", "\u062C\u06C8\u0645\u06D5", "\u0634\u06D5\u0646\u0628\u06D5"], wide: ["\u064A\u06D5\u0643\u0634\u06D5\u0646\u0628\u06D5", "\u062F\u06C8\u0634\u06D5\u0646\u0628\u06D5", "\u0633\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5", "\u0686\u0627\u0631\u0634\u06D5\u0646\u0628\u06D5", "\u067E\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5", "\u062C\u06C8\u0645\u06D5", "\u0634\u06D5\u0646\u0628\u06D5"] };
var M68 = { narrow: { am: "\u0626\u06D5", pm: "\u0686", midnight: "\u0643", noon: "\u0686", morning: "\u0626\u06D5\u062A\u0649\u06AF\u06D5\u0646", afternoon: "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u0649\u064A\u0649\u0646", evening: "\u0626\u0627\u062E\u0634\u0649\u0645", night: "\u0643\u0649\u0686\u06D5" }, abbreviated: { am: "\u0626\u06D5", pm: "\u0686", midnight: "\u0643", noon: "\u0686", morning: "\u0626\u06D5\u062A\u0649\u06AF\u06D5\u0646", afternoon: "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u0649\u064A\u0649\u0646", evening: "\u0626\u0627\u062E\u0634\u0649\u0645", night: "\u0643\u0649\u0686\u06D5" }, wide: { am: "\u0626\u06D5", pm: "\u0686", midnight: "\u0643", noon: "\u0686", morning: "\u0626\u06D5\u062A\u0649\u06AF\u06D5\u0646", afternoon: "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u0649\u064A\u0649\u0646", evening: "\u0626\u0627\u062E\u0634\u0649\u0645", night: "\u0643\u0649\u0686\u06D5" } };
var W51 = { narrow: { am: "\u0626\u06D5", pm: "\u0686", midnight: "\u0643", noon: "\u0686", morning: "\u0626\u06D5\u062A\u0649\u06AF\u06D5\u0646\u062F\u06D5", afternoon: "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u0649\u064A\u0649\u0646", evening: "\u0626\u0627\u062E\u0634\u0627\u0645\u062F\u0627", night: "\u0643\u0649\u0686\u0649\u062F\u06D5" }, abbreviated: { am: "\u0626\u06D5", pm: "\u0686", midnight: "\u0643", noon: "\u0686", morning: "\u0626\u06D5\u062A\u0649\u06AF\u06D5\u0646\u062F\u06D5", afternoon: "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u0649\u064A\u0649\u0646", evening: "\u0626\u0627\u062E\u0634\u0627\u0645\u062F\u0627", night: "\u0643\u0649\u0686\u0649\u062F\u06D5" }, wide: { am: "\u0626\u06D5", pm: "\u0686", midnight: "\u0643", noon: "\u0686", morning: "\u0626\u06D5\u062A\u0649\u06AF\u06D5\u0646\u062F\u06D5", afternoon: "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u0649\u064A\u0649\u0646", evening: "\u0626\u0627\u062E\u0634\u0627\u0645\u062F\u0627", night: "\u0643\u0649\u0686\u0649\u062F\u06D5" } };
var x62 = (t8, o36) => String(t8);
var u41 = { ordinalNumber: x62, era: c({ values: w62, defaultWidth: "wide" }), quarter: c({ values: y67, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: b51, defaultWidth: "wide" }), day: c({ values: v59, defaultWidth: "wide" }), dayPeriod: c({ values: M68, defaultWidth: "wide", formattingValues: W51, defaultFormattingWidth: "wide" }) };
var k59 = /^(\d+)(th|st|nd|rd)?/i;
var z63 = /\d+/i;
var F68 = { narrow: /^(ب|ك)/i, wide: /^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i };
var V65 = { any: [/^بۇرۇن/i, /^كىيىن/i] };
var X65 = { narrow: /^[1234]/i, abbreviated: /^چ[1234]/i, wide: /^چارەك [1234]/i };
var L65 = { any: [/1/i, /2/i, /3/i, /4/i] };
var E61 = { narrow: /^[يفمئامئ‍ئاسۆند]/i, abbreviated: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i, wide: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i };
var S63 = { narrow: [/^ي/i, /^ف/i, /^م/i, /^ا/i, /^م/i, /^ى‍/i, /^ى‍/i, /^ا‍/i, /^س/i, /^ۆ/i, /^ن/i, /^د/i], any: [/^يان/i, /^فېۋ/i, /^مار/i, /^ئاپ/i, /^ماي/i, /^ئىيۇن/i, /^ئىيول/i, /^ئاۋ/i, /^سىن/i, /^ئۆك/i, /^نوي/i, /^دىك/i] };
var C53 = { narrow: /^[دسچپجشي]/i, short: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i, abbreviated: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i, wide: /^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i };
var N58 = { narrow: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i], any: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i] };
var R35 = { narrow: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i, any: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i };
var T38 = { any: { am: /^ئە/i, pm: /^چ/i, midnight: /^ك/i, noon: /^چ/i, morning: /ئەتىگەن/i, afternoon: /چۈشتىن كىيىن/i, evening: /ئاخشىم/i, night: /كىچە/i } };
var l39 = { ordinalNumber: h({ matchPattern: k59, parsePattern: z63, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: F68, defaultMatchWidth: "wide", parsePatterns: V65, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X65, defaultMatchWidth: "wide", parsePatterns: L65, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: E61, defaultMatchWidth: "wide", parsePatterns: S63, defaultParseWidth: "any" }), day: P({ matchPatterns: C53, defaultMatchWidth: "wide", parsePatterns: N58, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: R35, defaultMatchWidth: "any", parsePatterns: T38, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/uk.mjs
function o27(t8, e30) {
  if (t8.one !== void 0 && e30 === 1) return t8.one;
  let n19 = e30 % 10, i19 = e30 % 100;
  return n19 === 1 && i19 !== 11 ? t8.singularNominative.replace("{{count}}", String(e30)) : n19 >= 2 && n19 <= 4 && (i19 < 10 || i19 > 20) ? t8.singularGenitive.replace("{{count}}", String(e30)) : t8.pluralGenitive.replace("{{count}}", String(e30));
}
function r17(t8) {
  return (e30, n19) => n19 && n19.addSuffix ? n19.comparison && n19.comparison > 0 ? t8.future ? o27(t8.future, e30) : "\u0437\u0430 " + o27(t8.regular, e30) : t8.past ? o27(t8.past, e30) : o27(t8.regular, e30) + " \u0442\u043E\u043C\u0443" : o27(t8.regular, e30);
}
var w63 = (t8, e30) => e30 && e30.addSuffix ? e30.comparison && e30.comparison > 0 ? "\u0437\u0430 \u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438" : "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443" : "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
var b52 = { lessThanXSeconds: r17({ regular: { one: "\u043C\u0435\u043D\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u0438", singularNominative: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438", singularGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434", pluralGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, future: { one: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularNominative: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438", pluralGenitive: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } }), xSeconds: r17({ regular: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434" }, past: { singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u0442\u043E\u043C\u0443", singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438 \u0442\u043E\u043C\u0443", pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0442\u043E\u043C\u0443" }, future: { singularNominative: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443", singularGenitive: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438", pluralGenitive: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434" } }), halfAMinute: w63, lessThanXMinutes: r17({ regular: { one: "\u043C\u0435\u043D\u0448\u0435 \u0445\u0432\u0438\u043B\u0438\u043D\u0438", singularNominative: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438", singularGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D", pluralGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D" }, future: { one: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 \u0445\u0432\u0438\u043B\u0438\u043D\u0443", singularNominative: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443", singularGenitive: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438", pluralGenitive: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D" } }), xMinutes: r17({ regular: { singularNominative: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0430", singularGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438", pluralGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D" }, past: { singularNominative: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443 \u0442\u043E\u043C\u0443", singularGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443", pluralGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D \u0442\u043E\u043C\u0443" }, future: { singularNominative: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443", singularGenitive: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438", pluralGenitive: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D" } }), aboutXHours: r17({ regular: { singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0438", singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D", pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D\u0443", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D\u0438", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D" } }), xHours: r17({ regular: { singularNominative: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0443", singularGenitive: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0438", pluralGenitive: "{{count}} \u0433\u043E\u0434\u0438\u043D" } }), xDays: r17({ regular: { singularNominative: "{{count}} \u0434\u0435\u043D\u044C", singularGenitive: "{{count}} \u0434\u043Di", pluralGenitive: "{{count}} \u0434\u043D\u0456\u0432" } }), aboutXWeeks: r17({ regular: { singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u044F", singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u0456\u0432", pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u0456\u0432" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u0434\u0435\u043D\u044C", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u043D\u0456", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u043D\u0456\u0432" } }), xWeeks: r17({ regular: { singularNominative: "{{count}} \u0442\u0438\u0436\u0434\u0435\u043D\u044C", singularGenitive: "{{count}} \u0442\u0438\u0436\u043D\u0456", pluralGenitive: "{{count}} \u0442\u0438\u0436\u043D\u0456\u0432" } }), aboutXMonths: r17({ regular: { singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u044F", singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432", pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u044C", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u0456", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432" } }), xMonths: r17({ regular: { singularNominative: "{{count}} \u043C\u0456\u0441\u044F\u0446\u044C", singularGenitive: "{{count}} \u043C\u0456\u0441\u044F\u0446\u0456", pluralGenitive: "{{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432" } }), aboutXYears: r17({ regular: { singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0443", singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0456\u0432", pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0456\u0432" }, future: { singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u0456\u043A", singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438", pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432" } }), xYears: r17({ regular: { singularNominative: "{{count}} \u0440\u0456\u043A", singularGenitive: "{{count}} \u0440\u043E\u043A\u0438", pluralGenitive: "{{count}} \u0440\u043E\u043A\u0456\u0432" } }), overXYears: r17({ regular: { singularNominative: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0443", singularGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432", pluralGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432" }, future: { singularNominative: "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u0456\u043A", singularGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438", pluralGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432" } }), almostXYears: r17({ regular: { singularNominative: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u0456\u043A", singularGenitive: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u043E\u043A\u0438", pluralGenitive: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432" }, future: { singularNominative: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u0456\u043A", singularGenitive: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438", pluralGenitive: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432" } }) };
var y68 = { full: "EEEE, do MMMM y '\u0440.'", long: "do MMMM y '\u0440.'", medium: "d MMM y '\u0440.'", short: "dd.MM.y" };
var P67 = { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var W52 = { full: "{{date}} '\u043E' {{time}}", long: "{{date}} '\u043E' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" };
var d34 = { date: r2({ formats: y68, defaultWidth: "full" }), time: r2({ formats: P67, defaultWidth: "full" }), dateTime: r2({ formats: W52, defaultWidth: "full" }) };
var F69 = { narrow: ["\u0434\u043E \u043D.\u0435.", "\u043D.\u0435."], abbreviated: ["\u0434\u043E \u043D. \u0435.", "\u043D. \u0435."], wide: ["\u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438", "\u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438"] };
var z64 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1-\u0439 \u043A\u0432.", "2-\u0439 \u043A\u0432.", "3-\u0439 \u043A\u0432.", "4-\u0439 \u043A\u0432."], wide: ["1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"] };
var S64 = { narrow: ["\u0421", "\u041B", "\u0411", "\u041A", "\u0422", "\u0427", "\u041B", "\u0421", "\u0412", "\u0416", "\u041B", "\u0413"], abbreviated: ["\u0441\u0456\u0447.", "\u043B\u044E\u0442.", "\u0431\u0435\u0440\u0435\u0437.", "\u043A\u0432\u0456\u0442.", "\u0442\u0440\u0430\u0432.", "\u0447\u0435\u0440\u0432.", "\u043B\u0438\u043F.", "\u0441\u0435\u0440\u043F.", "\u0432\u0435\u0440\u0435\u0441.", "\u0436\u043E\u0432\u0442.", "\u043B\u0438\u0441\u0442\u043E\u043F.", "\u0433\u0440\u0443\u0434."], wide: ["\u0441\u0456\u0447\u0435\u043D\u044C", "\u043B\u044E\u0442\u0438\u0439", "\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C", "\u043A\u0432\u0456\u0442\u0435\u043D\u044C", "\u0442\u0440\u0430\u0432\u0435\u043D\u044C", "\u0447\u0435\u0440\u0432\u0435\u043D\u044C", "\u043B\u0438\u043F\u0435\u043D\u044C", "\u0441\u0435\u0440\u043F\u0435\u043D\u044C", "\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C", "\u0436\u043E\u0432\u0442\u0435\u043D\u044C", "\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434", "\u0433\u0440\u0443\u0434\u0435\u043D\u044C"] };
var V66 = { narrow: ["\u0421", "\u041B", "\u0411", "\u041A", "\u0422", "\u0427", "\u041B", "\u0421", "\u0412", "\u0416", "\u041B", "\u0413"], abbreviated: ["\u0441\u0456\u0447.", "\u043B\u044E\u0442.", "\u0431\u0435\u0440\u0435\u0437.", "\u043A\u0432\u0456\u0442.", "\u0442\u0440\u0430\u0432.", "\u0447\u0435\u0440\u0432.", "\u043B\u0438\u043F.", "\u0441\u0435\u0440\u043F.", "\u0432\u0435\u0440\u0435\u0441.", "\u0436\u043E\u0432\u0442.", "\u043B\u0438\u0441\u0442\u043E\u043F.", "\u0433\u0440\u0443\u0434."], wide: ["\u0441\u0456\u0447\u043D\u044F", "\u043B\u044E\u0442\u043E\u0433\u043E", "\u0431\u0435\u0440\u0435\u0437\u043D\u044F", "\u043A\u0432\u0456\u0442\u043D\u044F", "\u0442\u0440\u0430\u0432\u043D\u044F", "\u0447\u0435\u0440\u0432\u043D\u044F", "\u043B\u0438\u043F\u043D\u044F", "\u0441\u0435\u0440\u043F\u043D\u044F", "\u0432\u0435\u0440\u0435\u0441\u043D\u044F", "\u0436\u043E\u0432\u0442\u043D\u044F", "\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430", "\u0433\u0440\u0443\u0434\u043D\u044F"] };
var L66 = { narrow: ["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"], short: ["\u043D\u0434", "\u043F\u043D", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043F\u0442", "\u0441\u0431"], abbreviated: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0432\u0456\u0432", "\u0441\u0435\u0440", "\u0447\u0442\u0432", "\u043F\u0442\u043D", "\u0441\u0443\u0431"], wide: ["\u043D\u0435\u0434\u0456\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A", "\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A", "\u0441\u0435\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0435\u0440", "\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F", "\u0441\u0443\u0431\u043E\u0442\u0430"] };
var X66 = { narrow: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u0456\u0432\u043D.", noon: "\u043F\u043E\u043B.", morning: "\u0440\u0430\u043D\u043E\u043A", afternoon: "\u0434\u0435\u043D\u044C", evening: "\u0432\u0435\u0447.", night: "\u043D\u0456\u0447" }, abbreviated: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u0456\u0432\u043D.", noon: "\u043F\u043E\u043B.", morning: "\u0440\u0430\u043D\u043E\u043A", afternoon: "\u0434\u0435\u043D\u044C", evening: "\u0432\u0435\u0447.", night: "\u043D\u0456\u0447" }, wide: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u0456\u0432\u043D\u0456\u0447", noon: "\u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C", morning: "\u0440\u0430\u043D\u043E\u043A", afternoon: "\u0434\u0435\u043D\u044C", evening: "\u0432\u0435\u0447\u0456\u0440", night: "\u043D\u0456\u0447" } };
var E62 = { narrow: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u0456\u0432\u043D.", noon: "\u043F\u043E\u043B.", morning: "\u0440\u0430\u043D\u043A\u0443", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u0456" }, abbreviated: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u0456\u0432\u043D.", noon: "\u043F\u043E\u043B.", morning: "\u0440\u0430\u043D\u043A\u0443", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u0456" }, wide: { am: "\u0414\u041F", pm: "\u041F\u041F", midnight: "\u043F\u0456\u0432\u043D\u0456\u0447", noon: "\u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C", morning: "\u0440\u0430\u043D\u043A\u0443", afternoon: "\u0434\u043D\u044F", evening: "\u0432\u0435\u0447.", night: "\u043D\u043E\u0447\u0456" } };
var H53 = (t8, e30) => {
  let n19 = String(e30?.unit), i19 = Number(t8), a33;
  return n19 === "date" ? i19 === 3 || i19 === 23 ? a33 = "-\u0454" : a33 = "-\u0435" : n19 === "minute" || n19 === "second" || n19 === "hour" ? a33 = "-\u0430" : a33 = "-\u0439", i19 + a33;
};
var h42 = { ordinalNumber: H53, era: c({ values: F69, defaultWidth: "wide" }), quarter: c({ values: z64, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: S64, defaultWidth: "wide", formattingValues: V66, defaultFormattingWidth: "wide" }), day: c({ values: L66, defaultWidth: "wide" }), dayPeriod: c({ values: X66, defaultWidth: "any", formattingValues: E62, defaultFormattingWidth: "wide" }) };
var C54 = /^(\d+)(-?(е|й|є|а|я))?/i;
var R36 = /\d+/i;
var Y20 = { narrow: /^((до )?н\.?\s?е\.?)/i, abbreviated: /^((до )?н\.?\s?е\.?)/i, wide: /^(до нашої ери|нашої ери|наша ера)/i };
var q25 = { any: [/^д/i, /^н/i] };
var O20 = { narrow: /^[1234]/i, abbreviated: /^[1234](-?[иі]?й?)? кв.?/i, wide: /^[1234](-?[иі]?й?)? квартал/i };
var A31 = { any: [/1/i, /2/i, /3/i, /4/i] };
var Q22 = { narrow: /^[слбктчвжг]/i, abbreviated: /^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i, wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i };
var I17 = { narrow: [/^с/i, /^л/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^с/i, /^в/i, /^ж/i, /^л/i, /^г/i], any: [/^сі/i, /^лю/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^лип/i, /^се/i, /^в/i, /^ж/i, /^лис/i, /^г/i] };
var _11 = { narrow: /^[нпвсч]/i, short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i, abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i, wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i };
var j31 = { narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i], any: [/^н/i, /^п[он]/i, /^в/i, /^с[ер]/i, /^ч/i, /^п\W*?[ят]/i, /^с[уб]/i] };
var B8 = { narrow: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i, abbreviated: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i, wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i };
var J13 = { any: { am: /^дп/i, pm: /^пп/i, midnight: /^півн/i, noon: /^пол/i, morning: /^р/i, afternoon: /^д[ен]/i, evening: /^в/i, night: /^н/i } };
var G11 = { ordinalNumber: h({ matchPattern: C54, parsePattern: R36, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: Y20, defaultMatchWidth: "wide", parsePatterns: q25, defaultParseWidth: "any" }), quarter: P({ matchPatterns: O20, defaultMatchWidth: "wide", parsePatterns: A31, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: Q22, defaultMatchWidth: "wide", parsePatterns: I17, defaultParseWidth: "any" }), day: P({ matchPatterns: _11, defaultMatchWidth: "wide", parsePatterns: j31, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: B8, defaultMatchWidth: "wide", parsePatterns: J13, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/uz-Cyrl.mjs
var f61 = { full: "EEEE, do MMMM, y", long: "do MMMM, y", medium: "d MMM, y", short: "dd/MM/yyyy" };
var y69 = { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" };
var p51 = { any: "{{date}}, {{time}}" };
var m57 = { date: r2({ formats: f61, defaultWidth: "full" }), time: r2({ formats: y69, defaultWidth: "full" }), dateTime: r2({ formats: p51, defaultWidth: "any" }) };
var b53 = { narrow: ["\u041C.\u0410", "\u041C"], abbreviated: ["\u041C.\u0410", "\u041C"], wide: ["\u041C\u0438\u043B\u043E\u0434\u0434\u0430\u043D \u0410\u0432\u0432\u0430\u043B\u0433\u0438", "\u041C\u0438\u043B\u043E\u0434\u0438\u0439"] };
var w64 = { narrow: ["1", "2", "3", "4"], abbreviated: ["1-\u0447\u043E\u0440.", "2-\u0447\u043E\u0440.", "3-\u0447\u043E\u0440.", "4-\u0447\u043E\u0440."], wide: ["1-\u0447\u043E\u0440\u0430\u043A", "2-\u0447\u043E\u0440\u0430\u043A", "3-\u0447\u043E\u0440\u0430\u043A", "4-\u0447\u043E\u0440\u0430\u043A"] };
var M69 = { narrow: ["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"], abbreviated: ["\u044F\u043D\u0432", "\u0444\u0435\u0432", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0439", "\u0438\u044E\u043D", "\u0438\u044E\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043D", "\u043E\u043A\u0442", "\u043D\u043E\u044F", "\u0434\u0435\u043A"], wide: ["\u044F\u043D\u0432\u0430\u0440", "\u0444\u0435\u0432\u0440\u0430\u043B", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0435\u043B", "\u043C\u0430\u0439", "\u0438\u044E\u043D", "\u0438\u044E\u043B", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043D\u0442\u0430\u0431\u0440", "\u043E\u043A\u0442\u0430\u0431\u0440", "\u043D\u043E\u044F\u0431\u0440", "\u0434\u0435\u043A\u0430\u0431\u0440"] };
var g58 = { narrow: ["\u042F", "\u0414", "\u0421", "\u0427", "\u041F", "\u0416", "\u0428"], short: ["\u044F\u043A", "\u0434\u0443", "\u0441\u0435", "\u0447\u043E", "\u043F\u0430", "\u0436\u0443", "\u0448\u0430"], abbreviated: ["\u044F\u043A\u0448", "\u0434\u0443\u0448", "\u0441\u0435\u0448", "\u0447\u043E\u0440", "\u043F\u0430\u0439", "\u0436\u0443\u043C", "\u0448\u0430\u043D"], wide: ["\u044F\u043A\u0448\u0430\u043D\u0431\u0430", "\u0434\u0443\u0448\u0430\u043D\u0431\u0430", "\u0441\u0435\u0448\u0430\u043D\u0431\u0430", "\u0447\u043E\u0440\u0448\u0430\u043D\u0431\u0430", "\u043F\u0430\u0439\u0448\u0430\u043D\u0431\u0430", "\u0436\u0443\u043C\u0430", "\u0448\u0430\u043D\u0431\u0430"] };
var W53 = { any: { am: "\u041F.\u041E.", pm: "\u041F.\u041A.", midnight: "\u044F\u0440\u0438\u043C \u0442\u0443\u043D", noon: "\u043F\u0435\u0448\u0438\u043D", morning: "\u044D\u0440\u0442\u0430\u043B\u0430\u0431", afternoon: "\u043F\u0435\u0448\u0438\u043D\u0434\u0430\u043D \u043A\u0435\u0439\u0438\u043D", evening: "\u043A\u0435\u0447\u0430\u0441\u0438", night: "\u0442\u0443\u043D" } };
var v60 = { any: { am: "\u041F.\u041E.", pm: "\u041F.\u041A.", midnight: "\u044F\u0440\u0438\u043C \u0442\u0443\u043D", noon: "\u043F\u0435\u0448\u0438\u043D", morning: "\u044D\u0440\u0442\u0430\u043B\u0430\u0431", afternoon: "\u043F\u0435\u0448\u0438\u043D\u0434\u0430\u043D \u043A\u0435\u0439\u0438\u043D", evening: "\u043A\u0435\u0447\u0430\u0441\u0438", night: "\u0442\u0443\u043D" } };
var x63 = (t8, r32) => String(t8);
var u42 = { ordinalNumber: x63, era: c({ values: b53, defaultWidth: "wide" }), quarter: c({ values: w64, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: M69, defaultWidth: "wide" }), day: c({ values: g58, defaultWidth: "wide" }), dayPeriod: c({ values: W53, defaultWidth: "any", formattingValues: v60, defaultFormattingWidth: "any" }) };
var z65 = /^(\d+)(чи)?/i;
var k60 = /\d+/i;
var F70 = { narrow: /^(м\.а|м\.)/i, abbreviated: /^(м\.а|м\.)/i, wide: /^(милоддан аввал|милоддан кейин)/i };
var V67 = { any: [/^м/i, /^а/i] };
var X67 = { narrow: /^[1234]/i, abbreviated: /^[1234]-чор./i, wide: /^[1234]-чорак/i };
var L67 = { any: [/1/i, /2/i, /3/i, /4/i] };
var C55 = { narrow: /^[яфмамииасонд]/i, abbreviated: /^(янв|фев|мар|апр|май|июн|июл|авг|сен|окт|ноя|дек)/i, wide: /^(январ|феврал|март|апрел|май|июн|июл|август|сентабр|октабр|ноябр|декабр)/i };
var E63 = { narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^д/i], any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^май/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i] };
var H54 = { narrow: /^[ядсчпжш]/i, short: /^(як|ду|се|чо|па|жу|ша)/i, abbreviated: /^(якш|душ|сеш|чор|пай|жум|шан)/i, wide: /^(якшанба|душанба|сешанба|чоршанба|пайшанба|жума|шанба)/i };
var S65 = { narrow: [/^я/i, /^д/i, /^с/i, /^ч/i, /^п/i, /^ж/i, /^ш/i], any: [/^як/i, /^ду/i, /^се/i, /^чор/i, /^пай/i, /^жу/i, /^шан/i] };
var N59 = { any: /^(п\.о\.|п\.к\.|ярим тун|пешиндан кейин|(эрталаб|пешиндан кейин|кечаси|тун))/i };
var R37 = { any: { am: /^п\.о\./i, pm: /^п\.к\./i, midnight: /^ярим тун/i, noon: /^пешиндан кейин/i, morning: /эрталаб/i, afternoon: /пешиндан кейин/i, evening: /кечаси/i, night: /тун/i } };
var l40 = { ordinalNumber: h({ matchPattern: z65, parsePattern: k60, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: F70, defaultMatchWidth: "wide", parsePatterns: V67, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X67, defaultMatchWidth: "wide", parsePatterns: L67, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: C55, defaultMatchWidth: "wide", parsePatterns: E63, defaultParseWidth: "any" }), day: P({ matchPatterns: H54, defaultMatchWidth: "wide", parsePatterns: S65, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: N59, defaultMatchWidth: "any", parsePatterns: R37, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/uz.mjs
var y70 = { full: "EEEE, do MMMM, y", long: "do MMMM, y", medium: "d MMM, y", short: "dd/MM/yyyy" };
var f62 = { full: "h:mm:ss zzzz", long: "h:mm:ss z", medium: "h:mm:ss", short: "h:mm" };
var p52 = { any: "{{date}}, {{time}}" };
var d35 = { date: r2({ formats: y70, defaultWidth: "full" }), time: r2({ formats: f62, defaultWidth: "full" }), dateTime: r2({ formats: p52, defaultWidth: "any" }) };
var k61 = { narrow: ["M.A", "M."], abbreviated: ["M.A", "M."], wide: ["Miloddan Avvalgi", "Milodiy"] };
var g59 = { narrow: ["1", "2", "3", "4"], abbreviated: ["CH.1", "CH.2", "CH.3", "CH.4"], wide: ["1-chi chorak", "2-chi chorak", "3-chi chorak", "4-chi chorak"] };
var v61 = { narrow: ["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], abbreviated: ["Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"], wide: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"] };
var M70 = { narrow: ["Y", "D", "S", "CH", "P", "J", "SH"], short: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"], abbreviated: ["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"], wide: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"] };
var P68 = { narrow: { am: "a", pm: "p", midnight: "y.t", noon: "p.", morning: "ertalab", afternoon: "tushdan keyin", evening: "kechqurun", night: "tun" }, abbreviated: { am: "AM", pm: "PM", midnight: "yarim tun", noon: "peshin", morning: "ertalab", afternoon: "tushdan keyin", evening: "kechqurun", night: "tun" }, wide: { am: "a.m.", pm: "p.m.", midnight: "yarim tun", noon: "peshin", morning: "ertalab", afternoon: "tushdan keyin", evening: "kechqurun", night: "tun" } };
var w65 = { narrow: { am: "a", pm: "p", midnight: "y.t", noon: "p.", morning: "ertalab", afternoon: "tushdan keyin", evening: "kechqurun", night: "tun" }, abbreviated: { am: "AM", pm: "PM", midnight: "yarim tun", noon: "peshin", morning: "ertalab", afternoon: "tushdan keyin", evening: "kechqurun", night: "tun" }, wide: { am: "a.m.", pm: "p.m.", midnight: "yarim tun", noon: "peshin", morning: "ertalab", afternoon: "tushdan keyin", evening: "kechqurun", night: "tun" } };
var W54 = (a33, i19) => String(a33);
var m58 = { ordinalNumber: W54, era: c({ values: k61, defaultWidth: "wide" }), quarter: c({ values: g59, defaultWidth: "wide", argumentCallback: (a33) => a33 - 1 }), month: c({ values: v61, defaultWidth: "wide" }), day: c({ values: M70, defaultWidth: "wide" }), dayPeriod: c({ values: P68, defaultWidth: "wide", formattingValues: w65, defaultFormattingWidth: "wide" }) };
var S66 = /^(\d+)(chi)?/i;
var x64 = /\d+/i;
var q26 = { narrow: /^(m\.a|m\.)/i, abbreviated: /^(m\.a\.?\s?m\.?)/i, wide: /^(miloddan avval|miloddan keyin)/i };
var A32 = { any: [/^b/i, /^(a|c)/i] };
var C56 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](chi)? chorak/i };
var F71 = { any: [/1/i, /2/i, /3/i, /4/i] };
var z66 = { narrow: /^[yfmasond]/i, abbreviated: /^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i, wide: /^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i };
var Y21 = { narrow: [/^y/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ya/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^iyun/i, /^iyul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i] };
var H55 = { narrow: /^[ydschj]/i, short: /^(ya|du|se|cho|pa|ju|sha)/i, abbreviated: /^(yak|dush|sesh|chor|pay|jum|shan)/i, wide: /^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i };
var V68 = { narrow: [/^y/i, /^d/i, /^s/i, /^ch/i, /^p/i, /^j/i, /^sh/i], any: [/^ya/i, /^d/i, /^se/i, /^ch/i, /^p/i, /^j/i, /^sh/i] };
var X68 = { narrow: /^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i, any: /^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i };
var I18 = { any: { am: /^a/i, pm: /^p/i, midnight: /^y\.t/i, noon: /^pe/i, morning: /ertalab/i, afternoon: /tushdan keyin/i, evening: /kechqurun/i, night: /tun/i } };
var l41 = { ordinalNumber: h({ matchPattern: S66, parsePattern: x64, valueCallback: (a33) => parseInt(a33, 10) }), era: P({ matchPatterns: q26, defaultMatchWidth: "wide", parsePatterns: A32, defaultParseWidth: "any" }), quarter: P({ matchPatterns: C56, defaultMatchWidth: "wide", parsePatterns: F71, defaultParseWidth: "any", valueCallback: (a33) => a33 + 1 }), month: P({ matchPatterns: z66, defaultMatchWidth: "wide", parsePatterns: Y21, defaultParseWidth: "any" }), day: P({ matchPatterns: H55, defaultMatchWidth: "wide", parsePatterns: V68, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: X68, defaultMatchWidth: "any", parsePatterns: I18, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/vi.mjs
var l42 = { full: "EEEE, 'ng\xE0y' d MMMM 'n\u0103m' y", long: "'ng\xE0y' d MMMM 'n\u0103m' y", medium: "d MMM 'n\u0103m' y", short: "dd/MM/y" };
var f63 = { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" };
var T39 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m59 = { date: r2({ formats: l42, defaultWidth: "full" }), time: r2({ formats: f63, defaultWidth: "full" }), dateTime: r2({ formats: T39, defaultWidth: "full" }) };
var b54 = { narrow: ["TCN", "SCN"], abbreviated: ["tr\u01B0\u1EDBc CN", "sau CN"], wide: ["tr\u01B0\u1EDBc C\xF4ng Nguy\xEAn", "sau C\xF4ng Nguy\xEAn"] };
var w66 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["Qu\xFD 1", "Qu\xFD 2", "Qu\xFD 3", "Qu\xFD 4"] };
var v62 = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["qu\xFD I", "qu\xFD II", "qu\xFD III", "qu\xFD IV"] };
var y71 = { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5", "Thg 6", "Thg 7", "Thg 8", "Thg 9", "Thg 10", "Thg 11", "Thg 12"], wide: ["Th\xE1ng M\u1ED9t", "Th\xE1ng Hai", "Th\xE1ng Ba", "Th\xE1ng T\u01B0", "Th\xE1ng N\u0103m", "Th\xE1ng S\xE1u", "Th\xE1ng B\u1EA3y", "Th\xE1ng T\xE1m", "Th\xE1ng Ch\xEDn", "Th\xE1ng M\u01B0\u1EDDi", "Th\xE1ng M\u01B0\u1EDDi M\u1ED9t", "Th\xE1ng M\u01B0\u1EDDi Hai"] };
var M71 = { narrow: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], abbreviated: ["thg 1", "thg 2", "thg 3", "thg 4", "thg 5", "thg 6", "thg 7", "thg 8", "thg 9", "thg 10", "thg 11", "thg 12"], wide: ["th\xE1ng 01", "th\xE1ng 02", "th\xE1ng 03", "th\xE1ng 04", "th\xE1ng 05", "th\xE1ng 06", "th\xE1ng 07", "th\xE1ng 08", "th\xE1ng 09", "th\xE1ng 10", "th\xE1ng 11", "th\xE1ng 12"] };
var P69 = { narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"], abbreviated: ["CN", "Th\u1EE9 2", "Th\u1EE9 3", "Th\u1EE9 4", "Th\u1EE9 5", "Th\u1EE9 6", "Th\u1EE9 7"], wide: ["Ch\u1EE7 Nh\u1EADt", "Th\u1EE9 Hai", "Th\u1EE9 Ba", "Th\u1EE9 T\u01B0", "Th\u1EE9 N\u0103m", "Th\u1EE9 S\xE1u", "Th\u1EE9 B\u1EA3y"] };
var N60 = { narrow: { am: "am", pm: "pm", midnight: "n\u1EEDa \u0111\xEAm", noon: "tr", morning: "sg", afternoon: "ch", evening: "t\u1ED1i", night: "\u0111\xEAm" }, abbreviated: { am: "AM", pm: "PM", midnight: "n\u1EEDa \u0111\xEAm", noon: "tr\u01B0a", morning: "s\xE1ng", afternoon: "chi\u1EC1u", evening: "t\u1ED1i", night: "\u0111\xEAm" }, wide: { am: "SA", pm: "CH", midnight: "n\u1EEDa \u0111\xEAm", noon: "tr\u01B0a", morning: "s\xE1ng", afternoon: "chi\u1EC1u", evening: "t\u1ED1i", night: "\u0111\xEAm" } };
var C57 = { narrow: { am: "am", pm: "pm", midnight: "n\u1EEDa \u0111\xEAm", noon: "tr", morning: "sg", afternoon: "ch", evening: "t\u1ED1i", night: "\u0111\xEAm" }, abbreviated: { am: "AM", pm: "PM", midnight: "n\u1EEDa \u0111\xEAm", noon: "tr\u01B0a", morning: "s\xE1ng", afternoon: "chi\u1EC1u", evening: "t\u1ED1i", night: "\u0111\xEAm" }, wide: { am: "SA", pm: "CH", midnight: "n\u1EEDa \u0111\xEAm", noon: "gi\u1EEFa tr\u01B0a", morning: "v\xE0o bu\u1ED5i s\xE1ng", afternoon: "v\xE0o bu\u1ED5i chi\u1EC1u", evening: "v\xE0o bu\u1ED5i t\u1ED1i", night: "v\xE0o ban \u0111\xEAm" } };
var W55 = (e30, a33) => {
  let t8 = Number(e30), n19 = a33?.unit;
  if (n19 === "quarter") switch (t8) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
  }
  else if (n19 === "day") switch (t8) {
    case 1:
      return "th\u1EE9 2";
    case 2:
      return "th\u1EE9 3";
    case 3:
      return "th\u1EE9 4";
    case 4:
      return "th\u1EE9 5";
    case 5:
      return "th\u1EE9 6";
    case 6:
      return "th\u1EE9 7";
    case 7:
      return "ch\u1EE7 nh\u1EADt";
  }
  else {
    if (n19 === "week") return t8 === 1 ? "th\u1EE9 nh\u1EA5t" : "th\u1EE9 " + t8;
    if (n19 === "dayOfYear") return t8 === 1 ? "\u0111\u1EA7u ti\xEAn" : "th\u1EE9 " + t8;
  }
  return String(t8);
};
var u43 = { ordinalNumber: W55, era: c({ values: b54, defaultWidth: "wide" }), quarter: c({ values: w66, defaultWidth: "wide", formattingValues: v62, defaultFormattingWidth: "wide", argumentCallback: (e30) => e30 - 1 }), month: c({ values: y71, defaultWidth: "wide", formattingValues: M71, defaultFormattingWidth: "wide" }), day: c({ values: P69, defaultWidth: "wide" }), dayPeriod: c({ values: N60, defaultWidth: "wide", formattingValues: C57, defaultFormattingWidth: "wide" }) };
var k62 = /^(\d+)/i;
var x65 = /\d+/i;
var _12 = { narrow: /^(tcn|scn)/i, abbreviated: /^(trước CN|sau CN)/i, wide: /^(trước Công Nguyên|sau Công Nguyên)/i };
var I19 = { any: [/^t/i, /^s/i] };
var Q23 = { narrow: /^([1234]|i{1,3}v?)/i, abbreviated: /^q([1234]|i{1,3}v?)/i, wide: /^quý ([1234]|i{1,3}v?)/i };
var S67 = { any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i] };
var V69 = { narrow: /^(0?[2-9]|10|11|12|0?1)/i, abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i, wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i };
var B9 = { narrow: [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/], abbreviated: [/^thg[ _]?0?1(?!\d)/i, /^thg[ _]?0?2/i, /^thg[ _]?0?3/i, /^thg[ _]?0?4/i, /^thg[ _]?0?5/i, /^thg[ _]?0?6/i, /^thg[ _]?0?7/i, /^thg[ _]?0?8/i, /^thg[ _]?0?9/i, /^thg[ _]?10/i, /^thg[ _]?11/i, /^thg[ _]?12/i], wide: [/^tháng ?(Một|0?1(?!\d))/i, /^tháng ?(Hai|0?2)/i, /^tháng ?(Ba|0?3)/i, /^tháng ?(Tư|0?4)/i, /^tháng ?(Năm|0?5)/i, /^tháng ?(Sáu|0?6)/i, /^tháng ?(Bảy|0?7)/i, /^tháng ?(Tám|0?8)/i, /^tháng ?(Chín|0?9)/i, /^tháng ?(Mười|10)/i, /^tháng ?(Mười ?Một|11)/i, /^tháng ?(Mười ?Hai|12)/i] };
var D61 = { narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i, short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i, abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i, wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i };
var q27 = { narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i], short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i], abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i], wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i] };
var F72 = { narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i, abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i, wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i };
var z67 = { any: { am: /^(a|sa)/i, pm: /^(p|ch[^i]*)/i, midnight: /nửa đêm/i, noon: /trưa/i, morning: /sáng/i, afternoon: /chiều/i, evening: /tối/i, night: /^đêm/i } };
var d36 = { ordinalNumber: h({ matchPattern: k62, parsePattern: x65, valueCallback: (e30) => parseInt(e30, 10) }), era: P({ matchPatterns: _12, defaultMatchWidth: "wide", parsePatterns: I19, defaultParseWidth: "any" }), quarter: P({ matchPatterns: Q23, defaultMatchWidth: "wide", parsePatterns: S67, defaultParseWidth: "any", valueCallback: (e30) => e30 + 1 }), month: P({ matchPatterns: V69, defaultMatchWidth: "wide", parsePatterns: B9, defaultParseWidth: "wide" }), day: P({ matchPatterns: D61, defaultMatchWidth: "wide", parsePatterns: q27, defaultParseWidth: "wide" }), dayPeriod: P({ matchPatterns: F72, defaultMatchWidth: "wide", parsePatterns: z67, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/zh-CN.mjs
var g60 = { full: "y'\u5E74'M'\u6708'd'\u65E5' EEEE", long: "y'\u5E74'M'\u6708'd'\u65E5'", medium: "yyyy-MM-dd", short: "yy-MM-dd" };
var p53 = { full: "zzzz a h:mm:ss", long: "z a h:mm:ss", medium: "a h:mm:ss", short: "a h:mm" };
var P70 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m60 = { date: r2({ formats: g60, defaultWidth: "full" }), time: r2({ formats: p53, defaultWidth: "full" }), dateTime: r2({ formats: P70, defaultWidth: "full" }) };
var w67 = { narrow: ["\u524D", "\u516C\u5143"], abbreviated: ["\u524D", "\u516C\u5143"], wide: ["\u516C\u5143\u524D", "\u516C\u5143"] };
var v63 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u7B2C\u4E00\u5B63", "\u7B2C\u4E8C\u5B63", "\u7B2C\u4E09\u5B63", "\u7B2C\u56DB\u5B63"], wide: ["\u7B2C\u4E00\u5B63\u5EA6", "\u7B2C\u4E8C\u5B63\u5EA6", "\u7B2C\u4E09\u5B63\u5EA6", "\u7B2C\u56DB\u5B63\u5EA6"] };
var W56 = { narrow: ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u5341\u4E00", "\u5341\u4E8C"], abbreviated: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], wide: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"] };
var M72 = { narrow: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], short: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], abbreviated: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"], wide: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"] };
var x66 = { narrow: { am: "\u4E0A", pm: "\u4E0B", midnight: "\u51CC\u6668", noon: "\u5348", morning: "\u65E9", afternoon: "\u4E0B\u5348", evening: "\u665A", night: "\u591C" }, abbreviated: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u95F4" }, wide: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u95F4" } };
var k63 = { narrow: { am: "\u4E0A", pm: "\u4E0B", midnight: "\u51CC\u6668", noon: "\u5348", morning: "\u65E9", afternoon: "\u4E0B\u5348", evening: "\u665A", night: "\u591C" }, abbreviated: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u95F4" }, wide: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u95F4" } };
var z68 = (t8, n19) => {
  let e30 = Number(t8);
  switch (n19?.unit) {
    case "date":
      return e30.toString() + "\u65E5";
    case "hour":
      return e30.toString() + "\u65F6";
    case "minute":
      return e30.toString() + "\u5206";
    case "second":
      return e30.toString() + "\u79D2";
    default:
      return "\u7B2C " + e30.toString();
  }
};
var h43 = { ordinalNumber: z68, era: c({ values: w67, defaultWidth: "wide" }), quarter: c({ values: v63, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: W56, defaultWidth: "wide" }), day: c({ values: M72, defaultWidth: "wide" }), dayPeriod: c({ values: x66, defaultWidth: "wide", formattingValues: k63, defaultFormattingWidth: "wide" }) };
var D62 = /^(第\s*)?\d+(日|时|分|秒)?/i;
var F73 = /\d+/i;
var V70 = { narrow: /^(前)/i, abbreviated: /^(前)/i, wide: /^(公元前|公元)/i };
var X69 = { any: [/^(前)/i, /^(公元)/i] };
var L68 = { narrow: /^[1234]/i, abbreviated: /^第[一二三四]刻/i, wide: /^第[一二三四]刻钟/i };
var N61 = { any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i] };
var C58 = { narrow: /^(一|二|三|四|五|六|七|八|九|十[二一]?)/i, abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]?|\d|1[0-2])月/i, wide: /^(一|二|三|四|五|六|七|八|九|十[二一]?)月/i };
var E64 = { narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i], any: [/^(一|1(?!\d))/i, /^(二|2)/i, /^(三|3)/i, /^(四|4)/i, /^(五|5)/i, /^(六|6)/i, /^(七|7)/i, /^(八|8)/i, /^(九|9)/i, /^(十(?!(一|二))|10)/i, /^(十一|11)/i, /^(十二|12)/i] };
var T40 = { narrow: /^[一二三四五六日]/i, short: /^[一二三四五六日]/i, abbreviated: /^周[一二三四五六日]/i, wide: /^星期[一二三四五六日]/i };
var R38 = { any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i] };
var Y22 = { any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i };
var q28 = { any: { am: /^上午?/i, pm: /^下午?/i, midnight: /^午夜/i, noon: /^[中正]午/i, morning: /^早上/i, afternoon: /^下午/i, evening: /^晚上?/i, night: /^凌晨/i } };
var l43 = { ordinalNumber: h({ matchPattern: D62, parsePattern: F73, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: V70, defaultMatchWidth: "wide", parsePatterns: X69, defaultParseWidth: "any" }), quarter: P({ matchPatterns: L68, defaultMatchWidth: "wide", parsePatterns: N61, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: C58, defaultMatchWidth: "wide", parsePatterns: E64, defaultParseWidth: "any" }), day: P({ matchPatterns: T40, defaultMatchWidth: "wide", parsePatterns: R38, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: Y22, defaultMatchWidth: "any", parsePatterns: q28, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/zh-HK.mjs
var f64 = { full: "y'\u5E74'M'\u6708'd'\u65E5' EEEE", long: "y'\u5E74'M'\u6708'd'\u65E5'", medium: "yyyy-MM-dd", short: "yy-MM-dd" };
var p54 = { full: "zzzz a h:mm:ss", long: "z a h:mm:ss", medium: "a h:mm:ss", short: "a h:mm" };
var g61 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m61 = { date: r2({ formats: f64, defaultWidth: "full" }), time: r2({ formats: p54, defaultWidth: "full" }), dateTime: r2({ formats: g61, defaultWidth: "full" }) };
var P71 = { narrow: ["\u524D", "\u516C\u5143"], abbreviated: ["\u524D", "\u516C\u5143"], wide: ["\u516C\u5143\u524D", "\u516C\u5143"] };
var y72 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u7B2C\u4E00\u5B63", "\u7B2C\u4E8C\u5B63", "\u7B2C\u4E09\u5B63", "\u7B2C\u56DB\u5B63"], wide: ["\u7B2C\u4E00\u5B63\u5EA6", "\u7B2C\u4E8C\u5B63\u5EA6", "\u7B2C\u4E09\u5B63\u5EA6", "\u7B2C\u56DB\u5B63\u5EA6"] };
var w68 = { narrow: ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u5341\u4E00", "\u5341\u4E8C"], abbreviated: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], wide: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"] };
var v64 = { narrow: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], short: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], abbreviated: ["\u9031\u65E5", "\u9031\u4E00", "\u9031\u4E8C", "\u9031\u4E09", "\u9031\u56DB", "\u9031\u4E94", "\u9031\u516D"], wide: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"] };
var W57 = { narrow: { am: "\u4E0A", pm: "\u4E0B", midnight: "\u5348\u591C", noon: "\u664C", morning: "\u65E9", afternoon: "\u5348", evening: "\u665A", night: "\u591C" }, abbreviated: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u5348\u591C", noon: "\u4E2D\u5348", morning: "\u4E0A\u5348", afternoon: "\u4E0B\u5348", evening: "\u665A\u4E0A", night: "\u591C\u665A" }, wide: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u5348\u591C", noon: "\u4E2D\u5348", morning: "\u4E0A\u5348", afternoon: "\u4E0B\u5348", evening: "\u665A\u4E0A", night: "\u591C\u665A" } };
var M73 = { narrow: { am: "\u4E0A", pm: "\u4E0B", midnight: "\u5348\u591C", noon: "\u664C", morning: "\u65E9", afternoon: "\u5348", evening: "\u665A", night: "\u591C" }, abbreviated: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u5348\u591C", noon: "\u4E2D\u5348", morning: "\u4E0A\u5348", afternoon: "\u4E0B\u5348", evening: "\u665A\u4E0A", night: "\u591C\u665A" }, wide: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u5348\u591C", noon: "\u4E2D\u5348", morning: "\u4E0A\u5348", afternoon: "\u4E0B\u5348", evening: "\u665A\u4E0A", night: "\u591C\u665A" } };
var x67 = (t8, n19) => {
  let e30 = Number(t8);
  switch (n19?.unit) {
    case "date":
      return e30 + "\u65E5";
    case "hour":
      return e30 + "\u6642";
    case "minute":
      return e30 + "\u5206";
    case "second":
      return e30 + "\u79D2";
    default:
      return "\u7B2C " + e30;
  }
};
var h44 = { ordinalNumber: x67, era: c({ values: P71, defaultWidth: "wide" }), quarter: c({ values: y72, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: w68, defaultWidth: "wide" }), day: c({ values: v64, defaultWidth: "wide" }), dayPeriod: c({ values: W57, defaultWidth: "wide", formattingValues: M73, defaultFormattingWidth: "wide" }) };
var z69 = /^(第\s*)?\d+(日|時|分|秒)?/i;
var k64 = /\d+/i;
var F74 = { narrow: /^(前)/i, abbreviated: /^(前)/i, wide: /^(公元前|公元)/i };
var V71 = { any: [/^(前)/i, /^(公元)/i] };
var X70 = { narrow: /^[1234]/i, abbreviated: /^第[一二三四]季/i, wide: /^第[一二三四]季度/i };
var L69 = { any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i] };
var E65 = { narrow: /^(一|二|三|四|五|六|七|八|九|十[二一]?)/i, abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]?|\d|1[0-2])月/i, wide: /^(一|二|三|四|五|六|七|八|九|十[二一]?)月/i };
var N62 = { narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i], any: [/^(一|1(?!\d))/i, /^(二|2)/i, /^(三|3)/i, /^(四|4)/i, /^(五|5)/i, /^(六|6)/i, /^(七|7)/i, /^(八|8)/i, /^(九|9)/i, /^(十(?!(一|二))|10)/i, /^(十一|11)/i, /^(十二|12)/i] };
var S68 = { narrow: /^[一二三四五六日]/i, short: /^[一二三四五六日]/i, abbreviated: /^週[一二三四五六日]/i, wide: /^星期[一二三四五六日]/i };
var C59 = { any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i] };
var H56 = { any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i };
var R39 = { any: { am: /^上午?/i, pm: /^下午?/i, midnight: /^午夜/i, noon: /^[中正]午/i, morning: /^早上/i, afternoon: /^下午/i, evening: /^晚上?/i, night: /^凌晨/i } };
var c51 = { ordinalNumber: h({ matchPattern: z69, parsePattern: k64, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: F74, defaultMatchWidth: "wide", parsePatterns: V71, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X70, defaultMatchWidth: "wide", parsePatterns: L69, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: E65, defaultMatchWidth: "wide", parsePatterns: N62, defaultParseWidth: "any" }), day: P({ matchPatterns: S68, defaultMatchWidth: "wide", parsePatterns: C59, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: H56, defaultMatchWidth: "any", parsePatterns: R39, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/locale/zh-TW.mjs
var f65 = { full: "y'\u5E74'M'\u6708'd'\u65E5' EEEE", long: "y'\u5E74'M'\u6708'd'\u65E5'", medium: "yyyy-MM-dd", short: "yy-MM-dd" };
var p55 = { full: "zzzz a h:mm:ss", long: "z a h:mm:ss", medium: "a h:mm:ss", short: "a h:mm" };
var g62 = { full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}" };
var m62 = { date: r2({ formats: f65, defaultWidth: "full" }), time: r2({ formats: p55, defaultWidth: "full" }), dateTime: r2({ formats: g62, defaultWidth: "full" }) };
var P72 = { narrow: ["\u524D", "\u516C\u5143"], abbreviated: ["\u524D", "\u516C\u5143"], wide: ["\u516C\u5143\u524D", "\u516C\u5143"] };
var y73 = { narrow: ["1", "2", "3", "4"], abbreviated: ["\u7B2C\u4E00\u523B", "\u7B2C\u4E8C\u523B", "\u7B2C\u4E09\u523B", "\u7B2C\u56DB\u523B"], wide: ["\u7B2C\u4E00\u523B\u9418", "\u7B2C\u4E8C\u523B\u9418", "\u7B2C\u4E09\u523B\u9418", "\u7B2C\u56DB\u523B\u9418"] };
var w69 = { narrow: ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u5341\u4E00", "\u5341\u4E8C"], abbreviated: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], wide: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"] };
var v65 = { narrow: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], short: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], abbreviated: ["\u9031\u65E5", "\u9031\u4E00", "\u9031\u4E8C", "\u9031\u4E09", "\u9031\u56DB", "\u9031\u4E94", "\u9031\u516D"], wide: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"] };
var W58 = { narrow: { am: "\u4E0A", pm: "\u4E0B", midnight: "\u51CC\u6668", noon: "\u5348", morning: "\u65E9", afternoon: "\u4E0B\u5348", evening: "\u665A", night: "\u591C" }, abbreviated: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u9593" }, wide: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u9593" } };
var M74 = { narrow: { am: "\u4E0A", pm: "\u4E0B", midnight: "\u51CC\u6668", noon: "\u5348", morning: "\u65E9", afternoon: "\u4E0B\u5348", evening: "\u665A", night: "\u591C" }, abbreviated: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u9593" }, wide: { am: "\u4E0A\u5348", pm: "\u4E0B\u5348", midnight: "\u51CC\u6668", noon: "\u4E2D\u5348", morning: "\u65E9\u6668", afternoon: "\u4E2D\u5348", evening: "\u665A\u4E0A", night: "\u591C\u9593" } };
var x68 = (t8, n19) => {
  let e30 = Number(t8);
  switch (n19?.unit) {
    case "date":
      return e30 + "\u65E5";
    case "hour":
      return e30 + "\u6642";
    case "minute":
      return e30 + "\u5206";
    case "second":
      return e30 + "\u79D2";
    default:
      return "\u7B2C " + e30;
  }
};
var h45 = { ordinalNumber: x68, era: c({ values: P72, defaultWidth: "wide" }), quarter: c({ values: y73, defaultWidth: "wide", argumentCallback: (t8) => t8 - 1 }), month: c({ values: w69, defaultWidth: "wide" }), day: c({ values: v65, defaultWidth: "wide" }), dayPeriod: c({ values: W58, defaultWidth: "wide", formattingValues: M74, defaultFormattingWidth: "wide" }) };
var z70 = /^(第\s*)?\d+(日|時|分|秒)?/i;
var k65 = /\d+/i;
var F75 = { narrow: /^(前)/i, abbreviated: /^(前)/i, wide: /^(公元前|公元)/i };
var V72 = { any: [/^(前)/i, /^(公元)/i] };
var X71 = { narrow: /^[1234]/i, abbreviated: /^第[一二三四]刻/i, wide: /^第[一二三四]刻鐘/i };
var L70 = { any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i] };
var E66 = { narrow: /^(一|二|三|四|五|六|七|八|九|十[二一]?)/i, abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]?|\d|1[0-2])月/i, wide: /^(一|二|三|四|五|六|七|八|九|十[二一]?)月/i };
var T41 = { narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i], any: [/^(一|1(?!\d))/i, /^(二|2)/i, /^(三|3)/i, /^(四|4)/i, /^(五|5)/i, /^(六|6)/i, /^(七|7)/i, /^(八|8)/i, /^(九|9)/i, /^(十(?!(一|二))|10)/i, /^(十一|11)/i, /^(十二|12)/i] };
var N63 = { narrow: /^[一二三四五六日]/i, short: /^[一二三四五六日]/i, abbreviated: /^週[一二三四五六日]/i, wide: /^星期[一二三四五六日]/i };
var S69 = { any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i] };
var C60 = { any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i };
var R40 = { any: { am: /^上午?/i, pm: /^下午?/i, midnight: /^午夜/i, noon: /^[中正]午/i, morning: /^早上/i, afternoon: /^下午/i, evening: /^晚上?/i, night: /^凌晨/i } };
var c52 = { ordinalNumber: h({ matchPattern: z70, parsePattern: k65, valueCallback: (t8) => parseInt(t8, 10) }), era: P({ matchPatterns: F75, defaultMatchWidth: "wide", parsePatterns: V72, defaultParseWidth: "any" }), quarter: P({ matchPatterns: X71, defaultMatchWidth: "wide", parsePatterns: L70, defaultParseWidth: "any", valueCallback: (t8) => t8 + 1 }), month: P({ matchPatterns: E66, defaultMatchWidth: "wide", parsePatterns: T41, defaultParseWidth: "any" }), day: P({ matchPatterns: N63, defaultMatchWidth: "wide", parsePatterns: S69, defaultParseWidth: "any" }), dayPeriod: P({ matchPatterns: C60, defaultMatchWidth: "any", parsePatterns: R40, defaultParseWidth: "any" }) };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/addDays.mjs
function f66(e30, r32, i19) {
  let t8 = e3(e30, i19?.in);
  return isNaN(r32) ? t3(i19?.in || e30, NaN) : (r32 && t8.setDate(t8.getDate() + r32), t8);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/addMonths.mjs
function c53(n19, r32, o36) {
  let t8 = e3(n19, o36?.in);
  if (isNaN(r32)) return t3(o36?.in || n19, NaN);
  if (!r32) return t8;
  let i19 = t8.getDate(), e30 = t3(o36?.in || n19, t8.getTime());
  e30.setMonth(t8.getMonth() + r32 + 1, 0);
  let f75 = e30.getDate();
  return i19 >= f75 ? e30 : (t8.setFullYear(e30.getFullYear(), e30.getMonth(), i19), t8);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/startOfISOWeek.mjs
function f67(t8, e30) {
  return O3(t8, { ...e30, weekStartsOn: 1 });
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/getISOWeekYear.mjs
function c54(f75, n19) {
  let e30 = e3(f75, n19?.in), t8 = e30.getFullYear(), r32 = t3(e30, 0);
  r32.setFullYear(t8 + 1, 0, 4), r32.setHours(0, 0, 0, 0);
  let u50 = f67(r32), o36 = t3(e30, 0);
  o36.setFullYear(t8, 0, 4), o36.setHours(0, 0, 0, 0);
  let i19 = f67(o36);
  return e30.getTime() >= u50.getTime() ? t8 + 1 : e30.getTime() >= i19.getTime() ? t8 : t8 - 1;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/_lib/getTimezoneOffsetInMilliseconds.mjs
function l44(t8) {
  let e30 = e3(t8), n19 = new Date(Date.UTC(e30.getFullYear(), e30.getMonth(), e30.getDate(), e30.getHours(), e30.getMinutes(), e30.getSeconds(), e30.getMilliseconds()));
  return n19.setUTCFullYear(e30.getFullYear()), +t8 - +n19;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/startOfDay.mjs
function a22(o36, r32) {
  let t8 = e3(o36, r32?.in);
  return t8.setHours(0, 0, 0, 0), t8;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/differenceInCalendarDays.mjs
function D63(o36, n19, i19) {
  let [m72, s23] = m8(i19?.in, o36, n19), t8 = a22(m72), e30 = a22(s23), f75 = +t8 - l44(t8), l53 = +e30 - l44(e30);
  return Math.round((f75 - l53) / I);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/startOfISOWeekYear.mjs
function m63(t8, e30) {
  let o36 = c54(t8, e30), r32 = t3(e30?.in || t8, 0);
  return r32.setFullYear(o36, 0, 4), r32.setHours(0, 0, 0, 0), f67(r32);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/addWeeks.mjs
function o29(e30, r32, t8) {
  return f66(e30, r32 * 7, t8);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/addYears.mjs
function e22(r32, t8, o36) {
  return c53(r32, t8 * 12, o36);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/max.mjs
function l45(f75, i19) {
  let t8, o36 = i19?.in;
  return f75.forEach((r32) => {
    !o36 && typeof r32 == "object" && (o36 = t3.bind(null, r32));
    let e30 = e3(r32, o36);
    (!t8 || t8 < e30 || isNaN(+e30)) && (t8 = e30);
  }), t3(o36, t8 || NaN);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/min.mjs
function l46(i19, f75) {
  let t8, o36 = f75?.in;
  return i19.forEach((r32) => {
    !o36 && typeof r32 == "object" && (o36 = t3.bind(null, r32));
    let e30 = e3(r32, o36);
    (!t8 || t8 > e30 || isNaN(+e30)) && (t8 = e30);
  }), t3(o36, t8 || NaN);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/isSameDay.mjs
function m64(e30, r32, a33) {
  let [o36, i19] = m8(a33?.in, e30, r32);
  return +a22(o36) == +a22(i19);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/isDate.mjs
function e23(t8) {
  return t8 instanceof Date || typeof t8 == "object" && Object.prototype.toString.call(t8) === "[object Date]";
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/isValid.mjs
function i10(o36) {
  return !(!e23(o36) && typeof o36 != "number" || isNaN(+e3(o36)));
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/differenceInCalendarMonths.mjs
function i11(n19, r32, o36) {
  let [e30, t8] = m8(o36?.in, n19, r32), a33 = e30.getFullYear() - t8.getFullYear(), f75 = e30.getMonth() - t8.getMonth();
  return a33 * 12 + f75;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/endOfMonth.mjs
function u44(e30, o36) {
  let t8 = e3(e30, o36?.in), n19 = t8.getMonth();
  return t8.setFullYear(t8.getFullYear(), n19 + 1, 0), t8.setHours(23, 59, 59, 999), t8;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/_lib/normalizeInterval.mjs
function m66(r32, t8) {
  let [n19, e30] = m8(r32, t8.start, t8.end);
  return { start: n19, end: e30 };
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/eachMonthOfInterval.mjs
function m68(c60, a33) {
  let { start: n19, end: o36 } = m66(a33?.in, c60), e30 = +n19 > +o36, i19 = e30 ? +n19 : +o36, t8 = e30 ? o36 : n19;
  t8.setHours(0, 0, 0, 0), t8.setDate(1);
  let r32 = a33?.step ?? 1;
  if (!r32) return [];
  r32 < 0 && (r32 = -r32, e30 = !e30);
  let s23 = [];
  for (; +t8 <= i19; ) s23.push(t3(n19, t8)), t8.setMonth(t8.getMonth() + r32);
  return e30 ? s23.reverse() : s23;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/startOfMonth.mjs
function n11(e30, o36) {
  let t8 = e3(e30, o36?.in);
  return t8.setDate(1), t8.setHours(0, 0, 0, 0), t8;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/endOfYear.mjs
function n12(t8, r32) {
  let e30 = e3(t8, r32?.in), o36 = e30.getFullYear();
  return e30.setFullYear(o36 + 1, 0, 0), e30.setHours(23, 59, 59, 999), e30;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/startOfYear.mjs
function a25(e30, r32) {
  let t8 = e3(e30, r32?.in);
  return t8.setFullYear(t8.getFullYear(), 0, 1), t8.setHours(0, 0, 0, 0), t8;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/eachYearOfInterval.mjs
function f71(l53, a33) {
  let { start: n19, end: s23 } = m66(a33?.in, l53), t8 = +n19 > +s23, u50 = t8 ? +n19 : +s23, e30 = t8 ? s23 : n19;
  e30.setHours(0, 0, 0, 0), e30.setMonth(0, 1);
  let r32 = a33?.step ?? 1;
  if (!r32) return [];
  r32 < 0 && (r32 = -r32, t8 = !t8);
  let o36 = [];
  for (; +e30 <= u50; ) o36.push(t3(n19, e30)), e30.setFullYear(e30.getFullYear() + r32);
  return t8 ? o36.reverse() : o36;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/endOfWeek.mjs
function O21(s23, e30) {
  let o36 = n2(), n19 = e30?.weekStartsOn ?? e30?.locale?.options?.weekStartsOn ?? o36.weekStartsOn ?? o36.locale?.options?.weekStartsOn ?? 0, t8 = e3(s23, e30?.in), a33 = t8.getDay(), r32 = (a33 < n19 ? -7 : 0) + 6 - (a33 - n19);
  return t8.setDate(t8.getDate() + r32), t8.setHours(23, 59, 59, 999), t8;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/endOfISOWeek.mjs
function n13(e30, t8) {
  return O21(e30, { ...t8, weekStartsOn: 1 });
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/getDayOfYear.mjs
function n14(t8, e30) {
  let r32 = e3(t8, e30?.in);
  return D63(r32, a25(r32)) + 1;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/getISOWeek.mjs
function a26(e30, o36) {
  let t8 = e3(e30, o36?.in), r32 = +f67(t8) - +m63(t8);
  return Math.round(r32 / x4) + 1;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/getWeekYear.mjs
function W59(r32, e30) {
  let s23 = e3(r32, e30?.in), t8 = s23.getFullYear(), o36 = n2(), f75 = e30?.firstWeekContainsDate ?? e30?.locale?.options?.firstWeekContainsDate ?? o36.firstWeekContainsDate ?? o36.locale?.options?.firstWeekContainsDate ?? 1, a33 = t3(e30?.in || r32, 0);
  a33.setFullYear(t8 + 1, 0, f75), a33.setHours(0, 0, 0, 0);
  let c60 = O3(a33, e30), n19 = t3(e30?.in || r32, 0);
  n19.setFullYear(t8, 0, f75), n19.setHours(0, 0, 0, 0);
  let u50 = O3(n19, e30);
  return +s23 >= +c60 ? t8 + 1 : +s23 >= +u50 ? t8 : t8 - 1;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/startOfWeekYear.mjs
function k66(r32, t8) {
  let o36 = n2(), a33 = t8?.firstWeekContainsDate ?? t8?.locale?.options?.firstWeekContainsDate ?? o36.firstWeekContainsDate ?? o36.locale?.options?.firstWeekContainsDate ?? 1, s23 = W59(r32, t8), e30 = t3(t8?.in || r32, 0);
  return e30.setFullYear(s23, 0, a33), e30.setHours(0, 0, 0, 0), O3(e30, t8);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/getWeek.mjs
function n15(r32, t8) {
  let e30 = e3(r32, t8?.in), o36 = +O3(e30, t8) - +k66(e30, t8);
  return Math.round(o36 / x4) + 1;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/_lib/addLeadingZeros.mjs
function r23(t8, n19) {
  let o36 = t8 < 0 ? "-" : "", a33 = Math.abs(t8).toString().padStart(n19, "0");
  return o36 + a33;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/_lib/format/lightFormatters.mjs
var g63 = { y(e30, t8) {
  let r32 = e30.getFullYear(), a33 = r32 > 0 ? r32 : 1 - r32;
  return r23(t8 === "yy" ? a33 % 100 : a33, t8.length);
}, M(e30, t8) {
  let r32 = e30.getMonth();
  return t8 === "M" ? String(r32 + 1) : r23(r32 + 1, 2);
}, d(e30, t8) {
  return r23(e30.getDate(), t8.length);
}, a(e30, t8) {
  let r32 = e30.getHours() / 12 >= 1 ? "pm" : "am";
  switch (t8) {
    case "a":
    case "aa":
      return r32.toUpperCase();
    case "aaa":
      return r32;
    case "aaaaa":
      return r32[0];
    default:
      return r32 === "am" ? "a.m." : "p.m.";
  }
}, h(e30, t8) {
  return r23(e30.getHours() % 12 || 12, t8.length);
}, H(e30, t8) {
  return r23(e30.getHours(), t8.length);
}, m(e30, t8) {
  return r23(e30.getMinutes(), t8.length);
}, s(e30, t8) {
  return r23(e30.getSeconds(), t8.length);
}, S(e30, t8) {
  let r32 = t8.length, a33 = e30.getMilliseconds(), s23 = Math.trunc(a33 * Math.pow(10, r32 - 3));
  return r23(s23, t8.length);
} };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/_lib/format/longFormatters.mjs
var s21 = (t8, e30) => {
  switch (t8) {
    case "P":
      return e30.date({ width: "short" });
    case "PP":
      return e30.date({ width: "medium" });
    case "PPP":
      return e30.date({ width: "long" });
    default:
      return e30.date({ width: "full" });
  }
};
var c55 = (t8, e30) => {
  switch (t8) {
    case "p":
      return e30.time({ width: "short" });
    case "pp":
      return e30.time({ width: "medium" });
    case "ppp":
      return e30.time({ width: "long" });
    default:
      return e30.time({ width: "full" });
  }
};
var P73 = (t8, e30) => {
  let d43 = t8.match(/(P+)(p+)?/) || [], a33 = d43[1], r32 = d43[2];
  if (!r32) return s21(t8, e30);
  let i19;
  switch (a33) {
    case "P":
      i19 = e30.dateTime({ width: "short" });
      break;
    case "PP":
      i19 = e30.dateTime({ width: "medium" });
      break;
    case "PPP":
      i19 = e30.dateTime({ width: "long" });
      break;
    default:
      i19 = e30.dateTime({ width: "full" });
      break;
  }
  return i19.replace("{{date}}", s21(a33, e30)).replace("{{time}}", c55(r32, e30));
};
var h46 = { p: c55, P: P73 };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/_lib/protectedTokens.mjs
var r24 = /^D+$/;
var s22 = /^Y+$/;
var a27 = ["D", "DD", "YY", "YYYY"];
function i12(e30) {
  return r24.test(e30);
}
function f72(e30) {
  return s22.test(e30);
}
function d37(e30, o36, n19) {
  let t8 = c56(e30, o36, n19);
  if (console.warn(t8), a27.includes(e30)) throw new RangeError(t8);
}
function c56(e30, o36, n19) {
  let t8 = e30[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e30.toLowerCase()}\` instead of \`${e30}\` (in \`${o36}\`) for formatting ${t8} to the input \`${n19}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/format.mjs
var f73 = { am: "am", pm: "pm", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" };
var l49 = { G: function(n19, r32, t8) {
  let e30 = n19.getFullYear() > 0 ? 1 : 0;
  switch (r32) {
    case "G":
    case "GG":
    case "GGG":
      return t8.era(e30, { width: "abbreviated" });
    case "GGGGG":
      return t8.era(e30, { width: "narrow" });
    default:
      return t8.era(e30, { width: "wide" });
  }
}, y: function(n19, r32, t8) {
  if (r32 === "yo") {
    let e30 = n19.getFullYear(), a33 = e30 > 0 ? e30 : 1 - e30;
    return t8.ordinalNumber(a33, { unit: "year" });
  }
  return g63.y(n19, r32);
}, Y: function(n19, r32, t8, e30) {
  let a33 = W59(n19, e30), i19 = a33 > 0 ? a33 : 1 - a33;
  if (r32 === "YY") {
    let m72 = i19 % 100;
    return r23(m72, 2);
  }
  return r32 === "Yo" ? t8.ordinalNumber(i19, { unit: "year" }) : r23(i19, r32.length);
}, R: function(n19, r32) {
  let t8 = c54(n19);
  return r23(t8, r32.length);
}, u: function(n19, r32) {
  let t8 = n19.getFullYear();
  return r23(t8, r32.length);
}, Q: function(n19, r32, t8) {
  let e30 = Math.ceil((n19.getMonth() + 1) / 3);
  switch (r32) {
    case "Q":
      return String(e30);
    case "QQ":
      return r23(e30, 2);
    case "Qo":
      return t8.ordinalNumber(e30, { unit: "quarter" });
    case "QQQ":
      return t8.quarter(e30, { width: "abbreviated", context: "formatting" });
    case "QQQQQ":
      return t8.quarter(e30, { width: "narrow", context: "formatting" });
    default:
      return t8.quarter(e30, { width: "wide", context: "formatting" });
  }
}, q: function(n19, r32, t8) {
  let e30 = Math.ceil((n19.getMonth() + 1) / 3);
  switch (r32) {
    case "q":
      return String(e30);
    case "qq":
      return r23(e30, 2);
    case "qo":
      return t8.ordinalNumber(e30, { unit: "quarter" });
    case "qqq":
      return t8.quarter(e30, { width: "abbreviated", context: "standalone" });
    case "qqqqq":
      return t8.quarter(e30, { width: "narrow", context: "standalone" });
    default:
      return t8.quarter(e30, { width: "wide", context: "standalone" });
  }
}, M: function(n19, r32, t8) {
  let e30 = n19.getMonth();
  switch (r32) {
    case "M":
    case "MM":
      return g63.M(n19, r32);
    case "Mo":
      return t8.ordinalNumber(e30 + 1, { unit: "month" });
    case "MMM":
      return t8.month(e30, { width: "abbreviated", context: "formatting" });
    case "MMMMM":
      return t8.month(e30, { width: "narrow", context: "formatting" });
    default:
      return t8.month(e30, { width: "wide", context: "formatting" });
  }
}, L: function(n19, r32, t8) {
  let e30 = n19.getMonth();
  switch (r32) {
    case "L":
      return String(e30 + 1);
    case "LL":
      return r23(e30 + 1, 2);
    case "Lo":
      return t8.ordinalNumber(e30 + 1, { unit: "month" });
    case "LLL":
      return t8.month(e30, { width: "abbreviated", context: "standalone" });
    case "LLLLL":
      return t8.month(e30, { width: "narrow", context: "standalone" });
    default:
      return t8.month(e30, { width: "wide", context: "standalone" });
  }
}, w: function(n19, r32, t8, e30) {
  let a33 = n15(n19, e30);
  return r32 === "wo" ? t8.ordinalNumber(a33, { unit: "week" }) : r23(a33, r32.length);
}, I: function(n19, r32, t8) {
  let e30 = a26(n19);
  return r32 === "Io" ? t8.ordinalNumber(e30, { unit: "week" }) : r23(e30, r32.length);
}, d: function(n19, r32, t8) {
  return r32 === "do" ? t8.ordinalNumber(n19.getDate(), { unit: "date" }) : g63.d(n19, r32);
}, D: function(n19, r32, t8) {
  let e30 = n14(n19);
  return r32 === "Do" ? t8.ordinalNumber(e30, { unit: "dayOfYear" }) : r23(e30, r32.length);
}, E: function(n19, r32, t8) {
  let e30 = n19.getDay();
  switch (r32) {
    case "E":
    case "EE":
    case "EEE":
      return t8.day(e30, { width: "abbreviated", context: "formatting" });
    case "EEEEE":
      return t8.day(e30, { width: "narrow", context: "formatting" });
    case "EEEEEE":
      return t8.day(e30, { width: "short", context: "formatting" });
    default:
      return t8.day(e30, { width: "wide", context: "formatting" });
  }
}, e: function(n19, r32, t8, e30) {
  let a33 = n19.getDay(), i19 = (a33 - e30.weekStartsOn + 8) % 7 || 7;
  switch (r32) {
    case "e":
      return String(i19);
    case "ee":
      return r23(i19, 2);
    case "eo":
      return t8.ordinalNumber(i19, { unit: "day" });
    case "eee":
      return t8.day(a33, { width: "abbreviated", context: "formatting" });
    case "eeeee":
      return t8.day(a33, { width: "narrow", context: "formatting" });
    case "eeeeee":
      return t8.day(a33, { width: "short", context: "formatting" });
    default:
      return t8.day(a33, { width: "wide", context: "formatting" });
  }
}, c: function(n19, r32, t8, e30) {
  let a33 = n19.getDay(), i19 = (a33 - e30.weekStartsOn + 8) % 7 || 7;
  switch (r32) {
    case "c":
      return String(i19);
    case "cc":
      return r23(i19, r32.length);
    case "co":
      return t8.ordinalNumber(i19, { unit: "day" });
    case "ccc":
      return t8.day(a33, { width: "abbreviated", context: "standalone" });
    case "ccccc":
      return t8.day(a33, { width: "narrow", context: "standalone" });
    case "cccccc":
      return t8.day(a33, { width: "short", context: "standalone" });
    default:
      return t8.day(a33, { width: "wide", context: "standalone" });
  }
}, i: function(n19, r32, t8) {
  let e30 = n19.getDay(), a33 = e30 === 0 ? 7 : e30;
  switch (r32) {
    case "i":
      return String(a33);
    case "ii":
      return r23(a33, r32.length);
    case "io":
      return t8.ordinalNumber(a33, { unit: "day" });
    case "iii":
      return t8.day(e30, { width: "abbreviated", context: "formatting" });
    case "iiiii":
      return t8.day(e30, { width: "narrow", context: "formatting" });
    case "iiiiii":
      return t8.day(e30, { width: "short", context: "formatting" });
    default:
      return t8.day(e30, { width: "wide", context: "formatting" });
  }
}, a: function(n19, r32, t8) {
  let a33 = n19.getHours() / 12 >= 1 ? "pm" : "am";
  switch (r32) {
    case "a":
    case "aa":
      return t8.dayPeriod(a33, { width: "abbreviated", context: "formatting" });
    case "aaa":
      return t8.dayPeriod(a33, { width: "abbreviated", context: "formatting" }).toLowerCase();
    case "aaaaa":
      return t8.dayPeriod(a33, { width: "narrow", context: "formatting" });
    default:
      return t8.dayPeriod(a33, { width: "wide", context: "formatting" });
  }
}, b: function(n19, r32, t8) {
  let e30 = n19.getHours(), a33;
  switch (e30 === 12 ? a33 = f73.noon : e30 === 0 ? a33 = f73.midnight : a33 = e30 / 12 >= 1 ? "pm" : "am", r32) {
    case "b":
    case "bb":
      return t8.dayPeriod(a33, { width: "abbreviated", context: "formatting" });
    case "bbb":
      return t8.dayPeriod(a33, { width: "abbreviated", context: "formatting" }).toLowerCase();
    case "bbbbb":
      return t8.dayPeriod(a33, { width: "narrow", context: "formatting" });
    default:
      return t8.dayPeriod(a33, { width: "wide", context: "formatting" });
  }
}, B: function(n19, r32, t8) {
  let e30 = n19.getHours(), a33;
  switch (e30 >= 17 ? a33 = f73.evening : e30 >= 12 ? a33 = f73.afternoon : e30 >= 4 ? a33 = f73.morning : a33 = f73.night, r32) {
    case "B":
    case "BB":
    case "BBB":
      return t8.dayPeriod(a33, { width: "abbreviated", context: "formatting" });
    case "BBBBB":
      return t8.dayPeriod(a33, { width: "narrow", context: "formatting" });
    default:
      return t8.dayPeriod(a33, { width: "wide", context: "formatting" });
  }
}, h: function(n19, r32, t8) {
  if (r32 === "ho") {
    let e30 = n19.getHours() % 12;
    return e30 === 0 && (e30 = 12), t8.ordinalNumber(e30, { unit: "hour" });
  }
  return g63.h(n19, r32);
}, H: function(n19, r32, t8) {
  return r32 === "Ho" ? t8.ordinalNumber(n19.getHours(), { unit: "hour" }) : g63.H(n19, r32);
}, K: function(n19, r32, t8) {
  let e30 = n19.getHours() % 12;
  return r32 === "Ko" ? t8.ordinalNumber(e30, { unit: "hour" }) : r23(e30, r32.length);
}, k: function(n19, r32, t8) {
  let e30 = n19.getHours();
  return e30 === 0 && (e30 = 24), r32 === "ko" ? t8.ordinalNumber(e30, { unit: "hour" }) : r23(e30, r32.length);
}, m: function(n19, r32, t8) {
  return r32 === "mo" ? t8.ordinalNumber(n19.getMinutes(), { unit: "minute" }) : g63.m(n19, r32);
}, s: function(n19, r32, t8) {
  return r32 === "so" ? t8.ordinalNumber(n19.getSeconds(), { unit: "second" }) : g63.s(n19, r32);
}, S: function(n19, r32) {
  return g63.S(n19, r32);
}, X: function(n19, r32, t8) {
  let e30 = n19.getTimezoneOffset();
  if (e30 === 0) return "Z";
  switch (r32) {
    case "X":
      return b55(e30);
    case "XXXX":
    case "XX":
      return d38(e30);
    default:
      return d38(e30, ":");
  }
}, x: function(n19, r32, t8) {
  let e30 = n19.getTimezoneOffset();
  switch (r32) {
    case "x":
      return b55(e30);
    case "xxxx":
    case "xx":
      return d38(e30);
    default:
      return d38(e30, ":");
  }
}, O: function(n19, r32, t8) {
  let e30 = n19.getTimezoneOffset();
  switch (r32) {
    case "O":
    case "OO":
    case "OOO":
      return "GMT" + x69(e30, ":");
    default:
      return "GMT" + d38(e30, ":");
  }
}, z: function(n19, r32, t8) {
  let e30 = n19.getTimezoneOffset();
  switch (r32) {
    case "z":
    case "zz":
    case "zzz":
      return "GMT" + x69(e30, ":");
    default:
      return "GMT" + d38(e30, ":");
  }
}, t: function(n19, r32, t8) {
  let e30 = Math.trunc(+n19 / 1e3);
  return r23(e30, r32.length);
}, T: function(n19, r32, t8) {
  return r23(+n19, r32.length);
} };
function x69(n19, r32 = "") {
  let t8 = n19 > 0 ? "-" : "+", e30 = Math.abs(n19), a33 = Math.trunc(e30 / 60), i19 = e30 % 60;
  return i19 === 0 ? t8 + String(a33) : t8 + String(a33) + r32 + r23(i19, 2);
}
function b55(n19, r32) {
  return n19 % 60 === 0 ? (n19 > 0 ? "-" : "+") + r23(Math.abs(n19) / 60, 2) : d38(n19, r32);
}
function d38(n19, r32 = "") {
  let t8 = n19 > 0 ? "-" : "+", e30 = Math.abs(n19), a33 = r23(Math.trunc(e30 / 60), 2), i19 = r23(e30 % 60, 2);
  return t8 + a33 + r32 + i19;
}
var P74 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var G12 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var N64 = /^'([^]*?)'?$/;
var Q24 = /''/g;
var B10 = /[a-zA-Z]/;
function X72(n19, r32, t8) {
  let e30 = n2(), a33 = t8?.locale ?? e30.locale ?? s13, i19 = t8?.firstWeekContainsDate ?? t8?.locale?.options?.firstWeekContainsDate ?? e30.firstWeekContainsDate ?? e30.locale?.options?.firstWeekContainsDate ?? 1, m72 = t8?.weekStartsOn ?? t8?.locale?.options?.weekStartsOn ?? e30.weekStartsOn ?? e30.locale?.options?.weekStartsOn ?? 0, h48 = e3(n19, t8?.in);
  if (!i10(h48)) throw new RangeError("Invalid time value");
  let g65 = r32.match(G12).map((s23) => {
    let c60 = s23[0];
    if (c60 === "p" || c60 === "P") {
      let w71 = h46[c60];
      return w71(s23, a33.formatLong);
    }
    return s23;
  }).join("").match(P74).map((s23) => {
    if (s23 === "''") return { isToken: false, value: "'" };
    let c60 = s23[0];
    if (c60 === "'") return { isToken: false, value: H57(s23) };
    if (l49[c60]) return { isToken: true, value: s23 };
    if (c60.match(B10)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + c60 + "`");
    return { isToken: false, value: s23 };
  });
  a33.localize.preprocessor && (g65 = a33.localize.preprocessor(h48, g65));
  let y75 = { firstWeekContainsDate: i19, weekStartsOn: m72, locale: a33 };
  return g65.map((s23) => {
    if (!s23.isToken) return s23.value;
    let c60 = s23.value;
    (!t8?.useAdditionalWeekYearTokens && f72(c60) || !t8?.useAdditionalDayOfYearTokens && i12(c60)) && d37(c60, r32, String(n19));
    let w71 = l49[c60[0]];
    return w71(h48, c60, a33.localize, y75);
  }).join("");
}
function H57(n19) {
  let r32 = n19.match(N64);
  return r32 ? r32[1].replace(Q24, "'") : n19;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/getDaysInMonth.mjs
function u47(e30, n19) {
  let t8 = e3(e30, n19?.in), r32 = t8.getFullYear(), a33 = t8.getMonth(), o36 = t3(t8, 0);
  return o36.setFullYear(r32, a33 + 1, 0), o36.setHours(0, 0, 0, 0), o36.getDate();
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/getISODay.mjs
function a28(e30, o36) {
  let t8 = e3(e30, o36?.in).getDay();
  return t8 === 0 ? 7 : t8;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/getMonth.mjs
function n16(t8, o36) {
  return e3(t8, o36?.in).getMonth();
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/getYear.mjs
function o33(t8, e30) {
  return e3(t8, e30?.in).getFullYear();
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/isAfter.mjs
function o34(r32, e30) {
  return +e3(r32) > +e3(e30);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/isBefore.mjs
function r27(e30, o36) {
  return +e3(e30) < +e3(o36);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/setWeek.mjs
function i13(f75, o36, t8) {
  let e30 = e3(f75, t8?.in), a33 = n15(e30, t8) - o36;
  return e30.setDate(e30.getDate() - a33 * 7), e3(e30, t8?.in);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/setISOWeek.mjs
function i14(o36, r32, e30) {
  let t8 = e3(o36, e30?.in), f75 = a26(t8, e30) - r32;
  return t8.setDate(t8.getDate() - f75 * 7), t8;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/setDay.mjs
function O22(s23, t8, e30) {
  let r32 = n2(), c60 = e30?.weekStartsOn ?? e30?.locale?.options?.weekStartsOn ?? r32.weekStartsOn ?? r32.locale?.options?.weekStartsOn ?? 0, o36 = e3(s23, e30?.in), a33 = o36.getDay(), f75 = (t8 % 7 + 7) % 7, n19 = 7 - c60, i19 = t8 < 0 || t8 > 6 ? t8 - (a33 + n19) % 7 : (f75 + n19) % 7 - (a33 + n19) % 7;
  return f66(o36, i19, e30);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/setISODay.mjs
function d41(e30, o36, t8) {
  let r32 = e3(e30, t8?.in), a33 = a28(r32, t8), f75 = o36 - a33;
  return f66(r32, f75, t8);
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/parse.mjs
var T42 = class {
  subPriority = 0;
  validate(r32, t8) {
    return true;
  }
};
var D65 = class extends T42 {
  constructor(r32, t8, e30, s23, a33) {
    super(), this.value = r32, this.validateValue = t8, this.setValue = e30, this.priority = s23, a33 && (this.subPriority = a33);
  }
  validate(r32, t8) {
    return this.validateValue(r32, this.value, t8);
  }
  set(r32, t8, e30) {
    return this.setValue(r32, t8, this.value, e30);
  }
};
var i15 = class {
  run(r32, t8, e30, s23) {
    let a33 = this.parse(r32, t8, e30, s23);
    return a33 ? { setter: new D65(a33.value, this.validate, this.set, this.priority, this.subPriority), rest: a33.rest } : null;
  }
  validate(r32, t8, e30) {
    return true;
  }
};
var k67 = class extends i15 {
  priority = 140;
  parse(r32, t8, e30) {
    switch (t8) {
      case "G":
      case "GG":
      case "GGG":
        return e30.era(r32, { width: "abbreviated" }) || e30.era(r32, { width: "narrow" });
      case "GGGGG":
        return e30.era(r32, { width: "narrow" });
      default:
        return e30.era(r32, { width: "wide" }) || e30.era(r32, { width: "abbreviated" }) || e30.era(r32, { width: "narrow" });
    }
  }
  set(r32, t8, e30) {
    return t8.era = e30, r32.setFullYear(e30, 0, 1), r32.setHours(0, 0, 0, 0), r32;
  }
  incompatibleTokens = ["R", "u", "t", "T"];
};
var c57 = { month: /^(1[0-2]|0?\d)/, date: /^(3[0-1]|[0-2]?\d)/, dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, week: /^(5[0-3]|[0-4]?\d)/, hour23h: /^(2[0-3]|[0-1]?\d)/, hour24h: /^(2[0-4]|[0-1]?\d)/, hour11h: /^(1[0-1]|0?\d)/, hour12h: /^(1[0-2]|0?\d)/, minute: /^[0-5]?\d/, second: /^[0-5]?\d/, singleDigit: /^\d/, twoDigits: /^\d{1,2}/, threeDigits: /^\d{1,3}/, fourDigits: /^\d{1,4}/, anyDigitsSigned: /^-?\d+/, singleDigitSigned: /^-?\d/, twoDigitsSigned: /^-?\d{1,2}/, threeDigitsSigned: /^-?\d{1,3}/, fourDigitsSigned: /^-?\d{1,4}/ };
var d42 = { basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/, basic: /^([+-])(\d{2})(\d{2})|Z/, basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/, extended: /^([+-])(\d{2}):(\d{2})|Z/, extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/ };
function p59(o36, r32) {
  return o36 && { value: r32(o36.value), rest: o36.rest };
}
function u49(o36, r32) {
  let t8 = r32.match(o36);
  return t8 ? { value: parseInt(t8[0], 10), rest: r32.slice(t8[0].length) } : null;
}
function w70(o36, r32) {
  let t8 = r32.match(o36);
  if (!t8) return null;
  if (t8[0] === "Z") return { value: 0, rest: r32.slice(1) };
  let e30 = t8[1] === "+" ? 1 : -1, s23 = t8[2] ? parseInt(t8[2], 10) : 0, a33 = t8[3] ? parseInt(t8[3], 10) : 0, l53 = t8[5] ? parseInt(t8[5], 10) : 0;
  return { value: e30 * (s23 * m7 + a33 * i + l53 * a2), rest: r32.slice(t8[0].length) };
}
function N65(o36) {
  return u49(c57.anyDigitsSigned, o36);
}
function n17(o36, r32) {
  switch (o36) {
    case 1:
      return u49(c57.singleDigit, r32);
    case 2:
      return u49(c57.twoDigits, r32);
    case 3:
      return u49(c57.threeDigits, r32);
    case 4:
      return u49(c57.fourDigits, r32);
    default:
      return u49(new RegExp("^\\d{1," + o36 + "}"), r32);
  }
}
function b57(o36, r32) {
  switch (o36) {
    case 1:
      return u49(c57.singleDigitSigned, r32);
    case 2:
      return u49(c57.twoDigitsSigned, r32);
    case 3:
      return u49(c57.threeDigitsSigned, r32);
    case 4:
      return u49(c57.fourDigitsSigned, r32);
    default:
      return u49(new RegExp("^-?\\d{1," + o36 + "}"), r32);
  }
}
function P75(o36) {
  switch (o36) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    default:
      return 0;
  }
}
function _13(o36, r32) {
  let t8 = r32 > 0, e30 = t8 ? r32 : 1 - r32, s23;
  if (e30 <= 50) s23 = o36 || 100;
  else {
    let a33 = e30 + 50, l53 = Math.trunc(a33 / 100) * 100, h48 = o36 >= a33 % 100;
    s23 = o36 + l53 - (h48 ? 100 : 0);
  }
  return t8 ? s23 : 1 - s23;
}
function Y24(o36) {
  return o36 % 400 === 0 || o36 % 4 === 0 && o36 % 100 !== 0;
}
var M75 = class extends i15 {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(r32, t8, e30) {
    let s23 = (a33) => ({ year: a33, isTwoDigitYear: t8 === "yy" });
    switch (t8) {
      case "y":
        return p59(n17(4, r32), s23);
      case "yo":
        return p59(e30.ordinalNumber(r32, { unit: "year" }), s23);
      default:
        return p59(n17(t8.length, r32), s23);
    }
  }
  validate(r32, t8) {
    return t8.isTwoDigitYear || t8.year > 0;
  }
  set(r32, t8, e30) {
    let s23 = r32.getFullYear();
    if (e30.isTwoDigitYear) {
      let l53 = _13(e30.year, s23);
      return r32.setFullYear(l53, 0, 1), r32.setHours(0, 0, 0, 0), r32;
    }
    let a33 = !("era" in t8) || t8.era === 1 ? e30.year : 1 - e30.year;
    return r32.setFullYear(a33, 0, 1), r32.setHours(0, 0, 0, 0), r32;
  }
};
var E67 = class extends i15 {
  priority = 130;
  parse(r32, t8, e30) {
    let s23 = (a33) => ({ year: a33, isTwoDigitYear: t8 === "YY" });
    switch (t8) {
      case "Y":
        return p59(n17(4, r32), s23);
      case "Yo":
        return p59(e30.ordinalNumber(r32, { unit: "year" }), s23);
      default:
        return p59(n17(t8.length, r32), s23);
    }
  }
  validate(r32, t8) {
    return t8.isTwoDigitYear || t8.year > 0;
  }
  set(r32, t8, e30, s23) {
    let a33 = W59(r32, s23);
    if (e30.isTwoDigitYear) {
      let h48 = _13(e30.year, a33);
      return r32.setFullYear(h48, 0, s23.firstWeekContainsDate), r32.setHours(0, 0, 0, 0), O3(r32, s23);
    }
    let l53 = !("era" in t8) || t8.era === 1 ? e30.year : 1 - e30.year;
    return r32.setFullYear(l53, 0, s23.firstWeekContainsDate), r32.setHours(0, 0, 0, 0), O3(r32, s23);
  }
  incompatibleTokens = ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"];
};
var q29 = class extends i15 {
  priority = 130;
  parse(r32, t8) {
    return t8 === "R" ? b57(4, r32) : b57(t8.length, r32);
  }
  set(r32, t8, e30) {
    let s23 = t3(r32, 0);
    return s23.setFullYear(e30, 0, 4), s23.setHours(0, 0, 0, 0), f67(s23);
  }
  incompatibleTokens = ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"];
};
var H58 = class extends i15 {
  priority = 130;
  parse(r32, t8) {
    return t8 === "u" ? b57(4, r32) : b57(t8.length, r32);
  }
  set(r32, t8, e30) {
    return r32.setFullYear(e30, 0, 1), r32.setHours(0, 0, 0, 0), r32;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
};
var I20 = class extends i15 {
  priority = 120;
  parse(r32, t8, e30) {
    switch (t8) {
      case "Q":
      case "QQ":
        return n17(t8.length, r32);
      case "Qo":
        return e30.ordinalNumber(r32, { unit: "quarter" });
      case "QQQ":
        return e30.quarter(r32, { width: "abbreviated", context: "formatting" }) || e30.quarter(r32, { width: "narrow", context: "formatting" });
      case "QQQQQ":
        return e30.quarter(r32, { width: "narrow", context: "formatting" });
      default:
        return e30.quarter(r32, { width: "wide", context: "formatting" }) || e30.quarter(r32, { width: "abbreviated", context: "formatting" }) || e30.quarter(r32, { width: "narrow", context: "formatting" });
    }
  }
  validate(r32, t8) {
    return t8 >= 1 && t8 <= 4;
  }
  set(r32, t8, e30) {
    return r32.setMonth((e30 - 1) * 3, 1), r32.setHours(0, 0, 0, 0), r32;
  }
  incompatibleTokens = ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"];
};
var O23 = class extends i15 {
  priority = 120;
  parse(r32, t8, e30) {
    switch (t8) {
      case "q":
      case "qq":
        return n17(t8.length, r32);
      case "qo":
        return e30.ordinalNumber(r32, { unit: "quarter" });
      case "qqq":
        return e30.quarter(r32, { width: "abbreviated", context: "standalone" }) || e30.quarter(r32, { width: "narrow", context: "standalone" });
      case "qqqqq":
        return e30.quarter(r32, { width: "narrow", context: "standalone" });
      default:
        return e30.quarter(r32, { width: "wide", context: "standalone" }) || e30.quarter(r32, { width: "abbreviated", context: "standalone" }) || e30.quarter(r32, { width: "narrow", context: "standalone" });
    }
  }
  validate(r32, t8) {
    return t8 >= 1 && t8 <= 4;
  }
  set(r32, t8, e30) {
    return r32.setMonth((e30 - 1) * 3, 1), r32.setHours(0, 0, 0, 0), r32;
  }
  incompatibleTokens = ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"];
};
var L71 = class extends i15 {
  incompatibleTokens = ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"];
  priority = 110;
  parse(r32, t8, e30) {
    let s23 = (a33) => a33 - 1;
    switch (t8) {
      case "M":
        return p59(u49(c57.month, r32), s23);
      case "MM":
        return p59(n17(2, r32), s23);
      case "Mo":
        return p59(e30.ordinalNumber(r32, { unit: "month" }), s23);
      case "MMM":
        return e30.month(r32, { width: "abbreviated", context: "formatting" }) || e30.month(r32, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return e30.month(r32, { width: "narrow", context: "formatting" });
      default:
        return e30.month(r32, { width: "wide", context: "formatting" }) || e30.month(r32, { width: "abbreviated", context: "formatting" }) || e30.month(r32, { width: "narrow", context: "formatting" });
    }
  }
  validate(r32, t8) {
    return t8 >= 0 && t8 <= 11;
  }
  set(r32, t8, e30) {
    return r32.setMonth(e30, 1), r32.setHours(0, 0, 0, 0), r32;
  }
};
var v66 = class extends i15 {
  priority = 110;
  parse(r32, t8, e30) {
    let s23 = (a33) => a33 - 1;
    switch (t8) {
      case "L":
        return p59(u49(c57.month, r32), s23);
      case "LL":
        return p59(n17(2, r32), s23);
      case "Lo":
        return p59(e30.ordinalNumber(r32, { unit: "month" }), s23);
      case "LLL":
        return e30.month(r32, { width: "abbreviated", context: "standalone" }) || e30.month(r32, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return e30.month(r32, { width: "narrow", context: "standalone" });
      default:
        return e30.month(r32, { width: "wide", context: "standalone" }) || e30.month(r32, { width: "abbreviated", context: "standalone" }) || e30.month(r32, { width: "narrow", context: "standalone" });
    }
  }
  validate(r32, t8) {
    return t8 >= 0 && t8 <= 11;
  }
  set(r32, t8, e30) {
    return r32.setMonth(e30, 1), r32.setHours(0, 0, 0, 0), r32;
  }
  incompatibleTokens = ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"];
};
var Q25 = class extends i15 {
  priority = 100;
  parse(r32, t8, e30) {
    switch (t8) {
      case "w":
        return u49(c57.week, r32);
      case "wo":
        return e30.ordinalNumber(r32, { unit: "week" });
      default:
        return n17(t8.length, r32);
    }
  }
  validate(r32, t8) {
    return t8 >= 1 && t8 <= 53;
  }
  set(r32, t8, e30, s23) {
    return O3(i13(r32, e30, s23), s23);
  }
  incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"];
};
var R41 = class extends i15 {
  priority = 100;
  parse(r32, t8, e30) {
    switch (t8) {
      case "I":
        return u49(c57.week, r32);
      case "Io":
        return e30.ordinalNumber(r32, { unit: "week" });
      default:
        return n17(t8.length, r32);
    }
  }
  validate(r32, t8) {
    return t8 >= 1 && t8 <= 53;
  }
  set(r32, t8, e30) {
    return f67(i14(r32, e30));
  }
  incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"];
};
var Or = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var Lr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var C61 = class extends i15 {
  priority = 90;
  subPriority = 1;
  parse(r32, t8, e30) {
    switch (t8) {
      case "d":
        return u49(c57.date, r32);
      case "do":
        return e30.ordinalNumber(r32, { unit: "date" });
      default:
        return n17(t8.length, r32);
    }
  }
  validate(r32, t8) {
    let e30 = r32.getFullYear(), s23 = Y24(e30), a33 = r32.getMonth();
    return s23 ? t8 >= 1 && t8 <= Lr[a33] : t8 >= 1 && t8 <= Or[a33];
  }
  set(r32, t8, e30) {
    return r32.setDate(e30), r32.setHours(0, 0, 0, 0), r32;
  }
  incompatibleTokens = ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"];
};
var W60 = class extends i15 {
  priority = 90;
  subpriority = 1;
  parse(r32, t8, e30) {
    switch (t8) {
      case "D":
      case "DD":
        return u49(c57.dayOfYear, r32);
      case "Do":
        return e30.ordinalNumber(r32, { unit: "date" });
      default:
        return n17(t8.length, r32);
    }
  }
  validate(r32, t8) {
    let e30 = r32.getFullYear();
    return Y24(e30) ? t8 >= 1 && t8 <= 366 : t8 >= 1 && t8 <= 365;
  }
  set(r32, t8, e30) {
    return r32.setMonth(0, e30), r32.setHours(0, 0, 0, 0), r32;
  }
  incompatibleTokens = ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"];
};
var F76 = class extends i15 {
  priority = 90;
  parse(r32, t8, e30) {
    switch (t8) {
      case "E":
      case "EE":
      case "EEE":
        return e30.day(r32, { width: "abbreviated", context: "formatting" }) || e30.day(r32, { width: "short", context: "formatting" }) || e30.day(r32, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return e30.day(r32, { width: "narrow", context: "formatting" });
      case "EEEEEE":
        return e30.day(r32, { width: "short", context: "formatting" }) || e30.day(r32, { width: "narrow", context: "formatting" });
      default:
        return e30.day(r32, { width: "wide", context: "formatting" }) || e30.day(r32, { width: "abbreviated", context: "formatting" }) || e30.day(r32, { width: "short", context: "formatting" }) || e30.day(r32, { width: "narrow", context: "formatting" });
    }
  }
  validate(r32, t8) {
    return t8 >= 0 && t8 <= 6;
  }
  set(r32, t8, e30, s23) {
    return r32 = O22(r32, e30, s23), r32.setHours(0, 0, 0, 0), r32;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
};
var B11 = class extends i15 {
  priority = 90;
  parse(r32, t8, e30, s23) {
    let a33 = (l53) => {
      let h48 = Math.floor((l53 - 1) / 7) * 7;
      return (l53 + s23.weekStartsOn + 6) % 7 + h48;
    };
    switch (t8) {
      case "e":
      case "ee":
        return p59(n17(t8.length, r32), a33);
      case "eo":
        return p59(e30.ordinalNumber(r32, { unit: "day" }), a33);
      case "eee":
        return e30.day(r32, { width: "abbreviated", context: "formatting" }) || e30.day(r32, { width: "short", context: "formatting" }) || e30.day(r32, { width: "narrow", context: "formatting" });
      case "eeeee":
        return e30.day(r32, { width: "narrow", context: "formatting" });
      case "eeeeee":
        return e30.day(r32, { width: "short", context: "formatting" }) || e30.day(r32, { width: "narrow", context: "formatting" });
      default:
        return e30.day(r32, { width: "wide", context: "formatting" }) || e30.day(r32, { width: "abbreviated", context: "formatting" }) || e30.day(r32, { width: "short", context: "formatting" }) || e30.day(r32, { width: "narrow", context: "formatting" });
    }
  }
  validate(r32, t8) {
    return t8 >= 0 && t8 <= 6;
  }
  set(r32, t8, e30, s23) {
    return r32 = O22(r32, e30, s23), r32.setHours(0, 0, 0, 0), r32;
  }
  incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"];
};
var G13 = class extends i15 {
  priority = 90;
  parse(r32, t8, e30, s23) {
    let a33 = (l53) => {
      let h48 = Math.floor((l53 - 1) / 7) * 7;
      return (l53 + s23.weekStartsOn + 6) % 7 + h48;
    };
    switch (t8) {
      case "c":
      case "cc":
        return p59(n17(t8.length, r32), a33);
      case "co":
        return p59(e30.ordinalNumber(r32, { unit: "day" }), a33);
      case "ccc":
        return e30.day(r32, { width: "abbreviated", context: "standalone" }) || e30.day(r32, { width: "short", context: "standalone" }) || e30.day(r32, { width: "narrow", context: "standalone" });
      case "ccccc":
        return e30.day(r32, { width: "narrow", context: "standalone" });
      case "cccccc":
        return e30.day(r32, { width: "short", context: "standalone" }) || e30.day(r32, { width: "narrow", context: "standalone" });
      default:
        return e30.day(r32, { width: "wide", context: "standalone" }) || e30.day(r32, { width: "abbreviated", context: "standalone" }) || e30.day(r32, { width: "short", context: "standalone" }) || e30.day(r32, { width: "narrow", context: "standalone" });
    }
  }
  validate(r32, t8) {
    return t8 >= 0 && t8 <= 6;
  }
  set(r32, t8, e30, s23) {
    return r32 = O22(r32, e30, s23), r32.setHours(0, 0, 0, 0), r32;
  }
  incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"];
};
var X73 = class extends i15 {
  priority = 90;
  parse(r32, t8, e30) {
    let s23 = (a33) => a33 === 0 ? 7 : a33;
    switch (t8) {
      case "i":
      case "ii":
        return n17(t8.length, r32);
      case "io":
        return e30.ordinalNumber(r32, { unit: "day" });
      case "iii":
        return p59(e30.day(r32, { width: "abbreviated", context: "formatting" }) || e30.day(r32, { width: "short", context: "formatting" }) || e30.day(r32, { width: "narrow", context: "formatting" }), s23);
      case "iiiii":
        return p59(e30.day(r32, { width: "narrow", context: "formatting" }), s23);
      case "iiiiii":
        return p59(e30.day(r32, { width: "short", context: "formatting" }) || e30.day(r32, { width: "narrow", context: "formatting" }), s23);
      default:
        return p59(e30.day(r32, { width: "wide", context: "formatting" }) || e30.day(r32, { width: "abbreviated", context: "formatting" }) || e30.day(r32, { width: "short", context: "formatting" }) || e30.day(r32, { width: "narrow", context: "formatting" }), s23);
    }
  }
  validate(r32, t8) {
    return t8 >= 1 && t8 <= 7;
  }
  set(r32, t8, e30) {
    return r32 = d41(r32, e30), r32.setHours(0, 0, 0, 0), r32;
  }
  incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"];
};
var z71 = class extends i15 {
  priority = 80;
  parse(r32, t8, e30) {
    switch (t8) {
      case "a":
      case "aa":
      case "aaa":
        return e30.dayPeriod(r32, { width: "abbreviated", context: "formatting" }) || e30.dayPeriod(r32, { width: "narrow", context: "formatting" });
      case "aaaaa":
        return e30.dayPeriod(r32, { width: "narrow", context: "formatting" });
      default:
        return e30.dayPeriod(r32, { width: "wide", context: "formatting" }) || e30.dayPeriod(r32, { width: "abbreviated", context: "formatting" }) || e30.dayPeriod(r32, { width: "narrow", context: "formatting" });
    }
  }
  set(r32, t8, e30) {
    return r32.setHours(P75(e30), 0, 0, 0), r32;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
};
var A33 = class extends i15 {
  priority = 80;
  parse(r32, t8, e30) {
    switch (t8) {
      case "b":
      case "bb":
      case "bbb":
        return e30.dayPeriod(r32, { width: "abbreviated", context: "formatting" }) || e30.dayPeriod(r32, { width: "narrow", context: "formatting" });
      case "bbbbb":
        return e30.dayPeriod(r32, { width: "narrow", context: "formatting" });
      default:
        return e30.dayPeriod(r32, { width: "wide", context: "formatting" }) || e30.dayPeriod(r32, { width: "abbreviated", context: "formatting" }) || e30.dayPeriod(r32, { width: "narrow", context: "formatting" });
    }
  }
  set(r32, t8, e30) {
    return r32.setHours(P75(e30), 0, 0, 0), r32;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
};
var V73 = class extends i15 {
  priority = 80;
  parse(r32, t8, e30) {
    switch (t8) {
      case "B":
      case "BB":
      case "BBB":
        return e30.dayPeriod(r32, { width: "abbreviated", context: "formatting" }) || e30.dayPeriod(r32, { width: "narrow", context: "formatting" });
      case "BBBBB":
        return e30.dayPeriod(r32, { width: "narrow", context: "formatting" });
      default:
        return e30.dayPeriod(r32, { width: "wide", context: "formatting" }) || e30.dayPeriod(r32, { width: "abbreviated", context: "formatting" }) || e30.dayPeriod(r32, { width: "narrow", context: "formatting" });
    }
  }
  set(r32, t8, e30) {
    return r32.setHours(P75(e30), 0, 0, 0), r32;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
};
var Z = class extends i15 {
  priority = 70;
  parse(r32, t8, e30) {
    switch (t8) {
      case "h":
        return u49(c57.hour12h, r32);
      case "ho":
        return e30.ordinalNumber(r32, { unit: "hour" });
      default:
        return n17(t8.length, r32);
    }
  }
  validate(r32, t8) {
    return t8 >= 1 && t8 <= 12;
  }
  set(r32, t8, e30) {
    let s23 = r32.getHours() >= 12;
    return s23 && e30 < 12 ? r32.setHours(e30 + 12, 0, 0, 0) : !s23 && e30 === 12 ? r32.setHours(0, 0, 0, 0) : r32.setHours(e30, 0, 0, 0), r32;
  }
  incompatibleTokens = ["H", "K", "k", "t", "T"];
};
var K18 = class extends i15 {
  priority = 70;
  parse(r32, t8, e30) {
    switch (t8) {
      case "H":
        return u49(c57.hour23h, r32);
      case "Ho":
        return e30.ordinalNumber(r32, { unit: "hour" });
      default:
        return n17(t8.length, r32);
    }
  }
  validate(r32, t8) {
    return t8 >= 0 && t8 <= 23;
  }
  set(r32, t8, e30) {
    return r32.setHours(e30, 0, 0, 0), r32;
  }
  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
};
var $8 = class extends i15 {
  priority = 70;
  parse(r32, t8, e30) {
    switch (t8) {
      case "K":
        return u49(c57.hour11h, r32);
      case "Ko":
        return e30.ordinalNumber(r32, { unit: "hour" });
      default:
        return n17(t8.length, r32);
    }
  }
  validate(r32, t8) {
    return t8 >= 0 && t8 <= 11;
  }
  set(r32, t8, e30) {
    return r32.getHours() >= 12 && e30 < 12 ? r32.setHours(e30 + 12, 0, 0, 0) : r32.setHours(e30, 0, 0, 0), r32;
  }
  incompatibleTokens = ["h", "H", "k", "t", "T"];
};
var j32 = class extends i15 {
  priority = 70;
  parse(r32, t8, e30) {
    switch (t8) {
      case "k":
        return u49(c57.hour24h, r32);
      case "ko":
        return e30.ordinalNumber(r32, { unit: "hour" });
      default:
        return n17(t8.length, r32);
    }
  }
  validate(r32, t8) {
    return t8 >= 1 && t8 <= 24;
  }
  set(r32, t8, e30) {
    let s23 = e30 <= 24 ? e30 % 24 : e30;
    return r32.setHours(s23, 0, 0, 0), r32;
  }
  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
};
var U2 = class extends i15 {
  priority = 60;
  parse(r32, t8, e30) {
    switch (t8) {
      case "m":
        return u49(c57.minute, r32);
      case "mo":
        return e30.ordinalNumber(r32, { unit: "minute" });
      default:
        return n17(t8.length, r32);
    }
  }
  validate(r32, t8) {
    return t8 >= 0 && t8 <= 59;
  }
  set(r32, t8, e30) {
    return r32.setMinutes(e30, 0, 0), r32;
  }
  incompatibleTokens = ["t", "T"];
};
var J14 = class extends i15 {
  priority = 50;
  parse(r32, t8, e30) {
    switch (t8) {
      case "s":
        return u49(c57.second, r32);
      case "so":
        return e30.ordinalNumber(r32, { unit: "second" });
      default:
        return n17(t8.length, r32);
    }
  }
  validate(r32, t8) {
    return t8 >= 0 && t8 <= 59;
  }
  set(r32, t8, e30) {
    return r32.setSeconds(e30, 0), r32;
  }
  incompatibleTokens = ["t", "T"];
};
var S70 = class extends i15 {
  priority = 30;
  parse(r32, t8) {
    let e30 = (s23) => Math.trunc(s23 * Math.pow(10, -t8.length + 3));
    return p59(n17(t8.length, r32), e30);
  }
  set(r32, t8, e30) {
    return r32.setMilliseconds(e30), r32;
  }
  incompatibleTokens = ["t", "T"];
};
var rr = class extends i15 {
  priority = 10;
  parse(r32, t8) {
    switch (t8) {
      case "X":
        return w70(d42.basicOptionalMinutes, r32);
      case "XX":
        return w70(d42.basic, r32);
      case "XXXX":
        return w70(d42.basicOptionalSeconds, r32);
      case "XXXXX":
        return w70(d42.extendedOptionalSeconds, r32);
      default:
        return w70(d42.extended, r32);
    }
  }
  set(r32, t8, e30) {
    return t8.timestampIsSet ? r32 : t3(r32, r32.getTime() - l44(r32) - e30);
  }
  incompatibleTokens = ["t", "T", "x"];
};
var er = class extends i15 {
  priority = 10;
  parse(r32, t8) {
    switch (t8) {
      case "x":
        return w70(d42.basicOptionalMinutes, r32);
      case "xx":
        return w70(d42.basic, r32);
      case "xxxx":
        return w70(d42.basicOptionalSeconds, r32);
      case "xxxxx":
        return w70(d42.extendedOptionalSeconds, r32);
      default:
        return w70(d42.extended, r32);
    }
  }
  set(r32, t8, e30) {
    return t8.timestampIsSet ? r32 : t3(r32, r32.getTime() - l44(r32) - e30);
  }
  incompatibleTokens = ["t", "T", "X"];
};
var tr = class extends i15 {
  priority = 40;
  parse(r32) {
    return N65(r32);
  }
  set(r32, t8, e30) {
    return [t3(r32, e30 * 1e3), { timestampIsSet: true }];
  }
  incompatibleTokens = "*";
};
var or = class extends i15 {
  priority = 20;
  parse(r32) {
    return N65(r32);
  }
  set(r32, t8, e30) {
    return [t3(r32, e30), { timestampIsSet: true }];
  }
  incompatibleTokens = "*";
};
var dr = { G: new k67(), y: new M75(), Y: new E67(), R: new q29(), u: new H58(), Q: new I20(), q: new O23(), M: new L71(), L: new v66(), w: new Q25(), I: new R41(), d: new C61(), D: new W60(), E: new F76(), e: new B11(), c: new G13(), i: new X73(), a: new z71(), b: new A33(), B: new V73(), h: new Z(), H: new K18(), K: new $8(), k: new j32(), m: new U2(), s: new J14(), S: new S70(), X: new rr(), x: new er(), t: new tr(), T: new or() };

// http-url:https://esm.sh/date-fns@4.4.0/es2022/isSameMonth.mjs
function l51(r32, a33, o36) {
  let [e30, t8] = m8(o36?.in, r32, a33);
  return e30.getFullYear() === t8.getFullYear() && e30.getMonth() === t8.getMonth();
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/isSameYear.mjs
function i16(e30, r32, t8) {
  let [a33, l53] = m8(t8?.in, e30, r32);
  return a33.getFullYear() === l53.getFullYear();
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/setMonth.mjs
function M77(n19, e30, r32) {
  let t8 = e3(n19, r32?.in), s23 = t8.getFullYear(), a33 = t8.getDate(), o36 = t3(r32?.in || n19, 0);
  o36.setFullYear(s23, e30, 15), o36.setHours(0, 0, 0, 0);
  let c60 = u47(o36);
  return t8.setMonth(e30, Math.min(a33, c60)), t8;
}

// http-url:https://esm.sh/date-fns@4.4.0/es2022/setYear.mjs
function i18(t8, o36, e30) {
  let r32 = e3(t8, e30?.in);
  return isNaN(+r32) ? t3(e30?.in || t8, NaN) : (r32.setFullYear(o36), r32);
}

// http-url:https://esm.sh/react-day-picker@10.0.1/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/react-day-picker.mjs
import ir from "react";
import me from "react";
import dr2 from "react";
import Te from "react";
import pe from "react";
import { createContext as mr, useContext as pr } from "react";
import yr from "react";
import kr from "react";
import Mr from "react";
import xr from "react";
import gr from "react";
import wr from "react";
import Cr from "react";
import he, { useCallback as yt } from "react";
import Ir from "react";
import Br from "react";
import _r from "react";
import Pr from "react";
import Rr from "react";
import Gr from "react";
import Kr from "react";
import Dt from "react";
import zr from "react";
import Zr from "react";
import Jr from "react";
import Xr from "react";
import I21, { useCallback as Q26, useMemo as st, useRef as vn } from "react";
import { useLayoutEffect as mn, useRef as Xe } from "react";
import { useEffect as kn, useMemo as bn } from "react";
import { useState as Dn } from "react";
import { useState as Kt } from "react";
var Co = Object.defineProperty;
var _e = (e30, t8) => {
  for (var r32 in t8) Co(e30, r32, { get: t8[r32], enumerable: true });
};
function mt(e30, t8) {
  let r32 = t8.startOfMonth(e30), o36 = r32.getDay() > 0 ? r32.getDay() : 7, n19 = t8.addDays(e30, -o36 + 1), f75 = t8.addDays(n19, 34);
  return t8.getMonth(e30) === t8.getMonth(f75) ? 5 : 4;
}
function be(e30, t8) {
  let r32 = t8.startOfMonth(e30), o36 = r32.getDay();
  return o36 === 1 ? r32 : o36 === 0 ? t8.addDays(r32, -6) : t8.addDays(r32, -1 * (o36 - 1));
}
function pt(e30, t8) {
  let r32 = be(e30, t8), o36 = mt(e30, t8);
  return t8.addDays(r32, o36 * 7 - 1);
}
var ue = { ...s13, labels: { labelDayButton: (e30, t8, r32, o36) => {
  let n19;
  o36 && typeof o36.format == "function" ? n19 = o36.format.bind(o36) : n19 = (a33, s23) => X72(a33, s23, { locale: s13, ...r32 });
  let f75 = n19(e30, "PPPP");
  return t8.today && (f75 = `Today, ${f75}`), t8.selected && (f75 = `${f75}, selected`), f75;
}, labelMonthDropdown: "Choose the Month", labelNext: "Go to the Next Month", labelPrevious: "Go to the Previous Month", labelWeekNumber: (e30) => `Week ${e30}`, labelYearDropdown: "Choose the Year", labelGrid: (e30, t8, r32) => {
  let o36;
  return r32 && typeof r32.format == "function" ? o36 = r32.format.bind(r32) : o36 = (n19, f75) => X72(n19, f75, { locale: s13, ...t8 }), o36(e30, "LLLL yyyy");
}, labelGridcell: (e30, t8, r32, o36) => {
  let n19;
  o36 && typeof o36.format == "function" ? n19 = o36.format.bind(o36) : n19 = (a33, s23) => X72(a33, s23, { locale: s13, ...r32 });
  let f75 = n19(e30, "PPPP");
  return t8?.today && (f75 = `Today, ${f75}`), f75;
}, labelNav: "Navigation bar", labelWeekNumberHeader: "Week Number", labelWeekday: (e30, t8, r32) => {
  let o36;
  return r32 && typeof r32.format == "function" ? o36 = r32.format.bind(r32) : o36 = (n19, f75) => X72(n19, f75, { locale: s13, ...t8 }), o36(e30, "cccc");
} } };
var _14 = class e29 {
  constructor(t8, r32) {
    this.today = () => {
      if (this.overrides?.today) return this.overrides.today();
      if (this.options.timeZone) return r.tz(this.options.timeZone);
      let o36 = this.options.Date ?? Date;
      return new o36();
    }, this.newDate = (o36, n19, f75) => this.overrides?.newDate ? this.overrides.newDate(o36, n19, f75) : this.options.timeZone ? new r(o36, n19, f75, this.options.timeZone) : new Date(o36, n19, f75), this.addDays = (o36, n19) => this.overrides?.addDays ? this.overrides.addDays(o36, n19) : f66(o36, n19), this.addMonths = (o36, n19) => this.overrides?.addMonths ? this.overrides.addMonths(o36, n19) : c53(o36, n19), this.addWeeks = (o36, n19) => this.overrides?.addWeeks ? this.overrides.addWeeks(o36, n19) : o29(o36, n19), this.addYears = (o36, n19) => this.overrides?.addYears ? this.overrides.addYears(o36, n19) : e22(o36, n19), this.differenceInCalendarDays = (o36, n19) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(o36, n19) : D63(o36, n19), this.differenceInCalendarMonths = (o36, n19) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(o36, n19) : i11(o36, n19), this.eachMonthOfInterval = (o36) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(o36) : m68(o36), this.eachYearOfInterval = (o36) => {
      let n19 = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(o36) : f71(o36), f75 = new Set(n19.map((s23) => this.getYear(s23)));
      if (f75.size === n19.length) return n19;
      let a33 = [];
      return f75.forEach((s23) => {
        a33.push(new Date(s23, 0, 1));
      }), a33;
    }, this.endOfBroadcastWeek = (o36) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(o36) : pt(o36, this), this.endOfISOWeek = (o36) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(o36) : n13(o36), this.endOfMonth = (o36) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(o36) : u44(o36), this.endOfWeek = (o36, n19) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(o36, n19) : O21(o36, this.options), this.endOfYear = (o36) => this.overrides?.endOfYear ? this.overrides.endOfYear(o36) : n12(o36), this.format = (o36, n19, f75) => {
      let a33 = this.overrides?.format ? this.overrides.format(o36, n19, this.options) : X72(o36, n19, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(a33) : a33;
    }, this.getISOWeek = (o36) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(o36) : a26(o36), this.getMonth = (o36, n19) => this.overrides?.getMonth ? this.overrides.getMonth(o36, this.options) : n16(o36, this.options), this.getYear = (o36, n19) => this.overrides?.getYear ? this.overrides.getYear(o36, this.options) : o33(o36, this.options), this.getWeek = (o36, n19) => this.overrides?.getWeek ? this.overrides.getWeek(o36, this.options) : n15(o36, this.options), this.isAfter = (o36, n19) => this.overrides?.isAfter ? this.overrides.isAfter(o36, n19) : o34(o36, n19), this.isBefore = (o36, n19) => this.overrides?.isBefore ? this.overrides.isBefore(o36, n19) : r27(o36, n19), this.isDate = (o36) => this.overrides?.isDate ? this.overrides.isDate(o36) : e23(o36), this.isSameDay = (o36, n19) => this.overrides?.isSameDay ? this.overrides.isSameDay(o36, n19) : m64(o36, n19), this.isSameMonth = (o36, n19) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(o36, n19) : l51(o36, n19), this.isSameYear = (o36, n19) => this.overrides?.isSameYear ? this.overrides.isSameYear(o36, n19) : i16(o36, n19), this.max = (o36) => this.overrides?.max ? this.overrides.max(o36) : l45(o36), this.min = (o36) => this.overrides?.min ? this.overrides.min(o36) : l46(o36), this.setMonth = (o36, n19) => this.overrides?.setMonth ? this.overrides.setMonth(o36, n19) : M77(o36, n19), this.setYear = (o36, n19) => this.overrides?.setYear ? this.overrides.setYear(o36, n19) : i18(o36, n19), this.startOfBroadcastWeek = (o36, n19) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(o36, this) : be(o36, this), this.startOfDay = (o36) => this.overrides?.startOfDay ? this.overrides.startOfDay(o36) : a22(o36), this.startOfISOWeek = (o36) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(o36) : f67(o36), this.startOfMonth = (o36) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(o36) : n11(o36), this.startOfWeek = (o36, n19) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(o36, this.options) : O3(o36, this.options), this.startOfYear = (o36) => this.overrides?.startOfYear ? this.overrides.startOfYear(o36) : a25(o36), this.options = { locale: ue, ...t8 }, this.overrides = r32;
  }
  getDigitMap() {
    let { numerals: t8 = "latn" } = this.options, r32 = new Intl.NumberFormat("en-US", { numberingSystem: t8 }), o36 = {};
    for (let n19 = 0; n19 < 10; n19++) o36[n19.toString()] = r32.format(n19);
    return o36;
  }
  replaceDigits(t8) {
    let r32 = this.getDigitMap();
    return t8.replace(/\d/g, (o36) => r32[o36] || o36);
  }
  formatNumber(t8) {
    return this.replaceDigits(t8.toString());
  }
  getMonthYearOrder() {
    let t8 = this.options.locale?.code;
    return t8 && e29.yearFirstLocales.has(t8) ? "year-first" : "month-first";
  }
  formatMonthYear(t8) {
    let { locale: r32, timeZone: o36, numerals: n19 } = this.options, f75 = r32?.code;
    if (f75 && e29.yearFirstLocales.has(f75)) try {
      return new Intl.DateTimeFormat(f75, { month: "long", year: "numeric", timeZone: o36, numberingSystem: n19 }).format(t8);
    } catch {
    }
    let a33 = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t8, a33);
  }
};
_14.yearFirstLocales = /* @__PURE__ */ new Set(["eu", "hu", "ja", "ja-Hira", "ja-JP", "ko", "ko-KR", "lt", "lt-LT", "lv", "lv-LV", "mn", "mn-MN", "zh", "zh-CN", "zh-HK", "zh-TW"]);
var T43 = new _14();
var se = class {
  constructor(t8, r32, o36 = T43) {
    this.date = t8, this.displayMonth = r32, this.outside = !!(r32 && !o36.isSameMonth(t8, r32)), this.dateLib = o36, this.isoDate = o36.format(t8, "yyyy-MM-dd"), this.displayMonthId = o36.format(r32, "yyyy-MM"), this.dateMonthId = o36.format(t8, "yyyy-MM");
  }
  isEqualTo(t8) {
    return this.dateLib.isSameDay(t8.date, this.date) && this.dateLib.isSameMonth(t8.displayMonth, this.displayMonth);
  }
};
var ve = class {
  constructor(t8, r32) {
    this.date = t8, this.weeks = r32;
  }
};
var xe = class {
  constructor(t8, r32) {
    this.days = r32, this.weekNumber = t8;
  }
};
var Ae = {};
_e(Ae, { CaptionLabel: () => fr, Chevron: () => lr, Day: () => cr, DayButton: () => ur, Dropdown: () => hr, DropdownNav: () => Dr, Footer: () => br, Month: () => vr, MonthCaption: () => Or2, MonthGrid: () => Wr, Months: () => Nr, MonthsDropdown: () => Sr, Nav: () => Er, NextMonthButton: () => Yr, Option: () => Fr, PreviousMonthButton: () => Tr, Root: () => Ar, Select: () => Hr, Week: () => qr, WeekNumber: () => Vr, WeekNumberHeader: () => Lr2, Weekday: () => jr, Weekdays: () => $r, Weeks: () => Qr, YearsDropdown: () => Ur });
function fr(e30) {
  return ir.createElement("span", { ...e30 });
}
function lr(e30) {
  let { size: t8 = 24, orientation: r32 = "left", className: o36, style: n19 } = e30;
  return me.createElement("svg", { className: o36, style: n19, width: t8, height: t8, viewBox: "0 0 24 24" }, r32 === "up" && me.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }), r32 === "down" && me.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }), r32 === "left" && me.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }), r32 === "right" && me.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" }));
}
function cr(e30) {
  let { day: t8, modifiers: r32, ...o36 } = e30;
  return dr2.createElement("td", { ...o36 });
}
function ur(e30) {
  let { day: t8, modifiers: r32, ...o36 } = e30, n19 = Te.useRef(null);
  return Te.useEffect(() => {
    r32.focused && n19.current?.focus();
  }, [r32.focused]), Te.createElement("button", { ref: n19, ...o36 });
}
var c59;
(function(e30) {
  e30.Root = "root", e30.Chevron = "chevron", e30.Day = "day", e30.DayButton = "day_button", e30.CaptionLabel = "caption_label", e30.Dropdowns = "dropdowns", e30.Dropdown = "dropdown", e30.DropdownRoot = "dropdown_root", e30.Footer = "footer", e30.MonthGrid = "month_grid", e30.MonthCaption = "month_caption", e30.MonthsDropdown = "months_dropdown", e30.Month = "month", e30.Months = "months", e30.Nav = "nav", e30.NextMonthButton = "button_next", e30.PreviousMonthButton = "button_previous", e30.Week = "week", e30.Weeks = "weeks", e30.Weekday = "weekday", e30.Weekdays = "weekdays", e30.WeekNumber = "week_number", e30.WeekNumberHeader = "week_number_header", e30.YearsDropdown = "years_dropdown";
})(c59 || (c59 = {}));
var E68;
(function(e30) {
  e30.disabled = "disabled", e30.hidden = "hidden", e30.outside = "outside", e30.focused = "focused", e30.today = "today";
})(E68 || (E68 = {}));
var H59;
(function(e30) {
  e30.range_end = "range_end", e30.range_middle = "range_middle", e30.range_start = "range_start", e30.selected = "selected";
})(H59 || (H59 = {}));
var A34;
(function(e30) {
  e30.weeks_before_enter = "weeks_before_enter", e30.weeks_before_exit = "weeks_before_exit", e30.weeks_after_enter = "weeks_after_enter", e30.weeks_after_exit = "weeks_after_exit", e30.caption_after_enter = "caption_after_enter", e30.caption_after_exit = "caption_after_exit", e30.caption_before_enter = "caption_before_enter", e30.caption_before_exit = "caption_before_exit";
})(A34 || (A34 = {}));
var Pe = mr(void 0);
function ee() {
  let e30 = pr(Pe);
  if (e30 === void 0) throw new Error("useDayPicker() must be used within a custom component.");
  return e30;
}
function hr(e30) {
  let { options: t8, className: r32, ...o36 } = e30, { classNames: n19, components: f75, styles: a33 } = ee(), s23 = [n19[c59.Dropdown], r32].join(" "), i19 = t8?.find(({ value: l53 }) => l53 === o36.value);
  return pe.createElement("span", { "data-disabled": o36.disabled, className: n19[c59.DropdownRoot], style: a33?.[c59.DropdownRoot] }, pe.createElement(f75.Select, { className: s23, ...o36 }, t8?.map(({ value: l53, label: u50, disabled: d43 }) => pe.createElement(f75.Option, { key: l53, value: l53, disabled: d43 }, u50))), pe.createElement("span", { className: n19[c59.CaptionLabel], style: a33?.[c59.CaptionLabel], "aria-hidden": true }, i19?.label, pe.createElement(f75.Chevron, { orientation: "down", size: 18, className: n19[c59.Chevron], style: a33?.[c59.Chevron] })));
}
function Dr(e30) {
  return yr.createElement("div", { ...e30 });
}
function br(e30) {
  return kr.createElement("div", { ...e30 });
}
function vr(e30) {
  let { calendarMonth: t8, displayIndex: r32, ...o36 } = e30;
  return Mr.createElement("div", { ...o36 }, e30.children);
}
function Or2(e30) {
  let { calendarMonth: t8, displayIndex: r32, ...o36 } = e30;
  return xr.createElement("div", { ...o36 });
}
function Wr(e30) {
  return gr.createElement("table", { ...e30 });
}
function Nr(e30) {
  return wr.createElement("div", { ...e30 });
}
function Sr(e30) {
  let { components: t8 } = ee();
  return Cr.createElement(t8.Dropdown, { ...e30 });
}
function Er(e30) {
  let { onPreviousClick: t8, onNextClick: r32, previousMonth: o36, nextMonth: n19, ...f75 } = e30, { components: a33, classNames: s23, styles: i19, labels: { labelPrevious: l53, labelNext: u50 } } = ee(), d43 = yt((y75) => {
    n19 && r32?.(y75);
  }, [n19, r32]), h48 = yt((y75) => {
    o36 && t8?.(y75);
  }, [o36, t8]);
  return he.createElement("nav", { ...f75 }, he.createElement(a33.PreviousMonthButton, { type: "button", className: s23[c59.PreviousMonthButton], style: i19?.[c59.PreviousMonthButton], tabIndex: o36 ? void 0 : -1, "aria-disabled": o36 ? void 0 : true, "aria-label": l53(o36), onClick: h48 }, he.createElement(a33.Chevron, { disabled: o36 ? void 0 : true, className: s23[c59.Chevron], style: i19?.[c59.Chevron], orientation: "left" })), he.createElement(a33.NextMonthButton, { type: "button", className: s23[c59.NextMonthButton], style: i19?.[c59.NextMonthButton], tabIndex: n19 ? void 0 : -1, "aria-disabled": n19 ? void 0 : true, "aria-label": u50(n19), onClick: d43 }, he.createElement(a33.Chevron, { disabled: n19 ? void 0 : true, orientation: "right", className: s23[c59.Chevron], style: i19?.[c59.Chevron] })));
}
function Yr(e30) {
  return Ir.createElement("button", { ...e30 });
}
function Fr(e30) {
  return Br.createElement("option", { ...e30 });
}
function Tr(e30) {
  return _r.createElement("button", { ...e30 });
}
function Ar(e30) {
  let { rootRef: t8, ...r32 } = e30;
  return Pr.createElement("div", { ...r32, ref: t8 });
}
function Hr(e30) {
  return Rr.createElement("select", { ...e30 });
}
function qr(e30) {
  let { week: t8, ...r32 } = e30;
  return Gr.createElement("tr", { ...r32 });
}
function jr(e30) {
  return Kr.createElement("th", { ...e30 });
}
function $r(e30) {
  return Dt.createElement("thead", { "aria-hidden": true }, Dt.createElement("tr", { ...e30 }));
}
function Vr(e30) {
  let { week: t8, ...r32 } = e30;
  return zr.createElement("th", { ...r32 });
}
function Lr2(e30) {
  return Zr.createElement("th", { ...e30 });
}
function Qr(e30) {
  return Jr.createElement("tbody", { ...e30 });
}
function Ur(e30) {
  let { components: t8 } = ee();
  return Xr.createElement(t8.Dropdown, { ...e30 });
}
function G14(e30, t8, r32 = false, o36 = T43) {
  let { from: n19, to: f75 } = e30, { differenceInCalendarDays: a33, isSameDay: s23 } = o36;
  return n19 && f75 ? (a33(f75, n19) < 0 && ([n19, f75] = [f75, n19]), a33(t8, n19) >= (r32 ? 1 : 0) && a33(f75, t8) >= (r32 ? 1 : 0)) : !r32 && f75 ? s23(f75, t8) : !r32 && n19 ? s23(n19, t8) : false;
}
function ae(e30) {
  return !!(e30 && typeof e30 == "object" && "before" in e30 && "after" in e30);
}
function te2(e30) {
  return !!(e30 && typeof e30 == "object" && "from" in e30);
}
function ie(e30) {
  return !!(e30 && typeof e30 == "object" && "after" in e30);
}
function fe(e30) {
  return !!(e30 && typeof e30 == "object" && "before" in e30);
}
function Oe(e30) {
  return !!(e30 && typeof e30 == "object" && "dayOfWeek" in e30);
}
function ge(e30, t8) {
  return Array.isArray(e30) && e30.every(t8.isDate);
}
function K19(e30, t8, r32 = T43) {
  let o36 = Array.isArray(t8) ? t8 : [t8], { isSameDay: n19, differenceInCalendarDays: f75, isAfter: a33 } = r32;
  return o36.some((s23) => {
    if (typeof s23 == "boolean") return s23;
    if (r32.isDate(s23)) return n19(e30, s23);
    if (ge(s23, r32)) return s23.some((i19) => n19(e30, i19));
    if (te2(s23)) return G14(s23, e30, false, r32);
    if (Oe(s23)) return Array.isArray(s23.dayOfWeek) ? s23.dayOfWeek.includes(e30.getDay()) : s23.dayOfWeek === e30.getDay();
    if (ae(s23)) {
      let i19 = f75(s23.before, e30), l53 = f75(s23.after, e30), u50 = i19 > 0, d43 = l53 < 0;
      return a33(s23.before, s23.after) ? d43 && u50 : u50 || d43;
    }
    return ie(s23) ? f75(e30, s23.after) > 0 : fe(s23) ? f75(s23.before, e30) > 0 : typeof s23 == "function" ? s23(e30) : false;
  });
}
function kt(e30, t8, r32, o36, n19) {
  let { disabled: f75, hidden: a33, modifiers: s23, showOutsideDays: i19, broadcastCalendar: l53, today: u50 = n19.today() } = t8, { isSameDay: d43, isSameMonth: h48, startOfMonth: y75, isBefore: W61, endOfMonth: C62, isAfter: O24 } = n19, Y26 = r32 && y75(r32), v67 = o36 && C62(o36), k68 = { [E68.focused]: [], [E68.outside]: [], [E68.disabled]: [], [E68.hidden]: [], [E68.today]: [] }, p60 = {};
  for (let M78 of e30) {
    let { date: m72, displayMonth: g65 } = M78, S71 = !!(g65 && !h48(m72, g65)), P76 = !!(Y26 && W61(m72, Y26)), F77 = !!(v67 && O24(m72, v67)), j33 = !!(f75 && K19(m72, f75, n19)), $9 = !!(a33 && K19(m72, a33, n19)) || P76 || F77 || !l53 && !i19 && S71 || l53 && i19 === false && S71, X74 = d43(m72, u50);
    S71 && k68.outside.push(M78), j33 && k68.disabled.push(M78), $9 && k68.hidden.push(M78), X74 && k68.today.push(M78), s23 && Object.keys(s23).forEach((q30) => {
      let ne = s23?.[q30];
      ne && K19(m72, ne, n19) && (p60[q30] ? p60[q30].push(M78) : p60[q30] = [M78]);
    });
  }
  return (M78) => {
    let m72 = { [E68.focused]: false, [E68.disabled]: false, [E68.hidden]: false, [E68.outside]: false, [E68.today]: false }, g65 = {};
    for (let S71 in k68) {
      let P76 = k68[S71];
      m72[S71] = P76.some((F77) => F77 === M78);
    }
    for (let S71 in p60) g65[S71] = p60[S71].some((P76) => P76 === M78);
    return { ...m72, ...g65 };
  };
}
function bt(e30, t8, r32 = {}) {
  return Object.entries(e30).filter(([, n19]) => n19 === true).reduce((n19, [f75]) => (r32[f75] ? n19.push(r32[f75]) : t8[E68[f75]] ? n19.push(t8[E68[f75]]) : t8[H59[f75]] && n19.push(t8[H59[f75]]), n19), [t8[c59.Day]]);
}
function Mt(e30) {
  return { ...Ae, ...e30 };
}
function vt(e30) {
  let t8 = { "data-mode": e30.mode ?? void 0, "data-required": "required" in e30 ? e30.required : void 0, "data-multiple-months": e30.numberOfMonths && e30.numberOfMonths > 1 || void 0, "data-week-numbers": e30.showWeekNumber || void 0, "data-broadcast-calendar": e30.broadcastCalendar || void 0, "data-nav-layout": e30.navLayout || void 0 };
  return Object.entries(e30).forEach(([r32, o36]) => {
    r32.startsWith("data-") && (t8[r32] = o36);
  }), t8;
}
function xt() {
  let e30 = {};
  for (let t8 in c59) e30[c59[t8]] = `rdp-${c59[t8]}`;
  for (let t8 in E68) e30[E68[t8]] = `rdp-${E68[t8]}`;
  for (let t8 in H59) e30[H59[t8]] = `rdp-${H59[t8]}`;
  for (let t8 in A34) e30[A34[t8]] = `rdp-${A34[t8]}`;
  return e30;
}
var Re = {};
_e(Re, { formatCaption: () => en, formatDay: () => tn, formatMonthDropdown: () => on, formatWeekNumber: () => nn, formatWeekNumberHeader: () => sn, formatWeekdayName: () => rn, formatYearDropdown: () => an });
function en(e30, t8, r32) {
  return (r32 ?? new _14(t8)).formatMonthYear(e30);
}
function tn(e30, t8, r32) {
  return (r32 ?? new _14(t8)).format(e30, "d");
}
function on(e30, t8 = T43) {
  return t8.format(e30, "LLLL");
}
function rn(e30, t8, r32) {
  return (r32 ?? new _14(t8)).format(e30, "cccccc");
}
function nn(e30, t8 = T43) {
  return e30 < 10 ? t8.formatNumber(`0${e30.toLocaleString()}`) : t8.formatNumber(`${e30.toLocaleString()}`);
}
function sn() {
  return "";
}
function an(e30, t8 = T43) {
  return t8.format(e30, "yyyy");
}
function Ot(e30) {
  return { ...Re, ...e30 };
}
var Qe = {};
_e(Qe, { labelDayButton: () => He, labelGrid: () => Ge, labelGridcell: () => qe, labelMonthDropdown: () => Ke, labelNav: () => je, labelNext: () => $e, labelPrevious: () => ze, labelWeekNumber: () => Ze, labelWeekNumberHeader: () => Le, labelWeekday: () => Ve, labelYearDropdown: () => Je });
function He(e30, t8, r32, o36) {
  let n19 = (o36 ?? new _14(r32)).format(e30, "PPPP");
  return t8.today && (n19 = `Today, ${n19}`), t8.selected && (n19 = `${n19}, selected`), n19;
}
function Ge(e30, t8, r32) {
  return (r32 ?? new _14(t8)).formatMonthYear(e30);
}
function qe(e30, t8, r32, o36) {
  let n19 = (o36 ?? new _14(r32)).format(e30, "PPPP");
  return t8?.today && (n19 = `Today, ${n19}`), n19;
}
function Ke(e30) {
  return "Choose the Month";
}
function je() {
  return "";
}
var fn = "Go to the Next Month";
function $e(e30, t8) {
  return fn;
}
function ze(e30) {
  return "Go to the Previous Month";
}
function Ve(e30, t8, r32) {
  return (r32 ?? new _14(t8)).format(e30, "cccc");
}
function Ze(e30, t8) {
  return `Week ${e30}`;
}
function Le(e30) {
  return "Week Number";
}
function Je(e30) {
  return "Choose the Year";
}
var Z2 = (e30, t8, r32) => t8 || (r32 ? typeof r32 == "function" ? r32 : (...o36) => r32 : e30);
function gt(e30, t8) {
  let r32 = t8.locale?.labels ?? {};
  return { ...Qe, ...e30 ?? {}, labelDayButton: Z2(He, e30?.labelDayButton, r32.labelDayButton), labelMonthDropdown: Z2(Ke, e30?.labelMonthDropdown, r32.labelMonthDropdown), labelNext: Z2($e, e30?.labelNext, r32.labelNext), labelPrevious: Z2(ze, e30?.labelPrevious, r32.labelPrevious), labelWeekNumber: Z2(Ze, e30?.labelWeekNumber, r32.labelWeekNumber), labelYearDropdown: Z2(Je, e30?.labelYearDropdown, r32.labelYearDropdown), labelGrid: Z2(Ge, e30?.labelGrid, r32.labelGrid), labelGridcell: Z2(qe, e30?.labelGridcell, r32.labelGridcell), labelNav: Z2(je, e30?.labelNav, r32.labelNav), labelWeekNumberHeader: Z2(Le, e30?.labelWeekNumberHeader, r32.labelWeekNumberHeader), labelWeekday: Z2(Ve, e30?.labelWeekday, r32.labelWeekday) };
}
function Wt(e30, t8, r32, o36, n19) {
  let { startOfMonth: f75, startOfYear: a33, endOfYear: s23, eachMonthOfInterval: i19, getMonth: l53 } = n19;
  return i19({ start: a33(e30), end: s23(e30) }).map((h48) => {
    let y75 = o36.formatMonthDropdown(h48, n19), W61 = l53(h48), C62 = t8 && h48 < f75(t8) || r32 && h48 > f75(r32) || false;
    return { value: W61, label: y75, disabled: C62 };
  });
}
function wt(e30, t8 = {}, r32 = {}) {
  let o36 = { ...t8?.[c59.Day] };
  return Object.entries(e30).filter(([, n19]) => n19 === true).forEach(([n19]) => {
    o36 = { ...o36, ...r32?.[n19] };
  }), o36;
}
function Nt(e30, t8, r32, o36) {
  let n19 = o36 ?? e30.today(), f75 = r32 ? e30.startOfBroadcastWeek(n19, e30) : t8 ? e30.startOfISOWeek(n19) : e30.startOfWeek(n19), a33 = [];
  for (let s23 = 0; s23 < 7; s23++) {
    let i19 = e30.addDays(f75, s23);
    a33.push(i19);
  }
  return a33;
}
function Ct(e30, t8, r32, o36, n19 = false) {
  if (!e30 || !t8) return;
  let { startOfYear: f75, endOfYear: a33, eachYearOfInterval: s23, getYear: i19 } = o36, l53 = f75(e30), u50 = a33(t8), d43 = s23({ start: l53, end: u50 });
  return n19 && d43.reverse(), d43.map((h48) => {
    let y75 = r32.formatYearDropdown(h48, o36);
    return { value: i19(h48), label: y75, disabled: false };
  });
}
function St(e30, t8 = {}) {
  let { weekStartsOn: r32, locale: o36 } = t8, n19 = r32 ?? o36?.options?.weekStartsOn ?? 0, f75 = (s23) => {
    let i19 = typeof s23 == "number" || typeof s23 == "string" ? new Date(s23) : s23;
    return new r(i19.getFullYear(), i19.getMonth(), i19.getDate(), 12, 0, 0, e30);
  }, a33 = (s23) => {
    let i19 = f75(s23);
    return new Date(i19.getFullYear(), i19.getMonth(), i19.getDate(), 0, 0, 0, 0);
  };
  return { today: () => f75(r.tz(e30)), newDate: (s23, i19, l53) => new r(s23, i19, l53, 12, 0, 0, e30), startOfDay: (s23) => f75(s23), startOfWeek: (s23, i19) => {
    let l53 = f75(s23), u50 = i19?.weekStartsOn ?? n19, d43 = (l53.getDay() - u50 + 7) % 7;
    return l53.setDate(l53.getDate() - d43), l53;
  }, startOfISOWeek: (s23) => {
    let i19 = f75(s23), l53 = (i19.getDay() - 1 + 7) % 7;
    return i19.setDate(i19.getDate() - l53), i19;
  }, startOfMonth: (s23) => {
    let i19 = f75(s23);
    return i19.setDate(1), i19;
  }, startOfYear: (s23) => {
    let i19 = f75(s23);
    return i19.setMonth(0, 1), i19;
  }, endOfWeek: (s23, i19) => {
    let l53 = f75(s23), h48 = (((i19?.weekStartsOn ?? n19) + 6) % 7 - l53.getDay() + 7) % 7;
    return l53.setDate(l53.getDate() + h48), l53;
  }, endOfISOWeek: (s23) => {
    let i19 = f75(s23), l53 = (7 - i19.getDay()) % 7;
    return i19.setDate(i19.getDate() + l53), i19;
  }, endOfMonth: (s23) => {
    let i19 = f75(s23);
    return i19.setMonth(i19.getMonth() + 1, 0), i19;
  }, endOfYear: (s23) => {
    let i19 = f75(s23);
    return i19.setMonth(11, 31), i19;
  }, eachMonthOfInterval: (s23) => {
    let i19 = f75(s23.start), l53 = f75(s23.end), u50 = [], d43 = new r(i19.getFullYear(), i19.getMonth(), 1, 12, 0, 0, e30), h48 = l53.getFullYear() * 12 + l53.getMonth();
    for (; d43.getFullYear() * 12 + d43.getMonth() <= h48; ) u50.push(new r(d43, e30)), d43.setMonth(d43.getMonth() + 1, 1);
    return u50;
  }, addDays: (s23, i19) => {
    let l53 = f75(s23);
    return l53.setDate(l53.getDate() + i19), l53;
  }, addWeeks: (s23, i19) => {
    let l53 = f75(s23);
    return l53.setDate(l53.getDate() + i19 * 7), l53;
  }, addMonths: (s23, i19) => {
    let l53 = f75(s23);
    return l53.setMonth(l53.getMonth() + i19), l53;
  }, addYears: (s23, i19) => {
    let l53 = f75(s23);
    return l53.setFullYear(l53.getFullYear() + i19), l53;
  }, eachYearOfInterval: (s23) => {
    let i19 = f75(s23.start), l53 = f75(s23.end), u50 = [], d43 = new r(i19.getFullYear(), 0, 1, 12, 0, 0, e30);
    for (; d43.getFullYear() <= l53.getFullYear(); ) u50.push(new r(d43, e30)), d43.setFullYear(d43.getFullYear() + 1, 0, 1);
    return u50;
  }, getWeek: (s23, i19) => {
    let l53 = a33(s23);
    return n15(l53, { weekStartsOn: i19?.weekStartsOn ?? n19, firstWeekContainsDate: i19?.firstWeekContainsDate ?? o36?.options?.firstWeekContainsDate ?? 1 });
  }, getISOWeek: (s23) => {
    let i19 = a33(s23);
    return a26(i19);
  }, differenceInCalendarDays: (s23, i19) => {
    let l53 = a33(s23), u50 = a33(i19);
    return D63(l53, u50);
  }, differenceInCalendarMonths: (s23, i19) => {
    let l53 = a33(s23), u50 = a33(i19);
    return i11(l53, u50);
  } };
}
var ye = (e30) => e30 instanceof HTMLElement ? e30 : null;
var Ue = (e30) => [...e30.querySelectorAll("[data-animated-month]") ?? []];
var pn = (e30) => ye(e30.querySelector("[data-animated-month]"));
var et = (e30) => ye(e30.querySelector("[data-animated-caption]"));
var tt = (e30) => ye(e30.querySelector("[data-animated-weeks]"));
var hn = (e30) => ye(e30.querySelector("[data-animated-nav]"));
var yn = (e30) => ye(e30.querySelector("[data-animated-weekdays]"));
function Et(e30, t8, { classNames: r32, months: o36, focused: n19, dateLib: f75 }) {
  let a33 = Xe(null), s23 = Xe(o36), i19 = Xe(false);
  mn(() => {
    let l53 = s23.current;
    if (s23.current = o36, !t8 || !e30.current || !(e30.current instanceof HTMLElement) || o36.length === 0 || l53.length === 0 || o36.length !== l53.length) return;
    let u50 = f75.isSameMonth(o36[0].date, l53[0].date), d43 = f75.isAfter(o36[0].date, l53[0].date), h48 = d43 ? r32[A34.caption_after_enter] : r32[A34.caption_before_enter], y75 = d43 ? r32[A34.weeks_after_enter] : r32[A34.weeks_before_enter], W61 = a33.current, C62 = e30.current.cloneNode(true);
    if (C62 instanceof HTMLElement ? (Ue(C62).forEach((k68) => {
      if (!(k68 instanceof HTMLElement)) return;
      let p60 = pn(k68);
      p60 && k68.contains(p60) && k68.removeChild(p60);
      let M78 = et(k68);
      M78 && M78.classList.remove(h48);
      let m72 = tt(k68);
      m72 && m72.classList.remove(y75);
    }), a33.current = C62) : a33.current = null, i19.current || u50 || n19) return;
    let O24 = W61 instanceof HTMLElement ? Ue(W61) : [], Y26 = Ue(e30.current);
    if (Y26?.every((v67) => v67 instanceof HTMLElement) && O24?.every((v67) => v67 instanceof HTMLElement)) {
      i19.current = true;
      let v67 = [];
      e30.current.style.isolation = "isolate";
      let k68 = hn(e30.current);
      k68 && (k68.style.zIndex = "1"), Y26.forEach((p60, M78) => {
        let m72 = O24[M78];
        if (!m72) return;
        p60.style.position = "relative", p60.style.overflow = "hidden";
        let g65 = et(p60);
        g65 && g65.classList.add(h48);
        let S71 = tt(p60);
        S71 && S71.classList.add(y75);
        let P76 = () => {
          i19.current = false, e30.current && (e30.current.style.isolation = ""), k68 && (k68.style.zIndex = ""), g65 && g65.classList.remove(h48), S71 && S71.classList.remove(y75), p60.style.position = "", p60.style.overflow = "", p60.contains(m72) && p60.removeChild(m72);
        };
        v67.push(P76), m72.style.pointerEvents = "none", m72.style.position = "absolute", m72.style.overflow = "hidden", m72.setAttribute("aria-hidden", "true");
        let F77 = yn(m72);
        F77 && (F77.style.opacity = "0");
        let j33 = et(m72);
        j33 && (j33.classList.add(d43 ? r32[A34.caption_before_exit] : r32[A34.caption_after_exit]), j33.addEventListener("animationend", P76));
        let $9 = tt(m72);
        $9 && $9.classList.add(d43 ? r32[A34.weeks_before_exit] : r32[A34.weeks_after_exit]), p60.insertBefore(m72, p60.firstChild);
      });
    }
  });
}
function It(e30, t8, r32, o36) {
  let n19 = e30[0], f75 = e30[e30.length - 1], { ISOWeek: a33, fixedWeeks: s23, broadcastCalendar: i19 } = r32 ?? {}, { addDays: l53, differenceInCalendarDays: u50, differenceInCalendarMonths: d43, endOfBroadcastWeek: h48, endOfISOWeek: y75, endOfMonth: W61, endOfWeek: C62, isAfter: O24, startOfBroadcastWeek: Y26, startOfISOWeek: v67, startOfWeek: k68 } = o36, p60 = i19 ? Y26(n19, o36) : a33 ? v67(n19) : k68(n19), M78 = i19 ? h48(f75) : a33 ? y75(W61(f75)) : C62(W61(f75)), m72 = t8 && (i19 ? h48(t8) : a33 ? y75(t8) : C62(t8)), g65 = m72 && O24(M78, m72) ? m72 : M78, S71 = u50(g65, p60), P76 = d43(f75, n19) + 1, F77 = [];
  for (let X74 = 0; X74 <= S71; X74++) {
    let q30 = l53(p60, X74);
    F77.push(q30);
  }
  let $9 = (i19 ? 35 : 42) * P76;
  if (s23 && F77.length < $9) {
    let X74 = $9 - F77.length;
    for (let q30 = 0; q30 < X74; q30++) {
      let ne = l53(F77[F77.length - 1], 1);
      F77.push(ne);
    }
  }
  return F77;
}
function Yt(e30) {
  let t8 = [];
  return e30.reduce((r32, o36) => {
    let n19 = o36.weeks.reduce((f75, a33) => f75.concat(a33.days.slice()), t8.slice());
    return r32.concat(n19.slice());
  }, t8.slice());
}
function Bt(e30, t8, r32, o36) {
  let { numberOfMonths: n19 = 1 } = r32, f75 = [];
  for (let a33 = 0; a33 < n19; a33++) {
    let s23 = o36.addMonths(e30, a33);
    if (t8 && s23 > t8) break;
    f75.push(s23);
  }
  return f75;
}
function ot(e30, t8, r32, o36) {
  let { month: n19, defaultMonth: f75, today: a33 = o36.today(), numberOfMonths: s23 = 1 } = e30, i19 = n19 || f75 || a33, { differenceInCalendarMonths: l53, addMonths: u50, startOfMonth: d43 } = o36;
  if (r32 && l53(r32, i19) < s23 - 1) {
    let h48 = -1 * (s23 - 1);
    i19 = u50(r32, h48);
  }
  return t8 && l53(i19, t8) < 0 && (i19 = t8), d43(i19);
}
function Ft(e30, t8, r32, o36) {
  let { addDays: n19, endOfBroadcastWeek: f75, endOfISOWeek: a33, endOfMonth: s23, endOfWeek: i19, getISOWeek: l53, getWeek: u50, startOfBroadcastWeek: d43, startOfISOWeek: h48, startOfWeek: y75 } = o36, W61 = e30.reduce((C62, O24) => {
    let Y26 = r32.broadcastCalendar ? d43(O24, o36) : r32.ISOWeek ? h48(O24) : y75(O24), v67 = r32.broadcastCalendar ? f75(O24) : r32.ISOWeek ? a33(s23(O24)) : i19(s23(O24)), k68 = t8.filter((g65) => g65 >= Y26 && g65 <= v67), p60 = r32.broadcastCalendar ? 35 : 42;
    if (r32.fixedWeeks && k68.length < p60) {
      let g65 = t8.filter((S71) => {
        let P76 = p60 - k68.length;
        return S71 > v67 && S71 <= n19(v67, P76);
      });
      k68.push(...g65);
    }
    let M78 = k68.reduce((g65, S71) => {
      let P76 = r32.ISOWeek ? l53(S71) : u50(S71), F77 = g65.find(($9) => $9.weekNumber === P76), j33 = new se(S71, O24, o36);
      return F77 ? F77.days.push(j33) : g65.push(new xe(P76, [j33])), g65;
    }, []), m72 = new ve(O24, M78);
    return C62.push(m72), C62;
  }, []);
  return r32.reverseMonths ? W61.reverse() : W61;
}
function _t(e30, t8) {
  let { startMonth: r32, endMonth: o36 } = e30, { startOfYear: n19, startOfDay: f75, startOfMonth: a33, endOfMonth: s23, addYears: i19, endOfYear: l53, today: u50 } = t8, d43 = e30.captionLayout === "dropdown" || e30.captionLayout === "dropdown-years";
  return r32 ? r32 = a33(r32) : !r32 && d43 && (r32 = n19(i19(e30.today ?? u50(), -100))), o36 ? o36 = s23(o36) : !o36 && d43 && (o36 = l53(e30.today ?? u50())), [r32 && f75(r32), o36 && f75(o36)];
}
function Tt(e30, t8, r32, o36) {
  if (r32.disableNavigation) return;
  let { pagedNavigation: n19, numberOfMonths: f75 = 1 } = r32, { startOfMonth: a33, addMonths: s23, differenceInCalendarMonths: i19 } = o36, l53 = n19 ? f75 : 1, u50 = a33(e30);
  if (!t8) return s23(u50, l53);
  if (!(i19(t8, e30) < f75)) return s23(u50, l53);
}
function Pt(e30, t8, r32, o36) {
  if (r32.disableNavigation) return;
  let { pagedNavigation: n19, numberOfMonths: f75 } = r32, { startOfMonth: a33, addMonths: s23, differenceInCalendarMonths: i19 } = o36, l53 = n19 ? f75 ?? 1 : 1, u50 = a33(e30);
  if (!t8) return s23(u50, -l53);
  if (!(i19(u50, t8) <= 0)) return s23(u50, -l53);
}
function At(e30) {
  let t8 = [];
  return e30.reduce((r32, o36) => r32.concat(o36.weeks.slice()), t8.slice());
}
function oe(e30, t8) {
  let [r32, o36] = Dn(e30);
  return [t8 === void 0 ? r32 : t8, o36];
}
function Rt(e30, t8) {
  let [r32, o36] = _t(e30, t8), { startOfMonth: n19, endOfMonth: f75 } = t8, a33 = ot(e30, r32, o36, t8), [s23, i19] = oe(a33, e30.month ? a33 : void 0);
  kn(() => {
    let p60 = ot(e30, r32, o36, t8);
    i19(p60);
  }, [e30.timeZone]);
  let { months: l53, weeks: u50, days: d43, previousMonth: h48, nextMonth: y75 } = bn(() => {
    let p60 = Bt(s23, o36, { numberOfMonths: e30.numberOfMonths }, t8), M78 = It(p60, e30.endMonth ? f75(e30.endMonth) : void 0, { ISOWeek: e30.ISOWeek, fixedWeeks: e30.fixedWeeks, broadcastCalendar: e30.broadcastCalendar }, t8), m72 = Ft(p60, M78, { broadcastCalendar: e30.broadcastCalendar, fixedWeeks: e30.fixedWeeks, ISOWeek: e30.ISOWeek, reverseMonths: e30.reverseMonths }, t8), g65 = At(m72), S71 = Yt(m72), P76 = Pt(s23, r32, e30, t8), F77 = Tt(s23, o36, e30, t8);
    return { months: m72, weeks: g65, days: S71, previousMonth: P76, nextMonth: F77 };
  }, [t8, s23.getTime(), o36?.getTime(), r32?.getTime(), e30.disableNavigation, e30.broadcastCalendar, e30.endMonth?.getTime(), e30.fixedWeeks, e30.ISOWeek, e30.numberOfMonths, e30.pagedNavigation, e30.reverseMonths]), { disableNavigation: W61, onMonthChange: C62 } = e30, O24 = (p60) => u50.some((M78) => M78.days.some((m72) => m72.isEqualTo(p60))), Y26 = (p60) => {
    if (W61) return;
    let M78 = n19(p60);
    r32 && M78 < n19(r32) && (M78 = n19(r32)), o36 && M78 > n19(o36) && (M78 = n19(o36)), i19(M78), C62?.(M78);
  };
  return { months: l53, weeks: u50, days: d43, navStart: r32, navEnd: o36, previousMonth: h48, nextMonth: y75, goToMonth: Y26, goToDay: (p60) => {
    O24(p60) || Y26(p60.date);
  } };
}
var J15;
(function(e30) {
  e30[e30.Today = 0] = "Today", e30[e30.Selected = 1] = "Selected", e30[e30.LastFocused = 2] = "LastFocused", e30[e30.FocusedModifier = 3] = "FocusedModifier";
})(J15 || (J15 = {}));
function Ht(e30) {
  return !e30[E68.disabled] && !e30[E68.hidden] && !e30[E68.outside];
}
function Gt(e30, t8, r32, o36) {
  let n19, f75 = -1;
  for (let a33 of e30) {
    let s23 = t8(a33);
    Ht(s23) && (s23[E68.focused] && f75 < J15.FocusedModifier ? (n19 = a33, f75 = J15.FocusedModifier) : o36?.isEqualTo(a33) && f75 < J15.LastFocused ? (n19 = a33, f75 = J15.LastFocused) : r32(a33.date) && f75 < J15.Selected ? (n19 = a33, f75 = J15.Selected) : s23[E68.today] && f75 < J15.Today && (n19 = a33, f75 = J15.Today));
  }
  return n19 || (n19 = e30.find((a33) => Ht(t8(a33)))), n19;
}
function qt(e30, t8, r32, o36, n19, f75, a33) {
  let { ISOWeek: s23, broadcastCalendar: i19 } = f75, { addDays: l53, addMonths: u50, addWeeks: d43, addYears: h48, endOfBroadcastWeek: y75, endOfISOWeek: W61, endOfWeek: C62, max: O24, min: Y26, startOfBroadcastWeek: v67, startOfISOWeek: k68, startOfWeek: p60 } = a33, m72 = { day: l53, week: d43, month: u50, year: h48, startOfWeek: (g65) => i19 ? v67(g65, a33) : s23 ? k68(g65) : p60(g65), endOfWeek: (g65) => i19 ? y75(g65) : s23 ? W61(g65) : C62(g65) }[e30](r32, t8 === "after" ? 1 : -1);
  return t8 === "before" && o36 ? m72 = O24([o36, m72]) : t8 === "after" && n19 && (m72 = Y26([n19, m72])), m72;
}
function rt(e30, t8, r32, o36, n19, f75, a33, s23 = 0) {
  if (s23 > 365) return;
  let i19 = qt(e30, t8, r32.date, o36, n19, f75, a33), l53 = !!(f75.disabled && K19(i19, f75.disabled, a33)), u50 = !!(f75.hidden && K19(i19, f75.hidden, a33)), d43 = i19, h48 = new se(i19, d43, a33);
  return !l53 && !u50 ? h48 : rt(e30, t8, h48, o36, n19, f75, a33, s23 + 1);
}
function jt(e30, t8, r32, o36, n19) {
  let { autoFocus: f75 } = e30, [a33, s23] = Kt(), i19 = Gt(t8.days, r32, o36 || (() => false), a33), [l53, u50] = Kt(f75 ? i19 : void 0);
  return { isFocusTarget: (C62) => !!i19?.isEqualTo(C62), setFocused: u50, focused: l53, blur: () => {
    s23(l53), u50(void 0);
  }, moveFocus: (C62, O24) => {
    if (!l53) return;
    let Y26 = rt(C62, O24, l53, t8.navStart, t8.navEnd, e30, n19);
    Y26 && (e30.disableNavigation && !t8.days.some((k68) => k68.isEqualTo(Y26)) || (t8.goToDay(Y26), u50(Y26)));
  } };
}
function $t(e30, t8) {
  let { selected: r32, required: o36, onSelect: n19 } = e30, [f75, a33] = oe(r32, n19 ? r32 : void 0), s23 = n19 ? r32 : f75, { isSameDay: i19 } = t8, l53 = (y75) => s23?.some((W61) => i19(W61, y75)) ?? false, { min: u50, max: d43 } = e30;
  return { selected: s23, select: (y75, W61, C62) => {
    let O24 = [...s23 ?? []];
    if (l53(y75)) {
      if (s23?.length === u50 || o36 && s23?.length === 1) return;
      O24 = s23?.filter((Y26) => !i19(Y26, y75));
    } else s23?.length === d43 ? O24 = [y75] : O24 = [...O24, y75];
    return n19 || a33(O24), n19?.(O24, y75, W61, C62), O24;
  }, isSelected: l53 };
}
function zt(e30, t8, r32 = 0, o36 = 0, n19 = false, f75 = T43) {
  let { from: a33, to: s23 } = t8 || {}, { isSameDay: i19, isAfter: l53, isBefore: u50 } = f75, d43;
  if (!a33 && !s23) d43 = { from: e30, to: r32 > 0 ? void 0 : e30 };
  else if (a33 && !s23) i19(a33, e30) ? r32 === 0 ? d43 = { from: a33, to: e30 } : n19 ? d43 = { from: a33, to: void 0 } : d43 = void 0 : u50(e30, a33) ? d43 = { from: e30, to: a33 } : d43 = { from: a33, to: e30 };
  else if (a33 && s23) if (i19(a33, e30) && i19(s23, e30)) n19 ? d43 = { from: a33, to: s23 } : d43 = void 0;
  else if (i19(a33, e30)) d43 = { from: a33, to: r32 > 0 ? void 0 : e30 };
  else if (i19(s23, e30)) d43 = { from: e30, to: r32 > 0 ? void 0 : e30 };
  else if (u50(e30, a33)) d43 = { from: e30, to: s23 };
  else if (l53(e30, a33)) d43 = { from: a33, to: e30 };
  else if (l53(e30, s23)) d43 = { from: a33, to: e30 };
  else throw new Error("Invalid range");
  if (d43?.from && d43?.to) {
    let h48 = f75.differenceInCalendarDays(d43.to, d43.from);
    o36 > 0 && h48 > o36 ? d43 = { from: e30, to: void 0 } : r32 > 1 && h48 < r32 && (d43 = { from: e30, to: void 0 });
  }
  return d43;
}
function Vt(e30, t8, r32 = T43) {
  let o36 = Array.isArray(t8) ? t8 : [t8], n19 = e30.from, f75 = r32.differenceInCalendarDays(e30.to, e30.from), a33 = Math.min(f75, 6);
  for (let s23 = 0; s23 <= a33; s23++) {
    if (o36.includes(n19.getDay())) return true;
    n19 = r32.addDays(n19, 1);
  }
  return false;
}
function nt(e30, t8, r32 = T43) {
  return G14(e30, t8.from, false, r32) || G14(e30, t8.to, false, r32) || G14(t8, e30.from, false, r32) || G14(t8, e30.to, false, r32);
}
function Zt(e30, t8, r32 = T43) {
  let o36 = Array.isArray(t8) ? t8 : [t8];
  if (o36.filter((s23) => typeof s23 != "function").some((s23) => typeof s23 == "boolean" ? s23 : r32.isDate(s23) ? G14(e30, s23, false, r32) : ge(s23, r32) ? s23.some((i19) => G14(e30, i19, false, r32)) : te2(s23) ? s23.from && s23.to ? nt(e30, { from: s23.from, to: s23.to }, r32) : false : Oe(s23) ? Vt(e30, s23.dayOfWeek, r32) : ae(s23) ? r32.isAfter(s23.before, s23.after) ? nt(e30, { from: r32.addDays(s23.after, 1), to: r32.addDays(s23.before, -1) }, r32) : K19(e30.from, s23, r32) || K19(e30.to, s23, r32) : ie(s23) || fe(s23) ? K19(e30.from, s23, r32) || K19(e30.to, s23, r32) : false)) return true;
  let a33 = o36.filter((s23) => typeof s23 == "function");
  if (a33.length) {
    let s23 = e30.from, i19 = r32.differenceInCalendarDays(e30.to, e30.from);
    for (let l53 = 0; l53 <= i19; l53++) {
      if (a33.some((u50) => u50(s23))) return true;
      s23 = r32.addDays(s23, 1);
    }
  }
  return false;
}
function Lt(e30, t8) {
  let { disabled: r32, excludeDisabled: o36, resetOnSelect: n19, selected: f75, required: a33, onSelect: s23 } = e30, [i19, l53] = oe(f75, s23 ? f75 : void 0), u50 = s23 ? f75 : i19;
  return { selected: u50, select: (y75, W61, C62) => {
    let { min: O24, max: Y26 } = e30, v67;
    if (y75) {
      let k68 = u50?.from, p60 = u50?.to, M78 = !!k68 && !!p60, m72 = !!k68 && !!p60 && t8.isSameDay(k68, p60) && t8.isSameDay(y75, k68);
      n19 && (M78 || !u50?.from) ? !a33 && m72 ? v67 = void 0 : v67 = { from: y75, to: void 0 } : v67 = zt(y75, u50, O24, Y26, a33, t8);
    }
    return o36 && r32 && v67?.from && v67.to && Zt({ from: v67.from, to: v67.to }, r32, t8) && (v67.from = y75, v67.to = void 0), s23 || l53(v67), s23?.(v67, y75, W61, C62), v67;
  }, isSelected: (y75) => u50 && G14(u50, y75, false, t8) };
}
function Jt(e30, t8) {
  let { selected: r32, required: o36, onSelect: n19 } = e30, [f75, a33] = oe(r32, n19 ? r32 : void 0), s23 = n19 ? r32 : f75, { isSameDay: i19 } = t8;
  return { selected: s23, select: (d43, h48, y75) => {
    let W61 = d43;
    return !o36 && s23 && s23 && i19(d43, s23) && (W61 = void 0), n19 || a33(W61), n19?.(W61, d43, h48, y75), W61;
  }, isSelected: (d43) => s23 ? i19(s23, d43) : false };
}
function Qt(e30, t8) {
  let r32 = Jt(e30, t8), o36 = $t(e30, t8), n19 = Lt(e30, t8);
  switch (e30.mode) {
    case "single":
      return r32;
    case "multiple":
      return o36;
    case "range":
      return n19;
    default:
      return;
  }
}
function R42(e30, t8) {
  return e30 instanceof r && e30.timeZone === t8 ? e30 : new r(e30, t8);
}
function le(e30, t8, r32) {
  if (!r32) return R42(e30, t8);
  let o36 = R42(e30, t8), n19 = new r(o36.getFullYear(), o36.getMonth(), o36.getDate(), 12, 0, 0, t8);
  return new Date(n19.getTime());
}
function Ut(e30, t8, r32) {
  return typeof e30 == "boolean" || typeof e30 == "function" ? e30 : e30 instanceof Date ? le(e30, t8, r32) : Array.isArray(e30) ? e30.map((o36) => o36 instanceof Date ? le(o36, t8, r32) : o36) : te2(e30) ? { ...e30, from: e30.from ? R42(e30.from, t8) : e30.from, to: e30.to ? R42(e30.to, t8) : e30.to } : ae(e30) ? { before: le(e30.before, t8, r32), after: le(e30.after, t8, r32) } : ie(e30) ? { after: le(e30.after, t8, r32) } : fe(e30) ? { before: le(e30.before, t8, r32) } : e30;
}
function We(e30, t8, r32) {
  return e30 && (Array.isArray(e30) ? e30.map((o36) => Ut(o36, t8, r32)) : Ut(e30, t8, r32));
}
function Pl(e30) {
  let t8 = e30, r32 = t8.timeZone;
  if (r32 && (t8 = { ...e30, timeZone: r32 }, t8.today && (t8.today = R42(t8.today, r32)), t8.month && (t8.month = R42(t8.month, r32)), t8.defaultMonth && (t8.defaultMonth = R42(t8.defaultMonth, r32)), t8.startMonth && (t8.startMonth = R42(t8.startMonth, r32)), t8.endMonth && (t8.endMonth = R42(t8.endMonth, r32)), t8.mode === "single" && t8.selected ? t8.selected = R42(t8.selected, r32) : t8.mode === "multiple" && t8.selected ? t8.selected = t8.selected?.map((D66) => R42(D66, r32)) : t8.mode === "range" && t8.selected && (t8.selected = { from: t8.selected.from ? R42(t8.selected.from, r32) : t8.selected.from, to: t8.selected.to ? R42(t8.selected.to, r32) : t8.selected.to }), t8.disabled !== void 0 && (t8.disabled = We(t8.disabled, r32)), t8.hidden !== void 0 && (t8.hidden = We(t8.hidden, r32)), t8.modifiers)) {
    let D66 = {};
    Object.keys(t8.modifiers).forEach((x71) => {
      D66[x71] = We(t8.modifiers?.[x71], r32);
    }), t8.modifiers = D66;
  }
  let { components: o36, formatters: n19, labels: f75, dateLib: a33, locale: s23, classNames: i19 } = st(() => {
    let D66 = { ...ue, ...t8.locale }, x71 = t8.broadcastCalendar ? 1 : t8.weekStartsOn, b58 = t8.noonSafe && t8.timeZone ? St(t8.timeZone, { weekStartsOn: x71, locale: D66 }) : void 0, B12 = t8.dateLib && b58 ? { ...b58, ...t8.dateLib } : t8.dateLib ?? b58, N66 = new _14({ locale: D66, weekStartsOn: x71, firstWeekContainsDate: t8.firstWeekContainsDate, useAdditionalWeekYearTokens: t8.useAdditionalWeekYearTokens, useAdditionalDayOfYearTokens: t8.useAdditionalDayOfYearTokens, timeZone: t8.timeZone, numerals: t8.numerals }, B12);
    return { dateLib: N66, components: Mt(t8.components), formatters: Ot(t8.formatters), labels: gt(t8.labels, N66.options), locale: D66, classNames: { ...xt(), ...t8.classNames } };
  }, [t8.locale, t8.broadcastCalendar, t8.weekStartsOn, t8.firstWeekContainsDate, t8.useAdditionalWeekYearTokens, t8.useAdditionalDayOfYearTokens, t8.timeZone, t8.numerals, t8.dateLib, t8.noonSafe, t8.components, t8.formatters, t8.labels, t8.classNames]);
  t8.today || (t8 = { ...t8, today: a33.today() });
  let { captionLayout: l53, mode: u50, navLayout: d43, numberOfMonths: h48 = 1, onDayBlur: y75, onDayClick: W61, onDayFocus: C62, onDayKeyDown: O24, onDayMouseEnter: Y26, onDayMouseLeave: v67, onNextClick: k68, onPrevClick: p60, showWeekNumber: M78, styles: m72 } = t8, { formatCaption: g65, formatDay: S71, formatMonthDropdown: P76, formatWeekNumber: F77, formatWeekNumberHeader: j33, formatWeekdayName: $9, formatYearDropdown: X74 } = n19, q30 = Rt(t8, a33), { days: ne, months: de, navStart: we, navEnd: Ne, previousMonth: z72, nextMonth: V74, goToMonth: U3 } = q30, Ce = kt(ne, t8, we, Ne, a33), { isSelected: Se, select: Ee, selected: De } = Qt(t8, a33) ?? {}, { blur: at, focused: it, isFocusTarget: eo, moveFocus: ft, setFocused: ke } = jt(t8, q30, Ce, Se ?? (() => false), a33), { labelDayButton: to, labelGridcell: oo, labelGrid: ro, labelMonthDropdown: no, labelNav: lt, labelPrevious: so, labelNext: ao, labelWeekday: io, labelWeekNumber: fo, labelWeekNumberHeader: lo, labelYearDropdown: co } = f75, uo = st(() => Nt(a33, t8.ISOWeek, t8.broadcastCalendar, t8.today), [a33, t8.ISOWeek, t8.broadcastCalendar, t8.today]), dt = u50 !== void 0 || W61 !== void 0, Ie = Q26(() => {
    z72 && (U3(z72), p60?.(z72));
  }, [z72, U3, p60]), Ye = Q26(() => {
    V74 && (U3(V74), k68?.(V74));
  }, [U3, V74, k68]), mo = Q26((D66, x71) => (b58) => {
    b58.preventDefault(), b58.stopPropagation(), ke(D66), !x71.disabled && (Ee?.(D66.date, x71, b58), W61?.(D66.date, x71, b58));
  }, [Ee, W61, ke]), po = Q26((D66, x71) => (b58) => {
    ke(D66), C62?.(D66.date, x71, b58);
  }, [C62, ke]), ho = Q26((D66, x71) => (b58) => {
    at(), y75?.(D66.date, x71, b58);
  }, [at, y75]), yo = Q26((D66, x71) => (b58) => {
    let B12 = { ArrowLeft: [b58.shiftKey ? "month" : "day", t8.dir === "rtl" ? "after" : "before"], ArrowRight: [b58.shiftKey ? "month" : "day", t8.dir === "rtl" ? "before" : "after"], ArrowDown: [b58.shiftKey ? "year" : "week", "after"], ArrowUp: [b58.shiftKey ? "year" : "week", "before"], PageUp: [b58.shiftKey ? "year" : "month", "before"], PageDown: [b58.shiftKey ? "year" : "month", "after"], Home: ["startOfWeek", "before"], End: ["endOfWeek", "after"] };
    if (B12[b58.key]) {
      b58.preventDefault(), b58.stopPropagation();
      let [N66, L72] = B12[b58.key];
      ft(N66, L72);
    }
    O24?.(D66.date, x71, b58);
  }, [ft, O24, t8.dir]), Do = Q26((D66, x71) => (b58) => {
    Y26?.(D66.date, x71, b58);
  }, [Y26]), ko = Q26((D66, x71) => (b58) => {
    v67?.(D66.date, x71, b58);
  }, [v67]), bo = Q26((D66, x71) => (b58) => {
    let B12 = Number(b58.target.value), N66 = a33.setMonth(a33.startOfMonth(D66), B12);
    U3(a33.addMonths(N66, -x71));
  }, [a33, U3]), Mo = Q26((D66, x71) => (b58) => {
    let B12 = Number(b58.target.value), N66 = a33.setYear(a33.startOfMonth(D66), B12);
    U3(a33.addMonths(N66, -x71));
  }, [a33, U3]), { className: vo, style: xo } = st(() => ({ className: [i19[c59.Root], t8.className].filter(Boolean).join(" "), style: { ...m72?.[c59.Root], ...t8.style } }), [i19, t8.className, t8.style, m72]), Oo = vt(t8), ct = (D66) => {
    let x71 = m72?.[c59.Dropdown], b58 = m72?.[D66];
    if (!(!x71 && !b58)) return { ...x71, ...b58 };
  }, ut = vn(null);
  Et(ut, !!t8.animate, { classNames: i19, months: de, focused: it, dateLib: a33 });
  let go = { dayPickerProps: t8, selected: De, select: Ee, isSelected: Se, months: de, nextMonth: V74, previousMonth: z72, goToMonth: U3, getModifiers: Ce, components: o36, classNames: i19, styles: m72, labels: f75, formatters: n19 };
  return I21.createElement(Pe.Provider, { value: go }, I21.createElement(o36.Root, { rootRef: t8.animate ? ut : void 0, className: vo, style: xo, dir: t8.dir, id: t8.id, lang: t8.lang ?? s23.code, nonce: t8.nonce, title: t8.title, role: t8.role, "aria-label": t8["aria-label"], "aria-labelledby": t8["aria-labelledby"], ...Oo }, I21.createElement(o36.Months, { className: i19[c59.Months], style: m72?.[c59.Months] }, !t8.hideNavigation && !d43 && I21.createElement(o36.Nav, { "data-animated-nav": t8.animate ? "true" : void 0, className: i19[c59.Nav], style: m72?.[c59.Nav], "aria-label": lt(), onPreviousClick: Ie, onNextClick: Ye, previousMonth: z72, nextMonth: V74 }), de.map((D66, x71) => {
    let b58 = t8.reverseMonths ? de.length - 1 - x71 : x71;
    return I21.createElement(o36.Month, { "data-animated-month": t8.animate ? "true" : void 0, className: i19[c59.Month], style: m72?.[c59.Month], key: x71, displayIndex: x71, calendarMonth: D66 }, d43 === "around" && !t8.hideNavigation && x71 === 0 && I21.createElement(o36.PreviousMonthButton, { type: "button", className: i19[c59.PreviousMonthButton], style: m72?.[c59.PreviousMonthButton], tabIndex: z72 ? void 0 : -1, "aria-disabled": z72 ? void 0 : true, "aria-label": so(z72), onClick: Ie, "data-animated-button": t8.animate ? "true" : void 0 }, I21.createElement(o36.Chevron, { disabled: z72 ? void 0 : true, className: i19[c59.Chevron], style: m72?.[c59.Chevron], orientation: t8.dir === "rtl" ? "right" : "left" })), I21.createElement(o36.MonthCaption, { "data-animated-caption": t8.animate ? "true" : void 0, className: i19[c59.MonthCaption], style: m72?.[c59.MonthCaption], calendarMonth: D66, displayIndex: x71 }, l53?.startsWith("dropdown") ? I21.createElement(o36.DropdownNav, { className: i19[c59.Dropdowns], style: m72?.[c59.Dropdowns] }, (() => {
      let B12 = l53 === "dropdown" || l53 === "dropdown-months" ? I21.createElement(o36.MonthsDropdown, { key: "month", className: i19[c59.MonthsDropdown], "aria-label": no(), disabled: !!t8.disableNavigation, onChange: bo(D66.date, b58), options: Wt(D66.date, we, Ne, n19, a33), style: ct(c59.MonthsDropdown), value: a33.getMonth(D66.date) }) : I21.createElement("span", { key: "month" }, P76(D66.date, a33)), N66 = l53 === "dropdown" || l53 === "dropdown-years" ? I21.createElement(o36.YearsDropdown, { key: "year", className: i19[c59.YearsDropdown], "aria-label": co(a33.options), disabled: !!t8.disableNavigation, onChange: Mo(D66.date, b58), options: Ct(we, Ne, n19, a33, !!t8.reverseYears), style: ct(c59.YearsDropdown), value: a33.getYear(D66.date) }) : I21.createElement("span", { key: "year" }, X74(D66.date, a33));
      return a33.getMonthYearOrder() === "year-first" ? [N66, B12] : [B12, N66];
    })(), I21.createElement("span", { role: "status", "aria-live": "polite", style: { border: 0, clip: "rect(0 0 0 0)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", width: "1px", whiteSpace: "nowrap", wordWrap: "normal" } }, g65(D66.date, a33.options, a33))) : I21.createElement(o36.CaptionLabel, { className: i19[c59.CaptionLabel], style: m72?.[c59.CaptionLabel], role: "status", "aria-live": "polite" }, g65(D66.date, a33.options, a33))), d43 === "around" && !t8.hideNavigation && x71 === h48 - 1 && I21.createElement(o36.NextMonthButton, { type: "button", className: i19[c59.NextMonthButton], style: m72?.[c59.NextMonthButton], tabIndex: V74 ? void 0 : -1, "aria-disabled": V74 ? void 0 : true, "aria-label": ao(V74), onClick: Ye, "data-animated-button": t8.animate ? "true" : void 0 }, I21.createElement(o36.Chevron, { disabled: V74 ? void 0 : true, className: i19[c59.Chevron], style: m72?.[c59.Chevron], orientation: t8.dir === "rtl" ? "left" : "right" })), x71 === h48 - 1 && d43 === "after" && !t8.hideNavigation && I21.createElement(o36.Nav, { "data-animated-nav": t8.animate ? "true" : void 0, className: i19[c59.Nav], style: m72?.[c59.Nav], "aria-label": lt(), onPreviousClick: Ie, onNextClick: Ye, previousMonth: z72, nextMonth: V74 }), I21.createElement(o36.MonthGrid, { role: "grid", "aria-multiselectable": u50 === "multiple" || u50 === "range", "aria-label": ro(D66.date, a33.options, a33) || void 0, className: i19[c59.MonthGrid], style: m72?.[c59.MonthGrid] }, !t8.hideWeekdays && I21.createElement(o36.Weekdays, { "data-animated-weekdays": t8.animate ? "true" : void 0, className: i19[c59.Weekdays], style: m72?.[c59.Weekdays] }, M78 && I21.createElement(o36.WeekNumberHeader, { "aria-label": lo(a33.options), className: i19[c59.WeekNumberHeader], style: m72?.[c59.WeekNumberHeader], scope: "col" }, j33()), uo.map((B12) => I21.createElement(o36.Weekday, { "aria-label": io(B12, a33.options, a33), className: i19[c59.Weekday], key: String(B12), style: m72?.[c59.Weekday], scope: "col" }, $9(B12, a33.options, a33)))), I21.createElement(o36.Weeks, { "data-animated-weeks": t8.animate ? "true" : void 0, className: i19[c59.Weeks], style: m72?.[c59.Weeks] }, D66.weeks.map((B12) => I21.createElement(o36.Week, { className: i19[c59.Week], key: B12.weekNumber, style: m72?.[c59.Week], week: B12 }, M78 && I21.createElement(o36.WeekNumber, { week: B12, style: m72?.[c59.WeekNumber], "aria-label": fo(B12.weekNumber, { locale: s23 }), className: i19[c59.WeekNumber], scope: "row", role: "rowheader" }, F77(B12.weekNumber, a33)), B12.days.map((N66) => {
      let { date: L72 } = N66, w71 = Ce(N66);
      if (w71[E68.focused] = !w71.hidden && !!it?.isEqualTo(N66), w71[H59.selected] = Se?.(L72) || w71.selected, te2(De)) {
        let { from: Be, to: Fe } = De;
        w71[H59.range_start] = !!(Be && Fe && a33.isSameDay(L72, Be)), w71[H59.range_end] = !!(Be && Fe && a33.isSameDay(L72, Fe)), w71[H59.range_middle] = G14(De, L72, true, a33);
      }
      let Wo = wt(w71, m72, t8.modifiersStyles), wo = bt(w71, i19, t8.modifiersClassNames), No = !dt && !w71.hidden ? oo(L72, w71, a33.options, a33) : void 0;
      return I21.createElement(o36.Day, { key: `${N66.isoDate}_${N66.displayMonthId}`, day: N66, modifiers: w71, className: wo.join(" "), style: Wo, role: "gridcell", "aria-selected": w71.selected || void 0, "aria-label": No, "data-day": N66.isoDate, "data-month": N66.outside ? N66.dateMonthId : void 0, "data-selected": w71.selected || void 0, "data-disabled": w71.disabled || void 0, "data-hidden": w71.hidden || void 0, "data-outside": N66.outside || void 0, "data-focused": w71.focused || void 0, "data-today": w71.today || void 0 }, !w71.hidden && dt ? I21.createElement(o36.DayButton, { className: i19[c59.DayButton], style: m72?.[c59.DayButton], type: "button", day: N66, modifiers: w71, disabled: !w71.focused && w71.disabled || void 0, "aria-disabled": w71.focused && w71.disabled || void 0, tabIndex: eo(N66) ? 0 : -1, "aria-label": to(L72, w71, a33.options, a33), onClick: mo(N66, w71), onBlur: ho(N66, w71), onFocus: po(N66, w71), onKeyDown: yo(N66, w71), onMouseEnter: Do(N66, w71), onMouseLeave: ko(N66, w71) }, S71(L72, a33.options, a33)) : !w71.hidden && S71(N66.date, a33.options, a33));
    }))))));
  })), t8.footer && I21.createElement(o36.Footer, { className: i19[c59.Footer], style: m72?.[c59.Footer], role: "status", "aria-live": "polite" }, t8.footer)));
}

// ../../ui-main/ui-main/apps/v4/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
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
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/calendar.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = xt();
  return /* @__PURE__ */ jsx2(
    Pl,
    {
      showOutsideDays,
      className: cn(
        "group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 bg-popover opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label" ? "text-sm" : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md",
          props.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsx2(
            "div",
            {
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2),
              ...props2
            }
          );
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsx2(ChevronLeftIcon, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsx2(
              ChevronRightIcon,
              {
                className: cn("size-4", className2),
                ...props2
              }
            );
          }
          return /* @__PURE__ */ jsx2(ChevronDownIcon, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsx2("td", { ...props2, children: /* @__PURE__ */ jsx2("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = xt();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsx2(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-accent-foreground [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
export {
  Calendar,
  CalendarDayButton
};
