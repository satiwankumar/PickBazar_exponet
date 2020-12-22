webpackHotUpdate_N_E("pages/_app",{

/***/ "./containers/SignInOutForm/ForgotPass.tsx":
/*!*************************************************!*\
  !*** ./containers/SignInOutForm/ForgotPass.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgotPassModal; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _SignInOutForm_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignInOutForm.style */ "./containers/SignInOutForm/SignInOutForm.style.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/auth/auth.context */ "./contexts/auth/auth.context.tsx");
/* harmony import */ var graphql_mutation_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql/mutation/Auth */ "./graphql/mutation/Auth.ts");




var _jsxFileName = "E:\\satiwan\\Pick bazar\\Pickbazar - React GraphQL Ecommerce Template\\pickbazar\\packages\\shop\\containers\\SignInOutForm\\ForgotPass.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







function ForgotPassModal() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_8__["AuthContext"]),
      authDispatch = _useContext.authDispatch;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      email = _React$useState2[0],
      setEmail = _React$useState2[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(graphql_mutation_Auth__WEBPACK_IMPORTED_MODULE_9__["FORGOT"]),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 1),
      forgotPassword = _useMutation2[0];

  var HandleForgot = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var LoginInput, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              e.preventDefault();
              console.log(email);
              react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].configure();
              LoginInput = {
                email: email
              };
              _context.next = 7;
              return login({
                variables: {
                  input: LoginInput
                }
              });

            case 7:
              result = _context.sent;
              console.log("dataaaa", result.data);

              if (result.data) {
                // console.log(result)
                localStorage.setItem('access_token', "".concat(result.data.login.token)); // alert("toast")

                react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("\uD83E\uDD84  ".concat(result.data.login.message, " "), {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined
                });
                authDispatch({
                  type: 'SIGNIN_SUCCESS'
                });
                closeModal();
              } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].warn("\uD83E\uDD84  Invalid Credentials ", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined
                });
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error("\uD83E\uDD84 SomeThing Went Wrong", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function HandleForgot(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var toggleSignInForm = function toggleSignInForm() {
    authDispatch({
      type: 'SIGNIN'
    });
  };

  return __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_6__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    style: {
      paddingBottom: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
    id: "forgotPassText",
    defaultMessage: "Forgot Password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  })), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_6__["SubHeading"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
    id: "sendResetPassText",
    defaultMessage: "We'll send you a link to reset your password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  })), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "text",
    placeholder: "Enter Email Address",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    fullwidth: true,
    title: 'Reset Password',
    intlButtonId: "resetPasswordBtn",
    style: {
      color: '#fff'
    },
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }), __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_6__["Offer"], {
    style: {
      padding: '20px 0 0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
    id: "backToSign",
    defaultMessage: "Back to",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }), ' ', __jsx(_SignInOutForm_style__WEBPACK_IMPORTED_MODULE_6__["LinkButton"], {
    onClick: toggleSignInForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
    id: "loginBtnText",
    defaultMessage: "Login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  })))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], {
    autoClose: 3000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }));
}

_s(ForgotPassModal, "mrvewZcvr5aTcv8mHBbOj/yrqq4=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"]];
});

_c = ForgotPassModal;

var _c;

$RefreshReg$(_c, "ForgotPassModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9TaWduSW5PdXRGb3JtL0ZvcmdvdFBhc3MudHN4Il0sIm5hbWVzIjpbIkZvcmdvdFBhc3NNb2RhbCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImF1dGhEaXNwYXRjaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlTXV0YXRpb24iLCJGT1JHT1QiLCJmb3Jnb3RQYXNzd29yZCIsIkhhbmRsZUZvcmdvdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ0b2FzdCIsImNvbmZpZ3VyZSIsIkxvZ2luSW5wdXQiLCJsb2dpbiIsInZhcmlhYmxlcyIsImlucHV0IiwicmVzdWx0IiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsInR5cGUiLCJjbG9zZU1vZGFsIiwid2FybiIsImVycm9yIiwidG9nZ2xlU2lnbkluRm9ybSIsInBhZGRpbmdCb3R0b20iLCJjb2xvciIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUNBO0FBR0E7QUFFZSxTQUFTQSxlQUFULEdBQTJCO0FBQUE7O0FBQUEsb0JBQ2ZDLHdEQUFVLENBQU1DLHNFQUFOLENBREs7QUFBQSxNQUNoQ0MsWUFEZ0MsZUFDaENBLFlBRGdDOztBQUFBLHdCQUVkQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUZjO0FBQUE7QUFBQSxNQUVqQ0MsS0FGaUM7QUFBQSxNQUUxQkMsUUFGMEI7O0FBQUEscUJBSWZDLHVFQUFXLENBQUNDLDREQUFELENB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SUF6Q0YsQ0FERjtBQTZDRDs7R0FuSXVCekMsZTtVQUlHUSwrRDs7O0tBSkhSLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lOWVjNmI1M2RiM2VlODNkYmQ2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5pbXBvcnQge1xuICBXcmFwcGVyLFxuICBDb250YWluZXIsXG4gIExvZ29XcmFwcGVyLFxuICBIZWFkaW5nLFxuICBTdWJIZWFkaW5nLFxuICBJbnB1dCxcbiAgQnV0dG9uLFxuICBMaW5rQnV0dG9uLFxuICBPZmZlcixcbn0gZnJvbSAnLi9TaWduSW5PdXRGb3JtLnN0eWxlJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnY29udGV4dHMvYXV0aC9hdXRoLmNvbnRleHQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvSW1hZ2UvSW1hZ2UnO1xuaW1wb3J0IFBpY2tCYXphciBmcm9tICcuLi8uLi9pbWFnZS9QaWNrQmF6YXIucG5nJztcbmltcG9ydCB7IEZPUkdPVCB9IGZyb20gJ2dyYXBocWwvbXV0YXRpb24vQXV0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcmdvdFBhc3NNb2RhbCgpIHtcbiAgY29uc3QgeyBhdXRoRGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQ8YW55PihBdXRoQ29udGV4dCk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFtmb3Jnb3RQYXNzd29yZF0gPSB1c2VNdXRhdGlvbihGT1JHT1QpXG5cblxuICBjb25zdCBIYW5kbGVGb3Jnb3QgPSBhc3luYyAoZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnNvbGUubG9nKGVtYWlsKVxuICAgICAgdG9hc3QuY29uZmlndXJlKCk7XG4gICAgIGNvbnN0IExvZ2luSW5wdXQgPSB7ZW1haWw6ZW1haWx9XG4gIFxuICBcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGxvZ2luKHtcbiAgXG4gICAgICAgIHZhcmlhYmxlczoge2lucHV0OkxvZ2luSW5wdXR9XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YWFhYVwiLHJlc3VsdC5kYXRhKVxuICBcbiAgICAgIGlmIChyZXN1bHQuZGF0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc190b2tlbicsIGAke3Jlc3VsdC5kYXRhLmxvZ2luLnRva2VufWApO1xuICAgICAgICAgIC8vIGFsZXJ0KFwidG9hc3RcIilcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKGDwn6aEICAke3Jlc3VsdC5kYXRhLmxvZ2luLm1lc3NhZ2V9IGAsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIGF1dGhEaXNwYXRjaCh7IHR5cGU6ICdTSUdOSU5fU1VDQ0VTUycgfSk7XG4gICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdG9hc3Qud2Fybihg8J+mhCAgSW52YWxpZCBDcmVkZW50aWFscyBgLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGDwn6aEIFNvbWVUaGluZyBXZW50IFdyb25nYCwge1xuICAgICAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxuICAgICAgICB9KVxuICAgIH1cblxuICBcbi8vIGVsc2V7XG4vLyAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBDcmVkZW50aWFsc1wiKVxuLy8gfVxuXG4gIH07XG5cblxuICBjb25zdCB0b2dnbGVTaWduSW5Gb3JtID0gKCkgPT4ge1xuICAgIGF1dGhEaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0lHTklOJyxcbiAgICB9KTtcbiAgfTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMzAgfX0+XG4gICAgICAgIHsvKiA8TG9nb1dyYXBwZXI+XG4gICAgICAgICAgPEltYWdlIHVybD17UGlja0JhemFyfSAvPlxuICAgICAgICA8L0xvZ29XcmFwcGVyPiAqL31cblxuICAgICAgICA8SGVhZGluZz5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgaWQ9J2ZvcmdvdFBhc3NUZXh0J1xuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9J0ZvcmdvdCBQYXNzd29yZCdcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWRpbmc+XG5cbiAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgIGlkPSdzZW5kUmVzZXRQYXNzVGV4dCdcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPVwiV2UnbGwgc2VuZCB5b3UgYSBsaW5rIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3ViSGVhZGluZz5cblxuICAgICAgICB7LyogPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICBpZD0nZW1haWxBZGRyZXNzUGxhY2Vob2xkZXInXG4gICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9J0VtYWlsIEFkZHJlc3Mgb3IgQ29udGFjdCBOby4nXG4gICAgICAgID5cbiAgICAgICAgIFxuICAgICAgICA8L0Zvcm1hdHRlZE1lc3NhZ2U+ICovfVxuICAgICAgICA8SW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9e1wiRW50ZXIgRW1haWwgQWRkcmVzc1wifSAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZnVsbHdpZHRoXG4gICAgICAgICAgdGl0bGU9eydSZXNldCBQYXNzd29yZCd9XG4gICAgICAgICAgaW50bEJ1dHRvbklkPSdyZXNldFBhc3N3b3JkQnRuJ1xuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX1cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPE9mZmVyIHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDAgMCcgfX0+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9J2JhY2tUb1NpZ24nIGRlZmF1bHRNZXNzYWdlPSdCYWNrIHRvJyAvPnsnICd9XG4gICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17dG9nZ2xlU2lnbkluRm9ybX0+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD0nbG9naW5CdG5UZXh0JyBkZWZhdWx0TWVzc2FnZT0nTG9naW4nIC8+XG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICA8L09mZmVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8VG9hc3RDb250YWluZXIgYXV0b0Nsb3NlPXszMDAwfS8+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==