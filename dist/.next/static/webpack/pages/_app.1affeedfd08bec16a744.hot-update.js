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
    key: "livecam",
    onClick: function onClick() {
      setSelectedKey('LiveCam');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/livecam",
    shallow: true,
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
    key: "aboutus",
    onClick: function onClick() {
      setSelectedKey('AboutUs');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/about-us",
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
  }, "About Us"))), __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    key: "contactus",
    onClick: function onClick() {
      setSelectedKey('contactUS');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/contact-us",
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
  }, "Contact Us"))), performerCategories.data.length > 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: CategorySubMenu,
    overlayClassName: "cate-sub-menu-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, "Categories"))), __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    key: "allModel",
    onClick: function onClick() {
      setSelectedKey('model');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/performer-category",
    as: "/our-therapists",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, 'Our Therapists'))), loggedIn && (currentUser === null || currentUser === void 0 ? void 0 : currentUser._id) && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === 'performer' && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    key: "live",
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('hidden-sm', {}),
    onClick: function onClick() {
      setSelectedKey('live');
    },
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/live",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
      lineNumber: 172,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/live/".concat(path, "groupchat"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, "Group Chat"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: StreamingSubMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, __jsx(_components_common_base_nav__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
    className: "visible-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["MoreOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dC9sZWZ0LWhlYWRlci1jb250ZW50LnRzeCJdLCJuYW1lcyI6WyJMZWZ0SGVhZGVyQ29udGVudCIsImxvZ2dlZEluIiwiY3VycmVudFVzZXIiLCJwbHVyYWxUZXh0TW9kZWwiLCJwZXJmb3JtZXJDYXRlZ29yaWVzIiwic2V0dGluZ3MiLCJSZWFjdCIsInVzZVN0YXRlIiwic2VsZWN0ZWRLZXkiLCJzZXRTZWxlY3RlZEtleSIsInBhdGgiLCJTRVRUSU5HX0tFWVMiLCJPUFRJT05fRk9SX0dST1VQIiwiQ2F0ZWdvcnlTdWJNZW51IiwiZGlzcGxheSIsImZsZXhXcmFwIiwiZGF0YSIsImxlbmd0aCIsIm1hcCIsImNhdGVnb3J5IiwiX2lkIiwicGF0aG5hbWUiLCJxdWVyeSIsInNsdWciLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsIlN0cmVhbWluZ1N1Yk1lbnUiLCJyb2xlIiwiY2xhc3NuYW1lcyIsImRlZmF1bHRQcm9wcyIsInRvdGFsIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhdXRoIiwicGVyZm9ybWVyIiwicGVyZm9ybWVycyIsInVpIiwibWFwRGlzcGF0Y2giLCJ1cGRhdGVVSVZhbHVlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FNYjtBQUFBOztBQUFBLE1BTFhDLFFBS1csUUFMWEEsUUFLVztBQUFBLE1BSlhDLFdBSVcsUUFKWEEsV0FJVztBQUFBLE1BSFhDLGVBR1csUUFIWEEsZUFHVztBQUFBLE1BRlhDLG1CQUVXLFFBRlhBLG1CQUVXO0FBQUEsTUFEWEMsUUFDVyxRQURYQSxRQUNXOztBQUNYLHdCQUFzQ0MsNENBQUssQ0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBekJGLENBM0VKLENBREY7QUE4R0QsQ0FyS0Q7O0dBQU0zQixpQjs7S0FBQUEsaUI7QUF1S05BLGlCQUFpQixDQUFDOEIsWUFBbEIsR0FBaUM7QUFDL0I3QixVQUFRLEVBQUUsS0FEcUI7QUFFL0JDLGFBQVcsRUFBRSxJQUZrQjtBQUcvQkcsVUFBUSxFQUFFLElBSHFCO0FBSS9CRixpQkFBZSxFQUFFLEVBSmM7QUFLL0JDLHFCQUFtQixFQUFFO0FBQ25CMkIsU0FBSyxFQUFFLENBRFk7QUFFbkJmLFFBQUksRUFBRTtBQUZhO0FBTFUsQ0FBakM7O0FBVUEsSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBO0FBQ3RCaEMsWUFBUSxFQUFFZ0MsS0FBSyxDQUFDQyxJQUFOLENBQVdqQztBQURDLEtBRW5CZ0MsS0FBSyxDQUFDRSxTQUFOLENBQWdCQyxVQUZHLEdBR25CSCxLQUFLLENBQUNJLEVBSGE7QUFBQSxDQUF4Qjs7QUFLQSxJQUFNQyxXQUFXLEdBQUc7QUFBRUMsZUFBYSxFQUFiQSxrRUFBYUE7QUFBZixDQUFwQjtBQUNlQywwSEFBTyxDQUFDUixlQUFELEVBQWtCTSxXQUFsQixDQUFQLENBQXNDdEMsaUJBQXRDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xYWZmZWVkZmQwOGJlYzE2YTc0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnUsIERyb3Bkb3duIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVwZGF0ZVVJVmFsdWUgfSBmcm9tICdzcmMvcmVkdXgvdWkvYWN0aW9ucyc7XG5pbXBvcnQge1xuICBJUGVyZm9ybWVyQ2F0ZWdvZ2llcyxcbiAgSURhdGFSZXNwb25zZSxcbiAgSVBlcmZvcm1lcixcbiAgSVN0dWRpbyxcbiAgSVVzZXIsXG4gIFN0cmVhbVNldHRpbmdzXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCAnLi9sZWZ0LWhlYWRlci1jb250ZW50Lmxlc3MnO1xuaW1wb3J0IHsgU0VUVElOR19LRVlTIH0gZnJvbSAnc3JjL2NvbnN0YW50cyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IE1vcmVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IE5hdkJhciwgTmF2SXRlbSB9IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9iYXNlL25hdic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxvZ2dlZEluPzogYm9vbGVhbjtcbiAgY3VycmVudFVzZXI/OiBJUGVyZm9ybWVyICYgSVVzZXIgJiBJU3R1ZGlvO1xuICBwZXJmb3JtZXJDYXRlZ29yaWVzPzogSURhdGFSZXNwb25zZTxJUGVyZm9ybWVyQ2F0ZWdvZ2llcz47XG4gIHNldHRpbmdzPzogU3RyZWFtU2V0dGluZ3M7XG4gIHBsdXJhbFRleHRNb2RlbD86IHN0cmluZztcbn1cblxuY29uc3QgTGVmdEhlYWRlckNvbnRlbnQgPSAoe1xuICBsb2dnZWRJbixcbiAgY3VycmVudFVzZXIsXG4gIHBsdXJhbFRleHRNb2RlbCxcbiAgcGVyZm9ybWVyQ2F0ZWdvcmllcyxcbiAgc2V0dGluZ3Ncbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEtleSwgc2V0U2VsZWN0ZWRLZXldID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICBjb25zdCBwYXRoID0gc2V0dGluZ3NbU0VUVElOR19LRVlTLk9QVElPTl9GT1JfR1JPVVBdID09PSAnd2VicnRjJyA/ICd3ZWJydGMvJyA6ICcnO1xuICBjb25zdCBDYXRlZ29yeVN1Yk1lbnUgPSAoXG4gICAgPE1lbnUgbW9kZT1cImlubGluZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgIHtwZXJmb3JtZXJDYXRlZ29yaWVzLmRhdGEubGVuZ3RoID4gMFxuICAgICAgICAmJiBwZXJmb3JtZXJDYXRlZ29yaWVzLmRhdGEubWFwKChjYXRlZ29yeTogSVBlcmZvcm1lckNhdGVnb2dpZXMpID0+IChcbiAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICBrZXk9e2BjYXRlZ29yeS0ke2NhdGVnb3J5Ll9pZH1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZEtleSgnJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wZXJmb3JtZXItY2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICBzbHVnOiBjYXRlZ29yeS5zbHVnLFxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXM9e2AvcGVyZm9ybWVyLWNhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Z31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YT57Y2F0ZWdvcnkubmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICkpfVxuICAgIDwvTWVudT5cbiAgKTtcblxuICBjb25zdCBTdHJlYW1pbmdTdWJNZW51ID0gKFxuICAgIDxNZW51PlxuICAgICAgPE1lbnUuSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRLZXkoJycpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL2xpdmVcIj5cbiAgICAgICAgICA8YT5HbyBMaXZlPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvbGl2ZS8ke3BhdGh9Z3JvdXBjaGF0YH0+XG4gICAgICAgICAgPGE+R3JvdXAgQ2hhdDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgPC9NZW51PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkJhciBhY3RpdmVLZXk9e3NlbGVjdGVkS2V5fT5cbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIGtleT1cImhvbWVcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRLZXkoJ2hvbWUnKTtcbiAgICAgICAgfX1cbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBzaGFsbG93PlxuICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIGtleT1cImhvdyBpdCB3b3Jrc1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRTZWxlY3RlZEtleSgnaG93aXR3b3JrcycpO1xuICAgICAgICB9fVxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL2hvdy1pdC13b3Jrc1wiIHNoYWxsb3c+XG4gICAgICAgICAgPGE+SG93IEl0IFdvcmtzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgICA8TmF2SXRlbVxuICAgICAgICBrZXk9XCJsaXZlY2FtXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldFNlbGVjdGVkS2V5KCdMaXZlQ2FtJyk7XG4gICAgICAgIH19XG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbGl2ZWNhbVwiIHNoYWxsb3c+XG4gICAgICAgICAgPGE+T3VyIFRoZXJhcGlzdHM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIGtleT1cImFib3V0dXNcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRLZXkoJ0Fib3V0VXMnKTtcbiAgICAgICAgfX1cbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dC11c1wiIHNoYWxsb3c+XG4gICAgICAgICAgPGE+QWJvdXQgVXM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIGtleT1cImNvbnRhY3R1c1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRTZWxlY3RlZEtleSgnY29udGFjdFVTJyk7XG4gICAgICAgIH19XG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiIHNoYWxsb3c+XG4gICAgICAgICAgPGE+Q29udGFjdCBVczwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9OYXZJdGVtPlxuICAgICAge3BlcmZvcm1lckNhdGVnb3JpZXMuZGF0YS5sZW5ndGggPiAwICYmIChcbiAgICAgIDxEcm9wZG93biBvdmVybGF5PXtDYXRlZ29yeVN1Yk1lbnV9IG92ZXJsYXlDbGFzc05hbWU9XCJjYXRlLXN1Yi1tZW51LW92ZXJsYXlcIj5cbiAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgPHNwYW4+Q2F0ZWdvcmllczwvc3Bhbj5cbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICl9XG4gICAgICA8TmF2SXRlbVxuICAgICAgICBrZXk9XCJhbGxNb2RlbFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRTZWxlY3RlZEtleSgnbW9kZWwnKTtcbiAgICAgICAgfX1cbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wZXJmb3JtZXItY2F0ZWdvcnlcIiBhcz1cIi9vdXItdGhlcmFwaXN0c1wiPlxuICAgICAgICAgIDxhPntgJHsnT3VyIFRoZXJhcGlzdHMnfWB9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgICB7bG9nZ2VkSW4gJiYgY3VycmVudFVzZXI/Ll9pZCAmJiBjdXJyZW50VXNlcj8ucm9sZSA9PT0gJ3BlcmZvcm1lcicgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxOYXZJdGVtXG4gICAgICAgICAgICBrZXk9XCJsaXZlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnaGlkZGVuLXNtJywge30pfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZEtleSgnbGl2ZScpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9saXZlXCI+XG4gICAgICAgICAgICAgIDxhPkdvIExpdmU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtXG4gICAgICAgICAgICBrZXk9XCJncm91cGNoYXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdoaWRkZW4tc20nLCB7fSl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkS2V5KCdncm91cGNoYXQnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbGl2ZS8ke3BhdGh9Z3JvdXBjaGF0YH0+XG4gICAgICAgICAgICAgIDxhPkdyb3VwIENoYXQ8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXtTdHJlYW1pbmdTdWJNZW51fT5cbiAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cInZpc2libGUtc21cIj5cbiAgICAgICAgICAgICAgPE1vcmVPdXRsaW5lZCAvPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L05hdkJhcj5cbiAgKTtcbn07XG5cbkxlZnRIZWFkZXJDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgbG9nZ2VkSW46IGZhbHNlLFxuICBjdXJyZW50VXNlcjogbnVsbCxcbiAgc2V0dGluZ3M6IG51bGwsXG4gIHBsdXJhbFRleHRNb2RlbDogJycsXG4gIHBlcmZvcm1lckNhdGVnb3JpZXM6IHtcbiAgICB0b3RhbDogMCxcbiAgICBkYXRhOiBbXVxuICB9XG59O1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBsb2dnZWRJbjogc3RhdGUuYXV0aC5sb2dnZWRJbixcbiAgLi4uc3RhdGUucGVyZm9ybWVyLnBlcmZvcm1lcnMsXG4gIC4uLnN0YXRlLnVpXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoID0geyB1cGRhdGVVSVZhbHVlIH07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2gpKExlZnRIZWFkZXJDb250ZW50KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=