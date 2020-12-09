_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [31],
  {
    '/0+H': function (e, t, n) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(r.default.useContext(a.AmpStateContext));
        });
      var o,
        r = (o = n('q1tI')) && o.__esModule ? o : { default: o },
        a = n('lwAK');
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          o = e.hybrid,
          r = void 0 !== o && o,
          a = e.hasQuery,
          i = void 0 !== a && a;
        return n || (r && i);
      }
    },
    '/GRZ': function (e, t) {
      e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      };
    },
    '48fX': function (e, t, n) {
      var o = n('qhzo');
      e.exports = function (e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && o(e, t);
      };
    },
    '5fIB': function (e, t, n) {
      var o = n('7eYB');
      e.exports = function (e) {
        if (Array.isArray(e)) return o(e);
      };
    },
    '7eYB': function (e, t) {
      e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      };
    },
    '8Kt/': function (e, t, n) {
      'use strict';
      n('oI91');
      (t.__esModule = !0), (t.defaultHead = u), (t.default = void 0);
      var o,
        r = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, r) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, r, a)
                : (n[r] = e[r]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n('q1tI')),
        a = (o = n('Xuae')) && o.__esModule ? o : { default: o },
        i = n('lwAK'),
        c = n('FYa8'),
        s = n('/0+H');
      function l() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [r.default.createElement('meta', { charSet: 'utf-8' })];
        return (
          e ||
            t.push(
              r.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          t
        );
      }
      function p(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === r.default.Fragment
          ? e.concat(
              r.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return 'string' === typeof t || 'number' === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var d = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function f(e, t) {
        return e
          .reduce(function (e, t) {
            var n = r.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(p, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                o = {};
              return function (r) {
                var a = !0;
                if (
                  r.key &&
                  'number' !== typeof r.key &&
                  r.key.indexOf('$') > 0
                ) {
                  var i = r.key.slice(r.key.indexOf('$') + 1);
                  e.has(i) ? (a = !1) : e.add(i);
                }
                switch (r.type) {
                  case 'title':
                  case 'base':
                    t.has(r.type) ? (a = !1) : t.add(r.type);
                    break;
                  case 'meta':
                    for (var c = 0, s = d.length; c < s; c++) {
                      var l = d[c];
                      if (r.props.hasOwnProperty(l))
                        if ('charSet' === l) n.has(l) ? (a = !1) : n.add(l);
                        else {
                          var u = r.props[l],
                            p = o[l] || new Set();
                          p.has(u) ? (a = !1) : (p.add(u), (o[l] = p));
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return r.default.cloneElement(e, { key: n });
          });
      }
      function m(e) {
        var t = e.children,
          n = (0, r.useContext)(i.AmpStateContext),
          o = (0, r.useContext)(c.HeadManagerContext);
        return r.default.createElement(
          a.default,
          {
            reduceComponentsToState: f,
            headManager: o,
            inAmpMode: (0, s.isInAmpMode)(n),
          },
          t
        );
      }
      m.rewind = function () {};
      var h = m;
      t.default = h;
    },
    'C+bE': function (e, t) {
      function n(t) {
        return (
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? (e.exports = n = function (e) {
                return typeof e;
              })
            : (e.exports = n = function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    FYa8: function (e, t, n) {
      'use strict';
      var o;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var r = ((o = n('q1tI')) && o.__esModule
        ? o
        : { default: o }
      ).default.createContext({});
      t.HeadManagerContext = r;
    },
    KckH: function (e, t, n) {
      var o = n('7eYB');
      e.exports = function (e, t) {
        if (e) {
          if ('string' === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      };
    },
    Qetd: function (e, t, n) {
      'use strict';
      var o = Object.assign.bind(Object);
      (e.exports = o), (e.exports.default = e.exports);
    },
    T0f4: function (e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    UyBh: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'HelpPageContainer', function () {
          return x;
        });
      var o = n('q1tI'),
        r = n.n(o),
        a = n('vOnD'),
        i = n('Bo8V'),
        c = n('ddIo'),
        s = n('jtiA'),
        l = n('E1MH'),
        u = n('bC0J'),
        p = a.e.div.withConfig({
          displayName: 'Accordionstyle__AccordionWrapper',
          componentId: 'tnzpnt-0',
        })(
          [
            '.rc-collapse{background-color:transparent;border-radius:0;border:0;> .rc-collapse-item{margin-bottom:5px;border-width:1px;border-style:solid;border-color:',
            ';border-image:initial;border-radius:6px;background-color:#ffffff;overflow:hidden;> .rc-collapse-header{display:flex;align-items:center;padding:23px 30px;padding-right:25px;cursor:pointer;outline:0;position:relative;justify-content:space-between;i{order:2;width:22px;height:22px;flex-shrink:0;color:',
            ";display:flex;align-items:center;justify-content:center;}h3{margin-top:0px;margin-bottom:0px;font-family:'Lato',sans-serif;font-size:",
            'px;font-weight:',
            ';color:',
            ";line-height:1.5;}}.rc-collapse-content{padding:0px;> .rc-collapse-content-box{box-sizing:border-box;margin-top:0px;margin-bottom:0px;padding:0px 30px 23px;p{font-family:'Lato',sans-serif;font-size:",
            'px;font-weight:',
            ';color:',
            ';line-height:1.75;}}}}}',
          ],
          Object(u.a)('colors.borderColor', '#f1f1f1'),
          Object(u.a)('colors.darkBold', '#0D1136'),
          Object(u.a)('fontSizes.2', '15'),
          Object(u.a)('fontWeights.6', '700'),
          Object(u.a)('colors.darkBold', '#0D1136'),
          Object(u.a)('fontSizes.2', '15'),
          Object(u.a)('fontWeights.3', '400'),
          Object(u.a)('colors.darkRegular', '#77798C')
        ),
        d = n('24R3'),
        f = r.a.createElement;
      function m(e) {
        var t = e.isActive;
        return f(
          'i',
          null,
          t
            ? f(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '12',
                  height: '1.494',
                  viewBox: '0 0 12 1.494',
                },
                f('path', {
                  'data-name': '_ionicons_svg_ios-remove (4)',
                  d:
                    'M138.753,240H128.247a.747.747,0,0,0,0,1.494h10.506a.747.747,0,1,0,0-1.494Z',
                  transform: 'translate(-127.5 -240)',
                  fill: 'currentColor',
                })
              )
            : f(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '12',
                  height: '12',
                  viewBox: '0 0 12 12',
                },
                f('path', {
                  'data-name': '_ionicons_svg_ios-add (7)',
                  d:
                    'M138.753,132.753h-4.506v-4.506a.747.747,0,1,0-1.494,0v4.506h-4.506a.747.747,0,0,0,0,1.494h4.506v4.506a.747.747,0,1,0,1.494,0v-4.506h4.506a.747.747,0,1,0,0-1.494Z',
                  transform: 'translate(-127.5 -127.5)',
                  fill: 'currentColor',
                })
              )
        );
      }
      var h = function (e) {
          var t = e.className,
            n = e.items,
            o = void 0 === n ? [] : n,
            r = ['accordion'];
          return (
            t && r.push(t),
            f(
              p,
              null,
              f(
                l.b,
                {
                  accordion: !0,
                  className: r.join(' '),
                  defaultActiveKey: 'active',
                  expandIcon: m,
                },
                0 !== o.length &&
                  o.map(function (e) {
                    return f(
                      l.a,
                      {
                        header: f(
                          'h3',
                          null,
                          f(d.a, {
                            id: e.intlTitleId,
                            defaultMessage: 'Please add title in language file',
                          })
                        ),
                        headerClass: 'accordion-title',
                        key: e.id,
                      },
                      f(
                        'p',
                        { key: e.id },
                        f(d.a, {
                          id: e.intlDetailsId,
                          defaultMessage:
                            'Please add description in language file',
                          values: e.values ? e.values : '',
                        })
                      )
                    );
                  })
              )
            )
          );
        },
        g = r.a.createElement,
        y = [
          {
            id: 1,
            intlTitleId: 'faqNo1Title',
            intlDetailsId: 'faqNo1Desc',
            values: { number1: 7, number2: 2 },
          },
          { id: 2, intlTitleId: 'faqNo2Title', intlDetailsId: 'faqNo2Desc' },
          { id: 3, intlTitleId: 'faqNo3Title', intlDetailsId: 'faqNo3Desc' },
          { id: 4, intlTitleId: 'faqNo4Title', intlDetailsId: 'faqNo4Desc' },
        ],
        v = a.e.h3.withConfig({
          displayName: 'help__Heading',
          componentId: 'j829y2-0',
        })([
          'font-size:21px;font-weight:700;color:#0d1136;line-height:1.2;margin-bottom:25px;width:100%;text-align:center;',
        ]),
        b = a.e.div.withConfig({
          displayName: 'help__HelpPageWrapper',
          componentId: 'j829y2-1',
        })([
          'background-color:#f7f7f7;position:relative;padding:130px 0 60px 0;min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;@media (max-width:989px){padding-top:70px;}',
        ]),
        x = a.e.div.withConfig({
          displayName: 'help__HelpPageContainer',
          componentId: 'j829y2-2',
        })([
          'background-color:transparent;padding:0;border-radius:6px;overflow:hidden;position:relative;@media (min-width:990px){width:870px;margin-left:auto;margin-right:auto;}@media (max-width:989px){padding:30px;}',
        ]);
      t.default = function () {
        return g(
          i.a,
          null,
          g(c.a, { title: 'F.A.Q - Exponet', description: 'F.A.Q Details' }),
          g(
            b,
            null,
            g(x, null, g(v, null, 'F.A.Q'), g(h, { items: y })),
            g(
              s.a,
              { style: { marginTop: 50 } },
              g(d.a, {
                id: 'siteFooter',
                defaultMessage: 'Pickbazar is a product of',
              }),
              '\xa0 ',
              g('a', { href: '#' }, 'Redq, Inc.')
            )
          )
        );
      };
    },
    'X+qd': function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/help',
        function () {
          return n('UyBh');
        },
      ]);
    },
    Xuae: function (e, t, n) {
      'use strict';
      var o = n('mPvQ'),
        r = n('/GRZ'),
        a = n('i2R6'),
        i = (n('qXWd'), n('48fX')),
        c = n('tCBg'),
        s = n('T0f4');
      function l(e) {
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
            o = s(e);
          if (t) {
            var r = s(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return c(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var u = n('q1tI'),
        p = (function (e) {
          i(n, e);
          var t = l(n);
          function n(e) {
            var a;
            return (
              r(this, n),
              ((a = t.call(this, e))._hasHeadManager = void 0),
              (a.emitChange = function () {
                a._hasHeadManager &&
                  a.props.headManager.updateHead(
                    a.props.reduceComponentsToState(
                      o(a.props.headManager.mountedInstances),
                      a.props
                    )
                  );
              }),
              (a._hasHeadManager =
                a.props.headManager && a.props.headManager.mountedInstances),
              a
            );
          }
          return (
            a(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: 'render',
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(u.Component);
      t.default = p;
    },
    ddIo: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return s;
      });
      var o = n('q1tI'),
        r = n.n(o),
        a = n('8Kt/'),
        i = n.n(a),
        c = r.a.createElement,
        s = function (e) {
          var t = e.title,
            n = e.description,
            o = e.canonical,
            r = e.css,
            a = e.js,
            s = e.image;
          return c(
            i.a,
            null,
            c('title', null, t),
            c('meta', { name: 'description', content: n }),
            c('meta', {
              name: 'viewport',
              content: 'width=device-width,minimum-scale=1,initial-scale=1',
            }),
            c('meta', { property: 'og:type', content: 'website' }),
            c('meta', { name: 'og:title', property: 'og:title', content: t }),
            c('meta', {
              name: 'og:description',
              property: 'og:description',
              content: n,
            }),
            c('meta', { property: 'og:site_name', content: 'Proper Noun' }),
            c('meta', { property: 'og:url', content: ''.concat(o) }),
            c('meta', { name: 'twitter:card', content: 'summary' }),
            c('meta', { name: 'twitter:title', content: t }),
            c('meta', { name: 'twitter:description', content: n }),
            c('meta', { name: 'twitter:site', content: '@propernounco' }),
            c('meta', { name: 'twitter:creator', content: '@propernounco' }),
            r && c('link', { rel: 'stylesheet', href: ''.concat(r) }),
            c(
              'meta',
              s
                ? { property: 'og:image', content: ''.concat(s) }
                : {
                    property: 'og:image',
                    content:
                      'https://www.propernoun.co/static/images/proper-noun-social.png',
                  }
            ),
            s && c('meta', { name: 'twitter:image', content: ''.concat(s) }),
            o && c('link', { rel: 'canonical', href: ''.concat(o) }),
            a && c('script', { type: 'text/javascript', src: ''.concat(a) })
          );
        };
    },
    i2R6: function (e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      e.exports = function (e, t, o) {
        return t && n(e.prototype, t), o && n(e, o), e;
      };
    },
    jtiA: function (e, t, n) {
      'use strict';
      var o = n('q1tI'),
        r = n.n(o),
        a = n('vOnD'),
        i = n('bC0J'),
        c = r.a.createElement,
        s = a.e.span.withConfig({
          displayName: 'SiteFooter__Footer',
          componentId: 'sc-13t039b-0',
        })(
          [
            "font-family:'Lato',sans-serif;font-size:",
            'px;font-weight:',
            ';color:',
            ';text-align:center;width:100%;display:flex;justify-content:center;align-items:center;padding:0 20px;a{color:',
            ';}',
          ],
          Object(i.a)('fontSizes.1', '13'),
          Object(i.a)('fontWeights.3', '400'),
          Object(i.a)('colorsdarkRegular', '#77798C'),
          Object(i.a)('colors.primary', '#009e7f')
        );
      t.a = function (e) {
        var t = e.children,
          n = e.style;
        return c(r.a.Fragment, null, c(s, { style: n }, t));
      };
    },
    kG2m: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    lwAK: function (e, t, n) {
      'use strict';
      var o;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var r = ((o = n('q1tI')) && o.__esModule
        ? o
        : { default: o }
      ).default.createContext({});
      t.AmpStateContext = r;
    },
    mPvQ: function (e, t, n) {
      var o = n('5fIB'),
        r = n('rlHP'),
        a = n('KckH'),
        i = n('kG2m');
      e.exports = function (e) {
        return o(e) || r(e) || a(e) || i();
      };
    },
    qXWd: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    qhzo: function (e, t) {
      function n(t, o) {
        return (
          (e.exports = n =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          n(t, o)
        );
      }
      e.exports = n;
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    tCBg: function (e, t, n) {
      var o = n('C+bE'),
        r = n('qXWd');
      e.exports = function (e, t) {
        return !t || ('object' !== o(t) && 'function' !== typeof t) ? r(e) : t;
      };
    },
  },
  [['X+qd', 1, 0, 3, 5, 20]],
]);
