(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [4],
  {
    '9x6x': function (e, t, r) {
      'use strict';
      e.exports = function (e, t) {
        t || (t = {}), 'function' === typeof t && (t = { cmp: t });
        var r,
          n = 'boolean' === typeof t.cycles && t.cycles,
          i =
            t.cmp &&
            ((r = t.cmp),
            function (e) {
              return function (t, n) {
                var i = { key: t, value: e[t] },
                  o = { key: n, value: e[n] };
                return r(i, o);
              };
            }),
          o = [];
        return (function e(t) {
          if (
            (t &&
              t.toJSON &&
              'function' === typeof t.toJSON &&
              (t = t.toJSON()),
            void 0 !== t)
          ) {
            if ('number' == typeof t) return isFinite(t) ? '' + t : 'null';
            if ('object' !== typeof t) return JSON.stringify(t);
            var r, a;
            if (Array.isArray(t)) {
              for (a = '[', r = 0; r < t.length; r++)
                r && (a += ','), (a += e(t[r]) || 'null');
              return a + ']';
            }
            if (null === t) return 'null';
            if (-1 !== o.indexOf(t)) {
              if (n) return JSON.stringify('__cycle__');
              throw new TypeError('Converting circular structure to JSON');
            }
            var s = o.push(t) - 1,
              u = Object.keys(t).sort(i && i(t));
            for (a = '', r = 0; r < u.length; r++) {
              var c = u[r],
                l = e(t[c]);
              l && (a && (a += ','), (a += JSON.stringify(c) + ':' + l));
            }
            return o.splice(s, 1), '{' + a + '}';
          }
        })(e);
      };
    },
    'ABJ/': function (e, t, r) {
      e.exports = r('p7JZ').Observable;
    },
    L2ys: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return o;
      }),
        r.d(t, 'b', function () {
          return a;
        });
      var n = r('rWdj'),
        i = {
          Name: [],
          Document: ['definitions'],
          OperationDefinition: [
            'name',
            'variableDefinitions',
            'directives',
            'selectionSet',
          ],
          VariableDefinition: [
            'variable',
            'type',
            'defaultValue',
            'directives',
          ],
          Variable: ['name'],
          SelectionSet: ['selections'],
          Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
          Argument: ['name', 'value'],
          FragmentSpread: ['name', 'directives'],
          InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
          FragmentDefinition: [
            'name',
            'variableDefinitions',
            'typeCondition',
            'directives',
            'selectionSet',
          ],
          IntValue: [],
          FloatValue: [],
          StringValue: [],
          BooleanValue: [],
          NullValue: [],
          EnumValue: [],
          ListValue: ['values'],
          ObjectValue: ['fields'],
          ObjectField: ['name', 'value'],
          Directive: ['name', 'arguments'],
          NamedType: ['name'],
          ListType: ['type'],
          NonNullType: ['type'],
          SchemaDefinition: ['directives', 'operationTypes'],
          OperationTypeDefinition: ['type'],
          ScalarTypeDefinition: ['description', 'name', 'directives'],
          ObjectTypeDefinition: [
            'description',
            'name',
            'interfaces',
            'directives',
            'fields',
          ],
          FieldDefinition: [
            'description',
            'name',
            'arguments',
            'type',
            'directives',
          ],
          InputValueDefinition: [
            'description',
            'name',
            'type',
            'defaultValue',
            'directives',
          ],
          InterfaceTypeDefinition: [
            'description',
            'name',
            'directives',
            'fields',
          ],
          UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
          EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
          EnumValueDefinition: ['description', 'name', 'directives'],
          InputObjectTypeDefinition: [
            'description',
            'name',
            'directives',
            'fields',
          ],
          DirectiveDefinition: [
            'description',
            'name',
            'arguments',
            'locations',
          ],
          SchemaExtension: ['directives', 'operationTypes'],
          ScalarTypeExtension: ['name', 'directives'],
          ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
          InterfaceTypeExtension: ['name', 'directives', 'fields'],
          UnionTypeExtension: ['name', 'directives', 'types'],
          EnumTypeExtension: ['name', 'directives', 'values'],
          InputObjectTypeExtension: ['name', 'directives', 'fields'],
        },
        o = Object.freeze({});
      function a(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i,
          a = void 0,
          c = Array.isArray(e),
          l = [e],
          f = -1,
          h = [],
          p = void 0,
          b = void 0,
          v = void 0,
          y = [],
          d = [],
          m = e;
        do {
          var O = ++f === l.length,
            g = O && 0 !== h.length;
          if (O) {
            if (
              ((b = 0 === d.length ? void 0 : y[y.length - 1]),
              (p = v),
              (v = d.pop()),
              g)
            ) {
              if (c) p = p.slice();
              else {
                for (var j = {}, w = 0, Q = Object.keys(p); w < Q.length; w++) {
                  var S = Q[w];
                  j[S] = p[S];
                }
                p = j;
              }
              for (var k = 0, q = 0; q < h.length; q++) {
                var R = h[q][0],
                  E = h[q][1];
                c && (R -= k),
                  c && null === E ? (p.splice(R, 1), k++) : (p[R] = E);
              }
            }
            (f = a.index),
              (l = a.keys),
              (h = a.edits),
              (c = a.inArray),
              (a = a.prev);
          } else {
            if (
              ((b = v ? (c ? f : l[f]) : void 0),
              null === (p = v ? v[b] : m) || void 0 === p)
            )
              continue;
            v && y.push(b);
          }
          var x = void 0;
          if (!Array.isArray(p)) {
            if (!s(p)) throw new Error('Invalid AST Node: ' + Object(n.a)(p));
            var M = u(t, p.kind, O);
            if (M) {
              if ((x = M.call(t, p, b, v, y, d)) === o) break;
              if (!1 === x) {
                if (!O) {
                  y.pop();
                  continue;
                }
              } else if (void 0 !== x && (h.push([b, x]), !O)) {
                if (!s(x)) {
                  y.pop();
                  continue;
                }
                p = x;
              }
            }
          }
          void 0 === x && g && h.push([b, p]),
            O
              ? y.pop()
              : ((a = { inArray: c, index: f, keys: l, edits: h, prev: a }),
                (l = (c = Array.isArray(p)) ? p : r[p.kind] || []),
                (f = -1),
                (h = []),
                v && d.push(v),
                (v = p));
        } while (void 0 !== a);
        return 0 !== h.length && (m = h[h.length - 1][1]), m;
      }
      function s(e) {
        return Boolean(e && 'string' === typeof e.kind);
      }
      function u(e, t, r) {
        var n = e[t];
        if (n) {
          if (!r && 'function' === typeof n) return n;
          var i = r ? n.leave : n.enter;
          if ('function' === typeof i) return i;
        } else {
          var o = r ? e.leave : e.enter;
          if (o) {
            if ('function' === typeof o) return o;
            var a = o[t];
            if ('function' === typeof a) return a;
          }
        }
      }
    },
    RKIb: function (e, t, r) {
      'use strict';
      var n =
        'function' === typeof Symbol && 'function' === typeof Symbol.for
          ? Symbol.for('nodejs.util.inspect.custom')
          : void 0;
      t.a = n;
    },
    RRgQ: function (e, t, r) {
      'use strict';
      (function (e) {
        r.d(t, 'a', function () {
          return n;
        });
        r('L2ys'), r('qVdT'), r('mrSG'), r('9x6x'), r('qx2n');
        function n(e) {
          return (
            e.definitions
              .filter(function (e) {
                return 'OperationDefinition' === e.kind && e.name;
              })
              .map(function (e) {
                return e.name.value;
              })[0] || null
          );
        }
        'function' === typeof WeakMap &&
          'object' === typeof navigator &&
          navigator.product,
          Object.prototype.toString;
        Object.prototype.hasOwnProperty;
        Object.create({});
      }.call(this, r('8oxB')));
    },
    SLVX: function (e, t, r) {
      'use strict';
      function n(e) {
        var t,
          r = e.Symbol;
        return (
          'function' === typeof r
            ? r.observable
              ? (t = r.observable)
              : ((t = r('observable')), (r.observable = t))
            : (t = '@@observable'),
          t
        );
      }
      r.d(t, 'a', function () {
        return n;
      });
    },
    bCCX: function (e, t, r) {
      'use strict';
      (function (e, n) {
        var i,
          o = r('SLVX');
        i =
          'undefined' !== typeof self
            ? self
            : 'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof e
            ? e
            : n;
        var a = Object(o.a)(i);
        t.a = a;
      }.call(this, r('yLpj'), r('3UD+')(e)));
    },
    p7JZ: function (e, t, r) {
      'use strict';
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function o(e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Observable = void 0);
      var a = function () {
          return 'function' === typeof Symbol;
        },
        s = function (e) {
          return a() && Boolean(Symbol[e]);
        },
        u = function (e) {
          return s(e) ? Symbol[e] : '@@' + e;
        };
      a() && !s('observable') && (Symbol.observable = Symbol('observable'));
      var c = u('iterator'),
        l = u('observable'),
        f = u('species');
      function h(e, t) {
        var r = e[t];
        if (null != r) {
          if ('function' !== typeof r)
            throw new TypeError(r + ' is not a function');
          return r;
        }
      }
      function p(e) {
        var t = e.constructor;
        return (
          void 0 !== t && null === (t = t[f]) && (t = void 0),
          void 0 !== t ? t : Q
        );
      }
      function b(e) {
        return e instanceof Q;
      }
      function v(e) {
        v.log
          ? v.log(e)
          : setTimeout(function () {
              throw e;
            });
      }
      function y(e) {
        Promise.resolve().then(function () {
          try {
            e();
          } catch (t) {
            v(t);
          }
        });
      }
      function d(e) {
        var t = e._cleanup;
        if (void 0 !== t && ((e._cleanup = void 0), t))
          try {
            if ('function' === typeof t) t();
            else {
              var r = h(t, 'unsubscribe');
              r && r.call(t);
            }
          } catch (n) {
            v(n);
          }
      }
      function m(e) {
        (e._observer = void 0), (e._queue = void 0), (e._state = 'closed');
      }
      function O(e, t, r) {
        e._state = 'running';
        var n = e._observer;
        try {
          var i = h(n, t);
          switch (t) {
            case 'next':
              i && i.call(n, r);
              break;
            case 'error':
              if ((m(e), !i)) throw r;
              i.call(n, r);
              break;
            case 'complete':
              m(e), i && i.call(n);
          }
        } catch (o) {
          v(o);
        }
        'closed' === e._state
          ? d(e)
          : 'running' === e._state && (e._state = 'ready');
      }
      function g(e, t, r) {
        if ('closed' !== e._state) {
          if ('buffering' !== e._state)
            return 'ready' !== e._state
              ? ((e._state = 'buffering'),
                (e._queue = [{ type: t, value: r }]),
                void y(function () {
                  return (function (e) {
                    var t = e._queue;
                    if (t) {
                      (e._queue = void 0), (e._state = 'ready');
                      for (
                        var r = 0;
                        r < t.length &&
                        (O(e, t[r].type, t[r].value), 'closed' !== e._state);
                        ++r
                      );
                    }
                  })(e);
                }))
              : void O(e, t, r);
          e._queue.push({ type: t, value: r });
        }
      }
      var j = (function () {
          function e(t, r) {
            n(this, e),
              (this._cleanup = void 0),
              (this._observer = t),
              (this._queue = void 0),
              (this._state = 'initializing');
            var i = new w(this);
            try {
              this._cleanup = r.call(void 0, i);
            } catch (o) {
              i.error(o);
            }
            'initializing' === this._state && (this._state = 'ready');
          }
          return (
            o(e, [
              {
                key: 'unsubscribe',
                value: function () {
                  'closed' !== this._state && (m(this), d(this));
                },
              },
              {
                key: 'closed',
                get: function () {
                  return 'closed' === this._state;
                },
              },
            ]),
            e
          );
        })(),
        w = (function () {
          function e(t) {
            n(this, e), (this._subscription = t);
          }
          return (
            o(e, [
              {
                key: 'next',
                value: function (e) {
                  g(this._subscription, 'next', e);
                },
              },
              {
                key: 'error',
                value: function (e) {
                  g(this._subscription, 'error', e);
                },
              },
              {
                key: 'complete',
                value: function () {
                  g(this._subscription, 'complete');
                },
              },
              {
                key: 'closed',
                get: function () {
                  return 'closed' === this._subscription._state;
                },
              },
            ]),
            e
          );
        })(),
        Q = (function () {
          function e(t) {
            if ((n(this, e), !(this instanceof e)))
              throw new TypeError('Observable cannot be called as a function');
            if ('function' !== typeof t)
              throw new TypeError('Observable initializer must be a function');
            this._subscriber = t;
          }
          return (
            o(
              e,
              [
                {
                  key: 'subscribe',
                  value: function (e) {
                    return (
                      ('object' === typeof e && null !== e) ||
                        (e = {
                          next: e,
                          error: arguments[1],
                          complete: arguments[2],
                        }),
                      new j(e, this._subscriber)
                    );
                  },
                },
                {
                  key: 'forEach',
                  value: function (e) {
                    var t = this;
                    return new Promise(function (r, n) {
                      if ('function' === typeof e)
                        var i = t.subscribe({
                          next: function (t) {
                            try {
                              e(t, o);
                            } catch (r) {
                              n(r), i.unsubscribe();
                            }
                          },
                          error: n,
                          complete: r,
                        });
                      else n(new TypeError(e + ' is not a function'));
                      function o() {
                        i.unsubscribe(), r();
                      }
                    });
                  },
                },
                {
                  key: 'map',
                  value: function (e) {
                    var t = this;
                    if ('function' !== typeof e)
                      throw new TypeError(e + ' is not a function');
                    return new (p(this))(function (r) {
                      return t.subscribe({
                        next: function (t) {
                          try {
                            t = e(t);
                          } catch (n) {
                            return r.error(n);
                          }
                          r.next(t);
                        },
                        error: function (e) {
                          r.error(e);
                        },
                        complete: function () {
                          r.complete();
                        },
                      });
                    });
                  },
                },
                {
                  key: 'filter',
                  value: function (e) {
                    var t = this;
                    if ('function' !== typeof e)
                      throw new TypeError(e + ' is not a function');
                    return new (p(this))(function (r) {
                      return t.subscribe({
                        next: function (t) {
                          try {
                            if (!e(t)) return;
                          } catch (n) {
                            return r.error(n);
                          }
                          r.next(t);
                        },
                        error: function (e) {
                          r.error(e);
                        },
                        complete: function () {
                          r.complete();
                        },
                      });
                    });
                  },
                },
                {
                  key: 'reduce',
                  value: function (e) {
                    var t = this;
                    if ('function' !== typeof e)
                      throw new TypeError(e + ' is not a function');
                    var r = p(this),
                      n = arguments.length > 1,
                      i = !1,
                      o = arguments[1],
                      a = o;
                    return new r(function (r) {
                      return t.subscribe({
                        next: function (t) {
                          var o = !i;
                          if (((i = !0), !o || n))
                            try {
                              a = e(a, t);
                            } catch (s) {
                              return r.error(s);
                            }
                          else a = t;
                        },
                        error: function (e) {
                          r.error(e);
                        },
                        complete: function () {
                          if (!i && !n)
                            return r.error(
                              new TypeError('Cannot reduce an empty sequence')
                            );
                          r.next(a), r.complete();
                        },
                      });
                    });
                  },
                },
                {
                  key: 'concat',
                  value: function () {
                    for (
                      var e = this,
                        t = arguments.length,
                        r = new Array(t),
                        n = 0;
                      n < t;
                      n++
                    )
                      r[n] = arguments[n];
                    var i = p(this);
                    return new i(function (t) {
                      var n,
                        o = 0;
                      return (
                        (function e(a) {
                          n = a.subscribe({
                            next: function (e) {
                              t.next(e);
                            },
                            error: function (e) {
                              t.error(e);
                            },
                            complete: function () {
                              o === r.length
                                ? ((n = void 0), t.complete())
                                : e(i.from(r[o++]));
                            },
                          });
                        })(e),
                        function () {
                          n && (n.unsubscribe(), (n = void 0));
                        }
                      );
                    });
                  },
                },
                {
                  key: 'flatMap',
                  value: function (e) {
                    var t = this;
                    if ('function' !== typeof e)
                      throw new TypeError(e + ' is not a function');
                    var r = p(this);
                    return new r(function (n) {
                      var i = [],
                        o = t.subscribe({
                          next: function (t) {
                            if (e)
                              try {
                                t = e(t);
                              } catch (s) {
                                return n.error(s);
                              }
                            var o = r.from(t).subscribe({
                              next: function (e) {
                                n.next(e);
                              },
                              error: function (e) {
                                n.error(e);
                              },
                              complete: function () {
                                var e = i.indexOf(o);
                                e >= 0 && i.splice(e, 1), a();
                              },
                            });
                            i.push(o);
                          },
                          error: function (e) {
                            n.error(e);
                          },
                          complete: function () {
                            a();
                          },
                        });
                      function a() {
                        o.closed && 0 === i.length && n.complete();
                      }
                      return function () {
                        i.forEach(function (e) {
                          return e.unsubscribe();
                        }),
                          o.unsubscribe();
                      };
                    });
                  },
                },
                {
                  key: l,
                  value: function () {
                    return this;
                  },
                },
              ],
              [
                {
                  key: 'from',
                  value: function (t) {
                    var r = 'function' === typeof this ? this : e;
                    if (null == t) throw new TypeError(t + ' is not an object');
                    var n = h(t, l);
                    if (n) {
                      var i = n.call(t);
                      if (Object(i) !== i)
                        throw new TypeError(i + ' is not an object');
                      return b(i) && i.constructor === r
                        ? i
                        : new r(function (e) {
                            return i.subscribe(e);
                          });
                    }
                    if (s('iterator') && (n = h(t, c)))
                      return new r(function (e) {
                        y(function () {
                          if (!e.closed) {
                            var r = !0,
                              i = !1,
                              o = void 0;
                            try {
                              for (
                                var a, s = n.call(t)[Symbol.iterator]();
                                !(r = (a = s.next()).done);
                                r = !0
                              ) {
                                var u = a.value;
                                if ((e.next(u), e.closed)) return;
                              }
                            } catch (c) {
                              (i = !0), (o = c);
                            } finally {
                              try {
                                r || null == s.return || s.return();
                              } finally {
                                if (i) throw o;
                              }
                            }
                            e.complete();
                          }
                        });
                      });
                    if (Array.isArray(t))
                      return new r(function (e) {
                        y(function () {
                          if (!e.closed) {
                            for (var r = 0; r < t.length; ++r)
                              if ((e.next(t[r]), e.closed)) return;
                            e.complete();
                          }
                        });
                      });
                    throw new TypeError(t + ' is not observable');
                  },
                },
                {
                  key: 'of',
                  value: function () {
                    for (
                      var t = arguments.length, r = new Array(t), n = 0;
                      n < t;
                      n++
                    )
                      r[n] = arguments[n];
                    var i = 'function' === typeof this ? this : e;
                    return new i(function (e) {
                      y(function () {
                        if (!e.closed) {
                          for (var t = 0; t < r.length; ++t)
                            if ((e.next(r[t]), e.closed)) return;
                          e.complete();
                        }
                      });
                    });
                  },
                },
                {
                  key: f,
                  get: function () {
                    return this;
                  },
                },
              ]
            ),
            e
          );
        })();
      (t.Observable = Q),
        a() &&
          Object.defineProperty(Q, Symbol('extensions'), {
            value: { symbol: l, hostReportError: v },
            configurable: !0,
          });
    },
    qIgX: function (e, t, r) {
      'use strict';
      (function (e) {
        r.d(t, 'a', function () {
          return s;
        }),
          r.d(t, 'b', function () {
            return x;
          }),
          r.d(t, 'c', function () {
            return P;
          }),
          r.d(t, 'd', function () {
            return I;
          }),
          r.d(t, 'e', function () {
            return j;
          }),
          r.d(t, 'f', function () {
            return w;
          }),
          r.d(t, 'g', function () {
            return O;
          }),
          r.d(t, 'h', function () {
            return g;
          }),
          r.d(t, 'i', function () {
            return d;
          }),
          r.d(t, 'j', function () {
            return m;
          }),
          r.d(t, 'k', function () {
            return F;
          }),
          r.d(t, 'l', function () {
            return p;
          }),
          r.d(t, 'm', function () {
            return h;
          }),
          r.d(t, 'n', function () {
            return c;
          }),
          r.d(t, 'o', function () {
            return l;
          }),
          r.d(t, 'p', function () {
            return T;
          }),
          r.d(t, 'q', function () {
            return _;
          }),
          r.d(t, 'r', function () {
            return M;
          }),
          r.d(t, 's', function () {
            return E;
          }),
          r.d(t, 't', function () {
            return u;
          }),
          r.d(t, 'u', function () {
            return f;
          }),
          r.d(t, 'v', function () {
            return C;
          });
        var n = r('L2ys'),
          i = r('qVdT'),
          o = r('mrSG');
        r('9x6x'), r('qx2n');
        function a(e, t, r, n) {
          if (
            (function (e) {
              return 'IntValue' === e.kind;
            })(r) ||
            (function (e) {
              return 'FloatValue' === e.kind;
            })(r)
          )
            e[t.value] = Number(r.value);
          else if (
            (function (e) {
              return 'BooleanValue' === e.kind;
            })(r) ||
            (function (e) {
              return 'StringValue' === e.kind;
            })(r)
          )
            e[t.value] = r.value;
          else if (
            (function (e) {
              return 'ObjectValue' === e.kind;
            })(r)
          ) {
            var o = {};
            r.fields.map(function (e) {
              return a(o, e.name, e.value, n);
            }),
              (e[t.value] = o);
          } else if (
            (function (e) {
              return 'Variable' === e.kind;
            })(r)
          ) {
            var s = (n || {})[r.name.value];
            e[t.value] = s;
          } else if (
            (function (e) {
              return 'ListValue' === e.kind;
            })(r)
          )
            e[t.value] = r.values.map(function (e) {
              var r = {};
              return a(r, t, e, n), r[t.value];
            });
          else if (
            (function (e) {
              return 'EnumValue' === e.kind;
            })(r)
          )
            e[t.value] = r.value;
          else {
            if (
              !(function (e) {
                return 'NullValue' === e.kind;
              })(r)
            )
              throw new i.a(17);
            e[t.value] = null;
          }
        }
        function s(e, t) {
          if (e.arguments && e.arguments.length) {
            var r = {};
            return (
              e.arguments.forEach(function (e) {
                var n = e.name,
                  i = e.value;
                return a(r, n, i, t);
              }),
              r
            );
          }
          return null;
        }
        function u(e) {
          return e.alias ? e.alias.value : e.name.value;
        }
        function c(e) {
          return 'Field' === e.kind;
        }
        function l(e) {
          return 'InlineFragment' === e.kind;
        }
        function f(e, t) {
          return (
            void 0 === t && (t = {}),
            ((r = e.directives),
            r
              ? r.filter(b).map(function (e) {
                  var t = e.arguments;
                  e.name.value, Object(i.b)(t && 1 === t.length, 2);
                  var r = t[0];
                  Object(i.b)(r.name && 'if' === r.name.value, 3);
                  var n = r.value;
                  return (
                    Object(i.b)(
                      n && ('Variable' === n.kind || 'BooleanValue' === n.kind),
                      4
                    ),
                    { directive: e, ifArgument: r }
                  );
                })
              : []).every(function (e) {
              var r = e.directive,
                n = e.ifArgument,
                o = !1;
              return (
                'Variable' === n.value.kind
                  ? ((o = t[n.value.name.value]), Object(i.b)(void 0 !== o, 1))
                  : (o = n.value.value),
                'skip' === r.name.value ? !o : o
              );
            })
          );
          var r;
        }
        function h(e, t) {
          return (function (e) {
            var t = [];
            return (
              Object(n.b)(e, {
                Directive: function (e) {
                  t.push(e.name.value);
                },
              }),
              t
            );
          })(t).some(function (t) {
            return e.indexOf(t) > -1;
          });
        }
        function p(e) {
          return e && h(['client'], e) && h(['export'], e);
        }
        function b(e) {
          var t = e.name.value;
          return 'skip' === t || 'include' === t;
        }
        function v(e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
          return (
            t.forEach(function (t) {
              'undefined' !== typeof t &&
                null !== t &&
                Object.keys(t).forEach(function (r) {
                  e[r] = t[r];
                });
            }),
            e
          );
        }
        function y(e) {
          Object(i.b)(e && 'Document' === e.kind, 8);
          var t = e.definitions
            .filter(function (e) {
              return 'FragmentDefinition' !== e.kind;
            })
            .map(function (e) {
              if ('OperationDefinition' !== e.kind) throw new i.a(9);
              return e;
            });
          return Object(i.b)(t.length <= 1, 10), e;
        }
        function d(e) {
          return (
            y(e),
            e.definitions.filter(function (e) {
              return 'OperationDefinition' === e.kind;
            })[0]
          );
        }
        function m(e) {
          return (
            e.definitions
              .filter(function (e) {
                return 'OperationDefinition' === e.kind && e.name;
              })
              .map(function (e) {
                return e.name.value;
              })[0] || null
          );
        }
        function O(e) {
          return e.definitions.filter(function (e) {
            return 'FragmentDefinition' === e.kind;
          });
        }
        function g(e) {
          var t;
          y(e);
          for (var r = 0, n = e.definitions; r < n.length; r++) {
            var o = n[r];
            if ('OperationDefinition' === o.kind) {
              var a = o.operation;
              if ('query' === a || 'mutation' === a || 'subscription' === a)
                return o;
            }
            'FragmentDefinition' !== o.kind || t || (t = o);
          }
          if (t) return t;
          throw new i.a(16);
        }
        function j(e) {
          void 0 === e && (e = []);
          var t = {};
          return (
            e.forEach(function (e) {
              t[e.name.value] = e;
            }),
            t
          );
        }
        function w(e) {
          if (e && e.variableDefinitions && e.variableDefinitions.length) {
            var t = e.variableDefinitions
              .filter(function (e) {
                return e.defaultValue;
              })
              .map(function (e) {
                var t = e.variable,
                  r = e.defaultValue,
                  n = {};
                return a(n, t.name, r), n;
              });
            return v.apply(void 0, Object(o.e)([{}], t));
          }
          return {};
        }
        function Q(e, t, r) {
          var n = 0;
          return (
            e.forEach(function (r, i) {
              t.call(this, r, i, e) && (e[n++] = r);
            }, r),
            (e.length = n),
            e
          );
        }
        function S(e) {
          return (function e(t, r) {
            return t.selectionSet.selections.every(function (t) {
              return 'FragmentSpread' === t.kind && e(r[t.name.value], r);
            });
          })(
            d(e) ||
              (function (e) {
                Object(i.b)('Document' === e.kind, 13),
                  Object(i.b)(e.definitions.length <= 1, 14);
                var t = e.definitions[0];
                return Object(i.b)('FragmentDefinition' === t.kind, 15), t;
              })(e),
            j(O(e))
          )
            ? null
            : e;
        }
        function k(e) {
          return function (t) {
            return e.some(function (e) {
              return (
                (e.name && e.name === t.name.value) || (e.test && e.test(t))
              );
            });
          };
        }
        function q(e, t) {
          var r = Object.create(null),
            i = [],
            a = Object.create(null),
            s = [],
            u = S(
              Object(n.b)(t, {
                Variable: {
                  enter: function (e, t, n) {
                    'VariableDefinition' !== n.kind && (r[e.name.value] = !0);
                  },
                },
                Field: {
                  enter: function (t) {
                    if (
                      e &&
                      t.directives &&
                      e.some(function (e) {
                        return e.remove;
                      }) &&
                      t.directives &&
                      t.directives.some(k(e))
                    )
                      return (
                        t.arguments &&
                          t.arguments.forEach(function (e) {
                            'Variable' === e.value.kind &&
                              i.push({ name: e.value.name.value });
                          }),
                        t.selectionSet &&
                          (function e(t) {
                            var r = [];
                            return (
                              t.selections.forEach(function (t) {
                                (c(t) || l(t)) && t.selectionSet
                                  ? e(t.selectionSet).forEach(function (e) {
                                      return r.push(e);
                                    })
                                  : 'FragmentSpread' === t.kind && r.push(t);
                              }),
                              r
                            );
                          })(t.selectionSet).forEach(function (e) {
                            s.push({ name: e.name.value });
                          }),
                        null
                      );
                  },
                },
                FragmentSpread: {
                  enter: function (e) {
                    a[e.name.value] = !0;
                  },
                },
                Directive: {
                  enter: function (t) {
                    if (k(e)(t)) return null;
                  },
                },
              })
            );
          return (
            u &&
              Q(i, function (e) {
                return !r[e.name];
              }).length &&
              (u = (function (e, t) {
                var r = (function (e) {
                  return function (t) {
                    return e.some(function (e) {
                      return (
                        t.value &&
                        'Variable' === t.value.kind &&
                        t.value.name &&
                        (e.name === t.value.name.value || (e.test && e.test(t)))
                      );
                    });
                  };
                })(e);
                return S(
                  Object(n.b)(t, {
                    OperationDefinition: {
                      enter: function (t) {
                        return Object(o.a)(Object(o.a)({}, t), {
                          variableDefinitions: t.variableDefinitions.filter(
                            function (t) {
                              return !e.some(function (e) {
                                return e.name === t.variable.name.value;
                              });
                            }
                          ),
                        });
                      },
                    },
                    Field: {
                      enter: function (t) {
                        if (
                          e.some(function (e) {
                            return e.remove;
                          })
                        ) {
                          var n = 0;
                          if (
                            (t.arguments.forEach(function (e) {
                              r(e) && (n += 1);
                            }),
                            1 === n)
                          )
                            return null;
                        }
                      },
                    },
                    Argument: {
                      enter: function (e) {
                        if (r(e)) return null;
                      },
                    },
                  })
                );
              })(i, u)),
            u &&
              Q(s, function (e) {
                return !a[e.name];
              }).length &&
              (u = (function (e, t) {
                function r(t) {
                  if (
                    e.some(function (e) {
                      return e.name === t.name.value;
                    })
                  )
                    return null;
                }
                return S(
                  Object(n.b)(t, {
                    FragmentSpread: { enter: r },
                    FragmentDefinition: { enter: r },
                  })
                );
              })(s, u)),
            u
          );
        }
        var R = {
          test: function (e) {
            var t = 'connection' === e.name.value;
            return (
              t &&
                (!e.arguments ||
                  e.arguments.some(function (e) {
                    return 'key' === e.name.value;
                  })),
              t
            );
          },
        };
        function E(e) {
          return q([R], y(e));
        }
        function x(e) {
          return 'query' === g(e).operation
            ? e
            : Object(n.b)(e, {
                OperationDefinition: {
                  enter: function (e) {
                    return Object(o.a)(Object(o.a)({}, e), {
                      operation: 'query',
                    });
                  },
                },
              });
        }
        function M(e) {
          y(e);
          var t = q(
            [
              {
                test: function (e) {
                  return 'client' === e.name.value;
                },
                remove: !0,
              },
            ],
            e
          );
          return (
            t &&
              (t = Object(n.b)(t, {
                FragmentDefinition: {
                  enter: function (e) {
                    if (
                      e.selectionSet &&
                      e.selectionSet.selections.every(function (e) {
                        return c(e) && '__typename' === e.name.value;
                      })
                    )
                      return null;
                  },
                },
              })),
            t
          );
        }
        var P =
            'function' === typeof WeakMap &&
            !(
              'object' === typeof navigator &&
              'ReactNative' === navigator.product
            ),
          D = Object.prototype.toString;
        function I(e) {
          return (function e(t, r) {
            switch (D.call(t)) {
              case '[object Array]':
                if (r.has(t)) return r.get(t);
                var n = t.slice(0);
                return (
                  r.set(t, n),
                  n.forEach(function (t, i) {
                    n[i] = e(t, r);
                  }),
                  n
                );
              case '[object Object]':
                if (r.has(t)) return r.get(t);
                var i = Object.create(Object.getPrototypeOf(t));
                return (
                  r.set(t, i),
                  Object.keys(t).forEach(function (n) {
                    i[n] = e(t[n], r);
                  }),
                  i
                );
              default:
                return t;
            }
          })(e, new Map());
        }
        function C(e) {
          try {
            return e();
          } catch (t) {
            console.error && console.error(t);
          }
        }
        function F(e) {
          return e.errors && e.errors.length;
        }
        var L = Object.prototype.hasOwnProperty;
        function T() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return _(e);
        }
        function _(e) {
          var t = e[0] || {},
            r = e.length;
          if (r > 1) {
            var n = [];
            t = A(t, n);
            for (var i = 1; i < r; ++i) t = N(t, e[i], n);
          }
          return t;
        }
        function V(e) {
          return null !== e && 'object' === typeof e;
        }
        function N(e, t, r) {
          return V(t) && V(e)
            ? (Object.isExtensible && !Object.isExtensible(e) && (e = A(e, r)),
              Object.keys(t).forEach(function (n) {
                var i = t[n];
                if (L.call(e, n)) {
                  var o = e[n];
                  i !== o && (e[n] = N(A(o, r), i, r));
                } else e[n] = i;
              }),
              e)
            : t;
        }
        function A(e, t) {
          return (
            null !== e &&
              'object' === typeof e &&
              t.indexOf(e) < 0 &&
              ((e = Array.isArray(e)
                ? e.slice(0)
                : Object(o.a)({ __proto__: Object.getPrototypeOf(e) }, e)),
              t.push(e)),
            e
          );
        }
        Object.create({});
      }.call(this, r('8oxB')));
    },
    qx2n: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return s;
      });
      var n = Object.prototype,
        i = n.toString,
        o = n.hasOwnProperty,
        a = new Map();
      function s(e, t) {
        try {
          return (function e(t, r) {
            if (t === r) return !0;
            var n = i.call(t),
              a = i.call(r);
            if (n !== a) return !1;
            switch (n) {
              case '[object Array]':
                if (t.length !== r.length) return !1;
              case '[object Object]':
                if (u(t, r)) return !0;
                var s = Object.keys(t),
                  c = Object.keys(r),
                  l = s.length;
                if (l !== c.length) return !1;
                for (var f = 0; f < l; ++f) if (!o.call(r, s[f])) return !1;
                for (f = 0; f < l; ++f) {
                  var h = s[f];
                  if (!e(t[h], r[h])) return !1;
                }
                return !0;
              case '[object Error]':
                return t.name === r.name && t.message === r.message;
              case '[object Number]':
                if (t !== t) return r !== r;
              case '[object Boolean]':
              case '[object Date]':
                return +t === +r;
              case '[object RegExp]':
              case '[object String]':
                return t == '' + r;
              case '[object Map]':
              case '[object Set]':
                if (t.size !== r.size) return !1;
                if (u(t, r)) return !0;
                for (var p = t.entries(), b = '[object Map]' === n; ; ) {
                  var v = p.next();
                  if (v.done) break;
                  var y = v.value,
                    d = y[0],
                    m = y[1];
                  if (!r.has(d)) return !1;
                  if (b && !e(m, r.get(d))) return !1;
                }
                return !0;
            }
            return !1;
          })(e, t);
        } finally {
          a.clear();
        }
      }
      function u(e, t) {
        var r = a.get(e);
        if (r) {
          if (r.has(t)) return !0;
        } else a.set(e, (r = new Set()));
        return r.add(t), !1;
      }
    },
    rWdj: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return o;
      });
      var n = r('RKIb');
      function i(e) {
        return (i =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function o(e) {
        return a(e, []);
      }
      function a(e, t) {
        switch (i(e)) {
          case 'string':
            return JSON.stringify(e);
          case 'function':
            return e.name ? '[function '.concat(e.name, ']') : '[function]';
          case 'object':
            return null === e
              ? 'null'
              : (function (e, t) {
                  if (-1 !== t.indexOf(e)) return '[Circular]';
                  var r = [].concat(t, [e]),
                    i = (function (e) {
                      var t = e[String(n.a)];
                      if ('function' === typeof t) return t;
                      if ('function' === typeof e.inspect) return e.inspect;
                    })(e);
                  if (void 0 !== i) {
                    var o = i.call(e);
                    if (o !== e) return 'string' === typeof o ? o : a(o, r);
                  } else if (Array.isArray(e))
                    return (function (e, t) {
                      if (0 === e.length) return '[]';
                      if (t.length > 2) return '[Array]';
                      for (
                        var r = Math.min(10, e.length),
                          n = e.length - r,
                          i = [],
                          o = 0;
                        o < r;
                        ++o
                      )
                        i.push(a(e[o], t));
                      1 === n
                        ? i.push('... 1 more item')
                        : n > 1 && i.push('... '.concat(n, ' more items'));
                      return '[' + i.join(', ') + ']';
                    })(e, r);
                  return (function (e, t) {
                    var r = Object.keys(e);
                    if (0 === r.length) return '{}';
                    if (t.length > 2)
                      return (
                        '[' +
                        (function (e) {
                          var t = Object.prototype.toString
                            .call(e)
                            .replace(/^\[object /, '')
                            .replace(/]$/, '');
                          if (
                            'Object' === t &&
                            'function' === typeof e.constructor
                          ) {
                            var r = e.constructor.name;
                            if ('string' === typeof r && '' !== r) return r;
                          }
                          return t;
                        })(e) +
                        ']'
                      );
                    return (
                      '{ ' +
                      r
                        .map(function (r) {
                          return r + ': ' + a(e[r], t);
                        })
                        .join(', ') +
                      ' }'
                    );
                  })(e, r);
                })(e, t);
          default:
            return String(e);
        }
      }
    },
    ttZb: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return W;
      }),
        r.d(t, 'b', function () {
          return U;
        }),
        r.d(t, 'c', function () {
          return B;
        });
      var n = r('lqOT'),
        i = r('mrSG'),
        o = r('q1tI'),
        a = r('qIgX'),
        s = r('qx2n'),
        u = r('ABJ/'),
        c = r.n(u).a,
        l = r('qVdT'),
        f = r('RRgQ');
      !(function (e) {
        function t(t, r) {
          var n = e.call(this, t) || this;
          return (n.link = r), n;
        }
        Object(i.c)(t, e);
      })(Error);
      function h(e) {
        return e.request.length <= 1;
      }
      function p(e, t) {
        var r = Object(i.a)({}, e);
        return (
          Object.defineProperty(t, 'setContext', {
            enumerable: !1,
            value: function (e) {
              r =
                'function' === typeof e
                  ? Object(i.a)({}, r, e(r))
                  : Object(i.a)({}, r, e);
            },
          }),
          Object.defineProperty(t, 'getContext', {
            enumerable: !1,
            value: function () {
              return Object(i.a)({}, r);
            },
          }),
          Object.defineProperty(t, 'toKey', {
            enumerable: !1,
            value: function () {
              return (function (e) {
                var t = e.query,
                  r = e.variables,
                  n = e.operationName;
                return JSON.stringify([n, t, r]);
              })(t);
            },
          }),
          t
        );
      }
      function b(e, t) {
        return t ? t(e) : c.of();
      }
      function v(e) {
        return 'function' === typeof e ? new O(e) : e;
      }
      function y() {
        return new O(function () {
          return c.of();
        });
      }
      function d(e) {
        return 0 === e.length
          ? y()
          : e.map(v).reduce(function (e, t) {
              return e.concat(t);
            });
      }
      function m(e, t, r) {
        var n = v(t),
          i = v(r || new O(b));
        return h(n) && h(i)
          ? new O(function (t) {
              return e(t) ? n.request(t) || c.of() : i.request(t) || c.of();
            })
          : new O(function (t, r) {
              return e(t)
                ? n.request(t, r) || c.of()
                : i.request(t, r) || c.of();
            });
      }
      var O = (function () {
        function e(e) {
          e && (this.request = e);
        }
        return (
          (e.prototype.split = function (t, r, n) {
            return this.concat(m(t, r, n || new e(b)));
          }),
          (e.prototype.concat = function (e) {
            return (function (e, t) {
              var r = v(e);
              if (h(r)) return r;
              var n = v(t);
              return h(n)
                ? new O(function (e) {
                    return (
                      r.request(e, function (e) {
                        return n.request(e) || c.of();
                      }) || c.of()
                    );
                  })
                : new O(function (e, t) {
                    return (
                      r.request(e, function (e) {
                        return n.request(e, t) || c.of();
                      }) || c.of()
                    );
                  });
            })(this, e);
          }),
          (e.prototype.request = function (e, t) {
            throw new l.a(1);
          }),
          (e.empty = y),
          (e.from = d),
          (e.split = m),
          (e.execute = g),
          e
        );
      })();
      function g(e, t) {
        return (
          e.request(
            p(
              t.context,
              (function (e) {
                var t = {
                  variables: e.variables || {},
                  extensions: e.extensions || {},
                  operationName: e.operationName,
                  query: e.query,
                };
                return (
                  t.operationName ||
                    (t.operationName =
                      'string' !== typeof t.query ? Object(f.a)(t.query) : ''),
                  t
                );
              })(
                (function (e) {
                  for (
                    var t = [
                        'query',
                        'operationName',
                        'variables',
                        'extensions',
                        'context',
                      ],
                      r = 0,
                      n = Object.keys(e);
                    r < n.length;
                    r++
                  ) {
                    var i = n[r];
                    if (t.indexOf(i) < 0) throw new l.a(2);
                  }
                  return e;
                })(t)
              )
            )
          ) || c.of()
        );
      }
      var j,
        w = r('bCCX'),
        Q = r('L2ys');
      function S(e) {
        return e < 7;
      }
      !(function (e) {
        (e[(e.loading = 1)] = 'loading'),
          (e[(e.setVariables = 2)] = 'setVariables'),
          (e[(e.fetchMore = 3)] = 'fetchMore'),
          (e[(e.refetch = 4)] = 'refetch'),
          (e[(e.poll = 6)] = 'poll'),
          (e[(e.ready = 7)] = 'ready'),
          (e[(e.error = 8)] = 'error');
      })(j || (j = {}));
      var k = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i.c)(t, e),
          (t.prototype[w.a] = function () {
            return this;
          }),
          (t.prototype['@@observable'] = function () {
            return this;
          }),
          t
        );
      })(c);
      function q(e) {
        return Array.isArray(e) && e.length > 0;
      }
      var R,
        E = (function (e) {
          function t(r) {
            var n = r.graphQLErrors,
              i = r.networkError,
              o = r.errorMessage,
              a = r.extraInfo,
              s = e.call(this, o) || this;
            return (
              (s.graphQLErrors = n || []),
              (s.networkError = i || null),
              (s.message =
                o ||
                (function (e) {
                  var t = '';
                  return (
                    q(e.graphQLErrors) &&
                      e.graphQLErrors.forEach(function (e) {
                        var r = e ? e.message : 'Error message not found.';
                        t += 'GraphQL error: ' + r + '\n';
                      }),
                    e.networkError &&
                      (t += 'Network error: ' + e.networkError.message + '\n'),
                    (t = t.replace(/\n$/, ''))
                  );
                })(s)),
              (s.extraInfo = a),
              (s.__proto__ = t.prototype),
              s
            );
          }
          return Object(i.c)(t, e), t;
        })(Error);
      !(function (e) {
        (e[(e.normal = 1)] = 'normal'),
          (e[(e.refetch = 2)] = 'refetch'),
          (e[(e.poll = 3)] = 'poll');
      })(R || (R = {}));
      var x = (function (e) {
        function t(t) {
          var r = t.queryManager,
            n = t.options,
            i = t.shouldSubscribe,
            o = void 0 === i || i,
            s =
              e.call(this, function (e) {
                return s.onSubscribe(e);
              }) || this;
          (s.observers = new Set()),
            (s.subscriptions = new Set()),
            (s.isTornDown = !1),
            (s.options = n),
            (s.variables = n.variables || {}),
            (s.queryId = r.generateQueryId()),
            (s.shouldSubscribe = o);
          var u = Object(a.i)(n.query);
          return (
            (s.queryName = u && u.name && u.name.value), (s.queryManager = r), s
          );
        }
        return (
          Object(i.c)(t, e),
          (t.prototype.result = function () {
            var e = this;
            return new Promise(function (t, r) {
              var n = {
                  next: function (r) {
                    t(r),
                      e.observers.delete(n),
                      e.observers.size || e.queryManager.removeQuery(e.queryId),
                      setTimeout(function () {
                        i.unsubscribe();
                      }, 0);
                  },
                  error: r,
                },
                i = e.subscribe(n);
            });
          }),
          (t.prototype.currentResult = function () {
            var e = this.getCurrentResult();
            return void 0 === e.data && (e.data = {}), e;
          }),
          (t.prototype.getCurrentResult = function () {
            if (this.isTornDown) {
              var e = this.lastResult;
              return {
                data: (!this.lastError && e && e.data) || void 0,
                error: this.lastError,
                loading: !1,
                networkStatus: j.error,
              };
            }
            var t,
              r,
              n,
              o = this.queryManager.getCurrentQueryResult(this),
              a = o.data,
              s = o.partial,
              u = this.queryManager.queryStore.get(this.queryId),
              c = this.options.fetchPolicy,
              l = 'network-only' === c || 'no-cache' === c;
            if (u) {
              var f = u.networkStatus;
              if (
                ((r = u),
                void 0 === (n = this.options.errorPolicy) && (n = 'none'),
                r && (r.networkError || ('none' === n && q(r.graphQLErrors))))
              )
                return {
                  data: void 0,
                  loading: !1,
                  networkStatus: f,
                  error: new E({
                    graphQLErrors: u.graphQLErrors,
                    networkError: u.networkError,
                  }),
                };
              u.variables &&
                ((this.options.variables = Object(i.a)(
                  Object(i.a)({}, this.options.variables),
                  u.variables
                )),
                (this.variables = this.options.variables)),
                (t = { data: a, loading: S(f), networkStatus: f }),
                u.graphQLErrors &&
                  'all' === this.options.errorPolicy &&
                  (t.errors = u.graphQLErrors);
            } else {
              var h = l || (s && 'cache-only' !== c);
              t = {
                data: a,
                loading: h,
                networkStatus: h ? j.loading : j.ready,
              };
            }
            return (
              s ||
                this.updateLastResult(
                  Object(i.a)(Object(i.a)({}, t), { stale: !1 })
                ),
              Object(i.a)(Object(i.a)({}, t), { partial: s })
            );
          }),
          (t.prototype.isDifferentFromLastResult = function (e) {
            var t = this.lastResultSnapshot;
            return !(
              t &&
              e &&
              t.networkStatus === e.networkStatus &&
              t.stale === e.stale &&
              Object(s.a)(t.data, e.data)
            );
          }),
          (t.prototype.getLastResult = function () {
            return this.lastResult;
          }),
          (t.prototype.getLastError = function () {
            return this.lastError;
          }),
          (t.prototype.resetLastResults = function () {
            delete this.lastResult,
              delete this.lastResultSnapshot,
              delete this.lastError,
              (this.isTornDown = !1);
          }),
          (t.prototype.resetQueryStoreErrors = function () {
            var e = this.queryManager.queryStore.get(this.queryId);
            e && ((e.networkError = null), (e.graphQLErrors = []));
          }),
          (t.prototype.refetch = function (e) {
            var t = this.options.fetchPolicy;
            return 'cache-only' === t
              ? Promise.reject(new l.a(3))
              : ('no-cache' !== t &&
                  'cache-and-network' !== t &&
                  (t = 'network-only'),
                Object(s.a)(this.variables, e) ||
                  (this.variables = Object(i.a)(
                    Object(i.a)({}, this.variables),
                    e
                  )),
                Object(s.a)(this.options.variables, this.variables) ||
                  (this.options.variables = Object(i.a)(
                    Object(i.a)({}, this.options.variables),
                    this.variables
                  )),
                this.queryManager.fetchQuery(
                  this.queryId,
                  Object(i.a)(Object(i.a)({}, this.options), {
                    fetchPolicy: t,
                  }),
                  R.refetch
                ));
          }),
          (t.prototype.fetchMore = function (e) {
            var t = this;
            Object(l.b)(e.updateQuery, 4);
            var r = Object(i.a)(
                Object(i.a)(
                  {},
                  e.query
                    ? e
                    : Object(i.a)(
                        Object(i.a)(Object(i.a)({}, this.options), e),
                        {
                          variables: Object(i.a)(
                            Object(i.a)({}, this.variables),
                            e.variables
                          ),
                        }
                      )
                ),
                { fetchPolicy: 'network-only' }
              ),
              n = this.queryManager.generateQueryId();
            return this.queryManager
              .fetchQuery(n, r, R.normal, this.queryId)
              .then(
                function (i) {
                  return (
                    t.updateQuery(function (t) {
                      return e.updateQuery(t, {
                        fetchMoreResult: i.data,
                        variables: r.variables,
                      });
                    }),
                    t.queryManager.stopQuery(n),
                    i
                  );
                },
                function (e) {
                  throw (t.queryManager.stopQuery(n), e);
                }
              );
          }),
          (t.prototype.subscribeToMore = function (e) {
            var t = this,
              r = this.queryManager
                .startGraphQLSubscription({
                  query: e.document,
                  variables: e.variables,
                })
                .subscribe({
                  next: function (r) {
                    var n = e.updateQuery;
                    n &&
                      t.updateQuery(function (e, t) {
                        var i = t.variables;
                        return n(e, { subscriptionData: r, variables: i });
                      });
                  },
                  error: function (t) {
                    e.onError && e.onError(t);
                  },
                });
            return (
              this.subscriptions.add(r),
              function () {
                t.subscriptions.delete(r) && r.unsubscribe();
              }
            );
          }),
          (t.prototype.setOptions = function (e) {
            var t = this.options.fetchPolicy;
            (this.options = Object(i.a)(Object(i.a)({}, this.options), e)),
              e.pollInterval
                ? this.startPolling(e.pollInterval)
                : 0 === e.pollInterval && this.stopPolling();
            var r = e.fetchPolicy;
            return this.setVariables(
              this.options.variables,
              t !== r &&
                ('cache-only' === t || 'standby' === t || 'network-only' === r),
              e.fetchResults
            );
          }),
          (t.prototype.setVariables = function (e, t, r) {
            return (
              void 0 === t && (t = !1),
              void 0 === r && (r = !0),
              (this.isTornDown = !1),
              (e = e || this.variables),
              !t && Object(s.a)(e, this.variables)
                ? this.observers.size && r
                  ? this.result()
                  : Promise.resolve()
                : ((this.variables = this.options.variables = e),
                  this.observers.size
                    ? this.queryManager.fetchQuery(this.queryId, this.options)
                    : Promise.resolve())
            );
          }),
          (t.prototype.updateQuery = function (e) {
            var t = this.queryManager,
              r = t.getQueryWithPreviousResult(this.queryId),
              n = r.previousResult,
              i = r.variables,
              o = r.document,
              s = Object(a.v)(function () {
                return e(n, { variables: i });
              });
            s &&
              (t.dataStore.markUpdateQueryResult(o, i, s),
              t.broadcastQueries());
          }),
          (t.prototype.stopPolling = function () {
            this.queryManager.stopPollingQuery(this.queryId),
              (this.options.pollInterval = void 0);
          }),
          (t.prototype.startPolling = function (e) {
            D(this),
              (this.options.pollInterval = e),
              this.queryManager.startPollingQuery(this.options, this.queryId);
          }),
          (t.prototype.updateLastResult = function (e) {
            var t = this.lastResult;
            return (
              (this.lastResult = e),
              (this.lastResultSnapshot = this.queryManager
                .assumeImmutableResults
                ? e
                : Object(a.d)(e)),
              t
            );
          }),
          (t.prototype.onSubscribe = function (e) {
            var t = this;
            try {
              var r = e._subscription._observer;
              r && !r.error && (r.error = M);
            } catch (i) {}
            var n = !this.observers.size;
            return (
              this.observers.add(e),
              e.next && this.lastResult && e.next(this.lastResult),
              e.error && this.lastError && e.error(this.lastError),
              n && this.setUpQuery(),
              function () {
                t.observers.delete(e) && !t.observers.size && t.tearDownQuery();
              }
            );
          }),
          (t.prototype.setUpQuery = function () {
            var e = this,
              t = this.queryManager,
              r = this.queryId;
            this.shouldSubscribe && t.addObservableQuery(r, this),
              this.options.pollInterval &&
                (D(this), t.startPollingQuery(this.options, r));
            var n = function (t) {
              e.updateLastResult(
                Object(i.a)(Object(i.a)({}, e.lastResult), {
                  errors: t.graphQLErrors,
                  networkStatus: j.error,
                  loading: !1,
                })
              ),
                P(e.observers, 'error', (e.lastError = t));
            };
            t.observeQuery(r, this.options, {
              next: function (r) {
                if (e.lastError || e.isDifferentFromLastResult(r)) {
                  var n = e.updateLastResult(r),
                    i = e.options,
                    o = i.query,
                    a = i.variables,
                    u = i.fetchPolicy;
                  t.transform(o).hasClientExports
                    ? t
                        .getLocalState()
                        .addExportedVariables(o, a)
                        .then(function (i) {
                          var a = e.variables;
                          (e.variables = e.options.variables = i),
                            !r.loading &&
                            n &&
                            'cache-only' !== u &&
                            t.transform(o).serverQuery &&
                            !Object(s.a)(a, i)
                              ? e.refetch()
                              : P(e.observers, 'next', r);
                        })
                    : P(e.observers, 'next', r);
                }
              },
              error: n,
            }).catch(n);
          }),
          (t.prototype.tearDownQuery = function () {
            var e = this.queryManager;
            (this.isTornDown = !0),
              e.stopPollingQuery(this.queryId),
              this.subscriptions.forEach(function (e) {
                return e.unsubscribe();
              }),
              this.subscriptions.clear(),
              e.removeObservableQuery(this.queryId),
              e.stopQuery(this.queryId),
              this.observers.clear();
          }),
          t
        );
      })(k);
      function M(e) {}
      function P(e, t, r) {
        var n = [];
        e.forEach(function (e) {
          return e[t] && n.push(e);
        }),
          n.forEach(function (e) {
            return e[t](r);
          });
      }
      function D(e) {
        var t = e.options.fetchPolicy;
        Object(l.b)('cache-first' !== t && 'cache-only' !== t, 5);
      }
      var I = (function () {
          function e() {
            this.store = {};
          }
          return (
            (e.prototype.getStore = function () {
              return this.store;
            }),
            (e.prototype.get = function (e) {
              return this.store[e];
            }),
            (e.prototype.initMutation = function (e, t, r) {
              this.store[e] = {
                mutation: t,
                variables: r || {},
                loading: !0,
                error: null,
              };
            }),
            (e.prototype.markMutationError = function (e, t) {
              var r = this.store[e];
              r && ((r.loading = !1), (r.error = t));
            }),
            (e.prototype.markMutationResult = function (e) {
              var t = this.store[e];
              t && ((t.loading = !1), (t.error = null));
            }),
            (e.prototype.reset = function () {
              this.store = {};
            }),
            e
          );
        })(),
        C = (function () {
          function e() {
            this.store = {};
          }
          return (
            (e.prototype.getStore = function () {
              return this.store;
            }),
            (e.prototype.get = function (e) {
              return this.store[e];
            }),
            (e.prototype.initQuery = function (e) {
              var t = this.store[e.queryId];
              Object(l.b)(
                !t ||
                  t.document === e.document ||
                  Object(s.a)(t.document, e.document),
                19
              );
              var r,
                n = !1,
                i = null;
              e.storePreviousVariables &&
                t &&
                t.networkStatus !== j.loading &&
                (Object(s.a)(t.variables, e.variables) ||
                  ((n = !0), (i = t.variables))),
                (r = n
                  ? j.setVariables
                  : e.isPoll
                  ? j.poll
                  : e.isRefetch
                  ? j.refetch
                  : j.loading);
              var o = [];
              t && t.graphQLErrors && (o = t.graphQLErrors),
                (this.store[e.queryId] = {
                  document: e.document,
                  variables: e.variables,
                  previousVariables: i,
                  networkError: null,
                  graphQLErrors: o,
                  networkStatus: r,
                  metadata: e.metadata,
                }),
                'string' === typeof e.fetchMoreForQueryId &&
                  this.store[e.fetchMoreForQueryId] &&
                  (this.store[e.fetchMoreForQueryId].networkStatus =
                    j.fetchMore);
            }),
            (e.prototype.markQueryResult = function (e, t, r) {
              this.store &&
                this.store[e] &&
                ((this.store[e].networkError = null),
                (this.store[e].graphQLErrors = q(t.errors) ? t.errors : []),
                (this.store[e].previousVariables = null),
                (this.store[e].networkStatus = j.ready),
                'string' === typeof r &&
                  this.store[r] &&
                  (this.store[r].networkStatus = j.ready));
            }),
            (e.prototype.markQueryError = function (e, t, r) {
              this.store &&
                this.store[e] &&
                ((this.store[e].networkError = t),
                (this.store[e].networkStatus = j.error),
                'string' === typeof r && this.markQueryResultClient(r, !0));
            }),
            (e.prototype.markQueryResultClient = function (e, t) {
              var r = this.store && this.store[e];
              r &&
                ((r.networkError = null),
                (r.previousVariables = null),
                t && (r.networkStatus = j.ready));
            }),
            (e.prototype.stopQuery = function (e) {
              delete this.store[e];
            }),
            (e.prototype.reset = function (e) {
              var t = this;
              Object.keys(this.store).forEach(function (r) {
                e.indexOf(r) < 0
                  ? t.stopQuery(r)
                  : (t.store[r].networkStatus = j.loading);
              });
            }),
            e
          );
        })();
      var F = (function () {
        function e(e) {
          var t = e.cache,
            r = e.client,
            n = e.resolvers,
            i = e.fragmentMatcher;
          (this.cache = t),
            r && (this.client = r),
            n && this.addResolvers(n),
            i && this.setFragmentMatcher(i);
        }
        return (
          (e.prototype.addResolvers = function (e) {
            var t = this;
            (this.resolvers = this.resolvers || {}),
              Array.isArray(e)
                ? e.forEach(function (e) {
                    t.resolvers = Object(a.p)(t.resolvers, e);
                  })
                : (this.resolvers = Object(a.p)(this.resolvers, e));
          }),
          (e.prototype.setResolvers = function (e) {
            (this.resolvers = {}), this.addResolvers(e);
          }),
          (e.prototype.getResolvers = function () {
            return this.resolvers || {};
          }),
          (e.prototype.runResolvers = function (e) {
            var t = e.document,
              r = e.remoteResult,
              n = e.context,
              o = e.variables,
              a = e.onlyRunForcedResolvers,
              s = void 0 !== a && a;
            return Object(i.b)(this, void 0, void 0, function () {
              return Object(i.d)(this, function (e) {
                return t
                  ? [
                      2,
                      this.resolveDocument(
                        t,
                        r.data,
                        n,
                        o,
                        this.fragmentMatcher,
                        s
                      ).then(function (e) {
                        return Object(i.a)(Object(i.a)({}, r), {
                          data: e.result,
                        });
                      }),
                    ]
                  : [2, r];
              });
            });
          }),
          (e.prototype.setFragmentMatcher = function (e) {
            this.fragmentMatcher = e;
          }),
          (e.prototype.getFragmentMatcher = function () {
            return this.fragmentMatcher;
          }),
          (e.prototype.clientQuery = function (e) {
            return Object(a.m)(['client'], e) && this.resolvers ? e : null;
          }),
          (e.prototype.serverQuery = function (e) {
            return this.resolvers ? Object(a.r)(e) : e;
          }),
          (e.prototype.prepareContext = function (e) {
            void 0 === e && (e = {});
            var t = this.cache;
            return Object(i.a)(Object(i.a)({}, e), {
              cache: t,
              getCacheKey: function (e) {
                if (t.config) return t.config.dataIdFromObject(e);
                Object(l.b)(!1, 6);
              },
            });
          }),
          (e.prototype.addExportedVariables = function (e, t, r) {
            return (
              void 0 === t && (t = {}),
              void 0 === r && (r = {}),
              Object(i.b)(this, void 0, void 0, function () {
                return Object(i.d)(this, function (n) {
                  return e
                    ? [
                        2,
                        this.resolveDocument(
                          e,
                          this.buildRootValueFromCache(e, t) || {},
                          this.prepareContext(r),
                          t
                        ).then(function (e) {
                          return Object(i.a)(
                            Object(i.a)({}, t),
                            e.exportedVariables
                          );
                        }),
                      ]
                    : [2, Object(i.a)({}, t)];
                });
              })
            );
          }),
          (e.prototype.shouldForceResolvers = function (e) {
            var t = !1;
            return (
              Object(Q.b)(e, {
                Directive: {
                  enter: function (e) {
                    if (
                      'client' === e.name.value &&
                      e.arguments &&
                      (t = e.arguments.some(function (e) {
                        return (
                          'always' === e.name.value &&
                          'BooleanValue' === e.value.kind &&
                          !0 === e.value.value
                        );
                      }))
                    )
                      return Q.a;
                  },
                },
              }),
              t
            );
          }),
          (e.prototype.buildRootValueFromCache = function (e, t) {
            return this.cache.diff({
              query: Object(a.b)(e),
              variables: t,
              returnPartialData: !0,
              optimistic: !1,
            }).result;
          }),
          (e.prototype.resolveDocument = function (e, t, r, n, o, s) {
            return (
              void 0 === r && (r = {}),
              void 0 === n && (n = {}),
              void 0 === o &&
                (o = function () {
                  return !0;
                }),
              void 0 === s && (s = !1),
              Object(i.b)(this, void 0, void 0, function () {
                var u, c, l, f, h, p, b, v, y;
                return Object(i.d)(this, function (d) {
                  var m;
                  return (
                    (u = Object(a.h)(e)),
                    (c = Object(a.g)(e)),
                    (l = Object(a.e)(c)),
                    (f = u.operation),
                    (h = f
                      ? (m = f).charAt(0).toUpperCase() + m.slice(1)
                      : 'Query'),
                    (b = (p = this).cache),
                    (v = p.client),
                    (y = {
                      fragmentMap: l,
                      context: Object(i.a)(Object(i.a)({}, r), {
                        cache: b,
                        client: v,
                      }),
                      variables: n,
                      fragmentMatcher: o,
                      defaultOperationType: h,
                      exportedVariables: {},
                      onlyRunForcedResolvers: s,
                    }),
                    [
                      2,
                      this.resolveSelectionSet(u.selectionSet, t, y).then(
                        function (e) {
                          return {
                            result: e,
                            exportedVariables: y.exportedVariables,
                          };
                        }
                      ),
                    ]
                  );
                });
              })
            );
          }),
          (e.prototype.resolveSelectionSet = function (e, t, r) {
            return Object(i.b)(this, void 0, void 0, function () {
              var n,
                o,
                s,
                u,
                c,
                f = this;
              return Object(i.d)(this, function (h) {
                return (
                  (n = r.fragmentMap),
                  (o = r.context),
                  (s = r.variables),
                  (u = [t]),
                  (c = function (e) {
                    return Object(i.b)(f, void 0, void 0, function () {
                      var c, f;
                      return Object(i.d)(this, function (i) {
                        return Object(a.u)(e, s)
                          ? Object(a.n)(e)
                            ? [
                                2,
                                this.resolveField(e, t, r).then(function (t) {
                                  var r;
                                  'undefined' !== typeof t &&
                                    u.push((((r = {})[Object(a.t)(e)] = t), r));
                                }),
                              ]
                            : (Object(a.o)(e)
                                ? (c = e)
                                : ((c = n[e.name.value]), Object(l.b)(c, 7)),
                              c &&
                              c.typeCondition &&
                              ((f = c.typeCondition.name.value),
                              r.fragmentMatcher(t, f, o))
                                ? [
                                    2,
                                    this.resolveSelectionSet(
                                      c.selectionSet,
                                      t,
                                      r
                                    ).then(function (e) {
                                      u.push(e);
                                    }),
                                  ]
                                : [2])
                          : [2];
                      });
                    });
                  }),
                  [
                    2,
                    Promise.all(e.selections.map(c)).then(function () {
                      return Object(a.q)(u);
                    }),
                  ]
                );
              });
            });
          }),
          (e.prototype.resolveField = function (e, t, r) {
            return Object(i.b)(this, void 0, void 0, function () {
              var n,
                o,
                s,
                u,
                c,
                l,
                f,
                h,
                p,
                b = this;
              return Object(i.d)(this, function (i) {
                return (
                  (n = r.variables),
                  (o = e.name.value),
                  (s = Object(a.t)(e)),
                  (u = o !== s),
                  (c = t[s] || t[o]),
                  (l = Promise.resolve(c)),
                  (r.onlyRunForcedResolvers && !this.shouldForceResolvers(e)) ||
                    ((f = t.__typename || r.defaultOperationType),
                    (h = this.resolvers && this.resolvers[f]) &&
                      (p = h[u ? o : s]) &&
                      (l = Promise.resolve(
                        p(t, Object(a.a)(e, n), r.context, {
                          field: e,
                          fragmentMap: r.fragmentMap,
                        })
                      ))),
                  [
                    2,
                    l.then(function (t) {
                      return (
                        void 0 === t && (t = c),
                        e.directives &&
                          e.directives.forEach(function (e) {
                            'export' === e.name.value &&
                              e.arguments &&
                              e.arguments.forEach(function (e) {
                                'as' === e.name.value &&
                                  'StringValue' === e.value.kind &&
                                  (r.exportedVariables[e.value.value] = t);
                              });
                          }),
                        e.selectionSet
                          ? null == t
                            ? t
                            : Array.isArray(t)
                            ? b.resolveSubSelectedArray(e, t, r)
                            : e.selectionSet
                            ? b.resolveSelectionSet(e.selectionSet, t, r)
                            : void 0
                          : t
                      );
                    }),
                  ]
                );
              });
            });
          }),
          (e.prototype.resolveSubSelectedArray = function (e, t, r) {
            var n = this;
            return Promise.all(
              t.map(function (t) {
                return null === t
                  ? null
                  : Array.isArray(t)
                  ? n.resolveSubSelectedArray(e, t, r)
                  : e.selectionSet
                  ? n.resolveSelectionSet(e.selectionSet, t, r)
                  : void 0;
              })
            );
          }),
          e
        );
      })();
      function L(e) {
        var t = new Set(),
          r = null;
        return new k(function (n) {
          return (
            t.add(n),
            (r =
              r ||
              e.subscribe({
                next: function (e) {
                  t.forEach(function (t) {
                    return t.next && t.next(e);
                  });
                },
                error: function (e) {
                  t.forEach(function (t) {
                    return t.error && t.error(e);
                  });
                },
                complete: function () {
                  t.forEach(function (e) {
                    return e.complete && e.complete();
                  });
                },
              })),
            function () {
              t.delete(n) && !t.size && r && (r.unsubscribe(), (r = null));
            }
          );
        });
      }
      var T = Object.prototype.hasOwnProperty,
        _ = (function () {
          function e(e) {
            var t = e.link,
              r = e.queryDeduplication,
              n = void 0 !== r && r,
              i = e.store,
              o = e.onBroadcast,
              s = void 0 === o ? function () {} : o,
              u = e.ssrMode,
              c = void 0 !== u && u,
              l = e.clientAwareness,
              f = void 0 === l ? {} : l,
              h = e.localState,
              p = e.assumeImmutableResults;
            (this.mutationStore = new I()),
              (this.queryStore = new C()),
              (this.clientAwareness = {}),
              (this.idCounter = 1),
              (this.queries = new Map()),
              (this.fetchQueryRejectFns = new Map()),
              (this.transformCache = new (a.c ? WeakMap : Map)()),
              (this.inFlightLinkObservables = new Map()),
              (this.pollingInfoByQueryId = new Map()),
              (this.link = t),
              (this.queryDeduplication = n),
              (this.dataStore = i),
              (this.onBroadcast = s),
              (this.clientAwareness = f),
              (this.localState = h || new F({ cache: i.getCache() })),
              (this.ssrMode = c),
              (this.assumeImmutableResults = !!p);
          }
          return (
            (e.prototype.stop = function () {
              var e = this;
              this.queries.forEach(function (t, r) {
                e.stopQueryNoBroadcast(r);
              }),
                this.fetchQueryRejectFns.forEach(function (e) {
                  e(new l.a(8));
                });
            }),
            (e.prototype.mutate = function (e) {
              var t = e.mutation,
                r = e.variables,
                n = e.optimisticResponse,
                o = e.updateQueries,
                s = e.refetchQueries,
                u = void 0 === s ? [] : s,
                c = e.awaitRefetchQueries,
                f = void 0 !== c && c,
                h = e.update,
                p = e.errorPolicy,
                b = void 0 === p ? 'none' : p,
                v = e.fetchPolicy,
                y = e.context,
                d = void 0 === y ? {} : y;
              return Object(i.b)(this, void 0, void 0, function () {
                var e,
                  s,
                  c,
                  p = this;
                return Object(i.d)(this, function (y) {
                  switch (y.label) {
                    case 0:
                      return (
                        Object(l.b)(t, 9),
                        Object(l.b)(!v || 'no-cache' === v, 10),
                        (e = this.generateQueryId()),
                        (t = this.transform(t).document),
                        this.setQuery(e, function () {
                          return { document: t };
                        }),
                        (r = this.getVariables(t, r)),
                        this.transform(t).hasClientExports
                          ? [4, this.localState.addExportedVariables(t, r, d)]
                          : [3, 2]
                      );
                    case 1:
                      (r = y.sent()), (y.label = 2);
                    case 2:
                      return (
                        (s = function () {
                          var e = {};
                          return (
                            o &&
                              p.queries.forEach(function (t, r) {
                                var n = t.observableQuery;
                                if (n) {
                                  var i = n.queryName;
                                  i &&
                                    T.call(o, i) &&
                                    (e[r] = {
                                      updater: o[i],
                                      query: p.queryStore.get(r),
                                    });
                                }
                              }),
                            e
                          );
                        }),
                        this.mutationStore.initMutation(e, t, r),
                        this.dataStore.markMutationInit({
                          mutationId: e,
                          document: t,
                          variables: r,
                          updateQueries: s(),
                          update: h,
                          optimisticResponse: n,
                        }),
                        this.broadcastQueries(),
                        (c = this),
                        [
                          2,
                          new Promise(function (o, l) {
                            var p, y;
                            c.getObservableFromLink(
                              t,
                              Object(i.a)(Object(i.a)({}, d), {
                                optimisticResponse: n,
                              }),
                              r,
                              !1
                            ).subscribe({
                              next: function (n) {
                                Object(a.k)(n) && 'none' === b
                                  ? (y = new E({ graphQLErrors: n.errors }))
                                  : (c.mutationStore.markMutationResult(e),
                                    'no-cache' !== v &&
                                      c.dataStore.markMutationResult({
                                        mutationId: e,
                                        result: n,
                                        document: t,
                                        variables: r,
                                        updateQueries: s(),
                                        update: h,
                                      }),
                                    (p = n));
                              },
                              error: function (t) {
                                c.mutationStore.markMutationError(e, t),
                                  c.dataStore.markMutationComplete({
                                    mutationId: e,
                                    optimisticResponse: n,
                                  }),
                                  c.broadcastQueries(),
                                  c.setQuery(e, function () {
                                    return { document: null };
                                  }),
                                  l(new E({ networkError: t }));
                              },
                              complete: function () {
                                if (
                                  (y && c.mutationStore.markMutationError(e, y),
                                  c.dataStore.markMutationComplete({
                                    mutationId: e,
                                    optimisticResponse: n,
                                  }),
                                  c.broadcastQueries(),
                                  y)
                                )
                                  l(y);
                                else {
                                  'function' === typeof u && (u = u(p));
                                  var t = [];
                                  q(u) &&
                                    u.forEach(function (e) {
                                      if ('string' === typeof e)
                                        c.queries.forEach(function (r) {
                                          var n = r.observableQuery;
                                          n &&
                                            n.queryName === e &&
                                            t.push(n.refetch());
                                        });
                                      else {
                                        var r = {
                                          query: e.query,
                                          variables: e.variables,
                                          fetchPolicy: 'network-only',
                                        };
                                        e.context && (r.context = e.context),
                                          t.push(c.query(r));
                                      }
                                    }),
                                    Promise.all(f ? t : []).then(function () {
                                      c.setQuery(e, function () {
                                        return { document: null };
                                      }),
                                        'ignore' === b &&
                                          p &&
                                          Object(a.k)(p) &&
                                          delete p.errors,
                                        o(p);
                                    });
                                }
                              },
                            });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.fetchQuery = function (e, t, r, n) {
              return Object(i.b)(this, void 0, void 0, function () {
                var o,
                  s,
                  u,
                  c,
                  l,
                  f,
                  h,
                  p,
                  b,
                  v,
                  y,
                  d,
                  m,
                  O,
                  g,
                  j,
                  w,
                  Q,
                  S = this;
                return Object(i.d)(this, function (k) {
                  switch (k.label) {
                    case 0:
                      return (
                        (o = t.metadata),
                        (s = void 0 === o ? null : o),
                        (u = t.fetchPolicy),
                        (c = void 0 === u ? 'cache-first' : u),
                        (l = t.context),
                        (f = void 0 === l ? {} : l),
                        (h = this.transform(t.query).document),
                        (p = this.getVariables(h, t.variables)),
                        this.transform(h).hasClientExports
                          ? [4, this.localState.addExportedVariables(h, p, f)]
                          : [3, 2]
                      );
                    case 1:
                      (p = k.sent()), (k.label = 2);
                    case 2:
                      if (
                        ((t = Object(i.a)(Object(i.a)({}, t), {
                          variables: p,
                        })),
                        (y = v = 'network-only' === c || 'no-cache' === c),
                        v ||
                          ((d = this.dataStore
                            .getCache()
                            .diff({
                              query: h,
                              variables: p,
                              returnPartialData: !0,
                              optimistic: !1,
                            })),
                          (m = d.complete),
                          (O = d.result),
                          (y = !m || 'cache-and-network' === c),
                          (b = O)),
                        (g = y && 'cache-only' !== c && 'standby' !== c),
                        Object(a.m)(['live'], h) && (g = !0),
                        (j = this.idCounter++),
                        (w =
                          'no-cache' !== c
                            ? this.updateQueryWatch(e, h, t)
                            : void 0),
                        this.setQuery(e, function () {
                          return {
                            document: h,
                            lastRequestId: j,
                            invalidated: !0,
                            cancel: w,
                          };
                        }),
                        this.invalidate(n),
                        this.queryStore.initQuery({
                          queryId: e,
                          document: h,
                          storePreviousVariables: g,
                          variables: p,
                          isPoll: r === R.poll,
                          isRefetch: r === R.refetch,
                          metadata: s,
                          fetchMoreForQueryId: n,
                        }),
                        this.broadcastQueries(),
                        g)
                      ) {
                        if (
                          ((Q = this.fetchRequest({
                            requestId: j,
                            queryId: e,
                            document: h,
                            options: t,
                            fetchMoreForQueryId: n,
                          }).catch(function (t) {
                            throw t.hasOwnProperty('graphQLErrors')
                              ? t
                              : (j >= S.getQuery(e).lastRequestId &&
                                  (S.queryStore.markQueryError(e, t, n),
                                  S.invalidate(e),
                                  S.invalidate(n),
                                  S.broadcastQueries()),
                                new E({ networkError: t }));
                          })),
                          'cache-and-network' !== c)
                        )
                          return [2, Q];
                        Q.catch(function () {});
                      }
                      return (
                        this.queryStore.markQueryResultClient(e, !g),
                        this.invalidate(e),
                        this.invalidate(n),
                        this.transform(h).hasForcedResolvers
                          ? [
                              2,
                              this.localState
                                .runResolvers({
                                  document: h,
                                  remoteResult: { data: b },
                                  context: f,
                                  variables: p,
                                  onlyRunForcedResolvers: !0,
                                })
                                .then(function (r) {
                                  return (
                                    S.markQueryResult(e, r, t, n),
                                    S.broadcastQueries(),
                                    r
                                  );
                                }),
                            ]
                          : (this.broadcastQueries(), [2, { data: b }])
                      );
                  }
                });
              });
            }),
            (e.prototype.markQueryResult = function (e, t, r, n) {
              var i = r.fetchPolicy,
                o = r.variables,
                a = r.errorPolicy;
              'no-cache' === i
                ? this.setQuery(e, function () {
                    return { newData: { result: t.data, complete: !0 } };
                  })
                : this.dataStore.markQueryResult(
                    t,
                    this.getQuery(e).document,
                    o,
                    n,
                    'ignore' === a || 'all' === a
                  );
            }),
            (e.prototype.queryListenerForObserver = function (e, t, r) {
              var n = this;
              function i(e, t) {
                if (r[e])
                  try {
                    r[e](t);
                  } catch (n) {}
              }
              return function (r, o) {
                if ((n.invalidate(e, !1), r)) {
                  var a = n.getQuery(e),
                    s = a.observableQuery,
                    u = a.document,
                    c = s ? s.options.fetchPolicy : t.fetchPolicy;
                  if ('standby' !== c) {
                    var l = S(r.networkStatus),
                      f = s && s.getLastResult(),
                      h = !(!f || f.networkStatus === r.networkStatus),
                      p =
                        t.returnPartialData ||
                        (!o && r.previousVariables) ||
                        (h && t.notifyOnNetworkStatusChange) ||
                        'cache-only' === c ||
                        'cache-and-network' === c;
                    if (!l || p) {
                      var b = q(r.graphQLErrors),
                        v =
                          (s && s.options.errorPolicy) ||
                          t.errorPolicy ||
                          'none';
                      if (('none' === v && b) || r.networkError)
                        return i(
                          'error',
                          new E({
                            graphQLErrors: r.graphQLErrors,
                            networkError: r.networkError,
                          })
                        );
                      try {
                        var y = void 0,
                          d = void 0;
                        if (o)
                          'no-cache' !== c &&
                            'network-only' !== c &&
                            n.setQuery(e, function () {
                              return { newData: null };
                            }),
                            (y = o.result),
                            (d = !o.complete);
                        else {
                          var m = s && s.getLastError(),
                            O =
                              'none' !== v &&
                              (m && m.graphQLErrors) !== r.graphQLErrors;
                          if (f && f.data && !O) (y = f.data), (d = !1);
                          else {
                            var g = n.dataStore
                              .getCache()
                              .diff({
                                query: u,
                                variables: r.previousVariables || r.variables,
                                returnPartialData: !0,
                                optimistic: !0,
                              });
                            (y = g.result), (d = !g.complete);
                          }
                        }
                        var j =
                            d && !(t.returnPartialData || 'cache-only' === c),
                          w = {
                            data: j ? f && f.data : y,
                            loading: l,
                            networkStatus: r.networkStatus,
                            stale: j,
                          };
                        'all' === v && b && (w.errors = r.graphQLErrors),
                          i('next', w);
                      } catch (Q) {
                        i('error', new E({ networkError: Q }));
                      }
                    }
                  }
                }
              };
            }),
            (e.prototype.transform = function (e) {
              var t = this.transformCache;
              if (!t.has(e)) {
                var r = this.dataStore.getCache(),
                  n = r.transformDocument(e),
                  i = Object(a.s)(r.transformForLink(n)),
                  o = this.localState.clientQuery(n),
                  s = this.localState.serverQuery(i),
                  u = {
                    document: n,
                    hasClientExports: Object(a.l)(n),
                    hasForcedResolvers: this.localState.shouldForceResolvers(n),
                    clientQuery: o,
                    serverQuery: s,
                    defaultVars: Object(a.f)(Object(a.i)(n)),
                  },
                  c = function (e) {
                    e && !t.has(e) && t.set(e, u);
                  };
                c(e), c(n), c(o), c(s);
              }
              return t.get(e);
            }),
            (e.prototype.getVariables = function (e, t) {
              return Object(i.a)(
                Object(i.a)({}, this.transform(e).defaultVars),
                t
              );
            }),
            (e.prototype.watchQuery = function (e, t) {
              void 0 === t && (t = !0),
                Object(l.b)('standby' !== e.fetchPolicy, 11),
                (e.variables = this.getVariables(e.query, e.variables)),
                'undefined' === typeof e.notifyOnNetworkStatusChange &&
                  (e.notifyOnNetworkStatusChange = !1);
              var r = Object(i.a)({}, e);
              return new x({
                queryManager: this,
                options: r,
                shouldSubscribe: t,
              });
            }),
            (e.prototype.query = function (e) {
              var t = this;
              return (
                Object(l.b)(e.query, 12),
                Object(l.b)('Document' === e.query.kind, 13),
                Object(l.b)(!e.returnPartialData, 14),
                Object(l.b)(!e.pollInterval, 15),
                new Promise(function (r, n) {
                  var i = t.watchQuery(e, !1);
                  t.fetchQueryRejectFns.set('query:' + i.queryId, n),
                    i
                      .result()
                      .then(r, n)
                      .then(function () {
                        return t.fetchQueryRejectFns.delete(
                          'query:' + i.queryId
                        );
                      });
                })
              );
            }),
            (e.prototype.generateQueryId = function () {
              return String(this.idCounter++);
            }),
            (e.prototype.stopQueryInStore = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryInStoreNoBroadcast = function (e) {
              this.stopPollingQuery(e),
                this.queryStore.stopQuery(e),
                this.invalidate(e);
            }),
            (e.prototype.addQueryListener = function (e, t) {
              this.setQuery(e, function (e) {
                return e.listeners.add(t), { invalidated: !1 };
              });
            }),
            (e.prototype.updateQueryWatch = function (e, t, r) {
              var n = this,
                i = this.getQuery(e).cancel;
              i && i();
              return this.dataStore.getCache().watch({
                query: t,
                variables: r.variables,
                optimistic: !0,
                previousResult: function () {
                  var t = null,
                    r = n.getQuery(e).observableQuery;
                  if (r) {
                    var i = r.getLastResult();
                    i && (t = i.data);
                  }
                  return t;
                },
                callback: function (t) {
                  n.setQuery(e, function () {
                    return { invalidated: !0, newData: t };
                  });
                },
              });
            }),
            (e.prototype.addObservableQuery = function (e, t) {
              this.setQuery(e, function () {
                return { observableQuery: t };
              });
            }),
            (e.prototype.removeObservableQuery = function (e) {
              var t = this.getQuery(e).cancel;
              this.setQuery(e, function () {
                return { observableQuery: null };
              }),
                t && t();
            }),
            (e.prototype.clearStore = function () {
              this.fetchQueryRejectFns.forEach(function (e) {
                e(new l.a(16));
              });
              var e = [];
              return (
                this.queries.forEach(function (t, r) {
                  t.observableQuery && e.push(r);
                }),
                this.queryStore.reset(e),
                this.mutationStore.reset(),
                this.dataStore.reset()
              );
            }),
            (e.prototype.resetStore = function () {
              var e = this;
              return this.clearStore().then(function () {
                return e.reFetchObservableQueries();
              });
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = !1);
              var r = [];
              return (
                this.queries.forEach(function (n, i) {
                  var o = n.observableQuery;
                  if (o) {
                    var a = o.options.fetchPolicy;
                    o.resetLastResults(),
                      'cache-only' === a ||
                        (!e && 'standby' === a) ||
                        r.push(o.refetch()),
                      t.setQuery(i, function () {
                        return { newData: null };
                      }),
                      t.invalidate(i);
                  }
                }),
                this.broadcastQueries(),
                Promise.all(r)
              );
            }),
            (e.prototype.observeQuery = function (e, t, r) {
              return (
                this.addQueryListener(
                  e,
                  this.queryListenerForObserver(e, t, r)
                ),
                this.fetchQuery(e, t)
              );
            }),
            (e.prototype.startQuery = function (e, t, r) {
              return (
                this.addQueryListener(e, r),
                this.fetchQuery(e, t).catch(function () {}),
                e
              );
            }),
            (e.prototype.startGraphQLSubscription = function (e) {
              var t = this,
                r = e.query,
                n = e.fetchPolicy,
                i = e.variables;
              (r = this.transform(r).document), (i = this.getVariables(r, i));
              var o = function (e) {
                return t.getObservableFromLink(r, {}, e, !1).map(function (i) {
                  if (
                    ((n && 'no-cache' === n) ||
                      (t.dataStore.markSubscriptionResult(i, r, e),
                      t.broadcastQueries()),
                    Object(a.k)(i))
                  )
                    throw new E({ graphQLErrors: i.errors });
                  return i;
                });
              };
              if (this.transform(r).hasClientExports) {
                var s = this.localState.addExportedVariables(r, i).then(o);
                return new k(function (e) {
                  var t = null;
                  return (
                    s.then(function (r) {
                      return (t = r.subscribe(e));
                    }, e.error),
                    function () {
                      return t && t.unsubscribe();
                    }
                  );
                });
              }
              return o(i);
            }),
            (e.prototype.stopQuery = function (e) {
              this.stopQueryNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryNoBroadcast = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
            }),
            (e.prototype.removeQuery = function (e) {
              this.fetchQueryRejectFns.delete('query:' + e),
                this.fetchQueryRejectFns.delete('fetchRequest:' + e),
                this.getQuery(e).subscriptions.forEach(function (e) {
                  return e.unsubscribe();
                }),
                this.queries.delete(e);
            }),
            (e.prototype.getCurrentQueryResult = function (e, t) {
              void 0 === t && (t = !0);
              var r = e.options,
                n = r.variables,
                i = r.query,
                o = r.fetchPolicy,
                a = r.returnPartialData,
                s = e.getLastResult(),
                u = this.getQuery(e.queryId).newData;
              if (u && u.complete) return { data: u.result, partial: !1 };
              if ('no-cache' === o || 'network-only' === o)
                return { data: void 0, partial: !1 };
              var c = this.dataStore
                  .getCache()
                  .diff({
                    query: i,
                    variables: n,
                    previousResult: s ? s.data : void 0,
                    returnPartialData: !0,
                    optimistic: t,
                  }),
                l = c.result,
                f = c.complete;
              return { data: f || a ? l : void 0, partial: !f };
            }),
            (e.prototype.getQueryWithPreviousResult = function (e) {
              var t;
              if ('string' === typeof e) {
                var r = this.getQuery(e).observableQuery;
                Object(l.b)(r, 17), (t = r);
              } else t = e;
              var n = t.options,
                i = n.variables,
                o = n.query;
              return {
                previousResult: this.getCurrentQueryResult(t, !1).data,
                variables: i,
                document: o,
              };
            }),
            (e.prototype.broadcastQueries = function () {
              var e = this;
              this.onBroadcast(),
                this.queries.forEach(function (t, r) {
                  t.invalidated &&
                    t.listeners.forEach(function (n) {
                      n && n(e.queryStore.get(r), t.newData);
                    });
                });
            }),
            (e.prototype.getLocalState = function () {
              return this.localState;
            }),
            (e.prototype.getObservableFromLink = function (e, t, r, n) {
              var o,
                s = this;
              void 0 === n && (n = this.queryDeduplication);
              var u = this.transform(e).serverQuery;
              if (u) {
                var c = this.inFlightLinkObservables,
                  l = this.link,
                  f = {
                    query: u,
                    variables: r,
                    operationName: Object(a.j)(u) || void 0,
                    context: this.prepareContext(
                      Object(i.a)(Object(i.a)({}, t), { forceFetch: !n })
                    ),
                  };
                if (((t = f.context), n)) {
                  var h = c.get(u) || new Map();
                  c.set(u, h);
                  var p = JSON.stringify(r);
                  if (!(o = h.get(p))) {
                    h.set(p, (o = L(g(l, f))));
                    var b = function () {
                        h.delete(p), h.size || c.delete(u), v.unsubscribe();
                      },
                      v = o.subscribe({ next: b, error: b, complete: b });
                  }
                } else o = L(g(l, f));
              } else (o = k.of({ data: {} })), (t = this.prepareContext(t));
              var y = this.transform(e).clientQuery;
              return (
                y &&
                  (o = (function (e, t) {
                    return new k(function (r) {
                      var n = r.next,
                        i = r.error,
                        o = r.complete,
                        a = 0,
                        s = !1,
                        u = {
                          next: function (e) {
                            ++a,
                              new Promise(function (r) {
                                r(t(e));
                              }).then(
                                function (e) {
                                  --a, n && n.call(r, e), s && u.complete();
                                },
                                function (e) {
                                  --a, i && i.call(r, e);
                                }
                              );
                          },
                          error: function (e) {
                            i && i.call(r, e);
                          },
                          complete: function () {
                            (s = !0), a || (o && o.call(r));
                          },
                        },
                        c = e.subscribe(u);
                      return function () {
                        return c.unsubscribe();
                      };
                    });
                  })(o, function (e) {
                    return s.localState.runResolvers({
                      document: y,
                      remoteResult: e,
                      context: t,
                      variables: r,
                    });
                  })),
                o
              );
            }),
            (e.prototype.fetchRequest = function (e) {
              var t,
                r,
                n = this,
                i = e.requestId,
                o = e.queryId,
                a = e.document,
                s = e.options,
                u = e.fetchMoreForQueryId,
                c = s.variables,
                l = s.errorPolicy,
                f = void 0 === l ? 'none' : l,
                h = s.fetchPolicy;
              return new Promise(function (e, l) {
                var p = n.getObservableFromLink(a, s.context, c),
                  b = 'fetchRequest:' + o;
                n.fetchQueryRejectFns.set(b, l);
                var v = function () {
                    n.fetchQueryRejectFns.delete(b),
                      n.setQuery(o, function (e) {
                        e.subscriptions.delete(y);
                      });
                  },
                  y = p
                    .map(function (e) {
                      if (
                        (i >= n.getQuery(o).lastRequestId &&
                          (n.markQueryResult(o, e, s, u),
                          n.queryStore.markQueryResult(o, e, u),
                          n.invalidate(o),
                          n.invalidate(u),
                          n.broadcastQueries()),
                        'none' === f && q(e.errors))
                      )
                        return l(new E({ graphQLErrors: e.errors }));
                      if (
                        ('all' === f && (r = e.errors), u || 'no-cache' === h)
                      )
                        t = e.data;
                      else {
                        var p = n.dataStore
                            .getCache()
                            .diff({
                              variables: c,
                              query: a,
                              optimistic: !1,
                              returnPartialData: !0,
                            }),
                          b = p.result;
                        (p.complete || s.returnPartialData) && (t = b);
                      }
                    })
                    .subscribe({
                      error: function (e) {
                        v(), l(e);
                      },
                      complete: function () {
                        v(),
                          e({
                            data: t,
                            errors: r,
                            loading: !1,
                            networkStatus: j.ready,
                            stale: !1,
                          });
                      },
                    });
                n.setQuery(o, function (e) {
                  e.subscriptions.add(y);
                });
              });
            }),
            (e.prototype.getQuery = function (e) {
              return (
                this.queries.get(e) || {
                  listeners: new Set(),
                  invalidated: !1,
                  document: null,
                  newData: null,
                  lastRequestId: 1,
                  observableQuery: null,
                  subscriptions: new Set(),
                }
              );
            }),
            (e.prototype.setQuery = function (e, t) {
              var r = this.getQuery(e),
                n = Object(i.a)(Object(i.a)({}, r), t(r));
              this.queries.set(e, n);
            }),
            (e.prototype.invalidate = function (e, t) {
              void 0 === t && (t = !0),
                e &&
                  this.setQuery(e, function () {
                    return { invalidated: t };
                  });
            }),
            (e.prototype.prepareContext = function (e) {
              void 0 === e && (e = {});
              var t = this.localState.prepareContext(e);
              return Object(i.a)(Object(i.a)({}, t), {
                clientAwareness: this.clientAwareness,
              });
            }),
            (e.prototype.checkInFlight = function (e) {
              var t = this.queryStore.get(e);
              return (
                t && t.networkStatus !== j.ready && t.networkStatus !== j.error
              );
            }),
            (e.prototype.startPollingQuery = function (e, t, r) {
              var n = this,
                o = e.pollInterval;
              if ((Object(l.b)(o, 18), !this.ssrMode)) {
                var a = this.pollingInfoByQueryId.get(t);
                a || this.pollingInfoByQueryId.set(t, (a = {})),
                  (a.interval = o),
                  (a.options = Object(i.a)(Object(i.a)({}, e), {
                    fetchPolicy: 'network-only',
                  }));
                var s = function () {
                    var e = n.pollingInfoByQueryId.get(t);
                    e &&
                      (n.checkInFlight(t)
                        ? u()
                        : n.fetchQuery(t, e.options, R.poll).then(u, u));
                  },
                  u = function () {
                    var e = n.pollingInfoByQueryId.get(t);
                    e &&
                      (clearTimeout(e.timeout),
                      (e.timeout = setTimeout(s, e.interval)));
                  };
                r && this.addQueryListener(t, r), u();
              }
              return t;
            }),
            (e.prototype.stopPollingQuery = function (e) {
              this.pollingInfoByQueryId.delete(e);
            }),
            e
          );
        })(),
        V = (function () {
          function e(e) {
            this.cache = e;
          }
          return (
            (e.prototype.getCache = function () {
              return this.cache;
            }),
            (e.prototype.markQueryResult = function (e, t, r, n, i) {
              void 0 === i && (i = !1);
              var o = !Object(a.k)(e);
              i && Object(a.k)(e) && e.data && (o = !0),
                !n &&
                  o &&
                  this.cache.write({
                    result: e.data,
                    dataId: 'ROOT_QUERY',
                    query: t,
                    variables: r,
                  });
            }),
            (e.prototype.markSubscriptionResult = function (e, t, r) {
              Object(a.k)(e) ||
                this.cache.write({
                  result: e.data,
                  dataId: 'ROOT_SUBSCRIPTION',
                  query: t,
                  variables: r,
                });
            }),
            (e.prototype.markMutationInit = function (e) {
              var t,
                r = this;
              e.optimisticResponse &&
                ((t =
                  'function' === typeof e.optimisticResponse
                    ? e.optimisticResponse(e.variables)
                    : e.optimisticResponse),
                this.cache.recordOptimisticTransaction(function (n) {
                  var i = r.cache;
                  r.cache = n;
                  try {
                    r.markMutationResult({
                      mutationId: e.mutationId,
                      result: { data: t },
                      document: e.document,
                      variables: e.variables,
                      updateQueries: e.updateQueries,
                      update: e.update,
                    });
                  } finally {
                    r.cache = i;
                  }
                }, e.mutationId));
            }),
            (e.prototype.markMutationResult = function (e) {
              var t = this;
              if (!Object(a.k)(e.result)) {
                var r = [
                    {
                      result: e.result.data,
                      dataId: 'ROOT_MUTATION',
                      query: e.document,
                      variables: e.variables,
                    },
                  ],
                  n = e.updateQueries;
                n &&
                  Object.keys(n).forEach(function (i) {
                    var o = n[i],
                      s = o.query,
                      u = o.updater,
                      c = t.cache.diff({
                        query: s.document,
                        variables: s.variables,
                        returnPartialData: !0,
                        optimistic: !1,
                      }),
                      l = c.result;
                    if (c.complete) {
                      var f = Object(a.v)(function () {
                        return u(l, {
                          mutationResult: e.result,
                          queryName: Object(a.j)(s.document) || void 0,
                          queryVariables: s.variables,
                        });
                      });
                      f &&
                        r.push({
                          result: f,
                          dataId: 'ROOT_QUERY',
                          query: s.document,
                          variables: s.variables,
                        });
                    }
                  }),
                  this.cache.performTransaction(function (t) {
                    r.forEach(function (e) {
                      return t.write(e);
                    });
                    var n = e.update;
                    n &&
                      Object(a.v)(function () {
                        return n(t, e.result);
                      });
                  });
              }
            }),
            (e.prototype.markMutationComplete = function (e) {
              var t = e.mutationId;
              e.optimisticResponse && this.cache.removeOptimistic(t);
            }),
            (e.prototype.markUpdateQueryResult = function (e, t, r) {
              this.cache.write({
                result: r,
                dataId: 'ROOT_QUERY',
                variables: t,
                query: e,
              });
            }),
            (e.prototype.reset = function () {
              return this.cache.reset();
            }),
            e
          );
        })(),
        N =
          ((function () {
            function e(e) {
              var t = this;
              (this.defaultOptions = {}),
                (this.resetStoreCallbacks = []),
                (this.clearStoreCallbacks = []);
              var r = e.cache,
                n = e.ssrMode,
                i = void 0 !== n && n,
                o = e.ssrForceFetchDelay,
                a = void 0 === o ? 0 : o,
                s = e.connectToDevTools,
                u = e.queryDeduplication,
                c = void 0 === u || u,
                f = e.defaultOptions,
                h = e.assumeImmutableResults,
                p = void 0 !== h && h,
                b = e.resolvers,
                v = e.typeDefs,
                y = e.fragmentMatcher,
                d = e.name,
                m = e.version,
                g = e.link;
              if ((!g && b && (g = O.empty()), !g || !r)) throw new l.a(1);
              (this.link = g),
                (this.cache = r),
                (this.store = new V(r)),
                (this.disableNetworkFetches = i || a > 0),
                (this.queryDeduplication = c),
                (this.defaultOptions = f || {}),
                (this.typeDefs = v),
                a &&
                  setTimeout(function () {
                    return (t.disableNetworkFetches = !1);
                  }, a),
                (this.watchQuery = this.watchQuery.bind(this)),
                (this.query = this.query.bind(this)),
                (this.mutate = this.mutate.bind(this)),
                (this.resetStore = this.resetStore.bind(this)),
                (this.reFetchObservableQueries = this.reFetchObservableQueries.bind(
                  this
                ));
              'undefined' !== typeof s &&
                s &&
                'undefined' !== typeof window &&
                (window.__APOLLO_CLIENT__ = this),
                (this.version = '2.6.8'),
                (this.localState = new F({
                  cache: r,
                  client: this,
                  resolvers: b,
                  fragmentMatcher: y,
                })),
                (this.queryManager = new _({
                  link: this.link,
                  store: this.store,
                  queryDeduplication: c,
                  ssrMode: i,
                  clientAwareness: { name: d, version: m },
                  localState: this.localState,
                  assumeImmutableResults: p,
                  onBroadcast: function () {
                    t.devToolsHookCb &&
                      t.devToolsHookCb({
                        action: {},
                        state: {
                          queries: t.queryManager.queryStore.getStore(),
                          mutations: t.queryManager.mutationStore.getStore(),
                        },
                        dataWithOptimisticResults: t.cache.extract(!0),
                      });
                  },
                }));
            }
            (e.prototype.stop = function () {
              this.queryManager.stop();
            }),
              (e.prototype.watchQuery = function (e) {
                return (
                  this.defaultOptions.watchQuery &&
                    (e = Object(i.a)(
                      Object(i.a)({}, this.defaultOptions.watchQuery),
                      e
                    )),
                  !this.disableNetworkFetches ||
                    ('network-only' !== e.fetchPolicy &&
                      'cache-and-network' !== e.fetchPolicy) ||
                    (e = Object(i.a)(Object(i.a)({}, e), {
                      fetchPolicy: 'cache-first',
                    })),
                  this.queryManager.watchQuery(e)
                );
              }),
              (e.prototype.query = function (e) {
                return (
                  this.defaultOptions.query &&
                    (e = Object(i.a)(
                      Object(i.a)({}, this.defaultOptions.query),
                      e
                    )),
                  Object(l.b)('cache-and-network' !== e.fetchPolicy, 2),
                  this.disableNetworkFetches &&
                    'network-only' === e.fetchPolicy &&
                    (e = Object(i.a)(Object(i.a)({}, e), {
                      fetchPolicy: 'cache-first',
                    })),
                  this.queryManager.query(e)
                );
              }),
              (e.prototype.mutate = function (e) {
                return (
                  this.defaultOptions.mutate &&
                    (e = Object(i.a)(
                      Object(i.a)({}, this.defaultOptions.mutate),
                      e
                    )),
                  this.queryManager.mutate(e)
                );
              }),
              (e.prototype.subscribe = function (e) {
                return this.queryManager.startGraphQLSubscription(e);
              }),
              (e.prototype.readQuery = function (e, t) {
                return void 0 === t && (t = !1), this.cache.readQuery(e, t);
              }),
              (e.prototype.readFragment = function (e, t) {
                return void 0 === t && (t = !1), this.cache.readFragment(e, t);
              }),
              (e.prototype.writeQuery = function (e) {
                var t = this.cache.writeQuery(e);
                return this.queryManager.broadcastQueries(), t;
              }),
              (e.prototype.writeFragment = function (e) {
                var t = this.cache.writeFragment(e);
                return this.queryManager.broadcastQueries(), t;
              }),
              (e.prototype.writeData = function (e) {
                var t = this.cache.writeData(e);
                return this.queryManager.broadcastQueries(), t;
              }),
              (e.prototype.__actionHookForDevTools = function (e) {
                this.devToolsHookCb = e;
              }),
              (e.prototype.__requestRaw = function (e) {
                return g(this.link, e);
              }),
              (e.prototype.initQueryManager = function () {
                return this.queryManager;
              }),
              (e.prototype.resetStore = function () {
                var e = this;
                return Promise.resolve()
                  .then(function () {
                    return e.queryManager.clearStore();
                  })
                  .then(function () {
                    return Promise.all(
                      e.resetStoreCallbacks.map(function (e) {
                        return e();
                      })
                    );
                  })
                  .then(function () {
                    return e.reFetchObservableQueries();
                  });
              }),
              (e.prototype.clearStore = function () {
                var e = this;
                return Promise.resolve()
                  .then(function () {
                    return e.queryManager.clearStore();
                  })
                  .then(function () {
                    return Promise.all(
                      e.clearStoreCallbacks.map(function (e) {
                        return e();
                      })
                    );
                  });
              }),
              (e.prototype.onResetStore = function (e) {
                var t = this;
                return (
                  this.resetStoreCallbacks.push(e),
                  function () {
                    t.resetStoreCallbacks = t.resetStoreCallbacks.filter(
                      function (t) {
                        return t !== e;
                      }
                    );
                  }
                );
              }),
              (e.prototype.onClearStore = function (e) {
                var t = this;
                return (
                  this.clearStoreCallbacks.push(e),
                  function () {
                    t.clearStoreCallbacks = t.clearStoreCallbacks.filter(
                      function (t) {
                        return t !== e;
                      }
                    );
                  }
                );
              }),
              (e.prototype.reFetchObservableQueries = function (e) {
                return this.queryManager.reFetchObservableQueries(e);
              }),
              (e.prototype.extract = function (e) {
                return this.cache.extract(e);
              }),
              (e.prototype.restore = function (e) {
                return this.cache.restore(e);
              }),
              (e.prototype.addResolvers = function (e) {
                this.localState.addResolvers(e);
              }),
              (e.prototype.setResolvers = function (e) {
                this.localState.setResolvers(e);
              }),
              (e.prototype.getResolvers = function () {
                return this.localState.getResolvers();
              }),
              (e.prototype.setLocalStateFragmentMatcher = function (e) {
                this.localState.setFragmentMatcher(e);
              });
          })(),
          (function () {
            function e(e, t) {
              (this.isMounted = !1),
                (this.previousOptions = {}),
                (this.context = {}),
                (this.options = {}),
                (this.options = e || {}),
                (this.context = t || {});
            }
            return (
              (e.prototype.getOptions = function () {
                return this.options;
              }),
              (e.prototype.setOptions = function (e, t) {
                void 0 === t && (t = !1),
                  t &&
                    !Object(s.a)(this.options, e) &&
                    (this.previousOptions = this.options),
                  (this.options = e);
              }),
              (e.prototype.unmount = function () {
                this.isMounted = !1;
              }),
              (e.prototype.refreshClient = function () {
                var e =
                  (this.options && this.options.client) ||
                  (this.context && this.context.client);
                Object(l.b)(!!e, 2);
                var t = !1;
                return (
                  e !== this.client &&
                    ((t = !0), (this.client = e), this.cleanup()),
                  { client: this.client, isNew: t }
                );
              }),
              (e.prototype.verifyDocumentType = function (e, t) {
                var r = Object(n.e)(e);
                Object(n.d)(t), Object(n.d)(r.type);
                Object(l.b)(r.type === t, 3);
              }),
              e
            );
          })()),
        A = (function (e) {
          function t(t) {
            var r = t.options,
              n = t.context,
              i = t.onNewData,
              o = e.call(this, r, n) || this;
            return (
              (o.previousData = {}),
              (o.currentObservable = {}),
              (o.runLazy = !1),
              (o.runLazyQuery = function (e) {
                o.cleanup(),
                  (o.runLazy = !0),
                  (o.lazyOptions = e),
                  o.onNewData();
              }),
              (o.getExecuteResult = function () {
                var e = o.getQueryResult();
                return o.startQuerySubscription(), e;
              }),
              (o.obsRefetch = function (e) {
                return o.currentObservable.query.refetch(e);
              }),
              (o.obsFetchMore = function (e) {
                return o.currentObservable.query.fetchMore(e);
              }),
              (o.obsUpdateQuery = function (e) {
                return o.currentObservable.query.updateQuery(e);
              }),
              (o.obsStartPolling = function (e) {
                o.currentObservable &&
                  o.currentObservable.query &&
                  o.currentObservable.query.startPolling(e);
              }),
              (o.obsStopPolling = function () {
                o.currentObservable &&
                  o.currentObservable.query &&
                  o.currentObservable.query.stopPolling();
              }),
              (o.obsSubscribeToMore = function (e) {
                return o.currentObservable.query.subscribeToMore(e);
              }),
              (o.onNewData = i),
              o
            );
          }
          return (
            Object(i.c)(t, e),
            (t.prototype.execute = function () {
              this.refreshClient();
              var e = this.getOptions(),
                t = e.skip,
                r = e.query;
              return (
                (t || r !== this.previousData.query) &&
                  (this.removeQuerySubscription(),
                  (this.previousData.query = r)),
                this.updateObservableQuery(),
                this.isMounted && this.startQuerySubscription(),
                this.getExecuteSsrResult() || this.getExecuteResult()
              );
            }),
            (t.prototype.executeLazy = function () {
              return this.runLazy
                ? [this.runLazyQuery, this.execute()]
                : [
                    this.runLazyQuery,
                    {
                      loading: !1,
                      networkStatus: j.ready,
                      called: !1,
                      data: void 0,
                    },
                  ];
            }),
            (t.prototype.fetchData = function () {
              var e = this.getOptions();
              if (e.skip || !1 === e.ssr) return !1;
              var t = this.currentObservable.query;
              return !!t.getCurrentResult().loading && t.result();
            }),
            (t.prototype.afterExecute = function (e) {
              var t = this,
                r = (void 0 === e ? {} : e).lazy,
                n = void 0 !== r && r;
              return (
                (this.isMounted = !0),
                (n && !this.runLazy) ||
                  (this.handleErrorOrCompleted(),
                  setTimeout(function () {
                    t.currentObservable.query &&
                      t.currentObservable.query.resetQueryStoreErrors();
                  })),
                (this.previousOptions = this.getOptions()),
                this.unmount.bind(this)
              );
            }),
            (t.prototype.cleanup = function () {
              this.removeQuerySubscription(),
                delete this.currentObservable.query,
                delete this.previousData.result;
            }),
            (t.prototype.getOptions = function () {
              var t = e.prototype.getOptions.call(this);
              return (
                this.lazyOptions &&
                  ((t.variables = Object(i.a)(
                    Object(i.a)({}, t.variables),
                    this.lazyOptions.variables
                  )),
                  (t.context = Object(i.a)(
                    Object(i.a)({}, t.context),
                    this.lazyOptions.context
                  ))),
                this.runLazy && delete t.skip,
                t
              );
            }),
            (t.prototype.ssrInitiated = function () {
              return this.context && this.context.renderPromises;
            }),
            (t.prototype.getExecuteSsrResult = function () {
              var e,
                t = !1 === this.getOptions().ssr,
                r = this.refreshClient().client.disableNetworkFetches,
                n = {
                  loading: !0,
                  networkStatus: j.loading,
                  called: !0,
                  data: void 0,
                };
              return t && (this.ssrInitiated() || r)
                ? n
                : (this.ssrInitiated() &&
                    (e =
                      this.context.renderPromises.addQueryPromise(
                        this,
                        this.getExecuteResult
                      ) || n),
                  e);
            }),
            (t.prototype.prepareObservableQueryOptions = function () {
              var e = this.getOptions();
              this.verifyDocumentType(e.query, n.b.Query);
              var t = e.displayName || 'Query';
              return (
                !this.ssrInitiated() ||
                  ('network-only' !== e.fetchPolicy &&
                    'cache-and-network' !== e.fetchPolicy) ||
                  (e.fetchPolicy = 'cache-first'),
                Object(i.a)(Object(i.a)({}, e), {
                  displayName: t,
                  context: e.context,
                  metadata: { reactComponent: { displayName: t } },
                })
              );
            }),
            (t.prototype.initializeObservableQuery = function () {
              var e, t;
              if (
                (this.ssrInitiated() &&
                  (this.currentObservable.query = this.context.renderPromises.getSSRObservable(
                    this.getOptions()
                  )),
                !this.currentObservable.query)
              ) {
                var r = this.prepareObservableQueryOptions();
                (this.previousData.observableQueryOptions = Object(i.a)(
                  Object(i.a)({}, r),
                  { children: null }
                )),
                  (this.currentObservable.query = this.refreshClient().client.watchQuery(
                    Object(i.a)({}, r)
                  )),
                  this.ssrInitiated() &&
                    (null ===
                      (t =
                        null === (e = this.context) || void 0 === e
                          ? void 0
                          : e.renderPromises) ||
                      void 0 === t ||
                      t.registerSSRObservable(this.currentObservable.query, r));
              }
            }),
            (t.prototype.updateObservableQuery = function () {
              if (this.currentObservable.query) {
                var e = Object(i.a)(
                  Object(i.a)({}, this.prepareObservableQueryOptions()),
                  { children: null }
                );
                Object(s.a)(e, this.previousData.observableQueryOptions) ||
                  ((this.previousData.observableQueryOptions = e),
                  this.currentObservable.query
                    .setOptions(e)
                    .catch(function () {}));
              } else this.initializeObservableQuery();
            }),
            (t.prototype.startQuerySubscription = function () {
              var e = this;
              if (
                !this.currentObservable.subscription &&
                !this.getOptions().skip
              ) {
                var t = this.currentObservable.query;
                this.currentObservable.subscription = t.subscribe({
                  next: function (t) {
                    var r = t.loading,
                      n = t.networkStatus,
                      i = t.data,
                      o = e.previousData.result;
                    (o &&
                      o.loading === r &&
                      o.networkStatus === n &&
                      Object(s.a)(o.data, i)) ||
                      e.onNewData();
                  },
                  error: function (t) {
                    if (
                      (e.resubscribeToQuery(),
                      !t.hasOwnProperty('graphQLErrors'))
                    )
                      throw t;
                    var r = e.previousData.result;
                    ((r && r.loading) ||
                      !Object(s.a)(t, e.previousData.error)) &&
                      ((e.previousData.error = t), e.onNewData());
                  },
                });
              }
            }),
            (t.prototype.resubscribeToQuery = function () {
              this.removeQuerySubscription();
              var e = this.currentObservable.query.getLastError(),
                t = this.currentObservable.query.getLastResult();
              this.currentObservable.query.resetLastResults(),
                this.startQuerySubscription(),
                Object.assign(this.currentObservable.query, {
                  lastError: e,
                  lastResult: t,
                });
            }),
            (t.prototype.getQueryResult = function () {
              var e = this.observableQueryFields(),
                t = this.getOptions();
              if (t.skip)
                e = Object(i.a)(Object(i.a)({}, e), {
                  data: void 0,
                  error: void 0,
                  loading: !1,
                  called: !0,
                });
              else {
                var r = this.currentObservable.query.getCurrentResult(),
                  n = r.loading,
                  o = r.partial,
                  a = r.networkStatus,
                  s = r.errors,
                  u = r.error,
                  c = r.data;
                if (
                  (s && s.length > 0 && (u = new E({ graphQLErrors: s })),
                  (e = Object(i.a)(Object(i.a)({}, e), {
                    loading: n,
                    networkStatus: a,
                    error: u,
                    called: !0,
                  })),
                  n)
                ) {
                  var l =
                    this.previousData.result && this.previousData.result.data;
                  e.data = l && c ? Object(i.a)(Object(i.a)({}, l), c) : l || c;
                } else if (u)
                  Object.assign(e, {
                    data: (this.currentObservable.query.getLastResult() || {})
                      .data,
                  });
                else {
                  var f = this.currentObservable.query.options.fetchPolicy;
                  if (t.partialRefetch && !c && o && 'cache-only' !== f)
                    return (
                      Object.assign(e, {
                        loading: !0,
                        networkStatus: j.loading,
                      }),
                      e.refetch(),
                      e
                    );
                  e.data = c;
                }
              }
              return (
                (e.client = this.client),
                (this.previousData.loading =
                  (this.previousData.result &&
                    this.previousData.result.loading) ||
                  !1),
                (this.previousData.result = e),
                e
              );
            }),
            (t.prototype.handleErrorOrCompleted = function () {
              var e = this.currentObservable.query;
              if (e) {
                var t = e.getCurrentResult(),
                  r = t.data,
                  n = t.loading,
                  i = t.error;
                if (!n) {
                  var o = this.getOptions(),
                    a = o.query,
                    u = o.variables,
                    c = o.onCompleted,
                    l = o.onError;
                  if (
                    this.previousOptions &&
                    !this.previousData.loading &&
                    Object(s.a)(this.previousOptions.query, a) &&
                    Object(s.a)(this.previousOptions.variables, u)
                  )
                    return;
                  c && !i ? c(r) : l && i && l(i);
                }
              }
            }),
            (t.prototype.removeQuerySubscription = function () {
              this.currentObservable.subscription &&
                (this.currentObservable.subscription.unsubscribe(),
                delete this.currentObservable.subscription);
            }),
            (t.prototype.observableQueryFields = function () {
              return {
                variables: this.currentObservable.query.variables,
                refetch: this.obsRefetch,
                fetchMore: this.obsFetchMore,
                updateQuery: this.obsUpdateQuery,
                startPolling: this.obsStartPolling,
                stopPolling: this.obsStopPolling,
                subscribeToMore: this.obsSubscribeToMore,
              };
            }),
            t
          );
        })(N);
      function z(e, t, r) {
        void 0 === r && (r = !1);
        var a = Object(o.useContext)(Object(n.c)()),
          u = Object(o.useReducer)(function (e) {
            return e + 1;
          }, 0),
          c = u[0],
          l = u[1],
          f = t ? Object(i.a)(Object(i.a)({}, t), { query: e }) : { query: e },
          h = Object(o.useRef)(!0),
          p = Object(o.useRef)(!1),
          b = Object(o.useRef)(),
          v =
            b.current ||
            new A({
              options: f,
              context: a,
              onNewData: function () {
                !v.ssrInitiated() && h.current ? (p.current = !0) : l();
              },
            });
        v.setOptions(f),
          (v.context = a),
          v.ssrInitiated() && !b.current && (b.current = v);
        var y = (function (e, t) {
            var r = Object(o.useRef)();
            return (
              (r.current && Object(s.a)(t, r.current.key)) ||
                (r.current = { key: t, value: e() }),
              r.current.value
            );
          })(
            function () {
              return r ? v.executeLazy() : v.execute();
            },
            {
              options: Object(i.a)(Object(i.a)({}, f), {
                onError: void 0,
                onCompleted: void 0,
              }),
              context: a,
              tick: c,
            }
          ),
          d = r ? y[1] : y;
        return (
          Object(o.useEffect)(function () {
            b.current || (b.current = v),
              (h.current = !1),
              p.current && ((p.current = !1), l());
          }),
          Object(o.useEffect)(
            function () {
              return v.afterExecute({ lazy: r });
            },
            [d.loading, d.networkStatus, d.error, d.data]
          ),
          Object(o.useEffect)(function () {
            return function () {
              return v.cleanup();
            };
          }, []),
          y
        );
      }
      function B(e, t) {
        return z(e, t, !1);
      }
      var J = (function (e) {
        function t(t) {
          var r = t.options,
            i = t.context,
            o = t.result,
            a = t.setResult,
            s = e.call(this, r, i) || this;
          return (
            (s.runMutation = function (e) {
              void 0 === e && (e = {}), s.onMutationStart();
              var t = s.generateNewMutationId();
              return s
                .mutate(e)
                .then(function (e) {
                  return s.onMutationCompleted(e, t), e;
                })
                .catch(function (e) {
                  if ((s.onMutationError(e, t), !s.getOptions().onError))
                    throw e;
                });
            }),
            s.verifyDocumentType(r.mutation, n.b.Mutation),
            (s.result = o),
            (s.setResult = a),
            (s.mostRecentMutationId = 0),
            s
          );
        }
        return (
          Object(i.c)(t, e),
          (t.prototype.execute = function (e) {
            return (
              (this.isMounted = !0),
              this.verifyDocumentType(this.getOptions().mutation, n.b.Mutation),
              (e.client = this.refreshClient().client),
              [this.runMutation, e]
            );
          }),
          (t.prototype.afterExecute = function () {
            return (this.isMounted = !0), this.unmount.bind(this);
          }),
          (t.prototype.cleanup = function () {}),
          (t.prototype.mutate = function (e) {
            var t = this.getOptions(),
              r = t.mutation,
              n = t.variables,
              o = t.optimisticResponse,
              a = t.update,
              s = t.context,
              u = void 0 === s ? {} : s,
              c = t.awaitRefetchQueries,
              l = void 0 !== c && c,
              f = t.fetchPolicy,
              h = Object(i.a)({}, e),
              p = Object.assign({}, n, h.variables);
            return (
              delete h.variables,
              this.refreshClient().client.mutate(
                Object(i.a)(
                  {
                    mutation: r,
                    optimisticResponse: o,
                    refetchQueries:
                      h.refetchQueries || this.getOptions().refetchQueries,
                    awaitRefetchQueries: l,
                    update: a,
                    context: u,
                    fetchPolicy: f,
                    variables: p,
                  },
                  h
                )
              )
            );
          }),
          (t.prototype.onMutationStart = function () {
            this.result.loading ||
              this.getOptions().ignoreResults ||
              this.updateResult({
                loading: !0,
                error: void 0,
                data: void 0,
                called: !0,
              });
          }),
          (t.prototype.onMutationCompleted = function (e, t) {
            var r = this.getOptions(),
              n = r.onCompleted,
              i = r.ignoreResults,
              o = e.data,
              a = e.errors,
              s = a && a.length > 0 ? new E({ graphQLErrors: a }) : void 0;
            this.isMostRecentMutation(t) &&
              !i &&
              this.updateResult({ called: !0, loading: !1, data: o, error: s }),
              n && n(o);
          }),
          (t.prototype.onMutationError = function (e, t) {
            var r = this.getOptions().onError;
            this.isMostRecentMutation(t) &&
              this.updateResult({
                loading: !1,
                error: e,
                data: void 0,
                called: !0,
              }),
              r && r(e);
          }),
          (t.prototype.generateNewMutationId = function () {
            return ++this.mostRecentMutationId;
          }),
          (t.prototype.isMostRecentMutation = function (e) {
            return this.mostRecentMutationId === e;
          }),
          (t.prototype.updateResult = function (e) {
            !this.isMounted ||
              (this.previousResult && Object(s.a)(this.previousResult, e)) ||
              (this.setResult(e), (this.previousResult = e));
          }),
          t
        );
      })(N);
      function U(e, t) {
        var r = Object(o.useContext)(Object(n.c)()),
          a = Object(o.useState)({ called: !1, loading: !1 }),
          s = a[0],
          u = a[1],
          c = t
            ? Object(i.a)(Object(i.a)({}, t), { mutation: e })
            : { mutation: e },
          l = Object(o.useRef)();
        var f =
          (l.current ||
            (l.current = new J({
              options: c,
              context: r,
              result: s,
              setResult: u,
            })),
          l.current);
        return (
          f.setOptions(c),
          (f.context = r),
          Object(o.useEffect)(function () {
            return f.afterExecute();
          }),
          f.execute(s)
        );
      }
      !(function (e) {
        function t(t) {
          var r = t.options,
            n = t.context,
            i = t.setResult,
            o = e.call(this, r, n) || this;
          return (
            (o.currentObservable = {}), (o.setResult = i), o.initialize(r), o
          );
        }
        Object(i.c)(t, e),
          (t.prototype.execute = function (e) {
            if (!0 === this.getOptions().skip)
              return (
                this.cleanup(),
                {
                  loading: !1,
                  error: void 0,
                  data: void 0,
                  variables: this.getOptions().variables,
                }
              );
            var t = e;
            this.refreshClient().isNew && (t = this.getLoadingResult());
            var r = this.getOptions().shouldResubscribe;
            return (
              'function' === typeof r && (r = !!r(this.getOptions())),
              !1 !== r &&
                this.previousOptions &&
                Object.keys(this.previousOptions).length > 0 &&
                (this.previousOptions.subscription !==
                  this.getOptions().subscription ||
                  !Object(s.a)(
                    this.previousOptions.variables,
                    this.getOptions().variables
                  ) ||
                  this.previousOptions.skip !== this.getOptions().skip) &&
                (this.cleanup(), (t = this.getLoadingResult())),
              this.initialize(this.getOptions()),
              this.startSubscription(),
              (this.previousOptions = this.getOptions()),
              Object(i.a)(Object(i.a)({}, t), {
                variables: this.getOptions().variables,
              })
            );
          }),
          (t.prototype.afterExecute = function () {
            this.isMounted = !0;
          }),
          (t.prototype.cleanup = function () {
            this.endSubscription(), delete this.currentObservable.query;
          }),
          (t.prototype.initialize = function (e) {
            this.currentObservable.query ||
              !0 === this.getOptions().skip ||
              (this.currentObservable.query = this.refreshClient().client.subscribe(
                {
                  query: e.subscription,
                  variables: e.variables,
                  fetchPolicy: e.fetchPolicy,
                }
              ));
          }),
          (t.prototype.startSubscription = function () {
            this.currentObservable.subscription ||
              (this.currentObservable.subscription = this.currentObservable.query.subscribe(
                {
                  next: this.updateCurrentData.bind(this),
                  error: this.updateError.bind(this),
                  complete: this.completeSubscription.bind(this),
                }
              ));
          }),
          (t.prototype.getLoadingResult = function () {
            return { loading: !0, error: void 0, data: void 0 };
          }),
          (t.prototype.updateResult = function (e) {
            this.isMounted && this.setResult(e);
          }),
          (t.prototype.updateCurrentData = function (e) {
            var t = this.getOptions().onSubscriptionData;
            this.updateResult({ data: e.data, loading: !1, error: void 0 }),
              t &&
                t({ client: this.refreshClient().client, subscriptionData: e });
          }),
          (t.prototype.updateError = function (e) {
            this.updateResult({ error: e, loading: !1 });
          }),
          (t.prototype.completeSubscription = function () {
            var e = this.getOptions().onSubscriptionComplete;
            e && e(), this.endSubscription();
          }),
          (t.prototype.endSubscription = function () {
            this.currentObservable.subscription &&
              (this.currentObservable.subscription.unsubscribe(),
              delete this.currentObservable.subscription);
          });
      })(N);
      var W = (function () {
        function e() {
          (this.queryPromises = new Map()), (this.queryInfoTrie = new Map());
        }
        return (
          (e.prototype.registerSSRObservable = function (e, t) {
            this.lookupQueryInfo(t).observable = e;
          }),
          (e.prototype.getSSRObservable = function (e) {
            return this.lookupQueryInfo(e).observable;
          }),
          (e.prototype.addQueryPromise = function (e, t) {
            return this.lookupQueryInfo(e.getOptions()).seen
              ? t()
              : (this.queryPromises.set(
                  e.getOptions(),
                  new Promise(function (t) {
                    t(e.fetchData());
                  })
                ),
                null);
          }),
          (e.prototype.hasPromises = function () {
            return this.queryPromises.size > 0;
          }),
          (e.prototype.consumeAndAwaitPromises = function () {
            var e = this,
              t = [];
            return (
              this.queryPromises.forEach(function (r, n) {
                (e.lookupQueryInfo(n).seen = !0), t.push(r);
              }),
              this.queryPromises.clear(),
              Promise.all(t)
            );
          }),
          (e.prototype.lookupQueryInfo = function (e) {
            var t = this.queryInfoTrie,
              r = e.query,
              n = e.variables,
              i = t.get(r) || new Map();
            t.has(r) || t.set(r, i);
            var o = JSON.stringify(n),
              a = i.get(o) || { seen: !1, observable: null };
            return i.has(o) || i.set(o, a), a;
          }),
          e
        );
      })();
    },
  },
]);
