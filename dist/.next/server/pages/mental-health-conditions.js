module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/mental-health-conditions/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Common/PageBanner.js":
/*!*****************************************!*\
  !*** ./components/Common/PageBanner.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  imgClass
}) => {
  return __jsx("div", {
    className: `page-title-area ${imgClass}`
  }, __jsx("div", {
    className: "d-table"
  }, __jsx("div", {
    className: "d-table-cell"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "page-title-content"
  }, __jsx("h2", null, pageTitle), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: homePageUrl
  }, __jsx("a", null, homePageText))), __jsx("li", {
    className: "active"
  }, activePageText)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PageBanner);

/***/ }),

/***/ "./components/Common/Subscribe.js":
/*!****************************************!*\
  !*** ./components/Common/Subscribe.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\programData\\React\\cams-3\\user\\components\\Common\\Subscribe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Subscribe = () => {
  return __jsx("div", {
    className: "subscribe-area",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 6
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Subscribe Now"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Get our latest news & update regularly")), __jsx("div", {
    className: "col-lg-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, __jsx("form", {
    className: "newsletter-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "Enter Your Email",
    name: "EMAIL",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 8
    }
  }), __jsx("button", {
    className: "default-btn",
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 8
    }
  }, "Subscribe"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/mental-health-conditions/index.less":
/*!***************************************************!*\
  !*** ./pages/mental-health-conditions/index.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/mental-health-conditions/index.tsx":
/*!**************************************************!*\
  !*** ./pages/mental-health-conditions/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Common_Subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Common/Subscribe */ "./components/Common/Subscribe.js");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Common/PageBanner */ "./components/Common/PageBanner.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./pages/mental-health-conditions/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_performer_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redux/performer/actions */ "./src/redux/performer/actions.ts");
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux/auth/actions */ "./src/redux/auth/actions.ts");
/* harmony import */ var _redux_user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redux/user/actions */ "./src/redux/user/actions.ts");
/* harmony import */ var _redux_studio_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redux/studio/actions */ "./src/redux/studio/actions.ts");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_socket__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/socket */ "./src/socket/index.ts");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-accessible-accordion */ "react-accessible-accordion");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "E:\\programData\\React\\cams-3\\user\\pages\\mental-health-conditions\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const initQueryState = {
  offset: 0,
  limit: 60,
  gender: '',
  category: '',
  country: '',
  sortBy: '',
  sort: 'desc'
};

class Homepage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, "search", () => {
      const {
        router,
        searchPerformer: dispatchSearchPerformer
      } = this.props;
      const {
        query
      } = this.state;
      dispatchSearchPerformer(_objectSpread(_objectSpread({}, query), router.query));
    });

    this.state = {
      query: initQueryState
    };
  }

  componentDidMount() {
    this.search();
    this.socket = this.context;
    this.socket.on('modelUpdateStatus', this.search);
    this.socket.on('modelUpdateStreamingStatus', this.search);
  }

  componentDidUpdate(prevProps, prevStates) {
    const {
      router,
      loggedIn
    } = this.props;
    const {
      query
    } = this.state;

    if (router.query.q !== prevProps.router.query.q || query !== prevStates.query) {
      this.search();
    }

    if (!loggedIn && loggedIn !== prevProps.loggedIn) {
      this.search();
    }
  }

  componentWillUnmount() {
    this.socket = this.context;

    if (this.socket) {
      this.socket.off('modelUpdateStatus');
      this.socket.off('modelUpdateStreamingStatus');
    }
  }

  async onLike(performer) {
    const {
      updatePerformerFavourite: dispatchUpdatePerformerFavorite
    } = this.props;
    const {
      _id,
      isFavorite
    } = performer;

    try {
      await src_services__WEBPACK_IMPORTED_MODULE_9__["favouriteService"].favorite(_id, isFavorite);
      dispatchUpdatePerformerFavorite(_id);
    } catch (error) {
      const e = await Promise.resolve(error);
      antd__WEBPACK_IMPORTED_MODULE_10__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_11__["getResponseError"])(e));
    }
  }

  setFilter(name, value) {
    const {
      query
    } = this.state;
    this.setState({
      query: _objectSpread(_objectSpread({}, query), {}, {
        [name]: value
      })
    });
  }

  clearFilter() {
    this.setState({
      query: initQueryState
    });
  }

  render() {
    const {
      categories,
      countries,
      ui,
      settings
    } = this.props;
    const {
      query
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }
    }, ui === null || ui === void 0 ? void 0 : ui.siteName), __jsx("meta", {
      name: "keywords",
      content: settings === null || settings === void 0 ? void 0 : settings.metaKeywords,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "description",
      content: settings === null || settings === void 0 ? void 0 : settings.metaDescription,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:title",
      content: settings === null || settings === void 0 ? void 0 : settings.siteName,
      key: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:image",
      content: settings === null || settings === void 0 ? void 0 : settings.logoUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:keywords",
      content: settings === null || settings === void 0 ? void 0 : settings.metaKeywords,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:description",
      content: settings === null || settings === void 0 ? void 0 : settings.metaDescription,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 11
      }
    })), __jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      pageTitle: "Mental Health Conditions",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "Mental Health Conditions",
      imgClass: "bg-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "terms-conditions ptb-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "single-privacy",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }
    }, __jsx("h2", {
      className: "mt-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 15
      }
    }, "Mental Health Conditions"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 65
      }
    })), __jsx("div", {
      className: "row align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-lg-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "col-lg-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "faq-accordion",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["Accordion"], {
      allowZeroExpanded: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 19
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "a",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 27
      }
    }, "Anorexia"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 25
      }
    }, "Anorexia is a severe mental health condition affecting attitudes and behaviours towards the consumption of food, anorexia can affect both women and men. People suffering from anorexia tend to have a crippling worry of becoming \u2018fat\u2019 and do not see their bodies for how they truly are, with many sufferers wrongly believing that they are overweight when they are not. People with anorexia may additionally minimise their weight by limiting the meals that they eat, making themselves vomit, and exercising an excessive amount. Anorexia has truly dangerous outcomes for sufferers physical and mental health."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 25
      }
    }, "People suffering from anorexia often disguise their behaviour from loved ones. Common symptoms of anorexia encompass:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 27
      }
    }, "Missing food, ingesting minimal amounts of food, or actively avoiding specific foods."), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 27
      }
    }, "Obsessively counting calories in meals"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 27
      }
    }, "Leaving the table immediately after ingesting with the intention to vomit"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 27
      }
    }, "Taking laxatives and hunger suppressants"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 27
      }
    }, "Physical issues such as feeling lightheaded or dizzy, hair loss or dry pores and skin"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 27
      }
    }, "Repeated weighing and checking one\u2019s reflection in the mirror.")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 25
      }
    }, "Individuals affected by anorexia might also be afflicted by several different mental health issues such as depression, anxiety, and self-harm."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 25
      }
    }, "Which therapies may help?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 27
      }
    }, "Psychiatric management"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 27
      }
    }, "Cognitive-behavioural remedy (CBT)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 27
      }
    }, "Dialectical behaviour therapy (DBT)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 27
      }
    }, "Schema therapy (ST)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 27
      }
    }, "Cognitive analytic therapy (CAT)")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "b",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 27
      }
    }, "Anxiety"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 25
      }
    }, "Anxiety is a simple, essential emotion that all of us experience when our bodies expect hazard or risk. However, for numerous reasons, every now and then people can miscalculate the chance of a scenario and may experience tension disproportionate to the circumstance. If your emotions of fear and stress occur frequently, for a protracted period of time, or you feel as though your fears and stress are consuming you, you may suffer from anxiety. Anxiety is a simple, essential emotion that all of us experience when our bodies expect hazard or risk. However, for numerous reasons, every now and then people can miscalculate the chance of a scenario and may experience tension disproportionate to the circumstance. If your emotions of fear and stress occur frequently, for a protracted period of time, or you feel as though your fears and stress are consuming you, you may suffer from anxiety."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 25
      }
    }, "Although some of the following may not apply to you, a number of the most common symptoms of anxiety include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 27
      }
    }, "Dizziness"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 27
      }
    }, "Sweating"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 27
      }
    }, "Heart palpitations"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 27
      }
    }, "Trembling or shaking"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 27
      }
    }, "Dry mouth"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 27
      }
    }, "Stomach pain"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 27
      }
    }, "Headache"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 27
      }
    }, "Feeling nauseous"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 27
      }
    }, "Shortness of breath"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 27
      }
    }, "Loss of hunger"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 27
      }
    }, "Dread"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 27
      }
    }, "Panic"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 27
      }
    }, "Worry"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 27
      }
    }, "Terror / fear"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 27
      }
    }, "Agitated and jumpy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 27
      }
    }, "Nervousness")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 25
      }
    }, "However, unique symptoms depend on the type of anxiety ailment you may be affected by, as tension can take the form of:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 27
      }
    }, "Generalised tension ailment (GAD)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 27
      }
    }, "Panic sickness"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 27
      }
    }, "Health tension"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 27
      }
    }, "Phobias"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 27
      }
    }, "Obsessive-compulsive disorder (OCD)")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 25
      }
    }, "If you feel that any of the above applies to you, recognize that you are not on your own, as anxiety is one of the most common mental health issues and you may benefit greatly from therapy."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 25
      }
    }, "Which therapies might assist me?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 27
      }
    }, "Acceptance and dedication remedy (ACT)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 27
      }
    }, "Cognitive-behavioural remedy (CBT)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 27
      }
    }, "Mindfulness-based totally cognitive therapy (MBCT)")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "c",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 27
      }
    }, "Attention Deficit Hyperactive Disorder"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 25
      }
    }, "Attention deficit hyperactive disorder refers to a group of behavioural signs and symptoms that include inattentiveness, hyperactivity, and impulsivity. Although ADHD issues are typically identified in children, adults also can also suffer from it. If you battle to concentrate or stay focused on obligations, regularly act on impulse, and experience problems regulating your behaviour in response to certain situations, you could suffer from ADHD."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 25
      }
    }, "Common signs and symptoms of ADHD:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 27
      }
    }, "Short attention span or being easily distracted"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 27
      }
    }, "Restlessness"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 27
      }
    }, "Constant fidgeting or overactivity"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 27
      }
    }, "Inability to deal with stress or to keep mood"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 27
      }
    }, "Disorganisation \u2013 such as misplacing things"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 27
      }
    }, "Impulsive behaviour \u2013 which includes immoderate spending")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 25
      }
    }, "If you suffer from ADHD, you might additionally have issues sleeping and might suffer from anxiety issues. If you believe you experience any of the above symptoms, a combination of medication and therapy can significantly enhance your daily functioning."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 25
      }
    }, "Which types of therapy are appropriate?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 27
      }
    }, "Cognitive-behavioural remedy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 27
      }
    }, "Stress discount"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 27
      }
    }, "Behavioural education")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "d",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 27
      }
    }, "Bereavement"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 25
      }
    }, "Bereavement is the name given to describe the sense of loss we experience when a cherished one passes away. When you are grieving, it is ordinary to experience various emotions including unhappiness, anger, anxiety, and guilt, however now and again bereavement may be particularly overwhelming or uncover emotions which might be difficult to control. If you\u2019re experiencing \u2018complicated bereavement\u2019, you will find yourself withdrawn, irritated, and experiencing symptoms of depression."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 25
      }
    }, "Some signs of typical bereavement include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 27
      }
    }, "Intense sorrow"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 27
      }
    }, "Focus on little else but the loss of a loved one"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 27
      }
    }, "Extreme consciousness on reminders of the loved one or avoidance of reminders"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 27
      }
    }, "Difficulties accepting the death"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 27
      }
    }, "Numbness and/or detachment"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 27
      }
    }, "Feeling that life has no meaning"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 27
      }
    }, "Irritability or agitation"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 27
      }
    }, "Lack of trust in others"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 27
      }
    }, "Inability to experience existence or think back on advantageous experiences with the one you love")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 25
      }
    }, "If those symptoms don\u2019t improve over time, it might be beneficial to explore therapeutic options. Some of the signs and symptoms that your bereavement might be more complex and requiring treatment could be:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 27
      }
    }, "Having trouble carrying out day-to-day tasks."), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 27
      }
    }, "Withdrawal from social activities"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 27
      }
    }, "Depression"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 27
      }
    }, "Thoughts of guilt or self-blame"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 27
      }
    }, "Persistent thoughts of blame and that you could have prevented their passing."), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 27
      }
    }, "Loss of a sense of purpose and self-worth."), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 27
      }
    }, "Feeling that life is not worth living without your loved one."), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 27
      }
    }, "Wish that you had died with your loved one.")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 25
      }
    }, "If you experience those symptoms, therapy may help you come to terms with your loss and aid you in reforming your life."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 25
      }
    }, "Which treatments would possibly help?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 27
      }
    }, "Cognitive-behavioural therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 27
      }
    }, "Cognitive-behavioural therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 27
      }
    }, "Psychodynamic remedy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 27
      }
    }, "Dynamic interpersonal remedy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 27
      }
    }, "Acceptance and dedication remedy")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "e",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 27
      }
    }, "Binge Eating Disorder"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 25
      }
    }, "Binge eating disorder is a mental health sickness affecting an individual\u2019s attitudes and behaviours relating to the consumption of meals, this disorder can have harmful consequences for both bodily and intellectual health. People with binge consuming problems eat more meals than other people would in a similar time period and often have no control over how much they eat during an episode. Individuals may experience these symptoms; extremely speedy consumption, past feeling full, still eating when no longer hungry, eat in secret to cover the quantity this is being eaten, or experience a terrible feeling after a binge, you could be afflicted by binge eating disorder."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 25
      }
    }, "In order to meet the prognosis for the sickness, you should experience a minimum 3 of the aforementioned symptoms every week for 3 months."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 25
      }
    }, "Which therapies might help?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 27
      }
    }, "Cognitive-behavioural remedy (CBT)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 27
      }
    }, "Modified dialectical behaviour therapy (DBT).")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "f",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 27
      }
    }, "Bipolar Disorder"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 25
      }
    }, "Previously referred to as manic depression, people suffering from bipolar disorder experience shifts in mood from extreme low moods to intense high moods, with a few patients never experiencing \u2018regular\u2019 temper. If you experience periods of depression alternated with intervals of overactivity and emotions of euphoria, each of which can last several weeks, you may be suffering from bipolar disorder."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 25
      }
    }, "Common symptoms of depression/low mood:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 27
      }
    }, "Sadness"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 27
      }
    }, "Uncontrollable crying"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 27
      }
    }, "Anxiety"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 27
      }
    }, "Loss of interest or amusement in sports"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 27
      }
    }, "Withdrawal from family and friends"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 27
      }
    }, "Excessive guilt"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 27
      }
    }, "Suicidal mind and urges")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 25
      }
    }, "Common symptoms of euphoria include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 27
      }
    }, "Increased energy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 27
      }
    }, "Unusual talkativeness"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 27
      }
    }, "Racing thoughts"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 27
      }
    }, "Little want for sleep"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 27
      }
    }, "Inflated self esteem"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 27
      }
    }, "Spending sprees")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 25
      }
    }, "Bipolar disorder can be classed bipolar I (manic episodes) or bipolar II (hypomanic episodes). The foremost distinction among mania and hypomania is the severity of the manic segment."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 25
      }
    }, "If you feel that the above applies to you, therapy in addition to medication can extremely enhance your daily functioning and improve your quality of life."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 25
      }
    }, "Which treatment plans could help?"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 25
      }
    }, "Cognitive behavioural therapy can assist a person with bipolar symptoms and learn how to recognise when a temper shift is about to occur. CBT can also help someone with bipolar sickness stick to a therapy plan to reduce the chances of relapse."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "g",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 27
      }
    }, "Body Dysmorphic Disorder"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 25
      }
    }, "Body Dysmorphic Disorder is a form of anxiety affecting someone\u2019s image. People affected by this disorder have a distorted view of their own appearance, and generally tend to fixate on elements of their face or body that they believe are unattractive or \u2018wrong\u2019. Because of those core beliefs, they generally tend to spend a significant time worried about their appearance, however body dysmorphia disorder is a serious mental health condition, consequently sufferers are not merely vain or self-obsessed. If you find yourself continuously comparing your appearance to others, spending numerous times looking to hide supposed personal defects, or becoming distressed by a certain area of your body, you may be suffering from body dysmorphia disorder."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 25
      }
    }, "Other symptoms include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 27
      }
    }, "Spending lots of time in the front of the mirror or steering clear of mirrors altogether"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 27
      }
    }, "Feeling worried whilst around other people and averting social situations"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 27
      }
    }, "Being overly worried regarding requesting help of fear that they\u2019ll be seen to be self-obsessed"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 27
      }
    }, "Seeking clinical remedy for the perceived defect which include cosmetic surgical procedure"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 27
      }
    }, "Excessive food regimen and exercise")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 25
      }
    }, "Although BDD is different to OCD, there are similarities between the 2 problems, as each involve compulsive behaviours. BDD also can result in depression, self-harm and suicidal thoughts."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 25
      }
    }, "If you experience the above symptoms, therapy can significantly enhance your self-esteem, well-being, and quality of life."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 25
      }
    }, "Which treatment plans may assist?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 27
      }
    }, "Acceptance and Commitment Therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 27
      }
    }, "Schema Therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 27
      }
    }, "Cognitive Analytic Therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 27
      }
    }, "Cognitive Behavioural Therapy")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "h",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 27
      }
    }, "Borderline Personality Disorder"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443,
        columnNumber: 25
      }
    }, "Borderline personality disorder (BPD) is a developmental disease that substantially disrupts a person\u2019s potential to alter their emotions, manage their actions, and shape solid interpersonal relationships."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 25
      }
    }, "Unfortunately, BPD is often misdiagnosed as bipolar disorder, while in BPD adjustments in temper and mood occur much more frequently. The individual\u2019s mood can often differ substantially just in a single day."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 25
      }
    }, "To be diagnosed with BPD the person may exhibit any 5 of the following symptoms:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447,
        columnNumber: 27
      }
    }, "Fear of abandonment"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 27
      }
    }, "Unstable or converting relationships"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 27
      }
    }, "Unstable self-image; struggles with identity"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 27
      }
    }, "Impulsive self-adverse behaviours (immoderate spending, dangerous sex, substance misuse, binge consuming and others)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 27
      }
    }, "Suicidal behaviour or self-harm"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 27
      }
    }, "Mood instability with numerous mood swings"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 27
      }
    }, "Feelings of emptiness"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 27
      }
    }, "Difficulties with anger, consisting of common loss of temper or fighting"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 27
      }
    }, "Stress related paranoia or dissociation")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 25
      }
    }, "If you feel that the above applies to you, it\u2019s critical to consultant a specialist to diagnose you effectively as human beings with BPD regularly also experience other disorders such as depression, anxiety, substance misuse or eating problems."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 25
      }
    }, "If you are suffering from BPD, specialist therapy can greatly improve your day-to-day functioning and quality of life."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "i",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 27
      }
    }, "Depression"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 25
      }
    }, "We all feel sad occasionally, whether or not it be in reaction to a provoking circumstance or for no reason at all. However, if you are feeling this way for weeks or months, as opposed to just a few days, you will be suffering with depression."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472,
        columnNumber: 25
      }
    }, "Although depression can affect humans in very specific ways and there are varying degrees of severity, some commonplace signs and symptoms of depression include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 474,
        columnNumber: 27
      }
    }, "Continuous low temper or disappointment"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475,
        columnNumber: 27
      }
    }, "Feeling hopeless or helpless"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476,
        columnNumber: 27
      }
    }, "Feeling tearful"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477,
        columnNumber: 27
      }
    }, "Feeling guilt-ridden"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478,
        columnNumber: 27
      }
    }, "Feeling irritable and intolerant of other people"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 27
      }
    }, "Having no motivation or interests"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 27
      }
    }, "Feeling indecisive"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 481,
        columnNumber: 27
      }
    }, "Not getting amusement out of life"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 27
      }
    }, "Feeling anxious or concerned"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483,
        columnNumber: 27
      }
    }, "Having suicidal thoughts or thoughts of harming your self"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484,
        columnNumber: 27
      }
    }, "Lack of energy or interest in sex"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485,
        columnNumber: 27
      }
    }, "Change in appetite"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486,
        columnNumber: 27
      }
    }, "Disturbed sleep")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488,
        columnNumber: 25
      }
    }, "However, symptoms might be specific to the type of depression you are experiencing as there are several classifications consisting of:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490,
        columnNumber: 27
      }
    }, "Seasonal affective disorder (SAD)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491,
        columnNumber: 27
      }
    }, "Bipolar disorder"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 27
      }
    }, "Post-natal depression")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 25
      }
    }, "If you suspect you are experiencing depression, a mixture of medication and therapy has been established to be the most effective treatment for depression."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 25
      }
    }, "Which cures may help?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 27
      }
    }, "Cognitive-behavioural therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 27
      }
    }, "Acceptance and commitment therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 27
      }
    }, "Mindfulness-based cognitive therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 27
      }
    }, "Cognitive analytic therapy")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "j",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 27
      }
    }, "EEating Disorder"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 25
      }
    }, "Eating disorder is the general term given to a collection of issues that can occur in both women and men, negatively affecting individuals\u2019 attitudes and behaviours towards eating and meals.  Societal pressures could result in personal insecurities surfacing and could result in a distorted view of what an individual\u2019s body should look like as opposed to what it currently looks like. If you spend a variety of time focusing on your weight and discover yourself making unhealthy choices, which include over-exercise, restricting the meals you eat and/or obsessive calorie counting, or different behaviours such as purging to control your weight, it is likely you are suffering from an eating disorder."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "k",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519,
        columnNumber: 27
      }
    }, "Existential Therapy"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525,
        columnNumber: 25
      }
    }, "This type of therapy addresses a certain type of anxiety where an individual feels stressed or uneasy as a result of life\u2019s foremost concerns, such as the inevitability of death and the meaning of their life. Therapists can help you to overcome your anxiety and find meaning in your own life."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526,
        columnNumber: 25
      }
    }, "There are specific types of eating disorders, with the most common being:"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527,
        columnNumber: 25
      }
    }, "Anorexia nervosa \u2013 When a person tries to keep their weight as little as viable, frequently through excessively limiting the meals they\u2019re eating and/or workout an excessive amount."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 25
      }
    }, "Bulimia \u2013 When a person is going through periods of binge consuming and is then deliberately unwell or uses laxatives to govern their weight"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 25
      }
    }, "Binge eating disorder \u2013 When a person eats big amounts of food in a brief time and feels unable to govern themselves"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 25
      }
    }, "Some individuals may suffer from a variety of these symptoms and is thus described as EDNOS (eating disorder not otherwise specified)."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 25
      }
    }, "The most likely symptoms associated with an eating disorder are:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 27
      }
    }, "Negative self-perception relating to your body"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 534,
        columnNumber: 27
      }
    }, "Constantly weighing yourself"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535,
        columnNumber: 27
      }
    }, "Dissatisfaction with bodily specifics"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 27
      }
    }, "Food restrictions"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537,
        columnNumber: 27
      }
    }, "Compulsive exercise"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538,
        columnNumber: 27
      }
    }, "Need for perfection"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 27
      }
    }, "Purging"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540,
        columnNumber: 27
      }
    }, "Fear of being overweight"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 541,
        columnNumber: 27
      }
    }, "Excessive food consumption")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 25
      }
    }, "If you are suffering from an eating disorder, depending on the type and severity, you might require a multi-disciplinary method of treatment, however therapy can significantly help to improve your quality of life."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "l",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 549,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 27
      }
    }, "Generalized Anxiety Disorder"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 25
      }
    }, "Whilst anxiety is a primary fundamental emotion, we all experience occasionally, those individuals struggling with generalised anxiety disorder experience anxiety relating to a wide range of factors in their daily lives in a way which disrupts their day-to-day functioning."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 25
      }
    }, "If you are feeling worried and stained most days, can\u2019t remember the last time you felt at ease, and cannot calm your mind you may be suffering from GAD."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 25
      }
    }, "Although the below list beneath is not exhaustive, a few common symptoms of GAD are:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 27
      }
    }, "Restlessness"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 27
      }
    }, "Feeling continuously on edge."), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562,
        columnNumber: 27
      }
    }, "Difficulty concentrating"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563,
        columnNumber: 27
      }
    }, "Sense of dread"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 27
      }
    }, "Heart palpitations"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 27
      }
    }, "Sleep difficulties"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 566,
        columnNumber: 27
      }
    }, "Headaches"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 27
      }
    }, "Excessive sweating"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 568,
        columnNumber: 27
      }
    }, "Shortness of breath"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 569,
        columnNumber: 27
      }
    }, "Dizziness"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 570,
        columnNumber: 27
      }
    }, "Irritability")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 572,
        columnNumber: 25
      }
    }, "The defining feature of GAD is the constant and unrelenting worrying experienced by the individual. If you are experiencing a number of the aforementioned symptoms, then a combination of medication and therapy can greatly improve your quality of life."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573,
        columnNumber: 25
      }
    }, "Which treatments might assist?"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 574,
        columnNumber: 25
      }
    }, "Cognitive-behavioural therapy"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575,
        columnNumber: 25
      }
    }, "Acceptance and dedication therapy"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576,
        columnNumber: 25
      }
    }, "Mindfulness based cognitive therapy"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "m",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 581,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582,
        columnNumber: 27
      }
    }, "Health Anxiety"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 25
      }
    }, "Whilst anxiety is a simple, essential emotion we all experience now and again, individuals affected by health anxiety regularly worry about their fitness and fear that they have got a serious bodily illness, whilst there is often no reason to suppose this at all."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 25
      }
    }, "This disproportionate anxiety causes individuals serious distress and can greatly impact daily functioning. Some people with health anxiety can also have a clinical circumstance that they fear about an excessive amount, or in a manner that is out of proportion to the actual scenario. Others may be troubled by signs and symptoms that are medically unexplained. Others may be excessively worried about future ailments, impacting their daily lives."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 25
      }
    }, "Some common signs of health anxiety are:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 591,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 27
      }
    }, "An accompaniment of unexplained bodily signs and symptoms and frequent visits to the GP to check if these signs and symptoms represent an undiagnosed medical condition"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 593,
        columnNumber: 27
      }
    }, "Fear of getting ill or experiencing symptoms of contamination without significant cause for worry"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 594,
        columnNumber: 27
      }
    }, "Residual fear regarding the possible reoccurrence of a disease or contamination"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 595,
        columnNumber: 27
      }
    }, "Fear relating to catastrophic effects that would occur if one had contracted an infection"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 27
      }
    }, "Fear of heightened vulnerability or susceptibility to sickness or illness"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 27
      }
    }, "Engaging in a number of behaviours such as consulting more than one medical doctor, undergoing diagnostic techniques, studying feasible reasons of symptoms, regular hand washing and different protection behaviours.")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 599,
        columnNumber: 25
      }
    }, "If you feel that the above applies to you, therapy can greatly help to enhance your day-to-day functioning and wellbeing."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 600,
        columnNumber: 25
      }
    }, "Which treatment options might help?"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "n",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 604,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606,
        columnNumber: 27
      }
    }, "Obsessive Compulsive Disorder"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612,
        columnNumber: 25
      }
    }, "OCD is a common anxiety illness wherein a person has obsessive thoughts and feel as though they should engage in compulsive activities to manage these obsessive thoughts and neutralise their anxiety, even if they find the compulsions upsetting. An obsession is a chronic, unwanted thought, picture or urge that is very difficult or not possible to block out, causing feelings of anxiety, disgust or unease. A compulsion is a repetitive behaviour (that could additionally be mental) that a person feels they must perform to calm the obsessive thoughts."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613,
        columnNumber: 25
      }
    }, "The regular cycle of OCD is as follows:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615,
        columnNumber: 27
      }
    }, "Obsessions \u2013 in which an unwanted image, photo or urge repeatedly enters your thoughts"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 616,
        columnNumber: 27
      }
    }, "Anxiety \u2013 the obsession provokes severe tension and distress"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 27
      }
    }, "Compulsion \u2013 repetitive behaviours or intellectual acts are performed to relieve the distress or tension"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 27
      }
    }, "Temporary relief \u2013 the compulsive behaviour brings brief comfort, but the anxiety and obsession soon go back")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 25
      }
    }, "Obsessions and compulsions differ among individuals; however, a few not unusual obsessions consist of worry about infection, harming yourself or others, or obsessions of perfection. Sometimes obsessions and compulsions are related, so a person with a fear of contamination may be forced to repeatedly wash their hands, however compulsions also can be totally unrelated, consisting of tapping a foot again and again."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 25
      }
    }, "The severity of OCD symptoms can range greatly. For a few individuals, symptoms can be fleeting, while others are unable to perform everyday activities due to the fact their compulsions are so time-consuming, or for fear of being triggered."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 25
      }
    }, "If you feel that the above applies to you, therapy can greatly enhance your day-to-day functioning and quality of life through helping you to understand your circumstance and coaching you in effective coping strategies."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 25
      }
    }, "Which therapies would possibly help?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625,
        columnNumber: 27
      }
    }, "Cognitive behavioural therapy including graded exposure and reaction prevention, a therapy which places emphasis on experiencing the obsessive thoughts without looking to \u2018neutralise\u2019 them with compulsive behaviour.")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 27
      }
    }, "Panic Attack"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 637,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 638,
        columnNumber: 25
      }
    }, "Panic attack is the name given to a collection of signs and symptoms that occur when a person is experiencing excessive anxiety. People who suffer from this type of anxiety ailment (panic attacks) have regular and repeated panic attacks often for no clear reason."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639,
        columnNumber: 25
      }
    }, "If you are having a panic attack you may experience mental symptoms which include an overwhelming sense of fear, anxiety and nerves."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 640,
        columnNumber: 25
      }
    }, "You can also experience physical signs and symptoms which include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 641,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 27
      }
    }, "Nausea"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 643,
        columnNumber: 27
      }
    }, "Trembling"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 644,
        columnNumber: 27
      }
    }, "Sweating"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 645,
        columnNumber: 27
      }
    }, "Heart palpitations"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 27
      }
    }, "Increased temperature"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 647,
        columnNumber: 27
      }
    }, "Shortness of breath"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648,
        columnNumber: 27
      }
    }, "Chest pain"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 649,
        columnNumber: 27
      }
    }, "Numbness"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 650,
        columnNumber: 27
      }
    }, "Feeling of dread or worry of death"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 651,
        columnNumber: 27
      }
    }, "Tingling sensation in your hands"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 27
      }
    }, "Terror")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654,
        columnNumber: 25
      }
    }, "During a panic attack some people experience \u2018depersonalisation\u2019, where you feel indifferent and removed from the situation, your body, and your environment. Sometimes the signs and symptoms of a panic attack can be so severe that you might feel as though you are having a heart attack. Because the physical signs of a panic attack are so unpleasant, those who are likely to experience panic attacks are frightened in anticipation of their next attack, which creates a vicious cycle of anticipatory anxiety and further adds to the panic."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 655,
        columnNumber: 25
      }
    }, "Most panic attacks last between five and twenty mins. The severity and frequency of panic attacks varies among individuals. Some individuals may have panic attacks a few times a month, others may experience multiple attacks every week."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 656,
        columnNumber: 25
      }
    }, "If you feel that the above applies to you, therapy will allow you to recognize how and why panic attacks take place and will teach you effective coping strategies."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657,
        columnNumber: 25
      }
    }, "Which therapies might help?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 659,
        columnNumber: 27
      }
    }, "Cognitive Behavioural Therapy (CBT)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660,
        columnNumber: 27
      }
    }, "Acceptance and Commitment Therapy (ACT)")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "p",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 664,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 665,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 666,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 667,
        columnNumber: 27
      }
    }, "Phobias"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 673,
        columnNumber: 25
      }
    }, "A phobia is a crippling fear of an item, place, scenario, or animal related to an unrealistic notion of danger or hazard. Sometimes phobias can be so severe that a person might organise their lifestyles around fending off the situation or object that causes them anxiety. This can substantially affect the individuals daily functioning and restrict them from carrying out regular activities such as going to the shops, for fear of discovering the object of their phobia."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674,
        columnNumber: 25
      }
    }, "There are two types of phobia \u2013 simple and complex."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 25
      }
    }, "Some examples of simple phobias are:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 676,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 677,
        columnNumber: 27
      }
    }, "Animal \u2013 which include rodents, dogs, spiders, birds etc"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678,
        columnNumber: 27
      }
    }, "Bodily \u2013 including blood, vomit, or injections"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 27
      }
    }, "Environmental \u2013 which include heights, deep water, and germs"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 680,
        columnNumber: 27
      }
    }, "Sexual \u2013 such as performance anxiety or worry of sexually transmitted infections"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681,
        columnNumber: 27
      }
    }, "Situational \u2013 including flying or going to the doctor")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 25
      }
    }, "Some examples of complex phobias are:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 684,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 685,
        columnNumber: 27
      }
    }, "Agoraphobia \u2013 fear of open areas, crowded places, traveling or public transport"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686,
        columnNumber: 27
      }
    }, "Social phobia (social anxiety) \u2013 fear of social situations")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 688,
        columnNumber: 25
      }
    }, "Which cures may help?"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 689,
        columnNumber: 25
      }
    }, "Cognitive Behavioural therapy (CBT)"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 690,
        columnNumber: 25
      }
    }, "Mindfulness based methods"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "q",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 693,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 696,
        columnNumber: 27
      }
    }, "Post Natal Depression"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 701,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 702,
        columnNumber: 25
      }
    }, "More than simply the \u2018baby blues\u2019 that many women experience for some weeks after giving birth, postnatal depression is a serious mental health condition that commonly affects women but also can affect their partners. This type of depression occurs during pregnancy or after birth. Feelings of severe sadness, anxiety, and tiredness can make it difficult for new mothers to complete everyday activities for themselves or for their babies."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703,
        columnNumber: 25
      }
    }, "Some of the usual signs of postnatal depression include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 704,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 705,
        columnNumber: 27
      }
    }, "Persistent feeling of unhappiness or low mood"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 706,
        columnNumber: 27
      }
    }, "Loss of interest with the world around you and no longer taking part in activities"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 707,
        columnNumber: 27
      }
    }, "Lack of energy and feeling tired most of the time"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 708,
        columnNumber: 27
      }
    }, "Feeling that you are unable to look after your child"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 709,
        columnNumber: 27
      }
    }, "Problems concentrating and making choices"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 710,
        columnNumber: 27
      }
    }, "Loss of appetite or increased urge for food"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 711,
        columnNumber: 27
      }
    }, "Feelings of guilt, hopelessness, and guilt"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 712,
        columnNumber: 27
      }
    }, "Difficulty bonding with your infant with a sense of indifference towards the child and no enjoyment in the child\u2019s company."), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713,
        columnNumber: 27
      }
    }, "Frightening thoughts such as wishing to hurt your toddler, these can be very frightening and traumatic, but they are not often acted upon"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714,
        columnNumber: 27
      }
    }, "Thinking about self-harm and suicide")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 716,
        columnNumber: 25
      }
    }, "If you feel that the above applies to you, it is vital to seek help as quickly as possible because the symptoms could have a considerable effect on you and your child. With an appropriate therapy, most women make a full recovery."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 717,
        columnNumber: 25
      }
    }, "Which treatments could help?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 718,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 719,
        columnNumber: 27
      }
    }, "Cognitive behavioural therapy (CBT)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 720,
        columnNumber: 27
      }
    }, "Cognitive analytic therapy (CAT)")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "r",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 724,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 725,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 726,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727,
        columnNumber: 27
      }
    }, "Post Traumatic Stress Disorder"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 732,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 733,
        columnNumber: 25
      }
    }, "Post-traumatic stress disorder is an anxiety ailment that can develop in response to experiencing a severely worrying situation. Some examples of traumatic events that would promote PTSD include natural disasters, terror assaults, violence, abuse, severe neglect, or traffic incidents, however a traumatic event may be any experience wherein you\u2019re in danger, or you witness someone else in danger. People tormented by PTSD frequently relive the triggering event through nightmares and/or flashbacks that could arise at any time. The unpleasantness and severity of their signs and symptoms can make it very hard for sufferers to go about their day-to-day lives. Although symptoms commonly occur right after the event, people who\u2019ve experienced abuse, neglect, or violence, can also experience complex PTSD, in which adolescent trauma may cause PTSD symptoms years later."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734,
        columnNumber: 25
      }
    }, "PTSD symptoms include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 736,
        columnNumber: 27
      }
    }, "Re-experiencing such events as flashbacks, nightmares, repetitive images and bodily sensations (consisting of nausea, ache, sweating, or trembling)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 737,
        columnNumber: 27
      }
    }, "Avoidance and emotional numbing"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 738,
        columnNumber: 27
      }
    }, "Hyper-arousal together with irritability, irritated outbursts, sleeping problems, trouble concentrating")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 740,
        columnNumber: 25
      }
    }, "Sometimes people stricken by PTSD can suffer from other emotional problems which includes anxiety, melancholy, self-harm or engage in substance abuse."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 741,
        columnNumber: 25
      }
    }, "If you feel that the above applies to you, therapy will allow you to overcome your situation and greatly enhance your quality of life."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 742,
        columnNumber: 25
      }
    }, "Which therapies may help?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 743,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 744,
        columnNumber: 27
      }
    }, "Cognitive-behavioural therapy (CBT)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 745,
        columnNumber: 27
      }
    }, "Schema therapy (ST)"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 746,
        columnNumber: 27
      }
    }, "Dialectical behaviour therapy (DBT)")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "s",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 750,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 751,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 752,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753,
        columnNumber: 27
      }
    }, "Psychosexual Conditions"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 758,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 759,
        columnNumber: 25
      }
    }, "Psychosexual issues are sexual troubles that have a physiological foundation, and they are far more common than you might suppose. Although there are many causes, psychosexual issues can come about as a result of stress, anxiety, depression, or due to previous traumatic experiences. Issues can range in intensity and duration; some may be simple and fleeting while other psychosexual issues can be more long-term."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 760,
        columnNumber: 25
      }
    }, "Some examples of psychosexual issues include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 761,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 762,
        columnNumber: 27
      }
    }, "Loss of libido"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 763,
        columnNumber: 27
      }
    }, "Painful intercourse"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 764,
        columnNumber: 27
      }
    }, "Difficulties achieving orgasm"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 765,
        columnNumber: 27
      }
    }, "Arousal problems"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 766,
        columnNumber: 27
      }
    }, "Erectile dysfunction"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 767,
        columnNumber: 27
      }
    }, "Premature ejaculation"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 768,
        columnNumber: 27
      }
    }, "Breakdown in a couple\u2019s sexual relationship")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 770,
        columnNumber: 25
      }
    }, "If you feel that the above applies to you, therapy will allow you to recognize the underlying causes of your problems and triumph over them by putting steps in place to manage such difficulties."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 771,
        columnNumber: 25
      }
    }, "Which therapies would possibly assist?"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 772,
        columnNumber: 25
      }
    }, "A variety of treatment and therapy options are available for those suffering from psychosexual issues, our advice would be to consult one of our medical professionals to discuss the most appropriate course of action."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "t",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 775,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 776,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 777,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 778,
        columnNumber: 27
      }
    }, "Relationship Difficulties"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 783,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 784,
        columnNumber: 25
      }
    }, "Having healthy relationships with others \u2013 be it friends, relatives, colleagues, or significant others \u2013 gives us with so many benefits and is crucial for our mental health and wellbeing. As we\u2019re all our own person with differing views and opinions, tensions in certain relationships can grow over time. However, experiencing frequent or excessive tension/conflict within relationships is very serious, but common, and can have a substantial impact on your wellbeing and quality of life."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 785,
        columnNumber: 25
      }
    }, "If you\u2019re finding it tough to converse with your partner about your issues, are experiencing challenges with your employer or colleagues, or finding it difficult to engage with your family, therapy can be a safe area for you to talk about your issues, get to the root of the difficulties, and develop ways in which to resolve the conflict."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 786,
        columnNumber: 25
      }
    }, "Some signs that you are experiencing difficulties in your relationships are:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 787,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 788,
        columnNumber: 27
      }
    }, "\xB7 Unequal give and take, feeling as though you\u2019re always having to help the opposite individual with no reciprocation, or you\u2019re overly dependent on the other individual."), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 789,
        columnNumber: 27
      }
    }, "\xB7 Feeling as though you\u2019re walking on eggshells, that you cannot mention certain subjects due to the fact that your partner will react negatively and/or disproportionately."), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 790,
        columnNumber: 27
      }
    }, "\xB7 Control problems, where you sense that you always need to do what the opposite individual asks."), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 791,
        columnNumber: 27
      }
    }, "\xB7 Feeling misunderstood or as even though you are not being listened to correctly."), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 792,
        columnNumber: 27
      }
    }, "\xB7 Emotional, verbal, or physical abuse. Do you feel as though you are frequently put down or overlooked, or that arguments result in violence?")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 794,
        columnNumber: 25
      }
    }, "If you feel that any of the above applies to you and your relationships, therapy can help you get to the root of your problems and help you develop effective communication methods."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 795,
        columnNumber: 25
      }
    }, "Which therapies might assist?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 796,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 797,
        columnNumber: 27
      }
    }, "Cognitive Behavioural therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 798,
        columnNumber: 27
      }
    }, "Schema therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 799,
        columnNumber: 27
      }
    }, "Cognitive analytic therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 800,
        columnNumber: 27
      }
    }, "Dynamic interpersonal therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 801,
        columnNumber: 27
      }
    }, "Narrative therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 802,
        columnNumber: 27
      }
    }, "Couples therapy")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "u",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 806,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 807,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 808,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 809,
        columnNumber: 27
      }
    }, "Sleep Disorders"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 814,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 815,
        columnNumber: 25
      }
    }, "We all have problem falling asleep now and again, especially if we are feeling particularly stressed. However, regular and satisfactory sleep is critical, as while we sleep, our bodies physically and mentally restore themselves, permitting us to go about our busy lives. If sleep issues are a regular occurrence, you may be suffering from a sleep disorder, and left untreated, this could have a harmful impact on your daily functioning. One of the most common varieties of sleep disorders is insomnia which is characterized by way of an inability to sleep or sleep well at night."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 816,
        columnNumber: 25
      }
    }, "Some commonplace signs of insomnia include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 818,
        columnNumber: 27
      }
    }, "Difficulty falling asleep at night or going to sleep again after waking during the night"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 819,
        columnNumber: 27
      }
    }, "Waking up frequently for the duration of the night"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 820,
        columnNumber: 27
      }
    }, "You are reliant upon medication to sleep"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 821,
        columnNumber: 27
      }
    }, "Sleepiness and low energy during the day"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 822,
        columnNumber: 27
      }
    }, "Sleep feels unrefreshing and you wake up feeling worn-out"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 823,
        columnNumber: 27
      }
    }, "There also are other forms of sleep disorders including sleep apnoea, restless leg syndrome and narcolepsy.")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 825,
        columnNumber: 25
      }
    }, "If you feel that the above applies to you, therapy can greatly help to enhance your \u2018sleep hygiene\u2019 and your therapist can teach you powerful strategies for managing your sleep."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 826,
        columnNumber: 25
      }
    }, "Which treatment options might assist?"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 827,
        columnNumber: 25
      }
    }, "Cognitive behavioural remedy (CBT)"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "v",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 830,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 831,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 832,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 833,
        columnNumber: 27
      }
    }, "Social Anxiety"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 838,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 839,
        columnNumber: 25
      }
    }, "Social anxiety is a common anxiety disorder characterized by chronic and overwhelming fear of social situations. We can all get slightly anxious during social situations sometimes, but a person stricken by social anxiety will worry more regularly and with greater intensity at the concept of a certain social interactions. Sometimes those worries may be very specific, which may include the fear of falling over in the front of others or being laughed at. These issues can make it very hard for individuals to go about normal day-to-day tasks such as making telephone calls or interacting with cashiers in a shop. In this manner, social anxiety can significantly disrupt daily functioning and have negative consequences."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 840,
        columnNumber: 25
      }
    }, "A number of the common social anxiety signs include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 841,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 842,
        columnNumber: 27
      }
    }, "Fear of everyday activities such as making phone calls or going to the shops"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 843,
        columnNumber: 27
      }
    }, "Low self-worth"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 844,
        columnNumber: 27
      }
    }, "Fear of being criticised"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 845,
        columnNumber: 27
      }
    }, "Avoiding eye contact"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 846,
        columnNumber: 27
      }
    }, "Misuse of drugs or alcohol to aid themselves during social interactions")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 848,
        columnNumber: 25
      }
    }, "If you feel that the above may apply to you, therapy can be extremely helpful in supporting you to come to terms with the origin of your social anxiety and can help you to overcome it."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 849,
        columnNumber: 25
      }
    }, "Which treatments would possibly help?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 850,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 851,
        columnNumber: 27
      }
    }, "Cognitive Behavioural therapy"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 852,
        columnNumber: 27
      }
    }, "Cognitive Analytic therapy")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "w",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 856,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 857,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 858,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 859,
        columnNumber: 27
      }
    }, "Stress"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 864,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 865,
        columnNumber: 25
      }
    }, "Stress is the body\u2019s way of responding to certain situations which may be demanding or that can be threatening, including financial difficulties, issues at work, or relationship troubles. When we experience a threat, our bodies shift into \u2018fight or flight\u2019 mode wherein they release stress hormones to prepare for emergency movement to defend us from the threat. If someone is not able to differentiate between daily stress and life-threatening occasions, this could result in severe and/or common stress issues and a lack of ability to control it effectively can cause further problems and become debilitating. Many health troubles can be exacerbated by stress."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 866,
        columnNumber: 25
      }
    }, "Some of the common symptoms of stress include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 867,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 868,
        columnNumber: 27
      }
    }, "Memory issues"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 869,
        columnNumber: 27
      }
    }, "Inability to pay attention"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 870,
        columnNumber: 27
      }
    }, "Anxious or racing mind"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 871,
        columnNumber: 27
      }
    }, "Constant fear"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 872,
        columnNumber: 27
      }
    }, "Irritability or quick mood"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 873,
        columnNumber: 27
      }
    }, "Feeling overwhelmed"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 874,
        columnNumber: 27
      }
    }, "Moodiness"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875,
        columnNumber: 27
      }
    }, "Aches and pains"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 876,
        columnNumber: 27
      }
    }, "Chest pains"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 877,
        columnNumber: 27
      }
    }, "Procrastination or neglecting responsibilities"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 878,
        columnNumber: 27
      }
    }, "Nervous habits (e.g. nail biting)")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 880,
        columnNumber: 25
      }
    }, "If you feel that you are experiencing intense or frequent stress, therapy can assist you in understanding causes of stress and help you become aware of what elements might be making your stress worse. Your therapist can also teach you powerful techniques to manipulate your stress, including relaxation strategies, in an effort to greatly improve your quality of life."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 881,
        columnNumber: 25
      }
    }, "Which remedies would possibly help?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 882,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 883,
        columnNumber: 27
      }
    }, "Cognitive behavioural therapy")))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
      uuid: "x",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 887,
        columnNumber: 21
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 888,
        columnNumber: 23
      }
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 889,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 890,
        columnNumber: 27
      }
    }, "Work Related Stress"))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 895,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 896,
        columnNumber: 25
      }
    }, "Employment can have many substantial benefits for your mental health because it provides you with a structured routine, an income, and opportunities to succeed. However, on occasion problems at work can be a source of great stress."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 897,
        columnNumber: 25
      }
    }, "Stress is the body\u2019s way of responding to certain situations which may be demanding or that can be threatening. When we experience a threat, our bodies shift into \u2018fight or flight\u2019 mode wherein they release stress hormones to prepare for emergency movement to defend us from the threat. Being under a degree of pressure is normal and occasionally a feeling of stress may be a very good motivator to efficiently finish a piece of work for example. However, tight cut-off dates, lengthy hours, tough colleagues, and endless tasks can inflict severe and/or frequent stress that can be overwhelming. This pressure can affect your productiveness and work performance, harm your physical and mental health, and impair your relationships."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 898,
        columnNumber: 25
      }
    }, "Some of the signs of stress include:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 899,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 900,
        columnNumber: 27
      }
    }, "Memory issues"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 901,
        columnNumber: 27
      }
    }, "Inability to pay attention"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 902,
        columnNumber: 27
      }
    }, "Anxious or racing mind"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 903,
        columnNumber: 27
      }
    }, "Constant worry"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 904,
        columnNumber: 27
      }
    }, "Irritability or short temper"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 905,
        columnNumber: 27
      }
    }, "Feeling overwhelmed"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 906,
        columnNumber: 27
      }
    }, "Moodiness"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 907,
        columnNumber: 27
      }
    }, "Aches and pains"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 908,
        columnNumber: 27
      }
    }, "Chest pains"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 909,
        columnNumber: 27
      }
    }, "Procrastination or neglecting responsibilities"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 910,
        columnNumber: 27
      }
    }, "Nervous habits (e.g. nail biting, pacing)")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 912,
        columnNumber: 25
      }
    }, "If you feel that you are experiencing intense or frequent stress, therapy can assist you in understanding causes of stress and help you become aware of what elements might be making your stress worse. Your therapist can also teach you powerful techniques to manipulate your stress, including relaxation strategies, in an effort to greatly improve your quality of life."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 913,
        columnNumber: 25
      }
    }, "Which treatment options may assist?"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 914,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 915,
        columnNumber: 27
      }
    }, "Cognitive behavioural therapy"))))))), __jsx("div", {
      className: "col-lg-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 922,
        columnNumber: 15
      }
    })))), __jsx(_components_Common_Subscribe__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 928,
        columnNumber: 9
      }
    }));
  }

}

Homepage.contextType = src_socket__WEBPACK_IMPORTED_MODULE_13__["SocketContext"];

const mapStateToProps = state => _objectSpread(_objectSpread({
  ui: _objectSpread({}, state.ui)
}, state.performer.performers), {}, {
  countries: state.settings.countries,
  loggedIn: state.auth.loggedIn,
  categories: state.performer.categories.data,
  settings: state.settings
});

const mapDispatch = {
  searchPerformer: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_5__["searchPerformer"],
  updatePerformerFavourite: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_5__["updatePerformerFavourite"],
  updateCurrentUser: _redux_user_actions__WEBPACK_IMPORTED_MODULE_7__["updateCurrentUser"],
  updateCurrentPerformer: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_5__["updateCurrentPerformer"],
  updateCurrentStudio: _redux_studio_actions__WEBPACK_IMPORTED_MODULE_8__["updateCurrentStudio"],
  loginSuccess: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_6__["loginSuccess"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatch)(Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(Homepage)));

/***/ }),

/***/ "./src/lib/date.ts":
/*!*************************!*\
  !*** ./src/lib/date.ts ***!
  \*************************/
/*! exports provided: formatDate, converDuration, parseAge, getAge, formatDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "converDuration", function() { return converDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAge", function() { return parseAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAge", function() { return getAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDuration", function() { return formatDuration; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function formatDate(date, format = 'DD/MM/YYYY HH:mm:ss') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
}
function converDuration(duration, format = 'HH:mm') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default.a.utc(moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(duration, 'milliseconds').asMilliseconds()).format(format);
}
function parseAge(date, format = 'MMMM DD, YYYY') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
}
function getAge(date) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()().diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('YYYY-MM-DD'), 'years').toString();
}
function formatDuration(s) {
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s - hours * 3600) / 60);
  const seconds = s - hours * 3600 - minutes * 60;
  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

/***/ }),

/***/ "./src/lib/file.ts":
/*!*************************!*\
  !*** ./src/lib/file.ts ***!
  \*************************/
/*! exports provided: beforeAvatarUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeAvatarUpload", function() { return beforeAvatarUpload; });
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/config */ "./src/services/config.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


function beforeAvatarUpload(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  const config = Object(_services_config__WEBPACK_IMPORTED_MODULE_0__["getGlobalConfig"])();
  const isImageAccept = config.NEXT_PUBLIC_IMAGE_ACCPET.split(',').map(item => item.trim()).indexOf(`.${ext}`);

  if (isImageAccept === -1) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`You can only upload ${config.NEXT_PUBLIC_IMAGE_ACCPET} file!`);
    return false;
  }

  const isLt2M = file.size / 1024 / 1024 < (config.NEXT_PUBLIC_MAXIMUM_SIZE_UPLOAD_AVATAR || 2);

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`Image must smaller than ${config.NEXT_PUBLIC_MAXIMUM_SIZE_UPLOAD_AVATAR || 2}MB!`);
    return false;
  }

  return true;
}

/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! exports provided: isHasInternetConnection, createSagas, createAction, createAsyncAction, createAsyncActions, createSelectorsA, handleActions, createReducers, createSelectors, createSelector, createJSSelectors, isUrl, generateUuid, capitalizeFirstLetter, unitPrices, formatDate, converDuration, parseAge, getAge, formatDuration, validateMessages, formItemLayout, tailFormItemLayout, defaultColor, arrayToTree, pathMatchRegexp, queryAncestors, getResponseError, isMobile, getUrlParameter, DAY_OF_WEEK, getDefaultSchedule, getNextShow, getSearchData, getBase64, convertConnectionData, checkUserLogin, getCurrentUser, isPhysicalProduct, chatBoxMessageClassName, formatDataWeight, formatDataHeight, formatPrice, usernamePatternRule, beforeAvatarUpload, DEFAULT_OFFLINE_IMAGE_URL, DEFAULT_PRIVATE_IMAGE_URL, DEFAULT_GROUP_IMAGE_URL, DEFAULT_ONLINE_IMAGE_URL, getPoster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internet */ "./src/lib/internet.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isHasInternetConnection", function() { return _internet__WEBPACK_IMPORTED_MODULE_0__["isHasInternetConnection"]; });

/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux */ "./src/lib/redux.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSagas", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createSagas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAsyncAction", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createAsyncAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAsyncActions", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createAsyncActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorsA", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createSelectorsA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleActions", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["handleActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReducers", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectors", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createJSSelectors", function() { return _redux__WEBPACK_IMPORTED_MODULE_1__["createJSSelectors"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "./src/lib/string.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["isUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateUuid", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["generateUuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["capitalizeFirstLetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unitPrices", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["unitPrices"]; });

/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./src/lib/date.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "converDuration", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["converDuration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAge", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["parseAge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAge", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["getAge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDuration", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["formatDuration"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/lib/message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateMessages", function() { return _message__WEBPACK_IMPORTED_MODULE_4__["validateMessages"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ "./src/lib/layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formItemLayout", function() { return _layout__WEBPACK_IMPORTED_MODULE_5__["formItemLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tailFormItemLayout", function() { return _layout__WEBPACK_IMPORTED_MODULE_5__["tailFormItemLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultColor", function() { return _layout__WEBPACK_IMPORTED_MODULE_5__["defaultColor"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/lib/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayToTree", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["arrayToTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathMatchRegexp", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["pathMatchRegexp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAncestors", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["queryAncestors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResponseError", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getResponseError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["isMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUrlParameter", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getUrlParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAY_OF_WEEK", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["DAY_OF_WEEK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultSchedule", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultSchedule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextShow", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getNextShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchData", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getSearchData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBase64", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getBase64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertConnectionData", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["convertConnectionData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkUserLogin", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["checkUserLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getCurrentUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPhysicalProduct", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["isPhysicalProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chatBoxMessageClassName", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["chatBoxMessageClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDataWeight", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["formatDataWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDataHeight", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["formatDataHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["formatPrice"]; });

/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules */ "./src/lib/rules.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usernamePatternRule", function() { return _rules__WEBPACK_IMPORTED_MODULE_7__["usernamePatternRule"]; });

/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file */ "./src/lib/file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeAvatarUpload", function() { return _file__WEBPACK_IMPORTED_MODULE_8__["beforeAvatarUpload"]; });

/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stream */ "./src/lib/stream.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_OFFLINE_IMAGE_URL", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_OFFLINE_IMAGE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRIVATE_IMAGE_URL", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_PRIVATE_IMAGE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GROUP_IMAGE_URL", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_GROUP_IMAGE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ONLINE_IMAGE_URL", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_ONLINE_IMAGE_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPoster", function() { return _stream__WEBPACK_IMPORTED_MODULE_9__["getPoster"]; });












/***/ }),

/***/ "./src/lib/internet.ts":
/*!*****************************!*\
  !*** ./src/lib/internet.ts ***!
  \*****************************/
/*! exports provided: isHasInternetConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHasInternetConnection", function() { return isHasInternetConnection; });
const INTERNET_CHECK_URL = 'https://google.com';
const isHasInternetConnection = async () => {
  try {
    const res = await fetch(INTERNET_CHECK_URL, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0
      }
    });

    if (res.status === 404 || res.status === 401 || res.status === 403 || res.status === 500 || res.status >= 200 && res.status <= 300) {
      return true;
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(exception);
  }

  return false;
};

/***/ }),

/***/ "./src/lib/layout.ts":
/*!***************************!*\
  !*** ./src/lib/layout.ts ***!
  \***************************/
/*! exports provided: formItemLayout, tailFormItemLayout, defaultColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formItemLayout", function() { return formItemLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tailFormItemLayout", function() { return tailFormItemLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColor", function() { return defaultColor; });
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 0
    }
  }
};
const defaultColor = {
  primaryColor: '#0cb8b6',
  successColor: '#2fb52d',
  whiteColor: '#ffffff'
};

/***/ }),

/***/ "./src/lib/message.ts":
/*!****************************!*\
  !*** ./src/lib/message.ts ***!
  \****************************/
/*! exports provided: validateMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMessages", function() { return validateMessages; });
const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!'
  },
  number: {
    range: 'Must be between min and max'
  }
};

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

/***/ "./src/lib/rules.ts":
/*!**************************!*\
  !*** ./src/lib/rules.ts ***!
  \**************************/
/*! exports provided: usernamePatternRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernamePatternRule", function() { return usernamePatternRule; });
const usernamePatternRule = {
  pattern: new RegExp('^[a-zA-Z0-9]*$'),
  message: 'Dont allow special chars or space'
};

/***/ }),

/***/ "./src/lib/storeHolder.ts":
/*!********************************!*\
  !*** ./src/lib/storeHolder.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let store = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  getStore: () => store,
  setStore: s => {
    store = s;
  }
});

/***/ }),

/***/ "./src/lib/stream.ts":
/*!***************************!*\
  !*** ./src/lib/stream.ts ***!
  \***************************/
/*! exports provided: DEFAULT_OFFLINE_IMAGE_URL, DEFAULT_PRIVATE_IMAGE_URL, DEFAULT_GROUP_IMAGE_URL, DEFAULT_ONLINE_IMAGE_URL, getPoster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_OFFLINE_IMAGE_URL", function() { return DEFAULT_OFFLINE_IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PRIVATE_IMAGE_URL", function() { return DEFAULT_PRIVATE_IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GROUP_IMAGE_URL", function() { return DEFAULT_GROUP_IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ONLINE_IMAGE_URL", function() { return DEFAULT_ONLINE_IMAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoster", function() { return getPoster; });
/* harmony import */ var _storeHolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeHolder */ "./src/lib/storeHolder.ts");

const DEFAULT_OFFLINE_IMAGE_URL = '/offline.png';
const DEFAULT_PRIVATE_IMAGE_URL = '/private.png';
const DEFAULT_GROUP_IMAGE_URL = '/group.png';
const DEFAULT_ONLINE_IMAGE_URL = '';
function getPoster(status) {
  let poster = '';
  const store = _storeHolder__WEBPACK_IMPORTED_MODULE_0__["default"].getStore();
  const {
    settings = {}
  } = store.getState();

  switch (status) {
    case 'private':
      poster = settings.defaultPrivateCallImage || DEFAULT_PRIVATE_IMAGE_URL;
      break;

    case 'offline':
      poster = settings.defaultOfflineModelImage || DEFAULT_OFFLINE_IMAGE_URL;
      break;

    case 'public':
      poster = DEFAULT_ONLINE_IMAGE_URL;
      break;

    case 'group':
      poster = settings.defaultGroupChatImage || DEFAULT_GROUP_IMAGE_URL;
      break;

    default:
      poster = DEFAULT_OFFLINE_IMAGE_URL;
      break;
  }

  return poster;
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

/***/ "./src/redux/auth/actions.ts":
/*!***********************************!*\
  !*** ./src/redux/auth/actions.ts ***!
  \***********************************/
/*! exports provided: login, loginSuccess, loginFail, loginRequesting, performerlogin, performerloginSuccess, performerloginFail, resetLoginData, studioLogin, studioLoginSuccess, studioLoginFail, performerRegister, performerRegisterSuccess, performerRegisterFail, setPerformerRegisterSubmitting, userRegister, userRegisterSuccess, userRegisterFail, setUserRegisterSubmitting, updatePassword, updatePasswordSuccess, updatePasswordFail, setUpdatePasswordSubmitting, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFail", function() { return loginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequesting", function() { return loginRequesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerlogin", function() { return performerlogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerloginSuccess", function() { return performerloginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerloginFail", function() { return performerloginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLoginData", function() { return resetLoginData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioLogin", function() { return studioLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioLoginSuccess", function() { return studioLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioLoginFail", function() { return studioLoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerRegister", function() { return performerRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerRegisterSuccess", function() { return performerRegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerRegisterFail", function() { return performerRegisterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPerformerRegisterSubmitting", function() { return setPerformerRegisterSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRegister", function() { return userRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRegisterSuccess", function() { return userRegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRegisterFail", function() { return userRegisterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserRegisterSubmitting", function() { return setUserRegisterSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePassword", function() { return updatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePasswordSuccess", function() { return updatePasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePasswordFail", function() { return updatePasswordFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdatePasswordSubmitting", function() { return setUpdatePasswordSubmitting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const {
  login,
  loginSuccess,
  loginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('login', 'LOGIN');
const loginRequesting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('LOGIN_REQUESTING');
const {
  performerlogin,
  performerloginSuccess,
  performerloginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('performerlogin', 'PERFORMER_LOGIN');
const resetLoginData = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('resetLoginData');
const {
  studioLogin,
  studioLoginSuccess,
  studioLoginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('studioLogin', 'STUDIO_LOGIN');
const {
  performerRegister,
  performerRegisterSuccess,
  performerRegisterFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('performerRegister', 'PERFORMER_REGISTER');
const setPerformerRegisterSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_PERFORMER_REGISTER_SUBMITTING');
const {
  userRegister,
  userRegisterSuccess,
  userRegisterFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('userRegister', 'USER_REGISTER');
const setUserRegisterSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_USER_REGISTER_SUBMITTING');
const {
  updatePassword,
  updatePasswordSuccess,
  updatePasswordFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updatePassword', 'UPDATE_PASSWORD');
const setUpdatePasswordSubmitting = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_UPDATE_PASSWORD_SUBMITTING');
const logout = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('logout');

/***/ }),

/***/ "./src/redux/performer/actions.ts":
/*!****************************************!*\
  !*** ./src/redux/performer/actions.ts ***!
  \****************************************/
/*! exports provided: getPerformerCategories, getPerformerCategoriesSuccess, getPerformerCategoriesFail, searchPerformer, searchPerformerSuccess, searchPerformerFail, setPerformerSearching, updatePerformerProfile, updatePerformerProfileSuccess, updatePerformerProfileFail, setupdatingPerformerProfile, updatePaymentInfo, updateDirectDeposit, updatePaxum, updateBitpay, updateStreamingStatus, updateDefaultPrice, getPerformerDetails, getPerformerDetailsSuccess, getPerformerDetailsFail, setGettingPerformerDetails, setPerformerDetails, updatePerformerAsset, setFavoritePerformerDetails, getMyProducts, getMyProductsSuccess, getMyProductsFail, setGettingMyProducts, addMyProduct, removeMyProduct, getEarning, getEarningSuccess, getEarningFail, setGettingEarning, getPayoutRequest, getPayoutRequestSuccess, getPayoutRequestFail, setGettingPayoutRequest, removePayoutRequest, getMyVideos, getMyVideosSuccess, getMyVideosFail, setgettingMyVideos, addMyVideos, removeMyVideo, getMyPhotos, getMyPhotosSuccess, getMyPhotosFail, setgettingMyPhotos, addMyPhotos, removeMyPhoto, getMyGalleries, getMyGalleriesSuccess, getMyGalleriesFail, setgettingMyGalleries, addMyGalleries, removeMyGalleries, updateCurrentPerformer, updatePerformerFavourite, updateCurrentPerformerBalance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerCategories", function() { return getPerformerCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerCategoriesSuccess", function() { return getPerformerCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerCategoriesFail", function() { return getPerformerCategoriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPerformer", function() { return searchPerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPerformerSuccess", function() { return searchPerformerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPerformerFail", function() { return searchPerformerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPerformerSearching", function() { return setPerformerSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerProfile", function() { return updatePerformerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerProfileSuccess", function() { return updatePerformerProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerProfileFail", function() { return updatePerformerProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupdatingPerformerProfile", function() { return setupdatingPerformerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePaymentInfo", function() { return updatePaymentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDirectDeposit", function() { return updateDirectDeposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePaxum", function() { return updatePaxum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBitpay", function() { return updateBitpay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStreamingStatus", function() { return updateStreamingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDefaultPrice", function() { return updateDefaultPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerDetails", function() { return getPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerDetailsSuccess", function() { return getPerformerDetailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerDetailsFail", function() { return getPerformerDetailsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingPerformerDetails", function() { return setGettingPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPerformerDetails", function() { return setPerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerAsset", function() { return updatePerformerAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFavoritePerformerDetails", function() { return setFavoritePerformerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyProducts", function() { return getMyProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyProductsSuccess", function() { return getMyProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyProductsFail", function() { return getMyProductsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingMyProducts", function() { return setGettingMyProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMyProduct", function() { return addMyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMyProduct", function() { return removeMyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarning", function() { return getEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarningSuccess", function() { return getEarningSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarningFail", function() { return getEarningFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingEarning", function() { return setGettingEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayoutRequest", function() { return getPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayoutRequestSuccess", function() { return getPayoutRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayoutRequestFail", function() { return getPayoutRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingPayoutRequest", function() { return setGettingPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePayoutRequest", function() { return removePayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyVideos", function() { return getMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyVideosSuccess", function() { return getMyVideosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyVideosFail", function() { return getMyVideosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setgettingMyVideos", function() { return setgettingMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMyVideos", function() { return addMyVideos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMyVideo", function() { return removeMyVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyPhotos", function() { return getMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyPhotosSuccess", function() { return getMyPhotosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyPhotosFail", function() { return getMyPhotosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setgettingMyPhotos", function() { return setgettingMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMyPhotos", function() { return addMyPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMyPhoto", function() { return removeMyPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyGalleries", function() { return getMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyGalleriesSuccess", function() { return getMyGalleriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyGalleriesFail", function() { return getMyGalleriesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setgettingMyGalleries", function() { return setgettingMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMyGalleries", function() { return addMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMyGalleries", function() { return removeMyGalleries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentPerformer", function() { return updateCurrentPerformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerformerFavourite", function() { return updatePerformerFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentPerformerBalance", function() { return updateCurrentPerformerBalance; });
/* harmony import */ var src_lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/redux */ "./src/lib/redux.ts");

const {
  getPerformerCategories,
  getPerformerCategoriesSuccess,
  getPerformerCategoriesFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPerformerCategories', 'GET_PERFORMER_CATEGORIES');
const {
  searchPerformer,
  searchPerformerSuccess,
  searchPerformerFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('searchPerformer', 'SEARCH_PERFORMER');
const setPerformerSearching = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_PERFORMER_SEARCHING');
const {
  updatePerformerProfile,
  updatePerformerProfileSuccess,
  updatePerformerProfileFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updatePerformerProfile', 'UPDATE_PERFORMER_PROFILE');
const setupdatingPerformerProfile = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updatingPerformerProfile');
const updatePaymentInfo = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PAYMENT_INFO');
const updateDirectDeposit = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_DIRECT_DEPOSIT');
const updatePaxum = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PAXUM');
const updateBitpay = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_BITPAY');
const updateStreamingStatus = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STREAMING_STATUS');
const updateDefaultPrice = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_DEFAULT_PRICE');
const {
  getPerformerDetails,
  getPerformerDetailsSuccess,
  getPerformerDetailsFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPerformerDetails', 'GET_PERFORMER_DETAILS');
const setGettingPerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setGettingPerformerDetails');
const setPerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_PERFORMER_DETAILS');
const updatePerformerAsset = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PERFORMER_ASSET');
const setFavoritePerformerDetails = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_FAVORITE_PERFORMER_DETAILS');
const {
  getMyProducts,
  getMyProductsSuccess,
  getMyProductsFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMyProducts', 'GET_MY_PRODUCT');
const setGettingMyProducts = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setGettingMyProducts');
const addMyProduct = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addMyProduct');
const removeMyProduct = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeMyProduct');
const {
  getEarning,
  getEarningSuccess,
  getEarningFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getEarning', 'GET_EARNING');
const setGettingEarning = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_EARNIG');
const {
  getPayoutRequest,
  getPayoutRequestSuccess,
  getPayoutRequestFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPayoutRequest', 'GET_PAYOUT_REQUEST');
const setGettingPayoutRequest = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_PAYOUT_REQUEST');
const removePayoutRequest = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('REMOVE_PAYOUT_REQUEST');
const {
  getMyVideos,
  getMyVideosSuccess,
  getMyVideosFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMyVideos', 'GET_MY_VIDEO');
const setgettingMyVideos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setgettingMyVideos');
const addMyVideos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addMyVideos');
const removeMyVideo = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeMyVideo');
const {
  getMyPhotos,
  getMyPhotosSuccess,
  getMyPhotosFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMyPhotos', 'GET_MY_PHOTO');
const setgettingMyPhotos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setgettingMyPhotos');
const addMyPhotos = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addMyPhotos');
const removeMyPhoto = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeMyPhoto');
const {
  getMyGalleries,
  getMyGalleriesSuccess,
  getMyGalleriesFail
} = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMyGalleries', 'GET_MY_GALLERIES');
const setgettingMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setgettingMyGalleries');
const addMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addMyGalleries');
const removeMyGalleries = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('removeMyGalleries');
const updateCurrentPerformer = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentPerformer');
const updatePerformerFavourite = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_PERFORMER_FAVOURITE');
const updateCurrentPerformerBalance = Object(src_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_CURRENT_PERFORMER_BALANCE');

/***/ }),

/***/ "./src/redux/studio/actions.ts":
/*!*************************************!*\
  !*** ./src/redux/studio/actions.ts ***!
  \*************************************/
/*! exports provided: updateCurrentStudio, updateStudio, updateStudioSuccess, updateStudioFail, setUpdatingStudio, updateStudioPaymentInfo, updateStudioDirectDeposit, updateStudioPaxum, updateStudioBitpay, getStudioEarning, getStudioEarningSuccess, getStudioEarningFail, setGettingStudioEarning, getStudioPayoutRequest, getStudioPayoutRequestSuccess, getStudioPayoutRequestFail, setGettingStudioPayoutRequest, removeStudioPayoutRequest, getPerformerRequest, getPerformerRequestSuccess, getPerformerRequestFail, setGettingPerformerRequest, getMembers, getMembersSuccess, getMembersFail, getMembersSearching, updateMemberStatus, getMembersCommissions, getMembersCommissionsSuccess, getMembersCommissionsFail, getMembersCommissionsSearching, updateMemberCommision, getStudioStats, getStudioStatsSuccess, getStudioStatsFail, updateTotalPerformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentStudio", function() { return updateCurrentStudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudio", function() { return updateStudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioSuccess", function() { return updateStudioSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioFail", function() { return updateStudioFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpdatingStudio", function() { return setUpdatingStudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioPaymentInfo", function() { return updateStudioPaymentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioDirectDeposit", function() { return updateStudioDirectDeposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioPaxum", function() { return updateStudioPaxum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStudioBitpay", function() { return updateStudioBitpay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioEarning", function() { return getStudioEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioEarningSuccess", function() { return getStudioEarningSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioEarningFail", function() { return getStudioEarningFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingStudioEarning", function() { return setGettingStudioEarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioPayoutRequest", function() { return getStudioPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioPayoutRequestSuccess", function() { return getStudioPayoutRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioPayoutRequestFail", function() { return getStudioPayoutRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingStudioPayoutRequest", function() { return setGettingStudioPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStudioPayoutRequest", function() { return removeStudioPayoutRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerRequest", function() { return getPerformerRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerRequestSuccess", function() { return getPerformerRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerformerRequestFail", function() { return getPerformerRequestFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGettingPerformerRequest", function() { return setGettingPerformerRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembers", function() { return getMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersSuccess", function() { return getMembersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersFail", function() { return getMembersFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersSearching", function() { return getMembersSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMemberStatus", function() { return updateMemberStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersCommissions", function() { return getMembersCommissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersCommissionsSuccess", function() { return getMembersCommissionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersCommissionsFail", function() { return getMembersCommissionsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembersCommissionsSearching", function() { return getMembersCommissionsSearching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMemberCommision", function() { return updateMemberCommision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioStats", function() { return getStudioStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioStatsSuccess", function() { return getStudioStatsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudioStatsFail", function() { return getStudioStatsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTotalPerformer", function() { return updateTotalPerformer; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateCurrentStudio = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateCurrentStudio');
const {
  updateStudio,
  updateStudioSuccess,
  updateStudioFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('updateStudio', 'UPDATE_STUDIO');
const setUpdatingStudio = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updatingStudio');
const updateStudioPaymentInfo = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STUDIO_PAYMENT_INFO');
const updateStudioDirectDeposit = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STUDIO_DIRECT_DEPOSIT');
const updateStudioPaxum = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STUDIO_PAXUM');
const updateStudioBitpay = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_STUDIO_BITPAY');
const {
  getStudioEarning,
  getStudioEarningSuccess,
  getStudioEarningFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getStudioEarning', 'GET_STUDIO_EARNING');
const setGettingStudioEarning = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_STUDIO_EARNIG');
const {
  getStudioPayoutRequest,
  getStudioPayoutRequestSuccess,
  getStudioPayoutRequestFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getStudioPayoutRequest', 'GET_STUDIO_PAYOUT_REQUEST');
const setGettingStudioPayoutRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_STUDIO_PAYOUT_REQUEST');
const removeStudioPayoutRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('REMOVE_STUDIO_PAYOUT_REQUEST');
const {
  getPerformerRequest,
  getPerformerRequestSuccess,
  getPerformerRequestFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getPerformerRequest', 'GET_PERFORMER_REQUEST');
const setGettingPerformerRequest = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('SET_GETTING_PERFORMER_REQUEST');
const {
  getMembers,
  getMembersSuccess,
  getMembersFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMembers', 'GET_MEMBERS');
const getMembersSearching = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_MEMBER_SEACHING');
const updateMemberStatus = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_MEMBER_STATUS');
const {
  getMembersCommissions,
  getMembersCommissionsSuccess,
  getMembersCommissionsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getMembersCommissions', 'GET_MEMBERS_COMMSSIONS');
const getMembersCommissionsSearching = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('GET_MEMBER_COMMSSIO_SEACHING');
const updateMemberCommision = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_MEMBER_COMMISSION');
const {
  getStudioStats,
  getStudioStatsSuccess,
  getStudioStatsFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('getStudioStats', 'GET_STUDIO_STATS');
const updateTotalPerformer = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('UPDATE_TOTAL_PERFORMER');

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

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService, authService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return authService; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class AuthService extends _api_request__WEBPACK_IMPORTED_MODULE_1__["APIRequest"] {
  login(data) {
    return this.post('/auth/users/login', data);
  }

  setAuthHeader(token, role) {
    // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"], token, {
      expires: 365
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__["ROLE"], role, {
      expires: 365
    });
    this.setAuthHeaderToken(token);
  }

  performerLogin(data) {
    return this.post('/auth/performers/login', data);
  }

  studioLogin(data) {
    return this.post('/auth/studio/login', data);
  }

  setToken(token) {
    // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"], token, {
      expires: 365
    });
    this.setAuthHeaderToken(token);
  }

  getToken() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]);
    return token || null;
  }

  getRole() {
    const role = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_1__["ROLE"]);
    return role || null;
  }

  removeToken() {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(_api_request__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]);
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(_api_request__WEBPACK_IMPORTED_MODULE_1__["ROLE"]);
  }

  removeRemember() {
     false && false;
  }

  updatePassword(body) {
    return this.put('/auth/users/me/password', body);
  }

  performersRegister(data) {
    return this.register('/auth/performers/register', data);
  }

  userRegister(data) {
    return this.post('/auth/users/register', data);
  }

  studioRegister(data) {
    return this.register('/auth/studio/register', data);
  }

  forgotPassword(email, type) {
    const data = {
      email,
      type
    };
    return this.post('/auth/users/forgot', data);
  }

  resendVerificationEmail(data) {
    return this.post('/verification/resend-verification-email', data);
  }

}
const authService = new AuthService();

/***/ }),

/***/ "./src/services/banner.service.ts":
/*!****************************************!*\
  !*** ./src/services/banner.service.ts ***!
  \****************************************/
/*! exports provided: BannerService, bannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bannerService", function() { return bannerService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class BannerService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/banners/search', query));
  }

}
const bannerService = new BannerService();

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

/***/ "./src/services/earning.service.ts":
/*!*****************************************!*\
  !*** ./src/services/earning.service.ts ***!
  \*****************************************/
/*! exports provided: earningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "earningService", function() { return earningService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class EarningService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params, role = 'performer') {
    return this.get(this.buildUrl(`/earning/${role}/search`, params));
  }

  stats(params, role = 'performer') {
    return this.get(this.buildUrl(`/earning/${role}/stats`, params));
  }

}

const earningService = new EarningService();

/***/ }),

/***/ "./src/services/favourite.service.ts":
/*!*******************************************!*\
  !*** ./src/services/favourite.service.ts ***!
  \*******************************************/
/*! exports provided: favouriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favouriteService", function() { return favouriteService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class FavouriteService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  like(id) {
    return this.post(`/favourite/${id}/like`);
  }

  unlike(id) {
    return this.post(`/favourite/${id}/unlike`);
  }

  favorite(id, isFavorited) {
    return this.post(`/favourite/${id}/${isFavorited ? 'unlike' : 'like'}`);
  }

  search(query) {
    return this.get(this.buildUrl('/favourite', query));
  }

}

const favouriteService = new FavouriteService();

/***/ }),

/***/ "./src/services/gallery.service.ts":
/*!*****************************************!*\
  !*** ./src/services/gallery.service.ts ***!
  \*****************************************/
/*! exports provided: GalleryService, galleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galleryService", function() { return galleryService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class GalleryService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params, isPerformer = true) {
    return this.get(this.buildUrl(isPerformer ? '/performer/performer-assets/galleries/search' : '/user/performer-assets/galleries/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/galleries', params));
  }

  create(data) {
    return this.post('/performer/performer-assets/galleries', data);
  }

  update(id, data) {
    return this.put(`/performer/performer-assets/galleries/${id}`, data);
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/galleries/${id}/view`, headers);
  }

  publicdetails(id, headers) {
    return this.get(`/user/performer-assets/galleries/${id}/view`, headers);
  }

  remove(id) {
    return this.del(`/performer/performer-assets/galleries/${id}`);
  }

}
const galleryService = new GalleryService();

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: AuthService, authService, UserService, userService, PostService, postService, PerformerCategoriesService, performerCategories, PerformerService, GENNDER_PERFORMER, performerService, VideoService, videoService, ProductService, productService, SettingService, settingService, PhotoService, photoService, GalleryService, galleryService, favouriteService, TokenPackageService, tokenPackageService, TransactionService, transactionService, streamService, MessageService, messageService, PurchaseItemService, purchaseItemService, OrderService, orderService, earningService, payoutRequestService, RefundRequestService, refundRequestService, UtilsService, utilsService, StudioService, studioService, BannerService, bannerService, paymentInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["authService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["userService"]; });

/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.service */ "./src/services/post.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postService", function() { return _post_service__WEBPACK_IMPORTED_MODULE_2__["postService"]; });

/* harmony import */ var _perfomer_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfomer-categories.service */ "./src/services/perfomer-categories.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerformerCategoriesService", function() { return _perfomer_categories_service__WEBPACK_IMPORTED_MODULE_3__["PerformerCategoriesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "performerCategories", function() { return _perfomer_categories_service__WEBPACK_IMPORTED_MODULE_3__["performerCategories"]; });

/* harmony import */ var _perfomer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perfomer.service */ "./src/services/perfomer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerformerService", function() { return _perfomer_service__WEBPACK_IMPORTED_MODULE_4__["PerformerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GENNDER_PERFORMER", function() { return _perfomer_service__WEBPACK_IMPORTED_MODULE_4__["GENNDER_PERFORMER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "performerService", function() { return _perfomer_service__WEBPACK_IMPORTED_MODULE_4__["performerService"]; });

/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video.service */ "./src/services/video.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return _video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "videoService", function() { return _video_service__WEBPACK_IMPORTED_MODULE_5__["videoService"]; });

/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.service */ "./src/services/product.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_6__["productService"]; });

/* harmony import */ var _setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setting.service */ "./src/services/setting.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return _setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settingService", function() { return _setting_service__WEBPACK_IMPORTED_MODULE_7__["settingService"]; });

/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photo.service */ "./src/services/photo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return _photo_service__WEBPACK_IMPORTED_MODULE_8__["PhotoService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "photoService", function() { return _photo_service__WEBPACK_IMPORTED_MODULE_8__["photoService"]; });

/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery.service */ "./src/services/gallery.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return _gallery_service__WEBPACK_IMPORTED_MODULE_9__["GalleryService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "galleryService", function() { return _gallery_service__WEBPACK_IMPORTED_MODULE_9__["galleryService"]; });

/* harmony import */ var _favourite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./favourite.service */ "./src/services/favourite.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "favouriteService", function() { return _favourite_service__WEBPACK_IMPORTED_MODULE_10__["favouriteService"]; });

/* harmony import */ var _token_package_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./token-package.service */ "./src/services/token-package.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenPackageService", function() { return _token_package_service__WEBPACK_IMPORTED_MODULE_11__["TokenPackageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenPackageService", function() { return _token_package_service__WEBPACK_IMPORTED_MODULE_11__["tokenPackageService"]; });

/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transaction.service */ "./src/services/transaction.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return _transaction_service__WEBPACK_IMPORTED_MODULE_12__["TransactionService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transactionService", function() { return _transaction_service__WEBPACK_IMPORTED_MODULE_12__["transactionService"]; });

/* harmony import */ var _stream_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stream.service */ "./src/services/stream.service.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "streamService", function() { return _stream_service__WEBPACK_IMPORTED_MODULE_13__["streamService"]; });

/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./message.service */ "./src/services/message.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return _message_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "messageService", function() { return _message_service__WEBPACK_IMPORTED_MODULE_14__["messageService"]; });

/* harmony import */ var _purchase_item_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./purchase-item.service */ "./src/services/purchase-item.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PurchaseItemService", function() { return _purchase_item_service__WEBPACK_IMPORTED_MODULE_15__["PurchaseItemService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "purchaseItemService", function() { return _purchase_item_service__WEBPACK_IMPORTED_MODULE_15__["purchaseItemService"]; });

/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order.service */ "./src/services/order.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return _order_service__WEBPACK_IMPORTED_MODULE_16__["OrderService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderService", function() { return _order_service__WEBPACK_IMPORTED_MODULE_16__["orderService"]; });

/* harmony import */ var _earning_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./earning.service */ "./src/services/earning.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "earningService", function() { return _earning_service__WEBPACK_IMPORTED_MODULE_17__["earningService"]; });

/* harmony import */ var _payout_request__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payout-request */ "./src/services/payout-request.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "payoutRequestService", function() { return _payout_request__WEBPACK_IMPORTED_MODULE_18__["payoutRequestService"]; });

/* harmony import */ var _refund_request_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./refund-request.service */ "./src/services/refund-request.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefundRequestService", function() { return _refund_request_service__WEBPACK_IMPORTED_MODULE_19__["RefundRequestService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refundRequestService", function() { return _refund_request_service__WEBPACK_IMPORTED_MODULE_19__["refundRequestService"]; });

/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils.service */ "./src/services/utils.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_20__["UtilsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utilsService", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_20__["utilsService"]; });

/* harmony import */ var _studio_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./studio.service */ "./src/services/studio.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudioService", function() { return _studio_service__WEBPACK_IMPORTED_MODULE_21__["StudioService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studioService", function() { return _studio_service__WEBPACK_IMPORTED_MODULE_21__["studioService"]; });

/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./banner.service */ "./src/services/banner.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return _banner_service__WEBPACK_IMPORTED_MODULE_22__["BannerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bannerService", function() { return _banner_service__WEBPACK_IMPORTED_MODULE_22__["bannerService"]; });

/* harmony import */ var _payment_information_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./payment-information.service */ "./src/services/payment-information.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paymentInformationService", function() { return _payment_information_service__WEBPACK_IMPORTED_MODULE_23__["paymentInformationService"]; });

/* empty/unused harmony star reexport */

























/***/ }),

/***/ "./src/services/message.service.ts":
/*!*****************************************!*\
  !*** ./src/services/message.service.ts ***!
  \*****************************************/
/*! exports provided: MessageService, messageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageService", function() { return messageService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");


class MessageService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  getConversations(query) {
    return this.get(this.buildUrl('/conversations', query));
  }

  searchConversations(query) {
    return this.get(this.buildUrl('/conversations/search', query));
  }

  createConversation(data) {
    return this.post('/conversations', data);
  }

  getConversationDetail(id) {
    return this.get(`/conversations/${id}`);
  }

  getConversationByStreamId(streamId) {
    return this.get(`/conversations/stream/${streamId}`);
  }

  getMessages(conversationId, query) {
    return this.get(this.buildUrl(`/messages/conversations/${conversationId}`, query));
  }

  getPublicMessages(conversationId, query) {
    return this.get(this.buildUrl(`/messages/conversations/public/${conversationId}`, query));
  }

  sendMessage(conversationId, data) {
    return this.post(`/messages/conversations/${conversationId}`, data);
  }

  sendStreamMessage(conversationId, data) {
    return this.post(`/messages/stream/conversations/${conversationId}`, data);
  }

  sendPublicStreamMessage(conversationId, data) {
    return this.post(`/messages/stream/public/conversations/${conversationId}`, data);
  }

  findPublicConversationPerformer(performerId) {
    return this.get(`/conversations/stream/public/${performerId}`);
  }

  countTotalNotRead() {
    return this.get('/messages/counting-not-read-messages');
  }

  readAllInConversation(conversationId, recipientId) {
    return this.post('/messages/read-all', {
      conversationId,
      recipientId
    });
  }

  getMessageUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_1__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/messages/private/file`;
  }

  deleteMessage(id) {
    return this.del(`/messages/${id}`);
  }

  deleteAllMessageInConversation(conversationId) {
    return this.del(`/messages/${conversationId}/remove-all-message`);
  }

}
const messageService = new MessageService();

/***/ }),

/***/ "./src/services/order.service.ts":
/*!***************************************!*\
  !*** ./src/services/order.service.ts ***!
  \***************************************/
/*! exports provided: OrderService, orderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderService", function() { return orderService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
// import { IGalleryCreate } from 'src/interfaces';

class OrderService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(payload) {
    return this.get(this.buildUrl('/orders/search', payload));
  }

  details(id) {
    return this.get(`/orders/details/${id}`);
  }

  update(id, data) {
    return this.put(`/orders/${id}/update`, data);
  }

  userSearch(query) {
    return this.get(this.buildUrl('/orders/user/search', query));
  }

  userFindDetails(id) {
    return this.get(`/orders/user/details/${id}`);
  }

}
const orderService = new OrderService();

/***/ }),

/***/ "./src/services/payment-information.service.ts":
/*!*****************************************************!*\
  !*** ./src/services/payment-information.service.ts ***!
  \*****************************************************/
/*! exports provided: paymentInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentInformationService", function() { return paymentInformationService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class PaymentInformationService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  create(data) {
    return this.post('/payment-information', data);
  }

  findOne(data) {
    return this.get(this.buildUrl('/payment-information', data));
  }

}

const paymentInformationService = new PaymentInformationService();

/***/ }),

/***/ "./src/services/payout-request.ts":
/*!****************************************!*\
  !*** ./src/services/payout-request.ts ***!
  \****************************************/
/*! exports provided: payoutRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payoutRequestService", function() { return payoutRequestService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");


class PayoutRequestService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  calculate(params, role) {
    return this.get(this.buildUrl(`/earning/${role || 'performer'}/payout`, params));
  }

  search(query) {
    return this.get(this.buildUrl('/payout-requests/performer/search', query));
  }

  studioSearch(query) {
    return this.get(this.buildUrl('/payout-requests/studio/search', query));
  }

  create(body, role = 'performer') {
    return this.post(`/payout-requests/${role}`, body);
  }

  update(id, body, role = 'performer') {
    return this.put(`/payout-requests/${role}/${id}`, body);
  }

  detail(id, headers, role = 'performer') {
    return this.get(`/payout-requests/${role}/${id}/view`, headers);
  }

}

const payoutRequestService = new PayoutRequestService();

/***/ }),

/***/ "./src/services/perfomer-categories.service.ts":
/*!*****************************************************!*\
  !*** ./src/services/perfomer-categories.service.ts ***!
  \*****************************************************/
/*! exports provided: PerformerCategoriesService, performerCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformerCategoriesService", function() { return PerformerCategoriesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerCategories", function() { return performerCategories; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class PerformerCategoriesService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  getList(query) {
    return this.get(this.buildUrl('/performer-categories', query));
  }

  details(id) {
    return this.get(`/performer-categories/${id}/view`);
  }

}
const performerCategories = new PerformerCategoriesService();

/***/ }),

/***/ "./src/services/perfomer.service.ts":
/*!******************************************!*\
  !*** ./src/services/perfomer.service.ts ***!
  \******************************************/
/*! exports provided: PerformerService, GENNDER_PERFORMER, performerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformerService", function() { return PerformerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENNDER_PERFORMER", function() { return GENNDER_PERFORMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performerService", function() { return performerService; });
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");





class PerformerService extends _api_request__WEBPACK_IMPORTED_MODULE_3__["APIRequest"] {
  me(headers) {
    return this.get('/performers/me', headers);
  }

  updateMe(payload) {
    return this.put('/performers', payload);
  }

  search(query) {
    return this.get(this.buildUrl('/performers/search', query));
  }

  details(username, headers = {}) {
    return this.get(`/performers/${username}/view`, headers);
  }

  getAvatarUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/avatar/upload`;
  }

  getDocumentsUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/documents/upload`;
  }

  getReleaseFormUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/performers/release-form/upload`;
  }

  myProduct(query) {
    return this.get(this.buildUrl('/performer/performer-assets/products/search', query));
  }

  createProduct(url, data, options = {
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

      if (data.image) {
        const image = data.image.file.originFileObj;
        formData.append('image', image, image.name);
      }

      if (data.digitalFile) {
        const digitalFile = data.digitalFile.file.originFileObj;
        formData.append('digitalFile', digitalFile, digitalFile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['image', 'digitalFile'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_0__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  updateProduct(url, data, options = {
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

      if (data.image && data.image.file) {
        const image = data.image.file.originFileObj;
        formData.append('image', image, image.name);
      }

      if (data.digitalFile && data.digitalFile.file) {
        const digitalFile = data.digitalFile.file.originFileObj;
        formData.append('digitalFile', digitalFile, digitalFile.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['image', 'digitalFile'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_0__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  removeProduct(id) {
    return this.del(`/performer/performer-assets/products/${id}`);
  }

  getCommission() {
    return this.get('/settings/performer/commission');
  }

  updatePaymentInfo(payload) {
    return this.post('/performers/bank-transfer/update', payload);
  }

  updateDirectDepost(payload) {
    return this.post('/performers/direct-deposit/update', payload);
  }

  updatePaxum(payload) {
    return this.post('/performers/paxum/update', payload);
  }

  updateBitpay(payload) {
    return this.post('/performers/bitpay/update', payload);
  }

  updateStreamingStatus(payload) {
    return this.post('/performers/streaming-status/update', payload);
  }

  geoBlock(payload) {
    return this.post('/performers/blocking/update', payload);
  }

  getBlockedList() {
    return this.get(this.buildUrl('/performers/blocking'));
  }

  increaseView(performerId) {
    return this.post(`/performers/${performerId}/inc-view`);
  }

  updateDefaultPrice(payload) {
    return this.post('/performers/default-price/update', payload);
  }

  updateBroadcastSetting(payload) {
    return this.post('/performers/broadcast-setting/update', payload);
  }

  suspendAccount(password) {
    return this.post('/performers/suspend-account', {
      password
    });
  }

  checkBlock(performerId) {
    return this.get(`/performers/${performerId}/check-blocking`);
  }

}
const GENNDER_PERFORMER = ['female', 'transgender', 'male'];
const performerService = new PerformerService();

/***/ }),

/***/ "./src/services/photo.service.ts":
/*!***************************************!*\
  !*** ./src/services/photo.service.ts ***!
  \***************************************/
/*! exports provided: PhotoService, photoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photoService", function() { return photoService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");






class PhotoService extends src_services_api_request__WEBPACK_IMPORTED_MODULE_3__["APIRequest"] {
  search(params) {
    return this.get(this.buildUrl('/performer/performer-assets/photos/search', params));
  }

  searchByGallery(galleryId, params, headers) {
    return this.get(this.buildUrl(`/user/performer-assets/photos/${galleryId}/search`, params), headers);
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/photos/${id}/view`, headers);
  }

  myPhotos(query) {
    return this.get(this.buildUrl('/performer/performer-assets/photos/search', query));
  }

  remove(id) {
    return this.del(`/performer/performer-assets/photos/${id}`);
  }

  create(url, data, options = {
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

      if (data.photo) {
        const photo = data.photo.file.originFileObj;
        formData.append('photo', photo, photo.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(data, ['photo'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_1__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  update(url, data, options = {
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

      if (data.photo && data.photo.file) {
        const photo = data.photo.file.originFileObj;
        formData.append('photo', photo, photo.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(data, ['photo'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_1__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  uploadImages(file, payload, onProgress) {
    return this.upload('/performer/performer-assets/photos/upload', [{
      fieldname: 'photo',
      file
    }], {
      onProgress,
      customData: payload
    });
  }

}
const photoService = new PhotoService();

/***/ }),

/***/ "./src/services/post.service.ts":
/*!**************************************!*\
  !*** ./src/services/post.service.ts ***!
  \**************************************/
/*! exports provided: PostService, postService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postService", function() { return postService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class PostService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/posts/search', query));
  }

  findById(id) {
    return this.get(`/posts/${id}`);
  }

  createContactCotent(data) {
    return this.post('/contact', _objectSpread({}, data));
  }

}
const postService = new PostService();

/***/ }),

/***/ "./src/services/product.service.ts":
/*!*****************************************!*\
  !*** ./src/services/product.service.ts ***!
  \*****************************************/
/*! exports provided: ProductService, productService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productService", function() { return productService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class ProductService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  details(id, headers) {
    return this.get(`/performer/performer-assets/products/${id}/view`, headers);
  }

  search(params) {
    return this.get(this.buildUrl('/user/performer-assets/products/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/products', params));
  }

  getDownloadLink(id) {
    return this.get(`/user/performer-assets/products/${id}/download-link`);
  }

}
const productService = new ProductService();

/***/ }),

/***/ "./src/services/purchase-item.service.ts":
/*!***********************************************!*\
  !*** ./src/services/purchase-item.service.ts ***!
  \***********************************************/
/*! exports provided: PurchaseItemService, purchaseItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseItemService", function() { return PurchaseItemService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchaseItemService", function() { return purchaseItemService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class PurchaseItemService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(query) {
    return this.get(this.buildUrl('/purchased-items/user/search', query));
  }

  purchaseItem(id, type, data) {
    return this.post(`/purchase-items/${type}/${id}`, data);
  }

  purchaseProduct(id) {
    return this.post(`/purchase-items/product/${id}`);
  }

  purchaseVideo(id) {
    return this.post(`/purchase-items/video/${id}`);
  }

}
const purchaseItemService = new PurchaseItemService();

/***/ }),

/***/ "./src/services/refund-request.service.ts":
/*!************************************************!*\
  !*** ./src/services/refund-request.service.ts ***!
  \************************************************/
/*! exports provided: RefundRequestService, refundRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundRequestService", function() { return RefundRequestService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refundRequestService", function() { return refundRequestService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class RefundRequestService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  create(data) {
    return this.post('/refund-requests', data);
  }

  search(params) {
    return this.get(this.buildUrl('/refund-requests/search', params));
  }

}
const refundRequestService = new RefundRequestService();

/***/ }),

/***/ "./src/services/setting.service.ts":
/*!*****************************************!*\
  !*** ./src/services/setting.service.ts ***!
  \*****************************************/
/*! exports provided: SettingService, settingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingService", function() { return settingService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class SettingService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  all(group = '') {
    return this.get(this.buildUrl('/settings/public', {
      group
    }));
  }

  getCountries() {
    return this.get('/countries/list');
  }

  getTimezones() {
    return this.get('/timezones/list');
  }

}
const settingService = new SettingService();

/***/ }),

/***/ "./src/services/stream.service.tsx":
/*!*****************************************!*\
  !*** ./src/services/stream.service.tsx ***!
  \*****************************************/
/*! exports provided: streamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "streamService", function() { return streamService; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");





class StreamService extends _api_request__WEBPACK_IMPORTED_MODULE_3__["APIRequest"] {
  getSessionId(id, type) {
    return this.get(`/streaming/session/${id}/${type}`);
  }

  goLive() {
    return this.post('/streaming/live');
  }

  joinPublicChat(performerId) {
    return this.post(`/streaming/join/${performerId}`);
  }

  requestPrivateChat(performerId) {
    return this.post(`/streaming/private-chat/${performerId}`);
  }

  acceptPrivateChat(id) {
    return this.get(`/streaming/private-chat/${id}`);
  }

  startGroupChat() {
    return this.post('/streaming/group-chat');
  }

  joinGroupChat(id) {
    return this.get(`/streaming/group-chat/${id}`);
  }

  generateOneTimeToken(data) {
    return this.post('/streaming/token', data);
  }

  async getPublishToken(options, expireDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'd').toDate().getTime()) {
    try {
      const {
        settings,
        streamId
      } = options;
      const {
        secureOption
      } = settings;

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'publish',
          expireDate
        });
        return resp.data.tokenId;
      }

      return null;
    } catch (err) {
      const error = await Promise.resolve(err);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_2__["getResponseError"])(error));
      return null;
    }
  }

  async getSubscriberToken(options, expireDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'd').toDate().getTime()) {
    try {
      const {
        settings,
        streamId
      } = options;
      const {
        secureOption
      } = settings;

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'play',
          expireDate
        });
        return resp.data.tokenId;
      }

      return null;
    } catch (err) {
      const error = await Promise.resolve(err);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_2__["getResponseError"])(error));
      return null;
    }
  }

  async getLiveStreamOrVodURL(options, expireDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'd').toDate().getTime(), _player = 'hls') {
    // http://[IP_Address]/<Application_Name>/streams/streamID.mp4?token=tokenId
    // http://[IP_Address]/<Application_Name>/streams/streamID.m3u8?token=tokenId
    // http://[IP_Address]/<Application_Name>/play.html?name=streamID&playOrder=hls&token=tokenId
    try {
      // const src = `https://${viewerURL}:5443/${appName}/streams/${streamId}.m3u8${oneTimeToken ? `?token=${oneTimeToken}` : ''}`;
      // eslint-disable-next-line no-shadow
      const {
        appName,
        settings,
        streamId
      } = options;
      const {
        secureOption,
        viewerURL
      } = settings;
      const extension = _player === 'hls' ? 'm3u8' : 'mp4';

      if (!viewerURL || !appName) {
        return '';
      }

      let oneTimeToken = '';

      if (secureOption) {
        const resp = await this.generateOneTimeToken({
          id: streamId,
          type: 'play',
          expireDate
        });
        oneTimeToken = resp.data.tokenId;
      }

      const {
        protocol
      } = window.location;
      return `${protocol}//${viewerURL}/${appName}/streams/${streamId}.${extension}${oneTimeToken ? `?token=${oneTimeToken}` : ''}`;
    } catch (err) {
      const error = await Promise.resolve(err);
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_2__["getResponseError"])(error));
      return '';
    }
  }

}

const streamService = new StreamService();

/***/ }),

/***/ "./src/services/studio.service.ts":
/*!****************************************!*\
  !*** ./src/services/studio.service.ts ***!
  \****************************************/
/*! exports provided: StudioService, studioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudioService", function() { return StudioService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioService", function() { return studioService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class StudioService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  me(headers) {
    return this.get('/studio/me', headers);
  }

  update(payload) {
    return this.put('/studio/update', payload);
  }

  updatePaymentInfo(payload) {
    return this.post('/studio/bank-transfer/update', payload);
  }

  updateDirectDepost(payload) {
    return this.post('/studio/direct-deposit/update', payload);
  }

  updatePaxum(payload) {
    return this.post('/studio/paxum/update', payload);
  }

  updateBitpay(payload) {
    return this.post('/studio/bitpay/update', payload);
  }

  getCommission() {
    return this.get('/settings/studio/commission');
  }

  addModel(payload) {
    return this.post('/studio/members', payload);
  }

  getMembers(params) {
    return this.get(this.buildUrl('/studio/members', params));
  }

  getMemberCommissions(params) {
    return this.get(this.buildUrl('/studio/commission', params));
  }

  updateMemberCommission(id, payload) {
    return this.put(`/studio/commission/member/${id}`, payload);
  }

  getPerformerRequest(params) {
    return this.get(this.buildUrl('/payout-requests/studio/performer-request', params));
  }

  updateStatusPerformerRequest(id, payload) {
    return this.put(`/payout-requests/studio/update/${id}`, _objectSpread({}, payload));
  }

  updateMemberStatus(id, status) {
    return this.post(`/studio/members/${id}/${status}`);
  }

  stats() {
    return this.get('/studio/stats');
  }

  getDocumentsUploadUrl() {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_1__["getGlobalConfig"])();
    return `${config.NEXT_PUBLIC_API_ENDPOINT}/studio/documents/upload`;
  }

}
const studioService = new StudioService();

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

/***/ "./src/services/transaction.service.ts":
/*!*********************************************!*\
  !*** ./src/services/transaction.service.ts ***!
  \*********************************************/
/*! exports provided: TransactionService, transactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionService", function() { return transactionService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class TransactionService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params) {
    return this.get(this.buildUrl('/transactions/user/search', params));
  }

  sendTipToken(performerId, token, conversationId) {
    return this.post(`/member/send-tip-token/${performerId}`, {
      token,
      conversationId
    });
  }

  sendPaidToken(conversationId) {
    return this.post(`/member/send-pay-token/${conversationId}`);
  }

}
const transactionService = new TransactionService();

/***/ }),

/***/ "./src/services/user.service.ts":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService, userService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userService", function() { return userService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");


class UserService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  me(headers) {
    return this.get('/users/me', headers);
  }

  updateMe(payload) {
    return this.put('/users', payload);
  }

  getAvatarUploadUrl(userId) {
    const config = Object(_config__WEBPACK_IMPORTED_MODULE_1__["getGlobalConfig"])();

    if (userId) {
      return `${config.NEXT_PUBLIC_API_ENDPOINT}/users/${userId}/avatar/upload`;
    }

    return `${config.NEXT_PUBLIC_API_ENDPOINT}/users/avatar/upload`;
  }

  search(query) {
    return this.get(this.buildUrl('/users/search', query));
  }

  findById(id) {
    return this.get(`/users/view/${id}`);
  }

}
const userService = new UserService();

/***/ }),

/***/ "./src/services/utils.service.ts":
/*!***************************************!*\
  !*** ./src/services/utils.service.ts ***!
  \***************************************/
/*! exports provided: UtilsService, utilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utilsService", function() { return utilsService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-request */ "./src/services/api-request.ts");

class UtilsService extends _api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  countriesList() {
    return this.get('/countries/list');
  }

  languagesList() {
    return this.get('/languages/list');
  }

  phoneCodesList() {
    return this.get('/phone-codes/list');
  }

  statistics() {
    return this.get('/statistics/admin');
  }

  verifyRecaptcha(token) {
    return this.post('/re-captcha/verify', {
      token
    });
  }

}
const utilsService = new UtilsService();

/***/ }),

/***/ "./src/services/video.service.ts":
/*!***************************************!*\
  !*** ./src/services/video.service.ts ***!
  \***************************************/
/*! exports provided: VideoService, videoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoService", function() { return videoService; });
/* harmony import */ var src_services_api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/api-request */ "./src/services/api-request.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/string */ "./src/lib/string.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/services/config.ts");






class VideoService extends src_services_api_request__WEBPACK_IMPORTED_MODULE_0__["APIRequest"] {
  search(params) {
    return this.get(this.buildUrl('/user/performer-assets/videos/search', params));
  }

  purchased(params) {
    return this.get(this.buildUrl('/purchased-items/user/videos', params));
  }

  details(id, headers) {
    return this.get(`/performer/performer-assets/videos/${id}/view`, headers);
  }

  myVideos(query) {
    return this.get(this.buildUrl('/performer/performer-assets/videos/search', query));
  }

  removeMyVideo(id) {
    return this.del(`/performer/performer-assets/videos/${id}`);
  }

  create(url, data, options = {
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

      if (data.video) {
        const video = data.video.file.originFileObj;
        formData.append('video', video, video.name);
      }

      if (data.trailer) {
        const trailer = data.trailer.file.originFileObj;
        formData.append('trailer', trailer, trailer.name);
      }

      if (data.thumbnail) {
        const thumbnail = data.thumbnail.file.originFileObj;
        formData.append('thumbnail', thumbnail, thumbnail.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['video', 'thumbnail', 'trailer'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('POST', Object(_lib_string__WEBPACK_IMPORTED_MODULE_2__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  update(url, data, options = {
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

      if (data.video && data.video.file) {
        const video = data.video.file.originFileObj;
        formData.append('video', video, video.name);
      }

      if (data.trailer && data.trailer.file) {
        const trailer = data.trailer.file.originFileObj;
        formData.append('trailer', trailer, trailer.name);
      }

      if (data.thumbnail && data.thumbnail.file) {
        const thumbnail = data.thumbnail.file.originFileObj;
        formData.append('thumbnail', thumbnail, thumbnail.name);
      }

      Object.keys(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(data, ['video', 'thumbnail', 'trailer'])).forEach(v => {
        formData.append(v, data[v]);
      });
      req.responseType = 'json';
      req.open('PUT', Object(_lib_string__WEBPACK_IMPORTED_MODULE_2__["isUrl"])(url) ? url : `${config.NEXT_PUBLIC_API_ENDPOINT}${url}`);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(src_services_api_request__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]);

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

  increaseView(id) {
    return this.post(`/user/performer-assets/videos/${id}/inc-view`);
  } // update(videoId, performerId, data) {
  //   return this.put(`/performer/performer-assets/videos/${videoId}`, {
  //     ...data,
  //     performerId
  //   });
  // }


  userFindVideoById(id, headers = {}) {
    return this.get(`/user/performer-assets/videos/${id}`, headers);
  }

}
const videoService = new VideoService();

/***/ }),

/***/ "./src/socket/Event.tsx":
/*!******************************!*\
  !*** ./src/socket/Event.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SocketContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocketContext */ "./src/socket/SocketContext.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/socket/utils.ts");




class Event extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      event,
      handler
    } = this.props;
    const socket = this.context;

    if (!socket) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["warning"])('Socket IO connection has not been established.');
      return;
    }

    socket.on(event, handler);
  }

  componentWillUnmount() {
    const {
      event
    } = this.props;
    const socket = this.context;

    if (!socket) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["warning"])('Socket IO connection has not been established.');
      return;
    }

    socket.off(event);
  }

  render() {
    return false;
  }

}

Event.contextType = _SocketContext__WEBPACK_IMPORTED_MODULE_1__["SocketContext"];
/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./src/socket/Socket.tsx":
/*!*******************************!*\
  !*** ./src/socket/Socket.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/config */ "./src/services/config.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/socket/utils.ts");
/* harmony import */ var _SocketContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SocketContext */ "./src/socket/SocketContext.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Socket extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    this.connect();
  }

  componentDidUpdate(nextProps) {
    const {
      loggedIn
    } = this.props;

    if (nextProps.loggedIn !== loggedIn) {
      this.connect();
    }

    return true;
  }

  componentWillUnmount() {
    this.socket && this.socket.close();
  }

  connect() {
    const {
      loggedIn
    } = this.props;
    const token = loggedIn && _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["authService"].getToken();

    if (true) {
      return;
    }

    const config = Object(_services_config__WEBPACK_IMPORTED_MODULE_4__["getGlobalConfig"])();
    const {
      uri = config.NEXT_PUBLIC_SOCKET_ENDPOINT
    } = this.props;
    const options = {
      transports: ['websocket', 'polling', 'long-polling'],
      query: token ? `token=${token}` : ''
    };
    this.socket && this.socket.close();
    this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(uri, this.mergeOptions(options));
    this.socket.status = 'initialized';
    this.socket.on('connect', () => {
      this.socket.status = 'connected';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('connected');
    });
    this.socket.on('disconnect', () => {
      this.socket.status = 'disconnected';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('disconnect');
    });
    this.socket.on('error', err => {
      this.socket.status = 'failed';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["warning"])('error', err);
    });
    this.socket.on('reconnect', data => {
      this.socket.status = 'connected';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('reconnect', data);
    });
    this.socket.on('reconnect_attempt', () => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('reconnect_attempt');
    });
    this.socket.on('reconnecting', () => {
      this.socket.status = 'reconnecting';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["debug"])('reconnecting');
    });
    this.socket.on('reconnect_failed', error => {
      this.socket.status = 'failed';
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["warning"])('reconnect_failed', error);
    });
  }

  mergeOptions(options = {}) {
    const defaultOptions = {
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1 * 1000,
      reconnectionDelayMax: 5 * 1000,
      autoConnect: true,
      transports: ['websocket', 'polling', 'long-polling'],
      rejectUnauthorized: true
    };
    return _objectSpread(_objectSpread({}, defaultOptions), options);
  }

  render() {
    const {
      children
    } = this.props;
    return __jsx(_SocketContext__WEBPACK_IMPORTED_MODULE_6__["SocketContext"].Provider, {
      value: this.socket
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children));
  }

}

const mapStates = state => ({
  loggedIn: state.auth.loggedIn
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStates)(Socket));

/***/ }),

/***/ "./src/socket/SocketContext.tsx":
/*!**************************************!*\
  !*** ./src/socket/SocketContext.tsx ***!
  \**************************************/
/*! exports provided: SocketContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketContext", function() { return SocketContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SocketContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext('socket');

/***/ }),

/***/ "./src/socket/index.ts":
/*!*****************************!*\
  !*** ./src/socket/index.ts ***!
  \*****************************/
/*! exports provided: Socket, Event, SocketContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Socket */ "./src/socket/Socket.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return _Socket__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event */ "./src/socket/Event.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _Event__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SocketContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocketContext */ "./src/socket/SocketContext.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketContext", function() { return _SocketContext__WEBPACK_IMPORTED_MODULE_2__["SocketContext"]; });





if (false) {}



/***/ }),

/***/ "./src/socket/utils.ts":
/*!*****************************!*\
  !*** ./src/socket/utils.ts ***!
  \*****************************/
/*! exports provided: warning, debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/config */ "./src/services/config.ts");
/* eslint-disable prefer-spread */

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */

const warning = (...args) => {
  const config = Object(_services_config__WEBPACK_IMPORTED_MODULE_0__["getGlobalConfig"])(); // debug on development and staging.

  if (config.NODE_ENV === 'production') return;
  /* eslint-disable no-console */

  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error.apply(console, args);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(args.join(' '));
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

};
const debug = (...args) => {
  const config = Object(_services_config__WEBPACK_IMPORTED_MODULE_0__["getGlobalConfig"])(); // debug on development and staging.

  if (config.NODE_ENV === 'production') return;
  /* eslint-disable no-console */

  if (typeof console !== 'undefined' && typeof console.debug === 'function') {
    console.debug.apply(console, args);
  }
};

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-accessible-accordion":
/*!*********************************************!*\
  !*** external "react-accessible-accordion" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL1BhZ2VCYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21tb24vU3Vic2NyaWJlLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21lbnRhbC1oZWFsdGgtY29uZGl0aW9ucy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9kYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvZmlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaW50ZXJuZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmVkdXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9ydWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3N0b3JlSG9sZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RyZWFtLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RyaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2F1dGgvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcGVyZm9ybWVyL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0dWRpby9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC91c2VyL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2FwaS1yZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Jhbm5lci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Vhcm5pbmcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZmF2b3VyaXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2dhbGxlcnkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvb3JkZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGF5bWVudC1pbmZvcm1hdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wYXlvdXQtcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGVyZm9tZXItY2F0ZWdvcmllcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wZXJmb21lci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9waG90by5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wb3N0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcHVyY2hhc2UtaXRlbS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZWZ1bmQtcmVxdWVzdC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0cmVhbS5zZXJ2aWNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3R1ZGlvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3Rva2VuLXBhY2thZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdHJhbnNhY3Rpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy92aWRlby5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvRXZlbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvU29ja2V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc29ja2V0L1NvY2tldENvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC91dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aC10by1yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWFjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXNlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIiJdLCJuYW1lcyI6WyJQYWdlQmFubmVyIiwicGFnZVRpdGxlIiwiaG9tZVBhZ2VVcmwiLCJob21lUGFnZVRleHQiLCJhY3RpdmVQYWdlVGV4dCIsImltZ0NsYXNzIiwiU3Vic2NyaWJlIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJpbml0UXVlcnlTdGF0ZSIsIm9mZnNldCIsImxpbWl0IiwiZ2VuZGVyIiwiY2F0ZWdvcnkiLCJjb3VudHJ5Iiwic29ydEJ5Iiwic29ydCIsIkhvbWVwYWdlIiwiUHVyZUNvbXBvbmVudCIsInNlYXJjaFBlcmZvcm1lciIsImRpc3BhdGNoU2VhcmNoUGVyZm9ybWVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJzb2NrZXQiLCJjb250ZXh0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlcyIsImxvZ2dlZEluIiwicSIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwib25MaWtlIiwicGVyZm9ybWVyIiwidXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlIiwiZGlzcGF0Y2hVcGRhdGVQZXJmb3JtZXJGYXZvcml0ZSIsIl9pZCIsImlzRmF2b3JpdGUiLCJmYXZvdXJpdGVTZXJ2aWNlIiwiZmF2b3JpdGUiLCJyZXNvbHZlIiwiZ2V0UmVzcG9uc2VFcnJvciIsInNldEZpbHRlciIsInNldFN0YXRlIiwiY2xlYXJGaWx0ZXIiLCJyZW5kZXIiLCJjYXRlZ29yaWVzIiwiY291bnRyaWVzIiwidWkiLCJzZXR0aW5ncyIsInNpdGVOYW1lIiwibWV0YUtleXdvcmRzIiwibWV0YURlc2NyaXB0aW9uIiwibG9nb1VybCIsImNvbnRleHRUeXBlIiwiU29ja2V0Q29udGV4dCIsIm1hcFN0YXRlVG9Qcm9wcyIsInBlcmZvcm1lcnMiLCJtYXBEaXNwYXRjaCIsInVwZGF0ZUN1cnJlbnRVc2VyIiwidXBkYXRlQ3VycmVudFBlcmZvcm1lciIsInVwZGF0ZUN1cnJlbnRTdHVkaW8iLCJsb2dpblN1Y2Nlc3MiLCJjb25uZWN0Iiwid2l0aFJvdXRlciIsImZvcm1hdERhdGUiLCJkYXRlIiwiZm9ybWF0IiwibW9tZW50IiwiY29udmVyRHVyYXRpb24iLCJkdXJhdGlvbiIsInV0YyIsImFzTWlsbGlzZWNvbmRzIiwicGFyc2VBZ2UiLCJnZXRBZ2UiLCJkaWZmIiwidG9TdHJpbmciLCJmb3JtYXREdXJhdGlvbiIsInMiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiYmVmb3JlQXZhdGFyVXBsb2FkIiwiZmlsZSIsImV4dCIsInNwbGl0IiwicG9wIiwidG9Mb3dlckNhc2UiLCJjb25maWciLCJnZXRHbG9iYWxDb25maWciLCJpc0ltYWdlQWNjZXB0IiwiTkVYVF9QVUJMSUNfSU1BR0VfQUNDUEVUIiwibWFwIiwidHJpbSIsImluZGV4T2YiLCJpc0x0Mk0iLCJzaXplIiwiTkVYVF9QVUJMSUNfTUFYSU1VTV9TSVpFX1VQTE9BRF9BVkFUQVIiLCJJTlRFUk5FVF9DSEVDS19VUkwiLCJpc0hhc0ludGVybmV0Q29ubmVjdGlvbiIsImZldGNoIiwiaGVhZGVycyIsIlByYWdtYSIsIkV4cGlyZXMiLCJzdGF0dXMiLCJleGNlcHRpb24iLCJsb2ciLCJmb3JtSXRlbUxheW91dCIsImxhYmVsQ29sIiwieHMiLCJzcGFuIiwic20iLCJ3cmFwcGVyQ29sIiwidGFpbEZvcm1JdGVtTGF5b3V0IiwiZGVmYXVsdENvbG9yIiwicHJpbWFyeUNvbG9yIiwic3VjY2Vzc0NvbG9yIiwid2hpdGVDb2xvciIsInZhbGlkYXRlTWVzc2FnZXMiLCJyZXF1aXJlZCIsInR5cGVzIiwiZW1haWwiLCJudW1iZXIiLCJyYW5nZSIsImNyZWF0ZUFjdGlvbiIsInR5cGUiLCJhY3Rpb24iLCJSZWR1eENyZWF0ZUFjdGlvbiIsImlzIiwiYVR5cGUiLCJjcmVhdGVBc3luY0FjdGlvbiIsImNyZWF0ZUFzeW5jQWN0aW9ucyIsImhhbmRsZUFjdGlvbnMiLCJhY3Rpb25zIiwiaW5pdGlhbFN0YXRlIiwiaGFuZGxlUmVkdXhBY3Rpb25zIiwicmVkdWNlIiwicmVkdWNlciIsImFjdCIsImNyZWF0ZVJlZHVjZXJzIiwic3RhdGVDb250ZXh0IiwicmVkdWNlcnMiLCJwcmV2ZW50UmVzZXR0aW5nIiwiZmxhdHRlbiIsImlzQXJyYXkiLCJmb3JFYWNoIiwiQVBQX1NUQVRFX1JFU0VUIiwiY3JlYXRlU2FnYXMiLCJzYWdhcyIsInNhZ2EiLCJlZmZlY3QiLCJ0YWtlTGF0ZXN0Iiwid29ya2VyIiwiZGVsYXkiLCJjcmVhdGVTZWxlY3RvcnNBIiwic3RhdGVTZWxlY3RvciIsImlzRW1wdHkiLCJnZXRJbiIsImNyZWF0ZVNlbGVjdG9ycyIsInNlbGVjdG9ycyIsImNyZWF0ZUpTU2VsZWN0b3JzIiwidXNlcm5hbWVQYXR0ZXJuUnVsZSIsInBhdHRlcm4iLCJSZWdFeHAiLCJzdG9yZSIsImdldFN0b3JlIiwic2V0U3RvcmUiLCJERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMIiwiREVGQVVMVF9QUklWQVRFX0lNQUdFX1VSTCIsIkRFRkFVTFRfR1JPVVBfSU1BR0VfVVJMIiwiREVGQVVMVF9PTkxJTkVfSU1BR0VfVVJMIiwiZ2V0UG9zdGVyIiwicG9zdGVyIiwic3RvcmVIb2xkZXIiLCJnZXRTdGF0ZSIsImRlZmF1bHRQcml2YXRlQ2FsbEltYWdlIiwiZGVmYXVsdE9mZmxpbmVNb2RlbEltYWdlIiwiZGVmYXVsdEdyb3VwQ2hhdEltYWdlIiwiaXNVcmwiLCJtYXRjaCIsImdlbmVyYXRlVXVpZCIsImMiLCJyIiwicmFuZG9tIiwidiIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ1bml0UHJpY2VzIiwidGV4dCIsImFycmF5VG9UcmVlIiwiYXJyYXkiLCJpZCIsInBhcmVudElkIiwiY2xvbmVEZWVwIiwiaW5kZXgiLCJoYXNoUGFyZW50IiwicGF0aE1hdGNoUmVnZXhwIiwicmVnZXhwIiwiZXhlYyIsInF1ZXJ5QW5jZXN0b3JzIiwiY3VycmVudCIsImhhc2hNYXAiLCJNYXAiLCJnZXRQYXRoIiwiY3VycmVudFBhcmVudElkIiwiY29uc3RyYWludHMiLCJ2YWx1ZXMiLCJpc01vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImdldFVybFBhcmFtZXRlciIsInNQYXJhbSIsInNQYWdlVVJMIiwibG9jYXRpb24iLCJzdWJzdHJpbmciLCJzVVJMVmFyaWFibGVzIiwic1BhcmFtZXRlck5hbWUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJEQVlfT0ZfV0VFSyIsIm1vbiIsInR1ZSIsIndlZCIsInRodSIsImZyaSIsInNhdCIsInN1biIsImdldERlZmF1bHRTY2hlZHVsZSIsImRlZmF1bHRWYWwiLCJzdGFydCIsImVuZCIsImNsb3NlZCIsImdldE5leHRTaG93Iiwic2NoZWR1bGUiLCJ3ZWVrRGF5IiwibmV4dFNob3ciLCJwZXJmb3JtZXJTaG93cyIsImZpbHRlciIsImRheSIsImdldFNlYXJjaERhdGEiLCJwYWdpbmF0aW9uIiwiZmlsdGVycyIsInNvcnRlciIsIm9yZGVyIiwiU09SVCIsImdldEJhc2U2NCIsIm9yaWdpbkZpbGVPYmoiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJjb252ZXJ0Q29ubmVjdGlvbkRhdGEiLCJhcnIiLCJzZXJ2ZXJEYXRhIiwiSlNPTiIsInBhcnNlIiwiY2xpZW50RGF0YSIsImNoZWNrVXNlckxvZ2luIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJnZXRDdXJyZW50VXNlciIsImlzUGh5c2ljYWxQcm9kdWN0IiwiY2hhdEJveE1lc3NhZ2VDbGFzc05hbWUiLCJyZXEiLCJpc01pbmUiLCJzdGFydHNTZXF1ZW5jZSIsImVuZHNTZXF1ZW5jZSIsImNsYXNzbmFtZXMiLCJtaW5lIiwidGlwIiwiY29udmVydEZlZXRUb0NtIiwiZmVldCIsImluY2giLCJmIiwiZm9ybWF0RGF0YVdlaWdodCIsIm1pbiIsIm1heCIsInRvRml4ZWQiLCJsYWJlbCIsImZvcm1hdERhdGFIZWlnaHQiLCJhIiwiZm9ybWF0UHJpY2UiLCJwcmljZSIsImZyYWN0aW9uRGlnaXRzIiwibG9naW4iLCJsb2dpbkZhaWwiLCJsb2dpblJlcXVlc3RpbmciLCJwZXJmb3JtZXJsb2dpbiIsInBlcmZvcm1lcmxvZ2luU3VjY2VzcyIsInBlcmZvcm1lcmxvZ2luRmFpbCIsInJlc2V0TG9naW5EYXRhIiwic3R1ZGlvTG9naW4iLCJzdHVkaW9Mb2dpblN1Y2Nlc3MiLCJzdHVkaW9Mb2dpbkZhaWwiLCJwZXJmb3JtZXJSZWdpc3RlciIsInBlcmZvcm1lclJlZ2lzdGVyU3VjY2VzcyIsInBlcmZvcm1lclJlZ2lzdGVyRmFpbCIsInNldFBlcmZvcm1lclJlZ2lzdGVyU3VibWl0dGluZyIsInVzZXJSZWdpc3RlciIsInVzZXJSZWdpc3RlclN1Y2Nlc3MiLCJ1c2VyUmVnaXN0ZXJGYWlsIiwic2V0VXNlclJlZ2lzdGVyU3VibWl0dGluZyIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGFzc3dvcmRTdWNjZXNzIiwidXBkYXRlUGFzc3dvcmRGYWlsIiwic2V0VXBkYXRlUGFzc3dvcmRTdWJtaXR0aW5nIiwibG9nb3V0IiwiZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllcyIsImdldFBlcmZvcm1lckNhdGVnb3JpZXNTdWNjZXNzIiwiZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllc0ZhaWwiLCJzZWFyY2hQZXJmb3JtZXJTdWNjZXNzIiwic2VhcmNoUGVyZm9ybWVyRmFpbCIsInNldFBlcmZvcm1lclNlYXJjaGluZyIsInVwZGF0ZVBlcmZvcm1lclByb2ZpbGUiLCJ1cGRhdGVQZXJmb3JtZXJQcm9maWxlU3VjY2VzcyIsInVwZGF0ZVBlcmZvcm1lclByb2ZpbGVGYWlsIiwic2V0dXBkYXRpbmdQZXJmb3JtZXJQcm9maWxlIiwidXBkYXRlUGF5bWVudEluZm8iLCJ1cGRhdGVEaXJlY3REZXBvc2l0IiwidXBkYXRlUGF4dW0iLCJ1cGRhdGVCaXRwYXkiLCJ1cGRhdGVTdHJlYW1pbmdTdGF0dXMiLCJ1cGRhdGVEZWZhdWx0UHJpY2UiLCJnZXRQZXJmb3JtZXJEZXRhaWxzIiwiZ2V0UGVyZm9ybWVyRGV0YWlsc1N1Y2Nlc3MiLCJnZXRQZXJmb3JtZXJEZXRhaWxzRmFpbCIsInNldEdldHRpbmdQZXJmb3JtZXJEZXRhaWxzIiwic2V0UGVyZm9ybWVyRGV0YWlscyIsInVwZGF0ZVBlcmZvcm1lckFzc2V0Iiwic2V0RmF2b3JpdGVQZXJmb3JtZXJEZXRhaWxzIiwiZ2V0TXlQcm9kdWN0cyIsImdldE15UHJvZHVjdHNTdWNjZXNzIiwiZ2V0TXlQcm9kdWN0c0ZhaWwiLCJzZXRHZXR0aW5nTXlQcm9kdWN0cyIsImFkZE15UHJvZHVjdCIsInJlbW92ZU15UHJvZHVjdCIsImdldEVhcm5pbmciLCJnZXRFYXJuaW5nU3VjY2VzcyIsImdldEVhcm5pbmdGYWlsIiwic2V0R2V0dGluZ0Vhcm5pbmciLCJnZXRQYXlvdXRSZXF1ZXN0IiwiZ2V0UGF5b3V0UmVxdWVzdFN1Y2Nlc3MiLCJnZXRQYXlvdXRSZXF1ZXN0RmFpbCIsInNldEdldHRpbmdQYXlvdXRSZXF1ZXN0IiwicmVtb3ZlUGF5b3V0UmVxdWVzdCIsImdldE15VmlkZW9zIiwiZ2V0TXlWaWRlb3NTdWNjZXNzIiwiZ2V0TXlWaWRlb3NGYWlsIiwic2V0Z2V0dGluZ015VmlkZW9zIiwiYWRkTXlWaWRlb3MiLCJyZW1vdmVNeVZpZGVvIiwiZ2V0TXlQaG90b3MiLCJnZXRNeVBob3Rvc1N1Y2Nlc3MiLCJnZXRNeVBob3Rvc0ZhaWwiLCJzZXRnZXR0aW5nTXlQaG90b3MiLCJhZGRNeVBob3RvcyIsInJlbW92ZU15UGhvdG8iLCJnZXRNeUdhbGxlcmllcyIsImdldE15R2FsbGVyaWVzU3VjY2VzcyIsImdldE15R2FsbGVyaWVzRmFpbCIsInNldGdldHRpbmdNeUdhbGxlcmllcyIsImFkZE15R2FsbGVyaWVzIiwicmVtb3ZlTXlHYWxsZXJpZXMiLCJ1cGRhdGVDdXJyZW50UGVyZm9ybWVyQmFsYW5jZSIsInVwZGF0ZVN0dWRpbyIsInVwZGF0ZVN0dWRpb1N1Y2Nlc3MiLCJ1cGRhdGVTdHVkaW9GYWlsIiwic2V0VXBkYXRpbmdTdHVkaW8iLCJ1cGRhdGVTdHVkaW9QYXltZW50SW5mbyIsInVwZGF0ZVN0dWRpb0RpcmVjdERlcG9zaXQiLCJ1cGRhdGVTdHVkaW9QYXh1bSIsInVwZGF0ZVN0dWRpb0JpdHBheSIsImdldFN0dWRpb0Vhcm5pbmciLCJnZXRTdHVkaW9FYXJuaW5nU3VjY2VzcyIsImdldFN0dWRpb0Vhcm5pbmdGYWlsIiwic2V0R2V0dGluZ1N0dWRpb0Vhcm5pbmciLCJnZXRTdHVkaW9QYXlvdXRSZXF1ZXN0IiwiZ2V0U3R1ZGlvUGF5b3V0UmVxdWVzdFN1Y2Nlc3MiLCJnZXRTdHVkaW9QYXlvdXRSZXF1ZXN0RmFpbCIsInNldEdldHRpbmdTdHVkaW9QYXlvdXRSZXF1ZXN0IiwicmVtb3ZlU3R1ZGlvUGF5b3V0UmVxdWVzdCIsImdldFBlcmZvcm1lclJlcXVlc3QiLCJnZXRQZXJmb3JtZXJSZXF1ZXN0U3VjY2VzcyIsImdldFBlcmZvcm1lclJlcXVlc3RGYWlsIiwic2V0R2V0dGluZ1BlcmZvcm1lclJlcXVlc3QiLCJnZXRNZW1iZXJzIiwiZ2V0TWVtYmVyc1N1Y2Nlc3MiLCJnZXRNZW1iZXJzRmFpbCIsImdldE1lbWJlcnNTZWFyY2hpbmciLCJ1cGRhdGVNZW1iZXJTdGF0dXMiLCJnZXRNZW1iZXJzQ29tbWlzc2lvbnMiLCJnZXRNZW1iZXJzQ29tbWlzc2lvbnNTdWNjZXNzIiwiZ2V0TWVtYmVyc0NvbW1pc3Npb25zRmFpbCIsImdldE1lbWJlcnNDb21taXNzaW9uc1NlYXJjaGluZyIsInVwZGF0ZU1lbWJlckNvbW1pc2lvbiIsImdldFN0dWRpb1N0YXRzIiwiZ2V0U3R1ZGlvU3RhdHNTdWNjZXNzIiwiZ2V0U3R1ZGlvU3RhdHNGYWlsIiwidXBkYXRlVG90YWxQZXJmb3JtZXIiLCJ1cGRhdGVDdXJyZW50VXNlckF2YXRhciIsInVwZGF0ZUN1cnJlbnRVc2VyQmFsYW5jZSIsInVwZGF0ZVVzZXIiLCJ1cGRhdGVVc2VyU3VjY2VzcyIsInVwZGF0ZVVzZXJGYWlsIiwic2V0VXBkYXRpbmciLCJzZXRSZWR1Y2VyIiwiYnV5VG9rZW5TdWNjZXNzIiwiZ2V0RmF2b3JpdGVQZXJmb3JtZXJzIiwiZ2V0RmF2b3JpdGVQZXJmb3JtZXJzU3VjY2VzcyIsImdldEZhdm9yaXRlUGVyZm9ybWVyc0ZhaWxlZCIsImdldHRpbmdGYXZvcml0ZVBlcmZvcm1lcnMiLCJyZW1vdmVGYXZvcml0ZSIsImdldFBheW1lbnRUb2tlbkhpc3Ryb3kiLCJnZXRQYXltZW50VG9rZW5IaXN0cm95U3VjY2VzcyIsImdldFBheW1lbnRUb2tlbkhpc3Ryb3lGYWlsIiwiZ2V0dGlnUGF5bWVudFRva2VuSGlzdG9yeSIsIlRPS0VOIiwiUk9MRSIsIlBFUkZPUk1FUl9ST0xFIiwiVVNFUl9ST0xFIiwiU1RVRElPX1JPTEUiLCJkZXNjZW5kIiwiYXNjZW5kIiwiQVBJUmVxdWVzdCIsInNldEF1dGhIZWFkZXJUb2tlbiIsInRva2VuIiwicGFyc2VKU09OIiwicmVzcG9uc2UiLCJqc29uIiwiY2hlY2tTdGF0dXMiLCJFcnJvciIsImNsb25lIiwicmVxdWVzdCIsImJvZHkiLCJ2ZXJiIiwidXBkYXRlZEhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJBUElfRU5EUE9JTlQiLCJORVhUX1BVQkxJQ19BUElfRU5EUE9JTlQiLCJzdHJpbmdpZnkiLCJ0aGVuIiwiYnVpbGRVcmwiLCJiYXNlVXJsIiwicXVlcnlTdHJpbmciLCJrIiwiam9pbiIsInBvc3QiLCJwdXQiLCJkZWwiLCJ1cGxvYWQiLCJmaWxlcyIsIm9uUHJvZ3Jlc3MiLCJ1cGxvYWRVcmwiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudGFnZSIsImxvYWRlZCIsInRvdGFsIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpZWxkbmFtZSIsImN1c3RvbURhdGEiLCJyZXNwb25zZVR5cGUiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJyZWdpc3RlciIsImRvY3VtZW50VmVyaWZpY2F0aW9uIiwiZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlIiwiaWRWZXJpZmljYXRpb24iLCJpZFZlcmlmaWNhdGlvbkRpbGUiLCJvbWl0IiwiQXV0aFNlcnZpY2UiLCJzZXRBdXRoSGVhZGVyIiwicm9sZSIsImV4cGlyZXMiLCJwZXJmb3JtZXJMb2dpbiIsInNldFRva2VuIiwiZ2V0VG9rZW4iLCJnZXRSb2xlIiwicmVtb3ZlVG9rZW4iLCJyZW1vdmUiLCJyZW1vdmVSZW1lbWJlciIsInBlcmZvcm1lcnNSZWdpc3RlciIsInN0dWRpb1JlZ2lzdGVyIiwiZm9yZ290UGFzc3dvcmQiLCJyZXNlbmRWZXJpZmljYXRpb25FbWFpbCIsImF1dGhTZXJ2aWNlIiwiQmFubmVyU2VydmljZSIsImJhbm5lclNlcnZpY2UiLCJnbG9iYWxDb25maWciLCJzZXRHbG9iYWxDb25maWciLCJFYXJuaW5nU2VydmljZSIsInN0YXRzIiwiZWFybmluZ1NlcnZpY2UiLCJGYXZvdXJpdGVTZXJ2aWNlIiwibGlrZSIsInVubGlrZSIsImlzRmF2b3JpdGVkIiwiR2FsbGVyeVNlcnZpY2UiLCJpc1BlcmZvcm1lciIsInB1cmNoYXNlZCIsImNyZWF0ZSIsInVwZGF0ZSIsImRldGFpbHMiLCJwdWJsaWNkZXRhaWxzIiwiZ2FsbGVyeVNlcnZpY2UiLCJNZXNzYWdlU2VydmljZSIsImdldENvbnZlcnNhdGlvbnMiLCJzZWFyY2hDb252ZXJzYXRpb25zIiwiY3JlYXRlQ29udmVyc2F0aW9uIiwiZ2V0Q29udmVyc2F0aW9uRGV0YWlsIiwiZ2V0Q29udmVyc2F0aW9uQnlTdHJlYW1JZCIsInN0cmVhbUlkIiwiZ2V0TWVzc2FnZXMiLCJjb252ZXJzYXRpb25JZCIsImdldFB1YmxpY01lc3NhZ2VzIiwic2VuZE1lc3NhZ2UiLCJzZW5kU3RyZWFtTWVzc2FnZSIsInNlbmRQdWJsaWNTdHJlYW1NZXNzYWdlIiwiZmluZFB1YmxpY0NvbnZlcnNhdGlvblBlcmZvcm1lciIsInBlcmZvcm1lcklkIiwiY291bnRUb3RhbE5vdFJlYWQiLCJyZWFkQWxsSW5Db252ZXJzYXRpb24iLCJyZWNpcGllbnRJZCIsImdldE1lc3NhZ2VVcGxvYWRVcmwiLCJkZWxldGVNZXNzYWdlIiwiZGVsZXRlQWxsTWVzc2FnZUluQ29udmVyc2F0aW9uIiwibWVzc2FnZVNlcnZpY2UiLCJPcmRlclNlcnZpY2UiLCJwYXlsb2FkIiwidXNlclNlYXJjaCIsInVzZXJGaW5kRGV0YWlscyIsIm9yZGVyU2VydmljZSIsIlBheW1lbnRJbmZvcm1hdGlvblNlcnZpY2UiLCJmaW5kT25lIiwicGF5bWVudEluZm9ybWF0aW9uU2VydmljZSIsIlBheW91dFJlcXVlc3RTZXJ2aWNlIiwiY2FsY3VsYXRlIiwic3R1ZGlvU2VhcmNoIiwiZGV0YWlsIiwicGF5b3V0UmVxdWVzdFNlcnZpY2UiLCJQZXJmb3JtZXJDYXRlZ29yaWVzU2VydmljZSIsImdldExpc3QiLCJwZXJmb3JtZXJDYXRlZ29yaWVzIiwiUGVyZm9ybWVyU2VydmljZSIsIm1lIiwidXBkYXRlTWUiLCJ1c2VybmFtZSIsImdldEF2YXRhclVwbG9hZFVybCIsImdldERvY3VtZW50c1VwbG9hZFVybCIsImdldFJlbGVhc2VGb3JtVXJsIiwibXlQcm9kdWN0IiwiY3JlYXRlUHJvZHVjdCIsImltYWdlIiwiZGlnaXRhbEZpbGUiLCJ1cGRhdGVQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsImdldENvbW1pc3Npb24iLCJ1cGRhdGVEaXJlY3REZXBvc3QiLCJnZW9CbG9jayIsImdldEJsb2NrZWRMaXN0IiwiaW5jcmVhc2VWaWV3IiwidXBkYXRlQnJvYWRjYXN0U2V0dGluZyIsInN1c3BlbmRBY2NvdW50IiwicGFzc3dvcmQiLCJjaGVja0Jsb2NrIiwiR0VOTkRFUl9QRVJGT1JNRVIiLCJwZXJmb3JtZXJTZXJ2aWNlIiwiUGhvdG9TZXJ2aWNlIiwic2VhcmNoQnlHYWxsZXJ5IiwiZ2FsbGVyeUlkIiwibXlQaG90b3MiLCJwaG90byIsInVwbG9hZEltYWdlcyIsInBob3RvU2VydmljZSIsIlBvc3RTZXJ2aWNlIiwiZmluZEJ5SWQiLCJjcmVhdGVDb250YWN0Q290ZW50IiwicG9zdFNlcnZpY2UiLCJQcm9kdWN0U2VydmljZSIsImdldERvd25sb2FkTGluayIsInByb2R1Y3RTZXJ2aWNlIiwiUHVyY2hhc2VJdGVtU2VydmljZSIsInB1cmNoYXNlSXRlbSIsInB1cmNoYXNlUHJvZHVjdCIsInB1cmNoYXNlVmlkZW8iLCJwdXJjaGFzZUl0ZW1TZXJ2aWNlIiwiUmVmdW5kUmVxdWVzdFNlcnZpY2UiLCJyZWZ1bmRSZXF1ZXN0U2VydmljZSIsIlNldHRpbmdTZXJ2aWNlIiwiZ3JvdXAiLCJnZXRDb3VudHJpZXMiLCJnZXRUaW1lem9uZXMiLCJzZXR0aW5nU2VydmljZSIsIlN0cmVhbVNlcnZpY2UiLCJnZXRTZXNzaW9uSWQiLCJnb0xpdmUiLCJqb2luUHVibGljQ2hhdCIsInJlcXVlc3RQcml2YXRlQ2hhdCIsImFjY2VwdFByaXZhdGVDaGF0Iiwic3RhcnRHcm91cENoYXQiLCJqb2luR3JvdXBDaGF0IiwiZ2VuZXJhdGVPbmVUaW1lVG9rZW4iLCJnZXRQdWJsaXNoVG9rZW4iLCJleHBpcmVEYXRlIiwiYWRkIiwidG9EYXRlIiwiZ2V0VGltZSIsInNlY3VyZU9wdGlvbiIsInJlc3AiLCJ0b2tlbklkIiwiZ2V0U3Vic2NyaWJlclRva2VuIiwiZ2V0TGl2ZVN0cmVhbU9yVm9kVVJMIiwiX3BsYXllciIsImFwcE5hbWUiLCJ2aWV3ZXJVUkwiLCJleHRlbnNpb24iLCJvbmVUaW1lVG9rZW4iLCJzdHJlYW1TZXJ2aWNlIiwiU3R1ZGlvU2VydmljZSIsImFkZE1vZGVsIiwiZ2V0TWVtYmVyQ29tbWlzc2lvbnMiLCJ1cGRhdGVNZW1iZXJDb21taXNzaW9uIiwidXBkYXRlU3RhdHVzUGVyZm9ybWVyUmVxdWVzdCIsInN0dWRpb1NlcnZpY2UiLCJUb2tlblBhY2thZ2VTZXJ2aWNlIiwiYnV5VG9rZW5zIiwidG9rZW5QYWNrYWdlU2VydmljZSIsIlRyYW5zYWN0aW9uU2VydmljZSIsInNlbmRUaXBUb2tlbiIsInNlbmRQYWlkVG9rZW4iLCJ0cmFuc2FjdGlvblNlcnZpY2UiLCJVc2VyU2VydmljZSIsInVzZXJJZCIsInVzZXJTZXJ2aWNlIiwiVXRpbHNTZXJ2aWNlIiwiY291bnRyaWVzTGlzdCIsImxhbmd1YWdlc0xpc3QiLCJwaG9uZUNvZGVzTGlzdCIsInN0YXRpc3RpY3MiLCJ2ZXJpZnlSZWNhcHRjaGEiLCJ1dGlsc1NlcnZpY2UiLCJWaWRlb1NlcnZpY2UiLCJteVZpZGVvcyIsInZpZGVvIiwidHJhaWxlciIsInRodW1ibmFpbCIsInVzZXJGaW5kVmlkZW9CeUlkIiwidmlkZW9TZXJ2aWNlIiwiRXZlbnQiLCJ3YXJuaW5nIiwiU29ja2V0IiwibmV4dFByb3BzIiwiY2xvc2UiLCJ1cmkiLCJORVhUX1BVQkxJQ19TT0NLRVRfRU5EUE9JTlQiLCJ0cmFuc3BvcnRzIiwiU29ja2V0SU8iLCJtZXJnZU9wdGlvbnMiLCJkZWJ1ZyIsImRlZmF1bHRPcHRpb25zIiwicmVjb25uZWN0aW9uIiwicmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJJbmZpbml0eSIsInJlY29ubmVjdGlvbkRlbGF5IiwicmVjb25uZWN0aW9uRGVsYXlNYXgiLCJhdXRvQ29ubmVjdCIsInJlamVjdFVuYXV0aG9yaXplZCIsIm9ubHkiLCJtYXBTdGF0ZXMiLCJjcmVhdGVDb250ZXh0IiwiTk9ERV9FTlYiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsQ0FERixFQVFFLE1BQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdTRCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1SEFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBVEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFkRixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoTXdELENBQW5ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJQO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNDLFdBQVQsQ0FDTEMsS0FESyxF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O0FBQ0EsTUFBSUQsTUFBTSxDQUFDK2tCLFFBQVAsS0FBb0IsWUFBeEIsRUFBc0M7QUFFdEM7O0FBQ0EsTUFBSSxPQUFPcDhCLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0MsT0FBT0EsT0FBTyxDQUFDdzdCLEtBQWYsS0FBeUIsVUFBL0QsRUFBMkU7QUFDekV4N0IsV0FBTyxDQUFDdzdCLEtBQVIsQ0FBY2EsS0FBZCxDQUFvQnI4QixPQUFwQixFQUE2QmMsSUFBN0I7QUFDRDtBQUNGLENBVE0sQzs7Ozs7Ozs7Ozs7QUMvQlAsaUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvbWVudGFsLWhlYWx0aC1jb25kaXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9tZW50YWwtaGVhbHRoLWNvbmRpdGlvbnMvaW5kZXgudHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgUGFnZUJhbm5lciA9ICh7cGFnZVRpdGxlLCBob21lUGFnZVVybCwgaG9tZVBhZ2VUZXh0LCBhY3RpdmVQYWdlVGV4dCwgaW1nQ2xhc3N9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwYWdlLXRpdGxlLWFyZWEgJHtpbWdDbGFzc31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZS1jZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57cGFnZVRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtob21lUGFnZVVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2hvbWVQYWdlVGV4dH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj57YWN0aXZlUGFnZVRleHR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VCYW5uZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3Vic2NyaWJlID0gKCkgPT4ge1xuICAgIHJldHVybiAoICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Vic2NyaWJlLWFyZWFcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cblx0XHRcdFx0XHRcdDxoMj5TdWJzY3JpYmUgTm93PC9oMj5cblx0XHRcdFx0XHRcdDxwPkdldCBvdXIgbGF0ZXN0IG5ld3MgJiB1cGRhdGUgcmVndWxhcmx5PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuXHRcdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwibmV3c2xldHRlci1mb3JtXCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIiBuYW1lPVwiRU1BSUxcIiByZXF1aXJlZCAvPlxuXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRcdFx0U3Vic2NyaWJlXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Vic2NyaWJlOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgSVBlcmZvcm1lcixcbiAgSUNvdW50cmllcyxcbiAgSVBlcmZvcm1lckNhdGVnb2dpZXMsXG4gIElQZXJmb3JtU2VhcmNoLFxuICBJVUlDb25maWdcbn0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IFN1YnNjcmliZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1vbi9TdWJzY3JpYmUnO1xuaW1wb3J0IFBhZ2VCYW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tb24vUGFnZUJhbm5lcic7XG5pbXBvcnQgJy4vaW5kZXgubGVzcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgc2VhcmNoUGVyZm9ybWVyLFxuICB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUsXG4gIHVwZGF0ZUN1cnJlbnRQZXJmb3JtZXJcbn0gZnJvbSAnQHJlZHV4L3BlcmZvcm1lci9hY3Rpb25zJztcbmltcG9ydCB7IGxvZ2luU3VjY2VzcyB9IGZyb20gJ0ByZWR1eC9hdXRoL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXBkYXRlQ3VycmVudFVzZXIgfSBmcm9tICdAcmVkdXgvdXNlci9hY3Rpb25zJztcbmltcG9ydCB7IHVwZGF0ZUN1cnJlbnRTdHVkaW8gfSBmcm9tICdAcmVkdXgvc3R1ZGlvL2FjdGlvbnMnO1xuaW1wb3J0IHsgZmF2b3VyaXRlU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBnZXRSZXNwb25zZUVycm9yIH0gZnJvbSAnc3JjL2xpYic7XG5pbXBvcnQgeyB3aXRoUm91dGVyLCBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJ3NyYy9zb2NrZXQnO1xuaW1wb3J0IHtcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25JdGVtSGVhZGluZyxcbiAgQWNjb3JkaW9uSXRlbVBhbmVsLFxuICBBY2NvcmRpb25JdGVtQnV0dG9uXG59IGZyb20gJ3JlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICByb3V0ZXI6IE5leHRSb3V0ZXI7XG4gIHVpOiBJVUlDb25maWc7XG4gIGRhdGE6IElQZXJmb3JtZXJbXTtcbiAgc2VhcmNoUGVyZm9ybWVyPzogRnVuY3Rpb247XG4gIHRvdGFsPzogbnVtYmVyO1xuICBzdWNjZXNzPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBhbnk7XG4gIHNldHRpbmdzPzogYW55O1xuICBzZWFyY2hpbmc/OiBib29sZWFuO1xuICBsb2dnZWRJbj86IGJvb2xlYW47XG4gIHF1ZXJ5Pzoge1xuICAgIHE6IHN0cmluZztcbiAgfTtcbiAgY2F0ZWdvcmllcz86IElQZXJmb3JtZXJDYXRlZ29naWVzW107XG4gIGNvdW50cmllcz86IElDb3VudHJpZXNbXTtcbiAgdXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlOiBGdW5jdGlvbjtcbiAgdXBkYXRlQ3VycmVudFVzZXI6IEZ1bmN0aW9uO1xuICB1cGRhdGVDdXJyZW50UGVyZm9ybWVyOiBGdW5jdGlvbjtcbiAgdXBkYXRlQ3VycmVudFN0dWRpbzogRnVuY3Rpb247XG4gIGxvZ2luU3VjY2VzczogRnVuY3Rpb247XG59XG5cbmludGVyZmFjZSBJU3RhdGVzIHtcbiAgcXVlcnk6IElQZXJmb3JtU2VhcmNoO1xuICBzb3J0Pzoge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzb3J0Qnk/OiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IGluaXRRdWVyeVN0YXRlOiBJUGVyZm9ybVNlYXJjaCA9IHtcbiAgb2Zmc2V0OiAwLFxuICBsaW1pdDogNjAsXG4gIGdlbmRlcjogJycsXG4gIGNhdGVnb3J5OiAnJyxcbiAgY291bnRyeTogJycsXG4gIHNvcnRCeTogJycsXG4gIHNvcnQ6ICdkZXNjJ1xufTtcblxuY2xhc3MgSG9tZXBhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlcz4ge1xuICBwcml2YXRlIHNvY2tldDtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBxdWVyeTogaW5pdFF1ZXJ5U3RhdGVcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZWFyY2goKTtcbiAgICB0aGlzLnNvY2tldCA9IHRoaXMuY29udGV4dDtcbiAgICB0aGlzLnNvY2tldC5vbignbW9kZWxVcGRhdGVTdGF0dXMnLCB0aGlzLnNlYXJjaCk7XG4gICAgdGhpcy5zb2NrZXQub24oJ21vZGVsVXBkYXRlU3RyZWFtaW5nU3RhdHVzJywgdGhpcy5zZWFyY2gpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogSVByb3BzLCBwcmV2U3RhdGVzOiBJU3RhdGVzKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIGxvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKFxuICAgICAgcm91dGVyLnF1ZXJ5LnEgIT09IHByZXZQcm9wcy5yb3V0ZXIucXVlcnkucVxuICAgICAgfHwgcXVlcnkgIT09IHByZXZTdGF0ZXMucXVlcnlcbiAgICApIHtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuICAgIGlmICghbG9nZ2VkSW4gJiYgbG9nZ2VkSW4gIT09IHByZXZQcm9wcy5sb2dnZWRJbikge1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnNvY2tldCA9IHRoaXMuY29udGV4dDtcbiAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgIHRoaXMuc29ja2V0Lm9mZignbW9kZWxVcGRhdGVTdGF0dXMnKTtcbiAgICAgIHRoaXMuc29ja2V0Lm9mZignbW9kZWxVcGRhdGVTdHJlYW1pbmdTdGF0dXMnKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxpa2UocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSB7XG4gICAgY29uc3Qge1xuICAgICAgdXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlOiBkaXNwYXRjaFVwZGF0ZVBlcmZvcm1lckZhdm9yaXRlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBfaWQsIGlzRmF2b3JpdGUgfSA9IHBlcmZvcm1lcjtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZmF2b3VyaXRlU2VydmljZS5mYXZvcml0ZShfaWQsIGlzRmF2b3JpdGUpO1xuICAgICAgZGlzcGF0Y2hVcGRhdGVQZXJmb3JtZXJGYXZvcml0ZShfaWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBlID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGVycm9yKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZ2V0UmVzcG9uc2VFcnJvcihlKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RmlsdGVyKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeToge1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcm91dGVyLCBzZWFyY2hQZXJmb3JtZXI6IGRpc3BhdGNoU2VhcmNoUGVyZm9ybWVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgZGlzcGF0Y2hTZWFyY2hQZXJmb3JtZXIoe1xuICAgICAgLi4ucXVlcnksXG4gICAgICAuLi5yb3V0ZXIucXVlcnlcbiAgICB9KTtcbiAgfTtcblxuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1ZXJ5OiBpbml0UXVlcnlTdGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhdGVnb3JpZXMsIGNvdW50cmllcywgdWksIHNldHRpbmdzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3VpPy5zaXRlTmFtZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e3NldHRpbmdzPy5tZXRhS2V5d29yZHN9IC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjb250ZW50PXtzZXR0aW5ncz8ubWV0YURlc2NyaXB0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIE9HIHRhZ3MgKi99XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxuICAgICAgICAgICAgY29udGVudD17c2V0dGluZ3M/LnNpdGVOYW1lfVxuICAgICAgICAgICAga2V5PVwidGl0bGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3NldHRpbmdzPy5sb2dvVXJsfSAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmtleXdvcmRzXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e3NldHRpbmdzPy5tZXRhS2V5d29yZHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjb250ZW50PXtzZXR0aW5ncz8ubWV0YURlc2NyaXB0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFBhZ2VCYW5uZXJcbiAgICAgICAgICBwYWdlVGl0bGU9XCJNZW50YWwgSGVhbHRoIENvbmRpdGlvbnNcIlxuICAgICAgICAgIGhvbWVQYWdlVXJsPVwiL1wiXG4gICAgICAgICAgaG9tZVBhZ2VUZXh0PVwiSG9tZVwiXG4gICAgICAgICAgYWN0aXZlUGFnZVRleHQ9XCJNZW50YWwgSGVhbHRoIENvbmRpdGlvbnNcIlxuICAgICAgICAgIGltZ0NsYXNzPVwiYmctM1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybXMtY29uZGl0aW9ucyBwdGItMTAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLXByaXZhY3lcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTBcIj5NZW50YWwgSGVhbHRoIENvbmRpdGlvbnM8L2gyPjxiciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMVwiPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXEtYWNjb3JkaW9uXCI+XG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIGFsbG93WmVyb0V4cGFuZGVkPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSB1dWlkPVwiYVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbm9yZXhpYVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QW5vcmV4aWEgaXMgYSBzZXZlcmUgbWVudGFsIGhlYWx0aCBjb25kaXRpb24gYWZmZWN0aW5nIGF0dGl0dWRlcyBhbmQgYmVoYXZpb3VycyB0b3dhcmRzIHRoZSBjb25zdW1wdGlvbiBvZiBmb29kLCBhbm9yZXhpYSBjYW4gYWZmZWN0IGJvdGggd29tZW4gYW5kIG1lbi4gUGVvcGxlIHN1ZmZlcmluZyBmcm9tIGFub3JleGlhIHRlbmQgdG8gaGF2ZSBhIGNyaXBwbGluZyB3b3JyeSBvZiBiZWNvbWluZyDigJhmYXTigJkgYW5kIGRvIG5vdCBzZWUgdGhlaXIgYm9kaWVzIGZvciBob3cgdGhleSB0cnVseSBhcmUsIHdpdGggbWFueSBzdWZmZXJlcnMgd3JvbmdseSBiZWxpZXZpbmcgdGhhdCB0aGV5IGFyZSBvdmVyd2VpZ2h0IHdoZW4gdGhleSBhcmUgbm90LiBQZW9wbGUgd2l0aCBhbm9yZXhpYSBtYXkgYWRkaXRpb25hbGx5IG1pbmltaXNlIHRoZWlyIHdlaWdodCBieSBsaW1pdGluZyB0aGUgbWVhbHMgdGhhdCB0aGV5IGVhdCwgbWFraW5nIHRoZW1zZWx2ZXMgdm9taXQsIGFuZCBleGVyY2lzaW5nIGFuIGV4Y2Vzc2l2ZSBhbW91bnQuIEFub3JleGlhIGhhcyB0cnVseSBkYW5nZXJvdXMgb3V0Y29tZXMgZm9yIHN1ZmZlcmVycyBwaHlzaWNhbCBhbmQgbWVudGFsIGhlYWx0aC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QZW9wbGUgc3VmZmVyaW5nIGZyb20gYW5vcmV4aWEgb2Z0ZW4gZGlzZ3Vpc2UgdGhlaXIgYmVoYXZpb3VyIGZyb20gbG92ZWQgb25lcy4gQ29tbW9uIHN5bXB0b21zIG9mIGFub3JleGlhIGVuY29tcGFzczo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NaXNzaW5nIGZvb2QsIGluZ2VzdGluZyBtaW5pbWFsIGFtb3VudHMgb2YgZm9vZCwgb3IgYWN0aXZlbHkgYXZvaWRpbmcgc3BlY2lmaWMgZm9vZHMuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk9ic2Vzc2l2ZWx5IGNvdW50aW5nIGNhbG9yaWVzIGluIG1lYWxzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxlYXZpbmcgdGhlIHRhYmxlIGltbWVkaWF0ZWx5IGFmdGVyIGluZ2VzdGluZyB3aXRoIHRoZSBpbnRlbnRpb24gdG8gdm9taXQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGFraW5nIGxheGF0aXZlcyBhbmQgaHVuZ2VyIHN1cHByZXNzYW50czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QaHlzaWNhbCBpc3N1ZXMgc3VjaCBhcyBmZWVsaW5nIGxpZ2h0aGVhZGVkIG9yIGRpenp5LCBoYWlyIGxvc3Mgb3IgZHJ5IHBvcmVzIGFuZCBza2luPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJlcGVhdGVkIHdlaWdoaW5nIGFuZCBjaGVja2luZyBvbmXigJlzIHJlZmxlY3Rpb24gaW4gdGhlIG1pcnJvci48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkluZGl2aWR1YWxzIGFmZmVjdGVkIGJ5IGFub3JleGlhIG1pZ2h0IGFsc28gYmUgYWZmbGljdGVkIGJ5IHNldmVyYWwgZGlmZmVyZW50IG1lbnRhbCBoZWFsdGggaXNzdWVzIHN1Y2ggYXMgZGVwcmVzc2lvbiwgYW54aWV0eSwgYW5kIHNlbGYtaGFybS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaGljaCB0aGVyYXBpZXMgbWF5IGhlbHA/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UHN5Y2hpYXRyaWMgbWFuYWdlbWVudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db2duaXRpdmUtYmVoYXZpb3VyYWwgcmVtZWR5IChDQlQpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRpYWxlY3RpY2FsIGJlaGF2aW91ciB0aGVyYXB5IChEQlQpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNjaGVtYSB0aGVyYXB5IChTVCk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29nbml0aXZlIGFuYWx5dGljIHRoZXJhcHkgKENBVCk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSB1dWlkPVwiYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbnhpZXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BbnhpZXR5IGlzIGEgc2ltcGxlLCBlc3NlbnRpYWwgZW1vdGlvbiB0aGF0IGFsbCBvZiB1cyBleHBlcmllbmNlIHdoZW4gb3VyIGJvZGllcyBleHBlY3QgaGF6YXJkIG9yIHJpc2suIEhvd2V2ZXIsIGZvciBudW1lcm91cyByZWFzb25zLCBldmVyeSBub3cgYW5kIHRoZW4gcGVvcGxlIGNhbiBtaXNjYWxjdWxhdGUgdGhlIGNoYW5jZSBvZiBhIHNjZW5hcmlvIGFuZCBtYXkgZXhwZXJpZW5jZSB0ZW5zaW9uIGRpc3Byb3BvcnRpb25hdGUgdG8gdGhlIGNpcmN1bXN0YW5jZS4gSWYgeW91ciBlbW90aW9ucyBvZiBmZWFyIGFuZCBzdHJlc3Mgb2NjdXIgZnJlcXVlbnRseSwgZm9yIGEgcHJvdHJhY3RlZCBwZXJpb2Qgb2YgdGltZSwgb3IgeW91IGZlZWwgYXMgdGhvdWdoIHlvdXIgZmVhcnMgYW5kIHN0cmVzcyBhcmUgY29uc3VtaW5nIHlvdSwgeW91IG1heSBzdWZmZXIgZnJvbSBhbnhpZXR5LiBBbnhpZXR5IGlzIGEgc2ltcGxlLCBlc3NlbnRpYWwgZW1vdGlvbiB0aGF0IGFsbCBvZiB1cyBleHBlcmllbmNlIHdoZW4gb3VyIGJvZGllcyBleHBlY3QgaGF6YXJkIG9yIHJpc2suIEhvd2V2ZXIsIGZvciBudW1lcm91cyByZWFzb25zLCBldmVyeSBub3cgYW5kIHRoZW4gcGVvcGxlIGNhbiBtaXNjYWxjdWxhdGUgdGhlIGNoYW5jZSBvZiBhIHNjZW5hcmlvIGFuZCBtYXkgZXhwZXJpZW5jZSB0ZW5zaW9uIGRpc3Byb3BvcnRpb25hdGUgdG8gdGhlIGNpcmN1bXN0YW5jZS4gSWYgeW91ciBlbW90aW9ucyBvZiBmZWFyIGFuZCBzdHJlc3Mgb2NjdXIgZnJlcXVlbnRseSwgZm9yIGEgcHJvdHJhY3RlZCBwZXJpb2Qgb2YgdGltZSwgb3IgeW91IGZlZWwgYXMgdGhvdWdoIHlvdXIgZmVhcnMgYW5kIHN0cmVzcyBhcmUgY29uc3VtaW5nIHlvdSwgeW91IG1heSBzdWZmZXIgZnJvbSBhbnhpZXR5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFsdGhvdWdoIHNvbWUgb2YgdGhlIGZvbGxvd2luZyBtYXkgbm90IGFwcGx5IHRvIHlvdSwgYSBudW1iZXIgb2YgdGhlIG1vc3QgY29tbW9uIHN5bXB0b21zIG9mIGFueGlldHkgaW5jbHVkZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EaXp6aW5lc3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3dlYXRpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SGVhcnQgcGFscGl0YXRpb25zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRyZW1ibGluZyBvciBzaGFraW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRyeSBtb3V0aDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdG9tYWNoIHBhaW48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SGVhZGFjaGU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RmVlbGluZyBuYXVzZW91czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TaG9ydG5lc3Mgb2YgYnJlYXRoPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxvc3Mgb2YgaHVuZ2VyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRyZWFkPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBhbmljPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPldvcnJ5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRlcnJvciAvIGZlYXI8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWdpdGF0ZWQgYW5kIGp1bXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk5lcnZvdXNuZXNzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib3dldmVyLCB1bmlxdWUgc3ltcHRvbXMgZGVwZW5kIG9uIHRoZSB0eXBlIG9mIGFueGlldHkgYWlsbWVudCB5b3UgbWF5IGJlIGFmZmVjdGVkIGJ5LCBhcyB0ZW5zaW9uIGNhbiB0YWtlIHRoZSBmb3JtIG9mOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkdlbmVyYWxpc2VkIHRlbnNpb24gYWlsbWVudCAoR0FEKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QYW5pYyBzaWNrbmVzczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5IZWFsdGggdGVuc2lvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QaG9iaWFzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk9ic2Vzc2l2ZS1jb21wdWxzaXZlIGRpc29yZGVyIChPQ0QpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JZiB5b3UgZmVlbCB0aGF0IGFueSBvZiB0aGUgYWJvdmUgYXBwbGllcyB0byB5b3UsIHJlY29nbml6ZSB0aGF0IHlvdSBhcmUgbm90IG9uIHlvdXIgb3duLCBhcyBhbnhpZXR5IGlzIG9uZSBvZiB0aGUgbW9zdCBjb21tb24gbWVudGFsIGhlYWx0aCBpc3N1ZXMgYW5kIHlvdSBtYXkgYmVuZWZpdCBncmVhdGx5IGZyb20gdGhlcmFweS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaGljaCB0aGVyYXBpZXMgbWlnaHQgYXNzaXN0IG1lPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFjY2VwdGFuY2UgYW5kIGRlZGljYXRpb24gcmVtZWR5IChBQ1QpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvZ25pdGl2ZS1iZWhhdmlvdXJhbCByZW1lZHkgKENCVCk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TWluZGZ1bG5lc3MtYmFzZWQgdG90YWxseSBjb2duaXRpdmUgdGhlcmFweSAoTUJDVCk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSB1dWlkPVwiY1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdHRlbnRpb24gRGVmaWNpdCBIeXBlcmFjdGl2ZSBEaXNvcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXR0ZW50aW9uIGRlZmljaXQgaHlwZXJhY3RpdmUgZGlzb3JkZXIgcmVmZXJzIHRvIGEgZ3JvdXAgb2YgYmVoYXZpb3VyYWwgc2lnbnMgYW5kIHN5bXB0b21zIHRoYXQgaW5jbHVkZSBpbmF0dGVudGl2ZW5lc3MsIGh5cGVyYWN0aXZpdHksIGFuZCBpbXB1bHNpdml0eS4gQWx0aG91Z2ggQURIRCBpc3N1ZXMgYXJlIHR5cGljYWxseSBpZGVudGlmaWVkIGluIGNoaWxkcmVuLCBhZHVsdHMgYWxzbyBjYW4gYWxzbyBzdWZmZXIgZnJvbSBpdC4gSWYgeW91IGJhdHRsZSB0byBjb25jZW50cmF0ZSBvciBzdGF5IGZvY3VzZWQgb24gb2JsaWdhdGlvbnMsIHJlZ3VsYXJseSBhY3Qgb24gaW1wdWxzZSwgYW5kIGV4cGVyaWVuY2UgcHJvYmxlbXMgcmVndWxhdGluZyB5b3VyIGJlaGF2aW91ciBpbiByZXNwb25zZSB0byBjZXJ0YWluIHNpdHVhdGlvbnMsIHlvdSBjb3VsZCBzdWZmZXIgZnJvbSBBREhELjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbW1vbiBzaWducyBhbmQgc3ltcHRvbXMgb2YgQURIRDo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TaG9ydCBhdHRlbnRpb24gc3BhbiBvciBiZWluZyBlYXNpbHkgZGlzdHJhY3RlZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SZXN0bGVzc25lc3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29uc3RhbnQgZmlkZ2V0aW5nIG9yIG92ZXJhY3Rpdml0eTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbmFiaWxpdHkgdG8gZGVhbCB3aXRoIHN0cmVzcyBvciB0byBrZWVwIG1vb2Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGlzb3JnYW5pc2F0aW9uIOKAkyBzdWNoIGFzIG1pc3BsYWNpbmcgdGhpbmdzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkltcHVsc2l2ZSBiZWhhdmlvdXIg4oCTIHdoaWNoIGluY2x1ZGVzIGltbW9kZXJhdGUgc3BlbmRpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBzdWZmZXIgZnJvbSBBREhELCB5b3UgbWlnaHQgYWRkaXRpb25hbGx5IGhhdmUgaXNzdWVzIHNsZWVwaW5nIGFuZCBtaWdodCBzdWZmZXIgZnJvbSBhbnhpZXR5IGlzc3Vlcy4gSWYgeW91IGJlbGlldmUgeW91IGV4cGVyaWVuY2UgYW55IG9mIHRoZSBhYm92ZSBzeW1wdG9tcywgYSBjb21iaW5hdGlvbiBvZiBtZWRpY2F0aW9uIGFuZCB0aGVyYXB5IGNhbiBzaWduaWZpY2FudGx5IGVuaGFuY2UgeW91ciBkYWlseSBmdW5jdGlvbmluZy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaGljaCB0eXBlcyBvZiB0aGVyYXB5IGFyZSBhcHByb3ByaWF0ZT88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db2duaXRpdmUtYmVoYXZpb3VyYWwgcmVtZWR5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlN0cmVzcyBkaXNjb3VudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CZWhhdmlvdXJhbCBlZHVjYXRpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSB1dWlkPVwiZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZXJlYXZlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmVyZWF2ZW1lbnQgaXMgdGhlIG5hbWUgZ2l2ZW4gdG8gZGVzY3JpYmUgdGhlIHNlbnNlIG9mIGxvc3Mgd2UgZXhwZXJpZW5jZSB3aGVuIGEgY2hlcmlzaGVkIG9uZSBwYXNzZXMgYXdheS4gV2hlbiB5b3UgYXJlIGdyaWV2aW5nLCBpdCBpcyBvcmRpbmFyeSB0byBleHBlcmllbmNlIHZhcmlvdXMgZW1vdGlvbnMgaW5jbHVkaW5nIHVuaGFwcGluZXNzLCBhbmdlciwgYW54aWV0eSwgYW5kIGd1aWx0LCBob3dldmVyIG5vdyBhbmQgYWdhaW4gYmVyZWF2ZW1lbnQgbWF5IGJlIHBhcnRpY3VsYXJseSBvdmVyd2hlbG1pbmcgb3IgdW5jb3ZlciBlbW90aW9ucyB3aGljaCBtaWdodCBiZSBkaWZmaWN1bHQgdG8gY29udHJvbC4gSWYgeW914oCZcmUgZXhwZXJpZW5jaW5nIOKAmGNvbXBsaWNhdGVkIGJlcmVhdmVtZW504oCZLCB5b3Ugd2lsbCBmaW5kIHlvdXJzZWxmIHdpdGhkcmF3biwgaXJyaXRhdGVkLCBhbmQgZXhwZXJpZW5jaW5nIHN5bXB0b21zIG9mIGRlcHJlc3Npb24uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U29tZSBzaWducyBvZiB0eXBpY2FsIGJlcmVhdmVtZW50IGluY2x1ZGU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SW50ZW5zZSBzb3Jyb3c8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Rm9jdXMgb24gbGl0dGxlIGVsc2UgYnV0IHRoZSBsb3NzIG9mIGEgbG92ZWQgb25lPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkV4dHJlbWUgY29uc2Npb3VzbmVzcyBvbiByZW1pbmRlcnMgb2YgdGhlIGxvdmVkIG9uZSBvciBhdm9pZGFuY2Ugb2YgcmVtaW5kZXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRpZmZpY3VsdGllcyBhY2NlcHRpbmcgdGhlIGRlYXRoPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk51bWJuZXNzIGFuZC9vciBkZXRhY2htZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZlZWxpbmcgdGhhdCBsaWZlIGhhcyBubyBtZWFuaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPklycml0YWJpbGl0eSBvciBhZ2l0YXRpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TGFjayBvZiB0cnVzdCBpbiBvdGhlcnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SW5hYmlsaXR5IHRvIGV4cGVyaWVuY2UgZXhpc3RlbmNlIG9yIHRoaW5rIGJhY2sgb24gYWR2YW50YWdlb3VzIGV4cGVyaWVuY2VzIHdpdGggdGhlIG9uZSB5b3UgbG92ZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgdGhvc2Ugc3ltcHRvbXMgZG9u4oCZdCBpbXByb3ZlIG92ZXIgdGltZSwgaXQgbWlnaHQgYmUgYmVuZWZpY2lhbCB0byBleHBsb3JlIHRoZXJhcGV1dGljIG9wdGlvbnMuIFNvbWUgb2YgdGhlIHNpZ25zIGFuZCBzeW1wdG9tcyB0aGF0IHlvdXIgYmVyZWF2ZW1lbnQgbWlnaHQgYmUgbW9yZSBjb21wbGV4IGFuZCByZXF1aXJpbmcgdHJlYXRtZW50IGNvdWxkIGJlOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhhdmluZyB0cm91YmxlIGNhcnJ5aW5nIG91dCBkYXktdG8tZGF5IHRhc2tzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XaXRoZHJhd2FsIGZyb20gc29jaWFsIGFjdGl2aXRpZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGVwcmVzc2lvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UaG91Z2h0cyBvZiBndWlsdCBvciBzZWxmLWJsYW1lPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBlcnNpc3RlbnQgdGhvdWdodHMgb2YgYmxhbWUgYW5kIHRoYXQgeW91IGNvdWxkIGhhdmUgcHJldmVudGVkIHRoZWlyIHBhc3NpbmcuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxvc3Mgb2YgYSBzZW5zZSBvZiBwdXJwb3NlIGFuZCBzZWxmLXdvcnRoLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GZWVsaW5nIHRoYXQgbGlmZSBpcyBub3Qgd29ydGggbGl2aW5nIHdpdGhvdXQgeW91ciBsb3ZlZCBvbmUuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPldpc2ggdGhhdCB5b3UgaGFkIGRpZWQgd2l0aCB5b3VyIGxvdmVkIG9uZS48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBleHBlcmllbmNlIHRob3NlIHN5bXB0b21zLCB0aGVyYXB5IG1heSBoZWxwIHlvdSBjb21lIHRvIHRlcm1zIHdpdGggeW91ciBsb3NzIGFuZCBhaWQgeW91IGluIHJlZm9ybWluZyB5b3VyIGxpZmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2hpY2ggdHJlYXRtZW50cyB3b3VsZCBwb3NzaWJseSBoZWxwPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvZ25pdGl2ZS1iZWhhdmlvdXJhbCB0aGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvZ25pdGl2ZS1iZWhhdmlvdXJhbCB0aGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBzeWNob2R5bmFtaWMgcmVtZWR5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkR5bmFtaWMgaW50ZXJwZXJzb25hbCByZW1lZHk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWNjZXB0YW5jZSBhbmQgZGVkaWNhdGlvbiByZW1lZHk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSB1dWlkPVwiZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaW5nZSBFYXRpbmcgRGlzb3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJpbmdlIGVhdGluZyBkaXNvcmRlciBpcyBhIG1lbnRhbCBoZWFsdGggc2lja25lc3MgYWZmZWN0aW5nIGFuIGluZGl2aWR1YWzigJlzIGF0dGl0dWRlcyBhbmQgYmVoYXZpb3VycyByZWxhdGluZyB0byB0aGUgY29uc3VtcHRpb24gb2YgbWVhbHMsIHRoaXMgZGlzb3JkZXIgY2FuIGhhdmUgaGFybWZ1bCBjb25zZXF1ZW5jZXMgZm9yIGJvdGggYm9kaWx5IGFuZCBpbnRlbGxlY3R1YWwgaGVhbHRoLiBQZW9wbGUgd2l0aCBiaW5nZSBjb25zdW1pbmcgcHJvYmxlbXMgZWF0IG1vcmUgbWVhbHMgdGhhbiBvdGhlciBwZW9wbGUgd291bGQgaW4gYSBzaW1pbGFyIHRpbWUgcGVyaW9kIGFuZCBvZnRlbiBoYXZlIG5vIGNvbnRyb2wgb3ZlciBob3cgbXVjaCB0aGV5IGVhdCBkdXJpbmcgYW4gZXBpc29kZS4gSW5kaXZpZHVhbHMgbWF5IGV4cGVyaWVuY2UgdGhlc2Ugc3ltcHRvbXM7IGV4dHJlbWVseSBzcGVlZHkgY29uc3VtcHRpb24sIHBhc3QgZmVlbGluZyBmdWxsLCBzdGlsbCBlYXRpbmcgd2hlbiBubyBsb25nZXIgaHVuZ3J5LCBlYXQgaW4gc2VjcmV0IHRvIGNvdmVyIHRoZSBxdWFudGl0eSB0aGlzIGlzIGJlaW5nIGVhdGVuLCBvciBleHBlcmllbmNlIGEgdGVycmlibGUgZmVlbGluZyBhZnRlciBhIGJpbmdlLCB5b3UgY291bGQgYmUgYWZmbGljdGVkIGJ5IGJpbmdlIGVhdGluZyBkaXNvcmRlci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JbiBvcmRlciB0byBtZWV0IHRoZSBwcm9nbm9zaXMgZm9yIHRoZSBzaWNrbmVzcywgeW91IHNob3VsZCBleHBlcmllbmNlIGEgbWluaW11bSAzIG9mIHRoZSBhZm9yZW1lbnRpb25lZCBzeW1wdG9tcyBldmVyeSB3ZWVrIGZvciAzIG1vbnRocy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaGljaCB0aGVyYXBpZXMgbWlnaHQgaGVscD88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db2duaXRpdmUtYmVoYXZpb3VyYWwgcmVtZWR5IChDQlQpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1vZGlmaWVkIGRpYWxlY3RpY2FsIGJlaGF2aW91ciB0aGVyYXB5IChEQlQpLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHV1aWQ9XCJmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpcG9sYXIgRGlzb3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByZXZpb3VzbHkgcmVmZXJyZWQgdG8gYXMgbWFuaWMgZGVwcmVzc2lvbiwgcGVvcGxlIHN1ZmZlcmluZyBmcm9tIGJpcG9sYXIgZGlzb3JkZXIgZXhwZXJpZW5jZSBzaGlmdHMgaW4gbW9vZCBmcm9tIGV4dHJlbWUgbG93IG1vb2RzIHRvIGludGVuc2UgaGlnaCBtb29kcywgd2l0aCBhIGZldyBwYXRpZW50cyBuZXZlciBleHBlcmllbmNpbmcg4oCYcmVndWxhcuKAmSB0ZW1wZXIuIElmIHlvdSBleHBlcmllbmNlIHBlcmlvZHMgb2YgZGVwcmVzc2lvbiBhbHRlcm5hdGVkIHdpdGggaW50ZXJ2YWxzIG9mIG92ZXJhY3Rpdml0eSBhbmQgZW1vdGlvbnMgb2YgZXVwaG9yaWEsIGVhY2ggb2Ygd2hpY2ggY2FuIGxhc3Qgc2V2ZXJhbCB3ZWVrcywgeW91IG1heSBiZSBzdWZmZXJpbmcgZnJvbSBiaXBvbGFyIGRpc29yZGVyLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbW1vbiBzeW1wdG9tcyBvZiBkZXByZXNzaW9uL2xvdyBtb29kOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNhZG5lc3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VW5jb250cm9sbGFibGUgY3J5aW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFueGlldHk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TG9zcyBvZiBpbnRlcmVzdCBvciBhbXVzZW1lbnQgaW4gc3BvcnRzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPldpdGhkcmF3YWwgZnJvbSBmYW1pbHkgYW5kIGZyaWVuZHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RXhjZXNzaXZlIGd1aWx0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlN1aWNpZGFsIG1pbmQgYW5kIHVyZ2VzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Db21tb24gc3ltcHRvbXMgb2YgZXVwaG9yaWEgaW5jbHVkZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbmNyZWFzZWQgZW5lcmd5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVudXN1YWwgdGFsa2F0aXZlbmVzczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SYWNpbmcgdGhvdWdodHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TGl0dGxlIHdhbnQgZm9yIHNsZWVwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkluZmxhdGVkIHNlbGYgZXN0ZWVtPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNwZW5kaW5nIHNwcmVlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Qmlwb2xhciBkaXNvcmRlciBjYW4gYmUgY2xhc3NlZCBiaXBvbGFyIEkgKG1hbmljIGVwaXNvZGVzKSBvciBiaXBvbGFyIElJIChoeXBvbWFuaWMgZXBpc29kZXMpLiBUaGUgZm9yZW1vc3QgZGlzdGluY3Rpb24gYW1vbmcgbWFuaWEgYW5kIGh5cG9tYW5pYSBpcyB0aGUgc2V2ZXJpdHkgb2YgdGhlIG1hbmljIHNlZ21lbnQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IGZlZWwgdGhhdCB0aGUgYWJvdmUgYXBwbGllcyB0byB5b3UsIHRoZXJhcHkgaW4gYWRkaXRpb24gdG8gbWVkaWNhdGlvbiBjYW4gZXh0cmVtZWx5IGVuaGFuY2UgeW91ciBkYWlseSBmdW5jdGlvbmluZyBhbmQgaW1wcm92ZSB5b3VyIHF1YWxpdHkgb2YgbGlmZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaGljaCB0cmVhdG1lbnQgcGxhbnMgY291bGQgaGVscD88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Db2duaXRpdmUgYmVoYXZpb3VyYWwgdGhlcmFweSBjYW4gYXNzaXN0IGEgcGVyc29uIHdpdGggYmlwb2xhciBzeW1wdG9tcyBhbmQgbGVhcm4gaG93IHRvIHJlY29nbmlzZSB3aGVuIGEgdGVtcGVyIHNoaWZ0IGlzIGFib3V0IHRvIG9jY3VyLiBDQlQgY2FuIGFsc28gaGVscCBzb21lb25lIHdpdGggYmlwb2xhciBzaWNrbmVzcyBzdGljayB0byBhIHRoZXJhcHkgcGxhbiB0byByZWR1Y2UgdGhlIGNoYW5jZXMgb2YgcmVsYXBzZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gdXVpZD1cImdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9keSBEeXNtb3JwaGljIERpc29yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Cb2R5IER5c21vcnBoaWMgRGlzb3JkZXIgaXMgYSBmb3JtIG9mIGFueGlldHkgYWZmZWN0aW5nIHNvbWVvbmXigJlzIGltYWdlLiBQZW9wbGUgYWZmZWN0ZWQgYnkgdGhpcyBkaXNvcmRlciBoYXZlIGEgZGlzdG9ydGVkIHZpZXcgb2YgdGhlaXIgb3duIGFwcGVhcmFuY2UsIGFuZCBnZW5lcmFsbHkgdGVuZCB0byBmaXhhdGUgb24gZWxlbWVudHMgb2YgdGhlaXIgZmFjZSBvciBib2R5IHRoYXQgdGhleSBiZWxpZXZlIGFyZSB1bmF0dHJhY3RpdmUgb3Ig4oCYd3JvbmfigJkuIEJlY2F1c2Ugb2YgdGhvc2UgY29yZSBiZWxpZWZzLCB0aGV5IGdlbmVyYWxseSB0ZW5kIHRvIHNwZW5kIGEgc2lnbmlmaWNhbnQgdGltZSB3b3JyaWVkIGFib3V0IHRoZWlyIGFwcGVhcmFuY2UsIGhvd2V2ZXIgYm9keSBkeXNtb3JwaGlhIGRpc29yZGVyIGlzIGEgc2VyaW91cyBtZW50YWwgaGVhbHRoIGNvbmRpdGlvbiwgY29uc2VxdWVudGx5IHN1ZmZlcmVycyBhcmUgbm90IG1lcmVseSB2YWluIG9yIHNlbGYtb2JzZXNzZWQuIElmIHlvdSBmaW5kIHlvdXJzZWxmIGNvbnRpbnVvdXNseSBjb21wYXJpbmcgeW91ciBhcHBlYXJhbmNlIHRvIG90aGVycywgc3BlbmRpbmcgbnVtZXJvdXMgdGltZXMgbG9va2luZyB0byBoaWRlIHN1cHBvc2VkIHBlcnNvbmFsIGRlZmVjdHMsIG9yIGJlY29taW5nIGRpc3RyZXNzZWQgYnkgYSBjZXJ0YWluIGFyZWEgb2YgeW91ciBib2R5LCB5b3UgbWF5IGJlIHN1ZmZlcmluZyBmcm9tIGJvZHkgZHlzbW9ycGhpYSBkaXNvcmRlci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5PdGhlciBzeW1wdG9tcyBpbmNsdWRlOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNwZW5kaW5nIGxvdHMgb2YgdGltZSBpbiB0aGUgZnJvbnQgb2YgdGhlIG1pcnJvciBvciBzdGVlcmluZyBjbGVhciBvZiBtaXJyb3JzIGFsdG9nZXRoZXI8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RmVlbGluZyB3b3JyaWVkIHdoaWxzdCBhcm91bmQgb3RoZXIgcGVvcGxlIGFuZCBhdmVydGluZyBzb2NpYWwgc2l0dWF0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CZWluZyBvdmVybHkgd29ycmllZCByZWdhcmRpbmcgcmVxdWVzdGluZyBoZWxwIG9mIGZlYXIgdGhhdCB0aGV54oCZbGwgYmUgc2VlbiB0byBiZSBzZWxmLW9ic2Vzc2VkPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlZWtpbmcgY2xpbmljYWwgcmVtZWR5IGZvciB0aGUgcGVyY2VpdmVkIGRlZmVjdCB3aGljaCBpbmNsdWRlIGNvc21ldGljIHN1cmdpY2FsIHByb2NlZHVyZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FeGNlc3NpdmUgZm9vZCByZWdpbWVuIGFuZCBleGVyY2lzZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWx0aG91Z2ggQkREIGlzIGRpZmZlcmVudCB0byBPQ0QsIHRoZXJlIGFyZSBzaW1pbGFyaXRpZXMgYmV0d2VlbiB0aGUgMiBwcm9ibGVtcywgYXMgZWFjaCBpbnZvbHZlIGNvbXB1bHNpdmUgYmVoYXZpb3Vycy4gQkREIGFsc28gY2FuIHJlc3VsdCBpbiBkZXByZXNzaW9uLCBzZWxmLWhhcm0gYW5kIHN1aWNpZGFsIHRob3VnaHRzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBleHBlcmllbmNlIHRoZSBhYm92ZSBzeW1wdG9tcywgdGhlcmFweSBjYW4gc2lnbmlmaWNhbnRseSBlbmhhbmNlIHlvdXIgc2VsZi1lc3RlZW0sIHdlbGwtYmVpbmcsIGFuZCBxdWFsaXR5IG9mIGxpZmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2hpY2ggdHJlYXRtZW50IHBsYW5zIG1heSBhc3Npc3Q/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWNjZXB0YW5jZSBhbmQgQ29tbWl0bWVudCBUaGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNjaGVtYSBUaGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvZ25pdGl2ZSBBbmFseXRpYyBUaGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvZ25pdGl2ZSBCZWhhdmlvdXJhbCBUaGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gdXVpZD1cImhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9yZGVybGluZSBQZXJzb25hbGl0eSBEaXNvcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Qm9yZGVybGluZSBwZXJzb25hbGl0eSBkaXNvcmRlciAoQlBEKSBpcyBhIGRldmVsb3BtZW50YWwgZGlzZWFzZSB0aGF0IHN1YnN0YW50aWFsbHkgZGlzcnVwdHMgYSBwZXJzb27igJlzIHBvdGVudGlhbCB0byBhbHRlciB0aGVpciBlbW90aW9ucywgbWFuYWdlIHRoZWlyIGFjdGlvbnMsIGFuZCBzaGFwZSBzb2xpZCBpbnRlcnBlcnNvbmFsIHJlbGF0aW9uc2hpcHMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VW5mb3J0dW5hdGVseSwgQlBEIGlzIG9mdGVuIG1pc2RpYWdub3NlZCBhcyBiaXBvbGFyIGRpc29yZGVyLCB3aGlsZSBpbiBCUEQgYWRqdXN0bWVudHMgaW4gdGVtcGVyIGFuZCBtb29kIG9jY3VyIG11Y2ggbW9yZSBmcmVxdWVudGx5LiBUaGUgaW5kaXZpZHVhbOKAmXMgbW9vZCBjYW4gb2Z0ZW4gZGlmZmVyIHN1YnN0YW50aWFsbHkganVzdCBpbiBhIHNpbmdsZSBkYXkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG8gYmUgZGlhZ25vc2VkIHdpdGggQlBEIHRoZSBwZXJzb24gbWF5IGV4aGliaXQgYW55IDUgb2YgdGhlIGZvbGxvd2luZyBzeW1wdG9tczo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GZWFyIG9mIGFiYW5kb25tZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVuc3RhYmxlIG9yIGNvbnZlcnRpbmcgcmVsYXRpb25zaGlwczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5VbnN0YWJsZSBzZWxmLWltYWdlOyBzdHJ1Z2dsZXMgd2l0aCBpZGVudGl0eTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbXB1bHNpdmUgc2VsZi1hZHZlcnNlIGJlaGF2aW91cnMgKGltbW9kZXJhdGUgc3BlbmRpbmcsIGRhbmdlcm91cyBzZXgsIHN1YnN0YW5jZSBtaXN1c2UsIGJpbmdlIGNvbnN1bWluZyBhbmQgb3RoZXJzKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdWljaWRhbCBiZWhhdmlvdXIgb3Igc2VsZi1oYXJtPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1vb2QgaW5zdGFiaWxpdHkgd2l0aCBudW1lcm91cyBtb29kIHN3aW5nczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GZWVsaW5ncyBvZiBlbXB0aW5lc3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGlmZmljdWx0aWVzIHdpdGggYW5nZXIsIGNvbnNpc3Rpbmcgb2YgY29tbW9uIGxvc3Mgb2YgdGVtcGVyIG9yIGZpZ2h0aW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlN0cmVzcyByZWxhdGVkIHBhcmFub2lhIG9yIGRpc3NvY2lhdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IGZlZWwgdGhhdCB0aGUgYWJvdmUgYXBwbGllcyB0byB5b3UsIGl04oCZcyBjcml0aWNhbCB0byBjb25zdWx0YW50IGEgc3BlY2lhbGlzdCB0byBkaWFnbm9zZSB5b3UgZWZmZWN0aXZlbHkgYXMgaHVtYW4gYmVpbmdzIHdpdGggQlBEIHJlZ3VsYXJseSBhbHNvIGV4cGVyaWVuY2Ugb3RoZXIgZGlzb3JkZXJzIHN1Y2ggYXMgZGVwcmVzc2lvbiwgYW54aWV0eSwgc3Vic3RhbmNlIG1pc3VzZSBvciBlYXRpbmcgcHJvYmxlbXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IGFyZSBzdWZmZXJpbmcgZnJvbSBCUEQsIHNwZWNpYWxpc3QgdGhlcmFweSBjYW4gZ3JlYXRseSBpbXByb3ZlIHlvdXIgZGF5LXRvLWRheSBmdW5jdGlvbmluZyBhbmQgcXVhbGl0eSBvZiBsaWZlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHV1aWQ9XCJpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcHJlc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIGFsbCBmZWVsIHNhZCBvY2Nhc2lvbmFsbHksIHdoZXRoZXIgb3Igbm90IGl0IGJlIGluIHJlYWN0aW9uIHRvIGEgcHJvdm9raW5nIGNpcmN1bXN0YW5jZSBvciBmb3Igbm8gcmVhc29uIGF0IGFsbC4gSG93ZXZlciwgaWYgeW91IGFyZSBmZWVsaW5nIHRoaXMgd2F5IGZvciB3ZWVrcyBvciBtb250aHMsIGFzIG9wcG9zZWQgdG8ganVzdCBhIGZldyBkYXlzLCB5b3Ugd2lsbCBiZSBzdWZmZXJpbmcgd2l0aCBkZXByZXNzaW9uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFsdGhvdWdoIGRlcHJlc3Npb24gY2FuIGFmZmVjdCBodW1hbnMgaW4gdmVyeSBzcGVjaWZpYyB3YXlzIGFuZCB0aGVyZSBhcmUgdmFyeWluZyBkZWdyZWVzIG9mIHNldmVyaXR5LCBzb21lIGNvbW1vbnBsYWNlIHNpZ25zIGFuZCBzeW1wdG9tcyBvZiBkZXByZXNzaW9uIGluY2x1ZGU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29udGludW91cyBsb3cgdGVtcGVyIG9yIGRpc2FwcG9pbnRtZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZlZWxpbmcgaG9wZWxlc3Mgb3IgaGVscGxlc3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RmVlbGluZyB0ZWFyZnVsPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZlZWxpbmcgZ3VpbHQtcmlkZGVuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZlZWxpbmcgaXJyaXRhYmxlIGFuZCBpbnRvbGVyYW50IG9mIG90aGVyIHBlb3BsZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5IYXZpbmcgbm8gbW90aXZhdGlvbiBvciBpbnRlcmVzdHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RmVlbGluZyBpbmRlY2lzaXZlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk5vdCBnZXR0aW5nIGFtdXNlbWVudCBvdXQgb2YgbGlmZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GZWVsaW5nIGFueGlvdXMgb3IgY29uY2VybmVkPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhhdmluZyBzdWljaWRhbCB0aG91Z2h0cyBvciB0aG91Z2h0cyBvZiBoYXJtaW5nIHlvdXIgc2VsZjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5MYWNrIG9mIGVuZXJneSBvciBpbnRlcmVzdCBpbiBzZXg8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2hhbmdlIGluIGFwcGV0aXRlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRpc3R1cmJlZCBzbGVlcDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SG93ZXZlciwgc3ltcHRvbXMgbWlnaHQgYmUgc3BlY2lmaWMgdG8gdGhlIHR5cGUgb2YgZGVwcmVzc2lvbiB5b3UgYXJlIGV4cGVyaWVuY2luZyBhcyB0aGVyZSBhcmUgc2V2ZXJhbCBjbGFzc2lmaWNhdGlvbnMgY29uc2lzdGluZyBvZjo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZWFzb25hbCBhZmZlY3RpdmUgZGlzb3JkZXIgKFNBRCk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Qmlwb2xhciBkaXNvcmRlcjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Qb3N0LW5hdGFsIGRlcHJlc3Npb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBzdXNwZWN0IHlvdSBhcmUgZXhwZXJpZW5jaW5nIGRlcHJlc3Npb24sIGEgbWl4dHVyZSBvZiBtZWRpY2F0aW9uIGFuZCB0aGVyYXB5IGhhcyBiZWVuIGVzdGFibGlzaGVkIHRvIGJlIHRoZSBtb3N0IGVmZmVjdGl2ZSB0cmVhdG1lbnQgZm9yIGRlcHJlc3Npb24uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2hpY2ggY3VyZXMgbWF5IGhlbHA/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29nbml0aXZlLWJlaGF2aW91cmFsIHRoZXJhcHk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWNjZXB0YW5jZSBhbmQgY29tbWl0bWVudCB0aGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1pbmRmdWxuZXNzLWJhc2VkIGNvZ25pdGl2ZSB0aGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvZ25pdGl2ZSBhbmFseXRpYyB0aGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gdXVpZD1cImpcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRUVhdGluZyBEaXNvcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWF0aW5nIGRpc29yZGVyIGlzIHRoZSBnZW5lcmFsIHRlcm0gZ2l2ZW4gdG8gYSBjb2xsZWN0aW9uIG9mIGlzc3VlcyB0aGF0IGNhbiBvY2N1ciBpbiBib3RoIHdvbWVuIGFuZCBtZW4sIG5lZ2F0aXZlbHkgYWZmZWN0aW5nIGluZGl2aWR1YWxz4oCZIGF0dGl0dWRlcyBhbmQgYmVoYXZpb3VycyB0b3dhcmRzIGVhdGluZyBhbmQgbWVhbHMuICBTb2NpZXRhbCBwcmVzc3VyZXMgY291bGQgcmVzdWx0IGluIHBlcnNvbmFsIGluc2VjdXJpdGllcyBzdXJmYWNpbmcgYW5kIGNvdWxkIHJlc3VsdCBpbiBhIGRpc3RvcnRlZCB2aWV3IG9mIHdoYXQgYW4gaW5kaXZpZHVhbOKAmXMgYm9keSBzaG91bGQgbG9vayBsaWtlIGFzIG9wcG9zZWQgdG8gd2hhdCBpdCBjdXJyZW50bHkgbG9va3MgbGlrZS4gSWYgeW91IHNwZW5kIGEgdmFyaWV0eSBvZiB0aW1lIGZvY3VzaW5nIG9uIHlvdXIgd2VpZ2h0IGFuZCBkaXNjb3ZlciB5b3Vyc2VsZiBtYWtpbmcgdW5oZWFsdGh5IGNob2ljZXMsIHdoaWNoIGluY2x1ZGUgb3Zlci1leGVyY2lzZSwgcmVzdHJpY3RpbmcgdGhlIG1lYWxzIHlvdSBlYXQgYW5kL29yIG9ic2Vzc2l2ZSBjYWxvcmllIGNvdW50aW5nLCBvciBkaWZmZXJlbnQgYmVoYXZpb3VycyBzdWNoIGFzIHB1cmdpbmcgdG8gY29udHJvbCB5b3VyIHdlaWdodCwgaXQgaXMgbGlrZWx5IHlvdSBhcmUgc3VmZmVyaW5nIGZyb20gYW4gZWF0aW5nIGRpc29yZGVyLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSB1dWlkPVwia1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGlzdGVudGlhbCBUaGVyYXB5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIHR5cGUgb2YgdGhlcmFweSBhZGRyZXNzZXMgYSBjZXJ0YWluIHR5cGUgb2YgYW54aWV0eSB3aGVyZSBhbiBpbmRpdmlkdWFsIGZlZWxzIHN0cmVzc2VkIG9yIHVuZWFzeSBhcyBhIHJlc3VsdCBvZiBsaWZl4oCZcyBmb3JlbW9zdCBjb25jZXJucywgc3VjaCBhcyB0aGUgaW5ldml0YWJpbGl0eSBvZiBkZWF0aCBhbmQgdGhlIG1lYW5pbmcgb2YgdGhlaXIgbGlmZS4gVGhlcmFwaXN0cyBjYW4gaGVscCB5b3UgdG8gb3ZlcmNvbWUgeW91ciBhbnhpZXR5IGFuZCBmaW5kIG1lYW5pbmcgaW4geW91ciBvd24gbGlmZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGVyZSBhcmUgc3BlY2lmaWMgdHlwZXMgb2YgZWF0aW5nIGRpc29yZGVycywgd2l0aCB0aGUgbW9zdCBjb21tb24gYmVpbmc6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QW5vcmV4aWEgbmVydm9zYSDigJMgV2hlbiBhIHBlcnNvbiB0cmllcyB0byBrZWVwIHRoZWlyIHdlaWdodCBhcyBsaXR0bGUgYXMgdmlhYmxlLCBmcmVxdWVudGx5IHRocm91Z2ggZXhjZXNzaXZlbHkgbGltaXRpbmcgdGhlIG1lYWxzIHRoZXnigJlyZSBlYXRpbmcgYW5kL29yIHdvcmtvdXQgYW4gZXhjZXNzaXZlIGFtb3VudC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5CdWxpbWlhIOKAkyBXaGVuIGEgcGVyc29uIGlzIGdvaW5nIHRocm91Z2ggcGVyaW9kcyBvZiBiaW5nZSBjb25zdW1pbmcgYW5kIGlzIHRoZW4gZGVsaWJlcmF0ZWx5IHVud2VsbCBvciB1c2VzIGxheGF0aXZlcyB0byBnb3Zlcm4gdGhlaXIgd2VpZ2h0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmluZ2UgZWF0aW5nIGRpc29yZGVyIOKAkyBXaGVuIGEgcGVyc29uIGVhdHMgYmlnIGFtb3VudHMgb2YgZm9vZCBpbiBhIGJyaWVmIHRpbWUgYW5kIGZlZWxzIHVuYWJsZSB0byBnb3Zlcm4gdGhlbXNlbHZlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvbWUgaW5kaXZpZHVhbHMgbWF5IHN1ZmZlciBmcm9tIGEgdmFyaWV0eSBvZiB0aGVzZSBzeW1wdG9tcyBhbmQgaXMgdGh1cyBkZXNjcmliZWQgYXMgRUROT1MgKGVhdGluZyBkaXNvcmRlciBub3Qgb3RoZXJ3aXNlIHNwZWNpZmllZCkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlIG1vc3QgbGlrZWx5IHN5bXB0b21zIGFzc29jaWF0ZWQgd2l0aCBhbiBlYXRpbmcgZGlzb3JkZXIgYXJlOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk5lZ2F0aXZlIHNlbGYtcGVyY2VwdGlvbiByZWxhdGluZyB0byB5b3VyIGJvZHk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29uc3RhbnRseSB3ZWlnaGluZyB5b3Vyc2VsZjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EaXNzYXRpc2ZhY3Rpb24gd2l0aCBib2RpbHkgc3BlY2lmaWNzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZvb2QgcmVzdHJpY3Rpb25zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbXB1bHNpdmUgZXhlcmNpc2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TmVlZCBmb3IgcGVyZmVjdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QdXJnaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZlYXIgb2YgYmVpbmcgb3ZlcndlaWdodDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FeGNlc3NpdmUgZm9vZCBjb25zdW1wdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IGFyZSBzdWZmZXJpbmcgZnJvbSBhbiBlYXRpbmcgZGlzb3JkZXIsIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBhbmQgc2V2ZXJpdHksIHlvdSBtaWdodCByZXF1aXJlIGEgbXVsdGktZGlzY2lwbGluYXJ5IG1ldGhvZCBvZiB0cmVhdG1lbnQsIGhvd2V2ZXIgdGhlcmFweSBjYW4gc2lnbmlmaWNhbnRseSBoZWxwIHRvIGltcHJvdmUgeW91ciBxdWFsaXR5IG9mIGxpZmUuPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gdXVpZD1cImxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhbGl6ZWQgQW54aWV0eSBEaXNvcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2hpbHN0IGFueGlldHkgaXMgYSBwcmltYXJ5IGZ1bmRhbWVudGFsIGVtb3Rpb24sIHdlIGFsbCBleHBlcmllbmNlIG9jY2FzaW9uYWxseSwgdGhvc2UgaW5kaXZpZHVhbHMgc3RydWdnbGluZyB3aXRoIGdlbmVyYWxpc2VkIGFueGlldHkgZGlzb3JkZXIgZXhwZXJpZW5jZSBhbnhpZXR5IHJlbGF0aW5nIHRvIGEgd2lkZSByYW5nZSBvZiBmYWN0b3JzIGluIHRoZWlyIGRhaWx5IGxpdmVzIGluIGEgd2F5IHdoaWNoIGRpc3J1cHRzIHRoZWlyIGRheS10by1kYXkgZnVuY3Rpb25pbmcuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IGFyZSBmZWVsaW5nIHdvcnJpZWQgYW5kIHN0YWluZWQgbW9zdCBkYXlzLCBjYW7igJl0IHJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgeW91IGZlbHQgYXQgZWFzZSwgYW5kIGNhbm5vdCBjYWxtIHlvdXIgbWluZCB5b3UgbWF5IGJlIHN1ZmZlcmluZyBmcm9tIEdBRC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BbHRob3VnaCB0aGUgYmVsb3cgbGlzdCBiZW5lYXRoIGlzIG5vdCBleGhhdXN0aXZlLCBhIGZldyBjb21tb24gc3ltcHRvbXMgb2YgR0FEIGFyZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SZXN0bGVzc25lc3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RmVlbGluZyBjb250aW51b3VzbHkgb24gZWRnZS48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGlmZmljdWx0eSBjb25jZW50cmF0aW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlbnNlIG9mIGRyZWFkPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhlYXJ0IHBhbHBpdGF0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TbGVlcCBkaWZmaWN1bHRpZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SGVhZGFjaGVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkV4Y2Vzc2l2ZSBzd2VhdGluZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TaG9ydG5lc3Mgb2YgYnJlYXRoPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRpenppbmVzczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JcnJpdGFiaWxpdHk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBkZWZpbmluZyBmZWF0dXJlIG9mIEdBRCBpcyB0aGUgY29uc3RhbnQgYW5kIHVucmVsZW50aW5nIHdvcnJ5aW5nIGV4cGVyaWVuY2VkIGJ5IHRoZSBpbmRpdmlkdWFsLiBJZiB5b3UgYXJlIGV4cGVyaWVuY2luZyBhIG51bWJlciBvZiB0aGUgYWZvcmVtZW50aW9uZWQgc3ltcHRvbXMsIHRoZW4gYSBjb21iaW5hdGlvbiBvZiBtZWRpY2F0aW9uIGFuZCB0aGVyYXB5IGNhbiBncmVhdGx5IGltcHJvdmUgeW91ciBxdWFsaXR5IG9mIGxpZmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2hpY2ggdHJlYXRtZW50cyBtaWdodCBhc3Npc3Q/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29nbml0aXZlLWJlaGF2aW91cmFsIHRoZXJhcHk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BY2NlcHRhbmNlIGFuZCBkZWRpY2F0aW9uIHRoZXJhcHk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NaW5kZnVsbmVzcyBiYXNlZCBjb2duaXRpdmUgdGhlcmFweTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSB1dWlkPVwibVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFsdGggQW54aWV0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2hpbHN0IGFueGlldHkgaXMgYSBzaW1wbGUsIGVzc2VudGlhbCBlbW90aW9uIHdlIGFsbCBleHBlcmllbmNlIG5vdyBhbmQgYWdhaW4sIGluZGl2aWR1YWxzIGFmZmVjdGVkIGJ5IGhlYWx0aCBhbnhpZXR5IHJlZ3VsYXJseSB3b3JyeSBhYm91dCB0aGVpciBmaXRuZXNzIGFuZCBmZWFyIHRoYXQgdGhleSBoYXZlIGdvdCBhIHNlcmlvdXMgYm9kaWx5IGlsbG5lc3MsIHdoaWxzdCB0aGVyZSBpcyBvZnRlbiBubyByZWFzb24gdG8gc3VwcG9zZSB0aGlzIGF0IGFsbC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIGRpc3Byb3BvcnRpb25hdGUgYW54aWV0eSBjYXVzZXMgaW5kaXZpZHVhbHMgc2VyaW91cyBkaXN0cmVzcyBhbmQgY2FuIGdyZWF0bHkgaW1wYWN0IGRhaWx5IGZ1bmN0aW9uaW5nLiBTb21lIHBlb3BsZSB3aXRoIGhlYWx0aCBhbnhpZXR5IGNhbiBhbHNvIGhhdmUgYSBjbGluaWNhbCBjaXJjdW1zdGFuY2UgdGhhdCB0aGV5IGZlYXIgYWJvdXQgYW4gZXhjZXNzaXZlIGFtb3VudCwgb3IgaW4gYSBtYW5uZXIgdGhhdCBpcyBvdXQgb2YgcHJvcG9ydGlvbiB0byB0aGUgYWN0dWFsIHNjZW5hcmlvLiBPdGhlcnMgbWF5IGJlIHRyb3VibGVkIGJ5IHNpZ25zIGFuZCBzeW1wdG9tcyB0aGF0IGFyZSBtZWRpY2FsbHkgdW5leHBsYWluZWQuIE90aGVycyBtYXkgYmUgZXhjZXNzaXZlbHkgd29ycmllZCBhYm91dCBmdXR1cmUgYWlsbWVudHMsIGltcGFjdGluZyB0aGVpciBkYWlseSBsaXZlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb21lIGNvbW1vbiBzaWducyBvZiBoZWFsdGggYW54aWV0eSBhcmU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QW4gYWNjb21wYW5pbWVudCBvZiB1bmV4cGxhaW5lZCBib2RpbHkgc2lnbnMgYW5kIHN5bXB0b21zIGFuZCBmcmVxdWVudCB2aXNpdHMgdG8gdGhlIEdQIHRvIGNoZWNrIGlmIHRoZXNlIHNpZ25zIGFuZCBzeW1wdG9tcyByZXByZXNlbnQgYW4gdW5kaWFnbm9zZWQgbWVkaWNhbCBjb25kaXRpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RmVhciBvZiBnZXR0aW5nIGlsbCBvciBleHBlcmllbmNpbmcgc3ltcHRvbXMgb2YgY29udGFtaW5hdGlvbiB3aXRob3V0IHNpZ25pZmljYW50IGNhdXNlIGZvciB3b3JyeTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SZXNpZHVhbCBmZWFyIHJlZ2FyZGluZyB0aGUgcG9zc2libGUgcmVvY2N1cnJlbmNlIG9mIGEgZGlzZWFzZSBvciBjb250YW1pbmF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZlYXIgcmVsYXRpbmcgdG8gY2F0YXN0cm9waGljIGVmZmVjdHMgdGhhdCB3b3VsZCBvY2N1ciBpZiBvbmUgaGFkIGNvbnRyYWN0ZWQgYW4gaW5mZWN0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZlYXIgb2YgaGVpZ2h0ZW5lZCB2dWxuZXJhYmlsaXR5IG9yIHN1c2NlcHRpYmlsaXR5IHRvIHNpY2tuZXNzIG9yIGlsbG5lc3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RW5nYWdpbmcgaW4gYSBudW1iZXIgb2YgYmVoYXZpb3VycyBzdWNoIGFzIGNvbnN1bHRpbmcgbW9yZSB0aGFuIG9uZSBtZWRpY2FsIGRvY3RvciwgdW5kZXJnb2luZyBkaWFnbm9zdGljIHRlY2huaXF1ZXMsIHN0dWR5aW5nIGZlYXNpYmxlIHJlYXNvbnMgb2Ygc3ltcHRvbXMsIHJlZ3VsYXIgaGFuZCB3YXNoaW5nIGFuZCBkaWZmZXJlbnQgcHJvdGVjdGlvbiBiZWhhdmlvdXJzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IGZlZWwgdGhhdCB0aGUgYWJvdmUgYXBwbGllcyB0byB5b3UsIHRoZXJhcHkgY2FuIGdyZWF0bHkgaGVscCB0byBlbmhhbmNlIHlvdXIgZGF5LXRvLWRheSBmdW5jdGlvbmluZyBhbmQgd2VsbGJlaW5nLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoaWNoIHRyZWF0bWVudCBvcHRpb25zIG1pZ2h0IGhlbHA/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHV1aWQ9XCJuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9ic2Vzc2l2ZSBDb21wdWxzaXZlIERpc29yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5PQ0QgaXMgYSBjb21tb24gYW54aWV0eSBpbGxuZXNzIHdoZXJlaW4gYSBwZXJzb24gaGFzIG9ic2Vzc2l2ZSB0aG91Z2h0cyBhbmQgZmVlbCBhcyB0aG91Z2ggdGhleSBzaG91bGQgZW5nYWdlIGluIGNvbXB1bHNpdmUgYWN0aXZpdGllcyB0byBtYW5hZ2UgdGhlc2Ugb2JzZXNzaXZlIHRob3VnaHRzIGFuZCBuZXV0cmFsaXNlIHRoZWlyIGFueGlldHksIGV2ZW4gaWYgdGhleSBmaW5kIHRoZSBjb21wdWxzaW9ucyB1cHNldHRpbmcuIEFuIG9ic2Vzc2lvbiBpcyBhIGNocm9uaWMsIHVud2FudGVkIHRob3VnaHQsIHBpY3R1cmUgb3IgdXJnZSB0aGF0IGlzIHZlcnkgZGlmZmljdWx0IG9yIG5vdCBwb3NzaWJsZSB0byBibG9jayBvdXQsIGNhdXNpbmcgZmVlbGluZ3Mgb2YgYW54aWV0eSwgZGlzZ3VzdCBvciB1bmVhc2UuIEEgY29tcHVsc2lvbiBpcyBhIHJlcGV0aXRpdmUgYmVoYXZpb3VyICh0aGF0IGNvdWxkIGFkZGl0aW9uYWxseSBiZSBtZW50YWwpIHRoYXQgYSBwZXJzb24gZmVlbHMgdGhleSBtdXN0IHBlcmZvcm0gdG8gY2FsbSB0aGUgb2JzZXNzaXZlIHRob3VnaHRzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSByZWd1bGFyIGN5Y2xlIG9mIE9DRCBpcyBhcyBmb2xsb3dzOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk9ic2Vzc2lvbnMg4oCTIGluIHdoaWNoIGFuIHVud2FudGVkIGltYWdlLCBwaG90byBvciB1cmdlIHJlcGVhdGVkbHkgZW50ZXJzIHlvdXIgdGhvdWdodHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QW54aWV0eSDigJMgdGhlIG9ic2Vzc2lvbiBwcm92b2tlcyBzZXZlcmUgdGVuc2lvbiBhbmQgZGlzdHJlc3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29tcHVsc2lvbiDigJMgcmVwZXRpdGl2ZSBiZWhhdmlvdXJzIG9yIGludGVsbGVjdHVhbCBhY3RzIGFyZSBwZXJmb3JtZWQgdG8gcmVsaWV2ZSB0aGUgZGlzdHJlc3Mgb3IgdGVuc2lvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UZW1wb3JhcnkgcmVsaWVmIOKAkyB0aGUgY29tcHVsc2l2ZSBiZWhhdmlvdXIgYnJpbmdzIGJyaWVmIGNvbWZvcnQsIGJ1dCB0aGUgYW54aWV0eSBhbmQgb2JzZXNzaW9uIHNvb24gZ28gYmFjazwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+T2JzZXNzaW9ucyBhbmQgY29tcHVsc2lvbnMgZGlmZmVyIGFtb25nIGluZGl2aWR1YWxzOyBob3dldmVyLCBhIGZldyBub3QgdW51c3VhbCBvYnNlc3Npb25zIGNvbnNpc3Qgb2Ygd29ycnkgYWJvdXQgaW5mZWN0aW9uLCBoYXJtaW5nIHlvdXJzZWxmIG9yIG90aGVycywgb3Igb2JzZXNzaW9ucyBvZiBwZXJmZWN0aW9uLiBTb21ldGltZXMgb2JzZXNzaW9ucyBhbmQgY29tcHVsc2lvbnMgYXJlIHJlbGF0ZWQsIHNvIGEgcGVyc29uIHdpdGggYSBmZWFyIG9mIGNvbnRhbWluYXRpb24gbWF5IGJlIGZvcmNlZCB0byByZXBlYXRlZGx5IHdhc2ggdGhlaXIgaGFuZHMsIGhvd2V2ZXIgY29tcHVsc2lvbnMgYWxzbyBjYW4gYmUgdG90YWxseSB1bnJlbGF0ZWQsIGNvbnNpc3Rpbmcgb2YgdGFwcGluZyBhIGZvb3QgYWdhaW4gYW5kIGFnYWluLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBzZXZlcml0eSBvZiBPQ0Qgc3ltcHRvbXMgY2FuIHJhbmdlIGdyZWF0bHkuIEZvciBhIGZldyBpbmRpdmlkdWFscywgc3ltcHRvbXMgY2FuIGJlIGZsZWV0aW5nLCB3aGlsZSBvdGhlcnMgYXJlIHVuYWJsZSB0byBwZXJmb3JtIGV2ZXJ5ZGF5IGFjdGl2aXRpZXMgZHVlIHRvIHRoZSBmYWN0IHRoZWlyIGNvbXB1bHNpb25zIGFyZSBzbyB0aW1lLWNvbnN1bWluZywgb3IgZm9yIGZlYXIgb2YgYmVpbmcgdHJpZ2dlcmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBmZWVsIHRoYXQgdGhlIGFib3ZlIGFwcGxpZXMgdG8geW91LCB0aGVyYXB5IGNhbiBncmVhdGx5IGVuaGFuY2UgeW91ciBkYXktdG8tZGF5IGZ1bmN0aW9uaW5nIGFuZCBxdWFsaXR5IG9mIGxpZmUgdGhyb3VnaCBoZWxwaW5nIHlvdSB0byB1bmRlcnN0YW5kIHlvdXIgY2lyY3Vtc3RhbmNlIGFuZCBjb2FjaGluZyB5b3UgaW4gZWZmZWN0aXZlIGNvcGluZyBzdHJhdGVnaWVzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoaWNoIHRoZXJhcGllcyB3b3VsZCBwb3NzaWJseSBoZWxwPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvZ25pdGl2ZSBiZWhhdmlvdXJhbCB0aGVyYXB5IGluY2x1ZGluZyBncmFkZWQgZXhwb3N1cmUgYW5kIHJlYWN0aW9uIHByZXZlbnRpb24sIGEgdGhlcmFweSB3aGljaCBwbGFjZXMgZW1waGFzaXMgb24gZXhwZXJpZW5jaW5nIHRoZSBvYnNlc3NpdmUgdGhvdWdodHMgd2l0aG91dCBsb29raW5nIHRvIOKAmG5ldXRyYWxpc2XigJkgdGhlbSB3aXRoIGNvbXB1bHNpdmUgYmVoYXZpb3VyLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHV1aWQ9XCJvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhbmljIEF0dGFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGFuaWMgYXR0YWNrIGlzIHRoZSBuYW1lIGdpdmVuIHRvIGEgY29sbGVjdGlvbiBvZiBzaWducyBhbmQgc3ltcHRvbXMgdGhhdCBvY2N1ciB3aGVuIGEgcGVyc29uIGlzIGV4cGVyaWVuY2luZyBleGNlc3NpdmUgYW54aWV0eS4gUGVvcGxlIHdobyBzdWZmZXIgZnJvbSB0aGlzIHR5cGUgb2YgYW54aWV0eSBhaWxtZW50IChwYW5pYyBhdHRhY2tzKSBoYXZlIHJlZ3VsYXIgYW5kIHJlcGVhdGVkIHBhbmljIGF0dGFja3Mgb2Z0ZW4gZm9yIG5vIGNsZWFyIHJlYXNvbi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JZiB5b3UgYXJlIGhhdmluZyBhIHBhbmljIGF0dGFjayB5b3UgbWF5IGV4cGVyaWVuY2UgbWVudGFsIHN5bXB0b21zIHdoaWNoIGluY2x1ZGUgYW4gb3ZlcndoZWxtaW5nIHNlbnNlIG9mIGZlYXIsIGFueGlldHkgYW5kIG5lcnZlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgY2FuIGFsc28gZXhwZXJpZW5jZSBwaHlzaWNhbCBzaWducyBhbmQgc3ltcHRvbXMgd2hpY2ggaW5jbHVkZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5OYXVzZWE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VHJlbWJsaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlN3ZWF0aW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhlYXJ0IHBhbHBpdGF0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbmNyZWFzZWQgdGVtcGVyYXR1cmU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2hvcnRuZXNzIG9mIGJyZWF0aDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DaGVzdCBwYWluPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk51bWJuZXNzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZlZWxpbmcgb2YgZHJlYWQgb3Igd29ycnkgb2YgZGVhdGg8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGluZ2xpbmcgc2Vuc2F0aW9uIGluIHlvdXIgaGFuZHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGVycm9yPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EdXJpbmcgYSBwYW5pYyBhdHRhY2sgc29tZSBwZW9wbGUgZXhwZXJpZW5jZSDigJhkZXBlcnNvbmFsaXNhdGlvbuKAmSwgd2hlcmUgeW91IGZlZWwgaW5kaWZmZXJlbnQgYW5kIHJlbW92ZWQgZnJvbSB0aGUgc2l0dWF0aW9uLCB5b3VyIGJvZHksIGFuZCB5b3VyIGVudmlyb25tZW50LiBTb21ldGltZXMgdGhlIHNpZ25zIGFuZCBzeW1wdG9tcyBvZiBhIHBhbmljIGF0dGFjayBjYW4gYmUgc28gc2V2ZXJlIHRoYXQgeW91IG1pZ2h0IGZlZWwgYXMgdGhvdWdoIHlvdSBhcmUgaGF2aW5nIGEgaGVhcnQgYXR0YWNrLiBCZWNhdXNlIHRoZSBwaHlzaWNhbCBzaWducyBvZiBhIHBhbmljIGF0dGFjayBhcmUgc28gdW5wbGVhc2FudCwgdGhvc2Ugd2hvIGFyZSBsaWtlbHkgdG8gZXhwZXJpZW5jZSBwYW5pYyBhdHRhY2tzIGFyZSBmcmlnaHRlbmVkIGluIGFudGljaXBhdGlvbiBvZiB0aGVpciBuZXh0IGF0dGFjaywgd2hpY2ggY3JlYXRlcyBhIHZpY2lvdXMgY3ljbGUgb2YgYW50aWNpcGF0b3J5IGFueGlldHkgYW5kIGZ1cnRoZXIgYWRkcyB0byB0aGUgcGFuaWMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TW9zdCBwYW5pYyBhdHRhY2tzIGxhc3QgYmV0d2VlbiBmaXZlIGFuZCB0d2VudHkgbWlucy4gVGhlIHNldmVyaXR5IGFuZCBmcmVxdWVuY3kgb2YgcGFuaWMgYXR0YWNrcyB2YXJpZXMgYW1vbmcgaW5kaXZpZHVhbHMuIFNvbWUgaW5kaXZpZHVhbHMgbWF5IGhhdmUgcGFuaWMgYXR0YWNrcyBhIGZldyB0aW1lcyBhIG1vbnRoLCBvdGhlcnMgbWF5IGV4cGVyaWVuY2UgbXVsdGlwbGUgYXR0YWNrcyBldmVyeSB3ZWVrLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBmZWVsIHRoYXQgdGhlIGFib3ZlIGFwcGxpZXMgdG8geW91LCB0aGVyYXB5IHdpbGwgYWxsb3cgeW91IHRvIHJlY29nbml6ZSBob3cgYW5kIHdoeSBwYW5pYyBhdHRhY2tzIHRha2UgcGxhY2UgYW5kIHdpbGwgdGVhY2ggeW91IGVmZmVjdGl2ZSBjb3Bpbmcgc3RyYXRlZ2llcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaGljaCB0aGVyYXBpZXMgbWlnaHQgaGVscD88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db2duaXRpdmUgQmVoYXZpb3VyYWwgVGhlcmFweSAoQ0JUKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BY2NlcHRhbmNlIGFuZCBDb21taXRtZW50IFRoZXJhcHkgKEFDVCk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSB1dWlkPVwicFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG9iaWFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BIHBob2JpYSBpcyBhIGNyaXBwbGluZyBmZWFyIG9mIGFuIGl0ZW0sIHBsYWNlLCBzY2VuYXJpbywgb3IgYW5pbWFsIHJlbGF0ZWQgdG8gYW4gdW5yZWFsaXN0aWMgbm90aW9uIG9mIGRhbmdlciBvciBoYXphcmQuIFNvbWV0aW1lcyBwaG9iaWFzIGNhbiBiZSBzbyBzZXZlcmUgdGhhdCBhIHBlcnNvbiBtaWdodCBvcmdhbmlzZSB0aGVpciBsaWZlc3R5bGVzIGFyb3VuZCBmZW5kaW5nIG9mZiB0aGUgc2l0dWF0aW9uIG9yIG9iamVjdCB0aGF0IGNhdXNlcyB0aGVtIGFueGlldHkuIFRoaXMgY2FuIHN1YnN0YW50aWFsbHkgYWZmZWN0IHRoZSBpbmRpdmlkdWFscyBkYWlseSBmdW5jdGlvbmluZyBhbmQgcmVzdHJpY3QgdGhlbSBmcm9tIGNhcnJ5aW5nIG91dCByZWd1bGFyIGFjdGl2aXRpZXMgc3VjaCBhcyBnb2luZyB0byB0aGUgc2hvcHMsIGZvciBmZWFyIG9mIGRpc2NvdmVyaW5nIHRoZSBvYmplY3Qgb2YgdGhlaXIgcGhvYmlhLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZXJlIGFyZSB0d28gdHlwZXMgb2YgcGhvYmlhIOKAkyBzaW1wbGUgYW5kIGNvbXBsZXguPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U29tZSBleGFtcGxlcyBvZiBzaW1wbGUgcGhvYmlhcyBhcmU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QW5pbWFsIOKAkyB3aGljaCBpbmNsdWRlIHJvZGVudHMsIGRvZ3MsIHNwaWRlcnMsIGJpcmRzIGV0YzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Cb2RpbHkg4oCTIGluY2x1ZGluZyBibG9vZCwgdm9taXQsIG9yIGluamVjdGlvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RW52aXJvbm1lbnRhbCDigJMgd2hpY2ggaW5jbHVkZSBoZWlnaHRzLCBkZWVwIHdhdGVyLCBhbmQgZ2VybXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2V4dWFsIOKAkyBzdWNoIGFzIHBlcmZvcm1hbmNlIGFueGlldHkgb3Igd29ycnkgb2Ygc2V4dWFsbHkgdHJhbnNtaXR0ZWQgaW5mZWN0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TaXR1YXRpb25hbCDigJMgaW5jbHVkaW5nIGZseWluZyBvciBnb2luZyB0byB0aGUgZG9jdG9yPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb21lIGV4YW1wbGVzIG9mIGNvbXBsZXggcGhvYmlhcyBhcmU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWdvcmFwaG9iaWEg4oCTIGZlYXIgb2Ygb3BlbiBhcmVhcywgY3Jvd2RlZCBwbGFjZXMsIHRyYXZlbGluZyBvciBwdWJsaWMgdHJhbnNwb3J0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNvY2lhbCBwaG9iaWEgKHNvY2lhbCBhbnhpZXR5KSDigJMgZmVhciBvZiBzb2NpYWwgc2l0dWF0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2hpY2ggY3VyZXMgbWF5IGhlbHA/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29nbml0aXZlIEJlaGF2aW91cmFsIHRoZXJhcHkgKENCVCk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NaW5kZnVsbmVzcyBiYXNlZCBtZXRob2RzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHV1aWQ9XCJxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvc3QgTmF0YWwgRGVwcmVzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TW9yZSB0aGFuIHNpbXBseSB0aGUg4oCYYmFieSBibHVlc+KAmSB0aGF0IG1hbnkgd29tZW4gZXhwZXJpZW5jZSBmb3Igc29tZSB3ZWVrcyBhZnRlciBnaXZpbmcgYmlydGgsIHBvc3RuYXRhbCBkZXByZXNzaW9uIGlzIGEgc2VyaW91cyBtZW50YWwgaGVhbHRoIGNvbmRpdGlvbiB0aGF0IGNvbW1vbmx5IGFmZmVjdHMgd29tZW4gYnV0IGFsc28gY2FuIGFmZmVjdCB0aGVpciBwYXJ0bmVycy4gVGhpcyB0eXBlIG9mIGRlcHJlc3Npb24gb2NjdXJzIGR1cmluZyBwcmVnbmFuY3kgb3IgYWZ0ZXIgYmlydGguIEZlZWxpbmdzIG9mIHNldmVyZSBzYWRuZXNzLCBhbnhpZXR5LCBhbmQgdGlyZWRuZXNzIGNhbiBtYWtlIGl0IGRpZmZpY3VsdCBmb3IgbmV3IG1vdGhlcnMgdG8gY29tcGxldGUgZXZlcnlkYXkgYWN0aXZpdGllcyBmb3IgdGhlbXNlbHZlcyBvciBmb3IgdGhlaXIgYmFiaWVzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvbWUgb2YgdGhlIHVzdWFsIHNpZ25zIG9mIHBvc3RuYXRhbCBkZXByZXNzaW9uIGluY2x1ZGU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UGVyc2lzdGVudCBmZWVsaW5nIG9mIHVuaGFwcGluZXNzIG9yIGxvdyBtb29kPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxvc3Mgb2YgaW50ZXJlc3Qgd2l0aCB0aGUgd29ybGQgYXJvdW5kIHlvdSBhbmQgbm8gbG9uZ2VyIHRha2luZyBwYXJ0IGluIGFjdGl2aXRpZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TGFjayBvZiBlbmVyZ3kgYW5kIGZlZWxpbmcgdGlyZWQgbW9zdCBvZiB0aGUgdGltZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GZWVsaW5nIHRoYXQgeW91IGFyZSB1bmFibGUgdG8gbG9vayBhZnRlciB5b3VyIGNoaWxkPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlByb2JsZW1zIGNvbmNlbnRyYXRpbmcgYW5kIG1ha2luZyBjaG9pY2VzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkxvc3Mgb2YgYXBwZXRpdGUgb3IgaW5jcmVhc2VkIHVyZ2UgZm9yIGZvb2Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RmVlbGluZ3Mgb2YgZ3VpbHQsIGhvcGVsZXNzbmVzcywgYW5kIGd1aWx0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRpZmZpY3VsdHkgYm9uZGluZyB3aXRoIHlvdXIgaW5mYW50IHdpdGggYSBzZW5zZSBvZiBpbmRpZmZlcmVuY2UgdG93YXJkcyB0aGUgY2hpbGQgYW5kIG5vIGVuam95bWVudCBpbiB0aGUgY2hpbGTigJlzIGNvbXBhbnkuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZyaWdodGVuaW5nIHRob3VnaHRzIHN1Y2ggYXMgd2lzaGluZyB0byBodXJ0IHlvdXIgdG9kZGxlciwgdGhlc2UgY2FuIGJlIHZlcnkgZnJpZ2h0ZW5pbmcgYW5kIHRyYXVtYXRpYywgYnV0IHRoZXkgYXJlIG5vdCBvZnRlbiBhY3RlZCB1cG9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRoaW5raW5nIGFib3V0IHNlbGYtaGFybSBhbmQgc3VpY2lkZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IGZlZWwgdGhhdCB0aGUgYWJvdmUgYXBwbGllcyB0byB5b3UsIGl0IGlzIHZpdGFsIHRvIHNlZWsgaGVscCBhcyBxdWlja2x5IGFzIHBvc3NpYmxlIGJlY2F1c2UgdGhlIHN5bXB0b21zIGNvdWxkIGhhdmUgYSBjb25zaWRlcmFibGUgZWZmZWN0IG9uIHlvdSBhbmQgeW91ciBjaGlsZC4gV2l0aCBhbiBhcHByb3ByaWF0ZSB0aGVyYXB5LCBtb3N0IHdvbWVuIG1ha2UgYSBmdWxsIHJlY292ZXJ5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoaWNoIHRyZWF0bWVudHMgY291bGQgaGVscD88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db2duaXRpdmUgYmVoYXZpb3VyYWwgdGhlcmFweSAoQ0JUKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db2duaXRpdmUgYW5hbHl0aWMgdGhlcmFweSAoQ0FUKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHV1aWQ9XCJyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvc3QgVHJhdW1hdGljIFN0cmVzcyBEaXNvcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UG9zdC10cmF1bWF0aWMgc3RyZXNzIGRpc29yZGVyIGlzIGFuIGFueGlldHkgYWlsbWVudCB0aGF0IGNhbiBkZXZlbG9wIGluIHJlc3BvbnNlIHRvIGV4cGVyaWVuY2luZyBhIHNldmVyZWx5IHdvcnJ5aW5nIHNpdHVhdGlvbi4gU29tZSBleGFtcGxlcyBvZiB0cmF1bWF0aWMgZXZlbnRzIHRoYXQgd291bGQgcHJvbW90ZSBQVFNEIGluY2x1ZGUgbmF0dXJhbCBkaXNhc3RlcnMsIHRlcnJvciBhc3NhdWx0cywgdmlvbGVuY2UsIGFidXNlLCBzZXZlcmUgbmVnbGVjdCwgb3IgdHJhZmZpYyBpbmNpZGVudHMsIGhvd2V2ZXIgYSB0cmF1bWF0aWMgZXZlbnQgbWF5IGJlIGFueSBleHBlcmllbmNlIHdoZXJlaW4geW914oCZcmUgaW4gZGFuZ2VyLCBvciB5b3Ugd2l0bmVzcyBzb21lb25lIGVsc2UgaW4gZGFuZ2VyLiBQZW9wbGUgdG9ybWVudGVkIGJ5IFBUU0QgZnJlcXVlbnRseSByZWxpdmUgdGhlIHRyaWdnZXJpbmcgZXZlbnQgdGhyb3VnaCBuaWdodG1hcmVzIGFuZC9vciBmbGFzaGJhY2tzIHRoYXQgY291bGQgYXJpc2UgYXQgYW55IHRpbWUuIFRoZSB1bnBsZWFzYW50bmVzcyBhbmQgc2V2ZXJpdHkgb2YgdGhlaXIgc2lnbnMgYW5kIHN5bXB0b21zIGNhbiBtYWtlIGl0IHZlcnkgaGFyZCBmb3Igc3VmZmVyZXJzIHRvIGdvIGFib3V0IHRoZWlyIGRheS10by1kYXkgbGl2ZXMuIEFsdGhvdWdoIHN5bXB0b21zIGNvbW1vbmx5IG9jY3VyIHJpZ2h0IGFmdGVyIHRoZSBldmVudCwgcGVvcGxlIHdob+KAmXZlIGV4cGVyaWVuY2VkIGFidXNlLCBuZWdsZWN0LCBvciB2aW9sZW5jZSwgY2FuIGFsc28gZXhwZXJpZW5jZSBjb21wbGV4IFBUU0QsIGluIHdoaWNoIGFkb2xlc2NlbnQgdHJhdW1hIG1heSBjYXVzZSBQVFNEIHN5bXB0b21zIHllYXJzIGxhdGVyLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBUU0Qgc3ltcHRvbXMgaW5jbHVkZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SZS1leHBlcmllbmNpbmcgc3VjaCBldmVudHMgYXMgZmxhc2hiYWNrcywgbmlnaHRtYXJlcywgcmVwZXRpdGl2ZSBpbWFnZXMgYW5kIGJvZGlseSBzZW5zYXRpb25zIChjb25zaXN0aW5nIG9mIG5hdXNlYSwgYWNoZSwgc3dlYXRpbmcsIG9yIHRyZW1ibGluZyk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QXZvaWRhbmNlIGFuZCBlbW90aW9uYWwgbnVtYmluZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5IeXBlci1hcm91c2FsIHRvZ2V0aGVyIHdpdGggaXJyaXRhYmlsaXR5LCBpcnJpdGF0ZWQgb3V0YnVyc3RzLCBzbGVlcGluZyBwcm9ibGVtcywgdHJvdWJsZSBjb25jZW50cmF0aW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb21ldGltZXMgcGVvcGxlIHN0cmlja2VuIGJ5IFBUU0QgY2FuIHN1ZmZlciBmcm9tIG90aGVyIGVtb3Rpb25hbCBwcm9ibGVtcyB3aGljaCBpbmNsdWRlcyBhbnhpZXR5LCBtZWxhbmNob2x5LCBzZWxmLWhhcm0gb3IgZW5nYWdlIGluIHN1YnN0YW5jZSBhYnVzZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JZiB5b3UgZmVlbCB0aGF0IHRoZSBhYm92ZSBhcHBsaWVzIHRvIHlvdSwgdGhlcmFweSB3aWxsIGFsbG93IHlvdSB0byBvdmVyY29tZSB5b3VyIHNpdHVhdGlvbiBhbmQgZ3JlYXRseSBlbmhhbmNlIHlvdXIgcXVhbGl0eSBvZiBsaWZlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoaWNoIHRoZXJhcGllcyBtYXkgaGVscD88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db2duaXRpdmUtYmVoYXZpb3VyYWwgdGhlcmFweSAoQ0JUKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TY2hlbWEgdGhlcmFweSAoU1QpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRpYWxlY3RpY2FsIGJlaGF2aW91ciB0aGVyYXB5IChEQlQpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gdXVpZD1cInNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBzeWNob3NleHVhbCBDb25kaXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Qc3ljaG9zZXh1YWwgaXNzdWVzIGFyZSBzZXh1YWwgdHJvdWJsZXMgdGhhdCBoYXZlIGEgcGh5c2lvbG9naWNhbCBmb3VuZGF0aW9uLCBhbmQgdGhleSBhcmUgZmFyIG1vcmUgY29tbW9uIHRoYW4geW91IG1pZ2h0IHN1cHBvc2UuIEFsdGhvdWdoIHRoZXJlIGFyZSBtYW55IGNhdXNlcywgcHN5Y2hvc2V4dWFsIGlzc3VlcyBjYW4gY29tZSBhYm91dCBhcyBhIHJlc3VsdCBvZiBzdHJlc3MsIGFueGlldHksIGRlcHJlc3Npb24sIG9yIGR1ZSB0byBwcmV2aW91cyB0cmF1bWF0aWMgZXhwZXJpZW5jZXMuIElzc3VlcyBjYW4gcmFuZ2UgaW4gaW50ZW5zaXR5IGFuZCBkdXJhdGlvbjsgc29tZSBtYXkgYmUgc2ltcGxlIGFuZCBmbGVldGluZyB3aGlsZSBvdGhlciBwc3ljaG9zZXh1YWwgaXNzdWVzIGNhbiBiZSBtb3JlIGxvbmctdGVybS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb21lIGV4YW1wbGVzIG9mIHBzeWNob3NleHVhbCBpc3N1ZXMgaW5jbHVkZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Mb3NzIG9mIGxpYmlkbzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QYWluZnVsIGludGVyY291cnNlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRpZmZpY3VsdGllcyBhY2hpZXZpbmcgb3JnYXNtPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFyb3VzYWwgcHJvYmxlbXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RXJlY3RpbGUgZHlzZnVuY3Rpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UHJlbWF0dXJlIGVqYWN1bGF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkJyZWFrZG93biBpbiBhIGNvdXBsZeKAmXMgc2V4dWFsIHJlbGF0aW9uc2hpcDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IGZlZWwgdGhhdCB0aGUgYWJvdmUgYXBwbGllcyB0byB5b3UsIHRoZXJhcHkgd2lsbCBhbGxvdyB5b3UgdG8gcmVjb2duaXplIHRoZSB1bmRlcmx5aW5nIGNhdXNlcyBvZiB5b3VyIHByb2JsZW1zIGFuZCB0cml1bXBoIG92ZXIgdGhlbSBieSBwdXR0aW5nIHN0ZXBzIGluIHBsYWNlIHRvIG1hbmFnZSBzdWNoIGRpZmZpY3VsdGllcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaGljaCB0aGVyYXBpZXMgd291bGQgcG9zc2libHkgYXNzaXN0PzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkEgdmFyaWV0eSBvZiB0cmVhdG1lbnQgYW5kIHRoZXJhcHkgb3B0aW9ucyBhcmUgYXZhaWxhYmxlIGZvciB0aG9zZSBzdWZmZXJpbmcgZnJvbSBwc3ljaG9zZXh1YWwgaXNzdWVzLCBvdXIgYWR2aWNlIHdvdWxkIGJlIHRvIGNvbnN1bHQgb25lIG9mIG91ciBtZWRpY2FsIHByb2Zlc3Npb25hbHMgdG8gZGlzY3VzcyB0aGUgbW9zdCBhcHByb3ByaWF0ZSBjb3Vyc2Ugb2YgYWN0aW9uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSB1dWlkPVwidFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVsYXRpb25zaGlwIERpZmZpY3VsdGllcyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhhdmluZyBoZWFsdGh5IHJlbGF0aW9uc2hpcHMgd2l0aCBvdGhlcnMg4oCTIGJlIGl0IGZyaWVuZHMsIHJlbGF0aXZlcywgY29sbGVhZ3Vlcywgb3Igc2lnbmlmaWNhbnQgb3RoZXJzIOKAkyBnaXZlcyB1cyB3aXRoIHNvIG1hbnkgYmVuZWZpdHMgYW5kIGlzIGNydWNpYWwgZm9yIG91ciBtZW50YWwgaGVhbHRoIGFuZCB3ZWxsYmVpbmcuIEFzIHdl4oCZcmUgYWxsIG91ciBvd24gcGVyc29uIHdpdGggZGlmZmVyaW5nIHZpZXdzIGFuZCBvcGluaW9ucywgdGVuc2lvbnMgaW4gY2VydGFpbiByZWxhdGlvbnNoaXBzIGNhbiBncm93IG92ZXIgdGltZS4gSG93ZXZlciwgZXhwZXJpZW5jaW5nIGZyZXF1ZW50IG9yIGV4Y2Vzc2l2ZSB0ZW5zaW9uL2NvbmZsaWN0IHdpdGhpbiByZWxhdGlvbnNoaXBzIGlzIHZlcnkgc2VyaW91cywgYnV0IGNvbW1vbiwgYW5kIGNhbiBoYXZlIGEgc3Vic3RhbnRpYWwgaW1wYWN0IG9uIHlvdXIgd2VsbGJlaW5nIGFuZCBxdWFsaXR5IG9mIGxpZmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW914oCZcmUgZmluZGluZyBpdCB0b3VnaCB0byBjb252ZXJzZSB3aXRoIHlvdXIgcGFydG5lciBhYm91dCB5b3VyIGlzc3VlcywgYXJlIGV4cGVyaWVuY2luZyBjaGFsbGVuZ2VzIHdpdGggeW91ciBlbXBsb3llciBvciBjb2xsZWFndWVzLCBvciBmaW5kaW5nIGl0IGRpZmZpY3VsdCB0byBlbmdhZ2Ugd2l0aCB5b3VyIGZhbWlseSwgdGhlcmFweSBjYW4gYmUgYSBzYWZlIGFyZWEgZm9yIHlvdSB0byB0YWxrIGFib3V0IHlvdXIgaXNzdWVzLCBnZXQgdG8gdGhlIHJvb3Qgb2YgdGhlIGRpZmZpY3VsdGllcywgYW5kIGRldmVsb3Agd2F5cyBpbiB3aGljaCB0byByZXNvbHZlIHRoZSBjb25mbGljdC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb21lIHNpZ25zIHRoYXQgeW91IGFyZSBleHBlcmllbmNpbmcgZGlmZmljdWx0aWVzIGluIHlvdXIgcmVsYXRpb25zaGlwcyBhcmU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+wrcgVW5lcXVhbCBnaXZlIGFuZCB0YWtlLCBmZWVsaW5nIGFzIHRob3VnaCB5b3XigJlyZSBhbHdheXMgaGF2aW5nIHRvIGhlbHAgdGhlIG9wcG9zaXRlIGluZGl2aWR1YWwgd2l0aCBubyByZWNpcHJvY2F0aW9uLCBvciB5b3XigJlyZSBvdmVybHkgZGVwZW5kZW50IG9uIHRoZSBvdGhlciBpbmRpdmlkdWFsLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7CtyBGZWVsaW5nIGFzIHRob3VnaCB5b3XigJlyZSB3YWxraW5nIG9uIGVnZ3NoZWxscywgdGhhdCB5b3UgY2Fubm90IG1lbnRpb24gY2VydGFpbiBzdWJqZWN0cyBkdWUgdG8gdGhlIGZhY3QgdGhhdCB5b3VyIHBhcnRuZXIgd2lsbCByZWFjdCBuZWdhdGl2ZWx5IGFuZC9vciBkaXNwcm9wb3J0aW9uYXRlbHkuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPsK3IENvbnRyb2wgcHJvYmxlbXMsIHdoZXJlIHlvdSBzZW5zZSB0aGF0IHlvdSBhbHdheXMgbmVlZCB0byBkbyB3aGF0IHRoZSBvcHBvc2l0ZSBpbmRpdmlkdWFsIGFza3MuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPsK3IEZlZWxpbmcgbWlzdW5kZXJzdG9vZCBvciBhcyBldmVuIHRob3VnaCB5b3UgYXJlIG5vdCBiZWluZyBsaXN0ZW5lZCB0byBjb3JyZWN0bHkuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPsK3IEVtb3Rpb25hbCwgdmVyYmFsLCBvciBwaHlzaWNhbCBhYnVzZS4gRG8geW91IGZlZWwgYXMgdGhvdWdoIHlvdSBhcmUgZnJlcXVlbnRseSBwdXQgZG93biBvciBvdmVybG9va2VkLCBvciB0aGF0IGFyZ3VtZW50cyByZXN1bHQgaW4gdmlvbGVuY2U/PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JZiB5b3UgZmVlbCB0aGF0IGFueSBvZiB0aGUgYWJvdmUgYXBwbGllcyB0byB5b3UgYW5kIHlvdXIgcmVsYXRpb25zaGlwcywgdGhlcmFweSBjYW4gaGVscCB5b3UgZ2V0IHRvIHRoZSByb290IG9mIHlvdXIgcHJvYmxlbXMgYW5kIGhlbHAgeW91IGRldmVsb3AgZWZmZWN0aXZlIGNvbW11bmljYXRpb24gbWV0aG9kcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaGljaCB0aGVyYXBpZXMgbWlnaHQgYXNzaXN0PzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvZ25pdGl2ZSBCZWhhdmlvdXJhbCB0aGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNjaGVtYSB0aGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvZ25pdGl2ZSBhbmFseXRpYyB0aGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkR5bmFtaWMgaW50ZXJwZXJzb25hbCB0aGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk5hcnJhdGl2ZSB0aGVyYXB5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvdXBsZXMgdGhlcmFweTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHV1aWQ9XCJ1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBTbGVlcCBEaXNvcmRlcnMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBhbGwgaGF2ZSBwcm9ibGVtIGZhbGxpbmcgYXNsZWVwIG5vdyBhbmQgYWdhaW4sIGVzcGVjaWFsbHkgaWYgd2UgYXJlIGZlZWxpbmcgcGFydGljdWxhcmx5IHN0cmVzc2VkLiBIb3dldmVyLCByZWd1bGFyIGFuZCBzYXRpc2ZhY3Rvcnkgc2xlZXAgaXMgY3JpdGljYWwsIGFzIHdoaWxlIHdlIHNsZWVwLCBvdXIgYm9kaWVzIHBoeXNpY2FsbHkgYW5kIG1lbnRhbGx5IHJlc3RvcmUgdGhlbXNlbHZlcywgcGVybWl0dGluZyB1cyB0byBnbyBhYm91dCBvdXIgYnVzeSBsaXZlcy4gSWYgc2xlZXAgaXNzdWVzIGFyZSBhIHJlZ3VsYXIgb2NjdXJyZW5jZSwgeW91IG1heSBiZSBzdWZmZXJpbmcgZnJvbSBhIHNsZWVwIGRpc29yZGVyLCBhbmQgbGVmdCB1bnRyZWF0ZWQsIHRoaXMgY291bGQgaGF2ZSBhIGhhcm1mdWwgaW1wYWN0IG9uIHlvdXIgZGFpbHkgZnVuY3Rpb25pbmcuIE9uZSBvZiB0aGUgbW9zdCBjb21tb24gdmFyaWV0aWVzIG9mIHNsZWVwIGRpc29yZGVycyBpcyBpbnNvbW5pYSB3aGljaCBpcyBjaGFyYWN0ZXJpemVkIGJ5IHdheSBvZiBhbiBpbmFiaWxpdHkgdG8gc2xlZXAgb3Igc2xlZXAgd2VsbCBhdCBuaWdodC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb21lIGNvbW1vbnBsYWNlIHNpZ25zIG9mIGluc29tbmlhIGluY2x1ZGU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGlmZmljdWx0eSBmYWxsaW5nIGFzbGVlcCBhdCBuaWdodCBvciBnb2luZyB0byBzbGVlcCBhZ2FpbiBhZnRlciB3YWtpbmcgZHVyaW5nIHRoZSBuaWdodDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XYWtpbmcgdXAgZnJlcXVlbnRseSBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBuaWdodDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Zb3UgYXJlIHJlbGlhbnQgdXBvbiBtZWRpY2F0aW9uIHRvIHNsZWVwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNsZWVwaW5lc3MgYW5kIGxvdyBlbmVyZ3kgZHVyaW5nIHRoZSBkYXk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2xlZXAgZmVlbHMgdW5yZWZyZXNoaW5nIGFuZCB5b3Ugd2FrZSB1cCBmZWVsaW5nIHdvcm4tb3V0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRoZXJlIGFsc28gYXJlIG90aGVyIGZvcm1zIG9mIHNsZWVwIGRpc29yZGVycyBpbmNsdWRpbmcgc2xlZXAgYXBub2VhLCByZXN0bGVzcyBsZWcgc3luZHJvbWUgYW5kIG5hcmNvbGVwc3kuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JZiB5b3UgZmVlbCB0aGF0IHRoZSBhYm92ZSBhcHBsaWVzIHRvIHlvdSwgdGhlcmFweSBjYW4gZ3JlYXRseSBoZWxwIHRvIGVuaGFuY2UgeW91ciDigJhzbGVlcCBoeWdpZW5l4oCZIGFuZCB5b3VyIHRoZXJhcGlzdCBjYW4gdGVhY2ggeW91IHBvd2VyZnVsIHN0cmF0ZWdpZXMgZm9yIG1hbmFnaW5nIHlvdXIgc2xlZXAuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2hpY2ggdHJlYXRtZW50IG9wdGlvbnMgbWlnaHQgYXNzaXN0PzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvZ25pdGl2ZSBiZWhhdmlvdXJhbCByZW1lZHkgKENCVCk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gdXVpZD1cInZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNvY2lhbCBBbnhpZXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb2NpYWwgYW54aWV0eSBpcyBhIGNvbW1vbiBhbnhpZXR5IGRpc29yZGVyIGNoYXJhY3Rlcml6ZWQgYnkgY2hyb25pYyBhbmQgb3ZlcndoZWxtaW5nIGZlYXIgb2Ygc29jaWFsIHNpdHVhdGlvbnMuIFdlIGNhbiBhbGwgZ2V0IHNsaWdodGx5IGFueGlvdXMgZHVyaW5nIHNvY2lhbCBzaXR1YXRpb25zIHNvbWV0aW1lcywgYnV0IGEgcGVyc29uIHN0cmlja2VuIGJ5IHNvY2lhbCBhbnhpZXR5IHdpbGwgd29ycnkgbW9yZSByZWd1bGFybHkgYW5kIHdpdGggZ3JlYXRlciBpbnRlbnNpdHkgYXQgdGhlIGNvbmNlcHQgb2YgYSBjZXJ0YWluIHNvY2lhbCBpbnRlcmFjdGlvbnMuIFNvbWV0aW1lcyB0aG9zZSB3b3JyaWVzIG1heSBiZSB2ZXJ5IHNwZWNpZmljLCB3aGljaCBtYXkgaW5jbHVkZSB0aGUgZmVhciBvZiBmYWxsaW5nIG92ZXIgaW4gdGhlIGZyb250IG9mIG90aGVycyBvciBiZWluZyBsYXVnaGVkIGF0LiBUaGVzZSBpc3N1ZXMgY2FuIG1ha2UgaXQgdmVyeSBoYXJkIGZvciBpbmRpdmlkdWFscyB0byBnbyBhYm91dCBub3JtYWwgZGF5LXRvLWRheSB0YXNrcyBzdWNoIGFzIG1ha2luZyB0ZWxlcGhvbmUgY2FsbHMgb3IgaW50ZXJhY3Rpbmcgd2l0aCBjYXNoaWVycyBpbiBhIHNob3AuIEluIHRoaXMgbWFubmVyLCBzb2NpYWwgYW54aWV0eSBjYW4gc2lnbmlmaWNhbnRseSBkaXNydXB0IGRhaWx5IGZ1bmN0aW9uaW5nIGFuZCBoYXZlIG5lZ2F0aXZlIGNvbnNlcXVlbmNlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BIG51bWJlciBvZiB0aGUgY29tbW9uIHNvY2lhbCBhbnhpZXR5IHNpZ25zIGluY2x1ZGU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RmVhciBvZiBldmVyeWRheSBhY3Rpdml0aWVzIHN1Y2ggYXMgbWFraW5nIHBob25lIGNhbGxzIG9yIGdvaW5nIHRvIHRoZSBzaG9wczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Mb3cgc2VsZi13b3J0aDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GZWFyIG9mIGJlaW5nIGNyaXRpY2lzZWQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QXZvaWRpbmcgZXllIGNvbnRhY3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TWlzdXNlIG9mIGRydWdzIG9yIGFsY29ob2wgdG8gYWlkIHRoZW1zZWx2ZXMgZHVyaW5nIHNvY2lhbCBpbnRlcmFjdGlvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBmZWVsIHRoYXQgdGhlIGFib3ZlIG1heSBhcHBseSB0byB5b3UsIHRoZXJhcHkgY2FuIGJlIGV4dHJlbWVseSBoZWxwZnVsIGluIHN1cHBvcnRpbmcgeW91IHRvIGNvbWUgdG8gdGVybXMgd2l0aCB0aGUgb3JpZ2luIG9mIHlvdXIgc29jaWFsIGFueGlldHkgYW5kIGNhbiBoZWxwIHlvdSB0byBvdmVyY29tZSBpdC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaGljaCB0cmVhdG1lbnRzIHdvdWxkIHBvc3NpYmx5IGhlbHA/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29nbml0aXZlIEJlaGF2aW91cmFsIHRoZXJhcHk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29nbml0aXZlIEFuYWx5dGljIHRoZXJhcHk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSB1dWlkPVwid1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TdHJlc3MgaXMgdGhlIGJvZHnigJlzIHdheSBvZiByZXNwb25kaW5nIHRvIGNlcnRhaW4gc2l0dWF0aW9ucyB3aGljaCBtYXkgYmUgZGVtYW5kaW5nIG9yIHRoYXQgY2FuIGJlIHRocmVhdGVuaW5nLCBpbmNsdWRpbmcgZmluYW5jaWFsIGRpZmZpY3VsdGllcywgaXNzdWVzIGF0IHdvcmssIG9yIHJlbGF0aW9uc2hpcCB0cm91Ymxlcy4gV2hlbiB3ZSBleHBlcmllbmNlIGEgdGhyZWF0LCBvdXIgYm9kaWVzIHNoaWZ0IGludG8g4oCYZmlnaHQgb3IgZmxpZ2h04oCZIG1vZGUgd2hlcmVpbiB0aGV5IHJlbGVhc2Ugc3RyZXNzIGhvcm1vbmVzIHRvIHByZXBhcmUgZm9yIGVtZXJnZW5jeSBtb3ZlbWVudCB0byBkZWZlbmQgdXMgZnJvbSB0aGUgdGhyZWF0LiBJZiBzb21lb25lIGlzIG5vdCBhYmxlIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBkYWlseSBzdHJlc3MgYW5kIGxpZmUtdGhyZWF0ZW5pbmcgb2NjYXNpb25zLCB0aGlzIGNvdWxkIHJlc3VsdCBpbiBzZXZlcmUgYW5kL29yIGNvbW1vbiBzdHJlc3MgaXNzdWVzIGFuZCBhIGxhY2sgb2YgYWJpbGl0eSB0byBjb250cm9sIGl0IGVmZmVjdGl2ZWx5IGNhbiBjYXVzZSBmdXJ0aGVyIHByb2JsZW1zIGFuZCBiZWNvbWUgZGViaWxpdGF0aW5nLiBNYW55IGhlYWx0aCB0cm91YmxlcyBjYW4gYmUgZXhhY2VyYmF0ZWQgYnkgc3RyZXNzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvbWUgb2YgdGhlIGNvbW1vbiBzeW1wdG9tcyBvZiBzdHJlc3MgaW5jbHVkZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NZW1vcnkgaXNzdWVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkluYWJpbGl0eSB0byBwYXkgYXR0ZW50aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFueGlvdXMgb3IgcmFjaW5nIG1pbmQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29uc3RhbnQgZmVhcjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JcnJpdGFiaWxpdHkgb3IgcXVpY2sgbW9vZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GZWVsaW5nIG92ZXJ3aGVsbWVkPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1vb2RpbmVzczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BY2hlcyBhbmQgcGFpbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q2hlc3QgcGFpbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UHJvY3Jhc3RpbmF0aW9uIG9yIG5lZ2xlY3RpbmcgcmVzcG9uc2liaWxpdGllczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5OZXJ2b3VzIGhhYml0cyAoZS5nLiBuYWlsIGJpdGluZyk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBmZWVsIHRoYXQgeW91IGFyZSBleHBlcmllbmNpbmcgaW50ZW5zZSBvciBmcmVxdWVudCBzdHJlc3MsIHRoZXJhcHkgY2FuIGFzc2lzdCB5b3UgaW4gdW5kZXJzdGFuZGluZyBjYXVzZXMgb2Ygc3RyZXNzIGFuZCBoZWxwIHlvdSBiZWNvbWUgYXdhcmUgb2Ygd2hhdCBlbGVtZW50cyBtaWdodCBiZSBtYWtpbmcgeW91ciBzdHJlc3Mgd29yc2UuIFlvdXIgdGhlcmFwaXN0IGNhbiBhbHNvIHRlYWNoIHlvdSBwb3dlcmZ1bCB0ZWNobmlxdWVzIHRvIG1hbmlwdWxhdGUgeW91ciBzdHJlc3MsIGluY2x1ZGluZyByZWxheGF0aW9uIHN0cmF0ZWdpZXMsIGluIGFuIGVmZm9ydCB0byBncmVhdGx5IGltcHJvdmUgeW91ciBxdWFsaXR5IG9mIGxpZmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2hpY2ggcmVtZWRpZXMgd291bGQgcG9zc2libHkgaGVscD88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db2duaXRpdmUgYmVoYXZpb3VyYWwgdGhlcmFweTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHV1aWQ9XCJ4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBXb3JrIFJlbGF0ZWQgU3RyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5FbXBsb3ltZW50IGNhbiBoYXZlIG1hbnkgc3Vic3RhbnRpYWwgYmVuZWZpdHMgZm9yIHlvdXIgbWVudGFsIGhlYWx0aCBiZWNhdXNlIGl0IHByb3ZpZGVzIHlvdSB3aXRoIGEgc3RydWN0dXJlZCByb3V0aW5lLCBhbiBpbmNvbWUsIGFuZCBvcHBvcnR1bml0aWVzIHRvIHN1Y2NlZWQuIEhvd2V2ZXIsIG9uIG9jY2FzaW9uIHByb2JsZW1zIGF0IHdvcmsgY2FuIGJlIGEgc291cmNlIG9mIGdyZWF0IHN0cmVzcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TdHJlc3MgaXMgdGhlIGJvZHnigJlzIHdheSBvZiByZXNwb25kaW5nIHRvIGNlcnRhaW4gc2l0dWF0aW9ucyB3aGljaCBtYXkgYmUgZGVtYW5kaW5nIG9yIHRoYXQgY2FuIGJlIHRocmVhdGVuaW5nLiBXaGVuIHdlIGV4cGVyaWVuY2UgYSB0aHJlYXQsIG91ciBib2RpZXMgc2hpZnQgaW50byDigJhmaWdodCBvciBmbGlnaHTigJkgbW9kZSB3aGVyZWluIHRoZXkgcmVsZWFzZSBzdHJlc3MgaG9ybW9uZXMgdG8gcHJlcGFyZSBmb3IgZW1lcmdlbmN5IG1vdmVtZW50IHRvIGRlZmVuZCB1cyBmcm9tIHRoZSB0aHJlYXQuIEJlaW5nIHVuZGVyIGEgZGVncmVlIG9mIHByZXNzdXJlIGlzIG5vcm1hbCBhbmQgb2NjYXNpb25hbGx5IGEgZmVlbGluZyBvZiBzdHJlc3MgbWF5IGJlIGEgdmVyeSBnb29kIG1vdGl2YXRvciB0byBlZmZpY2llbnRseSBmaW5pc2ggYSBwaWVjZSBvZiB3b3JrIGZvciBleGFtcGxlLiBIb3dldmVyLCB0aWdodCBjdXQtb2ZmIGRhdGVzLCBsZW5ndGh5IGhvdXJzLCB0b3VnaCBjb2xsZWFndWVzLCBhbmQgZW5kbGVzcyB0YXNrcyBjYW4gaW5mbGljdCBzZXZlcmUgYW5kL29yIGZyZXF1ZW50IHN0cmVzcyB0aGF0IGNhbiBiZSBvdmVyd2hlbG1pbmcuIFRoaXMgcHJlc3N1cmUgY2FuIGFmZmVjdCB5b3VyIHByb2R1Y3RpdmVuZXNzIGFuZCB3b3JrIHBlcmZvcm1hbmNlLCBoYXJtIHlvdXIgcGh5c2ljYWwgYW5kIG1lbnRhbCBoZWFsdGgsIGFuZCBpbXBhaXIgeW91ciByZWxhdGlvbnNoaXBzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvbWUgb2YgdGhlIHNpZ25zIG9mIHN0cmVzcyBpbmNsdWRlOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1lbW9yeSBpc3N1ZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SW5hYmlsaXR5IHRvIHBheSBhdHRlbnRpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QW54aW91cyBvciByYWNpbmcgbWluZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db25zdGFudCB3b3JyeTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JcnJpdGFiaWxpdHkgb3Igc2hvcnQgdGVtcGVyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZlZWxpbmcgb3ZlcndoZWxtZWQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TW9vZGluZXNzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFjaGVzIGFuZCBwYWluczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DaGVzdCBwYWluczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Qcm9jcmFzdGluYXRpb24gb3IgbmVnbGVjdGluZyByZXNwb25zaWJpbGl0aWVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk5lcnZvdXMgaGFiaXRzIChlLmcuIG5haWwgYml0aW5nLCBwYWNpbmcpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JZiB5b3UgZmVlbCB0aGF0IHlvdSBhcmUgZXhwZXJpZW5jaW5nIGludGVuc2Ugb3IgZnJlcXVlbnQgc3RyZXNzLCB0aGVyYXB5IGNhbiBhc3Npc3QgeW91IGluIHVuZGVyc3RhbmRpbmcgY2F1c2VzIG9mIHN0cmVzcyBhbmQgaGVscCB5b3UgYmVjb21lIGF3YXJlIG9mIHdoYXQgZWxlbWVudHMgbWlnaHQgYmUgbWFraW5nIHlvdXIgc3RyZXNzIHdvcnNlLiBZb3VyIHRoZXJhcGlzdCBjYW4gYWxzbyB0ZWFjaCB5b3UgcG93ZXJmdWwgdGVjaG5pcXVlcyB0byBtYW5pcHVsYXRlIHlvdXIgc3RyZXNzLCBpbmNsdWRpbmcgcmVsYXhhdGlvbiBzdHJhdGVnaWVzLCBpbiBhbiBlZmZvcnQgdG8gZ3JlYXRseSBpbXByb3ZlIHlvdXIgcXVhbGl0eSBvZiBsaWZlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoaWNoIHRyZWF0bWVudCBvcHRpb25zIG1heSBhc3Npc3Q/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29nbml0aXZlIGJlaGF2aW91cmFsIHRoZXJhcHk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0yXCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTdWJzY3JpYmUgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuSG9tZXBhZ2UuY29udGV4dFR5cGUgPSBTb2NrZXRDb250ZXh0O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVpOiB7IC4uLnN0YXRlLnVpIH0sXG4gIC4uLnN0YXRlLnBlcmZvcm1lci5wZXJmb3JtZXJzLFxuICBjb3VudHJpZXM6IHN0YXRlLnNldHRpbmdzLmNvdW50cmllcyxcbiAgbG9nZ2VkSW46IHN0YXRlLmF1dGgubG9nZ2VkSW4sXG4gIGNhdGVnb3JpZXM6IHN0YXRlLnBlcmZvcm1lci5jYXRlZ29yaWVzLmRhdGEsXG4gIHNldHRpbmdzOiBzdGF0ZS5zZXR0aW5nc1xufSk7XG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgc2VhcmNoUGVyZm9ybWVyLFxuICB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUsXG4gIHVwZGF0ZUN1cnJlbnRVc2VyLFxuICB1cGRhdGVDdXJyZW50UGVyZm9ybWVyLFxuICB1cGRhdGVDdXJyZW50U3R1ZGlvLFxuICBsb2dpblN1Y2Nlc3Ncbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2gpKHdpdGhSb3V0ZXIoSG9tZXBhZ2UpKTtcbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSwgZm9ybWF0ID0gJ0REL01NL1lZWVkgSEg6bW06c3MnKSB7XG4gIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJEdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyLCBmb3JtYXQgPSAnSEg6bW0nKSB7XG4gIHJldHVybiBtb21lbnRcbiAgICAudXRjKG1vbWVudC5kdXJhdGlvbihkdXJhdGlvbiwgJ21pbGxpc2Vjb25kcycpLmFzTWlsbGlzZWNvbmRzKCkpXG4gICAgLmZvcm1hdChmb3JtYXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBZ2UoZGF0ZTogc3RyaW5nLCBmb3JtYXQgPSAnTU1NTSBERCwgWVlZWScpIHtcbiAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFnZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuIG1vbWVudCgpLmRpZmYobW9tZW50KGRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLCAneWVhcnMnKS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RHVyYXRpb24oczogbnVtYmVyKSB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihzIC8gMzYwMCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChzIC0gaG91cnMgKiAzNjAwKSAvIDYwKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHMgLSBob3VycyAqIDM2MDAgLSBtaW51dGVzICogNjA7XG4gIHJldHVybiBgJHtob3VycyA8IDEwID8gJzAnIDogJyd9JHtob3Vyc306JHtcbiAgICBtaW51dGVzIDwgMTAgPyAnMCcgOiAnJ1xuICB9JHttaW51dGVzfToke3NlY29uZHMgPCAxMCA/ICcwJyA6ICcnfSR7c2Vjb25kc31gO1xufVxuIiwiaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnQHNlcnZpY2VzL2NvbmZpZyc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBSY0ZpbGUgfSBmcm9tICdhbnRkL2xpYi91cGxvYWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gYmVmb3JlQXZhdGFyVXBsb2FkKGZpbGU6IFJjRmlsZSk6IGJvb2xlYW4ge1xuICBjb25zdCBleHQgPSBmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgY29uc3QgaXNJbWFnZUFjY2VwdCA9IGNvbmZpZy5ORVhUX1BVQkxJQ19JTUFHRV9BQ0NQRVRcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoKGl0ZW06IHN0cmluZykgPT4gaXRlbS50cmltKCkpXG4gICAgLmluZGV4T2YoYC4ke2V4dH1gKTtcbiAgaWYgKGlzSW1hZ2VBY2NlcHQgPT09IC0xKSB7XG4gICAgbWVzc2FnZS5lcnJvcihgWW91IGNhbiBvbmx5IHVwbG9hZCAke2NvbmZpZy5ORVhUX1BVQkxJQ19JTUFHRV9BQ0NQRVR9IGZpbGUhYCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAoY29uZmlnLk5FWFRfUFVCTElDX01BWElNVU1fU0laRV9VUExPQURfQVZBVEFSIHx8IDIpO1xuICBpZiAoIWlzTHQyTSkge1xuICAgIG1lc3NhZ2UuZXJyb3IoXG4gICAgICBgSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gJHtjb25maWcuTkVYVF9QVUJMSUNfTUFYSU1VTV9TSVpFX1VQTE9BRF9BVkFUQVIgfHwgMn1NQiFgXG4gICAgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vaW50ZXJuZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWR1eCc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vbGF5b3V0JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0nO1xuIiwiY29uc3QgSU5URVJORVRfQ0hFQ0tfVVJMID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbSc7XG5cbmV4cG9ydCBjb25zdCBpc0hhc0ludGVybmV0Q29ubmVjdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChJTlRFUk5FVF9DSEVDS19VUkwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGUnLFxuICAgICAgICBQcmFnbWE6ICduby1jYWNoZScsXG4gICAgICAgIEV4cGlyZXM6IDBcbiAgICAgIH0gYXMgYW55XG4gICAgfSk7XG4gICAgaWYgKFxuICAgICAgcmVzLnN0YXR1cyA9PT0gNDA0XG4gICAgICB8fCByZXMuc3RhdHVzID09PSA0MDFcbiAgICAgIHx8IHJlcy5zdGF0dXMgPT09IDQwM1xuICAgICAgfHwgcmVzLnN0YXR1cyA9PT0gNTAwXG4gICAgICB8fCAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8PSAzMDApXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coZXhjZXB0aW9uKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGZvcm1JdGVtTGF5b3V0ID0ge1xuICBsYWJlbENvbDoge1xuICAgIHhzOiB7XG4gICAgICBzcGFuOiAyNFxuICAgIH0sXG4gICAgc206IHtcbiAgICAgIHNwYW46IDEyXG4gICAgfVxuICB9LFxuICB3cmFwcGVyQ29sOiB7XG4gICAgeHM6IHtcbiAgICAgIHNwYW46IDI0XG4gICAgfSxcbiAgICBzbToge1xuICAgICAgc3BhbjogMTJcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0YWlsRm9ybUl0ZW1MYXlvdXQgPSB7XG4gIHdyYXBwZXJDb2w6IHtcbiAgICB4czoge1xuICAgICAgc3BhbjogMjQsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9LFxuICAgIHNtOiB7XG4gICAgICBzcGFuOiAxNixcbiAgICAgIG9mZnNldDogMFxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb2xvciA9IHtcbiAgcHJpbWFyeUNvbG9yOiAnIzBjYjhiNicsXG4gIHN1Y2Nlc3NDb2xvcjogJyMyZmI1MmQnLFxuICB3aGl0ZUNvbG9yOiAnI2ZmZmZmZidcbn07XG5cbmV4cG9ydCB0eXBlIEJyZWFrcG9pbnQgPSAneHhsJyB8ICd4bCcgfCAnbGcnIHwgJ21kJyB8ICdzbScgfCAneHMnO1xuZXhwb3J0IHR5cGUgQnJlYWtwb2ludE1hcCA9IFBhcnRpYWw8UmVjb3JkPEJyZWFrcG9pbnQsIHN0cmluZz4+O1xuIiwiZXhwb3J0IGNvbnN0IHZhbGlkYXRlTWVzc2FnZXMgPSB7XG4gIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCEnLFxuICB0eXBlczoge1xuICAgIGVtYWlsOiAnTm90IGEgdmFsaWRhdGUgZW1haWwhJyxcbiAgICBudW1iZXI6ICdOb3QgYSB2YWxpZGF0ZSBudW1iZXIhJ1xuICB9LFxuICBudW1iZXI6IHtcbiAgICByYW5nZTogJ011c3QgYmUgYmV0d2VlbiBtaW4gYW5kIG1heCdcbiAgfVxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQge1xuICByZWR1Y2UsIGlzQXJyYXksIGlzRW1wdHksIGZsYXR0ZW5cbn0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHsgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQWN0aW9uIGFzIFJlZHV4Q3JlYXRlQWN0aW9uLFxuICBoYW5kbGVBY3Rpb25zIGFzIGhhbmRsZVJlZHV4QWN0aW9ucyxcbiAgQWN0aW9uXG59IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25GdW5jdGlvbjE8VDEsIFI+ID0gKHQxPzogVDEpID0+IFI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uRnVuY3Rpb248UGF5bG9hZD5cbiAgZXh0ZW5kcyBBY3Rpb25GdW5jdGlvbjE8UGF5bG9hZCwgQWN0aW9uPFBheWxvYWQ+PiB7XG4gIGlzOiAodHlwZTogc3RyaW5nKSA9PiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb248UGF5bG9hZCA9IGFueT4odHlwZTogc3RyaW5nKTogQWN0aW9uRnVuY3Rpb248UGF5bG9hZD4ge1xuICBjb25zdCBhY3Rpb24gPSBSZWR1eENyZWF0ZUFjdGlvbjxQYXlsb2FkPih0eXBlKSBhcyBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPjtcbiAgYWN0aW9uLmlzID0gKGFUeXBlOiBzdHJpbmcpID0+IGFjdGlvbi50b1N0cmluZygpID09PSBhVHlwZTtcbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5mdW5jdGlvbiBjcmVhdGVBc3luY0FjdGlvbihhY3Rpb246IHN0cmluZywgdHlwZTogc3RyaW5nKTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBbYWN0aW9uXTogY3JlYXRlQWN0aW9uKHR5cGUpLFxuICAgIFtgJHthY3Rpb259U3VjY2Vzc2BdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIFtgJHthY3Rpb259RmFpbGBdOiBjcmVhdGVBY3Rpb24oYCR7dHlwZX1fRkFJTGApXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jQWN0aW9uczxcbiAgQWN0aW9uRGF0YSA9IGFueSxcbiAgU3VjY2Vzc0RhdGEgPSBhbnksXG4gIEVycm9yRGF0YSA9IEVycm9yXG4+KFxuICB0eXBlOiBzdHJpbmdcbik6IFtcbiAgQWN0aW9uRnVuY3Rpb248QWN0aW9uRGF0YT4sXG4gIEFjdGlvbkZ1bmN0aW9uPFN1Y2Nlc3NEYXRhPixcbiAgQWN0aW9uRnVuY3Rpb248RXJyb3JEYXRhPlxuXSB7XG4gIHJldHVybiBbXG4gICAgY3JlYXRlQWN0aW9uPEFjdGlvbkRhdGE+KHR5cGUpLFxuICAgIGNyZWF0ZUFjdGlvbjxTdWNjZXNzRGF0YT4oYCR7dHlwZX1fU1VDQ0VTU2ApLFxuICAgIGNyZWF0ZUFjdGlvbjxFcnJvckRhdGE+KGAke3R5cGV9X0ZBSUxgKVxuICBdO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuZnVuY3Rpb24gaGFuZGxlQWN0aW9ucyhhY3Rpb25zOiBhbnksIGluaXRpYWxTdGF0ZTogYW55KSB7XG4gIHJldHVybiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgcmVkdWNlKFxuICAgICAgYWN0aW9ucyxcbiAgICAgIChyZWR1Y2VyOiBhbnksIGhhbmRsZXIsIGFjdGlvbikgPT4ge1xuICAgICAgICByZWR1Y2VyW2FjdGlvbl0gPSAoc3RhdGU6IGFueSwgYWN0OiBhbnkpID0+IGhhbmRsZXIoc3RhdGUuc2V0KCdhY3Rpb24nLCBhY3Rpb24pLCBhY3QpO1xuICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgIH0sXG4gICAgICB7fVxuICAgICksXG4gICAgaW5pdGlhbFN0YXRlXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXJzKFxuICBzdGF0ZUNvbnRleHQ6IHN0cmluZyxcbiAgcmVkdWNlcnM6IGFueVtdLFxuICBpbml0aWFsU3RhdGU6IGFueSxcbiAgcHJldmVudFJlc2V0dGluZzogYm9vbGVhbiA9IGZhbHNlXG4pOiBhbnkge1xuICByZXR1cm4ge1xuICAgIFtzdGF0ZUNvbnRleHRdOiBoYW5kbGVSZWR1eEFjdGlvbnMoXG4gICAgICByZWR1Y2UoXG4gICAgICAgIGZsYXR0ZW4ocmVkdWNlcnMpLFxuICAgICAgICAocmVkdWNlcjogYW55LCBhY3Rpb246IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChpc0FycmF5KGFjdGlvbi5vbikpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vbi5mb3JFYWNoKChhY3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZWR1Y2VyW2FjdF0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSByZWR1Y2VyW2FjdGlvbi5vbl0gPSBhY3Rpb24ucmVkdWNlcjtcbiAgICAgICAgICByZXR1cm4gcmVkdWNlcjtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudFJlc2V0dGluZ1xuICAgICAgICAgID8ge31cbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgIEFQUF9TVEFURV9SRVNFVDogKCkgPT4gaW5pdGlhbFN0YXRlXG4gICAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGluaXRpYWxTdGF0ZVxuICAgIClcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNhZ2FzKHNhZ2FzOiBhbnlbXSk6IGFueVtdIHtcbiAgcmV0dXJuIGZsYXR0ZW4oc2FnYXMpLm1hcCgoc2FnYTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBvbiwgZWZmZWN0ID0gdGFrZUxhdGVzdCwgd29ya2VyIH0gPSBzYWdhO1xuICAgIHJldHVybiBmdW5jdGlvbiogKCkge1xuICAgICAgeWllbGQgZWZmZWN0KG9uLCBmdW5jdGlvbiogKGFjdGlvbjogYW55KSB7XG4gICAgICAgIHlpZWxkIGRlbGF5KDApO1xuICAgICAgICB5aWVsZCB3b3JrZXIoYWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnNBKGNvbnRleHQ6IHN0cmluZywga2V5czogYW55W10gPSBbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgaWYgKGlzRW1wdHkoa2V5cykpIHJldHVybiBzdGF0ZVNlbGVjdG9yO1xuXG4gIHJldHVybiBrZXlzLm1hcCgoa2V5OiBhbnkpID0+IChzdGF0ZTogYW55KSA9PiAoaXNBcnJheShrZXkpXG4gICAgPyBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXRJbihrZXkpXG4gICAgOiBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXQoa2V5KSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSkuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gc2VsZWN0b3JzO1xuICAgIH0sXG4gICAge31cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSlNTZWxlY3RvcnMoY29udGV4dDogc3RyaW5nLCBrZXlzOiBzdHJpbmdbXSk6IGFueSB7XG4gIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVbY29udGV4dF07XG5cbiAgcmV0dXJuIHJlZHVjZShcbiAgICBrZXlzLFxuICAgIChzZWxlY3RvcnM6IGFueSwga2V5KSA9PiB7XG4gICAgICBzZWxlY3RvcnNbYCR7a2V5fVNlbGVjdG9yYF0gPSAoc3RhdGU6IGFueSkgPT4gc3RhdGVTZWxlY3RvcihzdGF0ZSlba2V5XTtcbiAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgfSxcbiAgICB7fVxuICApO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvbnMsXG4gIGNyZWF0ZVNlbGVjdG9yc0EsXG4gIGhhbmRsZUFjdGlvbnMsXG4gIGNyZWF0ZVJlZHVjZXJzLFxuICBjcmVhdGVTZWxlY3RvcnMsXG4gIGNyZWF0ZVNlbGVjdG9yLFxuICBjcmVhdGVKU1NlbGVjdG9yc1xufTtcbiIsImV4cG9ydCBjb25zdCB1c2VybmFtZVBhdHRlcm5SdWxlID0ge1xuICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdeW2EtekEtWjAtOV0qJCcpLFxuICBtZXNzYWdlOiAnRG9udCBhbGxvdyBzcGVjaWFsIGNoYXJzIG9yIHNwYWNlJ1xufTtcbiIsImltcG9ydCB7IFN0b3JlIGFzIFJEU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5cbmV4cG9ydCB0eXBlIFN0b3JlID0gUkRTdG9yZTx7fT47XG5cbmxldCBzdG9yZTogU3RvcmUgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRTdG9yZTogKCkgPT4gc3RvcmUsXG4gIHNldFN0b3JlOiAoczogU3RvcmUpID0+IHtcbiAgICBzdG9yZSA9IHM7XG4gIH1cbn07XG4iLCJpbXBvcnQgc3RvcmVIb2xkZXIgZnJvbSAnLi9zdG9yZUhvbGRlcic7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMID0gJy9vZmZsaW5lLnBuZyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QUklWQVRFX0lNQUdFX1VSTCA9ICcvcHJpdmF0ZS5wbmcnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfR1JPVVBfSU1BR0VfVVJMID0gJy9ncm91cC5wbmcnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfT05MSU5FX0lNQUdFX1VSTCA9ICcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdGVyKHN0YXR1czogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHBvc3RlciA9ICcnO1xuICBjb25zdCBzdG9yZSA9IHN0b3JlSG9sZGVyLmdldFN0b3JlKCk7XG4gIGNvbnN0IHsgc2V0dGluZ3MgPSB7fSB9ID0gc3RvcmUuZ2V0U3RhdGUoKSBhcyBhbnk7XG4gIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgY2FzZSAncHJpdmF0ZSc6XG4gICAgICBwb3N0ZXIgPSBzZXR0aW5ncy5kZWZhdWx0UHJpdmF0ZUNhbGxJbWFnZSB8fCBERUZBVUxUX1BSSVZBVEVfSU1BR0VfVVJMO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnb2ZmbGluZSc6XG4gICAgICBwb3N0ZXIgPSBzZXR0aW5ncy5kZWZhdWx0T2ZmbGluZU1vZGVsSW1hZ2UgfHwgREVGQVVMVF9PRkZMSU5FX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3B1YmxpYyc6XG4gICAgICBwb3N0ZXIgPSBERUZBVUxUX09OTElORV9JTUFHRV9VUkw7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdncm91cCc6XG4gICAgICBwb3N0ZXIgPSBzZXR0aW5ncy5kZWZhdWx0R3JvdXBDaGF0SW1hZ2UgfHwgREVGQVVMVF9HUk9VUF9JTUFHRV9VUkw7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcG9zdGVyID0gREVGQVVMVF9PRkZMSU5FX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBwb3N0ZXI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB1cmwubWF0Y2goXG4gICAgICAvKGh0dHAocyk/OlxcL1xcLy4pPyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji8vPV0qKS9nXG4gICAgKSAhPT0gbnVsbFxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVVdWlkID0gKCkgPT4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDA7XG4gICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIC8qIGVzbGludC1lbmFibGUgKi9cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFzdHIpIHJldHVybiAnJztcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVuaXRQcmljZXM6IHsgdmFsdWU6IG51bWJlciwgdGV4dDogYW55IH1bXSA9IFtcbiAge1xuICAgIHZhbHVlOiAxNSxcbiAgICB0ZXh0OiAnMTUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDIwLFxuICAgIHRleHQ6ICcyMCB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMjUsXG4gICAgdGV4dDogJzI1IHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAzMCxcbiAgICB0ZXh0OiAnMzAgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDM1LFxuICAgIHRleHQ6ICczNSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogNDAsXG4gICAgdGV4dDogJzQwIHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiA0NSxcbiAgICB0ZXh0OiAnNDUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDUwLFxuICAgIHRleHQ6ICc1MCB0b2tlbnMnXG4gIH1cbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA1NSxcbiAgLy8gICB0ZXh0OiAnNTUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDYwLFxuICAvLyAgIHRleHQ6ICc2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjUsXG4gIC8vICAgdGV4dDogJzY1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3MCxcbiAgLy8gICB0ZXh0OiAnNzAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDc1LFxuICAvLyAgIHRleHQ6ICc3NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogODAsXG4gIC8vICAgdGV4dDogJzgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4NSxcbiAgLy8gICB0ZXh0OiAnODUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDkwLFxuICAvLyAgIHRleHQ6ICc5MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTUsXG4gIC8vICAgdGV4dDogJzk1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMDAsXG4gIC8vICAgdGV4dDogJzEwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTIwLFxuICAvLyAgIHRleHQ6ICcxMjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDE0MCxcbiAgLy8gICB0ZXh0OiAnMTQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxNjAsXG4gIC8vICAgdGV4dDogJzE2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTgwLFxuICAvLyAgIHRleHQ6ICcxODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDIwMCxcbiAgLy8gICB0ZXh0OiAnMjAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyMjAsXG4gIC8vICAgdGV4dDogJzIyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjQwLFxuICAvLyAgIHRleHQ6ICcyNDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDI2MCxcbiAgLy8gICB0ZXh0OiAnMjYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyODAsXG4gIC8vICAgdGV4dDogJzI4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzAwLFxuICAvLyAgIHRleHQ6ICczMDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDMyMCxcbiAgLy8gICB0ZXh0OiAnMzIwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzNDAsXG4gIC8vICAgdGV4dDogJzM0MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzYwLFxuICAvLyAgIHRleHQ6ICczNjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDM4MCxcbiAgLy8gICB0ZXh0OiAnMzgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0MDAsXG4gIC8vICAgdGV4dDogJzQwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDIwLFxuICAvLyAgIHRleHQ6ICc0MjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQ0MCxcbiAgLy8gICB0ZXh0OiAnNDQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0NjAsXG4gIC8vICAgdGV4dDogJzQ2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDgwLFxuICAvLyAgIHRleHQ6ICc0ODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDUwMCxcbiAgLy8gICB0ZXh0OiAnNTAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA1NTAsXG4gIC8vICAgdGV4dDogJzU1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjAwLFxuICAvLyAgIHRleHQ6ICc2MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDY1MCxcbiAgLy8gICB0ZXh0OiAnNjUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3MDAsXG4gIC8vICAgdGV4dDogJzcwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNzUwLFxuICAvLyAgIHRleHQ6ICc3NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDgwMCxcbiAgLy8gICB0ZXh0OiAnODAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4NTAsXG4gIC8vICAgdGV4dDogJzg1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTAwLFxuICAvLyAgIHRleHQ6ICc5MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDk1MCxcbiAgLy8gICB0ZXh0OiAnOTUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMDAwLFxuICAvLyAgIHRleHQ6ICcxMDAwIHRva2VucydcbiAgLy8gfVxuXTtcbiIsImltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAncGF0aC10by1yZWdleHAnO1xuaW1wb3J0IHtcbiAgSVNjaGVkdWxlLCBJVXNlciwgSVBlcmZvcm1lciwgSVN0dWRpb1xufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBTT1JUIH0gZnJvbSAnQHNlcnZpY2VzL2FwaS1yZXF1ZXN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYSB0cmVlLXN0cnVjdHVyZWQgYXJyYXkuXG4gKiBAcGFyYW0gICB7YXJyYXl9ICAgICBhcnJheSAgICAgVGhlIEFycmF5IG5lZWQgdG8gQ29udmVydGVkLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgaWQgICAgICAgIFRoZSBhbGlhcyBvZiB0aGUgdW5pcXVlIElEIG9mIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5LlxuICogQHBhcmFtICAge3N0cmluZ30gICAgcGFyZW50SWQgICAgICAgVGhlIGFsaWFzIG9mIHRoZSBwYXJlbnQgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBjaGlsZHJlbiAgVGhlIGFsaWFzIG9mIGNoaWxkcmVuIG9mIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5LlxuICogQHJldHVybiAge2FycmF5fSAgICBSZXR1cm4gYSB0cmVlLXN0cnVjdHVyZWQgYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvVHJlZShcbiAgYXJyYXksXG4gIGlkID0gJ2lkJyxcbiAgcGFyZW50SWQgPSAncGlkJyxcbiAgY2hpbGRyZW4gPSAnY2hpbGRyZW4nXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IGhhc2ggPSB7fTtcbiAgY29uc3QgZGF0YSA9IGNsb25lRGVlcChhcnJheSk7XG5cbiAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGhhc2hbZGF0YVtpbmRleF1baWRdXSA9IGRhdGFbaW5kZXhdO1xuICB9KTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBoYXNoUGFyZW50ID0gaGFzaFtpdGVtW3BhcmVudElkXV07XG4gICAgaWYgKGhhc2hQYXJlbnQpIHtcbiAgICAgICFoYXNoUGFyZW50W2NoaWxkcmVuXSAmJiAoaGFzaFBhcmVudFtjaGlsZHJlbl0gPSBbXSk7XG4gICAgICBoYXNoUGFyZW50W2NoaWxkcmVuXS5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIHBhdGggbWF0Y2hlcyB0aGUgcmVnZXhwIGlmIHRoZSBsYW5ndWFnZSBwcmVmaXggaXMgaWdub3JlZCwgaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwLlxuICogQHBhcmFtICAge3N0cmluZ3xyZWdleHB8YXJyYXl9ICAgICByZWdleHAgICAgIFNwZWNpZnkgYSBzdHJpbmcsIGFycmF5IG9mIHN0cmluZ3MsIG9yIGEgcmVndWxhciBleHByZXNzaW9uLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgICBwYXRobmFtZSAgIFNwZWNpZnkgdGhlIHBhdGhuYW1lIHRvIG1hdGNoLlxuICogQHJldHVybiAge2FycmF5fG51bGx9ICAgICAgICAgICAgICBSZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbWF0Y2ggb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhNYXRjaFJlZ2V4cChyZWdleHAsIHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKHJlZ2V4cCkuZXhlYyhwYXRobmFtZSk7XG59XG5cbi8qKlxuICogSW4gYW4gYXJyYXkgb2Ygb2JqZWN0cywgc3BlY2lmeSBhbiBvYmplY3QgdGhhdCB0cmF2ZXJzZXMgdGhlIG9iamVjdHMgd2hvc2UgcGFyZW50IElEIG1hdGNoZXMuXG4gKiBAcGFyYW0gICB7YXJyYXl9ICAgICBhcnJheSAgICAgVGhlIEFycmF5IG5lZWQgdG8gQ29udmVydGVkLlxuICogQHBhcmFtICAge3N0cmluZ30gICAgY3VycmVudCAgIFNwZWNpZnkgdGhlIG9iamVjdCB0aGF0IG5lZWRzIHRvIGJlIHF1ZXJpZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBwYXJlbnRJZCAgVGhlIGFsaWFzIG9mIHRoZSBwYXJlbnQgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBpZCAgICAgICAgVGhlIGFsaWFzIG9mIHRoZSB1bmlxdWUgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJuICB7YXJyYXl9ICAgIFJldHVybiBhIGtleSBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QW5jZXN0b3JzKGFycmF5LCBjdXJyZW50LCBwYXJlbnRJZCwgaWQgPSAnaWQnKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtjdXJyZW50XTtcbiAgY29uc3QgaGFzaE1hcCA9IG5ldyBNYXAoKTtcbiAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gaGFzaE1hcC5zZXQoaXRlbVtpZF0sIGl0ZW0pKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gIGNvbnN0IGdldFBhdGggPSAoY3VycmVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQYXJlbnRJZCA9IGhhc2hNYXAuZ2V0KGN1cnJlbnRbaWRdKVtwYXJlbnRJZF07XG4gICAgaWYgKGN1cnJlbnRQYXJlbnRJZCkge1xuICAgICAgcmVzdWx0LnB1c2goaGFzaE1hcC5nZXQoY3VycmVudFBhcmVudElkKSk7XG4gICAgICBnZXRQYXRoKGhhc2hNYXAuZ2V0KGN1cnJlbnRQYXJlbnRJZCkpO1xuICAgIH1cbiAgfTtcblxuICBnZXRQYXRoKGN1cnJlbnQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzcG9uc2VFcnJvcihkYXRhOiBhbnkpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuICdCYWQgcmVxdWVzdCEnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5tZXNzYWdlKSkge1xuICAgIGNvbnN0IGl0ZW0gPSBkYXRhLm1lc3NhZ2VbMF07XG4gICAgaWYgKCFpdGVtLmNvbnN0cmFpbnRzKSB7XG4gICAgICByZXR1cm4gZGF0YS5lcnJvciB8fCAnQmFkIHJlcXVlc3QhJztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoaXRlbS5jb25zdHJhaW50cylbMF07XG4gIH1cblxuICAvLyBUT0RPIC0gcGFyc2UgZm9yIGxhbmdhdWdlIG9yIG90aGVyc1xuICByZXR1cm4gdHlwZW9mIGRhdGEubWVzc2FnZSA9PT0gJ3N0cmluZycgPyBkYXRhLm1lc3NhZ2UgOiAnQmFkIHJlcXVlc3QhJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICBpZiAoXG4gICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVyKHNQYXJhbSkge1xuICBjb25zdCBzUGFnZVVSTCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIGNvbnN0IHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpO1xuICBsZXQgc1BhcmFtZXRlck5hbWU7XG4gIGxldCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzVVJMVmFyaWFibGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc1BhcmFtZXRlck5hbWUgPSBzVVJMVmFyaWFibGVzW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICBpZiAoc1BhcmFtZXRlck5hbWVbMF0gPT09IHNQYXJhbSkge1xuICAgICAgcmV0dXJuIHNQYXJhbWV0ZXJOYW1lWzFdID09PSB1bmRlZmluZWQgPyB0cnVlIDogc1BhcmFtZXRlck5hbWVbMV07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEQVlfT0ZfV0VFSyA9IHtcbiAgbW9uOiAnTW9uZGF5JyxcbiAgdHVlOiAnVHVlc2RheScsXG4gIHdlZDogJ1dlZG5lc2RheScsXG4gIHRodTogJ1RodXJzZGF5JyxcbiAgZnJpOiAnRnJpZGF5JyxcbiAgc2F0OiAnU2F0dXJkYXknLFxuICBzdW46ICdTdW5kYXknXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFNjaGVkdWxlKCkge1xuICBjb25zdCBkZWZhdWx0VmFsID0geyBzdGFydDogbnVsbCwgZW5kOiBudWxsLCBjbG9zZWQ6IHRydWUgfTtcbiAgcmV0dXJuIHtcbiAgICBtb246IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHR1ZTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgd2VkOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICB0aHU6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIGZyaTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgc2F0OiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICBzdW46IHsgLi4uZGVmYXVsdFZhbCB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0U2hvdyhzY2hlZHVsZTogSVNjaGVkdWxlKTogc3RyaW5nIHtcbiAgbGV0IHdlZWtEYXkgPSBwYXJzZUludChtb21lbnQoKS5mb3JtYXQoJ2UnKSwgMTApO1xuICBsZXQgaSA9IDA7XG4gIGxldCBuZXh0U2hvdzogc3RyaW5nO1xuICBjb25zdCBwZXJmb3JtZXJTaG93cyA9IE9iamVjdC5rZXlzKHNjaGVkdWxlKS5maWx0ZXIoXG4gICAgKGtleSkgPT4gIXNjaGVkdWxlW2tleV0uY2xvc2VkXG4gICk7XG4gIGRvIHtcbiAgICBjb25zdCBkYXRlID0gbW9tZW50KCkuZGF5KHdlZWtEYXkpLmZvcm1hdCgnZGRkJykudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAocGVyZm9ybWVyU2hvd3MuaW5kZXhPZihkYXRlKSA+IC0xKSB7XG4gICAgICBuZXh0U2hvdyA9IGRhdGU7XG4gICAgfVxuICAgIHdlZWtEYXkgKz0gMTtcbiAgICBpICs9IDE7XG4gIH0gd2hpbGUgKGkgPCA3ICYmICFuZXh0U2hvdyk7XG5cbiAgaWYgKG5leHRTaG93KSB7XG4gICAgcmV0dXJuIGAke3NjaGVkdWxlW25leHRTaG93XS5zdGFydH0gJHttb21lbnQoKVxuICAgICAgLmRheSh3ZWVrRGF5IC0gMSlcbiAgICAgIC5mb3JtYXQoJ0REL01NL1lZWVknKX1gO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlYXJjaERhdGEocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyLCBzdGF0ZSkge1xuICBsZXQgeyBzb3J0LCBzb3J0QnksIGZpbHRlciB9ID0gc3RhdGU7XG4gIGNvbnN0IHsgbGltaXQgfSA9IHN0YXRlO1xuICBpZiAoZmlsdGVycykge1xuICAgIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGZpbHRlcnNba2V5XSAmJiBmaWx0ZXJzW2tleV0ubGVuZ3RoKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICBmaWx0ZXJba2V5XSA9IGZpbHRlcnNba2V5XVswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmaWx0ZXJzW2tleV0pIHtcbiAgICAgICAgZmlsdGVyW2tleV0gPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmaWx0ZXIgPSB7fTtcbiAgfVxuXG4gIGlmIChzb3J0ZXIpIHtcbiAgICBpZiAoc29ydGVyLm9yZGVyKSB7XG4gICAgICBjb25zdCB7IGZpZWxkLCBvcmRlciB9ID0gc29ydGVyO1xuICAgICAgc29ydCA9IFNPUlRbb3JkZXJdO1xuICAgICAgc29ydEJ5ID0gZmllbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnRCeSA9ICdjcmVhdGVkQXQnO1xuICAgICAgc29ydCA9ICdkZXNjJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLmZpbHRlcixcbiAgICBzb3J0LFxuICAgIHNvcnRCeSxcbiAgICBvZmZzZXQ6IChwYWdpbmF0aW9uLmN1cnJlbnQgLSAxKSAqIGxpbWl0XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlNjQob3JpZ2luRmlsZU9iaiwgc3RhdHVzID0gJ3VwbG9hZGluZycsIGZpbGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGlmIChvcmlnaW5GaWxlT2JqKSB7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChvcmlnaW5GaWxlT2JqKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHtcbiAgICAgICAgLi4ub3JpZ2luRmlsZU9iaixcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBuYW1lOiBvcmlnaW5GaWxlT2JqLm5hbWUsXG4gICAgICAgIHVybDogcmVhZGVyLnJlc3VsdCxcbiAgICAgICAgb3JpZ2luRmlsZU9ialxuICAgICAgfSk7XG4gICAgICByZWFkZXIub25lcnJvciA9IChlcnJvcikgPT4gcmVqZWN0KGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShmaWxlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENvbm5lY3Rpb25EYXRhKGRhdGEpIHtcbiAgY29uc3QgYXJyID0gZGF0YS5zcGxpdCgnJS8lJyk7XG4gIGNvbnN0IHNlcnZlckRhdGEgPSBhcnJbMV0gJiYgSlNPTi5wYXJzZShhcnJbMV0pO1xuICBjb25zdCBjbGllbnREYXRhID0gYXJyWzBdICYmIEpTT04ucGFyc2UoYXJyWzBdKTtcbiAgcmV0dXJuIHtcbiAgICBzZXJ2ZXJEYXRhLFxuICAgIGNsaWVudERhdGFcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVXNlckxvZ2luKGlzTG9nZ2VkSW46IGJvb2xlYW4sIHVzZXI6IElVc2VyIHwgSVBlcmZvcm1lciB8IElTdHVkaW8pIHtcbiAgaWYgKCFpc0xvZ2dlZEluKSByZXR1cm4gZmFsc2U7XG4gIGlmICghdXNlciAmJiAhdXNlci5faWQpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKHVzZXI6IElVc2VyLCBwZXJmb3JtZXI6IElQZXJmb3JtZXIpIHtcbiAgaWYgKHVzZXIgJiYgdXNlci5faWQpIHJldHVybiB1c2VyO1xuICBpZiAocGVyZm9ybWVyICYmIHBlcmZvcm1lci5faWQpIHJldHVybiBwZXJmb3JtZXI7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BoeXNpY2FsUHJvZHVjdChpdGVtKSB7XG4gIGlmIChpdGVtICYmIGl0ZW0udHlwZSA9PT0gJ3BoeXNpY2FsJykgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYXRCb3hNZXNzYWdlQ2xhc3NOYW1lKHJlcSkge1xuICBjb25zdCB7XG4gICAgaXNNaW5lLFxuICAgIHN0YXJ0c1NlcXVlbmNlLFxuICAgIGVuZHNTZXF1ZW5jZSxcbiAgICBkYXRhOiB7IHR5cGUgfVxuICB9ID0gcmVxO1xuICByZXR1cm4gY2xhc3NuYW1lcyhcbiAgICAnbWVzc2FnZScsXG4gICAgeyBtaW5lOiBpc01pbmUgJiYgdHlwZSAhPT0gJ3RpcCcgfSxcbiAgICB7IHRpcDogdHlwZSA9PT0gJ3RpcCcgfSxcbiAgICB7IHN0YXJ0OiAhIXN0YXJ0c1NlcXVlbmNlIH0sXG4gICAgeyBlbmQ6ICEhZW5kc1NlcXVlbmNlIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gY29udmVydEZlZXRUb0NtKGZlZXQsIGluY2gpIHtcbiAgY29uc3QgW2ZdID0gZmVldC5zcGxpdCgnLicpO1xuICBjb25zdCBbaV0gPSBpbmNoLnNwbGl0KCcuJyk7XG4gIHJldHVybiAocGFyc2VJbnQoZiwgMTApICogMTIgKyBwYXJzZUludChpLCAxMCkpICogMi41NDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGFXZWlnaHQobWluID0gOTksIG1heCA9IDMxOSkge1xuICBsZXQgaSA9IG1pbjtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGRvIHtcbiAgICByZXN1bHRbaV0gPSAoaSAqIDAuNDUpLnRvRml4ZWQoMik7XG4gICAgaSArPSAxO1xuICB9IHdoaWxlIChpIDwgbWF4KTtcbiAgcmV0dXJuIHJlc3VsdC5tYXAoKHYsIGluZGV4KSA9PiAoe1xuICAgIGxhYmVsOiBgJHtpbmRleH0gIGxicyAoJHt2fWtnKWAsXG4gICAgdmFsdWU6IGAke2luZGV4fSBsYnNgXG4gIH0pKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRhSGVpZ2h0KG1pbiA9IDQsIG1heCA9IDcpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGZlZXQgPSBtaW47IGZlZXQgPCBtYXg7IGZlZXQgKz0gMSkge1xuICAgIGZvciAobGV0IGluY2ggPSAwOyBpbmNoIDw9IDExOyBpbmNoICs9IDEpIHtcbiAgICAgIGNvbnN0IGEgPSBjb252ZXJ0RmVldFRvQ20oXG4gICAgICAgIGZlZXQudG9GaXhlZCgxKS50b1N0cmluZygpLFxuICAgICAgICBpbmNoLnRvRml4ZWQoMSkudG9TdHJpbmcoKVxuICAgICAgKTtcbiAgICAgIHJlc3VsdC5wdXNoKGAke2ZlZXR9JyR7aW5jaH1cIiAoJHthLnRvRml4ZWQoMil9IGNtKWApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0Lm1hcCgoZikgPT4gKHsgbGFiZWw6IGAke2Z9YCwgdmFsdWU6IGAke2Z9YCB9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZTogbnVtYmVyLCBmcmFjdGlvbkRpZ2l0cyA9IDIpIHtcbiAgaWYgKHByaWNlKSB7XG4gICAgcmV0dXJuIHByaWNlLnRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNBY3Rpb24sIGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0BsaWIvcmVkdXgnO1xuXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9naW5TdWNjZXNzLCBsb2dpbkZhaWwgfSA9IGNyZWF0ZUFzeW5jQWN0aW9uKFxuICAnbG9naW4nLFxuICAnTE9HSU4nXG4pO1xuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdGluZyA9IGNyZWF0ZUFjdGlvbignTE9HSU5fUkVRVUVTVElORycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBwZXJmb3JtZXJsb2dpbixcbiAgcGVyZm9ybWVybG9naW5TdWNjZXNzLFxuICBwZXJmb3JtZXJsb2dpbkZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigncGVyZm9ybWVybG9naW4nLCAnUEVSRk9STUVSX0xPR0lOJyk7XG5cbmV4cG9ydCBjb25zdFxuICByZXNldExvZ2luRGF0YSA9IGNyZWF0ZUFjdGlvbigncmVzZXRMb2dpbkRhdGEnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgc3R1ZGlvTG9naW4sXG4gIHN0dWRpb0xvZ2luU3VjY2VzcyxcbiAgc3R1ZGlvTG9naW5GYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3N0dWRpb0xvZ2luJywgJ1NUVURJT19MT0dJTicpO1xuXG5leHBvcnQgY29uc3Qge1xuICBwZXJmb3JtZXJSZWdpc3RlcixcbiAgcGVyZm9ybWVyUmVnaXN0ZXJTdWNjZXNzLFxuICBwZXJmb3JtZXJSZWdpc3RlckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigncGVyZm9ybWVyUmVnaXN0ZXInLCAnUEVSRk9STUVSX1JFR0lTVEVSJyk7XG5leHBvcnQgY29uc3Qgc2V0UGVyZm9ybWVyUmVnaXN0ZXJTdWJtaXR0aW5nID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX1BFUkZPUk1FUl9SRUdJU1RFUl9TVUJNSVRUSU5HJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXNlclJlZ2lzdGVyLFxuICB1c2VyUmVnaXN0ZXJTdWNjZXNzLFxuICB1c2VyUmVnaXN0ZXJGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VzZXJSZWdpc3RlcicsICdVU0VSX1JFR0lTVEVSJyk7XG5leHBvcnQgY29uc3Qgc2V0VXNlclJlZ2lzdGVyU3VibWl0dGluZyA9IGNyZWF0ZUFjdGlvbihcbiAgJ1NFVF9VU0VSX1JFR0lTVEVSX1NVQk1JVFRJTkcnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVQYXNzd29yZCxcbiAgdXBkYXRlUGFzc3dvcmRTdWNjZXNzLFxuICB1cGRhdGVQYXNzd29yZEZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXBkYXRlUGFzc3dvcmQnLCAnVVBEQVRFX1BBU1NXT1JEJyk7XG5leHBvcnQgY29uc3Qgc2V0VXBkYXRlUGFzc3dvcmRTdWJtaXR0aW5nID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX1VQREFURV9QQVNTV09SRF9TVUJNSVRUSU5HJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGNyZWF0ZUFjdGlvbignbG9nb3V0Jyk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY0FjdGlvbiwgY3JlYXRlQWN0aW9uIH0gZnJvbSAnc3JjL2xpYi9yZWR1eCc7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFBlcmZvcm1lckNhdGVnb3JpZXMsXG4gIGdldFBlcmZvcm1lckNhdGVnb3JpZXNTdWNjZXNzLFxuICBnZXRQZXJmb3JtZXJDYXRlZ29yaWVzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRQZXJmb3JtZXJDYXRlZ29yaWVzJywgJ0dFVF9QRVJGT1JNRVJfQ0FURUdPUklFUycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBzZWFyY2hQZXJmb3JtZXIsXG4gIHNlYXJjaFBlcmZvcm1lclN1Y2Nlc3MsXG4gIHNlYXJjaFBlcmZvcm1lckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignc2VhcmNoUGVyZm9ybWVyJywgJ1NFQVJDSF9QRVJGT1JNRVInKTtcblxuZXhwb3J0IGNvbnN0IHNldFBlcmZvcm1lclNlYXJjaGluZyA9IGNyZWF0ZUFjdGlvbignU0VUX1BFUkZPUk1FUl9TRUFSQ0hJTkcnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXBkYXRlUGVyZm9ybWVyUHJvZmlsZSxcbiAgdXBkYXRlUGVyZm9ybWVyUHJvZmlsZVN1Y2Nlc3MsXG4gIHVwZGF0ZVBlcmZvcm1lclByb2ZpbGVGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VwZGF0ZVBlcmZvcm1lclByb2ZpbGUnLCAnVVBEQVRFX1BFUkZPUk1FUl9QUk9GSUxFJyk7XG5leHBvcnQgY29uc3Qgc2V0dXBkYXRpbmdQZXJmb3JtZXJQcm9maWxlID0gY3JlYXRlQWN0aW9uKFxuICAndXBkYXRpbmdQZXJmb3JtZXJQcm9maWxlJ1xuKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVQYXltZW50SW5mbyA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1BBWU1FTlRfSU5GTycpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZURpcmVjdERlcG9zaXQgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9ESVJFQ1RfREVQT1NJVCcpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBheHVtID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfUEFYVU0nKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVCaXRwYXkgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9CSVRQQVknKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVTdHJlYW1pbmdTdGF0dXMgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9TVFJFQU1JTkdfU1RBVFVTJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlRGVmYXVsdFByaWNlID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfREVGQVVMVF9QUklDRScpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRQZXJmb3JtZXJEZXRhaWxzLFxuICBnZXRQZXJmb3JtZXJEZXRhaWxzU3VjY2VzcyxcbiAgZ2V0UGVyZm9ybWVyRGV0YWlsc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0UGVyZm9ybWVyRGV0YWlscycsICdHRVRfUEVSRk9STUVSX0RFVEFJTFMnKTtcbmV4cG9ydCBjb25zdCBzZXRHZXR0aW5nUGVyZm9ybWVyRGV0YWlscyA9IGNyZWF0ZUFjdGlvbihcbiAgJ3NldEdldHRpbmdQZXJmb3JtZXJEZXRhaWxzJ1xuKTtcbmV4cG9ydCBjb25zdCBzZXRQZXJmb3JtZXJEZXRhaWxzID0gY3JlYXRlQWN0aW9uKCdTRVRfUEVSRk9STUVSX0RFVEFJTFMnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVQZXJmb3JtZXJBc3NldCA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1BFUkZPUk1FUl9BU1NFVCcpO1xuZXhwb3J0IGNvbnN0IHNldEZhdm9yaXRlUGVyZm9ybWVyRGV0YWlscyA9IGNyZWF0ZUFjdGlvbihcbiAgJ1NFVF9GQVZPUklURV9QRVJGT1JNRVJfREVUQUlMUydcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE15UHJvZHVjdHMsXG4gIGdldE15UHJvZHVjdHNTdWNjZXNzLFxuICBnZXRNeVByb2R1Y3RzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNeVByb2R1Y3RzJywgJ0dFVF9NWV9QUk9EVUNUJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ015UHJvZHVjdHMgPSBjcmVhdGVBY3Rpb24oJ3NldEdldHRpbmdNeVByb2R1Y3RzJyk7XG5leHBvcnQgY29uc3QgYWRkTXlQcm9kdWN0ID0gY3JlYXRlQWN0aW9uKCdhZGRNeVByb2R1Y3QnKTtcbmV4cG9ydCBjb25zdCByZW1vdmVNeVByb2R1Y3QgPSBjcmVhdGVBY3Rpb24oJ3JlbW92ZU15UHJvZHVjdCcpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRFYXJuaW5nLFxuICBnZXRFYXJuaW5nU3VjY2VzcyxcbiAgZ2V0RWFybmluZ0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0RWFybmluZycsICdHRVRfRUFSTklORycpO1xuZXhwb3J0IGNvbnN0IHNldEdldHRpbmdFYXJuaW5nID0gY3JlYXRlQWN0aW9uKCdTRVRfR0VUVElOR19FQVJOSUcnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UGF5b3V0UmVxdWVzdCxcbiAgZ2V0UGF5b3V0UmVxdWVzdFN1Y2Nlc3MsXG4gIGdldFBheW91dFJlcXVlc3RGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFBheW91dFJlcXVlc3QnLCAnR0VUX1BBWU9VVF9SRVFVRVNUJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ1BheW91dFJlcXVlc3QgPSBjcmVhdGVBY3Rpb24oJ1NFVF9HRVRUSU5HX1BBWU9VVF9SRVFVRVNUJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlUGF5b3V0UmVxdWVzdCA9IGNyZWF0ZUFjdGlvbignUkVNT1ZFX1BBWU9VVF9SRVFVRVNUJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE15VmlkZW9zLFxuICBnZXRNeVZpZGVvc1N1Y2Nlc3MsXG4gIGdldE15VmlkZW9zRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNeVZpZGVvcycsICdHRVRfTVlfVklERU8nKTtcbmV4cG9ydCBjb25zdCBzZXRnZXR0aW5nTXlWaWRlb3MgPSBjcmVhdGVBY3Rpb24oJ3NldGdldHRpbmdNeVZpZGVvcycpO1xuZXhwb3J0IGNvbnN0IGFkZE15VmlkZW9zID0gY3JlYXRlQWN0aW9uKCdhZGRNeVZpZGVvcycpO1xuZXhwb3J0IGNvbnN0IHJlbW92ZU15VmlkZW8gPSBjcmVhdGVBY3Rpb24oJ3JlbW92ZU15VmlkZW8nKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0TXlQaG90b3MsXG4gIGdldE15UGhvdG9zU3VjY2VzcyxcbiAgZ2V0TXlQaG90b3NGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldE15UGhvdG9zJywgJ0dFVF9NWV9QSE9UTycpO1xuZXhwb3J0IGNvbnN0IHNldGdldHRpbmdNeVBob3RvcyA9IGNyZWF0ZUFjdGlvbignc2V0Z2V0dGluZ015UGhvdG9zJyk7XG5leHBvcnQgY29uc3QgYWRkTXlQaG90b3MgPSBjcmVhdGVBY3Rpb24oJ2FkZE15UGhvdG9zJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlTXlQaG90byA9IGNyZWF0ZUFjdGlvbigncmVtb3ZlTXlQaG90bycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRNeUdhbGxlcmllcyxcbiAgZ2V0TXlHYWxsZXJpZXNTdWNjZXNzLFxuICBnZXRNeUdhbGxlcmllc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0TXlHYWxsZXJpZXMnLCAnR0VUX01ZX0dBTExFUklFUycpO1xuZXhwb3J0IGNvbnN0IHNldGdldHRpbmdNeUdhbGxlcmllcyA9IGNyZWF0ZUFjdGlvbignc2V0Z2V0dGluZ015R2FsbGVyaWVzJyk7XG5leHBvcnQgY29uc3QgYWRkTXlHYWxsZXJpZXMgPSBjcmVhdGVBY3Rpb24oJ2FkZE15R2FsbGVyaWVzJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlTXlHYWxsZXJpZXMgPSBjcmVhdGVBY3Rpb24oJ3JlbW92ZU15R2FsbGVyaWVzJyk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDdXJyZW50UGVyZm9ybWVyID0gY3JlYXRlQWN0aW9uKCd1cGRhdGVDdXJyZW50UGVyZm9ybWVyJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlID0gY3JlYXRlQWN0aW9uKFxuICAnVVBEQVRFX1BFUkZPUk1FUl9GQVZPVVJJVEUnXG4pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRQZXJmb3JtZXJCYWxhbmNlID0gY3JlYXRlQWN0aW9uKFxuICAnVVBEQVRFX0NVUlJFTlRfUEVSRk9STUVSX0JBTEFOQ0UnXG4pO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQWN0aW9uLFxuICBjcmVhdGVBc3luY0FjdGlvblxufSBmcm9tICdAbGliL3JlZHV4JztcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRTdHVkaW8gPSBjcmVhdGVBY3Rpb24oJ3VwZGF0ZUN1cnJlbnRTdHVkaW8nKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXBkYXRlU3R1ZGlvLFxuICB1cGRhdGVTdHVkaW9TdWNjZXNzLFxuICB1cGRhdGVTdHVkaW9GYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VwZGF0ZVN0dWRpbycsICdVUERBVEVfU1RVRElPJyk7XG5cbmV4cG9ydCBjb25zdCBzZXRVcGRhdGluZ1N0dWRpbyA9IGNyZWF0ZUFjdGlvbigndXBkYXRpbmdTdHVkaW8nKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0dWRpb1BheW1lbnRJbmZvID0gY3JlYXRlQWN0aW9uKFxuICAnVVBEQVRFX1NUVURJT19QQVlNRU5UX0lORk8nXG4pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0dWRpb0RpcmVjdERlcG9zaXQgPSBjcmVhdGVBY3Rpb24oXG4gICdVUERBVEVfU1RVRElPX0RJUkVDVF9ERVBPU0lUJ1xuKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVTdHVkaW9QYXh1bSA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1NUVURJT19QQVhVTScpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0dWRpb0JpdHBheSA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1NUVURJT19CSVRQQVknKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0U3R1ZGlvRWFybmluZyxcbiAgZ2V0U3R1ZGlvRWFybmluZ1N1Y2Nlc3MsXG4gIGdldFN0dWRpb0Vhcm5pbmdGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFN0dWRpb0Vhcm5pbmcnLCAnR0VUX1NUVURJT19FQVJOSU5HJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ1N0dWRpb0Vhcm5pbmcgPSBjcmVhdGVBY3Rpb24oXG4gICdTRVRfR0VUVElOR19TVFVESU9fRUFSTklHJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0U3R1ZGlvUGF5b3V0UmVxdWVzdCxcbiAgZ2V0U3R1ZGlvUGF5b3V0UmVxdWVzdFN1Y2Nlc3MsXG4gIGdldFN0dWRpb1BheW91dFJlcXVlc3RGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFN0dWRpb1BheW91dFJlcXVlc3QnLCAnR0VUX1NUVURJT19QQVlPVVRfUkVRVUVTVCcpO1xuZXhwb3J0IGNvbnN0IHNldEdldHRpbmdTdHVkaW9QYXlvdXRSZXF1ZXN0ID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX0dFVFRJTkdfU1RVRElPX1BBWU9VVF9SRVFVRVNUJ1xuKTtcbmV4cG9ydCBjb25zdCByZW1vdmVTdHVkaW9QYXlvdXRSZXF1ZXN0ID0gY3JlYXRlQWN0aW9uKFxuICAnUkVNT1ZFX1NUVURJT19QQVlPVVRfUkVRVUVTVCdcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFBlcmZvcm1lclJlcXVlc3QsXG4gIGdldFBlcmZvcm1lclJlcXVlc3RTdWNjZXNzLFxuICBnZXRQZXJmb3JtZXJSZXF1ZXN0RmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRQZXJmb3JtZXJSZXF1ZXN0JywgJ0dFVF9QRVJGT1JNRVJfUkVRVUVTVCcpO1xuZXhwb3J0IGNvbnN0IHNldEdldHRpbmdQZXJmb3JtZXJSZXF1ZXN0ID0gY3JlYXRlQWN0aW9uKFxuICAnU0VUX0dFVFRJTkdfUEVSRk9STUVSX1JFUVVFU1QnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRNZW1iZXJzLFxuICBnZXRNZW1iZXJzU3VjY2VzcyxcbiAgZ2V0TWVtYmVyc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0TWVtYmVycycsICdHRVRfTUVNQkVSUycpO1xuZXhwb3J0IGNvbnN0IGdldE1lbWJlcnNTZWFyY2hpbmcgPSBjcmVhdGVBY3Rpb24oJ0dFVF9NRU1CRVJfU0VBQ0hJTkcnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVNZW1iZXJTdGF0dXMgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9NRU1CRVJfU1RBVFVTJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE1lbWJlcnNDb21taXNzaW9ucyxcbiAgZ2V0TWVtYmVyc0NvbW1pc3Npb25zU3VjY2VzcyxcbiAgZ2V0TWVtYmVyc0NvbW1pc3Npb25zRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNZW1iZXJzQ29tbWlzc2lvbnMnLCAnR0VUX01FTUJFUlNfQ09NTVNTSU9OUycpO1xuZXhwb3J0IGNvbnN0IGdldE1lbWJlcnNDb21taXNzaW9uc1NlYXJjaGluZyA9IGNyZWF0ZUFjdGlvbihcbiAgJ0dFVF9NRU1CRVJfQ09NTVNTSU9fU0VBQ0hJTkcnXG4pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZU1lbWJlckNvbW1pc2lvbiA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX01FTUJFUl9DT01NSVNTSU9OJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFN0dWRpb1N0YXRzLFxuICBnZXRTdHVkaW9TdGF0c1N1Y2Nlc3MsXG4gIGdldFN0dWRpb1N0YXRzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRTdHVkaW9TdGF0cycsICdHRVRfU1RVRElPX1NUQVRTJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlVG90YWxQZXJmb3JtZXIgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9UT1RBTF9QRVJGT1JNRVInKTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUFjdGlvbixcbiAgY3JlYXRlQXN5bmNBY3Rpb25cbn0gZnJvbSAnQGxpYi9yZWR1eCc7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDdXJyZW50VXNlciA9IGNyZWF0ZUFjdGlvbigndXBkYXRlQ3VycmVudFVzZXInKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDdXJyZW50VXNlckF2YXRhciA9IGNyZWF0ZUFjdGlvbigndXBkYXRlQ3VycmVudFVzZXJBdmF0YXInKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVDdXJyZW50VXNlckJhbGFuY2UgPSBjcmVhdGVBY3Rpb24oXG4gICd1cGRhdGVDdXJyZW50VXNlckJhbGFuY2UnXG4pO1xuXG5leHBvcnQgY29uc3Qge1xuICB1cGRhdGVVc2VyLFxuICB1cGRhdGVVc2VyU3VjY2VzcyxcbiAgdXBkYXRlVXNlckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbigndXBkYXRlVXNlcicsICdVUERBVEVfVVNFUicpO1xuXG5leHBvcnQgY29uc3Qgc2V0VXBkYXRpbmcgPSBjcmVhdGVBY3Rpb24oJ3VwZGF0aW5nVXNlcicpO1xuXG5leHBvcnQgY29uc3Qgc2V0UmVkdWNlciA9IGNyZWF0ZUFjdGlvbignc2V0VXNlclJlZHVjZXInKTtcblxuZXhwb3J0IGNvbnN0IGJ1eVRva2VuU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbignYnV5VG9rZW5TdWNjZXNzJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldEZhdm9yaXRlUGVyZm9ybWVycyxcbiAgZ2V0RmF2b3JpdGVQZXJmb3JtZXJzU3VjY2VzcyxcbiAgZ2V0RmF2b3JpdGVQZXJmb3JtZXJzRmFpbGVkXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldEZhdm9yaXRlUGVyZm9ybWVycycsICdHRVRfRkFWT1VSSVRFJyk7XG5leHBvcnQgY29uc3QgZ2V0dGluZ0Zhdm9yaXRlUGVyZm9ybWVycyA9IGNyZWF0ZUFjdGlvbignR0VUVElOR19GQVZPUklURScpO1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZhdm9yaXRlID0gY3JlYXRlQWN0aW9uKCdSRU1PVkVfRkFWT1JJVEUnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UGF5bWVudFRva2VuSGlzdHJveSxcbiAgZ2V0UGF5bWVudFRva2VuSGlzdHJveVN1Y2Nlc3MsXG4gIGdldFBheW1lbnRUb2tlbkhpc3Ryb3lGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFBheW1lbnRUb2tlbkhpc3Ryb3knLCAnR0VUX1BBWU1FVF9UT0tFX0hJU1RPUlknKTtcbmV4cG9ydCBjb25zdCBnZXR0aWdQYXltZW50VG9rZW5IaXN0b3J5ID0gY3JlYXRlQWN0aW9uKCdHRVRUSU5HX1BBWU1FVF9UT0tFX0hJU1RPUlknKTtcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCB7IElSZWdpc3RlckZvcm1EYXRhIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNwb25zZTxUPiB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBkYXRhOiBUO1xufVxuXG5leHBvcnQgY29uc3QgVE9LRU4gPSAndG9rZW4nO1xuZXhwb3J0IGNvbnN0IFJPTEUgPSAncm9sZSc7XG5leHBvcnQgY29uc3QgUEVSRk9STUVSX1JPTEUgPSAncGVyZm9ybWVyJztcbmV4cG9ydCBjb25zdCBVU0VSX1JPTEUgPSAndXNlcic7XG5leHBvcnQgY29uc3QgU1RVRElPX1JPTEUgPSAnc3R1ZGlvJztcbmV4cG9ydCBjb25zdCBTT1JUID0geyBkZXNjZW5kOiAnZGVzYycsIGFzY2VuZDogJ2FzYycgfTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFQSVJlcXVlc3Qge1xuICBzdGF0aWMgdG9rZW46IHN0cmluZyA9ICcnO1xuXG4gIHNldEF1dGhIZWFkZXJUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgQVBJUmVxdWVzdC50b2tlbiA9IHRva2VuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgSlNPTiByZXR1cm5lZCBieSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHJlc3BvbnNlIEEgcmVzcG9uc2UgZnJvbSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgIFRoZSBwYXJzZWQgSlNPTiBmcm9tIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwcml2YXRlIHBhcnNlSlNPTihyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIG5ldHdvcmsgcmVxdWVzdCBjYW1lIGJhY2sgZmluZSwgYW5kIHRocm93cyBhbiBlcnJvciBpZiBub3RcbiAgICpcbiAgICogQHBhcmFtICB7b2JqZWN0fSByZXNwb25zZSAgIEEgcmVzcG9uc2UgZnJvbSBhIG5ldHdvcmsgcmVxdWVzdFxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R8dW5kZWZpbmVkfSBSZXR1cm5zIGVpdGhlciB0aGUgcmVzcG9uc2UsIG9yIHRocm93cyBhbiBlcnJvclxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBjaGVja1N0YXR1cyhyZXNwb25zZTogUmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MTMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBFbnRpdHkgVG9vIExhcmdlJyk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvcmJpZGRlbiBpbiB0aGUgYWN0aW9uIScpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSBhcyBhbnk7XG4gICAgLy8gZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAvLyB0aHJvdyBlcnJvcjtcbiAgICB0aHJvdyByZXNwb25zZS5jbG9uZSgpLmpzb24oKTtcbiAgfVxuXG4gIHJlcXVlc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgbWV0aG9kPzogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IHZlcmIgPSAobWV0aG9kIHx8ICdnZXQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHVwZGF0ZWRIZWFkZXIgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLy8gVE9ETyAtIGNoZWNrIG1lXG4gICAgICBBdXRob3JpemF0aW9uOlxuICAgICAgICBBUElSZXF1ZXN0LnRva2VuIHx8IChwcm9jZXNzLmJyb3dzZXIgPyBjb29raWUuZ2V0KFRPS0VOKSA6ICcnKSxcbiAgICAgIC4uLihoZWFkZXJzIHx8IHt9KVxuICAgIH07XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG5cbiAgICByZXR1cm4gZmV0Y2goaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5BUElfRU5EUE9JTlQgfHwgY29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gLCB7XG4gICAgICBtZXRob2Q6IHZlcmIsXG4gICAgICBoZWFkZXJzOiB1cGRhdGVkSGVhZGVyLFxuICAgICAgYm9keTogYm9keSA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogbnVsbFxuICAgIH0pXG4gICAgICAudGhlbih0aGlzLmNoZWNrU3RhdHVzKVxuICAgICAgLnRoZW4odGhpcy5wYXJzZUpTT04pO1xuICB9XG5cbiAgYnVpbGRVcmwoYmFzZVVybDogc3RyaW5nLCBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfSkge1xuICAgIGlmICghcGFyYW1zKSB7XG4gICAgICByZXR1cm4gYmFzZVVybDtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgIC5tYXAoKGspID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrKX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tdKX1gKVxuICAgICAgLmpvaW4oJyYnKTtcbiAgICByZXR1cm4gYCR7YmFzZVVybH0/JHtxdWVyeVN0cmluZ31gO1xuICB9XG5cbiAgZ2V0KHVybDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAnZ2V0JywgbnVsbCwgaGVhZGVycyk7XG4gIH1cblxuICBwb3N0KHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAncG9zdCcsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgcHV0KHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAncHV0JywgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICBkZWwodXJsOiBzdHJpbmcsIGRhdGE/OiBhbnksIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsICdkZWxldGUnLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwbG9hZChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBmaWxlczoge1xuICAgICAgZmlsZTogRmlsZTtcbiAgICAgIGZpZWxkbmFtZTogc3RyaW5nO1xuICAgIH1bXSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvblByb2dyZXNzOiBGdW5jdGlvbjtcbiAgICAgIGN1c3RvbURhdGE/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICAgICAgbWV0aG9kPzogc3RyaW5nO1xuICAgIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge30sXG4gICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH1cbiAgKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgY29uc3QgdXBsb2FkVXJsID0gaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZmlsZXMuZm9yRWFjaCgoZikgPT4gZm9ybURhdGEuYXBwZW5kKGYuZmllbGRuYW1lLCBmLmZpbGUsIGYuZmlsZS5uYW1lKSk7XG4gICAgICBvcHRpb25zLmN1c3RvbURhdGFcbiAgICAgICAgJiYgT2JqZWN0LmtleXMob3B0aW9ucy5jdXN0b21EYXRhKS5mb3JFYWNoKFxuICAgICAgICAgIChmaWVsZG5hbWUpID0+IHR5cGVvZiBvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICYmIGZvcm1EYXRhLmFwcGVuZChmaWVsZG5hbWUsIG9wdGlvbnMuY3VzdG9tRGF0YVtmaWVsZG5hbWVdKVxuICAgICAgICApO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4ob3B0aW9ucy5tZXRob2QgfHwgJ1BPU1QnLCB1cGxvYWRVcmwpO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICByZWdpc3RlcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJUmVnaXN0ZXJGb3JtRGF0YSxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEuZG9jdW1lbnRWZXJpZmljYXRpb24pIHtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlID0gZGF0YS5kb2N1bWVudFZlcmlmaWNhdGlvbi5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAnZG9jdW1lbnRWZXJpZmljYXRpb24nLFxuICAgICAgICAgIGRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZSxcbiAgICAgICAgICBkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUubmFtZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5pZFZlcmlmaWNhdGlvbikge1xuICAgICAgICBjb25zdCBpZFZlcmlmaWNhdGlvbkRpbGUgPSBkYXRhLmlkVmVyaWZpY2F0aW9uLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICdpZFZlcmlmaWNhdGlvbicsXG4gICAgICAgICAgaWRWZXJpZmljYXRpb25EaWxlLFxuICAgICAgICAgIGlkVmVyaWZpY2F0aW9uRGlsZS5uYW1lXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICBvbWl0KGRhdGEsIFsnZG9jdW1lbnRWZXJpZmljYXRpb24nLCAnaWRWZXJpZmljYXRpb24nXSlcbiAgICAgICkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQT1NUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHtcbiAgSUxvZ2luLFxuICBJcGVyZm9ybWVyTG9naW4sXG4gIElSZWdpc3RlckZvcm1EYXRhLFxuICBJVXNlclJlZ2lzdGVyRm9ybURhdGFcbn0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgQVBJUmVxdWVzdCwgVE9LRU4sIElSZXNwb25zZSwgUk9MRVxufSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGxvZ2luKGRhdGE6IElMb2dpbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL2xvZ2luJywgZGF0YSk7XG4gIH1cblxuICBzZXRBdXRoSGVhZGVyKHRva2VuOiBzdHJpbmcsIHJvbGU6IHN0cmluZykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gICAgLy8gc2luY2UgU2FmYXJpIGRvZXMgbm90IHN1cHBvcnQsIG5lZWQgYSBiZXR0ZXIgc29sdXRpb25cbiAgICBjb29raWUuc2V0KFRPS0VOLCB0b2tlbiwgeyBleHBpcmVzOiAzNjUgfSk7XG4gICAgY29va2llLnNldChST0xFLCByb2xlLCB7IGV4cGlyZXM6IDM2NSB9KTtcbiAgICB0aGlzLnNldEF1dGhIZWFkZXJUb2tlbih0b2tlbik7XG4gIH1cblxuICBwZXJmb3JtZXJMb2dpbihkYXRhOiBJcGVyZm9ybWVyTG9naW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9wZXJmb3JtZXJzL2xvZ2luJywgZGF0YSk7XG4gIH1cblxuICBzdHVkaW9Mb2dpbihkYXRhOiBJTG9naW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC9zdHVkaW8vbG9naW4nLCBkYXRhKTtcbiAgfVxuXG4gIHNldFRva2VuKHRva2VuOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICAgIC8vIHNpbmNlIFNhZmFyaSBkb2VzIG5vdCBzdXBwb3J0LCBuZWVkIGEgYmV0dGVyIHNvbHV0aW9uXG4gICAgY29va2llLnNldChUT0tFTiwgdG9rZW4sIHsgZXhwaXJlczogMzY1IH0pO1xuICAgIHRoaXMuc2V0QXV0aEhlYWRlclRva2VuKHRva2VuKTtcbiAgfVxuXG4gIGdldFRva2VuKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICByZXR1cm4gdG9rZW4gfHwgbnVsbDtcbiAgfVxuXG4gIGdldFJvbGUoKTogc3RyaW5nIHtcbiAgICBjb25zdCByb2xlID0gY29va2llLmdldChST0xFKTtcbiAgICByZXR1cm4gcm9sZSB8fCBudWxsO1xuICB9XG5cbiAgcmVtb3ZlVG9rZW4oKTogdm9pZCB7XG4gICAgY29va2llLnJlbW92ZShUT0tFTik7XG4gICAgY29va2llLnJlbW92ZShST0xFKTtcbiAgfVxuXG4gIHJlbW92ZVJlbWVtYmVyKCk6IHZvaWQge1xuICAgIHByb2Nlc3MuYnJvd3NlciAmJiBjb29raWUucmVtb3ZlKCdyZW1lbWJlck1lJyk7XG4gIH1cblxuICB1cGRhdGVQYXNzd29yZChib2R5OiB7IHBhc3N3b3JkOiBzdHJpbmc7IHNvdXJjZT86IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvYXV0aC91c2Vycy9tZS9wYXNzd29yZCcsIGJvZHkpO1xuICB9XG5cbiAgcGVyZm9ybWVyc1JlZ2lzdGVyKGRhdGE6IElSZWdpc3RlckZvcm1EYXRhKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlcignL2F1dGgvcGVyZm9ybWVycy9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgdXNlclJlZ2lzdGVyKGRhdGE6IElVc2VyUmVnaXN0ZXJGb3JtRGF0YSk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC91c2Vycy9yZWdpc3RlcicsIGRhdGEpO1xuICB9XG5cbiAgc3R1ZGlvUmVnaXN0ZXIoZGF0YTogSVJlZ2lzdGVyRm9ybURhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKCcvYXV0aC9zdHVkaW8vcmVnaXN0ZXInLCBkYXRhKTtcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKGVtYWlsOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlbWFpbCxcbiAgICAgIHR5cGVcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9hdXRoL3VzZXJzL2ZvcmdvdCcsIGRhdGEpO1xuICB9XG5cbiAgcmVzZW5kVmVyaWZpY2F0aW9uRW1haWwoZGF0YTogeyBlbWFpbDogc3RyaW5nLCBzb3VyY2U6IHN0cmluZ30pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvdmVyaWZpY2F0aW9uL3Jlc2VuZC12ZXJpZmljYXRpb24tZW1haWwnLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSBuZXcgQXV0aFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElCYW5uZXJTZWFyY2ggfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBCYW5uZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeTogSUJhbm5lclNlYXJjaCkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvYmFubmVycy9zZWFyY2gnLCBxdWVyeSBhcyBhbnkpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYmFubmVyU2VydmljZSA9IG5ldyBCYW5uZXJTZXJ2aWNlKCk7XG4iLCJsZXQgZ2xvYmFsQ29uZmlnID0ge30gYXMgYW55O1xuXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsQ29uZmlnID0gKGNvbmZpZzogYW55KSA9PiB7XG4gIGdsb2JhbENvbmZpZyA9IGNvbmZpZztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRHbG9iYWxDb25maWcgPSAoKSA9PiBnbG9iYWxDb25maWc7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIEVhcm5pbmdTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCByb2xlID0gJ3BlcmZvcm1lcicpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybChgL2Vhcm5pbmcvJHtyb2xlfS9zZWFyY2hgLCBwYXJhbXMpKTtcbiAgfVxuXG4gIHN0YXRzKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJvbGUgPSAncGVyZm9ybWVyJykge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvZWFybmluZy8ke3JvbGV9L3N0YXRzYCwgcGFyYW1zKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVhcm5pbmdTZXJ2aWNlID0gbmV3IEVhcm5pbmdTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIEZhdm91cml0ZVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbGlrZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL2Zhdm91cml0ZS8ke2lkfS9saWtlYCk7XG4gIH1cblxuICB1bmxpa2UoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9mYXZvdXJpdGUvJHtpZH0vdW5saWtlYCk7XG4gIH1cblxuICBmYXZvcml0ZShpZDogc3RyaW5nLCBpc0Zhdm9yaXRlZDogYm9vbGVhbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9mYXZvdXJpdGUvJHtpZH0vJHtpc0Zhdm9yaXRlZCA/ICd1bmxpa2UnIDogJ2xpa2UnfWApO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9mYXZvdXJpdGUnLCBxdWVyeSkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmYXZvdXJpdGVTZXJ2aWNlID0gbmV3IEZhdm91cml0ZVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElSZXNwb25zZSwgSURhdGFSZXNwb25zZSwgSVBlcmZvcm1lckdhbGxlcnkgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBHYWxsZXJ5U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2goXG4gICAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgICBpc1BlcmZvcm1lciA9IHRydWVcbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8SURhdGFSZXNwb25zZTxJUGVyZm9ybWVyR2FsbGVyeT4+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybChcbiAgICAgICAgaXNQZXJmb3JtZXJcbiAgICAgICAgICA/ICcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzL3NlYXJjaCdcbiAgICAgICAgICA6ICcvdXNlci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy9zZWFyY2gnLFxuICAgICAgICBwYXJhbXNcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHVyY2hhc2VkKHBhcmFtcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0pOiBQcm9taXNlPElSZXNwb25zZTxJRGF0YVJlc3BvbnNlPElQZXJmb3JtZXJHYWxsZXJ5Pj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3B1cmNoYXNlZC1pdGVtcy91c2VyL2dhbGxlcmllcycsIHBhcmFtcykpO1xuICB9XG5cbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzJywgZGF0YSk7XG4gIH1cblxuICB1cGRhdGUoaWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH1gLCBkYXRhKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICBgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy8ke2lkfS92aWV3YCxcbiAgICAgIGhlYWRlcnNcbiAgICApO1xuICB9XG5cbiAgcHVibGljZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2FsbGVyeVNlcnZpY2UgPSBuZXcgR2FsbGVyeVNlcnZpY2UoKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGVyZm9tZXItY2F0ZWdvcmllcy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGVyZm9tZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZGVvLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9kdWN0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXR0aW5nLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9waG90by5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZ2FsbGVyeS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZmF2b3VyaXRlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi90b2tlbi1wYWNrYWdlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2FjdGlvbi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3RyZWFtLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wdXJjaGFzZS1pdGVtLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9vcmRlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZWFybmluZy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGF5b3V0LXJlcXVlc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWZ1bmQtcmVxdWVzdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0dWRpby5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYmFubmVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXltZW50LWluZm9ybWF0aW9uLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJlYW0uc2VydmljZSc7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBnZXRDb252ZXJzYXRpb25zKHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvY29udmVyc2F0aW9ucycsIHF1ZXJ5KSk7XG4gIH1cblxuICBzZWFyY2hDb252ZXJzYXRpb25zKHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvY29udmVyc2F0aW9ucy9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgY3JlYXRlQ29udmVyc2F0aW9uKGRhdGE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvY29udmVyc2F0aW9ucycsIGRhdGEpO1xuICB9XG5cbiAgZ2V0Q29udmVyc2F0aW9uRGV0YWlsKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zLyR7aWR9YCk7XG4gIH1cblxuICBnZXRDb252ZXJzYXRpb25CeVN0cmVhbUlkKHN0cmVhbUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9jb252ZXJzYXRpb25zL3N0cmVhbS8ke3N0cmVhbUlkfWApO1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgcXVlcnk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgcXVlcnkpKTtcbiAgfVxuXG4gIGdldFB1YmxpY01lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvbWVzc2FnZXMvY29udmVyc2F0aW9ucy9wdWJsaWMvJHtjb252ZXJzYXRpb25JZH1gLCBxdWVyeSkpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZXNzYWdlcy9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBzZW5kU3RyZWFtTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL3N0cmVhbS9jb252ZXJzYXRpb25zLyR7Y29udmVyc2F0aW9uSWR9YCwgZGF0YSk7XG4gIH1cblxuICBzZW5kUHVibGljU3RyZWFtTWVzc2FnZShjb252ZXJzYXRpb25JZDogc3RyaW5nLCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lc3NhZ2VzL3N0cmVhbS9wdWJsaWMvY29udmVyc2F0aW9ucy8ke2NvbnZlcnNhdGlvbklkfWAsIGRhdGEpO1xuICB9XG5cbiAgZmluZFB1YmxpY0NvbnZlcnNhdGlvblBlcmZvcm1lcihwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvY29udmVyc2F0aW9ucy9zdHJlYW0vcHVibGljLyR7cGVyZm9ybWVySWR9YCk7XG4gIH1cblxuICBjb3VudFRvdGFsTm90UmVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9tZXNzYWdlcy9jb3VudGluZy1ub3QtcmVhZC1tZXNzYWdlcycpO1xuICB9XG5cbiAgcmVhZEFsbEluQ29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcgfCBudW1iZXIsIHJlY2lwaWVudElkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvbWVzc2FnZXMvcmVhZC1hbGwnLCB7IGNvbnZlcnNhdGlvbklkLCByZWNpcGllbnRJZCB9KTtcbiAgfVxuXG4gIGdldE1lc3NhZ2VVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L21lc3NhZ2VzL3ByaXZhdGUvZmlsZWA7XG4gIH1cblxuICBkZWxldGVNZXNzYWdlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvbWVzc2FnZXMvJHtpZH1gKTtcbiAgfVxuXG4gIGRlbGV0ZUFsbE1lc3NhZ2VJbkNvbnZlcnNhdGlvbihjb252ZXJzYXRpb25JZCkge1xuICAgIHJldHVybiB0aGlzLmRlbChgL21lc3NhZ2VzLyR7Y29udmVyc2F0aW9uSWR9L3JlbW92ZS1hbGwtbWVzc2FnZWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtZXNzYWdlU2VydmljZSA9IG5ldyBNZXNzYWdlU2VydmljZSgpO1xuIiwiLy8gaW1wb3J0IHsgSUdhbGxlcnlDcmVhdGUgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBPcmRlclNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL29yZGVycy9zZWFyY2gnLCBwYXlsb2FkKSk7XG4gIH1cblxuICBkZXRhaWxzKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvb3JkZXJzL2RldGFpbHMvJHtpZH1gKTtcbiAgfVxuXG4gIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL29yZGVycy8ke2lkfS91cGRhdGVgLCBkYXRhKTtcbiAgfVxuXG4gIHVzZXJTZWFyY2gocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL29yZGVycy91c2VyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICB1c2VyRmluZERldGFpbHMoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9vcmRlcnMvdXNlci9kZXRhaWxzLyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9yZGVyU2VydmljZSA9IG5ldyBPcmRlclNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuY2xhc3MgUGF5bWVudEluZm9ybWF0aW9uU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wYXltZW50LWluZm9ybWF0aW9uJywgZGF0YSk7XG4gIH1cblxuICBmaW5kT25lKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BheW1lbnQtaW5mb3JtYXRpb24nLCBkYXRhKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBheW1lbnRJbmZvcm1hdGlvblNlcnZpY2UgPSBuZXcgUGF5bWVudEluZm9ybWF0aW9uU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVJlc3BvbnNlIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBQYXlvdXRSZXF1ZXN0U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjYWxjdWxhdGUocGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCByb2xlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKGAvZWFybmluZy8ke3JvbGUgfHwgJ3BlcmZvcm1lcid9L3BheW91dGAsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wYXlvdXQtcmVxdWVzdHMvcGVyZm9ybWVyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBzdHVkaW9TZWFyY2gocXVlcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BheW91dC1yZXF1ZXN0cy9zdHVkaW8vc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGNyZWF0ZShib2R5OiBhbnksIHJvbGUgPSAncGVyZm9ybWVyJykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wYXlvdXQtcmVxdWVzdHMvJHtyb2xlfWAsIGJvZHkpO1xuICB9XG5cbiAgdXBkYXRlKGlkOiBzdHJpbmcsIGJvZHk6IGFueSwgcm9sZSA9ICdwZXJmb3JtZXInKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvcGF5b3V0LXJlcXVlc3RzLyR7cm9sZX0vJHtpZH1gLCBib2R5KTtcbiAgfVxuXG4gIGRldGFpbChcbiAgICBpZDogc3RyaW5nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICB9LFxuICAgIHJvbGUgPSAncGVyZm9ybWVyJ1xuICApOiBQcm9taXNlPElSZXNwb25zZTxQYXlvdXRSZXF1ZXN0U2VydmljZT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wYXlvdXQtcmVxdWVzdHMvJHtyb2xlfS8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBheW91dFJlcXVlc3RTZXJ2aWNlID0gbmV3IFBheW91dFJlcXVlc3RTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQZXJmb3JtZXJDYXRlZ29yaWVzU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBnZXRMaXN0KHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyLWNhdGVnb3JpZXMnLCBxdWVyeSkpO1xuICB9XG5cbiAgZGV0YWlscyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyLWNhdGVnb3JpZXMvJHtpZH0vdmlld2ApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwZXJmb3JtZXJDYXRlZ29yaWVzID0gbmV3IFBlcmZvcm1lckNhdGVnb3JpZXNTZXJ2aWNlKCk7XG4iLCJpbXBvcnQge1xuICBJUGVyZm9ybWVyLFxuICBJQ3JlYXRlUGVyZm9ybWVyUHJvZHVjdFBheWxvYWQsXG4gIElVcGRhdGVQZXJmb3JtZXJQcm9kdWN0UGF5bG9hZFxufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuXG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UsIFRPS0VOIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBQZXJmb3JtZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIG1lKGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9wZXJmb3JtZXJzL21lJywgaGVhZGVycyk7XG4gIH1cblxuICB1cGRhdGVNZShwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoJy9wZXJmb3JtZXJzJywgcGF5bG9hZCk7XG4gIH1cblxuICBzZWFyY2gocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXJzL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBkZXRhaWxzKHVzZXJuYW1lOiBzdHJpbmcsIGhlYWRlcnMgPSB7fSk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVycy8ke3VzZXJuYW1lfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICBnZXRBdmF0YXJVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3BlcmZvcm1lcnMvYXZhdGFyL3VwbG9hZGA7XG4gIH1cblxuICBnZXREb2N1bWVudHNVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3BlcmZvcm1lcnMvZG9jdW1lbnRzL3VwbG9hZGA7XG4gIH1cblxuICBnZXRSZWxlYXNlRm9ybVVybCgpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0vcGVyZm9ybWVycy9yZWxlYXNlLWZvcm0vdXBsb2FkYDtcbiAgfVxuXG4gIG15UHJvZHVjdChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVByb2R1Y3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSUNyZWF0ZVBlcmZvcm1lclByb2R1Y3RQYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEuaW1hZ2UpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkYXRhLmltYWdlLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlLCBpbWFnZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuZGlnaXRhbEZpbGUpIHtcbiAgICAgICAgY29uc3QgZGlnaXRhbEZpbGUgPSBkYXRhLmRpZ2l0YWxGaWxlLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkaWdpdGFsRmlsZScsIGRpZ2l0YWxGaWxlLCBkaWdpdGFsRmlsZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ2ltYWdlJywgJ2RpZ2l0YWxGaWxlJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUHJvZHVjdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJVXBkYXRlUGVyZm9ybWVyUHJvZHVjdFBheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5pbWFnZSAmJiBkYXRhLmltYWdlLmZpbGUpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkYXRhLmltYWdlLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlLCBpbWFnZS5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuZGlnaXRhbEZpbGUgJiYgZGF0YS5kaWdpdGFsRmlsZS5maWxlKSB7XG4gICAgICAgIGNvbnN0IGRpZ2l0YWxGaWxlID0gZGF0YS5kaWdpdGFsRmlsZS5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGlnaXRhbEZpbGUnLCBkaWdpdGFsRmlsZSwgZGlnaXRhbEZpbGUubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWydpbWFnZScsICdkaWdpdGFsRmlsZSddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQVVQnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlUHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH1gKTtcbiAgfVxuXG4gIGdldENvbW1pc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc2V0dGluZ3MvcGVyZm9ybWVyL2NvbW1pc3Npb24nKTtcbiAgfVxuXG4gIHVwZGF0ZVBheW1lbnRJbmZvKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2JhbmstdHJhbnNmZXIvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVEaXJlY3REZXBvc3QocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvZGlyZWN0LWRlcG9zaXQvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVQYXh1bShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9wYXh1bS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZUJpdHBheShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9iaXRwYXkvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVTdHJlYW1pbmdTdGF0dXMocGF5bG9hZDoge1xuICAgIHN0YXR1czogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9zdHJlYW1pbmctc3RhdHVzL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2VvQmxvY2socGF5bG9hZDoge3VzZXJJZHM/OiBzdHJpbmdbXSwgY291bnRyaWVzPzogc3RyaW5nW119KTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2Jsb2NraW5nL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0QmxvY2tlZExpc3QoKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVycy9ibG9ja2luZycpKTtcbiAgfVxuXG4gIGluY3JlYXNlVmlldyhwZXJmb3JtZXJJZCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wZXJmb3JtZXJzLyR7cGVyZm9ybWVySWR9L2luYy12aWV3YCk7XG4gIH1cblxuICB1cGRhdGVEZWZhdWx0UHJpY2UocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvZGVmYXVsdC1wcmljZS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZUJyb2FkY2FzdFNldHRpbmcocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9icm9hZGNhc3Qtc2V0dGluZy91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHN1c3BlbmRBY2NvdW50KHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9zdXNwZW5kLWFjY291bnQnLCB7IHBhc3N3b3JkIH0pO1xuICB9XG5cbiAgY2hlY2tCbG9jayhwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVycy8ke3BlcmZvcm1lcklkfS9jaGVjay1ibG9ja2luZ2ApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBHRU5OREVSX1BFUkZPUk1FUiA9IFsnZmVtYWxlJywgJ3RyYW5zZ2VuZGVyJywgJ21hbGUnXTtcblxuZXhwb3J0IGNvbnN0IHBlcmZvcm1lclNlcnZpY2UgPSBuZXcgUGVyZm9ybWVyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IFRPS0VOIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7XG4gIElSZXNwb25zZSxcbiAgSVBlcmZvcm1lclBob3RvUGF5bG9hZCxcbiAgSURhdGFSZXNwb25zZSxcbiAgSVBob3RvXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFBob3RvU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfSk6IFByb21pc2U8SVJlc3BvbnNlPElEYXRhUmVzcG9uc2U8SVBob3RvPj4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zL3NlYXJjaCcsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgc2VhcmNoQnlHYWxsZXJ5KFxuICAgIGdhbGxlcnlJZDogc3RyaW5nLFxuICAgIHBhcmFtcz86IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9LFxuICAgIGhlYWRlcnM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gICkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoXG4gICAgICAgIGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy8ke2dhbGxlcnlJZH0vc2VhcmNoYCxcbiAgICAgICAgcGFyYW1zXG4gICAgICApLFxuICAgICAgaGVhZGVyc1xuICAgICk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zLyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIG15UGhvdG9zKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3Mvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zLyR7aWR9YCk7XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVBlcmZvcm1lclBob3RvUGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLnBob3RvKSB7XG4gICAgICAgIGNvbnN0IHBob3RvID0gZGF0YS5waG90by5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBwaG90bywgcGhvdG8ubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWydwaG90byddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQT1NUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJUGVyZm9ybWVyUGhvdG9QYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEucGhvdG8gJiYgZGF0YS5waG90by5maWxlKSB7XG4gICAgICAgIGNvbnN0IHBob3RvID0gZGF0YS5waG90by5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBwaG90bywgcGhvdG8ubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWydwaG90byddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQVVQnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBsb2FkSW1hZ2VzKGZpbGU6IEZpbGUsIHBheWxvYWQ6IGFueSwgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkKFxuICAgICAgJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvdXBsb2FkJyxcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIGZpZWxkbmFtZTogJ3Bob3RvJyxcbiAgICAgICAgICBmaWxlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB7XG4gICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgIGN1c3RvbURhdGE6IHBheWxvYWRcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwaG90b1NlcnZpY2UgPSBuZXcgUGhvdG9TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUG9zdFNlYXJjaCB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFBvc3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChxdWVyeTogSVBvc3RTZWFyY2gpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3Bvc3RzL3NlYXJjaCcsIHF1ZXJ5IGFzIGFueSkpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3Bvc3RzLyR7aWR9YCk7XG4gIH1cblxuICBjcmVhdGVDb250YWN0Q290ZW50KGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvY29udGFjdCcsIHsgLi4uZGF0YSB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcG9zdFNlcnZpY2UgPSBuZXcgUG9zdFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGRldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9wcm9kdWN0cy9zZWFyY2gnLCBwYXJhbXMpKTtcbiAgfVxuXG4gIHB1cmNoYXNlZChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wdXJjaGFzZWQtaXRlbXMvdXNlci9wcm9kdWN0cycsIHBhcmFtcykpO1xuICB9XG5cbiAgZ2V0RG93bmxvYWRMaW5rKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2VyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvJHtpZH0vZG93bmxvYWQtbGlua2ApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0U2VydmljZSA9IG5ldyBQcm9kdWN0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUHVyY2hhc2VJdGVtU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3B1cmNoYXNlZC1pdGVtcy91c2VyL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBwdXJjaGFzZUl0ZW0oaWQ6IHN0cmluZywgdHlwZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3B1cmNoYXNlLWl0ZW1zLyR7dHlwZX0vJHtpZH1gLCBkYXRhKTtcbiAgfVxuXG4gIHB1cmNoYXNlUHJvZHVjdChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3B1cmNoYXNlLWl0ZW1zL3Byb2R1Y3QvJHtpZH1gKTtcbiAgfVxuXG4gIHB1cmNoYXNlVmlkZW8oaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wdXJjaGFzZS1pdGVtcy92aWRlby8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwdXJjaGFzZUl0ZW1TZXJ2aWNlID0gbmV3IFB1cmNoYXNlSXRlbVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFJlZnVuZFJlcXVlc3RTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3JlZnVuZC1yZXF1ZXN0cycsIGRhdGEpO1xuICB9XG5cbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3JlZnVuZC1yZXF1ZXN0cy9zZWFyY2gnLCBwYXJhbXMpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVmdW5kUmVxdWVzdFNlcnZpY2UgPSBuZXcgUmVmdW5kUmVxdWVzdFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElTZXR0aW5nLCBJQ291bnRyaWVzIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCwgSVJlc3BvbnNlIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBhbGwoZ3JvdXAgPSAnJyk6IFByb21pc2U8SVJlc3BvbnNlPElTZXR0aW5nPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc2V0dGluZ3MvcHVibGljJywgeyBncm91cCB9KSk7XG4gIH1cblxuICBnZXRDb3VudHJpZXMoKTogUHJvbWlzZTxJUmVzcG9uc2U8SUNvdW50cmllc1tdPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL2NvdW50cmllcy9saXN0Jyk7XG4gIH1cblxuICBnZXRUaW1lem9uZXMoKTogUHJvbWlzZTxJUmVzcG9uc2U8c3RyaW5nW10+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvdGltZXpvbmVzL2xpc3QnKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0dGluZ1NlcnZpY2UgPSBuZXcgU2V0dGluZ1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IElPbmVUaW1lVG9rZW4sIFN0cmVhbVNldHRpbmdzIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0UmVzcG9uc2VFcnJvciB9IGZyb20gJ3NyYy9saWInO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBTdHJlYW1TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGdldFNlc3Npb25JZChpZDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9zdHJlYW1pbmcvc2Vzc2lvbi8ke2lkfS8ke3R5cGV9YCk7XG4gIH1cblxuICBnb0xpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0cmVhbWluZy9saXZlJyk7XG4gIH1cblxuICBqb2luUHVibGljQ2hhdChwZXJmb3JtZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3N0cmVhbWluZy9qb2luLyR7cGVyZm9ybWVySWR9YCk7XG4gIH1cblxuICByZXF1ZXN0UHJpdmF0ZUNoYXQocGVyZm9ybWVySWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9zdHJlYW1pbmcvcHJpdmF0ZS1jaGF0LyR7cGVyZm9ybWVySWR9YCk7XG4gIH1cblxuICBhY2NlcHRQcml2YXRlQ2hhdChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvc3RyZWFtaW5nL3ByaXZhdGUtY2hhdC8ke2lkfWApO1xuICB9XG5cbiAgc3RhcnRHcm91cENoYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0cmVhbWluZy9ncm91cC1jaGF0Jyk7XG4gIH1cblxuICBqb2luR3JvdXBDaGF0KGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9zdHJlYW1pbmcvZ3JvdXAtY2hhdC8ke2lkfWApO1xuICB9XG5cbiAgZ2VuZXJhdGVPbmVUaW1lVG9rZW4oZGF0YTogSU9uZVRpbWVUb2tlbikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHJlYW1pbmcvdG9rZW4nLCBkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIGdldFB1Ymxpc2hUb2tlbihvcHRpb25zOiB7XG4gICAgc3RyZWFtSWQ6IHN0cmluZyxcbiAgICBzZXR0aW5nczogU3RyZWFtU2V0dGluZ3NcbiAgICB9LCBleHBpcmVEYXRlID0gbW9tZW50KCkuYWRkKDEsICdkJykudG9EYXRlKCkuZ2V0VGltZSgpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBzZXR0aW5ncywgc3RyZWFtSWQgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCB7IHNlY3VyZU9wdGlvbiB9ID0gc2V0dGluZ3M7XG4gICAgICBpZiAoc2VjdXJlT3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmdlbmVyYXRlT25lVGltZVRva2VuKHtcbiAgICAgICAgICBpZDogc3RyZWFtSWQsXG4gICAgICAgICAgdHlwZTogJ3B1Ymxpc2gnLFxuICAgICAgICAgIGV4cGlyZURhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwLmRhdGEudG9rZW5JZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnIpO1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycm9yKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRTdWJzY3JpYmVyVG9rZW4ob3B0aW9uczoge1xuICAgIHN0cmVhbUlkOiBzdHJpbmcsXG4gICAgc2V0dGluZ3M6IFN0cmVhbVNldHRpbmdzXG4gICAgfSwgZXhwaXJlRGF0ZSA9IG1vbWVudCgpLmFkZCgxLCAnZCcpLnRvRGF0ZSgpLmdldFRpbWUoKSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgc2V0dGluZ3MsIHN0cmVhbUlkIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgeyBzZWN1cmVPcHRpb24gfSA9IHNldHRpbmdzO1xuICAgICAgaWYgKHNlY3VyZU9wdGlvbikge1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5nZW5lcmF0ZU9uZVRpbWVUb2tlbih7XG4gICAgICAgICAgaWQ6IHN0cmVhbUlkLFxuICAgICAgICAgIHR5cGU6ICdwbGF5JyxcbiAgICAgICAgICBleHBpcmVEYXRlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcC5kYXRhLnRva2VuSWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoZXJyKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZ2V0UmVzcG9uc2VFcnJvcihlcnJvcikpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0TGl2ZVN0cmVhbU9yVm9kVVJMKG9wdGlvbnM6IHtcbiAgICBzdHJlYW1JZDogc3RyaW5nLFxuICAgIHNldHRpbmdzOiBTdHJlYW1TZXR0aW5ncyxcbiAgICBhcHBOYW1lOiBzdHJpbmdcbiAgICB9LCBleHBpcmVEYXRlID0gbW9tZW50KCkuYWRkKDEsICdkJykudG9EYXRlKCkuZ2V0VGltZSgpLCBfcGxheWVyID0gJ2hscycpIHtcbiAgICAvLyBodHRwOi8vW0lQX0FkZHJlc3NdLzxBcHBsaWNhdGlvbl9OYW1lPi9zdHJlYW1zL3N0cmVhbUlELm1wND90b2tlbj10b2tlbklkXG4gICAgLy8gaHR0cDovL1tJUF9BZGRyZXNzXS88QXBwbGljYXRpb25fTmFtZT4vc3RyZWFtcy9zdHJlYW1JRC5tM3U4P3Rva2VuPXRva2VuSWRcbiAgICAvLyBodHRwOi8vW0lQX0FkZHJlc3NdLzxBcHBsaWNhdGlvbl9OYW1lPi9wbGF5Lmh0bWw/bmFtZT1zdHJlYW1JRCZwbGF5T3JkZXI9aGxzJnRva2VuPXRva2VuSWRcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3Qgc3JjID0gYGh0dHBzOi8vJHt2aWV3ZXJVUkx9OjU0NDMvJHthcHBOYW1lfS9zdHJlYW1zLyR7c3RyZWFtSWR9Lm0zdTgke29uZVRpbWVUb2tlbiA/IGA/dG9rZW49JHtvbmVUaW1lVG9rZW59YCA6ICcnfWA7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gICAgICBjb25zdCB7IGFwcE5hbWUsIHNldHRpbmdzLCBzdHJlYW1JZCB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHsgc2VjdXJlT3B0aW9uLCB2aWV3ZXJVUkwgfSA9IHNldHRpbmdzO1xuICAgICAgY29uc3QgZXh0ZW5zaW9uID0gX3BsYXllciA9PT0gJ2hscycgPyAnbTN1OCcgOiAnbXA0JztcbiAgICAgIGlmICghdmlld2VyVVJMIHx8ICFhcHBOYW1lKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgbGV0IG9uZVRpbWVUb2tlbiA9ICcnO1xuICAgICAgaWYgKHNlY3VyZU9wdGlvbikge1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5nZW5lcmF0ZU9uZVRpbWVUb2tlbih7XG4gICAgICAgICAgaWQ6IHN0cmVhbUlkLFxuICAgICAgICAgIHR5cGU6ICdwbGF5JyxcbiAgICAgICAgICBleHBpcmVEYXRlXG4gICAgICAgIH0pO1xuICAgICAgICBvbmVUaW1lVG9rZW4gPSByZXNwLmRhdGEudG9rZW5JZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwcm90b2NvbCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHt2aWV3ZXJVUkx9LyR7YXBwTmFtZX0vc3RyZWFtcy8ke3N0cmVhbUlkfS4ke2V4dGVuc2lvbn0ke29uZVRpbWVUb2tlbiA/IGA/dG9rZW49JHtvbmVUaW1lVG9rZW59YCA6ICcnfWA7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnIpO1xuICAgICAgbWVzc2FnZS5lcnJvcihnZXRSZXNwb25zZUVycm9yKGVycm9yKSk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdHJlYW1TZXJ2aWNlID0gbmV3IFN0cmVhbVNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElTdHVkaW8gfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFN0dWRpb1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgbWUoaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3N0dWRpby9tZScsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBkYXRlKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL3N0dWRpby91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZVBheW1lbnRJbmZvKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vYmFuay10cmFuc2Zlci91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZURpcmVjdERlcG9zdChwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVN0dWRpbz4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL2RpcmVjdC1kZXBvc2l0L3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlUGF4dW0ocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0dWRpby9wYXh1bS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZUJpdHBheShwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVN0dWRpbz4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL2JpdHBheS91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldENvbW1pc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc2V0dGluZ3Mvc3R1ZGlvL2NvbW1pc3Npb24nKTtcbiAgfVxuXG4gIGFkZE1vZGVsKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL21lbWJlcnMnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldE1lbWJlcnMocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvc3R1ZGlvL21lbWJlcnMnLCBwYXJhbXMpKTtcbiAgfVxuXG4gIGdldE1lbWJlckNvbW1pc3Npb25zKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3N0dWRpby9jb21taXNzaW9uJywgcGFyYW1zKSk7XG4gIH1cblxuICB1cGRhdGVNZW1iZXJDb21taXNzaW9uKGlkOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3N0dWRpby9jb21taXNzaW9uL21lbWJlci8ke2lkfWAsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0UGVyZm9ybWVyUmVxdWVzdChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BheW91dC1yZXF1ZXN0cy9zdHVkaW8vcGVyZm9ybWVyLXJlcXVlc3QnLCBwYXJhbXMpXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXR1c1BlcmZvcm1lclJlcXVlc3QoaWQ6IHN0cmluZywgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3BheW91dC1yZXF1ZXN0cy9zdHVkaW8vdXBkYXRlLyR7aWR9YCwgeyAuLi5wYXlsb2FkIH0pO1xuICB9XG5cbiAgdXBkYXRlTWVtYmVyU3RhdHVzKGlkOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3N0dWRpby9tZW1iZXJzLyR7aWR9LyR7c3RhdHVzfWApO1xuICB9XG5cbiAgc3RhdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvc3R1ZGlvL3N0YXRzJyk7XG4gIH1cblxuICBnZXREb2N1bWVudHNVcGxvYWRVcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3N0dWRpby9kb2N1bWVudHMvdXBsb2FkYDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3R1ZGlvU2VydmljZSA9IG5ldyBTdHVkaW9TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBUb2tlblBhY2thZ2VTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wYWNrYWdlL3Rva2VuL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG5cbiAgYnV5VG9rZW5zKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcGF5bWVudC9wdXJjaGFzZS10b2tlbnMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9rZW5QYWNrYWdlU2VydmljZSA9IG5ldyBUb2tlblBhY2thZ2VTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvblNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3RyYW5zYWN0aW9ucy91c2VyL3NlYXJjaCcsIHBhcmFtcykpO1xuICB9XG5cbiAgc2VuZFRpcFRva2VuKHBlcmZvcm1lcklkOiBzdHJpbmcsIHRva2VuOiBudW1iZXIsIGNvbnZlcnNhdGlvbklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL21lbWJlci9zZW5kLXRpcC10b2tlbi8ke3BlcmZvcm1lcklkfWAsIHsgdG9rZW4sIGNvbnZlcnNhdGlvbklkIH0pO1xuICB9XG5cbiAgcHVibGljIHNlbmRQYWlkVG9rZW4oY29udmVyc2F0aW9uSWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZW1iZXIvc2VuZC1wYXktdG9rZW4vJHtjb252ZXJzYXRpb25JZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhbnNhY3Rpb25TZXJ2aWNlID0gbmV3IFRyYW5zYWN0aW9uU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVVzZXIgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIG1lKGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVVzZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvdXNlcnMvbWUnLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwZGF0ZU1lKHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL3VzZXJzJywgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRBdmF0YXJVcGxvYWRVcmwodXNlcklkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3VzZXJzLyR7dXNlcklkfS9hdmF0YXIvdXBsb2FkYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3VzZXJzL2F2YXRhci91cGxvYWRgO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvdXNlcnMvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2Vycy92aWV3LyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJQ291bnRyeSwgSUxhbmdndWdlcywgSVBob25lQ29kZXMgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0LCBJUmVzcG9uc2UgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFV0aWxzU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjb3VudHJpZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElDb3VudHJ5Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL2NvdW50cmllcy9saXN0Jyk7XG4gIH1cblxuICBsYW5ndWFnZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElMYW5nZ3VnZXM+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvbGFuZ3VhZ2VzL2xpc3QnKTtcbiAgfVxuXG4gIHBob25lQ29kZXNMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPElQaG9uZUNvZGVzPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3Bob25lLWNvZGVzL2xpc3QnKTtcbiAgfVxuXG4gIHN0YXRpc3RpY3MoKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3N0YXRpc3RpY3MvYWRtaW4nKTtcbiAgfVxuXG4gIHZlcmlmeVJlY2FwdGNoYSh0b2tlbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3JlLWNhcHRjaGEvdmVyaWZ5JywgeyB0b2tlbiB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXRpbHNTZXJ2aWNlID0gbmV3IFV0aWxzU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVJlc3BvbnNlLCBJUGVyZm9ybWVyVmlkZW9QYXlsb2FkIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgVE9LRU4gfSBmcm9tICdzcmMvc2VydmljZXMvYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc1VybCB9IGZyb20gJ0BsaWIvc3RyaW5nJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFZpZGVvU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy91c2VyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zL3NlYXJjaCcsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgcHVyY2hhc2VkKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcHVyY2hhc2VkLWl0ZW1zL3VzZXIvdmlkZW9zJywgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIG15VmlkZW9zKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3Mvc2VhcmNoJywgcXVlcnkpXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZU15VmlkZW8oaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfWApO1xuICB9XG5cbiAgY3JlYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElQZXJmb3JtZXJWaWRlb1BheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS52aWRlbykge1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRhdGEudmlkZW8uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZGVvJywgdmlkZW8sIHZpZGVvLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50cmFpbGVyKSB7XG4gICAgICAgIGNvbnN0IHRyYWlsZXIgPSBkYXRhLnRyYWlsZXIuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RyYWlsZXInLCB0cmFpbGVyLCB0cmFpbGVyLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50aHVtYm5haWwpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gZGF0YS50aHVtYm5haWwuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RodW1ibmFpbCcsIHRodW1ibmFpbCwgdGh1bWJuYWlsLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsndmlkZW8nLCAndGh1bWJuYWlsJywgJ3RyYWlsZXInXSkpLmZvckVhY2goXG4gICAgICAgICh2KSA9PiB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BPU1QnLCBpc1VybCh1cmwpID8gdXJsIDogYCR7Y29uZmlnLk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVH0ke3VybH1gKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElQZXJmb3JtZXJWaWRlb1BheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS52aWRlbyAmJiBkYXRhLnZpZGVvLmZpbGUpIHtcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkYXRhLnZpZGVvLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd2aWRlbycsIHZpZGVvLCB2aWRlby5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudHJhaWxlciAmJiBkYXRhLnRyYWlsZXIuZmlsZSkge1xuICAgICAgICBjb25zdCB0cmFpbGVyID0gZGF0YS50cmFpbGVyLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0cmFpbGVyJywgdHJhaWxlciwgdHJhaWxlci5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudGh1bWJuYWlsICYmIGRhdGEudGh1bWJuYWlsLmZpbGUpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gZGF0YS50aHVtYm5haWwuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RodW1ibmFpbCcsIHRodW1ibmFpbCwgdGh1bWJuYWlsLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsndmlkZW8nLCAndGh1bWJuYWlsJywgJ3RyYWlsZXInXSkpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUFVUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluY3JlYXNlVmlldyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHtpZH0vaW5jLXZpZXdgKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSh2aWRlb0lkLCBwZXJmb3JtZXJJZCwgZGF0YSkge1xuICAvLyAgIHJldHVybiB0aGlzLnB1dChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke3ZpZGVvSWR9YCwge1xuICAvLyAgICAgLi4uZGF0YSxcbiAgLy8gICAgIHBlcmZvcm1lcklkXG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgdXNlckZpbmRWaWRlb0J5SWQoaWQ6IHN0cmluZywgaGVhZGVycyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfWAsIGhlYWRlcnMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB2aWRlb1NlcnZpY2UgPSBuZXcgVmlkZW9TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJy4vU29ja2V0Q29udGV4dCc7XG5pbXBvcnQgeyB3YXJuaW5nIH0gZnJvbSAnLi91dGlscyc7XG5cbmludGVyZmFjZSBJRXZlbnRQcm9wcyB7XG4gIGV2ZW50OiBzdHJpbmc7XG4gIGhhbmRsZXI6IEZ1bmN0aW9uO1xufVxuXG5jbGFzcyBFdmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJRXZlbnRQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZXZlbnQsIGhhbmRsZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc29ja2V0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgIHdhcm5pbmcoJ1NvY2tldCBJTyBjb25uZWN0aW9uIGhhcyBub3QgYmVlbiBlc3RhYmxpc2hlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzb2NrZXQub24oZXZlbnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBldmVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBpZiAoIXNvY2tldCkge1xuICAgICAgd2FybmluZygnU29ja2V0IElPIGNvbm5lY3Rpb24gaGFzIG5vdCBiZWVuIGVzdGFibGlzaGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNvY2tldC5vZmYoZXZlbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5FdmVudC5jb250ZXh0VHlwZSA9IFNvY2tldENvbnRleHQ7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTb2NrZXRJTyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnQHNlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnQHNlcnZpY2VzL2NvbmZpZyc7XG5pbXBvcnQgeyB3YXJuaW5nLCBkZWJ1ZyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJy4vU29ja2V0Q29udGV4dCc7XG5cbmludGVyZmFjZSBJU29ja2V0UHJvcHMge1xuICB1cmk/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBhbnk7XG4gIGxvZ2dlZEluOiBib29sZWFuO1xufVxuXG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVNvY2tldFByb3BzPiB7XG4gIHNvY2tldDtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShuZXh0UHJvcHM6IGFueSkge1xuICAgIGNvbnN0IHsgbG9nZ2VkSW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG5leHRQcm9wcy5sb2dnZWRJbiAhPT0gbG9nZ2VkSW4pIHtcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc29ja2V0ICYmIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gIH1cblxuICBjb25uZWN0KCkge1xuICAgIGNvbnN0IHsgbG9nZ2VkSW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdG9rZW4gPSBsb2dnZWRJbiAmJiBhdXRoU2VydmljZS5nZXRUb2tlbigpO1xuICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIGNvbnN0IHsgdXJpID0gY29uZmlnLk5FWFRfUFVCTElDX1NPQ0tFVF9FTkRQT0lOVCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnLCAncG9sbGluZycsICdsb25nLXBvbGxpbmcnXSxcbiAgICAgIHF1ZXJ5OiB0b2tlbiA/IGB0b2tlbj0ke3Rva2VufWAgOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5jbG9zZSgpO1xuXG4gICAgdGhpcy5zb2NrZXQgPSBTb2NrZXRJTyh1cmksIHRoaXMubWVyZ2VPcHRpb25zKG9wdGlvbnMpKTtcblxuICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdpbml0aWFsaXplZCc7XG5cbiAgICB0aGlzLnNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdjb25uZWN0ZWQnO1xuICAgICAgZGVidWcoJ2Nvbm5lY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnZGlzY29ubmVjdGVkJztcbiAgICAgIGRlYnVnKCdkaXNjb25uZWN0Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgIHdhcm5pbmcoJ2Vycm9yJywgZXJyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3QnLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2Nvbm5lY3RlZCc7XG4gICAgICBkZWJ1ZygncmVjb25uZWN0JywgZGF0YSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0X2F0dGVtcHQnLCAoKSA9PiB7XG4gICAgICBkZWJ1ZygncmVjb25uZWN0X2F0dGVtcHQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3RpbmcnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAncmVjb25uZWN0aW5nJztcbiAgICAgIGRlYnVnKCdyZWNvbm5lY3RpbmcnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3RfZmFpbGVkJywgKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgIHdhcm5pbmcoJ3JlY29ubmVjdF9mYWlsZWQnLCBlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBtZXJnZU9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICByZWNvbm5lY3Rpb246IHRydWUsXG4gICAgICByZWNvbm5lY3Rpb25BdHRlbXB0czogSW5maW5pdHksXG4gICAgICByZWNvbm5lY3Rpb25EZWxheTogMSAqIDEwMDAsXG4gICAgICByZWNvbm5lY3Rpb25EZWxheU1heDogNSAqIDEwMDAsXG4gICAgICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgICAgIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0JywgJ3BvbGxpbmcnLCAnbG9uZy1wb2xsaW5nJ10sXG4gICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFNvY2tldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc29ja2V0fT5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pfVxuICAgICAgPC9Tb2NrZXRDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVzID0gKHN0YXRlOiBhbnkpID0+ICh7XG4gIGxvZ2dlZEluOiBzdGF0ZS5hdXRoLmxvZ2dlZEluXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZXMpKFNvY2tldCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgU29ja2V0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8YW55Pignc29ja2V0Jyk7XG4iLCJpbXBvcnQgU29ja2V0IGZyb20gJy4vU29ja2V0JztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcbmltcG9ydCB7IFNvY2tldENvbnRleHQgfSBmcm9tICcuL1NvY2tldENvbnRleHQnO1xuXG5pZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gIGlmICh3aW5kb3cpIHdpbmRvdy5SZWFjdFNvY2tldElPID0geyBTb2NrZXQsIEV2ZW50LCBTb2NrZXRDb250ZXh0IH07XG59XG5cbmV4cG9ydCB7IFNvY2tldCwgRXZlbnQsIFNvY2tldENvbnRleHQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1zcHJlYWQgKi9cblxuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnQHNlcnZpY2VzL2NvbmZpZyc7XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgY29uc3Qgd2FybmluZyA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAvLyBkZWJ1ZyBvbiBkZXZlbG9wbWVudCBhbmQgc3RhZ2luZy5cbiAgaWYgKGNvbmZpZy5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSByZXR1cm47XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuXG4gICAgdGhyb3cgbmV3IEVycm9yKGFyZ3Muam9pbignICcpKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG59O1xuXG5leHBvcnQgY29uc3QgZGVidWcgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgLy8gZGVidWcgb24gZGV2ZWxvcG1lbnQgYW5kIHN0YWdpbmcuXG4gIGlmIChjb25maWcuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykgcmV0dXJuO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5kZWJ1ZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZGVidWcuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoLXRvLXJlZ2V4cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1hY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=