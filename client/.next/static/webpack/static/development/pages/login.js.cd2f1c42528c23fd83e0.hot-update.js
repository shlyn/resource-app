webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./lib/redirect.ts":
false,

/***/ "./node_modules/next/router.js":
false,

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_app_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/app/Layout */ "./components/app/Layout.tsx");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
var _jsxFileName = "C:\\Users\\engqu\\Desktop\\projects\\Personal\\resource-app\\client\\pages\\login.tsx";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    mutation loginUser($email: String!, $password: String!) {\n      loginUser(email: $email, password: $password) {\n        token\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Login = function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var USER_LOGIN = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_app_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Resource | Login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Mutation"], {
    mutation: USER_LOGIN,
    onCompleted: function onCompleted(data) {
      // Store the token in cookie
      document.cookie = cookie__WEBPACK_IMPORTED_MODULE_0___default.a.serialize("token", data.loginUser.token, {
        maxAge: 30 * 24 * 60 * 60 // 30 days

      }); // Force a reload of all the current queries now that the user is
      // logged in
      // client.cache.reset().then(() => {
      //   redirect({}, "/");
      // });
    },
    onError: function onError(error) {
      // If you want to send error to external service?
      console.log(error);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, function (loginUser, _ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form, {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        loginUser({
          variables: {
            email: email,
            password: password
          }
        });
        setEmail("");
        setPassword("");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      value: email,
      onChange: function onChange(e) {
        return setEmail(e.target.value);
      },
      type: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      value: password,
      onChange: function onChange(e) {
        return setPassword(e.target.value);
      },
      type: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "LOGIN"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "login__Form",
  componentId: "sc-1o2x3zo-0"
})(["display:flex;flex-direction:column;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "login__Label",
  componentId: "sc-1o2x3zo-1"
})([""]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "login__Input",
  componentId: "sc-1o2x3zo-2"
})([""]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "login__Button",
  componentId: "sc-1o2x3zo-3"
})(["margin-top:20px;"]);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/login")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=login.js.cd2f1c42528c23fd83e0.hot-update.js.map