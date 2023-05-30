(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes) l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Lh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var yf = { exports: {} },
  $i = {},
  vf = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var So = Symbol.for('react.element'),
  Dh = Symbol.for('react.portal'),
  zh = Symbol.for('react.fragment'),
  Mh = Symbol.for('react.strict_mode'),
  Ah = Symbol.for('react.profiler'),
  Fh = Symbol.for('react.provider'),
  jh = Symbol.for('react.context'),
  Uh = Symbol.for('react.forward_ref'),
  Ih = Symbol.for('react.suspense'),
  Bh = Symbol.for('react.memo'),
  $h = Symbol.for('react.lazy'),
  xa = Symbol.iterator;
function Hh(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (xa && e[xa]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var gf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  wf = Object.assign,
  Sf = {};
function hr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Sf), (this.updater = n || gf);
}
hr.prototype.isReactComponent = {};
hr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
hr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ef() {}
Ef.prototype = hr.prototype;
function ps(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Sf), (this.updater = n || gf);
}
var hs = (ps.prototype = new Ef());
hs.constructor = ps;
wf(hs, hr.prototype);
hs.isPureReactComponent = !0;
var Ca = Array.isArray,
  _f = Object.prototype.hasOwnProperty,
  ms = { current: null },
  kf = { key: !0, ref: !0, __self: !0, __source: !0 };
function xf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      _f.call(t, r) && !kf.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: So, type: e, key: i, ref: l, props: o, _owner: ms.current };
}
function Wh(e, t) {
  return { $$typeof: So, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ys(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === So;
}
function Vh(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ra = /\/+/g;
function Rl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Vh('' + e.key) : t.toString(36);
}
function Xo(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case So:
          case Dh:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + Rl(l, 0) : r),
      Ca(o)
        ? ((n = ''),
          e != null && (n = e.replace(Ra, '$&/') + '/'),
          Xo(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (ys(o) &&
            (o = Wh(o, n + (!o.key || (l && l.key === o.key) ? '' : ('' + o.key).replace(Ra, '$&/') + '/') + e)),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Ca(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Rl(i, u);
      l += Xo(i, t, n, s, o);
    }
  else if (((s = Hh(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; ) (i = i.value), (s = r + Rl(i, u++)), (l += Xo(i, t, n, s, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return l;
}
function zo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Xo(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Qh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = { current: null },
  Go = { transition: null },
  Kh = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: Go, ReactCurrentOwner: ms };
Q.Children = {
  map: zo,
  forEach: function (e, t, n) {
    zo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      zo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ys(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
Q.Component = hr;
Q.Fragment = zh;
Q.Profiler = Ah;
Q.PureComponent = ps;
Q.StrictMode = Mh;
Q.Suspense = Ih;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kh;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = wf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = ms.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t) _f.call(t, s) && !kf.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: So, type: e.type, key: o, ref: i, props: r, _owner: l };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: jh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Fh, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = xf;
Q.createFactory = function (e) {
  var t = xf.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: Uh, render: e };
};
Q.isValidElement = ys;
Q.lazy = function (e) {
  return { $$typeof: $h, _payload: { _status: -1, _result: e }, _init: Qh };
};
Q.memo = function (e, t) {
  return { $$typeof: Bh, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Go.transition;
  Go.transition = {};
  try {
    e();
  } finally {
    Go.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
Q.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Le.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
Q.useId = function () {
  return Le.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Le.current.useRef(e);
};
Q.useState = function (e) {
  return Le.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Le.current.useTransition();
};
Q.version = '18.2.0';
vf.exports = Q;
var P = vf.exports;
const Jh = Lh(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qh = P,
  Yh = Symbol.for('react.element'),
  Xh = Symbol.for('react.fragment'),
  Gh = Object.prototype.hasOwnProperty,
  Zh = qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Gh.call(t, r) && !bh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Yh, type: e, key: i, ref: l, props: o, _owner: Zh.current };
}
$i.Fragment = Xh;
$i.jsx = Cf;
$i.jsxs = Cf;
yf.exports = $i;
var K = yf.exports,
  lu = {},
  Rf = { exports: {} },
  Qe = {},
  Pf = { exports: {} },
  Nf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, U) {
    var $ = O.length;
    O.push(U);
    e: for (; 0 < $; ) {
      var W = ($ - 1) >>> 1,
        ne = O[W];
      if (0 < o(ne, U)) (O[W] = U), (O[$] = ne), ($ = W);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var U = O[0],
      $ = O.pop();
    if ($ !== U) {
      O[0] = $;
      e: for (var W = 0, ne = O.length, fn = ne >>> 1; W < fn; ) {
        var xt = 2 * (W + 1) - 1,
          qe = O[xt],
          Ct = xt + 1,
          Ln = O[Ct];
        if (0 > o(qe, $))
          Ct < ne && 0 > o(Ln, qe) ? ((O[W] = Ln), (O[Ct] = $), (W = Ct)) : ((O[W] = qe), (O[xt] = $), (W = xt));
        else if (Ct < ne && 0 > o(Ln, $)) (O[W] = Ln), (O[Ct] = $), (W = Ct);
        else break e;
      }
    }
    return U;
  }
  function o(O, U) {
    var $ = O.sortIndex - U.sortIndex;
    return $ !== 0 ? $ : O.id - U.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      u = l.now();
    e.unstable_now = function () {
      return l.now() - u;
    };
  }
  var s = [],
    a = [],
    f = 1,
    p = null,
    m = 3,
    w = !1,
    y = !1,
    v = !1,
    R = typeof setTimeout == 'function' ? setTimeout : null,
    c = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(O) {
    for (var U = n(a); U !== null; ) {
      if (U.callback === null) r(a);
      else if (U.startTime <= O) r(a), (U.sortIndex = U.expirationTime), t(s, U);
      else break;
      U = n(a);
    }
  }
  function g(O) {
    if (((v = !1), h(O), !y))
      if (n(s) !== null) (y = !0), Je(C);
      else {
        var U = n(a);
        U !== null && cn(g, U.startTime - O);
      }
  }
  function C(O, U) {
    (y = !1), v && ((v = !1), c(z), (z = -1)), (w = !0);
    var $ = m;
    try {
      for (h(U), p = n(s); p !== null && (!(p.expirationTime > U) || (O && !Ne())); ) {
        var W = p.callback;
        if (typeof W == 'function') {
          (p.callback = null), (m = p.priorityLevel);
          var ne = W(p.expirationTime <= U);
          (U = e.unstable_now()), typeof ne == 'function' ? (p.callback = ne) : p === n(s) && r(s), h(U);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var fn = !0;
      else {
        var xt = n(a);
        xt !== null && cn(g, xt.startTime - U), (fn = !1);
      }
      return fn;
    } finally {
      (p = null), (m = $), (w = !1);
    }
  }
  var N = !1,
    T = null,
    z = -1,
    I = 5,
    H = -1;
  function Ne() {
    return !(e.unstable_now() - H < I);
  }
  function ot() {
    if (T !== null) {
      var O = e.unstable_now();
      H = O;
      var U = !0;
      try {
        U = T(!0, O);
      } finally {
        U ? it() : ((N = !1), (T = null));
      }
    } else N = !1;
  }
  var it;
  if (typeof d == 'function')
    it = function () {
      d(ot);
    };
  else if (typeof MessageChannel < 'u') {
    var _t = new MessageChannel(),
      kt = _t.port2;
    (_t.port1.onmessage = ot),
      (it = function () {
        kt.postMessage(null);
      });
  } else
    it = function () {
      R(ot, 0);
    };
  function Je(O) {
    (T = O), N || ((N = !0), it());
  }
  function cn(O, U) {
    z = R(function () {
      O(e.unstable_now());
    }, U);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), Je(C));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (I = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (O) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = m;
      }
      var $ = m;
      m = U;
      try {
        return O();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, U) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var $ = m;
      m = O;
      try {
        return U();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (O, U, $) {
      var W = e.unstable_now();
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? W + $ : W))
          : ($ = W),
        O)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = $ + ne),
        (O = { id: f++, callback: U, priorityLevel: O, startTime: $, expirationTime: ne, sortIndex: -1 }),
        $ > W
          ? ((O.sortIndex = $), t(a, O), n(s) === null && O === n(a) && (v ? (c(z), (z = -1)) : (v = !0), cn(g, $ - W)))
          : ((O.sortIndex = ne), t(s, O), y || w || ((y = !0), Je(C))),
        O
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (O) {
      var U = m;
      return function () {
        var $ = m;
        m = U;
        try {
          return O.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(Nf);
Pf.exports = Nf;
var em = Pf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tf = P,
  He = em;
function x(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Of = new Set(),
  Yr = {};
function Tn(e, t) {
  rr(e, t), rr(e + 'Capture', t);
}
function rr(e, t) {
  for (Yr[e] = t, e = 0; e < t.length; e++) Of.add(t[e]);
}
var Mt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  uu = Object.prototype.hasOwnProperty,
  tm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Pa = {},
  Na = {};
function nm(e) {
  return uu.call(Na, e) ? !0 : uu.call(Pa, e) ? !1 : tm.test(e) ? (Na[e] = !0) : ((Pa[e] = !0), !1);
}
function rm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function om(e, t, n, r) {
  if (t === null || typeof t > 'u' || rm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var _e = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    _e[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  _e[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  _e[e] = new De(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    _e[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  _e[e] = new De(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  _e[e] = new De(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  _e[e] = new De(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  _e[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vs = /[\-:]([a-z])/g;
function gs(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(vs, gs);
    _e[t] = new De(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(vs, gs);
  _e[t] = new De(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(vs, gs);
  _e[t] = new De(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  _e[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new De('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  _e[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ws(e, t, n, r) {
  var o = _e.hasOwnProperty(t) ? _e[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (om(t, n, o, r) && (n = null),
    r || o === null
      ? nm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Mo = Symbol.for('react.element'),
  Fn = Symbol.for('react.portal'),
  jn = Symbol.for('react.fragment'),
  Ss = Symbol.for('react.strict_mode'),
  su = Symbol.for('react.profiler'),
  Lf = Symbol.for('react.provider'),
  Df = Symbol.for('react.context'),
  Es = Symbol.for('react.forward_ref'),
  au = Symbol.for('react.suspense'),
  cu = Symbol.for('react.suspense_list'),
  _s = Symbol.for('react.memo'),
  Wt = Symbol.for('react.lazy'),
  zf = Symbol.for('react.offscreen'),
  Ta = Symbol.iterator;
function xr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ta && e[Ta]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var ue = Object.assign,
  Pl;
function Ar(e) {
  if (Pl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Pl = (t && t[1]) || '';
    }
  return (
    `
` +
    Pl +
    e
  );
}
var Nl = !1;
function Tl(e, t) {
  if (!e || Nl) return '';
  Nl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          u = i.length - 1;
        1 <= l && 0 <= u && o[l] !== i[u];

      )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (o[l] !== i[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || o[l] !== i[u])) {
                var s =
                  `
` + o[l].replace(' at new ', ' at ');
                return e.displayName && s.includes('<anonymous>') && (s = s.replace('<anonymous>', e.displayName)), s;
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    (Nl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ar(e) : '';
}
function im(e) {
  switch (e.tag) {
    case 5:
      return Ar(e.type);
    case 16:
      return Ar('Lazy');
    case 13:
      return Ar('Suspense');
    case 19:
      return Ar('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Tl(e.type, !1)), e;
    case 11:
      return (e = Tl(e.type.render, !1)), e;
    case 1:
      return (e = Tl(e.type, !0)), e;
    default:
      return '';
  }
}
function fu(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case jn:
      return 'Fragment';
    case Fn:
      return 'Portal';
    case su:
      return 'Profiler';
    case Ss:
      return 'StrictMode';
    case au:
      return 'Suspense';
    case cu:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Df:
        return (e.displayName || 'Context') + '.Consumer';
      case Lf:
        return (e._context.displayName || 'Context') + '.Provider';
      case Es:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case _s:
        return (t = e.displayName || null), t !== null ? t : fu(e.type) || 'Memo';
      case Wt:
        (t = e._payload), (e = e._init);
        try {
          return fu(e(t));
        } catch {}
    }
  return null;
}
function lm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return fu(t);
    case 8:
      return t === Ss ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function rn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Mf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function um(e) {
  var t = Mf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = '' + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ao(e) {
  e._valueTracker || (e._valueTracker = um(e));
}
function Af(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = Mf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function pi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function du(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Oa(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Ff(e, t) {
  (t = t.checked), t != null && ws(e, 'checked', t, !1);
}
function pu(e, t) {
  Ff(e, t);
  var n = rn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? hu(e, t.type, n) : t.hasOwnProperty('defaultValue') && hu(e, t.type, rn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function La(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function hu(e, t, n) {
  (t !== 'number' || pi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Fr = Array.isArray;
function Xn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function mu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return ue({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Da(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Fr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: rn(n) };
}
function jf(e, t) {
  var n = rn(t.value),
    r = rn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function za(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Uf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function yu(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Uf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Fo,
  If = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        Fo = Fo || document.createElement('div'),
          Fo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Fo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ir = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  sm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ir).forEach(function (e) {
  sm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ir[t] = Ir[e]);
  });
});
function Bf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ir.hasOwnProperty(e) && Ir[e])
    ? ('' + t).trim()
    : t + 'px';
}
function $f(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Bf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var am = ue(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function vu(e, t) {
  if (t) {
    if (am[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(x(62));
  }
}
function gu(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var wu = null;
function ks(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Su = null,
  Gn = null,
  Zn = null;
function Ma(e) {
  if ((e = ko(e))) {
    if (typeof Su != 'function') throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Ki(t)), Su(e.stateNode, e.type, t));
  }
}
function Hf(e) {
  Gn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Gn = e);
}
function Wf() {
  if (Gn) {
    var e = Gn,
      t = Zn;
    if (((Zn = Gn = null), Ma(e), t)) for (e = 0; e < t.length; e++) Ma(t[e]);
  }
}
function Vf(e, t) {
  return e(t);
}
function Qf() {}
var Ol = !1;
function Kf(e, t, n) {
  if (Ol) return e(t, n);
  Ol = !0;
  try {
    return Vf(e, t, n);
  } finally {
    (Ol = !1), (Gn !== null || Zn !== null) && (Qf(), Wf());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ki(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(x(231, t, typeof n));
  return n;
}
var Eu = !1;
if (Mt)
  try {
    var Cr = {};
    Object.defineProperty(Cr, 'passive', {
      get: function () {
        Eu = !0;
      },
    }),
      window.addEventListener('test', Cr, Cr),
      window.removeEventListener('test', Cr, Cr);
  } catch {
    Eu = !1;
  }
function cm(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
}
var Br = !1,
  hi = null,
  mi = !1,
  _u = null,
  fm = {
    onError: function (e) {
      (Br = !0), (hi = e);
    },
  };
function dm(e, t, n, r, o, i, l, u, s) {
  (Br = !1), (hi = null), cm.apply(fm, arguments);
}
function pm(e, t, n, r, o, i, l, u, s) {
  if ((dm.apply(this, arguments), Br)) {
    if (Br) {
      var a = hi;
      (Br = !1), (hi = null);
    } else throw Error(x(198));
    mi || ((mi = !0), (_u = a));
  }
}
function On(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Jf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Aa(e) {
  if (On(e) !== e) throw Error(x(188));
}
function hm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = On(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Aa(o), e;
        if (i === r) return Aa(o), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (u === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (u === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function qf(e) {
  return (e = hm(e)), e !== null ? Yf(e) : null;
}
function Yf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xf = He.unstable_scheduleCallback,
  Fa = He.unstable_cancelCallback,
  mm = He.unstable_shouldYield,
  ym = He.unstable_requestPaint,
  ae = He.unstable_now,
  vm = He.unstable_getCurrentPriorityLevel,
  xs = He.unstable_ImmediatePriority,
  Gf = He.unstable_UserBlockingPriority,
  yi = He.unstable_NormalPriority,
  gm = He.unstable_LowPriority,
  Zf = He.unstable_IdlePriority,
  Hi = null,
  wt = null;
function wm(e) {
  if (wt && typeof wt.onCommitFiberRoot == 'function')
    try {
      wt.onCommitFiberRoot(Hi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : _m,
  Sm = Math.log,
  Em = Math.LN2;
function _m(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sm(e) / Em) | 0)) | 0;
}
var jo = 64,
  Uo = 4194304;
function jr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function vi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? (r = jr(u)) : ((i &= l), i !== 0 && (r = jr(i)));
  } else (l = n & ~o), l !== 0 ? (r = jr(l)) : i !== 0 && (r = jr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function km(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - dt(i),
      u = 1 << l,
      s = o[l];
    s === -1 ? (!(u & n) || u & r) && (o[l] = km(u, t)) : s <= t && (e.expiredLanes |= u), (i &= ~u);
  }
}
function ku(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function bf() {
  var e = jo;
  return (jo <<= 1), !(jo & 4194240) && (jo = 64), e;
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Eo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dt(t)),
    (e[t] = n);
}
function Cm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - dt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Cs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var G = 0;
function ed(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var td,
  Rs,
  nd,
  rd,
  od,
  xu = !1,
  Io = [],
  Yt = null,
  Xt = null,
  Gt = null,
  Zr = new Map(),
  br = new Map(),
  Qt = [],
  Rm =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function ja(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Yt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Xt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Gt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Zr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      br.delete(t.pointerId);
  }
}
function Rr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = ko(t)), t !== null && Rs(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Pm(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Yt = Rr(Yt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Xt = Rr(Xt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Gt = Rr(Gt, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Zr.set(i, Rr(Zr.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), br.set(i, Rr(br.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function id(e) {
  var t = mn(e.target);
  if (t !== null) {
    var n = On(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Jf(n)), t !== null)) {
          (e.blockedOn = t),
            od(e.priority, function () {
              nd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Zo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Cu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (wu = r), n.target.dispatchEvent(r), (wu = null);
    } else return (t = ko(n)), t !== null && Rs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ua(e, t, n) {
  Zo(e) && n.delete(t);
}
function Nm() {
  (xu = !1),
    Yt !== null && Zo(Yt) && (Yt = null),
    Xt !== null && Zo(Xt) && (Xt = null),
    Gt !== null && Zo(Gt) && (Gt = null),
    Zr.forEach(Ua),
    br.forEach(Ua);
}
function Pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), xu || ((xu = !0), He.unstable_scheduleCallback(He.unstable_NormalPriority, Nm)));
}
function eo(e) {
  function t(o) {
    return Pr(o, e);
  }
  if (0 < Io.length) {
    Pr(Io[0], e);
    for (var n = 1; n < Io.length; n++) {
      var r = Io[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yt !== null && Pr(Yt, e), Xt !== null && Pr(Xt, e), Gt !== null && Pr(Gt, e), Zr.forEach(t), br.forEach(t), n = 0;
    n < Qt.length;
    n++
  )
    (r = Qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); ) id(n), n.blockedOn === null && Qt.shift();
}
var bn = Ut.ReactCurrentBatchConfig,
  gi = !0;
function Tm(e, t, n, r) {
  var o = G,
    i = bn.transition;
  bn.transition = null;
  try {
    (G = 1), Ps(e, t, n, r);
  } finally {
    (G = o), (bn.transition = i);
  }
}
function Om(e, t, n, r) {
  var o = G,
    i = bn.transition;
  bn.transition = null;
  try {
    (G = 4), Ps(e, t, n, r);
  } finally {
    (G = o), (bn.transition = i);
  }
}
function Ps(e, t, n, r) {
  if (gi) {
    var o = Cu(e, t, n, r);
    if (o === null) $l(e, t, r, wi, n), ja(e, r);
    else if (Pm(o, e, t, n, r)) r.stopPropagation();
    else if ((ja(e, r), t & 4 && -1 < Rm.indexOf(e))) {
      for (; o !== null; ) {
        var i = ko(o);
        if ((i !== null && td(i), (i = Cu(e, t, n, r)), i === null && $l(e, t, r, wi, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else $l(e, t, r, null, n);
  }
}
var wi = null;
function Cu(e, t, n, r) {
  if (((wi = null), (e = ks(r)), (e = mn(e)), e !== null))
    if (((t = On(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Jf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (wi = e), null;
}
function ld(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (vm()) {
        case xs:
          return 1;
        case Gf:
          return 4;
        case yi:
        case gm:
          return 16;
        case Zf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null,
  Ns = null,
  bo = null;
function ud() {
  if (bo) return bo;
  var e,
    t = Ns,
    n = t.length,
    r,
    o = 'value' in Jt ? Jt.value : Jt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (bo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ei(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bo() {
  return !0;
}
function Ia() {
  return !1;
}
function Ke(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Bo : Ia),
      (this.isPropagationStopped = Ia),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Bo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bo));
      },
      persist: function () {},
      isPersistent: Bo,
    }),
    t
  );
}
var mr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ts = Ke(mr),
  _o = ue({}, mr, { view: 0, detail: 0 }),
  Lm = Ke(_o),
  Dl,
  zl,
  Nr,
  Wi = ue({}, _o, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Os,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Nr &&
            (Nr && e.type === 'mousemove'
              ? ((Dl = e.screenX - Nr.screenX), (zl = e.screenY - Nr.screenY))
              : (zl = Dl = 0),
            (Nr = e)),
          Dl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : zl;
    },
  }),
  Ba = Ke(Wi),
  Dm = ue({}, Wi, { dataTransfer: 0 }),
  zm = Ke(Dm),
  Mm = ue({}, _o, { relatedTarget: 0 }),
  Ml = Ke(Mm),
  Am = ue({}, mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fm = Ke(Am),
  jm = ue({}, mr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Um = Ke(jm),
  Im = ue({}, mr, { data: 0 }),
  $a = Ke(Im),
  Bm = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  $m = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Hm = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Wm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hm[e]) ? !!t[e] : !1;
}
function Os() {
  return Wm;
}
var Vm = ue({}, _o, {
    key: function (e) {
      if (e.key) {
        var t = Bm[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ei(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? $m[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Os,
    charCode: function (e) {
      return e.type === 'keypress' ? ei(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? ei(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  Qm = Ke(Vm),
  Km = ue({}, Wi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ha = Ke(Km),
  Jm = ue({}, _o, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Os,
  }),
  qm = Ke(Jm),
  Ym = ue({}, mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xm = Ke(Ym),
  Gm = ue({}, Wi, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zm = Ke(Gm),
  bm = [9, 13, 27, 32],
  Ls = Mt && 'CompositionEvent' in window,
  $r = null;
Mt && 'documentMode' in document && ($r = document.documentMode);
var ey = Mt && 'TextEvent' in window && !$r,
  sd = Mt && (!Ls || ($r && 8 < $r && 11 >= $r)),
  Wa = String.fromCharCode(32),
  Va = !1;
function ad(e, t) {
  switch (e) {
    case 'keyup':
      return bm.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function cd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Un = !1;
function ty(e, t) {
  switch (e) {
    case 'compositionend':
      return cd(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Va = !0), Wa);
    case 'textInput':
      return (e = t.data), e === Wa && Va ? null : e;
    default:
      return null;
  }
}
function ny(e, t) {
  if (Un) return e === 'compositionend' || (!Ls && ad(e, t)) ? ((e = ud()), (bo = Ns = Jt = null), (Un = !1), e) : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return sd && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var ry = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Qa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!ry[e.type] : t === 'textarea';
}
function fd(e, t, n, r) {
  Hf(r),
    (t = Si(t, 'onChange')),
    0 < t.length && ((n = new Ts('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Hr = null,
  to = null;
function oy(e) {
  _d(e, 0);
}
function Vi(e) {
  var t = $n(e);
  if (Af(t)) return e;
}
function iy(e, t) {
  if (e === 'change') return t;
}
var dd = !1;
if (Mt) {
  var Al;
  if (Mt) {
    var Fl = 'oninput' in document;
    if (!Fl) {
      var Ka = document.createElement('div');
      Ka.setAttribute('oninput', 'return;'), (Fl = typeof Ka.oninput == 'function');
    }
    Al = Fl;
  } else Al = !1;
  dd = Al && (!document.documentMode || 9 < document.documentMode);
}
function Ja() {
  Hr && (Hr.detachEvent('onpropertychange', pd), (to = Hr = null));
}
function pd(e) {
  if (e.propertyName === 'value' && Vi(to)) {
    var t = [];
    fd(t, to, e, ks(e)), Kf(oy, t);
  }
}
function ly(e, t, n) {
  e === 'focusin' ? (Ja(), (Hr = t), (to = n), Hr.attachEvent('onpropertychange', pd)) : e === 'focusout' && Ja();
}
function uy(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Vi(to);
}
function sy(e, t) {
  if (e === 'click') return Vi(t);
}
function ay(e, t) {
  if (e === 'input' || e === 'change') return Vi(t);
}
function cy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == 'function' ? Object.is : cy;
function no(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!uu.call(t, o) || !ht(e[o], t[o])) return !1;
  }
  return !0;
}
function qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ya(e, t) {
  var n = qa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = qa(n);
  }
}
function hd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? hd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function md() {
  for (var e = window, t = pi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = pi(e.document);
  }
  return t;
}
function Ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function fy(e) {
  var t = md(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && hd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ds(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ya(n, i));
        var l = Ya(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var dy = Mt && 'documentMode' in document && 11 >= document.documentMode,
  In = null,
  Ru = null,
  Wr = null,
  Pu = !1;
function Xa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Pu ||
    In == null ||
    In !== pi(r) ||
    ((r = In),
    'selectionStart' in r && Ds(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Wr && no(Wr, r)) ||
      ((Wr = r),
      (r = Si(Ru, 'onSelect')),
      0 < r.length &&
        ((t = new Ts('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = In))));
}
function $o(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var Bn = {
    animationend: $o('Animation', 'AnimationEnd'),
    animationiteration: $o('Animation', 'AnimationIteration'),
    animationstart: $o('Animation', 'AnimationStart'),
    transitionend: $o('Transition', 'TransitionEnd'),
  },
  jl = {},
  yd = {};
Mt &&
  ((yd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Bn.animationend.animation, delete Bn.animationiteration.animation, delete Bn.animationstart.animation),
  'TransitionEvent' in window || delete Bn.transitionend.transition);
function Qi(e) {
  if (jl[e]) return jl[e];
  if (!Bn[e]) return e;
  var t = Bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in yd) return (jl[e] = t[n]);
  return e;
}
var vd = Qi('animationend'),
  gd = Qi('animationiteration'),
  wd = Qi('animationstart'),
  Sd = Qi('transitionend'),
  Ed = new Map(),
  Ga =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function ln(e, t) {
  Ed.set(e, t), Tn(t, [e]);
}
for (var Ul = 0; Ul < Ga.length; Ul++) {
  var Il = Ga[Ul],
    py = Il.toLowerCase(),
    hy = Il[0].toUpperCase() + Il.slice(1);
  ln(py, 'on' + hy);
}
ln(vd, 'onAnimationEnd');
ln(gd, 'onAnimationIteration');
ln(wd, 'onAnimationStart');
ln('dblclick', 'onDoubleClick');
ln('focusin', 'onFocus');
ln('focusout', 'onBlur');
ln(Sd, 'onTransitionEnd');
rr('onMouseEnter', ['mouseout', 'mouseover']);
rr('onMouseLeave', ['mouseout', 'mouseover']);
rr('onPointerEnter', ['pointerout', 'pointerover']);
rr('onPointerLeave', ['pointerout', 'pointerover']);
Tn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Tn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
Tn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Tn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Tn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Tn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Ur =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  my = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ur));
function Za(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), pm(r, t, void 0, e), (e.currentTarget = null);
}
function _d(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && o.isPropagationStopped())) break e;
          Za(o, u, a), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]), (s = u.instance), (a = u.currentTarget), (u = u.listener), s !== i && o.isPropagationStopped())
          )
            break e;
          Za(o, u, a), (i = s);
        }
    }
  }
  if (mi) throw ((e = _u), (mi = !1), (_u = null), e);
}
function ee(e, t) {
  var n = t[Du];
  n === void 0 && (n = t[Du] = new Set());
  var r = e + '__bubble';
  n.has(r) || (kd(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), kd(n, e, r, t);
}
var Ho = '_reactListening' + Math.random().toString(36).slice(2);
function ro(e) {
  if (!e[Ho]) {
    (e[Ho] = !0),
      Of.forEach(function (n) {
        n !== 'selectionchange' && (my.has(n) || Bl(n, !1, e), Bl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ho] || ((t[Ho] = !0), Bl('selectionchange', !1, t));
  }
}
function kd(e, t, n, r) {
  switch (ld(t)) {
    case 1:
      var o = Tm;
      break;
    case 4:
      o = Om;
      break;
    default:
      o = Ps;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Eu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function $l(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo), s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; u !== null; ) {
          if (((l = mn(u)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Kf(function () {
    var a = i,
      f = ks(n),
      p = [];
    e: {
      var m = Ed.get(e);
      if (m !== void 0) {
        var w = Ts,
          y = e;
        switch (e) {
          case 'keypress':
            if (ei(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = Qm;
            break;
          case 'focusin':
            (y = 'focus'), (w = Ml);
            break;
          case 'focusout':
            (y = 'blur'), (w = Ml);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = Ml;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = Ba;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = zm;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = qm;
            break;
          case vd:
          case gd:
          case wd:
            w = Fm;
            break;
          case Sd:
            w = Xm;
            break;
          case 'scroll':
            w = Lm;
            break;
          case 'wheel':
            w = Zm;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = Um;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = Ha;
        }
        var v = (t & 4) !== 0,
          R = !v && e === 'scroll',
          c = v ? (m !== null ? m + 'Capture' : null) : m;
        v = [];
        for (var d = a, h; d !== null; ) {
          h = d;
          var g = h.stateNode;
          if (
            (h.tag === 5 && g !== null && ((h = g), c !== null && ((g = Gr(d, c)), g != null && v.push(oo(d, g, h)))),
            R)
          )
            break;
          d = d.return;
        }
        0 < v.length && ((m = new w(m, y, null, n, f)), p.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          m && n !== wu && (y = n.relatedTarget || n.fromElement) && (mn(y) || y[At]))
        )
          break e;
        if (
          (w || m) &&
          ((m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window),
          w
            ? ((y = n.relatedTarget || n.toElement),
              (w = a),
              (y = y ? mn(y) : null),
              y !== null && ((R = On(y)), y !== R || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((w = null), (y = a)),
          w !== y)
        ) {
          if (
            ((v = Ba),
            (g = 'onMouseLeave'),
            (c = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = Ha), (g = 'onPointerLeave'), (c = 'onPointerEnter'), (d = 'pointer')),
            (R = w == null ? m : $n(w)),
            (h = y == null ? m : $n(y)),
            (m = new v(g, d + 'leave', w, n, f)),
            (m.target = R),
            (m.relatedTarget = h),
            (g = null),
            mn(f) === a && ((v = new v(c, d + 'enter', y, n, f)), (v.target = h), (v.relatedTarget = R), (g = v)),
            (R = g),
            w && y)
          )
            t: {
              for (v = w, c = y, d = 0, h = v; h; h = Mn(h)) d++;
              for (h = 0, g = c; g; g = Mn(g)) h++;
              for (; 0 < d - h; ) (v = Mn(v)), d--;
              for (; 0 < h - d; ) (c = Mn(c)), h--;
              for (; d--; ) {
                if (v === c || (c !== null && v === c.alternate)) break t;
                (v = Mn(v)), (c = Mn(c));
              }
              v = null;
            }
          else v = null;
          w !== null && ba(p, m, w, v, !1), y !== null && R !== null && ba(p, R, y, v, !0);
        }
      }
      e: {
        if (
          ((m = a ? $n(a) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && m.type === 'file'))
        )
          var C = iy;
        else if (Qa(m))
          if (dd) C = ay;
          else {
            C = uy;
            var N = ly;
          }
        else
          (w = m.nodeName) && w.toLowerCase() === 'input' && (m.type === 'checkbox' || m.type === 'radio') && (C = sy);
        if (C && (C = C(e, a))) {
          fd(p, C, n, f);
          break e;
        }
        N && N(e, m, a),
          e === 'focusout' && (N = m._wrapperState) && N.controlled && m.type === 'number' && hu(m, 'number', m.value);
      }
      switch (((N = a ? $n(a) : window), e)) {
        case 'focusin':
          (Qa(N) || N.contentEditable === 'true') && ((In = N), (Ru = a), (Wr = null));
          break;
        case 'focusout':
          Wr = Ru = In = null;
          break;
        case 'mousedown':
          Pu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Pu = !1), Xa(p, n, f);
          break;
        case 'selectionchange':
          if (dy) break;
        case 'keydown':
        case 'keyup':
          Xa(p, n, f);
      }
      var T;
      if (Ls)
        e: {
          switch (e) {
            case 'compositionstart':
              var z = 'onCompositionStart';
              break e;
            case 'compositionend':
              z = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              z = 'onCompositionUpdate';
              break e;
          }
          z = void 0;
        }
      else
        Un ? ad(e, n) && (z = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (z = 'onCompositionStart');
      z &&
        (sd &&
          n.locale !== 'ko' &&
          (Un || z !== 'onCompositionStart'
            ? z === 'onCompositionEnd' && Un && (T = ud())
            : ((Jt = f), (Ns = 'value' in Jt ? Jt.value : Jt.textContent), (Un = !0))),
        (N = Si(a, z)),
        0 < N.length &&
          ((z = new $a(z, e, null, n, f)),
          p.push({ event: z, listeners: N }),
          T ? (z.data = T) : ((T = cd(n)), T !== null && (z.data = T)))),
        (T = ey ? ty(e, n) : ny(e, n)) &&
          ((a = Si(a, 'onBeforeInput')),
          0 < a.length &&
            ((f = new $a('onBeforeInput', 'beforeinput', null, n, f)),
            p.push({ event: f, listeners: a }),
            (f.data = T)));
    }
    _d(p, t);
  });
}
function oo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Si(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = Gr(e, n)), i != null && r.unshift(oo(e, i, o)), (i = Gr(e, t)), i != null && r.push(oo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ba(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = Gr(n, i)), s != null && l.unshift(oo(n, s, u)))
        : o || ((s = Gr(n, i)), s != null && l.push(oo(n, s, u)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var yy = /\r\n?/g,
  vy = /\u0000|\uFFFD/g;
function ec(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      yy,
      `
`,
    )
    .replace(vy, '');
}
function Wo(e, t, n) {
  if (((t = ec(t)), ec(e) !== t && n)) throw Error(x(425));
}
function Ei() {}
var Nu = null,
  Tu = null;
function Ou(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Lu = typeof setTimeout == 'function' ? setTimeout : void 0,
  gy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  tc = typeof Promise == 'function' ? Promise : void 0,
  wy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof tc < 'u'
      ? function (e) {
          return tc.resolve(null).then(e).catch(Sy);
        }
      : Lu;
function Sy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Hl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), eo(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  eo(t);
}
function Zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function nc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yr = Math.random().toString(36).slice(2),
  vt = '__reactFiber$' + yr,
  io = '__reactProps$' + yr,
  At = '__reactContainer$' + yr,
  Du = '__reactEvents$' + yr,
  Ey = '__reactListeners$' + yr,
  _y = '__reactHandles$' + yr;
function mn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[At] || n[vt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = nc(e); e !== null; ) {
          if ((n = e[vt])) return n;
          e = nc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ko(e) {
  return (e = e[vt] || e[At]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Ki(e) {
  return e[io] || null;
}
var zu = [],
  Hn = -1;
function un(e) {
  return { current: e };
}
function te(e) {
  0 > Hn || ((e.current = zu[Hn]), (zu[Hn] = null), Hn--);
}
function b(e, t) {
  Hn++, (zu[Hn] = e.current), (e.current = t);
}
var on = {},
  Pe = un(on),
  Ae = un(!1),
  En = on;
function or(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Fe(e) {
  return (e = e.childContextTypes), e != null;
}
function _i() {
  te(Ae), te(Pe);
}
function rc(e, t, n) {
  if (Pe.current !== on) throw Error(x(168));
  b(Pe, t), b(Ae, n);
}
function xd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(x(108, lm(e) || 'Unknown', o));
  return ue({}, n, r);
}
function ki(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || on),
    (En = Pe.current),
    b(Pe, e),
    b(Ae, Ae.current),
    !0
  );
}
function oc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n ? ((e = xd(e, t, En)), (r.__reactInternalMemoizedMergedChildContext = e), te(Ae), te(Pe), b(Pe, e)) : te(Ae),
    b(Ae, n);
}
var Nt = null,
  Ji = !1,
  Wl = !1;
function Cd(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function ky(e) {
  (Ji = !0), Cd(e);
}
function sn() {
  if (!Wl && Nt !== null) {
    Wl = !0;
    var e = 0,
      t = G;
    try {
      var n = Nt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Nt = null), (Ji = !1);
    } catch (o) {
      throw (Nt !== null && (Nt = Nt.slice(e + 1)), Xf(xs, sn), o);
    } finally {
      (G = t), (Wl = !1);
    }
  }
  return null;
}
var Wn = [],
  Vn = 0,
  xi = null,
  Ci = 0,
  Ge = [],
  Ze = 0,
  _n = null,
  Tt = 1,
  Ot = '';
function dn(e, t) {
  (Wn[Vn++] = Ci), (Wn[Vn++] = xi), (xi = e), (Ci = t);
}
function Rd(e, t, n) {
  (Ge[Ze++] = Tt), (Ge[Ze++] = Ot), (Ge[Ze++] = _n), (_n = e);
  var r = Tt;
  e = Ot;
  var o = 32 - dt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - dt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Tt = (1 << (32 - dt(t) + o)) | (n << o) | r),
      (Ot = i + e);
  } else (Tt = (1 << i) | (n << o) | r), (Ot = e);
}
function zs(e) {
  e.return !== null && (dn(e, 1), Rd(e, 1, 0));
}
function Ms(e) {
  for (; e === xi; ) (xi = Wn[--Vn]), (Wn[Vn] = null), (Ci = Wn[--Vn]), (Wn[Vn] = null);
  for (; e === _n; )
    (_n = Ge[--Ze]), (Ge[Ze] = null), (Ot = Ge[--Ze]), (Ge[Ze] = null), (Tt = Ge[--Ze]), (Ge[Ze] = null);
}
var $e = null,
  Be = null,
  re = !1,
  ct = null;
function Pd(e, t) {
  var n = be(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ic(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Be = Zt(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _n !== null ? { id: Tt, overflow: Ot } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($e = e),
            (Be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Au(e) {
  if (re) {
    var t = Be;
    if (t) {
      var n = t;
      if (!ic(e, t)) {
        if (Mu(e)) throw Error(x(418));
        t = Zt(n.nextSibling);
        var r = $e;
        t && ic(e, t) ? Pd(r, n) : ((e.flags = (e.flags & -4097) | 2), (re = !1), ($e = e));
      }
    } else {
      if (Mu(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), ($e = e);
    }
  }
}
function lc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  $e = e;
}
function Vo(e) {
  if (e !== $e) return !1;
  if (!re) return lc(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Ou(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (Mu(e)) throw (Nd(), Error(x(418)));
    for (; t; ) Pd(e, t), (t = Zt(t.nextSibling));
  }
  if ((lc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Be = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = $e ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Nd() {
  for (var e = Be; e; ) e = Zt(e.nextSibling);
}
function ir() {
  (Be = $e = null), (re = !1);
}
function As(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
var xy = Ut.ReactCurrentBatchConfig;
function ut(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ri = un(null),
  Pi = null,
  Qn = null,
  Fs = null;
function js() {
  Fs = Qn = Pi = null;
}
function Us(e) {
  var t = Ri.current;
  te(Ri), (e._currentValue = t);
}
function Fu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function er(e, t) {
  (Pi = e),
    (Fs = Qn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (Fs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qn === null)) {
      if (Pi === null) throw Error(x(308));
      (Qn = e), (Pi.dependencies = { lanes: 0, firstContext: e });
    } else Qn = Qn.next = e;
  return t;
}
var yn = null;
function Is(e) {
  yn === null ? (yn = [e]) : yn.push(e);
}
function Td(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), Is(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function Bs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Od(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Lt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Ft(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Is(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ft(e, n)
  );
}
function ti(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cs(e, n);
  }
}
function uc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Ni(e, t, n, r) {
  var o = e.updateQueue;
  Vt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), l === null ? (i = a) : (l.next = a), (l = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (u = f.lastBaseUpdate),
      u !== l && (u === null ? (f.firstBaseUpdate = a) : (u.next = a), (f.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = o.baseState;
    (l = 0), (f = a = s = null), (u = i);
    do {
      var m = u.lane,
        w = u.eventTime;
      if ((r & m) === m) {
        f !== null &&
          (f = f.next = { eventTime: w, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
        e: {
          var y = e,
            v = u;
          switch (((m = t), (w = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == 'function')) {
                p = y.call(w, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (((y = v.payload), (m = typeof y == 'function' ? y.call(w, p, m) : y), m == null)) break e;
              p = ue({}, p, m);
              break e;
            case 2:
              Vt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64), (m = o.effects), m === null ? (o.effects = [u]) : m.push(u));
      } else
        (w = { eventTime: w, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }),
          f === null ? ((a = f = w), (s = p)) : (f = f.next = w),
          (l |= m);
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (m = u), (u = m.next), (m.next = null), (o.lastBaseUpdate = m), (o.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (s = p),
      (o.baseState = s),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (xn |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function sc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(x(191, o));
        o.call(r);
      }
    }
}
var Ld = new Tf.Component().refs;
function ju(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var qi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? On(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      o = tn(e),
      i = Lt(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = bt(e, i, o)), t !== null && (pt(t, e, o, r), ti(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      o = tn(e),
      i = Lt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = bt(e, i, o)),
      t !== null && (pt(t, e, o, r), ti(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Oe(),
      r = tn(e),
      o = Lt(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = bt(e, o, r)), t !== null && (pt(t, e, r, n), ti(t, e, r));
  },
};
function ac(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !no(n, r) || !no(o, i)
      : !0
  );
}
function Dd(e, t, n) {
  var r = !1,
    o = on,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = nt(i))
      : ((o = Fe(t) ? En : Pe.current), (r = t.contextTypes), (i = (r = r != null) ? or(e, o) : on)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = qi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function cc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qi.enqueueReplaceState(t, t.state, null);
}
function Uu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Ld), Bs(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null ? (o.context = nt(i)) : ((i = Fe(t) ? En : Pe.current), (o.context = or(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (ju(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && qi.enqueueReplaceState(o, o.state, null),
      Ni(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Tr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var o = r,
        i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var u = o.refs;
            u === Ld && (u = o.refs = {}), l === null ? delete u[i] : (u[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Qo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(x(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function fc(e) {
  var t = e._init;
  return t(e._payload);
}
function zd(e) {
  function t(c, d) {
    if (e) {
      var h = c.deletions;
      h === null ? ((c.deletions = [d]), (c.flags |= 16)) : h.push(d);
    }
  }
  function n(c, d) {
    if (!e) return null;
    for (; d !== null; ) t(c, d), (d = d.sibling);
    return null;
  }
  function r(c, d) {
    for (c = new Map(); d !== null; ) d.key !== null ? c.set(d.key, d) : c.set(d.index, d), (d = d.sibling);
    return c;
  }
  function o(c, d) {
    return (c = nn(c, d)), (c.index = 0), (c.sibling = null), c;
  }
  function i(c, d, h) {
    return (
      (c.index = h),
      e
        ? ((h = c.alternate), h !== null ? ((h = h.index), h < d ? ((c.flags |= 2), d) : h) : ((c.flags |= 2), d))
        : ((c.flags |= 1048576), d)
    );
  }
  function l(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, d, h, g) {
    return d === null || d.tag !== 6 ? ((d = Xl(h, c.mode, g)), (d.return = c), d) : ((d = o(d, h)), (d.return = c), d);
  }
  function s(c, d, h, g) {
    var C = h.type;
    return C === jn
      ? f(c, d, h.props.children, g, h.key)
      : d !== null &&
        (d.elementType === C || (typeof C == 'object' && C !== null && C.$$typeof === Wt && fc(C) === d.type))
      ? ((g = o(d, h.props)), (g.ref = Tr(c, d, h)), (g.return = c), g)
      : ((g = ui(h.type, h.key, h.props, null, c.mode, g)), (g.ref = Tr(c, d, h)), (g.return = c), g);
  }
  function a(c, d, h, g) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Gl(h, c.mode, g)), (d.return = c), d)
      : ((d = o(d, h.children || [])), (d.return = c), d);
  }
  function f(c, d, h, g, C) {
    return d === null || d.tag !== 7
      ? ((d = Sn(h, c.mode, g, C)), (d.return = c), d)
      : ((d = o(d, h)), (d.return = c), d);
  }
  function p(c, d, h) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = Xl('' + d, c.mode, h)), (d.return = c), d;
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case Mo:
          return (h = ui(d.type, d.key, d.props, null, c.mode, h)), (h.ref = Tr(c, null, d)), (h.return = c), h;
        case Fn:
          return (d = Gl(d, c.mode, h)), (d.return = c), d;
        case Wt:
          var g = d._init;
          return p(c, g(d._payload), h);
      }
      if (Fr(d) || xr(d)) return (d = Sn(d, c.mode, h, null)), (d.return = c), d;
      Qo(c, d);
    }
    return null;
  }
  function m(c, d, h, g) {
    var C = d !== null ? d.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number') return C !== null ? null : u(c, d, '' + h, g);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Mo:
          return h.key === C ? s(c, d, h, g) : null;
        case Fn:
          return h.key === C ? a(c, d, h, g) : null;
        case Wt:
          return (C = h._init), m(c, d, C(h._payload), g);
      }
      if (Fr(h) || xr(h)) return C !== null ? null : f(c, d, h, g, null);
      Qo(c, h);
    }
    return null;
  }
  function w(c, d, h, g, C) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number') return (c = c.get(h) || null), u(d, c, '' + g, C);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Mo:
          return (c = c.get(g.key === null ? h : g.key) || null), s(d, c, g, C);
        case Fn:
          return (c = c.get(g.key === null ? h : g.key) || null), a(d, c, g, C);
        case Wt:
          var N = g._init;
          return w(c, d, h, N(g._payload), C);
      }
      if (Fr(g) || xr(g)) return (c = c.get(h) || null), f(d, c, g, C, null);
      Qo(d, g);
    }
    return null;
  }
  function y(c, d, h, g) {
    for (var C = null, N = null, T = d, z = (d = 0), I = null; T !== null && z < h.length; z++) {
      T.index > z ? ((I = T), (T = null)) : (I = T.sibling);
      var H = m(c, T, h[z], g);
      if (H === null) {
        T === null && (T = I);
        break;
      }
      e && T && H.alternate === null && t(c, T),
        (d = i(H, d, z)),
        N === null ? (C = H) : (N.sibling = H),
        (N = H),
        (T = I);
    }
    if (z === h.length) return n(c, T), re && dn(c, z), C;
    if (T === null) {
      for (; z < h.length; z++)
        (T = p(c, h[z], g)), T !== null && ((d = i(T, d, z)), N === null ? (C = T) : (N.sibling = T), (N = T));
      return re && dn(c, z), C;
    }
    for (T = r(c, T); z < h.length; z++)
      (I = w(T, c, z, h[z], g)),
        I !== null &&
          (e && I.alternate !== null && T.delete(I.key === null ? z : I.key),
          (d = i(I, d, z)),
          N === null ? (C = I) : (N.sibling = I),
          (N = I));
    return (
      e &&
        T.forEach(function (Ne) {
          return t(c, Ne);
        }),
      re && dn(c, z),
      C
    );
  }
  function v(c, d, h, g) {
    var C = xr(h);
    if (typeof C != 'function') throw Error(x(150));
    if (((h = C.call(h)), h == null)) throw Error(x(151));
    for (var N = (C = null), T = d, z = (d = 0), I = null, H = h.next(); T !== null && !H.done; z++, H = h.next()) {
      T.index > z ? ((I = T), (T = null)) : (I = T.sibling);
      var Ne = m(c, T, H.value, g);
      if (Ne === null) {
        T === null && (T = I);
        break;
      }
      e && T && Ne.alternate === null && t(c, T),
        (d = i(Ne, d, z)),
        N === null ? (C = Ne) : (N.sibling = Ne),
        (N = Ne),
        (T = I);
    }
    if (H.done) return n(c, T), re && dn(c, z), C;
    if (T === null) {
      for (; !H.done; z++, H = h.next())
        (H = p(c, H.value, g)), H !== null && ((d = i(H, d, z)), N === null ? (C = H) : (N.sibling = H), (N = H));
      return re && dn(c, z), C;
    }
    for (T = r(c, T); !H.done; z++, H = h.next())
      (H = w(T, c, z, H.value, g)),
        H !== null &&
          (e && H.alternate !== null && T.delete(H.key === null ? z : H.key),
          (d = i(H, d, z)),
          N === null ? (C = H) : (N.sibling = H),
          (N = H));
    return (
      e &&
        T.forEach(function (ot) {
          return t(c, ot);
        }),
      re && dn(c, z),
      C
    );
  }
  function R(c, d, h, g) {
    if (
      (typeof h == 'object' && h !== null && h.type === jn && h.key === null && (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case Mo:
          e: {
            for (var C = h.key, N = d; N !== null; ) {
              if (N.key === C) {
                if (((C = h.type), C === jn)) {
                  if (N.tag === 7) {
                    n(c, N.sibling), (d = o(N, h.props.children)), (d.return = c), (c = d);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == 'object' && C !== null && C.$$typeof === Wt && fc(C) === N.type)
                ) {
                  n(c, N.sibling), (d = o(N, h.props)), (d.ref = Tr(c, N, h)), (d.return = c), (c = d);
                  break e;
                }
                n(c, N);
                break;
              } else t(c, N);
              N = N.sibling;
            }
            h.type === jn
              ? ((d = Sn(h.props.children, c.mode, g, h.key)), (d.return = c), (c = d))
              : ((g = ui(h.type, h.key, h.props, null, c.mode, g)), (g.ref = Tr(c, d, h)), (g.return = c), (c = g));
          }
          return l(c);
        case Fn:
          e: {
            for (N = h.key; d !== null; ) {
              if (d.key === N)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(c, d.sibling), (d = o(d, h.children || [])), (d.return = c), (c = d);
                  break e;
                } else {
                  n(c, d);
                  break;
                }
              else t(c, d);
              d = d.sibling;
            }
            (d = Gl(h, c.mode, g)), (d.return = c), (c = d);
          }
          return l(c);
        case Wt:
          return (N = h._init), R(c, d, N(h._payload), g);
      }
      if (Fr(h)) return y(c, d, h, g);
      if (xr(h)) return v(c, d, h, g);
      Qo(c, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        d !== null && d.tag === 6
          ? (n(c, d.sibling), (d = o(d, h)), (d.return = c), (c = d))
          : (n(c, d), (d = Xl(h, c.mode, g)), (d.return = c), (c = d)),
        l(c))
      : n(c, d);
  }
  return R;
}
var lr = zd(!0),
  Md = zd(!1),
  xo = {},
  St = un(xo),
  lo = un(xo),
  uo = un(xo);
function vn(e) {
  if (e === xo) throw Error(x(174));
  return e;
}
function $s(e, t) {
  switch ((b(uo, t), b(lo, e), b(St, xo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yu(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = yu(t, e));
  }
  te(St), b(St, t);
}
function ur() {
  te(St), te(lo), te(uo);
}
function Ad(e) {
  vn(uo.current);
  var t = vn(St.current),
    n = yu(t, e.type);
  t !== n && (b(lo, e), b(St, n));
}
function Hs(e) {
  lo.current === e && (te(St), te(lo));
}
var ie = un(0);
function Ti(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Vl = [];
function Ws() {
  for (var e = 0; e < Vl.length; e++) Vl[e]._workInProgressVersionPrimary = null;
  Vl.length = 0;
}
var ni = Ut.ReactCurrentDispatcher,
  Ql = Ut.ReactCurrentBatchConfig,
  kn = 0,
  le = null,
  pe = null,
  ge = null,
  Oi = !1,
  Vr = !1,
  so = 0,
  Cy = 0;
function xe() {
  throw Error(x(321));
}
function Vs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ht(e[n], t[n])) return !1;
  return !0;
}
function Qs(e, t, n, r, o, i) {
  if (
    ((kn = i),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ni.current = e === null || e.memoizedState === null ? Ty : Oy),
    (e = n(r, o)),
    Vr)
  ) {
    i = 0;
    do {
      if (((Vr = !1), (so = 0), 25 <= i)) throw Error(x(301));
      (i += 1), (ge = pe = null), (t.updateQueue = null), (ni.current = Ly), (e = n(r, o));
    } while (Vr);
  }
  if (((ni.current = Li), (t = pe !== null && pe.next !== null), (kn = 0), (ge = pe = le = null), (Oi = !1), t))
    throw Error(x(300));
  return e;
}
function Ks() {
  var e = so !== 0;
  return (so = 0), e;
}
function yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ge === null ? (le.memoizedState = ge = e) : (ge = ge.next = e), ge;
}
function rt() {
  if (pe === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = ge === null ? le.memoizedState : ge.next;
  if (t !== null) (ge = t), (pe = e);
  else {
    if (e === null) throw Error(x(310));
    (pe = e),
      (e = {
        memoizedState: pe.memoizedState,
        baseState: pe.baseState,
        baseQueue: pe.baseQueue,
        queue: pe.queue,
        next: null,
      }),
      ge === null ? (le.memoizedState = ge = e) : (ge = ge.next = e);
  }
  return ge;
}
function ao(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Kl(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = pe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var u = (l = null),
      s = null,
      a = i;
    do {
      var f = a.lane;
      if ((kn & f) === f)
        s !== null &&
          (s = s.next =
            { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = { lane: f, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null };
        s === null ? ((u = s = p), (l = r)) : (s = s.next = p), (le.lanes |= f), (xn |= f);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (l = r) : (s.next = u),
      ht(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (le.lanes |= i), (xn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Jl(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    ht(i, t.memoizedState) || (Me = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Fd() {}
function jd(e, t) {
  var n = le,
    r = rt(),
    o = t(),
    i = !ht(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Me = !0)),
    (r = r.queue),
    Js(Bd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ge !== null && ge.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), co(9, Id.bind(null, n, r, o, t), void 0, null), we === null)) throw Error(x(349));
    kn & 30 || Ud(n, t, o);
  }
  return o;
}
function Ud(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Id(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), $d(t) && Hd(e);
}
function Bd(e, t, n) {
  return n(function () {
    $d(t) && Hd(e);
  });
}
function $d(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function Hd(e) {
  var t = Ft(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function dc(e) {
  var t = yt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ao, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = Ny.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function co(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wd() {
  return rt().memoizedState;
}
function ri(e, t, n, r) {
  var o = yt();
  (le.flags |= e), (o.memoizedState = co(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yi(e, t, n, r) {
  var o = rt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (pe !== null) {
    var l = pe.memoizedState;
    if (((i = l.destroy), r !== null && Vs(r, l.deps))) {
      o.memoizedState = co(t, n, i, r);
      return;
    }
  }
  (le.flags |= e), (o.memoizedState = co(1 | t, n, i, r));
}
function pc(e, t) {
  return ri(8390656, 8, e, t);
}
function Js(e, t) {
  return Yi(2048, 8, e, t);
}
function Vd(e, t) {
  return Yi(4, 2, e, t);
}
function Qd(e, t) {
  return Yi(4, 4, e, t);
}
function Kd(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Jd(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Yi(4, 4, Kd.bind(null, t, e), n);
}
function qs() {}
function qd(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vs(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Yd(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vs(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xd(e, t, n) {
  return kn & 21
    ? (ht(n, t) || ((n = bf()), (le.lanes |= n), (xn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function Ry(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ql.transition;
  Ql.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (Ql.transition = r);
  }
}
function Gd() {
  return rt().memoizedState;
}
function Py(e, t, n) {
  var r = tn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Zd(e))) bd(t, n);
  else if (((n = Td(e, t, n, r)), n !== null)) {
    var o = Oe();
    pt(n, e, r, o), ep(n, t, r);
  }
}
function Ny(e, t, n) {
  var r = tn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zd(e)) bd(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var l = t.lastRenderedState,
          u = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = u), ht(u, l))) {
          var s = t.interleaved;
          s === null ? ((o.next = o), Is(t)) : ((o.next = s.next), (s.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Td(e, t, o, r)), n !== null && ((o = Oe()), pt(n, e, r, o), ep(n, t, r));
  }
}
function Zd(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function bd(e, t) {
  Vr = Oi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function ep(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cs(e, n);
  }
}
var Li = {
    readContext: nt,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useInsertionEffect: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useSyncExternalStore: xe,
    useId: xe,
    unstable_isNewReconciler: !1,
  },
  Ty = {
    readContext: nt,
    useCallback: function (e, t) {
      return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: pc,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), ri(4194308, 4, Kd.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return ri(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ri(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = yt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = yt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Py.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: dc,
    useDebugValue: qs,
    useDeferredValue: function (e) {
      return (yt().memoizedState = e);
    },
    useTransition: function () {
      var e = dc(!1),
        t = e[0];
      return (e = Ry.bind(null, e[1])), (yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        o = yt();
      if (re) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(x(349));
        kn & 30 || Ud(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        pc(Bd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        co(9, Id.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = yt(),
        t = we.identifierPrefix;
      if (re) {
        var n = Ot,
          r = Tt;
        (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = so++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Cy++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Oy = {
    readContext: nt,
    useCallback: qd,
    useContext: nt,
    useEffect: Js,
    useImperativeHandle: Jd,
    useInsertionEffect: Vd,
    useLayoutEffect: Qd,
    useMemo: Yd,
    useReducer: Kl,
    useRef: Wd,
    useState: function () {
      return Kl(ao);
    },
    useDebugValue: qs,
    useDeferredValue: function (e) {
      var t = rt();
      return Xd(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Kl(ao)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Fd,
    useSyncExternalStore: jd,
    useId: Gd,
    unstable_isNewReconciler: !1,
  },
  Ly = {
    readContext: nt,
    useCallback: qd,
    useContext: nt,
    useEffect: Js,
    useImperativeHandle: Jd,
    useInsertionEffect: Vd,
    useLayoutEffect: Qd,
    useMemo: Yd,
    useReducer: Jl,
    useRef: Wd,
    useState: function () {
      return Jl(ao);
    },
    useDebugValue: qs,
    useDeferredValue: function (e) {
      var t = rt();
      return pe === null ? (t.memoizedState = e) : Xd(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Jl(ao)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Fd,
    useSyncExternalStore: jd,
    useId: Gd,
    unstable_isNewReconciler: !1,
  };
function sr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += im(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Iu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Dy = typeof WeakMap == 'function' ? WeakMap : Map;
function tp(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      zi || ((zi = !0), (Yu = r)), Iu(e, t);
    }),
    n
  );
}
function np(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Iu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Iu(e, t), typeof r != 'function' && (en === null ? (en = new Set([this])) : en.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' });
      }),
    n
  );
}
function hc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Dy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Ky.bind(null, e, t, n)), t.then(e, e));
}
function mc(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Lt(-1, 1)), (t.tag = 2), bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var zy = Ut.ReactCurrentOwner,
  Me = !1;
function Te(e, t, n, r) {
  t.child = e === null ? Md(t, null, n, r) : lr(t, e.child, n, r);
}
function vc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    er(t, o),
    (r = Qs(e, t, n, r, i, o)),
    (n = Ks()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), jt(e, t, o))
      : (re && n && zs(t), (t.flags |= 1), Te(e, t, r, o), t.child)
  );
}
function gc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !na(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), rp(e, t, i, r, o))
      : ((e = ui(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : no), n(l, r) && e.ref === t.ref)) return jt(e, t, o);
  }
  return (t.flags |= 1), (e = nn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function rp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (no(i, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), jt(e, t, o);
  }
  return Bu(e, t, n, r, o);
}
function op(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), b(Jn, Ie), (Ie |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          b(Jn, Ie),
          (Ie |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        b(Jn, Ie),
        (Ie |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), b(Jn, Ie), (Ie |= r);
  return Te(e, t, o, n), t.child;
}
function ip(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Bu(e, t, n, r, o) {
  var i = Fe(n) ? En : Pe.current;
  return (
    (i = or(t, i)),
    er(t, o),
    (n = Qs(e, t, n, r, i, o)),
    (r = Ks()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), jt(e, t, o))
      : (re && r && zs(t), (t.flags |= 1), Te(e, t, n, o), t.child)
  );
}
function wc(e, t, n, r, o) {
  if (Fe(n)) {
    var i = !0;
    ki(t);
  } else i = !1;
  if ((er(t, o), t.stateNode === null)) oi(e, t), Dd(t, n, r), Uu(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var s = l.context,
      a = n.contextType;
    typeof a == 'object' && a !== null ? (a = nt(a)) : ((a = Fe(n) ? En : Pe.current), (a = or(t, a)));
    var f = n.getDerivedStateFromProps,
      p = typeof f == 'function' || typeof l.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && cc(t, l, r, a)),
      (Vt = !1);
    var m = t.memoizedState;
    (l.state = m),
      Ni(t, r, l, o),
      (s = t.memoizedState),
      u !== r || m !== s || Ae.current || Vt
        ? (typeof f == 'function' && (ju(t, n, f, r), (s = t.memoizedState)),
          (u = Vt || ac(t, n, u, r, m, s, a))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != 'function' && typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = a),
          (r = u))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (l = t.stateNode),
      Od(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : ut(t.type, u)),
      (l.props = a),
      (p = t.pendingProps),
      (m = l.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null ? (s = nt(s)) : ((s = Fe(n) ? En : Pe.current), (s = or(t, s)));
    var w = n.getDerivedStateFromProps;
    (f = typeof w == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((u !== p || m !== s) && cc(t, l, r, s)),
      (Vt = !1),
      (m = t.memoizedState),
      (l.state = m),
      Ni(t, r, l, o);
    var y = t.memoizedState;
    u !== p || m !== y || Ae.current || Vt
      ? (typeof w == 'function' && (ju(t, n, w, r), (y = t.memoizedState)),
        (a = Vt || ac(t, n, a, r, m, y, s) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' && typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' && l.componentWillUpdate(r, y, s),
              typeof l.UNSAFE_componentWillUpdate == 'function' && l.UNSAFE_componentWillUpdate(r, y, s)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = s),
        (r = a))
      : (typeof l.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $u(e, t, n, r, i, o);
}
function $u(e, t, n, r, o, i) {
  ip(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && oc(t, n, !1), jt(e, t, i);
  (r = t.stateNode), (zy.current = t);
  var u = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l ? ((t.child = lr(t, e.child, null, i)), (t.child = lr(t, null, u, i))) : Te(e, t, u, i),
    (t.memoizedState = r.state),
    o && oc(t, n, !0),
    t.child
  );
}
function lp(e) {
  var t = e.stateNode;
  t.pendingContext ? rc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rc(e, t.context, !1),
    $s(e, t.containerInfo);
}
function Sc(e, t, n, r, o) {
  return ir(), As(o), (t.flags |= 256), Te(e, t, n, r), t.child;
}
var Hu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function up(e, t, n) {
  var r = t.pendingProps,
    o = ie.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    u;
  if (
    ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    b(ie, o & 1),
    e === null)
  )
    return (
      Au(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = l)) : (i = Zi(l, r, 0, null)),
              (e = Sn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Wu(n)),
              (t.memoizedState = Hu),
              e)
            : Ys(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null))) return My(e, t, l, r, u, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (u = o.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
        : ((r = nn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = nn(u, i)) : ((i = Sn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l = l === null ? Wu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Hu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = nn(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ys(e, t) {
  return (t = Zi({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ko(e, t, n, r) {
  return (
    r !== null && As(r),
    lr(t, e.child, null, n),
    (e = Ys(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function My(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ql(Error(x(422)))), Ko(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Zi({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Sn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && lr(t, e.child, null, l),
        (t.child.memoizedState = Wu(l)),
        (t.memoizedState = Hu),
        i);
  if (!(t.mode & 1)) return Ko(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(x(419))), (r = ql(i, r, void 0)), Ko(e, t, l, r);
  }
  if (((u = (l & e.childLanes) !== 0), Me || u)) {
    if (((r = we), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), Ft(e, o), pt(r, e, o, -1));
    }
    return ta(), (r = ql(Error(x(421)))), Ko(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = Jy.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (Be = Zt(o.nextSibling)),
      ($e = t),
      (re = !0),
      (ct = null),
      e !== null && ((Ge[Ze++] = Tt), (Ge[Ze++] = Ot), (Ge[Ze++] = _n), (Tt = e.id), (Ot = e.overflow), (_n = t)),
      (t = Ys(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ec(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fu(e.return, t, n);
}
function Yl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function sp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Te(e, t, r.children, n), (r = ie.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t);
        else if (e.tag === 19) Ec(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Ti(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          Yl(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ti(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Yl(t, !0, n, null, i);
        break;
      case 'together':
        Yl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function oi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (xn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = nn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ay(e, t, n) {
  switch (t.tag) {
    case 3:
      lp(t), ir();
      break;
    case 5:
      Ad(t);
      break;
    case 1:
      Fe(t.type) && ki(t);
      break;
    case 4:
      $s(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      b(Ri, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? up(e, t, n)
          : (b(ie, ie.current & 1), (e = jt(e, t, n)), e !== null ? e.sibling : null);
      b(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        b(ie, ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), op(e, t, n);
  }
  return jt(e, t, n);
}
var ap, Vu, cp, fp;
ap = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vu = function () {};
cp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), vn(St.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = du(e, o)), (r = du(e, r)), (i = []);
        break;
      case 'select':
        (o = ue({}, o, { value: void 0 })), (r = ue({}, r, { value: void 0 })), (i = []);
        break;
      case 'textarea':
        (o = mu(e, o)), (r = mu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Ei);
    }
    vu(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var u = o[a];
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Yr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (((u = o != null ? o[a] : void 0), r.hasOwnProperty(a) && s !== u && (s != null || u != null)))
        if (a === 'style')
          if (u) {
            for (l in u) !u.hasOwnProperty(l) || (s && s.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ''));
            for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') || (i = i || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Yr.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && ee('scroll', e), i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
fp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Or(e, t) {
  if (!re)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Fy(e, t, n) {
  var r = t.pendingProps;
  switch ((Ms(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ce(t), null;
    case 1:
      return Fe(t.type) && _i(), Ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ur(),
        te(Ae),
        te(Pe),
        Ws(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ct !== null && (Zu(ct), (ct = null)))),
        Vu(e, t),
        Ce(t),
        null
      );
    case 5:
      Hs(t);
      var o = vn(uo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        cp(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return Ce(t), null;
        }
        if (((e = vn(St.current)), Vo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[vt] = t), (r[io] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ee('cancel', r), ee('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ee('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Ur.length; o++) ee(Ur[o], r);
              break;
            case 'source':
              ee('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ee('error', r), ee('load', r);
              break;
            case 'details':
              ee('toggle', r);
              break;
            case 'input':
              Oa(r, i), ee('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }), ee('invalid', r);
              break;
            case 'textarea':
              Da(r, i), ee('invalid', r);
          }
          vu(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 && Wo(r.textContent, u, e), (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 && Wo(r.textContent, u, e), (o = ['children', '' + u]))
                : Yr.hasOwnProperty(l) && u != null && l === 'onScroll' && ee('scroll', r);
            }
          switch (n) {
            case 'input':
              Ao(r), La(r, i, !0);
              break;
            case 'textarea':
              Ao(r), za(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Ei);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Uf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' && ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[vt] = t),
            (e[io] = r),
            ap(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = gu(n, r)), n)) {
              case 'dialog':
                ee('cancel', e), ee('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ee('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Ur.length; o++) ee(Ur[o], e);
                o = r;
                break;
              case 'source':
                ee('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ee('error', e), ee('load', e), (o = r);
                break;
              case 'details':
                ee('toggle', e), (o = r);
                break;
              case 'input':
                Oa(e, r), (o = du(e, r)), ee('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = ue({}, r, { value: void 0 })), ee('invalid', e);
                break;
              case 'textarea':
                Da(e, r), (o = mu(e, r)), ee('invalid', e);
                break;
              default:
                o = r;
            }
            vu(n, o), (u = o);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style'
                  ? $f(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && If(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Xr(e, s)
                    : typeof s == 'number' && Xr(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Yr.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && ee('scroll', e)
                      : s != null && ws(e, i, s, l));
              }
            switch (n) {
              case 'input':
                Ao(e), La(e, r, !1);
                break;
              case 'textarea':
                Ao(e), za(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + rn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Xn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && Xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = Ei);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) fp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(x(166));
        if (((n = vn(uo.current)), vn(St.current), Vo(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[vt] = t), (i = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Wo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[vt] = t), (t.stateNode = r);
      }
      return Ce(t), null;
    case 13:
      if (
        (te(ie), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && Be !== null && t.mode & 1 && !(t.flags & 128)) Nd(), ir(), (t.flags |= 98560), (i = !1);
        else if (((i = Vo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(x(317));
            i[vt] = t;
          } else ir(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ce(t), (i = !1);
        } else ct !== null && (Zu(ct), (ct = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ie.current & 1 ? he === 0 && (he = 3) : ta())),
          t.updateQueue !== null && (t.flags |= 4),
          Ce(t),
          null);
    case 4:
      return ur(), Vu(e, t), e === null && ro(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return Us(t.type._context), Ce(t), null;
    case 17:
      return Fe(t.type) && _i(), Ce(t), null;
    case 19:
      if ((te(ie), (i = t.memoizedState), i === null)) return Ce(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Or(i, !1);
        else {
          if (he !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Ti(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Or(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return b(ie, (ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && ae() > ar && ((t.flags |= 128), (r = !0), Or(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ti(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Or(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !re)
            )
              return Ce(t), null;
          } else
            2 * ae() - i.renderingStartTime > ar &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Or(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last), n !== null ? (n.sibling = l) : (t.child = l), (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ae()),
          (t.sibling = null),
          (n = ie.current),
          b(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ce(t), null);
    case 22:
    case 23:
      return (
        ea(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ie & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function jy(e, t) {
  switch ((Ms(t), t.tag)) {
    case 1:
      return Fe(t.type) && _i(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        ur(), te(Ae), te(Pe), Ws(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Hs(t), null;
    case 13:
      if ((te(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        ir();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return te(ie), null;
    case 4:
      return ur(), null;
    case 10:
      return Us(t.type._context), null;
    case 22:
    case 23:
      return ea(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jo = !1,
  Re = !1,
  Uy = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null;
function Kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function Qu(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var _c = !1;
function Iy(e, t) {
  if (((Nu = gi), (e = md()), Ds(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            u = -1,
            s = -1,
            a = 0,
            f = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              p !== n || (o !== 0 && p.nodeType !== 3) || (u = l + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (w = p.firstChild) !== null;

            )
              (m = p), (p = w);
            for (;;) {
              if (p === e) break t;
              if ((m === n && ++a === o && (u = l), m === i && ++f === r && (s = l), (w = p.nextSibling) !== null))
                break;
              (p = m), (m = p.parentNode);
            }
            p = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Tu = { focusedElem: e, selectionRange: n }, gi = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    R = y.memoizedState,
                    c = t.stateNode,
                    d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ut(t.type, v), R);
                  c.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (g) {
          se(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (y = _c), (_c = !1), y;
}
function Qr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Qu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Xi(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ku(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function dp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), dp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[vt], delete t[io], delete t[Du], delete t[Ey], delete t[_y])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function pp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || pp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ju(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ei));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ju(e, t, n), e = e.sibling; e !== null; ) Ju(e, t, n), (e = e.sibling);
}
function qu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qu(e, t, n), e = e.sibling; e !== null; ) qu(e, t, n), (e = e.sibling);
}
var Se = null,
  at = !1;
function $t(e, t, n) {
  for (n = n.child; n !== null; ) hp(e, t, n), (n = n.sibling);
}
function hp(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == 'function')
    try {
      wt.onCommitFiberUnmount(Hi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || Kn(n, t);
    case 6:
      var r = Se,
        o = at;
      (Se = null),
        $t(e, t, n),
        (Se = r),
        (at = o),
        Se !== null &&
          (at
            ? ((e = Se), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null &&
        (at
          ? ((e = Se), (n = n.stateNode), e.nodeType === 8 ? Hl(e.parentNode, n) : e.nodeType === 1 && Hl(e, n), eo(e))
          : Hl(Se, n.stateNode));
      break;
    case 4:
      (r = Se), (o = at), (Se = n.stateNode.containerInfo), (at = !0), $t(e, t, n), (Se = r), (at = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Re && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag), l !== void 0 && (i & 2 || i & 4) && Qu(n, t, l), (o = o.next);
        } while (o !== r);
      }
      $t(e, t, n);
      break;
    case 1:
      if (!Re && (Kn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (u) {
          se(n, t, u);
        }
      $t(e, t, n);
      break;
    case 21:
      $t(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Re = (r = Re) || n.memoizedState !== null), $t(e, t, n), (Re = r)) : $t(e, t, n);
      break;
    default:
      $t(e, t, n);
  }
}
function xc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Uy()),
      t.forEach(function (r) {
        var o = qy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          u = l;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Se = u.stateNode), (at = !1);
              break e;
            case 3:
              (Se = u.stateNode.containerInfo), (at = !0);
              break e;
            case 4:
              (Se = u.stateNode.containerInfo), (at = !0);
              break e;
          }
          u = u.return;
        }
        if (Se === null) throw Error(x(160));
        hp(i, l, o), (Se = null), (at = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (a) {
        se(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) mp(t, e), (t = t.sibling);
}
function mp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((lt(t, e), mt(e), r & 4)) {
        try {
          Qr(3, e, e.return), Xi(3, e);
        } catch (v) {
          se(e, e.return, v);
        }
        try {
          Qr(5, e, e.return);
        } catch (v) {
          se(e, e.return, v);
        }
      }
      break;
    case 1:
      lt(t, e), mt(e), r & 512 && n !== null && Kn(n, n.return);
      break;
    case 5:
      if ((lt(t, e), mt(e), r & 512 && n !== null && Kn(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          Xr(o, '');
        } catch (v) {
          se(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && Ff(o, i), gu(u, l);
            var a = gu(u, i);
            for (l = 0; l < s.length; l += 2) {
              var f = s[l],
                p = s[l + 1];
              f === 'style'
                ? $f(o, p)
                : f === 'dangerouslySetInnerHTML'
                ? If(o, p)
                : f === 'children'
                ? Xr(o, p)
                : ws(o, f, p, a);
            }
            switch (u) {
              case 'input':
                pu(o, i);
                break;
              case 'textarea':
                jf(o, i);
                break;
              case 'select':
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Xn(o, !!i.multiple, w, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Xn(o, !!i.multiple, i.defaultValue, !0)
                      : Xn(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[io] = i;
          } catch (v) {
            se(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((lt(t, e), mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          se(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((lt(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          eo(t.containerInfo);
        } catch (v) {
          se(e, e.return, v);
        }
      break;
    case 4:
      lt(t, e), mt(e);
      break;
    case 13:
      lt(t, e),
        mt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Zs = ae())),
        r & 4 && xc(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (a = Re) || f), lt(t, e), (Re = a)) : lt(t, e),
        mt(e),
        r & 8192)
      ) {
        if (((a = e.memoizedState !== null), (e.stateNode.isHidden = a) && !f && e.mode & 1))
          for (L = e, f = e.child; f !== null; ) {
            for (p = L = f; L !== null; ) {
              switch (((m = L), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qr(4, m, m.return);
                  break;
                case 1:
                  Kn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = m), (n = m.return);
                    try {
                      (t = r), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount();
                    } catch (v) {
                      se(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Kn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Rc(p);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (L = w)) : Rc(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (o = p.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (l = s != null && s.hasOwnProperty('display') ? s.display : null),
                      (u.style.display = Bf('display', l)));
              } catch (v) {
                se(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = a ? '' : p.memoizedProps;
              } catch (v) {
                se(e, e.return, v);
              }
          } else if (((p.tag !== 22 && p.tag !== 23) || p.memoizedState === null || p === e) && p.child !== null) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      lt(t, e), mt(e), r & 4 && xc(e);
      break;
    case 21:
      break;
    default:
      lt(t, e), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Xr(o, ''), (r.flags &= -33));
          var i = kc(e);
          qu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = kc(e);
          Ju(e, u, l);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      se(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function By(e, t, n) {
  (L = e), yp(e);
}
function yp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Jo;
      if (!l) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || Re;
        u = Jo;
        var a = Re;
        if (((Jo = l), (Re = s) && !a))
          for (L = o; L !== null; )
            (l = L),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null ? Pc(o) : s !== null ? ((s.return = l), (L = s)) : Pc(o);
        for (; i !== null; ) (L = i), yp(i), (i = i.sibling);
        (L = o), (Jo = u), (Re = a);
      }
      Cc(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (L = i)) : Cc(e);
  }
}
function Cc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || Xi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && sc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                sc(t, l, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var f = a.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && eo(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        Re || (t.flags & 512 && Ku(t));
      } catch (m) {
        se(t, t.return, m);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Rc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Pc(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xi(4, t);
          } catch (s) {
            se(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              se(t, o, s);
            }
          }
          var i = t.return;
          try {
            Ku(t);
          } catch (s) {
            se(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ku(t);
          } catch (s) {
            se(t, l, s);
          }
      }
    } catch (s) {
      se(t, t.return, s);
    }
    if (t === e) {
      L = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (L = u);
      break;
    }
    L = t.return;
  }
}
var $y = Math.ceil,
  Di = Ut.ReactCurrentDispatcher,
  Xs = Ut.ReactCurrentOwner,
  et = Ut.ReactCurrentBatchConfig,
  q = 0,
  we = null,
  fe = null,
  Ee = 0,
  Ie = 0,
  Jn = un(0),
  he = 0,
  fo = null,
  xn = 0,
  Gi = 0,
  Gs = 0,
  Kr = null,
  ze = null,
  Zs = 0,
  ar = 1 / 0,
  Rt = null,
  zi = !1,
  Yu = null,
  en = null,
  qo = !1,
  qt = null,
  Mi = 0,
  Jr = 0,
  Xu = null,
  ii = -1,
  li = 0;
function Oe() {
  return q & 6 ? ae() : ii !== -1 ? ii : (ii = ae());
}
function tn(e) {
  return e.mode & 1
    ? q & 2 && Ee !== 0
      ? Ee & -Ee
      : xy.transition !== null
      ? (li === 0 && (li = bf()), li)
      : ((e = G), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ld(e.type))), e)
    : 1;
}
function pt(e, t, n, r) {
  if (50 < Jr) throw ((Jr = 0), (Xu = null), Error(x(185)));
  Eo(e, n, r),
    (!(q & 2) || e !== we) &&
      (e === we && (!(q & 2) && (Gi |= n), he === 4 && Kt(e, Ee)),
      je(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((ar = ae() + 500), Ji && sn()));
}
function je(e, t) {
  var n = e.callbackNode;
  xm(e, t);
  var r = vi(e, e === we ? Ee : 0);
  if (r === 0) n !== null && Fa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fa(n), t === 1))
      e.tag === 0 ? ky(Nc.bind(null, e)) : Cd(Nc.bind(null, e)),
        wy(function () {
          !(q & 6) && sn();
        }),
        (n = null);
    else {
      switch (ed(r)) {
        case 1:
          n = xs;
          break;
        case 4:
          n = Gf;
          break;
        case 16:
          n = yi;
          break;
        case 536870912:
          n = Zf;
          break;
        default:
          n = yi;
      }
      n = xp(n, vp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vp(e, t) {
  if (((ii = -1), (li = 0), q & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (tr() && e.callbackNode !== n) return null;
  var r = vi(e, e === we ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ai(e, r);
  else {
    t = r;
    var o = q;
    q |= 2;
    var i = wp();
    (we !== e || Ee !== t) && ((Rt = null), (ar = ae() + 500), wn(e, t));
    do
      try {
        Vy();
        break;
      } catch (u) {
        gp(e, u);
      }
    while (1);
    js(), (Di.current = i), (q = o), fe !== null ? (t = 0) : ((we = null), (Ee = 0), (t = he));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = ku(e)), o !== 0 && ((r = o), (t = Gu(e, o)))), t === 1))
      throw ((n = fo), wn(e, 0), Kt(e, r), je(e, ae()), n);
    if (t === 6) Kt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Hy(o) &&
          ((t = Ai(e, r)), t === 2 && ((i = ku(e)), i !== 0 && ((r = i), (t = Gu(e, i)))), t === 1))
      )
        throw ((n = fo), wn(e, 0), Kt(e, r), je(e, ae()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          pn(e, ze, Rt);
          break;
        case 3:
          if ((Kt(e, r), (r & 130023424) === r && ((t = Zs + 500 - ae()), 10 < t))) {
            if (vi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Oe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Lu(pn.bind(null, e, ze, Rt), t);
            break;
          }
          pn(e, ze, Rt);
          break;
        case 4:
          if ((Kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - dt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ae() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * $y(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Lu(pn.bind(null, e, ze, Rt), r);
            break;
          }
          pn(e, ze, Rt);
          break;
        case 5:
          pn(e, ze, Rt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return je(e, ae()), e.callbackNode === n ? vp.bind(null, e) : null;
}
function Gu(e, t) {
  var n = Kr;
  return (
    e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256),
    (e = Ai(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && Zu(t)),
    e
  );
}
function Zu(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function Hy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!ht(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Kt(e, t) {
  for (t &= ~Gs, t &= ~Gi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Nc(e) {
  if (q & 6) throw Error(x(327));
  tr();
  var t = vi(e, 0);
  if (!(t & 1)) return je(e, ae()), null;
  var n = Ai(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ku(e);
    r !== 0 && ((t = r), (n = Gu(e, r)));
  }
  if (n === 1) throw ((n = fo), wn(e, 0), Kt(e, t), je(e, ae()), n);
  if (n === 6) throw Error(x(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), pn(e, ze, Rt), je(e, ae()), null;
}
function bs(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((ar = ae() + 500), Ji && sn());
  }
}
function Cn(e) {
  qt !== null && qt.tag === 0 && !(q & 6) && tr();
  var t = q;
  q |= 1;
  var n = et.transition,
    r = G;
  try {
    if (((et.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (et.transition = n), (q = t), !(q & 6) && sn();
  }
}
function ea() {
  (Ie = Jn.current), te(Jn);
}
function wn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), gy(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var r = n;
      switch ((Ms(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && _i();
          break;
        case 3:
          ur(), te(Ae), te(Pe), Ws();
          break;
        case 5:
          Hs(r);
          break;
        case 4:
          ur();
          break;
        case 13:
          te(ie);
          break;
        case 19:
          te(ie);
          break;
        case 10:
          Us(r.type._context);
          break;
        case 22:
        case 23:
          ea();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (fe = e = nn(e.current, null)),
    (Ee = Ie = t),
    (he = 0),
    (fo = null),
    (Gs = Gi = xn = 0),
    (ze = Kr = null),
    yn !== null)
  ) {
    for (t = 0; t < yn.length; t++)
      if (((n = yn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    yn = null;
  }
  return e;
}
function gp(e, t) {
  do {
    var n = fe;
    try {
      if ((js(), (ni.current = Li), Oi)) {
        for (var r = le.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Oi = !1;
      }
      if (
        ((kn = 0), (ge = pe = le = null), (Vr = !1), (so = 0), (Xs.current = null), n === null || n.return === null)
      ) {
        (he = 1), (fo = t), (fe = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          u = n,
          s = t;
        if (((t = Ee), (u.flags |= 32768), s !== null && typeof s == 'object' && typeof s.then == 'function')) {
          var a = s,
            f = u,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = f.alternate;
            m
              ? ((f.updateQueue = m.updateQueue), (f.memoizedState = m.memoizedState), (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var w = mc(l);
          if (w !== null) {
            (w.flags &= -257), yc(w, l, u, i, t), w.mode & 1 && hc(i, a, t), (t = w), (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              hc(i, a, t), ta();
              break e;
            }
            s = Error(x(426));
          }
        } else if (re && u.mode & 1) {
          var R = mc(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), yc(R, l, u, i, t), As(sr(s, u));
            break e;
          }
        }
        (i = s = sr(s, u)), he !== 4 && (he = 2), Kr === null ? (Kr = [i]) : Kr.push(i), (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var c = tp(i, s, t);
              uc(i, c);
              break e;
            case 1:
              u = s;
              var d = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (h !== null && typeof h.componentDidCatch == 'function' && (en === null || !en.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = np(i, u, t);
                uc(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ep(n);
    } catch (C) {
      (t = C), fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function wp() {
  var e = Di.current;
  return (Di.current = Li), e === null ? Li : e;
}
function ta() {
  (he === 0 || he === 3 || he === 2) && (he = 4), we === null || (!(xn & 268435455) && !(Gi & 268435455)) || Kt(we, Ee);
}
function Ai(e, t) {
  var n = q;
  q |= 2;
  var r = wp();
  (we !== e || Ee !== t) && ((Rt = null), wn(e, t));
  do
    try {
      Wy();
      break;
    } catch (o) {
      gp(e, o);
    }
  while (1);
  if ((js(), (q = n), (Di.current = r), fe !== null)) throw Error(x(261));
  return (we = null), (Ee = 0), he;
}
function Wy() {
  for (; fe !== null; ) Sp(fe);
}
function Vy() {
  for (; fe !== null && !mm(); ) Sp(fe);
}
function Sp(e) {
  var t = kp(e.alternate, e, Ie);
  (e.memoizedProps = e.pendingProps), t === null ? Ep(e) : (fe = t), (Xs.current = null);
}
function Ep(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = jy(n, t)), n !== null)) {
        (n.flags &= 32767), (fe = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (he = 6), (fe = null);
        return;
      }
    } else if (((n = Fy(n, t, Ie)), n !== null)) {
      fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function pn(e, t, n) {
  var r = G,
    o = et.transition;
  try {
    (et.transition = null), (G = 1), Qy(e, t, n, r);
  } finally {
    (et.transition = o), (G = r);
  }
  return null;
}
function Qy(e, t, n, r) {
  do tr();
  while (qt !== null);
  if (q & 6) throw Error(x(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Cm(e, i),
    e === we && ((fe = we = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      qo ||
      ((qo = !0),
      xp(yi, function () {
        return tr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = et.transition), (et.transition = null);
    var l = G;
    G = 1;
    var u = q;
    (q |= 4),
      (Xs.current = null),
      Iy(e, n),
      mp(n, e),
      fy(Tu),
      (gi = !!Nu),
      (Tu = Nu = null),
      (e.current = n),
      By(n),
      ym(),
      (q = u),
      (G = l),
      (et.transition = i);
  } else e.current = n;
  if (
    (qo && ((qo = !1), (qt = e), (Mi = o)),
    (i = e.pendingLanes),
    i === 0 && (en = null),
    wm(n.stateNode),
    je(e, ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (zi) throw ((zi = !1), (e = Yu), (Yu = null), e);
  return (
    Mi & 1 && e.tag !== 0 && tr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Xu ? Jr++ : ((Jr = 0), (Xu = e))) : (Jr = 0),
    sn(),
    null
  );
}
function tr() {
  if (qt !== null) {
    var e = ed(Mi),
      t = et.transition,
      n = G;
    try {
      if (((et.transition = null), (G = 16 > e ? 16 : e), qt === null)) var r = !1;
      else {
        if (((e = qt), (qt = null), (Mi = 0), q & 6)) throw Error(x(331));
        var o = q;
        for (q |= 4, L = e.current; L !== null; ) {
          var i = L,
            l = i.child;
          if (L.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (L = a; L !== null; ) {
                  var f = L;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qr(8, f, i);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (L = p);
                  else
                    for (; L !== null; ) {
                      f = L;
                      var m = f.sibling,
                        w = f.return;
                      if ((dp(f), f === a)) {
                        L = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (L = m);
                        break;
                      }
                      L = w;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var R = v.sibling;
                    (v.sibling = null), (v = R);
                  } while (v !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (L = l);
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qr(9, i, i.return);
                }
              var c = i.sibling;
              if (c !== null) {
                (c.return = i.return), (L = c);
                break e;
              }
              L = i.return;
            }
        }
        var d = e.current;
        for (L = d; L !== null; ) {
          l = L;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (L = h);
          else
            e: for (l = d; L !== null; ) {
              if (((u = L), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi(9, u);
                  }
                } catch (C) {
                  se(u, u.return, C);
                }
              if (u === l) {
                L = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (L = g);
                break e;
              }
              L = u.return;
            }
        }
        if (((q = o), sn(), wt && typeof wt.onPostCommitFiberRoot == 'function'))
          try {
            wt.onPostCommitFiberRoot(Hi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (et.transition = t);
    }
  }
  return !1;
}
function Tc(e, t, n) {
  (t = sr(n, t)), (t = tp(e, t, 1)), (e = bt(e, t, 1)), (t = Oe()), e !== null && (Eo(e, 1, t), je(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Tc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Tc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (en === null || !en.has(r)))
        ) {
          (e = sr(n, e)), (e = np(t, e, 1)), (t = bt(t, e, 1)), (e = Oe()), t !== null && (Eo(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ky(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Ee & n) === n &&
      (he === 4 || (he === 3 && (Ee & 130023424) === Ee && 500 > ae() - Zs) ? wn(e, 0) : (Gs |= n)),
    je(e, t);
}
function _p(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Uo), (Uo <<= 1), !(Uo & 130023424) && (Uo = 4194304)) : (t = 1));
  var n = Oe();
  (e = Ft(e, t)), e !== null && (Eo(e, t, n), je(e, n));
}
function Jy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), _p(e, n);
}
function qy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), _p(e, n);
}
var kp;
kp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), Ay(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), re && t.flags & 1048576 && Rd(t, Ci, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      oi(e, t), (e = t.pendingProps);
      var o = or(t, Pe.current);
      er(t, n), (o = Qs(null, t, r, e, o, n));
      var i = Ks();
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((i = !0), ki(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            Bs(t),
            (o.updater = qi),
            (t.stateNode = o),
            (o._reactInternals = t),
            Uu(t, r, e, n),
            (t = $u(null, t, r, !0, i, n)))
          : ((t.tag = 0), re && i && zs(t), Te(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (oi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Xy(r)),
          (e = ut(r, e)),
          o)
        ) {
          case 0:
            t = Bu(null, t, r, e, n);
            break e;
          case 1:
            t = wc(null, t, r, e, n);
            break e;
          case 11:
            t = vc(null, t, r, e, n);
            break e;
          case 14:
            t = gc(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ut(r, o)), Bu(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ut(r, o)), wc(e, t, r, o, n);
    case 3:
      e: {
        if ((lp(t), e === null)) throw Error(x(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Od(e, t), Ni(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = sr(Error(x(423)), t)), (t = Sc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = sr(Error(x(424)), t)), (t = Sc(e, t, r, n, o));
            break e;
          } else
            for (
              Be = Zt(t.stateNode.containerInfo.firstChild),
                $e = t,
                re = !0,
                ct = null,
                n = Md(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ir(), r === o)) {
            t = jt(e, t, n);
            break e;
          }
          Te(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ad(t),
        e === null && Au(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Ou(r, o) ? (l = null) : i !== null && Ou(r, i) && (t.flags |= 32),
        ip(e, t),
        Te(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Au(t), null;
    case 13:
      return up(e, t, n);
    case 4:
      return (
        $s(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = lr(t, null, r, n)) : Te(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ut(r, o)), vc(e, t, r, o, n);
    case 7:
      return Te(e, t, t.pendingProps, n), t.child;
    case 8:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          b(Ri, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (ht(i.value, l)) {
            if (i.children === o.children && !Ae.current) {
              t = jt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                l = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Lt(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var f = a.pending;
                        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)), (a.pending = s);
                      }
                    }
                    (i.lanes |= n), (s = i.alternate), s !== null && (s.lanes |= n), Fu(i.return, n, t), (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(x(341));
                (l.lanes |= n), (u = l.alternate), u !== null && (u.lanes |= n), Fu(l, n, t), (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Te(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        er(t, n),
        (o = nt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Te(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = ut(r, t.pendingProps)), (o = ut(r.type, o)), gc(e, t, r, o, n);
    case 15:
      return rp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        oi(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), ki(t)) : (e = !1),
        er(t, n),
        Dd(t, r, o),
        Uu(t, r, o, n),
        $u(null, t, r, !0, e, n)
      );
    case 19:
      return sp(e, t, n);
    case 22:
      return op(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function xp(e, t) {
  return Xf(e, t);
}
function Yy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function be(e, t, n, r) {
  return new Yy(e, t, n, r);
}
function na(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Xy(e) {
  if (typeof e == 'function') return na(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Es)) return 11;
    if (e === _s) return 14;
  }
  return 2;
}
function nn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ui(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) na(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case jn:
        return Sn(n.children, o, i, t);
      case Ss:
        (l = 8), (o |= 8);
        break;
      case su:
        return (e = be(12, n, t, o | 2)), (e.elementType = su), (e.lanes = i), e;
      case au:
        return (e = be(13, n, t, o)), (e.elementType = au), (e.lanes = i), e;
      case cu:
        return (e = be(19, n, t, o)), (e.elementType = cu), (e.lanes = i), e;
      case zf:
        return Zi(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Lf:
              l = 10;
              break e;
            case Df:
              l = 9;
              break e;
            case Es:
              l = 11;
              break e;
            case _s:
              l = 14;
              break e;
            case Wt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ''));
    }
  return (t = be(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Sn(e, t, n, r) {
  return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function Zi(e, t, n, r) {
  return (e = be(22, e, r, t)), (e.elementType = zf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Xl(e, t, n) {
  return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function Gl(e, t, n) {
  return (
    (t = be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function Gy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ll(0)),
    (this.expirationTimes = Ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ll(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ra(e, t, n, r, o, i, l, u, s) {
  return (
    (e = new Gy(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = be(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bs(i),
    e
  );
}
function Zy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Fn, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function Cp(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (On(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return xd(e, n, t);
  }
  return t;
}
function Rp(e, t, n, r, o, i, l, u, s) {
  return (
    (e = ra(n, r, !0, e, o, i, l, u, s)),
    (e.context = Cp(null)),
    (n = e.current),
    (r = Oe()),
    (o = tn(n)),
    (i = Lt(r, o)),
    (i.callback = t ?? null),
    bt(n, i, o),
    (e.current.lanes = o),
    Eo(e, o, r),
    je(e, r),
    e
  );
}
function bi(e, t, n, r) {
  var o = t.current,
    i = Oe(),
    l = tn(o);
  return (
    (n = Cp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = bt(o, t, l)),
    e !== null && (pt(e, o, l, i), ti(e, o, l)),
    l
  );
}
function Fi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Oc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function oa(e, t) {
  Oc(e, t), (e = e.alternate) && Oc(e, t);
}
function by() {
  return null;
}
var Pp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ia(e) {
  this._internalRoot = e;
}
el.prototype.render = ia.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  bi(e, t, null, null);
};
el.prototype.unmount = ia.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function () {
      bi(null, e, null, null);
    }),
      (t[At] = null);
  }
};
function el(e) {
  this._internalRoot = e;
}
el.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = rd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
    Qt.splice(n, 0, e), n === 0 && id(e);
  }
};
function la(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function tl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Lc() {}
function ev(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = Fi(l);
        i.call(a);
      };
    }
    var l = Rp(t, r, e, 0, null, !1, !1, '', Lc);
    return (e._reactRootContainer = l), (e[At] = l.current), ro(e.nodeType === 8 ? e.parentNode : e), Cn(), l;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = Fi(s);
      u.call(a);
    };
  }
  var s = ra(e, 0, !1, null, null, !1, !1, '', Lc);
  return (
    (e._reactRootContainer = s),
    (e[At] = s.current),
    ro(e.nodeType === 8 ? e.parentNode : e),
    Cn(function () {
      bi(t, s, n, r);
    }),
    s
  );
}
function nl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var u = o;
      o = function () {
        var s = Fi(l);
        u.call(s);
      };
    }
    bi(t, l, e, o);
  } else l = ev(n, t, e, o, r);
  return Fi(l);
}
td = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jr(t.pendingLanes);
        n !== 0 && (Cs(t, n | 1), je(t, ae()), !(q & 6) && ((ar = ae() + 500), sn()));
      }
      break;
    case 13:
      Cn(function () {
        var r = Ft(e, 1);
        if (r !== null) {
          var o = Oe();
          pt(r, e, 1, o);
        }
      }),
        oa(e, 1);
  }
};
Rs = function (e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Oe();
      pt(t, e, 134217728, n);
    }
    oa(e, 134217728);
  }
};
nd = function (e) {
  if (e.tag === 13) {
    var t = tn(e),
      n = Ft(e, t);
    if (n !== null) {
      var r = Oe();
      pt(n, e, t, r);
    }
    oa(e, t);
  }
};
rd = function () {
  return G;
};
od = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
Su = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((pu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ki(r);
            if (!o) throw Error(x(90));
            Af(r), pu(r, o);
          }
        }
      }
      break;
    case 'textarea':
      jf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Xn(e, !!n.multiple, t, !1);
  }
};
Vf = bs;
Qf = Cn;
var tv = { usingClientEntryPoint: !1, Events: [ko, $n, Ki, Hf, Wf, bs] },
  Lr = { findFiberByHostInstance: mn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
  nv = {
    bundleType: Lr.bundleType,
    version: Lr.version,
    rendererPackageName: Lr.rendererPackageName,
    rendererConfig: Lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = qf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Lr.findFiberByHostInstance || by,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Yo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yo.isDisabled && Yo.supportsFiber)
    try {
      (Hi = Yo.inject(nv)), (wt = Yo);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tv;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!la(t)) throw Error(x(200));
  return Zy(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!la(e)) throw Error(x(299));
  var n = !1,
    r = '',
    o = Pp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ra(e, 1, !1, null, null, n, !1, r, o)),
    (e[At] = t.current),
    ro(e.nodeType === 8 ? e.parentNode : e),
    new ia(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(x(188)) : ((e = Object.keys(e).join(',')), Error(x(268, e)));
  return (e = qf(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return Cn(e);
};
Qe.hydrate = function (e, t, n) {
  if (!tl(t)) throw Error(x(200));
  return nl(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!la(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Pp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Rp(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[At] = t.current),
    ro(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new el(t);
};
Qe.render = function (e, t, n) {
  if (!tl(t)) throw Error(x(200));
  return nl(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!tl(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Cn(function () {
        nl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[At] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = bs;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!tl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return nl(e, t, n, !1, r);
};
Qe.version = '18.2.0-next-9e3b772b8-20220608';
function Np() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Np);
    } catch (e) {
      console.error(e);
    }
}
Np(), (Rf.exports = Qe);
var rv = Rf.exports,
  Dc = rv;
(lu.createRoot = Dc.createRoot), (lu.hydrateRoot = Dc.hydrateRoot);
var Tp = Symbol.for('immer-nothing'),
  zc = Symbol.for('immer-draftable'),
  We = Symbol.for('immer-state');
function ft(e, ...t) {
  throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var cr = Object.getPrototypeOf;
function fr(e) {
  return !!e && !!e[We];
}
function Rn(e) {
  var t;
  return e ? Op(e) || Array.isArray(e) || !!e[zc] || !!((t = e.constructor) != null && t[zc]) || ol(e) || il(e) : !1;
}
var ov = Object.prototype.constructor.toString();
function Op(e) {
  if (!e || typeof e != 'object') return !1;
  const t = cr(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return n === Object ? !0 : typeof n == 'function' && Function.toString.call(n) === ov;
}
function po(e, t) {
  rl(e) === 0
    ? Object.entries(e).forEach(([n, r]) => {
        t(n, r, e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function rl(e) {
  const t = e[We];
  return t ? t.type_ : Array.isArray(e) ? 1 : ol(e) ? 2 : il(e) ? 3 : 0;
}
function bu(e, t) {
  return rl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Lp(e, t, n) {
  const r = rl(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function iv(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ol(e) {
  return e instanceof Map;
}
function il(e) {
  return e instanceof Set;
}
function hn(e) {
  return e.copy_ || e.base_;
}
function es(e, t) {
  if (ol(e)) return new Map(e);
  if (il(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && Op(e)) return cr(e) ? { ...e } : Object.assign(Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[We];
  let r = Reflect.ownKeys(n);
  for (let o = 0; o < r.length; o++) {
    const i = r[o],
      l = n[i];
    l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
      (l.get || l.set) && (n[i] = { configurable: !0, writable: !0, enumerable: l.enumerable, value: e[i] });
  }
  return Object.create(cr(e), n);
}
function ua(e, t = !1) {
  return (
    ll(e) ||
      fr(e) ||
      !Rn(e) ||
      (rl(e) > 1 && (e.set = e.add = e.clear = e.delete = lv), Object.freeze(e), t && po(e, (n, r) => ua(r, !0))),
    e
  );
}
function lv() {
  ft(2);
}
function ll(e) {
  return Object.isFrozen(e);
}
var uv = {};
function Pn(e) {
  const t = uv[e];
  return t || ft(0, e), t;
}
var ho;
function Dp() {
  return ho;
}
function sv(e, t) {
  return { drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 };
}
function Mc(e, t) {
  t && (Pn('Patches'), (e.patches_ = []), (e.inversePatches_ = []), (e.patchListener_ = t));
}
function ts(e) {
  ns(e), e.drafts_.forEach(av), (e.drafts_ = null);
}
function ns(e) {
  e === ho && (ho = e.parent_);
}
function Ac(e) {
  return (ho = sv(ho, e));
}
function av(e) {
  const t = e[We];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Fc(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[We].modified_ && (ts(t), ft(4)),
        Rn(e) && ((e = ji(t, e)), t.parent_ || Ui(t, e)),
        t.patches_ && Pn('Patches').generateReplacementPatches_(n[We].base_, e, t.patches_, t.inversePatches_))
      : (e = ji(t, n, [])),
    ts(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Tp ? e : void 0
  );
}
function ji(e, t, n) {
  if (ll(t)) return t;
  const r = t[We];
  if (!r) return po(t, (o, i) => jc(e, r, t, o, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Ui(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o,
      l = !1;
    r.type_ === 3 && ((i = new Set(o)), o.clear(), (l = !0)),
      po(i, (u, s) => jc(e, r, o, u, s, n, l)),
      Ui(e, o, !1),
      n && e.patches_ && Pn('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function jc(e, t, n, r, o, i, l) {
  if (fr(o)) {
    const u = i && t && t.type_ !== 3 && !bu(t.assigned_, r) ? i.concat(r) : void 0,
      s = ji(e, o, u);
    if ((Lp(n, r, s), fr(s))) e.canAutoFreeze_ = !1;
    else return;
  } else l && n.add(o);
  if (Rn(o) && !ll(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    ji(e, o), (!t || !t.scope_.parent_) && Ui(e, o);
  }
}
function Ui(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ua(t, n);
}
function cv(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Dp(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = r,
    i = sa;
  n && ((o = [r]), (i = mo));
  const { revoke: l, proxy: u } = Proxy.revocable(o, i);
  return (r.draft_ = u), (r.revoke_ = l), u;
}
var sa = {
    get(e, t) {
      if (t === We) return e;
      const n = hn(e);
      if (!bu(n, t)) return fv(e, n, t);
      const r = n[t];
      return e.finalized_ || !Rn(r) ? r : r === Zl(e.base_, t) ? (bl(e), (e.copy_[t] = os(r, e))) : r;
    },
    has(e, t) {
      return t in hn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(hn(e));
    },
    set(e, t, n) {
      const r = zp(hn(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const o = Zl(hn(e), t),
          i = o == null ? void 0 : o[We];
        if (i && i.base_ === n) return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (iv(n, o) && (n !== void 0 || bu(e.base_, t))) return !0;
        bl(e), rs(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Zl(e.base_, t) !== void 0 || t in e.base_ ? ((e.assigned_[t] = !1), bl(e), rs(e)) : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = hn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && { writable: !0, configurable: e.type_ !== 1 || t !== 'length', enumerable: r.enumerable, value: n[t] }
      );
    },
    defineProperty() {
      ft(11);
    },
    getPrototypeOf(e) {
      return cr(e.base_);
    },
    setPrototypeOf() {
      ft(12);
    },
  },
  mo = {};
po(sa, (e, t) => {
  mo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
mo.deleteProperty = function (e, t) {
  return mo.set.call(this, e, t, void 0);
};
mo.set = function (e, t, n) {
  return sa.set.call(this, e[0], t, n, e[0]);
};
function Zl(e, t) {
  const n = e[We];
  return (n ? hn(n) : e)[t];
}
function fv(e, t, n) {
  var o;
  const r = zp(t, n);
  return r ? ('value' in r ? r.value : (o = r.get) == null ? void 0 : o.call(e.draft_)) : void 0;
}
function zp(e, t) {
  if (!(t in e)) return;
  let n = cr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = cr(n);
  }
}
function rs(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && rs(e.parent_));
}
function bl(e) {
  e.copy_ || (e.copy_ = es(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var dv = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == 'function' && typeof n != 'function') {
          const i = n;
          n = t;
          const l = this;
          return function (s = i, ...a) {
            return l.produce(s, (f) => n.call(this, f, ...a));
          };
        }
        typeof n != 'function' && ft(6), r !== void 0 && typeof r != 'function' && ft(7);
        let o;
        if (Rn(t)) {
          const i = Ac(this),
            l = os(t, void 0);
          let u = !0;
          try {
            (o = n(l)), (u = !1);
          } finally {
            u ? ts(i) : ns(i);
          }
          return Mc(i, r), Fc(o, i);
        } else if (!t || typeof t != 'object') {
          if (((o = n(t)), o === void 0 && (o = t), o === Tp && (o = void 0), this.autoFreeze_ && ua(o, !0), r)) {
            const i = [],
              l = [];
            Pn('Patches').generateReplacementPatches_(t, o, i, l), r(i, l);
          }
          return o;
        } else ft(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == 'function') return (l, ...u) => this.produceWithPatches(l, (s) => t(s, ...u));
        let r, o;
        return [
          this.produce(t, n, (l, u) => {
            (r = l), (o = u);
          }),
          r,
          o,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == 'boolean' && this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Rn(e) || ft(8), fr(e) && (e = pv(e));
    const t = Ac(this),
      n = os(e, void 0);
    return (n[We].isManual_ = !0), ns(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[We];
    (!n || !n.isManual_) && ft(9);
    const { scope_: r } = n;
    return Mc(r, t), Fc(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === 'replace') {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Pn('Patches').applyPatches_;
    return fr(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
  }
};
function os(e, t) {
  const n = ol(e) ? Pn('MapSet').proxyMap_(e, t) : il(e) ? Pn('MapSet').proxySet_(e, t) : cv(e, t);
  return (t ? t.scope_ : Dp()).drafts_.push(n), n;
}
function pv(e) {
  return fr(e) || ft(10, e), Mp(e);
}
function Mp(e) {
  if (!Rn(e) || ll(e)) return e;
  const t = e[We];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = es(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = es(e, !0);
  return (
    po(n, (r, o) => {
      Lp(n, r, Mp(o));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Ve = new dv(),
  hv = Ve.produce;
Ve.produceWithPatches.bind(Ve);
Ve.setAutoFreeze.bind(Ve);
Ve.setUseStrictShallowCopy.bind(Ve);
Ve.applyPatches.bind(Ve);
Ve.createDraft.bind(Ve);
Ve.finishDraft.bind(Ve);
function mv(e, t, n) {
  var r = P.useMemo(
    function () {
      return hv(e);
    },
    [e],
  );
  return P.useReducer(r, t, n);
}
const Ap = [],
  Fp = P.createContext(Ap),
  jp = P.createContext(() => ({}));
function yv(e, t) {
  switch (t.type) {
    case 'create': {
      e.push(...t.payload);
      return;
    }
    case 'answerQuestion': {
      const n = e.find((r) => r.id === t.payload.questionId);
      if (!n) return;
      n.selectedOptionId = t.payload.optionId;
      return;
    }
    case 'reset': {
      e.splice(0, e.length);
      return;
    }
  }
}
function vv({ children: e }) {
  const [t, n] = mv(yv, Ap);
  return K.jsx(Fp.Provider, { value: t, children: K.jsx(jp.Provider, { value: n, children: e }) });
}
function Up() {
  return P.useContext(Fp);
}
function Ip() {
  return P.useContext(jp);
}
const gv = '_option_fhjw4_1',
  wv = '_option__unanswered_fhjw4_13 _option_fhjw4_1',
  Sv = '_option__correct_fhjw4_16 _option_fhjw4_1',
  Ev = '_option__incorrect_fhjw4_22 _option_fhjw4_1',
  _v = '_option__selected_fhjw4_28 _option_fhjw4_1',
  kv = '_disabled_fhjw4_34',
  Uc = {
    option: gv,
    option__unanswered: wv,
    option__correct: Sv,
    option__incorrect: Ev,
    option__selected: _v,
    disabled: kv,
  };
function xv(e) {
  const t = Uc[`option__${e.status}`];
  return K.jsx('button', {
    onClick: () => e.onClick(e.option.id),
    className: `${t} ${e.disabled ? Uc.disabled : ''}`,
    disabled: e.disabled,
    children: K.jsx('span', { dangerouslySetInnerHTML: { __html: e.option.text } }),
  });
}
var An = ((e) => (
  (e.unanswered = 'unanswered'), (e.correct = 'correct'), (e.incorrect = 'incorrect'), (e.selected = 'selected'), e
))(An || {});
const Cv = '_question_1ux4o_1',
  Rv = '_questionText_1ux4o_4',
  Ic = { question: Cv, questionText: Rv };
function Pv(e) {
  const t = (r) => {
      e.onQuestionAnswered(e.question.id, r);
    },
    n = (r) => {
      if (!e.showCorrection) return e.question.selectedOptionId === r ? An.selected : An.unanswered;
      const o = e.question.options.find((i) => i.isAnswer);
      return (o == null ? void 0 : o.id) === r
        ? An.correct
        : e.question.selectedOptionId === r && (o == null ? void 0 : o.id) !== r
        ? An.incorrect
        : An.unanswered;
    };
  return K.jsxs('div', {
    className: Ic.question,
    children: [
      K.jsx('div', { className: Ic.questionText, dangerouslySetInnerHTML: { __html: e.question.text } }),
      K.jsx('div', {
        children: e.question.options.map((r) =>
          K.jsx(xv, { option: r, status: n(r.id), disabled: e.showCorrection, onClick: t }, r.id),
        ),
      }),
    ],
  });
}
const Nv = '_questionList_jh08c_1',
  Tv = { questionList: Nv };
function Bp({ showCorrection: e = !1, onQuizFinished: t }) {
  const n = Up(),
    r = Ip(),
    [o, i] = P.useState([]),
    l = (u, s) => {
      r({ type: 'answerQuestion', payload: { questionId: u, optionId: s } });
      const a = [...new Set([...o, u])];
      i(a), a.length === n.length && !e && t && t();
    };
  return K.jsx('div', {
    className: Tv.questionList,
    children: n.map((u) => K.jsx(Pv, { question: u, showCorrection: e, onQuestionAnswered: l }, u.id)),
  });
}
function $p(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Ov } = Object.prototype,
  { getPrototypeOf: aa } = Object,
  ul = ((e) => (t) => {
    const n = Ov.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Et = (e) => ((e = e.toLowerCase()), (t) => ul(t) === e),
  sl = (e) => (t) => typeof t === e,
  { isArray: vr } = Array,
  yo = sl('undefined');
function Lv(e) {
  return (
    e !== null &&
    !yo(e) &&
    e.constructor !== null &&
    !yo(e.constructor) &&
    tt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Hp = Et('ArrayBuffer');
function Dv(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && Hp(e.buffer)),
    t
  );
}
const zv = sl('string'),
  tt = sl('function'),
  Wp = sl('number'),
  al = (e) => e !== null && typeof e == 'object',
  Mv = (e) => e === !0 || e === !1,
  si = (e) => {
    if (ul(e) !== 'object') return !1;
    const t = aa(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Av = Et('Date'),
  Fv = Et('File'),
  jv = Et('Blob'),
  Uv = Et('FileList'),
  Iv = (e) => al(e) && tt(e.pipe),
  Bv = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (tt(e.append) &&
          ((t = ul(e)) === 'formdata' || (t === 'object' && tt(e.toString) && e.toString() === '[object FormData]'))))
    );
  },
  $v = Et('URLSearchParams'),
  Hv = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function Co(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), vr(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length;
    let u;
    for (r = 0; r < l; r++) (u = i[r]), t.call(null, e[u], u, e);
  }
}
function Vp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Qp = (() =>
    typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global)(),
  Kp = (e) => !yo(e) && e !== Qp;
function is() {
  const { caseless: e } = (Kp(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Vp(t, o)) || o;
      si(t[i]) && si(r) ? (t[i] = is(t[i], r)) : si(r) ? (t[i] = is({}, r)) : vr(r) ? (t[i] = r.slice()) : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && Co(arguments[r], n);
  return t;
}
const Wv = (e, t, n, { allOwnKeys: r } = {}) => (
    Co(
      t,
      (o, i) => {
        n && tt(o) ? (e[i] = $p(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Vv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Qv = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Kv = (e, t, n, r) => {
    let o, i, l;
    const u = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !u[l] && ((t[l] = e[l]), (u[l] = !0));
      e = n !== !1 && aa(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Jv = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  qv = (e) => {
    if (!e) return null;
    if (vr(e)) return e;
    let t = e.length;
    if (!Wp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Yv = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && aa(Uint8Array)),
  Xv = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  Gv = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Zv = Et('HTMLFormElement'),
  bv = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Bc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  eg = Et('RegExp'),
  Jp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Co(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o);
    }),
      Object.defineProperties(e, r);
  },
  tg = (e) => {
    Jp(e, (t, n) => {
      if (tt(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (tt(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  ng = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return vr(e) ? r(e) : r(String(e).split(t)), n;
  },
  rg = () => {},
  og = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  eu = 'abcdefghijklmnopqrstuvwxyz',
  $c = '0123456789',
  qp = { DIGIT: $c, ALPHA: eu, ALPHA_DIGIT: eu + eu.toUpperCase() + $c },
  ig = (e = 16, t = qp.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function lg(e) {
  return !!(e && tt(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator]);
}
const ug = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (al(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const i = vr(r) ? [] : {};
            return (
              Co(r, (l, u) => {
                const s = n(l, o + 1);
                !yo(s) && (i[u] = s);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  sg = Et('AsyncFunction'),
  ag = (e) => e && (al(e) || tt(e)) && tt(e.then) && tt(e.catch),
  _ = {
    isArray: vr,
    isArrayBuffer: Hp,
    isBuffer: Lv,
    isFormData: Bv,
    isArrayBufferView: Dv,
    isString: zv,
    isNumber: Wp,
    isBoolean: Mv,
    isObject: al,
    isPlainObject: si,
    isUndefined: yo,
    isDate: Av,
    isFile: Fv,
    isBlob: jv,
    isRegExp: eg,
    isFunction: tt,
    isStream: Iv,
    isURLSearchParams: $v,
    isTypedArray: Yv,
    isFileList: Uv,
    forEach: Co,
    merge: is,
    extend: Wv,
    trim: Hv,
    stripBOM: Vv,
    inherits: Qv,
    toFlatObject: Kv,
    kindOf: ul,
    kindOfTest: Et,
    endsWith: Jv,
    toArray: qv,
    forEachEntry: Xv,
    matchAll: Gv,
    isHTMLForm: Zv,
    hasOwnProperty: Bc,
    hasOwnProp: Bc,
    reduceDescriptors: Jp,
    freezeMethods: tg,
    toObjectSet: ng,
    toCamelCase: bv,
    noop: rg,
    toFiniteNumber: og,
    findKey: Vp,
    global: Qp,
    isContextDefined: Kp,
    ALPHABET: qp,
    generateString: ig,
    isSpecCompliantForm: lg,
    toJSONObject: ug,
    isAsyncFn: sg,
    isThenable: ag,
  };
function J(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
_.inherits(J, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Yp = J.prototype,
  Xp = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Xp[e] = { value: e };
});
Object.defineProperties(J, Xp);
Object.defineProperty(Yp, 'isAxiosError', { value: !0 });
J.from = (e, t, n, r, o, i) => {
  const l = Object.create(Yp);
  return (
    _.toFlatObject(
      e,
      l,
      function (s) {
        return s !== Error.prototype;
      },
      (u) => u !== 'isAxiosError',
    ),
    J.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  );
};
const cg = null;
function ls(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function Gp(e) {
  return _.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Hc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Gp(o)), !n && i ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}
function fg(e) {
  return _.isArray(e) && !e.some(ls);
}
const dg = _.toFlatObject(_, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function cl(e, t, n) {
  if (!_.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = _.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (v, R) {
      return !_.isUndefined(R[v]);
    }));
  const r = n.metaTokens,
    o = n.visitor || f,
    i = n.dots,
    l = n.indexes,
    s = (n.Blob || (typeof Blob < 'u' && Blob)) && _.isSpecCompliantForm(t);
  if (!_.isFunction(o)) throw new TypeError('visitor must be a function');
  function a(y) {
    if (y === null) return '';
    if (_.isDate(y)) return y.toISOString();
    if (!s && _.isBlob(y)) throw new J('Blob is not supported. Use a Buffer instead.');
    return _.isArrayBuffer(y) || _.isTypedArray(y)
      ? s && typeof Blob == 'function'
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function f(y, v, R) {
    let c = y;
    if (y && !R && typeof y == 'object') {
      if (_.endsWith(v, '{}')) (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y));
      else if ((_.isArray(y) && fg(y)) || ((_.isFileList(y) || _.endsWith(v, '[]')) && (c = _.toArray(y))))
        return (
          (v = Gp(v)),
          c.forEach(function (h, g) {
            !(_.isUndefined(h) || h === null) && t.append(l === !0 ? Hc([v], g, i) : l === null ? v : v + '[]', a(h));
          }),
          !1
        );
    }
    return ls(y) ? !0 : (t.append(Hc(R, v, i), a(y)), !1);
  }
  const p = [],
    m = Object.assign(dg, { defaultVisitor: f, convertValue: a, isVisitable: ls });
  function w(y, v) {
    if (!_.isUndefined(y)) {
      if (p.indexOf(y) !== -1) throw Error('Circular reference detected in ' + v.join('.'));
      p.push(y),
        _.forEach(y, function (c, d) {
          (!(_.isUndefined(c) || c === null) && o.call(t, c, _.isString(d) ? d.trim() : d, v, m)) === !0 &&
            w(c, v ? v.concat(d) : [d]);
        }),
        p.pop();
    }
  }
  if (!_.isObject(e)) throw new TypeError('data must be an object');
  return w(e), t;
}
function Wc(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ca(e, t) {
  (this._pairs = []), e && cl(e, this, t);
}
const Zp = ca.prototype;
Zp.append = function (t, n) {
  this._pairs.push([t, n]);
};
Zp.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Wc);
      }
    : Wc;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};
function pg(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function bp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || pg,
    o = n && n.serialize;
  let i;
  if ((o ? (i = o(t, n)) : (i = _.isURLSearchParams(t) ? t.toString() : new ca(t, n).toString(r)), i)) {
    const l = e.indexOf('#');
    l !== -1 && (e = e.slice(0, l)), (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class hg {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    _.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Vc = hg,
  eh = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  mg = typeof URLSearchParams < 'u' ? URLSearchParams : ca,
  yg = typeof FormData < 'u' ? FormData : null,
  vg = typeof Blob < 'u' ? Blob : null,
  gg = (() => {
    let e;
    return typeof navigator < 'u' && ((e = navigator.product) === 'ReactNative' || e === 'NativeScript' || e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  })(),
  wg = (() =>
    typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function')(),
  gt = {
    isBrowser: !0,
    classes: { URLSearchParams: mg, FormData: yg, Blob: vg },
    isStandardBrowserEnv: gg,
    isStandardBrowserWebWorkerEnv: wg,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
function Sg(e, t) {
  return cl(
    e,
    new gt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return gt.isNode && _.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function Eg(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function _g(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function th(e) {
  function t(n, r, o, i) {
    let l = n[i++];
    const u = Number.isFinite(+l),
      s = i >= n.length;
    return (
      (l = !l && _.isArray(o) ? o.length : l),
      s
        ? (_.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !u)
        : ((!o[l] || !_.isObject(o[l])) && (o[l] = []), t(n, r, o[l], i) && _.isArray(o[l]) && (o[l] = _g(o[l])), !u)
    );
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return (
      _.forEachEntry(e, (r, o) => {
        t(Eg(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
const kg = { 'Content-Type': void 0 };
function xg(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const fl = {
  transitional: eh,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = _.isObject(t);
      if ((i && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))) return o && o ? JSON.stringify(th(t)) : t;
      if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t)) return t;
      if (_.isArrayBufferView(t)) return t.buffer;
      if (_.isURLSearchParams(t))
        return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString();
      let u;
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1) return Sg(t, this.formSerializer).toString();
        if ((u = _.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData;
          return cl(u ? { 'files[]': t } : t, s && new s(), this.formSerializer);
        }
      }
      return i || o ? (n.setContentType('application/json', !1), xg(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || fl.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (t && _.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (u) {
          if (l) throw u.name === 'SyntaxError' ? J.from(u, J.ERR_BAD_RESPONSE, this, null, this.response) : u;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: gt.classes.FormData, Blob: gt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
};
_.forEach(['delete', 'get', 'head'], function (t) {
  fl.headers[t] = {};
});
_.forEach(['post', 'put', 'patch'], function (t) {
  fl.headers[t] = _.merge(kg);
});
const fa = fl,
  Cg = _.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Rg = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (l) {
            (o = l.indexOf(':')),
              (n = l.substring(0, o).trim().toLowerCase()),
              (r = l.substring(o + 1).trim()),
              !(!n || (t[n] && Cg[n])) &&
                (n === 'set-cookie' ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Qc = Symbol('internals');
function Dr(e) {
  return e && String(e).trim().toLowerCase();
}
function ai(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(ai) : String(e);
}
function Pg(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Ng = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function tu(e, t, n, r, o) {
  if (_.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!_.isString(t))) {
    if (_.isString(r)) return t.indexOf(r) !== -1;
    if (_.isRegExp(r)) return r.test(t);
  }
}
function Tg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Og(e, t) {
  const n = _.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l);
      },
      configurable: !0,
    });
  });
}
class dl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(u, s, a) {
      const f = Dr(s);
      if (!f) throw new Error('header name must be a non-empty string');
      const p = _.findKey(o, f);
      (!p || o[p] === void 0 || a === !0 || (a === void 0 && o[p] !== !1)) && (o[p || s] = ai(u));
    }
    const l = (u, s) => _.forEach(u, (a, f) => i(a, f, s));
    return (
      _.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : _.isString(t) && (t = t.trim()) && !Ng(t)
        ? l(Rg(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Dr(t)), t)) {
      const r = _.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return Pg(o);
        if (_.isFunction(n)) return n.call(this, o, r);
        if (_.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = Dr(t)), t)) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || tu(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(l) {
      if (((l = Dr(l)), l)) {
        const u = _.findKey(r, l);
        u && (!n || tu(r, r[u], u, n)) && (delete r[u], (o = !0));
      }
    }
    return _.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || tu(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      _.forEach(this, (o, i) => {
        const l = _.findKey(r, i);
        if (l) {
          (n[l] = ai(o)), delete n[i];
          return;
        }
        const u = t ? Tg(i) : String(i).trim();
        u !== i && delete n[i], (n[u] = ai(o)), (r[u] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      _.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && _.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Qc] = this[Qc] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(l) {
      const u = Dr(l);
      r[u] || (Og(o, l), (r[u] = !0));
    }
    return _.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
dl.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
_.freezeMethods(dl.prototype);
_.freezeMethods(dl);
const Dt = dl;
function nu(e, t) {
  const n = this || fa,
    r = t || n,
    o = Dt.from(r.headers);
  let i = r.data;
  return (
    _.forEach(e, function (u) {
      i = u.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function nh(e) {
  return !!(e && e.__CANCEL__);
}
function Ro(e, t, n) {
  J.call(this, e ?? 'canceled', J.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
_.inherits(Ro, J, { __CANCEL__: !0 });
function Lg(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new J(
          'Request failed with status code ' + n.status,
          [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n,
        ),
      );
}
const Dg = gt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, l, u) {
          const s = [];
          s.push(n + '=' + encodeURIComponent(r)),
            _.isNumber(o) && s.push('expires=' + new Date(o).toGMTString()),
            _.isString(i) && s.push('path=' + i),
            _.isString(l) && s.push('domain=' + l),
            u === !0 && s.push('secure'),
            (document.cookie = s.join('; '));
        },
        read: function (n) {
          const r = document.cookie.match(new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'));
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, '', Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function zg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Mg(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function rh(e, t) {
  return e && !zg(t) ? Mg(e, t) : t;
}
const Ag = gt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function o(i) {
        let l = i;
        return (
          t && (n.setAttribute('href', l), (l = n.href)),
          n.setAttribute('href', l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (l) {
          const u = _.isString(l) ? o(l) : l;
          return u.protocol === r.protocol && u.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Fg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function jg(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const a = Date.now(),
        f = r[i];
      l || (l = a), (n[o] = s), (r[o] = a);
      let p = i,
        m = 0;
      for (; p !== o; ) (m += n[p++]), (p = p % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - l < t)) return;
      const w = f && a - f;
      return w ? Math.round((m * 1e3) / w) : void 0;
    }
  );
}
function Kc(e, t) {
  let n = 0;
  const r = jg(50, 250);
  return (o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      u = i - n,
      s = r(u),
      a = i <= l;
    n = i;
    const f = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: u,
      rate: s || void 0,
      estimated: s && l && a ? (l - i) / s : void 0,
      event: o,
    };
    (f[t ? 'download' : 'upload'] = !0), e(f);
  };
}
const Ug = typeof XMLHttpRequest < 'u',
  Ig =
    Ug &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = Dt.from(e.headers).normalize(),
          l = e.responseType;
        let u;
        function s() {
          e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener('abort', u);
        }
        _.isFormData(o) &&
          (gt.isStandardBrowserEnv || gt.isStandardBrowserWebWorkerEnv
            ? i.setContentType(!1)
            : i.setContentType('multipart/form-data;', !1));
        let a = new XMLHttpRequest();
        if (e.auth) {
          const w = e.auth.username || '',
            y = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
          i.set('Authorization', 'Basic ' + btoa(w + ':' + y));
        }
        const f = rh(e.baseURL, e.url);
        a.open(e.method.toUpperCase(), bp(f, e.params, e.paramsSerializer), !0), (a.timeout = e.timeout);
        function p() {
          if (!a) return;
          const w = Dt.from('getAllResponseHeaders' in a && a.getAllResponseHeaders()),
            v = {
              data: !l || l === 'text' || l === 'json' ? a.responseText : a.response,
              status: a.status,
              statusText: a.statusText,
              headers: w,
              config: e,
              request: a,
            };
          Lg(
            function (c) {
              n(c), s();
            },
            function (c) {
              r(c), s();
            },
            v,
          ),
            (a = null);
        }
        if (
          ('onloadend' in a
            ? (a.onloadend = p)
            : (a.onreadystatechange = function () {
                !a ||
                  a.readyState !== 4 ||
                  (a.status === 0 && !(a.responseURL && a.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(p);
              }),
          (a.onabort = function () {
            a && (r(new J('Request aborted', J.ECONNABORTED, e, a)), (a = null));
          }),
          (a.onerror = function () {
            r(new J('Network Error', J.ERR_NETWORK, e, a)), (a = null);
          }),
          (a.ontimeout = function () {
            let y = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded';
            const v = e.transitional || eh;
            e.timeoutErrorMessage && (y = e.timeoutErrorMessage),
              r(new J(y, v.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED, e, a)),
              (a = null);
          }),
          gt.isStandardBrowserEnv)
        ) {
          const w = (e.withCredentials || Ag(f)) && e.xsrfCookieName && Dg.read(e.xsrfCookieName);
          w && i.set(e.xsrfHeaderName, w);
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in a &&
            _.forEach(i.toJSON(), function (y, v) {
              a.setRequestHeader(v, y);
            }),
          _.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials),
          l && l !== 'json' && (a.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' && a.addEventListener('progress', Kc(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            a.upload &&
            a.upload.addEventListener('progress', Kc(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (w) => {
              a && (r(!w || w.type ? new Ro(null, e, a) : w), a.abort(), (a = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal && (e.signal.aborted ? u() : e.signal.addEventListener('abort', u)));
        const m = Fg(f);
        if (m && gt.protocols.indexOf(m) === -1) {
          r(new J('Unsupported protocol ' + m + ':', J.ERR_BAD_REQUEST, e));
          return;
        }
        a.send(o || null);
      });
    },
  ci = { http: cg, xhr: Ig };
_.forEach(ci, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Bg = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && ((n = e[o]), !(r = _.isString(n) ? ci[n.toLowerCase()] : n)); o++);
    if (!r)
      throw r === !1
        ? new J(`Adapter ${n} is not supported by the environment`, 'ERR_NOT_SUPPORT')
        : new Error(_.hasOwnProp(ci, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
    if (!_.isFunction(r)) throw new TypeError('adapter is not a function');
    return r;
  },
  adapters: ci,
};
function ru(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new Ro(null, e);
}
function Jc(e) {
  return (
    ru(e),
    (e.headers = Dt.from(e.headers)),
    (e.data = nu.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Bg.getAdapter(e.adapter || fa.adapter)(e).then(
      function (r) {
        return ru(e), (r.data = nu.call(e, e.transformResponse, r)), (r.headers = Dt.from(r.headers)), r;
      },
      function (r) {
        return (
          nh(r) ||
            (ru(e),
            r &&
              r.response &&
              ((r.response.data = nu.call(e, e.transformResponse, r.response)),
              (r.response.headers = Dt.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const qc = (e) => (e instanceof Dt ? e.toJSON() : e);
function dr(e, t) {
  t = t || {};
  const n = {};
  function r(a, f, p) {
    return _.isPlainObject(a) && _.isPlainObject(f)
      ? _.merge.call({ caseless: p }, a, f)
      : _.isPlainObject(f)
      ? _.merge({}, f)
      : _.isArray(f)
      ? f.slice()
      : f;
  }
  function o(a, f, p) {
    if (_.isUndefined(f)) {
      if (!_.isUndefined(a)) return r(void 0, a, p);
    } else return r(a, f, p);
  }
  function i(a, f) {
    if (!_.isUndefined(f)) return r(void 0, f);
  }
  function l(a, f) {
    if (_.isUndefined(f)) {
      if (!_.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, f);
  }
  function u(a, f, p) {
    if (p in t) return r(a, f);
    if (p in e) return r(void 0, a);
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u,
    headers: (a, f) => o(qc(a), qc(f), !0),
  };
  return (
    _.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const p = s[f] || o,
        m = p(e[f], t[f], f);
      (_.isUndefined(m) && p !== u) || (n[f] = m);
    }),
    n
  );
}
const oh = '1.4.0',
  da = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  da[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
  };
});
const Yc = {};
da.transitional = function (t, n, r) {
  function o(i, l) {
    return '[Axios v' + oh + "] Transitional option '" + i + "'" + l + (r ? '. ' + r : '');
  }
  return (i, l, u) => {
    if (t === !1) throw new J(o(l, ' has been removed' + (n ? ' in ' + n : '')), J.ERR_DEPRECATED);
    return (
      n &&
        !Yc[l] &&
        ((Yc[l] = !0),
        console.warn(o(l, ' has been deprecated since v' + n + ' and will be removed in the near future'))),
      t ? t(i, l, u) : !0
    );
  };
};
function $g(e, t, n) {
  if (typeof e != 'object') throw new J('options must be an object', J.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i];
    if (l) {
      const u = e[i],
        s = u === void 0 || l(u, i, e);
      if (s !== !0) throw new J('option ' + i + ' must be ' + s, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new J('Unknown option ' + i, J.ERR_BAD_OPTION);
  }
}
const us = { assertOptions: $g, validators: da },
  Ht = us.validators;
class Ii {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new Vc(), response: new Vc() });
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = dr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      us.assertOptions(
        r,
        {
          silentJSONParsing: Ht.transitional(Ht.boolean),
          forcedJSONParsing: Ht.transitional(Ht.boolean),
          clarifyTimeoutError: Ht.transitional(Ht.boolean),
        },
        !1,
      ),
      o != null &&
        (_.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : us.assertOptions(o, { encode: Ht.function, serialize: Ht.function }, !0)),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let l;
    (l = i && _.merge(i.common, i[n.method])),
      l &&
        _.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (y) => {
          delete i[y];
        }),
      (n.headers = Dt.concat(l, i));
    const u = [];
    let s = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == 'function' && v.runWhen(n) === !1) ||
        ((s = s && v.synchronous), u.unshift(v.fulfilled, v.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected);
    });
    let f,
      p = 0,
      m;
    if (!s) {
      const y = [Jc.bind(this), void 0];
      for (y.unshift.apply(y, u), y.push.apply(y, a), m = y.length, f = Promise.resolve(n); p < m; )
        f = f.then(y[p++], y[p++]);
      return f;
    }
    m = u.length;
    let w = n;
    for (p = 0; p < m; ) {
      const y = u[p++],
        v = u[p++];
      try {
        w = y(w);
      } catch (R) {
        v.call(this, R);
        break;
      }
    }
    try {
      f = Jc.call(this, w);
    } catch (y) {
      return Promise.reject(y);
    }
    for (p = 0, m = a.length; p < m; ) f = f.then(a[p++], a[p++]);
    return f;
  }
  getUri(t) {
    t = dr(this.defaults, t);
    const n = rh(t.baseURL, t.url);
    return bp(n, t.params, t.paramsSerializer);
  }
}
_.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Ii.prototype[t] = function (n, r) {
    return this.request(dr(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
_.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, l, u) {
      return this.request(
        dr(u || {}, { method: t, headers: r ? { 'Content-Type': 'multipart/form-data' } : {}, url: i, data: l }),
      );
    };
  }
  (Ii.prototype[t] = n()), (Ii.prototype[t + 'Form'] = n(!0));
});
const fi = Ii;
class pa {
  constructor(t) {
    if (typeof t != 'function') throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const l = new Promise((u) => {
          r.subscribe(u), (i = u);
        }).then(o);
        return (
          (l.cancel = function () {
            r.unsubscribe(i);
          }),
          l
        );
      }),
      t(function (i, l, u) {
        r.reason || ((r.reason = new Ro(i, l, u)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new pa(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const Hg = pa;
function Wg(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Vg(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const ss = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ss).forEach(([e, t]) => {
  ss[t] = e;
});
const Qg = ss;
function ih(e) {
  const t = new fi(e),
    n = $p(fi.prototype.request, t);
  return (
    _.extend(n, fi.prototype, t, { allOwnKeys: !0 }),
    _.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return ih(dr(e, o));
    }),
    n
  );
}
const me = ih(fa);
me.Axios = fi;
me.CanceledError = Ro;
me.CancelToken = Hg;
me.isCancel = nh;
me.VERSION = oh;
me.toFormData = cl;
me.AxiosError = J;
me.Cancel = me.CanceledError;
me.all = function (t) {
  return Promise.all(t);
};
me.spread = Wg;
me.isAxiosError = Vg;
me.mergeConfig = dr;
me.AxiosHeaders = Dt;
me.formToJSON = (e) => th(_.isHTMLForm(e) ? new FormData(e) : e);
me.HttpStatusCode = Qg;
me.default = me;
const Xc = me,
  lh = async (e, t) => {
    try {
      return (await Xc.get(e, { signal: t == null ? void 0 : t.abortAxiosSignal })).data;
    } catch (n) {
      (!Xc.isAxiosError(n) || n.code !== 'ERR_CANCELED') && console.error(n);
    }
  },
  Kg = async (e) => {
    const t = await lh('https://opentdb.com/api_category.php', e);
    return (t == null ? void 0 : t.trivia_categories) ?? [];
  },
  Jg = (e) => ({ value: e.id.toString(), label: e.name }),
  qg = async (e, t) => {
    const n = await lh(
      `https://opentdb.com/api.php?amount=5&category=${e.categoryId}&difficulty=${e.difficulty}&type=multiple`,
      t,
    );
    return n ? Yg(n) : [];
  },
  Yg = (e) => e.results.map((t, n) => Xg(t, n.toString())),
  Xg = (e, t) => {
    const n = [
        ...e.incorrect_answers.map((o) => ({ text: o, isAnswer: !1 })),
        { text: e.correct_answer, isAnswer: !0 },
      ],
      r = Gg(n).map((o, i) => ({ id: i.toString(), ...o }));
    return { id: t, text: e.question, options: r };
  },
  Gg = (e) => e.sort(() => Math.random() - 0.5),
  Zg = '_customSelect_1uk1g_1',
  bg = { customSelect: Zg };
function Gc(e) {
  return K.jsxs('select', {
    id: e.id,
    value: e.value,
    defaultValue: '',
    onChange: (t) => e.onChange(t.target.value),
    className: bg.customSelect,
    children: [
      K.jsx('option', { value: '', disabled: !0, children: e.placeholder ?? 'Select your option' }),
      e.options.map((t) => K.jsx('option', { value: t.value, children: t.label ?? t.value }, t.value)),
    ],
  });
}
var di = ((e) => ((e.Easy = 'easy'), (e.Medium = 'medium'), (e.Hard = 'hard'), e))(di || {});
const e0 = '_createButton_hrbk9_1',
  t0 = { createButton: e0 };
function n0() {
  const [e, t] = P.useState([]),
    [n, r] = P.useState(void 0);
  P.useEffect(() => {
    const a = new AbortController();
    return (
      (async () => {
        const p = (await Kg({ abortAxiosSignal: a.signal })).map(Jg);
        t(p);
      })(),
      () => {
        a.abort();
      }
    );
  }, []);
  const o = [{ value: di.Easy }, { value: di.Medium }, { value: di.Hard }],
    [i, l] = P.useState(void 0),
    u = Ip(),
    s = async (a, f) => {
      const p = await qg({ categoryId: a, difficulty: f });
      u({ type: 'create', payload: p });
    };
  return K.jsxs(K.Fragment, {
    children: [
      K.jsx(Gc, { id: 'categorySelect', placeholder: 'Select a category', options: e, value: n, onChange: r }),
      K.jsx(Gc, {
        id: 'difficultySelect',
        placeholder: 'Select difficulty',
        options: o,
        value: i,
        onChange: (a) => l(a),
      }),
      K.jsx('button', {
        id: 'createBtn',
        className: t0.createButton,
        disabled: !n || !i,
        onClick: () => s(n, i),
        children: 'Create',
      }),
    ],
  });
}
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function X() {
  return (
    (X = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    X.apply(this, arguments)
  );
}
var ce;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(ce || (ce = {}));
const Zc = 'popstate';
function r0(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: u } = r.location;
    return vo(
      '',
      { pathname: i, search: l, hash: u },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : Nn(o);
  }
  return i0(t, n, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function pr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function o0() {
  return Math.random().toString(36).substr(2, 8);
}
function bc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function vo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    X({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? It(t) : t, {
      state: n,
      key: (t && t.key) || r || o0(),
    })
  );
}
function Nn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function It(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function i0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    u = ce.Pop,
    s = null,
    a = f();
  a == null && ((a = 0), l.replaceState(X({}, l.state, { idx: a }), ''));
  function f() {
    return (l.state || { idx: null }).idx;
  }
  function p() {
    u = ce.Pop;
    let R = f(),
      c = R == null ? null : R - a;
    (a = R), s && s({ action: u, location: v.location, delta: c });
  }
  function m(R, c) {
    u = ce.Push;
    let d = vo(v.location, R, c);
    n && n(d, R), (a = f() + 1);
    let h = bc(d, a),
      g = v.createHref(d);
    try {
      l.pushState(h, '', g);
    } catch {
      o.location.assign(g);
    }
    i && s && s({ action: u, location: v.location, delta: 1 });
  }
  function w(R, c) {
    u = ce.Replace;
    let d = vo(v.location, R, c);
    n && n(d, R), (a = f());
    let h = bc(d, a),
      g = v.createHref(d);
    l.replaceState(h, '', g), i && s && s({ action: u, location: v.location, delta: 0 });
  }
  function y(R) {
    let c = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      d = typeof R == 'string' ? R : Nn(R);
    return V(c, 'No window.location.(origin|href) available to create URL for href: ' + d), new URL(d, c);
  }
  let v = {
    get action() {
      return u;
    },
    get location() {
      return e(o, l);
    },
    listen(R) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(Zc, p),
        (s = R),
        () => {
          o.removeEventListener(Zc, p), (s = null);
        }
      );
    },
    createHref(R) {
      return t(o, R);
    },
    createURL: y,
    encodeLocation(R) {
      let c = y(R);
      return { pathname: c.pathname, search: c.search, hash: c.hash };
    },
    push: m,
    replace: w,
    go(R) {
      return l.go(R);
    },
  };
  return v;
}
var de;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(de || (de = {}));
const l0 = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function u0(e) {
  return e.index === !0;
}
function as(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let l = [...n, i],
        u = typeof o.id == 'string' ? o.id : l.join('-');
      if (
        (V(o.index !== !0 || !o.children, 'Cannot specify children on an index route'),
        V(
          !r[u],
          'Found a route id collision on id "' + u + `".  Route id's must be globally unique within Data Router usages`,
        ),
        u0(o))
      ) {
        let s = X({}, o, t(o), { id: u });
        return (r[u] = s), s;
      } else {
        let s = X({}, o, t(o), { id: u, children: void 0 });
        return (r[u] = s), o.children && (s.children = as(o.children, t, l, r)), s;
      }
    })
  );
}
function qn(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? It(t) : t,
    o = gr(r.pathname || '/', n);
  if (o == null) return null;
  let i = uh(e);
  s0(i);
  let l = null;
  for (let u = 0; l == null && u < i.length; ++u) l = v0(i[u], S0(o));
  return l;
}
function uh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, l, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || '' : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    s.relativePath.startsWith('/') &&
      (V(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = zt([r, s.relativePath]),
      f = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (V(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + a + '".'),
      ),
      uh(i.children, t, f, a)),
      !(i.path == null && !i.index) && t.push({ path: a, score: m0(a, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, l) => {
      var u;
      if (i.path === '' || !((u = i.path) != null && u.includes('?'))) o(i, l);
      else for (let s of sh(i.path)) o(i, l, s);
    }),
    t
  );
}
function sh(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let l = sh(r.join('/')),
    u = [];
  return (
    u.push(...l.map((s) => (s === '' ? i : [i, s].join('/')))),
    o && u.push(...l),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function s0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : y0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const a0 = /^:\w+$/,
  c0 = 3,
  f0 = 2,
  d0 = 1,
  p0 = 10,
  h0 = -2,
  ef = (e) => e === '*';
function m0(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(ef) && (r += h0),
    t && (r += f0),
    n.filter((o) => !ef(o)).reduce((o, i) => o + (a0.test(i) ? c0 : i === '' ? d0 : p0), r)
  );
}
function y0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function v0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let u = n[l],
      s = l === n.length - 1,
      a = o === '/' ? t : t.slice(o.length) || '/',
      f = g0({ path: u.relativePath, caseSensitive: u.caseSensitive, end: s }, a);
    if (!f) return null;
    Object.assign(r, f.params);
    let p = u.route;
    i.push({ params: r, pathname: zt([o, f.pathname]), pathnameBase: x0(zt([o, f.pathnameBase])), route: p }),
      f.pathnameBase !== '/' && (o = zt([o, f.pathnameBase]));
  }
  return i;
}
function g0(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = w0(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, '$1'),
    u = o.slice(1);
  return {
    params: r.reduce((a, f, p) => {
      if (f === '*') {
        let m = u[p] || '';
        l = i.slice(0, i.length - m.length).replace(/(.)\/+$/, '$1');
      }
      return (a[f] = E0(u[p] || '', f)), a;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function w0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    pr(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (l, u) => (r.push(u), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function S0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      pr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function E0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      pr(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    );
  }
}
function gr(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function _0(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: o = '' } = typeof e == 'string' ? It(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : k0(n, t)) : t, search: C0(r), hash: R0(o) };
}
function k0(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function ou(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Po(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function pl(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = It(e))
    : ((o = X({}, e)),
      V(!o.pathname || !o.pathname.includes('?'), ou('?', 'pathname', 'search', o)),
      V(!o.pathname || !o.pathname.includes('#'), ou('#', 'pathname', 'hash', o)),
      V(!o.search || !o.search.includes('#'), ou('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    l = i ? '/' : o.pathname,
    u;
  if (r || l == null) u = n;
  else {
    let p = t.length - 1;
    if (l.startsWith('..')) {
      let m = l.split('/');
      for (; m[0] === '..'; ) m.shift(), (p -= 1);
      o.pathname = m.join('/');
    }
    u = p >= 0 ? t[p] : '/';
  }
  let s = _0(o, u),
    a = l && l !== '/' && l.endsWith('/'),
    f = (i || l === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (a || f) && (s.pathname += '/'), s;
}
const zt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  x0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  C0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  R0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class ha {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = o),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function ah(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const ch = ['post', 'put', 'patch', 'delete'],
  P0 = new Set(ch),
  N0 = ['get', ...ch],
  T0 = new Set(N0),
  O0 = new Set([301, 302, 303, 307, 308]),
  L0 = new Set([307, 308]),
  iu = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  D0 = { state: 'idle', data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0 },
  tf = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  fh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  dh = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  z0 = !dh,
  M0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function A0(e) {
  V(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let t;
  if (e.mapRouteProperties) t = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let S = e.detectErrorBoundary;
    t = (E) => ({ hasErrorBoundary: S(E) });
  } else t = M0;
  let n = {},
    r = as(e.routes, t, void 0, n),
    o,
    i = e.basename || '/',
    l = X({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    u = null,
    s = new Set(),
    a = null,
    f = null,
    p = null,
    m = e.hydrationData != null,
    w = qn(r, e.history.location, i),
    y = null;
  if (w == null) {
    let S = st(404, { pathname: e.history.location.pathname }),
      { matches: E, route: k } = af(r);
    (w = E), (y = { [k.id]: S });
  }
  let v = !w.some((S) => S.route.lazy) && (!w.some((S) => S.route.loader) || e.hydrationData != null),
    R,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: w,
      initialized: v,
      navigation: iu,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || y,
      fetchers: new Map(),
      blockers: new Map(),
    },
    d = ce.Pop,
    h = !1,
    g,
    C = !1,
    N = !1,
    T = [],
    z = [],
    I = new Map(),
    H = 0,
    Ne = -1,
    ot = new Map(),
    it = new Set(),
    _t = new Map(),
    kt = new Map(),
    Je = new Map(),
    cn = !1;
  function O() {
    return (
      (u = e.history.listen((S) => {
        let { action: E, location: k, delta: D } = S;
        if (cn) {
          cn = !1;
          return;
        }
        pr(
          Je.size === 0 || D != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let M = Ea({ currentLocation: c.location, nextLocation: k, historyAction: E });
        if (M && D != null) {
          (cn = !0),
            e.history.go(D * -1),
            To(M, {
              state: 'blocked',
              location: k,
              proceed() {
                To(M, { state: 'proceeding', proceed: void 0, reset: void 0, location: k }), e.history.go(D);
              },
              reset() {
                _r(M), W({ blockers: new Map(R.state.blockers) });
              },
            });
          return;
        }
        return qe(E, k);
      })),
      c.initialized || qe(ce.Pop, c.location),
      R
    );
  }
  function U() {
    u && u(), s.clear(), g && g.abort(), c.fetchers.forEach((S, E) => gl(E)), c.blockers.forEach((S, E) => _r(E));
  }
  function $(S) {
    return s.add(S), () => s.delete(S);
  }
  function W(S) {
    (c = X({}, c, S)), s.forEach((E) => E(c));
  }
  function ne(S, E) {
    var k, D;
    let M =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        Pt(c.navigation.formMethod) &&
        c.navigation.state === 'loading' &&
        ((k = S.state) == null ? void 0 : k._isRedirect) !== !0,
      j;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (j = E.actionData)
        : (j = null)
      : M
      ? (j = c.actionData)
      : (j = null);
    let B = E.loaderData ? sf(c.loaderData, E.loaderData, E.matches || [], E.errors) : c.loaderData;
    for (let [A] of Je) _r(A);
    let F =
      h === !0 ||
      (c.navigation.formMethod != null &&
        Pt(c.navigation.formMethod) &&
        ((D = S.state) == null ? void 0 : D._isRedirect) !== !0);
    o && ((r = o), (o = void 0)),
      W(
        X({}, E, {
          actionData: j,
          loaderData: B,
          historyAction: d,
          location: S,
          initialized: !0,
          navigation: iu,
          revalidation: 'idle',
          restoreScrollPosition: _a(S, E.matches || c.matches),
          preventScrollReset: F,
          blockers: new Map(c.blockers),
        }),
      ),
      C ||
        d === ce.Pop ||
        (d === ce.Push ? e.history.push(S, S.state) : d === ce.Replace && e.history.replace(S, S.state)),
      (d = ce.Pop),
      (h = !1),
      (C = !1),
      (N = !1),
      (T = []),
      (z = []);
  }
  async function fn(S, E) {
    if (typeof S == 'number') {
      e.history.go(S);
      return;
    }
    let k = cs(
        c.location,
        c.matches,
        i,
        l.v7_prependBasename,
        S,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative,
      ),
      { path: D, submission: M, error: j } = nf(l.v7_normalizeFormMethod, !1, k, E),
      B = c.location,
      F = vo(c.location, D, E && E.state);
    F = X({}, F, e.history.encodeLocation(F));
    let A = E && E.replace != null ? E.replace : void 0,
      Y = ce.Push;
    A === !0
      ? (Y = ce.Replace)
      : A === !1 ||
        (M != null && Pt(M.formMethod) && M.formAction === c.location.pathname + c.location.search && (Y = ce.Replace));
    let Z = E && 'preventScrollReset' in E ? E.preventScrollReset === !0 : void 0,
      ke = Ea({ currentLocation: B, nextLocation: F, historyAction: Y });
    if (ke) {
      To(ke, {
        state: 'blocked',
        location: F,
        proceed() {
          To(ke, { state: 'proceeding', proceed: void 0, reset: void 0, location: F }), fn(S, E);
        },
        reset() {
          _r(ke), W({ blockers: new Map(c.blockers) });
        },
      });
      return;
    }
    return await qe(Y, F, { submission: M, pendingError: j, preventScrollReset: Z, replace: E && E.replace });
  }
  function xt() {
    if ((yl(), W({ revalidation: 'loading' }), c.navigation.state !== 'submitting')) {
      if (c.navigation.state === 'idle') {
        qe(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      qe(d || c.historyAction, c.navigation.location, { overrideNavigation: c.navigation });
    }
  }
  async function qe(S, E, k) {
    g && g.abort(),
      (g = null),
      (d = S),
      (C = (k && k.startUninterruptedRevalidation) === !0),
      Nh(c.location, c.matches),
      (h = (k && k.preventScrollReset) === !0);
    let D = o || r,
      M = k && k.overrideNavigation,
      j = qn(D, E, i);
    if (!j) {
      let ye = st(404, { pathname: E.pathname }),
        { matches: ve, route: Ye } = af(D);
      wl(), ne(E, { matches: ve, loaderData: {}, errors: { [Ye.id]: ye } });
      return;
    }
    if (c.initialized && B0(c.location, E) && !(k && k.submission && Pt(k.submission.formMethod))) {
      ne(E, { matches: j });
      return;
    }
    g = new AbortController();
    let B = Mr(e.history, E, g.signal, k && k.submission),
      F,
      A;
    if (k && k.pendingError) A = { [Yn(j).route.id]: k.pendingError };
    else if (k && k.submission && Pt(k.submission.formMethod)) {
      let ye = await Ct(B, E, k.submission, j, { replace: k.replace });
      if (ye.shortCircuited) return;
      (F = ye.pendingActionData),
        (A = ye.pendingActionError),
        (M = X({ state: 'loading', location: E }, k.submission)),
        (B = new Request(B.url, { signal: B.signal }));
    }
    let {
      shortCircuited: Y,
      loaderData: Z,
      errors: ke,
    } = await Ln(B, E, j, M, k && k.submission, k && k.fetcherSubmission, k && k.replace, F, A);
    Y || ((g = null), ne(E, X({ matches: j }, F ? { actionData: F } : {}, { loaderData: Z, errors: ke })));
  }
  async function Ct(S, E, k, D, M) {
    yl();
    let j = X({ state: 'submitting', location: E }, k);
    W({ navigation: j });
    let B,
      F = fs(D, E);
    if (!F.route.action && !F.route.lazy)
      B = { type: de.error, error: st(405, { method: S.method, pathname: E.pathname, routeId: F.route.id }) };
    else if (((B = await zr('action', S, F, D, n, t, i)), S.signal.aborted)) return { shortCircuited: !0 };
    if (nr(B)) {
      let A;
      return (
        M && M.replace != null ? (A = M.replace) : (A = B.location === c.location.pathname + c.location.search),
        await Er(c, B, { submission: k, replace: A }),
        { shortCircuited: !0 }
      );
    }
    if (qr(B)) {
      let A = Yn(D, F.route.id);
      return (
        (M && M.replace) !== !0 && (d = ce.Push),
        { pendingActionData: {}, pendingActionError: { [A.route.id]: B.error } }
      );
    }
    if (gn(B)) throw st(400, { type: 'defer-action' });
    return { pendingActionData: { [F.route.id]: B.data } };
  }
  async function Ln(S, E, k, D, M, j, B, F, A) {
    let Y = D;
    Y ||
      (Y = X(
        {
          state: 'loading',
          location: E,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        M,
      ));
    let Z =
        M || j
          ? M || j
          : Y.formMethod && Y.formAction && Y.formData && Y.formEncType
          ? { formMethod: Y.formMethod, formAction: Y.formAction, formData: Y.formData, formEncType: Y.formEncType }
          : void 0,
      ke = o || r,
      [ye, ve] = rf(e.history, c, k, Z, E, N, T, z, _t, ke, i, F, A);
    if (
      (wl((oe) => !(k && k.some((Xe) => Xe.route.id === oe)) || (ye && ye.some((Xe) => Xe.route.id === oe))),
      ye.length === 0 && ve.length === 0)
    ) {
      let oe = wa();
      return (
        ne(
          E,
          X(
            { matches: k, loaderData: {}, errors: A || null },
            F ? { actionData: F } : {},
            oe ? { fetchers: new Map(c.fetchers) } : {},
          ),
        ),
        { shortCircuited: !0 }
      );
    }
    if (!C) {
      ve.forEach((Xe) => {
        let zn = c.fetchers.get(Xe.key),
          xl = {
            state: 'loading',
            data: zn && zn.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          };
        c.fetchers.set(Xe.key, xl);
      });
      let oe = F || c.actionData;
      W(
        X(
          { navigation: Y },
          oe ? (Object.keys(oe).length === 0 ? { actionData: null } : { actionData: oe }) : {},
          ve.length > 0 ? { fetchers: new Map(c.fetchers) } : {},
        ),
      );
    }
    (Ne = ++H),
      ve.forEach((oe) => {
        oe.controller && I.set(oe.key, oe.controller);
      });
    let Ye = () => ve.forEach((oe) => Dn(oe.key));
    g && g.signal.addEventListener('abort', Ye);
    let { results: kr, loaderResults: Sl, fetcherResults: Oo } = await va(c.matches, k, ye, ve, S);
    if (S.signal.aborted) return { shortCircuited: !0 };
    g && g.signal.removeEventListener('abort', Ye), ve.forEach((oe) => I.delete(oe.key));
    let Bt = cf(kr);
    if (Bt) return await Er(c, Bt, { replace: B }), { shortCircuited: !0 };
    let { loaderData: Lo, errors: El } = uf(c, k, ye, Sl, A, ve, Oo, kt);
    kt.forEach((oe, Xe) => {
      oe.subscribe((zn) => {
        (zn || oe.done) && kt.delete(Xe);
      });
    });
    let _l = wa(),
      kl = Sa(Ne),
      Do = _l || kl || ve.length > 0;
    return X({ loaderData: Lo, errors: El }, Do ? { fetchers: new Map(c.fetchers) } : {});
  }
  function ya(S) {
    return c.fetchers.get(S) || D0;
  }
  function kh(S, E, k, D) {
    if (z0)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    I.has(S) && Dn(S);
    let M = o || r,
      j = cs(c.location, c.matches, i, l.v7_prependBasename, k, E, D == null ? void 0 : D.relative),
      B = qn(M, j, i);
    if (!B) {
      vl(S, E, st(404, { pathname: j }));
      return;
    }
    let { path: F, submission: A } = nf(l.v7_normalizeFormMethod, !0, j, D),
      Y = fs(B, F);
    if (((h = (D && D.preventScrollReset) === !0), A && Pt(A.formMethod))) {
      xh(S, E, F, Y, B, A);
      return;
    }
    _t.set(S, { routeId: E, path: F }), Ch(S, E, F, Y, B, A);
  }
  async function xh(S, E, k, D, M, j) {
    if ((yl(), _t.delete(S), !D.route.action && !D.route.lazy)) {
      let Ue = st(405, { method: j.formMethod, pathname: k, routeId: E });
      vl(S, E, Ue);
      return;
    }
    let B = c.fetchers.get(S),
      F = X({ state: 'submitting' }, j, { data: B && B.data, ' _hasFetcherDoneAnything ': !0 });
    c.fetchers.set(S, F), W({ fetchers: new Map(c.fetchers) });
    let A = new AbortController(),
      Y = Mr(e.history, k, A.signal, j);
    I.set(S, A);
    let Z = await zr('action', Y, D, M, n, t, i);
    if (Y.signal.aborted) {
      I.get(S) === A && I.delete(S);
      return;
    }
    if (nr(Z)) {
      I.delete(S), it.add(S);
      let Ue = X({ state: 'loading' }, j, { data: void 0, ' _hasFetcherDoneAnything ': !0 });
      return (
        c.fetchers.set(S, Ue),
        W({ fetchers: new Map(c.fetchers) }),
        Er(c, Z, { submission: j, isFetchActionRedirect: !0 })
      );
    }
    if (qr(Z)) {
      vl(S, E, Z.error);
      return;
    }
    if (gn(Z)) throw st(400, { type: 'defer-action' });
    let ke = c.navigation.location || c.location,
      ye = Mr(e.history, ke, A.signal),
      ve = o || r,
      Ye = c.navigation.state !== 'idle' ? qn(ve, c.navigation.location, i) : c.matches;
    V(Ye, "Didn't find any matches after fetcher action");
    let kr = ++H;
    ot.set(S, kr);
    let Sl = X({ state: 'loading', data: Z.data }, j, { ' _hasFetcherDoneAnything ': !0 });
    c.fetchers.set(S, Sl);
    let [Oo, Bt] = rf(e.history, c, Ye, j, ke, N, T, z, _t, ve, i, { [D.route.id]: Z.data }, void 0);
    Bt.filter((Ue) => Ue.key !== S).forEach((Ue) => {
      let Cl = Ue.key,
        ka = c.fetchers.get(Cl),
        Oh = {
          state: 'loading',
          data: ka && ka.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          ' _hasFetcherDoneAnything ': !0,
        };
      c.fetchers.set(Cl, Oh), Ue.controller && I.set(Cl, Ue.controller);
    }),
      W({ fetchers: new Map(c.fetchers) });
    let Lo = () => Bt.forEach((Ue) => Dn(Ue.key));
    A.signal.addEventListener('abort', Lo);
    let { results: El, loaderResults: _l, fetcherResults: kl } = await va(c.matches, Ye, Oo, Bt, ye);
    if (A.signal.aborted) return;
    A.signal.removeEventListener('abort', Lo), ot.delete(S), I.delete(S), Bt.forEach((Ue) => I.delete(Ue.key));
    let Do = cf(El);
    if (Do) return Er(c, Do);
    let { loaderData: oe, errors: Xe } = uf(c, c.matches, Oo, _l, void 0, Bt, kl, kt),
      zn = {
        state: 'idle',
        data: Z.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
    c.fetchers.set(S, zn);
    let xl = Sa(kr);
    c.navigation.state === 'loading' && kr > Ne
      ? (V(d, 'Expected pending action'),
        g && g.abort(),
        ne(c.navigation.location, { matches: Ye, loaderData: oe, errors: Xe, fetchers: new Map(c.fetchers) }))
      : (W(X({ errors: Xe, loaderData: sf(c.loaderData, oe, Ye, Xe) }, xl ? { fetchers: new Map(c.fetchers) } : {})),
        (N = !1));
  }
  async function Ch(S, E, k, D, M, j) {
    let B = c.fetchers.get(S),
      F = X({ state: 'loading', formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0 }, j, {
        data: B && B.data,
        ' _hasFetcherDoneAnything ': !0,
      });
    c.fetchers.set(S, F), W({ fetchers: new Map(c.fetchers) });
    let A = new AbortController(),
      Y = Mr(e.history, k, A.signal);
    I.set(S, A);
    let Z = await zr('loader', Y, D, M, n, t, i);
    if ((gn(Z) && (Z = (await yh(Z, Y.signal, !0)) || Z), I.get(S) === A && I.delete(S), Y.signal.aborted)) return;
    if (nr(Z)) {
      it.add(S), await Er(c, Z);
      return;
    }
    if (qr(Z)) {
      let ye = Yn(c.matches, E);
      c.fetchers.delete(S), W({ fetchers: new Map(c.fetchers), errors: { [ye.route.id]: Z.error } });
      return;
    }
    V(!gn(Z), 'Unhandled fetcher deferred data');
    let ke = {
      state: 'idle',
      data: Z.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      ' _hasFetcherDoneAnything ': !0,
    };
    c.fetchers.set(S, ke), W({ fetchers: new Map(c.fetchers) });
  }
  async function Er(S, E, k) {
    var D;
    let { submission: M, replace: j, isFetchActionRedirect: B } = k === void 0 ? {} : k;
    E.revalidate && (N = !0);
    let F = vo(S.location, E.location, X({ _isRedirect: !0 }, B ? { _isFetchActionRedirect: !0 } : {}));
    if (
      (V(F, 'Expected a location on the redirect navigation'),
      fh.test(E.location) && dh && typeof ((D = window) == null ? void 0 : D.location) < 'u')
    ) {
      let ve = e.history.createURL(E.location),
        Ye = gr(ve.pathname, i) == null;
      if (window.location.origin !== ve.origin || Ye) {
        j ? window.location.replace(E.location) : window.location.assign(E.location);
        return;
      }
    }
    g = null;
    let A = j === !0 ? ce.Replace : ce.Push,
      { formMethod: Y, formAction: Z, formEncType: ke, formData: ye } = S.navigation;
    !M && Y && Z && ye && ke && (M = { formMethod: Y, formAction: Z, formEncType: ke, formData: ye }),
      L0.has(E.status) && M && Pt(M.formMethod)
        ? await qe(A, F, { submission: X({}, M, { formAction: E.location }), preventScrollReset: h })
        : B
        ? await qe(A, F, {
            overrideNavigation: {
              state: 'loading',
              location: F,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
            },
            fetcherSubmission: M,
            preventScrollReset: h,
          })
        : await qe(A, F, {
            overrideNavigation: {
              state: 'loading',
              location: F,
              formMethod: M ? M.formMethod : void 0,
              formAction: M ? M.formAction : void 0,
              formEncType: M ? M.formEncType : void 0,
              formData: M ? M.formData : void 0,
            },
            preventScrollReset: h,
          });
  }
  async function va(S, E, k, D, M) {
    let j = await Promise.all([
        ...k.map((A) => zr('loader', M, A, E, n, t, i)),
        ...D.map((A) =>
          A.matches && A.match && A.controller
            ? zr('loader', Mr(e.history, A.path, A.controller.signal), A.match, A.matches, n, t, i)
            : { type: de.error, error: st(404, { pathname: A.path }) },
        ),
      ]),
      B = j.slice(0, k.length),
      F = j.slice(k.length);
    return (
      await Promise.all([
        ff(
          S,
          k,
          B,
          B.map(() => M.signal),
          !1,
          c.loaderData,
        ),
        ff(
          S,
          D.map((A) => A.match),
          F,
          D.map((A) => (A.controller ? A.controller.signal : null)),
          !0,
        ),
      ]),
      { results: j, loaderResults: B, fetcherResults: F }
    );
  }
  function yl() {
    (N = !0),
      T.push(...wl()),
      _t.forEach((S, E) => {
        I.has(E) && (z.push(E), Dn(E));
      });
  }
  function vl(S, E, k) {
    let D = Yn(c.matches, E);
    gl(S), W({ errors: { [D.route.id]: k }, fetchers: new Map(c.fetchers) });
  }
  function gl(S) {
    I.has(S) && Dn(S), _t.delete(S), ot.delete(S), it.delete(S), c.fetchers.delete(S);
  }
  function Dn(S) {
    let E = I.get(S);
    V(E, 'Expected fetch controller: ' + S), E.abort(), I.delete(S);
  }
  function ga(S) {
    for (let E of S) {
      let D = {
        state: 'idle',
        data: ya(E).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
      c.fetchers.set(E, D);
    }
  }
  function wa() {
    let S = [],
      E = !1;
    for (let k of it) {
      let D = c.fetchers.get(k);
      V(D, 'Expected fetcher: ' + k), D.state === 'loading' && (it.delete(k), S.push(k), (E = !0));
    }
    return ga(S), E;
  }
  function Sa(S) {
    let E = [];
    for (let [k, D] of ot)
      if (D < S) {
        let M = c.fetchers.get(k);
        V(M, 'Expected fetcher: ' + k), M.state === 'loading' && (Dn(k), ot.delete(k), E.push(k));
      }
    return ga(E), E.length > 0;
  }
  function Rh(S, E) {
    let k = c.blockers.get(S) || tf;
    return Je.get(S) !== E && Je.set(S, E), k;
  }
  function _r(S) {
    c.blockers.delete(S), Je.delete(S);
  }
  function To(S, E) {
    let k = c.blockers.get(S) || tf;
    V(
      (k.state === 'unblocked' && E.state === 'blocked') ||
        (k.state === 'blocked' && E.state === 'blocked') ||
        (k.state === 'blocked' && E.state === 'proceeding') ||
        (k.state === 'blocked' && E.state === 'unblocked') ||
        (k.state === 'proceeding' && E.state === 'unblocked'),
      'Invalid blocker state transition: ' + k.state + ' -> ' + E.state,
    ),
      c.blockers.set(S, E),
      W({ blockers: new Map(c.blockers) });
  }
  function Ea(S) {
    let { currentLocation: E, nextLocation: k, historyAction: D } = S;
    if (Je.size === 0) return;
    Je.size > 1 && pr(!1, 'A router only supports one blocker at a time');
    let M = Array.from(Je.entries()),
      [j, B] = M[M.length - 1],
      F = c.blockers.get(j);
    if (!(F && F.state === 'proceeding') && B({ currentLocation: E, nextLocation: k, historyAction: D })) return j;
  }
  function wl(S) {
    let E = [];
    return (
      kt.forEach((k, D) => {
        (!S || S(D)) && (k.cancel(), E.push(D), kt.delete(D));
      }),
      E
    );
  }
  function Ph(S, E, k) {
    if (((a = S), (p = E), (f = k || ((D) => D.key)), !m && c.navigation === iu)) {
      m = !0;
      let D = _a(c.location, c.matches);
      D != null && W({ restoreScrollPosition: D });
    }
    return () => {
      (a = null), (p = null), (f = null);
    };
  }
  function Nh(S, E) {
    if (a && f && p) {
      let k = E.map((M) => df(M, c.loaderData)),
        D = f(S, k) || S.key;
      a[D] = p();
    }
  }
  function _a(S, E) {
    if (a && f && p) {
      let k = E.map((j) => df(j, c.loaderData)),
        D = f(S, k) || S.key,
        M = a[D];
      if (typeof M == 'number') return M;
    }
    return null;
  }
  function Th(S) {
    (n = {}), (o = as(S, t, void 0, n));
  }
  return (
    (R = {
      get basename() {
        return i;
      },
      get state() {
        return c;
      },
      get routes() {
        return r;
      },
      initialize: O,
      subscribe: $,
      enableScrollRestoration: Ph,
      navigate: fn,
      fetch: kh,
      revalidate: xt,
      createHref: (S) => e.history.createHref(S),
      encodeLocation: (S) => e.history.encodeLocation(S),
      getFetcher: ya,
      deleteFetcher: gl,
      dispose: U,
      getBlocker: Rh,
      deleteBlocker: _r,
      _internalFetchControllers: I,
      _internalActiveDeferreds: kt,
      _internalSetRoutes: Th,
    }),
    R
  );
}
function F0(e) {
  return e != null && 'formData' in e;
}
function cs(e, t, n, r, o, i, l) {
  let u, s;
  if (i != null && l !== 'path') {
    u = [];
    for (let f of t)
      if ((u.push(f), f.route.id === i)) {
        s = f;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let a = pl(
    o || '.',
    Po(u).map((f) => f.pathnameBase),
    gr(e.pathname, n) || e.pathname,
    l === 'path',
  );
  return (
    o == null && ((a.search = e.search), (a.hash = e.hash)),
    (o == null || o === '' || o === '.') &&
      s &&
      s.route.index &&
      !ma(a.search) &&
      (a.search = a.search ? a.search.replace(/^\?/, '?index&') : '?index'),
    r && n !== '/' && (a.pathname = a.pathname === '/' ? n : zt([n, a.pathname])),
    Nn(a)
  );
}
function nf(e, t, n, r) {
  if (!r || !F0(r)) return { path: n };
  if (r.formMethod && !W0(r.formMethod)) return { path: n, error: st(405, { method: r.formMethod }) };
  let o;
  if (r.formData) {
    let u = r.formMethod || 'get';
    if (
      ((o = {
        formMethod: e ? u.toUpperCase() : u.toLowerCase(),
        formAction: mh(n),
        formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
        formData: r.formData,
      }),
      Pt(o.formMethod))
    )
      return { path: n, submission: o };
  }
  let i = It(n),
    l = hh(r.formData);
  return t && i.search && ma(i.search) && l.append('index', ''), (i.search = '?' + l), { path: Nn(i), submission: o };
}
function j0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function rf(e, t, n, r, o, i, l, u, s, a, f, p, m) {
  let w = m ? Object.values(m)[0] : p ? Object.values(p)[0] : void 0,
    y = e.createURL(t.location),
    v = e.createURL(o),
    R = m ? Object.keys(m)[0] : void 0,
    d = j0(n, R).filter((g, C) => {
      if (g.route.lazy) return !0;
      if (g.route.loader == null) return !1;
      if (U0(t.loaderData, t.matches[C], g) || l.some((z) => z === g.route.id)) return !0;
      let N = t.matches[C],
        T = g;
      return of(
        g,
        X({ currentUrl: y, currentParams: N.params, nextUrl: v, nextParams: T.params }, r, {
          actionResult: w,
          defaultShouldRevalidate:
            i || y.pathname + y.search === v.pathname + v.search || y.search !== v.search || ph(N, T),
        }),
      );
    }),
    h = [];
  return (
    s.forEach((g, C) => {
      if (!n.some((I) => I.route.id === g.routeId)) return;
      let N = qn(a, g.path, f);
      if (!N) {
        h.push({ key: C, routeId: g.routeId, path: g.path, matches: null, match: null, controller: null });
        return;
      }
      let T = fs(N, g.path);
      if (u.includes(C)) {
        h.push({ key: C, routeId: g.routeId, path: g.path, matches: N, match: T, controller: new AbortController() });
        return;
      }
      of(
        T,
        X(
          {
            currentUrl: y,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: v,
            nextParams: n[n.length - 1].params,
          },
          r,
          { actionResult: w, defaultShouldRevalidate: i },
        ),
      ) &&
        h.push({ key: C, routeId: g.routeId, path: g.path, matches: N, match: T, controller: new AbortController() });
    }),
    [d, h]
  );
}
function U0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function ph(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || (n != null && n.endsWith('*') && e.params['*'] !== t.params['*']);
}
function of(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function lf(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  V(o, 'No route found in manifest');
  let i = {};
  for (let l in r) {
    let s = o[l] !== void 0 && l !== 'hasErrorBoundary';
    pr(
      !s,
      'Route "' +
        o.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.'),
    ),
      !s && !l0.has(l) && (i[l] = r[l]);
  }
  Object.assign(o, i), Object.assign(o, X({}, t(o), { lazy: void 0 }));
}
async function zr(e, t, n, r, o, i, l, u, s, a) {
  u === void 0 && (u = !1), s === void 0 && (s = !1);
  let f,
    p,
    m,
    w = (R) => {
      let c,
        d = new Promise((h, g) => (c = g));
      return (
        (m = () => c()),
        t.signal.addEventListener('abort', m),
        Promise.race([R({ request: t, params: n.params, context: a }), d])
      );
    };
  try {
    let R = n.route[e];
    if (n.route.lazy)
      if (R) p = (await Promise.all([w(R), lf(n.route, i, o)]))[0];
      else if ((await lf(n.route, i, o), (R = n.route[e]), R)) p = await w(R);
      else if (e === 'action') {
        let c = new URL(t.url),
          d = c.pathname + c.search;
        throw st(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: de.data, data: void 0 };
    else if (R) p = await w(R);
    else {
      let c = new URL(t.url),
        d = c.pathname + c.search;
      throw st(404, { pathname: d });
    }
    V(
      p !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') +
        'function. Please return a value or `null`.',
    );
  } catch (R) {
    (f = de.error), (p = R);
  } finally {
    m && t.signal.removeEventListener('abort', m);
  }
  if (H0(p)) {
    let R = p.status;
    if (O0.has(R)) {
      let h = p.headers.get('Location');
      if ((V(h, 'Redirects returned/thrown from loaders/actions must have a Location header'), !fh.test(h)))
        h = cs(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, h);
      else if (!u) {
        let g = new URL(t.url),
          C = h.startsWith('//') ? new URL(g.protocol + h) : new URL(h),
          N = gr(C.pathname, l) != null;
        C.origin === g.origin && N && (h = C.pathname + C.search + C.hash);
      }
      if (u) throw (p.headers.set('Location', h), p);
      return { type: de.redirect, status: R, location: h, revalidate: p.headers.get('X-Remix-Revalidate') !== null };
    }
    if (s) throw { type: f || de.data, response: p };
    let c,
      d = p.headers.get('Content-Type');
    return (
      d && /\bapplication\/json\b/.test(d) ? (c = await p.json()) : (c = await p.text()),
      f === de.error
        ? { type: f, error: new ha(R, p.statusText, c), headers: p.headers }
        : { type: de.data, data: c, statusCode: p.status, headers: p.headers }
    );
  }
  if (f === de.error) return { type: f, error: p };
  if ($0(p)) {
    var y, v;
    return {
      type: de.deferred,
      deferredData: p,
      statusCode: (y = p.init) == null ? void 0 : y.status,
      headers: ((v = p.init) == null ? void 0 : v.headers) && new Headers(p.init.headers),
    };
  }
  return { type: de.data, data: p };
}
function Mr(e, t, n, r) {
  let o = e.createURL(mh(t)).toString(),
    i = { signal: n };
  if (r && Pt(r.formMethod)) {
    let { formMethod: l, formEncType: u, formData: s } = r;
    (i.method = l.toUpperCase()), (i.body = u === 'application/x-www-form-urlencoded' ? hh(s) : s);
  }
  return new Request(o, i);
}
function hh(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
  return t;
}
function I0(e, t, n, r, o) {
  let i = {},
    l = null,
    u,
    s = !1,
    a = {};
  return (
    n.forEach((f, p) => {
      let m = t[p].route.id;
      if ((V(!nr(f), 'Cannot handle redirect results in processLoaderData'), qr(f))) {
        let w = Yn(e, m),
          y = f.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[w.route.id] == null && (l[w.route.id] = y),
          (i[m] = void 0),
          s || ((s = !0), (u = ah(f.error) ? f.error.status : 500)),
          f.headers && (a[m] = f.headers);
      } else
        gn(f) ? (o.set(m, f.deferredData), (i[m] = f.deferredData.data)) : (i[m] = f.data),
          f.statusCode != null && f.statusCode !== 200 && !s && (u = f.statusCode),
          f.headers && (a[m] = f.headers);
    }),
    r && ((l = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: l, statusCode: u || 200, loaderHeaders: a }
  );
}
function uf(e, t, n, r, o, i, l, u) {
  let { loaderData: s, errors: a } = I0(t, n, r, o, u);
  for (let f = 0; f < i.length; f++) {
    let { key: p, match: m, controller: w } = i[f];
    V(l !== void 0 && l[f] !== void 0, 'Did not find corresponding fetcher result');
    let y = l[f];
    if (!(w && w.signal.aborted))
      if (qr(y)) {
        let v = Yn(e.matches, m == null ? void 0 : m.route.id);
        (a && a[v.route.id]) || (a = X({}, a, { [v.route.id]: y.error })), e.fetchers.delete(p);
      } else if (nr(y)) V(!1, 'Unhandled fetcher revalidation redirect');
      else if (gn(y)) V(!1, 'Unhandled fetcher deferred data');
      else {
        let v = {
          state: 'idle',
          data: y.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          ' _hasFetcherDoneAnything ': !0,
        };
        e.fetchers.set(p, v);
      }
  }
  return { loaderData: s, errors: a };
}
function sf(e, t, n, r) {
  let o = X({}, t);
  for (let i of n) {
    let l = i.route.id;
    if (
      (t.hasOwnProperty(l) ? t[l] !== void 0 && (o[l] = t[l]) : e[l] !== void 0 && i.route.loader && (o[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return o;
}
function Yn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function af(e) {
  let t = e.find((n) => n.index || !n.path || n.path === '/') || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function st(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    l = 'Unknown Server Error',
    u = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((l = 'Bad Request'),
        o && n && r
          ? (u =
              'You made a ' +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i === 'defer-action' && (u = 'defer() is not supported in actions'))
      : e === 403
      ? ((l = 'Forbidden'), (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((l = 'Not Found'), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((l = 'Method Not Allowed'),
        o && n && r
          ? (u =
              'You made a ' +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o && (u = 'Invalid request method "' + o.toUpperCase() + '"')),
    new ha(e || 500, l, new Error(u), !0)
  );
}
function cf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (nr(n)) return n;
  }
}
function mh(e) {
  let t = typeof e == 'string' ? It(e) : e;
  return Nn(X({}, t, { hash: '' }));
}
function B0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== '';
}
function gn(e) {
  return e.type === de.deferred;
}
function qr(e) {
  return e.type === de.error;
}
function nr(e) {
  return (e && e.type) === de.redirect;
}
function $0(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function H0(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function W0(e) {
  return T0.has(e.toLowerCase());
}
function Pt(e) {
  return P0.has(e.toLowerCase());
}
async function ff(e, t, n, r, o, i) {
  for (let l = 0; l < n.length; l++) {
    let u = n[l],
      s = t[l];
    if (!s) continue;
    let a = e.find((p) => p.route.id === s.route.id),
      f = a != null && !ph(a, s) && (i && i[s.route.id]) !== void 0;
    if (gn(u) && (o || f)) {
      let p = r[l];
      V(p, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await yh(u, p, o).then((m) => {
          m && (n[l] = m || n[l]);
        });
    }
  }
}
async function yh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: de.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: de.error, error: o };
      }
    return { type: de.data, data: e.deferredData.data };
  }
}
function ma(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function df(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function fs(e, t) {
  let n = typeof t == 'string' ? It(t).search : t.search;
  if (e[e.length - 1].route.index && ma(n || '')) return e[e.length - 1];
  let r = Po(e);
  return r[r.length - 1];
}
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bi() {
  return (
    (Bi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bi.apply(this, arguments)
  );
}
const hl = P.createContext(null),
  vh = P.createContext(null),
  wr = P.createContext(null),
  ml = P.createContext(null),
  an = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  gh = P.createContext(null);
function V0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Sr() || V(!1);
  let { basename: r, navigator: o } = P.useContext(wr),
    { hash: i, pathname: l, search: u } = Eh(e, { relative: n }),
    s = l;
  return r !== '/' && (s = l === '/' ? r : zt([r, l])), o.createHref({ pathname: s, search: u, hash: i });
}
function Sr() {
  return P.useContext(ml) != null;
}
function No() {
  return Sr() || V(!1), P.useContext(ml).location;
}
function wh(e) {
  P.useContext(wr).static || P.useLayoutEffect(e);
}
function Sh() {
  let { isDataRoute: e } = P.useContext(an);
  return e ? n1() : Q0();
}
function Q0() {
  Sr() || V(!1);
  let e = P.useContext(hl),
    { basename: t, navigator: n } = P.useContext(wr),
    { matches: r } = P.useContext(an),
    { pathname: o } = No(),
    i = JSON.stringify(Po(r).map((s) => s.pathnameBase)),
    l = P.useRef(!1);
  return (
    wh(() => {
      l.current = !0;
    }),
    P.useCallback(
      function (s, a) {
        if ((a === void 0 && (a = {}), !l.current)) return;
        if (typeof s == 'number') {
          n.go(s);
          return;
        }
        let f = pl(s, JSON.parse(i), o, a.relative === 'path');
        e == null && t !== '/' && (f.pathname = f.pathname === '/' ? t : zt([t, f.pathname])),
          (a.replace ? n.replace : n.push)(f, a.state, a);
      },
      [t, n, i, o, e],
    )
  );
}
function Eh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = P.useContext(an),
    { pathname: o } = No(),
    i = JSON.stringify(Po(r).map((l) => l.pathnameBase));
  return P.useMemo(() => pl(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function K0(e, t, n) {
  Sr() || V(!1);
  let { navigator: r } = P.useContext(wr),
    { matches: o } = P.useContext(an),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : '/';
  i && i.route;
  let s = No(),
    a;
  if (t) {
    var f;
    let v = typeof t == 'string' ? It(t) : t;
    u === '/' || ((f = v.pathname) != null && f.startsWith(u)) || V(!1), (a = v);
  } else a = s;
  let p = a.pathname || '/',
    m = u === '/' ? p : p.slice(u.length) || '/',
    w = qn(e, { pathname: m }),
    y = G0(
      w &&
        w.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, l, v.params),
            pathname: zt([u, r.encodeLocation ? r.encodeLocation(v.pathname).pathname : v.pathname]),
            pathnameBase:
              v.pathnameBase === '/'
                ? u
                : zt([u, r.encodeLocation ? r.encodeLocation(v.pathnameBase).pathname : v.pathnameBase]),
          }),
        ),
      o,
      n,
    );
  return t && y
    ? P.createElement(
        ml.Provider,
        {
          value: {
            location: Bi({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, a),
            navigationType: ce.Pop,
          },
        },
        y,
      )
    : y;
}
function J0() {
  let e = t1(),
    t = ah(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null;
  return P.createElement(
    P.Fragment,
    null,
    P.createElement('h2', null, 'Unexpected Application Error!'),
    P.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? P.createElement('pre', { style: o }, n) : null,
    i,
  );
}
const q0 = P.createElement(J0, null);
class Y0 extends P.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : { error: t.error || n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error
      ? P.createElement(
          an.Provider,
          { value: this.props.routeContext },
          P.createElement(gh.Provider, { value: this.state.error, children: this.props.component }),
        )
      : this.props.children;
  }
}
function X0(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = P.useContext(hl);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(an.Provider, { value: t }, r)
  );
}
function G0(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let u = i.findIndex((s) => s.route.id && (l == null ? void 0 : l[s.route.id]));
    u >= 0 || V(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
  }
  return i.reduceRight((u, s, a) => {
    let f = s.route.id ? (l == null ? void 0 : l[s.route.id]) : null,
      p = null;
    n && (p = s.route.errorElement || q0);
    let m = t.concat(i.slice(0, a + 1)),
      w = () => {
        let y;
        return (
          f
            ? (y = p)
            : s.route.Component
            ? (y = P.createElement(s.route.Component, null))
            : s.route.element
            ? (y = s.route.element)
            : (y = u),
          P.createElement(X0, {
            match: s,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? P.createElement(Y0, {
          location: n.location,
          revalidation: n.revalidation,
          component: p,
          error: f,
          children: w(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : w();
  }, null);
}
var ds;
(function (e) {
  (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate');
})(ds || (ds = {}));
var go;
(function (e) {
  (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId');
})(go || (go = {}));
function Z0(e) {
  let t = P.useContext(hl);
  return t || V(!1), t;
}
function b0(e) {
  let t = P.useContext(vh);
  return t || V(!1), t;
}
function e1(e) {
  let t = P.useContext(an);
  return t || V(!1), t;
}
function _h(e) {
  let t = e1(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function t1() {
  var e;
  let t = P.useContext(gh),
    n = b0(go.UseRouteError),
    r = _h(go.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function n1() {
  let { router: e } = Z0(ds.UseNavigateStable),
    t = _h(go.UseNavigateStable),
    n = P.useRef(!1);
  return (
    wh(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current && (typeof o == 'number' ? e.navigate(o) : e.navigate(o, Bi({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function r1(e) {
  let { fallbackElement: t, router: n } = e,
    [r, o] = P.useState(n.state);
  P.useLayoutEffect(() => n.subscribe(o), [n, o]);
  let i = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (s) => n.navigate(s),
        push: (s, a, f) => n.navigate(s, { state: a, preventScrollReset: f == null ? void 0 : f.preventScrollReset }),
        replace: (s, a, f) =>
          n.navigate(s, { replace: !0, state: a, preventScrollReset: f == null ? void 0 : f.preventScrollReset }),
      }),
      [n],
    ),
    l = n.basename || '/',
    u = P.useMemo(() => ({ router: n, navigator: i, static: !1, basename: l }), [n, i, l]);
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      hl.Provider,
      { value: u },
      P.createElement(
        vh.Provider,
        { value: r },
        P.createElement(
          l1,
          { basename: n.basename, location: n.state.location, navigationType: n.state.historyAction, navigator: i },
          n.state.initialized ? P.createElement(o1, { routes: n.routes, state: r }) : t,
        ),
      ),
    ),
    null,
  );
}
function o1(e) {
  let { routes: t, state: n } = e;
  return K0(t, void 0, n);
}
function i1(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Sr() || V(!1);
  let { matches: i } = P.useContext(an),
    { pathname: l } = No(),
    u = Sh(),
    s = pl(
      t,
      Po(i).map((f) => f.pathnameBase),
      l,
      o === 'path',
    ),
    a = JSON.stringify(s);
  return P.useEffect(() => u(JSON.parse(a), { replace: n, state: r, relative: o }), [u, a, o, n, r]), null;
}
function l1(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = ce.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  Sr() && V(!1);
  let u = t.replace(/^\/*/, '/'),
    s = P.useMemo(() => ({ basename: u, navigator: i, static: l }), [u, i, l]);
  typeof r == 'string' && (r = It(r));
  let { pathname: a = '/', search: f = '', hash: p = '', state: m = null, key: w = 'default' } = r,
    y = P.useMemo(() => {
      let v = gr(a, u);
      return v == null ? null : { location: { pathname: v, search: f, hash: p, state: m, key: w }, navigationType: o };
    }, [u, a, f, p, m, w, o]);
  return y == null
    ? null
    : P.createElement(wr.Provider, { value: s }, P.createElement(ml.Provider, { children: n, value: y }));
}
var pf;
(function (e) {
  (e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error');
})(pf || (pf = {}));
new Promise(() => {});
function u1(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: P.createElement(e.Component), Component: void 0 }),
    e.ErrorBoundary && Object.assign(t, { errorElement: P.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
    t
  );
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wo() {
  return (
    (wo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wo.apply(this, arguments)
  );
}
function s1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function a1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function c1(e, t) {
  return e.button === 0 && (!t || t === '_self') && !a1(e);
}
const f1 = ['onClick', 'relative', 'reloadDocument', 'replace', 'state', 'target', 'to', 'preventScrollReset'];
function d1(e, t) {
  return A0({
    basename: t == null ? void 0 : t.basename,
    future: wo({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: r0({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || p1(),
    routes: e,
    mapRouteProperties: u1,
  }).initialize();
}
function p1() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = wo({}, t, { errors: h1(t.errors) })), t;
}
function h1(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === 'RouteErrorResponse') n[r] = new ha(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === 'Error') {
      let i = new Error(o.message);
      (i.stack = ''), (n[r] = i);
    } else n[r] = o;
  return n;
}
const m1 = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  y1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  v1 = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: u,
        target: s,
        to: a,
        preventScrollReset: f,
      } = t,
      p = s1(t, f1),
      { basename: m } = P.useContext(wr),
      w,
      y = !1;
    if (typeof a == 'string' && y1.test(a) && ((w = a), m1))
      try {
        let d = new URL(window.location.href),
          h = a.startsWith('//') ? new URL(d.protocol + a) : new URL(a),
          g = gr(h.pathname, m);
        h.origin === d.origin && g != null ? (a = g + h.search + h.hash) : (y = !0);
      } catch {}
    let v = V0(a, { relative: o }),
      R = g1(a, { replace: l, state: u, target: s, preventScrollReset: f, relative: o });
    function c(d) {
      r && r(d), d.defaultPrevented || R(d);
    }
    return P.createElement('a', wo({}, p, { href: w || v, onClick: y || i ? r : c, ref: n, target: s }));
  });
var hf;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'), (e.UseSubmitImpl = 'useSubmitImpl'), (e.UseFetcher = 'useFetcher');
})(hf || (hf = {}));
var mf;
(function (e) {
  (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(mf || (mf = {}));
function g1(e, t) {
  let { target: n, replace: r, state: o, preventScrollReset: i, relative: l } = t === void 0 ? {} : t,
    u = Sh(),
    s = No(),
    a = Eh(e, { relative: l });
  return P.useCallback(
    (f) => {
      if (c1(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : Nn(s) === Nn(a);
        u(e, { replace: p, state: o, preventScrollReset: i, relative: l });
      }
    },
    [s, u, a, r, o, n, e, i, l],
  );
}
const w1 = '_marginLeft_p80pq_1',
  S1 = { marginLeft: w1 };
function E1() {
  const [e, t] = P.useState(!1),
    n = () => {
      t(!0);
    };
  return K.jsxs(K.Fragment, {
    children: [
      K.jsx('h1', { children: 'QUIZ MAKER' }),
      K.jsx(n0, {}),
      K.jsx(Bp, { onQuizFinished: n }),
      e && K.jsx(v1, { to: '/results', role: 'button', className: `buttonLink ${S1.marginLeft}`, children: 'Submit' }),
    ],
  });
}
function _1() {
  return K.jsxs('div', { children: [K.jsx('h1', { children: 'RESULTS' }), K.jsx(Bp, { showCorrection: !0 })] });
}
function k1({ children: e }) {
  const t = Up(),
    n = t.filter((o) => o.selectedOptionId).length;
  return t.length > 0 && n === t.length ? e : K.jsx(i1, { replace: !0, to: '/' });
}
function x1() {
  const e = d1([
    { path: '/', element: K.jsx(E1, {}) },
    { path: '/results', element: K.jsx(k1, { children: K.jsx(_1, {}) }) },
  ]);
  return K.jsx(vv, { children: K.jsx(r1, { router: e }) });
}
lu.createRoot(document.getElementById('root')).render(K.jsx(Jh.StrictMode, { children: K.jsx(x1, {}) }));
