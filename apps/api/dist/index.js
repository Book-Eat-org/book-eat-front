var Cn = Object.defineProperty;
var An = (e, t, r) => t in e ? Cn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _t = (e, t, r) => (An(e, typeof t != "symbol" ? t + "" : t, r), r);
import * as et from "react";
import ft, { useContext as Mn, useRef as ie, useCallback as xe, useDebugValue as $t, useMemo as te, useState as sr, useEffect as fe, useLayoutEffect as Nn } from "react";
import { unstable_batchedUpdates as Pn } from "react-dom";
var In = /* @__PURE__ */ ((e) => (e.Monday = "Понедельник", e.Tuesday = "Вторник", e.Wednesday = "Среда", e.Thursday = "Четверг", e.Friday = "Пятница", e.Saturday = "Суббота", e.Sunday = "Воскресенье", e))(In || {});
function kt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var bt = () => Math.random().toString(36).substring(7).split("").join("."), Dn = {
  INIT: `@@redux/INIT${bt()}`,
  REPLACE: `@@redux/REPLACE${bt()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${bt()}`
}, ze = Dn;
function ce(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function $n(e) {
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
  if (xn(e))
    return "date";
  if (jn(e))
    return "error";
  const r = kn(e);
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
function kn(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function jn(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function xn(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function qn(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = $n(e)), t;
}
function cr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function zn(e, t, r, n) {
  const o = Object.keys(t), u = r && r.type === ze.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!ce(e))
    return `The ${u} has unexpected type of "${qn(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const d = Object.keys(e).filter((v) => !t.hasOwnProperty(v) && !n[v]);
  if (d.forEach((v) => {
    n[v] = !0;
  }), !(r && r.type === ze.REPLACE) && d.length > 0)
    return `Unexpected ${d.length > 1 ? "keys" : "key"} "${d.join('", "')}" found in ${u}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function Vn(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: ze.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? kt(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: ze.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? kt(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${ze.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Fn(e) {
  const t = Object.keys(e), r = {};
  for (let d = 0; d < t.length; d++) {
    const v = t[d];
    process.env.NODE_ENV !== "production" && typeof e[v] > "u" && cr(`No reducer provided for key "${v}"`), typeof e[v] == "function" && (r[v] = e[v]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let u;
  try {
    Vn(r);
  } catch (d) {
    u = d;
  }
  return function(v = {}, O) {
    if (u)
      throw u;
    if (process.env.NODE_ENV !== "production") {
      const g = zn(v, r, O, o);
      g && cr(g);
    }
    let E = !1;
    const S = {};
    for (let g = 0; g < n.length; g++) {
      const y = n[g], l = r[y], a = v[y], p = l(a, O);
      if (typeof p > "u") {
        const f = O && O.type;
        throw new Error(process.env.NODE_ENV === "production" ? kt(14) : `When called with an action of type ${f ? `"${String(f)}"` : "(unknown type)"}, the slice reducer for key "${y}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      S[y] = p, E = E || p !== a;
    }
    return E = E || n.length !== Object.keys(v).length, E ? S : v;
  };
}
function Yt(e) {
  return ce(e) && "type" in e && typeof e.type == "string";
}
var Ht = Symbol.for("immer-nothing"), Ve = Symbol.for("immer-draftable"), Z = Symbol.for("immer-state"), Kr = process.env.NODE_ENV !== "production" ? [
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
var Ee = Object.getPrototypeOf;
function ne(e) {
  return !!e && !!e[Z];
}
function oe(e) {
  var t;
  return e ? Br(e) || Array.isArray(e) || !!e[Ve] || !!((t = e.constructor) != null && t[Ve]) || He(e) || Ge(e) : !1;
}
var Ln = Object.prototype.constructor.toString();
function Br(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Ee(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Ln;
}
function Qn(e) {
  return ne(e) || Y(15, e), e[Z].base_;
}
function Pe(e, t) {
  _e(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function _e(e) {
  const t = e[Z];
  return t ? t.type_ : Array.isArray(e) ? 1 : He(e) ? 2 : Ge(e) ? 3 : 0;
}
function Qe(e, t) {
  return _e(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ot(e, t) {
  return _e(e) === 2 ? e.get(t) : e[t];
}
function Yr(e, t, r) {
  const n = _e(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Un(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function He(e) {
  return e instanceof Map;
}
function Ge(e) {
  return e instanceof Set;
}
function me(e) {
  return e.copy_ || e.base_;
}
function jt(e, t) {
  if (He(e))
    return new Map(e);
  if (Ge(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Br(e))
    return Ee(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[Z];
  let n = Reflect.ownKeys(r);
  for (let o = 0; o < n.length; o++) {
    const u = n[o], d = r[u];
    d.writable === !1 && (d.writable = !0, d.configurable = !0), (d.get || d.set) && (r[u] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: d.enumerable,
      value: e[u]
    });
  }
  return Object.create(Ee(e), r);
}
function Gt(e, t = !1) {
  return dt(e) || ne(e) || !oe(e) || (_e(e) > 1 && (e.set = e.add = e.clear = e.delete = Wn), Object.freeze(e), t && Pe(e, (r, n) => Gt(n, !0))), e;
}
function Wn() {
  Y(2);
}
function dt(e) {
  return Object.isFrozen(e);
}
var xt = {};
function be(e) {
  const t = xt[e];
  return t || Y(0, e), t;
}
function Kn(e, t) {
  xt[e] || (xt[e] = t);
}
var Ue;
function Hr() {
  return Ue;
}
function Bn(e, t) {
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
  t && (be("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function qt(e) {
  zt(e), e.drafts_.forEach(Yn), e.drafts_ = null;
}
function zt(e) {
  e === Ue && (Ue = e.parent_);
}
function ar(e) {
  return Ue = Bn(Ue, e);
}
function Yn(e) {
  const t = e[Z];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function lr(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Z].modified_ && (qt(t), Y(4)), oe(e) && (e = it(t, e), t.parent_ || st(t, e)), t.patches_ && be("Patches").generateReplacementPatches_(
    r[Z].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = it(t, r, []), qt(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ht ? e : void 0;
}
function it(e, t, r) {
  if (dt(t))
    return t;
  const n = t[Z];
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
    let u = o, d = !1;
    n.type_ === 3 && (u = new Set(o), o.clear(), d = !0), Pe(
      u,
      (v, O) => fr(e, n, o, v, O, r, d)
    ), st(e, o, !1), r && e.patches_ && be("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function fr(e, t, r, n, o, u, d) {
  if (process.env.NODE_ENV !== "production" && o === r && Y(5), ne(o)) {
    const v = u && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Qe(t.assigned_, n) ? u.concat(n) : void 0, O = it(e, o, v);
    if (Yr(r, n, O), ne(O))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    d && r.add(o);
  if (oe(o) && !dt(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    it(e, o), (!t || !t.scope_.parent_) && st(e, o);
  }
}
function st(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Gt(t, r);
}
function Hn(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Hr(),
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
  r && (o = [n], u = We);
  const { revoke: d, proxy: v } = Proxy.revocable(o, u);
  return n.draft_ = v, n.revoke_ = d, v;
}
var Jt = {
  get(e, t) {
    if (t === Z)
      return e;
    const r = me(e);
    if (!Qe(r, t))
      return Gn(e, r, t);
    const n = r[t];
    return e.finalized_ || !oe(n) ? n : n === wt(e.base_, t) ? (Rt(e), e.copy_[t] = Ft(n, e)) : n;
  },
  has(e, t) {
    return t in me(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(me(e));
  },
  set(e, t, r) {
    const n = Gr(me(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = wt(me(e), t), u = o == null ? void 0 : o[Z];
      if (u && u.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Un(r, o) && (r !== void 0 || Qe(e.base_, t)))
        return !0;
      Rt(e), Vt(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return wt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Rt(e), Vt(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = me(e), n = Reflect.getOwnPropertyDescriptor(r, t);
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
    return Ee(e.base_);
  },
  setPrototypeOf() {
    Y(12);
  }
}, We = {};
Pe(Jt, (e, t) => {
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
function wt(e, t) {
  const r = e[Z];
  return (r ? me(r) : e)[t];
}
function Gn(e, t, r) {
  var o;
  const n = Gr(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Gr(e, t) {
  if (!(t in e))
    return;
  let r = Ee(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Ee(r);
  }
}
function Vt(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Vt(e.parent_));
}
function Rt(e) {
  e.copy_ || (e.copy_ = jt(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Jn = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const u = r;
        r = t;
        const d = this;
        return function(O = u, ...E) {
          return d.produce(O, (S) => r.call(this, S, ...E));
        };
      }
      typeof r != "function" && Y(6), n !== void 0 && typeof n != "function" && Y(7);
      let o;
      if (oe(t)) {
        const u = ar(this), d = Ft(t, void 0);
        let v = !0;
        try {
          o = r(d), v = !1;
        } finally {
          v ? qt(u) : zt(u);
        }
        return ur(u, n), lr(o, u);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === Ht && (o = void 0), this.autoFreeze_ && Gt(o, !0), n) {
          const u = [], d = [];
          be("Patches").generateReplacementPatches_(t, o, u, d), n(u, d);
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
    oe(e) || Y(8), ne(e) && (e = Jr(e));
    const t = ar(this), r = Ft(e, void 0);
    return r[Z].isManual_ = !0, zt(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Z];
    (!r || !r.isManual_) && Y(9);
    const { scope_: n } = r;
    return ur(n, t), lr(void 0, n);
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
    return ne(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function Ft(e, t) {
  const r = He(e) ? be("MapSet").proxyMap_(e, t) : Ge(e) ? be("MapSet").proxySet_(e, t) : Hn(e, t);
  return (t ? t.scope_ : Hr()).drafts_.push(r), r;
}
function Jr(e) {
  return ne(e) || Y(10, e), Xr(e);
}
function Xr(e) {
  if (!oe(e) || dt(e))
    return e;
  const t = e[Z];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = jt(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = jt(e, !0);
  return Pe(r, (n, o) => {
    Yr(r, n, Xr(o));
  }), t && (t.finalized_ = !1), r;
}
function Xn() {
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
        return d(
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
    let { base_: f, assigned_: m } = y, h = y.copy_;
    h.length < f.length && ([f, h] = [h, f], [a, p] = [p, a]);
    for (let s = 0; s < f.length; s++)
      if (m[s] && h[s] !== f[s]) {
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
          value: g(f[s])
        });
      }
    for (let s = f.length; s < h.length; s++) {
      const i = l.concat([s]);
      a.push({
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
  function d(y, l, a, p) {
    const { base_: f, copy_: m } = y;
    Pe(y.assigned_, (h, s) => {
      const i = Ot(f, h), c = Ot(m, h), _ = s ? Qe(f, h) ? t : r : n;
      if (i === c && _ === t)
        return;
      const b = l.concat(h);
      a.push(_ === n ? { op: _, path: b } : { op: _, path: b, value: c }), p.push(
        _ === r ? { op: n, path: b } : _ === n ? { op: r, path: b, value: g(i) } : { op: t, path: b, value: g(i) }
      );
    });
  }
  function v(y, l, a, p) {
    let { base_: f, copy_: m } = y, h = 0;
    f.forEach((s) => {
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
      if (!f.has(s)) {
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
      const { path: p, op: f } = a;
      let m = y;
      for (let c = 0; c < p.length - 1; c++) {
        const _ = _e(m);
        let b = p[c];
        typeof b != "string" && typeof b != "number" && (b = "" + b), (_ === 0 || _ === 1) && (b === "__proto__" || b === "constructor") && Y(16 + 3), typeof m == "function" && b === "prototype" && Y(16 + 3), m = Ot(m, b), typeof m != "object" && Y(16 + 2, p.join("/"));
      }
      const h = _e(m), s = S(a.value), i = p[p.length - 1];
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
              return m.delete(a.value);
            default:
              return delete m[i];
          }
        default:
          Y(16 + 1, f);
      }
    }), y;
  }
  function S(y) {
    if (!oe(y))
      return y;
    if (Array.isArray(y))
      return y.map(S);
    if (He(y))
      return new Map(
        Array.from(y.entries()).map(([a, p]) => [a, S(p)])
      );
    if (Ge(y))
      return new Set(Array.from(y).map(S));
    const l = Object.create(Ee(y));
    for (const a in y)
      l[a] = S(y[a]);
    return Qe(y, Ve) && (l[Ve] = y[Ve]), l;
  }
  function g(y) {
    return ne(y) ? S(y) : y;
  }
  Kn("Patches", {
    applyPatches_: E,
    generatePatches_: o,
    generateReplacementPatches_: O
  });
}
var ee = new Jn(), De = ee.produce, Zr = ee.produceWithPatches.bind(
  ee
);
ee.setAutoFreeze.bind(ee);
ee.setUseStrictShallowCopy.bind(ee);
var dr = ee.applyPatches.bind(ee);
ee.createDraft.bind(ee);
ee.finishDraft.bind(ee);
var Zn = (e) => {
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
}, eo = (e, t, r) => {
  const { memoize: n, memoizeOptions: o } = t, { inputSelectorResults: u, inputSelectorResultsCopy: d } = e, v = n(() => ({}), ...o);
  if (!(v.apply(null, u) === v.apply(null, d))) {
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
        secondInputs: d,
        stack: E
      }
    );
  }
}, to = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function ro(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function no(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var pr = (e) => Array.isArray(e) ? e : [e];
function oo(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return no(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function yr(e, t) {
  const r = [], { length: n } = e;
  for (let o = 0; o < n; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var io = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...to,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: Zn
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: eo
    }
  };
}, so = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, co = typeof WeakRef < "u" ? WeakRef : so, uo = 0, hr = 1;
function tt() {
  return {
    s: uo,
    v: void 0,
    o: null,
    p: null
  };
}
function Ke(e, t = {}) {
  let r = tt();
  const { resultEqualityCheck: n } = t;
  let o, u = 0;
  function d() {
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
    if (v.s === hr ? S = v.v : (S = e.apply(null, arguments), u++), E.s = hr, n) {
      const g = (o == null ? void 0 : o.deref()) ?? o;
      g != null && n(g, S) && (S = g, u !== 0 && u--), o = typeof S == "object" && S !== null || typeof S == "function" ? new co(S) : S;
    }
    return E.v = S, S;
  }
  return d.clearCache = () => {
    r = tt(), d.resetResultsCount();
  }, d.resultsCount = () => u, d.resetResultsCount = () => {
    u = 0;
  }, d;
}
function en(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e;
  return (...o) => {
    let u = 0, d = 0, v, O = {}, E = o.pop();
    typeof E == "object" && (O = E, E = o.pop()), ro(
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
    } = S, f = pr(y), m = pr(a), h = oo(o), s = g(function() {
      return u++, E.apply(
        null,
        arguments
      );
    }, ...f);
    let i = !0;
    const c = l(function() {
      d++;
      const b = yr(
        h,
        arguments
      );
      if (process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: w, inputStabilityCheck: R } = io(i, p);
        if (w.shouldRun && w.run(
          E
        ), R.shouldRun) {
          const T = yr(
            h,
            arguments
          );
          R.run(
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
      recomputations: () => u,
      resetRecomputations: () => {
        u = 0;
      },
      memoize: g,
      argsMemoize: l
    });
  };
}
var tn = /* @__PURE__ */ en(Ke), ao = (...e) => {
  const t = en(...e), r = Object.assign((...n) => {
    const o = t(...n), u = (d, ...v) => o(ne(d) ? Jr(d) : d, ...v);
    return Object.assign(u, o), u;
  }, {
    withTypes: () => r
  });
  return r;
}, lo = ao(Ke), fo = (e) => e && typeof e.match == "function";
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
function po(e) {
  return Yt(e) && Object.keys(e).every(yo);
}
function yo(e) {
  return ["type", "payload", "error", "meta"].indexOf(e) > -1;
}
function mr(e) {
  return oe(e) ? De(e, () => {
  }) : e;
}
function gr(e, t, r) {
  if (e.has(t)) {
    let o = e.get(t);
    return r.update && (o = r.update(o, t, e), e.set(t, o)), o;
  }
  if (!r.insert)
    throw new Error(process.env.NODE_ENV === "production" ? U(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
var qe = "RTK_autoBatch", ke = () => (e) => ({
  payload: e,
  meta: {
    [qe]: !0
  }
});
process.env.NODE_ENV;
function rn(e) {
  const t = {}, r = [];
  let n;
  const o = {
    addCase(u, d) {
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
      return t[v] = d, o;
    },
    addMatcher(u, d) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? U(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: u,
        reducer: d
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
function ho(e) {
  return typeof e == "function";
}
function mo(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? U(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = rn(t), u;
  if (ho(e))
    u = () => mr(e());
  else {
    const v = mr(e);
    u = () => v;
  }
  function d(v = u(), O) {
    let E = [r[O.type], ...n.filter(({
      matcher: S
    }) => S(O)).map(({
      reducer: S
    }) => S)];
    return E.filter((S) => !!S).length === 0 && (E = [o]), E.reduce((S, g) => {
      if (g)
        if (ne(S)) {
          const l = g(S, O);
          return l === void 0 ? S : l;
        } else {
          if (oe(S))
            return De(S, (y) => g(y, O));
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
  return d.getInitialState = u, d;
}
var go = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Xt = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += go[Math.random() * 64 | 0];
  return t;
}, nn = (e, t) => fo(e) ? e.match(t) : e(t);
function pe(...e) {
  return (t) => e.some((r) => nn(r, t));
}
function Fe(...e) {
  return (t) => e.every((r) => nn(r, t));
}
function pt(e, t) {
  if (!e || !e.meta)
    return !1;
  const r = typeof e.meta.requestId == "string", n = t.indexOf(e.meta.requestStatus) > -1;
  return r && n;
}
function Je(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function Zt(...e) {
  return e.length === 0 ? (t) => pt(t, ["pending"]) : Je(e) ? (t) => {
    const r = e.map((o) => o.pending);
    return pe(...r)(t);
  } : Zt()(e[0]);
}
function Ie(...e) {
  return e.length === 0 ? (t) => pt(t, ["rejected"]) : Je(e) ? (t) => {
    const r = e.map((o) => o.rejected);
    return pe(...r)(t);
  } : Ie()(e[0]);
}
function Xe(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0 ? (r) => Fe(Ie(...e), t)(r) : Je(e) ? (r) => Fe(Ie(...e), t)(r) : Xe()(e[0]);
}
function ye(...e) {
  return e.length === 0 ? (t) => pt(t, ["fulfilled"]) : Je(e) ? (t) => {
    const r = e.map((o) => o.fulfilled);
    return pe(...r)(t);
  } : ye()(e[0]);
}
function Lt(...e) {
  return e.length === 0 ? (t) => pt(t, ["pending", "fulfilled", "rejected"]) : Je(e) ? (t) => {
    const r = [];
    for (const o of e)
      r.push(o.pending, o.rejected, o.fulfilled);
    return pe(...r)(t);
  } : Lt()(e[0]);
}
var vo = ["name", "message", "stack", "code"], Tt = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    _t(this, "_type");
    this.payload = e, this.meta = t;
  }
}, vr = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    _t(this, "_type");
    this.payload = e, this.meta = t;
  }
}, So = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of vo)
      typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return {
    message: String(e)
  };
}, Sr = /* @__PURE__ */ (() => {
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
    })), d = X(t + "/rejected", (O, E, S, g, y) => ({
      payload: g,
      error: (n && n.serializeError || So)(O || "Rejected"),
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
            if (_o(_) && (_ = await _), _ === !1 || l.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const b = new Promise((w, R) => {
              a = () => {
                R({
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
              abort: f,
              rejectWithValue: (w, R) => new Tt(w, R),
              fulfillWithValue: (w, R) => new vr(w, R)
            })).then((w) => {
              if (w instanceof Tt)
                throw w;
              return w instanceof vr ? o(w.payload, y, O, w.meta) : o(w, y, O);
            })]);
          } catch (_) {
            h = _ instanceof Tt ? d(null, y, O, _.payload, _.meta) : d(_, y, O);
          } finally {
            a && l.signal.removeEventListener("abort", a);
          }
          return n && !n.dispatchConditionRejection && d.match(h) && h.meta.condition || E(h), h;
        }();
        return Object.assign(m, {
          abort: f,
          requestId: y,
          arg: O,
          unwrap() {
            return m.then(Eo);
          }
        });
      };
    }
    return Object.assign(v, {
      pending: u,
      rejected: d,
      fulfilled: o,
      settled: pe(d, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Eo(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function _o(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var bo = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Oo(e, t) {
  return `${e}/${t}`;
}
function wo({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[bo];
  return function(o) {
    const {
      name: u,
      reducerPath: d = u
    } = o;
    if (!u)
      throw new Error(process.env.NODE_ENV === "production" ? U(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const v = (typeof o.reducers == "function" ? o.reducers(To()) : o.reducers) || {}, O = Object.keys(v), E = {
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
        type: Oo(u, s),
        createNotation: typeof o.reducers == "function"
      };
      Ao(i) ? No(c, i, S, t) : Co(c, i, S);
    });
    function g() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? U(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [s = {}, i = [], c = void 0] = typeof o.extraReducers == "function" ? rn(o.extraReducers) : [o.extraReducers], _ = {
        ...s,
        ...E.sliceCaseReducersByType
      };
      return mo(o.initialState, (b) => {
        for (let w in _)
          b.addCase(w, _[w]);
        for (let w of E.sliceMatchers)
          b.addMatcher(w.matcher, w.reducer);
        for (let w of i)
          b.addMatcher(w.matcher, w.reducer);
        c && b.addDefaultCase(c);
      });
    }
    const y = (s) => s, l = /* @__PURE__ */ new Map();
    let a;
    function p(s, i) {
      return a || (a = g()), a(s, i);
    }
    function f() {
      return a || (a = g()), a.getInitialState();
    }
    function m(s, i = !1) {
      function c(b) {
        let w = b[s];
        if (typeof w > "u") {
          if (i)
            w = f();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? U(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return w;
      }
      function _(b = y) {
        const w = gr(l, i, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return gr(w, b, {
          insert: () => {
            const R = {};
            for (const [T, A] of Object.entries(o.selectors ?? {}))
              R[T] = Ro(A, b, f, i);
            return R;
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
function Ro(e, t, r, n) {
  function o(u, ...d) {
    let v = t(u);
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
var Te = /* @__PURE__ */ wo();
function To() {
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
function Co({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let u, d;
  if ("reducer" in n) {
    if (r && !Mo(n))
      throw new Error(process.env.NODE_ENV === "production" ? U(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    u = n.reducer, d = n.prepare;
  } else
    u = n;
  o.addCase(e, u).exposeCaseReducer(t, u).exposeAction(t, d ? X(e, d) : X(e));
}
function Ao(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Mo(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function No({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? U(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: u,
    fulfilled: d,
    pending: v,
    rejected: O,
    settled: E,
    options: S
  } = r, g = o(e, u, S);
  n.exposeAction(t, g), d && n.addCase(g.fulfilled, d), v && n.addCase(g.pending, v), O && n.addCase(g.rejected, O), E && n.addMatcher(g.settled, E), n.exposeCaseReducer(t, {
    fulfilled: d || rt,
    pending: v || rt,
    rejected: O || rt,
    settled: E || rt
  });
}
function rt() {
}
function Po() {
  return {
    ids: [],
    entities: {}
  };
}
function Io(e) {
  function t(r = {}, n) {
    const o = Object.assign(Po(), r);
    return n ? e.setAll(o, n) : o;
  }
  return {
    getInitialState: t
  };
}
function Do() {
  function e(t, r = {}) {
    const {
      createSelector: n = lo
    } = r, o = (g) => g.ids, u = (g) => g.entities, d = n(o, u, (g, y) => g.map((l) => y[l])), v = (g, y) => y, O = (g, y) => g[y], E = n(o, (g) => g.length);
    if (!t)
      return {
        selectIds: o,
        selectEntities: u,
        selectAll: d,
        selectTotal: E,
        selectById: n(u, v, O)
      };
    const S = n(t, u);
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
var $o = ne;
function ko(e) {
  const t = B((r, n) => e(n));
  return function(n) {
    return t(n, void 0);
  };
}
function B(e) {
  return function(r, n) {
    function o(d) {
      return po(d);
    }
    const u = (d) => {
      o(n) ? e(n.payload, d) : e(n, d);
    };
    return $o(r) ? (u(r), r) : De(r, u);
  };
}
function Me(e, t) {
  const r = t(e);
  return process.env.NODE_ENV !== "production" && r === void 0 && console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", e, "The `selectId` implementation:", t.toString()), r;
}
function Se(e) {
  return Array.isArray(e) || (e = Object.values(e)), e;
}
function on(e, t, r) {
  e = Se(e);
  const n = [], o = [];
  for (const u of e) {
    const d = Me(u, t);
    d in r.entities ? o.push({
      id: d,
      changes: u
    }) : n.push(u);
  }
  return [n, o];
}
function sn(e) {
  function t(a, p) {
    const f = Me(a, e);
    f in p.entities || (p.ids.push(f), p.entities[f] = a);
  }
  function r(a, p) {
    a = Se(a);
    for (const f of a)
      t(f, p);
  }
  function n(a, p) {
    const f = Me(a, e);
    f in p.entities || p.ids.push(f), p.entities[f] = a;
  }
  function o(a, p) {
    a = Se(a);
    for (const f of a)
      n(f, p);
  }
  function u(a, p) {
    a = Se(a), p.ids = [], p.entities = {}, r(a, p);
  }
  function d(a, p) {
    return v([a], p);
  }
  function v(a, p) {
    let f = !1;
    a.forEach((m) => {
      m in p.entities && (delete p.entities[m], f = !0);
    }), f && (p.ids = p.ids.filter((m) => m in p.entities));
  }
  function O(a) {
    Object.assign(a, {
      ids: [],
      entities: {}
    });
  }
  function E(a, p, f) {
    const m = f.entities[p.id];
    if (m === void 0)
      return !1;
    const h = Object.assign({}, m, p.changes), s = Me(h, e), i = s !== p.id;
    return i && (a[p.id] = s, delete f.entities[p.id]), f.entities[s] = h, i;
  }
  function S(a, p) {
    return g([a], p);
  }
  function g(a, p) {
    const f = {}, m = {};
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
    }), a = Object.values(m), a.length > 0 && a.filter((i) => E(f, i, p)).length > 0 && (p.ids = Object.values(p.entities).map((i) => Me(i, e)));
  }
  function y(a, p) {
    return l([a], p);
  }
  function l(a, p) {
    const [f, m] = on(a, e, p);
    g(m, p), r(f, p);
  }
  return {
    removeAll: ko(O),
    addOne: B(t),
    addMany: B(r),
    setOne: B(n),
    setMany: B(o),
    setAll: B(u),
    updateOne: B(S),
    updateMany: B(g),
    upsertOne: B(y),
    upsertMany: B(l),
    removeOne: B(d),
    removeMany: B(v)
  };
}
function jo(e, t) {
  const {
    removeOne: r,
    removeMany: n,
    removeAll: o
  } = sn(e);
  function u(m, h) {
    return d([m], h);
  }
  function d(m, h) {
    m = Se(m);
    const s = m.filter((i) => !(Me(i, e) in h.entities));
    s.length !== 0 && p(s, h);
  }
  function v(m, h) {
    return O([m], h);
  }
  function O(m, h) {
    m = Se(m), m.length !== 0 && p(m, h);
  }
  function E(m, h) {
    m = Se(m), h.entities = {}, h.ids = [], d(m, h);
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
    const [s, i] = on(m, e, h);
    g(i, h), d(s, h);
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
    }), f(h);
  }
  function f(m) {
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
    addOne: B(u),
    updateOne: B(S),
    upsertOne: B(y),
    setOne: B(v),
    setMany: B(O),
    setAll: B(E),
    addMany: B(d),
    updateMany: B(g),
    upsertMany: B(l)
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
  }, n = r ? jo(t, r) : sn(t), o = Io(n), u = Do();
  return {
    selectId: t,
    sortComparer: r,
    ...o,
    ...u,
    ...n
  };
}
var xo = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? U(32) : `${t} is not a function`);
}, er = "listenerMiddleware", qo = (e) => {
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
  return xo(u, "options.listener"), {
    predicate: o,
    type: t,
    effect: u
  };
}, zo = Object.assign((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = qo(e);
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
  withTypes: () => zo
}), Vo = Object.assign(X(`${er}/add`), {
  withTypes: () => Vo
});
X(`${er}/removeAll`);
var Fo = Object.assign(X(`${er}/remove`), {
  withTypes: () => Fo
});
function U(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var cn = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(cn || {});
function Lo(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
function Qo(e) {
  return new RegExp("(^|:)//").test(e);
}
var Uo = (e) => e.replace(/\/$/, ""), Wo = (e) => e.replace(/^\//, "");
function Ko(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (Qo(t))
    return t;
  const r = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = Uo(e), t = Wo(t), `${e}${r}${t}`;
}
var Er = (e) => [].concat(...e);
function Bo() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function Yo() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var _r = ce;
function un(e, t) {
  if (e === t || !(_r(e) && _r(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), n = Object.keys(e);
  let o = r.length === n.length;
  const u = Array.isArray(t) ? [] : {};
  for (const d of r)
    u[d] = un(e[d], t[d]), o && (o = e[d] === u[d]);
  return o ? e : u;
}
var br = (...e) => fetch(...e), Ho = (e) => e.status >= 200 && e.status <= 299, Go = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function Or(e) {
  if (!ce(e))
    return e;
  const t = {
    ...e
  };
  for (const [r, n] of Object.entries(t))
    n === void 0 && delete t[r];
  return t;
}
function Jo({
  baseUrl: e,
  prepareHeaders: t = (g) => g,
  fetchFn: r = br,
  paramsSerializer: n,
  isJsonContentType: o = Go,
  jsonContentType: u = "application/json",
  jsonReplacer: d,
  timeout: v,
  responseHandler: O,
  validateStatus: E,
  ...S
} = {}) {
  return typeof fetch > "u" && r === br && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (y, l) => {
    const {
      signal: a,
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
      responseHandler: w = O ?? "json",
      validateStatus: R = E ?? Ho,
      timeout: T = v,
      ...A
    } = typeof y == "string" ? {
      url: y
    } : y, C = {
      ...S,
      signal: a,
      ...A
    };
    _ = new Headers(Or(_)), C.headers = await t(_, {
      getState: p,
      extra: f,
      endpoint: m,
      forced: h,
      type: s
    }) || _;
    const P = (q) => typeof q == "object" && (ce(q) || Array.isArray(q) || typeof q.toJSON == "function");
    if (!C.headers.has("content-type") && P(C.body) && C.headers.set("content-type", u), P(C.body) && o(C.headers) && (C.body = JSON.stringify(C.body, d)), b) {
      const q = ~c.indexOf("?") ? "&" : "?", G = n ? n(b) : new URLSearchParams(Or(b));
      c += q + G;
    }
    c = Ko(e, c);
    const I = new Request(c, C);
    i = {
      request: new Request(c, C)
    };
    let $, x = !1, j = T && setTimeout(() => {
      x = !0, l.abort();
    }, T);
    try {
      $ = await r(I);
    } catch (q) {
      return {
        error: {
          status: x ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(q)
        },
        meta: i
      };
    } finally {
      j && clearTimeout(j);
    }
    const K = $.clone();
    i.response = K;
    let k, H = "";
    try {
      let q;
      if (await Promise.all([
        g($, w).then((G) => k = G, (G) => q = G),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        K.text().then((G) => H = G, () => {
        })
      ]), q)
        throw q;
    } catch (q) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: $.status,
          data: H,
          error: String(q)
        },
        meta: i
      };
    }
    return R($, k) ? {
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
}, tr = /* @__PURE__ */ X("__rtkq/focused"), an = /* @__PURE__ */ X("__rtkq/unfocused"), rr = /* @__PURE__ */ X("__rtkq/online"), ln = /* @__PURE__ */ X("__rtkq/offline");
function fn(e) {
  return e.type === "query";
}
function Xo(e) {
  return e.type === "mutation";
}
function nr(e, t, r, n, o, u) {
  return Zo(e) ? e(t, r, n, o).map(Qt).map(u) : Array.isArray(e) ? e.map(Qt).map(u) : [];
}
function Zo(e) {
  return typeof e == "function";
}
function Qt(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Rr(e) {
  return e != null;
}
function Ne(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
function ei(e, t) {
  return e.catch(t);
}
var Be = Symbol("forceQueryFn"), Ut = (e) => typeof e[Be] == "function";
function ti({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: r,
  api: n,
  context: o
}) {
  const u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), {
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
      return (_ = u.get(s)) == null ? void 0 : _[c];
    };
  }
  function g(m, h) {
    return (s) => {
      var i;
      return (i = d.get(s)) == null ? void 0 : i[h];
    };
  }
  function y() {
    return (m) => Object.values(u.get(m) || {}).filter(Rr);
  }
  function l() {
    return (m) => Object.values(d.get(m) || {}).filter(Rr);
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
      [Be]: w,
      ...R
    } = {}) => (T, A) => {
      var G;
      const C = e({
        queryArgs: i,
        endpointDefinition: h,
        endpointName: m
      }), P = t({
        ...R,
        type: "query",
        subscribe: c,
        forceRefetch: _,
        subscriptionOptions: b,
        endpointName: m,
        originalArgs: i,
        queryCacheKey: C,
        [Be]: w
      }), I = n.endpoints[m].select(i), D = T(P), $ = I(A());
      a(T);
      const {
        requestId: x,
        abort: j
      } = D, K = $.requestId !== x, k = (G = u.get(T)) == null ? void 0 : G[C], H = () => I(A()), q = Object.assign(w ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        D.then(H)
      ) : K && !k ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve($)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([k, D]).then(H)
      ), {
        arg: i,
        requestId: x,
        subscriptionOptions: b,
        queryCacheKey: C,
        abort: j,
        async unwrap() {
          const J = await q;
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
          q.subscriptionOptions = J, T(E({
            endpointName: m,
            requestId: x,
            queryCacheKey: C,
            options: J
          }));
        }
      });
      if (!k && !K && !w) {
        const J = u.get(T) || {};
        J[C] = q, u.set(T, J), q.then(() => {
          delete J[C], Ne(J) || u.delete(T);
        });
      }
      return q;
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
      }), w = c(b);
      a(c);
      const {
        requestId: R,
        abort: T,
        unwrap: A
      } = w, C = ei(w.unwrap().then(($) => ({
        data: $
      })), ($) => ({
        error: $
      })), P = () => {
        c(O({
          requestId: R,
          fixedCacheKey: i
        }));
      }, I = Object.assign(C, {
        arg: w.arg,
        requestId: R,
        abort: T,
        unwrap: A,
        reset: P
      }), D = d.get(c) || {};
      return d.set(c, D), D[R] = I, I.then(() => {
        delete D[R], Ne(D) || d.delete(c);
      }), i && (D[i] = I, I.then(() => {
        D[i] === I && (delete D[i], Ne(D) || d.delete(c));
      })), I;
    };
  }
}
function Tr(e) {
  return e;
}
function ri({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: r
  },
  serializeQueryArgs: n,
  api: o,
  assertTagType: u
}) {
  const d = (h, s, i, c) => (_, b) => {
    const w = r[h], R = n({
      queryArgs: s,
      endpointDefinition: w,
      endpointName: h
    });
    if (_(o.internalActions.queryResultPatched({
      queryCacheKey: R,
      patches: i
    })), !c)
      return;
    const T = o.endpoints[h].select(s)(
      // Work around TS 4.1 mismatch
      b()
    ), A = nr(w.providesTags, T.data, void 0, s, {}, u);
    _(o.internalActions.updateProvidedBy({
      queryCacheKey: R,
      providedTags: A
    }));
  }, v = (h, s, i, c = !0) => (_, b) => {
    const R = o.endpoints[h].select(s)(
      // Work around TS 4.1 mismatch
      b()
    );
    let T = {
      patches: [],
      inversePatches: [],
      undo: () => _(o.util.patchQueryData(h, s, T.inversePatches, c))
    };
    if (R.status === "uninitialized")
      return T;
    let A;
    if ("data" in R)
      if (oe(R.data)) {
        const [C, P, I] = Zr(R.data, i);
        T.patches.push(...P), T.inversePatches.push(...I), A = C;
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
    return _(o.util.patchQueryData(h, s, T.patches, c)), T;
  }, O = (h, s, i) => (c) => c(o.endpoints[h].initiate(s, {
    subscribe: !1,
    forceRefetch: !0,
    [Be]: () => ({
      data: i
    })
  })), E = async (h, {
    signal: s,
    abort: i,
    rejectWithValue: c,
    fulfillWithValue: _,
    dispatch: b,
    getState: w,
    extra: R
  }) => {
    const T = r[h.endpointName];
    try {
      let A = Tr, C;
      const P = {
        signal: s,
        abort: i,
        dispatch: b,
        getState: w,
        extra: R,
        endpoint: h.endpointName,
        type: h.type,
        forced: h.type === "query" ? S(h, w()) : void 0
      }, I = h.type === "query" ? h[Be] : void 0;
      if (I ? C = I() : T.query ? (C = await t(T.query(h.originalArgs), P, T.extraOptions), T.transformResponse && (A = T.transformResponse)) : C = await T.queryFn(h.originalArgs, P, T.extraOptions, (D) => t(D, P, T.extraOptions)), typeof process < "u" && process.env.NODE_ENV === "development") {
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
        throw new wr(C.error, C.meta);
      return _(await A(C.data, C.meta, h.originalArgs), {
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: C.meta,
        [qe]: !0
      });
    } catch (A) {
      let C = A;
      if (C instanceof wr) {
        let P = Tr;
        T.query && T.transformErrorResponse && (P = T.transformErrorResponse);
        try {
          return c(await P(C.value, C.meta, h.originalArgs), {
            baseQueryMeta: C.meta,
            [qe]: !0
          });
        } catch (I) {
          C = I;
        }
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${h.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, C) : console.error(C), C;
    }
  };
  function S(h, s) {
    var w, R, T;
    const i = (R = (w = s[e]) == null ? void 0 : w.queries) == null ? void 0 : R[h.queryCacheKey], c = (T = s[e]) == null ? void 0 : T.config.refetchOnMountOrArgChange, _ = i == null ? void 0 : i.fulfilledTimeStamp, b = h.forceRefetch ?? (h.subscribe && c);
    return b ? b === !0 || (Number(/* @__PURE__ */ new Date()) - Number(_)) / 1e3 >= b : !1;
  }
  const g = Sr(`${e}/executeQuery`, E, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [qe]: !0
      };
    },
    condition(h, {
      getState: s
    }) {
      var T, A, C;
      const i = s(), c = (A = (T = i[e]) == null ? void 0 : T.queries) == null ? void 0 : A[h.queryCacheKey], _ = c == null ? void 0 : c.fulfilledTimeStamp, b = h.originalArgs, w = c == null ? void 0 : c.originalArgs, R = r[h.endpointName];
      return Ut(h) ? !0 : (c == null ? void 0 : c.status) === "pending" ? !1 : S(h, i) || fn(R) && ((C = R == null ? void 0 : R.forceRefetch) != null && C.call(R, {
        currentArg: b,
        previousArg: w,
        endpointState: c,
        state: i
      })) ? !0 : !_;
    },
    dispatchConditionRejection: !0
  }), y = Sr(`${e}/executeMutation`, E, {
    getPendingMeta() {
      return {
        startedTimeStamp: Date.now(),
        [qe]: !0
      };
    }
  }), l = (h) => "force" in h, a = (h) => "ifOlderThan" in h, p = (h, s, i) => (c, _) => {
    const b = l(i) && i.force, w = a(i) && i.ifOlderThan, R = (A = !0) => {
      const C = {
        forceRefetch: A,
        isPrefetch: !0
      };
      return o.endpoints[h].initiate(s, C);
    }, T = o.endpoints[h].select(s)(_());
    if (b)
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
  function f(h) {
    return (s) => {
      var i, c;
      return ((c = (i = s == null ? void 0 : s.meta) == null ? void 0 : i.arg) == null ? void 0 : c.endpointName) === h;
    };
  }
  function m(h, s) {
    return {
      matchPending: Fe(Zt(h), f(s)),
      matchFulfilled: Fe(ye(h), f(s)),
      matchRejected: Fe(Ie(h), f(s))
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
function dn(e, t, r, n) {
  return nr(r[e.meta.arg.endpointName][t], ye(e) ? e.payload : void 0, Xe(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, n);
}
function nt(e, t, r) {
  const n = e[t];
  n && r(n);
}
function Ye(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Cr(e, t, r) {
  const n = e[Ye(t)];
  n && r(n);
}
var je = {};
function ni({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  context: {
    endpointDefinitions: n,
    apiUid: o,
    extractRehydrationInfo: u,
    hasRehydrationInfo: d
  },
  assertTagType: v,
  config: O
}) {
  const E = X(`${e}/resetApiState`), S = Te({
    name: `${e}/queries`,
    initialState: je,
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
          nt(s, i, (_) => {
            _.data = dr(_.data, c.concat());
          });
        },
        prepare: ke()
      }
    },
    extraReducers(s) {
      s.addCase(t.pending, (i, {
        meta: c,
        meta: {
          arg: _
        }
      }) => {
        var w;
        const b = Ut(_);
        i[w = _.queryCacheKey] ?? (i[w] = {
          status: "uninitialized",
          endpointName: _.endpointName
        }), nt(i, _.queryCacheKey, (R) => {
          R.status = "pending", R.requestId = b && R.requestId ? (
            // for `upsertQuery` **updates**, keep the current `requestId`
            R.requestId
          ) : (
            // for normal queries or `upsertQuery` **inserts** always update the `requestId`
            c.requestId
          ), _.originalArgs !== void 0 && (R.originalArgs = _.originalArgs), R.startedTimeStamp = c.startedTimeStamp;
        });
      }).addCase(t.fulfilled, (i, {
        meta: c,
        payload: _
      }) => {
        nt(i, c.arg.queryCacheKey, (b) => {
          if (b.requestId !== c.requestId && !Ut(c.arg))
            return;
          const {
            merge: w
          } = n[c.arg.endpointName];
          if (b.status = "fulfilled", w)
            if (b.data !== void 0) {
              const {
                fulfilledTimeStamp: R,
                arg: T,
                baseQueryMeta: A,
                requestId: C
              } = c;
              let P = De(b.data, (I) => w(I, _, {
                arg: T.originalArgs,
                baseQueryMeta: A,
                fulfilledTimeStamp: R,
                requestId: C
              }));
              b.data = P;
            } else
              b.data = _;
          else
            b.data = n[c.arg.endpointName].structuralSharing ?? !0 ? un(ne(b.data) ? Qn(b.data) : b.data, _) : _;
          delete b.error, b.fulfilledTimeStamp = c.fulfilledTimeStamp;
        });
      }).addCase(t.rejected, (i, {
        meta: {
          condition: c,
          arg: _,
          requestId: b
        },
        error: w,
        payload: R
      }) => {
        nt(i, _.queryCacheKey, (T) => {
          if (!c) {
            if (T.requestId !== b)
              return;
            T.status = "rejected", T.error = R ?? w;
          }
        });
      }).addMatcher(d, (i, c) => {
        const {
          queries: _
        } = u(c);
        for (const [b, w] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((w == null ? void 0 : w.status) === "fulfilled" || (w == null ? void 0 : w.status) === "rejected") && (i[b] = w);
      });
    }
  }), g = Te({
    name: `${e}/mutations`,
    initialState: je,
    reducers: {
      removeMutationResult: {
        reducer(s, {
          payload: i
        }) {
          const c = Ye(i);
          c in s && delete s[c];
        },
        prepare: ke()
      }
    },
    extraReducers(s) {
      s.addCase(r.pending, (i, {
        meta: c,
        meta: {
          requestId: _,
          arg: b,
          startedTimeStamp: w
        }
      }) => {
        b.track && (i[Ye(c)] = {
          requestId: _,
          status: "pending",
          endpointName: b.endpointName,
          startedTimeStamp: w
        });
      }).addCase(r.fulfilled, (i, {
        payload: c,
        meta: _
      }) => {
        _.arg.track && Cr(i, _, (b) => {
          b.requestId === _.requestId && (b.status = "fulfilled", b.data = c, b.fulfilledTimeStamp = _.fulfilledTimeStamp);
        });
      }).addCase(r.rejected, (i, {
        payload: c,
        error: _,
        meta: b
      }) => {
        b.arg.track && Cr(i, b, (w) => {
          w.requestId === b.requestId && (w.status = "rejected", w.error = c ?? _);
        });
      }).addMatcher(d, (i, c) => {
        const {
          mutations: _
        } = u(c);
        for (const [b, w] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((w == null ? void 0 : w.status) === "fulfilled" || (w == null ? void 0 : w.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          b !== (w == null ? void 0 : w.requestId) && (i[b] = w);
      });
    }
  }), y = Te({
    name: `${e}/invalidation`,
    initialState: je,
    reducers: {
      updateProvidedBy: {
        reducer(s, i) {
          var b, w;
          const {
            queryCacheKey: c,
            providedTags: _
          } = i.payload;
          for (const R of Object.values(s))
            for (const T of Object.values(R)) {
              const A = T.indexOf(c);
              A !== -1 && T.splice(A, 1);
            }
          for (const {
            type: R,
            id: T
          } of _) {
            const A = (b = s[R] ?? (s[R] = {}))[w = T || "__internal_without_id"] ?? (b[w] = []);
            A.includes(c) || A.push(c);
          }
        },
        prepare: ke()
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
            const w = b.indexOf(c);
            w !== -1 && b.splice(w, 1);
          }
      }).addMatcher(d, (i, c) => {
        var b, w;
        const {
          provided: _
        } = u(c);
        for (const [R, T] of Object.entries(_))
          for (const [A, C] of Object.entries(T)) {
            const P = (b = i[R] ?? (i[R] = {}))[w = A || "__internal_without_id"] ?? (b[w] = []);
            for (const I of C)
              P.includes(I) || P.push(I);
          }
      }).addMatcher(pe(ye(t), Xe(t)), (i, c) => {
        const _ = dn(c, "providesTags", n, v), {
          queryCacheKey: b
        } = c.meta.arg;
        y.caseReducers.updateProvidedBy(i, y.actions.updateProvidedBy({
          queryCacheKey: b,
          providedTags: _
        }));
      });
    }
  }), l = Te({
    name: `${e}/subscriptions`,
    initialState: je,
    reducers: {
      updateSubscriptionOptions(s, i) {
      },
      unsubscribeQueryResult(s, i) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), a = Te({
    name: `${e}/internalSubscriptions`,
    initialState: je,
    reducers: {
      subscriptionsUpdated: {
        reducer(s, i) {
          return dr(s, i.payload);
        },
        prepare: ke()
      }
    }
  }), p = Te({
    name: `${e}/config`,
    initialState: {
      online: Bo(),
      focused: Yo(),
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
      }).addCase(ln, (i) => {
        i.online = !1;
      }).addCase(tr, (i) => {
        i.focused = !0;
      }).addCase(an, (i) => {
        i.focused = !1;
      }).addMatcher(d, (i) => ({
        ...i
      }));
    }
  }), f = Fn({
    queries: S.reducer,
    mutations: g.reducer,
    provided: y.reducer,
    subscriptions: a.reducer,
    config: p.reducer
  }), m = (s, i) => f(E.match(i) ? void 0 : s, i), h = {
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
var ve = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), pn = {
  status: "uninitialized"
  /* uninitialized */
}, Ar = /* @__PURE__ */ De(pn, () => {
}), Mr = /* @__PURE__ */ De(pn, () => {
});
function oi({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const n = (g) => Ar, o = (g) => Mr;
  return {
    buildQuerySelector: v,
    buildMutationSelector: O,
    selectInvalidatedBy: E,
    selectCachedArgsForQuery: S
  };
  function u(g) {
    return {
      ...g,
      ...Lo(g.status)
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
      const a = e({
        queryArgs: l,
        endpointDefinition: y,
        endpointName: g
      });
      return r(l === ve ? n : (m) => {
        var h, s;
        return ((s = (h = d(m)) == null ? void 0 : h.queries) == null ? void 0 : s[a]) ?? Ar;
      }, u);
    };
  }
  function O() {
    return (g) => {
      let y;
      return typeof g == "object" ? y = Ye(g) ?? ve : y = g, r(y === ve ? o : (p) => {
        var f, m;
        return ((m = (f = d(p)) == null ? void 0 : f.mutations) == null ? void 0 : m[y]) ?? Mr;
      }, u);
    };
  }
  function E(g, y) {
    const l = g[t], a = /* @__PURE__ */ new Set();
    for (const p of y.map(Qt)) {
      const f = l.provided[p.type];
      if (!f)
        continue;
      let m = (p.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        f[p.id]
      ) : (
        // no id: invalidate all queries that provide this type
        Er(Object.values(f))
      )) ?? [];
      for (const h of m)
        a.add(h);
    }
    return Er(Array.from(a.values()).map((p) => {
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
var Ce = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Nr = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = Ce == null ? void 0 : Ce.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const o = JSON.stringify(t, (u, d) => ce(d) ? Object.keys(d).sort().reduce((v, O) => (v[O] = d[O], v), {}) : d);
    ce(t) && (Ce == null || Ce.set(t, o)), r = o;
  }
  return `${e}(${r})`;
};
function ii(...e) {
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
            typeof y == "function" ? y(u.endpointDefinitions[g]) : Object.assign(u.endpointDefinitions[g] || {}, y);
        return d;
      }
    }, v = e.map((E) => E.init(d, o, u));
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
      return d;
    }
    return d.injectEndpoints({
      endpoints: r.endpoints
    });
  };
}
function si(e) {
  for (let t in e)
    return !1;
  return !0;
}
var ci = 2147483647 / 1e3 - 1, ui = ({
  reducerPath: e,
  api: t,
  context: r,
  internalState: n
}) => {
  const {
    removeQueryResult: o,
    unsubscribeQueryResult: u
  } = t.internalActions;
  function d(S) {
    const g = n.currentSubscriptions[S];
    return !!g && !si(g);
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
      for (const [f, m] of Object.entries(p))
        E(f, m == null ? void 0 : m.endpointName, g, a.config);
    }
  };
  function E(S, g, y, l) {
    const a = r.endpointDefinitions[g], p = (a == null ? void 0 : a.keepUnusedDataFor) ?? l.keepUnusedDataFor;
    if (p === 1 / 0)
      return;
    const f = Math.max(0, Math.min(p, ci));
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
}, ai = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: r
  },
  mutationThunk: n,
  queryThunk: o,
  api: u,
  assertTagType: d,
  refetchQuery: v,
  internalState: O
}) => {
  const {
    removeQueryResult: E
  } = u.internalActions, S = pe(ye(n), Xe(n)), g = pe(ye(n, o), Ie(n, o));
  let y = [];
  const l = (f, m) => {
    S(f) ? p(dn(f, "invalidatesTags", r, d), m) : g(f) ? p([], m) : u.util.invalidateTags.match(f) && p(nr(f.payload, void 0, void 0, void 0, void 0, d), m);
  };
  function a(f) {
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
    if (y.push(...f), s.config.invalidationBehavior === "delayed" && a(s))
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
        const w = s.queries[b], R = O.currentSubscriptions[b] ?? {};
        w && (Ne(R) === 0 ? m.dispatch(E({
          queryCacheKey: b
        })) : w.status !== "uninitialized" && m.dispatch(v(w, b)));
      }
    });
  }
  return l;
}, li = ({
  reducerPath: e,
  queryThunk: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const u = {}, d = (y, l) => {
    (r.internalActions.updateSubscriptionOptions.match(y) || r.internalActions.unsubscribeQueryResult.match(y)) && O(y.payload, l), (t.pending.match(y) || t.rejected.match(y) && y.meta.condition) && O(y.meta.arg, l), (t.fulfilled.match(y) || t.rejected.match(y) && !y.meta.condition) && v(y.meta.arg, l), r.util.resetApiState.match(y) && S();
  };
  function v({
    queryCacheKey: y
  }, l) {
    const a = l.getState()[e], p = a.queries[y], f = o.currentSubscriptions[y];
    if (!p || p.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: m,
      skipPollingIfUnfocused: h
    } = g(f);
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
  return d;
}, fi = ({
  reducerPath: e,
  context: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const {
    removeQueryResult: u
  } = r.internalActions, d = (O, E) => {
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
  return d;
}, Pr = new Error("Promise never resolved before cacheEntryRemoved."), di = ({
  api: e,
  reducerPath: t,
  context: r,
  queryThunk: n,
  mutationThunk: o,
  internalState: u
}) => {
  const d = Lt(n), v = Lt(o), O = ye(n, o), E = {}, S = (l, a, p) => {
    const f = g(l);
    if (n.pending.match(l)) {
      const m = p[t].queries[f], h = a.getState()[t].queries[f];
      !m && h && y(l.meta.arg.endpointName, l.meta.arg.originalArgs, f, a, l.meta.requestId);
    } else if (o.pending.match(l))
      a.getState()[t].mutations[f] && y(l.meta.arg.endpointName, l.meta.arg.originalArgs, f, a, l.meta.requestId);
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
    return d(l) ? l.meta.arg.queryCacheKey : v(l) ? l.meta.arg.fixedCacheKey ?? l.meta.requestId : e.internalActions.removeQueryResult.match(l) ? l.payload.queryCacheKey : e.internalActions.removeMutationResult.match(l) ? Ye(l.payload) : "";
  }
  function y(l, a, p, f, m) {
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
    const b = e.endpoints[l].select(h.type === "query" ? a : p), w = f.dispatch((A, C, P) => P), R = {
      ...f,
      getCacheEntry: () => b(f.getState()),
      requestId: m,
      extra: w,
      updateCachedData: h.type === "query" ? (A) => f.dispatch(e.util.updateQueryData(l, a, A)) : void 0,
      cacheDataLoaded: _,
      cacheEntryRemoved: c
    }, T = s(a, R);
    Promise.resolve(T).catch((A) => {
      if (A !== Pr)
        throw A;
    });
  }
  return S;
}, pi = ({
  api: e,
  context: t,
  queryThunk: r,
  mutationThunk: n
}) => {
  const o = Zt(r, n), u = Ie(r, n), d = ye(r, n), v = {};
  return (E, S) => {
    var g, y;
    if (o(E)) {
      const {
        requestId: l,
        arg: {
          endpointName: a,
          originalArgs: p
        }
      } = E.meta, f = t.endpointDefinitions[a], m = f == null ? void 0 : f.onQueryStarted;
      if (m) {
        const h = {}, s = new Promise((b, w) => {
          h.resolve = b, h.reject = w;
        });
        s.catch(() => {
        }), v[l] = h;
        const i = e.endpoints[a].select(f.type === "query" ? p : l), c = S.dispatch((b, w, R) => R), _ = {
          ...S,
          getCacheEntry: () => i(S.getState()),
          requestId: l,
          extra: c,
          updateCachedData: f.type === "query" ? (b) => S.dispatch(e.util.updateQueryData(a, p, b)) : void 0,
          queryFulfilled: s
        };
        m(p, _);
      }
    } else if (d(E)) {
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
}, yi = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: r
}) => (n, o) => {
  var u, d;
  e.util.resetApiState.match(n) && o.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(n) && n.payload === t && ((d = (u = o.getState()[r]) == null ? void 0 : u.config) == null ? void 0 : d.middlewareRegistered) === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${r}".
You can only have one api per reducer path, this will lead to crashes in various situations!${r === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, hi = ({
  api: e,
  queryThunk: t,
  internalState: r
}) => {
  const n = `${e.reducerPath}/subscriptions`;
  let o = null, u = null;
  const {
    updateSubscriptionOptions: d,
    unsubscribeQueryResult: v
  } = e.internalActions, O = (l, a) => {
    var f, m, h;
    if (d.match(a)) {
      const {
        queryCacheKey: s,
        requestId: i,
        options: c
      } = a.payload;
      return (f = l == null ? void 0 : l[s]) != null && f[i] && (l[s][i] = c), !0;
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
      var f;
      const p = E();
      return !!((f = p == null ? void 0 : p[l]) != null && f[a]);
    }
  };
  return (l, a) => {
    if (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(l))
      return o = r.currentSubscriptions = {}, u = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(l))
      return [!1, y];
    const p = O(r.currentSubscriptions, l);
    let f = !0;
    if (p) {
      u || (u = setTimeout(() => {
        const s = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, i] = Zr(o, () => s);
        a.next(e.internalActions.subscriptionsUpdated(i)), o = s, u = null;
      }, 500));
      const m = typeof l.type == "string" && !!l.type.startsWith(n), h = t.rejected.match(l) && l.meta.condition && !!l.meta.arg.subscribe;
      f = !m && !h;
    }
    return [f, !1];
  };
};
function mi(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: n,
    context: o
  } = e, {
    apiUid: u
  } = o, d = {
    invalidateTags: X(`${t}/invalidateTags`)
  }, v = (g) => g.type.startsWith(`${t}/`), O = [yi, ui, ai, li, di, pi];
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
      }, p = O.map((h) => h(a)), f = hi(a), m = fi(a);
      return (h) => (s) => {
        if (!Yt(s))
          return h(s);
        y || (y = !0, g.dispatch(n.internalActions.middlewareRegistered(u)));
        const i = {
          ...g,
          next: h
        }, c = g.getState(), [_, b] = f(s, i, c);
        let w;
        if (_ ? w = h(s) : w = b, g.getState()[t] && (m(s, i, c), v(s) || o.hasRehydrationInfo(s)))
          for (let R of p)
            R(s, i, c);
        return w;
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
function ae(e, ...t) {
  return Object.assign(e, ...t);
}
var Ir = /* @__PURE__ */ Symbol(), gi = ({
  createSelector: e = tn
} = {}) => ({
  name: Ir,
  init(t, {
    baseQuery: r,
    tagTypes: n,
    reducerPath: o,
    serializeQueryArgs: u,
    keepUnusedDataFor: d,
    refetchOnMountOrArgChange: v,
    refetchOnFocus: O,
    refetchOnReconnect: E,
    invalidationBehavior: S
  }, g) {
    Xn();
    const y = (j) => (typeof process < "u" && process.env.NODE_ENV === "development" && (n.includes(j.type) || console.error(`Tag type '${j.type}' was used, but not specified in \`tagTypes\`!`)), j);
    Object.assign(t, {
      reducerPath: o,
      endpoints: {},
      internalActions: {
        onOnline: rr,
        onOffline: ln,
        onFocus: tr,
        onFocusLost: an
      },
      util: {}
    });
    const {
      queryThunk: l,
      mutationThunk: a,
      patchQueryData: p,
      updateQueryData: f,
      upsertQueryData: m,
      prefetch: h,
      buildMatchThunkActions: s
    } = ri({
      baseQuery: r,
      reducerPath: o,
      context: g,
      api: t,
      serializeQueryArgs: u,
      assertTagType: y
    }), {
      reducer: i,
      actions: c
    } = ni({
      context: g,
      queryThunk: l,
      mutationThunk: a,
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
    ae(t.util, {
      patchQueryData: p,
      updateQueryData: f,
      upsertQueryData: m,
      prefetch: h,
      resetApiState: c.resetApiState
    }), ae(t.internalActions, c);
    const {
      middleware: _,
      actions: b
    } = mi({
      reducerPath: o,
      context: g,
      queryThunk: l,
      mutationThunk: a,
      api: t,
      assertTagType: y
    });
    ae(t.util, b), ae(t, {
      reducer: i,
      middleware: _
    });
    const {
      buildQuerySelector: w,
      buildMutationSelector: R,
      selectInvalidatedBy: T,
      selectCachedArgsForQuery: A
    } = oi({
      serializeQueryArgs: u,
      reducerPath: o,
      createSelector: e
    });
    ae(t.util, {
      selectInvalidatedBy: T,
      selectCachedArgsForQuery: A
    });
    const {
      buildInitiateQuery: C,
      buildInitiateMutation: P,
      getRunningMutationThunk: I,
      getRunningMutationsThunk: D,
      getRunningQueriesThunk: $,
      getRunningQueryThunk: x
    } = ti({
      queryThunk: l,
      mutationThunk: a,
      api: t,
      serializeQueryArgs: u,
      context: g
    });
    return ae(t.util, {
      getRunningMutationThunk: I,
      getRunningMutationsThunk: D,
      getRunningQueryThunk: x,
      getRunningQueriesThunk: $
    }), {
      name: Ir,
      injectEndpoint(j, K) {
        var H;
        const k = t;
        (H = k.endpoints)[j] ?? (H[j] = {}), fn(K) ? ae(k.endpoints[j], {
          name: j,
          select: w(j, K),
          initiate: C(j, K)
        }, s(l, j)) : Xo(K) && ae(k.endpoints[j], {
          name: j,
          select: R(),
          initiate: P(j)
        }, s(a, j));
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
var Dr;
function vi() {
  if (Dr)
    return Ct;
  Dr = 1;
  var e = ft;
  function t(g, y) {
    return g === y && (g !== 0 || 1 / g === 1 / y) || g !== g && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, u = e.useLayoutEffect, d = e.useDebugValue;
  function v(g, y) {
    var l = y(), a = n({ inst: { value: l, getSnapshot: y } }), p = a[0].inst, f = a[1];
    return u(function() {
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
var $r;
function Si() {
  return $r || ($r = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = ft, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
        var w = c.map(function(R) {
          return String(R);
        });
        w.unshift("Warning: " + i), Function.prototype.apply.call(console[s], console, w);
      }
    }
    function o(s, i) {
      return s === i && (s !== 0 || 1 / s === 1 / i) || s !== s && i !== i;
    }
    var u = typeof Object.is == "function" ? Object.is : o, d = e.useState, v = e.useEffect, O = e.useLayoutEffect, E = e.useDebugValue, S = !1, g = !1;
    function y(s, i, c) {
      S || e.startTransition !== void 0 && (S = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var _ = i();
      if (!g) {
        var b = i();
        u(_, b) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), g = !0);
      }
      var w = d({
        inst: {
          value: _,
          getSnapshot: i
        }
      }), R = w[0].inst, T = w[1];
      return O(function() {
        R.value = _, R.getSnapshot = i, l(R) && T({
          inst: R
        });
      }, [s, _, i]), v(function() {
        l(R) && T({
          inst: R
        });
        var A = function() {
          l(R) && T({
            inst: R
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
    var p = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", f = !p, m = f ? a : y, h = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m;
    At.useSyncExternalStore = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), At;
}
process.env.NODE_ENV === "production" ? Wt.exports = vi() : Wt.exports = Si();
var yn = Wt.exports, Kt = { exports: {} }, Mt = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function Ei() {
  if (kr)
    return Mt;
  kr = 1;
  var e = ft, t = yn;
  function r(E, S) {
    return E === S && (E !== 0 || 1 / E === 1 / S) || E !== E && S !== S;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, u = e.useRef, d = e.useEffect, v = e.useMemo, O = e.useDebugValue;
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
        var w = y(_);
        return l !== void 0 && l(b, w) ? b : (s = _, i = w);
      }
      var h = !1, s, i, c = g === void 0 ? null : g;
      return [function() {
        return m(S());
      }, c === null ? void 0 : function() {
        return m(c());
      }];
    }, [S, g, y, l]);
    var f = o(E, a[0], a[1]);
    return d(function() {
      p.hasValue = !0, p.value = f;
    }, [f]), O(f), f;
  }, Mt;
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
var jr;
function _i() {
  return jr || (jr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = ft, t = yn;
    function r(S, g) {
      return S === g && (S !== 0 || 1 / S === 1 / g) || S !== S && g !== g;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, u = e.useRef, d = e.useEffect, v = e.useMemo, O = e.useDebugValue;
    function E(S, g, y, l, a) {
      var p = u(null), f;
      p.current === null ? (f = {
        hasValue: !1,
        value: null
      }, p.current = f) : f = p.current;
      var m = v(function() {
        var c = !1, _, b, w = function(C) {
          if (!c) {
            c = !0, _ = C;
            var P = l(C);
            if (a !== void 0 && f.hasValue) {
              var I = f.value;
              if (a(I, P))
                return b = I, I;
            }
            return b = P, P;
          }
          var D = _, $ = b;
          if (n(D, C))
            return $;
          var x = l(C);
          return a !== void 0 && a($, x) ? $ : (_ = C, b = x, x);
        }, R = y === void 0 ? null : y, T = function() {
          return w(g());
        }, A = R === null ? void 0 : function() {
          return w(R());
        };
        return [T, A];
      }, [g, y, l, a]), h = m[0], s = m[1], i = o(S, h, s);
      return d(function() {
        f.hasValue = !0, f.value = i;
      }, [i]), O(i), i;
    }
    Nt.useSyncExternalStoreWithSelector = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Nt;
}
process.env.NODE_ENV === "production" ? Kt.exports = Ei() : Kt.exports = _i();
var bi = Kt.exports;
const xr = Symbol.for("react-redux-context"), qr = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Oi() {
  var e;
  if (!et.createContext)
    return {};
  const t = (e = qr[xr]) != null ? e : qr[xr] = /* @__PURE__ */ new Map();
  let r = t.get(et.createContext);
  return r || (r = et.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(et.createContext, r)), r;
}
const Oe = /* @__PURE__ */ Oi();
function or(e = Oe) {
  return function() {
    const r = Mn(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return r;
  };
}
const hn = /* @__PURE__ */ or(), wi = () => {
  throw new Error("uSES not initialized!");
};
let mn = wi;
const Ri = (e) => {
  mn = e;
}, Ti = (e, t) => e === t;
function Ci(e = Oe) {
  const t = e === Oe ? hn : or(e);
  return function(n, o = {}) {
    const {
      equalityFn: u = Ti,
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
      if (typeof u != "function")
        throw new Error("You must pass a function as an equality function to useSelector");
    }
    const {
      store: O,
      subscription: E,
      getServerState: S,
      stabilityCheck: g,
      noopCheck: y
    } = t(), l = ie(!0), a = xe({
      [n.name](f) {
        const m = n(f);
        if (process.env.NODE_ENV !== "production") {
          const h = typeof d > "u" ? g : d;
          if (h === "always" || h === "once" && l.current) {
            const i = n(f);
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
    }[n.name], [n, g, d]), p = mn(E.addNestedSub, O.getState, S || O.getState, a, u);
    return $t(p), p;
  };
}
const Ai = /* @__PURE__ */ Ci();
var Bt = { exports: {} }, z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function Mi() {
  if (zr)
    return z;
  zr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, O = e ? Symbol.for("react.async_mode") : 60111, E = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, l = e ? Symbol.for("react.memo") : 60115, a = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, h = e ? Symbol.for("react.scope") : 60119;
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
  return z.AsyncMode = O, z.ConcurrentMode = E, z.ContextConsumer = v, z.ContextProvider = d, z.Element = t, z.ForwardRef = S, z.Fragment = n, z.Lazy = a, z.Memo = l, z.Portal = r, z.Profiler = u, z.StrictMode = o, z.Suspense = g, z.isAsyncMode = function(c) {
    return i(c) || s(c) === O;
  }, z.isConcurrentMode = i, z.isContextConsumer = function(c) {
    return s(c) === v;
  }, z.isContextProvider = function(c) {
    return s(c) === d;
  }, z.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, z.isForwardRef = function(c) {
    return s(c) === S;
  }, z.isFragment = function(c) {
    return s(c) === n;
  }, z.isLazy = function(c) {
    return s(c) === a;
  }, z.isMemo = function(c) {
    return s(c) === l;
  }, z.isPortal = function(c) {
    return s(c) === r;
  }, z.isProfiler = function(c) {
    return s(c) === u;
  }, z.isStrictMode = function(c) {
    return s(c) === o;
  }, z.isSuspense = function(c) {
    return s(c) === g;
  }, z.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === E || c === u || c === o || c === g || c === y || typeof c == "object" && c !== null && (c.$$typeof === a || c.$$typeof === l || c.$$typeof === d || c.$$typeof === v || c.$$typeof === S || c.$$typeof === f || c.$$typeof === m || c.$$typeof === h || c.$$typeof === p);
  }, z.typeOf = s, z;
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
function Ni() {
  return Vr || (Vr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, v = e ? Symbol.for("react.context") : 60110, O = e ? Symbol.for("react.async_mode") : 60111, E = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, l = e ? Symbol.for("react.memo") : 60115, a = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, h = e ? Symbol.for("react.scope") : 60119;
    function s(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === E || M === u || M === o || M === g || M === y || typeof M == "object" && M !== null && (M.$$typeof === a || M.$$typeof === l || M.$$typeof === d || M.$$typeof === v || M.$$typeof === S || M.$$typeof === f || M.$$typeof === m || M.$$typeof === h || M.$$typeof === p);
    }
    function i(M) {
      if (typeof M == "object" && M !== null) {
        var $e = M.$$typeof;
        switch ($e) {
          case t:
            var N = M.type;
            switch (N) {
              case O:
              case E:
              case n:
              case u:
              case o:
              case g:
                return N;
              default:
                var Re = N && N.$$typeof;
                switch (Re) {
                  case v:
                  case S:
                  case a:
                  case l:
                  case d:
                    return Re;
                  default:
                    return $e;
                }
            }
          case r:
            return $e;
        }
      }
    }
    var c = O, _ = E, b = v, w = d, R = t, T = S, A = n, C = a, P = l, I = r, D = u, $ = o, x = g, j = !1;
    function K(M) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(M) || i(M) === O;
    }
    function k(M) {
      return i(M) === E;
    }
    function H(M) {
      return i(M) === v;
    }
    function q(M) {
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
    V.AsyncMode = c, V.ConcurrentMode = _, V.ContextConsumer = b, V.ContextProvider = w, V.Element = R, V.ForwardRef = T, V.Fragment = A, V.Lazy = C, V.Memo = P, V.Portal = I, V.Profiler = D, V.StrictMode = $, V.Suspense = x, V.isAsyncMode = K, V.isConcurrentMode = k, V.isContextConsumer = H, V.isContextProvider = q, V.isElement = G, V.isForwardRef = J, V.isFragment = yt, V.isLazy = ht, V.isMemo = mt, V.isPortal = gt, V.isProfiler = vt, V.isStrictMode = St, V.isSuspense = Et, V.isValidElementType = s, V.typeOf = i;
  }()), V;
}
process.env.NODE_ENV === "production" ? Bt.exports = Mi() : Bt.exports = Ni();
var Pi = Bt.exports, gn = Pi, Ii = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Di = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, vn = {};
vn[gn.ForwardRef] = Ii;
vn[gn.Memo] = Di;
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
function $i() {
  if (Fr)
    return F;
  Fr = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), d = Symbol.for("react.context"), v = Symbol.for("react.server_context"), O = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), l = Symbol.for("react.offscreen"), a;
  a = Symbol.for("react.module.reference");
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
                case u:
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
  return F.ContextConsumer = d, F.ContextProvider = u, F.Element = e, F.ForwardRef = O, F.Fragment = r, F.Lazy = y, F.Memo = g, F.Portal = t, F.Profiler = o, F.StrictMode = n, F.Suspense = E, F.SuspenseList = S, F.isAsyncMode = function() {
    return !1;
  }, F.isConcurrentMode = function() {
    return !1;
  }, F.isContextConsumer = function(f) {
    return p(f) === d;
  }, F.isContextProvider = function(f) {
    return p(f) === u;
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
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === E || f === S || f === l || typeof f == "object" && f !== null && (f.$$typeof === y || f.$$typeof === g || f.$$typeof === u || f.$$typeof === d || f.$$typeof === O || f.$$typeof === a || f.getModuleId !== void 0);
  }, F.typeOf = p, F;
}
var L = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr;
function ki() {
  return Lr || (Lr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = !1, t = !1, r = !1, n = !1, o = !1, u = Symbol.for("react.element"), d = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), g = Symbol.for("react.context"), y = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), s;
    s = Symbol.for("react.module.reference");
    function i(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === v || N === E || o || N === O || N === a || N === p || n || N === h || e || t || r || typeof N == "object" && N !== null && (N.$$typeof === m || N.$$typeof === f || N.$$typeof === S || N.$$typeof === g || N.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === s || N.getModuleId !== void 0));
    }
    function c(N) {
      if (typeof N == "object" && N !== null) {
        var Re = N.$$typeof;
        switch (Re) {
          case u:
            var Ze = N.type;
            switch (Ze) {
              case v:
              case E:
              case O:
              case a:
              case p:
                return Ze;
              default:
                var ir = Ze && Ze.$$typeof;
                switch (ir) {
                  case y:
                  case g:
                  case l:
                  case m:
                  case f:
                  case S:
                    return ir;
                  default:
                    return Re;
                }
            }
          case d:
            return Re;
        }
      }
    }
    var _ = g, b = S, w = u, R = l, T = v, A = m, C = f, P = d, I = E, D = O, $ = a, x = p, j = !1, K = !1;
    function k(N) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(N) {
      return K || (K = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(N) {
      return c(N) === g;
    }
    function G(N) {
      return c(N) === S;
    }
    function J(N) {
      return typeof N == "object" && N !== null && N.$$typeof === u;
    }
    function yt(N) {
      return c(N) === l;
    }
    function ht(N) {
      return c(N) === v;
    }
    function mt(N) {
      return c(N) === m;
    }
    function gt(N) {
      return c(N) === f;
    }
    function vt(N) {
      return c(N) === d;
    }
    function St(N) {
      return c(N) === E;
    }
    function Et(N) {
      return c(N) === O;
    }
    function M(N) {
      return c(N) === a;
    }
    function $e(N) {
      return c(N) === p;
    }
    L.ContextConsumer = _, L.ContextProvider = b, L.Element = w, L.ForwardRef = R, L.Fragment = T, L.Lazy = A, L.Memo = C, L.Portal = P, L.Profiler = I, L.StrictMode = D, L.Suspense = $, L.SuspenseList = x, L.isAsyncMode = k, L.isConcurrentMode = H, L.isContextConsumer = q, L.isContextProvider = G, L.isElement = J, L.isForwardRef = yt, L.isFragment = ht, L.isLazy = mt, L.isMemo = gt, L.isPortal = vt, L.isProfiler = St, L.isStrictMode = Et, L.isSuspense = M, L.isSuspenseList = $e, L.isValidElementType = i, L.typeOf = c;
  }()), L;
}
process.env.NODE_ENV === "production" ? $i() : ki();
function Qr(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Le(e, t) {
  if (Qr(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Qr(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
function Sn(e = Oe) {
  const t = (
    // @ts-ignore
    e === Oe ? hn : (
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
const En = /* @__PURE__ */ Sn();
function ji(e = Oe) {
  const t = (
    // @ts-ignore
    e === Oe ? En : Sn(e)
  );
  return function() {
    return t().dispatch;
  };
}
const xi = /* @__PURE__ */ ji();
Ri(bi.useSyncExternalStoreWithSelector);
function qi(e) {
  return e.type === "query";
}
function zi(e) {
  return e.type === "mutation";
}
function ot(e, ...t) {
  return Object.assign(e, ...t);
}
function Pt(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var Ae = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Vi = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = Ae == null ? void 0 : Ae.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const o = JSON.stringify(t, (u, d) => ce(d) ? Object.keys(d).sort().reduce((v, O) => (v[O] = d[O], v), {}) : d);
    ce(t) && (Ae == null || Ae.set(t, o)), r = o;
  }
  return `${e}(${r})`;
}, It = Symbol();
function Ur(e, t, r, n) {
  const o = te(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: r,
      endpointName: n
    }) : e
  }), [e, t, r, n]), u = ie(o);
  return fe(() => {
    u.current.serialized !== o.serialized && (u.current = o);
  }, [o]), u.current.serialized === o.serialized ? u.current.queryArgs : e;
}
function Dt(e) {
  const t = ie(e);
  return fe(() => {
    Le(t.current, e) || (t.current = e);
  }, [e]), Le(t.current, e) ? t.current : e;
}
var Fi = typeof window < "u" && window.document && window.document.createElement ? Nn : fe, Li = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: cn.pending
} : e;
function Qi({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: r,
      useSelector: n,
      useStore: o
    },
    unstable__sideEffectsInRender: u,
    createSelector: d
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
  function S(a, p, f) {
    if (p != null && p.endpointName && a.isUninitialized) {
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
    const f = r(), m = Dt(p);
    return xe((h, s) => f(e.util.prefetch(a, h, {
      ...m,
      ...s
    })), [a, f, m]);
  }
  function y(a) {
    const p = (h, {
      refetchOnReconnect: s,
      refetchOnFocus: i,
      refetchOnMountOrArgChange: c,
      skip: _ = !1,
      pollingInterval: b = 0,
      skipPollingIfUnfocused: w = !1
    } = {}) => {
      const {
        initiate: R
      } = e.endpoints[a], T = r(), A = ie();
      if (!A.current) {
        const k = T(e.internalActions.internal_getRTKQSubscriptions());
        if (process.env.NODE_ENV !== "production" && (typeof k != "object" || typeof (k == null ? void 0 : k.type) == "string"))
          throw new Error(process.env.NODE_ENV === "production" ? U(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
        A.current = k;
      }
      const C = Ur(
        _ ? ve : h,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        Vi,
        O.endpointDefinitions[a],
        a
      ), P = Dt({
        refetchOnReconnect: s,
        refetchOnFocus: i,
        pollingInterval: b,
        skipPollingIfUnfocused: w
      }), I = ie(!1), D = ie();
      let {
        queryCacheKey: $,
        requestId: x
      } = D.current || {}, j = !1;
      $ && x && (j = A.current.isRequestSubscribed($, x));
      const K = !j && I.current;
      return E(() => {
        I.current = j;
      }), E(() => {
        K && (D.current = void 0);
      }, [K]), E(() => {
        var q;
        const k = D.current;
        if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(K), C === ve) {
          k == null || k.unsubscribe(), D.current = void 0;
          return;
        }
        const H = (q = D.current) == null ? void 0 : q.subscriptionOptions;
        if (!k || k.arg !== C) {
          k == null || k.unsubscribe();
          const G = T(R(C, {
            subscriptionOptions: P,
            forceRefetch: c
          }));
          D.current = G;
        } else
          P !== H && k.updateSubscriptionOptions(P);
      }, [T, R, c, C, P, K]), fe(() => () => {
        var k;
        (k = D.current) == null || k.unsubscribe(), D.current = void 0;
      }, []), te(() => ({
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
    }, f = ({
      refetchOnReconnect: h,
      refetchOnFocus: s,
      pollingInterval: i = 0,
      skipPollingIfUnfocused: c = !1
    } = {}) => {
      const {
        initiate: _
      } = e.endpoints[a], b = r(), [w, R] = sr(It), T = ie(), A = Dt({
        refetchOnReconnect: h,
        refetchOnFocus: s,
        pollingInterval: i,
        skipPollingIfUnfocused: c
      });
      E(() => {
        var D, $;
        const I = (D = T.current) == null ? void 0 : D.subscriptionOptions;
        A !== I && (($ = T.current) == null || $.updateSubscriptionOptions(A));
      }, [A]);
      const C = ie(A);
      E(() => {
        C.current = A;
      }, [A]);
      const P = xe(function(I, D = !1) {
        let $;
        return t(() => {
          var x;
          (x = T.current) == null || x.unsubscribe(), T.current = $ = b(_(I, {
            subscriptionOptions: C.current,
            forceRefetch: !D
          })), R(I);
        }), $;
      }, [b, _]);
      return fe(() => () => {
        var I;
        (I = T == null ? void 0 : T.current) == null || I.unsubscribe();
      }, []), fe(() => {
        w !== It && !T.current && P(w, !0);
      }, [w, P]), te(() => [P, w], [P, w]);
    }, m = (h, {
      skip: s = !1,
      selectFromResult: i
    } = {}) => {
      const {
        select: c
      } = e.endpoints[a], _ = Ur(s ? ve : h, v, O.endpointDefinitions[a], a), b = ie(), w = te(() => d([c(_), (P, I) => I, (P) => _], S, {
        memoizeOptions: {
          resultEqualityCheck: Le
        }
      }), [c, _]), R = te(() => i ? d([w], i, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : w, [w, i]), T = n((P) => R(P, b.current), Le), A = o(), C = w(A.getState(), b.current);
      return Fi(() => {
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
          skip: i === It
        }), _ = te(() => ({
          lastArg: i
        }), [i]);
        return te(() => [s, c, _], [s, c, _]);
      },
      useQuery(h, s) {
        const i = p(h, s), c = m(h, {
          selectFromResult: h === ve || s != null && s.skip ? void 0 : Li,
          ...s
        }), {
          data: _,
          status: b,
          isLoading: w,
          isSuccess: R,
          isError: T,
          error: A
        } = c;
        return $t({
          data: _,
          status: b,
          isLoading: w,
          isSuccess: R,
          isError: T,
          error: A
        }), te(() => ({
          ...c,
          ...i
        }), [c, i]);
      }
    };
  }
  function l(a) {
    return ({
      selectFromResult: p,
      fixedCacheKey: f
    } = {}) => {
      const {
        select: m,
        initiate: h
      } = e.endpoints[a], s = r(), [i, c] = sr();
      fe(() => () => {
        i != null && i.arg.fixedCacheKey || i == null || i.reset();
      }, [i]);
      const _ = xe(function(H) {
        const q = s(h(H, {
          fixedCacheKey: f
        }));
        return c(q), q;
      }, [s, h, f]), {
        requestId: b
      } = i || {}, w = te(() => m({
        fixedCacheKey: f,
        requestId: i == null ? void 0 : i.requestId
      }), [f, i, m]), R = te(() => p ? d([w], p) : w, [p, w]), T = n(R, Le), A = f == null ? i == null ? void 0 : i.arg.originalArgs : void 0, C = xe(() => {
        t(() => {
          i && c(void 0), f && s(e.internalActions.removeMutationResult({
            requestId: b,
            fixedCacheKey: f
          }));
        });
      }, [s, f, i, b]), {
        endpointName: P,
        data: I,
        status: D,
        isLoading: $,
        isSuccess: x,
        isError: j,
        error: K
      } = T;
      $t({
        endpointName: P,
        data: I,
        status: D,
        isLoading: $,
        isSuccess: x,
        isError: j,
        error: K
      });
      const k = te(() => ({
        ...T,
        originalArgs: A,
        reset: C
      }), [T, A, C]);
      return te(() => [_, k], [_, k]);
    };
  }
}
function Ui(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
var Wi = /* @__PURE__ */ Symbol(), Ki = ({
  batch: e = Pn,
  hooks: t = {
    useDispatch: xi,
    useSelector: Ai,
    useStore: En
  },
  createSelector: r = tn,
  unstable__sideEffectsInRender: n = !1,
  ...o
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const u = ["useDispatch", "useSelector", "useStore"];
    let d = !1;
    for (const v of u)
      if (Ui(o) > 0 && (o[v] && (d || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), d = !0)), t[v] = o[v]), typeof t[v] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? U(36) : `When using custom hooks for context, all ${u.length} hooks need to be provided: ${u.join(", ")}.
Hook ${v} was either not provided or not a function.`);
  }
  return {
    name: Wi,
    init(u, {
      serializeQueryArgs: d
    }, v) {
      const O = u, {
        buildQueryHooks: E,
        buildMutationHook: S,
        usePrefetch: g
      } = Qi({
        api: u,
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
          if (qi(l)) {
            const {
              useQuery: a,
              useLazyQuery: p,
              useLazyQuerySubscription: f,
              useQueryState: m,
              useQuerySubscription: h
            } = E(y);
            ot(O.endpoints[y], {
              useQuery: a,
              useLazyQuery: p,
              useLazyQuerySubscription: f,
              useQueryState: m,
              useQuerySubscription: h
            }), u[`use${Pt(y)}Query`] = a, u[`useLazy${Pt(y)}Query`] = p;
          } else if (zi(l)) {
            const a = S(y);
            ot(O.endpoints[y], {
              useMutation: a
            }), u[`use${Pt(y)}Mutation`] = a;
          }
        }
      };
    }
  };
}, Bi = /* @__PURE__ */ ii(gi(), Ki()), Q = /* @__PURE__ */ ((e) => (e.Cashiers = "Cashiers", e.Orders = "Orders", e.Places = "Places", e.Organizations = "Organizations", e.Categories = "Categories", e.Additions = "Additions", e.Menu = "Menu", e))(Q || {});
const Yi = (e) => {
  const t = Jo({ baseUrl: e });
  return async (r, n, o) => {
    const { data: u } = await t(r, n, o);
    return u.code ? (alert(`Ошибка: ${u.code}`), { error: u }) : { data: u };
  };
}, Ps = (e) => (t) => async (r) => (Xe(r) && console.log(r), console.log(e), t(r)), he = Bi({
  reducerPath: "api",
  tagTypes: Object.values(Q),
  baseQuery: Yi("/book-eat/api"),
  endpoints: () => ({})
}), Is = he.injectEndpoints({
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
}), Hi = he.injectEndpoints({
  endpoints: (e) => ({
    getCashiers: e.query({
      providesTags: [Q.Cashiers],
      query: () => "/v1/users/organization",
      transformResponse: (t) => ct.setAll(ct.getInitialState(), t)
    }),
    createCashier: e.mutation(
      {
        invalidatesTags: [Q.Cashiers],
        query: (t) => ({
          url: "/v1/users/place",
          method: "POST",
          body: t
        })
      }
    ),
    deleteCashiers: e.mutation({
      invalidatesTags: [Q.Cashiers],
      query: (t) => ({
        url: "/v1/auth/cashier",
        method: "DELETE",
        body: t
      })
    })
  })
}), Gi = {
  "@@functional/placeholder": !0
};
function W(e) {
  return e === Gi;
}
function se(e) {
  return function t(r) {
    return arguments.length === 0 || W(r) ? t : e.apply(this, arguments);
  };
}
function ge(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return W(r) ? t : se(function(o) {
          return e(r, o);
        });
      default:
        return W(r) && W(n) ? t : W(r) ? se(function(o) {
          return e(o, n);
        }) : W(n) ? se(function(o) {
          return e(r, o);
        }) : e(r, n);
    }
  };
}
function _n(e, t) {
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
      return function(r, n, o, u, d) {
        return t.apply(this, arguments);
      };
    case 6:
      return function(r, n, o, u, d, v) {
        return t.apply(this, arguments);
      };
    case 7:
      return function(r, n, o, u, d, v, O) {
        return t.apply(this, arguments);
      };
    case 8:
      return function(r, n, o, u, d, v, O, E) {
        return t.apply(this, arguments);
      };
    case 9:
      return function(r, n, o, u, d, v, O, E, S) {
        return t.apply(this, arguments);
      };
    case 10:
      return function(r, n, o, u, d, v, O, E, S, g) {
        return t.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
function bn(e) {
  return function t(r, n, o) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return W(r) ? t : ge(function(u, d) {
          return e(r, u, d);
        });
      case 2:
        return W(r) && W(n) ? t : W(r) ? ge(function(u, d) {
          return e(u, n, d);
        }) : W(n) ? ge(function(u, d) {
          return e(r, u, d);
        }) : se(function(u) {
          return e(r, n, u);
        });
      default:
        return W(r) && W(n) && W(o) ? t : W(r) && W(n) ? ge(function(u, d) {
          return e(u, d, o);
        }) : W(r) && W(o) ? ge(function(u, d) {
          return e(u, n, d);
        }) : W(n) && W(o) ? ge(function(u, d) {
          return e(r, u, d);
        }) : W(r) ? se(function(u) {
          return e(u, n, o);
        }) : W(n) ? se(function(u) {
          return e(r, u, o);
        }) : W(o) ? se(function(u) {
          return e(r, n, u);
        }) : e(r, n, o);
    }
  };
}
const On = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function Ji(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
var Xi = /* @__PURE__ */ se(function(t) {
  return On(t) ? !0 : !t || typeof t != "object" || Ji(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
});
const Zi = Xi;
var Wr = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function es(e, t, r) {
  return function(o, u, d) {
    if (Zi(d))
      return e(o, u, d);
    if (d == null)
      return u;
    if (typeof d["fantasy-land/reduce"] == "function")
      return t(o, u, d, "fantasy-land/reduce");
    if (d[Wr] != null)
      return r(o, u, d[Wr]());
    if (typeof d.next == "function")
      return r(o, u, d);
    if (typeof d.reduce == "function")
      return t(o, u, d, "reduce");
    throw new TypeError("reduce: list must be array or iterable");
  };
}
function ts(e, t, r) {
  for (var n = 0, o = r.length; n < o; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
var rs = /* @__PURE__ */ ge(function(t, r) {
  return _n(t.length, function() {
    return t.apply(r, arguments);
  });
});
const ns = rs;
function os(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function is(e, t, r, n) {
  return e["@@transducer/result"](r[n](ns(e["@@transducer/step"], e), t));
}
var ss = /* @__PURE__ */ es(ts, is, os);
const cs = ss;
var us = /* @__PURE__ */ function() {
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
function as(e) {
  return new us(e);
}
var ls = /* @__PURE__ */ bn(function(e, t, r) {
  return cs(typeof e == "function" ? as(e) : e, t, r);
});
const fs = ls;
function ds(e, t) {
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
    return On(n) || typeof n[e] != "function" ? t.apply(this, arguments) : n[e].apply(n, Array.prototype.slice.call(arguments, 0, r - 1));
  };
}
var ps = /* @__PURE__ */ bn(/* @__PURE__ */ wn("slice", function(t, r, n) {
  return Array.prototype.slice.call(n, t, r);
}));
const ys = ps;
var hs = /* @__PURE__ */ se(/* @__PURE__ */ wn("tail", /* @__PURE__ */ ys(1, 1 / 0)));
const ms = hs;
function ue() {
  if (arguments.length === 0)
    throw new Error("pipe requires at least one argument");
  return _n(arguments[0].length, fs(ds, arguments[0], ms(arguments)));
}
const gs = Hi.endpoints.getCashiers.select(), Ds = ct.getSelectors(
  ue(gs, (e) => e.data ?? ct.getInitialState())
), ut = we({
  selectId: (e) => e.id,
  sortComparer: (e, t) => Number(e.id) - Number(t.id)
}), vs = he.injectEndpoints({
  endpoints: (e) => ({
    getOrders: e.query({
      providesTags: [Q.Orders],
      query: () => ({
        url: "/v1/orders"
      }),
      transformResponse: (t) => ut.setAll(ut.getInitialState(), t)
    }),
    updateOrderStatus: e.mutation({
      query: ({ id: t, statusVal: r }) => ({
        params: { status: r },
        url: `/v1/orders/${t}/status`,
        method: "PUT"
      }),
      invalidatesTags: [Q.Orders]
    })
  })
}), Ss = vs.endpoints.getOrders.select(), $s = ut.getSelectors(
  ue(Ss, (e) => e.data ?? ut.getInitialState())
), re = we({
  selectId: (e) => e.id
}), Rn = he.injectEndpoints({
  endpoints: (e) => ({
    getOrganisation: e.query({
      query: (t) => ({
        url: `v1/organizations/${t}`
      }),
      transformResponse: (t) => re.setOne(
        re.getInitialState(),
        t
      ),
      providesTags: [Q.Organizations]
    }),
    getCurrentOrganisation: e.query({
      query: () => ({
        url: "v1/organizations/current"
      }),
      transformResponse: (t) => re.setOne(
        re.getInitialState(),
        t
      ),
      providesTags: [Q.Organizations]
    }),
    getOrganisations: e.query({
      query: () => ({
        url: "/v1/organizations"
      }),
      transformResponse: (t) => re.setMany(
        re.getInitialState(),
        t
      ),
      providesTags: [Q.Organizations]
    }),
    updateOrg: e.mutation({
      query: (t) => ({
        url: `/v1/organizations/${t.id}`,
        method: "PUT",
        body: t,
        formData: !0
      }),
      transformResponse: (t) => re.updateOne(
        re.getInitialState(),
        t
      ),
      invalidatesTags: [Q.Organizations]
    })
  })
}), Es = Rn.endpoints.getOrganisations.select(), ks = re.getSelectors(
  ue(
    Rn.endpoints.getCurrentOrganisation.select(),
    (e) => e.data ?? re.getInitialState()
  )
), js = re.getSelectors(
  ue(
    Es,
    (e) => e.data ?? re.getInitialState()
  )
), de = we({
  selectId: (e) => e.id
}), Tn = he.injectEndpoints({
  endpoints: (e) => ({
    fetchPlaces: e.query({
      query: () => ({
        url: "/v1/places"
      }),
      providesTags: [Q.Places],
      transformResponse: (t) => de.setAll(de.getInitialState(), t)
    }),
    fetchPlacesByOrganization: e.query({
      query: () => ({
        url: "/v1/places/organization"
      }),
      providesTags: [Q.Places],
      transformResponse: (t) => de.setAll(de.getInitialState(), t)
    }),
    savePlace: e.mutation({
      query: (t) => ({
        url: "/v1/places",
        method: "POST",
        body: t
      }),
      invalidatesTags: [Q.Places]
    }),
    editPlace: e.mutation({
      query: (t) => ({
        url: `/v1/places/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [Q.Places]
    }),
    deletePlace: e.mutation({
      query: (t) => ({
        url: `/v1/places/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [Q.Places]
    })
  })
}), _s = Tn.endpoints.fetchPlaces.select(), xs = de.getSelectors(
  ue(
    Tn.endpoints.fetchPlacesByOrganization.select(),
    (e) => e.data ?? de.getInitialState()
  )
), qs = de.getSelectors(
  ue(_s, (e) => e.data ?? de.getInitialState())
), le = we({
  selectId: (e) => e.id
}), bs = he.injectEndpoints({
  endpoints: (e) => ({
    getMenuByPlaceId: e.query({
      query: (t) => `/v1/products/place/${t}`,
      transformResponse: (t) => le.setMany(le.getInitialState(), t),
      providesTags: [Q.Menu]
    }),
    getMenuByPlaces: e.query({
      query: () => "/v1/products/place",
      transformResponse: (t) => le.setAll(le.getInitialState(), t),
      providesTags: [Q.Menu]
    }),
    getMenuByOrganization: e.query({
      query: () => "/v1/products/organization",
      transformResponse: (t) => le.setAll(le.getInitialState(), t),
      providesTags: [Q.Menu]
    }),
    saveMenu: e.mutation({
      query: (t) => ({
        url: "/v1/products",
        method: "POST",
        body: t
      }),
      invalidatesTags: [Q.Menu]
    }),
    editMenu: e.mutation({
      query: (t) => ({
        url: `/v1/products/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [Q.Menu]
    }),
    deleteMenu: e.mutation({
      query: (t) => ({
        url: `/menu/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [Q.Menu]
    })
  })
}), Os = bs.endpoints.getMenuByOrganization.select(), zs = le.getSelectors(
  ue(Os, (e) => e.data ?? le.getInitialState())
), at = we({
  selectId: (e) => e.id
}), ws = he.injectEndpoints({
  endpoints: (e) => ({
    fetchAdditions: e.query({
      query: () => "/v1/additions/organization?activeOnly=false",
      providesTags: [Q.Additions],
      transformResponse: (t) => at.setAll(at.getInitialState(), t)
    }),
    saveAddition: e.mutation({
      query: (t) => ({
        url: "/v1/additions",
        method: "POST",
        body: t
      }),
      invalidatesTags: [Q.Additions]
    }),
    editAddition: e.mutation({
      query: (t) => ({
        url: `/v1/additions/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [Q.Additions]
    }),
    deleteAddition: e.mutation({
      query: (t) => ({
        url: `/v1/additions/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [Q.Additions]
    })
  })
}), Rs = ws.endpoints.fetchAdditions.select(), Vs = at.getSelectors(
  ue(Rs, (e) => e.data ?? at.getInitialState())
), lt = we({
  selectId: (e) => e.id
}), Ts = he.injectEndpoints({
  endpoints: (e) => ({
    fetchCategories: e.query({
      query: () => ({
        url: "/v1/categories/organization?activeOnly=false"
      }),
      transformResponse: (t) => lt.setAll(lt.getInitialState(), t),
      providesTags: [Q.Categories]
    }),
    updateCategory: e.mutation({
      query: (t) => ({
        url: `/v1/categories/${t.id}`,
        method: "PUT",
        body: t
      }),
      invalidatesTags: [Q.Categories]
    }),
    createCategory: e.mutation({
      query: (t) => ({
        url: "/v1/categories",
        method: "POST",
        body: { ...t, description: "test" }
      }),
      invalidatesTags: [Q.Categories]
    }),
    deleteCategory: e.mutation({
      query: (t) => ({
        url: `/v1/categories/${t}`,
        method: "DELETE"
      }),
      invalidatesTags: [Q.Categories]
    })
  })
}), Cs = Ts.endpoints.fetchCategories.select(), Fs = lt.getSelectors(
  ue(
    Cs,
    (e) => e.data ?? lt.getInitialState()
  )
);
export {
  In as DayOfWeek,
  ws as additionsEndpoints,
  Vs as additionsSelectors,
  he as api,
  Hi as cashiersEndpoints,
  Ds as cashiersSelectors,
  Ts as categoriesEndpoints,
  Fs as categoriesSelectors,
  ks as currentOrganizationSelector,
  Is as loginApi,
  bs as menuEndpoints,
  zs as menuSelectors,
  vs as ordersEndpoints,
  $s as ordersSelectors,
  Rn as organizationsEndpoints,
  js as organizationsSelectors,
  xs as placesByOrganizationSelectors,
  Tn as placesEndpoints,
  qs as placesSelectors,
  Ps as rtkQueryErrorLogger
};
