var Wn = Object.defineProperty;
var Kn = (e, t, r) => t in e ? Wn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var bt = (e, t, r) => (Kn(e, typeof t != "symbol" ? t + "" : t, r), r);
import * as tt from "react";
import ft, { useContext as Yn, useRef as ae, useCallback as ze, useDebugValue as jt, useMemo as ne, useState as fr, useEffect as de, useLayoutEffect as Hn } from "react";
import { unstable_batchedUpdates as Gn } from "react-dom";
var Jn = /* @__PURE__ */ ((e) => (e.NEW = "NEW", e.ERROR = "ERROR", e.COMPLETED = "COMPLETED", e.IN_PROGRESS = "IN_PROGRESS", e.CANCELLED_BY_CLIENT = "CANCELLED_BY_CLIENT", e.CANCELLED_BY_PROVIDER = "CANCELLED_BY_PROVIDER", e))(Jn || {}), Xn = /* @__PURE__ */ ((e) => (e.DELIVERY = "DELIVERY", e.TO_OUTSIDE = "TO_OUTSIDE", e.ON_PLACE = "ON_PLACE", e))(Xn || {}), Zn = /* @__PURE__ */ ((e) => (e.Monday = "Понедельник", e.Tuesday = "Вторник", e.Wednesday = "Среда", e.Thursday = "Четверг", e.Friday = "Пятница", e.Saturday = "Суббота", e.Sunday = "Воскресенье", e))(Zn || {});
function kt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ot = () => Math.random().toString(36).substring(7).split("").join("."), eo = {
  INIT: `@@redux/INIT${Ot()}`,
  REPLACE: `@@redux/REPLACE${Ot()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ot()}`
}, Ve = eo;
function le(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function to(e) {
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
  if (oo(e))
    return "date";
  if (no(e))
    return "error";
  const r = ro(e);
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
function ro(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function no(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function oo(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function io(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = to(e)), t;
}
function dr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function so(e, t, r, n) {
  const o = Object.keys(t), u = r && r.type === Ve.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!le(e))
    return `The ${u} has unexpected type of "${io(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const a = Object.keys(e).filter((v) => !t.hasOwnProperty(v) && !n[v]);
  if (a.forEach((v) => {
    n[v] = !0;
  }), !(r && r.type === Ve.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${u}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function uo(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Ve.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? kt(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Ve.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? kt(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Ve.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function co(e) {
  const t = Object.keys(e), r = {};
  for (let a = 0; a < t.length; a++) {
    const v = t[a];
    process.env.NODE_ENV !== "production" && typeof e[v] > "u" && dr(`No reducer provided for key "${v}"`), typeof e[v] == "function" && (r[v] = e[v]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let u;
  try {
    uo(r);
  } catch (a) {
    u = a;
  }
  return function(v = {}, b) {
    if (u)
      throw u;
    if (process.env.NODE_ENV !== "production") {
      const g = so(v, r, b, o);
      g && dr(g);
    }
    let S = !1;
    const _ = {};
    for (let g = 0; g < n.length; g++) {
      const y = n[g], f = r[y], l = v[y], p = f(l, b);
      if (typeof p > "u") {
        const d = b && b.type;
        throw new Error(process.env.NODE_ENV === "production" ? kt(14) : `When called with an action of type ${d ? `"${String(d)}"` : "(unknown type)"}, the slice reducer for key "${y}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      _[y] = p, S = S || p !== l;
    }
    return S = S || n.length !== Object.keys(v).length, S ? _ : v;
  };
}
function Gt(e) {
  return le(e) && "type" in e && typeof e.type == "string";
}
var Jt = Symbol.for("immer-nothing"), Fe = Symbol.for("immer-draftable"), ee = Symbol.for("immer-state"), ln = process.env.NODE_ENV !== "production" ? [
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
    const r = ln[e], n = typeof r == "function" ? r.apply(null, t) : r;
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
  return e ? fn(e) || Array.isArray(e) || !!e[Fe] || !!((t = e.constructor) != null && t[Fe]) || Je(e) || Xe(e) : !1;
}
var ao = Object.prototype.constructor.toString();
function fn(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = _e(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === ao;
}
function lo(e) {
  return ie(e) || Y(15, e), e[ee].base_;
}
function Pe(e, t) {
  Ee(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Ee(e) {
  const t = e[ee];
  return t ? t.type_ : Array.isArray(e) ? 1 : Je(e) ? 2 : Xe(e) ? 3 : 0;
}
function Be(e, t) {
  return Ee(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function wt(e, t) {
  return Ee(e) === 2 ? e.get(t) : e[t];
}
function dn(e, t, r) {
  const n = Ee(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function fo(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Je(e) {
  return e instanceof Map;
}
function Xe(e) {
  return e instanceof Set;
}
function ge(e) {
  return e.copy_ || e.base_;
}
function xt(e, t) {
  if (Je(e))
    return new Map(e);
  if (Xe(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && fn(e))
    return _e(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[ee];
  let n = Reflect.ownKeys(r);
  for (let o = 0; o < n.length; o++) {
    const u = n[o], a = r[u];
    a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (r[u] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: a.enumerable,
      value: e[u]
    });
  }
  return Object.create(_e(e), r);
}
function Xt(e, t = !1) {
  return dt(e) || ie(e) || !se(e) || (Ee(e) > 1 && (e.set = e.add = e.clear = e.delete = po), Object.freeze(e), t && Pe(e, (r, n) => Xt(n, !0))), e;
}
function po() {
  Y(2);
}
function dt(e) {
  return Object.isFrozen(e);
}
var zt = {};
function be(e) {
  const t = zt[e];
  return t || Y(0, e), t;
}
function yo(e, t) {
  zt[e] || (zt[e] = t);
}
var We;
function pn() {
  return We;
}
function ho(e, t) {
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
function pr(e, t) {
  t && (be("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Lt(e) {
  Vt(e), e.drafts_.forEach(mo), e.drafts_ = null;
}
function Vt(e) {
  e === We && (We = e.parent_);
}
function yr(e) {
  return We = ho(We, e);
}
function mo(e) {
  const t = e[ee];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function hr(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[ee].modified_ && (Lt(t), Y(4)), se(e) && (e = st(t, e), t.parent_ || ut(t, e)), t.patches_ && be("Patches").generateReplacementPatches_(
    r[ee].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = st(t, r, []), Lt(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Jt ? e : void 0;
}
function st(e, t, r) {
  if (dt(t))
    return t;
  const n = t[ee];
  if (!n)
    return Pe(
      t,
      (o, u) => mr(e, n, t, o, u, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return ut(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let u = o, a = !1;
    n.type_ === 3 && (u = new Set(o), o.clear(), a = !0), Pe(
      u,
      (v, b) => mr(e, n, o, v, b, r, a)
    ), ut(e, o, !1), r && e.patches_ && be("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function mr(e, t, r, n, o, u, a) {
  if (process.env.NODE_ENV !== "production" && o === r && Y(5), ie(o)) {
    const v = u && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Be(t.assigned_, n) ? u.concat(n) : void 0, b = st(e, o, v);
    if (dn(r, n, b), ie(b))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    a && r.add(o);
  if (se(o) && !dt(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    st(e, o), (!t || !t.scope_.parent_) && ut(e, o);
  }
}
function ut(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Xt(t, r);
}
function go(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : pn(),
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
  let o = n, u = Zt;
  r && (o = [n], u = Ke);
  const { revoke: a, proxy: v } = Proxy.revocable(o, u);
  return n.draft_ = v, n.revoke_ = a, v;
}
var Zt = {
  get(e, t) {
    if (t === ee)
      return e;
    const r = ge(e);
    if (!Be(r, t))
      return vo(e, r, t);
    const n = r[t];
    return e.finalized_ || !se(n) ? n : n === Rt(e.base_, t) ? (Tt(e), e.copy_[t] = Qt(n, e)) : n;
  },
  has(e, t) {
    return t in ge(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(ge(e));
  },
  set(e, t, r) {
    const n = yn(ge(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = Rt(ge(e), t), u = o == null ? void 0 : o[ee];
      if (u && u.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (fo(r, o) && (r !== void 0 || Be(e.base_, t)))
        return !0;
      Tt(e), Ft(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Rt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Tt(e), Ft(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
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
}, Ke = {};
Pe(Zt, (e, t) => {
  Ke[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Ke.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Y(13), Ke.set.call(this, e, t, void 0);
};
Ke.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Y(14), Zt.set.call(this, e[0], t, r, e[0]);
};
function Rt(e, t) {
  const r = e[ee];
  return (r ? ge(r) : e)[t];
}
function vo(e, t, r) {
  var o;
  const n = yn(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function yn(e, t) {
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
function Ft(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ft(e.parent_));
}
function Tt(e) {
  e.copy_ || (e.copy_ = xt(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var So = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const u = r;
        r = t;
        const a = this;
        return function(b = u, ...S) {
          return a.produce(b, (_) => r.call(this, _, ...S));
        };
      }
      typeof r != "function" && Y(6), n !== void 0 && typeof n != "function" && Y(7);
      let o;
      if (se(t)) {
        const u = yr(this), a = Qt(t, void 0);
        let v = !0;
        try {
          o = r(a), v = !1;
        } finally {
          v ? Lt(u) : Vt(u);
        }
        return pr(u, n), hr(o, u);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === Jt && (o = void 0), this.autoFreeze_ && Xt(o, !0), n) {
          const u = [], a = [];
          be("Patches").generateReplacementPatches_(t, o, u, a), n(u, a);
        }
        return o;
      } else
        Y(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (a, ...v) => this.produceWithPatches(a, (b) => t(b, ...v));
      let n, o;
      return [this.produce(t, r, (a, v) => {
        n = a, o = v;
      }), n, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    se(e) || Y(8), ie(e) && (e = hn(e));
    const t = yr(this), r = Qt(e, void 0);
    return r[ee].isManual_ = !0, Vt(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[ee];
    (!r || !r.isManual_) && Y(9);
    const { scope_: n } = r;
    return pr(n, t), hr(void 0, n);
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
    const n = be("Patches").applyPatches_;
    return ie(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function Qt(e, t) {
  const r = Je(e) ? be("MapSet").proxyMap_(e, t) : Xe(e) ? be("MapSet").proxySet_(e, t) : go(e, t);
  return (t ? t.scope_ : pn()).drafts_.push(r), r;
}
function hn(e) {
  return ie(e) || Y(10, e), mn(e);
}
function mn(e) {
  if (!se(e) || dt(e))
    return e;
  const t = e[ee];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = xt(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = xt(e, !0);
  return Pe(r, (n, o) => {
    dn(r, n, mn(o));
  }), t && (t.finalized_ = !1), r;
}
function _o() {
  process.env.NODE_ENV !== "production" && ln.push(
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
  function o(y, f, l, p) {
    switch (y.type_) {
      case 0:
      case 2:
        return a(
          y,
          f,
          l,
          p
        );
      case 1:
        return u(y, f, l, p);
      case 3:
        return v(
          y,
          f,
          l,
          p
        );
    }
  }
  function u(y, f, l, p) {
    let { base_: d, assigned_: m } = y, h = y.copy_;
    h.length < d.length && ([d, h] = [h, d], [l, p] = [p, l]);
    for (let s = 0; s < d.length; s++)
      if (m[s] && h[s] !== d[s]) {
        const i = f.concat([s]);
        l.push({
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
      const i = f.concat([s]);
      l.push({
        op: r,
        path: i,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: g(h[s])
      });
    }
    for (let s = h.length - 1; d.length <= s; --s) {
      const i = f.concat([s]);
      p.push({
        op: n,
        path: i
      });
    }
  }
  function a(y, f, l, p) {
    const { base_: d, copy_: m } = y;
    Pe(y.assigned_, (h, s) => {
      const i = wt(d, h), c = wt(m, h), E = s ? Be(d, h) ? t : r : n;
      if (i === c && E === t)
        return;
      const O = f.concat(h);
      l.push(E === n ? { op: E, path: O } : { op: E, path: O, value: c }), p.push(
        E === r ? { op: n, path: O } : E === n ? { op: r, path: O, value: g(i) } : { op: t, path: O, value: g(i) }
      );
    });
  }
  function v(y, f, l, p) {
    let { base_: d, copy_: m } = y, h = 0;
    d.forEach((s) => {
      if (!m.has(s)) {
        const i = f.concat([h]);
        l.push({
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
        const i = f.concat([h]);
        l.push({
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
  function b(y, f, l, p) {
    l.push({
      op: t,
      path: [],
      value: f === Jt ? void 0 : f
    }), p.push({
      op: t,
      path: [],
      value: y
    });
  }
  function S(y, f) {
    return f.forEach((l) => {
      const { path: p, op: d } = l;
      let m = y;
      for (let c = 0; c < p.length - 1; c++) {
        const E = Ee(m);
        let O = p[c];
        typeof O != "string" && typeof O != "number" && (O = "" + O), (E === 0 || E === 1) && (O === "__proto__" || O === "constructor") && Y(16 + 3), typeof m == "function" && O === "prototype" && Y(16 + 3), m = wt(m, O), typeof m != "object" && Y(16 + 2, p.join("/"));
      }
      const h = Ee(m), s = _(l.value), i = p[p.length - 1];
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
              return m.delete(l.value);
            default:
              return delete m[i];
          }
        default:
          Y(16 + 1, d);
      }
    }), y;
  }
  function _(y) {
    if (!se(y))
      return y;
    if (Array.isArray(y))
      return y.map(_);
    if (Je(y))
      return new Map(
        Array.from(y.entries()).map(([l, p]) => [l, _(p)])
      );
    if (Xe(y))
      return new Set(Array.from(y).map(_));
    const f = Object.create(_e(y));
    for (const l in y)
      f[l] = _(y[l]);
    return Be(y, Fe) && (f[Fe] = y[Fe]), f;
  }
  function g(y) {
    return ie(y) ? _(y) : y;
  }
  yo("Patches", {
    applyPatches_: S,
    generatePatches_: o,
    generateReplacementPatches_: b
  });
}
var re = new So(), qe = re.produce, gn = re.produceWithPatches.bind(
  re
);
re.setAutoFreeze.bind(re);
re.setUseStrictShallowCopy.bind(re);
var gr = re.applyPatches.bind(re);
re.createDraft.bind(re);
re.finishDraft.bind(re);
var Eo = (e) => {
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
}, bo = (e, t, r) => {
  const { memoize: n, memoizeOptions: o } = t, { inputSelectorResults: u, inputSelectorResultsCopy: a } = e, v = n(() => ({}), ...o);
  if (!(v.apply(null, u) === v.apply(null, a))) {
    let S;
    try {
      throw new Error();
    } catch (_) {
      ({ stack: S } = _);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: u,
        secondInputs: a,
        stack: S
      }
    );
  }
}, Oo = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function wo(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Ro(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var vr = (e) => Array.isArray(e) ? e : [e];
function To(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Ro(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Sr(e, t) {
  const r = [], { length: n } = e;
  for (let o = 0; o < n; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var Co = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...Oo,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: Eo
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: bo
    }
  };
}, Ao = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Mo = typeof WeakRef < "u" ? WeakRef : Ao, Io = 0, _r = 1;
function rt() {
  return {
    s: Io,
    v: void 0,
    o: null,
    p: null
  };
}
function Ye(e, t = {}) {
  let r = rt();
  const { resultEqualityCheck: n } = t;
  let o, u = 0;
  function a() {
    let v = r;
    const { length: b } = arguments;
    for (let g = 0, y = b; g < y; g++) {
      const f = arguments[g];
      if (typeof f == "function" || typeof f == "object" && f !== null) {
        let l = v.o;
        l === null && (v.o = l = /* @__PURE__ */ new WeakMap());
        const p = l.get(f);
        p === void 0 ? (v = rt(), l.set(f, v)) : v = p;
      } else {
        let l = v.p;
        l === null && (v.p = l = /* @__PURE__ */ new Map());
        const p = l.get(f);
        p === void 0 ? (v = rt(), l.set(f, v)) : v = p;
      }
    }
    const S = v;
    let _;
    if (v.s === _r ? _ = v.v : (_ = e.apply(null, arguments), u++), S.s = _r, n) {
      const g = (o == null ? void 0 : o.deref()) ?? o;
      g != null && n(g, _) && (_ = g, u !== 0 && u--), o = typeof _ == "object" && _ !== null || typeof _ == "function" ? new Mo(_) : _;
    }
    return S.v = _, _;
  }
  return a.clearCache = () => {
    r = rt(), a.resetResultsCount();
  }, a.resultsCount = () => u, a.resetResultsCount = () => {
    u = 0;
  }, a;
}
function vn(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e;
  return (...o) => {
    let u = 0, a = 0, v, b = {}, S = o.pop();
    typeof S == "object" && (b = S, S = o.pop()), wo(
      S,
      `createSelector expects an output function after the inputs, but received: [${typeof S}]`
    );
    const _ = {
      ...r,
      ...b
    }, {
      memoize: g,
      memoizeOptions: y = [],
      argsMemoize: f = Ye,
      argsMemoizeOptions: l = [],
      devModeChecks: p = {}
    } = _, d = vr(y), m = vr(l), h = To(o), s = g(function() {
      return u++, S.apply(
        null,
        arguments
      );
    }, ...d);
    let i = !0;
    const c = f(function() {
      a++;
      const O = Sr(
        h,
        arguments
      );
      if (process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: w, inputStabilityCheck: R } = Co(i, p);
        if (w.shouldRun && w.run(
          S
        ), R.shouldRun) {
          const T = Sr(
            h,
            arguments
          );
          R.run(
            { inputSelectorResults: O, inputSelectorResultsCopy: T },
            { memoize: g, memoizeOptions: d },
            arguments
          );
        }
        i && (i = !1);
      }
      return v = s.apply(null, O), v;
    }, ...m);
    return Object.assign(c, {
      resultFunc: S,
      memoizedResultFunc: s,
      dependencies: h,
      dependencyRecomputations: () => a,
      resetDependencyRecomputations: () => {
        a = 0;
      },
      lastResult: () => v,
      recomputations: () => u,
      resetRecomputations: () => {
        u = 0;
      },
      memoize: g,
      argsMemoize: f
    });
  };
}
var Sn = /* @__PURE__ */ vn(Ye), No = (...e) => {
  const t = vn(...e), r = Object.assign((...n) => {
    const o = t(...n), u = (a, ...v) => o(ie(a) ? hn(a) : a, ...v);
    return Object.assign(u, o), u;
  }, {
    withTypes: () => r
  });
  return r;
}, Po = No(Ye), Do = (e) => e && typeof e.match == "function";
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
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Gt(n) && n.type === e, r;
}
function $o(e) {
  return Gt(e) && Object.keys(e).every(qo);
}
function qo(e) {
  return ["type", "payload", "error", "meta"].indexOf(e) > -1;
}
function Er(e) {
  return se(e) ? qe(e, () => {
  }) : e;
}
function br(e, t, r) {
  if (e.has(t)) {
    let o = e.get(t);
    return r.update && (o = r.update(o, t, e), e.set(t, o)), o;
  }
  if (!r.insert)
    throw new Error(process.env.NODE_ENV === "production" ? U(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
var Le = "RTK_autoBatch", ke = () => (e) => ({
  payload: e,
  meta: {
    [Le]: !0
  }
});
process.env.NODE_ENV;
function _n(e) {
  const t = {}, r = [];
  let n;
  const o = {
    addCase(u, a) {
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
      return t[v] = a, o;
    },
    addMatcher(u, a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? U(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: u,
        reducer: a
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
function jo(e) {
  return typeof e == "function";
}
function ko(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? U(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = _n(t), u;
  if (jo(e))
    u = () => Er(e());
  else {
    const v = Er(e);
    u = () => v;
  }
  function a(v = u(), b) {
    let S = [r[b.type], ...n.filter(({
      matcher: _
    }) => _(b)).map(({
      reducer: _
    }) => _)];
    return S.filter((_) => !!_).length === 0 && (S = [o]), S.reduce((_, g) => {
      if (g)
        if (ie(_)) {
          const f = g(_, b);
          return f === void 0 ? _ : f;
        } else {
          if (se(_))
            return qe(_, (y) => g(y, b));
          {
            const y = g(_, b);
            if (y === void 0) {
              if (_ === null)
                return _;
              throw new Error(process.env.NODE_ENV === "production" ? U(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return y;
          }
        }
      return _;
    }, v);
  }
  return a.getInitialState = u, a;
}
var xo = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", er = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += xo[Math.random() * 64 | 0];
  return t;
}, En = (e, t) => Do(e) ? e.match(t) : e(t);
function ye(...e) {
  return (t) => e.some((r) => En(r, t));
}
function Qe(...e) {
  return (t) => e.every((r) => En(r, t));
}
function pt(e, t) {
  if (!e || !e.meta)
    return !1;
  const r = typeof e.meta.requestId == "string", n = t.indexOf(e.meta.requestStatus) > -1;
  return r && n;
}
function Ze(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function tr(...e) {
  return e.length === 0 ? (t) => pt(t, ["pending"]) : Ze(e) ? (t) => {
    const r = e.map((o) => o.pending);
    return ye(...r)(t);
  } : tr()(e[0]);
}
function De(...e) {
  return e.length === 0 ? (t) => pt(t, ["rejected"]) : Ze(e) ? (t) => {
    const r = e.map((o) => o.rejected);
    return ye(...r)(t);
  } : De()(e[0]);
}
function yt(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0 ? (r) => Qe(De(...e), t)(r) : Ze(e) ? (r) => Qe(De(...e), t)(r) : yt()(e[0]);
}
function he(...e) {
  return e.length === 0 ? (t) => pt(t, ["fulfilled"]) : Ze(e) ? (t) => {
    const r = e.map((o) => o.fulfilled);
    return ye(...r)(t);
  } : he()(e[0]);
}
function Ut(...e) {
  return e.length === 0 ? (t) => pt(t, ["pending", "fulfilled", "rejected"]) : Ze(e) ? (t) => {
    const r = [];
    for (const o of e)
      r.push(o.pending, o.rejected, o.fulfilled);
    return ye(...r)(t);
  } : Ut()(e[0]);
}
var zo = ["name", "message", "stack", "code"], Ct = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    bt(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Or = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    bt(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Lo = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of zo)
      typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return {
    message: String(e)
  };
}, wr = /* @__PURE__ */ (() => {
  function e(t, r, n) {
    const o = X(t + "/fulfilled", (b, S, _, g) => ({
      payload: b,
      meta: {
        ...g || {},
        arg: _,
        requestId: S,
        requestStatus: "fulfilled"
      }
    })), u = X(t + "/pending", (b, S, _) => ({
      payload: void 0,
      meta: {
        ..._ || {},
        arg: S,
        requestId: b,
        requestStatus: "pending"
      }
    })), a = X(t + "/rejected", (b, S, _, g, y) => ({
      payload: g,
      error: (n && n.serializeError || Lo)(b || "Rejected"),
      meta: {
        ...y || {},
        arg: _,
        requestId: S,
        rejectedWithValue: !!g,
        requestStatus: "rejected",
        aborted: (b == null ? void 0 : b.name) === "AbortError",
        condition: (b == null ? void 0 : b.name) === "ConditionError"
      }
    }));
    function v(b) {
      return (S, _, g) => {
        const y = n != null && n.idGenerator ? n.idGenerator(b) : er(), f = new AbortController();
        let l, p;
        function d(h) {
          p = h, f.abort();
        }
        const m = async function() {
          var i, c;
          let h;
          try {
            let E = (i = n == null ? void 0 : n.condition) == null ? void 0 : i.call(n, b, {
              getState: _,
              extra: g
            });
            if (Fo(E) && (E = await E), E === !1 || f.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const O = new Promise((w, R) => {
              l = () => {
                R({
                  name: "AbortError",
                  message: p || "Aborted"
                });
              }, f.signal.addEventListener("abort", l);
            });
            S(u(y, b, (c = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : c.call(n, {
              requestId: y,
              arg: b
            }, {
              getState: _,
              extra: g
            }))), h = await Promise.race([O, Promise.resolve(r(b, {
              dispatch: S,
              getState: _,
              extra: g,
              requestId: y,
              signal: f.signal,
              abort: d,
              rejectWithValue: (w, R) => new Ct(w, R),
              fulfillWithValue: (w, R) => new Or(w, R)
            })).then((w) => {
              if (w instanceof Ct)
                throw w;
              return w instanceof Or ? o(w.payload, y, b, w.meta) : o(w, y, b);
            })]);
          } catch (E) {
            h = E instanceof Ct ? a(null, y, b, E.payload, E.meta) : a(E, y, b);
          } finally {
            l && f.signal.removeEventListener("abort", l);
          }
          return n && !n.dispatchConditionRejection && a.match(h) && h.meta.condition || S(h), h;
        }();
        return Object.assign(m, {
          abort: d,
          requestId: y,
          arg: b,
          unwrap() {
            return m.then(Vo);
          }
        });
      };
    }
    return Object.assign(v, {
      pending: u,
      rejected: a,
      fulfilled: o,
      settled: ye(a, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Vo(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Fo(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Qo = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Uo(e, t) {
  return `${e}/${t}`;
}
function Bo({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[Qo];
  return function(o) {
    const {
      name: u,
      reducerPath: a = u
    } = o;
    if (!u)
      throw new Error(process.env.NODE_ENV === "production" ? U(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const v = (typeof o.reducers == "function" ? o.reducers(Ko()) : o.reducers) || {}, b = Object.keys(v), S = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, _ = {
      addCase(s, i) {
        const c = typeof s == "string" ? s : s.type;
        if (!c)
          throw new Error(process.env.NODE_ENV === "production" ? U(12) : "`context.addCase` cannot be called with an empty action type");
        if (c in S.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? U(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + c);
        return S.sliceCaseReducersByType[c] = i, _;
      },
      addMatcher(s, i) {
        return S.sliceMatchers.push({
          matcher: s,
          reducer: i
        }), _;
      },
      exposeAction(s, i) {
        return S.actionCreators[s] = i, _;
      },
      exposeCaseReducer(s, i) {
        return S.sliceCaseReducersByName[s] = i, _;
      }
    };
    b.forEach((s) => {
      const i = v[s], c = {
        reducerName: s,
        type: Uo(u, s),
        createNotation: typeof o.reducers == "function"
      };
      Ho(i) ? Jo(c, i, _, t) : Yo(c, i, _);
    });
    function g() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? U(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [s = {}, i = [], c = void 0] = typeof o.extraReducers == "function" ? _n(o.extraReducers) : [o.extraReducers], E = {
        ...s,
        ...S.sliceCaseReducersByType
      };
      return ko(o.initialState, (O) => {
        for (let w in E)
          O.addCase(w, E[w]);
        for (let w of S.sliceMatchers)
          O.addMatcher(w.matcher, w.reducer);
        for (let w of i)
          O.addMatcher(w.matcher, w.reducer);
        c && O.addDefaultCase(c);
      });
    }
    const y = (s) => s, f = /* @__PURE__ */ new Map();
    let l;
    function p(s, i) {
      return l || (l = g()), l(s, i);
    }
    function d() {
      return l || (l = g()), l.getInitialState();
    }
    function m(s, i = !1) {
      function c(O) {
        let w = O[s];
        if (typeof w > "u") {
          if (i)
            w = d();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? U(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return w;
      }
      function E(O = y) {
        const w = br(f, i, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return br(w, O, {
          insert: () => {
            const R = {};
            for (const [T, A] of Object.entries(o.selectors ?? {}))
              R[T] = Wo(A, O, d, i);
            return R;
          }
        });
      }
      return {
        reducerPath: s,
        getSelectors: E,
        get selectors() {
          return E(c);
        },
        selectSlice: c
      };
    }
    const h = {
      name: u,
      reducer: p,
      actions: S.actionCreators,
      caseReducers: S.sliceCaseReducersByName,
      getInitialState: d,
      ...m(a),
      injectInto(s, {
        reducerPath: i,
        ...c
      } = {}) {
        const E = i ?? a;
        return s.inject({
          reducerPath: E,
          reducer: p
        }, c), {
          ...h,
          ...m(E, !0)
        };
      }
    };
    return h;
  };
}
function Wo(e, t, r, n) {
  function o(u, ...a) {
    let v = t(u);
    if (typeof v > "u") {
      if (n)
        v = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? U(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(v, ...a);
  }
  return o.unwrapped = e, o;
}
var Te = /* @__PURE__ */ Bo();
function Ko() {
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
function Yo({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let u, a;
  if ("reducer" in n) {
    if (r && !Go(n))
      throw new Error(process.env.NODE_ENV === "production" ? U(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    u = n.reducer, a = n.prepare;
  } else
    u = n;
  o.addCase(e, u).exposeCaseReducer(t, u).exposeAction(t, a ? X(e, a) : X(e));
}
function Ho(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Go(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Jo({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? U(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: u,
    fulfilled: a,
    pending: v,
    rejected: b,
    settled: S,
    options: _
  } = r, g = o(e, u, _);
  n.exposeAction(t, g), a && n.addCase(g.fulfilled, a), v && n.addCase(g.pending, v), b && n.addCase(g.rejected, b), S && n.addMatcher(g.settled, S), n.exposeCaseReducer(t, {
    fulfilled: a || nt,
    pending: v || nt,
    rejected: b || nt,
    settled: S || nt
  });
}
function nt() {
}
function Xo() {
  return {
    ids: [],
    entities: {}
  };
}
function Zo(e) {
  function t(r = {}, n) {
    const o = Object.assign(Xo(), r);
    return n ? e.setAll(o, n) : o;
  }
  return {
    getInitialState: t
  };
}
function ei() {
  function e(t, r = {}) {
    const {
      createSelector: n = Po
    } = r, o = (g) => g.ids, u = (g) => g.entities, a = n(o, u, (g, y) => g.map((f) => y[f])), v = (g, y) => y, b = (g, y) => g[y], S = n(o, (g) => g.length);
    if (!t)
      return {
        selectIds: o,
        selectEntities: u,
        selectAll: a,
        selectTotal: S,
        selectById: n(u, v, b)
      };
    const _ = n(t, u);
    return {
      selectIds: n(t, o),
      selectEntities: _,
      selectAll: n(t, a),
      selectTotal: n(t, S),
      selectById: n(_, v, b)
    };
  }
  return {
    getSelectors: e
  };
}
var ti = ie;
function ri(e) {
  const t = K((r, n) => e(n));
  return function(n) {
    return t(n, void 0);
  };
}
function K(e) {
  return function(r, n) {
    function o(a) {
      return $o(a);
    }
    const u = (a) => {
      o(n) ? e(n.payload, a) : e(n, a);
    };
    return ti(r) ? (u(r), r) : qe(r, u);
  };
}
function Me(e, t) {
  const r = t(e);
  return process.env.NODE_ENV !== "production" && r === void 0 && console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", e, "The `selectId` implementation:", t.toString()), r;
}
function Se(e) {
  return Array.isArray(e) || (e = Object.values(e)), e;
}
function bn(e, t, r) {
  e = Se(e);
  const n = [], o = [];
  for (const u of e) {
    const a = Me(u, t);
    a in r.entities ? o.push({
      id: a,
      changes: u
    }) : n.push(u);
  }
  return [n, o];
}
function On(e) {
  function t(l, p) {
    const d = Me(l, e);
    d in p.entities || (p.ids.push(d), p.entities[d] = l);
  }
  function r(l, p) {
    l = Se(l);
    for (const d of l)
      t(d, p);
  }
  function n(l, p) {
    const d = Me(l, e);
    d in p.entities || p.ids.push(d), p.entities[d] = l;
  }
  function o(l, p) {
    l = Se(l);
    for (const d of l)
      n(d, p);
  }
  function u(l, p) {
    l = Se(l), p.ids = [], p.entities = {}, r(l, p);
  }
  function a(l, p) {
    return v([l], p);
  }
  function v(l, p) {
    let d = !1;
    l.forEach((m) => {
      m in p.entities && (delete p.entities[m], d = !0);
    }), d && (p.ids = p.ids.filter((m) => m in p.entities));
  }
  function b(l) {
    Object.assign(l, {
      ids: [],
      entities: {}
    });
  }
  function S(l, p, d) {
    const m = d.entities[p.id];
    if (m === void 0)
      return !1;
    const h = Object.assign({}, m, p.changes), s = Me(h, e), i = s !== p.id;
    return i && (l[p.id] = s, delete d.entities[p.id]), d.entities[s] = h, i;
  }
  function _(l, p) {
    return g([l], p);
  }
  function g(l, p) {
    const d = {}, m = {};
    l.forEach((s) => {
      s.id in p.entities && (m[s.id] = {
        id: s.id,
        // Spreads ignore falsy values, so this works even if there isn't
        // an existing update already at this key
        changes: {
          ...m[s.id] ? m[s.id].changes : null,
          ...s.changes
        }
      });
    }), l = Object.values(m), l.length > 0 && l.filter((i) => S(d, i, p)).length > 0 && (p.ids = Object.values(p.entities).map((i) => Me(i, e)));
  }
  function y(l, p) {
    return f([l], p);
  }
  function f(l, p) {
    const [d, m] = bn(l, e, p);
    g(m, p), r(d, p);
  }
  return {
    removeAll: ri(b),
    addOne: K(t),
    addMany: K(r),
    setOne: K(n),
    setMany: K(o),
    setAll: K(u),
    updateOne: K(_),
    updateMany: K(g),
    upsertOne: K(y),
    upsertMany: K(f),
    removeOne: K(a),
    removeMany: K(v)
  };
}
function ni(e, t) {
  const {
    removeOne: r,
    removeMany: n,
    removeAll: o
  } = On(e);
  function u(m, h) {
    return a([m], h);
  }
  function a(m, h) {
    m = Se(m);
    const s = m.filter((i) => !(Me(i, e) in h.entities));
    s.length !== 0 && p(s, h);
  }
  function v(m, h) {
    return b([m], h);
  }
  function b(m, h) {
    m = Se(m), m.length !== 0 && p(m, h);
  }
  function S(m, h) {
    m = Se(m), h.entities = {}, h.ids = [], a(m, h);
  }
  function _(m, h) {
    return g([m], h);
  }
  function g(m, h) {
    let s = !1;
    for (let i of m) {
      const c = h.entities[i.id];
      if (!c)
        continue;
      s = !0, Object.assign(c, i.changes);
      const E = e(c);
      i.id !== E && (delete h.entities[i.id], h.entities[E] = c);
    }
    s && d(h);
  }
  function y(m, h) {
    return f([m], h);
  }
  function f(m, h) {
    const [s, i] = bn(m, e, h);
    g(i, h), a(s, h);
  }
  function l(m, h) {
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
    l(i, s) || (m.ids = s);
  }
  return {
    removeOne: r,
    removeMany: n,
    removeAll: o,
    addOne: K(u),
    updateOne: K(_),
    upsertOne: K(y),
    setOne: K(v),
    setMany: K(b),
    setAll: K(S),
    addMany: K(a),
    updateMany: K(g),
    upsertMany: K(f)
  };
}
function we(e = {}) {
  const {
    selectId: t,
    sortComparer: r
  } = {
    sortComparer: !1,
    selectId: (a) => a.id,
    ...e
  }, n = r ? ni(t, r) : On(t), o = Zo(n), u = ei();
  return {
    selectId: t,
    sortComparer: r,
    ...o,
    ...u,
    ...n
  };
}
var oi = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? U(32) : `${t} is not a function`);
}, rr = "listenerMiddleware", ii = (e) => {
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
  return oi(u, "options.listener"), {
    predicate: o,
    type: t,
    effect: u
  };
}, si = Object.assign((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = ii(e);
  return {
    id: er(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? U(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => si
}), ui = Object.assign(X(`${rr}/add`), {
  withTypes: () => ui
});
X(`${rr}/removeAll`);
var ci = Object.assign(X(`${rr}/remove`), {
  withTypes: () => ci
});
function U(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var wn = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(wn || {});
function ai(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
function li(e) {
  return new RegExp("(^|:)//").test(e);
}
var fi = (e) => e.replace(/\/$/, ""), di = (e) => e.replace(/^\//, "");
function pi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (li(t))
    return t;
  const r = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = fi(e), t = di(t), `${e}${r}${t}`;
}
var Rr = (e) => [].concat(...e);
function yi() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function hi() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var Tr = le;
function Rn(e, t) {
  if (e === t || !(Tr(e) && Tr(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), n = Object.keys(e);
  let o = r.length === n.length;
  const u = Array.isArray(t) ? [] : {};
  for (const a of r)
    u[a] = Rn(e[a], t[a]), o && (o = e[a] === u[a]);
  return o ? e : u;
}
var Cr = (...e) => fetch(...e), mi = (e) => e.status >= 200 && e.status <= 299, gi = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function Ar(e) {
  if (!le(e))
    return e;
  const t = {
    ...e
  };
  for (const [r, n] of Object.entries(t))
    n === void 0 && delete t[r];
  return t;
}
function vi({
  baseUrl: e,
  prepareHeaders: t = (g) => g,
  fetchFn: r = Cr,
  paramsSerializer: n,
  isJsonContentType: o = gi,
  jsonContentType: u = "application/json",
  jsonReplacer: a,
  timeout: v,
  responseHandler: b,
  validateStatus: S,
  ..._
} = {}) {
  return typeof fetch > "u" && r === Cr && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (y, f) => {
    const {
      signal: l,
      getState: p,
      extra: d,
      endpoint: m,
      forced: h,
      type: s
    } = f;
    let i, {
      url: c,
      headers: E = new Headers(_.headers),
      params: O = void 0,
      responseHandler: w = b ?? "json",
      validateStatus: R = S ?? mi,
      timeout: T = v,
      ...A
    } = typeof y == "string" ? {
      url: y
    } : y, C = {
      ..._,
      signal: l,
      ...A
    };
    E = new Headers(Ar(E)), C.headers = await t(E, {
      getState: p,
      extra: d,
      endpoint: m,
      forced: h,
      type: s
    }) || E;
    const N = (z) => typeof z == "object" && (le(z) || Array.isArray(z) || typeof z.toJSON == "function");
    if (!C.headers.has("content-type") && N(C.body) && C.headers.set("content-type", u), N(C.body) && o(C.headers) && (C.body = JSON.stringify(C.body, a)), O) {
      const z = ~c.indexOf("?") ? "&" : "?", G = n ? n(O) : new URLSearchParams(Ar(O));
      c += z + G;
    }
    c = pi(e, c);
    const P = new Request(c, C);
    i = {
      request: new Request(c, C)
    };
    let $, x = !1, j = T && setTimeout(() => {
      x = !0, f.abort();
    }, T);
    try {
      $ = await r(P);
    } catch (z) {
      return {
        error: {
          status: x ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(z)
        },
        meta: i
      };
    } finally {
      j && clearTimeout(j);
    }
    const W = $.clone();
    i.response = W;
    let q, H = "";
    try {
      let z;
      if (await Promise.all([
        g($, w).then((G) => q = G, (G) => z = G),
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
          originalStatus: $.status,
          data: H,
          error: String(z)
        },
        meta: i
      };
    }
    return R($, q) ? {
      data: q,
      meta: i
    } : {
      error: {
        status: $.status,
        data: q
      },
      meta: i
    };
  };
  async function g(y, f) {
    if (typeof f == "function")
      return f(y);
    if (f === "content-type" && (f = o(y.headers) ? "json" : "text"), f === "json") {
      const l = await y.text();
      return l.length ? JSON.parse(l) : null;
    }
    return y.text();
  }
}
var Mr = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, nr = /* @__PURE__ */ X("__rtkq/focused"), Tn = /* @__PURE__ */ X("__rtkq/unfocused"), or = /* @__PURE__ */ X("__rtkq/online"), Cn = /* @__PURE__ */ X("__rtkq/offline");
function An(e) {
  return e.type === "query";
}
function Si(e) {
  return e.type === "mutation";
}
function ir(e, t, r, n, o, u) {
  return _i(e) ? e(t, r, n, o).map(Bt).map(u) : Array.isArray(e) ? e.map(Bt).map(u) : [];
}
function _i(e) {
  return typeof e == "function";
}
function Bt(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Ir(e) {
  return e != null;
}
function Ne(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
function Ei(e, t) {
  return e.catch(t);
}
var He = Symbol("forceQueryFn"), Wt = (e) => typeof e[He] == "function";
function bi({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: r,
  api: n,
  context: o
}) {
  const u = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: v,
    removeMutationResult: b,
    updateSubscriptionOptions: S
  } = n.internalActions;
  return {
    buildInitiateQuery: p,
    buildInitiateMutation: d,
    getRunningQueryThunk: _,
    getRunningMutationThunk: g,
    getRunningQueriesThunk: y,
    getRunningMutationsThunk: f
  };
  function _(m, h) {
    return (s) => {
      var E;
      const i = o.endpointDefinitions[m], c = e({
        queryArgs: h,
        endpointDefinition: i,
        endpointName: m
      });
      return (E = u.get(s)) == null ? void 0 : E[c];
    };
  }
  function g(m, h) {
    return (s) => {
      var i;
      return (i = a.get(s)) == null ? void 0 : i[h];
    };
  }
  function y() {
    return (m) => Object.values(u.get(m) || {}).filter(Ir);
  }
  function f() {
    return (m) => Object.values(a.get(m) || {}).filter(Ir);
  }
  function l(m) {
    if (process.env.NODE_ENV !== "production") {
      if (l.triggered)
        return;
      const h = m(n.internalActions.internal_getRTKQSubscriptions());
      if (l.triggered = !0, typeof h != "object" || typeof (h == null ? void 0 : h.type) == "string")
        throw new Error(process.env.NODE_ENV === "production" ? U(34) : `Warning: Middleware for RTK-Query API at reducerPath "${n.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function p(m, h) {
    const s = (i, {
      subscribe: c = !0,
      forceRefetch: E,
      subscriptionOptions: O,
      [He]: w,
      ...R
    } = {}) => (T, A) => {
      var G;
      const C = e({
        queryArgs: i,
        endpointDefinition: h,
        endpointName: m
      }), N = t({
        ...R,
        type: "query",
        subscribe: c,
        forceRefetch: E,
        subscriptionOptions: O,
        endpointName: m,
        originalArgs: i,
        queryCacheKey: C,
        [He]: w
      }), P = n.endpoints[m].select(i), D = T(N), $ = P(A());
      l(T);
      const {
        requestId: x,
        abort: j
      } = D, W = $.requestId !== x, q = (G = u.get(T)) == null ? void 0 : G[C], H = () => P(A()), z = Object.assign(w ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        D.then(H)
      ) : W && !q ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve($)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([q, D]).then(H)
      ), {
        arg: i,
        requestId: x,
        subscriptionOptions: O,
        queryCacheKey: C,
        abort: j,
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
          z.subscriptionOptions = J, T(S({
            endpointName: m,
            requestId: x,
            queryCacheKey: C,
            options: J
          }));
        }
      });
      if (!q && !W && !w) {
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
    } = {}) => (c, E) => {
      const O = r({
        type: "mutation",
        endpointName: m,
        originalArgs: h,
        track: s,
        fixedCacheKey: i
      }), w = c(O);
      l(c);
      const {
        requestId: R,
        abort: T,
        unwrap: A
      } = w, C = Ei(w.unwrap().then(($) => ({
        data: $
      })), ($) => ({
        error: $
      })), N = () => {
        c(b({
          requestId: R,
          fixedCacheKey: i
        }));
      }, P = Object.assign(C, {
        arg: w.arg,
        requestId: R,
        abort: T,
        unwrap: A,
        reset: N
      }), D = a.get(c) || {};
      return a.set(c, D), D[R] = P, P.then(() => {
        delete D[R], Ne(D) || a.delete(c);
      }), i && (D[i] = P, P.then(() => {
        D[i] === P && (delete D[i], Ne(D) || a.delete(c));
      })), P;
    };
  }
}
function Nr(e) {
  return e;
}
function Oi({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: r
  },
  serializeQueryArgs: n,
  api: o,
  assertTagType: u
}) {
  const a = (h, s, i, c) => (E, O) => {
    const w = r[h], R = n({
      queryArgs: s,
      endpointDefinition: w,
      endpointName: h
    });
    if (E(o.internalActions.queryResultPatched({
      queryCacheKey: R,
      patches: i
    })), !c)
      return;
    const T = o.endpoints[h].select(s)(
      // Work around TS 4.1 mismatch
      O()
    ), A = ir(w.providesTags, T.data, void 0, s, {}, u);
    E(o.internalActions.updateProvidedBy({
      queryCacheKey: R,
      providedTags: A
    }));
  }, v = (h, s, i, c = !0) => (E, O) => {
    const R = o.endpoints[h].select(s)(
      // Work around TS 4.1 mismatch
      O()
    );
    let T = {
      patches: [],
      inversePatches: [],
      undo: () => E(o.util.patchQueryData(h, s, T.inversePatches, c))
    };
    if (R.status === "uninitialized")
      return T;
    let A;
    if ("data" in R)
      if (se(R.data)) {
        const [C, N, P] = gn(R.data, i);
        T.patches.push(...N), T.inversePatches.push(...P), A = C;
      } else
        A = i(R.data), T.patches.push({
          op: "replace",
          path: [],
          value: A
        }), T.inversePatches.push({
          op: "replace",
          path: [],
          value: R.data
        });
    return E(o.util.patchQueryData(h, s, T.patches, c)), T;
  }, b = (h, s, i) => (c) => c(o.endpoints[h].initiate(s, {
    subscribe: !1,
    forceRefetch: !0,
    [He]: () => ({
      data: i
    })
  })), S = async (h, {
    signal: s,
    abort: i,
    rejectWithValue: c,
    fulfillWithValue: E,
    dispatch: O,
    getState: w,
    extra: R
  }) => {
    const T = r[h.endpointName];
    try {
      let A = Nr, C;
      const N = {
        signal: s,
        abort: i,
        dispatch: O,
        getState: w,
        extra: R,
        endpoint: h.endpointName,
        type: h.type,
        forced: h.type === "query" ? _(h, w()) : void 0
      }, P = h.type === "query" ? h[He] : void 0;
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
          for (const x of Object.keys(C))
            if (x !== "error" && x !== "data" && x !== "meta") {
              $ = `The object returned by ${D} has the unknown property ${x}.`;
              break;
            }
        $ && console.error(`Error encountered handling the endpoint ${h.endpointName}.
              ${$}
              It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
              Object returned was:`, C);
      }
      if (C.error)
        throw new Mr(C.error, C.meta);
      return E(await A(C.data, C.meta, h.originalArgs), {
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: C.meta,
        [Le]: !0
      });
    } catch (A) {
      let C = A;
      if (C instanceof Mr) {
        let N = Nr;
        T.query && T.transformErrorResponse && (N = T.transformErrorResponse);
        try {
          return c(await N(C.value, C.meta, h.originalArgs), {
            baseQueryMeta: C.meta,
            [Le]: !0
          });
        } catch (P) {
          C = P;
        }
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${h.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, C) : console.error(C), C;
    }
  };
  function _(h, s) {
    var w, R, T;
    const i = (R = (w = s[e]) == null ? void 0 : w.queries) == null ? void 0 : R[h.queryCacheKey], c = (T = s[e]) == null ? void 0 : T.config.refetchOnMountOrArgChange, E = i == null ? void 0 : i.fulfilledTimeStamp, O = h.forceRefetch ?? (h.subscribe && c);
    return O ? O === !0 || (Number(/* @__PURE__ */ new Date()) - Number(E)) / 1e3 >= O : !1;
  }
  const g = wr(`${e}/executeQuery`, S, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [Le]: !0
      };
    },
    condition(h, {
      getState: s
    }) {
      var T, A, C;
      const i = s(), c = (A = (T = i[e]) == null ? void 0 : T.queries) == null ? void 0 : A[h.queryCacheKey], E = c == null ? void 0 : c.fulfilledTimeStamp, O = h.originalArgs, w = c == null ? void 0 : c.originalArgs, R = r[h.endpointName];
      return Wt(h) ? !0 : (c == null ? void 0 : c.status) === "pending" ? !1 : _(h, i) || An(R) && ((C = R == null ? void 0 : R.forceRefetch) != null && C.call(R, {
        currentArg: O,
        previousArg: w,
        endpointState: c,
        state: i
      })) ? !0 : !E;
    },
    dispatchConditionRejection: !0
  }), y = wr(`${e}/executeMutation`, S, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [Le]: !0
      };
    }
  }), f = (h) => "force" in h, l = (h) => "ifOlderThan" in h, p = (h, s, i) => (c, E) => {
    const O = f(i) && i.force, w = l(i) && i.ifOlderThan, R = (A = !0) => {
      const C = {
        forceRefetch: A,
        isPrefetch: !0
      };
      return o.endpoints[h].initiate(s, C);
    }, T = o.endpoints[h].select(s)(E());
    if (O)
      c(R());
    else if (w) {
      const A = T == null ? void 0 : T.fulfilledTimeStamp;
      if (!A) {
        c(R());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(A))) / 1e3 >= w && c(R());
    } else
      c(R(!1));
  };
  function d(h) {
    return (s) => {
      var i, c;
      return ((c = (i = s == null ? void 0 : s.meta) == null ? void 0 : i.arg) == null ? void 0 : c.endpointName) === h;
    };
  }
  function m(h, s) {
    return {
      matchPending: Qe(tr(h), d(s)),
      matchFulfilled: Qe(he(h), d(s)),
      matchRejected: Qe(De(h), d(s))
    };
  }
  return {
    queryThunk: g,
    mutationThunk: y,
    prefetch: p,
    updateQueryData: v,
    upsertQueryData: b,
    patchQueryData: a,
    buildMatchThunkActions: m
  };
}
function Mn(e, t, r, n) {
  return ir(r[e.meta.arg.endpointName][t], he(e) ? e.payload : void 0, yt(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, n);
}
function ot(e, t, r) {
  const n = e[t];
  n && r(n);
}
function Ge(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Pr(e, t, r) {
  const n = e[Ge(t)];
  n && r(n);
}
var xe = {};
function wi({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  context: {
    endpointDefinitions: n,
    apiUid: o,
    extractRehydrationInfo: u,
    hasRehydrationInfo: a
  },
  assertTagType: v,
  config: b
}) {
  const S = X(`${e}/resetApiState`), _ = Te({
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
        prepare: ke()
      },
      queryResultPatched: {
        reducer(s, {
          payload: {
            queryCacheKey: i,
            patches: c
          }
        }) {
          ot(s, i, (E) => {
            E.data = gr(E.data, c.concat());
          });
        },
        prepare: ke()
      }
    },
    extraReducers(s) {
      s.addCase(t.pending, (i, {
        meta: c,
        meta: {
          arg: E
        }
      }) => {
        var w;
        const O = Wt(E);
        i[w = E.queryCacheKey] ?? (i[w] = {
          status: "uninitialized",
          endpointName: E.endpointName
        }), ot(i, E.queryCacheKey, (R) => {
          R.status = "pending", R.requestId = O && R.requestId ? (
            // for `upsertQuery` **updates**, keep the current `requestId`
            R.requestId
          ) : (
            // for normal queries or `upsertQuery` **inserts** always update the `requestId`
            c.requestId
          ), E.originalArgs !== void 0 && (R.originalArgs = E.originalArgs), R.startedTimeStamp = c.startedTimeStamp;
        });
      }).addCase(t.fulfilled, (i, {
        meta: c,
        payload: E
      }) => {
        ot(i, c.arg.queryCacheKey, (O) => {
          if (O.requestId !== c.requestId && !Wt(c.arg))
            return;
          const {
            merge: w
          } = n[c.arg.endpointName];
          if (O.status = "fulfilled", w)
            if (O.data !== void 0) {
              const {
                fulfilledTimeStamp: R,
                arg: T,
                baseQueryMeta: A,
                requestId: C
              } = c;
              let N = qe(O.data, (P) => w(P, E, {
                arg: T.originalArgs,
                baseQueryMeta: A,
                fulfilledTimeStamp: R,
                requestId: C
              }));
              O.data = N;
            } else
              O.data = E;
          else
            O.data = n[c.arg.endpointName].structuralSharing ?? !0 ? Rn(ie(O.data) ? lo(O.data) : O.data, E) : E;
          delete O.error, O.fulfilledTimeStamp = c.fulfilledTimeStamp;
        });
      }).addCase(t.rejected, (i, {
        meta: {
          condition: c,
          arg: E,
          requestId: O
        },
        error: w,
        payload: R
      }) => {
        ot(i, E.queryCacheKey, (T) => {
          if (!c) {
            if (T.requestId !== O)
              return;
            T.status = "rejected", T.error = R ?? w;
          }
        });
      }).addMatcher(a, (i, c) => {
        const {
          queries: E
        } = u(c);
        for (const [O, w] of Object.entries(E))
          // do not rehydrate entries that were currently in flight.
          ((w == null ? void 0 : w.status) === "fulfilled" || (w == null ? void 0 : w.status) === "rejected") && (i[O] = w);
      });
    }
  }), g = Te({
    name: `${e}/mutations`,
    initialState: xe,
    reducers: {
      removeMutationResult: {
        reducer(s, {
          payload: i
        }) {
          const c = Ge(i);
          c in s && delete s[c];
        },
        prepare: ke()
      }
    },
    extraReducers(s) {
      s.addCase(r.pending, (i, {
        meta: c,
        meta: {
          requestId: E,
          arg: O,
          startedTimeStamp: w
        }
      }) => {
        O.track && (i[Ge(c)] = {
          requestId: E,
          status: "pending",
          endpointName: O.endpointName,
          startedTimeStamp: w
        });
      }).addCase(r.fulfilled, (i, {
        payload: c,
        meta: E
      }) => {
        E.arg.track && Pr(i, E, (O) => {
          O.requestId === E.requestId && (O.status = "fulfilled", O.data = c, O.fulfilledTimeStamp = E.fulfilledTimeStamp);
        });
      }).addCase(r.rejected, (i, {
        payload: c,
        error: E,
        meta: O
      }) => {
        O.arg.track && Pr(i, O, (w) => {
          w.requestId === O.requestId && (w.status = "rejected", w.error = c ?? E);
        });
      }).addMatcher(a, (i, c) => {
        const {
          mutations: E
        } = u(c);
        for (const [O, w] of Object.entries(E))
          // do not rehydrate entries that were currently in flight.
          ((w == null ? void 0 : w.status) === "fulfilled" || (w == null ? void 0 : w.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          O !== (w == null ? void 0 : w.requestId) && (i[O] = w);
      });
    }
  }), y = Te({
    name: `${e}/invalidation`,
    initialState: xe,
    reducers: {
      updateProvidedBy: {
        reducer(s, i) {
          var O, w;
          const {
            queryCacheKey: c,
            providedTags: E
          } = i.payload;
          for (const R of Object.values(s))
            for (const T of Object.values(R)) {
              const A = T.indexOf(c);
              A !== -1 && T.splice(A, 1);
            }
          for (const {
            type: R,
            id: T
          } of E) {
            const A = (O = s[R] ?? (s[R] = {}))[w = T || "__internal_without_id"] ?? (O[w] = []);
            A.includes(c) || A.push(c);
          }
        },
        prepare: ke()
      }
    },
    extraReducers(s) {
      s.addCase(_.actions.removeQueryResult, (i, {
        payload: {
          queryCacheKey: c
        }
      }) => {
        for (const E of Object.values(i))
          for (const O of Object.values(E)) {
            const w = O.indexOf(c);
            w !== -1 && O.splice(w, 1);
          }
      }).addMatcher(a, (i, c) => {
        var O, w;
        const {
          provided: E
        } = u(c);
        for (const [R, T] of Object.entries(E))
          for (const [A, C] of Object.entries(T)) {
            const N = (O = i[R] ?? (i[R] = {}))[w = A || "__internal_without_id"] ?? (O[w] = []);
            for (const P of C)
              N.includes(P) || N.push(P);
          }
      }).addMatcher(ye(he(t), yt(t)), (i, c) => {
        const E = Mn(c, "providesTags", n, v), {
          queryCacheKey: O
        } = c.meta.arg;
        y.caseReducers.updateProvidedBy(i, y.actions.updateProvidedBy({
          queryCacheKey: O,
          providedTags: E
        }));
      });
    }
  }), f = Te({
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
  }), l = Te({
    name: `${e}/internalSubscriptions`,
    initialState: xe,
    reducers: {
      subscriptionsUpdated: {
        reducer(s, i) {
          return gr(s, i.payload);
        },
        prepare: ke()
      }
    }
  }), p = Te({
    name: `${e}/config`,
    initialState: {
      online: yi(),
      focused: hi(),
      middlewareRegistered: !1,
      ...b
    },
    reducers: {
      middlewareRegistered(s, {
        payload: i
      }) {
        s.middlewareRegistered = s.middlewareRegistered === "conflict" || o !== i ? "conflict" : !0;
      }
    },
    extraReducers: (s) => {
      s.addCase(or, (i) => {
        i.online = !0;
      }).addCase(Cn, (i) => {
        i.online = !1;
      }).addCase(nr, (i) => {
        i.focused = !0;
      }).addCase(Tn, (i) => {
        i.focused = !1;
      }).addMatcher(a, (i) => ({
        ...i
      }));
    }
  }), d = co({
    queries: _.reducer,
    mutations: g.reducer,
    provided: y.reducer,
    subscriptions: l.reducer,
    config: p.reducer
  }), m = (s, i) => d(S.match(i) ? void 0 : s, i), h = {
    ...p.actions,
    ..._.actions,
    ...f.actions,
    ...l.actions,
    ...g.actions,
    ...y.actions,
    resetApiState: S
  };
  return {
    reducer: m,
    actions: h
  };
}
var ve = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), In = {
  status: "uninitialized"
  /* uninitialized */
}, Dr = /* @__PURE__ */ qe(In, () => {
}), $r = /* @__PURE__ */ qe(In, () => {
});
function Ri({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const n = (g) => Dr, o = (g) => $r;
  return {
    buildQuerySelector: v,
    buildMutationSelector: b,
    selectInvalidatedBy: S,
    selectCachedArgsForQuery: _
  };
  function u(g) {
    return {
      ...g,
      ...ai(g.status)
    };
  }
  function a(g) {
    const y = g[t];
    if (process.env.NODE_ENV !== "production" && !y) {
      if (a.triggered)
        return y;
      a.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return y;
  }
  function v(g, y) {
    return (f) => {
      const l = e({
        queryArgs: f,
        endpointDefinition: y,
        endpointName: g
      });
      return r(f === ve ? n : (m) => {
        var h, s;
        return ((s = (h = a(m)) == null ? void 0 : h.queries) == null ? void 0 : s[l]) ?? Dr;
      }, u);
    };
  }
  function b() {
    return (g) => {
      let y;
      return typeof g == "object" ? y = Ge(g) ?? ve : y = g, r(y === ve ? o : (p) => {
        var d, m;
        return ((m = (d = a(p)) == null ? void 0 : d.mutations) == null ? void 0 : m[y]) ?? $r;
      }, u);
    };
  }
  function S(g, y) {
    const f = g[t], l = /* @__PURE__ */ new Set();
    for (const p of y.map(Bt)) {
      const d = f.provided[p.type];
      if (!d)
        continue;
      let m = (p.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        d[p.id]
      ) : (
        // no id: invalidate all queries that provide this type
        Rr(Object.values(d))
      )) ?? [];
      for (const h of m)
        l.add(h);
    }
    return Rr(Array.from(l.values()).map((p) => {
      const d = f.queries[p];
      return d ? [{
        queryCacheKey: p,
        endpointName: d.endpointName,
        originalArgs: d.originalArgs
      }] : [];
    }));
  }
  function _(g, y) {
    return Object.values(g[t].queries).filter(
      (f) => (f == null ? void 0 : f.endpointName) === y && f.status !== "uninitialized"
      /* uninitialized */
    ).map((f) => f.originalArgs);
  }
}
var Ce = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, qr = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = Ce == null ? void 0 : Ce.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const o = JSON.stringify(t, (u, a) => le(a) ? Object.keys(a).sort().reduce((v, b) => (v[b] = a[b], v), {}) : a);
    le(t) && (Ce == null || Ce.set(t, o)), r = o;
  }
  return `${e}(${r})`;
};
function Ti(...e) {
  return function(r) {
    const n = Ye((S) => {
      var _;
      return (_ = r.extractRehydrationInfo) == null ? void 0 : _.call(r, S, {
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
      serializeQueryArgs(S) {
        let _ = qr;
        if ("serializeQueryArgs" in S.endpointDefinition) {
          const g = S.endpointDefinition.serializeQueryArgs;
          _ = (y) => {
            const f = g(y);
            return typeof f == "string" ? f : qr({
              ...y,
              queryArgs: f
            });
          };
        } else
          r.serializeQueryArgs && (_ = r.serializeQueryArgs);
        return _(S);
      },
      tagTypes: [...r.tagTypes || []]
    }, u = {
      endpointDefinitions: {},
      batch(S) {
        S();
      },
      apiUid: er(),
      extractRehydrationInfo: n,
      hasRehydrationInfo: Ye((S) => n(S) != null)
    }, a = {
      injectEndpoints: b,
      enhanceEndpoints({
        addTagTypes: S,
        endpoints: _
      }) {
        if (S)
          for (const g of S)
            o.tagTypes.includes(g) || o.tagTypes.push(g);
        if (_)
          for (const [g, y] of Object.entries(_))
            typeof y == "function" ? y(u.endpointDefinitions[g]) : Object.assign(u.endpointDefinitions[g] || {}, y);
        return a;
      }
    }, v = e.map((S) => S.init(a, o, u));
    function b(S) {
      const _ = S.endpoints({
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
      for (const [g, y] of Object.entries(_)) {
        if (S.overrideExisting !== !0 && g in u.endpointDefinitions) {
          if (S.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? U(39) : `called \`injectEndpoints\` to override already-existing endpointName ${g} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${g} without specifying \`overrideExisting: true\``);
          continue;
        }
        u.endpointDefinitions[g] = y;
        for (const f of v)
          f.injectEndpoint(g, y);
      }
      return a;
    }
    return a.injectEndpoints({
      endpoints: r.endpoints
    });
  };
}
function Ci(e) {
  for (let t in e)
    return !1;
  return !0;
}
var Ai = 2147483647 / 1e3 - 1, Mi = ({
  reducerPath: e,
  api: t,
  context: r,
  internalState: n
}) => {
  const {
    removeQueryResult: o,
    unsubscribeQueryResult: u
  } = t.internalActions;
  function a(_) {
    const g = n.currentSubscriptions[_];
    return !!g && !Ci(g);
  }
  const v = {}, b = (_, g, y) => {
    var f;
    if (u.match(_)) {
      const l = g.getState()[e], {
        queryCacheKey: p
      } = _.payload;
      S(p, (f = l.queries[p]) == null ? void 0 : f.endpointName, g, l.config);
    }
    if (t.util.resetApiState.match(_))
      for (const [l, p] of Object.entries(v))
        p && clearTimeout(p), delete v[l];
    if (r.hasRehydrationInfo(_)) {
      const l = g.getState()[e], {
        queries: p
      } = r.extractRehydrationInfo(_);
      for (const [d, m] of Object.entries(p))
        S(d, m == null ? void 0 : m.endpointName, g, l.config);
    }
  };
  function S(_, g, y, f) {
    const l = r.endpointDefinitions[g], p = (l == null ? void 0 : l.keepUnusedDataFor) ?? f.keepUnusedDataFor;
    if (p === 1 / 0)
      return;
    const d = Math.max(0, Math.min(p, Ai));
    if (!a(_)) {
      const m = v[_];
      m && clearTimeout(m), v[_] = setTimeout(() => {
        a(_) || y.dispatch(o({
          queryCacheKey: _
        })), delete v[_];
      }, d * 1e3);
    }
  }
  return b;
}, Ii = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: r
  },
  mutationThunk: n,
  queryThunk: o,
  api: u,
  assertTagType: a,
  refetchQuery: v,
  internalState: b
}) => {
  const {
    removeQueryResult: S
  } = u.internalActions, _ = ye(he(n), yt(n)), g = ye(he(n, o), De(n, o));
  let y = [];
  const f = (d, m) => {
    _(d) ? p(Mn(d, "invalidatesTags", r, a), m) : g(d) ? p([], m) : u.util.invalidateTags.match(d) && p(ir(d.payload, void 0, void 0, void 0, void 0, a), m);
  };
  function l(d) {
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
    if (y.push(...d), s.config.invalidationBehavior === "delayed" && l(s))
      return;
    const i = y;
    if (y = [], i.length === 0)
      return;
    const c = u.util.selectInvalidatedBy(h, i);
    t.batch(() => {
      const E = Array.from(c.values());
      for (const {
        queryCacheKey: O
      } of E) {
        const w = s.queries[O], R = b.currentSubscriptions[O] ?? {};
        w && (Ne(R) === 0 ? m.dispatch(S({
          queryCacheKey: O
        })) : w.status !== "uninitialized" && m.dispatch(v(w, O)));
      }
    });
  }
  return f;
}, Ni = ({
  reducerPath: e,
  queryThunk: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const u = {}, a = (y, f) => {
    (r.internalActions.updateSubscriptionOptions.match(y) || r.internalActions.unsubscribeQueryResult.match(y)) && b(y.payload, f), (t.pending.match(y) || t.rejected.match(y) && y.meta.condition) && b(y.meta.arg, f), (t.fulfilled.match(y) || t.rejected.match(y) && !y.meta.condition) && v(y.meta.arg, f), r.util.resetApiState.match(y) && _();
  };
  function v({
    queryCacheKey: y
  }, f) {
    const l = f.getState()[e], p = l.queries[y], d = o.currentSubscriptions[y];
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
        (l.config.focused || !h) && f.dispatch(n(p, y)), v({
          queryCacheKey: y
        }, f);
      }, m)
    };
  }
  function b({
    queryCacheKey: y
  }, f) {
    const p = f.getState()[e].queries[y], d = o.currentSubscriptions[y];
    if (!p || p.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: m
    } = g(d);
    if (!Number.isFinite(m)) {
      S(y);
      return;
    }
    const h = u[y], s = Date.now() + m;
    (!h || s < h.nextPollTimestamp) && v({
      queryCacheKey: y
    }, f);
  }
  function S(y) {
    const f = u[y];
    f != null && f.timeout && clearTimeout(f.timeout), delete u[y];
  }
  function _() {
    for (const y of Object.keys(u))
      S(y);
  }
  function g(y = {}) {
    let f = !1, l = Number.POSITIVE_INFINITY;
    for (let p in y)
      y[p].pollingInterval && (l = Math.min(y[p].pollingInterval, l), f = y[p].skipPollingIfUnfocused || f);
    return {
      lowestPollingInterval: l,
      skipPollingIfUnfocused: f
    };
  }
  return a;
}, Pi = ({
  reducerPath: e,
  context: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const {
    removeQueryResult: u
  } = r.internalActions, a = (b, S) => {
    nr.match(b) && v(S, "refetchOnFocus"), or.match(b) && v(S, "refetchOnReconnect");
  };
  function v(b, S) {
    const _ = b.getState()[e], g = _.queries, y = o.currentSubscriptions;
    t.batch(() => {
      for (const f of Object.keys(y)) {
        const l = g[f], p = y[f];
        if (!p || !l)
          continue;
        (Object.values(p).some((m) => m[S] === !0) || Object.values(p).every((m) => m[S] === void 0) && _.config[S]) && (Ne(p) === 0 ? b.dispatch(u({
          queryCacheKey: f
        })) : l.status !== "uninitialized" && b.dispatch(n(l, f)));
      }
    });
  }
  return a;
}, jr = new Error("Promise never resolved before cacheEntryRemoved."), Di = ({
  api: e,
  reducerPath: t,
  context: r,
  queryThunk: n,
  mutationThunk: o,
  internalState: u
}) => {
  const a = Ut(n), v = Ut(o), b = he(n, o), S = {}, _ = (f, l, p) => {
    const d = g(f);
    if (n.pending.match(f)) {
      const m = p[t].queries[d], h = l.getState()[t].queries[d];
      !m && h && y(f.meta.arg.endpointName, f.meta.arg.originalArgs, d, l, f.meta.requestId);
    } else if (o.pending.match(f))
      l.getState()[t].mutations[d] && y(f.meta.arg.endpointName, f.meta.arg.originalArgs, d, l, f.meta.requestId);
    else if (b(f)) {
      const m = S[d];
      m != null && m.valueResolved && (m.valueResolved({
        data: f.payload,
        meta: f.meta.baseQueryMeta
      }), delete m.valueResolved);
    } else if (e.internalActions.removeQueryResult.match(f) || e.internalActions.removeMutationResult.match(f)) {
      const m = S[d];
      m && (delete S[d], m.cacheEntryRemoved());
    } else if (e.util.resetApiState.match(f))
      for (const [m, h] of Object.entries(S))
        delete S[m], h.cacheEntryRemoved();
  };
  function g(f) {
    return a(f) ? f.meta.arg.queryCacheKey : v(f) ? f.meta.arg.fixedCacheKey ?? f.meta.requestId : e.internalActions.removeQueryResult.match(f) ? f.payload.queryCacheKey : e.internalActions.removeMutationResult.match(f) ? Ge(f.payload) : "";
  }
  function y(f, l, p, d, m) {
    const h = r.endpointDefinitions[f], s = h == null ? void 0 : h.onCacheEntryAdded;
    if (!s)
      return;
    let i = {};
    const c = new Promise((A) => {
      i.cacheEntryRemoved = A;
    }), E = Promise.race([new Promise((A) => {
      i.valueResolved = A;
    }), c.then(() => {
      throw jr;
    })]);
    E.catch(() => {
    }), S[p] = i;
    const O = e.endpoints[f].select(h.type === "query" ? l : p), w = d.dispatch((A, C, N) => N), R = {
      ...d,
      getCacheEntry: () => O(d.getState()),
      requestId: m,
      extra: w,
      updateCachedData: h.type === "query" ? (A) => d.dispatch(e.util.updateQueryData(f, l, A)) : void 0,
      cacheDataLoaded: E,
      cacheEntryRemoved: c
    }, T = s(l, R);
    Promise.resolve(T).catch((A) => {
      if (A !== jr)
        throw A;
    });
  }
  return _;
}, $i = ({
  api: e,
  context: t,
  queryThunk: r,
  mutationThunk: n
}) => {
  const o = tr(r, n), u = De(r, n), a = he(r, n), v = {};
  return (S, _) => {
    var g, y;
    if (o(S)) {
      const {
        requestId: f,
        arg: {
          endpointName: l,
          originalArgs: p
        }
      } = S.meta, d = t.endpointDefinitions[l], m = d == null ? void 0 : d.onQueryStarted;
      if (m) {
        const h = {}, s = new Promise((O, w) => {
          h.resolve = O, h.reject = w;
        });
        s.catch(() => {
        }), v[f] = h;
        const i = e.endpoints[l].select(d.type === "query" ? p : f), c = _.dispatch((O, w, R) => R), E = {
          ..._,
          getCacheEntry: () => i(_.getState()),
          requestId: f,
          extra: c,
          updateCachedData: d.type === "query" ? (O) => _.dispatch(e.util.updateQueryData(l, p, O)) : void 0,
          queryFulfilled: s
        };
        m(p, E);
      }
    } else if (a(S)) {
      const {
        requestId: f,
        baseQueryMeta: l
      } = S.meta;
      (g = v[f]) == null || g.resolve({
        data: S.payload,
        meta: l
      }), delete v[f];
    } else if (u(S)) {
      const {
        requestId: f,
        rejectedWithValue: l,
        baseQueryMeta: p
      } = S.meta;
      (y = v[f]) == null || y.reject({
        error: S.payload ?? S.error,
        isUnhandledError: !l,
        meta: p
      }), delete v[f];
    }
  };
}, qi = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: r
}) => (n, o) => {
  var u, a;
  e.util.resetApiState.match(n) && o.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(n) && n.payload === t && ((a = (u = o.getState()[r]) == null ? void 0 : u.config) == null ? void 0 : a.middlewareRegistered) === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${r}".
You can only have one api per reducer path, this will lead to crashes in various situations!${r === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, ji = ({
  api: e,
  queryThunk: t,
  internalState: r
}) => {
  const n = `${e.reducerPath}/subscriptions`;
  let o = null, u = null;
  const {
    updateSubscriptionOptions: a,
    unsubscribeQueryResult: v
  } = e.internalActions, b = (f, l) => {
    var d, m, h;
    if (a.match(l)) {
      const {
        queryCacheKey: s,
        requestId: i,
        options: c
      } = l.payload;
      return (d = f == null ? void 0 : f[s]) != null && d[i] && (f[s][i] = c), !0;
    }
    if (v.match(l)) {
      const {
        queryCacheKey: s,
        requestId: i
      } = l.payload;
      return f[s] && delete f[s][i], !0;
    }
    if (e.internalActions.removeQueryResult.match(l))
      return delete f[l.payload.queryCacheKey], !0;
    if (t.pending.match(l)) {
      const {
        meta: {
          arg: s,
          requestId: i
        }
      } = l, c = f[m = s.queryCacheKey] ?? (f[m] = {});
      return c[`${i}_running`] = {}, s.subscribe && (c[i] = s.subscriptionOptions ?? c[i] ?? {}), !0;
    }
    let p = !1;
    if (t.fulfilled.match(l) || t.rejected.match(l)) {
      const s = f[l.meta.arg.queryCacheKey] || {}, i = `${l.meta.requestId}_running`;
      p || (p = !!s[i]), delete s[i];
    }
    if (t.rejected.match(l)) {
      const {
        meta: {
          condition: s,
          arg: i,
          requestId: c
        }
      } = l;
      if (s && i.subscribe) {
        const E = f[h = i.queryCacheKey] ?? (f[h] = {});
        E[c] = i.subscriptionOptions ?? E[c] ?? {}, p = !0;
      }
    }
    return p;
  }, S = () => r.currentSubscriptions, y = {
    getSubscriptions: S,
    getSubscriptionCount: (f) => {
      const p = S()[f] ?? {};
      return Ne(p);
    },
    isRequestSubscribed: (f, l) => {
      var d;
      const p = S();
      return !!((d = p == null ? void 0 : p[f]) != null && d[l]);
    }
  };
  return (f, l) => {
    if (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(f))
      return o = r.currentSubscriptions = {}, u = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(f))
      return [!1, y];
    const p = b(r.currentSubscriptions, f);
    let d = !0;
    if (p) {
      u || (u = setTimeout(() => {
        const s = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, i] = gn(o, () => s);
        l.next(e.internalActions.subscriptionsUpdated(i)), o = s, u = null;
      }, 500));
      const m = typeof f.type == "string" && !!f.type.startsWith(n), h = t.rejected.match(f) && f.meta.condition && !!f.meta.arg.subscribe;
      d = !m && !h;
    }
    return [d, !1];
  };
};
function ki(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: n,
    context: o
  } = e, {
    apiUid: u
  } = o, a = {
    invalidateTags: X(`${t}/invalidateTags`)
  }, v = (g) => g.type.startsWith(`${t}/`), b = [qi, Mi, Ii, Ni, Di, $i];
  return {
    middleware: (g) => {
      let y = !1;
      const l = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: _,
        isThisApiSliceAction: v
      }, p = b.map((h) => h(l)), d = ji(l), m = Pi(l);
      return (h) => (s) => {
        if (!Gt(s))
          return h(s);
        y || (y = !0, g.dispatch(n.internalActions.middlewareRegistered(u)));
        const i = {
          ...g,
          next: h
        }, c = g.getState(), [E, O] = d(s, i, c);
        let w;
        if (E ? w = h(s) : w = O, g.getState()[t] && (m(s, i, c), v(s) || o.hasRehydrationInfo(s)))
          for (let R of p)
            R(s, i, c);
        return w;
      };
    },
    actions: a
  };
  function _(g, y, f = {}) {
    return r({
      type: "query",
      endpointName: g.endpointName,
      originalArgs: g.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: y,
      ...f
    });
  }
}
function fe(e, ...t) {
  return Object.assign(e, ...t);
}
var kr = /* @__PURE__ */ Symbol(), xi = ({
  createSelector: e = Sn
} = {}) => ({
  name: kr,
  init(t, {
    baseQuery: r,
    tagTypes: n,
    reducerPath: o,
    serializeQueryArgs: u,
    keepUnusedDataFor: a,
    refetchOnMountOrArgChange: v,
    refetchOnFocus: b,
    refetchOnReconnect: S,
    invalidationBehavior: _
  }, g) {
    _o();
    const y = (j) => (typeof process < "u" && process.env.NODE_ENV === "development" && (n.includes(j.type) || console.error(`Tag type '${j.type}' was used, but not specified in \`tagTypes\`!`)), j);
    Object.assign(t, {
      reducerPath: o,
      endpoints: {},
      internalActions: {
        onOnline: or,
        onOffline: Cn,
        onFocus: nr,
        onFocusLost: Tn
      },
      util: {}
    });
    const {
      queryThunk: f,
      mutationThunk: l,
      patchQueryData: p,
      updateQueryData: d,
      upsertQueryData: m,
      prefetch: h,
      buildMatchThunkActions: s
    } = Oi({
      baseQuery: r,
      reducerPath: o,
      context: g,
      api: t,
      serializeQueryArgs: u,
      assertTagType: y
    }), {
      reducer: i,
      actions: c
    } = wi({
      context: g,
      queryThunk: f,
      mutationThunk: l,
      reducerPath: o,
      assertTagType: y,
      config: {
        refetchOnFocus: b,
        refetchOnReconnect: S,
        refetchOnMountOrArgChange: v,
        keepUnusedDataFor: a,
        reducerPath: o,
        invalidationBehavior: _
      }
    });
    fe(t.util, {
      patchQueryData: p,
      updateQueryData: d,
      upsertQueryData: m,
      prefetch: h,
      resetApiState: c.resetApiState
    }), fe(t.internalActions, c);
    const {
      middleware: E,
      actions: O
    } = ki({
      reducerPath: o,
      context: g,
      queryThunk: f,
      mutationThunk: l,
      api: t,
      assertTagType: y
    });
    fe(t.util, O), fe(t, {
      reducer: i,
      middleware: E
    });
    const {
      buildQuerySelector: w,
      buildMutationSelector: R,
      selectInvalidatedBy: T,
      selectCachedArgsForQuery: A
    } = Ri({
      serializeQueryArgs: u,
      reducerPath: o,
      createSelector: e
    });
    fe(t.util, {
      selectInvalidatedBy: T,
      selectCachedArgsForQuery: A
    });
    const {
      buildInitiateQuery: C,
      buildInitiateMutation: N,
      getRunningMutationThunk: P,
      getRunningMutationsThunk: D,
      getRunningQueriesThunk: $,
      getRunningQueryThunk: x
    } = bi({
      queryThunk: f,
      mutationThunk: l,
      api: t,
      serializeQueryArgs: u,
      context: g
    });
    return fe(t.util, {
      getRunningMutationThunk: P,
      getRunningMutationsThunk: D,
      getRunningQueryThunk: x,
      getRunningQueriesThunk: $
    }), {
      name: kr,
      injectEndpoint(j, W) {
        var H;
        const q = t;
        (H = q.endpoints)[j] ?? (H[j] = {}), An(W) ? fe(q.endpoints[j], {
          name: j,
          select: w(j, W),
          initiate: C(j, W)
        }, s(f, j)) : Si(W) && fe(q.endpoints[j], {
          name: j,
          select: R(),
          initiate: N(j)
        }, s(l, j));
      }
    };
  }
}), Kt = { exports: {} }, At = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function zi() {
  if (xr)
    return At;
  xr = 1;
  var e = ft;
  function t(g, y) {
    return g === y && (g !== 0 || 1 / g === 1 / y) || g !== g && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, u = e.useLayoutEffect, a = e.useDebugValue;
  function v(g, y) {
    var f = y(), l = n({ inst: { value: f, getSnapshot: y } }), p = l[0].inst, d = l[1];
    return u(function() {
      p.value = f, p.getSnapshot = y, b(p) && d({ inst: p });
    }, [g, f, y]), o(function() {
      return b(p) && d({ inst: p }), g(function() {
        b(p) && d({ inst: p });
      });
    }, [g]), a(f), f;
  }
  function b(g) {
    var y = g.getSnapshot;
    g = g.value;
    try {
      var f = y();
      return !r(g, f);
    } catch {
      return !0;
    }
  }
  function S(g, y) {
    return y();
  }
  var _ = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? S : v;
  return At.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : _, At;
}
var Mt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function Li() {
  return zr || (zr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = ft, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(s) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), E = 1; E < i; E++)
          c[E - 1] = arguments[E];
        n("error", s, c);
      }
    }
    function n(s, i, c) {
      {
        var E = t.ReactDebugCurrentFrame, O = E.getStackAddendum();
        O !== "" && (i += "%s", c = c.concat([O]));
        var w = c.map(function(R) {
          return String(R);
        });
        w.unshift("Warning: " + i), Function.prototype.apply.call(console[s], console, w);
      }
    }
    function o(s, i) {
      return s === i && (s !== 0 || 1 / s === 1 / i) || s !== s && i !== i;
    }
    var u = typeof Object.is == "function" ? Object.is : o, a = e.useState, v = e.useEffect, b = e.useLayoutEffect, S = e.useDebugValue, _ = !1, g = !1;
    function y(s, i, c) {
      _ || e.startTransition !== void 0 && (_ = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var E = i();
      if (!g) {
        var O = i();
        u(E, O) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), g = !0);
      }
      var w = a({
        inst: {
          value: E,
          getSnapshot: i
        }
      }), R = w[0].inst, T = w[1];
      return b(function() {
        R.value = E, R.getSnapshot = i, f(R) && T({
          inst: R
        });
      }, [s, E, i]), v(function() {
        f(R) && T({
          inst: R
        });
        var A = function() {
          f(R) && T({
            inst: R
          });
        };
        return s(A);
      }, [s]), S(E), E;
    }
    function f(s) {
      var i = s.getSnapshot, c = s.value;
      try {
        var E = i();
        return !u(c, E);
      } catch {
        return !0;
      }
    }
    function l(s, i, c) {
      return i();
    }
    var p = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", d = !p, m = d ? l : y, h = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m;
    Mt.useSyncExternalStore = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Mt;
}
process.env.NODE_ENV === "production" ? Kt.exports = zi() : Kt.exports = Li();
var Nn = Kt.exports, Yt = { exports: {} }, It = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr;
function Vi() {
  if (Lr)
    return It;
  Lr = 1;
  var e = ft, t = Nn;
  function r(S, _) {
    return S === _ && (S !== 0 || 1 / S === 1 / _) || S !== S && _ !== _;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, u = e.useRef, a = e.useEffect, v = e.useMemo, b = e.useDebugValue;
  return It.useSyncExternalStoreWithSelector = function(S, _, g, y, f) {
    var l = u(null);
    if (l.current === null) {
      var p = { hasValue: !1, value: null };
      l.current = p;
    } else
      p = l.current;
    l = v(function() {
      function m(E) {
        if (!h) {
          if (h = !0, s = E, E = y(E), f !== void 0 && p.hasValue) {
            var O = p.value;
            if (f(O, E))
              return i = O;
          }
          return i = E;
        }
        if (O = i, n(s, E))
          return O;
        var w = y(E);
        return f !== void 0 && f(O, w) ? O : (s = E, i = w);
      }
      var h = !1, s, i, c = g === void 0 ? null : g;
      return [function() {
        return m(_());
      }, c === null ? void 0 : function() {
        return m(c());
      }];
    }, [_, g, y, f]);
    var d = o(S, l[0], l[1]);
    return a(function() {
      p.hasValue = !0, p.value = d;
    }, [d]), b(d), d;
  }, It;
}
var Nt = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function Fi() {
  return Vr || (Vr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = ft, t = Nn;
    function r(_, g) {
      return _ === g && (_ !== 0 || 1 / _ === 1 / g) || _ !== _ && g !== g;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, u = e.useRef, a = e.useEffect, v = e.useMemo, b = e.useDebugValue;
    function S(_, g, y, f, l) {
      var p = u(null), d;
      p.current === null ? (d = {
        hasValue: !1,
        value: null
      }, p.current = d) : d = p.current;
      var m = v(function() {
        var c = !1, E, O, w = function(C) {
          if (!c) {
            c = !0, E = C;
            var N = f(C);
            if (l !== void 0 && d.hasValue) {
              var P = d.value;
              if (l(P, N))
                return O = P, P;
            }
            return O = N, N;
          }
          var D = E, $ = O;
          if (n(D, C))
            return $;
          var x = f(C);
          return l !== void 0 && l($, x) ? $ : (E = C, O = x, x);
        }, R = y === void 0 ? null : y, T = function() {
          return w(g());
        }, A = R === null ? void 0 : function() {
          return w(R());
        };
        return [T, A];
      }, [g, y, f, l]), h = m[0], s = m[1], i = o(_, h, s);
      return a(function() {
        d.hasValue = !0, d.value = i;
      }, [i]), b(i), i;
    }
    Nt.useSyncExternalStoreWithSelector = S, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Nt;
}
process.env.NODE_ENV === "production" ? Yt.exports = Vi() : Yt.exports = Fi();
var Qi = Yt.exports;
const Fr = Symbol.for("react-redux-context"), Qr = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ui() {
  var e;
  if (!tt.createContext)
    return {};
  const t = (e = Qr[Fr]) != null ? e : Qr[Fr] = /* @__PURE__ */ new Map();
  let r = t.get(tt.createContext);
  return r || (r = tt.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(tt.createContext, r)), r;
}
const Oe = /* @__PURE__ */ Ui();
function sr(e = Oe) {
  return function() {
    const r = Yn(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return r;
  };
}
const Pn = /* @__PURE__ */ sr(), Bi = () => {
  throw new Error("uSES not initialized!");
};
let Dn = Bi;
const Wi = (e) => {
  Dn = e;
}, Ki = (e, t) => e === t;
function Yi(e = Oe) {
  const t = e === Oe ? Pn : sr(e);
  return function(n, o = {}) {
    const {
      equalityFn: u = Ki,
      stabilityCheck: a = void 0,
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
      store: b,
      subscription: S,
      getServerState: _,
      stabilityCheck: g,
      noopCheck: y
    } = t(), f = ae(!0), l = ze({
      [n.name](d) {
        const m = n(d);
        if (process.env.NODE_ENV !== "production") {
          const h = typeof a > "u" ? g : a;
          if (h === "always" || h === "once" && f.current) {
            const i = n(d);
            if (!u(m, i)) {
              let c;
              try {
                throw new Error();
              } catch (E) {
                ({
                  stack: c
                } = E);
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
          if ((s === "always" || s === "once" && f.current) && m === d) {
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
          f.current && (f.current = !1);
        }
        return m;
      }
    }[n.name], [n, g, a]), p = Dn(S.addNestedSub, b.getState, _ || b.getState, l, u);
    return jt(p), p;
  };
}
const Hi = /* @__PURE__ */ Yi();
var Ht = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur;
function Gi() {
  if (Ur)
    return L;
  Ur = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, S = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, l = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, h = e ? Symbol.for("react.scope") : 60119;
  function s(c) {
    if (typeof c == "object" && c !== null) {
      var E = c.$$typeof;
      switch (E) {
        case t:
          switch (c = c.type, c) {
            case b:
            case S:
            case n:
            case u:
            case o:
            case g:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case v:
                case _:
                case l:
                case f:
                case a:
                  return c;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function i(c) {
    return s(c) === S;
  }
  return L.AsyncMode = b, L.ConcurrentMode = S, L.ContextConsumer = v, L.ContextProvider = a, L.Element = t, L.ForwardRef = _, L.Fragment = n, L.Lazy = l, L.Memo = f, L.Portal = r, L.Profiler = u, L.StrictMode = o, L.Suspense = g, L.isAsyncMode = function(c) {
    return i(c) || s(c) === b;
  }, L.isConcurrentMode = i, L.isContextConsumer = function(c) {
    return s(c) === v;
  }, L.isContextProvider = function(c) {
    return s(c) === a;
  }, L.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, L.isForwardRef = function(c) {
    return s(c) === _;
  }, L.isFragment = function(c) {
    return s(c) === n;
  }, L.isLazy = function(c) {
    return s(c) === l;
  }, L.isMemo = function(c) {
    return s(c) === f;
  }, L.isPortal = function(c) {
    return s(c) === r;
  }, L.isProfiler = function(c) {
    return s(c) === u;
  }, L.isStrictMode = function(c) {
    return s(c) === o;
  }, L.isSuspense = function(c) {
    return s(c) === g;
  }, L.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === S || c === u || c === o || c === g || c === y || typeof c == "object" && c !== null && (c.$$typeof === l || c.$$typeof === f || c.$$typeof === a || c.$$typeof === v || c.$$typeof === _ || c.$$typeof === d || c.$$typeof === m || c.$$typeof === h || c.$$typeof === p);
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
var Br;
function Ji() {
  return Br || (Br = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, S = e ? Symbol.for("react.concurrent_mode") : 60111, _ = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, l = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, h = e ? Symbol.for("react.scope") : 60119;
    function s(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === S || M === u || M === o || M === g || M === y || typeof M == "object" && M !== null && (M.$$typeof === l || M.$$typeof === f || M.$$typeof === a || M.$$typeof === v || M.$$typeof === _ || M.$$typeof === d || M.$$typeof === m || M.$$typeof === h || M.$$typeof === p);
    }
    function i(M) {
      if (typeof M == "object" && M !== null) {
        var je = M.$$typeof;
        switch (je) {
          case t:
            var I = M.type;
            switch (I) {
              case b:
              case S:
              case n:
              case u:
              case o:
              case g:
                return I;
              default:
                var Re = I && I.$$typeof;
                switch (Re) {
                  case v:
                  case _:
                  case l:
                  case f:
                  case a:
                    return Re;
                  default:
                    return je;
                }
            }
          case r:
            return je;
        }
      }
    }
    var c = b, E = S, O = v, w = a, R = t, T = _, A = n, C = l, N = f, P = r, D = u, $ = o, x = g, j = !1;
    function W(M) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(M) || i(M) === b;
    }
    function q(M) {
      return i(M) === S;
    }
    function H(M) {
      return i(M) === v;
    }
    function z(M) {
      return i(M) === a;
    }
    function G(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function J(M) {
      return i(M) === _;
    }
    function ht(M) {
      return i(M) === n;
    }
    function mt(M) {
      return i(M) === l;
    }
    function gt(M) {
      return i(M) === f;
    }
    function vt(M) {
      return i(M) === r;
    }
    function St(M) {
      return i(M) === u;
    }
    function _t(M) {
      return i(M) === o;
    }
    function Et(M) {
      return i(M) === g;
    }
    V.AsyncMode = c, V.ConcurrentMode = E, V.ContextConsumer = O, V.ContextProvider = w, V.Element = R, V.ForwardRef = T, V.Fragment = A, V.Lazy = C, V.Memo = N, V.Portal = P, V.Profiler = D, V.StrictMode = $, V.Suspense = x, V.isAsyncMode = W, V.isConcurrentMode = q, V.isContextConsumer = H, V.isContextProvider = z, V.isElement = G, V.isForwardRef = J, V.isFragment = ht, V.isLazy = mt, V.isMemo = gt, V.isPortal = vt, V.isProfiler = St, V.isStrictMode = _t, V.isSuspense = Et, V.isValidElementType = s, V.typeOf = i;
  }()), V;
}
process.env.NODE_ENV === "production" ? Ht.exports = Gi() : Ht.exports = Ji();
var Xi = Ht.exports, $n = Xi, Zi = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, es = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qn = {};
qn[$n.ForwardRef] = Zi;
qn[$n.Memo] = es;
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
var Wr;
function ts() {
  if (Wr)
    return F;
  Wr = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), a = Symbol.for("react.context"), v = Symbol.for("react.server_context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), l;
  l = Symbol.for("react.module.reference");
  function p(d) {
    if (typeof d == "object" && d !== null) {
      var m = d.$$typeof;
      switch (m) {
        case e:
          switch (d = d.type, d) {
            case r:
            case o:
            case n:
            case S:
            case _:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case v:
                case a:
                case b:
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
  return F.ContextConsumer = a, F.ContextProvider = u, F.Element = e, F.ForwardRef = b, F.Fragment = r, F.Lazy = y, F.Memo = g, F.Portal = t, F.Profiler = o, F.StrictMode = n, F.Suspense = S, F.SuspenseList = _, F.isAsyncMode = function() {
    return !1;
  }, F.isConcurrentMode = function() {
    return !1;
  }, F.isContextConsumer = function(d) {
    return p(d) === a;
  }, F.isContextProvider = function(d) {
    return p(d) === u;
  }, F.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, F.isForwardRef = function(d) {
    return p(d) === b;
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
    return p(d) === S;
  }, F.isSuspenseList = function(d) {
    return p(d) === _;
  }, F.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === o || d === n || d === S || d === _ || d === f || typeof d == "object" && d !== null && (d.$$typeof === y || d.$$typeof === g || d.$$typeof === u || d.$$typeof === a || d.$$typeof === b || d.$$typeof === l || d.getModuleId !== void 0);
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
var Kr;
function rs() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = !1, t = !1, r = !1, n = !1, o = !1, u = Symbol.for("react.element"), a = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), g = Symbol.for("react.context"), y = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), s;
    s = Symbol.for("react.module.reference");
    function i(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === v || I === S || o || I === b || I === l || I === p || n || I === h || e || t || r || typeof I == "object" && I !== null && (I.$$typeof === m || I.$$typeof === d || I.$$typeof === _ || I.$$typeof === g || I.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === s || I.getModuleId !== void 0));
    }
    function c(I) {
      if (typeof I == "object" && I !== null) {
        var Re = I.$$typeof;
        switch (Re) {
          case u:
            var et = I.type;
            switch (et) {
              case v:
              case S:
              case b:
              case l:
              case p:
                return et;
              default:
                var lr = et && et.$$typeof;
                switch (lr) {
                  case y:
                  case g:
                  case f:
                  case m:
                  case d:
                  case _:
                    return lr;
                  default:
                    return Re;
                }
            }
          case a:
            return Re;
        }
      }
    }
    var E = g, O = _, w = u, R = f, T = v, A = m, C = d, N = a, P = S, D = b, $ = l, x = p, j = !1, W = !1;
    function q(I) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(I) {
      return W || (W = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(I) {
      return c(I) === g;
    }
    function G(I) {
      return c(I) === _;
    }
    function J(I) {
      return typeof I == "object" && I !== null && I.$$typeof === u;
    }
    function ht(I) {
      return c(I) === f;
    }
    function mt(I) {
      return c(I) === v;
    }
    function gt(I) {
      return c(I) === m;
    }
    function vt(I) {
      return c(I) === d;
    }
    function St(I) {
      return c(I) === a;
    }
    function _t(I) {
      return c(I) === S;
    }
    function Et(I) {
      return c(I) === b;
    }
    function M(I) {
      return c(I) === l;
    }
    function je(I) {
      return c(I) === p;
    }
    Q.ContextConsumer = E, Q.ContextProvider = O, Q.Element = w, Q.ForwardRef = R, Q.Fragment = T, Q.Lazy = A, Q.Memo = C, Q.Portal = N, Q.Profiler = P, Q.StrictMode = D, Q.Suspense = $, Q.SuspenseList = x, Q.isAsyncMode = q, Q.isConcurrentMode = H, Q.isContextConsumer = z, Q.isContextProvider = G, Q.isElement = J, Q.isForwardRef = ht, Q.isFragment = mt, Q.isLazy = gt, Q.isMemo = vt, Q.isPortal = St, Q.isProfiler = _t, Q.isStrictMode = Et, Q.isSuspense = M, Q.isSuspenseList = je, Q.isValidElementType = i, Q.typeOf = c;
  }()), Q;
}
process.env.NODE_ENV === "production" ? ts() : rs();
function Yr(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ue(e, t) {
  if (Yr(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Yr(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
function jn(e = Oe) {
  const t = (
    // @ts-ignore
    e === Oe ? Pn : (
      // @ts-ignore
      sr(e)
    )
  );
  return function() {
    const {
      store: n
    } = t();
    return n;
  };
}
const kn = /* @__PURE__ */ jn();
function ns(e = Oe) {
  const t = (
    // @ts-ignore
    e === Oe ? kn : jn(e)
  );
  return function() {
    return t().dispatch;
  };
}
const os = /* @__PURE__ */ ns();
Wi(Qi.useSyncExternalStoreWithSelector);
function is(e) {
  return e.type === "query";
}
function ss(e) {
  return e.type === "mutation";
}
function it(e, ...t) {
  return Object.assign(e, ...t);
}
function Pt(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var Ae = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, us = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = Ae == null ? void 0 : Ae.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const o = JSON.stringify(t, (u, a) => le(a) ? Object.keys(a).sort().reduce((v, b) => (v[b] = a[b], v), {}) : a);
    le(t) && (Ae == null || Ae.set(t, o)), r = o;
  }
  return `${e}(${r})`;
}, Dt = Symbol();
function Hr(e, t, r, n) {
  const o = ne(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: r,
      endpointName: n
    }) : e
  }), [e, t, r, n]), u = ae(o);
  return de(() => {
    u.current.serialized !== o.serialized && (u.current = o);
  }, [o]), u.current.serialized === o.serialized ? u.current.queryArgs : e;
}
function $t(e) {
  const t = ae(e);
  return de(() => {
    Ue(t.current, e) || (t.current = e);
  }, [e]), Ue(t.current, e) ? t.current : e;
}
var cs = typeof window < "u" && window.document && window.document.createElement ? Hn : de, as = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: wn.pending
} : e;
function ls({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: r,
      useSelector: n,
      useStore: o
    },
    unstable__sideEffectsInRender: u,
    createSelector: a
  },
  serializeQueryArgs: v,
  context: b
}) {
  const S = u ? (l) => l() : de;
  return {
    buildQueryHooks: y,
    buildMutationHook: f,
    usePrefetch: g
  };
  function _(l, p, d) {
    if (p != null && p.endpointName && l.isUninitialized) {
      const {
        endpointName: E
      } = p, O = b.endpointDefinitions[E];
      v({
        queryArgs: p.originalArgs,
        endpointDefinition: O,
        endpointName: E
      }) === v({
        queryArgs: d,
        endpointDefinition: O,
        endpointName: E
      }) && (p = void 0);
    }
    let m = l.isSuccess ? l.data : p == null ? void 0 : p.data;
    m === void 0 && (m = l.data);
    const h = m !== void 0, s = l.isLoading, i = !h && s, c = l.isSuccess || s && h;
    return {
      ...l,
      data: m,
      currentData: l.data,
      isFetching: s,
      isLoading: i,
      isSuccess: c
    };
  }
  function g(l, p) {
    const d = r(), m = $t(p);
    return ze((h, s) => d(e.util.prefetch(l, h, {
      ...m,
      ...s
    })), [l, d, m]);
  }
  function y(l) {
    const p = (h, {
      refetchOnReconnect: s,
      refetchOnFocus: i,
      refetchOnMountOrArgChange: c,
      skip: E = !1,
      pollingInterval: O = 0,
      skipPollingIfUnfocused: w = !1
    } = {}) => {
      const {
        initiate: R
      } = e.endpoints[l], T = r(), A = ae();
      if (!A.current) {
        const q = T(e.internalActions.internal_getRTKQSubscriptions());
        if (process.env.NODE_ENV !== "production" && (typeof q != "object" || typeof (q == null ? void 0 : q.type) == "string"))
          throw new Error(process.env.NODE_ENV === "production" ? U(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        A.current = q;
      }
      const C = Hr(
        E ? ve : h,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        us,
        b.endpointDefinitions[l],
        l
      ), N = $t({
        refetchOnReconnect: s,
        refetchOnFocus: i,
        pollingInterval: O,
        skipPollingIfUnfocused: w
      }), P = ae(!1), D = ae();
      let {
        queryCacheKey: $,
        requestId: x
      } = D.current || {}, j = !1;
      $ && x && (j = A.current.isRequestSubscribed($, x));
      const W = !j && P.current;
      return S(() => {
        P.current = j;
      }), S(() => {
        W && (D.current = void 0);
      }, [W]), S(() => {
        var z;
        const q = D.current;
        if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(W), C === ve) {
          q == null || q.unsubscribe(), D.current = void 0;
          return;
        }
        const H = (z = D.current) == null ? void 0 : z.subscriptionOptions;
        if (!q || q.arg !== C) {
          q == null || q.unsubscribe();
          const G = T(R(C, {
            subscriptionOptions: N,
            forceRefetch: c
          }));
          D.current = G;
        } else
          N !== H && q.updateSubscriptionOptions(N);
      }, [T, R, c, C, N, W]), de(() => () => {
        var q;
        (q = D.current) == null || q.unsubscribe(), D.current = void 0;
      }, []), ne(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => {
          var q;
          if (!D.current)
            throw new Error(process.env.NODE_ENV === "production" ? U(38) : "Cannot refetch a query that has not been started yet.");
          return (q = D.current) == null ? void 0 : q.refetch();
        }
      }), []);
    }, d = ({
      refetchOnReconnect: h,
      refetchOnFocus: s,
      pollingInterval: i = 0,
      skipPollingIfUnfocused: c = !1
    } = {}) => {
      const {
        initiate: E
      } = e.endpoints[l], O = r(), [w, R] = fr(Dt), T = ae(), A = $t({
        refetchOnReconnect: h,
        refetchOnFocus: s,
        pollingInterval: i,
        skipPollingIfUnfocused: c
      });
      S(() => {
        var D, $;
        const P = (D = T.current) == null ? void 0 : D.subscriptionOptions;
        A !== P && (($ = T.current) == null || $.updateSubscriptionOptions(A));
      }, [A]);
      const C = ae(A);
      S(() => {
        C.current = A;
      }, [A]);
      const N = ze(function(P, D = !1) {
        let $;
        return t(() => {
          var x;
          (x = T.current) == null || x.unsubscribe(), T.current = $ = O(E(P, {
            subscriptionOptions: C.current,
            forceRefetch: !D
          })), R(P);
        }), $;
      }, [O, E]);
      return de(() => () => {
        var P;
        (P = T == null ? void 0 : T.current) == null || P.unsubscribe();
      }, []), de(() => {
        w !== Dt && !T.current && N(w, !0);
      }, [w, N]), ne(() => [N, w], [N, w]);
    }, m = (h, {
      skip: s = !1,
      selectFromResult: i
    } = {}) => {
      const {
        select: c
      } = e.endpoints[l], E = Hr(s ? ve : h, v, b.endpointDefinitions[l], l), O = ae(), w = ne(() => a([c(E), (N, P) => P, (N) => E], _, {
        memoizeOptions: {
          resultEqualityCheck: Ue
        }
      }), [c, E]), R = ne(() => i ? a([w], i, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : w, [w, i]), T = n((N) => R(N, O.current), Ue), A = o(), C = w(A.getState(), O.current);
      return cs(() => {
        O.current = C;
      }, [C]), T;
    };
    return {
      useQueryState: m,
      useQuerySubscription: p,
      useLazyQuerySubscription: d,
      useLazyQuery(h) {
        const [s, i] = d(h), c = m(i, {
          ...h,
          skip: i === Dt
        }), E = ne(() => ({
          lastArg: i
        }), [i]);
        return ne(() => [s, c, E], [s, c, E]);
      },
      useQuery(h, s) {
        const i = p(h, s), c = m(h, {
          selectFromResult: h === ve || s != null && s.skip ? void 0 : as,
          ...s
        }), {
          data: E,
          status: O,
          isLoading: w,
          isSuccess: R,
          isError: T,
          error: A
        } = c;
        return jt({
          data: E,
          status: O,
          isLoading: w,
          isSuccess: R,
          isError: T,
          error: A
        }), ne(() => ({
          ...c,
          ...i
        }), [c, i]);
      }
    };
  }
  function f(l) {
    return ({
      selectFromResult: p,
      fixedCacheKey: d
    } = {}) => {
      const {
        select: m,
        initiate: h
      } = e.endpoints[l], s = r(), [i, c] = fr();
      de(() => () => {
        i != null && i.arg.fixedCacheKey || i == null || i.reset();
      }, [i]);
      const E = ze(function(H) {
        const z = s(h(H, {
          fixedCacheKey: d
        }));
        return c(z), z;
      }, [s, h, d]), {
        requestId: O
      } = i || {}, w = ne(() => m({
        fixedCacheKey: d,
        requestId: i == null ? void 0 : i.requestId
      }), [d, i, m]), R = ne(() => p ? a([w], p) : w, [p, w]), T = n(R, Ue), A = d == null ? i == null ? void 0 : i.arg.originalArgs : void 0, C = ze(() => {
        t(() => {
          i && c(void 0), d && s(e.internalActions.removeMutationResult({
            requestId: O,
            fixedCacheKey: d
          }));
        });
      }, [s, d, i, O]), {
        endpointName: N,
        data: P,
        status: D,
        isLoading: $,
        isSuccess: x,
        isError: j,
        error: W
      } = T;
      jt({
        endpointName: N,
        data: P,
        status: D,
        isLoading: $,
        isSuccess: x,
        isError: j,
        error: W
      });
      const q = ne(() => ({
        ...T,
        originalArgs: A,
        reset: C
      }), [T, A, C]);
      return ne(() => [E, q], [E, q]);
    };
  }
}
function fs(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
var ds = /* @__PURE__ */ Symbol(), ps = ({
  batch: e = Gn,
  hooks: t = {
    useDispatch: os,
    useSelector: Hi,
    useStore: kn
  },
  createSelector: r = Sn,
  unstable__sideEffectsInRender: n = !1,
  ...o
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const u = ["useDispatch", "useSelector", "useStore"];
    let a = !1;
    for (const v of u)
      if (fs(o) > 0 && (o[v] && (a || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), a = !0)), t[v] = o[v]), typeof t[v] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? U(36) : `When using custom hooks for context, all ${u.length} hooks need to be provided: ${u.join(", ")}.
Hook ${v} was either not provided or not a function.`);
  }
  return {
    name: ds,
    init(u, {
      serializeQueryArgs: a
    }, v) {
      const b = u, {
        buildQueryHooks: S,
        buildMutationHook: _,
        usePrefetch: g
      } = ls({
        api: u,
        moduleOptions: {
          batch: e,
          hooks: t,
          unstable__sideEffectsInRender: n,
          createSelector: r
        },
        serializeQueryArgs: a,
        context: v
      });
      return it(b, {
        usePrefetch: g
      }), it(v, {
        batch: e
      }), {
        injectEndpoint(y, f) {
          if (is(f)) {
            const {
              useQuery: l,
              useLazyQuery: p,
              useLazyQuerySubscription: d,
              useQueryState: m,
              useQuerySubscription: h
            } = S(y);
            it(b.endpoints[y], {
              useQuery: l,
              useLazyQuery: p,
              useLazyQuerySubscription: d,
              useQueryState: m,
              useQuerySubscription: h
            }), u[`use${Pt(y)}Query`] = l, u[`useLazy${Pt(y)}Query`] = p;
          } else if (ss(f)) {
            const l = _(y);
            it(b.endpoints[y], {
              useMutation: l
            }), u[`use${Pt(y)}Mutation`] = l;
          }
        }
      };
    }
  };
}, ys = /* @__PURE__ */ Ti(xi(), ps()), k = /* @__PURE__ */ ((e) => (e.Cashiers = "Cashiers", e.Orders = "Orders", e.Places = "Places", e.Organizations = "Organizations", e.Categories = "Categories", e.Additions = "Additions", e.Menu = "Menu", e))(k || {});
const hs = (e) => {
  const t = vi({ baseUrl: e });
  return async (r, n, o) => {
    const { data: u } = await t(r, n, o);
    return u.code ? (alert(`Ошибка: ${u.code}`), { error: u }) : { data: u };
  };
}, me = ys({
  reducerPath: "api",
  tagTypes: Object.values(k),
  baseQuery: hs("/book-eat/api"),
  endpoints: () => ({})
}), Su = me.injectEndpoints({
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
}), ms = me.injectEndpoints({
  endpoints: (e) => ({
    getCashiers: e.query({
      providesTags: [k.Cashiers],
      query: () => "/v1/users/organization",
      transformResponse: (t) => ct.setAll(ct.getInitialState(), t)
    }),
    createCashier: e.mutation(
      {
        invalidatesTags: [k.Cashiers],
        query: (t) => ({
          url: "/v1/users/place",
          method: "POST",
          body: t
        })
      }
    ),
    deleteCashiers: e.mutation({
      invalidatesTags: [k.Cashiers],
      query: (t) => ({
        url: "/v1/auth/cashier",
        method: "DELETE",
        body: t
      })
    })
  })
}), gs = {
  "@@functional/placeholder": !0
};
function B(e) {
  return e === gs;
}
function te(e) {
  return function t(r) {
    return arguments.length === 0 || B(r) ? t : e.apply(this, arguments);
  };
}
function ce(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return B(r) ? t : te(function(o) {
          return e(r, o);
        });
      default:
        return B(r) && B(n) ? t : B(r) ? te(function(o) {
          return e(o, n);
        }) : B(n) ? te(function(o) {
          return e(r, o);
        }) : e(r, n);
    }
  };
}
function xn(e, t) {
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
      return function(r, n, o, u, a) {
        return t.apply(this, arguments);
      };
    case 6:
      return function(r, n, o, u, a, v) {
        return t.apply(this, arguments);
      };
    case 7:
      return function(r, n, o, u, a, v, b) {
        return t.apply(this, arguments);
      };
    case 8:
      return function(r, n, o, u, a, v, b, S) {
        return t.apply(this, arguments);
      };
    case 9:
      return function(r, n, o, u, a, v, b, S, _) {
        return t.apply(this, arguments);
      };
    case 10:
      return function(r, n, o, u, a, v, b, S, _, g) {
        return t.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function zn(e) {
  return function t(r, n, o) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return B(r) ? t : ce(function(u, a) {
          return e(r, u, a);
        });
      case 2:
        return B(r) && B(n) ? t : B(r) ? ce(function(u, a) {
          return e(u, n, a);
        }) : B(n) ? ce(function(u, a) {
          return e(r, u, a);
        }) : te(function(u) {
          return e(r, n, u);
        });
      default:
        return B(r) && B(n) && B(o) ? t : B(r) && B(n) ? ce(function(u, a) {
          return e(u, a, o);
        }) : B(r) && B(o) ? ce(function(u, a) {
          return e(u, n, a);
        }) : B(n) && B(o) ? ce(function(u, a) {
          return e(r, u, a);
        }) : B(r) ? te(function(u) {
          return e(u, n, o);
        }) : B(n) ? te(function(u) {
          return e(r, u, o);
        }) : B(o) ? te(function(u) {
          return e(r, n, u);
        }) : e(r, n, o);
    }
  };
}
const ur = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function vs(e) {
  return e != null && typeof e["@@transducer/step"] == "function";
}
function Ss(e, t, r) {
  return function() {
    if (arguments.length === 0)
      return r();
    var n = arguments[arguments.length - 1];
    if (!ur(n)) {
      for (var o = 0; o < e.length; ) {
        if (typeof n[e[o]] == "function")
          return n[e[o]].apply(n, Array.prototype.slice.call(arguments, 0, -1));
        o += 1;
      }
      if (vs(n)) {
        var u = t.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return u(n);
      }
    }
    return r.apply(this, arguments);
  };
}
const Gr = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(e) {
    return this.xf["@@transducer/result"](e);
  }
};
function Jr(e) {
  for (var t = [], r; !(r = e.next()).done; )
    t.push(r.value);
  return t;
}
function Xr(e, t, r) {
  for (var n = 0, o = r.length; n < o; ) {
    if (e(t, r[n]))
      return !0;
    n += 1;
  }
  return !1;
}
function _s(e) {
  var t = String(e).match(/^function (\w*)/);
  return t == null ? "" : t[1];
}
function at(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Es(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
const qt = typeof Object.is == "function" ? Object.is : Es;
var Zr = Object.prototype.toString, bs = /* @__PURE__ */ function() {
  return Zr.call(arguments) === "[object Arguments]" ? function(t) {
    return Zr.call(t) === "[object Arguments]";
  } : function(t) {
    return at("callee", t);
  };
}();
const Os = bs;
var ws = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), en = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], tn = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), Rs = function(t, r) {
  for (var n = 0; n < t.length; ) {
    if (t[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, Ts = /* @__PURE__ */ te(typeof Object.keys == "function" && !tn ? function(t) {
  return Object(t) !== t ? [] : Object.keys(t);
} : function(t) {
  if (Object(t) !== t)
    return [];
  var r, n, o = [], u = tn && Os(t);
  for (r in t)
    at(r, t) && (!u || r !== "length") && (o[o.length] = r);
  if (ws)
    for (n = en.length - 1; n >= 0; )
      r = en[n], at(r, t) && !Rs(o, r) && (o[o.length] = r), n -= 1;
  return o;
});
const rn = Ts;
var Cs = /* @__PURE__ */ te(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
const nn = Cs;
function on(e, t, r, n) {
  var o = Jr(e), u = Jr(t);
  function a(v, b) {
    return cr(v, b, r.slice(), n.slice());
  }
  return !Xr(function(v, b) {
    return !Xr(a, b, v);
  }, u, o);
}
function cr(e, t, r, n) {
  if (qt(e, t))
    return !0;
  var o = nn(e);
  if (o !== nn(t))
    return !1;
  if (typeof e["fantasy-land/equals"] == "function" || typeof t["fantasy-land/equals"] == "function")
    return typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](t) && typeof t["fantasy-land/equals"] == "function" && t["fantasy-land/equals"](e);
  if (typeof e.equals == "function" || typeof t.equals == "function")
    return typeof e.equals == "function" && e.equals(t) && typeof t.equals == "function" && t.equals(e);
  switch (o) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof e.constructor == "function" && _s(e.constructor) === "Promise")
        return e === t;
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof e == typeof t && qt(e.valueOf(), t.valueOf())))
        return !1;
      break;
    case "Date":
      if (!qt(e.valueOf(), t.valueOf()))
        return !1;
      break;
    case "Error":
      return e.name === t.name && e.message === t.message;
    case "RegExp":
      if (!(e.source === t.source && e.global === t.global && e.ignoreCase === t.ignoreCase && e.multiline === t.multiline && e.sticky === t.sticky && e.unicode === t.unicode))
        return !1;
      break;
  }
  for (var u = r.length - 1; u >= 0; ) {
    if (r[u] === e)
      return n[u] === t;
    u -= 1;
  }
  switch (o) {
    case "Map":
      return e.size !== t.size ? !1 : on(e.entries(), t.entries(), r.concat([e]), n.concat([t]));
    case "Set":
      return e.size !== t.size ? !1 : on(e.values(), t.values(), r.concat([e]), n.concat([t]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return !1;
  }
  var a = rn(e);
  if (a.length !== rn(t).length)
    return !1;
  var v = r.concat([e]), b = n.concat([t]);
  for (u = a.length - 1; u >= 0; ) {
    var S = a[u];
    if (!(at(S, t) && cr(t[S], e[S], v, b)))
      return !1;
    u -= 1;
  }
  return !0;
}
var As = /* @__PURE__ */ ce(function(t, r) {
  return cr(t, r, [], []);
});
const Ms = As;
function Is(e, t, r) {
  var n, o;
  if (typeof e.indexOf == "function")
    switch (typeof t) {
      case "number":
        if (t === 0) {
          for (n = 1 / t; r < e.length; ) {
            if (o = e[r], o === 0 && 1 / o === n)
              return r;
            r += 1;
          }
          return -1;
        } else if (t !== t) {
          for (; r < e.length; ) {
            if (o = e[r], typeof o == "number" && o !== o)
              return r;
            r += 1;
          }
          return -1;
        }
        return e.indexOf(t, r);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return e.indexOf(t, r);
      case "object":
        if (t === null)
          return e.indexOf(t, r);
    }
  for (; r < e.length; ) {
    if (Ms(e[r], t))
      return r;
    r += 1;
  }
  return -1;
}
function sn(e, t) {
  return Is(t, e, 0) >= 0;
}
const Ns = Number.isInteger || function(t) {
  return t << 0 === t;
};
function Ln(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Ps(e, t) {
  var r = e < 0 ? t.length + e : e;
  return Ln(t) ? t.charAt(r) : t[r];
}
var Ds = /* @__PURE__ */ ce(function(t, r) {
  if (r != null)
    return Ns(t) ? Ps(t, r) : r[t];
});
const un = Ds;
var $s = /* @__PURE__ */ te(function(t) {
  return ur(t) ? !0 : !t || typeof t != "object" || Ln(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
});
const Vn = $s;
var cn = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function qs(e, t, r) {
  return function(o, u, a) {
    if (Vn(a))
      return e(o, u, a);
    if (a == null)
      return u;
    if (typeof a["fantasy-land/reduce"] == "function")
      return t(o, u, a, "fantasy-land/reduce");
    if (a[cn] != null)
      return r(o, u, a[cn]());
    if (typeof a.next == "function")
      return r(o, u, a);
    if (typeof a.reduce == "function")
      return t(o, u, a, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function js(e, t, r) {
  for (var n = 0, o = r.length; n < o; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
var ks = /* @__PURE__ */ ce(function(t, r) {
  return xn(t.length, function() {
    return t.apply(r, arguments);
  });
});
const xs = ks;
function zs(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function Ls(e, t, r, n) {
  return e["@@transducer/result"](r[n](xs(e["@@transducer/step"], e), t));
}
var Vs = /* @__PURE__ */ qs(js, Ls, zs);
const Fs = Vs;
var Qs = /* @__PURE__ */ function() {
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
function Us(e) {
  return new Qs(e);
}
var Bs = /* @__PURE__ */ zn(function(e, t, r) {
  return Fs(typeof e == "function" ? Us(e) : e, t, r);
});
const Ws = Bs;
function Ks(e) {
  return function t(r) {
    for (var n, o, u, a = [], v = 0, b = r.length; v < b; ) {
      if (Vn(r[v]))
        for (n = e ? t(r[v]) : r[v], u = 0, o = n.length; u < o; )
          a[a.length] = n[u], u += 1;
      else
        a[a.length] = r[v];
      v += 1;
    }
    return a;
  };
}
function Ys(e, t) {
  return function() {
    return t.call(this, e.apply(this, arguments));
  };
}
function Fn(e, t) {
  return function() {
    var r = arguments.length;
    if (r === 0)
      return t();
    var n = arguments[r - 1];
    return ur(n) || typeof n[e] != "function" ? t.apply(this, arguments) : n[e].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var Hs = /* @__PURE__ */ zn(/* @__PURE__ */ Fn("slice", function(t, r, n) {
  return Array.prototype.slice.call(n, t, r);
}));
const Gs = Hs;
var Js = /* @__PURE__ */ te(/* @__PURE__ */ Fn("tail", /* @__PURE__ */ Gs(1, 1 / 0)));
const Xs = Js;
function ue() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return xn(arguments[0].length, Ws(Ys, arguments[0], Xs(arguments)));
}
var Zs = /* @__PURE__ */ function() {
  function e() {
    this._nativeSet = typeof Set == "function" ? /* @__PURE__ */ new Set() : null, this._items = {};
  }
  return e.prototype.add = function(t) {
    return !an(t, !0, this);
  }, e.prototype.has = function(t) {
    return an(t, !1, this);
  }, e;
}();
function an(e, t, r) {
  var n = typeof e, o, u;
  switch (n) {
    case "string":
    case "number":
      return e === 0 && 1 / e === -1 / 0 ? r._items["-0"] ? !0 : (t && (r._items["-0"] = !0), !1) : r._nativeSet !== null ? t ? (o = r._nativeSet.size, r._nativeSet.add(e), u = r._nativeSet.size, u === o) : r._nativeSet.has(e) : n in r._items ? e in r._items[n] ? !0 : (t && (r._items[n][e] = !0), !1) : (t && (r._items[n] = {}, r._items[n][e] = !0), !1);
    case "boolean":
      if (n in r._items) {
        var a = e ? 1 : 0;
        return r._items[n][a] ? !0 : (t && (r._items[n][a] = !0), !1);
      } else
        return t && (r._items[n] = e ? [!1, !0] : [!0, !1]), !1;
    case "function":
      return r._nativeSet !== null ? t ? (o = r._nativeSet.size, r._nativeSet.add(e), u = r._nativeSet.size, u === o) : r._nativeSet.has(e) : n in r._items ? sn(e, r._items[n]) ? !0 : (t && r._items[n].push(e), !1) : (t && (r._items[n] = [e]), !1);
    case "undefined":
      return r._items[n] ? !0 : (t && (r._items[n] = !0), !1);
    case "object":
      if (e === null)
        return r._items.null ? !0 : (t && (r._items.null = !0), !1);
    default:
      return n = Object.prototype.toString.call(e), n in r._items ? sn(e, r._items[n]) ? !0 : (t && r._items[n].push(e), !1) : (t && (r._items[n] = [e]), !1);
  }
}
const Qn = Zs;
var eu = /* @__PURE__ */ te(/* @__PURE__ */ Ks(!0));
const tu = eu;
var ru = /* @__PURE__ */ function() {
  function e(t, r) {
    this.xf = r, this.f = t, this.set = new Qn();
  }
  return e.prototype["@@transducer/init"] = Gr.init, e.prototype["@@transducer/result"] = Gr.result, e.prototype["@@transducer/step"] = function(t, r) {
    return this.set.add(this.f(r)) ? this.xf["@@transducer/step"](t, r) : t;
  }, e;
}();
function nu(e) {
  return function(t) {
    return new ru(e, t);
  };
}
var ou = /* @__PURE__ */ ce(/* @__PURE__ */ Ss([], nu, function(e, t) {
  for (var r = new Qn(), n = [], o = 0, u, a; o < t.length; )
    a = t[o], u = e(a), r.add(u) && n.push(a), o += 1;
  return n;
}));
const iu = ou, su = ms.endpoints.getCashiers.select(), _u = ct.getSelectors(
  ue(su, (e) => e.data ?? ct.getInitialState())
), Ie = we({
  selectId: (e) => e.id,
  sortComparer: (e, t) => Number(e.id) - Number(t.id)
}), uu = me.injectEndpoints({
  endpoints: (e) => ({
    getOrders: e.query({
      providesTags: [k.Orders],
      query: () => ({
        url: "/v1/orders"
      }),
      transformResponse: (t) => Ie.setAll(Ie.getInitialState(), t)
    }),
    getOrder: e.query({
      providesTags: [k.Orders],
      query: (t) => ({
        url: `/v1/orders/${t}`
      }),
      transformResponse: (t) => Ie.setAll(Ie.getInitialState(), t)
    }),
    createOrder: e.mutation({
      query: (t) => ({
        url: "/v1/orders",
        method: "POST",
        body: t
      }),
      invalidatesTags: [k.Orders]
    }),
    updateOrderStatus: e.mutation({
      query: ({ id: t, statusVal: r }) => ({
        params: { status: r },
        url: `/v1/orders/${t}/status`,
        method: "PUT"
      }),
      invalidatesTags: [k.Orders]
    })
  })
}), cu = uu.endpoints.getOrders.select(), Eu = Ie.getSelectors(
  ue(cu, (e) => e.data ?? Ie.getInitialState())
), oe = we({
  selectId: (e) => e.id
}), Un = me.injectEndpoints({
  endpoints: (e) => ({
    getOrganisation: e.query({
      query: (t) => ({
        url: `v1/organizations/${t}`
      }),
      transformResponse: (t) => oe.setOne(
        oe.getInitialState(),
        t
      ),
      providesTags: [k.Organizations]
    }),
    getCurrentOrganisation: e.query({
      query: () => ({
        url: "v1/organizations/current"
      }),
      transformResponse: (t) => oe.setOne(
        oe.getInitialState(),
        t
      ),
      providesTags: [k.Organizations]
    }),
    getOrganisations: e.query({
      query: () => ({
        url: "/v1/organizations"
      }),
      transformResponse: (t) => oe.setMany(
        oe.getInitialState(),
        t
      ),
      providesTags: [k.Organizations]
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
      invalidatesTags: [k.Organizations]
    })
  })
}), au = Un.endpoints.getOrganisations.select(), bu = oe.getSelectors(
  ue(
    Un.endpoints.getCurrentOrganisation.select(),
    (e) => e.data ?? oe.getInitialState()
  )
), Ou = oe.getSelectors(
  ue(
    au,
    (e) => e.data ?? oe.getInitialState()
  )
), pe = we({
  selectId: (e) => e.id
}), Bn = me.injectEndpoints({
  endpoints: (e) => ({
    fetchPlaces: e.query({
      query: () => ({
        url: "/v1/places"
      }),
      providesTags: [k.Places],
      transformResponse: (t) => pe.setAll(pe.getInitialState(), t)
    }),
    fetchPlacesByOrganization: e.query({
      query: () => ({
        url: "/v1/places/organization"
      }),
      providesTags: [k.Places],
      transformResponse: (t) => pe.setAll(pe.getInitialState(), t)
    }),
    savePlace: e.mutation({
      query: (t) => ({
        url: "/v1/places",
        method: "POST",
        body: t
      }),
      invalidatesTags: [k.Places]
    }),
    editPlace: e.mutation({
      query: (t) => ({
        url: `/v1/places/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [k.Places]
    }),
    deletePlace: e.mutation({
      query: (t) => ({
        url: `/v1/places/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [k.Places]
    })
  })
}), lu = Bn.endpoints.fetchPlaces.select(), wu = pe.getSelectors(
  ue(
    Bn.endpoints.fetchPlacesByOrganization.select(),
    (e) => e.data ?? pe.getInitialState()
  )
), Ru = pe.getSelectors(
  ue(lu, (e) => e.data ?? pe.getInitialState())
), Z = we({
  selectId: (e) => e.id
}), $e = we({
  selectId: (e) => e.id
}), ar = me.injectEndpoints({
  endpoints: (e) => ({
    getMenuByPlaceId: e.query({
      query: (t) => `/v1/products/place/${t}`,
      transformResponse: (t) => {
        const r = iu(un("id"), tu(t.map(un("products"))));
        return $e.addMany($e.getInitialState(), t), Z.setMany(Z.getInitialState(), r);
      },
      providesTags: [k.Menu]
    }),
    getMenuById: e.query({
      query: (t) => `/v1/products/${t}`,
      transformResponse: (t) => Z.setOne(Z.getInitialState(), t),
      providesTags: [k.Menu]
    }),
    getMenuByPlaces: e.query({
      query: () => "/v1/products/place",
      transformResponse: (t) => Z.setAll(Z.getInitialState(), t),
      providesTags: [k.Menu]
    }),
    getMenuByOrganization: e.query({
      query: () => "/v1/products/organization",
      transformResponse: (t) => Z.setAll(Z.getInitialState(), t),
      providesTags: [k.Menu]
    }),
    saveMenu: e.mutation({
      query: (t) => ({
        url: "/v1/products",
        method: "POST",
        body: t
      }),
      invalidatesTags: [k.Menu]
    }),
    editMenu: e.mutation({
      query: (t) => ({
        url: `/v1/products/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [k.Menu]
    }),
    deleteMenu: e.mutation({
      query: (t) => ({
        url: `/menu/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [k.Menu]
    })
  })
}), fu = ar.endpoints.getMenuByOrganization.select(), Tu = Z.getSelectors(
  ue(fu, (e) => e.data ?? Z.getInitialState())
), Cu = (e) => {
  const t = ar.endpoints.getMenuByPlaceId.select(e);
  return Z.getSelectors(
    ue(t, (r) => r.data ?? Z.getInitialState())
  );
}, Au = (e) => {
  const t = ar.endpoints.getMenuById.select(e);
  return Z.getSelectors(
    ue(t, (r) => r.data ?? Z.getInitialState())
  );
}, lt = we({
  selectId: (e) => e.id
}), du = me.injectEndpoints({
  endpoints: (e) => ({
    fetchAdditions: e.query({
      query: () => "/v1/additions/organization?activeOnly=false",
      providesTags: [k.Additions],
      transformResponse: (t) => lt.setAll(lt.getInitialState(), t)
    }),
    saveAddition: e.mutation({
      query: (t) => ({
        url: "/v1/additions",
        method: "POST",
        body: t
      }),
      invalidatesTags: [k.Additions]
    }),
    editAddition: e.mutation({
      query: (t) => ({
        url: `/v1/additions/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [k.Additions]
    }),
    deleteAddition: e.mutation({
      query: (t) => ({
        url: `/v1/additions/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [k.Additions]
    })
  })
}), pu = du.endpoints.fetchAdditions.select(), Mu = lt.getSelectors(
  ue(pu, (e) => e.data ?? lt.getInitialState())
), yu = me.injectEndpoints({
  endpoints: (e) => ({
    fetchCategories: e.query({
      query: () => ({
        url: "/v1/categories/organization?activeOnly=false"
      }),
      transformResponse: (t) => $e.setAll($e.getInitialState(), t),
      providesTags: [k.Categories]
    }),
    updateCategory: e.mutation({
      query: (t) => ({
        url: `/v1/categories/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [k.Categories]
    }),
    createCategory: e.mutation({
      query: (t) => ({
        url: "/v1/categories",
        method: "POST",
        body: { ...t, description: "test" }
      }),
      invalidatesTags: [k.Categories]
    }),
    deleteCategory: e.mutation({
      query: (t) => ({
        url: `/v1/categories/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [k.Categories]
    })
  })
}), hu = yu.endpoints.fetchCategories.select(), Iu = $e.getSelectors(
  ue(
    hu,
    (e) => e.data ?? $e.getInitialState()
  )
);
export {
  Zn as DayOfWeek,
  Xn as DeliveryTypeName,
  Jn as OrderStatus,
  du as additionsEndpoints,
  Mu as additionsSelectors,
  me as api,
  ms as cashiersEndpoints,
  _u as cashiersSelectors,
  yu as categoriesEndpoints,
  Iu as categoriesSelectors,
  Au as createMenuSelectorsById,
  Cu as createMenuSelectorsByPlaceId,
  bu as currentOrganizationSelector,
  Su as loginApi,
  ar as menuEndpoints,
  Tu as menuSelectors,
  uu as ordersEndpoints,
  Eu as ordersSelectors,
  Un as organizationsEndpoints,
  Ou as organizationsSelectors,
  wu as placesByOrganizationSelectors,
  Bn as placesEndpoints,
  Ru as placesSelectors
};
