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
function _h(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var cf = { exports: {} },
  Mi = {},
  ff = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fo = Symbol.for('react.element'),
  kh = Symbol.for('react.portal'),
  xh = Symbol.for('react.fragment'),
  Ch = Symbol.for('react.strict_mode'),
  Rh = Symbol.for('react.profiler'),
  Ph = Symbol.for('react.provider'),
  Nh = Symbol.for('react.context'),
  Th = Symbol.for('react.forward_ref'),
  Oh = Symbol.for('react.suspense'),
  Lh = Symbol.for('react.memo'),
  Dh = Symbol.for('react.lazy'),
  ga = Symbol.iterator;
function zh(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ga && e[ga]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var df = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  pf = Object.assign,
  hf = {};
function fr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = hf), (this.updater = n || df);
}
fr.prototype.isReactComponent = {};
fr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function mf() {}
mf.prototype = fr.prototype;
function ls(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = hf), (this.updater = n || df);
}
var us = (ls.prototype = new mf());
us.constructor = ls;
pf(us, fr.prototype);
us.isPureReactComponent = !0;
var wa = Array.isArray,
  yf = Object.prototype.hasOwnProperty,
  ss = { current: null },
  vf = { key: !0, ref: !0, __self: !0, __source: !0 };
function gf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      yf.call(t, r) && !vf.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: fo, type: e, key: i, ref: l, props: o, _owner: ss.current };
}
function Mh(e, t) {
  return { $$typeof: fo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function as(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === fo;
}
function Fh(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Sa = /\/+/g;
function gl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Fh('' + e.key) : t.toString(36);
}
function Ho(e, t, n, r, o) {
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
          case fo:
          case kh:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + gl(l, 0) : r),
      wa(o)
        ? ((n = ''),
          e != null && (n = e.replace(Sa, '$&/') + '/'),
          Ho(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (as(o) &&
            (o = Mh(o, n + (!o.key || (l && l.key === o.key) ? '' : ('' + o.key).replace(Sa, '$&/') + '/') + e)),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), wa(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + gl(i, u);
      l += Ho(i, t, n, s, o);
    }
  else if (((s = zh(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; ) (i = i.value), (s = r + gl(i, u++)), (l += Ho(i, t, n, s, o));
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
function Co(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ho(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Ah(e) {
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
  Wo = { transition: null },
  Uh = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: Wo, ReactCurrentOwner: ss };
V.Children = {
  map: Co,
  forEach: function (e, t, n) {
    Co(
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
      Co(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Co(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!as(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
V.Component = fr;
V.Fragment = xh;
V.Profiler = Rh;
V.PureComponent = ls;
V.StrictMode = Ch;
V.Suspense = Oh;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uh;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = pf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = ss.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t) yf.call(t, s) && !vf.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: fo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: Nh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ph, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = gf;
V.createFactory = function (e) {
  var t = gf.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: Th, render: e };
};
V.isValidElement = as;
V.lazy = function (e) {
  return { $$typeof: Dh, _payload: { _status: -1, _result: e }, _init: Ah };
};
V.memo = function (e, t) {
  return { $$typeof: Lh, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Wo.transition;
  Wo.transition = {};
  try {
    e();
  } finally {
    Wo.transition = t;
  }
};
V.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
V.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Le.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
V.useId = function () {
  return Le.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Le.current.useRef(e);
};
V.useState = function (e) {
  return Le.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Le.current.useTransition();
};
V.version = '18.2.0';
ff.exports = V;
var M = ff.exports;
const jh = _h(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ih = M,
  Bh = Symbol.for('react.element'),
  $h = Symbol.for('react.fragment'),
  Hh = Object.prototype.hasOwnProperty,
  Wh = Ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Vh = { key: !0, ref: !0, __self: !0, __source: !0 };
function wf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Hh.call(t, r) && !Vh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Bh, type: e, key: i, ref: l, props: o, _owner: Wh.current };
}
Mi.Fragment = $h;
Mi.jsx = wf;
Mi.jsxs = wf;
cf.exports = Mi;
var X = cf.exports,
  Zl = {},
  Sf = { exports: {} },
  Qe = {},
  Ef = { exports: {} },
  _f = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, j) {
    var $ = T.length;
    T.push(j);
    e: for (; 0 < $; ) {
      var W = ($ - 1) >>> 1,
        ne = T[W];
      if (0 < o(ne, j)) (T[W] = j), (T[$] = ne), ($ = W);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var j = T[0],
      $ = T.pop();
    if ($ !== j) {
      T[0] = $;
      e: for (var W = 0, ne = T.length, an = ne >>> 1; W < an; ) {
        var xt = 2 * (W + 1) - 1,
          qe = T[xt],
          Ct = xt + 1,
          Tn = T[Ct];
        if (0 > o(qe, $))
          Ct < ne && 0 > o(Tn, qe) ? ((T[W] = Tn), (T[Ct] = $), (W = Ct)) : ((T[W] = qe), (T[xt] = $), (W = xt));
        else if (Ct < ne && 0 > o(Tn, $)) (T[W] = Tn), (T[Ct] = $), (W = Ct);
        else break e;
      }
    }
    return j;
  }
  function o(T, j) {
    var $ = T.sortIndex - j.sortIndex;
    return $ !== 0 ? $ : T.id - j.id;
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
  function h(T) {
    for (var j = n(a); j !== null; ) {
      if (j.callback === null) r(a);
      else if (j.startTime <= T) r(a), (j.sortIndex = j.expirationTime), t(s, j);
      else break;
      j = n(a);
    }
  }
  function g(T) {
    if (((v = !1), h(T), !y))
      if (n(s) !== null) (y = !0), Ye(C);
      else {
        var j = n(a);
        j !== null && sn(g, j.startTime - T);
      }
  }
  function C(T, j) {
    (y = !1), v && ((v = !1), c(D), (D = -1)), (w = !0);
    var $ = m;
    try {
      for (h(j), p = n(s); p !== null && (!(p.expirationTime > j) || (T && !Ne())); ) {
        var W = p.callback;
        if (typeof W == 'function') {
          (p.callback = null), (m = p.priorityLevel);
          var ne = W(p.expirationTime <= j);
          (j = e.unstable_now()), typeof ne == 'function' ? (p.callback = ne) : p === n(s) && r(s), h(j);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var an = !0;
      else {
        var xt = n(a);
        xt !== null && sn(g, xt.startTime - j), (an = !1);
      }
      return an;
    } finally {
      (p = null), (m = $), (w = !1);
    }
  }
  var P = !1,
    N = null,
    D = -1,
    I = 5,
    H = -1;
  function Ne() {
    return !(e.unstable_now() - H < I);
  }
  function ot() {
    if (N !== null) {
      var T = e.unstable_now();
      H = T;
      var j = !0;
      try {
        j = N(!0, T);
      } finally {
        j ? it() : ((P = !1), (N = null));
      }
    } else P = !1;
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
  function Ye(T) {
    (N = T), P || ((P = !0), it());
  }
  function sn(T, j) {
    D = R(function () {
      T(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), Ye(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (I = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (T) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = m;
      }
      var $ = m;
      m = j;
      try {
        return T();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, j) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var $ = m;
      m = T;
      try {
        return j();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (T, j, $) {
      var W = e.unstable_now();
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? W + $ : W))
          : ($ = W),
        T)
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
        (T = { id: f++, callback: j, priorityLevel: T, startTime: $, expirationTime: ne, sortIndex: -1 }),
        $ > W
          ? ((T.sortIndex = $), t(a, T), n(s) === null && T === n(a) && (v ? (c(D), (D = -1)) : (v = !0), sn(g, $ - W)))
          : ((T.sortIndex = ne), t(s, T), y || w || ((y = !0), Ye(C))),
        T
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (T) {
      var j = m;
      return function () {
        var $ = m;
        m = j;
        try {
          return T.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(_f);
Ef.exports = _f;
var Qh = Ef.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kf = M,
  He = Qh;
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
var xf = new Set(),
  Wr = {};
function Pn(e, t) {
  er(e, t), er(e + 'Capture', t);
}
function er(e, t) {
  for (Wr[e] = t, e = 0; e < t.length; e++) xf.add(t[e]);
}
var zt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  bl = Object.prototype.hasOwnProperty,
  Kh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ea = {},
  _a = {};
function Yh(e) {
  return bl.call(_a, e) ? !0 : bl.call(Ea, e) ? !1 : Kh.test(e) ? (_a[e] = !0) : ((Ea[e] = !0), !1);
}
function qh(e, t, n, r) {
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
function Xh(e, t, n, r) {
  if (t === null || typeof t > 'u' || qh(e, t, n, r)) return !0;
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
var cs = /[\-:]([a-z])/g;
function fs(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(cs, fs);
    _e[t] = new De(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(cs, fs);
  _e[t] = new De(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(cs, fs);
  _e[t] = new De(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  _e[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new De('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  _e[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ds(e, t, n, r) {
  var o = _e.hasOwnProperty(t) ? _e[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Xh(t, n, o, r) && (n = null),
    r || o === null
      ? Yh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Ut = kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ro = Symbol.for('react.element'),
  zn = Symbol.for('react.portal'),
  Mn = Symbol.for('react.fragment'),
  ps = Symbol.for('react.strict_mode'),
  eu = Symbol.for('react.profiler'),
  Cf = Symbol.for('react.provider'),
  Rf = Symbol.for('react.context'),
  hs = Symbol.for('react.forward_ref'),
  tu = Symbol.for('react.suspense'),
  nu = Symbol.for('react.suspense_list'),
  ms = Symbol.for('react.memo'),
  Ht = Symbol.for('react.lazy'),
  Pf = Symbol.for('react.offscreen'),
  ka = Symbol.iterator;
function gr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ka && e[ka]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var ue = Object.assign,
  wl;
function Tr(e) {
  if (wl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wl = (t && t[1]) || '';
    }
  return (
    `
` +
    wl +
    e
  );
}
var Sl = !1;
function El(e, t) {
  if (!e || Sl) return '';
  Sl = !0;
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
    (Sl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Tr(e) : '';
}
function Jh(e) {
  switch (e.tag) {
    case 5:
      return Tr(e.type);
    case 16:
      return Tr('Lazy');
    case 13:
      return Tr('Suspense');
    case 19:
      return Tr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = El(e.type, !1)), e;
    case 11:
      return (e = El(e.type.render, !1)), e;
    case 1:
      return (e = El(e.type, !0)), e;
    default:
      return '';
  }
}
function ru(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Mn:
      return 'Fragment';
    case zn:
      return 'Portal';
    case eu:
      return 'Profiler';
    case ps:
      return 'StrictMode';
    case tu:
      return 'Suspense';
    case nu:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Rf:
        return (e.displayName || 'Context') + '.Consumer';
      case Cf:
        return (e._context.displayName || 'Context') + '.Provider';
      case hs:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case ms:
        return (t = e.displayName || null), t !== null ? t : ru(e.type) || 'Memo';
      case Ht:
        (t = e._payload), (e = e._init);
        try {
          return ru(e(t));
        } catch {}
    }
  return null;
}
function Gh(e) {
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
      return ru(t);
    case 8:
      return t === ps ? 'StrictMode' : 'Mode';
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
function nn(e) {
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
function Nf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Zh(e) {
  var t = Nf(e) ? 'checked' : 'value',
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
function Po(e) {
  e._valueTracker || (e._valueTracker = Zh(e));
}
function Tf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = Nf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function ii(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ou(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function xa(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Of(e, t) {
  (t = t.checked), t != null && ds(e, 'checked', t, !1);
}
function iu(e, t) {
  Of(e, t);
  var n = nn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? lu(e, t.type, n) : t.hasOwnProperty('defaultValue') && lu(e, t.type, nn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ca(e, t, n) {
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
function lu(e, t, n) {
  (t !== 'number' || ii(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Or = Array.isArray;
function Yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + nn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function uu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return ue({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Ra(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Or(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function Lf(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Pa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Df(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function su(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Df(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var No,
  zf = (function (e) {
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
        No = No || document.createElement('div'),
          No.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = No.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
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
  bh = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(zr).forEach(function (e) {
  bh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zr[t] = zr[e]);
  });
});
function Mf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (zr.hasOwnProperty(e) && zr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Ff(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Mf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var em = ue(
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
function au(e, t) {
  if (t) {
    if (em[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(x(62));
  }
}
function cu(e, t) {
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
var fu = null;
function ys(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var du = null,
  qn = null,
  Xn = null;
function Na(e) {
  if ((e = mo(e))) {
    if (typeof du != 'function') throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Ii(t)), du(e.stateNode, e.type, t));
  }
}
function Af(e) {
  qn ? (Xn ? Xn.push(e) : (Xn = [e])) : (qn = e);
}
function Uf() {
  if (qn) {
    var e = qn,
      t = Xn;
    if (((Xn = qn = null), Na(e), t)) for (e = 0; e < t.length; e++) Na(t[e]);
  }
}
function jf(e, t) {
  return e(t);
}
function If() {}
var _l = !1;
function Bf(e, t, n) {
  if (_l) return e(t, n);
  _l = !0;
  try {
    return jf(e, t, n);
  } finally {
    (_l = !1), (qn !== null || Xn !== null) && (If(), Uf());
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ii(n);
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
var pu = !1;
if (zt)
  try {
    var wr = {};
    Object.defineProperty(wr, 'passive', {
      get: function () {
        pu = !0;
      },
    }),
      window.addEventListener('test', wr, wr),
      window.removeEventListener('test', wr, wr);
  } catch {
    pu = !1;
  }
function tm(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
}
var Mr = !1,
  li = null,
  ui = !1,
  hu = null,
  nm = {
    onError: function (e) {
      (Mr = !0), (li = e);
    },
  };
function rm(e, t, n, r, o, i, l, u, s) {
  (Mr = !1), (li = null), tm.apply(nm, arguments);
}
function om(e, t, n, r, o, i, l, u, s) {
  if ((rm.apply(this, arguments), Mr)) {
    if (Mr) {
      var a = li;
      (Mr = !1), (li = null);
    } else throw Error(x(198));
    ui || ((ui = !0), (hu = a));
  }
}
function Nn(e) {
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
function $f(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Ta(e) {
  if (Nn(e) !== e) throw Error(x(188));
}
function im(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Nn(e)), t === null)) throw Error(x(188));
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
        if (i === n) return Ta(o), e;
        if (i === r) return Ta(o), t;
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
function Hf(e) {
  return (e = im(e)), e !== null ? Wf(e) : null;
}
function Wf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vf = He.unstable_scheduleCallback,
  Oa = He.unstable_cancelCallback,
  lm = He.unstable_shouldYield,
  um = He.unstable_requestPaint,
  ae = He.unstable_now,
  sm = He.unstable_getCurrentPriorityLevel,
  vs = He.unstable_ImmediatePriority,
  Qf = He.unstable_UserBlockingPriority,
  si = He.unstable_NormalPriority,
  am = He.unstable_LowPriority,
  Kf = He.unstable_IdlePriority,
  Fi = null,
  wt = null;
function cm(e) {
  if (wt && typeof wt.onCommitFiberRoot == 'function')
    try {
      wt.onCommitFiberRoot(Fi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : pm,
  fm = Math.log,
  dm = Math.LN2;
function pm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((fm(e) / dm) | 0)) | 0;
}
var To = 64,
  Oo = 4194304;
function Lr(e) {
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
function ai(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? (r = Lr(u)) : ((i &= l), i !== 0 && (r = Lr(i)));
  } else (l = n & ~o), l !== 0 ? (r = Lr(l)) : i !== 0 && (r = Lr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function hm(e, t) {
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
function mm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - dt(i),
      u = 1 << l,
      s = o[l];
    s === -1 ? (!(u & n) || u & r) && (o[l] = hm(u, t)) : s <= t && (e.expiredLanes |= u), (i &= ~u);
  }
}
function mu(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Yf() {
  var e = To;
  return (To <<= 1), !(To & 4194240) && (To = 64), e;
}
function kl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function po(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dt(t)),
    (e[t] = n);
}
function ym(e, t) {
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
function gs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var G = 0;
function qf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xf,
  ws,
  Jf,
  Gf,
  Zf,
  yu = !1,
  Lo = [],
  qt = null,
  Xt = null,
  Jt = null,
  Kr = new Map(),
  Yr = new Map(),
  Vt = [],
  vm =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function La(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      qt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Xt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Jt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Kr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Yr.delete(t.pointerId);
  }
}
function Sr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = mo(t)), t !== null && ws(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function gm(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (qt = Sr(qt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Xt = Sr(Xt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Jt = Sr(Jt, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Kr.set(i, Sr(Kr.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (i = o.pointerId), Yr.set(i, Sr(Yr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function bf(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $f(n)), t !== null)) {
          (e.blockedOn = t),
            Zf(e.priority, function () {
              Jf(n);
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
function Vo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (fu = r), n.target.dispatchEvent(r), (fu = null);
    } else return (t = mo(n)), t !== null && ws(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Da(e, t, n) {
  Vo(e) && n.delete(t);
}
function wm() {
  (yu = !1),
    qt !== null && Vo(qt) && (qt = null),
    Xt !== null && Vo(Xt) && (Xt = null),
    Jt !== null && Vo(Jt) && (Jt = null),
    Kr.forEach(Da),
    Yr.forEach(Da);
}
function Er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), yu || ((yu = !0), He.unstable_scheduleCallback(He.unstable_NormalPriority, wm)));
}
function qr(e) {
  function t(o) {
    return Er(o, e);
  }
  if (0 < Lo.length) {
    Er(Lo[0], e);
    for (var n = 1; n < Lo.length; n++) {
      var r = Lo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    qt !== null && Er(qt, e), Xt !== null && Er(Xt, e), Jt !== null && Er(Jt, e), Kr.forEach(t), Yr.forEach(t), n = 0;
    n < Vt.length;
    n++
  )
    (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); ) bf(n), n.blockedOn === null && Vt.shift();
}
var Jn = Ut.ReactCurrentBatchConfig,
  ci = !0;
function Sm(e, t, n, r) {
  var o = G,
    i = Jn.transition;
  Jn.transition = null;
  try {
    (G = 1), Ss(e, t, n, r);
  } finally {
    (G = o), (Jn.transition = i);
  }
}
function Em(e, t, n, r) {
  var o = G,
    i = Jn.transition;
  Jn.transition = null;
  try {
    (G = 4), Ss(e, t, n, r);
  } finally {
    (G = o), (Jn.transition = i);
  }
}
function Ss(e, t, n, r) {
  if (ci) {
    var o = vu(e, t, n, r);
    if (o === null) zl(e, t, r, fi, n), La(e, r);
    else if (gm(o, e, t, n, r)) r.stopPropagation();
    else if ((La(e, r), t & 4 && -1 < vm.indexOf(e))) {
      for (; o !== null; ) {
        var i = mo(o);
        if ((i !== null && Xf(i), (i = vu(e, t, n, r)), i === null && zl(e, t, r, fi, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else zl(e, t, r, null, n);
  }
}
var fi = null;
function vu(e, t, n, r) {
  if (((fi = null), (e = ys(r)), (e = pn(e)), e !== null))
    if (((t = Nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = $f(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fi = e), null;
}
function ed(e) {
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
      switch (sm()) {
        case vs:
          return 1;
        case Qf:
          return 4;
        case si:
        case am:
          return 16;
        case Kf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kt = null,
  Es = null,
  Qo = null;
function td() {
  if (Qo) return Qo;
  var e,
    t = Es,
    n = t.length,
    r,
    o = 'value' in Kt ? Kt.value : Kt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Qo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ko(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Do() {
  return !0;
}
function za() {
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
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Do : za),
      (this.isPropagationStopped = za),
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
          (this.isDefaultPrevented = Do));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Do));
      },
      persist: function () {},
      isPersistent: Do,
    }),
    t
  );
}
var dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _s = Ke(dr),
  ho = ue({}, dr, { view: 0, detail: 0 }),
  _m = Ke(ho),
  xl,
  Cl,
  _r,
  Ai = ue({}, ho, {
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
    getModifierState: ks,
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
        : (e !== _r &&
            (_r && e.type === 'mousemove'
              ? ((xl = e.screenX - _r.screenX), (Cl = e.screenY - _r.screenY))
              : (Cl = xl = 0),
            (_r = e)),
          xl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Cl;
    },
  }),
  Ma = Ke(Ai),
  km = ue({}, Ai, { dataTransfer: 0 }),
  xm = Ke(km),
  Cm = ue({}, ho, { relatedTarget: 0 }),
  Rl = Ke(Cm),
  Rm = ue({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pm = Ke(Rm),
  Nm = ue({}, dr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Tm = Ke(Nm),
  Om = ue({}, dr, { data: 0 }),
  Fa = Ke(Om),
  Lm = {
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
  Dm = {
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
  zm = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Mm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zm[e]) ? !!t[e] : !1;
}
function ks() {
  return Mm;
}
var Fm = ue({}, ho, {
    key: function (e) {
      if (e.key) {
        var t = Lm[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ko(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Dm[e.keyCode] || 'Unidentified'
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
    getModifierState: ks,
    charCode: function (e) {
      return e.type === 'keypress' ? Ko(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? Ko(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  Am = Ke(Fm),
  Um = ue({}, Ai, {
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
  Aa = Ke(Um),
  jm = ue({}, ho, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ks,
  }),
  Im = Ke(jm),
  Bm = ue({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $m = Ke(Bm),
  Hm = ue({}, Ai, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Wm = Ke(Hm),
  Vm = [9, 13, 27, 32],
  xs = zt && 'CompositionEvent' in window,
  Fr = null;
zt && 'documentMode' in document && (Fr = document.documentMode);
var Qm = zt && 'TextEvent' in window && !Fr,
  nd = zt && (!xs || (Fr && 8 < Fr && 11 >= Fr)),
  Ua = String.fromCharCode(32),
  ja = !1;
function rd(e, t) {
  switch (e) {
    case 'keyup':
      return Vm.indexOf(t.keyCode) !== -1;
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
function od(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Fn = !1;
function Km(e, t) {
  switch (e) {
    case 'compositionend':
      return od(t);
    case 'keypress':
      return t.which !== 32 ? null : ((ja = !0), Ua);
    case 'textInput':
      return (e = t.data), e === Ua && ja ? null : e;
    default:
      return null;
  }
}
function Ym(e, t) {
  if (Fn) return e === 'compositionend' || (!xs && rd(e, t)) ? ((e = td()), (Qo = Es = Kt = null), (Fn = !1), e) : null;
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
      return nd && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var qm = {
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
function Ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!qm[e.type] : t === 'textarea';
}
function id(e, t, n, r) {
  Af(r),
    (t = di(t, 'onChange')),
    0 < t.length && ((n = new _s('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Ar = null,
  Xr = null;
function Xm(e) {
  yd(e, 0);
}
function Ui(e) {
  var t = jn(e);
  if (Tf(t)) return e;
}
function Jm(e, t) {
  if (e === 'change') return t;
}
var ld = !1;
if (zt) {
  var Pl;
  if (zt) {
    var Nl = 'oninput' in document;
    if (!Nl) {
      var Ba = document.createElement('div');
      Ba.setAttribute('oninput', 'return;'), (Nl = typeof Ba.oninput == 'function');
    }
    Pl = Nl;
  } else Pl = !1;
  ld = Pl && (!document.documentMode || 9 < document.documentMode);
}
function $a() {
  Ar && (Ar.detachEvent('onpropertychange', ud), (Xr = Ar = null));
}
function ud(e) {
  if (e.propertyName === 'value' && Ui(Xr)) {
    var t = [];
    id(t, Xr, e, ys(e)), Bf(Xm, t);
  }
}
function Gm(e, t, n) {
  e === 'focusin' ? ($a(), (Ar = t), (Xr = n), Ar.attachEvent('onpropertychange', ud)) : e === 'focusout' && $a();
}
function Zm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ui(Xr);
}
function bm(e, t) {
  if (e === 'click') return Ui(t);
}
function ey(e, t) {
  if (e === 'input' || e === 'change') return Ui(t);
}
function ty(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == 'function' ? Object.is : ty;
function Jr(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!bl.call(t, o) || !ht(e[o], t[o])) return !1;
  }
  return !0;
}
function Ha(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wa(e, t) {
  var n = Ha(e);
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
    n = Ha(n);
  }
}
function sd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? sd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ad() {
  for (var e = window, t = ii(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ii(e.document);
  }
  return t;
}
function Cs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function ny(e) {
  var t = ad(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && sd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Cs(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Wa(n, i));
        var l = Wa(n, r);
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
var ry = zt && 'documentMode' in document && 11 >= document.documentMode,
  An = null,
  gu = null,
  Ur = null,
  wu = !1;
function Va(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wu ||
    An == null ||
    An !== ii(r) ||
    ((r = An),
    'selectionStart' in r && Cs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ur && Jr(Ur, r)) ||
      ((Ur = r),
      (r = di(gu, 'onSelect')),
      0 < r.length &&
        ((t = new _s('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = An))));
}
function zo(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var Un = {
    animationend: zo('Animation', 'AnimationEnd'),
    animationiteration: zo('Animation', 'AnimationIteration'),
    animationstart: zo('Animation', 'AnimationStart'),
    transitionend: zo('Transition', 'TransitionEnd'),
  },
  Tl = {},
  cd = {};
zt &&
  ((cd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Un.animationend.animation, delete Un.animationiteration.animation, delete Un.animationstart.animation),
  'TransitionEvent' in window || delete Un.transitionend.transition);
function ji(e) {
  if (Tl[e]) return Tl[e];
  if (!Un[e]) return e;
  var t = Un[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in cd) return (Tl[e] = t[n]);
  return e;
}
var fd = ji('animationend'),
  dd = ji('animationiteration'),
  pd = ji('animationstart'),
  hd = ji('transitionend'),
  md = new Map(),
  Qa =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function on(e, t) {
  md.set(e, t), Pn(t, [e]);
}
for (var Ol = 0; Ol < Qa.length; Ol++) {
  var Ll = Qa[Ol],
    oy = Ll.toLowerCase(),
    iy = Ll[0].toUpperCase() + Ll.slice(1);
  on(oy, 'on' + iy);
}
on(fd, 'onAnimationEnd');
on(dd, 'onAnimationIteration');
on(pd, 'onAnimationStart');
on('dblclick', 'onDoubleClick');
on('focusin', 'onFocus');
on('focusout', 'onBlur');
on(hd, 'onTransitionEnd');
er('onMouseEnter', ['mouseout', 'mouseover']);
er('onMouseLeave', ['mouseout', 'mouseover']);
er('onPointerEnter', ['pointerout', 'pointerover']);
er('onPointerLeave', ['pointerout', 'pointerover']);
Pn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Pn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
Pn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Pn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Pn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Pn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Dr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  ly = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Dr));
function Ka(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), om(r, t, void 0, e), (e.currentTarget = null);
}
function yd(e, t) {
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
          Ka(o, u, a), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]), (s = u.instance), (a = u.currentTarget), (u = u.listener), s !== i && o.isPropagationStopped())
          )
            break e;
          Ka(o, u, a), (i = s);
        }
    }
  }
  if (ui) throw ((e = hu), (ui = !1), (hu = null), e);
}
function ee(e, t) {
  var n = t[xu];
  n === void 0 && (n = t[xu] = new Set());
  var r = e + '__bubble';
  n.has(r) || (vd(t, e, 2, !1), n.add(r));
}
function Dl(e, t, n) {
  var r = 0;
  t && (r |= 4), vd(n, e, r, t);
}
var Mo = '_reactListening' + Math.random().toString(36).slice(2);
function Gr(e) {
  if (!e[Mo]) {
    (e[Mo] = !0),
      xf.forEach(function (n) {
        n !== 'selectionchange' && (ly.has(n) || Dl(n, !1, e), Dl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mo] || ((t[Mo] = !0), Dl('selectionchange', !1, t));
  }
}
function vd(e, t, n, r) {
  switch (ed(t)) {
    case 1:
      var o = Sm;
      break;
    case 4:
      o = Em;
      break;
    default:
      o = Ss;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !pu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function zl(e, t, n, r, o) {
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
          if (((l = pn(u)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Bf(function () {
    var a = i,
      f = ys(n),
      p = [];
    e: {
      var m = md.get(e);
      if (m !== void 0) {
        var w = _s,
          y = e;
        switch (e) {
          case 'keypress':
            if (Ko(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = Am;
            break;
          case 'focusin':
            (y = 'focus'), (w = Rl);
            break;
          case 'focusout':
            (y = 'blur'), (w = Rl);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = Rl;
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
            w = Ma;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = xm;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = Im;
            break;
          case fd:
          case dd:
          case pd:
            w = Pm;
            break;
          case hd:
            w = $m;
            break;
          case 'scroll':
            w = _m;
            break;
          case 'wheel':
            w = Wm;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = Tm;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = Aa;
        }
        var v = (t & 4) !== 0,
          R = !v && e === 'scroll',
          c = v ? (m !== null ? m + 'Capture' : null) : m;
        v = [];
        for (var d = a, h; d !== null; ) {
          h = d;
          var g = h.stateNode;
          if (
            (h.tag === 5 && g !== null && ((h = g), c !== null && ((g = Qr(d, c)), g != null && v.push(Zr(d, g, h)))),
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
          m && n !== fu && (y = n.relatedTarget || n.fromElement) && (pn(y) || y[Mt]))
        )
          break e;
        if (
          (w || m) &&
          ((m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window),
          w
            ? ((y = n.relatedTarget || n.toElement),
              (w = a),
              (y = y ? pn(y) : null),
              y !== null && ((R = Nn(y)), y !== R || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((w = null), (y = a)),
          w !== y)
        ) {
          if (
            ((v = Ma),
            (g = 'onMouseLeave'),
            (c = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = Aa), (g = 'onPointerLeave'), (c = 'onPointerEnter'), (d = 'pointer')),
            (R = w == null ? m : jn(w)),
            (h = y == null ? m : jn(y)),
            (m = new v(g, d + 'leave', w, n, f)),
            (m.target = R),
            (m.relatedTarget = h),
            (g = null),
            pn(f) === a && ((v = new v(c, d + 'enter', y, n, f)), (v.target = h), (v.relatedTarget = R), (g = v)),
            (R = g),
            w && y)
          )
            t: {
              for (v = w, c = y, d = 0, h = v; h; h = Dn(h)) d++;
              for (h = 0, g = c; g; g = Dn(g)) h++;
              for (; 0 < d - h; ) (v = Dn(v)), d--;
              for (; 0 < h - d; ) (c = Dn(c)), h--;
              for (; d--; ) {
                if (v === c || (c !== null && v === c.alternate)) break t;
                (v = Dn(v)), (c = Dn(c));
              }
              v = null;
            }
          else v = null;
          w !== null && Ya(p, m, w, v, !1), y !== null && R !== null && Ya(p, R, y, v, !0);
        }
      }
      e: {
        if (
          ((m = a ? jn(a) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && m.type === 'file'))
        )
          var C = Jm;
        else if (Ia(m))
          if (ld) C = ey;
          else {
            C = Zm;
            var P = Gm;
          }
        else
          (w = m.nodeName) && w.toLowerCase() === 'input' && (m.type === 'checkbox' || m.type === 'radio') && (C = bm);
        if (C && (C = C(e, a))) {
          id(p, C, n, f);
          break e;
        }
        P && P(e, m, a),
          e === 'focusout' && (P = m._wrapperState) && P.controlled && m.type === 'number' && lu(m, 'number', m.value);
      }
      switch (((P = a ? jn(a) : window), e)) {
        case 'focusin':
          (Ia(P) || P.contentEditable === 'true') && ((An = P), (gu = a), (Ur = null));
          break;
        case 'focusout':
          Ur = gu = An = null;
          break;
        case 'mousedown':
          wu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (wu = !1), Va(p, n, f);
          break;
        case 'selectionchange':
          if (ry) break;
        case 'keydown':
        case 'keyup':
          Va(p, n, f);
      }
      var N;
      if (xs)
        e: {
          switch (e) {
            case 'compositionstart':
              var D = 'onCompositionStart';
              break e;
            case 'compositionend':
              D = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              D = 'onCompositionUpdate';
              break e;
          }
          D = void 0;
        }
      else
        Fn ? rd(e, n) && (D = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (D = 'onCompositionStart');
      D &&
        (nd &&
          n.locale !== 'ko' &&
          (Fn || D !== 'onCompositionStart'
            ? D === 'onCompositionEnd' && Fn && (N = td())
            : ((Kt = f), (Es = 'value' in Kt ? Kt.value : Kt.textContent), (Fn = !0))),
        (P = di(a, D)),
        0 < P.length &&
          ((D = new Fa(D, e, null, n, f)),
          p.push({ event: D, listeners: P }),
          N ? (D.data = N) : ((N = od(n)), N !== null && (D.data = N)))),
        (N = Qm ? Km(e, n) : Ym(e, n)) &&
          ((a = di(a, 'onBeforeInput')),
          0 < a.length &&
            ((f = new Fa('onBeforeInput', 'beforeinput', null, n, f)),
            p.push({ event: f, listeners: a }),
            (f.data = N)));
    }
    yd(p, t);
  });
}
function Zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function di(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = Qr(e, n)), i != null && r.unshift(Zr(e, i, o)), (i = Qr(e, t)), i != null && r.push(Zr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ya(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = Qr(n, i)), s != null && l.unshift(Zr(n, s, u)))
        : o || ((s = Qr(n, i)), s != null && l.push(Zr(n, s, u)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var uy = /\r\n?/g,
  sy = /\u0000|\uFFFD/g;
function qa(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      uy,
      `
`,
    )
    .replace(sy, '');
}
function Fo(e, t, n) {
  if (((t = qa(t)), qa(e) !== t && n)) throw Error(x(425));
}
function pi() {}
var Su = null,
  Eu = null;
function _u(e, t) {
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
var ku = typeof setTimeout == 'function' ? setTimeout : void 0,
  ay = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Xa = typeof Promise == 'function' ? Promise : void 0,
  cy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Xa < 'u'
      ? function (e) {
          return Xa.resolve(null).then(e).catch(fy);
        }
      : ku;
function fy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ml(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), qr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  qr(t);
}
function Gt(e) {
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
function Ja(e) {
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
var pr = Math.random().toString(36).slice(2),
  vt = '__reactFiber$' + pr,
  br = '__reactProps$' + pr,
  Mt = '__reactContainer$' + pr,
  xu = '__reactEvents$' + pr,
  dy = '__reactListeners$' + pr,
  py = '__reactHandles$' + pr;
function pn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mt] || n[vt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Ja(e); e !== null; ) {
          if ((n = e[vt])) return n;
          e = Ja(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function mo(e) {
  return (e = e[vt] || e[Mt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Ii(e) {
  return e[br] || null;
}
var Cu = [],
  In = -1;
function ln(e) {
  return { current: e };
}
function te(e) {
  0 > In || ((e.current = Cu[In]), (Cu[In] = null), In--);
}
function b(e, t) {
  In++, (Cu[In] = e.current), (e.current = t);
}
var rn = {},
  Pe = ln(rn),
  Fe = ln(!1),
  Sn = rn;
function tr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
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
function Ae(e) {
  return (e = e.childContextTypes), e != null;
}
function hi() {
  te(Fe), te(Pe);
}
function Ga(e, t, n) {
  if (Pe.current !== rn) throw Error(x(168));
  b(Pe, t), b(Fe, n);
}
function gd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(x(108, Gh(e) || 'Unknown', o));
  return ue({}, n, r);
}
function mi(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (Sn = Pe.current),
    b(Pe, e),
    b(Fe, Fe.current),
    !0
  );
}
function Za(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n ? ((e = gd(e, t, Sn)), (r.__reactInternalMemoizedMergedChildContext = e), te(Fe), te(Pe), b(Pe, e)) : te(Fe),
    b(Fe, n);
}
var Nt = null,
  Bi = !1,
  Fl = !1;
function wd(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function hy(e) {
  (Bi = !0), wd(e);
}
function un() {
  if (!Fl && Nt !== null) {
    Fl = !0;
    var e = 0,
      t = G;
    try {
      var n = Nt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Nt = null), (Bi = !1);
    } catch (o) {
      throw (Nt !== null && (Nt = Nt.slice(e + 1)), Vf(vs, un), o);
    } finally {
      (G = t), (Fl = !1);
    }
  }
  return null;
}
var Bn = [],
  $n = 0,
  yi = null,
  vi = 0,
  Ge = [],
  Ze = 0,
  En = null,
  Tt = 1,
  Ot = '';
function cn(e, t) {
  (Bn[$n++] = vi), (Bn[$n++] = yi), (yi = e), (vi = t);
}
function Sd(e, t, n) {
  (Ge[Ze++] = Tt), (Ge[Ze++] = Ot), (Ge[Ze++] = En), (En = e);
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
function Rs(e) {
  e.return !== null && (cn(e, 1), Sd(e, 1, 0));
}
function Ps(e) {
  for (; e === yi; ) (yi = Bn[--$n]), (Bn[$n] = null), (vi = Bn[--$n]), (Bn[$n] = null);
  for (; e === En; )
    (En = Ge[--Ze]), (Ge[Ze] = null), (Ot = Ge[--Ze]), (Ge[Ze] = null), (Tt = Ge[--Ze]), (Ge[Ze] = null);
}
var $e = null,
  Be = null,
  re = !1,
  ct = null;
function Ed(e, t) {
  var n = be(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ba(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Be = Gt(t.firstChild)), !0) : !1
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
          ? ((n = En !== null ? { id: Tt, overflow: Ot } : null),
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
function Ru(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pu(e) {
  if (re) {
    var t = Be;
    if (t) {
      var n = t;
      if (!ba(e, t)) {
        if (Ru(e)) throw Error(x(418));
        t = Gt(n.nextSibling);
        var r = $e;
        t && ba(e, t) ? Ed(r, n) : ((e.flags = (e.flags & -4097) | 2), (re = !1), ($e = e));
      }
    } else {
      if (Ru(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), ($e = e);
    }
  }
}
function ec(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  $e = e;
}
function Ao(e) {
  if (e !== $e) return !1;
  if (!re) return ec(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !_u(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (Ru(e)) throw (_d(), Error(x(418)));
    for (; t; ) Ed(e, t), (t = Gt(t.nextSibling));
  }
  if ((ec(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Be = Gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = $e ? Gt(e.stateNode.nextSibling) : null;
  return !0;
}
function _d() {
  for (var e = Be; e; ) e = Gt(e.nextSibling);
}
function nr() {
  (Be = $e = null), (re = !1);
}
function Ns(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
var my = Ut.ReactCurrentBatchConfig;
function ut(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var gi = ln(null),
  wi = null,
  Hn = null,
  Ts = null;
function Os() {
  Ts = Hn = wi = null;
}
function Ls(e) {
  var t = gi.current;
  te(gi), (e._currentValue = t);
}
function Nu(e, t, n) {
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
function Gn(e, t) {
  (wi = e),
    (Ts = Hn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (Ts !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
      if (wi === null) throw Error(x(308));
      (Hn = e), (wi.dependencies = { lanes: 0, firstContext: e });
    } else Hn = Hn.next = e;
  return t;
}
var hn = null;
function Ds(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
function kd(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), Ds(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Wt = !1;
function zs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function xd(e, t) {
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
function Zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Ft(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ds(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ft(e, n)
  );
}
function Yo(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gs(e, n);
  }
}
function tc(e, t) {
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
function Si(e, t, n, r) {
  var o = e.updateQueue;
  Wt = !1;
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
              Wt = !0;
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
    (kn |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function nc(e, t, n) {
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
var Cd = new kf.Component().refs;
function Tu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $i = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      o = en(e),
      i = Lt(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = Zt(e, i, o)), t !== null && (pt(t, e, o, r), Yo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      o = en(e),
      i = Lt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Zt(e, i, o)),
      t !== null && (pt(t, e, o, r), Yo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Oe(),
      r = en(e),
      o = Lt(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = Zt(e, o, r)), t !== null && (pt(t, e, r, n), Yo(t, e, r));
  },
};
function rc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jr(n, r) || !Jr(o, i)
      : !0
  );
}
function Rd(e, t, n) {
  var r = !1,
    o = rn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = nt(i))
      : ((o = Ae(t) ? Sn : Pe.current), (r = t.contextTypes), (i = (r = r != null) ? tr(e, o) : rn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $i),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function oc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $i.enqueueReplaceState(t, t.state, null);
}
function Ou(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Cd), zs(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null ? (o.context = nt(i)) : ((i = Ae(t) ? Sn : Pe.current), (o.context = tr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Tu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && $i.enqueueReplaceState(o, o.state, null),
      Si(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function kr(e, t, n) {
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
            u === Cd && (u = o.refs = {}), l === null ? delete u[i] : (u[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Uo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(x(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function ic(e) {
  var t = e._init;
  return t(e._payload);
}
function Pd(e) {
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
    return (c = tn(c, d)), (c.index = 0), (c.sibling = null), c;
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
    return d === null || d.tag !== 6 ? ((d = Hl(h, c.mode, g)), (d.return = c), d) : ((d = o(d, h)), (d.return = c), d);
  }
  function s(c, d, h, g) {
    var C = h.type;
    return C === Mn
      ? f(c, d, h.props.children, g, h.key)
      : d !== null &&
        (d.elementType === C || (typeof C == 'object' && C !== null && C.$$typeof === Ht && ic(C) === d.type))
      ? ((g = o(d, h.props)), (g.ref = kr(c, d, h)), (g.return = c), g)
      : ((g = bo(h.type, h.key, h.props, null, c.mode, g)), (g.ref = kr(c, d, h)), (g.return = c), g);
  }
  function a(c, d, h, g) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Wl(h, c.mode, g)), (d.return = c), d)
      : ((d = o(d, h.children || [])), (d.return = c), d);
  }
  function f(c, d, h, g, C) {
    return d === null || d.tag !== 7
      ? ((d = gn(h, c.mode, g, C)), (d.return = c), d)
      : ((d = o(d, h)), (d.return = c), d);
  }
  function p(c, d, h) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = Hl('' + d, c.mode, h)), (d.return = c), d;
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case Ro:
          return (h = bo(d.type, d.key, d.props, null, c.mode, h)), (h.ref = kr(c, null, d)), (h.return = c), h;
        case zn:
          return (d = Wl(d, c.mode, h)), (d.return = c), d;
        case Ht:
          var g = d._init;
          return p(c, g(d._payload), h);
      }
      if (Or(d) || gr(d)) return (d = gn(d, c.mode, h, null)), (d.return = c), d;
      Uo(c, d);
    }
    return null;
  }
  function m(c, d, h, g) {
    var C = d !== null ? d.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number') return C !== null ? null : u(c, d, '' + h, g);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Ro:
          return h.key === C ? s(c, d, h, g) : null;
        case zn:
          return h.key === C ? a(c, d, h, g) : null;
        case Ht:
          return (C = h._init), m(c, d, C(h._payload), g);
      }
      if (Or(h) || gr(h)) return C !== null ? null : f(c, d, h, g, null);
      Uo(c, h);
    }
    return null;
  }
  function w(c, d, h, g, C) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number') return (c = c.get(h) || null), u(d, c, '' + g, C);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Ro:
          return (c = c.get(g.key === null ? h : g.key) || null), s(d, c, g, C);
        case zn:
          return (c = c.get(g.key === null ? h : g.key) || null), a(d, c, g, C);
        case Ht:
          var P = g._init;
          return w(c, d, h, P(g._payload), C);
      }
      if (Or(g) || gr(g)) return (c = c.get(h) || null), f(d, c, g, C, null);
      Uo(d, g);
    }
    return null;
  }
  function y(c, d, h, g) {
    for (var C = null, P = null, N = d, D = (d = 0), I = null; N !== null && D < h.length; D++) {
      N.index > D ? ((I = N), (N = null)) : (I = N.sibling);
      var H = m(c, N, h[D], g);
      if (H === null) {
        N === null && (N = I);
        break;
      }
      e && N && H.alternate === null && t(c, N),
        (d = i(H, d, D)),
        P === null ? (C = H) : (P.sibling = H),
        (P = H),
        (N = I);
    }
    if (D === h.length) return n(c, N), re && cn(c, D), C;
    if (N === null) {
      for (; D < h.length; D++)
        (N = p(c, h[D], g)), N !== null && ((d = i(N, d, D)), P === null ? (C = N) : (P.sibling = N), (P = N));
      return re && cn(c, D), C;
    }
    for (N = r(c, N); D < h.length; D++)
      (I = w(N, c, D, h[D], g)),
        I !== null &&
          (e && I.alternate !== null && N.delete(I.key === null ? D : I.key),
          (d = i(I, d, D)),
          P === null ? (C = I) : (P.sibling = I),
          (P = I));
    return (
      e &&
        N.forEach(function (Ne) {
          return t(c, Ne);
        }),
      re && cn(c, D),
      C
    );
  }
  function v(c, d, h, g) {
    var C = gr(h);
    if (typeof C != 'function') throw Error(x(150));
    if (((h = C.call(h)), h == null)) throw Error(x(151));
    for (var P = (C = null), N = d, D = (d = 0), I = null, H = h.next(); N !== null && !H.done; D++, H = h.next()) {
      N.index > D ? ((I = N), (N = null)) : (I = N.sibling);
      var Ne = m(c, N, H.value, g);
      if (Ne === null) {
        N === null && (N = I);
        break;
      }
      e && N && Ne.alternate === null && t(c, N),
        (d = i(Ne, d, D)),
        P === null ? (C = Ne) : (P.sibling = Ne),
        (P = Ne),
        (N = I);
    }
    if (H.done) return n(c, N), re && cn(c, D), C;
    if (N === null) {
      for (; !H.done; D++, H = h.next())
        (H = p(c, H.value, g)), H !== null && ((d = i(H, d, D)), P === null ? (C = H) : (P.sibling = H), (P = H));
      return re && cn(c, D), C;
    }
    for (N = r(c, N); !H.done; D++, H = h.next())
      (H = w(N, c, D, H.value, g)),
        H !== null &&
          (e && H.alternate !== null && N.delete(H.key === null ? D : H.key),
          (d = i(H, d, D)),
          P === null ? (C = H) : (P.sibling = H),
          (P = H));
    return (
      e &&
        N.forEach(function (ot) {
          return t(c, ot);
        }),
      re && cn(c, D),
      C
    );
  }
  function R(c, d, h, g) {
    if (
      (typeof h == 'object' && h !== null && h.type === Mn && h.key === null && (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case Ro:
          e: {
            for (var C = h.key, P = d; P !== null; ) {
              if (P.key === C) {
                if (((C = h.type), C === Mn)) {
                  if (P.tag === 7) {
                    n(c, P.sibling), (d = o(P, h.props.children)), (d.return = c), (c = d);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == 'object' && C !== null && C.$$typeof === Ht && ic(C) === P.type)
                ) {
                  n(c, P.sibling), (d = o(P, h.props)), (d.ref = kr(c, P, h)), (d.return = c), (c = d);
                  break e;
                }
                n(c, P);
                break;
              } else t(c, P);
              P = P.sibling;
            }
            h.type === Mn
              ? ((d = gn(h.props.children, c.mode, g, h.key)), (d.return = c), (c = d))
              : ((g = bo(h.type, h.key, h.props, null, c.mode, g)), (g.ref = kr(c, d, h)), (g.return = c), (c = g));
          }
          return l(c);
        case zn:
          e: {
            for (P = h.key; d !== null; ) {
              if (d.key === P)
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
            (d = Wl(h, c.mode, g)), (d.return = c), (c = d);
          }
          return l(c);
        case Ht:
          return (P = h._init), R(c, d, P(h._payload), g);
      }
      if (Or(h)) return y(c, d, h, g);
      if (gr(h)) return v(c, d, h, g);
      Uo(c, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        d !== null && d.tag === 6
          ? (n(c, d.sibling), (d = o(d, h)), (d.return = c), (c = d))
          : (n(c, d), (d = Hl(h, c.mode, g)), (d.return = c), (c = d)),
        l(c))
      : n(c, d);
  }
  return R;
}
var rr = Pd(!0),
  Nd = Pd(!1),
  yo = {},
  St = ln(yo),
  eo = ln(yo),
  to = ln(yo);
function mn(e) {
  if (e === yo) throw Error(x(174));
  return e;
}
function Ms(e, t) {
  switch ((b(to, t), b(eo, e), b(St, yo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : su(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = su(t, e));
  }
  te(St), b(St, t);
}
function or() {
  te(St), te(eo), te(to);
}
function Td(e) {
  mn(to.current);
  var t = mn(St.current),
    n = su(t, e.type);
  t !== n && (b(eo, e), b(St, n));
}
function Fs(e) {
  eo.current === e && (te(St), te(eo));
}
var ie = ln(0);
function Ei(e) {
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
var Al = [];
function As() {
  for (var e = 0; e < Al.length; e++) Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var qo = Ut.ReactCurrentDispatcher,
  Ul = Ut.ReactCurrentBatchConfig,
  _n = 0,
  le = null,
  pe = null,
  ge = null,
  _i = !1,
  jr = !1,
  no = 0,
  yy = 0;
function xe() {
  throw Error(x(321));
}
function Us(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ht(e[n], t[n])) return !1;
  return !0;
}
function js(e, t, n, r, o, i) {
  if (
    ((_n = i),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (qo.current = e === null || e.memoizedState === null ? Sy : Ey),
    (e = n(r, o)),
    jr)
  ) {
    i = 0;
    do {
      if (((jr = !1), (no = 0), 25 <= i)) throw Error(x(301));
      (i += 1), (ge = pe = null), (t.updateQueue = null), (qo.current = _y), (e = n(r, o));
    } while (jr);
  }
  if (((qo.current = ki), (t = pe !== null && pe.next !== null), (_n = 0), (ge = pe = le = null), (_i = !1), t))
    throw Error(x(300));
  return e;
}
function Is() {
  var e = no !== 0;
  return (no = 0), e;
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
function ro(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function jl(e) {
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
      if ((_n & f) === f)
        s !== null &&
          (s = s.next =
            { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = { lane: f, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null };
        s === null ? ((u = s = p), (l = r)) : (s = s.next = p), (le.lanes |= f), (kn |= f);
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
    do (i = o.lane), (le.lanes |= i), (kn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Il(e) {
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
function Od() {}
function Ld(e, t) {
  var n = le,
    r = rt(),
    o = t(),
    i = !ht(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Me = !0)),
    (r = r.queue),
    Bs(Md.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ge !== null && ge.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), oo(9, zd.bind(null, n, r, o, t), void 0, null), we === null)) throw Error(x(349));
    _n & 30 || Dd(n, t, o);
  }
  return o;
}
function Dd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Fd(t) && Ad(e);
}
function Md(e, t, n) {
  return n(function () {
    Fd(t) && Ad(e);
  });
}
function Fd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function Ad(e) {
  var t = Ft(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function lc(e) {
  var t = yt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ro, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = wy.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function oo(e, t, n, r) {
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
function Ud() {
  return rt().memoizedState;
}
function Xo(e, t, n, r) {
  var o = yt();
  (le.flags |= e), (o.memoizedState = oo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Hi(e, t, n, r) {
  var o = rt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (pe !== null) {
    var l = pe.memoizedState;
    if (((i = l.destroy), r !== null && Us(r, l.deps))) {
      o.memoizedState = oo(t, n, i, r);
      return;
    }
  }
  (le.flags |= e), (o.memoizedState = oo(1 | t, n, i, r));
}
function uc(e, t) {
  return Xo(8390656, 8, e, t);
}
function Bs(e, t) {
  return Hi(2048, 8, e, t);
}
function jd(e, t) {
  return Hi(4, 2, e, t);
}
function Id(e, t) {
  return Hi(4, 4, e, t);
}
function Bd(e, t) {
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
function $d(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Hi(4, 4, Bd.bind(null, t, e), n);
}
function $s() {}
function Hd(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Us(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Wd(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Us(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vd(e, t, n) {
  return _n & 21
    ? (ht(n, t) || ((n = Yf()), (le.lanes |= n), (kn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function vy(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (Ul.transition = r);
  }
}
function Qd() {
  return rt().memoizedState;
}
function gy(e, t, n) {
  var r = en(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Kd(e))) Yd(t, n);
  else if (((n = kd(e, t, n, r)), n !== null)) {
    var o = Oe();
    pt(n, e, r, o), qd(n, t, r);
  }
}
function wy(e, t, n) {
  var r = en(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Kd(e)) Yd(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var l = t.lastRenderedState,
          u = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = u), ht(u, l))) {
          var s = t.interleaved;
          s === null ? ((o.next = o), Ds(t)) : ((o.next = s.next), (s.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = kd(e, t, o, r)), n !== null && ((o = Oe()), pt(n, e, r, o), qd(n, t, r));
  }
}
function Kd(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function Yd(e, t) {
  jr = _i = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function qd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gs(e, n);
  }
}
var ki = {
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
  Sy = {
    readContext: nt,
    useCallback: function (e, t) {
      return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: uc,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Xo(4194308, 4, Bd.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Xo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Xo(4, 2, e, t);
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
        (e = e.dispatch = gy.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: lc,
    useDebugValue: $s,
    useDeferredValue: function (e) {
      return (yt().memoizedState = e);
    },
    useTransition: function () {
      var e = lc(!1),
        t = e[0];
      return (e = vy.bind(null, e[1])), (yt().memoizedState = e), [t, e];
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
        _n & 30 || Dd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        uc(Md.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        oo(9, zd.bind(null, r, i, n, t), void 0, null),
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
          (n = no++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = yy++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ey = {
    readContext: nt,
    useCallback: Hd,
    useContext: nt,
    useEffect: Bs,
    useImperativeHandle: $d,
    useInsertionEffect: jd,
    useLayoutEffect: Id,
    useMemo: Wd,
    useReducer: jl,
    useRef: Ud,
    useState: function () {
      return jl(ro);
    },
    useDebugValue: $s,
    useDeferredValue: function (e) {
      var t = rt();
      return Vd(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(ro)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Od,
    useSyncExternalStore: Ld,
    useId: Qd,
    unstable_isNewReconciler: !1,
  },
  _y = {
    readContext: nt,
    useCallback: Hd,
    useContext: nt,
    useEffect: Bs,
    useImperativeHandle: $d,
    useInsertionEffect: jd,
    useLayoutEffect: Id,
    useMemo: Wd,
    useReducer: Il,
    useRef: Ud,
    useState: function () {
      return Il(ro);
    },
    useDebugValue: $s,
    useDeferredValue: function (e) {
      var t = rt();
      return pe === null ? (t.memoizedState = e) : Vd(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = Il(ro)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Od,
    useSyncExternalStore: Ld,
    useId: Qd,
    unstable_isNewReconciler: !1,
  };
function ir(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Jh(r)), (r = r.return);
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
function Bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Lu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ky = typeof WeakMap == 'function' ? WeakMap : Map;
function Xd(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ci || ((Ci = !0), ($u = r)), Lu(e, t);
    }),
    n
  );
}
function Jd(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Lu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Lu(e, t), typeof r != 'function' && (bt === null ? (bt = new Set([this])) : bt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' });
      }),
    n
  );
}
function sc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ky();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Uy.bind(null, e, t, n)), t.then(e, e));
}
function ac(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Lt(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var xy = Ut.ReactCurrentOwner,
  Me = !1;
function Te(e, t, n, r) {
  t.child = e === null ? Nd(t, null, n, r) : rr(t, e.child, n, r);
}
function fc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Gn(t, o),
    (r = js(e, t, n, r, i, o)),
    (n = Is()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), At(e, t, o))
      : (re && n && Rs(t), (t.flags |= 1), Te(e, t, r, o), t.child)
  );
}
function dc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Xs(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Gd(e, t, i, r, o))
      : ((e = bo(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Jr), n(l, r) && e.ref === t.ref)) return At(e, t, o);
  }
  return (t.flags |= 1), (e = tn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Gd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jr(i, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), At(e, t, o);
  }
  return Du(e, t, n, r, o);
}
function Zd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), b(Vn, Ie), (Ie |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          b(Vn, Ie),
          (Ie |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        b(Vn, Ie),
        (Ie |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), b(Vn, Ie), (Ie |= r);
  return Te(e, t, o, n), t.child;
}
function bd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Du(e, t, n, r, o) {
  var i = Ae(n) ? Sn : Pe.current;
  return (
    (i = tr(t, i)),
    Gn(t, o),
    (n = js(e, t, n, r, i, o)),
    (r = Is()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), At(e, t, o))
      : (re && r && Rs(t), (t.flags |= 1), Te(e, t, n, o), t.child)
  );
}
function pc(e, t, n, r, o) {
  if (Ae(n)) {
    var i = !0;
    mi(t);
  } else i = !1;
  if ((Gn(t, o), t.stateNode === null)) Jo(e, t), Rd(t, n, r), Ou(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var s = l.context,
      a = n.contextType;
    typeof a == 'object' && a !== null ? (a = nt(a)) : ((a = Ae(n) ? Sn : Pe.current), (a = tr(t, a)));
    var f = n.getDerivedStateFromProps,
      p = typeof f == 'function' || typeof l.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && oc(t, l, r, a)),
      (Wt = !1);
    var m = t.memoizedState;
    (l.state = m),
      Si(t, r, l, o),
      (s = t.memoizedState),
      u !== r || m !== s || Fe.current || Wt
        ? (typeof f == 'function' && (Tu(t, n, f, r), (s = t.memoizedState)),
          (u = Wt || rc(t, n, u, r, m, s, a))
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
      xd(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : ut(t.type, u)),
      (l.props = a),
      (p = t.pendingProps),
      (m = l.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null ? (s = nt(s)) : ((s = Ae(n) ? Sn : Pe.current), (s = tr(t, s)));
    var w = n.getDerivedStateFromProps;
    (f = typeof w == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' && typeof l.componentWillReceiveProps != 'function') ||
      ((u !== p || m !== s) && oc(t, l, r, s)),
      (Wt = !1),
      (m = t.memoizedState),
      (l.state = m),
      Si(t, r, l, o);
    var y = t.memoizedState;
    u !== p || m !== y || Fe.current || Wt
      ? (typeof w == 'function' && (Tu(t, n, w, r), (y = t.memoizedState)),
        (a = Wt || rc(t, n, a, r, m, y, s) || !1)
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
  return zu(e, t, n, r, i, o);
}
function zu(e, t, n, r, o, i) {
  bd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Za(t, n, !1), At(e, t, i);
  (r = t.stateNode), (xy.current = t);
  var u = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l ? ((t.child = rr(t, e.child, null, i)), (t.child = rr(t, null, u, i))) : Te(e, t, u, i),
    (t.memoizedState = r.state),
    o && Za(t, n, !0),
    t.child
  );
}
function ep(e) {
  var t = e.stateNode;
  t.pendingContext ? Ga(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ga(e, t.context, !1),
    Ms(e, t.containerInfo);
}
function hc(e, t, n, r, o) {
  return nr(), Ns(o), (t.flags |= 256), Te(e, t, n, r), t.child;
}
var Mu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tp(e, t, n) {
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
      Pu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = l)) : (i = Qi(l, r, 0, null)),
              (e = gn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Fu(n)),
              (t.memoizedState = Mu),
              e)
            : Hs(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null))) return Cy(e, t, l, r, u, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (u = o.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
        : ((r = tn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = tn(u, i)) : ((i = gn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l = l === null ? Fu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Mu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = tn(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Hs(e, t) {
  return (t = Qi({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function jo(e, t, n, r) {
  return (
    r !== null && Ns(r),
    rr(t, e.child, null, n),
    (e = Hs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cy(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Bl(Error(x(422)))), jo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Qi({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = gn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && rr(t, e.child, null, l),
        (t.child.memoizedState = Fu(l)),
        (t.memoizedState = Mu),
        i);
  if (!(t.mode & 1)) return jo(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(x(419))), (r = Bl(i, r, void 0)), jo(e, t, l, r);
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
    return qs(), (r = Bl(Error(x(421)))), jo(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = jy.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (Be = Gt(o.nextSibling)),
      ($e = t),
      (re = !0),
      (ct = null),
      e !== null && ((Ge[Ze++] = Tt), (Ge[Ze++] = Ot), (Ge[Ze++] = En), (Tt = e.id), (Ot = e.overflow), (En = t)),
      (t = Hs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Nu(e.return, t, n);
}
function $l(e, t, n, r, o) {
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
function np(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Te(e, t, r.children, n), (r = ie.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mc(e, n, t);
        else if (e.tag === 19) mc(e, n, t);
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
          (e = n.alternate), e !== null && Ei(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          $l(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ei(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        $l(t, !0, n, null, i);
        break;
      case 'together':
        $l(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Jo(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function At(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (kn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ry(e, t, n) {
  switch (t.tag) {
    case 3:
      ep(t), nr();
      break;
    case 5:
      Td(t);
      break;
    case 1:
      Ae(t.type) && mi(t);
      break;
    case 4:
      Ms(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      b(gi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? tp(e, t, n)
          : (b(ie, ie.current & 1), (e = At(e, t, n)), e !== null ? e.sibling : null);
      b(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return np(e, t, n);
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
      return (t.lanes = 0), Zd(e, t, n);
  }
  return At(e, t, n);
}
var rp, Au, op, ip;
rp = function (e, t) {
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
Au = function () {};
op = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), mn(St.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = ou(e, o)), (r = ou(e, r)), (i = []);
        break;
      case 'select':
        (o = ue({}, o, { value: void 0 })), (r = ue({}, r, { value: void 0 })), (i = []);
        break;
      case 'textarea':
        (o = uu(e, o)), (r = uu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = pi);
    }
    au(n, r);
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
            (Wr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
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
              (Wr.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && ee('scroll', e), i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
ip = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xr(e, t) {
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
function Py(e, t, n) {
  var r = t.pendingProps;
  switch ((Ps(t), t.tag)) {
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
      return Ae(t.type) && hi(), Ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        or(),
        te(Fe),
        te(Pe),
        As(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ao(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ct !== null && (Vu(ct), (ct = null)))),
        Au(e, t),
        Ce(t),
        null
      );
    case 5:
      Fs(t);
      var o = mn(to.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        op(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return Ce(t), null;
        }
        if (((e = mn(St.current)), Ao(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[vt] = t), (r[br] = i), (e = (t.mode & 1) !== 0), n)) {
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
              for (o = 0; o < Dr.length; o++) ee(Dr[o], r);
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
              xa(r, i), ee('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }), ee('invalid', r);
              break;
            case 'textarea':
              Ra(r, i), ee('invalid', r);
          }
          au(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 && Fo(r.textContent, u, e), (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 && Fo(r.textContent, u, e), (o = ['children', '' + u]))
                : Wr.hasOwnProperty(l) && u != null && l === 'onScroll' && ee('scroll', r);
            }
          switch (n) {
            case 'input':
              Po(r), Ca(r, i, !0);
              break;
            case 'textarea':
              Po(r), Pa(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = pi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Df(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' && ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[vt] = t),
            (e[br] = r),
            rp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = cu(n, r)), n)) {
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
                for (o = 0; o < Dr.length; o++) ee(Dr[o], e);
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
                xa(e, r), (o = ou(e, r)), ee('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = ue({}, r, { value: void 0 })), ee('invalid', e);
                break;
              case 'textarea':
                Ra(e, r), (o = uu(e, r)), ee('invalid', e);
                break;
              default:
                o = r;
            }
            au(n, o), (u = o);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style'
                  ? Ff(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && zf(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Vr(e, s)
                    : typeof s == 'number' && Vr(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Wr.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && ee('scroll', e)
                      : s != null && ds(e, i, s, l));
              }
            switch (n) {
              case 'input':
                Po(e), Ca(e, r, !1);
                break;
              case 'textarea':
                Po(e), Pa(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + nn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && Yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = pi);
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
      if (e && t.stateNode != null) ip(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(x(166));
        if (((n = mn(to.current)), mn(St.current), Ao(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[vt] = t), (i = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Fo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Fo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[vt] = t), (t.stateNode = r);
      }
      return Ce(t), null;
    case 13:
      if (
        (te(ie), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && Be !== null && t.mode & 1 && !(t.flags & 128)) _d(), nr(), (t.flags |= 98560), (i = !1);
        else if (((i = Ao(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(x(317));
            i[vt] = t;
          } else nr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ce(t), (i = !1);
        } else ct !== null && (Vu(ct), (ct = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ie.current & 1 ? he === 0 && (he = 3) : qs())),
          t.updateQueue !== null && (t.flags |= 4),
          Ce(t),
          null);
    case 4:
      return or(), Au(e, t), e === null && Gr(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return Ls(t.type._context), Ce(t), null;
    case 17:
      return Ae(t.type) && hi(), Ce(t), null;
    case 19:
      if ((te(ie), (i = t.memoizedState), i === null)) return Ce(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) xr(i, !1);
        else {
          if (he !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Ei(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    xr(i, !1),
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
          i.tail !== null && ae() > lr && ((t.flags |= 128), (r = !0), xr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ei(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !re)
            )
              return Ce(t), null;
          } else
            2 * ae() - i.renderingStartTime > lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xr(i, !1), (t.lanes = 4194304));
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
        Ys(),
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
function Ny(e, t) {
  switch ((Ps(t), t.tag)) {
    case 1:
      return Ae(t.type) && hi(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        or(), te(Fe), te(Pe), As(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Fs(t), null;
    case 13:
      if ((te(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        nr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return te(ie), null;
    case 4:
      return or(), null;
    case 10:
      return Ls(t.type._context), null;
    case 22:
    case 23:
      return Ys(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Io = !1,
  Re = !1,
  Ty = typeof WeakSet == 'function' ? WeakSet : Set,
  O = null;
function Wn(e, t) {
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
function Uu(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var yc = !1;
function Oy(e, t) {
  if (((Su = ci), (e = ad()), Cs(e))) {
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
  for (Eu = { focusedElem: e, selectionRange: n }, ci = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
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
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (y = yc), (yc = !1), y;
}
function Ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Uu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Wi(e, t) {
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
function ju(e) {
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
function lp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[vt], delete t[br], delete t[xu], delete t[dy], delete t[py])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function up(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || up(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = pi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Iu(e, t, n), e = e.sibling; e !== null; ) Iu(e, t, n), (e = e.sibling);
}
function Bu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bu(e, t, n), e = e.sibling; e !== null; ) Bu(e, t, n), (e = e.sibling);
}
var Se = null,
  at = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) sp(e, t, n), (n = n.sibling);
}
function sp(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == 'function')
    try {
      wt.onCommitFiberUnmount(Fi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || Wn(n, t);
    case 6:
      var r = Se,
        o = at;
      (Se = null),
        Bt(e, t, n),
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
          ? ((e = Se), (n = n.stateNode), e.nodeType === 8 ? Ml(e.parentNode, n) : e.nodeType === 1 && Ml(e, n), qr(e))
          : Ml(Se, n.stateNode));
      break;
    case 4:
      (r = Se), (o = at), (Se = n.stateNode.containerInfo), (at = !0), Bt(e, t, n), (Se = r), (at = o);
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
          (i = i.tag), l !== void 0 && (i & 2 || i & 4) && Uu(n, t, l), (o = o.next);
        } while (o !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (!Re && (Wn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (u) {
          se(n, t, u);
        }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Re = (r = Re) || n.memoizedState !== null), Bt(e, t, n), (Re = r)) : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function gc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ty()),
      t.forEach(function (r) {
        var o = Iy.bind(null, e, r);
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
        sp(i, l, o), (Se = null), (at = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (a) {
        se(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ap(t, e), (t = t.sibling);
}
function ap(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((lt(t, e), mt(e), r & 4)) {
        try {
          Ir(3, e, e.return), Wi(3, e);
        } catch (v) {
          se(e, e.return, v);
        }
        try {
          Ir(5, e, e.return);
        } catch (v) {
          se(e, e.return, v);
        }
      }
      break;
    case 1:
      lt(t, e), mt(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if ((lt(t, e), mt(e), r & 512 && n !== null && Wn(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          Vr(o, '');
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
            u === 'input' && i.type === 'radio' && i.name != null && Of(o, i), cu(u, l);
            var a = cu(u, i);
            for (l = 0; l < s.length; l += 2) {
              var f = s[l],
                p = s[l + 1];
              f === 'style'
                ? Ff(o, p)
                : f === 'dangerouslySetInnerHTML'
                ? zf(o, p)
                : f === 'children'
                ? Vr(o, p)
                : ds(o, f, p, a);
            }
            switch (u) {
              case 'input':
                iu(o, i);
                break;
              case 'textarea':
                Lf(o, i);
                break;
              case 'select':
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Yn(o, !!i.multiple, w, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yn(o, !!i.multiple, i.defaultValue, !0)
                      : Yn(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[br] = i;
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
          qr(t.containerInfo);
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
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Qs = ae())),
        r & 4 && gc(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (a = Re) || f), lt(t, e), (Re = a)) : lt(t, e),
        mt(e),
        r & 8192)
      ) {
        if (((a = e.memoizedState !== null), (e.stateNode.isHidden = a) && !f && e.mode & 1))
          for (O = e, f = e.child; f !== null; ) {
            for (p = O = f; O !== null; ) {
              switch (((m = O), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ir(4, m, m.return);
                  break;
                case 1:
                  Wn(m, m.return);
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
                  Wn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Sc(p);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (O = w)) : Sc(p);
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
                      (u.style.display = Mf('display', l)));
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
      lt(t, e), mt(e), r & 4 && gc(e);
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
          if (up(n)) {
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
          r.flags & 32 && (Vr(o, ''), (r.flags &= -33));
          var i = vc(e);
          Bu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = vc(e);
          Iu(e, u, l);
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
function Ly(e, t, n) {
  (O = e), cp(e);
}
function cp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Io;
      if (!l) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || Re;
        u = Io;
        var a = Re;
        if (((Io = l), (Re = s) && !a))
          for (O = o; O !== null; )
            (l = O),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null ? Ec(o) : s !== null ? ((s.return = l), (O = s)) : Ec(o);
        for (; i !== null; ) (O = i), cp(i), (i = i.sibling);
        (O = o), (Io = u), (Re = a);
      }
      wc(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (O = i)) : wc(e);
  }
}
function wc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || Wi(5, t);
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
              i !== null && nc(t, i, r);
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
                nc(t, l, n);
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
                    p !== null && qr(p);
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
        Re || (t.flags & 512 && ju(t));
      } catch (m) {
        se(t, t.return, m);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Sc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Ec(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wi(4, t);
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
            ju(t);
          } catch (s) {
            se(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ju(t);
          } catch (s) {
            se(t, l, s);
          }
      }
    } catch (s) {
      se(t, t.return, s);
    }
    if (t === e) {
      O = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (O = u);
      break;
    }
    O = t.return;
  }
}
var Dy = Math.ceil,
  xi = Ut.ReactCurrentDispatcher,
  Ws = Ut.ReactCurrentOwner,
  et = Ut.ReactCurrentBatchConfig,
  Y = 0,
  we = null,
  fe = null,
  Ee = 0,
  Ie = 0,
  Vn = ln(0),
  he = 0,
  io = null,
  kn = 0,
  Vi = 0,
  Vs = 0,
  Br = null,
  ze = null,
  Qs = 0,
  lr = 1 / 0,
  Rt = null,
  Ci = !1,
  $u = null,
  bt = null,
  Bo = !1,
  Yt = null,
  Ri = 0,
  $r = 0,
  Hu = null,
  Go = -1,
  Zo = 0;
function Oe() {
  return Y & 6 ? ae() : Go !== -1 ? Go : (Go = ae());
}
function en(e) {
  return e.mode & 1
    ? Y & 2 && Ee !== 0
      ? Ee & -Ee
      : my.transition !== null
      ? (Zo === 0 && (Zo = Yf()), Zo)
      : ((e = G), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ed(e.type))), e)
    : 1;
}
function pt(e, t, n, r) {
  if (50 < $r) throw (($r = 0), (Hu = null), Error(x(185)));
  po(e, n, r),
    (!(Y & 2) || e !== we) &&
      (e === we && (!(Y & 2) && (Vi |= n), he === 4 && Qt(e, Ee)),
      Ue(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((lr = ae() + 500), Bi && un()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  mm(e, t);
  var r = ai(e, e === we ? Ee : 0);
  if (r === 0) n !== null && Oa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Oa(n), t === 1))
      e.tag === 0 ? hy(_c.bind(null, e)) : wd(_c.bind(null, e)),
        cy(function () {
          !(Y & 6) && un();
        }),
        (n = null);
    else {
      switch (qf(r)) {
        case 1:
          n = vs;
          break;
        case 4:
          n = Qf;
          break;
        case 16:
          n = si;
          break;
        case 536870912:
          n = Kf;
          break;
        default:
          n = si;
      }
      n = gp(n, fp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function fp(e, t) {
  if (((Go = -1), (Zo = 0), Y & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = ai(e, e === we ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Pi(e, r);
  else {
    t = r;
    var o = Y;
    Y |= 2;
    var i = pp();
    (we !== e || Ee !== t) && ((Rt = null), (lr = ae() + 500), vn(e, t));
    do
      try {
        Fy();
        break;
      } catch (u) {
        dp(e, u);
      }
    while (1);
    Os(), (xi.current = i), (Y = o), fe !== null ? (t = 0) : ((we = null), (Ee = 0), (t = he));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = mu(e)), o !== 0 && ((r = o), (t = Wu(e, o)))), t === 1))
      throw ((n = io), vn(e, 0), Qt(e, r), Ue(e, ae()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !zy(o) &&
          ((t = Pi(e, r)), t === 2 && ((i = mu(e)), i !== 0 && ((r = i), (t = Wu(e, i)))), t === 1))
      )
        throw ((n = io), vn(e, 0), Qt(e, r), Ue(e, ae()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          fn(e, ze, Rt);
          break;
        case 3:
          if ((Qt(e, r), (r & 130023424) === r && ((t = Qs + 500 - ae()), 10 < t))) {
            if (ai(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Oe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ku(fn.bind(null, e, ze, Rt), t);
            break;
          }
          fn(e, ze, Rt);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
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
                : 1960 * Dy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ku(fn.bind(null, e, ze, Rt), r);
            break;
          }
          fn(e, ze, Rt);
          break;
        case 5:
          fn(e, ze, Rt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Ue(e, ae()), e.callbackNode === n ? fp.bind(null, e) : null;
}
function Wu(e, t) {
  var n = Br;
  return (
    e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
    (e = Pi(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && Vu(t)),
    e
  );
}
function Vu(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function zy(e) {
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
function Qt(e, t) {
  for (t &= ~Vs, t &= ~Vi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function _c(e) {
  if (Y & 6) throw Error(x(327));
  Zn();
  var t = ai(e, 0);
  if (!(t & 1)) return Ue(e, ae()), null;
  var n = Pi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = mu(e);
    r !== 0 && ((t = r), (n = Wu(e, r)));
  }
  if (n === 1) throw ((n = io), vn(e, 0), Qt(e, t), Ue(e, ae()), n);
  if (n === 6) throw Error(x(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), fn(e, ze, Rt), Ue(e, ae()), null;
}
function Ks(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((lr = ae() + 500), Bi && un());
  }
}
function xn(e) {
  Yt !== null && Yt.tag === 0 && !(Y & 6) && Zn();
  var t = Y;
  Y |= 1;
  var n = et.transition,
    r = G;
  try {
    if (((et.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (et.transition = n), (Y = t), !(Y & 6) && un();
  }
}
function Ys() {
  (Ie = Vn.current), te(Vn);
}
function vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ay(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var r = n;
      switch ((Ps(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && hi();
          break;
        case 3:
          or(), te(Fe), te(Pe), As();
          break;
        case 5:
          Fs(r);
          break;
        case 4:
          or();
          break;
        case 13:
          te(ie);
          break;
        case 19:
          te(ie);
          break;
        case 10:
          Ls(r.type._context);
          break;
        case 22:
        case 23:
          Ys();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (fe = e = tn(e.current, null)),
    (Ee = Ie = t),
    (he = 0),
    (io = null),
    (Vs = Vi = kn = 0),
    (ze = Br = null),
    hn !== null)
  ) {
    for (t = 0; t < hn.length; t++)
      if (((n = hn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    hn = null;
  }
  return e;
}
function dp(e, t) {
  do {
    var n = fe;
    try {
      if ((Os(), (qo.current = ki), _i)) {
        for (var r = le.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        _i = !1;
      }
      if (
        ((_n = 0), (ge = pe = le = null), (jr = !1), (no = 0), (Ws.current = null), n === null || n.return === null)
      ) {
        (he = 1), (io = t), (fe = null);
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
          var w = ac(l);
          if (w !== null) {
            (w.flags &= -257), cc(w, l, u, i, t), w.mode & 1 && sc(i, a, t), (t = w), (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              sc(i, a, t), qs();
              break e;
            }
            s = Error(x(426));
          }
        } else if (re && u.mode & 1) {
          var R = ac(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), cc(R, l, u, i, t), Ns(ir(s, u));
            break e;
          }
        }
        (i = s = ir(s, u)), he !== 4 && (he = 2), Br === null ? (Br = [i]) : Br.push(i), (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var c = Xd(i, s, t);
              tc(i, c);
              break e;
            case 1:
              u = s;
              var d = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (h !== null && typeof h.componentDidCatch == 'function' && (bt === null || !bt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Jd(i, u, t);
                tc(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      mp(n);
    } catch (C) {
      (t = C), fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function pp() {
  var e = xi.current;
  return (xi.current = ki), e === null ? ki : e;
}
function qs() {
  (he === 0 || he === 3 || he === 2) && (he = 4), we === null || (!(kn & 268435455) && !(Vi & 268435455)) || Qt(we, Ee);
}
function Pi(e, t) {
  var n = Y;
  Y |= 2;
  var r = pp();
  (we !== e || Ee !== t) && ((Rt = null), vn(e, t));
  do
    try {
      My();
      break;
    } catch (o) {
      dp(e, o);
    }
  while (1);
  if ((Os(), (Y = n), (xi.current = r), fe !== null)) throw Error(x(261));
  return (we = null), (Ee = 0), he;
}
function My() {
  for (; fe !== null; ) hp(fe);
}
function Fy() {
  for (; fe !== null && !lm(); ) hp(fe);
}
function hp(e) {
  var t = vp(e.alternate, e, Ie);
  (e.memoizedProps = e.pendingProps), t === null ? mp(e) : (fe = t), (Ws.current = null);
}
function mp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ny(n, t)), n !== null)) {
        (n.flags &= 32767), (fe = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (he = 6), (fe = null);
        return;
      }
    } else if (((n = Py(n, t, Ie)), n !== null)) {
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
function fn(e, t, n) {
  var r = G,
    o = et.transition;
  try {
    (et.transition = null), (G = 1), Ay(e, t, n, r);
  } finally {
    (et.transition = o), (G = r);
  }
  return null;
}
function Ay(e, t, n, r) {
  do Zn();
  while (Yt !== null);
  if (Y & 6) throw Error(x(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ym(e, i),
    e === we && ((fe = we = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Bo ||
      ((Bo = !0),
      gp(si, function () {
        return Zn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = et.transition), (et.transition = null);
    var l = G;
    G = 1;
    var u = Y;
    (Y |= 4),
      (Ws.current = null),
      Oy(e, n),
      ap(n, e),
      ny(Eu),
      (ci = !!Su),
      (Eu = Su = null),
      (e.current = n),
      Ly(n),
      um(),
      (Y = u),
      (G = l),
      (et.transition = i);
  } else e.current = n;
  if (
    (Bo && ((Bo = !1), (Yt = e), (Ri = o)),
    (i = e.pendingLanes),
    i === 0 && (bt = null),
    cm(n.stateNode),
    Ue(e, ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ci) throw ((Ci = !1), (e = $u), ($u = null), e);
  return (
    Ri & 1 && e.tag !== 0 && Zn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Hu ? $r++ : (($r = 0), (Hu = e))) : ($r = 0),
    un(),
    null
  );
}
function Zn() {
  if (Yt !== null) {
    var e = qf(Ri),
      t = et.transition,
      n = G;
    try {
      if (((et.transition = null), (G = 16 > e ? 16 : e), Yt === null)) var r = !1;
      else {
        if (((e = Yt), (Yt = null), (Ri = 0), Y & 6)) throw Error(x(331));
        var o = Y;
        for (Y |= 4, O = e.current; O !== null; ) {
          var i = O,
            l = i.child;
          if (O.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (O = a; O !== null; ) {
                  var f = O;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(8, f, i);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (O = p);
                  else
                    for (; O !== null; ) {
                      f = O;
                      var m = f.sibling,
                        w = f.return;
                      if ((lp(f), f === a)) {
                        O = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (O = m);
                        break;
                      }
                      O = w;
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
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (O = l);
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ir(9, i, i.return);
                }
              var c = i.sibling;
              if (c !== null) {
                (c.return = i.return), (O = c);
                break e;
              }
              O = i.return;
            }
        }
        var d = e.current;
        for (O = d; O !== null; ) {
          l = O;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (O = h);
          else
            e: for (l = d; O !== null; ) {
              if (((u = O), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wi(9, u);
                  }
                } catch (C) {
                  se(u, u.return, C);
                }
              if (u === l) {
                O = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (O = g);
                break e;
              }
              O = u.return;
            }
        }
        if (((Y = o), un(), wt && typeof wt.onPostCommitFiberRoot == 'function'))
          try {
            wt.onPostCommitFiberRoot(Fi, e);
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
function kc(e, t, n) {
  (t = ir(n, t)), (t = Xd(e, t, 1)), (e = Zt(e, t, 1)), (t = Oe()), e !== null && (po(e, 1, t), Ue(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) kc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (bt === null || !bt.has(r)))
        ) {
          (e = ir(n, e)), (e = Jd(t, e, 1)), (t = Zt(t, e, 1)), (e = Oe()), t !== null && (po(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Uy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Ee & n) === n &&
      (he === 4 || (he === 3 && (Ee & 130023424) === Ee && 500 > ae() - Qs) ? vn(e, 0) : (Vs |= n)),
    Ue(e, t);
}
function yp(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Oo), (Oo <<= 1), !(Oo & 130023424) && (Oo = 4194304)) : (t = 1));
  var n = Oe();
  (e = Ft(e, t)), e !== null && (po(e, t, n), Ue(e, n));
}
function jy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yp(e, n);
}
function Iy(e, t) {
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
  r !== null && r.delete(t), yp(e, n);
}
var vp;
vp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), Ry(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), re && t.flags & 1048576 && Sd(t, vi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Jo(e, t), (e = t.pendingProps);
      var o = tr(t, Pe.current);
      Gn(t, n), (o = js(null, t, r, e, o, n));
      var i = Is();
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((i = !0), mi(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            zs(t),
            (o.updater = $i),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ou(t, r, e, n),
            (t = zu(null, t, r, !0, i, n)))
          : ((t.tag = 0), re && i && Rs(t), Te(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Jo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = $y(r)),
          (e = ut(r, e)),
          o)
        ) {
          case 0:
            t = Du(null, t, r, e, n);
            break e;
          case 1:
            t = pc(null, t, r, e, n);
            break e;
          case 11:
            t = fc(null, t, r, e, n);
            break e;
          case 14:
            t = dc(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ut(r, o)), Du(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ut(r, o)), pc(e, t, r, o, n);
    case 3:
      e: {
        if ((ep(t), e === null)) throw Error(x(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), xd(e, t), Si(t, r, null, n);
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
            (o = ir(Error(x(423)), t)), (t = hc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ir(Error(x(424)), t)), (t = hc(e, t, r, n, o));
            break e;
          } else
            for (
              Be = Gt(t.stateNode.containerInfo.firstChild),
                $e = t,
                re = !0,
                ct = null,
                n = Nd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((nr(), r === o)) {
            t = At(e, t, n);
            break e;
          }
          Te(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Td(t),
        e === null && Pu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        _u(r, o) ? (l = null) : i !== null && _u(r, i) && (t.flags |= 32),
        bd(e, t),
        Te(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Pu(t), null;
    case 13:
      return tp(e, t, n);
    case 4:
      return (
        Ms(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rr(t, null, r, n)) : Te(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : ut(r, o)), fc(e, t, r, o, n);
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
          b(gi, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (ht(i.value, l)) {
            if (i.children === o.children && !Fe.current) {
              t = At(e, t, n);
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
                    (i.lanes |= n), (s = i.alternate), s !== null && (s.lanes |= n), Nu(i.return, n, t), (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(x(341));
                (l.lanes |= n), (u = l.alternate), u !== null && (u.lanes |= n), Nu(l, n, t), (l = i.sibling);
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
        Gn(t, n),
        (o = nt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Te(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = ut(r, t.pendingProps)), (o = ut(r.type, o)), dc(e, t, r, o, n);
    case 15:
      return Gd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        Jo(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), mi(t)) : (e = !1),
        Gn(t, n),
        Rd(t, r, o),
        Ou(t, r, o, n),
        zu(null, t, r, !0, e, n)
      );
    case 19:
      return np(e, t, n);
    case 22:
      return Zd(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function gp(e, t) {
  return Vf(e, t);
}
function By(e, t, n, r) {
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
  return new By(e, t, n, r);
}
function Xs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $y(e) {
  if (typeof e == 'function') return Xs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hs)) return 11;
    if (e === ms) return 14;
  }
  return 2;
}
function tn(e, t) {
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
function bo(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) Xs(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case Mn:
        return gn(n.children, o, i, t);
      case ps:
        (l = 8), (o |= 8);
        break;
      case eu:
        return (e = be(12, n, t, o | 2)), (e.elementType = eu), (e.lanes = i), e;
      case tu:
        return (e = be(13, n, t, o)), (e.elementType = tu), (e.lanes = i), e;
      case nu:
        return (e = be(19, n, t, o)), (e.elementType = nu), (e.lanes = i), e;
      case Pf:
        return Qi(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Cf:
              l = 10;
              break e;
            case Rf:
              l = 9;
              break e;
            case hs:
              l = 11;
              break e;
            case ms:
              l = 14;
              break e;
            case Ht:
              (l = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ''));
    }
  return (t = be(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function gn(e, t, n, r) {
  return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function Qi(e, t, n, r) {
  return (e = be(22, e, r, t)), (e.elementType = Pf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Hl(e, t, n) {
  return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function Wl(e, t, n) {
  return (
    (t = be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function Hy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = kl(0)),
    (this.expirationTimes = kl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = kl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Js(e, t, n, r, o, i, l, u, s) {
  return (
    (e = new Hy(e, t, n, u, s)),
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
    zs(i),
    e
  );
}
function Wy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: zn, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function wp(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
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
    if (Ae(n)) return gd(e, n, t);
  }
  return t;
}
function Sp(e, t, n, r, o, i, l, u, s) {
  return (
    (e = Js(n, r, !0, e, o, i, l, u, s)),
    (e.context = wp(null)),
    (n = e.current),
    (r = Oe()),
    (o = en(n)),
    (i = Lt(r, o)),
    (i.callback = t ?? null),
    Zt(n, i, o),
    (e.current.lanes = o),
    po(e, o, r),
    Ue(e, r),
    e
  );
}
function Ki(e, t, n, r) {
  var o = t.current,
    i = Oe(),
    l = en(o);
  return (
    (n = wp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zt(o, t, l)),
    e !== null && (pt(e, o, l, i), Yo(e, o, l)),
    l
  );
}
function Ni(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Gs(e, t) {
  xc(e, t), (e = e.alternate) && xc(e, t);
}
function Vy() {
  return null;
}
var Ep =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Zs(e) {
  this._internalRoot = e;
}
Yi.prototype.render = Zs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Ki(e, t, null, null);
};
Yi.prototype.unmount = Zs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xn(function () {
      Ki(null, e, null, null);
    }),
      (t[Mt] = null);
  }
};
function Yi(e) {
  this._internalRoot = e;
}
Yi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Gf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
    Vt.splice(n, 0, e), n === 0 && bf(e);
  }
};
function bs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Cc() {}
function Qy(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = Ni(l);
        i.call(a);
      };
    }
    var l = Sp(t, r, e, 0, null, !1, !1, '', Cc);
    return (e._reactRootContainer = l), (e[Mt] = l.current), Gr(e.nodeType === 8 ? e.parentNode : e), xn(), l;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = Ni(s);
      u.call(a);
    };
  }
  var s = Js(e, 0, !1, null, null, !1, !1, '', Cc);
  return (
    (e._reactRootContainer = s),
    (e[Mt] = s.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    xn(function () {
      Ki(t, s, n, r);
    }),
    s
  );
}
function Xi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var u = o;
      o = function () {
        var s = Ni(l);
        u.call(s);
      };
    }
    Ki(t, l, e, o);
  } else l = Qy(n, t, e, o, r);
  return Ni(l);
}
Xf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes);
        n !== 0 && (gs(t, n | 1), Ue(t, ae()), !(Y & 6) && ((lr = ae() + 500), un()));
      }
      break;
    case 13:
      xn(function () {
        var r = Ft(e, 1);
        if (r !== null) {
          var o = Oe();
          pt(r, e, 1, o);
        }
      }),
        Gs(e, 1);
  }
};
ws = function (e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Oe();
      pt(t, e, 134217728, n);
    }
    Gs(e, 134217728);
  }
};
Jf = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = Ft(e, t);
    if (n !== null) {
      var r = Oe();
      pt(n, e, t, r);
    }
    Gs(e, t);
  }
};
Gf = function () {
  return G;
};
Zf = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
du = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((iu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ii(r);
            if (!o) throw Error(x(90));
            Tf(r), iu(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Lf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Yn(e, !!n.multiple, t, !1);
  }
};
jf = Ks;
If = xn;
var Ky = { usingClientEntryPoint: !1, Events: [mo, jn, Ii, Af, Uf, Ks] },
  Cr = { findFiberByHostInstance: pn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
  Yy = {
    bundleType: Cr.bundleType,
    version: Cr.version,
    rendererPackageName: Cr.rendererPackageName,
    rendererConfig: Cr.rendererConfig,
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
      return (e = Hf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Cr.findFiberByHostInstance || Vy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$o.isDisabled && $o.supportsFiber)
    try {
      (Fi = $o.inject(Yy)), (wt = $o);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ky;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bs(t)) throw Error(x(200));
  return Wy(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!bs(e)) throw Error(x(299));
  var n = !1,
    r = '',
    o = Ep;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Js(e, 1, !1, null, null, n, !1, r, o)),
    (e[Mt] = t.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    new Zs(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(x(188)) : ((e = Object.keys(e).join(',')), Error(x(268, e)));
  return (e = Hf(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return xn(e);
};
Qe.hydrate = function (e, t, n) {
  if (!qi(t)) throw Error(x(200));
  return Xi(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!bs(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Ep;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Sp(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Mt] = t.current),
    Gr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Yi(t);
};
Qe.render = function (e, t, n) {
  if (!qi(t)) throw Error(x(200));
  return Xi(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!qi(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (xn(function () {
        Xi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Mt] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = Ks;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!qi(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Xi(e, t, n, !1, r);
};
Qe.version = '18.2.0-next-9e3b772b8-20220608';
function _p() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_p);
    } catch (e) {
      console.error(e);
    }
}
_p(), (Sf.exports = Qe);
var qy = Sf.exports,
  Rc = qy;
(Zl.createRoot = Rc.createRoot), (Zl.hydrateRoot = Rc.hydrateRoot);
var kp = Symbol.for('immer-nothing'),
  Pc = Symbol.for('immer-draftable'),
  We = Symbol.for('immer-state');
function ft(e, ...t) {
  throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var ur = Object.getPrototypeOf;
function sr(e) {
  return !!e && !!e[We];
}
function Cn(e) {
  var t;
  return e ? xp(e) || Array.isArray(e) || !!e[Pc] || !!((t = e.constructor) != null && t[Pc]) || Gi(e) || Zi(e) : !1;
}
var Xy = Object.prototype.constructor.toString();
function xp(e) {
  if (!e || typeof e != 'object') return !1;
  const t = ur(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return n === Object ? !0 : typeof n == 'function' && Function.toString.call(n) === Xy;
}
function lo(e, t) {
  Ji(e) === 0
    ? Object.entries(e).forEach(([n, r]) => {
        t(n, r, e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Ji(e) {
  const t = e[We];
  return t ? t.type_ : Array.isArray(e) ? 1 : Gi(e) ? 2 : Zi(e) ? 3 : 0;
}
function Qu(e, t) {
  return Ji(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Cp(e, t, n) {
  const r = Ji(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Jy(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Gi(e) {
  return e instanceof Map;
}
function Zi(e) {
  return e instanceof Set;
}
function dn(e) {
  return e.copy_ || e.base_;
}
function Ku(e, t) {
  if (Gi(e)) return new Map(e);
  if (Zi(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && xp(e)) return ur(e) ? { ...e } : Object.assign(Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[We];
  let r = Reflect.ownKeys(n);
  for (let o = 0; o < r.length; o++) {
    const i = r[o],
      l = n[i];
    l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
      (l.get || l.set) && (n[i] = { configurable: !0, writable: !0, enumerable: l.enumerable, value: e[i] });
  }
  return Object.create(ur(e), n);
}
function ea(e, t = !1) {
  return (
    bi(e) ||
      sr(e) ||
      !Cn(e) ||
      (Ji(e) > 1 && (e.set = e.add = e.clear = e.delete = Gy), Object.freeze(e), t && lo(e, (n, r) => ea(r, !0))),
    e
  );
}
function Gy() {
  ft(2);
}
function bi(e) {
  return Object.isFrozen(e);
}
var Zy = {};
function Rn(e) {
  const t = Zy[e];
  return t || ft(0, e), t;
}
var uo;
function Rp() {
  return uo;
}
function by(e, t) {
  return { drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 };
}
function Nc(e, t) {
  t && (Rn('Patches'), (e.patches_ = []), (e.inversePatches_ = []), (e.patchListener_ = t));
}
function Yu(e) {
  qu(e), e.drafts_.forEach(ev), (e.drafts_ = null);
}
function qu(e) {
  e === uo && (uo = e.parent_);
}
function Tc(e) {
  return (uo = by(uo, e));
}
function ev(e) {
  const t = e[We];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Oc(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[We].modified_ && (Yu(t), ft(4)),
        Cn(e) && ((e = Ti(t, e)), t.parent_ || Oi(t, e)),
        t.patches_ && Rn('Patches').generateReplacementPatches_(n[We].base_, e, t.patches_, t.inversePatches_))
      : (e = Ti(t, n, [])),
    Yu(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== kp ? e : void 0
  );
}
function Ti(e, t, n) {
  if (bi(t)) return t;
  const r = t[We];
  if (!r) return lo(t, (o, i) => Lc(e, r, t, o, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Oi(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o,
      l = !1;
    r.type_ === 3 && ((i = new Set(o)), o.clear(), (l = !0)),
      lo(i, (u, s) => Lc(e, r, o, u, s, n, l)),
      Oi(e, o, !1),
      n && e.patches_ && Rn('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function Lc(e, t, n, r, o, i, l) {
  if (sr(o)) {
    const u = i && t && t.type_ !== 3 && !Qu(t.assigned_, r) ? i.concat(r) : void 0,
      s = Ti(e, o, u);
    if ((Cp(n, r, s), sr(s))) e.canAutoFreeze_ = !1;
    else return;
  } else l && n.add(o);
  if (Cn(o) && !bi(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Ti(e, o), (!t || !t.scope_.parent_) && Oi(e, o);
  }
}
function Oi(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ea(t, n);
}
function tv(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Rp(),
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
    i = ta;
  n && ((o = [r]), (i = so));
  const { revoke: l, proxy: u } = Proxy.revocable(o, i);
  return (r.draft_ = u), (r.revoke_ = l), u;
}
var ta = {
    get(e, t) {
      if (t === We) return e;
      const n = dn(e);
      if (!Qu(n, t)) return nv(e, n, t);
      const r = n[t];
      return e.finalized_ || !Cn(r) ? r : r === Vl(e.base_, t) ? (Ql(e), (e.copy_[t] = Ju(r, e))) : r;
    },
    has(e, t) {
      return t in dn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(dn(e));
    },
    set(e, t, n) {
      const r = Pp(dn(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const o = Vl(dn(e), t),
          i = o == null ? void 0 : o[We];
        if (i && i.base_ === n) return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (Jy(n, o) && (n !== void 0 || Qu(e.base_, t))) return !0;
        Ql(e), Xu(e);
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
        Vl(e.base_, t) !== void 0 || t in e.base_ ? ((e.assigned_[t] = !1), Ql(e), Xu(e)) : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = dn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && { writable: !0, configurable: e.type_ !== 1 || t !== 'length', enumerable: r.enumerable, value: n[t] }
      );
    },
    defineProperty() {
      ft(11);
    },
    getPrototypeOf(e) {
      return ur(e.base_);
    },
    setPrototypeOf() {
      ft(12);
    },
  },
  so = {};
lo(ta, (e, t) => {
  so[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
so.deleteProperty = function (e, t) {
  return so.set.call(this, e, t, void 0);
};
so.set = function (e, t, n) {
  return ta.set.call(this, e[0], t, n, e[0]);
};
function Vl(e, t) {
  const n = e[We];
  return (n ? dn(n) : e)[t];
}
function nv(e, t, n) {
  var o;
  const r = Pp(t, n);
  return r ? ('value' in r ? r.value : (o = r.get) == null ? void 0 : o.call(e.draft_)) : void 0;
}
function Pp(e, t) {
  if (!(t in e)) return;
  let n = ur(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = ur(n);
  }
}
function Xu(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Xu(e.parent_));
}
function Ql(e) {
  e.copy_ || (e.copy_ = Ku(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var rv = class {
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
        if (Cn(t)) {
          const i = Tc(this),
            l = Ju(t, void 0);
          let u = !0;
          try {
            (o = n(l)), (u = !1);
          } finally {
            u ? Yu(i) : qu(i);
          }
          return Nc(i, r), Oc(o, i);
        } else if (!t || typeof t != 'object') {
          if (((o = n(t)), o === void 0 && (o = t), o === kp && (o = void 0), this.autoFreeze_ && ea(o, !0), r)) {
            const i = [],
              l = [];
            Rn('Patches').generateReplacementPatches_(t, o, i, l), r(i, l);
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
    Cn(e) || ft(8), sr(e) && (e = ov(e));
    const t = Tc(this),
      n = Ju(e, void 0);
    return (n[We].isManual_ = !0), qu(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[We];
    (!n || !n.isManual_) && ft(9);
    const { scope_: r } = n;
    return Nc(r, t), Oc(void 0, r);
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
    const r = Rn('Patches').applyPatches_;
    return sr(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
  }
};
function Ju(e, t) {
  const n = Gi(e) ? Rn('MapSet').proxyMap_(e, t) : Zi(e) ? Rn('MapSet').proxySet_(e, t) : tv(e, t);
  return (t ? t.scope_ : Rp()).drafts_.push(n), n;
}
function ov(e) {
  return sr(e) || ft(10, e), Np(e);
}
function Np(e) {
  if (!Cn(e) || bi(e)) return e;
  const t = e[We];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = Ku(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = Ku(e, !0);
  return (
    lo(n, (r, o) => {
      Cp(n, r, Np(o));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Ve = new rv(),
  iv = Ve.produce;
Ve.produceWithPatches.bind(Ve);
Ve.setAutoFreeze.bind(Ve);
Ve.setUseStrictShallowCopy.bind(Ve);
Ve.applyPatches.bind(Ve);
Ve.createDraft.bind(Ve);
Ve.finishDraft.bind(Ve);
function lv(e, t, n) {
  var r = M.useMemo(
    function () {
      return iv(e);
    },
    [e],
  );
  return M.useReducer(r, t, n);
}
const Tp = [],
  Op = M.createContext(Tp),
  Lp = M.createContext(() => ({}));
function uv(e, t) {
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
function sv({ children: e }) {
  const [t, n] = lv(uv, Tp);
  return X.jsx(Op.Provider, { value: t, children: X.jsx(Lp.Provider, { value: n, children: e }) });
}
function av() {
  return M.useContext(Op);
}
function Dp() {
  return M.useContext(Lp);
}
const cv = '_option_1m9vx_1',
  fv = '_option__unanswered_1m9vx_13 _option_1m9vx_1',
  dv = '_option__correct_1m9vx_16 _option_1m9vx_1',
  pv = '_option__incorrect_1m9vx_22 _option_1m9vx_1',
  hv = '_option__selected_1m9vx_28 _option_1m9vx_1',
  mv = { option: cv, option__unanswered: fv, option__correct: dv, option__incorrect: pv, option__selected: hv };
function yv(e) {
  const t = mv[`option__${e.status}`];
  return X.jsx('button', {
    onClick: () => e.onClick(e.option.id),
    className: t,
    children: X.jsx('span', { dangerouslySetInnerHTML: { __html: e.option.text } }),
  });
}
var Gu = ((e) => (
  (e.unanswered = 'unanswered'), (e.correct = 'correct'), (e.incorrect = 'incorrect'), (e.selected = 'selected'), e
))(Gu || {});
const vv = '_question_1ux4o_1',
  gv = '_questionText_1ux4o_4',
  Dc = { question: vv, questionText: gv };
function wv(e) {
  const t = (n) => {
    e.onQuestionAnswered(e.question.id, n);
  };
  return X.jsxs('div', {
    className: Dc.question,
    children: [
      X.jsx('div', { className: Dc.questionText, dangerouslySetInnerHTML: { __html: e.question.text } }),
      X.jsx('div', {
        children: e.question.options.map((n) =>
          X.jsx(
            yv,
            { option: n, status: e.question.selectedOptionId === n.id ? Gu.selected : Gu.unanswered, onClick: t },
            n.id,
          ),
        ),
      }),
    ],
  });
}
const Sv = '_questionList_jh08c_1',
  Ev = { questionList: Sv };
function _v(e) {
  const t = av(),
    n = Dp(),
    [r, o] = M.useState([]),
    i = (l, u) => {
      n({ type: 'answerQuestion', payload: { questionId: l, optionId: u } });
      const s = [...new Set([...r, l])];
      o(s), s.length === t.length && e.onQuizFinished();
    };
  return X.jsx('div', {
    className: Ev.questionList,
    children: t.map((l) => X.jsx(wv, { question: l, onQuestionAnswered: i }, l.id)),
  });
}
function zp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: kv } = Object.prototype,
  { getPrototypeOf: na } = Object,
  el = ((e) => (t) => {
    const n = kv.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Et = (e) => ((e = e.toLowerCase()), (t) => el(t) === e),
  tl = (e) => (t) => typeof t === e,
  { isArray: hr } = Array,
  ao = tl('undefined');
function xv(e) {
  return (
    e !== null &&
    !ao(e) &&
    e.constructor !== null &&
    !ao(e.constructor) &&
    tt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Mp = Et('ArrayBuffer');
function Cv(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && Mp(e.buffer)),
    t
  );
}
const Rv = tl('string'),
  tt = tl('function'),
  Fp = tl('number'),
  nl = (e) => e !== null && typeof e == 'object',
  Pv = (e) => e === !0 || e === !1,
  ei = (e) => {
    if (el(e) !== 'object') return !1;
    const t = na(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Nv = Et('Date'),
  Tv = Et('File'),
  Ov = Et('Blob'),
  Lv = Et('FileList'),
  Dv = (e) => nl(e) && tt(e.pipe),
  zv = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (tt(e.append) &&
          ((t = el(e)) === 'formdata' || (t === 'object' && tt(e.toString) && e.toString() === '[object FormData]'))))
    );
  },
  Mv = Et('URLSearchParams'),
  Fv = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
function vo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), hr(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length;
    let u;
    for (r = 0; r < l; r++) (u = i[r]), t.call(null, e[u], u, e);
  }
}
function Ap(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Up = (() =>
    typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global)(),
  jp = (e) => !ao(e) && e !== Up;
function Zu() {
  const { caseless: e } = (jp(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Ap(t, o)) || o;
      ei(t[i]) && ei(r) ? (t[i] = Zu(t[i], r)) : ei(r) ? (t[i] = Zu({}, r)) : hr(r) ? (t[i] = r.slice()) : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && vo(arguments[r], n);
  return t;
}
const Av = (e, t, n, { allOwnKeys: r } = {}) => (
    vo(
      t,
      (o, i) => {
        n && tt(o) ? (e[i] = zp(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Uv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  jv = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Iv = (e, t, n, r) => {
    let o, i, l;
    const u = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !u[l] && ((t[l] = e[l]), (u[l] = !0));
      e = n !== !1 && na(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Bv = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  $v = (e) => {
    if (!e) return null;
    if (hr(e)) return e;
    let t = e.length;
    if (!Fp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Hv = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && na(Uint8Array)),
  Wv = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  Vv = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Qv = Et('HTMLFormElement'),
  Kv = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  zc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Yv = Et('RegExp'),
  Ip = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    vo(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o);
    }),
      Object.defineProperties(e, r);
  },
  qv = (e) => {
    Ip(e, (t, n) => {
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
  Xv = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return hr(e) ? r(e) : r(String(e).split(t)), n;
  },
  Jv = () => {},
  Gv = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Kl = 'abcdefghijklmnopqrstuvwxyz',
  Mc = '0123456789',
  Bp = { DIGIT: Mc, ALPHA: Kl, ALPHA_DIGIT: Kl + Kl.toUpperCase() + Mc },
  Zv = (e = 16, t = Bp.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function bv(e) {
  return !!(e && tt(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator]);
}
const e0 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (nl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const i = hr(r) ? [] : {};
            return (
              vo(r, (l, u) => {
                const s = n(l, o + 1);
                !ao(s) && (i[u] = s);
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
  t0 = Et('AsyncFunction'),
  n0 = (e) => e && (nl(e) || tt(e)) && tt(e.then) && tt(e.catch),
  _ = {
    isArray: hr,
    isArrayBuffer: Mp,
    isBuffer: xv,
    isFormData: zv,
    isArrayBufferView: Cv,
    isString: Rv,
    isNumber: Fp,
    isBoolean: Pv,
    isObject: nl,
    isPlainObject: ei,
    isUndefined: ao,
    isDate: Nv,
    isFile: Tv,
    isBlob: Ov,
    isRegExp: Yv,
    isFunction: tt,
    isStream: Dv,
    isURLSearchParams: Mv,
    isTypedArray: Hv,
    isFileList: Lv,
    forEach: vo,
    merge: Zu,
    extend: Av,
    trim: Fv,
    stripBOM: Uv,
    inherits: jv,
    toFlatObject: Iv,
    kindOf: el,
    kindOfTest: Et,
    endsWith: Bv,
    toArray: $v,
    forEachEntry: Wv,
    matchAll: Vv,
    isHTMLForm: Qv,
    hasOwnProperty: zc,
    hasOwnProp: zc,
    reduceDescriptors: Ip,
    freezeMethods: qv,
    toObjectSet: Xv,
    toCamelCase: Kv,
    noop: Jv,
    toFiniteNumber: Gv,
    findKey: Ap,
    global: Up,
    isContextDefined: jp,
    ALPHABET: Bp,
    generateString: Zv,
    isSpecCompliantForm: bv,
    toJSONObject: e0,
    isAsyncFn: t0,
    isThenable: n0,
  };
function Q(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
_.inherits(Q, Error, {
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
const $p = Q.prototype,
  Hp = {};
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
  Hp[e] = { value: e };
});
Object.defineProperties(Q, Hp);
Object.defineProperty($p, 'isAxiosError', { value: !0 });
Q.from = (e, t, n, r, o, i) => {
  const l = Object.create($p);
  return (
    _.toFlatObject(
      e,
      l,
      function (s) {
        return s !== Error.prototype;
      },
      (u) => u !== 'isAxiosError',
    ),
    Q.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  );
};
const r0 = null;
function bu(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function Wp(e) {
  return _.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function Fc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Wp(o)), !n && i ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}
function o0(e) {
  return _.isArray(e) && !e.some(bu);
}
const i0 = _.toFlatObject(_, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function rl(e, t, n) {
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
    if (!s && _.isBlob(y)) throw new Q('Blob is not supported. Use a Buffer instead.');
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
      else if ((_.isArray(y) && o0(y)) || ((_.isFileList(y) || _.endsWith(v, '[]')) && (c = _.toArray(y))))
        return (
          (v = Wp(v)),
          c.forEach(function (h, g) {
            !(_.isUndefined(h) || h === null) && t.append(l === !0 ? Fc([v], g, i) : l === null ? v : v + '[]', a(h));
          }),
          !1
        );
    }
    return bu(y) ? !0 : (t.append(Fc(R, v, i), a(y)), !1);
  }
  const p = [],
    m = Object.assign(i0, { defaultVisitor: f, convertValue: a, isVisitable: bu });
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
function Ac(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ra(e, t) {
  (this._pairs = []), e && rl(e, this, t);
}
const Vp = ra.prototype;
Vp.append = function (t, n) {
  this._pairs.push([t, n]);
};
Vp.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ac);
      }
    : Ac;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};
function l0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Qp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || l0,
    o = n && n.serialize;
  let i;
  if ((o ? (i = o(t, n)) : (i = _.isURLSearchParams(t) ? t.toString() : new ra(t, n).toString(r)), i)) {
    const l = e.indexOf('#');
    l !== -1 && (e = e.slice(0, l)), (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class u0 {
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
const Uc = u0,
  Kp = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  s0 = typeof URLSearchParams < 'u' ? URLSearchParams : ra,
  a0 = typeof FormData < 'u' ? FormData : null,
  c0 = typeof Blob < 'u' ? Blob : null,
  f0 = (() => {
    let e;
    return typeof navigator < 'u' && ((e = navigator.product) === 'ReactNative' || e === 'NativeScript' || e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  })(),
  d0 = (() =>
    typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function')(),
  gt = {
    isBrowser: !0,
    classes: { URLSearchParams: s0, FormData: a0, Blob: c0 },
    isStandardBrowserEnv: f0,
    isStandardBrowserWebWorkerEnv: d0,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
function p0(e, t) {
  return rl(
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
function h0(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function m0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Yp(e) {
  function t(n, r, o, i) {
    let l = n[i++];
    const u = Number.isFinite(+l),
      s = i >= n.length;
    return (
      (l = !l && _.isArray(o) ? o.length : l),
      s
        ? (_.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !u)
        : ((!o[l] || !_.isObject(o[l])) && (o[l] = []), t(n, r, o[l], i) && _.isArray(o[l]) && (o[l] = m0(o[l])), !u)
    );
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return (
      _.forEachEntry(e, (r, o) => {
        t(h0(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
const y0 = { 'Content-Type': void 0 };
function v0(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const ol = {
  transitional: Kp,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = _.isObject(t);
      if ((i && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))) return o && o ? JSON.stringify(Yp(t)) : t;
      if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t)) return t;
      if (_.isArrayBufferView(t)) return t.buffer;
      if (_.isURLSearchParams(t))
        return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString();
      let u;
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1) return p0(t, this.formSerializer).toString();
        if ((u = _.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData;
          return rl(u ? { 'files[]': t } : t, s && new s(), this.formSerializer);
        }
      }
      return i || o ? (n.setContentType('application/json', !1), v0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ol.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (t && _.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (u) {
          if (l) throw u.name === 'SyntaxError' ? Q.from(u, Q.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
  ol.headers[t] = {};
});
_.forEach(['post', 'put', 'patch'], function (t) {
  ol.headers[t] = _.merge(y0);
});
const oa = ol,
  g0 = _.toObjectSet([
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
  w0 = (e) => {
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
              !(!n || (t[n] && g0[n])) &&
                (n === 'set-cookie' ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  jc = Symbol('internals');
function Rr(e) {
  return e && String(e).trim().toLowerCase();
}
function ti(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(ti) : String(e);
}
function S0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const E0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Yl(e, t, n, r, o) {
  if (_.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!_.isString(t))) {
    if (_.isString(r)) return t.indexOf(r) !== -1;
    if (_.isRegExp(r)) return r.test(t);
  }
}
function _0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function k0(e, t) {
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
class il {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(u, s, a) {
      const f = Rr(s);
      if (!f) throw new Error('header name must be a non-empty string');
      const p = _.findKey(o, f);
      (!p || o[p] === void 0 || a === !0 || (a === void 0 && o[p] !== !1)) && (o[p || s] = ti(u));
    }
    const l = (u, s) => _.forEach(u, (a, f) => i(a, f, s));
    return (
      _.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : _.isString(t) && (t = t.trim()) && !E0(t)
        ? l(w0(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Rr(t)), t)) {
      const r = _.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return S0(o);
        if (_.isFunction(n)) return n.call(this, o, r);
        if (_.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = Rr(t)), t)) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Yl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(l) {
      if (((l = Rr(l)), l)) {
        const u = _.findKey(r, l);
        u && (!n || Yl(r, r[u], u, n)) && (delete r[u], (o = !0));
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
      (!t || Yl(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
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
          (n[l] = ti(o)), delete n[i];
          return;
        }
        const u = t ? _0(i) : String(i).trim();
        u !== i && delete n[i], (n[u] = ti(o)), (r[u] = !0);
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
    const r = (this[jc] = this[jc] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(l) {
      const u = Rr(l);
      r[u] || (k0(o, l), (r[u] = !0));
    }
    return _.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
il.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
_.freezeMethods(il.prototype);
_.freezeMethods(il);
const Dt = il;
function ql(e, t) {
  const n = this || oa,
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
function qp(e) {
  return !!(e && e.__CANCEL__);
}
function go(e, t, n) {
  Q.call(this, e ?? 'canceled', Q.ERR_CANCELED, t, n), (this.name = 'CanceledError');
}
_.inherits(go, Q, { __CANCEL__: !0 });
function x0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Q(
          'Request failed with status code ' + n.status,
          [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n,
        ),
      );
}
const C0 = gt.isStandardBrowserEnv
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
function R0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function P0(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Xp(e, t) {
  return e && !R0(t) ? P0(e, t) : t;
}
const N0 = gt.isStandardBrowserEnv
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
function T0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function O0(e, t) {
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
function Ic(e, t) {
  let n = 0;
  const r = O0(50, 250);
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
const L0 = typeof XMLHttpRequest < 'u',
  D0 =
    L0 &&
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
        const f = Xp(e.baseURL, e.url);
        a.open(e.method.toUpperCase(), Qp(f, e.params, e.paramsSerializer), !0), (a.timeout = e.timeout);
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
          x0(
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
            a && (r(new Q('Request aborted', Q.ECONNABORTED, e, a)), (a = null));
          }),
          (a.onerror = function () {
            r(new Q('Network Error', Q.ERR_NETWORK, e, a)), (a = null);
          }),
          (a.ontimeout = function () {
            let y = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded';
            const v = e.transitional || Kp;
            e.timeoutErrorMessage && (y = e.timeoutErrorMessage),
              r(new Q(y, v.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED, e, a)),
              (a = null);
          }),
          gt.isStandardBrowserEnv)
        ) {
          const w = (e.withCredentials || N0(f)) && e.xsrfCookieName && C0.read(e.xsrfCookieName);
          w && i.set(e.xsrfHeaderName, w);
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in a &&
            _.forEach(i.toJSON(), function (y, v) {
              a.setRequestHeader(v, y);
            }),
          _.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials),
          l && l !== 'json' && (a.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' && a.addEventListener('progress', Ic(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            a.upload &&
            a.upload.addEventListener('progress', Ic(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (w) => {
              a && (r(!w || w.type ? new go(null, e, a) : w), a.abort(), (a = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal && (e.signal.aborted ? u() : e.signal.addEventListener('abort', u)));
        const m = T0(f);
        if (m && gt.protocols.indexOf(m) === -1) {
          r(new Q('Unsupported protocol ' + m + ':', Q.ERR_BAD_REQUEST, e));
          return;
        }
        a.send(o || null);
      });
    },
  ni = { http: r0, xhr: D0 };
_.forEach(ni, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const z0 = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && ((n = e[o]), !(r = _.isString(n) ? ni[n.toLowerCase()] : n)); o++);
    if (!r)
      throw r === !1
        ? new Q(`Adapter ${n} is not supported by the environment`, 'ERR_NOT_SUPPORT')
        : new Error(_.hasOwnProp(ni, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
    if (!_.isFunction(r)) throw new TypeError('adapter is not a function');
    return r;
  },
  adapters: ni,
};
function Xl(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new go(null, e);
}
function Bc(e) {
  return (
    Xl(e),
    (e.headers = Dt.from(e.headers)),
    (e.data = ql.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    z0
      .getAdapter(e.adapter || oa.adapter)(e)
      .then(
        function (r) {
          return Xl(e), (r.data = ql.call(e, e.transformResponse, r)), (r.headers = Dt.from(r.headers)), r;
        },
        function (r) {
          return (
            qp(r) ||
              (Xl(e),
              r &&
                r.response &&
                ((r.response.data = ql.call(e, e.transformResponse, r.response)),
                (r.response.headers = Dt.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
  );
}
const $c = (e) => (e instanceof Dt ? e.toJSON() : e);
function ar(e, t) {
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
    headers: (a, f) => o($c(a), $c(f), !0),
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
const Jp = '1.4.0',
  ia = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  ia[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
  };
});
const Hc = {};
ia.transitional = function (t, n, r) {
  function o(i, l) {
    return '[Axios v' + Jp + "] Transitional option '" + i + "'" + l + (r ? '. ' + r : '');
  }
  return (i, l, u) => {
    if (t === !1) throw new Q(o(l, ' has been removed' + (n ? ' in ' + n : '')), Q.ERR_DEPRECATED);
    return (
      n &&
        !Hc[l] &&
        ((Hc[l] = !0),
        console.warn(o(l, ' has been deprecated since v' + n + ' and will be removed in the near future'))),
      t ? t(i, l, u) : !0
    );
  };
};
function M0(e, t, n) {
  if (typeof e != 'object') throw new Q('options must be an object', Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i];
    if (l) {
      const u = e[i],
        s = u === void 0 || l(u, i, e);
      if (s !== !0) throw new Q('option ' + i + ' must be ' + s, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Q('Unknown option ' + i, Q.ERR_BAD_OPTION);
  }
}
const es = { assertOptions: M0, validators: ia },
  $t = es.validators;
class Li {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new Uc(), response: new Uc() });
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = ar(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      es.assertOptions(
        r,
        {
          silentJSONParsing: $t.transitional($t.boolean),
          forcedJSONParsing: $t.transitional($t.boolean),
          clarifyTimeoutError: $t.transitional($t.boolean),
        },
        !1,
      ),
      o != null &&
        (_.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : es.assertOptions(o, { encode: $t.function, serialize: $t.function }, !0)),
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
      const y = [Bc.bind(this), void 0];
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
      f = Bc.call(this, w);
    } catch (y) {
      return Promise.reject(y);
    }
    for (p = 0, m = a.length; p < m; ) f = f.then(a[p++], a[p++]);
    return f;
  }
  getUri(t) {
    t = ar(this.defaults, t);
    const n = Xp(t.baseURL, t.url);
    return Qp(n, t.params, t.paramsSerializer);
  }
}
_.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Li.prototype[t] = function (n, r) {
    return this.request(ar(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
_.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, l, u) {
      return this.request(
        ar(u || {}, { method: t, headers: r ? { 'Content-Type': 'multipart/form-data' } : {}, url: i, data: l }),
      );
    };
  }
  (Li.prototype[t] = n()), (Li.prototype[t + 'Form'] = n(!0));
});
const ri = Li;
class la {
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
        r.reason || ((r.reason = new go(i, l, u)), n(r.reason));
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
      token: new la(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const F0 = la;
function A0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function U0(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const ts = {
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
Object.entries(ts).forEach(([e, t]) => {
  ts[t] = e;
});
const j0 = ts;
function Gp(e) {
  const t = new ri(e),
    n = zp(ri.prototype.request, t);
  return (
    _.extend(n, ri.prototype, t, { allOwnKeys: !0 }),
    _.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Gp(ar(e, o));
    }),
    n
  );
}
const me = Gp(oa);
me.Axios = ri;
me.CanceledError = go;
me.CancelToken = F0;
me.isCancel = qp;
me.VERSION = Jp;
me.toFormData = rl;
me.AxiosError = Q;
me.Cancel = me.CanceledError;
me.all = function (t) {
  return Promise.all(t);
};
me.spread = A0;
me.isAxiosError = U0;
me.mergeConfig = ar;
me.AxiosHeaders = Dt;
me.formToJSON = (e) => Yp(_.isHTMLForm(e) ? new FormData(e) : e);
me.HttpStatusCode = j0;
me.default = me;
const Wc = me,
  Zp = async (e, t) => {
    try {
      return (await Wc.get(e, { signal: t == null ? void 0 : t.abortAxiosSignal })).data;
    } catch (n) {
      (!Wc.isAxiosError(n) || n.code !== 'ERR_CANCELED') && console.error(n);
    }
  },
  I0 = async (e) => {
    const t = await Zp('https://opentdb.com/api_category.php', e);
    return (t == null ? void 0 : t.trivia_categories) ?? [];
  },
  B0 = (e) => ({ value: e.id.toString(), label: e.name }),
  $0 = async (e, t) => {
    const n = await Zp(
      `https://opentdb.com/api.php?amount=5&category=${e.categoryId}&difficulty=${e.difficulty}&type=multiple`,
      t,
    );
    return n ? H0(n) : [];
  },
  H0 = (e) => e.results.map((t, n) => W0(t, n.toString())),
  W0 = (e, t) => {
    const n = [
        ...e.incorrect_answers.map((o) => ({ text: o, isAnswer: !1 })),
        { text: e.correct_answer, isAnswer: !0 },
      ],
      r = V0(n).map((o, i) => ({ id: i.toString(), ...o }));
    return { id: t, text: e.question, options: r };
  },
  V0 = (e) => e.sort(() => Math.random() - 0.5),
  Q0 = '_customSelect_1uk1g_1',
  K0 = { customSelect: Q0 };
function Vc(e) {
  return X.jsxs('select', {
    id: e.id,
    value: e.value,
    defaultValue: '',
    onChange: (t) => e.onChange(t.target.value),
    className: K0.customSelect,
    children: [
      X.jsx('option', { value: '', disabled: !0, children: e.placeholder ?? 'Select your option' }),
      e.options.map((t) => X.jsx('option', { value: t.value, children: t.label ?? t.value }, t.value)),
    ],
  });
}
var oi = ((e) => ((e.Easy = 'easy'), (e.Medium = 'medium'), (e.Hard = 'hard'), e))(oi || {});
const Y0 = '_createButton_hrbk9_1',
  q0 = { createButton: Y0 };
function X0() {
  const [e, t] = M.useState([]),
    [n, r] = M.useState(void 0);
  M.useEffect(() => {
    const a = new AbortController();
    return (
      (async () => {
        const p = (await I0({ abortAxiosSignal: a.signal })).map(B0);
        t(p);
      })(),
      () => {
        a.abort();
      }
    );
  }, []);
  const o = [{ value: oi.Easy }, { value: oi.Medium }, { value: oi.Hard }],
    [i, l] = M.useState(void 0),
    u = Dp(),
    s = async (a, f) => {
      const p = await $0({ categoryId: a, difficulty: f });
      u({ type: 'create', payload: p });
    };
  return X.jsxs(X.Fragment, {
    children: [
      X.jsx(Vc, { id: 'categorySelect', placeholder: 'Select a category', options: e, value: n, onChange: r }),
      X.jsx(Vc, {
        id: 'difficultySelect',
        placeholder: 'Select difficulty',
        options: o,
        value: i,
        onChange: (a) => l(a),
      }),
      X.jsx('button', {
        id: 'createBtn',
        className: q0.createButton,
        disabled: !n || !i,
        onClick: () => s(n, i),
        children: 'Create',
      }),
    ],
  });
}
function J0() {
  const [e, t] = M.useState(!1),
    n = () => {
      t(!0);
    };
  return X.jsxs(X.Fragment, {
    children: [
      X.jsx('h1', { children: 'QUIZ MAKER' }),
      X.jsx(X0, {}),
      X.jsx(_v, { onQuizFinished: n }),
      e && X.jsx('div', { children: 'Quiz Finished' }),
    ],
  });
}
function G0() {
  return X.jsx('div', { children: X.jsx('h1', { children: 'QuizResults' }) });
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
 */ function J() {
  return (
    (J = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    J.apply(this, arguments)
  );
}
var ce;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(ce || (ce = {}));
const Qc = 'popstate';
function Z0(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: u } = r.location;
    return co(
      '',
      { pathname: i, search: l, hash: u },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : wo(o);
  }
  return eg(t, n, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function cr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function b0() {
  return Math.random().toString(36).substr(2, 8);
}
function Kc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function co(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    J({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? jt(t) : t, {
      state: n,
      key: (t && t.key) || r || b0(),
    })
  );
}
function wo(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function jt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function eg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    u = ce.Pop,
    s = null,
    a = f();
  a == null && ((a = 0), l.replaceState(J({}, l.state, { idx: a }), ''));
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
    let d = co(v.location, R, c);
    n && n(d, R), (a = f() + 1);
    let h = Kc(d, a),
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
    let d = co(v.location, R, c);
    n && n(d, R), (a = f());
    let h = Kc(d, a),
      g = v.createHref(d);
    l.replaceState(h, '', g), i && s && s({ action: u, location: v.location, delta: 0 });
  }
  function y(R) {
    let c = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      d = typeof R == 'string' ? R : wo(R);
    return K(c, 'No window.location.(origin|href) available to create URL for href: ' + d), new URL(d, c);
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
        o.addEventListener(Qc, p),
        (s = R),
        () => {
          o.removeEventListener(Qc, p), (s = null);
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
const tg = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function ng(e) {
  return e.index === !0;
}
function ns(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let l = [...n, i],
        u = typeof o.id == 'string' ? o.id : l.join('-');
      if (
        (K(o.index !== !0 || !o.children, 'Cannot specify children on an index route'),
        K(
          !r[u],
          'Found a route id collision on id "' + u + `".  Route id's must be globally unique within Data Router usages`,
        ),
        ng(o))
      ) {
        let s = J({}, o, t(o), { id: u });
        return (r[u] = s), s;
      } else {
        let s = J({}, o, t(o), { id: u, children: void 0 });
        return (r[u] = s), o.children && (s.children = ns(o.children, t, l, r)), s;
      }
    })
  );
}
function Qn(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? jt(t) : t,
    o = So(r.pathname || '/', n);
  if (o == null) return null;
  let i = bp(e);
  rg(i);
  let l = null;
  for (let u = 0; l == null && u < i.length; ++u) l = dg(i[u], mg(o));
  return l;
}
function bp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, l, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || '' : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    s.relativePath.startsWith('/') &&
      (K(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = wn([r, s.relativePath]),
      f = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (K(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + a + '".'),
      ),
      bp(i.children, t, f, a)),
      !(i.path == null && !i.index) && t.push({ path: a, score: cg(a, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, l) => {
      var u;
      if (i.path === '' || !((u = i.path) != null && u.includes('?'))) o(i, l);
      else for (let s of eh(i.path)) o(i, l, s);
    }),
    t
  );
}
function eh(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let l = eh(r.join('/')),
    u = [];
  return (
    u.push(...l.map((s) => (s === '' ? i : [i, s].join('/')))),
    o && u.push(...l),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function rg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : fg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const og = /^:\w+$/,
  ig = 3,
  lg = 2,
  ug = 1,
  sg = 10,
  ag = -2,
  Yc = (e) => e === '*';
function cg(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Yc) && (r += ag),
    t && (r += lg),
    n.filter((o) => !Yc(o)).reduce((o, i) => o + (og.test(i) ? ig : i === '' ? ug : sg), r)
  );
}
function fg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function dg(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let u = n[l],
      s = l === n.length - 1,
      a = o === '/' ? t : t.slice(o.length) || '/',
      f = pg({ path: u.relativePath, caseSensitive: u.caseSensitive, end: s }, a);
    if (!f) return null;
    Object.assign(r, f.params);
    let p = u.route;
    i.push({ params: r, pathname: wn([o, f.pathname]), pathnameBase: Sg(wn([o, f.pathnameBase])), route: p }),
      f.pathnameBase !== '/' && (o = wn([o, f.pathnameBase]));
  }
  return i;
}
function pg(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = hg(e.path, e.caseSensitive, e.end),
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
      return (a[f] = yg(u[p] || '', f)), a;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function hg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cr(
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
function mg(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      cr(
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
function yg(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      cr(
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
function So(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function vg(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: o = '' } = typeof e == 'string' ? jt(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : gg(n, t)) : t, search: Eg(r), hash: _g(o) };
}
function gg(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Jl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function th(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function wg(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = jt(e))
    : ((o = J({}, e)),
      K(!o.pathname || !o.pathname.includes('?'), Jl('?', 'pathname', 'search', o)),
      K(!o.pathname || !o.pathname.includes('#'), Jl('#', 'pathname', 'hash', o)),
      K(!o.search || !o.search.includes('#'), Jl('#', 'search', 'hash', o)));
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
  let s = vg(o, u),
    a = l && l !== '/' && l.endsWith('/'),
    f = (i || l === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (a || f) && (s.pathname += '/'), s;
}
const wn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Sg = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Eg = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  _g = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class ua {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = o),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function nh(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const rh = ['post', 'put', 'patch', 'delete'],
  kg = new Set(rh),
  xg = ['get', ...rh],
  Cg = new Set(xg),
  Rg = new Set([301, 302, 303, 307, 308]),
  Pg = new Set([307, 308]),
  Gl = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Ng = { state: 'idle', data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0 },
  qc = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  oh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ih = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  Tg = !ih,
  Og = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function Lg(e) {
  K(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let t;
  if (e.mapRouteProperties) t = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let S = e.detectErrorBoundary;
    t = (E) => ({ hasErrorBoundary: S(E) });
  } else t = Og;
  let n = {},
    r = ns(e.routes, t, void 0, n),
    o,
    i = e.basename || '/',
    l = J({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    u = null,
    s = new Set(),
    a = null,
    f = null,
    p = null,
    m = e.hydrationData != null,
    w = Qn(r, e.history.location, i),
    y = null;
  if (w == null) {
    let S = st(404, { pathname: e.history.location.pathname }),
      { matches: E, route: k } = tf(r);
    (w = E), (y = { [k.id]: S });
  }
  let v = !w.some((S) => S.route.lazy) && (!w.some((S) => S.route.loader) || e.hydrationData != null),
    R,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: w,
      initialized: v,
      navigation: Gl,
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
    P = !1,
    N = [],
    D = [],
    I = new Map(),
    H = 0,
    Ne = -1,
    ot = new Map(),
    it = new Set(),
    _t = new Map(),
    kt = new Map(),
    Ye = new Map(),
    sn = !1;
  function T() {
    return (
      (u = e.history.listen((S) => {
        let { action: E, location: k, delta: L } = S;
        if (sn) {
          sn = !1;
          return;
        }
        cr(
          Ye.size === 0 || L != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let z = ma({ currentLocation: c.location, nextLocation: k, historyAction: E });
        if (z && L != null) {
          (sn = !0),
            e.history.go(L * -1),
            Eo(z, {
              state: 'blocked',
              location: k,
              proceed() {
                Eo(z, { state: 'proceeding', proceed: void 0, reset: void 0, location: k }), e.history.go(L);
              },
              reset() {
                yr(z), W({ blockers: new Map(R.state.blockers) });
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
  function j() {
    u && u(), s.clear(), g && g.abort(), c.fetchers.forEach((S, E) => cl(E)), c.blockers.forEach((S, E) => yr(E));
  }
  function $(S) {
    return s.add(S), () => s.delete(S);
  }
  function W(S) {
    (c = J({}, c, S)), s.forEach((E) => E(c));
  }
  function ne(S, E) {
    var k, L;
    let z =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        Pt(c.navigation.formMethod) &&
        c.navigation.state === 'loading' &&
        ((k = S.state) == null ? void 0 : k._isRedirect) !== !0,
      U;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (U = E.actionData)
        : (U = null)
      : z
      ? (U = c.actionData)
      : (U = null);
    let B = E.loaderData ? ef(c.loaderData, E.loaderData, E.matches || [], E.errors) : c.loaderData;
    for (let [F] of Ye) yr(F);
    let A =
      h === !0 ||
      (c.navigation.formMethod != null &&
        Pt(c.navigation.formMethod) &&
        ((L = S.state) == null ? void 0 : L._isRedirect) !== !0);
    o && ((r = o), (o = void 0)),
      W(
        J({}, E, {
          actionData: U,
          loaderData: B,
          historyAction: d,
          location: S,
          initialized: !0,
          navigation: Gl,
          revalidation: 'idle',
          restoreScrollPosition: ya(S, E.matches || c.matches),
          preventScrollReset: A,
          blockers: new Map(c.blockers),
        }),
      ),
      C ||
        d === ce.Pop ||
        (d === ce.Push ? e.history.push(S, S.state) : d === ce.Replace && e.history.replace(S, S.state)),
      (d = ce.Pop),
      (h = !1),
      (C = !1),
      (P = !1),
      (N = []),
      (D = []);
  }
  async function an(S, E) {
    if (typeof S == 'number') {
      e.history.go(S);
      return;
    }
    let k = rs(
        c.location,
        c.matches,
        i,
        l.v7_prependBasename,
        S,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative,
      ),
      { path: L, submission: z, error: U } = Xc(l.v7_normalizeFormMethod, !1, k, E),
      B = c.location,
      A = co(c.location, L, E && E.state);
    A = J({}, A, e.history.encodeLocation(A));
    let F = E && E.replace != null ? E.replace : void 0,
      q = ce.Push;
    F === !0
      ? (q = ce.Replace)
      : F === !1 ||
        (z != null && Pt(z.formMethod) && z.formAction === c.location.pathname + c.location.search && (q = ce.Replace));
    let Z = E && 'preventScrollReset' in E ? E.preventScrollReset === !0 : void 0,
      ke = ma({ currentLocation: B, nextLocation: A, historyAction: q });
    if (ke) {
      Eo(ke, {
        state: 'blocked',
        location: A,
        proceed() {
          Eo(ke, { state: 'proceeding', proceed: void 0, reset: void 0, location: A }), an(S, E);
        },
        reset() {
          yr(ke), W({ blockers: new Map(c.blockers) });
        },
      });
      return;
    }
    return await qe(q, A, { submission: z, pendingError: U, preventScrollReset: Z, replace: E && E.replace });
  }
  function xt() {
    if ((sl(), W({ revalidation: 'loading' }), c.navigation.state !== 'submitting')) {
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
      wh(c.location, c.matches),
      (h = (k && k.preventScrollReset) === !0);
    let L = o || r,
      z = k && k.overrideNavigation,
      U = Qn(L, E, i);
    if (!U) {
      let ye = st(404, { pathname: E.pathname }),
        { matches: ve, route: Xe } = tf(L);
      fl(), ne(E, { matches: ve, loaderData: {}, errors: { [Xe.id]: ye } });
      return;
    }
    if (c.initialized && Ag(c.location, E) && !(k && k.submission && Pt(k.submission.formMethod))) {
      ne(E, { matches: U });
      return;
    }
    g = new AbortController();
    let B = Nr(e.history, E, g.signal, k && k.submission),
      A,
      F;
    if (k && k.pendingError) F = { [Kn(U).route.id]: k.pendingError };
    else if (k && k.submission && Pt(k.submission.formMethod)) {
      let ye = await Ct(B, E, k.submission, U, { replace: k.replace });
      if (ye.shortCircuited) return;
      (A = ye.pendingActionData),
        (F = ye.pendingActionError),
        (z = J({ state: 'loading', location: E }, k.submission)),
        (B = new Request(B.url, { signal: B.signal }));
    }
    let {
      shortCircuited: q,
      loaderData: Z,
      errors: ke,
    } = await Tn(B, E, U, z, k && k.submission, k && k.fetcherSubmission, k && k.replace, A, F);
    q || ((g = null), ne(E, J({ matches: U }, A ? { actionData: A } : {}, { loaderData: Z, errors: ke })));
  }
  async function Ct(S, E, k, L, z) {
    sl();
    let U = J({ state: 'submitting', location: E }, k);
    W({ navigation: U });
    let B,
      A = os(L, E);
    if (!A.route.action && !A.route.lazy)
      B = { type: de.error, error: st(405, { method: S.method, pathname: E.pathname, routeId: A.route.id }) };
    else if (((B = await Pr('action', S, A, L, n, t, i)), S.signal.aborted)) return { shortCircuited: !0 };
    if (bn(B)) {
      let F;
      return (
        z && z.replace != null ? (F = z.replace) : (F = B.location === c.location.pathname + c.location.search),
        await mr(c, B, { submission: k, replace: F }),
        { shortCircuited: !0 }
      );
    }
    if (Hr(B)) {
      let F = Kn(L, A.route.id);
      return (
        (z && z.replace) !== !0 && (d = ce.Push),
        { pendingActionData: {}, pendingActionError: { [F.route.id]: B.error } }
      );
    }
    if (yn(B)) throw st(400, { type: 'defer-action' });
    return { pendingActionData: { [A.route.id]: B.data } };
  }
  async function Tn(S, E, k, L, z, U, B, A, F) {
    let q = L;
    q ||
      (q = J(
        {
          state: 'loading',
          location: E,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        z,
      ));
    let Z =
        z || U
          ? z || U
          : q.formMethod && q.formAction && q.formData && q.formEncType
          ? { formMethod: q.formMethod, formAction: q.formAction, formData: q.formData, formEncType: q.formEncType }
          : void 0,
      ke = o || r,
      [ye, ve] = Jc(e.history, c, k, Z, E, P, N, D, _t, ke, i, A, F);
    if (
      (fl((oe) => !(k && k.some((Je) => Je.route.id === oe)) || (ye && ye.some((Je) => Je.route.id === oe))),
      ye.length === 0 && ve.length === 0)
    ) {
      let oe = pa();
      return (
        ne(
          E,
          J(
            { matches: k, loaderData: {}, errors: F || null },
            A ? { actionData: A } : {},
            oe ? { fetchers: new Map(c.fetchers) } : {},
          ),
        ),
        { shortCircuited: !0 }
      );
    }
    if (!C) {
      ve.forEach((Je) => {
        let Ln = c.fetchers.get(Je.key),
          yl = {
            state: 'loading',
            data: Ln && Ln.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          };
        c.fetchers.set(Je.key, yl);
      });
      let oe = A || c.actionData;
      W(
        J(
          { navigation: q },
          oe ? (Object.keys(oe).length === 0 ? { actionData: null } : { actionData: oe }) : {},
          ve.length > 0 ? { fetchers: new Map(c.fetchers) } : {},
        ),
      );
    }
    (Ne = ++H),
      ve.forEach((oe) => {
        oe.controller && I.set(oe.key, oe.controller);
      });
    let Xe = () => ve.forEach((oe) => On(oe.key));
    g && g.signal.addEventListener('abort', Xe);
    let { results: vr, loaderResults: dl, fetcherResults: _o } = await fa(c.matches, k, ye, ve, S);
    if (S.signal.aborted) return { shortCircuited: !0 };
    g && g.signal.removeEventListener('abort', Xe), ve.forEach((oe) => I.delete(oe.key));
    let It = nf(vr);
    if (It) return await mr(c, It, { replace: B }), { shortCircuited: !0 };
    let { loaderData: ko, errors: pl } = bc(c, k, ye, dl, F, ve, _o, kt);
    kt.forEach((oe, Je) => {
      oe.subscribe((Ln) => {
        (Ln || oe.done) && kt.delete(Je);
      });
    });
    let hl = pa(),
      ml = ha(Ne),
      xo = hl || ml || ve.length > 0;
    return J({ loaderData: ko, errors: pl }, xo ? { fetchers: new Map(c.fetchers) } : {});
  }
  function ca(S) {
    return c.fetchers.get(S) || Ng;
  }
  function hh(S, E, k, L) {
    if (Tg)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    I.has(S) && On(S);
    let z = o || r,
      U = rs(c.location, c.matches, i, l.v7_prependBasename, k, E, L == null ? void 0 : L.relative),
      B = Qn(z, U, i);
    if (!B) {
      al(S, E, st(404, { pathname: U }));
      return;
    }
    let { path: A, submission: F } = Xc(l.v7_normalizeFormMethod, !0, U, L),
      q = os(B, A);
    if (((h = (L && L.preventScrollReset) === !0), F && Pt(F.formMethod))) {
      mh(S, E, A, q, B, F);
      return;
    }
    _t.set(S, { routeId: E, path: A }), yh(S, E, A, q, B, F);
  }
  async function mh(S, E, k, L, z, U) {
    if ((sl(), _t.delete(S), !L.route.action && !L.route.lazy)) {
      let je = st(405, { method: U.formMethod, pathname: k, routeId: E });
      al(S, E, je);
      return;
    }
    let B = c.fetchers.get(S),
      A = J({ state: 'submitting' }, U, { data: B && B.data, ' _hasFetcherDoneAnything ': !0 });
    c.fetchers.set(S, A), W({ fetchers: new Map(c.fetchers) });
    let F = new AbortController(),
      q = Nr(e.history, k, F.signal, U);
    I.set(S, F);
    let Z = await Pr('action', q, L, z, n, t, i);
    if (q.signal.aborted) {
      I.get(S) === F && I.delete(S);
      return;
    }
    if (bn(Z)) {
      I.delete(S), it.add(S);
      let je = J({ state: 'loading' }, U, { data: void 0, ' _hasFetcherDoneAnything ': !0 });
      return (
        c.fetchers.set(S, je),
        W({ fetchers: new Map(c.fetchers) }),
        mr(c, Z, { submission: U, isFetchActionRedirect: !0 })
      );
    }
    if (Hr(Z)) {
      al(S, E, Z.error);
      return;
    }
    if (yn(Z)) throw st(400, { type: 'defer-action' });
    let ke = c.navigation.location || c.location,
      ye = Nr(e.history, ke, F.signal),
      ve = o || r,
      Xe = c.navigation.state !== 'idle' ? Qn(ve, c.navigation.location, i) : c.matches;
    K(Xe, "Didn't find any matches after fetcher action");
    let vr = ++H;
    ot.set(S, vr);
    let dl = J({ state: 'loading', data: Z.data }, U, { ' _hasFetcherDoneAnything ': !0 });
    c.fetchers.set(S, dl);
    let [_o, It] = Jc(e.history, c, Xe, U, ke, P, N, D, _t, ve, i, { [L.route.id]: Z.data }, void 0);
    It.filter((je) => je.key !== S).forEach((je) => {
      let vl = je.key,
        va = c.fetchers.get(vl),
        Eh = {
          state: 'loading',
          data: va && va.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          ' _hasFetcherDoneAnything ': !0,
        };
      c.fetchers.set(vl, Eh), je.controller && I.set(vl, je.controller);
    }),
      W({ fetchers: new Map(c.fetchers) });
    let ko = () => It.forEach((je) => On(je.key));
    F.signal.addEventListener('abort', ko);
    let { results: pl, loaderResults: hl, fetcherResults: ml } = await fa(c.matches, Xe, _o, It, ye);
    if (F.signal.aborted) return;
    F.signal.removeEventListener('abort', ko), ot.delete(S), I.delete(S), It.forEach((je) => I.delete(je.key));
    let xo = nf(pl);
    if (xo) return mr(c, xo);
    let { loaderData: oe, errors: Je } = bc(c, c.matches, _o, hl, void 0, It, ml, kt),
      Ln = {
        state: 'idle',
        data: Z.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
    c.fetchers.set(S, Ln);
    let yl = ha(vr);
    c.navigation.state === 'loading' && vr > Ne
      ? (K(d, 'Expected pending action'),
        g && g.abort(),
        ne(c.navigation.location, { matches: Xe, loaderData: oe, errors: Je, fetchers: new Map(c.fetchers) }))
      : (W(J({ errors: Je, loaderData: ef(c.loaderData, oe, Xe, Je) }, yl ? { fetchers: new Map(c.fetchers) } : {})),
        (P = !1));
  }
  async function yh(S, E, k, L, z, U) {
    let B = c.fetchers.get(S),
      A = J({ state: 'loading', formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0 }, U, {
        data: B && B.data,
        ' _hasFetcherDoneAnything ': !0,
      });
    c.fetchers.set(S, A), W({ fetchers: new Map(c.fetchers) });
    let F = new AbortController(),
      q = Nr(e.history, k, F.signal);
    I.set(S, F);
    let Z = await Pr('loader', q, L, z, n, t, i);
    if ((yn(Z) && (Z = (await ah(Z, q.signal, !0)) || Z), I.get(S) === F && I.delete(S), q.signal.aborted)) return;
    if (bn(Z)) {
      it.add(S), await mr(c, Z);
      return;
    }
    if (Hr(Z)) {
      let ye = Kn(c.matches, E);
      c.fetchers.delete(S), W({ fetchers: new Map(c.fetchers), errors: { [ye.route.id]: Z.error } });
      return;
    }
    K(!yn(Z), 'Unhandled fetcher deferred data');
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
  async function mr(S, E, k) {
    var L;
    let { submission: z, replace: U, isFetchActionRedirect: B } = k === void 0 ? {} : k;
    E.revalidate && (P = !0);
    let A = co(S.location, E.location, J({ _isRedirect: !0 }, B ? { _isFetchActionRedirect: !0 } : {}));
    if (
      (K(A, 'Expected a location on the redirect navigation'),
      oh.test(E.location) && ih && typeof ((L = window) == null ? void 0 : L.location) < 'u')
    ) {
      let ve = e.history.createURL(E.location),
        Xe = So(ve.pathname, i) == null;
      if (window.location.origin !== ve.origin || Xe) {
        U ? window.location.replace(E.location) : window.location.assign(E.location);
        return;
      }
    }
    g = null;
    let F = U === !0 ? ce.Replace : ce.Push,
      { formMethod: q, formAction: Z, formEncType: ke, formData: ye } = S.navigation;
    !z && q && Z && ye && ke && (z = { formMethod: q, formAction: Z, formEncType: ke, formData: ye }),
      Pg.has(E.status) && z && Pt(z.formMethod)
        ? await qe(F, A, { submission: J({}, z, { formAction: E.location }), preventScrollReset: h })
        : B
        ? await qe(F, A, {
            overrideNavigation: {
              state: 'loading',
              location: A,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
            },
            fetcherSubmission: z,
            preventScrollReset: h,
          })
        : await qe(F, A, {
            overrideNavigation: {
              state: 'loading',
              location: A,
              formMethod: z ? z.formMethod : void 0,
              formAction: z ? z.formAction : void 0,
              formEncType: z ? z.formEncType : void 0,
              formData: z ? z.formData : void 0,
            },
            preventScrollReset: h,
          });
  }
  async function fa(S, E, k, L, z) {
    let U = await Promise.all([
        ...k.map((F) => Pr('loader', z, F, E, n, t, i)),
        ...L.map((F) =>
          F.matches && F.match && F.controller
            ? Pr('loader', Nr(e.history, F.path, F.controller.signal), F.match, F.matches, n, t, i)
            : { type: de.error, error: st(404, { pathname: F.path }) },
        ),
      ]),
      B = U.slice(0, k.length),
      A = U.slice(k.length);
    return (
      await Promise.all([
        rf(
          S,
          k,
          B,
          B.map(() => z.signal),
          !1,
          c.loaderData,
        ),
        rf(
          S,
          L.map((F) => F.match),
          A,
          L.map((F) => (F.controller ? F.controller.signal : null)),
          !0,
        ),
      ]),
      { results: U, loaderResults: B, fetcherResults: A }
    );
  }
  function sl() {
    (P = !0),
      N.push(...fl()),
      _t.forEach((S, E) => {
        I.has(E) && (D.push(E), On(E));
      });
  }
  function al(S, E, k) {
    let L = Kn(c.matches, E);
    cl(S), W({ errors: { [L.route.id]: k }, fetchers: new Map(c.fetchers) });
  }
  function cl(S) {
    I.has(S) && On(S), _t.delete(S), ot.delete(S), it.delete(S), c.fetchers.delete(S);
  }
  function On(S) {
    let E = I.get(S);
    K(E, 'Expected fetch controller: ' + S), E.abort(), I.delete(S);
  }
  function da(S) {
    for (let E of S) {
      let L = {
        state: 'idle',
        data: ca(E).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
      c.fetchers.set(E, L);
    }
  }
  function pa() {
    let S = [],
      E = !1;
    for (let k of it) {
      let L = c.fetchers.get(k);
      K(L, 'Expected fetcher: ' + k), L.state === 'loading' && (it.delete(k), S.push(k), (E = !0));
    }
    return da(S), E;
  }
  function ha(S) {
    let E = [];
    for (let [k, L] of ot)
      if (L < S) {
        let z = c.fetchers.get(k);
        K(z, 'Expected fetcher: ' + k), z.state === 'loading' && (On(k), ot.delete(k), E.push(k));
      }
    return da(E), E.length > 0;
  }
  function vh(S, E) {
    let k = c.blockers.get(S) || qc;
    return Ye.get(S) !== E && Ye.set(S, E), k;
  }
  function yr(S) {
    c.blockers.delete(S), Ye.delete(S);
  }
  function Eo(S, E) {
    let k = c.blockers.get(S) || qc;
    K(
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
  function ma(S) {
    let { currentLocation: E, nextLocation: k, historyAction: L } = S;
    if (Ye.size === 0) return;
    Ye.size > 1 && cr(!1, 'A router only supports one blocker at a time');
    let z = Array.from(Ye.entries()),
      [U, B] = z[z.length - 1],
      A = c.blockers.get(U);
    if (!(A && A.state === 'proceeding') && B({ currentLocation: E, nextLocation: k, historyAction: L })) return U;
  }
  function fl(S) {
    let E = [];
    return (
      kt.forEach((k, L) => {
        (!S || S(L)) && (k.cancel(), E.push(L), kt.delete(L));
      }),
      E
    );
  }
  function gh(S, E, k) {
    if (((a = S), (p = E), (f = k || ((L) => L.key)), !m && c.navigation === Gl)) {
      m = !0;
      let L = ya(c.location, c.matches);
      L != null && W({ restoreScrollPosition: L });
    }
    return () => {
      (a = null), (p = null), (f = null);
    };
  }
  function wh(S, E) {
    if (a && f && p) {
      let k = E.map((z) => of(z, c.loaderData)),
        L = f(S, k) || S.key;
      a[L] = p();
    }
  }
  function ya(S, E) {
    if (a && f && p) {
      let k = E.map((U) => of(U, c.loaderData)),
        L = f(S, k) || S.key,
        z = a[L];
      if (typeof z == 'number') return z;
    }
    return null;
  }
  function Sh(S) {
    (n = {}), (o = ns(S, t, void 0, n));
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
      initialize: T,
      subscribe: $,
      enableScrollRestoration: gh,
      navigate: an,
      fetch: hh,
      revalidate: xt,
      createHref: (S) => e.history.createHref(S),
      encodeLocation: (S) => e.history.encodeLocation(S),
      getFetcher: ca,
      deleteFetcher: cl,
      dispose: j,
      getBlocker: vh,
      deleteBlocker: yr,
      _internalFetchControllers: I,
      _internalActiveDeferreds: kt,
      _internalSetRoutes: Sh,
    }),
    R
  );
}
function Dg(e) {
  return e != null && 'formData' in e;
}
function rs(e, t, n, r, o, i, l) {
  let u, s;
  if (i != null && l !== 'path') {
    u = [];
    for (let f of t)
      if ((u.push(f), f.route.id === i)) {
        s = f;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let a = wg(
    o || '.',
    th(u).map((f) => f.pathnameBase),
    So(e.pathname, n) || e.pathname,
    l === 'path',
  );
  return (
    o == null && ((a.search = e.search), (a.hash = e.hash)),
    (o == null || o === '' || o === '.') &&
      s &&
      s.route.index &&
      !sa(a.search) &&
      (a.search = a.search ? a.search.replace(/^\?/, '?index&') : '?index'),
    r && n !== '/' && (a.pathname = a.pathname === '/' ? n : wn([n, a.pathname])),
    wo(a)
  );
}
function Xc(e, t, n, r) {
  if (!r || !Dg(r)) return { path: n };
  if (r.formMethod && !Ig(r.formMethod)) return { path: n, error: st(405, { method: r.formMethod }) };
  let o;
  if (r.formData) {
    let u = r.formMethod || 'get';
    if (
      ((o = {
        formMethod: e ? u.toUpperCase() : u.toLowerCase(),
        formAction: sh(n),
        formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
        formData: r.formData,
      }),
      Pt(o.formMethod))
    )
      return { path: n, submission: o };
  }
  let i = jt(n),
    l = uh(r.formData);
  return t && i.search && sa(i.search) && l.append('index', ''), (i.search = '?' + l), { path: wo(i), submission: o };
}
function zg(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Jc(e, t, n, r, o, i, l, u, s, a, f, p, m) {
  let w = m ? Object.values(m)[0] : p ? Object.values(p)[0] : void 0,
    y = e.createURL(t.location),
    v = e.createURL(o),
    R = m ? Object.keys(m)[0] : void 0,
    d = zg(n, R).filter((g, C) => {
      if (g.route.lazy) return !0;
      if (g.route.loader == null) return !1;
      if (Mg(t.loaderData, t.matches[C], g) || l.some((D) => D === g.route.id)) return !0;
      let P = t.matches[C],
        N = g;
      return Gc(
        g,
        J({ currentUrl: y, currentParams: P.params, nextUrl: v, nextParams: N.params }, r, {
          actionResult: w,
          defaultShouldRevalidate:
            i || y.pathname + y.search === v.pathname + v.search || y.search !== v.search || lh(P, N),
        }),
      );
    }),
    h = [];
  return (
    s.forEach((g, C) => {
      if (!n.some((I) => I.route.id === g.routeId)) return;
      let P = Qn(a, g.path, f);
      if (!P) {
        h.push({ key: C, routeId: g.routeId, path: g.path, matches: null, match: null, controller: null });
        return;
      }
      let N = os(P, g.path);
      if (u.includes(C)) {
        h.push({ key: C, routeId: g.routeId, path: g.path, matches: P, match: N, controller: new AbortController() });
        return;
      }
      Gc(
        N,
        J(
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
        h.push({ key: C, routeId: g.routeId, path: g.path, matches: P, match: N, controller: new AbortController() });
    }),
    [d, h]
  );
}
function Mg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function lh(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || (n != null && n.endsWith('*') && e.params['*'] !== t.params['*']);
}
function Gc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function Zc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  K(o, 'No route found in manifest');
  let i = {};
  for (let l in r) {
    let s = o[l] !== void 0 && l !== 'hasErrorBoundary';
    cr(
      !s,
      'Route "' +
        o.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.'),
    ),
      !s && !tg.has(l) && (i[l] = r[l]);
  }
  Object.assign(o, i), Object.assign(o, J({}, t(o), { lazy: void 0 }));
}
async function Pr(e, t, n, r, o, i, l, u, s, a) {
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
      if (R) p = (await Promise.all([w(R), Zc(n.route, i, o)]))[0];
      else if ((await Zc(n.route, i, o), (R = n.route[e]), R)) p = await w(R);
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
    K(
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
  if (jg(p)) {
    let R = p.status;
    if (Rg.has(R)) {
      let h = p.headers.get('Location');
      if ((K(h, 'Redirects returned/thrown from loaders/actions must have a Location header'), !oh.test(h)))
        h = rs(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, h);
      else if (!u) {
        let g = new URL(t.url),
          C = h.startsWith('//') ? new URL(g.protocol + h) : new URL(h),
          P = So(C.pathname, l) != null;
        C.origin === g.origin && P && (h = C.pathname + C.search + C.hash);
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
        ? { type: f, error: new ua(R, p.statusText, c), headers: p.headers }
        : { type: de.data, data: c, statusCode: p.status, headers: p.headers }
    );
  }
  if (f === de.error) return { type: f, error: p };
  if (Ug(p)) {
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
function Nr(e, t, n, r) {
  let o = e.createURL(sh(t)).toString(),
    i = { signal: n };
  if (r && Pt(r.formMethod)) {
    let { formMethod: l, formEncType: u, formData: s } = r;
    (i.method = l.toUpperCase()), (i.body = u === 'application/x-www-form-urlencoded' ? uh(s) : s);
  }
  return new Request(o, i);
}
function uh(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
  return t;
}
function Fg(e, t, n, r, o) {
  let i = {},
    l = null,
    u,
    s = !1,
    a = {};
  return (
    n.forEach((f, p) => {
      let m = t[p].route.id;
      if ((K(!bn(f), 'Cannot handle redirect results in processLoaderData'), Hr(f))) {
        let w = Kn(e, m),
          y = f.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[w.route.id] == null && (l[w.route.id] = y),
          (i[m] = void 0),
          s || ((s = !0), (u = nh(f.error) ? f.error.status : 500)),
          f.headers && (a[m] = f.headers);
      } else
        yn(f) ? (o.set(m, f.deferredData), (i[m] = f.deferredData.data)) : (i[m] = f.data),
          f.statusCode != null && f.statusCode !== 200 && !s && (u = f.statusCode),
          f.headers && (a[m] = f.headers);
    }),
    r && ((l = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: l, statusCode: u || 200, loaderHeaders: a }
  );
}
function bc(e, t, n, r, o, i, l, u) {
  let { loaderData: s, errors: a } = Fg(t, n, r, o, u);
  for (let f = 0; f < i.length; f++) {
    let { key: p, match: m, controller: w } = i[f];
    K(l !== void 0 && l[f] !== void 0, 'Did not find corresponding fetcher result');
    let y = l[f];
    if (!(w && w.signal.aborted))
      if (Hr(y)) {
        let v = Kn(e.matches, m == null ? void 0 : m.route.id);
        (a && a[v.route.id]) || (a = J({}, a, { [v.route.id]: y.error })), e.fetchers.delete(p);
      } else if (bn(y)) K(!1, 'Unhandled fetcher revalidation redirect');
      else if (yn(y)) K(!1, 'Unhandled fetcher deferred data');
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
function ef(e, t, n, r) {
  let o = J({}, t);
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
function Kn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function tf(e) {
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
    new ua(e || 500, l, new Error(u), !0)
  );
}
function nf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (bn(n)) return n;
  }
}
function sh(e) {
  let t = typeof e == 'string' ? jt(e) : e;
  return wo(J({}, t, { hash: '' }));
}
function Ag(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== '';
}
function yn(e) {
  return e.type === de.deferred;
}
function Hr(e) {
  return e.type === de.error;
}
function bn(e) {
  return (e && e.type) === de.redirect;
}
function Ug(e) {
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
function jg(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Ig(e) {
  return Cg.has(e.toLowerCase());
}
function Pt(e) {
  return kg.has(e.toLowerCase());
}
async function rf(e, t, n, r, o, i) {
  for (let l = 0; l < n.length; l++) {
    let u = n[l],
      s = t[l];
    if (!s) continue;
    let a = e.find((p) => p.route.id === s.route.id),
      f = a != null && !lh(a, s) && (i && i[s.route.id]) !== void 0;
    if (yn(u) && (o || f)) {
      let p = r[l];
      K(p, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await ah(u, p, o).then((m) => {
          m && (n[l] = m || n[l]);
        });
    }
  }
}
async function ah(e, t, n) {
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
function sa(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function of(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function os(e, t) {
  let n = typeof t == 'string' ? jt(t).search : t.search;
  if (e[e.length - 1].route.index && sa(n || '')) return e[e.length - 1];
  let r = th(e);
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
 */ function is() {
  return (
    (is = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    is.apply(this, arguments)
  );
}
const ch = M.createContext(null),
  fh = M.createContext(null),
  dh = M.createContext(null),
  ll = M.createContext(null),
  ul = M.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ph = M.createContext(null);
function aa() {
  return M.useContext(ll) != null;
}
function Bg() {
  return aa() || K(!1), M.useContext(ll).location;
}
function $g(e, t, n) {
  aa() || K(!1);
  let { navigator: r } = M.useContext(dh),
    { matches: o } = M.useContext(ul),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : '/';
  i && i.route;
  let s = Bg(),
    a;
  if (t) {
    var f;
    let v = typeof t == 'string' ? jt(t) : t;
    u === '/' || ((f = v.pathname) != null && f.startsWith(u)) || K(!1), (a = v);
  } else a = s;
  let p = a.pathname || '/',
    m = u === '/' ? p : p.slice(u.length) || '/',
    w = Qn(e, { pathname: m }),
    y = Kg(
      w &&
        w.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, l, v.params),
            pathname: wn([u, r.encodeLocation ? r.encodeLocation(v.pathname).pathname : v.pathname]),
            pathnameBase:
              v.pathnameBase === '/'
                ? u
                : wn([u, r.encodeLocation ? r.encodeLocation(v.pathnameBase).pathname : v.pathnameBase]),
          }),
        ),
      o,
      n,
    );
  return t && y
    ? M.createElement(
        ll.Provider,
        {
          value: {
            location: is({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, a),
            navigationType: ce.Pop,
          },
        },
        y,
      )
    : y;
}
function Hg() {
  let e = Jg(),
    t = nh(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null;
  return M.createElement(
    M.Fragment,
    null,
    M.createElement('h2', null, 'Unexpected Application Error!'),
    M.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? M.createElement('pre', { style: o }, n) : null,
    i,
  );
}
const Wg = M.createElement(Hg, null);
class Vg extends M.Component {
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
      ? M.createElement(
          ul.Provider,
          { value: this.props.routeContext },
          M.createElement(ph.Provider, { value: this.state.error, children: this.props.component }),
        )
      : this.props.children;
  }
}
function Qg(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = M.useContext(ch);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    M.createElement(ul.Provider, { value: t }, r)
  );
}
function Kg(e, t, n) {
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
    u >= 0 || K(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
  }
  return i.reduceRight((u, s, a) => {
    let f = s.route.id ? (l == null ? void 0 : l[s.route.id]) : null,
      p = null;
    n && (p = s.route.errorElement || Wg);
    let m = t.concat(i.slice(0, a + 1)),
      w = () => {
        let y;
        return (
          f
            ? (y = p)
            : s.route.Component
            ? (y = M.createElement(s.route.Component, null))
            : s.route.element
            ? (y = s.route.element)
            : (y = u),
          M.createElement(Qg, {
            match: s,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? M.createElement(Vg, {
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
var lf;
(function (e) {
  (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate');
})(lf || (lf = {}));
var Di;
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
})(Di || (Di = {}));
function Yg(e) {
  let t = M.useContext(fh);
  return t || K(!1), t;
}
function qg(e) {
  let t = M.useContext(ul);
  return t || K(!1), t;
}
function Xg(e) {
  let t = qg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || K(!1), n.route.id;
}
function Jg() {
  var e;
  let t = M.useContext(ph),
    n = Yg(Di.UseRouteError),
    r = Xg(Di.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Gg(e) {
  let { fallbackElement: t, router: n } = e,
    [r, o] = M.useState(n.state);
  M.useLayoutEffect(() => n.subscribe(o), [n, o]);
  let i = M.useMemo(
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
    u = M.useMemo(() => ({ router: n, navigator: i, static: !1, basename: l }), [n, i, l]);
  return M.createElement(
    M.Fragment,
    null,
    M.createElement(
      ch.Provider,
      { value: u },
      M.createElement(
        fh.Provider,
        { value: r },
        M.createElement(
          bg,
          { basename: n.basename, location: n.state.location, navigationType: n.state.historyAction, navigator: i },
          n.state.initialized ? M.createElement(Zg, { routes: n.routes, state: r }) : t,
        ),
      ),
    ),
    null,
  );
}
function Zg(e) {
  let { routes: t, state: n } = e;
  return $g(t, void 0, n);
}
function bg(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = ce.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  aa() && K(!1);
  let u = t.replace(/^\/*/, '/'),
    s = M.useMemo(() => ({ basename: u, navigator: i, static: l }), [u, i, l]);
  typeof r == 'string' && (r = jt(r));
  let { pathname: a = '/', search: f = '', hash: p = '', state: m = null, key: w = 'default' } = r,
    y = M.useMemo(() => {
      let v = So(a, u);
      return v == null ? null : { location: { pathname: v, search: f, hash: p, state: m, key: w }, navigationType: o };
    }, [u, a, f, p, m, w, o]);
  return y == null
    ? null
    : M.createElement(dh.Provider, { value: s }, M.createElement(ll.Provider, { children: n, value: y }));
}
var uf;
(function (e) {
  (e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error');
})(uf || (uf = {}));
new Promise(() => {});
function e1(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: M.createElement(e.Component), Component: void 0 }),
    e.ErrorBoundary && Object.assign(t, { errorElement: M.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
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
 */ function zi() {
  return (
    (zi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zi.apply(this, arguments)
  );
}
function t1(e, t) {
  return Lg({
    basename: t == null ? void 0 : t.basename,
    future: zi({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Z0({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || n1(),
    routes: e,
    mapRouteProperties: e1,
  }).initialize();
}
function n1() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = zi({}, t, { errors: r1(t.errors) })), t;
}
function r1(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === 'RouteErrorResponse') n[r] = new ua(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === 'Error') {
      let i = new Error(o.message);
      (i.stack = ''), (n[r] = i);
    } else n[r] = o;
  return n;
}
var sf;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'), (e.UseSubmitImpl = 'useSubmitImpl'), (e.UseFetcher = 'useFetcher');
})(sf || (sf = {}));
var af;
(function (e) {
  (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(af || (af = {}));
function o1() {
  const e = t1([
    { path: '/', element: X.jsx(J0, {}) },
    { path: '/results', element: X.jsx(G0, {}) },
  ]);
  return X.jsx(sv, { children: X.jsx(Gg, { router: e }) });
}
Zl.createRoot(document.getElementById('root')).render(X.jsx(jh.StrictMode, { children: X.jsx(o1, {}) }));
