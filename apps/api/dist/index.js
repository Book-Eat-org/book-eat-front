var Pn = Object.defineProperty;
var In = (e, t, r) => t in e ? Pn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _t = (e, t, r) => (In(e, typeof t != "symbol" ? t + "" : t, r), r);
import * as et from "react";
import lt, { useContext as Nn, useRef as ae, useCallback as xe, useDebugValue as $t, useMemo as ne, useState as cr, useEffect as pe, useLayoutEffect as Dn } from "react";
import { unstable_batchedUpdates as $n } from "react-dom";
var qn = /* @__PURE__ */ ((e) => (e.NEW = "NEW", e.PAID = "PAID", e.IN_PROGRESS = "IN_PROGRESS", e.CANCELLED_BY_CLIENT = "CANCELLED_BY_CLIENT", e.CANCELLED_BY_PROVIDER = "CANCELLED_BY_PROVIDER", e.ERROR = "ERROR", e.COMPLETED = "COMPLETED", e))(qn || {}), jn = /* @__PURE__ */ ((e) => (e.DELIVERY = "DELIVERY", e.TO_OUTSIDE = "TO_OUTSIDE", e.ON_PLACE = "ON_PLACE", e))(jn || {}), kn = /* @__PURE__ */ ((e) => (e.Monday = "Понедельник", e.Tuesday = "Вторник", e.Wednesday = "Среда", e.Thursday = "Четверг", e.Friday = "Пятница", e.Saturday = "Суббота", e.Sunday = "Воскресенье", e))(kn || {});
function qt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var bt = () => Math.random().toString(36).substring(7).split("").join("."), xn = {
  INIT: `@@redux/INIT${bt()}`,
  REPLACE: `@@redux/REPLACE${bt()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${bt()}`
}, Le = xn;
function le(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function zn(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (Fn(e))
    return "date";
  if (Vn(e))
    return "error";
  const r = Ln(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Ln(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Vn(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Fn(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Qn(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = zn(e)), t;
}
function ar(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Un(e, t, r, n) {
  const o = Object.keys(t), a = r && r.type === Le.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!le(e))
    return `The ${a} has unexpected type of "${Qn(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const d = Object.keys(e).filter((v) => !t.hasOwnProperty(v) && !n[v]);
  if (d.forEach((v) => {
    n[v] = !0;
  }), !(r && r.type === Le.REPLACE) && d.length > 0)
    return `Unexpected ${d.length > 1 ? "keys" : "key"} "${d.join('", "')}" found in ${a}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function Bn(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Le.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? qt(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Le.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? qt(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Le.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Wn(e) {
  const t = Object.keys(e), r = {};
  for (let d = 0; d < t.length; d++) {
    const v = t[d];
    process.env.NODE_ENV !== "production" && typeof e[v] > "u" && ar(`No reducer provided for key "${v}"`), typeof e[v] == "function" && (r[v] = e[v]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let a;
  try {
    Bn(r);
  } catch (d) {
    a = d;
  }
  return function(v = {}, O) {
    if (a)
      throw a;
    if (process.env.NODE_ENV !== "production") {
      const g = Un(v, r, O, o);
      g && ar(g);
    }
    let E = !1;
    const S = {};
    for (let g = 0; g < n.length; g++) {
      const y = n[g], l = r[y], u = v[y], p = l(u, O);
      if (typeof p > "u") {
        const f = O && O.type;
        throw new Error(process.env.NODE_ENV === "production" ? qt(14) : `When called with an action of type ${f ? `"${String(f)}"` : "(unknown type)"}, the slice reducer for key "${y}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      S[y] = p, E = E || p !== u;
    }
    return E = E || n.length !== Object.keys(v).length, E ? S : v;
  };
}
function Yt(e) {
  return le(e) && "type" in e && typeof e.type == "string";
}
var Ht = Symbol.for("immer-nothing"), Ve = Symbol.for("immer-draftable"), ee = Symbol.for("immer-state"), Kr = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Y(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Kr[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var _e = Object.getPrototypeOf;
function ie(e) {
  return !!e && !!e[ee];
}
function se(e) {
  var t;
  return e ? Yr(e) || Array.isArray(e) || !!e[Ve] || !!((t = e.constructor) != null && t[Ve]) || Ge(e) || Je(e) : !1;
}
var Kn = Object.prototype.constructor.toString();
function Yr(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = _e(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Kn;
}
function Yn(e) {
  return ie(e) || Y(15, e), e[ee].base_;
}
function Ne(e, t) {
  be(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function be(e) {
  const t = e[ee];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ge(e) ? 2 : Je(e) ? 3 : 0;
}
function Ue(e, t) {
  return be(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ot(e, t) {
  return be(e) === 2 ? e.get(t) : e[t];
}
function Hr(e, t, r) {
  const n = be(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Hn(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ge(e) {
  return e instanceof Map;
}
function Je(e) {
  return e instanceof Set;
}
function ge(e) {
  return e.copy_ || e.base_;
}
function jt(e, t) {
  if (Ge(e))
    return new Map(e);
  if (Je(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Yr(e))
    return _e(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[ee];
  let n = Reflect.ownKeys(r);
  for (let o = 0; o < n.length; o++) {
    const a = n[o], d = r[a];
    d.writable === !1 && (d.writable = !0, d.configurable = !0), (d.get || d.set) && (r[a] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: d.enumerable,
      value: e[a]
    });
  }
  return Object.create(_e(e), r);
}
function Gt(e, t = !1) {
  return dt(e) || ie(e) || !se(e) || (be(e) > 1 && (e.set = e.add = e.clear = e.delete = Gn), Object.freeze(e), t && Ne(e, (r, n) => Gt(n, !0))), e;
}
function Gn() {
  Y(2);
}
function dt(e) {
  return Object.isFrozen(e);
}
var kt = {};
function Oe(e) {
  const t = kt[e];
  return t || Y(0, e), t;
}
function Jn(e, t) {
  kt[e] || (kt[e] = t);
}
var Be;
function Gr() {
  return Be;
}
function Xn(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function ur(e, t) {
  t && (Oe("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function xt(e) {
  zt(e), e.drafts_.forEach(Zn), e.drafts_ = null;
}
function zt(e) {
  e === Be && (Be = e.parent_);
}
function lr(e) {
  return Be = Xn(Be, e);
}
function Zn(e) {
  const t = e[ee];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function dr(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[ee].modified_ && (xt(t), Y(4)), se(e) && (e = it(t, e), t.parent_ || st(t, e)), t.patches_ && Oe("Patches").generateReplacementPatches_(
    r[ee].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = it(t, r, []), xt(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ht ? e : void 0;
}
function it(e, t, r) {
  if (dt(t))
    return t;
  const n = t[ee];
  if (!n)
    return Ne(
      t,
      (o, a) => fr(e, n, t, o, a, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return st(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let a = o, d = !1;
    n.type_ === 3 && (a = new Set(o), o.clear(), d = !0), Ne(
      a,
      (v, O) => fr(e, n, o, v, O, r, d)
    ), st(e, o, !1), r && e.patches_ && Oe("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function fr(e, t, r, n, o, a, d) {
  if (process.env.NODE_ENV !== "production" && o === r && Y(5), ie(o)) {
    const v = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Ue(t.assigned_, n) ? a.concat(n) : void 0, O = it(e, o, v);
    if (Hr(r, n, O), ie(O))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    d && r.add(o);
  if (se(o) && !dt(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    it(e, o), (!t || !t.scope_.parent_) && st(e, o);
  }
}
function st(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Gt(t, r);
}
function eo(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Gr(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = n, a = Jt;
  r && (o = [n], a = We);
  const { revoke: d, proxy: v } = Proxy.revocable(o, a);
  return n.draft_ = v, n.revoke_ = d, v;
}
var Jt = {
  get(e, t) {
    if (t === ee)
      return e;
    const r = ge(e);
    if (!Ue(r, t))
      return to(e, r, t);
    const n = r[t];
    return e.finalized_ || !se(n) ? n : n === Rt(e.base_, t) ? (wt(e), e.copy_[t] = Vt(n, e)) : n;
  },
  has(e, t) {
    return t in ge(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(ge(e));
  },
  set(e, t, r) {
    const n = Jr(ge(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = Rt(ge(e), t), a = o == null ? void 0 : o[ee];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Hn(r, o) && (r !== void 0 || Ue(e.base_, t)))
        return !0;
      wt(e), Lt(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Rt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, wt(e), Lt(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = ge(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Y(11);
  },
  getPrototypeOf(e) {
    return _e(e.base_);
  },
  setPrototypeOf() {
    Y(12);
  }
}, We = {};
Ne(Jt, (e, t) => {
  We[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
We.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Y(13), We.set.call(this, e, t, void 0);
};
We.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Y(14), Jt.set.call(this, e[0], t, r, e[0]);
};
function Rt(e, t) {
  const r = e[ee];
  return (r ? ge(r) : e)[t];
}
function to(e, t, r) {
  var o;
  const n = Jr(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Jr(e, t) {
  if (!(t in e))
    return;
  let r = _e(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = _e(r);
  }
}
function Lt(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Lt(e.parent_));
}
function wt(e) {
  e.copy_ || (e.copy_ = jt(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var ro = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const d = this;
        return function(O = a, ...E) {
          return d.produce(O, (S) => r.call(this, S, ...E));
        };
      }
      typeof r != "function" && Y(6), n !== void 0 && typeof n != "function" && Y(7);
      let o;
      if (se(t)) {
        const a = lr(this), d = Vt(t, void 0);
        let v = !0;
        try {
          o = r(d), v = !1;
        } finally {
          v ? xt(a) : zt(a);
        }
        return ur(a, n), dr(o, a);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === Ht && (o = void 0), this.autoFreeze_ && Gt(o, !0), n) {
          const a = [], d = [];
          Oe("Patches").generateReplacementPatches_(t, o, a, d), n(a, d);
        }
        return o;
      } else
        Y(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (d, ...v) => this.produceWithPatches(d, (O) => t(O, ...v));
      let n, o;
      return [this.produce(t, r, (d, v) => {
        n = d, o = v;
      }), n, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    se(e) || Y(8), ie(e) && (e = Xr(e));
    const t = lr(this), r = Vt(e, void 0);
    return r[ee].isManual_ = !0, zt(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[ee];
    (!r || !r.isManual_) && Y(9);
    const { scope_: n } = r;
    return ur(n, t), dr(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Oe("Patches").applyPatches_;
    return ie(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function Vt(e, t) {
  const r = Ge(e) ? Oe("MapSet").proxyMap_(e, t) : Je(e) ? Oe("MapSet").proxySet_(e, t) : eo(e, t);
  return (t ? t.scope_ : Gr()).drafts_.push(r), r;
}
function Xr(e) {
  return ie(e) || Y(10, e), Zr(e);
}
function Zr(e) {
  if (!se(e) || dt(e))
    return e;
  const t = e[ee];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = jt(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = jt(e, !0);
  return Ne(r, (n, o) => {
    Hr(r, n, Zr(o));
  }), t && (t.finalized_ = !1), r;
}
function no() {
  process.env.NODE_ENV !== "production" && Kr.push(
    'Sets cannot have "replace" patches.',
    function(y) {
      return "Unsupported patch operation: " + y;
    },
    function(y) {
      return "Cannot apply patch, path doesn't resolve: " + y;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", r = "add", n = "remove";
  function o(y, l, u, p) {
    switch (y.type_) {
      case 0:
      case 2:
        return d(
          y,
          l,
          u,
          p
        );
      case 1:
        return a(y, l, u, p);
      case 3:
        return v(
          y,
          l,
          u,
          p
        );
    }
  }
  function a(y, l, u, p) {
    let { base_: f, assigned_: m } = y, h = y.copy_;
    h.length < f.length && ([f, h] = [h, f], [u, p] = [p, u]);
    for (let s = 0; s < f.length; s++)
      if (m[s] && h[s] !== f[s]) {
        const i = l.concat([s]);
        u.push({
          op: t,
          path: i,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: g(h[s])
        }), p.push({
          op: t,
          path: i,
          value: g(f[s])
        });
      }
    for (let s = f.length; s < h.length; s++) {
      const i = l.concat([s]);
      u.push({
        op: r,
        path: i,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: g(h[s])
      });
    }
    for (let s = h.length - 1; f.length <= s; --s) {
      const i = l.concat([s]);
      p.push({
        op: n,
        path: i
      });
    }
  }
  function d(y, l, u, p) {
    const { base_: f, copy_: m } = y;
    Ne(y.assigned_, (h, s) => {
      const i = Ot(f, h), c = Ot(m, h), _ = s ? Ue(f, h) ? t : r : n;
      if (i === c && _ === t)
        return;
      const b = l.concat(h);
      u.push(_ === n ? { op: _, path: b } : { op: _, path: b, value: c }), p.push(
        _ === r ? { op: n, path: b } : _ === n ? { op: r, path: b, value: g(i) } : { op: t, path: b, value: g(i) }
      );
    });
  }
  function v(y, l, u, p) {
    let { base_: f, copy_: m } = y, h = 0;
    f.forEach((s) => {
      if (!m.has(s)) {
        const i = l.concat([h]);
        u.push({
          op: n,
          path: i,
          value: s
        }), p.unshift({
          op: r,
          path: i,
          value: s
        });
      }
      h++;
    }), h = 0, m.forEach((s) => {
      if (!f.has(s)) {
        const i = l.concat([h]);
        u.push({
          op: r,
          path: i,
          value: s
        }), p.unshift({
          op: n,
          path: i,
          value: s
        });
      }
      h++;
    });
  }
  function O(y, l, u, p) {
    u.push({
      op: t,
      path: [],
      value: l === Ht ? void 0 : l
    }), p.push({
      op: t,
      path: [],
      value: y
    });
  }
  function E(y, l) {
    return l.forEach((u) => {
      const { path: p, op: f } = u;
      let m = y;
      for (let c = 0; c < p.length - 1; c++) {
        const _ = be(m);
        let b = p[c];
        typeof b != "string" && typeof b != "number" && (b = "" + b), (_ === 0 || _ === 1) && (b === "__proto__" || b === "constructor") && Y(16 + 3), typeof m == "function" && b === "prototype" && Y(16 + 3), m = Ot(m, b), typeof m != "object" && Y(16 + 2, p.join("/"));
      }
      const h = be(m), s = S(u.value), i = p[p.length - 1];
      switch (f) {
        case t:
          switch (h) {
            case 2:
              return m.set(i, s);
            case 3:
              Y(16);
            default:
              return m[i] = s;
          }
        case r:
          switch (h) {
            case 1:
              return i === "-" ? m.push(s) : m.splice(i, 0, s);
            case 2:
              return m.set(i, s);
            case 3:
              return m.add(s);
            default:
              return m[i] = s;
          }
        case n:
          switch (h) {
            case 1:
              return m.splice(i, 1);
            case 2:
              return m.delete(i);
            case 3:
              return m.delete(u.value);
            default:
              return delete m[i];
          }
        default:
          Y(16 + 1, f);
      }
    }), y;
  }
  function S(y) {
    if (!se(y))
      return y;
    if (Array.isArray(y))
      return y.map(S);
    if (Ge(y))
      return new Map(
        Array.from(y.entries()).map(([u, p]) => [u, S(p)])
      );
    if (Je(y))
      return new Set(Array.from(y).map(S));
    const l = Object.create(_e(y));
    for (const u in y)
      l[u] = S(y[u]);
    return Ue(y, Ve) && (l[Ve] = y[Ve]), l;
  }
  function g(y) {
    return ie(y) ? S(y) : y;
  }
  Jn("Patches", {
    applyPatches_: E,
    generatePatches_: o,
    generateReplacementPatches_: O
  });
}
var te = new ro(), $e = te.produce, en = te.produceWithPatches.bind(
  te
);
te.setAutoFreeze.bind(te);
te.setUseStrictShallowCopy.bind(te);
var pr = te.applyPatches.bind(te);
te.createDraft.bind(te);
te.finishDraft.bind(te);
var oo = (e) => {
  let t = !1;
  try {
    const r = {};
    e(r) === r && (t = !0);
  } catch {
  }
  if (t) {
    let r;
    try {
      throw new Error();
    } catch (n) {
      ({ stack: r } = n);
    }
    console.warn(
      `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
      { stack: r }
    );
  }
}, io = (e, t, r) => {
  const { memoize: n, memoizeOptions: o } = t, { inputSelectorResults: a, inputSelectorResultsCopy: d } = e, v = n(() => ({}), ...o);
  if (!(v.apply(null, a) === v.apply(null, d))) {
    let E;
    try {
      throw new Error();
    } catch (S) {
      ({ stack: E } = S);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: a,
        secondInputs: d,
        stack: E
      }
    );
  }
}, so = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function co(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function ao(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var yr = (e) => Array.isArray(e) ? e : [e];
function uo(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return ao(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function hr(e, t) {
  const r = [], { length: n } = e;
  for (let o = 0; o < n; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var lo = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...so,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: oo
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: io
    }
  };
}, fo = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, po = typeof WeakRef < "u" ? WeakRef : fo, yo = 0, mr = 1;
function tt() {
  return {
    s: yo,
    v: void 0,
    o: null,
    p: null
  };
}
function Ke(e, t = {}) {
  let r = tt();
  const { resultEqualityCheck: n } = t;
  let o, a = 0;
  function d() {
    let v = r;
    const { length: O } = arguments;
    for (let g = 0, y = O; g < y; g++) {
      const l = arguments[g];
      if (typeof l == "function" || typeof l == "object" && l !== null) {
        let u = v.o;
        u === null && (v.o = u = /* @__PURE__ */ new WeakMap());
        const p = u.get(l);
        p === void 0 ? (v = tt(), u.set(l, v)) : v = p;
      } else {
        let u = v.p;
        u === null && (v.p = u = /* @__PURE__ */ new Map());
        const p = u.get(l);
        p === void 0 ? (v = tt(), u.set(l, v)) : v = p;
      }
    }
    const E = v;
    let S;
    if (v.s === mr ? S = v.v : (S = e.apply(null, arguments), a++), E.s = mr, n) {
      const g = (o == null ? void 0 : o.deref()) ?? o;
      g != null && n(g, S) && (S = g, a !== 0 && a--), o = typeof S == "object" && S !== null || typeof S == "function" ? new po(S) : S;
    }
    return E.v = S, S;
  }
  return d.clearCache = () => {
    r = tt(), d.resetResultsCount();
  }, d.resultsCount = () => a, d.resetResultsCount = () => {
    a = 0;
  }, d;
}
function tn(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e;
  return (...o) => {
    let a = 0, d = 0, v, O = {}, E = o.pop();
    typeof E == "object" && (O = E, E = o.pop()), co(
      E,
      `createSelector expects an output function after the inputs, but received: [${typeof E}]`
    );
    const S = {
      ...r,
      ...O
    }, {
      memoize: g,
      memoizeOptions: y = [],
      argsMemoize: l = Ke,
      argsMemoizeOptions: u = [],
      devModeChecks: p = {}
    } = S, f = yr(y), m = yr(u), h = uo(o), s = g(function() {
      return a++, E.apply(
        null,
        arguments
      );
    }, ...f);
    let i = !0;
    const c = l(function() {
      d++;
      const b = hr(
        h,
        arguments
      );
      if (process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: R, inputStabilityCheck: w } = lo(i, p);
        if (R.shouldRun && R.run(
          E
        ), w.shouldRun) {
          const T = hr(
            h,
            arguments
          );
          w.run(
            { inputSelectorResults: b, inputSelectorResultsCopy: T },
            { memoize: g, memoizeOptions: f },
            arguments
          );
        }
        i && (i = !1);
      }
      return v = s.apply(null, b), v;
    }, ...m);
    return Object.assign(c, {
      resultFunc: E,
      memoizedResultFunc: s,
      dependencies: h,
      dependencyRecomputations: () => d,
      resetDependencyRecomputations: () => {
        d = 0;
      },
      lastResult: () => v,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: g,
      argsMemoize: l
    });
  };
}
var rn = /* @__PURE__ */ tn(Ke), ho = (...e) => {
  const t = tn(...e), r = Object.assign((...n) => {
    const o = t(...n), a = (d, ...v) => o(ie(d) ? Xr(d) : d, ...v);
    return Object.assign(a, o), a;
  }, {
    withTypes: () => r
  });
  return r;
}, mo = ho(Ke), go = (e) => e && typeof e.match == "function";
function X(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? U(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Yt(n) && n.type === e, r;
}
function vo(e) {
  return Yt(e) && Object.keys(e).every(So);
}
function So(e) {
  return ["type", "payload", "error", "meta"].indexOf(e) > -1;
}
function gr(e) {
  return se(e) ? $e(e, () => {
  }) : e;
}
function vr(e, t, r) {
  if (e.has(t)) {
    let o = e.get(t);
    return r.update && (o = r.update(o, t, e), e.set(t, o)), o;
  }
  if (!r.insert)
    throw new Error(process.env.NODE_ENV === "production" ? U(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
var ze = "RTK_autoBatch", je = () => (e) => ({
  payload: e,
  meta: {
    [ze]: !0
  }
});
process.env.NODE_ENV;
function nn(e) {
  const t = {}, r = [];
  let n;
  const o = {
    addCase(a, d) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? U(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? U(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const v = typeof a == "string" ? a : a.type;
      if (!v)
        throw new Error(process.env.NODE_ENV === "production" ? U(28) : "`builder.addCase` cannot be called with an empty action type");
      if (v in t)
        throw new Error(process.env.NODE_ENV === "production" ? U(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${v}'`);
      return t[v] = d, o;
    },
    addMatcher(a, d) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? U(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: a,
        reducer: d
      }), o;
    },
    addDefaultCase(a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? U(31) : "`builder.addDefaultCase` can only be called once");
      return n = a, o;
    }
  };
  return e(o), [t, r, n];
}
function Eo(e) {
  return typeof e == "function";
}
function _o(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? U(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = nn(t), a;
  if (Eo(e))
    a = () => gr(e());
  else {
    const v = gr(e);
    a = () => v;
  }
  function d(v = a(), O) {
    let E = [r[O.type], ...n.filter(({
      matcher: S
    }) => S(O)).map(({
      reducer: S
    }) => S)];
    return E.filter((S) => !!S).length === 0 && (E = [o]), E.reduce((S, g) => {
      if (g)
        if (ie(S)) {
          const l = g(S, O);
          return l === void 0 ? S : l;
        } else {
          if (se(S))
            return $e(S, (y) => g(y, O));
          {
            const y = g(S, O);
            if (y === void 0) {
              if (S === null)
                return S;
              throw new Error(process.env.NODE_ENV === "production" ? U(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return y;
          }
        }
      return S;
    }, v);
  }
  return d.getInitialState = a, d;
}
var bo = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Xt = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += bo[Math.random() * 64 | 0];
  return t;
}, on = (e, t) => go(e) ? e.match(t) : e(t);
function he(...e) {
  return (t) => e.some((r) => on(r, t));
}
function Fe(...e) {
  return (t) => e.every((r) => on(r, t));
}
function ft(e, t) {
  if (!e || !e.meta)
    return !1;
  const r = typeof e.meta.requestId == "string", n = t.indexOf(e.meta.requestStatus) > -1;
  return r && n;
}
function Xe(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function Zt(...e) {
  return e.length === 0 ? (t) => ft(t, ["pending"]) : Xe(e) ? (t) => {
    const r = e.map((o) => o.pending);
    return he(...r)(t);
  } : Zt()(e[0]);
}
function De(...e) {
  return e.length === 0 ? (t) => ft(t, ["rejected"]) : Xe(e) ? (t) => {
    const r = e.map((o) => o.rejected);
    return he(...r)(t);
  } : De()(e[0]);
}
function pt(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0 ? (r) => Fe(De(...e), t)(r) : Xe(e) ? (r) => Fe(De(...e), t)(r) : pt()(e[0]);
}
function me(...e) {
  return e.length === 0 ? (t) => ft(t, ["fulfilled"]) : Xe(e) ? (t) => {
    const r = e.map((o) => o.fulfilled);
    return he(...r)(t);
  } : me()(e[0]);
}
function Ft(...e) {
  return e.length === 0 ? (t) => ft(t, ["pending", "fulfilled", "rejected"]) : Xe(e) ? (t) => {
    const r = [];
    for (const o of e)
      r.push(o.pending, o.rejected, o.fulfilled);
    return he(...r)(t);
  } : Ft()(e[0]);
}
var Oo = ["name", "message", "stack", "code"], Tt = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    _t(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Sr = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    _t(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Ro = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of Oo)
      typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return {
    message: String(e)
  };
}, Er = /* @__PURE__ */ (() => {
  function e(t, r, n) {
    const o = X(t + "/fulfilled", (O, E, S, g) => ({
      payload: O,
      meta: {
        ...g || {},
        arg: S,
        requestId: E,
        requestStatus: "fulfilled"
      }
    })), a = X(t + "/pending", (O, E, S) => ({
      payload: void 0,
      meta: {
        ...S || {},
        arg: E,
        requestId: O,
        requestStatus: "pending"
      }
    })), d = X(t + "/rejected", (O, E, S, g, y) => ({
      payload: g,
      error: (n && n.serializeError || Ro)(O || "Rejected"),
      meta: {
        ...y || {},
        arg: S,
        requestId: E,
        rejectedWithValue: !!g,
        requestStatus: "rejected",
        aborted: (O == null ? void 0 : O.name) === "AbortError",
        condition: (O == null ? void 0 : O.name) === "ConditionError"
      }
    }));
    function v(O) {
      return (E, S, g) => {
        const y = n != null && n.idGenerator ? n.idGenerator(O) : Xt(), l = new AbortController();
        let u, p;
        function f(h) {
          p = h, l.abort();
        }
        const m = async function() {
          var i, c;
          let h;
          try {
            let _ = (i = n == null ? void 0 : n.condition) == null ? void 0 : i.call(n, O, {
              getState: S,
              extra: g
            });
            if (To(_) && (_ = await _), _ === !1 || l.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const b = new Promise((R, w) => {
              u = () => {
                w({
                  name: "AbortError",
                  message: p || "Aborted"
                });
              }, l.signal.addEventListener("abort", u);
            });
            E(a(y, O, (c = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : c.call(n, {
              requestId: y,
              arg: O
            }, {
              getState: S,
              extra: g
            }))), h = await Promise.race([b, Promise.resolve(r(O, {
              dispatch: E,
              getState: S,
              extra: g,
              requestId: y,
              signal: l.signal,
              abort: f,
              rejectWithValue: (R, w) => new Tt(R, w),
              fulfillWithValue: (R, w) => new Sr(R, w)
            })).then((R) => {
              if (R instanceof Tt)
                throw R;
              return R instanceof Sr ? o(R.payload, y, O, R.meta) : o(R, y, O);
            })]);
          } catch (_) {
            h = _ instanceof Tt ? d(null, y, O, _.payload, _.meta) : d(_, y, O);
          } finally {
            u && l.signal.removeEventListener("abort", u);
          }
          return n && !n.dispatchConditionRejection && d.match(h) && h.meta.condition || E(h), h;
        }();
        return Object.assign(m, {
          abort: f,
          requestId: y,
          arg: O,
          unwrap() {
            return m.then(wo);
          }
        });
      };
    }
    return Object.assign(v, {
      pending: a,
      rejected: d,
      fulfilled: o,
      settled: he(d, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function wo(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function To(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Co = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Ao(e, t) {
  return `${e}/${t}`;
}
function Mo({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[Co];
  return function(o) {
    const {
      name: a,
      reducerPath: d = a
    } = o;
    if (!a)
      throw new Error(process.env.NODE_ENV === "production" ? U(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const v = (typeof o.reducers == "function" ? o.reducers(Io()) : o.reducers) || {}, O = Object.keys(v), E = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, S = {
      addCase(s, i) {
        const c = typeof s == "string" ? s : s.type;
        if (!c)
          throw new Error(process.env.NODE_ENV === "production" ? U(12) : "`context.addCase` cannot be called with an empty action type");
        if (c in E.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? U(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + c);
        return E.sliceCaseReducersByType[c] = i, S;
      },
      addMatcher(s, i) {
        return E.sliceMatchers.push({
          matcher: s,
          reducer: i
        }), S;
      },
      exposeAction(s, i) {
        return E.actionCreators[s] = i, S;
      },
      exposeCaseReducer(s, i) {
        return E.sliceCaseReducersByName[s] = i, S;
      }
    };
    O.forEach((s) => {
      const i = v[s], c = {
        reducerName: s,
        type: Ao(a, s),
        createNotation: typeof o.reducers == "function"
      };
      Do(i) ? qo(c, i, S, t) : No(c, i, S);
    });
    function g() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? U(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [s = {}, i = [], c = void 0] = typeof o.extraReducers == "function" ? nn(o.extraReducers) : [o.extraReducers], _ = {
        ...s,
        ...E.sliceCaseReducersByType
      };
      return _o(o.initialState, (b) => {
        for (let R in _)
          b.addCase(R, _[R]);
        for (let R of E.sliceMatchers)
          b.addMatcher(R.matcher, R.reducer);
        for (let R of i)
          b.addMatcher(R.matcher, R.reducer);
        c && b.addDefaultCase(c);
      });
    }
    const y = (s) => s, l = /* @__PURE__ */ new Map();
    let u;
    function p(s, i) {
      return u || (u = g()), u(s, i);
    }
    function f() {
      return u || (u = g()), u.getInitialState();
    }
    function m(s, i = !1) {
      function c(b) {
        let R = b[s];
        if (typeof R > "u") {
          if (i)
            R = f();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? U(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return R;
      }
      function _(b = y) {
        const R = vr(l, i, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return vr(R, b, {
          insert: () => {
            const w = {};
            for (const [T, A] of Object.entries(o.selectors ?? {}))
              w[T] = Po(A, b, f, i);
            return w;
          }
        });
      }
      return {
        reducerPath: s,
        getSelectors: _,
        get selectors() {
          return _(c);
        },
        selectSlice: c
      };
    }
    const h = {
      name: a,
      reducer: p,
      actions: E.actionCreators,
      caseReducers: E.sliceCaseReducersByName,
      getInitialState: f,
      ...m(d),
      injectInto(s, {
        reducerPath: i,
        ...c
      } = {}) {
        const _ = i ?? d;
        return s.inject({
          reducerPath: _,
          reducer: p
        }, c), {
          ...h,
          ...m(_, !0)
        };
      }
    };
    return h;
  };
}
function Po(e, t, r, n) {
  function o(a, ...d) {
    let v = t(a);
    if (typeof v > "u") {
      if (n)
        v = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? U(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(v, ...d);
  }
  return o.unwrapped = e, o;
}
var Ce = /* @__PURE__ */ Mo();
function Io() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function No({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let a, d;
  if ("reducer" in n) {
    if (r && !$o(n))
      throw new Error(process.env.NODE_ENV === "production" ? U(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    a = n.reducer, d = n.prepare;
  } else
    a = n;
  o.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, d ? X(e, d) : X(e));
}
function Do(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function $o(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function qo({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? U(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: a,
    fulfilled: d,
    pending: v,
    rejected: O,
    settled: E,
    options: S
  } = r, g = o(e, a, S);
  n.exposeAction(t, g), d && n.addCase(g.fulfilled, d), v && n.addCase(g.pending, v), O && n.addCase(g.rejected, O), E && n.addMatcher(g.settled, E), n.exposeCaseReducer(t, {
    fulfilled: d || rt,
    pending: v || rt,
    rejected: O || rt,
    settled: E || rt
  });
}
function rt() {
}
function jo() {
  return {
    ids: [],
    entities: {}
  };
}
function ko(e) {
  function t(r = {}, n) {
    const o = Object.assign(jo(), r);
    return n ? e.setAll(o, n) : o;
  }
  return {
    getInitialState: t
  };
}
function xo() {
  function e(t, r = {}) {
    const {
      createSelector: n = mo
    } = r, o = (g) => g.ids, a = (g) => g.entities, d = n(o, a, (g, y) => g.map((l) => y[l])), v = (g, y) => y, O = (g, y) => g[y], E = n(o, (g) => g.length);
    if (!t)
      return {
        selectIds: o,
        selectEntities: a,
        selectAll: d,
        selectTotal: E,
        selectById: n(a, v, O)
      };
    const S = n(t, a);
    return {
      selectIds: n(t, o),
      selectEntities: S,
      selectAll: n(t, d),
      selectTotal: n(t, E),
      selectById: n(S, v, O)
    };
  }
  return {
    getSelectors: e
  };
}
var zo = ie;
function Lo(e) {
  const t = K((r, n) => e(n));
  return function(n) {
    return t(n, void 0);
  };
}
function K(e) {
  return function(r, n) {
    function o(d) {
      return vo(d);
    }
    const a = (d) => {
      o(n) ? e(n.payload, d) : e(n, d);
    };
    return zo(r) ? (a(r), r) : $e(r, a);
  };
}
function Pe(e, t) {
  const r = t(e);
  return process.env.NODE_ENV !== "production" && r === void 0 && console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", e, "The `selectId` implementation:", t.toString()), r;
}
function Ee(e) {
  return Array.isArray(e) || (e = Object.values(e)), e;
}
function sn(e, t, r) {
  e = Ee(e);
  const n = [], o = [];
  for (const a of e) {
    const d = Pe(a, t);
    d in r.entities ? o.push({
      id: d,
      changes: a
    }) : n.push(a);
  }
  return [n, o];
}
function cn(e) {
  function t(u, p) {
    const f = Pe(u, e);
    f in p.entities || (p.ids.push(f), p.entities[f] = u);
  }
  function r(u, p) {
    u = Ee(u);
    for (const f of u)
      t(f, p);
  }
  function n(u, p) {
    const f = Pe(u, e);
    f in p.entities || p.ids.push(f), p.entities[f] = u;
  }
  function o(u, p) {
    u = Ee(u);
    for (const f of u)
      n(f, p);
  }
  function a(u, p) {
    u = Ee(u), p.ids = [], p.entities = {}, r(u, p);
  }
  function d(u, p) {
    return v([u], p);
  }
  function v(u, p) {
    let f = !1;
    u.forEach((m) => {
      m in p.entities && (delete p.entities[m], f = !0);
    }), f && (p.ids = p.ids.filter((m) => m in p.entities));
  }
  function O(u) {
    Object.assign(u, {
      ids: [],
      entities: {}
    });
  }
  function E(u, p, f) {
    const m = f.entities[p.id];
    if (m === void 0)
      return !1;
    const h = Object.assign({}, m, p.changes), s = Pe(h, e), i = s !== p.id;
    return i && (u[p.id] = s, delete f.entities[p.id]), f.entities[s] = h, i;
  }
  function S(u, p) {
    return g([u], p);
  }
  function g(u, p) {
    const f = {}, m = {};
    u.forEach((s) => {
      s.id in p.entities && (m[s.id] = {
        id: s.id,
        // Spreads ignore falsy values, so this works even if there isn't
        // an existing update already at this key
        changes: {
          ...m[s.id] ? m[s.id].changes : null,
          ...s.changes
        }
      });
    }), u = Object.values(m), u.length > 0 && u.filter((i) => E(f, i, p)).length > 0 && (p.ids = Object.values(p.entities).map((i) => Pe(i, e)));
  }
  function y(u, p) {
    return l([u], p);
  }
  function l(u, p) {
    const [f, m] = sn(u, e, p);
    g(m, p), r(f, p);
  }
  return {
    removeAll: Lo(O),
    addOne: K(t),
    addMany: K(r),
    setOne: K(n),
    setMany: K(o),
    setAll: K(a),
    updateOne: K(S),
    updateMany: K(g),
    upsertOne: K(y),
    upsertMany: K(l),
    removeOne: K(d),
    removeMany: K(v)
  };
}
function Vo(e, t) {
  const {
    removeOne: r,
    removeMany: n,
    removeAll: o
  } = cn(e);
  function a(m, h) {
    return d([m], h);
  }
  function d(m, h) {
    m = Ee(m);
    const s = m.filter((i) => !(Pe(i, e) in h.entities));
    s.length !== 0 && p(s, h);
  }
  function v(m, h) {
    return O([m], h);
  }
  function O(m, h) {
    m = Ee(m), m.length !== 0 && p(m, h);
  }
  function E(m, h) {
    m = Ee(m), h.entities = {}, h.ids = [], d(m, h);
  }
  function S(m, h) {
    return g([m], h);
  }
  function g(m, h) {
    let s = !1;
    for (let i of m) {
      const c = h.entities[i.id];
      if (!c)
        continue;
      s = !0, Object.assign(c, i.changes);
      const _ = e(c);
      i.id !== _ && (delete h.entities[i.id], h.entities[_] = c);
    }
    s && f(h);
  }
  function y(m, h) {
    return l([m], h);
  }
  function l(m, h) {
    const [s, i] = sn(m, e, h);
    g(i, h), d(s, h);
  }
  function u(m, h) {
    if (m.length !== h.length)
      return !1;
    for (let s = 0; s < m.length && s < h.length; s++)
      if (m[s] !== h[s])
        return !1;
    return !0;
  }
  function p(m, h) {
    m.forEach((s) => {
      h.entities[e(s)] = s;
    }), f(h);
  }
  function f(m) {
    const h = Object.values(m.entities);
    h.sort(t);
    const s = h.map(e), {
      ids: i
    } = m;
    u(i, s) || (m.ids = s);
  }
  return {
    removeOne: r,
    removeMany: n,
    removeAll: o,
    addOne: K(a),
    updateOne: K(S),
    upsertOne: K(y),
    setOne: K(v),
    setMany: K(O),
    setAll: K(E),
    addMany: K(d),
    updateMany: K(g),
    upsertMany: K(l)
  };
}
function we(e = {}) {
  const {
    selectId: t,
    sortComparer: r
  } = {
    sortComparer: !1,
    selectId: (d) => d.id,
    ...e
  }, n = r ? Vo(t, r) : cn(t), o = ko(n), a = xo();
  return {
    selectId: t,
    sortComparer: r,
    ...o,
    ...a,
    ...n
  };
}
var Fo = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? U(32) : `${t} is not a function`);
}, er = "listenerMiddleware", Qo = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: o,
    effect: a
  } = e;
  if (t)
    o = X(t).match;
  else if (r)
    t = r.type, o = r.match;
  else if (n)
    o = n;
  else if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? U(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Fo(a, "options.listener"), {
    predicate: o,
    type: t,
    effect: a
  };
}, Uo = Object.assign((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = Qo(e);
  return {
    id: Xt(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? U(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Uo
}), Bo = Object.assign(X(`${er}/add`), {
  withTypes: () => Bo
});
X(`${er}/removeAll`);
var Wo = Object.assign(X(`${er}/remove`), {
  withTypes: () => Wo
});
function U(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var an = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(an || {});
function Ko(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
function Yo(e) {
  return new RegExp("(^|:)//").test(e);
}
var Ho = (e) => e.replace(/\/$/, ""), Go = (e) => e.replace(/^\//, "");
function Jo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (Yo(t))
    return t;
  const r = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = Ho(e), t = Go(t), `${e}${r}${t}`;
}
var _r = (e) => [].concat(...e);
function Xo() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function Zo() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var br = le;
function un(e, t) {
  if (e === t || !(br(e) && br(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), n = Object.keys(e);
  let o = r.length === n.length;
  const a = Array.isArray(t) ? [] : {};
  for (const d of r)
    a[d] = un(e[d], t[d]), o && (o = e[d] === a[d]);
  return o ? e : a;
}
var Or = (...e) => fetch(...e), ei = (e) => e.status >= 200 && e.status <= 299, ti = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function Rr(e) {
  if (!le(e))
    return e;
  const t = {
    ...e
  };
  for (const [r, n] of Object.entries(t))
    n === void 0 && delete t[r];
  return t;
}
function ri({
  baseUrl: e,
  prepareHeaders: t = (g) => g,
  fetchFn: r = Or,
  paramsSerializer: n,
  isJsonContentType: o = ti,
  jsonContentType: a = "application/json",
  jsonReplacer: d,
  timeout: v,
  responseHandler: O,
  validateStatus: E,
  ...S
} = {}) {
  return typeof fetch > "u" && r === Or && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (y, l) => {
    const {
      signal: u,
      getState: p,
      extra: f,
      endpoint: m,
      forced: h,
      type: s
    } = l;
    let i, {
      url: c,
      headers: _ = new Headers(S.headers),
      params: b = void 0,
      responseHandler: R = O ?? "json",
      validateStatus: w = E ?? ei,
      timeout: T = v,
      ...A
    } = typeof y == "string" ? {
      url: y
    } : y, C = {
      ...S,
      signal: u,
      ...A
    };
    _ = new Headers(Rr(_)), C.headers = await t(_, {
      getState: p,
      extra: f,
      endpoint: m,
      forced: h,
      type: s
    }) || _;
    const I = (z) => typeof z == "object" && (le(z) || Array.isArray(z) || typeof z.toJSON == "function");
    if (!C.headers.has("content-type") && I(C.body) && C.headers.set("content-type", a), I(C.body) && o(C.headers) && (C.body = JSON.stringify(C.body, d)), b) {
      const z = ~c.indexOf("?") ? "&" : "?", G = n ? n(b) : new URLSearchParams(Rr(b));
      c += z + G;
    }
    c = Jo(e, c);
    const N = new Request(c, C);
    i = {
      request: new Request(c, C)
    };
    let q, x = !1, k = T && setTimeout(() => {
      x = !0, l.abort();
    }, T);
    try {
      q = await r(N);
    } catch (z) {
      return {
        error: {
          status: x ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(z)
        },
        meta: i
      };
    } finally {
      k && clearTimeout(k);
    }
    const W = q.clone();
    i.response = W;
    let j, H = "";
    try {
      let z;
      if (await Promise.all([
        g(q, R).then((G) => j = G, (G) => z = G),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        W.text().then((G) => H = G, () => {
        })
      ]), z)
        throw z;
    } catch (z) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: q.status,
          data: H,
          error: String(z)
        },
        meta: i
      };
    }
    return w(q, j) ? {
      data: j,
      meta: i
    } : {
      error: {
        status: q.status,
        data: j
      },
      meta: i
    };
  };
  async function g(y, l) {
    if (typeof l == "function")
      return l(y);
    if (l === "content-type" && (l = o(y.headers) ? "json" : "text"), l === "json") {
      const u = await y.text();
      return u.length ? JSON.parse(u) : null;
    }
    return y.text();
  }
}
var wr = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, tr = /* @__PURE__ */ X("__rtkq/focused"), ln = /* @__PURE__ */ X("__rtkq/unfocused"), rr = /* @__PURE__ */ X("__rtkq/online"), dn = /* @__PURE__ */ X("__rtkq/offline");
function fn(e) {
  return e.type === "query";
}
function ni(e) {
  return e.type === "mutation";
}
function nr(e, t, r, n, o, a) {
  return oi(e) ? e(t, r, n, o).map(Qt).map(a) : Array.isArray(e) ? e.map(Qt).map(a) : [];
}
function oi(e) {
  return typeof e == "function";
}
function Qt(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Tr(e) {
  return e != null;
}
function Ie(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
function ii(e, t) {
  return e.catch(t);
}
var Ye = Symbol("forceQueryFn"), Ut = (e) => typeof e[Ye] == "function";
function si({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: r,
  api: n,
  context: o
}) {
  const a = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: v,
    removeMutationResult: O,
    updateSubscriptionOptions: E
  } = n.internalActions;
  return {
    buildInitiateQuery: p,
    buildInitiateMutation: f,
    getRunningQueryThunk: S,
    getRunningMutationThunk: g,
    getRunningQueriesThunk: y,
    getRunningMutationsThunk: l
  };
  function S(m, h) {
    return (s) => {
      var _;
      const i = o.endpointDefinitions[m], c = e({
        queryArgs: h,
        endpointDefinition: i,
        endpointName: m
      });
      return (_ = a.get(s)) == null ? void 0 : _[c];
    };
  }
  function g(m, h) {
    return (s) => {
      var i;
      return (i = d.get(s)) == null ? void 0 : i[h];
    };
  }
  function y() {
    return (m) => Object.values(a.get(m) || {}).filter(Tr);
  }
  function l() {
    return (m) => Object.values(d.get(m) || {}).filter(Tr);
  }
  function u(m) {
    if (process.env.NODE_ENV !== "production") {
      if (u.triggered)
        return;
      const h = m(n.internalActions.internal_getRTKQSubscriptions());
      if (u.triggered = !0, typeof h != "object" || typeof (h == null ? void 0 : h.type) == "string")
        throw new Error(process.env.NODE_ENV === "production" ? U(34) : `Warning: Middleware for RTK-Query API at reducerPath "${n.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function p(m, h) {
    const s = (i, {
      subscribe: c = !0,
      forceRefetch: _,
      subscriptionOptions: b,
      [Ye]: R,
      ...w
    } = {}) => (T, A) => {
      var G;
      const C = e({
        queryArgs: i,
        endpointDefinition: h,
        endpointName: m
      }), I = t({
        ...w,
        type: "query",
        subscribe: c,
        forceRefetch: _,
        subscriptionOptions: b,
        endpointName: m,
        originalArgs: i,
        queryCacheKey: C,
        [Ye]: R
      }), N = n.endpoints[m].select(i), D = T(I), q = N(A());
      u(T);
      const {
        requestId: x,
        abort: k
      } = D, W = q.requestId !== x, j = (G = a.get(T)) == null ? void 0 : G[C], H = () => N(A()), z = Object.assign(R ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        D.then(H)
      ) : W && !j ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(q)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([j, D]).then(H)
      ), {
        arg: i,
        requestId: x,
        subscriptionOptions: b,
        queryCacheKey: C,
        abort: k,
        async unwrap() {
          const J = await z;
          if (J.isError)
            throw J.error;
          return J.data;
        },
        refetch: () => T(s(i, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          c && T(v({
            queryCacheKey: C,
            requestId: x
          }));
        },
        updateSubscriptionOptions(J) {
          z.subscriptionOptions = J, T(E({
            endpointName: m,
            requestId: x,
            queryCacheKey: C,
            options: J
          }));
        }
      });
      if (!j && !W && !R) {
        const J = a.get(T) || {};
        J[C] = z, a.set(T, J), z.then(() => {
          delete J[C], Ie(J) || a.delete(T);
        });
      }
      return z;
    };
    return s;
  }
  function f(m) {
    return (h, {
      track: s = !0,
      fixedCacheKey: i
    } = {}) => (c, _) => {
      const b = r({
        type: "mutation",
        endpointName: m,
        originalArgs: h,
        track: s,
        fixedCacheKey: i
      }), R = c(b);
      u(c);
      const {
        requestId: w,
        abort: T,
        unwrap: A
      } = R, C = ii(R.unwrap().then((q) => ({
        data: q
      })), (q) => ({
        error: q
      })), I = () => {
        c(O({
          requestId: w,
          fixedCacheKey: i
        }));
      }, N = Object.assign(C, {
        arg: R.arg,
        requestId: w,
        abort: T,
        unwrap: A,
        reset: I
      }), D = d.get(c) || {};
      return d.set(c, D), D[w] = N, N.then(() => {
        delete D[w], Ie(D) || d.delete(c);
      }), i && (D[i] = N, N.then(() => {
        D[i] === N && (delete D[i], Ie(D) || d.delete(c));
      })), N;
    };
  }
}
function Cr(e) {
  return e;
}
function ci({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: r
  },
  serializeQueryArgs: n,
  api: o,
  assertTagType: a
}) {
  const d = (h, s, i, c) => (_, b) => {
    const R = r[h], w = n({
      queryArgs: s,
      endpointDefinition: R,
      endpointName: h
    });
    if (_(o.internalActions.queryResultPatched({
      queryCacheKey: w,
      patches: i
    })), !c)
      return;
    const T = o.endpoints[h].select(s)(
      // Work around TS 4.1 mismatch
      b()
    ), A = nr(R.providesTags, T.data, void 0, s, {}, a);
    _(o.internalActions.updateProvidedBy({
      queryCacheKey: w,
      providedTags: A
    }));
  }, v = (h, s, i, c = !0) => (_, b) => {
    const w = o.endpoints[h].select(s)(
      // Work around TS 4.1 mismatch
      b()
    );
    let T = {
      patches: [],
      inversePatches: [],
      undo: () => _(o.util.patchQueryData(h, s, T.inversePatches, c))
    };
    if (w.status === "uninitialized")
      return T;
    let A;
    if ("data" in w)
      if (se(w.data)) {
        const [C, I, N] = en(w.data, i);
        T.patches.push(...I), T.inversePatches.push(...N), A = C;
      } else
        A = i(w.data), T.patches.push({
          op: "replace",
          path: [],
          value: A
        }), T.inversePatches.push({
          op: "replace",
          path: [],
          value: w.data
        });
    return _(o.util.patchQueryData(h, s, T.patches, c)), T;
  }, O = (h, s, i) => (c) => c(o.endpoints[h].initiate(s, {
    subscribe: !1,
    forceRefetch: !0,
    [Ye]: () => ({
      data: i
    })
  })), E = async (h, {
    signal: s,
    abort: i,
    rejectWithValue: c,
    fulfillWithValue: _,
    dispatch: b,
    getState: R,
    extra: w
  }) => {
    const T = r[h.endpointName];
    try {
      let A = Cr, C;
      const I = {
        signal: s,
        abort: i,
        dispatch: b,
        getState: R,
        extra: w,
        endpoint: h.endpointName,
        type: h.type,
        forced: h.type === "query" ? S(h, R()) : void 0
      }, N = h.type === "query" ? h[Ye] : void 0;
      if (N ? C = N() : T.query ? (C = await t(T.query(h.originalArgs), I, T.extraOptions), T.transformResponse && (A = T.transformResponse)) : C = await T.queryFn(h.originalArgs, I, T.extraOptions, (D) => t(D, I, T.extraOptions)), typeof process < "u" && process.env.NODE_ENV === "development") {
        const D = T.query ? "`baseQuery`" : "`queryFn`";
        let q;
        if (!C)
          q = `${D} did not return anything.`;
        else if (typeof C != "object")
          q = `${D} did not return an object.`;
        else if (C.error && C.data)
          q = `${D} returned an object containing both \`error\` and \`result\`.`;
        else if (C.error === void 0 && C.data === void 0)
          q = `${D} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
        else
          for (const x of Object.keys(C))
            if (x !== "error" && x !== "data" && x !== "meta") {
              q = `The object returned by ${D} has the unknown property ${x}.`;
              break;
            }
        q && console.error(`Error encountered handling the endpoint ${h.endpointName}.
              ${q}
              It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
              Object returned was:`, C);
      }
      if (C.error)
        throw new wr(C.error, C.meta);
      return _(await A(C.data, C.meta, h.originalArgs), {
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: C.meta,
        [ze]: !0
      });
    } catch (A) {
      let C = A;
      if (C instanceof wr) {
        let I = Cr;
        T.query && T.transformErrorResponse && (I = T.transformErrorResponse);
        try {
          return c(await I(C.value, C.meta, h.originalArgs), {
            baseQueryMeta: C.meta,
            [ze]: !0
          });
        } catch (N) {
          C = N;
        }
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${h.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, C) : console.error(C), C;
    }
  };
  function S(h, s) {
    var R, w, T;
    const i = (w = (R = s[e]) == null ? void 0 : R.queries) == null ? void 0 : w[h.queryCacheKey], c = (T = s[e]) == null ? void 0 : T.config.refetchOnMountOrArgChange, _ = i == null ? void 0 : i.fulfilledTimeStamp, b = h.forceRefetch ?? (h.subscribe && c);
    return b ? b === !0 || (Number(/* @__PURE__ */ new Date()) - Number(_)) / 1e3 >= b : !1;
  }
  const g = Er(`${e}/executeQuery`, E, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [ze]: !0
      };
    },
    condition(h, {
      getState: s
    }) {
      var T, A, C;
      const i = s(), c = (A = (T = i[e]) == null ? void 0 : T.queries) == null ? void 0 : A[h.queryCacheKey], _ = c == null ? void 0 : c.fulfilledTimeStamp, b = h.originalArgs, R = c == null ? void 0 : c.originalArgs, w = r[h.endpointName];
      return Ut(h) ? !0 : (c == null ? void 0 : c.status) === "pending" ? !1 : S(h, i) || fn(w) && ((C = w == null ? void 0 : w.forceRefetch) != null && C.call(w, {
        currentArg: b,
        previousArg: R,
        endpointState: c,
        state: i
      })) ? !0 : !_;
    },
    dispatchConditionRejection: !0
  }), y = Er(`${e}/executeMutation`, E, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [ze]: !0
      };
    }
  }), l = (h) => "force" in h, u = (h) => "ifOlderThan" in h, p = (h, s, i) => (c, _) => {
    const b = l(i) && i.force, R = u(i) && i.ifOlderThan, w = (A = !0) => {
      const C = {
        forceRefetch: A,
        isPrefetch: !0
      };
      return o.endpoints[h].initiate(s, C);
    }, T = o.endpoints[h].select(s)(_());
    if (b)
      c(w());
    else if (R) {
      const A = T == null ? void 0 : T.fulfilledTimeStamp;
      if (!A) {
        c(w());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(A))) / 1e3 >= R && c(w());
    } else
      c(w(!1));
  };
  function f(h) {
    return (s) => {
      var i, c;
      return ((c = (i = s == null ? void 0 : s.meta) == null ? void 0 : i.arg) == null ? void 0 : c.endpointName) === h;
    };
  }
  function m(h, s) {
    return {
      matchPending: Fe(Zt(h), f(s)),
      matchFulfilled: Fe(me(h), f(s)),
      matchRejected: Fe(De(h), f(s))
    };
  }
  return {
    queryThunk: g,
    mutationThunk: y,
    prefetch: p,
    updateQueryData: v,
    upsertQueryData: O,
    patchQueryData: d,
    buildMatchThunkActions: m
  };
}
function pn(e, t, r, n) {
  return nr(r[e.meta.arg.endpointName][t], me(e) ? e.payload : void 0, pt(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, n);
}
function nt(e, t, r) {
  const n = e[t];
  n && r(n);
}
function He(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Ar(e, t, r) {
  const n = e[He(t)];
  n && r(n);
}
var ke = {};
function ai({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  context: {
    endpointDefinitions: n,
    apiUid: o,
    extractRehydrationInfo: a,
    hasRehydrationInfo: d
  },
  assertTagType: v,
  config: O
}) {
  const E = X(`${e}/resetApiState`), S = Ce({
    name: `${e}/queries`,
    initialState: ke,
    reducers: {
      removeQueryResult: {
        reducer(s, {
          payload: {
            queryCacheKey: i
          }
        }) {
          delete s[i];
        },
        prepare: je()
      },
      queryResultPatched: {
        reducer(s, {
          payload: {
            queryCacheKey: i,
            patches: c
          }
        }) {
          nt(s, i, (_) => {
            _.data = pr(_.data, c.concat());
          });
        },
        prepare: je()
      }
    },
    extraReducers(s) {
      s.addCase(t.pending, (i, {
        meta: c,
        meta: {
          arg: _
        }
      }) => {
        var R;
        const b = Ut(_);
        i[R = _.queryCacheKey] ?? (i[R] = {
          status: "uninitialized",
          endpointName: _.endpointName
        }), nt(i, _.queryCacheKey, (w) => {
          w.status = "pending", w.requestId = b && w.requestId ? (
            // for `upsertQuery` **updates**, keep the current `requestId`
            w.requestId
          ) : (
            // for normal queries or `upsertQuery` **inserts** always update the `requestId`
            c.requestId
          ), _.originalArgs !== void 0 && (w.originalArgs = _.originalArgs), w.startedTimeStamp = c.startedTimeStamp;
        });
      }).addCase(t.fulfilled, (i, {
        meta: c,
        payload: _
      }) => {
        nt(i, c.arg.queryCacheKey, (b) => {
          if (b.requestId !== c.requestId && !Ut(c.arg))
            return;
          const {
            merge: R
          } = n[c.arg.endpointName];
          if (b.status = "fulfilled", R)
            if (b.data !== void 0) {
              const {
                fulfilledTimeStamp: w,
                arg: T,
                baseQueryMeta: A,
                requestId: C
              } = c;
              let I = $e(b.data, (N) => R(N, _, {
                arg: T.originalArgs,
                baseQueryMeta: A,
                fulfilledTimeStamp: w,
                requestId: C
              }));
              b.data = I;
            } else
              b.data = _;
          else
            b.data = n[c.arg.endpointName].structuralSharing ?? !0 ? un(ie(b.data) ? Yn(b.data) : b.data, _) : _;
          delete b.error, b.fulfilledTimeStamp = c.fulfilledTimeStamp;
        });
      }).addCase(t.rejected, (i, {
        meta: {
          condition: c,
          arg: _,
          requestId: b
        },
        error: R,
        payload: w
      }) => {
        nt(i, _.queryCacheKey, (T) => {
          if (!c) {
            if (T.requestId !== b)
              return;
            T.status = "rejected", T.error = w ?? R;
          }
        });
      }).addMatcher(d, (i, c) => {
        const {
          queries: _
        } = a(c);
        for (const [b, R] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((R == null ? void 0 : R.status) === "fulfilled" || (R == null ? void 0 : R.status) === "rejected") && (i[b] = R);
      });
    }
  }), g = Ce({
    name: `${e}/mutations`,
    initialState: ke,
    reducers: {
      removeMutationResult: {
        reducer(s, {
          payload: i
        }) {
          const c = He(i);
          c in s && delete s[c];
        },
        prepare: je()
      }
    },
    extraReducers(s) {
      s.addCase(r.pending, (i, {
        meta: c,
        meta: {
          requestId: _,
          arg: b,
          startedTimeStamp: R
        }
      }) => {
        b.track && (i[He(c)] = {
          requestId: _,
          status: "pending",
          endpointName: b.endpointName,
          startedTimeStamp: R
        });
      }).addCase(r.fulfilled, (i, {
        payload: c,
        meta: _
      }) => {
        _.arg.track && Ar(i, _, (b) => {
          b.requestId === _.requestId && (b.status = "fulfilled", b.data = c, b.fulfilledTimeStamp = _.fulfilledTimeStamp);
        });
      }).addCase(r.rejected, (i, {
        payload: c,
        error: _,
        meta: b
      }) => {
        b.arg.track && Ar(i, b, (R) => {
          R.requestId === b.requestId && (R.status = "rejected", R.error = c ?? _);
        });
      }).addMatcher(d, (i, c) => {
        const {
          mutations: _
        } = a(c);
        for (const [b, R] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((R == null ? void 0 : R.status) === "fulfilled" || (R == null ? void 0 : R.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          b !== (R == null ? void 0 : R.requestId) && (i[b] = R);
      });
    }
  }), y = Ce({
    name: `${e}/invalidation`,
    initialState: ke,
    reducers: {
      updateProvidedBy: {
        reducer(s, i) {
          var b, R;
          const {
            queryCacheKey: c,
            providedTags: _
          } = i.payload;
          for (const w of Object.values(s))
            for (const T of Object.values(w)) {
              const A = T.indexOf(c);
              A !== -1 && T.splice(A, 1);
            }
          for (const {
            type: w,
            id: T
          } of _) {
            const A = (b = s[w] ?? (s[w] = {}))[R = T || "__internal_without_id"] ?? (b[R] = []);
            A.includes(c) || A.push(c);
          }
        },
        prepare: je()
      }
    },
    extraReducers(s) {
      s.addCase(S.actions.removeQueryResult, (i, {
        payload: {
          queryCacheKey: c
        }
      }) => {
        for (const _ of Object.values(i))
          for (const b of Object.values(_)) {
            const R = b.indexOf(c);
            R !== -1 && b.splice(R, 1);
          }
      }).addMatcher(d, (i, c) => {
        var b, R;
        const {
          provided: _
        } = a(c);
        for (const [w, T] of Object.entries(_))
          for (const [A, C] of Object.entries(T)) {
            const I = (b = i[w] ?? (i[w] = {}))[R = A || "__internal_without_id"] ?? (b[R] = []);
            for (const N of C)
              I.includes(N) || I.push(N);
          }
      }).addMatcher(he(me(t), pt(t)), (i, c) => {
        const _ = pn(c, "providesTags", n, v), {
          queryCacheKey: b
        } = c.meta.arg;
        y.caseReducers.updateProvidedBy(i, y.actions.updateProvidedBy({
          queryCacheKey: b,
          providedTags: _
        }));
      });
    }
  }), l = Ce({
    name: `${e}/subscriptions`,
    initialState: ke,
    reducers: {
      updateSubscriptionOptions(s, i) {
      },
      unsubscribeQueryResult(s, i) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), u = Ce({
    name: `${e}/internalSubscriptions`,
    initialState: ke,
    reducers: {
      subscriptionsUpdated: {
        reducer(s, i) {
          return pr(s, i.payload);
        },
        prepare: je()
      }
    }
  }), p = Ce({
    name: `${e}/config`,
    initialState: {
      online: Xo(),
      focused: Zo(),
      middlewareRegistered: !1,
      ...O
    },
    reducers: {
      middlewareRegistered(s, {
        payload: i
      }) {
        s.middlewareRegistered = s.middlewareRegistered === "conflict" || o !== i ? "conflict" : !0;
      }
    },
    extraReducers: (s) => {
      s.addCase(rr, (i) => {
        i.online = !0;
      }).addCase(dn, (i) => {
        i.online = !1;
      }).addCase(tr, (i) => {
        i.focused = !0;
      }).addCase(ln, (i) => {
        i.focused = !1;
      }).addMatcher(d, (i) => ({
        ...i
      }));
    }
  }), f = Wn({
    queries: S.reducer,
    mutations: g.reducer,
    provided: y.reducer,
    subscriptions: u.reducer,
    config: p.reducer
  }), m = (s, i) => f(E.match(i) ? void 0 : s, i), h = {
    ...p.actions,
    ...S.actions,
    ...l.actions,
    ...u.actions,
    ...g.actions,
    ...y.actions,
    resetApiState: E
  };
  return {
    reducer: m,
    actions: h
  };
}
var Se = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), yn = {
  status: "uninitialized"
  /* uninitialized */
}, Mr = /* @__PURE__ */ $e(yn, () => {
}), Pr = /* @__PURE__ */ $e(yn, () => {
});
function ui({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const n = (g) => Mr, o = (g) => Pr;
  return {
    buildQuerySelector: v,
    buildMutationSelector: O,
    selectInvalidatedBy: E,
    selectCachedArgsForQuery: S
  };
  function a(g) {
    return {
      ...g,
      ...Ko(g.status)
    };
  }
  function d(g) {
    const y = g[t];
    if (process.env.NODE_ENV !== "production" && !y) {
      if (d.triggered)
        return y;
      d.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return y;
  }
  function v(g, y) {
    return (l) => {
      const u = e({
        queryArgs: l,
        endpointDefinition: y,
        endpointName: g
      });
      return r(l === Se ? n : (m) => {
        var h, s;
        return ((s = (h = d(m)) == null ? void 0 : h.queries) == null ? void 0 : s[u]) ?? Mr;
      }, a);
    };
  }
  function O() {
    return (g) => {
      let y;
      return typeof g == "object" ? y = He(g) ?? Se : y = g, r(y === Se ? o : (p) => {
        var f, m;
        return ((m = (f = d(p)) == null ? void 0 : f.mutations) == null ? void 0 : m[y]) ?? Pr;
      }, a);
    };
  }
  function E(g, y) {
    const l = g[t], u = /* @__PURE__ */ new Set();
    for (const p of y.map(Qt)) {
      const f = l.provided[p.type];
      if (!f)
        continue;
      let m = (p.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        f[p.id]
      ) : (
        // no id: invalidate all queries that provide this type
        _r(Object.values(f))
      )) ?? [];
      for (const h of m)
        u.add(h);
    }
    return _r(Array.from(u.values()).map((p) => {
      const f = l.queries[p];
      return f ? [{
        queryCacheKey: p,
        endpointName: f.endpointName,
        originalArgs: f.originalArgs
      }] : [];
    }));
  }
  function S(g, y) {
    return Object.values(g[t].queries).filter(
      (l) => (l == null ? void 0 : l.endpointName) === y && l.status !== "uninitialized"
      /* uninitialized */
    ).map((l) => l.originalArgs);
  }
}
var Ae = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Ir = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = Ae == null ? void 0 : Ae.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const o = JSON.stringify(t, (a, d) => le(d) ? Object.keys(d).sort().reduce((v, O) => (v[O] = d[O], v), {}) : d);
    le(t) && (Ae == null || Ae.set(t, o)), r = o;
  }
  return `${e}(${r})`;
};
function li(...e) {
  return function(r) {
    const n = Ke((E) => {
      var S;
      return (S = r.extractRehydrationInfo) == null ? void 0 : S.call(r, E, {
        reducerPath: r.reducerPath ?? "api"
      });
    }), o = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...r,
      extractRehydrationInfo: n,
      serializeQueryArgs(E) {
        let S = Ir;
        if ("serializeQueryArgs" in E.endpointDefinition) {
          const g = E.endpointDefinition.serializeQueryArgs;
          S = (y) => {
            const l = g(y);
            return typeof l == "string" ? l : Ir({
              ...y,
              queryArgs: l
            });
          };
        } else
          r.serializeQueryArgs && (S = r.serializeQueryArgs);
        return S(E);
      },
      tagTypes: [...r.tagTypes || []]
    }, a = {
      endpointDefinitions: {},
      batch(E) {
        E();
      },
      apiUid: Xt(),
      extractRehydrationInfo: n,
      hasRehydrationInfo: Ke((E) => n(E) != null)
    }, d = {
      injectEndpoints: O,
      enhanceEndpoints({
        addTagTypes: E,
        endpoints: S
      }) {
        if (E)
          for (const g of E)
            o.tagTypes.includes(g) || o.tagTypes.push(g);
        if (S)
          for (const [g, y] of Object.entries(S))
            typeof y == "function" ? y(a.endpointDefinitions[g]) : Object.assign(a.endpointDefinitions[g] || {}, y);
        return d;
      }
    }, v = e.map((E) => E.init(d, o, a));
    function O(E) {
      const S = E.endpoints({
        query: (g) => ({
          ...g,
          type: "query"
          /* query */
        }),
        mutation: (g) => ({
          ...g,
          type: "mutation"
          /* mutation */
        })
      });
      for (const [g, y] of Object.entries(S)) {
        if (E.overrideExisting !== !0 && g in a.endpointDefinitions) {
          if (E.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? U(39) : `called \`injectEndpoints\` to override already-existing endpointName ${g} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${g} without specifying \`overrideExisting: true\``);
          continue;
        }
        a.endpointDefinitions[g] = y;
        for (const l of v)
          l.injectEndpoint(g, y);
      }
      return d;
    }
    return d.injectEndpoints({
      endpoints: r.endpoints
    });
  };
}
function di(e) {
  for (let t in e)
    return !1;
  return !0;
}
var fi = 2147483647 / 1e3 - 1, pi = ({
  reducerPath: e,
  api: t,
  context: r,
  internalState: n
}) => {
  const {
    removeQueryResult: o,
    unsubscribeQueryResult: a
  } = t.internalActions;
  function d(S) {
    const g = n.currentSubscriptions[S];
    return !!g && !di(g);
  }
  const v = {}, O = (S, g, y) => {
    var l;
    if (a.match(S)) {
      const u = g.getState()[e], {
        queryCacheKey: p
      } = S.payload;
      E(p, (l = u.queries[p]) == null ? void 0 : l.endpointName, g, u.config);
    }
    if (t.util.resetApiState.match(S))
      for (const [u, p] of Object.entries(v))
        p && clearTimeout(p), delete v[u];
    if (r.hasRehydrationInfo(S)) {
      const u = g.getState()[e], {
        queries: p
      } = r.extractRehydrationInfo(S);
      for (const [f, m] of Object.entries(p))
        E(f, m == null ? void 0 : m.endpointName, g, u.config);
    }
  };
  function E(S, g, y, l) {
    const u = r.endpointDefinitions[g], p = (u == null ? void 0 : u.keepUnusedDataFor) ?? l.keepUnusedDataFor;
    if (p === 1 / 0)
      return;
    const f = Math.max(0, Math.min(p, fi));
    if (!d(S)) {
      const m = v[S];
      m && clearTimeout(m), v[S] = setTimeout(() => {
        d(S) || y.dispatch(o({
          queryCacheKey: S
        })), delete v[S];
      }, f * 1e3);
    }
  }
  return O;
}, yi = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: r
  },
  mutationThunk: n,
  queryThunk: o,
  api: a,
  assertTagType: d,
  refetchQuery: v,
  internalState: O
}) => {
  const {
    removeQueryResult: E
  } = a.internalActions, S = he(me(n), pt(n)), g = he(me(n, o), De(n, o));
  let y = [];
  const l = (f, m) => {
    S(f) ? p(pn(f, "invalidatesTags", r, d), m) : g(f) ? p([], m) : a.util.invalidateTags.match(f) && p(nr(f.payload, void 0, void 0, void 0, void 0, d), m);
  };
  function u(f) {
    var m, h;
    for (const s in f.queries)
      if (((m = f.queries[s]) == null ? void 0 : m.status) === "pending")
        return !0;
    for (const s in f.mutations)
      if (((h = f.mutations[s]) == null ? void 0 : h.status) === "pending")
        return !0;
    return !1;
  }
  function p(f, m) {
    const h = m.getState(), s = h[e];
    if (y.push(...f), s.config.invalidationBehavior === "delayed" && u(s))
      return;
    const i = y;
    if (y = [], i.length === 0)
      return;
    const c = a.util.selectInvalidatedBy(h, i);
    t.batch(() => {
      const _ = Array.from(c.values());
      for (const {
        queryCacheKey: b
      } of _) {
        const R = s.queries[b], w = O.currentSubscriptions[b] ?? {};
        R && (Ie(w) === 0 ? m.dispatch(E({
          queryCacheKey: b
        })) : R.status !== "uninitialized" && m.dispatch(v(R, b)));
      }
    });
  }
  return l;
}, hi = ({
  reducerPath: e,
  queryThunk: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const a = {}, d = (y, l) => {
    (r.internalActions.updateSubscriptionOptions.match(y) || r.internalActions.unsubscribeQueryResult.match(y)) && O(y.payload, l), (t.pending.match(y) || t.rejected.match(y) && y.meta.condition) && O(y.meta.arg, l), (t.fulfilled.match(y) || t.rejected.match(y) && !y.meta.condition) && v(y.meta.arg, l), r.util.resetApiState.match(y) && S();
  };
  function v({
    queryCacheKey: y
  }, l) {
    const u = l.getState()[e], p = u.queries[y], f = o.currentSubscriptions[y];
    if (!p || p.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: m,
      skipPollingIfUnfocused: h
    } = g(f);
    if (!Number.isFinite(m))
      return;
    const s = a[y];
    s != null && s.timeout && (clearTimeout(s.timeout), s.timeout = void 0);
    const i = Date.now() + m;
    a[y] = {
      nextPollTimestamp: i,
      pollingInterval: m,
      timeout: setTimeout(() => {
        (u.config.focused || !h) && l.dispatch(n(p, y)), v({
          queryCacheKey: y
        }, l);
      }, m)
    };
  }
  function O({
    queryCacheKey: y
  }, l) {
    const p = l.getState()[e].queries[y], f = o.currentSubscriptions[y];
    if (!p || p.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: m
    } = g(f);
    if (!Number.isFinite(m)) {
      E(y);
      return;
    }
    const h = a[y], s = Date.now() + m;
    (!h || s < h.nextPollTimestamp) && v({
      queryCacheKey: y
    }, l);
  }
  function E(y) {
    const l = a[y];
    l != null && l.timeout && clearTimeout(l.timeout), delete a[y];
  }
  function S() {
    for (const y of Object.keys(a))
      E(y);
  }
  function g(y = {}) {
    let l = !1, u = Number.POSITIVE_INFINITY;
    for (let p in y)
      y[p].pollingInterval && (u = Math.min(y[p].pollingInterval, u), l = y[p].skipPollingIfUnfocused || l);
    return {
      lowestPollingInterval: u,
      skipPollingIfUnfocused: l
    };
  }
  return d;
}, mi = ({
  reducerPath: e,
  context: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const {
    removeQueryResult: a
  } = r.internalActions, d = (O, E) => {
    tr.match(O) && v(E, "refetchOnFocus"), rr.match(O) && v(E, "refetchOnReconnect");
  };
  function v(O, E) {
    const S = O.getState()[e], g = S.queries, y = o.currentSubscriptions;
    t.batch(() => {
      for (const l of Object.keys(y)) {
        const u = g[l], p = y[l];
        if (!p || !u)
          continue;
        (Object.values(p).some((m) => m[E] === !0) || Object.values(p).every((m) => m[E] === void 0) && S.config[E]) && (Ie(p) === 0 ? O.dispatch(a({
          queryCacheKey: l
        })) : u.status !== "uninitialized" && O.dispatch(n(u, l)));
      }
    });
  }
  return d;
}, Nr = new Error("Promise never resolved before cacheEntryRemoved."), gi = ({
  api: e,
  reducerPath: t,
  context: r,
  queryThunk: n,
  mutationThunk: o,
  internalState: a
}) => {
  const d = Ft(n), v = Ft(o), O = me(n, o), E = {}, S = (l, u, p) => {
    const f = g(l);
    if (n.pending.match(l)) {
      const m = p[t].queries[f], h = u.getState()[t].queries[f];
      !m && h && y(l.meta.arg.endpointName, l.meta.arg.originalArgs, f, u, l.meta.requestId);
    } else if (o.pending.match(l))
      u.getState()[t].mutations[f] && y(l.meta.arg.endpointName, l.meta.arg.originalArgs, f, u, l.meta.requestId);
    else if (O(l)) {
      const m = E[f];
      m != null && m.valueResolved && (m.valueResolved({
        data: l.payload,
        meta: l.meta.baseQueryMeta
      }), delete m.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(l) || e.internalActions.removeMutationResult.match(l)) {
      const m = E[f];
      m && (delete E[f], m.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(l))
      for (const [m, h] of Object.entries(E))
        delete E[m], h.cacheEntryRemoved();
  };
  function g(l) {
    return d(l) ? l.meta.arg.queryCacheKey : v(l) ? l.meta.arg.fixedCacheKey ?? l.meta.requestId : e.internalActions.removeQueryResult.match(l) ? l.payload.queryCacheKey : e.internalActions.removeMutationResult.match(l) ? He(l.payload) : "";
  }
  function y(l, u, p, f, m) {
    const h = r.endpointDefinitions[l], s = h == null ? void 0 : h.onCacheEntryAdded;
    if (!s)
      return;
    let i = {};
    const c = new Promise((A) => {
      i.cacheEntryRemoved = A;
    }), _ = Promise.race([new Promise((A) => {
      i.valueResolved = A;
    }), c.then(() => {
      throw Nr;
    })]);
    _.catch(() => {
    }), E[p] = i;
    const b = e.endpoints[l].select(h.type === "query" ? u : p), R = f.dispatch((A, C, I) => I), w = {
      ...f,
      getCacheEntry: () => b(f.getState()),
      requestId: m,
      extra: R,
      updateCachedData: h.type === "query" ? (A) => f.dispatch(e.util.updateQueryData(l, u, A)) : void 0,
      cacheDataLoaded: _,
      cacheEntryRemoved: c
    }, T = s(u, w);
    Promise.resolve(T).catch((A) => {
      if (A !== Nr)
        throw A;
    });
  }
  return S;
}, vi = ({
  api: e,
  context: t,
  queryThunk: r,
  mutationThunk: n
}) => {
  const o = Zt(r, n), a = De(r, n), d = me(r, n), v = {};
  return (E, S) => {
    var g, y;
    if (o(E)) {
      const {
        requestId: l,
        arg: {
          endpointName: u,
          originalArgs: p
        }
      } = E.meta, f = t.endpointDefinitions[u], m = f == null ? void 0 : f.onQueryStarted;
      if (m) {
        const h = {}, s = new Promise((b, R) => {
          h.resolve = b, h.reject = R;
        });
        s.catch(() => {
        }), v[l] = h;
        const i = e.endpoints[u].select(f.type === "query" ? p : l), c = S.dispatch((b, R, w) => w), _ = {
          ...S,
          getCacheEntry: () => i(S.getState()),
          requestId: l,
          extra: c,
          updateCachedData: f.type === "query" ? (b) => S.dispatch(e.util.updateQueryData(u, p, b)) : void 0,
          queryFulfilled: s
        };
        m(p, _);
      }
    } else if (d(E)) {
      const {
        requestId: l,
        baseQueryMeta: u
      } = E.meta;
      (g = v[l]) == null || g.resolve({
        data: E.payload,
        meta: u
      }), delete v[l];
    } else if (a(E)) {
      const {
        requestId: l,
        rejectedWithValue: u,
        baseQueryMeta: p
      } = E.meta;
      (y = v[l]) == null || y.reject({
        error: E.payload ?? E.error,
        isUnhandledError: !u,
        meta: p
      }), delete v[l];
    }
  };
}, Si = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: r
}) => (n, o) => {
  var a, d;
  e.util.resetApiState.match(n) && o.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(n) && n.payload === t && ((d = (a = o.getState()[r]) == null ? void 0 : a.config) == null ? void 0 : d.middlewareRegistered) === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${r}".
You can only have one api per reducer path, this will lead to crashes in various situations!${r === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, Ei = ({
  api: e,
  queryThunk: t,
  internalState: r
}) => {
  const n = `${e.reducerPath}/subscriptions`;
  let o = null, a = null;
  const {
    updateSubscriptionOptions: d,
    unsubscribeQueryResult: v
  } = e.internalActions, O = (l, u) => {
    var f, m, h;
    if (d.match(u)) {
      const {
        queryCacheKey: s,
        requestId: i,
        options: c
      } = u.payload;
      return (f = l == null ? void 0 : l[s]) != null && f[i] && (l[s][i] = c), !0;
    }
    if (v.match(u)) {
      const {
        queryCacheKey: s,
        requestId: i
      } = u.payload;
      return l[s] && delete l[s][i], !0;
    }
    if (e.internalActions.removeQueryResult.match(u))
      return delete l[u.payload.queryCacheKey], !0;
    if (t.pending.match(u)) {
      const {
        meta: {
          arg: s,
          requestId: i
        }
      } = u, c = l[m = s.queryCacheKey] ?? (l[m] = {});
      return c[`${i}_running`] = {}, s.subscribe && (c[i] = s.subscriptionOptions ?? c[i] ?? {}), !0;
    }
    let p = !1;
    if (t.fulfilled.match(u) || t.rejected.match(u)) {
      const s = l[u.meta.arg.queryCacheKey] || {}, i = `${u.meta.requestId}_running`;
      p || (p = !!s[i]), delete s[i];
    }
    if (t.rejected.match(u)) {
      const {
        meta: {
          condition: s,
          arg: i,
          requestId: c
        }
      } = u;
      if (s && i.subscribe) {
        const _ = l[h = i.queryCacheKey] ?? (l[h] = {});
        _[c] = i.subscriptionOptions ?? _[c] ?? {}, p = !0;
      }
    }
    return p;
  }, E = () => r.currentSubscriptions, y = {
    getSubscriptions: E,
    getSubscriptionCount: (l) => {
      const p = E()[l] ?? {};
      return Ie(p);
    },
    isRequestSubscribed: (l, u) => {
      var f;
      const p = E();
      return !!((f = p == null ? void 0 : p[l]) != null && f[u]);
    }
  };
  return (l, u) => {
    if (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(l))
      return o = r.currentSubscriptions = {}, a = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(l))
      return [!1, y];
    const p = O(r.currentSubscriptions, l);
    let f = !0;
    if (p) {
      a || (a = setTimeout(() => {
        const s = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, i] = en(o, () => s);
        u.next(e.internalActions.subscriptionsUpdated(i)), o = s, a = null;
      }, 500));
      const m = typeof l.type == "string" && !!l.type.startsWith(n), h = t.rejected.match(l) && l.meta.condition && !!l.meta.arg.subscribe;
      f = !m && !h;
    }
    return [f, !1];
  };
};
function _i(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: n,
    context: o
  } = e, {
    apiUid: a
  } = o, d = {
    invalidateTags: X(`${t}/invalidateTags`)
  }, v = (g) => g.type.startsWith(`${t}/`), O = [Si, pi, yi, hi, gi, vi];
  return {
    middleware: (g) => {
      let y = !1;
      const u = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: S,
        isThisApiSliceAction: v
      }, p = O.map((h) => h(u)), f = Ei(u), m = mi(u);
      return (h) => (s) => {
        if (!Yt(s))
          return h(s);
        y || (y = !0, g.dispatch(n.internalActions.middlewareRegistered(a)));
        const i = {
          ...g,
          next: h
        }, c = g.getState(), [_, b] = f(s, i, c);
        let R;
        if (_ ? R = h(s) : R = b, g.getState()[t] && (m(s, i, c), v(s) || o.hasRehydrationInfo(s)))
          for (let w of p)
            w(s, i, c);
        return R;
      };
    },
    actions: d
  };
  function S(g, y, l = {}) {
    return r({
      type: "query",
      endpointName: g.endpointName,
      originalArgs: g.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: y,
      ...l
    });
  }
}
function fe(e, ...t) {
  return Object.assign(e, ...t);
}
var Dr = /* @__PURE__ */ Symbol(), bi = ({
  createSelector: e = rn
} = {}) => ({
  name: Dr,
  init(t, {
    baseQuery: r,
    tagTypes: n,
    reducerPath: o,
    serializeQueryArgs: a,
    keepUnusedDataFor: d,
    refetchOnMountOrArgChange: v,
    refetchOnFocus: O,
    refetchOnReconnect: E,
    invalidationBehavior: S
  }, g) {
    no();
    const y = (k) => (typeof process < "u" && process.env.NODE_ENV === "development" && (n.includes(k.type) || console.error(`Tag type '${k.type}' was used, but not specified in \`tagTypes\`!`)), k);
    Object.assign(t, {
      reducerPath: o,
      endpoints: {},
      internalActions: {
        onOnline: rr,
        onOffline: dn,
        onFocus: tr,
        onFocusLost: ln
      },
      util: {}
    });
    const {
      queryThunk: l,
      mutationThunk: u,
      patchQueryData: p,
      updateQueryData: f,
      upsertQueryData: m,
      prefetch: h,
      buildMatchThunkActions: s
    } = ci({
      baseQuery: r,
      reducerPath: o,
      context: g,
      api: t,
      serializeQueryArgs: a,
      assertTagType: y
    }), {
      reducer: i,
      actions: c
    } = ai({
      context: g,
      queryThunk: l,
      mutationThunk: u,
      reducerPath: o,
      assertTagType: y,
      config: {
        refetchOnFocus: O,
        refetchOnReconnect: E,
        refetchOnMountOrArgChange: v,
        keepUnusedDataFor: d,
        reducerPath: o,
        invalidationBehavior: S
      }
    });
    fe(t.util, {
      patchQueryData: p,
      updateQueryData: f,
      upsertQueryData: m,
      prefetch: h,
      resetApiState: c.resetApiState
    }), fe(t.internalActions, c);
    const {
      middleware: _,
      actions: b
    } = _i({
      reducerPath: o,
      context: g,
      queryThunk: l,
      mutationThunk: u,
      api: t,
      assertTagType: y
    });
    fe(t.util, b), fe(t, {
      reducer: i,
      middleware: _
    });
    const {
      buildQuerySelector: R,
      buildMutationSelector: w,
      selectInvalidatedBy: T,
      selectCachedArgsForQuery: A
    } = ui({
      serializeQueryArgs: a,
      reducerPath: o,
      createSelector: e
    });
    fe(t.util, {
      selectInvalidatedBy: T,
      selectCachedArgsForQuery: A
    });
    const {
      buildInitiateQuery: C,
      buildInitiateMutation: I,
      getRunningMutationThunk: N,
      getRunningMutationsThunk: D,
      getRunningQueriesThunk: q,
      getRunningQueryThunk: x
    } = si({
      queryThunk: l,
      mutationThunk: u,
      api: t,
      serializeQueryArgs: a,
      context: g
    });
    return fe(t.util, {
      getRunningMutationThunk: N,
      getRunningMutationsThunk: D,
      getRunningQueryThunk: x,
      getRunningQueriesThunk: q
    }), {
      name: Dr,
      injectEndpoint(k, W) {
        var H;
        const j = t;
        (H = j.endpoints)[k] ?? (H[k] = {}), fn(W) ? fe(j.endpoints[k], {
          name: k,
          select: R(k, W),
          initiate: C(k, W)
        }, s(l, k)) : ni(W) && fe(j.endpoints[k], {
          name: k,
          select: w(),
          initiate: I(k)
        }, s(u, k));
      }
    };
  }
}), Bt = { exports: {} }, Ct = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $r;
function Oi() {
  if ($r)
    return Ct;
  $r = 1;
  var e = lt;
  function t(g, y) {
    return g === y && (g !== 0 || 1 / g === 1 / y) || g !== g && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, a = e.useLayoutEffect, d = e.useDebugValue;
  function v(g, y) {
    var l = y(), u = n({ inst: { value: l, getSnapshot: y } }), p = u[0].inst, f = u[1];
    return a(function() {
      p.value = l, p.getSnapshot = y, O(p) && f({ inst: p });
    }, [g, l, y]), o(function() {
      return O(p) && f({ inst: p }), g(function() {
        O(p) && f({ inst: p });
      });
    }, [g]), d(l), l;
  }
  function O(g) {
    var y = g.getSnapshot;
    g = g.value;
    try {
      var l = y();
      return !r(g, l);
    } catch {
      return !0;
    }
  }
  function E(g, y) {
    return y();
  }
  var S = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? E : v;
  return Ct.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : S, Ct;
}
var At = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function Ri() {
  return qr || (qr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = lt, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(s) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), _ = 1; _ < i; _++)
          c[_ - 1] = arguments[_];
        n("error", s, c);
      }
    }
    function n(s, i, c) {
      {
        var _ = t.ReactDebugCurrentFrame, b = _.getStackAddendum();
        b !== "" && (i += "%s", c = c.concat([b]));
        var R = c.map(function(w) {
          return String(w);
        });
        R.unshift("Warning: " + i), Function.prototype.apply.call(console[s], console, R);
      }
    }
    function o(s, i) {
      return s === i && (s !== 0 || 1 / s === 1 / i) || s !== s && i !== i;
    }
    var a = typeof Object.is == "function" ? Object.is : o, d = e.useState, v = e.useEffect, O = e.useLayoutEffect, E = e.useDebugValue, S = !1, g = !1;
    function y(s, i, c) {
      S || e.startTransition !== void 0 && (S = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var _ = i();
      if (!g) {
        var b = i();
        a(_, b) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), g = !0);
      }
      var R = d({
        inst: {
          value: _,
          getSnapshot: i
        }
      }), w = R[0].inst, T = R[1];
      return O(function() {
        w.value = _, w.getSnapshot = i, l(w) && T({
          inst: w
        });
      }, [s, _, i]), v(function() {
        l(w) && T({
          inst: w
        });
        var A = function() {
          l(w) && T({
            inst: w
          });
        };
        return s(A);
      }, [s]), E(_), _;
    }
    function l(s) {
      var i = s.getSnapshot, c = s.value;
      try {
        var _ = i();
        return !a(c, _);
      } catch {
        return !0;
      }
    }
    function u(s, i, c) {
      return i();
    }
    var p = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", f = !p, m = f ? u : y, h = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m;
    At.useSyncExternalStore = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), At;
}
process.env.NODE_ENV === "production" ? Bt.exports = Oi() : Bt.exports = Ri();
var hn = Bt.exports, Wt = { exports: {} }, Mt = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr;
function wi() {
  if (jr)
    return Mt;
  jr = 1;
  var e = lt, t = hn;
  function r(E, S) {
    return E === S && (E !== 0 || 1 / E === 1 / S) || E !== E && S !== S;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, a = e.useRef, d = e.useEffect, v = e.useMemo, O = e.useDebugValue;
  return Mt.useSyncExternalStoreWithSelector = function(E, S, g, y, l) {
    var u = a(null);
    if (u.current === null) {
      var p = { hasValue: !1, value: null };
      u.current = p;
    } else
      p = u.current;
    u = v(function() {
      function m(_) {
        if (!h) {
          if (h = !0, s = _, _ = y(_), l !== void 0 && p.hasValue) {
            var b = p.value;
            if (l(b, _))
              return i = b;
          }
          return i = _;
        }
        if (b = i, n(s, _))
          return b;
        var R = y(_);
        return l !== void 0 && l(b, R) ? b : (s = _, i = R);
      }
      var h = !1, s, i, c = g === void 0 ? null : g;
      return [function() {
        return m(S());
      }, c === null ? void 0 : function() {
        return m(c());
      }];
    }, [S, g, y, l]);
    var f = o(E, u[0], u[1]);
    return d(function() {
      p.hasValue = !0, p.value = f;
    }, [f]), O(f), f;
  }, Mt;
}
var Pt = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function Ti() {
  return kr || (kr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = lt, t = hn;
    function r(S, g) {
      return S === g && (S !== 0 || 1 / S === 1 / g) || S !== S && g !== g;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, a = e.useRef, d = e.useEffect, v = e.useMemo, O = e.useDebugValue;
    function E(S, g, y, l, u) {
      var p = a(null), f;
      p.current === null ? (f = {
        hasValue: !1,
        value: null
      }, p.current = f) : f = p.current;
      var m = v(function() {
        var c = !1, _, b, R = function(C) {
          if (!c) {
            c = !0, _ = C;
            var I = l(C);
            if (u !== void 0 && f.hasValue) {
              var N = f.value;
              if (u(N, I))
                return b = N, N;
            }
            return b = I, I;
          }
          var D = _, q = b;
          if (n(D, C))
            return q;
          var x = l(C);
          return u !== void 0 && u(q, x) ? q : (_ = C, b = x, x);
        }, w = y === void 0 ? null : y, T = function() {
          return R(g());
        }, A = w === null ? void 0 : function() {
          return R(w());
        };
        return [T, A];
      }, [g, y, l, u]), h = m[0], s = m[1], i = o(S, h, s);
      return d(function() {
        f.hasValue = !0, f.value = i;
      }, [i]), O(i), i;
    }
    Pt.useSyncExternalStoreWithSelector = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Pt;
}
process.env.NODE_ENV === "production" ? Wt.exports = wi() : Wt.exports = Ti();
var Ci = Wt.exports;
const xr = Symbol.for("react-redux-context"), zr = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ai() {
  var e;
  if (!et.createContext)
    return {};
  const t = (e = zr[xr]) != null ? e : zr[xr] = /* @__PURE__ */ new Map();
  let r = t.get(et.createContext);
  return r || (r = et.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(et.createContext, r)), r;
}
const Re = /* @__PURE__ */ Ai();
function or(e = Re) {
  return function() {
    const r = Nn(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return r;
  };
}
const mn = /* @__PURE__ */ or(), Mi = () => {
  throw new Error("uSES not initialized!");
};
let gn = Mi;
const Pi = (e) => {
  gn = e;
}, Ii = (e, t) => e === t;
function Ni(e = Re) {
  const t = e === Re ? mn : or(e);
  return function(n, o = {}) {
    const {
      equalityFn: a = Ii,
      stabilityCheck: d = void 0,
      noopCheck: v = void 0
    } = typeof o == "function" ? {
      equalityFn: o
    } : o;
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error("You must pass a selector to useSelector");
      if (typeof n != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof a != "function")
        throw new Error("You must pass a function as an equality function to useSelector");
    }
    const {
      store: O,
      subscription: E,
      getServerState: S,
      stabilityCheck: g,
      noopCheck: y
    } = t(), l = ae(!0), u = xe({
      [n.name](f) {
        const m = n(f);
        if (process.env.NODE_ENV !== "production") {
          const h = typeof d > "u" ? g : d;
          if (h === "always" || h === "once" && l.current) {
            const i = n(f);
            if (!a(m, i)) {
              let c;
              try {
                throw new Error();
              } catch (_) {
                ({
                  stack: c
                } = _);
              }
              console.warn("Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`, {
                state: f,
                selected: m,
                selected2: i,
                stack: c
              });
            }
          }
          const s = typeof v > "u" ? y : v;
          if ((s === "always" || s === "once" && l.current) && m === f) {
            let i;
            try {
              throw new Error();
            } catch (c) {
              ({
                stack: i
              } = c);
            }
            console.warn("Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`, {
              stack: i
            });
          }
          l.current && (l.current = !1);
        }
        return m;
      }
    }[n.name], [n, g, d]), p = gn(E.addNestedSub, O.getState, S || O.getState, u, a);
    return $t(p), p;
  };
}
const Di = /* @__PURE__ */ Ni();
var Kt = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr;
function $i() {
  if (Lr)
    return L;
  Lr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, O = e ? Symbol.for("react.async_mode") : 60111, E = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, l = e ? Symbol.for("react.memo") : 60115, u = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, h = e ? Symbol.for("react.scope") : 60119;
  function s(c) {
    if (typeof c == "object" && c !== null) {
      var _ = c.$$typeof;
      switch (_) {
        case t:
          switch (c = c.type, c) {
            case O:
            case E:
            case n:
            case a:
            case o:
            case g:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case v:
                case S:
                case u:
                case l:
                case d:
                  return c;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  function i(c) {
    return s(c) === E;
  }
  return L.AsyncMode = O, L.ConcurrentMode = E, L.ContextConsumer = v, L.ContextProvider = d, L.Element = t, L.ForwardRef = S, L.Fragment = n, L.Lazy = u, L.Memo = l, L.Portal = r, L.Profiler = a, L.StrictMode = o, L.Suspense = g, L.isAsyncMode = function(c) {
    return i(c) || s(c) === O;
  }, L.isConcurrentMode = i, L.isContextConsumer = function(c) {
    return s(c) === v;
  }, L.isContextProvider = function(c) {
    return s(c) === d;
  }, L.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, L.isForwardRef = function(c) {
    return s(c) === S;
  }, L.isFragment = function(c) {
    return s(c) === n;
  }, L.isLazy = function(c) {
    return s(c) === u;
  }, L.isMemo = function(c) {
    return s(c) === l;
  }, L.isPortal = function(c) {
    return s(c) === r;
  }, L.isProfiler = function(c) {
    return s(c) === a;
  }, L.isStrictMode = function(c) {
    return s(c) === o;
  }, L.isSuspense = function(c) {
    return s(c) === g;
  }, L.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === E || c === a || c === o || c === g || c === y || typeof c == "object" && c !== null && (c.$$typeof === u || c.$$typeof === l || c.$$typeof === d || c.$$typeof === v || c.$$typeof === S || c.$$typeof === f || c.$$typeof === m || c.$$typeof === h || c.$$typeof === p);
  }, L.typeOf = s, L;
}
var V = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function qi() {
  return Vr || (Vr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, O = e ? Symbol.for("react.async_mode") : 60111, E = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, l = e ? Symbol.for("react.memo") : 60115, u = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, h = e ? Symbol.for("react.scope") : 60119;
    function s(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === E || M === a || M === o || M === g || M === y || typeof M == "object" && M !== null && (M.$$typeof === u || M.$$typeof === l || M.$$typeof === d || M.$$typeof === v || M.$$typeof === S || M.$$typeof === f || M.$$typeof === m || M.$$typeof === h || M.$$typeof === p);
    }
    function i(M) {
      if (typeof M == "object" && M !== null) {
        var qe = M.$$typeof;
        switch (qe) {
          case t:
            var P = M.type;
            switch (P) {
              case O:
              case E:
              case n:
              case a:
              case o:
              case g:
                return P;
              default:
                var Te = P && P.$$typeof;
                switch (Te) {
                  case v:
                  case S:
                  case u:
                  case l:
                  case d:
                    return Te;
                  default:
                    return qe;
                }
            }
          case r:
            return qe;
        }
      }
    }
    var c = O, _ = E, b = v, R = d, w = t, T = S, A = n, C = u, I = l, N = r, D = a, q = o, x = g, k = !1;
    function W(M) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), j(M) || i(M) === O;
    }
    function j(M) {
      return i(M) === E;
    }
    function H(M) {
      return i(M) === v;
    }
    function z(M) {
      return i(M) === d;
    }
    function G(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function J(M) {
      return i(M) === S;
    }
    function yt(M) {
      return i(M) === n;
    }
    function ht(M) {
      return i(M) === u;
    }
    function mt(M) {
      return i(M) === l;
    }
    function gt(M) {
      return i(M) === r;
    }
    function vt(M) {
      return i(M) === a;
    }
    function St(M) {
      return i(M) === o;
    }
    function Et(M) {
      return i(M) === g;
    }
    V.AsyncMode = c, V.ConcurrentMode = _, V.ContextConsumer = b, V.ContextProvider = R, V.Element = w, V.ForwardRef = T, V.Fragment = A, V.Lazy = C, V.Memo = I, V.Portal = N, V.Profiler = D, V.StrictMode = q, V.Suspense = x, V.isAsyncMode = W, V.isConcurrentMode = j, V.isContextConsumer = H, V.isContextProvider = z, V.isElement = G, V.isForwardRef = J, V.isFragment = yt, V.isLazy = ht, V.isMemo = mt, V.isPortal = gt, V.isProfiler = vt, V.isStrictMode = St, V.isSuspense = Et, V.isValidElementType = s, V.typeOf = i;
  }()), V;
}
process.env.NODE_ENV === "production" ? Kt.exports = $i() : Kt.exports = qi();
var ji = Kt.exports, vn = ji, ki = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, xi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Sn = {};
Sn[vn.ForwardRef] = ki;
Sn[vn.Memo] = xi;
var F = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;
function zi() {
  if (Fr)
    return F;
  Fr = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), d = Symbol.for("react.context"), v = Symbol.for("react.server_context"), O = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), l = Symbol.for("react.offscreen"), u;
  u = Symbol.for("react.module.reference");
  function p(f) {
    if (typeof f == "object" && f !== null) {
      var m = f.$$typeof;
      switch (m) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case E:
            case S:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case v:
                case d:
                case O:
                case y:
                case g:
                case a:
                  return f;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return F.ContextConsumer = d, F.ContextProvider = a, F.Element = e, F.ForwardRef = O, F.Fragment = r, F.Lazy = y, F.Memo = g, F.Portal = t, F.Profiler = o, F.StrictMode = n, F.Suspense = E, F.SuspenseList = S, F.isAsyncMode = function() {
    return !1;
  }, F.isConcurrentMode = function() {
    return !1;
  }, F.isContextConsumer = function(f) {
    return p(f) === d;
  }, F.isContextProvider = function(f) {
    return p(f) === a;
  }, F.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, F.isForwardRef = function(f) {
    return p(f) === O;
  }, F.isFragment = function(f) {
    return p(f) === r;
  }, F.isLazy = function(f) {
    return p(f) === y;
  }, F.isMemo = function(f) {
    return p(f) === g;
  }, F.isPortal = function(f) {
    return p(f) === t;
  }, F.isProfiler = function(f) {
    return p(f) === o;
  }, F.isStrictMode = function(f) {
    return p(f) === n;
  }, F.isSuspense = function(f) {
    return p(f) === E;
  }, F.isSuspenseList = function(f) {
    return p(f) === S;
  }, F.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === E || f === S || f === l || typeof f == "object" && f !== null && (f.$$typeof === y || f.$$typeof === g || f.$$typeof === a || f.$$typeof === d || f.$$typeof === O || f.$$typeof === u || f.getModuleId !== void 0);
  }, F.typeOf = p, F;
}
var Q = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function Li() {
  return Qr || (Qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = !1, t = !1, r = !1, n = !1, o = !1, a = Symbol.for("react.element"), d = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), g = Symbol.for("react.context"), y = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), s;
    s = Symbol.for("react.module.reference");
    function i(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === v || P === E || o || P === O || P === u || P === p || n || P === h || e || t || r || typeof P == "object" && P !== null && (P.$$typeof === m || P.$$typeof === f || P.$$typeof === S || P.$$typeof === g || P.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === s || P.getModuleId !== void 0));
    }
    function c(P) {
      if (typeof P == "object" && P !== null) {
        var Te = P.$$typeof;
        switch (Te) {
          case a:
            var Ze = P.type;
            switch (Ze) {
              case v:
              case E:
              case O:
              case u:
              case p:
                return Ze;
              default:
                var sr = Ze && Ze.$$typeof;
                switch (sr) {
                  case y:
                  case g:
                  case l:
                  case m:
                  case f:
                  case S:
                    return sr;
                  default:
                    return Te;
                }
            }
          case d:
            return Te;
        }
      }
    }
    var _ = g, b = S, R = a, w = l, T = v, A = m, C = f, I = d, N = E, D = O, q = u, x = p, k = !1, W = !1;
    function j(P) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(P) {
      return W || (W = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(P) {
      return c(P) === g;
    }
    function G(P) {
      return c(P) === S;
    }
    function J(P) {
      return typeof P == "object" && P !== null && P.$$typeof === a;
    }
    function yt(P) {
      return c(P) === l;
    }
    function ht(P) {
      return c(P) === v;
    }
    function mt(P) {
      return c(P) === m;
    }
    function gt(P) {
      return c(P) === f;
    }
    function vt(P) {
      return c(P) === d;
    }
    function St(P) {
      return c(P) === E;
    }
    function Et(P) {
      return c(P) === O;
    }
    function M(P) {
      return c(P) === u;
    }
    function qe(P) {
      return c(P) === p;
    }
    Q.ContextConsumer = _, Q.ContextProvider = b, Q.Element = R, Q.ForwardRef = w, Q.Fragment = T, Q.Lazy = A, Q.Memo = C, Q.Portal = I, Q.Profiler = N, Q.StrictMode = D, Q.Suspense = q, Q.SuspenseList = x, Q.isAsyncMode = j, Q.isConcurrentMode = H, Q.isContextConsumer = z, Q.isContextProvider = G, Q.isElement = J, Q.isForwardRef = yt, Q.isFragment = ht, Q.isLazy = mt, Q.isMemo = gt, Q.isPortal = vt, Q.isProfiler = St, Q.isStrictMode = Et, Q.isSuspense = M, Q.isSuspenseList = qe, Q.isValidElementType = i, Q.typeOf = c;
  }()), Q;
}
process.env.NODE_ENV === "production" ? zi() : Li();
function Ur(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Qe(e, t) {
  if (Ur(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Ur(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
function En(e = Re) {
  const t = (
    // @ts-ignore
    e === Re ? mn : (
      // @ts-ignore
      or(e)
    )
  );
  return function() {
    const {
      store: n
    } = t();
    return n;
  };
}
const _n = /* @__PURE__ */ En();
function Vi(e = Re) {
  const t = (
    // @ts-ignore
    e === Re ? _n : En(e)
  );
  return function() {
    return t().dispatch;
  };
}
const Fi = /* @__PURE__ */ Vi();
Pi(Ci.useSyncExternalStoreWithSelector);
function Qi(e) {
  return e.type === "query";
}
function Ui(e) {
  return e.type === "mutation";
}
function ot(e, ...t) {
  return Object.assign(e, ...t);
}
function It(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var Me = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Bi = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = Me == null ? void 0 : Me.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const o = JSON.stringify(t, (a, d) => le(d) ? Object.keys(d).sort().reduce((v, O) => (v[O] = d[O], v), {}) : d);
    le(t) && (Me == null || Me.set(t, o)), r = o;
  }
  return `${e}(${r})`;
}, Nt = Symbol();
function Br(e, t, r, n) {
  const o = ne(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: r,
      endpointName: n
    }) : e
  }), [e, t, r, n]), a = ae(o);
  return pe(() => {
    a.current.serialized !== o.serialized && (a.current = o);
  }, [o]), a.current.serialized === o.serialized ? a.current.queryArgs : e;
}
function Dt(e) {
  const t = ae(e);
  return pe(() => {
    Qe(t.current, e) || (t.current = e);
  }, [e]), Qe(t.current, e) ? t.current : e;
}
var Wi = typeof window < "u" && window.document && window.document.createElement ? Dn : pe, Ki = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: an.pending
} : e;
function Yi({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: r,
      useSelector: n,
      useStore: o
    },
    unstable__sideEffectsInRender: a,
    createSelector: d
  },
  serializeQueryArgs: v,
  context: O
}) {
  const E = a ? (u) => u() : pe;
  return {
    buildQueryHooks: y,
    buildMutationHook: l,
    usePrefetch: g
  };
  function S(u, p, f) {
    if (p != null && p.endpointName && u.isUninitialized) {
      const {
        endpointName: _
      } = p, b = O.endpointDefinitions[_];
      v({
        queryArgs: p.originalArgs,
        endpointDefinition: b,
        endpointName: _
      }) === v({
        queryArgs: f,
        endpointDefinition: b,
        endpointName: _
      }) && (p = void 0);
    }
    let m = u.isSuccess ? u.data : p == null ? void 0 : p.data;
    m === void 0 && (m = u.data);
    const h = m !== void 0, s = u.isLoading, i = !h && s, c = u.isSuccess || s && h;
    return {
      ...u,
      data: m,
      currentData: u.data,
      isFetching: s,
      isLoading: i,
      isSuccess: c
    };
  }
  function g(u, p) {
    const f = r(), m = Dt(p);
    return xe((h, s) => f(e.util.prefetch(u, h, {
      ...m,
      ...s
    })), [u, f, m]);
  }
  function y(u) {
    const p = (h, {
      refetchOnReconnect: s,
      refetchOnFocus: i,
      refetchOnMountOrArgChange: c,
      skip: _ = !1,
      pollingInterval: b = 0,
      skipPollingIfUnfocused: R = !1
    } = {}) => {
      const {
        initiate: w
      } = e.endpoints[u], T = r(), A = ae();
      if (!A.current) {
        const j = T(e.internalActions.internal_getRTKQSubscriptions());
        if (process.env.NODE_ENV !== "production" && (typeof j != "object" || typeof (j == null ? void 0 : j.type) == "string"))
          throw new Error(process.env.NODE_ENV === "production" ? U(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        A.current = j;
      }
      const C = Br(
        _ ? Se : h,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        Bi,
        O.endpointDefinitions[u],
        u
      ), I = Dt({
        refetchOnReconnect: s,
        refetchOnFocus: i,
        pollingInterval: b,
        skipPollingIfUnfocused: R
      }), N = ae(!1), D = ae();
      let {
        queryCacheKey: q,
        requestId: x
      } = D.current || {}, k = !1;
      q && x && (k = A.current.isRequestSubscribed(q, x));
      const W = !k && N.current;
      return E(() => {
        N.current = k;
      }), E(() => {
        W && (D.current = void 0);
      }, [W]), E(() => {
        var z;
        const j = D.current;
        if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(W), C === Se) {
          j == null || j.unsubscribe(), D.current = void 0;
          return;
        }
        const H = (z = D.current) == null ? void 0 : z.subscriptionOptions;
        if (!j || j.arg !== C) {
          j == null || j.unsubscribe();
          const G = T(w(C, {
            subscriptionOptions: I,
            forceRefetch: c
          }));
          D.current = G;
        } else
          I !== H && j.updateSubscriptionOptions(I);
      }, [T, w, c, C, I, W]), pe(() => () => {
        var j;
        (j = D.current) == null || j.unsubscribe(), D.current = void 0;
      }, []), ne(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => {
          var j;
          if (!D.current)
            throw new Error(process.env.NODE_ENV === "production" ? U(38) : "Cannot refetch a query that has not been started yet.");
          return (j = D.current) == null ? void 0 : j.refetch();
        }
      }), []);
    }, f = ({
      refetchOnReconnect: h,
      refetchOnFocus: s,
      pollingInterval: i = 0,
      skipPollingIfUnfocused: c = !1
    } = {}) => {
      const {
        initiate: _
      } = e.endpoints[u], b = r(), [R, w] = cr(Nt), T = ae(), A = Dt({
        refetchOnReconnect: h,
        refetchOnFocus: s,
        pollingInterval: i,
        skipPollingIfUnfocused: c
      });
      E(() => {
        var D, q;
        const N = (D = T.current) == null ? void 0 : D.subscriptionOptions;
        A !== N && ((q = T.current) == null || q.updateSubscriptionOptions(A));
      }, [A]);
      const C = ae(A);
      E(() => {
        C.current = A;
      }, [A]);
      const I = xe(function(N, D = !1) {
        let q;
        return t(() => {
          var x;
          (x = T.current) == null || x.unsubscribe(), T.current = q = b(_(N, {
            subscriptionOptions: C.current,
            forceRefetch: !D
          })), w(N);
        }), q;
      }, [b, _]);
      return pe(() => () => {
        var N;
        (N = T == null ? void 0 : T.current) == null || N.unsubscribe();
      }, []), pe(() => {
        R !== Nt && !T.current && I(R, !0);
      }, [R, I]), ne(() => [I, R], [I, R]);
    }, m = (h, {
      skip: s = !1,
      selectFromResult: i
    } = {}) => {
      const {
        select: c
      } = e.endpoints[u], _ = Br(s ? Se : h, v, O.endpointDefinitions[u], u), b = ae(), R = ne(() => d([c(_), (I, N) => N, (I) => _], S, {
        memoizeOptions: {
          resultEqualityCheck: Qe
        }
      }), [c, _]), w = ne(() => i ? d([R], i, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : R, [R, i]), T = n((I) => w(I, b.current), Qe), A = o(), C = R(A.getState(), b.current);
      return Wi(() => {
        b.current = C;
      }, [C]), T;
    };
    return {
      useQueryState: m,
      useQuerySubscription: p,
      useLazyQuerySubscription: f,
      useLazyQuery(h) {
        const [s, i] = f(h), c = m(i, {
          ...h,
          skip: i === Nt
        }), _ = ne(() => ({
          lastArg: i
        }), [i]);
        return ne(() => [s, c, _], [s, c, _]);
      },
      useQuery(h, s) {
        const i = p(h, s), c = m(h, {
          selectFromResult: h === Se || s != null && s.skip ? void 0 : Ki,
          ...s
        }), {
          data: _,
          status: b,
          isLoading: R,
          isSuccess: w,
          isError: T,
          error: A
        } = c;
        return $t({
          data: _,
          status: b,
          isLoading: R,
          isSuccess: w,
          isError: T,
          error: A
        }), ne(() => ({
          ...c,
          ...i
        }), [c, i]);
      }
    };
  }
  function l(u) {
    return ({
      selectFromResult: p,
      fixedCacheKey: f
    } = {}) => {
      const {
        select: m,
        initiate: h
      } = e.endpoints[u], s = r(), [i, c] = cr();
      pe(() => () => {
        i != null && i.arg.fixedCacheKey || i == null || i.reset();
      }, [i]);
      const _ = xe(function(H) {
        const z = s(h(H, {
          fixedCacheKey: f
        }));
        return c(z), z;
      }, [s, h, f]), {
        requestId: b
      } = i || {}, R = ne(() => m({
        fixedCacheKey: f,
        requestId: i == null ? void 0 : i.requestId
      }), [f, i, m]), w = ne(() => p ? d([R], p) : R, [p, R]), T = n(w, Qe), A = f == null ? i == null ? void 0 : i.arg.originalArgs : void 0, C = xe(() => {
        t(() => {
          i && c(void 0), f && s(e.internalActions.removeMutationResult({
            requestId: b,
            fixedCacheKey: f
          }));
        });
      }, [s, f, i, b]), {
        endpointName: I,
        data: N,
        status: D,
        isLoading: q,
        isSuccess: x,
        isError: k,
        error: W
      } = T;
      $t({
        endpointName: I,
        data: N,
        status: D,
        isLoading: q,
        isSuccess: x,
        isError: k,
        error: W
      });
      const j = ne(() => ({
        ...T,
        originalArgs: A,
        reset: C
      }), [T, A, C]);
      return ne(() => [_, j], [_, j]);
    };
  }
}
function Hi(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
var Gi = /* @__PURE__ */ Symbol(), Ji = ({
  batch: e = $n,
  hooks: t = {
    useDispatch: Fi,
    useSelector: Di,
    useStore: _n
  },
  createSelector: r = rn,
  unstable__sideEffectsInRender: n = !1,
  ...o
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const a = ["useDispatch", "useSelector", "useStore"];
    let d = !1;
    for (const v of a)
      if (Hi(o) > 0 && (o[v] && (d || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), d = !0)), t[v] = o[v]), typeof t[v] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? U(36) : `When using custom hooks for context, all ${a.length} hooks need to be provided: ${a.join(", ")}.
Hook ${v} was either not provided or not a function.`);
  }
  return {
    name: Gi,
    init(a, {
      serializeQueryArgs: d
    }, v) {
      const O = a, {
        buildQueryHooks: E,
        buildMutationHook: S,
        usePrefetch: g
      } = Yi({
        api: a,
        moduleOptions: {
          batch: e,
          hooks: t,
          unstable__sideEffectsInRender: n,
          createSelector: r
        },
        serializeQueryArgs: d,
        context: v
      });
      return ot(O, {
        usePrefetch: g
      }), ot(v, {
        batch: e
      }), {
        injectEndpoint(y, l) {
          if (Qi(l)) {
            const {
              useQuery: u,
              useLazyQuery: p,
              useLazyQuerySubscription: f,
              useQueryState: m,
              useQuerySubscription: h
            } = E(y);
            ot(O.endpoints[y], {
              useQuery: u,
              useLazyQuery: p,
              useLazyQuerySubscription: f,
              useQueryState: m,
              useQuerySubscription: h
            }), a[`use${It(y)}Query`] = u, a[`useLazy${It(y)}Query`] = p;
          } else if (Ui(l)) {
            const u = S(y);
            ot(O.endpoints[y], {
              useMutation: u
            }), a[`use${It(y)}Mutation`] = u;
          }
        }
      };
    }
  };
}, Xi = /* @__PURE__ */ li(bi(), Ji()), $ = /* @__PURE__ */ ((e) => (e.Cashiers = "Cashiers", e.Orders = "Orders", e.Places = "Places", e.Organizations = "Organizations", e.Categories = "Categories", e.Additions = "Additions", e.Menu = "Menu", e.PromoCodes = "PromoCodes", e))($ || {});
const Zi = (e) => {
  const t = ri({ baseUrl: e });
  return async (r, n, o) => {
    const a = await t(r, n, o);
    if ("data" in a) {
      const d = a.data;
      return d != null && d.code ? (alert(`Ошибка: ${d.code}`), { error: { status: 400, data: d } }) : { data: d };
    }
    return a;
  };
}, de = Xi({
  reducerPath: "api",
  tagTypes: Object.values($),
  baseQuery: Zi("/book-eat/api"),
  endpoints: () => ({})
}), Ds = de.injectEndpoints({
  endpoints: (e) => ({
    login: e.mutation({
      query: (t) => ({
        url: "/v1/auth/login",
        method: "POST",
        body: t
      })
    })
  })
}), ct = we({
  selectId: (e) => e.id
}), es = de.injectEndpoints({
  endpoints: (e) => ({
    getCashiers: e.query({
      providesTags: [$.Cashiers],
      query: () => "/v1/users/organization",
      transformResponse: (t) => ct.setAll(ct.getInitialState(), t)
    }),
    createCashier: e.mutation(
      {
        invalidatesTags: [$.Cashiers],
        query: (t) => ({
          url: "/v1/users/place",
          method: "POST",
          body: t
        })
      }
    ),
    deleteCashiers: e.mutation({
      invalidatesTags: [$.Cashiers],
      query: (t) => ({
        url: "/v1/auth/cashier",
        method: "DELETE",
        body: t
      })
    })
  })
}), ts = {
  "@@functional/placeholder": !0
};
function B(e) {
  return e === ts;
}
function ue(e) {
  return function t(r) {
    return arguments.length === 0 || B(r) ? t : e.apply(this, arguments);
  };
}
function ve(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return B(r) ? t : ue(function(o) {
          return e(r, o);
        });
      default:
        return B(r) && B(n) ? t : B(r) ? ue(function(o) {
          return e(o, n);
        }) : B(n) ? ue(function(o) {
          return e(r, o);
        }) : e(r, n);
    }
  };
}
function bn(e, t) {
  switch (e) {
    case 0:
      return function() {
        return t.apply(this, arguments);
      };
    case 1:
      return function(r) {
        return t.apply(this, arguments);
      };
    case 2:
      return function(r, n) {
        return t.apply(this, arguments);
      };
    case 3:
      return function(r, n, o) {
        return t.apply(this, arguments);
      };
    case 4:
      return function(r, n, o, a) {
        return t.apply(this, arguments);
      };
    case 5:
      return function(r, n, o, a, d) {
        return t.apply(this, arguments);
      };
    case 6:
      return function(r, n, o, a, d, v) {
        return t.apply(this, arguments);
      };
    case 7:
      return function(r, n, o, a, d, v, O) {
        return t.apply(this, arguments);
      };
    case 8:
      return function(r, n, o, a, d, v, O, E) {
        return t.apply(this, arguments);
      };
    case 9:
      return function(r, n, o, a, d, v, O, E, S) {
        return t.apply(this, arguments);
      };
    case 10:
      return function(r, n, o, a, d, v, O, E, S, g) {
        return t.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function On(e) {
  return function t(r, n, o) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return B(r) ? t : ve(function(a, d) {
          return e(r, a, d);
        });
      case 2:
        return B(r) && B(n) ? t : B(r) ? ve(function(a, d) {
          return e(a, n, d);
        }) : B(n) ? ve(function(a, d) {
          return e(r, a, d);
        }) : ue(function(a) {
          return e(r, n, a);
        });
      default:
        return B(r) && B(n) && B(o) ? t : B(r) && B(n) ? ve(function(a, d) {
          return e(a, d, o);
        }) : B(r) && B(o) ? ve(function(a, d) {
          return e(a, n, d);
        }) : B(n) && B(o) ? ve(function(a, d) {
          return e(r, a, d);
        }) : B(r) ? ue(function(a) {
          return e(a, n, o);
        }) : B(n) ? ue(function(a) {
          return e(r, a, o);
        }) : B(o) ? ue(function(a) {
          return e(r, n, a);
        }) : e(r, n, o);
    }
  };
}
const Rn = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function rs(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
var ns = /* @__PURE__ */ ue(function(t) {
  return Rn(t) ? !0 : !t || typeof t != "object" || rs(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
});
const os = ns;
var Wr = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function is(e, t, r) {
  return function(o, a, d) {
    if (os(d))
      return e(o, a, d);
    if (d == null)
      return a;
    if (typeof d["fantasy-land/reduce"] == "function")
      return t(o, a, d, "fantasy-land/reduce");
    if (d[Wr] != null)
      return r(o, a, d[Wr]());
    if (typeof d.next == "function")
      return r(o, a, d);
    if (typeof d.reduce == "function")
      return t(o, a, d, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function ss(e, t, r) {
  for (var n = 0, o = r.length; n < o; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
var cs = /* @__PURE__ */ ve(function(t, r) {
  return bn(t.length, function() {
    return t.apply(r, arguments);
  });
});
const as = cs;
function us(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function ls(e, t, r, n) {
  return e["@@transducer/result"](r[n](as(e["@@transducer/step"], e), t));
}
var ds = /* @__PURE__ */ is(ss, ls, us);
const fs = ds;
var ps = /* @__PURE__ */ function() {
  function e(t) {
    this.f = t;
  }
  return e.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  }, e.prototype["@@transducer/result"] = function(t) {
    return t;
  }, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(t, r);
  }, e;
}();
function ys(e) {
  return new ps(e);
}
var hs = /* @__PURE__ */ On(function(e, t, r) {
  return fs(typeof e == "function" ? ys(e) : e, t, r);
});
const ms = hs;
function gs(e, t) {
  return function() {
    return t.call(this, e.apply(this, arguments));
  };
}
function wn(e, t) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return t();
    var n = arguments[r - 1];
    return Rn(n) || typeof n[e] != "function" ? t.apply(this, arguments) : n[e].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var vs = /* @__PURE__ */ On(/* @__PURE__ */ wn("slice", function(t, r, n) {
  return Array.prototype.slice.call(n, t, r);
}));
const Ss = vs;
var Es = /* @__PURE__ */ ue(/* @__PURE__ */ wn("tail", /* @__PURE__ */ Ss(1, 1 / 0)));
const _s = Es;
function re() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return bn(arguments[0].length, ms(gs, arguments[0], _s(arguments)));
}
const bs = es.endpoints.getCashiers.select(), $s = ct.getSelectors(
  re(bs, (e) => e.data ?? ct.getInitialState())
), ce = we({
  selectId: (e) => e.id,
  sortComparer: (e, t) => Number(e.id) - Number(t.id)
}), Tn = de.injectEndpoints({
  endpoints: (e) => ({
    getOrders: e.query({
      providesTags: [$.Orders],
      query: () => ({
        url: "/v1/orders"
      }),
      transformResponse: (t) => ce.setAll(ce.getInitialState(), t)
    }),
    getOrder: e.query({
      providesTags: [$.Orders],
      query: (t) => ({
        url: `/v1/orders/${t}`
      }),
      transformResponse: (t) => ce.setOne(ce.getInitialState(), t)
    }),
    createOrder: e.mutation({
      query: (t) => ({
        url: "/v1/orders",
        method: "POST",
        body: t
      }),
      invalidatesTags: [$.Orders]
    }),
    updateOrderStatus: e.mutation({
      query: ({ id: t, statusVal: r }) => ({
        params: { status: r },
        url: `/v1/orders/${t}/status`,
        method: "PUT"
      }),
      invalidatesTags: [$.Orders]
    }),
    cancelOrder: e.mutation({
      query: (t) => ({
        url: `/v1/orders/${t}/cancel`,
        method: "PUT"
      }),
      invalidatesTags: [$.Orders]
    }),
    confirmOrder: e.mutation({
      query: (t) => ({
        url: `/v1/orders/${t}/confirm`,
        method: "PUT"
      }),
      invalidatesTags: [$.Orders]
    })
  })
}), Cn = Tn.endpoints.getOrders.select(), qs = ce.getSelectors(
  re(Cn, (e) => e.data ?? ce.getInitialState())
), js = ce.getSelectors(
  re(Cn, (e) => e.data ?? ce.getInitialState())
), ks = (e) => {
  const t = Tn.endpoints.getOrder.select(e);
  return ce.getSelectors(
    re(t, (r) => r.data ?? ce.getInitialState())
  );
}, oe = we({
  selectId: (e) => e.id
}), An = de.injectEndpoints({
  endpoints: (e) => ({
    getOrganisation: e.query({
      query: (t) => ({
        url: `v1/organizations/${t}`
      }),
      transformResponse: (t) => oe.setOne(
        oe.getInitialState(),
        t
      ),
      providesTags: [$.Organizations]
    }),
    getCurrentOrganisation: e.query({
      query: () => ({
        url: "v1/organizations/current"
      }),
      transformResponse: (t) => oe.setOne(
        oe.getInitialState(),
        t
      ),
      providesTags: [$.Organizations]
    }),
    getOrganisations: e.query({
      query: () => ({
        url: "/v1/organizations"
      }),
      transformResponse: (t) => oe.setMany(
        oe.getInitialState(),
        t
      ),
      providesTags: [$.Organizations]
    }),
    updateOrg: e.mutation({
      query: (t) => ({
        url: `/v1/organizations/${t.id}`,
        method: "PUT",
        body: t,
        formData: !0
      }),
      transformResponse: (t) => oe.updateOne(
        oe.getInitialState(),
        t
      ),
      invalidatesTags: [$.Organizations]
    })
  })
}), Os = An.endpoints.getOrganisations.select(), xs = oe.getSelectors(
  re(
    An.endpoints.getCurrentOrganisation.select(),
    (e) => e.data ?? oe.getInitialState()
  )
), zs = oe.getSelectors(
  re(
    Os,
    (e) => e.data ?? oe.getInitialState()
  )
), ye = we({
  selectId: (e) => e.id
}), Mn = de.injectEndpoints({
  endpoints: (e) => ({
    fetchPlaces: e.query({
      query: () => ({
        url: "/v1/places"
      }),
      providesTags: [$.Places],
      transformResponse: (t) => ye.setAll(ye.getInitialState(), t)
    }),
    fetchPlacesByOrganization: e.query(
      {
        query: () => ({
          url: "/v1/places/organization"
        }),
        providesTags: [$.Places],
        transformResponse: (t) => ye.setAll(ye.getInitialState(), t)
      }
    ),
    savePlace: e.mutation({
      query: (t) => ({
        url: "/v1/places",
        method: "POST",
        body: t
      }),
      invalidatesTags: [$.Places]
    }),
    editPlace: e.mutation({
      query: (t) => ({
        url: `/v1/places/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [$.Places]
    }),
    deletePlace: e.mutation({
      query: (t) => ({
        url: `/v1/places/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [$.Places]
    })
  })
}), Rs = Mn.endpoints.fetchPlaces.select(), Ls = ye.getSelectors(
  re(
    Mn.endpoints.fetchPlacesByOrganization.select(),
    (e) => e.data ?? ye.getInitialState()
  )
), Vs = ye.getSelectors(
  re(Rs, (e) => e.data ?? ye.getInitialState())
), Z = we({
  selectId: (e) => e.id,
  sortComparer: (e, t) => e.title.localeCompare(t.title)
}), ir = de.injectEndpoints({
  endpoints: (e) => ({
    getMenuByPlaceId: e.query({
      query: (t) => `/v2/products/place/${t}`,
      transformResponse: (t) => Z.setMany(Z.getInitialState(), t),
      providesTags: [$.Menu]
    }),
    getMenuById: e.query({
      query: (t) => `/v2/products/${t}`,
      transformResponse: (t) => Z.setOne(Z.getInitialState(), t),
      providesTags: [$.Menu]
    }),
    getMenuByPlaces: e.query({
      query: () => "/v1/products/place",
      transformResponse: (t) => Z.setAll(Z.getInitialState(), t),
      providesTags: [$.Menu]
    }),
    getMenuByOrganization: e.query({
      query: () => "/v1/products/organization",
      transformResponse: (t) => Z.setAll(Z.getInitialState(), t),
      providesTags: [$.Menu]
    }),
    saveMenu: e.mutation({
      query: (t) => ({
        url: "/v1/products",
        method: "POST",
        body: t
      }),
      invalidatesTags: [$.Menu]
    }),
    editMenu: e.mutation({
      query: (t) => ({
        url: `/v1/products/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [$.Menu]
    }),
    deleteMenu: e.mutation({
      query: (t) => ({
        url: `/menu/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [$.Menu]
    })
  })
}), ws = ir.endpoints.getMenuByOrganization.select(), Fs = Z.getSelectors(
  re(ws, (e) => e.data ?? Z.getInitialState())
), Qs = (e) => {
  const t = ir.endpoints.getMenuByPlaceId.select(e);
  return Z.getSelectors(
    re(t, (r) => r.data ?? Z.getInitialState())
  );
}, Us = (e) => {
  const t = ir.endpoints.getMenuById.select(e);
  return Z.getSelectors(
    re(t, (r) => r.data ?? Z.getInitialState())
  );
}, at = we({
  selectId: (e) => e.id
}), Ts = de.injectEndpoints({
  endpoints: (e) => ({
    fetchAdditions: e.query({
      query: () => "/v1/additions/organization?activeOnly=false",
      providesTags: [$.Additions],
      transformResponse: (t) => at.setAll(at.getInitialState(), t)
    }),
    fetchAdditionsByIds: e.mutation({
      query: (t) => ({
        url: "/v1/additions/list",
        method: "POST",
        body: { ids: t }
      }),
      invalidatesTags: [$.Additions]
    }),
    saveAddition: e.mutation({
      query: (t) => ({
        url: "/v1/additions",
        method: "POST",
        body: t
      }),
      invalidatesTags: [$.Additions]
    }),
    editAddition: e.mutation({
      query: (t) => ({
        url: `/v1/additions/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [$.Additions]
    }),
    deleteAddition: e.mutation({
      query: (t) => ({
        url: `/v1/additions/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [$.Additions]
    })
  })
}), Cs = Ts.endpoints.fetchAdditions.select(), Bs = at.getSelectors(
  re(Cs, (e) => e.data ?? at.getInitialState())
), ut = we({
  selectId: (e) => e.id
}), As = de.injectEndpoints({
  endpoints: (e) => ({
    fetchCategories: e.query({
      query: () => ({
        url: "/v1/categories/organization?activeOnly=false"
      }),
      transformResponse: (t) => ut.setAll(ut.getInitialState(), t),
      providesTags: [$.Categories]
    }),
    updateCategory: e.mutation({
      query: (t) => ({
        url: `/v1/categories/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [$.Categories]
    }),
    createCategory: e.mutation({
      query: (t) => ({
        url: "/v1/categories",
        method: "POST",
        body: { ...t, description: "test" }
      }),
      invalidatesTags: [$.Categories]
    }),
    deleteCategory: e.mutation({
      query: (t) => ({
        url: `/v1/categories/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [$.Categories]
    }),
    loadCategoriesList: e.query({
      query: (t) => ({ url: `/v1/categories/organizations/${t}` }),
      providesTags: [$.Categories]
    }),
    setPriorities: e.mutation({
      query: (t) => ({
        url: "/v1/categories/set-priorities",
        method: "PUT",
        body: { ids: t }
      }),
      invalidatesTags: [$.Categories]
    })
  })
}), Ms = As.endpoints.fetchCategories.select(), Ws = ut.getSelectors(
  re(
    Ms,
    (e) => e.data ?? ut.getInitialState()
  )
), Ks = de.injectEndpoints({
  endpoints: (e) => ({
    fetchPromoCodes: e.query({
      query: () => ({
        url: "/v1/promo-codes/all"
      }),
      providesTags: [$.PromoCodes]
    }),
    fetchPromoCodesByParams: e.query({
      query: (t) => ({
        url: "/v1/promo-codes",
        params: t
      }),
      providesTags: [$.PromoCodes]
    }),
    updatePromoCode: e.mutation({
      query: (t) => ({
        url: `/v1/promo-codes/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [$.PromoCodes]
    }),
    createPromoCode: e.mutation({
      query: (t) => ({
        url: "/v1/promo-codes",
        method: "POST",
        body: t
      }),
      invalidatesTags: [$.PromoCodes]
    }),
    deletePromoCode: e.mutation({
      query: (t) => ({
        url: `/v1/promo-codes/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [$.PromoCodes]
    })
  })
});
export {
  kn as DayOfWeek,
  jn as DeliveryTypeName,
  qn as OrderStatus,
  at as additionsAdapters,
  Ts as additionsEndpoints,
  Bs as additionsSelectors,
  de as api,
  es as cashiersEndpoints,
  $s as cashiersSelectors,
  As as categoriesEndpoints,
  Ws as categoriesSelectors,
  Us as createMenuSelectorsById,
  Qs as createMenuSelectorsByPlaceId,
  xs as currentOrganizationSelector,
  Ds as loginApi,
  ir as menuEndpoints,
  Fs as menuSelectors,
  js as orderByIdSelectors,
  ks as orderByIdSelectorsFactory,
  Tn as ordersEndpoints,
  qs as ordersSelectors,
  An as organizationsEndpoints,
  zs as organizationsSelectors,
  Ls as placesByOrganizationSelectors,
  Mn as placesEndpoints,
  Vs as placesSelectors,
  Ks as promoCodesEndpoints
};
