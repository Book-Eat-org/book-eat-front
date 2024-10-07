var In = Object.defineProperty;
var Nn = (e, t, r) => t in e ? In(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _t = (e, t, r) => (Nn(e, typeof t != "symbol" ? t + "" : t, r), r);
import * as et from "react";
import lt, { useContext as Pn, useRef as ue, useCallback as qe, useDebugValue as $t, useMemo as ne, useState as cr, useEffect as fe, useLayoutEffect as Dn } from "react";
import { unstable_batchedUpdates as $n } from "react-dom";
var kn = /* @__PURE__ */ ((e) => (e.NEW = "NEW", e.PAID = "PAID", e.IN_PROGRESS = "IN_PROGRESS", e.CANCELLED_BY_CLIENT = "CANCELLED_BY_CLIENT", e.CANCELLED_BY_PROVIDER = "CANCELLED_BY_PROVIDER", e.ERROR = "ERROR", e.COMPLETED = "COMPLETED", e))(kn || {}), jn = /* @__PURE__ */ ((e) => (e.DELIVERY = "DELIVERY", e.TO_OUTSIDE = "TO_OUTSIDE", e.ON_PLACE = "ON_PLACE", e))(jn || {}), xn = /* @__PURE__ */ ((e) => (e.Monday = "Понедельник", e.Tuesday = "Вторник", e.Wednesday = "Среда", e.Thursday = "Четверг", e.Friday = "Пятница", e.Saturday = "Суббота", e.Sunday = "Воскресенье", e))(xn || {});
function kt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var bt = () => Math.random().toString(36).substring(7).split("").join("."), qn = {
  INIT: `@@redux/INIT${bt()}`,
  REPLACE: `@@redux/REPLACE${bt()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${bt()}`
}, Le = qn;
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
function ur(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Un(e, t, r, n) {
  const o = Object.keys(t), u = r && r.type === Le.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!le(e))
    return `The ${u} has unexpected type of "${Qn(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const f = Object.keys(e).filter((v) => !t.hasOwnProperty(v) && !n[v]);
  if (f.forEach((v) => {
    n[v] = !0;
  }), !(r && r.type === Le.REPLACE) && f.length > 0)
    return `Unexpected ${f.length > 1 ? "keys" : "key"} "${f.join('", "')}" found in ${u}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function Wn(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Le.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? kt(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Le.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? kt(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Le.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Bn(e) {
  const t = Object.keys(e), r = {};
  for (let f = 0; f < t.length; f++) {
    const v = t[f];
    process.env.NODE_ENV !== "production" && typeof e[v] > "u" && ur(`No reducer provided for key "${v}"`), typeof e[v] == "function" && (r[v] = e[v]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let u;
  try {
    Wn(r);
  } catch (f) {
    u = f;
  }
  return function(v = {}, O) {
    if (u)
      throw u;
    if (process.env.NODE_ENV !== "production") {
      const g = Un(v, r, O, o);
      g && ur(g);
    }
    let E = !1;
    const S = {};
    for (let g = 0; g < n.length; g++) {
      const y = n[g], l = r[y], a = v[y], p = l(a, O);
      if (typeof p > "u") {
        const d = O && O.type;
        throw new Error(process.env.NODE_ENV === "production" ? kt(14) : `When called with an action of type ${d ? `"${String(d)}"` : "(unknown type)"}, the slice reducer for key "${y}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      S[y] = p, E = E || p !== a;
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
function Pe(e, t) {
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
    const u = n[o], f = r[u];
    f.writable === !1 && (f.writable = !0, f.configurable = !0), (f.get || f.set) && (r[u] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: f.enumerable,
      value: e[u]
    });
  }
  return Object.create(_e(e), r);
}
function Gt(e, t = !1) {
  return dt(e) || ie(e) || !se(e) || (be(e) > 1 && (e.set = e.add = e.clear = e.delete = Gn), Object.freeze(e), t && Pe(e, (r, n) => Gt(n, !0))), e;
}
function Gn() {
  Y(2);
}
function dt(e) {
  return Object.isFrozen(e);
}
var xt = {};
function Oe(e) {
  const t = xt[e];
  return t || Y(0, e), t;
}
function Jn(e, t) {
  xt[e] || (xt[e] = t);
}
var We;
function Gr() {
  return We;
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
function ar(e, t) {
  t && (Oe("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function qt(e) {
  zt(e), e.drafts_.forEach(Zn), e.drafts_ = null;
}
function zt(e) {
  e === We && (We = e.parent_);
}
function lr(e) {
  return We = Xn(We, e);
}
function Zn(e) {
  const t = e[ee];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function dr(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[ee].modified_ && (qt(t), Y(4)), se(e) && (e = it(t, e), t.parent_ || st(t, e)), t.patches_ && Oe("Patches").generateReplacementPatches_(
    r[ee].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = it(t, r, []), qt(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ht ? e : void 0;
}
function it(e, t, r) {
  if (dt(t))
    return t;
  const n = t[ee];
  if (!n)
    return Pe(
      t,
      (o, u) => fr(e, n, t, o, u, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return st(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let u = o, f = !1;
    n.type_ === 3 && (u = new Set(o), o.clear(), f = !0), Pe(
      u,
      (v, O) => fr(e, n, o, v, O, r, f)
    ), st(e, o, !1), r && e.patches_ && Oe("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function fr(e, t, r, n, o, u, f) {
  if (process.env.NODE_ENV !== "production" && o === r && Y(5), ie(o)) {
    const v = u && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Ue(t.assigned_, n) ? u.concat(n) : void 0, O = it(e, o, v);
    if (Hr(r, n, O), ie(O))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    f && r.add(o);
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
  let o = n, u = Jt;
  r && (o = [n], u = Be);
  const { revoke: f, proxy: v } = Proxy.revocable(o, u);
  return n.draft_ = v, n.revoke_ = f, v;
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
      const o = Rt(ge(e), t), u = o == null ? void 0 : o[ee];
      if (u && u.base_ === r)
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
}, Be = {};
Pe(Jt, (e, t) => {
  Be[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Be.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Y(13), Be.set.call(this, e, t, void 0);
};
Be.set = function(e, t, r) {
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
        const u = r;
        r = t;
        const f = this;
        return function(O = u, ...E) {
          return f.produce(O, (S) => r.call(this, S, ...E));
        };
      }
      typeof r != "function" && Y(6), n !== void 0 && typeof n != "function" && Y(7);
      let o;
      if (se(t)) {
        const u = lr(this), f = Vt(t, void 0);
        let v = !0;
        try {
          o = r(f), v = !1;
        } finally {
          v ? qt(u) : zt(u);
        }
        return ar(u, n), dr(o, u);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === Ht && (o = void 0), this.autoFreeze_ && Gt(o, !0), n) {
          const u = [], f = [];
          Oe("Patches").generateReplacementPatches_(t, o, u, f), n(u, f);
        }
        return o;
      } else
        Y(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (f, ...v) => this.produceWithPatches(f, (O) => t(O, ...v));
      let n, o;
      return [this.produce(t, r, (f, v) => {
        n = f, o = v;
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
    return ar(n, t), dr(void 0, n);
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
  return Pe(r, (n, o) => {
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
  function o(y, l, a, p) {
    switch (y.type_) {
      case 0:
      case 2:
        return f(
          y,
          l,
          a,
          p
        );
      case 1:
        return u(y, l, a, p);
      case 3:
        return v(
          y,
          l,
          a,
          p
        );
    }
  }
  function u(y, l, a, p) {
    let { base_: d, assigned_: m } = y, h = y.copy_;
    h.length < d.length && ([d, h] = [h, d], [a, p] = [p, a]);
    for (let s = 0; s < d.length; s++)
      if (m[s] && h[s] !== d[s]) {
        const i = l.concat([s]);
        a.push({
          op: t,
          path: i,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: g(h[s])
        }), p.push({
          op: t,
          path: i,
          value: g(d[s])
        });
      }
    for (let s = d.length; s < h.length; s++) {
      const i = l.concat([s]);
      a.push({
        op: r,
        path: i,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: g(h[s])
      });
    }
    for (let s = h.length - 1; d.length <= s; --s) {
      const i = l.concat([s]);
      p.push({
        op: n,
        path: i
      });
    }
  }
  function f(y, l, a, p) {
    const { base_: d, copy_: m } = y;
    Pe(y.assigned_, (h, s) => {
      const i = Ot(d, h), c = Ot(m, h), _ = s ? Ue(d, h) ? t : r : n;
      if (i === c && _ === t)
        return;
      const b = l.concat(h);
      a.push(_ === n ? { op: _, path: b } : { op: _, path: b, value: c }), p.push(
        _ === r ? { op: n, path: b } : _ === n ? { op: r, path: b, value: g(i) } : { op: t, path: b, value: g(i) }
      );
    });
  }
  function v(y, l, a, p) {
    let { base_: d, copy_: m } = y, h = 0;
    d.forEach((s) => {
      if (!m.has(s)) {
        const i = l.concat([h]);
        a.push({
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
      if (!d.has(s)) {
        const i = l.concat([h]);
        a.push({
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
  function O(y, l, a, p) {
    a.push({
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
    return l.forEach((a) => {
      const { path: p, op: d } = a;
      let m = y;
      for (let c = 0; c < p.length - 1; c++) {
        const _ = be(m);
        let b = p[c];
        typeof b != "string" && typeof b != "number" && (b = "" + b), (_ === 0 || _ === 1) && (b === "__proto__" || b === "constructor") && Y(16 + 3), typeof m == "function" && b === "prototype" && Y(16 + 3), m = Ot(m, b), typeof m != "object" && Y(16 + 2, p.join("/"));
      }
      const h = be(m), s = S(a.value), i = p[p.length - 1];
      switch (d) {
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
              return m.delete(a.value);
            default:
              return delete m[i];
          }
        default:
          Y(16 + 1, d);
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
        Array.from(y.entries()).map(([a, p]) => [a, S(p)])
      );
    if (Je(y))
      return new Set(Array.from(y).map(S));
    const l = Object.create(_e(y));
    for (const a in y)
      l[a] = S(y[a]);
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
  const { memoize: n, memoizeOptions: o } = t, { inputSelectorResults: u, inputSelectorResultsCopy: f } = e, v = n(() => ({}), ...o);
  if (!(v.apply(null, u) === v.apply(null, f))) {
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
        firstInputs: u,
        secondInputs: f,
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
function uo(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var yr = (e) => Array.isArray(e) ? e : [e];
function ao(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return uo(
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
  let o, u = 0;
  function f() {
    let v = r;
    const { length: O } = arguments;
    for (let g = 0, y = O; g < y; g++) {
      const l = arguments[g];
      if (typeof l == "function" || typeof l == "object" && l !== null) {
        let a = v.o;
        a === null && (v.o = a = /* @__PURE__ */ new WeakMap());
        const p = a.get(l);
        p === void 0 ? (v = tt(), a.set(l, v)) : v = p;
      } else {
        let a = v.p;
        a === null && (v.p = a = /* @__PURE__ */ new Map());
        const p = a.get(l);
        p === void 0 ? (v = tt(), a.set(l, v)) : v = p;
      }
    }
    const E = v;
    let S;
    if (v.s === mr ? S = v.v : (S = e.apply(null, arguments), u++), E.s = mr, n) {
      const g = (o == null ? void 0 : o.deref()) ?? o;
      g != null && n(g, S) && (S = g, u !== 0 && u--), o = typeof S == "object" && S !== null || typeof S == "function" ? new po(S) : S;
    }
    return E.v = S, S;
  }
  return f.clearCache = () => {
    r = tt(), f.resetResultsCount();
  }, f.resultsCount = () => u, f.resetResultsCount = () => {
    u = 0;
  }, f;
}
function tn(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e;
  return (...o) => {
    let u = 0, f = 0, v, O = {}, E = o.pop();
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
      argsMemoizeOptions: a = [],
      devModeChecks: p = {}
    } = S, d = yr(y), m = yr(a), h = ao(o), s = g(function() {
      return u++, E.apply(
        null,
        arguments
      );
    }, ...d);
    let i = !0;
    const c = l(function() {
      f++;
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
            { memoize: g, memoizeOptions: d },
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
      dependencyRecomputations: () => f,
      resetDependencyRecomputations: () => {
        f = 0;
      },
      lastResult: () => v,
      recomputations: () => u,
      resetRecomputations: () => {
        u = 0;
      },
      memoize: g,
      argsMemoize: l
    });
  };
}
var rn = /* @__PURE__ */ tn(Ke), ho = (...e) => {
  const t = tn(...e), r = Object.assign((...n) => {
    const o = t(...n), u = (f, ...v) => o(ie(f) ? Xr(f) : f, ...v);
    return Object.assign(u, o), u;
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
    addCase(u, f) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? U(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? U(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const v = typeof u == "string" ? u : u.type;
      if (!v)
        throw new Error(process.env.NODE_ENV === "production" ? U(28) : "`builder.addCase` cannot be called with an empty action type");
      if (v in t)
        throw new Error(process.env.NODE_ENV === "production" ? U(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${v}'`);
      return t[v] = f, o;
    },
    addMatcher(u, f) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? U(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: u,
        reducer: f
      }), o;
    },
    addDefaultCase(u) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? U(31) : "`builder.addDefaultCase` can only be called once");
      return n = u, o;
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
  let [r, n, o] = nn(t), u;
  if (Eo(e))
    u = () => gr(e());
  else {
    const v = gr(e);
    u = () => v;
  }
  function f(v = u(), O) {
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
  return f.getInitialState = u, f;
}
var bo = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Xt = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += bo[Math.random() * 64 | 0];
  return t;
}, on = (e, t) => go(e) ? e.match(t) : e(t);
function ye(...e) {
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
    return ye(...r)(t);
  } : Zt()(e[0]);
}
function De(...e) {
  return e.length === 0 ? (t) => ft(t, ["rejected"]) : Xe(e) ? (t) => {
    const r = e.map((o) => o.rejected);
    return ye(...r)(t);
  } : De()(e[0]);
}
function pt(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0 ? (r) => Fe(De(...e), t)(r) : Xe(e) ? (r) => Fe(De(...e), t)(r) : pt()(e[0]);
}
function he(...e) {
  return e.length === 0 ? (t) => ft(t, ["fulfilled"]) : Xe(e) ? (t) => {
    const r = e.map((o) => o.fulfilled);
    return ye(...r)(t);
  } : he()(e[0]);
}
function Ft(...e) {
  return e.length === 0 ? (t) => ft(t, ["pending", "fulfilled", "rejected"]) : Xe(e) ? (t) => {
    const r = [];
    for (const o of e)
      r.push(o.pending, o.rejected, o.fulfilled);
    return ye(...r)(t);
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
    })), u = X(t + "/pending", (O, E, S) => ({
      payload: void 0,
      meta: {
        ...S || {},
        arg: E,
        requestId: O,
        requestStatus: "pending"
      }
    })), f = X(t + "/rejected", (O, E, S, g, y) => ({
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
        let a, p;
        function d(h) {
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
              a = () => {
                w({
                  name: "AbortError",
                  message: p || "Aborted"
                });
              }, l.signal.addEventListener("abort", a);
            });
            E(u(y, O, (c = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : c.call(n, {
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
              abort: d,
              rejectWithValue: (R, w) => new Tt(R, w),
              fulfillWithValue: (R, w) => new Sr(R, w)
            })).then((R) => {
              if (R instanceof Tt)
                throw R;
              return R instanceof Sr ? o(R.payload, y, O, R.meta) : o(R, y, O);
            })]);
          } catch (_) {
            h = _ instanceof Tt ? f(null, y, O, _.payload, _.meta) : f(_, y, O);
          } finally {
            a && l.signal.removeEventListener("abort", a);
          }
          return n && !n.dispatchConditionRejection && f.match(h) && h.meta.condition || E(h), h;
        }();
        return Object.assign(m, {
          abort: d,
          requestId: y,
          arg: O,
          unwrap() {
            return m.then(wo);
          }
        });
      };
    }
    return Object.assign(v, {
      pending: u,
      rejected: f,
      fulfilled: o,
      settled: ye(f, o),
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
      name: u,
      reducerPath: f = u
    } = o;
    if (!u)
      throw new Error(process.env.NODE_ENV === "production" ? U(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const v = (typeof o.reducers == "function" ? o.reducers(No()) : o.reducers) || {}, O = Object.keys(v), E = {
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
        type: Ao(u, s),
        createNotation: typeof o.reducers == "function"
      };
      Do(i) ? ko(c, i, S, t) : Po(c, i, S);
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
    let a;
    function p(s, i) {
      return a || (a = g()), a(s, i);
    }
    function d() {
      return a || (a = g()), a.getInitialState();
    }
    function m(s, i = !1) {
      function c(b) {
        let R = b[s];
        if (typeof R > "u") {
          if (i)
            R = d();
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
              w[T] = Io(A, b, d, i);
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
      name: u,
      reducer: p,
      actions: E.actionCreators,
      caseReducers: E.sliceCaseReducersByName,
      getInitialState: d,
      ...m(f),
      injectInto(s, {
        reducerPath: i,
        ...c
      } = {}) {
        const _ = i ?? f;
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
function Io(e, t, r, n) {
  function o(u, ...f) {
    let v = t(u);
    if (typeof v > "u") {
      if (n)
        v = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? U(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(v, ...f);
  }
  return o.unwrapped = e, o;
}
var Ce = /* @__PURE__ */ Mo();
function No() {
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
function Po({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let u, f;
  if ("reducer" in n) {
    if (r && !$o(n))
      throw new Error(process.env.NODE_ENV === "production" ? U(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    u = n.reducer, f = n.prepare;
  } else
    u = n;
  o.addCase(e, u).exposeCaseReducer(t, u).exposeAction(t, f ? X(e, f) : X(e));
}
function Do(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function $o(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function ko({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? U(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: u,
    fulfilled: f,
    pending: v,
    rejected: O,
    settled: E,
    options: S
  } = r, g = o(e, u, S);
  n.exposeAction(t, g), f && n.addCase(g.fulfilled, f), v && n.addCase(g.pending, v), O && n.addCase(g.rejected, O), E && n.addMatcher(g.settled, E), n.exposeCaseReducer(t, {
    fulfilled: f || rt,
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
function xo(e) {
  function t(r = {}, n) {
    const o = Object.assign(jo(), r);
    return n ? e.setAll(o, n) : o;
  }
  return {
    getInitialState: t
  };
}
function qo() {
  function e(t, r = {}) {
    const {
      createSelector: n = mo
    } = r, o = (g) => g.ids, u = (g) => g.entities, f = n(o, u, (g, y) => g.map((l) => y[l])), v = (g, y) => y, O = (g, y) => g[y], E = n(o, (g) => g.length);
    if (!t)
      return {
        selectIds: o,
        selectEntities: u,
        selectAll: f,
        selectTotal: E,
        selectById: n(u, v, O)
      };
    const S = n(t, u);
    return {
      selectIds: n(t, o),
      selectEntities: S,
      selectAll: n(t, f),
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
    function o(f) {
      return vo(f);
    }
    const u = (f) => {
      o(n) ? e(n.payload, f) : e(n, f);
    };
    return zo(r) ? (u(r), r) : $e(r, u);
  };
}
function Ie(e, t) {
  const r = t(e);
  return process.env.NODE_ENV !== "production" && r === void 0 && console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", e, "The `selectId` implementation:", t.toString()), r;
}
function Ee(e) {
  return Array.isArray(e) || (e = Object.values(e)), e;
}
function sn(e, t, r) {
  e = Ee(e);
  const n = [], o = [];
  for (const u of e) {
    const f = Ie(u, t);
    f in r.entities ? o.push({
      id: f,
      changes: u
    }) : n.push(u);
  }
  return [n, o];
}
function cn(e) {
  function t(a, p) {
    const d = Ie(a, e);
    d in p.entities || (p.ids.push(d), p.entities[d] = a);
  }
  function r(a, p) {
    a = Ee(a);
    for (const d of a)
      t(d, p);
  }
  function n(a, p) {
    const d = Ie(a, e);
    d in p.entities || p.ids.push(d), p.entities[d] = a;
  }
  function o(a, p) {
    a = Ee(a);
    for (const d of a)
      n(d, p);
  }
  function u(a, p) {
    a = Ee(a), p.ids = [], p.entities = {}, r(a, p);
  }
  function f(a, p) {
    return v([a], p);
  }
  function v(a, p) {
    let d = !1;
    a.forEach((m) => {
      m in p.entities && (delete p.entities[m], d = !0);
    }), d && (p.ids = p.ids.filter((m) => m in p.entities));
  }
  function O(a) {
    Object.assign(a, {
      ids: [],
      entities: {}
    });
  }
  function E(a, p, d) {
    const m = d.entities[p.id];
    if (m === void 0)
      return !1;
    const h = Object.assign({}, m, p.changes), s = Ie(h, e), i = s !== p.id;
    return i && (a[p.id] = s, delete d.entities[p.id]), d.entities[s] = h, i;
  }
  function S(a, p) {
    return g([a], p);
  }
  function g(a, p) {
    const d = {}, m = {};
    a.forEach((s) => {
      s.id in p.entities && (m[s.id] = {
        id: s.id,
        // Spreads ignore falsy values, so this works even if there isn't
        // an existing update already at this key
        changes: {
          ...m[s.id] ? m[s.id].changes : null,
          ...s.changes
        }
      });
    }), a = Object.values(m), a.length > 0 && a.filter((i) => E(d, i, p)).length > 0 && (p.ids = Object.values(p.entities).map((i) => Ie(i, e)));
  }
  function y(a, p) {
    return l([a], p);
  }
  function l(a, p) {
    const [d, m] = sn(a, e, p);
    g(m, p), r(d, p);
  }
  return {
    removeAll: Lo(O),
    addOne: K(t),
    addMany: K(r),
    setOne: K(n),
    setMany: K(o),
    setAll: K(u),
    updateOne: K(S),
    updateMany: K(g),
    upsertOne: K(y),
    upsertMany: K(l),
    removeOne: K(f),
    removeMany: K(v)
  };
}
function Vo(e, t) {
  const {
    removeOne: r,
    removeMany: n,
    removeAll: o
  } = cn(e);
  function u(m, h) {
    return f([m], h);
  }
  function f(m, h) {
    m = Ee(m);
    const s = m.filter((i) => !(Ie(i, e) in h.entities));
    s.length !== 0 && p(s, h);
  }
  function v(m, h) {
    return O([m], h);
  }
  function O(m, h) {
    m = Ee(m), m.length !== 0 && p(m, h);
  }
  function E(m, h) {
    m = Ee(m), h.entities = {}, h.ids = [], f(m, h);
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
    s && d(h);
  }
  function y(m, h) {
    return l([m], h);
  }
  function l(m, h) {
    const [s, i] = sn(m, e, h);
    g(i, h), f(s, h);
  }
  function a(m, h) {
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
    }), d(h);
  }
  function d(m) {
    const h = Object.values(m.entities);
    h.sort(t);
    const s = h.map(e), {
      ids: i
    } = m;
    a(i, s) || (m.ids = s);
  }
  return {
    removeOne: r,
    removeMany: n,
    removeAll: o,
    addOne: K(u),
    updateOne: K(S),
    upsertOne: K(y),
    setOne: K(v),
    setMany: K(O),
    setAll: K(E),
    addMany: K(f),
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
    selectId: (f) => f.id,
    ...e
  }, n = r ? Vo(t, r) : cn(t), o = xo(n), u = qo();
  return {
    selectId: t,
    sortComparer: r,
    ...o,
    ...u,
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
    effect: u
  } = e;
  if (t)
    o = X(t).match;
  else if (r)
    t = r.type, o = r.match;
  else if (n)
    o = n;
  else if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? U(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Fo(u, "options.listener"), {
    predicate: o,
    type: t,
    effect: u
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
}), Wo = Object.assign(X(`${er}/add`), {
  withTypes: () => Wo
});
X(`${er}/removeAll`);
var Bo = Object.assign(X(`${er}/remove`), {
  withTypes: () => Bo
});
function U(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var un = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(un || {});
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
function an(e, t) {
  if (e === t || !(br(e) && br(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), n = Object.keys(e);
  let o = r.length === n.length;
  const u = Array.isArray(t) ? [] : {};
  for (const f of r)
    u[f] = an(e[f], t[f]), o && (o = e[f] === u[f]);
  return o ? e : u;
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
  jsonContentType: u = "application/json",
  jsonReplacer: f,
  timeout: v,
  responseHandler: O,
  validateStatus: E,
  ...S
} = {}) {
  return typeof fetch > "u" && r === Or && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (y, l) => {
    const {
      signal: a,
      getState: p,
      extra: d,
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
      signal: a,
      ...A
    };
    _ = new Headers(Rr(_)), C.headers = await t(_, {
      getState: p,
      extra: d,
      endpoint: m,
      forced: h,
      type: s
    }) || _;
    const N = (z) => typeof z == "object" && (le(z) || Array.isArray(z) || typeof z.toJSON == "function");
    if (!C.headers.has("content-type") && N(C.body) && C.headers.set("content-type", u), N(C.body) && o(C.headers) && (C.body = JSON.stringify(C.body, f)), b) {
      const z = ~c.indexOf("?") ? "&" : "?", G = n ? n(b) : new URLSearchParams(Rr(b));
      c += z + G;
    }
    c = Jo(e, c);
    const P = new Request(c, C);
    i = {
      request: new Request(c, C)
    };
    let $, q = !1, x = T && setTimeout(() => {
      q = !0, l.abort();
    }, T);
    try {
      $ = await r(P);
    } catch (z) {
      return {
        error: {
          status: q ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(z)
        },
        meta: i
      };
    } finally {
      x && clearTimeout(x);
    }
    const B = $.clone();
    i.response = B;
    let k, H = "";
    try {
      let z;
      if (await Promise.all([
        g($, R).then((G) => k = G, (G) => z = G),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        B.text().then((G) => H = G, () => {
        })
      ]), z)
        throw z;
    } catch (z) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: $.status,
          data: H,
          error: String(z)
        },
        meta: i
      };
    }
    return w($, k) ? {
      data: k,
      meta: i
    } : {
      error: {
        status: $.status,
        data: k
      },
      meta: i
    };
  };
  async function g(y, l) {
    if (typeof l == "function")
      return l(y);
    if (l === "content-type" && (l = o(y.headers) ? "json" : "text"), l === "json") {
      const a = await y.text();
      return a.length ? JSON.parse(a) : null;
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
function nr(e, t, r, n, o, u) {
  return oi(e) ? e(t, r, n, o).map(Qt).map(u) : Array.isArray(e) ? e.map(Qt).map(u) : [];
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
function Ne(e) {
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
  const u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: v,
    removeMutationResult: O,
    updateSubscriptionOptions: E
  } = n.internalActions;
  return {
    buildInitiateQuery: p,
    buildInitiateMutation: d,
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
      return (_ = u.get(s)) == null ? void 0 : _[c];
    };
  }
  function g(m, h) {
    return (s) => {
      var i;
      return (i = f.get(s)) == null ? void 0 : i[h];
    };
  }
  function y() {
    return (m) => Object.values(u.get(m) || {}).filter(Tr);
  }
  function l() {
    return (m) => Object.values(f.get(m) || {}).filter(Tr);
  }
  function a(m) {
    if (process.env.NODE_ENV !== "production") {
      if (a.triggered)
        return;
      const h = m(n.internalActions.internal_getRTKQSubscriptions());
      if (a.triggered = !0, typeof h != "object" || typeof (h == null ? void 0 : h.type) == "string")
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
      }), N = t({
        ...w,
        type: "query",
        subscribe: c,
        forceRefetch: _,
        subscriptionOptions: b,
        endpointName: m,
        originalArgs: i,
        queryCacheKey: C,
        [Ye]: R
      }), P = n.endpoints[m].select(i), D = T(N), $ = P(A());
      a(T);
      const {
        requestId: q,
        abort: x
      } = D, B = $.requestId !== q, k = (G = u.get(T)) == null ? void 0 : G[C], H = () => P(A()), z = Object.assign(R ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        D.then(H)
      ) : B && !k ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve($)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([k, D]).then(H)
      ), {
        arg: i,
        requestId: q,
        subscriptionOptions: b,
        queryCacheKey: C,
        abort: x,
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
            requestId: q
          }));
        },
        updateSubscriptionOptions(J) {
          z.subscriptionOptions = J, T(E({
            endpointName: m,
            requestId: q,
            queryCacheKey: C,
            options: J
          }));
        }
      });
      if (!k && !B && !R) {
        const J = u.get(T) || {};
        J[C] = z, u.set(T, J), z.then(() => {
          delete J[C], Ne(J) || u.delete(T);
        });
      }
      return z;
    };
    return s;
  }
  function d(m) {
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
      a(c);
      const {
        requestId: w,
        abort: T,
        unwrap: A
      } = R, C = ii(R.unwrap().then(($) => ({
        data: $
      })), ($) => ({
        error: $
      })), N = () => {
        c(O({
          requestId: w,
          fixedCacheKey: i
        }));
      }, P = Object.assign(C, {
        arg: R.arg,
        requestId: w,
        abort: T,
        unwrap: A,
        reset: N
      }), D = f.get(c) || {};
      return f.set(c, D), D[w] = P, P.then(() => {
        delete D[w], Ne(D) || f.delete(c);
      }), i && (D[i] = P, P.then(() => {
        D[i] === P && (delete D[i], Ne(D) || f.delete(c));
      })), P;
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
  assertTagType: u
}) {
  const f = (h, s, i, c) => (_, b) => {
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
    ), A = nr(R.providesTags, T.data, void 0, s, {}, u);
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
        const [C, N, P] = en(w.data, i);
        T.patches.push(...N), T.inversePatches.push(...P), A = C;
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
      const N = {
        signal: s,
        abort: i,
        dispatch: b,
        getState: R,
        extra: w,
        endpoint: h.endpointName,
        type: h.type,
        forced: h.type === "query" ? S(h, R()) : void 0
      }, P = h.type === "query" ? h[Ye] : void 0;
      if (P ? C = P() : T.query ? (C = await t(T.query(h.originalArgs), N, T.extraOptions), T.transformResponse && (A = T.transformResponse)) : C = await T.queryFn(h.originalArgs, N, T.extraOptions, (D) => t(D, N, T.extraOptions)), typeof process < "u" && process.env.NODE_ENV === "development") {
        const D = T.query ? "`baseQuery`" : "`queryFn`";
        let $;
        if (!C)
          $ = `${D} did not return anything.`;
        else if (typeof C != "object")
          $ = `${D} did not return an object.`;
        else if (C.error && C.data)
          $ = `${D} returned an object containing both \`error\` and \`result\`.`;
        else if (C.error === void 0 && C.data === void 0)
          $ = `${D} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
        else
          for (const q of Object.keys(C))
            if (q !== "error" && q !== "data" && q !== "meta") {
              $ = `The object returned by ${D} has the unknown property ${q}.`;
              break;
            }
        $ && console.error(`Error encountered handling the endpoint ${h.endpointName}.
              ${$}
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
        let N = Cr;
        T.query && T.transformErrorResponse && (N = T.transformErrorResponse);
        try {
          return c(await N(C.value, C.meta, h.originalArgs), {
            baseQueryMeta: C.meta,
            [ze]: !0
          });
        } catch (P) {
          C = P;
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
  }), l = (h) => "force" in h, a = (h) => "ifOlderThan" in h, p = (h, s, i) => (c, _) => {
    const b = l(i) && i.force, R = a(i) && i.ifOlderThan, w = (A = !0) => {
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
  function d(h) {
    return (s) => {
      var i, c;
      return ((c = (i = s == null ? void 0 : s.meta) == null ? void 0 : i.arg) == null ? void 0 : c.endpointName) === h;
    };
  }
  function m(h, s) {
    return {
      matchPending: Fe(Zt(h), d(s)),
      matchFulfilled: Fe(he(h), d(s)),
      matchRejected: Fe(De(h), d(s))
    };
  }
  return {
    queryThunk: g,
    mutationThunk: y,
    prefetch: p,
    updateQueryData: v,
    upsertQueryData: O,
    patchQueryData: f,
    buildMatchThunkActions: m
  };
}
function pn(e, t, r, n) {
  return nr(r[e.meta.arg.endpointName][t], he(e) ? e.payload : void 0, pt(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, n);
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
var xe = {};
function ui({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  context: {
    endpointDefinitions: n,
    apiUid: o,
    extractRehydrationInfo: u,
    hasRehydrationInfo: f
  },
  assertTagType: v,
  config: O
}) {
  const E = X(`${e}/resetApiState`), S = Ce({
    name: `${e}/queries`,
    initialState: xe,
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
              let N = $e(b.data, (P) => R(P, _, {
                arg: T.originalArgs,
                baseQueryMeta: A,
                fulfilledTimeStamp: w,
                requestId: C
              }));
              b.data = N;
            } else
              b.data = _;
          else
            b.data = n[c.arg.endpointName].structuralSharing ?? !0 ? an(ie(b.data) ? Yn(b.data) : b.data, _) : _;
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
      }).addMatcher(f, (i, c) => {
        const {
          queries: _
        } = u(c);
        for (const [b, R] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((R == null ? void 0 : R.status) === "fulfilled" || (R == null ? void 0 : R.status) === "rejected") && (i[b] = R);
      });
    }
  }), g = Ce({
    name: `${e}/mutations`,
    initialState: xe,
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
      }).addMatcher(f, (i, c) => {
        const {
          mutations: _
        } = u(c);
        for (const [b, R] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((R == null ? void 0 : R.status) === "fulfilled" || (R == null ? void 0 : R.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          b !== (R == null ? void 0 : R.requestId) && (i[b] = R);
      });
    }
  }), y = Ce({
    name: `${e}/invalidation`,
    initialState: xe,
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
      }).addMatcher(f, (i, c) => {
        var b, R;
        const {
          provided: _
        } = u(c);
        for (const [w, T] of Object.entries(_))
          for (const [A, C] of Object.entries(T)) {
            const N = (b = i[w] ?? (i[w] = {}))[R = A || "__internal_without_id"] ?? (b[R] = []);
            for (const P of C)
              N.includes(P) || N.push(P);
          }
      }).addMatcher(ye(he(t), pt(t)), (i, c) => {
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
    initialState: xe,
    reducers: {
      updateSubscriptionOptions(s, i) {
      },
      unsubscribeQueryResult(s, i) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), a = Ce({
    name: `${e}/internalSubscriptions`,
    initialState: xe,
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
      }).addMatcher(f, (i) => ({
        ...i
      }));
    }
  }), d = Bn({
    queries: S.reducer,
    mutations: g.reducer,
    provided: y.reducer,
    subscriptions: a.reducer,
    config: p.reducer
  }), m = (s, i) => d(E.match(i) ? void 0 : s, i), h = {
    ...p.actions,
    ...S.actions,
    ...l.actions,
    ...a.actions,
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
}), Ir = /* @__PURE__ */ $e(yn, () => {
});
function ai({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const n = (g) => Mr, o = (g) => Ir;
  return {
    buildQuerySelector: v,
    buildMutationSelector: O,
    selectInvalidatedBy: E,
    selectCachedArgsForQuery: S
  };
  function u(g) {
    return {
      ...g,
      ...Ko(g.status)
    };
  }
  function f(g) {
    const y = g[t];
    if (process.env.NODE_ENV !== "production" && !y) {
      if (f.triggered)
        return y;
      f.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return y;
  }
  function v(g, y) {
    return (l) => {
      const a = e({
        queryArgs: l,
        endpointDefinition: y,
        endpointName: g
      });
      return r(l === Se ? n : (m) => {
        var h, s;
        return ((s = (h = f(m)) == null ? void 0 : h.queries) == null ? void 0 : s[a]) ?? Mr;
      }, u);
    };
  }
  function O() {
    return (g) => {
      let y;
      return typeof g == "object" ? y = He(g) ?? Se : y = g, r(y === Se ? o : (p) => {
        var d, m;
        return ((m = (d = f(p)) == null ? void 0 : d.mutations) == null ? void 0 : m[y]) ?? Ir;
      }, u);
    };
  }
  function E(g, y) {
    const l = g[t], a = /* @__PURE__ */ new Set();
    for (const p of y.map(Qt)) {
      const d = l.provided[p.type];
      if (!d)
        continue;
      let m = (p.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        d[p.id]
      ) : (
        // no id: invalidate all queries that provide this type
        _r(Object.values(d))
      )) ?? [];
      for (const h of m)
        a.add(h);
    }
    return _r(Array.from(a.values()).map((p) => {
      const d = l.queries[p];
      return d ? [{
        queryCacheKey: p,
        endpointName: d.endpointName,
        originalArgs: d.originalArgs
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
var Ae = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Nr = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = Ae == null ? void 0 : Ae.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const o = JSON.stringify(t, (u, f) => le(f) ? Object.keys(f).sort().reduce((v, O) => (v[O] = f[O], v), {}) : f);
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
        let S = Nr;
        if ("serializeQueryArgs" in E.endpointDefinition) {
          const g = E.endpointDefinition.serializeQueryArgs;
          S = (y) => {
            const l = g(y);
            return typeof l == "string" ? l : Nr({
              ...y,
              queryArgs: l
            });
          };
        } else
          r.serializeQueryArgs && (S = r.serializeQueryArgs);
        return S(E);
      },
      tagTypes: [...r.tagTypes || []]
    }, u = {
      endpointDefinitions: {},
      batch(E) {
        E();
      },
      apiUid: Xt(),
      extractRehydrationInfo: n,
      hasRehydrationInfo: Ke((E) => n(E) != null)
    }, f = {
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
            typeof y == "function" ? y(u.endpointDefinitions[g]) : Object.assign(u.endpointDefinitions[g] || {}, y);
        return f;
      }
    }, v = e.map((E) => E.init(f, o, u));
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
        if (E.overrideExisting !== !0 && g in u.endpointDefinitions) {
          if (E.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? U(39) : `called \`injectEndpoints\` to override already-existing endpointName ${g} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${g} without specifying \`overrideExisting: true\``);
          continue;
        }
        u.endpointDefinitions[g] = y;
        for (const l of v)
          l.injectEndpoint(g, y);
      }
      return f;
    }
    return f.injectEndpoints({
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
    unsubscribeQueryResult: u
  } = t.internalActions;
  function f(S) {
    const g = n.currentSubscriptions[S];
    return !!g && !di(g);
  }
  const v = {}, O = (S, g, y) => {
    var l;
    if (u.match(S)) {
      const a = g.getState()[e], {
        queryCacheKey: p
      } = S.payload;
      E(p, (l = a.queries[p]) == null ? void 0 : l.endpointName, g, a.config);
    }
    if (t.util.resetApiState.match(S))
      for (const [a, p] of Object.entries(v))
        p && clearTimeout(p), delete v[a];
    if (r.hasRehydrationInfo(S)) {
      const a = g.getState()[e], {
        queries: p
      } = r.extractRehydrationInfo(S);
      for (const [d, m] of Object.entries(p))
        E(d, m == null ? void 0 : m.endpointName, g, a.config);
    }
  };
  function E(S, g, y, l) {
    const a = r.endpointDefinitions[g], p = (a == null ? void 0 : a.keepUnusedDataFor) ?? l.keepUnusedDataFor;
    if (p === 1 / 0)
      return;
    const d = Math.max(0, Math.min(p, fi));
    if (!f(S)) {
      const m = v[S];
      m && clearTimeout(m), v[S] = setTimeout(() => {
        f(S) || y.dispatch(o({
          queryCacheKey: S
        })), delete v[S];
      }, d * 1e3);
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
  api: u,
  assertTagType: f,
  refetchQuery: v,
  internalState: O
}) => {
  const {
    removeQueryResult: E
  } = u.internalActions, S = ye(he(n), pt(n)), g = ye(he(n, o), De(n, o));
  let y = [];
  const l = (d, m) => {
    S(d) ? p(pn(d, "invalidatesTags", r, f), m) : g(d) ? p([], m) : u.util.invalidateTags.match(d) && p(nr(d.payload, void 0, void 0, void 0, void 0, f), m);
  };
  function a(d) {
    var m, h;
    for (const s in d.queries)
      if (((m = d.queries[s]) == null ? void 0 : m.status) === "pending")
        return !0;
    for (const s in d.mutations)
      if (((h = d.mutations[s]) == null ? void 0 : h.status) === "pending")
        return !0;
    return !1;
  }
  function p(d, m) {
    const h = m.getState(), s = h[e];
    if (y.push(...d), s.config.invalidationBehavior === "delayed" && a(s))
      return;
    const i = y;
    if (y = [], i.length === 0)
      return;
    const c = u.util.selectInvalidatedBy(h, i);
    t.batch(() => {
      const _ = Array.from(c.values());
      for (const {
        queryCacheKey: b
      } of _) {
        const R = s.queries[b], w = O.currentSubscriptions[b] ?? {};
        R && (Ne(w) === 0 ? m.dispatch(E({
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
  const u = {}, f = (y, l) => {
    (r.internalActions.updateSubscriptionOptions.match(y) || r.internalActions.unsubscribeQueryResult.match(y)) && O(y.payload, l), (t.pending.match(y) || t.rejected.match(y) && y.meta.condition) && O(y.meta.arg, l), (t.fulfilled.match(y) || t.rejected.match(y) && !y.meta.condition) && v(y.meta.arg, l), r.util.resetApiState.match(y) && S();
  };
  function v({
    queryCacheKey: y
  }, l) {
    const a = l.getState()[e], p = a.queries[y], d = o.currentSubscriptions[y];
    if (!p || p.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: m,
      skipPollingIfUnfocused: h
    } = g(d);
    if (!Number.isFinite(m))
      return;
    const s = u[y];
    s != null && s.timeout && (clearTimeout(s.timeout), s.timeout = void 0);
    const i = Date.now() + m;
    u[y] = {
      nextPollTimestamp: i,
      pollingInterval: m,
      timeout: setTimeout(() => {
        (a.config.focused || !h) && l.dispatch(n(p, y)), v({
          queryCacheKey: y
        }, l);
      }, m)
    };
  }
  function O({
    queryCacheKey: y
  }, l) {
    const p = l.getState()[e].queries[y], d = o.currentSubscriptions[y];
    if (!p || p.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: m
    } = g(d);
    if (!Number.isFinite(m)) {
      E(y);
      return;
    }
    const h = u[y], s = Date.now() + m;
    (!h || s < h.nextPollTimestamp) && v({
      queryCacheKey: y
    }, l);
  }
  function E(y) {
    const l = u[y];
    l != null && l.timeout && clearTimeout(l.timeout), delete u[y];
  }
  function S() {
    for (const y of Object.keys(u))
      E(y);
  }
  function g(y = {}) {
    let l = !1, a = Number.POSITIVE_INFINITY;
    for (let p in y)
      y[p].pollingInterval && (a = Math.min(y[p].pollingInterval, a), l = y[p].skipPollingIfUnfocused || l);
    return {
      lowestPollingInterval: a,
      skipPollingIfUnfocused: l
    };
  }
  return f;
}, mi = ({
  reducerPath: e,
  context: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const {
    removeQueryResult: u
  } = r.internalActions, f = (O, E) => {
    tr.match(O) && v(E, "refetchOnFocus"), rr.match(O) && v(E, "refetchOnReconnect");
  };
  function v(O, E) {
    const S = O.getState()[e], g = S.queries, y = o.currentSubscriptions;
    t.batch(() => {
      for (const l of Object.keys(y)) {
        const a = g[l], p = y[l];
        if (!p || !a)
          continue;
        (Object.values(p).some((m) => m[E] === !0) || Object.values(p).every((m) => m[E] === void 0) && S.config[E]) && (Ne(p) === 0 ? O.dispatch(u({
          queryCacheKey: l
        })) : a.status !== "uninitialized" && O.dispatch(n(a, l)));
      }
    });
  }
  return f;
}, Pr = new Error("Promise never resolved before cacheEntryRemoved."), gi = ({
  api: e,
  reducerPath: t,
  context: r,
  queryThunk: n,
  mutationThunk: o,
  internalState: u
}) => {
  const f = Ft(n), v = Ft(o), O = he(n, o), E = {}, S = (l, a, p) => {
    const d = g(l);
    if (n.pending.match(l)) {
      const m = p[t].queries[d], h = a.getState()[t].queries[d];
      !m && h && y(l.meta.arg.endpointName, l.meta.arg.originalArgs, d, a, l.meta.requestId);
    } else if (o.pending.match(l))
      a.getState()[t].mutations[d] && y(l.meta.arg.endpointName, l.meta.arg.originalArgs, d, a, l.meta.requestId);
    else if (O(l)) {
      const m = E[d];
      m != null && m.valueResolved && (m.valueResolved({
        data: l.payload,
        meta: l.meta.baseQueryMeta
      }), delete m.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(l) || e.internalActions.removeMutationResult.match(l)) {
      const m = E[d];
      m && (delete E[d], m.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(l))
      for (const [m, h] of Object.entries(E))
        delete E[m], h.cacheEntryRemoved();
  };
  function g(l) {
    return f(l) ? l.meta.arg.queryCacheKey : v(l) ? l.meta.arg.fixedCacheKey ?? l.meta.requestId : e.internalActions.removeQueryResult.match(l) ? l.payload.queryCacheKey : e.internalActions.removeMutationResult.match(l) ? He(l.payload) : "";
  }
  function y(l, a, p, d, m) {
    const h = r.endpointDefinitions[l], s = h == null ? void 0 : h.onCacheEntryAdded;
    if (!s)
      return;
    let i = {};
    const c = new Promise((A) => {
      i.cacheEntryRemoved = A;
    }), _ = Promise.race([new Promise((A) => {
      i.valueResolved = A;
    }), c.then(() => {
      throw Pr;
    })]);
    _.catch(() => {
    }), E[p] = i;
    const b = e.endpoints[l].select(h.type === "query" ? a : p), R = d.dispatch((A, C, N) => N), w = {
      ...d,
      getCacheEntry: () => b(d.getState()),
      requestId: m,
      extra: R,
      updateCachedData: h.type === "query" ? (A) => d.dispatch(e.util.updateQueryData(l, a, A)) : void 0,
      cacheDataLoaded: _,
      cacheEntryRemoved: c
    }, T = s(a, w);
    Promise.resolve(T).catch((A) => {
      if (A !== Pr)
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
  const o = Zt(r, n), u = De(r, n), f = he(r, n), v = {};
  return (E, S) => {
    var g, y;
    if (o(E)) {
      const {
        requestId: l,
        arg: {
          endpointName: a,
          originalArgs: p
        }
      } = E.meta, d = t.endpointDefinitions[a], m = d == null ? void 0 : d.onQueryStarted;
      if (m) {
        const h = {}, s = new Promise((b, R) => {
          h.resolve = b, h.reject = R;
        });
        s.catch(() => {
        }), v[l] = h;
        const i = e.endpoints[a].select(d.type === "query" ? p : l), c = S.dispatch((b, R, w) => w), _ = {
          ...S,
          getCacheEntry: () => i(S.getState()),
          requestId: l,
          extra: c,
          updateCachedData: d.type === "query" ? (b) => S.dispatch(e.util.updateQueryData(a, p, b)) : void 0,
          queryFulfilled: s
        };
        m(p, _);
      }
    } else if (f(E)) {
      const {
        requestId: l,
        baseQueryMeta: a
      } = E.meta;
      (g = v[l]) == null || g.resolve({
        data: E.payload,
        meta: a
      }), delete v[l];
    } else if (u(E)) {
      const {
        requestId: l,
        rejectedWithValue: a,
        baseQueryMeta: p
      } = E.meta;
      (y = v[l]) == null || y.reject({
        error: E.payload ?? E.error,
        isUnhandledError: !a,
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
  var u, f;
  e.util.resetApiState.match(n) && o.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(n) && n.payload === t && ((f = (u = o.getState()[r]) == null ? void 0 : u.config) == null ? void 0 : f.middlewareRegistered) === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${r}".
You can only have one api per reducer path, this will lead to crashes in various situations!${r === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, Ei = ({
  api: e,
  queryThunk: t,
  internalState: r
}) => {
  const n = `${e.reducerPath}/subscriptions`;
  let o = null, u = null;
  const {
    updateSubscriptionOptions: f,
    unsubscribeQueryResult: v
  } = e.internalActions, O = (l, a) => {
    var d, m, h;
    if (f.match(a)) {
      const {
        queryCacheKey: s,
        requestId: i,
        options: c
      } = a.payload;
      return (d = l == null ? void 0 : l[s]) != null && d[i] && (l[s][i] = c), !0;
    }
    if (v.match(a)) {
      const {
        queryCacheKey: s,
        requestId: i
      } = a.payload;
      return l[s] && delete l[s][i], !0;
    }
    if (e.internalActions.removeQueryResult.match(a))
      return delete l[a.payload.queryCacheKey], !0;
    if (t.pending.match(a)) {
      const {
        meta: {
          arg: s,
          requestId: i
        }
      } = a, c = l[m = s.queryCacheKey] ?? (l[m] = {});
      return c[`${i}_running`] = {}, s.subscribe && (c[i] = s.subscriptionOptions ?? c[i] ?? {}), !0;
    }
    let p = !1;
    if (t.fulfilled.match(a) || t.rejected.match(a)) {
      const s = l[a.meta.arg.queryCacheKey] || {}, i = `${a.meta.requestId}_running`;
      p || (p = !!s[i]), delete s[i];
    }
    if (t.rejected.match(a)) {
      const {
        meta: {
          condition: s,
          arg: i,
          requestId: c
        }
      } = a;
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
      return Ne(p);
    },
    isRequestSubscribed: (l, a) => {
      var d;
      const p = E();
      return !!((d = p == null ? void 0 : p[l]) != null && d[a]);
    }
  };
  return (l, a) => {
    if (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(l))
      return o = r.currentSubscriptions = {}, u = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(l))
      return [!1, y];
    const p = O(r.currentSubscriptions, l);
    let d = !0;
    if (p) {
      u || (u = setTimeout(() => {
        const s = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, i] = en(o, () => s);
        a.next(e.internalActions.subscriptionsUpdated(i)), o = s, u = null;
      }, 500));
      const m = typeof l.type == "string" && !!l.type.startsWith(n), h = t.rejected.match(l) && l.meta.condition && !!l.meta.arg.subscribe;
      d = !m && !h;
    }
    return [d, !1];
  };
};
function _i(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: n,
    context: o
  } = e, {
    apiUid: u
  } = o, f = {
    invalidateTags: X(`${t}/invalidateTags`)
  }, v = (g) => g.type.startsWith(`${t}/`), O = [Si, pi, yi, hi, gi, vi];
  return {
    middleware: (g) => {
      let y = !1;
      const a = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: S,
        isThisApiSliceAction: v
      }, p = O.map((h) => h(a)), d = Ei(a), m = mi(a);
      return (h) => (s) => {
        if (!Yt(s))
          return h(s);
        y || (y = !0, g.dispatch(n.internalActions.middlewareRegistered(u)));
        const i = {
          ...g,
          next: h
        }, c = g.getState(), [_, b] = d(s, i, c);
        let R;
        if (_ ? R = h(s) : R = b, g.getState()[t] && (m(s, i, c), v(s) || o.hasRehydrationInfo(s)))
          for (let w of p)
            w(s, i, c);
        return R;
      };
    },
    actions: f
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
function de(e, ...t) {
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
    serializeQueryArgs: u,
    keepUnusedDataFor: f,
    refetchOnMountOrArgChange: v,
    refetchOnFocus: O,
    refetchOnReconnect: E,
    invalidationBehavior: S
  }, g) {
    no();
    const y = (x) => (typeof process < "u" && process.env.NODE_ENV === "development" && (n.includes(x.type) || console.error(`Tag type '${x.type}' was used, but not specified in \`tagTypes\`!`)), x);
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
      mutationThunk: a,
      patchQueryData: p,
      updateQueryData: d,
      upsertQueryData: m,
      prefetch: h,
      buildMatchThunkActions: s
    } = ci({
      baseQuery: r,
      reducerPath: o,
      context: g,
      api: t,
      serializeQueryArgs: u,
      assertTagType: y
    }), {
      reducer: i,
      actions: c
    } = ui({
      context: g,
      queryThunk: l,
      mutationThunk: a,
      reducerPath: o,
      assertTagType: y,
      config: {
        refetchOnFocus: O,
        refetchOnReconnect: E,
        refetchOnMountOrArgChange: v,
        keepUnusedDataFor: f,
        reducerPath: o,
        invalidationBehavior: S
      }
    });
    de(t.util, {
      patchQueryData: p,
      updateQueryData: d,
      upsertQueryData: m,
      prefetch: h,
      resetApiState: c.resetApiState
    }), de(t.internalActions, c);
    const {
      middleware: _,
      actions: b
    } = _i({
      reducerPath: o,
      context: g,
      queryThunk: l,
      mutationThunk: a,
      api: t,
      assertTagType: y
    });
    de(t.util, b), de(t, {
      reducer: i,
      middleware: _
    });
    const {
      buildQuerySelector: R,
      buildMutationSelector: w,
      selectInvalidatedBy: T,
      selectCachedArgsForQuery: A
    } = ai({
      serializeQueryArgs: u,
      reducerPath: o,
      createSelector: e
    });
    de(t.util, {
      selectInvalidatedBy: T,
      selectCachedArgsForQuery: A
    });
    const {
      buildInitiateQuery: C,
      buildInitiateMutation: N,
      getRunningMutationThunk: P,
      getRunningMutationsThunk: D,
      getRunningQueriesThunk: $,
      getRunningQueryThunk: q
    } = si({
      queryThunk: l,
      mutationThunk: a,
      api: t,
      serializeQueryArgs: u,
      context: g
    });
    return de(t.util, {
      getRunningMutationThunk: P,
      getRunningMutationsThunk: D,
      getRunningQueryThunk: q,
      getRunningQueriesThunk: $
    }), {
      name: Dr,
      injectEndpoint(x, B) {
        var H;
        const k = t;
        (H = k.endpoints)[x] ?? (H[x] = {}), fn(B) ? de(k.endpoints[x], {
          name: x,
          select: R(x, B),
          initiate: C(x, B)
        }, s(l, x)) : ni(B) && de(k.endpoints[x], {
          name: x,
          select: w(),
          initiate: N(x)
        }, s(a, x));
      }
    };
  }
}), Wt = { exports: {} }, Ct = {};
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
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, u = e.useLayoutEffect, f = e.useDebugValue;
  function v(g, y) {
    var l = y(), a = n({ inst: { value: l, getSnapshot: y } }), p = a[0].inst, d = a[1];
    return u(function() {
      p.value = l, p.getSnapshot = y, O(p) && d({ inst: p });
    }, [g, l, y]), o(function() {
      return O(p) && d({ inst: p }), g(function() {
        O(p) && d({ inst: p });
      });
    }, [g]), f(l), l;
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
var kr;
function Ri() {
  return kr || (kr = 1, process.env.NODE_ENV !== "production" && function() {
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
    var u = typeof Object.is == "function" ? Object.is : o, f = e.useState, v = e.useEffect, O = e.useLayoutEffect, E = e.useDebugValue, S = !1, g = !1;
    function y(s, i, c) {
      S || e.startTransition !== void 0 && (S = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var _ = i();
      if (!g) {
        var b = i();
        u(_, b) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), g = !0);
      }
      var R = f({
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
        return !u(c, _);
      } catch {
        return !0;
      }
    }
    function a(s, i, c) {
      return i();
    }
    var p = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", d = !p, m = d ? a : y, h = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m;
    At.useSyncExternalStore = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), At;
}
process.env.NODE_ENV === "production" ? Wt.exports = Oi() : Wt.exports = Ri();
var hn = Wt.exports, Bt = { exports: {} }, Mt = {};
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
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, u = e.useRef, f = e.useEffect, v = e.useMemo, O = e.useDebugValue;
  return Mt.useSyncExternalStoreWithSelector = function(E, S, g, y, l) {
    var a = u(null);
    if (a.current === null) {
      var p = { hasValue: !1, value: null };
      a.current = p;
    } else
      p = a.current;
    a = v(function() {
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
    var d = o(E, a[0], a[1]);
    return f(function() {
      p.hasValue = !0, p.value = d;
    }, [d]), O(d), d;
  }, Mt;
}
var It = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function Ti() {
  return xr || (xr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = lt, t = hn;
    function r(S, g) {
      return S === g && (S !== 0 || 1 / S === 1 / g) || S !== S && g !== g;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, u = e.useRef, f = e.useEffect, v = e.useMemo, O = e.useDebugValue;
    function E(S, g, y, l, a) {
      var p = u(null), d;
      p.current === null ? (d = {
        hasValue: !1,
        value: null
      }, p.current = d) : d = p.current;
      var m = v(function() {
        var c = !1, _, b, R = function(C) {
          if (!c) {
            c = !0, _ = C;
            var N = l(C);
            if (a !== void 0 && d.hasValue) {
              var P = d.value;
              if (a(P, N))
                return b = P, P;
            }
            return b = N, N;
          }
          var D = _, $ = b;
          if (n(D, C))
            return $;
          var q = l(C);
          return a !== void 0 && a($, q) ? $ : (_ = C, b = q, q);
        }, w = y === void 0 ? null : y, T = function() {
          return R(g());
        }, A = w === null ? void 0 : function() {
          return R(w());
        };
        return [T, A];
      }, [g, y, l, a]), h = m[0], s = m[1], i = o(S, h, s);
      return f(function() {
        d.hasValue = !0, d.value = i;
      }, [i]), O(i), i;
    }
    It.useSyncExternalStoreWithSelector = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), It;
}
process.env.NODE_ENV === "production" ? Bt.exports = wi() : Bt.exports = Ti();
var Ci = Bt.exports;
const qr = Symbol.for("react-redux-context"), zr = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ai() {
  var e;
  if (!et.createContext)
    return {};
  const t = (e = zr[qr]) != null ? e : zr[qr] = /* @__PURE__ */ new Map();
  let r = t.get(et.createContext);
  return r || (r = et.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(et.createContext, r)), r;
}
const Re = /* @__PURE__ */ Ai();
function or(e = Re) {
  return function() {
    const r = Pn(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return r;
  };
}
const mn = /* @__PURE__ */ or(), Mi = () => {
  throw new Error("uSES not initialized!");
};
let gn = Mi;
const Ii = (e) => {
  gn = e;
}, Ni = (e, t) => e === t;
function Pi(e = Re) {
  const t = e === Re ? mn : or(e);
  return function(n, o = {}) {
    const {
      equalityFn: u = Ni,
      stabilityCheck: f = void 0,
      noopCheck: v = void 0
    } = typeof o == "function" ? {
      equalityFn: o
    } : o;
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error("You must pass a selector to useSelector");
      if (typeof n != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof u != "function")
        throw new Error("You must pass a function as an equality function to useSelector");
    }
    const {
      store: O,
      subscription: E,
      getServerState: S,
      stabilityCheck: g,
      noopCheck: y
    } = t(), l = ue(!0), a = qe({
      [n.name](d) {
        const m = n(d);
        if (process.env.NODE_ENV !== "production") {
          const h = typeof f > "u" ? g : f;
          if (h === "always" || h === "once" && l.current) {
            const i = n(d);
            if (!u(m, i)) {
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
                state: d,
                selected: m,
                selected2: i,
                stack: c
              });
            }
          }
          const s = typeof v > "u" ? y : v;
          if ((s === "always" || s === "once" && l.current) && m === d) {
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
    }[n.name], [n, g, f]), p = gn(E.addNestedSub, O.getState, S || O.getState, a, u);
    return $t(p), p;
  };
}
const Di = /* @__PURE__ */ Pi();
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
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, O = e ? Symbol.for("react.async_mode") : 60111, E = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, l = e ? Symbol.for("react.memo") : 60115, a = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, h = e ? Symbol.for("react.scope") : 60119;
  function s(c) {
    if (typeof c == "object" && c !== null) {
      var _ = c.$$typeof;
      switch (_) {
        case t:
          switch (c = c.type, c) {
            case O:
            case E:
            case n:
            case u:
            case o:
            case g:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case v:
                case S:
                case a:
                case l:
                case f:
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
  return L.AsyncMode = O, L.ConcurrentMode = E, L.ContextConsumer = v, L.ContextProvider = f, L.Element = t, L.ForwardRef = S, L.Fragment = n, L.Lazy = a, L.Memo = l, L.Portal = r, L.Profiler = u, L.StrictMode = o, L.Suspense = g, L.isAsyncMode = function(c) {
    return i(c) || s(c) === O;
  }, L.isConcurrentMode = i, L.isContextConsumer = function(c) {
    return s(c) === v;
  }, L.isContextProvider = function(c) {
    return s(c) === f;
  }, L.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, L.isForwardRef = function(c) {
    return s(c) === S;
  }, L.isFragment = function(c) {
    return s(c) === n;
  }, L.isLazy = function(c) {
    return s(c) === a;
  }, L.isMemo = function(c) {
    return s(c) === l;
  }, L.isPortal = function(c) {
    return s(c) === r;
  }, L.isProfiler = function(c) {
    return s(c) === u;
  }, L.isStrictMode = function(c) {
    return s(c) === o;
  }, L.isSuspense = function(c) {
    return s(c) === g;
  }, L.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === E || c === u || c === o || c === g || c === y || typeof c == "object" && c !== null && (c.$$typeof === a || c.$$typeof === l || c.$$typeof === f || c.$$typeof === v || c.$$typeof === S || c.$$typeof === d || c.$$typeof === m || c.$$typeof === h || c.$$typeof === p);
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
function ki() {
  return Vr || (Vr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, O = e ? Symbol.for("react.async_mode") : 60111, E = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, l = e ? Symbol.for("react.memo") : 60115, a = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, h = e ? Symbol.for("react.scope") : 60119;
    function s(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === E || M === u || M === o || M === g || M === y || typeof M == "object" && M !== null && (M.$$typeof === a || M.$$typeof === l || M.$$typeof === f || M.$$typeof === v || M.$$typeof === S || M.$$typeof === d || M.$$typeof === m || M.$$typeof === h || M.$$typeof === p);
    }
    function i(M) {
      if (typeof M == "object" && M !== null) {
        var ke = M.$$typeof;
        switch (ke) {
          case t:
            var I = M.type;
            switch (I) {
              case O:
              case E:
              case n:
              case u:
              case o:
              case g:
                return I;
              default:
                var Te = I && I.$$typeof;
                switch (Te) {
                  case v:
                  case S:
                  case a:
                  case l:
                  case f:
                    return Te;
                  default:
                    return ke;
                }
            }
          case r:
            return ke;
        }
      }
    }
    var c = O, _ = E, b = v, R = f, w = t, T = S, A = n, C = a, N = l, P = r, D = u, $ = o, q = g, x = !1;
    function B(M) {
      return x || (x = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(M) || i(M) === O;
    }
    function k(M) {
      return i(M) === E;
    }
    function H(M) {
      return i(M) === v;
    }
    function z(M) {
      return i(M) === f;
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
      return i(M) === a;
    }
    function mt(M) {
      return i(M) === l;
    }
    function gt(M) {
      return i(M) === r;
    }
    function vt(M) {
      return i(M) === u;
    }
    function St(M) {
      return i(M) === o;
    }
    function Et(M) {
      return i(M) === g;
    }
    V.AsyncMode = c, V.ConcurrentMode = _, V.ContextConsumer = b, V.ContextProvider = R, V.Element = w, V.ForwardRef = T, V.Fragment = A, V.Lazy = C, V.Memo = N, V.Portal = P, V.Profiler = D, V.StrictMode = $, V.Suspense = q, V.isAsyncMode = B, V.isConcurrentMode = k, V.isContextConsumer = H, V.isContextProvider = z, V.isElement = G, V.isForwardRef = J, V.isFragment = yt, V.isLazy = ht, V.isMemo = mt, V.isPortal = gt, V.isProfiler = vt, V.isStrictMode = St, V.isSuspense = Et, V.isValidElementType = s, V.typeOf = i;
  }()), V;
}
process.env.NODE_ENV === "production" ? Kt.exports = $i() : Kt.exports = ki();
var ji = Kt.exports, vn = ji, xi = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, qi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Sn = {};
Sn[vn.ForwardRef] = xi;
Sn[vn.Memo] = qi;
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
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), v = Symbol.for("react.server_context"), O = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), l = Symbol.for("react.offscreen"), a;
  a = Symbol.for("react.module.reference");
  function p(d) {
    if (typeof d == "object" && d !== null) {
      var m = d.$$typeof;
      switch (m) {
        case e:
          switch (d = d.type, d) {
            case r:
            case o:
            case n:
            case E:
            case S:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case v:
                case f:
                case O:
                case y:
                case g:
                case u:
                  return d;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return F.ContextConsumer = f, F.ContextProvider = u, F.Element = e, F.ForwardRef = O, F.Fragment = r, F.Lazy = y, F.Memo = g, F.Portal = t, F.Profiler = o, F.StrictMode = n, F.Suspense = E, F.SuspenseList = S, F.isAsyncMode = function() {
    return !1;
  }, F.isConcurrentMode = function() {
    return !1;
  }, F.isContextConsumer = function(d) {
    return p(d) === f;
  }, F.isContextProvider = function(d) {
    return p(d) === u;
  }, F.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, F.isForwardRef = function(d) {
    return p(d) === O;
  }, F.isFragment = function(d) {
    return p(d) === r;
  }, F.isLazy = function(d) {
    return p(d) === y;
  }, F.isMemo = function(d) {
    return p(d) === g;
  }, F.isPortal = function(d) {
    return p(d) === t;
  }, F.isProfiler = function(d) {
    return p(d) === o;
  }, F.isStrictMode = function(d) {
    return p(d) === n;
  }, F.isSuspense = function(d) {
    return p(d) === E;
  }, F.isSuspenseList = function(d) {
    return p(d) === S;
  }, F.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === o || d === n || d === E || d === S || d === l || typeof d == "object" && d !== null && (d.$$typeof === y || d.$$typeof === g || d.$$typeof === u || d.$$typeof === f || d.$$typeof === O || d.$$typeof === a || d.getModuleId !== void 0);
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
    var e = !1, t = !1, r = !1, n = !1, o = !1, u = Symbol.for("react.element"), f = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), g = Symbol.for("react.context"), y = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), s;
    s = Symbol.for("react.module.reference");
    function i(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === v || I === E || o || I === O || I === a || I === p || n || I === h || e || t || r || typeof I == "object" && I !== null && (I.$$typeof === m || I.$$typeof === d || I.$$typeof === S || I.$$typeof === g || I.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === s || I.getModuleId !== void 0));
    }
    function c(I) {
      if (typeof I == "object" && I !== null) {
        var Te = I.$$typeof;
        switch (Te) {
          case u:
            var Ze = I.type;
            switch (Ze) {
              case v:
              case E:
              case O:
              case a:
              case p:
                return Ze;
              default:
                var sr = Ze && Ze.$$typeof;
                switch (sr) {
                  case y:
                  case g:
                  case l:
                  case m:
                  case d:
                  case S:
                    return sr;
                  default:
                    return Te;
                }
            }
          case f:
            return Te;
        }
      }
    }
    var _ = g, b = S, R = u, w = l, T = v, A = m, C = d, N = f, P = E, D = O, $ = a, q = p, x = !1, B = !1;
    function k(I) {
      return x || (x = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(I) {
      return B || (B = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(I) {
      return c(I) === g;
    }
    function G(I) {
      return c(I) === S;
    }
    function J(I) {
      return typeof I == "object" && I !== null && I.$$typeof === u;
    }
    function yt(I) {
      return c(I) === l;
    }
    function ht(I) {
      return c(I) === v;
    }
    function mt(I) {
      return c(I) === m;
    }
    function gt(I) {
      return c(I) === d;
    }
    function vt(I) {
      return c(I) === f;
    }
    function St(I) {
      return c(I) === E;
    }
    function Et(I) {
      return c(I) === O;
    }
    function M(I) {
      return c(I) === a;
    }
    function ke(I) {
      return c(I) === p;
    }
    Q.ContextConsumer = _, Q.ContextProvider = b, Q.Element = R, Q.ForwardRef = w, Q.Fragment = T, Q.Lazy = A, Q.Memo = C, Q.Portal = N, Q.Profiler = P, Q.StrictMode = D, Q.Suspense = $, Q.SuspenseList = q, Q.isAsyncMode = k, Q.isConcurrentMode = H, Q.isContextConsumer = z, Q.isContextProvider = G, Q.isElement = J, Q.isForwardRef = yt, Q.isFragment = ht, Q.isLazy = mt, Q.isMemo = gt, Q.isPortal = vt, Q.isProfiler = St, Q.isStrictMode = Et, Q.isSuspense = M, Q.isSuspenseList = ke, Q.isValidElementType = i, Q.typeOf = c;
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
Ii(Ci.useSyncExternalStoreWithSelector);
function Qi(e) {
  return e.type === "query";
}
function Ui(e) {
  return e.type === "mutation";
}
function ot(e, ...t) {
  return Object.assign(e, ...t);
}
function Nt(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var Me = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Wi = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = Me == null ? void 0 : Me.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const o = JSON.stringify(t, (u, f) => le(f) ? Object.keys(f).sort().reduce((v, O) => (v[O] = f[O], v), {}) : f);
    le(t) && (Me == null || Me.set(t, o)), r = o;
  }
  return `${e}(${r})`;
}, Pt = Symbol();
function Wr(e, t, r, n) {
  const o = ne(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: r,
      endpointName: n
    }) : e
  }), [e, t, r, n]), u = ue(o);
  return fe(() => {
    u.current.serialized !== o.serialized && (u.current = o);
  }, [o]), u.current.serialized === o.serialized ? u.current.queryArgs : e;
}
function Dt(e) {
  const t = ue(e);
  return fe(() => {
    Qe(t.current, e) || (t.current = e);
  }, [e]), Qe(t.current, e) ? t.current : e;
}
var Bi = typeof window < "u" && window.document && window.document.createElement ? Dn : fe, Ki = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: un.pending
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
    unstable__sideEffectsInRender: u,
    createSelector: f
  },
  serializeQueryArgs: v,
  context: O
}) {
  const E = u ? (a) => a() : fe;
  return {
    buildQueryHooks: y,
    buildMutationHook: l,
    usePrefetch: g
  };
  function S(a, p, d) {
    if (p != null && p.endpointName && a.isUninitialized) {
      const {
        endpointName: _
      } = p, b = O.endpointDefinitions[_];
      v({
        queryArgs: p.originalArgs,
        endpointDefinition: b,
        endpointName: _
      }) === v({
        queryArgs: d,
        endpointDefinition: b,
        endpointName: _
      }) && (p = void 0);
    }
    let m = a.isSuccess ? a.data : p == null ? void 0 : p.data;
    m === void 0 && (m = a.data);
    const h = m !== void 0, s = a.isLoading, i = !h && s, c = a.isSuccess || s && h;
    return {
      ...a,
      data: m,
      currentData: a.data,
      isFetching: s,
      isLoading: i,
      isSuccess: c
    };
  }
  function g(a, p) {
    const d = r(), m = Dt(p);
    return qe((h, s) => d(e.util.prefetch(a, h, {
      ...m,
      ...s
    })), [a, d, m]);
  }
  function y(a) {
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
      } = e.endpoints[a], T = r(), A = ue();
      if (!A.current) {
        const k = T(e.internalActions.internal_getRTKQSubscriptions());
        if (process.env.NODE_ENV !== "production" && (typeof k != "object" || typeof (k == null ? void 0 : k.type) == "string"))
          throw new Error(process.env.NODE_ENV === "production" ? U(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        A.current = k;
      }
      const C = Wr(
        _ ? Se : h,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        Wi,
        O.endpointDefinitions[a],
        a
      ), N = Dt({
        refetchOnReconnect: s,
        refetchOnFocus: i,
        pollingInterval: b,
        skipPollingIfUnfocused: R
      }), P = ue(!1), D = ue();
      let {
        queryCacheKey: $,
        requestId: q
      } = D.current || {}, x = !1;
      $ && q && (x = A.current.isRequestSubscribed($, q));
      const B = !x && P.current;
      return E(() => {
        P.current = x;
      }), E(() => {
        B && (D.current = void 0);
      }, [B]), E(() => {
        var z;
        const k = D.current;
        if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(B), C === Se) {
          k == null || k.unsubscribe(), D.current = void 0;
          return;
        }
        const H = (z = D.current) == null ? void 0 : z.subscriptionOptions;
        if (!k || k.arg !== C) {
          k == null || k.unsubscribe();
          const G = T(w(C, {
            subscriptionOptions: N,
            forceRefetch: c
          }));
          D.current = G;
        } else
          N !== H && k.updateSubscriptionOptions(N);
      }, [T, w, c, C, N, B]), fe(() => () => {
        var k;
        (k = D.current) == null || k.unsubscribe(), D.current = void 0;
      }, []), ne(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => {
          var k;
          if (!D.current)
            throw new Error(process.env.NODE_ENV === "production" ? U(38) : "Cannot refetch a query that has not been started yet.");
          return (k = D.current) == null ? void 0 : k.refetch();
        }
      }), []);
    }, d = ({
      refetchOnReconnect: h,
      refetchOnFocus: s,
      pollingInterval: i = 0,
      skipPollingIfUnfocused: c = !1
    } = {}) => {
      const {
        initiate: _
      } = e.endpoints[a], b = r(), [R, w] = cr(Pt), T = ue(), A = Dt({
        refetchOnReconnect: h,
        refetchOnFocus: s,
        pollingInterval: i,
        skipPollingIfUnfocused: c
      });
      E(() => {
        var D, $;
        const P = (D = T.current) == null ? void 0 : D.subscriptionOptions;
        A !== P && (($ = T.current) == null || $.updateSubscriptionOptions(A));
      }, [A]);
      const C = ue(A);
      E(() => {
        C.current = A;
      }, [A]);
      const N = qe(function(P, D = !1) {
        let $;
        return t(() => {
          var q;
          (q = T.current) == null || q.unsubscribe(), T.current = $ = b(_(P, {
            subscriptionOptions: C.current,
            forceRefetch: !D
          })), w(P);
        }), $;
      }, [b, _]);
      return fe(() => () => {
        var P;
        (P = T == null ? void 0 : T.current) == null || P.unsubscribe();
      }, []), fe(() => {
        R !== Pt && !T.current && N(R, !0);
      }, [R, N]), ne(() => [N, R], [N, R]);
    }, m = (h, {
      skip: s = !1,
      selectFromResult: i
    } = {}) => {
      const {
        select: c
      } = e.endpoints[a], _ = Wr(s ? Se : h, v, O.endpointDefinitions[a], a), b = ue(), R = ne(() => f([c(_), (N, P) => P, (N) => _], S, {
        memoizeOptions: {
          resultEqualityCheck: Qe
        }
      }), [c, _]), w = ne(() => i ? f([R], i, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : R, [R, i]), T = n((N) => w(N, b.current), Qe), A = o(), C = R(A.getState(), b.current);
      return Bi(() => {
        b.current = C;
      }, [C]), T;
    };
    return {
      useQueryState: m,
      useQuerySubscription: p,
      useLazyQuerySubscription: d,
      useLazyQuery(h) {
        const [s, i] = d(h), c = m(i, {
          ...h,
          skip: i === Pt
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
  function l(a) {
    return ({
      selectFromResult: p,
      fixedCacheKey: d
    } = {}) => {
      const {
        select: m,
        initiate: h
      } = e.endpoints[a], s = r(), [i, c] = cr();
      fe(() => () => {
        i != null && i.arg.fixedCacheKey || i == null || i.reset();
      }, [i]);
      const _ = qe(function(H) {
        const z = s(h(H, {
          fixedCacheKey: d
        }));
        return c(z), z;
      }, [s, h, d]), {
        requestId: b
      } = i || {}, R = ne(() => m({
        fixedCacheKey: d,
        requestId: i == null ? void 0 : i.requestId
      }), [d, i, m]), w = ne(() => p ? f([R], p) : R, [p, R]), T = n(w, Qe), A = d == null ? i == null ? void 0 : i.arg.originalArgs : void 0, C = qe(() => {
        t(() => {
          i && c(void 0), d && s(e.internalActions.removeMutationResult({
            requestId: b,
            fixedCacheKey: d
          }));
        });
      }, [s, d, i, b]), {
        endpointName: N,
        data: P,
        status: D,
        isLoading: $,
        isSuccess: q,
        isError: x,
        error: B
      } = T;
      $t({
        endpointName: N,
        data: P,
        status: D,
        isLoading: $,
        isSuccess: q,
        isError: x,
        error: B
      });
      const k = ne(() => ({
        ...T,
        originalArgs: A,
        reset: C
      }), [T, A, C]);
      return ne(() => [_, k], [_, k]);
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
    const u = ["useDispatch", "useSelector", "useStore"];
    let f = !1;
    for (const v of u)
      if (Hi(o) > 0 && (o[v] && (f || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), f = !0)), t[v] = o[v]), typeof t[v] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? U(36) : `When using custom hooks for context, all ${u.length} hooks need to be provided: ${u.join(", ")}.
Hook ${v} was either not provided or not a function.`);
  }
  return {
    name: Gi,
    init(u, {
      serializeQueryArgs: f
    }, v) {
      const O = u, {
        buildQueryHooks: E,
        buildMutationHook: S,
        usePrefetch: g
      } = Yi({
        api: u,
        moduleOptions: {
          batch: e,
          hooks: t,
          unstable__sideEffectsInRender: n,
          createSelector: r
        },
        serializeQueryArgs: f,
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
              useQuery: a,
              useLazyQuery: p,
              useLazyQuerySubscription: d,
              useQueryState: m,
              useQuerySubscription: h
            } = E(y);
            ot(O.endpoints[y], {
              useQuery: a,
              useLazyQuery: p,
              useLazyQuerySubscription: d,
              useQueryState: m,
              useQuerySubscription: h
            }), u[`use${Nt(y)}Query`] = a, u[`useLazy${Nt(y)}Query`] = p;
          } else if (Ui(l)) {
            const a = S(y);
            ot(O.endpoints[y], {
              useMutation: a
            }), u[`use${Nt(y)}Mutation`] = a;
          }
        }
      };
    }
  };
}, Xi = /* @__PURE__ */ li(bi(), Ji()), j = /* @__PURE__ */ ((e) => (e.Cashiers = "Cashiers", e.Orders = "Orders", e.Places = "Places", e.Organizations = "Organizations", e.Categories = "Categories", e.Additions = "Additions", e.Menu = "Menu", e))(j || {});
const Zi = (e) => {
  const t = ri({ baseUrl: e });
  return async (r, n, o) => {
    const { data: u } = await t(r, n, o);
    return u.code ? (alert(`Ошибка: ${u.code}`), { error: u }) : { data: u };
  };
}, me = Xi({
  reducerPath: "api",
  tagTypes: Object.values(j),
  baseQuery: Zi("/book-eat/api"),
  endpoints: () => ({})
}), Ds = me.injectEndpoints({
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
}), es = me.injectEndpoints({
  endpoints: (e) => ({
    getCashiers: e.query({
      providesTags: [j.Cashiers],
      query: () => "/v1/users/organization",
      transformResponse: (t) => ct.setAll(ct.getInitialState(), t)
    }),
    createCashier: e.mutation(
      {
        invalidatesTags: [j.Cashiers],
        query: (t) => ({
          url: "/v1/users/place",
          method: "POST",
          body: t
        })
      }
    ),
    deleteCashiers: e.mutation({
      invalidatesTags: [j.Cashiers],
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
function W(e) {
  return e === ts;
}
function ae(e) {
  return function t(r) {
    return arguments.length === 0 || W(r) ? t : e.apply(this, arguments);
  };
}
function ve(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return W(r) ? t : ae(function(o) {
          return e(r, o);
        });
      default:
        return W(r) && W(n) ? t : W(r) ? ae(function(o) {
          return e(o, n);
        }) : W(n) ? ae(function(o) {
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
      return function(r, n, o, u) {
        return t.apply(this, arguments);
      };
    case 5:
      return function(r, n, o, u, f) {
        return t.apply(this, arguments);
      };
    case 6:
      return function(r, n, o, u, f, v) {
        return t.apply(this, arguments);
      };
    case 7:
      return function(r, n, o, u, f, v, O) {
        return t.apply(this, arguments);
      };
    case 8:
      return function(r, n, o, u, f, v, O, E) {
        return t.apply(this, arguments);
      };
    case 9:
      return function(r, n, o, u, f, v, O, E, S) {
        return t.apply(this, arguments);
      };
    case 10:
      return function(r, n, o, u, f, v, O, E, S, g) {
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
        return W(r) ? t : ve(function(u, f) {
          return e(r, u, f);
        });
      case 2:
        return W(r) && W(n) ? t : W(r) ? ve(function(u, f) {
          return e(u, n, f);
        }) : W(n) ? ve(function(u, f) {
          return e(r, u, f);
        }) : ae(function(u) {
          return e(r, n, u);
        });
      default:
        return W(r) && W(n) && W(o) ? t : W(r) && W(n) ? ve(function(u, f) {
          return e(u, f, o);
        }) : W(r) && W(o) ? ve(function(u, f) {
          return e(u, n, f);
        }) : W(n) && W(o) ? ve(function(u, f) {
          return e(r, u, f);
        }) : W(r) ? ae(function(u) {
          return e(u, n, o);
        }) : W(n) ? ae(function(u) {
          return e(r, u, o);
        }) : W(o) ? ae(function(u) {
          return e(r, n, u);
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
var ns = /* @__PURE__ */ ae(function(t) {
  return Rn(t) ? !0 : !t || typeof t != "object" || rs(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
});
const os = ns;
var Br = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function is(e, t, r) {
  return function(o, u, f) {
    if (os(f))
      return e(o, u, f);
    if (f == null)
      return u;
    if (typeof f["fantasy-land/reduce"] == "function")
      return t(o, u, f, "fantasy-land/reduce");
    if (f[Br] != null)
      return r(o, u, f[Br]());
    if (typeof f.next == "function")
      return r(o, u, f);
    if (typeof f.reduce == "function")
      return t(o, u, f, "reduce");
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
const us = cs;
function as(e, t, r) {
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
  return e["@@transducer/result"](r[n](us(e["@@transducer/step"], e), t));
}
var ds = /* @__PURE__ */ is(ss, ls, as);
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
var Es = /* @__PURE__ */ ae(/* @__PURE__ */ wn("tail", /* @__PURE__ */ Ss(1, 1 / 0)));
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
}), Tn = me.injectEndpoints({
  endpoints: (e) => ({
    getOrders: e.query({
      providesTags: [j.Orders],
      query: () => ({
        url: "/v1/orders"
      }),
      transformResponse: (t) => ce.setAll(ce.getInitialState(), t)
    }),
    getOrder: e.query({
      providesTags: [j.Orders],
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
      invalidatesTags: [j.Orders]
    }),
    updateOrderStatus: e.mutation({
      query: ({ id: t, statusVal: r }) => ({
        params: { status: r },
        url: `/v1/orders/${t}/status`,
        method: "PUT"
      }),
      invalidatesTags: [j.Orders]
    }),
    cancelOrder: e.mutation({
      query: (t) => ({
        url: `/v1/orders/${t}/cancel`,
        method: "PUT"
      }),
      invalidatesTags: [j.Orders]
    }),
    confirmOrder: e.mutation({
      query: (t) => ({
        url: `/v1/orders/${t}/confirm`,
        method: "PUT"
      }),
      invalidatesTags: [j.Orders]
    })
  })
}), Cn = Tn.endpoints.getOrders.select(), ks = ce.getSelectors(
  re(Cn, (e) => e.data ?? ce.getInitialState())
), js = ce.getSelectors(
  re(Cn, (e) => e.data ?? ce.getInitialState())
), xs = (e) => {
  const t = Tn.endpoints.getOrder.select(e);
  return ce.getSelectors(
    re(t, (r) => r.data ?? ce.getInitialState())
  );
}, oe = we({
  selectId: (e) => e.id
}), An = me.injectEndpoints({
  endpoints: (e) => ({
    getOrganisation: e.query({
      query: (t) => ({
        url: `v1/organizations/${t}`
      }),
      transformResponse: (t) => oe.setOne(
        oe.getInitialState(),
        t
      ),
      providesTags: [j.Organizations]
    }),
    getCurrentOrganisation: e.query({
      query: () => ({
        url: "v1/organizations/current"
      }),
      transformResponse: (t) => oe.setOne(
        oe.getInitialState(),
        t
      ),
      providesTags: [j.Organizations]
    }),
    getOrganisations: e.query({
      query: () => ({
        url: "/v1/organizations"
      }),
      transformResponse: (t) => oe.setMany(
        oe.getInitialState(),
        t
      ),
      providesTags: [j.Organizations]
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
      invalidatesTags: [j.Organizations]
    })
  })
}), Os = An.endpoints.getOrganisations.select(), qs = oe.getSelectors(
  re(
    An.endpoints.getCurrentOrganisation.select(),
    (e) => e.data ?? oe.getInitialState()
  )
), zs = oe.getSelectors(
  re(
    Os,
    (e) => e.data ?? oe.getInitialState()
  )
), pe = we({
  selectId: (e) => e.id
}), Mn = me.injectEndpoints({
  endpoints: (e) => ({
    fetchPlaces: e.query({
      query: () => ({
        url: "/v1/places"
      }),
      providesTags: [j.Places],
      transformResponse: (t) => pe.setAll(pe.getInitialState(), t)
    }),
    fetchPlacesByOrganization: e.query({
      query: () => ({
        url: "/v1/places/organization"
      }),
      providesTags: [j.Places],
      transformResponse: (t) => pe.setAll(pe.getInitialState(), t)
    }),
    savePlace: e.mutation({
      query: (t) => ({
        url: "/v1/places",
        method: "POST",
        body: t
      }),
      invalidatesTags: [j.Places]
    }),
    editPlace: e.mutation({
      query: (t) => ({
        url: `/v1/places/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [j.Places]
    }),
    deletePlace: e.mutation({
      query: (t) => ({
        url: `/v1/places/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [j.Places]
    })
  })
}), Rs = Mn.endpoints.fetchPlaces.select(), Ls = pe.getSelectors(
  re(
    Mn.endpoints.fetchPlacesByOrganization.select(),
    (e) => e.data ?? pe.getInitialState()
  )
), Vs = pe.getSelectors(
  re(Rs, (e) => e.data ?? pe.getInitialState())
), Z = we({
  selectId: (e) => e.id,
  sortComparer: (e, t) => e.title.localeCompare(t.title)
}), ir = me.injectEndpoints({
  endpoints: (e) => ({
    getMenuByPlaceId: e.query({
      query: (t) => `/v2/products/place/${t}`,
      transformResponse: (t) => Z.setMany(Z.getInitialState(), t),
      providesTags: [j.Menu]
    }),
    getMenuById: e.query({
      query: (t) => `/v2/products/${t}`,
      transformResponse: (t) => Z.setOne(Z.getInitialState(), t),
      providesTags: [j.Menu]
    }),
    getMenuByPlaces: e.query({
      query: () => "/v1/products/place",
      transformResponse: (t) => Z.setAll(Z.getInitialState(), t),
      providesTags: [j.Menu]
    }),
    getMenuByOrganization: e.query({
      query: () => "/v1/products/organization",
      transformResponse: (t) => Z.setAll(Z.getInitialState(), t),
      providesTags: [j.Menu]
    }),
    saveMenu: e.mutation({
      query: (t) => ({
        url: "/v1/products",
        method: "POST",
        body: t
      }),
      invalidatesTags: [j.Menu]
    }),
    editMenu: e.mutation({
      query: (t) => ({
        url: `/v1/products/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [j.Menu]
    }),
    deleteMenu: e.mutation({
      query: (t) => ({
        url: `/menu/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [j.Menu]
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
}, ut = we({
  selectId: (e) => e.id
}), Ts = me.injectEndpoints({
  endpoints: (e) => ({
    fetchAdditions: e.query({
      query: () => "/v1/additions/organization?activeOnly=false",
      providesTags: [j.Additions],
      transformResponse: (t) => ut.setAll(ut.getInitialState(), t)
    }),
    fetchAdditionsByIds: e.mutation({
      query: (t) => ({
        url: "/v1/additions/list",
        method: "POST",
        body: { ids: t }
      }),
      invalidatesTags: [j.Additions]
    }),
    saveAddition: e.mutation({
      query: (t) => ({
        url: "/v1/additions",
        method: "POST",
        body: t
      }),
      invalidatesTags: [j.Additions]
    }),
    editAddition: e.mutation({
      query: (t) => ({
        url: `/v1/additions/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [j.Additions]
    }),
    deleteAddition: e.mutation({
      query: (t) => ({
        url: `/v1/additions/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [j.Additions]
    })
  })
}), Cs = Ts.endpoints.fetchAdditions.select(), Ws = ut.getSelectors(
  re(Cs, (e) => e.data ?? ut.getInitialState())
), at = we({
  selectId: (e) => e.id
}), As = me.injectEndpoints({
  endpoints: (e) => ({
    fetchCategories: e.query({
      query: () => ({
        url: "/v1/categories/organization?activeOnly=false"
      }),
      transformResponse: (t) => at.setAll(at.getInitialState(), t),
      providesTags: [j.Categories]
    }),
    updateCategory: e.mutation({
      query: (t) => ({
        url: `/v1/categories/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [j.Categories]
    }),
    createCategory: e.mutation({
      query: (t) => ({
        url: "/v1/categories",
        method: "POST",
        body: { ...t, description: "test" }
      }),
      invalidatesTags: [j.Categories]
    }),
    deleteCategory: e.mutation({
      query: (t) => ({
        url: `/v1/categories/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [j.Categories]
    })
  })
}), Ms = As.endpoints.fetchCategories.select(), Bs = at.getSelectors(
  re(
    Ms,
    (e) => e.data ?? at.getInitialState()
  )
);
export {
  xn as DayOfWeek,
  jn as DeliveryTypeName,
  kn as OrderStatus,
  ut as additionsAdapters,
  Ts as additionsEndpoints,
  Ws as additionsSelectors,
  me as api,
  es as cashiersEndpoints,
  $s as cashiersSelectors,
  As as categoriesEndpoints,
  Bs as categoriesSelectors,
  Us as createMenuSelectorsById,
  Qs as createMenuSelectorsByPlaceId,
  qs as currentOrganizationSelector,
  Ds as loginApi,
  ir as menuEndpoints,
  Fs as menuSelectors,
  js as orderByIdSelectors,
  xs as orderByIdSelectorsFactory,
  Tn as ordersEndpoints,
  ks as ordersSelectors,
  An as organizationsEndpoints,
  zs as organizationsSelectors,
  Ls as placesByOrganizationSelectors,
  Mn as placesEndpoints,
  Vs as placesSelectors
};
