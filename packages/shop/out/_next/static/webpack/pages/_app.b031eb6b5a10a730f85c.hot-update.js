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
        /* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @apollo/react-hooks */ './node_modules/@apollo/react-hooks/lib/react-hooks.esm.js'
        );
        /* harmony import */ var _graphql_query_category_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../../graphql/query/category.query */ './graphql/query/category.query.ts'
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

          var _useQuery = Object(
              _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__['useQuery']
            )(
              _graphql_query_category_query__WEBPACK_IMPORTED_MODULE_12__[
                'GET_CATEGORIES'
              ],
              {
                variables: {
                  category_id: null,
                  filter_by_name: null,
                },
              }
            ),
            data = _useQuery.data,
            error = _useQuery.error,
            refetch = _useQuery.refetch;

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

        _s(LeftMenu, '4mJna1t0bu/P7hz8ROVcdSjiXY8=', false, function () {
          return [
            _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__['useQuery'],
            next_router__WEBPACK_IMPORTED_MODULE_8__['useRouter'],
          ];
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9MYXlvdXRDb250YWluZXIvSGVhZGVyL01lbnUvTGVmdE1lbnUvTGVmdE1lbnUudHN4Il0sIm5hbWVzIjpbIkNhdGVnb3J5TWVudSIsIm9uQ2xpY2siLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImdldENhdGVnb3J5IiwibWFwIiwiaXRlbSIsImlkIiwic2x1ZyIsInRvTG93ZXJDYXNlIiwibmFtZSIsIlN0cmluZyIsIkxlZnRNZW51IiwibG9nbyIsInVzZVF1ZXJ5IiwiR0VUX0NBVEVHT1JJRVMiLCJ2YXJpYWJsZXMiLCJjYXRlZ29yeV9pZCIsImZpbHRlcl9ieV9uYW1lIiwiZXJyb3IiLCJyZWZldGNoIiwiY29uc29sZSIsImxvZyIsImNhdGVnb3JpZXMiLCJmaWx0ZXIiLCJwYXJlbnRfaWQiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImluaXRpYWxNZW51IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFjdGl2ZU1lbnUiLCJzZXRBY3RpdmVNZW51IiwidG9hc3QiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwibWVzc2FnZSIsImdldFNpdGVTZXR0aW5nIiwiaW1hZ2UiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQVlBO0FBV0E7QUFDQTtBQUdBO0FBRUE7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LFVBQVUsQ0FBRXJCLElBQVosSUFBaUJxQixVQUFqQixhQUFpQkEsVUFBakIsdUJBQWlCQSxVQUFVLENBQUVyQixJQUE3QixHQUFrQyxTQUR2QztBQUVDLG9CQUFjLEVBQUVWLElBQUksS0FBSStCLFVBQUosYUFBSUEsVUFBSix1QkFBSUEsVUFBVSxDQUFFckIsSUFBaEIsQ0FGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURILENBRkYsQ0FERixFQVVFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBVkYsQ0FISjtBQWtCRSxXQUFPLEVBQUUsTUFBQyxZQUFEO0FBQWMsVUFBSSxFQUFFVixJQUFwQjtBQUEwQixhQUFPLEVBQUVnQyxhQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbEJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLEVBNkJFLE1BQUMsNkRBQUQ7QUFBZ0IsYUFBUyxFQUFFLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkYsQ0FERjtBQWtDRCxDQXpFTTs7R0FBTXBCLFE7VUFFc0JFLDZELEVBTVpZLHFEOzs7TUFSVmQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmIwMzFlYjZiNWExMGE3MzBmODVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCB7XG4gIE1haW5NZW51LFxuICBTZWxlY3RlZEl0ZW0sXG4gIEljb24sXG4gIEFycm93LFxuICBMZWZ0TWVudUJveCxcbn0gZnJvbSAnLi9MZWZ0TWVudS5zdHlsZSc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICdjb21wb25lbnRzL1BvcG92ZXIvUG9wb3Zlcic7XG5pbXBvcnQge1xuICBNZW51RG93bixcbiAgRnJ1aXRzVmVnZXRhYmxlLFxuICBGYWNpYWxDYXJlLFxuICBIYW5kYmFnLFxuICBEcmVzc0ljb24sXG4gIEZ1cm5pdHVyZUljb24sXG4gIEJvb2tJY29uLFxuICBNZWRpY2luZUljb24sXG4gIFJlc3RhdXJhbnQsXG59IGZyb20gJ2NvbXBvbmVudHMvQWxsU3ZnSWNvbic7XG5cbmltcG9ydCBOYXZMaW5rIGZyb20gJ2NvbXBvbmVudHMvTmF2TGluay9OYXZMaW5rJztcbmltcG9ydCB7XG4gIEdST0NFUllfUEFHRSxcbiAgLy8gQ0xPVEhJTkcsXG4gIC8vIE1BS0VVUF9QQUdFLFxuICAvLyBCQUdTX1BBR0UsXG4gIC8vIEZVUk5JVFVSRV9QQUdFLFxuICAvLyBCT09LX1BBR0UsXG4gIC8vIE1FRElDSU5FX1BBR0UsXG4gIC8vIFJFU1RBVVJBTlRfUEFHRSxcbn0gZnJvbSAnY29uc3RhbnRzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5cbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvTG9nby9Mb2dvJztcblxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCB7IEdFVF9DQVRFR09SSUVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ3JhcGhxbC9xdWVyeS9jYXRlZ29yeS5xdWVyeSc7XG5pbXBvcnQgeyBvYmplY3QgfSBmcm9tICd5dXAnO1xuXG5cblxuLy8gY29uc3QgTUVOVV9JVEVNUyA9IFtcbi8vICAge1xuLy8gICAgIGxpbms6IEdST0NFUllfUEFHRSxcbi8vICAgICBpY29uOiA8RnJ1aXRzVmVnZXRhYmxlIC8+LFxuLy8gICAgIGxhYmVsOiAnR3JvY2VyeScsXG4vLyAgICAgaW50bElkOiAnMScsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBsaW5rOiBNQUtFVVBfUEFHRSxcbi8vICAgICBsYWJlbDogJ01ha2V1cCcsXG4vLyAgICAgaWNvbjogPEZhY2lhbENhcmUgLz4sXG4vLyAgICAgaW50bElkOiAnMicsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBsaW5rOiBCQUdTX1BBR0UsXG4vLyAgICAgbGFiZWw6ICdCYWdzJyxcbi8vICAgICBpY29uOiA8SGFuZGJhZyAvPixcbi8vICAgICBpbnRsSWQ6ICczJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGxpbms6IENMT1RISU5HLFxuLy8gICAgIGxhYmVsOiAnQ2xvdGhpbmcnLFxuLy8gICAgIGljb246IDxEcmVzc0ljb24gLz4sXG4vLyAgICAgaW50bElkOiAnNCcsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBsaW5rOiBGVVJOSVRVUkVfUEFHRSxcbi8vICAgICBsYWJlbDogJ0Z1cm5pdHVyZScsXG4vLyAgICAgaWNvbjogPEZ1cm5pdHVyZUljb24gd2lkdGg9JzE1cHgnIGhlaWdodD0nMTNweCcgLz4sXG4vLyAgICAgaW50bElkOiAnNScsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBsaW5rOiBCT09LX1BBR0UsXG4vLyAgICAgbGFiZWw6ICdCb29rJyxcbi8vICAgICBpY29uOiA8Qm9va0ljb24gd2lkdGg9JzE1cHgnIGhlaWdodD0nMTNweCcgLz4sXG4vLyAgICAgaW50bElkOiAnNicsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBsaW5rOiBNRURJQ0lORV9QQUdFLFxuLy8gICAgIGxhYmVsOiAnTWVkaWNpbmUnLFxuLy8gICAgIGljb246IDxNZWRpY2luZUljb24gd2lkdGg9JzE1cHgnIGhlaWdodD0nMTNweCcgLz4sXG4vLyAgICAgaW50bElkOiAnNycsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBsaW5rOiBSRVNUQVVSQU5UX1BBR0UsXG4vLyAgICAgbGFiZWw6ICdGb29kcycsXG4vLyAgICAgaWNvbjogPFJlc3RhdXJhbnQgLz4sXG4vLyAgICAgaW50bElkOiAnbmF2Rm9vZHNNZW51Jyxcbi8vICAgfSxcbi8vIF07XG5cbmNvbnN0IENhdGVnb3J5TWVudSA9ICh7IG9uQ2xpY2ssZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICBcbiAgICAgIHtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aD4wPyhcbiAgICAgICAgICBkYXRhLmdldENhdGVnb3J5Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGl0ZW0pfVxuICAgICAgICAgIGNsYXNzTmFtZT0nbWVudS1pdGVtJ1xuICAgICAgICAgIGhyZWY9e2AvJHtpdGVtLnNsdWcudG9Mb3dlckNhc2UoKX1gfVxuICAgICAgICAgIGxhYmVsPXtpdGVtLm5hbWV9XG4gICAgICAgICAgaWNvbj17PEhhbmRiYWcgLz59XG4gICAgICAgICAgaWNvbkNsYXNzPSdtZW51LWl0ZW0taWNvbidcbiAgICAgICAgICBpbnRsSWQ9e1N0cmluZyhpdGVtLmlkKX1cbiAgICAgICAgLz5cbiAgICAgICkpKTpcIm5vIHJlY29yZCBmb3VuZFwifVxuICAgIDwvPlxuICApO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgbG9nbzogc3RyaW5nO1xufTtcbi8vIGFsZXJ0KFwiY2FsbGVkXCIpXG5cbmV4cG9ydCBjb25zdCBMZWZ0TWVudTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbG9nbyB9KSA9PiB7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoR0VUX0NBVEVHT1JJRVMse1xuICAgIHZhcmlhYmxlcyA6IHtjYXRlZ29yeV9pZDpudWxsLGZpbHRlcl9ieV9uYW1lOiBudWxsfVxuICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiZGF0YUNhdGVnb3J5XCIsZGF0YSlcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGRhdGEgJiYgZGF0YS5nZXRDYXRlZ29yeS5maWx0ZXIoaXRlbSA9PiBpdGVtLnBhcmVudF9pZCA9PSBudWxsKVxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcblxuXG4gIGNvbnN0IGluaXRpYWxNZW51ID0gZGF0YSAmJiBkYXRhLmdldENhdGVnb3J5Lm1hcCgoaXRlbSkgPT4gaXRlbS5zbHVnID09PSBwYXRobmFtZSk7XG4gIGNvbnN0IFthY3RpdmVNZW51LCBzZXRBY3RpdmVNZW51XSA9IFJlYWN0LnVzZVN0YXRlKGRhdGEmJmRhdGEuZ2V0Q2F0ZWdvcnlbMF0pO1xuIFxuIFxuICBjb25zb2xlLmxvZyhcImRhdGFcIixkYXRhKVxuICBjb25zb2xlLmxvZyhcImRhdGFhY3RpdmVtZW51XCIsIGRhdGEgJiZhY3RpdmVNZW51KVxuICBpZiAoZXJyb3IpIHtcbiAgICBcbiAgICB0b2FzdC5lcnJvcihg8J+mhCBTb21lVGhpbmcgV2VudCBXcm9uZ2AsIHtcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gICAgICB9KVxuICAgICAgcmV0dXJuIDxkaXY+RXJyb3IhIHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcblxuICAgIFxuICB9XG5cblxuLy8gaWYoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoPjApe1xuLy8gICBkYXRhLmdldENhdGVnb3J5Lm1hcChpdGVtPT5jb25zb2xlLmxvZyhpdGVtLm5hbWUpKVxuLy8gfVxuXG4vLyBkYXRhLmdldENhdGVnb3J5Lm1hcCgoaXRlbSxpbmRleCk9PntpdGVtW2luZGV4XX0pXG4gIHJldHVybiAoXG4gICAgPExlZnRNZW51Qm94PlxuICAgICAgPExvZ29cbiAgICAgICAgaW1hZ2VVcmw9e2RhdGEmJmRhdGEuZ2V0U2l0ZVNldHRpbmcuaW1hZ2V9XG4gICAgICAgIGFsdD17J2V4cG9uZW50J31cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudShkYXRhICYmZGF0YS5nZXRDYXRlZ29yeVswXSl9XG4gICAgICAvPlxuXG4gICAgICA8TWFpbk1lbnU+XG4gICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgY2xhc3NOYW1lPSdyaWdodCdcbiAgICAgICAgICBoYW5kbGVyPXtcbiAgICAgICAgICAgIDxTZWxlY3RlZEl0ZW0+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxJY29uPnthY3RpdmVNZW51Py5pY29ufTwvSWNvbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBpZD17YWN0aXZlTWVudT8ubmFtZT9hY3RpdmVNZW51Py5uYW1lOlwiZmlsdGVyc1wifVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17ZGF0YSAmJiBhY3RpdmVNZW51Py5uYW1lfVxuICAgICAgICAgICAgICAgICAgLz4gXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxBcnJvdz5cbiAgICAgICAgICAgICAgICA8TWVudURvd24gLz5cbiAgICAgICAgICAgICAgPC9BcnJvdz5cbiAgICAgICAgICAgIDwvU2VsZWN0ZWRJdGVtPlxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250ZW50PXs8Q2F0ZWdvcnlNZW51IGRhdGE9e2RhdGF9IG9uQ2xpY2s9e3NldEFjdGl2ZU1lbnV9IC8+fVxuICAgICAgICAvPlxuICAgICAgPC9NYWluTWVudT5cbiAgICAgIDxUb2FzdENvbnRhaW5lciBhdXRvQ2xvc2U9ezIwMDB9IC8+XG5cbiAgICA8L0xlZnRNZW51Qm94PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=