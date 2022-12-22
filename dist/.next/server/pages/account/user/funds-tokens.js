module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/account/user/funds-tokens": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/account/user/funds-tokens/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/account/user/funds-tokens/index.less":
/*!****************************************************!*\
  !*** ./pages/account/user/funds-tokens/index.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/account/user/funds-tokens/index.tsx":
/*!***************************************************!*\
  !*** ./pages/account/user/funds-tokens/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_layout_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/common/layout/page-header */ "./src/components/common/layout/page-header.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_common_base_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/common/base/loader */ "./src/components/common/base/loader.tsx");
/* harmony import */ var src_components_common_base_token_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/common/base/token-card */ "./src/components/common/base/token-card.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./pages/account/user/funds-tokens/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/lib/utils */ "./src/lib/utils.ts");
/* harmony import */ var _services_token_package_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/token-package.service */ "./src/services/token-package.service.ts");
/* harmony import */ var src_redux_user_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/redux/user/actions */ "./src/redux/user/actions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
var _jsxFileName = "E:\\programData\\React\\cams-3\\user\\pages\\account\\user\\funds-tokens\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-nested-ternary */













class UserTokensPage extends react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"] {
  static getInitialProps({
    ctx
  }) {
    const {
      query
    } = ctx;
    return {
      action: query.action
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      tokens: [],
      fetching: false,
      buying: null
    };
  }

  componentDidMount() {
    this.getTokens();
  }

  async getTokens() {
    try {
      this.setState({
        fetching: true
      });
      const resp = await _services_token_package_service__WEBPACK_IMPORTED_MODULE_8__["tokenPackageService"].search({
        sortBy: 'ordering',
        sort: 'asc'
      });
      this.setState({
        tokens: resp.data.data || []
      });
    } catch (e) {
      const error = await Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_7__["getResponseError"])(error));
    } finally {
      this.setState({
        fetching: false
      });
    }
  }

  async buyToken(tokenPackage) {
    try {
      this.setState({
        buying: tokenPackage._id
      });
      console.log(tokenPackage._id);
      const resp = await _services_token_package_service__WEBPACK_IMPORTED_MODULE_8__["tokenPackageService"].buyTokens(tokenPackage._id);

      if (resp.data) {
        if (Object(_lib_string__WEBPACK_IMPORTED_MODULE_11__["isUrl"])(resp.data.paymentUrl)) {
          window.open(resp.data.paymentUrl);
        } // message.success('Buy token success');
        // this.props.buyTokenSuccess(tokenPackage.tokens);

      }
    } catch (e) {
      const error = await Promise.resolve(e);
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error(Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_7__["getResponseError"])(error));
    } finally {
      this.setState({
        buying: null
      });
    }
  }

  render() {
    const {
      fetching,
      tokens,
      buying
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }, "Funds - Tokens")), __jsx("div", {
      className: "funds-tokens-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, __jsx(_components_common_layout_page_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Buy More Tokens",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "tokens-section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "tokens-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }
    }, fetching ? __jsx(src_components_common_base_loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 19
      }
    }) : tokens && tokens.length ? tokens.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      xs: 12,
      md: 8,
      xl: 6,
      xxl: 4,
      key: item._id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    }, __jsx(src_components_common_base_token_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: item.name,
      token: item.tokens,
      price: item.price,
      description: item.description,
      onBuyToken: () => this.buyToken(item),
      buying: item._id === buying,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 23
      }
    }))) : 'There is no data')))));
  }

}

_defineProperty(UserTokensPage, "authenticate", true);

_defineProperty(UserTokensPage, "layout", 'primary');

const mapStateToProps = () => ({});

const mapDispatch = {
  buyTokenSuccess: src_redux_user_actions__WEBPACK_IMPORTED_MODULE_9__["buyTokenSuccess"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatch)(UserTokensPage));

/***/ }),

/***/ "./src/components/common/base/loader.less":
/*!************************************************!*\
  !*** ./src/components/common/base/loader.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/base/loader.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/base/loader.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.less */ "./src/components/common/base/loader.less");
/* harmony import */ var _loader_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_less__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Loader = ({
  spinning = false,
  fullScreen = false
}) => __jsx("div", {
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('loader', {
    hidden: !spinning,
    fullScreen
  })
}, __jsx("div", {
  className: "warpper"
}));

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/components/common/base/token-card.less":
/*!****************************************************!*\
  !*** ./src/components/common/base/token-card.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/base/token-card.tsx":
/*!***************************************************!*\
  !*** ./src/components/common/base/token-card.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/common/layout/numberformat */ "./src/components/common/layout/numberformat.tsx");
/* harmony import */ var _token_card_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-card.less */ "./src/components/common/base/token-card.less");
/* harmony import */ var _token_card_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_token_card_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\programData\\React\\cams-3\\user\\src\\components\\common\\base\\token-card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const TokenCard = _ref => {
  let {
    token,
    price,
    buying,
    currencySymbol,
    name,
    description
  } = _ref,
      props = _objectWithoutProperties(_ref, ["token", "price", "buying", "currencySymbol", "name", "description"]);

  return __jsx("div", {
    className: "token-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "card-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "coin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "current-coin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/crown.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "x", token)))), __jsx(_components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: token,
    suffix: " Token for ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }), __jsx(_components_common_layout_numberformat__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: price,
    prefix: currencySymbol,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, name), description ? __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
    content: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 52
    }
  }, description)) : __jsx("div", {
    style: {
      color: '#000000'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 115
    }
  }, "No description"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    onClick: () => props.onBuyToken(),
    loading: buying,
    disabled: buying,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "Buy Now"));
};

TokenCard.defaultProps = {
  onBuyToken: null,
  buying: false,
  currencySymbol: '$',
  description: ''
};

const mapStateToProps = state => _objectSpread({}, state.ui);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(TokenCard));

/***/ }),

/***/ "./src/components/common/layout/numberformat.tsx":
/*!*******************************************************!*\
  !*** ./src/components/common/layout/numberformat.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberFormat; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const NumberFormatNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-number-format */ "react-number-format", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-number-format */ "react-number-format")],
    modules: ['react-number-format']
  }
});
function NumberFormat(_ref) {
  let {
    decimalScale
  } = _ref,
      props = _objectWithoutProperties(_ref, ["decimalScale"]);

  return __jsx(NumberFormatNoSSR, _extends({}, props, {
    displayType: "text",
    decimalScale: decimalScale || 2,
    decimalSeparator: ".",
    thousandSeparator: ","
  }));
}

/***/ }),

/***/ "./src/components/common/layout/page-header.tsx":
/*!******************************************************!*\
  !*** ./src/components/common/layout/page-header.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\programData\\React\\cams-3\\user\\src\\components\\common\\layout\\page-header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  extra
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], {
  title: title,
  extra: extra,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./src/lib/redux.ts":
/*!**************************!*\
  !*** ./src/lib/redux.ts ***!
  \**************************/
/*! exports provided: createSagas, createAction, createAsyncAction, createAsyncActions, createSelectorsA, handleActions, createReducers, createSelectors, createSelector, createJSSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSagas", function() { return createSagas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncAction", function() { return createAsyncAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncActions", function() { return createAsyncActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorsA", function() { return createSelectorsA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleActions", function() { return handleActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducers", function() { return createReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectors", function() { return createSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createJSSelectors", function() { return createJSSelectors; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return reselect__WEBPACK_IMPORTED_MODULE_1__["createSelector"]; });

/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable func-names */

/* eslint-disable no-param-reassign */





function createAction(type) {
  const action = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])(type);

  action.is = aType => action.toString() === aType;

  return action;
}
/* tslint:disable-next-line */


function createAsyncAction(action, type) {
  return {
    [action]: createAction(type),
    [`${action}Success`]: createAction(`${type}_SUCCESS`),
    [`${action}Fail`]: createAction(`${type}_FAIL`)
  };
}

function createAsyncActions(type) {
  return [createAction(type), createAction(`${type}_SUCCESS`), createAction(`${type}_FAIL`)];
}
/* tslint:disable */


function handleActions(actions, initialState) {
  return Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(actions, (reducer, handler, action) => {
    reducer[action] = (state, act) => handler(state.set('action', action), act);

    return reducer;
  }, {}), initialState);
}

function createReducers(stateContext, reducers, initialState, preventResetting = false) {
  return {
    [stateContext]: Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(reducers), (reducer, action) => {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(action.on)) {
        action.on.forEach(act => {
          reducer[act] = action.reducer;
        });
      } else reducer[action.on] = action.reducer;

      return reducer;
    }, preventResetting ? {} : {
      APP_STATE_RESET: () => initialState
    }), initialState)
  };
}

function createSagas(sagas) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(sagas).map(saga => {
    const {
      on,
      effect = redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"],
      worker
    } = saga;
    return function* () {
      yield effect(on, function* (action) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(0);
        yield worker(action);
      });
    };
  });
}

function createSelectorsA(context, keys = []) {
  const stateSelector = state => state[context];

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(keys)) return stateSelector;
  return keys.map(key => state => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(key) ? stateSelector(state).getIn(key) : stateSelector(state).get(key));
}

function createSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state).get(key);

    return selectors;
  }, {});
}

function createJSSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state)[key];

    return selectors;
  }, {});
}



/***/ }),

/***/ "./src/lib/string.ts":
/*!***************************!*\
  !*** ./src/lib/string.ts ***!
  \***************************/
/*! exports provided: isUrl, generateUuid, capitalizeFirstLetter, unitPrices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return isUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUuid", function() { return generateUuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitPrices", function() { return unitPrices; });
function isUrl(url) {
  return url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g) !== null;
}
const generateUuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  /* eslint-disable */
  const r = Math.random() * 16 | 0;
  const v = c === 'x' ? r : r & 0x3 | 0x8;
  return v.toString(16);
  /* eslint-enable */
});
function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const unitPrices = [{
  value: 15,
  text: '15 tokens'
}, {
  value: 20,
  text: '20 tokens'
}, {
  value: 25,
  text: '25 tokens'
}, {
  value: 30,
  text: '30 tokens'
}, {
  value: 35,
  text: '35 tokens'
}, {
  value: 40,
  text: '40 tokens'
}, {
  value: 45,
  text: '45 tokens'
}, {
  value: 50,
  text: '50 tokens'
} // {
//   value: 55,
//   text: '55 tokens'
// },
// {
//   value: 60,
//   text: '60 tokens'
// },
// {
//   value: 65,
//   text: '65 tokens'
// },
// {
//   value: 70,
//   text: '70 tokens'
// },
// {
//   value: 75,
//   text: '75 tokens'
// },
// {
//   value: 80,
//   text: '80 tokens'
// },
// {
//   value: 85,
//   text: '85 tokens'
// },
// {
//   value: 90,
//   text: '90 tokens'
// },
// {
//   value: 95,
//   text: '95 tokens'
// },
// {
//   value: 100,
//   text: '100 tokens'
// },
// {
//   value: 120,
//   text: '120 tokens'
// },
// {
//   value: 140,
//   text: '140 tokens'
// },
// {
//   value: 160,
//   text: '160 tokens'
// },
// {
//   value: 180,
//   text: '180 tokens'
// },
// {
//   value: 200,
//   text: '200 tokens'
// },
// {
//   value: 220,
//   text: '220 tokens'
// },
// {
//   value: 240,
//   text: '240 tokens'
// },
// {
//   value: 260,
//   text: '260 tokens'
// },
// {
//   value: 280,
//   text: '280 tokens'
// },
// {
//   value: 300,
//   text: '300 tokens'
// },
// {
//   value: 320,
//   text: '320 tokens'
// },
// {
//   value: 340,
//   text: '340 tokens'
// },
// {
//   value: 360,
//   text: '360 tokens'
// },
// {
//   value: 380,
//   text: '380 tokens'
// },
// {
//   value: 400,
//   text: '400 tokens'
// },
// {
//   value: 420,
//   text: '420 tokens'
// },
// {
//   value: 440,
//   text: '440 tokens'
// },
// {
//   value: 460,
//   text: '460 tokens'
// },
// {
//   value: 480,
//   text: '480 tokens'
// },
// {
//   value: 500,
//   text: '500 tokens'
// },
// {
//   value: 550,
//   text: '550 tokens'
// },
// {
//   value: 600,
//   text: '600 tokens'
// },
// {
//   value: 650,
//   text: '650 tokens'
// },
// {
//   value: 700,
//   text: '700 tokens'
// },
// {
//   value: 750,
//   text: '750 tokens'
// },
// {
//   value: 800,
//   text: '800 tokens'
// },
// {
//   value: 850,
//   text: '850 tokens'
// },
// {
//   value: 900,
//   text: '900 tokens'
// },
// {
//   value: 950,
//   text: '950 tokens'
// },
// {
//   value: 1000,
//   text: '1000 tokens'
// }
];

/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/*! exports provided: arrayToTree, pathMatchRegexp, queryAncestors, getResponseError, isMobile, getUrlParameter, DAY_OF_WEEK, getDefaultSchedule, getNextShow, getSearchData, getBase64, convertConnectionData, checkUserLogin, getCurrentUser, isPhysicalProduct, chatBoxMessageClassName, formatDataWeight, formatDataHeight, formatPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToTree", function() { return arrayToTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathMatchRegexp", function() { return pathMatchRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAncestors", function() { return queryAncestors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponseError", function() { return getResponseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParameter", function() { return getUrlParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAY_OF_WEEK", function() { return DAY_OF_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSchedule", function() { return getDefaultSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextShow", function() { return getNextShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchData", function() { return getSearchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBase64", function() { return getBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertConnectionData", function() { return convertConnectionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserLogin", function() { return checkUserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPhysicalProduct", function() { return isPhysicalProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatBoxMessageClassName", function() { return chatBoxMessageClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataWeight", function() { return formatDataWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataHeight", function() { return formatDataHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path-to-regexp */ "path-to-regexp");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/api-request */ "./src/services/api-request.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Convert an array to a tree-structured array.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @param   {string}    parentId       The alias of the parent ID of the object in the array.
 * @param   {string}    children  The alias of children of the object in the array.
 * @return  {array}    Return a tree-structured array.
 */

function arrayToTree(array, id = 'id', parentId = 'pid', children = 'children') {
  const result = [];
  const hash = {};
  const data = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(array);
  data.forEach((item, index) => {
    hash[data[index][id]] = data[index];
  });
  data.forEach(item => {
    const hashParent = hash[item[parentId]];

    if (hashParent) {
      !hashParent[children] && (hashParent[children] = []);
      hashParent[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
/**
 * Whether the path matches the regexp if the language prefix is ignored, https://github.com/pillarjs/path-to-regexp.
 * @param   {string|regexp|array}     regexp     Specify a string, array of strings, or a regular expression.
 * @param   {string}                  pathname   Specify the pathname to match.
 * @return  {array|null}              Return the result of the match or null.
 */

function pathMatchRegexp(regexp, pathname) {
  return path_to_regexp__WEBPACK_IMPORTED_MODULE_1__["pathToRegexp"](regexp).exec(pathname);
}
/**
 * In an array of objects, specify an object that traverses the objects whose parent ID matches.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    current   Specify the object that needs to be queried.
 * @param   {string}    parentId  The alias of the parent ID of the object in the array.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @return  {array}    Return a key array.
 */

function queryAncestors(array, current, parentId, id = 'id') {
  const result = [current];
  const hashMap = new Map();
  array.forEach(item => hashMap.set(item[id], item)); // eslint-disable-next-line no-shadow

  const getPath = current => {
    const currentParentId = hashMap.get(current[id])[parentId];

    if (currentParentId) {
      result.push(hashMap.get(currentParentId));
      getPath(hashMap.get(currentParentId));
    }
  };

  getPath(current);
  return result;
}
function getResponseError(data) {
  if (!data) {
    return 'Bad request!';
  }

  if (typeof data === 'string') {
    return data;
  }

  if (Array.isArray(data.message)) {
    const item = data.message[0];

    if (!item.constraints) {
      return data.error || 'Bad request!';
    }

    return Object.values(item.constraints)[0];
  } // TODO - parse for langauge or others


  return typeof data.message === 'string' ? data.message : 'Bad request!';
}
function isMobile() {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    return true;
  }

  return false;
} // eslint-disable-next-line consistent-return

function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');
  let sParameterName;
  let i;

  for (i = 0; i < sURLVariables.length; i += 1) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}
const DAY_OF_WEEK = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday'
};
function getDefaultSchedule() {
  const defaultVal = {
    start: null,
    end: null,
    closed: true
  };
  return {
    mon: _objectSpread({}, defaultVal),
    tue: _objectSpread({}, defaultVal),
    wed: _objectSpread({}, defaultVal),
    thu: _objectSpread({}, defaultVal),
    fri: _objectSpread({}, defaultVal),
    sat: _objectSpread({}, defaultVal),
    sun: _objectSpread({}, defaultVal)
  };
}
function getNextShow(schedule) {
  let weekDay = parseInt(moment__WEBPACK_IMPORTED_MODULE_2___default()().format('e'), 10);
  let i = 0;
  let nextShow;
  const performerShows = Object.keys(schedule).filter(key => !schedule[key].closed);

  do {
    const date = moment__WEBPACK_IMPORTED_MODULE_2___default()().day(weekDay).format('ddd').toLowerCase();

    if (performerShows.indexOf(date) > -1) {
      nextShow = date;
    }

    weekDay += 1;
    i += 1;
  } while (i < 7 && !nextShow);

  if (nextShow) {
    return `${schedule[nextShow].start} ${moment__WEBPACK_IMPORTED_MODULE_2___default()().day(weekDay - 1).format('DD/MM/YYYY')}`;
  }

  return '';
}
function getSearchData(pagination, filters, sorter, state) {
  let {
    sort,
    sortBy,
    filter
  } = state;
  const {
    limit
  } = state;

  if (filters) {
    Object.keys(filters).forEach(key => {
      if (filters[key] && filters[key].length) {
        // eslint-disable-next-line prefer-destructuring
        filter[key] = filters[key][0];
      }

      if (!filters[key]) {
        filter[key] = '';
      }
    });
  } else {
    filter = {};
  }

  if (sorter) {
    if (sorter.order) {
      const {
        field,
        order
      } = sorter;
      sort = _services_api_request__WEBPACK_IMPORTED_MODULE_3__["SORT"][order];
      sortBy = field;
    } else {
      sortBy = 'createdAt';
      sort = 'desc';
    }
  }

  return _objectSpread(_objectSpread(_objectSpread({}, state), filter), {}, {
    sort,
    sortBy,
    offset: (pagination.current - 1) * limit
  });
}
function getBase64(originFileObj, status = 'uploading', file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    if (originFileObj) {
      reader.readAsDataURL(originFileObj);

      reader.onload = () => resolve(_objectSpread(_objectSpread({}, originFileObj), {}, {
        status,
        name: originFileObj.name,
        url: reader.result,
        originFileObj
      }));

      reader.onerror = error => reject(error);
    } else {
      resolve(file);
    }
  });
}
function convertConnectionData(data) {
  const arr = data.split('%/%');
  const serverData = arr[1] && JSON.parse(arr[1]);
  const clientData = arr[0] && JSON.parse(arr[0]);
  return {
    serverData,
    clientData
  };
}
function checkUserLogin(isLoggedIn, user) {
  if (!isLoggedIn) return false;
  if (!user && !user._id) return false;
  return true;
}
function getCurrentUser(user, performer) {
  if (user && user._id) return user;
  if (performer && performer._id) return performer;
  return null;
}
function isPhysicalProduct(item) {
  if (item && item.type === 'physical') return true;
  return false;
}
function chatBoxMessageClassName(req) {
  const {
    isMine,
    startsSequence,
    endsSequence,
    data: {
      type
    }
  } = req;
  return classnames__WEBPACK_IMPORTED_MODULE_4___default()('message', {
    mine: isMine && type !== 'tip'
  }, {
    tip: type === 'tip'
  }, {
    start: !!startsSequence
  }, {
    end: !!endsSequence
  });
}

function convertFeetToCm(feet, inch) {
  const [f] = feet.split('.');
  const [i] = inch.split('.');
  return (parseInt(f, 10) * 12 + parseInt(i, 10)) * 2.54;
}

function formatDataWeight(min = 99, max = 319) {
  let i = min;
  const result = [];

  do {
    result[i] = (i * 0.45).toFixed(2);
    i += 1;
  } while (i < max);

  return result.map((v, index) => ({
    label: `${index}  lbs (${v}kg)`,
    value: `${index} lbs`
  }));
}
function formatDataHeight(min = 4, max = 7) {
  const result = [];

  for (let feet = min; feet < max; feet += 1) {
    for (let inch = 0; inch <= 11; inch += 1) {
      const a = convertFeetToCm(feet.toFixed(1).toString(), inch.toFixed(1).toString());
      result.push(`${feet}'${inch}" (${a.toFixed(2)} cm)`);
    }
  }

  return result.map(f => ({
    label: `${f}`,
    value: `${f}`
  }));
}
function formatPrice(price, fractionDigits = 2) {
  if (price) {
    return price.toFixed(fractionDigits);
  }

  return '';
}

/***/ }),

/***/ "./src/redux/user/actions.ts":
/*!***********************************!*\
  !*** ./src/redux/user/actions.ts ***!
  \***********************************/
/*! exports provided: updateCurrentUser, updateCurrentUserAvatar, updateCurrentUserBalance, updateUser, updateUserSuccess, updateUserFail, setUpdating, setReducer, buyTokenSuccess, getFavoritePerformers, getFavoritePerformersSuccess, getFavoritePerformersFailed, gettingFavoritePerformers, removeFavorite, getPaymentTokenHistroy, getPaymentTokenHistroySuccess, getPaymentTokenHistroyFail, gettigPaymentTokenHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUser", function() { return updateCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUserAvatar", function() { return updateCurrentUserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUserBalance", function() { return updateCurrentUserBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserSuccess", function() { return updateUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserFail", function() { return updateUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdating", function() { return setUpdating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReducer", function() { return setReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buyTokenSuccess", function() { return buyTokenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritePerformers", function() { return getFavoritePerformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritePerformersSuccess", function() { return getFavoritePerformersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFavoritePerformersFailed", function() { return getFavoritePerformersFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingFavoritePerformers", function() { return gettingFavoritePerformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFavorite", function() { return removeFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentTokenHistroy", function() { return getPaymentTokenHistroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentTokenHistroySuccess", function() { return getPaymentTokenHistroySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentTokenHistroyFail", function() { return getPaymentTokenHistroyFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettigPaymentTokenHistory", function() { return gettigPaymentTokenHistory; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateCurrentUser = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentUser');
const updateCurrentUserAvatar = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentUserAvatar');
const updateCurrentUserBalance = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentUserBalance');
const {
  updateUser,
  updateUserSuccess,
  updateUserFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updateUser', 'UPDATE_USER');
const setUpdating = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updatingUser');
const setReducer = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setUserReducer');
const buyTokenSuccess = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('buyTokenSuccess');
const {
  getFavoritePerformers,
  getFavoritePerformersSuccess,
  getFavoritePerformersFailed
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getFavoritePerformers', 'GET_FAVOURITE');
const gettingFavoritePerformers = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GETTING_FAVORITE');
const removeFavorite = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('REMOVE_FAVORITE');
const {
  getPaymentTokenHistroy,
  getPaymentTokenHistroySuccess,
  getPaymentTokenHistroyFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPaymentTokenHistroy', 'GET_PAYMET_TOKE_HISTORY');
const gettigPaymentTokenHistory = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GETTING_PAYMET_TOKE_HISTORY');

/***/ }),

/***/ "./src/services/api-request.ts":
/*!*************************************!*\
  !*** ./src/services/api-request.ts ***!
  \*************************************/
/*! exports provided: TOKEN, ROLE, PERFORMER_ROLE, USER_ROLE, STUDIO_ROLE, SORT, APIRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE", function() { return ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERFORMER_ROLE", function() { return PERFORMER_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROLE", function() { return USER_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDIO_ROLE", function() { return STUDIO_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT", function() { return SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIRequest", function() { return APIRequest; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const TOKEN = 'token';
const ROLE = 'role';
const PERFORMER_ROLE = 'performer';
const USER_ROLE = 'user';
const STUDIO_ROLE = 'studio';
const SORT = {
  descend: 'desc',
  ascend: 'asc'
};
class APIRequest {
  setAuthHeaderToken(token) {
    APIRequest.token = token;
  }
  /**
   * Parses the JSON returned by a network request
   *
   * @param  {object} response A response from a network request
   *
   * @return {object}          The parsed JSON from the request
   */


  parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }

    return response.json();
  }
  /**
   * Checks if a network request came back fine, and throws an error if not
   *
   * @param  {object} response   A response from a network request
   *
   * @return {object|undefined} Returns either the response, or throws an error
   */


  async checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    if (response.status === 413) {
      throw new Error('Request Entity Too Large');
    }

    if (response.status === 403) {
      if (false) {}
    } // const error = new Error(response.statusText) as any;
    // error.response = response;
    // throw error;


    throw response.clone().json();
  }

  request(url, method, body, headers) {
    const verb = (method || 'get').toUpperCase();

    const updatedHeader = _objectSpread({
      'Content-Type': 'application/json',
      // TODO - check me
      Authorization: APIRequest.token || (false ? undefined : '')
    }, headers || {});

    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__["isUrl"])(url) ? url : `${config.API_ENDPOINT || config.NEXT_PUBLIC_API_ENDPOINT}${url}`, {
      method: verb,
      headers: updatedHeader,
      body: body ? JSON.stringify(body) : null
    }).then(this.checkStatus).then(this.parseJSON);
  }

  buildUrl(baseUrl, params) {
    if (!params) {
      return baseUrl;
    }

    const queryString = Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
    return `${baseUrl}?${queryString}`;
  }

  get(url, headers) {
    return this.request(url, 'get', null, headers);
  }

  post(url, data, headers) {
    return this.request(url, 'post', data, headers);
  }

  put(url, data, headers) {
    return this.request(url, 'put', data, headers);
  }

  del(url, data, headers) {
    return this.request(url, 'delete', data, headers);
  }

  upload(url, files, options = {
    onProgress() {},

    method: 'POST'
  }) {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    const uploadUrl = Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`;
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData();
      files.forEach(f => formData.append(f.fieldname, f.file, f.file.name));
      options.customData && Object.keys(options.customData).forEach(fieldname => typeof options.customData[fieldname] !== 'undefined' && formData.append(fieldname, options.customData[fieldname]));
      req.responseType = 'json';
      req.open(options.method || 'POST', uploadUrl);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  register(url, data, options = {
    onProgress() {}

  }) {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const {
          response
        } = req;

        if (!success) {
          return reject(response);
        }

        return resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData(); // formData.append('file', file, file.name);

      if (data.documentVerification) {
        const documentVerificationFile = data.documentVerification.file.originFileObj;
        formData.append('documentVerification', documentVerificationFile, documentVerificationFile.name);
      }

      if (data.idVerification) {
        const idVerificationDile = data.idVerification.file.originFileObj;
        formData.append('idVerification', idVerificationDile, idVerificationDile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['documentVerification', 'idVerification'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

}

_defineProperty(APIRequest, "token", '');

/***/ }),

/***/ "./src/services/config.ts":
/*!********************************!*\
  !*** ./src/services/config.ts ***!
  \********************************/
/*! exports provided: setGlobalConfig, getGlobalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalConfig", function() { return setGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalConfig", function() { return getGlobalConfig; });
let globalConfig = {};
const setGlobalConfig = config => {
  globalConfig = config;
};
const getGlobalConfig = () => globalConfig;

/***/ }),

/***/ "./src/services/token-package.service.ts":
/*!***********************************************!*\
  !*** ./src/services/token-package.service.ts ***!
  \***********************************************/
/*! exports provided: TokenPackageService, tokenPackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenPackageService", function() { return TokenPackageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenPackageService", function() { return tokenPackageService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class TokenPackageService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params) {
    return this.get(this.buildUrl('/package/token/search', params));
  }

  buyTokens(id) {
    return this.post(`/payment/purchase-tokens/${id}`);
  }

}
const tokenPackageService = new TokenPackageService();

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "path-to-regexp":
/*!*********************************!*\
  !*** external "path-to-regexp" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWNjb3VudC91c2VyL2Z1bmRzLXRva2Vucy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Jhc2UvbG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vYmFzZS90b2tlbi1jYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0L251bWJlcmZvcm1hdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dC9wYWdlLWhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9yZWR1eC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N0cmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC91c2VyL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2FwaS1yZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3Rva2VuLXBhY2thZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGgtdG8tcmVnZXhwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1udW1iZXItZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1hY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVzZWxlY3RcIiJdLCJuYW1lcyI6WyJVc2VyVG9rZW5zUGFnZSIsIlB1cmVDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsImFjdGlvbiIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInRva2VucyIsImZldGNoaW5nIiwiYnV5aW5nIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRUb2tlbnMiLCJzZXRTdGF0ZSIsInJlc3AiLCJ0b2tlblBhY2thZ2VTZXJ2aWNlIiwic2VhcmNoIiwic29ydEJ5Iiwic29ydCIsImRhdGEiLCJlIiwiZXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1lc3NhZ2UiLCJnZXRSZXNwb25zZUVycm9yIiwiYnV5VG9rZW4iLCJ0b2tlblBhY2thZ2UiLCJfaWQiLCJjb25zb2xlIiwibG9nIiwiYnV5VG9rZW5zIiwiaXNVcmwiLCJwYXltZW50VXJsIiwid2luZG93Iiwib3BlbiIsInJlbmRlciIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoIiwiYnV5VG9rZW5TdWNjZXNzIiwiY29ubmVjdCIsIkxvYWRlciIsInNwaW5uaW5nIiwiZnVsbFNjcmVlbiIsImNsYXNzTmFtZXMiLCJoaWRkZW4iLCJUb2tlbkNhcmQiLCJ0b2tlbiIsImN1cnJlbmN5U3ltYm9sIiwiY29sb3IiLCJvbkJ1eVRva2VuIiwiZGVmYXVsdFByb3BzIiwidWkiLCJOdW1iZXJGb3JtYXROb1NTUiIsImR5bmFtaWMiLCJzc3IiLCJOdW1iZXJGb3JtYXQiLCJkZWNpbWFsU2NhbGUiLCJ0aXRsZSIsImV4dHJhIiwiY3JlYXRlQWN0aW9uIiwidHlwZSIsIlJlZHV4Q3JlYXRlQWN0aW9uIiwiaXMiLCJhVHlwZSIsInRvU3RyaW5nIiwiY3JlYXRlQXN5bmNBY3Rpb24iLCJjcmVhdGVBc3luY0FjdGlvbnMiLCJoYW5kbGVBY3Rpb25zIiwiYWN0aW9ucyIsImluaXRpYWxTdGF0ZSIsImhhbmRsZVJlZHV4QWN0aW9ucyIsInJlZHVjZSIsInJlZHVjZXIiLCJoYW5kbGVyIiwiYWN0Iiwic2V0IiwiY3JlYXRlUmVkdWNlcnMiLCJzdGF0ZUNvbnRleHQiLCJyZWR1Y2VycyIsInByZXZlbnRSZXNldHRpbmciLCJmbGF0dGVuIiwiaXNBcnJheSIsIm9uIiwiZm9yRWFjaCIsIkFQUF9TVEFURV9SRVNFVCIsImNyZWF0ZVNhZ2FzIiwic2FnYXMiLCJzYWdhIiwiZWZmZWN0IiwidGFrZUxhdGVzdCIsIndvcmtlciIsImRlbGF5IiwiY3JlYXRlU2VsZWN0b3JzQSIsImNvbnRleHQiLCJrZXlzIiwic3RhdGVTZWxlY3RvciIsImlzRW1wdHkiLCJrZXkiLCJnZXRJbiIsImdldCIsImNyZWF0ZVNlbGVjdG9ycyIsInNlbGVjdG9ycyIsImNyZWF0ZUpTU2VsZWN0b3JzIiwidXJsIiwibWF0Y2giLCJnZW5lcmF0ZVV1aWQiLCJyZXBsYWNlIiwiYyIsInIiLCJNYXRoIiwicmFuZG9tIiwidiIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0ciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ1bml0UHJpY2VzIiwidmFsdWUiLCJ0ZXh0IiwiYXJyYXlUb1RyZWUiLCJhcnJheSIsImlkIiwicGFyZW50SWQiLCJjaGlsZHJlbiIsInJlc3VsdCIsImhhc2giLCJjbG9uZURlZXAiLCJpbmRleCIsImhhc2hQYXJlbnQiLCJwdXNoIiwicGF0aE1hdGNoUmVnZXhwIiwicmVnZXhwIiwicGF0aG5hbWUiLCJwYXRoVG9SZWdleHAiLCJleGVjIiwicXVlcnlBbmNlc3RvcnMiLCJjdXJyZW50IiwiaGFzaE1hcCIsIk1hcCIsImdldFBhdGgiLCJjdXJyZW50UGFyZW50SWQiLCJBcnJheSIsImNvbnN0cmFpbnRzIiwiT2JqZWN0IiwidmFsdWVzIiwiaXNNb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJnZXRVcmxQYXJhbWV0ZXIiLCJzUGFyYW0iLCJzUGFnZVVSTCIsImRlY29kZVVSSUNvbXBvbmVudCIsImxvY2F0aW9uIiwic3Vic3RyaW5nIiwic1VSTFZhcmlhYmxlcyIsInNwbGl0Iiwic1BhcmFtZXRlck5hbWUiLCJpIiwidW5kZWZpbmVkIiwiREFZX09GX1dFRUsiLCJtb24iLCJ0dWUiLCJ3ZWQiLCJ0aHUiLCJmcmkiLCJzYXQiLCJzdW4iLCJnZXREZWZhdWx0U2NoZWR1bGUiLCJkZWZhdWx0VmFsIiwic3RhcnQiLCJlbmQiLCJjbG9zZWQiLCJnZXROZXh0U2hvdyIsInNjaGVkdWxlIiwid2Vla0RheSIsInBhcnNlSW50IiwibW9tZW50IiwiZm9ybWF0IiwibmV4dFNob3ciLCJwZXJmb3JtZXJTaG93cyIsImZpbHRlciIsImRhdGUiLCJkYXkiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJnZXRTZWFyY2hEYXRhIiwicGFnaW5hdGlvbiIsImZpbHRlcnMiLCJzb3J0ZXIiLCJsaW1pdCIsIm9yZGVyIiwiZmllbGQiLCJTT1JUIiwib2Zmc2V0IiwiZ2V0QmFzZTY0Iiwib3JpZ2luRmlsZU9iaiIsInN0YXR1cyIsImZpbGUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJjb252ZXJ0Q29ubmVjdGlvbkRhdGEiLCJhcnIiLCJzZXJ2ZXJEYXRhIiwiSlNPTiIsInBhcnNlIiwiY2xpZW50RGF0YSIsImNoZWNrVXNlckxvZ2luIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJnZXRDdXJyZW50VXNlciIsInBlcmZvcm1lciIsImlzUGh5c2ljYWxQcm9kdWN0IiwiY2hhdEJveE1lc3NhZ2VDbGFzc05hbWUiLCJyZXEiLCJpc01pbmUiLCJzdGFydHNTZXF1ZW5jZSIsImVuZHNTZXF1ZW5jZSIsImNsYXNzbmFtZXMiLCJtaW5lIiwidGlwIiwiY29udmVydEZlZXRUb0NtIiwiZmVldCIsImluY2giLCJmIiwiZm9ybWF0RGF0YVdlaWdodCIsIm1pbiIsIm1heCIsInRvRml4ZWQiLCJsYWJlbCIsImZvcm1hdERhdGFIZWlnaHQiLCJhIiwiZm9ybWF0UHJpY2UiLCJmcmFjdGlvbkRpZ2l0cyIsInVwZGF0ZUN1cnJlbnRVc2VyIiwidXBkYXRlQ3VycmVudFVzZXJBdmF0YXIiLCJ1cGRhdGVDdXJyZW50VXNlckJhbGFuY2UiLCJ1cGRhdGVVc2VyIiwidXBkYXRlVXNlclN1Y2Nlc3MiLCJ1cGRhdGVVc2VyRmFpbCIsInNldFVwZGF0aW5nIiwic2V0UmVkdWNlciIsImdldEZhdm9yaXRlUGVyZm9ybWVycyIsImdldEZhdm9yaXRlUGVyZm9ybWVyc1N1Y2Nlc3MiLCJnZXRGYXZvcml0ZVBlcmZvcm1lcnNGYWlsZWQiLCJnZXR0aW5nRmF2b3JpdGVQZXJmb3JtZXJzIiwicmVtb3ZlRmF2b3JpdGUiLCJnZXRQYXltZW50VG9rZW5IaXN0cm95IiwiZ2V0UGF5bWVudFRva2VuSGlzdHJveVN1Y2Nlc3MiLCJnZXRQYXltZW50VG9rZW5IaXN0cm95RmFpbCIsImdldHRpZ1BheW1lbnRUb2tlbkhpc3RvcnkiLCJUT0tFTiIsIlJPTEUiLCJQRVJGT1JNRVJfUk9MRSIsIlVTRVJfUk9MRSIsIlNUVURJT19ST0xFIiwiZGVzY2VuZCIsImFzY2VuZCIsIkFQSVJlcXVlc3QiLCJzZXRBdXRoSGVhZGVyVG9rZW4iLCJwYXJzZUpTT04iLCJyZXNwb25zZSIsImpzb24iLCJjaGVja1N0YXR1cyIsIkVycm9yIiwiY2xvbmUiLCJyZXF1ZXN0IiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJ2ZXJiIiwidXBkYXRlZEhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJjb25maWciLCJnZXRHbG9iYWxDb25maWciLCJmZXRjaCIsIkFQSV9FTkRQT0lOVCIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsInN0cmluZ2lmeSIsInRoZW4iLCJidWlsZFVybCIsImJhc2VVcmwiLCJwYXJhbXMiLCJxdWVyeVN0cmluZyIsImsiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwicG9zdCIsInB1dCIsImRlbCIsInVwbG9hZCIsImZpbGVzIiwib3B0aW9ucyIsIm9uUHJvZ3Jlc3MiLCJ1cGxvYWRVcmwiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50YWdlIiwibG9hZGVkIiwidG90YWwiLCJzdWNjZXNzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpZWxkbmFtZSIsImN1c3RvbURhdGEiLCJyZXNwb25zZVR5cGUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsInJlZ2lzdGVyIiwiZG9jdW1lbnRWZXJpZmljYXRpb24iLCJkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUiLCJpZFZlcmlmaWNhdGlvbiIsImlkVmVyaWZpY2F0aW9uRGlsZSIsIm9taXQiLCJnbG9iYWxDb25maWciLCJzZXRHbG9iYWxDb25maWciLCJUb2tlblBhY2thZ2VTZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhNd0QsQ0FBbkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQlA7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsV0FBVCxDQUNMQyxLQURL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Q0csRTs7Ozs7Ozs7Ozs7O0FDcEJ6QjtBQUFBO0FBQUE7QUFBQSxJQUFJNEQsWUFBWSxHQUFHLEVBQW5CO0FBRU8sTUFBTUMsZUFBZSxHQUFJN0MsTUFBRCxJQUFpQjtBQUM5QzRDLGNBQVksR0FBRzVDLE1BQWY7QUFDRCxDQUZNO0FBSUEsTUFBTUMsZUFBZSxHQUFHLE1BQU0yQyxZQUE5QixDOzs7Ozs7Ozs7Ozs7QUNOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUUsbUJBQU4sU0FBa0M5RCx1REFBbEMsQ0FBNkM7QUFDbEQ3UCxRQUFNLENBQUNzUixNQUFELEVBQXFDO0FBQ3pDLFdBQU8sS0FBSzVMLEdBQUwsQ0FBUyxLQUFLMEwsUUFBTCxDQUFjLHVCQUFkLEVBQXVDRSxNQUF2QyxDQUFULENBQVA7QUFDRDs7QUFFRHZRLFdBQVMsQ0FBQ2tHLEVBQUQsRUFBYTtBQUNwQixXQUFPLEtBQUswSyxJQUFMLENBQVcsNEJBQTJCMUssRUFBRyxFQUF6QyxDQUFQO0FBQ0Q7O0FBUGlEO0FBVTdDLE1BQU1sSCxtQkFBbUIsR0FBRyxJQUFJNFQsbUJBQUosRUFBNUIsQzs7Ozs7Ozs7Ozs7QUNaUCxpQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9hY2NvdW50L3VzZXIvZnVuZHMtdG9rZW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvYWNjb3VudC91c2VyL2Z1bmRzLXRva2Vuc1wiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hY2NvdW50L3VzZXIvZnVuZHMtdG9rZW5zL2luZGV4LnRzeFwiKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5pbXBvcnQge1xuICBSb3csIENvbCwgbWVzc2FnZVxufSBmcm9tICdhbnRkJztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvcGFnZS1oZWFkZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29tbW9uL2Jhc2UvbG9hZGVyJztcbmltcG9ydCBUb2tlbkNhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvY29tbW9uL2Jhc2UvdG9rZW4tY2FyZCc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9pbmRleC5sZXNzJztcbmltcG9ydCB7IGdldFJlc3BvbnNlRXJyb3IgfSBmcm9tICdzcmMvbGliL3V0aWxzJztcbmltcG9ydCB7IHRva2VuUGFja2FnZVNlcnZpY2UgfSBmcm9tICdAc2VydmljZXMvdG9rZW4tcGFja2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IElUb2tlblBhY2thZ2UgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBidXlUb2tlblN1Y2Nlc3MgfSBmcm9tICdzcmMvcmVkdXgvdXNlci9hY3Rpb25zJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGJ1eVRva2VuU3VjY2VzczogRnVuY3Rpb247XG59XG5pbnRlcmZhY2UgSVN0YXRlcyB7XG4gIHRva2VuczogSVRva2VuUGFja2FnZVtdO1xuICBmZXRjaGluZzogYm9vbGVhbjtcbiAgYnV5aW5nOiBzdHJpbmc7XG59XG5cbmNsYXNzIFVzZXJUb2tlbnNQYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZXM+IHtcbiAgc3RhdGljIGF1dGhlbnRpY2F0ZSA9IHRydWU7XG5cbiAgc3RhdGljIGxheW91dCA9ICdwcmltYXJ5JztcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgY3R4IH0pIHtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSBjdHg7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvbjogcXVlcnkuYWN0aW9uXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b2tlbnM6IFtdLFxuICAgICAgZmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgYnV5aW5nOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0VG9rZW5zKCk7XG4gIH1cblxuICBhc3luYyBnZXRUb2tlbnMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmZXRjaGluZzogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0b2tlblBhY2thZ2VTZXJ2aWNlLnNlYXJjaCh7XG4gICAgICAgIHNvcnRCeTogJ29yZGVyaW5nJyxcbiAgICAgICAgc29ydDogJ2FzYydcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRva2VuczogcmVzcC5kYXRhLmRhdGEgfHwgW10gfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZXJyb3IpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZldGNoaW5nOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBidXlUb2tlbih0b2tlblBhY2thZ2U6IElUb2tlblBhY2thZ2UpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1eWluZzogdG9rZW5QYWNrYWdlLl9pZCB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuUGFja2FnZS5faWQpO1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHRva2VuUGFja2FnZVNlcnZpY2UuYnV5VG9rZW5zKHRva2VuUGFja2FnZS5faWQpO1xuICAgICAgaWYgKHJlc3AuZGF0YSkge1xuICAgICAgICBpZiAoaXNVcmwocmVzcC5kYXRhLnBheW1lbnRVcmwpKSB7XG4gICAgICAgICAgd2luZG93Lm9wZW4ocmVzcC5kYXRhLnBheW1lbnRVcmwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1lc3NhZ2Uuc3VjY2VzcygnQnV5IHRva2VuIHN1Y2Nlc3MnKTtcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5idXlUb2tlblN1Y2Nlc3ModG9rZW5QYWNrYWdlLnRva2Vucyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoZSk7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZXJyb3IpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1eWluZzogbnVsbCB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmZXRjaGluZywgdG9rZW5zLCBidXlpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5GdW5kcyAtIFRva2VuczwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5kcy10b2tlbnMtYm94XCI+XG4gICAgICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJCdXkgTW9yZSBUb2tlbnNcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW5zLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW5zLWNhcmRcIj5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICB7ZmV0Y2hpbmcgPyAoXG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgKSA6IHRva2VucyAmJiB0b2tlbnMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgdG9rZW5zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezh9IHhsPXs2fSB4eGw9ezR9IGtleT17aXRlbS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUb2tlbkNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuPXtpdGVtLnRva2Vuc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJ1eVRva2VuPXsoKSA9PiB0aGlzLmJ1eVRva2VuKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnV5aW5nPXtpdGVtLl9pZCA9PT0gYnV5aW5nfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgJ1RoZXJlIGlzIG5vIGRhdGEnXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoKSA9PiAoe30pO1xuY29uc3QgbWFwRGlzcGF0Y2ggPSB7IGJ1eVRva2VuU3VjY2VzcyB9O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoKShVc2VyVG9rZW5zUGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgJy4vbG9hZGVyLmxlc3MnO1xuXG5jb25zdCBMb2FkZXIgPSAoeyBzcGlubmluZyA9IGZhbHNlLCBmdWxsU2NyZWVuID0gZmFsc2UgfTogYW55KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2xvYWRlcicsIHtcbiAgICAgIGhpZGRlbjogIXNwaW5uaW5nLFxuICAgICAgZnVsbFNjcmVlblxuICAgIH0pfVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3YXJwcGVyXCI+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiIC8+ICovfVxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPjxpbWcgc3JjPVwiL2xvYWRpbmctaWNvLmdpZlwiIHdpZHRoPVwiNjVweFwiIGFsdD1cIlwiIC8+PC9kaXY+ICovfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsImltcG9ydCB7IEJ1dHRvbiwgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdAY29tcG9uZW50cy9jb21tb24vbGF5b3V0L251bWJlcmZvcm1hdCc7XG5pbXBvcnQgJy4vdG9rZW4tY2FyZC5sZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0b2tlbjogbnVtYmVyO1xuICBwcmljZTogbnVtYmVyO1xuICBvbkJ1eVRva2VuPzogRnVuY3Rpb247XG4gIGJ1eWluZz86IGJvb2xlYW47XG4gIGN1cnJlbmN5U3ltYm9sPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86c3RyaW5nO1xufVxuXG5jb25zdCBUb2tlbkNhcmQgPSAoe1xuICB0b2tlbiwgcHJpY2UsIGJ1eWluZywgY3VycmVuY3lTeW1ib2wsIG5hbWUsIGRlc2NyaXB0aW9uLCAuLi5wcm9wc1xufTogSVByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tY2FyZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2luXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudC1jb2luXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvY3Jvd24ucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHhcbiAgICAgICAgICAgIHt0b2tlbn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgey8qIDxOdW1iZXJGb3JtYXQgdmFsdWU9e30vPiAqL31cbiAgICA8TnVtYmVyRm9ybWF0IHZhbHVlPXt0b2tlbn0gc3VmZml4PVwiIFRva2VuIGZvciBcIiAvPlxuICAgIDxOdW1iZXJGb3JtYXQgdmFsdWU9e3ByaWNlfSBwcmVmaXg9e2N1cnJlbmN5U3ltYm9sfSAvPlxuICAgIDxiciAvPlxuICAgIDxwPntuYW1lfTwvcD5cbiAgICB7ZGVzY3JpcHRpb24gPyAoPFBvcG92ZXIgY29udGVudD17ZGVzY3JpcHRpb259PjxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+PC9Qb3BvdmVyPikgOiAoPGRpdiBzdHlsZT17eyBjb2xvcjogJyMwMDAwMDAnIH19Pk5vIGRlc2NyaXB0aW9uPC9kaXY+KSB9XG4gICAgPEJ1dHRvblxuICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25CdXlUb2tlbigpfVxuICAgICAgbG9hZGluZz17YnV5aW5nfVxuICAgICAgZGlzYWJsZWQ9e2J1eWluZ31cbiAgICA+XG4gICAgICBCdXkgTm93XG4gICAgPC9CdXR0b24+XG4gIDwvZGl2PlxuKTtcblRva2VuQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQnV5VG9rZW46IG51bGwsXG4gIGJ1eWluZzogZmFsc2UsXG4gIGN1cnJlbmN5U3ltYm9sOiAnJCcsXG4gIGRlc2NyaXB0aW9uOiAnJ1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlIDogYW55KSA9PiAoe1xuICAuLi5zdGF0ZS51aVxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoVG9rZW5DYXJkKTtcbiIsImltcG9ydCB7IE51bWJlckZvcm1hdFByb3BzIH0gZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5jb25zdCBOdW1iZXJGb3JtYXROb1NTUiA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1udW1iZXItZm9ybWF0JyksIHtcbiAgc3NyOiBmYWxzZVxufSk7XG5pbnRlcmZhY2UgUCBleHRlbmRzIE51bWJlckZvcm1hdFByb3BzIHt9XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOdW1iZXJGb3JtYXQoeyBkZWNpbWFsU2NhbGUsIC4uLnByb3BzIH06IFApIHtcbiAgcmV0dXJuIChcbiAgICA8TnVtYmVyRm9ybWF0Tm9TU1JcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGRpc3BsYXlUeXBlPVwidGV4dFwiXG4gICAgICBkZWNpbWFsU2NhbGU9e2RlY2ltYWxTY2FsZSB8fCAyfVxuICAgICAgZGVjaW1hbFNlcGFyYXRvcj1cIi5cIlxuICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9XCIsXCJcbiAgICAvPlxuICApO1xufVxuIiwiaW1wb3J0IHsgUGFnZUhlYWRlciwgRGl2aWRlciB9IGZyb20gJ2FudGQnO1xuXG5pbnRlcmZhY2UgUCB7XG4gIHRpdGxlOiBhbnk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHNcbiAgZXh0cmE/OiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlLCBleHRyYSB9IDogUCkgPT4gKFxuICA8PlxuICAgIDxQYWdlSGVhZGVyIHRpdGxlPXt0aXRsZX0gZXh0cmE9e2V4dHJhfSAvPlxuICAgIDxEaXZpZGVyIC8+XG4gIDwvPlxuKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQge1xuICByZWR1Y2UsIGlzQXJyYXksIGlzRW1wdHksIGZsYXR0ZW5cbn0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQWN0aW9uIGFzIFJlZHV4Q3JlYXRlQWN0aW9uLFxuICBoYW5kbGVBY3Rpb25zIGFzIGhhbmRsZVJlZHV4QWN0aW9ucyxcbiAgQWN0aW9uXG59IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25GdW5jdGlvbjE8VDEsIFI+ID0gKHQxPzogVDEpID0+IFI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uRnVuY3Rpb248UGF5bG9hZD5cbiAgZXh0ZW5kcyBBY3Rpb25GdW5jdGlvbjE8UGF5bG9hZCwgQWN0aW9uPFBheWxvYWQ+PiB7XG4gIGlzOiAodHlwZTogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb248UGF5bG9hZCA9IGFueT4odHlwZTogc3RyaW5nKTogQWN0aW9uRnVuY3Rpb248UGF5bG9hZD4ge1xuICBjb25zdCBhY3Rpb24gPSBSZWR1eENyZWF0ZUFjdGlvbjxQYXlsb2FkPih0eXBlKSBhcyBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPjtcbiAgYWN0aW9uLmlzID0gKGFUeXBlOiBzdHJpbmcpID0+IGFjdGlvbi50b1N0cmluZygpID09PSBhVHlwZTtcbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5mdW5jdGlvbiBjcmVhdGVBc3luY0FjdGlvbihhY3Rpb246IHN0cmluZywgdHlwZTogc3RyaW5nKTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBbYWN0aW9uXTogY3JlYXRlQWN0aW9uKHR5cGUpLFxuICAgIFtgJHthY3Rpb259U3VjY2Vzc2BdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIFtgJHthY3Rpb259RmFpbGBdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fRkFJTGApXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jQWN0aW9uczxcbiAgQWN0aW9uRGF0YSA9IGFueSxcbiAgU3VjY2Vzc0RhdGEgPSBhbnksXG4gIEVycm9yRGF0YSA9IEVycm9yXG4+KFxuICB0eXBlOiBzdHJpbmdcbik6IFtcbiAgQWN0aW9uRnVuY3Rpb248QWN0aW9uRGF0YT4sXG4gIEFjdGlvbkZ1bmN0aW9uPFN1Y2Nlc3NEYXRhPixcbiAgQWN0aW9uRnVuY3Rpb248RXJyb3JEYXRhPlxuXSB7XG4gIHJldHVybiBbXG4gICAgY3JlYXRlQWN0aW9uPEFjdGlvbkRhdGE+KHR5cGUpLFxuICAgIGNyZWF0ZUFjdGlvbjxTdWNjZXNzRGF0YT4oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIGNyZWF0ZUFjdGlvbjxFcnJvckRhdGE+KGAke3R5cGV9X0ZBSUxgKVxuICBdO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuZnVuY3Rpb24gaGFuZGxlQWN0aW9ucyhhY3Rpb25zOiBhbnksIGluaXRpYWxTdGF0ZTogYW55KSB7XG4gIHJldHVybiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgcmVkdWNlKFxuICAgICAgYWN0aW9ucyxcbiAgICAgIChyZWR1Y2VyOiBhbnksIGhhbmRsZXIsIGFjdGlvbikgPT4ge1xuICAgICAgICByZWR1Y2VyW2FjdGlvbl0gPSAoc3RhdGU6IGFueSwgYWN0OiBhbnkpID0+IGhhbmRsZXIoc3RhdGUuc2V0KCdhY3Rpb24nLCBhY3Rpb24pLCBhY3QpO1xuICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgIH0sXG4gICAgICB7fVxuICAgICksXG4gICAgaW5pdGlhbFN0YXRlXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXJzKFxuICBzdGF0ZUNvbnRleHQ6IHN0cmluZyxcbiAgcmVkdWNlcnM6IGFueVtdLFxuICBpbml0aWFsU3RhdGU6IGFueSxcbiAgcHJldmVudFJlc2V0dGluZzogYm9vbGVhbiA9IGZhbHNlXG4pOiBhbnkge1xuICByZXR1cm4ge1xuICAgIFtzdGF0ZUNvbnRleHRdOiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgICByZWR1Y2UoXG4gICAgICAgIGZsYXR0ZW4ocmVkdWNlcnMpLFxuICAgICAgICAocmVkdWNlcjogYW55LCBhY3Rpb246IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpc0FycmF5KGFjdGlvbi5vbikpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vbi5mb3JFYWNoKChhY3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZWR1Y2VyW2FjdF0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSByZWR1Y2VyW2FjdGlvbi5vbl0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudFJlc2V0dGluZ1xuICAgICAgICAgID8ge31cbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgIEFQUF9TVEFURV9SRVNFVDogKCkgPT4gaW5pdGlhbFN0YXRlXG4gICAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGluaXRpYWxTdGF0ZVxuICAgIClcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNhZ2FzKHNhZ2FzOiBhbnlbXSk6IGFueVtdIHtcbiAgcmV0dXJuIGZsYXR0ZW4oc2FnYXMpLm1hcCgoc2FnYTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBvbiwgZWZmZWN0ID0gdGFrZUxhdGVzdCwgd29ya2VyIH0gPSBzYWdhO1xuICAgIHJldHVybiBmdW5jdGlvbiogKCkge1xuICAgICAgeWllbGQgZWZmZWN0KG9uLCBmdW5jdGlvbiogKGFjdGlvbjogYW55KSB7XG4gICAgICAgIHlpZWxkIGRlbGF5KDApO1xuICAgICAgICB5aWVsZCB3b3JrZXIoYWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnNBKGNvbnRleHQ6IHN0cmluZywga2V5czogYW55W10gPSBbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgaWYgKGlzRW1wdHkoa2V5cykpIHJldHVybiBzdGF0ZVNlbGVjdG9yO1xuXG4gIHJldHVybiBrZXlzLm1hcCgoa2V5OiBhbnkpID0+IChzdGF0ZTogYW55KSA9PiAoaXNBcnJheShrZXkpXG4gICAgPyBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXRJbihrZXkpXG4gICAgOiBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXQoa2V5KSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSkuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gc2VsZWN0b3JzO1xuICAgIH0sXG4gICAge31cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSlNTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSlba2V5XTtcbiAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgfSxcbiAgICB7fVxuICApO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvbnMsXG4gIGNyZWF0ZVNlbGVjdG9yc0EsXG4gIGhhbmRsZUFjdGlvbnMsXG4gIGNyZWF0ZVJlZHVjZXJzLFxuICBjcmVhdGVTZWxlY3RvcnMsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBjcmVhdGVKU1NlbGVjdG9yc1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBpc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHVybC5tYXRjaChcbiAgICAgIC8oaHR0cChzKT86XFwvXFwvLik/KHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezIsMjU2fVxcLlthLXpdezIsNn1cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLy89XSopL2dcbiAgICApICE9PSBudWxsXG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVV1aWQgPSAoKSA9PiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMDtcbiAgICBjb25zdCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXN0cikgcmV0dXJuICcnO1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgY29uc3QgdW5pdFByaWNlczogeyB2YWx1ZTogbnVtYmVyLCB0ZXh0OiBhbnkgfVtdID0gW1xuICB7XG4gICAgdmFsdWU6IDE1LFxuICAgIHRleHQ6ICcxNSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMjAsXG4gICAgdGV4dDogJzIwIHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAyNSxcbiAgICB0ZXh0OiAnMjUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDMwLFxuICAgIHRleHQ6ICczMCB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMzUsXG4gICAgdGV4dDogJzM1IHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiA0MCxcbiAgICB0ZXh0OiAnNDAgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDQ1LFxuICAgIHRleHQ6ICc0NSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogNTAsXG4gICAgdGV4dDogJzUwIHRva2VucydcbiAgfVxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDU1LFxuICAvLyAgIHRleHQ6ICc1NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjAsXG4gIC8vICAgdGV4dDogJzYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA2NSxcbiAgLy8gICB0ZXh0OiAnNjUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDcwLFxuICAvLyAgIHRleHQ6ICc3MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNzUsXG4gIC8vICAgdGV4dDogJzc1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4MCxcbiAgLy8gICB0ZXh0OiAnODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDg1LFxuICAvLyAgIHRleHQ6ICc4NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTAsXG4gIC8vICAgdGV4dDogJzkwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA5NSxcbiAgLy8gICB0ZXh0OiAnOTUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDEwMCxcbiAgLy8gICB0ZXh0OiAnMTAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMjAsXG4gIC8vICAgdGV4dDogJzEyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTQwLFxuICAvLyAgIHRleHQ6ICcxNDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDE2MCxcbiAgLy8gICB0ZXh0OiAnMTYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxODAsXG4gIC8vICAgdGV4dDogJzE4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjAwLFxuICAvLyAgIHRleHQ6ICcyMDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDIyMCxcbiAgLy8gICB0ZXh0OiAnMjIwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyNDAsXG4gIC8vICAgdGV4dDogJzI0MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjYwLFxuICAvLyAgIHRleHQ6ICcyNjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDI4MCxcbiAgLy8gICB0ZXh0OiAnMjgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzMDAsXG4gIC8vICAgdGV4dDogJzMwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzIwLFxuICAvLyAgIHRleHQ6ICczMjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDM0MCxcbiAgLy8gICB0ZXh0OiAnMzQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzNjAsXG4gIC8vICAgdGV4dDogJzM2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzgwLFxuICAvLyAgIHRleHQ6ICczODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQwMCxcbiAgLy8gICB0ZXh0OiAnNDAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0MjAsXG4gIC8vICAgdGV4dDogJzQyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDQwLFxuICAvLyAgIHRleHQ6ICc0NDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQ2MCxcbiAgLy8gICB0ZXh0OiAnNDYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0ODAsXG4gIC8vICAgdGV4dDogJzQ4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNTAwLFxuICAvLyAgIHRleHQ6ICc1MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDU1MCxcbiAgLy8gICB0ZXh0OiAnNTUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA2MDAsXG4gIC8vICAgdGV4dDogJzYwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjUwLFxuICAvLyAgIHRleHQ6ICc2NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDcwMCxcbiAgLy8gICB0ZXh0OiAnNzAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3NTAsXG4gIC8vICAgdGV4dDogJzc1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogODAwLFxuICAvLyAgIHRleHQ6ICc4MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDg1MCxcbiAgLy8gICB0ZXh0OiAnODUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA5MDAsXG4gIC8vICAgdGV4dDogJzkwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTUwLFxuICAvLyAgIHRleHQ6ICc5NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDEwMDAsXG4gIC8vICAgdGV4dDogJzEwMDAgdG9rZW5zJ1xuICAvLyB9XG5dO1xuIiwiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICdwYXRoLXRvLXJlZ2V4cCc7XG5pbXBvcnQge1xuICBJU2NoZWR1bGUsIElVc2VyLCBJUGVyZm9ybWVyLCBJU3R1ZGlvXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFNPUlQgfSBmcm9tICdAc2VydmljZXMvYXBpLXJlcXVlc3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSB0byBhIHRyZWUtc3RydWN0dXJlZCBhcnJheS5cbiAqIEBwYXJhbSAgIHthcnJheX0gICAgIGFycmF5ICAgICBUaGUgQXJyYXkgbmVlZCB0byBDb252ZXJ0ZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBpZCAgICAgICAgVGhlIGFsaWFzIG9mIHRoZSB1bmlxdWUgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBwYXJlbnRJZCAgICAgICBUaGUgYWxpYXMgb2YgdGhlIHBhcmVudCBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGNoaWxkcmVuICBUaGUgYWxpYXMgb2YgY2hpbGRyZW4gb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJuICB7YXJyYXl9ICAgIFJldHVybiBhIHRyZWUtc3RydWN0dXJlZCBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5VG9UcmVlKFxuICBhcnJheSxcbiAgaWQgPSAnaWQnLFxuICBwYXJlbnRJZCA9ICdwaWQnLFxuICBjaGlsZHJlbiA9ICdjaGlsZHJlbidcbikge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgaGFzaCA9IHt9O1xuICBjb25zdCBkYXRhID0gY2xvbmVEZWVwKGFycmF5KTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaGFzaFtkYXRhW2luZGV4XVtpZF1dID0gZGF0YVtpbmRleF07XG4gIH0pO1xuXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGhhc2hQYXJlbnQgPSBoYXNoW2l0ZW1bcGFyZW50SWRdXTtcbiAgICBpZiAoaGFzaFBhcmVudCkge1xuICAgICAgIWhhc2hQYXJlbnRbY2hpbGRyZW5dICYmIChoYXNoUGFyZW50W2NoaWxkcmVuXSA9IFtdKTtcbiAgICAgIGhhc2hQYXJlbnRbY2hpbGRyZW5dLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgcGF0aCBtYXRjaGVzIHRoZSByZWdleHAgaWYgdGhlIGxhbmd1YWdlIHByZWZpeCBpcyBpZ25vcmVkLCBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAuXG4gKiBAcGFyYW0gICB7c3RyaW5nfHJlZ2V4cHxhcnJheX0gICAgIHJlZ2V4cCAgICAgU3BlY2lmeSBhIHN0cmluZywgYXJyYXkgb2Ygc3RyaW5ncywgb3IgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgIHBhdGhuYW1lICAgU3BlY2lmeSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJuICB7YXJyYXl8bnVsbH0gICAgICAgICAgICAgIFJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBtYXRjaCBvciBudWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0aE1hdGNoUmVnZXhwKHJlZ2V4cCwgcGF0aG5hbWUpIHtcbiAgcmV0dXJuIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAocmVnZXhwKS5leGVjKHBhdGhuYW1lKTtcbn1cblxuLyoqXG4gKiBJbiBhbiBhcnJheSBvZiBvYmplY3RzLCBzcGVjaWZ5IGFuIG9iamVjdCB0aGF0IHRyYXZlcnNlcyB0aGUgb2JqZWN0cyB3aG9zZSBwYXJlbnQgSUQgbWF0Y2hlcy5cbiAqIEBwYXJhbSAgIHthcnJheX0gICAgIGFycmF5ICAgICBUaGUgQXJyYXkgbmVlZCB0byBDb252ZXJ0ZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBjdXJyZW50ICAgU3BlY2lmeSB0aGUgb2JqZWN0IHRoYXQgbmVlZHMgdG8gYmUgcXVlcmllZC5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIHBhcmVudElkICBUaGUgYWxpYXMgb2YgdGhlIHBhcmVudCBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGlkICAgICAgICBUaGUgYWxpYXMgb2YgdGhlIHVuaXF1ZSBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEByZXR1cm4gIHthcnJheX0gICAgUmV0dXJuIGEga2V5IGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBbmNlc3RvcnMoYXJyYXksIGN1cnJlbnQsIHBhcmVudElkLCBpZCA9ICdpZCcpIHtcbiAgY29uc3QgcmVzdWx0ID0gW2N1cnJlbnRdO1xuICBjb25zdCBoYXNoTWFwID0gbmV3IE1hcCgpO1xuICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiBoYXNoTWFwLnNldChpdGVtW2lkXSwgaXRlbSkpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgY29uc3QgZ2V0UGF0aCA9IChjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBhcmVudElkID0gaGFzaE1hcC5nZXQoY3VycmVudFtpZF0pW3BhcmVudElkXTtcbiAgICBpZiAoY3VycmVudFBhcmVudElkKSB7XG4gICAgICByZXN1bHQucHVzaChoYXNoTWFwLmdldChjdXJyZW50UGFyZW50SWQpKTtcbiAgICAgIGdldFBhdGgoaGFzaE1hcC5nZXQoY3VycmVudFBhcmVudElkKSk7XG4gICAgfVxuICB9O1xuXG4gIGdldFBhdGgoY3VycmVudCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNwb25zZUVycm9yKGRhdGE6IGFueSkge1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gJ0JhZCByZXF1ZXN0ISc7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLm1lc3NhZ2UpKSB7XG4gICAgY29uc3QgaXRlbSA9IGRhdGEubWVzc2FnZVswXTtcbiAgICBpZiAoIWl0ZW0uY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiBkYXRhLmVycm9yIHx8ICdCYWQgcmVxdWVzdCEnO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhpdGVtLmNvbnN0cmFpbnRzKVswXTtcbiAgfVxuXG4gIC8vIFRPRE8gLSBwYXJzZSBmb3IgbGFuZ2F1Z2Ugb3Igb3RoZXJzXG4gIHJldHVybiB0eXBlb2YgZGF0YS5tZXNzYWdlID09PSAnc3RyaW5nJyA/IGRhdGEubWVzc2FnZSA6ICdCYWQgcmVxdWVzdCEnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gIGlmIChcbiAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzIFBob25lL2kpXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXIoc1BhcmFtKSB7XG4gIGNvbnN0IHNQYWdlVVJMID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgY29uc3Qgc1VSTFZhcmlhYmxlcyA9IHNQYWdlVVJMLnNwbGl0KCcmJyk7XG4gIGxldCBzUGFyYW1ldGVyTmFtZTtcbiAgbGV0IGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNVUkxWYXJpYWJsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzUGFyYW1ldGVyTmFtZSA9IHNVUkxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcblxuICAgIGlmIChzUGFyYW1ldGVyTmFtZVswXSA9PT0gc1BhcmFtKSB7XG4gICAgICByZXR1cm4gc1BhcmFtZXRlck5hbWVbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzUGFyYW1ldGVyTmFtZVsxXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERBWV9PRl9XRUVLID0ge1xuICBtb246ICdNb25kYXknLFxuICB0dWU6ICdUdWVzZGF5JyxcbiAgd2VkOiAnV2VkbmVzZGF5JyxcbiAgdGh1OiAnVGh1cnNkYXknLFxuICBmcmk6ICdGcmlkYXknLFxuICBzYXQ6ICdTYXR1cmRheScsXG4gIHN1bjogJ1N1bmRheSdcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0U2NoZWR1bGUoKSB7XG4gIGNvbnN0IGRlZmF1bHRWYWwgPSB7IHN0YXJ0OiBudWxsLCBlbmQ6IG51bGwsIGNsb3NlZDogdHJ1ZSB9O1xuICByZXR1cm4ge1xuICAgIG1vbjogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgdHVlOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICB3ZWQ6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHRodTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgZnJpOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICBzYXQ6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHN1bjogeyAuLi5kZWZhdWx0VmFsIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTaG93KHNjaGVkdWxlOiBJU2NoZWR1bGUpOiBzdHJpbmcge1xuICBsZXQgd2Vla0RheSA9IHBhcnNlSW50KG1vbWVudCgpLmZvcm1hdCgnZScpLCAxMCk7XG4gIGxldCBpID0gMDtcbiAgbGV0IG5leHRTaG93OiBzdHJpbmc7XG4gIGNvbnN0IHBlcmZvcm1lclNob3dzID0gT2JqZWN0LmtleXMoc2NoZWR1bGUpLmZpbHRlcihcbiAgICAoa2V5KSA9PiAhc2NoZWR1bGVba2V5XS5jbG9zZWRcbiAgKTtcbiAgZG8ge1xuICAgIGNvbnN0IGRhdGUgPSBtb21lbnQoKS5kYXkod2Vla0RheSkuZm9ybWF0KCdkZGQnKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChwZXJmb3JtZXJTaG93cy5pbmRleE9mKGRhdGUpID4gLTEpIHtcbiAgICAgIG5leHRTaG93ID0gZGF0ZTtcbiAgICB9XG4gICAgd2Vla0RheSArPSAxO1xuICAgIGkgKz0gMTtcbiAgfSB3aGlsZSAoaSA8IDcgJiYgIW5leHRTaG93KTtcblxuICBpZiAobmV4dFNob3cpIHtcbiAgICByZXR1cm4gYCR7c2NoZWR1bGVbbmV4dFNob3ddLnN0YXJ0fSAke21vbWVudCgpXG4gICAgICAuZGF5KHdlZWtEYXkgLSAxKVxuICAgICAgLmZvcm1hdCgnREQvTU0vWVlZWScpfWA7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoRGF0YShwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIsIHN0YXRlKSB7XG4gIGxldCB7IHNvcnQsIHNvcnRCeSwgZmlsdGVyIH0gPSBzdGF0ZTtcbiAgY29uc3QgeyBsaW1pdCB9ID0gc3RhdGU7XG4gIGlmIChmaWx0ZXJzKSB7XG4gICAgT2JqZWN0LmtleXMoZmlsdGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoZmlsdGVyc1trZXldICYmIGZpbHRlcnNba2V5XS5sZW5ndGgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIGZpbHRlcltrZXldID0gZmlsdGVyc1trZXldWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZpbHRlcnNba2V5XSkge1xuICAgICAgICBmaWx0ZXJba2V5XSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZpbHRlciA9IHt9O1xuICB9XG5cbiAgaWYgKHNvcnRlcikge1xuICAgIGlmIChzb3J0ZXIub3JkZXIpIHtcbiAgICAgIGNvbnN0IHsgZmllbGQsIG9yZGVyIH0gPSBzb3J0ZXI7XG4gICAgICBzb3J0ID0gU09SVFtvcmRlcl07XG4gICAgICBzb3J0QnkgPSBmaWVsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydEJ5ID0gJ2NyZWF0ZWRBdCc7XG4gICAgICBzb3J0ID0gJ2Rlc2MnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4uZmlsdGVyLFxuICAgIHNvcnQsXG4gICAgc29ydEJ5LFxuICAgIG9mZnNldDogKHBhZ2luYXRpb24uY3VycmVudCAtIDEpICogbGltaXRcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2U2NChvcmlnaW5GaWxlT2JqLCBzdGF0dXMgPSAndXBsb2FkaW5nJywgZmlsZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgaWYgKG9yaWdpbkZpbGVPYmopIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKG9yaWdpbkZpbGVPYmopO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoe1xuICAgICAgICAuLi5vcmlnaW5GaWxlT2JqLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIG5hbWU6IG9yaWdpbkZpbGVPYmoubmFtZSxcbiAgICAgICAgdXJsOiByZWFkZXIucmVzdWx0LFxuICAgICAgICBvcmlnaW5GaWxlT2JqXG4gICAgICB9KTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gKGVycm9yKSA9PiByZWplY3QoZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKGZpbGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q29ubmVjdGlvbkRhdGEoZGF0YSkge1xuICBjb25zdCBhcnIgPSBkYXRhLnNwbGl0KCclLyUnKTtcbiAgY29uc3Qgc2VydmVyRGF0YSA9IGFyclsxXSAmJiBKU09OLnBhcnNlKGFyclsxXSk7XG4gIGNvbnN0IGNsaWVudERhdGEgPSBhcnJbMF0gJiYgSlNPTi5wYXJzZShhcnJbMF0pO1xuICByZXR1cm4ge1xuICAgIHNlcnZlckRhdGEsXG4gICAgY2xpZW50RGF0YVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tVc2VyTG9naW4oaXNMb2dnZWRJbjogYm9vbGVhbiwgdXNlcjogSVVzZXIgfCBJUGVyZm9ybWVyIHwgSVN0dWRpbykge1xuICBpZiAoIWlzTG9nZ2VkSW4pIHJldHVybiBmYWxzZTtcbiAgaWYgKCF1c2VyICYmICF1c2VyLl9pZCkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIodXNlcjogSVVzZXIsIHBlcmZvcm1lcjogSVBlcmZvcm1lcikge1xuICBpZiAodXNlciAmJiB1c2VyLl9pZCkgcmV0dXJuIHVzZXI7XG4gIGlmIChwZXJmb3JtZXIgJiYgcGVyZm9ybWVyLl9pZCkgcmV0dXJuIHBlcmZvcm1lcjtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGh5c2ljYWxQcm9kdWN0KGl0ZW0pIHtcbiAgaWYgKGl0ZW0gJiYgaXRlbS50eXBlID09PSAncGh5c2ljYWwnKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhdEJveE1lc3NhZ2VDbGFzc05hbWUocmVxKSB7XG4gIGNvbnN0IHtcbiAgICBpc01pbmUsXG4gICAgc3RhcnRzU2VxdWVuY2UsXG4gICAgZW5kc1NlcXVlbmNlLFxuICAgIGRhdGE6IHsgdHlwZSB9XG4gIH0gPSByZXE7XG4gIHJldHVybiBjbGFzc25hbWVzKFxuICAgICdtZXNzYWdlJyxcbiAgICB7IG1pbmU6IGlzTWluZSAmJiB0eXBlICE9PSAndGlwJyB9LFxuICAgIHsgdGlwOiB0eXBlID09PSAndGlwJyB9LFxuICAgIHsgc3RhcnQ6ICEhc3RhcnRzU2VxdWVuY2UgfSxcbiAgICB7IGVuZDogISFlbmRzU2VxdWVuY2UgfVxuICApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RmVldFRvQ20oZmVldCwgaW5jaCkge1xuICBjb25zdCBbZl0gPSBmZWV0LnNwbGl0KCcuJyk7XG4gIGNvbnN0IFtpXSA9IGluY2guc3BsaXQoJy4nKTtcbiAgcmV0dXJuIChwYXJzZUludChmLCAxMCkgKiAxMiArIHBhcnNlSW50KGksIDEwKSkgKiAyLjU0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0YVdlaWdodChtaW4gPSA5OSwgbWF4ID0gMzE5KSB7XG4gIGxldCBpID0gbWluO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZG8ge1xuICAgIHJlc3VsdFtpXSA9IChpICogMC40NSkudG9GaXhlZCgyKTtcbiAgICBpICs9IDE7XG4gIH0gd2hpbGUgKGkgPCBtYXgpO1xuICByZXR1cm4gcmVzdWx0Lm1hcCgodiwgaW5kZXgpID0+ICh7XG4gICAgbGFiZWw6IGAke2luZGV4fSAgbGJzICgke3Z9a2cpYCxcbiAgICB2YWx1ZTogYCR7aW5kZXh9IGxic2BcbiAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGFIZWlnaHQobWluID0gNCwgbWF4ID0gNykge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgZmVldCA9IG1pbjsgZmVldCA8IG1heDsgZmVldCArPSAxKSB7XG4gICAgZm9yIChsZXQgaW5jaCA9IDA7IGluY2ggPD0gMTE7IGluY2ggKz0gMSkge1xuICAgICAgY29uc3QgYSA9IGNvbnZlcnRGZWV0VG9DbShcbiAgICAgICAgZmVldC50b0ZpeGVkKDEpLnRvU3RyaW5nKCksXG4gICAgICAgIGluY2gudG9GaXhlZCgxKS50b1N0cmluZygpXG4gICAgICApO1xuICAgICAgcmVzdWx0LnB1c2goYCR7ZmVldH0nJHtpbmNofVwiICgke2EudG9GaXhlZCgyKX0gY20pYCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQubWFwKChmKSA9PiAoeyBsYWJlbDogYCR7Zn1gLCB2YWx1ZTogYCR7Zn1gIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlOiBudW1iZXIsIGZyYWN0aW9uRGlnaXRzID0gMikge1xuICBpZiAocHJpY2UpIHtcbiAgICByZXR1cm4gcHJpY2UudG9GaXhlZChmcmFjdGlvbkRpZ2l0cyk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4iLCJpbXBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9uXG59IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFVzZXIgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZUN1cnJlbnRVc2VyJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFVzZXJBdmF0YXIgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZUN1cnJlbnRVc2VyQXZhdGFyJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlQ3VycmVudFVzZXJCYWxhbmNlID0gY3JlYXRlQWN0aW9uKFxuICAndXBkYXRlQ3VycmVudFVzZXJCYWxhbmNlJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXBkYXRlVXNlcixcbiAgdXBkYXRlVXNlclN1Y2Nlc3MsXG4gIHVwZGF0ZVVzZXJGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VwZGF0ZVVzZXInLCAnVVBEQVRFX1VTRVInKTtcblxuZXhwb3J0IGNvbnN0IHNldFVwZGF0aW5nID0gY3JlYXRlQWN0aW9uKCd1cGRhdGluZ1VzZXInKTtcblxuZXhwb3J0IGNvbnN0IHNldFJlZHVjZXIgPSBjcmVhdGVBY3Rpb24oJ3NldFVzZXJSZWR1Y2VyJyk7XG5cbmV4cG9ydCBjb25zdCBidXlUb2tlblN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24oJ2J1eVRva2VuU3VjY2VzcycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRGYXZvcml0ZVBlcmZvcm1lcnMsXG4gIGdldEZhdm9yaXRlUGVyZm9ybWVyc1N1Y2Nlc3MsXG4gIGdldEZhdm9yaXRlUGVyZm9ybWVyc0ZhaWxlZFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRGYXZvcml0ZVBlcmZvcm1lcnMnLCAnR0VUX0ZBVk9VUklURScpO1xuZXhwb3J0IGNvbnN0IGdldHRpbmdGYXZvcml0ZVBlcmZvcm1lcnMgPSBjcmVhdGVBY3Rpb24oJ0dFVFRJTkdfRkFWT1JJVEUnKTtcbmV4cG9ydCBjb25zdCByZW1vdmVGYXZvcml0ZSA9IGNyZWF0ZUFjdGlvbignUkVNT1ZFX0ZBVk9SSVRFJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFBheW1lbnRUb2tlbkhpc3Ryb3ksXG4gIGdldFBheW1lbnRUb2tlbkhpc3Ryb3lTdWNjZXNzLFxuICBnZXRQYXltZW50VG9rZW5IaXN0cm95RmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRQYXltZW50VG9rZW5IaXN0cm95JywgJ0dFVF9QQVlNRVRfVE9LRV9ISVNUT1JZJyk7XG5leHBvcnQgY29uc3QgZ2V0dGlnUGF5bWVudFRva2VuSGlzdG9yeSA9IGNyZWF0ZUFjdGlvbignR0VUVElOR19QQVlNRVRfVE9LRV9ISVNUT1JZJyk7XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgaXNVcmwgfSBmcm9tICdAbGliL3N0cmluZyc7XG5pbXBvcnQgeyBJUmVnaXN0ZXJGb3JtRGF0YSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBJUmVzcG9uc2U8VD4ge1xuICBzdGF0dXM6IG51bWJlcjtcbiAgZGF0YTogVDtcbn1cblxuZXhwb3J0IGNvbnN0IFRPS0VOID0gJ3Rva2VuJztcbmV4cG9ydCBjb25zdCBST0xFID0gJ3JvbGUnO1xuZXhwb3J0IGNvbnN0IFBFUkZPUk1FUl9ST0xFID0gJ3BlcmZvcm1lcic7XG5leHBvcnQgY29uc3QgVVNFUl9ST0xFID0gJ3VzZXInO1xuZXhwb3J0IGNvbnN0IFNUVURJT19ST0xFID0gJ3N0dWRpbyc7XG5leHBvcnQgY29uc3QgU09SVCA9IHsgZGVzY2VuZDogJ2Rlc2MnLCBhc2NlbmQ6ICdhc2MnIH07XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBUElSZXF1ZXN0IHtcbiAgc3RhdGljIHRva2VuOiBzdHJpbmcgPSAnJztcblxuICBzZXRBdXRoSGVhZGVyVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgIEFQSVJlcXVlc3QudG9rZW4gPSB0b2tlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIEpTT04gcmV0dXJuZWQgYnkgYSBuZXR3b3JrIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtICB7b2JqZWN0fSByZXNwb25zZSBBIHJlc3BvbnNlIGZyb20gYSBuZXR3b3JrIHJlcXVlc3RcbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICBUaGUgcGFyc2VkIEpTT04gZnJvbSB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZUpTT04ocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0IHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA1KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBuZXR3b3JrIHJlcXVlc3QgY2FtZSBiYWNrIGZpbmUsIGFuZCB0aHJvd3MgYW4gZXJyb3IgaWYgbm90XG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gcmVzcG9uc2UgICBBIHJlc3BvbnNlIGZyb20gYSBuZXR3b3JrIHJlcXVlc3RcbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fHVuZGVmaW5lZH0gUmV0dXJucyBlaXRoZXIgdGhlIHJlc3BvbnNlLCBvciB0aHJvd3MgYW4gZXJyb3JcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgY2hlY2tTdGF0dXMocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDEzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgRW50aXR5IFRvbyBMYXJnZScpO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xuICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW4gaW4gdGhlIGFjdGlvbiEnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkgYXMgYW55O1xuICAgIC8vIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgLy8gdGhyb3cgZXJyb3I7XG4gICAgdGhyb3cgcmVzcG9uc2UuY2xvbmUoKS5qc29uKCk7XG4gIH1cblxuICByZXF1ZXN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG1ldGhvZD86IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCB2ZXJiID0gKG1ldGhvZCB8fCAnZ2V0JykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCB1cGRhdGVkSGVhZGVyID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC8vIFRPRE8gLSBjaGVjayBtZVxuICAgICAgQXV0aG9yaXphdGlvbjpcbiAgICAgICAgQVBJUmVxdWVzdC50b2tlbiB8fCAocHJvY2Vzcy5icm93c2VyID8gY29va2llLmdldChUT0tFTikgOiAnJyksXG4gICAgICAuLi4oaGVhZGVycyB8fCB7fSlcbiAgICB9O1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuXG4gICAgcmV0dXJuIGZldGNoKGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuQVBJX0VORFBPSU5UIHx8IGNvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCwge1xuICAgICAgbWV0aG9kOiB2ZXJiLFxuICAgICAgaGVhZGVyczogdXBkYXRlZEhlYWRlcixcbiAgICAgIGJvZHk6IGJvZHkgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IG51bGxcbiAgICB9KVxuICAgICAgLnRoZW4odGhpcy5jaGVja1N0YXR1cylcbiAgICAgIC50aGVuKHRoaXMucGFyc2VKU09OKTtcbiAgfVxuXG4gIGJ1aWxkVXJsKGJhc2VVcmw6IHN0cmluZywgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIH0pIHtcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgcmV0dXJuIGJhc2VVcmw7XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAubWFwKChrKSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trXSl9YClcbiAgICAgIC5qb2luKCcmJyk7XG4gICAgcmV0dXJuIGAke2Jhc2VVcmx9PyR7cXVlcnlTdHJpbmd9YDtcbiAgfVxuXG4gIGdldCh1cmw6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ2dldCcsIG51bGwsIGhlYWRlcnMpO1xuICB9XG5cbiAgcG9zdCh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ3Bvc3QnLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHB1dCh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ3B1dCcsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgZGVsKHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAnZGVsZXRlJywgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICB1cGxvYWQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZmlsZXM6IHtcbiAgICAgIGZpbGU6IEZpbGU7XG4gICAgICBmaWVsZG5hbWU6IHN0cmluZztcbiAgICB9W10sXG4gICAgb3B0aW9uczoge1xuICAgICAgb25Qcm9ncmVzczogRnVuY3Rpb247XG4gICAgICBjdXN0b21EYXRhPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICAgIG1ldGhvZD86IHN0cmluZztcbiAgICB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9LFxuICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICB9XG4gICkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIGNvbnN0IHVwbG9hZFVybCA9IGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWA7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZpbGVzLmZvckVhY2goKGYpID0+IGZvcm1EYXRhLmFwcGVuZChmLmZpZWxkbmFtZSwgZi5maWxlLCBmLmZpbGUubmFtZSkpO1xuICAgICAgb3B0aW9ucy5jdXN0b21EYXRhXG4gICAgICAgICYmIE9iamVjdC5rZXlzKG9wdGlvbnMuY3VzdG9tRGF0YSkuZm9yRWFjaChcbiAgICAgICAgICAoZmllbGRuYW1lKSA9PiB0eXBlb2Ygb3B0aW9ucy5jdXN0b21EYXRhW2ZpZWxkbmFtZV0gIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAmJiBmb3JtRGF0YS5hcHBlbmQoZmllbGRuYW1lLCBvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSlcbiAgICAgICAgKTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKG9wdGlvbnMubWV0aG9kIHx8ICdQT1NUJywgdXBsb2FkVXJsKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVnaXN0ZXIoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVJlZ2lzdGVyRm9ybURhdGEsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLmRvY3VtZW50VmVyaWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZSA9IGRhdGEuZG9jdW1lbnRWZXJpZmljYXRpb24uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgJ2RvY3VtZW50VmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICBkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUsXG4gICAgICAgICAgZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlLm5hbWVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuaWRWZXJpZmljYXRpb24pIHtcbiAgICAgICAgY29uc3QgaWRWZXJpZmljYXRpb25EaWxlID0gZGF0YS5pZFZlcmlmaWNhdGlvbi5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAnaWRWZXJpZmljYXRpb24nLFxuICAgICAgICAgIGlkVmVyaWZpY2F0aW9uRGlsZSxcbiAgICAgICAgICBpZFZlcmlmaWNhdGlvbkRpbGUubmFtZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgb21pdChkYXRhLCBbJ2RvY3VtZW50VmVyaWZpY2F0aW9uJywgJ2lkVmVyaWZpY2F0aW9uJ10pXG4gICAgICApLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUE9TVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImxldCBnbG9iYWxDb25maWcgPSB7fSBhcyBhbnk7XG5cbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDb25maWcgPSAoY29uZmlnOiBhbnkpID0+IHtcbiAgZ2xvYmFsQ29uZmlnID0gY29uZmlnO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEdsb2JhbENvbmZpZyA9ICgpID0+IGdsb2JhbENvbmZpZztcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFRva2VuUGFja2FnZVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BhY2thZ2UvdG9rZW4vc2VhcmNoJywgcGFyYW1zKSk7XG4gIH1cblxuICBidXlUb2tlbnMoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wYXltZW50L3B1cmNoYXNlLXRva2Vucy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2tlblBhY2thZ2VTZXJ2aWNlID0gbmV3IFRva2VuUGFja2FnZVNlcnZpY2UoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoLXRvLXJlZ2V4cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1udW1iZXItZm9ybWF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWFjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VsZWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=