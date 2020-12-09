webpackHotUpdate_N_E('pages/_app', {
  /***/ '../../node_modules/@wry/equality/lib/equality.esm.js': false,

  /***/ '../../node_modules/apollo-boost/lib/bundle.esm.js': false,

  /***/ '../../node_modules/apollo-boost/node_modules/apollo-cache-inmemory/lib/bundle.esm.js': false,

  /***/ '../../node_modules/apollo-boost/node_modules/apollo-client/bundle.esm.js': false,

  /***/ '../../node_modules/apollo-boost/node_modules/apollo-link-http/lib/bundle.esm.js': false,

  /***/ '../../node_modules/apollo-boost/node_modules/graphql-tag/src/index.js': false,

  /***/ '../../node_modules/apollo-cache/lib/bundle.esm.js': false,

  /***/ '../../node_modules/apollo-link-error/lib/bundle.esm.js': false,

  /***/ '../../node_modules/apollo-link-http-common/lib/bundle.esm.js': false,

  /***/ '../../node_modules/apollo-link/lib/bundle.esm.js': false,

  /***/ '../../node_modules/apollo-utilities/lib/bundle.esm.js': false,

  /***/ '../../node_modules/fast-json-stable-stringify/index.js': false,

  /***/ '../../node_modules/graphql/error/GraphQLError.mjs': false,

  /***/ '../../node_modules/graphql/error/syntaxError.mjs': false,

  /***/ '../../node_modules/graphql/jsutils/defineToJSON.mjs': false,

  /***/ '../../node_modules/graphql/jsutils/defineToStringTag.mjs': false,

  /***/ '../../node_modules/graphql/jsutils/devAssert.mjs': false,

  /***/ '../../node_modules/graphql/jsutils/inspect.mjs': false,

  /***/ '../../node_modules/graphql/jsutils/isObjectLike.mjs': false,

  /***/ '../../node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs': false,

  /***/ '../../node_modules/graphql/language/blockString.mjs': false,

  /***/ '../../node_modules/graphql/language/directiveLocation.mjs': false,

  /***/ '../../node_modules/graphql/language/kinds.mjs': false,

  /***/ '../../node_modules/graphql/language/lexer.mjs': false,

  /***/ '../../node_modules/graphql/language/location.mjs': false,

  /***/ '../../node_modules/graphql/language/parser.mjs': false,

  /***/ '../../node_modules/graphql/language/printLocation.mjs': false,

  /***/ '../../node_modules/graphql/language/printer.mjs': false,

  /***/ '../../node_modules/graphql/language/source.mjs': false,

  /***/ '../../node_modules/graphql/language/tokenKind.mjs': false,

  /***/ '../../node_modules/graphql/language/visitor.mjs': false,

  /***/ '../../node_modules/optimism/lib/bundle.esm.js': false,

  /***/ '../../node_modules/optimism/node_modules/@wry/context/lib/context.esm.js': false,

  /***/ '../../node_modules/symbol-observable/es/index.js': false,

  /***/ '../../node_modules/symbol-observable/es/ponyfill.js': false,

  /***/ '../../node_modules/ts-invariant/lib/invariant.esm.js': false,

  /***/ '../../node_modules/tslib/tslib.es6.js': false,

  /***/ '../../node_modules/zen-observable-ts/lib/bundle.esm.js': false,

  /***/ '../../node_modules/zen-observable/index.js': false,

  /***/ '../../node_modules/zen-observable/lib/Observable.js': false,

  /***/ './components/AllSvgIcon.tsx': false,

  /***/ './components/Button/Button.style.tsx': false,

  /***/ './components/Button/Button.tsx': false,

  /***/ './components/Logo/Logo.style.tsx': false,

  /***/ './components/Logo/Logo.tsx': false,

  /***/ './components/NavLink/NavLink.tsx': false,

  /***/ './components/Popover/Popover.style.tsx': false,

  /***/ './components/Popover/Popover.tsx': false,

  /***/ './components/Popover/useOnClickOutside.js': false,

  /***/ './components/SearchBox/Input.tsx': false,

  /***/ './components/SearchBox/SearchBox.style.tsx': false,

  /***/ './components/SearchBox/SearchBox.tsx': false,

  /***/ './components/SearchBox/SearchResults.tsx': false,

  /***/ './components/helpers/customVariant.ts': false,

  /***/ './containers/LayoutContainer/AppLayout.tsx':
    /*!**************************************************!*\
  !*** ./containers/LayoutContainer/AppLayout.tsx ***!
  \**************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/dynamic */ './node_modules/next/dist/next-server/lib/dynamic.js'
        );
        /* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_dynamic__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! next/router */ './node_modules/next/dist/client/router.js'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! react-stickynode */ './node_modules/react-stickynode/index.js'
        );
        /* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          react_stickynode__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! contexts/app/app.provider */ './contexts/app/app.provider.ts'
        );
        /* harmony import */ var _Layout_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./Layout.style */ './containers/LayoutContainer/Layout.style.tsx'
        );
        /* harmony import */ var _is_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./is-home-page */ './containers/LayoutContainer/is-home-page.ts'
        );
        var _this = undefined,
          _jsxFileName =
            'E:\\satiwan\\Pick bazar\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\containers\\LayoutContainer\\AppLayout.tsx',
          _s = $RefreshSig$();

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        var MobileHeader = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(
          (_c = function _c() {
            return __webpack_require__
              .e(/*! import() */ 0)
              .then(
                __webpack_require__.bind(
                  null,
                  /*! ./Header/MobileHeader */ './containers/LayoutContainer/Header/MobileHeader.tsx'
                )
              );
          }),
          {
            ssr: false,
            loadableGenerated: {
              webpack: function webpack() {
                return [
                  /*require.resolve*/ /*! ./Header/MobileHeader */ './containers/LayoutContainer/Header/MobileHeader.tsx',
                ];
              },
              modules: ['./Header/MobileHeader'],
            },
          }
        );
        _c2 = MobileHeader;

        var Layout = function Layout(_ref) {
          _s();

          var className = _ref.className,
            children = _ref.children,
            _ref$deviceType = _ref.deviceType,
            mobile = _ref$deviceType.mobile,
            tablet = _ref$deviceType.tablet,
            desktop = _ref$deviceType.desktop,
            token = _ref.token;
          var isSticky = Object(
            contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_4__[
              'useStickyState'
            ]
          )('isSticky');

          var _useRouter = Object(
              next_router__WEBPACK_IMPORTED_MODULE_2__['useRouter']
            )(),
            pathname = _useRouter.pathname;

          console.log('pathnamelayout', pathname);
          var isHomePage = Object(
            _is_home_page__WEBPACK_IMPORTED_MODULE_6__['isCategoryPage']
          )(pathname);
          return __jsx(
            _Layout_style__WEBPACK_IMPORTED_MODULE_5__['LayoutWrapper'],
            {
              className: 'layoutWrapper '.concat(className),
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 5,
              },
            },
            (mobile || tablet) &&
              __jsx(
                react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                  enabled: isSticky,
                  innerZ: 1001,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 9,
                  },
                },
                __jsx(MobileHeader, {
                  className: ''
                    .concat(isSticky ? 'sticky' : 'unSticky', ' ')
                    .concat(isHomePage ? 'home' : ''),
                  pathname: pathname,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 11,
                  },
                })
              ),
            desktop &&
              __jsx(
                react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                  enabled: isSticky,
                  innerZ: 1001,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 9,
                  },
                },
                __jsx(MobileHeader, {
                  className: ''
                    .concat(isSticky ? 'sticky' : 'unSticky', ' ')
                    .concat(isHomePage ? 'home' : '', ' desktop'),
                  pathname: pathname,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 11,
                  },
                })
              ),
            children
          );
        };

        _s(Layout, 'IhE9stnhPrOCSyjKUZyL2YexZII=', false, function () {
          return [
            contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_4__[
              'useStickyState'
            ],
            next_router__WEBPACK_IMPORTED_MODULE_2__['useRouter'],
          ];
        });

        _c3 = Layout;
        /* harmony default export */ __webpack_exports__['default'] = Layout;

        var _c, _c2, _c3;

        $RefreshReg$(_c, 'MobileHeader$dynamic');
        $RefreshReg$(_c2, 'MobileHeader');
        $RefreshReg$(_c3, 'Layout');

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
          /*! ./../../node_modules/webpack/buildin/harmony-module.js */ './node_modules/webpack/buildin/harmony-module.js'
        )(module)
      ));

      /***/
    },

  /***/ './containers/LayoutContainer/Header/Header.style.tsx': false,

  /***/ './containers/LayoutContainer/Header/Header.tsx': false,

  /***/ './containers/LayoutContainer/Header/Menu/AuthorizedMenu.tsx': false,

  /***/ './containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.style.tsx': false,

  /***/ './containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx': false,

  /***/ './containers/LayoutContainer/Header/Menu/RightMenu/RightMenu.style.tsx': false,

  /***/ './containers/LayoutContainer/Header/Menu/RightMenu/RightMenu.tsx': false,

  /***/ './containers/SignInOutForm/ForgotPass.tsx': false,

  /***/ './containers/SignInOutForm/Form.tsx': false,

  /***/ './containers/SignInOutForm/SignIn.tsx': false,

  /***/ './containers/SignInOutForm/SignInOutForm.style.tsx': false,

  /***/ './containers/SignInOutForm/SignUp.tsx': false,

  /***/ './graphql/mutation/Auth.ts': false,

  /***/ './graphql/query/category.query.ts': false,

  /***/ './helper/apollo.js': false,

  /***/ './image/logo.svg': false,

  /***/ './image/user.jpg': false,

  /***/ './node_modules/@apollo/react-common/lib/react-common.esm.js': false,

  /***/ './node_modules/@apollo/react-hooks/lib/react-hooks.esm.js': false,

  /***/ './node_modules/@babel/runtime/helpers/assertThisInitialized.js': false,

  /***/ './node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js': false,

  /***/ './node_modules/@babel/runtime/helpers/esm/inheritsLoose.js': false,

  /***/ './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js': false,

  /***/ './node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js': false,

  /***/ './node_modules/@babel/runtime/helpers/extends.js': false,

  /***/ './node_modules/@babel/runtime/helpers/inheritsLoose.js': false,

  /***/ './node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js': false,

  /***/ './node_modules/@redq/reuse-modal/es/closeSvg.js': false,

  /***/ './node_modules/@redq/reuse-modal/es/hooks/useBodyScrollLock.js': false,

  /***/ './node_modules/@redq/reuse-modal/es/hooks/useClickOutside.js': false,

  /***/ './node_modules/@redq/reuse-modal/es/hooks/useComponentSize.js': false,

  /***/ './node_modules/@redq/reuse-modal/es/hooks/usePortal.js': false,

  /***/ './node_modules/@redq/reuse-modal/es/hooks/useReactSpring.js': false,

  /***/ './node_modules/@redq/reuse-modal/es/hooks/useRnd.js': false,

  /***/ './node_modules/@redq/reuse-modal/es/hooks/useWindowSize.js': false,

  /***/ './node_modules/@redq/reuse-modal/es/index.js': false,

  /***/ './node_modules/@styled-system/background/dist/index.esm.js': false,

  /***/ './node_modules/@styled-system/border/dist/index.esm.js': false,

  /***/ './node_modules/@styled-system/color/dist/index.esm.js': false,

  /***/ './node_modules/@styled-system/css/dist/index.esm.js': false,

  /***/ './node_modules/@styled-system/flexbox/dist/index.esm.js': false,

  /***/ './node_modules/@styled-system/grid/dist/index.esm.js': false,

  /***/ './node_modules/@styled-system/layout/dist/index.esm.js': false,

  /***/ './node_modules/@styled-system/position/dist/index.esm.js': false,

  /***/ './node_modules/@styled-system/shadow/dist/index.esm.js': false,

  /***/ './node_modules/@styled-system/space/dist/index.esm.js': false,

  /***/ './node_modules/@styled-system/typography/dist/index.esm.js': false,

  /***/ './node_modules/@styled-system/variant/dist/index.esm.js': false,

  /***/ './node_modules/@wry/equality/lib/equality.esm.js': false,

  /***/ './node_modules/apollo-client/bundle.esm.js': false,

  /***/ './node_modules/apollo-client/node_modules/apollo-utilities/lib/bundle.esm.js': false,

  /***/ './node_modules/apollo-link/lib/bundle.esm.js': false,

  /***/ './node_modules/apollo-utilities/lib/bundle.esm.js': false,

  /***/ './node_modules/dom-helpers/esm/addClass.js': false,

  /***/ './node_modules/dom-helpers/esm/hasClass.js': false,

  /***/ './node_modules/dom-helpers/esm/removeClass.js': false,

  /***/ './node_modules/fast-json-stable-stringify/index.js': false,

  /***/ './node_modules/fast-memoize/src/index.js': false,

  /***/ './node_modules/graphql-tag/src/index.js': false,

  /***/ './node_modules/graphql/error/GraphQLError.mjs': false,

  /***/ './node_modules/graphql/error/syntaxError.mjs': false,

  /***/ './node_modules/graphql/jsutils/defineToJSON.mjs': false,

  /***/ './node_modules/graphql/jsutils/defineToStringTag.mjs': false,

  /***/ './node_modules/graphql/jsutils/devAssert.mjs': false,

  /***/ './node_modules/graphql/jsutils/inspect.mjs': false,

  /***/ './node_modules/graphql/jsutils/isObjectLike.mjs': false,

  /***/ './node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs': false,

  /***/ './node_modules/graphql/language/blockString.mjs': false,

  /***/ './node_modules/graphql/language/directiveLocation.mjs': false,

  /***/ './node_modules/graphql/language/kinds.mjs': false,

  /***/ './node_modules/graphql/language/lexer.mjs': false,

  /***/ './node_modules/graphql/language/location.mjs': false,

  /***/ './node_modules/graphql/language/parser.mjs': false,

  /***/ './node_modules/graphql/language/printLocation.mjs': false,

  /***/ './node_modules/graphql/language/source.mjs': false,

  /***/ './node_modules/graphql/language/tokenKind.mjs': false,

  /***/ './node_modules/graphql/language/visitor.mjs': false,

  /***/ './node_modules/next/dist/build/polyfills/fetch/index.js': false,

  /***/ './node_modules/next/dist/client/link.js': false,

  /***/ './node_modules/next/dist/next-server/lib/amp-context.js': false,

  /***/ './node_modules/next/dist/next-server/lib/amp.js': false,

  /***/ './node_modules/next/dist/next-server/lib/head-manager-context.js': false,

  /***/ './node_modules/next/dist/next-server/lib/head.js': false,

  /***/ './node_modules/next/dist/next-server/lib/side-effect.js': false,

  /***/ './node_modules/next/link.js': false,

  /***/ './node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js': false,

  /***/ './node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js': false,

  /***/ './node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js': false,

  /***/ './node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js': false,

  /***/ './node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/react-toastify/dist/ReactToastify.css': false,

  /***/ './node_modules/re-resizable/lib/index.js': false,

  /***/ './node_modules/re-resizable/lib/resizer.js': false,

  /***/ './node_modules/react-device-detect/main.js': false,

  /***/ './node_modules/react-dom/cjs/react-dom.development.js': false,

  /***/ './node_modules/react-dom/index.js': false,

  /***/ './node_modules/react-dom/node_modules/scheduler/cjs/scheduler-tracing.development.js': false,

  /***/ './node_modules/react-dom/node_modules/scheduler/cjs/scheduler.development.js': false,

  /***/ './node_modules/react-dom/node_modules/scheduler/index.js': false,

  /***/ './node_modules/react-dom/node_modules/scheduler/tracing.js': false,

  /***/ './node_modules/react-draggable/dist/react-draggable.js': false,

  /***/ './node_modules/react-rnd/lib/index.js': false,

  /***/ './node_modules/react-spring/renderprops.cjs.js': false,

  /***/ './node_modules/react-toastify/dist/ReactToastify.css': false,

  /***/ './node_modules/react-toastify/dist/react-toastify.esm.js': false,

  /***/ './node_modules/react-transition-group/esm/CSSTransition.js': false,

  /***/ './node_modules/react-transition-group/esm/ReplaceTransition.js': false,

  /***/ './node_modules/react-transition-group/esm/SwitchTransition.js': false,

  /***/ './node_modules/react-transition-group/esm/Transition.js': false,

  /***/ './node_modules/react-transition-group/esm/TransitionGroup.js': false,

  /***/ './node_modules/react-transition-group/esm/TransitionGroupContext.js': false,

  /***/ './node_modules/react-transition-group/esm/config.js': false,

  /***/ './node_modules/react-transition-group/esm/index.js': false,

  /***/ './node_modules/react-transition-group/esm/utils/ChildMapping.js': false,

  /***/ './node_modules/react-transition-group/esm/utils/PropTypes.js': false,

  /***/ './node_modules/styled-system/dist/index.esm.js': false,

  /***/ './node_modules/symbol-observable/es/index.js': false,

  /***/ './node_modules/symbol-observable/es/ponyfill.js': false,

  /***/ './node_modules/ts-invariant/lib/invariant.esm.js': false,

  /***/ './node_modules/tslib/tslib.es6.js': false,

  /***/ './node_modules/ua-parser-js/dist/ua-parser.min.js': false,

  /***/ './node_modules/zen-observable-ts/lib/bundle.esm.js': false,

  /***/ './node_modules/zen-observable/index.js': false,

  /***/ './node_modules/zen-observable/lib/Observable.js': false,
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9MYXlvdXRDb250YWluZXIvQXBwTGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJNb2JpbGVIZWFkZXIiLCJkeW5hbWljIiwic3NyIiwiTGF5b3V0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkZXZpY2VUeXBlIiwibW9iaWxlIiwidGFibGV0IiwiZGVza3RvcCIsInRva2VuIiwiaXNTdGlja3kiLCJ1c2VTdGlja3lTdGF0ZSIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsImlzSG9tZVBhZ2UiLCJpc0NhdGVnb3J5UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxZQUFZLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLGtLQUFOO0FBQUEsQ0FBRCxFQUF3QztBQUNsRUMsS0FBRyxFQUFFLEtBRDZEO0FBQUE7QUFBQTtBQUFBLGtDQUExQixtRkFBMEI7QUFBQTtBQUFBLGNBQTFCLHVCQUEwQjtBQUFBO0FBQUEsQ0FBeEMsQ0FBNUI7TUFBTUYsWTs7QUFjTixJQUFNRyxNQUE0QyxHQUFHLFNBQS9DQSxNQUErQyxPQUsvQztBQUFBOztBQUFBLE1BSkpDLFNBSUksUUFKSkEsU0FJSTtBQUFBLE1BSEpDLFFBR0ksUUFISkEsUUFHSTtBQUFBLDZCQUZKQyxVQUVJO0FBQUEsTUFGVUMsTUFFVixtQkFGVUEsTUFFVjtBQUFBLE1BRmtCQyxNQUVsQixtQkFGa0JBLE1BRWxCO0FBQUEsTUFGMEJDLE9BRTFCLG1CQUYwQkEsT0FFMUI7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFDSixNQUFNQyxRQUFRLEdBQUdDLGdGQUFjLENBQUMsVUFBRCxDQUEvQjs7QUFESSxtQkFFaUJDLDZEQUFTLEVBRjFCO0FBQUEsTUFFSUMsUUFGSixjQUVJQSxRQUZKOztBQUdOQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE2QkYsUUFBN0I7QUFDRSxNQUFNRyxVQUFVLEdBQUdDLG9FQUFjLENBQUNKLFFBQUQsQ0FBakM7QUFDQSxTQUNFLE1BQUMsMkRBQUQ7QUFBZSxhQUFTLDBCQUFtQlYsU0FBbkIsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNHLE1BQU0sSUFBSUMsTUFBWCxLQUNDLE1BQUMsdURBQUQ7QUFBUSxXQUFPLEVBQUVHLFFBQWpCO0FBQTJCLFVBQU0sRUFBRSxJQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxZQUFEO0FBQ0UsYUFBUyxZQUFLQSxRQUFRLEdBQUcsUUFBSCxHQUFjLFVBQTNCLGNBQ1BNLFVBQVUsR0FBRyxNQUFILEdBQVksRUFEZixDQURYO0FBSUUsWUFBUSxFQUFFSCxRQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZKLEVBWUdMLE9BQU8sSUFDTixNQUFDLHVEQUFEO0FBQVEsV0FBTyxFQUFFRSxRQUFqQjtBQUEyQixVQUFNLEVBQUUsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUNFLGFBQVMsWUFBS0EsUUFBUSxHQUFHLFFBQUgsR0FBYyxVQUEzQixjQUNQTSxVQUFVLEdBQUcsTUFBSCxHQUFZLEVBRGYsYUFEWDtBQUlFLFlBQVEsRUFBRUgsUUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FiSixFQTZCR1QsUUE3QkgsQ0FERjtBQWlDRCxDQTNDRDs7R0FBTUYsTTtVQU1hUyx3RSxFQUNJQyxxRDs7O01BUGpCVixNO0FBNkNTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA5ZDY3OTFlMTA4OTdlMmMyZGUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgeyB1c2VTdGlja3lTdGF0ZSB9IGZyb20gJ2NvbnRleHRzL2FwcC9hcHAucHJvdmlkZXInO1xuaW1wb3J0IHsgTGF5b3V0V3JhcHBlciB9IGZyb20gJy4vTGF5b3V0LnN0eWxlJztcbmltcG9ydCB7IGlzQ2F0ZWdvcnlQYWdlIH0gZnJvbSAnLi9pcy1ob21lLXBhZ2UnO1xuY29uc3QgTW9iaWxlSGVhZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vSGVhZGVyL01vYmlsZUhlYWRlcicpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxudHlwZSBMYXlvdXRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBkZXZpY2VUeXBlOiB7XG4gICAgbW9iaWxlOiBib29sZWFuO1xuICAgIHRhYmxldDogYm9vbGVhbjtcbiAgICBkZXNrdG9wOiBib29sZWFuO1xuICB9O1xuICB0b2tlbj86IHN0cmluZztcbn07XG5cbmNvbnN0IExheW91dDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8TGF5b3V0UHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgZGV2aWNlVHlwZTogeyBtb2JpbGUsIHRhYmxldCwgZGVza3RvcCB9LFxuICB0b2tlbixcbn0pID0+IHtcbiAgY29uc3QgaXNTdGlja3kgPSB1c2VTdGlja3lTdGF0ZSgnaXNTdGlja3knKTtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG5jb25zb2xlLmxvZyhcInBhdGhuYW1lbGF5b3V0XCIscGF0aG5hbWUpXG4gIGNvbnN0IGlzSG9tZVBhZ2UgPSBpc0NhdGVnb3J5UGFnZShwYXRobmFtZSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dFdyYXBwZXIgY2xhc3NOYW1lPXtgbGF5b3V0V3JhcHBlciAke2NsYXNzTmFtZX1gfT5cbiAgICAgIHsobW9iaWxlIHx8IHRhYmxldCkgJiYgKFxuICAgICAgICA8U3RpY2t5IGVuYWJsZWQ9e2lzU3RpY2t5fSBpbm5lclo9ezEwMDF9PlxuICAgICAgICAgIDxNb2JpbGVIZWFkZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNTdGlja3kgPyAnc3RpY2t5JyA6ICd1blN0aWNreSd9ICR7XG4gICAgICAgICAgICAgIGlzSG9tZVBhZ2UgPyAnaG9tZScgOiAnJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICBwYXRobmFtZT17cGF0aG5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdGlja3k+XG4gICAgICApfVxuXG4gICAgICB7ZGVza3RvcCAmJiAoXG4gICAgICAgIDxTdGlja3kgZW5hYmxlZD17aXNTdGlja3l9IGlubmVyWj17MTAwMX0+XG4gICAgICAgICAgPE1vYmlsZUhlYWRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1N0aWNreSA/ICdzdGlja3knIDogJ3VuU3RpY2t5J30gJHtcbiAgICAgICAgICAgICAgaXNIb21lUGFnZSA/ICdob21lJyA6ICcnXG4gICAgICAgICAgICB9IGRlc2t0b3BgfVxuICAgICAgICAgICAgcGF0aG5hbWU9e3BhdGhuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIDxIZWFkZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNTdGlja3kgJiYgaXNIb21lUGFnZSA/ICdzdGlja3knIDogJ3VuU3RpY2t5J30gJHtcbiAgICAgICAgICAgICAgaXNIb21lUGFnZSA/ICdob21lJyA6ICcnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIHRva2VuPXt0b2tlbn1cbiAgICAgICAgICAgIHBhdGhuYW1lPXtwYXRobmFtZX1cbiAgICAgICAgICAvPiAqL31cbiAgICAgICAgPC9TdGlja3k+XG4gICAgICApfVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGF5b3V0V3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=
