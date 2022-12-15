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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/performer-category/index.tsx");
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

/***/ "./pages/performer-category/index.less":
/*!*********************************************!*\
  !*** ./pages/performer-category/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/performer-category/index.tsx":
/*!********************************************!*\
  !*** ./pages/performer-category/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_layout_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/common/layout/page-header */ "./src/components/common/layout/page-header.tsx");
/* harmony import */ var src_services_perfomer_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/perfomer-categories.service */ "./src/services/perfomer-categories.service.ts");
/* harmony import */ var src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/redux/ui/actions */ "./src/redux/ui/actions.ts");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Common/PageBanner */ "./components/Common/PageBanner.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_performer_performer_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/performer/performer-grid */ "./src/components/performer/performer-grid.tsx");
/* harmony import */ var _redux_performer_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redux/performer/actions */ "./src/redux/performer/actions.ts");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services */ "./src/services/index.ts");
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var src_socket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/socket */ "./src/socket/index.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.less */ "./pages/performer-category/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "E:\\programData\\React\\cams-3\\user\\pages\\performer-category\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

class PerformerCategoryPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  static async getInitialProps({
    ctx
  }) {
    try {
      if (false) {}

      if (!ctx.query.slug) {
        return {};
      }

      const resp = await src_services_perfomer_categories_service__WEBPACK_IMPORTED_MODULE_4__["performerCategories"].details(ctx.query.slug);
      return {
        category: resp.data
      };
    } catch (err) {
      return {};
    }
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, "search", () => {
      const {
        searchPerformer: dispatchSearchPerformer,
        category
      } = this.props;
      const {
        query
      } = this.state;
      dispatchSearchPerformer(_objectSpread(_objectSpread({}, query), {}, {
        category: category ? category._id : ''
      }));
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

  componentDidUpdate(prevProps) {
    const {
      category,
      loggedIn
    } = this.props;

    if (category !== prevProps.category) {
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
      _id,
      isFavorite
    } = performer;
    const {
      updatePerformerFavourite: dispatchUpdatePerformerFavourite
    } = this.props;

    try {
      await src_services__WEBPACK_IMPORTED_MODULE_10__["favouriteService"].favorite(_id, isFavorite);
      dispatchUpdatePerformerFavourite(_id);
    } catch (error) {
      const e = await Promise.resolve(error);
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(Object(src_lib__WEBPACK_IMPORTED_MODULE_11__["getResponseError"])(e));
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

  render() {
    const {
      category,
      pluralTextModel
    } = this.props;
    const {
      query
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 11
      }
    }, category ? `Category - ${category.name}` : `Our  ${'Therapists' || false}`)), __jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_6__["default"], {
      pageTitle: "Our Therapists",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "Our Therapists",
      imgClass: "bg-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }
    }), __jsx(_components_common_layout_page_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: category ? category.name : `Our ${'Therapists' || false}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }
    }, __jsx(_components_performer_performer_grid__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, this.props, query, {
      isPage: true,
      setFilter: this.setFilter.bind(this),
      onLike: this.onLike.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }
    }))));
  }

}

_defineProperty(PerformerCategoryPage, "authenticate", false);

_defineProperty(PerformerCategoryPage, "layout", 'public');

PerformerCategoryPage.contextType = src_socket__WEBPACK_IMPORTED_MODULE_12__["SocketContext"];

const mapStateToProps = state => _objectSpread(_objectSpread({
  loggedIn: state.auth.loggedIn
}, state.performer.performers), state.ui);

const mapDispatch = {
  searchPerformer: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_9__["searchPerformer"],
  updatePerformerFavourite: _redux_performer_actions__WEBPACK_IMPORTED_MODULE_9__["updatePerformerFavourite"],
  updateUIValue: src_redux_ui_actions__WEBPACK_IMPORTED_MODULE_5__["updateUIValue"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatch)(PerformerCategoryPage));

/***/ }),

/***/ "./src/components/common/base/icons.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/base/icons.tsx ***!
  \**********************************************/
/*! exports provided: FacebookIcon, TwitterIcon, InstagramIcon, GiftIcon, MessageIcon, FavouriteIcon, SendMessageIcon, FundsIcon, PaymentTokensHistoryIcon, TransactionHistoryIcon, PurchasedImageIcon, PurchasedVideoIcon, PurchasedItemIcon, MyProductIcon, VideosIcon, PhotosIcon, FemaleSignIcon, MaleSignIcon, TransgenderIcon, TokensIcon, EarningIcon, PayoutRequestIcon, Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookIcon", function() { return FacebookIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterIcon", function() { return TwitterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramIcon", function() { return InstagramIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftIcon", function() { return GiftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageIcon", function() { return MessageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteIcon", function() { return FavouriteIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageIcon", function() { return SendMessageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundsIcon", function() { return FundsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTokensHistoryIcon", function() { return PaymentTokensHistoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHistoryIcon", function() { return TransactionHistoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedImageIcon", function() { return PurchasedImageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedVideoIcon", function() { return PurchasedVideoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedItemIcon", function() { return PurchasedItemIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductIcon", function() { return MyProductIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosIcon", function() { return VideosIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosIcon", function() { return PhotosIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FemaleSignIcon", function() { return FemaleSignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaleSignIcon", function() { return MaleSignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransgenderIcon", function() { return TransgenderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokensIcon", function() { return TokensIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningIcon", function() { return EarningIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayoutRequestIcon", function() { return PayoutRequestIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable react/require-default-props */

/* eslint-disable react/no-unused-prop-types */

const FacebookIcon = ({
  style
}) => __jsx("img", {
  src: "/icons/facebook.svg",
  style: style
});
const TwitterIcon = ({
  style
}) => __jsx("img", {
  src: "/icons/twitter.svg",
  style: style
});
const InstagramIcon = ({
  style
}) => __jsx("img", {
  src: "/icons/instagram.svg",
  style: style
});
const GiftIcon = () => __jsx("div", {
  className: "anticon"
}, __jsx("svg", {
  width: "17",
  height: "16",
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M14.6001 4.84375H12.2938C12.5063 4.50938 12.6313 4.1125 12.6313 3.6875C12.6313 2.49844 11.6642 1.53125 10.4751 1.53125C9.82822 1.53125 9.24541 1.81875 8.8501 2.27187C8.45479 1.81875 7.87197 1.53125 7.2251 1.53125C6.03604 1.53125 5.06885 2.49844 5.06885 3.6875C5.06885 4.1125 5.19229 4.50938 5.40635 4.84375H3.1001C2.82354 4.84375 2.6001 5.06719 2.6001 5.34375V8.46875C2.6001 8.5375 2.65635 8.59375 2.7251 8.59375H3.3501V13.9688C3.3501 14.2453 3.57354 14.4688 3.8501 14.4688H13.8501C14.1267 14.4688 14.3501 14.2453 14.3501 13.9688V8.59375H14.9751C15.0438 8.59375 15.1001 8.5375 15.1001 8.46875V5.34375C15.1001 5.06719 14.8767 4.84375 14.6001 4.84375ZM9.38135 3.6875C9.38135 3.08438 9.87197 2.59375 10.4751 2.59375C11.0782 2.59375 11.5688 3.08438 11.5688 3.6875C11.5688 4.29062 11.0782 4.78125 10.4751 4.78125H9.38135V3.6875ZM7.2251 2.59375C7.82822 2.59375 8.31885 3.08438 8.31885 3.6875V4.78125H7.2251C6.62197 4.78125 6.13135 4.29062 6.13135 3.6875C6.13135 3.08438 6.62197 2.59375 7.2251 2.59375ZM3.6626 7.53125V5.90625H8.31885V7.53125H3.6626ZM4.4126 8.59375H8.31885V13.4062H4.4126V8.59375ZM13.2876 13.4062H9.38135V8.59375H13.2876V13.4062ZM14.0376 7.53125H9.38135V5.90625H14.0376V7.53125Z",
  fill: "currentColor"
})));
const MessageIcon = ({
  width,
  height,
  color
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM20.8125 6.34687V18.5625H3.1875V6.34687L2.54063 5.84297L3.46172 4.65938L4.46484 5.43984H19.5375L20.5406 4.65938L21.4617 5.84297L20.8125 6.34687ZM19.5375 5.4375L12 11.2969L4.4625 5.4375L3.45938 4.65703L2.53828 5.84062L3.18516 6.34453L11.1914 12.5695C11.4217 12.7484 11.7049 12.8455 11.9965 12.8455C12.2881 12.8455 12.5713 12.7484 12.8016 12.5695L20.8125 6.34687L21.4594 5.84297L20.5383 4.65938L19.5375 5.4375Z",
  fill: color
}));
const FavouriteIcon = ({
  width,
  height,
  color
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M14.1855 4.45916C13.9838 3.97793 13.6929 3.54185 13.3292 3.17532C12.9653 2.80769 12.5362 2.51555 12.0652 2.31477C11.5769 2.10575 11.0531 1.99876 10.5243 2.00001C9.78243 2.00001 9.05862 2.20933 8.42961 2.60472C8.27913 2.6993 8.13618 2.80319 8.00074 2.91638C7.86531 2.80319 7.72236 2.6993 7.57188 2.60472C6.94287 2.20933 6.21906 2.00001 5.47719 2.00001C4.94299 2.00001 4.42533 2.10545 3.93627 2.31477C3.46377 2.51634 3.03791 2.80629 2.67224 3.17532C2.30807 3.54143 2.01717 3.97762 1.81601 4.45916C1.60684 4.95998 1.5 5.49182 1.5 6.03916C1.5 6.55549 1.60233 7.09352 1.80547 7.64086C1.97552 8.09827 2.2193 8.57273 2.53079 9.05185C3.02436 9.81006 3.70303 10.6008 4.54572 11.4025C5.94218 12.7313 7.32509 13.6492 7.38378 13.6864L7.74041 13.9221C7.89842 14.026 8.10157 14.026 8.25957 13.9221L8.61621 13.6864C8.6749 13.6476 10.0563 12.7313 11.4543 11.4025C12.297 10.6008 12.9756 9.81006 13.4692 9.05185C13.7807 8.57273 14.026 8.09827 14.1945 7.64086C14.3977 7.09352 14.5 6.55549 14.5 6.03916C14.5015 5.49182 14.3946 4.95998 14.1855 4.45916V4.45916ZM8.00074 12.6956C8.00074 12.6956 2.64365 9.15884 2.64365 6.03916C2.64365 4.45916 3.9122 3.17842 5.47719 3.17842C6.5772 3.17842 7.53125 3.81104 8.00074 4.73516C8.47024 3.81104 9.42429 3.17842 10.5243 3.17842C12.0893 3.17842 13.3578 4.45916 13.3578 6.03916C13.3578 9.15884 8.00074 12.6956 8.00074 12.6956Z",
  fill: color
}));
const SendMessageIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 30 30",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M26.7552 14.6367L3.64018 3.04608C3.54623 2.9991 3.43846 2.98804 3.33622 3.01291C3.10134 3.07095 2.95488 3.30862 3.01291 3.54629L5.39488 13.2797C5.4308 13.4262 5.53857 13.5451 5.68226 13.592L9.76365 14.9932L5.68502 16.3943C5.54133 16.4441 5.43356 16.5602 5.4004 16.7066L3.01291 26.4539C2.98804 26.5562 2.9991 26.6639 3.04607 26.7551C3.15384 26.9735 3.41912 27.0619 3.64018 26.9541L26.7552 15.4298C26.8408 15.3884 26.9099 15.3165 26.9541 15.2336C27.0619 15.0125 26.9735 14.7472 26.7552 14.6367ZM5.73752 23.6848L7.12746 18.0028L15.2847 15.2032C15.3483 15.1811 15.4008 15.1314 15.4229 15.065C15.4616 14.949 15.4008 14.8246 15.2847 14.7832L7.12746 11.9864L5.74305 6.32649L23.0966 15.0291L5.73752 23.6848Z",
  fill: "#FF0066"
}));
const FundsIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 25 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M9.8501 10C9.58488 10 9.33053 10.1054 9.14299 10.2929C8.95545 10.4804 8.8501 10.7348 8.8501 11V13C8.8501 13.2652 8.95545 13.5196 9.14299 13.7071C9.33053 13.8946 9.58488 14 9.8501 14C10.1153 14 10.3697 13.8946 10.5572 13.7071C10.7447 13.5196 10.8501 13.2652 10.8501 13V11C10.8501 10.7348 10.7447 10.4804 10.5572 10.2929C10.3697 10.1054 10.1153 10 9.8501 10ZM21.8501 11C22.1153 11 22.3697 10.8946 22.5572 10.7071C22.7447 10.5196 22.8501 10.2652 22.8501 10V6C22.8501 5.73478 22.7447 5.48043 22.5572 5.29289C22.3697 5.10536 22.1153 5 21.8501 5H3.8501C3.58488 5 3.33053 5.10536 3.14299 5.29289C2.95545 5.48043 2.8501 5.73478 2.8501 6V10C2.8501 10.2652 2.95545 10.5196 3.14299 10.7071C3.33053 10.8946 3.58488 11 3.8501 11C4.11531 11 4.36967 11.1054 4.5572 11.2929C4.74474 11.4804 4.8501 11.7348 4.8501 12C4.8501 12.2652 4.74474 12.5196 4.5572 12.7071C4.36967 12.8946 4.11531 13 3.8501 13C3.58488 13 3.33053 13.1054 3.14299 13.2929C2.95545 13.4804 2.8501 13.7348 2.8501 14V18C2.8501 18.2652 2.95545 18.5196 3.14299 18.7071C3.33053 18.8946 3.58488 19 3.8501 19H21.8501C22.1153 19 22.3697 18.8946 22.5572 18.7071C22.7447 18.5196 22.8501 18.2652 22.8501 18V14C22.8501 13.7348 22.7447 13.4804 22.5572 13.2929C22.3697 13.1054 22.1153 13 21.8501 13C21.5849 13 21.3305 12.8946 21.143 12.7071C20.9555 12.5196 20.8501 12.2652 20.8501 12C20.8501 11.7348 20.9555 11.4804 21.143 11.2929C21.3305 11.1054 21.5849 11 21.8501 11ZM20.8501 9.18C20.2709 9.3902 19.7706 9.77363 19.4169 10.2782C19.0633 10.7827 18.8736 11.3839 18.8736 12C18.8736 12.6161 19.0633 13.2173 19.4169 13.7218C19.7706 14.2264 20.2709 14.6098 20.8501 14.82V17H10.8501C10.8501 16.7348 10.7447 16.4804 10.5572 16.2929C10.3697 16.1054 10.1153 16 9.8501 16C9.58488 16 9.33053 16.1054 9.14299 16.2929C8.95545 16.4804 8.8501 16.7348 8.8501 17H4.8501V14.82C5.42925 14.6098 5.92964 14.2264 6.28326 13.7218C6.63687 13.2173 6.82657 12.6161 6.82657 12C6.82657 11.3839 6.63687 10.7827 6.28326 10.2782C5.92964 9.77363 5.42925 9.3902 4.8501 9.18V7H8.8501C8.8501 7.26522 8.95545 7.51957 9.14299 7.70711C9.33053 7.89464 9.58488 8 9.8501 8C10.1153 8 10.3697 7.89464 10.5572 7.70711C10.7447 7.51957 10.8501 7.26522 10.8501 7H20.8501V9.18Z"
}));
const PaymentTokensHistoryIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M19.958 4.04201C18.9157 2.99684 17.6772 2.16796 16.3135 1.603C14.9499 1.03805 13.488 0.748166 12.012 0.750009C8.93797 0.750009 6.15197 1.98401 4.12297 3.98501L4.12397 3.98401V0.751009H2.62397V6.75101H8.62397V5.25101H4.98097C5.88924 4.30215 6.98033 3.54713 8.1884 3.03153C9.39646 2.51592 10.6965 2.2504 12.01 2.25101C17.38 2.25101 21.748 6.62001 21.748 11.989C21.748 17.358 17.379 21.727 12.01 21.727C6.64097 21.727 2.27197 17.358 2.27197 11.989H0.771973C0.771973 18.196 5.80397 23.227 12.01 23.227C15.113 23.227 17.923 21.969 19.957 19.935C21.991 17.901 23.249 15.092 23.249 11.988C23.249 8.88401 21.991 6.07501 19.957 4.04101L19.958 4.04201Z"
}), __jsx("path", {
  d: "M16.125 7.5H6.375V15H16.125V7.5ZM15.375 14.25H7.125V8.25H15.375V14.25Z"
}), __jsx("path", {
  d: "M16.875 9.375V15.75H8.25V16.5H17.625V9.375H16.875Z",
  fill: "black"
}), __jsx("path", {
  d: "M11.25 13.089C12.1805 13.089 12.9375 12.2655 12.9375 11.253C12.9375 10.2405 12.1805 9.41699 11.25 9.41699C10.3195 9.41699 9.5625 10.2405 9.5625 11.253C9.5625 12.2655 10.3195 13.089 11.25 13.089ZM11.25 10.1675C11.767 10.1675 12.1875 10.6545 12.1875 11.2535C12.1875 11.8525 11.767 12.3395 11.25 12.3395C10.733 12.3395 10.3125 11.8525 10.3125 11.2535C10.3125 10.6545 10.733 10.1675 11.25 10.1675Z"
}), __jsx("path", {
  d: "M7.875 9.1875H8.625V13.3125H7.875V9.1875Z",
  fill: "black"
}), __jsx("path", {
  d: "M13.875 9.1875H14.625V13.3125H13.875V9.1875Z",
  fill: "black"
}));
const TransactionHistoryIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M19.958 4.04201C18.9157 2.99684 17.6772 2.16796 16.3135 1.603C14.9499 1.03805 13.488 0.748166 12.012 0.750009C8.93797 0.750009 6.15197 1.98401 4.12297 3.98501L4.12397 3.98401V0.751009H2.62397V6.75101H8.62397V5.25101H4.98097C5.88924 4.30215 6.98033 3.54713 8.1884 3.03153C9.39646 2.51592 10.6965 2.2504 12.01 2.25101C17.38 2.25101 21.748 6.62001 21.748 11.989C21.748 17.358 17.379 21.727 12.01 21.727C6.64097 21.727 2.27197 17.358 2.27197 11.989H0.771973C0.771973 18.196 5.80397 23.227 12.01 23.227C15.113 23.227 17.923 21.969 19.957 19.935C21.991 17.901 23.249 15.092 23.249 11.988C23.249 8.88401 21.991 6.07501 19.957 4.04101L19.958 4.04201Z"
}), __jsx("path", {
  d: "M12.0003 6.16675C8.77897 6.16675 6.16699 8.77873 6.16699 12.0001C6.16699 15.2214 8.77897 17.8334 12.0003 17.8334C15.2217 17.8334 17.8337 15.2214 17.8337 12.0001C17.8337 8.77873 15.2217 6.16675 12.0003 6.16675ZM12.0003 16.8438C9.32585 16.8438 7.15658 14.6746 7.15658 12.0001C7.15658 9.3256 9.32585 7.15633 12.0003 7.15633C14.6748 7.15633 16.8441 9.3256 16.8441 12.0001C16.8441 14.6746 14.6748 16.8438 12.0003 16.8438ZM12.6214 11.698L12.2907 11.6212V9.87248C12.7855 9.94019 13.0915 10.2501 13.1436 10.6303C13.1501 10.6824 13.1943 10.7201 13.2464 10.7201H13.8311C13.8923 10.7201 13.9404 10.6667 13.9352 10.6056C13.8558 9.79435 13.1878 9.27352 12.2959 9.18368V8.75789C12.2959 8.7006 12.249 8.65373 12.1917 8.65373H11.8258C11.7686 8.65373 11.7217 8.7006 11.7217 8.75789V9.18758C10.7998 9.27743 10.0785 9.78654 10.0785 10.7371C10.0785 11.6173 10.7269 12.0417 11.4079 12.2045L11.7295 12.2865V14.1446C11.154 14.0678 10.8311 13.7605 10.7646 13.3464C10.7568 13.297 10.7126 13.2605 10.6618 13.2605H10.0602C9.99902 13.2605 9.95085 13.3126 9.95606 13.3738C10.0146 14.0899 10.5576 14.7488 11.7165 14.8334V15.2423C11.7165 15.2996 11.7633 15.3464 11.8206 15.3464H12.1904C12.2477 15.3464 12.2946 15.2996 12.2946 15.241L12.292 14.8282C13.3115 14.7384 14.0407 14.1928 14.0407 13.2136C14.0394 12.31 13.4652 11.9063 12.6214 11.698ZM11.7282 11.4871C11.6553 11.4662 11.5941 11.4467 11.5329 11.422C11.0928 11.2631 10.8883 11.0066 10.8883 10.6759C10.8883 10.2032 11.2464 9.93368 11.7282 9.87248V11.4871ZM12.2907 14.1485V12.4076C12.3311 12.4194 12.3675 12.4285 12.4053 12.4363C13.0212 12.6238 13.2282 12.8842 13.2282 13.2839C13.2282 13.7931 12.8454 14.099 12.2907 14.1485Z"
}));
const PurchasedImageIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M7.5 6.75C7.5 6.75 7.5 2.25 12 2.25C16.5 2.25 16.5 6.75 16.5 6.75M3.75 6.75V21.75H20.25V6.75H3.75Z"
}), __jsx("path", {
  d: "M12.4816 13.966L11.5699 15.1285L11.0883 14.5145C11.0795 14.5032 11.0683 14.4942 11.0555 14.488C11.0427 14.4817 11.0287 14.4785 11.0145 14.4785C11.0002 14.4785 10.9862 14.4817 10.9734 14.488C10.9606 14.4942 10.9494 14.5032 10.9406 14.5145L9.77109 16.0051C9.76027 16.0189 9.75356 16.0355 9.75172 16.0529C9.74988 16.0704 9.75299 16.088 9.76069 16.1038C9.76839 16.1195 9.78038 16.1328 9.79527 16.1421C9.81017 16.1514 9.82737 16.1563 9.84492 16.1562H14.1562C14.2348 16.1562 14.2781 16.066 14.2301 16.0051L12.6305 13.966C12.6216 13.9548 12.6103 13.9457 12.5974 13.9395C12.5845 13.9333 12.5704 13.93 12.5561 13.93C12.5417 13.93 12.5276 13.9333 12.5147 13.9395C12.5018 13.9457 12.4905 13.9548 12.4816 13.966ZM10.2188 13.1797C10.2188 13.304 10.2681 13.4232 10.356 13.5111C10.444 13.5991 10.5632 13.6484 10.6875 13.6484C10.8118 13.6484 10.931 13.5991 11.019 13.5111C11.1069 13.4232 11.1562 13.304 11.1562 13.1797C11.1562 13.0554 11.1069 12.9361 11.019 12.8482C10.931 12.7603 10.8118 12.7109 10.6875 12.7109C10.5632 12.7109 10.444 12.7603 10.356 12.8482C10.2681 12.9361 10.2188 13.0554 10.2188 13.1797ZM16.0148 11.382L13.493 8.86016C13.4227 8.78984 13.3277 8.75 13.2281 8.75H8.25C8.04258 8.75 7.875 8.91758 7.875 9.125V18.875C7.875 19.0824 8.04258 19.25 8.25 19.25H15.75C15.9574 19.25 16.125 19.0824 16.125 18.875V11.648C16.125 11.5484 16.0852 11.4523 16.0148 11.382ZM15.2602 11.8203H13.0547V9.61484L15.2602 11.8203ZM15.2812 18.4062H8.71875V9.59375H12.2578V12.125C12.2578 12.2555 12.3097 12.3807 12.402 12.473C12.4943 12.5653 12.6195 12.6172 12.75 12.6172H15.2812V18.4062Z"
}));
const PurchasedVideoIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M7.5 6.75C7.5 6.75 7.5 2.25 12 2.25C16.5 2.25 16.5 6.75 16.5 6.75M3.75 6.75V21.75H20.25V6.75H3.75Z"
}), __jsx("path", {
  d: "M12 9C9.243 9 7 11.243 7 14C7 16.757 9.243 19 12 19C14.757 19 17 16.757 17 14C17 11.243 14.757 9 12 9ZM12 18C9.7945 18 8 16.2055 8 14C8 11.7945 9.7945 10 12 10C14.2055 10 16 11.7945 16 14C16 16.2055 14.2055 18 12 18Z"
}), __jsx("path", {
  d: "M10.5 16.5L14.5 14L10.5 11.5V16.5Z",
  fill: "black"
}));
const PurchasedItemIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M1.5 6.40498V17.61C1.5 18.285 1.95 18.87 2.625 19.065L12.375 21.66C12.615 21.735 12.885 21.735 13.125 21.66L22.875 19.065C23.55 18.87 24 18.285 24 17.61V6.40498C24 5.72998 23.55 5.14498 22.875 4.94998L13.125 2.33998C12.877 2.29498 12.623 2.29498 12.375 2.33998L2.625 4.94998C1.95 5.14498 1.5 5.72998 1.5 6.40498ZM12 20.04L3 17.655V7.49998L12 9.91498V20.04ZM3 5.99998L6.75 4.99498L16.5 7.58998L12.75 8.59498L3 5.99998ZM22.5 17.655L13.5 20.04V9.91498L16.5 9.08998V12.75L19.5 11.955V8.29498L22.5 7.49998V17.655ZM19.5 6.79498L9.75 4.19998L12.75 3.40498L22.5 5.99998L19.5 6.79498Z"
}));
const MyProductIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.5 6.40503V17.61C1.5 18.285 1.95 18.87 2.625 19.065L12.375 21.66C12.615 21.735 12.885 21.735 13.125 21.66L22.875 19.065C23.55 18.87 24 18.285 24 17.61V6.40503C24 5.73003 23.55 5.14503 22.875 4.95003L13.125 2.34003C12.877 2.29502 12.623 2.29502 12.375 2.34003L2.625 4.95003C1.95 5.14503 1.5 5.73003 1.5 6.40503ZM12 20.04L3 17.655V7.50003L12 9.91503V20.04ZM3 6.00003L6.75 4.99503L16.5 7.59003L12.75 8.59503L3 6.00003ZM22.5 17.655L13.5 20.04V9.91503L16.5 9.09003V12.75L19.5 11.955V8.29503L22.5 7.50003V17.655ZM19.5 6.79503L9.75 4.20003L12.75 3.40503L22.5 6.00003L19.5 6.79503Z"
}));
const VideosIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  fill: "currentColor",
  viewBox: "0 0 30 31",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M22.5002 9.14424C22.5002 7.76549 21.3789 6.64424 20.0002 6.64424H5.00018C3.62143 6.64424 2.50018 7.76549 2.50018 9.14424V21.6442C2.50018 23.023 3.62143 24.1442 5.00018 24.1442H20.0002C21.3789 24.1442 22.5002 23.023 22.5002 21.6442V17.478L27.5002 21.6442V9.14424L22.5002 13.3105V9.14424ZM20.0027 21.6442H5.00018V9.14424H20.0002L20.0014 15.393L20.0002 15.3942L20.0014 15.3955L20.0027 21.6442Z"
}));
const PhotosIcon = ({
  width,
  height
}) => __jsx("svg", {
  width: width || '1em',
  height: height || '1em',
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM20.8125 18.5625H3.1875V17.6273L6.43359 13.7766L9.95156 17.9484L15.4242 11.4609L20.8125 17.85V18.5625ZM20.8125 15.5203L15.5672 9.3C15.4922 9.21094 15.3562 9.21094 15.2812 9.3L9.95156 15.6188L6.57656 11.618C6.50156 11.5289 6.36562 11.5289 6.29062 11.618L3.1875 15.2977V5.4375H20.8125V15.5203ZM7.125 10.6875C7.39585 10.6875 7.66405 10.6342 7.91428 10.5305C8.16452 10.4269 8.39189 10.2749 8.58341 10.0834C8.77493 9.89189 8.92685 9.66452 9.0305 9.41428C9.13415 9.16405 9.1875 8.89585 9.1875 8.625C9.1875 8.35415 9.13415 8.08595 9.0305 7.83572C8.92685 7.58548 8.77493 7.35811 8.58341 7.16659C8.39189 6.97507 8.16452 6.82315 7.91428 6.7195C7.66405 6.61585 7.39585 6.5625 7.125 6.5625C6.57799 6.5625 6.05339 6.7798 5.66659 7.16659C5.2798 7.55339 5.0625 8.07799 5.0625 8.625C5.0625 9.17201 5.2798 9.69661 5.66659 10.0834C6.05339 10.4702 6.57799 10.6875 7.125 10.6875ZM7.125 7.96875C7.48828 7.96875 7.78125 8.26172 7.78125 8.625C7.78125 8.98828 7.48828 9.28125 7.125 9.28125C6.76172 9.28125 6.46875 8.98828 6.46875 8.625C6.46875 8.26172 6.76172 7.96875 7.125 7.96875Z"
}));
const FemaleSignIcon = ({
  color
}) => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M8 1.33337C5.794 1.33337 4 3.12737 4 5.33337C4 7.31137 5.44467 8.95471 7.33333 9.27337V11.3334H5.33333V12.6667H7.33333V14.6587H8.66667V12.6667H10.6667V11.3334H8.66667V9.27337C10.5553 8.95404 12 7.31137 12 5.33337C12 3.12737 10.206 1.33337 8 1.33337ZM8 8.00004C6.52933 8.00004 5.33333 6.80404 5.33333 5.33337C5.33333 3.86271 6.52933 2.66671 8 2.66671C9.47067 2.66671 10.6667 3.86271 10.6667 5.33337C10.6667 6.80404 9.47067 8.00004 8 8.00004Z",
  fill: color || 'currentColor'
}));
const MaleSignIcon = ({
  color
}) => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M13.3334 7.33329V2.66663H8.66671L10.5287 4.52863L7.64737 7.40996C6.9726 6.9266 6.16341 6.66667 5.33337 6.66663C3.12737 6.66663 1.33337 8.46063 1.33337 10.6666C1.33337 12.8726 3.12737 14.6666 5.33337 14.6666C7.53937 14.6666 9.33337 12.8726 9.33337 10.6666C9.33337 9.80396 9.05604 9.00663 8.59004 8.35263L11.4714 5.47129L13.3334 7.33329ZM5.33337 13.3333C3.86271 13.3333 2.66671 12.1373 2.66671 10.6666C2.66671 9.19596 3.86271 7.99996 5.33337 7.99996C6.80404 7.99996 8.00004 9.19596 8.00004 10.6666C8.00004 12.1373 6.80404 13.3333 5.33337 13.3333Z",
  fill: color || 'currentColor'
}));
const TransgenderIcon = ({
  color
}) => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M6.66665 10.3333C7.5507 10.3333 8.39855 9.9821 9.02367 9.35698C9.64879 8.73185 9.99998 7.88401 9.99998 6.99995C9.99998 6.1159 9.64879 5.26805 9.02367 4.64293C8.39855 4.01781 7.5507 3.66662 6.66665 3.66662C5.78259 3.66662 4.93474 4.01781 4.30962 4.64293C3.6845 5.26805 3.33331 6.1159 3.33331 6.99995C3.33331 7.88401 3.6845 8.73185 4.30962 9.35698C4.93474 9.9821 5.78259 10.3333 6.66665 10.3333V10.3333ZM10.6753 4.60929C11.0688 5.26924 11.2932 6.0161 11.3288 6.78362C11.3644 7.55113 11.21 8.31556 10.8792 9.00907C10.5485 9.70258 10.0517 10.3037 9.4329 10.7592C8.8141 11.2146 8.09245 11.5103 7.33198 11.62L7.33331 11.6666V12.3333H7.99998C8.17679 12.3333 8.34636 12.4035 8.47138 12.5285C8.59641 12.6536 8.66664 12.8231 8.66664 13C8.66664 13.1768 8.59641 13.3463 8.47138 13.4714C8.34636 13.5964 8.17679 13.6666 7.99998 13.6666H7.33331V14.3333C7.33331 14.5101 7.26307 14.6797 7.13805 14.8047C7.01303 14.9297 6.84346 15 6.66665 15C6.48983 15 6.32026 14.9297 6.19524 14.8047C6.07022 14.6797 5.99998 14.5101 5.99998 14.3333V13.6666H5.33331C5.1565 13.6666 4.98693 13.5964 4.86191 13.4714C4.73688 13.3463 4.66665 13.1768 4.66665 13C4.66665 12.8231 4.73688 12.6536 4.86191 12.5285C4.98693 12.4035 5.1565 12.3333 5.33331 12.3333H5.99998V11.6666C5.99998 11.6506 5.99998 11.6353 6.00131 11.62C4.83545 11.4491 3.77732 10.8437 3.03926 9.92518C2.3012 9.00666 1.93781 7.84299 2.02201 6.66769C2.10622 5.49239 2.63178 4.39242 3.49325 3.58849C4.35471 2.78457 5.48834 2.33617 6.66665 2.33329C7.83906 2.33186 8.96881 2.77304 9.82998 3.56862L11.0633 2.33529H10.0066C9.82983 2.33529 9.66026 2.26505 9.53524 2.14002C9.41022 2.015 9.33998 1.84543 9.33998 1.66862C9.33998 1.49181 9.41022 1.32224 9.53524 1.19722C9.66026 1.07219 9.82983 1.00195 10.0066 1.00195H12.6733C12.8501 1.00195 13.0197 1.07219 13.1447 1.19722C13.2697 1.32224 13.34 1.49181 13.34 1.66862V4.33529C13.34 4.5121 13.2697 4.68167 13.1447 4.80669C13.0197 4.93172 12.8501 5.00195 12.6733 5.00195C12.4965 5.00195 12.3269 4.93172 12.2019 4.80669C12.0769 4.68167 12.0066 4.5121 12.0066 4.33529V3.27795L10.676 4.60929H10.6753Z",
  fill: color || 'currentColor'
}));
const TokensIcon = () => __jsx("svg", {
  width: "25",
  height: "24",
  viewBox: "0 0 25 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M9.8501 10C9.58488 10 9.33053 10.1054 9.14299 10.2929C8.95545 10.4804 8.8501 10.7348 8.8501 11V13C8.8501 13.2652 8.95545 13.5196 9.14299 13.7071C9.33053 13.8946 9.58488 14 9.8501 14C10.1153 14 10.3697 13.8946 10.5572 13.7071C10.7447 13.5196 10.8501 13.2652 10.8501 13V11C10.8501 10.7348 10.7447 10.4804 10.5572 10.2929C10.3697 10.1054 10.1153 10 9.8501 10ZM21.8501 11C22.1153 11 22.3697 10.8946 22.5572 10.7071C22.7447 10.5196 22.8501 10.2652 22.8501 10V6C22.8501 5.73478 22.7447 5.48043 22.5572 5.29289C22.3697 5.10536 22.1153 5 21.8501 5H3.8501C3.58488 5 3.33053 5.10536 3.14299 5.29289C2.95545 5.48043 2.8501 5.73478 2.8501 6V10C2.8501 10.2652 2.95545 10.5196 3.14299 10.7071C3.33053 10.8946 3.58488 11 3.8501 11C4.11531 11 4.36967 11.1054 4.5572 11.2929C4.74474 11.4804 4.8501 11.7348 4.8501 12C4.8501 12.2652 4.74474 12.5196 4.5572 12.7071C4.36967 12.8946 4.11531 13 3.8501 13C3.58488 13 3.33053 13.1054 3.14299 13.2929C2.95545 13.4804 2.8501 13.7348 2.8501 14V18C2.8501 18.2652 2.95545 18.5196 3.14299 18.7071C3.33053 18.8946 3.58488 19 3.8501 19H21.8501C22.1153 19 22.3697 18.8946 22.5572 18.7071C22.7447 18.5196 22.8501 18.2652 22.8501 18V14C22.8501 13.7348 22.7447 13.4804 22.5572 13.2929C22.3697 13.1054 22.1153 13 21.8501 13C21.5849 13 21.3305 12.8946 21.143 12.7071C20.9555 12.5196 20.8501 12.2652 20.8501 12C20.8501 11.7348 20.9555 11.4804 21.143 11.2929C21.3305 11.1054 21.5849 11 21.8501 11ZM20.8501 9.18C20.2709 9.3902 19.7706 9.77363 19.4169 10.2782C19.0633 10.7827 18.8736 11.3839 18.8736 12C18.8736 12.6161 19.0633 13.2173 19.4169 13.7218C19.7706 14.2264 20.2709 14.6098 20.8501 14.82V17H10.8501C10.8501 16.7348 10.7447 16.4804 10.5572 16.2929C10.3697 16.1054 10.1153 16 9.8501 16C9.58488 16 9.33053 16.1054 9.14299 16.2929C8.95545 16.4804 8.8501 16.7348 8.8501 17H4.8501V14.82C5.42925 14.6098 5.92964 14.2264 6.28326 13.7218C6.63687 13.2173 6.82657 12.6161 6.82657 12C6.82657 11.3839 6.63687 10.7827 6.28326 10.2782C5.92964 9.77363 5.42925 9.3902 4.8501 9.18V7H8.8501C8.8501 7.26522 8.95545 7.51957 9.14299 7.70711C9.33053 7.89464 9.58488 8 9.8501 8C10.1153 8 10.3697 7.89464 10.5572 7.70711C10.7447 7.51957 10.8501 7.26522 10.8501 7H20.8501V9.18Z",
  fill: "currentColor"
}));
const EarningIcon = () => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M20.25 3H0.75V18H20.25V3ZM18.75 16.5H2.25V4.5H18.75V16.5Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M21.75 6.75V19.5H4.5V21H23.25V6.75H21.75Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M10.5 14.178C12.361 14.178 13.875 12.531 13.875 10.506C13.875 8.481 12.361 6.834 10.5 6.834C8.639 6.834 7.125 8.481 7.125 10.506C7.125 12.531 8.639 14.178 10.5 14.178ZM10.5 8.335C11.534 8.335 12.375 9.309 12.375 10.507C12.375 11.705 11.534 12.679 10.5 12.679C9.466 12.679 8.625 11.705 8.625 10.507C8.625 9.309 9.466 8.335 10.5 8.335Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M3.75 6.375H5.25V14.625H3.75V6.375Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M15.75 6.375H17.25V14.625H15.75V6.375Z",
  fill: "currentColor"
}));
const PayoutRequestIcon = () => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM19.6875 13.5H12.375V10.5H19.6875V13.5ZM19.6875 19.6875H4.3125V4.3125H19.6875V9H11.625C11.2102 9 10.875 9.33516 10.875 9.75V14.25C10.875 14.6648 11.2102 15 11.625 15H19.6875V19.6875ZM13.5938 12C13.5938 12.2486 13.6925 12.4871 13.8683 12.6629C14.0442 12.8387 14.2826 12.9375 14.5312 12.9375C14.7799 12.9375 15.0183 12.8387 15.1942 12.6629C15.37 12.4871 15.4688 12.2486 15.4688 12C15.4688 11.7514 15.37 11.5129 15.1942 11.3371C15.0183 11.1613 14.7799 11.0625 14.5312 11.0625C14.2826 11.0625 14.0442 11.1613 13.8683 11.3371C13.6925 11.5129 13.5938 11.7514 13.5938 12Z",
  fill: "currentColor"
}));
const Group = () => __jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 25 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  d: "M17.4542 11.048C18.0632 10.0101 18.3262 8.80528 18.2052 7.60797C18.0262 5.82397 17.0302 4.24697 15.4022 3.16797L14.2972 4.83397C15.4162 5.57597 16.0972 6.63297 16.2152 7.80797C16.2696 8.35407 16.2016 8.90543 16.0162 9.42195C15.8307 9.93847 15.5325 10.4072 15.1432 10.794L13.9512 11.986L15.5692 12.461C19.8012 13.701 19.8502 17.957 19.8502 18H21.8502C21.8502 16.211 20.8942 12.715 17.4542 11.048Z",
  fill: "currentColor"
}), __jsx("path", {
  d: "M10.3501 12C12.5561 12 14.3501 10.206 14.3501 8C14.3501 5.794 12.5561 4 10.3501 4C8.1441 4 6.3501 5.794 6.3501 8C6.3501 10.206 8.1441 12 10.3501 12ZM10.3501 6C11.4531 6 12.3501 6.897 12.3501 8C12.3501 9.103 11.4531 10 10.3501 10C9.2471 10 8.3501 9.103 8.3501 8C8.3501 6.897 9.2471 6 10.3501 6ZM11.8501 13H8.8501C5.5411 13 2.8501 15.691 2.8501 19V20H4.8501V19C4.8501 16.794 6.6441 15 8.8501 15H11.8501C14.0561 15 15.8501 16.794 15.8501 19V20H17.8501V19C17.8501 15.691 15.1591 13 11.8501 13Z",
  fill: "currentColor"
}));

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

/***/ "./src/components/common/layout/banner.less":
/*!**************************************************!*\
  !*** ./src/components/common/layout/banner.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/common/layout/banner.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/layout/banner.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _banner_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner.less */ "./src/components/common/layout/banner.less");
/* harmony import */ var _banner_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_banner_less__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\programData\\React\\cams-3\\user\\src\\components\\common\\layout\\banner.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Link from 'next/link';




const renderBanner = (banner, styleImage) => {
  const {
    type,
    href,
    _id,
    photo,
    contentHTML
  } = banner;

  if (type === 'html' && contentHTML) {
    // eslint-disable-next-line react/no-danger
    return __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: contentHTML
      },
      style: styleImage || {},
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 12
      }
    });
  }

  return __jsx("a", {
    href: href || '#',
    target: "_blank",
    rel: "noreferrer",
    key: _id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: photo && photo.url,
    alt: "",
    style: styleImage || {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }));
};

const Banner = ({
  banners,
  styleImage,
  classnames
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }
}, banners && banners.length > 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
  autoplay: true,
  arrows: true,
  dots: false,
  effect: "fade",
  className: classnames,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}, banners.map(item => renderBanner(item, styleImage))));

Banner.defaultProps = {
  classnames: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Banner);

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

/***/ "./src/components/performer/index.less":
/*!*********************************************!*\
  !*** ./src/components/performer/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/performer/performer-grid.tsx":
/*!*****************************************************!*\
  !*** ./src/components/performer/performer-grid.tsx ***!
  \*****************************************************/
/*! exports provided: GridCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridCard", function() { return GridCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_base_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/common/base/icons */ "./src/components/common/base/icons.tsx");
/* harmony import */ var src_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/lib */ "./src/lib/index.ts");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/components/performer/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/common/layout/banner */ "./src/components/common/layout/banner.tsx");
/* harmony import */ var _components_common_base_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/common/base/loader */ "./src/components/common/base/loader.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "E:\\programData\\React\\cams-3\\user\\src\\components\\performer\\performer-grid.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const renderTitle = (gender, name) => __jsx("div", {
  className: "p-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 3
  }
}, __jsx("span", {
  style: {
    marginRight: 5
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }
}, name), gender === 'male' ? __jsx("span", {
  className: "anticon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 7
  }
}, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_3__["MaleSignIcon"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }
})) : gender === 'female' ? __jsx("span", {
  className: "anticon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 7
  }
}, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_3__["FemaleSignIcon"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }
})) : __jsx("span", {
  className: "anticon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 7
  }
}, __jsx(_components_common_base_icons__WEBPACK_IMPORTED_MODULE_3__["TransgenderIcon"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }
})));

const renderTags = tags => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
  className: "tags",
  wrap: true,
  size: [5, 2],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 3
  }
}, tags.map(tag => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: {
    pathname: '/tag',
    query: {
      tags: tag
    }
  },
  key: tag,
  as: `/tag/${tag}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 7
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 9
  }
}, "#", tag))));

const GridCard = ({
  performer,
  loggedIn,
  onLike,
  className,
  placeholderAvatarUrl
}) => {
  var _performer$stats;

  const {
    isOnline,
    streamingStatus
  } = performer;
  const statusClassNames = ['p-status'];
  let status = 'offline';

  if (isOnline) {
    switch (streamingStatus) {
      case 'private':
        statusClassNames.push('private');
        status = 'private chat';
        break;

      case 'group':
        statusClassNames.push('group');
        status = 'group chat';
        break;

      case 'public':
        status = 'live';
        statusClassNames.push('online');
        break;

      default:
        status = 'online';
        statusClassNames.push('online');
        break;
    }
  } else {
    statusClassNames.push('offline');
  }

  const defaultPlaceholderAvatarUrl = placeholderAvatarUrl || '/default-user-icon.png';
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Grid, {
    className: className,
    key: performer._id,
    hoverable: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, performer.isBlocked && __jsx("div", {
    className: "blocked-thumb",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["LockOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/stream',
      query: {
        performer: JSON.stringify(performer)
      }
    },
    as: `/profile/${performer.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "performer-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "image-performer",
    src: typeof performer.avatar === 'string' && performer.avatar.length > 0 ? performer.avatar : defaultPlaceholderAvatarUrl,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: statusClassNames.join(' '),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, status), renderTitle(performer.gender, performer.username), (performer === null || performer === void 0 ? void 0 : (_performer$stats = performer.stats) === null || _performer$stats === void 0 ? void 0 : _performer$stats.views) > 0 && __jsx("div", {
    className: "p-viewer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EyeOutlined"], {
    style: {
      marginRight: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, performer.stats.views))))), __jsx("div", {
    className: "performer-bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    justify: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, performer.tags && renderTags(performer.tags))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, __jsx("div", {
    "aria-hidden": true,
    hidden: !loggedIn,
    className: "p-favorite",
    onClick: () => onLike(performer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, performer.isFavorite ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartFilled"], {
    className: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {
    className: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "about-me",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, performer === null || performer === void 0 ? void 0 : performer.aboutMe)));
};

const PerformerGrid = ({
  data,
  searching,
  success,
  title,
  onLike,
  loggedIn,
  isPage,
  offset,
  limit,
  total,
  setFilter,
  placeholderAvatarUrl,
  banners,
  render
}) => {
  const {
    topBanners,
    rightBanners,
    bottomBanners
  } = banners;

  const RowGrid = ({
    dataSource
  }) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, dataSource && dataSource.length > 0 && dataSource.map(performer => __jsx(GridCard, {
    placeholderAvatarUrl: placeholderAvatarUrl,
    className: "performer-box",
    key: performer._id,
    performer: performer,
    loggedIn: loggedIn,
    onLike: onLike,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  })));

  const renderGrid = () => {
    const {
      length
    } = data;

    if (length <= 12) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 9
        }
      }, rightBanners && rightBanners.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 16,
        md: 16,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 17
        }
      }, data && data.length > 0 && data.map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 23
        }
      })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 8,
        md: 8,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 15
        }
      }, __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 17
        }
      }))) : data && data.length > 0 && data.map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 15
        }
      })));
    }

    if (length > 12 && length <= 24) {
      const dataChunk = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["chunk"])(data, 12);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, rightBanners && rightBanners.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 16,
        md: 16,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 17
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 19
        }
      }, dataChunk[0] && dataChunk[0].length > 0 && dataChunk[0].map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 25
        }
      })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 8,
        md: 8,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 17
        }
      }, rightBanners && rightBanners.length > 0 && __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 21
        }
      }))), __jsx(RowGrid, {
        dataSource: dataChunk[1],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 15
        }
      })) : __jsx(RowGrid, {
        dataSource: data,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 13
        }
      }));
    }

    if (length > 24 && length <= 36) {
      const dataChunk = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["chunk"])(data, 12);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(RowGrid, {
        dataSource: dataChunk[0],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 11
        }
      }), rightBanners && rightBanners.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 13
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 16,
        lg: 18,
        md: 18,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 17
        }
      }, dataChunk[1] && dataChunk[1].length > 0 && dataChunk[1].map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 23
        }
      })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 8,
        lg: 6,
        md: 6,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 15
        }
      }, __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 17
        }
      }))) : __jsx(RowGrid, {
        dataSource: dataChunk[1],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 13
        }
      }), __jsx(RowGrid, {
        dataSource: dataChunk[2],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 11
        }
      }));
    }

    if (length > 36) {
      const dataChunk = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["chunk"])(data, 12);
      const lastDataChunk = dataChunk.slice(3);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(RowGrid, {
        dataSource: dataChunk[0],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 11
        }
      }), rightBanners && rightBanners.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        style: {
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 13
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 16,
        lg: 18,
        md: 18,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 17
        }
      }, dataChunk[1] && dataChunk[1].length > 0 && dataChunk[1].map(performer => __jsx(GridCard, {
        placeholderAvatarUrl: placeholderAvatarUrl,
        className: "performer-box performer-box-4-item",
        key: performer._id,
        performer: performer,
        loggedIn: loggedIn,
        onLike: () => onLike(performer),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 23
        }
      })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xl: 8,
        lg: 6,
        md: 6,
        xs: 24,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 15
        }
      }, __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classnames: "right-banners",
        banners: rightBanners,
        styleImage: {
          padding: '10px',
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 17
        }
      }))) : __jsx(RowGrid, {
        dataSource: dataChunk[1],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 13
        }
      }), __jsx(RowGrid, {
        dataSource: dataChunk[2],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 11
        }
      }), lastDataChunk.length > 0 && lastDataChunk.map(v => __jsx(RowGrid, {
        key: Object(src_lib__WEBPACK_IMPORTED_MODULE_4__["generateUuid"])(),
        dataSource: v,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 15
        }
      })));
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  };

  const actions = setFilter && total > 0 ? [total > limit && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    disabled: searching,
    current: Math.round(offset / limit) + 1,
    pageSize: limit,
    total: total,
    size: "small",
    onChange: page => setFilter('offset', (page - 1) * limit),
    showSizeChanger: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 9
    }
  })] : [];

  if (render) {
    /**
     * placeholderAvatarUrl props
     */
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "performer-grid",
      title: title,
      bordered: false,
      hoverable: false,
      bodyStyle: {
        padding: '0'
      },
      actions: actions,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 7
      }
    }, __jsx(_components_common_base_loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
      spinning: searching,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 9
      }
    }), data.length > 0 && data.map(performer => render(performer)));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isPage && (topBanners === null || topBanners === void 0 ? void 0 : topBanners.length) > 0 && __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    banners: topBanners,
    styleImage: {
      padding: '10px',
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "performer-grid",
    title: title,
    bordered: false,
    hoverable: false,
    bodyStyle: {
      padding: '0'
    },
    actions: actions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 7
    }
  }, __jsx(_components_common_base_loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    spinning: searching,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 9
    }
  }), success // eslint-disable-next-line no-nested-ternary
  && (total > 0 ? isPage ? renderGrid() : data.map(performer => __jsx(GridCard, {
    key: performer === null || performer === void 0 ? void 0 : performer._id,
    placeholderAvatarUrl: placeholderAvatarUrl,
    className: "performer-box",
    performer: performer,
    loggedIn: loggedIn,
    onLike: p => onLike(p),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 17
    }
  })) : __jsx("div", {
    className: "ant-card-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 13
    }
  }, "No model found."))), isPage && (bottomBanners === null || bottomBanners === void 0 ? void 0 : bottomBanners.length) > 0 && __jsx(_components_common_layout_banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    banners: bottomBanners,
    styleImage: {
      padding: '10px',
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 9
    }
  }));
};

PerformerGrid.defaultProps = {
  loggedIn: false,
  setFilter: null,
  limit: 0,
  offset: 0,
  total: 0,
  success: false,
  searching: false,
  title: '',
  onLike: null,
  render: null,
  isPage: false,
  banners: {},
  placeholderAvatarUrl: '/no-avatar.png'
};

const bannerSelecter = state => state.banner.listBanners.data;

const filterBanner = Object(src_lib__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(bannerSelecter, banners => {
  if (!banners.length) return {};
  return {
    topBanners: banners.filter(b => b.position === 'top'),
    rightBanners: banners.filter(b => b.position === 'right'),
    bottomBanners: banners.filter(b => b.position === 'bottom')
  };
});

const mapStates = state => ({
  placeholderAvatarUrl: state.ui.placeholderAvatarUrl,
  banners: filterBanner(state)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStates)(PerformerGrid));

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

/***/ "./src/redux/ui/actions.ts":
/*!*********************************!*\
  !*** ./src/redux/ui/actions.ts ***!
  \*********************************/
/*! exports provided: updateUIValue, loadUIValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUIValue", function() { return updateUIValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUIValue", function() { return loadUIValue; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/redux */ "./src/lib/redux.ts");

const updateUIValue = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateUIValue');
const loadUIValue = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__["createAction"])('loadUIValue');

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

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL1BhZ2VCYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGVyZm9ybWVyLWNhdGVnb3J5L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vYmFzZS9pY29ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2Jhc2UvbG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0L2Jhbm5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dC9wYWdlLWhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGVyZm9ybWVyL3BlcmZvcm1lci1ncmlkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pbnRlcm5ldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2xheW91dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9yZWR1eC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3J1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3RvcmVIb2xkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcGVyZm9ybWVyL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3VpL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2FwaS1yZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Jhbm5lci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2Vhcm5pbmcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZmF2b3VyaXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2dhbGxlcnkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvb3JkZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGF5bWVudC1pbmZvcm1hdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wYXlvdXQtcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGVyZm9tZXItY2F0ZWdvcmllcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wZXJmb21lci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9waG90by5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wb3N0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3Byb2R1Y3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcHVyY2hhc2UtaXRlbS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZWZ1bmQtcmVxdWVzdC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZXR0aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3N0cmVhbS5zZXJ2aWNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3R1ZGlvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3Rva2VuLXBhY2thZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdHJhbnNhY3Rpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy92aWRlby5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvRXZlbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvU29ja2V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc29ja2V0L1NvY2tldENvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zb2NrZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2tldC91dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aC10by1yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1hY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVzZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCIiXSwibmFtZXMiOlsiUGFnZUJhbm5lciIsInBhZ2VUaXRsZSIsImhvbWVQYWdlVXJsIiwiaG9tZVBhZ2VUZXh0IiwiYWN0aXZlUGFnZVRleHQiLCJpbWdDbGFzcyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwidmFsdWUiLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiaW5pdFF1ZXJ5U3RhdGUiLCJvZmZzZXQiLCJsaW1pdCIsImdlbmRlciIsImNhdGVnb3J5IiwiY291bnRyeSIsInNvcnRCeSIsInNvcnQiLCJQZXJmb3JtZXJDYXRlZ29yeVBhZ2UiLCJQdXJlQ29tcG9uZW50Iiwic2x1ZyIsInJlc3AiLCJwZXJmb3JtZXJDYXRlZ29yaWVzIiwiZGV0YWlscyIsInNlYXJjaFBlcmZvcm1lciIsImRpc3BhdGNoU2VhcmNoUGVyZm9ybWVyIiwiX2lkIiwiY29tcG9uZW50RGlkTW91bnQiLCJzb2NrZXQiLCJjb250ZXh0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwibG9nZ2VkSW4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIm9uTGlrZSIsInBlcmZvcm1lciIsImlzRmF2b3JpdGUiLCJ1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUiLCJkaXNwYXRjaFVwZGF0ZVBlcmZvcm1lckZhdm91cml0ZSIsImZhdm91cml0ZVNlcnZpY2UiLCJmYXZvcml0ZSIsInJlc29sdmUiLCJnZXRSZXNwb25zZUVycm9yIiwic2V0RmlsdGVyIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJwbHVyYWxUZXh0TW9kZWwiLCJiaW5kIiwiY29udGV4dFR5cGUiLCJTb2NrZXRDb250ZXh0IiwibWFwU3RhdGVUb1Byb3BzIiwicGVyZm9ybWVycyIsInVpIiwibWFwRGlzcGF0Y2giLCJ1cGRhdGVVSVZhbHVlIiwiY29ubmVjdCIsIkZhY2Vib29rSWNvbiIsInN0eWxlIiwiVHdpdHRlckljb24iLCJJbnN0YWdyYW1JY29uIiwiR2lmdEljb24iLCJNZXNzYWdlSWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJGYXZvdXJpdGVJY29uIiwiU2VuZE1lc3NhZ2VJY29uIiwiRnVuZHNJY29uIiwiUGF5bWVudFRva2Vuc0hpc3RvcnlJY29uIiwiVHJhbnNhY3Rpb25IaXN0b3J5SWNvbiIsIlB1cmNoYXNlZEltYWdlSWNvbiIsIlB1cmNoYXNlZFZpZGVvSWNvbiIsIlB1cmNoYXNlZEl0ZW1JY29uIiwiTXlQcm9kdWN0SWNvbiIsIlZpZGVvc0ljb24iLCJQaG90b3NJY29uIiwiRmVtYWxlU2lnbkljb24iLCJNYWxlU2lnbkljb24iLCJUcmFuc2dlbmRlckljb24iLCJUb2tlbnNJY29uIiwiRWFybmluZ0ljb24iLCJQYXlvdXRSZXF1ZXN0SWNvbiIsIkdyb3VwIiwiTG9hZGVyIiwic3Bpbm5pbmciLCJmdWxsU2NyZWVuIiwiY2xhc3NOYW1lcyIsImhpZGRlbiIsInJlbmRlckJhbm5lciIsImJhbm5lciIsInN0eWxlSW1hZ2UiLCJ0eXBlIiwicGhvdG8iLCJjb250ZW50SFRNTCIsIl9faHRtbCIsIkJhbm5lciIsImJhbm5lcnMiLCJjbGFzc25hbWVzIiwibGVuZ3RoIiwibWFwIiwiZGVmYXVsdFByb3BzIiwidGl0bGUiLCJleHRyYSIsInJlbmRlclRpdGxlIiwibWFyZ2luUmlnaHQiLCJyZW5kZXJUYWdzIiwidGFncyIsInRhZyIsIkdyaWRDYXJkIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXJBdmF0YXJVcmwiLCJpc09ubGluZSIsInN0cmVhbWluZ1N0YXR1cyIsInN0YXR1c0NsYXNzTmFtZXMiLCJzdGF0dXMiLCJkZWZhdWx0UGxhY2Vob2xkZXJBdmF0YXJVcmwiLCJpc0Jsb2NrZWQiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcm5hbWUiLCJhdmF0YXIiLCJqb2luIiwic3RhdHMiLCJ2aWV3cyIsImFib3V0TWUiLCJQZXJmb3JtZXJHcmlkIiwic2VhcmNoaW5nIiwiaXNQYWdlIiwidG90YWwiLCJ0b3BCYW5uZXJzIiwicmlnaHRCYW5uZXJzIiwiYm90dG9tQmFubmVycyIsIlJvd0dyaWQiLCJkYXRhU291cmNlIiwicmVuZGVyR3JpZCIsInBhZGRpbmciLCJkYXRhQ2h1bmsiLCJjaHVuayIsImxhc3REYXRhQ2h1bmsiLCJzbGljZSIsInYiLCJnZW5lcmF0ZVV1aWQiLCJhY3Rpb25zIiwiTWF0aCIsInJvdW5kIiwiYmFubmVyU2VsZWN0ZXIiLCJsaXN0QmFubmVycyIsImZpbHRlckJhbm5lciIsImNyZWF0ZVNlbGVjdG9yIiwiZmlsdGVyIiwiYiIsInBvc2l0aW9uIiwibWFwU3RhdGVzIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJmb3JtYXQiLCJtb21lbnQiLCJjb252ZXJEdXJhdGlvbiIsImR1cmF0aW9uIiwidXRjIiwiYXNNaWxsaXNlY29uZHMiLCJwYXJzZUFnZSIsImdldEFnZSIsImRpZmYiLCJ0b1N0cmluZyIsImZvcm1hdER1cmF0aW9uIiwicyIsImhvdXJzIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsImJlZm9yZUF2YXRhclVwbG9hZCIsImZpbGUiLCJleHQiLCJzcGxpdCIsInBvcCIsInRvTG93ZXJDYXNlIiwiY29uZmlnIiwiZ2V0R2xvYmFsQ29uZmlnIiwiaXNJbWFnZUFjY2VwdCIsIk5FWFRfUFVCTElDX0lNQUdFX0FDQ1BFVCIsInRyaW0iLCJpbmRleE9mIiwiaXNMdDJNIiwic2l6ZSIsIk5FWFRfUFVCTElDX01BWElNVU1fU0laRV9VUExPQURfQVZBVEFSIiwiSU5URVJORVRfQ0hFQ0tfVVJMIiwiaXNIYXNJbnRlcm5ldENvbm5lY3Rpb24iLCJmZXRjaCIsImhlYWRlcnMiLCJQcmFnbWEiLCJFeHBpcmVzIiwiZXhjZXB0aW9uIiwibG9nIiwiZm9ybUl0ZW1MYXlvdXQiLCJsYWJlbENvbCIsInhzIiwic3BhbiIsInNtIiwid3JhcHBlckNvbCIsInRhaWxGb3JtSXRlbUxheW91dCIsImRlZmF1bHRDb2xvciIsInByaW1hcnlDb2xvciIsInN1Y2Nlc3NDb2xvciIsIndoaXRlQ29sb3IiLCJ2YWxpZGF0ZU1lc3NhZ2VzIiwicmVxdWlyZWQiLCJ0eXBlcyIsImVtYWlsIiwibnVtYmVyIiwicmFuZ2UiLCJjcmVhdGVBY3Rpb24iLCJhY3Rpb24iLCJSZWR1eENyZWF0ZUFjdGlvbiIsImlzIiwiYVR5cGUiLCJjcmVhdGVBc3luY0FjdGlvbiIsImNyZWF0ZUFzeW5jQWN0aW9ucyIsImhhbmRsZUFjdGlvbnMiLCJpbml0aWFsU3RhdGUiLCJoYW5kbGVSZWR1eEFjdGlvbnMiLCJyZWR1Y2UiLCJyZWR1Y2VyIiwiYWN0IiwiY3JlYXRlUmVkdWNlcnMiLCJzdGF0ZUNvbnRleHQiLCJyZWR1Y2VycyIsInByZXZlbnRSZXNldHRpbmciLCJmbGF0dGVuIiwiaXNBcnJheSIsImZvckVhY2giLCJBUFBfU1RBVEVfUkVTRVQiLCJjcmVhdGVTYWdhcyIsInNhZ2FzIiwic2FnYSIsImVmZmVjdCIsInRha2VMYXRlc3QiLCJ3b3JrZXIiLCJkZWxheSIsImNyZWF0ZVNlbGVjdG9yc0EiLCJzdGF0ZVNlbGVjdG9yIiwiaXNFbXB0eSIsImdldEluIiwiY3JlYXRlU2VsZWN0b3JzIiwic2VsZWN0b3JzIiwiY3JlYXRlSlNTZWxlY3RvcnMiLCJ1c2VybmFtZVBhdHRlcm5SdWxlIiwicGF0dGVybiIsIlJlZ0V4cCIsInN0b3JlIiwiZ2V0U3RvcmUiLCJzZXRTdG9yZSIsIkRFRkFVTFRfT0ZGTElORV9JTUFHRV9VUkwiLCJERUZBVUxUX1BSSVZBVEVfSU1BR0VfVVJMIiwiREVGQVVMVF9HUk9VUF9JTUFHRV9VUkwiLCJERUZBVUxUX09OTElORV9JTUFHRV9VUkwiLCJnZXRQb3N0ZXIiLCJwb3N0ZXIiLCJzdG9yZUhvbGRlciIsInNldHRpbmdzIiwiZ2V0U3RhdGUiLCJkZWZhdWx0UHJpdmF0ZUNhbGxJbWFnZSIsImRlZmF1bHRPZmZsaW5lTW9kZWxJbWFnZSIsImRlZmF1bHRHcm91cENoYXRJbWFnZSIsImlzVXJsIiwibWF0Y2giLCJjIiwiciIsInJhbmRvbSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwidW5pdFByaWNlcyIsInRleHQiLCJhcnJheVRvVHJlZSIsImFycmF5IiwiaWQiLCJwYXJlbnRJZCIsImNsb25lRGVlcCIsImluZGV4IiwiaGFzaFBhcmVudCIsInBhdGhNYXRjaFJlZ2V4cCIsInJlZ2V4cCIsImV4ZWMiLCJxdWVyeUFuY2VzdG9ycyIsImN1cnJlbnQiLCJoYXNoTWFwIiwiTWFwIiwiZ2V0UGF0aCIsImN1cnJlbnRQYXJlbnRJZCIsImNvbnN0cmFpbnRzIiwidmFsdWVzIiwiaXNNb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJnZXRVcmxQYXJhbWV0ZXIiLCJzUGFyYW0iLCJzUGFnZVVSTCIsImxvY2F0aW9uIiwic3Vic3RyaW5nIiwic1VSTFZhcmlhYmxlcyIsInNQYXJhbWV0ZXJOYW1lIiwidW5kZWZpbmVkIiwiREFZX09GX1dFRUsiLCJtb24iLCJ0dWUiLCJ3ZWQiLCJ0aHUiLCJmcmkiLCJzYXQiLCJzdW4iLCJnZXREZWZhdWx0U2NoZWR1bGUiLCJkZWZhdWx0VmFsIiwic3RhcnQiLCJlbmQiLCJjbG9zZWQiLCJnZXROZXh0U2hvdyIsInNjaGVkdWxlIiwid2Vla0RheSIsIm5leHRTaG93IiwicGVyZm9ybWVyU2hvd3MiLCJkYXkiLCJnZXRTZWFyY2hEYXRhIiwicGFnaW5hdGlvbiIsImZpbHRlcnMiLCJzb3J0ZXIiLCJvcmRlciIsIlNPUlQiLCJnZXRCYXNlNjQiLCJvcmlnaW5GaWxlT2JqIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJvbmVycm9yIiwiY29udmVydENvbm5lY3Rpb25EYXRhIiwiYXJyIiwic2VydmVyRGF0YSIsInBhcnNlIiwiY2xpZW50RGF0YSIsImNoZWNrVXNlckxvZ2luIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJnZXRDdXJyZW50VXNlciIsImlzUGh5c2ljYWxQcm9kdWN0IiwiY2hhdEJveE1lc3NhZ2VDbGFzc05hbWUiLCJyZXEiLCJpc01pbmUiLCJzdGFydHNTZXF1ZW5jZSIsImVuZHNTZXF1ZW5jZSIsIm1pbmUiLCJ0aXAiLCJjb252ZXJ0RmVldFRvQ20iLCJmZWV0IiwiaW5jaCIsImYiLCJmb3JtYXREYXRhV2VpZ2h0IiwibWluIiwibWF4IiwidG9GaXhlZCIsImxhYmVsIiwiZm9ybWF0RGF0YUhlaWdodCIsImEiLCJmb3JtYXRQcmljZSIsInByaWNlIiwiZnJhY3Rpb25EaWdpdHMiLCJnZXRQZXJmb3JtZXJDYXRlZ29yaWVzIiwiZ2V0UGVyZm9ybWVyQ2F0ZWdvcmllc1N1Y2Nlc3MiLCJnZXRQZXJmb3JtZXJDYXRlZ29yaWVzRmFpbCIsInNlYXJjaFBlcmZvcm1lclN1Y2Nlc3MiLCJzZWFyY2hQZXJmb3JtZXJGYWlsIiwic2V0UGVyZm9ybWVyU2VhcmNoaW5nIiwidXBkYXRlUGVyZm9ybWVyUHJvZmlsZSIsInVwZGF0ZVBlcmZvcm1lclByb2ZpbGVTdWNjZXNzIiwidXBkYXRlUGVyZm9ybWVyUHJvZmlsZUZhaWwiLCJzZXR1cGRhdGluZ1BlcmZvcm1lclByb2ZpbGUiLCJ1cGRhdGVQYXltZW50SW5mbyIsInVwZGF0ZURpcmVjdERlcG9zaXQiLCJ1cGRhdGVQYXh1bSIsInVwZGF0ZUJpdHBheSIsInVwZGF0ZVN0cmVhbWluZ1N0YXR1cyIsInVwZGF0ZURlZmF1bHRQcmljZSIsImdldFBlcmZvcm1lckRldGFpbHMiLCJnZXRQZXJmb3JtZXJEZXRhaWxzU3VjY2VzcyIsImdldFBlcmZvcm1lckRldGFpbHNGYWlsIiwic2V0R2V0dGluZ1BlcmZvcm1lckRldGFpbHMiLCJzZXRQZXJmb3JtZXJEZXRhaWxzIiwidXBkYXRlUGVyZm9ybWVyQXNzZXQiLCJzZXRGYXZvcml0ZVBlcmZvcm1lckRldGFpbHMiLCJnZXRNeVByb2R1Y3RzIiwiZ2V0TXlQcm9kdWN0c1N1Y2Nlc3MiLCJnZXRNeVByb2R1Y3RzRmFpbCIsInNldEdldHRpbmdNeVByb2R1Y3RzIiwiYWRkTXlQcm9kdWN0IiwicmVtb3ZlTXlQcm9kdWN0IiwiZ2V0RWFybmluZyIsImdldEVhcm5pbmdTdWNjZXNzIiwiZ2V0RWFybmluZ0ZhaWwiLCJzZXRHZXR0aW5nRWFybmluZyIsImdldFBheW91dFJlcXVlc3QiLCJnZXRQYXlvdXRSZXF1ZXN0U3VjY2VzcyIsImdldFBheW91dFJlcXVlc3RGYWlsIiwic2V0R2V0dGluZ1BheW91dFJlcXVlc3QiLCJyZW1vdmVQYXlvdXRSZXF1ZXN0IiwiZ2V0TXlWaWRlb3MiLCJnZXRNeVZpZGVvc1N1Y2Nlc3MiLCJnZXRNeVZpZGVvc0ZhaWwiLCJzZXRnZXR0aW5nTXlWaWRlb3MiLCJhZGRNeVZpZGVvcyIsInJlbW92ZU15VmlkZW8iLCJnZXRNeVBob3RvcyIsImdldE15UGhvdG9zU3VjY2VzcyIsImdldE15UGhvdG9zRmFpbCIsInNldGdldHRpbmdNeVBob3RvcyIsImFkZE15UGhvdG9zIiwicmVtb3ZlTXlQaG90byIsImdldE15R2FsbGVyaWVzIiwiZ2V0TXlHYWxsZXJpZXNTdWNjZXNzIiwiZ2V0TXlHYWxsZXJpZXNGYWlsIiwic2V0Z2V0dGluZ015R2FsbGVyaWVzIiwiYWRkTXlHYWxsZXJpZXMiLCJyZW1vdmVNeUdhbGxlcmllcyIsInVwZGF0ZUN1cnJlbnRQZXJmb3JtZXIiLCJ1cGRhdGVDdXJyZW50UGVyZm9ybWVyQmFsYW5jZSIsImxvYWRVSVZhbHVlIiwiVE9LRU4iLCJST0xFIiwiUEVSRk9STUVSX1JPTEUiLCJVU0VSX1JPTEUiLCJTVFVESU9fUk9MRSIsImRlc2NlbmQiLCJhc2NlbmQiLCJBUElSZXF1ZXN0Iiwic2V0QXV0aEhlYWRlclRva2VuIiwidG9rZW4iLCJwYXJzZUpTT04iLCJyZXNwb25zZSIsImpzb24iLCJjaGVja1N0YXR1cyIsIkVycm9yIiwiY2xvbmUiLCJyZXF1ZXN0IiwiYm9keSIsInZlcmIiLCJ1cGRhdGVkSGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsIkFQSV9FTkRQT0lOVCIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsInRoZW4iLCJidWlsZFVybCIsImJhc2VVcmwiLCJxdWVyeVN0cmluZyIsImsiLCJwb3N0IiwicHV0IiwiZGVsIiwidXBsb2FkIiwiZmlsZXMiLCJvblByb2dyZXNzIiwidXBsb2FkVXJsIiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRhZ2UiLCJsb2FkZWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmllbGRuYW1lIiwiY3VzdG9tRGF0YSIsInJlc3BvbnNlVHlwZSIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsInJlZ2lzdGVyIiwiZG9jdW1lbnRWZXJpZmljYXRpb24iLCJkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUiLCJpZFZlcmlmaWNhdGlvbiIsImlkVmVyaWZpY2F0aW9uRGlsZSIsIm9taXQiLCJBdXRoU2VydmljZSIsImxvZ2luIiwic2V0QXV0aEhlYWRlciIsInJvbGUiLCJleHBpcmVzIiwicGVyZm9ybWVyTG9naW4iLCJzdHVkaW9Mb2dpbiIsInNldFRva2VuIiwiZ2V0VG9rZW4iLCJnZXRSb2xlIiwicmVtb3ZlVG9rZW4iLCJyZW1vdmUiLCJyZW1vdmVSZW1lbWJlciIsInVwZGF0ZVBhc3N3b3JkIiwicGVyZm9ybWVyc1JlZ2lzdGVyIiwidXNlclJlZ2lzdGVyIiwic3R1ZGlvUmVnaXN0ZXIiLCJmb3Jnb3RQYXNzd29yZCIsInJlc2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwiYXV0aFNlcnZpY2UiLCJCYW5uZXJTZXJ2aWNlIiwiYmFubmVyU2VydmljZSIsImdsb2JhbENvbmZpZyIsInNldEdsb2JhbENvbmZpZyIsIkVhcm5pbmdTZXJ2aWNlIiwiZWFybmluZ1NlcnZpY2UiLCJGYXZvdXJpdGVTZXJ2aWNlIiwibGlrZSIsInVubGlrZSIsImlzRmF2b3JpdGVkIiwiR2FsbGVyeVNlcnZpY2UiLCJpc1BlcmZvcm1lciIsInB1cmNoYXNlZCIsImNyZWF0ZSIsInVwZGF0ZSIsInB1YmxpY2RldGFpbHMiLCJnYWxsZXJ5U2VydmljZSIsIk1lc3NhZ2VTZXJ2aWNlIiwiZ2V0Q29udmVyc2F0aW9ucyIsInNlYXJjaENvbnZlcnNhdGlvbnMiLCJjcmVhdGVDb252ZXJzYXRpb24iLCJnZXRDb252ZXJzYXRpb25EZXRhaWwiLCJnZXRDb252ZXJzYXRpb25CeVN0cmVhbUlkIiwic3RyZWFtSWQiLCJnZXRNZXNzYWdlcyIsImNvbnZlcnNhdGlvbklkIiwiZ2V0UHVibGljTWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsInNlbmRTdHJlYW1NZXNzYWdlIiwic2VuZFB1YmxpY1N0cmVhbU1lc3NhZ2UiLCJmaW5kUHVibGljQ29udmVyc2F0aW9uUGVyZm9ybWVyIiwicGVyZm9ybWVySWQiLCJjb3VudFRvdGFsTm90UmVhZCIsInJlYWRBbGxJbkNvbnZlcnNhdGlvbiIsInJlY2lwaWVudElkIiwiZ2V0TWVzc2FnZVVwbG9hZFVybCIsImRlbGV0ZU1lc3NhZ2UiLCJkZWxldGVBbGxNZXNzYWdlSW5Db252ZXJzYXRpb24iLCJtZXNzYWdlU2VydmljZSIsIk9yZGVyU2VydmljZSIsInBheWxvYWQiLCJ1c2VyU2VhcmNoIiwidXNlckZpbmREZXRhaWxzIiwib3JkZXJTZXJ2aWNlIiwiUGF5bWVudEluZm9ybWF0aW9uU2VydmljZSIsImZpbmRPbmUiLCJwYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlIiwiUGF5b3V0UmVxdWVzdFNlcnZpY2UiLCJjYWxjdWxhdGUiLCJzdHVkaW9TZWFyY2giLCJkZXRhaWwiLCJwYXlvdXRSZXF1ZXN0U2VydmljZSIsIlBlcmZvcm1lckNhdGVnb3JpZXNTZXJ2aWNlIiwiZ2V0TGlzdCIsIlBlcmZvcm1lclNlcnZpY2UiLCJtZSIsInVwZGF0ZU1lIiwiZ2V0QXZhdGFyVXBsb2FkVXJsIiwiZ2V0RG9jdW1lbnRzVXBsb2FkVXJsIiwiZ2V0UmVsZWFzZUZvcm1VcmwiLCJteVByb2R1Y3QiLCJjcmVhdGVQcm9kdWN0IiwiaW1hZ2UiLCJkaWdpdGFsRmlsZSIsInVwZGF0ZVByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiZ2V0Q29tbWlzc2lvbiIsInVwZGF0ZURpcmVjdERlcG9zdCIsImdlb0Jsb2NrIiwiZ2V0QmxvY2tlZExpc3QiLCJpbmNyZWFzZVZpZXciLCJ1cGRhdGVCcm9hZGNhc3RTZXR0aW5nIiwic3VzcGVuZEFjY291bnQiLCJwYXNzd29yZCIsImNoZWNrQmxvY2siLCJHRU5OREVSX1BFUkZPUk1FUiIsInBlcmZvcm1lclNlcnZpY2UiLCJQaG90b1NlcnZpY2UiLCJzZWFyY2hCeUdhbGxlcnkiLCJnYWxsZXJ5SWQiLCJteVBob3RvcyIsInVwbG9hZEltYWdlcyIsInBob3RvU2VydmljZSIsIlBvc3RTZXJ2aWNlIiwiZmluZEJ5SWQiLCJjcmVhdGVDb250YWN0Q290ZW50IiwicG9zdFNlcnZpY2UiLCJQcm9kdWN0U2VydmljZSIsImdldERvd25sb2FkTGluayIsInByb2R1Y3RTZXJ2aWNlIiwiUHVyY2hhc2VJdGVtU2VydmljZSIsInB1cmNoYXNlSXRlbSIsInB1cmNoYXNlUHJvZHVjdCIsInB1cmNoYXNlVmlkZW8iLCJwdXJjaGFzZUl0ZW1TZXJ2aWNlIiwiUmVmdW5kUmVxdWVzdFNlcnZpY2UiLCJyZWZ1bmRSZXF1ZXN0U2VydmljZSIsIlNldHRpbmdTZXJ2aWNlIiwiZ3JvdXAiLCJnZXRDb3VudHJpZXMiLCJnZXRUaW1lem9uZXMiLCJzZXR0aW5nU2VydmljZSIsIlN0cmVhbVNlcnZpY2UiLCJnZXRTZXNzaW9uSWQiLCJnb0xpdmUiLCJqb2luUHVibGljQ2hhdCIsInJlcXVlc3RQcml2YXRlQ2hhdCIsImFjY2VwdFByaXZhdGVDaGF0Iiwic3RhcnRHcm91cENoYXQiLCJqb2luR3JvdXBDaGF0IiwiZ2VuZXJhdGVPbmVUaW1lVG9rZW4iLCJnZXRQdWJsaXNoVG9rZW4iLCJleHBpcmVEYXRlIiwiYWRkIiwidG9EYXRlIiwiZ2V0VGltZSIsInNlY3VyZU9wdGlvbiIsInRva2VuSWQiLCJnZXRTdWJzY3JpYmVyVG9rZW4iLCJnZXRMaXZlU3RyZWFtT3JWb2RVUkwiLCJfcGxheWVyIiwiYXBwTmFtZSIsInZpZXdlclVSTCIsImV4dGVuc2lvbiIsIm9uZVRpbWVUb2tlbiIsInN0cmVhbVNlcnZpY2UiLCJTdHVkaW9TZXJ2aWNlIiwiYWRkTW9kZWwiLCJnZXRNZW1iZXJzIiwiZ2V0TWVtYmVyQ29tbWlzc2lvbnMiLCJ1cGRhdGVNZW1iZXJDb21taXNzaW9uIiwiZ2V0UGVyZm9ybWVyUmVxdWVzdCIsInVwZGF0ZVN0YXR1c1BlcmZvcm1lclJlcXVlc3QiLCJ1cGRhdGVNZW1iZXJTdGF0dXMiLCJzdHVkaW9TZXJ2aWNlIiwiVG9rZW5QYWNrYWdlU2VydmljZSIsImJ1eVRva2VucyIsInRva2VuUGFja2FnZVNlcnZpY2UiLCJUcmFuc2FjdGlvblNlcnZpY2UiLCJzZW5kVGlwVG9rZW4iLCJzZW5kUGFpZFRva2VuIiwidHJhbnNhY3Rpb25TZXJ2aWNlIiwiVXNlclNlcnZpY2UiLCJ1c2VySWQiLCJ1c2VyU2VydmljZSIsIlV0aWxzU2VydmljZSIsImNvdW50cmllc0xpc3QiLCJsYW5ndWFnZXNMaXN0IiwicGhvbmVDb2Rlc0xpc3QiLCJzdGF0aXN0aWNzIiwidmVyaWZ5UmVjYXB0Y2hhIiwidXRpbHNTZXJ2aWNlIiwiVmlkZW9TZXJ2aWNlIiwibXlWaWRlb3MiLCJ2aWRlbyIsInRyYWlsZXIiLCJ0aHVtYm5haWwiLCJ1c2VyRmluZFZpZGVvQnlJZCIsInZpZGVvU2VydmljZSIsIkV2ZW50Iiwid2FybmluZyIsIlNvY2tldCIsIm5leHRQcm9wcyIsImNsb3NlIiwidXJpIiwiTkVYVF9QVUJMSUNfU09DS0VUX0VORFBPSU5UIiwidHJhbnNwb3J0cyIsIlNvY2tldElPIiwibWVyZ2VPcHRpb25zIiwiZGVidWciLCJkZWZhdWx0T3B0aW9ucyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwiYXV0b0Nvbm5lY3QiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJvbmx5IiwiY3JlYXRlQ29udGV4dCIsIk5PREVfRU5WIiwiYXBwbHkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQztBQUFDQyxXQUFEO0FBQVlDLGFBQVo7QUFBeUJDLGNBQXpCO0FBQXVDQyxnQkFBdkM7QUFBdURDO0FBQXZELENBQUQsS0FBc0U7QUFDckYsU0FDSTtBQUFLLGFBQVMsRUFBRyxtQkFBa0JBLFFBQVM7QUFBNUMsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFL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Q0FBbUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQSxvRUFBb0UsVUFBVSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFPdDhCLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0MsT0FBT0EsT0FBTyxDQUFDMjdCLEtBQWYsS0FBeUIsVUFBL0QsRUFBMkU7QUFDekUzN0IsV0FBTyxDQUFDMjdCLEtBQVIsQ0FBY1ksS0FBZCxDQUFvQnY4QixPQUFwQixFQUE2QmMsSUFBN0I7QUFDRDtBQUNGLENBVE0sQzs7Ozs7Ozs7Ozs7QUMvQlAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvcGVyZm9ybWVyLWNhdGVnb3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wZXJmb3JtZXItY2F0ZWdvcnkvaW5kZXgudHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgUGFnZUJhbm5lciA9ICh7cGFnZVRpdGxlLCBob21lUGFnZVVybCwgaG9tZVBhZ2VUZXh0LCBhY3RpdmVQYWdlVGV4dCwgaW1nQ2xhc3N9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwYWdlLXRpdGxlLWFyZWEgJHtpbWdDbGFzc31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZS1jZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57cGFnZVRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtob21lUGFnZVVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2hvbWVQYWdlVGV4dH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj57YWN0aXZlUGFnZVRleHR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VCYW5uZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvcGFnZS1oZWFkZXInO1xuaW1wb3J0IHsgcGVyZm9ybWVyQ2F0ZWdvcmllcyB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9wZXJmb21lci1jYXRlZ29yaWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdXBkYXRlVUlWYWx1ZSB9IGZyb20gJ3NyYy9yZWR1eC91aS9hY3Rpb25zJztcbmltcG9ydCB7XG4gIElQZXJmb3JtZXJDYXRlZ29naWVzLFxuICBJUmVzcG9uc2UsXG4gIElQZXJmb3JtZXIsXG4gIElQZXJmb3JtU2VhcmNoXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tbW9uL1BhZ2VCYW5uZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBQZXJmb3JtZXJHcmlkIGZyb20gJ0Bjb21wb25lbnRzL3BlcmZvcm1lci9wZXJmb3JtZXItZ3JpZCc7XG5pbXBvcnQge1xuICBzZWFyY2hQZXJmb3JtZXIsXG4gIHVwZGF0ZVBlcmZvcm1lckZhdm91cml0ZVxufSBmcm9tICdAcmVkdXgvcGVyZm9ybWVyL2FjdGlvbnMnO1xuaW1wb3J0IHsgZmF2b3VyaXRlU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBnZXRSZXNwb25zZUVycm9yIH0gZnJvbSAnc3JjL2xpYic7XG5pbXBvcnQgeyBTb2NrZXRDb250ZXh0IH0gZnJvbSAnc3JjL3NvY2tldCc7XG5pbXBvcnQgJy4vaW5kZXgubGVzcydcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNhdGVnb3J5OiBJUGVyZm9ybWVyQ2F0ZWdvZ2llcztcbiAgZGF0YTogSVBlcmZvcm1lcltdO1xuICBzZWFyY2hQZXJmb3JtZXI6IEZ1bmN0aW9uO1xuICB0b3RhbDogbnVtYmVyO1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBzZWFyY2hpbmc6IGJvb2xlYW47XG4gIGxvZ2dlZEluOiBib29sZWFuO1xuICBlcnJvcjogYW55O1xuICB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGU6IEZ1bmN0aW9uO1xuICBwbHVyYWxUZXh0TW9kZWw6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElTdGF0ZXMge1xuICBxdWVyeTogSVBlcmZvcm1TZWFyY2g7XG4gIHNvcnQ/OiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNvcnRCeT86IHN0cmluZztcbiAgfTtcbn1cblxuY29uc3QgaW5pdFF1ZXJ5U3RhdGU6IElQZXJmb3JtU2VhcmNoID0ge1xuICBvZmZzZXQ6IDAsXG4gIGxpbWl0OiA2MCxcbiAgZ2VuZGVyOiAnJyxcbiAgY2F0ZWdvcnk6ICcnLFxuICBjb3VudHJ5OiAnJyxcbiAgc29ydEJ5OiAnJyxcbiAgc29ydDogJ2Rlc2MnXG59O1xuXG5jbGFzcyBQZXJmb3JtZXJDYXRlZ29yeVBhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlcz4ge1xuICBzdGF0aWMgYXV0aGVudGljYXRlID0gZmFsc2U7XG5cbiAgc3RhdGljIGxheW91dCA9ICdwdWJsaWMnO1xuXG4gIHByaXZhdGUgc29ja2V0O1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBjdHggfSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAocHJvY2Vzcy5icm93c2VyICYmIGN0eC5xdWVyeS5jYXRlZ29yeSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNhdGVnb3J5OiBKU09OLnBhcnNlKGN0eC5xdWVyeS5jYXRlZ29yeSlcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjdHgucXVlcnkuc2x1Zykge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3A6IElSZXNwb25zZTxJUGVyZm9ybWVyQ2F0ZWdvZ2llcz4gPSBhd2FpdCBwZXJmb3JtZXJDYXRlZ29yaWVzLmRldGFpbHMoXG4gICAgICAgIGN0eC5xdWVyeS5zbHVnXG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYXRlZ29yeTogcmVzcC5kYXRhXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHF1ZXJ5OiBpbml0UXVlcnlTdGF0ZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNlYXJjaCgpO1xuICAgIHRoaXMuc29ja2V0ID0gdGhpcy5jb250ZXh0O1xuICAgIHRoaXMuc29ja2V0Lm9uKCdtb2RlbFVwZGF0ZVN0YXR1cycsIHRoaXMuc2VhcmNoKTtcbiAgICB0aGlzLnNvY2tldC5vbignbW9kZWxVcGRhdGVTdHJlYW1pbmdTdGF0dXMnLCB0aGlzLnNlYXJjaCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBJUHJvcHMpIHtcbiAgICBjb25zdCB7IGNhdGVnb3J5LCBsb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY2F0ZWdvcnkgIT09IHByZXZQcm9wcy5jYXRlZ29yeSkge1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gICAgaWYgKCFsb2dnZWRJbiAmJiBsb2dnZWRJbiAhPT0gcHJldlByb3BzLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc29ja2V0ID0gdGhpcy5jb250ZXh0O1xuICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgdGhpcy5zb2NrZXQub2ZmKCdtb2RlbFVwZGF0ZVN0YXR1cycpO1xuICAgICAgdGhpcy5zb2NrZXQub2ZmKCdtb2RlbFVwZGF0ZVN0cmVhbWluZ1N0YXR1cycpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uTGlrZShwZXJmb3JtZXI6IElQZXJmb3JtZXIpIHtcbiAgICBjb25zdCB7IF9pZCwgaXNGYXZvcml0ZSB9ID0gcGVyZm9ybWVyO1xuICAgIGNvbnN0IHsgdXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlOiBkaXNwYXRjaFVwZGF0ZVBlcmZvcm1lckZhdm91cml0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZmF2b3VyaXRlU2VydmljZS5mYXZvcml0ZShfaWQsIGlzRmF2b3JpdGUpO1xuICAgICAgZGlzcGF0Y2hVcGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUoX2lkKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgZSA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShlcnJvcik7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZSkpO1xuICAgIH1cbiAgfVxuXG4gIHNldEZpbHRlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlYXJjaFBlcmZvcm1lcjogZGlzcGF0Y2hTZWFyY2hQZXJmb3JtZXIsIGNhdGVnb3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgZGlzcGF0Y2hTZWFyY2hQZXJmb3JtZXIoe1xuICAgICAgLi4ucXVlcnksXG4gICAgICBjYXRlZ29yeTogY2F0ZWdvcnkgPyBjYXRlZ29yeS5faWQgOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnksIHBsdXJhbFRleHRNb2RlbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgIHtjYXRlZ29yeSA/IGBDYXRlZ29yeSAtICR7Y2F0ZWdvcnkubmFtZX1gIDogYE91ciAgJHsnVGhlcmFwaXN0cycgfHwgJ1BlcmZvcm1lcnMnfWB9XG4gICAgICAgICAgICB7Lyoge2NhdGVnb3J5ID8gYENhdGVnb3J5IC0gJHtjYXRlZ29yeS5uYW1lfWAgOiBgQWxsICR7cGx1cmFsVGV4dE1vZGVsIHx8ICdQZXJmb3JtZXJzJ31gfSAqL31cbiAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxQYWdlQmFubmVyXG4gICAgICAgICAgcGFnZVRpdGxlPVwiT3VyIFRoZXJhcGlzdHNcIlxuICAgICAgICAgIGhvbWVQYWdlVXJsPVwiL1wiXG4gICAgICAgICAgaG9tZVBhZ2VUZXh0PVwiSG9tZVwiXG4gICAgICAgICAgYWN0aXZlUGFnZVRleHQ9XCJPdXIgVGhlcmFwaXN0c1wiXG4gICAgICAgICAgaW1nQ2xhc3M9XCJiZy00XCJcbiAgICAgICAgLz5cbiAgICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9e2NhdGVnb3J5ID8gY2F0ZWdvcnkubmFtZSA6IGBPdXIgJHsnVGhlcmFwaXN0cycgfHwgJ1BlcmZvcm1lcnMnfWB9IC8+XG4gICAgICAgIHsvKiA8UGFnZUhlYWRlciB0aXRsZT17Y2F0ZWdvcnkgPyBjYXRlZ29yeS5uYW1lIDogYEFsbCAke3BsdXJhbFRleHRNb2RlbCB8fCAnUGVyZm9ybWVycyd9YH0gLz4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPFBlcmZvcm1lckdyaWRcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgey4uLnF1ZXJ5fVxuICAgICAgICAgICAgaXNQYWdlXG4gICAgICAgICAgICBzZXRGaWx0ZXI9e3RoaXMuc2V0RmlsdGVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbkxpa2U9e3RoaXMub25MaWtlLmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cblBlcmZvcm1lckNhdGVnb3J5UGFnZS5jb250ZXh0VHlwZSA9IFNvY2tldENvbnRleHQ7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgbG9nZ2VkSW46IHN0YXRlLmF1dGgubG9nZ2VkSW4sXG4gIC4uLnN0YXRlLnBlcmZvcm1lci5wZXJmb3JtZXJzLFxuICAuLi5zdGF0ZS51aVxufSk7XG5jb25zdCBtYXBEaXNwYXRjaCA9IHsgc2VhcmNoUGVyZm9ybWVyLCB1cGRhdGVQZXJmb3JtZXJGYXZvdXJpdGUsIHVwZGF0ZVVJVmFsdWUgfTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoKShQZXJmb3JtZXJDYXRlZ29yeVBhZ2UpO1xuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWx0LXRleHQgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSUljb25zIHtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbn1cblxuZXhwb3J0IGNvbnN0IEZhY2Vib29rSWNvbiA9ICh7IHN0eWxlIH06IElJY29ucykgPT4gKFxuICA8aW1nIHNyYz1cIi9pY29ucy9mYWNlYm9vay5zdmdcIiBzdHlsZT17c3R5bGV9IC8+XG4pO1xuXG5leHBvcnQgY29uc3QgVHdpdHRlckljb24gPSAoeyBzdHlsZSB9OiBJSWNvbnMpID0+IChcbiAgPGltZyBzcmM9XCIvaWNvbnMvdHdpdHRlci5zdmdcIiBzdHlsZT17c3R5bGV9IC8+XG4pO1xuXG5leHBvcnQgY29uc3QgSW5zdGFncmFtSWNvbiA9ICh7IHN0eWxlIH06IElJY29ucykgPT4gKFxuICA8aW1nIHNyYz1cIi9pY29ucy9pbnN0YWdyYW0uc3ZnXCIgc3R5bGU9e3N0eWxlfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IEdpZnRJY29uID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFudGljb25cIj5cbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjE3XCJcbiAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTcgMTZcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNC42MDAxIDQuODQzNzVIMTIuMjkzOEMxMi41MDYzIDQuNTA5MzggMTIuNjMxMyA0LjExMjUgMTIuNjMxMyAzLjY4NzVDMTIuNjMxMyAyLjQ5ODQ0IDExLjY2NDIgMS41MzEyNSAxMC40NzUxIDEuNTMxMjVDOS44MjgyMiAxLjUzMTI1IDkuMjQ1NDEgMS44MTg3NSA4Ljg1MDEgMi4yNzE4N0M4LjQ1NDc5IDEuODE4NzUgNy44NzE5NyAxLjUzMTI1IDcuMjI1MSAxLjUzMTI1QzYuMDM2MDQgMS41MzEyNSA1LjA2ODg1IDIuNDk4NDQgNS4wNjg4NSAzLjY4NzVDNS4wNjg4NSA0LjExMjUgNS4xOTIyOSA0LjUwOTM4IDUuNDA2MzUgNC44NDM3NUgzLjEwMDFDMi44MjM1NCA0Ljg0Mzc1IDIuNjAwMSA1LjA2NzE5IDIuNjAwMSA1LjM0Mzc1VjguNDY4NzVDMi42MDAxIDguNTM3NSAyLjY1NjM1IDguNTkzNzUgMi43MjUxIDguNTkzNzVIMy4zNTAxVjEzLjk2ODhDMy4zNTAxIDE0LjI0NTMgMy41NzM1NCAxNC40Njg4IDMuODUwMSAxNC40Njg4SDEzLjg1MDFDMTQuMTI2NyAxNC40Njg4IDE0LjM1MDEgMTQuMjQ1MyAxNC4zNTAxIDEzLjk2ODhWOC41OTM3NUgxNC45NzUxQzE1LjA0MzggOC41OTM3NSAxNS4xMDAxIDguNTM3NSAxNS4xMDAxIDguNDY4NzVWNS4zNDM3NUMxNS4xMDAxIDUuMDY3MTkgMTQuODc2NyA0Ljg0Mzc1IDE0LjYwMDEgNC44NDM3NVpNOS4zODEzNSAzLjY4NzVDOS4zODEzNSAzLjA4NDM4IDkuODcxOTcgMi41OTM3NSAxMC40NzUxIDIuNTkzNzVDMTEuMDc4MiAyLjU5Mzc1IDExLjU2ODggMy4wODQzOCAxMS41Njg4IDMuNjg3NUMxMS41Njg4IDQuMjkwNjIgMTEuMDc4MiA0Ljc4MTI1IDEwLjQ3NTEgNC43ODEyNUg5LjM4MTM1VjMuNjg3NVpNNy4yMjUxIDIuNTkzNzVDNy44MjgyMiAyLjU5Mzc1IDguMzE4ODUgMy4wODQzOCA4LjMxODg1IDMuNjg3NVY0Ljc4MTI1SDcuMjI1MUM2LjYyMTk3IDQuNzgxMjUgNi4xMzEzNSA0LjI5MDYyIDYuMTMxMzUgMy42ODc1QzYuMTMxMzUgMy4wODQzOCA2LjYyMTk3IDIuNTkzNzUgNy4yMjUxIDIuNTkzNzVaTTMuNjYyNiA3LjUzMTI1VjUuOTA2MjVIOC4zMTg4NVY3LjUzMTI1SDMuNjYyNlpNNC40MTI2IDguNTkzNzVIOC4zMTg4NVYxMy40MDYySDQuNDEyNlY4LjU5Mzc1Wk0xMy4yODc2IDEzLjQwNjJIOS4zODEzNVY4LjU5Mzc1SDEzLjI4NzZWMTMuNDA2MlpNMTQuMDM3NiA3LjUzMTI1SDkuMzgxMzVWNS45MDYyNUgxNC4wMzc2VjcuNTMxMjVaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQsIGNvbG9yIH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTIxLjc1IDMuNzVIMi4yNUMxLjgzNTE2IDMuNzUgMS41IDQuMDg1MTYgMS41IDQuNVYxOS41QzEuNSAxOS45MTQ4IDEuODM1MTYgMjAuMjUgMi4yNSAyMC4yNUgyMS43NUMyMi4xNjQ4IDIwLjI1IDIyLjUgMTkuOTE0OCAyMi41IDE5LjVWNC41QzIyLjUgNC4wODUxNiAyMi4xNjQ4IDMuNzUgMjEuNzUgMy43NVpNMjAuODEyNSA2LjM0Njg3VjE4LjU2MjVIMy4xODc1VjYuMzQ2ODdMMi41NDA2MyA1Ljg0Mjk3TDMuNDYxNzIgNC42NTkzOEw0LjQ2NDg0IDUuNDM5ODRIMTkuNTM3NUwyMC41NDA2IDQuNjU5MzhMMjEuNDYxNyA1Ljg0Mjk3TDIwLjgxMjUgNi4zNDY4N1pNMTkuNTM3NSA1LjQzNzVMMTIgMTEuMjk2OUw0LjQ2MjUgNS40Mzc1TDMuNDU5MzggNC42NTcwM0wyLjUzODI4IDUuODQwNjJMMy4xODUxNiA2LjM0NDUzTDExLjE5MTQgMTIuNTY5NUMxMS40MjE3IDEyLjc0ODQgMTEuNzA0OSAxMi44NDU1IDExLjk5NjUgMTIuODQ1NUMxMi4yODgxIDEyLjg0NTUgMTIuNTcxMyAxMi43NDg0IDEyLjgwMTYgMTIuNTY5NUwyMC44MTI1IDYuMzQ2ODdMMjEuNDU5NCA1Ljg0Mjk3TDIwLjUzODMgNC42NTkzOEwxOS41Mzc1IDUuNDM3NVpcIlxuICAgICAgZmlsbD17Y29sb3J9XG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgRmF2b3VyaXRlSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQsIGNvbG9yIH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTE0LjE4NTUgNC40NTkxNkMxMy45ODM4IDMuOTc3OTMgMTMuNjkyOSAzLjU0MTg1IDEzLjMyOTIgMy4xNzUzMkMxMi45NjUzIDIuODA3NjkgMTIuNTM2MiAyLjUxNTU1IDEyLjA2NTIgMi4zMTQ3N0MxMS41NzY5IDIuMTA1NzUgMTEuMDUzMSAxLjk5ODc2IDEwLjUyNDMgMi4wMDAwMUM5Ljc4MjQzIDIuMDAwMDEgOS4wNTg2MiAyLjIwOTMzIDguNDI5NjEgMi42MDQ3MkM4LjI3OTEzIDIuNjk5MyA4LjEzNjE4IDIuODAzMTkgOC4wMDA3NCAyLjkxNjM4QzcuODY1MzEgMi44MDMxOSA3LjcyMjM2IDIuNjk5MyA3LjU3MTg4IDIuNjA0NzJDNi45NDI4NyAyLjIwOTMzIDYuMjE5MDYgMi4wMDAwMSA1LjQ3NzE5IDIuMDAwMDFDNC45NDI5OSAyLjAwMDAxIDQuNDI1MzMgMi4xMDU0NSAzLjkzNjI3IDIuMzE0NzdDMy40NjM3NyAyLjUxNjM0IDMuMDM3OTEgMi44MDYyOSAyLjY3MjI0IDMuMTc1MzJDMi4zMDgwNyAzLjU0MTQzIDIuMDE3MTcgMy45Nzc2MiAxLjgxNjAxIDQuNDU5MTZDMS42MDY4NCA0Ljk1OTk4IDEuNSA1LjQ5MTgyIDEuNSA2LjAzOTE2QzEuNSA2LjU1NTQ5IDEuNjAyMzMgNy4wOTM1MiAxLjgwNTQ3IDcuNjQwODZDMS45NzU1MiA4LjA5ODI3IDIuMjE5MyA4LjU3MjczIDIuNTMwNzkgOS4wNTE4NUMzLjAyNDM2IDkuODEwMDYgMy43MDMwMyAxMC42MDA4IDQuNTQ1NzIgMTEuNDAyNUM1Ljk0MjE4IDEyLjczMTMgNy4zMjUwOSAxMy42NDkyIDcuMzgzNzggMTMuNjg2NEw3Ljc0MDQxIDEzLjkyMjFDNy44OTg0MiAxNC4wMjYgOC4xMDE1NyAxNC4wMjYgOC4yNTk1NyAxMy45MjIxTDguNjE2MjEgMTMuNjg2NEM4LjY3NDkgMTMuNjQ3NiAxMC4wNTYzIDEyLjczMTMgMTEuNDU0MyAxMS40MDI1QzEyLjI5NyAxMC42MDA4IDEyLjk3NTYgOS44MTAwNiAxMy40NjkyIDkuMDUxODVDMTMuNzgwNyA4LjU3MjczIDE0LjAyNiA4LjA5ODI3IDE0LjE5NDUgNy42NDA4NkMxNC4zOTc3IDcuMDkzNTIgMTQuNSA2LjU1NTQ5IDE0LjUgNi4wMzkxNkMxNC41MDE1IDUuNDkxODIgMTQuMzk0NiA0Ljk1OTk4IDE0LjE4NTUgNC40NTkxNlY0LjQ1OTE2Wk04LjAwMDc0IDEyLjY5NTZDOC4wMDA3NCAxMi42OTU2IDIuNjQzNjUgOS4xNTg4NCAyLjY0MzY1IDYuMDM5MTZDMi42NDM2NSA0LjQ1OTE2IDMuOTEyMiAzLjE3ODQyIDUuNDc3MTkgMy4xNzg0MkM2LjU3NzIgMy4xNzg0MiA3LjUzMTI1IDMuODExMDQgOC4wMDA3NCA0LjczNTE2QzguNDcwMjQgMy44MTEwNCA5LjQyNDI5IDMuMTc4NDIgMTAuNTI0MyAzLjE3ODQyQzEyLjA4OTMgMy4xNzg0MiAxMy4zNTc4IDQuNDU5MTYgMTMuMzU3OCA2LjAzOTE2QzEzLjM1NzggOS4xNTg4NCA4LjAwMDc0IDEyLjY5NTYgOC4wMDA3NCAxMi42OTU2WlwiXG4gICAgICBmaWxsPXtjb2xvcn1cbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBTZW5kTWVzc2FnZUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTI2Ljc1NTIgMTQuNjM2N0wzLjY0MDE4IDMuMDQ2MDhDMy41NDYyMyAyLjk5OTEgMy40Mzg0NiAyLjk4ODA0IDMuMzM2MjIgMy4wMTI5MUMzLjEwMTM0IDMuMDcwOTUgMi45NTQ4OCAzLjMwODYyIDMuMDEyOTEgMy41NDYyOUw1LjM5NDg4IDEzLjI3OTdDNS40MzA4IDEzLjQyNjIgNS41Mzg1NyAxMy41NDUxIDUuNjgyMjYgMTMuNTkyTDkuNzYzNjUgMTQuOTkzMkw1LjY4NTAyIDE2LjM5NDNDNS41NDEzMyAxNi40NDQxIDUuNDMzNTYgMTYuNTYwMiA1LjQwMDQgMTYuNzA2NkwzLjAxMjkxIDI2LjQ1MzlDMi45ODgwNCAyNi41NTYyIDIuOTk5MSAyNi42NjM5IDMuMDQ2MDcgMjYuNzU1MUMzLjE1Mzg0IDI2Ljk3MzUgMy40MTkxMiAyNy4wNjE5IDMuNjQwMTggMjYuOTU0MUwyNi43NTUyIDE1LjQyOThDMjYuODQwOCAxNS4zODg0IDI2LjkwOTkgMTUuMzE2NSAyNi45NTQxIDE1LjIzMzZDMjcuMDYxOSAxNS4wMTI1IDI2Ljk3MzUgMTQuNzQ3MiAyNi43NTUyIDE0LjYzNjdaTTUuNzM3NTIgMjMuNjg0OEw3LjEyNzQ2IDE4LjAwMjhMMTUuMjg0NyAxNS4yMDMyQzE1LjM0ODMgMTUuMTgxMSAxNS40MDA4IDE1LjEzMTQgMTUuNDIyOSAxNS4wNjVDMTUuNDYxNiAxNC45NDkgMTUuNDAwOCAxNC44MjQ2IDE1LjI4NDcgMTQuNzgzMkw3LjEyNzQ2IDExLjk4NjRMNS43NDMwNSA2LjMyNjQ5TDIzLjA5NjYgMTUuMDI5MUw1LjczNzUyIDIzLjY4NDhaXCJcbiAgICAgIGZpbGw9XCIjRkYwMDY2XCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBGdW5kc0ljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIHZpZXdCb3g9XCIwIDAgMjUgMjRcIlxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk05Ljg1MDEgMTBDOS41ODQ4OCAxMCA5LjMzMDUzIDEwLjEwNTQgOS4xNDI5OSAxMC4yOTI5QzguOTU1NDUgMTAuNDgwNCA4Ljg1MDEgMTAuNzM0OCA4Ljg1MDEgMTFWMTNDOC44NTAxIDEzLjI2NTIgOC45NTU0NSAxMy41MTk2IDkuMTQyOTkgMTMuNzA3MUM5LjMzMDUzIDEzLjg5NDYgOS41ODQ4OCAxNCA5Ljg1MDEgMTRDMTAuMTE1MyAxNCAxMC4zNjk3IDEzLjg5NDYgMTAuNTU3MiAxMy43MDcxQzEwLjc0NDcgMTMuNTE5NiAxMC44NTAxIDEzLjI2NTIgMTAuODUwMSAxM1YxMUMxMC44NTAxIDEwLjczNDggMTAuNzQ0NyAxMC40ODA0IDEwLjU1NzIgMTAuMjkyOUMxMC4zNjk3IDEwLjEwNTQgMTAuMTE1MyAxMCA5Ljg1MDEgMTBaTTIxLjg1MDEgMTFDMjIuMTE1MyAxMSAyMi4zNjk3IDEwLjg5NDYgMjIuNTU3MiAxMC43MDcxQzIyLjc0NDcgMTAuNTE5NiAyMi44NTAxIDEwLjI2NTIgMjIuODUwMSAxMFY2QzIyLjg1MDEgNS43MzQ3OCAyMi43NDQ3IDUuNDgwNDMgMjIuNTU3MiA1LjI5Mjg5QzIyLjM2OTcgNS4xMDUzNiAyMi4xMTUzIDUgMjEuODUwMSA1SDMuODUwMUMzLjU4NDg4IDUgMy4zMzA1MyA1LjEwNTM2IDMuMTQyOTkgNS4yOTI4OUMyLjk1NTQ1IDUuNDgwNDMgMi44NTAxIDUuNzM0NzggMi44NTAxIDZWMTBDMi44NTAxIDEwLjI2NTIgMi45NTU0NSAxMC41MTk2IDMuMTQyOTkgMTAuNzA3MUMzLjMzMDUzIDEwLjg5NDYgMy41ODQ4OCAxMSAzLjg1MDEgMTFDNC4xMTUzMSAxMSA0LjM2OTY3IDExLjEwNTQgNC41NTcyIDExLjI5MjlDNC43NDQ3NCAxMS40ODA0IDQuODUwMSAxMS43MzQ4IDQuODUwMSAxMkM0Ljg1MDEgMTIuMjY1MiA0Ljc0NDc0IDEyLjUxOTYgNC41NTcyIDEyLjcwNzFDNC4zNjk2NyAxMi44OTQ2IDQuMTE1MzEgMTMgMy44NTAxIDEzQzMuNTg0ODggMTMgMy4zMzA1MyAxMy4xMDU0IDMuMTQyOTkgMTMuMjkyOUMyLjk1NTQ1IDEzLjQ4MDQgMi44NTAxIDEzLjczNDggMi44NTAxIDE0VjE4QzIuODUwMSAxOC4yNjUyIDIuOTU1NDUgMTguNTE5NiAzLjE0Mjk5IDE4LjcwNzFDMy4zMzA1MyAxOC44OTQ2IDMuNTg0ODggMTkgMy44NTAxIDE5SDIxLjg1MDFDMjIuMTE1MyAxOSAyMi4zNjk3IDE4Ljg5NDYgMjIuNTU3MiAxOC43MDcxQzIyLjc0NDcgMTguNTE5NiAyMi44NTAxIDE4LjI2NTIgMjIuODUwMSAxOFYxNEMyMi44NTAxIDEzLjczNDggMjIuNzQ0NyAxMy40ODA0IDIyLjU1NzIgMTMuMjkyOUMyMi4zNjk3IDEzLjEwNTQgMjIuMTE1MyAxMyAyMS44NTAxIDEzQzIxLjU4NDkgMTMgMjEuMzMwNSAxMi44OTQ2IDIxLjE0MyAxMi43MDcxQzIwLjk1NTUgMTIuNTE5NiAyMC44NTAxIDEyLjI2NTIgMjAuODUwMSAxMkMyMC44NTAxIDExLjczNDggMjAuOTU1NSAxMS40ODA0IDIxLjE0MyAxMS4yOTI5QzIxLjMzMDUgMTEuMTA1NCAyMS41ODQ5IDExIDIxLjg1MDEgMTFaTTIwLjg1MDEgOS4xOEMyMC4yNzA5IDkuMzkwMiAxOS43NzA2IDkuNzczNjMgMTkuNDE2OSAxMC4yNzgyQzE5LjA2MzMgMTAuNzgyNyAxOC44NzM2IDExLjM4MzkgMTguODczNiAxMkMxOC44NzM2IDEyLjYxNjEgMTkuMDYzMyAxMy4yMTczIDE5LjQxNjkgMTMuNzIxOEMxOS43NzA2IDE0LjIyNjQgMjAuMjcwOSAxNC42MDk4IDIwLjg1MDEgMTQuODJWMTdIMTAuODUwMUMxMC44NTAxIDE2LjczNDggMTAuNzQ0NyAxNi40ODA0IDEwLjU1NzIgMTYuMjkyOUMxMC4zNjk3IDE2LjEwNTQgMTAuMTE1MyAxNiA5Ljg1MDEgMTZDOS41ODQ4OCAxNiA5LjMzMDUzIDE2LjEwNTQgOS4xNDI5OSAxNi4yOTI5QzguOTU1NDUgMTYuNDgwNCA4Ljg1MDEgMTYuNzM0OCA4Ljg1MDEgMTdINC44NTAxVjE0LjgyQzUuNDI5MjUgMTQuNjA5OCA1LjkyOTY0IDE0LjIyNjQgNi4yODMyNiAxMy43MjE4QzYuNjM2ODcgMTMuMjE3MyA2LjgyNjU3IDEyLjYxNjEgNi44MjY1NyAxMkM2LjgyNjU3IDExLjM4MzkgNi42MzY4NyAxMC43ODI3IDYuMjgzMjYgMTAuMjc4MkM1LjkyOTY0IDkuNzczNjMgNS40MjkyNSA5LjM5MDIgNC44NTAxIDkuMThWN0g4Ljg1MDFDOC44NTAxIDcuMjY1MjIgOC45NTU0NSA3LjUxOTU3IDkuMTQyOTkgNy43MDcxMUM5LjMzMDUzIDcuODk0NjQgOS41ODQ4OCA4IDkuODUwMSA4QzEwLjExNTMgOCAxMC4zNjk3IDcuODk0NjQgMTAuNTU3MiA3LjcwNzExQzEwLjc0NDcgNy41MTk1NyAxMC44NTAxIDcuMjY1MjIgMTAuODUwMSA3SDIwLjg1MDFWOS4xOFpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBQYXltZW50VG9rZW5zSGlzdG9yeUljb24gPSAoeyB3aWR0aCwgaGVpZ2h0IH06IElJY29ucykgPT4gKFxuICA8c3ZnXG4gICAgd2lkdGg9e3dpZHRoIHx8ICcxZW0nfVxuICAgIGhlaWdodD17aGVpZ2h0IHx8ICcxZW0nfVxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk0xOS45NTggNC4wNDIwMUMxOC45MTU3IDIuOTk2ODQgMTcuNjc3MiAyLjE2Nzk2IDE2LjMxMzUgMS42MDNDMTQuOTQ5OSAxLjAzODA1IDEzLjQ4OCAwLjc0ODE2NiAxMi4wMTIgMC43NTAwMDlDOC45Mzc5NyAwLjc1MDAwOSA2LjE1MTk3IDEuOTg0MDEgNC4xMjI5NyAzLjk4NTAxTDQuMTIzOTcgMy45ODQwMVYwLjc1MTAwOUgyLjYyMzk3VjYuNzUxMDFIOC42MjM5N1Y1LjI1MTAxSDQuOTgwOTdDNS44ODkyNCA0LjMwMjE1IDYuOTgwMzMgMy41NDcxMyA4LjE4ODQgMy4wMzE1M0M5LjM5NjQ2IDIuNTE1OTIgMTAuNjk2NSAyLjI1MDQgMTIuMDEgMi4yNTEwMUMxNy4zOCAyLjI1MTAxIDIxLjc0OCA2LjYyMDAxIDIxLjc0OCAxMS45ODlDMjEuNzQ4IDE3LjM1OCAxNy4zNzkgMjEuNzI3IDEyLjAxIDIxLjcyN0M2LjY0MDk3IDIxLjcyNyAyLjI3MTk3IDE3LjM1OCAyLjI3MTk3IDExLjk4OUgwLjc3MTk3M0MwLjc3MTk3MyAxOC4xOTYgNS44MDM5NyAyMy4yMjcgMTIuMDEgMjMuMjI3QzE1LjExMyAyMy4yMjcgMTcuOTIzIDIxLjk2OSAxOS45NTcgMTkuOTM1QzIxLjk5MSAxNy45MDEgMjMuMjQ5IDE1LjA5MiAyMy4yNDkgMTEuOTg4QzIzLjI0OSA4Ljg4NDAxIDIxLjk5MSA2LjA3NTAxIDE5Ljk1NyA0LjA0MTAxTDE5Ljk1OCA0LjA0MjAxWlwiIC8+XG4gICAgPHBhdGggZD1cIk0xNi4xMjUgNy41SDYuMzc1VjE1SDE2LjEyNVY3LjVaTTE1LjM3NSAxNC4yNUg3LjEyNVY4LjI1SDE1LjM3NVYxNC4yNVpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTYuODc1IDkuMzc1VjE1Ljc1SDguMjVWMTYuNUgxNy42MjVWOS4zNzVIMTYuODc1WlwiIGZpbGw9XCJibGFja1wiIC8+XG4gICAgPHBhdGggZD1cIk0xMS4yNSAxMy4wODlDMTIuMTgwNSAxMy4wODkgMTIuOTM3NSAxMi4yNjU1IDEyLjkzNzUgMTEuMjUzQzEyLjkzNzUgMTAuMjQwNSAxMi4xODA1IDkuNDE2OTkgMTEuMjUgOS40MTY5OUMxMC4zMTk1IDkuNDE2OTkgOS41NjI1IDEwLjI0MDUgOS41NjI1IDExLjI1M0M5LjU2MjUgMTIuMjY1NSAxMC4zMTk1IDEzLjA4OSAxMS4yNSAxMy4wODlaTTExLjI1IDEwLjE2NzVDMTEuNzY3IDEwLjE2NzUgMTIuMTg3NSAxMC42NTQ1IDEyLjE4NzUgMTEuMjUzNUMxMi4xODc1IDExLjg1MjUgMTEuNzY3IDEyLjMzOTUgMTEuMjUgMTIuMzM5NUMxMC43MzMgMTIuMzM5NSAxMC4zMTI1IDExLjg1MjUgMTAuMzEyNSAxMS4yNTM1QzEwLjMxMjUgMTAuNjU0NSAxMC43MzMgMTAuMTY3NSAxMS4yNSAxMC4xNjc1WlwiIC8+XG4gICAgPHBhdGggZD1cIk03Ljg3NSA5LjE4NzVIOC42MjVWMTMuMzEyNUg3Ljg3NVY5LjE4NzVaXCIgZmlsbD1cImJsYWNrXCIgLz5cbiAgICA8cGF0aCBkPVwiTTEzLjg3NSA5LjE4NzVIMTQuNjI1VjEzLjMxMjVIMTMuODc1VjkuMTg3NVpcIiBmaWxsPVwiYmxhY2tcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbkhpc3RvcnlJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNMTkuOTU4IDQuMDQyMDFDMTguOTE1NyAyLjk5Njg0IDE3LjY3NzIgMi4xNjc5NiAxNi4zMTM1IDEuNjAzQzE0Ljk0OTkgMS4wMzgwNSAxMy40ODggMC43NDgxNjYgMTIuMDEyIDAuNzUwMDA5QzguOTM3OTcgMC43NTAwMDkgNi4xNTE5NyAxLjk4NDAxIDQuMTIyOTcgMy45ODUwMUw0LjEyMzk3IDMuOTg0MDFWMC43NTEwMDlIMi42MjM5N1Y2Ljc1MTAxSDguNjIzOTdWNS4yNTEwMUg0Ljk4MDk3QzUuODg5MjQgNC4zMDIxNSA2Ljk4MDMzIDMuNTQ3MTMgOC4xODg0IDMuMDMxNTNDOS4zOTY0NiAyLjUxNTkyIDEwLjY5NjUgMi4yNTA0IDEyLjAxIDIuMjUxMDFDMTcuMzggMi4yNTEwMSAyMS43NDggNi42MjAwMSAyMS43NDggMTEuOTg5QzIxLjc0OCAxNy4zNTggMTcuMzc5IDIxLjcyNyAxMi4wMSAyMS43MjdDNi42NDA5NyAyMS43MjcgMi4yNzE5NyAxNy4zNTggMi4yNzE5NyAxMS45ODlIMC43NzE5NzNDMC43NzE5NzMgMTguMTk2IDUuODAzOTcgMjMuMjI3IDEyLjAxIDIzLjIyN0MxNS4xMTMgMjMuMjI3IDE3LjkyMyAyMS45NjkgMTkuOTU3IDE5LjkzNUMyMS45OTEgMTcuOTAxIDIzLjI0OSAxNS4wOTIgMjMuMjQ5IDExLjk4OEMyMy4yNDkgOC44ODQwMSAyMS45OTEgNi4wNzUwMSAxOS45NTcgNC4wNDEwMUwxOS45NTggNC4wNDIwMVpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTIuMDAwMyA2LjE2Njc1QzguNzc4OTcgNi4xNjY3NSA2LjE2Njk5IDguNzc4NzMgNi4xNjY5OSAxMi4wMDAxQzYuMTY2OTkgMTUuMjIxNCA4Ljc3ODk3IDE3LjgzMzQgMTIuMDAwMyAxNy44MzM0QzE1LjIyMTcgMTcuODMzNCAxNy44MzM3IDE1LjIyMTQgMTcuODMzNyAxMi4wMDAxQzE3LjgzMzcgOC43Nzg3MyAxNS4yMjE3IDYuMTY2NzUgMTIuMDAwMyA2LjE2Njc1Wk0xMi4wMDAzIDE2Ljg0MzhDOS4zMjU4NSAxNi44NDM4IDcuMTU2NTggMTQuNjc0NiA3LjE1NjU4IDEyLjAwMDFDNy4xNTY1OCA5LjMyNTYgOS4zMjU4NSA3LjE1NjMzIDEyLjAwMDMgNy4xNTYzM0MxNC42NzQ4IDcuMTU2MzMgMTYuODQ0MSA5LjMyNTYgMTYuODQ0MSAxMi4wMDAxQzE2Ljg0NDEgMTQuNjc0NiAxNC42NzQ4IDE2Ljg0MzggMTIuMDAwMyAxNi44NDM4Wk0xMi42MjE0IDExLjY5OEwxMi4yOTA3IDExLjYyMTJWOS44NzI0OEMxMi43ODU1IDkuOTQwMTkgMTMuMDkxNSAxMC4yNTAxIDEzLjE0MzYgMTAuNjMwM0MxMy4xNTAxIDEwLjY4MjQgMTMuMTk0MyAxMC43MjAxIDEzLjI0NjQgMTAuNzIwMUgxMy44MzExQzEzLjg5MjMgMTAuNzIwMSAxMy45NDA0IDEwLjY2NjcgMTMuOTM1MiAxMC42MDU2QzEzLjg1NTggOS43OTQzNSAxMy4xODc4IDkuMjczNTIgMTIuMjk1OSA5LjE4MzY4VjguNzU3ODlDMTIuMjk1OSA4LjcwMDYgMTIuMjQ5IDguNjUzNzMgMTIuMTkxNyA4LjY1MzczSDExLjgyNThDMTEuNzY4NiA4LjY1MzczIDExLjcyMTcgOC43MDA2IDExLjcyMTcgOC43NTc4OVY5LjE4NzU4QzEwLjc5OTggOS4yNzc0MyAxMC4wNzg1IDkuNzg2NTQgMTAuMDc4NSAxMC43MzcxQzEwLjA3ODUgMTEuNjE3MyAxMC43MjY5IDEyLjA0MTcgMTEuNDA3OSAxMi4yMDQ1TDExLjcyOTUgMTIuMjg2NVYxNC4xNDQ2QzExLjE1NCAxNC4wNjc4IDEwLjgzMTEgMTMuNzYwNSAxMC43NjQ2IDEzLjM0NjRDMTAuNzU2OCAxMy4yOTcgMTAuNzEyNiAxMy4yNjA1IDEwLjY2MTggMTMuMjYwNUgxMC4wNjAyQzkuOTk5MDIgMTMuMjYwNSA5Ljk1MDg1IDEzLjMxMjYgOS45NTYwNiAxMy4zNzM4QzEwLjAxNDYgMTQuMDg5OSAxMC41NTc2IDE0Ljc0ODggMTEuNzE2NSAxNC44MzM0VjE1LjI0MjNDMTEuNzE2NSAxNS4yOTk2IDExLjc2MzMgMTUuMzQ2NCAxMS44MjA2IDE1LjM0NjRIMTIuMTkwNEMxMi4yNDc3IDE1LjM0NjQgMTIuMjk0NiAxNS4yOTk2IDEyLjI5NDYgMTUuMjQxTDEyLjI5MiAxNC44MjgyQzEzLjMxMTUgMTQuNzM4NCAxNC4wNDA3IDE0LjE5MjggMTQuMDQwNyAxMy4yMTM2QzE0LjAzOTQgMTIuMzEgMTMuNDY1MiAxMS45MDYzIDEyLjYyMTQgMTEuNjk4Wk0xMS43MjgyIDExLjQ4NzFDMTEuNjU1MyAxMS40NjYyIDExLjU5NDEgMTEuNDQ2NyAxMS41MzI5IDExLjQyMkMxMS4wOTI4IDExLjI2MzEgMTAuODg4MyAxMS4wMDY2IDEwLjg4ODMgMTAuNjc1OUMxMC44ODgzIDEwLjIwMzIgMTEuMjQ2NCA5LjkzMzY4IDExLjcyODIgOS44NzI0OFYxMS40ODcxWk0xMi4yOTA3IDE0LjE0ODVWMTIuNDA3NkMxMi4zMzExIDEyLjQxOTQgMTIuMzY3NSAxMi40Mjg1IDEyLjQwNTMgMTIuNDM2M0MxMy4wMjEyIDEyLjYyMzggMTMuMjI4MiAxMi44ODQyIDEzLjIyODIgMTMuMjgzOUMxMy4yMjgyIDEzLjc5MzEgMTIuODQ1NCAxNC4wOTkgMTIuMjkwNyAxNC4xNDg1WlwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IFB1cmNoYXNlZEltYWdlSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTcuNSA2Ljc1QzcuNSA2Ljc1IDcuNSAyLjI1IDEyIDIuMjVDMTYuNSAyLjI1IDE2LjUgNi43NSAxNi41IDYuNzVNMy43NSA2Ljc1VjIxLjc1SDIwLjI1VjYuNzVIMy43NVpcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTIuNDgxNiAxMy45NjZMMTEuNTY5OSAxNS4xMjg1TDExLjA4ODMgMTQuNTE0NUMxMS4wNzk1IDE0LjUwMzIgMTEuMDY4MyAxNC40OTQyIDExLjA1NTUgMTQuNDg4QzExLjA0MjcgMTQuNDgxNyAxMS4wMjg3IDE0LjQ3ODUgMTEuMDE0NSAxNC40Nzg1QzExLjAwMDIgMTQuNDc4NSAxMC45ODYyIDE0LjQ4MTcgMTAuOTczNCAxNC40ODhDMTAuOTYwNiAxNC40OTQyIDEwLjk0OTQgMTQuNTAzMiAxMC45NDA2IDE0LjUxNDVMOS43NzEwOSAxNi4wMDUxQzkuNzYwMjcgMTYuMDE4OSA5Ljc1MzU2IDE2LjAzNTUgOS43NTE3MiAxNi4wNTI5QzkuNzQ5ODggMTYuMDcwNCA5Ljc1Mjk5IDE2LjA4OCA5Ljc2MDY5IDE2LjEwMzhDOS43NjgzOSAxNi4xMTk1IDkuNzgwMzggMTYuMTMyOCA5Ljc5NTI3IDE2LjE0MjFDOS44MTAxNyAxNi4xNTE0IDkuODI3MzcgMTYuMTU2MyA5Ljg0NDkyIDE2LjE1NjJIMTQuMTU2MkMxNC4yMzQ4IDE2LjE1NjIgMTQuMjc4MSAxNi4wNjYgMTQuMjMwMSAxNi4wMDUxTDEyLjYzMDUgMTMuOTY2QzEyLjYyMTYgMTMuOTU0OCAxMi42MTAzIDEzLjk0NTcgMTIuNTk3NCAxMy45Mzk1QzEyLjU4NDUgMTMuOTMzMyAxMi41NzA0IDEzLjkzIDEyLjU1NjEgMTMuOTNDMTIuNTQxNyAxMy45MyAxMi41Mjc2IDEzLjkzMzMgMTIuNTE0NyAxMy45Mzk1QzEyLjUwMTggMTMuOTQ1NyAxMi40OTA1IDEzLjk1NDggMTIuNDgxNiAxMy45NjZaTTEwLjIxODggMTMuMTc5N0MxMC4yMTg4IDEzLjMwNCAxMC4yNjgxIDEzLjQyMzIgMTAuMzU2IDEzLjUxMTFDMTAuNDQ0IDEzLjU5OTEgMTAuNTYzMiAxMy42NDg0IDEwLjY4NzUgMTMuNjQ4NEMxMC44MTE4IDEzLjY0ODQgMTAuOTMxIDEzLjU5OTEgMTEuMDE5IDEzLjUxMTFDMTEuMTA2OSAxMy40MjMyIDExLjE1NjIgMTMuMzA0IDExLjE1NjIgMTMuMTc5N0MxMS4xNTYyIDEzLjA1NTQgMTEuMTA2OSAxMi45MzYxIDExLjAxOSAxMi44NDgyQzEwLjkzMSAxMi43NjAzIDEwLjgxMTggMTIuNzEwOSAxMC42ODc1IDEyLjcxMDlDMTAuNTYzMiAxMi43MTA5IDEwLjQ0NCAxMi43NjAzIDEwLjM1NiAxMi44NDgyQzEwLjI2ODEgMTIuOTM2MSAxMC4yMTg4IDEzLjA1NTQgMTAuMjE4OCAxMy4xNzk3Wk0xNi4wMTQ4IDExLjM4MkwxMy40OTMgOC44NjAxNkMxMy40MjI3IDguNzg5ODQgMTMuMzI3NyA4Ljc1IDEzLjIyODEgOC43NUg4LjI1QzguMDQyNTggOC43NSA3Ljg3NSA4LjkxNzU4IDcuODc1IDkuMTI1VjE4Ljg3NUM3Ljg3NSAxOS4wODI0IDguMDQyNTggMTkuMjUgOC4yNSAxOS4yNUgxNS43NUMxNS45NTc0IDE5LjI1IDE2LjEyNSAxOS4wODI0IDE2LjEyNSAxOC44NzVWMTEuNjQ4QzE2LjEyNSAxMS41NDg0IDE2LjA4NTIgMTEuNDUyMyAxNi4wMTQ4IDExLjM4MlpNMTUuMjYwMiAxMS44MjAzSDEzLjA1NDdWOS42MTQ4NEwxNS4yNjAyIDExLjgyMDNaTTE1LjI4MTIgMTguNDA2Mkg4LjcxODc1VjkuNTkzNzVIMTIuMjU3OFYxMi4xMjVDMTIuMjU3OCAxMi4yNTU1IDEyLjMwOTcgMTIuMzgwNyAxMi40MDIgMTIuNDczQzEyLjQ5NDMgMTIuNTY1MyAxMi42MTk1IDEyLjYxNzIgMTIuNzUgMTIuNjE3MkgxNS4yODEyVjE4LjQwNjJaXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgUHVyY2hhc2VkVmlkZW9JY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNNy41IDYuNzVDNy41IDYuNzUgNy41IDIuMjUgMTIgMi4yNUMxNi41IDIuMjUgMTYuNSA2Ljc1IDE2LjUgNi43NU0zLjc1IDYuNzVWMjEuNzVIMjAuMjVWNi43NUgzLjc1WlwiIC8+XG4gICAgPHBhdGggZD1cIk0xMiA5QzkuMjQzIDkgNyAxMS4yNDMgNyAxNEM3IDE2Ljc1NyA5LjI0MyAxOSAxMiAxOUMxNC43NTcgMTkgMTcgMTYuNzU3IDE3IDE0QzE3IDExLjI0MyAxNC43NTcgOSAxMiA5Wk0xMiAxOEM5Ljc5NDUgMTggOCAxNi4yMDU1IDggMTRDOCAxMS43OTQ1IDkuNzk0NSAxMCAxMiAxMEMxNC4yMDU1IDEwIDE2IDExLjc5NDUgMTYgMTRDMTYgMTYuMjA1NSAxNC4yMDU1IDE4IDEyIDE4WlwiIC8+XG4gICAgPHBhdGggZD1cIk0xMC41IDE2LjVMMTQuNSAxNEwxMC41IDExLjVWMTYuNVpcIiBmaWxsPVwiYmxhY2tcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBQdXJjaGFzZWRJdGVtSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTEuNSA2LjQwNDk4VjE3LjYxQzEuNSAxOC4yODUgMS45NSAxOC44NyAyLjYyNSAxOS4wNjVMMTIuMzc1IDIxLjY2QzEyLjYxNSAyMS43MzUgMTIuODg1IDIxLjczNSAxMy4xMjUgMjEuNjZMMjIuODc1IDE5LjA2NUMyMy41NSAxOC44NyAyNCAxOC4yODUgMjQgMTcuNjFWNi40MDQ5OEMyNCA1LjcyOTk4IDIzLjU1IDUuMTQ0OTggMjIuODc1IDQuOTQ5OThMMTMuMTI1IDIuMzM5OThDMTIuODc3IDIuMjk0OTggMTIuNjIzIDIuMjk0OTggMTIuMzc1IDIuMzM5OThMMi42MjUgNC45NDk5OEMxLjk1IDUuMTQ0OTggMS41IDUuNzI5OTggMS41IDYuNDA0OThaTTEyIDIwLjA0TDMgMTcuNjU1VjcuNDk5OThMMTIgOS45MTQ5OFYyMC4wNFpNMyA1Ljk5OTk4TDYuNzUgNC45OTQ5OEwxNi41IDcuNTg5OThMMTIuNzUgOC41OTQ5OEwzIDUuOTk5OThaTTIyLjUgMTcuNjU1TDEzLjUgMjAuMDRWOS45MTQ5OEwxNi41IDkuMDg5OThWMTIuNzVMMTkuNSAxMS45NTVWOC4yOTQ5OEwyMi41IDcuNDk5OThWMTcuNjU1Wk0xOS41IDYuNzk0OThMOS43NSA0LjE5OTk4TDEyLjc1IDMuNDA0OThMMjIuNSA1Ljk5OTk4TDE5LjUgNi43OTQ5OFpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBNeVByb2R1Y3RJY29uID0gKHsgd2lkdGgsIGhlaWdodCB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPXt3aWR0aCB8fCAnMWVtJ31cbiAgICBoZWlnaHQ9e2hlaWdodCB8fCAnMWVtJ31cbiAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGQ9XCJNMS41IDYuNDA1MDNWMTcuNjFDMS41IDE4LjI4NSAxLjk1IDE4Ljg3IDIuNjI1IDE5LjA2NUwxMi4zNzUgMjEuNjZDMTIuNjE1IDIxLjczNSAxMi44ODUgMjEuNzM1IDEzLjEyNSAyMS42NkwyMi44NzUgMTkuMDY1QzIzLjU1IDE4Ljg3IDI0IDE4LjI4NSAyNCAxNy42MVY2LjQwNTAzQzI0IDUuNzMwMDMgMjMuNTUgNS4xNDUwMyAyMi44NzUgNC45NTAwM0wxMy4xMjUgMi4zNDAwM0MxMi44NzcgMi4yOTUwMiAxMi42MjMgMi4yOTUwMiAxMi4zNzUgMi4zNDAwM0wyLjYyNSA0Ljk1MDAzQzEuOTUgNS4xNDUwMyAxLjUgNS43MzAwMyAxLjUgNi40MDUwM1pNMTIgMjAuMDRMMyAxNy42NTVWNy41MDAwM0wxMiA5LjkxNTAzVjIwLjA0Wk0zIDYuMDAwMDNMNi43NSA0Ljk5NTAzTDE2LjUgNy41OTAwM0wxMi43NSA4LjU5NTAzTDMgNi4wMDAwM1pNMjIuNSAxNy42NTVMMTMuNSAyMC4wNFY5LjkxNTAzTDE2LjUgOS4wOTAwM1YxMi43NUwxOS41IDExLjk1NVY4LjI5NTAzTDIyLjUgNy41MDAwM1YxNy42NTVaTTE5LjUgNi43OTUwM0w5Ljc1IDQuMjAwMDNMMTIuNzUgMy40MDUwM0wyMi41IDYuMDAwMDNMMTkuNSA2Ljc5NTAzWlwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgVmlkZW9zSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgdmlld0JveD1cIjAgMCAzMCAzMVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTIyLjUwMDIgOS4xNDQyNEMyMi41MDAyIDcuNzY1NDkgMjEuMzc4OSA2LjY0NDI0IDIwLjAwMDIgNi42NDQyNEg1LjAwMDE4QzMuNjIxNDMgNi42NDQyNCAyLjUwMDE4IDcuNzY1NDkgMi41MDAxOCA5LjE0NDI0VjIxLjY0NDJDMi41MDAxOCAyMy4wMjMgMy42MjE0MyAyNC4xNDQyIDUuMDAwMTggMjQuMTQ0MkgyMC4wMDAyQzIxLjM3ODkgMjQuMTQ0MiAyMi41MDAyIDIzLjAyMyAyMi41MDAyIDIxLjY0NDJWMTcuNDc4TDI3LjUwMDIgMjEuNjQ0MlY5LjE0NDI0TDIyLjUwMDIgMTMuMzEwNVY5LjE0NDI0Wk0yMC4wMDI3IDIxLjY0NDJINS4wMDAxOFY5LjE0NDI0SDIwLjAwMDJMMjAuMDAxNCAxNS4zOTNMMjAuMDAwMiAxNS4zOTQyTDIwLjAwMTQgMTUuMzk1NUwyMC4wMDI3IDIxLjY0NDJaXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgUGhvdG9zSWNvbiA9ICh7IHdpZHRoLCBoZWlnaHQgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD17d2lkdGggfHwgJzFlbSd9XG4gICAgaGVpZ2h0PXtoZWlnaHQgfHwgJzFlbSd9XG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTIxLjc1IDMuNzVIMi4yNUMxLjgzNTE2IDMuNzUgMS41IDQuMDg1MTYgMS41IDQuNVYxOS41QzEuNSAxOS45MTQ4IDEuODM1MTYgMjAuMjUgMi4yNSAyMC4yNUgyMS43NUMyMi4xNjQ4IDIwLjI1IDIyLjUgMTkuOTE0OCAyMi41IDE5LjVWNC41QzIyLjUgNC4wODUxNiAyMi4xNjQ4IDMuNzUgMjEuNzUgMy43NVpNMjAuODEyNSAxOC41NjI1SDMuMTg3NVYxNy42MjczTDYuNDMzNTkgMTMuNzc2Nkw5Ljk1MTU2IDE3Ljk0ODRMMTUuNDI0MiAxMS40NjA5TDIwLjgxMjUgMTcuODVWMTguNTYyNVpNMjAuODEyNSAxNS41MjAzTDE1LjU2NzIgOS4zQzE1LjQ5MjIgOS4yMTA5NCAxNS4zNTYyIDkuMjEwOTQgMTUuMjgxMiA5LjNMOS45NTE1NiAxNS42MTg4TDYuNTc2NTYgMTEuNjE4QzYuNTAxNTYgMTEuNTI4OSA2LjM2NTYyIDExLjUyODkgNi4yOTA2MiAxMS42MThMMy4xODc1IDE1LjI5NzdWNS40Mzc1SDIwLjgxMjVWMTUuNTIwM1pNNy4xMjUgMTAuNjg3NUM3LjM5NTg1IDEwLjY4NzUgNy42NjQwNSAxMC42MzQyIDcuOTE0MjggMTAuNTMwNUM4LjE2NDUyIDEwLjQyNjkgOC4zOTE4OSAxMC4yNzQ5IDguNTgzNDEgMTAuMDgzNEM4Ljc3NDkzIDkuODkxODkgOC45MjY4NSA5LjY2NDUyIDkuMDMwNSA5LjQxNDI4QzkuMTM0MTUgOS4xNjQwNSA5LjE4NzUgOC44OTU4NSA5LjE4NzUgOC42MjVDOS4xODc1IDguMzU0MTUgOS4xMzQxNSA4LjA4NTk1IDkuMDMwNSA3LjgzNTcyQzguOTI2ODUgNy41ODU0OCA4Ljc3NDkzIDcuMzU4MTEgOC41ODM0MSA3LjE2NjU5QzguMzkxODkgNi45NzUwNyA4LjE2NDUyIDYuODIzMTUgNy45MTQyOCA2LjcxOTVDNy42NjQwNSA2LjYxNTg1IDcuMzk1ODUgNi41NjI1IDcuMTI1IDYuNTYyNUM2LjU3Nzk5IDYuNTYyNSA2LjA1MzM5IDYuNzc5OCA1LjY2NjU5IDcuMTY2NTlDNS4yNzk4IDcuNTUzMzkgNS4wNjI1IDguMDc3OTkgNS4wNjI1IDguNjI1QzUuMDYyNSA5LjE3MjAxIDUuMjc5OCA5LjY5NjYxIDUuNjY2NTkgMTAuMDgzNEM2LjA1MzM5IDEwLjQ3MDIgNi41Nzc5OSAxMC42ODc1IDcuMTI1IDEwLjY4NzVaTTcuMTI1IDcuOTY4NzVDNy40ODgyOCA3Ljk2ODc1IDcuNzgxMjUgOC4yNjE3MiA3Ljc4MTI1IDguNjI1QzcuNzgxMjUgOC45ODgyOCA3LjQ4ODI4IDkuMjgxMjUgNy4xMjUgOS4yODEyNUM2Ljc2MTcyIDkuMjgxMjUgNi40Njg3NSA4Ljk4ODI4IDYuNDY4NzUgOC42MjVDNi40Njg3NSA4LjI2MTcyIDYuNzYxNzIgNy45Njg3NSA3LjEyNSA3Ljk2ODc1WlwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IEZlbWFsZVNpZ25JY29uID0gKHsgY29sb3IgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNOCAxLjMzMzM3QzUuNzk0IDEuMzMzMzcgNCAzLjEyNzM3IDQgNS4zMzMzN0M0IDcuMzExMzcgNS40NDQ2NyA4Ljk1NDcxIDcuMzMzMzMgOS4yNzMzN1YxMS4zMzM0SDUuMzMzMzNWMTIuNjY2N0g3LjMzMzMzVjE0LjY1ODdIOC42NjY2N1YxMi42NjY3SDEwLjY2NjdWMTEuMzMzNEg4LjY2NjY3VjkuMjczMzdDMTAuNTU1MyA4Ljk1NDA0IDEyIDcuMzExMzcgMTIgNS4zMzMzN0MxMiAzLjEyNzM3IDEwLjIwNiAxLjMzMzM3IDggMS4zMzMzN1pNOCA4LjAwMDA0QzYuNTI5MzMgOC4wMDAwNCA1LjMzMzMzIDYuODA0MDQgNS4zMzMzMyA1LjMzMzM3QzUuMzMzMzMgMy44NjI3MSA2LjUyOTMzIDIuNjY2NzEgOCAyLjY2NjcxQzkuNDcwNjcgMi42NjY3MSAxMC42NjY3IDMuODYyNzEgMTAuNjY2NyA1LjMzMzM3QzEwLjY2NjcgNi44MDQwNCA5LjQ3MDY3IDguMDAwMDQgOCA4LjAwMDA0WlwiXG4gICAgICBmaWxsPXtjb2xvciB8fCAnY3VycmVudENvbG9yJ31cbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBNYWxlU2lnbkljb24gPSAoeyBjb2xvciB9OiBJSWNvbnMpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMTZcIlxuICAgIGhlaWdodD1cIjE2XCJcbiAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xMy4zMzM0IDcuMzMzMjlWMi42NjY2M0g4LjY2NjcxTDEwLjUyODcgNC41Mjg2M0w3LjY0NzM3IDcuNDA5OTZDNi45NzI2IDYuOTI2NiA2LjE2MzQxIDYuNjY2NjcgNS4zMzMzNyA2LjY2NjYzQzMuMTI3MzcgNi42NjY2MyAxLjMzMzM3IDguNDYwNjMgMS4zMzMzNyAxMC42NjY2QzEuMzMzMzcgMTIuODcyNiAzLjEyNzM3IDE0LjY2NjYgNS4zMzMzNyAxNC42NjY2QzcuNTM5MzcgMTQuNjY2NiA5LjMzMzM3IDEyLjg3MjYgOS4zMzMzNyAxMC42NjY2QzkuMzMzMzcgOS44MDM5NiA5LjA1NjA0IDkuMDA2NjMgOC41OTAwNCA4LjM1MjYzTDExLjQ3MTQgNS40NzEyOUwxMy4zMzM0IDcuMzMzMjlaTTUuMzMzMzcgMTMuMzMzM0MzLjg2MjcxIDEzLjMzMzMgMi42NjY3MSAxMi4xMzczIDIuNjY2NzEgMTAuNjY2NkMyLjY2NjcxIDkuMTk1OTYgMy44NjI3MSA3Ljk5OTk2IDUuMzMzMzcgNy45OTk5NkM2LjgwNDA0IDcuOTk5OTYgOC4wMDAwNCA5LjE5NTk2IDguMDAwMDQgMTAuNjY2NkM4LjAwMDA0IDEyLjEzNzMgNi44MDQwNCAxMy4zMzMzIDUuMzMzMzcgMTMuMzMzM1pcIlxuICAgICAgZmlsbD17Y29sb3IgfHwgJ2N1cnJlbnRDb2xvcid9XG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgVHJhbnNnZW5kZXJJY29uID0gKHsgY29sb3IgfTogSUljb25zKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNNi42NjY2NSAxMC4zMzMzQzcuNTUwNyAxMC4zMzMzIDguMzk4NTUgOS45ODIxIDkuMDIzNjcgOS4zNTY5OEM5LjY0ODc5IDguNzMxODUgOS45OTk5OCA3Ljg4NDAxIDkuOTk5OTggNi45OTk5NUM5Ljk5OTk4IDYuMTE1OSA5LjY0ODc5IDUuMjY4MDUgOS4wMjM2NyA0LjY0MjkzQzguMzk4NTUgNC4wMTc4MSA3LjU1MDcgMy42NjY2MiA2LjY2NjY1IDMuNjY2NjJDNS43ODI1OSAzLjY2NjYyIDQuOTM0NzQgNC4wMTc4MSA0LjMwOTYyIDQuNjQyOTNDMy42ODQ1IDUuMjY4MDUgMy4zMzMzMSA2LjExNTkgMy4zMzMzMSA2Ljk5OTk1QzMuMzMzMzEgNy44ODQwMSAzLjY4NDUgOC43MzE4NSA0LjMwOTYyIDkuMzU2OThDNC45MzQ3NCA5Ljk4MjEgNS43ODI1OSAxMC4zMzMzIDYuNjY2NjUgMTAuMzMzM1YxMC4zMzMzWk0xMC42NzUzIDQuNjA5MjlDMTEuMDY4OCA1LjI2OTI0IDExLjI5MzIgNi4wMTYxIDExLjMyODggNi43ODM2MkMxMS4zNjQ0IDcuNTUxMTMgMTEuMjEgOC4zMTU1NiAxMC44NzkyIDkuMDA5MDdDMTAuNTQ4NSA5LjcwMjU4IDEwLjA1MTcgMTAuMzAzNyA5LjQzMjkgMTAuNzU5MkM4LjgxNDEgMTEuMjE0NiA4LjA5MjQ1IDExLjUxMDMgNy4zMzE5OCAxMS42Mkw3LjMzMzMxIDExLjY2NjZWMTIuMzMzM0g3Ljk5OTk4QzguMTc2NzkgMTIuMzMzMyA4LjM0NjM2IDEyLjQwMzUgOC40NzEzOCAxMi41Mjg1QzguNTk2NDEgMTIuNjUzNiA4LjY2NjY0IDEyLjgyMzEgOC42NjY2NCAxM0M4LjY2NjY0IDEzLjE3NjggOC41OTY0MSAxMy4zNDYzIDguNDcxMzggMTMuNDcxNEM4LjM0NjM2IDEzLjU5NjQgOC4xNzY3OSAxMy42NjY2IDcuOTk5OTggMTMuNjY2Nkg3LjMzMzMxVjE0LjMzMzNDNy4zMzMzMSAxNC41MTAxIDcuMjYzMDcgMTQuNjc5NyA3LjEzODA1IDE0LjgwNDdDNy4wMTMwMyAxNC45Mjk3IDYuODQzNDYgMTUgNi42NjY2NSAxNUM2LjQ4OTgzIDE1IDYuMzIwMjYgMTQuOTI5NyA2LjE5NTI0IDE0LjgwNDdDNi4wNzAyMiAxNC42Nzk3IDUuOTk5OTggMTQuNTEwMSA1Ljk5OTk4IDE0LjMzMzNWMTMuNjY2Nkg1LjMzMzMxQzUuMTU2NSAxMy42NjY2IDQuOTg2OTMgMTMuNTk2NCA0Ljg2MTkxIDEzLjQ3MTRDNC43MzY4OCAxMy4zNDYzIDQuNjY2NjUgMTMuMTc2OCA0LjY2NjY1IDEzQzQuNjY2NjUgMTIuODIzMSA0LjczNjg4IDEyLjY1MzYgNC44NjE5MSAxMi41Mjg1QzQuOTg2OTMgMTIuNDAzNSA1LjE1NjUgMTIuMzMzMyA1LjMzMzMxIDEyLjMzMzNINS45OTk5OFYxMS42NjY2QzUuOTk5OTggMTEuNjUwNiA1Ljk5OTk4IDExLjYzNTMgNi4wMDEzMSAxMS42MkM0LjgzNTQ1IDExLjQ0OTEgMy43NzczMiAxMC44NDM3IDMuMDM5MjYgOS45MjUxOEMyLjMwMTIgOS4wMDY2NiAxLjkzNzgxIDcuODQyOTkgMi4wMjIwMSA2LjY2NzY5QzIuMTA2MjIgNS40OTIzOSAyLjYzMTc4IDQuMzkyNDIgMy40OTMyNSAzLjU4ODQ5QzQuMzU0NzEgMi43ODQ1NyA1LjQ4ODM0IDIuMzM2MTcgNi42NjY2NSAyLjMzMzI5QzcuODM5MDYgMi4zMzE4NiA4Ljk2ODgxIDIuNzczMDQgOS44Mjk5OCAzLjU2ODYyTDExLjA2MzMgMi4zMzUyOUgxMC4wMDY2QzkuODI5ODMgMi4zMzUyOSA5LjY2MDI2IDIuMjY1MDUgOS41MzUyNCAyLjE0MDAyQzkuNDEwMjIgMi4wMTUgOS4zMzk5OCAxLjg0NTQzIDkuMzM5OTggMS42Njg2MkM5LjMzOTk4IDEuNDkxODEgOS40MTAyMiAxLjMyMjI0IDkuNTM1MjQgMS4xOTcyMkM5LjY2MDI2IDEuMDcyMTkgOS44Mjk4MyAxLjAwMTk1IDEwLjAwNjYgMS4wMDE5NUgxMi42NzMzQzEyLjg1MDEgMS4wMDE5NSAxMy4wMTk3IDEuMDcyMTkgMTMuMTQ0NyAxLjE5NzIyQzEzLjI2OTcgMS4zMjIyNCAxMy4zNCAxLjQ5MTgxIDEzLjM0IDEuNjY4NjJWNC4zMzUyOUMxMy4zNCA0LjUxMjEgMTMuMjY5NyA0LjY4MTY3IDEzLjE0NDcgNC44MDY2OUMxMy4wMTk3IDQuOTMxNzIgMTIuODUwMSA1LjAwMTk1IDEyLjY3MzMgNS4wMDE5NUMxMi40OTY1IDUuMDAxOTUgMTIuMzI2OSA0LjkzMTcyIDEyLjIwMTkgNC44MDY2OUMxMi4wNzY5IDQuNjgxNjcgMTIuMDA2NiA0LjUxMjEgMTIuMDA2NiA0LjMzNTI5VjMuMjc3OTVMMTAuNjc2IDQuNjA5MjlIMTAuNjc1M1pcIlxuICAgICAgZmlsbD17Y29sb3IgfHwgJ2N1cnJlbnRDb2xvcid9XG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgVG9rZW5zSWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMjVcIlxuICAgIGhlaWdodD1cIjI0XCJcbiAgICB2aWV3Qm94PVwiMCAwIDI1IDI0XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk05Ljg1MDEgMTBDOS41ODQ4OCAxMCA5LjMzMDUzIDEwLjEwNTQgOS4xNDI5OSAxMC4yOTI5QzguOTU1NDUgMTAuNDgwNCA4Ljg1MDEgMTAuNzM0OCA4Ljg1MDEgMTFWMTNDOC44NTAxIDEzLjI2NTIgOC45NTU0NSAxMy41MTk2IDkuMTQyOTkgMTMuNzA3MUM5LjMzMDUzIDEzLjg5NDYgOS41ODQ4OCAxNCA5Ljg1MDEgMTRDMTAuMTE1MyAxNCAxMC4zNjk3IDEzLjg5NDYgMTAuNTU3MiAxMy43MDcxQzEwLjc0NDcgMTMuNTE5NiAxMC44NTAxIDEzLjI2NTIgMTAuODUwMSAxM1YxMUMxMC44NTAxIDEwLjczNDggMTAuNzQ0NyAxMC40ODA0IDEwLjU1NzIgMTAuMjkyOUMxMC4zNjk3IDEwLjEwNTQgMTAuMTE1MyAxMCA5Ljg1MDEgMTBaTTIxLjg1MDEgMTFDMjIuMTE1MyAxMSAyMi4zNjk3IDEwLjg5NDYgMjIuNTU3MiAxMC43MDcxQzIyLjc0NDcgMTAuNTE5NiAyMi44NTAxIDEwLjI2NTIgMjIuODUwMSAxMFY2QzIyLjg1MDEgNS43MzQ3OCAyMi43NDQ3IDUuNDgwNDMgMjIuNTU3MiA1LjI5Mjg5QzIyLjM2OTcgNS4xMDUzNiAyMi4xMTUzIDUgMjEuODUwMSA1SDMuODUwMUMzLjU4NDg4IDUgMy4zMzA1MyA1LjEwNTM2IDMuMTQyOTkgNS4yOTI4OUMyLjk1NTQ1IDUuNDgwNDMgMi44NTAxIDUuNzM0NzggMi44NTAxIDZWMTBDMi44NTAxIDEwLjI2NTIgMi45NTU0NSAxMC41MTk2IDMuMTQyOTkgMTAuNzA3MUMzLjMzMDUzIDEwLjg5NDYgMy41ODQ4OCAxMSAzLjg1MDEgMTFDNC4xMTUzMSAxMSA0LjM2OTY3IDExLjEwNTQgNC41NTcyIDExLjI5MjlDNC43NDQ3NCAxMS40ODA0IDQuODUwMSAxMS43MzQ4IDQuODUwMSAxMkM0Ljg1MDEgMTIuMjY1MiA0Ljc0NDc0IDEyLjUxOTYgNC41NTcyIDEyLjcwNzFDNC4zNjk2NyAxMi44OTQ2IDQuMTE1MzEgMTMgMy44NTAxIDEzQzMuNTg0ODggMTMgMy4zMzA1MyAxMy4xMDU0IDMuMTQyOTkgMTMuMjkyOUMyLjk1NTQ1IDEzLjQ4MDQgMi44NTAxIDEzLjczNDggMi44NTAxIDE0VjE4QzIuODUwMSAxOC4yNjUyIDIuOTU1NDUgMTguNTE5NiAzLjE0Mjk5IDE4LjcwNzFDMy4zMzA1MyAxOC44OTQ2IDMuNTg0ODggMTkgMy44NTAxIDE5SDIxLjg1MDFDMjIuMTE1MyAxOSAyMi4zNjk3IDE4Ljg5NDYgMjIuNTU3MiAxOC43MDcxQzIyLjc0NDcgMTguNTE5NiAyMi44NTAxIDE4LjI2NTIgMjIuODUwMSAxOFYxNEMyMi44NTAxIDEzLjczNDggMjIuNzQ0NyAxMy40ODA0IDIyLjU1NzIgMTMuMjkyOUMyMi4zNjk3IDEzLjEwNTQgMjIuMTE1MyAxMyAyMS44NTAxIDEzQzIxLjU4NDkgMTMgMjEuMzMwNSAxMi44OTQ2IDIxLjE0MyAxMi43MDcxQzIwLjk1NTUgMTIuNTE5NiAyMC44NTAxIDEyLjI2NTIgMjAuODUwMSAxMkMyMC44NTAxIDExLjczNDggMjAuOTU1NSAxMS40ODA0IDIxLjE0MyAxMS4yOTI5QzIxLjMzMDUgMTEuMTA1NCAyMS41ODQ5IDExIDIxLjg1MDEgMTFaTTIwLjg1MDEgOS4xOEMyMC4yNzA5IDkuMzkwMiAxOS43NzA2IDkuNzczNjMgMTkuNDE2OSAxMC4yNzgyQzE5LjA2MzMgMTAuNzgyNyAxOC44NzM2IDExLjM4MzkgMTguODczNiAxMkMxOC44NzM2IDEyLjYxNjEgMTkuMDYzMyAxMy4yMTczIDE5LjQxNjkgMTMuNzIxOEMxOS43NzA2IDE0LjIyNjQgMjAuMjcwOSAxNC42MDk4IDIwLjg1MDEgMTQuODJWMTdIMTAuODUwMUMxMC44NTAxIDE2LjczNDggMTAuNzQ0NyAxNi40ODA0IDEwLjU1NzIgMTYuMjkyOUMxMC4zNjk3IDE2LjEwNTQgMTAuMTE1MyAxNiA5Ljg1MDEgMTZDOS41ODQ4OCAxNiA5LjMzMDUzIDE2LjEwNTQgOS4xNDI5OSAxNi4yOTI5QzguOTU1NDUgMTYuNDgwNCA4Ljg1MDEgMTYuNzM0OCA4Ljg1MDEgMTdINC44NTAxVjE0LjgyQzUuNDI5MjUgMTQuNjA5OCA1LjkyOTY0IDE0LjIyNjQgNi4yODMyNiAxMy43MjE4QzYuNjM2ODcgMTMuMjE3MyA2LjgyNjU3IDEyLjYxNjEgNi44MjY1NyAxMkM2LjgyNjU3IDExLjM4MzkgNi42MzY4NyAxMC43ODI3IDYuMjgzMjYgMTAuMjc4MkM1LjkyOTY0IDkuNzczNjMgNS40MjkyNSA5LjM5MDIgNC44NTAxIDkuMThWN0g4Ljg1MDFDOC44NTAxIDcuMjY1MjIgOC45NTU0NSA3LjUxOTU3IDkuMTQyOTkgNy43MDcxMUM5LjMzMDUzIDcuODk0NjQgOS41ODQ4OCA4IDkuODUwMSA4QzEwLjExNTMgOCAxMC4zNjk3IDcuODk0NjQgMTAuNTU3MiA3LjcwNzExQzEwLjc0NDcgNy41MTk1NyAxMC44NTAxIDcuMjY1MjIgMTAuODUwMSA3SDIwLjg1MDFWOS4xOFpcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgRWFybmluZ0ljb24gPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMjAuMjUgM0gwLjc1VjE4SDIwLjI1VjNaTTE4Ljc1IDE2LjVIMi4yNVY0LjVIMTguNzVWMTYuNVpcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgICA8cGF0aCBkPVwiTTIxLjc1IDYuNzVWMTkuNUg0LjVWMjFIMjMuMjVWNi43NUgyMS43NVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xMC41IDE0LjE3OEMxMi4zNjEgMTQuMTc4IDEzLjg3NSAxMi41MzEgMTMuODc1IDEwLjUwNkMxMy44NzUgOC40ODEgMTIuMzYxIDYuODM0IDEwLjUgNi44MzRDOC42MzkgNi44MzQgNy4xMjUgOC40ODEgNy4xMjUgMTAuNTA2QzcuMTI1IDEyLjUzMSA4LjYzOSAxNC4xNzggMTAuNSAxNC4xNzhaTTEwLjUgOC4zMzVDMTEuNTM0IDguMzM1IDEyLjM3NSA5LjMwOSAxMi4zNzUgMTAuNTA3QzEyLjM3NSAxMS43MDUgMTEuNTM0IDEyLjY3OSAxMC41IDEyLjY3OUM5LjQ2NiAxMi42NzkgOC42MjUgMTEuNzA1IDguNjI1IDEwLjUwN0M4LjYyNSA5LjMwOSA5LjQ2NiA4LjMzNSAxMC41IDguMzM1WlwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAvPlxuICAgIDxwYXRoIGQ9XCJNMy43NSA2LjM3NUg1LjI1VjE0LjYyNUgzLjc1VjYuMzc1WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTUuNzUgNi4zNzVIMTcuMjVWMTQuNjI1SDE1Ljc1VjYuMzc1WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBjb25zdCBQYXlvdXRSZXF1ZXN0SWNvbiA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMTZcIlxuICAgIGhlaWdodD1cIjE2XCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICBmaWxsPVwibm9uZVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0yMC42MjUgMi42MjVIMy4zNzVDMi45NjAxNiAyLjYyNSAyLjYyNSAyLjk2MDE2IDIuNjI1IDMuMzc1VjIwLjYyNUMyLjYyNSAyMS4wMzk4IDIuOTYwMTYgMjEuMzc1IDMuMzc1IDIxLjM3NUgyMC42MjVDMjEuMDM5OCAyMS4zNzUgMjEuMzc1IDIxLjAzOTggMjEuMzc1IDIwLjYyNVYzLjM3NUMyMS4zNzUgMi45NjAxNiAyMS4wMzk4IDIuNjI1IDIwLjYyNSAyLjYyNVpNMTkuNjg3NSAxMy41SDEyLjM3NVYxMC41SDE5LjY4NzVWMTMuNVpNMTkuNjg3NSAxOS42ODc1SDQuMzEyNVY0LjMxMjVIMTkuNjg3NVY5SDExLjYyNUMxMS4yMTAyIDkgMTAuODc1IDkuMzM1MTYgMTAuODc1IDkuNzVWMTQuMjVDMTAuODc1IDE0LjY2NDggMTEuMjEwMiAxNSAxMS42MjUgMTVIMTkuNjg3NVYxOS42ODc1Wk0xMy41OTM4IDEyQzEzLjU5MzggMTIuMjQ4NiAxMy42OTI1IDEyLjQ4NzEgMTMuODY4MyAxMi42NjI5QzE0LjA0NDIgMTIuODM4NyAxNC4yODI2IDEyLjkzNzUgMTQuNTMxMiAxMi45Mzc1QzE0Ljc3OTkgMTIuOTM3NSAxNS4wMTgzIDEyLjgzODcgMTUuMTk0MiAxMi42NjI5QzE1LjM3IDEyLjQ4NzEgMTUuNDY4OCAxMi4yNDg2IDE1LjQ2ODggMTJDMTUuNDY4OCAxMS43NTE0IDE1LjM3IDExLjUxMjkgMTUuMTk0MiAxMS4zMzcxQzE1LjAxODMgMTEuMTYxMyAxNC43Nzk5IDExLjA2MjUgMTQuNTMxMiAxMS4wNjI1QzE0LjI4MjYgMTEuMDYyNSAxNC4wNDQyIDExLjE2MTMgMTMuODY4MyAxMS4zMzcxQzEzLjY5MjUgMTEuNTEyOSAxMy41OTM4IDExLjc1MTQgMTMuNTkzOCAxMlpcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgR3JvdXAgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB3aWR0aD1cIjE2XCJcbiAgICBoZWlnaHQ9XCIxNlwiXG4gICAgdmlld0JveD1cIjAgMCAyNSAyNFwiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMTcuNDU0MiAxMS4wNDhDMTguMDYzMiAxMC4wMTAxIDE4LjMyNjIgOC44MDUyOCAxOC4yMDUyIDcuNjA3OTdDMTguMDI2MiA1LjgyMzk3IDE3LjAzMDIgNC4yNDY5NyAxNS40MDIyIDMuMTY3OTdMMTQuMjk3MiA0LjgzMzk3QzE1LjQxNjIgNS41NzU5NyAxNi4wOTcyIDYuNjMyOTcgMTYuMjE1MiA3LjgwNzk3QzE2LjI2OTYgOC4zNTQwNyAxNi4yMDE2IDguOTA1NDMgMTYuMDE2MiA5LjQyMTk1QzE1LjgzMDcgOS45Mzg0NyAxNS41MzI1IDEwLjQwNzIgMTUuMTQzMiAxMC43OTRMMTMuOTUxMiAxMS45ODZMMTUuNTY5MiAxMi40NjFDMTkuODAxMiAxMy43MDEgMTkuODUwMiAxNy45NTcgMTkuODUwMiAxOEgyMS44NTAyQzIxLjg1MDIgMTYuMjExIDIwLjg5NDIgMTIuNzE1IDE3LjQ1NDIgMTEuMDQ4WlwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEwLjM1MDEgMTJDMTIuNTU2MSAxMiAxNC4zNTAxIDEwLjIwNiAxNC4zNTAxIDhDMTQuMzUwMSA1Ljc5NCAxMi41NTYxIDQgMTAuMzUwMSA0QzguMTQ0MSA0IDYuMzUwMSA1Ljc5NCA2LjM1MDEgOEM2LjM1MDEgMTAuMjA2IDguMTQ0MSAxMiAxMC4zNTAxIDEyWk0xMC4zNTAxIDZDMTEuNDUzMSA2IDEyLjM1MDEgNi44OTcgMTIuMzUwMSA4QzEyLjM1MDEgOS4xMDMgMTEuNDUzMSAxMCAxMC4zNTAxIDEwQzkuMjQ3MSAxMCA4LjM1MDEgOS4xMDMgOC4zNTAxIDhDOC4zNTAxIDYuODk3IDkuMjQ3MSA2IDEwLjM1MDEgNlpNMTEuODUwMSAxM0g4Ljg1MDFDNS41NDExIDEzIDIuODUwMSAxNS42OTEgMi44NTAxIDE5VjIwSDQuODUwMVYxOUM0Ljg1MDEgMTYuNzk0IDYuNjQ0MSAxNSA4Ljg1MDEgMTVIMTEuODUwMUMxNC4wNTYxIDE1IDE1Ljg1MDEgMTYuNzk0IDE1Ljg1MDEgMTlWMjBIMTcuODUwMVYxOUMxNy44NTAxIDE1LjY5MSAxNS4xNTkxIDEzIDExLjg1MDEgMTNaXCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAnLi9sb2FkZXIubGVzcyc7XG5cbmNvbnN0IExvYWRlciA9ICh7IHNwaW5uaW5nID0gZmFsc2UsIGZ1bGxTY3JlZW4gPSBmYWxzZSB9OiBhbnkpID0+IChcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbG9hZGVyJywge1xuICAgICAgaGlkZGVuOiAhc3Bpbm5pbmcsXG4gICAgICBmdWxsU2NyZWVuXG4gICAgfSl9XG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndhcnBwZXJcIj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCIgLz4gKi99XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PGltZyBzcmM9XCIvbG9hZGluZy1pY28uZ2lmXCIgd2lkdGg9XCI2NXB4XCIgYWx0PVwiXCIgLz48L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgJy4vYmFubmVyLmxlc3MnO1xuaW1wb3J0IHsgSUJhbm5lciB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGJhbm5lcnM6IElCYW5uZXJbXTtcbiAgc3R5bGVJbWFnZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgY2xhc3NuYW1lcz86IHN0cmluZztcbn1cbmNvbnN0IHJlbmRlckJhbm5lciA9IChiYW5uZXI6IElCYW5uZXIsIHN0eWxlSW1hZ2U6IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHR5cGUsIGhyZWYsIF9pZCwgcGhvdG8sIGNvbnRlbnRIVE1MXG4gIH0gPSBiYW5uZXI7XG4gIGlmICh0eXBlID09PSAnaHRtbCcgJiYgY29udGVudEhUTUwpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG4gICAgcmV0dXJuIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb250ZW50SFRNTCB9fSBzdHlsZT17c3R5bGVJbWFnZSB8fCB7fX0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e2hyZWYgfHwgJyMnfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIga2V5PXtfaWR9PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e3Bob3RvICYmIHBob3RvLnVybH1cbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgc3R5bGU9e3N0eWxlSW1hZ2UgfHwge319XG4gICAgICAvPlxuICAgIDwvYT5cbiAgKTtcbn07XG5jb25zdCBCYW5uZXIgPSAoeyBiYW5uZXJzLCBzdHlsZUltYWdlLCBjbGFzc25hbWVzIH06IElQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIHtiYW5uZXJzICYmIGJhbm5lcnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXkgYXJyb3dzIGRvdHM9e2ZhbHNlfSBlZmZlY3Q9XCJmYWRlXCIgY2xhc3NOYW1lPXtjbGFzc25hbWVzfT5cbiAgICAgICAge2Jhbm5lcnMubWFwKChpdGVtKSA9PiAocmVuZGVyQmFubmVyKGl0ZW0sIHN0eWxlSW1hZ2UpXG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICApfVxuICA8L2Rpdj5cbik7XG5cbkJhbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzbmFtZXM6ICcnXG59O1xuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIiwiaW1wb3J0IHsgUGFnZUhlYWRlciwgRGl2aWRlciB9IGZyb20gJ2FudGQnO1xuXG5pbnRlcmZhY2UgUCB7XG4gIHRpdGxlOiBhbnk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHNcbiAgZXh0cmE/OiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlLCBleHRyYSB9IDogUCkgPT4gKFxuICA8PlxuICAgIDxQYWdlSGVhZGVyIHRpdGxlPXt0aXRsZX0gZXh0cmE9e2V4dHJhfSAvPlxuICAgIDxEaXZpZGVyIC8+XG4gIDwvPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJUGVyZm9ybWVyLCBHRU5ERVIsIElCYW5uZXIgfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtcbiAgQ2FyZCwgU3BhY2UsIFJvdywgQ29sLCBQYWdpbmF0aW9uXG59IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtcbiAgTWFsZVNpZ25JY29uLFxuICBGZW1hbGVTaWduSWNvbixcbiAgVHJhbnNnZW5kZXJJY29uXG59IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9iYXNlL2ljb25zJztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBnZW5lcmF0ZVV1aWQgfSBmcm9tICdzcmMvbGliJztcbmltcG9ydCB7XG4gIEhlYXJ0RmlsbGVkLFxuICBIZWFydE91dGxpbmVkLFxuICBFeWVPdXRsaW5lZCxcbiAgTG9ja091dGxpbmVkXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCAnLi9pbmRleC5sZXNzJztcbmltcG9ydCB7IGNodW5rIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uL2xheW91dC9iYW5uZXInO1xuaW1wb3J0IExvYWRlciBmcm9tICdAY29tcG9uZW50cy9jb21tb24vYmFzZS9sb2FkZXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGxvZ2dlZEluPzogYm9vbGVhbjtcbiAgc2V0RmlsdGVyPzogRnVuY3Rpb247XG4gIGxpbWl0PzogbnVtYmVyO1xuICBvZmZzZXQ/OiBudW1iZXI7XG4gIGRhdGE6IElQZXJmb3JtZXJbXTtcbiAgdG90YWw/OiBudW1iZXI7XG4gIHN1Y2Nlc3M/OiBib29sZWFuO1xuICBiYW5uZXJzPzogUmVjb3JkPHN0cmluZywgSUJhbm5lcltdPjtcbiAgc2VhcmNoaW5nPzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgb25MaWtlPzogRnVuY3Rpb247XG4gIGlzUGFnZT86IGJvb2xlYW47XG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsPzogc3RyaW5nO1xuICByZW5kZXI/OiAocGVyZm9ybWVyOiBJUGVyZm9ybWVyKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IHJlbmRlclRpdGxlID0gKGdlbmRlcjogR0VOREVSLCBuYW1lOiBzdHJpbmcpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwLXRpdGxlXCI+XG4gICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX0+e25hbWV9PC9zcGFuPlxuICAgIHtnZW5kZXIgPT09ICdtYWxlJyA/IChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFudGljb25cIj5cbiAgICAgICAgPE1hbGVTaWduSWNvbiAvPlxuICAgICAgPC9zcGFuPlxuICAgICkgOiBnZW5kZXIgPT09ICdmZW1hbGUnID8gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW50aWNvblwiPlxuICAgICAgICA8RmVtYWxlU2lnbkljb24gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICApIDogKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW50aWNvblwiPlxuICAgICAgICA8VHJhbnNnZW5kZXJJY29uIC8+XG4gICAgICA8L3NwYW4+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCByZW5kZXJUYWdzID0gKHRhZ3M6IHN0cmluZ1tdKSA9PiAoXG4gIDxTcGFjZSBjbGFzc05hbWU9XCJ0YWdzXCIgd3JhcCBzaXplPXtbNSwgMl19PlxuICAgIHt0YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICA8TGlua1xuICAgICAgICBocmVmPXt7IHBhdGhuYW1lOiAnL3RhZycsIHF1ZXJ5OiB7IHRhZ3M6IHRhZyB9IH19XG4gICAgICAgIGtleT17dGFnfVxuICAgICAgICBhcz17YC90YWcvJHt0YWd9YH1cbiAgICAgID5cbiAgICAgICAgPGE+XG4gICAgICAgICAgI1xuICAgICAgICAgIHt0YWd9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApKX1cbiAgPC9TcGFjZT5cbik7XG5cbmludGVyZmFjZSBJR3JpZENhcmQge1xuICBwZXJmb3JtZXI6IElQZXJmb3JtZXI7XG4gIGxvZ2dlZEluOiBib29sZWFuO1xuICBvbkxpa2U6IGFueTtcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyQXZhdGFyVXJsOiBzdHJpbmc7XG59XG5leHBvcnQgY29uc3QgR3JpZENhcmQgPSAoe1xuICBwZXJmb3JtZXIsXG4gIGxvZ2dlZEluLFxuICBvbkxpa2UsXG4gIGNsYXNzTmFtZSxcbiAgcGxhY2Vob2xkZXJBdmF0YXJVcmxcbn06IElHcmlkQ2FyZCkgPT4ge1xuICBjb25zdCB7IGlzT25saW5lLCBzdHJlYW1pbmdTdGF0dXMgfSA9IHBlcmZvcm1lcjtcbiAgY29uc3Qgc3RhdHVzQ2xhc3NOYW1lcyA9IFsncC1zdGF0dXMnXTtcbiAgbGV0IHN0YXR1cyA9ICdvZmZsaW5lJztcbiAgaWYgKGlzT25saW5lKSB7XG4gICAgc3dpdGNoIChzdHJlYW1pbmdTdGF0dXMpIHtcbiAgICAgIGNhc2UgJ3ByaXZhdGUnOlxuICAgICAgICBzdGF0dXNDbGFzc05hbWVzLnB1c2goJ3ByaXZhdGUnKTtcbiAgICAgICAgc3RhdHVzID0gJ3ByaXZhdGUgY2hhdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZ3JvdXAnOlxuICAgICAgICBzdGF0dXNDbGFzc05hbWVzLnB1c2goJ2dyb3VwJyk7XG4gICAgICAgIHN0YXR1cyA9ICdncm91cCBjaGF0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwdWJsaWMnOlxuICAgICAgICBzdGF0dXMgPSAnbGl2ZSc7XG4gICAgICAgIHN0YXR1c0NsYXNzTmFtZXMucHVzaCgnb25saW5lJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3RhdHVzID0gJ29ubGluZSc7XG4gICAgICAgIHN0YXR1c0NsYXNzTmFtZXMucHVzaCgnb25saW5lJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdGF0dXNDbGFzc05hbWVzLnB1c2goJ29mZmxpbmUnKTtcbiAgfVxuICBjb25zdCBkZWZhdWx0UGxhY2Vob2xkZXJBdmF0YXJVcmwgPSBwbGFjZWhvbGRlckF2YXRhclVybCB8fCAnL2RlZmF1bHQtdXNlci1pY29uLnBuZyc7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZC5HcmlkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e3BlcmZvcm1lci5faWR9IGhvdmVyYWJsZT17ZmFsc2V9PlxuICAgICAge3BlcmZvcm1lci5pc0Jsb2NrZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrZWQtdGh1bWJcIj5cbiAgICAgICAgICA8TG9ja091dGxpbmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9e3tcbiAgICAgICAgICBwYXRobmFtZTogJy9zdHJlYW0nLFxuICAgICAgICAgIHF1ZXJ5OiB7IHBlcmZvcm1lcjogSlNPTi5zdHJpbmdpZnkocGVyZm9ybWVyKSB9XG4gICAgICAgIH19XG4gICAgICAgIGFzPXtgL3Byb2ZpbGUvJHtwZXJmb3JtZXIudXNlcm5hbWV9YH1cbiAgICAgID5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJmb3JtZXItYXZhdGFyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlLXBlcmZvcm1lclwiXG4gICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgdHlwZW9mIHBlcmZvcm1lci5hdmF0YXIgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgJiYgcGVyZm9ybWVyLmF2YXRhci5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICA/IHBlcmZvcm1lci5hdmF0YXJcbiAgICAgICAgICAgICAgICAgIDogZGVmYXVsdFBsYWNlaG9sZGVyQXZhdGFyVXJsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0YXR1c0NsYXNzTmFtZXMuam9pbignICcpfT57c3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgICAgIHtyZW5kZXJUaXRsZShwZXJmb3JtZXIuZ2VuZGVyLCBwZXJmb3JtZXIudXNlcm5hbWUpfVxuICAgICAgICAgICAge3BlcmZvcm1lcj8uc3RhdHM/LnZpZXdzID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC12aWV3ZXJcIj5cbiAgICAgICAgICAgICAgICA8RXllT3V0bGluZWQgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX0gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57cGVyZm9ybWVyLnN0YXRzLnZpZXdzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3R0b21cIj5cbiAgICAgICAgPFJvdyBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8ZGl2PntwZXJmb3JtZXIudGFncyAmJiByZW5kZXJUYWdzKHBlcmZvcm1lci50YWdzKX08L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlblxuICAgICAgICAgICAgICBoaWRkZW49eyFsb2dnZWRJbn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1mYXZvcml0ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTGlrZShwZXJmb3JtZXIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGVyZm9ybWVyLmlzRmF2b3JpdGUgPyAoXG4gICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIGNsYXNzTmFtZT1cImljb25cIiAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIGNsYXNzTmFtZT1cImljb25cIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LW1lXCI+e3BlcmZvcm1lcj8uYWJvdXRNZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZC5HcmlkPlxuICApO1xufTtcblxuY29uc3QgUGVyZm9ybWVyR3JpZCA9ICh7XG4gIGRhdGEsXG4gIHNlYXJjaGluZyxcbiAgc3VjY2VzcyxcbiAgdGl0bGUsXG4gIG9uTGlrZSxcbiAgbG9nZ2VkSW4sXG4gIGlzUGFnZSxcbiAgb2Zmc2V0LFxuICBsaW1pdCxcbiAgdG90YWwsXG4gIHNldEZpbHRlcixcbiAgcGxhY2Vob2xkZXJBdmF0YXJVcmwsXG4gIGJhbm5lcnMsXG4gIHJlbmRlclxufTogSVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdG9wQmFubmVycywgcmlnaHRCYW5uZXJzLCBib3R0b21CYW5uZXJzIH0gPSBiYW5uZXJzO1xuICBjb25zdCBSb3dHcmlkID0gKHsgZGF0YVNvdXJjZSB9OiB7IGRhdGFTb3VyY2U6IElQZXJmb3JtZXJbXSB9KSA9PiAoXG4gICAgPFJvdyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAge2RhdGFTb3VyY2VcbiAgICAgICAgJiYgZGF0YVNvdXJjZS5sZW5ndGggPiAwXG4gICAgICAgICYmIGRhdGFTb3VyY2UubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICA8R3JpZENhcmRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3hcIlxuICAgICAgICAgICAga2V5PXtwZXJmb3JtZXIuX2lkfVxuICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICBvbkxpa2U9e29uTGlrZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICA8L1Jvdz5cbiAgKTtcblxuICBjb25zdCByZW5kZXJHcmlkID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBkYXRhO1xuICAgIGlmIChsZW5ndGggPD0gMTIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICB7cmlnaHRCYW5uZXJzICYmIHJpZ2h0QmFubmVycy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPENvbCBsZz17MTZ9IG1kPXsxNn0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAge2RhdGFcbiAgICAgICAgICAgICAgICAgICAgJiYgZGF0YS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGEubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3ggcGVyZm9ybWVyLWJveC00LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwZXJmb3JtZXIuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxpa2U9eygpID0+IG9uTGlrZShwZXJmb3JtZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBsZz17OH0gbWQ9ezh9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcz1cInJpZ2h0LWJhbm5lcnNcIlxuICAgICAgICAgICAgICAgICAgYmFubmVycz17cmlnaHRCYW5uZXJzfVxuICAgICAgICAgICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAmJiBkYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICYmIGRhdGEubWFwKChwZXJmb3JtZXI6IElQZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJBdmF0YXJVcmw9e3BsYWNlaG9sZGVyQXZhdGFyVXJsfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ib3hcIlxuICAgICAgICAgICAgICAgIGtleT17cGVyZm9ybWVyLl9pZH1cbiAgICAgICAgICAgICAgICBwZXJmb3JtZXI9e3BlcmZvcm1lcn1cbiAgICAgICAgICAgICAgICBsb2dnZWRJbj17bG9nZ2VkSW59XG4gICAgICAgICAgICAgICAgb25MaWtlPXsoKSA9PiBvbkxpa2UocGVyZm9ybWVyKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobGVuZ3RoID4gMTIgJiYgbGVuZ3RoIDw9IDI0KSB7XG4gICAgICBjb25zdCBkYXRhQ2h1bmsgPSBjaHVuayhkYXRhLCAxMik7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtyaWdodEJhbm5lcnMgJiYgcmlnaHRCYW5uZXJzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgPENvbCBsZz17MTZ9IG1kPXsxNn0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhQ2h1bmtbMF1cbiAgICAgICAgICAgICAgICAgICAgICAmJiBkYXRhQ2h1bmtbMF0ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICYmIGRhdGFDaHVua1swXS5tYXAoKHBlcmZvcm1lcjogSVBlcmZvcm1lcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQXZhdGFyVXJsPXtwbGFjZWhvbGRlckF2YXRhclVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWJveCBwZXJmb3JtZXItYm94LTQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGVyZm9ybWVyLl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWVyPXtwZXJmb3JtZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlZEluPXtsb2dnZWRJbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25MaWtlPXsoKSA9PiBvbkxpa2UocGVyZm9ybWVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIGxnPXs4fSBtZD17OH0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICAgIHtyaWdodEJhbm5lcnMgJiYgcmlnaHRCYW5uZXJzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcz1cInJpZ2h0LWJhbm5lcnNcIlxuICAgICAgICAgICAgICAgICAgICAgIGJhbm5lcnM9e3JpZ2h0QmFubmVyc31cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZUltYWdlPXt7IHBhZGRpbmc6ICcxMHB4Jywgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDxSb3dHcmlkIGRhdGFTb3VyY2U9e2RhdGFDaHVua1sxXX0gLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGxlbmd0aCA+IDI0ICYmIGxlbmd0aCA8PSAzNikge1xuICAgICAgY29uc3QgZGF0YUNodW5rID0gY2h1bmsoZGF0YSwgMTIpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMF19IC8+XG4gICAgICAgICAge3JpZ2h0QmFubmVycyAmJiByaWdodEJhbm5lcnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgPENvbCB4bD17MTZ9IGxnPXsxOH0gbWQ9ezE4fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICB7ZGF0YUNodW5rWzFdXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGFDaHVua1sxXS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGFDaHVua1sxXS5tYXAoKHBlcmZvcm1lcjogSVBlcmZvcm1lcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJBdmF0YXJVcmw9e3BsYWNlaG9sZGVyQXZhdGFyVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWJveCBwZXJmb3JtZXItYm94LTQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lci5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJmb3JtZXI9e3BlcmZvcm1lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlZEluPXtsb2dnZWRJbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTGlrZT17KCkgPT4gb25MaWtlKHBlcmZvcm1lcil9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhsPXs4fSBsZz17Nn0gbWQ9ezZ9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcz1cInJpZ2h0LWJhbm5lcnNcIlxuICAgICAgICAgICAgICAgICAgYmFubmVycz17cmlnaHRCYW5uZXJzfVxuICAgICAgICAgICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMV19IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMl19IC8+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGxlbmd0aCA+IDM2KSB7XG4gICAgICBjb25zdCBkYXRhQ2h1bmsgPSBjaHVuayhkYXRhLCAxMik7XG4gICAgICBjb25zdCBsYXN0RGF0YUNodW5rID0gZGF0YUNodW5rLnNsaWNlKDMpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMF19IC8+XG4gICAgICAgICAge3JpZ2h0QmFubmVycyAmJiByaWdodEJhbm5lcnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgPENvbCB4bD17MTZ9IGxnPXsxOH0gbWQ9ezE4fSB4cz17MjR9PlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICB7ZGF0YUNodW5rWzFdXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGFDaHVua1sxXS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGFDaHVua1sxXS5tYXAoKHBlcmZvcm1lcjogSVBlcmZvcm1lcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJBdmF0YXJVcmw9e3BsYWNlaG9sZGVyQXZhdGFyVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyZm9ybWVyLWJveCBwZXJmb3JtZXItYm94LTQtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BlcmZvcm1lci5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJmb3JtZXI9e3BlcmZvcm1lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlZEluPXtsb2dnZWRJbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTGlrZT17KCkgPT4gb25MaWtlKHBlcmZvcm1lcil9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHhsPXs4fSBsZz17Nn0gbWQ9ezZ9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lcz1cInJpZ2h0LWJhbm5lcnNcIlxuICAgICAgICAgICAgICAgICAgYmFubmVycz17cmlnaHRCYW5uZXJzfVxuICAgICAgICAgICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMV19IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Um93R3JpZCBkYXRhU291cmNlPXtkYXRhQ2h1bmtbMl19IC8+XG4gICAgICAgICAge2xhc3REYXRhQ2h1bmsubGVuZ3RoID4gMFxuICAgICAgICAgICAgJiYgbGFzdERhdGFDaHVuay5tYXAoKHYpID0+IChcbiAgICAgICAgICAgICAgPFJvd0dyaWQga2V5PXtnZW5lcmF0ZVV1aWQoKX0gZGF0YVNvdXJjZT17dn0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8PjwvPjtcbiAgfTtcblxuICBjb25zdCBhY3Rpb25zID0gc2V0RmlsdGVyICYmIHRvdGFsID4gMFxuICAgID8gW1xuICAgICAgdG90YWwgPiBsaW1pdCAmJiAoXG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgZGlzYWJsZWQ9e3NlYXJjaGluZ31cbiAgICAgICAgICBjdXJyZW50PXtNYXRoLnJvdW5kKG9mZnNldCAvIGxpbWl0KSArIDF9XG4gICAgICAgICAgcGFnZVNpemU9e2xpbWl0fVxuICAgICAgICAgIHRvdGFsPXt0b3RhbH1cbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsocGFnZSkgPT4gc2V0RmlsdGVyKCdvZmZzZXQnLCAocGFnZSAtIDEpICogbGltaXQpfVxuICAgICAgICAgIHNob3dTaXplQ2hhbmdlcj17ZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgXVxuICAgIDogW107XG5cbiAgaWYgKHJlbmRlcikge1xuICAgIC8qKlxuICAgICAqIHBsYWNlaG9sZGVyQXZhdGFyVXJsIHByb3BzXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkXG4gICAgICAgIGNsYXNzTmFtZT1cInBlcmZvcm1lci1ncmlkXCJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBib3JkZXJlZD17ZmFsc2V9XG4gICAgICAgIGhvdmVyYWJsZT17ZmFsc2V9XG4gICAgICAgIGJvZHlTdHlsZT17eyBwYWRkaW5nOiAnMCcgfX1cbiAgICAgICAgYWN0aW9ucz17YWN0aW9uc31cbiAgICAgID5cbiAgICAgICAgPExvYWRlciBzcGlubmluZz17c2VhcmNoaW5nfSAvPlxuICAgICAgICB7ZGF0YS5sZW5ndGggPiAwICYmIGRhdGEubWFwKChwZXJmb3JtZXIpID0+IHJlbmRlcihwZXJmb3JtZXIpKX1cbiAgICAgIDwvQ2FyZD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzUGFnZSAmJiB0b3BCYW5uZXJzPy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEJhbm5lclxuICAgICAgICAgIGJhbm5lcnM9e3RvcEJhbm5lcnN9XG4gICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8Q2FyZFxuICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItZ3JpZFwiXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICBob3ZlcmFibGU9e2ZhbHNlfVxuICAgICAgICBib2R5U3R5bGU9e3sgcGFkZGluZzogJzAnIH19XG4gICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XG4gICAgICA+XG4gICAgICAgIDxMb2FkZXIgc3Bpbm5pbmc9e3NlYXJjaGluZ30gLz5cbiAgICAgICAge3N1Y2Nlc3NcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgICAmJiAodG90YWwgPiAwID8gKFxuICAgICAgICAgICAgaXNQYWdlID8gKFxuICAgICAgICAgICAgICByZW5kZXJHcmlkKClcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIGRhdGEubWFwKChwZXJmb3JtZXIpID0+IChcbiAgICAgICAgICAgICAgICA8R3JpZENhcmRcbiAgICAgICAgICAgICAgICAgIGtleT17cGVyZm9ybWVyPy5faWR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckF2YXRhclVybD17cGxhY2Vob2xkZXJBdmF0YXJVcmx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJmb3JtZXItYm94XCJcbiAgICAgICAgICAgICAgICAgIHBlcmZvcm1lcj17cGVyZm9ybWVyfVxuICAgICAgICAgICAgICAgICAgbG9nZ2VkSW49e2xvZ2dlZElufVxuICAgICAgICAgICAgICAgICAgb25MaWtlPXsocDogSVBlcmZvcm1lcikgPT4gb25MaWtlKHApfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW50LWNhcmQtaGVhZFwiPk5vIG1vZGVsIGZvdW5kLjwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgPC9DYXJkPlxuICAgICAge2lzUGFnZSAmJiBib3R0b21CYW5uZXJzPy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEJhbm5lclxuICAgICAgICAgIGJhbm5lcnM9e2JvdHRvbUJhbm5lcnN9XG4gICAgICAgICAgc3R5bGVJbWFnZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuUGVyZm9ybWVyR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvZ2dlZEluOiBmYWxzZSxcbiAgc2V0RmlsdGVyOiBudWxsLFxuICBsaW1pdDogMCxcbiAgb2Zmc2V0OiAwLFxuICB0b3RhbDogMCxcbiAgc3VjY2VzczogZmFsc2UsXG4gIHNlYXJjaGluZzogZmFsc2UsXG4gIHRpdGxlOiAnJyxcbiAgb25MaWtlOiBudWxsLFxuICByZW5kZXI6IG51bGwsXG4gIGlzUGFnZTogZmFsc2UsXG4gIGJhbm5lcnM6IHt9LFxuICBwbGFjZWhvbGRlckF2YXRhclVybDogJy9uby1hdmF0YXIucG5nJ1xufTtcblxuY29uc3QgYmFubmVyU2VsZWN0ZXIgPSAoc3RhdGUpID0+IHN0YXRlLmJhbm5lci5saXN0QmFubmVycy5kYXRhO1xuY29uc3QgZmlsdGVyQmFubmVyID0gY3JlYXRlU2VsZWN0b3IoYmFubmVyU2VsZWN0ZXIsIChiYW5uZXJzKSA9PiB7XG4gIGlmICghYmFubmVycy5sZW5ndGgpIHJldHVybiB7fTtcblxuICByZXR1cm4ge1xuICAgIHRvcEJhbm5lcnM6IGJhbm5lcnMuZmlsdGVyKChiKSA9PiBiLnBvc2l0aW9uID09PSAndG9wJyksXG4gICAgcmlnaHRCYW5uZXJzOiBiYW5uZXJzLmZpbHRlcigoYikgPT4gYi5wb3NpdGlvbiA9PT0gJ3JpZ2h0JyksXG4gICAgYm90dG9tQmFubmVyczogYmFubmVycy5maWx0ZXIoKGIpID0+IGIucG9zaXRpb24gPT09ICdib3R0b20nKVxuICB9O1xufSk7XG5jb25zdCBtYXBTdGF0ZXMgPSAoc3RhdGU6IGFueSkgPT4gKHtcbiAgcGxhY2Vob2xkZXJBdmF0YXJVcmw6IHN0YXRlLnVpLnBsYWNlaG9sZGVyQXZhdGFyVXJsLFxuICBiYW5uZXJzOiBmaWx0ZXJCYW5uZXIoc3RhdGUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZXMpKFBlcmZvcm1lckdyaWQpO1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlLCBmb3JtYXQgPSAnREQvTU0vWVlZWSBISDptbTpzcycpIHtcbiAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlckR1cmF0aW9uKGR1cmF0aW9uOiBudW1iZXIsIGZvcm1hdCA9ICdISDptbScpIHtcbiAgcmV0dXJuIG1vbWVudFxuICAgIC51dGMobW9tZW50LmR1cmF0aW9uKGR1cmF0aW9uLCAnbWlsbGlzZWNvbmRzJykuYXNNaWxsaXNlY29uZHMoKSlcbiAgICAuZm9ybWF0KGZvcm1hdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFnZShkYXRlOiBzdHJpbmcsIGZvcm1hdCA9ICdNTU1NIERELCBZWVlZJykge1xuICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChmb3JtYXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICByZXR1cm4gbW9tZW50KCkuZGlmZihtb21lbnQoZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyksICd5ZWFycycpLnRvU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREdXJhdGlvbihzOiBudW1iZXIpIHtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHMgLyAzNjAwKTtcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHMgLSBob3VycyAqIDM2MDApIC8gNjApO1xuICBjb25zdCBzZWNvbmRzID0gcyAtIGhvdXJzICogMzYwMCAtIG1pbnV0ZXMgKiA2MDtcbiAgcmV0dXJuIGAke2hvdXJzIDwgMTAgPyAnMCcgOiAnJ30ke2hvdXJzfToke1xuICAgIG1pbnV0ZXMgPCAxMCA/ICcwJyA6ICcnXG4gIH0ke21pbnV0ZXN9OiR7c2Vjb25kcyA8IDEwID8gJzAnIDogJyd9JHtzZWNvbmRzfWA7XG59XG4iLCJpbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICdAc2VydmljZXMvY29uZmlnJztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFJjRmlsZSB9IGZyb20gJ2FudGQvbGliL3VwbG9hZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiZWZvcmVBdmF0YXJVcGxvYWQoZmlsZTogUmNGaWxlKTogYm9vbGVhbiB7XG4gIGNvbnN0IGV4dCA9IGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICBjb25zdCBpc0ltYWdlQWNjZXB0ID0gY29uZmlnLk5FWFRfUFVCTElDX0lNQUdFX0FDQ1BFVFxuICAgIC5zcGxpdCgnLCcpXG4gICAgLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBpdGVtLnRyaW0oKSlcbiAgICAuaW5kZXhPZihgLiR7ZXh0fWApO1xuICBpZiAoaXNJbWFnZUFjY2VwdCA9PT0gLTEpIHtcbiAgICBtZXNzYWdlLmVycm9yKGBZb3UgY2FuIG9ubHkgdXBsb2FkICR7Y29uZmlnLk5FWFRfUFVCTElDX0lNQUdFX0FDQ1BFVH0gZmlsZSFgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IChjb25maWcuTkVYVF9QVUJMSUNfTUFYSU1VTV9TSVpFX1VQTE9BRF9BVkFUQVIgfHwgMik7XG4gIGlmICghaXNMdDJNKSB7XG4gICAgbWVzc2FnZS5lcnJvcihcbiAgICAgIGBJbWFnZSBtdXN0IHNtYWxsZXIgdGhhbiAke2NvbmZpZy5ORVhUX1BVQkxJQ19NQVhJTVVNX1NJWkVfVVBMT0FEX0FWQVRBUiB8fCAyfU1CIWBcbiAgICApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9pbnRlcm5ldCc7XG5leHBvcnQgKiBmcm9tICcuL3JlZHV4JztcbmV4cG9ydCAqIGZyb20gJy4vc3RyaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9sYXlvdXQnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmVhbSc7XG4iLCJjb25zdCBJTlRFUk5FVF9DSEVDS19VUkwgPSAnaHR0cHM6Ly9nb29nbGUuY29tJztcblxuZXhwb3J0IGNvbnN0IGlzSGFzSW50ZXJuZXRDb25uZWN0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKElOVEVSTkVUX0NIRUNLX1VSTCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZSwgbm8tc3RvcmUsIG11c3QtcmV2YWxpZGF0ZScsXG4gICAgICAgIFByYWdtYTogJ25vLWNhY2hlJyxcbiAgICAgICAgRXhwaXJlczogMFxuICAgICAgfSBhcyBhbnlcbiAgICB9KTtcbiAgICBpZiAoXG4gICAgICByZXMuc3RhdHVzID09PSA0MDRcbiAgICAgIHx8IHJlcy5zdGF0dXMgPT09IDQwMVxuICAgICAgfHwgcmVzLnN0YXR1cyA9PT0gNDAzXG4gICAgICB8fCByZXMuc3RhdHVzID09PSA1MDBcbiAgICAgIHx8IChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDw9IDMwMClcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhleGNlcHRpb24pO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJleHBvcnQgY29uc3QgZm9ybUl0ZW1MYXlvdXQgPSB7XG4gIGxhYmVsQ29sOiB7XG4gICAgeHM6IHtcbiAgICAgIHNwYW46IDI0XG4gICAgfSxcbiAgICBzbToge1xuICAgICAgc3BhbjogMTJcbiAgICB9XG4gIH0sXG4gIHdyYXBwZXJDb2w6IHtcbiAgICB4czoge1xuICAgICAgc3BhbjogMjRcbiAgICB9LFxuICAgIHNtOiB7XG4gICAgICBzcGFuOiAxMlxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRhaWxGb3JtSXRlbUxheW91dCA9IHtcbiAgd3JhcHBlckNvbDoge1xuICAgIHhzOiB7XG4gICAgICBzcGFuOiAyNCxcbiAgICAgIG9mZnNldDogMFxuICAgIH0sXG4gICAgc206IHtcbiAgICAgIHNwYW46IDE2LFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbG9yID0ge1xuICBwcmltYXJ5Q29sb3I6ICcjMGNiOGI2JyxcbiAgc3VjY2Vzc0NvbG9yOiAnIzJmYjUyZCcsXG4gIHdoaXRlQ29sb3I6ICcjZmZmZmZmJ1xufTtcblxuZXhwb3J0IHR5cGUgQnJlYWtwb2ludCA9ICd4eGwnIHwgJ3hsJyB8ICdsZycgfCAnbWQnIHwgJ3NtJyB8ICd4cyc7XG5leHBvcnQgdHlwZSBCcmVha3BvaW50TWFwID0gUGFydGlhbDxSZWNvcmQ8QnJlYWtwb2ludCwgc3RyaW5nPj47XG4iLCJleHBvcnQgY29uc3QgdmFsaWRhdGVNZXNzYWdlcyA9IHtcbiAgcmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkIScsXG4gIHR5cGVzOiB7XG4gICAgZW1haWw6ICdOb3QgYSB2YWxpZGF0ZSBlbWFpbCEnLFxuICAgIG51bWJlcjogJ05vdCBhIHZhbGlkYXRlIG51bWJlciEnXG4gIH0sXG4gIG51bWJlcjoge1xuICAgIHJhbmdlOiAnTXVzdCBiZSBiZXR3ZWVuIG1pbiBhbmQgbWF4J1xuICB9XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7XG4gIHJlZHVjZSwgaXNBcnJheSwgaXNFbXB0eSwgZmxhdHRlblxufSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgeyB0YWtlTGF0ZXN0LCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBjcmVhdGVBY3Rpb24gYXMgUmVkdXhDcmVhdGVBY3Rpb24sXG4gIGhhbmRsZUFjdGlvbnMgYXMgaGFuZGxlUmVkdXhBY3Rpb25zLFxuICBBY3Rpb25cbn0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIEFjdGlvbkZ1bmN0aW9uMTxUMSwgUj4gPSAodDE/OiBUMSkgPT4gUjtcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPlxuICBleHRlbmRzIEFjdGlvbkZ1bmN0aW9uMTxQYXlsb2FkLCBBY3Rpb248UGF5bG9hZD4+IHtcbiAgaXM6ICh0eXBlOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbjxQYXlsb2FkID0gYW55Pih0eXBlOiBzdHJpbmcpOiBBY3Rpb25GdW5jdGlvbjxQYXlsb2FkPiB7XG4gIGNvbnN0IGFjdGlvbiA9IFJlZHV4Q3JlYXRlQWN0aW9uPFBheWxvYWQ+KHR5cGUpIGFzIEFjdGlvbkZ1bmN0aW9uPFBheWxvYWQ+O1xuICBhY3Rpb24uaXMgPSAoYVR5cGU6IHN0cmluZykgPT4gYWN0aW9uLnRvU3RyaW5nKCkgPT09IGFUeXBlO1xuICByZXR1cm4gYWN0aW9uO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jQWN0aW9uKGFjdGlvbjogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiBhbnkge1xuICByZXR1cm4ge1xuICAgIFthY3Rpb25dOiBjcmVhdGVBY3Rpb24odHlwZSksXG4gICAgW2Ake2FjdGlvbn1TdWNjZXNzYF06IGNyZWF0ZUFjdGlvbihgJHt0eXBlfV9TVUNDRVNTYCksXG4gICAgW2Ake2FjdGlvbn1GYWlsYF06IGNyZWF0ZUFjdGlvbihgJHt0eXBlfV9GQUlMYClcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNBY3Rpb25zPFxuICBBY3Rpb25EYXRhID0gYW55LFxuICBTdWNjZXNzRGF0YSA9IGFueSxcbiAgRXJyb3JEYXRhID0gRXJyb3Jcbj4oXG4gIHR5cGU6IHN0cmluZ1xuKTogW1xuICBBY3Rpb25GdW5jdGlvbjxBY3Rpb25EYXRhPixcbiAgQWN0aW9uRnVuY3Rpb248U3VjY2Vzc0RhdGE+LFxuICBBY3Rpb25GdW5jdGlvbjxFcnJvckRhdGE+XG5dIHtcbiAgcmV0dXJuIFtcbiAgICBjcmVhdGVBY3Rpb248QWN0aW9uRGF0YT4odHlwZSksXG4gICAgY3JlYXRlQWN0aW9uPFN1Y2Nlc3NEYXRhPihgJHt0eXBlfV9TVUNDRVNTYCksXG4gICAgY3JlYXRlQWN0aW9uPEVycm9yRGF0YT4oYCR7dHlwZX1fRkFJTGApXG4gIF07XG59XG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5mdW5jdGlvbiBoYW5kbGVBY3Rpb25zKGFjdGlvbnM6IGFueSwgaW5pdGlhbFN0YXRlOiBhbnkpIHtcbiAgcmV0dXJuIGhhbmRsZVJlZHV4QWN0aW9ucyhcbiAgICByZWR1Y2UoXG4gICAgICBhY3Rpb25zLFxuICAgICAgKHJlZHVjZXI6IGFueSwgaGFuZGxlciwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHJlZHVjZXJbYWN0aW9uXSA9IChzdGF0ZTogYW55LCBhY3Q6IGFueSkgPT4gaGFuZGxlcihzdGF0ZS5zZXQoJ2FjdGlvbicsIGFjdGlvbiksIGFjdCk7XG4gICAgICAgIHJldHVybiByZWR1Y2VyO1xuICAgICAgfSxcbiAgICAgIHt9XG4gICAgKSxcbiAgICBpbml0aWFsU3RhdGVcbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVkdWNlcnMoXG4gIHN0YXRlQ29udGV4dDogc3RyaW5nLFxuICByZWR1Y2VyczogYW55W10sXG4gIGluaXRpYWxTdGF0ZTogYW55LFxuICBwcmV2ZW50UmVzZXR0aW5nOiBib29sZWFuID0gZmFsc2Vcbik6IGFueSB7XG4gIHJldHVybiB7XG4gICAgW3N0YXRlQ29udGV4dF06IGhhbmRsZVJlZHV4QWN0aW9ucyhcbiAgICAgIHJlZHVjZShcbiAgICAgICAgZmxhdHRlbihyZWR1Y2VycyksXG4gICAgICAgIChyZWR1Y2VyOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoYWN0aW9uLm9uKSkge1xuICAgICAgICAgICAgYWN0aW9uLm9uLmZvckVhY2goKGFjdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJlZHVjZXJbYWN0XSA9IGFjdGlvbi5yZWR1Y2VyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHJlZHVjZXJbYWN0aW9uLm9uXSA9IGFjdGlvbi5yZWR1Y2VyO1xuICAgICAgICAgIHJldHVybiByZWR1Y2VyO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50UmVzZXR0aW5nXG4gICAgICAgICAgPyB7fVxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgQVBQX1NUQVRFX1JFU0VUOiAoKSA9PiBpbml0aWFsU3RhdGVcbiAgICAgICAgICB9XG4gICAgICApLFxuICAgICAgaW5pdGlhbFN0YXRlXG4gICAgKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2FnYXMoc2FnYXM6IGFueVtdKTogYW55W10ge1xuICByZXR1cm4gZmxhdHRlbihzYWdhcykubWFwKChzYWdhOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IG9uLCBlZmZlY3QgPSB0YWtlTGF0ZXN0LCB3b3JrZXIgfSA9IHNhZ2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKiAoKSB7XG4gICAgICB5aWVsZCBlZmZlY3Qob24sIGZ1bmN0aW9uKiAoYWN0aW9uOiBhbnkpIHtcbiAgICAgICAgeWllbGQgZGVsYXkoMCk7XG4gICAgICAgIHlpZWxkIHdvcmtlcihhY3Rpb24pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yc0EoY29udGV4dDogc3RyaW5nLCBrZXlzOiBhbnlbXSA9IFtdKTogYW55IHtcbiAgY29uc3Qgc3RhdGVTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVtjb250ZXh0XTtcblxuICBpZiAoaXNFbXB0eShrZXlzKSkgcmV0dXJuIHN0YXRlU2VsZWN0b3I7XG5cbiAgcmV0dXJuIGtleXMubWFwKChrZXk6IGFueSkgPT4gKHN0YXRlOiBhbnkpID0+IChpc0FycmF5KGtleSlcbiAgICA/IHN0YXRlU2VsZWN0b3Ioc3RhdGUpLmdldEluKGtleSlcbiAgICA6IHN0YXRlU2VsZWN0b3Ioc3RhdGUpLmdldChrZXkpKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ycyhjb250ZXh0OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKTogYW55IHtcbiAgY29uc3Qgc3RhdGVTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVtjb250ZXh0XTtcblxuICByZXR1cm4gcmVkdWNlKFxuICAgIGtleXMsXG4gICAgKHNlbGVjdG9yczogYW55LCBrZXkpID0+IHtcbiAgICAgIHNlbGVjdG9yc1tgJHtrZXl9U2VsZWN0b3JgXSA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVNlbGVjdG9yKHN0YXRlKS5nZXQoa2V5KTtcbiAgICAgIHJldHVybiBzZWxlY3RvcnM7XG4gICAgfSxcbiAgICB7fVxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVKU1NlbGVjdG9ycyhjb250ZXh0OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKTogYW55IHtcbiAgY29uc3Qgc3RhdGVTZWxlY3RvciA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVtjb250ZXh0XTtcblxuICByZXR1cm4gcmVkdWNlKFxuICAgIGtleXMsXG4gICAgKHNlbGVjdG9yczogYW55LCBrZXkpID0+IHtcbiAgICAgIHNlbGVjdG9yc1tgJHtrZXl9U2VsZWN0b3JgXSA9IChzdGF0ZTogYW55KSA9PiBzdGF0ZVNlbGVjdG9yKHN0YXRlKVtrZXldO1xuICAgICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgICB9LFxuICAgIHt9XG4gICk7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUFjdGlvbixcbiAgY3JlYXRlQXN5bmNBY3Rpb24sXG4gIGNyZWF0ZUFzeW5jQWN0aW9ucyxcbiAgY3JlYXRlU2VsZWN0b3JzQSxcbiAgaGFuZGxlQWN0aW9ucyxcbiAgY3JlYXRlUmVkdWNlcnMsXG4gIGNyZWF0ZVNlbGVjdG9ycyxcbiAgY3JlYXRlU2VsZWN0b3IsXG4gIGNyZWF0ZUpTU2VsZWN0b3JzXG59O1xuIiwiZXhwb3J0IGNvbnN0IHVzZXJuYW1lUGF0dGVyblJ1bGUgPSB7XG4gIHBhdHRlcm46IG5ldyBSZWdFeHAoJ15bYS16QS1aMC05XSokJyksXG4gIG1lc3NhZ2U6ICdEb250IGFsbG93IHNwZWNpYWwgY2hhcnMgb3Igc3BhY2UnXG59O1xuIiwiaW1wb3J0IHsgU3RvcmUgYXMgUkRTdG9yZSB9IGZyb20gJ3JlZHV4JztcblxuZXhwb3J0IHR5cGUgU3RvcmUgPSBSRFN0b3JlPHt9PjtcblxubGV0IHN0b3JlOiBTdG9yZSB8IG51bGwgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFN0b3JlOiAoKSA9PiBzdG9yZSxcbiAgc2V0U3RvcmU6IChzOiBTdG9yZSkgPT4ge1xuICAgIHN0b3JlID0gcztcbiAgfVxufTtcbiIsImltcG9ydCBzdG9yZUhvbGRlciBmcm9tICcuL3N0b3JlSG9sZGVyJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfT0ZGTElORV9JTUFHRV9VUkwgPSAnL29mZmxpbmUucG5nJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BSSVZBVEVfSU1BR0VfVVJMID0gJy9wcml2YXRlLnBuZyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9HUk9VUF9JTUFHRV9VUkwgPSAnL2dyb3VwLnBuZyc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9PTkxJTkVfSU1BR0VfVVJMID0gJyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0ZXIoc3RhdHVzOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgcG9zdGVyID0gJyc7XG4gIGNvbnN0IHN0b3JlID0gc3RvcmVIb2xkZXIuZ2V0U3RvcmUoKTtcbiAgY29uc3QgeyBzZXR0aW5ncyA9IHt9IH0gPSBzdG9yZS5nZXRTdGF0ZSgpIGFzIGFueTtcbiAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICBjYXNlICdwcml2YXRlJzpcbiAgICAgIHBvc3RlciA9IHNldHRpbmdzLmRlZmF1bHRQcml2YXRlQ2FsbEltYWdlIHx8IERFRkFVTFRfUFJJVkFURV9JTUFHRV9VUkw7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdvZmZsaW5lJzpcbiAgICAgIHBvc3RlciA9IHNldHRpbmdzLmRlZmF1bHRPZmZsaW5lTW9kZWxJbWFnZSB8fCBERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHVibGljJzpcbiAgICAgIHBvc3RlciA9IERFRkFVTFRfT05MSU5FX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2dyb3VwJzpcbiAgICAgIHBvc3RlciA9IHNldHRpbmdzLmRlZmF1bHRHcm91cENoYXRJbWFnZSB8fCBERUZBVUxUX0dST1VQX0lNQUdFX1VSTDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBwb3N0ZXIgPSBERUZBVUxUX09GRkxJTkVfSU1BR0VfVVJMO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHBvc3Rlcjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHVybC5tYXRjaChcbiAgICAgIC8oaHR0cChzKT86XFwvXFwvLik/KHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezIsMjU2fVxcLlthLXpdezIsNn1cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLy89XSopL2dcbiAgICApICE9PSBudWxsXG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVV1aWQgPSAoKSA9PiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMDtcbiAgICBjb25zdCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXN0cikgcmV0dXJuICcnO1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgY29uc3QgdW5pdFByaWNlczogeyB2YWx1ZTogbnVtYmVyLCB0ZXh0OiBhbnkgfVtdID0gW1xuICB7XG4gICAgdmFsdWU6IDE1LFxuICAgIHRleHQ6ICcxNSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMjAsXG4gICAgdGV4dDogJzIwIHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAyNSxcbiAgICB0ZXh0OiAnMjUgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDMwLFxuICAgIHRleHQ6ICczMCB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogMzUsXG4gICAgdGV4dDogJzM1IHRva2VucydcbiAgfSxcbiAge1xuICAgIHZhbHVlOiA0MCxcbiAgICB0ZXh0OiAnNDAgdG9rZW5zJ1xuICB9LFxuICB7XG4gICAgdmFsdWU6IDQ1LFxuICAgIHRleHQ6ICc0NSB0b2tlbnMnXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogNTAsXG4gICAgdGV4dDogJzUwIHRva2VucydcbiAgfVxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDU1LFxuICAvLyAgIHRleHQ6ICc1NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjAsXG4gIC8vICAgdGV4dDogJzYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA2NSxcbiAgLy8gICB0ZXh0OiAnNjUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDcwLFxuICAvLyAgIHRleHQ6ICc3MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNzUsXG4gIC8vICAgdGV4dDogJzc1IHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA4MCxcbiAgLy8gICB0ZXh0OiAnODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDg1LFxuICAvLyAgIHRleHQ6ICc4NSB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTAsXG4gIC8vICAgdGV4dDogJzkwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA5NSxcbiAgLy8gICB0ZXh0OiAnOTUgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDEwMCxcbiAgLy8gICB0ZXh0OiAnMTAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxMjAsXG4gIC8vICAgdGV4dDogJzEyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMTQwLFxuICAvLyAgIHRleHQ6ICcxNDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDE2MCxcbiAgLy8gICB0ZXh0OiAnMTYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAxODAsXG4gIC8vICAgdGV4dDogJzE4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjAwLFxuICAvLyAgIHRleHQ6ICcyMDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDIyMCxcbiAgLy8gICB0ZXh0OiAnMjIwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAyNDAsXG4gIC8vICAgdGV4dDogJzI0MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMjYwLFxuICAvLyAgIHRleHQ6ICcyNjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDI4MCxcbiAgLy8gICB0ZXh0OiAnMjgwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzMDAsXG4gIC8vICAgdGV4dDogJzMwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzIwLFxuICAvLyAgIHRleHQ6ICczMjAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDM0MCxcbiAgLy8gICB0ZXh0OiAnMzQwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiAzNjAsXG4gIC8vICAgdGV4dDogJzM2MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogMzgwLFxuICAvLyAgIHRleHQ6ICczODAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQwMCxcbiAgLy8gICB0ZXh0OiAnNDAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0MjAsXG4gIC8vICAgdGV4dDogJzQyMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNDQwLFxuICAvLyAgIHRleHQ6ICc0NDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDQ2MCxcbiAgLy8gICB0ZXh0OiAnNDYwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA0ODAsXG4gIC8vICAgdGV4dDogJzQ4MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNTAwLFxuICAvLyAgIHRleHQ6ICc1MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDU1MCxcbiAgLy8gICB0ZXh0OiAnNTUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA2MDAsXG4gIC8vICAgdGV4dDogJzYwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogNjUwLFxuICAvLyAgIHRleHQ6ICc2NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDcwMCxcbiAgLy8gICB0ZXh0OiAnNzAwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA3NTAsXG4gIC8vICAgdGV4dDogJzc1MCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogODAwLFxuICAvLyAgIHRleHQ6ICc4MDAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDg1MCxcbiAgLy8gICB0ZXh0OiAnODUwIHRva2VucydcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHZhbHVlOiA5MDAsXG4gIC8vICAgdGV4dDogJzkwMCB0b2tlbnMnXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB2YWx1ZTogOTUwLFxuICAvLyAgIHRleHQ6ICc5NTAgdG9rZW5zJ1xuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdmFsdWU6IDEwMDAsXG4gIC8vICAgdGV4dDogJzEwMDAgdG9rZW5zJ1xuICAvLyB9XG5dO1xuIiwiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICdwYXRoLXRvLXJlZ2V4cCc7XG5pbXBvcnQge1xuICBJU2NoZWR1bGUsIElVc2VyLCBJUGVyZm9ybWVyLCBJU3R1ZGlvXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFNPUlQgfSBmcm9tICdAc2VydmljZXMvYXBpLXJlcXVlc3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSB0byBhIHRyZWUtc3RydWN0dXJlZCBhcnJheS5cbiAqIEBwYXJhbSAgIHthcnJheX0gICAgIGFycmF5ICAgICBUaGUgQXJyYXkgbmVlZCB0byBDb252ZXJ0ZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBpZCAgICAgICAgVGhlIGFsaWFzIG9mIHRoZSB1bmlxdWUgSUQgb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBwYXJlbnRJZCAgICAgICBUaGUgYWxpYXMgb2YgdGhlIHBhcmVudCBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGNoaWxkcmVuICBUaGUgYWxpYXMgb2YgY2hpbGRyZW4gb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJuICB7YXJyYXl9ICAgIFJldHVybiBhIHRyZWUtc3RydWN0dXJlZCBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5VG9UcmVlKFxuICBhcnJheSxcbiAgaWQgPSAnaWQnLFxuICBwYXJlbnRJZCA9ICdwaWQnLFxuICBjaGlsZHJlbiA9ICdjaGlsZHJlbidcbikge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgaGFzaCA9IHt9O1xuICBjb25zdCBkYXRhID0gY2xvbmVEZWVwKGFycmF5KTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaGFzaFtkYXRhW2luZGV4XVtpZF1dID0gZGF0YVtpbmRleF07XG4gIH0pO1xuXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGhhc2hQYXJlbnQgPSBoYXNoW2l0ZW1bcGFyZW50SWRdXTtcbiAgICBpZiAoaGFzaFBhcmVudCkge1xuICAgICAgIWhhc2hQYXJlbnRbY2hpbGRyZW5dICYmIChoYXNoUGFyZW50W2NoaWxkcmVuXSA9IFtdKTtcbiAgICAgIGhhc2hQYXJlbnRbY2hpbGRyZW5dLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2hldGhlciB0aGUgcGF0aCBtYXRjaGVzIHRoZSByZWdleHAgaWYgdGhlIGxhbmd1YWdlIHByZWZpeCBpcyBpZ25vcmVkLCBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAuXG4gKiBAcGFyYW0gICB7c3RyaW5nfHJlZ2V4cHxhcnJheX0gICAgIHJlZ2V4cCAgICAgU3BlY2lmeSBhIHN0cmluZywgYXJyYXkgb2Ygc3RyaW5ncywgb3IgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgIHBhdGhuYW1lICAgU3BlY2lmeSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJuICB7YXJyYXl8bnVsbH0gICAgICAgICAgICAgIFJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBtYXRjaCBvciBudWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0aE1hdGNoUmVnZXhwKHJlZ2V4cCwgcGF0aG5hbWUpIHtcbiAgcmV0dXJuIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAocmVnZXhwKS5leGVjKHBhdGhuYW1lKTtcbn1cblxuLyoqXG4gKiBJbiBhbiBhcnJheSBvZiBvYmplY3RzLCBzcGVjaWZ5IGFuIG9iamVjdCB0aGF0IHRyYXZlcnNlcyB0aGUgb2JqZWN0cyB3aG9zZSBwYXJlbnQgSUQgbWF0Y2hlcy5cbiAqIEBwYXJhbSAgIHthcnJheX0gICAgIGFycmF5ICAgICBUaGUgQXJyYXkgbmVlZCB0byBDb252ZXJ0ZWQuXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICBjdXJyZW50ICAgU3BlY2lmeSB0aGUgb2JqZWN0IHRoYXQgbmVlZHMgdG8gYmUgcXVlcmllZC5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIHBhcmVudElkICBUaGUgYWxpYXMgb2YgdGhlIHBhcmVudCBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgIGlkICAgICAgICBUaGUgYWxpYXMgb2YgdGhlIHVuaXF1ZSBJRCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqIEByZXR1cm4gIHthcnJheX0gICAgUmV0dXJuIGEga2V5IGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBbmNlc3RvcnMoYXJyYXksIGN1cnJlbnQsIHBhcmVudElkLCBpZCA9ICdpZCcpIHtcbiAgY29uc3QgcmVzdWx0ID0gW2N1cnJlbnRdO1xuICBjb25zdCBoYXNoTWFwID0gbmV3IE1hcCgpO1xuICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiBoYXNoTWFwLnNldChpdGVtW2lkXSwgaXRlbSkpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgY29uc3QgZ2V0UGF0aCA9IChjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBhcmVudElkID0gaGFzaE1hcC5nZXQoY3VycmVudFtpZF0pW3BhcmVudElkXTtcbiAgICBpZiAoY3VycmVudFBhcmVudElkKSB7XG4gICAgICByZXN1bHQucHVzaChoYXNoTWFwLmdldChjdXJyZW50UGFyZW50SWQpKTtcbiAgICAgIGdldFBhdGgoaGFzaE1hcC5nZXQoY3VycmVudFBhcmVudElkKSk7XG4gICAgfVxuICB9O1xuXG4gIGdldFBhdGgoY3VycmVudCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNwb25zZUVycm9yKGRhdGE6IGFueSkge1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gJ0JhZCByZXF1ZXN0ISc7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLm1lc3NhZ2UpKSB7XG4gICAgY29uc3QgaXRlbSA9IGRhdGEubWVzc2FnZVswXTtcbiAgICBpZiAoIWl0ZW0uY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiBkYXRhLmVycm9yIHx8ICdCYWQgcmVxdWVzdCEnO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhpdGVtLmNvbnN0cmFpbnRzKVswXTtcbiAgfVxuXG4gIC8vIFRPRE8gLSBwYXJzZSBmb3IgbGFuZ2F1Z2Ugb3Igb3RoZXJzXG4gIHJldHVybiB0eXBlb2YgZGF0YS5tZXNzYWdlID09PSAnc3RyaW5nJyA/IGRhdGEubWVzc2FnZSA6ICdCYWQgcmVxdWVzdCEnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gIGlmIChcbiAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpXG4gICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKVxuICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSlcbiAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzIFBob25lL2kpXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXIoc1BhcmFtKSB7XG4gIGNvbnN0IHNQYWdlVVJMID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgY29uc3Qgc1VSTFZhcmlhYmxlcyA9IHNQYWdlVVJMLnNwbGl0KCcmJyk7XG4gIGxldCBzUGFyYW1ldGVyTmFtZTtcbiAgbGV0IGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNVUkxWYXJpYWJsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzUGFyYW1ldGVyTmFtZSA9IHNVUkxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcblxuICAgIGlmIChzUGFyYW1ldGVyTmFtZVswXSA9PT0gc1BhcmFtKSB7XG4gICAgICByZXR1cm4gc1BhcmFtZXRlck5hbWVbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzUGFyYW1ldGVyTmFtZVsxXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERBWV9PRl9XRUVLID0ge1xuICBtb246ICdNb25kYXknLFxuICB0dWU6ICdUdWVzZGF5JyxcbiAgd2VkOiAnV2VkbmVzZGF5JyxcbiAgdGh1OiAnVGh1cnNkYXknLFxuICBmcmk6ICdGcmlkYXknLFxuICBzYXQ6ICdTYXR1cmRheScsXG4gIHN1bjogJ1N1bmRheSdcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0U2NoZWR1bGUoKSB7XG4gIGNvbnN0IGRlZmF1bHRWYWwgPSB7IHN0YXJ0OiBudWxsLCBlbmQ6IG51bGwsIGNsb3NlZDogdHJ1ZSB9O1xuICByZXR1cm4ge1xuICAgIG1vbjogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgdHVlOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICB3ZWQ6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHRodTogeyAuLi5kZWZhdWx0VmFsIH0sXG4gICAgZnJpOiB7IC4uLmRlZmF1bHRWYWwgfSxcbiAgICBzYXQ6IHsgLi4uZGVmYXVsdFZhbCB9LFxuICAgIHN1bjogeyAuLi5kZWZhdWx0VmFsIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTaG93KHNjaGVkdWxlOiBJU2NoZWR1bGUpOiBzdHJpbmcge1xuICBsZXQgd2Vla0RheSA9IHBhcnNlSW50KG1vbWVudCgpLmZvcm1hdCgnZScpLCAxMCk7XG4gIGxldCBpID0gMDtcbiAgbGV0IG5leHRTaG93OiBzdHJpbmc7XG4gIGNvbnN0IHBlcmZvcm1lclNob3dzID0gT2JqZWN0LmtleXMoc2NoZWR1bGUpLmZpbHRlcihcbiAgICAoa2V5KSA9PiAhc2NoZWR1bGVba2V5XS5jbG9zZWRcbiAgKTtcbiAgZG8ge1xuICAgIGNvbnN0IGRhdGUgPSBtb21lbnQoKS5kYXkod2Vla0RheSkuZm9ybWF0KCdkZGQnKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChwZXJmb3JtZXJTaG93cy5pbmRleE9mKGRhdGUpID4gLTEpIHtcbiAgICAgIG5leHRTaG93ID0gZGF0ZTtcbiAgICB9XG4gICAgd2Vla0RheSArPSAxO1xuICAgIGkgKz0gMTtcbiAgfSB3aGlsZSAoaSA8IDcgJiYgIW5leHRTaG93KTtcblxuICBpZiAobmV4dFNob3cpIHtcbiAgICByZXR1cm4gYCR7c2NoZWR1bGVbbmV4dFNob3ddLnN0YXJ0fSAke21vbWVudCgpXG4gICAgICAuZGF5KHdlZWtEYXkgLSAxKVxuICAgICAgLmZvcm1hdCgnREQvTU0vWVlZWScpfWA7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoRGF0YShwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIsIHN0YXRlKSB7XG4gIGxldCB7IHNvcnQsIHNvcnRCeSwgZmlsdGVyIH0gPSBzdGF0ZTtcbiAgY29uc3QgeyBsaW1pdCB9ID0gc3RhdGU7XG4gIGlmIChmaWx0ZXJzKSB7XG4gICAgT2JqZWN0LmtleXMoZmlsdGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoZmlsdGVyc1trZXldICYmIGZpbHRlcnNba2V5XS5sZW5ndGgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIGZpbHRlcltrZXldID0gZmlsdGVyc1trZXldWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZpbHRlcnNba2V5XSkge1xuICAgICAgICBmaWx0ZXJba2V5XSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZpbHRlciA9IHt9O1xuICB9XG5cbiAgaWYgKHNvcnRlcikge1xuICAgIGlmIChzb3J0ZXIub3JkZXIpIHtcbiAgICAgIGNvbnN0IHsgZmllbGQsIG9yZGVyIH0gPSBzb3J0ZXI7XG4gICAgICBzb3J0ID0gU09SVFtvcmRlcl07XG4gICAgICBzb3J0QnkgPSBmaWVsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydEJ5ID0gJ2NyZWF0ZWRBdCc7XG4gICAgICBzb3J0ID0gJ2Rlc2MnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4uZmlsdGVyLFxuICAgIHNvcnQsXG4gICAgc29ydEJ5LFxuICAgIG9mZnNldDogKHBhZ2luYXRpb24uY3VycmVudCAtIDEpICogbGltaXRcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2U2NChvcmlnaW5GaWxlT2JqLCBzdGF0dXMgPSAndXBsb2FkaW5nJywgZmlsZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgaWYgKG9yaWdpbkZpbGVPYmopIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKG9yaWdpbkZpbGVPYmopO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoe1xuICAgICAgICAuLi5vcmlnaW5GaWxlT2JqLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIG5hbWU6IG9yaWdpbkZpbGVPYmoubmFtZSxcbiAgICAgICAgdXJsOiByZWFkZXIucmVzdWx0LFxuICAgICAgICBvcmlnaW5GaWxlT2JqXG4gICAgICB9KTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gKGVycm9yKSA9PiByZWplY3QoZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKGZpbGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q29ubmVjdGlvbkRhdGEoZGF0YSkge1xuICBjb25zdCBhcnIgPSBkYXRhLnNwbGl0KCclLyUnKTtcbiAgY29uc3Qgc2VydmVyRGF0YSA9IGFyclsxXSAmJiBKU09OLnBhcnNlKGFyclsxXSk7XG4gIGNvbnN0IGNsaWVudERhdGEgPSBhcnJbMF0gJiYgSlNPTi5wYXJzZShhcnJbMF0pO1xuICByZXR1cm4ge1xuICAgIHNlcnZlckRhdGEsXG4gICAgY2xpZW50RGF0YVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tVc2VyTG9naW4oaXNMb2dnZWRJbjogYm9vbGVhbiwgdXNlcjogSVVzZXIgfCBJUGVyZm9ybWVyIHwgSVN0dWRpbykge1xuICBpZiAoIWlzTG9nZ2VkSW4pIHJldHVybiBmYWxzZTtcbiAgaWYgKCF1c2VyICYmICF1c2VyLl9pZCkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXIodXNlcjogSVVzZXIsIHBlcmZvcm1lcjogSVBlcmZvcm1lcikge1xuICBpZiAodXNlciAmJiB1c2VyLl9pZCkgcmV0dXJuIHVzZXI7XG4gIGlmIChwZXJmb3JtZXIgJiYgcGVyZm9ybWVyLl9pZCkgcmV0dXJuIHBlcmZvcm1lcjtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGh5c2ljYWxQcm9kdWN0KGl0ZW0pIHtcbiAgaWYgKGl0ZW0gJiYgaXRlbS50eXBlID09PSAncGh5c2ljYWwnKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhdEJveE1lc3NhZ2VDbGFzc05hbWUocmVxKSB7XG4gIGNvbnN0IHtcbiAgICBpc01pbmUsXG4gICAgc3RhcnRzU2VxdWVuY2UsXG4gICAgZW5kc1NlcXVlbmNlLFxuICAgIGRhdGE6IHsgdHlwZSB9XG4gIH0gPSByZXE7XG4gIHJldHVybiBjbGFzc25hbWVzKFxuICAgICdtZXNzYWdlJyxcbiAgICB7IG1pbmU6IGlzTWluZSAmJiB0eXBlICE9PSAndGlwJyB9LFxuICAgIHsgdGlwOiB0eXBlID09PSAndGlwJyB9LFxuICAgIHsgc3RhcnQ6ICEhc3RhcnRzU2VxdWVuY2UgfSxcbiAgICB7IGVuZDogISFlbmRzU2VxdWVuY2UgfVxuICApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RmVldFRvQ20oZmVldCwgaW5jaCkge1xuICBjb25zdCBbZl0gPSBmZWV0LnNwbGl0KCcuJyk7XG4gIGNvbnN0IFtpXSA9IGluY2guc3BsaXQoJy4nKTtcbiAgcmV0dXJuIChwYXJzZUludChmLCAxMCkgKiAxMiArIHBhcnNlSW50KGksIDEwKSkgKiAyLjU0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0YVdlaWdodChtaW4gPSA5OSwgbWF4ID0gMzE5KSB7XG4gIGxldCBpID0gbWluO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZG8ge1xuICAgIHJlc3VsdFtpXSA9IChpICogMC40NSkudG9GaXhlZCgyKTtcbiAgICBpICs9IDE7XG4gIH0gd2hpbGUgKGkgPCBtYXgpO1xuICByZXR1cm4gcmVzdWx0Lm1hcCgodiwgaW5kZXgpID0+ICh7XG4gICAgbGFiZWw6IGAke2luZGV4fSAgbGJzICgke3Z9a2cpYCxcbiAgICB2YWx1ZTogYCR7aW5kZXh9IGxic2BcbiAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGFIZWlnaHQobWluID0gNCwgbWF4ID0gNykge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgZmVldCA9IG1pbjsgZmVldCA8IG1heDsgZmVldCArPSAxKSB7XG4gICAgZm9yIChsZXQgaW5jaCA9IDA7IGluY2ggPD0gMTE7IGluY2ggKz0gMSkge1xuICAgICAgY29uc3QgYSA9IGNvbnZlcnRGZWV0VG9DbShcbiAgICAgICAgZmVldC50b0ZpeGVkKDEpLnRvU3RyaW5nKCksXG4gICAgICAgIGluY2gudG9GaXhlZCgxKS50b1N0cmluZygpXG4gICAgICApO1xuICAgICAgcmVzdWx0LnB1c2goYCR7ZmVldH0nJHtpbmNofVwiICgke2EudG9GaXhlZCgyKX0gY20pYCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQubWFwKChmKSA9PiAoeyBsYWJlbDogYCR7Zn1gLCB2YWx1ZTogYCR7Zn1gIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlOiBudW1iZXIsIGZyYWN0aW9uRGlnaXRzID0gMikge1xuICBpZiAocHJpY2UpIHtcbiAgICByZXR1cm4gcHJpY2UudG9GaXhlZChmcmFjdGlvbkRpZ2l0cyk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY0FjdGlvbiwgY3JlYXRlQWN0aW9uIH0gZnJvbSAnc3JjL2xpYi9yZWR1eCc7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldFBlcmZvcm1lckNhdGVnb3JpZXMsXG4gIGdldFBlcmZvcm1lckNhdGVnb3JpZXNTdWNjZXNzLFxuICBnZXRQZXJmb3JtZXJDYXRlZ29yaWVzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRQZXJmb3JtZXJDYXRlZ29yaWVzJywgJ0dFVF9QRVJGT1JNRVJfQ0FURUdPUklFUycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBzZWFyY2hQZXJmb3JtZXIsXG4gIHNlYXJjaFBlcmZvcm1lclN1Y2Nlc3MsXG4gIHNlYXJjaFBlcmZvcm1lckZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignc2VhcmNoUGVyZm9ybWVyJywgJ1NFQVJDSF9QRVJGT1JNRVInKTtcblxuZXhwb3J0IGNvbnN0IHNldFBlcmZvcm1lclNlYXJjaGluZyA9IGNyZWF0ZUFjdGlvbignU0VUX1BFUkZPUk1FUl9TRUFSQ0hJTkcnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXBkYXRlUGVyZm9ybWVyUHJvZmlsZSxcbiAgdXBkYXRlUGVyZm9ybWVyUHJvZmlsZVN1Y2Nlc3MsXG4gIHVwZGF0ZVBlcmZvcm1lclByb2ZpbGVGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ3VwZGF0ZVBlcmZvcm1lclByb2ZpbGUnLCAnVVBEQVRFX1BFUkZPUk1FUl9QUk9GSUxFJyk7XG5leHBvcnQgY29uc3Qgc2V0dXBkYXRpbmdQZXJmb3JtZXJQcm9maWxlID0gY3JlYXRlQWN0aW9uKFxuICAndXBkYXRpbmdQZXJmb3JtZXJQcm9maWxlJ1xuKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVQYXltZW50SW5mbyA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1BBWU1FTlRfSU5GTycpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZURpcmVjdERlcG9zaXQgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9ESVJFQ1RfREVQT1NJVCcpO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVBheHVtID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfUEFYVU0nKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVCaXRwYXkgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9CSVRQQVknKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVTdHJlYW1pbmdTdGF0dXMgPSBjcmVhdGVBY3Rpb24oJ1VQREFURV9TVFJFQU1JTkdfU1RBVFVTJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlRGVmYXVsdFByaWNlID0gY3JlYXRlQWN0aW9uKCdVUERBVEVfREVGQVVMVF9QUklDRScpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRQZXJmb3JtZXJEZXRhaWxzLFxuICBnZXRQZXJmb3JtZXJEZXRhaWxzU3VjY2VzcyxcbiAgZ2V0UGVyZm9ybWVyRGV0YWlsc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0UGVyZm9ybWVyRGV0YWlscycsICdHRVRfUEVSRk9STUVSX0RFVEFJTFMnKTtcbmV4cG9ydCBjb25zdCBzZXRHZXR0aW5nUGVyZm9ybWVyRGV0YWlscyA9IGNyZWF0ZUFjdGlvbihcbiAgJ3NldEdldHRpbmdQZXJmb3JtZXJEZXRhaWxzJ1xuKTtcbmV4cG9ydCBjb25zdCBzZXRQZXJmb3JtZXJEZXRhaWxzID0gY3JlYXRlQWN0aW9uKCdTRVRfUEVSRk9STUVSX0RFVEFJTFMnKTtcbmV4cG9ydCBjb25zdCB1cGRhdGVQZXJmb3JtZXJBc3NldCA9IGNyZWF0ZUFjdGlvbignVVBEQVRFX1BFUkZPUk1FUl9BU1NFVCcpO1xuZXhwb3J0IGNvbnN0IHNldEZhdm9yaXRlUGVyZm9ybWVyRGV0YWlscyA9IGNyZWF0ZUFjdGlvbihcbiAgJ1NFVF9GQVZPUklURV9QRVJGT1JNRVJfREVUQUlMUydcbik7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE15UHJvZHVjdHMsXG4gIGdldE15UHJvZHVjdHNTdWNjZXNzLFxuICBnZXRNeVByb2R1Y3RzRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNeVByb2R1Y3RzJywgJ0dFVF9NWV9QUk9EVUNUJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ015UHJvZHVjdHMgPSBjcmVhdGVBY3Rpb24oJ3NldEdldHRpbmdNeVByb2R1Y3RzJyk7XG5leHBvcnQgY29uc3QgYWRkTXlQcm9kdWN0ID0gY3JlYXRlQWN0aW9uKCdhZGRNeVByb2R1Y3QnKTtcbmV4cG9ydCBjb25zdCByZW1vdmVNeVByb2R1Y3QgPSBjcmVhdGVBY3Rpb24oJ3JlbW92ZU15UHJvZHVjdCcpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRFYXJuaW5nLFxuICBnZXRFYXJuaW5nU3VjY2VzcyxcbiAgZ2V0RWFybmluZ0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0RWFybmluZycsICdHRVRfRUFSTklORycpO1xuZXhwb3J0IGNvbnN0IHNldEdldHRpbmdFYXJuaW5nID0gY3JlYXRlQWN0aW9uKCdTRVRfR0VUVElOR19FQVJOSUcnKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0UGF5b3V0UmVxdWVzdCxcbiAgZ2V0UGF5b3V0UmVxdWVzdFN1Y2Nlc3MsXG4gIGdldFBheW91dFJlcXVlc3RGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldFBheW91dFJlcXVlc3QnLCAnR0VUX1BBWU9VVF9SRVFVRVNUJyk7XG5leHBvcnQgY29uc3Qgc2V0R2V0dGluZ1BheW91dFJlcXVlc3QgPSBjcmVhdGVBY3Rpb24oJ1NFVF9HRVRUSU5HX1BBWU9VVF9SRVFVRVNUJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlUGF5b3V0UmVxdWVzdCA9IGNyZWF0ZUFjdGlvbignUkVNT1ZFX1BBWU9VVF9SRVFVRVNUJyk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIGdldE15VmlkZW9zLFxuICBnZXRNeVZpZGVvc1N1Y2Nlc3MsXG4gIGdldE15VmlkZW9zRmFpbFxufSA9IGNyZWF0ZUFzeW5jQWN0aW9uKCdnZXRNeVZpZGVvcycsICdHRVRfTVlfVklERU8nKTtcbmV4cG9ydCBjb25zdCBzZXRnZXR0aW5nTXlWaWRlb3MgPSBjcmVhdGVBY3Rpb24oJ3NldGdldHRpbmdNeVZpZGVvcycpO1xuZXhwb3J0IGNvbnN0IGFkZE15VmlkZW9zID0gY3JlYXRlQWN0aW9uKCdhZGRNeVZpZGVvcycpO1xuZXhwb3J0IGNvbnN0IHJlbW92ZU15VmlkZW8gPSBjcmVhdGVBY3Rpb24oJ3JlbW92ZU15VmlkZW8nKTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgZ2V0TXlQaG90b3MsXG4gIGdldE15UGhvdG9zU3VjY2VzcyxcbiAgZ2V0TXlQaG90b3NGYWlsXG59ID0gY3JlYXRlQXN5bmNBY3Rpb24oJ2dldE15UGhvdG9zJywgJ0dFVF9NWV9QSE9UTycpO1xuZXhwb3J0IGNvbnN0IHNldGdldHRpbmdNeVBob3RvcyA9IGNyZWF0ZUFjdGlvbignc2V0Z2V0dGluZ015UGhvdG9zJyk7XG5leHBvcnQgY29uc3QgYWRkTXlQaG90b3MgPSBjcmVhdGVBY3Rpb24oJ2FkZE15UGhvdG9zJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlTXlQaG90byA9IGNyZWF0ZUFjdGlvbigncmVtb3ZlTXlQaG90bycpO1xuXG5leHBvcnQgY29uc3Qge1xuICBnZXRNeUdhbGxlcmllcyxcbiAgZ2V0TXlHYWxsZXJpZXNTdWNjZXNzLFxuICBnZXRNeUdhbGxlcmllc0ZhaWxcbn0gPSBjcmVhdGVBc3luY0FjdGlvbignZ2V0TXlHYWxsZXJpZXMnLCAnR0VUX01ZX0dBTExFUklFUycpO1xuZXhwb3J0IGNvbnN0IHNldGdldHRpbmdNeUdhbGxlcmllcyA9IGNyZWF0ZUFjdGlvbignc2V0Z2V0dGluZ015R2FsbGVyaWVzJyk7XG5leHBvcnQgY29uc3QgYWRkTXlHYWxsZXJpZXMgPSBjcmVhdGVBY3Rpb24oJ2FkZE15R2FsbGVyaWVzJyk7XG5leHBvcnQgY29uc3QgcmVtb3ZlTXlHYWxsZXJpZXMgPSBjcmVhdGVBY3Rpb24oJ3JlbW92ZU15R2FsbGVyaWVzJyk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDdXJyZW50UGVyZm9ybWVyID0gY3JlYXRlQWN0aW9uKCd1cGRhdGVDdXJyZW50UGVyZm9ybWVyJyk7XG5leHBvcnQgY29uc3QgdXBkYXRlUGVyZm9ybWVyRmF2b3VyaXRlID0gY3JlYXRlQWN0aW9uKFxuICAnVVBEQVRFX1BFUkZPUk1FUl9GQVZPVVJJVEUnXG4pO1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnJlbnRQZXJmb3JtZXJCYWxhbmNlID0gY3JlYXRlQWN0aW9uKFxuICAnVVBEQVRFX0NVUlJFTlRfUEVSRk9STUVSX0JBTEFOQ0UnXG4pO1xuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQGxpYi9yZWR1eCc7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVSVZhbHVlID0gY3JlYXRlQWN0aW9uKCd1cGRhdGVVSVZhbHVlJyk7XG5leHBvcnQgY29uc3QgbG9hZFVJVmFsdWUgPSBjcmVhdGVBY3Rpb24oJ2xvYWRVSVZhbHVlJyk7XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgaXNVcmwgfSBmcm9tICdAbGliL3N0cmluZyc7XG5pbXBvcnQgeyBJUmVnaXN0ZXJGb3JtRGF0YSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBJUmVzcG9uc2U8VD4ge1xuICBzdGF0dXM6IG51bWJlcjtcbiAgZGF0YTogVDtcbn1cblxuZXhwb3J0IGNvbnN0IFRPS0VOID0gJ3Rva2VuJztcbmV4cG9ydCBjb25zdCBST0xFID0gJ3JvbGUnO1xuZXhwb3J0IGNvbnN0IFBFUkZPUk1FUl9ST0xFID0gJ3BlcmZvcm1lcic7XG5leHBvcnQgY29uc3QgVVNFUl9ST0xFID0gJ3VzZXInO1xuZXhwb3J0IGNvbnN0IFNUVURJT19ST0xFID0gJ3N0dWRpbyc7XG5leHBvcnQgY29uc3QgU09SVCA9IHsgZGVzY2VuZDogJ2Rlc2MnLCBhc2NlbmQ6ICdhc2MnIH07XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBUElSZXF1ZXN0IHtcbiAgc3RhdGljIHRva2VuOiBzdHJpbmcgPSAnJztcblxuICBzZXRBdXRoSGVhZGVyVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgIEFQSVJlcXVlc3QudG9rZW4gPSB0b2tlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIEpTT04gcmV0dXJuZWQgYnkgYSBuZXR3b3JrIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtICB7b2JqZWN0fSByZXNwb25zZSBBIHJlc3BvbnNlIGZyb20gYSBuZXR3b3JrIHJlcXVlc3RcbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICBUaGUgcGFyc2VkIEpTT04gZnJvbSB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZUpTT04ocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0IHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA1KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBuZXR3b3JrIHJlcXVlc3QgY2FtZSBiYWNrIGZpbmUsIGFuZCB0aHJvd3MgYW4gZXJyb3IgaWYgbm90XG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gcmVzcG9uc2UgICBBIHJlc3BvbnNlIGZyb20gYSBuZXR3b3JrIHJlcXVlc3RcbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fHVuZGVmaW5lZH0gUmV0dXJucyBlaXRoZXIgdGhlIHJlc3BvbnNlLCBvciB0aHJvd3MgYW4gZXJyb3JcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgY2hlY2tTdGF0dXMocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDEzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgRW50aXR5IFRvbyBMYXJnZScpO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xuICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JiaWRkZW4gaW4gdGhlIGFjdGlvbiEnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkgYXMgYW55O1xuICAgIC8vIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgLy8gdGhyb3cgZXJyb3I7XG4gICAgdGhyb3cgcmVzcG9uc2UuY2xvbmUoKS5qc29uKCk7XG4gIH1cblxuICByZXF1ZXN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG1ldGhvZD86IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCB2ZXJiID0gKG1ldGhvZCB8fCAnZ2V0JykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCB1cGRhdGVkSGVhZGVyID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC8vIFRPRE8gLSBjaGVjayBtZVxuICAgICAgQXV0aG9yaXphdGlvbjpcbiAgICAgICAgQVBJUmVxdWVzdC50b2tlbiB8fCAocHJvY2Vzcy5icm93c2VyID8gY29va2llLmdldChUT0tFTikgOiAnJyksXG4gICAgICAuLi4oaGVhZGVycyB8fCB7fSlcbiAgICB9O1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuXG4gICAgcmV0dXJuIGZldGNoKGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuQVBJX0VORFBPSU5UIHx8IGNvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCwge1xuICAgICAgbWV0aG9kOiB2ZXJiLFxuICAgICAgaGVhZGVyczogdXBkYXRlZEhlYWRlcixcbiAgICAgIGJvZHk6IGJvZHkgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IG51bGxcbiAgICB9KVxuICAgICAgLnRoZW4odGhpcy5jaGVja1N0YXR1cylcbiAgICAgIC50aGVuKHRoaXMucGFyc2VKU09OKTtcbiAgfVxuXG4gIGJ1aWxkVXJsKGJhc2VVcmw6IHN0cmluZywgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIH0pIHtcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgcmV0dXJuIGJhc2VVcmw7XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAubWFwKChrKSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoayl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trXSl9YClcbiAgICAgIC5qb2luKCcmJyk7XG4gICAgcmV0dXJuIGAke2Jhc2VVcmx9PyR7cXVlcnlTdHJpbmd9YDtcbiAgfVxuXG4gIGdldCh1cmw6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ2dldCcsIG51bGwsIGhlYWRlcnMpO1xuICB9XG5cbiAgcG9zdCh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ3Bvc3QnLCBkYXRhLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHB1dCh1cmw6IHN0cmluZywgZGF0YT86IGFueSwgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgJ3B1dCcsIGRhdGEsIGhlYWRlcnMpO1xuICB9XG5cbiAgZGVsKHVybDogc3RyaW5nLCBkYXRhPzogYW55LCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCAnZGVsZXRlJywgZGF0YSwgaGVhZGVycyk7XG4gIH1cblxuICB1cGxvYWQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZmlsZXM6IHtcbiAgICAgIGZpbGU6IEZpbGU7XG4gICAgICBmaWVsZG5hbWU6IHN0cmluZztcbiAgICB9W10sXG4gICAgb3B0aW9uczoge1xuICAgICAgb25Qcm9ncmVzczogRnVuY3Rpb247XG4gICAgICBjdXN0b21EYXRhPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICAgIG1ldGhvZD86IHN0cmluZztcbiAgICB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9LFxuICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICB9XG4gICkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIGNvbnN0IHVwbG9hZFVybCA9IGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWA7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZpbGVzLmZvckVhY2goKGYpID0+IGZvcm1EYXRhLmFwcGVuZChmLmZpZWxkbmFtZSwgZi5maWxlLCBmLmZpbGUubmFtZSkpO1xuICAgICAgb3B0aW9ucy5jdXN0b21EYXRhXG4gICAgICAgICYmIE9iamVjdC5rZXlzKG9wdGlvbnMuY3VzdG9tRGF0YSkuZm9yRWFjaChcbiAgICAgICAgICAoZmllbGRuYW1lKSA9PiB0eXBlb2Ygb3B0aW9ucy5jdXN0b21EYXRhW2ZpZWxkbmFtZV0gIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAmJiBmb3JtRGF0YS5hcHBlbmQoZmllbGRuYW1lLCBvcHRpb25zLmN1c3RvbURhdGFbZmllbGRuYW1lXSlcbiAgICAgICAgKTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKG9wdGlvbnMubWV0aG9kIHx8ICdQT1NUJywgdXBsb2FkVXJsKTtcblxuICAgICAgY29uc3QgdG9rZW46IGFueSA9IGNvb2tpZS5nZXQoVE9LRU4pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgICAgfVxuICAgICAgcmVxLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVnaXN0ZXIoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVJlZ2lzdGVyRm9ybURhdGEsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLmRvY3VtZW50VmVyaWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50VmVyaWZpY2F0aW9uRmlsZSA9IGRhdGEuZG9jdW1lbnRWZXJpZmljYXRpb24uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgJ2RvY3VtZW50VmVyaWZpY2F0aW9uJyxcbiAgICAgICAgICBkb2N1bWVudFZlcmlmaWNhdGlvbkZpbGUsXG4gICAgICAgICAgZG9jdW1lbnRWZXJpZmljYXRpb25GaWxlLm5hbWVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuaWRWZXJpZmljYXRpb24pIHtcbiAgICAgICAgY29uc3QgaWRWZXJpZmljYXRpb25EaWxlID0gZGF0YS5pZFZlcmlmaWNhdGlvbi5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAnaWRWZXJpZmljYXRpb24nLFxuICAgICAgICAgIGlkVmVyaWZpY2F0aW9uRGlsZSxcbiAgICAgICAgICBpZFZlcmlmaWNhdGlvbkRpbGUubmFtZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgb21pdChkYXRhLCBbJ2RvY3VtZW50VmVyaWZpY2F0aW9uJywgJ2lkVmVyaWZpY2F0aW9uJ10pXG4gICAgICApLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUE9TVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7XG4gIElMb2dpbixcbiAgSXBlcmZvcm1lckxvZ2luLFxuICBJUmVnaXN0ZXJGb3JtRGF0YSxcbiAgSVVzZXJSZWdpc3RlckZvcm1EYXRhXG59IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7XG4gIEFQSVJlcXVlc3QsIFRPS0VOLCBJUmVzcG9uc2UsIFJPTEVcbn0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBsb2dpbihkYXRhOiBJTG9naW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC91c2Vycy9sb2dpbicsIGRhdGEpO1xuICB9XG5cbiAgc2V0QXV0aEhlYWRlcih0b2tlbjogc3RyaW5nLCByb2xlOiBzdHJpbmcpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICAgIC8vIHNpbmNlIFNhZmFyaSBkb2VzIG5vdCBzdXBwb3J0LCBuZWVkIGEgYmV0dGVyIHNvbHV0aW9uXG4gICAgY29va2llLnNldChUT0tFTiwgdG9rZW4sIHsgZXhwaXJlczogMzY1IH0pO1xuICAgIGNvb2tpZS5zZXQoUk9MRSwgcm9sZSwgeyBleHBpcmVzOiAzNjUgfSk7XG4gICAgdGhpcy5zZXRBdXRoSGVhZGVyVG9rZW4odG9rZW4pO1xuICB9XG5cbiAgcGVyZm9ybWVyTG9naW4oZGF0YTogSXBlcmZvcm1lckxvZ2luKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2F1dGgvcGVyZm9ybWVycy9sb2dpbicsIGRhdGEpO1xuICB9XG5cbiAgc3R1ZGlvTG9naW4oZGF0YTogSUxvZ2luKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2F1dGgvc3R1ZGlvL2xvZ2luJywgZGF0YSk7XG4gIH1cblxuICBzZXRUb2tlbih0b2tlbjogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAgICAvLyBzaW5jZSBTYWZhcmkgZG9lcyBub3Qgc3VwcG9ydCwgbmVlZCBhIGJldHRlciBzb2x1dGlvblxuICAgIGNvb2tpZS5zZXQoVE9LRU4sIHRva2VuLCB7IGV4cGlyZXM6IDM2NSB9KTtcbiAgICB0aGlzLnNldEF1dGhIZWFkZXJUb2tlbih0b2tlbik7XG4gIH1cblxuICBnZXRUb2tlbigpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRva2VuID0gY29va2llLmdldChUT0tFTik7XG4gICAgcmV0dXJuIHRva2VuIHx8IG51bGw7XG4gIH1cblxuICBnZXRSb2xlKCk6IHN0cmluZyB7XG4gICAgY29uc3Qgcm9sZSA9IGNvb2tpZS5nZXQoUk9MRSk7XG4gICAgcmV0dXJuIHJvbGUgfHwgbnVsbDtcbiAgfVxuXG4gIHJlbW92ZVRva2VuKCk6IHZvaWQge1xuICAgIGNvb2tpZS5yZW1vdmUoVE9LRU4pO1xuICAgIGNvb2tpZS5yZW1vdmUoUk9MRSk7XG4gIH1cblxuICByZW1vdmVSZW1lbWJlcigpOiB2b2lkIHtcbiAgICBwcm9jZXNzLmJyb3dzZXIgJiYgY29va2llLnJlbW92ZSgncmVtZW1iZXJNZScpO1xuICB9XG5cbiAgdXBkYXRlUGFzc3dvcmQoYm9keTogeyBwYXNzd29yZDogc3RyaW5nOyBzb3VyY2U/OiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLnB1dCgnL2F1dGgvdXNlcnMvbWUvcGFzc3dvcmQnLCBib2R5KTtcbiAgfVxuXG4gIHBlcmZvcm1lcnNSZWdpc3RlcihkYXRhOiBJUmVnaXN0ZXJGb3JtRGF0YSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoJy9hdXRoL3BlcmZvcm1lcnMvcmVnaXN0ZXInLCBkYXRhKTtcbiAgfVxuXG4gIHVzZXJSZWdpc3RlcihkYXRhOiBJVXNlclJlZ2lzdGVyRm9ybURhdGEpOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2F1dGgvdXNlcnMvcmVnaXN0ZXInLCBkYXRhKTtcbiAgfVxuXG4gIHN0dWRpb1JlZ2lzdGVyKGRhdGE6IElSZWdpc3RlckZvcm1EYXRhKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlcignL2F1dGgvc3R1ZGlvL3JlZ2lzdGVyJywgZGF0YSk7XG4gIH1cblxuICBmb3Jnb3RQYXNzd29yZChlbWFpbDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZW1haWwsXG4gICAgICB0eXBlXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXV0aC91c2Vycy9mb3Jnb3QnLCBkYXRhKTtcbiAgfVxuXG4gIHJlc2VuZFZlcmlmaWNhdGlvbkVtYWlsKGRhdGE6IHsgZW1haWw6IHN0cmluZywgc291cmNlOiBzdHJpbmd9KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3ZlcmlmaWNhdGlvbi9yZXNlbmQtdmVyaWZpY2F0aW9uLWVtYWlsJywgZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhTZXJ2aWNlID0gbmV3IEF1dGhTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJQmFubmVyU2VhcmNoIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgQmFubmVyU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocXVlcnk6IElCYW5uZXJTZWFyY2gpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL2Jhbm5lcnMvc2VhcmNoJywgcXVlcnkgYXMgYW55KSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJhbm5lclNlcnZpY2UgPSBuZXcgQmFubmVyU2VydmljZSgpO1xuIiwibGV0IGdsb2JhbENvbmZpZyA9IHt9IGFzIGFueTtcblxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbENvbmZpZyA9IChjb25maWc6IGFueSkgPT4ge1xuICBnbG9iYWxDb25maWcgPSBjb25maWc7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0R2xvYmFsQ29uZmlnID0gKCkgPT4gZ2xvYmFsQ29uZmlnO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBFYXJuaW5nU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSwgcm9sZSA9ICdwZXJmb3JtZXInKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoYC9lYXJuaW5nLyR7cm9sZX0vc2VhcmNoYCwgcGFyYW1zKSk7XG4gIH1cblxuICBzdGF0cyhwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCByb2xlID0gJ3BlcmZvcm1lcicpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybChgL2Vhcm5pbmcvJHtyb2xlfS9zdGF0c2AsIHBhcmFtcykpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlYXJuaW5nU2VydmljZSA9IG5ldyBFYXJuaW5nU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5jbGFzcyBGYXZvdXJpdGVTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIGxpa2UoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9mYXZvdXJpdGUvJHtpZH0vbGlrZWApO1xuICB9XG5cbiAgdW5saWtlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvZmF2b3VyaXRlLyR7aWR9L3VubGlrZWApO1xuICB9XG5cbiAgZmF2b3JpdGUoaWQ6IHN0cmluZywgaXNGYXZvcml0ZWQ6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvZmF2b3VyaXRlLyR7aWR9LyR7aXNGYXZvcml0ZWQgPyAndW5saWtlJyA6ICdsaWtlJ31gKTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvZmF2b3VyaXRlJywgcXVlcnkpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmF2b3VyaXRlU2VydmljZSA9IG5ldyBGYXZvdXJpdGVTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJUmVzcG9uc2UsIElEYXRhUmVzcG9uc2UsIElQZXJmb3JtZXJHYWxsZXJ5IH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgR2FsbGVyeVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKFxuICAgIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICAgaXNQZXJmb3JtZXIgPSB0cnVlXG4gICk6IFByb21pc2U8SVJlc3BvbnNlPElEYXRhUmVzcG9uc2U8SVBlcmZvcm1lckdhbGxlcnk+Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoXG4gICAgICAgIGlzUGVyZm9ybWVyXG4gICAgICAgICAgPyAnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcy9zZWFyY2gnXG4gICAgICAgICAgOiAnL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvc2VhcmNoJyxcbiAgICAgICAgcGFyYW1zXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHB1cmNoYXNlZChwYXJhbXM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SURhdGFSZXNwb25zZTxJUGVyZm9ybWVyR2FsbGVyeT4+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wdXJjaGFzZWQtaXRlbXMvdXNlci9nYWxsZXJpZXMnLCBwYXJhbXMpKTtcbiAgfVxuXG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL2dhbGxlcmllcycsIGRhdGEpO1xuICB9XG5cbiAgdXBkYXRlKGlkLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzLyR7aWR9YCwgZGF0YSk7XG4gIH1cblxuICBkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy9nYWxsZXJpZXMvJHtpZH0vdmlld2AsXG4gICAgICBoZWFkZXJzXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpY2RldGFpbHMoaWQ6IHN0cmluZywgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC91c2VyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzLyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsKGAvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvZ2FsbGVyaWVzLyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdhbGxlcnlTZXJ2aWNlID0gbmV3IEdhbGxlcnlTZXJ2aWNlKCk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2F1dGguc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bvc3Quc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3BlcmZvbWVyLWNhdGVnb3JpZXMuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3BlcmZvbWVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi92aWRlby5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvZHVjdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2V0dGluZy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGhvdG8uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2dhbGxlcnkuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2Zhdm91cml0ZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdG9rZW4tcGFja2FnZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNhY3Rpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmVhbS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcHVyY2hhc2UtaXRlbS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vb3JkZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2Vhcm5pbmcuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3BheW91dC1yZXF1ZXN0JztcbmV4cG9ydCAqIGZyb20gJy4vcmVmdW5kLXJlcXVlc3Quc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHVkaW8uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2Jhbm5lci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGF5bWVudC1pbmZvcm1hdGlvbi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3RyZWFtLnNlcnZpY2UnO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgZ2V0Q29udmVyc2F0aW9ucyhxdWVyeT86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL2NvbnZlcnNhdGlvbnMnLCBxdWVyeSkpO1xuICB9XG5cbiAgc2VhcmNoQ29udmVyc2F0aW9ucyhxdWVyeT86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL2NvbnZlcnNhdGlvbnMvc2VhcmNoJywgcXVlcnkpKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnZlcnNhdGlvbihkYXRhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2NvbnZlcnNhdGlvbnMnLCBkYXRhKTtcbiAgfVxuXG4gIGdldENvbnZlcnNhdGlvbkRldGFpbChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvY29udmVyc2F0aW9ucy8ke2lkfWApO1xuICB9XG5cbiAgZ2V0Q29udmVyc2F0aW9uQnlTdHJlYW1JZChzdHJlYW1JZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvY29udmVyc2F0aW9ucy9zdHJlYW0vJHtzdHJlYW1JZH1gKTtcbiAgfVxuXG4gIGdldE1lc3NhZ2VzKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIHF1ZXJ5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKGAvbWVzc2FnZXMvY29udmVyc2F0aW9ucy8ke2NvbnZlcnNhdGlvbklkfWAsIHF1ZXJ5KSk7XG4gIH1cblxuICBnZXRQdWJsaWNNZXNzYWdlcyhjb252ZXJzYXRpb25JZDogc3RyaW5nLCBxdWVyeT86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybChgL21lc3NhZ2VzL2NvbnZlcnNhdGlvbnMvcHVibGljLyR7Y29udmVyc2F0aW9uSWR9YCwgcXVlcnkpKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcsIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVzc2FnZXMvY29udmVyc2F0aW9ucy8ke2NvbnZlcnNhdGlvbklkfWAsIGRhdGEpO1xuICB9XG5cbiAgc2VuZFN0cmVhbU1lc3NhZ2UoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZXNzYWdlcy9zdHJlYW0vY29udmVyc2F0aW9ucy8ke2NvbnZlcnNhdGlvbklkfWAsIGRhdGEpO1xuICB9XG5cbiAgc2VuZFB1YmxpY1N0cmVhbU1lc3NhZ2UoY29udmVyc2F0aW9uSWQ6IHN0cmluZywgZGF0YTogUmVjb3JkPHN0cmluZywgYW55Pikge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZXNzYWdlcy9zdHJlYW0vcHVibGljL2NvbnZlcnNhdGlvbnMvJHtjb252ZXJzYXRpb25JZH1gLCBkYXRhKTtcbiAgfVxuXG4gIGZpbmRQdWJsaWNDb252ZXJzYXRpb25QZXJmb3JtZXIocGVyZm9ybWVySWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL2NvbnZlcnNhdGlvbnMvc3RyZWFtL3B1YmxpYy8ke3BlcmZvcm1lcklkfWApO1xuICB9XG5cbiAgY291bnRUb3RhbE5vdFJlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvbWVzc2FnZXMvY291bnRpbmctbm90LXJlYWQtbWVzc2FnZXMnKTtcbiAgfVxuXG4gIHJlYWRBbGxJbkNvbnZlcnNhdGlvbihjb252ZXJzYXRpb25JZDogc3RyaW5nIHwgbnVtYmVyLCByZWNpcGllbnRJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL21lc3NhZ2VzL3JlYWQtYWxsJywgeyBjb252ZXJzYXRpb25JZCwgcmVjaXBpZW50SWQgfSk7XG4gIH1cblxuICBnZXRNZXNzYWdlVXBsb2FkVXJsKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9tZXNzYWdlcy9wcml2YXRlL2ZpbGVgO1xuICB9XG5cbiAgZGVsZXRlTWVzc2FnZShpZCkge1xuICAgIHJldHVybiB0aGlzLmRlbChgL21lc3NhZ2VzLyR7aWR9YCk7XG4gIH1cblxuICBkZWxldGVBbGxNZXNzYWdlSW5Db252ZXJzYXRpb24oY29udmVyc2F0aW9uSWQpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9tZXNzYWdlcy8ke2NvbnZlcnNhdGlvbklkfS9yZW1vdmUtYWxsLW1lc3NhZ2VgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWVzc2FnZVNlcnZpY2UgPSBuZXcgTWVzc2FnZVNlcnZpY2UoKTtcbiIsIi8vIGltcG9ydCB7IElHYWxsZXJ5Q3JlYXRlIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgT3JkZXJTZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9vcmRlcnMvc2VhcmNoJywgcGF5bG9hZCkpO1xuICB9XG5cbiAgZGV0YWlscyhpZCkge1xuICAgIHJldHVybiB0aGlzLmdldChgL29yZGVycy9kZXRhaWxzLyR7aWR9YCk7XG4gIH1cblxuICB1cGRhdGUoaWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9vcmRlcnMvJHtpZH0vdXBkYXRlYCwgZGF0YSk7XG4gIH1cblxuICB1c2VyU2VhcmNoKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9vcmRlcnMvdXNlci9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgdXNlckZpbmREZXRhaWxzKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvb3JkZXJzL3VzZXIvZGV0YWlscy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvcmRlclNlcnZpY2UgPSBuZXcgT3JkZXJTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmNsYXNzIFBheW1lbnRJbmZvcm1hdGlvblNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGF5bWVudC1pbmZvcm1hdGlvbicsIGRhdGEpO1xuICB9XG5cbiAgZmluZE9uZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wYXltZW50LWluZm9ybWF0aW9uJywgZGF0YSkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwYXltZW50SW5mb3JtYXRpb25TZXJ2aWNlID0gbmV3IFBheW1lbnRJbmZvcm1hdGlvblNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElSZXNwb25zZSB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuY2xhc3MgUGF5b3V0UmVxdWVzdFNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY2FsY3VsYXRlKHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSwgcm9sZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybChgL2Vhcm5pbmcvJHtyb2xlIHx8ICdwZXJmb3JtZXInfS9wYXlvdXRgLCBwYXJhbXMpXG4gICAgKTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGF5b3V0LXJlcXVlc3RzL3BlcmZvcm1lci9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgc3R1ZGlvU2VhcmNoKHF1ZXJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wYXlvdXQtcmVxdWVzdHMvc3R1ZGlvL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBjcmVhdGUoYm9keTogYW55LCByb2xlID0gJ3BlcmZvcm1lcicpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcGF5b3V0LXJlcXVlc3RzLyR7cm9sZX1gLCBib2R5KTtcbiAgfVxuXG4gIHVwZGF0ZShpZDogc3RyaW5nLCBib2R5OiBhbnksIHJvbGUgPSAncGVyZm9ybWVyJykge1xuICAgIHJldHVybiB0aGlzLnB1dChgL3BheW91dC1yZXF1ZXN0cy8ke3JvbGV9LyR7aWR9YCwgYm9keSk7XG4gIH1cblxuICBkZXRhaWwoXG4gICAgaWQ6IHN0cmluZyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfSxcbiAgICByb2xlID0gJ3BlcmZvcm1lcidcbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8UGF5b3V0UmVxdWVzdFNlcnZpY2U+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcGF5b3V0LXJlcXVlc3RzLyR7cm9sZX0vJHtpZH0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwYXlvdXRSZXF1ZXN0U2VydmljZSA9IG5ldyBQYXlvdXRSZXF1ZXN0U2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgUGVyZm9ybWVyQ2F0ZWdvcmllc1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgZ2V0TGlzdChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BlcmZvcm1lci1jYXRlZ29yaWVzJywgcXVlcnkpKTtcbiAgfVxuXG4gIGRldGFpbHMoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BlcmZvcm1lci1jYXRlZ29yaWVzLyR7aWR9L3ZpZXdgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGVyZm9ybWVyQ2F0ZWdvcmllcyA9IG5ldyBQZXJmb3JtZXJDYXRlZ29yaWVzU2VydmljZSgpO1xuIiwiaW1wb3J0IHtcbiAgSVBlcmZvcm1lcixcbiAgSUNyZWF0ZVBlcmZvcm1lclByb2R1Y3RQYXlsb2FkLFxuICBJVXBkYXRlUGVyZm9ybWVyUHJvZHVjdFBheWxvYWRcbn0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgaXNVcmwgfSBmcm9tICdAbGliL3N0cmluZyc7XG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcblxuaW1wb3J0IHsgQVBJUmVxdWVzdCwgSVJlc3BvbnNlLCBUT0tFTiB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgUGVyZm9ybWVyU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBtZShoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCcvcGVyZm9ybWVycy9tZScsIGhlYWRlcnMpO1xuICB9XG5cbiAgdXBkYXRlTWUocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KCcvcGVyZm9ybWVycycsIHBheWxvYWQpO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5PzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVycy9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgZGV0YWlscyh1c2VybmFtZTogc3RyaW5nLCBoZWFkZXJzID0ge30pOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BlcmZvcm1lcnMvJHt1c2VybmFtZX0vdmlld2AsIGhlYWRlcnMpO1xuICB9XG5cbiAgZ2V0QXZhdGFyVXBsb2FkVXJsKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9wZXJmb3JtZXJzL2F2YXRhci91cGxvYWRgO1xuICB9XG5cbiAgZ2V0RG9jdW1lbnRzVXBsb2FkVXJsKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9wZXJmb3JtZXJzL2RvY3VtZW50cy91cGxvYWRgO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUZvcm1VcmwoKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9L3BlcmZvcm1lcnMvcmVsZWFzZS1mb3JtL3VwbG9hZGA7XG4gIH1cblxuICBteVByb2R1Y3QocXVlcnk/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Byb2R1Y3RzL3NlYXJjaCcsIHF1ZXJ5KVxuICAgICk7XG4gIH1cblxuICBjcmVhdGVQcm9kdWN0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElDcmVhdGVQZXJmb3JtZXJQcm9kdWN0UGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLmltYWdlKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZGF0YS5pbWFnZS5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBpbWFnZSwgaW1hZ2UubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmRpZ2l0YWxGaWxlKSB7XG4gICAgICAgIGNvbnN0IGRpZ2l0YWxGaWxlID0gZGF0YS5kaWdpdGFsRmlsZS5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGlnaXRhbEZpbGUnLCBkaWdpdGFsRmlsZSwgZGlnaXRhbEZpbGUubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9taXQoZGF0YSwgWydpbWFnZScsICdkaWdpdGFsRmlsZSddKSkuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQodiwgZGF0YVt2XSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQT1NUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVByb2R1Y3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVVwZGF0ZVBlcmZvcm1lclByb2R1Y3RQYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEuaW1hZ2UgJiYgZGF0YS5pbWFnZS5maWxlKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZGF0YS5pbWFnZS5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBpbWFnZSwgaW1hZ2UubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmRpZ2l0YWxGaWxlICYmIGRhdGEuZGlnaXRhbEZpbGUuZmlsZSkge1xuICAgICAgICBjb25zdCBkaWdpdGFsRmlsZSA9IGRhdGEuZGlnaXRhbEZpbGUuZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RpZ2l0YWxGaWxlJywgZGlnaXRhbEZpbGUsIGRpZ2l0YWxGaWxlLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsnaW1hZ2UnLCAnZGlnaXRhbEZpbGUnXSkpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUFVUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVByb2R1Y3QoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Byb2R1Y3RzLyR7aWR9YCk7XG4gIH1cblxuICBnZXRDb21taXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3NldHRpbmdzL3BlcmZvcm1lci9jb21taXNzaW9uJyk7XG4gIH1cblxuICB1cGRhdGVQYXltZW50SW5mbyhwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVBlcmZvcm1lcj4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9iYW5rLXRyYW5zZmVyL3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlRGlyZWN0RGVwb3N0KHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2RpcmVjdC1kZXBvc2l0L3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlUGF4dW0ocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvcGF4dW0vdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVCaXRwYXkocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvYml0cGF5L3VwZGF0ZScsIHBheWxvYWQpO1xuICB9XG5cbiAgdXBkYXRlU3RyZWFtaW5nU3RhdHVzKHBheWxvYWQ6IHtcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgfSk6IFByb21pc2U8SVJlc3BvbnNlPElQZXJmb3JtZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvc3RyZWFtaW5nLXN0YXR1cy91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdlb0Jsb2NrKHBheWxvYWQ6IHt1c2VySWRzPzogc3RyaW5nW10sIGNvdW50cmllcz86IHN0cmluZ1tdfSk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvcGVyZm9ybWVycy9ibG9ja2luZy91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldEJsb2NrZWRMaXN0KCk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3BlcmZvcm1lcnMvYmxvY2tpbmcnKSk7XG4gIH1cblxuICBpbmNyZWFzZVZpZXcocGVyZm9ybWVySWQpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcGVyZm9ybWVycy8ke3BlcmZvcm1lcklkfS9pbmMtdmlld2ApO1xuICB9XG5cbiAgdXBkYXRlRGVmYXVsdFByaWNlKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJUGVyZm9ybWVyPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9wZXJmb3JtZXJzL2RlZmF1bHQtcHJpY2UvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVCcm9hZGNhc3RTZXR0aW5nKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvYnJvYWRjYXN0LXNldHRpbmcvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICBzdXNwZW5kQWNjb3VudChwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3BlcmZvcm1lcnMvc3VzcGVuZC1hY2NvdW50JywgeyBwYXNzd29yZCB9KTtcbiAgfVxuXG4gIGNoZWNrQmxvY2socGVyZm9ybWVySWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BlcmZvcm1lcnMvJHtwZXJmb3JtZXJJZH0vY2hlY2stYmxvY2tpbmdgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgR0VOTkRFUl9QRVJGT1JNRVIgPSBbJ2ZlbWFsZScsICd0cmFuc2dlbmRlcicsICdtYWxlJ107XG5cbmV4cG9ydCBjb25zdCBwZXJmb3JtZXJTZXJ2aWNlID0gbmV3IFBlcmZvcm1lclNlcnZpY2UoKTtcbiIsImltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNVcmwgfSBmcm9tICdAbGliL3N0cmluZyc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBUT0tFTiB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9hcGktcmVxdWVzdCc7XG5pbXBvcnQge1xuICBJUmVzcG9uc2UsXG4gIElQZXJmb3JtZXJQaG90b1BheWxvYWQsXG4gIElEYXRhUmVzcG9uc2UsXG4gIElQaG90b1xufSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBQaG90b1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPElSZXNwb25zZTxJRGF0YVJlc3BvbnNlPElQaG90bz4+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy9zZWFyY2gnLCBwYXJhbXMpXG4gICAgKTtcbiAgfVxuXG4gIHNlYXJjaEJ5R2FsbGVyeShcbiAgICBnYWxsZXJ5SWQ6IHN0cmluZyxcbiAgICBwYXJhbXM/OiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfSxcbiAgICBoZWFkZXJzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICApIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKFxuICAgICAgICBgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy9waG90b3MvJHtnYWxsZXJ5SWR9L3NlYXJjaGAsXG4gICAgICAgIHBhcmFtc1xuICAgICAgKSxcbiAgICAgIGhlYWRlcnNcbiAgICApO1xuICB9XG5cbiAgZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICBteVBob3RvcyhxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zL3NlYXJjaCcsIHF1ZXJ5KVxuICAgICk7XG4gIH1cblxuICByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmRlbChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Bob3Rvcy8ke2lkfWApO1xuICB9XG5cbiAgY3JlYXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGRhdGE6IElQZXJmb3JtZXJQaG90b1BheWxvYWQsXG4gICAgb3B0aW9uczogeyBvblByb2dyZXNzOiBGdW5jdGlvbiB9ID0ge1xuICAgICAgb25Qcm9ncmVzcygpIHt9XG4gICAgfVxuICApOiBQcm9taXNlPElSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHtcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmVxLnN0YXR1cyA+PSAyMDAgJiYgcmVxLnN0YXR1cyA8IDMwMDtcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gcmVxO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHJlcS5yZXNwb25zZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XG4gICAgICBpZiAoZGF0YS5waG90bykge1xuICAgICAgICBjb25zdCBwaG90byA9IGRhdGEucGhvdG8uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bob3RvJywgcGhvdG8sIHBob3RvLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsncGhvdG8nXSkpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUE9TVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogSVBlcmZvcm1lclBob3RvUGF5bG9hZCxcbiAgICBvcHRpb25zOiB7IG9uUHJvZ3Jlc3M6IEZ1bmN0aW9uIH0gPSB7XG4gICAgICBvblByb2dyZXNzKCkge31cbiAgICB9XG4gICk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgcGVyY2VudGFnZTogKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSByZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwO1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSByZXE7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcbiAgICAgIGlmIChkYXRhLnBob3RvICYmIGRhdGEucGhvdG8uZmlsZSkge1xuICAgICAgICBjb25zdCBwaG90byA9IGRhdGEucGhvdG8uZmlsZS5vcmlnaW5GaWxlT2JqO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bob3RvJywgcGhvdG8sIHBob3RvLm5hbWUpO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvbWl0KGRhdGEsIFsncGhvdG8nXSkpLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHYsIGRhdGFbdl0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICByZXEub3BlbignUFVUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwbG9hZEltYWdlcyhmaWxlOiBGaWxlLCBwYXlsb2FkOiBhbnksIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvbikge1xuICAgIHJldHVybiB0aGlzLnVwbG9hZChcbiAgICAgICcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvcGhvdG9zL3VwbG9hZCcsXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZG5hbWU6ICdwaG90bycsXG4gICAgICAgICAgZmlsZVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAge1xuICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICBjdXN0b21EYXRhOiBwYXlsb2FkXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGhvdG9TZXJ2aWNlID0gbmV3IFBob3RvU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSVBvc3RTZWFyY2ggfSBmcm9tICdzcmMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQb3N0U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocXVlcnk6IElQb3N0U2VhcmNoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wb3N0cy9zZWFyY2gnLCBxdWVyeSBhcyBhbnkpKTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9wb3N0cy8ke2lkfWApO1xuICB9XG5cbiAgY3JlYXRlQ29udGFjdENvdGVudChkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL2NvbnRhY3QnLCB7IC4uLmRhdGEgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBvc3RTZXJ2aWNlID0gbmV3IFBvc3RTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBkZXRhaWxzKGlkOiBzdHJpbmcsIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3Byb2R1Y3RzLyR7aWR9L3ZpZXdgLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy91c2VyL3BlcmZvcm1lci1hc3NldHMvcHJvZHVjdHMvc2VhcmNoJywgcGFyYW1zKSk7XG4gIH1cblxuICBwdXJjaGFzZWQocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcHVyY2hhc2VkLWl0ZW1zL3VzZXIvcHJvZHVjdHMnLCBwYXJhbXMpKTtcbiAgfVxuXG4gIGdldERvd25sb2FkTGluayhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlci9wZXJmb3JtZXItYXNzZXRzL3Byb2R1Y3RzLyR7aWR9L2Rvd25sb2FkLWxpbmtgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdFNlcnZpY2UgPSBuZXcgUHJvZHVjdFNlcnZpY2UoKTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuZXhwb3J0IGNsYXNzIFB1cmNoYXNlSXRlbVNlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9wdXJjaGFzZWQtaXRlbXMvdXNlci9zZWFyY2gnLCBxdWVyeSkpO1xuICB9XG5cbiAgcHVyY2hhc2VJdGVtKGlkOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgZGF0YT86IGFueSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wdXJjaGFzZS1pdGVtcy8ke3R5cGV9LyR7aWR9YCwgZGF0YSk7XG4gIH1cblxuICBwdXJjaGFzZVByb2R1Y3QoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9wdXJjaGFzZS1pdGVtcy9wcm9kdWN0LyR7aWR9YCk7XG4gIH1cblxuICBwdXJjaGFzZVZpZGVvKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvcHVyY2hhc2UtaXRlbXMvdmlkZW8vJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcHVyY2hhc2VJdGVtU2VydmljZSA9IG5ldyBQdXJjaGFzZUl0ZW1TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBSZWZ1bmRSZXF1ZXN0U2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9yZWZ1bmQtcmVxdWVzdHMnLCBkYXRhKTtcbiAgfVxuXG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9yZWZ1bmQtcmVxdWVzdHMvc2VhcmNoJywgcGFyYW1zKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZnVuZFJlcXVlc3RTZXJ2aWNlID0gbmV3IFJlZnVuZFJlcXVlc3RTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJU2V0dGluZywgSUNvdW50cmllcyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFQSVJlcXVlc3QsIElSZXNwb25zZSB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgYWxsKGdyb3VwID0gJycpOiBQcm9taXNlPElSZXNwb25zZTxJU2V0dGluZz4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3NldHRpbmdzL3B1YmxpYycsIHsgZ3JvdXAgfSkpO1xuICB9XG5cbiAgZ2V0Q291bnRyaWVzKCk6IFByb21pc2U8SVJlc3BvbnNlPElDb3VudHJpZXNbXT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9jb3VudHJpZXMvbGlzdCcpO1xuICB9XG5cbiAgZ2V0VGltZXpvbmVzKCk6IFByb21pc2U8SVJlc3BvbnNlPHN0cmluZ1tdPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3RpbWV6b25lcy9saXN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldHRpbmdTZXJ2aWNlID0gbmV3IFNldHRpbmdTZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJT25lVGltZVRva2VuLCBTdHJlYW1TZXR0aW5ncyB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGdldFJlc3BvbnNlRXJyb3IgfSBmcm9tICdzcmMvbGliJztcbmltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tICcuL2FwaS1yZXF1ZXN0JztcblxuY2xhc3MgU3RyZWFtU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBnZXRTZXNzaW9uSWQoaWQ6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvc3RyZWFtaW5nL3Nlc3Npb24vJHtpZH0vJHt0eXBlfWApO1xuICB9XG5cbiAgZ29MaXZlKCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHJlYW1pbmcvbGl2ZScpO1xuICB9XG5cbiAgam9pblB1YmxpY0NoYXQocGVyZm9ybWVySWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9zdHJlYW1pbmcvam9pbi8ke3BlcmZvcm1lcklkfWApO1xuICB9XG5cbiAgcmVxdWVzdFByaXZhdGVDaGF0KHBlcmZvcm1lcklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvc3RyZWFtaW5nL3ByaXZhdGUtY2hhdC8ke3BlcmZvcm1lcklkfWApO1xuICB9XG5cbiAgYWNjZXB0UHJpdmF0ZUNoYXQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmdldChgL3N0cmVhbWluZy9wcml2YXRlLWNoYXQvJHtpZH1gKTtcbiAgfVxuXG4gIHN0YXJ0R3JvdXBDaGF0KCkge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHJlYW1pbmcvZ3JvdXAtY2hhdCcpO1xuICB9XG5cbiAgam9pbkdyb3VwQ2hhdChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvc3RyZWFtaW5nL2dyb3VwLWNoYXQvJHtpZH1gKTtcbiAgfVxuXG4gIGdlbmVyYXRlT25lVGltZVRva2VuKGRhdGE6IElPbmVUaW1lVG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3RyZWFtaW5nL3Rva2VuJywgZGF0YSk7XG4gIH1cblxuICBhc3luYyBnZXRQdWJsaXNoVG9rZW4ob3B0aW9uczoge1xuICAgIHN0cmVhbUlkOiBzdHJpbmcsXG4gICAgc2V0dGluZ3M6IFN0cmVhbVNldHRpbmdzXG4gICAgfSwgZXhwaXJlRGF0ZSA9IG1vbWVudCgpLmFkZCgxLCAnZCcpLnRvRGF0ZSgpLmdldFRpbWUoKSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgc2V0dGluZ3MsIHN0cmVhbUlkIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgeyBzZWN1cmVPcHRpb24gfSA9IHNldHRpbmdzO1xuICAgICAgaWYgKHNlY3VyZU9wdGlvbikge1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5nZW5lcmF0ZU9uZVRpbWVUb2tlbih7XG4gICAgICAgICAgaWQ6IHN0cmVhbUlkLFxuICAgICAgICAgIHR5cGU6ICdwdWJsaXNoJyxcbiAgICAgICAgICBleHBpcmVEYXRlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcC5kYXRhLnRva2VuSWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoZXJyKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZ2V0UmVzcG9uc2VFcnJvcihlcnJvcikpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0U3Vic2NyaWJlclRva2VuKG9wdGlvbnM6IHtcbiAgICBzdHJlYW1JZDogc3RyaW5nLFxuICAgIHNldHRpbmdzOiBTdHJlYW1TZXR0aW5nc1xuICAgIH0sIGV4cGlyZURhdGUgPSBtb21lbnQoKS5hZGQoMSwgJ2QnKS50b0RhdGUoKS5nZXRUaW1lKCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHNldHRpbmdzLCBzdHJlYW1JZCB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IHsgc2VjdXJlT3B0aW9uIH0gPSBzZXR0aW5ncztcbiAgICAgIGlmIChzZWN1cmVPcHRpb24pIHtcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVPbmVUaW1lVG9rZW4oe1xuICAgICAgICAgIGlkOiBzdHJlYW1JZCxcbiAgICAgICAgICB0eXBlOiAncGxheScsXG4gICAgICAgICAgZXhwaXJlRGF0ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3AuZGF0YS50b2tlbklkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGVycik7XG4gICAgICBtZXNzYWdlLmVycm9yKGdldFJlc3BvbnNlRXJyb3IoZXJyb3IpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldExpdmVTdHJlYW1PclZvZFVSTChvcHRpb25zOiB7XG4gICAgc3RyZWFtSWQ6IHN0cmluZyxcbiAgICBzZXR0aW5nczogU3RyZWFtU2V0dGluZ3MsXG4gICAgYXBwTmFtZTogc3RyaW5nXG4gICAgfSwgZXhwaXJlRGF0ZSA9IG1vbWVudCgpLmFkZCgxLCAnZCcpLnRvRGF0ZSgpLmdldFRpbWUoKSwgX3BsYXllciA9ICdobHMnKSB7XG4gICAgLy8gaHR0cDovL1tJUF9BZGRyZXNzXS88QXBwbGljYXRpb25fTmFtZT4vc3RyZWFtcy9zdHJlYW1JRC5tcDQ/dG9rZW49dG9rZW5JZFxuICAgIC8vIGh0dHA6Ly9bSVBfQWRkcmVzc10vPEFwcGxpY2F0aW9uX05hbWU+L3N0cmVhbXMvc3RyZWFtSUQubTN1OD90b2tlbj10b2tlbklkXG4gICAgLy8gaHR0cDovL1tJUF9BZGRyZXNzXS88QXBwbGljYXRpb25fTmFtZT4vcGxheS5odG1sP25hbWU9c3RyZWFtSUQmcGxheU9yZGVyPWhscyZ0b2tlbj10b2tlbklkXG4gICAgdHJ5IHtcbiAgICAgIC8vIGNvbnN0IHNyYyA9IGBodHRwczovLyR7dmlld2VyVVJMfTo1NDQzLyR7YXBwTmFtZX0vc3RyZWFtcy8ke3N0cmVhbUlkfS5tM3U4JHtvbmVUaW1lVG9rZW4gPyBgP3Rva2VuPSR7b25lVGltZVRva2VufWAgOiAnJ31gO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICAgICAgY29uc3QgeyBhcHBOYW1lLCBzZXR0aW5ncywgc3RyZWFtSWQgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCB7IHNlY3VyZU9wdGlvbiwgdmlld2VyVVJMIH0gPSBzZXR0aW5ncztcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IF9wbGF5ZXIgPT09ICdobHMnID8gJ20zdTgnIDogJ21wNCc7XG4gICAgICBpZiAoIXZpZXdlclVSTCB8fCAhYXBwTmFtZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIGxldCBvbmVUaW1lVG9rZW4gPSAnJztcbiAgICAgIGlmIChzZWN1cmVPcHRpb24pIHtcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVPbmVUaW1lVG9rZW4oe1xuICAgICAgICAgIGlkOiBzdHJlYW1JZCxcbiAgICAgICAgICB0eXBlOiAncGxheScsXG4gICAgICAgICAgZXhwaXJlRGF0ZVxuICAgICAgICB9KTtcbiAgICAgICAgb25lVGltZVRva2VuID0gcmVzcC5kYXRhLnRva2VuSWQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcHJvdG9jb2wgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7dmlld2VyVVJMfS8ke2FwcE5hbWV9L3N0cmVhbXMvJHtzdHJlYW1JZH0uJHtleHRlbnNpb259JHtvbmVUaW1lVG9rZW4gPyBgP3Rva2VuPSR7b25lVGltZVRva2VufWAgOiAnJ31gO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoZXJyKTtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZ2V0UmVzcG9uc2VFcnJvcihlcnJvcikpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3RyZWFtU2VydmljZSA9IG5ldyBTdHJlYW1TZXJ2aWNlKCk7XG4iLCJpbXBvcnQgeyBJU3R1ZGlvIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCwgSVJlc3BvbnNlIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBTdHVkaW9TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIG1lKGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogUHJvbWlzZTxJUmVzcG9uc2U8SVN0dWRpbz4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zdHVkaW8vbWUnLCBoZWFkZXJzKTtcbiAgfVxuXG4gIHVwZGF0ZShwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoJy9zdHVkaW8vdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVQYXltZW50SW5mbyhwYXlsb2FkKTogUHJvbWlzZTxJUmVzcG9uc2U8SVN0dWRpbz4+IHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KCcvc3R1ZGlvL2JhbmstdHJhbnNmZXIvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVEaXJlY3REZXBvc3QocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0dWRpby9kaXJlY3QtZGVwb3NpdC91cGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHVwZGF0ZVBheHVtKHBheWxvYWQpOiBQcm9taXNlPElSZXNwb25zZTxJU3R1ZGlvPj4ge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9zdHVkaW8vcGF4dW0vdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICB1cGRhdGVCaXRwYXkocGF5bG9hZCk6IFByb21pc2U8SVJlc3BvbnNlPElTdHVkaW8+PiB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0dWRpby9iaXRwYXkvdXBkYXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRDb21taXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3NldHRpbmdzL3N0dWRpby9jb21taXNzaW9uJyk7XG4gIH1cblxuICBhZGRNb2RlbChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdCgnL3N0dWRpby9tZW1iZXJzJywgcGF5bG9hZCk7XG4gIH1cblxuICBnZXRNZW1iZXJzKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3N0dWRpby9tZW1iZXJzJywgcGFyYW1zKSk7XG4gIH1cblxuICBnZXRNZW1iZXJDb21taXNzaW9ucyhwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy9zdHVkaW8vY29tbWlzc2lvbicsIHBhcmFtcykpO1xuICB9XG5cbiAgdXBkYXRlTWVtYmVyQ29tbWlzc2lvbihpZDogc3RyaW5nLCBwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9zdHVkaW8vY29tbWlzc2lvbi9tZW1iZXIvJHtpZH1gLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGdldFBlcmZvcm1lclJlcXVlc3QocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChcbiAgICAgIHRoaXMuYnVpbGRVcmwoJy9wYXlvdXQtcmVxdWVzdHMvc3R1ZGlvL3BlcmZvcm1lci1yZXF1ZXN0JywgcGFyYW1zKVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVTdGF0dXNQZXJmb3JtZXJSZXF1ZXN0KGlkOiBzdHJpbmcsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoYC9wYXlvdXQtcmVxdWVzdHMvc3R1ZGlvL3VwZGF0ZS8ke2lkfWAsIHsgLi4ucGF5bG9hZCB9KTtcbiAgfVxuXG4gIHVwZGF0ZU1lbWJlclN0YXR1cyhpZDogc3RyaW5nLCBzdGF0dXM6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9zdHVkaW8vbWVtYmVycy8ke2lkfS8ke3N0YXR1c31gKTtcbiAgfVxuXG4gIHN0YXRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3N0dWRpby9zdGF0cycpO1xuICB9XG5cbiAgZ2V0RG9jdW1lbnRzVXBsb2FkVXJsKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS9zdHVkaW8vZG9jdW1lbnRzL3VwbG9hZGA7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0dWRpb1NlcnZpY2UgPSBuZXcgU3R1ZGlvU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5QYWNrYWdlU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBzZWFyY2gocGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmJ1aWxkVXJsKCcvcGFja2FnZS90b2tlbi9zZWFyY2gnLCBwYXJhbXMpKTtcbiAgfVxuXG4gIGJ1eVRva2VucyhpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdChgL3BheW1lbnQvcHVyY2hhc2UtdG9rZW5zLyR7aWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRva2VuUGFja2FnZVNlcnZpY2UgPSBuZXcgVG9rZW5QYWNrYWdlU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gJy4vYXBpLXJlcXVlc3QnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25TZXJ2aWNlIGV4dGVuZHMgQVBJUmVxdWVzdCB7XG4gIHNlYXJjaChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuYnVpbGRVcmwoJy90cmFuc2FjdGlvbnMvdXNlci9zZWFyY2gnLCBwYXJhbXMpKTtcbiAgfVxuXG4gIHNlbmRUaXBUb2tlbihwZXJmb3JtZXJJZDogc3RyaW5nLCB0b2tlbjogbnVtYmVyLCBjb252ZXJzYXRpb25JZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC9tZW1iZXIvc2VuZC10aXAtdG9rZW4vJHtwZXJmb3JtZXJJZH1gLCB7IHRva2VuLCBjb252ZXJzYXRpb25JZCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZW5kUGFpZFRva2VuKGNvbnZlcnNhdGlvbklkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0KGAvbWVtYmVyL3NlbmQtcGF5LXRva2VuLyR7Y29udmVyc2F0aW9uSWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRyYW5zYWN0aW9uU2VydmljZSA9IG5ldyBUcmFuc2FjdGlvblNlcnZpY2UoKTtcbiIsImltcG9ydCB7IElVc2VyIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCwgSVJlc3BvbnNlIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSBleHRlbmRzIEFQSVJlcXVlc3Qge1xuICBtZShoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IFByb21pc2U8SVJlc3BvbnNlPElVc2VyPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL3VzZXJzL21lJywgaGVhZGVycyk7XG4gIH1cblxuICB1cGRhdGVNZShwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5wdXQoJy91c2VycycsIHBheWxvYWQpO1xuICB9XG5cbiAgZ2V0QXZhdGFyVXBsb2FkVXJsKHVzZXJJZD86IHN0cmluZykge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS91c2Vycy8ke3VzZXJJZH0vYXZhdGFyL3VwbG9hZGA7XG4gICAgfVxuICAgIHJldHVybiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfS91c2Vycy9hdmF0YXIvdXBsb2FkYDtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5idWlsZFVybCgnL3VzZXJzL3NlYXJjaCcsIHF1ZXJ5KSk7XG4gIH1cblxuICBmaW5kQnlJZChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvdXNlcnMvdmlldy8ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZSgpO1xuIiwiaW1wb3J0IHsgSUNvdW50cnksIElMYW5nZ3VnZXMsIElQaG9uZUNvZGVzIH0gZnJvbSAnc3JjL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQVBJUmVxdWVzdCwgSVJlc3BvbnNlIH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBVdGlsc1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgY291bnRyaWVzTGlzdCgpOiBQcm9taXNlPElSZXNwb25zZTxJQ291bnRyeT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9jb3VudHJpZXMvbGlzdCcpO1xuICB9XG5cbiAgbGFuZ3VhZ2VzTGlzdCgpOiBQcm9taXNlPElSZXNwb25zZTxJTGFuZ2d1Z2VzPj4ge1xuICAgIHJldHVybiB0aGlzLmdldCgnL2xhbmd1YWdlcy9saXN0Jyk7XG4gIH1cblxuICBwaG9uZUNvZGVzTGlzdCgpOiBQcm9taXNlPElSZXNwb25zZTxJUGhvbmVDb2Rlcz4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9waG9uZS1jb2Rlcy9saXN0Jyk7XG4gIH1cblxuICBzdGF0aXN0aWNzKCk6IFByb21pc2U8SVJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJy9zdGF0aXN0aWNzL2FkbWluJyk7XG4gIH1cblxuICB2ZXJpZnlSZWNhcHRjaGEodG9rZW46IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoJy9yZS1jYXB0Y2hhL3ZlcmlmeScsIHsgdG9rZW4gfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHV0aWxzU2VydmljZSA9IG5ldyBVdGlsc1NlcnZpY2UoKTtcbiIsImltcG9ydCB7IElSZXNwb25zZSwgSVBlcmZvcm1lclZpZGVvUGF5bG9hZCB9IGZyb20gJ3NyYy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFRPS0VOIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2FwaS1yZXF1ZXN0JztcbmltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNVcmwgfSBmcm9tICdAbGliL3N0cmluZyc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSAnLi9hcGktcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBWaWRlb1NlcnZpY2UgZXh0ZW5kcyBBUElSZXF1ZXN0IHtcbiAgc2VhcmNoKHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvdXNlci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy9zZWFyY2gnLCBwYXJhbXMpXG4gICAgKTtcbiAgfVxuXG4gIHB1cmNoYXNlZChwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFxuICAgICAgdGhpcy5idWlsZFVybCgnL3B1cmNoYXNlZC1pdGVtcy91c2VyL3ZpZGVvcycsIHBhcmFtcylcbiAgICApO1xuICB9XG5cbiAgZGV0YWlscyhpZDogc3RyaW5nLCBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3BlcmZvcm1lci9wZXJmb3JtZXItYXNzZXRzL3ZpZGVvcy8ke2lkfS92aWV3YCwgaGVhZGVycyk7XG4gIH1cblxuICBteVZpZGVvcyhxdWVyeT86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXG4gICAgICB0aGlzLmJ1aWxkVXJsKCcvcGVyZm9ybWVyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zL3NlYXJjaCcsIHF1ZXJ5KVxuICAgICk7XG4gIH1cblxuICByZW1vdmVNeVZpZGVvKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kZWwoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHtpZH1gKTtcbiAgfVxuXG4gIGNyZWF0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJUGVyZm9ybWVyVmlkZW9QYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEudmlkZW8pIHtcbiAgICAgICAgY29uc3QgdmlkZW8gPSBkYXRhLnZpZGVvLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd2aWRlbycsIHZpZGVvLCB2aWRlby5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudHJhaWxlcikge1xuICAgICAgICBjb25zdCB0cmFpbGVyID0gZGF0YS50cmFpbGVyLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0cmFpbGVyJywgdHJhaWxlciwgdHJhaWxlci5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudGh1bWJuYWlsKSB7XG4gICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IGRhdGEudGh1bWJuYWlsLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0aHVtYm5haWwnLCB0aHVtYm5haWwsIHRodW1ibmFpbC5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ3ZpZGVvJywgJ3RodW1ibmFpbCcsICd0cmFpbGVyJ10pKS5mb3JFYWNoKFxuICAgICAgICAodikgPT4ge1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmVxLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHJlcS5vcGVuKCdQT1NUJywgaXNVcmwodXJsKSA/IHVybCA6IGAke2NvbmZpZy5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlR9JHt1cmx9YCk7XG5cbiAgICAgIGNvbnN0IHRva2VuOiBhbnkgPSBjb29raWUuZ2V0KFRPS0VOKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIHRva2VuKTtcbiAgICAgIH1cbiAgICAgIHJlcS5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBJUGVyZm9ybWVyVmlkZW9QYXlsb2FkLFxuICAgIG9wdGlvbnM6IHsgb25Qcm9ncmVzczogRnVuY3Rpb24gfSA9IHtcbiAgICAgIG9uUHJvZ3Jlc3MoKSB7fVxuICAgIH1cbiAgKTogUHJvbWlzZTxJUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldEdsb2JhbENvbmZpZygpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIG9wdGlvbnMub25Qcm9ncmVzcyh7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcS5zdGF0dXMgPj0gMjAwICYmIHJlcS5zdGF0dXMgPCAzMDA7XG4gICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHJlcTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlcS51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJlamVjdChyZXEucmVzcG9uc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgaWYgKGRhdGEudmlkZW8gJiYgZGF0YS52aWRlby5maWxlKSB7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gZGF0YS52aWRlby5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndmlkZW8nLCB2aWRlbywgdmlkZW8ubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRyYWlsZXIgJiYgZGF0YS50cmFpbGVyLmZpbGUpIHtcbiAgICAgICAgY29uc3QgdHJhaWxlciA9IGRhdGEudHJhaWxlci5maWxlLm9yaWdpbkZpbGVPYmo7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHJhaWxlcicsIHRyYWlsZXIsIHRyYWlsZXIubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRodW1ibmFpbCAmJiBkYXRhLnRodW1ibmFpbC5maWxlKSB7XG4gICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IGRhdGEudGh1bWJuYWlsLmZpbGUub3JpZ2luRmlsZU9iajtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0aHVtYm5haWwnLCB0aHVtYm5haWwsIHRodW1ibmFpbC5uYW1lKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob21pdChkYXRhLCBbJ3ZpZGVvJywgJ3RodW1ibmFpbCcsICd0cmFpbGVyJ10pKS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2LCBkYXRhW3ZdKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXEucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgcmVxLm9wZW4oJ1BVVCcsIGlzVXJsKHVybCkgPyB1cmwgOiBgJHtjb25maWcuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UfSR7dXJsfWApO1xuXG4gICAgICBjb25zdCB0b2tlbjogYW55ID0gY29va2llLmdldChUT0tFTik7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCB0b2tlbik7XG4gICAgICB9XG4gICAgICByZXEuc2VuZChmb3JtRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBpbmNyZWFzZVZpZXcoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnBvc3QoYC91c2VyL3BlcmZvcm1lci1hc3NldHMvdmlkZW9zLyR7aWR9L2luYy12aWV3YCk7XG4gIH1cblxuICAvLyB1cGRhdGUodmlkZW9JZCwgcGVyZm9ybWVySWQsIGRhdGEpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5wdXQoYC9wZXJmb3JtZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHt2aWRlb0lkfWAsIHtcbiAgLy8gICAgIC4uLmRhdGEsXG4gIC8vICAgICBwZXJmb3JtZXJJZFxuICAvLyAgIH0pO1xuICAvLyB9XG4gIHVzZXJGaW5kVmlkZW9CeUlkKGlkOiBzdHJpbmcsIGhlYWRlcnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3VzZXIvcGVyZm9ybWVyLWFzc2V0cy92aWRlb3MvJHtpZH1gLCBoZWFkZXJzKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdmlkZW9TZXJ2aWNlID0gbmV3IFZpZGVvU2VydmljZSgpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNvY2tldENvbnRleHQgfSBmcm9tICcuL1NvY2tldENvbnRleHQnO1xuaW1wb3J0IHsgd2FybmluZyB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgSUV2ZW50UHJvcHMge1xuICBldmVudDogc3RyaW5nO1xuICBoYW5kbGVyOiBGdW5jdGlvbjtcbn1cblxuY2xhc3MgRXZlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUV2ZW50UHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGV2ZW50LCBoYW5kbGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuY29udGV4dDtcblxuICAgIGlmICghc29ja2V0KSB7XG4gICAgICB3YXJuaW5nKCdTb2NrZXQgSU8gY29ubmVjdGlvbiBoYXMgbm90IGJlZW4gZXN0YWJsaXNoZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc29ja2V0Lm9uKGV2ZW50LCBoYW5kbGVyKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgZXZlbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc29ja2V0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgIHdhcm5pbmcoJ1NvY2tldCBJTyBjb25uZWN0aW9uIGhhcyBub3QgYmVlbiBlc3RhYmxpc2hlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzb2NrZXQub2ZmKGV2ZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuRXZlbnQuY29udGV4dFR5cGUgPSBTb2NrZXRDb250ZXh0O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU29ja2V0SU8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJ0BzZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJ0BzZXJ2aWNlcy9jb25maWcnO1xuaW1wb3J0IHsgd2FybmluZywgZGVidWcgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFNvY2tldENvbnRleHQgfSBmcm9tICcuL1NvY2tldENvbnRleHQnO1xuXG5pbnRlcmZhY2UgSVNvY2tldFByb3BzIHtcbiAgdXJpPzogc3RyaW5nO1xuICBjaGlsZHJlbjogYW55O1xuICBsb2dnZWRJbjogYm9vbGVhbjtcbn1cblxuY2xhc3MgU29ja2V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElTb2NrZXRQcm9wcz4ge1xuICBzb2NrZXQ7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jb25uZWN0KCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUobmV4dFByb3BzOiBhbnkpIHtcbiAgICBjb25zdCB7IGxvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChuZXh0UHJvcHMubG9nZ2VkSW4gIT09IGxvZ2dlZEluKSB7XG4gICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICB9XG5cbiAgY29ubmVjdCgpIHtcbiAgICBjb25zdCB7IGxvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRva2VuID0gbG9nZ2VkSW4gJiYgYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcbiAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgICBjb25zdCB7IHVyaSA9IGNvbmZpZy5ORVhUX1BVQkxJQ19TT0NLRVRfRU5EUE9JTlQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0JywgJ3BvbGxpbmcnLCAnbG9uZy1wb2xsaW5nJ10sXG4gICAgICBxdWVyeTogdG9rZW4gPyBgdG9rZW49JHt0b2tlbn1gIDogJydcbiAgICB9O1xuXG4gICAgdGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQuY2xvc2UoKTtcblxuICAgIHRoaXMuc29ja2V0ID0gU29ja2V0SU8odXJpLCB0aGlzLm1lcmdlT3B0aW9ucyhvcHRpb25zKSk7XG5cbiAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnaW5pdGlhbGl6ZWQnO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldC5zdGF0dXMgPSAnY29ubmVjdGVkJztcbiAgICAgIGRlYnVnKCdjb25uZWN0ZWQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2Rpc2Nvbm5lY3RlZCc7XG4gICAgICBkZWJ1ZygnZGlzY29ubmVjdCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2ZhaWxlZCc7XG4gICAgICB3YXJuaW5nKCdlcnJvcicsIGVycik7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0JywgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc29ja2V0LnN0YXR1cyA9ICdjb25uZWN0ZWQnO1xuICAgICAgZGVidWcoJ3JlY29ubmVjdCcsIGRhdGEpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdF9hdHRlbXB0JywgKCkgPT4ge1xuICAgICAgZGVidWcoJ3JlY29ubmVjdF9hdHRlbXB0Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0aW5nJywgKCkgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ3JlY29ubmVjdGluZyc7XG4gICAgICBkZWJ1ZygncmVjb25uZWN0aW5nJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0X2ZhaWxlZCcsIChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5zb2NrZXQuc3RhdHVzID0gJ2ZhaWxlZCc7XG4gICAgICB3YXJuaW5nKCdyZWNvbm5lY3RfZmFpbGVkJywgZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgbWVyZ2VPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgcmVjb25uZWN0aW9uOiB0cnVlLFxuICAgICAgcmVjb25uZWN0aW9uQXR0ZW1wdHM6IEluZmluaXR5LFxuICAgICAgcmVjb25uZWN0aW9uRGVsYXk6IDEgKiAxMDAwLFxuICAgICAgcmVjb25uZWN0aW9uRGVsYXlNYXg6IDUgKiAxMDAwLFxuICAgICAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gICAgICB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCcsICdwb2xsaW5nJywgJ2xvbmctcG9sbGluZyddLFxuICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4geyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTb2NrZXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnNvY2tldH0+XG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKX1cbiAgICAgIDwvU29ja2V0Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlcyA9IChzdGF0ZTogYW55KSA9PiAoe1xuICBsb2dnZWRJbjogc3RhdGUuYXV0aC5sb2dnZWRJblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVzKShTb2NrZXQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFNvY2tldENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PGFueT4oJ3NvY2tldCcpO1xuIiwiaW1wb3J0IFNvY2tldCBmcm9tICcuL1NvY2tldCc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudCc7XG5pbXBvcnQgeyBTb2NrZXRDb250ZXh0IH0gZnJvbSAnLi9Tb2NrZXRDb250ZXh0JztcblxuaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICBpZiAod2luZG93KSB3aW5kb3cuUmVhY3RTb2NrZXRJTyA9IHsgU29ja2V0LCBFdmVudCwgU29ja2V0Q29udGV4dCB9O1xufVxuXG5leHBvcnQgeyBTb2NrZXQsIEV2ZW50LCBTb2NrZXRDb250ZXh0IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItc3ByZWFkICovXG5cbmltcG9ydCB7IGdldEdsb2JhbENvbmZpZyB9IGZyb20gJ0BzZXJ2aWNlcy9jb25maWcnO1xuXG4vKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBjb25maWcgPSBnZXRHbG9iYWxDb25maWcoKTtcbiAgLy8gZGVidWcgb24gZGV2ZWxvcG1lbnQgYW5kIHN0YWdpbmcuXG4gIGlmIChjb25maWcuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykgcmV0dXJuO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cblxuICAgIHRocm93IG5ldyBFcnJvcihhcmdzLmpvaW4oJyAnKSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufTtcblxuZXhwb3J0IGNvbnN0IGRlYnVnID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgY29uZmlnID0gZ2V0R2xvYmFsQ29uZmlnKCk7XG4gIC8vIGRlYnVnIG9uIGRldmVsb3BtZW50IGFuZCBzdGFnaW5nLlxuICBpZiAoY29uZmlnLk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHJldHVybjtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZGVidWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmRlYnVnLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aC10by1yZWdleHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtYWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVzZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9