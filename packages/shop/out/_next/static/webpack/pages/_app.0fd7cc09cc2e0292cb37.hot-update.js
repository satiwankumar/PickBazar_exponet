webpackHotUpdate_N_E('pages/_app', {
  /***/ './containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx':
    /*!**********************************************************************!*\
  !*** ./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx ***!
  \**********************************************************************/
    /*! exports provided: LeftMenu */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LeftMenu',
          function () {
            return LeftMenu;
          }
        );
        /* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/helpers/esm/slicedToArray */ './node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-toastify */ './node_modules/react-toastify/dist/react-toastify.esm.js'
        );
        /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! react-toastify/dist/ReactToastify.css */ './node_modules/react-toastify/dist/ReactToastify.css'
        );
        /* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _LeftMenu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./LeftMenu.style */ './containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.style.tsx'
        );
        /* harmony import */ var components_Popover_Popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! components/Popover/Popover */ './components/Popover/Popover.tsx'
        );
        /* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! components/AllSvgIcon */ './components/AllSvgIcon.tsx'
        );
        /* harmony import */ var components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! components/NavLink/NavLink */ './components/NavLink/NavLink.tsx'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! next/router */ './node_modules/next/dist/client/router.js'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! react-intl */ './node_modules/react-intl/lib/index.js'
        );
        /* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! components/Logo/Logo */ './components/Logo/Logo.tsx'
        );

        var _this = undefined,
          _jsxFileName =
            'E:\\satiwan\\Pick bazar\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\containers\\LayoutContainer\\Header\\Menu\\LeftMenu\\LeftMenu.tsx',
          _s = $RefreshSig$();

        var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

        // const MENU_ITEMS = [
        //   {
        //     link: GROCERY_PAGE,
        //     icon: <FruitsVegetable />,
        //     label: 'Grocery',
        //     intlId: '1',
        //   },
        //   {
        //     link: MAKEUP_PAGE,
        //     label: 'Makeup',
        //     icon: <FacialCare />,
        //     intlId: '2',
        //   },
        //   {
        //     link: BAGS_PAGE,
        //     label: 'Bags',
        //     icon: <Handbag />,
        //     intlId: '3',
        //   },
        //   {
        //     link: CLOTHING,
        //     label: 'Clothing',
        //     icon: <DressIcon />,
        //     intlId: '4',
        //   },
        //   {
        //     link: FURNITURE_PAGE,
        //     label: 'Furniture',
        //     icon: <FurnitureIcon width='15px' height='13px' />,
        //     intlId: '5',
        //   },
        //   {
        //     link: BOOK_PAGE,
        //     label: 'Book',
        //     icon: <BookIcon width='15px' height='13px' />,
        //     intlId: '6',
        //   },
        //   {
        //     link: MEDICINE_PAGE,
        //     label: 'Medicine',
        //     icon: <MedicineIcon width='15px' height='13px' />,
        //     intlId: '7',
        //   },
        //   {
        //     link: RESTAURANT_PAGE,
        //     label: 'Foods',
        //     icon: <Restaurant />,
        //     intlId: 'navFoodsMenu',
        //   },
        // ];
        var CategoryMenu = function CategoryMenu(_ref) {
          var _onClick = _ref.onClick,
            data = _ref.data;
          return __jsx(
            react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
            null,
            Object.keys(data).length > 0
              ? data.getCategory.map(function (item) {
                  return __jsx(
                    components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_7__[
                      'default'
                    ],
                    {
                      key: item.id,
                      onClick: function onClick() {
                        return _onClick(item);
                      },
                      className: 'menu-item',
                      href: '/'.concat(item.slug.toLowerCase()),
                      label: item.name,
                      icon: __jsx(
                        components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_6__[
                          'Handbag'
                        ],
                        {
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 111,
                            columnNumber: 17,
                          },
                        }
                      ),
                      iconClass: 'menu-item-icon',
                      intlId: String(item.id),
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 9,
                      },
                    }
                  );
                })
              : 'no record found'
          );
        };

        _c = CategoryMenu;
        // alert("called")
        var LeftMenu = function LeftMenu(_ref2) {
          _s();

          var logo = _ref2.logo;
          // const { data, error, refetch } = useQuery(GET_CATEGORIES,{
          //   variables : {category_id:null,filter_by_name: null}
          // });
          console.log('dataCategory', data);
          var categories =
            data &&
            data.getCategory.filter(function (item) {
              return item.parent_id == null;
            });

          var _useRouter = Object(
              next_router__WEBPACK_IMPORTED_MODULE_8__['useRouter']
            )(),
            pathname = _useRouter.pathname;

          var initialMenu =
            data &&
            data.getCategory.map(function (item) {
              return item.slug === pathname;
            });

          var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(
              data && data.getCategory[0]
            ),
            _React$useState2 = Object(
              _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ]
            )(_React$useState, 2),
            activeMenu = _React$useState2[0],
            setActiveMenu = _React$useState2[1];

          console.log('data', data);
          console.log('dataactivemenu', data && activeMenu);

          if (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__['toast'].error(
              '\uD83E\uDD84 SomeThing Went Wrong',
              {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
            return __jsx(
              'div',
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 14,
                },
              },
              'Error! ',
              error.message
            );
          } // if(Object.keys(data).length>0){
          //   data.getCategory.map(item=>console.log(item.name))
          // }
          // data.getCategory.map((item,index)=>{item[index]})

          return __jsx(
            _LeftMenu_style__WEBPACK_IMPORTED_MODULE_4__['LeftMenuBox'],
            {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 5,
              },
            },
            __jsx(
              components_Logo_Logo__WEBPACK_IMPORTED_MODULE_10__['default'],
              {
                imageUrl: data && data.getSiteSetting.image,
                alt: 'exponent',
                onClick: function onClick() {
                  return setActiveMenu(data && data.getCategory[0]);
                },
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 7,
                },
              }
            ),
            __jsx(
              _LeftMenu_style__WEBPACK_IMPORTED_MODULE_4__['MainMenu'],
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 7,
                },
              },
              __jsx(
                components_Popover_Popover__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ],
                {
                  className: 'right',
                  handler: __jsx(
                    _LeftMenu_style__WEBPACK_IMPORTED_MODULE_4__[
                      'SelectedItem'
                    ],
                    {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 176,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      'span',
                      {
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 177,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        _LeftMenu_style__WEBPACK_IMPORTED_MODULE_4__['Icon'],
                        {
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 178,
                            columnNumber: 17,
                          },
                        },
                        activeMenu === null || activeMenu === void 0
                          ? void 0
                          : activeMenu.icon
                      ),
                      __jsx(
                        'span',
                        {
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 179,
                            columnNumber: 17,
                          },
                        },
                        __jsx(
                          react_intl__WEBPACK_IMPORTED_MODULE_9__[
                            'FormattedMessage'
                          ],
                          {
                            id: (
                              activeMenu === null || activeMenu === void 0
                                ? void 0
                                : activeMenu.name
                            )
                              ? activeMenu === null || activeMenu === void 0
                                ? void 0
                                : activeMenu.name
                              : 'filters',
                            defaultMessage:
                              data &&
                              (activeMenu === null || activeMenu === void 0
                                ? void 0
                                : activeMenu.name),
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 180,
                              columnNumber: 20,
                            },
                          }
                        )
                      )
                    ),
                    __jsx(
                      _LeftMenu_style__WEBPACK_IMPORTED_MODULE_4__['Arrow'],
                      {
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 186,
                          columnNumber: 15,
                        },
                      },
                      __jsx(
                        components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_6__[
                          'MenuDown'
                        ],
                        {
                          __self: _this,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 187,
                            columnNumber: 17,
                          },
                        }
                      )
                    )
                  ),
                  content: __jsx(CategoryMenu, {
                    data: data,
                    onClick: setActiveMenu,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 20,
                    },
                  }),
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 9,
                  },
                }
              )
            ),
            __jsx(
              react_toastify__WEBPACK_IMPORTED_MODULE_2__['ToastContainer'],
              {
                autoClose: 2000,
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 7,
                },
              }
            )
          );
        };

        _s(LeftMenu, 'y8jK32LOr4YZt4PxNRRW0Nr1e0s=', false, function () {
          return [next_router__WEBPACK_IMPORTED_MODULE_8__['useRouter']];
        });

        _c2 = LeftMenu;

        var _c, _c2;

        $RefreshReg$(_c, 'CategoryMenu');
        $RefreshReg$(_c2, 'LeftMenu');

        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (
          typeof self !== 'undefined' &&
          // AMP / No-JS mode does not inject these helpers:
          '$RefreshHelpers$' in self
        ) {
          var currentExports = module.__proto__.exports;
          var prevExports =
            (_b =
              (_a = module.hot.data) === null || _a === void 0
                ? void 0
                : _a.prevExports) !== null && _b !== void 0
              ? _b
              : null;
          // This cannot happen in MainTemplate because the exports mismatch between
          // templating and execution.
          self.$RefreshHelpers$.registerExportsForReactRefresh(
            currentExports,
            module.i
          );
          // A module can be accepted automatically based on its exports, e.g. when
          // it is a Refresh Boundary.
          if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
              data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
              // A boundary can become ineligible if its exports are incompatible
              // with the previous exports.
              //
              // For example, if you add/remove/change exports, we'll want to
              // re-execute the importing modules, and force those components to
              // re-render. Similarly, if you convert a class component to a
              // function, we want to invalidate the boundary.
              if (
                self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                  prevExports,
                  currentExports
                )
              ) {
                module.hot.invalidate();
              } else {
                self.$RefreshHelpers$.scheduleUpdate();
              }
            }
          } else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
              module.hot.invalidate();
            }
          }
        }

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ './node_modules/webpack/buildin/harmony-module.js'
        )(module)
      ));

      /***/
    },

  /***/ './graphql/query/category.query.ts': false,
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9MYXlvdXRDb250YWluZXIvSGVhZGVyL01lbnUvTGVmdE1lbnUvTGVmdE1lbnUudHN4Il0sIm5hbWVzIjpbIkNhdGVnb3J5TWVudSIsIm9uQ2xpY2siLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImdldENhdGVnb3J5IiwibWFwIiwiaXRlbSIsImlkIiwic2x1ZyIsInRvTG93ZXJDYXNlIiwibmFtZSIsIlN0cmluZyIsIkxlZnRNZW51IiwibG9nbyIsImNvbnNvbGUiLCJsb2ciLCJjYXRlZ29yaWVzIiwiZmlsdGVyIiwicGFyZW50X2lkIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJpbml0aWFsTWVudSIsIlJlYWN0IiwidXNlU3RhdGUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsImVycm9yIiwidG9hc3QiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwibWVzc2FnZSIsImdldFNpdGVTZXR0aW5nIiwiaW1hZ2UiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFZQTtBQVdBO0FBQ0E7QUFHQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFBQSxNQURGLENBVkYsQ0FISjtBQWtCRSxXQUFPLEVBQUUsTUFBQyxZQUFEO0FBQWMsVUFBSSxFQUFFVixJQUFwQjtBQUEwQixhQUFPLEVBQUV5QixhQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbEJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLEVBNkJFLE1BQUMsNkRBQUQ7QUFBZ0IsYUFBUyxFQUFFLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkYsQ0FERjtBQWtDRCxDQXpFTTs7R0FBTWIsUTtVQVFVTyxxRDs7O01BUlZQLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wZmQ3Y2MwOWNjMmUwMjkyY2IzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQge1xuICBNYWluTWVudSxcbiAgU2VsZWN0ZWRJdGVtLFxuICBJY29uLFxuICBBcnJvdyxcbiAgTGVmdE1lbnVCb3gsXG59IGZyb20gJy4vTGVmdE1lbnUuc3R5bGUnO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnY29tcG9uZW50cy9Qb3BvdmVyL1BvcG92ZXInO1xuaW1wb3J0IHtcbiAgTWVudURvd24sXG4gIEZydWl0c1ZlZ2V0YWJsZSxcbiAgRmFjaWFsQ2FyZSxcbiAgSGFuZGJhZyxcbiAgRHJlc3NJY29uLFxuICBGdXJuaXR1cmVJY29uLFxuICBCb29rSWNvbixcbiAgTWVkaWNpbmVJY29uLFxuICBSZXN0YXVyYW50LFxufSBmcm9tICdjb21wb25lbnRzL0FsbFN2Z0ljb24nO1xuXG5pbXBvcnQgTmF2TGluayBmcm9tICdjb21wb25lbnRzL05hdkxpbmsvTmF2TGluayc7XG5pbXBvcnQge1xuICBHUk9DRVJZX1BBR0UsXG4gIC8vIENMT1RISU5HLFxuICAvLyBNQUtFVVBfUEFHRSxcbiAgLy8gQkFHU19QQUdFLFxuICAvLyBGVVJOSVRVUkVfUEFHRSxcbiAgLy8gQk9PS19QQUdFLFxuICAvLyBNRURJQ0lORV9QQUdFLFxuICAvLyBSRVNUQVVSQU5UX1BBR0UsXG59IGZyb20gJ2NvbnN0YW50cy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL0xvZ28vTG9nbyc7XG5cbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5pbXBvcnQgeyBHRVRfQ0FURUdPUklFUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2dyYXBocWwvcXVlcnkvY2F0ZWdvcnkucXVlcnknO1xuaW1wb3J0IHsgb2JqZWN0IH0gZnJvbSAneXVwJztcblxuXG5cbi8vIGNvbnN0IE1FTlVfSVRFTVMgPSBbXG4vLyAgIHtcbi8vICAgICBsaW5rOiBHUk9DRVJZX1BBR0UsXG4vLyAgICAgaWNvbjogPEZydWl0c1ZlZ2V0YWJsZSAvPixcbi8vICAgICBsYWJlbDogJ0dyb2NlcnknLFxuLy8gICAgIGludGxJZDogJzEnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbGluazogTUFLRVVQX1BBR0UsXG4vLyAgICAgbGFiZWw6ICdNYWtldXAnLFxuLy8gICAgIGljb246IDxGYWNpYWxDYXJlIC8+LFxuLy8gICAgIGludGxJZDogJzInLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbGluazogQkFHU19QQUdFLFxuLy8gICAgIGxhYmVsOiAnQmFncycsXG4vLyAgICAgaWNvbjogPEhhbmRiYWcgLz4sXG4vLyAgICAgaW50bElkOiAnMycsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBsaW5rOiBDTE9USElORyxcbi8vICAgICBsYWJlbDogJ0Nsb3RoaW5nJyxcbi8vICAgICBpY29uOiA8RHJlc3NJY29uIC8+LFxuLy8gICAgIGludGxJZDogJzQnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbGluazogRlVSTklUVVJFX1BBR0UsXG4vLyAgICAgbGFiZWw6ICdGdXJuaXR1cmUnLFxuLy8gICAgIGljb246IDxGdXJuaXR1cmVJY29uIHdpZHRoPScxNXB4JyBoZWlnaHQ9JzEzcHgnIC8+LFxuLy8gICAgIGludGxJZDogJzUnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbGluazogQk9PS19QQUdFLFxuLy8gICAgIGxhYmVsOiAnQm9vaycsXG4vLyAgICAgaWNvbjogPEJvb2tJY29uIHdpZHRoPScxNXB4JyBoZWlnaHQ9JzEzcHgnIC8+LFxuLy8gICAgIGludGxJZDogJzYnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbGluazogTUVESUNJTkVfUEFHRSxcbi8vICAgICBsYWJlbDogJ01lZGljaW5lJyxcbi8vICAgICBpY29uOiA8TWVkaWNpbmVJY29uIHdpZHRoPScxNXB4JyBoZWlnaHQ9JzEzcHgnIC8+LFxuLy8gICAgIGludGxJZDogJzcnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbGluazogUkVTVEFVUkFOVF9QQUdFLFxuLy8gICAgIGxhYmVsOiAnRm9vZHMnLFxuLy8gICAgIGljb246IDxSZXN0YXVyYW50IC8+LFxuLy8gICAgIGludGxJZDogJ25hdkZvb2RzTWVudScsXG4vLyAgIH0sXG4vLyBdO1xuXG5jb25zdCBDYXRlZ29yeU1lbnUgPSAoeyBvbkNsaWNrLGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgXG4gICAgICB7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGg+MD8oXG4gICAgICAgICAgZGF0YS5nZXRDYXRlZ29yeS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhpdGVtKX1cbiAgICAgICAgICBjbGFzc05hbWU9J21lbnUtaXRlbSdcbiAgICAgICAgICBocmVmPXtgLyR7aXRlbS5zbHVnLnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICBsYWJlbD17aXRlbS5uYW1lfVxuICAgICAgICAgIGljb249ezxIYW5kYmFnIC8+fVxuICAgICAgICAgIGljb25DbGFzcz0nbWVudS1pdGVtLWljb24nXG4gICAgICAgICAgaW50bElkPXtTdHJpbmcoaXRlbS5pZCl9XG4gICAgICAgIC8+XG4gICAgICApKSk6XCJubyByZWNvcmQgZm91bmRcIn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGxvZ286IHN0cmluZztcbn07XG4vLyBhbGVydChcImNhbGxlZFwiKVxuXG5leHBvcnQgY29uc3QgTGVmdE1lbnU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGxvZ28gfSkgPT4ge1xuXG4gIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KEdFVF9DQVRFR09SSUVTLHtcbiAgLy8gICB2YXJpYWJsZXMgOiB7Y2F0ZWdvcnlfaWQ6bnVsbCxmaWx0ZXJfYnlfbmFtZTogbnVsbH1cbiAgLy8gfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImRhdGFDYXRlZ29yeVwiLGRhdGEpXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBkYXRhICYmIGRhdGEuZ2V0Q2F0ZWdvcnkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wYXJlbnRfaWQgPT0gbnVsbClcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG5cblxuICBjb25zdCBpbml0aWFsTWVudSA9IGRhdGEgJiYgZGF0YS5nZXRDYXRlZ29yeS5tYXAoKGl0ZW0pID0+IGl0ZW0uc2x1ZyA9PT0gcGF0aG5hbWUpO1xuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSBSZWFjdC51c2VTdGF0ZShkYXRhJiZkYXRhLmdldENhdGVnb3J5WzBdKTtcbiBcbiBcbiAgY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YSlcbiAgY29uc29sZS5sb2coXCJkYXRhYWN0aXZlbWVudVwiLCBkYXRhICYmYWN0aXZlTWVudSlcbiAgaWYgKGVycm9yKSB7XG4gICAgXG4gICAgdG9hc3QuZXJyb3IoYPCfpoQgU29tZVRoaW5nIFdlbnQgV3JvbmdgLCB7XG4gICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgIGF1dG9DbG9zZTogMzAwMCxcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgICAgfSlcbiAgICAgIHJldHVybiA8ZGl2PkVycm9yISB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XG5cbiAgICBcbiAgfVxuXG5cbi8vIGlmKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aD4wKXtcbi8vICAgZGF0YS5nZXRDYXRlZ29yeS5tYXAoaXRlbT0+Y29uc29sZS5sb2coaXRlbS5uYW1lKSlcbi8vIH1cblxuLy8gZGF0YS5nZXRDYXRlZ29yeS5tYXAoKGl0ZW0saW5kZXgpPT57aXRlbVtpbmRleF19KVxuICByZXR1cm4gKFxuICAgIDxMZWZ0TWVudUJveD5cbiAgICAgIDxMb2dvXG4gICAgICAgIGltYWdlVXJsPXtkYXRhJiZkYXRhLmdldFNpdGVTZXR0aW5nLmltYWdlfVxuICAgICAgICBhbHQ9eydleHBvbmVudCd9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoZGF0YSAmJmRhdGEuZ2V0Q2F0ZWdvcnlbMF0pfVxuICAgICAgLz5cblxuICAgICAgPE1haW5NZW51PlxuICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgIGNsYXNzTmFtZT0ncmlnaHQnXG4gICAgICAgICAgaGFuZGxlcj17XG4gICAgICAgICAgICA8U2VsZWN0ZWRJdGVtPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8SWNvbj57YWN0aXZlTWVudT8uaWNvbn08L0ljb24+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2FjdGl2ZU1lbnU/Lm5hbWU/YWN0aXZlTWVudT8ubmFtZTpcImZpbHRlcnNcIn1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9e2RhdGEgJiYgYWN0aXZlTWVudT8ubmFtZX1cbiAgICAgICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8QXJyb3c+XG4gICAgICAgICAgICAgICAgPE1lbnVEb3duIC8+XG4gICAgICAgICAgICAgIDwvQXJyb3c+XG4gICAgICAgICAgICA8L1NlbGVjdGVkSXRlbT5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGVudD17PENhdGVnb3J5TWVudSBkYXRhPXtkYXRhfSBvbkNsaWNrPXtzZXRBY3RpdmVNZW51fSAvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvTWFpbk1lbnU+XG4gICAgICA8VG9hc3RDb250YWluZXIgYXV0b0Nsb3NlPXsyMDAwfSAvPlxuXG4gICAgPC9MZWZ0TWVudUJveD5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
