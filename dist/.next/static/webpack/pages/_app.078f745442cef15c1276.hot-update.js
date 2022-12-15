webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/common/layout/left-header-content.tsx":
/*!**************************************************************!*\
  !*** ./src/components/common/layout/left-header-content.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var _left_header_content_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./left-header-content.less */ "./src/components/common/layout/left-header-content.less");
/* harmony import */ var _left_header_content_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_left_header_content_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/constants */ "./src/constants.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/common/base/nav */ "./src/components/common/base/nav.tsx");



var _this = undefined,
    _jsxFileName = "E:\\programData\\React\\cams-3\\user\\src\\components\\common\\layout\\left-header-content.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var LeftHeaderContent = function LeftHeaderContent(_ref) {
  _s();

  var loggedIn = _ref.loggedIn,
      currentUser = _ref.currentUser,
      pluralTextModel = _ref.pluralTextModel,
      performerCategories = _ref.performerCategories,
      settings = _ref.settings;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      selectedKey = _React$useState2[0],
      setSelectedKey = _React$useState2[1];

  var path = settings[src_constants__WEBPACK_IMPORTED_MODULE_8__["SETTING_KEYS"].OPTION_FOR_GROUP] === 'webrtc' ? 'webrtc/' : '';

  var CategorySubMenu = __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    mode: "inline",
    style: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, performerCategories.data.length > 0 && performerCategories.data.map(function (category) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
      key: "category-".concat(category._id),
      onClick: function onClick() {
        setSelectedKey('');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: {
        pathname: '/performer-category',
        query: {
          slug: category.slug,
          category: JSON.stringify(category)
        }
      },
      as: "/performer-category/".concat(category.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, category.name)));
  }));

  var StreamingSubMenu = __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: function onClick() {
      setSelectedKey('');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/live",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, "Go Live"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/live/".concat(path, "groupchat"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, "Group Chat"))));

  return __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavBar"], {
    activeKey: selectedKey,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    key: "home",
    onClick: function onClick() {
      setSelectedKey('home');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    shallow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, "Home"))), __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    key: "how it works",
    onClick: function onClick() {
      setSelectedKey('howitworks');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/how-it-works",
    shallow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, "How It Works"))), __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    key: "allModel",
    onClick: function onClick() {
      setSelectedKey('model');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/performer-category",
    as: "/our-therapists",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "Our Therapists"))), __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    key: "livecam",
    onClick: function onClick() {
      setSelectedKey('LiveCam');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/livecam",
    shallow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "Our Therapists"))), __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    key: "aboutus",
    onClick: function onClick() {
      setSelectedKey('AboutUs');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/about-us",
    shallow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, "About Us"))), __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    key: "contactus",
    onClick: function onClick() {
      setSelectedKey('contactUS');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/contact-us",
    shallow: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, "Contact Us"))), performerCategories.data.length > 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: CategorySubMenu,
    overlayClassName: "cate-sub-menu-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, "Categories"))), loggedIn && (currentUser === null || currentUser === void 0 ? void 0 : currentUser._id) && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'performer' && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    key: "live",
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('hidden-sm', {}),
    onClick: function onClick() {
      setSelectedKey('live');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/live",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, "Go Live"))), __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    key: "groupchat",
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('hidden-sm', {}),
    onClick: function onClick() {
      setSelectedKey('groupchat');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/live/".concat(path, "groupchat"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 15
    }
  }, "Group Chat"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: StreamingSubMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    className: "visible-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["MoreOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  })))));
};

_s(LeftHeaderContent, "ASwrhYduiFFkoAoZYE018BJI6S8=");

_c = LeftHeaderContent;
LeftHeaderContent.defaultProps = {
  loggedIn: false,
  currentUser: null,
  settings: null,
  pluralTextModel: '',
  performerCategories: {
    total: 0,
    data: []
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread(_objectSpread({
    loggedIn: state.auth.loggedIn
  }, state.performer.performers), state.ui);
};

var mapDispatch = {
  updateUIValue: src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_6__["updateUIValue"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatch)(LeftHeaderContent));

var _c;

$RefreshReg$(_c, "LeftHeaderContent");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dC9sZWZ0LWhlYWRlci1jb250ZW50LnRzeCJdLCJuYW1lcyI6WyJMZWZ0SGVhZGVyQ29udGVudCIsImxvZ2dlZEluIiwiY3VycmVudFVzZXIiLCJwbHVyYWxUZXh0TW9kZWwiLCJwZXJmb3JtZXJDYXRlZ29yaWVzIiwic2V0dGluZ3MiLCJSZWFjdCIsInVzZVN0YXRlIiwic2VsZWN0ZWRLZXkiLCJzZXRTZWxlY3RlZEtleSIsInBhdGgiLCJTRVRUSU5HX0tFWVMiLCJPUFRJT05fRk9SX0dST1VQIiwiQ2F0ZWdvcnlTdWJNZW51IiwiZGlzcGxheSIsImZsZXhXcmFwIiwiZGF0YSIsImxlbmd0aCIsIm1hcCIsImNhdGVnb3J5IiwiX2lkIiwicGF0aG5hbWUiLCJxdWVyeSIsInNsdWciLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsIlN0cmVhbWluZ1N1Yk1lbnUiLCJyb2xlIiwiY2xhc3NuYW1lcyIsImRlZmF1bHRQcm9wcyIsInRvdGFsIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhdXRoIiwicGVyZm9ybWVyIiwicGVyZm9ybWVycyIsInVpIiwibWFwRGlzcGF0Y2giLCJ1cGRhdGVVSVZhbHVlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FNYjtBQUFBOztBQUFBLE1BTFhDLFFBS1csUUFMWEEsUUFLVztBQUFBLE1BSlhDLFdBSVcsUUFKWEEsV0FJVztBQUFBLE1BSFhDLGVBR1csUUFIWEEsZUFHVztBQUFBLE1BRlhDLG1CQUVXLFFBRlhBLG1CQUVXO0FBQUEsTUFEWEMsUUFDVyxRQURYQSxRQUNXOztBQUNYLHdCQUFzQ0MsNENBQUssQ0FB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O0FBQUE7QUFBQSxJQURGLENBREYsQ0F6QkYsQ0E1RUosQ0FERjtBQStHRCxDQXRLRDs7R0FBTTNCLGlCOztLQUFBQSxpQjtBQXdLTkEsaUJBQWlCLENBQUM4QixZQUFsQixHQUFpQztBQUMvQjdCLFVBQVEsRUFBRSxLQURxQjtBQUUvQkMsYUFBVyxFQUFFLElBRmtCO0FBRy9CRyxVQUFRLEVBQUUsSUFIcUI7QUFJL0JGLGlCQUFlLEVBQUUsRUFKYztBQUsvQkMscUJBQW1CLEVBQUU7QUFDbkIyQixTQUFLLEVBQUUsQ0FEWTtBQUVuQmYsUUFBSSxFQUFFO0FBRmE7QUFMVSxDQUFqQzs7QUFVQSxJQUFNZ0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUE7QUFDdEJoQyxZQUFRLEVBQUVnQyxLQUFLLENBQUNDLElBQU4sQ0FBV2pDO0FBREMsS0FFbkJnQyxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JDLFVBRkcsR0FHbkJILEtBQUssQ0FBQ0ksRUFIYTtBQUFBLENBQXhCOztBQUtBLElBQU1DLFdBQVcsR0FBRztBQUFFQyxlQUFhLEVBQWJBLGtFQUFhQTtBQUFmLENBQXBCO0FBQ2VDLDBIQUFPLENBQUNSLGVBQUQsRUFBa0JNLFdBQWxCLENBQVAsQ0FBc0N0QyxpQkFBdEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA3OGY3NDU0NDJjZWYxNWMxMjc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSwgRHJvcGRvd24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlVUlWYWx1ZSB9IGZyb20gJ3NyYy9yZWR1eC91aS9hY3Rpb25zJztcbmltcG9ydCB7XG4gIElQZXJmb3JtZXJDYXRlZ29naWVzLFxuICBJRGF0YVJlc3BvbnNlLFxuICBJUGVyZm9ybWVyLFxuICBJU3R1ZGlvLFxuICBJVXNlcixcbiAgU3RyZWFtU2V0dGluZ3Ncbn0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0ICcuL2xlZnQtaGVhZGVyLWNvbnRlbnQubGVzcyc7XG5pbXBvcnQgeyBTRVRUSU5HX0tFWVMgfSBmcm9tICdzcmMvY29uc3RhbnRzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgTW9yZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgTmF2QmFyLCBOYXZJdGVtIH0gZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uL2Jhc2UvbmF2JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbG9nZ2VkSW4/OiBib29sZWFuO1xuICBjdXJyZW50VXNlcj86IElQZXJmb3JtZXIgJiBJVXNlciAmIElTdHVkaW87XG4gIHBlcmZvcm1lckNhdGVnb3JpZXM/OiBJRGF0YVJlc3BvbnNlPElQZXJmb3JtZXJDYXRlZ29naWVzPjtcbiAgc2V0dGluZ3M/OiBTdHJlYW1TZXR0aW5ncztcbiAgcGx1cmFsVGV4dE1vZGVsPzogc3RyaW5nO1xufVxuXG5jb25zdCBMZWZ0SGVhZGVyQ29udGVudCA9ICh7XG4gIGxvZ2dlZEluLFxuICBjdXJyZW50VXNlcixcbiAgcGx1cmFsVGV4dE1vZGVsLFxuICBwZXJmb3JtZXJDYXRlZ29yaWVzLFxuICBzZXR0aW5nc1xufTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkS2V5LCBzZXRTZWxlY3RlZEtleV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHBhdGggPSBzZXR0aW5nc1tTRVRUSU5HX0tFWVMuT1BUSU9OX0ZPUl9HUk9VUF0gPT09ICd3ZWJydGMnID8gJ3dlYnJ0Yy8nIDogJyc7XG4gIGNvbnN0IENhdGVnb3J5U3ViTWVudSA9IChcbiAgICA8TWVudSBtb2RlPVwiaW5saW5lXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxuICAgICAge3BlcmZvcm1lckNhdGVnb3JpZXMuZGF0YS5sZW5ndGggPiAwXG4gICAgICAgICYmIHBlcmZvcm1lckNhdGVnb3JpZXMuZGF0YS5tYXAoKGNhdGVnb3J5OiBJUGVyZm9ybWVyQ2F0ZWdvZ2llcykgPT4gKFxuICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgIGtleT17YGNhdGVnb3J5LSR7Y2F0ZWdvcnkuX2lkfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkS2V5KCcnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3BlcmZvcm1lci1jYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIHNsdWc6IGNhdGVnb3J5LnNsdWcsXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeTogSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcnkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhcz17YC9wZXJmb3JtZXItY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhPntjYXRlZ29yeS5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgKSl9XG4gICAgPC9NZW51PlxuICApO1xuXG4gIGNvbnN0IFN0cmVhbWluZ1N1Yk1lbnUgPSAoXG4gICAgPE1lbnU+XG4gICAgICA8TWVudS5JdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRTZWxlY3RlZEtleSgnJyk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbGl2ZVwiPlxuICAgICAgICAgIDxhPkdvIExpdmU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgPExpbmsgaHJlZj17YC9saXZlLyR7cGF0aH1ncm91cGNoYXRgfT5cbiAgICAgICAgICA8YT5Hcm91cCBDaGF0PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICA8L01lbnU+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2QmFyIGFjdGl2ZUtleT17c2VsZWN0ZWRLZXl9PlxuICAgICAgPE5hdkl0ZW1cbiAgICAgICAga2V5PVwiaG9tZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRTZWxlY3RlZEtleSgnaG9tZScpO1xuICAgICAgICB9fVxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIHNoYWxsb3c+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9OYXZJdGVtPlxuICAgICAgPE5hdkl0ZW1cbiAgICAgICAga2V5PVwiaG93IGl0IHdvcmtzXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldFNlbGVjdGVkS2V5KCdob3dpdHdvcmtzJyk7XG4gICAgICAgIH19XG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvaG93LWl0LXdvcmtzXCIgc2hhbGxvdz5cbiAgICAgICAgICA8YT5Ib3cgSXQgV29ya3M8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIGtleT1cImFsbE1vZGVsXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldFNlbGVjdGVkS2V5KCdtb2RlbCcpO1xuICAgICAgICB9fVxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL3BlcmZvcm1lci1jYXRlZ29yeVwiIGFzPVwiL291ci10aGVyYXBpc3RzXCI+XG4gICAgICAgICAgPGE+T3VyIFRoZXJhcGlzdHM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIGtleT1cImxpdmVjYW1cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRLZXkoJ0xpdmVDYW0nKTtcbiAgICAgICAgfX1cbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9saXZlY2FtXCIgc2hhbGxvdz5cbiAgICAgICAgICA8YT5PdXIgVGhlcmFwaXN0czwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9OYXZJdGVtPlxuICAgICAgPE5hdkl0ZW1cbiAgICAgICAga2V5PVwiYWJvdXR1c1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRTZWxlY3RlZEtleSgnQWJvdXRVcycpO1xuICAgICAgICB9fVxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0LXVzXCIgc2hhbGxvdz5cbiAgICAgICAgICA8YT5BYm91dCBVczwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9OYXZJdGVtPlxuICAgICAgPE5hdkl0ZW1cbiAgICAgICAga2V5PVwiY29udGFjdHVzXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldFNlbGVjdGVkS2V5KCdjb250YWN0VVMnKTtcbiAgICAgICAgfX1cbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0LXVzXCIgc2hhbGxvdz5cbiAgICAgICAgICA8YT5Db250YWN0IFVzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgICB7cGVyZm9ybWVyQ2F0ZWdvcmllcy5kYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8RHJvcGRvd24gb3ZlcmxheT17Q2F0ZWdvcnlTdWJNZW51fSBvdmVybGF5Q2xhc3NOYW1lPVwiY2F0ZS1zdWItbWVudS1vdmVybGF5XCI+XG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8c3Bhbj5DYXRlZ29yaWVzPC9zcGFuPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICl9XG5cbiAgICAgIHtsb2dnZWRJbiAmJiBjdXJyZW50VXNlcj8uX2lkICYmIGN1cnJlbnRVc2VyPy5yb2xlID09PSAncGVyZm9ybWVyJyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPE5hdkl0ZW1cbiAgICAgICAgICAgIGtleT1cImxpdmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdoaWRkZW4tc20nLCB7fSl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkS2V5KCdsaXZlJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xpdmVcIj5cbiAgICAgICAgICAgICAgPGE+R28gTGl2ZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPE5hdkl0ZW1cbiAgICAgICAgICAgIGtleT1cImdyb3VwY2hhdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2hpZGRlbi1zbScsIHt9KX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRLZXkoJ2dyb3VwY2hhdCcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9saXZlLyR7cGF0aH1ncm91cGNoYXRgfT5cbiAgICAgICAgICAgICAgPGE+R3JvdXAgQ2hhdDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e1N0cmVhbWluZ1N1Yk1lbnV9PlxuICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwidmlzaWJsZS1zbVwiPlxuICAgICAgICAgICAgICA8TW9yZU91dGxpbmVkIC8+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvTmF2QmFyPlxuICApO1xufTtcblxuTGVmdEhlYWRlckNvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBsb2dnZWRJbjogZmFsc2UsXG4gIGN1cnJlbnRVc2VyOiBudWxsLFxuICBzZXR0aW5nczogbnVsbCxcbiAgcGx1cmFsVGV4dE1vZGVsOiAnJyxcbiAgcGVyZm9ybWVyQ2F0ZWdvcmllczoge1xuICAgIHRvdGFsOiAwLFxuICAgIGRhdGE6IFtdXG4gIH1cbn07XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGxvZ2dlZEluOiBzdGF0ZS5hdXRoLmxvZ2dlZEluLFxuICAuLi5zdGF0ZS5wZXJmb3JtZXIucGVyZm9ybWVycyxcbiAgLi4uc3RhdGUudWlcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2ggPSB7IHVwZGF0ZVVJVmFsdWUgfTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaCkoTGVmdEhlYWRlckNvbnRlbnQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==