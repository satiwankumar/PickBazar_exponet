_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [32],
  {
    '2+Tz': function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/humidifier_pads',
        function () {
          return i('EhF2');
        },
      ]);
    },
    EhF2: function (e, t, i) {
      'use strict';
      i.r(t);
      var a = i('q1tI'),
        n = i.n(a),
        l = i('nOHt'),
        r = i('Bo8V'),
        c = i('ZNCQ'),
        o = i('ddIo'),
        u = i('kNTC'),
        d = i('e3cP'),
        p = i('yWJx'),
        s = i('j5Ri'),
        y = i('LzHB'),
        T = i('NuC5'),
        f = i('GOnK'),
        v = i('hD4N'),
        w = i('OKUF'),
        m = n.a.createElement;
      t.default = Object(c.a)(function (e) {
        var t = e.deviceType,
          i = Object(l.useRouter)().query;
        console.log('query', i);
        var a = n.a.useRef(null);
        return (
          n.a.useEffect(
            function () {
              (i.text || i.category) &&
                a.current &&
                window.scrollTo({
                  top: a.current.offsetTop - 110,
                  behavior: 'smooth',
                });
            },
            [i]
          ),
          m(
            n.a.Fragment,
            null,
            m(o.a, {
              title: 'Humidifier Pads - Exponet',
              description: ' Humidifier Pads Details',
            }),
            m(
              r.a,
              null,
              m(p.a, {
                intlTitleId: 'groceriesTitle',
                intlDescriptionId: 'groceriesSubTitle',
                imageUrl: 'https://www.exponet.ca/images/background/intro.jpg',
              }),
              t.desktop
                ? m(
                    n.a.Fragment,
                    null,
                    m(
                      f.c,
                      null,
                      m(u.a, { items: w.a }),
                      m(s.a, { type: '2', deviceType: t })
                    ),
                    m(
                      f.e,
                      null,
                      m(
                        'div',
                        { style: { margin: '0 -10px' } },
                        m(d.a, { deviceType: t, data: v.a })
                      )
                    ),
                    m(
                      f.b,
                      null,
                      m(f.h, null, m(s.a, { type: '2', deviceType: t })),
                      m(
                        f.a,
                        null,
                        m(
                          'div',
                          { ref: a },
                          m(y.a, { type: '2', deviceType: t, fetchLimit: 16 })
                        )
                      )
                    )
                  )
                : m(
                    f.b,
                    null,
                    m(u.a, { items: w.a }),
                    m(s.a, { type: '2', deviceType: t }),
                    m(
                      f.e,
                      null,
                      m(
                        'div',
                        { style: { margin: '0 -10px' } },
                        m(d.a, { deviceType: t, data: v.a })
                      )
                    ),
                    m(
                      f.a,
                      { style: { width: '100%' } },
                      m(y.a, { type: '2', deviceType: t, fetchLimit: 16 })
                    )
                  ),
              m(T.a, { deviceType: t })
            )
          )
        );
      });
    },
  },
  [['2+Tz', 1, 0, 7, 2, 3, 5, 4, 6, 8, 9, 12, 11, 10, 13, 14, 15, 16, 17, 18]],
]);