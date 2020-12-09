_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [36],
  {
    '1OyB': function (e, t, n) {
      'use strict';
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    '24R3': function (e, t, n) {
      'use strict';
      var o = n('q1tI'),
        r = n('zSVi'),
        i = n('LiQ7'),
        a = n('MyaD'),
        l = n('6koa'),
        c = n.n(l),
        s = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(t, n);
          };
          return function (t, n) {
            function o() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((o.prototype = n.prototype), new o()));
          };
        })(),
        u = function () {
          return (u =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        d = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        f = function () {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var o = Array(e),
            r = 0;
          for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, l = i.length; a < l; a++, r++)
              o[r] = i[a];
          return o;
        },
        p = c.a || l;
      function m(e, t) {
        return Object(i.a)(
          u(u({}, a.a), { locale: 'en' }),
          Object(a.b)(),
          e,
          t
        );
      }
      var h = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          s(t, e),
          (t.prototype.shouldComponentUpdate = function (e) {
            var t = this.props,
              n = t.values,
              o = d(t, ['values']),
              r = e.values,
              i = d(e, ['values']);
            return !p(r, n) || !p(o, i);
          }),
          (t.prototype.render = function () {
            var e = this;
            return o.createElement(r.a.Consumer, null, function (t) {
              e.props.defaultMessage || Object(a.f)(t);
              var n = t || {},
                r = n.formatMessage,
                i = void 0 === r ? m : r,
                l = n.textComponent,
                c = void 0 === l ? o.Fragment : l,
                s = e.props,
                u = s.id,
                d = s.description,
                p = s.defaultMessage,
                h = s.values,
                y = s.children,
                b = s.tagName,
                g = void 0 === b ? c : b,
                v = i({ id: u, description: d, defaultMessage: p }, h);
              return (
                Array.isArray(v) || (v = [v]),
                'function' === typeof y
                  ? y.apply(void 0, v)
                  : g
                  ? o.createElement.apply(o, f([g, null], v))
                  : v
              );
            });
          }),
          (t.displayName = 'FormattedMessage'),
          t
        );
      })(o.Component);
      t.a = h;
    },
    '3EIr': function (e, t, n) {
      'use strict';
      n.r(t);
      var o = n('1OyB'),
        r = n('vuIU'),
        i = n('Ji7U'),
        a = n('md7G'),
        l = n('foSv'),
        c = n('q1tI'),
        s = n.n(c),
        u = n('ddIo'),
        d = n('YFqc'),
        f = n.n(d),
        p = n('vOnD'),
        m = n('bC0J'),
        h = p.e.div.withConfig({
          displayName: 'OrderReceivedstyle__OrderRecivedWrapper',
          componentId: 'sc-1c48wfp-0',
        })(
          [
            'background-color:',
            ';position:relative;padding:100px 0 60px 0;min-height:100vh;',
          ],
          Object(m.a)('colors.lightColor', '#F7F7F7')
        ),
        y = p.e.div.withConfig({
          displayName: 'OrderReceivedstyle__OrderRecivedContainer',
          componentId: 'sc-1c48wfp-1',
        })(
          [
            'background-color:#fff;border:1px solid ',
            ";padding:60px;border-radius:6px;overflow:hidden;position:relative;width:calc(100% - 30px);margin-left:auto;margin-right:auto;@media (min-width:991px){width:870px;}@media (max-width:990px){padding:50px 45px;}@media (max-width:767px){padding:50px 25px;}.home-btn{display:inline-flex;align-items:center;justify-content:center;font-family:'Lato',sans-serif;font-size:",
            'px;font-weight:',
            ';color:',
            ';padding:5px 15px;height:36px;border:1px solid #e6e6e6;border-radius:6px;position:absolute;top:15px;right:15px;transition:0.15s ease-in-out;@media (max-width:767px){font-size:13px;height:34px;padding:5px 12px;}&:hover{background-color:',
            ';border-color:',
            ';color:#fff;}}',
          ],
          Object(m.a)('colors.borderColor', '#f1f1f1'),
          Object(m.a)('fontSizes.2', '15'),
          Object(m.a)('fontWeights.3', '400'),
          Object(m.a)('colors.darkRegular', '#77798c'),
          Object(m.a)('colors.primary', '#009E7F'),
          Object(m.a)('colors.primary', '#009E7F')
        ),
        b = p.e.div.withConfig({
          displayName: 'OrderReceivedstyle__OrderInfo',
          componentId: 'sc-1c48wfp-2',
        })([
          'margin-bottom:60px;@media (max-width:767px){margin-bottom:30px;}',
        ]),
        g = p.e.div.withConfig({
          displayName: 'OrderReceivedstyle__OrderDetails',
          componentId: 'sc-1c48wfp-3',
        })([
          'margin-bottom:60px;@media (max-width:767px){margin-bottom:50px;}',
        ]),
        v = p.e.div.withConfig({
          displayName: 'OrderReceivedstyle__TotalAmount',
          componentId: 'sc-1c48wfp-4',
        })(['']),
        x = p.e.h2.withConfig({
          displayName: 'OrderReceivedstyle__BlockTitle',
          componentId: 'sc-1c48wfp-5',
        })(
          [
            "font-family:'Poppins',sans-serif;font-size:",
            'px;font-weight:',
            ';color:',
            ';line-height:1;margin-bottom:32px;@media (max-width:767px){font-size:16px;margin-bottom:25px;}',
          ],
          Object(m.a)('fontSizes.4', '21'),
          Object(m.a)('fontWeights.6', '700'),
          Object(m.a)('colors.darkBold', '#0D1136')
        ),
        w = p.e.p.withConfig({
          displayName: 'OrderReceivedstyle__Text',
          componentId: 'sc-1c48wfp-6',
        })(
          [
            "font-family:'Lato',sans-serif;font-size:",
            'px;color:',
            ';font-weight:',
            ';line-height:1.2;display:block;margin:0;&:last-child{color:',
            ';}',
          ],
          Object(m.a)('fontSizes.2', '15'),
          Object(m.a)('colors.darkBold', '#0D1136'),
          function (e) {
            return e.bold ? '700' : '400';
          },
          Object(m.a)('colors.darkMedium', '#424561')
        ),
        O = p.e.div.withConfig({
          displayName: 'OrderReceivedstyle__InfoBlockWrapper',
          componentId: 'sc-1c48wfp-7',
        })([
          'display:flex;align-items:center;justify-content:space-between;margin-top:30px;@media (max-width:767px){flex-wrap:wrap;}',
        ]),
        _ = p.e.div.withConfig({
          displayName: 'OrderReceivedstyle__InfoBlock',
          componentId: 'sc-1c48wfp-8',
        })(
          [
            'flex-grow:1;padding:0 15px;border-left:1px solid ',
            ';@media (max-width:767px){max-width:100%;flex:0 0 100%;margin-bottom:20px;padding:0;border:0;}&:first-child{padding-left:0;border-left:0;}&:last-child{padding-right:0;}.title{margin-bottom:10px;}',
          ],
          Object(m.a)('colors.borderColor', '#f1f1f1')
        ),
        j = p.e.div.withConfig({
          displayName: 'OrderReceivedstyle__ListItem',
          componentId: 'sc-1c48wfp-9',
        })(['display:flex;margin-bottom:20px;&:last-child{margin-bottom:0;}']),
        M = p.e.div.withConfig({
          displayName: 'OrderReceivedstyle__ListTitle',
          componentId: 'sc-1c48wfp-10',
        })([
          "flex-basis:210px;max-width:210px;flex-shrink:0;position:relative;@media (max-width:767px){flex-basis:105px;max-width:105px;}&:after{content:':';position:absolute;top:-1px;right:-2px;line-height:1;}",
        ]),
        T = p.e.div.withConfig({
          displayName: 'OrderReceivedstyle__ListDes',
          componentId: 'sc-1c48wfp-11',
        })(['padding-left:90px;@media (max-width:767px){padding-left:20px;}']),
        R = h,
        C = n('24R3'),
        I = s.a.createElement,
        N = function (e) {
          return I(
            R,
            null,
            I(
              y,
              null,
              I(
                f.a,
                { href: '/' },
                I(
                  'a',
                  { className: 'home-btn' },
                  I(C.a, { id: 'backHomeBtn', defaultMessage: 'Back to Home' })
                )
              ),
              I(
                b,
                null,
                I(
                  x,
                  null,
                  I(C.a, {
                    id: 'orderReceivedText',
                    defaultMessage: 'Order Received',
                  })
                ),
                I(
                  w,
                  null,
                  I(C.a, {
                    id: 'orderReceivedSuccess',
                    defaultMessage: 'Thank you. Your order has been received',
                  })
                ),
                I(
                  O,
                  null,
                  I(
                    _,
                    null,
                    I(
                      w,
                      { bold: !0, className: 'title' },
                      I(C.a, {
                        id: 'orderNumberText',
                        defaultMessage: 'Order Number',
                      })
                    ),
                    I(w, null, '1444')
                  ),
                  I(
                    _,
                    null,
                    I(
                      w,
                      { bold: !0, className: 'title' },
                      I(C.a, { id: 'orderDateText', defaultMessage: 'Date' })
                    ),
                    I(w, null, 'March 14, 2019')
                  ),
                  I(
                    _,
                    null,
                    I(
                      w,
                      { bold: !0, className: 'title' },
                      I(C.a, { id: 'totalText', defaultMessage: 'Total' })
                    ),
                    I(w, null, '$10,944.00')
                  ),
                  I(
                    _,
                    null,
                    I(
                      w,
                      { bold: !0, className: 'title' },
                      I(C.a, {
                        id: 'paymenMethodText',
                        defaultMessage: 'Payment Method',
                      })
                    ),
                    I(
                      w,
                      null,
                      I(C.a, {
                        id: 'paymentMethodName',
                        defaultMessage: 'Cash on delivery',
                      })
                    )
                  )
                )
              ),
              I(
                g,
                null,
                I(
                  x,
                  null,
                  I(C.a, {
                    id: 'orderDetailsText',
                    defaultMessage: 'Order Details',
                  })
                ),
                I(
                  j,
                  null,
                  I(
                    M,
                    null,
                    I(
                      w,
                      { bold: !0 },
                      I(C.a, {
                        id: 'totalItemText',
                        defaultMessage: 'Total Item',
                      })
                    )
                  ),
                  I(T, null, I(w, null, '6 Items'))
                ),
                I(
                  j,
                  null,
                  I(
                    M,
                    null,
                    I(
                      w,
                      { bold: !0 },
                      I(C.a, {
                        id: 'orderTimeText',
                        defaultMessage: 'Order Time',
                      })
                    )
                  ),
                  I(T, null, I(w, null, '1.00pm 10/12/19'))
                ),
                I(
                  j,
                  null,
                  I(
                    M,
                    null,
                    I(
                      w,
                      { bold: !0 },
                      I(C.a, {
                        id: 'deliveryTimeText',
                        defaultMessage: 'Delivery Time',
                      })
                    )
                  ),
                  I(T, null, I(w, null, '90 Minute Express Delivery'))
                ),
                I(
                  j,
                  null,
                  I(
                    M,
                    null,
                    I(
                      w,
                      { bold: !0 },
                      I(C.a, {
                        id: 'deliveryLocationText',
                        defaultMessage: 'Delivery Location',
                      })
                    )
                  ),
                  I(
                    T,
                    null,
                    I(
                      w,
                      null,
                      '1st Floor, House 149, Road-22, Mohakhali DOHS, Dhaka - North'
                    )
                  )
                )
              ),
              I(
                v,
                null,
                I(
                  x,
                  null,
                  I(C.a, {
                    id: 'totalAmountText',
                    defaultMessage: 'Total Amount',
                  })
                ),
                I(
                  j,
                  null,
                  I(
                    M,
                    null,
                    I(
                      w,
                      { bold: !0 },
                      I(C.a, { id: 'subTotal', defaultMessage: 'Sub total' })
                    )
                  ),
                  I(T, null, I(w, null, '$10,864.00'))
                ),
                I(
                  j,
                  null,
                  I(
                    M,
                    null,
                    I(
                      w,
                      { bold: !0 },
                      I(C.a, {
                        id: 'paymenMethodText',
                        defaultMessage: 'Payment Method',
                      })
                    )
                  ),
                  I(T, null, I(w, null, 'Cash On Delivery'))
                ),
                I(
                  j,
                  null,
                  I(
                    M,
                    null,
                    I(
                      w,
                      { bold: !0 },
                      I(C.a, {
                        id: 'paymentMethodName',
                        defaultMessage: 'Delivery Charge',
                      })
                    )
                  ),
                  I(T, null, I(w, null, '10'))
                ),
                I(
                  j,
                  null,
                  I(
                    M,
                    null,
                    I(
                      w,
                      { bold: !0 },
                      I(C.a, { id: 'totalText', defaultMessage: 'Total' })
                    )
                  ),
                  I(T, null, I(w, null, '$10,874.00'))
                )
              )
            )
          );
        },
        E = n('ZNCQ'),
        k = s.a.createElement;
      function D(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = Object(l.a)(e);
          if (t) {
            var r = Object(l.a)(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return Object(a.a)(this, n);
        };
      }
      var P = (function (e) {
        Object(i.a)(n, e);
        var t = D(n);
        function n() {
          return Object(o.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(r.a)(n, [
            {
              key: 'render',
              value: function () {
                return k(
                  s.a.Fragment,
                  null,
                  k(u.a, {
                    title: 'Invoice - PickBazar',
                    description: 'Invoice Details',
                  }),
                  k(N, null)
                );
              },
            },
          ]),
          n
        );
      })(s.a.Component);
      t.default = Object(E.a)(P);
    },
    Ji7U: function (e, t, n) {
      'use strict';
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function r(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && o(e, t);
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    U8pU: function (e, t, n) {
      'use strict';
      function o(e) {
        return (o =
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
      n.d(t, 'a', function () {
        return o;
      });
    },
    YFqc: function (e, t, n) {
      e.exports = n('cTJO');
    },
    bnVM: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/order-received',
        function () {
          return n('3EIr');
        },
      ]);
    },
    cTJO: function (e, t, n) {
      'use strict';
      var o = n('zoAU'),
        r = n('7KCV');
      (t.__esModule = !0), (t.default = void 0);
      var i,
        a = r(n('q1tI')),
        l = n('elyg'),
        c = n('nOHt'),
        s = new Map(),
        u = window.IntersectionObserver,
        d = {};
      var f = function (e, t) {
        var n =
          i ||
          (u
            ? (i = new u(
                function (e) {
                  e.forEach(function (e) {
                    if (s.has(e.target)) {
                      var t = s.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (i.unobserve(e.target), s.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: '200px' }
              ))
            : void 0);
        return n
          ? (n.observe(e),
            s.set(e, t),
            function () {
              try {
                n.unobserve(e);
              } catch (t) {
                console.error(t);
              }
              s.delete(e);
            })
          : function () {};
      };
      function p(e, t, n, o) {
        (0, l.isLocalURL)(t) &&
          (e.prefetch(t, n, o).catch(function (e) {
            0;
          }),
          (d[t + '%' + n] = !0));
      }
      var m = function (e) {
        var t = !1 !== e.prefetch,
          n = a.default.useState(),
          r = o(n, 2),
          i = r[0],
          s = r[1],
          m = (0, c.useRouter)(),
          h = (m && m.pathname) || '/',
          y = a.default.useMemo(
            function () {
              var t = (0, l.resolveHref)(h, e.href, !0),
                n = o(t, 2),
                r = n[0],
                i = n[1];
              return {
                href: r,
                as: e.as ? (0, l.resolveHref)(h, e.as) : i || r,
              };
            },
            [h, e.href, e.as]
          ),
          b = y.href,
          g = y.as;
        a.default.useEffect(
          function () {
            if (
              t &&
              u &&
              i &&
              i.tagName &&
              (0, l.isLocalURL)(b) &&
              !d[b + '%' + g]
            )
              return f(i, function () {
                p(m, b, g);
              });
          },
          [t, i, b, g, m]
        );
        var v = e.children,
          x = e.replace,
          w = e.shallow,
          O = e.scroll;
        'string' === typeof v && (v = a.default.createElement('a', null, v));
        var _ = a.Children.only(v),
          j = {
            ref: function (e) {
              e && s(e),
                _ &&
                  'object' === typeof _ &&
                  _.ref &&
                  ('function' === typeof _.ref
                    ? _.ref(e)
                    : 'object' === typeof _.ref && (_.ref.current = e));
            },
            onClick: function (e) {
              _.props &&
                'function' === typeof _.props.onClick &&
                _.props.onClick(e),
                e.defaultPrevented ||
                  (function (e, t, n, o, r, i, a) {
                    ('A' !== e.currentTarget.nodeName ||
                      (!(function (e) {
                        var t = e.currentTarget.target;
                        return (
                          (t && '_self' !== t) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) &&
                        (0, l.isLocalURL)(n))) &&
                      (e.preventDefault(),
                      null == a && (a = o.indexOf('#') < 0),
                      t[r ? 'replace' : 'push'](n, o, { shallow: i }).then(
                        function (e) {
                          e &&
                            a &&
                            (window.scrollTo(0, 0), document.body.focus());
                        }
                      ));
                  })(e, m, b, g, x, w, O);
            },
          };
        return (
          t &&
            (j.onMouseEnter = function (e) {
              (0, l.isLocalURL)(b) &&
                (_.props &&
                  'function' === typeof _.props.onMouseEnter &&
                  _.props.onMouseEnter(e),
                p(m, b, g, { priority: !0 }));
            }),
          (e.passHref || ('a' === _.type && !('href' in _.props))) &&
            (j.href = (0, l.addBasePath)(
              (0, l.addLocale)(g, m && m.locale, m && m.defaultLocale)
            )),
          a.default.cloneElement(_, j)
        );
      };
      t.default = m;
    },
    foSv: function (e, t, n) {
      'use strict';
      function o(e) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    md7G: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return r;
      });
      var o = n('U8pU');
      function r(e, t) {
        return !t || ('object' !== Object(o.a)(t) && 'function' !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
    },
    vuIU: function (e, t, n) {
      'use strict';
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function r(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
  },
  [['bnVM', 1, 0, 2, 3, 6]],
]);
