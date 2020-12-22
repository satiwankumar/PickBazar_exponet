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
              return forgotPassword({
                variables: {
                  input: LoginInput
                }
              });

            case 7:
              result = _context.sent;
              console.log("dataaaa", result.data);

              if (result.data) {
                // console.log(result)
                localStorage.setItem('access_token', "password Sent Successfully"); // alert("toast")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9TaWduSW5PdXRGb3JtL0ZvcmdvdFBhc3MudHN4Il0sIm5hbWVzIjpbIkZvcmdvdFBhc3NNb2RhbCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImF1dGhEaXNwYXRjaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlTXV0YXRpb24iLCJGT1JHT1QiLCJmb3Jnb3RQYXNzd29yZCIsIkhhbmRsZUZvcmdvdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ0b2FzdCIsImNvbmZpZ3VyZSIsIkxvZ2luSW5wdXQiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInJlc3VsdCIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic3VjY2VzcyIsImxvZ2luIiwibWVzc2FnZSIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiY2xvc2VNb2RhbCIsIndhcm4iLCJlcnJvciIsInRvZ2dsZVNpZ25JbkZvcm0iLCJwYWRkaW5nQm90dG9tIiwiY29sb3IiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUdBO0FBRWUsU0FBU0EsZUFBVCxHQUEyQjtBQUFBOztBQUFBLG9CQUNmQyx3REFBVSxDQUFNQyxzRUFBTixDQURLO0FBQUEsTUFDaENDLFlBRGdDLGVBQ2hDQSxZQURnQzs7QUFBQSx3QkFFZEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGYztBQUFBO0FBQUEsTUFFakNDLEtBRmlDO0FBQUEsTUFFMUJDLFFBRjBCOztBQUFBLHFCQUlmQyx1RUFBVyxDQUFDQyw0REFBRCxDQUpJO0FBQUE7QUFBQSxNQUlqQ0MsY0FKaUM7O0FBT3hDLE1BQU1DLFlBQVk7QUFBQSxnTUFBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVqQkEsZUFBQyxDQUFDQyxjQUFGO0FBQ0FDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVQsS0FBWjtBQUNBVSxrRUFBSyxDQUFDQyxTQUFOO0FBQ0tDLHdCQUxZLEdBS0M7QUFBQ1oscUJBQUssRUFBQ0E7QUFBUCxlQUxEO0FBQUE7QUFBQSxxQkFRSUksY0FBYyxDQUFDO0FBRWxDUyx5QkFBUyxFQUFFO0FBQUNDLHVCQUFLLEVBQUNGO0FBQVA7QUFGdUIsZUFBRCxDQVJsQjs7QUFBQTtBQVFYRyxvQkFSVztBQVlqQlAscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBc0JNLE1BQU0sQ0FBQ0MsSUFBN0I7O0FBRUEsa0JBQUlELE1BQU0sQ0FBQ0MsSUFBWCxFQUFpQjtBQUNmO0FBQ0VDLDRCQUFZLENBQUNDLE9BQWIsQ0FBcUIsY0FBckIsZ0NBRmEsQ0FHYjs7QUFDQVIsb0VBQUssQ0FBQ1MsT0FBTix5QkFBcUJKLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSSxLQUFaLENBQWtCQyxPQUF2QyxRQUFtRDtBQUNqREMsMEJBQVEsRUFBRSxXQUR1QztBQUVqREMsMkJBQVMsRUFBRSxJQUZzQztBQUdqREMsaUNBQWUsRUFBRSxLQUhnQztBQUlqREMsOEJBQVksRUFBRSxJQUptQztBQUtqREMsOEJBQVksRUFBRSxJQUxtQztBQU1qREMsMkJBQVMsRUFBRSxJQU5zQztBQU9qREMsMEJBQVEsRUFBRUM7QUFQdUMsaUJBQW5EO0FBYUFoQyw0QkFBWSxDQUFDO0FBQUVpQyxzQkFBSSxFQUFFO0FBQVIsaUJBQUQsQ0FBWjtBQUdBQywwQkFBVTtBQUNYLGVBckJILE1BcUJPO0FBQ0hyQixvRUFBSyxDQUFDc0IsSUFBTix1Q0FBdUM7QUFDckNWLDBCQUFRLEVBQUUsV0FEMkI7QUFFckNDLDJCQUFTLEVBQUUsSUFGMEI7QUFHckNDLGlDQUFlLEVBQUUsS0FIb0I7QUFJckNDLDhCQUFZLEVBQUUsSUFKdUI7QUFLckNDLDhCQUFZLEVBQUUsSUFMdUI7QUFNckNDLDJCQUFTLEVBQUUsSUFOMEI7QUFPckNDLDBCQUFRLEVBQUVDO0FBUDJCLGlCQUF2QztBQWNEOztBQWxEYztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW9EakJuQixrRUFBSyxDQUFDdUIsS0FBTixzQ0FBdUM7QUFDckNYLHdCQUFRLEVBQUUsV0FEMkI7QUFFckNDLHlCQUFTLEVBQUUsSUFGMEI7QUFHckNDLCtCQUFlLEVBQUUsS0FIb0I7QUFJckNDLDRCQUFZLEVBQUUsSUFKdUI7QUFLckNDLDRCQUFZLEVBQUUsSUFMdUI7QUFNckNDLHlCQUFTLEVBQUUsSUFOMEI7QUFPckNDLHdCQUFRLEVBQUVDO0FBUDJCLGVBQXZDOztBQXBEaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWnhCLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBdUVBLE1BQU02QixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JyQyxnQkFBWSxDQUFDO0FBQ1hpQyxVQUFJLEVBQUU7QUFESyxLQUFELENBQVo7QUFHRCxHQUpEOztBQVFBLFNBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFXLFNBQUssRUFBRTtBQUFFSyxtQkFBYSxFQUFFO0FBQWpCLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLGdCQURMO0FBRUUsa0JBQWMsRUFBQyxpQkFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsRUFZRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLG1CQURMO0FBRUUsa0JBQWMsRUFBQyw4Q0FGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWkYsRUF5QkUsTUFBQywwREFBRDtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVcsRUFBRSxxQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCRixFQTBCRSxNQUFDLDJEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsU0FBSyxFQUFFLGdCQUZUO0FBR0UsZ0JBQVksRUFBQyxrQkFIZjtBQUlFLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUpUO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCRixFQWlDRSxNQUFDLDBEQUFEO0FBQU8sU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBa0IsTUFBRSxFQUFDLFlBQXJCO0FBQWtDLGtCQUFjLEVBQUMsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBQ2dFLEdBRGhFLEVBRUUsTUFBQywrREFBRDtBQUFZLFdBQU8sRUFBRUgsZ0JBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQWtCLE1BQUUsRUFBQyxjQUFyQjtBQUFvQyxrQkFBYyxFQUFDLE9BQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBakNGLENBREYsRUF5Q0UsTUFBQyw2REFBRDtBQUFnQixhQUFTLEVBQUUsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpDRixDQURGO0FBNkNEOztHQW5JdUJ4QyxlO1VBSUdRLCtEOzs7S0FKSFIsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhkNjg3OTRmZGI3MjgyYjZmYmZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmltcG9ydCB7XG4gIFdyYXBwZXIsXG4gIENvbnRhaW5lcixcbiAgTG9nb1dyYXBwZXIsXG4gIEhlYWRpbmcsXG4gIFN1YkhlYWRpbmcsXG4gIElucHV0LFxuICBCdXR0b24sXG4gIExpbmtCdXR0b24sXG4gIE9mZmVyLFxufSBmcm9tICcuL1NpZ25Jbk91dEZvcm0uc3R5bGUnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICdjb250ZXh0cy9hdXRoL2F1dGguY29udGV4dCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9JbWFnZS9JbWFnZSc7XG5pbXBvcnQgUGlja0JhemFyIGZyb20gJy4uLy4uL2ltYWdlL1BpY2tCYXphci5wbmcnO1xuaW1wb3J0IHsgRk9SR09UIH0gZnJvbSAnZ3JhcGhxbC9tdXRhdGlvbi9BdXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9yZ290UGFzc01vZGFsKCkge1xuICBjb25zdCB7IGF1dGhEaXNwYXRjaCB9ID0gdXNlQ29udGV4dDxhbnk+KEF1dGhDb250ZXh0KTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgW2ZvcmdvdFBhc3N3b3JkXSA9IHVzZU11dGF0aW9uKEZPUkdPVClcblxuXG4gIGNvbnN0IEhhbmRsZUZvcmdvdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc29sZS5sb2coZW1haWwpXG4gICAgICB0b2FzdC5jb25maWd1cmUoKTtcbiAgICAgY29uc3QgTG9naW5JbnB1dCA9IHtlbWFpbDplbWFpbH1cbiAgXG4gIFxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm9yZ290UGFzc3dvcmQoe1xuICBcbiAgICAgICAgdmFyaWFibGVzOiB7aW5wdXQ6TG9naW5JbnB1dH1cbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJkYXRhYWFhXCIscmVzdWx0LmRhdGEpXG4gIFxuICAgICAgaWYgKHJlc3VsdC5kYXRhKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgYHBhc3N3b3JkIFNlbnQgU3VjY2Vzc2Z1bGx5YCk7XG4gICAgICAgICAgLy8gYWxlcnQoXCJ0b2FzdFwiKVxuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoYPCfpoQgICR7cmVzdWx0LmRhdGEubG9naW4ubWVzc2FnZX0gYCwge1xuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgYXV0aERpc3BhdGNoKHsgdHlwZTogJ1NJR05JTl9TVUNDRVNTJyB9KTtcbiAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0b2FzdC53YXJuKGDwn6aEICBJbnZhbGlkIENyZWRlbnRpYWxzIGAsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdG9hc3QuZXJyb3IoYPCfpoQgU29tZVRoaW5nIFdlbnQgV3JvbmdgLCB7XG4gICAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gIFxuLy8gZWxzZXtcbi8vICAgY29uc29sZS5sb2coXCJJbnZhbGlkIENyZWRlbnRpYWxzXCIpXG4vLyB9XG5cbiAgfTtcblxuXG4gIGNvbnN0IHRvZ2dsZVNpZ25JbkZvcm0gPSAoKSA9PiB7XG4gICAgYXV0aERpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTSUdOSU4nLFxuICAgIH0pO1xuICB9O1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAzMCB9fT5cbiAgICAgICAgey8qIDxMb2dvV3JhcHBlcj5cbiAgICAgICAgICA8SW1hZ2UgdXJsPXtQaWNrQmF6YXJ9IC8+XG4gICAgICAgIDwvTG9nb1dyYXBwZXI+ICovfVxuXG4gICAgICAgIDxIZWFkaW5nPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICBpZD0nZm9yZ290UGFzc1RleHQnXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT0nRm9yZ290IFBhc3N3b3JkJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgaWQ9J3NlbmRSZXNldFBhc3NUZXh0J1xuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9XCJXZSdsbCBzZW5kIHlvdSBhIGxpbmsgdG8gcmVzZXQgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdWJIZWFkaW5nPlxuXG4gICAgICAgIHsvKiA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgIGlkPSdlbWFpbEFkZHJlc3NQbGFjZWhvbGRlcidcbiAgICAgICAgICBkZWZhdWx0TWVzc2FnZT0nRW1haWwgQWRkcmVzcyBvciBDb250YWN0IE5vLidcbiAgICAgICAgPlxuICAgICAgICAgXG4gICAgICAgIDwvRm9ybWF0dGVkTWVzc2FnZT4gKi99XG4gICAgICAgIDxJbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj17XCJFbnRlciBFbWFpbCBBZGRyZXNzXCJ9IC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBmdWxsd2lkdGhcbiAgICAgICAgICB0aXRsZT17J1Jlc2V0IFBhc3N3b3JkJ31cbiAgICAgICAgICBpbnRsQnV0dG9uSWQ9J3Jlc2V0UGFzc3dvcmRCdG4nXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fVxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAvPlxuICAgICAgICA8T2ZmZXIgc3R5bGU9e3sgcGFkZGluZzogJzIwcHggMCAwJyB9fT5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD0nYmFja1RvU2lnbicgZGVmYXVsdE1lc3NhZ2U9J0JhY2sgdG8nIC8+eycgJ31cbiAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaWduSW5Gb3JtfT5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPSdsb2dpbkJ0blRleHQnIGRlZmF1bHRNZXNzYWdlPSdMb2dpbicgLz5cbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvT2ZmZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxUb2FzdENvbnRhaW5lciBhdXRvQ2xvc2U9ezMwMDB9Lz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9