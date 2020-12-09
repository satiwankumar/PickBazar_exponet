(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [17],
  {
    '1TsT': function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return l;
      });
      var o = !(
        'undefined' === typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var i = void 0;
      function r() {
        return (
          void 0 === i &&
            (i = (function () {
              if (!o) return !1;
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1;
              var e = !1;
              try {
                var t = Object.defineProperty({}, 'passive', {
                    get: function () {
                      e = !0;
                    },
                  }),
                  n = function () {};
                window.addEventListener('testPassiveEventSupport', n, t),
                  window.removeEventListener('testPassiveEventSupport', n, t);
              } catch (i) {}
              return e;
            })()),
          i
        );
      }
      function a(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function s(e) {
        (this.target = e), (this.events = {});
      }
      (s.prototype.getEventHandlers = function (e, t) {
        var n,
          o =
            String(e) +
            ' ' +
            String(
              (n = t)
                ? !0 === n
                  ? 100
                  : (n.capture << 0) + (n.passive << 1) + (n.once << 2)
                : 0
            );
        return (
          this.events[o] ||
            ((this.events[o] = { handlers: [], handleEvent: void 0 }),
            (this.events[o].nextHandlers = this.events[o].handlers)),
          this.events[o]
        );
      }),
        (s.prototype.handleEvent = function (e, t, n) {
          var o = this.getEventHandlers(e, t);
          (o.handlers = o.nextHandlers),
            o.handlers.forEach(function (e) {
              e && e(n);
            });
        }),
        (s.prototype.add = function (e, t, n) {
          var o = this,
            i = this.getEventHandlers(e, n);
          a(i),
            0 === i.nextHandlers.length &&
              ((i.handleEvent = this.handleEvent.bind(this, e, n)),
              this.target.addEventListener(e, i.handleEvent, n)),
            i.nextHandlers.push(t);
          var r = !0;
          return function () {
            if (r) {
              (r = !1), a(i);
              var s = i.nextHandlers.indexOf(t);
              i.nextHandlers.splice(s, 1),
                0 === i.nextHandlers.length &&
                  (o.target &&
                    o.target.removeEventListener(e, i.handleEvent, n),
                  (i.handleEvent = void 0));
            }
          };
        });
      function l(e, t, n, o) {
        e.__consolidated_events_handlers__ ||
          (e.__consolidated_events_handlers__ = new s(e));
        var i = (function (e) {
          if (e) return r() ? e : !!e.capture;
        })(o);
        return e.__consolidated_events_handlers__.add(t, n, i);
      }
    },
    '2QyS': function (e, t) {
      e.exports =
        '/_next/static/images/offer-3-ace0b4b0abfc87db613b00878ec422f6.png';
    },
    '69Sb': function (e, t, n) {
      'use strict';
      n.d(t, 'c', function () {
        return g;
      }),
        n.d(t, 'b', function () {
          return m;
        }),
        n.d(t, 'a', function () {
          return b;
        });
      var o = n('ODXe'),
        i = n('q1tI'),
        r = n.n(i),
        a = r.a.createElement;
      var s = n('rePB');
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                Object(s.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var d = (function (e, t) {
          var n = function () {
              return e;
            },
            s = Object(i.createContext)(e),
            l = Object(i.createContext)(n);
          return [
            function (e) {
              return Object(i.useContext)(s)[e];
            },
            function () {
              return Object(i.useContext)(l);
            },
            function (n) {
              var i = n.children,
                c = r.a.useReducer(t, e),
                d = Object(o.a)(c, 2),
                p = d[0],
                u = d[1];
              return a(
                l.Provider,
                { value: u },
                a(s.Provider, { value: p }, i)
              );
            },
          ];
        })({ isSticky: !1, isSidebarSticky: !0 }, function (e, t) {
          var n = t.type;
          switch (n) {
            case 'SET_STICKY':
              return c(c({}, e), {}, { isSticky: !0 });
            case 'REMOVE_STICKY':
              return c(c({}, e), {}, { isSticky: !1 });
            case 'SET_SIDEBAR_STICKY':
              return c(c({}, e), {}, { isSidebarSticky: !0 });
            case 'REMOVE_SIDEBAR_STICKY':
              return c(c({}, e), {}, { isSidebarSticky: !1 });
            default:
              throw new Error('Unsupported action type: '.concat(n));
          }
        }),
        p = Object(o.a)(d, 3),
        u = p[0],
        f = p[1],
        h = p[2],
        g = u,
        m = f,
        b = h;
    },
    '9Yrk': function (e, t, n) {
      'use strict';
      var o = n('q1tI'),
        i = n.n(o);
      var r = n('vOnD').e.div.withConfig({
          displayName: 'Popoverstyle__PopoverWrapper',
          componentId: 'ebbms3-0',
        })([
          "position:relative;cursor:pointer;.popover-handler{display:inline-block;cursor:pointer;}.popover-content{left:0px;top:calc(100% + 15px);display:block;min-width:200px;padding:15px 20px;position:absolute;border-radius:6px;background-color:#ffffff;box-shadow:0 3px 20px rgba(142,142,142,0.14);z-index:99;&:before{content:'';position:absolute;width:0;height:0;border-style:solid;border-width:0 8px 9px 8px;border-color:transparent transparent #ffffff transparent;top:-8px;left:15px;box-shadow:-4px -4px 8px -3px rgba(142,142,142,0.14);pointer-events:none;}}&.right{.popover-content{left:auto;right:0px;&:before{left:auto;right:15px;}}}",
        ]),
        a = i.a.createElement;
      t.a = function (e) {
        var t = e.className,
          n = e.handler,
          i = e.content,
          s = e.direction,
          l = Object(o.useState)(!1),
          c = l[0],
          d = l[1],
          p = Object(o.useRef)(),
          u = ['popover-wrapper'];
        t && u.push(t), s && u.push(s);
        var f = function (e) {
            e.stopPropagation(),
              d(function (e) {
                return !e;
              });
          },
          h = function (e) {
            e.stopPropagation(), c && f(e);
          };
        return (
          Object(o.useEffect)(function () {
            return (
              window.addEventListener('click', h),
              function () {
                window.removeEventListener('click', h);
              }
            );
          }),
          (function (e, t) {
            Object(o.useEffect)(
              function () {
                var n = function (n) {
                  e.current && !e.current.contains(n.target) && t(n);
                };
                return (
                  document.addEventListener('mousedown', n),
                  document.addEventListener('touchstart', n),
                  function () {
                    document.removeEventListener('mousedown', n),
                      document.removeEventListener('touchstart', n);
                  }
                );
              },
              [e, t]
            );
          })(p, function () {
            return d(function (e) {
              return !1;
            });
          }),
          a(
            r,
            { className: u.join(' '), ref: p },
            a('div', { className: 'popover-handler', onClick: f }, n),
            c &&
              a(
                'div',
                { className: 'popover-content' },
                i && a('div', { className: 'inner-wrap', onClick: f }, i)
              )
          )
        );
      };
    },
    GOnK: function (e, t, n) {
      'use strict';
      n.d(t, 'c', function () {
        return r;
      }),
        n.d(t, 'g', function () {
          return p;
        }),
        n.d(t, 'd', function () {
          return a;
        }),
        n.d(t, 'b', function () {
          return s;
        }),
        n.d(t, 'h', function () {
          return l;
        }),
        n.d(t, 'a', function () {
          return c;
        }),
        n.d(t, 'e', function () {
          return d;
        }),
        n.d(t, 'f', function () {
          return u;
        });
      var o = n('vOnD'),
        i = n('bC0J'),
        r = o.e.div.withConfig({
          displayName: 'pagesstyle__MobileCarouselDropdown',
          componentId: 'sc-1ufuelp-0',
        })(['@media (min-width:990px){display:none;}']),
        a = o.e.div.withConfig({
          displayName: 'pagesstyle__OfferPageWrapper',
          componentId: 'sc-1ufuelp-1',
        })([
          'width:100%;height:auto;min-height:100vh;display:flex;flex-direction:column;background-color:#f7f7f7;position:relative;padding:100px 60px 60px;justify-content:space-between;@media (max-width:768px){padding:100px 30px 60px;}@media (max-width:1199px){padding:100px 30px 60px;}',
        ]),
        s =
          (o.e.div.withConfig({
            displayName: 'pagesstyle__HeaderSection',
            componentId: 'sc-1ufuelp-2',
          })([
            'display:flex;flex-wrap:wrap;width:100%;min-height:400px;background-color:#f4f4f4;',
          ]),
          o.e.main.withConfig({
            displayName: 'pagesstyle__MainContentArea',
            componentId: 'sc-1ufuelp-3',
          })([
            'width:100%;display:flex;flex-wrap:wrap;background-color:#f7f7f7;padding-right:0;transition:padding-right 0.35s ease-in-out;',
          ])),
        l = o.e.div.withConfig({
          displayName: 'pagesstyle__SidebarSection',
          componentId: 'sc-1ufuelp-4',
        })([
          'background-color:#ffffff;width:280px;@media (max-width:990px){display:none;}',
        ]),
        c = o.e.div.withConfig({
          displayName: 'pagesstyle__ContentSection',
          componentId: 'sc-1ufuelp-5',
        })([
          'width:calc(100% - 280px);height:auto;min-height:100vh;padding:30px 30px 50px;@media (max-width:768px){padding:30px 7.5px 100px;}@media (max-width:1199px) and (min-width:991px){padding:15px 30px 50px;}@media (max-width:1367px) and (min-width:1200px){padding:15px 30px 50px;}@media (max-width:990px){width:100%;}@media (max-width:768px){padding-top:15px;min-height:auto;}.offer-slider{padding:0 0 30px 30px;}',
        ]),
        d = o.e.div.withConfig({
          displayName: 'pagesstyle__OfferSection',
          componentId: 'sc-1ufuelp-6',
        })(
          [
            'width:100%;display:block;padding:60px;background-color:#ffffff;position:relative;border-bottom:1px solid ',
            ';@media (max-width:1199px) and (min-width:991px){padding:20px 15px;.prevButton{left:0;}.nextButton{right:0;}}@media (max-width:990px){padding:15px;.prevButton{left:5px;}.nextButton{right:5px;}}',
          ],
          Object(i.a)('colors.borderColor', '#f1f1f1')
        ),
        p =
          (o.e.h2.withConfig({
            displayName: 'pagesstyle__Heading',
            componentId: 'sc-1ufuelp-7',
          })([
            'font-size:24px;font-weight:700;color:#009e7f;padding:0px 20px 20px;margin:50px 10px 20px;border-bottom:2px solid #009e7f;width:auto;display:inline-block;',
          ]),
          o.e.div.withConfig({
            displayName: 'pagesstyle__ProductsRow',
            componentId: 'sc-1ufuelp-8',
          })([
            'display:flex;flex-wrap:wrap;margin-top:30px;background-color:#f7f7f7;@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;margin-top:15px;}',
          ])),
        u = o.e.div.withConfig({
          displayName: 'pagesstyle__ProductsCol',
          componentId: 'sc-1ufuelp-9',
        })([
          'flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1650px){flex:0 0 25%;max-width:25%;}@media (max-width:1300px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:900px){padding-left:10px;padding-right:10px;margin-bottom:20px;}@media (max-width:899px) and (min-width:769px){flex:0 0 50%;max-width:50%;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;flex:0 0 50%;max-width:50%;}@media (max-width:490px){flex:0 0 100%;max-width:100%;}',
        ]);
    },
    Hiu4: function (e, t) {
      e.exports =
        '/_next/static/images/offer-2-3d4a1ca90736086df60561daf9198f8c.png';
    },
    OKUF: function (e, t, n) {
      'use strict';
      t.a = [];
    },
    VS1d: function (e, t) {
      e.exports =
        '/_next/static/images/offer-1-633ef2d70c7c3721e3cbd9075383a738.png';
    },
    e3cP: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return w;
      });
      var o = n('wx14'),
        i = n('Ff2n'),
        r = n('q1tI'),
        a = n.n(r),
        s = n('40+L'),
        l = n.n(s),
        c = n('vOnD'),
        d = n('bC0J'),
        p = n('yBv+'),
        u = n('dq9M'),
        f = a.a.createElement,
        h = Object(c.e)('button').withConfig({
          displayName: 'Carousel__ButtonPrev',
          componentId: 'cc7cxd-0',
        })(
          [
            'height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:#ffffff;color:',
            ';padding:0;border-radius:20px;box-shadow:0 3px 6px rgba(0,0,0,0.16);border:0;outline:0;cursor:pointer;position:absolute;top:50%;left:40px;margin-top:-20px;z-index:99;',
          ],
          Object(d.a)('colors.primary', '#009E7F')
        ),
        g = Object(c.e)('button').withConfig({
          displayName: 'Carousel__ButtonNext',
          componentId: 'cc7cxd-1',
        })(
          [
            'height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:#ffffff;color:',
            ';padding:0;border-radius:20px;box-shadow:0 3px 6px rgba(0,0,0,0.16);border:0;outline:0;cursor:pointer;position:absolute;top:50%;right:40px;margin-top:-20px;z-index:99;',
          ],
          Object(d.a)('colors.primary', '#009E7F')
        ),
        m = Object(c.e)('div').withConfig({
          displayName: 'Carousel__ButtonGroupWrapper',
          componentId: 'cc7cxd-2',
        })(['']),
        b = function (e) {
          var t = e.onClick,
            n = e.children;
          return f(
            h,
            {
              onClick: function (e) {
                e.preventDefault(), t();
              },
              className: 'prevButton',
            },
            n
          );
        },
        y = function (e) {
          var t = e.onClick,
            n = e.children;
          return f(
            g,
            {
              onClick: function (e) {
                e.preventDefault(), t();
              },
              className: 'nextButton',
            },
            n
          );
        },
        v = function (e) {
          var t = e.next,
            n = e.previous,
            o = Object(u.b)().isRtl;
          return f(
            m,
            null,
            o
              ? f(
                  a.a.Fragment,
                  null,
                  f(
                    y,
                    {
                      onClick: function () {
                        return t();
                      },
                      className: 'rtl',
                    },
                    f(p.ArrowPrev, null)
                  ),
                  f(
                    b,
                    {
                      onClick: function () {
                        return n();
                      },
                    },
                    f(p.ArrowNext, null)
                  )
                )
              : f(
                  a.a.Fragment,
                  null,
                  f(
                    b,
                    {
                      onClick: function () {
                        return n();
                      },
                    },
                    f(p.ArrowPrev, null)
                  ),
                  f(
                    y,
                    {
                      onClick: function () {
                        return t();
                      },
                    },
                    f(p.ArrowNext, null)
                  )
                )
          );
        },
        x = {
          desktop: { breakpoint: { max: 3e3, min: 1024 }, items: 3 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        };
      function w(e) {
        var t = e.data,
          n = e.deviceType,
          r = n.mobile,
          a = n.tablet,
          s = (n.desktop, e.component),
          c = e.autoPlay,
          d = void 0 !== c && c,
          p = e.infinite,
          u = void 0 === p || p,
          h = (e.customLeftArrow, e.customRightArrow, e.itemClass),
          g =
            (e.isRtl,
            Object(i.a)(e, [
              'data',
              'deviceType',
              'component',
              'autoPlay',
              'infinite',
              'customLeftArrow',
              'customRightArrow',
              'itemClass',
              'isRtl',
            ])),
          m = 'desktop';
        return (
          r && (m = 'mobile'),
          a && (m = 'tablet'),
          f(
            'div',
            { dir: 'ltr' },
            f(
              l.a,
              Object(o.a)(
                {
                  arrows: !1,
                  responsive: x,
                  ssr: !0,
                  showDots: !1,
                  slidesToSlide: 1,
                  infinite: u,
                  containerClass: 'container-with-dots',
                  itemClass: h,
                  deviceType: m,
                  autoPlay: d,
                  autoPlaySpeed: 3e3,
                  renderButtonGroupOutside: !0,
                  additionalTransfrom: 0,
                  customButtonGroup: f(v, null),
                },
                g
              ),
              t.map(function (e, t) {
                return s
                  ? s(e)
                  : f(
                      'div',
                      {
                        style: { padding: '0 15px', overflow: 'hidden' },
                        key: t,
                      },
                      f(
                        'a',
                        {
                          href: e.link,
                          style: { display: 'flex', cursor: 'pointer' },
                        },
                        f('img', {
                          key: e.id,
                          src: e.imgSrc,
                          alt: e.alt,
                          style: {
                            width: '100%',
                            height: '100%',
                            display: 'block',
                            position: 'relative',
                          },
                        })
                      )
                    );
              })
            )
          )
        );
      }
    },
    hD4N: function (e, t, n) {
      'use strict';
      var o = n('VS1d'),
        i = n.n(o),
        r = n('2QyS'),
        a = n.n(r),
        s = n('Hiu4'),
        l = n.n(s);
      t.a = [
        { id: '1', imgSrc: i.a, alt: 'Offer 1' },
        { id: '2', imgSrc: l.a, alt: 'Offer 2' },
        { id: '3', imgSrc: a.a, alt: 'Offer 3' },
      ];
    },
    j5Ri: function (e, t, n) {
      'use strict';
      var o = n('wx14'),
        i = n('rePB'),
        r = n('q1tI'),
        a = n.n(r),
        s = n('nOHt'),
        l = n('YFqc'),
        c = n.n(l),
        d = n('ttZb'),
        p = n('t8Fj'),
        u = n.n(p),
        f = n('k82f'),
        h = n('9Yrk'),
        g = n('yBv+'),
        m = n('s5Ij'),
        b = n('dq9M'),
        y = n('69Sb'),
        v = n('cnNH'),
        x = n('24R3'),
        w = n('vOnD'),
        O = n('bC0J'),
        j = Object(w.f)(['from{opacity:0;}to{opacity:1;}']),
        k = w.e.div.withConfig({
          displayName: 'Sidebarstyle__PopoverWrapper',
          componentId: 'sc-10zqjq2-0',
        })(
          [
            '@media (min-width:991px){&:not(.mobileView){display:none;}}.popover-handler{display:block;padding:15px;cursor:pointer;}.popover-content{position:relative;top:auto;left:auto;right:auto;border-radius:0;box-shadow:none;padding:25px 35px;border-top:1px solid ',
            ';&::before{display:none;}.category-dropdown{animation:',
            ' 0.6s;}@media (max-width:990px){padding:25px;}}',
          ],
          Object(O.a)('colors.borderColor', '#f1f1f1'),
          j
        ),
        S = w.e.span.withConfig({
          displayName: 'Sidebarstyle__RequestMedicine',
          componentId: 'sc-10zqjq2-1',
        })(
          [
            'width:100%;height:50px;display:flex;align-items:center;margin-bottom:20px;padding-left:50px;background-color:',
            ';font-size:14px;font-weight:700;color:#ffffff;cursor:pointer;@media (max-width:990px){justify-content:center;padding:0;border-radius:6px;}',
          ],
          Object(O.a)('colors.primary', '#009E7F')
        ),
        C = w.e.div.withConfig({
          displayName: 'Sidebarstyle__SidebarWrapper',
          componentId: 'sc-10zqjq2-2',
        })([
          'padding:45px 0px;padding-top:35px;padding-right:0;@media (max-width:1199px){padding:40px 0px;padding-right:0;}@media (max-width:990px){display:none;padding:0;}&.mobileView{display:none;}',
        ]),
        _ = w.e.div.withConfig({
          displayName: 'Sidebarstyle__CategoryWrapper',
          componentId: 'sc-10zqjq2-3',
        })(['position:relative;width:100%;']),
        E = w.e.div.withConfig({
          displayName: 'Sidebarstyle__TreeWrapper',
          componentId: 'sc-10zqjq2-4',
        })(['padding-left:50px;padding-right:20px;']),
        z = w.e.div.withConfig({
          displayName: 'Sidebarstyle__PopoverHandler',
          componentId: 'sc-10zqjq2-5',
        })(
          [
            'font-size:14px;font-weight:700;color:#0d1136;display:flex;align-items:center;justify-content:space-between;> div{display:flex;align-items:center;&:first-child{flex-grow:1;svg{margin-right:10px;}}&:last-child{color:',
            ';}}',
          ],
          Object(O.a)('colors.darkRegular', '#77798C')
        ),
        P =
          (w.e.div.withConfig({
            displayName: 'Sidebarstyle__Loading',
            componentId: 'sc-10zqjq2-6',
          })(
            [
              'width:100%;padding:10px;display:flex;align-items:center;justify-content:center;font-size:14px;color:',
              ';',
            ],
            Object(O.a)('colors.darkBold', '#0D1136')
          ),
          n('ODXe')),
        T = n('bdgK');
      var N = n('zLVn');
      const I = {
        arr: Array.isArray,
        obj: (e) => '[object Object]' === Object.prototype.toString.call(e),
        fun: (e) => 'function' === typeof e,
        str: (e) => 'string' === typeof e,
        num: (e) => 'number' === typeof e,
        und: (e) => void 0 === e,
        nul: (e) => null === e,
        set: (e) => e instanceof Set,
        map: (e) => e instanceof Map,
        equ(e, t) {
          if (typeof e !== typeof t) return !1;
          if (I.str(e) || I.num(e)) return e === t;
          if (
            I.obj(e) &&
            I.obj(t) &&
            Object.keys(e).length + Object.keys(t).length === 0
          )
            return !0;
          let n;
          for (n in e) if (!(n in t)) return !1;
          for (n in t) if (e[n] !== t[n]) return !1;
          return !I.und(n) || e === t;
        },
      };
      function R() {
        const e = Object(r.useState)(!1)[1];
        return Object(r.useCallback)(() => e((e) => !e), []);
      }
      function B(e, t) {
        return I.und(e) || I.nul(e) ? t : e;
      }
      function V(e) {
        return I.und(e) ? [] : I.arr(e) ? e : [e];
      }
      function A(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
          o < t;
          o++
        )
          n[o - 1] = arguments[o];
        return I.fun(e) ? e(...n) : e;
      }
      function q(e) {
        const t = (function (e) {
          return (
            e.to,
            e.from,
            e.config,
            e.onStart,
            e.onRest,
            e.onFrame,
            e.children,
            e.reset,
            e.reverse,
            e.force,
            e.immediate,
            e.delay,
            e.attach,
            e.destroyed,
            e.interpolateTo,
            e.ref,
            e.lazy,
            Object(N.a)(e, [
              'to',
              'from',
              'config',
              'onStart',
              'onRest',
              'onFrame',
              'children',
              'reset',
              'reverse',
              'force',
              'immediate',
              'delay',
              'attach',
              'destroyed',
              'interpolateTo',
              'ref',
              'lazy',
            ])
          );
        })(e);
        if (I.und(t)) return Object(o.a)({ to: t }, e);
        const n = Object.keys(e).reduce(
          (n, i) => (I.und(t[i]) ? Object(o.a)({}, n, { [i]: e[i] }) : n),
          {}
        );
        return Object(o.a)({ to: t }, n);
      }
      class F {
        constructor() {
          (this.payload = void 0), (this.children = []);
        }
        getAnimatedValue() {
          return this.getValue();
        }
        getPayload() {
          return this.payload || this;
        }
        attach() {}
        detach() {}
        getChildren() {
          return this.children;
        }
        addChild(e) {
          0 === this.children.length && this.attach(), this.children.push(e);
        }
        removeChild(e) {
          const t = this.children.indexOf(e);
          this.children.splice(t, 1),
            0 === this.children.length && this.detach();
        }
      }
      class D extends F {
        constructor() {
          super(...arguments),
            (this.payload = []),
            (this.attach = () =>
              this.payload.forEach((e) => e instanceof F && e.addChild(this))),
            (this.detach = () =>
              this.payload.forEach(
                (e) => e instanceof F && e.removeChild(this)
              ));
        }
      }
      class L extends F {
        constructor() {
          super(...arguments),
            (this.payload = {}),
            (this.attach = () =>
              Object.values(this.payload).forEach(
                (e) => e instanceof F && e.addChild(this)
              )),
            (this.detach = () =>
              Object.values(this.payload).forEach(
                (e) => e instanceof F && e.removeChild(this)
              ));
        }
        getValue(e) {
          void 0 === e && (e = !1);
          const t = {};
          for (const n in this.payload) {
            const o = this.payload[n];
            (!e || o instanceof F) &&
              (t[n] =
                o instanceof F ? o[e ? 'getAnimatedValue' : 'getValue']() : o);
          }
          return t;
        }
        getAnimatedValue() {
          return this.getValue(!0);
        }
      }
      let M, W;
      function H(e, t) {
        M = { fn: e, transform: t };
      }
      function $(e) {
        W = e;
      }
      let U,
        K = (e) =>
          'undefined' !== typeof window ? window.requestAnimationFrame(e) : -1;
      function Y(e) {
        U = e;
      }
      let G,
        J = () => Date.now();
      function Q(e) {
        G = e;
      }
      let X,
        Z,
        ee = (e) => e.current;
      function te(e) {
        X = e;
      }
      class ne extends L {
        constructor(e, t) {
          super(),
            (this.update = void 0),
            (this.payload = e.style
              ? Object(o.a)({}, e, { style: X(e.style) })
              : e),
            (this.update = t),
            this.attach();
        }
      }
      let oe = !1;
      const ie = new Set(),
        re = () => {
          if (!oe) return !1;
          let e = J();
          for (let t of ie) {
            let n = !1;
            for (let o = 0; o < t.configs.length; o++) {
              let i,
                r,
                a = t.configs[o];
              for (let t = 0; t < a.animatedValues.length; t++) {
                let o = a.animatedValues[t];
                if (o.done) continue;
                let s = a.fromValues[t],
                  l = a.toValues[t],
                  c = o.lastPosition,
                  d = l instanceof F,
                  p = Array.isArray(a.initialVelocity)
                    ? a.initialVelocity[t]
                    : a.initialVelocity;
                if ((d && (l = l.getValue()), a.immediate))
                  o.setValue(l), (o.done = !0);
                else if ('string' !== typeof s && 'string' !== typeof l) {
                  if (void 0 !== a.duration)
                    (c =
                      s + a.easing((e - o.startTime) / a.duration) * (l - s)),
                      (i = e >= o.startTime + a.duration);
                  else if (a.decay)
                    (c =
                      s +
                      (p / (1 - 0.998)) *
                        (1 - Math.exp(-(1 - 0.998) * (e - o.startTime)))),
                      (i = Math.abs(o.lastPosition - c) < 0.1),
                      i && (l = c);
                  else {
                    (r = void 0 !== o.lastTime ? o.lastTime : e),
                      (p =
                        void 0 !== o.lastVelocity
                          ? o.lastVelocity
                          : a.initialVelocity),
                      e > r + 64 && (r = e);
                    let t = Math.floor(e - r);
                    for (let e = 0; e < t; ++e) {
                      (p +=
                        (1 *
                          ((-a.tension * (c - l) + -a.friction * p) / a.mass)) /
                        1e3),
                        (c += (1 * p) / 1e3);
                    }
                    let n =
                        !(!a.clamp || 0 === a.tension) &&
                        (s < l ? c > l : c < l),
                      d = Math.abs(p) <= a.precision,
                      u = 0 === a.tension || Math.abs(l - c) <= a.precision;
                    (i = n || (d && u)), (o.lastVelocity = p), (o.lastTime = e);
                  }
                  d && !a.toValues[t].done && (i = !1),
                    i ? (o.value !== l && (c = l), (o.done = !0)) : (n = !0),
                    o.setValue(c),
                    (o.lastPosition = c);
                } else o.setValue(l), (o.done = !0);
              }
              t.props.onFrame &&
                (t.values[a.name] = a.interpolation.getValue());
            }
            t.props.onFrame && t.props.onFrame(t.values),
              n || (ie.delete(t), t.stop(!0));
          }
          return ie.size ? (Z ? Z() : K(re)) : (oe = !1), oe;
        };
      function ae(e, t, n) {
        if ('function' === typeof e) return e;
        if (Array.isArray(e))
          return ae({ range: e, output: t, extrapolate: n });
        if (U && 'string' === typeof e.output[0]) return U(e);
        const o = e,
          i = o.output,
          r = o.range || [0, 1],
          a = o.extrapolateLeft || o.extrapolate || 'extend',
          s = o.extrapolateRight || o.extrapolate || 'extend',
          l = o.easing || ((e) => e);
        return (e) => {
          const t = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
          })(e, r);
          return (function (e, t, n, o, i, r, a, s, l) {
            let c = l ? l(e) : e;
            if (c < t) {
              if ('identity' === a) return c;
              'clamp' === a && (c = t);
            }
            if (c > n) {
              if ('identity' === s) return c;
              'clamp' === s && (c = n);
            }
            if (o === i) return o;
            if (t === n) return e <= t ? o : i;
            t === -1 / 0
              ? (c = -c)
              : n === 1 / 0
              ? (c -= t)
              : (c = (c - t) / (n - t));
            (c = r(c)),
              o === -1 / 0
                ? (c = -c)
                : i === 1 / 0
                ? (c += o)
                : (c = c * (i - o) + o);
            return c;
          })(e, r[t], r[t + 1], i[t], i[t + 1], l, a, s, o.map);
        };
      }
      class se extends D {
        constructor(e, t, n, o) {
          super(),
            (this.calc = void 0),
            (this.payload =
              e instanceof D && !(e instanceof se)
                ? e.getPayload()
                : Array.isArray(e)
                ? e
                : [e]),
            (this.calc = ae(t, n, o));
        }
        getValue() {
          return this.calc(...this.payload.map((e) => e.getValue()));
        }
        updateConfig(e, t, n) {
          this.calc = ae(e, t, n);
        }
        interpolate(e, t, n) {
          return new se(this, e, t, n);
        }
      }
      class le extends F {
        constructor(e) {
          var t;
          super(),
            (t = this),
            (this.animatedStyles = new Set()),
            (this.value = void 0),
            (this.startPosition = void 0),
            (this.lastPosition = void 0),
            (this.lastVelocity = void 0),
            (this.startTime = void 0),
            (this.lastTime = void 0),
            (this.done = !1),
            (this.setValue = function (e, n) {
              void 0 === n && (n = !0), (t.value = e), n && t.flush();
            }),
            (this.value = e),
            (this.startPosition = e),
            (this.lastPosition = e);
        }
        flush() {
          0 === this.animatedStyles.size &&
            (function e(t, n) {
              'update' in t
                ? n.add(t)
                : t.getChildren().forEach((t) => e(t, n));
            })(this, this.animatedStyles),
            this.animatedStyles.forEach((e) => e.update());
        }
        clearStyles() {
          this.animatedStyles.clear();
        }
        getValue() {
          return this.value;
        }
        interpolate(e, t, n) {
          return new se(this, e, t, n);
        }
      }
      class ce extends D {
        constructor(e) {
          super(), (this.payload = e.map((e) => new le(e)));
        }
        setValue(e, t) {
          void 0 === t && (t = !0),
            Array.isArray(e)
              ? e.length === this.payload.length &&
                e.forEach((e, n) => this.payload[n].setValue(e, t))
              : this.payload.forEach((n) => n.setValue(e, t));
        }
        getValue() {
          return this.payload.map((e) => e.getValue());
        }
        interpolate(e, t) {
          return new se(this, e, t);
        }
      }
      let de = 0;
      class pe {
        constructor() {
          (this.id = void 0),
            (this.idle = !0),
            (this.hasChanged = !1),
            (this.guid = 0),
            (this.local = 0),
            (this.props = {}),
            (this.merged = {}),
            (this.animations = {}),
            (this.interpolations = {}),
            (this.values = {}),
            (this.configs = []),
            (this.listeners = []),
            (this.queue = []),
            (this.localQueue = void 0),
            (this.getValues = () => this.interpolations),
            (this.id = de++);
        }
        update(e) {
          if (!e) return this;
          const t = q(e),
            n = t.delay,
            i = void 0 === n ? 0 : n,
            r = t.to,
            a = Object(N.a)(t, ['delay', 'to']);
          if (I.arr(r) || I.fun(r))
            this.queue.push(Object(o.a)({}, a, { delay: i, to: r }));
          else if (r) {
            let e = {};
            Object.entries(r).forEach((t) => {
              let n = t[0],
                r = t[1];
              const s = Object(o.a)({ to: { [n]: r }, delay: A(i, n) }, a),
                l = e[s.delay] && e[s.delay].to;
              e[s.delay] = Object(o.a)({}, e[s.delay], s, {
                to: Object(o.a)({}, l, s.to),
              });
            }),
              (this.queue = Object.values(e));
          }
          return (
            (this.queue = this.queue.sort((e, t) => e.delay - t.delay)),
            this.diff(a),
            this
          );
        }
        start(e) {
          if (this.queue.length) {
            (this.idle = !1),
              this.localQueue &&
                this.localQueue.forEach((e) => {
                  let t = e.from,
                    n = void 0 === t ? {} : t,
                    i = e.to,
                    r = void 0 === i ? {} : i;
                  I.obj(n) && (this.merged = Object(o.a)({}, n, this.merged)),
                    I.obj(r) && (this.merged = Object(o.a)({}, this.merged, r));
                });
            const t = (this.local = ++this.guid),
              n = (this.localQueue = this.queue);
            (this.queue = []),
              n.forEach((o, i) => {
                let r = o.delay,
                  a = Object(N.a)(o, ['delay']);
                const s = (o) => {
                  i === n.length - 1 &&
                    t === this.guid &&
                    o &&
                    ((this.idle = !0),
                    this.props.onRest && this.props.onRest(this.merged)),
                    e && e();
                };
                let l = I.arr(a.to) || I.fun(a.to);
                r
                  ? setTimeout(() => {
                      t === this.guid &&
                        (l ? this.runAsync(a, s) : this.diff(a).start(s));
                    }, r)
                  : l
                  ? this.runAsync(a, s)
                  : this.diff(a).start(s);
              });
          } else
            I.fun(e) && this.listeners.push(e),
              this.props.onStart && this.props.onStart(),
              (t = this),
              ie.has(t) || ie.add(t),
              oe || ((oe = !0), K(Z || re));
          var t;
          return this;
        }
        stop(e) {
          return (
            this.listeners.forEach((t) => t(e)), (this.listeners = []), this
          );
        }
        pause(e) {
          var t;
          return (
            this.stop(!0), e && ((t = this), ie.has(t) && ie.delete(t)), this
          );
        }
        runAsync(e, t) {
          var n = this;
          e.delay;
          let i = Object(N.a)(e, ['delay']);
          const r = this.local;
          let a = Promise.resolve(void 0);
          if (I.arr(i.to))
            for (let s = 0; s < i.to.length; s++) {
              const e = s,
                t = Object(o.a)({}, i, q(i.to[e]));
              I.arr(t.config) && (t.config = t.config[e]),
                (a = a.then(() => {
                  if (r === this.guid)
                    return new Promise((e) => this.diff(t).start(e));
                }));
            }
          else if (I.fun(i.to)) {
            let e,
              t = 0;
            a = a.then(() =>
              i
                .to(
                  (n) => {
                    const a = Object(o.a)({}, i, q(n));
                    if (
                      (I.arr(a.config) && (a.config = a.config[t]),
                      t++,
                      r === this.guid)
                    )
                      return (e = new Promise((e) => this.diff(a).start(e)));
                  },
                  function (e) {
                    return void 0 === e && (e = !0), n.stop(e);
                  }
                )
                .then(() => e)
            );
          }
          a.then(t);
        }
        diff(e) {
          this.props = Object(o.a)({}, this.props, e);
          let t = this.props,
            n = t.from,
            i = void 0 === n ? {} : n,
            r = t.to,
            a = void 0 === r ? {} : r,
            s = t.config,
            l = void 0 === s ? {} : s,
            c = t.reverse,
            d = t.attach,
            p = t.reset,
            u = t.immediate;
          if (c) {
            var f = [a, i];
            (i = f[0]), (a = f[1]);
          }
          (this.merged = Object(o.a)({}, i, this.merged, a)),
            (this.hasChanged = !1);
          let h = d && d(this);
          if (
            ((this.animations = Object.entries(this.merged).reduce((e, t) => {
              let n = t[0],
                r = t[1],
                a = e[n] || {};
              const s = I.num(r),
                c = I.str(r) && !r.startsWith('#') && !/\d/.test(r) && !W[r],
                d = I.arr(r),
                f = !s && !d && !c;
              let g = I.und(i[n]) ? r : i[n],
                m = s || d || c ? r : 1,
                b = A(l, n);
              h && (m = h.animations[n].parent);
              let y,
                v = a.parent,
                x = a.interpolation,
                w = V(h ? m.getPayload() : m),
                O = r;
              f && (O = U({ range: [0, 1], output: [r, r] })(1));
              let j = x && x.getValue();
              const k = !I.und(v) && a.animatedValues.some((e) => !e.done),
                S = !I.equ(O, j),
                C = !I.equ(O, a.previous),
                _ = !I.equ(b, a.config);
              if (p || (C && S) || _) {
                if (s || c) v = x = a.parent || new le(g);
                else if (d) v = x = a.parent || new ce(g);
                else if (f) {
                  let e =
                    a.interpolation && a.interpolation.calc(a.parent.value);
                  (e = void 0 === e || p ? g : e),
                    a.parent
                      ? ((v = a.parent), v.setValue(0, !1))
                      : (v = new le(0));
                  const t = { output: [e, r] };
                  a.interpolation
                    ? ((x = a.interpolation), a.interpolation.updateConfig(t))
                    : (x = v.interpolate(t));
                }
                return (
                  (w = V(h ? m.getPayload() : m)),
                  (y = V(v.getPayload())),
                  p && !f && v.setValue(g, !1),
                  (this.hasChanged = !0),
                  y.forEach((e) => {
                    (e.startPosition = e.value),
                      (e.lastPosition = e.value),
                      (e.lastVelocity = k ? e.lastVelocity : void 0),
                      (e.lastTime = k ? e.lastTime : void 0),
                      (e.startTime = J()),
                      (e.done = !1),
                      e.animatedStyles.clear();
                  }),
                  A(u, n) && v.setValue(f ? m : r, !1),
                  Object(o.a)({}, e, {
                    [n]: Object(o.a)({}, a, {
                      name: n,
                      parent: v,
                      interpolation: x,
                      animatedValues: y,
                      toValues: w,
                      previous: O,
                      config: b,
                      fromValues: V(v.getValue()),
                      immediate: A(u, n),
                      initialVelocity: B(b.velocity, 0),
                      clamp: B(b.clamp, !1),
                      precision: B(b.precision, 0.01),
                      tension: B(b.tension, 170),
                      friction: B(b.friction, 26),
                      mass: B(b.mass, 1),
                      duration: b.duration,
                      easing: B(b.easing, (e) => e),
                      decay: b.decay,
                    }),
                  })
                );
              }
              return S
                ? e
                : (f && (v.setValue(1, !1), x.updateConfig({ output: [O, O] })),
                  (v.done = !0),
                  (this.hasChanged = !0),
                  Object(o.a)({}, e, {
                    [n]: Object(o.a)({}, e[n], { previous: O }),
                  }));
            }, this.animations)),
            this.hasChanged)
          ) {
            (this.configs = Object.values(this.animations)),
              (this.values = {}),
              (this.interpolations = {});
            for (let e in this.animations)
              (this.interpolations[e] = this.animations[e].interpolation),
                (this.values[e] = this.animations[e].interpolation.getValue());
          }
          return this;
        }
        destroy() {
          this.stop(),
            (this.props = {}),
            (this.merged = {}),
            (this.animations = {}),
            (this.interpolations = {}),
            (this.values = {}),
            (this.configs = []),
            (this.local = 0);
        }
      }
      const ue = (e, t) => {
        const n = Object(r.useRef)(!1),
          o = Object(r.useRef)(),
          i = I.fun(t),
          a = Object(r.useMemo)(() => {
            let n;
            return (
              o.current &&
                (o.current.map((e) => e.destroy()), (o.current = void 0)),
              [
                new Array(e).fill().map((e, o) => {
                  const r = new pe(),
                    a = i ? A(t, o, r) : t[o];
                  return 0 === o && (n = a.ref), r.update(a), n || r.start(), r;
                }),
                n,
              ]
            );
          }, [e]),
          s = a[0],
          l = a[1];
        o.current = s;
        Object(r.useImperativeHandle)(l, () => ({
          start: () =>
            Promise.all(o.current.map((e) => new Promise((t) => e.start(t)))),
          stop: (e) => o.current.forEach((t) => t.stop(e)),
          get controllers() {
            return o.current;
          },
        }));
        const c = Object(r.useMemo)(
          () => (e) =>
            o.current.map((t, n) => {
              t.update(i ? A(e, n, t) : e[n]), l || t.start();
            }),
          [e]
        );
        Object(r.useEffect)(() => {
          n.current ? i || c(t) : l || o.current.forEach((e) => e.start());
        }),
          Object(r.useEffect)(
            () => (
              (n.current = !0), () => o.current.forEach((e) => e.destroy())
            ),
            []
          );
        const d = o.current.map((e) => e.getValues());
        return i ? [d, c, (e) => o.current.forEach((t) => t.pause(e))] : d;
      };
      class fe extends L {
        constructor(e) {
          void 0 === e && (e = {}),
            super(),
            !e.transform || e.transform instanceof F || (e = M.transform(e)),
            (this.payload = e);
        }
      }
      const he = {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
        ge = '[-+]?\\d*\\.?\\d+';
      function me() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return '\\(\\s*(' + t.join(')\\s*,\\s*(') + ')\\s*\\)';
      }
      const be = new RegExp('rgb' + me(ge, ge, ge)),
        ye = new RegExp('rgba' + me(ge, ge, ge, ge)),
        ve = new RegExp(
          'hsl' + me(ge, '[-+]?\\d*\\.?\\d+%', '[-+]?\\d*\\.?\\d+%')
        ),
        xe = new RegExp(
          'hsla' + me(ge, '[-+]?\\d*\\.?\\d+%', '[-+]?\\d*\\.?\\d+%', ge)
        ),
        we = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Oe = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        je = /^#([0-9a-fA-F]{6})$/,
        ke = /^#([0-9a-fA-F]{8})$/;
      function Se(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      function Ce(e, t, n) {
        const o = n < 0.5 ? n * (1 + t) : n + t - n * t,
          i = 2 * n - o,
          r = Se(i, o, e + 1 / 3),
          a = Se(i, o, e),
          s = Se(i, o, e - 1 / 3);
        return (
          (Math.round(255 * r) << 24) |
          (Math.round(255 * a) << 16) |
          (Math.round(255 * s) << 8)
        );
      }
      function _e(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
      }
      function Ee(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
      }
      function ze(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
      }
      function Pe(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
      }
      function Te(e) {
        let t = (function (e) {
          let t;
          return 'number' === typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
              ? e
              : null
            : (t = je.exec(e))
            ? parseInt(t[1] + 'ff', 16) >>> 0
            : he.hasOwnProperty(e)
            ? he[e]
            : (t = be.exec(e))
            ? ((_e(t[1]) << 24) | (_e(t[2]) << 16) | (_e(t[3]) << 8) | 255) >>>
              0
            : (t = ye.exec(e))
            ? ((_e(t[1]) << 24) |
                (_e(t[2]) << 16) |
                (_e(t[3]) << 8) |
                ze(t[4])) >>>
              0
            : (t = we.exec(e))
            ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
            : (t = ke.exec(e))
            ? parseInt(t[1], 16) >>> 0
            : (t = Oe.exec(e))
            ? parseInt(
                t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4],
                16
              ) >>> 0
            : (t = ve.exec(e))
            ? (255 | Ce(Ee(t[1]), Pe(t[2]), Pe(t[3]))) >>> 0
            : (t = xe.exec(e))
            ? (Ce(Ee(t[1]), Pe(t[2]), Pe(t[3])) | ze(t[4])) >>> 0
            : null;
        })(e);
        return null === t
          ? e
          : ((t = t || 0),
            `rgba(${(4278190080 & t) >>> 24}, ${(16711680 & t) >>> 16}, ${
              (65280 & t) >>> 8
            }, ${(255 & t) / 255})`);
      }
      const Ne = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ie = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Re = new RegExp(`(${Object.keys(he).join('|')})`, 'g');
      let Be = {
        animationIterationCount: !0,
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
      };
      const Ve = ['Webkit', 'Ms', 'Moz', 'O'];
      function Ae(e, t, n) {
        return null == t || 'boolean' === typeof t || '' === t
          ? ''
          : n ||
            'number' !== typeof t ||
            0 === t ||
            (Be.hasOwnProperty(e) && Be[e])
          ? ('' + t).trim()
          : t + 'px';
      }
      Be = Object.keys(Be).reduce(
        (e, t) => (
          Ve.forEach(
            (n) =>
              (e[
                ((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)
              ] = e[t])
          ),
          e
        ),
        Be
      );
      const qe = {};
      te((e) => new fe(e)),
        Q('div'),
        Y((e) => {
          const t = e.output
              .map((e) => e.replace(Ie, Te))
              .map((e) => e.replace(Re, Te)),
            n = t[0].match(Ne).map(() => []);
          t.forEach((e) => {
            e.match(Ne).forEach((e, t) => n[t].push(+e));
          });
          const i = t[0]
            .match(Ne)
            .map((t, i) => ae(Object(o.a)({}, e, { output: n[i] })));
          return (e) => {
            let n = 0;
            return t[0]
              .replace(Ne, () => i[n++](e))
              .replace(
                /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                (e, t, n, o, i) =>
                  `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(
                    o
                  )}, ${i})`
              );
          };
        }),
        $(he),
        H(
          (e, t) => {
            if (!e.nodeType || void 0 === e.setAttribute) return !1;
            {
              const i = t.style,
                r = t.children,
                a = t.scrollTop,
                s = t.scrollLeft,
                l = Object(N.a)(t, [
                  'style',
                  'children',
                  'scrollTop',
                  'scrollLeft',
                ]),
                c =
                  'filter' === e.nodeName ||
                  (e.parentNode && 'filter' === e.parentNode.nodeName);
              void 0 !== a && (e.scrollTop = a),
                void 0 !== s && (e.scrollLeft = s),
                void 0 !== r && (e.textContent = r);
              for (let t in i)
                if (i.hasOwnProperty(t)) {
                  var n = 0 === t.indexOf('--'),
                    o = Ae(t, i[t], n);
                  'float' === t && (t = 'cssFloat'),
                    n ? e.style.setProperty(t, o) : (e.style[t] = o);
                }
              for (let t in l) {
                const n = c
                  ? t
                  : qe[t] ||
                    (qe[t] = t.replace(
                      /([A-Z])/g,
                      (e) => '-' + e.toLowerCase()
                    ));
                'undefined' !== typeof e.getAttribute(n) &&
                  e.setAttribute(n, l[t]);
              }
            }
          },
          (e) => e
        );
      var Fe, De;
      const Le = ((Fe = (e) =>
        Object(r.forwardRef)((t, n) => {
          const i = R(),
            s = Object(r.useRef)(!0),
            l = Object(r.useRef)(null),
            c = Object(r.useRef)(null),
            d = Object(r.useCallback)((e) => {
              const t = l.current;
              (l.current = new ne(e, () => {
                let e = !1;
                c.current &&
                  (e = M.fn(c.current, l.current.getAnimatedValue())),
                  (c.current && !1 !== e) || i();
              })),
                t && t.detach();
            }, []);
          Object(r.useEffect)(
            () => () => {
              (s.current = !1), l.current && l.current.detach();
            },
            []
          ),
            Object(r.useImperativeHandle)(n, () => ee(c, s, i)),
            d(t);
          const p = l.current.getValue(),
            u =
              (p.scrollTop,
              p.scrollLeft,
              Object(N.a)(p, ['scrollTop', 'scrollLeft'])),
            f =
              ((h = e),
              !I.fun(h) || h.prototype instanceof a.a.Component
                ? (e) =>
                    (c.current = (function (e, t) {
                      return (
                        t && (I.fun(t) ? t(e) : I.obj(t) && (t.current = e)), e
                      );
                    })(e, n))
                : void 0);
          var h;
          return a.a.createElement(e, Object(o.a)({}, u, { ref: f }));
        })),
      void 0 === (De = !1) && (De = !0),
      (e) =>
        (I.arr(e) ? e : Object.keys(e)).reduce((e, t) => {
          const n = De ? t[0].toLowerCase() + t.substring(1) : t;
          return (e[n] = Fe(n)), e;
        }, Fe))([
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan',
      ]);
      var Me = n('OJSm'),
        We = w.e.header.withConfig({
          displayName: 'TreeMenustyle__Header',
          componentId: 'sc-1pcei7c-0',
        })(
          function (e) {
            return Object(Me.a)({
              fontSize: 'parent' === e.depth ? [2] : [1],
              fontWeight: 6,
              display: 'flex',
              alignItems: 'center',
              marginBottom: 'parent' === e.depth ? 12 : 0,
              color:
                'parent' === e.depth
                  ? e.open
                    ? 'primary'
                    : 'darkBold'
                  : e.open
                  ? 'primary'
                  : 'darkRegular',
              cursor: 'pointer',
              transition: '0.15s ease-in-out',
              '&:hover': { color: 'primary' },
            });
          },
          { padding: '5px 0', outline: 0 }
        ),
        He = w.e.div.withConfig({
          displayName: 'TreeMenustyle__IconWrapper',
          componentId: 'sc-1pcei7c-1',
        })(
          function (e) {
            return Object(Me.a)({
              width: 'child' === e.depth ? 10 : 16,
              marginRight: 'child' === e.depth ? '8px' : 15,
              svg: {
                width: '100%',
                height: 'child' === e.depth ? '2px' : 'auto',
              },
            });
          },
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            flexShrink: 0,
          }
        ),
        $e = w.e.span.withConfig({
          displayName: 'TreeMenustyle__Title',
          componentId: 'sc-1pcei7c-2',
        })({
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          verticalAlign: 'middle',
          overflow: 'hidden',
        }),
        Ue = Object(w.e)(Le.div).withConfig({
          displayName: 'TreeMenustyle__Content',
          componentId: 'sc-1pcei7c-3',
        })({
          willChange: 'transform, opacity, height',
          borderLeft: 0,
          overflow: 'hidden',
        }),
        Ke = w.e.div.withConfig({
          displayName: 'TreeMenustyle__Frame',
          componentId: 'sc-1pcei7c-4',
        })(
          function (e) {
            return Object(Me.a)({
              marginBottom: 'parent' === e.depth ? 15 : 10,
              paddingLeft: 'child' === e.depth ? 32 : 0,
            });
          },
          { position: 'relative', overflowX: 'hidden' }
        ),
        Ye = a.a.createElement,
        Ge = a.a.memo(function (e) {
          var t = e.children,
            n = e.name,
            i = e.icon,
            a = e.isOpen,
            s = e.onClick,
            l = e.depth,
            c =
              (e.defaultOpen,
              (function (e) {
                var t = Object(r.useRef)();
                return (
                  Object(r.useEffect)(
                    function () {
                      t.current = e;
                    },
                    [e]
                  ),
                  t.current
                );
              })(a)),
            d = (function () {
              var e = Object(r.useRef)(),
                t = Object(r.useState)({
                  left: 0,
                  top: 0,
                  width: 0,
                  height: 0,
                }),
                n = t[0],
                o = t[1],
                i = Object(r.useState)(function () {
                  return new T.a(function (e) {
                    var t = Object(P.a)(e, 1)[0];
                    return o(t.contentRect);
                  });
                })[0];
              return (
                Object(r.useEffect)(function () {
                  return (
                    e.current && i.observe(e.current),
                    function () {
                      return i.disconnect();
                    }
                  );
                }, []),
                [{ ref: e }, n]
              );
            })(),
            p = Object(P.a)(d, 2),
            u = p[0],
            f = p[1].height,
            h = ((e) => {
              const t = I.fun(e),
                n = ue(1, t ? e : [e]),
                o = n[0],
                i = n[1],
                r = n[2];
              return t ? [o[0], i, r] : o;
            })({
              from: {
                height: 0,
                opacity: 0,
                transform: 'translate3d(20px,0,0)',
              },
              to: {
                height: a ? f : 0,
                opacity: a ? 1 : 0,
                transform: 'translate3d('.concat(a ? 0 : 20, 'px,0,0)'),
              },
            }),
            m = h.height,
            b = h.opacity,
            y = h.transform,
            v = i ? g[i] : 'child' === l ? g.Minus : null;
          return Ye(
            Ke,
            { depth: l },
            Ye(
              We,
              { open: a, depth: l, className: l },
              null !== v && Ye(He, { depth: l }, Ye(v, null)),
              Ye($e, { onClick: s }, n)
            ),
            Ye(
              Ue,
              { style: { opacity: b, height: a && c === a ? 'auto' : m } },
              Ye(
                Le.div,
                Object(o.a)({ style: { transform: y } }, u, { children: t })
              )
            )
          );
        }),
        Je = function (e) {
          var t = e.data,
            n = (e.className, e.onClick),
            o = e.active;
          return Ye(
            a.a.Fragment,
            null,
            (function e(t) {
              return t.map(function (t) {
                return t.subcategories
                  ? Ye(
                      Ge,
                      {
                        key: t.id,
                        name: t.name,
                        icon: t.icon,
                        depth: 'parent',
                        onClick: function () {
                          return n(t.id);
                        },
                        isOpen:
                          o === t.id ||
                          t.subcategories.some(function (e) {
                            return e.parent_id === o;
                          }),
                      },
                      e(t.subcategories)
                    )
                  : Ye(Ge, {
                      key: t.id,
                      name: t.name,
                      icon: t.icon,
                      depth: 'child',
                      onClick: function () {
                        return n(t.id);
                      },
                      isOpen: o === t.id,
                    });
              });
            })(t)
          );
        },
        Qe = n('h4VS'),
        Xe = n('lTCR');
      function Ze() {
        var e = Object(Qe.a)([
          '\nquery getCategory($category_id:Int,$filter_by_name: String){\n  getCategory(category_id:$category_id,filter_by_name: $filter_by_name){\n    id\n    image\n    name\n    slug\n    type\n    subcategories {\n      id\n      name\n      slug\n      position\n      is_searchable\n      parent_id\n       subcategories {\n      name\n      slug\n      position\n      is_searchable\n      parent_id\n    }\n    }\n},\n \n  getSiteSetting{\n        site_name\n        site_description\n        image\n}\n}',
        ]);
        return (
          (Ze = function () {
            return e;
          }),
          e
        );
      }
      var et = n.n(Xe)()(Ze()),
        tt = n('kwfN'),
        nt = a.a.createElement;
      function ot(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function it(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ot(Object(n), !0).forEach(function (t) {
                Object(i.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ot(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      t.a = function (e) {
        var t = e.deviceType,
          n = t.mobile,
          i = t.tablet,
          l = (t.desktop, e.type);
        console.log('type', l);
        var p = Object(r.useContext)(m.a),
          w = p.state,
          O = (p.dispatch, Object(s.useRouter)()),
          j = O.pathname,
          P = O.query,
          T = Object(d.c)(et, {
            variables: { category_id: l || null, filter_by_name: null },
          }),
          N = T.loading,
          I = T.error,
          R = T.data;
        console.log(I, N, R);
        var B = P.category,
          V = Object(b.b)().isRtl,
          A = function (e) {
            var t = w.text ? { text: w.text, category: e } : { category: e };
            O.push({ pathname: j, query: t });
          },
          q = [];
        R &&
          R.getCategory.map(function (e) {
            return e.subcategories.map(function (e) {
              return q.push(e);
            });
          });
        var F = Object(y.c)('isSidebarSticky');
        return !R || N
          ? nt(n || i ? v.b : v.a, null)
          : nt(
              _,
              null,
              nt(
                k,
                { className: ''.concat(n || i ? 'mobileView' : '') },
                nt(h.a, {
                  handler: nt(
                    z,
                    null,
                    nt(
                      'div',
                      null,
                      nt(g.CategoryIcon, null),
                      'Select your Category'
                    ),
                    nt('div', null, nt(g.ArrowDropDown, null))
                  ),
                  className: 'category-popover',
                  content: nt(
                    a.a.Fragment,
                    null,
                    'medicine' === l &&
                      nt(
                        c.a,
                        { href: tt.h },
                        nt(S, null, nt(x.a, { id: 'reqMedicine' }))
                      ),
                    nt(Je, { data: R && R.getCategory, onClick: A, active: B })
                  ),
                })
              ),
              nt(
                C,
                {
                  className: ''.concat(n || i ? 'mobileView' : ''),
                  style: { paddingTop: 'medicine' === l ? 0 : 45 },
                },
                nt(
                  u.a,
                  { enabled: F, top: 'medicine' === l ? 89 : 110 },
                  'medicine' === l &&
                    nt(
                      c.a,
                      { href: tt.h },
                      nt(S, null, nt(x.a, { id: 'reqMedicine' }))
                    ),
                  nt(
                    f.Scrollbars,
                    {
                      universal: !0,
                      autoHide: !0,
                      autoHeight: !0,
                      autoHeightMax: 688,
                      renderView: function (e) {
                        return nt(
                          'div',
                          Object(o.a)({}, e, {
                            style: it(
                              it({}, e.style),
                              {},
                              {
                                marginLeft: V ? e.style.marginRight : 0,
                                marginRight: V ? 0 : e.style.marginRight,
                              }
                            ),
                          })
                        );
                      },
                    },
                    nt(E, null, nt(Je, { data: R && q, onClick: A, active: B }))
                  )
                )
              )
            );
      };
    },
    kNTC: function (e, t, n) {
      'use strict';
      var o = n('q1tI'),
        i = n.n(o),
        r = n('zoLa'),
        a = n('vOnD'),
        s = n('bC0J'),
        l = a.e.div.withConfig({
          displayName: 'StoreNavstyle__StoreNavWrapper',
          componentId: 'z670xw-0',
        })([
          'width:100%;overflow:hidden;z-index:1;position:relative;background-color:#fff;height:55px;',
        ]),
        c = a.e.div.withConfig({
          displayName: 'StoreNavstyle__StoreNavLinks',
          componentId: 'z670xw-1',
        })(
          [
            'display:flex;flex-wrap:nowrap;align-items:flex-start;height:80px;overflow-y:hidden;overflow-x:auto;padding-top:15px;padding-bottom:25px;padding-left:15px;padding-right:15px;.store-nav-link{margin-right:10px;a{display:flex;align-items:center;font-size:14px;font-weight:700;color:#77798C;padding:5px 9px;border-radius:6px;line-height:1.2;white-space:nowrap;svg{margin-right:5px;flex-shrink:0;}&.current-page{color:',
            ';background-color:#f8f8f8;}}}',
          ],
          Object(s.a)('colors.primary', '#009E7F')
        ),
        d = l,
        p = i.a.createElement;
      t.a = function (e) {
        var t = e.className,
          n = e.items;
        return p(
          d,
          { className: t },
          p(
            c,
            null,
            (void 0 === n ? [] : n).map(function (e, t) {
              return p(r.a, {
                className: 'store-nav-link',
                href: e.link,
                label: e.label,
                icon: e.icon,
                key: t,
              });
            })
          )
        );
      };
    },
    kwfN: function (e, t, n) {
      'use strict';
      n.d(t, 'c', function () {
        return o;
      }),
        n.d(t, 'a', function () {
          return i;
        }),
        n.d(t, 'f', function () {
          return r;
        }),
        n.d(t, 'h', function () {
          return a;
        }),
        n.d(t, 'g', function () {
          return s;
        }),
        n.d(t, 'i', function () {
          return l;
        }),
        n.d(t, 'e', function () {
          return c;
        }),
        n.d(t, 'd', function () {
          return d;
        }),
        n.d(t, 'b', function () {
          return p;
        });
      var o = '/',
        i = '/filters',
        r = '/checkout',
        a = '/request-medicine',
        s = '/profile',
        l = '/order',
        c = '/order-received',
        d = '/offer',
        p = '/help';
    },
    sQCo: function (e, t, n) {
      'use strict';
      var o = n('q1tI'),
        i = n.n(o),
        r = n('vOnD'),
        a = n('bC0J'),
        s = r.e.div.withConfig({
          displayName: 'SearchBoxstyle__SearchWrapper',
          componentId: 'li71fg-0',
        })(['position:relative;width:100%;']),
        l = r.e.span.withConfig({
          displayName: 'SearchBoxstyle__CurrentType',
          componentId: 'li71fg-1',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;color:',
            ';line-height:38px;font-weight:700;padding:0 15px;background-color:',
            ';border-radius:6px;margin-left:5px;white-space:nowrap;',
          ],
          Object(a.a)('fontFamily.0', 'sans-serif'),
          Object(a.a)('fontSizes.1', '13'),
          Object(a.a)('colors.primary', '#009E7F'),
          Object(a.a)('colors.lightColor', '#f7f7f7')
        ),
        c = Object(r.e)('ul').withConfig({
          displayName: 'SearchBoxstyle__SearchResultWrapper',
          componentId: 'li71fg-2',
        })([
          'box-sizing:border-box;position:absolute;background-color:#fff;z-index:10;width:100%;list-style-type:none;border-radius:0 0 3px 3px;padding:0;width:100%;margin:4px 0 0;padding-bottom:10px;box-shadow:0 3px 10px rgba(0,0,0,0.16);opacity:1;transition:opacity ease-in-out 500ms;',
        ]),
        d = r.e.li.withConfig({
          displayName: 'SearchBoxstyle__ItemWrapper',
          componentId: 'li71fg-3',
        })(
          [
            'padding:0.7rem 1.5rem;cursor:pointer;font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';&:hover{background-color:',
            ';}',
          ],
          Object(a.a)('fontFamily.0', 'sans-serif'),
          Object(a.a)('fontSizes.2', '15'),
          Object(a.a)('fontWeights.3', '400'),
          Object(a.a)('colors.darkBold', '#0D1136'),
          Object(a.a)('colors.lightBg', '#f4f4f4')
        ),
        p = r.e.div.withConfig({
          displayName: 'SearchBoxstyle__SubmenuHeading',
          componentId: 'li71fg-4',
        })(
          [
            'display:flex;align-items:center;justify-content:space-between;padding:1.25rem 1.5rem 0.5rem;h3{font-size:',
            'px;font-family:',
            ';font-weight:',
            ';margin:0;}button{background-color:transparent;border:0;outline:0;font-family:',
            ';font-size:',
            'px;font-weight:',
            ';color:',
            ';box-shadow:none;cursor:pointer;padding:0;}',
          ],
          Object(a.a)('fontSizes.2', '15'),
          Object(a.a)('fontFamily.0', 'sans-serif'),
          Object(a.a)('fontWeights.6', '700'),
          Object(a.a)('fontFamily.0', 'sans-serif'),
          Object(a.a)('fontSizes.2', '15'),
          Object(a.a)('fontWeights.3', '400'),
          Object(a.a)('colors.darkBold', '#0D1136')
        ),
        u = r.e.input.withConfig({
          displayName: 'SearchBoxstyle__SearchBox',
          componentId: 'li71fg-5',
        })(
          [
            'flex-grow:1;font-size:',
            'px;color:',
            ';border:0;padding:0 20px;background-color:#ffffff;margin-right:-1px;height:48px;&:focus{outline:0;}&::-webkit-input-placeholder{font-size:',
            'px;color:',
            ';white-space:nowrap;text-overflow:ellipsis;}&:-moz-placeholder{font-size:',
            'px;color:',
            ';white-space:nowrap;text-overflow:ellipsis;}&::-moz-placeholder{font-size:',
            'px;color:',
            ';white-space:nowrap;text-overflow:ellipsis;}&:-ms-input-placeholder{font-size:',
            'px;color:',
            ';white-space:nowrap;text-overflow:ellipsis;}',
          ],
          Object(a.a)('fontSizes.2', '15'),
          Object(a.a)('colors.darkRegular', '#77798C'),
          Object(a.a)('fontSizes.2', '15'),
          Object(a.a)('colors.darkRegular', '#77798C'),
          Object(a.a)('fontSizes.2', '15'),
          Object(a.a)('colors.darkRegular', '#77798C'),
          Object(a.a)('fontSizes.2', '15'),
          Object(a.a)('colors.darkRegular', '#77798C'),
          Object(a.a)('fontSizes.2', '15'),
          Object(a.a)('colors.darkRegular', '#77798C')
        ),
        f = r.e.div.withConfig({
          displayName: 'SearchBoxstyle__SearchInputWrapper',
          componentId: 'li71fg-6',
        })(
          [
            'width:100%;form{display:flex;flex-direction:row;align-items:center;width:100%;height:100%;border-radius:6px;background-color:#ffffff;overflow:hidden;white-space:nowrap;}&.bordered{border:1px solid ',
            ';border-radius:6px;}.searchIcon{cursor:pointer;padding:0 15px;}',
          ],
          Object(a.a)('colors.borderColor', '#E6E6E6')
        ),
        h = r.e.button.withConfig({
          displayName: 'SearchBoxstyle__SearchButton',
          componentId: 'li71fg-7',
        })(
          [
            'background-color:',
            ';font-size:',
            'px;font-family:',
            ';font-weight:700;color:#ffffff;display:flex;height:48px;align-items:center;border:0;outline:0;padding-left:30px;padding-right:30px;cursor:pointer;flex-shrink:0;display:flex;align-items:center;.buttonText{padding-left:10px;}span{display:flex;}',
          ],
          Object(a.a)('colors.primary', '#009E7F'),
          Object(a.a)('fontSizes.2', '15'),
          Object(a.a)('fontFamily.0', 'sans-serif')
        ),
        g = r.e.div.withConfig({
          displayName: 'SearchBoxstyle__SearchBoxWrapper',
          componentId: 'li71fg-8',
        })(
          [
            'border:0;width:100%;opacity:1;transition:width ease-in-out 500ms,opacity ease-in-out 500ms;height:100%;flex-grow:1;font-size:',
            'px;color:',
            ';border:none;background-color:#ffffff;border-radius:6px 0 0 6px;display:flex;align-items:center;&.hideType{',
            '{display:none;}}&.collapsed{width:200px;background-color:#f7f7f7;border-radius:5px;flex-grow:0;transition:all ease-in-out 500ms;position:absolute;top:0;right:0;',
            '{border:1px solid transparent;border-radius:5px;}form,input{background-color:#f7f7f7;padding-left:0 !important;width:100%;&::-webkit-input-placeholder{font-size:',
            'px;color:',
            ';}&:-moz-placeholder{font-size:',
            'px;color:',
            ';}&::-moz-placeholder{font-size:',
            'px;color:',
            ';}&:-ms-input-placeholder{font-size:',
            'px;color:',
            ';}}}&.expanded{width:600px;position:absolute;top:0;right:0;transition:all ease-in-out 500ms;',
            '{border:1px solid ',
            ';border-radius:5px;}form,input{width:100%;padding-left:0 !important;&::-webkit-input-placeholder{font-size:',
            'px;color:',
            ';}&:-moz-placeholder{font-size:',
            'px;color:',
            ';}&::-moz-placeholder{font-size:',
            'px;color:',
            ';}&:-ms-input-placeholder{font-size:',
            'px;color:',
            ';}}}&.minimal{form,input{width:100%;padding-left:0 !important;}}',
          ],
          Object(a.a)('fontSizes.2', '15'),
          Object(a.a)('colors.darkRegular', '#77798C'),
          l,
          f,
          Object(a.a)('fontSizes.3', '16'),
          Object(a.a)('colorsdarkRegular', '#77798C'),
          Object(a.a)('fontSizes.3', '16'),
          Object(a.a)('colorsdarkRegular', '#77798C'),
          Object(a.a)('fontSizes.3', '16'),
          Object(a.a)('colorsdarkRegular', '#77798C'),
          Object(a.a)('fontSizes.3', '16'),
          Object(a.a)('colorsdarkRegular', '#77798C'),
          f,
          Object(a.a)('colors.borderColor', '#E6E6E6'),
          Object(a.a)('fontSizes.3', '16'),
          Object(a.a)('colorsdarkRegular', '#77798C'),
          Object(a.a)('fontSizes.3', '16'),
          Object(a.a)('colorsdarkRegular', '#77798C'),
          Object(a.a)('fontSizes.3', '16'),
          Object(a.a)('colorsdarkRegular', '#77798C'),
          Object(a.a)('fontSizes.3', '16'),
          Object(a.a)('colorsdarkRegular', '#77798C')
        ),
        m = s,
        b = n('zSVi'),
        y = n('MyaD');
      var v = n('24R3'),
        x = i.a.createElement,
        w = function (e) {
          var t = e.type,
            n = e.value,
            r = e.buttonText,
            a = e.buttonIcon,
            s = e.onChange,
            l = e.style,
            c = e.onKeyPress,
            d = e.onBlur,
            p = e.onClick,
            g = e.onFocus,
            m = e.bordered,
            w = e.showSvg,
            O = e.inputClass,
            j = (function () {
              var e = o.useContext(b.a);
              return Object(y.f)(e), e;
            })();
          return x(
            i.a.Fragment,
            null,
            x(
              f,
              {
                style: l,
                bordered: m,
                showSvg: w,
                className: ''.concat(O, ' ').concat(!0 === m ? 'bordered' : ''),
              },
              x(
                'form',
                {
                  onSubmit: function (e) {
                    e.preventDefault(), p(e);
                  },
                },
                w && x('span', { className: 'searchIcon', onClick: p }, a),
                x(u, {
                  type: t,
                  value: n,
                  placeholder: j.formatMessage({
                    id: 'searchPlaceholder',
                    defaultMessage: 'Search your products from here',
                  }),
                  onChange: s,
                  onFocus: g,
                  onKeyPress: c,
                  onBlur: d,
                }),
                !0 !== w
                  ? x(
                      h,
                      { onClick: p },
                      a,
                      '' !== r
                        ? x(
                            'span',
                            { className: 'buttonText' },
                            x(v.a, {
                              id: 'searchButtonText',
                              defaultMessage: r,
                            })
                          )
                        : ''
                    )
                  : ''
              )
            )
          );
        },
        O = n('wx14'),
        j = i.a.createElement,
        k = function (e) {
          var t = e.suggestions,
            n = e.itemStyle,
            o = e.wrapperStyle,
            i = e.setSuggestionValue,
            r = e.clearSearch;
          return j(
            c,
            o,
            j(
              p,
              null,
              j('h3', null, 'Recent Search'),
              ' ',
              j('button', { onClick: r }, 'Clear')
            ),
            t.map(function (e) {
              return j(
                d,
                Object(O.a)({}, n, {
                  key: e,
                  onClick: function () {
                    return (function (e) {
                      i(e);
                    })(e);
                  },
                }),
                e
              );
            })
          );
        },
        S = n('yBv+'),
        C = i.a.createElement,
        _ = function (e) {
          var t = e.suggestions,
            n = e.buttonText,
            i = e.buttonIcon,
            r = e.inputStyle,
            a = e.style,
            s = e.bordered,
            c = e.hideType,
            d = e.showSvg,
            p = e.autoSuggestion,
            u = e.className,
            f = e.handleSearch,
            h = e.onClick,
            b = e.value,
            y = e.expand,
            v = e.minimal,
            x = e.pathname,
            O = Object(o.useState)(''),
            j = O[0],
            S = O[1],
            _ = Object(o.useState)(!1),
            E = _[0],
            z = _[1],
            P = Object(o.useState)(!1),
            T = P[0],
            N = P[1],
            I = Object(o.useRef)(null);
          Object(o.useEffect)(function () {
            return (
              document.addEventListener('click', R, !1),
              function () {
                document.removeEventListener('click', R, !1);
              }
            );
          }, []);
          var R = function (e) {
            I.current && !I.current.contains(e.target) && (z(!1), N(!1));
          };
          return C(
            m,
            {
              className: u,
              ref: I,
              style: a,
              autoSuggestion: p,
              hideType: c,
              expand: y,
            },
            C(
              g,
              {
                className: ''
                  .concat(c ? 'hideType' : '', ' ')
                  .concat(!0 === y ? (T ? 'expanded' : 'collapsed') : '', ' ')
                  .concat(!0 === v ? 'minimal' : ''),
              },
              C(
                l,
                null,
                x && '/' !== x
                  ? (x.replace(/\//g, '').replace(/-/g, ' ') + '').replace(
                      /^([a-z])|\s+([a-z])/g,
                      function (e) {
                        return e.toUpperCase();
                      }
                    )
                  : 'Grocery'
              ),
              C(w, {
                type: 'text',
                value: b,
                onChange: function (e) {
                  S(e.target.value), z(!0), f(e.target.value);
                },
                onFocus: function () {
                  return N(!0);
                },
                onBlur: function () {
                  return N(!1);
                },
                buttonIcon: i,
                buttonText: n,
                style: r,
                bordered: s,
                showSvg: d,
                onClick: function () {
                  return h(j);
                },
              })
            ),
            p && E
              ? C(k, {
                  suggestions: t,
                  clearSearch: function () {
                    S('');
                  },
                  setSuggestionValue: function (e) {
                    return (function (e) {
                      S(e), z(!1);
                    })(e);
                  },
                })
              : null
          );
        };
      _.defaultProps = {
        bordered: !1,
        autoSuggestion: !1,
        buttonText: 'Search',
        buttonIcon: C(S.SearchIcon, null),
        inputStyle: { width: '100%' },
      };
      t.a = _;
    },
    uuth: function (e, t, n) {
      'use strict';
      (function (e) {
        n.d(t, 'a', function () {
          return y;
        });
        var o = n('1TsT'),
          i = (n('17x9'), n('q1tI')),
          r = n.n(i),
          a = n('TOwV');
        function s(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function l(e) {
          return (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function c(e, t) {
          return (c =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function d(e, t) {
          return !t || ('object' !== typeof t && 'function' !== typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function p(e) {
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
              o = l(e);
            if (t) {
              var i = l(this).constructor;
              n = Reflect.construct(o, arguments, i);
            } else n = o.apply(this, arguments);
            return d(this, n);
          };
        }
        function u(e, t) {
          var n,
            o =
              ((n = e),
              !isNaN(parseFloat(n)) && isFinite(n)
                ? parseFloat(n)
                : 'px' === n.slice(-2)
                ? parseFloat(n.slice(0, -2))
                : void 0);
          if ('number' === typeof o) return o;
          var i = (function (e) {
            if ('%' === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
          })(e);
          return 'number' === typeof i ? i * t : void 0;
        }
        function f(e) {
          return 'string' === typeof e.type;
        }
        var h;
        var g = [];
        function m(e) {
          g.push(e),
            h ||
              (h = setTimeout(function () {
                var e;
                for (h = null; (e = g.shift()); ) e();
              }, 0));
          var t = !0;
          return function () {
            if (t) {
              t = !1;
              var n = g.indexOf(e);
              -1 !== n &&
                (g.splice(n, 1),
                !g.length && h && (clearTimeout(h), (h = null)));
            }
          };
        }
        var b = {
            debug: !1,
            scrollableAncestor: void 0,
            children: void 0,
            topOffset: '0px',
            bottomOffset: '0px',
            horizontal: !1,
            onEnter: function () {},
            onLeave: function () {},
            onPositionChange: function () {},
            fireOnRapidScroll: !0,
          },
          y = (function (t) {
            !(function (e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && c(e, t);
            })(h, t);
            var n,
              i,
              l,
              d = p(h);
            function h(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, h),
                ((t = d.call(this, e)).refElement = function (e) {
                  t._ref = e;
                }),
                t
              );
            }
            return (
              (n = h),
              (i = [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this;
                    h.getWindow() &&
                      (this.cancelOnNextTick = m(function () {
                        e.cancelOnNextTick = null;
                        var t = e.props,
                          n = t.children;
                        t.debug,
                          (function (e, t) {
                            if (e && !f(e) && !t)
                              throw new Error(
                                '<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.'
                              );
                          })(n, e._ref),
                          (e._handleScroll = e._handleScroll.bind(e)),
                          (e.scrollableAncestor = e._findScrollableAncestor()),
                          (e.scrollEventListenerUnsubscribe = Object(
                            o.a
                          )(e.scrollableAncestor, 'scroll', e._handleScroll, {
                            passive: !0,
                          })),
                          (e.resizeEventListenerUnsubscribe = Object(
                            o.a
                          )(window, 'resize', e._handleScroll, {
                            passive: !0,
                          })),
                          e._handleScroll(null);
                      }));
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    var e = this;
                    h.getWindow() &&
                      this.scrollableAncestor &&
                      (this.cancelOnNextTick ||
                        (this.cancelOnNextTick = m(function () {
                          (e.cancelOnNextTick = null), e._handleScroll(null);
                        })));
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    h.getWindow() &&
                      (this.scrollEventListenerUnsubscribe &&
                        this.scrollEventListenerUnsubscribe(),
                      this.resizeEventListenerUnsubscribe &&
                        this.resizeEventListenerUnsubscribe(),
                      this.cancelOnNextTick && this.cancelOnNextTick());
                  },
                },
                {
                  key: '_findScrollableAncestor',
                  value: function () {
                    var t = this.props,
                      n = t.horizontal,
                      o = t.scrollableAncestor;
                    if (o)
                      return (function (t) {
                        return 'window' === t ? e.window : t;
                      })(o);
                    for (var i = this._ref; i.parentNode; ) {
                      if ((i = i.parentNode) === document.body) return window;
                      var r = window.getComputedStyle(i),
                        a =
                          (n
                            ? r.getPropertyValue('overflow-x')
                            : r.getPropertyValue('overflow-y')) ||
                          r.getPropertyValue('overflow');
                      if ('auto' === a || 'scroll' === a || 'overlay' === a)
                        return i;
                    }
                    return window;
                  },
                },
                {
                  key: '_handleScroll',
                  value: function (e) {
                    if (this._ref) {
                      var t = this._getBounds(),
                        n = (function (e) {
                          return e.viewportBottom - e.viewportTop === 0
                            ? 'invisible'
                            : (e.viewportTop <= e.waypointTop &&
                                e.waypointTop <= e.viewportBottom) ||
                              (e.viewportTop <= e.waypointBottom &&
                                e.waypointBottom <= e.viewportBottom) ||
                              (e.waypointTop <= e.viewportTop &&
                                e.viewportBottom <= e.waypointBottom)
                            ? 'inside'
                            : e.viewportBottom < e.waypointTop
                            ? 'below'
                            : e.waypointTop < e.viewportTop
                            ? 'above'
                            : 'invisible';
                        })(t),
                        o = this._previousPosition,
                        i = this.props,
                        r = (i.debug, i.onPositionChange),
                        a = i.onEnter,
                        s = i.onLeave,
                        l = i.fireOnRapidScroll;
                      if (((this._previousPosition = n), o !== n)) {
                        var c = {
                          currentPosition: n,
                          previousPosition: o,
                          event: e,
                          waypointTop: t.waypointTop,
                          waypointBottom: t.waypointBottom,
                          viewportTop: t.viewportTop,
                          viewportBottom: t.viewportBottom,
                        };
                        r.call(this, c),
                          'inside' === n
                            ? a.call(this, c)
                            : 'inside' === o && s.call(this, c),
                          l &&
                            (('below' === o && 'above' === n) ||
                              ('above' === o && 'below' === n)) &&
                            (a.call(this, {
                              currentPosition: 'inside',
                              previousPosition: o,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }),
                            s.call(this, {
                              currentPosition: n,
                              previousPosition: 'inside',
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }));
                      }
                    }
                  },
                },
                {
                  key: '_getBounds',
                  value: function () {
                    var e,
                      t,
                      n = this.props,
                      o = n.horizontal,
                      i = (n.debug, this._ref.getBoundingClientRect()),
                      r = i.left,
                      a = i.top,
                      s = i.right,
                      l = i.bottom,
                      c = o ? r : a,
                      d = o ? s : l;
                    this.scrollableAncestor === window
                      ? ((e = o ? window.innerWidth : window.innerHeight),
                        (t = 0))
                      : ((e = o
                          ? this.scrollableAncestor.offsetWidth
                          : this.scrollableAncestor.offsetHeight),
                        (t = o
                          ? this.scrollableAncestor.getBoundingClientRect().left
                          : this.scrollableAncestor.getBoundingClientRect()
                              .top));
                    var p = this.props,
                      f = p.bottomOffset;
                    return {
                      waypointTop: c,
                      waypointBottom: d,
                      viewportTop: t + u(p.topOffset, e),
                      viewportBottom: t + e - u(f, e),
                    };
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this,
                      t = this.props.children;
                    return t
                      ? f(t) || Object(a.isForwardRef)(t)
                        ? r.a.cloneElement(t, {
                            ref: function (n) {
                              e.refElement(n),
                                t.ref &&
                                  ('function' === typeof t.ref
                                    ? t.ref(n)
                                    : (t.ref.current = n));
                            },
                          })
                        : r.a.cloneElement(t, { innerRef: this.refElement })
                      : r.a.createElement('span', {
                          ref: this.refElement,
                          style: { fontSize: 0 },
                        });
                  },
                },
              ]) && s(n.prototype, i),
              l && s(n, l),
              h
            );
          })(r.a.PureComponent);
        (y.above = 'above'),
          (y.below = 'below'),
          (y.inside = 'inside'),
          (y.invisible = 'invisible'),
          (y.getWindow = function () {
            if ('undefined' !== typeof window) return window;
          }),
          (y.defaultProps = b),
          (y.displayName = 'Waypoint');
      }.call(this, n('yLpj')));
    },
    yWJx: function (e, t, n) {
      'use strict';
      var o = n('Ff2n'),
        i = n('rePB'),
        r = n('q1tI'),
        a = n.n(r),
        s = n('nOHt'),
        l = n('uuth'),
        c = n('sQCo'),
        d = n('s5Ij'),
        p = n('69Sb'),
        u = n('24R3'),
        f = n('vOnD'),
        h = n('bC0J'),
        g = f.e.div.withConfig({
          displayName: 'Bannerstyle__BannerWrapper',
          componentId: 'tr6zp2-0',
        })([
          'width:100%;min-height:100vh;display:flex;align-items:center;overflow:hidden;background-size:100%;background-position:bottom center;background-repeat:no-repeat;background-color:#f7f7f7;background-size:cover;@media (max-width:1400px){min-height:100vh;}@media (max-width:1200px){min-height:70vh;}@media (max-width:1050px){min-height:50vh;}@media (max-width:990px){min-height:260px;padding-top:50px;}@media (max-width:767px){min-height:160px;padding-top:45px;}',
        ]),
        m = Object(f.e)('div').withConfig({
          displayName: 'Bannerstyle__BannerComponent',
          componentId: 'tr6zp2-1',
        })([
          'width:100%;display:flex;flex-direction:column;align-items:center;.banner-search{@media (max-width:990px){display:none;}}',
        ]),
        b = Object(f.e)('h1').withConfig({
          displayName: 'Bannerstyle__BannerHeading',
          componentId: 'tr6zp2-2',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:700;color:',
            ';margin-bottom:15px;text-align:center;@media (max-width:1400px){font-size:',
            'px;}@media (max-width:990px){font-size:',
            'px;}@media (max-width:767px){font-size:17px;}',
          ],
          Object(h.a)('fontFamily.1', 'sans-serif'),
          Object(h.a)('fontSizes.6', '45'),
          Object(h.a)('colors.darkBold', '#005E7E'),
          Object(h.a)('fontSizes.6', '45'),
          Object(h.a)('fontSizes.5', '30')
        ),
        y = Object(f.e)('span').withConfig({
          displayName: 'Bannerstyle__BannerSubHeading',
          componentId: 'tr6zp2-3',
        })(
          [
            'font-family:',
            ';font-size:',
            'px;font-weight:700;color:',
            ';margin-bottom:60px;text-align:center;@media (max-width:1400px){font-size:',
            'px;}@media (max-width:990px){display:none;}',
          ],
          Object(h.a)('fontFamily.0', 'sans-serif'),
          Object(h.a)('fontSizes.3', '19'),
          Object(h.a)('colors.darkBold', '#005E7E'),
          Object(h.a)('fontSizes.2', '15')
        ),
        v = a.a.createElement;
      function x(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(n), !0).forEach(function (t) {
                Object(i.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      t.a = function (e) {
        var t = e.imageUrl,
          n = e.intlTitleId,
          i = e.intlDescriptionId,
          a = Object(r.useContext)(d.a),
          f = a.state,
          h = a.dispatch,
          x = Object(s.useRouter)(),
          O = x.pathname;
        var j = Object(p.b)(),
          k = Object(r.useCallback)(
            function () {
              return j({ type: 'SET_STICKY' });
            },
            [j]
          ),
          S = Object(r.useCallback)(
            function () {
              return j({ type: 'REMOVE_STICKY' });
            },
            [j]
          );
        return v(
          g,
          { style: { backgroundImage: 'url('.concat(t, ')') } },
          v(
            m,
            null,
            v(
              b,
              null,
              v(u.a, {
                id: n,
                defaultMessage: 'Set Your Title Through Language File',
                values: { minute: 90 },
              })
            ),
            v(
              y,
              null,
              v(u.a, {
                id: i,
                defaultMessage: 'Set Your Description Through Language File',
              })
            ),
            v(c.a, {
              style: {
                width: 700,
                boxShadow: '0 21px 36px rgba(0,0,0,0.05)',
                borderRadius: '6px',
                overflow: 'hidden',
              },
              handleSearch: function (e) {
                return (
                  (t = e),
                  void h({
                    type: 'UPDATE',
                    payload: w(w({}, f), {}, { text: t }),
                  })
                );
                var t;
              },
              value: f.text || '',
              onClick: function () {
                f.page;
                var e = Object(o.a)(f, ['page']);
                x.push(
                  { pathname: O, query: w({}, e) },
                  {
                    pathname: '/' === O ? ''.concat(O, 'filters') : O,
                    query: w({}, e),
                  },
                  { shallow: !0 }
                );
              },
              className: 'banner-search',
              pathname: O,
            }),
            v(l.a, {
              onEnter: S,
              onLeave: k,
              onPositionChange: function (e) {
                var t = e.currentPosition;
                (t && 'above' !== t) || k();
              },
            })
          )
        );
      };
    },
  },
]);
